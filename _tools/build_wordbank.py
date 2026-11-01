# -*- coding: utf-8 -*-
"""词库分类模块：从各复盘页统计题干选项高频词、态度情绪词、翻译领域词、专名、政策词、必会词、作文词句，生成 新版/data_wordbank.js。"""
import re,json,glob,os,html,collections
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
d=open('data_vocab.js',encoding='utf-8').read();VB=json.loads(d[d.index('window.VOCAB=')+13:].rstrip().rstrip(';'))
WORDS=VB['words'];PAGES=VB['pages']
o=open('data_oxford.js',encoding='utf-8').read();OXF=json.loads(o[o.index('window.OXF=')+11:].rstrip().rstrip(';'))
def strip(h): return html.unescape(re.sub(r'<[^>]+>','',h or '')).strip()
def clean(t):
    t=re.sub(r'[（(]\s*(?:老卡\s*)?\**R\d+[^）)]{0,20}[）)]','',t)
    t=re.sub(r'[⭐🆕✅❌⚠️📌]+\s*','',t)
    return t.strip()
def lex(w): return re.sub(r'\s*[\(（].*$','',w).strip().lower()
BYW={lex(w['w']):w for w in WORDS}
def gl(w):
    e=BYW.get(w)
    return clean(strip(e['x'][0][1])) if e and e['x'] else ''
def ox(w):
    e=OXF.get(w)
    return e[1] if e else ''
def ipa(w):
    e=BYW.get(w)
    if e and e['ipa']: return e['ipa']
    e=OXF.get(w);return ('/'+e[0].strip(',')+'/') if e and e[0] else ''
# ---- 题干和选项 ----
Q=[]
for f in sorted(glob.glob('20*_T[1-4]_*.html')):
    s=open(f,encoding='utf-8').read();y,t=f.split('_')[:2]
    for m in re.finditer(r'<div class="q"[^>]*id="(q\d+)"[^>]*>(.*?)(?=<div class="q"|</section>)',s,re.S):
        qid,b=m.groups()
        st=re.search(r'<p class="stem">(.*?)</p>',b,re.S)
        qt=re.search(r'<span class="qt">(.*?)</span>',b,re.S)
        stem=strip(st.group(1)) if st else ''
        if qt: stem=stem.replace(strip(qt.group(1)),'',1).strip()
        opts=[strip(x) for x in re.findall(r'<div class="opt[^"]*">(.*?)</div>',b,re.S)]
        Q.append(dict(f=f[:-5],y=int(y),t=t,q=qid,stem=stem,opts=opts,qt=strip(qt.group(1)) if qt else ''))
print('题',len(Q))
def where(q): return [q['y'],q['t'],q['q'],q['f']]
TOK=re.compile(r"[A-Za-z][A-Za-z'’-]+")
def variants(w):
    # 词干粗匹配
    return w
# ---- 手工词表：态度 / 情绪 ----
ATT={'正面 · 赞成':'favorable favourable supportive approving positive optimistic appreciative enthusiastic admiring confident hopeful sympathetic understanding encouraging praise commend advocate endorse welcome favor favour support approve'.split(),
 '负面 · 反对':'critical negative disapproving pessimistic contemptuous hostile opposed scornful dismissive unsympathetic disappointed regretful sarcastic ironic disapprove oppose criticize criticise condemn reject object accuse blame dismiss'.split(),
 '怀疑 · 谨慎':'skeptical sceptical doubtful dubious suspicious cautious concerned worried uncertain questioning wary reserved apprehensive puzzled confused doubt question suspect'.split(),
 '中立 · 客观':'neutral objective impartial balanced indifferent uninterested unconcerned tolerant ambiguous ambivalent detached'.split()}
