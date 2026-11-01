# -*- coding: utf-8 -*-
"""词卡下方的牛津释义：从本机《牛津英汉汉英词典》索引（_tools/.cache/ocd.json，见 ocd_index.py）
抽出真题词库里出现过的词，生成 data_oxford.js。词卡第一次打开时才加载。"""
import json,os,re
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OCD=json.load(open(os.path.join(ROOT,'_tools','.cache','ocd.json'),encoding='utf-8'))
s=open(os.path.join(ROOT,'data_vocab.js'),encoding='utf-8').read()
V=json.loads(s[s.index('window.VOCAB=')+13:].rstrip().rstrip(';'))
print(list(V.keys()))
POS={'noun':'n.','verb':'v.','adjective':'adj.','adverb':'adv.','preposition':'prep.','conjunction':'conj.','pronoun':'pron.','exclamation':'int.','transitive verb':'vt.','intransitive verb':'vi.','phrasal verb':'phr.v.','determiner':'det.','modal verb':'modal v.','auxiliary verb':'aux.v.'}
words=V.get('w') or V.get('words') or V.get('list')
out={}
def fmt(g):
    r=[]
    for pos,sen in (g or [])[:4]:
        zh=[]
        for it in sen[:5]:
            h,fld,t=it
            if not t: continue
            zh.append((('〈%s〉'%h) if h and len(h)<16 and re.search('[a-z]',h) else '')+t)
        if zh: r.append(POS.get(pos,pos)+' '+'；'.join(zh))
    return ' ‖ '.join(r)
def key(w): return re.sub(r'\s*[\(（].*$','',w).strip().lower()
n=0
for e in words:
    w=e['w'];k=key(w)
    o=OCD.get(k) or OCD.get(w)
    g=(o or {}).get('g') or e.get('o')
    if not g: continue
    t=fmt(g)
    if t: out[k]=[(o or {}).get('ph') or e.get('ipa') or '',t];n+=1
open(os.path.join(ROOT,'data_oxford.js'),'w',encoding='utf-8').write('/* 由 _tools/build_oxford.py 生成。[音标,义项]，义项来自《牛津英汉汉英词典》 */\nwindow.OXF='+json.dumps(out,ensure_ascii=False,separators=(',',':'))+';\n')
print(n,os.path.getsize(os.path.join(ROOT,'data_oxford.js'))//1024,'KB')
print(list(out.items())[:3])
