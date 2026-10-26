# 用法：python3 _tools/ocd_index.py（只需跑一次，产物在 _tools/.cache/，不进仓库）
# 牛津英汉（系统自带 Simplified Chinese - English.dictionary）→ 紧凑索引 ocd.json
# {headword: {"ph":音标, "g":[[pos, [[ind, fld, trans], ...]], ...], "pv":{phrasal: [[pos,[[ind,fld,trans]]]]}, "con":[[短语/例, 译]]}}
import re,json,zlib,struct,os
from lxml import etree
# 系统自带《牛津英汉汉英词典》Body.data：0x60 起是一串 [4 字节长度][8 字节头][zlib 块]
BODY="/System/Library/AssetsV2/com_apple_MobileAsset_DictionaryServices_dictionary3macOS/93198f6ae0a53c70c903be9261f2f3784d3e9407.asset/AssetData/Simplified Chinese - English.dictionary/Contents/Resources/Body.data"
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'.cache','ocd.json')
f=open(BODY,'rb').read(); pos=0x60; parts=[]
while pos < len(f)-12:
    sz,=struct.unpack_from('<I',f,pos)
    if sz<=0 or pos+4+sz>len(f): break
    parts.append(zlib.decompress(f[pos+4+8:pos+4+sz])); pos+=4+sz
s=b''.join(parts).decode('utf-8','ignore')
ents=re.findall(r'<d:entry [^>]*id="e_b-en[^"]*"[^>]*>.*?</d:entry>',s,re.S)
print('english entries',len(ents))
def cls(e): return e.get('class') or ''
def txt(e):
    return re.sub(r'\s+',' ',''.join(t for t in e.itertext())).strip()
def has(e,c): return c in cls(e).split()
def trans_of(trg):
    return [txt(t) for t in trg.iter() if has(t,'trans') and 'ty_pinyin' not in cls(t)]
def senses(gramb):
    out=[]
    for sem in gramb.iter():
        if not has(sem,'semb'): continue
        ind=[];fld=[];tr=[]
        for t in sem.iter():
            c=cls(t)
            # 跳过例句里的译文
            anc=t; inex=False
            while anc is not None and anc is not sem:
                if has(anc,'exg'): inex=True;break
                anc=anc.getparent()
            if inex: continue
            if has(t,'ind') and not ind: ind.append(txt(t).strip('() '))
            if has(t,'fld'): fld.append(txt(t))
            if has(t,'trans') and 'ty_pinyin' not in c: tr.append(txt(t))
        tr=[x for x in tr if x]
        if tr: out.append([' '.join(ind), ' '.join(fld), '；'.join(dict.fromkeys(tr))])
    return out
D={}
parser=etree.HTMLParser()
for i,raw in enumerate(ents):
    raw2=re.sub(r'</?d:[a-z]+[^>]*>','',raw)
    raw2=re.sub(r' d:[a-z]+="[^"]*"','',raw2)
    root=etree.fromstring('<div>'+raw2+'</div>',parser)
    if root is None: continue
    hw=re.search(r'd:title="([^"]*)"',raw).group(1)
    ph=root.xpath('.//span[@class="ph"]')
    ent={'ph':txt(ph[0]) if ph else '', 'g':[], 'pv':{}, 'con':[]}
    for gb in root.iter():
        if not has(gb,'gramb'): continue
        # 属于 pvsec 的另算
        anc=gb.getparent(); pv=None
        while anc is not None:
            if has(anc,'pvsec'):
                p=[x for x in anc.iter() if has(x,'pv')]; pv=txt(p[0]) if p else None; break
            anc=anc.getparent()
        ps=[x for x in gb.iter() if has(x,'ps')]
        pos=txt(ps[0]) if ps else ''
        ss=senses(gb)
        if not ss: continue
        if pv: ent['pv'].setdefault(pv,[]).append([pos,ss])
        else: ent['g'].append([pos,ss])
    for ex in root.iter():
        if not has(ex,'exg'): continue
        c=[x for x in ex.iter() if has(x,'con') or has(x,'ex')]
        t=[x for x in ex.iter() if has(x,'trans') and 'ty_pinyin' not in cls(x)]
        if c and t: ent['con'].append([txt(c[0]),txt(t[0])])
    key=hw.lower()
    if key in D:  # 同形异义（homograph）合并
        D[key]['g']+=ent['g']; D[key]['pv'].update(ent['pv']); D[key]['con']+=ent['con']
    else: D[key]=ent
json.dump(D,open(OUT,'w'),ensure_ascii=False)
print('ocd entries',len(D),'→',OUT)