EMO='anxious anxiety frustrated frustration frustrating fear afraid angry anger irritated upset excited excitement thrilled delighted delight joy pleasure satisfied satisfaction proud pride ashamed shame guilty guilt embarrassed envy jealous sorrow grief stressed stress nervous lonely loneliness nostalgia nostalgic astonished surprised surprise amazed resentful resentment despair panic awe relief relieved calm bored boredom disgust happy happiness sad sadness depressed depression passion passionate curious curiosity hope hopeless desperate humiliated annoyed annoying fascinated fascination tension'.split()
def count(ws):
    res=[]
    for w in ws:
        r=re.compile(r"\b%s\b"%re.escape(w),re.I);hits=[];no=ns=0
        for q in Q:
            io=[x for x in q['opts'] if r.search(x)]
            if io: no+=len(io);hits.append((io[0],q))
            if r.search(q['stem']): ns+=1;hits.append((q['stem'],q))
        if no+ns==0: continue
        res.append(dict(w=w,ipa=ipa(w),gl=gl(w),ox=ox(w),no=no,ns=ns,ex=[[h[0][:120]]+where(h[1]) for h in hits[:3]]))
    return sorted(res,key=lambda a:-(a['no']+a['ns']))
B={}
B['att']={'title':'态度词','desc':'题干选项里出现过的作者或人物态度词。态度题四个选项基本从这里出。数字是出现在 76 篇阅读题选项和题干里的次数。','groups':[{'name':k,'items':count(v)} for k,v in ATT.items()]}
B['emo']={'title':'情绪词','desc':'选项和题干里形容人物心情的词。','groups':[{'name':'情绪','items':count(EMO)}]}
# ---- 选项高频 ----
STOP=set("""the a an of to and in that is for it as with be by on not are this which or from at was were has have had but they their its can may will would could should than more most some such these those there what when who whom whose how why if so do does did been being he she his her him we our you your i my me us them about into over after before between under against during through because while out up down off only other also very much many any each both all no nor own same too just then once here own again further few one two three first second new old make made makes take takes given give gives get gets use used uses using way ways people thing things time times year years often likely need needs seems seem said says say according paragraph author text passage following best except mentioned suggests suggest implies imply shows show show means mean refers refer word words sentence example examples learn infer known know knew reason reasons main mainly mostly probably might must shall lot little less least like likes want wants well good better great large small high low long short own part parts help helps helped tend tends come comes go goes going see seen look looks think thinks found find finds work works working becoming become becomes keep keeps put puts let lets still even ever never always sometimes rather quite however therefore thus yet though although whether something someone anyone anything everything nothing more much too""".split())
c=collections.Counter();ex={};cp={}
for q in Q:
    for op in q['opts']:
        seen=set()
        for t in TOK.findall(re.sub(r'^\[[A-D]\]\s*','',op)):
            t=t.lower().replace('’',"'")
            if t in STOP or len(t)<4 or "'" in t: continue
            if t in seen: continue
            seen.add(t);c[t]+=1;ex.setdefault(t,[]).append([op[:120]]+where(q));cp.setdefault(t,set()).add(q['f'])
top=[w for w,n in sorted(c.items(),key=lambda a:(-len(cp[a[0]]),-a[1])) if (ox(w) or gl(w))][:240]
B['opt']={'title':'选项高频词','desc':'按出现过的文章篇数排，只在一篇里反复出现的话题词排在后面。选项喜欢用抽象词概括原文，这页认熟了选项读得快。','groups':[{'name':'前 240','items':[dict(w=w,ipa=ipa(w),gl=gl(w),ox=ox(w),no=c[w],ns=0,pg=len(cp[w]),ex=ex[w][:3]) for w in top]}]}
# ---- 问法 ----
PAT=[('作者态度','attitude',r"attitude|\bview(s|ed)? (of|on)|feels? about|regard(s|ed)? .* as"),('主旨 / 标题','best title',r"best title|main idea|mainly (about|discuss)|mainly concerned|central|primarily (about|concerned)"),('推断','infer',r"infer|we can learn|can be learned|implied|implies|suggests? that|most probably"),('例证目的','cited to',r"cited|mentioned to|mention .* to|example|\bto show\b|in order to|illustrate"),('词义句义','most probably means',r"probably means|the word|the phrase|the sentence|closest in meaning|refers to"),('细节定位','according to',r"according to"),('作者同意 / 判断对错','author would agree',r"would agree|true of|which of the following|statement|except"),('下文 / 结构','next',r"next|follow|organi[sz]ed|structure|develop")]
g=[]
for nm,kw,p in PAT:
    r=re.compile(p,re.I);hit=[q for q in Q if r.search(q['stem'])]
    g.append(dict(w=nm,ipa='',gl='共 %d 题'%len(hit),ox='',no=len(hit),ns=0,ex=[[q['stem'][:140]]+where(q) for q in hit[-6:]]))
