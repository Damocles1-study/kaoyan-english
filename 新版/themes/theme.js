/* 新版主题运行时。放在 <head> 里同步加载，页面画出来之前就定好主题。
 * 舞台（背景分层）/ 滚动虚实 / 转场 / 点击特效 / 换世界 / 全站查有道。 */
(function(){
  var me=document.currentScript, BASE=me?me.src.replace(/[^\/]*$/,''):'themes/';
  var LS='eng_v2_theme', LSF='eng_v2_fx', TR='eng_v2_tr', ROOT=document.documentElement;
  var LIST=['paper','chii','demon','ink','film'];
  /* 小小草原的角色：吉伊、小八、乌萨奇、飞鼠。矢量是照原作设定图的特征画的（头身一体的梨形、细线、眼睛靠中间）；
   * themes/art/chii/ 里放了官方图就优先用官方图（见那里的 README），那个目录不进公开仓库。expr: 'norm' 'joy' 'cry' 'wow'；up=举手 */
  var INK='#2f2a27',LW=1.9,OFF={};
  function eyes(x1,x2,y,expr,r){
    var o='';
    if(expr==='joy') o='<g fill="none" stroke="'+INK+'" stroke-width="2.2" stroke-linecap="round"><path d="M'+(x1-4)+' '+(y+1.5)+'q4-5.5 8 0"/><path d="M'+(x2-4)+' '+(y+1.5)+'q4-5.5 8 0"/></g>';
    else if(expr==='wow') o='<g fill="'+INK+'"><circle cx="'+x1+'" cy="'+y+'" r="'+(r*.6)+'"/><circle cx="'+x2+'" cy="'+y+'" r="'+(r*.6)+'"/></g>';
    else o='<g fill="'+INK+'"><ellipse cx="'+x1+'" cy="'+y+'" rx="'+r+'" ry="'+(r*1.18)+'"/><ellipse cx="'+x2+'" cy="'+y+'" rx="'+r+'" ry="'+(r*1.18)+'"/></g><g fill="#fff"><circle cx="'+(x1+r*.3)+'" cy="'+(y-r*.45)+'" r="'+(r*.36)+'"/><circle cx="'+(x2+r*.3)+'" cy="'+(y-r*.45)+'" r="'+(r*.36)+'"/><circle cx="'+(x1-r*.35)+'" cy="'+(y+r*.5)+'" r="'+(r*.16)+'"/><circle cx="'+(x2-r*.35)+'" cy="'+(y+r*.5)+'" r="'+(r*.16)+'"/></g>';
    if(expr==='cry') o+='<g fill="#bfe6f8" stroke="#7dbbdc" stroke-width=".9"><path d="M'+(x1-2.5)+' '+(y+4)+'q-1 9 2.500 13q3.500-4 2.500-13z"/><path d="M'+(x2-2.5)+' '+(y+4)+'q-1 9 2.500 13q3.500-4 2.500-13z"/></g>';
    return o;
  }
  /* 原作的腮红：一小团粉，上面三道细线 */
  function blush(x1,x2,y){var f='';[x1,x2].forEach(function(x){f+='<ellipse cx="'+x+'" cy="'+y+'" rx="5.200" ry="2.800" fill="#fbc3cd"/><path d="M'+(x-2.8)+' '+(y+1.3)+'l1.300-2.600M'+(x-.4)+' '+(y+1.3)+'l1.300-2.600M'+(x+2)+' '+(y+1.3)+'l1.300-2.600" stroke="#ee8ea1" stroke-width=".8" stroke-linecap="round"/>'});return f}
  /* 手脚是身子上露出的小短肢，画在身子之上 */
  function stubs(fill,up){
    var a=up?'<path d="M25 67q-11-5-12-13-.5-4 3-4 5 .5 13 11z"/><path d="M75 67q11-5 12-13 .5-4-3-4-5 .5-13 11z"/>':'<path d="M25 66q-5 5-4 11 3 3 8-2 3-3 2-7z"/><path d="M75 66q5 5 4 11-3 3-8-2-3-3-2-7z"/>';
    return '<g fill="'+fill+'" stroke="'+INK+'" stroke-width="'+LW+'" stroke-linejoin="round"><g class="lg l"><ellipse cx="38" cy="92" rx="7" ry="4.500"/></g><g class="lg r"><ellipse cx="62" cy="92" rx="7" ry="4.500"/></g></g><g class="am" fill="'+fill+'" stroke="'+INK+'" stroke-width="'+LW+'" stroke-linejoin="round">'+a+'</g>';
  }
  /* 头身一体：圆头，微收的脖子，下面鼓出来的小肚子 */
  function blobPath(t){var B=91,w=t+50;return 'M50 '+t+'C28 '+t+' 13 '+(t+14)+' 13 '+(t+31)+'c0 8 5 15 12 19C21 '+(w+8)+' 20 '+(B-5)+' 31 '+B+'H69C80 '+(B-5)+' 79 '+(w+8)+' 75 '+w+'c7-4 12-11 12-19 0-17-15-31-37-31z'}
  function blob(fill,top){return '<path d="'+blobPath(top||18)+'" fill="'+fill+'" stroke="'+INK+'" stroke-width="'+LW+'" stroke-linejoin="round"/>'}
  function smile(e,y){
    if(e==='wow') return '<ellipse cx="50" cy="'+y+'" rx="2.200" ry="2.800" fill="'+INK+'"/>';
    if(e==='cry') return '<path d="M46 '+(y+1)+'q2-2.500 4 0t4 0" fill="none" stroke="'+INK+'" stroke-width="1.600" stroke-linecap="round"/>';
    if(e==='joy') return '<path d="M46 '+(y-2)+'q4 8 8 0z" fill="#e8798f" stroke="'+INK+'" stroke-width="1.500" stroke-linejoin="round"/>';
    return '<path d="M47.500 '+(y-1)+'q2.500 2.800 5 0" fill="none" stroke="'+INK+'" stroke-width="1.600" stroke-linecap="round"/>';
  }
  var CHAR={
    /* 吉伊：纯白，圆耳朵小小的贴在头顶 */
    chii:function(e,up){return '<g fill="#fff" stroke="'+INK+'" stroke-width="'+LW+'"><circle cx="31" cy="20" r="7"/><circle cx="69" cy="20" r="7"/></g>'+blob('#fff')+stubs('#fff',up)+blush(26,74,56)+eyes(41,59,48,e,3.700)+smile(e,54)},
    /* 小八：白身，蓝色尖耳，额头蓝毛从正中分开成「八」字；尾巴蓝白 */
    hachi:function(e,up){var B='#9ccbe8';return '<path class="tl" d="M72 80c9 3 16-1 16-8 0-4-5-4-6 0-1 3-5 3-10 2z" fill="#fff" stroke="'+INK+'" stroke-width="'+LW+'"/><path d="M82 72c1-4 6-4 6 0 0 2-.5 4-2 5l-4.500-2c.5-1 .5-2 .5-3z" fill="'+B+'"/>'
      +'<g fill="'+B+'" stroke="'+INK+'" stroke-width="'+LW+'" stroke-linejoin="round"><path d="M22 36 19 7l23 14z"/><path d="M78 36l3-29-23 14z"/></g>'+blob('#fff')
      +'<clipPath id="hcap"><path d="'+blobPath(18)+'"/></clipPath><path clip-path="url(#hcap)" d="M8 47C25 45 43 38 50 23 57 38 75 45 92 47V0H8z" fill="'+B+'"/><path d="'+blobPath(18)+'" fill="none" stroke="'+INK+'" stroke-width="'+LW+'" stroke-linejoin="round"/>'+stubs('#fff',up)
      +blush(25,75,58)+eyes(40.500,59.500,50,e,3.800)+(e==='norm'?'<path d="M45 56q2.500 3 5 0 2.500 3 5 0" fill="none" stroke="'+INK+'" stroke-width="1.600" stroke-linecap="round"/><path d="M48 58q2 4 4 0z" fill="#e8798f"/>':smile(e,57))},
    /* 乌萨奇：淡黄，一对长耳朵竖在头顶靠中间，小豆眼，嘴常张得很大 */
    usagi:function(e,up){var Y='#fbefb4';return '<g fill="'+Y+'" stroke="'+INK+'" stroke-width="'+LW+'"><path d="M36 34C31 20 31 3 37.500 2.500 44 2 45 20 44 32z"/><path d="M64 34c5-14 5-31-1.500-31.500C56 2 55 20 56 32z"/></g><g fill="#f7c9b8"><path d="M38 28c-2-9-2-18 0-20 2 2 3 11 2.500 20z"/><path d="M62 28c2-9 2-18 0-20-2 2-3 11-2.500 20z"/></g>'
      +blob(Y,26)+stubs(Y,up)+blush(25,75,62)+eyes(39,61,54,e==='norm'?'wow':e,4.400)
      +(e==='cry'?'<path d="M45 62q2.500-3 5 0t5 0" fill="none" stroke="'+INK+'" stroke-width="1.600" stroke-linecap="round"/>':'<path d="M42 59q8 2.500 16 0-1 10-8 10t-8-10z" fill="#d9607a" stroke="'+INK+'" stroke-width="1.700" stroke-linejoin="round"/><ellipse cx="50" cy="66" rx="3.600" ry="2.200" fill="#f59cae"/>')},
    /* 飞鼠：白毛炸开，圆耳朵蓝内里，蓝色大尾巴，半睁的大眼睛和蓝鼻头 */
    momo:function(e,up){var B='#c6e1f3',fur='';[[12,44,8,42],[11,53,6.500,54],[13,62,9,65],[34,16,33,11],[44,14,44,9],[56,14,56,9],[66,16,67,11]].forEach(function(p){fur+='M'+p[0]+' '+p[1]+'L'+p[2]+' '+p[3]});
      var spk='';for(var i=0;i<8;i++){var a=-1.2+i*.34,x=70+Math.cos(a)*24,y=48+Math.sin(a)*32;spk+='M'+x.toFixed(1)+' '+y.toFixed(1)+'l'+(Math.cos(a)*4).toFixed(1)+' '+(Math.sin(a)*4).toFixed(1)}
      return '<path class="tl" d="M60 14c22-4 37 12 36 36-1 20-13 32-28 30z" fill="'+B+'"/><path class="tl" d="'+spk+'" stroke="'+INK+'" stroke-width="1.500" stroke-linecap="round"/>'
      +'<g stroke="'+INK+'" stroke-width="'+LW+'"><circle cx="28" cy="25" r="10.500" fill="#fff"/><circle cx="72" cy="25" r="10.500" fill="#fff"/><circle cx="28" cy="26" r="6.500" fill="'+B+'" stroke="none"/><circle cx="72" cy="26" r="6.500" fill="'+B+'" stroke="none"/></g>'+blob('#fff',20)+stubs('#fff',up)
      +'<path d="'+fur+'" stroke="'+INK+'" stroke-width="1.500" stroke-linecap="round"/>'+blush(25,75,59)
      +(e==='norm'?'<g fill="'+INK+'"><path d="M31.500 47.500h13c.5 4-2.500 6-6.500 6s-7-2-6.500-6z"/><path d="M55.500 47.500h13c.5 4-2.500 6-6.500 6s-7-2-6.500-6z"/></g><g fill="#fff"><rect x="34.500" y="49" width="6" height="1.600" rx=".8"/><rect x="58.500" y="49" width="6" height="1.600" rx=".8"/></g>':eyes(38,62,50,e,4.600))
      +'<ellipse cx="50" cy="54" rx="4.600" ry="3.200" fill="'+B+'"/>'+smile(e,60)}
  };
  var PROP={
    book:'<g transform="translate(29 66) rotate(-4)"><path d="M0 2q11-5 21 0v20q-10-5-21 0zM21 2q10-5 21 0v20q-11-5-21 0z" fill="#fff4c4" stroke="'+INK+'" stroke-width="2.200" stroke-linejoin="round"/><path d="M5 8q6-2 11 0M5 13q6-2 11 0M26 8q6-2 11 0M26 13q6-2 11 0" stroke="#c7a964" stroke-width="1.500" fill="none"/></g>',
    fork:'<g transform="rotate(16 82 50)" stroke="'+INK+'" stroke-linecap="round" fill="none"><path d="M82 92V26" stroke-width="3.400"/><path d="M71 12c0 13 22 13 22 0" stroke-width="3.400"/></g>',
    stick:'<path d="M84 90 76 10" stroke="#a8693a" stroke-width="5" stroke-linecap="round"/><path d="M84 90 76 10" stroke="'+INK+'" stroke-width="1" stroke-linecap="round" opacity=".5"/>',
    weed:'<g transform="translate(-3 12)" stroke="#5f9b54" stroke-width="3" fill="none" stroke-linecap="round"><path d="M18 46q-4-14-9-20M18 46q0-14 3-24M18 46q4-11 10-16"/></g>',
    cup:'<path d="M30 74h15l-2 10H32z" fill="#fff" stroke="'+INK+'" stroke-width="2.200" stroke-linejoin="round"/>'
  };
  function offImg(c,e,box){
    var own=OFF[c+'_'+(e||'norm')],u=own||OFF[c],ex='';if(!u)return '';
    /* 官方图只有一种站姿：没有专门的哭图时，在眼睛下面叠眼泪 */
    if(!own&&e==='cry'&&EYE[c]){var y=EYE[c][2];EYE[c].slice(0,2).forEach(function(x){ex+='<path d="M'+(x-2.5)+' '+(y+3)+'q-1.500 12 2.500 16q4-4 2.500-16z" fill="#bfe6f8" stroke="#6fb3d6" stroke-width=".9"/>'})}
    var pic;
    if(typeof u==='string') pic='<image href="'+u+'" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMax meet"/>';
    else{ /* 官方站的拼图：网页打开时直接向官方站取，仓库里不存图。按矩形裁出一个角色，贴底居中 */
      var S=Math.max(u[2],u[3])/.984,vx=u[0]-(S-u[2])/2,vy=u[1]+u[3]-S*.996;
      pic='<svg x="0" y="0" width="100" height="100" viewBox="'+vx.toFixed(1)+' '+vy.toFixed(1)+' '+S.toFixed(1)+' '+S.toFixed(1)+'"><clipPath id="spr-'+c+'"><rect x="'+u[0]+'" y="'+u[1]+'" width="'+u[2]+'" height="'+u[3]+'"/></clipPath><image href="'+SPR.u+'" width="'+SPR.w+'" height="'+SPR.h+'" clip-path="url(#spr-'+c+')"/></svg>';
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+box+'">'+pic+ex+'</svg>'}
  var SPR={u:'https://www.anime-chiikawa.jp/images/characters/img_charapage.png',w:3766,h:463,r:{chii:[1,0,323,359],hachi:[344,0,326,370],usagi:[699,0,310,457],momo:[1032,0,406,388],kuri:[1458,0,307,352]}};
  var EYE={chii:[37,63,37],hachi:[37,63,40],usagi:[42,62,50],momo:[29,58,49],kuri:[36,58,48]};
  function chr(c,e,up,prop,box){var o=offImg(c,e,box||'0 0 100 100');if(o)return o;return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+(box||'0 0 100 100')+'">'+CHAR[c](e||'norm',up)+(prop?PROP[prop]:'')+'</svg>'}
  /* 趴在卡片上沿的半身：只露头和两只手 */
  function bust(c,e){var o=offImg(c,e,'0 0 100 66');if(o)return o;return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 66">'+CHAR[c](e||'norm').replace(/<g class="(lg|am)[^]*?<\/g>(<\/g>)?/g,'')+'<g fill="'+(c==='usagi'?'#fbefb4':'#fff')+'" stroke="'+INK+'" stroke-width="2.400"><ellipse cx="30" cy="65" rx="6" ry="4.500"/><ellipse cx="70" cy="65" rx="6" ry="4.500"/></g></svg>'}
  var MOCHI=chr('chii'),PUDDING=chr('hachi','joy'),HOPPER=chr('usagi','norm',true);
  function setOff(m){OFF=m;MOCHI=chr('chii');PUDDING=chr('hachi','joy');HOPPER=chr('usagi','norm',true);ROOT.style.setProperty('--mochi',typeof OFF.chii==='string'?'url("'+OFF.chii+'")':uri(MOCHI))}
  /* 一台旁轴相机。镜头对焦环带 class，滚动时会转 */
  var CAM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150"><defs><linearGradient id="cTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#faf7ef"/><stop offset=".5" stop-color="#cbc7bb"/><stop offset=".62" stop-color="#ece8dc"/><stop offset="1" stop-color="#a9a598"/></linearGradient><radialGradient id="cGlass" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#7d97b8"/><stop offset=".36" stop-color="#27304a"/><stop offset=".8" stop-color="#0c0d14"/><stop offset="1" stop-color="#3a2332"/></radialGradient><pattern id="cLeath" width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#2b2622"/><circle cx="1.500" cy="1.500" r="1" fill="#3d3731"/><circle cx="4" cy="3.800" r=".8" fill="#1c1916"/></pattern></defs>'
    +'<rect x="30" y="4" width="26" height="14" rx="2" fill="url(#cTop)" stroke="#55514a"/><path d="M33 4v14M38 4v14M43 4v14M48 4v14M53 4v14" stroke="#7d796e" stroke-width=".8"/>'
    +'<rect x="150" y="7" width="30" height="11" rx="2" fill="url(#cTop)" stroke="#55514a"/><rect x="186" y="3" width="30" height="15" rx="3" fill="url(#cTop)" stroke="#55514a"/><path d="M190 3v15M195 3v15M200 3v15M205 3v15M210 3v15" stroke="#7d796e" stroke-width=".8"/><circle cx="165" cy="7" r="5" fill="#c9412e" stroke="#55514a"/>'
    +'<rect x="8" y="16" width="224" height="130" rx="14" fill="url(#cLeath)" stroke="#1a1714" stroke-width="2"/><path d="M8 50V30a14 14 0 0 1 14-14h196a14 14 0 0 1 14 14v20z" fill="url(#cTop)" stroke="#6f6b61"/>'
    +'<rect x="24" y="25" width="30" height="18" rx="2" fill="#16202d" stroke="#55514a" stroke-width="1.500"/><rect x="28" y="28" width="11" height="6" rx="1" fill="#7d97b8" opacity=".7"/><rect x="176" y="25" width="26" height="18" rx="2" fill="#16202d" stroke="#55514a" stroke-width="1.500"/><rect x="66" y="27" width="16" height="14" rx="2" fill="#efe9d6" stroke="#55514a"/>'
    +'<g class="cam-ring" style="transform-origin:120px 92px"><circle cx="120" cy="92" r="50" fill="#1d1a17" stroke="#a9a598" stroke-width="2.500"/><circle cx="120" cy="92" r="44" fill="none" stroke="#6a665c" stroke-width="7" stroke-dasharray="2.500 3.500"/><path d="M120 44v9" stroke="#e8b23c" stroke-width="3"/><text x="120" y="66" text-anchor="middle" font-family="Menlo,monospace" font-size="7.500" fill="#d9d4c5">F2.8</text></g>'
    +'<circle cx="120" cy="92" r="33" fill="#0d0d11" stroke="#8d897e" stroke-width="2"/><circle cx="120" cy="92" r="27" fill="url(#cGlass)"/><path d="M120 76l14 8v16l-14 8-14-8V84z" fill="#05060a" opacity=".82"/><ellipse cx="110" cy="80" rx="8" ry="5" fill="#fff" opacity=".42" transform="rotate(-28 110 80)"/><circle cx="133" cy="104" r="2.500" fill="#f2a24a" opacity=".65"/></svg>';
  var uri=function(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'};
  /* 每个世界用自己的话叫这几样东西。真名总留在下面，不用猜。 */
  var W={
    paper:{name:'标准版',sub:'米黄试卷',r:-3,home:'英语一 · 新版',tabs:null,
      kick:{read:'第一部分　读原文',test:'第二部分　作答',rev:'第三部分　批改与复盘',vocab:'第四部分　词汇',mat:'第五部分　可用素材'},
      hero:['按价值读，时间花在该花的地方','2007–2025 十九年，每篇都评了级。先做 S，再做 A。'],count:'距英语开考',dock:'换一套卷子',grade:{S:'S',A:'A',B:'B',C:'C'},mx:'答题卡：涂黑的是做完的',flat:'标记做完|已做完',timeName:'今日答卷时长'},
    chii:{name:'Chiikawa 版',sub:'小小草原',r:2,home:'小小草原 · 英语一',tabs:{all:'全部',read:'读一读',test:'讨伐',rev:'反省会',vocab:'小点心',mat:'宝物袋'},
      kick:{read:'先读一读',test:'讨伐开始',rev:'回来开反省会',vocab:'词汇小点心',mat:'捡到的宝物'},
      hero:['一点一点，把这片草除完','今天也只做今天的份。S 是大讨伐，C 是路边小草，时间不够可以不拔。'],count:'离大讨伐日',dock:'去别的世界玩',grade:{S:'S',A:'A',B:'B',C:'C'},mx:'讨伐地图：开花的格子是拔完的',flat:'拔完了吗|拔完啦',timeName:'今天拔草多久了'},
    demon:{name:'鬼灭之刃版',sub:'大正夜行',r:-2,home:'鬼杀 · 英语一',tabs:{all:'全局',read:'观气',test:'拔刀',rev:'残心',vocab:'词之型',mat:'锻刀'},
      kick:{read:'水之呼吸 · 观气',test:'雷之呼吸 · 拔刀',rev:'炎之呼吸 · 残心',vocab:'花之呼吸 · 词之型',mat:'霞之呼吸 · 锻刀'},
      hero:['全集中，一篇一斩','柱＝必须精做，甲＝值得精做，庚＝做一遍，癸＝时间不够就跳。'],count:'距决战之夜',dock:'换一种呼吸',grade:{S:'柱',A:'甲',B:'庚',C:'癸'},mx:'阶级表：写着「滅」的是斩完的',flat:'斩了吗|已斩',timeName:'全集中 · 常中'},
    ink:{name:'水墨江湖版',sub:'墨卷江湖',r:3,home:'江湖 · 英语一',tabs:{all:'全卷',read:'读经',test:'过招',rev:'悟道',vocab:'兵器谱',mat:'行囊'},
      kick:{read:'读经',test:'过招',rev:'悟道',vocab:'兵器谱',mat:'行囊'},
      hero:['十九载卷宗，一卷一江湖','甲等必破，乙等当破；丙等过一遍，丁等可绕行。'],count:'距论剑之期',dock:'另走一路',grade:{S:'甲',A:'乙',B:'丙',C:'丁'},mx:'江湖榜：朱圈是已破的卷',flat:'破此卷|已破',timeName:'修行时长'},
    film:{name:'胶片版',sub:'日光 / 暗房',r:-1,home:'ISO 400 · 英语一',tabs:{all:'全片',read:'取景',test:'快门',rev:'冲洗',vocab:'放大',mat:'底片盒'},
      kick:{read:'FRAME — 取景：读原文',test:'FRAME — 快门：做题',rev:'FRAME — 冲洗：复盘',vocab:'FRAME — 放大：词汇',mat:'FRAME — 底片盒：素材'},
      hero:['十九卷胶片，挑值得冲的先冲','红笔圈出来的是 S，这一张无论如何要洗。'],count:'距放映',dock:'换一卷片',grade:{S:'S',A:'A',B:'B',C:'C'},mx:'接触印样：红圈是必冲，打叉是冲过了',flat:'冲了吗|已冲洗',timeName:'累计曝光'}
  };
  var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var theme=get(LS); if(LIST.indexOf(theme)<0) theme='paper';
  var fxOn=get(LSF)!=='off'&&!RM;
  var LSM='eng_v2_film',filmMode=get(LSM)==='dark'?'dark':'day';
  ROOT.dataset.theme=theme;ROOT.dataset.film=filmMode; if(!fxOn) ROOT.classList.add('nofx');
  /* 背景护眼（../_eye.js）：Chiikawa 世界先把上次算好的底色刷上，页面一出来就是护眼色，不闪白 */
  if(theme==='chii'){try{var ep=JSON.parse(get('eng_eye_paint'))||{};if(ep.chii){for(var ev in ep.chii.v)ROOT.style.setProperty(ev,ep.chii.v[ev],'important');ROOT.classList.add('eye-on')}}catch(e){}}
  var incoming=null; try{incoming=sessionStorage.getItem(TR);sessionStorage.removeItem(TR)}catch(e){}
  if(incoming&&fxOn) ROOT.classList.add('tr-in');
  var link=document.createElement('link');link.rel='stylesheet';link.href=BASE+'theme.css?v=5';document.head.appendChild(link);
  ROOT.style.setProperty('--mochi',uri(MOCHI));
  if(get('eng_chii_mode')==='sprite') setOff(SPR.r);
  /* 各世界的角色和特效放在自己的文件里，用到才加载 */
  var FX={},fxCur=null,fxWant=null,FXV='7',FXFILE={chii:1,demon:1,film:1};
  function fxLeave(){if(fxCur){try{fxCur.leave&&fxCur.leave()}catch(e){}fxCur=null}document.querySelectorAll('.fxn').forEach(function(n){n.remove()})}
  function fxEnter(){
    fxLeave();fxWant=theme;
    if(!FXFILE[theme]) return;
    if(FX[theme]){fxCur=FX[theme];try{fxCur.enter(stage,{fx:fxOn,mode:filmMode})}catch(e){console.error(e)}if(fxCur.relabel)fxCur.relabel();return}
    if(!document.querySelector('script[data-fx="'+theme+'"]')){var sc=document.createElement('script');sc.src=BASE+'fx_'+theme+'.js?v='+FXV;sc.dataset.fx=theme;document.head.appendChild(sc)}
  }

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
        +'<div class="c-hills"><svg viewBox="0 0 1600 300" preserveAspectRatio="none"><path d="M0 130C200 60 380 70 620 120s420 40 980-30v210H0z" fill="#cdeaa8"/><path d="M0 180c260-50 500-50 800-6s520 30 800-30v156H0z" fill="#a9dc8b"/><path d="M0 240c300-34 560-30 860-6s500 12 740-16v82H0z" fill="#8ccb73"/></svg>'+flowers+'</div>';
    },
    demon:function(s){
      s.innerHTML='<div class="d-night" data-sharp data-p=".03"></div><div class="d-night soft" data-soft data-p=".03"></div>'
        +'<div class="d-wist" data-sharp data-anim data-p=".12"></div><div class="d-wist soft" data-soft data-anim data-p=".12"></div>'
        +'<canvas id="fxc"></canvas><div class="d-blade" id="dblade"><div class="b"></div><div class="g"></div></div>';
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
      var day=filmMode==='day';
      s.innerHTML='<div class="f-base"></div>'+(day?'<div class="f-blinds" data-anim></div>':'')+'<div class="f-leak a" data-anim></div><div class="f-leak b" data-anim></div><canvas id="fxc"></canvas><div class="f-vig"></div>'+(day?'<div class="f-cam" data-p=".05">'+CAM+'</div>':'')+'<div class="f-strip l" id="fsl"><b>'+lab+'</b></div><div class="f-strip r" id="fsr"><b>'+lab+'</b></div><div class="f-grain" data-anim></div>';
      particles('film');
    }
  };
  function buildStage(){
    if(canvasStop){canvasStop();canvasStop=null}
    if(!stage){stage=E('div','',null,{id:'stage','aria-hidden':'true'});document.body.insertBefore(stage,document.body.firstChild)}
    fxLeave();stage.innerHTML='';SCENE[theme](stage);
    layers=[].slice.call(stage.querySelectorAll('[data-p]')).map(function(e){return [e,+e.dataset.p]});
    softs=[].slice.call(stage.querySelectorAll('[data-soft]'));sharps=[].slice.call(stage.querySelectorAll('[data-sharp]'));
    softs.forEach(function(e){e.style.opacity=0});
    measure();paint(true);fxEnter();
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
      p.a=Math.random()*6.28;p.va=(Math.random()-.5)*.05;p.o=p.k==='d'?.1+Math.random()*.3:.32+Math.random()*.48;p.c=p.k==='p'?(Math.random()<.5?'#b18fe6':'#dcc7f5'):(p.k==='e'?(Math.random()<.5?'#ff9a4a':'#ffc56b'):(filmMode==='day'?'#9c7a44':'#f1dcb5'));return p;
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
    if(fxCur&&fxCur.scroll) fxCur.scroll(p,sv,sy);
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
    film:{ /* 按快门：光圈叶片收拢，再打开 */
      out:function(v){return iris(v,1,0,300)},
      in:function(v){return iris(v,0,1,380)}}
  };
  function iris(v,from,to,ms){
    v.innerHTML='<svg width="100%" height="100%" style="position:absolute;inset:0;display:block"><path fill="#14110d" fill-rule="evenodd"/></svg>';
    var p=v.querySelector('path'),W=innerWidth,H=innerHeight,R=Math.hypot(W,H)*.62,t0=performance.now();
    return new Promise(function(res){
      (function f(t){
        var u=Math.min(1,(t-t0)/ms),e=u*u*(3-2*u),k=from+(to-from)*e,r=Math.max(0,R*k),a=k*1.4,d='M0 0H'+W+'V'+H+'H0Z';
        if(r>.5){d+='M';for(var i=0;i<6;i++){var b=a+i*Math.PI/3;d+=(i?'L':'')+(W/2+Math.cos(b)*r).toFixed(1)+' '+(H/2+Math.sin(b)*r).toFixed(1)}d+='Z'}
        p.setAttribute('d',d);
        if(u<1) requestAnimationFrame(f); else res();
      })(t0);
    });
  }
  function cloudWall(){var c=E('div','',null,{style:'left:-6%;right:-6%;top:-18%;bottom:-18%;background:#fffdf5'});for(var i=0;i<9;i++){var o=E('div','',cloud('#fffdf5'),{style:'width:34%;left:'+(i*12-4)+'%;top:-13%;transform:rotate('+(i%2?4:-5)+'deg)'});c.appendChild(o);var u=E('div','',cloud('#fffdf5'),{style:'width:34%;left:'+(i*12-4)+'%;bottom:-13%;transform:scaleY(-1)'});c.appendChild(u)}return c}
  function hopper(){return E('div','',[MOCHI,PUDDING,HOPPER][Math.floor(Math.random()*3)],{style:'width:84px;left:-90px;bottom:30%;z-index:2;margin-left:-42px'})}
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
    film:function(x,y){var s=spot(x,y,76,'<svg viewBox="0 0 76 76" width="76" height="76" fill="none" stroke="'+(filmMode==='day'?'#b8452a':'#e9a640')+'" stroke-width="2"><path d="M2 18V2h16M58 2h16v16M74 58v16H58M18 74H2V58"/></svg>');var f=E('div','fxspot',null,{style:'inset:0;background:#fff4d6'});document.body.appendChild(f);A(f,[{opacity:.12},{opacity:0}],170,'ease-out').finished.then(function(){f.remove()},function(){f.remove()});return A(s,[{transform:'scale(1.5)',opacity:0},{transform:'scale(1)',opacity:1,offset:.45},{transform:'scale(.92)',opacity:0}],440,'ease-out')}
  };
  function spot(x,y,sz,html,o){var s=E('div','fxspot',html,{style:'left:'+(o?x:x-sz/2)+'px;top:'+(o?y:y-sz/2)+'px;width:'+(o?o.w:sz+'px')+';height:'+(o?o.h:sz+'px')+(o?';background:'+o.bg+';box-shadow:'+o.sh:'')});document.body.appendChild(s);setTimeout(function(){s.remove()},800);return s}
  var downAt=null;
  document.addEventListener('pointerdown',function(e){downAt=[e.clientX,e.clientY,Date.now()]},{passive:true});
  document.addEventListener('pointerup',function(e){
    if(!fxOn||!downAt) return;
    var d=Math.hypot(e.clientX-downAt[0],e.clientY-downAt[1]),t=Date.now()-downAt[2];downAt=null;
    if(d>8||t>450) return;
    var h=e.target.closest&&e.target.closest(HOT); if(!h) return;
    if(fxCur&&fxCur.click){if(fxCur.click(e.clientX,e.clientY,h)===false)return}
    else CLICK[theme](e.clientX,e.clientY,h);
  },{passive:true});
  /* 做题和标记做完：题目自己的点击处理先跑，这里只看结果 */
  document.addEventListener('click',function(e){
    if(!e.target.closest) return;
    var o=e.target.closest('.opt'),q=o&&o.closest('.q');
    if(q&&q.classList.contains('done')&&!q.dataset.fxd&&(o.classList.contains('right')||o.classList.contains('wrong'))){
      q.dataset.fxd='1';
      if(fxOn&&fxCur&&fxCur.answer) fxCur.answer(o.classList.contains('right'),o,q);
    }
    var d=e.target.closest('.vdone');
    if(d&&d.classList.contains('on')&&fxOn&&fxCur&&fxCur.done) fxCur.done(d);
  });

  /* 在页内换分区时的小过场 */
  var TABFX={
    paper:[[{opacity:.2,transform:'translateY(7px)'},{opacity:1,transform:'none'}],280],
    chii:[[{transform:'scale(.985,.96)',opacity:.3},{transform:'scale(1.006,1.008)',opacity:1,offset:.6},{transform:'none'}],340],
    demon:[[{transform:'translateX(-18px) skewX(-1.6deg)',opacity:.1,clipPath:'polygon(0 0,18% 0,6% 100%,0 100%)'},{transform:'none',opacity:1,clipPath:'polygon(0 0,130% 0,118% 100%,0 100%)'}],280],
    ink:[[{opacity:.05,filter:'blur(9px)'},{opacity:1,filter:'blur(0)'}],460],
    film:[[{filter:'blur(11px) brightness(1.4)',transform:'translateY(16px)'},{filter:'blur(0) brightness(1)',transform:'none'}],320]
  };
  function tabFx(el,g){if(!fxOn||!el) return;var c=TABFX[theme],a=el.animate(c[0],{duration:c[1],easing:'cubic-bezier(.2,.7,.2,1)'});a.onfinish=measure;if(fxCur&&fxCur.tab)fxCur.tab(g,el)}

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
    var hm=document.querySelector('.v2t .home');if(hm)hm.textContent=theme==='film'&&filmMode==='dark'?'DARKROOM · 英语一':w.home;
    document.querySelectorAll('[data-w]').forEach(function(e){
      var k=e.dataset.w;
      if(k==='h1')e.textContent=w.hero[0];else if(k==='lead')e.textContent=w.hero[1];else if(k==='count')e.textContent=w.count;else if(k==='mx')e.textContent=w.mx;else if(k==='g'){e.textContent=w.grade[e.dataset.v]}
    });
    var vd=document.querySelector('.vdone');
    if(vd){var fl=w.flat.split('|');vd.textContent=vd.classList.contains('on')?fl[1]:fl[0];vd.dataset.fl=w.flat}
    document.querySelectorAll('.wt').forEach(function(t){t.classList.toggle('cur',t.dataset.t===theme)});
    var ch=document.getElementById('wchip');if(ch)ch.querySelector('span').textContent=w.name;
    var dh=document.getElementById('wdock');if(dh)dh.textContent=w.dock;
    if(fxCur&&fxCur.relabel)fxCur.relabel();
  }

  /* ---------- 换世界 ---------- */
  function tile(t){
    var w=W[t],art=t==='chii'?'<i class="t1">'+chr('hachi')+'</i><i class="t2">'+chr('usagi','norm',true)+'</i><i class="t3">'+MOCHI+'</i>':t==='film'?(filmMode==='day'?CAM:''):t==='demon'?'<i class="tw1"></i>':'';
    return '<button class="wt wt-'+t+(t===theme?' cur':'')+'" data-t="'+t+'" style="--r:'+w.r+'deg" aria-label="切换到'+w.name+'"><span class="art">'+art+'</span><span class="nm">'+w.name+'<small>'+w.sub+'</small></span></button>';
  }
  function fxBtn(){return '<button class="fxsw'+(fxOn?'':' off')+'" data-fx>'+(fxOn?'动效：开':'动效：关')+'</button>'+(theme==='film'?'<button class="fxsw flm" data-flm>'+(filmMode==='day'?'☀ 日光 ▸ 换暗房':'☾ 暗房 ▸ 换日光')+'</button>':'')}
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
    if(e.target.closest&&e.target.closest('[data-flm]')){
      filmMode=filmMode==='day'?'dark':'day';put(LSM,filmMode);ROOT.dataset.film=filmMode;buildStage();drawWorlds();relabel();return;
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
  window.ENGV2={tabFx:tabFx,relabel:relabel,measure:measure,world:function(){return W[theme]},words:W,
    theme:function(){return theme},fxOn:function(){return fxOn},filmMode:function(){return filmMode},
    E:E,A:A,uri:uri,chr:chr,bust:bust,CAM:CAM,setOff:setOff,off:function(){return OFF},base:BASE,SPR:SPR,put:put,get:get,cur:function(){return fxCur},
    reg:function(n,impl){FX[n]=impl;if(fxWant===n&&theme===n)fxEnter()}};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
