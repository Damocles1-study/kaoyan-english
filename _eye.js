/* 背景护眼：新旧版共用，由 _ver_switch.js 带进来。
 * 旧版每一页都生效；新版只在 Chiikawa 世界生效（别的世界底色本身就是风格的一部分）。
 * 0 档＝现在的底色（标准档），往右无级加深到暖黄或豆沙绿。只改背景、卡片和浅色底块，字色只把灰字压深一点保对比。
 * 记在本机 localStorage：eng_eye_v1 = {t:0–100, tone:'warm'|'green'}；eng_eye_paint 是上一次算好的变量，下一页一打开就先刷上，免得闪一下白。
 * Chiikawa 世界的「情境」开关（时间、天气、节日…）由 themes/fx_chii.js 通过 ENGEYE.extra 挂进同一个面板。 */
(function(){
  if(window.ENGEYE) return;
  var K='eng_eye_v1',KP='eng_eye_paint',ROOT=document.documentElement;
  var isNew=/\/新版\//.test(decodeURIComponent(location.pathname));
  var STOPS={warm:[[0,'标准'],[30,'米黄'],[60,'杏黄'],[100,'羊皮']],green:[[0,'标准'],[30,'淡青'],[60,'豆沙'],[100,'深豆沙']]};
  /* 滑到 100 时的终点；起点从样式表现读 */
  var END={
    old:{
      warm:{light:{'--bg':'#ecdfba','--card':'#f8efd2','--line':'#dccba3','--muted':'#6f6656','--accent-soft':'#efdcbf','--hl':'#f6e3a8','--green-soft':'#dfe8c8','--red-soft':'#f3dcc6','--blue-soft':'#dfe3d2','--purple-soft':'#e8dccf'},
            dark:{'--bg':'#2a2317','--card':'#342c1e','--line':'#4a3f2c','--accent-soft':'#43372a'}},
      green:{light:{'--bg':'#c9e2c7','--card':'#e3f0dc','--line':'#b7d1b1','--muted':'#5f6d5c','--accent-soft':'#e2e2c6','--hl':'#e9ebb5','--green-soft':'#cfe5c6','--red-soft':'#e7dfca','--blue-soft':'#d0e2d4','--purple-soft':'#dcdfd0'},
             dark:{'--bg':'#1b261e','--card':'#233027','--line':'#35473a','--accent-soft':'#323a2c'}}
    },
    chii:{
      warm:{light:{'--bg':'#e9e0c0','--card':'rgba(248,237,206,.95)','--card-solid':'#f8edce','--card-2':'#f2e3bd','--bar':'rgba(246,235,203,.97)','--line':'#e2cba4','--muted':'#6f6259','--veil':'#f8edce','--accent-soft':'#f7dccb','--gold-soft':'#f8e6b0','--blue-soft':'#e2e8d8','--green-soft':'#dfeccd'}},
      green:{light:{'--bg':'#cfe5cc','--card':'rgba(228,241,222,.95)','--card-solid':'#e4f1de','--card-2':'#d6e9cf','--bar':'rgba(226,240,220,.97)','--line':'#bfd7b7','--muted':'#5f6b5c','--veil':'#e4f1de','--accent-soft':'#ecdfd2','--gold-soft':'#ebebbf','--blue-soft':'#d2e6dc','--green-soft':'#cfe6c6'}}
    }
  };
  /* 舞台蒙层和写死颜色的小块用的色调 */
  var VEIL={warm:'#f0d9a6',green:'#bfdcbc'};
  var st=load(),base={},chip,pop,extra=window.ENGEYE_PENDING||null;
  function load(){try{var o=JSON.parse(localStorage.getItem(K))||{};return {t:Math.max(0,Math.min(100,Math.round(+o.t||0))),tone:o.tone==='green'?'green':'warm'}}catch(e){return {t:0,tone:'warm'}}}
  function save(){try{localStorage.setItem(K,JSON.stringify(st))}catch(e){}}
  function where(){if(!isNew) return 'old';return ROOT.dataset.theme==='chii'?'chii':null}
  function dark(){return where()==='old'&&window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches}
  function ends(){var w=where();if(!w)return null;return END[w][st.tone][dark()?'dark':'light']}
  /* 颜色插值：认 #hex 和 rgb()/rgba()，透明度一起插 */
  function parse(c){
    c=(c||'').trim();var m;
    if(/^#[0-9a-f]{3,8}$/i.test(c)){c=c.slice(1);if(c.length<6)c=c.replace(/./g,'$&$&');return [parseInt(c.substr(0,2),16),parseInt(c.substr(2,2),16),parseInt(c.substr(4,2),16),c.length>6?parseInt(c.substr(6,2),16)/255:1]}
    if((m=c.match(/^rgba?\(([^)]+)\)$/i))){var p=m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat);return [p[0],p[1],p[2],p.length>3?p[3]:1]}
    return null;
  }
  function mix(a,b,t){
    var x=parse(a),y=parse(b);if(!x||!y) return null;
    var r=x.map(function(v,i){return v+(y[i]-v)*t});
    if(r[3]>=.999) return '#'+r.slice(0,3).map(function(v){v=Math.round(v).toString(16);return v.length<2?'0'+v:v}).join('');
    return 'rgba('+r.slice(0,3).map(Math.round).join(',')+','+r[3].toFixed(3)+')';
  }
  var ALL={};['old','chii'].forEach(function(w){['warm','green'].forEach(function(t){for(var m in END[w][t])for(var v in END[w][t][m])ALL[v]=1})});
  function clear(){for(var v in ALL)ROOT.style.removeProperty(v);['--eye-t','--eye-c','--eye-pc'].forEach(function(v){ROOT.style.removeProperty(v)});ROOT.classList.remove('eye-on')}
  /* 起点：先清掉行内值再读样式表，按「哪一边＋深浅」记住 */
  function baseOf(){
    var key=where()+(dark()?'-d':'-l');if(base[key]) return base[key];
    clear();var cs=getComputedStyle(ROOT),b={},e=ends();
    for(var v in e) b[v]=cs.getPropertyValue(v).trim();
    if(parse(b['--line'])) base[key]=b;
    return b;
  }
  function paint(){
    var w=where(),e=ends(),t=st.t/100,out={};
    if(!w||!t||!e){clear();remember(null);return}
    var b=baseOf(),imp=w==='chii'?'important':'';
    for(var v in ALL){var val=e[v]&&mix(b[v],e[v],t);if(val){ROOT.style.setProperty(v,val,imp);out[v]=val}else ROOT.style.removeProperty(v)}
    out['--eye-t']=t.toFixed(3);out['--eye-c']=VEIL[st.tone];out['--eye-pc']=Math.round(t*70)+'%';
    ['--eye-t','--eye-c','--eye-pc'].forEach(function(v){ROOT.style.setProperty(v,out[v])});
    ROOT.classList.add('eye-on');
    remember(out,imp);
  }
  /* 记下算好的变量，下一页一打开（_ver_switch.js / theme.js 里）先刷上 */
  function remember(out,imp){
    try{var o=JSON.parse(localStorage.getItem(KP))||{};var k=where()==='old'?(dark()?'old_d':'old_l'):'chii';
      if(out){o[k]={v:out,i:imp?1:0}}else if(where()){delete o[k]}
      localStorage.setItem(KP,JSON.stringify(o))}catch(e){}
  }
  function css(){
    var c=document.createElement('style');c.id='eye-css';
    c.textContent=''
      +'@media (prefers-color-scheme:light){html.eye-on:not([data-theme]) img.strip{mix-blend-mode:multiply;background:transparent!important}}'
      +'html.eye-on[data-theme="chii"] #stage::after{content:"";position:absolute;inset:0;z-index:40;background:var(--eye-c);opacity:calc(var(--eye-t) * .46);mix-blend-mode:multiply;pointer-events:none}'
      +'html.eye-on[data-theme="chii"] .opt{background:color-mix(in srgb,#fffdf7,var(--eye-c) var(--eye-pc))!important}'
      +'html.eye-on[data-theme="chii"] .expl{background:color-mix(in srgb,#fff7e0,var(--eye-c) var(--eye-pc))!important}'
      +'html.eye-on[data-theme="chii"] .zh,html.eye-on[data-theme="chii"] .para .zh{background:color-mix(in srgb,#eef8fb,var(--eye-c) var(--eye-pc))!important}'
      +'html.eye-on[data-theme="chii"] .cd,html.eye-on[data-theme="chii"] .c-say,html.eye-on[data-theme="chii"] .c-say::after,html.eye-on[data-theme="chii"] .c-paper{background:color-mix(in srgb,#fffdf5,var(--eye-c) var(--eye-pc))!important}'
      /* 按钮和面板 */
      +'.eye-chip{flex:none;display:inline-flex;align-items:center;gap:4px;border:1px solid var(--line,#ccc);border-radius:var(--radius-s,7px);background:var(--card-solid,var(--card,#fff));color:var(--ink,#222);font:600 12.5px/1.75 -apple-system,"PingFang SC",sans-serif;padding:0 9px;cursor:pointer;white-space:nowrap}'
      +'.eye-chip:hover{border-color:var(--accent,#8b5e34)}.eye-chip i{font-style:normal}.eye-chip.on b{color:var(--accent,#8b5e34)}'
      +'.eye-fix{position:fixed;top:10px;z-index:90;box-shadow:0 2px 10px rgba(0,0,0,.18)}'
      +'.eye-pop{box-sizing:border-box;position:fixed;right:12px;top:52px;z-index:97;width:min(372px,calc(100vw - 24px));max-height:calc(100vh - 66px);overflow:auto;overscroll-behavior:contain;background:var(--card-solid,var(--card,#fff));color:var(--ink,#222);border:1px solid var(--line,#ccc);border-radius:var(--radius-s,10px);box-shadow:0 14px 36px rgba(0,0,0,.24);padding:14px 16px;display:none;font:400 13px/1.55 -apple-system,"PingFang SC",sans-serif}'
      +'.eye-pop.op{display:block}.eye-pop h4{margin:0 0 8px!important;font:600 13px/1.4 inherit;color:var(--muted,#888);letter-spacing:.04em;display:flex;justify-content:space-between;align-items:baseline}.eye-pop h4 b{color:var(--ink,#222);font-weight:700}'
      +'.eye-pop input[type=range]{width:100%;margin:2px 0 0;accent-color:var(--accent,#8b5e34)}'
      +'.eye-stops{display:flex;justify-content:space-between;font-size:11.5px;color:var(--muted,#888);margin:0 0 10px}.eye-stops button{border:0;background:none;color:inherit;font:inherit;padding:0 2px;cursor:pointer}.eye-stops button.cur{color:var(--accent,#8b5e34);font-weight:700}'
      +'.eye-seg{display:flex;gap:6px;margin:0 0 6px}.eye-seg button{flex:1;border:1px solid var(--line,#ccc);background:none;color:var(--ink,#222);font:inherit;border-radius:var(--radius-s,7px);padding:3px 0;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px}.eye-seg button.cur{border-color:var(--accent,#8b5e34);color:var(--accent,#8b5e34);font-weight:700}'
      +'.eye-seg i{width:12px;height:12px;border-radius:50%;border:1px solid rgba(0,0,0,.25)}'
      +'.eye-note{font-size:11.5px;color:var(--muted,#888);margin:6px 0 0}'
      +'.eye-x{border-top:1px dashed var(--line,#ccc);margin-top:12px;padding-top:12px}'
      +'@media (max-width:640px){.eye-chip b{display:none}.eye-chip{padding:0 7px}}';
    document.head.appendChild(c);
  }
  function stopName(){var s=STOPS[st.tone],n=s[0][1];s.forEach(function(x){if(st.t>=x[0])n=x[1]});return st.t?n+' '+st.t:'标准'}
  function panel(){
    var s=STOPS[st.tone],stops=s.map(function(x){return '<button data-eye-t="'+x[0]+'" class="'+(st.t===x[0]?'cur':'')+'">'+x[1]+'</button>'}).join('');
    var h='<h4>背景护眼 <b id="eyeVal">'+stopName()+'</b></h4>'
      +'<input type="range" min="0" max="100" step="1" value="'+st.t+'" id="eyeRange" aria-label="背景护眼强度">'
      +'<div class="eye-stops">'+stops+'</div>'
      +'<div class="eye-seg"><button data-eye-tone="warm" class="'+(st.tone==='warm'?'cur':'')+'"><i style="background:#ecdfba"></i>暖黄</button><button data-eye-tone="green" class="'+(st.tone==='green'?'cur':'')+'"><i style="background:#c9e2c7"></i>豆沙绿</button></div>'
      +'<p class="eye-note">最左边就是现在的底色（标准档），往右一点点加深，拖到哪都行。'+(where()==='old'?'系统深色模式下往暖色或绿色偏一点。':'只改天空、卡片和浅色底块，角色和字不变。')+'新旧版共用，记在这台设备。</p>';
    if(extra&&where()==='chii') h+='<div class="eye-x" id="eyeX">'+extra.html()+'</div>';
    return h;
  }
  function open(){pop.innerHTML=panel();pop.classList.add('op');if(extra&&where()==='chii'){var x=pop.querySelector('#eyeX');if(x&&extra.bind)extra.bind(x)}}
  function refresh(){if(pop&&pop.classList.contains('op'))open()}
  function label(){
    if(!chip) return;
    chip.innerHTML='<i>🌿</i><b>'+(where()==='chii'?'护眼·情境':'护眼')+(st.t?' '+st.t:'')+'</b>';
    chip.classList.toggle('on',!!st.t);chip.title='背景护眼'+(where()==='chii'?'，以及 Chiikawa 的时间 / 天气 / 节日开关':'')+'（现在：'+stopName()+'）';
    chip.style.display=where()?'':'none';
    place();
  }
  /* 旧版没有顶栏：贴在学习时长按钮左边 */
  function place(){
    if(!chip||!chip.classList.contains('eye-fix')) return;
    var sc=document.querySelector('.st-chip.st-fix')||document.querySelector('.ver-fix');
    var right=sc?Math.max(12,innerWidth-sc.getBoundingClientRect().left+6):12;
    chip.style.right=right+'px';
  }
  function init(){
    css();
    chip=document.createElement('button');chip.type='button';chip.className='eye-chip';
    var host=document.querySelector('.v2t .pn')||document.querySelector('.ht .r');
    if(host){var vs=host.querySelector('.ver-sw');host.insertBefore(chip,vs||null)}
    else{chip.classList.add('eye-fix');document.body.appendChild(chip)}
    pop=document.createElement('div');pop.className='eye-pop';document.body.appendChild(pop);
    /* 面板里点完会重画，点到的节点已脱离页面；不让它冒泡到下面「点外面就收起」的判断 */
    pop.addEventListener('click',function(e){e.stopPropagation()});
    chip.addEventListener('click',function(e){e.stopPropagation();if(pop.classList.contains('op'))pop.classList.remove('op');else open()});
    document.addEventListener('click',function(e){if(!e.target.closest('.eye-pop')&&!e.target.closest('.eye-chip'))pop.classList.remove('op')});
    pop.addEventListener('input',function(e){
      if(e.target.id!=='eyeRange') return;
      st.t=+e.target.value;paint();label();
      var v=pop.querySelector('#eyeVal');if(v)v.textContent=stopName();
      pop.querySelectorAll('[data-eye-t]').forEach(function(b){b.classList.toggle('cur',+b.dataset.eyeT===st.t)});
    });
    pop.addEventListener('change',function(e){if(e.target.id==='eyeRange')save()});
    pop.addEventListener('click',function(e){
      var b=e.target.closest('[data-eye-t]');if(b){st.t=+b.dataset.eyeT;save();paint();label();open();return}
      var tn=e.target.closest('[data-eye-tone]');if(tn){st.tone=tn.dataset.eyeTone;save();paint();label();open()}
    });
    if(window.ResizeObserver){var sc=document.querySelector('.st-chip');if(sc)new ResizeObserver(place).observe(sc)}
    window.addEventListener('resize',place);setTimeout(place,300);
    label();
  }
  paint();
  /* 新版换世界时跟着开关；系统深浅色切换时重算 */
  if(isNew&&window.MutationObserver) new MutationObserver(function(){paint();label();refresh()}).observe(ROOT,{attributes:true,attributeFilter:['data-theme']});
  if(window.matchMedia){var mq=matchMedia('(prefers-color-scheme:dark)');var f=function(){paint();refresh()};if(mq.addEventListener)mq.addEventListener('change',f);else if(mq.addListener)mq.addListener(f)}
  window.ENGEYE={
    get:function(){return {t:st.t,tone:st.tone}},
    /* fx_chii.js 进出 Chiikawa 世界时挂上 / 摘掉自己的那一节 */
    setExtra:function(x){extra=x;label();refresh()},
    refresh:refresh
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