B['ask']={'title':'题干问法','desc':'把 %d 道阅读题的题干按问法归类，一道题可能同时归入两类。先认问法，再决定回原文找什么。'%len(Q),'groups':[{'name':'问法','items':sorted(g,key=lambda a:-a['no'])}]}
gram=collections.Counter();gex={};gpg={}
for q in Q:
    for op in q['opts']:
        toks=[t.lower() for t in TOK.findall(re.sub(r'^\[[A-D]\]\s*','',op))]
        for n in (2,3,4):
            for i in range(len(toks)-n+1):
                gg=toks[i:i+n]
                if gg[0] in STOP-{'lack','take','make','give','have','keep'} or gg[-1] in STOP: continue
                if sum(1 for x in gg if x not in STOP)<2 and n<4: continue
                gs=' '.join(gg);gram[gs]+=1;gex.setdefault(gs,[]).append([op[:120]]+where(q));gpg.setdefault(gs,set()).add(q['f'])
ph=[(g_,gram[g_]) for g_ in sorted(gram,key=lambda k:(-len(gpg[k]),-gram[k])) if len(gpg[g_])>=2][:120]
B['optph']={'title':'选项高频短语','desc':'在至少两篇不同文章的选项里都出现过的词组，单篇专有词组已排除。','groups':[{'name':'短语','items':[dict(w=g_,ipa='',gl=gl(g_),ox='',no=n,ns=0,ex=gex[g_][:3]) for g_,n in ph]}]}
# ---- 翻译领域 ----
DOM={'法律教育与新闻记者':'法律 · 新闻','达尔文论智力':'生物 · 认知','广义教育与正规教育':'教育','经济利己主义的环保制度':'环保 · 经济','心智是编织大师':'心理 · 认知','普遍真理的现实检验':'哲学 · 文化','无家可归者的花园':'社会 · 人生','贝多芬与勇气':'音乐 · 名人','殖民地时期的美国':'历史','放慢生活节奏':'社会 · 人生','英语走向何方':'语言','莎士比亚时代的戏剧盛世':'文学 · 戏剧','劣质科研为何泛滥':'科研 · 学术','文艺复兴与理性时代':'历史 · 思想','二战后高等教育大扩张':'教育','密码破译战':'历史 · 军事','人工智能与数字营销':'科技 · 商业','大象的空间导航':'生物 · 认知','公民科学如何运作':'科研 · 学术'}
idx={i:p for i,p in enumerate(PAGES)}
gd=collections.defaultdict(list);dm_ok=set()
for w in WORDS:
    for x in w['x']:
        p=idx.get(x[0])
        if p and p[1]=='翻译':
            dm=DOM.get(p[2],'其他');dm_ok.add(p[2])
            gd[dm].append(dict(w=w['w'],ipa=w['ipa'],gl=strip(x[1]),ox=ox(lex(w['w'])),no=0,ns=0,y=p[0],poly='poly' in w['c'],phrase='phrase' in w['c'],ex=[[strip(x[2])[:140],p[0],'翻译','',p[3][:-5]]]))
            break
