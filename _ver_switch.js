/* 新旧版一键切换：两边都加载这一个文件。跳过去后回到同一节，不用重新找位置。 */
(function(){
  var KEY='eng_ver_pos', path=decodeURIComponent(location.pathname), parts=path.split('/'), file=parts.pop()||'index.html';
  var isNew=parts[parts.length-1]==='新版';
  var pair=/^(20\d\d_.*|index|词汇背诵|套路库_阅读)\.html$/.test(file);
  function target(){
    if(isNew) return '../'+encodeURIComponent(pair?file:'index.html');
    return '新版/'+encodeURIComponent(pair?file:'index.html');
  }
  function heads(){ return [].slice.call(document.querySelectorAll('section.card h2, main h2')); }
  function norm(t){ return (t||'').replace(/\s+/g,'').slice(0,12); }
  function save(){
    var hs=heads(), best=null, off=0;
    hs.forEach(function(h){ var y=h.getBoundingClientRect().top; if(y<=140&&h.offsetParent){ best=h; off=y; } });
    try{ sessionStorage.setItem(KEY,JSON.stringify({f:file,t:best?norm(best.textContent):'',o:off,y:window.scrollY})); }catch(e){}
  }
  function restore(){
    var r; try{ r=JSON.parse(sessionStorage.getItem(KEY)); sessionStorage.removeItem(KEY); }catch(e){}
    if(!r||r.f!==file||(!r.t&&!r.y)) return;
    function go(){
      var hit=r.t&&heads().filter(function(h){ return norm(h.textContent)===r.t; })[0];
      var y=hit?hit.getBoundingClientRect().top+window.scrollY-Math.max(r.o,104):r.y;
      window.scrollTo({top:Math.max(0,y),behavior:'instant'});
    }
    go(); setTimeout(go,260);
  }
  function make(){
    var a=document.createElement('a');
    a.className='ver-sw'; a.href=target(); a.dataset.vsw='1';
    a.title=isNew?'切到旧版（同一页）':'切到新版（同一页）';
    a.innerHTML='<span class="'+(isNew?'':'on')+'">旧版</span><span class="'+(isNew?'on':'')+'">新版</span>';
    a.addEventListener('click',save);
    return a;
  }
  function init(){
    var css=document.createElement('style');
    css.textContent='.ver-sw{display:inline-flex;align-items:stretch;border:1px solid var(--line,#ccc);border-radius:7px;overflow:hidden;font:600 12.5px/1.75 -apple-system,"PingFang SC",sans-serif;text-decoration:none!important;flex:none;background:var(--card,#fff);padding:0!important}'
      +'.ver-sw span{padding:0 9px;color:var(--muted,#888)}.ver-sw span.on{background:var(--ink,#222);color:var(--bg,#fff)}'
      +'.ver-sw:hover span:not(.on){color:var(--accent,#8b5e34)}'
      +'.ver-fix{position:fixed;right:12px;top:10px;z-index:90;box-shadow:0 2px 10px rgba(0,0,0,.18)}';
    document.head.appendChild(css);
    var el=make(), host=isNew&&(document.querySelector('.v2t .pn')||document.querySelector('.ht .r')||document.querySelector('.ht'));
    if(host) host.appendChild(el); else { el.classList.add('ver-fix'); document.body.appendChild(el); }
    restore();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
