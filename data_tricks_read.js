/* 英语一 · 阅读解题套路库 —— 数据与展示分离，套路库_阅读.html 读取本文件。
   借鉴 408 复盘中心的「套路库」（看到什么信号→用什么套路→链回原题）。
   内容全部提炼自本复盘中心已生成的真题复盘页（2022 T1–T4）里我写的「技巧 / 干扰项」分析，不是外抄。
   字段：
     id    卡号   tier '🔴'必用/'🟡'常用/'🟢'信号灯
     qt    适用题型   title 套路名（一句话）
     trig  识别信号（题干/原文里出现这些就调用本卡）
     flow  定位与判定流程(html)
     tmpl  正确项/错误项的长相、可套的口诀(html，可空)
     traps 陷阱数组(html)
     refs  关联真题 [{p:页面文件, q:锚点, label:显示名}]
*/
window.TRICK_READ = [

{id:'R1', tier:'🔴', qt:'细节题 / 细节因果', title:'先定位，再比「同义替换」——原词复现是陷阱',
 trig:['According to Paragraph X','题干含具体名词/数据','museums are faced with…'],
 flow:'① 拿题干里的<b>专有名词 / 数字 / 独特搭配</b>回原文<b>定位</b>那一句；'
     +'② 正确答案是这句的<b>同义替换改写</b>（preserve→maintaining、huge headaches→difficulties）。',
 tmpl:'<b>正确项＝换词不换意</b>；<b>错误项爱「原词复现」</b>——用原文出现过的词造一个意思不同的句子。'
     +'见到选项和原文<b>字面高度重合</b>反而要警惕。',
 traps:['原词复现 ≠ 正确：T3·34 用原文词 visual studies 造错项，正确的 B 反而用文外词 exemplify 做概括性替换。',
        '定位要定到「句」，别只定到「段」——同段里常埋反向/偷换干扰。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T3_艺术与科学.html',q:'q34',label:'T3·34'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36'}]},

{id:'R2', tier:'🔴', qt:'人物观点题', title:'先圈人名，再把「比喻句」翻成直义',
 trig:['X believes / notes / says','题干出现人名','In Ferreira’s opinion'],
 flow:'① 题干有人名 → 先在原文<b>圈出这个人</b>，他的话通常集中在某一两段，只在「他说的」范围里找答案；'
     +'② 他话里的<b>比喻句</b>几乎必出题，要能翻译成直义。',
 tmpl:'比喻直译口诀：<code>time bomb</code>＝先天注定出事＝inherently flawed；<code>baking a cake</code>＝配方错一点就全错；<code>handbrake</code>＝拉住不让动。',
 traps:['把<b>人物观点</b>当成<b>作者观点</b>（见 R4）。',
        '张冠李戴：把 A 说的话安到 B 头上——多人物文章尤其要盯紧「谁说的」。',
        '<b>人名在哪段，答案就在哪段</b>：2007·T1·24 问 Ericsson and his colleagues，⑤段正是「他们的研究结论」段，答案不出这一段。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q22',label:'T1·22'},{p:'2022_T4_解雇保护悖论.html',q:'q37',label:'T4·37'},{p:'2022_T3_艺术与科学.html',q:'q33',label:'T3·33'},{p:'2007_T1_刻意练习造就高手.html',q:'q24',label:'2007·T1·24'}]},

{id:'R3', tier:'🔴', qt:'例证题 / 开篇现象引入题', title:'例证题铁律：答案是例子「服务的观点」，不是例子本身',
 flow:'例子是用来<b>证明某个上位观点</b>的 → 到例子<b>前后</b>找那句观点句，那才是答案。<br>'
     +'<b>变体·开篇现象引入题</b>（题干 <code>X is mentioned to</code>、现象在首段）：现象是<b>引子</b>，答案是它<b>引出的话题</b> —— '
     +'快捷通道是<b>先扫末段主旨句</b>，主旨说什么，开篇现象就是为了引出什么。',
 trig:['the example of … is used to','illustrate / demonstrate','X is mentioned to（现象/事例在首段）','以 X 为例'],
 tmpl:'<b>就例子谈例子的选项必错</b>；答案永远是「例子往上抽一层」的那句话。',
 traps:['主客颠倒：T3·32 选项 B 把「艺术帮科学传播」说成「科学帮情感表达」，方向反了。',
        '把引子当考点：2007·T1·21 的 B「聚焦世界杯球星」——球员生日只是引子，文章真正谈的是「出色表现从何而来」。',
        '偷换比较对象：2007·T1·21 的 D 把「球员出生月份的早晚之比」换成「球队之间的强弱之比」。'],
 refs:[{p:'2022_T3_艺术与科学.html',q:'q32',label:'T3·32'},{p:'2007_T1_刻意练习造就高手.html',q:'q21',label:'2007·T1·21'}]},

{id:'R4', tier:'🔴', qt:'作者态度 / 主旨 / 末段主旨', title:'先分清「谁在说话」，再抓情态词喊话句',
 trig:['the author thinks / suggests','末段','It can be concluded'],
 flow:'① <b>作者发声段＝没有引号、没有人名</b>的段落（那是作者自己评论，不是转述人物）；'
     +'② <b>首段形容词群</b>＝全文情感基调，先定调；③ <b>末段</b>盯 <code>needs to / must / should</code> 等情态词所在句＝作者最后的喊话。',
 tmpl:'问 the author → 只看作者发声段；问某人 → 只看那人的话。两者混用就是最大的坑。',
 traps:['拿人物的话当作者态度：T1·24 问 the author，答案在无引号的⑥段，不是 van Oosten 的话。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q24',label:'T1·24'},{p:'2022_T2_Z世代与学位.html',q:'q26',label:'T2·26'},{p:'2022_T3_艺术与科学.html',q:'q35',label:'T3·35'}]},

{id:'R5', tier:'🟡', qt:'目的 / 因果题', title:'沿「因果链」走到末端，别停在半路',
 trig:['to ___（问目的）','why / because','designed to / intended to / aim','the effect of'],
 flow:'问<b>目的</b> → 找 <code>designed to / intended to / aim</code> 后面的内容（立法/制度题常在<b>制度介绍段</b>）；'
     +'问<b>结果/影响</b> → 沿 <code>Because… / This makes… / And…</code> 的因果链<b>走到最后一环</b>，答案常在链条末端。',
 tmpl:'答案 = 原因的<b>正向改写</b>（怕光损伤 →〈所以〉锁进黑暗 = 防止进一步损坏）。',
 traps:['只走一半因果链就选，会选到中间环节而非最终结果。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36'},{p:'2022_T4_解雇保护悖论.html',q:'q39',label:'T4·39'}]},