print('翻译页',len(dm_ok),[p[2] for p in PAGES if p[1]=='翻译' and p[2] not in DOM])
B['tr']={'title':'翻译领域词','desc':'19 年翻译题词卡，按话题领域分组。翻译爱考的是人文、历史、教育、科研和法律这几类。红标表示这里不是最常见的意思。','groups':[{'name':k,'items':v} for k,v in sorted(gd.items(),key=lambda a:-len(a[1]))]}
# ---- 专名 ----
PN=collections.defaultdict(list);seen=set()
for f in sorted(glob.glob('20*.html')):
    s=open(f,encoding='utf-8').read();y=f[:4];t=f.split('_')[1]
    for m in re.finditer(r'<h2[^>]*>(?:(?!</h2>).)*?(读前背景|专名)(?:(?!</h2>).)*?</h2>(.*?)</section>',s,re.S):
        for row in re.findall(r'<tr>(.*?)</tr>',m.group(2),re.S)[1:]:
            tds=re.findall(r'<td[^>]*>(.*?)</td>',row,re.S)
            if len(tds)<2: continue
            nm=clean(strip(tds[0]));de=clean(strip(tds[1]))
            if not nm or len(nm)>70 or nm in seen: continue
            seen.add(nm)
            if '《' in nm or re.search(r'小说|著作|作品|论文|报告|专著',de[:40]): g_='名作 · 书刊'
            elif re.search(r'法案|法院|判决|政策|条例|Act\b|Court|法$|宪法|修正案|税|规则|新规',nm+de[:30]): g_='法律 · 政策'
            elif re.search(r'报|杂志|大学|公司|机构|协会|委员会|基金|银行|部门|研究所|University|Times|Journal|Institute|Bank|Inc|Press',nm+de[:20]): g_='机构 · 媒体'
            elif re.search(r'家[，。、；]|学者|教授|作家|总统|首相|法官|经济学|诗人|记者|（\d{4}|生于|\d{4}[–-]\d{4}',de[:50]): g_='人物'
            else: g_='事件 · 地名 · 概念'
            PN[g_].append(dict(w=nm,ipa='',gl=de[:180],ox='',no=0,ns=0,y=int(y),ex=[[de[:240],int(y),t,'',f[:-5]]]))
print({k:len(v) for k,v in PN.items()})
B['name']={'title':'名人名作专名','desc':'读前背景里整理过的人物、书刊、机构、法案和概念。阅读和翻译出现这些词时不用查，也不用为它卡住。','groups':[{'name':k,'items':PN[k]} for k in ['人物','名作 · 书刊','法律 · 政策','机构 · 媒体','事件 · 地名 · 概念'] if PN.get(k)]}
# ---- 政策词 ----
POLR=re.compile(r'法案|立法|法律|法规|政策|监管|管制|税|补贴|关税|法院|判决|裁决|诉讼|上诉|条例|宪法|公共|政府|议会|国会|选举|改革|福利|预算|垄断|反垄断|工会|移民|合规|执法|许可|专利|版权|隐私')
gp=collections.defaultdict(list)
for w in WORDS:
    g_=strip(w['x'][0][1]) if w['x'] else ''
    fs=w.get('f') or []
    if POLR.search(g_) or any(f_ in ('法律','政治','经济','商业','金融') for f_ in fs):
        m=POLR.search(g_)
        grp='法律 · 司法' if re.search(r'法|判|诉|裁|宪|专利|版权|隐私|执法|合规',g_) else '财税 · 经济' if re.search(r'税|补贴|预算|垄断|福利',g_) or '经济' in fs or '金融' in fs else '政府 · 公共'
        gp[grp].append(dict(w=w['w'],ipa=w['ipa'],gl=g_,ox=ox(lex(w['w'])),no=w['n'],ns=0,y=w['y'][0] if w['y'] else 0,ex=[[strip(x[2])[:140],PAGES[x[0]][0],PAGES[x[0]][1],'',PAGES[x[0]][3][:-5]] for x in w['x'][:2]]))
B['pol']={'title':'政策法政词','desc':'最高法院、税收、监管、公共政策类文章是阅读常客。意思按真题语境给，右边是牛津通用义。','groups':[{'name':k,'items':sorted(v,key=lambda a:-a['no'])} for k,v in gp.items()]}
# ---- 必会 / 僻义 ----
def card(w):
    return dict(w=w['w'],ipa=w['ipa'],gl=clean(strip(w['x'][0][1])) if w['x'] else '',ox=ox(lex(w['w'])),no=w['n'],ns=0,y=w['y'][0] if w['y'] else 0,ex=[[strip(x[2])[:140],PAGES[x[0]][0],PAGES[x[0]][1],'',PAGES[x[0]][3][:-5]] for x in w['x'][:2]])
