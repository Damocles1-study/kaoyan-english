/* 新版页面外壳：顶栏、分区切换、评级、闲置区。页面内容和原来的交互都不动 */
(function(){
  var name = decodeURIComponent(location.pathname.split('/').pop()).replace(/\.html$/,'');
  var p = name.split('_'), Y = +p[0], K = p[1], key = Y+'_'+K;
  var ORDER = ['T1','T2','T3','T4','完形','新题型','翻译','作文'], LB = {T1:'Text 1',T2:'Text 2',T3:'Text 3',T4:'Text 4',完形:'完形',新题型:'新题型',翻译:'翻译',作文:'作文'};
  var V = window.VALUE||{}, cur = V[key];
  function go(y,k){ var e = V[y+'_'+k]; return e ? e[2]+'.html' : ''; }
  var GROUP = [['read',/读前|原文|导读|素读|完形正文|复原后|开考|五段正文|六段正文|段正文|选项（A|个标题|个小标题|段选项|段选/],
    ['test',/题目与解析|逐空精解|逐句五步|链条作答|多余项|小作文|大作文|Part A|Part B|审题/],
    ['vocab',/词汇|词卡|词速查|固定搭配|熟词僻义/],['mat',/可搬|素材|写作|框架|自查|表达/]];
  function groupOf(t){
    for (var i=0;i<GROUP.length;i++) if (GROUP[i][1].test(t)) return GROUP[i][0];
    return 'rev';
  }
  var GN = {all:'全部',read:'读原文',test:K==='作文'?'写作':K==='翻译'?'逐句翻译':'做题',rev:'复盘',vocab:'词汇',mat:'素材'};
  var main = document.querySelector('main'), wrap = document.querySelector('.wrap'), header = document.querySelector('header');
  var secs = [].slice.call(document.querySelectorAll('section.card'));
  var counts = {};
  secs.forEach(function(s){
    var h = s.querySelector('h2'); if (!h) { s.dataset.g='rev'; return; }
    var g = groupOf(h.textContent); s.dataset.g=g; counts[g]=(counts[g]||0)+1;
  });
  /* 顶栏 */
  var bar = document.createElement('div'); bar.className='v2bar';
  var idx = ORDER.indexOf(K), prevK = go(Y,ORDER[idx-1]), nextK = go(Y,ORDER[idx+1]);
  var sib = ORDER.map(function(k){ var u=go(Y,k); return u?'<a class="'+(k===K?'cur':'')+'" href="'+u+'">'+LB[k]+'</a>':''; }).join('');
  var tabs = ['all','read','test','rev','vocab','mat'].filter(function(g){ return g==='all'||counts[g]; }).map(function(g){ return '<button data-g="'+g+'">'+GN[g]+'</button>'; }).join('');
  bar.innerHTML = '<div class="v2t"><a class="home" href="index.html">英语一 · 新版</a><span class="crumb">'+Y+' · '+LB[K]+' · '+p.slice(2).join('_')+'</span>'
    + '<span class="pn">'+(go(Y-1,K)?'<a href="'+go(Y-1,K)+'">'+(Y-1)+'</a>':'')+(go(Y+1,K)?'<a href="'+go(Y+1,K)+'">'+(Y+1)+'</a>':'')+'<button class="v2tocb" type="button">目录</button></span></div>'
    + '<div class="v2n">'+tabs+'<span class="sep"></span>'+sib+'</div><div id="v2prog"></div><div class="v2toc"></div>';
  wrap.insertBefore(bar, wrap.firstChild);
  var LS='eng_v2_tab'; var cg='all';
  function show(g,noScroll){
    cg=g;
    secs.forEach(function(s){ s.classList.toggle('v2hide', g!=='all' && s.dataset.g!==g); });
    bar.querySelectorAll('[data-g]').forEach(function(b){ b.classList.toggle('on', b.dataset.g===g); });
    if (!noScroll) {
      window.scrollTo({top:Math.min(window.scrollY,(document.querySelector('.layout')||main).offsetTop-96),behavior:'instant'});
      if (window.ENGV2) ENGV2.tabFx(main,g);
    }
    if (window.ENGV2) setTimeout(ENGV2.measure,30);
  }
  bar.addEventListener('click',function(e){ var b=e.target.closest('[data-g]'); if(b) show(b.dataset.g); });
  show('all',true);
  /* 每一部分开头打一行小标题，长页读到哪一目了然 */
  var seen={};
  secs.forEach(function(s){ var g=s.dataset.g; if(!seen[g]){ seen[g]=1; s.dataset.kickG=g; } });
  /* 目录 */
  var toc=bar.querySelector('.v2toc');
  function drawToc(){
    var html='',lg='';
    secs.forEach(function(s,i){ var h=s.querySelector('h2'); if(!h) return; if(!s.id) s.id='sec'+i; var t=h.textContent.replace(/全文(译文|意译)\s*开\/关.*/,'').replace(/^\s*\d*\+*/,'').replace(/（.*/,'').trim();
      if(s.dataset.g!==lg){ lg=s.dataset.g; html+='<i>'+GN[lg]+'</i>'; }
      html+='<a href="#'+s.id+'">'+t+'</a>'; });
    toc.innerHTML=html;
  }
  bar.querySelector('.v2tocb').addEventListener('click',function(e){ e.stopPropagation(); drawToc(); toc.classList.toggle('op'); });
  document.addEventListener('click',function(e){ if(!e.target.closest('.v2toc')) toc.classList.remove('op'); else if(e.target.closest('a')){ show('all',true); toc.classList.remove('op'); } });
  /* 长标题只留主名，后半句放到副标题 */
  var h1=header&&header.querySelector('h1');
  if (h1) {
    var tx=h1.textContent, ci=tx.indexOf('：');
    if (ci>4 && tx.length>30) { var sb=document.createElement('p'); sb.className='v2sub'; sb.textContent=tx.slice(ci+1); h1.textContent=tx.slice(0,ci); h1.parentNode.insertBefore(sb,h1.nextSibling); }
  }
  /* 评级和进度 */
  if (cur && header) {
    var dk='eng_v2_done', done={}; try{ done=JSON.parse(localStorage.getItem(dk))||{}; }catch(e){}
    var b=document.createElement('div'); b.className='vbadge';
    b.innerHTML='<span class="vg vg-'+cur[0]+'">'+cur[0]+'</span><span>'+cur[1]+'</span><button class="vdone'+(done[key]?' on':'')+'">'+(done[key]?'已做完':'标记做完')+'</button>';
    header.appendChild(b);
    b.querySelector('.vdone').onclick=function(){ done[key]=!done[key]; try{localStorage.setItem(dk,JSON.stringify(done));}catch(e){} this.classList.toggle('on',!!done[key]); var fl=(this.dataset.fl||'标记做完|已做完').split('|'); this.textContent=done[key]?fl[1]:fl[0]; };
  }
  /* 闲置区：制作过程记录和本机路径提示收起来，内容不删 */
  var JUNK=/Claude|盲做|本中心|按年份\/|图像保真版|翻车|战报|套路库\s*\d+\s*[→>]|第三件事|先说结果/;
  var box=[];
  if (header) header.querySelectorAll('.atti, .tag').forEach(function(e){ if (JUNK.test(e.textContent)) box.push(e); });
  document.querySelectorAll('main .atti, main p, main li, main .fi').forEach(function(e){
    var t=e.textContent; if (/Claude|盲做/.test(t) && t.length<420 && !e.querySelector('.tk,.opt')) box.push(e);
  });
  if (box.length) {
    var d=document.createElement('details'); d.className='v2idle';
    d.innerHTML='<summary>闲置区：制作过程记录（'+box.length+' 条），备考用不到</summary>';
    box.forEach(function(e){ var w=document.createElement('div'); w.style.margin='8px 0'; w.appendChild(e.cloneNode(true)); d.appendChild(w); e.parentNode.removeChild(e); });
    var last=main||wrap; last.appendChild(d);
  }
  /* 没有「熟词僻义」专节的阅读页，从本篇词卡自动补一张表 */
  try {
    if (/^T/.test(K) && typeof window.__V2V!=='undefined' && !secs.some(function(s){ return /熟词僻义/.test(s.textContent.slice(0,60)); })) {
      var rows=Object.keys(__V2V).filter(function(k){ return (__V2V[k].tags||[]).indexOf('poly')>=0; });
      if (rows.length) {
        var sec=document.createElement('section'); sec.className='card'; sec.dataset.g='vocab';
        sec.innerHTML='<h2>本篇熟词僻义（'+rows.length+' 个）</h2><div class="tabwrap"><table class="v2gen"><tr><th>词</th><th>这里的意思</th><th>原句</th></tr>'+rows.map(function(k){ var d=__V2V[k]; return '<tr><td><b>'+d.w+'</b></td><td>'+d.cn+'</td><td>'+(d.ex||'')+'</td></tr>'; }).join('')+'</table></div>';
        var vs=secs.filter(function(s){ return s.dataset.g==='vocab'; })[0];
        if (vs) vs.parentNode.insertBefore(sec,vs); else main.appendChild(sec);
        secs.push(sec); counts.vocab=(counts.vocab||0)+1;
      }
    }
  } catch(e){}
  if (window.ENGV2) ENGV2.relabel();
  document.body.classList.remove('v2-wait');
  /* 记住读到哪 */
  try { localStorage.setItem('eng_v2_last', JSON.stringify({u:name+'.html',k:key,at:Date.now()})); } catch(e){}
})();
