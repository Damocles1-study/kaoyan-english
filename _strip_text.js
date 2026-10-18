/* 原卷句条 → 本机识别成网页文字（2021 起）
 * 页面里不存原文：打开页面时，由读者自己的浏览器把句条图识别成文字层，
 * 识别结果与读者的校对只存在这台设备（localStorage），下次打开直接显示。
 * 依赖：img/strip_boxes_<年>.js（词框坐标，用来逐词对齐、判断下划线）。
 * 用法：页面末尾在 _strip_lookup.js 之后引入本文件；句条须为 <img class="strip">。
 *  · 识别好的句子显示成正文：可选中、可页内查找；选中单词弹「查有道」
 *  · 句条下 🟡 行的词卡自动挂到正文对应的词上（挂不上的留在 🟡 行）
 *  · 每句末尾「原卷」切换回扫描图，「校对」可直接改字（只存本机）
 */
(function(){
  'use strict';
  var BOX = window.STRIP_BOXES || {};
  var TESS_URL = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
  var VER = 'stx5';

  var css = ''
    + '.stx{font-family:var(--serif,Georgia,serif);font-size:1.02rem;line-height:1.9;margin:4px 0 2px;overflow-wrap:anywhere}'
    + '.stx u{text-decoration-thickness:1px;text-underline-offset:3px}'
    + '.stx .tk{cursor:pointer}'
    + '.stx[contenteditable=true]{outline:2px dashed var(--accent,#c60);outline-offset:3px;border-radius:4px;background:var(--hl,#fff8e0)}'
    + '.stx-tools{display:inline-flex;gap:6px;margin-left:6px;vertical-align:middle;user-select:none;-webkit-user-select:none}'
    + '.stx-tools button{font-size:.66rem;line-height:1.5;padding:0 7px;border:1px solid var(--line,#ccc);border-radius:9px;background:none;color:var(--muted,#888);cursor:pointer;font-family:var(--sans,sans-serif)}'
    + '.stx-tools button:hover{color:var(--accent,#c60);border-color:var(--accent,#c60)}'
    + '.stx-on>.swrap,.stx-on>img.strip{display:none}'
    + '.stx-on.stx-img>.swrap,.stx-on.stx-img>img.strip{display:block}'
    + '.stx-on::after{display:none!important}'
    + '.stx-on.stx-img::after{display:block!important}'
    + '#stxbar{position:fixed;right:12px;bottom:12px;z-index:70;font-size:.75rem;padding:5px 12px;border-radius:14px;background:var(--card,#fff);color:var(--muted,#666);border:1px solid var(--line,#ccc);box-shadow:0 2px 10px rgba(0,0,0,.15);display:none;max-width:70vw}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var bar = document.createElement('div'); bar.id = 'stxbar'; document.body.appendChild(bar);
  function say(t, ms){ bar.textContent = t; bar.style.display = t ? 'block' : 'none'; if (ms) setTimeout(function(){ if (bar.textContent === t) bar.style.display = 'none'; }, ms); }

  function keyOf(src){
    try{ src = decodeURIComponent(src); }catch(e){}
    return src.replace(/^\.\//,'').replace(/\?.*$/,'');
  }
  function boxes(k){
    var raw = BOX[k]; if (!raw) return null;
    var p = raw.split('|'), wh = p[0].split(',');
    return {W:+wh[0], H:+wh[1], b: p[1] ? p[1].split(';').map(function(s){ return s.split(',').map(Number); }) : [], sig: raw.length};
  }
  function lsGet(k){ try{ var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; }catch(e){ return null; } }
  function lsSet(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  /* ---------- 识别引擎（独立 worker，整块模式） ---------- */
  var wP = null;
  function worker(){
    if (wP) return wP;
    wP = new Promise(function(res, rej){
      if (window.Tesseract) return res();
      var old = document.querySelector('script[src="' + TESS_URL + '"]');
      var s = old || document.createElement('script');
      var t = setInterval(function(){ if (window.Tesseract){ clearInterval(t); res(); } }, 200);
      s.addEventListener('error', function(){ clearInterval(t); rej(new Error('net')); });
      if (!old){ s.src = TESS_URL; document.head.appendChild(s); }
    }).then(function(){ return Tesseract.createWorker('eng', 1); })
      .then(function(w){ return w.setParameters({tessedit_pageseg_mode:'6', preserve_interword_spaces:'0'}).then(function(){ return w; }); });
    wP.catch(function(){ wP = null; });
    return wP;
  }
  function loadImg(src){
    return new Promise(function(res, rej){
      var im = new Image(); im.onload = function(){ res(im); }; im.onerror = rej; im.src = src;
    });
  }

  /* 识别一张句条 → [{t:词, u:是否下划线, l:行号}] */
  function recognize(src, d){
    return loadImg(src).then(function(im){
      var sc = im.naturalWidth / d.W, c = document.createElement('canvas');
      c.width = im.naturalWidth; c.height = im.naturalHeight;
      var g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0,0,c.width,c.height); g.drawImage(im, 0, 0);
      var px = g.getImageData(0, 0, c.width, c.height), a = px.data, W = c.width, H = c.height;
      var dark = function(x, y){ var i = (y*W + x)*4; return a[i] + a[i+1] + a[i+2] < 510; };
      /* 每行的横向墨线段：长度 ≥ 40px 的只可能是下划线（字母笔画、破折号都短于它） */
      var runs = [];
      for (var y = 0; y < H; y++){
        var x = 0;
        while (x < W){
          if (!dark(x, y)){ x++; continue; }
          var s0 = x; while (x < W && dark(x, y)) x++;
          if (x - s0 >= 20) runs.push([y, s0, x]);
        }
      }
      var lines = [];
      d.b.forEach(function(b){ if (lines.indexOf(b[1]) < 0) lines.push(b[1]); });
      /* 下划线：词框底部 12px 内有一段长墨线，且横跨这个词框的大部分 */
      var ul = d.b.map(function(b){
        var x0 = b[0]*sc, x1 = (b[0]+b[2])*sc, yb = (b[1]+b[3])*sc;
        return runs.some(function(r){
          if (r[0] < yb - 12*sc || r[0] > yb + 12*sc) return false;
          var ov = Math.min(r[2], x1) - Math.max(r[1], x0);
          return ov >= 0.7*(x1 - x0);
        });
      });
      /* 抹线：≥40px 的任何位置都抹；20–40px 的只在某个行带的底部区域才算下划线 */
      var bottoms = []; d.b.forEach(function(b){ var yb = (b[1]+b[3])*sc; if (bottoms.indexOf(yb) < 0) bottoms.push(yb); });
      runs = runs.filter(function(r){
        if (r[2] - r[1] >= 40) return true;
        return bottoms.some(function(yb){ return r[0] >= yb - 6*sc && r[0] <= yb + 12*sc; });
      });
      runs.forEach(function(r){
        for (var yy = r[0]-1; yy <= r[0]+1; yy++){
          if (yy < 0 || yy >= H) continue;
          for (var xx = r[1]; xx < r[2]; xx++){ var i = (yy*W + xx)*4; a[i] = a[i+1] = a[i+2] = 255; }
        }
      });
      g.putImageData(px, 0, 0);
      /* 放大 1.5 倍再识别（x 高约 14px → 21px，tesseract 认得更稳） */
      var S = 1.5, c2 = document.createElement('canvas');
      c2.width = Math.round(W*S); c2.height = Math.round(H*S);
      var g2 = c2.getContext('2d'); g2.fillStyle = '#fff'; g2.fillRect(0,0,c2.width,c2.height);
      g2.imageSmoothingQuality = 'high'; g2.drawImage(c, 0, 0, c2.width, c2.height);
      sc = sc * S; c = c2;
      return worker().then(function(w){
        return w.recognize(c, {}, {blocks:true}).then(function(r){
          var ws = [];
          (r.data.blocks || []).forEach(function(bl){ (bl.paragraphs || []).forEach(function(pa){ (pa.lines || []).forEach(function(li){ (li.words || []).forEach(function(wd){ ws.push(wd); }); }); }); });
          var used = ws.map(function(){ return false; });
          var out = d.b.map(function(b, k){
            var x0 = b[0]*sc, x1 = (b[0]+b[2])*sc, y0 = (b[1]-4)*sc, y1 = (b[1]+b[3]+4)*sc, hit = [], cover = false;
            ws.forEach(function(wd, j){
              var q = wd.bbox, cx = (q.x0+q.x1)/2, cy = (q.y0+q.y1)/2;
              if (cy < y0 || cy > y1) return;
              var ov = Math.min(q.x1, x1) - Math.max(q.x0, x0);
              if (cx >= x0-3 && cx <= x1+3){ if (!used[j]){ hit.push(wd); used[j] = true; } }
              else if (ov > 0.3*(x1-x0)) cover = true;
            });
            return {t: hit.map(function(wd){ return wd.text; }).join(' '), u: ul[k], l: lines.indexOf(b[1]), cover: cover, k: k};
          });
          /* 没对上任何词、也没被相邻词覆盖的框：单独裁出来按单词模式补认 */
          var miss = out.filter(function(o){ return !o.t && !o.cover; });
          var chain = Promise.resolve();
          if (miss.length){
            chain = w.setParameters({tessedit_pageseg_mode:'8'});
            miss.forEach(function(o){
              chain = chain.then(function(){
                var b = d.b[o.k], pad = 6, cc = document.createElement('canvas');
                cc.width = Math.round((b[2]+2*pad+40)*sc); cc.height = Math.round((b[3]+2*pad+40)*sc);
                var gg = cc.getContext('2d'); gg.fillStyle = '#fff'; gg.fillRect(0,0,cc.width,cc.height);
                gg.drawImage(c, (b[0]-pad)*sc, (b[1]-pad)*sc, (b[2]+2*pad)*sc, (b[3]+2*pad)*sc, 20*sc, 20*sc, (b[2]+2*pad)*sc, (b[3]+2*pad)*sc);
                return w.recognize(cc).then(function(r2){ o.t = ((r2.data && r2.data.text) || '').replace(/\s+/g,' ').trim(); });
              });
            });
            chain = chain.then(function(){ return w.setParameters({tessedit_pageseg_mode:'6'}); });
          }
          return chain.then(function(){ return tidy(out); });
        });
      });
    });
  }
  function fix(t){
    return t.replace(/[‘’ʼ`]/g, '’').replace(/''/g, '”').replace(/\s*[—–]{1,2}\s*/g, function(m){ return m.trim().length > 1 || /—/.test(m) ? '—' : '–'; })
            .replace(/^\|$/, 'I').replace(/^(?:\[I|I\]|\|I|I\||Il|lI|\[\])$/, 'II').replace(/\s+/g, ' ').trim();
  }
  function tidy(out){
    var r = [];
    out.forEach(function(o, i){
      if (!o.t) return;
      var t = fix(o.t), nx = out[i+1];
      var prev = r[r.length-1];
      /* 行末连字符断词：下一行行首小写则拼回 */
      if (prev && prev.join && prev.l !== o.l && /^[a-z]/.test(t)){ prev.t = prev.t.replace(/-$/, '') + t; prev.u = prev.u || o.u; prev.join = false; return; }
      /* 数字区间被词框切成两半（3% ｜ –5%）：同一行、前一个以数字或 % 结尾、这一个以破折号起头 ⟹ 拼回，破折号统一成 – */
      if (prev && prev.l === o.l && /[\d%]$/.test(prev.t) && /^[—–-]\d/.test(t)){ prev.t += '–' + t.slice(1); prev.u = prev.u && o.u; return; }
      r.push({t: t, u: o.u, l: o.l, join: /[A-Za-z]-$/.test(t) && (!nx || nx.l !== o.l)});
    });
    return r.map(function(o){ return {t: o.t, u: o.u}; });
  }

  /* ---------- 词卡挂靠 ---------- */
  function norm(w){ return w.toLowerCase().replace(/[’']/g, "'").replace(/^[^a-z0-9%]+|[^a-z0-9%]+$/g, ''); }
  function findPhrase(toks, phrase){
    var parts = phrase.split(/\s*(?:…|\.\.\.)\s*/).map(function(p){ return p.split(/\s+/).map(norm).filter(Boolean); }).filter(function(p){ return p.length; });
    if (!parts.length) return null;
    var tn = toks.map(function(o){ return norm(o.t); });
    for (var s = 0; s < tn.length; s++){
      var pos = s, ok = true, start = -1;
      for (var p = 0; p < parts.length && ok; p++){
        var found = -1, lim = p === 0 ? s : Math.min(tn.length - 1, pos + 6);
        for (var q = pos; q <= lim; q++){
          var m = true;
          for (var z = 0; z < parts[p].length; z++) if (tn[q+z] !== parts[p][z]){ m = false; break; }
          if (m){ found = q; break; }
        }
        if (found < 0) ok = false; else { if (start < 0) start = found; pos = found + parts[p].length; }
      }
      if (ok) return [start, pos - 1];
    }
    return null;
  }

  /* ---------- 渲染 ---------- */
  function render(host, toks, src){
    var kw = host.querySelector(':scope > .kw'), tk = [];
    if (kw) kw.querySelectorAll('.tk').forEach(function(s){
      if (s._stxHome === undefined) s._stxHome = true;
      var r = findPhrase(toks, s.textContent); if (r) tk.push({a: r[0], b: r[1], w: s.dataset.w, el: s});
    });
    tk.sort(function(x, y){ return x.a - y.a; });
    var taken = []; tk = tk.filter(function(x){ for (var i = x.a; i <= x.b; i++) if (taken[i]) return false; for (var j = x.a; j <= x.b; j++) taken[j] = true; return true; });
    var at = {}; tk.forEach(function(x){ at[x.a] = x; });
    var h = '', i = 0;
    while (i < toks.length){
      var x = at[i];
      if (x){
        h += '<span class="tk" data-w="' + x.w + '">';
        for (var j = x.a; j <= x.b; j++) h += piece(j, j < x.b);
        h += '</span>' + (x.b < toks.length - 1 ? ' ' : '');
        i = x.b + 1;
      } else { h += piece(i, false) + (i < toks.length - 1 ? ' ' : ''); i++; }
    }
    function piece(j, inner){
      var t = esc(toks[j].t), nu = inner && toks[j+1] && toks[j+1].u;
      return toks[j].u ? '<u>' + t + (nu ? ' ' : '') + '</u>' + (inner && !nu ? ' ' : '') : t + (inner ? ' ' : '');
    }
    var box = host.querySelector(':scope > .stx');
    if (!box){
      box = document.createElement('div'); box.className = 'stx'; box.lang = 'en';
      var anchor = host.querySelector(':scope > .swrap') || host.querySelector(':scope > img.strip');
      host.insertBefore(box, anchor);
    }
    box.innerHTML = h;
    var tools = document.createElement('span'); tools.className = 'stx-tools'; tools.contentEditable = 'false';
    tools.innerHTML = '<button type="button" class="b-img">原卷</button><button type="button" class="b-ed">校对</button>';
    box.appendChild(tools);
    box.querySelectorAll('.tk').forEach(function(s){
      s.addEventListener('click', function(e){ e.stopPropagation(); if (typeof window.showCard === 'function') window.showCard(s.dataset.w, s); });
    });
    tools.querySelector('.b-img').addEventListener('click', function(){
      var on = host.classList.toggle('stx-img'); this.textContent = on ? '收起原卷' : '原卷';
      var im = host.querySelector('img.strip'); if (on && im) im.loading = 'eager';
    });
    tools.querySelector('.b-ed').addEventListener('click', function(){ edit(host, box, toks, src, this); });
    host.classList.add('stx-on');
    /* 🟡 行：挂上正文的词卡收起来，挂不上的留下 */
    if (kw){
      var hit = tk.map(function(x){ return x.el; }), rest = [];
      kw.querySelectorAll('.tk').forEach(function(s){ if (hit.indexOf(s) < 0) rest.push(s); });
      if (!rest.length) kw.style.display = 'none';
      else {
        kw.style.display = '';
        while (kw.firstChild) kw.removeChild(kw.firstChild);
        kw.appendChild(document.createTextNode('🟡 '));
        rest.forEach(function(s, n){ if (n) kw.appendChild(document.createTextNode(' · ')); kw.appendChild(s); });
        hit.forEach(function(s){ s.style.display = 'none'; kw.appendChild(s); });
      }
    }
  }
  function edit(host, box, toks, src, btn){
    if (box.isContentEditable){
      box.contentEditable = 'false';
      var tools = box.querySelector('.stx-tools'); if (tools) tools.remove();
      var text = box.innerText.replace(/\s+/g, ' ').trim();
      var words = text.split(' ');
      var nt = words.map(function(w, i){ return {t: w, u: words.length === toks.length ? toks[i].u : false}; });
      lsSet(VER + 'e|' + keyOf(src), nt);
      document.querySelectorAll('img.strip').forEach(function(im){
        if (keyOf(im.getAttribute('src')) === keyOf(src)){ var hh = hostOf(im); if (hh) render(hh, nt, src); }
      });
      say('已保存校对（只存在这台设备）', 2500);
    } else {
      box.querySelectorAll('.tk').forEach(function(s){ s.replaceWith.apply(s, Array.prototype.slice.call(s.childNodes)); });
      box.contentEditable = 'true'; btn.textContent = '完成'; box.focus();
    }
  }
  function hostOf(img){ var w = img.closest('.swrap'); return (w || img).parentElement; }

  /* ---------- 调度：按页面顺序逐张识别，同一张图只认一次 ---------- */
  var imgs = Array.prototype.slice.call(document.querySelectorAll('img.strip'));
  var bySrc = {}, order = [];
  imgs.forEach(function(im){ var k = keyOf(im.getAttribute('src')); if (!boxes(k)) return; if (!bySrc[k]){ bySrc[k] = []; order.push(k); } bySrc[k].push(im); });
  if (!order.length) return;
  function apply(k, toks){ bySrc[k].forEach(function(im){ var h = hostOf(im); if (h) render(h, toks, im.getAttribute('src')); }); }
  var todo = [];
  order.forEach(function(k){
    var d = boxes(k), e = lsGet(VER + 'e|' + k), c = lsGet(VER + '|' + k + '|' + d.sig);
    if (e) apply(k, e); else if (c) apply(k, c); else todo.push(k);
  });
  if (!todo.length) return;
  if (location.protocol === 'file:'){ say('原文识别需要用网址打开（file:// 下浏览器不许读图），现显示原卷图片', 6000); return; }
  var n = 0;
  say('原文识别中 0/' + todo.length + '（首次要载入识别组件约 3 MB，之后有缓存）');
  todo.reduce(function(p, k){
    return p.then(function(){
      var d = boxes(k);
      return recognize(bySrc[k][0].getAttribute('src'), d).then(function(toks){
        if (toks.length){ lsSet(VER + '|' + k + '|' + d.sig, toks); apply(k, toks); }
        say('原文识别中 ' + (++n) + '/' + todo.length);
      });
    });
  }, Promise.resolve()).then(function(){ say('原文已识别完成（结果存在本机，下次打开直接显示）', 3000); })
    .catch(function(){ say('识别组件载入失败（需联网），暂时显示原卷图片', 6000); });
})();
