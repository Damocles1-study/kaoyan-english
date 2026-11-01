# -*- coding: utf-8 -*-
"""新版五个主题的背景素材，全部程序生成，不用任何原作图片。产物在 新版/themes/art/。"""
import os,math
import numpy as np
from PIL import Image,ImageDraw,ImageFilter
from scipy.ndimage import gaussian_filter
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT=os.path.join(ROOT,'新版','themes','art');os.makedirs(OUT,exist_ok=True)
def save(im,name,q=78):
    im.save(os.path.join(OUT,name),'WEBP',quality=q,method=6);print(name,os.path.getsize(os.path.join(OUT,name))//1024,'KB')
def blur(a,s):return gaussian_filter(a,s,mode='wrap')
def fbm(h,w,r,base=64,oct=5,ax=1.0):
    out=np.zeros((h,w),'float32');amp=1
    for i in range(oct):
        sc=base/(2**i);a=r.standard_normal((max(2,int(h/sc))+2,max(2,int(w/(sc*ax)))+2))
        im=Image.fromarray(((a-a.min())/(a.max()-a.min())*255).astype('uint8')).resize((w,h),Image.BICUBIC)
        out+=np.asarray(im,'float32')/255*amp;amp*=.5
    out-=out.min();return out/out.max()
def ridge(w,r,base,amp,peaks=5):
    """一条山脊线：几座主峰叠细碎起伏。"""
    x=np.arange(w,dtype='float32');y=np.zeros(w,'float32')
    for _ in range(peaks):
        c=r.uniform(0,w);s=r.uniform(w*.05,w*.17);y+=r.uniform(.45,1)*np.exp(-((x-c)/s)**2)
    y=y/y.max()
    for f,a in ((3,.12),(9,.07),(23,.03),(61,.011),(130,.004)):
        y+=a*np.sin(x/w*f*6.28+r.uniform(0,6.28))*r.uniform(.6,1.2)
    return base-y*amp
def mountains(w,h,seed,base,amp,tone,fade,layers=3,peaks=5):
    """水墨山：山脊处最浓，往下化进雾里；皴法用横向拉长的噪声吃墨。"""
    r=np.random.default_rng(seed);A=np.zeros((h,w),'float32');yy=np.arange(h,dtype='float32')[:,None]
    tex=fbm(h,w,r,base=26,oct=4,ax=.45);tex2=fbm(h,w,r,base=90,oct=3,ax=2.2)
    for l in range(layers):
        rd=ridge(w,r,base+l*amp*.2,amp*(1-.22*l),peaks)
        d=yy-rd[None,:];m=np.clip(d/2.2,0,1)
        wash=np.exp(-np.clip(d,0,None)/(fade*(1+.35*l)))
        a=m*wash*(.42+.75*tex)*(.72+.42*tex2)*(1-.2*l)
        A=np.maximum(A,a)
    A=np.clip(A,0,1);A=gaussian_filter(A,1.1)
    A*=np.clip((h-yy)/(h*.3),0,1)**1.4*np.ones((h,w),'float32')
    rgba=np.zeros((h,w,4),'uint8');rgba[...,0:3]=tone;rgba[...,3]=(A*255).astype('uint8')
    return Image.fromarray(rgba)
def ink_blot(n=900,seed=7):
    """一滴墨洇开：转场用。中间实，边缘不规则带毛刺。"""
    r=np.random.default_rng(seed);yy,xx=np.mgrid[0:n,0:n];c=n/2
    d=np.hypot(yy-c,xx-c)/(n*.37);th=np.arctan2(yy-c,xx-c)
    edge=np.zeros((n,n),'float32')
    for f,a in ((3,.07),(7,.05),(13,.04),(29,.025),(61,.016),(127,.01)):
        edge+=a*np.sin(th*f+r.uniform(0,6.28))
    tex=fbm(n,n,r,base=14,oct=4)
    v=d+edge+(tex-.5)*.13
    a=np.clip((1-v)*16,0,1)
    a=np.maximum(a,np.clip((1.16-v)*5,0,1)*.45*(tex>.46))
    for _ in range(60):
        t=r.uniform(0,6.28);l=r.uniform(.42,.49)*n;cy,cx=int(c+np.sin(t)*l),int(c+np.cos(t)*l);rd=r.exponential(4)+1
        a[np.hypot(yy-cy,xx-cx)<rd]=.85
    a=gaussian_filter(a,1.1)
    rgba=np.zeros((n,n,4),'uint8');rgba[...,0:3]=(22,20,17);rgba[...,3]=(a*255).astype('uint8')
    return Image.fromarray(rgba)
def paper_tile(n=420,seed=3):
    """试卷纸纹：细纤维 + 极淡的云絮，无缝平铺。"""
    r=np.random.default_rng(seed)
    a=blur(r.standard_normal((n,n)),.7)*.5+blur(r.standard_normal((n,n)),6)*.9
    f=np.zeros((n,n),'float32')
    for _ in range(420):
        x,y=r.uniform(0,n,2);t=r.uniform(0,3.14);L=r.uniform(8,34)
        for s in np.linspace(0,L,int(L)):
            f[int(y+math.sin(t)*s)%n,int(x+math.cos(t)*s)%n]+=r.uniform(.3,1)
    a=a/np.abs(a).max()+blur(f,.5)*.5
    a=(a-a.mean())/a.std()
    rgba=np.zeros((n,n,4),'uint8');rgba[...,0:3]=(104,78,34);rgba[...,3]=np.clip((a+1.4)*5,0,24).astype('uint8')
    return Image.fromarray(rgba)
def grain_tile(n=256,seed=11):
    r=np.random.default_rng(seed);a=r.standard_normal((n,n))+blur(r.standard_normal((n,n)),.6)*2
    a=(a-a.mean())/a.std()
    v=np.clip(128+a*46,0,255).astype('uint8')
    return Image.fromarray(np.dstack([v,v,v]))
def night(w=1600,h=1000,seed=21):
    """大正之夜：靛青渐变、大月亮和光晕、远山剪影、地面薄雾。"""
    r=np.random.default_rng(seed);yy,xx=np.mgrid[0:h,0:w].astype('float32')
    t=yy/h;top=np.array([6,9,22],'float32');mid=np.array([18,24,54],'float32');low=np.array([44,30,70],'float32')
    img=np.where((t<.62)[...,None],top+(mid-top)*(t/.62)[...,None],mid+(low-mid)*((t-.62)/.38)[...,None])
    mx,my,mr=w*.76,h*.25,h*.13;d=np.hypot(xx-mx,yy-my)
    halo=np.exp(-((d/mr-1).clip(0))*1.5)[...,None];img+=halo*np.array([70,76,112],'float32')*.62
    moon=np.clip((mr-d)/2,0,1)[...,None];tex=fbm(h,w,r,base=34,oct=4)[...,None]
    img=img*(1-moon)+moon*(np.array([236,232,214],'float32')-tex*np.array([38,38,30],'float32'))
    cloud=fbm(h,w,r,base=170,oct=5,ax=3.2)[...,None];img+=np.clip(cloud-.5,0,1)*np.array([76,80,128],'float32')*.75
    s=r.random((h,w));stars=(s>.9987).astype('float32')*(yy<h*.62);stars=gaussian_filter(stars,.65)*3
    img+=stars[...,None]*np.array([220,225,255],'float32')*.8*(1-moon)
    for sd,base,amp,c,fd in ((31,.76,.2,(26,26,58),60),(32,.84,.16,(15,15,38),80),(33,.95,.12,(8,8,20),120)):
        rr=np.random.default_rng(sd);rd=ridge(w,rr,h*base,h*amp,6)[None,:]
        m=np.clip((yy-rd)/2,0,1)[...,None];img=img*(1-m)+m*np.array(c,'float32')
    fog=(fbm(h,w,r,base=120,oct=4,ax=4)*np.clip((t-.66)/.3,0,1))[...,None];img+=fog*np.array([64,52,108],'float32')*.68
    return Image.fromarray(np.clip(img,0,255).astype('uint8'))
def wisteria(w=1500,h=520,seed=5):
    """紫藤：从顶边垂下的花串。花瓣上深下浅，花穗末端收细。"""
    S=2;r=np.random.default_rng(seed);im=Image.new('RGBA',(w*S,h*S),(0,0,0,0));dr=ImageDraw.Draw(im)
    def racemes(cx,n):
        for _ in range(n):
            x=cx+r.normal(0,w*.075);L=r.uniform(.42,1)*h*S*.92;sway=r.uniform(-.1,.1);y=r.uniform(-8,18)*S;steps=int(L/(11*S))
            dr.line([(x*S,y),(x*S+sway*L,y+L)],fill=(58,72,52,170),width=S)
            for i in range(steps):
                t=i/steps;py=y+t*L;px=x*S+sway*t*L;spread=(1-t)**.72*26*S;k=max(2,int((1-t)*8))
                for _ in range(k):
                    ox=r.uniform(-spread,spread);oy=r.uniform(-5,5)*S;rw=r.uniform(3.4,6.6)*S*(1-.45*t);rh=rw*r.uniform(.62,.9)
                    c=np.array([104,72,172])+(np.array([232,206,250])-np.array([104,72,172]))*min(1,t*1.15+r.uniform(-.14,.24))
                    dr.ellipse([px+ox-rw,py+oy-rh,px+ox+rw,py+oy+rh],fill=tuple(int(v) for v in c)+(int(r.uniform(165,240)),))
    for cx,n in ((w*.1,20),(w*.31,10),(w*.69,12),(w*.9,22)):racemes(cx,n)
    leaf=ImageDraw.Draw(im)
    for _ in range(260):
        x=r.uniform(0,w*S);y=r.uniform(-10,30)*S;L=r.uniform(16,42)*S;t=r.uniform(.2,2.9);c=(int(r.uniform(34,56)),int(r.uniform(74,104)),int(r.uniform(52,72)),225)
        leaf.polygon([(x,y),(x+math.cos(t)*L*.5-math.sin(t)*L*.18,y+math.sin(t)*L*.5+math.cos(t)*L*.18),(x+math.cos(t)*L,y+math.sin(t)*L),(x+math.cos(t)*L*.5+math.sin(t)*L*.18,y+math.sin(t)*L*.5-math.cos(t)*L*.18)],fill=c)
    return im.resize((w,h),Image.LANCZOS)
if __name__=='__main__':
    W=1800
    far=mountains(W,620,101,330,250,(120,120,112),42,3,6);mid=mountains(W,620,102,370,270,(70,68,62),58,3,5);near=mountains(W,520,103,250,210,(28,26,23),85,2,4)
    for nm,im in (('ink_far',far),('ink_mid',mid),('ink_near',near)):
        save(im,nm+'.webp',72);save(im.resize((W//4,im.height//4),Image.BILINEAR).filter(ImageFilter.GaussianBlur(2.6)),nm+'_soft.webp',70)
    save(ink_blot(),'ink_blot.webp',80)
    save(paper_tile(),'paper.webp',64)
    save(grain_tile(),'grain.webp',48)
    n=night();save(n,'night.webp',74);save(n.resize((800,500),Image.BILINEAR).filter(ImageFilter.GaussianBlur(7)),'night_soft.webp',70)
    wi=wisteria();save(wi,'wisteria.webp',58);save(wi.resize((750,260),Image.BILINEAR).filter(ImageFilter.GaussianBlur(3.2)),'wisteria_soft.webp',68)
