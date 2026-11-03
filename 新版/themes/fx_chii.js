/* 小小草原：四个小家伙走在页面底部的草地上，滚动就是拔草；每张卡片上沿趴一个；做题和做完都有反应。
 * 情境层（下半个文件）：天空跟着本机时间换昼夜，山和草跟着季节换色，可选城市接实时天气（雨雪雾雷），节日和节气有装饰和配件，
 * 角色闲着会自己动、久不操作会打盹，连续读 20 分钟提醒看远处。每一样都能在 🌿 护眼按钮里单独关，时间/季节/天气/节日还能手动指定。 */
(function(){
  var V=ENGV2,E=V.E,A=V.A,chr=V.chr,bust=V.bust,uri=V.uri;
  var ROOT=document.documentElement;
  /* 每一部分由谁陪：读＝吉伊，做题＝小八，复盘＝乌萨奇，词汇＝飞鼠，素材＝小八（有官方图时换栗子馒头） */
  var WHO={read:'chii',test:'hachi',rev:'usagi',vocab:'momo',mat:'hachi'};
  var PROPS={read:'book',test:'fork',rev:'stick',vocab:'book',mat:null};
  var NAME={chii:'吉伊',hachi:'小八',usagi:'乌萨奇',momo:'飞鼠',kuri:'栗子馒头'};
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
  /* 换表情时把身上的配件一起带上 */
  function face(b,e,up){var c=b.dataset.c,say0=b.querySelector('.c-say');b.innerHTML=chr(c,e||'norm',up)+accOf(c);if(say0)b.appendChild(say0)}

  function buildBand(){
    band=E('div','c-band fxn',null,{'aria-hidden':'false'});
    var grass='<svg class="c-grass" viewBox="0 0 1600 70" preserveAspectRatio="none"><path d="M0 26q40-14 90-4t110-2 130 6 140-8 150 8 130-6 140 6 130-8 120 6 110-6 150 6 100-2v50H0z" fill="#a9dc8b"/><path d="M0 40q70-10 150-2t180-2 170 4 190-6 170 6 180-4 170 4 150-4 240 2v36H0z" fill="#8ccb73"/></svg>';
    band.innerHTML=grass+'<div class="c-bdeco"></div><div class="c-weeds"></div><div class="c-trio"></div>';
    var w=band.querySelector('.c-weeds'),cnt=innerWidth<700?9:18;
    for(var i=0;i<cnt;i++){
      var x=(i+.6)/cnt*100,fl=['#f8a9b6','#fff','#fbe58f'][i%3];
      var el=E('i','c-weed','<svg viewBox="0 0 24 24"><g fill="none" stroke="#4f8f49" stroke-width="2.600" stroke-linecap="round"><path d="M12 24Q9 13 4 9M12 24q0-11 2-18M12 24q3-8 8-12"/></g></svg><b style="background:'+fl+'"></b>',{style:'left:'+x+'%'});
      w.appendChild(el);weeds.push([x/100,el]);
    }
    var tr=band.querySelector('.c-trio');
    ['momo','usagi','hachi','chii'].forEach(function(c){
      var b=E('button','c-pal c-'+c,'',{type:'button','aria-label':NAME[c],title:NAME[c]});
      b.dataset.c=c;face(b);tr.appendChild(b);trio.push(b);
    });
    tr.addEventListener('click',function(e){
      var b=e.target.closest('.c-pal');if(!b)return;
      var c=b.dataset.c,cx=ctxLines(),t=cx.length&&Math.random()<.5?pick(cx):pick(LINES[c]);
      if(window.ENGTIME&&Math.random()<.22){var s=ENGTIME.stats();t='今天已经 '+ENGTIME.fmt(s.today,1)+' 了！'}
      wake();face(b,'joy',true);hop(b,26);say(b,NAME[c]+'：'+t,2200);
      setTimeout(function(){face(b,sleeping?'joy':'norm')},900);
    });
    document.body.appendChild(band);
  }
  function decorate(){
    document.querySelectorAll('section.card').forEach(function(s,i){
      if(s.querySelector(':scope>.c-peek')) return;
      var g=s.dataset.g||'rev',c=WHO[g]||'chii';
      var p=E('div','c-peek fxn',bust(c,'norm'));if(i%2)p.classList.add('alt');s.appendChild(p);
    });
    if(V.off().chii){
      /* 官方拼图不能塞进 CSS 背景，标题前的小头像改成页面元素 */
      document.querySelectorAll('h2').forEach(function(h){
        if(h.querySelector(':scope>.c-h2i')) return;
        var s=h.closest('section.card'),w=(s&&WHO[s.dataset.g])||'chii';
        h.insertBefore(E('i','c-h2i fxn',chr(w)),h.firstChild);
      });
      var box=document.querySelector('.wrap');
      if(box&&!box.querySelector('.c-credit')) box.appendChild(E('p','c-credit fxn','角色图片 ©ナガノ/ちいかわ製作委員会，显示时直接取自<a href="https://www.anime-chiikawa.jp/chara.html" target="_blank" rel="noopener">官方动画站</a>，本站未保存。这是个人备考页面，非官方、非商用。'));
    }
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
    [V.off().kuri?'kuri':'chii','hachi','momo','usagi'].forEach(function(c,i){if(mods[i]&&!mods[i].querySelector('.c-modc'))mods[i].appendChild(E('span','c-modc fxn',chr(c,i?'norm':'joy',i===0)))});
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
  /* 图的来源：本机 art/chii/ 有图用本机的（可带表情图）；否则网页打开时从官方站取拼图；再不行退回矢量 */
  var probed=false;
  function useSprite(done){
    var had=V.get('eng_chii_mode')==='sprite',i=new Image();
    i.onload=function(){
      if(i.naturalWidth!==V.SPR.w){i.onerror();return}
      V.put('eng_chii_mode','sprite');V.setOff(V.SPR.r);if(!had)done();
    };
    i.onerror=function(){V.put('eng_chii_mode','');V.setOff({});if(had)done()};
    i.src=V.SPR.u;
  }
  function probe(done){
    if(probed) return;probed=true;
    var dir=V.base+'art/chii/',names=[];['chii','hachi','usagi','momo'].forEach(function(c){names.push(c,c+'_joy',c+'_cry')});names.push('kuri');
    var flag=null;try{flag=sessionStorage.getItem('eng_chii_off')}catch(e){}
    if(flag==='0') return useSprite(done);
    var head=new Image();
    head.onerror=function(){try{sessionStorage.setItem('eng_chii_off','0')}catch(e){}useSprite(done)};
    head.onload=function(){
      var m={},left=names.length;
      names.forEach(function(n){var i=new Image();i.onload=function(){m[n]=i.src;fin()};i.onerror=fin;i.src=dir+n+'.png'});
      function fin(){if(--left)return;V.setOff(m);done()}
    };
    head.src=dir+'chii.png';
  }

  /* ================= 情境 ================= */
  var SK='eng_chii_scene_v1',WXK='eng_chii_wx_v1',RK='eng_chii_rest_v1',INK='#2f2a27';
  var SC=loadSc();
  function loadSc(){
    var d={time:1,season:1,weather:1,fest:1,act:1,rest:1,city:'',ov:{}};
    try{var o=JSON.parse(localStorage.getItem(SK));if(o)for(var k in d)if(k in o)d[k]=o[k]}catch(e){}
    if(!d.ov||typeof d.ov!=='object')d.ov={};return d;
  }
  function saveSc(){try{localStorage.setItem(SK,JSON.stringify(SC))}catch(e){}}
  var TN={dawn:'清晨',day:'白天',dusk:'黄昏',night:'夜晚'},SN={spring:'春',summer:'夏',autumn:'秋',winter:'冬'},WN={sun:'晴',cloud:'多云',rain:'雨',storm:'雷雨',snow:'雪',fog:'雾'};
  var CITY=[['北京',39.90,116.40],['上海',31.23,121.47],['广州',23.13,113.26],['深圳',22.54,114.06],['天津',39.13,117.20],['重庆',29.56,106.55],['杭州',30.27,120.15],['南京',32.06,118.80],['苏州',31.30,120.62],['武汉',30.59,114.31],['成都',30.66,104.07],['西安',34.34,108.94],['长沙',28.23,112.94],['郑州',34.75,113.63],['济南',36.65,117.12],['青岛',36.07,120.38],['合肥',31.82,117.23],['福州',26.07,119.30],['厦门',24.48,118.09],['南昌',28.68,115.86],['昆明',25.04,102.71],['贵阳',26.65,106.63],['南宁',22.82,108.37],['海口',20.04,110.32],['沈阳',41.80,123.43],['大连',38.91,121.61],['长春',43.82,125.32],['哈尔滨',45.80,126.53],['石家庄',38.04,114.51],['太原',37.87,112.55],['呼和浩特',40.84,111.75],['兰州',36.06,103.83],['西宁',36.62,101.78],['银川',38.49,106.23],['乌鲁木齐',43.83,87.62],['拉萨',29.65,91.13],['香港',22.32,114.17],['澳门',22.20,113.54],['台北',25.03,121.57]];
  /* 节日：acc＝角色配件，deco＝装饰，sign＝草地告示牌 */
  var FEST={
    newyear:{n:'元旦',acc:'party',deco:'fw',sign:'新年快乐',lines:['新年快乐！','新的一年也一起拔草！','许个愿：上岸！']},
    spring:{n:'春节',acc:'bow',deco:'lantern',sign:'过年好',lines:['过年好！','吃饺子了吗','红包…可以买点心吗']},
    lantern:{n:'元宵节',acc:'bow',deco:'lantern',sign:'元宵快乐',lines:['吃汤圆！','灯笼好漂亮','猜灯谜吧！']},
    valentine:{n:'情人节',deco:'heart',sign:'♡',lines:['（递出一颗小心心）','今天也喜欢学习…吗']},
    qingming:{n:'清明',deco:'kite',sign:'清明',lines:['去放风筝吧','春天的风好舒服']},
    labor:{n:'劳动节',deco:'flag',sign:'劳动节',lines:['劳动节也在拔草！','放假也学一会儿']},
    duanwu:{n:'端午',deco:'zongzi',sign:'端午安康',lines:['吃粽子！甜的还是咸的？','赛龙舟！']},
    qixi:{n:'七夕',deco:'heart',sign:'七夕',lines:['今晚能看到银河吗','（偷偷许愿）']},
    midautumn:{n:'中秋',deco:'moon',sign:'中秋快乐',lines:['月亮好圆！','月饼！要莲蓉的','一起赏月吧']},
    national:{n:'国庆',deco:'lantern',sign:'国庆快乐',lines:['放假啦…但是要学习','国庆也一起讨伐']},
    halloween:{n:'万圣节',acc:'witch',deco:'pumpkin',sign:'不给糖就捣蛋',lines:['不给糖就捣蛋！','（戴上了魔女帽）','南瓜灯好可爱']},
    dongzhi:{n:'冬至',deco:'dumpling',sign:'冬至',lines:['冬至吃饺子！','今天白天最短哦']},
    xmas:{n:'圣诞节',acc:'santa',deco:'tree',sign:'圣诞快乐',lines:['圣诞快乐！','袜子挂好了吗','圣诞老人会送单词书吗…']},
    exam:{n:'大讨伐日',acc:'band',deco:'banner',sign:'大讨伐日',lines:['大讨伐日！全力以赴！','一直以来辛苦了','相信自己！','我们都在这里陪着你']}
  };
  var FD=[['newyear','12-31','01-01'],['valentine','02-14','02-14'],['labor','05-01','05-05'],['national','10-01','10-07'],['halloween','10-30','11-01'],['xmas','12-24','12-25'],
    ['spring','2026-02-16','2026-02-22'],['spring','2027-02-05','2027-02-11'],['lantern','2026-03-03','2026-03-03'],['lantern','2027-02-20','2027-02-20'],
    ['qingming','2026-04-04','2026-04-06'],['qingming','2027-04-05','2027-04-05'],['duanwu','2026-06-19','2026-06-19'],['duanwu','2027-06-09','2027-06-09'],
    ['qixi','2026-08-19','2026-08-19'],['qixi','2027-08-08','2027-08-08'],['midautumn','2026-09-24','2026-09-26'],['midautumn','2027-09-14','2027-09-16'],
    ['dongzhi','2026-12-22','2026-12-22'],['exam','2026-12-18','2026-12-20']];
  var TERM={'2026-11-07':'立冬','2026-11-22':'小雪','2026-12-07':'大雪','2026-12-22':'冬至','2027-01-05':'小寒','2027-01-20':'大寒','2027-02-04':'立春','2027-02-19':'雨水','2027-03-06':'惊蛰','2027-03-21':'春分'};
  var EXAM=[2026,11,19],MILE=[100,60,50,30,21,14,10,7,5,3,2,1];
  function p2(n){return (n<10?'0':'')+n}
  function ymd(d){return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())}
  function festOn(d){
    var full=ymd(d),md=full.slice(5),hit='';
    FD.forEach(function(f){
      if(f[1].length===10){if(full>=f[1]&&full<=f[2])hit=f[0]}
      else if(f[1]<=f[2]?(md>=f[1]&&md<=f[2]):(md>=f[1]||md<=f[2]))hit=hit||f[0];
    });
    return hit;
  }
  function daysLeft(d){var a=new Date(d.getFullYear(),d.getMonth(),d.getDate()),b=new Date(EXAM[0],EXAM[1],EXAM[2]);return Math.round((b-a)/864e5)}
  function wxCache(){try{var o=JSON.parse(localStorage.getItem(WXK));if(o&&o.city===SC.city)return o}catch(e){}return null}
  function scene(){
    var d=new Date(),h=d.getHours(),m=d.getMonth()+1,ov=SC.ov,wc=wxCache();
    var t=ov.time||(h>=5&&h<7?'dawn':h>=7&&h<17?'day':h>=17&&h<19?'dusk':'night');
    var s=ov.season||(m>=3&&m<=5?'spring':m>=6&&m<=8?'summer':m>=9&&m<=11?'autumn':'winter');
    var w=ov.weather||(wc&&wc.w)||'';
    var f=ov.fest||festOn(d),left=daysLeft(d);
    return {time:SC.time?t:'',season:SC.season?s:'',weather:SC.weather?w:'',fest:SC.fest?f:'',
      term:SC.fest&&!ov.fest?TERM[ymd(d)]||'':'',left:left,mile:SC.fest&&!f&&MILE.indexOf(left)>=0?left:0,
      late:SC.time&&!ov.time&&(h>=23||h<5),hour:h,temp:SC.weather&&!ov.weather&&wc?wc.temp:null};
  }
  function key(s){return [s.time,s.season,s.weather,s.fest,s.term,s.mile,s.late?1:0].join('|')}
  /* 天气：选了城市才会去问 Open-Meteo（免费、不用登录），只发城市的经纬度；半小时问一次 */
  function cityPos(c){
    if(/^geo:/.test(c)){var a=c.slice(4).split(',');return [+a[0],+a[1]]}
    for(var i=0;i<CITY.length;i++)if(CITY[i][0]===c)return [CITY[i][1],CITY[i][2]];return null;
  }
  function wmo(c){return c<=1?'sun':c<=3?'cloud':c===45||c===48?'fog':(c>=51&&c<=67)||(c>=80&&c<=82)?'rain':(c>=71&&c<=77)||c===85||c===86?'snow':c>=95?'storm':'cloud'}
  var wxErr='',wxBusy=false;
  function wxFetch(force){
    if(!SC.weather||!SC.city||wxBusy) return;
    var c=wxCache();if(c&&!force&&Date.now()-c.at<18e5) return;
    var p=cityPos(SC.city);if(!p||!window.fetch) return;
    wxBusy=true;wxErr='';
    fetch('https://api.open-meteo.com/v1/forecast?latitude='+p[0].toFixed(2)+'&longitude='+p[1].toFixed(2)+'&current=temperature_2m,weather_code&timezone=auto')
      .then(function(r){if(!r.ok)throw 0;return r.json()})
      .then(function(j){
        var code=+j.current.weather_code,o={city:SC.city,at:Date.now(),code:code,w:wmo(code),temp:Math.round(j.current.temperature_2m)};
        try{localStorage.setItem(WXK,JSON.stringify(o))}catch(e){}
        wxBusy=false;applyScene(true);
      })
      .catch(function(){wxBusy=false;wxErr='天气没取到（离线或接口不通），先按晴天显示';if(window.ENGEYE)ENGEYE.refresh()});
  }

  /* ---------- 画：装饰 SVG ---------- */
  var SVG={
    lantern:'<svg viewBox="0 0 40 64"><path d="M20 0v8" stroke="#7a5a3e" stroke-width="1.6"/><rect x="12" y="7" width="16" height="5" rx="1.5" fill="#e6b13a" stroke="'+INK+'" stroke-width="1.6"/><ellipse cx="20" cy="27" rx="17" ry="15" fill="#e65a5a" stroke="'+INK+'" stroke-width="2"/><path d="M20 12c-6 4-6 26 0 30M20 12c6 4 6 26 0 30M8 20q12 3 24 0M8 34q12-3 24 0" fill="none" stroke="#b83c42" stroke-width="1.3"/><rect x="12" y="41" width="16" height="5" rx="1.5" fill="#e6b13a" stroke="'+INK+'" stroke-width="1.6"/><path d="M17 46l-1 16M20 46v17M23 46l1 16" stroke="#e65a5a" stroke-width="1.8" stroke-linecap="round"/><text x="20" y="31" text-anchor="middle" font-size="11" font-weight="700" fill="#ffe7a8" font-family="PingFang SC,sans-serif">福</text></svg>',
    pumpkin:'<svg viewBox="0 0 54 44"><path d="M27 9c1-5 3-7 7-8" stroke="#5f8a3e" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="17" cy="27" rx="13" ry="15" fill="#f39a3c" stroke="'+INK+'" stroke-width="2"/><ellipse cx="37" cy="27" rx="13" ry="15" fill="#f39a3c" stroke="'+INK+'" stroke-width="2"/><ellipse cx="27" cy="27" rx="12" ry="16" fill="#f7ab4f" stroke="'+INK+'" stroke-width="2"/><path d="M19 22l4 4h-6zM35 22l-4 4h6zM18 32q9 7 18 0l-3 3-3-2-3 3-3-3-3 2z" fill="'+INK+'"/></svg>',
    tree:'<svg viewBox="0 0 54 76"><rect x="23" y="62" width="8" height="12" fill="#a8693a" stroke="'+INK+'" stroke-width="1.8"/><path d="M27 6 8 34h10L5 52h12L3 66h48L37 52h12L36 34h10z" fill="#6fb26a" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M27 1l2.6 5.400 5.900.8-4.300 4.100 1 5.800L27 14.300 21.800 17l1-5.800-4.300-4.100 5.900-.8z" fill="#f6d045" stroke="'+INK+'" stroke-width="1.4"/><g stroke="'+INK+'" stroke-width="1.2"><circle cx="20" cy="40" r="3" fill="#ef7f96"/><circle cx="34" cy="46" r="3" fill="#67add0"/><circle cx="16" cy="58" r="3" fill="#f6d045"/><circle cx="38" cy="60" r="3" fill="#ef7f96"/><circle cx="28" cy="28" r="2.600" fill="#fff"/></g></svg>',
    snowman:'<svg viewBox="0 0 44 58"><circle cx="22" cy="40" r="16" fill="#fff" stroke="'+INK+'" stroke-width="2"/><circle cx="22" cy="17" r="11" fill="#fff" stroke="'+INK+'" stroke-width="2"/><circle cx="18" cy="15" r="1.700" fill="'+INK+'"/><circle cx="26" cy="15" r="1.700" fill="'+INK+'"/><path d="M22 18l8 2-8 1z" fill="#f39a3c"/><path d="M11 26q11 6 22 0v4q-11 6-22 0z" fill="#e65a5a" stroke="'+INK+'" stroke-width="1.400"/><circle cx="22" cy="37" r="1.600" fill="'+INK+'"/><circle cx="22" cy="44" r="1.600" fill="'+INK+'"/></svg>',
    mooncake:'<svg viewBox="0 0 44 32"><ellipse cx="22" cy="20" rx="19" ry="10" fill="#c98a3a" stroke="'+INK+'" stroke-width="2"/><ellipse cx="22" cy="15" rx="19" ry="10" fill="#e8b45e" stroke="'+INK+'" stroke-width="2"/><ellipse cx="22" cy="15" rx="11" ry="5.500" fill="none" stroke="#b97a2c" stroke-width="1.600"/><text x="22" y="18" text-anchor="middle" font-size="7" font-weight="700" fill="#9a5d1c" font-family="PingFang SC,sans-serif">月</text></svg>',
    zongzi:'<svg viewBox="0 0 40 36"><path d="M20 3 37 33H3z" fill="#7fbf6a" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M20 3 26 33M11 18h18" stroke="#4f8f49" stroke-width="1.400"/><path d="M8 24h24" stroke="#e8c06a" stroke-width="3"/></svg>',
    dumpling:'<svg viewBox="0 0 44 30"><path d="M4 22C6 8 38 8 40 22c-12 5-24 5-36 0z" fill="#fffaf0" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M12 12l2 5M18 10l1 5M24 10l-1 5M30 12l-2 5" stroke="#c9b48e" stroke-width="1.500" stroke-linecap="round"/></svg>',
    heart:'<svg viewBox="0 0 36 32"><path d="M18 30C4 20 1 13 4 7c3-6 11-6 14 1 3-7 11-7 14-1 3 6 0 13-14 23z" fill="#f597ab" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/></svg>',
    kite:'<svg viewBox="0 0 64 96"><path d="M32 2 56 30 32 58 8 30z" fill="#f6a7b4" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M32 2v56M8 30h48" stroke="'+INK+'" stroke-width="1.200"/><path d="M32 58q-6 8 2 14t-2 14q-4 5 0 10" fill="none" stroke="'+INK+'" stroke-width="1.400"/><g fill="#fbe58f" stroke="'+INK+'" stroke-width="1"><path d="M30 66l-6 2 6 2z"/><path d="M33 80l6 2-6 2z"/></g></svg>',
    flag:'<svg viewBox="0 0 40 56"><path d="M8 4v50" stroke="#a8693a" stroke-width="3" stroke-linecap="round"/><path d="M9 6h26l-6 9 6 9H9z" fill="#ef7f96" stroke="'+INK+'" stroke-width="1.800" stroke-linejoin="round"/></svg>',
    fw:'<svg viewBox="0 0 44 44"><g stroke-linecap="round" stroke-width="2.400"><path d="M22 22l0-16M22 22l14-8M22 22l14 8M22 22v16M22 22 8 30M22 22 8 14" stroke="#ef7f96"/><path d="M22 22l9-13M22 22l15 1M22 22l9 13M22 22l-9 13M22 22 7 23M22 22l-9-13" stroke="#f6d045"/></g><circle cx="22" cy="22" r="3" fill="#fff" stroke="'+INK+'" stroke-width="1.200"/></svg>',
    banner:'<svg viewBox="0 0 44 56"><path d="M6 4v50" stroke="#a8693a" stroke-width="3" stroke-linecap="round"/><path d="M7 6h30v30l-15-6-15 6z" fill="#e65a6e" stroke="'+INK+'" stroke-width="1.800" stroke-linejoin="round"/><text x="22" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#fffdf5" font-family="PingFang SC,sans-serif">必胜</text></svg>',
    leaf:'<svg viewBox="0 0 30 30"><path d="M4 26C4 12 14 4 27 3c0 13-9 23-23 23z" fill="#f2a64a" stroke="'+INK+'" stroke-width="1.600"/><path d="M4 26 20 10" stroke="#b9702a" stroke-width="1.300"/></svg>',
    fly:'<svg viewBox="0 0 30 22"><path d="M15 11C9 0 1 2 2 8s8 6 13 3c-4 5-3 10 1 10" fill="#fbc3cd" stroke="'+INK+'" stroke-width="1.400"/><path d="M15 11c6-11 14-9 13-3s-8 6-13 3c4 5 3 10-1 10" fill="#fbe58f" stroke="'+INK+'" stroke-width="1.400"/><path d="M15 6v12" stroke="'+INK+'" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  /* 戴在头上的配件。v＝viewBox 宽 60、高 44 */
  var ACC={
    santa:'<svg viewBox="0 0 60 44"><path d="M8 37C11 19 21 6 35 5c9 0 15 6 17 15l-6 3c-2-5-6-8-10-7-7 2-12 10-14 21z" fill="#e0484f" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><circle cx="51" cy="25" r="5" fill="#fff" stroke="'+INK+'" stroke-width="1.800"/><rect x="5" y="32" width="40" height="9" rx="4.500" fill="#fff" stroke="'+INK+'" stroke-width="2"/></svg>',
    witch:'<svg viewBox="0 0 60 44"><ellipse cx="30" cy="37" rx="27" ry="6" fill="#5b4a7a" stroke="'+INK+'" stroke-width="2"/><path d="M17 36 31 2l12 34z" fill="#5b4a7a" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M19 31h23" stroke="#f2b84b" stroke-width="4"/></svg>',
    party:'<svg viewBox="0 0 60 44"><path d="M19 40 30 4l11 36z" fill="#fbe58f" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M23 28l13-5M21 35l17-6M26 17l8-3" stroke="#f08da0" stroke-width="3"/><circle cx="30" cy="4" r="4" fill="#67add0" stroke="'+INK+'" stroke-width="1.600"/></svg>',
    bow:'<svg viewBox="0 0 60 44"><g transform="translate(14 0)"><path d="M30 30c-8-10-20-8-18 0s12 6 18 0c6 6 20 8 18 0s-10-10-18 0z" fill="#e0484f" stroke="'+INK+'" stroke-width="1.800"/><circle cx="30" cy="30" r="3.500" fill="#f6c343" stroke="'+INK+'" stroke-width="1.400"/><path d="M28 33l-4 9M32 33l4 9" stroke="#e0484f" stroke-width="2.600" stroke-linecap="round"/></g></svg>',
    band:'<svg viewBox="0 0 60 22"><path d="M3 9q27-8 54 0v8q-27-8-54 0z" fill="#fff" stroke="'+INK+'" stroke-width="1.700"/><text x="30" y="16" text-anchor="middle" font-size="8.500" font-weight="800" fill="#d2364b" font-family="PingFang SC,sans-serif">必胜</text><path d="M56 12l4-5M56 14l5 3" stroke="#d2364b" stroke-width="2.600" stroke-linecap="round"/></svg>'
  };
  var UMB={chii:'#fbc3cd',hachi:'#9ccbe8',usagi:'#fbe58f',momo:'#c7e4ae'};
  function umbrella(c){return '<svg viewBox="0 0 80 70"><path d="M40 33v28q0 6-6 6t-6-6" fill="none" stroke="'+INK+'" stroke-width="2.600" stroke-linecap="round"/><path d="M4 34Q40-6 76 34q-6-5-12 0-6-5-12 0-6-5-12 0-6-5-12 0-6-5-12 0-6-5-12 0z" fill="'+UMB[c]+'" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M40 4v5" stroke="'+INK+'" stroke-width="2.400" stroke-linecap="round"/></svg>'}
  var scn=null;
  function accOf(c){
    var s=scn;if(!s) return '';
    var o='';
    if((s.weather==='rain'||s.weather==='storm')) o+='<i class="c-umb">'+umbrella(c)+'</i>';
    var f=s.fest&&FEST[s.fest];
    if(f&&f.acc&&!(o&&f.acc!=='band')) o+='<i class="c-acc '+f.acc+'">'+ACC[f.acc]+'</i>';
    return o;
  }

  /* ---------- 画：把情境落到页面上 ---------- */
  var cvStop=null,flashT=0,lastKey='';
  function cloudSvg(c){return '<svg viewBox="0 0 200 90"><path d="M42 80c-22 0-34-13-34-27 0-13 12-25 28-24C42 13 58 5 75 9c10-7 33-9 46 6 18-5 38 5 41 22 17 1 30 12 30 25 0 11-12 18-28 18z" fill="'+c+'"/></svg>'}
  function applyScene(force){
    var s=scene(),k=key(s);
    if(!force&&k===lastKey&&scn) return;
    lastKey=k;scn=s;
    var map={ct:s.time,cs:s.season,cw:s.weather,cf:s.fest};
    for(var a in map){if(map[a])ROOT.dataset[a]=map[a];else delete ROOT.dataset[a]}
    var stage=document.getElementById('stage');
    if(stage){
      stage.querySelectorAll('.c-scn').forEach(function(n){n.remove()});
      var h='',night=s.time==='night';
      if(night) h+='<div class="c-scn fxn c-stars" data-anim></div><div class="c-scn fxn c-stars b" data-anim></div>';
      if(night||s.fest==='midautumn'&&s.time==='dusk') h+='<div class="c-scn fxn c-moon'+(s.fest==='midautumn'?' big':'')+'"></div>';
      if(s.weather){
        h+='<div class="c-scn fxn c-wx"></div>';
        if(/cloud|rain|storm/.test(s.weather)){var g=s.weather==='cloud'?'#e6e9ee':'#b7bdc8';[[260,2,8,52],[200,48,15,67],[320,70,3,83],[180,22,26,58]].forEach(function(c){h+='<div class="c-scn fxn c-gcloud" data-anim style="--w:'+c[0]+'px;--x:'+c[1]+'vw;--y:'+c[2]+'vh;--t:'+c[3]+'s">'+cloudSvg(g)+'</div>'})}
        if(s.weather==='fog') [[14,40],[38,55],[62,47]].forEach(function(f){h+='<div class="c-scn fxn c-fog" data-anim style="--y:'+f[0]+'vh;--t:'+f[1]+'s"></div>'});
        if(s.weather==='storm') h+='<div class="c-scn fxn c-flash"></div>';
      }
      var f=s.fest;
      if(f==='spring'||f==='lantern'||f==='national') h+=['l','r','l2','r2'].map(function(p){return '<div class="c-scn fxn c-dec c-lan '+p+'" data-anim>'+SVG.lantern+'</div>'}).join('');
      if(f==='halloween') h+=[[7,'9vh','64px'],[84,'7vh','54px'],[24,'4vh','40px']].map(function(p){return '<div class="c-scn fxn c-dec c-ground" style="--x:'+p[0]+'vw;--b:'+p[1]+';--w:'+p[2]+'">'+SVG.pumpkin+'</div>'}).join('');
      if(f==='xmas') h+='<div class="c-scn fxn c-dec c-ground" style="--x:84vw;--b:8vh;--w:96px">'+SVG.tree+'</div><div class="c-scn fxn c-dec c-ground" style="--x:6vw;--b:6vh;--w:58px">'+SVG.snowman+'</div>';
      if(f==='qingming') h+='<div class="c-scn fxn c-dec c-kite" data-anim>'+SVG.kite+'</div>';
      if(f==='midautumn') h+='<div class="c-scn fxn c-dec c-ground" style="--x:80vw;--b:8vh;--w:70px">'+SVG.mooncake+'</div>';
      if(f==='duanwu') h+='<div class="c-scn fxn c-dec c-ground" style="--x:82vw;--b:8vh;--w:54px">'+SVG.zongzi+'</div>';
      if(f==='dongzhi') h+='<div class="c-scn fxn c-dec c-ground" style="--x:80vw;--b:8vh;--w:60px">'+SVG.dumpling+'</div>';
      if(f==='exam') h+='<div class="c-scn fxn c-dec c-fban">大讨伐日 · 全力以赴</div>';
      if(!f&&s.weather==='snow') h+='<div class="c-scn fxn c-dec c-ground" style="--x:82vw;--b:7vh;--w:58px">'+SVG.snowman+'</div>';
      if(s.season==='summer'&&s.time==='day'&&!/rain|storm|snow|fog/.test(s.weather)) [[8,30,23],[58,40,31]].forEach(function(b){h+='<div class="c-scn fxn c-dec c-fly" data-anim style="--x:'+b[0]+'vw;--y:'+b[1]+'vh;--t:'+b[2]+'s">'+SVG.fly+'</div>'});
      stage.insertAdjacentHTML('beforeend',h);
      runFx(stage,s);
    }
    clearInterval(flashT);if(s.weather==='storm'&&V.fxOn())flashT=setInterval(thunder,9000+Math.random()*6000);
    bandDeco(s);
    trio.forEach(function(b){face(b,sleeping?'joy':'norm')});
    if(window.ENGEYE)ENGEYE.refresh();
  }
  function bandDeco(s){
    var d=band&&band.querySelector('.c-bdeco');if(!d)return;
    var f=s.fest&&FEST[s.fest],ic='',tx='';
    if(f){tx=f.sign;ic={lantern:'lantern',pumpkin:'pumpkin',tree:'snowman',moon:'mooncake',zongzi:'zongzi',dumpling:'dumpling',heart:'heart',kite:'flag',flag:'flag',fw:'fw',banner:'banner'}[f.deco]||''}
    else if(s.mile){tx='还有 '+s.mile+' 天';ic='flag'}
    else if(s.term){tx='今日'+s.term;ic=/冬|雪|寒/.test(s.term)?'snowman':'leaf'}
    else if(s.weather==='snow'){ic='snowman'}
    d.innerHTML=(tx?'<em>'+tx+'</em>':'')+(ic?'<i>'+SVG[ic]+'</i>':'');
  }
  function thunder(){
    var f=document.querySelector('#stage .c-flash');if(!f||document.hidden)return;
    A(f,[{opacity:0},{opacity:.75,offset:.08},{opacity:.1,offset:.2},{opacity:.55,offset:.3},{opacity:0}],620,'linear');
    if(SC.act&&trio.length&&!sleeping){var b=trio.filter(function(x){return x.dataset.c==='chii'})[0];if(b){face(b,'cry');say(b,'吉伊：'+pick(['打、打雷了…','呜…','（抖抖抖）']),1600);setTimeout(function(){face(b)},1600)}}
  }
  /* 粒子：雨、雪、樱花、落叶、萤火虫、心心、烟花。30 帧，离开或页面藏起来就停 */
  function runFx(stage,s){
    if(cvStop){cvStop();cvStop=null}
    if(!V.fxOn()) return;
    var kinds=[];
    if(s.weather==='rain')kinds.push(['rain',1]);
    else if(s.weather==='storm')kinds.push(['rain',1.9]);
    else if(s.weather==='snow')kinds.push(['snow',1]);
    else{
      if(s.fest==='valentine'||s.fest==='qixi')kinds.push(['heart',.45]);
      if(s.fest==='xmas')kinds.push(['snow',.45]);
      if(s.season==='spring')kinds.push(['petal',.6]);
      if(s.season==='autumn')kinds.push(['leaf',.45]);
      if(s.season==='summer'&&s.time==='night')kinds.push(['firefly',.6]);
    }
    var fw=(s.fest==='newyear'||s.fest==='spring'||s.fest==='lantern'||s.fest==='national')&&(s.time==='night'||s.time==='dusk')&&!/rain|storm|snow/.test(s.weather);
    if(!kinds.length&&!fw) return;
    var cv=E('canvas','c-scn fxn c-fxc');stage.appendChild(cv);
    var ctx=cv.getContext('2d'),dpr=Math.min(window.devicePixelRatio||1,2),w,h,ps=[],sparks=[],raf=0,last=0,nextFw=0,stop=false;
    function size(){w=innerWidth;h=innerHeight;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}size();
    var base=Math.min(w,1500)/1500;
    kinds.forEach(function(k){var n=Math.round({rain:120,snow:70,petal:22,leaf:16,firefly:22,heart:12}[k[0]]*k[1]*Math.max(.45,base));for(var i=0;i<n;i++)ps.push(spawn({k:k[0]},true))});
    function spawn(p,any){
      var k=p.k;p.x=Math.random()*w;p.y=any?Math.random()*h:(k==='heart'?h+12:k==='firefly'?h*(.45+Math.random()*.5):-12);
      p.a=Math.random()*6.28;p.va=(Math.random()-.5)*.06;
      if(k==='rain'){p.vx=-1.4;p.vy=9+Math.random()*5;p.l=10+Math.random()*9;p.o=.35+Math.random()*.3}
      else if(k==='snow'){p.vx=-.2+Math.random()*.4;p.vy=.5+Math.random()*.9;p.s=1.4+Math.random()*2.4;p.o=.7+Math.random()*.3}
      else if(k==='petal'){p.vx=.2+Math.random()*.5;p.vy=.6+Math.random()*.6;p.s=3+Math.random()*2.4;p.o=.75;p.c=Math.random()<.5?'#f8b6c4':'#fcd3dc'}
      else if(k==='leaf'){p.vx=-.3+Math.random()*.6;p.vy=.7+Math.random()*.6;p.s=4+Math.random()*3;p.o=.85;p.c=['#f2a64a','#e8803c','#f4c35a'][Math.floor(Math.random()*3)]}
      else if(k==='firefly'){p.vx=(Math.random()-.5)*.3;p.vy=(Math.random()-.5)*.3;p.s=1.6+Math.random()*1.4;p.o=1}
      else if(k==='heart'){p.vx=(Math.random()-.5)*.3;p.vy=-.5-Math.random()*.5;p.s=5+Math.random()*4;p.o=.6}
      return p;
    }
    function heart(x,y,s){ctx.beginPath();ctx.moveTo(x,y+s*.35);ctx.bezierCurveTo(x,y,x-s,y,x-s,y+s*.35);ctx.bezierCurveTo(x-s,y+s*.8,x,y+s*1.05,x,y+s*1.3);ctx.bezierCurveTo(x,y+s*1.05,x+s,y+s*.8,x+s,y+s*.35);ctx.bezierCurveTo(x+s,y,x,y,x,y+s*.35);ctx.fill()}
    function boom(){var cx=w*(.15+Math.random()*.7),cy=h*(.12+Math.random()*.28),col=['#ef7f96','#f6d045','#67add0','#9bd08a','#fff4c4'][Math.floor(Math.random()*5)],n=34;for(var i=0;i<n;i++){var a=i/n*6.28,v=1.6+Math.random()*1.6;sparks.push({x:cx,y:cy,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:1,c:col})}}
    function frame(t){
      if(stop) return;raf=requestAnimationFrame(frame);
      if(document.hidden||t-last<32) return;last=t;
      ctx.clearRect(0,0,w,h);
      for(var i=0;i<ps.length;i++){var p=ps[i];
        if(p.k==='firefly'){p.vx+=(Math.random()-.5)*.06;p.vy+=(Math.random()-.5)*.06;p.vx*=.97;p.vy*=.97}
        p.x+=p.vx+(p.k==='rain'?0:Math.sin(p.a)*.25);p.y+=p.vy;p.a+=p.va;
        if(p.y>h+20||p.y<-20||p.x<-20||p.x>w+20){spawn(p,p.k==='firefly');continue}
        ctx.globalAlpha=p.o;
        if(p.k==='rain'){ctx.strokeStyle='#8fa6c8';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+p.vx*1.4,p.y+p.l);ctx.stroke()}
        else if(p.k==='snow'){ctx.fillStyle='#fff';ctx.strokeStyle='rgba(150,170,195,.7)';ctx.lineWidth=.8;ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,6.3);ctx.fill();ctx.stroke()}
        else if(p.k==='firefly'){ctx.globalAlpha=.35+.65*Math.abs(Math.sin(p.a*3));ctx.fillStyle='#f6f3a0';ctx.shadowColor='#e8f07a';ctx.shadowBlur=8;ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,6.3);ctx.fill();ctx.shadowBlur=0}
        else if(p.k==='heart'){ctx.fillStyle='#f597ab';heart(p.x,p.y,p.s)}
        else{ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.fillStyle=p.c;ctx.beginPath();if(p.k==='petal')ctx.ellipse(0,0,p.s,p.s*.6,0,0,6.3);else{ctx.moveTo(-p.s,0);ctx.quadraticCurveTo(0,-p.s*.9,p.s,0);ctx.quadraticCurveTo(0,p.s*.9,-p.s,0)}ctx.fill();ctx.restore()}
      }
      if(fw){if(t>nextFw){boom();nextFw=t+1400+Math.random()*1800}
        for(var j=sparks.length-1;j>=0;j--){var q=sparks[j];q.x+=q.vx;q.y+=q.vy;q.vy+=.035;q.vx*=.985;q.life-=.018;if(q.life<=0){sparks.splice(j,1);continue}ctx.globalAlpha=q.life;ctx.fillStyle=q.c;ctx.beginPath();ctx.arc(q.x,q.y,1.8,0,6.3);ctx.fill()}}
      ctx.globalAlpha=1;
    }
    raf=requestAnimationFrame(frame);
    window.addEventListener('resize',size);
    cvStop=function(){stop=true;cancelAnimationFrame(raf);window.removeEventListener('resize',size)};
  }

  /* ---------- 说的话跟着情境走 ---------- */
  function ctxLines(){
    var s=scn,L=[];if(!s) return L;
    if(s.fest) L=L.concat(FEST[s.fest].lines,FEST[s.fest].lines);
    if(s.term) L.push('今天是'+s.term+'～',s.term==='立冬'?'立冬要吃饺子！':'节气变了，注意添衣');
    if(s.left>0&&s.left<=120) L.push('离大讨伐日还有 '+s.left+' 天！');
    L=L.concat({sun:['今天天气真好！','太阳暖洋洋的'],cloud:['阴天，适合专心读书'],rain:['下雨了…带伞了吗','雨声很适合读书'],storm:['打、打雷了…','（躲到小八身后）'],snow:['下雪啦！','好想堆雪人…先拔完这片'],fog:['雾好大，看不清路…','慢慢读，不着急']}[s.weather]||[]);
    if(s.temp!=null){if(s.temp>=30)L.push('好热…记得喝水');if(s.temp<=3)L.push('好冷，手都冻僵了','今天 '+s.temp+'℃，多穿点')}
    if(s.late) L.push('已经很晚了…早点睡吧','（打了个哈欠）明天再拔也可以');
    else if(s.time==='dawn') L.push('好早！早起的人有草拔');
    else if(s.time==='day'&&s.hour>=11&&s.hour<13) L.push('午饭吃了吗？');
    else if(s.time==='dusk') L.push('太阳要下山了');
    else if(s.time==='night') L.push('晚上也要加油');
    L=L.concat({spring:['花开了！'],summer:['蝉在叫…'],autumn:['叶子变黄了'],winter:['冬天要穿暖和']}[s.season]||[]);
    return L;
  }
  /* 进来时打个招呼：同一天同一种情境只说一次 */
  function greet(){
    var s=scn;if(!s||!trio.length) return;
    var line='',k='';
    if(s.fest){line=FEST[s.fest].lines[0];k='f'+s.fest}
    else if(s.mile){line='离大讨伐日只剩 '+s.mile+' 天了！';k='m'+s.mile}
    else if(s.term){line='今天'+s.term+'！';k='t'+s.term}
    else if(/rain|storm|snow|fog/.test(s.weather)){line={rain:'外面在下雨呢',storm:'打雷了…别怕',snow:'下雪啦！',fog:'今天雾好大'}[s.weather];k='w'+s.weather}
    else if(s.late){line='这么晚还在学…早点睡哦';k='late'}
    else if(s.time==='dawn'){line='早上好！';k='dawn'}
    if(!line) return;
    var day=ymd(new Date()),flag;try{flag=sessionStorage.getItem('eng_chii_greet')}catch(e){}
    if(flag===day+k) return;
    try{sessionStorage.setItem('eng_chii_greet',day+k)}catch(e){}
    var b=trio[trio.length-1];hop(b,20);say(b,NAME[b.dataset.c]+'：'+line,2600);
  }

  /* ---------- 小动作：闲着会自己动，久不操作就打盹 ---------- */
  var idleT=0,lastIn=Date.now(),sleeping=false,actT=0,tickT=0;
  function zzz(on){
    trio.forEach(function(b){b.querySelectorAll('.c-zzz').forEach(function(z){z.remove()});if(on){b.appendChild(E('span','c-zzz','z'));b.appendChild(E('span','c-zzz b','Z'))}});
  }
  function sleep(){if(sleeping||!SC.act||!trio.length)return;sleeping=true;trio.forEach(function(b){face(b,'joy')});zzz(true)}
  function wake(){
    lastIn=Date.now();if(!sleeping)return;sleeping=false;zzz(false);trio.forEach(function(b){face(b)});
    var b=trio[2]||trio[0];if(b){hop(b,18);say(b,NAME[b.dataset.c]+'：'+pick(['啊，回来啦！','（揉眼睛）继续！','欢迎回来～']),1700)}
  }
  function act(){
    clearTimeout(actT);actT=setTimeout(act,16000+Math.random()*26000);
    if(!SC.act||!trio.length||sleeping||document.hidden||!V.fxOn()) return;
    var b=pick(trio),c=b.dataset.c,s=scn||{},r=Math.random();
    if(s.weather==='snow'&&r<.3){hop(b,28);say(b,NAME[c]+'：雪！',1300);return}
    if(s.late&&r<.4){say(b,NAME[c]+'：哈啊～（哈欠）',1500);A(b.firstChild,[{transform:'scale(1,1)'},{transform:'scale(1.06,.9)'},{transform:'scale(1,1)'}],900,'ease-in-out');return}
    if((s.temp!=null&&s.temp<=3||s.weather==='snow')&&r<.5){A(b,[{marginLeft:'0'},{marginLeft:'-2px'},{marginLeft:'2px'},{marginLeft:'-2px'},{marginLeft:'0'}],420,'linear');say(b,NAME[c]+'：好冷…',1300);return}
    if(r<.3){face(b,'joy',true);hop(b,16);setTimeout(function(){face(b)},700)}
    else if(r<.5){face(b,'wow');setTimeout(function(){face(b)},900)}
    else if(r<.65){var sc=b.style.scale==='-1 1'?'1 1':'-1 1';b.style.scale=sc;setTimeout(function(){b.style.scale=facing<0?'-1 1':'1 1'},1200)}
    else if(r<.82){var cx=ctxLines();if(cx.length)say(b,NAME[c]+'：'+pick(cx),2200)}
    else hop(b,12);
  }
  function onInput(){lastIn=Date.now();if(sleeping)wake()}
  /* 连续认真读 20 分钟（页面在前台、2 分钟内有操作）就提醒看远处 20 秒；离开超过 10 分钟算休息过了，重新计 */
  function restLoad(){try{return JSON.parse(localStorage.getItem(RK))||{s:0,at:0}}catch(e){return {s:0,at:0}}}
  function restSave(o){try{localStorage.setItem(RK,JSON.stringify(o))}catch(e){}}
  function tick(){
    var now=Date.now();
    if(SC.act&&!sleeping&&now-lastIn>150000&&!document.hidden) sleep();
    applyScene(false);
    if(!SC.rest||document.getElementById('crest')) return;
    var o=restLoad();if(now-o.at>6e5)o.s=0;
    if(!document.hidden&&now-lastIn<12e4){o.s+=Math.min(15,(now-(o.at||now))/1000);}
    o.at=now;restSave(o);
    if(o.s>=1200) restCard();
  }
  function restCard(){
    var c=E('div','c-rest fxn','<i>'+chr('momo','norm')+'</i><div><p>已经专心读了 <b>20 分钟</b>啦～看看窗外远处 <b>20 秒</b>，让眼睛歇一下吧。</p><div class="bt"><button data-r="go">好，看远处</button><button data-r="later">再读 5 分钟</button></div></div>',{id:'crest',role:'status'});
    document.body.appendChild(c);
    A(c,[{transform:'translateY(40px)',opacity:0},{transform:'none',opacity:1}],320,'cubic-bezier(.2,1.2,.4,1)');
    c.addEventListener('click',function(e){
      var b=e.target.closest('[data-r]');if(!b)return;
      if(b.dataset.r==='later'){restSave({s:900,at:Date.now()});c.remove();return}
      var n=20,box=c.querySelector('div');box.innerHTML='<p>看远处…眨眨眼～</p><span class="ring">20</span>';
      var it=setInterval(function(){n--;var r=box.querySelector('.ring');if(r)r.textContent=n;if(n<=0){clearInterval(it);box.innerHTML='<p><b>眼睛休息好啦！</b>继续一点一点拔草吧。</p>';c.querySelector('i').innerHTML=chr('momo','joy',true);setTimeout(function(){c.remove()},2200)}},1000);
      restSave({s:0,at:Date.now()});
    });
  }

  /* ---------- 面板：挂在 🌿 护眼按钮里 ---------- */
  function opt(v,cur,label){return '<option value="'+v+'"'+(cur===v?' selected':'')+'>'+label+'</option>'}
  function row(k,title,sub,sel){return '<div class="cx-row'+(SC[k]?'':' off')+'"><button class="cx-sw'+(SC[k]?' on':'')+'" data-cx="'+k+'" aria-pressed="'+(SC[k]?'true':'false')+'" aria-label="'+title+'"></button><span>'+title+(sub?'<small>'+sub+'</small>':'')+'</span>'+(sel||'')+'</div>'}
  function status(){
    var s=scn||scene(),p=[];
    if(s.time)p.push((s.late?'深夜':TN[s.time])+(SC.ov.time?'（手动）':''));
    if(s.season)p.push(SN[s.season]+(SC.ov.season?'（手动）':''));
    if(s.weather)p.push(WN[s.weather]+(s.temp!=null?' '+s.temp+'℃':'')+(SC.ov.weather?'（手动）':''));
    if(s.fest)p.push(FEST[s.fest].n+(SC.ov.fest?'（手动）':''));else if(s.term)p.push(s.term);
    if(s.left>0)p.push('离大讨伐日 '+s.left+' 天');
    return p.join(' · ')||'情境都关着';
  }
  var PANEL={
    html:function(){
      var ov=SC.ov,cityOpts=opt('',SC.city,'不接实时天气')+CITY.map(function(c){return opt(c[0],SC.city,c[0])}).join('')+(/^geo:/.test(SC.city)?opt(SC.city,SC.city,'我的位置'):'');
      var fo=opt('',ov.fest||'','自动（按日期）');for(var f in FEST)fo+=opt(f,ov.fest||'',FEST[f].n);
      return '<div class="cx"><h4>小小草原 · 情境</h4><p class="cx-st">现在：'+status()+'</p>'
        +row('time','昼夜','按这台设备的时间换天色',
          '<select data-ov="time">'+opt('',ov.time||'','自动')+opt('dawn',ov.time||'','清晨')+opt('day',ov.time||'','白天')+opt('dusk',ov.time||'','黄昏')+opt('night',ov.time||'','夜晚')+'</select>')
        +row('season','季节','山和草换颜色、樱花 / 萤火虫 / 落叶',
          '<select data-ov="season">'+opt('',ov.season||'','自动')+opt('spring',ov.season||'','春')+opt('summer',ov.season||'','夏')+opt('autumn',ov.season||'','秋')+opt('winter',ov.season||'','冬')+'</select>')
        +row('weather','天气','选了城市就跟实时天气走；雨天大家撑伞',
          '<select data-ov="weather">'+opt('',ov.weather||'','自动')+opt('sun',ov.weather||'','晴')+opt('cloud',ov.weather||'','多云')+opt('rain',ov.weather||'','雨')+opt('storm',ov.weather||'','雷雨')+opt('snow',ov.weather||'','雪')+opt('fog',ov.weather||'','雾')+'</select>')
        +(SC.weather?'<div class="cx-city">城市 <select data-city>'+cityOpts+'</select><button data-geo type="button">📍 定位</button></div>'+(wxErr?'<p class="cx-st">'+wxErr+'</p>':''):'')
        +row('fest','节日与节气','元旦、春节、中秋、万圣、圣诞…和考前倒计时','<select data-ov="fest">'+fo+'</select>')
        +row('act','角色小动作','闲着自己动、对天气有反应、久不操作会打盹')
        +row('rest','20 分钟护眼提醒','连续读 20 分钟，提醒看远处 20 秒')
        +'<p class="eye-note">手动选的会一直生效，改回「自动」就跟着真实时间走（顺便可以用来预览）。天气数据来自 Open-Meteo，只发送所选城市的经纬度。</p></div>';
    },
    bind:function(el){
      el.addEventListener('click',function(e){
        var b=e.target.closest('[data-cx]');
        if(b){SC[b.dataset.cx]=SC[b.dataset.cx]?0:1;saveSc();if(b.dataset.cx==='act'&&!SC.act&&sleeping)wake();if(b.dataset.cx==='weather')wxFetch();applyScene(true);return}
        if(e.target.closest('[data-geo]')){
          if(!navigator.geolocation){wxErr='这个浏览器不支持定位';ENGEYE.refresh();return}
          navigator.geolocation.getCurrentPosition(function(p){SC.city='geo:'+p.coords.latitude.toFixed(2)+','+p.coords.longitude.toFixed(2);saveSc();wxFetch(true);ENGEYE.refresh()},function(){wxErr='定位没成功，可以直接选城市';ENGEYE.refresh()},{timeout:8000,maximumAge:36e5});
        }
      });
      el.addEventListener('change',function(e){
        var t=e.target;
        if(t.dataset.ov){if(t.value)SC.ov[t.dataset.ov]=t.value;else delete SC.ov[t.dataset.ov];saveSc();applyScene(true);return}
        if(t.hasAttribute('data-city')){SC.city=t.value;saveSc();wxErr='';if(SC.city)wxFetch(true);applyScene(true)}
      });
    }
  };
  function stopScene(){
    if(cvStop){cvStop();cvStop=null}
    clearInterval(flashT);clearTimeout(actT);clearInterval(tickT);
    ['pointerdown','keydown','wheel','touchstart','scroll'].forEach(function(ev){window.removeEventListener(ev,onInput,true)});
    var r=document.getElementById('crest');if(r)r.remove();
    sleeping=false;lastKey='';
  }
  function startScene(){
    stopScene();
    lastIn=Date.now();
    ['pointerdown','keydown','wheel','touchstart','scroll'].forEach(function(ev){window.addEventListener(ev,onInput,{passive:true,capture:true})});
    applyScene(true);wxFetch();
    tickT=setInterval(function(){tick();wxFetch()},15000);
    actT=setTimeout(act,9000+Math.random()*8000);
    setTimeout(greet,1400);
    window.ENGEYE_PENDING=PANEL;if(window.ENGEYE)ENGEYE.setExtra(PANEL);
  }

  var self;
  V.reg('chii',self={
    enter:function(){
      probe(function(){document.querySelectorAll('.fxn').forEach(function(n){n.remove()});self.enter();if(self.scroll)self.scroll(0,0)});
      trio=[];weeds=[];WHO.mat=V.off().kuri?'kuri':'hachi';
      ROOT.classList.toggle('chii-official',!!V.off().chii);
      var S=ROOT.style;['read','test','rev','vocab','mat'].forEach(function(g){S.setProperty('--c-'+g,typeof V.off()[WHO[g]]==='string'?'url("'+V.off()[WHO[g]]+'")':uri(chr(WHO[g],'norm',false,PROPS[g])))});
      scn=scene();buildBand();decorate();startScene();
    },
    leave:function(){
      var r=document.getElementById('creact');if(r)r.remove();
      stopScene();['ct','cs','cw','cf'].forEach(function(a){delete ROOT.dataset[a]});
      band=null;trio=[];weeds=[];scn=null;
      window.ENGEYE_PENDING=null;if(window.ENGEYE)ENGEYE.setExtra(null);
    },
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
