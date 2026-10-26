/* 阅读题「题干 · 选项词汇」：每道题选项下面加一个默认收起的小表，列出题干和四个选项里值得认的词。
 * 数据来自 data_optvocab.js（_tools/build_vocab.py 生成）：
 *   本篇语境义 = 这一篇自己的词卡给的义项（别篇的语境义不搬过来，免得张冠李戴）；
 *   常见义     = 牛津英汉；「⚠️ 本篇考的是熟词僻义」只在本篇词卡就是按僻义讲的时候才标，别篇的僻义只做提示。
 * 点词跳到「真题词汇背诵」词表里看完整卡片（新标签页打开，不打断做题）。 */
(function(){
  var O = window.OPTV; if (!O) return;
  var page = decodeURIComponent(location.pathname.split('/').pop());
  var Q = O.q[page]; if (!Q) return;
  var css = document.createElement('style');
  css.textContent = '.ovbox{margin:8px 0 2px}.ovbox>summary{cursor:pointer;font-size:.8rem;font-weight:600;color:var(--muted,#888);list-style:none;display:inline-block;border:1px dashed var(--line,#ddd);border-radius:8px;padding:2px 10px}'
    + '.ovbox>summary::-webkit-details-marker{display:none}.ovbox[open]>summary{color:var(--accent,#8b5e34);border-style:solid}'
    + '.ovt{width:100%;border-collapse:collapse;margin-top:8px;font-size:.84rem}.ovt td{border-top:1px solid var(--line,#e8e3d8);padding:5px 6px;vertical-align:top}'
    + '.ovt td.wh{width:2.6em;color:var(--muted,#888);font-size:.75rem;white-space:nowrap}.ovt td.w{white-space:nowrap;font-family:var(--serif,Georgia,serif);font-weight:700}'
    + '.ovt td.w a{color:var(--ink,#222);text-decoration:none;border-bottom:1px dotted var(--muted,#888)}.ovt .ipa{display:block;font-family:var(--sans,sans-serif);font-weight:400;font-size:.72rem;color:var(--muted,#888)}'
    + '.ovt .here{font-weight:600}.ovt .here b{color:var(--accent,#8b5e34)}.ovt .ox{color:var(--muted,#888)}.ovt .pl{color:#b0413e;font-size:.72rem;font-weight:700;margin-left:4px}'
    + '.ovt .n{font-size:.7rem;color:var(--muted,#888);white-space:nowrap}@media (max-width:600px){.ovt td.n{display:none}}';
  document.head.appendChild(css);
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  Object.keys(Q).forEach(function(qid){
    var q = document.getElementById(qid); if (!q) return;
    var opts = q.querySelector('.opts'); if (!opts) return;
    var rows = Q[qid].map(function(r){
      var w = O.w[r[2]]; if (!w) return '';
      var here = r[3] ? '<div class="here">' + r[3] + '<span class="note" style="font-weight:400;color:var(--muted,#888)">（本篇）</span></div>' : '';
      return '<tr><td class="wh">' + esc(r[0]) + '</td><td class="w"><a href="词汇背诵.html?q=' + encodeURIComponent(w[0]) + '" target="_blank" rel="noopener">' + esc(r[1]) + '</a>'
        + (r[1].toLowerCase() !== w[0].toLowerCase() ? '<span class="ipa">← ' + esc(w[0]) + '</span>' : '') + (w[1] ? '<span class="ipa">' + esc(w[1]) + '</span>' : '') + '</td>'
        + '<td>' + here + (w[3] ? '<div class="ox">常见义：' + esc(w[3]) + '</div>' : '')
        + (r[4] ? '<span class="pl">⚠️ 本篇考的是熟词僻义</span>' : (w[4] ? '<span class="ox" style="font-size:.72rem">（别篇考过它的僻义，点词看全部语境）</span>' : '')) + '</td>'
        + '<td class="n">' + (w[5] > 1 ? '真题 ' + w[5] + ' 篇' : '') + '</td></tr>';
    }).join('');
    if (!rows) return;
    var d = document.createElement('details'); d.className = 'ovbox';
    d.innerHTML = '<summary>🔤 题干 · 选项词汇（' + Q[qid].length + '）</summary><table class="ovt">' + rows + '</table>';
    opts.parentNode.insertBefore(d, opts.nextSibling);
    d.addEventListener('click', function(e){ e.stopPropagation(); });   // 别触发选项的判题点击
  });
})();
