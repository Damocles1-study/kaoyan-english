# -*- coding: utf-8 -*-
"""把 yNNNN.py 里的补写内容插进旧页（旧新两版都会有），可重复运行。"""
import os,re,glob,sys,importlib
H=os.path.dirname(os.path.abspath(__file__));sys.path.insert(0,H)
ROOT=os.path.dirname(os.path.dirname(H));os.chdir(ROOT)
import lib
for f in sorted(glob.glob(H+'/y*.py')): importlib.import_module(os.path.basename(f)[:-3])
START='<!--depth-->';END='<!--/depth-->'
SEC=re.compile(r'<section class="card"[^>]*>')
n=0
for key,items in lib.D.items():
    y,k=key.split('_',1)
    fs=glob.glob('%s_%s_*.html'%(y,k)); assert len(fs)==1,key
    s=open(fs[0],encoding='utf-8').read()
    s=re.sub(r'<section class="card" data-depth="1">.*?</section>','',s,flags=re.S)
    s=re.sub(re.escape(START)+'|'+re.escape(END)+r'\n?','',s)
    for anchor,html in [i for i in items if i[0].startswith('before')]+[i for i in reversed(items) if i[0].startswith('after')]:
        how,kw=anchor.split(':',1)
        ms=list(SEC.finditer(s));pos=None
        for i,m in enumerate(ms):
            h=re.search(r'<h2[^>]*>(.*?)</h2>',s[m.start():m.start()+2000],re.S)
            t=re.sub(r'<[^>]+>','',h.group(1)) if h else ''
            if re.search(kw,t):
                pos=m.start() if how=='before' else (ms[i+1].start() if i+1<len(ms) else s.index('</main>'))
                break
        assert pos is not None,(key,anchor)
        if s[:pos].endswith(START): pos-=len(START)
        s=s[:pos]+START+html+END+'\n'+s[pos:]
    if 'id="depthcss"' not in s:
        s=s.replace('</head>','<style id="depthcss">.flow{display:grid;gap:8px;font-size:.92rem}.flow .fi{border:1px solid var(--line);border-radius:10px;padding:9px 13px}.flow .fi b{color:var(--accent)}.ctab{width:100%;border-collapse:collapse;font-size:.86rem;margin:8px 0}.ctab th,.ctab td{border:1px solid var(--line);padding:7px 9px;text-align:left;vertical-align:top}.ctab th{background:var(--accent-soft);color:var(--accent);font-size:.8rem;white-space:nowrap}.tabwrap{overflow-x:auto}</style>\n</head>',1)
    open(fs[0],'w',encoding='utf-8').write(s);n+=1
print('applied',n)
