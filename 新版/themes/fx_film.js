/* 胶片版：顶栏是相机顶盖，滚动就是过片（计数窗 1→36、对焦环跟着转）；
 * 每张卡片是洗出来的照片，右下角有橙色日期戳；斩完一篇吐一张拍立得；右下角的小相机能按快门。 */
(function(){
  var V=ENGV2,E=V.E,A=V.A;
  var ctr,num,rings=[],cam,lastF=0;
  function pad(n){return (n<10?'0':'')+n}
  function stamp(){var d=new Date();return "'"+String(d.getFullYear()).slice(2)+' '+pad(d.getMonth()+1)+' '+pad(d.getDate())}
  function shutter(ms){
    /* 叶片一合一开，比翻页转场短得多 */
    var s=E('div','f-shut');document.body.appendChild(s);
    A(s,[{opacity:0},{opacity:1,offset:.35},{opacity:0}],ms||150,'linear').finished.then(function(){s.remove()},function(){s.remove()});
  }
  function flash(o){var f=E('div','f-flash');document.body.appendChild(f);A(f,[{opacity:o||.75},{opacity:0}],360,'ease-out').finished.then(function(){f.remove()},function(){f.remove()})}
  function leak(){
    /* 答错：胶卷漏光，一道橙红从边上扫过 */
    var l=E('div','f-sweep');document.body.appendChild(l);
    A(l,[{opacity:0,transform:'translateX(-40%)'},{opacity:.95,transform:'translateX(-6%)',offset:.3},{opacity:0,transform:'translateX(30%)'}],620,'ease-out').finished.then(function(){l.remove()},function(){l.remove()});
  }
  function counter(){
    var host=document.querySelector('.v2t .pn')||document.querySelector('.ht .r');if(!host||document.querySelector('.camctr'))return;
    ctr=E('span','camctr fxn','<i>▸</i><b>01</b><small>/36</small>',{title:'读到第几张：往下读就是过片'});
    host.insertBefore(ctr,host.firstChild);num=ctr.querySelector('b');
  }
  function prints(){
    var ds=stamp();
    document.querySelectorAll('section.card').forEach(function(s){if(!s.querySelector(':scope>.dstamp'))s.appendChild(E('span','dstamp fxn',ds))});
  }
  function polaroid(){
    var name=(document.querySelector('header h1')||{}).textContent||'';
    var y=decodeURIComponent(location.pathname.split('/').pop()).split('_').slice(0,2).join(' ');
    var p=E('div','f-pola','<div class="pic"><b>'+y+'</b></div><p>'+name.slice(0,16)+'</p><span class="dstamp">'+stamp()+'</span>');
    document.body.appendChild(p);
    A(p,[{transform:'translate(-50%,120%) rotate(-3deg)',opacity:1,easing:'cubic-bezier(.2,.9,.3,1)'},{transform:'translate(-50%,-50%) rotate(-3deg)',opacity:1,offset:.22},{transform:'translate(-50%,-50%) rotate(-3deg)',opacity:1,offset:.8},{transform:'translate(70vw,-60%) rotate(10deg)',opacity:0}],2800,'linear').finished.then(function(){p.remove()},function(){p.remove()});
    A(p.querySelector('.pic'),[{filter:'brightness(.22) saturate(.1)'},{filter:'brightness(.22) saturate(.1)',offset:.14},{filter:'brightness(1) saturate(1)',offset:.7},{filter:'none'}],2800,'linear');
    shutter(180);flash(.9);
  }
  function buildCam(){
    cam=E('button','f-mini fxn',V.CAM,{type:'button','aria-label':'按快门'});document.body.appendChild(cam);
    cam.addEventListener('click',function(){
      if(V.fxOn()){shutter(170);flash(.6);A(cam,[{transform:'none'},{transform:'scale(.92) rotate(-3deg)'},{transform:'none'}],200,'ease-out')}
      var t='咔嚓';if(window.ENGTIME){var s=ENGTIME.stats();t='今日 '+ENGTIME.fmt(s.today,1)+'｜累计 '+ENGTIME.fmt(s.total)}
      var o=cam.querySelector('.f-say');if(o)o.remove();var b=E('span','f-say',t);cam.appendChild(b);setTimeout(function(){b.remove()},1900);
    });
  }
  V.reg('film',{
    enter:function(stage){
      rings=[].slice.call(stage.querySelectorAll('.cam-ring'));lastF=0;
      counter();prints();buildCam();
      rings=rings.concat([].slice.call(cam.querySelectorAll('.cam-ring')));
      if(V.filmMode()==='day'){var cd=document.querySelector('.hero .cd');if(cd&&!cd.querySelector('.cam-lens'))cd.appendChild(E('i','cam-lens fxn'))}
    },
    leave:function(){ctr=num=cam=null;rings=[]},
    relabel:function(){counter();prints()},
    scroll:function(p){
      rings.forEach(function(r){r.style.transform='rotate('+(p*300).toFixed(1)+'deg)'});
      if(!num)return;
      var f=1+Math.round(p*35);
      if(f!==lastF){lastF=f;num.textContent=pad(f);if(V.fxOn())A(num,[{transform:'translateY(40%)',opacity:.3},{transform:'none',opacity:1}],160,'ease-out')}
    },
    tab:function(){shutter(130)},
    answer:function(ok){if(ok){shutter(150);flash(.34)}else leak()},
    done:polaroid
  });
})();
