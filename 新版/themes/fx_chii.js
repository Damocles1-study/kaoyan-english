/* 小小草原：三个小家伙走在页面底部的草地上，滚动就是拔草；每张卡片上沿趴一个；做题和做完都有反应。 */
(function(){
  var V=ENGV2,E=V.E,A=V.A,chr=V.chr,bust=V.bust,uri=V.uri;
  var ROOT=document.documentElement;
  /* 每一部分由谁陪：读＝吉伊，做题＝小八，复盘＝乌萨奇，词汇＝飞鼠，素材＝小八 */
  var WHO={read:'chii',test:'hachi',rev:'usagi',vocab:'momo',mat:'hachi'};
  var PROPS={read:'book',test:'fork',rev:'stick',vocab:'book',mat:null};
  var NAME={chii:'吉伊',hachi:'小八',usagi:'乌萨奇',momo:'飞鼠'};
  var LINES={
    chii:['哇…','今天也拔一点点','（紧张地看着选项）','呜…词好多','但是读完了！','这句话看懂了耶'],
    hachi:['总会有办法的！','再读一遍题干吧','一起去讨伐！','S 级先做，很划算','这个干扰项好狡猾'],
    usagi:['呀哈！','噗噜噜噜噜','哈？！','呜啦！','下一题！'],
    momo:['夸夸我！','这题我也会哦','要吃点心！','我也要！']
  };
  var TOTAL=152,band,trio=[],weeds=[],walkT=0,facing=1,reactT=0;
  function pick(a){return a[Math.floor(Math.random()*a.length)]}
  function rank(){
    var n=0;try{var d=JSON.parse(localStorage.getItem('eng_v2_done'))||{};Object.keys(d).forEach(function(k){if(d[k])n++})}catch(e){}
    var g=n>=96?'一级':n>=48?'二级':n>=24?'三级':n>=8?'四级':'五级';
    return {n:n,g:g};
  }
  function say(el,text,ms){
    var old=el.querySelector('.c-say');if(old)old.remove();
    var b=E('span','c-say',text);el.appendChild(b);
    var r=b.getBoundingClientRect();if(r.right>innerWidth-6)b.style.marginLeft=(innerWidth-6-r.right)+'px';if(r.left<6)b.style.marginLeft=(6-r.left)+'px';
    setTimeout(function(){b.remove()},ms||1800);
  }
  function hop(el,h){if(V.fxOn())A(el,[{transform:'translateY(0) scale(1.1,.86)'},{transform:'translateY(-'+(h||22)+'px) scale(.94,1.06)',offset:.45},{transform:'translateY(0) scale(1.08,.9)',offset:.85},{transform:'none'}],480,'ease-out')}

  function buildBand(){
    band=E('div','c-band fxn',null,{'aria-hidden':'false'});
    var grass='<svg class="c-grass" viewBox="0 0 1600 70" preserveAspectRatio="none"><path d="M0 26q40-14 90-4t110-2 130 6 140-8 150 8 130-6 140 6 130-8 120 6 110-6 150 6 100-2v50H0z" fill="#a9dc8b"/><path d="M0 40q70-10 150-2t180-2 170 4 190-6 170 6 180-4 170 4 150-4 240 2v36H0z" fill="#8ccb73"/></svg>';
    band.innerHTML=grass+'<div class="c-weeds"></div><div class="c-trio"></div>';
    var w=band.querySelector('.c-weeds'),cnt=innerWidth<700?9:18;
    for(var i=0;i<cnt;i++){
      var x=(i+.6)/cnt*100,fl=['#f8a9b6','#fff','#fbe58f'][i%3];
      var el=E('i','c-weed','<svg viewBox="0 0 24 24"><g fill="none" stroke="#4f8f49" stroke-width="2.600" stroke-linecap="round"><path d="M12 24Q9 13 4 9M12 24q0-11 2-18M12 24q3-8 8-12"/></g></svg><b style="background:'+fl+'"></b>',{style:'left:'+x+'%'});
      w.appendChild(el);weeds.push([x/100,el]);
    }
    var tr=band.querySelector('.c-trio');
    [['momo','norm'],['usagi','norm'],['hachi','norm'],['chii','norm']].forEach(function(c){
      var b=E('button','c-pal c-'+c[0],chr(c[0],c[1],false,c[0]==='chii'?null:null),{type:'button','aria-label':NAME[c[0]],title:NAME[c[0]]});
      b.dataset.c=c[0];tr.appendChild(b);trio.push(b);
    });
    tr.addEventListener('click',function(e){
      var b=e.target.closest('.c-pal');if(!b)return;
      var c=b.dataset.c,t=pick(LINES[c]);
      if(window.ENGTIME&&Math.random()<.34){var s=ENGTIME.stats();t='今天已经 '+ENGTIME.fmt(s.today,1)+' 了！'}
      b.innerHTML=chr(c,'joy',true);hop(b,26);say(b,NAME[c]+'：'+t);
      setTimeout(function(){b.innerHTML=chr(c,'norm')},900);
    });
    document.body.appendChild(band);
  }
  function decorate(){
    document.querySelectorAll('section.card').forEach(function(s,i){
      if(s.querySelector(':scope>.c-peek')) return;
      var g=s.dataset.g||'rev',c=WHO[g]||'chii';
      var p=E('div','c-peek fxn',bust(c,'norm'));if(i%2)p.classList.add('alt');s.appendChild(p);
    });
    var hero=document.querySelector('.hero');
    if(hero&&!document.querySelector('.c-hero')){
      var cd=hero.querySelector('.cd');
      if(cd){
        cd.appendChild(E('div','c-hero fxn','<i>'+chr('hachi','joy')+'</i><i>'+chr('chii','norm',false,'weed')+'</i><i>'+chr('usagi','norm',true)+'</i>'));
        var r=rank(),b=E('p','c-rank fxn','拔草检定 <b>'+r.g+'</b>　已拔完 '+r.n+' / '+TOTAL+' 片');
        var dd=document.getElementById('dd');if(dd)dd.parentNode.insertBefore(b,dd);
      }
    }
    var mods=document.querySelectorAll('.mod');
    ['chii','hachi','momo','usagi'].forEach(function(c,i){if(mods[i]&&!mods[i].querySelector('.c-modc'))mods[i].appendChild(E('span','c-modc fxn',chr(c,i?'norm':'joy',i===0)))});
  }
  function react(ok,o){
    clearTimeout(reactT);var old=document.getElementById('creact');if(old)old.remove();
    var c=ok?pick(['usagi','hachi','chii']):'chii';
    var line=ok?{usagi:'乌萨奇：呀哈！！',hachi:'小八：好耶！对了！',chii:'吉伊：哇…对了！'}[c]:'吉伊：'+pick(['呜…','呜哇…','没关系…再看看解析']);
    var r=E('div','c-react',chr(c,ok?'joy':'cry',ok),{id:'creact'});
    if(!ok){r.innerHTML+='<div class="c-pat">'+chr('hachi','norm',false)+'</div>'}
    r.appendChild(E('span','c-say show',line));
    document.body.appendChild(r);
    A(r,[{transform:'translateY(130%) rotate(-8deg)'},{transform:'translateY(-10%) rotate(3deg)',offset:.5},{transform:'none'}],360,'cubic-bezier(.2,1.2,.4,1)');
    if(ok) burst(o,['✿','♡','✦'],7);
    reactT=setTimeout(function(){A(r,[{transform:'none'},{transform:'translateY(130%)'}],240,'ease-in').finished.then(function(){r.remove()},function(){r.remove()})},1250);
  }
  function burst(el,chars,n,box){
    var r=box||el.getBoundingClientRect(),x=r.left+r.width*(.3+Math.random()*.4),y=r.top+r.height/2;
    for(var i=0;i<n;i++){
      var t=i/n*6.28+Math.random()*.5,d=44+Math.random()*50,s=E('span','fxspot',pick(chars),{style:'left:'+x+'px;top:'+y+'px;font:700 '+(14+Math.random()*9)+'px/1 "Yuanti SC",sans-serif;color:'+['#ef7f96','#5aa5cb','#e0ae1f','#70b45e'][i%4]});
      document.body.appendChild(s);
      (function(s){A(s,[{transform:'translate(0,0) scale(.3)',opacity:1},{transform:'translate('+Math.cos(t)*d+'px,'+Math.sin(t)*d+'px) scale(1.1)',opacity:1,offset:.6},{transform:'translate('+Math.cos(t)*d*1.1+'px,'+(Math.sin(t)*d+26)+'px) scale(.8)',opacity:0}],720,'cubic-bezier(.2,.9,.3,1)');setTimeout(function(){s.remove()},760)})(s);
    }
  }
  function celebrate(){
    var r=rank(),box=E('div','c-cert','<div class="c-paper"><small>拔草检定</small><b>'+r.g+' 合格</b><span>第 '+r.n+' 片草拔完啦</span><em>合格</em></div><div class="c-dance"><i>'+chr('hachi','joy',true)+'</i><i>'+chr('chii','joy',true)+'</i><i>'+chr('usagi','joy',true)+'</i></div>');
    document.body.appendChild(box);
    A(box.querySelector('.c-paper'),[{transform:'scale(.4) rotate(-9deg)',opacity:0},{transform:'scale(1.06) rotate(2deg)',opacity:1,offset:.6},{transform:'rotate(-1.500deg)',opacity:1}],420,'cubic-bezier(.2,1.2,.4,1)');
    box.querySelectorAll('.c-dance i').forEach(function(d,i){A(d,[{transform:'translateY(0)'},{transform:'translateY(-22px) rotate(8deg)'},{transform:'translateY(0)'},{transform:'translateY(-16px) rotate(-8deg)'},{transform:'translateY(0)'}],900,'ease-in-out',i*90)});
    var b={left:innerWidth*.2,top:innerHeight*.3,width:innerWidth*.6,height:innerHeight*.3};
    for(var i=0;i<4;i++)setTimeout(function(){burst(null,['✿','♡','✦','★'],11,b)},i*170);
    setTimeout(function(){A(box,[{opacity:1},{opacity:0}],300).finished.then(function(){box.remove()},function(){box.remove()})},1900);
  }
  /* 官方图：放在 themes/art/chii/ 就用（文件名见那里的 README）。先探 chii.png，没有就不再请求 */
  var probed=false;
  function probe(done){
    if(probed) return;probed=true;
    var dir=V.base+'art/chii/',names=[];['chii','hachi','usagi','momo'].forEach(function(c){names.push(c,c+'_joy',c+'_cry')});
    var flag=null;try{flag=sessionStorage.getItem('eng_chii_off')}catch(e){}
    if(flag==='0') return;
    var head=new Image();head.onerror=function(){try{sessionStorage.setItem('eng_chii_off','0')}catch(e){}};
    head.onload=function(){
      var m={},left=names.length;
      names.forEach(function(n){var i=new Image();i.onload=function(){m[n]=i.src;fin()};i.onerror=fin;i.src=dir+n+'.png'});
      function fin(){if(--left)return;V.setOff(m);done()}
    };
    head.src=dir+'chii.png';
  }
  var self;
  V.reg('chii',self={
    enter:function(){
      probe(function(){document.querySelectorAll('.fxn').forEach(function(n){n.remove()});self.enter();if(self.scroll)self.scroll(0,0)});
      trio=[];weeds=[];
      var S=ROOT.style;['read','test','rev','vocab','mat'].forEach(function(g){S.setProperty('--c-'+g,V.off()[WHO[g]]?'url("'+V.off()[WHO[g]]+'")':uri(chr(WHO[g],'norm',false,PROPS[g])))});
      buildBand();decorate();
    },
    leave:function(){var r=document.getElementById('creact');if(r)r.remove();band=null;trio=[];weeds=[]},
    relabel:function(){decorate()},
    scroll:function(p,sv){
      if(!band) return;
      var W=innerWidth,sz=trio[0]?trio[0].offsetWidth:50,st=W<760?52:112,span=sz*.92*3,lead=st+span+p*(W-st-span-sz-6);
      if(Math.abs(sv)>.5) facing=sv<0?-1:1;
      trio.forEach(function(b,i){
        var x=lead-(3-i)*sz*.92*facing;
        b.style.translate=Math.max(0,Math.min(W-sz,x)).toFixed(1)+'px 0';b.style.scale=facing<0?'-1 1':'1 1';
        var sv2=b.querySelector('svg');if(sv2)sv2.style.scale='';
      });
      weeds.forEach(function(w){w[1].classList.toggle('pull',w[0]*W<lead+sz*.8)});
      if(Math.abs(sv)>.5){band.classList.add('walk');clearTimeout(walkT);walkT=setTimeout(function(){if(band)band.classList.remove('walk')},260)}
    },
    tab:function(g){var c=WHO[g];if(!c||!trio.length)return;var b=trio.filter(function(x){return x.dataset.c===c})[0]||trio[2];hop(b,20);say(b,{read:'先读一读',test:'讨伐开始！',rev:'开反省会了',vocab:'吃词汇小点心',mat:'看看捡到的宝物'}[g],1300)},
    answer:react,
    done:celebrate
  });
})();
