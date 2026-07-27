/* 英语阅读复盘 · 错因归因 addon —— 借鉴 408 练习系统的错因归因统计。
   用法：在阅读复盘页 </body> 前加一行 <script src="_fault_attr.js"></script> 即可，自注入样式、自挂到每道 .q。
   机制：复用页面已有的「即点即判」——答题后 .q 会拿到 .done 类，本 addon 用同一个类让错因标签行浮现；
        勾选的标签按「页面 → 题号」存 localStorage(en_attr_v1)，英语 index 的「错因分布」卡跨篇聚合。
   错因分类贴合阅读实战（对应套路库_阅读.html 的五大干扰项 + 阅读特有失误）。 */
(function(){
  const LS='en_attr_v1';
  /* 阅读页与完形页失误类型不同：页面里出现完形空格(.bk)就切到完形那套标签。
     两套标签同存一个 localStorage，index 的「错因分布」照常聚合。 */
  const TAGS_READ=['没定位到/定位错','同义替换没认出','被原词复现骗','过度推断（推两步）','混淆作者/人物','生词卡住','时间不够/蒙的'];
  const TAGS_CLOZE=['逻辑关系没看出','固定搭配不会','近义词分不清','词性/成分没先定','没往后读（复现没抓）','并列/对比方向填反','生词卡住','蒙的'];
  const TAGS=document.querySelector('.bk')?TAGS_CLOZE:TAGS_READ;
  const key=(function(){try{return decodeURIComponent((location.pathname.split('/').pop()||'page').replace(/\.html$/,''));}catch(e){return 'page';}})();
  function load(){try{return JSON.parse(localStorage.getItem(LS))||{};}catch(e){return {};}}
  function save(o){try{localStorage.setItem(LS,JSON.stringify(o));}catch(e){}}
  function toggle(qid,tag){
    const o=load(); const pg=o[key]||{}; const arr=pg[qid]||[];
    const i=arr.indexOf(tag); if(i>=0)arr.splice(i,1); else arr.push(tag);
    if(arr.length)pg[qid]=arr; else delete pg[qid];
    if(Object.keys(pg).length)o[key]=pg; else delete o[key];
    save(o); return arr.indexOf(tag)>=0;
  }
  const style=document.createElement('style');
  style.textContent=
    '.fattr{display:none;flex-wrap:wrap;gap:6px;align-items:center;margin-top:10px;padding-top:10px;border-top:1px dashed var(--line)}'+
    '.q.done .fattr,.q.tagged .fattr{display:flex}'+
    '.fattr .fa-lab{width:100%;font-size:.8rem;color:var(--muted)}'+
    '.fa-tag{font-size:.78rem;border:1px solid var(--line);background:var(--card);color:var(--muted);border-radius:20px;padding:2px 10px;cursor:pointer;transition:.15s}'+
    '.fa-tag:hover{border-color:var(--accent);color:var(--accent)}'+
    '.fa-tag.on{background:var(--accent-soft);border-color:var(--accent);color:var(--accent);font-weight:600}';
  document.head.appendChild(style);
  const store=load()[key]||{};
  document.querySelectorAll('.q').forEach((q,idx)=>{
    const qid=q.id||('q'+(idx+1));
    const sel=store[qid]||[];
    const row=document.createElement('div'); row.className='fattr';
    row.innerHTML='<span class="fa-lab">🏷 这题错在哪？标一下（进「错因分布」，答对可不标）</span>'+
      TAGS.map(t=>'<button class="fa-tag'+(sel.indexOf(t)>=0?' on':'')+'" data-t="'+t+'">'+t+'</button>').join('');
    q.appendChild(row);
    if(sel.length)q.classList.add('tagged');
    row.querySelectorAll('.fa-tag').forEach(b=>b.addEventListener('click',function(){
      const on=toggle(qid,b.dataset.t); b.classList.toggle('on',on);
      const has=((load()[key]||{})[qid]||[]).length>0; q.classList.toggle('tagged',has);
    }));
  });
})();