{id:'R6', tier:'🟡', qt:'推断 / 结论题', title:'只推一步 + 防「词形陷阱」',
 trig:['infer / conclude / It can be learned','某机构会支持/反对什么','末段升华'],
 flow:'① 找原文<b>立场句</b>（一句话），<b>顺着立场只推一步</b>，绝不推两步；'
     +'② 升华题 ≈ 把引语<b>抽象一层</b>改写（具体影响 → 历史意义）。',
 tmpl:'<b>词形陷阱</b>：把原文词换个词性造错项——<code>education → educator</code>（T2·30 的 B）。<br>'
     +'<b>形近反义陷阱</b>：<code>over<u>rated</u> 高估</code> ≠ <code>over<u>looked</u> 忽视</code>，一字之差意思正相反（2007·T1·24 的 C）。'
     +'一次背全这池子：overrated 高估 / underrated 低估 / overlooked 忽视 / overstated 夸大 / underestimated 低估。',
 traps:['过度推断（推两步）：T2·30 的 C 从「建议读第二学位」推出「学位不再有吸引力」，推过头。',
        '机构立场题：先定该机构的原文立场，再推一步，不能凭常识脑补。',
        '读到原文里的 over-/under- 词，<b>当场在旁边写下中文</b>，回来做题就不会被形近项绕晕。'],
 refs:[{p:'2022_T2_Z世代与学位.html',q:'q30',label:'T2·30'},{p:'2022_T4_解雇保护悖论.html',q:'q38',label:'T4·38'},{p:'2022_T1_塑料文物保护.html',q:'q25',label:'T1·25'},{p:'2007_T1_刻意练习造就高手.html',q:'q24',label:'2007·T1·24'}]},

