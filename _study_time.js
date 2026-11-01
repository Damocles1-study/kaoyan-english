/* 学习时长：新旧版共用，由 _ver_switch.js 带进来。
 * 只算真在看的时间：页面在前台，且 5 分钟内有过滚动、点击或按键。多开标签不重复计。
 * 记在本机 localStorage（eng_time_v1 = {"2026-11-01": 秒数}），换设备不同步。 */
(function(){
  if(window.ENGTIME) return;
  var K='eng_time_v1',LAST='eng_time_last',IDLE=300000,TICK=5000,input=Date.now();
  var WK=['周日','周一','周二','周三','周四','周五','周六'];
  function pad(n){return (n<10?'0':'')+n}
  function day(d){d=d||new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
  function load(){try{return JSON.parse(localStorage.getItem(K))||{}}catch(e){return {}}}
  function save(o){try{localStorage.setItem(K,JSON.stringify(o))}catch(e){}}
  function active(){return document.visibilityState==='visible'&&Date.now()-input<IDLE}
  function tick(){
    var now=Date.now();
    if(active()){
      var last=0;try{last=+localStorage.getItem(LAST)||0}catch(e){}
      var dt=Math.min(TICK,now-last);
      if(dt>0){var o=load(),k=day();o[k]=(o[k]||0)+dt/1000;save(o);try{localStorage.setItem(LAST,String(now))}catch(e){}}
    }
    draw();
  }
  function fmt(s,lng){
    var m=Math.floor(s/60),h=Math.floor(m/60);m%=60;
    if(h>=100&&!lng) return h+'小时';
    if(!h) return m+'分';
    return h+'时'+(m?m+'分':'');
  }
  function stats(){
    var o=load(),t=0,ks=Object.keys(o);ks.forEach(function(k){t+=o[k]});
    var streak=0,d=new Date();
    if(!(o[day(d)]>=60)) d.setDate(d.getDate()-1);
    while(o[day(d)]>=60){streak++;d.setDate(d.getDate()-1)}
    var week=0,w=new Date();for(var i=0;i<7;i++){week+=o[day(w)]||0;w.setDate(w.getDate()-1)}
    return {today:o[day()]||0,total:t,streak:streak,week:week,map:o};
  }
  function css(){
    var c=document.createElement('style');
    c.textContent=''
      +'.st-chip{flex:none;display:inline-flex;align-items:center;gap:5px;border:1px solid var(--line,#ccc);border-radius:var(--radius-s,7px);background:var(--card-solid,var(--card,#fff));color:var(--ink,#222);font:600 12.5px/1.75 -apple-system,"PingFang SC",sans-serif;padding:0 9px;cursor:pointer;white-space:nowrap;font-variant-numeric:tabular-nums}'
      +'.st-chip i{font-style:normal;font-weight:400;color:var(--muted,#888)}.st-chip em{font-style:normal}.st-chip:hover{border-color:var(--accent,#8b5e34)}.st-chip.idle b{opacity:.55}'
      +'.st-fix{position:fixed;right:112px;top:10px;z-index:90;box-shadow:0 2px 10px rgba(0,0,0,.18)}'
      +'.st-pop{position:fixed;right:12px;top:52px;z-index:96;width:min(340px,calc(100vw - 24px));background:var(--card-solid,var(--card,#fff));color:var(--ink,#222);border:1px solid var(--line,#ccc);border-radius:var(--radius-s,10px);box-shadow:0 14px 36px rgba(0,0,0,.24);padding:14px 16px;display:none}'
      +'.st-pop.op{display:block}'
      +'.st-p{font:400 13px/1.5 -apple-system,"PingFang SC",sans-serif;color:var(--ink,#222)}'
      +'.st-p h4{margin:0 0 9px!important;font:600 13px/1.4 inherit;color:var(--muted,#888);letter-spacing:.04em}'
      +'.st-big{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-bottom:12px}'
      +'.st-big div{min-width:0}.st-big b{display:block;font-size:17px;line-height:1.25;font-weight:700;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.st-big span{font-size:11.5px;color:var(--muted,#888)}'
      +'.st-bars{display:flex;align-items:flex-end;gap:3px;height:64px;border-bottom:1px solid var(--line,#ccc)}'
      +'.st-bars u{flex:1;min-width:0;height:100%;display:flex;align-items:flex-end;text-decoration:none;cursor:default}'
      +'.st-bars u s{display:block;width:100%;border-radius:4px 4px 0 0;background:var(--accent,#8b5e34);opacity:.5;text-decoration:none;transition:opacity .12s}'
      +'.st-bars u.td s{opacity:1}.st-bars u:hover s,.st-bars u:focus s{opacity:1}'
      +'.st-foot{display:flex;justify-content:space-between;gap:8px;font-size:11.5px;color:var(--muted,#888);margin-top:4px;font-variant-numeric:tabular-nums}.st-foot b{font-weight:600;color:var(--ink,#222)}'
      +'.st-note{font-size:11.5px;color:var(--muted,#888);margin:9px 0 0}'
      +'.st-home{background:var(--card,#fff);border:1px solid var(--card-line,var(--line,#ccc));border-radius:var(--radius,10px);box-shadow:var(--shadow,none);padding:14px 18px;margin-bottom:22px}'
      +'@media (min-width:720px){.st-home .st-p{display:grid;grid-template-columns:minmax(300px,5fr) minmax(0,6fr);gap:6px 26px;align-items:end}.st-home h4,.st-home .st-note{grid-column:1/-1}.st-home .st-big{margin:0}}'
      +'@media (max-width:640px){.st-fix{right:96px}.st-chip em{display:none}}';
    document.head.appendChild(c);
  }
  function label(){try{return window.ENGV2&&ENGV2.world().timeName||'学习时长'}catch(e){return '学习时长'}}
  function panel(){
    var s=stats(),bars='',max=1,ds=[],d=new Date();d.setDate(d.getDate()-13);
    for(var i=0;i<14;i++){var k=day(d),v=s.map[k]||0;ds.push([k,v,WK[d.getDay()]]);if(v>max)max=v;d.setDate(d.getDate()+1)}
    ds.forEach(function(x,i){
      var pct=x[1]?Math.max(4,x[1]/max*100):0,txt=+x[0].slice(5,7)+'/'+ +x[0].slice(8)+' '+x[2]+' '+fmt(x[1],1);
      bars+='<u class="'+(i===13?'td':'')+'" tabindex="0" data-tip="'+txt+'" title="'+txt+'" aria-label="'+txt+'"><s style="height:'+pct+'%"></s></u>';
    });
    return '<div class="st-p"><h4>'+label()+'</h4><div class="st-big"><div><b>'+fmt(s.today,1)+'</b><span>今日</span></div><div><b>'+fmt(s.total)+'</b><span>累计</span></div><div><b>'+s.streak+' 天</b><span>连续</span></div><div><b>'+fmt(s.week/7)+'</b><span>近 7 天日均</span></div></div>'
      +'<div><div class="st-bars">'+bars+'</div><div class="st-foot"><span>'+ +ds[0][0].slice(5,7)+'/'+ +ds[0][0].slice(8)+'</span><b class="st-tip">近 14 天</b><span>今天</span></div></div>'
      +'<p class="st-note">前台阅读才计时，5 分钟没操作自动暂停；只记在这台设备的这个浏览器里。</p></div>';
  }
  var chip,pop,home;
  function draw(){
    if(!chip) return;
    var s=stats(),idle=!active();
    var sh=function(t){return t.replace(/(\d+时)(\d+分)/,'$1<em>$2</em>')};
    chip.innerHTML='<i>今<em>日</em></i><b>'+fmt(s.today,1)+'</b><i>累<em>计</em></i><b>'+sh(fmt(s.total))+'</b>';
    chip.classList.toggle('idle',idle);chip.title=idle?'已暂停：页面不在前台，或 5 分钟没有操作':'正在计时，点开看近 14 天';
    if(pop&&pop.classList.contains('op')&&!pop.querySelector('u:hover,u:focus')) pop.innerHTML=panel();
    if(home&&!home.querySelector('u:hover,u:focus')) home.innerHTML=panel();
  }
  function init(){
    css();
    chip=document.createElement('button');chip.type='button';chip.className='st-chip';
    var host=document.querySelector('.v2t .pn')||document.querySelector('.ht .r');
    if(host) host.insertBefore(chip,host.firstChild); else {chip.classList.add('st-fix');document.body.appendChild(chip)}
    pop=document.createElement('div');pop.className='st-pop';document.body.appendChild(pop);
    home=document.getElementById('stHome');if(home) home.className='st-home';
    chip.addEventListener('click',function(e){e.stopPropagation();pop.innerHTML=panel();pop.classList.toggle('op')});
    document.addEventListener('click',function(e){if(!e.target.closest('.st-pop')) pop.classList.remove('op')});
    function tip(e){var u=e.target.closest&&e.target.closest('.st-bars u');if(!u)return;var t=u.closest('.st-p').querySelector('.st-tip');if(t)t.textContent=u.dataset.tip}
    document.addEventListener('pointerover',tip,{passive:true});document.addEventListener('focusin',tip);
    tick();setInterval(tick,TICK);
  }
  ['pointerdown','pointermove','keydown','wheel','touchstart','scroll'].forEach(function(ev){window.addEventListener(ev,function(){input=Date.now()},{passive:true,capture:true})});
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')input=Date.now();tick()});
  window.addEventListener('pagehide',tick);
  window.ENGTIME={stats:stats,fmt:fmt,tick:tick};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
