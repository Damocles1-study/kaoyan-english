/* 词库页的「回到原题」：从阅读页选项词汇跳过来时显示，同一标签页来回，不多开标签。 */
(function(){
  var r; try { r = JSON.parse(sessionStorage.getItem('eng_back_v1')); } catch(e){}
  if (!r || !r.url) return;
  var b = document.createElement('a');
  b.href = r.url; b.textContent = '← 回到 ' + (r.label || '原题');
  b.style.cssText = 'position:fixed;left:16px;bottom:18px;z-index:90;background:#2b2b2b;color:#fff;padding:9px 16px;border-radius:999px;font:600 14px -apple-system,"PingFang SC",sans-serif;text-decoration:none;box-shadow:0 6px 20px rgba(0,0,0,.28)';
  b.addEventListener('click',function(e){
    try { if (document.referrer && new URL(document.referrer).pathname === r.url.split('?')[0] && history.length > 1) { e.preventDefault(); history.back(); } } catch(x){}
  });
  document.body.appendChild(b);
})();
