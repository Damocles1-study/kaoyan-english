/* 原卷句条「点词查有道」（2021 起）
 * 页面里不存原文文字：img/strip_boxes_<年>.js 只记每个词在句条图上的坐标框，
 * 点到哪个词，就由浏览器当场识别那一个（或拖选的几个）词，再交给有道。
 * 用法：页面末尾依次引入 img/strip_boxes_<年>.js 与本文件；句条图须为 <img class="strip">。
 *  · 点词 → 识别 → 弹出「查有道」（识别结果可改）
 *  · 鼠标按住从一个词拖到另一个词 → 查短语（可跨行）
 *  · 触屏：点词后按「＋后一词」把相邻词并进来
 *  · 原句条的「跳到 03 精析」改由句条右下角的小按钮承担
 */
(function(){
  'use strict';
  var BOX = window.STRIP_BOXES || {};
  var TESS_URL = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';

  var css = ''
    + '.swrap{position:relative;display:block;max-width:760px}'
    + '.swrap img.strip{width:100%;max-width:none;cursor:default;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}'
    + '.swrap.hot img.strip{cursor:pointer}'
    + '.swrap .wb{position:absolute;pointer-events:none;border-radius:3px}'
    + '.swrap .wb.hv{background:rgba(255,196,0,.22);box-shadow:0 0 0 1px rgba(200,140,0,.55)}'
    + '.swrap .wb.on{background:rgba(255,170,0,.38);box-shadow:0 0 0 1.5px #c87800}'
    + '.sgo{display:inline-block;margin:4px 0 0;padding:1px 9px;font-size:.72rem;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--accent);cursor:pointer}'
    + '#slk{position:absolute;z-index:70;display:none;background:var(--card);color:var(--ink);border:1px solid var(--accent);border-radius:10px;padding:8px;box-shadow:0 4px 18px rgba(0,0,0,.25);font-size:.82rem;max-width:calc(100vw - 24px)}'
    + '#slk .r{display:flex;gap:6px;align-items:center;flex-wrap:wrap}'
    + '#slk input{font:inherit;font-family:var(--serif,Georgia,serif);font-size:1rem;width:13em;max-width:60vw;padding:3px 6px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--ink)}'
    + '#slk button{font:inherit;border:none;border-radius:7px;padding:4px 10px;cursor:pointer}'
    + '#slk .go{background:var(--accent);color:#fff}'
    + '#slk .pl,#slk .x{background:var(--accent-soft);color:var(--accent)}'
    + '#slk .st{margin-top:5px;font-size:.72rem;color:var(--muted)}'
    + '@media (max-width:700px){.swrap{width:640px;max-width:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- 坐标框 ---------- */
  function keyOf(img){
    var s = img.getAttribute('src') || '';
    try{ s = decodeURIComponent(s); }catch(e){}
    return s.replace(/^\.\//,'').replace(/\?.*$/,'');
  }
  function parse(img){
    if (img._sb !== undefined) return img._sb;
    var raw = BOX[keyOf(img)];
    if (!raw){ img._sb = null; return null; }
    var p = raw.split('|'), wh = p[0].split(',');
    var bx = p[1] ? p[1].split(';').map(function(b){ return b.split(',').map(Number); }) : [];
    return (img._sb = {W:+wh[0], H:+wh[1], b:bx});
  }
  function hit(img, ev){
    var d = parse(img); if (!d) return -1;
    var r = img.getBoundingClientRect();
    var x = (ev.clientX - r.left) / r.width * d.W, y = (ev.clientY - r.top) / r.height * d.H;
    var best = -1, bd = 1e9;
    for (var i = 0; i < d.b.length; i++){
      var b = d.b[i];
      var dx = x < b[0] ? b[0]-x : (x > b[0]+b[2] ? x-b[0]-b[2] : 0);
      var dy = y < b[1]-4 ? b[1]-4-y : (y > b[1]+b[3]+4 ? y-b[1]-b[3]-4 : 0);
      var dd = dx*dx + dy*dy*4;
      if (dd < bd){ bd = dd; best = i; }
    }
    return bd <= 36 ? best : -1;  /* 词框外 6px 以内也算点中 */
  }
  function mark(wrap, img, a, b, cls){
    wrap.querySelectorAll('.wb.'+cls).forEach(function(n){ n.remove(); });
    if (a < 0) return;
    var d = parse(img), lo = Math.min(a,b), hi = Math.max(a,b);
    for (var i = lo; i <= hi; i++){
      var q = d.b[i], n = document.createElement('i');
      n.className = 'wb ' + cls;
      n.style.left = ((q[0]-3)/d.W*100)+'%'; n.style.top = ((q[1]-3)/d.H*100)+'%';
      n.style.width = ((q[2]+6)/d.W*100)+'%'; n.style.height = ((q[3]+6)/d.H*100)+'%';
      wrap.appendChild(n);
    }
  }

  /* ---------- 识别（tesseract.js，首次使用时从 CDN 载入，之后浏览器缓存） ---------- */
  var workerP = null;
  function getWorker(){
    if (workerP) return workerP;
    workerP = new Promise(function(res, rej){
      if (window.Tesseract) return res();
      var s = document.createElement('script'); s.src = TESS_URL;
      s.onload = function(){ res(); }; s.onerror = function(){ rej(new Error('net')); };
      document.head.appendChild(s);
    }).then(function(){
      return Tesseract.createWorker('eng', 1);
    }).then(function(w){
      return w.setParameters({tessedit_pageseg_mode:'7', preserve_interword_spaces:'0'}).then(function(){ return w; });
    });
    workerP.catch(function(){ workerP = null; });
    return workerP;
  }
  /* 把选中的词框横排拼成一行（跨行短语也拼成一行），留白边，交给识别 */
  function compose(img, lo, hi){
    var d = parse(img), sc = img.naturalWidth / d.W || 1, pad = 6, gap = 22, mar = 24;
    var hs = 0, ws = 0;
    for (var i = lo; i <= hi; i++){ hs = Math.max(hs, d.b[i][3]); ws += d.b[i][2] + 2*pad + (i>lo?gap:0); }
    var c = document.createElement('canvas');
    c.width = Math.round((ws + 2*mar) * sc); c.height = Math.round((hs + 2*pad + 2*mar) * sc);
    var g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0,0,c.width,c.height);
    var x = mar;
    for (var j = lo; j <= hi; j++){
      var b = d.b[j], dy = mar + (hs - b[3]);   /* 底对齐 */
      g.drawImage(img, (b[0]-pad)*sc, (b[1]-pad)*sc, (b[2]+2*pad)*sc, (b[3]+2*pad)*sc,
                  x*sc, dy*sc, (b[2]+2*pad)*sc, (b[3]+2*pad)*sc);
      x += b[2] + 2*pad + gap;
    }
    return c;
  }
  function clean(t){
    t = (t||'').replace(/[‘’ʼ`]/g,"'").replace(/[“”]/g,'"').replace(/\s+/g,' ').trim();
    t = t.replace(/(\w)-\s+(\w)/g,'$1$2');                 /* 行末连字符断词 */
    t = t.replace(/^[^A-Za-z\u00c0-\u017f]+/,'').replace(/[^A-Za-z\u00c0-\u017f]+$/,'');  /* 去掉首尾标点、空格号 */
    t = t.split(' ').map(function(w){ return (/[a-z]/.test(w.slice(1)) && /[A-Z]/.test(w.slice(1))) ? w[0] + w.slice(1).toLowerCase() : w; }).join(' ');
    return t;
  }
  var cache = {};

  /* ---------- 浮层 ---------- */
  var pan = document.createElement('div'); pan.id = 'slk';
  pan.innerHTML = '<div class="r"><input type="text" spellcheck="false" autocomplete="off" placeholder="识别中…">'
    + '<button class="go">查有道</button><button class="pl" title="把右边一个词并进来">＋后一词</button><button class="x">✕</button></div>'
    + '<div class="st"></div>';
  document.body.appendChild(pan);
  var inp = pan.querySelector('input'), stt = pan.querySelector('.st');
  var cur = null;  /* {img, wrap, a, b} */
  var seq = 0;

  function place(wrap, img, lo, hi){
    var d = parse(img), r = img.getBoundingClientRect(), q = d.b[hi];
    var px = r.left + (d.b[lo][0]/d.W)*r.width, py = r.top + ((q[1]+q[3])/d.H)*r.height;
    pan.style.display = 'block';
    var w = pan.offsetWidth;
    var left = Math.max(8, Math.min(px, document.documentElement.clientWidth - w - 8));
    pan.style.left = (left + window.scrollX) + 'px';
    pan.style.top = (py + window.scrollY + 8) + 'px';
  }
  function lookup(img, wrap, a, b, fx){
    var lo = Math.min(a,b), hi = Math.max(a,b), d = parse(img);
    cur = {img:img, wrap:wrap, a:lo, b:hi};
    document.querySelectorAll('.swrap .wb.on').forEach(function(n){ n.remove(); });
    mark(wrap, img, lo, hi, 'on');
    pan.querySelector('.pl').style.display = hi < d.b.length-1 ? '' : 'none';
    inp.value = ''; inp.placeholder = '识别中…'; stt.textContent = '';
    place(wrap, img, lo, hi);
    var k = keyOf(img)+'#'+lo+'-'+hi+(fx !== undefined ? '@'+Math.round(fx*4) : ''), my = ++seq;
    if (cache[k]){ done(cache[k]); return; }
    if (!img.complete || !img.naturalWidth){   /* 句条是 lazy 加载：图没到就先等它 */
      img.loading = 'eager';
      img.addEventListener('load', function(){ if (my === seq) lookup(img, wrap, lo, hi, fx); }, {once:true});
      return;
    }
    var c;
    try{ c = compose(img, lo, hi); c.getContext('2d').getImageData(0,0,1,1); }
    catch(e){ fail('本地 file:// 打开时浏览器不许读图，请在框里手动输入，或用本地服务器 / 网页版打开'); return; }
    stt.textContent = workerP ? '' : '首次使用要载入识别组件（约 3 MB，之后有缓存）…';
    var raw = '';
    getWorker().then(function(w){
      return w.recognize(c).then(function(r){
        raw = (r && r.data && r.data.text) || '';
        if (clean(raw) || lo !== hi || /\d/.test(raw) || parse(img).b[lo][2] > 30) return raw;
        /* 只给 a、I、an 这类窄框重试；重试出来超过 3 个字母的视为乱认 */
        /* 单个短词（如 a、I）整行模式常认空 → 换单词模式、单字符模式各试一次 */
        return w.setParameters({tessedit_pageseg_mode:'8'}).then(function(){ return w.recognize(c); })
          .then(function(r2){
            var t2 = (r2 && r2.data && r2.data.text) || '';
            if (clean(t2)) return clean(t2).length <= 3 ? t2 : raw;
            return w.setParameters({tessedit_pageseg_mode:'10'}).then(function(){ return w.recognize(c); })
              .then(function(r3){ var t3 = (r3 && r3.data && r3.data.text) || ''; return clean(t3).length <= 3 ? t3 : raw; });
          })
          .then(function(t){ return w.setParameters({tessedit_pageseg_mode:'7'}).then(function(){ return t; }); });
      });
    }).then(function(text){
      if (my !== seq) return;
      /* 单击一个框却认出几个词（破折号连写 X—Y，或两词间距太窄被切成一框）：按点击位置取对应那一个 */
      if (lo === hi && fx !== undefined){
        text = text.trim().replace(/\s*-\s*/g, '-');          /* 框内连字符两侧不该有空格 */
        var parts = text.split(/[\s\u2014\u2013]+/).filter(function(x){ return /[A-Za-z]/.test(x); });
        if (parts.length > 1){
          var tot = parts.join('').length || 1, acc = 0;
          for (var pi = 0; pi < parts.length; pi++){ acc += parts[pi].length; if (acc / tot >= fx || pi === parts.length-1){ text = parts[pi]; break; } }
        }
      }
      var t = clean(text);
      if (!t){ fail(/\d/.test(text) ? '这是数字 / 符号，不用查词' : '没认出来，请在框里手动输入'); return; }
      cache[k] = t; done(t);
    }).catch(function(){ if (my === seq) fail('识别组件载入失败（需联网），请在框里手动输入'); });
    function done(t){
      if (my !== seq) return;
      inp.value = t; inp.placeholder = ''; stt.textContent = '识别有误可直接改 · 回车也能查';
      if (!window.matchMedia || !matchMedia('(pointer:coarse)').matches){ inp.focus(); inp.setSelectionRange(t.length, t.length); }
    }
    function fail(msg){ if (my !== seq) return; inp.placeholder = '输入看到的词'; stt.textContent = msg; }
  }
  function hide(){
    pan.style.display = 'none'; cur = null; seq++;
    document.querySelectorAll('.swrap .wb.on').forEach(function(n){ n.remove(); });
  }
  function openYd(){
    var w = inp.value.trim(); if (!w) { inp.focus(); return; }
    var u = 'https://dict.youdao.com/result?word=' + encodeURIComponent(w) + '&lang=en';
    var win = null; try{ win = window.open(u, '_blank'); }catch(e){}
    if (!win) location.href = u;
  }
  pan.querySelector('.go').addEventListener('click', openYd);
  pan.querySelector('.x').addEventListener('click', hide);
  pan.querySelector('.pl').addEventListener('click', function(){
    if (cur) lookup(cur.img, cur.wrap, cur.a, cur.b + 1);
  });
  /* 浮层输入框里的选区别触发页面原有的划词「查有道」按钮 */
  document.addEventListener('selectionchange', function(){
    var yd = document.getElementById('yd');
    if (yd && document.activeElement === inp) yd.style.display = 'none';
  });
  inp.addEventListener('keydown', function(e){ if (e.key === 'Enter') openYd(); if (e.key === 'Escape') hide(); });
  document.addEventListener('pointerdown', function(e){
    if (pan.style.display === 'block' && !pan.contains(e.target) && !(e.target.closest && e.target.closest('.swrap'))) hide();
  });

  /* ---------- 挂到每张句条上 ---------- */
  function wrapOne(img){
    if (img._sw || !parse(img)) return;
    img._sw = 1; img.draggable = false;
    var wrap = document.createElement('span'); wrap.className = 'swrap';
    img.parentNode.insertBefore(wrap, img); wrap.appendChild(img);
    if (img.onclick){                       /* 原来「点句条跳 03」→ 改成角上的小按钮 */
      var fn = img.onclick, btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'sgo'; btn.textContent = img.getAttribute('data-sgo') || '↘ 跳到长难句精析';
      btn.addEventListener('click', function(ev){ fn.call(img, ev); });
      wrap.parentNode.insertBefore(btn, wrap.nextSibling);
      img.onclick = null; img.removeAttribute('onclick');
    }
    var dragA = -1, dragged = false;
    wrap.addEventListener('pointermove', function(e){
      if (e.pointerType !== 'mouse') return;
      var i = hit(img, e);
      wrap.classList.toggle('hot', i >= 0);
      if (dragA >= 0 && i >= 0){ if (i !== dragA) dragged = true; mark(wrap, img, dragA, i, 'on'); }
      else mark(wrap, img, i, i, 'hv');
      if (!workerP && i >= 0) getWorker().catch(function(){});   /* 悬停即预热 */
    });
    wrap.addEventListener('pointerleave', function(){ mark(wrap, img, -1, -1, 'hv'); wrap.classList.remove('hot'); });
    wrap.addEventListener('pointerdown', function(e){
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      dragA = hit(img, e); dragged = false;
      if (dragA >= 0) e.preventDefault();
    });
    window.addEventListener('pointerup', function(e){
      if (dragA < 0) return;
      var a = dragA; dragA = -1;
      if (dragged){
        var r = img.getBoundingClientRect();
        var b = (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) ? hit(img, e) : -1;
        if (b < 0 && cur && cur.img === img) b = cur.b;
        lookup(img, wrap, a, b < 0 ? a : b);
        wrap._skipClick = true;
      }
    });
    wrap.addEventListener('click', function(e){
      e.stopPropagation();
      if (wrap._skipClick){ wrap._skipClick = false; return; }
      var i = hit(img, e);
      if (i >= 0){
        var d = parse(img), r = img.getBoundingClientRect(), q = d.b[i];
        lookup(img, wrap, i, i, Math.max(0, Math.min(1, ((e.clientX - r.left) / r.width * d.W - q[0]) / q[2])));
      } else hide();
    }, true);
  }
  function scan(root){ (root.querySelectorAll ? root : document).querySelectorAll('img.strip').forEach(wrapOne); }
  scan(document);
  new MutationObserver(function(ms){
    ms.forEach(function(m){ m.addedNodes.forEach(function(n){
      if (n.nodeType !== 1) return;
      if (n.matches && n.matches('img.strip')) wrapOne(n); else scan(n);
    }); });
  }).observe(document.body, {childList:true, subtree:true});
})();
