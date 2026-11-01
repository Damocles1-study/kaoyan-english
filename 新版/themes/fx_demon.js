/* 大正夜行：呼吸法。每一部分对应一种呼吸，背景、日轮刀颜色和点击手感都跟着读到的部分变；
 * 切分区、答对、斩完各放一招。招式都是短促的一次性画面（一秒内），只画在透明画布上，不挡操作。 */
(function(){
  var V=ENGV2,E=V.E,A=V.A,ROOT=document.documentElement;
  var PI=Math.PI,R=Math.random;
  var GROUP={read:'water',test:'thunder',rev:'flame',vocab:'flower',mat:'mist'};
  var COL={water:'#7fc1ec',thunder:'#e8c551',flame:'#ef7f50',flower:'#ef9ab8',mist:'#b9c7dd',wind:'#7fdca4',insect:'#b89ae8',sun:'#ff8a3c',beast:'#8fa6c4'};
  var NAME={
    water:[['水之呼吸','壹之型 · 水面斩','slashWave'],['水之呼吸','拾之型 · 生生流转','spiral'],['水之呼吸','肆之型 · 击打潮','tide']],
    thunder:[['雷之呼吸','壹之型 · 霹雳一闪','bolt'],['雷之呼吸','壹之型 · 霹雳一闪 · 六连','bolt6']],
    flame:[['炎之呼吸','壹之型 · 不知火','crescent'],['炎之呼吸','伍之型 · 炎虎','flameBurst']],
    flower:[['花之呼吸','肆之型 · 红花衣','petalArc']],
    insect:[['虫之呼吸','蝶之舞 · 戏弄','butterfly']],
    mist:[['霞之呼吸','漆之型 · 胧','oboro']],
    wind:[['风之呼吸','壹之型 · 尘旋风 · 削斩','gale']],
    beast:[['兽之呼吸','贰之牙 · 切细','fangs']],
    sun:[['日之呼吸','壹之型 · 圆舞','enbu']]
  };
  function pick(a){return a[Math.floor(R()*a.length)]}
  function rnd(a,b){return a+R()*(b-a)}

  /* ---------- 一次性特效画布 ---------- */
  var cv,ctx,W,H,live=[],raf=0,sparks=[];
  function size(){if(!cv)return;var d=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0)}
  function mount(){cv=E('canvas','d-fx fxn');document.body.appendChild(cv);ctx=cv.getContext('2d');size()}
  function play(fn,ms,o){live.push({fn:fn,ms:ms*(window.__fxSlow||1),t0:performance.now(),o:o||{}});if(!raf)raf=requestAnimationFrame(loop)}
  function loop(t){
    raf=0;if(!ctx)return;
    ctx.clearRect(0,0,W,H);ctx.globalCompositeOperation='source-over';
    live=live.filter(function(f){var u=(t-f.t0)/f.ms;if(u>=1)return false;ctx.save();f.fn(ctx,Math.max(0,u),f.o);ctx.restore();return true});
    sparks=sparks.filter(function(p){p.l-=.016/p.d;if(p.l<=0)return false;p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.vx*=.985;ctx.globalCompositeOperation=p.add?'lighter':'source-over';ctx.globalAlpha=Math.min(1,p.l*1.6);ctx.fillStyle=p.c;ctx.beginPath();if(p.w)ctx.ellipse(p.x,p.y,p.s,p.s*.56,p.a+=p.va,0,6.3);else ctx.arc(p.x,p.y,p.s,0,6.3);ctx.fill();return true});
    ctx.globalAlpha=1;
    if(live.length||sparks.length) raf=requestAnimationFrame(loop); else ctx.clearRect(0,0,W,H);
  }
  function spark(x,y,c,o){o=o||{};sparks.push({x:x,y:y,vx:o.vx!=null?o.vx:rnd(-2.4,2.4),vy:o.vy!=null?o.vy:rnd(-3,1),g:o.g!=null?o.g:.05,s:o.s||rnd(1,3),c:c,l:1,d:o.d||rnd(.35,.8),add:o.add!==false,w:o.w,a:R()*6,va:rnd(-.2,.2)})}
  /* 带状笔触：沿一条曲线从 a 画到 b，两头收细，粗细由 w(s) 给 */
  function ribbon(c,P,a,b,w,col,n){
    if(b-a<.004)return;n=n||Math.max(14,Math.round((b-a)*80));c.lineCap='round';c.strokeStyle=col;
    /* 刚起笔时笔触很短，粗细按长度收，不然第一帧是个圆团 */
    var grow=Math.min(1,(b-a)/.2),prev=P(a);for(var i=1;i<=n;i++){var s=a+(b-a)*i/n,p=P(s),k=Math.sin(PI*i/n);c.lineWidth=Math.max(.3,w(s)*Math.pow(k,.65)*grow);c.beginPath();c.moveTo(prev[0],prev[1]);c.lineTo(p[0],p[1]);c.stroke();prev=p}
  }
  function window01(u,sp){var head=Math.min(1,u*sp),tail=Math.max(0,u*sp-1)/(sp-1);return [tail,head]}
  function fadeOut(u,from){return u<from?1:1-(u-from)/(1-from)}
  /* 浮世绘式浪：深蓝打底、中蓝、白色高光，再甩水珠 */
  function waterRibbon(c,P,a,b,w){
    c.globalCompositeOperation='source-over';
    ribbon(c,P,a,b,function(s){return w(s)*1.12},'#0f3f86');
    ribbon(c,P,a,b,function(s){return w(s)*.82},'#2b7fd0');
    ribbon(c,function(s){var p=P(s);return [p[0],p[1]-w(s)*.14]},a,b,function(s){return w(s)*.42},'#8fd3f6');
    ribbon(c,function(s){var p=P(s);return [p[0],p[1]-w(s)*.26]},a,b,function(s){return w(s)*.13},'#f2fbff');
  }
  function curl(c,x,y,r,rot,prog){
    /* 一个卷起的浪头 */
    var P=function(s){var a=rot+s*PI*2.6,rr=r*(1-s*.82);return [x+Math.cos(a)*rr,y+Math.sin(a)*rr]};
    waterRibbon(c,P,0,Math.max(.04,prog),function(){return r*.34});
  }
  var FORM={
    slashWave:function(){
      var cy=H*rnd(.36,.6),A0=H*.075,tilt=rnd(-.13,.03),ph=R()*6;
      var P=function(s){var x=-W*.06+s*W*1.12;return [x,cy+(x-W/2)*tilt+Math.sin(s*PI*3.4+ph)*A0]};
      var cl=[.24,.5,.76].map(function(s){return [s,P(s)]});
      play(function(c,u){
        var w=window01(u,1.7);c.globalAlpha=fadeOut(u,.72);
        waterRibbon(c,P,w[0],w[1],function(){return Math.min(W,1100)*.046});
        cl.forEach(function(q,i){if(w[1]>q[0])curl(c,q[1][0],q[1][1]-H*.03,Math.min(W,900)*.034,i*2+ph,Math.min(1,(w[1]-q[0])*5))});
      },760);
      for(var i=0;i<34;i++)(function(i){setTimeout(function(){var s=i/34,p=P(s);spark(p[0],p[1],pick(['#d8f2ff','#8fd3f6','#fff']),{vy:rnd(-4.6,-1),vx:rnd(-1.5,2.5),g:.14,s:rnd(1.2,3.6),add:false})},i*14)})(i);
    },
    spiral:function(){
      var cx=W*rnd(.34,.66),cy=H*rnd(.38,.6),Rm=Math.min(W,H)*.42,a0=R()*6;
      var P=function(s){var a=a0+s*PI*5.2,r=Rm*(1-s*.86);return [cx+Math.cos(a)*r,cy+Math.sin(a)*r*.82]};
      play(function(c,u){var w=window01(u,1.5);c.globalAlpha=fadeOut(u,.7);waterRibbon(c,P,w[0],w[1],function(s){return Math.min(W,H)*.048*(1-s*.52)})},880);
      for(var i=0;i<26;i++)(function(i){setTimeout(function(){var p=P(i/26);spark(p[0],p[1],'#bfe8ff',{g:.1,s:rnd(1,3),add:false})},i*22)})(i);
    },
    tide:function(){
      play(function(c,u){
        c.globalAlpha=fadeOut(u,.66);
        for(var k=0;k<3;k++){var y=H*(.82-k*.17)-u*H*.1,hd=Math.min(1,u*1.8+k*.06);
          var P=function(s){var x=W*(k%2?1.05-s*1.1:-.05+s*1.1);return [x,y+Math.sin(s*PI*5+k*2)*H*.028]};
          waterRibbon(c,P,Math.max(0,hd-.7),hd,function(){return H*(.05-k*.008)});
          curl(c,P(hd)[0],P(hd)[1]-H*.03,H*.05,k,Math.min(1,u*2.2));
        }
      },760);
    },
    bolt:function(n){
      n=n||1;var runs=[];
      for(var i=0;i<n;i++)runs.push(i%2?[W*1.04,H*rnd(.2,.8),-W*.04,H*rnd(.2,.8)]:[-W*.04,H*rnd(.2,.8),W*1.04,H*rnd(.2,.8)]);
      function jag(x1,y1,x2,y2,seg,amp){var o=[[x1,y1]];for(var i=1;i<seg;i++){var s=i/seg;o.push([x1+(x2-x1)*s+rnd(-amp*.3,amp*.3),y1+(y2-y1)*s+rnd(-amp,amp)])}o.push([x2,y2]);return o}
      function poly(c,pts,lw,col,to){c.lineWidth=lw;c.strokeStyle=col;c.lineJoin='miter';c.beginPath();var m=Math.floor(pts.length*to);for(var i=0;i<=m&&i<pts.length;i++){var p=pts[i];i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1])}c.stroke()}
      var dur=n>1?980:560,forks=[];
      play(function(c,u){
        var idx=Math.min(n-1,Math.floor(u*n)),lu=u*n-idx,r=runs[idx];
        if(!r.pts||R()<.5){r.pts=jag(r[0],r[1],r[2],r[3],Math.round(W/60),H*.06);r.fork=[];for(var i=0;i<6;i++){var q=r.pts[Math.floor(R()*r.pts.length)];r.fork.push(jag(q[0],q[1],q[0]+rnd(-120,120),q[1]+rnd(-160,160),6,16))}}
        var to=Math.min(1,lu*3.4),al=lu<.32?1:Math.max(0,1-(lu-.32)/.68);
        if(lu<.2){c.fillStyle='rgba(255,246,190,'+(.2*(1-lu/.2))+')';c.fillRect(0,0,W,H)}
        c.globalCompositeOperation='lighter';c.globalAlpha=al;
        c.shadowColor='#ffd84a';c.shadowBlur=30;poly(c,r.pts,12,'rgba(232,180,40,.55)',to);
        c.shadowBlur=12;poly(c,r.pts,4.6,'#ffe673',to);c.shadowBlur=0;poly(c,r.pts,1.8,'#fffef0',to);
        if(to>.7)r.fork.forEach(function(f){poly(c,f,1.6,'#ffe673',1)});
        /* 残影：贴地疾走留下的一道直线 */
        c.globalAlpha=al*.55;c.lineWidth=2;c.strokeStyle='#fff6c9';c.beginPath();c.moveTo(r[0],r[1]);c.lineTo(r[0]+(r[2]-r[0])*to,r[1]+(r[3]-r[1])*to);c.stroke();
      },dur);
      for(var i=0;i<26;i++)setTimeout(function(){var r=pick(runs);var s=R();spark(r[0]+(r[2]-r[0])*s,r[1]+(r[3]-r[1])*s,pick(['#ffe673','#fff','#ffc531']),{g:.12,s:rnd(1,2.4)})},rnd(0,dur*.7));
    },
    bolt6:function(){FORM.bolt(6)},
    crescent:function(){
      var cx=W*rnd(.4,.6),cy=H*rnd(.46,.62),Rr=Math.min(W,H)*.42,a0=rnd(-2.9,-2.3),span=rnd(2.1,2.6);
      var P=function(s){var a=a0+s*span;return [cx+Math.cos(a)*Rr,cy+Math.sin(a)*Rr*.92]};
      flameSweep(P,Math.min(W,H)*.095,720);
    },
    flameBurst:function(){
      var cx=W*rnd(.38,.62),cy=H*rnd(.42,.6),Rr=Math.min(W,H)*.3,a0=R()*6;
      var P=function(s){var a=a0+s*PI*2.6,r=Rr*(.38+s*.82);return [cx+Math.cos(a)*r,cy+Math.sin(a)*r*.86]};
      flameSweep(P,Math.min(W,H)*.1,860);
      play(function(c,u){c.globalCompositeOperation='lighter';c.globalAlpha=(1-u)*.5;var g=c.createRadialGradient(cx,cy,0,cx,cy,Rr*1.4*(0.5+u));g.addColorStop(0,'#ffcf73');g.addColorStop(1,'rgba(220,50,20,0)');c.fillStyle=g;c.fillRect(0,0,W,H)},620);
    },
    petalArc:function(){
      var cx=W*rnd(.4,.6),cy=H*rnd(.42,.6),Rr=Math.min(W,H)*.38,a0=R()*6;
      var P=function(s){var a=a0+s*PI*1.7;return [cx+Math.cos(a)*Rr,cy+Math.sin(a)*Rr*.85]};
      play(function(c,u){var w=window01(u,1.6);c.globalAlpha=fadeOut(u,.7);
        ribbon(c,P,w[0],w[1],function(){return Math.min(W,H)*.052},'rgba(214,74,120,.92)');
        ribbon(c,P,w[0],w[1],function(){return Math.min(W,H)*.028},'#ffb9cf');
        ribbon(c,P,w[0],w[1],function(){return Math.min(W,H)*.008},'#fff4f8');
      },760);
      for(var i=0;i<70;i++)(function(i){setTimeout(function(){var p=P(i/70);spark(p[0],p[1],pick(['#ff9dbd','#ffd3e1','#ef6f9b','#fff']),{w:1,s:rnd(3,7),g:.035,vy:rnd(-2,1.4),vx:rnd(-2.4,2.4),add:false,d:rnd(.6,1.1)})},i*9)})(i);
    },
    butterfly:function(){
      var fl=[];for(var i=0;i<16;i++)fl.push({x:W*rnd(.08,.92),y:H*rnd(.2,.95),p:R()*6,s:rnd(11,22),vx:rnd(-1.6,1.6),vy:rnd(-3.2,-1.2),c:pick(['#cdb4ff','#b89ae8','#f2c6ff','#8fd8ef'])});
      var sy=H*rnd(.3,.7);
      play(function(c,u){
        c.globalAlpha=fadeOut(u,.72);
        fl.forEach(function(f){var x=f.x+f.vx*u*110+Math.sin(u*14+f.p)*16,y=f.y+f.vy*u*110,fl2=Math.abs(Math.sin(u*26+f.p));
          c.save();c.translate(x,y);c.rotate(Math.sin(u*7+f.p)*.4);
          [-1,1].forEach(function(d){c.fillStyle=f.c;c.strokeStyle='#2e1c4d';c.lineWidth=1.1;c.save();c.scale(d*(.25+fl2*.75),1);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(f.s*.6,-f.s*1.1,f.s*1.4,-f.s*.6,f.s*.95,0);c.bezierCurveTo(f.s*1.2,f.s*.5,f.s*.5,f.s*.85,0,f.s*.15);c.fill();c.stroke();c.fillStyle='rgba(255,255,255,.55)';c.beginPath();c.arc(f.s*.72,-f.s*.34,f.s*.14,0,6.3);c.fill();c.restore()});
          c.fillStyle='#2e1c4d';c.fillRect(-1,-f.s*.34,2,f.s*.66);c.restore();
        });
        /* 突刺：细长一道光 */
        if(u<.32){var k=u/.32;c.globalCompositeOperation='lighter';c.strokeStyle='#e9dcff';c.lineWidth=3*(1-k);c.shadowColor='#b89ae8';c.shadowBlur=18;c.beginPath();c.moveTo(W*(.5-.6*k),sy);c.lineTo(W*(.5+.6*k),sy);c.stroke()}
      },1000);
    },
    oboro:function(){
      var bands=[];for(var i=0;i<7;i++)bands.push({y:H*rnd(.12,.92),a:rnd(-.1,.1),w:rnd(34,86),o:rnd(.34,.7),d:i%2?-1:1,sp:rnd(.6,1)});
      var sy=H*rnd(.3,.7);
      play(function(c,u){
        c.filter='blur(9px)';
        bands.forEach(function(b){var P=function(s){var x=b.d>0?-W*.1+s*W*1.2:W*1.1-s*W*1.2;return [x,b.y+(x-W/2)*b.a+Math.sin(s*7+b.y)*18]};
          var w=window01(u*b.sp,1.3);c.globalAlpha=b.o*fadeOut(u,.55);ribbon(c,P,w[0],w[1],function(){return b.w},'#dfe9f5',26)});
        c.filter='none';
        /* 雾里一闪，随后没入 */
        if(u>.28&&u<.62){var k=(u-.28)/.34;c.globalAlpha=Math.sin(k*PI);c.strokeStyle='#fff';c.lineWidth=2;c.shadowColor='#a7c5e6';c.shadowBlur=14;c.beginPath();c.moveTo(W*(.14+.2*k),sy-H*.12);c.lineTo(W*(.56+.32*k),sy+H*.1);c.stroke()}
      },1000);
    },
    gale:function(){
      var cx=W*rnd(.35,.65),cy=H*rnd(.4,.6);
      play(function(c,u){
        c.globalCompositeOperation='lighter';c.globalAlpha=fadeOut(u,.6);
        for(var k=0;k<5;k++){var o=k*1.26,rr=Math.min(W,H)*(.14+k*.07);
          var P=function(s){var a=o+s*PI*1.5+u*2.4;return [cx+Math.cos(a)*rr*(1+s*.3),cy+Math.sin(a)*rr*.72*(1+s*.3)]};
          var w=window01(u,1.5);ribbon(c,P,w[0],w[1],function(){return 11-k},k%2?'#a8f0c6':'#4fbf86')}
        /* 四道爪痕 */
        if(u<.5){var q=u/.5;for(var j=0;j<4;j++){var x=cx-110+j*62;c.strokeStyle='#eafff3';c.lineWidth=4*(1-q)+1;c.beginPath();c.moveTo(x+50,cy-150);c.lineTo(x+50-100*Math.min(1,q*2),cy-150+300*Math.min(1,q*2));c.stroke()}}
      },740);
    },
    fangs:function(){
      var y=H*rnd(.32,.66);
      function saw(c,x1,y1,x2,y2,k){c.beginPath();var n=18;for(var i=0;i<=n*k;i++){var s=i/n,o=i%2?16:-16,x=x1+(x2-x1)*s,yy=y1+(y2-y1)*s+o;i?c.lineTo(x,yy):c.moveTo(x,yy)}c.stroke()}
      play(function(c,u){var k=Math.min(1,u*2.4);c.globalAlpha=fadeOut(u,.5);c.globalCompositeOperation='lighter';c.lineJoin='miter';
        [['#6d88ad',12],['#d9e6f5',3]].forEach(function(s){c.strokeStyle=s[0];c.lineWidth=s[1];saw(c,-20,y-H*.22,W+20,y+H*.22,k);saw(c,W+20,y-H*.22,-20,y+H*.22,k)})
      },560);
    },
    enbu:function(){
      var cx=W/2,cy=H*.48,Rr=Math.min(W,H)*.36;
      var P=function(s){var a=-PI/2+s*PI*2;return [cx+Math.cos(a)*Rr,cy+Math.sin(a)*Rr]};
      flameSweep(P,Math.min(W,H)*.075,1000,1);
      play(function(c,u){c.globalAlpha=(1-u)*.34;c.globalCompositeOperation='lighter';var g=c.createRadialGradient(cx,cy,Rr*.4,cx,cy,Rr*1.4);g.addColorStop(0,'rgba(255,120,40,0)');g.addColorStop(.6,'rgba(255,120,40,.8)');g.addColorStop(1,'rgba(255,60,20,0)');c.fillStyle=g;c.fillRect(0,0,W,H)},1000);
    }
  };
  function flameSweep(P,base,ms,keep){
    var ph=R()*9,layers=[['#8f1f12',1.25],['#d6391a',1],['#f47a1f',.72],['#ffbd3f',.44],['#fff3c2',.18]];
    play(function(c,u){
      var w=keep?[Math.max(0,u*1.5-.6),Math.min(1,u*1.8)]:window01(u,1.6);
      c.globalAlpha=fadeOut(u,keep?.8:.68);
      layers.forEach(function(l,li){
        c.globalCompositeOperation=li>1?'lighter':'source-over';
        ribbon(c,function(s){var p=P(s),j=(Math.sin(s*60+ph+u*40)+Math.sin(s*23-u*30))*base*.13*l[1];return [p[0]+j*.5,p[1]-j]},w[0],w[1],function(s){return base*l[1]*(.74+.26*Math.sin(s*37+u*26))},l[0],60);
      });
    },ms);
    for(var i=0;i<46;i++)(function(i){setTimeout(function(){var p=P(i/46);spark(p[0],p[1],pick(['#ffd27a','#ff9a3a','#ff5a26','#fff1c0']),{vy:rnd(-5,-1.4),vx:rnd(-1.6,1.6),g:-.01,s:rnd(1,3.2)})},i/46*ms*.7)})(i);
  }
  /* 招式名：竖排，从右侧切入 */
  function title(a,b,color){
    var old=document.getElementById('dform');if(old)old.remove();
    var el=E('div','d-form','<b>'+a+'</b><span>'+b+'</span>',{id:'dform',style:'--breath:'+color});
    document.body.appendChild(el);
    A(el,[{opacity:0,transform:'translateX(26px) skewY(-3deg)',filter:'blur(5px)'},{opacity:1,transform:'none',filter:'blur(0)',offset:.16},{opacity:1,transform:'none',offset:.72},{opacity:0,transform:'translateX(-10px)'}],1250,'linear').finished.then(function(){el.remove()},function(){el.remove()});
  }
  function cast(kind,show){
    var f=pick(NAME[kind]);FORM[f[2]]();
    if(show!==false) title(f[0],f[1],COL[kind]);
  }
  /* 答错：血鬼术。红色裂纹从四角爬进来，题目被震一下 */
  function bloodArt(q){
    var cr=[];for(var i=0;i<14;i++){var x=R()<.5?(R()<.5?0:W):R()*W,y=x===0||x===W?R()*H:(R()<.5?0:H),a=Math.atan2(H/2-y,W/2-x)+rnd(-.5,.5),p=[[x,y]];for(var j=0;j<9;j++){a+=rnd(-.5,.5);x+=Math.cos(a)*rnd(18,46);y+=Math.sin(a)*rnd(18,46);p.push([x,y])}cr.push(p)}
    play(function(c,u){
      var g=c.createRadialGradient(W/2,H/2,Math.min(W,H)*.36,W/2,H/2,Math.max(W,H)*.72);g.addColorStop(0,'rgba(160,10,30,0)');g.addColorStop(1,'rgba(160,10,30,'+(.5*(1-u))+')');c.fillStyle=g;c.fillRect(0,0,W,H);
      c.globalAlpha=1-u;c.strokeStyle='#d8183a';c.shadowColor='#ff2a4d';c.shadowBlur=9;c.lineWidth=2;
      cr.forEach(function(p){c.beginPath();p.forEach(function(q,i){if(i/p.length<=u*2.4){i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1])}});c.stroke()});
    },720);
    if(q)A(q,[{transform:'translateX(0)'},{transform:'translateX(-7px)'},{transform:'translateX(6px)'},{transform:'translateX(-3px)'},{transform:'none'}],260,'ease-out');
    title('血鬼术','没斩断，再读解析',  '#ef4a5e');
  }
  /* 斩完：日之呼吸 + 一个「滅」字压下来 */
  function metsu(){
    cast('sun',false);
    var el=E('div','d-metsu','滅<small>日之呼吸 · 圆舞</small>');document.body.appendChild(el);
    A(el,[{opacity:0,transform:'translate(-50%,-50%) scale(2.6) rotate(-6deg)',filter:'blur(8px)'},{opacity:1,transform:'translate(-50%,-50%) scale(1) rotate(-3deg)',filter:'blur(0)',offset:.2},{opacity:1,transform:'translate(-50%,-50%) scale(1) rotate(-3deg)',offset:.72},{opacity:0,transform:'translate(-50%,-50%) scale(1.05) rotate(-3deg)'}],1500,'linear').finished.then(function(){el.remove()},function(){el.remove()});
    A(document.querySelector('.wrap')||document.body,[{transform:'translate(0,0)'},{transform:'translate(-5px,4px)',offset:.08},{transform:'translate(4px,-3px)',offset:.16},{transform:'none',offset:.3},{transform:'none'}],700);
  }
  /* 点击：一下小招，跟随当前部分的呼吸 */
  var MINI={
    water:function(x,y){play(function(c,u){c.globalAlpha=1-u;for(var i=0;i<2;i++){c.strokeStyle=i?'#e7f7ff':'#4aa8e8';c.lineWidth=(i?1.5:4)*(1-u)+.4;c.beginPath();c.ellipse(x,y,14+u*(46+i*8),(14+u*(46+i*8))*.5,-.3,.3+u*2,5+u*2);c.stroke()}},420);for(var i=0;i<6;i++)spark(x,y,'#bfe8ff',{g:.12,vy:rnd(-3,-1),add:false,s:rnd(1,2.2)})},
    thunder:function(x,y){var pts=[[x-70,y-16]];for(var i=1;i<8;i++)pts.push([x-70+i*20,y-16+i*4+rnd(-12,12)]);play(function(c,u){c.globalAlpha=1-u;c.globalCompositeOperation='lighter';c.strokeStyle='#ffe673';c.shadowColor='#ffd84a';c.shadowBlur=12;c.lineWidth=2.4;c.beginPath();pts.forEach(function(p,i){i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1])});c.stroke()},240);for(var j=0;j<5;j++)spark(x,y,'#ffe673',{s:rnd(.8,1.8)})},
    flame:function(x,y){var P=function(s){var a=-2.6+s*2.2;return [x+Math.cos(a)*44,y+30+Math.sin(a)*44]};play(function(c,u){c.globalAlpha=1-u;c.globalCompositeOperation='lighter';var w=window01(u,1.6);ribbon(c,P,w[0],w[1],function(){return 11},'#f4631f',16);ribbon(c,P,w[0],w[1],function(){return 4},'#ffe18a',16)},360);for(var i=0;i<8;i++)spark(x+rnd(-30,30),y+rnd(-16,10),pick(['#ffb347','#ff6a2b']),{vy:rnd(-3,-1),g:-.005,s:rnd(.8,2)})},
    flower:function(x,y){for(var i=0;i<12;i++)spark(x,y,pick(['#ff9dbd','#ffd3e1','#ef6f9b']),{w:1,s:rnd(3,5.6),g:.04,add:false,d:rnd(.5,.9),vy:rnd(-3,1)})},
    mist:function(x,y){play(function(c,u){c.filter='blur(7px)';c.globalAlpha=(1-u)*.8;c.fillStyle='#dfe9f5';for(var i=0;i<4;i++){c.beginPath();c.ellipse(x+(i-1.5)*18*(1+u*2),y+Math.sin(i*2)*8,18+u*24,8+u*8,0,0,6.3);c.fill()}},500)}
  };

  /* ---------- 背景：跟着当前这一部分变 ---------- */
  var ambStop=null,curKind='water',io=null,blade=null;
  function ambient(stage){
    var cvs=stage.querySelector('#fxc');if(!cvs)return;
    var c=cvs.getContext('2d'),d=Math.min(devicePixelRatio||1,2),w,h,ps=[],raf=0,last=0,stop=false,sv=0,bolt=null;
    function sz(){w=innerWidth;h=innerHeight;cvs.width=w*d;cvs.height=h*d;c.setTransform(d,0,0,d,0,0)}sz();
    var n=Math.round(Math.min(w,1500)/34);
    function sp(p,any){
      p=p||{};var k=curKind,flw=k==='flower'||R()<.25;
      p.k=flw?'petal':k==='water'?'stroke':k==='thunder'?'spark':k==='flame'?'ember':'fog';
      p.x=R()*w;p.y=any?R()*h:(p.k==='ember'||p.k==='spark'?h+12:p.k==='fog'?R()*h:-12);
      p.s=p.k==='petal'?2.8+R()*3.4:p.k==='stroke'?14+R()*36:p.k==='fog'?60+R()*90:.8+R()*1.6;
      p.vx=p.k==='fog'?.2+R()*.4:p.k==='stroke'?.3+R()*.5:-.14+R()*.3;
      p.vy=p.k==='petal'?.22+R()*.4:p.k==='stroke'?.06+R()*.1:p.k==='fog'?0:-.3-R()*.5;
      p.a=R()*6.28;p.va=(R()-.5)*.05;p.o=p.k==='fog'?.05+R()*.05:p.k==='stroke'?.14+R()*.22:.32+R()*.48;
      p.c=p.k==='petal'?(k==='flower'?(R()<.5?'#ff9dbd':'#ffd3e1'):(R()<.5?'#b18fe6':'#dcc7f5')):p.k==='stroke'?(R()<.5?'#7fc1ec':'#d8f2ff'):p.k==='spark'?(R()<.5?'#ffe673':'#fff6c9'):p.k==='fog'?'#cdd9ea':(R()<.5?'#ff9a4a':'#ffc56b');
      return p;
    }
    for(var i=0;i<n;i++)ps.push(sp(null,true));
    function frame(t){
      if(stop)return;raf=requestAnimationFrame(frame);if(document.hidden||t-last<32)return;last=t;
      c.clearRect(0,0,w,h);
      /* 远处的雷 */
      if(curKind==='thunder'&&!bolt&&R()<.006){var x=R()*w,pts=[[x,0]],y=0;while(y<h*.6){y+=20+R()*30;x+=rnd(-22,22);pts.push([x,y])}bolt={p:pts,l:1}}
      if(bolt){c.globalAlpha=bolt.l*.6;c.strokeStyle='#ffe673';c.lineWidth=1.3;c.shadowColor='#ffd84a';c.shadowBlur=10;c.beginPath();bolt.p.forEach(function(q,i){i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1])});c.stroke();c.shadowBlur=0;bolt.l-=.09;if(bolt.l<=0)bolt=null}
      for(var i=0;i<ps.length;i++){var p=ps[i];
        p.x+=p.vx+Math.sin(p.a)*.22;p.y+=p.vy;p.a+=p.va;
        if(p.y>h+14||p.y<-14||p.x<-160||p.x>w+160){sp(p,false);continue}
        c.globalAlpha=p.o*(p.k==='ember'||p.k==='spark'?(.55+.45*Math.sin(p.a*6)):1);c.fillStyle=p.c;c.strokeStyle=p.c;
        if(p.k==='stroke'){c.lineWidth=1.6;c.lineCap='round';c.beginPath();c.moveTo(p.x-p.s,p.y);c.quadraticCurveTo(p.x,p.y-Math.sin(p.a)*p.s*.32,p.x+p.s,p.y);c.stroke()}
        else if(p.k==='fog'){var g=c.createRadialGradient(p.x,p.y,0,p.x,p.y,p.s);g.addColorStop(0,p.c);g.addColorStop(1,'rgba(205,217,234,0)');c.fillStyle=g;c.fillRect(p.x-p.s,p.y-p.s,p.s*2,p.s*2)}
        else{c.save();c.translate(p.x,p.y);c.rotate(p.a);c.beginPath();p.k==='petal'?c.ellipse(0,0,p.s,p.s*.56,0,0,6.3):c.arc(0,0,p.s,0,6.3);c.fill();c.restore()}
      }
    }
    raf=requestAnimationFrame(frame);window.addEventListener('resize',sz);
    ambStop={stop:function(){stop=true;cancelAnimationFrame(raf);window.removeEventListener('resize',sz)},refresh:function(){for(var i=0;i<ps.length;i+=2)sp(ps[i],true)}};
  }
  function setKind(g,sweep){
    var k=GROUP[g];if(!k||k===curKind)return;curKind=k;ROOT.style.setProperty('--breath',COL[k]);
    if(ambStop)ambStop.refresh();
    if(sweep&&V.fxOn()){var P=function(s){return [W*.012+Math.sin(s*14)*8,H*(1-s)]};play(function(c,u){c.globalAlpha=fadeOut(u,.5);c.globalCompositeOperation='lighter';var w=window01(u,1.5);ribbon(c,P,w[0],w[1],function(){return 7},COL[k],30)},620)}
  }
  function watch(){
    var secs=[].slice.call(document.querySelectorAll('section.card'));
    secs.forEach(function(s){if(s.dataset.g&&!s.querySelector(':scope>.d-tex'))s.appendChild(E('i','d-tex fxn'))});
    if(io)io.disconnect();if(!secs.length||!('IntersectionObserver' in window))return;
    io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('d-cur',e.isIntersecting);if(e.isIntersecting&&e.target.dataset.g)setKind(e.target.dataset.g,true)})},{rootMargin:'-42% 0px -52% 0px'});
    secs.forEach(function(s){io.observe(s)});
  }
  /* 鎹鸦：点一下报时 */
  var CROW='<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M10 40c0-15 11-26 26-26 7 0 12 3 15 7l11 4-10 5c-1 12-9 21-20 21l-6 9-4-7-9 3 3-9c-4-1-6-3-6-7z" fill="#12131c" stroke="#3a3f5a" stroke-width="1.500" stroke-linejoin="round"/><path d="M24 36c5 7 12 9 20 6-3 9-13 12-22 7-3-2-2-9 2-13z" fill="#23263a"/><circle cx="41" cy="24" r="3.400" fill="#e8e3d5"/><circle cx="42" cy="24" r="1.600" fill="#111"/><path d="M51 21l11 4-10 5" fill="#c8a35a"/></svg>';
  var crow;
  function buildCrow(){
    crow=E('button','d-crow fxn',CROW,{type:'button','aria-label':'鎹鸦'});document.body.appendChild(crow);
    crow.addEventListener('click',function(){
      var t=pick(['嘎啊！传令！下一篇继续！','嘎！S 级优先！','嘎啊——全集中！','嘎！别在干扰项上走神！','嘎！时间还够，稳住！']);
      if(window.ENGTIME&&R()<.5){var s=ENGTIME.stats();t='嘎！今日全集中 '+ENGTIME.fmt(s.today,1)+'！'}
      var o=crow.querySelector('.d-say');if(o)o.remove();var b=E('span','d-say',t);crow.appendChild(b);setTimeout(function(){b.remove()},1900);
      if(V.fxOn())A(crow,[{transform:'none'},{transform:'translateY(-14px) rotate(-8deg)'},{transform:'none'}],340,'ease-out');
    });
  }
  /* ---------- 同行的人 ---------- */
  /* 每一部分由练这门呼吸的人陪：读＝炭治郎（水），做题＝善逸（雷），复盘＝炼狱（炎），词汇＝香奈乎（花），素材＝无一郎（霞）。
   * 官方站每人一张透明底 PNG：n 是编号，fb 是全身的可见范围（2020×1200），hf 是半身图里脸的中心（1000×700）。 */
  var WHO={read:'tan',test:'zen',rev:'ren',vocab:'kan',mat:'mui'};
  var PPL={
    tan:{name:'炭治郎',n:1,fb:[710,21,524,1165],hf:[532,212],col:'#2f8f6d',hair:'#5a1f1f',robe:'#16704f'},
    nez:{name:'祢豆子',n:2,fb:[699,56,539,1095],hf:[588,252],col:'#e98aa6',hair:'#1a1420',robe:'#f0a0b4'},
    zen:{name:'善逸',n:3,fb:[686,56,570,1129],hf:[512,232],col:'#e8c551',hair:'#f0c23a',robe:'#f0a42c'},
    ino:{name:'伊之助',n:4,fb:[771,20,486,1160],hf:[452,186],col:'#7fa6c9',hair:'#6e7f92',robe:'#6a4a33'},
    ren:{name:'炼狱',n:9,fb:[636,86,746,1015],hf:[530,262],col:'#ef7f50',hair:'#f3a52a',robe:'#f2ece0'},
    kan:{name:'香奈乎',n:5,fb:[739,44,483,1113],hf:[512,236],col:'#ef9ab8',hair:'#241a2c',robe:'#f2ece0'},
    mui:{name:'无一郎',n:14,fb:[697,83,548,1049],hf:[532,238],col:'#8fd0d4',hair:'#16282c',robe:'#1d3d44'}
  };
  var HALF='https://kimetsu.com/anime/portal/assets/img/chara/half/img_chara_half_',FULL='https://kimetsu.com/anime/portal/assets/img/chara/full/img_chara_full_';
  var official=V.get('eng_demon_mode')==='img';
  /* 把图的一块裁进元素：元素的宽高比要和这块相同 */
  function crop(u,W0,H0,x,y,w,h,cls){
    return '<i class="d-im '+(cls||'')+'" style="background-image:url('+u+');background-size:'+(W0/w*100).toFixed(2)+'% '+(H0/h*100).toFixed(2)+'%;background-position:'+(x/(W0-w)*100).toFixed(2)+'% '+(y/(H0-h)*100).toFixed(2)+'%"></i>';
  }
  /* 官方图取不到时的矢量小人 */
  function vec(c,box){
    var p=PPL[c],head='<circle cx="50" cy="34" r="19" fill="#f7dcc4" stroke="#17141c" stroke-width="1.800"/>',
      hair='<path d="M30 34C28 12 72 12 70 34 62 24 56 22 50 25 44 22 38 24 30 34z" fill="'+p.hair+'" stroke="#17141c" stroke-width="1.800" stroke-linejoin="round"/>',
      eye='<g fill="#17141c"><ellipse cx="42" cy="37" rx="2.300" ry="3"/><ellipse cx="58" cy="37" rx="2.300" ry="3"/></g>';
    if(c==='ino'){head='<path d="M29 20 36 9 42 19H58L64 9 71 20C75 34 68 52 50 54 32 52 25 34 29 20z" fill="'+p.hair+'" stroke="#17141c" stroke-width="1.800" stroke-linejoin="round"/><ellipse cx="50" cy="42" rx="9" ry="6" fill="#d9d4cb" stroke="#17141c" stroke-width="1.400"/>';hair='';eye='<g fill="#f2ece0"><circle cx="40" cy="30" r="4"/><circle cx="60" cy="30" r="4"/></g><g fill="#17141c"><circle cx="40" cy="30" r="1.600"/><circle cx="60" cy="30" r="1.600"/></g>'}
    if(c==='nez')eye+='<rect x="43" y="44" width="14" height="3.600" rx="1.800" fill="#7ea35a" stroke="#17141c"/>';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+(box||'0 0 100 100')+'" class="d-im"><path d="M34 52 20 97H80L66 52z" fill="'+p.robe+'" stroke="#17141c" stroke-width="1.800" stroke-linejoin="round"/><path d="M50 52V97" stroke="#17141c" stroke-width="1.500"/>'+(c==='tan'?'<path d="M28 66h9v9h-9zM37 75h9v9h-9zM54 66h9v9h-9zM63 75h9v9h-9z" fill="#14151c"/>':'')+head+hair+eye+'</svg>';
  }
  /* full＝全身，贴底居中的方形；bust＝探头（3:2）；face＝大头（方形） */
  function pic(c,kind){
    var p=PPL[c];
    if(!official) return vec(c,kind==='bust'?'14 6 72 48':kind==='face'?'20 8 60 60':null);
    if(kind==='full'){var b=p.fb,S=Math.max(b[2],b[3]);return crop(FULL+p.n+'.png',2020,1200,b[0]+b[2]/2-S/2,b[1]+b[3]-S,S,S)}
    var h=p.hf;
    if(kind==='bust') return crop(HALF+p.n+'.png',1000,700,h[0]-225,h[1]-140,450,300);
    return crop(HALF+p.n+'.png',1000,700,h[0]-120,h[1]-122,240,240);
  }
  /* ---------- 阶级：和价值评级无关，这是自己斩了多少篇 ---------- */
  var LADDER=[['癸',0],['壬',2],['辛',5],['庚',10],['己',18],['戊',28],['丁',42],['丙',60],['乙',80],['甲',105],['柱',130]],TOTAL=152;
  function doneCount(){var n=0;try{var d=JSON.parse(localStorage.getItem('eng_v2_done'))||{};Object.keys(d).forEach(function(k){if(d[k])n++})}catch(e){}return n}
  function grade(n){var i=0;while(i<LADDER.length-1&&n>=LADDER[i+1][1])i++;return i}
  /* ---------- 底部夜路：滚动就是赶路，路过的鬼影被斩掉，原地亮起紫藤花灯 ---------- */
  var SQUAD=['zen','nez','tan','ino'];
  var LINES={
    tan:['闻到破绽的气味了！','看清题干再出刀','全集中，别走神','长男不能放弃！'],
    nez:['嗯！嗯！','（点点头）','（摸摸你的头）'],
    zen:['这题好可怕啊啊！','我、我真的会做吗…','睡一觉再读？不行不行','选项在发出不对劲的声音！'],
    ino:['猪突猛进！！','放马过来！','这个单词归本大爷了！','跟上来！']
  };
  var road,squad=[],onis=[],walkT=0,facing=1,reactT=0;
  var ONI='<svg viewBox="0 0 30 34"><path d="M6 34C3 20 4 11 8 7L6 1l6 4c2-1 4-1 6 0l6-4-2 6c4 4 5 13 2 27z" fill="#05060c" stroke="#3d2233" stroke-width="1"/><path d="M9 15l5 2M21 15l-5 2" stroke="#ff3a4d" stroke-width="2" stroke-linecap="round"/></svg>';
  var LAMP='<svg viewBox="0 0 24 34"><path d="M12 0V8" stroke="#8f7a48" stroke-width="1.400"/><rect x="5" y="8" width="14" height="18" rx="5" fill="#ffb963" stroke="#5a3a1c"/><path d="M5 17h14M9 8v18M15 8v18" stroke="#c9722e" stroke-width=".8"/><path d="M12 26v6" stroke="#b18fe6" stroke-width="2"/></svg>';
  function say(el,text,ms){
    var old=el.querySelector('.d-sb');if(old)old.remove();
    var b=E('span','d-sb',text);el.appendChild(b);
    var r=b.getBoundingClientRect();if(r.right>innerWidth-6)b.style.marginLeft=(innerWidth-6-r.right)+'px';if(r.left<6)b.style.marginLeft=(6-r.left)+'px';
    setTimeout(function(){b.remove()},ms||1800);
  }
  function hop(el,h){if(V.fxOn())A(el,[{transform:'translateY(0)'},{transform:'translateY(-'+(h||18)+'px)',offset:.45},{transform:'none'}],380,'ease-out')}
  function buildRoad(){
    road=E('div','d-road fxn');
    road.innerHTML='<svg class="d-ground" viewBox="0 0 1600 60" preserveAspectRatio="none"><path d="M0 16q120-9 260-3t300-2 310 4 340-5 390 5v45H0z" fill="#090b16"/><path class="d-edge" d="M0 16q120-9 260-3t300-2 310 4 340-5 390 5" fill="none"/></svg><div class="d-onis"></div><div class="d-squad"></div>';
    var w=road.querySelector('.d-onis'),cnt=innerWidth<700?8:16;
    for(var i=0;i<cnt;i++){
      var x=(i+.7)/cnt*100,el=E('i','d-oni','<span class="u">'+ONI+'</span><span class="l">'+ONI+'</span><b>'+LAMP+'</b>',{style:'left:'+x+'%'});
      w.appendChild(el);onis.push([x/100,el]);
    }
    var sq=road.querySelector('.d-squad');
    SQUAD.forEach(function(c){var b=E('button','d-pal d-'+c,pic(c,'full'),{type:'button','aria-label':PPL[c].name,title:PPL[c].name});b.dataset.c=c;sq.appendChild(b);squad.push(b)});
    sq.addEventListener('click',function(e){
      var b=e.target.closest('.d-pal');if(!b)return;
      var c=b.dataset.c,t=pick(LINES[c]);
      if(window.ENGTIME&&R()<.3){var s=ENGTIME.stats();t='今天已经全集中 '+ENGTIME.fmt(s.today,1)+' 了！'}
      hop(b,24);say(b,PPL[c].name+'：'+t);
    });
    document.body.appendChild(road);
  }
  function decorate(){
    document.querySelectorAll('section.card').forEach(function(s,i){
      if(s.querySelector(':scope>.d-peek')) return;
      var g=s.dataset.g,c=WHO[g];if(!c)c=i%2?'nez':'tan';
      s.appendChild(E('div','d-peek fxn'+(i%2?' alt':''),pic(c,'bust')));
    });
    document.querySelectorAll('h2').forEach(function(h){
      if(h.querySelector(':scope>.d-h2i')) return;
      var s=h.closest('section.card'),c=(s&&WHO[s.dataset.g])||'tan';
      h.insertBefore(E('i','d-h2i fxn',pic(c,'face'),{style:'--ring:'+PPL[c].col}),h.firstChild);
    });
    var box=document.querySelector('.wrap');
    if(official&&box&&!box.querySelector('.d-credit')) box.appendChild(E('p','d-credit fxn','角色图片 ©吾峠呼世晴／集英社・アニプレックス・ufotable，显示时直接取自<a href="https://kimetsu.com/anime/" target="_blank" rel="noopener">动画官方站</a>，本站未保存。这是个人备考页面，非官方、非商用。'));
    var hero=document.querySelector('.hero');
    if(hero&&!hero.querySelector('.d-hero')){
      /* 放在最前面：页面按 .hero>div:last-child 排文字栏 */
      hero.insertBefore(E('div','d-hero fxn','<i>'+pic('nez','full')+'</i><i>'+pic('tan','full')+'</i><i>'+pic('ren','full')+'</i>'),hero.firstChild);
      var dd=document.getElementById('dd');
      if(dd){
        var n=doneCount(),k=grade(n),next=LADDER[k+1],lad='';
        LADDER.forEach(function(l,i){lad+='<u class="'+(i<k?'on':i===k?'cur':'')+'">'+l[0]+'</u>'});
        dd.parentNode.insertBefore(E('p','d-rank fxn','<span class="d-lad">'+lad+'</span><span>已斩 <b>'+n+'</b> / '+TOTAL+' 篇'+(next?'，再斩 '+(next[1]-n)+' 篇升「'+next[0]+'」':'，已入柱')+'</span>'),dd);
      }
    }
    var mods=document.querySelectorAll('.mod');
    ['tan','zen','ren','kan'].forEach(function(c,i){if(mods[i]&&!mods[i].querySelector('.d-modc'))mods[i].appendChild(E('span','d-modc fxn',pic(c,'bust')))});
  }
  /* 答题：角色从右下角探出来说一句 */
  function react(c,line,second){
    clearTimeout(reactT);var old=document.getElementById('dreact');if(old)old.remove();
    var r=E('div','d-react fxn',pic(c,'full'),{id:'dreact'});
    if(second) r.appendChild(E('div','d-pat',pic(second,'full')));
    var b=E('span','d-sb show',PPL[c].name+'：'+line);r.appendChild(b);
    document.body.appendChild(r);
    var br=b.getBoundingClientRect();if(br.right>innerWidth-6)b.style.marginLeft=(innerWidth-6-br.right)+'px';
    A(r,[{transform:'translateY(115%)'},{transform:'translateY(-6%)',offset:.6},{transform:'none'}],300,'cubic-bezier(.2,.9,.3,1)');
    reactT=setTimeout(function(){A(r,[{transform:'none'},{transform:'translateY(115%)'}],220,'ease-in').finished.then(function(){r.remove()},function(){r.remove()})},1450);
  }
  var RIGHT={tan:'做到了！下一题！',zen:'欸？我、我答对了？！',ino:'哈哈哈！本大爷赢了！',ren:'唔姆！了不起！',kan:'（轻轻点头）',mui:'…嗯，这题不难。',nez:'嗯嗯！'};
  var WRONG=[['tan','没关系，看清破绽再来！'],['zen','这干扰项太可怕了啊啊！'],['ino','可恶！再来一次！']];
  var TABS={read:'先闻一闻这篇的气味',test:'要、要拔刀了吗…！',rev:'复盘也要燃烧起来！',vocab:'（抛硬币）正面，背这个',mat:'…这些素材，记下来'};
  /* 斩完：滅 + 升阶令 + 大家一起跳 */
  function cert(){
    var n=doneCount(),k=grade(n),up=k>0&&grade(n-1)<k;
    var box=E('div','d-cert fxn','<div class="d-order"><small>鬼杀队 · 传令</small><b>'+(up?'晋升「'+LADDER[k][0]+'」':'阶级「'+LADDER[k][0]+'」')+'</b><span>第 '+n+' 篇，斩</span></div><div class="d-dance"><i>'+pic('zen','full')+'</i><i>'+pic('tan','full')+'</i><i>'+pic('ino','full')+'</i></div>');
    document.body.appendChild(box);
    A(box.querySelector('.d-order'),[{transform:'translateY(16px) scale(.9)',opacity:0},{transform:'none',opacity:1}],300,'cubic-bezier(.2,.9,.3,1)',260);
    box.querySelectorAll('.d-dance>i').forEach(function(d,i){A(d,[{transform:'translateY(0)'},{transform:'translateY(-18px)'},{transform:'translateY(0)'},{transform:'translateY(-12px)'},{transform:'translateY(0)'}],900,'ease-in-out',260+i*90)});
    setTimeout(function(){A(box,[{opacity:1},{opacity:0}],260).finished.then(function(){box.remove()},function(){box.remove()})},2000);
  }
  /* 官方站取不到就退回矢量；结果记下来，下次一开始就用对的 */
  var probed=false;
  function probe(redo){
    if(probed) return;probed=true;
    var i=new Image(),was=official;
    i.onload=function(){official=i.naturalWidth===1000;V.put('eng_demon_mode',official?'img':'');if(official!==was)redo()};
    i.onerror=function(){official=false;V.put('eng_demon_mode','');if(was)redo()};
    i.src=HALF+'1.png';
  }
  var self;
  V.reg('demon',self={
    enter:function(stage,o){
      mount();window.addEventListener('resize',size);
      curKind='water';ROOT.style.setProperty('--breath',COL.water);
      if(o.fx)ambient(stage);
      watch();buildCrow();
      squad=[];onis=[];buildRoad();decorate();
      probe(function(){document.querySelectorAll('.d-peek,.d-h2i,.d-road,.d-hero,.d-rank,.d-modc,.d-credit').forEach(function(n){n.remove()});squad=[];onis=[];buildRoad();decorate();self.scroll(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight),0)});
      self.scroll(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight),0);
    },
    leave:function(){
      if(ambStop){ambStop.stop();ambStop=null}if(io){io.disconnect();io=null}
      window.removeEventListener('resize',size);live=[];sparks=[];cancelAnimationFrame(raf);raf=0;cv=ctx=null;
      ROOT.style.removeProperty('--breath');var f=document.getElementById('dform');if(f)f.remove();
      road=null;squad=[];onis=[];
    },
    relabel:function(){if(cv){watch();decorate()}},
    scroll:function(p,sv){
      if(!road||!squad.length) return;
      var W0=innerWidth,sz=squad[0].offsetWidth||70,gap=sz*.56,st=W0<760?46:118,span=gap*3,lead=st+span+p*(W0-st-span-sz-6);
      if(Math.abs(sv)>.5) facing=sv<0?-1:1;
      squad.forEach(function(b,i){
        var x=lead-(3-i)*gap*facing;
        b.style.translate=Math.max(0,Math.min(W0-sz,x)).toFixed(1)+'px 0';b.style.scale=facing<0?'-1 1':'1 1';
      });
      onis.forEach(function(w){w[1].classList.toggle('cut',w[0]*W0<lead+sz*.7)});
      if(Math.abs(sv)>.5){road.classList.add('walk');clearTimeout(walkT);walkT=setTimeout(function(){if(road)road.classList.remove('walk')},260)}
    },
    click:function(x,y,el){
      if(!ctx||el.closest('.opt')||el.closest('.vdone')||el.closest('.d-pal'))return false;
      var g=(el.closest('[data-g]')||{dataset:{}}).dataset.g,k=GROUP[g]||curKind;(MINI[k]||MINI.water)(x,y);return false;
    },
    tab:function(g){
      if(!ctx)return;setKind(g);
      if(g==='all')cast(pick(['sun','wind','beast','insect']));else cast(g==='vocab'&&R()<.5?'insect':GROUP[g]||'water');
      if(g==='all')react('ino','全部放马过来！');else if(WHO[g])react(WHO[g],TABS[g]);
    },
    answer:function(ok,o,q){
      if(!ctx)return;
      if(!ok){bloodArt(q);var w=pick(WRONG);react(w[0],w[1],'nez');return}
      var s=q.closest('section.card'),g=s&&s.dataset.g,base=GROUP[g]||'thunder';
      /* 大多放这一部分的招，偶尔换一门呼吸，别总是同一招 */
      cast(R()<.6?base:pick(['water','thunder','flame','flower','insect','mist','wind','beast']));
      /* 同理：大多是这一部分陪读的人夸，偶尔换人 */
      var c=R()<.6&&WHO[g]?WHO[g]:pick(['tan','zen','ino','nez']);react(c,RIGHT[c]);
    },
    done:function(){if(ctx){metsu();cert()}},
    _test:function(k,f){if(f!=null){var n=NAME[k][f];FORM[n[2]]();title(n[0],n[1],COL[k])}else cast(k)}
  });
})();
