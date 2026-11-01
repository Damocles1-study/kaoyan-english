/* 词卡辅助：
 * 1. 右栏词卡下方加牛津释义和权威词典外链（data_oxford.js 第一次要用时才加载）。
 * 2. 选项词汇点词不再直接开新标签，先在右栏词卡下方弹一个小块显示这里的意思，里面有跳转按钮。
 * 3. 跳到词库后有「回到原题」按钮，回来时滚动位置和展开状态都恢复。 */
(function(){
  var me = document.currentScript, base = me ? me.src.replace(/[^\/]*$/, '') : '';
  var BACK = 'eng_back_v1';
  var css = document.createElement('style');
  css.textContent =
    '.oxb{margin-top:10px;padding:9px 11px;border:1px solid var(--line,#ddd);border-radius:8px;font-size:.84rem;line-height:1.6}'
    + '.oxb h5{margin:0 0 3px;font-size:.72rem;letter-spacing:.06em;font-weight:700;color:var(--muted,#888)}'
    + '.oxb .sn{display:block;margin:1px 0}.oxb .none{color:var(--muted,#888)}'
    + '.oxl{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}.oxl a,.oxl button{font:inherit;font-size:.74rem;padding:1px 8px;border:1px solid var(--line,#ddd);border-radius:6px;color:var(--ink,#222);text-decoration:none;background:none;cursor:pointer;white-space:nowrap}.oxl a:hover,.oxl button:hover{border-color:var(--accent,#8b5e34);color:var(--accent,#8b5e34)}'
    + '.oxl .pri{background:var(--accent,#8b5e34);border-color:var(--accent,#8b5e34);color:var(--card,#fff)}.oxl .pri:hover{color:var(--card,#fff);filter:brightness(1.08)}'
    + '#wordAid{margin-top:10px;background:var(--card,#fff);border:2px solid var(--accent,#8b5e34);border-radius:12px;padding:11px 13px;font-size:.86rem;line-height:1.6}'
    + '#wordAid[hidden]{display:none}#wordAid .t{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}#wordAid .t b{font-family:var(--serif,Georgia,serif);font-size:1.12rem}#wordAid .t i{font-style:normal;color:var(--muted,#888);font-size:.76rem}'
    + '#wordAid .x{margin-left:auto;border:0;background:none;color:var(--muted,#888);cursor:pointer;font-size:.8rem}'
    + '#wordAid .h{font-weight:600;margin-top:4px}#wordAid .h em{font-style:normal;font-weight:400;font-size:.72rem;color:var(--muted,#888);margin-left:4px}'
    + '#wordAid .o{color:var(--ink,#222);margin-top:4px}#wordAid .o small{display:block;font-size:.7rem;color:var(--muted,#888);letter-spacing:.05em}'
    + '#wordAid .sn{display:block}#wordAid .pl{color:#b0413e;font-size:.74rem;font-weight:700}'
    + '@media (min-width:901px){aside{max-height:calc(100vh - 24px);overflow-y:auto;scrollbar-width:thin}}'
    + '@media (max-width:900px){#wordAid{box-shadow:0 -6px 24px rgba(0,0,0,.2);max-height:48vh;overflow-y:auto}}'
    + '.ovt td.w a.on{background:var(--accent-soft,#f3e9dd)}';
  document.head.appendChild(css);

  var oxfLoading = null;
  function oxf(cb){
    if (window.OXF) return cb(window.OXF);
    if (!oxfLoading) { oxfLoading = []; var s = document.createElement('script'); s.src = base + 'data_oxford.js?v=1'; s.onload = function(){ oxfLoading.forEach(function(f){ f(window.OXF); }); }; s.onerror = function(){ oxfLoading.forEach(function(f){ f(null); }); }; document.head.appendChild(s); }
    oxfLoading.push(cb);
  }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function norm(w){ return String(w||'').replace(/[（(].*$/,'').replace(/<[^>]+>/g,'').replace(/…/g,'').trim().toLowerCase(); }
  function look(O,w){
    if (!O) return null;
    var k = norm(w); if (O[k]) return O[k];
    var c = [k.replace(/ies$/,'y'),k.replace(/s$/,''),k.replace(/es$/,''),k.replace(/ed$/,''),k.replace(/ed$/,'e'),k.replace(/ing$/,''),k.replace(/ing$/,'e'),k.replace(/ied$/,'y'),k.replace(/ly$/,''),k.replace(/(.)\1(ed|ing)$/,'$1')];
    for (var i=0;i<c.length;i++) if (O[c[i]]) return O[c[i]];
    return null;
  }
  function links(w){
    var u = encodeURIComponent(norm(w).replace(/\s+/g,'-')), q = encodeURIComponent(norm(w));
    return '<a href="https://www.oxfordlearnersdictionaries.com/definition/english/'+u+'" target="_blank" rel="noopener">Oxford↗</a>'
      + '<a href="https://dictionary.cambridge.org/dictionary/english-chinese-simplified/'+u+'" target="_blank" rel="noopener">Cambridge↗</a>'
      + '<a href="https://dict.youdao.com/result?word='+q+'&lang=en" target="_blank" rel="noopener">有道↗</a>';
  }
  function senses(e){ return e[1].split(' ‖ ').map(function(s){ return '<span class="sn">'+esc(s)+'</span>'; }).join(''); }

  /* —— 词卡下方的牛津释义 —— */
  function fillCard(card){
    var wEl = card.querySelector('.w'); if (!wEl || card.querySelector('.oxb')) return;
    var w = wEl.textContent, box = document.createElement('div');
    box.className = 'oxb';
    box.innerHTML = '<h5>牛津英汉词典 · 通用义</h5><div class="ct"><span class="none">加载中…</span></div><div class="oxl">'+links(w)+'</div>';
    card.appendChild(box);
    oxf(function(O){
      var e = look(O,w);
      box.querySelector('.ct').innerHTML = e ? senses(e) : '<span class="none">词组或专名，本地牛津未单独收录，可点下面的词典查。</span>';
    });
  }
  var panel = document.getElementById('panel');
  if (panel) {
    new MutationObserver(function(){ panel.querySelectorAll('.wcard').forEach(fillCard); }).observe(panel,{childList:true,subtree:true});
    panel.querySelectorAll('.wcard').forEach(fillCard);
  }

  /* —— 右栏小块：选项词的意思 —— */
  var aid = null;
  function aidBox(){
    if (aid) return aid;
    var a = document.querySelector('aside'); if (!a) return null;
    aid = document.createElement('div'); aid.id = 'wordAid'; aid.hidden = true;
    a.appendChild(aid);
    aid.addEventListener('click',function(e){
      if (e.target.classList.contains('x')) { aid.hidden = true; }
      var c = e.target.getAttribute('data-card');
      if (c && window.showCard) window.showCard(c,null);
    });
    return aid;
  }
  function saveBack(qid,label){
    try { sessionStorage.setItem(BACK, JSON.stringify({url:location.pathname+location.search,y:window.scrollY,q:qid,label:label})); } catch(e){}
  }
  window.WordAid = {
    show:function(o){
      var b = aidBox(); if (!b) return;
      var card = null;
      try { if (typeof V !== 'undefined') Object.keys(V).some(function(k){ if (norm(V[k].w)===norm(o.lemma)||norm(V[k].w)===norm(o.word)) { card=k; return true; } }); } catch(e){}
      var pageName = decodeURIComponent(location.pathname.split('/').pop()).replace(/\.html$/,'').split('_').slice(0,2).join(' ');
      var label = pageName + (o.qid ? ' 第 '+o.qid.replace(/\D/g,'')+' 题' : '');
      var href = 'dummy';
      b.hidden = false;
      b.innerHTML = '<div class="t"><b>'+esc(o.word)+'</b>'+(o.ipa?'<i>'+esc(o.ipa)+'</i>':'')+(o.n>1?'<i>真题 '+o.n+' 篇</i>':'')+'<button class="x">关闭</button></div>'
        + (o.word.toLowerCase()!==o.lemma.toLowerCase()?'<div style="font-size:.74rem;color:var(--muted,#888)">原形 '+esc(o.lemma)+'</div>':'')
        + (o.here?'<div class="h">这里：'+o.here+'<em>本篇语境</em></div>':'')
        + (o.poly?'<div class="pl">⚠️ 本篇考的是熟词僻义</div>':'')
        + '<div class="o"><small>牛津英汉 · 通用义</small><span class="ct">'+esc(o.ox||'…')+'</span></div>'
        + '<div class="oxl">'+(card?'<button data-card="'+esc(card)+'">看本篇词卡</button>':'')
        + '<a class="pri go" href="'+esc(o.href)+'">词库完整卡片 →</a>'+links(o.lemma)+'</div>';
      b.querySelector('.go').addEventListener('click',function(){ saveBack(o.qid,label); });
      oxf(function(O){ var e = look(O,o.lemma)||look(O,o.word); if (e) b.querySelector('.ct').innerHTML = senses(e); });
      if (b.scrollIntoView) b.scrollIntoView({block:'nearest',behavior:'smooth'});
    }
  };

  /* —— 从词库回来：恢复位置 —— */
  function restore(){
    var r; try { r = JSON.parse(sessionStorage.getItem(BACK)); } catch(e){}
    if (!r || r.url !== location.pathname+location.search) return;
    if (r.q) { var q = document.getElementById(r.q), d = q && q.querySelector('.ovbox'); if (d) d.open = true; }
    var to = function(){ window.scrollTo({top:r.y||0,behavior:'instant'}); };
    to(); setTimeout(to,250); setTimeout(to,800);   // 新版外壳和懒加载图片会改变高度，多对齐两次
    try { sessionStorage.removeItem(BACK); } catch(e){}
  }
  window.addEventListener('load',function(){ setTimeout(restore,30); });
  window.addEventListener('pageshow',function(e){ if (e.persisted) restore(); });
})();
