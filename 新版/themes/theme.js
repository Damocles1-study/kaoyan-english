/* 新版主题运行时。放在 <head> 里同步加载，页面画出来之前就定好主题。
 * 舞台（背景分层）/ 滚动虚实 / 转场 / 点击特效 / 换世界 / 全站查有道。 */
(function(){
  var me=document.currentScript, BASE=me?me.src.replace(/[^\/]*$/,''):'themes/';
  var LS='eng_v2_theme', LSF='eng_v2_fx', TR='eng_v2_tr', ROOT=document.documentElement;
  var LIST=['paper','chii','demon','ink','film'];
  var MOCHI='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill="#fff" stroke="#4d423c" stroke-width="2.6"><circle cx="17" cy="15" r="7"/><circle cx="47" cy="15" r="7"/><path d="M32 12c15 0 25 11 25 25 0 13-10 21-25 21S7 50 7 37c0-14 10-25 25-25z"/></g><g fill="#4d423c"><circle cx="22" cy="35" r="3"/><circle cx="42" cy="35" r="3"/></g><path d="M29 41q3 3 6 0" fill="none" stroke="#4d423c" stroke-width="2" stroke-linecap="round"/><g fill="#f8a9b6" opacity=".85"><ellipse cx="15" cy="42" rx="4.6" ry="2.8"/><ellipse cx="49" cy="42" rx="4.6" ry="2.8"/></g></svg>';
  var PUDDING='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M14 22 9 6l15 8h16l15-8-5 16c5 5 8 11 8 17 0 13-11 20-26 20S6 52 6 39c0-6 3-12 8-17z" fill="#fff" stroke="#4d423c" stroke-width="2.6" stroke-linejoin="round"/><path d="M32 14H24L9 6l5 16c-5 5-8 11-8 17 0 3 .6 5 2 7 9-3 21-14 24-32zM32 14h8l15-8-5 16c5 5 8 11 8 17 0 3-.6 5-2 7-9-3-21-14-24-32z" fill="#8fc2de"/><g fill="#4d423c"><circle cx="22" cy="37" r="3"/><circle cx="42" cy="37" r="3"/></g><path d="M29 43q3 3 6 0" fill="none" stroke="#4d423c" stroke-width="2" stroke-linecap="round"/></svg>';
  var HOPPER='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill="#fbe58f" stroke="#4d423c" stroke-width="2.6"><path d="M18 26C14 13 15 3 21 3s8 10 7 23z"/><path d="M46 26c4-13 3-23-3-23s-8 10-7 23z"/><path d="M32 20c14 0 24 9 24 22 0 12-10 18-24 18S8 54 8 42c0-13 10-22 24-22z"/></g><g fill="#4d423c"><circle cx="22" cy="39" r="3"/><circle cx="42" cy="39" r="3"/></g><path d="M27 45q5 5 10 0" fill="none" stroke="#4d423c" stroke-width="2" stroke-linecap="round"/></svg>';
  var uri=function(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'};
  /* 每个世界用自己的话叫这几样东西。真名总留在下面，不用猜。 */
  var W={
    paper:{name:'标准版',sub:'米黄试卷',r:-3,home:'英语一 · 新版',tabs:null,
      kick:{read:'第一部分　读原文',test:'第二部分　作答',rev:'第三部分　批改与复盘',vocab:'第四部分　词汇',mat:'第五部分　可用素材'},
      hero:['按价值读，时间花在该花的地方','2007–2025 十九年，每篇都评了级。先做 S，再做 A。'],count:'距英语开考',dock:'换一套卷子',grade:{S:'S',A:'A',B:'B',C:'C'},mx:'答题卡：涂黑的是做完的',flat:'标记做完|已做完'},
    chii:{name:'Chiikawa 版',sub:'小小草原',r:2,home:'小小草原 · 英语一',tabs:{all:'全部',read:'读一读',test:'讨伐',rev:'反省会',vocab:'小点心',mat:'宝物袋'},
      kick:{read:'先读一读',test:'讨伐开始',rev:'回来开反省会',vocab:'词汇小点心',mat:'捡到的宝物'},
      hero:['一点一点，把这片草除完','今天也只做今天的份。S 是大讨伐，C 是路边小草，时间不够可以不拔。'],count:'离大讨伐日',dock:'去别的世界玩',grade:{S:'S',A:'A',B:'B',C:'C'},mx:'讨伐地图：开花的格子是拔完的',flat:'拔完了吗|拔完啦'},
    demon:{name:'鬼灭之刃版',sub:'大正夜行',r:-2,home:'鬼杀 · 英语一',tabs:{all:'全局',read:'观气',test:'拔刀',rev:'残心',vocab:'词之型',mat:'锻刀'},
      kick:{read:'水之呼吸 · 观气',test:'雷之呼吸 · 拔刀',rev:'炎之呼吸 · 残心',vocab:'花之呼吸 · 词之型',mat:'霞之呼吸 · 锻刀'},
      hero:['全集中，一篇一斩','柱＝必须精做，甲＝值得精做，庚＝做一遍，癸＝时间不够就跳。'],count:'距决战之夜',dock:'换一种呼吸',grade:{S:'柱',A:'甲',B:'庚',C:'癸'},mx:'阶级表：写着「滅」的是斩完的',flat:'斩了吗|已斩'},
    ink:{name:'水墨江湖版',sub:'墨卷江湖',r:3,home:'江湖 · 英语一',tabs:{all:'全卷',read:'读经',test:'过招',rev:'悟道',vocab:'兵器谱',mat:'行囊'},
      kick:{read:'读经',test:'过招',rev:'悟道',vocab:'兵器谱',mat:'行囊'},
      hero:['十九载卷宗，一卷一江湖','甲等必破，乙等当破；丙等过一遍，丁等可绕行。'],count:'距论剑之期',dock:'另走一路',grade:{S:'甲',A:'乙',B:'丙',C:'丁'},mx:'江湖榜：朱圈是已破的卷',flat:'破此卷|已破'},
    film:{name:'胶片版',sub:'暗房',r:-1,home:'DARKROOM · 英语一',tabs:{all:'全片',read:'取景',test:'快门',rev:'冲洗',vocab:'放大',mat:'底片盒'},
      kick:{read:'FRAME — 取景：读原文',test:'FRAME — 快门：做题',rev:'FRAME — 冲洗：复盘',vocab:'FRAME — 放大：词汇',mat:'FRAME — 底片盒：素材'},
      hero:['十九卷胶片，挑值得冲的先冲','红笔圈出来的是 S，这一张无论如何要洗。'],count:'距放映',dock:'换一卷片',grade:{S:'S',A:'A',B:'B',C:'C'},mx:'接触印样：红圈是必冲，打叉是冲过了',flat:'冲了吗|已冲洗'}
  };
  var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var theme=get(LS); if(LIST.indexOf(theme)<0) theme='paper';
  var fxOn=get(LSF)!=='off'&&!RM;
  ROOT.dataset.theme=theme; if(!fxOn) ROOT.classList.add('nofx');
  var incoming=null; try{incoming=sessionStorage.getItem(TR);sessionStorage.removeItem(TR)}catch(e){}
  if(incoming&&fxOn) ROOT.classList.add('tr-in');
  var link=document.createElement('link');link.rel='stylesheet';link.href=BASE+'theme.css?v=1';document.head.appendChild(link);
  ROOT.style.setProperty('--mochi',uri(MOCHI));

  function E(tag,cls,html,attrs){var e=document.createElement(tag);if(cls)e.className=cls;if(html)e.innerHTML=html;if(attrs)for(var k in attrs)e.setAttribute(k,attrs[k]);return e}

  /* ---------- 舞台 ---------- */
  var layers=[],softs=[],sharps=[],canvasStop=null,stage,veilBusy=false;
  var cloud=function(c){return '<svg viewBox="0 0 200 90"><path d="M42 80c-22 0-34-13-34-27 0-13 12-25 28-24C42 13 58 5 75 9c10-7 33-9 46 6 18-5 38 5 41 22 17 1 30 12 30 25 0 11-12 18-28 18z" fill="'+(c||'#fff')+'"'+(c?'':' stroke="#8fb9c8" stroke-opacity=".35" stroke-width="2"')+'/></svg>'};
  var SCENE={
    paper:function(s){s.innerHTML='<div class="p-sun" data-anim></div><div class="p-vig"></div><div class="p-seal">密封线内不要答题　　姓名　　　　准考证号　　　　　　　　　　　　密封线内不要答题　　姓名　　　　准考证号</div>'},
    chii:function(s){
      var flowers='';[[6,9,'#f8a9b6',5],[13,5,'#fff',7],[22,10,'#fbe58f',4.5],[78,8,'#f8a9b6',6],[86,4,'#fff',5.5],[93,10,'#fbe58f',6.5],[36,3,'#fff',8],[62,4,'#f8a9b6',5]].forEach(function(f){
        flowers+='<div class="c-flower lay2" data-anim style="--x:'+f[0]+'%;--b:'+f[1]+'vh;--t:'+f[3]+'s"><svg viewBox="0 0 26 40"><path d="M13 40V18" stroke="#6da565" stroke-width="2.4" fill="none"/><path d="M13 30q6-6 10-3-3 6-10 5z" fill="#8cc67c"/><g fill="'+f[2]+'" stroke="#4d423c" stroke-width="1.3"><circle cx="13" cy="6" r="4.2"/><circle cx="6.5" cy="11" r="4.2"/><circle cx="19.5" cy="11" r="4.2"/><circle cx="9" cy="17" r="4.2"/><circle cx="17" cy="17" r="4.2"/></g><circle cx="13" cy="12" r="3.2" fill="#fff4a8"/></svg></div>';
      });
      s.innerHTML='<div class="c-sun" data-p=".02"></div>'
        +'<div class="c-cloud" data-anim data-pw style="--w:230px;--x:4vw;--y:11vh;--t:44s" data-p=".05">'+cloud()+'</div>'
        +'<div class="c-cloud" data-anim style="--w:150px;--x:64vw;--y:24vh;--t:61s;--o:.8" data-p=".03">'+cloud()+'</div>'
        +'<div class="c-cloud" data-anim style="--w:300px;--x:36vw;--y:4vh;--t:78s;--o:.7" data-p=".02">'+cloud()+'</div>'
        +'<div class="c-hills"><svg viewBox="0 0 1600 300" preserveAspectRatio="none"><path d="M0 130C200 60 380 70 620 120s420 40 980-30v210H0z" fill="#cdeaa8"/><path d="M0 180c260-50 500-50 800-6s520 30 800-30v156H0z" fill="#a9dc8b"/><path d="M0 240c300-34 560-30 860-6s500 12 740-16v82H0z" fill="#8ccb73"/></svg>'+flowers+'</div>'
        +'<div class="c-mochi" id="cwalker">'+MOCHI+'</div>';
    },
    demon:function(s){
      s.innerHTML='<div class="d-night" data-sharp data-p=".03"></div><div class="d-night soft" data-soft data-p=".03"></div>'
        +'<div class="d-wist" data-sharp data-anim data-p=".12"></div><div class="d-wist soft" data-soft data-anim data-p=".12"></div>'
        +'<canvas id="fxc"></canvas><div class="d-blade" id="dblade"><div class="b"></div><div class="g"></div></div>';
      particles('demon');
    },
    ink:function(s){
      var bird='<svg viewBox="0 0 40 16"><path d="M1 8q9-8 19 0 9-8 19 0-9-3-19 3Q10 5 1 8z" fill="#2b2925"/></svg>';
      s.innerHTML='<div class="i-sun" data-p=".015"></div>'
        +'<div class="i-m i-far" data-sharp data-p=".03"></div><div class="i-m i-far soft" data-soft data-p=".03"></div><div class="i-mist m1" data-anim></div>'
        +'<div class="i-m i-mid" data-sharp data-p=".07"></div><div class="i-m i-mid soft" data-soft data-p=".07"></div><div class="i-mist m2" data-anim></div>'
        +'<div class="i-m i-near" data-sharp data-p=".13"></div><div class="i-m i-near soft" data-soft data-p=".13"></div>'
        +'<div class="i-bird" data-anim style="--y:19vh;--w:34px;--t:46s;--d:-9s">'+bird+'</div><div class="i-bird" data-anim style="--y:24vh;--w:22px;--t:58s;--d:-26s">'+bird+'</div>'
        +'<svg width="0" height="0" style="position:absolute"><filter id="inkEdge"><feTurbulence baseFrequency=".06" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter></svg>';
      if(!document.getElementById('inkDefs')){var d=E('div','', '<svg width="0" height="0"><filter id="inkEdge"><feTurbulence baseFrequency=".06" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter></svg>',{id:'inkDefs',style:'position:absolute;width:0;height:0;overflow:hidden'});document.body.appendChild(d)}
    },
    film:function(s){
      var lab='SAFETY FILM 400 ▸ ▸ ▸ 　 ENGLISH 201 ▸ ▸ ▸ 　 SAFETY FILM 400 ▸ ▸ ▸ 　 ENGLISH 201 ▸ ▸ ▸ 　 SAFETY FILM 400 ▸ ▸ ▸ 　 ENGLISH 201';
      s.innerHTML='<div class="f-base"></div><div class="f-leak a" data-anim></div><div class="f-leak b" data-anim></div><canvas id="fxc"></canvas><div class="f-vig"></div><div class="f-strip l" id="fsl"><b>'+lab+'</b></div><div class="f-strip r" id="fsr"><b>'+lab+'</b></div><div class="f-grain" data-anim></div>';
      particles('film');
    }
  };
  function buildStage(){
    if(canvasStop){canvasStop();canvasStop=null}
    if(!stage){stage=E('div','',null,{id:'stage','aria-hidden':'true'});document.body.insertBefore(stage,document.body.firstChild)}
    stage.innerHTML='';SCENE[theme](stage);
    layers=[].slice.call(stage.querySelectorAll('[data-p]')).map(function(e){return [e,+e.dataset.p]});
    softs=[].slice.call(stage.querySelectorAll('[data-soft]'));sharps=[].slice.call(stage.querySelectorAll('[data-sharp]'));
    softs.forEach(function(e){e.style.opacity=0});
    measure();paint(true);
  }
  /* 粒子：鬼灭＝紫藤花瓣和火星；胶片＝放映光束里的灰尘。30 帧，切走就停。 */
  function particles(kind){
    if(!fxOn) return;
    var cv=stage.querySelector('#fxc'); if(!cv) return;
    var ctx=cv.getContext('2d'),dpr=Math.min(window.devicePixelRatio||1,2),w,h,ps=[],raf=0,last=0,stop=false;
    function size(){w=innerWidth;h=innerHeight;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}size();
    var n=Math.round(Math.min(w,1500)/(kind==='demon'?56:44));
    function spawn(p,anyY){
      p=p||{};p.x=Math.random()*w;p.y=anyY?Math.random()*h:(kind==='demon'&&p.k==='e'?h+10:-10);
      p.k=kind==='demon'?(Math.random()<.34?'e':'p'):'d';p.y=anyY?Math.random()*h:(p.k==='e'?h+10:-10);
      p.s=p.k==='p'?2.8+Math.random()*3.4:(p.k==='e'?.8+Math.random()*1.5:.4+Math.random()*1.1);
      p.vx=p.k==='p'?-.1+Math.random()*.34:(p.k==='e'?-.14+Math.random()*.28:-.07+Math.random()*.14);
      p.vy=p.k==='p'?.22+Math.random()*.4:(p.k==='e'?-.3-Math.random()*.45:-.05+Math.random()*.1);
      p.a=Math.random()*6.28;p.va=(Math.random()-.5)*.05;p.o=p.k==='d'?.1+Math.random()*.3:.32+Math.random()*.48;p.c=p.k==='p'?(Math.random()<.5?'#b18fe6':'#dcc7f5'):(p.k==='e'?(Math.random()<.5?'#ff9a4a':'#ffc56b'):'#f1dcb5');return p;
    }
    for(var i=0;i<n;i++) ps.push(spawn(null,true));
    function frame(t){
      if(stop) return; raf=requestAnimationFrame(frame);
      if(document.hidden||t-last<32) return; last=t;
      ctx.clearRect(0,0,w,h);
      for(var i=0;i<ps.length;i++){var p=ps[i];
        p.x+=p.vx+Math.sin(p.a)*.22;p.y+=p.vy+sv*.012*(p.k==='d'?.7:1.2);p.a+=p.va;
        if(p.y>h+14||p.y<-14||p.x<-14||p.x>w+14){spawn(p,false);continue}
        ctx.globalAlpha=p.o*(p.k==='e'?(.55+.45*Math.sin(p.a*6)):1);ctx.fillStyle=p.c;
        ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.beginPath();
        if(p.k==='p'){ctx.ellipse(0,0,p.s,p.s*.56,0,0,6.3)}else{ctx.arc(0,0,p.s,0,6.3)}
        ctx.fill();ctx.restore();
      }
    }
    raf=requestAnimationFrame(frame);
    window.addEventListener('resize',size);
    canvasStop=function(){stop=true;cancelAnimationFrame(raf);window.removeEventListener('resize',size)};
  }

  /* ---------- 滚动：背景随节奏虚实变化 ----------
   * 页首和页尾背景最清楚；读正文时退到虚处；经过两节之间时短暂回清楚一点。
   * 全程只改舞台里几个元素，不碰正文，所以长页也不掉帧。 */
  var sy=0,sv=0,ly=0,softNow=0,softGoal=0,ticking=false,bounds=[],maxY=1,walker,blade,fsl,fsr,prog;
  function measure(){
    maxY=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    bounds=[].map.call(document.querySelectorAll('section.card'),function(s){return s.getBoundingClientRect().top+scrollY});
    walker=document.getElementById('cwalker');blade=document.getElementById('dblade');fsl=document.getElementById('fsl');fsr=document.getElementById('fsr');prog=document.getElementById('v2prog');
  }
  function paint(force){
    ticking=false;
    sy=window.scrollY||0;sv=sy-ly;ly=sy;
    var edge=Math.min(sy/460,(maxY-sy)/460,1);edge=Math.max(0,edge);
    var pivot=sy+innerHeight*.42,near=1e9;for(var i=0;i<bounds.length;i++){var d=Math.abs(bounds[i]-pivot);if(d<near)near=d}
    var rhythm=bounds.length?Math.min(1,.45+near/300):1;
    softGoal=edge*rhythm;
    softNow+=(softGoal-softNow)*(force?1:.14);
    var settled=Math.abs(softGoal-softNow)<.004&&Math.abs(sv)<.5;
    var p=sy/maxY;
    if(fxOn){
      for(var j=0;j<layers.length;j++) layers[j][0].style.translate='0 '+(-sy*layers[j][1]).toFixed(1)+'px';
      for(var a=0;a<softs.length;a++){softs[a].style.opacity=softNow.toFixed(3)}
      for(var b=0;b<sharps.length;b++){sharps[b].style.opacity=(1-softNow).toFixed(3)}
      if(walker){walker.style.translate=(p*(innerWidth-70)+7).toFixed(1)+'px '+(-Math.sin(p*18)*8).toFixed(1)+'px';if(Math.abs(sv)>.5)walker.style.scale=sv<0?'-1 1':'1 1'}
      if(blade) blade.style.setProperty('--pr',p.toFixed(4));
      if(fsl||fsr){var v=Math.min(7,Math.abs(sv)*.07);[fsl,fsr].forEach(function(f,i){if(!f)return;f.style.setProperty('--fy',(-sy*(i?1:.92)).toFixed(0)+'px');f.style.setProperty('--ty',(-sy*.5%900).toFixed(0)+'px');f.style.filter=v>.4?'blur('+v.toFixed(1)+'px)':'none'})}
    }
    if(prog) prog.style.transform='scaleX('+p.toFixed(4)+')';
    if(!settled&&!ticking){ticking=true;requestAnimationFrame(function(){paint()})}
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(function(){paint()})}}
  function buildHaze(){
    if(document.querySelector('.hz')) return;
    [['b','22px','.9px'],['b','48px','.5px']].forEach(function(c){var d=E('div','hz '+c[0],null,{style:'--h:'+c[1]+';--b:'+c[2]});document.body.appendChild(d)});
    if(document.querySelector('.v2bar')) [['t','14px','1.2px'],['t','30px','.5px']].forEach(function(c){var d=E('div','hz '+c[0],null,{style:'--h:'+c[1]+';--b:'+c[2]});document.body.appendChild(d)});
  }
  function revealFallback(){
    if(!fxOn||(window.CSS&&CSS.supports&&CSS.supports('animation-timeline:view()'))||!('IntersectionObserver' in window)) return;
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('fx-wait');e.target.classList.add('fx-in');io.unobserve(e.target);setTimeout(function(){e.target.classList.remove('fx-in')},700)}})},{rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('section.card').forEach(function(s){if(s.getBoundingClientRect().top>innerHeight*.8){s.classList.add('fx-wait');io.observe(s)}});
  }

  /* ---------- 转场：各走各的路 ---------- */
  function A(el,kf,ms,ease,delay){return el.animate(kf,{duration:ms,easing:ease||'cubic-bezier(.3,.7,.2,1)',fill:'both',delay:delay||0})}
  function done(an){return an&&an.finished?an.finished.catch(function(){}):new Promise(function(r){setTimeout(r,500)})}
  function veil(){var v=document.getElementById('veil');if(!v){v=E('div','',null,{id:'veil'});document.body.appendChild(v)}v.innerHTML='';return v}
  var filmFrames='repeating-linear-gradient(#0d0a07 0 12px,#2b2015 12px 100px,#0d0a07 100px 112px)';
  var TRANS={
    paper:{ /* 翻过一张卷子 */
      out:function(v){var s=E('div','',null,{style:'inset:0 -8% 0 0;background:#f7f0dd url('+BASE+'art/paper.webp);background-blend-mode:soft-light;box-shadow:-26px 0 44px rgba(70,50,20,.32);transform-origin:100% 50%'});v.appendChild(s);return done(A(s,[{transform:'translateX(108%) skewX(-5deg)'},{transform:'translateX(0) skewX(0)'}],360))},
      in:function(v){var s=E('div','',null,{style:'inset:0 -8% 0 -2%;background:#f7f0dd url('+BASE+'art/paper.webp);background-blend-mode:soft-light;box-shadow:26px 0 44px rgba(70,50,20,.32)'});v.appendChild(s);return done(A(s,[{transform:'translateX(0)'},{transform:'translateX(-112%) skewX(5deg)'}],440))}},
    chii:{ /* 云朵涌上来，小家伙蹦过去 */
      out:function(v){var c=cloudWall();v.appendChild(c);var m=hopper();v.appendChild(m);A(m,[{left:'-90px',bottom:'30%'},{left:'50%',bottom:'44%'}],380,'ease-out');return done(A(c,[{transform:'translateY(115%)'},{transform:'translateY(0)'}],400,'cubic-bezier(.3,1.25,.5,1)'))},
      in:function(v){var c=cloudWall();v.appendChild(c);var m=hopper();m.style.left='50%';m.style.bottom='44%';v.appendChild(m);A(m,[{left:'50%',bottom:'44%',offset:0},{left:'75%',bottom:'58%',offset:.5},{left:'112%',bottom:'30%',offset:1}],460,'ease-in');return done(A(c,[{transform:'translateY(0)'},{transform:'translateY(-118%)'}],460,'cubic-bezier(.5,0,.5,1)',60))}},
    demon:{ /* 一刀斜斩，两半合拢再分开 */
      out:function(v){var h=halves(v);var ln=slash(v);A(ln,[{transform:'translate(-50%,-50%) rotate(-32deg) scaleX(0)',opacity:1},{transform:'translate(-50%,-50%) rotate(-32deg) scaleX(1)',opacity:1,offset:.6},{transform:'translate(-50%,-50%) rotate(-32deg) scaleX(1)',opacity:0}],260,'ease-out');A(h[0],[{transform:'translate(-55%,-55%)'},{transform:'none'}],230,'cubic-bezier(.7,0,.3,1)',90);return done(A(h[1],[{transform:'translate(55%,55%)'},{transform:'none'}],230,'cubic-bezier(.7,0,.3,1)',90))},
      in:function(v){var h=halves(v);var ln=slash(v);A(ln,[{transform:'translate(-50%,-50%) rotate(-32deg) scaleX(1)',opacity:1},{transform:'translate(-50%,-50%) rotate(-32deg) scaleX(1.1)',opacity:0}],300,'ease-out');A(h[0],[{transform:'none'},{transform:'translate(-58%,-58%)'}],420,'cubic-bezier(.7,0,.2,1)',50);return done(A(h[1],[{transform:'none'},{transform:'translate(58%,58%)'}],420,'cubic-bezier(.7,0,.2,1)',50))}},
    ink:{ /* 一滴墨洇满，再被水化开 */
      out:function(v){var b=E('div','',null,{style:'left:50%;top:50%;width:300vmax;height:300vmax;margin:-150vmax 0 0 -150vmax;background:url('+BASE+'art/ink_blot.webp) center/contain no-repeat'});v.appendChild(b);return done(A(b,[{transform:'scale(.012) rotate(0)',opacity:.9},{transform:'scale(1.1) rotate(16deg)',opacity:1}],520,'cubic-bezier(.5,0,.8,.5)'))},
      in:function(v){var m='url('+BASE+'art/ink_blot.webp) center no-repeat,linear-gradient(#000 0 0)';var b=E('div','',null,{style:'inset:0;background:#161411;-webkit-mask:'+m+';mask:'+m+';-webkit-mask-composite:xor;mask-composite:exclude;-webkit-mask-size:1px 1px,100% 100%;mask-size:1px 1px,100% 100%'});v.appendChild(b);var big=Math.ceil(Math.max(innerWidth,innerHeight)*3.2)+'px';var kf=[{WebkitMaskSize:'1px 1px,100% 100%',maskSize:'1px 1px,100% 100%'},{WebkitMaskSize:big+' '+big+',100% 100%',maskSize:big+' '+big+',100% 100%'}];A(b,[{opacity:1},{opacity:1,offset:.72},{opacity:0}],620,'linear');return done(A(b,kf,620,'cubic-bezier(.3,.5,.5,1)'))}},
    film:{ /* 过片：胶片拉过一格，快门开合 */
      out:function(v){v.appendChild(E('div','',null,{style:'inset:0;background:'+filmFrames+'',id:'fr'}));var fr=v.lastChild;A(fr,[{backgroundPositionY:'0'},{backgroundPositionY:'560px'}],340,'ease-in');var t=E('div','',null,{style:'left:0;right:0;top:0;height:51%;background:#050403'}),b=E('div','',null,{style:'left:0;right:0;bottom:0;height:51%;background:#050403'});v.appendChild(t);v.appendChild(b);A(fr,[{opacity:0},{opacity:1}],130);A(t,[{transform:'translateY(-100%)'},{transform:'none'}],250,'ease-in',90);return done(A(b,[{transform:'translateY(100%)'},{transform:'none'}],250,'ease-in',90))},
      in:function(v){var t=E('div','',null,{style:'left:0;right:0;top:0;height:51%;background:#050403'}),b=E('div','',null,{style:'left:0;right:0;bottom:0;height:51%;background:#050403'}),fl=E('div','',null,{style:'inset:0;background:radial-gradient(circle,#fff5d8,#f3b35a 62%,rgba(220,90,30,.7))'});v.appendChild(fl);v.appendChild(t);v.appendChild(b);A(fl,[{opacity:.85},{opacity:0}],420,'ease-out',70);A(t,[{transform:'none'},{transform:'translateY(-102%)'}],320,'cubic-bezier(.6,0,.2,1)');return done(A(b,[{transform:'none'},{transform:'translateY(102%)'}],320,'cubic-bezier(.6,0,.2,1)'))}}
  };
  function cloudWall(){var c=E('div','',null,{style:'left:-6%;right:-6%;top:-18%;bottom:-18%;background:#fffdf5'});for(var i=0;i<9;i++){var o=E('div','',cloud('#fffdf5'),{style:'width:34%;left:'+(i*12-4)+'%;top:-13%;transform:rotate('+(i%2?4:-5)+'deg)'});c.appendChild(o);var u=E('div','',cloud('#fffdf5'),{style:'width:34%;left:'+(i*12-4)+'%;bottom:-13%;transform:scaleY(-1)'});c.appendChild(u)}return c}
  function hopper(){return E('div','',['',MOCHI,PUDDING,HOPPER][1+Math.floor(Math.random()*3)],{style:'width:84px;left:-90px;bottom:30%;z-index:2;margin-left:-42px'})}
  function halves(v){var bg='#05070f';var a=E('div','',null,{style:'inset:0;background:'+bg+';clip-path:polygon(0 0,100% 0,100% 18%,0 82%)'}),b=E('div','',null,{style:'inset:0;background:'+bg+';clip-path:polygon(0 82%,100% 18%,100% 100%,0 100%)'});v.appendChild(a);v.appendChild(b);return [a,b]}
  function slash(v){var l=E('div','',null,{style:'left:50%;top:50%;width:150vmax;height:3px;background:linear-gradient(90deg,transparent,#fff 18%,#bfe2ff 50%,#fff 82%,transparent);box-shadow:0 0 18px 4px #7fc1ec;z-index:2'});v.appendChild(l);return l}
  function goTo(href){
    if(veilBusy) return; veilBusy=true;
    try{sessionStorage.setItem(TR,theme)}catch(e){}
    var v=veil();
    TRANS[theme].out(v).then(function(){location.href=href});
    setTimeout(function(){location.href=href},1100);
  }
  function arrive(){
    ROOT.classList.remove('tr-in');
    if(!incoming||!fxOn) return;
    var v=veil(),t=TRANS[theme];
    t.in(v).then(function(){v.remove();veilBusy=false});
    setTimeout(function(){v&&v.remove()},1200);
  }
  /* 主题之间切换：在当前页演一遍新世界的进场 */
  function switchTheme(next){
    if(next===theme) return closeSheet();
    var finish=function(){
      theme=next;ROOT.dataset.theme=next;put(LS,next);buildStage();relabel();drawWorlds();closeSheet();
      if(!fxOn) return;
      var v=veil();TRANS[next].in(v).then(function(){v.remove()});
    };
    if(!fxOn) return finish();
    var v=veil();TRANS[next].out(v).then(finish);
  }
  function internal(a){
    if(!a||!a.href||a.target==='_blank'||a.hasAttribute('download')) return false;
    var u;try{u=new URL(a.href,location.href)}catch(e){return false}
    if(u.origin!==location.origin) return false;
    if(u.pathname===location.pathname) return false;
    return /\.html$|\/$/.test(u.pathname);
  }
  document.addEventListener('click',function(e){
    if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||!fxOn) return;
    var a=e.target.closest&&e.target.closest('a');
    if(!internal(a)) return;
    e.preventDefault();goTo(a.href);
  });
  window.addEventListener('pageshow',function(e){if(e.persisted){var v=document.getElementById('veil');if(v)v.remove();veilBusy=false;ROOT.classList.remove('tr-in')}});

  /* ---------- 点击的手感 ---------- */
  var HOT='a,button,.opt,.vitem,.fbtn,summary,.zbtn,.allbtn,.it';
  var CLICK={
    paper:function(x,y){var s=spot(x,y,44,'<svg viewBox="0 0 44 44" width="44" height="44"><path d="M8 24l10 11L37 8" fill="none" stroke="#b0352a" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg>');var p=s.querySelector('path');A(p,[{strokeDashoffset:1},{strokeDashoffset:0}],200,'ease-out');return A(s,[{opacity:1},{opacity:1,offset:.6},{opacity:0}],520)},
    chii:function(x,y){var last;['✿','♡','✦','✿','♡'].forEach(function(c,i){var t=i/5*6.28+Math.random()*.6,r=30+Math.random()*24;var s=spot(x,y,22,'<span style="display:block;text-align:center;font:700 '+(13+Math.random()*7)+'px/22px Yuanti SC;color:'+['#f08da0','#67add0','#e6b830'][i%3]+'">'+c+'</span>');last=A(s,[{transform:'translate(0,0) scale(.3)',opacity:1},{transform:'translate('+Math.cos(t)*r+'px,'+Math.sin(t)*r+'px) scale(1.1)',opacity:1,offset:.6},{transform:'translate('+Math.cos(t)*r*1.15+'px,'+(Math.sin(t)*r+14)+'px) scale(.8)',opacity:0}],560,'cubic-bezier(.2,.9,.3,1)')});return last},
    demon:function(x,y,el){var c=getComputedStyle(el).getPropertyValue('--breath')||'#7fc1ec';var s=spot(x,y,2,'',{w:Math.min(460,innerWidth*.6)+'px',h:'2.5px',bg:'linear-gradient(90deg,transparent,#fff 30%,'+c+' 70%,transparent)',sh:'0 0 12px 2px '+c});return A(s,[{transform:'translate(-50%,-50%) rotate(-24deg) scaleX(0)',opacity:1},{transform:'translate(-50%,-50%) rotate(-24deg) scaleX(1)',opacity:1,offset:.55},{transform:'translate(-50%,-50%) rotate(-24deg) scaleX(1.06)',opacity:0}],300,'ease-out')},
    ink:function(x,y){var s=spot(x,y,120,'<div style="width:100%;height:100%;background:url('+BASE+'art/ink_blot.webp) center/contain no-repeat"></div>');return A(s,[{transform:'scale(.08) rotate(0)',opacity:.55},{transform:'scale(1) rotate(24deg)',opacity:.2,offset:.5},{transform:'scale(1.25) rotate(30deg)',opacity:0}],640,'cubic-bezier(.2,.7,.2,1)')},
    film:function(x,y){var s=spot(x,y,76,'<svg viewBox="0 0 76 76" width="76" height="76" fill="none" stroke="#e9a640" stroke-width="2"><path d="M2 18V2h16M58 2h16v16M74 58v16H58M18 74H2V58"/></svg>');var f=E('div','fxspot',null,{style:'inset:0;background:#fff4d6'});document.body.appendChild(f);A(f,[{opacity:.12},{opacity:0}],170,'ease-out').finished.then(function(){f.remove()},function(){f.remove()});return A(s,[{transform:'scale(1.5)',opacity:0},{transform:'scale(1)',opacity:1,offset:.45},{transform:'scale(.92)',opacity:0}],440,'ease-out')}
  };
  function spot(x,y,sz,html,o){var s=E('div','fxspot',html,{style:'left:'+(o?x:x-sz/2)+'px;top:'+(o?y:y-sz/2)+'px;width:'+(o?o.w:sz+'px')+';height:'+(o?o.h:sz+'px')+(o?';background:'+o.bg+';box-shadow:'+o.sh:'')});document.body.appendChild(s);setTimeout(function(){s.remove()},800);return s}
  var downAt=null;
  document.addEventListener('pointerdown',function(e){downAt=[e.clientX,e.clientY,Date.now()]},{passive:true});
  document.addEventListener('pointerup',function(e){
    if(!fxOn||!downAt) return;
    var d=Math.hypot(e.clientX-downAt[0],e.clientY-downAt[1]),t=Date.now()-downAt[2];downAt=null;
    if(d>8||t>450) return;
    var h=e.target.closest&&e.target.closest(HOT); if(!h) return;
    CLICK[theme](e.clientX,e.clientY,h);
  },{passive:true});

  /* 在页内换分区时的小过场 */
  var TABFX={
    paper:[[{opacity:.2,transform:'translateY(7px)'},{opacity:1,transform:'none'}],280],
    chii:[[{transform:'scale(.985,.96)',opacity:.3},{transform:'scale(1.006,1.008)',opacity:1,offset:.6},{transform:'none'}],340],
    demon:[[{transform:'translateX(-18px) skewX(-1.6deg)',opacity:.1,clipPath:'polygon(0 0,18% 0,6% 100%,0 100%)'},{transform:'none',opacity:1,clipPath:'polygon(0 0,130% 0,118% 100%,0 100%)'}],280],
    ink:[[{opacity:.05,filter:'blur(9px)'},{opacity:1,filter:'blur(0)'}],460],
    film:[[{filter:'blur(11px) brightness(1.4)',transform:'translateY(16px)'},{filter:'blur(0) brightness(1)',transform:'none'}],320]
  };
  function tabFx(el){if(!fxOn||!el) return;var c=TABFX[theme],a=el.animate(c[0],{duration:c[1],easing:'cubic-bezier(.2,.7,.2,1)'});a.onfinish=measure}

  /* ---------- 文案跟世界走 ---------- */
  function relabel(){
    var w=W[theme];
    document.querySelectorAll('.v2n button[data-g]').forEach(function(b){
      var g=b.dataset.g,real=b.dataset.real||b.textContent;b.dataset.real=real;
      var t=w.tabs&&w.tabs[g];
      b.innerHTML=(t&&t!==real)?t+'<small>'+real+'</small>':real;
    });
    document.querySelectorAll('section.card[data-kick-g]').forEach(function(s){s.dataset.kick=w.kick[s.dataset.kickG]||''});
    var f=0;document.querySelectorAll('section.card').forEach(function(s){f++;s.dataset.frame=(f<10?'0':'')+f+'A'});
    var hm=document.querySelector('.v2t .home');if(hm)hm.textContent=w.home;
    document.querySelectorAll('[data-w]').forEach(function(e){
      var k=e.dataset.w;
      if(k==='h1')e.textContent=w.hero[0];else if(k==='lead')e.textContent=w.hero[1];else if(k==='count')e.textContent=w.count;else if(k==='mx')e.textContent=w.mx;else if(k==='g'){e.textContent=w.grade[e.dataset.v]}
    });
    var vd=document.querySelector('.vdone');
    if(vd){var fl=w.flat.split('|');vd.textContent=vd.classList.contains('on')?fl[1]:fl[0];vd.dataset.fl=w.flat}
    document.querySelectorAll('.wt').forEach(function(t){t.classList.toggle('cur',t.dataset.t===theme)});
    var ch=document.getElementById('wchip');if(ch)ch.querySelector('span').textContent=w.name;
    var dh=document.getElementById('wdock');if(dh)dh.textContent=w.dock;
  }

  /* ---------- 换世界 ---------- */
  function tile(t){
    var w=W[t],art=t==='chii'?MOCHI:'';
    return '<button class="wt wt-'+t+(t===theme?' cur':'')+'" data-t="'+t+'" style="--r:'+w.r+'deg" aria-label="切换到'+w.name+'"><span class="art">'+art+'</span><span class="nm">'+w.name+'<small>'+w.sub+'</small></span></button>';
  }
  function fxBtn(){return '<button class="fxsw'+(fxOn?'':' off')+'" data-fx>'+(fxOn?'动效：开':'动效：关')+'</button>'}
  function drawWorlds(){
    var grid=LIST.map(tile).join('');
    var f=document.getElementById('worlds');
    if(!f){f=E('section','',null,{id:'worlds'});(document.querySelector('.wrap')||document.body).appendChild(f)}
    f.innerHTML='<div class="wh"><h3 id="wdock">'+W[theme].dock+'</h3><span>整个站点一起换，记在本机。</span>'+fxBtn()+'</div><div class="wgrid">'+grid+'</div>';
    var s=document.getElementById('wsheet');
    if(!s){s=E('div','',null,{id:'wsheet'});document.body.appendChild(s)}
    s.innerHTML='<div class="sh"><b>'+W[theme].dock+'</b>'+fxBtn()+'<button data-close>收起</button></div><div class="wgrid">'+grid+'</div>';
    var c=document.getElementById('wchip');
    if(!c){c=E('button','','<i></i><span></span>',{id:'wchip','aria-label':'换主题'});document.body.appendChild(c)}
    c.querySelector('span').textContent=W[theme].name;
  }
  function closeSheet(){var s=document.getElementById('wsheet');if(s)s.classList.remove('op')}
  document.addEventListener('click',function(e){
    var t=e.target.closest&&e.target.closest('.wt');if(t){switchTheme(t.dataset.t);return}
    if(e.target.closest&&e.target.closest('#wchip')){document.getElementById('wsheet').classList.toggle('op');return}
    if(e.target.closest&&e.target.closest('[data-close]')){closeSheet();return}
    if(e.target.closest&&e.target.closest('[data-fx]')){
      fxOn=!fxOn;put(LSF,fxOn?'on':'off');ROOT.classList.toggle('nofx',!fxOn);buildStage();drawWorlds();return;
    }
    var s=document.getElementById('wsheet');if(s&&s.classList.contains('op')&&!e.target.closest('#wsheet'))closeSheet();
  });

  /* ---------- 查有道：有旧按钮的页面它自己管，其它页面这里补一个 ---------- */
  function ydFallback(){
    if(document.getElementById('yd')) return;
    var b=E('button','','查有道',{id:'ydx',type:'button'});document.body.appendChild(b);
    var sel='',hold=0,timer=0,touch=window.matchMedia&&matchMedia('(pointer:coarse)').matches;
    function hide(){clearTimeout(timer);hold=0;b.style.display='none'}
    document.addEventListener('selectionchange',function(){
      var s=window.getSelection(),t=s?s.toString().trim():'';
      if(t&&/^[a-zA-Z' -]{2,40}$/.test(t)){
        sel=t;clearTimeout(timer);
        try{var r=s.getRangeAt(0).getBoundingClientRect();b.style.left=Math.max(8,Math.min(r.left,innerWidth-110))+'px';b.style.top=(r.bottom+(touch?30:8))+'px';b.style.display='block'}catch(e){}
      }else if(!hold){clearTimeout(timer);timer=setTimeout(function(){if(!hold)b.style.display='none'},touch?900:0)}
    });
    ['pointerdown','touchstart','mousedown'].forEach(function(ev){b.addEventListener(ev,function(){hold=1;clearTimeout(timer)},{passive:true})});
    b.addEventListener('click',function(){var u='https://dict.youdao.com/result?word='+encodeURIComponent(sel)+'&lang=en',w=null;try{w=window.open(u,'_blank')}catch(e){}if(!w)location.href=u;hide()});
    document.addEventListener('click',function(e){if(e.target!==b&&!window.getSelection().toString())hide()});
  }

  function init(){
    buildStage();buildHaze();drawWorlds();relabel();ydFallback();revealFallback();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',function(){measure();onScroll()});
    window.addEventListener('load',function(){measure();paint(true)});
    setTimeout(function(){measure();paint(true)},600);
    if(document.querySelector('a[href*="index"]')&&sessionStorage.getItem('eng_back_v1'))document.body.classList.add('has-back');
    arrive();
  }
  window.ENGV2={tabFx:tabFx,relabel:relabel,measure:measure,world:function(){return W[theme]},words:W};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
