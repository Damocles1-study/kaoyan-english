# -*- coding: utf-8 -*-
"""英语一新版：把旧复盘页转成 新版/ 下的同名页面，旧页面一个字不动。
做三件事：改资源路径（共用 ../img、../data_*.js）、去掉内部规则编号、挂上 v2.css / v2.js。"""
import re,glob,os,shutil
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)));os.chdir(ROOT)
OUT='新版'
LOCAL=re.compile(r'^(20\d\d_.*\.html|index\.html|词汇背诵\.html|套路库_阅读\.html)')
def fix_paths(s):
    def rp(m):
        a,q,u=m.group(1),m.group(2),m.group(3)
        if re.match(r'^(https?:|#|javascript:|mailto:|data:|\$|\.\./\.\./)',u) or LOCAL.match(u): return m.group(0)
        return '%s=%s../%s%s'%(a,q,u,q)
    s=re.sub(r'''\b(src|href)=(["'])([^"']*)\2''',rp,s)
    s=re.sub(r'''url\((['"]?)img/''',r'url(\1../img/',s)
    return s
RREF=re.compile(r'[（(]\s*(?:老卡\s*)?(?:<b>)?\s*R\d+(?:\s*[–\-、,，/／～~]\s*R?\d+)*\s*(?:</b>)?\s*[）)]')
def strip_refs(s): return RREF.sub('',s)
n=0
for f in sorted(glob.glob('20*.html')):
    s=open(f,encoding='utf-8').read()
    s=strip_refs(fix_paths(s))
    s=s.replace('</head>','<link rel="stylesheet" href="v2.css?v=2">\n<script src="themes/theme.js?v=5"></script>\n<script src="data_value.js?v=1"></script>\n</head>',1)
    s=re.sub(r'<body([^>]*)>',lambda m:'<body%s class="v2-wait">'%m.group(1) if 'class=' not in m.group(1) else m.group(0),s,1)
    i=s.rfind('</body>')
    s=s[:i]+'<script>try{if(typeof V!=="undefined")window.__V2V=V}catch(e){}</script><script src="v2.js?v=3"></script>\n'+s[i:]
    open(os.path.join(OUT,f),'w',encoding='utf-8').write(s);n+=1
for f in ['词汇背诵.html','套路库_阅读.html']:
    s=strip_refs(fix_paths(open(f,encoding='utf-8').read()))
    s=s.replace('</head>','<link rel="stylesheet" href="v2.css?v=2">\n<script src="themes/theme.js?v=5"></script>\n<style>.wrap{max-width:1040px!important}</style>\n</head>',1)
    open(os.path.join(OUT,f),'w',encoding='utf-8').write(s)
print('pages',n)