{id:'R7', tier:'🟡', qt:'细节题（题干限定段落）', title:'题干限定第 N 段，别处的「对信息」也是错项',
 trig:['In Paragraph 5','According to Para X','题干明确点段号'],
 flow:'题干限定段落时，<b>只在该段找</b>；其他段落里即使有说得对的信息，放进选项也是<b>错的</b>——专为「不看限定」的人挖的坑。',
 tmpl:'答对此类题的动作：先在原文<b>圈出题干指定的段号</b>，答案定位不出这一段。',
 traps:['段落错位：T2·29 的 B 是⑥段的 up-skilling，题干却限定 Paragraph 5 → 错。'],
 refs:[{p:'2022_T2_Z世代与学位.html',q:'q29',label:'T2·29'}]},

{id:'R8', tier:'🔴', qt:'通用 · 排除选项', title:'五大干扰项类型：认出类型就秒排',
 trig:['排除三个错误选项时','拿不准该选哪个'],
 flow:'考研阅读的错误项<b>几乎都能归进这五类</b>，认出是哪一类，排除就快且稳：',
 tmpl:'<table class="tk"><tr><th>类型</th><th>长相</th><th>例</th></tr>'
     +'<tr><td><b>无中生有</b></td><td>文中根本没提</td><td>T1·24A「谈钱」全文没有</td></tr>'
     +'<tr><td><b>偷换</b></td><td>换概念/主宾/时态/段落</td><td>T1·21B 偷换首句、T2·30C 换时态</td></tr>'
     +'<tr><td><b>反向</b></td><td>把原文意思说反</td><td>T2·28D、T4 多处</td></tr>'
     +'<tr><td><b>张冠李戴</b></td><td>把 A 的事安到 B 头上</td><td>T1·23C 化学家的活安给博物馆；2007·T1·23D 把「刻意练习」的三要素安给「好记忆」</td></tr>'
     +'<tr><td><b>过度推断</b></td><td>顺着原文多推一步</td><td>T2·30C 推两步</td></tr></table>'
     +'<p style="margin-top:8px"><b>反向提醒</b>：干扰项爱<b>原词照抄</b>，正确项常是<b>归纳性改写</b>。'
     +'看到某项与原文字面高度重合，先回原句问一句「<b>这句在说谁</b>」——主语对不上，词再像也是错的。</p>',
 traps:['一个选项可能同时踩两类（偷换+张冠李戴），命中任一类即可排除。',
        '「偷换主语」是最隐蔽的一种偷换：2007·T1·23 的 D 把原文 it（指 deliberate practice）悄悄换成题干问的 good memory。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T2_Z世代与学位.html',q:'q28',label:'T2·28'},{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2007_T1_刻意练习造就高手.html',q:'q23',label:'2007·T1·23'}]},

{id:'R9', tier:'🟢', qt:'通用 · 信号灯', title:'两国家/两方案 &amp; 让步从句 = 出题信号灯',
 trig:['末段出现两个国家/两个方案','even if / although','Nor + 倒装'],
 flow:'看到这些结构，基本能预判考点：<br>'
     +'· <b>两国家/两方案并存</b> → 必有一题考<b>张冠李戴</b>（把 A 方案的失败嫁接到 B 头上）；<br>'
     +'· <b>让步从句</b>（even if 父母老师没变）里的内容 → 常被拿来做<b>反向干扰项</b>；<br>'
     +'· <b>Nor 开头的倒装 / 强调句</b> → 出题热点，两个并列否定合并归纳就是答案。',
 tmpl:'',
 traps:['T4·40 的 D 把新西兰的失败嫁接给澳大利亚——两方案题的经典造坑法。'],
 refs:[{p:'2022_T4_解雇保护悖论.html',q:'q40',label:'T4·40'},{p:'2022_T3_艺术与科学.html',q:'q33',label:'T3·33'},{p:'2022_T2_Z世代与学位.html',q:'q28',label:'T2·28'}]},

{id:'R10', tier:'🔴', qt:'词义推理题', title:'词义题三步法：标点提示 → 同根复现 → 比强度',
 trig:['The word “X” (Line n, Para m) most probably means','the phrase … most likely refers to','四个选项都是近义词'],
 flow:'① <b>回原句看标点</b>——逗号 / 破折号 / 冒号后常是对生词的<b>解释或同位改写</b>（2007·T1·22：<code>in springtime, at the annual peak of soccer mania</code>，后半句解释前半句）；'
     +'② 找<b>同根或同义复现</b>——同一句里往往另有一个你认识的词在给它做注解（<code>soccer-<b>mad</b></code> ↔ <code>mania</code>）；'
     +'③ 四个近义词摆一起时，比的不是「像不像」，而是<b>感情强度与褒贬</b>。',
 tmpl:'<b>强度尺子</b>（词义题的核心工具）：<code>fun 乐趣 &lt; excitement 兴奋 &lt; craze/mania 狂热 &lt; hysteria 歇斯底里（病态贬义）</code>——'
     +'<b>太弱的和太重的同时排除</b>，只留强度与原文情感对得上的那个。',
 traps:['<b>用字典义答题</b>：mania 的医学义是「躁狂症」，照搬就会选 hysteria；词义题考的永远是<b>语境义</b>。',
        '把生词当拦路虎：生词所在句往往<b>自带注解</b>（同位语/举例/对比），先读完整句再看选项。',
        '强度稀释项常成对出现（fun 与 excitement 是同一种错法），认出这一对可一次排两个。'],
 refs:[{p:'2007_T1_刻意练习造就高手.html',q:'q22',label:'2007·T1·22'}]},

{id:'R11', tier:'🟡', qt:'谚语主旨题 / 标题题', title:'先自写一句话主旨，再拿「核心对立」卡谚语',
 trig:['Which of the following proverbs is closest to…','The best title for the text is','the message the text tries to convey'],
 flow:'① <b>别急着看选项</b>——谚语都写得漂亮，先看谁必被带跑。先自己写出一句话主旨（2007·T1：出色表现靠后天刻意练习，不靠天赋）；'
     +'② 找出主旨里的<b>核心对立</b>（练习 vs 天赋）；'
     +'③ 拿这组对立去卡每个谚语：<b>说反的先排</b> → <b>与核心对立无关的再排</b> → 剩下的必须<b>两个关键概念都对得上</b>。',
 tmpl:'关键词咬合法：<code>Practice</code> ↔ deliberate practice、<code>perfect</code> ↔ expert performers/made —— 两个词都咬住才算命中。'
     +'主旨句只在<b>首尾段</b>找，绝不在中间的实验细节里找。',
 traps:['<b>「沾边但没打到靶心」最难排</b>：2007·T1·25 的 B「种瓜得瓜」重心是「付出与回报的对应」，完全没触碰「天赋」这一边 → 错。',
        '反向谚语反而好排：同题 D「有其父必有其子」讲遗传，与 made, not born 正相反。',
        '把某段的细节当主旨：谚语题问的是全文 message，不是某个实验说明了什么。'],
 refs:[{p:'2007_T1_刻意练习造就高手.html',q:'q25',label:'2007·T1·25'},{p:'2022_T1_塑料文物保护.html',q:'q25',label:'T1·25'}]}

];

window.TRICK_READ_META = {
  subject:'英语一 · 阅读',
  source:'2022 Text 1–4 · 2007 Text 1',
  note:'提炼自本复盘中心各篇阅读真题复盘页的技巧/干扰项分析，随复盘页增长。'
};
