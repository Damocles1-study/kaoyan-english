# -*- coding: utf-8 -*-
"""把自己保存的 Chiikawa 设定图处理成主题能用的透明底图。
原图放 新版/themes/art/chii/raw/（文件名照 Wiki 默认的就行），产物写到 新版/themes/art/chii/。
两个目录都被 .gitignore 排除，不进公开仓库。可以传目录参数：build_chii_art.py 原图目录 产物目录"""
import os,re,sys,glob
import numpy as np
from PIL import Image
from scipy import ndimage as ni
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW=sys.argv[1] if len(sys.argv)>1 else os.path.join(ROOT,'新版','themes','art','chii','raw')
OUT=sys.argv[2] if len(sys.argv)>2 else os.path.dirname(RAW)
SIZE=512
def who(n):
    n=n.lower()
    if 'hachi' in n: return 'hachi'
    if 'usagi' in n: return 'usagi'
    if 'momo' in n: return 'momo'
    if 'chiikawa' in n: return 'chii'
def mood(n):
    n=n.lower()
    if re.search(r'cry|sad',n): return 'cry'
    if re.search(r'yaha|joy|happy',n): return 'joy'
    if re.search(r'modern|moder|_base',n): return ''
    return None
def cut(im):
    """从四边灌水去掉白底，只留角色：离主体太远的笔画（图上手写的名字）丢掉，贴着身子的毛保留。"""
    a=np.asarray(im.convert('RGBA')).astype('float32');rgb=a[...,:3];alpha=a[...,3]
    h,w=alpha.shape
    corners=[(0,0),(0,w-1),(h-1,0),(h-1,w-1)]
    if not all(alpha[c]<20 or rgb[c].min()>235 for c in corners): return None
    bg=(rgb.min(axis=2)>236)|(alpha<20)
    lab,_=ni.label(bg)
    edge=set(lab[0,:])|set(lab[-1,:])|set(lab[:,0])|set(lab[:,-1]);edge.discard(0)
    outside=np.isin(lab,list(edge))
    fg=~outside
    gap=max(4,int(max(h,w)*.022))
    lab2,n=ni.label(ni.binary_dilation(fg,iterations=gap))
    if not n: return None
    sizes=ni.sum(fg,lab2,range(1,n+1))
    fg&=lab2==int(np.argmax(sizes))+1
    ys,xs=np.where(fg)
    soft=ni.gaussian_filter(fg.astype('float32'),.6)
    out=np.dstack([rgb,np.clip(soft,0,1)*np.where(alpha<20,0,alpha)]).astype('uint8')
    im2=Image.fromarray(out).crop((xs.min(),ys.min(),xs.max()+1,ys.max()+1))
    im2.thumbnail((SIZE-8,SIZE-8),Image.LANCZOS) if max(im2.size)>SIZE-8 else None
    k=(SIZE-8)/max(im2.size)
    if k>1: im2=im2.resize((round(im2.width*k),round(im2.height*k)),Image.LANCZOS)
    c=Image.new('RGBA',(SIZE,SIZE),(0,0,0,0));c.paste(im2,((SIZE-im2.width)//2,SIZE-im2.height-2),im2)
    return c
done={}
for f in sorted(glob.glob(os.path.join(RAW,'*'))):
    n=os.path.basename(f);c=who(n);m=mood(n)
    if not c or m is None: print('跳过（认不出是谁或什么表情）',n);continue
    r=cut(Image.open(f))
    if r is None: print('跳过（不是白底，抠不了）',n);continue
    name=c+('_'+m if m else '')
    r.save(os.path.join(OUT,name+'.png'));done[name]=n;print(name,'<-',n)
miss=[c for c in ('chii','hachi','usagi','momo') if c not in done]
print('完成',len(done),'张'+('；还缺 '+' '.join(miss) if miss else ''))