must=sorted([w for w in WORDS if 'phrase' not in w['c'] and lex(w['w']) not in STOP and w['x']],key=lambda w:-w['n'])[:300]
poly=sorted([w for w in WORDS if 'poly' in w['c'] and w['x'] and w['x'][0][1]],key=lambda w:-w['n'])[:300]
phr=sorted([w for w in WORDS if 'phrase' in w['c'] and w['x'] and w['x'][0][1]],key=lambda w:-w['n'])[:300]
B['must']={'title':'必会词','desc':'按真题篇数排，每个词都标了出现篇数。排前面的先过。','groups':[{'name':'高频单词 300','items':[card(w) for w in must]},{'name':'熟词僻义 300','items':[card(w) for w in poly]},{'name':'高频短语 300','items':[card(w) for w in phr]}]}
# ---- 作文 ----
JSC='/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc'
import subprocess,tempfile
def block(s,i):
    i=s.index('{',i);dp=0;q=None;j=i
    while j<len(s):
        c_=s[j]
        if q:
            if c_=='\\': j+=2;continue
            if c_==q:q=None
        else:
            if c_ in '"\'`':q=c_
            elif c_=='{':dp+=1
            elif c_=='}':
                dp-=1
                if dp==0:return s[i:j+1]
        j+=1
gw=collections.defaultdict(list);tmp=tempfile.mkdtemp()
for f in sorted(glob.glob('20*_作文_*.html')):
    s=open(f,encoding='utf-8').read();m=re.search(r'(const|var|let)\s+V\s*=\s*\{',s)
    if not m: continue
    src=block(s,m.start());p=os.path.join(tmp,'a.js');open(p,'w',encoding='utf-8').write('var V=%s;print(JSON.stringify(V));'%src)
    r=subprocess.run([JSC,p],capture_output=True,text=True)
    if r.returncode: print('ERR',f,r.stderr[:80]);continue
    for k,e in json.loads(r.stdout).items():
        pos=strip(e.get('pos','')).split('·')[0].strip() or '表达'
        wd=strip(e.get('w',''))
        if not wd: continue
        lv='句型' if len(wd.split())>=6 else '短语' if len(wd.split())>=2 else '单词'
        gw[lv].append(dict(w=wd,ipa='',gl=strip(e.get('cn','')),ox='',no=0,ns=0,y=int(f[:4]),tag=pos[:14],ex=[[clean(strip(e.get('mig') or e.get('why') or ''))[:200],int(f[:4]),'作文','',f[:-5]]]))
wb=[]
for f in sorted(glob.glob('20*.html')):
    s=open(f,encoding='utf-8').read()
    for m in re.finditer(r'<div class="wbi"><div class="p">(.*?)</div>\s*<div class="u">(.*?)</div></div>',s,re.S):
        p_=m.group(1);u=m.group(2)
        star=p_.count('⭐')
        own=re.findall(r'<i class="own">(.*?)</i>',u,re.S) or re.findall(r'<code>(.*?)</code>',u,re.S)
        wb.append((star,dict(w=clean(strip(p_))[:150],ipa='',gl=clean(strip(u))[:260],ox='',no=0,ns=0,y=int(f[:4]),tag='可套句',ex=[[strip(own[0])[:200] if own else '',int(f[:4]),f.split('_')[1],'',f[:-5]]])))
wb.sort(key=lambda a:-a[0])
print('作文',{k:len(v) for k,v in gw.items()},'句',len(wb))
B['essay']={'title':'作文词句','desc':'范文里的表达和阅读翻译里值得搬的句式。三类都能直接背。句子优先选标了星的。','groups':[{'name':'可套句式 400','items':[x[1] for x in wb[:400]]}]+[{'name':k,'items':gw[k]} for k in ['句型','短语','单词'] if gw.get(k)]}
order=['must','att','emo','opt','optph','ask','tr','name','pol','essay']
out={'order':order,'b':{k:B[k] for k in order},'nq':len(Q)}
t=json.dumps(out,ensure_ascii=False,separators=(',',':'))
open('新版/data_wordbank.js','w',encoding='utf-8').write('/* 由 _tools/build_wordbank.py 生成 */\nwindow.WB='+t+';\n')
print('KB',len(t.encode())//1024,{k:sum(len(g['items']) for g in B[k]['groups']) for k in order})
for k,g_ in [('att',0),('emo',0),('opt',0),('optph',0)]:
    print(k,[(i['w'],i['no']+i['ns']) for i in B[k]['groups'][g_]['items'][:14]])
