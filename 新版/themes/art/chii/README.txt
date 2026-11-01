Chiikawa 主题的角色图来源，优先级从高到低：

1. 本目录的本地图（可带表情图，命名如 chii_joy.png、usagi_cry.png）。
   python3 _tools/fetch_chii_official.py 可把官方站的图存到这里；白底原图放 raw/ 后跑 _tools/build_chii_art.py。
   本目录的图片已被 .gitignore 排除，不进公开仓库。
2. 网页打开时直接从官方动画站取拼图：
   https://www.anime-chiikawa.jp/images/characters/img_charapage.png
   图片不存入本仓库。官方站改路径或限制外链时，页面会自动退回 3。
3. 矢量图（theme.js 的 CHAR）。

图片版权归 ©ナガノ/ちいかわ製作委員会。本站是个人备考页面，非官方、非商用。
