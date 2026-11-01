# -*- coding: utf-8 -*-
"""内容补写的小工具：每个 yNNNN.py 里 D['2022_T1']=[(锚点,html),...]。
锚点：before:关键词 = 插到标题含关键词的那一节之前；after:关键词 = 插到其后。"""
D={}
def fi(t,b): return '<div class="fi"><b>%s</b>：%s</div>'%(t,b)
def sec(n,title,body): return '<section class="card" data-depth="1"><h2><span class="n">%s</span>%s</h2>%s</section>'%(n,title,body)
def flow(*items): return '<div class="flow">'+''.join(items)+'</div>'
def outline(*paras):
    """读前脉络：('①段','作用','内容')"""
    return sec('00','读前一分钟 · 全文脉络（做完题再看也行）',flow(*[fi(a+' '+b,c) for a,b,c in paras]))
def bg(n,*items): return sec('00+','读前背景 · %s（只帮读懂，不是考点）'%n,flow(*[fi(a,b) for a,b in items]))
def col(k,title,*ps): return sec('02'+'+'*k,'专栏 · '+title,''.join('<p>%s</p>'%p for p in ps))
def ledger(k,rows,note):
    """十五个干扰项：(题,项,手法,为什么错)"""
    import collections
    c=collections.Counter(r[2] for r in rows)
    sum_=' · '.join('%s %d'%(a,b) for a,b in c.most_common())
    t=''.join('<tr><td>%s</td><td><b>%s</b></td><td>%s</td><td>%s</td></tr>'%r for r in rows)
    return sec('02'+'+'*k,'专栏 · %d 个干扰项的产地总账'%len(rows),'<p><b>手法分布</b>：%s</p><div class="tabwrap"><table class="ctab"><tr><th>题</th><th>项</th><th>手法</th><th>错在哪</th></tr>%s</table></div><p>%s</p>'%(sum_,t,note))
