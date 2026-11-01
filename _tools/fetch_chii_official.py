# -*- coding: utf-8 -*-
"""从 Chiikawa 动画官方站取角色图，切成单张放进 新版/themes/art/chii/。
图只留在本机（该目录已被 .gitignore 排除），版权归 ©ナガノ/ちいかわ製作委員会，不要提交到公开仓库。"""
import os,subprocess,tempfile
import numpy as np
from PIL import Image
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT=os.path.join(ROOT,'新版','themes','art','chii')
URL='https://www.anime-chiikawa.jp/images/characters/img_charapage.png'
ORDER=['chii','hachi','usagi','momo','kuri']  # 拼图里从左到右的前五个
tmp=os.path.join(tempfile.mkdtemp(),'sprite.png')
subprocess.run(['curl','-sSf','-m','30','-o',tmp,URL],check=True)
im=Image.open(tmp).convert('RGBA');col=(np.asarray(im)[...,3]>16).any(axis=0)
runs=[];s=None
for x,v in enumerate(col):
    if v and s is None:s=x
    if not v and s is not None:
        if x-s>20:runs.append((s,x))
        s=None
if s is not None:runs.append((s,len(col)))
if len(runs)<len(ORDER): raise SystemExit('拼图结构变了，切出 %d 段'%len(runs))
for name,(l,r) in zip(ORDER,runs):
    c=im.crop((l,0,r,im.height));c=c.crop(c.getbbox())
    k=504/max(c.size);c=c.resize((round(c.width*k),round(c.height*k)),Image.LANCZOS)
    p=Image.new('RGBA',(512,512),(0,0,0,0));p.paste(c,((512-c.width)//2,510-c.height),c)
    p.save(os.path.join(OUT,name+'.png'));print(name+'.png')
