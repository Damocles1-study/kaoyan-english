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
  var VER = 'stx15';

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
    + '.stx .bk{display:inline-block;margin:0 2px}'
    + '.stx-blank{display:inline-block;padding:0 4px;margin:0 2px;border-bottom:1.5px solid currentColor;color:var(--accent,#c60);cursor:pointer;font-family:var(--sans,sans-serif);font-size:.85em}'
    /* 流式版（2023 起，body.stx-flow）：识别好的句子在段落里连排成一段文字，像 2007–2020 的页面；每句的「原卷/校对」收进页首总开关「原卷对照」 */
    + '.stx-flow .para .sn{margin:0}'
    + '.stx-flow .para .sn.stx-on{display:inline}'
    + '.stx-flow .para .sn.stx-on>.stx{display:inline;margin:0}'
    + '.stx-flow .para .sn.stx-on>.kw,.stx-flow .para .sn.stx-on>.sgo{display:none}'
    + '.stx-flow .stx-tools{display:none}'
    + '.stx-flow .stx.ls{border-bottom:none;text-decoration:underline dotted var(--blue,#36c) 2px;text-underline-offset:4px}'
    + '.stx-flow .kwrest{margin-top:6px;font-size:.85rem;line-height:2}'
    + '.stx-flow.stx-allimg .para .sn.stx-on{display:block;margin:0 0 12px}'
    + '.stx-flow.stx-allimg .stx-on>.swrap,.stx-flow.stx-allimg .stx-on>img.strip{display:block;margin-top:4px}'
    + '.stx-flow.stx-allimg .para .sn.stx-on>.stx{display:block}'
    + '.stx-flow.stx-allimg .stx-tools{display:inline-flex}'
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
      /* 空格线：框正下方（或框内底部）有一条短横线（35–160px），两端都没跑出框外 70px ⟹ 完形 __1__ 式的空格
         （整句连续的长下划线会远远超出数字两侧，不会误判） */
      var blk = d.b.map(function(b){
        var x0 = b[0]*sc, x1 = (b[0]+b[2])*sc, cx = (x0+x1)/2, yt = (b[1]+b[3]*0.3)*sc, yb = (b[1]+b[3])*sc;
        return runs.some(function(r){
          var L = r[2] - r[1];
          return r[0] >= yt && r[0] <= yb + 16*sc && L >= 35*sc && L <= 220*sc && r[1] <= cx && r[2] >= cx && r[1] >= x0 - 100*sc && r[2] <= x1 + 100*sc;
        });
      });
      /* 抹线：≥40px 的任何位置都抹；20–40px 的只在某个行带的底部区域才算下划线 */
      var bottoms = []; d.b.forEach(function(b){ var yb = (b[1]+b[3])*sc; if (bottoms.indexOf(yb) < 0) bottoms.push(yb); });
      runs = runs.filter(function(r){
        if (r[2] - r[1] >= 40) return true;
        if (r[2] - r[1] >= 35 && blk.some(function(v, k){ if (!v) return false; var b = d.b[k]; return r[0] >= b[1]*sc && r[0] <= (b[1]+b[3]+16)*sc && r[1] <= (b[0]+b[2])*sc && r[2] >= b[0]*sc; })) return true;
        return bottoms.some(function(yb){ return r[0] >= yb - 6*sc && r[0] <= yb + 12*sc; });
      });
      runs.forEach(function(r){
        for (var yy = r[0]-1; yy <= r[0]+1; yy++){
          if (yy < 0 || yy >= H) continue;
          for (var xx = r[1]; xx < r[2]; xx++){ var i = (yy*W + xx)*4; a[i] = a[i+1] = a[i+2] = 255; }
        }
      });
      g.putImageData(px, 0, 0);
      /* 抹完横线后几乎没墨的框（纯下划线、空格线）：不认 */
      var ink = d.b.map(function(b){ var n = 0, x0 = Math.round(b[0]*sc), x1 = Math.round((b[0]+b[2])*sc), y0 = Math.round(b[1]*sc), y1 = Math.round((b[1]+b[3])*sc); for (var y = y0; y < y1; y++) for (var x = x0; x < x1; x++) if (dark(x, y)) n++; return n; });
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
          /* 一个识别词横跨两个以上词框、且框间是正常词距（≥8px）⟹ tesseract 把两个词粘在一起了（Ferraro,an）：
             丢掉这个词，让它压着的框各自补认；框间距很小则是同一个词被词框切开（20｜12），保持合并 */
          var split = ws.map(function(wd){
            var q = wd.bbox, cy = (q.y0+q.y1)/2, L = [];
            d.b.forEach(function(b, k){
              var x0 = b[0]*sc, x1 = (b[0]+b[2])*sc, y0 = (b[1]-4)*sc, y1 = (b[1]+b[3]+4)*sc;
              if (cy < y0 || cy > y1) return;
              if (Math.min(q.x1, x1) - Math.max(q.x0, x0) > 0.6*(x1-x0)) L.push(k);
            });
            for (var i = 1; i < L.length; i++){ var p = d.b[L[i-1]], c2 = d.b[L[i]]; if (c2[0] - (p[0]+p[2]) >= 8) return true; }
            return false;
          });
          var used = ws.map(function(wd, j){ return split[j]; });
          var out = d.b.map(function(b, k){
            var x0 = b[0]*sc, x1 = (b[0]+b[2])*sc, y0 = (b[1]-4)*sc, y1 = (b[1]+b[3]+4)*sc, hit = [], cover = false;
            ws.forEach(function(wd, j){
              var q = wd.bbox, cx = (q.x0+q.x1)/2, cy = (q.y0+q.y1)/2;
              if (cy < y0 || cy > y1) return;
              var ov = Math.min(q.x1, x1) - Math.max(q.x0, x0);
              if (cx >= x0-3 && cx <= x1+3){ if (!used[j]){ hit.push(wd); used[j] = true; } }
              else if (ov > 0.6*(x1-x0) && !split[j]) cover = true;
            });
            return {t: hit.map(function(wd){ return wd.text; }).join(' '), u: ul[k], l: lines.indexOf(b[1]), cover: cover || ink[k] < 15, k: k, bw: b[2], blk: blk[k], x0: b[0], x1: b[0]+b[2]};
          });
          /* 窄框（a、I 一类）整行模式认成两个以上大写字母（2023 完形 a → KS）：当乱认，清空后一起补认 */
          function junk(o){ return o.bw <= 16 && /^[A-Z]{2,}$/.test(o.t.replace(/[^A-Za-z]/g, '')); }
          out.forEach(function(o){ if (o.t && junk(o)){ o.t = ''; o.cover = false; } });
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
                return w.recognize(cc).then(function(r2){
                  o.t = ((r2.data && r2.data.text) || '').replace(/\s+/g,' ').trim();
                  if (!junk(o)) return;
                  /* 窄框单词模式仍认成两个大写字母 ⟹ 换单字符模式（PSM 10）再认一次 */
                  return w.setParameters({tessedit_pageseg_mode:'10'}).then(function(){ return w.recognize(cc); })
                    .then(function(r3){ o.t = ((r3.data && r3.data.text) || '').replace(/\s+/g,' ').trim(); return w.setParameters({tessedit_pageseg_mode:'8'}); });
                });
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
    return t.replace(/[‘’ʼ`]/g, '’').replace(/^’\s*(?=[A-Za-z]{2,}[^’]*’[,.;:!?]?$)/, '‘')   /* ‘ speak’ 同框：开头那个是左引号 */
            .replace(/''/g, '”').replace(/\s*[—–]{1,2}\s*/g, function(m){ return m.trim().length > 1 || /—/.test(m) ? '—' : '–'; })
            .replace(/^(\(?)Al(\)?[,.;:!?’”]*)$/, '$1AI$2')   /* 衬线体的 AI 常被认成 Al（2023 翻译） */
            .replace(/\s+([,.;:!?])/g, '$1').replace(/([“(])\s+/g, '$1').replace(/\s+([”)])/g, '$1').replace(/^\|$/, 'I').replace(/^(?:\[I|I\]|\|I|I\||Il|lI|\[\])$/, 'II').replace(/\s+/g, ' ').trim();
  }
  function tidy(out){
    var r = [], carry = '';
    /* 只有页面上有空格按钮（完形 .bk）或作答槽（新题型 .slot）才识别空格；翻译页画线下的窄词 a 不能当空格（2023 翻译） */
    var BL = !!document.querySelector('.bk,.slot[data-n]');
    out.forEach(function(o, i){
      if (!o.t) return;
      if (!BL) o.blk = false;
      var t = carry + fix(o.t), nx = out[i+1]; carry = '';
      /* 单独的引号：后一个词以右引号收尾（‘ speak’），或离后一个词比离前一个词近 ⟹ 左引号（fix 把 ‘ 统一成了 ’，这里还原）：贴到下一个词上 */
      if (t === '’' && nx && nx.l === o.l && (/[’']$/.test(fix(nx.t || '')) || !out[i-1] || out[i-1].l !== o.l || o.x0 - out[i-1].x1 > nx.x0 - o.x1)){ carry = '‘'; return; }
      /* 单独的左引号、左括号：贴到下一个词上 */
      if (/^[“("]+$/.test(t)){ carry = t; return; }
      var prev = r[r.length-1];
      /* 行末连字符断词：下一行行首小写则拼回 */
      if (prev && prev.join && prev.l !== o.l && /^[a-z]/.test(t)){ prev.t = prev.t.replace(/-$/, '') + t; prev.u = prev.u || o.u; prev.join = false; return; }
      /* 数字区间被词框切成两半（3% ｜ –5%）：同一行、前一个以数字或 % 结尾、这一个以破折号起头 ⟹ 拼回，破折号统一成 – */
      if (prev && prev.bl === undefined && prev.l === o.l && /[\d%]$/.test(prev.t) && /^[—–-]\d/.test(t)){ prev.t += '–' + t.slice(1); prev.u = prev.u && o.u; return; }
      /* 空格：带下划线、框很宽（≥45px，真单词里的数字框只有二三十 px）的纯编号，如完形 __1__、新题型 “(41)＿＿” */
      if (o.blk && /^[“"(]?[0-9IlOoSBZ|]{1,2}[)”".,]?$/.test(t)) t = t.replace(/[Il|]/g, '1').replace(/[Oo]/g, '0').replace(/S/g, '5').replace(/B/g, '8').replace(/Z/g, '2');
      var bm = BL && ((o.u && o.bw >= 45) || o.blk) && t.match(/^([“"]?)\(?(\d{1,2})\)?([.,;:]?[”"]?)$/);
      /* 横线上方的窄框（≤20px，如被切成两半的 1｜1）认成什么都当空格；编号未知记 0，渲染时按先后配对 */
      if (!bm && o.blk && o.bw <= 20) bm = ['', '', '0', ''];
      if (bm){
        if (prev && prev.bl !== undefined && prev.l === o.l && o.x0 - prev.x1 <= 14){ if (+bm[2] && !prev.bl) prev.bl = +bm[2]; prev.x1 = o.x1; return; }
        r.push({t: t, u: false, l: o.l, bl: +bm[2], pre: bm[1], post: bm[3], x1: o.x1}); return;
      }
      /* 单独的标点贴到前一个词上 */
      if (prev && /^[.,;:!?”"’)]+$/.test(t)){ if (prev.bl !== undefined) prev.post = (prev.post || '') + t; else prev.t += t; return; }
      /* 标点后漏了空格（Ferraro,an）：英文词中不会出现「, ; : 紧跟字母」，从标点后拆开（7,468 这类数字不动） */
      var gm = t.match(/^(.*[A-Za-z’”)][,;:])([A-Za-z“(].*)$/);
      if (gm){ r.push({t: gm[1], u: o.u, l: o.l}); t = gm[2]; prev = r[r.length-1]; }
      /* 破折号连写：X— ｜ Y 或 X ｜ —Y 拼成 X—Y（原文破折号两侧不空格） */
      if (prev && prev.bl === undefined && (/—$/.test(prev.t) || /^—/.test(t))){ prev.t += t; prev.u = prev.u || o.u; return; }
      r.push({t: t, u: o.u, l: o.l, join: /[A-Za-z]-$/.test(t) && (!nx || nx.l !== o.l)});
    });
    return r.map(function(o){ return o.bl !== undefined ? {t: o.t, u: false, bl: o.bl, pre: o.pre, post: o.post} : {t: o.t, u: o.u}; });
  }

  /* ---------- 词卡挂靠 ---------- */
  function norm(w){ return w.toLowerCase().replace(/[’']/g, "'").replace(/^[^a-z0-9%]+|[^a-z0-9%]+$/g, ''); }
  /* 词卡上写原形、正文里是变形（impose → imposed · rely → relied · run → running） */
  function same(t, p){
    if (t === undefined) return false;
    if (t === p) return true;
    if (p.length < 3) return false;
    var base = /e$/.test(p) ? p.slice(0, -1) : /y$/.test(p) ? p.slice(0, -1) : p;
    return t.indexOf(base) === 0 && t.length - p.length <= 4 && t.length - p.length >= 0;
  }
  function findPhrase(toks, phrase){
    var parts = phrase.split(/\s*(?:…|\.\.\.)\s*/).map(function(p){ return p.split(/\s+/).map(norm).filter(Boolean); }).filter(function(p){ return p.length; });
    if (!parts.length) return null;
    var tn = toks.map(function(o){ return norm(o.t); });
    for (var s = 0; s < tn.length; s++){
      var pos = s, ok = true, start = -1;
      for (var p = 0; p < parts.length && ok; p++){
        var found = -1, lim = p === 0 ? s : Math.min(tn.length - 1, pos + 12);
        for (var q = pos; q <= lim; q++){
          var m = true;
          for (var z = 0; z < parts[p].length; z++) if (!same(tn[q+z], parts[p][z])){ m = false; break; }
          if (m){ found = q; break; }
        }
        if (found < 0) ok = false; else { if (start < 0) start = found; pos = found + parts[p].length; }
      }
      if (ok) return [start, pos - 1];
    }
    return null;
  }

  /* ---------- 渲染 ---------- */
  /* 本句的空格编号（按先后）：本宿主有空格按钮行就取它；没有（如长难句节复用的同一张句条）就借正文区同一张图的 */
  function bkNums(host, src){
    var h = host.querySelector(':scope > .bkrow') ? host : null;
    if (!h) Array.prototype.some.call(document.querySelectorAll('img.strip'), function(im){
      if (keyOf(im.getAttribute('src')) !== keyOf(src)) return false;
      var hh = hostOf(im); if (hh && hh.querySelector(':scope > .bkrow')){ h = hh; return true; } return false;
    });
    return h ? Array.prototype.map.call(h.querySelectorAll('.bk'), function(b){ return +b.dataset.n; }) : [];
  }
  function render(host, toks, src){
    /* 新题型：括号编号 (41) 且页面上有对应作答槽 ⟹ 空格（横线在编号右边，空格线判定认不出） */
    var slots = Array.prototype.map.call(document.querySelectorAll('.slot[data-n]'), function(e){ return +e.dataset.n; });
    if (slots.length){
      toks = toks.map(function(o){ return JSON.parse(JSON.stringify(o)); });
      toks.forEach(function(o, i){
        if (o.bl !== undefined || !o.t) return;
        var m = o.t.replace(/\s+/g, '').match(/^([“"]?)\(?(\d{2})\)([.,;:]?[”"]?)$/);
        if (m && slots.indexOf(+m[2]) >= 0){ o.bl = +m[2]; o.pre = m[1]; o.post = m[3]; o.u = false; return; }
        var nx = toks[i+1], pv = toks[i-1];
        var bq = o.t.match(/^([“"]?)(\d{2})$/);
        if (bq && slots.indexOf(+bq[2]) >= 0 && ((nx && /^\)/.test(nx.t)) || (pv && /\($/.test(pv.t)))){
          o.bl = +bq[2]; o.u = false; o.pre = bq[1]; o.post = '';
          if (nx && /^\)/.test(nx.t)){ o.post = nx.t.slice(1); nx.t = ''; }
          if (pv && /\($/.test(pv.t)){ pv.t = pv.t.slice(0, -1); if (pv.t === '“' || pv.t === '"'){ o.pre = pv.t; pv.t = ''; } }
        }
      });
      toks = toks.filter(function(o){ return o.bl !== undefined || o.t; });
    }
    var nums = bkNums(host, src);
    if (nums.length){
      var have = toks.filter(function(o){ return o.bl; }).map(function(o){ return o.bl; });  /* 0（编号未知）不占号 */
      toks = toks.map(function(o){
        var tt = o.bl !== undefined ? '' : o.t.replace(/^([“"(]?)[Il|]{2}(?=[)”".,;:]*$)/, '$111');
        var m = o.bl === undefined && tt.match(/^([“"]?)\(?(\d{1,2})\)?([.,;:]?[”"]?)$/);
        if (m && nums.indexOf(+m[2]) >= 0 && have.indexOf(+m[2]) < 0){ have.push(+m[2]); return {t: o.t, u: false, bl: +m[2], pre: m[1], post: m[3]}; }
        return o;
      });
    }
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
      if (toks[j].bl !== undefined) return esc(toks[j].pre || '') + '<span class="stx-bk" data-n="' + toks[j].bl + '"></span>' + esc(toks[j].post || '') + (inner ? ' ' : '');
      var t = esc(toks[j].t), nu = inner && toks[j+1] && toks[j+1].u;
      return toks[j].u ? '<u>' + t + (nu ? ' ' : '') + '</u>' + (inner && !nu ? ' ' : '') : t + (inner ? ' ' : '');
    }
    var box = host.querySelector(':scope > .stx');
    if (!box){
      box = document.createElement('div'); box.className = 'stx'; box.lang = 'en';
      var anchor = host.querySelector(':scope > .swrap') || host.querySelector(':scope > img.strip');
      host.insertBefore(box, anchor);
    }
    var bkrow = host.querySelector(':scope > .bkrow');
    box.querySelectorAll('.bk').forEach(function(b){ if (bkrow) bkrow.appendChild(b); });
    box.innerHTML = h;
    var phs = Array.prototype.slice.call(box.querySelectorAll('.stx-bk'));
    /* 先按编号对，再把没对上的按先后顺序配给本句空格行里剩下的按钮（认错数字也不怕） */
    phs = phs.filter(function(ph){ var bk = bkrow && bkrow.querySelector('.bk[data-n="' + ph.dataset.n + '"]'); if (bk){ ph.replaceWith(bk); return false; } return true; });
    phs = phs.filter(function(ph){ var bk = bkrow && bkrow.querySelector('.bk'); if (bk){ ph.replaceWith(bk); return false; } return true; });
    var used = Array.prototype.map.call(box.querySelectorAll('.bk'), function(b){ return +b.dataset.n; });
    var spare = nums.filter(function(x){ return used.indexOf(x) < 0; });
    var allPh = Array.prototype.slice.call(box.querySelectorAll('.stx-bk'));
    phs.forEach(function(ph){
      var n = (!bkrow && nums.length === allPh.length) ? nums[allPh.indexOf(ph)] : (bkrow ? ph.dataset.n : (spare.shift() || ph.dataset.n));
      var a = document.createElement('span'); a.className = 'stx-blank'; a.textContent = '(' + n + ') ＿＿＿';
      var slot = document.querySelector('.slot[data-n="' + n + '"]');
      if (slot) a.addEventListener('click', function(){ slot.scrollIntoView({behavior:'smooth', block:'center'}); });
      ph.replaceWith(a);
    });
    if (bkrow) bkrow.style.display = bkrow.querySelector('.bk') ? '' : 'none';
    var FLOW = document.body.classList.contains('stx-flow');
    if (FLOW && host.dataset.go){
      box.classList.add('ls');
      box.onclick = function(e){ if (box.isContentEditable || e.target.closest('.tk,.stx-tools') || String(window.getSelection() || '')) return; if (typeof window.go === 'function') window.go(host.dataset.go); };
    }
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
      var para = FLOW && host.closest('.para');
      if (para){
        var hid = host._stxId || (host._stxId = 'h' + Math.random().toString(36).slice(2, 8));
        para.querySelectorAll('.kwrest [data-host="' + hid + '"]').forEach(function(e){ e.remove(); });
        if (rest.length){
          var line = para.querySelector('.kwrest');
          if (!line){ line = document.createElement('div'); line.className = 'kwrest'; line.textContent = '🟡 '; para.appendChild(line); }
          rest.forEach(function(s){
            var c = s.cloneNode(true); c.dataset.host = hid; c.style.display = ''; c.style.marginRight = '8px';
            c.addEventListener('click', function(e){ e.stopPropagation(); if (typeof window.showCard === 'function') window.showCard(c.dataset.w, c); });
            line.appendChild(c);
          });
        }
      }
    }
  }
  function edit(host, box, toks, src, btn){
    if (box.isContentEditable){
      box.contentEditable = 'false';
      var tools = box.querySelector('.stx-tools'); if (tools) tools.remove();
      var text = box.innerText.replace(/\s+/g, ' ').trim();
      var words = text.split(' ');
      var same = words.length === toks.length;
      var nt = words.map(function(w, i){ var o = same ? JSON.parse(JSON.stringify(toks[i])) : {u: false}; o.t = w; return o; });
      lsSet(VER + 'e|' + keyOf(src), nt);
      document.querySelectorAll('img.strip').forEach(function(im){
        if (keyOf(im.getAttribute('src')) === keyOf(src)){ var hh = hostOf(im); if (hh) render(hh, nt, src); }
      });
      say('已保存校对（只存在这台设备）', 2500);
    } else {
      box.querySelectorAll('.tk').forEach(function(s){ s.replaceWith.apply(s, Array.prototype.slice.call(s.childNodes)); });
      var row = host.querySelector(':scope > .bkrow');
      box.querySelectorAll('.bk,.stx-blank').forEach(function(b){
        var num = b.classList.contains('bk') ? b.dataset.n : b.textContent.replace(/[^0-9]/g, '');
        b.parentNode.insertBefore(document.createTextNode(num), b);
        if (b.classList.contains('bk') && row) row.appendChild(b); else b.remove();
      });
      box.contentEditable = 'true'; btn.textContent = '完成'; box.focus();
    }
  }
  function hostOf(img){ var w = img.closest('.swrap'); return (w || img).parentElement; }

  /* ---------- 调度：按页面顺序逐张识别，同一张图只认一次；之后动态插入的句条（新题型作答槽）也接着处理 ---------- */
  var bySrc = {}, queue = [], busy = false, total = 0, n = 0, failed = false;
  function cached(k){ var d = boxes(k); return lsGet(VER + 'e|' + k) || lsGet(VER + '|' + k + '|' + d.sig); }
  function attach(im){
    var k = keyOf(im.getAttribute('src') || ''); if (!boxes(k) || im._stx) return;
    im._stx = 1;
    var c = cached(k);
    if (c){ var h = hostOf(im); if (h) render(h, c, im.getAttribute('src')); return; }
    if (!bySrc[k]){ bySrc[k] = []; queue.push(k); total++; }
    bySrc[k].push(im);
    pump();
  }
  function apply(k, toks){ (bySrc[k] || []).forEach(function(im){ var h = hostOf(im); if (h && im.isConnected) render(h, toks, im.getAttribute('src')); }); }
  function pump(){
    if (busy || failed || !queue.length) return;
    if (location.protocol === 'file:'){ say('原文识别需要用网址打开（file:// 下浏览器不许读图），现显示原卷图片', 6000); failed = true; return; }
    busy = true;
    var k = queue.shift(), d = boxes(k);
    say('原文识别中 ' + n + '/' + total + (n ? '' : '（首次要载入识别组件约 3 MB，之后有缓存）'));
    recognize(bySrc[k][0].getAttribute('src'), d).then(function(toks){
      if (toks.length){ lsSet(VER + '|' + k + '|' + d.sig, toks); apply(k, toks); }
      n++; busy = false;
      if (queue.length) pump(); else say('原文已识别完成（结果存在本机，下次打开直接显示）', 3000);
    }).catch(function(){ busy = false; failed = true; say('识别组件载入失败（需联网），暂时显示原卷图片', 6000); });
  }
  Array.prototype.forEach.call(document.querySelectorAll('img.strip'), attach);
  new MutationObserver(function(ms){
    ms.forEach(function(m){ m.addedNodes.forEach(function(nd){
      if (nd.nodeType !== 1) return;
      if (nd.matches && nd.matches('img.strip')) attach(nd);
      else if (nd.querySelectorAll) Array.prototype.forEach.call(nd.querySelectorAll('img.strip'), attach);
    }); });
  }).observe(document.body, {childList: true, subtree: true});
})();
