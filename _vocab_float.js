/* 词汇卡网格点词：原先桌面端会 window.scrollTo(0) 跳回页首去看右侧词卡，在词卡区来回点很不方便。
 * 改为：右侧词卡在视野里就原地刷新；不在视野里（已经滚到下面的词汇卡区）就把词卡浮到右下角，页面不动。
 * 浮窗点「收起」或按 Esc 关掉；滚回原文区（右栏重新可见）时自动归位。各复盘页只需调用 vocabFloat()。 */
(function(){
  var st = document.createElement('style');
  st.textContent =
    '@media (min-width:901px){' +
    'aside.vf{position:fixed!important;top:auto!important;right:18px;bottom:18px;width:360px;z-index:60;animation:vfIn .18s ease-out}' +
    'aside.vf #panel{max-height:72vh;overflow-y:auto;box-shadow:0 10px 32px rgba(0,0,0,.22)}' +
    'aside.vf #panel .close{display:block!important;float:right;border:none;background:var(--line,#ddd);border-radius:8px;padding:2px 10px;cursor:pointer;color:var(--ink,#222)}' +
    '@keyframes vfIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}}' +
    '.vitem.vf-on{border-color:var(--accent,#c00)!important;box-shadow:0 0 0 2px var(--accent-soft,rgba(200,0,0,.15))}';
  document.head.appendChild(st);
  function aside(){ return document.querySelector('aside'); }
  function layoutVisible(){
    var a = aside(), lay = a && a.parentElement; if (!lay) return true;
    var r = lay.getBoundingClientRect();
    return r.bottom > 260 && r.top < window.innerHeight - 160;
  }
  window.vocabFloat = function(item){
    var a = aside(); if (!a) return;
    document.querySelectorAll('.vitem.vf-on').forEach(function(x){ x.classList.remove('vf-on'); });
    if (item && item.classList) item.classList.add('vf-on');
    if (window.innerWidth <= 900) return;
    a.classList.remove('vf');
    var r = (document.getElementById('panel') || a).getBoundingClientRect();
    if (layoutVisible() && r.top >= 0 && r.top < window.innerHeight - 120) return;   // 右栏本来就看得见
    a.classList.add('vf');
  };
  function off(){ var a = aside(); if (a) a.classList.remove('vf'); }
  document.addEventListener('click', function(e){ if (e.target.closest && e.target.closest('aside.vf #panel .close')) off(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') off(); });
  window.addEventListener('scroll', function(){ var a = aside(); if (a && a.classList.contains('vf') && layoutVisible()) off(); }, {passive:true});
})();
