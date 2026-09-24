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
        '定位要定到「句」，别只定到「段」——同段里常埋反向/偷换干扰。',
        '<b>四个选项全落在同一句附近时</b>，靠「眼熟」分不出来，必须逐项核对三件事：<b>①谁做的　②做的是哪个动作　③这句是陈述还是质疑</b>。'
        +'2007·T2·26 三种错法各来一个：B 错在动作（<code>envision</code> 想象折剪后的样子 → 说成真去动手折剪）、C 错在主体（读者提的问题 → 说成测试的题目）、A 错在语气（作者的<b>反问质疑</b> → 说成测试的内容）。',
        '<b>2012·T3·32 给 R1 打一个补丁：同义替换是<u>必要条件</u>，不是充分条件</b>。'
        +'A strict inspection 的中心词正是 scrutiny 的同义词，却丢了灵魂修饰语 collective、另加了原文没有的 strict——<b>替换完还要核修饰语站在哪根轴上</b>（⟹ R121）。',
        '<b>2012·T4·38C</b>：四个选项里唯一有原文词根的 increased（pay increases）偏偏是错的——命题人给「原词复现」那一格配了一个方向相反的副词 excessively（原文 modest）；正确项 indirectly augmented 反而两词都零词源。',
        '<b>2015·T4·36D／40C</b>：36D 照抄 integrity、institutions、across so many（wide），只把 dearth 换成 misuse；40C 照抄 common humanity——全篇照抄最多的两项都是干扰项。',
        '<b>2016·T2</b>：方向反四个里三个从原文原词出发——28B 照抄 <code>"off-plan" building</code>（authorising → abandon）、29D 照抄 <code>lobby pressure</code>（under → against）、27B 从 <code>concrete</code> 联想出 reinforced；<b>29A 的 against urban 也是原词复现</b>，Claude 盲做就栽在这份「眼熟」上。',
        '<b>2016·T3·34D</b>：<code>constitutes part of the investigation</code> 原样搬走③❸ <code>as part of their investigations</code>——那句说的是检察官<b>不</b>把消费产品当作调查的一部分；原词复现、丢掉 not 的语境，方向正好说反（黄皮书把出处定在⑤❶）。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T3_艺术与科学.html',q:'q34',label:'T3·34'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36'},{p:'2007_T2_智力测试的边界.html',q:'q26',label:'2007·T2·26'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q32',label:'2012·T3·32A（inspection 恰是 scrutiny 的同义词，却丢了 collective——同义替换是必要不充分，见 R121）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q38',label:'2012·T4·38（唯一有词根的 C 是错的）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q26',label:'2014·T2·26B（inflation 是比较基准，原词复现当原因）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q36',label:'2015·T4·36D（只换 dearth 一个词）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col5',label:'2016·T2 · 02+++++ 专栏（原词复现 ＋ 方向反）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q34',label:'2016·T3·34D（研究设计句的原词，丢了 not）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q21',label:'2019·T1·21D（larger benefit → larger profits：借 larger、换中心词，药成了病）'}]},

{id:'R2', tier:'🔴', qt:'人物观点题', title:'先圈人名，再把「比喻句」翻成直义',
 trig:['X believes / notes / says','题干出现人名','In Ferreira’s opinion'],
 flow:'① 题干有人名 → 先在原文<b>圈出这个人</b>，他的话通常集中在某一两段，只在「他说的」范围里找答案；'
     +'② 他话里的<b>比喻句</b>几乎必出题，要能翻译成直义。',
 tmpl:'比喻直译口诀：<code>time bomb</code>＝先天注定出事＝inherently flawed；<code>baking a cake</code>＝配方错一点就全错；<code>handbrake</code>＝拉住不让动。',
 traps:['把<b>人物观点</b>当成<b>作者观点</b>（见 R4）。',
        '张冠李戴：把 A 说的话安到 B 头上——多人物文章尤其要盯紧「谁说的」。',
        '<b>人名在哪段，答案就在哪段</b>：2007·T1·24 问 Ericsson and his colleagues，⑤段正是「他们的研究结论」段，答案不出这一段。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q22',label:'T1·22'},{p:'2022_T4_解雇保护悖论.html',q:'q37',label:'T4·37'},{p:'2022_T3_艺术与科学.html',q:'q33',label:'T3·33'},{p:'2007_T1_刻意练习造就高手.html',q:'q24',label:'2007·T1·24'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q22',label:'2019·T1·22（describing this financial impatience as …：马歇尔是喻体，本体回指 short-termism）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q32',label:'2019·T3·32C（科幻剧在 ③❷，是作者在讲大众，不是伊格曼的话）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q38',label:'2019·T4·38（圈人名：肯尼迪的话只有 ④ 三句）'}]},

{id:'R3', tier:'🔴', qt:'例证题 / 开篇现象引入题', title:'例证题铁律：答案是例子「服务的观点」，不是例子本身',
 flow:'例子是用来<b>证明某个上位观点</b>的 → 到例子<b>前后</b>找那句观点句，那才是答案。<br>'
     +'<b>变体·开篇现象引入题</b>（题干 <code>X is mentioned to</code>、现象在首段）：现象是<b>引子</b>，答案是它<b>引出的话题</b> —— '
     +'快捷通道是<b>先扫末段主旨句</b>，主旨说什么，开篇现象就是为了引出什么。<br>'
     +'<b>同源变体还有两个：引言/谚语的作用、某概念的作用</b>——法则完全一样（<b>配角只负责引出主角</b>），操作细则见 <b>R16</b>（2007·T4 一篇里连考了这两个）。<br>'
     +'<b>⚠️ 还有一种更狠的变体：开篇事例是<u>靶子</u>，不是论据</b>（2008·T3）。<b>信号＝事例之后紧跟 <code>though / however / but</code> ＋ <code>obscure / mask / conceal / hide / belie</code> 这类「掩盖」义动词</b>——<code>The trend in sports, <b>though</b>, may be <b>obscuring</b> an unrecognized reality: …</code>。<b>见到这一组，就知道开篇现象是要被推翻的，全文重心在冒号/转折之后。</b><br>'
     +'<b>⚠️ 第三种变体：开篇事例是<u>反差铺垫</u></b>（2008·T4）。<b>信号＝第二段首句是一句反差句</b>（<code>That’s a <b>far different image from</b> the cherry-tree-chopping George most people remember</code>）——'
     +'<b>此时事例不是引子也不是靶子，而是「反例本身」，写作目的落在<u>事例主角本身</u>（揭示不为人知的一面）。判引入方向的完整操作见 <a href="#R27">R27</a>。</b><br>'
     +'<b>解法（对事例题本身）：找出事例里发生变化的那个<u>量</u>，再看下一句把它扩到了哪个<u>范围</u>——同时罩住这两层的那一项才是答案。</b>2008·T3·31：变化的量是<b>身高</b>（3 → 42），下一句扩到<b>整个职业体育</b> ⟹ 选 <code>illustrate the change of <b>height</b> of NBA players</code>。',
 trig:['the example of … is used to','illustrate / demonstrate','X is mentioned to（现象/事例在首段）','以 X 为例'],
 tmpl:'<b>就例子谈例子的选项必错</b>；答案永远是「例子往上抽一层」的那句话。',
 traps:['主客颠倒：T3·32 选项 B 把「艺术帮科学传播」说成「科学帮情感表达」，方向反了。',
        '把引子当考点：2007·T1·21 的 B「聚焦世界杯球星」——球员生日只是引子，文章真正谈的是「出色表现从何而来」。',
        '偷换比较对象：2007·T1·21 的 D 把「球员出生月份的早晚之比」换成「球队之间的强弱之比」。',
        '<b>只答对「动作」不算——必须连「对比的内容」一起答对。</b>2008·T3·31 的 C <code>compare different generations of NBA players</code> 确实抓到了「今昔对比」这个动作，<b>却丢掉了对比的东西是<u>身高</u></b>——比工资、比战绩、比球风都能套进这个选项，太宽了。',
        '<b>凡选项要调动你的<u>课外知识</u>才成立，一律警惕。</b>2008·T3·31 的 D <code>assess the achievements of famous NBA players</code> 靠的是读者「张伯伦是历史级巨星」这个常识——<b>原文对他只有一句客观的身高描述，战绩一个字没提。</b>',
        '<b>第四种靶子信号（2013·T1）</b>：第二段首句用<b>否定 ＋ 比较级</b>宣判首段事例过时——<code>This top-down conception … couldn’t be more out of date or at odds with…</code>。被宣判的那一端是靶子，主题在 at odds with 之后；25B Challenge to a high-fashion myth 取的就是靶子那一端。',
        '<b>2015·T2·30</b>：⑦❸ 克尔把数字信息比作 20 世纪的汽车——题干 <code>is quoted to indicate that</code>，答案取它前一句⑦❷ 论点（New, disruptive technology sometimes demands novel applications of the Constitution’s protections ⟹ B reinterpretation）；30A implemented flexibly 停在了比方的字面 novel rules 上。',
        '<b>2016·T4·37</b>：⑤❷–❹ 网飞停掉 DVD 邮寄「当时被骂、后来证明有远见」——例子服务的是⑤❶「改变有时值得」，<b>不是</b>「纸质版该马上停」；所以紧接着的方案（⑤❻❼）是不定年份、提价，而不是停印。',
        '<b>2017·T1·21</b>：埃航 804 坠机服务的观点被省略掉了——②❷ <code>provides another tragic reminder of why</code>，why 后要回②❶ 补全（美国人为何愿意忍耐耗时安检）⟹ B；A／C／D 都从事例本身或段内别的词出发（⟹ <a href="#R216">R216</a>）。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q26',label:'2010·T2·26B（反用：拿①段美林的例子 asset allocation 当「引发关注的原因」——例子只为论点作证，不能反过来充当论点）'},
       {p:'2022_T3_艺术与科学.html',q:'q32',label:'T3·32'},{p:'2007_T1_刻意练习造就高手.html',q:'q21',label:'2007·T1·21'},{p:'2008_T3_美国人的身高极限.html',q:'q31',label:'2008·T3·31（事例即靶子）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（事例即反差）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q25',label:'2013·T1·25B（反差句左端当主题）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q32',label:'2013·T3·32（引证题：红色名录是③段第三条证据，答案取它服务的论点「人类能延续」）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q33',label:'2014·T3·33（Higgs 例证服务于破折号前的观点：collaborative nature ⟹ joint effort）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q30',label:'2015·T2·30（类比服务的论点在前一句⑦❷）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q37',label:'2016·T4·37（网飞例子服务「改变有时值得」）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q21',label:'2017·T1·21（事例服务的观点藏在省略的 why 里）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q22',label:'2019·T1·22（引语题答「引来说明什么」：short-termism）'}]},

{id:'R4', tier:'🔴', qt:'作者态度 / 主旨 / 末段主旨', title:'先分清「谁在说话」，再抓情态词喊话句',
 trig:['the author thinks / suggests','末段','It can be concluded'],
 flow:'① <b>作者发声段＝没有引号、没有人名</b>的段落（那是作者自己评论，不是转述人物）；'
     +'② <b>首段形容词群</b>＝全文情感基调，先定调；③ <b>末段</b>盯 <code>needs to / must / should</code> 等情态词所在句＝作者最后的喊话。',
 tmpl:'问 the author → 只看作者发声段；问某人 → 只看那人的话。两者混用就是最大的坑。',
 traps:['拿人物的话当作者态度：T1·24 问 the author，答案在无引号的⑥段，不是 van Oosten 的话。',
        '<b>把「现状陈述段」当「作者立场段」</b>：2007·T2 第三段陈述「IQ 分数仍是衡量标准」，那是<b>被批判的靶子</b>，不是作者赞同——30 题 A 项专坑读错这一段的人。',
        '<b>句末的 <code>, argues X.</code> 是身份标签</b>：引述倒装把说话人甩到句末，一看到就要意识到「这一整句是 X 说的，不是作者说的」。',
        '<b>2015·T2</b>：一篇写给最高法院的社论，主句主语是 the court／the justices 的有 7 句，作者的态度全在情态动词里——can and should（③❷）· should start by discarding（④❶）· should not … whole（⑦❶）· must sort out（⑦❸）；把 should／must 句连起来就是全文主旨。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q24',label:'T1·24'},{p:'2022_T2_Z世代与学位.html',q:'q26',label:'T2·26'},{p:'2022_T3_艺术与科学.html',q:'q35',label:'T3·35'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q25',label:'2011·T1·25（四个说话人，25C 把 Alex Ross 的信心安给作者）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'col4',label:'2015·T2 · 02++++ 专栏（情态动词梯子）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'col1',label:'2015·T4（spoke of／argued／continued／thought 四个转述标记只在①②）'}]},

{id:'R5', tier:'🟡', qt:'目的 / 因果题', title:'沿「因果链」走到末端，别停在半路',
 trig:['to ___（问目的）','why / because','designed to / intended to / aim','the effect of'],
 flow:'问<b>目的</b> → 找 <code>designed to / intended to / aim</code> 后面的内容（立法/制度题常在<b>制度介绍段</b>）；'
     +'问<b>结果/影响</b> → 沿 <code>Because… / This makes… / And…</code> 的因果链<b>走到最后一环</b>，答案常在链条末端。<br>'
     +'<b>⭐三步定因果</b>：① 先分清题干给的是<b>因</b>还是<b>果</b>（<code>… in that ___ / because ___</code>＝给果求因；<code><b>As a result of</b> X, … may have ___</code>＝给因求果）；'
     +'② 回原文找因果标志；③ 只锁定标志的<b>那一侧</b>。',
 tmpl:'答案 = 原因的<b>正向改写</b>（怕光损伤 →〈所以〉锁进黑暗 = 防止进一步损坏）。<br>'
     +'<b>⭐因果标志分两类，隐性的才是难点：</b><br>'
     +'· <b>显性</b>：<code>because / since / as / due to / owing to / therefore / thus / consequently / as a result / lead to / result in / result from / bring about / give rise to / stem from / attribute A to B</code>；<br>'
     +'· <b>隐性</b>：<code><b>with</b> + 名词 + 分词</code>（伴随状语交代后果，<b>2007·T3 的 32、33 两题连用同一结构</b>）、'
     +'<code>the <b>side effect</b> / implications / effects of…</code>、<code>… <b>as well</b></code>（前因带出后果）、<b>破折号与冒号后的解释</b>、'
     +'<code>A has begun, and B <b>may not be far behind</b></code>（时间先后暗示因果，2007·T3·34）、以及<b>动词自带因果</b>（transform / reduce A to B / work against）。<br>'
     +'<b>⭐⭐ 先看题干动词，它决定你要在因果链上停在哪一格（2008·T4·40 立）：</b><br>'
     +'· <code><b>originate from / stem from / result from / be rooted in / arise from / spring from</b></code> ⟹ <b>往上游追到「根」</b>；<br>'
     +'· <code><b>lead to / result in / contribute to / give rise to / bring about</b></code> ⟹ <b>往下游走到「果」</b>；<br>'
     +'· <code><b>be based on / due to / because of</b></code> ⟹ 取<b>直接原因</b>，不必追根。<br>'
     +'<b>2008·T4·40 的标本</b>：一句话里写了三格——<code>observing the bravery of the black soldiers</code>（军事经历）→ <code>had begun to believe that all men were created equal</code>（道德认知）→ <code>overcame the opposition to grant his slaves their freedom</code>（决定本身）。'
     +'<b>题干问 <code>originated from</code> ⟹ 要第一格（B military experience）；选 A moral considerations 就是停在了中间那一格。</b><b>命题人把三格塞进同一句，就是在等你停错地方。</b><br>'
     +'<b>正确项三查</b>：① 信息本身为真；② 与题干<b>确有直接因果关系</b>（不是只在同一段出现）；③ <b>方向没反、程度没超</b>。',
 traps:['只走一半因果链就选，会选到中间环节而非最终结果。',
        '<b>「同义复述题干」的选项一律排除</b>：因果题里，题干给了「果」，把这个果换个说法再抄一遍的选项永远是错的（2007·T2·28 的 C「莎凡特是不会重演的极端个案」＝题干本身，不是原因）。',
        '<b>把「并列」读成「因果」</b>：两条信息都在文中，但原文从没把它们连过线。2007·T3·33 的 C——养老金减少与健康储蓄计划是<b>并排的两笔坏账</b>（都属于「风险转嫁」的表现），不是「后者补偿前者」。<b>并列段落先切块，再按块答题。</b>',
        '<b>把「假设的触发条件」读成「已发生的趋势」</b>：2007·T3·31 的 B——原文 <code>if the primary earner <b>got laid off</b></code> 只是假设情境（万一顶梁柱失业），不是说失业概率上升。<b>条件句里的内容是设想，不是事实。</b>',
        '<b>⭐做完的最后一个动作（30 秒，能救回一道题）</b>：把选中的那项<b>读出主语</b>——「我选的这句话，主语是谁？原文里这个主语发生的是<b>什么程度</b>的变化？」2007·T3·31 问完这两句，A 的两个毛病（主语错 + 程度超）会同时暴露。',
        '<b>2015·T4·36</b>：利润当唯一分选机制 → 正直崩塌 → 对资本主义与自由是最危险的祸害 → 伤害公司、让它迷失、干出窃听——她不安的是整条链的走向，36A consequences 一词盖住下游。',
        '<b>2017·T1·22D</b>：秘密测试 → 安检加强 → 长队；D <code>Frequent unexpected secret checks</code> 停在链条第一格，还把 a secret check 的一次升成频繁。题干问长队，只取直接原因（安检加强 ＋ 客流上升）。'],
 refs:[{p:'2007_T3_中产家庭的风险转嫁.html',q:'q31',label:'2007·T3·31'},{p:'2007_T3_中产家庭的风险转嫁.html',q:'q32',label:'2007·T3·32'},{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2022_T4_解雇保护悖论.html',q:'q39',label:'T4·39'},{p:'2007_T2_智力测试的边界.html',q:'q28',label:'2007·T2·28'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q40',label:'2008·T4·40（追根 vs 中间环）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q36',label:'2015·T4·36（沿因果链取后果）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q22',label:'2017·T1·22D（原因的原因 ＋ 一次变频繁）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'q24',label:'2018·T1·24（because 给问题 ＋ This would 给效果 ⟹ 问题倒过来就是目的）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q37',label:'2018·T4·37（问链尾 fails to modernize，答链头 interest groups）'}]},

{id:'R6', tier:'🟡', qt:'推断 / 结论题', title:'只推一步 + 防「词形陷阱」',
 trig:['infer / conclude / It can be learned','某机构会支持/反对什么','末段升华'],
 flow:'① 找原文<b>立场句</b>（一句话），<b>顺着立场只推一步</b>，绝不推两步；'
     +'② 升华题 ≈ 把引语<b>抽象一层</b>改写（具体影响 → 历史意义）。',
 tmpl:'<b>词形陷阱</b>：把原文词换个词性造错项——<code>education → educator</code>（T2·30 的 B）。<br>'
     +'<b>形近反义陷阱</b>：<code>over<u>rated</u> 高估</code> ≠ <code>over<u>looked</u> 忽视</code>，一字之差意思正相反（2007·T1·24 的 C）。'
     +'一次背全这池子：overrated 高估 / underrated 低估 / overlooked 忽视 / overstated 夸大 / underestimated 低估。',
 traps:['过度推断（推两步）：T2·30 的 C 从「建议读第二学位」推出「学位不再有吸引力」，推过头。',
        '机构立场题：先定该机构的原文立场，再推一步，不能凭常识脑补。',
        '读到原文里的 over-/under- 词，<b>当场在旁边写下中文</b>，回来做题就不会被形近项绕晕。',
        '<b>以偏概全</b>（过度推断的变体）：从<b>一个具体技巧点</b>跨到<b>对整类事物的判断</b>——2007·T2·29 的 C 由「知道何时该猜是 SAT 应试技巧之一」推成「测试包含大量猜测行为」。',
        '<b>「有缺陷」≠「该淘汰」</b>：同题 D「传统测试已过时」——原文只列局限，且前文明说 IQ 分数<b>仍是</b>定义性术语、SAT/GRE <b>现行在用</b>。两者之间隔着好几步，作者一步都没走。',
        '<b>部分否定别读成全盘否定</b>：<code>may not assess <u>all</u></code>、<code>do <u>not necessarily</u> predict</code> ＝「未必全部」，不是「完全不能」。not + all/both/every/always/necessarily 一律是部分否定。',
        '<b>2015·T3·32A／33A</b>：32A found 撞②❹ 下一句的 find（且 found 还能读成「建立」）；33A peers 撞①❶ peer-review——词形越熟，越要回原句核义项。',
        '<b>2015·T4·39C</b>：⑤❺ degraded to the margin 的 margin 被做成 marginalized，对象从一组道德词换成「生活方式」。',
        '<b>2016·T2·28</b>：C <code>Ukip may gain</code> 只推一步（sensing its chance ＋ struck terror into ⟹ 可能得利）；D 从 <code>are silent</code> 推到 <code>losing political influence</code> 要走两步，还得借文外知识。',
        '<b>2016·T3·34A</b>：⑤❶ 只说检察官「受 CSR 记录影响」，A 推成「CSR 记录被当作可靠证据」——而让步半句 <code>should only evaluate a case based on its merits</code> 恰恰暗示这种影响不该有，更谈不上可靠。',
        '<b>2017·T2·29D</b>：⑤ 只说天文学与夏威夷文化同根、都在追问「我们是谁」；D <code>will eventually soften Hawaiians’ hostility</code> 多推了一步，把作者的希望当成了段中事实（eventually 就是信号）。'],
 refs:[{p:'2022_T2_Z世代与学位.html',q:'q30',label:'T2·30'},{p:'2022_T4_解雇保护悖论.html',q:'q38',label:'T4·38'},{p:'2022_T1_塑料文物保护.html',q:'q25',label:'T1·25'},{p:'2007_T1_刻意练习造就高手.html',q:'q24',label:'2007·T1·24'},{p:'2007_T2_智力测试的边界.html',q:'q29',label:'2007·T2·29'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q30',label:'2012·T2·30C（推一步是「申请可能受影响」，推两步才是「撤回」）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q31',label:'2014·T3·31D（bank accounts → bankers、funded → investments 词形偷换）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q32',label:'2015·T3·32A（found ← 下一句 find）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q39',label:'2015·T4·39C（margin → marginalized lifestyle）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q28',label:'2016·T2·28（沉默 ≠ 失势）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q34',label:'2016·T3·34A（受影响 → 可靠证据）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q29',label:'2017·T2·29D（同根 ⟹ 敌意会缓和：多推一步）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q25',label:'2019·T1·25A（decision-making → Decisiveness：同根词形陷阱，快 ≠ 远）'}]},

{id:'R7', tier:'🟡', qt:'细节题（题干限定段落）', title:'题干限定第 N 段，别处的「对信息」也是错项',
 trig:['In Paragraph 5','According to Para X','题干明确点段号'],
 flow:'题干限定段落时，<b>只在该段找</b>；其他段落里即使有说得对的信息，放进选项也是<b>错的</b>——专为「不看限定」的人挖的坑。',
 tmpl:'答对此类题的动作：先在原文<b>圈出题干指定的段号</b>，答案定位不出这一段。',
 traps:['段落错位：T2·29 的 B 是⑥段的 up-skilling，题干却限定 Paragraph 5 → 错。',
        '2007·T2·27 限定 Paragraph 3，D 项却取材于末段的 important elements，且与第二段的<b>设问句</b>（「智力有多少<b>能够</b>被明确？」＝尚无定论）正相反。',
        '<b>2013·T2·27（指代题）</b>：题干写着 (Para. 3)，我却用⑤❹、⑦❷ 两处段外证据把 the industry 判成广告商（A），官方取段内的浏览器（D）——<b>限定段号在指代题里同样生效：段外证据只能排除，不能推翻段内唯一的实施者</b>（⟹ <a href="#R144">R144</a>）。',
        '<b>2016·T3·32A</b>：题干写明 According to Paragraph 2，A 的 malpractices 却取自①❸ <code>prosecuted for corruption</code>——出处越段，还把事后减罚换成了事前防范。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'col3',label:'2011·T3·33（限定段只限取材段，不限佐证段）'},{p:'2022_T2_Z世代与学位.html',q:'q29',label:'T2·29'},{p:'2007_T2_智力测试的边界.html',q:'q27',label:'2007·T2·27'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q21',label:'2011·T1·21B（题干写死 Paragraph 1，suspicion 取料越到了第二段）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q25',label:'2012·T1·25C（⑤❶ enormous influence 为真，却不在末段）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q27',label:'2013·T2·27（段号限定了指代的取证范围 · 争议题）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q23',label:'2015·T1·23C（simple lifestyle 来自⑤段，题干锁 Paragraph 4）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q32',label:'2016·T3·32A（出处在①段，不在②段）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q24',label:'2019·T1·24B（prevalence of short-term thinking 取自 ④❷，定位段是 ⑤⑥）'}]},

{id:'R8', tier:'🔴', qt:'通用 · 排除选项', title:'干扰项类型总纲（十三类）：认出类型就秒排',
 trig:['排除三个错误选项时','拿不准该选哪个'],
 flow:'考研阅读的错误项<b>几乎都能归进下面这几类</b>（前五类最常见，后面几类是本复盘中心逐篇补上的），认出是哪一类，排除就快且稳：',
 tmpl:'<table class="tk"><tr><th>类型</th><th>长相</th><th>例</th></tr>'
     +'<tr><td><b>无中生有</b></td><td>文中根本没提</td><td>T1·24A「谈钱」全文没有</td></tr>'
     +'<tr><td><b>偷换</b></td><td>换概念/主宾/时态/段落</td><td>T1·21B 偷换首句、T2·30C 换时态；<b>2008·T2 一篇之内「偷换主体」连发五次</b>（27A/28B/29B/29C/30A），句句有原文出处、错的只是「谁对谁做了什么」里的那个「谁」——见 <b>R21 主体校验</b></td></tr>'
     +'<tr><td><b>反向</b></td><td>把原文意思说反</td><td>T2·28D、T4 多处</td></tr>'
     +'<tr><td><b>张冠李戴</b></td><td>把 A 的事安到 B 头上；<b>对比型段落里最猖獗——把对照组的特征词贴到目标组头上</b></td><td>T1·23C 化学家的活安给博物馆；2007·T1·23D 把「刻意练习」的三要素安给「好记忆」；<b>2008·T1·23 的 B、D 两项</b>把描述<b>男性</b>压力的 <code>random</code>（偶发）、<code>violence</code> 直接搬去描述<b>女性</b>（原文女性栏是 <code>chronic or repeated</code>）</td></tr>'
     +'<tr><td><b>过度推断</b></td><td>顺着原文多推一步</td><td>T2·30C 推两步；2007·T2·29C 以偏概全</td></tr>'
     +'<tr><td><b>杂糅</b>（第六类·最难）</td><td>把<b>相邻两句</b>的成分拼成一句</td><td>2007·T2·29B 把④句的「IQ⇄领导力相关」和⑤句的「SAT」拼成「IQ 与 SAT 高度相关」</td></tr>'
     +'<tr><td><b>凭空比较</b></td><td>原文无比较对象，选项加比较级</td><td>2007·T2·27B 的 <b>More</b> versions——比谁多？原文没给；2007·T3·34A 的 <b>outweigh</b>——原文只说两种 fallout 一前一后，从没比过轻重（<b>「先后」≠「轻重」</b>）</td></tr>'
     +'<tr><td><b>程度升级</b>（第八类）</td><td>削弱→消失；有缺陷→已淘汰；变糟→毁灭；趋势→结局</td><td>2007·T3·31A 把「安全网被削弱」拉满成 <b>has disappeared</b>；2007·T3·35D 把「岌岌可危」说成 <b>in Ruins</b>（已成废墟）；2007·T2·29D 把「有局限」说成「过时」</td></tr>'
     +'<tr><td><b>偷换修饰对象</b>（第九类·极隐蔽）</td><td>形容词照抄原文，<b>被修饰的名词换掉</b></td><td>2007·T4·36B：<code>feeble <b>corporation governance</b></code>（乏力的公司治理）→ 说成「乏力的<b>老板与董事会关系</b>」</td></tr>'
     +'<tr><td><b>已知换未知</b></td><td>把原文<b>已经交代清楚</b>的东西，说成「有待查明/尚不知道」的东西</td><td>2007·T4·37B：被泄露的数据是什么，句首就写明了（<code>customer and employee data</code>）——已知的东西不会是「要去查明」的东西</td></tr>'
     +'<tr><td><b>泛化 / 扩大范围</b></td><td>一部具体的法 → 一整类立法；一个州 → 全世界；一个技巧 → 整类行为</td><td>2007·T4·40C：加州那部「数据被盗须告知」的法 → <b>security legislation</b>；美国首个州 → <b>takes the lead</b>（而欧洲早有罚则）。<b>2008·T3 一篇里考了两次</b>：33A 把 <code>NBA players</code>（几十人）放大成 <code>the nation</code>（三亿人）、34A 把 <code>military uniforms</code> 放大成 <code>the garment industry</code>。<b>2008·T4 又考了两次</b>：36C 把 <code>the lives of the founding generation</code>（开国一代人）放大成 <code>the U.S. history</code>（整部国史）、37D 把 <code>the nation’s early leaders</code> 放大成 <code>throughout the U.S. history</code>——<b>操作动作见 <a href="#R24">R24</a> 范围校验</b></td></tr>'
     +'<tr><td><b>偷换语义重心</b>（第十三类·2009·T1 立）</td><td>选项挑的词<b>确实在原文里</b>，但它是那句话的<b>被定义项</b>而非<b>特征</b>——挑的是不承重的那个词</td><td>2009·T1·21B <code>familiar</code>：<code>familiar routine</code> 是 habit 的<b>另一种说法</b>，本句语义重心压在 <code>mindlessly / unconscious</code> 上 ⟹ 正确项是 <b>mechanical</b>。<b>判据：把候选词从句子里删掉，若句子的核心断言不变，它就不承重</b></td></tr>'
     +'<tr><td><b>常识陷阱</b>（第十二类·2008·T4 立）</td><td>选项<b>在现实中完全正确</b>，但<b>文章从没说过</b>。你越有背景知识越容易中招</td><td>2008·T4·39B <code>Slaves in the old days did not have the right to vote</code>——历史上千真万确，<b>可原文只谈「分配国会席位时把奴隶算作五分之三个人」，一个字没提投票权</b>。<b>判据：<code>according to the text</code> 只问「文章说过没有」，不问「这句话对不对」；凡不读文章就知道它是真的选项，先按无中生有处理</b></td></tr><tr><td><b>客观⟹主观</b>（第十四类·2009·T2 立）</td><td>原文给的是<b>一个数字或一句事实</b>，选项给的是<b>一个带评价色彩的词</b></td><td>2009·T2·26 的 <b>C、D 双杀</b>：靠「6 万人购买」推出 <code>successful <b>promotion</b></code>／<code><b>popularity</b> with households</code>——<b>缺参照系、缺归因</b>（原文的 <code>since … without prescriptions</code> 已把原因归给政策变化）；28C 把 <code><b>reveal</b></code>（能揭示多少＝客观上限）换成 <code>fully <b>use</b></code>（没充分利用＝主观没做够）。<b>判据：问一句「从这条事实走到这个评价，中间还缺什么？」</b>——见 <a href="#R37">R37</a></td></tr><tr><td><b>原词拼接</b>（第十五类·2009·T2 立）</td><td>两个词<b>都在原文</b>，却<b>分属两个并列成分</b>，被焊成一个原文没有的短语</td><td>2009·T2·29D <code>lack of <b>patent evaluation</b></code>：原文是 <code>may be <b>patented</b> <u>and</u> not subject to … <b>evaluation</b></code>，<b>被 and 隔开的两个表语</b>；30C <code><b>Outside</b> the Lab</code> 里的 <code>outside</code> 在原文是 <code>outside <b>evaluation</b></code>（外界评估）。<b>判据：把短语当整体回搜，看两词之间有没有 and／逗号</b>——见 <a href="#R39">R39</a></td></tr></table>'
     +'<p style="margin-top:8px"><b>反向提醒</b>：干扰项爱<b>原词照抄</b>，正确项常是<b>归纳性改写</b>。'
     +'看到某项与原文字面高度重合，先回原句问一句「<b>这句在说谁</b>」——主语对不上，词再像也是错的。</p>',
 traps:['一个选项可能同时踩两类（偷换+张冠李戴），命中任一类即可排除。',
        '<b>四个选项全都「看着像对的」时，说明这一题考的不是词而是句子骨架</b>——立刻切到 <b>R21 的三问（谁 / 对谁 / 做了什么）</b>，逐项拆主谓宾，别再靠眼熟。',
        '「偷换主语」是最隐蔽的一种偷换：2007·T1·23 的 D 把原文 it（指 deliberate practice）悄悄换成题干问的 good memory。',
        '<b>2012·T4 补两例</b>：37B 把 mostly／a quarter 升格成 is required（一个比例数字就能判死必要条件）；38A illegally secured 凭空造了一根原文没有的「合法性」轴。',
        '<b>2013·T4·38 补「常识陷阱」的反向形态</b>：过去的常识陷阱都是「选项现实为真、原文没说」（防多选）；38 题是反过来的——<b>正确项 B「该法案站在州一边」放到史实里站不住</b>（1798 年《外国人与煽动叛乱法》是联邦法律，州权派反对它），<b>文内却只能推出它</b>（going back to 顺承）。<b>越懂背景越容易被 D undermined the states&#39; interests 拉走</b> ⟹ <a href="#R155">R155</a>。',
        '<b>2015·T1</b>：21A（卡洛斯当年确实很受爱戴）、24A（查尔斯现实里确有「干政」之议）——<b>时事类文章特有的常识陷阱：现实大体属实，原文一个字没写</b>。',
        '<b>2015·T2·30C</b>：法院两个月后 9∶0 判「查手机须先取得搜查令」，判决书里也驳了钱包类比——<b>但本文作者只说 should not swallow California’s argument whole</b>，没说加州违宪；文外的判决结果不能替原文说话。',
        '<b>2015·T3·33</b>：你可能知道后来 PNAS 等刊也设了统计审查，也可能知道《科学》本身是跟进者——两者都不能替帕尔米贾尼说话；33 题只认④❸ 的 may want to model their approach after Science。',
        '<b>2015·T4·37B／38</b>：现实中确有合法监听，但原文开头就定性为 illegal（37B 常识陷阱）；你也许读过报道、觉得布鲁克斯「肯定知情」——作者却用 may or may not 悬置，38 只能取 hardly convincing。',
        '<b>2016·T1·23A</b>：法国「禁极瘦模特」法案后来确被改写（BMI 硬指标改成医生判断），<b>知道这段后事的考生最容易选「法国措施已经失败」</b>——文章写于 2015 年 4 月、法案才初步批准，原文只说 rely too much on；常识陷阱的「时间版」：<b>文章发表之后的事，也算文外</b>。',
        '<b>2016·T4·36B</b>：the pressure from its investors——全文一次都没出现 investor，是从「成本高、收入降」联想出来的原因；<b>联想出来的原因不是原文给的原因</b>（无中生有）。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T2_Z世代与学位.html',q:'q28',label:'T2·28'},{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2007_T1_刻意练习造就高手.html',q:'q23',label:'2007·T1·23'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（常识陷阱）'},{p:'2009_T1_习惯与创新.html',q:'q21',label:'2009·T1·21（偷换语义重心）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q26',label:'2009·T2·26（客观⟹主观）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q29',label:'2009·T2·29（原词拼接）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q26',label:'2011·T2·26（行为→人品：三个干扰项全是人格标签）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q31',label:'2012·T3·31B（Opportunities for … abound 的「可能」升格成「特征」）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q37',label:'2012·T4·37（B 描述升格为必要条件）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q38',label:'2013·T4·38（常识陷阱反向形态：史实指向 D，文内只能推 B）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q38',label:'2014·T4·38D（funding for teachers ＋ study of foreign languages 两行拼一行，杂糅）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q24',label:'2015·T1·24A（由 non-political 反推「政治立场强硬」，现实传闻助攻）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q30',label:'2015·T2·30C（现实判决助攻「加州违宪」）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'bg',label:'2015·T3 · 00+ 背景（背景知识不替人物说话）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'bg',label:'2015·T4 · 00+ 背景（判决与常识都不替作者说话）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q23',label:'2016·T1·23A（文后的事也不替原文说话）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q36',label:'2016·T4·36B（投资人全文未提）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'q30',label:'2019·T2·30C（「这类报道一定有正反两派」是常识，考卷里只有一方）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q34',label:'2019·T3·34B（知道谷歌 2025 年删了承诺，会被推向 skepticism）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q39',label:'2019·T4·39B（后见之明：亚马逊后来替第三方卖家代收）'}]},

{id:'R9', tier:'🟢', qt:'通用 · 信号灯', title:'两国家/两方案 &amp; 让步从句 = 出题信号灯',
 trig:['末段出现两个国家/两个方案','even if / although','Nor + 倒装'],
 flow:'看到这些结构，基本能预判考点：<br>'
     +'· <b>两国家/两方案并存</b> → 必有一题考<b>张冠李戴</b>（把 A 方案的失败嫁接到 B 头上）；<br>'
     +'· <b>让步从句</b>（even if 父母老师没变）里的内容 → 常被拿来做<b>反向干扰项</b>；<br>'
     +'· <b>Nor 开头的倒装 / 强调句</b> → 出题热点，两个并列否定合并归纳就是答案。',
 tmpl:'',
 traps:['T4·40 的 D 把新西兰的失败嫁接给澳大利亚——两方案题的经典造坑法。',
        '<b>2013·T4 两处让步各喂一题</b>：⑥❷ <code>even if state laws complied with federal statutes to the letter</code> 一个让步从句喂出 39B（federal statutes 当白宫权力来源）与 39D（rarely goes against state laws）两个干扰项；⑦❶ <code>Some powers <b>do</b> belong exclusively to the federal government</code> 是强调助动词 do 造的让步，后面紧跟 But（⟹ <a href="#R154">R154</a>）。',
        '<b>2016·T1</b>：⑥❶ <code>In contrast to France’s actions</code> 一出，两方案信号灯亮——四个干扰项全造在两方案上：23A 把法国的「偏重」升成「失败」、23C 把自律方案的 peer pressure 反成「不再受压」、24D 把丹麦规定的方向反过来。<b>对照的轴只有一根（法律重罚 vs 行业自律），两国的目标是同一个</b>（⟹ R198）。',
        '<b>2016·T2·26</b>：①❸ <code>While polls show Britons rate … , this has limited political support</code>——While 让步从句里一张四项并列清单（乡村、王室、莎翁、NHS），重心在主句 ⟹ 26D；三个干扰项全在让步从句里。',
        '<b>2016·T3 三处让步各喂一题</b>：①❷ <code>even if you accept</code>（31A／C／D 的原料）· ⑤❶ <code>whereas … should only …, they do seem …</code>（重心在后 ⟹ 34B）· ⑥❷ <code>Nor does it reveal</code>（35D 的 banking on）。',
        '<b>2016·T4 两处让步各喂一题</b>：②❹ <code>though print ad sales still dwarf their online … counterparts</code>（让步从句里的比较 ⟹ 36A 的原料，重心在主句「收入仍在降」）· ③ <code>Overhead may be high …, but rushing … would be a mistake</code>（may be … but ⟹ 37D 取被让步的 overhead）。',
        '<b>2017·T3·④❷</b>：<code>Yes, there has been a budding economic recovery …, but in key indicators … major economies have continued to decline</code>——Yes 让给 GDP 线（复苏），but 后是福祉线（下滑）⟹ 35C High GDP <b>But</b> Inadequate Well-being 的 But。'],
 refs:[{p:'2022_T4_解雇保护悖论.html',q:'q40',label:'T4·40'},{p:'2022_T3_艺术与科学.html',q:'q33',label:'T3·33'},{p:'2022_T2_Z世代与学位.html',q:'q28',label:'T2·28'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q24',label:'2013·T1·24B（让步从句 Though several companies have made efforts… 被说成 ignores）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q39',label:'2013·T4·39（even if 让步从句喂出 B、D）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q23',label:'2016·T1·23（法国 vs 丹麦：四个干扰项全在两方案上）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q26',label:'2016·T2·26（While 让步：清单在从句，重心在主句）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'col5',label:'2016·T3 · 02+++++ 专栏（让步与 Nor 倒装）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q36',label:'2016·T4·36A／37D（让步从句里的事实被拎出来）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col4',label:'2017·T3 · 02++++ 专栏（GDP／福祉两根线）'}]},

{id:'R10', tier:'🔴', qt:'词义推理题', title:'词义题三步法：标点提示 → 同根复现 → 比强度',
 trig:['The word “X” (Line n, Para m) most probably means','the phrase … most likely refers to','四个选项都是近义词'],
 flow:'① <b>回原句看标点</b>——逗号 / 破折号 / 冒号后常是对生词的<b>解释或同位改写</b>（2007·T1·22：<code>in springtime, at the annual peak of soccer mania</code>，后半句解释前半句）；'
     +'② 找<b>同根或同义复现</b>——同一句里往往另有一个你认识的词在给它做注解（<code>soccer-<b>mad</b></code> ↔ <code>mania</code>）；'
     +'③ 四个近义词摆一起时，比的不是「像不像」，而是<b>感情强度与褒贬</b>。',
 tmpl:'<b>强度尺子</b>（词义题的核心工具）：<code>fun 乐趣 &lt; excitement 兴奋 &lt; craze/mania 狂热 &lt; hysteria 歇斯底里（病态贬义）</code>——'
     +'<b>太弱的和太重的同时排除</b>，只留强度与原文情感对得上的那个。',
 traps:['<b>别拆词根、别凭字面联想。</b>2010·T2·28 的 <code>about-face</code>（军事口令「向后转」，face ＝ 面向）被 D 项 <code>enhancement of <b>dignity</b></code> 用 <code>lose face</code>／<code>save face</code> 这条<u>真实存在</u>的搭配来钓——<b>联想是真的，所以更危险。破解只能靠上下文的结构信号。</b>',
        '<b>用字典义答题</b>：mania 的医学义是「躁狂症」，照搬就会选 hysteria；词义题考的永远是<b>语境义</b>。',
        '把生词当拦路虎：生词所在句往往<b>自带注解</b>（同位语/举例/对比），先读完整句再看选项。',
        '强度稀释项常成对出现（fun 与 excitement 是同一种错法），认出这一对可一次排两个。',
        '<b>2014·T1·22</b>（sign on）：三条线索同时锁死——<b>取舍结构</b> <code>looking for work, not looking to sign on</code>（对立面）＋ <b>同指</b> <code>Those first few days</code> ＝ 上一句的 <code>seven-day wait for the jobseeker&#39;s allowance</code> ＋ <b>下一句</b> <code>stay off benefits</code> 与 <code>get into work</code> 对举。<b>英式义「登记领救济」与美式义「签约受雇」正相反</b>——背景知识靠不住时，三步照样能做。',
        '<b>2016·T1·22（impinging on）</b>：超纲词，第三步「比方向」直接定案——主张句 <code>should not be defined by looks that end up ___ health</code> 要排斥的只能是坏东西；B heightening 方向反、A indicating 中性、C losing faith 主语对不上 looks。',
        '<b>2016·T3·33（more lenient）</b>：第三步用冒号——④❷ <code>accounted for the leniency: Companies that contributed more … did not receive lower fines</code>，冒号后的 lower fines 就是 leniency 的注解 ⟹ D less severe。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q33',label:'2011·T3·33C（campaign 被读成“竞赛”）'},{p:'2010_T2_商业方法专利的威胁.html',q:'q28',label:'2010·T2·28（词义题标本：找<b>对立结构</b>——because 引出解释 ＋ itself 强调主体同一 ＋ 一对反义动作 Curbs ↔ introduced，四项里只有「转变」装得下）'},
       {p:'2007_T1_刻意练习造就高手.html',q:'q22',label:'2007·T1·22'},
       {p:'2011_T2_高管裸辞潮.html',q:'q28',label:'2011·T2·28（超纲词 poach：同段同根词 head<u>hunt</u>ers 就是答案）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q26',label:'2012·T2·26（极性锁在同句 justified outrage ＋ 下一段 Instead 改写，见 R120）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q23',label:'2013·T1·23（认隐喻场：indictment／hijacked／victims，见 R141）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q22',label:'2014·T1·22（sign on：取舍 ＋ 同指 ＋ 下一句）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q32',label:'2015·T3·32（flagged up：流程定方向，构词 flag 验算）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q22',label:'2016·T1·22（should not 锁方向）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q33',label:'2016·T3·33（冒号注解 lower fines）'}]},

{id:'R11', tier:'🟡', qt:'谚语主旨题 / 标题题', title:'先自写一句话主旨，再拿「核心对立」卡谚语',
 trig:['Which of the following proverbs is closest to…','The best title for the text is','the message the text tries to convey'],
 flow:'① <b>别急着看选项</b>——谚语都写得漂亮，先看谁必被带跑。先自己写出一句话主旨（2007·T1：出色表现靠后天刻意练习，不靠天赋）；'
     +'② 找出主旨里的<b>核心对立</b>（练习 vs 天赋）；'
     +'③ 拿这组对立去卡每个谚语：<b>说反的先排</b> → <b>与核心对立无关的再排</b> → 剩下的必须<b>两个关键概念都对得上</b>。',
 tmpl:'关键词咬合法：<code>Practice</code> ↔ deliberate practice、<code>perfect</code> ↔ expert performers/made —— 两个词都咬住才算命中。'
     +'主旨句只在<b>首尾段</b>找，绝不在中间的实验细节里找。<br>'
     +'<b>⭐标题题四查（四项主语相同、只差后半截时尤其好用）：</b><br>'
     +'· <b>① 查对象</b>：讨论的主角对不对？<b>正确标题必须含全文高频关键词</b>（2008·T1：women + stress，<b>A、C 两项都缺 women</b> ✗）<br>'
     +'· <b>② 查特点/关系</b>：它处在什么状态、跟谁发生关系？（2007·T3·35 的 A <code>on the Alert</code> 把<b>被动挨打</b>写成<b>主动戒备</b> ✗；C <code>in Conflict</code> 把<b>并列</b>——「老家庭惨，年轻家庭也 <code>not any better</code>」——写成<b>对立</b> ✗）<br>'
     +'· <b>③ 查程度</b>：到哪一步了？（同题 D <code>in Ruins</code> 把「岌岌可危」说成「已成废墟」✗；正解 B <code>on the Cliff</code>＝<b>危险已到眼前但尚未坠落</b>，正对原文 <code><b>already</b> overburdened shoulders</code> 与 <code>may not be far behind</code> 的未然语气）<br>'
     +'· <b>④ 查立场</b>（<b>2008·T1 新增，因为在这一查上栽了</b>）：作者是<b>中立论述</b>还是<b>有偏向</b>？<b>中性标题配偏向文章 ＝ 错。</b>'
     +'三种立场标记去原文找：<b>反语词</b>（褒义词配贬义语境，如 <code>way ahead</code> + <code>undesirable</code>）｜<b>情感副词</b>（删了不影响语法的插入词，如 <code>unfortunately</code>）｜<b>末段建议给了谁</b>（只给一方提建议＝立场在这一方）。'
     +'2008·T1·25：正解 <code>Gender <b>Inequality</b></code>（带倾向）胜过 <code>Gender <b>Difference</b></code>（中性）✅<br>'
     +'· <b>覆盖检查（配合 ②）</b>：把候选标题<b>挨段念一遍</b>，问「这段是在讲它吗」。2008·T1 的 B <code>Responses to Stress</code> 只罩得住①②段（③④⑤段谈的是<b>压力本身</b>的量与质，不是「对压力的反应」）⟹ 出局。<b>只需 30 秒，能拦下大部分「首段陷阱」型错误。</b><br>'
     +'四关全过的才是答案。<b>写作里给段落起小标题同理：对象 + 关系 + 程度 + 立场四者都要对准。</b>',
 traps:['<b>「沾边但没打到靶心」最难排</b>：2007·T1·25 的 B「种瓜得瓜」重心是「付出与回报的对应」，完全没触碰「天赋」这一边 → 错。',
        '反向谚语反而好排：同题 D「有其父必有其子」讲遗传，与 made, not born 正相反。',
        '把某段的细节当主旨：谚语题问的是全文 message，不是某个实验说明了什么。',
        '<b>把趋势说成结局</b>是标题题最常见的错法（2007·T3·35D）。判断依据看原文的<b>未然语气</b>：<code>may / already but not yet / on the brink</code> 都表示「还没到最后一步」。',
        '<b>警告是说给谁听的，决定标题的主语状态</b>：2007·T3 末句「政治后果不远了」是<b>写给政策制定者的警告</b>，全文把中产写成<b>被动承受方</b>（首句用被动语态 <code>has been transformed by</code>），所以「中产自己保持警惕」的 A 项从一开始就站错了位。',
        '<b>「文章通篇在做 A 与 B 的对比」≠「文章的主题是 A 与 B 的差异」</b>（<b>2008·T1·25 我就栽在这上面</b>）。对比可以只是<b>论证手段</b>：2008·T1 全篇用「与男性相比」来<b>衬托女性之惨</b>，男性始终只是参照系（雄鼠、战场），从来不是被讨论的对象。'
        +'<b>判据：把 B 方从文章里删掉，文章还成立吗？</b>删掉男性后「女性压力大、成因有二、应当疏解」照样成立 ⟹ <b>男性只是参照系 ⟹ 标题的主语只能是女性</b>，含 <code>Gender Difference</code> 的中性标题出局。',
        '<b>别用自己对某个词的刻板印象排选项</b>：我排 <code>Gender Inequality</code> 的理由是「这是个社会学词，本文讲心理与生理，不搭」——<b>这是拿印象做题，不是回原文验证</b>。正确顺序永远是：<b>先从原文读出作者立场，再看哪个标题装得下这个立场。</b>',
        '<b>写主旨句时要带感情色彩</b>：写成「本文比较了男女面对压力的差异」（中立）必然把你导向中性标题；写成「作者认为女性在压力上吃了大亏、这不公平、应当被看见」（有立场），才选得对。'],
 refs:[{p:'2007_T3_中产家庭的风险转嫁.html',q:'q35',label:'2007·T3·35'},{p:'2007_T1_刻意练习造就高手.html',q:'q25',label:'2007·T1·25'},{p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（第四查·立场）'},{p:'2022_T1_塑料文物保护.html',q:'q25',label:'T1·25'}]},

{id:'R12', tier:'🔴', qt:'作者态度题（专项）', title:'态度词强度尺：先定方向，再定强度',
 trig:['What is the author’s attitude towards X?','The author’s tone can be described as','四个选项都是单个形容词'],
 flow:'<b>四步定态度：</b><br>'
     +'① <b>只看作者发声句</b>——无引号、无人名的句子才是作者本人（引述倒装 <code>, argues X.</code> 一出现，那句就归 X 不归作者）；<br>'
     +'② <b>数「评述性语句」</b>——转折词 / 否定表达 / 情态保留（<code>may not</code>、<code>seems to</code>、<code>not obvious</code>、<code>a bit confusing</code>、<code>fail to</code>）；<br>'
     +'③ 给态度定 <b>方向（褒 / 中 / 贬）＋ 强度（轻 / 重）</b>，两者都对上才选；<br>'
     +'④ <b>用其他题的答案反验</b>——2007·T2 的 29 题已选「分数不可靠」，作者绝无可能是 supportive。',
 tmpl:'<b>⭐强度尺（背下来，年年用）：</b><br>'
     +'<code>supportive / positive 支持</code>（要有<b>明确肯定句</b>）　←　<code>objective / impartial / neutral 中立</code>（要<b>两边都说</b>）　→　'
     +'<code>cautious 谨慎</code>　→　<code>skeptical / doubtful 怀疑</code>（<b>软性否定 + 讲证据</b>）　→　<code>critical 批评</code>（直接指责、要求改变）　→　<code>biased / prejudiced 偏见</code>。<br>'
     +'<b>两条铁律：</b>(1) <b>biased / indifferent / subjective 几乎从不是答案</b>——考研选文都出自正规刊物，作者再不满也是<b>讲证据的怀疑</b>，不是撒泼；'
     +'「漠不关心」更是<b>逻辑自否</b>（都写了这篇文章还能不关心？）。(2) <b>impartial 只在作者真的两边都说了时才选</b>。',
 traps:['<b>把「现状陈述段」当「作者立场段」</b>（第一大坑）：2007·T2 第三段陈述「IQ 分数仍是衡量标准」，那是第四段要打的<b>靶子</b>；30 题 A 项就是给读错这段的人准备的。注意 <code>still <b>seems to be</b></code> 本身就是保留语气。',
        '<b>「先扬后抑」不是中立</b>：<code>tests <u>best assess</u> analytical skills <b>but</b> <u>fail to measure</u> creativity</code>——前半句只是为托出后半句的落差，<b>转折后才是重点</b>。拿它当「有褒有贬」就会误选 impartial。',
        '<b>怀疑 ≠ 偏见</b>：skeptical 是「我有理由不信」（引研究、引专家、摆数据），biased 是「我不讲理由就是不信」。',
        '⭐ <b>2010·T4·40 给强度尺补了一条新排序：<u>作者既赞又责时，同情（sympathy）&gt; 满意（satisfaction）</u></b>——<b>「同情」只承诺情感，不承诺评价，可以与「批评其某一具体行为」并存；「满意」是对当下行为的正面评价，与批评句直接打架。</b><b>本篇⑥❹先夸 <code>The FASB and IASB <b>have been exactly that</b></code>（过去独立而好斗），⑥❺立刻转折 <code><b>But</b> by giving in to critics <b>now</b>…</code> ⟹ 只肯定过去、批评现在 ⟹ 选同情不选满意。</b>（⟹ 新卡 <a href="#R72">R72</a>）',
        '<b>2012·T4·40</b>：Donahue 的 is bad for 与作者的 may be a much bigger problem 都是明确而克制的负面 ⟹ disapproval 这一档；appreciation 取让步前半、tolerance 取折中、indifference 零词源。',
        '<b>2016·T2·29A</b>：<code>a strong prejudice</code>——原文⑤❺ 的 biased 修饰 market，作者对奥斯本的批评是「顺从游说」；强度尺上 prejudiced 本就几乎不是答案，再加 strong 更过头（⟹ R201）。',
        '<b>2016·T3·31</b>：作者没说弗里德曼错（critical），只是让步 ＋ 摆出反证 ⟹ skepticism 这一档；uncertainty 比它低一档（没方向），tolerance 的底色是接受，approval 方向反。',
        '<b>2017·T2·30</b>：方向褒（①❹ promises to revolutionize · ⑤❸ ignore the reality · ⑥❷ 选址已纠错）＋ 强度满（⑥❹ There is no reason why … cannot）⟹ full approval；slight hesitancy、passive acceptance 都在强度尺上低了一档以上（⟹ <a href="#R221">R221</a>）。',
        '<b>2017·T3·35B</b>：作者只说 GDP <code>no longer enough</code>（⑥❶）、反对的是 <code>the sole measure</code>（⑤）——强度是「不够」；a Terminator of GDP（终结者）拔高了两档（⟹ <a href="#R223">R223</a>）。',
        '<b>2017·T4·40B</b>：作者对裁决三次加分（⑤❶ legally sound · ⑥❶ reinforces the need · ⑧ a step forward）——方向是褒、档位是「支持」；tolerant（容忍）降了一档（⟹ <a href="#R227">R227</a>）。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q33',label:'2011·T3·33A/33D（constant 与 deserve all 写死了）'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30'},{p:'2022_T1_塑料文物保护.html',q:'q24',label:'T1·24'},{p:'2022_T3_艺术与科学.html',q:'q35',label:'T3·35'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q40',label:'2010·T4·40（同情 &gt; 满意的完整推导）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q25',label:'2011·T1·25（doubtful 的三段证据链 ＋ 态度词能不能选清单）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q40',label:'2012·T4·40（disapproval 的强度档）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q23',label:'2013·T1·23（accusation 与 criticism 同档；indifference、tolerance 方向与强度都不对）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q36',label:'2014·T4·36（Critical vs Contemptuous：表扬给了具体理由 ⟹ 负向取温和档）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q27',label:'2015·T2·27（recklessly modest ＋ lame ＋ not … whole ⟹ disapproval 的强度）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q34',label:'2015·T3·34（some merit ＋ a weakness ⟹ 温和正面带保留）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q38',label:'2015·T4·38（负面但停在「不信」：C 不是 A／D）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q29',label:'2016·T2·29A（biased market → strong prejudice）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q31',label:'2016·T3·31（skepticism 定档）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q30',label:'2017·T2·30（双重否定收口 ＝ 满格）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'q35',label:'2017·T3·35B（不够 ≠ 终结）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q40',label:'2017·T4·40B（三次夸 ≠ 容忍）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q35',label:'2018·T3·35（两头验：潜力挡蔑视、担忧挡赞赏 ⟹ cautious）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q34',label:'2019·T3·34（方向取主句 represents one starting point，强度被 vague 压到中档 ⟹ affirmation）'}]},

{id:'R13', tier:'🟡', qt:'推理引申题 / 通用 · 找考点', title:'括号与同位语藏考点，缓和语气常是答案',
 trig:['原文出现 ( … ) / 破折号 / 同位语','推理题四选项都不好排','infer / can be learned'],
 flow:'<b>① 读的时候：给「顺带信息」画圈。</b>括号、破折号、同位语里的内容<b>看着像补充，其实是命题人埋点的首选</b>——因为它最容易被一扫而过。<br>'
     +'2007·T2·27 的正确答案 C 就藏在一个括号里：两大量表 <code>(both come in adult and children’s version)</code> → 推一步 → 成人与儿童的<b>测试内容和形式可能不同</b>。<br>'
     +'<b>② 做题的时候：比选项的「语气强度」。</b>',
 tmpl:'<b>语气强度筛选法（备选重点，不是答题依据）：</b>推理题四项摆一起时——<br>'
     +'· <b>带缓和词的往往是正确项</b>：<code>may / might / tend to / some / can be</code>（2007·T2·27 的 C 用 <b>may be different</b>）；<br>'
     +'· <b>语气绝对的往往是错项</b>：<code>no longer / never / have defined / all / More</code>（同题 A「不再使用」、D「已经界定」、B「更多版本」全军覆没）。<br>'
     +'<b>⚠️ 这条只用来排序检查顺序、时间紧时押注，必须回原文核实过才能定答案。</b>',
 traps:['<b>凭空添加比较级</b>：原文只说「随处可见」，选项加个 <b>More</b>（更多）——比谁多？原文一个比较对象都没给。同类还有 better / faster / the most。',
        '<b>「使用频率下降」≠「地位被废」</b>：<code>tests are not given as often as they used to be</code> 只是让步，主句 <code>still seems to be the defining term</code> 才是要点。<b>even though 让步句里的内容常被拿去造反向干扰项。</b>',
        '<b>括号里的信息也受题干段落限定约束</b>：先确认这个括号在不在题干指定的那一段（配合 R7 用）。',
        '⭐ <b>「纠正型句式」是同族的另一个埋点，答案永远在后半句</b>：<code>It’s <b>not necessarily that</b> A. It’s <b>just that</b> B.</code>——<b>先否掉人们通常以为的解释 A，再把真因指向 B</b>。'
        +'2008·T1·22：被否掉的 A＝「女性应对能力差」（<b>B 项 limited capacity 正是它，还照抄了原词</b>），真因 B＝「要应对的事太多」⟹ 正解 D。'
        +'<b>同族一起记</b>：<code>It’s not that A, it’s that B</code>／<code>The problem is not A but B</code>／<code>not so much A as B</code>／<code>less a matter of A than of B</code>。'
        +'<b>见到就画一个箭头指向后半句——前半句是命题人给干扰项预留的仓库。</b>',
        '<b>插入语不只藏信息，也藏态度</b>：删掉之后<b>语法毫无损失</b>的那个词（2008·T1 的 <code>by, <b>unfortunately</b>, parents…</code>）是作者的立场，不是信息——判标题/态度时要用（见 R18）。'],
 refs:[{p:'2007_T2_智力测试的边界.html',q:'q27',label:'2007·T2·27'},{p:'2008_T1_女性与压力.html',q:'q22',label:'2008·T1·22（纠正型句式）'},{p:'2022_T2_Z世代与学位.html',q:'q29',label:'T2·29'}]},

{id:'R14', tier:'🔴', qt:'细节题 / 因果题 · 近义陷阱', title:'支撑者 ≠ 被支撑者：见 support 就标「谁托着谁」',
 trig:['A support / complement / reinforce / bolster / add to B','原文出现两个意思相近的比喻词','选项说某样东西「消失了 / 被剥夺了」'],
 flow:'<b>① 读到 <code>A support B</code> 型句子，立刻在旁边写一句：「A 不等于 B，A 只是给 B 加力的。」</b>'
     +'命题人最爱在这种「一个东西托着另一个东西」的关系上做文章。<br>'
     +'<b>② 顺着 by / from / of 找「归属」。</b>后置定语里的这几个介词专门交代<b>某样东西是谁提供的</b>，是识破张冠李戴的钥匙。<br>'
     +'<b>③ 出事的到底是 A 还是 B？受到的是「消失」还是「削弱」？</b>两问答完，错项自己掉出来。',
 tmpl:'<b>⭐标本题（Claude 盲做在此翻车，务必吃透）2007·T3·31</b>：<br>'
     +'原文 <code>This “added-worker effect” could <b>support</b> the safety net <b>offered by</b> unemployment insurance or disability insurance</code>。<br>'
     +'· <b>parachute / back-up earner</b>（后备挣钱人，通常是妈妈）＝ 双薪化之后<b>消失了</b>的那样东西；<br>'
     +'· <b>safety net</b>（安全网）＝ <b>失业/伤残保险</b>提供的，它<b>还在</b>，只是失去了前者的加持而<b>被削弱</b>。<br>'
     +'A 项 <code>the safety net they used to enjoy <b>has disappeared</b></code> 一口气踩了两个雷：'
     +'<b>(1) 张冠李戴</b>（把支撑者当成被支撑者）＋ <b>(2) 程度升级</b>（削弱→消失）。'
     +'D 项 <code>deprived of insurance</code> 同源而更露骨——保险从头到尾好端端地在那儿。<br>'
     +'正解 C <code>more vulnerable to changes in family economics</code> 是②段③—⑥句<b>整条因果链的概括</b>：'
     +'预算花到顶 → 没了后备 → 一出事再也补不上。<b>因果题的正确项常常「看起来很空」，因为它概括的是一整串句子。</b>',
 traps:['<b>比喻词与制度词长得像，但绝不是一回事</b>：parachute（家里的后备劳动力）vs. safety net（保险制度）。原文用破折号同位语给比喻配了直义（<code>—a back-up earner (usually Mom)</code>），<b>比喻的直义就在破折号后面等着你</b>。',
        '<b>这三个词都是「加力」不是「等于」</b>：support（支撑）/ complement（补充完善）/ supplement（额外补充）/ reinforce（强化）/ bolster（支持加固）。',
        '<b>配套排查「程度」</b>：原文是「少了一股力」，选项写成「整个塌了」——这就是程度升级（见 R8 第八类）。'],
 refs:[{p:'2007_T3_中产家庭的风险转嫁.html',q:'q31',label:'2007·T3·31'},{p:'2007_T3_中产家庭的风险转嫁.html',q:'s3',label:'2007·T3 长难句 s3'}]},

{id:'R15', tier:'🟡', qt:'段落推理题（题干只给段号）', title:'选项定位法：拿选项的关键词回文，一一比对',
 trig:['It can be inferred from Paragraph N that','题干只给段号、不给任何关键词','该段有四五句话，正着读读不出结论'],
 flow:'<b>正着读要读完整段再自己归纳，慢且容易漏。改成反着走：</b><br>'
     +'<b>① 圈出四个选项各自的「独特名词」</b>——命题人给的四个选项，本身就是<b>四个定位坐标</b>；<br>'
     +'<b>② 拿这些词回段里找对应句</b>（通常一项对一句，分布得很整齐）；<br>'
     +'<b>③ 每处只比三件事：方向对不对、语气合不合、范围有没有被放大</b>，错一项即排；<br>'
     +'<b>④ 若两项都像，问一句：哪一项是「整段主线」，哪一项只是「某句话的字面延伸」——段落推理题考的是段落方向，选主线那个。</b>',
 tmpl:'<b>⭐标本题 2007·T4·40（Claude 盲做时在 C/D 之间真犹豫过）</b>：题干只说 Paragraph 5，全段五句都在范围内。四项一一回文：<br>'
     +'<table class="tk"><tr><th>选项</th><th>定位</th><th>原文怎么说</th><th>判</th></tr>'
     +'<tr><td>A data leakage is more severe in <b>Europe</b></td><td>①句括号</td><td><code>(in America, <b>but not Europe</b>)</code>：欧洲<b>不缺</b>罚则</td><td>✗ 正相反</td></tr>'
     +'<tr><td>B <b>FTC</b>\'s decision is essential</td><td>④句末</td><td>那个决定虽 hugely important，却被窃案 <code><b>overshadowed</b></code>（盖过风头）</td><td>✗ 语气反（作者在说它作用有限）</td></tr>'
     +'<tr><td>C <b>California</b> takes the lead in security legislation</td><td>②句</td><td>只能推出「加州是<b>美国首个</b>就<b>数据被盗须告知</b>立法的州」</td><td>✗ 连泛化两次</td></tr>'
     +'<tr><td>D <b>legal penalty</b> is a major solution</td><td>①句原词复现</td><td>①②③句共同指向「法律推着企业往前走」</td><td>✓</td></tr></table>'
     +'<p style="margin-top:8px"><b>D 为什么对</b>：<code>缺罚则 → 助长了企业不上心</code>（①句 encouraged）＋<code>加州立了法 → 情况开始变</code>（②句）＋<code>一堆法案在走 → 还会更快变</code>（③句），'
     +'<b>反过来推一步就是「法律惩处是解决泄露的主要办法之一」</b>。注意 D 用 <b>a major solution</b>（之一）而非 the only，语气与原文的 may 对齐（配合 R6 用）。</p>',
 traps:['<b>⭐从「小」偷换到「大」（本卡第一大坑）</b>：一部具体的法 → 一整类立法领域；美国首个州 → 全世界领先。'
        +'<b>看到 the lead / the first / the most / all / always / never 这类唯一性、全体性词汇，立刻回原文数范围。</b>同类标本：2007·T2·29 的 C（一个应试技巧 → 整个测试充满猜测）。',
        '<b>「有原话支撑」不等于「是答案」</b>：C 有一句原文可指，D 一句都没有——但段落推理题问的是<b>整段让你推出什么</b>。<b>只有某句话的延伸 vs. 整段的主线，选主线。</b>',
        '<b>动词的褒贬也要比</b>：overshadowed（被盖过风头）＝作者在给这个决定打折，选项却说它 essential（至关重要）。<b>一个动词就能给整句定褒贬，别只翻字面。</b>',
        '<b>括号里的信息同样是判据</b>：40 题 A 的生死全在①句那个 <code>(in America, but not Europe)</code>（配合 R13 用）。'],
 refs:[{p:'2007_T4_数据泄密的公司.html',q:'q40',label:'2007·T4·40'},{p:'2007_T2_智力测试的边界.html',q:'q29',label:'2007·T2·29'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q38',label:'2014·T4·38（题干只给段号：American history／subjects／technologies／funding 分头回文）'}]},

{id:'R16', tier:'🔴', qt:'写作目的题（引言 / 概念 / 例子）', title:'配角只负责引出主角：定位句往外扩一层找意群',
 trig:['The statement “…” is used to introduce ______','In bringing up the concept of X the author is making the point that','X is mentioned to / The author quotes Y in order to','题干问某句话、某概念、某例子的「作用」'],
 flow:'<b>① 先认出这是「问作用」不是「问意思」</b>：<code>is used to introduce / is making the point that / is mentioned to</code>＝问<b>作用</b>；<code>most probably means</code>＝问<b>意思</b>（那是 R10）。<br>'
     +'<b>② 定位到「那个东西」的那句话，然后<u>往外扩一层</u></b>，扩的方向靠连接词指路：<br>'
     +'　· <b>冒号 / 破折号</b> → 答案常在<b>紧接其后</b>；<br>'
     +'　· <b>Indeed / In fact / Similarly / Moreover</b> → 与<b>前文</b>同向递进，把前一两句拉进来；<br>'
     +'　· <b>he says / argues X</b>（引述倒装）→ 相邻几句是<b>同一个人的话</b>，一并读；<br>'
     +'　· <b>just as A…, B…</b>（类比）→ <b>答案一定在 B 侧</b>，A 只是参照物。<br>'
     +'<b>③ 答案 = 这个意群的主旨，一律往上抽一层。</b><br>'
     +'<b>⚠️⚠️ 但「往外扩一层」的<u>一层</u>是有边界的（2008·T4·36 的翻车教训）：扩到<u>第一个能给这个事例定性的句子</u>为止，遇到 <code>But / However / Yet</code> 就停——那是「上一件事说完了、换话题」的标志。</b>'
     +'<b>把「扩一层」做成「扩到全文主旨」，必然选出一个「大而正确」的选项，那往往正是命题人准备的那一个。</b><br>'
     +'<b>⟹ 首段是纯事例时，先用 <a href="#R27">R27</a> 判引入方向（反向引入 ⟹ 目的落在事例主角本身；正向引入 ⟹ 落在下文大主题），再谈扩几层。</b>',
 tmpl:'<b>⭐两个标本都在 2007·T4（一篇里连出两道，说明命题人吃准了这个考法）</b>：<br>'
     +'· <b>36 题 · 引言/谚语</b>：<code>It never rains but it pours</code> 之后<b>冒号点名 <code>data insecurity</code></b>，下一句主语又是 information protection → 答案 D <b>the severity of data leakage</b>。'
     +'<b>两条独立通道任一够用</b>：①抓谚语紧接之后的实义信息；②抓全文高频词（data insecurity / information protection / data leakage / data security 反复出现＝主题）。<br>'
     +'· <b>38 题 · 概念</b>：定位句 <code>perhaps it is time for <b>GASP</b></code> 本身<b>只是个提议、说不出观点</b>；靠 <code><b>Indeed</b></code> 往前接①②句（数据是资产、要像别的资产一样看守），靠句末 <code>he says</code> 往后接④句（<code>a management issue, not a technical one</code>）→ '
     +'整个意群只在讲<b>「数据保护应受到足够重视」</b>＝答案 B <b>information protection should be given due attention</b>。<br>'
     +'<p style="margin-top:8px">📌 <b>本卡与 R3（例证题铁律）同源</b>：<b>例子、谚语、概念、数据、比喻，全都是配角</b>，存在的唯一理由是引出或支撑某个论点。'
     +'<b>凡选项还停在配角本身（谚语说了啥、概念叫什么、例子多有趣），一律排除。</b></p>',
 traps:['<b>停在配角身上</b>：2007·T4·36 的 C 拿 <code>threatens</code>+<code>nasty headlines</code> 拼出「新闻报道的威胁」——负面头条只是「严重」的<b>后果/温度计</b>，不是被引出的<b>话题</b>。<b>后果 ≠ 来源。</b>',
        '<b>偷换修饰对象（最难察觉）</b>：2007·T4·36 的 B——原文 <code>feeble <b>corporation governance</b></code>（乏力的<b>公司治理</b>），选项挪成「乏力的<b>老板与董事会关系</b>」。<b>形容词照抄、被修饰的名词换掉。</b>而且这件事在原文里属于<b>已经解决掉的旧麻烦</b>，本就不是要引出的新问题。',
        '<b>抓类比的错一侧</b>：2007·T4·38 的 C——<code>just as there is GAAP（会计准则）, perhaps it is time for GASP（安全准则）</code>，答案在 B 侧（安全），C 却说「提高<b>财会</b>安全水平」。<b>类比句里的 A 只是借来铺路的桥。</b>',
        '<b>把状语/附带成分当主张</b>：2007·T4·38 的 A（<code>on behalf of shareholders</code> 只是交代「替谁负责」的状语）、D（把「保护客户数据的<b>能力</b>是<b>公司市值</b>的关键」拧成「<b>客户数据的市场价值</b>应受重视」）。<b>句子成分的地位不能换。</b>',
        '<b>只读定位句就选，必被骗</b>：命题人挑来考「写作目的」的句子，<b>本身往往看不出观点</b>——观点在它的邻居那儿。',
        '<b>2010·T3·31 又是一次标本</b>：作者引《引爆点》立靶子（①❶），<b>目的却写在下一句 <code>The idea is intuitively compelling, <u>but</u> it doesn\'t explain how ideas actually spread.</code> 里</b>——<b>31B <code>discuss influentials\' function in <u>spreading ideas</u></code> 与 but 之后那半句逐词对应。</b>⚠️ <b>31A 与 31D 都只覆盖了被引的那一句本身</b>（A 把 <code>are driven by</code> 读成「后果」，D 拿定语从句里的三个形容词当用意）⟹ <b>凡评价句里有 but / however / yet，答案必与转折<u>之后</u>那半句同向。</b>',
        '<b>2012·T4·39</b>：威州例子（⑥❷）的下一句是 But many within the public sector suffer under the current system, too——扩一层只扩到上一句 politicians have begun to clamp down；39A 的 current system 就是越过 But 取的料。'],
 refs:[{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36'},{p:'2007_T4_数据泄密的公司.html',q:'q38',label:'2007·T4·38'},{p:'2007_T1_刻意练习造就高手.html',q:'q21',label:'2007·T1·21'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（扩过了头）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'q31',label:'2010·T3·31（引用开篇：目的在 but 之后）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'col4',label:'2012·T4 · 02++++ 专栏（夹心例子）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q31',label:'2019·T3·31（周年引子：foreshadow 是桥，下文 ethical 7 次、AI 10 次）'}]},

{id:'R17', tier:'🔴', qt:'新题型 · 段落-标题匹配', title:'先自写段落主旨再配标题：复现词最猛的那项，通常是陷阱',
 trig:['Choose a heading from the list A–G that best fits the meaning of each numbered part','七个选项全是短标题（祈使句 / 名词短语）','正文段落被编号 41–45，首末段不编号'],
 flow:'<b>① 先数框位。</b>标题框排在<b>段落之前</b>（2007）还是之后？首段末段不编号 —— <b>错位一格全盘皆输，动笔前数一遍。</b><br>'
     +'<b>② 看七个标题的「句式共性」，反推每段写什么。</b>2007 七项全是「动词+宾语」祈使句（Set / Build / Place / Talk / Help / Help / Build），主语默认是家长 ⇒ <b>每段＝家长该做的一件事</b>；'
     +'再对上首段那句 <code>Here are a few <b>measures</b> that parents can take</code>，结构就锁死了。<br>'
     +'<b>③ 给每个标题划定位关键词 + 预测段落内容</b>（Good Example / Work Skills / Time Limits+Leisure / Future+Regular / Coping Strategies / Who They Are / Sense of Responsibility）。<br>'
     +'<b>④ ⭐逐段先自己写一句中文主旨，写完再看选项。</b>这一步不能省 —— 先看选项再读段，眼睛只会去找复现词，正中下怀。<br>'
     +'<b>⑤ 用「标题要罩得住整段」验证</b>：只罩首句、或只罩中间某句的，一律是陷阱。<br>'
     +'<b>⑥ 五段定完，回头把两个没用上的标题挨段试一遍</b>，确认无处安放才收工。',
 tmpl:'<b>⭐标本 2007 新题型（Claude 盲做 5/5）——把答案分布统计一下，命题人的心思就露出来了：</b><br>'
     +'<table class="tk"><tr><th>题</th><th>答案</th><th>原文有没有标题的原词</th><th>靠什么判</th></tr>'
     +'<tr><td>41</td><td>F Figure Out Who They Are</td><td><b>零原词</b></td><td>strengths and weaknesses + interests ＝ 自我画像</td></tr>'
     +'<tr><td>42</td><td>D Talk About the Future on a Regular Basis</td><td>regular / future 原词复现</td><td>Talk·Future·Regular <b>三词全有实锤</b></td></tr>'
     +'<tr><td>43</td><td>B Build Your Kids\' Work Skills</td><td>how to <b>work</b> / organizational <b>skills</b></td><td><b>首句＋末句</b>把 work 和 skills 拼齐</td></tr>'
     +'<tr><td>44</td><td>C Place Time Limits on Leisure Activities</td><td><b>零原词</b></td><td>三件娱乐上位概括＋hours of / long stretches <b>反向引申出「限时」</b></td></tr>'
     +'<tr><td>45</td><td>E Help Kids Develop Coping Strategies</td><td><b>零原词</b></td><td>deal with / solve / resolve 概括为 cope</td></tr>'
     +'<tr><td>多余</td><td><b>A</b> Set a Good Example</td><td>role models（近义呼应）</td><td>—— 反而<b>是错的</b></td></tr>'
     +'<tr><td>多余</td><td><b>G</b> Sense of Responsibility</td><td>responsible / responsibilities <b>连续复现两次</b></td><td>—— 反而<b>是错的</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>结论一句话：正确的 5 项里有 3 项在原文一个原词都没有，错误的 2 项反而都有词面呼应。</b>'
     +'标题匹配考的是<b>「你会不会概括段落主旨」</b>，不是<b>「你会不会找词」</b>。'
     +'<b>看到复现最猛的那个选项，先假设它是错的，再去找证据推翻这个假设</b>——这个先验能救分。</p>',
 traps:['<b>⭐首句陷阱（2007·42 的 A）</b>：段落首句 <code>Kids need a range of authentic <b>role models</b></code>，A 项 <b>Set a Good Example</b> 看上去天经地义。'
        +'但 ① <b>谁是榜样</b>——原文是 <code>people the family knows</code>，不是家长本人；② <b>做什么</b>——全段动词是 discuss / talk，不是「以身作则」；'
        +'③ <b>罩不罩得住</b>——选 A 则段落后半（阻止说「我不知道」、别对未来只有 foggy view）三句全落空。<b>首句有词、后半没词 ＝ 首句陷阱。</b>',
        '<b>⭐问一句「谁的责任」（2007·43 的 G）</b>：段里 responsible / responsibilities 连出两次，是全篇复现密度最高处 —— 恰恰因为太顺手，它是设计好的诱饵。'
        +'原文 <code>Teachers are responsible … parents should be responsible …</code> 说的是<b>老师与家长的职责分工</b>，主语<b>根本不是孩子</b>，与「孩子的责任感」无关。'
        +'<b>见到 responsible / duty / obligation 这类词，先定「谁的」，再判段落主旨。</b>',
        '<b>手段 ≠ 目的</b>：<code>Assign responsibilities around the house</code> 与「盯作业 deadline」「做兼职」并列，共同服务于末句的 <b>organizational skills</b>。'
        +'<b>并列举措之一 只能撑起一个手段级标题，撑不起段落主旨；首末主旨句 &gt; 中间的例举句。</b>',
        '<b>反向引申：段落只写危害，标题写对策（2007·44）</b>。第五段通篇讲电子游戏/电视/耳机的害处，一个祈使句都没有，正确标题 <b>Place Time Limits</b> 要你自己从 <code>hours of</code>、<code>for long stretches</code> 两处「时间太长」补出来。'
        +'<b>全篇唯一没有祈使句的那段，标题必须靠你补。</b>',
        '<b>代词回指要先还原（2007·45）</b>：末句 <code>help them apply <b>these skills</b></code> 又把 skills 送到眼前，很像 B 项 Work Skills。但 these skills 回指前两句的抗挫/解决问题/批判性思考，且原文自己点明 <code>everyday life situations</code>。'
        +'<b>看到 these / such / it + 名词，先回头找它指谁，再判主旨。</b>',
        '<b>一段一项、不重复</b>：撞车时（44 与 43 都能扯上 skills）回去比<b>哪一段的证据更硬</b>，硬的那段留住选项。',
        '<b>⭐ 2016 修正：原词算不算数，看它落在哪一句</b>：2016 五个正确标题有四个带原词（time≈、goals、context、professionals），照「复现词＝陷阱」会把三个正确项当陷阱。两年统一的判据是 <a href="#R213">R213</a>：<b>原词落在这一段的主句（给读者的那条建议）里就算数</b>；落在例子、被否定的半句、别人段落的宾语里才是诱饵。2007 的 G responsible 主语是老师与家长，正好不在主句里。'],
 refs:[{p:'2007_新题型_家长如何帮孩子.html',q:'q42',label:'2007·新题型·42（首句陷阱）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q43',label:'2007·新题型·43（复现陷阱）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q44',label:'2007·新题型·44（反向引申）'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022·新题型（观点匹配对照）'},
       {p:'2016_新题型_如何提升职业形象.html',q:'two',label:'2016·新题型 · 03+ 两篇标题匹配对照（本卡被修正的半句）'}]},

{id:'R18', tier:'🔴', qt:'标题题 / 主旨题 / 态度题 · 立场判定', title:'先判作者站没站队：反语、情感副词、末段建议给了谁',
 trig:['best title for the text','the author’s attitude','选项里同时有中性词（difference/change）与倾向词（inequality/threat）','读完觉得「作者只是在客观陈述」'],
 flow:'<b>选标题/判主旨之前，先花 20 秒确认一件事：这篇是<u>中立论述</u>还是<u>有偏向</u>？</b>'
     +'去原文找下面三种标记，<b>命中任意一条，就不能选中性词的选项</b>：<br>'
     +'· <b>① 反语</b>：<b>褒义词出现在负面语境里</b>（或反过来）。2008·T1 首句 <code>women appear to be <b>way ahead</b> in at least one <b>undesirable</b> category</code>——「遥遥领先」＋「不受欢迎的类别」一撞就翻面，<b>作者在替女性叫屈，不是在客观记录</b>。<br>'
     +'· <b>② 情感副词/形容词（插入语最典型）</b>：<b>删掉之后语法毫无损失的那个词，一定是态度不是信息</b>。2008·T1 第四段 <code>by, <b>unfortunately</b>, parents or other family members</code>——硬塞在介词与宾语之间。<br>'
     +'· <b>③ 末段建议给了谁</b>：<b>只给一方提建议 ＝ 立场在这一方</b>。2008·T1 末段通篇 <code><b>most women</b> today are coping with…</code>，一个字没提男性。',
 tmpl:'<b>常见反语信号</b>：<code>way ahead / lead the way / enjoy the privilege</code> 等褒义说法 + <code>undesirable / dubious / unenviable</code> 等贬义限定；'
     +'<b>加引号的普通名词</b>（2008·T1 的 <code>"opportunities" for stress</code>——不是好机会，是「遭遇压力的场合」）；<b>加引号的 so-called</b>。<br>'
     +'<b>态度副词清单（见到就在旁边打钩）</b>：unfortunately / sadly / regrettably（惋惜）｜ironically（讽刺）｜alarmingly（警觉）｜surprisingly（意外）｜understandably（可以理解）｜tellingly（很说明问题）。<br>'
     +'<b>⚠️ 引号在英文里的三种功能都要认得</b>：① 直接引语　② <b>反语／所谓的</b>　③ 强调词本身。<b>②③两种都是命题人埋考点的地方（与 R13 的括号/同位语同族）。</b>',
 traps:['<b>最大的坑是「觉得作者很客观」</b>——科普文体自带冷静语气，容易让人以为没有立场。<b>可语气冷静 ≠ 没有立场</b>：2008·T1 通篇引专家、摆实验，却在三处露出偏向。<b>不要用文体去推立场，要用上面三种标记去查。</b>',
        '<b>反语一旦读成字面，会连错两道题</b>：2008·T1 把 <code>way ahead</code> 顺读成「更擅长」→ 21 题错选 C（女性更有应对经验）；把全文读成「中立比较」→ 25 题错选 B（Gender Difference）。<b>一个反语开关管两道题。</b>',
        '<b>反过来也要防</b>：如果三种标记一条都找不到，那就<b>别自作多情地选倾向词</b>——真中立的文章选中性标题才对。<b>这一卡的用法是「查」，不是「一律选倾向词」。</b>',
        '<b>2012·T4</b>：作者全篇不用 I，立场全靠词——fearsome · patrolled（比喻动词）· most notoriously（情感副词）· “backloaded”（引号）· already generous · fat pay packets；读完③段就在卷边写「作者站在工会对面」，38D／39A／40B 三个褒向或错向的选项一起出局。',
        '<b>2017·T1</b>：②❹ <code>And it should:</code>（公众不再支持是应该的）＋ ③❸ <code>but the lines are obvious</code> ＋ ⑦❶ <code>suffers in unnecessary lines</code>——三处都站旅客；五个正确项都在旅客一边，21A「加强安检」、25C「为安全少查」站错边（⟹ <a href="#R216">R216</a>）。'],
 refs:[{p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（三种标记齐全）'},{p:'2008_T1_女性与压力.html',q:'q21',label:'2008·T1·21（反语放倒 C 项）'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30（态度题）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'col6',label:'2012·T4 · 02++++++ 专栏（极性翻转六例）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'col1',label:'2017·T1 · 02+ 专栏（And it should 盖章定立场）'}]},

{id:'R19', tier:'🟡', qt:'特征题（选项为 X and Y 结构）', title:'两个词都要验；对比段先给每个特征词标主语',
 trig:['the stress women confront tends to be ______','四个选项都是「形容词 and 形容词」','原文段落在对比 A 与 B 两类人/两种东西'],
 flow:'① <b>看选项形状</b>：四项都是 <code>X and Y</code> ⟹ 这是特征题，<b>命题人的标准做法是只换其中一个词</b>，让你看到对的那半就点。<br>'
     +'② <b>回原文找同结构</b>：2008·T1 第四段 <code>in more of a <b>chronic or repeated</b> nature</code> ⟹ 正解 <code><b>durable and frequent</b></code>（chronic→durable、repeated→frequent），<b>纯同义替换</b>。<br>'
     +'③ <b>逐项验两个词，一个不对整项作废</b>。',
 tmpl:'<b>⭐ 对比型段落的必做动作：读的时候在旁边画两栏，给每个特征词标「这是 A 的还是 B 的」。</b><br>'
     +'2008·T1 第四段的两栏：<br>'
     +'<table class="tk"><tr><th>　</th><th>原文特征词</th><th>被哪个干扰项偷走</th></tr>'
     +'<tr><td><b>男性</b></td><td><code>war / combat stress</code>、<code><b>random</b> physical violence</code></td><td><b>B 的 violent、D 的 random 全部来自这一栏</b></td></tr>'
     +'<tr><td><b>女性</b></td><td><code>chronic or repeated</code>、<code>domestic</code>、<code>not one-shot deals</code>、<code>longer relationships</code></td><td>正解 C 在这一栏；<b>A 只偷对了半个（domestic ✓ + temporary ✗）</b></td></tr></table>'
     +'<b>另一个快筛：拿作者的语气强度卡形容词。</b>本段收口句是 <code>can be quite <b>devastating</b></code>（摧毁人），所以 D 的 <code>trivial</code>（琐碎的）当场出局。'
     +'<b>凡选项出现贬低性形容词（trivial / minor / negligible / insignificant），先回原文量语气。</b>',
 traps:['<b>半对半错最骗人</b>：2008·T1·23A 的 <code>domestic</code> 确实是原文女性栏的词 ✅，但 <code>temporary</code> 与 <code>chronic</code> 正面冲突 ❌。<b>看到第一个词对就点，正好中招。</b>',
        '<b>反义对要成对记</b>：chronic（长期）⇄ acute（急性）｜chronic ⇄ temporary / one-shot（一次性）｜repeated（反复，有规律）⇄ random / irregular（偶发，无规律）。<b>2008·T1·23 的四个干扰项全建立在这两组反义上。</b>',
        '<b>原文用 tend to be 的，正确项也应是倾向性描述</b>；选项里出现 always / never / all，先扣一分。'],
 refs:[{p:'2008_T1_女性与压力.html',q:'q23',label:'2008·T1·23（两栏对照标本）'}]},

{id:'R20', tier:'🔴', qt:'句意推理题（题干引一句话问 shows that）', title:'句意题三步：先判逻辑关系，再取紧邻上下文，最后用主题检验',
 trig:['The sentence "…" (Line X, Para. Y) shows that','By saying "…", the author means','被考句是比喻、习语或特殊表达'],
 flow:'<b>被考句几乎必是长难句、比喻或习语——命题人考的是「你能不能靠上下文把它翻出来」，不是「你背没背过」。所以第一动作永远是看它前后各一句。</b><br>'
     +'· <b>第一步 · 判逻辑关系</b>：被考句与上一句之间<b>有没有转折词</b>？有 but/however/yet ⟹ 方向翻转；<b>没有 ⟹ 顺承，方向与上文一致</b>。<br>'
     +'· <b>第二步 · 从紧邻上文取意</b>：2008·T1·24 的上一句是 <code>take care of a teenager, <b>have a job</b>, <b>pay</b> the rent, <b>pay</b> the car payment, and <b>pay</b> the debt</code>——<b>三个 pay 连用，全在往外掏钱</b>；顺着说下去，末句只能是「收入被吃干净」⟹ B（工资勉强够家庭开支）。<br>'
     +'· <b>第三步 · 用全文主题检验</b>：全文讲女性压力之大，「经济上入不敷出」正是压力的一种，严丝合缝。<br>'
     +'<b>三步都指向同一项时，认不认识那个习语已经无所谓了。</b>',
 tmpl:'<b>⭐ 同一个动词连出三次 ＝ 作者在强调「量」</b>，别逐项去记内容，要读出那股压迫感（本篇三个 pay；2007·T4 的三个数据泄露机构同理）。<br>'
     +'<b>经济压力四件套（本篇顺手背走）</b>：<code>live from paycheck to paycheck</code>（月光）｜<code>live from hand to mouth</code>（勉强糊口）｜<code>make ends meet</code>（收支相抵）｜<code>live beyond one’s means</code>（入不敷出）。',
 traps:['<b>咬文嚼字式误读</b>：2008·T1·24D 把 <code>paycheck</code> 里的 check 读成「支票（付款方式）」。<b>paycheck 是一个整词＝薪水，指的是<u>收入</u>。</b>判据很简单：该段列的全是<b>支出项目</b>，<b>全段没有一个字谈「怎么付」</b>。<b>凡选项把话题偏到一个<u>无人讨论的维度</u>，一律排除。</b>',
        '<b>细节直接冲突要一眼看出</b>：同题 C 说 <code>paychecks from <b>different jobs</b></code>，原文写的是 <code>have <b>a job</b></code>（一份工作）；而且它把重心从「钱不够花」偏到「钱从哪来」。',
        '<b>绝对化表述先扣分</b>：同题 A 的 <code>cared about <b>nothing but</b> making money</code>——而前文明说她拼命是为了 <code>get the college degree</code>、<code>that was my <b>escape</b></code>（上学是摆脱困境的出口）。',
        '<b>2017·T4·36</b>：划线句 But it did so while holding its nose——先判逻辑（But 与①❶ 推翻反向），再取上下文（④❶ distasteful／nasty），最后排除换对象的 B（取自②）⟹ C（⟹ <a href="#R225">R225</a>）。'],
 refs:[{p:'2008_T1_女性与压力.html',q:'q24',label:'2008·T1·24'},{p:'2007_T4_数据泄密的公司.html',q:'q40',label:'2007·T4·40（段落主线优先）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q36',label:'2017·T4·36（But ＋ while 两层 ⟹ C）'}]},

{id:'R21', tier:'🔴', qt:'通用 · 排除选项（细节题/主旨题皆可用）', title:'主体校验：正确项三问——谁 / 对谁 / 做了什么',
 trig:['四个选项都「看着像对的」','每个选项都能在原文找到出处','一句话里出现两个及以上的名词/身份'],
 flow:'<b>当四个选项全都用原文原词、靠「眼熟」分不出来时，唯一的办法是把选项拆成句子成分，与原文逐项比对。</b>按下面三问，<b>三问全对才算命中</b>：<br>'
     +'· <b>第一问 · 谁（施动者）</b>：这件事是<b>谁</b>做的、<b>谁</b>说的、<b>谁</b>拥有这个属性？<br>'
     +'· <b>第二问 · 对谁（受动者 / 受众）</b>：这个动作<b>作用在谁身上</b>？<b>「人」有没有被换成「机构」？「某一群人」有没有被换成「所有人」？</b><br>'
     +'· <b>第三问 · 做了什么（动作与方式）</b>：动作本身对不对？<b>受益的方式、赚钱的方式、改变的方式</b>有没有被悄悄换掉？',
 tmpl:'<b>2008·T2 一篇之内，同一把刀砍了五次</b>——五个干扰项句句有原文出处，错的都只是主体：'
     +'<table class="tk"><tr><th>题·项</th><th>原文的主体 → 选项换成的主体</th></tr>'
     +'<tr><td><b>27 A</b></td><td>靠限制获取牟利的<b>商业出版商</b> → <b>政府资助的研究</b>本身（同句两个名词，矛头挪了位）</td></tr>'
     +'<tr><td><b>28 B</b></td><td>赚到丰厚利润的是 <b>publishers</b> → <b>scientific researchers</b>（受益方式也一并被换：从「拿得到成果」换成「赚到钱」）</td></tr>'
     +'<tr><td><b>29 B</b></td><td>旧模式下订阅的是<b>想看成果的其他研究者</b> → <b>论文作者</b>（模式抄错了，主体也抄错了）</td></tr>'
     +'<tr><td><b>29 C</b></td><td>免费开放给 <code>everyone who wishes to see it</code>（<b>所有想看的人</b>）→ <b>其他网络期刊</b>（<b>「人」换成了「机构」</b>）</td></tr>'
     +'<tr><td><b>30 A</b></td><td>让出版商难受的是<b>科研成果易获取的新趋势</b> → <b>网络</b>（把「趋势」换成「推手」，顺带把全文重心偏到出版商身上）</td></tr></table>'
     +'<p style="margin-top:8px"><b>⭐ 2008·T4·36C 是「第一问」的另一种形态：不是换了个<u>人</u>，是换了个<u>范畴</u>。</b>'
     +'原文 <code>the roles <b>slavery</b> played</code>（<b>奴隶制</b>，一种<b>制度</b>）→ 选项 <code>the role of <b>slaves</b></code>（<b>奴隶</b>，一群<b>人</b>）。'
     +'<b>单复数 + 一个词尾之差，制度变成了人群。见到 -ism / -ery / -ship / -hood 这类抽象后缀被抹掉，当场停下来比一比。</b></p>'
     +'<p style="margin-top:8px"><b>与既有卡的分工</b>：<b>R1</b> 比的是<b>词</b>（同义替换 vs 原词复现），<b>R8</b> 的「张冠李戴」是本卡的雏形；'
     +'<b>本卡把校验升级到<u>句子成分</u>层面——不比词，比骨架。</b>凡遇到「读了四遍还是觉得每个都对」，就是该启动三问的时刻。</p>',
 traps:['<b>高发地带一：一句话里出现两个名词。</b>「<b>商业出版商</b>从<b>政府资助的研究</b>中赚钱」——命题人就在这两个之间做手脚（2008·T2·27A）。<b>读到这种句子，当场在心里标出「谁是主语」。</b>',
        '<b>高发地带二：身份多的文章。</b>2008·T2 里有四种身份——<b>author（作者）/ publisher（出版商）/ subscriber（订户）/ editor（编辑）</b>，29、30 两题都在这四个之间做排列组合。<b>身份一多，读的时候就该在草稿上列一张身份表。</b>',
        '<b>高发地带三：并列多模式/多方案的段落。</b>把 A 方案的特点安到 B 方案头上，是最省力的造错法（2008·T2·29 的 B、C 两项）。<b>解法：画一张「方案名 ｜ 谁付钱 ｜ 谁受益」三列小表。</b>',
        '<b>高发地带四：主语与谓语被<u>插入语</u>劈开。</b>2008 完形 13 题摆出 <code>as the careers of their elites<u>, including several world-renowned scientists,</u> ___</code>，插入语里的 scientists 制造出「人作主语」的假象，真正的主语是<b>物</b>（the careers）——<b>Claude 就在这里选错了 witness（还有只能带人主语的 observe）。</b><b>解法：先把两个逗号之间的成分整段划掉，让主语和空格/谓语贴到一起再判。</b>这一招在阅读里同样管用：题干问「谁做了什么」时，插入语是最常见的假主语来源。',
        '<b>「受益」对了不等于选项对了</b>：2008·T2·28B 里科研人员确实受益，但受益的<b>方式</b>被换成了「拿到巨额利润」——<b>第三问漏了就会栽在这里。</b>',
        '<b>2010·T3 一篇里连中两次</b>：<b>33C</b> 把「渠道多（靠媒体）」这个性质从 <code>a few celebrities</code> 挪到了 <code>influentials</code> 头上——<b>而下一句紧接着写 <code>these <u>non-celebrity</u> influentials</code>，全段正把两者分开</b>；<b>32C</b> 把 <code>those select people will do most of the work for <b>them</b></code> 读反了——<b>是营销者<u>利用</u>有影响力人士，不是理论<u>赢得了</u>他们的支持</b>（全文从未写过有影响力人士对这个理论的态度）。',
        '<b>2010·T4 一篇里连中三处，全是主体被换</b>：<b>38B</b> <code>evade the pressure from their <b>peers</b></code>——压力来自④❶的「欧洲各国部长」＝<u>政府部门</u>，而 <code>peers</code>（同行）该指别的准则制定机构，<b>两者是对立施压关系不是同行</b>；<b>40B</b> <code>skepticism</code>——原文⑤❹是「<u>投资者</u>对<u>银行</u>持怀疑」，选项说成「<u>作者</u>对<u>准则制定者</u>持怀疑」，<b>一个词两端的主体全被换掉</b>；<b>39C</b> <code>neglected the likely existence of bad debts</code>——<b>那半句是<u>银行的辩解</u>（<code>Today <b>they argue</b> that…</code>），不是作者的判断。</b>',
        '<b>2012·T4·36D</b>：government workers（政府雇员）里的 government 只是定语，选项把它升成主语 the government（政府本身），再编一段「关系改善」——定语升主语也是一种主体偷换。',
        '<b>2013·T4·37 一题三个主体</b>：A 州 · B 联邦官员 · C 州 · D 国会——题干锁「法官同意什么」，④❶ 裁决句的内容主体是州 ⟹ 只剩 A、C；<b>D 的主语国会来自紧跟其后的 That&#39;s because 依据句</b>（⟹ <a href="#R153">R153</a>）。',
        '<b>2015·T1·21A</b>：①❷ <code>the popularity of the republican left</code>——受欢迎的是共和派，选项把 popularity 安到国王头上（used to enjoy high public support）。',
        '<b>2015·T2·26A</b>：①❷ <code>search the contents of a mobile phone</code>——search X 是在 X 里翻，search for X 是为找到 X 而搜；A search for suspects’ mobile phones 把对象从「手机里的内容」换成「手机本身」。',
        '<b>2015·T4·38D</b>：conspiring 是③❶ 库尔森的罪名，布鲁克斯恰被判同一罪名不成立——同一段两个人两种判决，先给罪名标主人。',
        '<b>2016·T2</b>：两个主体偷换——28A 把从句主语 councils 的 oppose development 安到主句主语 Labour 头上；29C 把游说集团的说辞 housing crisis 安到奥斯本头上。一段里站三方以上时，先画栏（⟹ R202）。',
        '<b>2017·T2·28C／30A</b>：28C 的 renaissance 是作者（④❹）说的，不是反对者的理由；30A severe criticism 是反对者（③）的态度，不是作者的——两题都是主语被换（⟹ <a href="#R221">R221</a>）。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q34',label:'2011·T3·34B（劝人抵制的是消费者，不是丰田）'},{p:'2010_T2_商业方法专利的威胁.html',q:'q29',label:'2010·T2·29C（换义＋换主语：缩小保护的是<b>最高法院</b>、对象是<b>所有</b>专利权人，与「商业方法专利怎么样」无关）'},
       {p:'2008_T2_科学出版的在线转向.html',q:'q27',label:'2008·T2·27（同句两名词）'},{p:'2008_T2_科学出版的在线转向.html',q:'q29',label:'2008·T2·29（多模式并列）'},{p:'2008_T2_科学出版的在线转向.html',q:'q30',label:'2008·T2·30（趋势 vs 推手）'},{p:'2007_T1_刻意练习造就高手.html',q:'q23',label:'2007·T1·23（偷换主语）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（制度 vs 人群）'},{p:'2008_完形_高智商与遗传疾病.html',q:'q13',label:'2008·完形·13（插入语造假主语）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'q33',label:'2010·T3·33C／32C（主体被换两例）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q38',label:'2010·T4·38B（压力的源头被换成「同行」）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q40',label:'2010·T4·40B（投资者对银行 ⟹ 作者对准则制定者）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q30',label:'2011·T2·30A/B（主体错：写的是二把手，CEO 只是他们想去的地方）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22D（骂公共健康运动的负面词被安给广告）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q26',label:'2012·T2·26A（谴责是佛州的反应，被挪成公司的动作）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q31',label:'2012·T3·31B（self-deception 的 self- 被拿掉，受骗者从自己换成别人）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q36',label:'2012·T4·36（D 定语升主语）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q22',label:'2013·T1·22A（品牌自己的库存浪费少 → 敦促消费者对抗浪费）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q37',label:'2013·T4·37（D 依据句的主语国会进了答案）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q29',label:'2014·T2·29B（non-lawyers 删掉 non- 变 lawyers）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q33',label:'2014·T3·33B（who is ignored 被换成 recipients：对谁错了）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q21',label:'2015·T1·21A（共和派的 popularity 被安到国王头上）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q26',label:'2015·T2·26A（search the contents → search for phones）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q38',label:'2015·T4·38D（借库尔森的罪名）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q28',label:'2016·T2·28A（councils → Labour）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'col4',label:'2017·T2 · 02++++ 专栏（五方说话人对照表）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q32',label:'2018·T3·32C（DeepMind 的 almost apologised 安到 NHS 头上）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q31',label:'2018·T3·31A（their＝患者 → the latter＝DeepMind）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q22',label:'2019·T1·22B（impatience 原词保留，主体换成 governments）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'q28',label:'2019·T2·28D（colleges’ own needs → local governments’ needs：需要的主人换了，state 也换成了 local）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q36',label:'2019·T4·36A（付钱的购物者 → 代收的商家）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q37',label:'2019·T4·37B（cost them 的 them 是州，换成 consumers）'}]},

{id:'R22', tier:'🔴', qt:'细节题 / 因果细节题', title:'题干关键词在文中<u>没有原词</u>时：先把它翻译成「文中的说法」',
 trig:['题干出现一个全文没出现过的名词（online publication、the new approach…）','According to the text… is significant in that','扫读全文找不到题干那个词'],
 flow:'<b>大多数细节题靠「题干关键词回原文定位」就能做，但命题人偶尔会用一个<u>全文没有原词</u>的概括性说法来提高定位难度。</b>此时分两步：<br>'
     +'· <b>第一步 · 翻译题干词</b>：问自己「这个词，在这篇文章里对应的是<b>哪件事</b>？」——2008·T2 的 <code>online publication</code> 全文零原词，但它显然就是本文通篇在讲的那件新事物：<b>科学期刊的在线出版</b>。<br>'
     +'· <b>第二步 · 找叙述这件事的段落</b>：②段 <code>The Internet… is making access to scientific results a reality</code> ＋ ④段 <code>some 75% of scholarly journals are now online</code> 与各种 open-access 模式。<b>两处合并，答案（更便捷地获取科研成果）自然浮出。</b>',
 tmpl:'<b>⭐ 今昔对比型文章还有一条更快的暗道</b>：<b>「昔」的死穴，就是「今」的意义所在。</b><br>'
     +'2008·T2 的①段末句写明旧模式的毛病——<code>researchers… would have to <b>subscribe</b> to the journal</code>（想看就得订阅）；'
     +'<b>那么「新事物的意义」必然是「不订阅也能看到」＝ easier access</b>。<b>甚至不必回②④段找原文，读完①段就能预判 28 题的答案。</b><br>'
     +'<p style="margin-top:8px"><b>做题动作：读到「旧事物」段落时，顺手在旁边写一句「它的毛病是＿＿」。</b>后面凡问「新事物好在哪 / 意义何在」的题，就是白送的。</p>',
 traps:['<b>别硬找原词。</b>扫读两遍找不到题干那个词，就该立刻切换到「翻译题干词」，而不是把速度耗在满篇搜索上。',
        '<b>题干词无原词的题，定位段常常不止一段</b>（2008·T2·28 同时落在②段与④段）——<b>这也是该篇唯一一道打破「同序原则」的题。</b>凡遇到定位不唯一的题，答案往往是<b>对多处的概括</b>，而不是某一句的改写。',
        '<b>概括性答案 ≠ 过度推断</b>：A 项 <code>provides an easier access to scientific results</code> 是对②④两段的合理概括；而 C、D 两项拿③段首句「知识的价值取决于广泛传播与便捷获取」去造「强调知识重要性」「便利公共投资」，那是<b>移位</b>不是概括。<b>判据：概括是「把几处说的同一件事合起来说」，移位是「把一句话的中心词换掉」。</b>',
        '<b>2017·T1·22</b>：题干 <code>contributes to long waits at major airports</code> ⟸ ③❷ <code>have resulted in long waits at major airports</code>——结果照抄、动词换说法，原因在主语里（安检加强 ＋ 客流上升）⟹ C。'],
 refs:[{p:'2008_T2_科学出版的在线转向.html',q:'q28',label:'2008·T2·28（online publication 零原词）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q34',label:'2013·T3·34（题干 crucial 在原文零原词 ⟹ 翻成⑥❷ holds the key to；题干无定位词时先靠同序定段）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q22',label:'2017·T1·22（contributes to ＝ have resulted in）'}]},

{id:'R23', tier:'🔴', qt:'全文主旨题 / 说明文通用', title:'今昔对比型说明文：三个短句钉住全文，重心永远在「今」',
 trig:['It used to be… / In the past… / Traditionally…','No longer. / But that has changed. / This is now changing.','段首出现异常简短的句子'],
 flow:'<b>说明文最常见的骨架之一，标志极其醒目——<u>短到不像话的句子，出现在段首</u>。</b>2008·T2 的三个标志全在段首：<br>'
     +'<code>It used to be so straightforward.</code>（①段）→ <code>No longer.</code>（②段，<b>两个词一个句号</b>）→ <code>This is now changing.</code>（④段）。<br>'
     +'<b>把这三句连起来读，全文骨架就出来了：出版方式正在从旧变新。</b>'
     +'<table class="tk"><tr><th>位置</th><th>怎么读</th></tr>'
     +'<tr><td><b>昔</b></td><td>只是参照系。<b>但要顺手记下它的「死穴」</b>——那就是「今」的意义（见 R22）</td></tr>'
     +'<tr><td><b>转</b></td><td><code>No longer</code> 之后紧跟的，就是作者真正要谈的新事物</td></tr>'
     +'<tr><td><b>垫</b></td><td>穿插的数据/体量段<b>不出正面考点，但极易被拿来造干扰项</b>（2008·T2 的 28C、28D 全产自这一段的首句）</td></tr>'
     +'<tr><td><b>今</b></td><td>全文重心段，细节题与主旨题都在这里</td></tr></table>',
 tmpl:'<b>主旨题的正确项，必须同时装下「新事物」和「新旧关系」。</b><br>'
     +'2008·T2·30 的四个选项<b>全都提到了新事物</b>（网络 / 新出版方式 / 新出版渠道 / 网络服务），<b>所以分水岭不在「有没有讲新事物」，而在「新旧关系摆得对不对」</b>：<br>'
     +'B <code>A <b>new</b> mode of publication is <b>emerging</b></code>＝新旧关系（new）＋新事物（mode of publication）＋进行时（emerging），<b>三个要素一个不差</b>，且正对原文 <code>Entirely new business models are emerging</code>。<br>'
     +'<p style="margin-top:8px"><b>⭐ 与 2008·T1 的判据是同一把尺子</b>：T1 是<b>空间</b>上的对比（男 vs 女），判据＝<b>把 B 方删掉文章还成立吗</b>；本卡是<b>时间</b>上的对比（昔 vs 今），做法完全一样——<b>删掉参照系，看主角是谁。</b></p>',
 traps:['<b>别把「受损方的处境」当主旨。</b>2008·T2·30A 说「网络正威胁出版商」——出版商受冲击只是新趋势的一个后果，被写在②段的半句话里，<b>而全文关注的是「出版方式怎么变」。</b>',
        '<b>别把「能推出来的」当主旨。</b>同题 C 说「作者乐于接受新渠道」，由「广泛传播有助于实现知识价值」<b>可以</b>推出，但<b>文中从未直接论述作者的态度</b>。<b>主旨题选的是文章「写了什么」，不是「能推出什么」。</b>',
        '<b>别把因果链条的环节读串。</b>同题 D 说「网络服务让<u>出版</u>更容易」，可文中说的是「让<u>科研成果的获取</u>更容易」——<b>获取是读者端，出版是作者端；而新模式里作者还多掏了一笔钱，出版根本没变容易。</b>',
        '⭐⭐ <b>2010·T1 把这把刀推进了一步：今昔对比文里，<u>干扰项最爱做的就是把信息在「今」与「昔」之间挪位置</u>。</b>'        +'五道题里有三处：<b>21A</b> 把 <code>decline</code>（正在衰落）推成 <code>has disappeared</code>（已经消亡）——<b>程度推到终点</b>；'        +'<b>21D</b> 把今人对昔日的 <code>marvel at</code>（惊叹）写成 <code>doubt</code>（怀疑）——<b>情感翻向</b>；'        +'<b>25A</b> <code>Newspapers of the Good Old Days</code> 只写了「昔」的辉煌，<b>丢掉了全文真正的落点「今之衰落」</b>。'        +'⟹ <b>读今昔对比文时，在每段边上标一个「今」或「昔」，主旨题与标题题就是数标记。</b>',
        '<b>主旨题做完要回头检验前几题</b>：本篇主旨是「出版方式在变」，于是 26 答「传统流程」（旧）、28 答「获取更便捷」（新的优势）、29 答「作者付费」（新模式细则）——<b>四道题全在一条主线上。有一道对不上，那道多半选错了。</b>',
        '⚠️⚠️ <b>边界（2013·T3）：「重心在今」只对<u>两拍</u>文章成立。</b>① Up until a few decades ago（昔：乐观）→ ② Now utopia has grown unfashionable（今：悲观）→ <b>③❶ But such gloominess is misplaced</b>——今也被判了错，作者站在第三个位置。<b>「今」后面若紧跟 But ＋ 否定评价词，今就降级成靶子</b>，31C、35A 取今、33C、35D 取昔，四个干扰项全在两端（⟹ <a href="#R148">R148</a>）。',
        '<b>2016·T2·27</b>：②段五句三层时态——❶❷❸ 过去（A century ago · later）→ ❹ 现在（don’t … any more · every year）→ ❺ 应然（needs）；题干 <code>are now being</code> 只认❹ ⟹ gradually destroyed；B、C、D 各从别的层捡料。',
        '<b>2016·T3 立场检查</b>：五个答案都在「CSR 至少在被诉时有价值」这条线上，十五个干扰项里只有 31C approval 与 35C negative effects 站到对面——<b>立场检查只救方向反，救不了档位错</b>（31A 还得靠 R204）。',
        '<b>2016·T4 立场检查</b>：立场有两条边（不一刀切、不守旧）——十五个干扰项里九个站到对面（37B、40A 一刀切；39B、40B、40C 守旧；37C、38A、38C、38D 常识方向），比 T3 的两个多得多：<b>立场越窄，这一步能划掉的越多</b>。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q35',label:'2011·T3（No longer. 两个词的今昔分水岭）'},{p:'2010_T2_商业方法专利的威胁.html',q:'col1',label:'2010·T2 · 02+（「今」这一端本身还分成「正在做的」与「还没做的」——第二道缝见 <a href="#R61">R61</a>）'},
       {p:'2008_T2_科学出版的在线转向.html',q:'q30',label:'2008·T2·30（今昔对比主旨题）'},{p:'2008_T2_科学出版的在线转向.html',q:'q26',label:'2008·T2·26（「昔」段的段落主旨）'},{p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（对照：空间对比）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q25',label:'2010·T1·25（今昔对比的标题题）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'col4',label:'2010·T1 · 02++++ 专栏（五道题的刀法总账）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q31',label:'2012·T3·31（理想 vs 现实 ＝ 昔 vs 今的同构：idealized version 被 But 否掉，C／D 全出在理想版）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q25',label:'2013·T1·25B（旧观念一端只占①段加半句）'},
       {p:'2013_T3_人类前景的长视角.html',q:'col1',label:'2013·T3 · 02+ 专栏（边界：今后面紧跟 But such gloominess is misplaced ⟹ 三拍文章，重心不在今 ⟹ <a href="#R148">R148</a>）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col4',label:'2016·T2 · 02++++ 专栏（三层时间轴）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'col5',label:'2016·T3 · 02+++++ 专栏（立场一致性检查）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'col5',label:'2016·T4 · 02+++++ 专栏（立场有两条边）'}]},

{id:'R24', tier:'🔴', qt:'通用 · 排除选项（作者观点题 / 推断题最常用）', title:'范围校验：推理对了，也可能范围塌了——把两个主语并排写出来',
 trig:['选项靠「言外之意」才成立','选项主语是 the nation / the public / people / the industry 这类大词','原文依据句的主语是某个具体小群体'],
 flow:'⚠️ <b>这是 2008·T3·33 的翻车卡。</b>那道题我的推理链条完全正确，错在<b>没有量范围</b>。<br>'
     +'「言外之意」型选项必须过<b>两道关</b>，缺一不可：<br>'
     +'<b>第一关 · 推理链</b>：这个言外之意是原文哪一句推出来的？<b>推理步数超过两步就要警惕。</b><br>'
     +'<b>第二关 · 范围</b>：<b>把「依据句的主语」和「选项的主语」并排写在草稿纸上，问一句——左边这个，是不是右边这个的一小块？</b><b>是一小块 ⟹ 直接排除。</b>',
 tmpl:'<table class="tk"><tr><th></th><th>原文依据句在说谁</th><th>选项在说谁</th></tr>'
     +'<tr><td><b>2008·T3·33A</b></td><td><code>NBA players</code>　一个联盟几十人</td><td><code>the nation</code>　三亿人的国家均值</td></tr>'
     +'<tr><td><b>2008·T3·34A</b></td><td><code>military uniforms</code>　军服</td><td><code>the garment industry</code>　整个服装业</td></tr>'
     +'<tr><td><b>2008·T4·36C</b></td><td><code>the lives of the <b>founding generation</b></code>　开国那一代人的生活</td><td><code>the <b>U.S. history</b></code>　整部美国史</td></tr>'
     +'<tr><td><b>2008·T4·37D</b></td><td><code>the nation’s <b>early leaders</b></code>　早期领袖</td><td><code><b>throughout</b> the U.S. history</code>　贯穿整部美国史</td></tr>'
     +'<tr><td><b>2007·T4·40C</b></td><td>加州一部「数据被盗须告知」的法</td><td><code>security legislation</code>　一整类立法</td></tr></table>'
     +'<p style="margin-top:8px"><b>⚠️⚠️ 触发时机（比「记住有这个坑」有用得多）：凡选项里出现 <code>the U.S. history</code>· <code>the nation</code>· <code>the industry</code>· <code>society</code>· <code>the public</code> 这类<u>全集名词</u>，一律先查范围，再谈别的。</b></p>'
     +'<p style="margin-top:8px"><b>⭐ 与 <a href="#R21">R21 主体校验</a> 是姐妹卡，合起来是一套完整的「主语体检」：</b><br>'
     +'· <b>R21 问「<u>是谁</u>」</b>——把商业出版商说成政府资助的研究（<b>换了个人</b>）；<br>'
     +'· <b>R24 问「<u>有多大</u>」</b>——把 NBA 球员说成整个国家（<b>还是那批人，但被放大了</b>）。<br>'
     +'<b>拿到一个选项，先答这两问：谁？多大？　然后才轮到「做了什么」。</b></p>',
 traps:['<b>动作要「写出来」，不能靠「感觉一下」。</b>范围偏移读起来毫无违和感，因为每一步都有原文支撑——<b>只有把两个名词并排写在纸上，大小差异才会跳出来。</b>',
        '<b>原文自己常常已经把圈子划好了</b>，别把它们混回去：2008·T3 里专家说的是 <code>In <b>the general population</b> today…</code>（就<b>一般人群</b>而言），而 NBA 球员恰恰是<b>特殊群体</b>——<b>凡见到 the general public / the general population / in the case of X 这类范围界定语，顺手画个圈。</b>',
        '<b>「一句专门用来消解反例的话」，几乎必被拿去造干扰项。</b>2008·T3 的②段末句写 NBA 变高源于全球招募，<b>作者的目的是把 NBA 从「美国人」里<u>切</u>出去</b>；33A 干的事恰恰是把它<b>粘回来</b>。<b>读到这种「切」的句子，旁边写个「切」字。</b>',
        '<b>同序原则也是一记警报</b>：2008·T3 五题严格同序，33 题本该落在④段，<b>而 A 项的出处在②段——「出处落在本题定位段之外，而且是个例」，这本身就该拉响警报。</b>',
        '<b>这把刀已经砍中三次，时间线值得记一下</b>：2007·T4 立 R8 第十一类「泛化」→ 2008·T3·33 又栽、升级成本卡 → <b>2008·T4·36 第三次栽</b>。'
     +'<b>结论：「知道有这个坑」「甚至亲手写过这张卡」都不管用，只有把它绑成一个每题必做的<u>固定动作</u>才生效——落笔前把两个主语并排<u>写下来</u>。</b>',
        '<b>2010·T3·33D 是最省事的一次范围校验</b>：原文 <code><b>a few</b> celebrities like Oprah Winfrey</code> ⟹ 选项 <code><b>most</b> celebrities</code>。⚠️ <b>更根本的是：就算量词不改它也不能选</b>——<b>这句话是论证的<u>前提</u>（先把名人排除掉），不是题干问的「研究者<u>观察到</u>的发现」</b>（⟹ 与新卡 <a href="#R65">R65</a> 同用）。',
        '<b>2013·T2·29A</b>：⑥❷ <code>although <b>some</b> companies have promised to do so</code>，下一句又是 <code><b>some</b> may ignore</code> ⟹ 选项 <code><b>Advertisers</b> are willing to implement DNT</code>——<b>some 被扩成了全体</b>（⟹ <a href="#R147">R147</a> 三问之二）。'],
 refs:[{p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33（我错的那题）'},{p:'2008_T3_美国人的身高极限.html',q:'q34',label:'2008·T3·34（同一把刀第二次）'},{p:'2007_T4_数据泄密的公司.html',q:'q40',label:'2007·T4·40'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（第三次栽）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q37',label:'2008·T4·37（同篇第二次）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'q33',label:'2010·T3·33D（a few ⟹ most）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q21',label:'2012·T1·21C（个人的不良行为被拔高成社会进步的障碍）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q29',label:'2013·T2·29A（some promised → 广告商愿意）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q38',label:'2019·T4·38D（states → the country，又把 limited 反成 brought）'}]},

{id:'R25', tier:'🔴', qt:'作者观点题（which statement would the author agree）', title:'作者观点题：正确项常常没有单句出处，要合并相邻两句',
 trig:['On which of the following statements would the author most probably agree?','The author would agree that…','四个选项都能在原文找到「像」的句子'],
 flow:'① <b>别去找「作者说过的话」</b>——这类题的正确项往往不是任何一句的同义改写；<br>'
     +'② <b>把四个选项各自的关键名词回原文定位</b>（按同序原则先锁定本题该落在哪一段）；<br>'
     +'③ <b>逐项判错法</b>：曲解 / 夸大 / 以偏概全 / 强加因果；<br>'
     +'④ <b>剩下那一项若「找不到单句出处」，不要急着排除——先试着把定位段里相邻两句的<u>因果</u>合起来读一遍。</b>',
 tmpl:'<b>正确项 ＝ 相邻两句的因果合成。</b>2008·T3·33 的 B <code>Human height is conditioned by the upright posture</code> 就是这么来的：<br>'
     +'<table class="tk"><tr><th>句</th><th>说了什么</th></tr>'
     +'<tr><td>④段③句</td><td>脚和背仍在与<b>双足姿势</b>抗衡，<b>承受不了过大肢体</b>反复施加的压力</td></tr>'
     +'<tr><td>④段④句</td><td>身高的真正限制，由<b>基因结构</b>设定</td></tr>'
     +'<tr><td><b>合成</b></td><td><b>身高不能无限长，是因为要迁就直立行走；而这个「不能」被写进了基因</b> ⟹ 正是 B 项</td></tr></table>'
     +'<p style="margin-top:8px"><b>⭐ 判据一句话：「在原文里找不到能直接对上的一句」不是排除的理由，是提示你该<u>合并着读</u>了。</b>'
     +'反过来，<b>干扰项往往句句都有原词</b>——这一点与 <a href="#R8">R8</a> 的「反向提醒」完全一致。</p>',
 traps:['<b>不要拿「这条理由在段里只占一句」当排除依据。</b>我排掉 2008·T3·33B 的理由是「直立姿势只是顺带提到的一个理由，说 conditioned by 太重了」——<b>可那一段的主旨句就是「基因<u>为什么</u>要给身高设上限」，它给出的生理机制只有两条（分娩、直立行走），直立姿势不是顺带，是两个核心答案之一</b>，还由 Moreover 引出、篇幅最长、被专家引语收口。<b>⟹ 判「主次」要看<u>整段的功能</u>，不是看这句话有多长。</b>',
        '<b>强加因果</b>：2008·T3·33D 由「大婴儿难通过产道」推出「大婴儿成年后更高」——<b>原文说 A 有个麻烦，选项说 A 会导致 B，那根因果线是命题人画的。</b>',
        '<b>纵向对比读成横向对比</b>：2008·T3·33C 说「美国人是全世界平均身高最高的」——原文②段全是<b>美国人跟自己的过去比</b>（比 140 年前高两英寸、1960 年代到顶），<b>从未与任何其他国家比过</b>。',
        '<b>做完主旨题要回头检验它</b>：2008·T3 的主旨是「美国人没长高」，而 33A 说「有人把美国人的平均身高拉高了」——<b>与主旨直接相悖。这道检验我当时没做。</b>',
        '<b>2016·T4·37</b>：Peretti 的主张分散在③、④❶、④❷、⑤❻❼ 四处——别急、别拖、不定年份、提价做成传承产品；正确项 make strategic adjustments 是<b>能把四处都装下</b>的上位概括，没有单句出处。'],
 refs:[{p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30（对照：态度题）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q30',label:'2012·T2·30A（观点 ＋ 例子 ＋ 建议三句合成）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q37',label:'2016·T4·37（四处合并成「战略调整」）'}]},

{id:'R26', tier:'🟡', qt:'段落推理题（We learn from paragraph X that…）', title:'两项都与主旨同向时：选「上升到主旨」的，不选「就事论事」的',
 trig:['We learn from the last paragraph that…','It can be inferred from Paragraph X that…','剩下两个选项方向都对，分不出高下'],
 flow:'① 先把该段的<b>观点句 / 结论句 / 转折句</b>找出来，确定段落主旨（末段常兼作全文主旨）；<br>'
     +'② 把候选项按「<b>就事论事</b>（只复述段里的某个例子）」与「<b>上升到主旨</b>（说的是段落真正要说明的那件事）」分成两类；<br>'
     +'③ <b>⚠️ 但顺序要对：先找硬伤，找不到硬伤再比层级。</b>就事论事的那一项往往还带着别的毛病，逮住硬伤更省事。',
 tmpl:'<table class="tk"><tr><th></th><th>B　军服的<b>设计</b>将保持不变</th><th>D　现有身高数据仍然适用</th></tr>'
     +'<tr><td>与主旨的关系</td><td>同向（也在说「不变」）</td><td>同向（也在说「不变」）</td></tr>'
     +'<tr><td>层级</td><td><b>就事论事</b>——军服只是用来说明主旨的一个例子</td><td><b>上升到主旨</b>——「人的身高不再变」这件事本身</td></tr>'
     +'<tr><td>另有硬伤</td><td><b>有</b>：原文说 <code>length</code>（尺寸）没变，选项说 <code>design</code>（设计）——偷换修饰对象</td><td>无</td></tr></table>'
     +'<p style="margin-top:8px"><b>⟹ 光凭 length → design 这一处硬伤就能排掉 B，根本不用比层级。「先找硬伤，再比层级」是本卡的操作顺序。</b></p>',
 traps:['<b>末段推理题最爱把「让步半句」拿去造选项。</b>2008·T3⑤段首句 <code>Genetic maximums <b>can</b> change, <b>but</b> don’t expect this to happen soon.</code>——35 题 D「基因模式<b>已经</b>改变」只抱住了 can change 那半句。<b>凡 A, but B 的句子，B 才是语义重心。</b>',
        '<b>关键词杂糅</b>：2008·T3·34C 拿①句的 <code>Genetic</code> ＋ ③句的 <code>basketball</code> 拼出「基因检测选拔运动员」这个全文没有的概念。<b>两个不同句子的关键词被凑到一起、还带上原文没有的动作 ⟹ 直接排除。</b>',
        '<b>反向 + 范围偏移常常一起出现</b>：同题 A 项既把「无需改动」说反成「要重新考虑尺码」，又把 military uniforms 放大成 the garment industry（见 <a href="#R24">R24</a>）。'],
 refs:[{p:'2008_T3_美国人的身高极限.html',q:'q34',label:'2008·T3·34'},{p:'2008_T3_美国人的身高极限.html',q:'q35',label:'2008·T3·35（对照：全文主旨题）'}]}
,

{id:'R27', tier:'🔴', qt:'写作目的题（首段是纯事例 / 轶事）', title:'先判引入方向：反差句 ⟹ 目的落在事例主角本身',
 trig:['X is mentioned to / is cited as an example to（且 X 在<b>第一段</b>）','首段整段只讲一件事，一句观点都没有','第二段首句以 That’s / But / Contrary to 开头'],
 flow:'⚠️ <b>这是 2008·T4·36 的翻车卡。</b>我用对了 <a href="#R16">R16</a>（往外扩一层），<b>却把方向做反了</b>——方法对、方向错，比不知道方法更难自查，因为每一步都「有道理」。<br>'
     +'<b>首段是纯事例时，答案的方向由<u>第二段第一句</u>决定，只有两种：</b><br>'
     +'<table class="tk"><tr><th>第二段首句长什么样</th><th>方向</th><th>写作目的落在哪</th></tr>'
     +'<tr><td><b>反差句 / 否定句</b><br><code>That’s a <b>far different image from</b>…</code>· <code>Contrary to popular belief…</code>· <code>But that’s only half the story.</code>· <code>The reality is rather different.</code></td>'
     +'<td><b>反向引入</b><br>（用特例反衬公众印象）</td><td><b>事例主角<u>本身</u></b>——揭示不为人知的一面、打破成见</td></tr>'
     +'<tr><td><b>顺承句 / 概括句</b><br><code>This is just one example of…</code>· <code>Such cases are increasingly common.</code>· <code>X is not alone.</code></td>'
     +'<td><b>正向引入</b><br>（由点扩到面）</td><td><b>下文的大主题</b>——事例只是引子</td></tr></table>'
     +'<p style="margin-top:8px"><b>⟹ 动作只有一个：读完首段事例，先把第二段第一句读完再看选项。</b>两秒钟的事，方向定了，四个选项立刻分成两堆。</p>',
 tmpl:'<b>2008·T4·36 标本</b>：①段讲华盛顿从奴隶嘴里拔牙移植到自己颌骨上；②段①句 <code>That’s a far different image from the cherry-tree-chopping George most people remember from their history books.</code><br>'
     +'<b>⟹ 反差句 ⟹ 反向引入 ⟹ 主角是<u>华盛顿</u>，不是奴隶制</b> ⟹ 答案 D <code>reveal some unknown aspect of his life</code>（<code>a far different image</code> ↔ <code>unknown aspect</code>，<code>most people remember</code> ↔ <code>unknown</code>）。<br>'
     +'<b>我选的 C <code>stress the role of slaves in the U.S. history</code> 错在<u>三处</u>，任查一处都能拦下</b>：'
     +'① <b>结算句抓错</b>——我扩到了②段<u>②</u>句（<code>But recently, many historians have begun to focus on…</code>），<b>可 <code>But</code> 是换话题的标志，②句服务的是下面四段，不是①段</b>；'
     +'② <b>主体偷换</b>（<a href="#R21">R21</a>）——原文 <code>the roles <b>slavery</b> played</code>（制度）→ 选项 <code>the role of <b>slaves</b></code>（人群）；'
     +'③ <b>范围放大</b>（<a href="#R24">R24</a>）——原文 <code>in the lives of the <b>founding generation</b></code> → 选项 <code>the <b>U.S. history</b></code>。',
 traps:['<b>「往外扩一层」的<u>一层</u>是有边界的：扩到第一个能给这个事例<u>定性</u>的句子为止，遇到 <code>But / However / Yet</code> 就停。</b>把「扩一层」做成「扩到全文主旨」，必然选出一个「大而正确」的选项——<b>那往往正是命题人准备的那一个。</b>',
        '<b>你读事例时的情绪反应不是证据。</b>2008·T4·36 的 B <code>demonstrate the cruelty of slavery</code>——从奴隶嘴里拔牙<b>确实残忍</b>，这是最有感觉的一项；<b>可②段①句接的是「形象反差」，不是「制度残忍」。写作目的题的答案由<u>下文</u>决定，不由你的感受决定。</b>',
        '<b>选项里出现原文从未使用过的<u>评价性形容词</u>，先按无中生有处理。</b>同题 A <code>primitive medical practice</code>（原始的医疗实践）——原文只写了牙医和移植，<b>一个字没评价技术水平</b>。<b>「做法残忍」≠「医术原始」。</b>',
        '<b>反向引入的事例，末尾常有一个「抖包袱」的结构</b>（破折号 / 分号 / 句末从句）。2008·T4①段 <code>…transplant nine teeth into his jaw<b>—having extracted them from the mouths of his slaves</b></code>——<b>前半句平淡，最后五个词才是刀。见到这种「延迟揭露」，基本就是反向引入。</b>',
        '<b>反差句先看事例站在哪一端</b>：2008·T4 事例在「真相」端（That’s a far different image from…）⟹ 目的在事例主角本身；<b>2013·T1 事例在「过时」端</b>（This top-down conception couldn’t be more out of date…）⟹ 事例是靶子，主题在另一端。同样是「首段事例 ＋ 第二段首句反差」，结论完全相反——读完第二段首句，先在卷边写「真」或「旧」。'],
 refs:[{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（我错的那题）'},{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36（对照：正向引入）'},{p:'2008_T3_美国人的身高极限.html',q:'q31',label:'2008·T3·31（对照：事例即靶子）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'col5',label:'2013·T1 · 02+++++ 专栏（事例站在「旧」端）'}]},

{id:'R28', tier:'🔴', qt:'人物信息综合题（What do we learn about X?）', title:'题干只给人名不给段号：先把这个人列成一张表，再拿选项去「盖」',
 trig:['What do we learn about X?','Which of the following is true of X?','题干只有一个人名，没有段号、没有引语'],
 flow:'<b>题干只给人名 ⟹ 这是<u>跨段</u>的信息综合题，天生不受同序原则约束，别试图定位到某一段。</b><br>'
     +'<b>① 扫全文，把这个人出现的每一处标上段号，一处一行写下来（三到五行）；</b><br>'
     +'<b>② 拿四个选项逐个去「盖」这张表</b>——<b>盖不住全部 ＝ 以偏概全；盖得住但加了原文没有的动词（改变 / 导致 / 玷污）＝ 强加因果；</b><br>'
     +'<b>③ 正确项常常「看起来什么都没说」</b>——因为它必须同时罩住互相矛盾的几行，<b>只能弱、不能具体。这种「弱」正是它的强。</b>',
 tmpl:'<b>2008·T4·38 标本</b>（杰斐逊在②③⑤⑥四段都出现）：'
     +'<table class="tk"><tr><th>段</th><th>关于他的事实</th><th>指向</th></tr>'
     +'<tr><td>②③句</td><td>DNA 证据显示他与女奴赫明斯育有至少一子</td><td>私生活与奴隶制深度纠缠</td></tr>'
     +'<tr><td>③②句</td><td><b>私下</b>反感奴隶制，但也明白它是国家的政治经济<b>基石</b></td><td>反感 ＋ 离不开</td></tr>'
     +'<tr><td>⑤②③句</td><td>靠五分之三方案<b>险胜</b>大选；上任后用路易斯安那购地案<b>扩大</b>了奴隶制</td><td>不但没反对，还得益并扩大</td></tr>'
     +'<tr><td>⑥①句</td><td>解放了赫明斯的孩子，<b>但没解放她本人和另外约 150 名奴隶</b></td><td>补救了，但只补救了一点点</td></tr></table>'
     +'<p style="margin-top:8px"><b>⟹ 四行只有一个词装得下：<code>complex</code>（复杂）。</b>三个干扰项各只罩一行，还都罩歪了：'
     +'<b>A</b> 强加因果（原文从没说他的态度<u>变</u>过）· <b>B</b> 范围偷换（<code>Hemings’s children</code> 几个人 → <code>the child slaves</code> 一类人，而且原文紧接着就否掉了这个方向）· <b>D</b> 无中生有（原文没提这段关系对他<u>名声</u>的影响）。</p>'
     +'<p style="margin-top:8px"><b>⭐ 与 <a href="#R23">R23</a>（2008·T2·26 主旨题）是同一套骨架</b>：那题要求正确项同时装下「新事物」和「新旧关系」，本题要求同时装下四行互相矛盾的事实。<b>「能不能全罩住」永远比「有没有原词」优先。</b></p>',
 traps:['<b>最像的干扰项，往往是把「几个人」写成「一类人」。</b>2008·T4·38B：<code>Hemings’s children</code>（他自己的孩子，几个人）→ <code>the child slaves</code>（儿童奴隶，一类人）。<b>与 <a href="#R24">R24</a> 是同一把刀，只是发生在人物题里。</b>',
        '<b>历史人物 + 私生活 ⟹ 极易脑补出「名声受损」这类后果。</b>但<b>「文章提到了 X」不等于「文章评价了 X 的影响」</b>（2008·T4·38D）。',
        '<b>凡选项里出现「改变了 / 促使 / 导致」这类<u>及物动词</u>，回文查一句：原文有没有真的把这两件事连过线？</b>2008·T4·38A 把「他的政治生涯<b>得益于</b>奴隶制」（客观事实）拧成「他的政治观点<b>改变了</b>他对奴隶制的态度」——<b>那根因果线是命题人自己画的。</b>',
        '<b>这类题目的正确项通常是形容词性的概括（complex / cautious / ambivalent），不是具体事件。</b>看到四个选项里三个都在讲具体事、一个在讲「他这个人怎么样」，<b>后者的嫌疑最大（当然仍要回表验证）。</b>'],
 refs:[{p:'2008_T4_开国元勋与奴隶制.html',q:'q38',label:'2008·T4·38'},{p:'2008_T2_科学出版的在线转向.html',q:'q26',label:'2008·T2·26（同骨架：全罩住优先）'},{p:'2022_T2_Z世代与学位.html',q:'q28',label:'T2·28'}]},

{id:'R29', tier:'🟡', qt:'通用 · 信号灯（引号 / 比喻 / 委婉语）', title:'引号的三种功能：引用 / 反语 / 排斥——它是作者不出面的表态',
 trig:['原文里某个词或短语被打上引号','句中出现 like / as if / a kind of 的比喻','带定冠词 the 的引号短语（the “peculiar institution”）'],
 flow:'<b>引号是英语议论文里最省力的「态度标记」，也因此是命题人最爱的取材地。</b>2008 这三篇正好把三种功能考了个遍。<b>识别顺序固定：</b><br>'
     +'<b>第一问 · 引号里是不是某人说的原话？</b>（句中有 <code>says X</code> / <code>according to X</code>）⟹ <b>功能①引用</b>：只可作为「<u>某人</u>的观点」使用，<b>且若是比喻，必须先翻成直义再比选项</b>。<br>'
     +'<b>第二问 · 引号里的词，字面意思在这个语境下成立吗？</b>不成立 ⟹ <b>功能②反语</b>：取其反义。<br>'
     +'<b>第三问 · 引号里是不是一个「名称」，而且前面带 the？</b>是 ⟹ <b>功能③排斥</b>：<b>那是别人的叫法，不是作者的判断。</b><br>'
     +'<b>三问都过不了的引号（纯粹强调某个词），才可以按字面读。</b>',
 tmpl:'<table class="tk"><tr><th>功能</th><th>标本</th><th>命题人怎么用</th></tr>'
     +'<tr><td><b>①引用（含比喻）</b></td><td><b>2008·T4④段</b>：<code>Owning slaves was “like having a large bank account,” <b>says Wiencek</b></code></td>'
     +'<td>39C <code>Slave owners usually had large savings accounts</code>——<b>把喻体当本体</b>。<b>见到 like / as if / the equivalent of，先翻直义。</b></td></tr>'
     +'<tr><td><b>②反语（讽刺）</b></td><td><b>2008·T1①段</b>：<code>increased “<b>opportunities</b>” for stress</code>（增加的压力「机会」）</td>'
     +'<td>会让你以为作者认为女性得到了更多机会。<b>判据：褒义词配负面语境 ＝ 反语。</b>见 <a href="#R18">R18</a>。</td></tr>'
     +'<tr><td><b>③排斥（他人的称谓）</b></td><td><b>2008·T4④段</b>：<code>protections for <b>the</b> “<b>peculiar institution</b>”</code>（当年南方对奴隶制的委婉说辞）</td>'
     +'<td>39D <code>Slavery was regarded as a peculiar institution</code>——<b>把他人的委婉称谓升格成文中的客观判断</b>。<b>问一句「这个称呼是谁给的」。</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>⭐ 委婉语（euphemism）在英美报刊里几乎总带引号，且作者的态度基本都是「我不这么认为」</b>：<code>“collateral damage”</code>（附带损伤 ＝ 平民伤亡）· <code>“downsizing”</code>（精简 ＝ 裁员）· <code>“peculiar institution”</code>（特殊制度 ＝ 奴隶制）。</p>'
     +'<p style="margin-top:8px"><b>⭐⭐ 同族的「作者不出面的表态方式」还有两个，一并记</b>：<b>斜体</b>（2008·T4⑥段 <code><i>all</i> men were created equal</code> 里的 <i>all</i> 在原卷上是斜体——写下这句话的人自己蓄着 150 名奴隶）· <b>破折号</b>（把最刺眼的信息甩到句末，如①段的 <code>—having extracted them from the mouths of his slaves</code>）。</p>',
 traps:['<b>比喻句的三种误用</b>：①字面直译（39C）②扩大适用范围 ③<b>当成作者本人的观点</b>（其实是 Wiencek 说的）。',
        '<b>带引号的委婉语一旦出现，往往<u>整段</u>都在它周围出题。</b>2008·T4④段短短三句造出了 39 题的三个干扰项：比喻 → C、引号 → D、条款细节 → B。<b>见到引号密集的段落，做题时多花十秒。</b>',
        '<b>反语与排斥容易混，判据在「引号里是形容词还是名称」</b>：形容词/褒义词被打引号 ⟹ 多半是<b>反语</b>；一个完整的<b>称谓/专名</b>被打引号且带 the ⟹ 多半是<b>排斥</b>。',
        '<b>⭐ 第四种功能：<u>命名／引入术语</u>（2010·T3 补）。</b>本篇三处引号全是这一种：<code>「social epidemics」</code> · <code>「two-step flow of communication」</code> · <code>「global cascades」</code>。<b>判据：引号后面紧跟着<u>定义</u></b>——冒号（<code>「two-step flow of communication」<b>:</b> Information flows from…</code>）或破折号同位语（<code>「global cascades」<b>—</b>the widespread propagation of influence through networks<b>—</b></code>），<b>而且常与 <code>what is called</code> / <code>often called</code> 连用。这时的引号是中性的，别一律读成反讽。</b><br>⚠️ <b>对照 2010·T2 的 <code>「inventions」 that are obvious</code>——那里的引号才是排斥。</b><b>同一个符号，相邻两篇两种功能；区别只看「后面有没有跟定义」。</b>',
        '⭐⭐ <b>第五种功能（2010·T4）：引号里是<u>直接引用的原话</u>，本身中性——<u>态度全在引号<b>外</b>的引导动词／副词上</u>。</b>本篇三处引号一处不落地印证：<code>cried out against those who 「question our motives」</code>（喊冤）· <code>what one lobbying group <b>politely</b> calls 「the use of judgment by management」</code>（<b>politely ＝ 反讽，美其名曰</b>）· <code>warned the IASB that it did 「not live in a political vacuum」</code>（警告）。<b>⟹ 判据：引号本身看不出褒贬时，去读引导它的那个动词或副词。</b><b>连同 T2（排斥）、T3（命名），同一个符号在 2010 三篇里出现了三种功能。</b>',
        '<b>第四种功能：标记非常规用法</b>（2012·T3 ⑤❶ credibility “happens” to a discovery claim）——happen to 的主语本该是事件，作者硬用，意在说可信度不是「做」出来的、是在共同体里「发生」的。'
        +'<b>判据：去掉引号读，搭配别扭 ⟹ 作者在借用这个词，要找它此处的特殊义</b>；本句正是 35C Evolution 的收口。',
        '<b>2012·T4·38</b>：引号第四功能（标记非常规用法）的第二例——“backloaded” 是借来的合同／金融说法，释义就在紧跟的分词短语 keeping … but adding … 里（⟹ R128）。',
        '<b>2012·新题型 ⑧❷</b>：引号第四功能（命名）的又一例——<code>the concept of “stickiness”—creations and experiences to which others adhere</code>，引号 ＋ 破折号就地下定义。<b>被命名的那一处就是这个词的「出生点」，任何裸用它的句子都只能站在出生点之后</b>——多余项 B（add stickiness）正是死在这里（⟹ R54 反向 · <a href="#R136">R136</a>）。',
        '<b>2014·T1 是引号排斥功能用到极致的一篇</b>：八组引号（change lives for the better／dependency／reforms／fundamental fairness／jobseeker&#39;s allowance／jobseeker／allowance 等），<b>七组是「所谓」、一组是中性的方案名，没有一处引作者赞同的话</b>；<b>同一个 reforms</b>，②❼ 加引号＝所谓改革，④❷ 不加引号＝真的改革。无引号的对方视角见 <a href="#R163">R163</a>。',
        '<b>2015·T1</b>：②❷ <code>"mere" politics</code>、<code>"embody" a spirit of national unity</code> 两个引号＝借王室支持者的口吻、保持距离；④❷ 同一个 embodies 不加引号再用一次（embodies outdated privileges）＝作者自己的判决——<b>带不带引号，就是替谁说话</b>。',
        '<b>2015·T4</b>：①❷ 带引号的「sorting mechanism」是伊丽莎白的术语；⑤❸ 作者复述同一句时引号消失、acceptance 升格为 doctrine——引号一去，作者认账（见 <a href="#R189">R189</a>）。',
        '<b>2015 完形：一篇两处引号、两种功能</b>——①❶ <code>as &quot;related&quot; as fourth cousins</code> 是<b>比方</b>（不是血缘上的亲，是基因上像亲戚）；④❹ <code>&quot;functional kinship&quot; of being friends with benefits!</code> 是<b>排斥＋调侃</b>：配上全文唯一的感叹号，它是被 rather than 推开的一端（13 题，⟹ <a href="#R192">R192</a>）。⚠️ 这个术语在原论文里是正面的，记者一打引号就变了味——<b>引号的功能只看本文怎么用</b>。',
        '<b>2016·T2</b>：一篇三种引号——①❸ <code>"the countryside"</code> 是引用（民调选项原文）；③❷ <code>"off-plan"</code> 是借用（词被挪作他用，黄皮书译「期房」可商榷）；⑤❶ <code>"housing crisis" equals "concreted meadows"</code> 是排斥（紧跟 pure lobby talk）。',
        '<b>2016·T3·32</b>：②❸ <code>"signal"</code> 与②❺ <code>"halo effect"</code> 的引号都是<b>术语提示</b>——信号只让人据此推断质量，不改变质量；32D 把它读成「提高产品质量」（R205）。',
        '<b>2017·T4·②④</b>：<code>“official acts”</code>、<code>“specific” and “unsettled”</code>、<code>“distasteful” and “nasty”</code>——全是判决书原词，引号表引用；official act 是反贿赂法术语（定义见页面 00+）。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q13',label:'2015·完形·13（引号＋感叹号＝被推开的一端）'},{p:'2010_T2_商业方法专利的威胁.html',q:'col3',label:'2010·T2（同一篇里三种引号：「a very big deal」引用评价／「reconsider」引用指令原话／「inventions」作者的排斥）'},
       {p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（引用 + 排斥）'},{p:'2008_T1_女性与压力.html',q:'q21',label:'2008·T1（反语 opportunities）'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36（比喻 time bomb）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'s10',label:'2010·T3 · s10（引号＝命名，破折号给定义）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s5',label:'2010·T4 · s5（politely calls ＝ 反讽的样板）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q37',label:'2010·T4·37A（把被美化的「管理层判断力」读成了「作用削弱」）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q24',label:'2011·T1（三处引号刚好三种功能：引用原话／排斥／引用他人评价）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q35',label:'2012·T3·⑤❶（credibility “happens”：引号的第四种功能——标记非常规用法）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'col3',label:'2012·T4 · 02+++ 专栏（引号词的自带释义）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型（“stickiness” 的命名点判了 B 出局）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'col2',label:'2014·T1 · 02++ 专栏（八组引号清单）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'s12',label:'2014·T4 · ④❸ "progressive," or left-liberal propaganda（排斥型引号 ＋ or 改写）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'col3',label:'2015·T1 · 02+++ 专栏（同一个 embody：带引号 vs 不带）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'col1',label:'2015·T4 · 02+ 专栏（引号消失 ＝ 作者认账）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'s13',label:'2016·T2 · 长难句 s13（引号 ＋ pure lobby talk）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q32',label:'2016·T3·32D（带引号的术语 signal）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'bg',label:'2017·T4 · 00+ 背景（official act 为什么加引号）'}]}
,

{id:'R30', tier:'🔴', qt:'新题型 · 选句填空', title:'先定位「空格形态」，再找「唯一词」——复现词是大家都有的，唯一词只有它有',
 trig:['Directions 写着 some segments/sentences have been removed','空格挖在<b>段落内部</b>（段首/段中/段末），不是整段被抽走','A–G 是完整的一段或两三句话，不是小标题、也不是人物观点'],
 flow:'<b>第一步 · 给每个空定位形态</b>，这一步决定往哪边找证据：<br>'
     +'　・<b>段首空</b> ⟹ 证据主要在<b>下文</b>（上文隔着段落边界，约束力弱）；<br>'
     +'　・<b>段末空</b> ⟹ 证据在<b>上文</b> ＋ <b>下一段首句</b>；<br>'
     +'　・<b>段中空</b> ⟹ 上下各一半，<b>两头都得对上</b>，只对一头的就是干扰项。<br>'
     +'<b>第二步 · 在空格两侧各划一个「钩子」，而且必须是具体的词</b>——名词、指示词、专名。'
     +'不要划“这里该转折”“这里语气变了”这种抽象判断，那种东西四个选项都能糊上去。<br>'
     +'<b>第三步 · 拿钩子去七个选项里找「唯一词」</b>：只有一个选项有的那个词。<br>'
     +'<b>第四步 · 填完通读一遍验接缝</b>——<b>选句填空是 Part B 三种变体里唯一能自查的</b>，'
     +'钩子是词不是感觉，接缝别扭立刻看得出来。⟹ 用时 <b>6–8 min</b> 即可，比标题匹配快。',
 tmpl:'<b>2008 全篇五道题的锁，一个逻辑判断都没用上，全是词：</b>'
     +'<table class="tk"><tr><th>题</th><th>空格一侧的钩子</th><th>选项里的唯一词</th></tr>'
     +'<tr><td><b>41</b></td><td><code>sit, stand up, or lie down to write</code>（三种姿势）</td><td><b>D</b> <code>It makes no difference <b>how you write</b></code></td></tr>'
     +'<tr><td><b>42</b></td><td>下句 <code>Grammar, punctuation, and spelling can wait until you revise</code></td><td><b>G</b> 末句 <code>a <b>perfectly correct</b> draft</code></td></tr>'
     +'<tr><td><b>43</b></td><td>下句 <code>not lose any writing on <b>the other side</b></code></td><td><b>A</b> <code>Write on only <b>one side</b> of the paper</code></td></tr>'
     +'<tr><td><b>44</b></td><td>下句 <code><b>These printouts</b> are also easier to read</code></td><td><b>C</b> <code><b>print their pages</b> each time…</code></td></tr>'
     +'<tr><td><b>45</b></td><td>上句「学生删掉了讨论 Sammy 大男子主义的那一段」</td><td><b>E</b> <code><b>this is an interesting issue</b></code> / <code><b>that paragraph</b></code></td></tr></table>'
     +'<p style="margin-top:8px"><b>⭐ 一句话总纲：「复现词」是好几个选项都有的词（2008 的 outline / pages / revise / paragraph 全是），'
     +'「唯一词」是只有一个选项有的词。<u>选句填空只认后者。</u></b></p>'
     +'<p style="margin-top:6px">与 <a href="#R17">R17</a>（标题匹配）正好互补：'
     +'<b>标题匹配的正确项常常一个原词都没有</b>（靠上位概括），<b>选句填空的正确项必须有词</b>——但靠的是唯一词，不是复现词。</p>',
 traps:['<b>连体空：两个选项互换位置也大致说得通 ⟹ 一错就错一对。</b>2008 的 43/44 就是——A（留白＋单面书写）与 C（打印稿）都沾“页面/修改/打印”，十分里的四分全押在这一对上。'
        +'<b>拆它们别比“哪个更像”，去找“只有它有”的那个词</b>：<code>the other side</code> 只跟 A 走，<code>These printouts</code> 只跟 C 走。',
        '<b>一个选项若以「新论点」收尾，先去找它的下家——看末句找下家，比看首句找上家准。</b>'
        +'2008·41 的最强干扰 G 两头都能挂（first draft 与 outlines 都复现），'
        +'否掉它的是它的末句 <code>Do not attempt to compose a perfectly correct draft</code> 是个新论点，'
        +'下文必须展开它，而第二段开头讲的是“灵活用提纲”——这个论点真正的下家在第二段<b>末尾</b>，所以 G 属于 42。',
        '<b>同一个词挂在两个不同话题上，就不算衔接。</b>2008·42 的干扰项 A 复现了下文的 revise，'
        +'但 A 讲的是<b>版面格式</b>（留白、单面书写），空格上下文讲的是<b>内容</b>（idea / what you are saying）。',
        '<b>指示词必须有先行词，这是最硬的一类证据。</b><code>These printouts</code> 的 These、<code>that way</code> 的 that、'
        +'<code>this issue</code> 的 this——空格前若找不到它们指的东西，那这个先行词只能由所填内容提供。',
        '<b>2012·新题型：唯一词法第三次仍然好使，但方向换了</b>——41／42／45 三空的唯一词长在<b>下一句</b>里（The networked computer／I call it a secret war／What counts as meaningful uploading?），不在上一句 ⟹ 见 <a href="#R136">R136</a>。本篇的复现词是 computer（D、E、G 三项都有）与 downloading（A、D、F、G 四项都有），两者都不算证据。'],
 refs:[{p:'2008_新题型_如何写作初稿.html',q:'q43',label:'2008·新题型·43（唯一词 one side）'},{p:'2008_新题型_如何写作初稿.html',q:'q44',label:'2008·新题型·44（连体空 printouts）'},{p:'2008_新题型_如何写作初稿.html',q:'q41',label:'2008·新题型·41（新论点找下家）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'tail',label:'2012·新题型（唯一词长在下一句：尾钩）'}]},

{id:'R31', tier:'🟡', qt:'新题型 · 多余项', title:'流程型文章：先把每个选项贴到时间线上，多余项就是「没有坑的那一格」',
 trig:['文章讲的是一套做法/步骤/过程（写作、实验、求职、维权、申请）','选项里出现 After you have… / Once you have… / Now that you have… 这类<b>阶段标志</b>','两个选项共用一组<b>专名</b>或同一个例子'],
 flow:'① <b>先用两三个动词把全文的时间线列出来</b>（2008 新题型 ＝ 动笔前 → 写初稿 → 改初稿）；'
     +'② <b>每个选项贴一格</b>；'
     +'③ <b>贴不进任何一格、或贴进的那一格没有空 ⟹ 多余项</b>；'
     +'④ <b>两个选项贴进同一格 ⟹ 它们是一对</b>，一真一假，靠“在讲哪个阶段、哪个动作”分，不靠词面。<br>'
     +'<b>这一步能一次性解决两个多余项</b>，比在词面上纠结省时得多。',
 tmpl:'<b>多余项的两种死法（2008 一次考全）：</b>'
     +'<table class="tk"><tr><th>死法</th><th>2008 的标本</th><th>怎么识别</th></tr>'
     +'<tr><td><b>①阶段错位</b><br>（内容对、位置无）</td>'
     +'<td><b>B</b>：先写正文、引言留到最后写、结尾段同样重要——<b>每句都对</b>，但它属于“改稿的最后一环：润饰开头结尾”，而这一格在末段之后、<b>那里没有空</b>。</td>'
     +'<td><b>内容挑不出毛病的选项，先去查它该站的那一格有没有空。</b>另可查首句的阶段标志：B 的 <code>After you have…developed the body of your paper</code> 要求上文刚讲完“正文已写清楚”，全文无此处。</td></tr>'
     +'<tr><td><b>②专名撞车</b><br>（词对、事不对）</td>'
     +'<td><b>F</b>：与正确项 E 共用 <code>the student / Sammy / Lengel / A &amp; P</code> <b>四个专名</b>，是唯一能跟 E 抢 45 空的项。但 F 讲“末段<b>怎么写</b>”＝写稿，第五段讲“<b>改稿</b>时的增删”。</td>'
     +'<td><b>两个选项共用一组专名 ⟹ 它们是一对，比“在讲哪个阶段”。</b>另：F 前面没提过“末段”（不承上）、后面讲反复重写（不启下），<b>两头都挂不上</b>。</td></tr></table>',
 traps:['<b>别在多余项身上找“哪句话说错了”</b>——Part B 的多余项通常<b>每句都对</b>，它错的是位置，不是内容。',
        '<b>专名不是证据，是诱饵。</b>专名越齐全，越可能是命题人拿正确项的材料改造出来的（2008·F 一次抄了四个）。',
        '<b>做完 5 个空必须回头验多余项</b>：把没用上的两项拿回去，逐个空确认放不下，才收工。',
        '<b>2012·B 与 2008·B 是同一种死法</b>：都属于「末段之后」的内容（2012 B 要等第八段先给 stickiness 下定义，才能拿 tumblr.com 举例），而节选文章在末段就结束了、那里没有空。<b>另一个多余项 E 是「正确项的下家」</b>：它该紧跟 G，而 G 之后没有空（⟹ <a href="#R137">R137</a>）。<b>两项都是内容全对、位置已满。</b>'],
 refs:[{p:'2008_新题型_如何写作初稿.html',q:'q45',label:'2008·新题型·45（E vs F 专名撞车）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q42',label:'2007·新题型·42（首句陷阱）'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022·新题型（无人提及型多余项）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型（B 属末段之后 · E 是 G 的下家）'}]},

{id:'R32', tier:'🟢', qt:'新题型 · 元套路', title:'开考先读 Directions 那三行：Part B 有四种变体，认错变体比读不懂文章更致命',
 trig:['翻到 Part B 的第一秒','看到 A–G 七个选项但不确定它们是标题、观点还是段落'],
 flow:'<b>Part B 常考四种变体，Directions 的一个词就能认出来</b>；认出后再决定用哪套手感、给多少时间。'
     +'四种的共同铁律只有三条：① <b>一项一空、不重复</b>；② <b>定完 5 个必须回头验多余项</b>；'
     +'③ <b>证据必须落到具体的词或句，“感觉像”不算证据</b>。',
 tmpl:'<table class="tk"><tr><th>变体</th><th>认它的信号 · 第一步做什么</th><th>主战场 · 用时</th></tr>'
     +'<tr><td><b>标题匹配</b><br>（2007 · 2016）</td>'
     +'<td>Directions 里出现 <code>heading</code>。<b>第一步：看七个标题的共同句式</b>，推出每段在写什么（2007 全是祈使句 ⟹ 每段＝一条建议）。</td>'
     +'<td><b>段落主旨的概括能力</b>；正确项常是原文<b>没出现</b>的上位词。<b>8–10 min</b>，不能自查。</td></tr>'
     +'<tr><td><b>观点匹配</b><br>（2022）</td>'
     +'<td>Directions 里出现 <code>match each person with his/her statement</code>。<b>第一步：给每个人贴立场标签</b>（支持/反对/中间），只看每段前两句。</td>'
     +'<td><b>立场 ＋ 同义替换</b>；最大坑是<b>主语偷换</b>。<b>8–10 min</b>，立场可复核。</td></tr>'
     +'<tr><td><b>选句填空</b><br>（2008 · 2009 · 2012 · <b>2013</b>）</td>'
     +'<td>Directions 里出现 <code>some segments have been removed</code>。<b>第一步：给每个空定位形态</b>（段首/段中/段末）；<b>2012 起再加一步：每空先读下一句找尾钩</b>（<a href="#R136">R136</a>）；<b>认线</b>（流程／人物／论证，<a href="#R138">R138</a>）。</td>'
     +'<td><b>衔接与连贯</b>；正确项必带<b>唯一词</b>或<b>硬指代</b>。<b>6–9 min</b>，<b>唯一能自查</b>（填完通读验接缝）。</td></tr>'+'<tr><td><b>排序题</b><br>（2010 · 2011 · 2014 · 2017 · <b>2018</b>）</td>'+'<td>Directions 里出现 <code>choose the most suitable <b>paragraphs</b>… fill them into the numbered <b>boxes</b></code>。<b>第一步：先做被「已给定段」夹住的那个空，再用段首排除法定首段</b>（<a href="#R78">R78</a>／<a href="#R79">R79</a>）。</td>'+'<td><b>段落顺序</b>；证据只长在<b>段首与段尾</b>共 14 个接口（<a href="#R80">R80</a>）。<b>8–10 min</b>，<b>与选句填空并列为仅有的两种能自查的变体</b>。</td></tr></table>'
     +'<p style="margin-top:8px"><b>四种变体至此全部实做过一遍</b>（2007 标题 5/5 · 2022 观点 5/5 · 2008 选句 5/5 · <b>2009 选句 3/5</b> · 2010 排序 5/5 · <b>2011 排序 5/5</b> · 2012 选句 5/5 · <b>2013 选句 5/5</b>）。<b>认完变体还要认<u>形态</u>：排序题分「有多余项」（2010，6 格 7 项）与「零多余项」（2011，7 格 7 项）两种，打法与验收都不同 ⟹ <a href="#R107">R107</a>。</b>四方对照的最新版见 <a href="2010_新题型_欧洲食杂零售商转战批发.html">2010 新题型页 · 04 节</a>，上一版在 <a href="2009_新题型_文化人类学理论.html">2009 新题型页 · 04 节</a>。</p>',
 traps:['<b>用错手感是 Part B 最贵的失误</b>：拿“找复现词”的手感去做标题匹配 ⟹ 掉进复现陷阱（2007 的 A、G 两个多余项都有词面呼应）；'
        +'拿“概括段落主旨”的手感去做选句填空 ⟹ 忽略指代与照应，43/44 这种连体空必翻车（<b>2009 我正是这么翻的，见 <a href="#R55">R55</a></b>）。',
        '<b>四种变体的多余项造法各不相同</b>：标题匹配用<b>段内局部信息</b>做标题；观点匹配造一句<b>没人说过的话</b>；'
        +'选句填空则是<b>内容对但没有它的坑</b>（阶段错位）或<b>与正确项共用专名</b>；<b>排序题（2010）则专拿<u>复现词</u>钓鱼——多余项 C 的段首段尾各放一个回指词，却整段不含全文主线名词</b>（见 <a href="#R81">R81</a>）。',
        '<b>2013 选句填空第四篇</b>：「每空先读下一句」第二年验证——这次下一句开头是 This is a shame／This is an adequate amount／That should create（评语定类型，<a href="#R159">R159</a>），外加 Here, too 与强调 do（预设小词，<a href="#R160">R160</a>）。选句填空四篇占八篇的一半。',
        '<b>2014 排序题第三篇</b>：七格七段、首段空着 ⟹ 第一步仍是数格子，第二步<b>给每格数候选</b>（<a href="#R78">R78</a> 修正版），候选最少的先落。',
        '<b>选句填空第五次（2015）</b>：2008 · 2009 · 2012 · 2013 · 2015——2012 起四年考了三次，是 Part B 最常见的变体；认完变体，再看正文有没有中途换人称（<a href="#R195">R195</a>）。',
        '<b>2017 排序题第四篇</b>（2010 · 2011 · 2014 · 2017，<b>零多余第三次</b>）：人物传记，顺序只由时间决定；已给定首段 D（总评）与第 6 段 B（成名），41、44、45 各只有一个候选。认完变体再认文体：传记 ⟹ 事件接力（<a href="#R232">R232</a>）＋ 称呼由全到简（<a href="#R231">R231</a>）。',
        '<b>2019 排序题第六篇</b>（2010 · 2011 · 2014 · 2017 · 2018 · 2019，<b>零多余第五次</b>）：驳论式评论，没有时间轴；已给定 F（第 3 格）与 C（第 6 格）<b>两边都是空格，各锁两格</b>。认完变体再认文体：议论文 ⟹ 先贴语气标签（<a href="#R269">R269</a>）＋ 类名回指（<a href="#R270">R270</a>）。'],
 refs:[{p:'2008_新题型_如何写作初稿.html',q:'',label:'2008 · 选句填空（含三方对照表）'},{p:'2007_新题型_家长如何帮孩子.html',q:'',label:'2007 · 标题匹配'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022 · 观点匹配'},{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010 · 排序题（四方对照最新版）'},{p:'2012_新题型_下载与上传的隐秘战争.html',q:'three',label:'2012 · 选句填空第三篇（三种线对照）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'four',label:'2013 · 选句填空第四篇（四篇对照）'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'',label:'2014 · 排序题第三篇（零多余第二次）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'five',label:'2015·新题型 · 03+ 五篇选句填空对照'},
       {p:'2016_新题型_如何提升职业形象.html',q:'',label:'2016 · 标题匹配第二篇（subheading；五个正确项＝原文小标题）'},
       {p:'2017_新题型_狄更斯小传.html',q:'',label:'2017 · 排序题第四篇（传记 · 零多余第三次）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'',label:'2018 · 排序题第五篇（建筑史 · 零多余第四次 · 完整盲做 5/5）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'extra',label:'2019 · 排序题第六篇（驳论评论 · 零多余第五次 · 完整盲做 5/5）'}]},
{id:'R33', tier:'🔴', qt:'推理题 / 段末收口句', title:'「This is where X comes in」是反向诊断句——它在说 X 此刻正缺席',
 trig:['段末出现 This is where … comes in','That’s where … comes in','Enter X.','This is where X becomes important'],
 flow:'① 见到这类<b>登场句</b>，先别当成「X 很有用」的正面表扬；'
     +'② <b>反过来读</b>：作者说某样东西「该出场了」，等于承认它<b>此刻正缺席</b>；'
     +'③ 再往前看一句——<b>让它缺席的，就是紧挨着前面刚被批判的那个东西</b>；'
     +'④ 把这个因果接上全文主线，正确项通常就是「<b>前面那个东西 阻碍了 X</b>」。',
 tmpl:'<table class="tk"><tr><th>你读到的</th><th>该推出的</th></tr>'
     +'<tr><td><code>This is where developing new habits comes in.</code></td><td>此刻新习惯<b>没能形成</b>，需要它来救</td></tr>'
     +'<tr><td>紧挨着的上文：标准化测试压掉了创新与协作思维</td><td><b>正是标准化测试挡住了新习惯</b></td></tr>'
     +'<tr><td>全文主线：新习惯 ⇄ 创新，相融相生</td><td>⟹ <b>测试阻碍新习惯的形成</b>（2009·T1·25 正确项 A）</td></tr></table>'
     +'<p style="margin-top:8px"><b>注意正确项是「推理项」，原文没有任何一句直说</b>——但题干写的是 <code>Ryan’s comments <b>suggest</b> that…</code>，'
     +'<code>suggest / imply / indicate</code> 就是明牌告诉你这是推理题。<b>看到这三个词，就该把「文中没直说」从排除理由里划掉。</b></p>',
 traps:['<b>最容易的错法是把登场句读成对 X 的表扬</b>，于是去找「X 有什么好处」的选项——而正确项问的是「谁挡住了 X」。',
        '这类句子几乎总出现在<b>段末或文末</b>，位置本身就是信号：它是<b>收口</b>，负责把整段的问题接到解决方案上。',
        '<b>2016·T2·27C</b>：②❺ <code>It needs constant guardianship.</code>——needs 与 This is where X comes in 同理：说「需要」就是承认「现在缺」；C <code>properly protected</code> 把缺口读成了已有。'],
 refs:[{p:'2009_T1_习惯与创新.html',q:'q25',label:'2009·T1·25（Claude 在此翻车）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q27',label:'2016·T2·27C（needs guardianship ≠ 已受保护）'}]},

{id:'R34', tier:'🔴', qt:'通用 · 排除选项', title:'概念嫁接：定语被安到了别的名词头上——把「定语＋中心词」当整体回搜',
 trig:['选项里的每个词都眼熟，合起来却说不上哪里怪','选项出现一个带国名/领域名的定语（American / medical / legal …）'],
 flow:'① 把选项里的<b>「定语 ＋ 中心词」当成一个<u>整体</u></b>回原文搜；'
     +'② 单个词都能找到、<b>组合起来找不到</b> ⟹ 判为<b>概念嫁接</b>，直接排；'
     +'③ 这个动作只要五秒，<b>比走完推理链快得多，而且对所有题型都有效</b>。',
 tmpl:'<table class="tk"><tr><th></th><th>原文真实存在的组合</th><th>选项写的组合</th></tr>'
     +'<tr><td>定语</td><td><code>American</code></td><td><code>American</code></td></tr>'
     +'<tr><td>中心词</td><td><code>belief system</code>（信仰体系）</td><td><code>thinking mode</code>（思维方式）</td></tr>'
     +'<tr><td>整体</td><td><code>the American belief system</code> ✔ 原文有</td><td><code>the American thinking mode</code> ✘ <b>原文从未出现</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>与 R8 第九类「偷换修饰对象」是同一族，但方向相反</b>：'
     +'第九类是<b>形容词照抄、名词换掉</b>（2007·T4·36B）；本卡是<b>把原文某处的定语搬到另一处的名词上</b>，'
     +'两处词都真实存在，所以更难查——<b>唯一可靠的判据就是「整体搜不到」</b>。</p>',
 traps:['带国名、领域名的定语最容易被搬（American / Chinese / medical / legal / academic），因为它们在文章里往往只出现一两次，读者对它没有位置记忆。',
        '<b>别用「这个词原文有」来给选项背书</b>——原文有的是<u>词</u>，不是<u>词组</u>。',
        '🔗 <b>与新卡 <a href="#R70">R70</a> 是一对，别混</b>：<b>本卡（R34）是「定语挂错了中心词」，两处词都真实存在，错在<u>搭配</u>，靠「把定语＋中心词当整体回搜」来破；R70 是「切分点整个挪了位」，把先行词与从句主语粘成一个假复合名词，错在<u>断句</u>，靠「数缺口」来破。</b><b>2010·T4·36C <code>the price managers</code> 属于后者。</b>',
        '<b>2016·T2·30B</b>：⑥❸ <code>an enviable rural coherence, while still permitting low-density urban living</code> → 选项 <code>the enviable urban lifestyle</code>——enviable 从 rural coherence 挪到 urban living 上，整体回搜不到（⟹ R203）。'],
 refs:[{p:'2009_T1_习惯与创新.html',q:'q25',label:'2009·T1·25 的 C 项'},{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36B（第九类对照）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col2',label:'2010·T4 · 02++ 专栏（R70 与 R34 的分界）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q27',label:'2012·T2·27B（Vermont legislature 被安上 federal 定语）'},
       {p:'2013_T3_人类前景的长视角.html',q:'col5',label:'2013·T3·32A／34D／35B（词对主不对一族五个：misplaced 本修饰悲观 · shaping 的主语本是 patterns · evolution 本属技术——回搜时连主语一起搜）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'col4',label:'2014·T2 · 02++++ 专栏（authorized by 挂在 law schools 上 ⟹ 27C／27D 挪错对象）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q30',label:'2016·T2·30B（enviable 挪位）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q23',label:'2019·T1·23D（transient investors → temporary influence：「短」挪到了影响上）'}]},

{id:'R35', tier:'🔴', qt:'通用 · 排除选项', title:'「本源词」的定义常在上一段——inherent / innate / natural 一律跨段追',
 trig:['选项出现 inherent / innate / natural / original / born with / by nature','选项出现 the inherent X'],
 flow:'① 见到这类<b>本源词</b>，<b>不要在定位段里就地理解它</b>；'
     +'② 回原文找<b>真正给「本源」下定义</b>的那一句——<b>它经常在上一段，而且往往带一个数字或范围</b>；'
     +'③ 把那个数字/范围与选项并排比，<b>动词（maintain / change / reduce）是不是对的，一比就出来</b>。',
 tmpl:'<table class="tk"><tr><th>句</th><th>原文</th><th>推出</th></tr>'
     +'<tr><td>⑥②（<b>定义句·上一段</b>）</td><td><code>humans are <b>born with</b> the capacity … in <b>four</b> primary ways</code></td><td>与生俱来的是<b>四种</b></td></tr>'
     +'<tr><td>⑥③</td><td><code>the brain <b>shuts down half</b> of that capacity</code></td><td>后来只剩<b>一半</b></td></tr>'
     +'<tr><td>⑦①（<b>定位句</b>）</td><td>标准化测试强调分析与程序</td><td>它<b>改变／削减</b>了本源，<b>不是「维持」</b></td></tr></table>'
     +'<p style="margin-top:8px">⚠️ 还要看<b>词性</b>：⑦①句的 <code>inherently</code> 是<b>副词修饰动词 use</b>（本能地使用），'
     +'选项把它变成名词短语里的<b>定语</b> <code>the inherent … mode</code>——<b>词性一换，所指就漂了</b>。</p>'
     +'<p style="margin-top:6px"><b>与 <a href="#R24">R24 范围校验</a> 是兄弟刀</b>：R24 问「<b>大小</b>对不对」，本卡问「<b>指的是谁</b>」。'
     +'查过范围不等于安全。</p>',
 traps:['<b>就地取材是最容易犯的错，因为读起来一切都很顺</b>——定位段里那个本源词的上下文完全自洽，你根本不会想到要往回翻。',
        '本源词常与「数字」绑定（四种能力 / 两类人 / 三个阶段）。<b>凡定义句里带数字，正确项与错误项的分界几乎一定在那个数字上。</b>'],
 refs:[{p:'2009_T1_习惯与创新.html',q:'q25',label:'2009·T1·25（C 项死于「四种」）'}]},

{id:'R36', tier:'🟡', qt:'人物观点 / 细节题', title:'必要条件句可以合法转写成「X 激发 Y」——别因为词面对不上就排掉',
 trig:['原文出现 The first thing needed for Y is X','Y requires X','Without X there is no Y','X is essential/vital to Y'],
 flow:'① 认出原文是一句<b>「X 是 Y 的必要条件」</b>；'
     +'② 选项若写成 <b>「X 激发／促成／推动 Y」</b>（activates / fosters / drives / gives rise to），<b>本质一致，是合法同义转述</b>；'
     +'③ <b>不要用「原文没有 activates 这个词」当排除理由</b>——正确项从不承诺有原词，只承诺有逻辑等价。',
 tmpl:'<table class="tk"><tr><th>原文</th><th>选项</th></tr>'
     +'<tr><td><code>The first thing <b>needed for</b> innovation <b>is</b> a fascination with wonder</code></td>'
     +'<td><code>curiosity <b>activates</b> creative minds</code> ✔</td></tr>'
     +'<tr><td>同义替换：<code>a fascination with wonder</code> ↔ curiosity</td><td><code>innovational thinker</code> ↔ creative minds</td></tr></table>'
     +'<p style="margin-top:8px"><b>反过来也要警惕</b>：把「必要条件」写成「<b>充分条件</b>」就是错的——'
     +'<code>X is needed for Y</code>（没有 X 就没有 Y）≠ <code>X guarantees Y</code>（有 X 就一定有 Y）。'
     +'<b>看到 guarantees / ensures / always leads to 这类词，反而要回头核。</b></p>',
 traps:['<b>本卡救的是「差点被误排的正确项」</b>，与大多数套路卡（教你怎么排错项）方向相反——因为它对应的失误是「排得太狠」。',
        '同段若还有一个<b>词面更像原文</b>的选项，它往往才是陷阱（复现概念、扭曲关系）。2009·T1·24 的 B、C 两项都是这么造的。'],
 refs:[{p:'2009_T1_习惯与创新.html',q:'q24',label:'2009·T1·24 正确项 D'}]}
,

{id:'R37', tier:'🔴', qt:'通用 · 排除选项（主旨题 / 细节题 / 观点题皆可用）', title:'客观事实 ⟹ 主观评价：数字推不出「受欢迎」，做不到不等于没做好',
 trig:['选项里出现 popular / successful / effective / widespread / welcomed','选项里出现 fully / properly / adequately + 动词',
       '定位句给的只是一个数字或一句事实陈述','四个选项都能在原文里找到出处'],
 flow:'① 找到该选项的<b>定位句</b>，判断它给的是<b>事实</b>（数字、动作、能力）还是<b>评价</b>（好不好、成不成功）；'
     +'② 若原文是事实、选项是评价，问一句：<b>「从这条事实走到这个评价，中间还缺什么？」</b>；'
     +'③ 缺 <b>参照系</b>（多少才算多）／缺 <b>归因</b>（是不是这个原因造成的）／缺 <b>主观意图</b>（做不到 ≠ 不想做）——<b>缺任何一样就排掉</b>。',
 tmpl:'<table class="tk"><tr><th>原文（客观）</th><th>干扰项（主观）</th></tr>'
     +'<tr><td><code>More than 60,000 people have <b>purchased</b></code>（一个购买量）</td>'
     +'<td><code>successful <b>promotion</b></code> ✘ 缺归因——原文的 <code><b>since</b> they first became available <b>without prescriptions</b></code> 已把原因给了政策变化</td></tr>'
     +'<tr><td>同上</td><td><code><b>popularity</b> with households</code> ✘ 缺参照系（6 万算多吗？）＋ 换主体（people ≠ households）</td></tr>'
     +'<tr><td><code>can <b>reveal</b> … about only one or two ancestors</code>（能揭示多少＝客观上限）</td>'
     +'<td><code>fails to <b>fully use</b> genetic information</code> ✘ 把「<b>做不到</b>」滑成「<b>没做够</b>」</td></tr></table>'
     +'<p style="margin-top:8px"><b>反向提醒</b>：<b>正确项从不做这种升格。</b>2009·T2·26 的正确项 <code>easy availability</code> 说的仍是<u>一件事实</u>（买得到），'
     +'没有任何褒贬——<b>「正确项比干扰项更平淡」在主旨题里是常态。</b></p>',
 traps:['<b>最难防的是「原因已经写明」这一种</b>：题干句里若出现 <code>since / because / as a result of</code>，'
        +'<b>原文已经替你归好因了，选项再补一个原因就是错的</b>。读到这三个词顺手标一个「因」字。',
        '<b>动词层面的滑动最隐蔽</b>：<code>reveal → use</code> · <code>cannot → does not</code> · <code>fail to work → refuse to work</code>——'
        +'<b>只动一个动词，归因的性质就从「能力」变成了「态度」。读长难句时把主句的实义动词圈出来。</b>',
        '<b>本卡与三把老刀是一组</b>：<b>R21</b> 管「主体换没换」· <b>R24</b> 管「范围大小对不对」· <b>R35</b> 管「所指对象是谁」· '
        +'<b>R37 管「这句话的<u>性质</u>变了没有」</b>。⟹ 选项与原文之间的四种错位：<b>主体 · 范围 · 所指 · 性质</b>。',
        '<b>2015·T2·29C</b>：⑤❷ keeping sensitive information on these devices is increasingly a requirement of normal life 是作者承认的事实（还是他的论据），题干问 concern ——事实推不出担忧（见 <a href="#R185">R185</a>）。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q31',label:'2011·T3·31C（“我热衷”被换成“东西优质”）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q26',label:'2009·T2·26（C、D 双杀）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'q28',label:'2009·T2·28（C 项 reveal→use）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'col1',label:'2009·T2 · 02+ 专栏「主刀三连」'},
       {p:'2011_T2_高管裸辞潮.html',q:'q29',label:'2011·T2·29C（不光彩正在淡去≠他们更在意名声）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q29',label:'2015·T2·29C（作者承认的事实 ≠ 担忧）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q31',label:'2019·T3·31B（出版两百年推不出「两百年来一直受欢迎」）'}]},

{id:'R38', tier:'🔴', qt:'事实细节题（题干主语是缩写 / 专名 / 具体产品）', title:'题干主语的层级校准：问的是「种」还是「属」？——属的性质不能归给种',
 trig:['题干主语是一个缩写（PTK / GDP / the Act）或专有产品名','定位段讲的是一整类事物，题干问的却是其中一种',
       '选项里出现的用途在原文有，但主语对不上'],
 flow:'① 先问一句：<b>题干主语是「这一大类」还是「其中一种」？</b>'
     +'② 若定位段讲的是<b>上位类</b>（DNA testing），而题干问的是<b>下位的具体产品</b>（PTK），'
     +'<b>立刻回文找「第一次出现这个专名并给它下定义的那一句」</b>——它常常不在定位段里；'
     +'③ 用那句定义句去比选项，定位段里属于「属」的其他功能一律不算。',
 tmpl:'<table class="tk"><tr><th>层级</th><th>原文怎么说</th></tr>'
     +'<tr><td><b>属</b>：DNA testing（③段）</td><td>亲子鉴定 · 寻血亲 · 追送养儿童 · <b>系谱寻根</b>（geographic roots）</td></tr>'
     +'<tr><td><b>种</b>：PTK（①段定义句）</td><td><code>confirm that <b>he’s the kid’s dad</b></code> ⟹ 只做<b>亲子关系确认</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>2009·T2·27 的 A 项 <code>locate one’s birth place</code> 就是把「属」的寻根功能安给了「种」</b>——'
     +'寻根是系谱生意，不是 PTK 干的活；而且 <code>a family’s geographic roots</code>（家族发源地）≠ <code>one’s birth place</code>（个人出生地）。</p>',
 traps:['<b>定位段 ≠ 答案段</b>。本题定位在③段，答案句却在①段——<b>隔了两段</b>。',
        '<b>缩写本身常常就是答案</b>：<b>P</b>aternity <b>T</b>esting <b>K</b>it 拆开就写着「亲子鉴定」。<b>题干里的缩写第一时间还原成全称。</b>',
        '<b>反过来也成立</b>：题干问的是「属」而定位句只讲了「某一种」时，同样不能把种的特性放大成属的特性——那就是 <b>R24 范围校验</b> 的活。',
        '⭐ <b>反向用法（2010·T4·37D）：有时你要认出「种确实继承了属的这条性质」，否则会放跑正解。</b>题干主语是 <b>the FASB</b>，D 项写 <code><u>its</u> independence</code>，而原文写的是 <code>the independence of <u>standard-setters</u></code>——<b>FASB 是 standard-setters 的下义词（美国那一家），独立性是所有准则制定者共有的属性，FASB 当然也有。</b><b>这层「种—属」关系必须自己接上，否则会觉得「主体对不上」而弃掉正确答案。</b>'],
 refs:[{p:'2009_T2_DNA检测与伪精确.html',q:'q27',label:'2009·T2·27（定位③段，答案在①段）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q37',label:'2010·T4·37D（its ＝ FASB，原文写的是 standard-setters）'}]},

{id:'R39', tier:'🔴', qt:'通用 · 排除选项（标题题 / 细节题最常用）', title:'原词拼接：两个词都在原文，却分属两个并列成分——把短语当整体回搜',
 trig:['选项是一个两词短语，两个词单独回文都能找到','拿不准时越读越像对的','标题题里出现原文出现过的词'],
 flow:'① 把选项里那个短语当<b>整体</b>回原文默读一遍：<b>这两个词在原文里挨着吗？是同一个语法成分吗？</b>'
     +'② 若它们被 <b>and ／ 逗号 ／ 不同介词</b> 隔开，<b>分属两个并列成分 ⟹ 是焊出来的假短语</b>；'
     +'③ 若它们挨着但<b>中心词或定语被换了</b>（a family’s → one’s），同样是假的。',
 tmpl:'<table class="tk"><tr><th>干扰项</th><th>原文里的真实关系</th></tr>'
     +'<tr><td><code>lack of <b>patent evaluation</b></code>（29D）</td>'
     +'<td><code>may be <b>patented</b> <u>and</u> not subject to peer review or outside <b>evaluation</b></code>'
     +'——<b>分属 and 连接的两个并列表语</b>；缺的是<b>外界评估</b>，不是「对专利的评估」。'
     +'且 <code>be patented</code> 是被动＝<b>已受专利保护</b>，不是「没申请专利」</td></tr>'
     +'<tr><td><code>DNA Testing <b>Outside the Lab</b></code>（30C）</td>'
     +'<td><code>or <b>outside</b> evaluation</code>——<code>outside</code> 修饰的是 <b>evaluation（外界评估）</b>，'
     +'全文压根没出现过 <code>lab</code></td></tr>'
     +'<tr><td><code>locate one’s <b>birth place</b></code>（27A）</td>'
     +'<td><code>search for <b>a family’s</b> geographic roots</code>——<b>中心词从「家族的」换成了「个人的」</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>为什么值得先做这一步</b>：29D 只要在原句里看见那个 <code>and</code>，<b>一秒就能排</b>；'
     +'而去想「专利到底该不该被评估」，就会越想越像。<b>形式判据永远比内容推理快。</b></p>',
 traps:['<b>与 R34 是兄弟刀，别混成一张</b>：<b>R34 概念嫁接</b>＝<b>定语跑到了别的中心词头上</b>（American belief system → American thinking mode）；'
        +'<b>R39 原词拼接</b>＝<b>两个不相干的并列成分被粘住了</b>（patented and … evaluation → patent evaluation）。'
        +'<b>共同点：单个词全都能核上，整体核不上。</b>',
'⭐⭐ <b>2009·T3 把这把刀的跨度拉大了一级</b>：T2 的拼接发生在<b>同一句的两个并列表语</b>之间，'
        +'<b>T3 的拼接跨到了两个句子之外</b>——<code>requires <b>sufficient labor force</b></code>（32D，<code>enough people</code> 在①❸句指学生、<code>workers</code> 在①❹句）· '
        +'<code>does not depend on <b>economic performance</b></code>（35B，<code>not a sufficient</code> 与 <code>economic performance</code> <b>隔着整整一个从句</b>）· '
        +'<code>cannot <b>afford political changes</b></code>（35D，<code>afford</code> 在⑤❷句、<code>political changes</code> 在⑤❹句）。'
        +'<b>跨度越大越难查——两个词回文都能找到，只是不在一起。</b>'
        +'⟹ <b>动作要具体到：搜到第一个词，就顺着往后读到句末，看第二个词有没有跟它组成一个短语。没有，就是假的。</b>',
        '<b>还有一种变体：原词被<u>反着</u>用。</b>2009·T3·34D <code>as a result of <b>pressure on government</b></code> 取自 '
        +'<code>even when governments <b>don’t force</b> it</code>——<b>原文说政府「不必出手」，选项说「政府被施压」，方向完全相反。</b>',
        '<b>标题题里尤其要查</b>：标题若含原文出现过的词，<b>一定回原文核它当时的搭配对象</b>——同一个词换个搭配就是另一个意思。',
        '<b>2010·T1 一篇就三处</b>：<b>21C</b> <code>high-quality <b>newspapers</b></code>——原文的 high-quality 修饰的是 <code>arts criticism</code>（<b>评论的质量</b>），不是报纸的质量；<b>23C</b> <code>tempted <b>into journalism</b></code>——原文只有 <code>tempted <b>to define</b></code>；<b>25C</b> <code>Decline of <b>Journalism</b></code>——journalism 在本文只出现在纽曼的引语里、指「撰稿这门活计」，<b>与「新闻业整体的兴衰」无关</b>。',
        '<b>2010·T4 里三个原词拼接项，各拼各的</b>：<b>37C</b> <code>the banks’ <b>long-term asset losses</b></code>——原文③❷是 <code>flexibility in <b>recognizing losses on long-term assets</b></code>，<b>「认定损失时更灵活」被拼成「导致损失」</b>；<b>39A</b> <code><b>market price indicators</b></code>——这个词组原文根本没有，是把 <code>market prices</code> 与 <code>reflect</code> 杂糅出来的；<b>40B</b> <code>skepticism</code>——词根在文中（<code>investors are <b>skeptical</b></code>），<b>但主体被换掉</b>。<b>⟹ 态度题里尤其要用这条：选项的态度词若能在原文找到同词根的词，先查那个词是「谁对谁」的。</b>',
        '<b>2015·T4·39B</b>：wealth 取自⑤❹ wealth generation、fairness 取自⑤❺，拼成原文没谈过的「财富分配不公」（见 <a href="#R191">R191</a>）。',
        '<b>2016·T2·26</b>：一张并列清单喂出三个干扰项——<code>alongside the royal family, Shakespeare and the NHS</code>，A／B／C 各拿一个陪衬项、各编一层关系（给 NHS 带来好处 · 始于莎翁时代 · 得到王室支持）；alongside 只表示并排。',
        '<b>2016·T4·39D</b>：legacy businesses 出自⑦❶，becoming outdated 的意思来自⑦❷ the world changes——两个半句拼成一个 Peretti 没下过的判断；他说的是「我们没有传统业务是幸事」。',
        '<b>2017·T4·38A</b>：<code>allowed to focus on the concerns of their supporters</code>——allowed 与 supporters 取自⑤❷，concerns 取自⑤❸；两个邻句各借一个词，又把 constituents 换窄成 supporters。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q27',label:'2010·T2·27B（<code>a very big</code> 来自②❸、<code>transaction</code> 来自③❷，两句话被拼成一个选项）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'q29',label:'2009·T2·29（D 项 patent evaluation）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'col2',label:'2009·T2 · 02++ 专栏「词都在，组合不在」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col4',label:'2009·T3 · 02++++ 专栏（四处拼接，跨句级）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q35',label:'2009·T3·35（B、D 两个拼接项）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q21',label:'2010·T1·21（C 项 high-quality newspapers）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q25',label:'2010·T1·25（C 项 Journalism）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q37',label:'2010·T4·37C（记账自由度 ⟹ 亏损本身）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q39',label:'2010·T4·39A（market prices ＋ reflect 杂糅成 market price indicators）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22A（②段的 recruit ＋ ③段的 advertisers）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q21',label:'2013·T1·21B（poor ＋ bargain 分属两个成分，还各换了一次义项，见 R139）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q34',label:'2014·T3·34C（④❸ has long been ＋ ❺ legitimacy 两句拼接再反向）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q39',label:'2015·T4·39B（两张词单各抽一个词）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q26',label:'2016·T2·26A／B／C（并列项拼关系）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q39',label:'2016·T4·39D（⑦❶ ＋ ⑦❷ 拼接）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q38',label:'2017·T4·38A（⑤❷ ＋ ⑤❸ 邻句拼接）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q30',label:'2018·T2·30A（⑤ counteracting ＋ ⑥ over-tweeting ＋ ② trend 三处拼接）'}]},

{id:'R40', tier:'🟡', qt:'标题题 / 全文主旨题', title:'标题题三查：覆盖度 → 褒贬度 → 原词义项',
 trig:['An appropriate title for the text is most likely to be','Which of the following is the best title','四个标题看着都沾边'],
 flow:'① <b>查覆盖度</b>：先把文章分成几块（本篇只有两块：①–④介绍 ｜ ⑤⑥质疑），'
     +'再把每个标题<b>拆成成分</b>逐一去盖——<b>只盖住一半的一律排除</b>；'
     +'② <b>查褒贬度</b>：标题的感情色彩<b>不能比原文更狠</b>；'
     +'③ <b>查原词义项</b>：标题里若有原文出现过的词，<b>回原文核它当时的搭配</b>。',
 tmpl:'<table class="tk"><tr><th>选项</th><th>三查的结果</th></tr>'
     +'<tr><td><code>Fors and Againsts of DNA Testing</code></td>'
     +'<td>✘ <b>覆盖度</b>：Againsts 有（⑤⑥段），<b>Fors 没有</b>——③段的「最受欢迎」是<b>客观事实</b>，不是有人在辩护</td></tr>'
     +'<tr><td><code>DNA Testing and Its Problems</code> ✔</td>'
     +'<td><code>DNA Testing</code> 盖①–④段，<code>Its Problems</code> 盖⑤⑥段——<b>唯一同时盖住两半的</b></td></tr>'
     +'<tr><td><code>DNA Testing Outside the Lab</code></td>'
     +'<td>✘ <b>原词义项</b>：<code>outside</code> 在原文是 <code>outside <b>evaluation</b></code>（外界评估），与实验室无关；且只盖前四段</td></tr>'
     +'<tr><td><code>Lies Behind DNA Testing</code></td>'
     +'<td>✘ <b>褒贬度</b>：后两段只质疑<b>准确性</b>（false precision），未指控是<b>谎言</b>；且盖不住前四段</td></tr></table>'
     +'<p style="margin-top:8px"><b>捷径</b>：<b>纵观其余四道题的题干</b>也能反推标题——26/27 考<b>特点与用途</b>，28/29 考<b>弊端</b>，'
     +'<b>两块都被点到 ⟹ 标题必然是「事物 ＋ 它的问题」这种两半式。</b></p>',
 traps:['<b>「文章里确实很流行」≠「有支持方在论证」</b>——事实陈述不能当成一方的立场，这是 Fors 类选项的通病。',
        '<b>与 R18（先判作者站没站队）配合用</b>：R18 定<b>方向</b>，R40 定<b>范围与力度</b>。',
        '<b>褒贬度查的是<u>方向性</u>错误，不是「标题比原文某一句满」</b>（2013·T3·35）：原文末段 To be sure, the future is not all rosy. But…，正解却是 The Ever-bright Prospects of Mankind——<b>让步是作者替自己堵漏洞，But 后才是立场</b>；四项里只有一个同向时，措辞再满也选它（⟹ <a href="#R151">R151</a>）。',
        '<b>2016·T4·40</b>：覆盖度——D 盖住③–⑦ 的方案，A 只盖②❸／④❶、B 只盖②❶；褒贬度——A 过激（一下子全转）、B／C 守旧（珍惜、永远），D 居中；主体——C 没有 Print，偏离「纸质报何去何从」。',
        '<b>2017·T1·25</b>：覆盖度——A 罩①–⑤ 与⑦，B／D 只罩⑤–⑦ 的方案；褒贬度——C 把「多花时间换安全」拧成「少查换安全」；原词义项——B 的 Belated 与⑥❷ Since the beginning 冲突（⟹ <a href="#R218">R218</a>）。',
        '<b>2017·T3·35</b>：覆盖度——只有 C 装得下 GDP 与 well-being 两根线；褒贬度——D a Window on Global Economic Health 与作者态度相反；A／B 的中心词（Brexit／Kennedy）只是切入点与引子。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q35',label:'2011·T3·35（覆盖度：B/C/D 各只盖一两段）'},{p:'2010_T2_商业方法专利的威胁.html',q:'q30',label:'2010·T2·30（四项对象全对，胜负手在<b>阶段</b>：looming 迫近 vs prevailing 已盛行；C 拿论据当论题且文中有<b>两个</b>案子）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'q30',label:'2009·T2·30'},
       {p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（中性标题 vs 有立场的标题）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q25',label:'2010·T1·25（两要素：对象 ＋ 发生了什么）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q30',label:'2011·T2·30（三查不够用，要再加「主体」与「文体」两查 ⟹ R92）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q35',label:'2012·T3·35（C／D 共享 Credibility，比中心词 Evolution vs Challenge，见 R125）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q35',label:'2013·T3·35（褒贬度的边界：Ever-bright 很满，但四项里唯一与作者同向；⑦❷ To be sure 让步削不动它 ⟹ <a href="#R151">R151</a>）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q40',label:'2014·T4·40（覆盖度：B 只装褒 · D 只罩④⑤；A 是原文标题）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q25',label:'2015·T1·25（覆盖度：三个过窄项各只写一个人；C 与《卫报》原标题同范围）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q35',label:'2015·T3·35（覆盖度：后文三人评价的都是这项举措）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q40',label:'2016·T4·40（标题四项站成一排）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q25',label:'2017·T1·25（问题线罩首尾，方案线只罩后半）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'q35',label:'2017·T3·35（中心词 ＋ 界定成分两查 ⟹ C）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q35',label:'2019·T3·35（覆盖度：B 首尾两句、C 清单一项、D 半句）'}]}
,

{id:'R41', tier:'🔴', qt:'举例目的题 / 写作目的题', title:'举例题的答案不在例子里，在例子服务的那句论点里',
 trig:['The author quotes the example of X to show that','The story of X shows that','X is mentioned to illustrate','The author cites … in order to','例子内部好几个细节都能对上选项'],
 flow:'① <b>先别看例子。</b>回头找<b>例子前面那句论点</b>——它才是例子要证明的东西；'
     +'② <b>拿论点去筛选项</b>，只留能当论点<b>同义改写或子命题</b>的那一项；'
     +'③ <b>例子内部的细节全是素材，不是结论</b>——它们出现在选项里，恰恰因为「在原文里」而「不是原文的意思」。',
 tmpl:'<p><b>路标词（看到就知道下面是为上一句服务的）</b>：<code>After all</code> · <code>That is how…</code> · <code>Consider…</code> · '
     +'<code>Take X for example</code> · <code>For instance</code> · 冒号。<b>其中 <code>After all</code> 最硬：它引出的内容永远是在给<u>前面那句话</u>找理由。</b></p>'
     +'<table class="tk"><tr><th>2009·T3·34 的段落结构</th><th>作用</th></tr>'
     +'<tr><td>❷ <code>continuing <b>economic growth</b> promotes the development of education</code></td><td><b>论点 ⟹ 答案从这里取</b></td></tr>'
     +'<tr><td>❸ <code><b>After all</b>, that is how education got started.</code></td><td><b>路标（往回指）</b></td></tr>'
     +'<tr><td>❹❺ 祖先没时间／<code>Only when</code> 更高效获取食物才有时间</td><td><b>素材，不是结论</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>例子内部还自带一条三环因果链</b>：<b>更高效获取食物 ⟶ 才有时间 ⟶ 教育产生</b>。'
     +'<b>正确项 C（no longer went hungry）截的是<u>起点</u>，干扰项 A（had enough time）截的是<u>中间那一环</u>。</b>'
     +'选起点的理由：<b>只有起点接得回「经济增长」这个论点</b>。</p>',
 traps:['<b>「段内最像」不等于「服务于论点」。</b>2009·T3·34 的 A 项用了原词 <code>time</code>（原文 <code>was there time</code>），'
        +'<b>字面重合度最高，却是错的</b>——Claude 盲做就栽在这里。<b>举例目的题里，含原词的选项要重点怀疑。</b>',
        '<b>原文只说 <code>was there time</code>，没有 <code>enough</code></b>；且 <code>time for <b>other things</b></code> 并不直接等于 education——'
        +'<b>A 的链条到「有时间」就断了，还得再走一步。选项自己缺一环，也是排除依据。</b>',
        '<b>与 R43 配合用</b>：本题的❺句是 <code>Only when A, 倒装B</code>，<b>被 Only 罩住的 A 才是条件</b>——'
        +'<b>语法判据（R43）与论点判据（R41）指向同一个答案，互为交叉验证。</b>',
        '<b>2012·T4·39</b>：威州例子服务的论点在上一句（政客开始收紧）与上一段首句（Reform has been vigorously opposed）——而那一段没有被任何题点名（⟹ R129 空段不空）。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q34',label:'2011·T3·34（丰田：答案在④❷ 论点句，不在例子里）'},{p:'2009_T3_教育与经济增长的真实关系.html',q:'q34',label:'2009·T3·34（Claude 唯一错题）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col2',label:'2009·T3 · 02++ 专栏「错题解剖」'},
       {p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（写作目的题 · 引入方向）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q39',label:'2012·T4·39（论点在没被点名的⑤段）'}]},

{id:'R42', tier:'🔴', qt:'驳论型文章 · 通篇通用', title:'驳论文只有一支箭头：读完第一段就把方向画在卷边，后面每题先过这道闸',
 trig:['is widely misunderstood','the conventional view that … is wrong','Contrary to popular belief','It is commonly assumed that … But','第一段出现明确的否定词'],
 flow:'① <b>认出立靶句</b>（上面那些信号词）；'
     +'② <b>把两支箭头都写下来</b>——靶子的方向、作者的方向，两行字写在卷子边上；'
     +'③ <b>每道题先用箭头过一遍闸</b>：凡选项的因果方向与作者的箭头<b>相反</b>、或把箭头<b>砍断</b>，不必细究措辞就能排掉。',
 tmpl:'<table class="tk"><tr><th>2009·T3 的两支箭头</th><th>出处</th></tr>'
     +'<tr><td><b>靶子</b>：正规教育 ⟶ 经济增长（教育应当优先）</td><td>①❷句 <code>the conventional view … <b>is wrong</b></code> 一句判死</td></tr>'
     +'<tr><td><b>作者</b>：生产力提高 ⟶ 有余暇 ⟶ 教育发展</td><td>④❷句立、⑤❻句收</td></tr></table>'
     +'<p style="margin-top:8px"><b>本篇 5 个干扰项里有 4 个在动这支箭头</b>：'
     +'31C <b>方向反了</b>（传统上是抬高不是低估）· 34B <b>先后颠倒</b>（先教育后温饱）· '
     +'35A <b>起点换人＋抹掉中间环节</b>（加了 directly）· 35B <b>把箭头砍断</b> · 35D <b>又反一次</b>。</p>'
     +'<p><b>拆靶子的两块砖也要认出来</b>：靶子成立的前提是「学历低 ⟹ 生产力低」，'
     +'②段证「教育水平低的<b>国家</b>也能高产」（美国工厂做到日本的 95%），③段证「教育水平低的<b>个人</b>也能高产」（不识字的墨西哥工人达标）。'
     +'<b>两段合起来才把那个连接掐断。</b></p>',
 traps:['<b>边界：这一招只在作者立场明确的驳论文里好用。</b>若文章是<b>中立说明文</b>（如 2009·T2 前四段的客观介绍），没有箭头可画，得换别的招。'
        +'<b>判据：第一段有没有一个明确的褒贬／否定词？</b>',
        '<b>不出题的段落别跳读</b>：2009·T3 的③段一道题都不出，却是④⑤段立论的地基——<b>跳过它，末两段的结论就成了无源之水。</b>',
        '<b>末段推理题可直接用它收尾</b>：题干若问的是全文讨论对象之一，<b>捷径就是「选与全文主旨相符的选项」</b>（35 题即是）。',
        '<b>2010·T3 是驳论文的标准件，而箭头画得比 however 更早</b>：①❷ <code>The idea is intuitively compelling, <b>but</b> it doesn\'t explain…</code>——<b>第一段末尾就已定向，③段的 however 只是把它挑明，不是新信息。</b><br>⚠️⚠️ <b>本篇给出了这张卡最硬的一个数字：十五个干扰项里有<u>八个</u>产自「靶子」那一栏</b>（32A／32B／32C／31C 被否定的理论 ＋ 33B／33C／33D 被排除的例外 ＋ 35B 被落选的变量）。<br>📌 <b>而版面上靶子（①②，7 句）比作者的主张（③，2 句）还长——<u>篇幅 ≠ 重心</u>。</b><br>⭐ <b>判据要带上后半句：凡取材自靶子栏的选项，<u>除非题干专门问靶子</u>，一律不能选</b>（本篇 31 题正是那个「除非」：它问的就是「引用这本书意在什么」）。',
        '<b>2014·T1</b>：驳论专栏的另一种排兵——<b>先替对方把话说完（①②）→ 作者用 you 正面出场（③）→ 再把对方的世界观摆一遍立刻亮底牌（④ But in Osborneland … no longer … Instead）</b>。方向在①❸ 的反问 ＋ ②❶ apparent 就定了：反对新政。五道题里 21、23、25 三题的干扰项都从「对方的话」里取词。'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'col1',label:'2009·T3 · 02+ 专栏「一支箭头」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q31',label:'2009·T3·31（C 把方向掉了个头）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q35',label:'2009·T3·35（A/B/D 各动一次箭头）'},
       {p:'2009_T1_习惯与创新.html',q:'q21',label:'2009·T1·21（同年另一篇驳论文：习惯从敌人改判为工具）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col4',label:'2010·T3 · 02++++ 专栏（十五个干扰项产地总账）'},
       {p:'2013_T3_人类前景的长视角.html',q:'col1',label:'2013·T3 · 02+ 专栏（驳论文 × 今昔对比：两个靶子——被时间否定的昔、被作者否定的今；三个 But 是作者的三次亮相）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'col5',label:'2014·T1 · 02+++++ 专栏（三层归属表）'}]},

{id:'R43', tier:'🟡', qt:'细节题 / 举例目的题（原文含倒装句时）', title:'Only when A, 倒装B：被 Only 罩住的 A 才是重心',
 trig:['原文出现句首 Only 而主句语序古怪','Not until … did …','Only by doing … can …','题目问「X 在什么时候／什么条件下才出现」'],
 flow:'① <b>先把倒装还原</b>：<code>Only when A <b>was there</b> B</code> ⟹ <code>… there was B</code>；'
     +'② <b>认逻辑重心</b>：<code>Only when</code> 强调的是<b>条件的唯一性</b>（非得等到 A 不可）⟹ <b>作者要你记住的是 A</b>，B 只是随之而来的结果；'
     +'③ <b>答题</b>：问「X 在什么条件下才出现」⟹ <b>答被 Only 罩住的 A</b>。<b>把 B 写成答案，就是把结果当条件。</b>',
 tmpl:'<table class="tk"><tr><th>句式</th><th>重心（作者要你记的）</th></tr>'
     +'<tr><td><code>Only when A, 倒装B</code></td><td><b>A ＝ 条件</b></td></tr>'
     +'<tr><td><code>Not until A did B</code></td><td><b>A ＝ 分界时点</b></td></tr>'
     +'<tr><td><code>Only by doing A can B</code></td><td><b>A ＝ 唯一途径</b></td></tr>'
     +'<tr><td><code>No sooner had A than B</code></td><td><b>A ＝ 触发事件</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>一句话记住</b>：<b>倒装是语法上的「重音」——句子把语序拧过来，就是为了让你注意<u>没被拧的那半</u>（前置的条件）。</b></p>'
     +'<p><b>写作也能用</b>：<code>Only when the economy grows can education develop.</code> 比 '
     +'<code>Education develops when the economy grows.</code> 有力得多，<b>作文里用一次倒装是很划算的加分动作。</b></p>',
 traps:['<b>2009·T3·34 的 A 项就是「把结果当条件」</b>：原文 <code>Only when humanity began to get its food in a more productive way <b>was there time</b></code>，'
        +'A 项答的是倒装主句里的 <code>time</code>（结果），正确项 C 答的是 Only 从句里的条件。',
        '<b>与 R41 交叉验证</b>：R43 是<b>语法判据</b>，R41 是<b>论点判据</b>——<b>两条指向同一个答案时，可以放心落笔。</b>',
        '<b>2014·T1·21</b>：<code>Only if the jobless arrive …, register …, and start looking for work will they be eligible for benefit</code>——被 Only if 罩住的三个动作＝方案核心 ⟹ 21C 鼓励积极求职；<b>21D 把 eligible 读成「保障权利」、21B 读成「更易获得」，都无视了 Only if 是在加门槛</b>。'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'s6',label:'2009·T3 · 长难句 s6'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col3',label:'2009·T3 · 02+++ 专栏「Only when 倒装」'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q21',label:'2014·T1·21（Only if 倒装：条件不是承诺）'}]},

{id:'R44', tier:'🟢', qt:'通用 · 选项筛选顺序（作者观点题最常用）', title:'四个选项里若有一对矛盾项，先集中判这一对',
 trig:['两个选项读起来意思正相反','一对选项是同一维度的高／低、增／减、支持／反对'],
 flow:'① 扫一遍四个选项，<b>找有没有两项构成「同一维度的两个反向值」</b>；'
     +'② 有的话，<b>先集中精力判这两项</b>——正确答案通常就在这一对里，常常判完就收工；'
     +'③ <b>回原文验证</b>后再落笔。',
 tmpl:'<table class="tk"><tr><th>2009·T3·31 的四个选项</th><th>维度</th></tr>'
     +'<tr><td><code>is conventionally <b>downgraded</b></code>（C）</td><td rowspan="2"><b>传统观点对「教育重要性」的估价：偏低 vs 偏高</b> ⟹ <b>矛盾对</b></td></tr>'
     +'<tr><td><code>has been <b>overestimated</b></code>（D）✔</td></tr>'
     +'<tr><td><code>is subject to groundless doubts</code>（A）</td><td>质疑有无根据 ——<b>不同维度，不参与这个对子</b></td></tr>'
     +'<tr><td><code>has fallen victim of bias</code>（B）</td><td>评价是否失真 ——<b>不同维度</b></td></tr></table>',
 traps:['<b>这是排序策略，不是判据。</b>① 最终仍要<b>回原文验证</b>，不能因为「它俩相反」就随手挑一个；'
        +'② <b>只在两项确实是同一维度的对立时才成立</b>——若只是「看着相反」而维度不同，不适用。',
        '<b>反过来也能用</b>：<b>若有两个选项都指向原文从未讨论过的维度，正确答案基本在剩下两个里</b>。'
        +'2009·T3·33 的 A（纪律性）与 D（组织性）全文零提及 ⟹ <b>只需在 B、C 之间判。</b>'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'q31',label:'2009·T3·31（C 低估 / D 高估）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col4',label:'2009·T3 · 02++++ 专栏附「矛盾选项优先法」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q33',label:'2009·T3·33（A/D 凭空造维度 ⟹ 反向用法）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q40',label:'2018·T4·40（C quick cure／D more than a Band-Aid：同一喻场、方向相反）'}]},

{id:'R45', tier:'🔴', qt:'细节 / 推理 / 写作目的（凡题干主语是文中人物）', title:'叙述者的动作，不是人物的动作——主语被一个小词偷走',
 trig:['定位句里出现 our / we / one / it is obvious that','选项的关键词一字不差地在原文里，但读着别扭','题干问「文中某群人／某个人怎么样」'],
 flow:'① 回原文找到定位句后，<b>先圈这句话的主语</b>，再看内容——<b>关键词是名词，主语才决定这句话是谁的</b>；'
     +'② 主语若是 <code>we／our／us</code>（作者自称）、<code>one</code>（泛指人们）、<code>it is obvious／clear that</code>（作者下判断）、<code>One wonders／We should not forget</code>（作者对读者说话）'
     +' ⟹ 判定为<b>「叙述者层」</b>——它只能回答「<b>作者怎么安排、怎么评价</b>」，<b>不能</b>回答「文中人物做了什么、想了什么」；'
     +'③ 题干主语若是文中人物，而选项的唯一出处在叙述者层 ⟹ <b>直接排，不必再纠结语义</b>。',
 tmpl:'<table class="tk"><tr><th>原文（主语是谁）</th><th>干扰项（主语被换成谁）</th></tr>'
     +'<tr><td>2009·T4·②❷ <code>in keeping with <b>our</b> examination of southern intellectual life</code><br>主语＝<b>our（作者）</b>：考察南方的是「我们」</td>'
     +'<td><b>37C</b> <code><b>New Englanders</b> paid little attention to southern intellectual life</code><br>安给了<b>新英格兰人</b>，还多加一个原文没有的判断</td></tr>'
     +'<tr><td>2009·T4·④❻ <code><b>One wonders</b> what Dane thought of the careful sermons</code><br>主语＝<b>One（人们／读者）</b>：纳闷的是我们</td>'
     +'<td><b>39C</b> <code><b>Dane</b> was puzzled by church sermons</code><br>安给了<b>丹奈</b>，把「我们想知道他怎么想」写成「他很困惑」</td></tr></table>'
     +'<b>口诀：先圈主语，再读内容；主语是 we／one，答案就不是人物的。</b>',
 traps:['<b>这刀之所以砍得中，是因为「关键词全在」。</b>37C 的 <code>southern intellectual life</code> 是一字不差的原词串，39C 的 <code>sermons</code>＋<code>Puritan churches</code> 也都在原句里。'
        +'<b>习惯用「关键词能不能回文找到」判对错的人，这两项都会亮绿灯。</b>',
        '<b>别矫枉过正：主语是 we 不等于这句话不能用。</b>2009·T4·37B 的正源同样以 we 开头（<code><b>we</b> may consider the original Puritans as carriers of European culture</code>），'
        +'<b>但它的宾语从句在描述清教徒本身</b> ⟹ 合法可用。<b>判据是「这句话最终在说谁」，不是「句子以谁开头」。</b>',
        '<b>与 R21 的分工</b>：R21「主体校验」抓的是<b>两个被谈论对象之间</b>的偷换（谁对谁做了什么）；R45 抓的是<b>叙述者与被叙述者之间</b>那道界线。<b>R21 在文章之内，R45 在文章内外。</b>',
        '<b>2013·T2·28A</b>：⑤❷ <code>Human nature being what it is, most people stick with default settings</code> 是<b>作者</b>交代广告商为什么惊恐，利奥狄斯的话从⑤❹ says 才开始——28A <code>goes against human nature</code> 既换了说话人，<b>又把方向反了</b>（默认 DNT 恰恰顺着人性起作用）。'],
 refs:[{p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q37',label:'2009·T4·37C（our examination 被安给新英格兰人）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q39',label:'2009·T4·39C（One wonders 被安给丹奈）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'col2',label:'2009·T4 · 02++ 专栏（同一把刀一篇连发两次）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q28',label:'2013·T2·28A（作者的交代被安给人物 ＋ 反极性）'}]},

{id:'R46', tier:'🔴', qt:'全局题 / 群体特征题', title:'先问「问的是整体，还是其中一类」——层级不对，内容全对也没用',
 trig:['The text suggests that + 全文反复出现的那个群体','题干不给段号','四个选项各自都能在原文找到出处，却互不相干'],
 flow:'① <b>判层级</b>：看题干主语<b>有没有限定语</b>——<code>early settlers</code>（整体）vs <code><b>less well-educated</b> New Englanders</code>（一类）；'
     +'② <b>若问整体</b>，先删「只涉及某一类细节」的选项；<b>若问某一类</b>，反过来警惕「概括全体」的选项（可能盖得太宽）；'
     +'③ 在剩下的里挑「<b>概括合理、且与各段中心都不冲突</b>」的那个。',
 tmpl:'<table class="tk"><tr><th>2009·T4·40 的选项</th><th>它盖住了谁</th></tr>'
     +'<tr><td><code>[A] mostly engaged in political activities</code></td><td>只盖③段那一小撮<b>政治领袖</b>　✘</td></tr>'
     +'<tr><td><code>[B] motivated by an illusory prospect</code></td><td>只盖④段的<b>丹奈一个人</b>　✘</td></tr>'
     +'<tr><td><code>[C] came from different intellectual backgrounds</code></td><td><b>③＋④＋⑤ 三类全盖</b>　✔</td></tr>'
     +'<tr><td><code>[D] left few formal records for later reference</code></td><td>只盖④段的<b>工匠、农民、仆役</b>　✘</td></tr></table>'
     +'<b>本篇 39 与 40 恰好是一对</b>：39 问<b>一类</b>（less well-educated），40 问<b>整体</b>（early settlers）——<b>两道题必须用相反的尺子量。</b>',
 traps:['<b>这刀的威力在于：它不需要判断选项本身的对错。</b>2009·T4 的 A、B、D 三项<b>就其覆盖的那一类而言全都是对的</b>——'
        +'政治领袖确实从事政治活动、丹奈确实被《圣经》的许诺推动、工匠农民确实没留下作品。<b>它们错的不是内容，是范围。</b><b>抠字眼抠不出这种错，只有对齐层级才能。</b>',
        '<b>反证常常就在别的段里</b>：40D 说「早期移民很少留下正式记录」，而③❸句明说受过教育的那群人 <code>wrote and published <b>extensively</b></code> ⟹ <b>选项用一类人的事实覆盖全体，正好把另一类的反证抹掉了。</b>',
        '<b>与 R24／R38 的分工</b>：R24 抓「推理对了但范围<b>放大</b>」，R38 抓「问的是<b>种</b>还是<b>属</b>」，R46 是这两把刀在<b>全局题</b>上的专用形态——<b>先看题干主语的限定语，再决定找覆盖全体的还是只针对这一类的。</b>'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q32',label:'2011·T3·32（问“一类”却给“一家”）'},{p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q40',label:'2009·T4·40（整体 ⟹ 只有 C 盖住三类）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q39',label:'2009·T4·39（同一批人，但问的是其中一类）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'col3',label:'2009·T4 · 02+++ 专栏（四选项贴到三类人上）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q33',label:'2012·T3·33（问整条链，A／C／D 各是一环）'}]},

{id:'R47', tier:'🟡', qt:'元套路 · 读文章前先判文体', title:'看第二段：讲「谁错了」是驳论文，讲「我打算怎么看」是分类描述型',
 trig:['首段连用 According to… 转述学界定论','第二段主语是 we／our，在交代研究方法','其后各段各起一个人或一群人，彼此并列不冲突'],
 flow:'① <b>读完首段先判文体</b>：首段是「现象＋质疑」（<code>is widely misunderstood</code>／<code>the conventional view … is wrong</code>）⟹ <b>驳论文</b>；'
     +'首段是「研究综述」（连用 <code>According to…</code>，语气接受而非反驳）⟹ <b>分类描述型</b>；'
     +'② <b>再看第二段</b>：讲「谁错了」⟹ 驳论文，<b>读法＝先把箭头方向画在卷边</b>（R42）；讲「我打算怎么看」⟹ 分类描述型，<b>读法＝在每段边上写「这段是第几类人」</b>；'
     +'③ <b>分类描述型的最后一题几乎必是全局题</b>，而全局题的答案＝<b>把各段的「类」加起来</b>（⟹ 转 R46）。',
 tmpl:'<table class="tk"><tr><th>文体（2009 四篇正好四种）</th><th>读法</th></tr>'
     +'<tr><td><b>驳论文</b>（T3 教育与经济增长）</td><td>先画箭头方向，后面每个选项先过这道闸（R42）</td></tr>'
     +'<tr><td><b>论说文·改判型</b>（T1 习惯与创新）</td><td>先找作者把什么<b>改判</b>了（敌人⟹工具）</td></tr>'
     +'<tr><td><b>说明＋批评</b>（T2 DNA 检测）</td><td>先分清哪句是<b>事实</b>、哪句是<b>评价</b>（R37）</td></tr>'
     +'<tr><td><b>分类描述型</b>（T4 新英格兰）</td><td>在段边标「第几类」，末题就是<b>数类</b>（R46）</td></tr></table>',
 traps:['<b>用错读法会白费力气。</b>在 2009·T4 里到处找「作者反对什么」只会一无所获——<b>本文作者不反对任何人，他只是在给一群人分类。</b>',
        '<b>三个信号一起看才准</b>：① 首段是研究综述不是立靶；② 第二段两个 <code>we</code> 开头的句子说的全是作者自己的方法选择；'
        +'③ 其后各段各起一个人／一群人，<b>没有一组是用来反驳另一组的</b>（驳论文里的两组材料必然对立，分类文里的各组只是并列）。',
        '<b>第二段读成「人物怎么样」是最贵的错</b>：2009·T4·②段一旦读成「新英格兰人怎么样」，37 题就会掉进 C（⟹ R45）。'],
 refs:[{p:'2009_T4_新英格兰早期的精神文化生活.html',q:'col1',label:'2009·T4 · 02+ 专栏（五段＝一对象＋一视角＋三类人）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'col4',label:'2009·T4 · 02++++ 专栏（2009 四篇四种文体总账）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col1',label:'2009·T3 · 02+ 专栏（驳论文的一支箭头，对照组）'}]},

{id:'R48', tier:'🟢', qt:'细节题 · 选项窄化', title:'半截复现：选项只截了并列成分的一半',
 trig:['原文出现 both A and B / A as well as B / not only A but also B','选项里只出现其中一项，另一项被悄悄丢掉','选项读着「句句有出处」却总觉得少了点什么'],
 flow:'① 回原文定位后，<b>把定位句里的并列结构完整圈出来</b>（both…and…／A, B, and C）；'
     +'② 逐项核对：<b>选项是否把并列项<u>全部</u>覆盖</b>——只留一半的，是<b>窄化</b>，不是转述；'
     +'③ 窄化项常常还<b>顺手改一个动词或形容词</b>（把事实换成评价），两处毛病叠在一起。',
 tmpl:'<table class="tk"><tr><th>原文 vs 选项</th><th>毛病</th></tr>'
     +'<tr><td>原文：<code>reaching <b>both New World and Old World</b> audiences</code></td><td>两地读者都触及到了</td></tr>'
     +'<tr><td>选项 2009·T4·38A：<code>were famous <b>in the New World</b> for their writings</code></td>'
     +'<td><b>①半截复现</b>（丢掉 Old World，把「影响面广」缩成「在新大陆」）<br><b>②事实⟹评价</b>（reaching audiences 是事实，famous 是评价，⟹ R37）</td></tr></table>',
 traps:['<b>与 R24 是一对</b>：R24「范围校验」抓的是选项<b>放大</b>（把一个人的结论推给一群人），R48 抓的是选项<b>缩小</b>（把两项并列砍成一项）。'
        +'<b>做题时两个方向都要量，别只防放大。</b>',
        '<b>窄化最难察觉，因为它不制造矛盾。</b>「他们在新大陆有名」与原文并不冲突——<b>它只是没把话说全</b>。'
        +'<b>判据只能靠回原文数并列项的个数</b>，靠语感一定漏。',
        '<b>并列结构的三种常见形态都要盯</b>：<code>both A and B</code>（本例）· <code>A, B, and C</code>（2009·T4·④❺句性困惑／经济挫折／宗教期望，被 39B 拆开拼接）· <code>not only… but also…</code>。',
        '<b>2010·T3 给出了半截复现的两个维度</b>：<b>① 名词维度</b>——<b>34D</b> <code>are influenced by the initial influential</code> 只取了链条的「被影响」半截，<b>丢掉的「继而影响他人」正是整段论证的要害</b>；<b>② 情态维度</b>——<b>32B</b> <code>has helped explain certain prevalent trends</code> 把名词部分照抄，<b>只把原文的 <code>seems to</code> 抹掉了</b>：<b>被截走的不是词，是作者对这句话的信任度</b>（⟹ 新卡 <a href="#R66">R66</a>）。',
        '⭐ <b>第三个维度（2010·T4·36D）：动作照抄，<u>态度</u>被截走。</b>原文①❸❹ ＝「准则<b>迫使</b>我们报出巨额损失，<b>这实在不公平</b>」＋「必须按第三方愿付的价格<b>估值</b>」；<b>36D <code>reevaluate some of their assets</code> 只截了「估值」这个动作，把「不利／不公」整块丢掉了</b>（还偷加了个 <code>re-</code>）。<b>⟹ 题干里的 <code>complained</code>（抱怨）就是那半截的锚点：正确项 A 的 <code>unfavorable</code> 正是接住了它。</b><b>凡题干带感情动词（complain / criticize / regret），正确项一定要接住那份感情。</b>',
        '<b>2012·T1 给出第四种形态：破折号插入</b>：<code>positive health habits<b>—as well as negative ones—</b>spread…</code>。'
        +'<b>24A、24D 都只抱住破折号<u>里</u>的 negative ones，丢了破折号<u>前</u>的 positive</b>——<b>破折号插进来的并列成分，正确项必须同时罩住两侧</b>；'
        +'且 <code>A as well as B</code> 的重心在 A，只取 B 的选项更站不住。',
        '<b>一句破折号插入能跨题喂两个干扰项</b>（2013·T1）：<code>although they don’t advertise that</code> 被 22C 改成「劝人抵制广告」、被 25D 升格成「揭露秘密」；而 22B 取的是插入语<u>之后</u>的第二个 to——<b>插入语之后是答案，之内是干扰项</b>。另：题干只问「劝消费者做什么」时，并列两件事答任一件都算对，「只截一半」在这里不是毛病——<b>判截一半是否为错，看题干要不要两件都答</b>。',
        '<b>2014·T1·25D</b>：<code>insure yourself against the risk of unemployment</code> 是④❸ 唯一的正面短语，D 原样搬走，<b>却丢了前面的 is no longer</b>，又把「为风险投保」换成「降低风险」——半截复现 ＋ 动词偷换同时出现（⟹ <a href="#R140">R140</a>）。',
        '<b>2015·T4·40C</b>：⑥❶ 三项否定清单只截了 common humanity 一项，再把「这份报纸」扩成 news reporting、把「流露一点」拔成 central。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q30',label:'2010·T2·30B（只截 <code>protections for patent holders</code>，把「被<b>缩小</b>」整个丢了，方向反转）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q38',label:'2009·T4·38A（both New World and Old World 被砍一半）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q39',label:'2009·T4·39B（三项并列被拆开拼接，对照 R39）'},
       {p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33（R24 范围放大，反方向的对照）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'q34',label:'2010·T3·34D／32B（名词维度＋情态维度）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q36',label:'2010·T4·36D（动作复现、态度丢失）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q24',label:'2012·T1·24A／24D（只抱住破折号里的 negative ones）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q32',label:'2012·T3·32A（scrutiny and acceptance 只截了前一半）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'col2',label:'2013·T1 · 02++ 专栏（插入语之内 vs 之后）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q22',label:'2013·T1·22（B 取第二个 to · C 取插入语）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q25',label:'2014·T1·25D（丢了 no longer）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q40',label:'2015·T4·40C（三取一 ＋ 扩范围 ＋ 拔高）'}]},

{id:'R49', tier:'🔴', qt:'完形 · 比喻/类比句（阅读的比喻句同理）', title:'比喻链：先找「接口词」，比喻的两端一起落地',
 trig:['原文突然冒出一个与话题无关的具体名词（bulbs / fuel / starting line）','上下两句结构对称，却换了主语','出现一个天然双关的形容词：bright / dim / sharp / heavy'],
 flow:'① <b>先认出这是比喻</b>：喻体的名词与话题毫不相干（讲智力，却讲起了灯泡）；<br>'
     +'② <b>找「接口词」——本体与喻体共用的那个双关词</b>。<b>找不到接口，就说明还没看懂这个比喻，别急着选</b>；<br>'
     +'③ 把两栏<b>对齐成一张表</b>（本体的形容词 ↔ 喻体的形容词）；<br>'
     +'④ 按「A之于B ＝ C之于D」<b>补缺的那一格</b>，注意上下句是<b>正向</b>还是<b>反向</b>类比。',
 tmpl:'<table class="tk"><tr><th>本体（智力）</th><th>喻体（灯泡）</th></tr>'
     +'<tr><td><code>smarter</code> flies → live <code>shorter</code> lives</td><td><code>___</code> bulbs → burn <code>longer</code></td></tr>'
     +'<tr><td colspan="2"><b>接口词 ＝ bright</b>（灯泡<b>亮</b>／人<b>聪明</b>）——<b>正因为它双关，这个比喻才成立</b>。'
     +'longer 反 shorter ⟹ 空格反 smarter ⟹ <b>dimmer</b>（dim bulb 在英语里就是「笨脑瓜」）</td></tr></table>'
     +'<b>同一篇里往往不止一套比喻</b>：2009 完形②段还有一整套<b>汽车比喻</b>——<code>a high-priced <b>option</b></code>（选装配置）→ <code><b>upkeep</b></code>（保养费）→ <code>burns more <b>fuel</b></code> → <code>slow off the <b>starting line</b></code>。<b>认出比喻，整段四个空一起松动。</b>',
 traps:['<b>常识对 ≠ 逻辑对。</b>2009 完形 3 题的 stabler（更稳定的灯泡更耐用）完全符合常识，<b>但它与上句的「聪明↔短命」构不成类比关系</b>——比喻题只认对应，不认常识。',
        '<b>方向填反。</b>同题的 lighter（更亮的）方向正好相反；另有词法证据：light 表「明亮」多指天色、房间因自然光而亮，<b>不用于说发光体本身亮</b>。',
        '<b>喻体那一栏的特征词被搬到本体栏。</b>2009 完形 7 题的 spontaneous（自发的、不假思索的）<b>恰恰是 instinct 的特征</b>，被摆到了形容 learning 的位置上——<b>凡对比句里出现「另一侧的特征词」，一律是陷阱。</b>',
        '📌 <b>2014 完形：比喻贯穿全篇、跨两段收口</b>——接口词 exercise 一头一尾（②❷ <code>the brain needs exercise in much the same way our muscles do</code> ⟹ ④❸ <code>much like a(n) ___ exercise routine requires you to increase resistance and vary your muscle use</code>）：7 workouts（把喻体的词搬到本体）· 18 constantly（喻体「一直加、一直变」把答案说白）· 19 build · 20 effective。<b>比喻不一定局部，开头埋下后要一直追到收口</b>。'],
 refs:[{p:'2014_完形_像练肌肉一样练大脑.html',q:'muscle',label:'2014·完形 · 02++ 大脑↔肌肉类比表'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q18',label:'2014·完形·18（喻体一侧把 constantly 说白）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q7',label:'2014·完形·7（workouts，把喻体的词搬到本体）'},{p:'2009_完形_智力的代价.html',q:'q3',label:'2009·完形·3（dimmer，接口词 bright）'},
       {p:'2009_完形_智力的代价.html',q:'q4',label:'2009·完形·4（并列 that 从句同向）'},
       {p:'2009_完形_智力的代价.html',q:'q6',label:'2009·完形·6（汽车比喻的第三件）'},
       {p:'2008_完形_高智商与遗传疾病.html',q:'q2',label:'2008·完形·2（that rare bird，比喻性表语必带同位语）'}]},

{id:'R50', tier:'🔴', qt:'完形 · 连体空（一句里两个空 / 相邻两句各一个空）', title:'连体空先做功能词：方向一定，形容词的档位只剩一个',
 trig:['句首的递进/转折词是空的，而同句或下句还有一个形容词空','The former… The latter… 同骨架','相邻三句结构完全平行','句中已经有一个现成的连接词（however / but），空格却还在句首'],
 flow:'① <b>先做功能词那个空</b>（句首状语、连接词、副词）——它决定<b>方向</b>：递进 / 转折 / 并列 / 因果；<br>'
     +'② 方向一旦落定，同句那个<b>形容词/名词空就必须与它同档</b>，四个选项里通常只剩一个能配上；<br>'
     +'③ <b>判递进不靠语感，靠「列竖行」</b>：把相邻几句的<b>谓语＋宾语</b>抄成一竖行，看程度是不是在爬坡。<br>'
     +'<b>爬坡＝递进（Above all / Most important / What is more）｜ 持平＝并列 ｜ 掉头＝转折。</b>',
 tmpl:'<table class="tk"><tr><th>2009 完形④段的三个目的</th><th>深度</th></tr>'
     +'<tr><td>test us to determine <b>the limits</b> of our patience…</td><td>浅：测<b>量</b></td></tr>'
     +'<tr><td>try to decide what intelligence is really <b>for</b></td><td>中：测<b>用途</b></td></tr>'
     +'<tr><td><b>18 Above all</b>, hope to study a <b>19 fundamental</b> question: are humans <b>aware</b>…</td><td>深：测<b>本质</b></td></tr></table>'
     +'<b>18 定了「这是最重的一项」，19 就只能是 fundamental</b>；错项 equivalent（同等重要）<b>与递进逻辑直接冲突</b>，comprehensive 则是拿句中最大的那个名词（the world）编的。',
 traps:['<b>顺序反了会两道一起丢。</b>先猜形容词、再回头配副词，等于把唯一的硬约束丢掉。',
        '<b>句中已有连接词时，句首那个空就不再是连接词。</b>2008 完形 5 题 <code>___ he, <b>however</b>, might tremble…</code>——转折已由 however 承担，So/Hence 再填因果就打架，答案只能是加强转折的 <b>Even</b>。',
        '<b>形容词空要读冒号/破折号后面的同位语，别读句子里最大的那个名词。</b>2009 完形 19 题的 comprehensive 就是拿 the world 编出来的，而冒号后的问题只聚焦一点：人有没有自觉。',
        '⭐ <b>连体空要能拼成一句完整、不别扭的话——这是最好用的验算。</b>2010 完形 <b>9（enough）与 10（by itself）</b>说的是同一件事：<b>充分性</b>。若 9 填了 excessive／abundant（在谈「量的多少」），<b>10 空的 by itself（单凭它自己）就没有着落</b>。⟹ <b>两个空填完念一遍，念不顺就说明其中一个错了。</b>（配合 <a href="#R73">R73</a>：这两个空其实由上一段的定义句 <code>the <b>very</b> act</code> 一同管着。）',
        '⭐ <b>并列连体空的又一种形态：<code>be free to ___ and have no need to ___</code></b>（2012 完形 12＋13）——一个框架接「本来不敢做的事」（upset 挫败当权者）、一个接「本来不得不做的事」（cultivate 争取支持），<b>合起来念一遍才是「独立」</b>；serve／satisfy 配 free to 就自相矛盾，express 配 no need to 则把「谁给谁支持」弄反了。',
        '<b>2013 完形两组连体空</b>：<b>5＋6</b> <code>fearful of appearing too soft on crime</code>——先用 6 的 soft on 读出「对犯罪手软」，5 的方向（怕）才立得住；<b>17＋18</b> 同一个 if…then 里的条件与结果——17 before 定比较对象，18 drop 的方向由下一句 such a decrease 锁死。',
        '<b>2014 完形 3＋4</b>：<code>___ seemingly innocent, … can potentially have a(n) ___ impact</code>——先做 3 定让步（While），4 自动取与 innocent 相反的 damaging（⟹ <a href="#R176">R176</a>）。',
        '<b>2015 完形 1＋2</b>：<code>That is ___ a study, (18 词的插入语), has ___.</code>——先划插入语、先做功能词 1（从句缺宾语 ⟹ 代词 what），2 就只剩及物动词 concluded。',
        '<b>2016 完形一篇三对连体空</b>：12–13（live … up to a year ＋ until：同一段时间的<b>长度与终点</b>）· 16–17（<code>retains ___ property he or she ___ into the marriage</code>：16 管语法骨架 whatever、17 管画面 brought，<b>先做 16 才看得清 17 的定语从句</b>）· 19–20（偏见 shows up ＋ 冒号后男女 while 对比）。⟹ 连体空里<b>先做管结构的那一个</b>。',
        '<b>2017·完形·19–20</b>：<code>some of it ___ in the brain, where it ___ mood</code>——先定 19 remains（留在脑里），20 的主语才站得住（影响情绪）；vanishes 与 where it influences 自相矛盾。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q1',label:'2015·完形·1＋2（从句缺宾语 ⟹ what ＋ concluded）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q3',label:'2014·完形·3＋4（While 定让步 ⟹ damaging）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q5',label:'2013·完形·5＋6（fearful of … soft on）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q12',label:'2012·完形·12＋13（free to ／ no need to 并列连体空）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q4',label:'2011·完形·4＋5（因果型连体空，见 R105）'},{p:'2009_完形_智力的代价.html',q:'q18',label:'2009·完形·18（Above all，递进链末环）'},
       {p:'2009_完形_智力的代价.html',q:'q19',label:'2009·完形·19（fundamental，与 18 同档）'},
       {p:'2009_完形_智力的代价.html',q:'q16',label:'2009·完形·16（三句平行句互为答案）'},
       {p:'2008_完形_高智商与遗传疾病.html',q:'q5',label:'2008·完形·5（句中已有 however ⟹ 填 Even）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q9',label:'2010·完形·9/10（enough ＋ by itself，连体空互为验算）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q16',label:'2016·完形·16–17（语法骨架 ＋ 画面）'},
       {p:'2017_完形_拥抱有益健康.html',q:'q19',label:'2017·完形·19–20（先定位置、再定作用）'}]},

{id:'R51', tier:'🟡', qt:'完形 · 抽象名词空 / 形容词空', title:'抽象名词空＝上文某个概念的同义复现，答案很少是新概念',
 trig:['the real ___ of X','there is a(n) ___ in doing sth','an adaptive value to ___ intelligence','空格前后没有任何搭配或语法限制，四个选项词性相同'],
 flow:'① <b>先别看选项</b>，回扫<b>上一段</b>，找那个<b>已经被换着说了两三遍的概念</b>；<br>'
     +'② 把它写成一个中文词（本篇＝「代价」），再去四个选项里<b>找它的同义词</b>；<br>'
     +'③ 若空格在<b>问句</b>里，几乎一定是把上文的结论<b>换个词再问一遍</b>——先把上文结论写成一句话，别就着问句猜。',
 tmpl:'<table class="tk"><tr><th>上文说了三遍的概念</th><th>空格</th></tr>'
     +'<tr><td>a <b>high-priced</b> option ／ takes more <b>upkeep</b> ／ burns more <b>fuel</b></td><td><code>the real <b>costs</b> of our own intelligence</code></td></tr>'
     +'<tr><td>an <b>advantage</b> in <b>not being too bright</b></td><td><code>an adaptive value to <b>limited</b> intelligence</code>（两组对应同时成立）</td></tr></table>'
     +'<b>方向感一起背死</b>：cost / price / penalty ＝<b>负</b>；benefit / advantage / merit ＝<b>正</b>；influence / result / effect / consequence ＝<b>中性</b>（须靠上下文给方向）。',
 traps:['<b>中性词撑不起有方向的语境。</b>2009 完形 11 题的 influences / results 都能说得通字面，<b>却给不出「我们自己的智力亏在哪」这层负面语义</b>——中文的「影响」常含贬义，英文的 influence 是中性的。',
        '<b>看似复现上文原词的选项，往往是假朋友。</b>同篇 4 题的 tendency 复现了上一句的 tended，<b>但 a tendency in… 引出的是趋势的主体，不是趋势的内容</b>。',
        '<b>被 Instead of 否定掉的那条路，常被做成选项。</b>11 题的 features（人类智力有何特征）正是本句用 <code>Instead of casting a glance backward…</code> 明确排除掉的方向。',
        '⭐ <b>抽象名词空的最强形态：上文有一句<u>定义句</u>。</b>2010 完形 <b>8 题</b>的 <code>An <b>awareness</b> that they were being experimented upon</code>，就是①段末 <code>the very <b>act</b> of being experimented upon</code> 的第二次说法（<code>being experimented upon</code> 原词复现是识别标志）；<b>13 题</b>的 <code>evidence</code> 同理——它要能被「找到／找不到」并且能<b>证明</b>一个结论，所以 implication（暗指）、source（根源）当场出局。⟹ <b>见 <a href="#R73">R73</a>：定义句与改写句逐成分对齐。</b>',
        '⭐ <b>反向用法：单句成段的过渡段里，抽象名词空的答案在<u>下文</u>。</b>2012 完形 9 题 <code>whether there is still a ___ between the court and politics</code> 独占③段，下文④段两次 <code>apart from politics</code>、⑥段一次 <code>separate from politics</code>——<b>line 就是「分开」的名词形式</b>；它与 barrier 的裁决靠⑤段的让步（法律注定带政治性 ⟹ 只能有界线、不能有屏障）。',
        '⭐ <b>2013 完形：首句关键词被连说两遍，两处都设了空</b>——①❶ background information → 2 <b>external</b> factors → 3 the big <b>picture</b>。<b>反例同篇</b>：9 题 <code>the ___ of an applicant</code> 的答案 success 是<b>上文没出现过的新概念</b>，钥匙在下文③段末 whether to accept him or her；而上文反复出现的 decision 恰是干扰项——<b>名词空先问「归谁」</b>（录取决定归招生官，不归申请者）。',
        '📌 <b>2014 完形：一个概念换了五种说法</b>——mental clarity → mental focus → cognitive functions（8）→ mental sharpness（14）→ memory and attention skills；<b>re- 动词（regain）是回指信号</b>：先回上文找「丢了什么」，空格就填它的同义词。',
        '<b>2015 完形两例</b>：5 题 <code>used in both ___</code>——both 回指上句的两组（朋友对／陌生人对），填它们的上位类名 samples；14 题 <code>&quot;functional kinship&quot; of being friends with ___</code>——of 同位把引号术语翻成白话，functional ⟹ benefits。',
        '<b>2016·完形·11</b>：<code>… couples to bless the ___</code>——句末名词是前文 wedding／married 的换说法，<b>union 的熟词僻义＝婚姻</b>；collection 能回指 a circle of couples，是干扰（祝福对象成了那圈夫妇自己）。',
        '<b>2017·完形·12</b>：<code>among those who got a cold … had less severe ___</code>——上文词族 cold／virus／susceptibility ⟹ symptoms；defeats／errors／tests 离开了医学语境（tests 借 a severe test 钓人）。',
        '<b>2018·完形·2</b>：<code>putting your ___ in the wrong place</code>——On the one hand／On the other hand 说的是同一个东西的两面，空格必是上句 Trust 的同义替身 faith；attention／concern／interest 都说得通却跳出了主题（⟹ <a href="#R247">R247</a>）。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q5',label:'2015·完形·5（both 回指两组 ⟹ samples）'},{p:'2015_完形_朋友是基因上的远亲.html',q:'q14',label:'2015·完形·14（引号术语的白话版 ⟹ benefits）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q14',label:'2014·完形·14（regain ⟹ sharpness＝首段 clarity）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q8',label:'2014·完形·8（functions，memory 的上位词）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q9',label:'2013·完形·9（新概念，答案在下文；decision 换错主人）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q2',label:'2013·完形·2（background information 的改写）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q9',label:'2012·完形·9（过渡段 ⟹ 答案在下文）'},{p:'2009_完形_智力的代价.html',q:'q11',label:'2009·完形·11（costs ← high-priced/upkeep/fuel）'},
       {p:'2009_完形_智力的代价.html',q:'q9',label:'2009·完形·9（limited ← not being too bright）'},
       {p:'2009_完形_智力的代价.html',q:'q4',label:'2009·完形·4（advantage，方向由并列从句定）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q8',label:'2010·完形·8（awareness ← ①段定义句）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q13',label:'2010·完形·13（evidence，能被「找到」的才是它）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q11',label:'2016·完形·11（union＝婚姻，前文婚姻词族的复现）'},
       {p:'2017_完形_拥抱有益健康.html',q:'q12',label:'2017·完形·12（symptoms ← 医学词族）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q2',label:'2018·完形·2（主题词的同义替身 ⟹ faith）'}]},

{id:'R52', tier:'🟢', qt:'元套路 · 完形与阅读通用（读文章时用）', title:'首句被复现 ⟹ 把文章对半切，两半各管一批题',
 trig:['某一段的首句与第一段首句几乎一模一样，只多了一个 also / again / too','同一个句式在文章中段再次出现','段首重复出现同一个主语＋同一个谓语'],
 flow:'① 读到「这句话刚才好像说过」时<b>停一秒</b>，回头核对第一段首句；<br>'
     +'② 一旦确认是复现，<b>就在那里画一刀，把文章切成两半</b>；<br>'
     +'③ <b>后半的前提已经变了</b>（本篇是视角从「人看动物」反转为「动物看人」），<b>别再拿前半的语境去套后半的空/题</b>。',
 tmpl:'<table class="tk"><tr><th>2009 完形</th><th>管哪些空</th></tr>'
     +'<tr><td>①段首 <code>Research on animal intelligence <b>always</b> makes us wonder just how smart humans are.</code></td><td>1–12（人到底有多聪明）</td></tr>'
     +'<tr><td>④段首 <code>Research on animal intelligence <b>also</b> makes us wonder what experiments animals would perform on humans.</code></td><td>13–20（<b>如果动物来研究人</b>）</td></tr></table>'
     +'<b>切开之后，后半整段是虚拟语气（四个 would 并排），13–20 的每一个空都服从「这是一个假设」这个前提。</b>',
 traps:['<b>复现句里那个不起眼的小词，往往就是切口。</b>本篇是 <code>also</code>（还／也）——它宣告「这是第二次 wonder」，不是重复。',
        '<b>别把复现读成「文章在绕圈子」。</b>议论文的首句复现基本都是<b>结构信号</b>：要么开启平行的第二部分，要么在结尾回扣首段（首尾呼应）。',
        '<b>阅读里同样管用</b>：主旨题/标题题若发现文章有这种对称结构，正确项必须<b>同时罩住两半</b>；只覆盖其中一半的选项，是范围塌陷（对照 <a href="#R24">R24</a>）。'],
 refs:[{p:'2009_完形_智力的代价.html',q:'q13',label:'2009·完形·13（④段首句＝折点，宾语被提前）'},
       {p:'2009_完形_智力的代价.html',q:'q14',label:'2009·完形·14（后半的第一个例子：猫在研究人）'},
       {p:'2009_完形_智力的代价.html',q:'q20',label:'2009·完形·20（末空收口，回扣整段问句）'}]},

{id:'R53', tier:'🔴', qt:'新题型 · 选句填空', title:'代词开头的选项：先行词必须在<u>紧邻的上一句</u>——先数距离，再谈内容',
 trig:['某个选项以 he / she / they / this / these / his / their 开头或第一小句就用代词','两个空都能装同一个选项，词面上分不出高下','空格上一句的主语是个<b>理论/现象/抽象名词</b>，而人名在再上一句'],
 flow:'① 七个选项扫一遍，<b>把以代词开头的先挑出来</b>——它们自带最硬的约束，是突破口；<br>'
     +'② 对每个候选空，只看<b>紧邻的上一句的主语</b>：是不是这个代词要指的人/物？<br>'
     +'③ <b>隔了一句就判死</b>：英语在主语已经换过一轮的位置会<b>重提全名</b>，不会继续用代词；<br>'
     +'④ 填完通读时<b>专查代词</b>：每个 he / they / this 都要能在紧邻上句里指到东西。',
 tmpl:'<b>2009 新题型 43/44 就是靠这一条分开的（两个空都能装 A 和 B）：</b>'
     +'<table class="tk"><tr><th>空</th><th>紧邻上一句的主语</th><th>B 项（he became skilled…）能不能进</th></tr>'
     +'<tr><td><b>43</b></td><td><code>Historical particularism</code>（理论，不是人；Boas 在<b>再上一句</b>）</td><td><b>不能</b> ⟹ 43 只能给 A</td></tr>'
     +'<tr><td><b>44</b></td><td><code>Boas felt that…</code>（就是那个人）</td><td><b>能</b>，且是全篇距离最短的一处</td></tr></table>'
     +'<p style="margin-top:8px;font-size:.85rem">旁证：第四段开头写的是 <code>Boas felt…</code> 而不是 <code>He felt…</code>——'
     +'<b>作者自己在这个位置就放弃了代词，说明这个位置的代词指代不成立</b>。</p>',
 traps:['<b>词面呼应会把人骗死。</b>2009 的 B 项开头 <code>particular cultures</code> 与第三段的 <code>historical particularism</code> 是全篇最扎眼的呼应，'
        +'我据此把 B 锁进 43 ⟹ <b>43、44 一起错，丢 4 分</b>。',
        '<b>选句填空的错误天然成对</b>：一次判断失误，两个空同时报废。所以宁可在一对连体空上多花两分钟。',
        '<b>指示代词同理</b>：this / these / such 也要求先行词紧邻（2008 的 <code>These printouts</code> 就是靠这一条锁死 C 项）。',
        '<b>2012·新题型·41</b>：C 的 <code>they</code> 与 <code>such a device</code> 双双在紧邻上句找到先行词（一群天才、斗士、企业家 ＋ a fabulous machine）——代词与概括名词同时回指，是最稳的一种头钩。<b>42 反过来用这条</b>：下一句 <code>I call it a secret war</code> 的 it 需要紧邻的先行词，空格必须提供它。',
        '<b>2013·新题型</b>：三个指示词开头的选项先行词都合格——E <code>These issues</code>（紧邻上句四个全球挑战）· F <code>Despite these factors</code>（<b>跨段</b>，但先行词就在上段末句「组织与分配」，仍算紧邻）· B <code>these keywords</code>。<b>距离合格的选项不止一个时（41 题 D、E、F 都挂得上），本卡定不了答案，交给尾钩</b>（<a href="#R159">R159</a>／<a href="#R160">R160</a>）。',
        '<b>2015·45</b>：A 开口就是 that text，先行词在紧邻上句 ⑤❶ a given text ⟹ 45；放到 44，④❶ 里没有 text 可指——A、B 同在 we 区，靠距离一刀分开。'],
 refs:[{p:'2009_新题型_文化人类学理论.html',q:'q43',label:'2009·新题型·43（我在这翻的车）'},
       {p:'2009_新题型_文化人类学理论.html',q:'q44',label:'2009·新题型·44（零距离先行词）'},
       {p:'2009_新题型_文化人类学理论.html',q:'q41',label:'2009·新题型·41（He argued 紧贴 Spencer argued）'},
       {p:'2008_新题型_如何写作初稿.html',q:'q44',label:'2008·新题型·44（These printouts）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q41',label:'2012·新题型·41（they ＋ such a device）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'q42',label:'2013·新题型·42（these factors 跨段紧邻）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q45',label:'2015·新题型·45（that text 紧贴 a given text）'}]},

{id:'R54', tier:'🔴', qt:'新题型 · 选句填空', title:'术语的定义句必须早于它的裸用——「This theory was known as X」是个站位标记',
 trig:['某个选项里出现 <code>This theory/idea was known as X</code>、<code>X, or Y,</code>、<code>what we call X</code> 这类<b>命名句</b>','正文后面某处直接使用一个专业术语却不作解释','文章是学说史/概念史，一段引入一个术语'],
 flow:'① 在正文里找<b>第一次不加解释就直接使用</b>该术语的地方（本篇是第五段 <code>in favor of diffusionism</code> / <code>according to diffusionists</code>）；<br>'
     +'② <b>带命名句的那个选项，必须站在这个位置之前</b>；<br>'
     +'③ 若有多个空都在它之前，再用 R53（指代）与行文结构（总—分—分）二次筛。',
 tmpl:'<b>2009 新题型 43 的第二条证据：</b>'
     +'<table class="tk"><tr><th>位置</th><th>文本</th><th>说明</th></tr>'
     +'<tr><td>43 空（A 项末句）</td><td><code>This theory was known as diffusionism.</code></td><td><b>首次命名</b></td></tr>'
     +'<tr><td>第五段②③句</td><td><code>in favor of diffusionism</code> / <code>according to diffusionists</code></td><td><b>裸用、不再解释</b></td></tr></table>'
     +'<p style="margin-top:8px;font-size:.85rem">同一段还并提了 <code>historical particularism</code>，两个对立术语在同一段点名 ⟹ 第三段是「总」，第四、五段各是一「分」。'
     +'<b>把 A 挪到 44，行文就成了「讲特殊论→接着讲特殊论→冒出传播论→又回去总结特殊论→再讲传播论」的穿插跳跃。</b></p>',
 traps:['<b>别只顾着找「意思像」的落点</b>：命名句的价值不在内容，在<b>站位</b>——它是文章给读者发的通行证，发得晚了后文就读不懂。',
        '<b>反向也成立</b>：某个空之后立刻出现某术语的裸用，那这个空多半就该填带命名句的那一项。',
        '<b>2012·新题型 给「反向也成立」补了两个实例</b>：① 正向——downloading／uploading、passive consumption 全文首现在 D，并用破折号下了定义，④❹ 起全部裸用 ⟹ D 只能进 42（④❹ 之前唯一的空）；② 反向——多余项 B 裸用 stickiness，而第八段才用引号给它下定义 ⟹ B 只能站在第八段之后，那里没有空。<b>本卡的原理放大一步就是 <a href="#R136">R136</a> 尾钩</b>。'],
 refs:[{p:'2009_新题型_文化人类学理论.html',q:'q43',label:'2009·新题型·43（diffusionism 的命名句）'},
       {p:'2009_新题型_文化人类学理论.html',q:'q45',label:'2009·新题型·45（For example 要求上句是被举例的观点）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q42',label:'2012·新题型·42（D 是下载／上传的定义点）'}]},

{id:'R55', tier:'🔴', qt:'新题型 · 元套路（选句填空专用）', title:'判据有优先级：形式在前、内容在后；两空互相牵制时先做「有硬排除」的那个',
 trig:['两个选项都塞得进同一个空','靠“哪个更像”已经分不出来','手上有一对连体空'],
 flow:'<b>把判据按可靠性排队，从上往下用；<u>下面的永远不能推翻上面的</u>：</b><br>'
     +'　<b>① 指代距离</b>（he/they/this/these 的先行词是否紧邻）＝ 最硬，见 <a href="#R53">R53</a>；<br>'
     +'　<b>② 术语首现</b>（命名句必须早于裸用）＝ 次硬，见 <a href="#R54">R54</a>；<br>'
     +'　<b>③ 例证词</b>（For example / such as 之前必须有被举例的观点）；<br>'
     +'　<b>④ 连接词</b>（Thus 要上句是刚说完的观点；Other/But 要上句是被对照的一方）；<br>'
     +'　<b>⑤ 内容相似</b>（唯一词、同义改写）＝ <b>最弱，最后才用</b>。<br>'
     +'<b>再加一条分配原则</b>：五空七项是<b>一次整体匹配</b>，不是五道独立的题。'
     +'两个空互相牵制时，<b>先落定那个「对某一项有硬排除」的空</b>，剩下的自动落位。',
 tmpl:'<b>2009 与 2008 同为选句填空，钥匙完全不同：</b>'
     +'<table class="tk"><tr><th></th><th>2008《如何写作初稿》</th><th>2009《文化人类学理论》</th></tr>'
     +'<tr><td><b>文章是什么线</b></td><td>流程线（每段一个步骤）</td><td>人物线（每段一位学者）</td></tr>'
     +'<tr><td><b>主刀判据</b></td><td>唯一词（第 ⑤ 条就够）</td><td>指代与站位（必须用第 ①②③ 条）</td></tr>'
     +'<tr><td><b>盲做结果</b></td><td>5/5</td><td><b>3/5</b>（43↔44 对调）</td></tr></table>'
     +'<p style="margin-top:8px;font-size:.85rem"><b>为什么人物线文章里唯一词法必然失灵</b>：同一位学者名下的话题词会在他的<b>所有</b>段落反复出现'
     +'（Boas 那两段里 particularism / particular cultures / uniqueness / unique history 是一团互相呼应的词云），'
     +'词面根本分不出哪一段。<b>而形式约束是唯一的：he 只有一个合法落点。</b></p>',
 traps:['<b>认出变体只是第一步（<a href="#R32">R32</a>），还要再认一次「文章是什么线」</b>——变体相同 ≠ 打法相同。',
        '<b>贪心地先定「我觉得最像的那个空」，是连体空翻车的标准姿势。</b>正确顺序是先找硬排除，让约束传播。',
        '<b>套路库早就写过这一条却没用上</b>：R32 的第一条陷阱原话是「拿概括段落主旨的手感去做选句填空 ⟹ 忽略指代与照应，43/44 这种连体空必翻车」——'
        +'2009 我正是这么翻的。<b>写下来不等于调用得出来，考前要把「代词先数距离」做成动作，不是知识。</b>',
        '<b>2012·新题型 给优先级表补一条与 ① 同级的判据：尾钩</b>（下文把一个没出现过的词当已知信息用 ⟹ 空格必须引入它，见 <a href="#R136">R136</a>）。45 题头钩打平（B、E、G 都沾得上），靠的就是尾钩一击即中。',
        '<b>人称也是形式判据</b>（2015）：you／we／第三人称不看内容就能先把七项分区，排在一切内容判断之前（<a href="#R195">R195</a>）。'],
 refs:[{p:'2009_新题型_文化人类学理论.html',q:'',label:'2009·新题型（00 节判据优先级表 · 02+ 错题标本）'},
       {p:'2008_新题型_如何写作初稿.html',q:'',label:'2008·新题型（唯一词五连）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q45',label:'2012·新题型·45（头钩打平，尾钩定胜负）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'person',label:'2015·新题型 · 02+ 人称分区表'}]},

{id:'R56', tier:'🟡', qt:'新题型 · 多余项', title:'学说史/人物线文章：一段一位学者，先给七项分区——没有空的那一区就是多余项',
 trig:['文章每段引入一位学者/一种理论/一个流派（Spencer、Morgan、Boas、Durkheim）','选项里出现 Other anthropologists / Supporters of the theory / They also 这类<b>群体主语</b>','段落之间靠年代推进（in the 1860s / in the late 1800s / in the early 1900s）'],
 flow:'① 读完先在卷边给每一段写一个<b>人名或理论名</b>（这就是文章的分区图）；<br>'
     +'② 给七个选项也各贴一个区；<br>'
     +'③ <b>数一数：哪个区没有空？那个区的选项直接划掉。</b>剩下的再逐空匹配。',
 tmpl:'<b>2009 新题型的分区图（六区五空）：</b>'
     +'<table class="tk"><tr><th>区</th><th>内容</th><th>空 / 候选项</th></tr>'
     +'<tr><td>①Spencer</td><td>进化论 · 万物趋向完美</td><td>41 ⟸ <b>C</b></td></tr>'
     +'<tr><td>②Morgan</td><td>文化各方面随社会进化共变</td><td>42 ⟸ <b>E</b></td></tr>'
     +'<tr><td>③Boas 总</td><td>特殊论登场，<b>并提</b>对立的传播论</td><td>43 ⟸ <b>A</b>（B 被指代规则排除）</td></tr>'
     +'<tr><td>④Boas 分</td><td>每种文化＝独特历史的产物</td><td>44 ⟸ <b>B</b></td></tr>'
     +'<tr><td>⑤传播论</td><td>成就源于少数天才民族、随后扩散</td><td>45 ⟸ <b>G</b></td></tr>'
     +'<tr><td>⑥功能论</td><td>Durkheim · 宗教强化社会团结</td><td><b>没有空</b> ⟹ <b>D、F 多余</b></td></tr></table>'
     +'<p style="margin-top:8px;font-size:.85rem">与 <a href="#R31">R31</a>（流程型文章按时间线分格）是同一把刀的两种握法：'
     +'<b>流程线按「步骤」分格，人物线按「学者」分区</b>，多余项都藏在<b>没有坑的那一格/那一区</b>。</p>',
 traps:['<b>多余项可以成对来自同一区</b>：2008 的两个多余项死法各不相同（阶段错位 / 专名撞车），2009 的 D、F 却是同一区一起死。',
        '<b>最像的干扰项是「万能壳＋专属瓤」</b>：F 项的壳 <code>Supporters of the theory</code> 能挂在任何理论后面，'
        +'瓤却是功能论的定义（各部分协同维持社会运转）。<b>判完壳一定要再判瓤。</b>',
        '<b>群体主语并不天然指向前一句</b>：D 项的 <code>They also focused on</code> 表面能接上第五段的 Some (anthropologists)，'
        +'但传播论者关注的是起源与扩散，不是仪式。',
        '<b>分区的依据不只是人物</b>（2015）：按人称分 you 区／we 区——F 第三人称无区 ⟹ 多余；D 所在的 you 区两格被 C、E 占满 ⟹ 多余（<a href="#R195">R195</a>）。'],
 refs:[{p:'2009_新题型_文化人类学理论.html',q:'',label:'2009·新题型（01 节分区表 · 03 节两个多余项）'},
       {p:'2008_新题型_如何写作初稿.html',q:'',label:'2008·新题型（流程线的时间线分格）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'person',label:'2015·新题型 · 人称分区：F 无区、D 所在区满员'}]},
{id:'R57', tier:'🔴', qt:'事实细节 · 群体特征题（be characterized by / features of）', title:'特征词有据 ≠ 载体有据：把选项拆成「特征词 ＋ 载体名词」，分两次核',
 trig:['题干出现 be characterized by / What are the features of / What is true of X','四个选项都是「形容词＋名词」的短语，不是完整句子','四个选项的形容词回原文<b>全都找得到出处</b>'],
 flow:'⚠️ <b>这是 2010·T1·22 立的卡，也是「原文有没有这个词」这条常用判据<u>彻底失效</u>的一道题</b>——'
     +'四个选项的形容词分别对应第三段的 <code>unfocused</code>／<code>stylish</code>／<code>in detail and at length</code>／<code>a serious business</code>，<b>四个全都真在原文里</b>。<br>'
     +'① <b>拆</b>：把选项劈成<b>特征词</b>（形容词/副词）＋<b>载体名词</b>（它修饰的那个东西）；<br>'
     +'② <b>核前半</b>：特征词在原文有出处吗？<b>有出处还要再问方向对不对</b>（stylish 讲究 ⟹ casual 随意，就是方向反了）；<br>'
     +'③ <b>核后半（胜负手）</b>：<b>回原文看这个特征词修饰的是<u>哪个名词</u></b>，与选项里的名词是不是同一个东西。<b>不同 ⟹ 直接排，不必再纠结前半有多像。</b>',
 tmpl:'<b>2010·T1·22 的四项，把三种动法演全了：</b>'
     +'<table class="tk"><tr><th>选项 ⟸ 原文词</th><th>动了哪一半</th></tr>'
     +'<tr><td><b>[A] free themes</b> ⟸ <code>unfocused</code></td><td><b>两半都对</b>：unfocused 修饰的就是 reviews 本身，说的正是<b>选题</b></td></tr>'
     +'<tr><td>[B] casual <b>style</b> ⟸ <code>stylish</code></td><td><b>动前半</b>：载体没错，<b>特征词读反了</b>（讲究 ⟹ 随意）</td></tr>'
     +'<tr><td>[C] elaborate <b>layout</b> ⟸ <code>in detail and at length</code></td><td><b>动后半</b>：形容词对得上，<b>但原文详尽的是「写的内容」，选项贴到了「版面布局」上——全文没提过排版</b></td></tr>'
     +'<tr><td>[D] radical <b>viewpoints</b> ⟸ <code>a serious business</code></td><td><b>换维度</b>：serious 说的是<b>工作态度</b>，与「持什么观点」无关</td></tr></table>'
     +'<p style="margin-top:8px"><b>正确项还有一个加分特征：能被<u>另一段</u>独立支持。</b>'
     +'A 项除了③❶句的 unfocused，还有①句 <code>the decline in the <b>scope</b> of arts coverage</code>（范围在缩 ⟹ 昔日范围广）在呼应。'
     +'<b>一个选项能同时被两段支持，可以直接定。</b></p>',
 traps:['<b>C 这类「动后半」的干扰项最阴险，因为它的破绽在「原文<u>没说</u>什么」，而不在「原文说错了什么」。</b>'
        +'详尽的评论配上精心的版面，完全符合常识想象——<b>而「读着顺」恰恰是命题人设计出来的。</b>'
        +'<b>动作：把载体名词单独回文搜一遍（本题搜 layout / design / typography），一个也搜不到，就是加出来的。</b>',
        '<b>与 <a href="#R21">R21</a>（主体校验三问：谁／对谁／做了什么）分工明确</b>：'
        +'<b>R21 管<u>动作句</u></b>（谁做了什么），<b>R57 管<u>特征句</u></b>（什么东西是什么样的）。'
        +'<b>两张卡合起来，覆盖「选项与原文对不上」的两大类：动作错位 与 特征错位。</b>',
        '<b>特征词的「方向」也要核，不只是「有没有」。</b>stylish（褒：文体讲究）与 casual（中性偏贬：随意）在中文里都可以译成「风格……」，'
        +'<b>但一个说的是「下了功夫」，一个说的是「没下功夫」。见到形容词，先给它标一个褒/贬/中性。</b>',
        '<b>猜生词要走两条路互证</b>：本题的 <code>unfocused</code> 既可以靠<b>构词法</b>（un- ＋ focused ⟹ 不聚焦 ⟹ 题材不限），'
        +'也可以靠<b>与首段呼应</b>（decline in scope ⟹ 昔日范围广）。<b>两条路指向同一个意思，就可以放心用；只有一条路时要多留一分怀疑。</b>'],
 refs:[{p:'2010_T1_报纸艺术评论的衰落.html',q:'q22',label:'2010·T1·22（四个特征词全部有据）'},
       {p:'2010_T1_报纸艺术评论的衰落.html',q:'col1',label:'2010·T1 · 02+ 专栏（三步动作 ＋ 三种动法）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q22',label:'2011·T1·22（姊妹刀：R57 查载体，R84 查正负号）'}]},

{id:'R58', tier:'🔴', qt:'人物观点题 · 引语', title:'引语里的态度分两层：他自己的，和他「引来当靶子」的',
 trig:['人物观点出现在<b>直接引语</b>里','引语里出现 define A as B / call it B / a term of contempt / what people call…','引语里带明显褒贬的词，而选项恰好把这个褒贬安给了说话人'],
 flow:'⚠️ <b>这是 2010·T1·23 立的卡，是 <a href="#R45">R45</a>（叙述者的动作 ≠ 人物的动作）的第二把刀，也更隐蔽。</b><br>'
     +'<b>R45 分的是两个人</b>（作者 vs 文中人物），<b>版面上是分开的</b>（一个在正文，一个在引号里）；<br>'
     +'<b>R58 分的是<u>同一个人嘴里的两层话</u>，而且两层都装在同一对引号内——版面上没有任何分界，只能靠语义切。</b><br>'
     +'① 先找出引语的<b>主干判断</b>（说话人自己的观点，通常在句子前半）；<br>'
     +'② 再找出引语里被<b>当作谈论对象</b>的那个「说法」（define / call / a term of… 后面的东西）；<br>'
     +'③ <b>第二部分里的褒贬，归属于<u>使用那个说法的人</u>，不归说话人。</b>',
 tmpl:'<b>2010·T1·23 的两层（纽曼的原话）：</b>'
     +'<table class="tk"><tr><th>层</th><th>态度归属</th></tr>'
     +'<tr><td><b>第 1 层 · 他自己的判断</b><br><code>So few authors have brains enough … to keep their own end up in journalism</code>'
     +'　⟹ 能胜任报刊撰稿的作家太少了</td><td><b>✔ 纽曼的观点</b> ⟹ 正解 <code>Not all writers are capable of journalistic writing</code></td></tr>'
     +'<tr><td><b>第 2 层 · 他引来挖苦的说法</b><br><code>define ‘journalism’ as ‘a term of <b>contempt</b> applied by writers who are not read to writers who are’</code></td>'
     +'<td><b>✘ 这份轻蔑属于「没读者的作家」</b>，不是纽曼的主张 ⟹ 干扰项 <code>It is contemptible for writers to be journalists</code> 正好读反</td></tr></table>'
     +'<p style="margin-top:8px"><b>三个可执行的信号词</b>：'
     +'<b>① <code>define A as B</code> / <code>call it B</code> / <code>describe it as B</code></b>——B 是一个「说法」，不是说话人的判断；'
     +'<b>② <code>a term of contempt</code> / <code>a dirty word</code> / <code>what people call…</code></b>——凡把某个词本身当成谈论对象的表达，其中的褒贬属于使用那个词的人；'
     +'<b>③ <code>I am tempted to…</code> / <code>one might say…</code> / <code>it is fashionable to say…</code></b>——带自嘲或戏谑口吻的框架句，后面跟的是半开玩笑借用的说法。</p>',
 traps:['<b>双保险：观点题的答案必须能与<u>紧邻的上下文</u>接上气。</b>'
        +'2010·T1 的③❹句刚说完这些人「以撰稿为天职、以见报为<b>荣</b>（proud）」，'
        +'下一句就得出「做记者可耻」，<b>逻辑上根本接不上——接不上，就是切错层了。</b>',
        '<b>同一句引语常常同时被用来造两个干扰项</b>：2010·T1·23 的 B 偷的是 <code>contempt</code>（态度的归属错），'
        +'C 偷的是 <code>tempted</code>（主语与宾语全换：纽曼想「下定义」⟹ 作家被「新闻业」吸引）。'
        +'<b>一句话被切成两个诱饵，说明它就是本题的命脉句，值得逐字读三遍。</b>',
        '<b>还要防「情态偷换」这一路</b>：同题 A 把 <code>believed in journalism as a <b>calling</b></code>（天职，<b>主观意愿</b>）'
        +'写成 <code>It is writers’ <b>duty</b></code>（职责，<b>客观要求</b>），<b>顺手还把「这几个人这么想」放大成了「作家都该这样」——一句话动了两处。</b>',
        '<b>2015·T2·28D</b>：④❶ 钱包的比方装在 <code>California’s lame argument that …</code> 里、被 discarding——作者引来当靶子的比方，D going through one’s wallet 把它安到作者头上。'],
 refs:[{p:'2010_T1_报纸艺术评论的衰落.html',q:'q23',label:'2010·T1·23（B 项 contemptible）'},
       {p:'2010_T1_报纸艺术评论的衰落.html',q:'col2',label:'2010·T1 · 02++ 专栏（两层态度拆解 ＋ 三个信号词）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'col2',label:'2009·T4 · R45（同族的第一把刀）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q22',label:'2011·T1·22（加强版：他的话 vs 别人对他这句话的反应）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q28',label:'2015·T2·28D（加州的比方当作者的）'}]},

{id:'R59', tier:'🔴', qt:'事实细节题（What can be learned about X…）', title:'两步切入：先以题干主角为心，扫不出判据就改以「各选项的真主语」为心',
 trig:['题干是 What can be learned about X / Which of the following is true of X','四个选项的主语被统一写成 <b>His / Its / Their ＋ 名词</b>','以 X 为关键词回原文，只能核出一两项，其余悬着'],
 flow:'⚠️ <b>这是 2010·T1·24 立的卡。本题的难点不在读懂，而在<u>知道该拿哪个词回去找</u>。</b><br>'
     +'<b>四个选项的语法主语都是「他的某样东西」，但它们<u>真正论述的对象</u>各不相同</b>——'
     +'A 论 <code>readers today</code>、C 论 <code>modern specialists</code>、D 论 <code>the amateur tradition</code>，<b>只有 B 真以主角为心。</b><br>'
     +'<b>第一步（以主角为心）</b>：把题干那个人／物当检索词扫一遍指定范围，<b>能当场排掉的先排掉</b>；<br>'
     +'<b>第二步（以选项的真主语为心）</b>：剩下的选项，<b>各自把「除主角外最实的那个名词」拎出来当检索词</b>，回文找它与主角的关系。',
 tmpl:'<b>2010·T1·24 的两步：</b>'
     +'<table class="tk"><tr><th>选项的真主语</th><th>该回哪一句 ⟹ 判</th></tr>'
     +'<tr><td><b>reputation</b>（唯一真以主角为心的）</td><td>④❶❷❺ <code>forgotten / known solely as / unknown</code> ⟹ 原文说他<b>被遗忘</b>，选项说他<b>有争议</b>。'
     +'<b>被遗忘＝没人谈；有争议＝很多人在谈——两者互斥，第一步就排掉</b></td></tr>'
     +'<tr><td><b>readers today</b></td><td>⑤❸ <code>postmodern readers <b>have little use for</b> …</code> ⟹「不怎么喜欢」＝ <code>may not appeal to</code> <b>✔ 正解</b></td></tr>'
     +'<tr><td><b>modern specialists</b></td><td>④❺ <code>unknown <b>save to</b> specialists</code>（save ＝ except）⟹ 这是<b>客观结果</b>（只剩专家还知道他），'
     +'选项说成<b>主观动机</b>（专门写给专家看）；且他的文风是<b>旧</b>的，与 modern 也对不上</td></tr>'
     +'<tr><td><b>the amateur tradition</b></td><td>⑤❹ <code>the amateur tradition … in headlong retreat</code> ⟹ 这是「难以复兴」的<b>第二条理由</b>，'
     +'言下之意<b>他本人正属于这个传统</b>（原文出处标题即 <i>The Amateur as Critic</i>）；选项说他「未能遵循」，读反了</td></tr></table>'
     +'<p style="margin-top:8px"><b>只做第一步会怎样</b>：A、C、D 在原文里都找不到「以主角为主语」的对应句，'
     +'<b>于是三项会一直悬着，最后只能靠语感二选一。</b></p>',
 traps:['<b>与 <a href="#R1">R1</a> 的分工</b>：<b>R1 解决「找到句子之后怎么比同义替换」，R59 解决更前一步的「该拿什么词去找」。</b>'
        +'<b>检索词拿错了，R1 再熟也用不上。</b>',
        '<b>选项主语被统一成「His ＋ 名词」是<u>刻意的伪装</u></b>：它让四项看起来都在谈主角，'
        +'<b>实际上宾语或介词短语里那个名词才是真正的论述对象。</b><b>动作：读选项时把宾语／介词短语里的实名词圈出来。</b>',
        '<b>第一步排掉的那一项，往往是「把落差误读成争议」这一类</b>：'
        +'传记式段落爱把<b>昔日荣耀</b>与<b>今日凋零</b>贴在一起写，<b>落差是作者刻意造的，但落差本身不是观点</b>——'
        +'<b>见到 in dispute / controversial / debated，回原文找有没有「两方在争」，没有就是加出来的。</b>'],
 refs:[{p:'2010_T1_报纸艺术评论的衰落.html',q:'q24',label:'2010·T1·24（四项四个真主语）'},
       {p:'2010_T1_报纸艺术评论的衰落.html',q:'col3',label:'2010·T1 · 02+++ 专栏（两步切入表）'}]},

{id:'R60', tier:'🟡', qt:'长难句 · 结构（阅读与翻译通用）', title:'结构被切成两半：引语中的 so…that、被撑开的 applied…to、承前省略的 who are',
 trig:['引语中间插着 <code>X said / wrote / argued</code>','句中出现孤零零的 <code>so</code> 或 <code>that</code>，找不到另一半','并列结构的后一半只写到助动词就断了（… who are not read to writers who <b>are</b>）'],
 flow:'<b>2010·T1 的③❺句把三个坑叠在了一起，是这一年的头号难句：</b><br>'
     +'<code>"So few authors have brains enough … to keep their own end up in journalism," Newman wrote, "that I am tempted to define …"</code><br>'
     +'① <b><code>So … that …</code> 被 <code>Newman wrote</code> 和引号切成两半</b>——so 在前引号里，that 在后引号里，<b>它们是同一个结构</b>；<br>'
     +'② <b><code>applied … to …</code> 被七个词的 by 短语撑开</b>：<code>a term of contempt <b>applied</b> <u>by writers who are not read</u> <b>to</b> writers who are</code>；<br>'
     +'③ <b>句末 <code>writers who are</code> 后省略了 <code>read</code></b>（＝ 有人读的作家），与前面的 <code>who are not read</code> 构成对照。',
 tmpl:'<table class="tk"><tr><th>坑</th><th>判据与动作</th></tr>'
     +'<tr><td><b>引语被从中间切开</b></td><td><b>先把两段引文接起来当一句读，再找结构词。</b>'
     +'见到孤零零的 so / that / not only，第一反应是<b>「另一半在引号的另一边」</b></td></tr>'
     +'<tr><td><b>成对搭配被撑开</b></td><td><b>先把 <code>apply A to B</code>、<code>distinguish A from B</code>、<code>regard A as B</code> 这类搭配接回去，再补中间的修饰。</b>'
     +'🔗 这正是 <b>2009 翻译（杜威）</b>整篇的那把刀「成分被撑开」，<b>它在阅读里同样出现</b></td></tr>'
     +'<tr><td><b>承前省略</b></td><td><b>并列结构的后一半只保留到助动词为止 ⟹ 必是承前省略</b>，把前一半的动词补回去</td></tr></table>'
     +'<p style="margin-top:8px"><b>同一篇里还有两处对照可以一起记</b>：'
     +'④❸句 <code>a stylist <b>so</b> widely admired <b>that</b> his Autobiography became a best-seller</code> 的 so…that 是<b>完整</b>的；'
     +'⑤❸句 <code>the prose <b>in which</b> he specialized</code> 则是<b>介词提前</b>（还原 ＝ he specialized <b>in</b> the prose）。'
     +'<b>同一个结构，一处完整、一处被切开——本篇一次考两遍。</b></p>',
 traps:['<b>主谓被撑开也算同一族</b>：2010·T1·④❷句 <code>Neville Cardus, <u>who wrote for the Manchester Guardian from 1917 until shortly before his death in 1975,</u> is now known solely as…</code>'
        +'——<b>主谓之间隔了 14 个词。读法只有一条：先跳过两个逗号之间的部分，把主谓接上，读通了再回头补从句。</b>',
        '<b>省略最容易被读漏的信号是「句子突然结束在一个 be 动词上」</b>：'
        +'<code>… to writers who <b>are</b>.</code> 后面什么都没有，就是在告诉你「这里省了前面出现过的那个词」。',
        '<b>结构读错的代价是整句反向</b>：若没看出 so…that 跨引号，'
        +'前半句会被读成一个独立的感叹（「有本事的作家真少啊」），<b>后半句就成了无源之水，进而更容易把 contempt 当成纽曼自己的态度</b>（⟹ <a href="#R58">R58</a>）。'],
 refs:[{p:'2010_T1_报纸艺术评论的衰落.html',q:'s6',label:'2010·T1 · s6（三坑叠加的头号难句）'},
       {p:'2010_T1_报纸艺术评论的衰落.html',q:'s7',label:'2010·T1 · s7（主谓被撑开 14 个词）'},
       {p:'2009_翻译_广义教育与正规教育.html',q:'',label:'2009·翻译（「成分被撑开」全篇八处）'}]},
{id:'R61', tier:'🔴', qt:'通用 · 排除选项（新闻评论体全篇通用）', title:'先给全文的时态定调：通篇「将要而未发生」时，说「已经」的选项一律排',
 trig:['文章讲的是政策动向／法庭动态／行业预警，而不是已完成的研究或历史',
       '第二段密集出现 <code>appears ready to</code>／<code>would</code>／<code>has the potential to</code>／<code>is expected to</code>',
       '某个选项用<b>完成时</b>（has been dismissed）、<b>既成事实的现在时</b>（Its ruling complies）或<b>「已成气候」的形容词</b>（prevailing / widespread）'],
 flow:'⚠️ <b>这是 2010·T2 立的卡，一把刀砍掉了三个干扰项（27A／27C／30D），占全部十五个干扰项的五分之一</b>——'
     +'而它<b>不需要读懂任何内容，只需要数标记</b>。<br>'
     +'① <b>读完第二段就在卷边写一个字</b>：<b>「已」</b>（文章讲已经发生并已定局的事：历史回顾、研究报告）或 <b>「未」</b>（讲正在酝酿、尚未落地的事：政策动向、法庭动态、行业预警）；<br>'
     +'② <b>怎么快速判「未」</b>：<b>数情态动词与将来时</b> —— <code>would／will／may／could／appears ready to／has the potential to／is expected to／is set to</code>，<b>再加虚拟语气的 would be</b>；<br>'
     +'③ <b>调子一定，凡与它冲突的选项直接排，不必读内容</b>；剩下的再按常规判据比。',
 tmpl:'<b>2010·T2 全文的「未发生」标记，六处无一例外：</b>'
     +'<table class="tk"><tr><th>标记</th><th>它在说</th></tr>'
     +'<tr><td><code>appears completely <b>ready to</b></code></td><td>准备要收紧（<b>还没收</b>）</td></tr>'
     +'<tr><td><code>said it <b>would</b> use</code></td><td>说将要用这个案子</td></tr>'
     +'<tr><td><code><b>has the potential to</b> eliminate</code></td><td>有可能撤销一整类</td></tr>'
     +'<tr><td><code>Curbs … <b>would be</b> an about-face</code></td><td><b>虚拟语气</b>：若限制，将是</td></tr>'
     +'<tr><td><code>the case <b>would be heard</b></code></td><td>将被听审（<b>还没开庭</b>）</td></tr>'
     +'<tr><td><code>wants to evaluate <b>whether</b> it <b>should</b> reconsider</code></td><td><b>连「要不要重审」都还没定</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>三个干扰项用三种语法手段说了同一件事：</b>'
     +'<b>27A 用名词暗中假定</b>（说「它的裁决」＝ 假定裁决已作出）· <b>27C 用完成时直接说</b>（has been dismissed）· <b>30D 用形容词说</b>（prevailing 已盛行）。<br>'
     +'<b>而三道题的正解全都带「可能／迫近」的标记</b>：26C <code>possible</code> restriction · 27D <code>may</code> change · 30A <code>looming</code> threat。'
     +'<b>这不是巧合，是文章的性质决定的。</b></p>',
 traps:['<b>这把刀是双向的，不是「见到 may 就选」。</b>若全文调子是<b>「已」</b>（研究已完成、政策已生效），'
        +'那些写着 may／might／could 的选项反而要多一分警惕——<b>那时它们才是「把确定的事说成了可能」。</b>'
        +'<b>先定调，再用刀；顺序反了就会两头都错。</b>',
        '<b>「阶段」被推前一格，是主旨题最常见的错法。</b>2010·T2·30 的 A 与 D 对象完全相同（都是 business-method patents），'
        +'胜负手只在 <code><b>looming</b></code>（迫近的：还没到）vs <code><b>prevailing</b></code>（盛行的：已成气候）这一个形容词上。'
        +'<b>动作：把选项里的那个形容词单独拎出来（looming／prevailing／growing／widespread／inevitable），回原文数「已发生」与「未发生」的标记，哪边多选哪档。</b>',
        '<b>别把「文章里的历史」当成「文章的调子」。</b>2010·T2 第三段全是过去时（1998 年判例、2005 年 IBM），'
        +'<b>但那是被用来<u>反衬</u>「如今要转向」的论据</b>。<b>调子看的是「文章此刻在讲的那件事处在哪个阶段」，不是数全文过去时的个数。</b>',
        '<b>与 <a href="#R23">R23</a>（今昔对比文重心在「今」）分工</b>：<b>R23 管「过去 vs 现在」</b>这条缝，'
        +'<b>R61 管「现在 vs 尚未到来」</b>这条更靠后的缝。<b>2010·T2 两条都用得上——「今」这一端本身又分成「正在做的」与「还没做的」，干扰项就藏在第二道缝里。</b>',
        '<b>2012·T4·36A</b>：were in their prime in 1960（当年鼎盛）→ still have（如今仍有）——过去说成现在，与「将来说成已经」是同一族的时态偷换（⟹ R126）。',
        '<b>2016·T1·23A</b>：①❷ <code>gave preliminary approval</code>、③❶ <code>if fully enforced … would</code>、④❷ <code>could result in</code>——法律尚未生效，全文是「将要」口吻；<code>have already failed</code> 一个 already 就判死。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q27',label:'2010·T2·27（27A 与 27C 一把刀同时出局）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'q30',label:'2010·T2·30（looming vs prevailing）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col1',label:'2010·T2 · 02+ 专栏（六处标记全表 ＋ 三种说「已经」的手段）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q29',label:'2011·T2·29B（原文 has been inverted 已完成 vs 选项 is getting out-dated 进行中）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q36',label:'2012·T4·36（A 当年当如今）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'s1',label:'2015·T2 · 长难句 s1（will now consider：判决未出，全文不会有「法院已裁定手机要令」）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q37',label:'2015·T4·37（Others await trial ＋ still unfolds ⟹ may be found guilty）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q23',label:'2016·T1·23A（preliminary approval ⟹ 谈不上 already failed）'}]},

{id:'R62', tier:'🔴', qt:'因果细节题（题干带 recently / now / today）', title:'同一句里，主句是「新闻」，非限定定语从句是「背景」——问「最近为什么」只能取主句',
 trig:['题干出现 <code>recently</code>／<code>now</code>／<code>today</code>／<code>currently</code> ＋ <code>because of</code>／<code>due to</code>',
       '定位句是「主句 ＋ 逗号 ＋ which/who 从句」的结构',
       '某个干扰项的两个关键词<b>都在原文里，而且就在同一句话里</b>'],
 flow:'⚠️ <b>2010·T2·26 立的卡：C 与 D <u>产自同一个句子</u>，中间只隔一个逗号。</b><br>'
     +'① <b>圈出题干的时间副词</b>（recently／now／today）——<b>它不是修饰语，是排除器</b>；<br>'
     +'② <b>把原文按时间标记分成两堆</b>：<b>「一直如此」</b>（<code>ever since／for decades／has long been／traditionally</code>）与 <b>「刚刚发生」</b>（<code>Now／recently／last April／this year</code>）；<br>'
     +'③ <b>分堆要细到<u>句子内部</u></b>：主句与非限定定语从句常常一个装新闻、一个装背景；<b>让步从句（although…）、插入语（, which…）、破折号补充</b>同理；<br>'
     +'④ <b>答案只在「刚刚发生」那一堆里找。</b>',
 tmpl:'<b>2010·T2 的定位句，一句话装了两样东西：</b>'
     +'<table class="tk"><tr><th>主句（逗号之前）</th><th>非限定定语从句（逗号之后）</th></tr>'
     +'<tr><td><b>新闻</b>：<code><b>Now</b> … appears completely ready to <b>scale back</b></code></td>'
     +'<td><b>背景</b>：<code>which have been controversial <b>ever since</b> they were first authorized <b>10 years ago</b></code></td></tr>'
     +'<tr><td>时间坐标 ＝ <b>一个点</b>（此刻）</td><td>时间坐标 ＝ <b>一段区间</b>（十年前至今）</td></tr>'
     +'<tr><td><b>造出 26C ✔</b> the possible restriction on their granting</td><td><b>造出 26D ✘</b> the controversy over their authorization</td></tr></table>'
     +'<p style="margin-top:8px"><b>题干问的是「<u>最近</u>引起关注」——一件持续十年的事解释不了「最近」。</b>'
     +'<b><code>ever since … 10 years ago</code> 这个时间标记，就是 D 项自己的判决书：它把自己的时间坐标写得清清楚楚。</b></p>',
 traps:['<b>D 项在「原词复现」这条判据上比正解更像</b>：<code>controversial／controversy</code> 与 <code>authorized／authorization</code> 只差词形变化，'
        +'<b>而正解 C 的 <code>restriction</code> 在原文里根本没有原词（对应的是 scale back）。</b>'
        +'⟹ <b>又一次印证：字面越像越要警惕，正确项常常是同义改写而非原词。</b>',
        '<b>非限定定语从句在<u>读感</u>上像是同一句话</b>：没有句号、没有 that，读起来就是主句的延续。'
        +'<b>动作：见到「逗号 ＋ which／who／a fact that」，先问一句「这半截是新闻还是背景」，再往下读。</b>',
        '<b>题干的 concern 未必对应原文的 controversy。</b>2010·T2 里 concern 的真正落点是<b>下一句的 <code>abuzz</code>（议论纷纷）</b>——'
        +'<b>而引发议论的那个 <code>move</code>，就是「法院要收紧」这件事。</b>'
        +'<b>凡题干用抽象词（concern／attention／debate），都要在原文找它的<u>具体动词</u>，别只找同根词。</b>',
        '<b>与 <a href="#R23">R23</a> 的分工</b>：R23 管的是<b>文章结构</b>上的今昔两端（哪几段讲昔、哪几段讲今）；'
        +'<b>R62 管的是<u>同一个句子内部</u>的新旧两半</b>——<b>后者更隐蔽，因为两半之间只隔一个逗号，连段落都不用换。</b>',
        '<b>2015·T3·31</b>：①❷ 主干 The policy follows similar efforts from other journals 出正确项（31B 复数 journals），after widespread concern that … 的同位语从句出两个干扰项（31C few blamed、31D lack of analysis）。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q26',label:'2010·T2·26（C 与 D 产自同一句的两半）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col2',label:'2010·T2 · 02++ 专栏（劈句表 ＋ 为什么这刀砍得中人）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'s1',label:'2010·T2 · s1（主句一个点，从句一段区间）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'s2',label:'2015·T3 · 长难句 s2（主干出正确项、从句出干扰项）'}]},

{id:'R63', tier:'🔴', qt:'事实细节 / 人物观点题 · 引语', title:'引语里的口语说法，用它前后的<u>解释句</u>去核，不用字面义去核',
 trig:['原文引号里出现<b>口语短语</b>：a (very) big deal／a game changer／a wake-up call／a mixed bag／the elephant in the room',
       '某个选项把这个短语里的词<b>几乎原样保留</b>，只把最关键的那个词换成了它的<b>字面义</b>',
       '引语的紧邻上下句是对它的展开说明'],
 flow:'⚠️ <b>2010·T2·27 立的卡：<code>「a very big <u>deal</u>」</code> 里的 deal ＝ <b>要紧事、大事</b>，不是「交易」。</b><br>'
     +'① <b>见到引号里的口语短语，先别按字面拆</b>；<br>'
     +'② <b>往后看一句、往前看一句</b>，找那句「把话说明白」的解释——<b>新闻体的引语几乎总是成对出现：一句给判断，一句给依据</b>（否则读者看不懂）；<br>'
     +'③ <b>拿解释句去比选项</b>，字面对得再齐的也不算数。',
 tmpl:'<b>2010·T2 的两句必须连着读：</b>'
     +'<table class="tk"><tr><th>句</th><th>作用</th></tr>'
     +'<tr><td>②❸ <i>In re Bilski</i> … is <code>「a very big <b>deal</b>」</code></td><td><b>给判断</b>（被考的表达）</td></tr>'
     +'<tr><td>②❹ It <code>「has the potential to <b>eliminate an entire class of patents</b>」</code></td><td><b>给依据</b>（<b>为什么是大事？因为可能干掉一整类专利</b>）</td></tr></table>'
     +'<p style="margin-top:8px"><b>⟹ 这句解释与「商业交易」毫无关系，与「法律实践可能改变」（27D）严丝合缝。</b><br>'
     +'<b>27B <code>It involves a very big business <u>transaction</u></code> 把 deal 按字面还原，连 <code>a very big</code> 都原样照抄</b>——'
     +'<b>而 <code>transaction</code> 这个词也确实在原文里（③❷ online transactions），只是分属另一句、讲的是另一件事。</b>'
     +'<b>两个词组被拼成了一个选项</b>（⟹ <a href="#R39">R39</a> 原词拼接）。</p>',
 traps:['<b>反面标志（很好用）</b>：<b>某个选项把口语短语里的每个词都保留了，只把最关键的那个词换成了它的<u>字面义</u>——这几乎必然是陷阱。</b>'
        +'<b>因为字面还原读起来永远「有据」，而「读着顺」正是命题人设计出来的。</b>',
        '<b>同一篇文章里的引号可以有<u>三种</u>功能，不能一刀切。</b>2010·T2 三种全出现了：'
        +'<b>「a very big deal」＝ 引用他人评价</b>（可当权威观点用）· <b>「reconsider」＝ 引用法院指令的原话</b>（中性，只是照抄措辞）· '
        +'<b>「inventions」＝ 作者不出面的排斥</b>（所谓的「发明」，带贬义）。<b>见到引号，先判它属于哪一种</b>（⟹ <a href="#R29">R29</a>）。',
        '<b>与 <a href="#R58">R58</a>（引语里的态度分两层）是「引语出问题」的一对</b>：'
        +'<b>R58 管引语里的<u>态度</u>归属</b>（是说话人自己的，还是他引来当靶子的）；<b>R63 管引语里的<u>用词</u>不能按字面读</b>。'
        +'<b>合起来：凡引号，先问「这是谁的话、这话什么意思」，两问都过了才用它做判据。</b>',
        '<b>顺带记住 deal 的另一个方向</b>：<code>It\'s no big deal.</code>（没什么大不了的）。'
        +'<b>a big deal 的正反两用都是「事情的分量」，与「买卖」无关；判据是它前面通常有 a／no 而不是 the，且不带 with／between 这类交易搭配。</b>',
        '<b>2017·T3·31</b>：肯尼迪的判词 everything except that which makes life worthwhile 拿不准褒贬时，去找作者的白话版——⑥❶ <code>So, what Kennedy was referring to was that … it is no longer enough</code> ⟹ 贬（⟹ <a href="#R222">R222</a>）。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q27',label:'2010·T2·27B（deal ⟹ business transaction）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col3',label:'2010·T2 · 02+++ 专栏（三步动作 ＋ 三种引号功能）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'q31',label:'2017·T3·31（用⑥❶ 的解码句核引语）'}]},

{id:'R64', tier:'🟡', qt:'末段/末两段推理题（We learn from the last … paragraph(s) that …）', title:'题干若只给「全文论述对象」而无具体信息，考的其实是主旨／态度',
 trig:['题干形如 <code>We learn from the last two paragraphs that <b>X</b> ______</code>，而这个 X 正是<b>全文都在谈的那个对象</b>',
       '题干里<b>没有人名、没有年份、没有独特搭配</b>可供检索',
       '四个选项长相一致：<b>同一个主语 ＋ 一个动词短语</b>，而这些动词短语的原料全部来自末两段'],
 flow:'⚠️ <b>2010·T2·29 立的卡。先做一次<u>题型分诊</u>，再动手：</b><br>'
     +'① <b>看题干给了什么</b>：给了<b>具体人名／年份／独特名词</b> ⟹ 真·细节题，拿它回文定位那一句比同义替换；'
     +'<b>只给了全文的论述对象</b> ⟹ <b>实为主旨／态度题</b>；<br>'
     +'② <b>是主旨题就别逐句扫</b>：先自问一句「<b>末两段透露了对它的什么<u>判断</u></b>」，写下自己的答案，再去比选项；<br>'
     +'③ <b>用首段回证</b>：<b>这类题的正解通常在首段能找到它的影子</b>——因为它是全文一以贯之的那个判断在末段的落点。',
 tmpl:'<b>2010·T2·29B 是「首尾呼应的产物」，三段接力：</b>'
     +'<table class="tk"><tr><th>位置</th><th>它说了什么</th></tr>'
     +'<tr><td><b>①段定调</b></td><td><code>what are <b>called</b> business methods</code>（所谓的）＋ 给<b>「提箱子的技术」</b>发专利 ⟹ <b>这些东西也配叫发明？</b></td></tr>'
     +'<tr><td><b>③段补证</b></td><td>IBM <b>一边质疑法律依据一边拿了 300 多项</b>；华尔街<b>一边在法庭上反对一边用专利武装自己</b> ⟹ <b>连申请人自己都不认为它站得住</b></td></tr>'
     +'<tr><td><b>⑤段挑明</b></td><td><code><b>too many</b> patents were being <b>upheld</b> for <b>「inventions」</b> that are <b>obvious</b></code> ⟹ <b>29B are often unnecessarily issued</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>三个词一一对应</b>：<code>too many</code> ⟹ unnecessarily · <code>upheld</code> ⟹ issued · <code>「inventions」that are obvious</code> ⟹ 本不该给专利。<br>'
     +'<b>⟹ B 不是末两段某一句的孤立复述，而是全文那个判断的落点——这正是「末段题实为主旨题」的标志。</b></p>',
 traps:['<b>本题四个选项的原料<u>全部</u>来自末两段，一项不落</b>：'
        +'A ⟸ ④❷／⑤❸（legal challenges）· B ⟸ ⑤❷ · C ⟸ ⑤❶（protections for patent holders）· D ⟸ ④❶（hedging risk）。'
        +'<b>「这个词原文里有没有」这条判据在本题上全面失效，判据只能是：<u>它在文中是谁做的、冲谁去的、是原因还是结果</u>。</b>',
        '<b>最爱做的两个动作</b>：<b>① 换义</b>（C 把 <code>protections</code> 法律保护范围换成 <code>esteem</code> 社会敬重，还顺手换了主语——缩小保护的是最高法院、对象是所有专利权人）；'
        +'<b>② 把「被处理的对象」读成「造成的后果」并翻向</b>（D 把 <code>hedging risk</code> 规避风险读成 <code>increase the incidence of risks</code> 增加风险）。',
        '<b>方向题先做</b>：A <code>are immune to legal challenges</code>（不受法律质疑）与末两段的全部内容<b>正好相反</b>——'
        +'<b>末两段通篇写的就是「这类专利正在受到质疑」。凡与全文调子逆向的选项，第一轮就该排掉，不必细比。</b>',
        '<b>与 <a href="#R26">R26</a>（两项都与主旨同向时选上升到主旨的那个）配合使用</b>：'
        +'<b>R64 负责「认出这是主旨题」，R26 负责「两个都像时怎么选」。</b><b>认错题型比选错选项更致命——认成细节题就会去逐句扫末两段，而正解的一半依据在首段。</b>'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q29',label:'2010·T2·29（四项原料全部来自末两段）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col4',label:'2010·T2 · 02++++ 专栏（题型分诊表 ＋ 三段接力）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'s8',label:'2010·T2 · s8（29B 的唯一正源）'}]},

{id:'R65', tier:'🔴', qt:'推理引申 / 事实细节题（原文含排除结构时）', title:'「例外」那半句是干扰项工厂：规律永远在排除<u>之后</u>',
 trig:['原文出现 <code>With the exception of</code> / <code>apart from</code> / <code>except (for)</code> / <code>other than</code> / <code>barring</code> / <code>save</code>（介词）',
       '排除结构之后常跟一个 <code><b>even</b></code>（连……都）——它是重心的路标',
       '例外部分被塞进<b>破折号插入语</b>里，读起来像「顺带说一句」'],
 flow:'⚠️ <b>2010·T3·33 立的卡：三个干扰项<u>一个不落</u>，全从「例外」那一截里剪出来。</b><br>'
     +'① <b>认信号劈句子</b>：见到排除结构，立刻在卷边画一道竖线，把句子分成 <b>「例外区」 / 「规律区」</b>；<br>'
     +'② <b>定重心</b>：<b>作者要立的规律永远在排除<u>之后</u>那半句</b>；例外区只是<b>防御性补丁</b>（先把反例圈走，免得读者抬杠）。'
     +'<b>若排除之后还跟着 <code>even</code>，那更是把重心标了出来——even 后面接的就是作者最想说的那句话；</b><br>'
     +'③ <b>排选项</b>：<b>凡以「例外」为主语、或从例外的说明部分取词的选项，一律先放到最后再看。</b>',
 tmpl:'<b>2010·T3·④❶ 是标本（54 词，全篇最长）：</b>'
     +'<table class="tk"><tr><th>半句</th><th>身份与用途</th></tr>'
     +'<tr><td><b>例外区</b><br><code>With the exception of a few celebrities like Oprah Winfrey—whose outsize presence is primarily a function of media, not interpersonal, influence—</code></td>'
     +'<td><b>防御性补丁</b>：名人靠媒体，与本文讨论的人际影响不是一回事。<br><b>⟹ 33B / 33C / 33D 三个干扰项全在这里取料</b></td></tr>'
     +'<tr><td><b>规律区</b><br><code>even the most influential members of a population simply don\'t interact with that many others.</code></td>'
     +'<td><b>研究者真正的观察</b>：连最有影响力的人，能打交道的人数也就那么多。<br><b>⟹ 33A 正解（影响力伴随社会交往而产生）</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>口诀：例外只用来「排掉」，不用来「答题」。</b></p>',
 traps:['<b>三个干扰项，三种改法，同一个产地</b>：'
        +'<b>33B</b> 把 <code>media, <u>not</u> interpersonal, influence</code> 这个<b>二选一</b>接成了因果（媒体<b>加强</b>人际）——<b>判据是夹在两个逗号之间的 not</b>；'
        +'<b>33C</b> 把「渠道多」这个性质从 <code>a few celebrities</code> 挪到了 <code>influentials</code> 头上，<b>而下一句紧接着写 <code>these <u>non-celebrity</u> influentials</code>，全段正把两者分开</b>；'
        +'<b>33D</b> 把 <code>a few celebrities</code> 放大成 <code><b>most</b> celebrities</code>。',
        '<b>就算量词不改，例外也答不了这道题</b>：33D 说的是论证的<b>前提</b>（先排除名人），不是题干问的「研究者<b>观察到</b>的发现」。'
        +'<b>⟹ 排除区的内容天然不承担「结论」的角色。</b>',
        '<b>反面提醒：例外区并非永远不能选。</b>若题干专门问「奥普拉这类名人有什么特点」，答案当然在例外区。'
        +'<b>判据是「题干问的是规律还是例外」，不是「这半句在不在原文里」。</b>',
        '<b>一条更泛用的手感</b>：<b>破折号插入语天生是「顺带说一句」，命题人却偏爱在这里下料。</b>'
        +'凡<b>破折号里包着一整个从句</b>，先在卷边打个问号。',
        '<b>2016·T4·40B</b>：②❶ <code>Nostalgia for ink on paper and the rustle of pages aside</code>——名词 ＋ aside ＝ 作者亲手放到一边的考虑；40B Cherish the Newspaper Still in Your Hand 把这个被搁置的怀旧捡回来当主旨。',
        '<b>⚠️ 2017 边界</b>：「规律在排除之后」只在排掉的是<b>边角反例</b>时成立。2017·T3·①❶ <code>measures “everything except that which makes life worthwhile”</code> 排掉的是<b>最要紧的东西</b>，重心反而落在 except 后面 ⟹ 明褒实贬 ⟹ 31D（⟹ <a href="#R222">R222</a>）。'],
 refs:[{p:'2010_T3_社会流行潮的传播.html',q:'q33',label:'2010·T3·33（三个干扰项全产自例外半句）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col1',label:'2010·T3 · 02+ 专栏（例外区/规律区分栏表）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'s5',label:'2010·T3 · s5（54 词长难句拆解）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'s13',label:'2014·T2 · 长难句 s13（Except in the District of Columbia：非律师不得持股才是通则）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q40',label:'2016·T4·40B（aside 放到一边的怀旧）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col1',label:'2017·T3 · 02+ 专栏（本卡的边界：排掉的是核心）'}]},

{id:'R66', tier:'🔴', qt:'作者态度题 / 观点态度题（The author suggests that…）', title:'折扣词族：作者的态度不在贬义词里，在他给这套说法打的<u>折扣</u>里',
 trig:['题干形如 <code>The author suggests / implies that X ______</code>，而原文<b>通篇没有一个贬义词</b>',
       '原文反复出现 <code>supposed</code> / <code>plausible-sounding</code> / <code>seems to</code> / <code>appears to</code> / <code>anecdotal</code> / <code>so-called</code> / <code>what are called</code> / <code>allegedly</code>',
       '选项里出现 <code>has helped</code> / <code>does</code> / <code>proves</code> / <code>is</code> 这类<b>把话说满</b>的动词'],
 flow:'⚠️ <b>2010·T3·32 立的卡，与 <a href="#R61">R61</a> 是姊妹刀（R61 量时间阶段，R66 量可信度）。</b><br>'
     +'① <b>先圈「作者自己下的形容词／副词」，别圈文中人物的行为</b>——'
     +'2010·T3 第②段最显眼的动作是 <code>Marketers have <b>embraced</b></code>（营销者欣然接受），<b>可那是别人的动作</b>；<br>'
     +'② <b>折扣词出现三次以上，它们就是答案本身</b>：把这一族词翻成一句大白话（「这套说法还没被证明」），再找与之同向的选项；<br>'
     +'③ <b>反向再扫一遍</b>：<b>凡选项把原文的 seems / appears / is supposed to / may 换成 has / does / proves / is，一律警惕。</b>',
 tmpl:'<b>2010·T3 全文六处折扣，全部落在同一件东西（两级流动理论）上：</b>'
     +'<table class="tk"><tr><th>折扣词</th><th>它在说</th></tr>'
     +'<tr><td><code>often <b>called</b> influentials</code>（①❶）</td><td>「所谓的」——与这个叫法拉开距离</td></tr>'
     +'<tr><td><code>The <b>supposed</b> importance</code>（②❶）</td><td>「被认为的」重要性——还没坐实</td></tr>'
     +'<tr><td><code><b>plausible-sounding</b> but largely <b>untested</b></code>（②❶）</td><td><b>32D 正源</b>：听着有理 ＋ 基本未经检验</td></tr>'
     +'<tr><td><code>also <b>seems to</b> explain</code>（②❸）</td><td><b>32B 就是把这个折扣抹掉的</b></td></tr>'
     +'<tr><td><code><b>Anecdotal</b> evidence</code>（②❺）</td><td>传闻性证据——学术语境里近乎「算不上证据」</td></tr>'
     +'<tr><td><code>are <b>supposed to</b> drive</code>（④❷）</td><td>「理应推动」——而全段正说明他们推不动（反讽）</td></tr></table>'
     +'<p style="margin-top:8px"><b>作者一次都没写 wrong / false，但读到第②段结尾，态度已经写完了。</b></p>',
 traps:['<b>32B 只改了一个动词</b>：<code>seems to explain</code>（似乎能解释）⟹ <code>has helped explain</code>（已经帮助解释了）。'
        +'<b>「似乎能」是作者留的余地，「帮助解释了」是替作者下了肯定判断。</b>'
        +'⚠️ <b>它的后半截 <code>certain prevalent trends</code> 完全对得上原文</b>——<b>正因为后半截严丝合缝，被换掉的那个动词才不容易被发现。</b>',
        '<b>32A 取的是「营销者的动机」</b>（<code>Marketers have embraced … because it suggests…</code>）——'
        +'<b>题干问 the author suggests，从别人的动机里取答案一律错</b>（⟹ 与 <a href="#R4">R4</a> 同用）。',
        '<b>被换掉的不是名词，是作者对这句话的信任度</b>——'
        +'<b>这是 <a href="#R48">R48</a>（半截复现）在「情态」维度上的变体：名词照抄，情态被删。</b>',
        '<b>这把刀是双向的</b>：若全文调子是「确凿、已证实」，那么写 seems / may 的选项反而要警惕。<b>先定调，再用刀。</b>',
        '<b>2014·T1 的折扣词三级递进</b>：②❶ <code>More apparent reasonableness</code>（表面上）→ ②❼ <code>On first hearing</code>（乍一听）→ ②❽ <code>we were to understand</code>（被引导去相信）。<b>apparent 放在名词前＝「看似的」</b>，与表语位的 It is apparent that（显然）义项不同——位置决定它是不是折扣词。',
        '<b>2015·T4·38</b>：⑥❸ may or may not have had suspicions 是作者给自己的指控打的折——知不知情不下结论，只陈述她不问、不管、没记录。'],
 refs:[{p:'2010_T3_社会流行潮的传播.html',q:'q32',label:'2010·T3·32（六处折扣词定态度）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col2',label:'2010·T3 · 02++ 专栏（折扣词表 ＋ 选项取材分类）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col1',label:'2010·T2 · 02+ 专栏（姊妹刀 R61：时间刻度）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'col4',label:'2014·T1 · 02++++ 专栏（反问、折扣与惋惜）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'col1',label:'2014·T3 · 02+ 专栏（a handful of ／ some vs most ／ as scattered as 给批评降权）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q34',label:'2015·T3·34（some merit／a weakness 两个折扣词定档）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'s17',label:'2015·T4 · 长难句 s17（may or may not 的刹车）'}]},

{id:'R67', tier:'🔴', qt:'事实细节题（实验／模拟／调查类文章）', title:'方法句列「候选项」，结论句才给「胜出项」——干扰项固定从落选变量里造',
 trig:['原文出现 <code>conducted</code> / <code>simulations</code> / <code>experiment</code> / <code>manipulating a number of variables</code> / <code>measured</code> / <code>surveyed</code>',
       '题干问 <b>最重要的因素 / 关键条件 / 主要发现</b>（<code>the essential element</code> / <code>the principal requirement</code> / <code>the key factor</code>）',
       '四个选项<b>长相同构</b>（同一个模子：名词 ＋ to do / of sth）'],
 flow:'⚠️ <b>2010·T3·35 立的卡。</b><br>'
     +'① <b>把段落切成两半</b>：在 <code>They found that…</code>（或 <code>The results showed…</code>）前面画一道横线，'
     +'<b>横线之上是「方法句」（怎么做的），之下是「结论句」（发现了什么）</b>；<br>'
     +'② <b>凡问「最重要的因素」，答案只能取自横线<u>之下</u></b>；'
     +'<b>方法句里那串变量清单是命题人的干扰项仓库</b>——它们看着都像，<b>因为它们本来就是研究者认真考虑过的候选项</b>；<br>'
     +'③ <b>结论句里若有取舍结构，重心永远在 but 之后</b>：<code>not A <b>but, rather,</b> B</code> / <code>less a matter of X <b>than</b> Y</code>。',
 tmpl:'<b>2010·T3·⑤段只有两句，分工完全不同：</b>'
     +'<table class="tk"><tr><th>句</th><th>内容与能不能用</th></tr>'
     +'<tr><td><b>❶ 方法句</b></td><td><code>manipulating a number of <b>variables</b> relating to people\'s <b>ability to influence others</b> and their <b>tendency to be influenced</b></code>'
     +'<br><b>❌ 不能答题</b>：两个变量都还没分胜负。<b>35B 就是从这里抓的落选者</b></td></tr>'
     +'<tr><td><b>❷ 结论句</b></td><td><code><b>They found that</b> the principal requirement … is the presence <b>not of</b> a few influentials <b>but, rather, of</b> a critical mass of <b>easily influenced</b> people</code>'
     +'<br><b>✔ 只能取这一句 ⟹ 35C The readiness to be influenced</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>⭐ 第二招：四个选项同构时用「对齐法」。</b>'
     +'本题四项都是 <code>The ＋ 名词 ＋ to do</code>：<code>eagerness / impulse / <b>readiness</b> / inclination</code> ＋ '
     +'<code>to be accepted / to influence others / <b>to be influenced</b> / to rely on others</code>。'
     +'<b>竖着对齐，只比不同的那一格：先定<u>方向</u>（影响别人 vs 被人影响）——这一步就砍掉 B；再定<u>词义</u>。'
     +'十六个单词立刻缩成八个，真正决定胜负的只有两个。</b></p>',
 traps:['<b>35B 犯了两个错，叠在一起</b>：① 抓的是方法句里<b>落选</b>的那个变量（<code>ability to influence others</code>）；'
        +'② 还把 <code>ability</code>（能力：能不能）换成了 <code>impulse</code>（冲动：想不想）——<b>方向与词性双双走样。</b>',
        '<b>35A 给出了原文根本没提的<u>动机</u></b>：<code>tendency to be influenced</code> 是一种<b>性情／状态</b>（容易被影响），'
        +'<code>eagerness to be accepted</code> 是一种<b>渴望</b>。<b>全文没有一处谈过这些人「为什么」易受影响 ⟹ 凡选项补出原文未提的心理动因，一律排。</b>',
        '<b>取舍结构里介词常常重复</b>：<code>the presence <b>not of</b> A <b>but, rather, of</b> B</code>——'
        +'<b>重复 of 是为了让两个并列成分都挂在同一个中心词（presence）上。读的时候把 of 后面的两坨对齐，谁被否定一目了然。</b>',
        '<b>别把「方法句」当成「结论句」的同义复述</b>：方法句写的是研究者<u>控制了什么</u>，结论句写的是<u>什么胜出</u>。'
        +'<b>两者的词高度重合（本篇 tendency to be influenced 两句都出现），但只有后者能答题。</b>',
        '<b>2016·T3 把这张卡扩到词义题和细节题</b>：③❸ 研究设计句（检察官不消费产品）喂出 34D，④❷ 排除句的目的（让结论少争议）喂出 33A——<b>设计句说「研究者怎么做」，不是「研究发现了什么」</b>。'],
 refs:[{p:'2010_T3_社会流行潮的传播.html',q:'q35',label:'2010·T3·35（方法句 vs 结论句）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col3',label:'2010·T3 · 02+++ 专栏（分工表 ＋ 同构选项对齐法）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'s10',label:'2010·T3 · s10（not of A but rather of B）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'col4',label:'2016·T3 · 02++++ 专栏（研究报道七件套）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q29',label:'2018·T2·29（同一句里用 more so than 给胜出，陪跑项进 D，见 R238）'}]},

{id:'R68', tier:'🔴', qt:'词义指代题（refers to / stands for）', title:'斜体／加粗的指示代词是<u>对比标记</u>：先找它对着谁说',
 trig:['题干形如 <code>The underlined phrase 「<i>these</i> people」 refers to the ones who ______</code>',
       '被问的代词在原文里被印成<b>斜体、加粗或加引号</b>',
       '代词所在的句子是一条<b>链条句</b>：<code>A influences B, who must in turn influence theirs, and so on</code>'],
 flow:'⚠️ <b>2010·T3·34 立的卡。三步，前两步都是硬判据：</b><br>'
     +'① <b>就近划范围</b>：先行词绝大多数在<b>同句或紧邻上一句</b>；<br>'
     +'② <b>数单复数</b>：本题 <code>each person</code>（单）· <code>these people</code>（复）· 谓语 <code>has</code>（单）'
     +'——<b>三个数一摆，34B 当场出局</b>（<code>has little to do with</code> 的主语是 how 引导的主语从句，不是 these people）；<br>'
     +'③ <b>看强调标记对着谁说</b>：<b>斜体不是让你注意「这些」，是让你去找它的<u>对手</u></b>。'
     +'本句句尾就站着 <code>the initial influential</code> ⟹ <b>「这些人」与「那个人」是一对。</b>',
 tmpl:'<b>2010·T3·④❸ 的链条，读一遍答案就出来：</b>'
     +'<table class="tk"><tr><th>链条位置</th><th>原文</th></tr>'
     +'<tr><td><b>对立面（起点）</b></td><td><code>the <b>initial</b> influential</code>（最初那位）</td></tr>'
     +'<tr><td>第一层</td><td><code>each person <b>so affected</b></code>（被他直接影响的人，单数）</td></tr>'
     +'<tr><td>第二层</td><td><code>his or her own <b>acquaintances</b></code></td></tr>'
     +'<tr><td>第三层及以后</td><td><code>who must <b>in turn</b> influence theirs, <b>and so on</b></code></td></tr>'
     +'<tr><td><b><i>these</i> people</b></td><td><b>✔ 链条上的一般节点：既已被影响，又要继续影响别人 ⟹ 34C are influenced and then influence others</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>通用经验：凡「A 影响 B，B 再影响 C，以此类推」的链条句，代词指的多半是<u>一般节点</u>（既是受体又是施体），'
     +'既不是<u>起点</u>也不是<u>终点</u>。选项只写一个动作的，几乎都是半截。</b></p>',
 traps:['<b>34D 只写了「被影响」半截</b>（<code>are influenced by the initial influential</code>），'
        +'<b>丢掉的「继而影响他人」正是整段论证的要害</b>（⟹ <a href="#R48">R48</a> 半截复现）。'
        +'<b>而且数也不对</b>：被初始影响者直接影响的是 <code>each person</code>（单数，只有第一层），<i>these</i> people 是复数、涵盖所有层级。',
        '<b>34B 篡改主语</b>：<code>just how many others pay attention to each of these people</code> 才是 <code>has little to do with</code> 的主语。'
        +'<b>谓语 has 是单数，these people 是复数——主谓一致直接判死。</b>',
        '<b>34A 曲解 <code>two degrees removed from</code></b>：它 ＝ <b>相隔两个层级</b>（六度分隔的 degree），'
        +'<b>说的是「在网络里的第几层」，句首 <code>people <u>in</u> the network</code> 还明说了这些人在网络之内。</b>',
        '<b>凡答案里含「起点人物」（本题的 initial influential）的，方向天然可疑</b>：'
        +'<b>强调标记的功能是<u>对比</u>，把对立的两端弄成一端，就走反了。</b>'],
 refs:[{p:'2010_T3_社会流行潮的传播.html',q:'q34',label:'2010·T3·34（斜体 these ↔ initial influential）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col4',label:'2010·T3 · 02++++ 专栏（链条表 ＋ 十五个干扰项总账）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'s7',label:'2010·T3 · s7（分号句 ＋ how 主语从句）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q32',label:'2012·T3·②❹（斜体 me, here, now ↔ anyone, anywhere, anytime 是对比轴，见 R121）'}]},

{id:'R69', tier:'🔴', qt:'人物观点题（题干含「X 的 attempt / intention / plan / move」）', title:'意图归谁，就只能到<u>谁自己说的那句</u>里找——反对者的引语只给「反对」和「理由」',
 trig:['McCreevy objects to <b>the IASB\'s attempt</b> to…','X criticizes Y\'s <b>plan / intention / effort</b> to…','段里有两个以上机构/人物在互相表态','最醒目的那句是带引号的评论'],
 flow:'① <b>先看题干的<u>属格</u>挂在谁身上</b>（<code>the <b>IASB\'s</b> attempt</code>）⟹ <b>检索区就锁定为「那个人自己发言或被叙述意图」的那一句</b>；'
     +'② <b>反对者的引语只提供两样东西</b>：<b>①「他反对」这个动作　②他施压的<u>理由</u></b>——<b>它不提供被反对者的意图</b>；'
     +'③ <b>再分一层「客观处境」与「主观意愿」</b>：反对者说的「你并非活在政治真空里」是在<b>描述你的处境</b>，不是在<b>转述你的愿望</b>。',
 tmpl:'<b>正确项 ＝ 把「X 自己说的那句话」翻译一遍</b>；<b>错误项 ＝ 把反对者引语的<u>字面反面</u>拿来当意图</b>。<br>'
     +'<b>⚠️ 反面提醒（必须一起记，否则会矫枉过正）</b>：<b>引语不是永远不能出答案</b>——<b>题干若写 <code>McCreevy <u>warned</u> the IASB that…</code>、<code>What does <u>McCreevy</u> mean by…</code>，属格挂在他身上，引语就是正源。</b><br>'
     +'⟹ <b>对的规则是「先看属格挂在谁身上」，不是「引语一律不选」。</b>',
 traps:['<b>2010·T4·38 是 Claude 盲做 2010 年<u>唯一做错</u>的一题（选了 A，正解 C），错法完整可复制</b>：'
        +'④❸最醒目的是 McCreevy 的引语 <code>it did "not live in a <b>political vacuum</b>" but "in the real world"</code>；'
        +'于是取它的字面反面（想活在政治真空里 ＝ 想远离政治），配到 <b>A <code>keep away from political influences</code></b>。'
        +'<b>可正源在④❷ <code>The IASB <b>says</b> it does not want to act without overall planning</code>——那才是 IASB 自己陈述的意图 ⟹ C <code>act on their own in rule-setting</code>。</b>',
        '<b>「客观处境」被冒充成「主观意愿」</b>：<code>a political vacuum</code> 是 McCreevy 用来施压的<b>事实描述</b>；'
        +'<b>通读全段，IASB 从头到尾没说过一个字表示「我们想远离政治」。</b>',
        '<b>压力的<u>源头</u>被换掉</b>：2010·T4·38B <code>evade the pressure from their <b>peers</b></code>——'
        +'<code>the pressure</code> 确实在④❷里，<b>但压力来自④❶的「欧洲各国部长」＝ 政府部门；<code>peers</code>（同行）该指别的准则制定机构。政府与准则制定机构是<u>对立施压</u>关系，不是同行。</b>（⟹ R21）',
        '<b>由「要通盘规划」过度推断出「节奏」</b>：2010·T4·38D <code>take gradual measures in reform</code>——'
        +'<b>「要不要先想清楚」≠「改得快还是慢」；而且 McCreevy 不满的落脚点是「改不改」，不是「改得快慢」。</b>',
        '📌 <b>考场固定动作（30 秒，防住一整类题）</b>：读到「多方博弈段」（一段里两个以上机构／人物），'
        +'<b>先在卷边列一张两列表「谁说的 — 说了什么」</b>。2010·T4 第④段列完是：<b>欧洲部长：要求照做 · IASB：不想贸然改 · McCreevy：警告 ＋ 威胁</b>。'
        +'<b>表一列完，属格陷阱自然就避开了。</b>',
        '<b>2013·T4 是「谁说的」与「作者替谁说透」的叠加</b>：⑥❷ The White House argued（白宫原话）→ ⑥❸ In effect, the White House claimed（作者归结）→ ⑦❹ in essence asserting（作者再归结）→ ⑦❺ Every Justice rightly rejected（法官判决 ＋ 作者表态）。<b>40B 把白宫的主张当成事实</b>——列「谁说的 — 说了什么」表时，<b>再加一列「被驳回了吗」</b>。',
        '<b>2016·T4·39</b>：题干 Peretti believes——只取他自己引号里的话（⑦❸ it’s better to be more aggressive than less aggressive）；⑤❹ The move turned out to be foresighted 是作者的评语，⑥❺❻ 的推测与 $500 也是作者给的证据，不能当 Peretti 的观点用。',
        '<b>2017·T2·28</b>：问「反对者为什么反对」只能到③❷ 反对者那句里找（disrespect ＋ a painful reminder of the occupation）⟹ D；④ 整段是作者的自我检讨，28C 从那里取材就出界。'],
 refs:[{p:'2010_T4_会计准则制定者被迁怒.html',q:'q38',label:'2010·T4·38（唯一错题，完整拆解）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col1',label:'2010·T4 · 02+ 专栏（三句身份表）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s6',label:'2010·T4 · s6（IASB 自己说的那句）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s7',label:'2010·T4 · s7（McCreevy 的双 that 从句）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q34',label:'2012·T3·34（引语后的 But 是作者的，三个干扰项全在引号之外，见 R124）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q40',label:'2013·T4·40（B 被驳回的主张当成事实）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q39',label:'2016·T4·39（人物观点只取他自己的话）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q28',label:'2017·T2·28（反对理由只在③❷，④ 是作者的话）'}]},

{id:'R70', tier:'🔴', qt:'事实细节题 · 长难句（原文含省略关系代词的定语从句）', title:'省略关系代词的定语从句 ＝ <u>假复合名词工厂</u>：不看词，数缺口',
 trig:['选项里出现一个「名词₁ ＋ 名词₂」的人物或事物，而你想不起原文有这东西','原文是「名词 ＋ 名词 ＋ 动词」且句子看着少一个成分','the price managers and regulators would like them to fetch'],
 flow:'① <b>见到「名词₁ ＋ 名词₂ ＋ 动词」而句子看着<u>少一个成分</u></b>，<b>先假设：名词₁ 是先行词，名词₂ 是省略了关系代词的从句主语</b>；'
     +'② <b>验证只有一步：往后找「缺口」在哪</b>——<b>缺宾语 ⟹ 名词₁ 是从句的宾语；缺主语 ⟹ 名词₁ 是从句的主语</b>；'
     +'③ <b>反验</b>：若真按「复合名词」读，整句还剩不剩主句谓语？剩不下就是残句，语法上直接判死。',
 tmpl:'<b>2010·T4·36 的原句</b>：<code>… at <b>the price</b> [that] a third party would pay, not <b>the price</b> [that] managers and regulators would like them to <b>fetch</b>.</code><br>'
     +'<b>硬判据</b>：<b>句末的及物动词 <code>fetch</code>（卖得、售得）后面<u>缺宾语</u></b> ⟹ 缺口回指先行词 <code>the price</code> ⟹ <b><code>the price</code> 与 <code>managers</code> 不能粘。</b><br>'
     +'<b>同族例句（考研高频）</b>：<code>the man [that] the police arrested ___</code> · <code>the book [that] I told you about ___</code> · <code>the reason [that] he gave ___</code> · <code>levels [which] buyers find ___ attractive</code>。',
 traps:['<b>2010·T4·36C <code>cooperate with <u>the price managers</u></code></b>：把先行词 <code>the price</code> 与从句主语 <code>managers</code> '
        +'粘成了「价格管理者」——<b>一个原文里根本不存在的人物</b>。<b>陷阱之所以有效，是因为英语里「名词＋名词」的复合词太常见</b>（price war / price tag / project manager），读快了会顺手粘上。',
        '<b>🔗 与 R34（概念嫁接）是一对，必须分清</b>：<b>R34 是「定语挂错了中心词」，错在<u>搭配</u>，要靠「把定语＋中心词当整体回搜」来破；'
        +'R70 是「切分点整个挪了位」，错在<u>断句</u>，要靠「数缺口」来破。前者是语义活，后者是语法活。</b>',
        '📌 <b>这类题的价值：一个词都不认识也能做对。</b>2010·T4·36 不必懂会计，只要断句断对。<b>同题另两项也各是一种造法</b>：'
        +'<b>36B ＝ 把假设当事实</b>（<code>the price a third party <b>would</b> pay</code> 是假想买家的出价，＝公允价值的定义，不是真有人付钱）；'
        +'<b>36D ＝ 半截复现</b>（动作「估值」复现了，态度「不利／不公」丢了 ⟹ R48）。',
        '⭐ <b>顺带一条正面手感</b>：<b>2010·T4·36 的正确项 A 是<u>段内两句的合成</u></b>（<code>unfavorable</code> ← ❸句 <code>it\'s just not fair</code>；'
        +'<code>asset evaluation rules</code> ← ❹句 <code>rules … must value some assets</code>）⟹ <b>凡四个选项都能在同一句里找到影子，就该往前后再多读一句。</b>'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'s3',label:'2011·T3 · s3（The way ＋ 省略关系词的定语从句）'},{p:'2010_T4_会计准则制定者被迁怒.html',q:'q36',label:'2010·T4·36（四项四种造法）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col2',label:'2010·T4 · 02++ 专栏（数缺口判据）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s1',label:'2010·T4 · s1（两个并列的省略定语从句）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'s9',label:'2011·T1 · s9（the new audience it hopes to attract，数 attract 后的缺口）'}]},

{id:'R71', tier:'🔴', qt:'因果细节题（题干含 result in / lead to / cause，且定位到例证段）', title:'例证段找不到因果，就<u>往上游推一段</u>——例证只负责证明，不负责下结论',
 trig:['题干问 may result in / leads to / brings about','定位段通篇在讲「谁做了什么、内容是什么」，没有一句「所以导致了什么」','段首是 After… / For example… / In 20XX… 这类实例开头'],
 flow:'① <b>拿题干关键词定位</b>，读完定位段先问一句：<b>这一段里有没有「后果句」？</b>'
     +'② <b>没有 ⟹ 往上游推一段找<u>作者的观点句</u></b>（「问题—分析—解决」型社论里，<b>观点段负责下判断，例证段只负责证明这判断是真的</b>）；'
     +'③ <b>接上因果链的钥匙是找「概括—实例」这对同位关系</b>：上游段那句概括，与例证段首句说的是<u>同一件事</u>。',
 tmpl:'<b>2010·T4·37</b>：题干 <code>the rule changes of the <b>FASB</b> may result in ___</code> 明明指向③段，'
     +'<b>可③段四句（做了什么／改了什么／谁喊冤／市场反应）一句「后果」都没有</b>。<br>'
     +'<b>钥匙</b>：<b>②❶ <code>banks\' lobbying now seems to be <u>working</u></code>（概括）＝ ③❶ <code>FASB <u>rushed through</u> rule changes</code>（实例）</b> ⟹ ②③并成一个段群 ⟹ '
     +'<b>后果写在②❷ <code>the independence of standard-setters … <b>is being compromised</b></code> ⟹ 正解 D <code>the weakening of its independence</code>。</b>',
 traps:['<b>拿「例证段里的内容」当后果</b>：2010·T4·37A（管理层作用<u>削弱</u>）与 37C（导致长期资产<u>损失</u>）都实实在在写在③段里，<b>但它们是<u>证据</u>不是<u>结论</u></b>。'
        +'<b>37A 还反了向</b>（原文是 <code>the changes <b>enhance</b> … judgment by management</code>，＝<u>加强</u>）；<b>37C 是原词拼接</b>（准则给的是「认定损失时更灵活」＝ 记账自由度，不是「造成损失」）。',
        '<b><code>unless</code> 句被读平</b>：2010·T4·37B <code>the revival of the banking system</code> 取自 ②❸ '
        +'<code><b>unless</b> banks carry toxic assets at prices that attract buyers, reviving … <b>will be difficult</b></code>。'
        +'<b>正确读法：主句 <code>will be difficult</code> 是<u>默认结局</u>，<code>unless</code> 从句是<u>唯一的解除条件</u></b>；'
        +'<b>而 FASB 的修改恰恰让银行<u>不必</u>那么做 ⟹ 复苏<u>更难</u>，与 B 项正好相反。</b>',
        '<b>最后一道容易放跑正解的关是代词的「种—属」关系</b>：2010·T4·37D 写 <code><u>its</u> independence</code>（its ＝ 题干的 FASB），'
        +'原文写 <code>the independence of <u>standard-setters</u></code>——<b>FASB 是 standard-setters 的下义词，这层包含关系必须自己接上</b>，否则会觉得「主体对不上」而放掉正解。（⟹ R38 的反向用法）',
        '⭐⭐ <b>2010·T4·37 四个干扰项四种造法一种不重，值得整题背下来当模板</b>：<b>A 反向 · B 读反条件句 · C 原词拼接 · D 同义改写（正解）</b>。'
        +'⟹ <b>由此得通用检查顺序：①先看方向有没有被调头；②再看条件句有没有被读平；③最后才比同义改写像不像。'
        +'<u>前两步是硬判据，第三步才是软判据；顺序反了就会在「像不像」上纠结半天还选错。</u></b>'],
 refs:[{p:'2010_T4_会计准则制定者被迁怒.html',q:'q37',label:'2010·T4·37（四种造法对照表）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col3',label:'2010·T4 · 02+++ 专栏（段落分工＋检查顺序）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s3',label:'2010·T4 · s3（unless 条件句）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s2',label:'2010·T4 · s2（作者观点句：is being compromised）'}]},

{id:'R72', tier:'🔴', qt:'作者态度题（专项 · 接 R12 强度尺）', title:'态度题的三道闸：同词根词查「谁对谁」· 社论里「客观」几乎必错 · 读到最后一个 but',
 trig:['The author\'s attitude towards X is one of…','选项里有 objectiveness / neutrality / indifference','选项里的态度词能在原文找到同词根的词','末段既有褒扬也有转折'],
 flow:'<b>🚧 闸一 · 选项里的态度词若能在原文找到同词根的词，<u>先查那个词是「谁对谁」的</u></b>；'
     +'<b>🚧 闸二 · <code>objective / neutral / indifferent / impartial / detached</code> 一类选项，在<u>有明确对立双方</u>的社论体里几乎必错</b>；'
     +'<b>🚧 闸三 · 读到最后一个 but</b>——<b>作者的最终态度写在最后一次转折之后，前面所有褒扬都只是铺垫。</b>',
 tmpl:'<b>收口判据（接 R12 强度尺的一条新排序）</b>：<b>作者<u>既赞又责</u>时，选那个「只承诺情感、不承诺评价」的词 ⟹ <u>同情（sympathy）&gt; 满意（satisfaction）</u>；'
     +'只肯定不批评时，才轮到满意／赞赏。</b><br>'
     +'<b>为什么</b>：<b>「同情」与「批评其某一具体行为」可以并存</b>（同情他被施压 ＋ 批评他屈服）；<b>「满意」是对其当下行为的正面评价，与批评句直接打架。</b>',
 traps:['<b>闸一实例（最阴的一项）</b>：2010·T4·40B <code>skepticism</code> 的词根确实在文中——⑤❹ <code>suggesting that <b>investors are skeptical</b></code>；'
        +'<b>但那是「<u>投资者</u>对<u>银行</u>持怀疑」，选项说的却是「<u>作者</u>对<u>准则制定者</u>持怀疑」——一个词，两端的主体全被换掉。</b>'
        +'（⟹ <b>R39 原词拼接 ＋ R21 主体校验，两刀叠加</b>）<b>命题人最爱把「文中某人对某事的态度」挪成「作者对本文主角的态度」。</b>',
        '<b>闸二实例</b>：2010·T4·40C <code>objectiveness</code>——本文是《经济学人》社论，感情词一路都是'
        +'（<code>Unfortunately</code> · <code>moan</code> 发牢骚 · <code>on the wrong planet</code> 不在地球上 · <code>politely calls</code> 美其名曰）。'
        +'<b>还有一层更硬的：「客观」意味着以既成事实为判断依据，可作者自己在⑤❸就承认 <code>The truth will not be known for years</code></b>——'
        +'<b>他的整套说理建立在<u>预期</u>之上。⟹ 作者若真客观，就不会写社论。</b>',
        '<b>闸三实例（挪时态）</b>：2010·T4·40A <code>satisfaction</code> 的依据很硬——⑥❹ <code>The FASB and IASB <b>have been exactly that</b></code>（过去正是独立而好斗的）；'
        +'<b>但末句是批评：⑥❺ <code><b>But</b> by giving in to critics <b>now</b> they are inviting pressure to make more concessions.</code></b>'
        +'⟹ <b>作者肯定的是<u>过去</u>（have been），批评的是<u>现在</u>（now）。把「对过去的肯定」当成「现在的满意」，就是挪时态。</b>',
        '⭐ <b>本题之所以是 2010·T4 全篇最难的一道：它两个最强的干扰项（A、B）都产自作者<u>自己</u>那一栏</b>'
        +'（A 取自作者的褒扬句，B 取自作者引来支持自己的论据）——<b>「只要不选靶子栏的话就安全」这条 2010·T3 的经验，在本题上失效。</b>',
        '📌 <b>态度题的两个起手式</b>：<b>① 先分清对立双方，作者骂了哪一方，就必然站另一方</b>'
        +'（本篇骂银行：<code>moan</code> · <code>lobbying</code> · <code>on the wrong planet</code> ⟹ 站准则制定者）；'
        +'<b>② 再数一遍作者写主角时用的词</b>（本篇：<code>Unfortunately</code> · <code>essential to … is being compromised</code> · <code>bruising encounter</code> · '
        +'<code>the pressure to fold</code> · <code>hostility from special interests</code> · <code>require independent and even combative</code>）——<b>一个被四方施压、本该硬气、如今正在被削弱的角色 ⟹ 同情。</b>',
        '<b>闸一又一例（2013·T2·30A）</b>：⑦❹ <code>the firm has compared some of its other products <b>favourably</b> with Google&#39;s</code>——褒义词的主语是<b>微软夸自己</b>，选项 appreciation 却是<b>作者对林奇</b>的态度（⟹ <a href="#R146">R146</a>）。',
        '<b>2015·T2·27D</b>：cautiousness ← ⑤❶ Americans should take steps to protect their digital privacy——作者对隐私谨慎、对加州明确反对；社论里「谨慎」一类中性词几乎必错，再加一条「对象错了」。',
        '<b>全站九道态度题账（至 2018 T3）</b>：中性／无态度／容忍类选项（impartial · objectiveness · tolerance ×2 · indifference ×2 · indulgence · tolerant ×2 · passive acceptance · ambiguous）共 11 个，<b>0 次正确</b>；极端档（contemptuous ×2 · sarcastic · severe criticism）4 个，0 次正确；「谨慎／犹豫」类 3 个，只有 2018 T3 cautious 对——作者两头都说了、且给了行动方向。',
        '<b>态度题账扩口径（至 2018 T4）</b>：把「作者（或人物）对某对象的态度」都算上（题干含 attitude 或 view … with），全站 11 道——T3 那本账按「含 attitude」扫，漏了 2016·T3·31（views … with）。中性／无态度／容忍类选项 13 个，<b>0 次正确</b>（tolerance／tolerant 一词就出现 6 次）；正确项 7 负（skeptical／skepticism 3 · disapproval 2 · critical · discontent）· 3 正 · 1 谨慎；极端档 4 个 0 次正确。见 2018·T4 的 02++++ 专栏。',
        '<b>镜像：新闻稿里「客观」才是对的</b>——2019·T4 是美联社电稿，导语一句报完、褒贬全挂在 said／wrote／praised 上，40 题正解 gives a factual account of it and discusses its consequences；同卷 T3 是社论，34 题作者表态 affirmation。<b>先认文体，再定作者有没有态度</b>（见 <a href="#R264">R264</a>）。'],
 refs:[{p:'2010_T4_会计准则制定者被迁怒.html',q:'q40',label:'2010·T4·40（三道闸完整拆解）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col4',label:'2010·T4 · 02++++ 专栏（三道闸 ＋ 干扰项产地总账）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q39',label:'2010·T4·39（强调句 ＝ 态度转折点）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q30',label:'2013·T2·30A（favourably 是微软自夸）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q27',label:'2015·T2·27D（谨慎的对象是隐私，不是加州）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'q25',label:'2018·T1·25C（alarming 撞作者亲口的 isn’t to be alarmist）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'col4',label:'2018·T3 · 02++++ 专栏（全站九道态度题账：中性类 11 个选项 0 次正确）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'col4',label:'2018·T4 · 02++++ 专栏（态度题账扩口径：11 道，中性类 13 个 0 次正确）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q39',label:'2018·T4·39B（tolerance：给法案的差评 ≠ 对人的容忍）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q40',label:'2019·T4·40（镜像：新闻稿里 factual account 才是正解）'}]},

{id:'R73', tier:'🔴', qt:'完形 · 概念定义句 / 术语解释句出现之后', title:'定义句与它的改写句，逐成分对齐——改写句里的空由定义句反推',
 trig:['某段出现「X, the idea that…」「X is defined as…」这类给术语下定义的句子','后文某句把定义里的关键短语<b>原词复现</b>了一次（本篇是 being experimented upon）','一句话里连着三个空，单看每个空都像「凭语感」'],
 flow:'① <b>先认出定义句</b>：术语 ＋ 逗号 ＋ <code>the idea／the view／the theory <b>that</b>…</code>，或冒号、破折号后的解释；'
     +'② <b>再找它的改写句</b>——识别标志是<b>定义里的某个短语被原词搬了过来</b>（同义替换的锚点也常已经替你换好，如 changed ⟹ alter）；'
     +'③ <b>把两句抄成左右两栏，逐成分对齐</b>，改写句里的每个空都由定义句的对应成分反推。',
 tmpl:'<b>2010 完形①段末 vs ②段末</b>（一次落地三个空 ＝ 1.5 分）：'
     +'<table class="tk"><tr><th>①段定义句</th><th>②段改写句</th><th>空</th></tr>'
     +'<tr><td>the very <b>act</b> of being experimented upon</td><td>A(n) <b>___</b> that they were being experimented upon</td><td><b>8</b> awareness</td></tr>'
     +'<tr><td>the <b>very</b>（仅仅这一点）</td><td>be <b>___</b> … <b>___</b> itself</td><td><b>9</b> enough / <b>10</b> by</td></tr>'
     +'<tr><td><b>changed</b> subjects\' behavior</td><td><b>alter</b> workers\' behavior（已给）</td><td>—</td></tr></table>'
     +'<b>⟹ 孤立地读，8/9/10 每个都像语感题；对齐了读，三个全是硬判据。</b>',
 traps:['<b>别只对齐一个空就走。</b>黄皮书在 8 题只写了一句「原词复现」，<b>没把 9、10 一起挂上去</b>——'
        +'可 <code>the <b>very</b> act</code>（＝仅此一点、别无其他）恰恰同时管着 <b>enough</b>（充分）与 <b>by itself</b>（单凭其本身）。'
        +'<b>定义句里的<u>强调词</u>往往一个人管两个空。</b>',
        '<b>时态是改写句里最容易漏掉的一栏。</b>2010 完形 8 题的 <code>expectation</code>（对未来的预期）之所以必错，'
        +'是因为从句写的是 <code>they <b>were being</b> experimented upon</code>（<b>过去进行，当时正在发生</b>）——<b>对齐时把时态也抄进去。</b>',
        '📌 <b>反向用法</b>：读到某个空孤零零地很难判时，先往回找有没有一句「定义句」；<b>找到了，这个空多半不需要新信息。</b>'
        +'（接 <a href="#R51">R51</a>：抽象名词空＝上文某概念的同义复现。）'],
 refs:[{p:'2010_完形_霍桑效应遭到质疑.html',q:'q8',label:'2010·完形·8（对齐表在这一卡里）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q9',label:'2010·完形·9（enough ← the very）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q10',label:'2010·完形·10（by itself ← the very）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'s3',label:'2010·完形·s3（改写句的结构拆解）'}]},

{id:'R74', tier:'🔴', qt:'完形 · 同词性四选一（副词、形容词、实义动词最常见）', title:'三缺一分组法：四个选项按「方向/极性」分组，成 3+1 就先赌那个孤立的 1',
 trig:['四个选项词性相同，比词义比不出高下','其中三个隐隐指向同一种感觉（都「意外」、都「主观」、都「负面」）','上下文里有 always／in any case／generally 这类<b>常态标记</b>'],
 flow:'① <b>先别逐个代入</b>——把四个选项按<b>方向／极性</b>分成两栏（不是按词性，也不是按词义远近）；'
     +'② 若分成 <b>3+1</b>，<b>孤立的那一个通常就是答案</b>：命题人造干扰项时习惯围绕「正解的反面」批量生产；'
     +'③ 再拿上下文的<b>方向标记</b>（always／in any case／but／however）验一遍，一秒收工。',
 tmpl:'<b>2010 完形一篇里用了两次，值 1 分</b>：'
     +'<table class="tk"><tr><th>题</th><th>三个一栏（错）</th><th>孤立的一个（对）</th></tr>'
     +'<tr><td><b>16</b></td><td>accidentally / unpredictably / suddenly ＝<b>意外·不规律</b></td><td><b>duly</b> ＝如期·规律（上句 <code>always</code> 定的调）</td></tr>'
     +'<tr><td><b>19</b></td><td>attempted / chose / intended ＝<b>主观意图</b></td><td><b>tended</b> ＝客观倾向（<code>in any case</code> 定的调）</td></tr></table>',
 traps:['<b>使用条件：必须按<u>极性</u>分组，按词性分一个也分不出来</b>（这两题的四个选项分别都是同词性）。'
        +'<b>分不出 3+1 就老实读上下文，别硬凑。</b>',
        '⭐ <b>「偶然词族」在完形里基本必错，已跨年考了四次</b>：'
        +'<a href="2009_完形_智力的代价.html#q2">2009 完形 2 happened to</a> ✗ · 14 by chance ✗ · 20 By accident ✗ · <b>2010 完形 16 accidentally ✗</b>。'
        +'⟹ <b>科研／统计／常态语境不填偶然词，见到先划掉。</b>',
        '⭐ <b>与它对立的「客观倾向」词族则常年当正确项</b>：<code>tend to do</code> 在 <b>2009 完形 2 题与 2010 完形 19 题连着两年都是答案</b>；'
        +'同族 be likely to／be prone to／be inclined to。<b>而 attempt／choose／intend／mean to 这一族「主观意图」词，'
        +'一旦上下文有 in any case、always、generally，一律先划掉。</b>',
        '⭐ <b>2012 完形一篇成立三次、无反例</b>：<b>4</b>（challenged／compromised／suspected 三个负面评价 ＋ <b>accepted</b>）· <b>18</b>（suppress／exploit／ignore 都不正面处理 ＋ <b>address</b>）· <b>19</b>（accessible／amiable／agreeable 都是「好相处」＋ <b>accountable</b>）——<b>三次孤立项全是答案</b>；分不出 3+1 的 3 题（restored／established 对 weakened／eliminated，2 正 2 负）就老实读 Yet 定方向。',
        '⭐ <b>2013 完形按意义方向分成立四次，孤立项全是答案</b>：<b>8</b>（emphasize／share／promote 都预设想法已成立 ＋ <b>test</b>）· <b>10</b>（found／studied／identified 都有目的 ＋ <b>chosen</b>）· <b>19</b>（achieve／maintain／disregard 之后影响都还在 ＋ <b>undo</b>）· <b>20</b>（possible／promising／helpful ＋ <b>necessary</b>）。⚠️ <b>两个反面教材</b>：5 题 thoughtless 是唯一带否定后缀的、7 题 until 是唯一的时间连词——<b>按词形、词类孤立出来的都不是答案</b>，印证「只按极性／方向分」。',
        '<b>2014 完形：三缺一成立五次，孤立项五次全是答案</b>（4 damaging · 11 However · 13 further · 15 allows · 20 effective）；<b>2＋2 的组（2 两正两负、18 两个「经常」两个「不寻常」）先按方向划掉两个，再比程度或理由</b>。',
        '⭐ <b>2015 完形：三缺一成立七次（本站记录最多），孤立项七次全是答案</b>（1 what · 7 know · 8 resemble · 10 Perhaps · 13 rather than · 18 tendency · 19 ethnic）——<b>我唯一的错题 13 就在这七次里</b>，先分组再代入这一分本可保住（⟹ <a href="#R192">R192</a>）。2＋2 的 15（faster／slower 讲速度、later／earlier 讲时间）先定维度再定方向；6 四个选项全带否定前缀，按词形分不出组（⟹ <a href="#R194">R194</a>）。',
        '⚠️ <b>与 2013 反面教材的边界</b>：2015 的 1 what 看起来是「按词类孤立」（三副词 ＋ 一代词），但真正的理由是<b>语法功能</b>——从句缺宾语，只有代词补得上；10 Perhaps 是「连接副词 vs 语气副词」，理由是上一句 difficult to explain 要求推测。⟹ <b>孤立的理由必须能回答「这个空要什么」才算数</b>；只因为「长得不一样」（2013 的 thoughtless 带后缀、until 是时间连词）就赌，照旧不可靠。',
        '<b>2016 完形：三缺一成立 13 次，孤立项全是答案（本站记录最多）</b>——1 as well as（并列 vs 三个介词短语）· 3 arrange（从无到有 vs 预设已开始）· 5 After · 13 until（时间 vs 逻辑）· 16 whatever（能修饰名词 vs 副词性）· 17 brought · 19 shows（原样／出现 vs 变形、消失）……⚠️ 其中 8、10 两组理由偏软。<b>介词失效的题往往同时是三缺一</b>：三个错项同一族。',
        '<b>2017 完形：三缺一成立 8 次，孤立项全是答案</b>——3 host（唯一甘当量词）· 5 involving（唯一「人在研究里」）· 9 calculated（唯一确定的量化）· 11 Even（唯一直走加码）· 12 symptoms（唯一医学词）· 13 increased（唯一让风险变坏）· 16 in the face of（唯一讲处境）· 17 attribute（唯一 to＝来源）；5、13 两组偏软。',
        '<b>2018 完形：三缺一成立 11 次，孤立项全是答案（仅次于 2016 的 13 次）</b>——2 faith（唯一「信」）· 6 produces（唯一从无到有）· 9 mood（唯一在人心里）· 11 Lucky（唯一好消息）· 13 between（唯一能管 X and Y）· 14 introduced（唯一人与人）· 15 inside（唯一朝向容器）· 16 discovered（唯一刚知道）· 17 fooled（唯一不带恶意）· 19 In contrast（唯一拐过去比）· 20 unreliable（唯一说信不信得过）；6、15、20 三组偏软。',
        '<b>2019 完形：三缺一成立 11 次，孤立项全是答案（与 2018 持平）</b>——1 Few（唯一否定）· 6 off（唯一离开路）· 7 unfamiliar（唯一说你认不认得）· 8 way（唯一是方向）· 11 surprised（唯一可正）· 14 spot（唯一是看见）· 16 breaks（唯一「空了一块」）；3、12、17、20 四组偏软。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q13',label:'2015·完形·13（三个拉进来 ＋ rather than 推出去）'},{p:'2015_完形_朋友是基因上的远亲.html',q:'q18',label:'2015·完形·18（三个刻意 ＋ tendency）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q15',label:'2014·完形·15（三个从外面推 ＋ allows 给能力）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q13',label:'2014·完形·13（三个不往前 ＋ further）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q8',label:'2013·完形·8（三个传播族 ＋ test）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q19',label:'2013·完形·19（影响还在 vs 影响消失）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q4',label:'2012·完形·4（三负一正）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q18',label:'2012·完形·18（三个不正面处理）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q19',label:'2012·完形·19（三个好相处）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q16',label:'2010·完形·16（duly，全篇最难的一空）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q19',label:'2010·完形·19（tended，同一把刀的第二次）'},
       {p:'2009_完形_智力的代价.html',q:'q2',label:'2009·完形·2（tended，跨年第一次）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q17',label:'2016·完形·17（四个全接 into，三个变形 ＋ 一个原样）'},
       {p:'2017_完形_拥抱有益健康.html',q:'q17',label:'2017·完形·17（三个 to＝去向 ＋ 一个 to＝来源）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q11',label:'2018·完形·11（三个意外族 ＋ Lucky）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q19',label:'2018·完形·19（三个顺着说 ＋ In contrast）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q16',label:'2019·完形·16（三个「有东西」＋ breaks 空了一块）'}]},

{id:'R75', tier:'🔴', qt:'完形 · 叙事型／证伪型文章（讲一件真事、然后推翻它）', title:'开考先标转折点：命题人一定在每个转折上设空，而信号词就贴在空格旁边',
 trig:['首句砸下多个专有名词（年份、机构名、地名）⟹ 这是「讲一件真事」的叙事文','文中出现 Instead／surprise／It turns out／a comparison with…','某段在夸某个观点有多 influential ⟹ 后面多半要翻盘（先扬后抑）'],
 flow:'① <b>通读时只做一件事：把每一处「方向掉头」的地方圈出来</b>（Instead · another surprise · However · 对照组句）；'
     +'② <b>这几处的空是白送的</b>——信号词几乎都在空格的<b>同句或紧邻上一句</b>，不用远读；'
     +'③ 圈完转折点，全文的骨架（谁被推翻、被什么推翻）就有了，剩下的空再顺着读。',
 tmpl:'<b>2010 完形的三次反转，三次都设了空</b>：'
     +'<table class="tk"><tr><th>转折点</th><th>信号在哪</th><th>空</th></tr>'
     +'<tr><td>本想查照明 ⟹ 查出了「霍桑效应」</td><td><code>Instead</code>（<b>同句句首</b>，离空格七个词）</td><td><b>2</b> ended <b>up</b></td></tr>'
     +'<tr><td>当年的结论 ⟹ 几十年后重算</td><td><code>another <b>surprise</b> in store</code>（<b>上一句</b>）</td><td><b>12</b> Contrary to</td></tr>'
     +'<tr><td>实验期 ⟹ 非实验期（对照组）</td><td><code>data for weeks when there was <b>no</b> experimentation</code>（<b>本句从句</b>）</td><td><b>18</b> However</td></tr></table>'
     +'<b>📌 通用推论：凡出现 surprise／paradox／twist／another story 这类<u>预告词</u>，紧随其后的空一律填反向。</b>',
 traps:['<b>「首句专名密度」是判文体最快的一刀。</b>2010 完形首句一口气给了 1924 · America\'s National Research Council · the Hawthorne Plant near Chicago '
        +'⟹ <b>这是讲真事的叙事文</b> ⟹ 全篇的空都服从「已经发生的事实」这一前提，<b>凡「假设／预期／可能／错觉」类选项优先怀疑</b>'
        +'（8 题的 <code>expectation</code> 与 <code>illusion</code> 正是死在这条上）。',
        '⭐ <b>「对照组句」是证伪型文章的固定杀招</b>：<code>a comparison with data for weeks when there was <b>no</b> X</code>——'
        +'<b>凡科学类文章出现「与没有 X 的那些情况相比」，这句一定是来拆前面那条因果的</b>，接缝处只能填转折。'
        +'<b>而这也正是霍桑实验站不住脚的根本原因：当年没有设对照组。</b>',
        '<b>末空不一定是收口。</b>2010 完形的收口句 <code>This suggests that the alleged “Hawthorne effect” is hard to pin down.</code> '
        +'<b>没有设空</b>，20 空填的是倒 U 曲线的中段。⟹ <b>做到最后一空发现它不是总结句时别慌，往后再读一句</b>——'
        +'那句没设空的收口，往往正是验算前面若干空方向的最后一道保险（本篇它同时验了 12、14、18 三个空）。'],
 refs:[{p:'2010_完形_霍桑效应遭到质疑.html',q:'q2',label:'2010·完形·2（Instead ⟹ ended up）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q12',label:'2010·完形·12（surprise ⟹ Contrary to）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q18',label:'2010·完形·18（对照组接缝 ⟹ However）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q14',label:'2010·完形·14（上段的结论决定本段形容词的褒贬）'}]},

{id:'R76', tier:'🟢', qt:'元套路 · 完形（拿到卷子的头十秒用）', title:'先看空格的位置，再看选项：句首的空几乎一定考逻辑，句内的空考词义与搭配',
 trig:['刚拿到完形，还没开始读文章','某个空卡住了，不确定该往「逻辑」还是「词义」的方向想'],
 flow:'① <b>扫一遍 20 个空<u>在句子里的位置</u></b>：落在<b>句首／分句首</b>的，几乎一定是<b>逻辑连接词</b>（先画方向，不看词义）；'
     +'落在<b>主谓宾内部</b>的，考的是<b>词义辨析或固定搭配</b>；'
     +'② <b>再花十秒扫一遍 20 组选项</b>，判断这一年把分压在哪：'
     +'多是连接词／副词 ⟹ 考逻辑；多是实义动词 ⟹ 考搭配与主语适配；多是同词性形容词 ⟹ 考褒贬与程度；'
     +'③ <b>第一遍只做「线索在同一句之内」的空</b>，跨句的留到第二遍。',
 tmpl:'<b>十二年考点分布（自己数的，判据＝「解这一题你得做什么动作」）</b>：'
     +'<table class="tk"><tr><th>年份</th><th>词义 / 搭配 / 逻辑 / 语境</th><th>这一年压在哪</th></tr>'
     +'<tr><td>2007</td><td>9 / 5 / 4 / 2</td><td>词义辨析</td></tr>'
     +'<tr><td>2008</td><td>9 / 6 / <b>2</b> / 3</td><td>六道实义动词的主语适配</td></tr>'
     +'<tr><td>2009</td><td>6 / 5 / 5 / 4</td><td>四类几乎持平</td></tr>'
     +'<tr><td>2010</td><td>9 / 4 / 4 / 3</td><td>形容词与副词的「方向」</td></tr>'
     +'<tr><td>2011</td><td>6 / 3 / <u>6</u> / 5</td><td>一根因果箭头的方向（逻辑空最多）</td></tr>'
     +'<tr><td>2012</td><td>5 / 4 / 3 / <u>8</u></td><td>作者的应然立场 ＋ 首尾镜像（语境空最多）</td></tr>'
     +'<tr><td>2013</td><td><u>3</u> / <u>7</u> / 4 / 6</td><td>空格前后的介词框架（搭配最多、词义最少）＋ 比方与发现同构</td></tr>'
     +'<tr><td>2014</td><td>5 / 6 / 3 / 6</td><td>按段定正负 ＋ 贯穿比喻 ＋ 说明书式短语（搭配、语境并重）</td></tr>'
     +'<tr><td>2015</td><td>6 / 6 / 3 / 5</td><td>研究报道的槽位套话 ＋「不止于表面」四连（词义、搭配并重）</td></tr>'
     +'<tr><td>2016</td><td>6 / 3 / 6 / 5</td><td>流程时间轴 ＋ 许可与现实 ＋ 动作画面（六个逻辑空没有一个因果）</td></tr>'
     +'<tr><td><b>2017</b></td><td><b>7 / 4 / 3 / 6</b></td><td><b>一条因果链的扣环词 ＋ 递进台阶 ＋ 框架正负号（三个逻辑空两个是递进）</b></td></tr><tr><td><b>2018</b></td><td><b>5 / 4 / 4 / 7</b></td><td><b>两本账的翻账键 ＋ 对照实验平行句 ＋ 主题词替身（语境空 7 个，仅次于 2012）</b></td></tr></table>'
     +'<b>⟹ 2007–2015 九年九种分布；2016 第一次重样——与 2011 完全相同（6/3/6/5）</b>，但这是口径造成的：2016 的 12／17／19 是介词失效题，按答案形态归搭配就成了 6/6/6/2。更有用的是<b>逻辑空的种类</b>：2011 挂在因果箭头上，2016 挂在时间轴上。并且 2013–2015「逻辑 ≤ 4」的三连被 2016 打断。<b>2017 是 7/4/3/6，与前十年都不同</b>（7 exposed、14 associated 若按答案形态归搭配则为 5/6/3/6）。<br>'
     +'<b>原话（2015 时写）：九年九种分布，「完形没有万能重心」已第九次坐实</b>——但 2015 与 2014 只差一空（12 drive 若归语境就完全相同）；更稳的是 <b>2013–2015 连续三年搭配 ≥ 6、逻辑 ≤ 4</b>。',
 traps:['<b>2012：三个逻辑空 3/3 落在「成分首」</b>——2、11 在从句首，<b>20 插在 and 与第二个补足语之间（前后都有逗号）</b> ⟹ 「句首＝逻辑」可扩写成「成分首＝逻辑」。线索位置统计：句内自足 16 ／ 跨句 4（<b>80%</b>；2010 65% → 2011 75% → 2012 80%），我犹豫过的 9 题正是四个跨句空之一。',
        '<b>句首＝逻辑，2011 完形再次 4/4 成立</b>：1（But 之后的状语位）· 6（段首）· 11（句首）· 20（句首），<b>四个逻辑空全部在句首或近句首</b>，其余 16 个空全在主谓宾内部。<b>而 2011 的线索位置统计是「句内自足 15 ／ 跨句 5」——句内比例升到 75%，但我唯一做错的 20 题正是那五个跨句空之一。</b>',
        '<b>「句首＝逻辑」这条<u>反向</u>最稳，正向不是铁律。</b>2010 完形四个逻辑空（7 分句首 · 12 · 15 · 18）<b>全部落在句首或分句首，4/4 成立</b>；'
        +'2009 句首的 1 Consider · 18 Above all · 20 So far 也全是逻辑。'
        +'<b>但反过来不成立</b>：<a href="2009_完形_智力的代价.html#q14">2009 完形 14 题</a>的 <code>for instance</code> 就以<b>插入语</b>形态出现在句中。'
        +'⟹ <b>看见空在句首，放心按逻辑做；看见空在句中，别以为就一定不考逻辑。</b>',
        '📌 <b>线索位置统计（2010 完形，判据＝线索是否落在同一个句号之内）：句内自足 13 空 ／ 跨句 7 空。</b>'
        +'⟹ <b>第一遍先把 65% 的句内空锁住（6.5 分），第二遍再回头处理那七个跨句的</b>——时间和心态都稳。',
        '<b>别指望一招通吃。</b>四年的信号类型各不相同：2022 靠 nonetheless／However 这类<b>明信号词</b>；2007 靠 less agreement／except 这类<b>结构性信号</b>；'
        +'2008 <b>基本不给信号</b>，靠「动词能不能带这个主语」；2009 靠<b>语用功能</b>（引例、递进、收口）；<b>2010 靠<u>叙事的方向</u></b>（三次反转 ＋ 一个对照组 ＋ 两组三缺一）。',
        '⚠️⚠️ <b>2013：位置预判一篇破例两次</b>——四个逻辑空 4 For example（句首）· 7 if（从句首）成立，<b>11 otherwise 在句末表语位</b>（the truth was ___）、<b>15 then 夹在 were 与 used 之间</b>，只有 2/4（继 2009 完形 14 题插入语 for instance 之后第二次破例）。⟹ <b>边界</b>：连词、短语型逻辑词站成分首；<b>单个副词（then／instead／thus）可以嵌进谓语，形容词型 otherwise 可以站表语位</b>——扫到「助动词 ＋ 空 ＋ 分词」「the truth was ＋ 空」也要当逻辑空看。线索位置：句内自足 14 ／ 跨句 6（<b>70%</b>，2012 是 80%）。',
        '<b>2014：三个逻辑空按「成分首」3/3 成立</b>——3 While、11 However 在句首，12 according to 站在状语短语之首（2013 两次破例的是单个副词、形容词，短语介词照旧守规矩）。线索位置：句内自足 17 ／ 跨句 3（<b>85%，五年最高</b>）⟹ 这一年最适合「第一遍只做句内空」。',
        '<b>2015：三个逻辑空按「成分首」2/3</b>——10 Perhaps 句首、13 rather than 站在后一成分之首，<b>9 also 夹在主语和谓语之间</b>（<code>The study ___ found</code>，继 2013 的 then 之后，单个副词又一次嵌进谓语）。线索位置：句内自足 13 ／ 跨句 7（<b>65%，与 2010 并列最低</b>），且 15、19 两空的钥匙都在<b>下一句</b>——卡住时别只往回看。',
        '<b>2016：六个逻辑空按「成分首」6/6 全守规矩</b>——4 In theory、5 After 句首，7 but、13 until、20 while 分句首，1 as well as 并列成分之首；反过来，<b>句内十四个空没有一个是逻辑空</b>。线索位置：句内自足 19 ／ 跨句 1（<b>95%，七年统计最高</b>，唯一跨句的是 4）——说明文每句讲一件完整的事，句子之间几乎不借力。',
        '<b>2017：三个逻辑空按「成分首」3/3 全守规矩</b>——1 Besides、11 Even 句首，18 because 分句首；句内十七个空没有一个是逻辑空。线索位置：句内自足 18 ／ 跨句 2（<b>90%</b>，跨句的 11、19 钥匙都在上一句）。',
        '<b>2018：四个逻辑空按「成分首」4/4 全守规矩</b>——4 Then、11 Lucky for us 段首，5 When、19 In contrast 句首；句内十六个空没有一个是逻辑空。⚠️ 11 题选项是四个形容词，看着像词义辨析，其实是段首评注语——<b>按位置当逻辑空做，一下就想到正负号</b>。线索位置：句内自足 13 ／ 跨句 7（<b>65%</b>，与 2010、2015 并列最低；跨句多是因为段首空要看上一段、对照组的空要看实验组那一句）。',
        '<b>2019：四个逻辑空按「成分首」4/4 全守规矩</b>——3 If、9 So、13 For example 句首，18 Finally 段首；句内十六个空没有一个是逻辑空。⚠️ <b>反向不成立</b>：句首／段首空 6 个里 2 个不是逻辑空——1 ___ of us 是主语、12 Another ___: 是名词——<b>先看空格紧挨着的词</b>（紧跟 of、紧接冒号、前有限定词就不是连接词）。线索位置：句内自足 12 ／ 跨句 8（<b>60%，2010 年以来最低</b>；14 若算句内则 65%）——清单体的编号、举例、回指、概括空都要跨句。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q9',label:'2015·完形·9（逻辑副词嵌在主谓之间）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q12',label:'2014·完形·12（短语介词站成分首）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q15',label:'2013·完形·15（逻辑副词嵌在 were 与 used 之间）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q11',label:'2013·完形·11（逻辑空在句末表语位）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q20',label:'2012·完形·20（成分首 ⟹ 逻辑，空在句中）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q20',label:'2011·完形·20（句首 ⟹ 逻辑，但考类比不是因果）'},{p:'2010_完形_霍桑效应遭到质疑.html',q:'q7',label:'2010·完形·7（分句首 ⟹ 条件连词）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q15',label:'2010·完形·15（句首 ⟹ 总分关系）'},
       {p:'2009_完形_智力的代价.html',q:'q14',label:'2009·完形·14（反例：引例以插入语形态出现在句中）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q4',label:'2016·完形·4（唯一跨句的空，句首 ⟹ 逻辑）'},
       {p:'2017_完形_拥抱有益健康.html',q:'q18',label:'2017·完形·18（分句首 ⟹ 逻辑，名字由来 ⟹ because）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q11',label:'2018·完形·11（形容词选项的段首空 ⟹ 按逻辑空做）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q12',label:'2019·完形·12（段首空却是名词：Another ___:）'}]},

{id:'R77', tier:'🟡', qt:'完形 · 句内空（并列、分号、顺承结构里的空）', title:'结构连词是免费的方向指示器：and 同向 · 分号互释 · before…and then 顺承',
 trig:['空格前后有 and／but／or 连接的并列成分','句中有分号，两侧各是一个完整分句','一句话里排着 first…before…and then… 这类顺承标记'],
 flow:'① <b>先找结构连词，不找词义</b>：<code>and</code> 两侧<b>同向</b>｜<code>but／yet／however</code> 两侧<b>反向</b>｜<code>or</code> 两侧<b>择一</b>；'
     +'② <b>分号两侧讲同一件事</b>（互为解释或互为正反说法）⟹ 一侧已知就能反推另一侧，两个空还能互相验算；'
     +'③ <b>顺承结构先把几个阶段抄成一条线</b>，空格填的是线上缺的那一段，方向由左右两端夹出来。',
 tmpl:'<b>2010 完形三处，全是「读都不用读语义」的空</b>：'
     +'<table class="tk"><tr><th>结构</th><th>怎么定</th><th>空</th></tr>'
     +'<tr><td><code>output <b>rose</b> … <b>and</b> ___ to rise</code></td><td>and 同向 ⟹ 只能「继续」</td><td><b>17</b> continued</td></tr>'
     +'<tr><td><code>It did not ___ what was done<b>;</b> ___ something was changed, productivity rose</code></td><td>分号两侧同义重述 ⟹ 互为答案</td><td><b>6</b> matter / <b>7</b> so long as</td></tr>'
     +'<tr><td><code>diligent … <b>before</b> ___ a plateau <b>and then</b> slackening off</code></td><td>勤奋(升)→___(平)→懈怠(降)，倒 U 曲线</td><td><b>20</b> hitting</td></tr></table>',
 traps:['<b>and 后面的空，「违背事理」的选项比「方向反」的更隐蔽。</b>2010 完形 17 题的 failed／ceased 一眼能看出反向，'
        +'<b>可 started to rise 字面完全通顺</b>——错在<b>产量已经 rose 了，不可能到接下来几天才「开始」升</b>。<b>方向对了还要再验一遍时间顺序。</b>',
        '<b>顺承结构里，选项会拿「同一条曲线的别的形状」来造干扰。</b>2010 完形 20 题：<code><b>breaking</b> a plateau</code>（突破）会把曲线变成<b>没有「平」段的倒 V</b>，'
        +'<b>而 plateau 这个词本身的意思就是「平」——自相矛盾</b>；<code>climbing</code>（还在爬、尚未到达）则把顺序弄乱。'
        +'<b>把三个阶段抄成一条线，形状对不上的当场出局。</b>',
        '📌 <b>分号空的做题顺序：先做那个有硬判据的。</b>2010 的 6 与 7，<b>7 题（条件连词）方向更明确</b>，'
        +'定下 7 再回头看 6，「做什么不要紧」就顺出来了。（同 <a href="#R55">R55</a>：两空互相牵制时先做有硬排除的那个。）',
        '<b>2016·完形·3 与 8</b>：<code>decide on … and then ask his parents to ___ the marriage negotiations</code>——and then 排先后，商谈此刻尚未开始 ⟹ arrange；<code>offer a short sermon and ___ prayers</code>——and 并列 ⟹ 同一场合的口头动作 ⟹ recite（copy 是书面动作）。',
        '<b>2017·完形·2</b>：<code>feel close and ___ to people you care about</code>——四个形容词全接 to，介词筛不掉，只剩 and 同向 ⟹ connected（inferior、restricted 反号）。'],
 refs:[{p:'2010_完形_霍桑效应遭到质疑.html',q:'q17',label:'2010·完形·17（and 同向）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q6',label:'2010·完形·6（分号左侧）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q20',label:'2010·完形·20（倒 U 曲线的中段）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'s5',label:'2010·完形·s5（把状语全划掉再看主干）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q3',label:'2016·完形·3（and then：流程只能往前走）'},
       {p:'2017_完形_拥抱有益健康.html',q:'q2',label:'2017·完形·2（and 同向，介词失效）'}]}
,

{id:'R78', tier:'🔴', qt:'新题型 · 排序题（Part B 第四种变体）', title:'做题顺序不是 41→45：先啃「被已给定段夹住」的那个空，再用排除法定首段，最后让约束往中间传',
 trig:['Directions 里出现 choose the most suitable paragraphs … fill them into the numbered boxes','题干画着 41→42→43→44→[X]→45 这样的链条，其中一格已经填好','七个完整段落，要填五个，一个多余'],
 flow:'① <b>先做被「已给定段」夹住的空</b>——已给定段只有一到两个邻居，<b>它的段尾（或段首）是全篇最硬的一处钩子</b>；'
     +'② <b>再定首段</b>：逐项查段首有没有「回头看的词」，有一个就出局（见 <a href="#R79">R79</a>）；'
     +'③ <b>沿链条正推中间几格</b>：每一格只回答一个问题——「上一格的<u>末句</u>在等什么」；'
     +'④ <b>通读一遍验闭合</b>：读得顺 ＝ 接缝都成立，磕绊处就回去查那一处；'
     +'⑤ <b>最后把多余项逐格试一遍</b>，全装不进去才算收工——<b>多余项验不过，说明前面某一步排错了</b>。',
 tmpl:'<b>2010《欧洲食品杂货商向批发转型》五步实况</b>：'
     +'<table class="tk"><tr><th>步</th><th>动作与证据</th></tr>'
     +'<tr><td><b>1</b></td><td>E 固定在第 5 位 ⟹ 只剩 45 这一个邻居。E 末句 <code>mask <b>two opposing trends</b></code> ⟹ 只有 A 以 <code>The <b>first</b> and more important is…</code> 开头 ⟹ <b>45＝A，五秒锁死</b></td></tr>'
     +'<tr><td><b>2</b></td><td>段首排除法 ⟹ A/C/D/E/F/G 全出局 ⟹ <b>41＝B</b>（这一步不用读懂内容）</td></tr>'
     +'<tr><td><b>3</b></td><td>B 尾抛未证的论断 ⟹ F 首 <code>For example</code>（42）；F 列完四条 ⟹ D 首 <code>All in all</code>（43）；D 尾抛三项要求 ⟹ G 首 <code>these requirements</code>（44）</td></tr>'
     +'<tr><td><b>4</b></td><td>通读 <b>B—F—D—G—E—A</b>：问题→论据→总结与条件→打消顾虑→市场构成→趋势之一</td></tr>'
     +'<tr><td><b>5</b></td><td>C 逐格试：42 处上文没有 variations · 43 处交不出 requirements · 45 处交不出「第一个趋势」⟹ <b>C 多余，反证前四步无误</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>用时 8–10 min</b>：读七段首末句 3 ＋ 定首末 1 ＋ 串链 3 ＋ 通读 2。'
     +'<b>2010 这篇 545 词是 Part B 四种变体里最长的，但真正决定五个答案的不到 60 词。</b></p>'
     +'<p style="margin-top:8px"><b>2011 第二次验证有效，并补一条细则：<u>已给定段有好几个时，先做邻居少的那一个</u></b>——2011 的 <code>G→41→42→E→43→44→45</code> 里，G 只有 1 个邻居（41）、E 有 2 个（42、43），<b>从 G 那一侧起手最不容易走岔</b>（G 末句刚点出人名 ⟹ 41 只能是以 <code>His concern</code> 开头的 B）。黄皮书走的是另一条：先做 E 的上文 42。<b>两条都对，但已给定段是全卷唯一免费的锚，它的邻居必然有硬证据。</b></p>',
 traps:['<b>从 41 顺着往下做，是排序题最贵的错法。</b>首段一旦定错，后面全线崩；'
        +'而<b>被已给定段夹住的那个空几乎总是最好做的</b>——命题人把 E 放在那里，就是为了给你一个支点。<b>支点必须第一个用。</b>',
        '<b>别用「结尾该有总结感」去挑最后一格。</b>2010 最后一格填的是<b>两个趋势里的第一个</b>，文章到这儿戛然而止（真题是节选，本来就没有结尾段）。'
        +'<b>排序题只认接缝，不认语感。</b>',
        '<b>通读验证这一步不许省。</b>Part B 四种变体里，<b>只有排序题与选句填空能自查</b>（标题匹配、观点匹配想验都没得验）——'
        +'这是白送的红利，花一分钟通读，等于给 10 分买保险。',
        '<b>第⑤步（验多余项）不是每年都有。</b>2011 是<b>七格七项、零多余项</b>，没有多余项可以拿来反证，<b>整链通读就成了唯一的自查工具</b>；而且零多余项下<b>一处排错必然连累第二处</b>（错位成对发生）。<b>开考先数格子，见 <a href="#R107">R107</a>。</b>',
        '<b>2014：夹心格不一定先做——动手前先给每格数候选。</b>42 被 A、E 两个已给定段夹住，但两头都是软钩（A 尾是偶然发现的例子、E 首是 today），C 与 F 各能对上一部分；首段 41 反而只有 C 一个候选（首段排除法）⟹ 先做 41，它把 42 的候选从 2 个砍到 1 个。<b>修正版：候选最少的格先做；候选数相同，再看谁的已给定邻居多、钩更硬。</b>',
        '<b>2017：三格单候选，从两头往中间夹</b>。<code>D→41→42→43→44→B→45</code>：41 只有 F（生平起点，唯一不欠上文的段首）、44 只有 C（B 的 as it is generally known today 要上文给过全称）、45 只有 G（After Pickwick）；三格一落，池里只剩 E、A，两头各有硬钩（imprisoned → release · Boz → <i>Sketches by Boz</i>），42、43 不用单独思考。<b>黄皮书则从 B 往回推（44 → 43 → 42 → 41 → 45），两条路同样可行。</b>',
        '<b>2018：原版口诀最标准的一年</b>——链条 41→C→42→43→F→44→45，两个已给定段各锁一格：C 首 as it was originally known 锁 41（只有 E 有现名全称）、F 首 Construction took 17 years 锁 43（只有 A 末有 construction … began）；两格一落，G 被「时间只能往前」挤进 42。',
        '<b>2019：已给定段两边都空时，头尾各锁一格</b>——链条 41→42→F→43→44→C→45：F 首 These views … also 锁 42、F 末 in one way 锁 43；C 首 None of this 锁 44、C 的七个祈使动词锁 45（These tools）。两段一共锁四格，41 用首段排除法——<b>六年里证据最硬的一条链条</b>。'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q45',label:'2010·新题型·45（先做被 E 夹住的空）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q41',label:'2010·新题型·41（排除法定首段）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 00 节打法五步表'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'cand',label:'2014·新题型 · 02+ 每格候选表（夹心格 42 有两个候选，首段 41 只有一个）'},
       {p:'2017_新题型_狄更斯小传.html',q:'cand',label:'2017·新题型 · 02+ 每格候选表（41／44／45 各一个候选）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'cand',label:'2018·新题型 · 02+ 每格候选表（41、43 被已给定段锁死）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'cand',label:'2019·新题型 · 02+ 每格候选表（41、42、45 各一个候选）'}]},

{id:'R79', tier:'🔴', qt:'新题型 · 排序题（定首段 / 定任意一段的位置）', title:'首段判据：段首带「回指词 / 逻辑连接词 / 省略成分」的一律出局，剩下那个干净的就是首段',
 trig:['排序题要定首段','某一格前后都空着，找不到抓手','想在一分钟内先拿下一个空'],
 flow:'① 只读七项的<b>第一句的前五个词</b>；'
     +'② 查三类「回头看的成分」，<b>命中一类就出局</b>：'
     +'<b>Ⅰ 回指词</b>（such / this / these / that ＋ 名词）· <b>Ⅱ 逻辑连接词</b>（For example / All in all / However / Despite / Moreover / Instead）· '
     +'<b>Ⅲ 省略成分</b>（序数词后省了中心词、比较级没有比较对象、代词找不到人）；'
     +'③ 剩一个 ⟹ 首段；剩两个 ⟹ 再比「哪一段完全不需要上文也读得懂」。',
 tmpl:'<b>2010 的七项，六项各带一个路标</b>：'
     +'<table class="tk"><tr><th>项</th><th>段首</th><th>判定</th></tr>'
     +'<tr><td>A</td><td><code>The first and more important <b>is</b>…</code></td><td>Ⅲ 省略中心词（第一个「什么」）⟹ 出局</td></tr>'
     +'<tr><td>C</td><td><code>Will <b>such variations</b> bring about…</code></td><td>Ⅰ 回指 ⟹ 出局</td></tr>'
     +'<tr><td>D</td><td><code><b>All in all</b>, <b>this</b>…market</code></td><td>Ⅱ＋Ⅰ ⟹ 出局</td></tr>'
     +'<tr><td>E</td><td><code><b>Despite variations in detail</b>,…</code></td><td>Ⅱ 让步状语 ⟹ 出局</td></tr>'
     +'<tr><td>F</td><td><code><b>For example</b>,…</code></td><td>Ⅱ 例证 ⟹ 出局</td></tr>'
     +'<tr><td>G</td><td><code><b>However</b>, none of <b>these requirements</b>…</code></td><td>Ⅱ＋Ⅰ ⟹ 出局</td></tr>'
     +'<tr><td><b>B</b></td><td><code>Retail sales … are at a standstill</code></td><td><b>干净 ⟹ 首段</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>首段的正面长相（用来复核）</b>：<code>背景 → 已试过的路都不通 → But 抛出真正的观点</code>，'
     +'三句话走完「问题 ⟹ 主张」，<b>内容相对独立完整</b>，且它抛出的那个观点就是全文的论述中心。</p>',
 traps:['<b>第Ⅲ类（省略成分）最容易漏</b>，因为它<u>没有任何长得像连接词的词</u>。'
        +'<code>The first and more important is…</code> 表面上是个正常的主系表，'
        +'<b>但「第一个」后面的中心词被省了——省略本身就是回指</b>。同类还有：<code>Another reason is…</code>、<code>A second problem…</code>、<code>Worse still,…</code>。',
        '<b>别去找「哪一段读起来最像开头」</b>（最有气势的、最抽象的、最像总起的）——那是语感，不是判据。'
        +'<b>首段不一定最像开头，但一定最不需要上文。</b>',
        '这条判据<b>反过来同样管用</b>：某一项段首带回指词 ⟹ 它一定<u>不在</u>第一格，而且<b>它的上一格必须真的提供了被回指的那个东西</b>——'
        +'2010 的 43 题就是靠这一步把 C 排掉的（C 的 such variations 形式上过关，但上文 F 给不出它要的「变化」这条主线）。',
        '<b>首段被题目直接给定时，这套查法不作废，只是换了用途。</b>2011 的首段 G 是题目给的，于是七个段首的路标全部变成<b>粘块</b>的依据（见 <a href="#R108">R108</a>）：C 的 <code>Equally</code> 说明它必须紧跟一个「不足为奇」的结论、D 的 <code>such courses</code> 说明它必须紧跟一个讲课程的段落。<b>路标的本质从来不是「定首段」，而是「这一项欠上文什么」。</b>',
        '<b>2014：首段空着，这把刀重新派上用场。</b>B <code>In another case</code>（要先有 one case）· D <code>Surveys can cover</code>（光杆复数当已知概念）· F <code>…, however,</code> · G <code>Ground surveys</code>（要先有「非地面」）四段出局，只剩设问的 C。<b>设问句（How do … ?）是零依赖开头里最像首段的一种</b>；已给定的第 2 段 A 以 <code>Some … have always been easily observable</code> 开头，正好是设问 <code>nothing visible</code> 的反面前提。',
        '<b>2018 补两类「欠上文」</b>：④ <b>缩写未定义</b>——G、D 用 the EEOB，首段必须是给出全称 ＋ 括号缩写的那一段（E）；⑤ <b>预设旧物的形容词</b>——A 首 In December of 1869, Congress appointed a commission 三类都不命中、最像首段，但 a <b>new</b> State Department Building 预设旧楼已不在（G 末才拆）。',
        '<b>2019 再加一类「比较与程度」</b>：E 首 a better way、D 首 not so successful 都欠一个被比的对象（<a href="#R271">R271</a>）。另：<b>段首代词若是后指</b>（In his 1936 work …, Dale Carnegie wrote——his 在同一句里就兑现成全名）<b>不算欠上文</b>，判据是所指在不在本句。'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q41',label:'2010·新题型·41（六项六个路标）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 02+ 首段判据表'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'q41',label:'2014·新题型·41（首段排除法唯一幸存者：设问的 C）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q41',label:'2018·新题型·41（缩写首现 ＋ 最像首段的假首段 A）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q41',label:'2019·新题型·41（只有 B 一样不欠；his 是后指）'}]},

{id:'R80', tier:'🔴', qt:'新题型 · 排序题（串链条 / 找证据）', title:'排序题的证据只长在段首和段尾：七段一共 14 个接口，五种缝法分强弱',
 trig:['已经定下首段，要往下串','两段都能接在同一处，需要比强弱','时间不够，想知道哪些句子可以跳读'],
 flow:'① 把每段的<b>首句</b>与<b>末句</b>划出来——<b>段首＝指向上文的路标，段尾＝指向下文的预告</b>，中间的句子只用来验算；'
     +'② 逐个接缝问一句：<b>上一段的末句在等什么？</b>（等例子？等总结？等「这些要求」？等「第一个」？）'
     +'③ 找到能回答这个问题的那一项 ⟹ 接上；'
     +'④ 若两项都像，<b>按缝法的强弱排序判胜负</b>。',
 tmpl:'<b>五种缝法，从硬到软</b>（2010 五个接缝恰好各用一种）：'
     +'<table class="tk"><tr><th>缝法</th><th>2010 实例</th></tr>'
     +'<tr><td><b>① 序数词补中心词</b>（最硬）</td><td>E 尾 <code>mask <b>two opposing trends</b></code> ⟹ A 首 <code>The <b>first</b> and more important is…</code></td></tr>'
     +'<tr><td><b>② 概括名词回指</b>（很硬）</td><td>D 尾 <code>New skills … are <b>needed</b></code> ⟹ G 首 <code>none of <b>these requirements</b></code>（见 <a href="#R83">R83</a>）</td></tr>'
     +'<tr><td><b>③ 例证词 / 总结词</b>（较硬）</td><td>B 尾抛未证的论断 ⟹ F 首 <code>For example</code>；F 列完清单 ⟹ D 首 <code>All in all</code></td></tr>'
     +'<tr><td><b>④ 原词复现 ＋ 近义替换</b>（只能加固）</td><td>D 与 G 同时出现 <code>master the intricacies of wholesaling in Europe</code>（七词原样复现）＋ <code>rake in substantial profits</code> ⟷ <code>reap considerable gains</code>（近义替换）</td></tr>'
     +'<tr><td><b>⑤ 话题相近</b>（不算证据）</td><td>C 与全篇都在谈「市场」——<b>它是多余项</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>时间紧的读法</b>：七段只精读首末两句（共 14 句），中间一律扫读。'
     +'<b>2010 全篇 545 词，真正决定五个答案的不超过 60 词。</b></p>',
 traps:['<b>排序题与选句填空的手感差别就在这里，别串台</b>：选句填空要读<u>空格前后那两句</u>（判据是指代距离、唯一词、时态）；'
        +'排序题只读<u>每段的头和尾</u>（判据是段首路标与段尾预告）。<b>拿选句填空的读法去做排序题，会把大量时间花在段落中间——那里没有答案。</b>',
        '<b>④ 这一档单独用会翻车</b>：原词复现只能<u>加固</u>一个已经由 ①②③ 立住的接缝。'
        +'2010 的多余项 C 正是靠 <code>such variations</code>／<code>this change</code> 两个回指词伪装成「哪里都能插」的（见 <a href="#R81">R81</a>）。',
        '<b>段尾预告常常是一句「还没有证据的断言」</b>——<code>appears to be / seems to / may well</code>。'
        +'见到这种句子收尾，<b>下一段几乎一定是来举证的</b>（2010 的 B→F 就是）。反过来，一段已经列完清单，下一段就该总结。',
        '<b>2014 新添两种缝法</b>：「however 拉回主干」（A→F，<a href="#R177">R177</a>）与「例子回收方法」（G→D，<a href="#R179">R179</a>）。另注意<b>年份分两种</b>：考古活动的年代（1922／1900）能排「先古后今」；遗址或文明本身的年代（AD 600／1400s BC）与叙述顺序无关。'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 02++ 五个接缝总表'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q44',label:'2010·新题型·44（同一对相邻段用了两种缝法）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q42',label:'2010·新题型·42（未证的断言 ⟹ For example）'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'seams',label:'2014·新题型 · 02++ 六个接缝总表'}]},

{id:'R81', tier:'🟡', qt:'新题型 · 找多余项（四种变体通用）', title:'词面呼应最多的那一项，往往正是多余项——先问它谈的是不是本文的关键词',
 trig:['某个选项和上文有好几个词对得上，看起来哪儿都能放','五个空定完，要回头验多余项','两个选项都像，其中一个词面更近'],
 flow:'① 多余项是<b>为了钓鱼而造的</b>，命题人给它装的诱饵就是<b>复现词</b>；'
     +'② 判它出局<b>不看词，看主线名词</b>：把全文的两三个关键词列出来（2010 ＝ retailers / wholesale market / grocery），'
     +'<b>这一项一个都不含 ⟹ 它换的是话题，不是说法</b>；'
     +'③ 第二判据：<b>段内自相矛盾</b>——自撰的多余项常有「两头不搭」的毛病；'
     +'④ 第三判据：<b>逐格试一遍</b>，五个接缝全装不进去。',
 tmpl:'<b>2010 的多余项 C 是标准标本</b>：'
     +'<table class="tk"><tr><th>它的伪装</th><th>拆穿它的判据</th></tr>'
     +'<tr><td>段首 <code>such variations</code> 能挂 E 的 <code>variations in detail</code>、D 的 <code>important differences</code>、F 的 <code>changes</code>；段尾 <code>this change</code> 再回指一次</td><td><b>全段不含 retailer / wholesaler / grocery</b>：它谈的是「市场整体结构」与「买家还是卖家说了算」</td></tr>'
     +'<tr><td>句式很像论述文（自问自答 ＋ In other words ＋ At any rate）</td><td><b>段内自相矛盾</b>：先 <code>Definitely <b>not</b></code>（不会有变化），末句却给 <code>this change</code> 叫好</td></tr></table>'
     +'<p style="margin-top:8px"><b>四篇新题型的多余项造法统计</b>：2007 标题匹配 ＝ 两个多余项<b>都有词面呼应</b>（见 <a href="#R17">R17</a>）· '
     +'2008 选句填空 ＝ 阶段错位／与正确项撞专名 · 2009 选句填空 ＝ <b>整整一区没有空，两项一起死</b> · '
     +'<b>2010 排序题 ＝ 复现词最多、话题却偏离</b>。<b>四篇里两篇靠词面呼应钓鱼，占一半。</b></p>',
 traps:['<b>「哪一项和上文最像」这个直觉，在 Part B 里是负资产。</b>'
        +'2007 是这样（正确的三项一个原词都没有，错的两项都有呼应），2010 又是这样。<b>先用形式判据（指代、序数、概括名词）定位，复现词只用来最后加固。</b>',
        '<b>多余项不是「读起来不通顺的那一项」</b>——它通常写得很像模像样，甚至比正确项更「有文采」。'
        +'<b>它坏在话题，不坏在语言。</b>',
        '<b>验多余项是最后一道保险，不是可选动作。</b>把它逐格试一遍，若发现它在某一格居然装得进去，'
        +'<b>说明那一格填错了</b>——这一步能反查出前面的错误。',
        '<b>2012 补：两个多余项都有词面呼应</b>——B 抓第八段的 stickiness，E 同时抓 computer 与 television。<b>多余项分两大族</b>：「词面像」（2007 A／G · 2008 F · 2010 C · 2012 B、E）与「位置满」（2008 B · 2009 D／F · 2012 B、E），<b>2012 两族兼备</b>：词面把你往空里引，位置把它挡在外面。',
        '<b>2013 补：两个多余项又都有词面呼应</b>——D 的 Global challenges／social innovation 对着 ②❶ 与 E，A 的 discipline-oriented／journals 对着 ④❶ disciplinary problems／papers。<b>八篇里第五次靠词面钓鱼</b>（2007 · 2008 · 2010 · 2012 · 2013），且两项同时属「位置满」一族（<a href="#R161">R161</a>）。',
        '<b>2015 F</b>：characters speak 对着 ①❺ Who is making the utterance，三种体裁对着 ⑤❻ Such dimensions——两处词面呼应，谈的却是作者怎么塑造人物；十篇 Part B 里词面钓鱼的第六篇。',
        '<b>2016 的反例提醒</b>：词面呼应最多的项未必是多余项——2016 标题匹配里 E professionals、D context、G goals 都是原词且都是正确项；多余项 A 的词是<b>全文话题词</b>（image／upgrade），C 则全文零出现。先问它是不是本文关键词，再问它落在哪一句（<a href="#R213">R213</a>、<a href="#R215">R215</a>）。'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 03 节 多余项 C 三条理由'},
       {p:'2007_新题型_家长如何帮孩子.html',q:'',label:'2007·新题型（两个多余项都有词面呼应）'},
       {p:'2009_新题型_文化人类学理论.html',q:'',label:'2009·新题型（整区没有空 ⟹ 两项一起死）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型（七篇多余项造法总账）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'extra',label:'2013·新题型（八篇多余项造法总账）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'extra',label:'2015·新题型 · 03 多余项 F 与十篇总账'},
       {p:'2016_新题型_如何提升职业形象.html',q:'extra',label:'2016·新题型（多余项第四族「大而空」· 十一篇总账）'}]},

{id:'R82', tier:'🟡', qt:'通用 · 选项内部读起来「自相矛盾」时', title:'先回头看上文有没有说「两个相反的 X」——如果有，这个矛盾就是答案本身',
 trig:['某个选项前半句和后半句方向相反，怀疑它被改造过','上文出现 two opposing trends／on the one hand… on the other／a double-edged sword','一个段落里出现 Meanwhile / At the same time 却接了反方向的内容'],
 flow:'① 见到选项内部方向打架，<b>先别判它错</b>；'
     +'② 回到<b>紧邻的上文</b>找一个复数概括名词：<code>two opposing trends / two forces / mixed effects / a paradox</code>；'
     +'③ 找到了 ⟹ <b>这个「矛盾」正是命题人要你识别的那两半</b>，选它；'
     +'④ 没找到 ⟹ 才按「自相矛盾」排除（这时它多半是自撰的多余项，见 <a href="#R81">R81</a>）。',
 tmpl:'<b>2010·45 题实况（我盲做时唯一犹豫的一处）</b>：'
     +'<table class="tk"><tr><th>看起来的矛盾</th><th>真相</th></tr>'
     +'<tr><td>A 首句：外出就餐比例 32%→35%→38% <b>上升</b></td><td><b>趋势一</b>：推高<b>批发</b>需求，年增 <code>4 to 5 percent</code></td></tr>'
     +'<tr><td>A 尾句：衰退逼近 ⟹ <code>consider eating at home a realistic alternative</code>（<b>在家吃</b>）</td><td><b>趋势二</b>：撑住<b>零售</b>需求，年增 <code>1 to 2 percent</code></td></tr>'
     +'<tr><td colspan="2">上一段（E）末句早就点名了：<code>the figures, when added together, <b>mask two opposing trends</b></code> ⟹ <b>A 段的「矛盾」正是这两个趋势</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>反过来的用法</b>：一旦文中出现 <code>mask / conceal / hide</code> ＋ 复数名词，'
     +'<b>作者是在说「总数看不出问题，拆开才见分化」</b>——下文必定<u>逐个拆</u>，考点就在拆出来的每一半上。</p>',
 traps:['<b>Meanwhile 不等于「同理」。</b>它在英语里只表示「与此同时」，'
        +'<b>后面接反方向的内容完全正常</b>——2010 的 A 段就是靠 Meanwhile 把两个相反趋势装进同一段的。'
        +'把 Meanwhile 当成同向连接词，就会把正确项当成矛盾项排掉。',
        '<b>这条与 <a href="#R81">R81</a> 是一对，别用反</b>：<b>「矛盾＋上文有复数概括名词」＝ 题眼</b>（选它）；'
        +'<b>「矛盾＋上文找不到对应」＝ 自撰段落的破绽</b>（排它）。<b>差别只在上文有没有那个词。</b>'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q45',label:'2010·新题型·45（矛盾即题眼）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 03 节（多余项 C 的矛盾则是破绽）'}]},

{id:'R83', tier:'🟢', qt:'元套路 · 概括名词（shell noun）', title:'requirements / differences / variations / trends —— 概括名词是一只手，它伸回上文抓住的那几条就是答案',
 trig:['选项或题干里出现 these/such ＋ 一个抽象复数名词','排序题要找相邻段的接缝','阅读题的题干写着 these factors / such concerns / this approach'],
 flow:'① <b>概括名词 ＝ 把上文若干句话打包成一个词</b>（requirements 打包了三句「必须…／需要…」）；'
     +'② 见到它，先问<b>「它罩住了哪几条」</b>，回上文把那几条<b>逐条数出来</b>；'
     +'③ 数得出来 ⟹ 位置／答案定死；数不出来 ⟹ 这个选项不该放在这里。',
 tmpl:'<b>2010·44 题</b>：D 段末尾三句 —— <code>Big retailers <b>must understand</b> these differences…</code> ＋ '
     +'<code>New skills and unfamiliar business models <b>are needed</b>, too.</code> ＋（上文的「摸透复杂门道」）'
     +'<br>⟹ G 段首 <code>none of <b>these requirements</b></code> 一手把这三条全抓住 ⟹ <b>G 只能紧跟 D</b>。'
     +'<p style="margin-top:8px"><b>常见的概括名词清单（考场上见到就画圈）</b>：'
     +'<code>requirements 要求</code> · <code>factors 因素</code> · <code>differences 差异</code> · <code>variations 变化</code> · '
     +'<code>trends 趋势</code> · <code>concerns 顾虑</code> · <code>measures 措施</code> · <code>findings 发现</code> · '
     +'<code>approach 做法</code> · <code>practice 做法</code> · <code>phenomenon 现象</code> · <code>development 事态</code>。</p>',
 traps:['<b>概括名词回指的距离比代词长，但方向一样刚性</b>：代词（he/this）要求先行词<u>紧邻上一句</u>（见 <a href="#R53">R53</a>），'
        +'概括名词允许打包<u>上文两三句</u>——<b>但仍必须是紧邻的那一段，不能跨段去抓。</b>',
        '<b>阅读题里它是另一种用法：题干出现概括名词，就是在让你回原文数条目。</b>'
        +'例如题干问 <code>These requirements refer to…</code>，正确项一定是把那几条<b>全部</b>罩住的上位表述，'
        +'<b>只罩住其中一条的就是「以偏概全」</b>（见 <a href="#R24">R24</a>）。',
        '<b>多余项也会拿概括名词当诱饵</b>：2010 的 C 用 <code>such variations</code> 伪装成能接任何一段。'
        +'<b>破法是第②步——真的回上文去数：数得出具体的几条才算数，数不出来就是空钩。</b>'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q44',label:'2010·新题型·44（these requirements 打包三条）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q43',label:'2010·新题型·43（such variations 是空钩）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'q25',label:'2018·T1·25D（variations 无物可抓）'}]},

{id:'R84', tier:'🔴', qt:'人物观点 / 特征题（选项是单个形容词或「形容词＋名词」）', title:'把选项里的形容词放回原文，先看它<u>紧贴前面</u>那个小否定词还在不在',
 trig:['选项里的形容词，回原文<b>找得到本尊</b>（influential ⟸ known · respectable ⟸ formidable / praise）',
       '原文那半句里出现 little / few / no / not / hardly / faint / lukewarm / far from / anything but',
       '反向信号：选项自带 only / all / never / always，而原文没有对应的限定词'],
 flow:'⚠️ <b>这是 2011·T1·22 立的卡。本篇②段短短三句埋了<u>三个</u>否定限定词，22 题四个选项有<u>两个</u>是把它们摘掉造出来的。</b><br>'
     +'① <b>找本尊</b>：把选项里的形容词／名词，在原文里定位到它的出处；<br>'
     +'② <b>只看前面那一个词</b>（不必读整句，这一步一秒钟）；<br>'
     +'③ <b>那个位置站着否定词 ⟹ 当场判死</b>；<b>反过来，原文没有 only/all/never 而选项有 ⟹ 也当场判死。</b>',
 tmpl:'<b>2011·T1 的②段：三个否定词造出三个干扰项（含 24D 的反向用法）</b>'
     +'<table class="tk"><tr><th>原文（否定词加粗）</th><th>摘掉后 ⟹ 哪个选项</th></tr>'
     +'<tr><td>comparatively <b>little</b> known（相对<u>不</u>为人知）</td><td>很有名 ⟹ <b>22A influential</b></td></tr>'
     +'<tr><td>with <b>no</b> air of the formidable conductor（<u>没有</u>大指挥家派头）</td><td rowspan="2">有大师风范＋受称赞 ⟹ <b>22C respectable</b></td></tr>'
     +'<tr><td>struck … as <b>faint</b> praise（<u>轻描淡写</u>的赞美＝明褒暗贬）</td></tr>'
     +'<tr><td>the recorded performances of <b>the great classical musicians</b>（原文无「只」）</td><td>反向：加一个 only ⟹ <b>24D only covered masterpieces</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>硬语法：<code>little/few</code> ＝ 否定（几乎没有）· <code>a little/a few</code> ＝ 肯定（有一些）。</b>多一个冠词，正负号就翻过来。</p>',
 traps:['<b>这一族干扰项的字面重合度是所有族里最高的</b>：22C 的两个原料（formidable、praise）都是原文的词，'
        +'<b>位置没挪、修饰对象也没换——唯一被动的是<u>正负号</u>。</b>'
        +'⟹ <b>平时最常用的两问（「这个词原文有没有」「它修饰的是不是同一个东西」）在这里全部失效，答案都是「是」。必须补上第三问：<u>它的正负号还在不在</u>。</b>',
        '<b>与 <a href="#R57">R57</a>、<a href="#R34">R34</a> 组成「特征词类干扰项」的完整检查表，按<u>由便宜到贵</u>的顺序用</b>：'
        +'<b>① R84（一秒）</b>它前面的否定词还在不在 → <b>② R57（三秒）</b>它修饰的是哪个名词 → <b>③ R34（要回原文搜整个短语）</b>这个「定语＋中心词」的组合原文有没有。',
        '<b>faint / lukewarm / qualified / grudging ＋ praise / support / endorsement 要整族记死</b>：'
        +'出自名句 <code>damn with faint praise</code>（用不痛不痒的赞美毁掉一个人）。'
        +'<b>字面全是褒义词，功能却是贬——只看见 praise 就选「受人尊敬」，正中下怀。</b>',
        '<b>本卡的反向用法同样值钱</b>：<b>选项自带绝对词（only / all / never / always / every / must）而原文没有对应限定 ⟹ 就是加出来的。</b>'
        +'2011·T1·24D 的死因就是一个 <code>only</code>：原文说录音里有 20 世纪大师的演奏，从没说「<u>只</u>有杰作」。'],
 refs:[{p:'2011_T1_古典音乐会的危机.html',q:'q22',label:'2011·T1·22（22A 摘 little · 22C 一次摘两个）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'col1',label:'2011·T1 · 02+ 专栏（三步动作 ＋ 四个干扰项对照表）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q24',label:'2011·T1·24D（反向：原文没有 only，选项加一个）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q39',label:'2018·T4·39D（It is not, however, a sign that … serious：gratitude 吞掉 not）'}]},

{id:'R85', tier:'🔴', qt:'作者态度题（原文里出现问号时）', title:'反问 ≠ 困惑：判据不在问句本身，在<u>问号后面那一句</u>',
 trig:['选项里出现 puzzled / confused / uncertain / at a loss','原文（尤其末段）出现一个问号','问句前面挂着 But / However / Yet'],
 flow:'⚠️ <b>这是 2011·T1·25 立的卡。</b>末段 <code>But what will be the nature of that difference?</code> 是全篇唯一一个问号，25D <code>puzzled</code> 就是冲它来的。<br>'
     +'① <b>读问号后面的第一句</b>；<br>'
     +'② <b>是<u>断言</u> ⟹ 反问（＝质疑），态度选「怀疑／批评／保留」</b>；<b>是<u>回答或探讨</u> ⟹ 才可能是真困惑</b>；<br>'
     +'③ <b>加固证据两条</b>：问句前面有没有 But（有 ⟹ 它是用来推翻上一句的，不是用来求知的）· 作者后文有没有给出解决条件（给了 ⟹ 不可能困惑）。',
 tmpl:'<table class="tk"><tr><th>问句身份</th><th>后面紧跟着什么 ⟹ 该选什么</th></tr>'
     +'<tr><td><b>反问 / 设问</b>（2011·T1）</td><td><b>一句断言</b>（<code>Merely expanding … <b>will not be enough</b>.</code>）⟹ <b>doubtful / critical / skeptical</b></td></tr>'
     +'<tr><td><b>真发问</b></td><td><b>一个回答或一段探讨</b>（<code>Nobody knows.</code>／<code>Several explanations have been offered…</code>）⟹ puzzled 才有可能</td></tr></table>'
     +'<p style="margin-top:8px"><b>态度题选项的「能不能选」清单（先框掉三个，再回原文验剩下那个）</b>：<br>'
     +'<b>▸ 常常是正解</b>：doubtful / skeptical · critical · cautious · concerned · sympathetic · approving。<br>'
     +'<b>▸ 几乎永远不是</b>：<b>puzzled / confused</b>（作者不会以「我没想明白」收尾）· indifferent / detached · '
     +'<b>objective / neutral</b>（有明确对立面时必错，⟹ <a href="#R72">R72</a>）· biased / hostile（措辞到不了这个强度）。</p>',
 traps:['<b>反面验证比正面判断更快</b>：真困惑的人写不出「他们必须首先改变 A 与 B 的关系」这种明确的条件句。'
        +'<b>作者不但知道这条路不行，还知道该走哪条路——这怎么可能是 puzzled？</b>',
        '<b>2011·T1·25 的四个选项，把态度题的四种造法演全了</b>：<b>① 换情绪的主人</b>（25B enthusiastic：有兴趣的是吉尔伯特，不是作者）'
        +'· <b>② 换说话人</b>（25C confident：有信心的是评论家 Alex Ross，不是作者）· <b>③ 把修辞手段当真实情绪</b>（25D puzzled）'
        +'· <b>④ 正解靠读到最后一个转折</b>（25A doubtful：只读到「他有能力…」会选 C，读完「仅仅…不够」只能选 A）。',
        '<b>问号在评论体里几乎总是修辞</b>：作者用它把答案推到读者面前，然后自己回答。'
        +'<b>⟹ 见到问号，别急着找「作者不懂什么」，去找他<u>紧接着说了什么</u>。</b>',
        '<b>问号是全文最后一句时，「看后一句」无从下手</b>（2013·T2·30）：改看问号<b>前面</b>的疑点句（Also unclear is why… · After all… · If it is trying to…）与问句里的预设词（really · that simple）⟹ skepticism（⟹ 新卡 <a href="#R146">R146</a>）。',
        '<b>2014·T1 两处问号都在文中，R85 照常用</b>：①❸ <code>What could be more reasonable?</code> → 后一句 <code>More apparent reasonableness followed</code>（apparent 坐实反话）；②❺❻ <code>Help? Really?</code> → 后一句 <code>On first hearing, …</code>（再降一格）。<b>一词问句 Help? 质疑的是它前一句引语里的 help</b>——问号前后两句都要看。',
        '<b>2016·T2</b>：⑤❾ <code>Why ruin rural ones?</code> 是全段最后一句，前一句 <code>We do not ruin urban conservation areas</code> 是它的参照——<b>类比反问</b>：城里懂得保护，乡村凭什么不？判决替乡村说话，29 题的方向由此定（⟹ R201）。',
        '<b>2017·T3·②❺</b>：<code>If everything was going so well, then why did over 17 million people vote for Brexit …?</code> 问号后面（③❶）接的是<b>作者自己的回答</b>（sheds some light on that question）⟹ 这是第三种问句：<b>设问</b>，怀疑的是 If 从句（⟹ <a href="#R224">R224</a>）。'],
 refs:[{p:'2011_T1_古典音乐会的危机.html',q:'q25',label:'2011·T1·25（问号是反问，正解 doubtful）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'col2',label:'2011·T1 · 02++ 专栏（两种身份对照 ＋ 态度词能不能选清单）'},
       {p:'2013_T2_默认不追踪之争.html',q:'col4',label:'2013·T2 · 02++++ 专栏（问号在全文尽头 ⟹ 看前文）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'col4',label:'2014·T1 · 02++++ 专栏（两处问号 ＋ 后一句）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q29',label:'2016·T2·29（类比反问定方向）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col2',label:'2017·T3 · 02++ 专栏（设问：第三种问句）'}]},

{id:'R86', tier:'🟡', qt:'元套路 · 读文章前先定重心（首段是人物新闻时）', title:'人物由头 ≠ 文章主题：找到那句第一人称的「话题换轨句」，在卷边画一条横线',
 trig:['首段是「某人被任命／获奖／离职／出书」的新闻','读到第二三段出现 For my part / I have no idea / To be sure…but / The real question is',
       '扫一眼题目：<b>有两道题问的东西与首段人物无关</b>'],
 flow:'⚠️ <b>这是 2011·T1 立的卡。</b>前两段全在写「纽约爱乐聘了谁」，可五道题里有两道（占 8 分）问的是「录音 vs 现场」，与这个人毫无关系。<br>'
     +'① <b>找换轨句</b>：它几乎总是一个<b>第一人称的声明</b>，且总在前两段之后紧接着出现；<br>'
     +'② <b>在卷边画一条横线</b>：横线以上管<b>人物题</b>（谁说了什么、什么倾向），横线以下管<b>观点题</b>（作者反对谁、为什么）；<br>'
     +'③ <b>验证</b>：扫题目——若有题干完全不含首段人物，重心必在横线以下。',
 tmpl:'<b>换轨句词库（见到就画线）</b>：<code>For my part, …</code> · <code>I have no idea whether…</code> · <code>To be sure, …, but …</code> · '
     +'<code>The real question, however, is …</code> · <code>But that is not the point.</code><br>'
     +'<b>2011·T1 的分区（题目就是按段发的）</b>'
     +'<table class="tk"><tr><th>段</th><th>写什么 ⟹ 出什么题</th></tr>'
     +'<tr><td>①②</td><td>任命与乐坛反响 ⟹ <b>21、22（8 分，人物题）</b></td></tr>'
     +'<tr><td><b>③</b></td><td><b>换轨句所在（For my part, I have no idea…）⟹ 一道题都不出</b></td></tr>'
     +'<tr><td>④</td><td>录音把现场挤到墙角 ⟹ <b>23、24（8 分，观点题）</b></td></tr>'
     +'<tr><td>⑤</td><td>出路 ＋ 打折 ⟹ <b>25（态度题）</b></td></tr></table>',
 traps:['<b>「重心在后半」不等于「前半可以略读」</b>——本篇前两段照样出两道题、8 分，而且 22 题还是全篇最容易错的一道。'
        +'<b>正确的做法是「分区」不是「取舍」。</b>',
        '<b>全文唯一不出题的那一段，往往是最该读慢的一段</b>：2011·T1 的③段一道题都不出，'
        +'却同时管着 25 题的态度（<code>I have no idea…</code>）与 23／24 的前提（<code>All I have to do is…</code>）。',
        '<b>与 <a href="#R27">R27</a>（首段是纯事例时看引入方向）分工</b>：'
        +'<b>R27 解决「这个事例是正着引还是反着引」，R86 解决「全文的话题在哪一句换轨」。</b>'
        +'<b>R27 管一道题（写作目的），R86 管整篇的读法。</b>',
        '<b>2015·T1</b>：首段是人物新闻（卡洛斯被迫退位），①❹ 立刻把问题扩到 <code>all European royals</code>；25 题四项都是「人物 ＋ 短语」，<b>人物只是由头，判据是短语的范围</b>（C a Lesson for All European Monarchs）。',
        '<b>2015·T4</b>（反例）：伊丽莎白不是由头而是代言——③ 起转述标记全部消失，作者却一路用她的 dearth of integrity 与 sorting mechanism；这时问她的题（36）就是在问全文论点（见 <a href="#R189">R189</a>）。'],
 refs:[{p:'2011_T1_古典音乐会的危机.html',q:'col3',label:'2011·T1 · 02+++ 专栏（分区表 ＋ 四个说话人表）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q23',label:'2011·T1·23（题干与首段人物无关，在横线以下）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q25',label:'2015·T1·25（由头人物可以留在标题里，只要短语装全体）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'col1',label:'2015·T4 · 02+ 专栏（由头 vs 代言）'}]},

{id:'R87', tier:'🔴', qt:'作者观点题（The author believes that ＋ 某个群体）', title:'「are missing the point」型判决句：正解 ＝ 对方主张 × 作者的负号',
 trig:['原文里出现 <code>X who argue/reply/claim that … are missing the point</code> 这类<b>一句话装两个立场</b>的句子',
       '四个选项的动词全是<b>评价类</b>（ignore / reject / exaggerate / overestimate）','正解在原文<b>找不到任何对应词</b>'],
 flow:'⚠️ <b>这是 2011·T1·23 立的卡。</b>④❶ 一句话里装了两样东西：<b>who 从句 ＝ 对方的主张</b>，<b>主句谓语 ＝ 作者的判决</b>。<br>'
     +'① <b>把对方主张翻成一个名词短语</b>：<code>recordings are no substitute for live performance</code> ⟹「现场演奏的价值不可替代」；<br>'
     +'② <b>给它挂上作者的负号</b> ⟹「他们<u>高估</u>了现场演奏的价值」＝ 正解；<br>'
     +'③ <b>负号在选项里几乎总以「前缀或程度动词」的形式出现</b>：<code>over</code>estimate · <code>under</code>estimate · <code>mis</code>read／<code>mis</code>interpret · exaggerate · oversimplify · fail to see。',
 tmpl:'<table class="tk"><tr><th>只取哪一半</th><th>会写出什么 ⟹ 哪个选项</th></tr>'
     +'<tr><td>只取 who 从句（对方主张）</td><td>「他们认为录音替代不了现场」⟹ <b>23B reject most kinds of recorded performances</b>（<b>忠实于原文，却答非所问</b>）</td></tr>'
     +'<tr><td>只取主句谓语（作者判决）</td><td>「他们错了」——错在哪说不出来，<b>造不成选项</b></td></tr>'
     +'<tr><td><b>两半相乘</b></td><td><b>「他们<u>高估</u>了现场演奏的价值」⟹ 23D ✔</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>判决句的信号词族（见到就知道后面要出这类题）</b>：'
     +'<code>are missing the point</code> · <code>get it backwards</code> · <code>are mistaken</code> · '
     +'<code>overlook the fact that</code> · <code>fail to appreciate</code> · <code>this is only half the story</code>。</p>',
 traps:['<b>最像的干扰项永远是「把对方主张原样翻译一遍」的那个</b>（23B）：<b>它忠实于原文，却在回答另一个问题——'
        +'题干问的是「作者认为他们<u>怎么了</u>」，不是「他们<u>说了什么</u>」。</b>',
        '<b>还要防「程度推过头」</b>：原文说「录音不能<u>取代</u>现场」，不等于「<u>拒绝</u>接受录音」。'
        +'<b>一个人完全可以既买唱片、又坚持认为现场不可替代。</b>',
        '<b>换宾语是第二种造法</b>：评价动词对了，宾语被换掉。2011·T1 的 23A（expenses ⟸ 竞争段的 money／cheap）与 23C（variety ⟸ 竞争对手清单）'
        +'都是这么造的。<b>⟹ 评价动词的宾语，必须是对方主张里的<u>那个核心名词</u>。</b>',
        '<b>四个选项都是评价动词，这本身就是提示</b>：说明本题考的是「作者怎么看他们」，'
        +'<b>那么正确项必须能在原文里找到<u>作者的那句判决</u>作为靠山</b>——本题的靠山就是 <code>are missing the point</code> 五个词。',
        '<b>2016·T2·29</b>：同一个造法换了个位置——R87 的判决句紧贴对方主张（同句），本篇的作者尺子隔着三句（⑤❸ 做法 · ❼ 标准 · ❾ 判决）；最像的干扰项仍是「把人物做法换个说法复述」的 29A（⟹ 新卡 R201）。'],
 refs:[{p:'2011_T1_古典音乐会的危机.html',q:'q23',label:'2011·T1·23（主张 × 负号 ＝ overestimate）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'col4',label:'2011·T1 · 02++++ 专栏（两步动作 ＋ 十五个干扰项产地总账）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'s5',label:'2011·T1 · 长难句 s5（who 从句撑开主谓，误读会丢掉判决）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col1',label:'2016·T2 · 02+ 专栏（R87 与 R201 的分界）'}]}

,

{id:'R88', tier:'🔴', qt:'事实概括题（his manner / his explanation）· 因果细节题', title:'原文给的是「行为」，选项给的是「解释」——解释必须<u>有人说出口</u>',
 trig:['题干问 <code>his manner / his way / how he did it</code>，而选项是<b>形容词</b>',
       '四个选项里有两个以上是<b>人格标签</b>（arrogant / self-centered / impulsive / selfish）',
       '原文那一段只有<b>动作描写</b>，没有任何一句在评价这个人'],
 flow:'⚠️ <b>这是 2011·T2·26 立的卡，也是本篇十五个干扰项里占比最大的一族（5/15）。</b><br>'
     +'① <b>先把四个选项分两堆</b>：<b>「描述做法的」</b>（frank / straightforward / cautious / vague）与 <b>「评判人品的」</b>（arrogant / selfish / impulsive）；<br>'
     +'② <b>题干问 manner ⟹ 答案只能在第一堆里</b>；<br>'
     +'③ <b>五秒动作：把选项翻译回一个<u>动作</u>，回原文找这个动作。</b>'
     +'<code>frank</code> ⟹「他把真实理由说了出来」——原文有（<code>came right out and said</code>）；'
     +'<code>arrogant</code> ⟹「他看不起别人／自吹自擂」——原文没有。',
 tmpl:'<p><b>「解释」要能被选中，只有两个合法出处：</b></p>'
     +'<table class="tk"><tr><th>出处</th><th>本篇的例子</th></tr>'
     +'<tr><td><b>① 当事人自己说</b></td><td>McGee 说 <code>「very much my decision」</code>；二把手们 <code>quit with the explanation that…</code></td></tr>'
     +'<tr><td><b>② 作者下判决</b></td><td>2011·T1 ④❶ <code>are missing the point</code>（⟹ R87）</td></tr>'
     +'<tr><td><b>两个都没有</b></td><td><b>那个解释是你自己脑补的，一律排</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>方式词（可直接选）</b>：frank · straightforward · blunt · vague · cautious · reserved · defensive · apologetic。<br>'
     +'<b>人品词（要作者的评价句才能选）</b>：arrogant · self-centered · selfish · impulsive · stubborn · hypocritical · greedy。</p>',
 traps:['<b>一处引语造出两个选项时，它多半是诱饵</b>：2011·T2 的 26A（傲慢）与 26C（以自我为中心）共用同一句 <code>Broadcasting his ambition was「very much my decision」</code>，'
        +'<b>而答案在别处（①❶❷ 的 straight up / came right out）。</b>',
        '<b>副词修饰谁就只能说谁</b>：26D <code>impulsive</code> 的诱饵是 <code><b>surprisingly</b> straight up</code>——'
        +'<b>surprisingly 修饰的是「坦率的程度」（坦率得少见），不是「决定来得突然」。</b>',
        '<b>反例常常就在同一段</b>：26D 的反证是①❹「两周内与新东家董事会接洽、一个月内到任」＋①❷「目标明确」⟹ 有备而来，不是冲动。',
        '<b>同一族的两个方向都要防</b>：<b>往下换</b>（把「高调」换成「傲慢」，26A/C）与 <b>往上换</b>（把「怕风险」换成「忠诚」，2011·T2·29B）'
        +'——<b>手法相同：动机是选项自己安的。</b>',
        '<b>2012·T4·37A</b>：原文是行为「能让事情停摆而几乎不承担后果」，选项贴了个性格标签 prudent（谨慎）——而且贴反了：无后果的潜台词是敢于停摆。',
        '<b>2015·T4·38A</b>：原文只给「不知道、不问、不打听」这些行为，a cunning personality 是没人说出口的解释。'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q26',label:'2011·T2·26（三个干扰项全是人格标签）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col1',label:'2011·T2 · 02+ 专栏（行为 vs 解释对照表 ＋ 形容词体检表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q27',label:'2011·T2·27C（把「没被点将」升级成「关系紧张」）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q37',label:'2012·T4·37（A 行为翻成相反的性格）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q38',label:'2015·T4·38A（行为 → 人格解释）'}]},

{id:'R89', tier:'🔴', qt:'因果细节题 / 群体特征题（题干主语是复数群体）', title:'「个例 ＋ isn&#39;t alone ＋ 一串同类」：问群体的题只能取各组的<u>公因式</u>',
 trig:['段中出现 <code>X isn&#39;t alone</code> / <code>X is not the only one</code> / <code>Others have done the same</code> / <code>In recent weeks … also …</code>',
       '题干主语是<b>复数群体</b>（senior executives / young people / companies）而定位段里站着<b>好几组人</b>',
       '题干含隐性因果词 <code>be spurred by / prompted by / driven by</code> 而原文<b>一个 because 都没有</b>'],
 flow:'⚠️ <b>这是 2011·T2·27 立的卡。</b><br>'
     +'① <b>看到结构信号句，先在卷边给这一段<u>数人头</u></b>（本篇三组：McGee ／ 雅芳＋运通的二把手 ／ 没被点将的高管）；<br>'
     +'② <b>把每一组的理由各写半句</b>（想清楚要管什么样的公司 ／ 明说在找 CEO 职位 ／ 未获点将想另谋高就）；<br>'
     +'③ <b>拿每个选项去<u>逐组盖</u></b>——<b>盖不全的一律排</b>；<br>'
     +'④ <b>隐性因果的落点固定在「当事人自己给出的说法」上</b>：<code>with the explanation that…</code> · <code>may wish to…</code> · <code>saying she wanted to…</code>。',
 tmpl:'<table class="tk"><tr><th>选项盖住几组</th><th>结论</th></tr>'
     +'<tr><td><b>全部三组</b></td><td><b>正解</b>（27D <code>their pursuit of new career goals</code>）</td></tr>'
     +'<tr><td>只盖第一组</td><td>27B（只讲 McGee，且把 <code>what kind of company</code> 读成「个人生活」）</td></tr>'
     +'<tr><td>只盖第三组</td><td>27C（只讲没被点将的人，且升级成「关系紧张」）</td></tr>'
     +'<tr><td>一组也盖不住</td><td>27A（全文没提钱）</td></tr></table>'
     +'<p style="margin-top:8px">⚡ <b>正解的长相是可以预判的</b>：<b>它一定比每一组的具体理由<u>抽象一层</u></b>（「追求新的职业目标」＞「想当 CEO」），'
     +'<b>因为它必须同时装得下所有组。四个选项里最具体的那个，往往是只盖一组的陷阱。</b></p>',
 traps:['<b>「只盖一组」的选项本身没有错</b>——它在那一组身上完全成立。<b>它错在<u>范围</u>，不错在<u>内容</u></b>（⟹ 与 R24 范围校验同族）。'
        +'<b>正因为如此，这类干扰项复查时最难被推翻，必须在做题当时就数人头。</b>',
        '<b>结构信号句还免费告诉你「本段会出什么题」</b>：出现 <code>X isn&#39;t alone</code>，本段几乎必出一道<b>群体原因／群体特征</b>题。',
        '<b>动词照抄、宾语调包</b>是本族的常见搭档：27B 抄了原词 <code>reflect on</code>，只把宾语从「要管什么样的公司」换成「个人生活」。'
        +'<b>凡定位句是「动词 ＋ 长宾语从句」，宾语从句读完再判。</b>',
        '<b>2015·T3·31</b>：①❶ Science is adding … checks ＋ ①❷ follows similar efforts from other journals ——公因式是「多家期刊在加强统计审查」，31B 用复数 journals 把两句合起来。',
        '<b>2018·T2·26 题干给两段</b>：① 不信的是总统的社交媒体平台（作白宫新闻的来源），② 不信的是所有媒体、脸书上的新闻——公因式「社交媒体作为可靠的新闻来源」⟹ D；把 ②❶「依赖」当怀疑对象的 B、把「过滤」当怀疑对象的 A 都没取公因式。'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q27',label:'2011·T2·27（三组人的公因式）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col2',label:'2011·T2 · 02++ 专栏（三组人对照表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'s3',label:'2011·T2 · 长难句 s3（get the nod ＝ 被点将，不是关系紧张）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q31',label:'2015·T3·31（本家 ＋ 别家 ⟹ journals 复数）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q40',label:'2015·T4·40（三个否定目的的公因式 ⟹ moral awareness）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q26',label:'2018·T2·26（①② 两段取公因式：社交媒体作为新闻来源）'}]},

{id:'R90', tier:'🔴', qt:'词义推断题（超纲词 / 被动语态里的动词）', title:'四个选项塞回原句<u>往往都通顺</u>——判据是这句话在段里的<b>逻辑角色</b>',
 trig:['被考词是<b>超纲词</b>，且塞哪个选项进去<b>句子都读得通</b>',
       '被考词处在<b>被动语态</b>里（<code>must be poached</code>），<b>施事被省略</b>',
       '被考词所在句的上一句是<b>点题句</b>、下一句是<b>引语／举证句</b>'],
 flow:'⚠️ <b>这是 2011·T2·28 立的卡，接 R10「词义题三步法」，专治「四个都通顺」。</b><br>'
     +'① <b>先给被考词所在句<u>定角色</u></b>：它在<b>点题</b>、<b>解释上一句</b>、还是<b>举证下一句</b>？'
     +'（本篇④❷ 的角色是「解释④❶ 的<u>不合惯例</u>」⟹ 一步挡掉 A、B）<br>'
     +'② <b>被动语态先补施事</b>：<code>must be poached</code> ⟹「必须被<u>猎头／董事会</u>挖来」⟹ '
     +'<b>去下文找这个施事的动作</b>：<code>search</code>（寻访）· <code>look at sitting CEOs</code>（物色在任 CEO）＝ 答案的同义词；<br>'
     +'③ <b>再扫一眼同根词</b>：本段主语里就站着 <code>head<u>hunt</u>ers</code>，正确项是 <code><u>hunt</u>ed for</code>。'
     +'<b>命题人常把答案的词根放在同一段。</b>',
 tmpl:'<table class="tk"><tr><th>词义题错项的三种造法</th><th>2011·T2·28 的实例</th></tr>'
     +'<tr><td><b>① 拿<u>语气</u>当意思</b></td><td>28A <code>approved of</code> ⟸ ④❸ 的双重否定 <code>can&#39;t think of … has not</code> 的肯定语气</td></tr>'
     +'<tr><td><b>② 拿<u>常识</u>顶替上下文</b></td><td>28B <code>attended to</code> ⟸「最有吸引力的人 ＝ 最该被关注的人」（读着像常识）</td></tr>'
     +'<tr><td><b>③ 拿<u>周边词的联想</u>造</b></td><td>28D <code>guarded against</code> ⟸ 看见 <code>headhunters</code> 就联想「提防被挖」（视角与原文相反）</td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>一句可背的话：词义题不问「这个词像什么意思」，只问「这句话在这一段里干什么」。</b></p>',
 traps:['<b>通顺不是判据</b>：28 题四个选项塞回 <code>the most attractive CEO candidates are the ones who must be ___</code>，'
        +'<b>三个都读得通</b>。<b>只有放回段落逻辑才分得开。</b>',
        '<b>视角也要核</b>：④段全程站在<u>猎头／董事会</u>一边说「我们怎么找人」，从没站在「拥有优秀 CEO 的企业」一边说「我们怎么防人」'
        +'⟹ 28D 的视角在原文里根本不存在。',
        '<b>别被本篇别处的近义短语骗</b>：②❻ 有 <code>cautious of</code>（提防），但它在<u>第二段</u>、说的是另一件事——'
        +'<b>「本篇出现过这个意思」不等于「被考词是这个意思」。</b>',
        '<b>2016·T1·22</b>：四个选项塞回去有三个读得通——判据是②❷ 的角色：它在解释②❶ 的 <code>uplifting motives</code>，是作者认可的主张 ⟹ should not 后面只能是负面；再用定语从句的主语 looks 砍掉 C（外表不会「失去信心」），②❹ starving themselves to death 作证。',
        '<b>2017·T1·23</b>：⑤❸ expedited 的逻辑角色是「做法」，⑤❹ This allows … saving time 是它的「效果」⟹ faster；C wider（④❷ room）、D cheaper（④❸／⑥❶ 费用）都是本文别处的真话题——在文中出现过，不等于是这个词的意思。'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q28',label:'2011·T2·28（poach ＝ hunted for）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col3',label:'2011·T2 · 02+++ 专栏（四个选项塞回原句的对照表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'s7',label:'2011·T2 · 长难句 s7（完全倒装 ＋ 双重否定 ＋ 两层定语从句）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q28',label:'2014·T2·28D（「考试够严」是改革论据，被挪成障碍）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'col4',label:'2016·T1 · 02++++ 专栏（塞回去对照表）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q23',label:'2017·T1·23（由下一句的效果反推 expedited）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'q29',label:'2019·T2·29（to be aligned：四项塞回都通顺，看 On this 回指的两方要什么）'}]},

{id:'R91', tier:'🔴', qt:'末段推理题（It can be inferred from the last paragraph）', title:'末段出现「旧规则已被颠覆」⟹ 正解常是那条旧规则的<u>过去式</u>；选项时态必须对得上',
 trig:['末段出现 <code>The traditional rule was …, but that&#39;s been inverted</code> / <code>That no longer holds</code> / <code>has been turned on its head</code> / <code>What was once … is now …</code>',
       '四个选项里有一个带 <code>used to</code> / <code>once</code> / 过去时',
       '选项与原文<b>时态不一致</b>（原文现在完成，选项现在进行）'],
 flow:'⚠️ <b>这是 2011·T2·29 立的卡。</b><br>'
     +'① <b>找出那条<u>被推翻的旧规则</u></b>（<code>it&#39;s safer to stay where you are</code>）；<br>'
     +'② <b>把它原样改写成一句过去时陈述</b>（「过去大家都守着自己的岗位不动」）；<br>'
     +'③ <b>去选项里找它</b>（29A <code>top performers <u>used to</u> cling to their posts</code> ✔）。<br>'
     +'⭐ <b>这一步不是同义替换，是<u>反向推理</u>：一条规则被宣布「已经颠覆」，等于承认它在被颠覆之前是通行的。</b>',
 tmpl:'<table class="tk"><tr><th>原文的时态</th><th>它在说什么</th></tr>'
     +'<tr><td><code>the old disgrace <b>is fading</b></code>（现在进行）</td><td><b>正在</b>淡去，<b>还没</b>完全消失</td></tr>'
     +'<tr><td><code>the crisis <b>has made</b> it more acceptable</code>（现在完成）</td><td><b>已经</b>造成了这个结果</td></tr>'
     +'<tr><td><code>that&#39;s <b>been</b> fundamentally inverted</code>（现在完成）</td><td>颠覆<b>已经完成</b></td></tr>'
     +'<tr><td><b>【选项 B】</b><code>loyalty <b>is getting</b> out-dated</code>（现在进行）</td><td><b>正在</b>过时 ⟹ 与原文的「已经翻转」<b>对不上</b></td></tr></table>'
     +'<p style="margin-top:8px">🔗 <b>与 R61 的分工</b>：<b>R61 给<u>全文</u>的时态定调</b>（通篇讲未发生的事，说「已经」的选项一律排）；'
     +'<b>本卡后半是拿<u>定位句</u>的时态卡选项的时态</b>——一个管全局，一个管单句。</p>',
 traps:['<b>换动机是本族的头号搭档</b>：原文说大家不走是因为 <code>safer</code>（趋利避害），29B 换成了 <code>loyalty</code>（忠诚，品德）'
        +'——<b>同一个行为被安上了一个更高尚的动机</b>（⟹ R88）。',
        '<b>客观情形 ⟹ 主观态度</b>：29C 把「外界的不光彩正在淡去」读成「他们更在意名声」（⟹ R37）；'
        +'<b>而且方向还反了：污名淡去意味着名声的约束力在<u>下降</u>。</b>',
        '<b>单复数也是判据</b>：29D 的 <code>the traditional rule<u>s</u></code>（泛指一切传统规则）与原文特指的<u>那一条</u> <code>The traditional rule</code> 不是一回事。',
        '<b>推理题的安全方向</b>：往「原文明说了什么，它的<u>时间前提</u>是什么」推一步（A 对），<b>不要往「他们心里怎么想」推</b>（B、C 全错在这）。',
        '<b>2014·T1·25 给本卡补「惋惜型」</b>：④❸ <code>The principle of British welfare is no longer that you can … receive unconditional payments</code> ＋ ④❺ <code>Instead … conditional on actively seeking a job; no entitlement and no insurance … least generous</code>——<b>作者对旧原则零负面词、对新做法五处负面限定</b> ⟹ 正解不是旧规则的过去式，而是它的<b>应然式</b>：25A <code>Unemployment benefits should not be made conditional</code>。<b>判据：作者对「颠覆」中性 ⟹ 过去式；惋惜 ⟹ should</b>。'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q29',label:'2011·T2·29（正解 ＝ 被推翻的旧规则的过去式）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col4',label:'2011·T2 · 02++++ 专栏（末段三种时态对表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'s9',label:'2011·T2 · 长难句 s9（was ／ has been inverted 两个时态）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q25',label:'2014·T1·25（旧原则的应然式）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'s13',label:'2014·T1 · 长难句 s13（is no longer that …）'}]},

{id:'R92', tier:'🟡', qt:'最佳标题题（接 R40 三查）', title:'标题题再加两查：<u>主体</u>对不对 ＋ <u>文体</u>对不对（现象分析型的标题不给出路）',
 trig:['四个选项里有两个是<b>疑问句</b>、两个是<b>陈述句</b>',
       '有选项带 <code>The Only …</code> / <code>Way Out</code> / <code>How to …</code> / <code>What Should Be Done</code>',
       '全文反复出现<b>好几个称呼同一群人的词</b>（president / No.2 executives / deputy chiefs / top performers）'],
 flow:'⚠️ <b>这是 2011·T2·30 立的卡。R40 的三查（覆盖度 → 褒贬度 → 原词义项）在本题只能排掉一个，真正分开四项的是下面两查。</b><br>'
     +'<b>第四查 · 主体</b>：<b>把全文每段的「人物名词」抄成一行</b>，标题的主语必须是这一行的概括，'
     +'<b>不能是他们<u>想去的地方</u></b>（本篇写的是「二把手」，CEO 只是他们的目标 ⟹ 30A、30B 死）；<br>'
     +'<b>第五查 · 文体</b>：先判这篇文章在回答哪个问题——'
     +'<b>回答「为什么会这样」＝ 现象分析型 ⟹ 标题陈述现象</b>；<b>回答「该怎么办」＝ 问题解决型 ⟹ 标题才可能是 Way Out / How to</b>。'
     +'<b>判据：全文有没有出现建议句（should / must / need to / it is time to）。本篇一个都没有 ⟹ 30D 死。</b>',
 tmpl:'<table class="tk"><tr><th>选项</th><th>死在哪一查</th></tr>'
     +'<tr><td><b>A</b> CEOs: Where to Go?</td><td><b>主体</b>（写的是想当 CEO 的二把手）＋ <b>疑问口吻</b>与作者的明确判断冲突</td></tr>'
     +'<tr><td><b>B</b> CEOs: All the Way Up?</td><td><b>同上</b>，且与⑤段两个「等一年／等三年」的反例矛盾</td></tr>'
     +'<tr><td><b>C</b> Top Managers Jump without a Net</td><td><b>✔ 主体 ＋ 动作两块料都在原文</b>（③❶ <code>make the jump without a net</code>）</td></tr>'
     +'<tr><td><b>D</b> The Only Way Out for Top Performers</td><td><b>文体</b>（现象分析 ≠ 出路）＋ <b>绝对化</b>（The Only）</td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>正确的标题项常常是「从原文取两块料现拼」的</b>：本题 ＝ 全文主体（Top Managers）＋ ③段的比喻（Jump without a Net）。</p>',
 traps:['<b>疑问句标题不是天然错的</b>：它合法，但要求<b>作者本人也不下结论</b>。'
        +'<b>本篇作者立场很硬（旧规则已被彻底颠覆），所以 A、B 的问号本身就是破绽</b>；'
        +'而 2010·T1 那类「作者只给保留意见」的文章，疑问句标题反而合适。<b>看的是作者态度硬不硬，不是问号本身。</b>',
        '<b>两个选项错在同一处时，可以放心一起排</b>：命题人常用同一把刀一次造两个错项（本题的 A、B 都是主体错）。',
        '<b>主体错最难发现</b>，因为那个词在原文里出现了几十次——<b>但它出现的位置是「他们想去的地方」，不是「他们是谁」。</b>',
        '<b>2017·T1·25 的边界</b>：本篇有 should（⑥❹）与 It is long past time to（⑦❷），是问题解决型，标题却落在问题上（Getting Stuck in Security Lines）——本卡说的是「才可能给出路」，不是「必须给出路」（⟹ <a href="#R218">R218</a>）。'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q30',label:'2011·T2·30（Top Managers Jump without a Net）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col5',label:'2011·T2 · 02+++++ 专栏（四查对照表 ＋ 干扰项产地总账）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q25',label:'2017·T1·25（问题解决型，标题仍取问题）'}]},

{id:'R93', tier:'🔴', qt:'造词型 / 术语分类文（细节题 ＋ 主旨题通用）', title:'文章在<u>造新词</u>时，干扰项九成是「术语串门」——先画一张术语关系表',
 trig:['文中反复给新名词<b>打引号</b>并下定义（「earned」 media / 「owned」 media）',
       '出现 <code>We define X as …</code> / <code>such X</code> / <code>X is the opposite of Y</code>',
       '一段一个新术语，三个以上并排铺开',
       '原文标题里有 <code>New Vocabulary</code> / <code>What we call</code> / <code>A new kind of</code>'],
 flow:'⚠️ <b>这是 2011·T3 立的卡，本篇 15 个干扰项里有 5 个是这么造的。</b><br>'
     +'<b>第一步（读完文章，40 秒）</b>：在卷边画一张三列小表——<b>术语 ｜ 谁在动手 ｜ 怎么产生的（定义句在哪）</b>，'
     +'再补一列<b>血缘</b>（哪个术语是哪个术语变来的）。<b>造词文的段落分工几乎总是「一段一个新术语」，画表不费时。</b><br>'
     +'<b>第二步（做细节题）</b>：<b>先给<u>每个选项</u>标一个术语归属</b>，再看它和题干的术语对不对得上——'
     +'<b>对不上的，内容再真也直接排</b>，这比逐字回原文快五倍。<br>'
     +'<b>第三步（做主旨题）</b>：<b>若文章平行铺开若干子类，正解必然是<u>那个不点名任何单个子类</u>的选项。</b>',
 tmpl:'<table class="tk"><tr><th>干扰项</th><th>它抄的其实是哪个术语</th></tr>'
     +'<tr><td><b>31B</b> inspired by product-promoting <b>e-mails</b></td><td><b>自有媒介</b>的定义（①❹后半），题干问的却是<b>赢得媒介</b></td></tr>'
     +'<tr><td><b>31A</b> obsessed with online shopping at certain <b>Web sites</b></td><td><b>自有媒介</b>的载体 ＋ 赢得媒介的条件，两块碎片拌在一起</td></tr>'
     +'<tr><td><b>33A</b> conflicts <b>with passionate consumers</b></td><td>把赢得媒介的<b>创造者</b>写成了它的<b>对手</b></td></tr>'
     +'<tr><td><b>35B</b> <b>Conflict</b> between hijacked and earned media</td><td>原文说的是 <code>the opposite of</code>（一体两面），被读成两方打架</td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>正确项的长相可预判</b>：主旨题里，<b>四个选项若有三个点了某个术语的名，答案通常是剩下那个说「这一整类」的</b>（2011·T3·35 的 A ＝ <code>Alternatives to conventional paid media</code>）。</p>',
 traps:['<b>不要因为一个术语出现次数多、占的篇幅大，就以为它是主题。</b>'
        +'2011·T3 的 <code>hijacked media</code> 独占③④两段（全文一半），可它只是「替代性媒介」里的一种——<b>35C 就是拿篇幅骗人的。篇幅 ≠ 主题，分类轴才是主题。</b>',
        '<b>这一族干扰项<u>一个字都没编造</u></b>：定义原封不动，只是换了个术语挂靠。'
        +'<b>所以「原文有没有这句话」这个检查会全部通过</b>——必须问的是「<u>这句话原本挂在谁名下</u>」。',
        '<b>术语之间常常可以互相转化</b>（甲的自有 ＝ 乙的付费 · 售出 ＝ 流量大的自有 · 劫持 ＝ 赢得的反面）。'
        +'<b>它们分的不是「东西」，是「视角」</b>——认清这点，串门型干扰项就再无杀伤力。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'col1',label:'2011·T3 · 02+ 专栏（术语关系表 ＋ 五个串门干扰项）'},
       {p:'2011_T3_五种媒介的家谱.html',q:'q31',label:'2011·T3·31（31B ＝ 最干净的一次串门）'},
       {p:'2011_T3_五种媒介的家谱.html',q:'q35',label:'2011·T3·35（主旨题：不点名单个术语的那个才对）'}]},

{id:'R94', tier:'🔴', qt:'事实概括题（题干问「某一<u>类</u>」的特征）', title:'问「一类事物的特征」，答案只能取自<u>定义句</u>——<code>for example</code> 之后的一切只提供干扰项',
 trig:['题干含 <code>feature(s)</code> / <code>be characterized by</code> / <code>typical of</code> / <code>What is true of X</code>',
       '定位段里出现 <code>We define X as …</code> / <code>X refers to …</code> / <code>whose … is so … that …</code>',
       '定位段后半出现 <code>for example</code> / <code>such as</code> / <code>for instance</code> ＋ 一家公司'],
 flow:'⚠️ <b>这是 2011·T3·32 立的卡：正确项来自定义句，A、B、D 三个干扰项<u>全部</u>来自 <code>for example</code> 之后。</b><br>'
     +'<b>三秒动作</b>：在定位段找到 <code>for example</code>，<b>画一条竖线</b>——'
     +'<b>线右边的所有名词、形容词，做本题时一律不看。</b><br>'
     +'<b>答案只准在这几种句子里取</b>：<code>We define X as …</code> · <code>X is / are …</code> · <code>X refers to …</code> · <code>whose … so … that …</code> · <code>only when …</code>。<br>'
     +'📌 <b>凡文章自己出面下定义，那一句必出题</b>——它是全文唯一给出「判据」的地方，见到就画五角星。',
 tmpl:'<table class="tk"><tr><th>②段的位置</th><th>它在 32 题里的角色</th></tr>'
     +'<tr><td><b>❹ 定义句</b> <code>whose traffic is so strong that…</code></td><td><b>✔ 唯一的答案区</b> ⟹ 32C <code>strong user traffic</code></td></tr>'
     +'<tr><td><b>❹ 句尾</b> <code>within that environment</code></td><td>⚠️ 32A 从中过度解读出 <code>safe</code>（原文中性）</td></tr>'
     +'<tr><td><b>❻ for example ＋ BabyCenter</b></td><td>⚠️ 32B 把<b>一家的做法</b>当<b>整类特征</b>，还加了无据的 <code>random</code></td></tr>'
     +'<tr><td><b>❼ 这家公司的三条好处</b></td><td>⚠️ 32D 杂糅它与 <code>organizations</code>，造出「组织形式灵活」</td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>与 R41 是一对镜像，一起背</b>：<b>R41</b> 问<u>例子的目的</u> ⟹ 答案在它服务的论点里；<b>R94</b> 问<u>整类的特征</u> ⟹ 答案在定义句里。<b>合成一句：例子几乎从不直接充当答案，它只负责当诱饵。</b></p>',
 traps:['<b>「好处」不是「特征」</b>：2011·T3 的 ❼ 句列了售出媒介带给营销者的三条好处，'
        +'32D 就是把「它能带来什么」当成了「它是什么」。<b>特征回答「是什么」，好处回答「有什么用」。</b>',
        '<b>个例里的形容词最容易被搬走</b>（<code>competitive</code> ⟹ 32B、<code>stand-alone</code> ⟹ 32D）。'
        +'<b>读例证段时给每个形容词标一句「这是这一<u>家</u>的还是这一<u>类</u>的」，标完再看选项。</b>',
        '<b>与 R46 的分工</b>：<b>R46</b> 管「题干问的<u>层级</u>」（问全体却给你一个子群）；<b>R94</b> 管「答案的<u>取材位置</u>」（问全类却给你一家公司）。'
        +'<b>2011·T3·32 两条同时成立，所以 B、D 错得特别彻底。</b>'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q32',label:'2011·T3·32（定义句 vs 个例区）'},
       {p:'2011_T3_五种媒介的家谱.html',q:'col2',label:'2011·T3 · 02++ 专栏（②段三块切分表）'}]},

{id:'R95', tier:'🔴', qt:'细节概括题（题干主语在定位段只以「对立面」出现）', title:'「A is the opposite of B」＝<u>同一样东西的两面</u>：问 B 而定位段全在讲 A，就把 A 的结论取<u>负号</u>',
 trig:['题干问的对象，在<b>指定段落里只出现一次</b>，而且是作为<b>对照方</b>出现的',
       '原文有 <code>A is the opposite of B</code> / <code>the reverse of</code> / <code>the flip side of</code> / <code>Far from being B, A …</code>',
       '回原文<b>搜关键词却搜不到</b>任何一句像选项的话'],
 flow:'⚠️ <b>这是 2011·T3·33 立的卡，全篇最难的一道。</b><br>'
     +'<b>第一步 · 确认「一体两面」</b>：找有没有<b>同一批人 / 同一个载体 / 同一个成因</b>的证据。'
     +'（本篇三条全给了：<code>The <b>same</b> … changes</code> · 两段都是 <code>passionate consumers</code> · <code>the businesses that <b>originally created them</b></code>。）<br>'
     +'<b>第二步 · 取负号</b>：把讲 A 的关键句反过来，就是 B 的另一面。<br>'
     +'<b>第三步 · 用「留余地」筛选项</b>：<b>凡靠反推得出的结论，正确项几乎一定带一个软化词</b>'
     +'（<code>can be used to</code> · <code>may</code> · <code>is likely to</code> · <code>in some cases</code>）——<b>因为它不是原文的直接断言，命题人不敢写死。</b>',
 tmpl:'<table class="tk"><tr><th>要素</th><th>本篇的证据</th></tr>'
     +'<tr><td><b>同一个成因</b></td><td>③❶ <code>The <b>same</b> dramatic technological changes</code>（一句话把②段与③段焊死）</td></tr>'
     +'<tr><td><b>同一批人</b></td><td>①❹ <code>consumers <b>passionate</b> about a product</code> ／ ③❶ <code><b>passionate</b> consumers</code>（形容词都没换）</td></tr>'
     +'<tr><td><b>同一个载体</b></td><td>③❸ <code>the businesses that <b>originally created them</b></code>（被劫持的正是企业自己造的媒介）</td></tr>'
     +'<tr><td><b>⟹ 取负号</b></td><td>讲劫持的话取负号 ⟹ 33B <code><b>can be</b> used to produce negative effects</code>（留了余地）</td></tr></table>'
     +'<p style="margin-top:8px">🔗 <b>与 R87 是同一族的两种形态</b>：<b>R87</b>（<code>are missing the point</code> 型）＝ 作者给<u>观点</u>打负号；<b>R95</b>（<code>the opposite of</code> 型）＝ 给<u>两个概念之间</u>打负号。<b>共同点：正确项在原文里一个对应词都找不到。</b></p>',
 traps:['<b>做这种题时，「回原文搜关键词」会完全失灵</b>——<b>搜不到不代表选项错，代表这道题要「算」不要「找」。</b>'
        +'<b>识别信号：四个选项都在原文里找不到出处。</b>',
        '<b>题干限定了段号，不等于证据也只准在那一段</b>：本题指定 <code>Paragraph 3</code>，但三条证据有两条在①段。'
        +'<b>「题干限定段落」限的是<u>取材段</u>，不限<u>佐证段</u>。</b>（与 R7 一起用，别只记一条。）',
        '<b>写死了的选项一律排</b>：本题 A 的 <code>constant</code>（不断的）与 D 的 <code>deserve all</code>（理应受到全部）都把话说满了，'
        +'<b>而反推出来的结论不可能这么硬。</b>'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q33',label:'2011·T3·33（问 earned 而全段讲 hijacked）'},
       {p:'2011_T3_五种媒介的家谱.html',q:'col3',label:'2011·T3 · 02+++ 专栏（一体两面三条证据表）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'col4',label:'2011·T1 · R87（同族：给对方主张打负号）'}]},

{id:'R96', tier:'🟡', qt:'例证目的题 / 事实细节题（选项动词是「利用」类）', title:'应对 ≠ 利用：先判这个主体是<u>受损方</u>还是<u>受益方</u>，不同族的选项不用比宾语',
 trig:['选项出现 <code>take advantage of</code> / <code>capitalize on</code> / <code>exploit</code> / <code>benefit from</code> / <code>cash in on</code>',
       '原文里这个主体做的是 <code>alleviate</code> / <code>mitigate</code> / <code>contain</code> / <code>respond to</code> / <code>cope with</code>',
       '定位段在讲一场<b>危机、丑闻、事故</b>，而某个选项把它说成了机会'],
 flow:'⚠️ <b>这是 2011·T3·34 立的卡。D 项 <code>taking advantage of hijacked media</code> 的宾语、主体、段落全对，<u>唯一被动的是动词的方向</u>。</b><br>'
     +'<b>五秒动作</b>：<b>先在原文给主体贴一个标签——<u>受损</u> / <u>受益</u> / <u>尚未受损</u>，再看选项动词属于哪一族。</b>'
     +'<b>族不同的直接排，连宾语都不用比。</b><br>'
     +'📌 <b>本篇还给了一处绝佳互证</b>：①❹ 的 <code>a company may <b>leverage</b> owned media</code> 才是真正的「利用」（主动、获利）；'
     +'④❸ 丰田做的是 <code>alleviated <b>some of</b> the damage</code>（止损）。<b>同一篇文章里两族各给了一个样本。</b>',
 tmpl:'<table class="tk"><tr><th>动词族</th><th>常见词</th></tr>'
     +'<tr><td><b>止损 / 应对</b>（受损方，事后补救）</td><td><code>respond to</code> · <code>cope with</code> · <code>address</code> · <code>contain</code> · <code>alleviate</code> · <code>mitigate</code> · <code>defuse</code> · <code>weather</code></td></tr>'
     +'<tr><td><b>获利 / 利用</b>（受益方，主动出手）</td><td><code>take advantage of</code> · <code>capitalize on</code> · <code>exploit</code> · <code>leverage</code> · <code>benefit from</code> · <code>cash in on</code></td></tr>'
     +'<tr><td><b>预防 / 拦截</b>（尚未受损，事前）</td><td><code>prevent</code> · <code>avert</code> · <code>head off</code> · <code>guard against</code> · <code>preempt</code></td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>「打折词」是最好的判据</b>：原文写 <code><b>some of</b> the damage</code>（只减轻了<u>部分</u>损失）＋ <code><b>relatively</b> quick</code>（<u>相对</u>迅速）——<b>一个还在流血、还在打折的主体，谈不上「利用这场危机」。</b></p>',
 traps:['<b>这一族最难排，因为宾语完全正确</b>：34D 的 <code>hijacked media</code> 是原文原词、主体是原文主角、段落也没错。'
        +'<b>只有动词方向一处被动了手脚——所以「回原文找词」的检查会全部通过。</b>',
        '<b>同题常配一把老刀：动作主语被偷</b>（34B 把「消费者劝人抵制」安给了丰田）。'
        +'<b>先用 R21 数主语，再用 R96 判方向，两步走完这类题就没有悬念。</b>',
        '<b>选项里凭空多出的褒义形容词也归这一族查</b>：34C 的 <code>supportive</code> consumers——'
        +'<b>原文只说「直接互动」，而那些消费者恰恰是正在闹的一方。见到褒义形容词，先回去看这个群体站哪一边。</b>'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q34',label:'2011·T3·34（丰田是受害者止损，不是获利）'},
       {p:'2011_T3_五种媒介的家谱.html',q:'col4',label:'2011·T3 · 02++++ 专栏（动词三族表 ＋ 干扰项产地总账）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q28',label:'2014·T2·28B（受益方 lawyers and customers 被写成反对方）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q32',label:'2014·T3·32C／32D（批评者说受害的体系被写成受益方）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q31',label:'2018·T3·31D（the dangers of the deal 是对公众的危害，不是双方的危险）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q37',label:'2019·T4·37A／B（消费者在旧规则下是少交税的受益方）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q39',label:'2019·T4·39（B、C、D 都站在输家一栏）'}]},

{id:'R97', tier:'🔴', qt:'评论型文章（本文在评论另一篇文章／另一批媒体）· 细节题与推理题通用', title:'文中有<u>三个以上说话人</u>时，先给他们编号——干扰项主力是「<u>说话人串门</u>」',
 trig:['文中出现 X writes / X suggests（引另一篇文章的作者）','出现 the message that… / to hear X tell it（转述大众或第三方的说法）',
       'According to several studies（第三方研究，独立于作者与被评论方）','题干分别点名不同的段落，而各段的立场并不一致'],
 flow:'① <b>读完先在卷边写三到四行编号</b>：<b>【S】被评论者</b>（他自己的主张）· <b>【M】媒体／社会大众</b>（那套流行观念）· '
     +'<b>【A】本文作者</b>（他出面表态的句子）· <b>【R】客观研究</b>（<code>According to several studies</code> 这一族，<u>最容易漏</u>）；<br>'
     +'② <b>每段标一个字母</b>，作者出面的句子单独画圈；<br>'
     +'③ <b>看题干问的是谁</b>——问【S】就只读【S】的地盘，问【A】就只读作者出面的那几句；<br>'
     +'④ <b>凡「原文确实写过、但那是别人说的」的选项，一律排。</b>',
 tmpl:'<p><b>压成一句话：<u>作者的靶子只有一个，找到它，凡打错靶子的选项一律排。</u></b></p>'
     +'<table class="tk"><tr><th>编号</th><th>身份标记（原文长什么样）</th></tr>'
     +'<tr><td><b>【S】被评论者</b></td><td><code>X suggests</code> · <code>X writes that 「…」</code> · <code>according to X\'s article</code></td></tr>'
     +'<tr><td><b>【M】媒体/大众</b></td><td><code>the message that…</code> · <code>to hear X tell it</code> · <code>obviously … must be</code> · 引号里的词</td></tr>'
     +'<tr><td><b>【A】作者</b></td><td><code>It doesn\'t seem quite fair</code> · <code>hugely unrealistic</code> · <code>it\'s interesting to wonder if…</code></td></tr>'
     +'<tr><td><b>【R】研究</b></td><td><code>According to several studies</code> · <code>Research shows</code></td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>2011 T4 实测</b>：作者出面的三处，宾语全是「<u>形象／比较方式</u>」，<b>没有一处在评价「生孩子好不好」</b> ⟹ '
     +'把矛头指向「生育／孩子本身」的 <b>38C · 38D · 40C · 40D</b> 四个干扰项，<b>不用细读就能排</b>。</p>'
     +'<p>⭐ <b>本篇 15 个干扰项里，出自「说话人串门」的有 6 个（40%），是最大的一族</b>：38C／38D（把【M】的潜台词当【A】的观点）· '
     +'39B（把【A】与【M】的话当成同一个人的自相矛盾）· 39C（把【R】的研究结论当【M】传达的信息）· 40C／40D（把【A】的靶子换掉）。</p>',
 traps:['<b>最凶的一类：干扰项说的话「原文白纸黑字写过」</b>。2011 T4 的 38C（无子女者没尽社会责任）与 38D（无子女者更不满意），'
        +'正是 <code>children are the single most important thing in the world</code> 的潜台词——<b>但那是作者要批的观点</b>'
        +'（③❷ <code>It doesn\'t seem quite fair</code> 已经定了性）。<b>⟹ 定位到了、原词也对，照样是错的。</b>',
        '<b>【R】客观研究这一层最容易漏</b>：2011 T4 的④段看起来是一整段作者的判决，中间却夹了一句研究结论（<code>several studies concluding that parents are less happy…</code>）。'
        +'<b>39C <code>compensatory</code> 就是把这句当成了「杂志传达的信息」。见到 <code>According to several studies</code>，一律单开一行编号。</b>',
        '<b>同一句里矛盾的两半分属两个说话人时，不叫「信息模棱两可」，叫「作者在打脸」</b>。'
        +'2011 T4 的 39B：<code>how much work it is</code>（<u>作者</u>说的）vs <code>a piece of cake</code>（<u>明星</u>说的）——'
        +'<b><code>ambiguous</code> 的硬判据是：矛盾的两半必须出自<u>同一个</u>说话人。</b>',
        '<b>作者用 <code>obviously</code> / <code>of course</code> / <code>naturally</code> 去转述<u>别人</u>的推理时，往往带反讽。</b>'
        +'判据：看这句话与作者已表明的立场是否一致——<b>不一致就是反讽，那是他要批的，不是他信的。</b>',
        '<b>2012·T2·29：一段四句三个说话人</b>（⑤❶ 公司 · ⑤❷ 最高法院与学者 · ⑤❸❹ 作者）。'
        +'<b>29C 把公司为打官司抛出的主张（只有联邦有权）当成了「此案要检验的东西」</b>；而题干写 author&#39;s view、原文是 scholars say——作者转述后未驳，可作作者之见（⟹ R119）。',
        '<b>2015·T3</b>：新闻稿四个声音按「当事方 → 圈内 → 外部支持 → 外部保留」排队，热度递减；记者把唯一带 but 的声音放在末段——34 题就考这一点保留。'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col1',label:'2011·T4 · 02+ 专栏（三个声音编号表 ＋ 六个串门干扰项）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q38',label:'2011·T4·38（38C/38D 说的是【M】的潜台词）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q39',label:'2011·T4·39（39B 混说话人 · 39C 把【研究】当【杂志】）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q29',label:'2012·T2·29C（「只有联邦有权」是公司的主张，被当成检验对象）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'col4',label:'2015·T3 · 02++++ 专栏（四个声音的态度标签表）'}]},

{id:'R98', tier:'🔴', qt:'人物观点题 / 细节题（原文出现「当下 vs 事后」的对举）', title:'原文一旦搭起<u>时间轴</u>，选项就在轴上做手脚——先给正确义项<u>钉一个时点</u>',
 trig:['原文出现 in the moment / moment-to-moment / day-to-day 与 later / past-tense / eventually 的对举',
       '选项是一组「时间形容词 ＋ 好事」（temporary delight / lasting reward / happiness in retrospect）',
       '题干问「X can bring ______」而四个选项褒贬一致、只有时间维度不同'],
 flow:'① <b>把定位段画成一条轴</b>，左端写「当下」右端写「事后」，把原文的词逐个钉上去；<br>'
     +'② <b>标出作者／人物<u>肯定</u>的是哪一端</b>（看 <code>instead of</code> / <code>rather than</code> / <code>Even though</code> 指向哪边）；<br>'
     +'③ <b>四个选项逐个往轴上钉</b>，钉在被否定那一端的直接排；<br>'
     +'④ <b>剩下的再查一件事：它回答的是「<u>什么时候</u>」还是「<u>持续多久</u>」。</b>',
 tmpl:'<table class="tk"><tr><th>维度</th><th>回答的问题</th><th>常见词</th></tr>'
     +'<tr><td><b>时点</b>（when）</td><td><b>什么时候才有</b></td><td><code>later</code> · <code>in retrospect</code> · <code>afterwards</code> · <code>eventually</code> · <code>in hindsight</code> · <code>past-tense</code></td></tr>'
     +'<tr><td><b>时长</b>（how long）</td><td><b>能持续多久</b></td><td><code>lasting</code> · <code>enduring</code> · <code>permanent</code> · <code>long-term</code> · <code>temporary</code>（反）</td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>2011 T4·36 是完整样本</b>：①段用 <code>moment-to-moment joy</code> · <code>day-to-day experience</code> · <code>in the moment</code> 钉住「当下」（<b>全被否定</b>），'
     +'用 <code>a past-tense condition</code> · <code>can later be sources of…</code> 钉住「事后」（<b>全被肯定</b>）。</p>'
     +'<p><b>三个错项全在轴上</b>：<b>A temporary delight</b>（当下）· <b>B enjoyment in progress</b>（当下，且原文定性是 <code>soul-crushingly hard</code>）· '
     +'<b>D lasting reward</b>（<u>根本不在轴上</u>——它答的是「多久」）；<b>C happiness in retrospect</b> 才是「事后」端。</p>',
 traps:['<b>最贵的错项是「方向对、维度错」的那一个</b>：2011 T4 的 D <code>lasting reward</code> 也落在「肯定」那一侧，所以很像。'
        +'<b>但 <code>later</code> 回答「何时」（回报<u>迟到</u>），<code>lasting</code> 回答「多久」（回报<u>持久</u>）——原文一个字都没提能持续多久。</b>'
        +'<b>⟹ 它换掉的不是词义，是<u>提问的维度</u>，比换词义隐蔽得多。</b>',
        '<b>反向记忆</b>：<b>凡选项出现 <code>lasting</code> / <code>permanent</code> / <code>long-term</code> / <code>enduring</code>，而原文只写了「日后／最终」，一律排。</b>',
        '<b>别比形容词的褒贬</b>——2011 T4 的 A、C、D 三项褒贬完全一致（都是好事），<b>只有时间坐标能分开它们。</b>',
        '<b><code>instead of</code> / <code>rather than</code> 之后的那一端是「弃」</b>，选项若取自那里必错（36A 的 <code>moment-to-moment joy</code> 就挂在 <code>instead of</code> 后面）。',
        '<b>2012·T2 给出另一种时间轴：不是「当下 vs 事后」，而是一串年份</b>（2002 收购 → 2006 追加 → 2007 事故 → 去年否决 → 上周背约）。'
        +'<b>题干带年份时先在轴上圈出那一格</b>——27C 的 extension／license 出自 2006 年句，被挪到了 2002 年的协议头上（⟹ R116）。',
        '<b>2017·T2·26／28B</b>：一句引语三个时点——ancient（所说）· 1897（说话）· today（文章），26C／26D 各挪一格；③❷ reminder 朝过去，28B fear 朝将来（⟹ <a href="#R219">R219</a>）。',
        '<b>2019·T2·27 的变体：题干词对上了、时点没对上</b>：题干 the original purpose of grade forgiveness 与 ④❶ the goal of grade forgiveness 只差一个 original，但 ④ 是官员今天的说法（tend to emphasize，现在时）；③ 段「今—昔—今」三拍里只有 When this practice first started decades ago 是过去时 ⟹ 只取这一句。三个错项全有原文出处，错的只是时点（两个是「近年加速」的原因，一个把「进大学」挪到「出大学」）。',
        '<b>反例 2019·T4·38：时间轴不能硬套</b>：黄皮书判 38A「把潜在危害（limited … long-term）改成已然危害（has hindered）」——但原文 limited 是过去时、has prevented 是完成时，<b>两处都是已然</b>；按时态判，正解 B（has harmed）也得出局。A 真正错在<b>对象</b>：州的能力 ≠ 经济发展（见 <a href="#R265">R265</a>）。'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col2',label:'2011·T4 · 02++ 专栏（时间轴钉点法 ＋ 时点/时长对照表）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q36',label:'2011·T4·36（三个错项全长在同一条轴上）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'s3',label:'2011·T4 · 长难句 s3（in the moment ↔ later）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q27',label:'2012·T2·27C（2006 年的 extension／license 串到 2002 年协议）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'col1',label:'2017·T2 · 02+ 专栏（引语三个时点）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'q27',label:'2019·T2·27（original ＋ was ⟹ 只认 ③❷ 过去时；④❶ the goal 是今天的说法）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'col5',label:'2019·T2 · 02+++++ 专栏（当初 · 说辞 · 得利三层表）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q38',label:'2019·T4·38A（反例：limited 与 has prevented 都是已然，时态切不开）'}]},

{id:'R99', tier:'🔴', qt:'因果推理题 / 末段推理题（选项之间只差一个主语）', title:'归因偷换：因果链的<u>起点</u>被换了人——长句先压成「谁 → 造成 → 谁的什么」三格',
 trig:['原文出现 contribute to / lead to / result in / be responsible for / account for / give rise to',
       '两个选项的谓语和宾语几乎一样，只有主语不同','原句超过 40 词，主语被从句或插入语撑开'],
 flow:'① <b>找到句子里那个表因果的动词</b>；<br>'
     +'② <b>跨过所有从句、否定词、插入语，划出它的<u>主语</u></b>（这一步是全部难点所在）；<br>'
     +'③ <b>把句子写成三格</b>：<b>【谁】→【造成】→【谁的什么】</b>；<br>'
     +'④ <b>拿三格逐个比选项——主语不同的，连宾语都不用看。</b>',
 tmpl:'<p>📌 <b>2011 T4·40 的样本（54 词，全篇最长）</b>：</p>'
     +'<table class="tk"><tr><th>格</th><th>原文填的是</th></tr>'
     +'<tr><td><b>【谁】</b>（因）</td><td><b>the images we see every week</b>（我们每周看到的那些形象）</td></tr>'
     +'<tr><td><b>【造成】</b></td><td><b>are contributing to</b>（正在导致，<u>此处贬义</u>）</td></tr>'
     +'<tr><td><b>【谁的什么】</b>（果）</td><td><b>our own dissatisfactions with the actual experience</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>⟹ 正确项 B</b> <code>Celebrity moms have influenced our attitude towards child rearing</code> ＝ 三格的忠实压缩；'
     +'<b>错项 C</b> <code><u>Having children</u> intensifies our dissatisfaction with life</code> ＝ <b>只把主语换成了「生孩子」</b>。</p>'
     +'<p>⭐ <b>推理题的正确项通常比原文<u>更保守</u></b>：B 把「造成不满」上位成「产生影响」——<b>方向对、程度更松，因此更安全。'
     +'反过来，选项若比原文<u>更绝对</u>，一律先怀疑。</b></p>',
 traps:['<b>语法机关专门用来挡住「找主语」这一步</b>：2011 T4·⑤❷ 用了两个——<code>wonder <b>if</b></code>（把主句变成从句）＋ <code><b>aren\'t</b></code>（双重否定）。'
        +'<b>它们不改变主语是谁，只是让人读到一半就晕。⟹ 先划主语，再读语气。</b>',
        '<b><code>wonder if … aren\'t …</code> 是双重否定的委婉肯定</b>，是作者的<u>结论</u>不是<u>疑问</u>。'
        +'<b>读成「作者也不确定」，整道题的四个选项就全都像对的。</b>同族：<code>I wouldn\'t be surprised if…</code> · <code>It\'s hard not to think that…</code>。',
        '<b>同一把刀可能在一份卷子里用两次</b>：2011 T4 的 <b>38D</b>（把不满记到「<u>没</u>孩子」头上）与 <b>40C</b>（记到「<u>有</u>孩子」头上）'
        +'<b>一正一反，犯的却是同一个错——都在把「媒体造成的不满」归给「生育」本身。</b>',
        '<b>顺带查宾语的范围有没有被放大</b>：原文 <code>dissatisfactions with <u>the actual experience</u></code>（对真实育儿体验的不满），'
        +'40C 写成 <code>dissatisfaction with <u>life</u></code>（对<u>生活</u>的不满）——<b>这是排除它的第二条理由。</b>',
        '<b><code>in the same way that</code> / <code>just as</code> / <code>much like</code> 之后是<u>类比</u>，不是新信息</b>——<b>答案几乎从不在类比里</b>，做题时整段跳过。',
        '<b>2015·T4·36B</b>：原文「道德缺失 → 公司迷失、干坏事」，B 倒接成「干坏事 → 公司赔钱」，wounding 也被换成 financial loss。'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col3',label:'2011·T4 · 02+++ 专栏（三格压缩法 ＋ B/C 逐格对比）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q40',label:'2011·T4·40（C 只动了主语）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'s10',label:'2011·T4 · 长难句 s10（54 词，三个语法机关）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q36',label:'2015·T4·36B（因果倒接）'}]},

{id:'R100', tier:'🟡', qt:'细节推理题（题干 We learn from Paragraph X that …，而该段是纯描写）', title:'纯描写段被问「得知什么」⟹ 答案在<u>段外</u>，常写在<u>下一段第一句</u>；段内原词全是干扰项',
 trig:['题干是 We learn from Paragraph X / It is suggested in Paragraph X','定位段整段只有事实、举例、频率，没有一句评价',
       '四个选项里有三个能在段内找到原词，剩下一个一个原词都没有'],
 flow:'① <b>先判定位段是不是「纯描写」</b>——三条同时成立即是：<b>没有评价形容词 · 没有态度动词（argue/claim/doubt）· 没有转折让步词</b>；<br>'
     +'② <b>是纯描写 ⟹ 在旁边写「这段是证据，结论在别处」</b>；<br>'
     +'③ <b>立刻把<u>下一段的第一句</u>读了</b>——时评体的结构就是「先摆现象，再一句话定性」；<br>'
     +'④ <b>拿那句定性话去比选项。</b>',
 tmpl:'<p>📌 <b>2011 T4·37 的样本</b>：②段三句全是白描（哪张封面 · 还有哪些报道 · 大概什么频率），<b>一句评价都没有</b>；'
     +'定性话写在<b>③段第一句</b>：<code>In a society that <b>so persistently celebrates procreation</b>, …</code></p>'
     +'<table class="tk"><tr><th>原文（③❶）</th><th>正确项 D</th></tr>'
     +'<tr><td><code>a society</code></td><td><code>the public</code>（公众）</td></tr>'
     +'<tr><td><code>so persistently</code></td><td><code>highly</code>（高度）</td></tr>'
     +'<tr><td><code>celebrates procreation</code></td><td><code>values having children</code>（推崇生育）</td></tr></table>'
     +'<p style="margin-top:8px"><b>⟹ D 项里没有一个词出现在②段——这正是它「看起来不像答案」的原因；'
     +'而 A、B、C 三个错项<u>全部</u>能在②段里找到原词。</b>（<code>celebrity moms</code> · <code>newly single—mom</code> · <code>「…is pregnant」 news</code>）</p>'
     +'<p>⚠️ <b>反过来也要记住</b>：题干若问这一段<u>本身写了什么</u>（<code>What does Paragraph X describe?</code>），答案就在段内。'
     +'<b>判据在题干动词：<code>learn</code>/<code>infer</code>/<code>suggest</code> ＝ 往段外推；<code>describe</code>/<code>mention</code>/<code>list</code> ＝ 就在段内。</b></p>',
 traps:['<b>三个错项都有原词、正确项一个原词都没有</b>——这是「原词复现＝陷阱」（R1）最干净的一种形态。<b>见到「唯一一个没有原词的选项」，先别急着排它。</b>',
        '<b>错项常在原词之外加一个原文没有的<u>性质判断</u></b>：2011 T4 的 37A <code>gossip</code>（八卦）与 37C <code>entertaining</code>（有娱乐性）——'
        +'<b>而②段用 <code>Madonna-and-child</code>（圣母圣子）形容那些封面，说明媒体在<u>神圣化</u>育儿，不是在提供消遣。</b>',
        '<b>顺手查绝对化</b>：37A 的 <code>permanent</code>（永恒的）被②❸ 的 <code>Practically every week</code>（<u>几乎</u>每周）直接证伪——<b>原文自己留的余地，选项抹掉了。</b>',
        '<b>凭空的价值判断词一律排</b>：37B 的 <code>deserve</code>（应得）——<b>原文只是在列举报道对象，没有任何人做过这个判断。</b>'
        +'见到 <code>deserve</code>/<code>should</code>/<code>ought to</code>，先回原文找「谁说的」。'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col4',label:'2011·T4 · 02++++ 专栏（怎么认出纯描写段 · 三条判据）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q37',label:'2011·T4·37（三个错项全有原词，正确项一个都没有）'},
       {p:'2011_T3_五种媒介的家谱.html',q:'col2',label:'对照 R94：问「整类特征」答案在定义句，不在 for example 之后'}]},

{id:'R101', tier:'🟢', qt:'元套路 · 读文速度（专名密集的文章）', title:'专名分两类：<u>能进选项的要读，进不了选项的要跳</u>——判据是它在句中当「论述对象」还是「举例材料」',
 trig:['一段之内连着出现三个以上大写名字','出现 like / such as / for example / e.g. 引出的人名或品牌名',
       '出现流行文化梗（明星名、节目名、发型名、杂志名）'],
 flow:'① <b>看这个专名在句中的身份</b>：是<b>被讨论的那个东西</b>，还是<b>用来举例的那个人</b>？<br>'
     +'② <b>更快的物理判据</b>：<b>前后有没有 <code>like</code> / <code>such as</code> / <code>for example</code> / <code>e.g.</code>——有，一律跳；</b><br>'
     +'③ <b>要跳的，只在卷边标一个 <code>【例】</code> 就走</b>，不查不猜不回读；<br>'
     +'④ <b>要读的，才花时间弄清它是什么、它的定语说了什么。</b>',
 tmpl:'<table class="tk"><tr><th></th><th>【要读】论述对象型</th><th>【要跳】举例材料型</th></tr>'
     +'<tr><td><b>身份</b></td><td>被讨论的那个东西</td><td>用来举例的那个人／那本杂志</td></tr>'
     +'<tr><td><b>典型</b></td><td>2009 T4 <code>New England</code> · 2010 T2 <code>Federal Circuit</code> · 2008 T4 <code>Founding Fathers</code></td>'
     +'<td>2011 T4 的 12 个明星／杂志名 · 2010 T3 <code>Gladwell</code> · 2007 T1 <code>Ericsson</code></td></tr>'
     +'<tr><td><b>会进选项吗</b></td><td>✓ 会（那三篇选项里分别有 8／3／6 处专名）</td><td>✗ 不会</td></tr></table>'
     +'<p style="margin-top:8px">📌 <b>2011 T4 实测（脚本核过）</b>：<b>12 个专名、23 处提及、447 词（平均每 19.4 词一个）'
     +'——而 20 个选项、103 个词里<u>一个专名都没出现</u>。</b>它们纯粹是背景板，<b>换成任何六个明星，文章一个字都不用改。</b></p>'
     +'<p>⭐ <b>这一类还格外该跳</b>：<code>「the Rachel」</code>（《老友记》里 Rachel 的发型）· <i>Us Weekly</i> / <i>People</i>（美国八卦周刊）· Reese／Angelina／Britney'
     +'——<b>全部依赖英美流行文化常识，中国考生连「猜个大概」都做不到，停下来辨认是纯亏。</b></p>',
 traps:['<b>别把「专名多」直接当成「这篇难」或「这篇特殊」</b>。跑全库 23 篇的脚本结果：<b>2011 T4 的专名密度只排第 10</b>'
        +'（2007 T4 数据泄密 7.6 词/个 · 2009 T4 新英格兰 8.1 · 2010 T2 商业方法专利 8.8 · 2008 T4 开国元勋 9.5，都比它密得多）。'
        +'<b>⟹ 这是一条工作纪律：凡「唯一／最／极罕见」这类最高级断言，先跑脚本查全库再写。</b>',
        '<b>反过来，「论述对象型」专名<u>省不得</u></b>：2009 T4 的 <code>New England</code> 直接进选项，读不懂就做不了题。'
        +'<b>判据不是「它长得像不像人名」，而是「文章在<u>讨论</u>它，还是在<u>用</u>它」。</b>',
        '<b>同一篇里两类可以并存</b>：2011 T4 的 <code>Jennifer Senior</code> 属于【要读】（36 题题干直接点名她），'
        +'其余 11 个全属【要跳】。<b>逐个判，别一刀切。</b>'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col5',label:'2011·T4 · 02+++++ 专栏（两类专名对照表 ＋ 全库密度实测）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q36',label:'2011·T4·36（唯一一个「要读」的专名 Jennifer Senior）'}]},

{id:'R102', tier:'🔴', qt:'完形 · 因果箭头型文章（全文在争「A 导致 B」还是「B 导致 A」）', title:'先画一根箭头，七个空一起做——凡争因果方向的文章，介词与连词只考「顺不顺箭头」',
 trig:['文中出现 not A but B 的因果对举','出现 rather than just the other way around','出现 rooted in／stem from／flow from／precede／follow 这类<b>自带方向</b>的词','文章在讨论「是 X 导致 Y，还是 Y 导致 X」（情绪与身体、贫穷与教育、压力与失眠）'],
 flow:'① <b>先找那句把方向明写出来的话</b>（往往由 According to／It was argued that 引出的理论句）；<br>'
     +'② <b>在卷子空白处画一根箭头</b>——2011 完形是 <b>身体反应 → 情绪</b>（<code>our feelings are partially <b>rooted in</b> physical reactions</code>）；<br>'
     +'③ 之后<b>每个空只问一句：它顺箭头还是逆箭头</b>，不再逐个比较四个词的中文意思；<br>'
     +'④ <b>让步从句里的空填「逆箭头」的那个</b>（它是被让掉的常规认知），主句才回到箭头方向。',
 tmpl:'<b>2011 完形：七个空挂在同一根箭头上（3.5 分）</b>'
     +'<table class="tk"><tr><th>空</th><th>判据词</th><th>顺箭头怎么填</th></tr>'
     +'<tr><td>12</td><td>be rooted __</td><td><b>in</b>（感受<u>源自</u>身体反应）</td></tr>'
     +'<tr><td>13</td><td>not…but…</td><td><b>because</b>（不是「因悲伤而哭」）</td></tr>'
     +'<tr><td>14</td><td>Although…also</td><td><b>precedes</b>（<u>逆</u>箭头：让步承认常规方向）</td></tr>'
     +'<tr><td>15</td><td>emotions can flow __</td><td><b>from</b>（情绪<u>源于</u>肌肉反应）</td></tr>'
     +'<tr><td>18</td><td>__ to funny cartoons</td><td><b>reacted</b>（被刺激的一方）</td></tr>'
     +'<tr><td>19</td><td>__ that expressions may influence emotions</td><td><b>suggesting</b>（引出方向性结论）</td></tr>'
     +'<tr><td>20</td><td>主语由微笑换成大笑</td><td><b>Similarly</b>（类比，不是因果）</td></tr></table>'
     +'<b>⟹ 画对箭头，这七个空是一次做完的，不必回头。</b>',
 traps:['<b>让步从句里的空要填<u>逆</u>箭头的那个。</b>2011 完形 14 题 <code>Although sadness also ___ tears</code>：主句说「情绪源于肌肉反应」，'
        +'让步句就得承认常规方向「悲伤<b>先于</b>眼泪」⟹ precedes。<b>把主句方向直接抄进让步从句是最常见的死法</b>——错项 follows 正是这么设的（A follows B ＝ A 在<u>后</u>，方向恰好反）。',
        '<b>介词就是箭头，别背中文</b>：<code>flow <b>from</b></code>（源自，箭头指向主语）vs. <code>flow into／towards</code>（流向，箭头背离主语）；'
        +'<code>be rooted <b>in</b></code> 不能写成 rooted on／at（<code>be at the root of</code> 用的是名词 root）。',
        '<b>not … because … 是「否定转移」</b>：<code>humans do <b>not</b> cry <b>because</b> they are sad</code> ＝ 并<u>不是因为</u>悲伤才哭——'
        +'<b>not 否定的是那条因果，不是 cry 这个动作</b>。把否定对象看成动词，unless／until／if 三个错项就会同时变得「说得通」（2011 完形 13 题一刀砍三个）。',
        '<b>2017·完形（箭头已定的对照）</b>：2011 争的是箭头朝哪边；2017 全文只有一个方向（拥抱 → 减压 → 少得病），难点移到<b>扣环词本身的方向</b>——10 explained 因在左、17 attribute…to 因在右、14 associated with 不分左右（接 <a href="#R228">R228</a>）。'],
 refs:[{p:'2011_完形_笑与情绪的方向之争.html',q:'q12',label:'2011·完形·12（rooted in）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q13',label:'2011·完形·13（否定转移）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q14',label:'2011·完形·14（让步填逆箭头）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q15',label:'2011·完形·15（flow from）'},
       {p:'2017_完形_拥抱有益健康.html',q:'chain',label:'2017·完形 · 02+ 因果链（箭头已定、看扣环词）'}]},

{id:'R103', tier:'🔴', qt:'完形 · 末空（全文最后一个空，句首连接词）', title:'末空不默认因果：先看主语<u>换没换人</u>——换了人就是类比，不是因果',
 trig:['空格在全文最后一句的句首','四个选项是 Eventually／Consequently／Similarly／Conversely 这类句际连接词','上一句刚给出一个实验结论或一个例子'],
 flow:'<b>三问，按顺序问，别跳</b>：<br>'
     +'① <b>主语换人了吗？</b>换了 ⟹ 多半是<b>类比／并列</b>（Similarly／Likewise／In the same way）；没换 ⟹ 才轮到考虑因果；<br>'
     +'② <b>这是不是一系列事件的最后一环？</b>是 ⟹ Eventually／Finally；<b>仅仅「篇章位置靠后」不算</b>；<br>'
     +'③ <b>前后方向一致吗？</b>一致 ⟹ 绝不填 Conversely／However。',
 tmpl:'<b>2011 完形 20 题（我唯一做错的一空）</b>'
     +'<table class="tk"><tr><th>句</th><th>主语</th><th>关系</th></tr>'
     +'<tr><td>上句（实验结论）</td><td><b>expressions／smiling muscles</b>（微笑）</td><td rowspan="2">同一原理的<b>两个平行实例</b> ⟹ <b>Similarly</b></td></tr>'
     +'<tr><td>末句</td><td><b>the physical act of laughter</b>（大笑）</td></tr></table>'
     +'<b>Consequently 要求前后件是<u>同一主体</u>的因果链</b>：「表情能影响情绪」推不出「笑能改善情绪」，二者谁也推不出谁。',
 traps:['<b>「末空＝因果收口」是个假规律，别拿它当默认值。</b>三年三种形态：'
        +'<b>2009</b> 末空是收口（回看那个悬而未决的问句）· <b>2010</b> 末空<u>不是</u>收口（真正的收口句 <code>hard to pin down</code> 压根没设空）· '
        +'<b>2011</b> 末空是收口句，<u>但考的是类比</u>。<b>我这次栽的就是把末空条件反射地当成因果。</b>',
        '<b>Eventually 的诱惑点是「位置」不是「逻辑」</b>：它要求前面有一串<u>事件序列</u>、本句是最后一环（且常含「经过一番周折」之意）。'
        +'<b>空在末尾 ≠ 逻辑上是最终</b>——2011 完形 20 题的末句与上句是并列关系，不是时间上的先后。',
        '<b>类比词的同义扩容一起背</b>：Similarly ＝ Likewise ＝ In the same way ＝ By the same token。'
        +'写作里由一个已验证的结论推广到相邻实例，用它开头最稳：<i>Similarly, the physical act of laughter could improve mood.</i>',
        '⭐⭐ <b>2012 是本卡的对照情形：主语没换 ⟹ 因果持证上岗。</b>末空 <code>their rulings … seen as separate from politics and, ___, convincing as law</code>——两个补足语共用主语 their rulings，<b>没换人</b> ⟹ 因果成立，填 <b>as a result</b>（in a word 要求后面是前文的缩写，而 convincing as law 是新信息）。<b>三问不是为了排除因果，而是为了让因果持证上岗。</b>四年四种形态：2009 收口 · 2010 不是收口 · 2011 收口考类比 · <b>2012 收口考因果，且空格插在句中 and 之后</b>。',
        '📌 <b>2013：末空根本不是逻辑空</b>——<code>30 more GMAT points than would otherwise have been ___</code> 是反事实比较里的形容词（necessary，拿主句 need 去对）。⟹ <b>五年末空五种形态</b>：2009 收口 · 2010 不是收口 · 2011 收口考类比 · 2012 收口考因果 · <b>2013 连逻辑空都不是</b>。<b>做到最后一空，先看位置和选项词性，别预设它是连接词。</b>',
        '📌 <b>2014：末空连续第二年不是逻辑空</b>——<code>much like a(n) ___ exercise routine</code> 里的形容词 effective；2013 靠主句动词 need 定 necessary，2014 靠类比从句的褒贬（被夸的程序只能比「有效的」计划）。',
        '📌 <b>2015：末空连续第三年不是逻辑空</b>——<code>care was taken to ___ that …</code> 的 see（see that＝确保，熟词僻义）；2013 necessary · 2014 effective · 2015 see。',
        '<b>2016·完形·20（正例）</b>：<code>The divorced male doesn’t have a waiting period … ___ the woman must wait ten months</code>——<b>主语从男人换成女人</b> ⟹ 对比 while；so that／in that 两个因果类当场出局。末空在 2013–2015 连续三年不是逻辑空后，<b>2016 回到逻辑空</b>。',
        '2017·完形·20：末空又不是逻辑空——<code>where it ___ mood, behavior and physiology</code> 里的实义动词 influences（主语是激素、宾语是人的状态）。2013–2015 连续三年不是逻辑空，2016 回到 while，2017 又不是 ⟹ 近五年四年末空不是逻辑空。',
        '2018·完形·20：末空又不是逻辑空——<code>paired with the “___” tester</code> 里的形容词 unreliable（对照组身份位的反写）。近六年五年末空不是逻辑空（只有 2016 是 while）。',
        '2019·完形·20：末空又不是逻辑空——<code>can ___ you to civilization</code> 的实义动词 lead（四个全接 sb to，靠首段 navigate back to civilization 首尾扣环定）。近七年六年末空不是逻辑空（只有 2016 是 while）。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q20',label:'2015·完形·20（末空是熟词僻义 see that）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q20',label:'2014·完形·20（末空是类比从句里的形容词）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q20',label:'2013·完形·20（末空不是逻辑空）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q20',label:'2012·完形·20（主语未换 ⟹ as a result）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q20',label:'2011·完形·20（换人 ⟹ 类比）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q20',label:'2010·完形·20（末空不是收口）'},
       {p:'2009_完形_智力的代价.html',q:'q20',label:'2009·完形·20（末空是收口）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q20',label:'2016·完形·20（主语换人 ⟹ 对比 while）'},
       {p:'2017_完形_拥抱有益健康.html',q:'q20',label:'2017·完形·20（末空是实义动词 influences）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q20',label:'2018·完形·20（末空是对照组身份词 unreliable）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q20',label:'2019·完形·20（末空是实义动词 lead，首尾扣环）'}]},

{id:'R104', tier:'🔴', qt:'完形 · 取舍结构里的空（instead of／rather than／not…but）', title:'取舍结构自带答案：Y 与 X 必然反向，一个结构常常定两个空',
 trig:['空格所在句有 instead of doing X','句中出现 rather than／not X but Y','句首被前置了一个 instead of 短语'],
 flow:'① 认出结构的两端：<b>X＝被否定的那一半</b>，<b>Y＝要肯定的那一半（空格通常在这里）</b>；<br>'
     +'② <b>直接取 X 的反义填 Y</b>，不必读懂全文；<br>'
     +'③ <b>再往下读一句验一遍</b>——命题人常在紧邻的下一句用同义句重述，那里往往还藏着第二个空。',
 tmpl:'<b>2011 完形：三处取舍结构，管住五个空</b>'
     +'<table class="tk"><tr><th>结构</th><th>X（被否定）</th><th>空格该填</th></tr>'
     +'<tr><td><b>instead of</b> straining muscles…, laughter accomplishes the <b>7</b></td><td>绷紧肌肉</td><td><b>opposite</b>；下句 <b>8</b> 同由 straining 反推 ⟹ <b>relaxes</b></td></tr>'
     +'<tr><td>do <b>not</b> cry <b>13</b> they are sad <b>but</b> that…</td><td>因悲伤而哭</td><td><b>because</b>（否定的是整条因果）</td></tr>'
     +'<tr><td>expressions may influence emotions <b>rather than</b> just the other way around</td><td>情绪影响表情</td><td>它是 <b>19／20</b> 两空的方向源</td></tr></table>',
 traps:['<b>Y 与 X 是「反向」，不是「更强」也不是「程度不同」。</b>2011 完形 7 题的错项 <code>the impossible</code>（笑完成了不可能之事）是<b>力度</b>升级、'
        +'<code>the average</code>（发挥了一般作用）是<b>程度</b>描述——<b>两个都没落在「反向」这条线上</b>。',
        '<b>语法差别别混</b>：instead of 后接<b>名词/动名词</b>；rather than 后可接<b>与前面平行的任何成分</b>（名词、动词原形、从句）。'
        +'完形里若空格后是 doing，通常只有 instead of 接得上。',
        '<b>一个结构常带出第二个空</b>：先用结构定下方向明确的那个（2011 的 7 空），再用它去卡紧邻的下一个（8 空）——<b>顺序反了会多花一倍时间。</b>',
        '<b>阅读同理 · 2014·T1·22</b>：<code>should be spent looking for work, not looking to sign on</code>——A, not B 的取舍结构，<b>B 必须是 A 的反面</b> ⟹ sign on 站在「找工作」的对立面（领救济）；22C「查看工作机会」、22D「参加培训」都与找工作<b>同向</b>，放不进 not 后面。',
        '<b>取舍结构本身也可以是空格</b>：2015 完形 13 <code>choosing genetically similar friends ___ &quot;functional kinship&quot;</code>——这时要把本卡倒过来用：<b>先判两端是否反向</b>（基因上 ↔ 用途上），反向才填 rather than；两端同向才轮到 along with（⟹ <a href="#R192">R192</a>）。',
        '<b>⚠️ 2017 边界</b>：两端必然反向只在没有 just／simply 时成立。2017·T3 ③❸ <code>Rather than just focusing on GDP</code>、⑦❷ <code>rather than simply worrying about GDP figures</code>——X 仍保留，Y 是另加的（well-being 不是 GDP 的反义）⟹ 33A excludes 错、34B beyond 对（⟹ <a href="#R223">R223</a>）。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q13',label:'2015·完形·13（空格就是取舍连接词）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q7',label:'2011·完形·7（instead of ⟹ opposite）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q8',label:'2011·完形·8（同一结构反推 relaxes）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q13',label:'2011·完形·13（not…but…）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q22',label:'2014·T1·22（阅读里的取舍结构）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col3',label:'2017·T3 · 02+++ 专栏（本卡的边界：rather than just）'}]},

{id:'R105', tier:'🟡', qt:'完形 · 因果型连体空（一句 because／so 里挂着两个空）', title:'把两个空组成一句话念一遍：因果说不通的当场淘汰（专防「循环论证」型干扰）',
 trig:['一个句子里有两个空，中间由 because／since／so／that is why 连接','两个空一个在原因从句、一个在主句'],
 flow:'① <b>先做方向更明确的那个空</b>（通常是原因侧，因为它常有常识可依）；<br>'
     +'② <b>把两个候选组成一句完整的因果句念出来</b>；<br>'
     +'③ <b>因果链接不上、或成了同义反复的组合，一律淘汰。</b>',
 tmpl:'<b>2011 完形 4＋5</b>：<code>because hard laughter is difficult to <b>4</b>, a good laugh is unlikely to have <b>5</b> benefits the way walking or jogging does</code>'
     +'<table class="tk"><tr><th>组合</th><th>念出来是什么</th><th>判</th></tr>'
     +'<tr><td><b>sustain ＋ measurable</b></td><td>难以<b>持续</b> ⟹ 成效不<b>显著</b></td><td>✅ 持续性→显著性，链条成立</td></tr>'
     +'<tr><td>evaluate ＋ measurable</td><td>难以<b>评估</b> ⟹ 没有<b>可测量的</b>益处</td><td>❌ 像同义反复，实为循环论证</td></tr>'
     +'<tr><td>transmit ＋ …</td><td>难以<b>传播</b> ⟹ 不如散步慢跑</td><td>❌ 反证：散步慢跑也不能「传播」</td></tr></table>'
     +'<b>⟹ 对比句里还有一招最快的反证法：把选项代进<u>被比较的另一方</u>，若那边也不成立，这个选项就死了。</b>',
 traps:['<b>命题人专造「听着像那么回事」的组合。</b>本题 evaluate ＋ measurable 两个词在语义上明明「押韵」，正因为押韵才更危险——'
        +'<b>它把因果偷换成了同义反复。</b>',
        '<b>2011 完形一共三对连体空</b>：4＋5（因果型）· 7＋8（取舍型：opposite → relaxes）· 16＋17（实验装置型：hold a pen with lips → disappointed expression）。'
        +'<b>连体空占了全篇 3 分，一律成对做、别拆开。</b>'],
 refs:[{p:'2011_完形_笑与情绪的方向之争.html',q:'q4',label:'2011·完形·4（因，sustain）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q5',label:'2011·完形·5（果，measurable）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q16',label:'2011·完形·16（装置型连体空）'}]},

{id:'R106', tier:'🔴', qt:'完形／阅读 · 实验描述段（asked volunteers to…／In an experiment published in…）', title:'实验段按「方法 → 结果 → 结论」三段设空；对照组的两个条件<u>必须相反</u>（中性不算相反）',
 trig:['出现 In an experiment published in 19XX','出现 asked volunteers／participants／subjects to do','段中出现 either…or… 分成两组','出现 those forced to… than did those who…'],
 flow:'① <b>先给段落分三段</b>：<b>方法</b>（怎么分组、各做什么）→ <b>结果</b>（哪组更怎么样）→ <b>结论</b>（说明了什么）；<br>'
     +'② <b>方法段的动词空</b>：判据不是词义，而是「<b>这个动作两组都做得到吗、会不会破坏器材、能不能维持住</b>」；<br>'
     +'③ <b>方法段的形容词空</b>：<b>对照原则</b>——两组的条件必须<u>相反</u>；<br>'
     +'④ <b>结果段与结论段的空</b>：看被测量的<b>变量</b>是什么（本篇是「情绪反应的热烈程度」）。',
 tmpl:'<b>2011 完形④段：一个实验，四个空</b>'
     +'<table class="tk"><tr><th>段位</th><th>空</th><th>判据</th></tr>'
     +'<tr><td>方法</td><td><b>16</b> hold</td><td>either 牙齿 or 嘴唇 ⟹ 两者<b>都能做</b>的动作（bite 只能用牙，且咬坏笔违背科研伦理）</td></tr>'
     +'<tr><td>方法</td><td><b>17</b> disappointed</td><td>另一组是 artificial <b>smile</b> ⟹ 必须<b>相反</b>；下句 <code>contracted in a <b>frown</b></code> 是原文解释</td></tr>'
     +'<tr><td>结果</td><td><b>18</b> reacted</td><td>被测变量＝情绪反应 ⟹ <code>react <b>to</b></code>（被刺激的一方）</td></tr>'
     +'<tr><td>结论</td><td><b>19</b> suggesting</td><td>具体发现 → 一般结论 ⟹ 「表明」（且 suggest 只 suggest，不 prove）</td></tr></table>',
 traps:['<b>「相反」与「中性」是两回事。</b>2011 完形 17 题的 <code>indifferent</code>（冷漠的、面无表情）与微笑确实有反差，'
        +'<b>但那是中性，不是相反</b>；文中说的是嘴巴<b>抿紧、皱缩</b>（contracted in a frown），那是<b>带负面情绪的表情</b>。'
        +'<b>题干要求对照时选「相反」，只说「没有那种性质」时才选「中性」。</b>',
        '<b>答案常写在紧邻的下一句的同义句里。</b>17 的钥匙是下句的 frown、18 的钥匙是 more enthusiastically、19 的钥匙是 the other way around——'
        +'<b>实验段读到卡住时，往后多读一句几乎必有解。</b>',
        '<b>结论句的动词要合「学术分寸」</b>：一项实验只能 <code>suggest／indicate</code>，不能 prove；'
        +'而 requiring（后须虚拟语气）、supposing（引出假设）在<b>语法上</b>就与陈述语气的 that 从句打架——<b>先用语法判据砍，再谈语义。</b>',
        '<b>研究报道的「方法段」不一定考实验操作</b>：2013 完形③段交代数据怎么来，四个空全是<b>打分场景的固定搭配</b>（interviews conducted by · rated on a scale of · took into consideration · marked out of 800）——<b>方法段写实验装置就考「两组都做得到」，写数据来源就考「打分、计分」的说法</b>（⟹ <a href="#R157">R157</a>）；而 2013 的假说段与发现段是同一个模子（⟹ <a href="#R156">R156</a>）。',
        '<b>研究<u>报道</u>比实验段多三个槽</b>：出处（That is what a study has concluded）· 意义（could help understand why … a major contributory factor）· 严谨（care was taken to see that …）——2015 完形六段六槽，<b>十个空是槽位套话</b>；解释槽只填推测词（difficult to explain ⟹ Perhaps），严谨槽只填确保类动词（see／ensure，不填 show／prove）。',
        '<b>2016·T3（阅读版的研究报道）</b>：立靶 → 背景 → 设计 → 发现 → 排除 → 结论 → 局限七件，比 2015 完形的六槽位多出开头的「立靶」与结尾的「局限」——31、35 两题正出在这两件上。',
        '<b>2017·完形（健康科普版的研究报道）</b>：方法槽 5 involving · 6 on · 7 exposed，结果槽 8 down · 9 calculated · 10 explained，追加发现 11 Even · 12 symptoms；<b>没有意义槽和严谨性槽，换成心理、生理两个机制槽</b>（13–16、17–20）——科普文不交代局限，只往回追原因（接 <a href="#R228">R228</a>）。',
        '<b>2018·完形（两个对照实验）</b>：瑞士实验 10 counterparts（对照组通称）、加拿大实验 16 discovered · 17 fooled · 18 willing · 19 In contrast · 20 unreliable——<b>本卡管方法段「两组条件相反」，2018 考的是结果段的四个格位</b>（动作同义、结果反号、身份反写、连接对比，⟹ <a href="#R246">R246</a>）。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'slots',label:'2015·完形 · 02+++ 研究报道六槽位表'},{p:'2015_完形_朋友是基因上的远亲.html',q:'q4',label:'2015·完形·4（方法槽：compared 两组）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q13',label:'2013·完形·13（方法段＝打分搭配）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q16',label:'2011·完形·16（两组都做得到的动作）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q17',label:'2011·完形·17（相反≠中性）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q18',label:'2011·完形·18（被测变量）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q19',label:'2011·完形·19（结论句的分寸）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'col4',label:'2016·T3 · 02++++ 专栏（七件套 vs 六槽位）'},
       {p:'2017_完形_拥抱有益健康.html',q:'slots',label:'2017·完形 · 02++++ 槽位对照表（多两个机制槽）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'pairs',label:'2018·完形 · 02++ 对照实验平行句表'}]}
,

{id:'R107', tier:'🔴', qt:'新题型 · 排序题（开考三秒钟做的第一件事）', title:'先数格子：格子数 ＝ 选项数 ⟹ <u>零多余项</u>，打法与验收方式全都不同',
 trig:['Part B 是排序题，题干画着一条带方框的链条','Directions 里写着 Paragraphs X and Y have been correctly placed','想知道这一年有没有多余项'],
 flow:'① <b>数链条上的格子</b>（含已经填好的那一两格），再数选项个数；<br>'
     +'② <b>格子数 ＜ 选项数 ⟹ 有多余项</b>（2010：6 格 7 项，多 1）；<b>格子数 ＝ 选项数 ⟹ 零多余项</b>（2011：7 格 7 项，全用上）；<br>'
     +'③ 顺手记下<b>已给定段各有几个邻居</b>——<b>邻居少的那一侧先做</b>（见 <a href="#R78">R78</a>）。',
 tmpl:'<table class="tk"><tr><th>形态</th><th>打法与验收的差别</th></tr>'
     +'<tr><td><b>有多余项</b><br>2010</td><td><b>末格不能靠排除</b>，必须有正向证据；<b>收尾动作＝把多余项逐个接缝试一遍</b>，全装不进去才算反证成功。</td></tr>'
     +'<tr><td><b>零多余项</b><br><b>2011</b></td><td><b>末格白送</b>（做完前四格，池里只剩一项）；<b>但没有多余项可验，只能靠整链通读</b>，而且<b>一处排错必然连累第二处</b>——错位成对发生，一次失误丢 4 分。</td></tr></table>'
     +'<p style="margin-top:8px"><b>零多余项的三条红利</b>：① 排除法可以做满；② 通读验闭合是<b>充分</b>检验（七项全用上且读得顺，几乎必对）；'
     +'③ <b>「这一项放哪儿都不像」不再是排除理由</b>，反而说明你还没找到它的位置。</p>',
 traps:['<b>把上一年的形态当成今年的默认值，是最省事也最贵的错。</b>2010 做完会形成「总有一项是多余的」的手感，'
        +'2011 一上来就是七格七项——<b>如果还惦记着找多余项，你会硬把某一项判死，然后剩下的五项挤在四个格子里。</b>',
        '<b>零多余项不等于更简单。</b>它把「认出假的」那部分分值，换成了「排列本身不许出错」的压力：'
        +'2009 选句填空 43 与 44 对调丢 4 分，就是同一个机制（见 <a href="#R55">R55</a>）——<b>只要是「一项一坑、全部用上」的题，错误天然成对。</b>',
        '<b>数格子要连已给定的那几格一起数。</b>2011 的链条是 <code>G→41→42→E→43→44→45</code>，'
        +'看起来只有五个空，<b>但格子是七个</b>——漏数已给定的 G 与 E，就会误判成「有两个多余项」。',
        '<b>2014：零多余项第二次</b>（<code>41→A→42→E→43→44→45</code>，7 格 7 段）——三年排序题两年零多余。零多余年份的诱饵换成「位置可挪」：C 放 42 也读得通、G 像首段、D 像接在 E 后面的总述，<b>各被一条语法证据否掉</b>（41 只有 C 能打头 · Ground 要先有空中 · In one case 要紧跟 another）。',
        '<b>2017：零多余项第三次</b>（<code>D→41→42→43→44→B→45</code>，7 格 7 段）——四年排序题三年零多余。今年的诱饵是「<b>同阶段并列</b>」：E（打零工 ＋ 投稿）与 A（首篇发表 ＋ 笔名成名）都属写作起步，话题上分不出先后，只有「投稿在前、发表在后」这一件事能分；排错必然 42、43 成对错。',
        '<b>2018：零多余项第四次</b>（41→C→42→43→F→44→45）——五年排序题四年零多余。诱饵是「尾首复现」：C 末 historic events ⟶ D 首 historical events，D 放 42 读来最顺，却把 G 挤到 45，成对丢 4 分（<a href="#R249">R249</a>）。',
        '2019 零多余第五次：诱饵是<b>同词镜像</b>（F ⑤ they can help you win ↔ A ① These tools can help you win），<b>一段诱饵两个假位置</b>（43、44）；先把 A 收进 45，两格同时解开。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 00 节「先数格子」'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'q45',label:'2011·新题型·45（末格白送）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 有多余项的那一年'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'extra',label:'2014·新题型 · 03 零多余的第二年（九篇多余项总账）'},
       {p:'2017_新题型_狄更斯小传.html',q:'extra',label:'2017·新题型 · 03 零多余的第三年（十二篇多余项总账）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'extra',label:'2018·新题型 · 03 零多余的第四年（十三篇多余项总账）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'extra',label:'2019·新题型 · 03 零多余第五年（同词镜像）'}]},

{id:'R108', tier:'🔴', qt:'新题型 · 排序题（正式开排之前）', title:'先拼块，再排块：把成对的段落粘死，排列数会当场崩塌',
 trig:['七段读完，感觉每一段都能接每一段','五个空排列组合太多，无从下手','看见两段之间有明显的呼应词'],
 flow:'① 扫七段的<b>首末两句</b>，只找「哪两段之间存在<u>不可拆</u>的证据」；<br>'
     +'② 把这样的两段（或三段）<b>粘成一个块</b>，之后当成一段来摆；<br>'
     +'③ 用已给定段的位置约束去<b>摆块</b>，而不是摆单段；<br>'
     +'④ 摆完再拆开看每个格子填的是哪一项。',
 tmpl:'<b>粘块的四种标志</b>'
     +'<table class="tk"><tr><th>标志</th><th>实例（2011）</th></tr>'
     +'<tr><td><b>副词呼应</b></td><td>A 尾 <code>Not surprisingly</code> ⟷ C 首 <code>Equally unsurprisingly</code>——<b>Equally 是个只对上文负责的词</b></td></tr>'
     +'<tr><td><b>数字接力</b></td><td>A：一半博士生退学 ⟷ C：（剩下的）只有约一半拿到教职——<b>同一批人的前后两道关口</b></td></tr>'
     +'<tr><td><b>一问一答</b></td><td>B 尾抛出「通识教育难达成共识」⟷ D 首 <code>One reason why it is hard to…</code></td></tr>'
     +'<tr><td><b>序数词</b></td><td>2010：E 尾 <code>two opposing trends</code> ⟷ A 首 <code>The first and more important</code></td></tr></table>'
     +'<p style="margin-top:8px"><b>算一笔账</b>：2011 五个待填项逐格试是 5! ＝ <b>120 种</b>；'
     +'粘成 <code>[B–D]</code>、<code>[A–C]</code>、<code>F</code> 三块后只剩 3! ＝ <b>6 种</b>，再加 E 的位置约束，<b>答案唯一</b>。'
     +'全篇七项最终压成 <code>G ｜[B–D]｜ E ｜[A–C]｜ F</code> 五块。</p>',
 traps:['<b>粘块的证据必须是「拆开就读不通」，不能是「话题相近」。</b>两段都在谈人文学科不叫证据；'
        +'<b>Equally 找不到上一句的「不足为奇」就读不通、half 找不到中心词就读不通</b>——这才叫不可拆。',
        '<b>粘块还能反过来救你。</b>2011 的 E 与 F 之间有一处七词级的原词复现，很像该紧挨着；'
        +'但一旦把 A—C 粘成块，就会发现<b>把 F 提前会让这个块无处安放</b>——<b>块的存在本身就是一条排除理由</b>（见 <a href="#R110">R110</a>）。',
        '<b>粘块也把「错误成对」的风险压掉了。</b>零多余项时最怕相邻两格互换，'
        +'而 43／44 一旦作为一个块整体落位，<b>两格是一次判断而不是两次</b>。',
        '<b>2014：E 之后连续三个空，全靠一个块。</b>D 末 <code>In one case</code>、B 首 <code>In another case</code> ⟹ [D–B] 粘死，剩下只是「G 在块前还是块后」的二选一（3! ＝ 6 → 2 → 1）；G 必须紧跟 E（Aerial → Ground），块落 44–45。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'q44',label:'2011·新题型·44（副词呼应＋数字接力）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 00 节第②条（120 → 6）'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'q44',label:'2014·新题型·44（[D–B] 块：In one case / In another case）'}]},

{id:'R109', tier:'🔴', qt:'新题型 · 排序题 / 选句填空（找接缝）', title:'同源词换词性，是比代词更硬的一只钩：this 只说「上文有个东西」，separate→separation 还说了「是哪个东西」',
 trig:['某一项段首出现 this / these ＋ 抽象名词','两段之间似乎有呼应，但拿不准是不是巧合','有好几项都能接上这个指示代词'],
 flow:'① 先找段首的<b>指示代词 ＋ 抽象名词</b>（this separation / these requirements / such variations）；<br>'
     +'② 再回上文找<b>与那个抽象名词<u>同词根</u>的另一个词性</b>——形容词、动词或分词形态；<br>'
     +'③ <b>两者都命中 ⟹ 这处接缝不可动摇</b>；只有指示代词命中而找不到同源词 ⟹ 只是候选，还要看别的项。',
 tmpl:'<table class="tk"><tr><th>年份</th><th>上一段 ⟶ 下一段（同源词 ＋ 指代）</th></tr>'
     +'<tr><td><b>2011</b><br>（双钩，最硬）</td><td><code>should be kept <b>separate</b>, taught in different schools</code>（D 尾，形容词）⟶ <code>by <b>this separation</b></code>（E 首，名词）</td></tr>'
     +'<tr><td>2010<br>（只有概括名词）</td><td><code>New skills and unfamiliar business models are <b>needed</b></code>（D 尾）⟶ <code><b>these requirements</b></code>（G 首）——同义不同根，要靠数条目（见 <a href="#R83">R83</a>）</td></tr>'
     +'<tr><td>反例</td><td>2010 多余项 C 的 <code>such variations</code> 上文找不到具体所指，<b>空钩</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>常见的同源词换词性对</b>：separate / separation · differ / difference · insist / insistence · '
     +'professionalise / professionalisation · produce / the producers / production · require / requirements。'
     +'<b>它们在排序题里几乎全部出现在段落的头尾。</b></p>',
 traps:['<b>同源词也可能出现在<u>不相邻</u>的两段。</b>2011 的 <code>the producers of knowledge</code> 在 E 末句与 F 首句各出现一次，'
        +'但两段之间隔着 A、C——<b>同源／原词复现只有在「上一段尾 ⟶ 下一段首」这个位置上才是接缝</b>（见 <a href="#R110">R110</a>）。',
        '<b>先行词要紧邻，同源词允许稍远一点，但不能跨段。</b>代词的规矩见 <a href="#R53">R53</a>；'
        +'同源词可以指向上一段末尾整句话的核心概念，<b>但仍必须在<u>紧邻的上一段</u>里。</b>',
        '<b>还有一类隐形的钩：省略了中心词的 half / the first / another。</b>'
        +'2011 C 首句 <code>only about <b>half</b> end up…</code> 没写「谁的一半」，<b>它比任何代词都更依赖上文</b>，'
        +'却因为没有一个长得像连接词的词而最容易被忽略（见 <a href="#R79">R79</a> 第Ⅲ类）。',
        '<b>2012·新题型 一篇用了两次</b>：45 题 <code>a one-way tap <b>flowing</b></code> → G 的 <code><b>the flow</b></code>（动词 → 名词 ＋ 定冠词）；44 题 <code>a pyramid of production <b>remains</b></code> → F 的 <code>the <b>persistence</b> of this pyramid</code>（同义换词性 ＋ 指示词）。选句填空里照样好使。',
        '<b>2015·42</b>：②❸ You infer → E You make further inferences——动词换成名词、再加 further，比 this 更硬地锁住上家。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'q42',label:'2011·新题型·42（separate ⟶ this separation）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 02++ 六个接缝总表'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q45',label:'2012·新题型·45（flowing → the flow）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q42',label:'2015·新题型·42（infer → further inferences）'}]},

{id:'R110', tier:'🟡', qt:'新题型 · 排序题（防「最醒目的那处复现」）', title:'跨段的原词复现只能<u>加固</u>，不能<u>定位</u>：判据不是「有没有复现」，而是「隔了几段」',
 trig:['两项之间有一长串一模一样的词，看着像天生一对','某一项与已给定段共用一个术语','复现词最多的那一项，反而放哪儿都不太顺'],
 flow:'① 找到复现之后，先问一句：<b>它是「上一段尾 ⟶ 下一段首」吗</b>？<br>'
     +'② 是 ⟹ 可以当接缝用（2011 的 <code>disciplines</code>：E 末句 ⟶ A 首句）；<br>'
     +'③ 不是（隔了一段以上）⟹ <b>只能当加固，不能定位</b>——它多半是「总结句在回应前面提出的概念」，<b>两者之间天然要隔开一段距离</b>。',
 tmpl:'<b>2011 的两处复现，一处能用一处不能用</b>'
     +'<table class="tk"><tr><th>复现</th><th>能不能定位</th></tr>'
     +'<tr><td>E 末 <code>disciplines acquire a monopoly</code> ⟶ A 首 <code>No <b>disciplines</b> have seized on…</code></td><td><b>能</b>：尾接首，且逻辑上是「从总到分」</td></tr>'
     +'<tr><td>E 末 <code>the production of the <b>producers of knowledge</b></code> ⟶ F 首 <code>“the <b>producers of knowledge are produced</b>”</code></td><td><b>不能</b>：七个词几乎原样搬过来，<b>却隔着 A、C 两段</b>；它是 F 在总结 E 提出的概念</td></tr></table>'
     +'<p style="margin-top:8px"><b>为什么总结句一定隔得远</b>：作者先提出概念（E），再用两段展开后果（A、C），最后回到这个概念给建议（F）。'
     +'<b>「概念 → 展开 → 回扣」是议论文的常规节奏，回扣处必然与提出处隔着展开部分。</b></p>',
 traps:['<b>把跨段复现当接缝，会一次错两格甚至更多。</b>2011 若把 F 提到 E 之后，'
        +'被 <code>Not surprisingly / Equally unsurprisingly</code> 粘死的 A—C 块就没地方放了——<b>全线崩。</b>',
        '<b>命题人也用复现钓鱼。</b>2010 的多余项 C 是全篇复现词最多的一项（段首 such variations ＋ 段尾 this change），'
        +'却整段不含主线名词（见 <a href="#R81">R81</a>）——<b>五篇新题型里有两篇的多余项靠词面呼应钓鱼，占一半。</b>',
        '<b>结论：「哪一项和上文最像」在 Part B 里始终是负资产。</b>可靠的是那些'
        +'<b>不指望你注意、却在语法上非有不可</b>的东西：His 找不到人就读不通、this separation 找不到「分离」就读不通、half 找不到中心词就读不通。',
        '<b>2014：C 末 <code>the larger landscapes</code> 与 D 首句 <code>entire landscapes</code> 隔着五段复现</b>——首段预告术语、后文兑现，天然隔得远，只能加固；真正定 D 的是<b>相邻</b>的 G 末 <code>maps / landscapes</code> ＋「例子回收方法」（见 <a href="#R179">R179</a>）。',
        '<b>2017：伤痕线跨四段只加固</b>——F 末 the unacknowledged foundation of his fiction（屈辱是小说的根基）与 G 的 workhouse／criminal slums（《雾都孤儿》）遥相呼应，E 的 comic or odd 与 C 的 comic novel、G 的 sunlight of Pickwick 也连成一条喜剧线；都隔着好几段，<b>只能用来通读验收</b>，定位靠相邻的事件接力（<a href="#R232">R232</a>）。',
        '<b>2018 修正：尾接首也会骗人</b>——C 末 has been the scene of many historic events ⟶ D 首 have participated in historical events，尾首几乎同义，答案里却隔着四段。判据前移一步：先问上段末句是事件（交棒）还是总评（预告），见 <a href="#R249">R249</a>。',
        '<b>2019：跨段复现里藏着一对镜像</b>——F ⑤ 与 A ① 骨架相同、隔三段；G 的 tennis games（原刊 tournaments，考卷改词）与 A 的 tennis game 隔四段——都只加固，不定位（<a href="#R270">R270</a>）。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'q45',label:'2011·新题型·45（隔两段的复现）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 02++ 缝法强弱表'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 03 多余项 C'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'q44',label:'2014·新题型·44（隔五段的 landscapes 只加固）'},
       {p:'2017_新题型_狄更斯小传.html',q:'ladder',label:'2017·新题型 · 02+++ 名气阶梯 ＋ 伤痕线／喜剧线（跨段只加固）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'seams',label:'2018·新题型 · 02++ 红框（尾首复现是预告）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'seams',label:'2019·新题型 · 02++ 红框（F ⑤ ↔ A ① 隔三段）'}]},

{id:'R111', tier:'🟢', qt:'新题型 · 排序题（元套路 · 认文体）', title:'先认文体，首尾两格常常是白送的：书评的骨架是「荐书 → 观点 → 建议 → 局限」',
 trig:['七段里出现书名、作者身份、should be read by…','段落里反复出现同一个人名 ＋ says／notes／argues／concludes','拿不准末段该长什么样'],
 flow:'① 扫一遍七段，先判<b>文体</b>：书评 / 商业分析 / 研究报道 / 社论；<br>'
     +'② 按文体套<b>骨架</b>，骨架的头尾直接对应链条的首末格；<br>'
     +'③ 再用接缝证据去核对——<b>文体只用来提出假设，不能替代证据</b>。',
 tmpl:'<table class="tk"><tr><th>文体</th><th>骨架 · 首末格长相</th></tr>'
     +'<tr><td><b>书评</b><br>2011</td><td><b>荐书（首）→ 介绍书中观点 → 给出书中建议 → 指出该书局限（末）</b>。末段的两个标记：<code>concludes ＋ 人名</code>、<code>Yet … does not say</code>。</td></tr>'
     +'<tr><td><b>商业分析</b><br>2010</td><td><b>现象与机会（首）→ 数据论证 → 条件与顾虑 → 趋势展开</b>。<b>末格未必有总结感</b>——2010 结在「两个趋势里的第一个」，戛然而止。</td></tr>'
     +'<tr><td>通用</td><td>引述动词的位置价值：<code>points out ＜ notes ＜ argues ＜ <b>concludes</b></code>——<b>concludes 几乎总指向末段</b>。</td></tr></table>'
     +'<p style="margin-top:8px"><b>2011 的首段是题目直接给的（G）</b>，等于把「本文是书评」这个信息白送给你；'
     +'<b>拿到文体，F 的末段身份当场坐实</b>：先给方案（The key to reforming…），再承认作者也没答上来（does not say）。</p>',
 traps:['<b>「结尾该有总结感」不能当规则，文体才能。</b>同样是排序题，2010 的末格没有总结感、2011 的末格有——'
        +'<b>凭语感挑末格，两年里必错一年。</b>',
        '<b>文体只能提假设。</b>认出书评之后仍要回去核接缝：C 尾把困境写到底 ⟶ F 首 <code>The key to reforming</code>，'
        +'这条「问题 ⟶ 建议」的证据才是最终依据。',
        '<b>Otherwise 是个便宜的文体探针。</b>段中出现 <code>Otherwise</code>（否则……），说明上一句是<b>建议</b>，'
        +'这一段就是方案段——<b>方案段在议论文里几乎总在最后。</b>',
        '<b>2012·T1：书评也会以阅读 Text 出现，而且在四选一里坑更多</b>——排序题里文体只帮你定首尾两格，'
        +'<b>阅读题里书评给出三个可被问的主体（书作者／书本身／所评之事），题干主语决定取料层</b>（⟹ R112、R113）。',
        '<b>2013·T1：第二篇阅读书评，四格齐全</b>——①②❶ 荐书 → ②❷–④ 观点（Cline argues／she finds）→ ⑤❶⑥❶ 建议（Cline introduced／believes）→ ⑤❷⑥❷❸ 局限（But as Cline is the first to note／She exhibits the idealism…／Vanity is a constant）。<b>局限格就是书评人自己的声音，末段推断题（24）答案在这里</b>（⟹ <a href="#R142">R142</a>）。',
        '<b>2014：说明文末段是个例子，没有总结</b>（<code>In another case …</code> 戛然而止），与 2010 同。2011 书评结尾有总结，那是文体给的；<b>百科说明文的顺序靠三条说明逻辑：先问后答 · 先总后分 · 先古后今</b>。',
        '<b>2017：人物传记</b>——骨架是「总评（首段先报结局）→ 出身 → 挫折 → 起步 → 成名 → 此后」，顺序几乎只由时间决定，靠段首的 Soon after／After／The first 接力（<a href="#R232">R232</a>）。<b>末段 G 读着像「总—分—总」的收尾</b>（consolidated … celebrated man of letters），黄皮书也这么说；但它只写到 1830 年代末，狄更斯写到 1870 年——<b>真题是节选，定 45 的证据是 After Pickwick，不是总结感</b>。四年排序题末段：2010 戛然而止 · 2011 书评有总结 · 2014 以例子收尾 · 2017 像总结其实是半程。',
        '<b>2018：机构／建筑史骨架</b>＝今天的地位 → 原名与意义 → 前史 → 筹建 → 建造 → 入驻 → 人与事；首尾是总述层（现在时、现在完成时），中间是叙事层（<a href="#R248">R248</a>）。<b>末段 D 读着像「呼应开篇」，其实原刊 D 之后还有七段，是命题人剪出来的末段</b>——连续两年（2017 G、2018 D），靠总结感挑末段都只是碰巧对。',
        '<b>2019 反例：末段是原刊真末段</b>——A 一字未改，B 的 a mistaken view ↔ A 的 readjust our view 是作者自己写的首尾呼应；2017、2018 的末段才是剪出来的。驳论评论的骨架：<b>破 → 立 → 让 → 行 → 合</b>（<a href="#R269">R269</a>）。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 00 节第③条（书评四格骨架）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'q45',label:'2011·新题型·45（两个末段标记）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'col1',label:'2012·T1（书评第一次以阅读 Text 出现 ⟹ 三层主体，见 R112）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'col4',label:'2013·T1（书评四格齐全，局限格＝书评人的声音）'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'q45',label:'2014·新题型·45（说明文末段是例子）'},
       {p:'2017_新题型_狄更斯小传.html',q:'q45',label:'2017·新题型·45（传记末段像总结，其实是节选的半程）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'book',label:'2018·新题型 · 03+ 商榷 1（末段是剪出来的）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q45',label:'2019·新题型·45（原刊真末段 · 首尾呼应是作者写的）'}]},

{id:'R112', tier:'🔴', qt:'书评类文章 · 作者观点题 / 人物观点题 / 态度题通用', title:'书评里躺着三个主体：书作者 / 书本身 / 书所评的那件事——先给题干标出它在问哪一层',
 trig:['首段出现书名（斜体）＋ 作者名 ＋ contends／argues／claims that','题干出现 X&#39;s book fails to… 或 In the author&#39;s view, the book…','同一段里既有「这本书写得怎样」又有「书里那套东西灵不灵」'],
 flow:'① 开篇三十秒，在卷边写三行：<b>「书作者＝___」「书＝___」「所评之事＝___」</b>；<br>'
     +'② 读每一句都问：<b>它在评哪一层？</b>（夸书作者眼光 ／ 骂书写得不够 ／ 骂那套东西不灵）；<br>'
     +'③ 做题先看题干<b>主语</b>，把取料范围锁死在对应那一层——<b>锁死之后一半干扰项自动出局</b>；<br>'
     +'④ 最易混的是「书本身」与「所评之事」：判据是<b>动词与主体的职能匹不匹配</b>——书能「探讨／揭示／论证／遗漏」，不能「产生社会效应／回避缺陷／持续见效」。',
 tmpl:'<table class="tk"><tr><th>层 · 题干长相</th><th>2012 T1 的取料</th></tr>'
     +'<tr><td><b>① 书作者</b><br><code>Rosenberg holds that…</code></td><td>22 题只取③段（她的主张）</td></tr>'
     +'<tr><td><b>② 书本身</b><br><code>Rosenberg&#39;s book fails to…</code></td><td>23 题<b>只能</b>取④❷（细节太多、探讨不足）</td></tr>'
     +'<tr><td><b>③ 所评之事</b><br><code>the effect of peer pressure</code></td><td>25 题取⑥段（外部操盘不灵）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012 T1·23 的四个选项<b>整整齐齐在三层之间挪</b>：A 停在第②层 ✔ · B 把「揭示」关系改成「回避」 · C 把第③层的例证细节（州拨款）说成书的论述内容 · <b>D 把第③层的毛病（疗法不持久）记到第②层头上（书没产生长期社会效应）</b>。</p>',
 traps:['<b>D 型干扰项最难察觉：原意照搬、只换主语</b>。④❸ 说「社会疗法效力不持久」千真万确，选项把主语换成 book——<b>不改词、不改方向、不改范围</b>，四种造项手法里最隐蔽的一种。',
        '<b>「书本身」与「所评之事」常挤在同一段、甚至相邻两句</b>（2012 T1 ④❷ 骂书，④❸ 立刻跳到骂疗法）。<b>段落定位对了还不够，要定位到句。</b>',
        '<b>与 R21 的分工</b>：R21（谁／对谁／做了什么）管<b>一句之内</b>的主宾错位，R112 管<b>一篇之内</b>的层级错位。<b>先 R112 后 R21。</b>',
        '<b>书评体裁天生是主体类干扰项的温床</b>：2012 T1 十五个干扰项里六个是主体挪位（占四成）。<b>一认出书评，把主体校验提到第一顺位。</b>',
        '<b>书评不必然出主体刀</b>：2013·T1 同为书评，十五个干扰项里<b>零个</b>在「书作者／书本身／所评之事」三层之间挪（四族 4／4／4／3 均分）——体裁告诉你往哪看，不告诉你刀落在哪。'],
 refs:[{p:'2012_T1_同侪压力与社会疗法.html',q:'col1',label:'2012·T1 · 02+ 专栏（三层主体表）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q23',label:'2012·T1·23（四个选项全在三层间挪）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'col6',label:'2013·T1 · 对照：零个三层挪位干扰项'}]},

{id:'R113', tier:'🔴', qt:'书评类文章 · 人物观点题与作者观点题相邻时', title:'褒贬分水岭：书评的两句判决词是同一个模子——题干主语决定你去分水岭的哪一侧取料',
 trig:['X is a perceptive／keen observer · X&#39;s critique is spot-on · X argues convincingly','But on …, X is less persuasive · Where the book falls short is…','两道相邻的题，一道问 X holds，一道问 In the author&#39;s view'],
 flow:'① 找两句<b>同一个模子</b>的评价句：<code>X is ＋ 褒义表语</code> 与 <code>But on …, X is less ＋ 褒义词</code>——<b>中间那条缝就是分水岭</b>；<br>'
     +'② <b>分水岭以上 ＝ 书作者的主张清单</b>（可以整段当她的观点用）；<b>分水岭以下 ＝ 这本书的毛病清单</b>；<br>'
     +'③ 题干问 <code>X holds／argues／suggests</code> ⟹ 只到分水岭<b>以上</b>取；问 <code>In the author&#39;s view … fails to</code> ⟹ 只到分水岭<b>以下</b>取。',
 tmpl:'<table class="tk"><tr><th>2012 T1</th><th>判决句</th></tr>'
     +'<tr><td>③❶ 上句（褒）</td><td><code>The idea seems promising, and Rosenberg is <b>a perceptive observer</b>.</code> ⟹ 22 题在此侧</td></tr>'
     +'<tr><td>④❶ 下句（贬）</td><td><code><b>But on</b> the general effectiveness of the social cure, Rosenberg is <b>less persuasive</b>.</code> ⟹ 23 题在此侧</td></tr></table>',
 traps:['<b><code>less persuasive</code> 是「没那么有说服力」，不是「没有说服力」</b>——书评极少全盘否定，比较级本身就是分寸；正因如此作者后文还能承认对方一半的道理。',
        '<b><code>But on X</code> 的 on ＝「就 X 而言」</b>：批评被限定在 X 这一块（2012 T1 只批「总体效力」，不批「想法」）。',
        '<b>分水岭是「分区」不是「取舍」</b>：2012 T1 的 22 题（4 分）恰恰全在分水岭以上——与 R86 话题换轨句同理，前半段照样出题。',
        '<b>暗说的分水岭</b>（2013·T1）：没有 less persuasive 这种判决词，只有 <code>But as Cline is the first to note</code>（借对方之口）＋ 归类句（exhibits the idealism common to…）＋ 格言短句（Vanity is a constant）——<b>要靠这三个标记认</b>（⟹ <a href="#R142">R142</a>）。'],
 refs:[{p:'2012_T1_同侪压力与社会疗法.html',q:'col2',label:'2012·T1 · 02++ 专栏（分水岭两句）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22（取分水岭以上）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'col4',label:'2013·T1（暗说的分水岭）'}]},

{id:'R114', tier:'🔴', qt:'作者态度题 / 段落推理题（题干是不带定语的抽象名词 ＋ 段落限定）', title:'一个概念被拆成两半：「它本身」与「人为去用它」——态度题问的是哪一半，由段落限定词裁',
 trig:['相邻两段出现 There&#39;s no doubt that A … ／ Far less certain, however, is how B …','题干形如 the effect／the role／the value／the future of X ＋ in the last paragraph','两个态度选项看起来都有原文依据（一个褒、一个存疑）'],
 flow:'① 先用<b>限定段的主旨句</b>给题干的抽象名词<b>补一个定语</b>（2012 T1：<code>the effect of peer pressure</code> ⟹ <code>… when experts engineer it from the outside</code>）；<br>'
     +'② 回头扫<b>相邻段</b>有没有对同一个 X 的<b>相反</b>表态——有的话，它就是最像的那个干扰项的出处；<br>'
     +'③ 两项都「有据」时，裁判只有题干的<b>段落限定词</b>（⟹ R7）。',
 tmpl:'<table class="tk"><tr><th>2012 T1 的两半</th><th>原文 ⟹ 选项</th></tr>'
     +'<tr><td>⑤❶ 承认（它本身）</td><td><code>There&#39;s <b>no doubt</b> that our peer groups exert <b>enormous</b> influence</code> ⟹ 25C profound（出局：不在末段）</td></tr>'
     +'<tr><td>⑥❶ 怀疑（人为去用它）</td><td><code><b>Far less certain</b>, however, is how successfully experts … can select our peer groups</code> ⟹ <b>25D questionable ✔</b></td></tr></table>'
     +'<p style="margin-top:8px">📌 作者自己给出了分界线的名字：⑥❹ <code>a social cure <b>engineered from the outside</b></code>——他反对的不是同侪压力，是「外部操盘」。</p>',
 traps:['<b>C 型干扰项「信息为真、段落不对」最险</b>：它一个字没编，只是被题干的 <code>in the last paragraph</code> 挡在外面。<b>profound 与 questionable 并不矛盾——两项都对时，判据只能是限定词。</b>',
        '<b>倒装句里藏褒义词</b>：⑥❶ 的 successfully／virtuous 都在被 Far less certain 罩住的主语从句里——<b>被存疑罩住的褒义词一律不能取正号</b>（25B desirable 的坑）。',
        '<b>「无效」≠「有害」</b>：⑥❹ <code>that&#39;s the problem</code> 说的是行不通，25A harmful 把它升了一档。',
        '<b>作文可直接搬这副切分刀</b>：<code>There&#39;s no doubt that A. Far less certain, however, is whether B.</code>——一句承认、一句怀疑，只打你想打的那一半。'],
 refs:[{p:'2012_T1_同侪压力与社会疗法.html',q:'col3',label:'2012·T1 · 02+++ 专栏（概念被拆成两半）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q25',label:'2012·T1·25（profound 被段落限定词判出局）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'s10',label:'2012·T1 · s10（表语前置的完全倒装）'}]},

{id:'R115', tier:'🟡', qt:'伪装成人物观点题的习语题（take a page from 一类）', title:'习语不认识就读它两端的落差：一边做得差、一边很擅长，中间连着 ought to ⟹ 只能是「学」',
 trig:['题干是 X holds that … should，定位句里卡着一个不认识的习语／短语动词','习语前一句是负面评价，后一句（或同位语）是正面评价','选项里同时有「学」「雇」「远离」「认识到局限」这类方向相反的动作'],
 flow:'① 把习语<b>前后各一句</b>的褒贬标出来；<br>'
     +'② 看两端<b>同向还是反向</b>；<br>'
     +'③ <b>反向（差 vs 好）＋ ought to／should ⟹ 习语必是「向好的一方学」</b>；同向 ＋ and ⟹ 多半是「继续、加强」。',
 tmpl:'<p><b>2012 T1·22</b>：③❷❸ 公共健康运动 <code>fail to mobilize／seriously flawed</code>（差）⟶ ③❹ <code>ought to <b>[take a page from]</b> advertisers</code> ⟵ <code>so skilled at applying peer pressure</code>（好）⟹ <b>B learn from advertisers&#39; experience</b>。</p>'
     +'<p style="margin-top:8px">📌 同族习语：take a leaf out of sb&#39;s book · follow suit · learn a trick or two from · on the same page（意见一致）· at odds with（不一致）。</p>',
 traps:['<b>题型标签会骗人</b>：22 题写着「人物观点题」，实际考的是一个习语。<b>凡定位句里有看不懂的短语，先按 R115 推方向，再比选项。</b>',
        '<b>与 R90 的区别</b>：R90 用在明写着的词义题上（四个选项塞回去都通顺 ⟹ 看逻辑角色）；R115 用在<b>伪装成观点题</b>的习语上。',
        '<b>跨段拼词是这类题的标配干扰</b>：22A recruit professional advertisers 的 recruit 来自②段（对象是年轻人），advertisers 来自③段——<b>习语推出来是「学」，「雇」自然出局</b>（⟹ R39）。',
        '<b>2017·T4·①❷</b>：<code>holding its nose at the ethics of his conduct</code>——习语前一句是「推翻定罪」（对他有利），But 转向；两段后④❶ distasteful／nasty 把它翻成白话 ⟹ 36C contemptuous（本卡的两端之外再加一道「隔段回收」，⟹ <a href="#R225">R225</a>）。'],
 refs:[{p:'2012_T1_同侪压力与社会疗法.html',q:'col4',label:'2012·T1 · 02++++ 专栏（两端落差）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22（take a page from）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'col1',label:'2017·T4 · 02+ 专栏（习语的三道保险）'}]},

{id:'R116', tier:'🔴', qt:'事实细节题 · 目的题（By doing X, A intended to…）', title:'交换结构：As a condition of X, A agreed to Y——X 是「要的」，Y 是「给的」；问目的取 X',
 trig:['原文出现 as a condition of／in exchange for／in return for／on condition that／provided that','题干问 intended to／in order to／the purpose of … was／By entering into…','某个选项的名词恰好是后文的焦点（续期、执照、许可），且出自另一个年份的句子'],
 flow:'① 认出交换结构：<b>介词／连词后面是「要的」（X），主句动词（agreed to／accepted／offered）后面是「给的」（Y）</b>；<br>'
     +'② 看题干问哪一头：<b>问 intended to／想得到什么 ⟹ 取 X；问 agreed to／答应了什么 ⟹ 取 Y</b>；<br>'
     +'③ 题干带年份时，<b>先在时间轴上圈出这一年，只读这一格的句子</b>——后来追加的条件不能挪到前面的协议头上。',
 tmpl:'<table class="tk"><tr><th>结构</th><th>要的 · 给的</th></tr>'
     +'<tr><td><code><b>As a condition of</b> X, A agreed to Y</code></td><td>要 ＝ X（介词后）· 给 ＝ Y（agreed to 后）</td></tr>'
     +'<tr><td><code>A offered Y <b>in exchange for</b> X</code></td><td>要 ＝ X（for 后）· 给 ＝ Y</td></tr>'
     +'<tr><td><code>A accepted Y <b>to secure</b> X</code></td><td>要 ＝ X（不定式里）· 给 ＝ Y</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T2·27：③❷ <code>As a condition of receiving state approval for the sale, the company agreed to seek permission … to operate past 2012</code> ⟹ 要的是「收购获批」＝ <b>D get permission to purchase a power plant</b>；<b>C acquire an extension of its business license 把「给的」当成了「要的」，还掺进了 2006 年追加条件的原词（extension／license）</b>。</p>',
 traps:['<b>「后来最重要的东西」会被倒推成「当初想要的东西」</b>：续营许可是整场官司的焦点，但 2002 年签约时离 2012 还有十年——公司那时要的只是把电站买下来。',
        '<b>同义换位</b>：原文 X 里用 approval，Y 里用 permission；正确项用 permission 描述 X。<b>只认词的考生会被 permission 这个原词引到 Y 那边去。</b>',
        '<b>年份串格</b>（⟹ R98）：C 的 extension／license 出自③❸ 的 2006 年句，题干钉死 2002。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col2',label:'2012·T2 · 02++ 专栏（交换结构表 ＋ 时间轴）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q27',label:'2012·T2·27（C 把代价当目的 ＋ 2006 串到 2002）'}]},

{id:'R117', tier:'🔴', qt:'多方博弈类文章（公司／州／联邦 · 企业／监管者／公众）· 细节题与推断题通用', title:'三方博弈的文章，先画三栏：选项里每个机构名、每个所有格，都先查它原来住哪一栏',
 trig:['文中出现三方以上的机构（公司、州政府、联邦法院、监管委员会……）','某个专名里嵌着对方的名字（Vermont Yankee 是公司的电站，Vermont 是州）','原文出现 both A&#39;s X and B&#39;s Y，或 its X in 地名 这类「谁的」结构'],
 flow:'① 在卷边画三栏（本篇：【公司】／【州】／【联邦】），<b>每读到一个机构名、所有格，就丢进对应的栏</b>；<br>'
     +'② <b>专名里嵌着对手名字的，当场在旁边注一个字</b>（Vermont Yankee 旁写「司」，Vermont Senate 旁写「州」）；<br>'
     +'③ 做题时把选项里的「定语 ＋ 机构名」「所有格 ＋ 名词」拿回三栏核：<b>它原来住哪一栏？住错了栏，内容再对也是错项</b>；<br>'
     +'④ 特别盯两种变形：<b>地点状语 ⟷ 所有格</b>（its reputation in Vermont → Vermont&#39;s reputation）· <b>定语换栏</b>（Vermont legislature → federal legislature）。',
 tmpl:'<table class="tk"><tr><th>2012 T2 的挪栏</th><th>原文 → 选项</th></tr>'
     +'<tr><td>27B 州 → 联邦</td><td><code>the Vermont legislature</code> → <code>the federal legislature</code></td></tr>'
     +'<tr><td>28 电站 vs 公司</td><td><code>both Vermont Yankee&#39;s safety and Entergy&#39;s management</code>，问 Entergy 只取 management</td></tr>'
     +'<tr><td>29C 州 → 联邦</td><td><code>those powers</code>（州的）→ <code>the federal authority</code></td></tr>'
     +'<tr><td>30D 公司 → 州</td><td><code>its reputation in Vermont</code> → <code>Vermont&#39;s reputation</code></td></tr></table>',
 traps:['<b>专名撞词最省命的一步是「注一个字」</b>：读快了「佛蒙特」三个字会自动归到州那一栏，而 28 题的正解正是靠分清「电站的安全」与「公司的管理」。',
        '<b>地点状语改所有格是最隐蔽的换主人</b>：in Vermont（地点）与 Vermont&#39;s（主人）只差一个撇号 s；30D 还顺手把「已经坏透了」改成「可能受损」，时态也对不上。',
        '<b>与 R21／R97／R34 的分工</b>：R21 管一句之内谁对谁做了什么，R97 管谁在说话，R34 管定语挂错了中心词，<b>R117 管这个东西归谁</b>；2012·T2·29C 同时踩中 R97 与 R117（说话人错 ＋ 权力的主人错）。',
        '<b>与 R93（术语关系表）、R97（说话人编号）是一个家族</b>：文章里凡有三个以上「长得像的名字」——术语、说话人、机构——都先画表再做题。',
        '<b>画栏时同一个名字能放进两栏，旁边打星号——那里一定有题</b>（2013·T2）：微软、谷歌既做浏览器又做广告（⑦❷❸），于是③❸ 的 the industry 该归哪栏成了争议（27 题），微软「为消费者着想」也显得可疑（30 题）（⟹ <a href="#R144">R144</a>）。',
        '<b>2013·T4 给画栏补一步「先分牌」</b>：判决新闻里同一个机构在两块比分牌上输赢相反（亚利桑那州：政策牌输、宪法牌赢；白宫：政策牌小胜、宪法牌全败），<b>只画「州／联邦」两栏会把白宫和国会塞进同一栏</b>——而本文的刀口恰恰是白宫违背国会（⑦❹）。<b>联邦要拆成三栏：国会（立法）／白宫（行政）／法院（司法）</b>（⟹ <a href="#R152">R152</a>）。',
        '<b>2016·T1·23</b>：题干问 <b>the fashion industry</b>，而①④ 段动手的是<b>政府</b>（lawmakers · parliament · government-defined），⑤⑥ 段动手的才是<b>行业自己</b>（it is trying · Denmark’s fashion industry agreed）——23A「法国的措施」连主体都挂错了栏。',
        '<b>2016·T2</b>：③段四个政党 ＋ 地方议会、⑤段奥斯本 ＋ 游说集团 ＋ 作者——一段站三方以上，十五个干扰项里就多出一族「主体偷换」（28A、29C）；画栏时先按 likewise／silent／Only 归栏（⟹ R202）。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col1',label:'2012·T2 · 02+ 专栏（三栏表 ＋ 五个挪栏干扰项）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q30',label:'2012·T2·30D（its reputation in Vermont → Vermont&#39;s reputation）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q29',label:'2012·T2·29C（州权 → 联邦权）'},
       {p:'2013_T2_默认不追踪之争.html',q:'col5',label:'2013·T2 · 02+++++ 专栏（四拨人归栏表 ＋ 一人站两栏）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'col1',label:'2013·T4 · 02+ 专栏（两块牌 × 六方主体表）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q23',label:'2016·T1·23（政府栏 vs 行业栏）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col2',label:'2016·T2 · 02++ 专栏（归栏 vs 挪栏）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'col3',label:'2018·T3 · 02+++ 专栏（四方配对 ＋ 刻度词表）'}]},

{id:'R118', tier:'🔴', qt:'事实概括题（has problems with its ___ · is mainly concerned with ___）· 选项是四个抽象类别名', title:'四个选项全是类别名时：作者已经亲手给事实归过类的，照抄他的类别名——你替事实另贴的标签就是干扰项',
 trig:['题干问 X seems to have problems with its…／X is mainly concerned with…','四个选项都是抽象名词（管理／技术／财务／远见）','定位段里有 raised questions about／a failure of／this reflects 这类定性句','定位段开头是 Either…or…／Perhaps／may have 这类猜测句'],
 flow:'① <b>先在定位段里找「作者的定性句」</b>：raised questions about X · X is the real problem · a failure of X；<br>'
     +'② <b>找到了就照抄它的类别名</b>（同根、同义都算）；<br>'
     +'③ <b>再排猜测句</b>：Either…or… 给的是两个竞争的假说，<b>选项只取其中一支，就是把「可能」写成了「事实」</b>；<br>'
     +'④ 最后才轮到自己归纳——<b>警惕「最顺手的那个标签」</b>（事故 ⟹ 技术），它往往就是命题人准备的。',
 tmpl:'<table class="tk"><tr><th>2012 T2·28</th><th>归类出处</th></tr>'
     +'<tr><td>A managerial practices ✔</td><td>④❷ <code>raised serious questions about … Entergy&#39;s <b>management</b></code>——作者亲手下的类别</td></tr>'
     +'<tr><td>B technical innovativeness</td><td>读者自己给「冷却塔塌、管道漏」贴的标签；且③❶ 说是 <code>an aging reactor</code></td></tr>'
     +'<tr><td>C financial goals</td><td>原文零同根词（financ／money／profit／cost／goal 全为 0）</td></tr>'
     +'<tr><td>D business vision</td><td>④❶ <code>Either … or it simply didn&#39;t foresee…</code> 的一支——猜测当事实</td></tr></table>',
 traps:['<b>「原文有没有这个词」在这种题里几乎全部失灵</b>：四个类别名原文一个都没原样出现，唯一有原文同根定性词撑腰的就是正解。',
        '<b>类别名概括题是干扰项唯一可以「凭空」的题型</b>：2012·T2·28C 是「无原文外干扰项」连续九篇之后第一个找不到任何同根词的干扰项——细节题、观点题、推断题的干扰项仍然都有词源。',
        '<b>与 R37（数字推不出评价）、R88（行为推不出人品）同族</b>：三张卡都说「别替作者往上多走一步」——R37 管数字 → 评价，R88 管行为 → 人品，R118 管事实 → 类别。',
        '<b>2015·T4·39</b>：两张词单一经济一道德，作者用 have mattered／degraded 排了序——类别名取 values、方向取 distorted；wealth、lifestyle、moral code 都是替事实另贴的标签。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col3',label:'2012·T2 · 02+++ 专栏（作者的归类 vs 你的标签）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q28',label:'2012·T2·28（B 替事实贴标签 · D 猜测当事实）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q39',label:'2015·T4·39（上位名 values ＋ 方向 distorted）'}]},

{id:'R119', tier:'🔴', qt:'作者观点题 · 段落收尾出现让步 ＋ 虚拟语气', title:'让步 ＋ 倒装虚拟收段：Certainly A. But had X done Y, that debate would be beside the point——A 被判为跑题，真论点藏在 if 条件里',
 trig:['段末出现 Certainly／Admittedly／To be sure ＋ 逗号','紧跟 But had X done…, … would be beside the point／irrelevant／moot','题干写 In the author&#39;s view，而定位句的说话人是 scholars／experts say'],
 flow:'① <b>还原虚拟</b>：<code>had X done Y</code> ＝ if X had done Y，与过去事实相反 ⟹ <b>事实是 X 没做 Y——这就是作者的真论点</b>；<br>'
     +'② <b>让步句里的话题（A）被判为「跑题」</b>，不可能是「此案要检验的东西」「作者最关心的问题」；<br>'
     +'③ <b>虚拟句条件里的话题（Y）早已定案</b>，也不需要被「检验」；<br>'
     +'④ 题干写 author&#39;s view、原文是别人说的：<b>看作者转述之后有没有 but 反驳这句话本身</b>——没驳，就可作作者之见。',
 tmpl:'<table class="tk"><tr><th>2012 T2 ⑤段</th><th>题目怎么用</th></tr>'
     +'<tr><td>❷ <code>legal scholars say the Vermont case will offer a … test of how far those powers extend</code></td><td><b>29D 正源</b>（作者未驳）</td></tr>'
     +'<tr><td>❸ <code>Certainly, there are valid concerns about the patchwork regulations</code></td><td>让步掉的话题 ⟹ 29B</td></tr>'
     +'<tr><td>❹ <code>But had Entergy kept its word, that debate would be beside the point</code></td><td>条件里的话题 ⟹ 29A</td></tr></table>',
 traps:['<b>29B 是作者亲手推开的争论</b>：原文还是「对补丁法规的担忧」（concerns about），选项改成「补丁法规的性质」（the nature of），担忧的对象被偷换成检验的对象。',
        '<b>29A 取自虚拟句条件</b>，且带 all its promises 扩大范围（⟹ R24）。',
        '<b>转述 ≠ 靶子，看后面跟的是沉默还是反驳</b>：本篇的 But 反驳的是 patchwork 那场争论，不是学者；黄皮书原话「作者的观点与法律学者一致」。对照 R97／R58：转述的若是靶子，就不能当作者观点。',
        '<b>错综时间虚拟</b>：条件是过去（had kept），主句用 would be（现在）——翻译要译出两个时间：「假如当初……，现在也就……」。',
        '<b>2012·T4 首尾成对</b>：本篇是篇首虚拟 If Jimmy Hoffa were alive today, he would probably represent civil servants——真趋势藏在 would 后面（⟹ R126）；本卡管段尾虚拟，真论点藏在 if 条件里。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col4',label:'2012·T2 · 02++++ 专栏（让步 ＋ 倒装虚拟）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q29',label:'2012·T2·29（A 取条件、B 取让步、C 串说话人）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'col1',label:'2012·T4 · 02+ 专栏（篇首虚拟）'}]},

{id:'R120', tier:'🟡', qt:'词义推断题（被考词在段尾，下一段首句是改写）', title:'词义题先往下读一句：段首 Instead／In other words 引出的，就是被考词的白话版——逐成分对齐',
 trig:['被考词在某段末句','下一段以 Instead／In other words／That is／Put simply／In short 开头','被考词所在句里有作者的评价词（justified／desperate／stunning）'],
 flow:'① <b>被考词在段尾时，先读下一段首句</b>——以 Instead／In other words 开头的，几乎一定是上文的换说法；<br>'
     +'② <b>把两句抄成上下两行，逐成分对齐</b>（形容词对形容词、名词对名词、动词对动词）；<br>'
     +'③ <b>用同句的评价词核极性</b>（justified outrage ⟹ 对方干了坏事）；<br>'
     +'④ 剩下的近义项用<b>施受</b>判：情绪／评价类动词先问「是施动方做的还是受害方做的」。',
 tmpl:'<table class="tk"><tr><th>①❷ 被考词句</th><th>②❶ 白话版</th></tr>'
     +'<tr><td><code>longstanding</code></td><td><code>had long</code></td></tr>'
     +'<tr><td><code>commitment</code></td><td><code>promised</code></td></tr>'
     +'<tr><td><code><b>reneging on</b></code></td><td><code>done precisely what it … promised it would <b>not</b></code> ⟹ C dishonoring</td></tr></table>',
 traps:['<b>段首 Instead ＝「本该 A，却 B」</b>：A 是上一段末的 abide by（遵守），B 是冒号后的 challenge the constitutionality（告它违宪）——「遵守」的反面落地，被考词方向再无疑问。',
        '<b>26A condemning 错在施受</b>：谴责、愤怒的是佛蒙特（outrage in Vermont），不是公司；且「谴责自己许下的承诺」逻辑不通。',
        '<b>与 R10、R73、R90 的分工</b>：R10 在同一句里找注解，R73 是完形的定义—改写对齐，R90 看这句话在段里的角色；<b>R120 专治注解在下一段首句的情形</b>——社论最常见的写法：第一段下判决，第二段说他到底干了什么。',
        '<b>「公理 ＋ except」式反讽开头</b>（A deal is a deal—except, apparently, when X is involved）已把全篇极性写死：后文任何与「守约」有关的词，方向都朝「违约」。',
        '<b>2015·T3·32</b>：被考的 flagged up for additional scrutiny，白话版在隔了四段的⑥❸ identify ‘the papers that need scrutiny’——靠复现的 scrutiny 搜到（见 <a href="#R187">R187</a>）。',
        '<b>2016·T4·38</b>：legacy product 在⑤❼ 抛出、本段不解释；⑥❶ 句中插入 the idea goes 开始解释，⑥❹ <code>In other words, … make it for the people who are already obsessed with it</code> 是白话版 ⟹ 38B is meant for the most loyal customers。本卡从段首扩到「隔一段的 In other words」。',
        '<b>2018·T2·27 补一个 indeed 变体</b>：白话版不一定以 Instead／In other words 开头——下一段首句 <code>are indeed becoming more skillful</code> 用 indeed 证实上文的 may be starting to beef up，skillful 与 skills 同根（原刊作 adept，命题人改的）⟹ sharpen（<a href="#R239">R239</a>）。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col5',label:'2012·T2 · 02+++++ 专栏（逐成分对齐 ＋ 十五个干扰项总账）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q26',label:'2012·T2·26（Instead 引出白话版 · A 施受颠倒）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'s15',label:'2015·T3 · 长难句 s15（末段白话版反证 32）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q38',label:'2016·T4·38（In other words 给 legacy product 的白话版）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q27',label:'2018·T2·27（下一段首句 are indeed becoming more skillful ＝ beef up 的白话版）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'q29',label:'2019·T2·29（被考词在全文最后一句，只能往上拆 this）'}]},

{id:'R121', tier:'🔴', qt:'推理引申题 · 特征题 · 概括题（四个选项各带一个修饰语）', title:'先找段落的对立轴：选项的修饰语必须站在同一根轴的正确一侧——中心词同义替换对了，只说明你找对了句子',
 trig:['段落里有成对的斜体、from A to B、A becomes B、not A but B、individual ↔ community 这类两端','某个选项的中心词恰好是原文关键词的同义替换，却换了修饰语','四个选项的修饰语（形容词）各不相同：shared／strict／individual／persistent'],
 flow:'① <b>读段落时先找「两端」</b>，在卷边画一根箭头（本篇：<b>个 → 群</b>，me, here, now → anyone, anywhere, anytime）；<br>'
     +'② 做题时把每个选项的<b>修饰语单独拿出来</b>，问它<b>在不在这根轴上、在哪一侧</b>：终点一侧 ✔ · 起点一侧 ✘（反向）· 不在轴上 ✘（换轴）；<br>'
     +'③ <b>中心词是同义替换的选项，还要核两件事</b>：原句的「灵魂修饰语」还在不在？新加的修饰语站在哪根轴上？<br>'
     +'④ 常见配置：<b>一项在终点、一项在起点、两项不在轴上</b>——起点那个是「反向」，不在轴上的是「换轴／跨段借轴」。',
 tmpl:'<table class="tk"><tr><th>32 题选项</th><th>站在哪根轴 · 哪一侧</th></tr>'
     +'<tr><td><b>B shared efforts</b> ✔</td><td>个人 ↔ 集体 · 集体一侧</td></tr>'
     +'<tr><td>C individual wisdom</td><td>个人 ↔ 集体 · <b>个人一侧</b>（反向）</td></tr>'
     +'<tr><td>A strict inspection</td><td><b>宽 ↔ 严</b>（原文没有这根轴）</td></tr>'
     +'<tr><td>D persistent innovation</td><td>旧 ↔ 新（在④段，跨段借轴）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T3·32：②❸ <code>it takes <b>collective</b> scrutiny and acceptance to transform…</code> ＋ ②❹ <code>the <b>individual</b> researcher’s <i>me, here, now</i> becomes the <b>community’s</b> <i>anyone, anywhere, anytime</i></code>。<b>A 的 inspection 恰是 scrutiny 的同义词</b>——黄皮书：句子强调审查的<b>主体范围</b>（个体→集体），而非审查的<b>严格程度</b>（宽松→严格）。</p>',
 traps:['<b>R1 的补丁</b>：「原词复现是陷阱、同义替换是答案」只说对了一半——<b>同义替换是必要条件，不是充分条件</b>。32A 的中心词换得一字不差，丢的是修饰语。',
        '<b>一个错项常有两处病</b>：32A 既换轴（strict），又是半截（scrutiny and acceptance 只截一半，⟹ R48）。先画轴，一处就够排掉它。',
        '<b>斜体成对出现 ＝ 作者亲手画的轴</b>（⟹ R68）；本篇 me/here/now ↔ anyone/anywhere/anytime 三对一一对位。',
        '<b>与 R74 的关系</b>：R74 教你按极性分组，R121 告诉你「按哪根轴分」——先找到轴，分组才有依据。',
        '<b>2012·T4·38 第二例（相邻两篇连用）</b>：④段的轴是「直接（工资）↔ 间接（福利）」，B indirectly 站间接一侧；C excessively 换到程度轴且方向反、D fairly 换到公平轴、A illegally 换到原文没有的合法性轴（⟹ R128）。',
        '<b>2018·T2 两例</b>：28C social responsibility——原文两次都是 personal responsibility（③❹、⑤❻），个人 ↔ 社会换了轴；30C Mutual Trust——原文是 distributed trust（分散到多个来源），且文中上升的是 distrust。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col1',label:'2012·T3 · 02+ 专栏（对立轴四选项站位表）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q32',label:'2012·T3·32（A 中心词同义、轴换了）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q38',label:'2012·T4·38（直接 ↔ 间接轴）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q28',label:'2018·T2·28C（personal → social 换轴）· 30C（distributed → mutual）'}]},

{id:'R122', tier:'🟡', qt:'通用 · 类比段落（细节题、推断题的铺垫）', title:'类比出场两次：Similar to X 给相同点，unlike (with) X 给不同点——不同点才是作者的新信息，题就压在它上面',
 trig:['同一个类比物在相邻两段各出现一次','一次带 Similar to／Like／Just as，一次带 Unlike／But unlike with／In contrast to','不同点那句紧挨着一串细节或一道题的定位句'],
 flow:'① 类比第一次出场（Similar to）⟹ <b>相同点，用来让你接受这个类比</b>，信息量低，读过即可；<br>'
     +'② 类比第二次出场（unlike with）⟹ <b>不同点，用来说出类比说不出的东西</b>——在旁边画星；<br>'
     +'③ <b>不同点常是下一道题的预告</b>：先说「由谁掌控／结果如何」，再展开细节。做题时回到这句，答案的主体往往已经点名。',
 tmpl:'<table class="tk"><tr><th>出场</th><th>原文 · 作用</th></tr>'
     +'<tr><td>②❷ 相同点</td><td><code><b>Similar to</b> newly staked mining claims, they are full of potential.</code>（都充满潜力）</td></tr>'
     +'<tr><td>③❷ 不同点 ⭐</td><td><code>But, <b>unlike with</b> mining claims, <b>the community takes control of what happens next</b>.</code> ⟹ 33B 的主体已点名</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T3·33：<b>采矿权立了桩归你掌控，发现声明公开后由共同体掌控</b>——作者在列出四环之前先说了掌控者，33 题答案 B examined by the scientific community 就是这句的兑现（⟹ R123）。</p>',
 traps:['<b>别把相同点当重点</b>：「充满潜力」谁都想得到，命题人不会在这里下刀。',
        '<b>claim 的双关是类比的铰链</b>：discovery claim（发现声明）↔ mining claim（采矿权）——一个词两个义项，作者借词义搭桥。',
        '<b>与 R2、R49 的分工</b>：R2 把比喻翻成直义，R49 找比喻链的接口词；<b>R122 管「同一个类比出场两次时读哪一次」</b>。',
        '<b>2015·T2·28</b>：驳论版——④❶ 加州 <code>is similar to</code> 钱包、④❸ 作者 <code>But … is more like</code> 家；第二个比方用比较级否定第一个，题目问「作者认为像什么」取第二个（见 <a href="#R183">R183</a>）。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col2',label:'2012·T3 · 02++ 专栏第一步（类比两次出场）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q33',label:'2012·T3·33（不同点预告了答案的主体）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q28',label:'2015·T2·28（similar to → more like）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q34',label:'2018·T3·34B（big data ↔ big pharma 类比的喻体被当成担忧）'}]},

{id:'R123', tier:'🔴', qt:'事实细节题 · 条件题（becomes X after it…／requires…／only when…）', title:'流程链的条件题：每一环都能单独造一个干扰项，正确项是装得下所有环的上位主体；末端那一环常是结果不是条件',
 trig:['原文用分号、first…then…finally、一串主语各带一个动作写出一个过程','其后紧跟一句总括（As X works its way through…／Through this process…）','题干问 becomes credible／accepted／mature after it…（形似时间、实为条件）'],
 flow:'① <b>分号串先编号</b>（本篇四环：研究者做出 → 编辑审稿人把关 → 其他科学家使用 → 公众接收）；<br>'
     +'② <b>找总括句，在旁边写一个「全」字</b>（③❹ <code>As a discovery claim works its way through the community…</code>）；<br>'
     +'③ 判题干问的是<b>条件</b>还是<b>时间</b>：问条件 ⟹ 取总括句；<b>每一环单独拿出来都只是「条件之一」，末端那一环往往是「结果」</b>；<br>'
     +'④ <b>比选项之间的包含关系</b>：一个选项的主体能装下其他选项的主体（编辑、审稿人、同行、公众都属于 the scientific community），它就是链。',
 tmpl:'<table class="tk"><tr><th>33 题选项</th><th>链上的位置 · 病名</th></tr>'
     +'<tr><td>C editors and reviewers</td><td>第②环 · 条件之一当充分条件（把关 ≠ 认可）</td></tr>'
     +'<tr><td>D peer scientists</td><td>第③环 · 条件之一（use → quote，另加 frequently）</td></tr>'
     +'<tr><td>A the general public</td><td>第④环 · <b>结果当条件</b> ＋ 公开当可信</td></tr>'
     +'<tr><td><b>B the scientific community</b> ✔</td><td><b>整条链</b>（③❹ through the community）</td></tr></table>'
     +'<p style="margin-top:8px">⚠️ <b>同根陷阱 credit ≠ credibility</b>：③❶ <code>Once a discovery claim becomes public, the discoverer receives intellectual <b>credit</b></code>——一公开，<b>发现者</b>就得到荣誉；<b>credibility（可信度）属于声明本身，要走完整条链</b>。33A 借的正是「公开」这层皮。</p>',
 traps:['<b>黄皮书的条件题两种造法</b>：① 结果偷换为条件；② 条件之一当作充分条件。33 题两种都有（A 是①，C／D 是②）。',
        '<b>括号是包含关系的铁证</b>：<code>the public (including other scientists)</code>——连公众都包括科学家，四环主体全落在 community 里。',
        '<b>「把关人」不等于「认可者」</b>：gatekeepers 控制发表，结果也可能是拒稿（2008·T2 ①段 accept … or decline）。',
        '<b>与 R46、R89、R31 的分工</b>：R46 问整体还是其中一类 · R89 一串同类取公因式 · R31 新题型的流程贴时间线 · <b>R123 管阅读条件题里的链与环</b>——四张卡同一件事：先认层级，再比内容。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col2',label:'2012·T3 · 02++ 专栏第二步（四环一链 ＋ credit ≠ credibility）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q33',label:'2012·T3·33（A 结果当条件 · C／D 条件之一）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'col2',label:'2015·T3 · 02++ 专栏（标稿 → 找人 → 审稿的流程链）'}]},

{id:'R124', tier:'🔴', qt:'人物观点题（X would most likely agree that…）· 名言／警句的理解', title:'对称句：两半同构时，上下对齐、只看变了的那一格；人物观点题只用引号里的话，引语后作者的 But 不算人物的',
 trig:['题干点名一个人物（would most likely agree／believes／According to X）','引语是对称句：A what everybody B and C what nobody D／not A but B／the more…the more…','引语后紧跟 But／However／Yet 开头的作者评论'],
 flow:'① <b>先把人物原话用括号括起来</b>，括号外的一律算「别人的话」；<br>'
     +'② <b>引语若是对称句，把两半上下对齐</b>，标出不变的格与变了的格——<b>论点只在变格里</b>；<br>'
     +'③ <b>把变格抽象成一句话</b>（seeing→thinking、everybody→nobody ⟹ 差别在想，而且要想得与众不同）；<br>'
     +'④ 正确项常是变格的<b>抽象化</b>（a critical mind），不是逐词复述——别因为「critical 原文没有」就排掉它；<b>三个干扰项若都取自引号之外，这把尺子就验证过了</b>。',
 tmpl:'<table class="tk"><tr><th>格</th><th>前半 → 后半</th></tr>'
     +'<tr><td>动作 ⭐</td><td><code>seeing</code> → <code><b>thinking</b></code>（变）</td></tr>'
     +'<tr><td>谁 ⭐</td><td><code>everybody</code> → <code><b>nobody</b></code>（变）</td></tr>'
     +'<tr><td>结构</td><td><code>V-ing what X has V-ed</code>（不变）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T3·34：④❼ Szent-Györgyi 把发现描述为 <code>“seeing what everybody has seen and thinking what nobody has thought”</code> ⟹ <b>D scientific work calls for a critical mind</b>；旁证④❷ <code>focus on some aspect of prevailing knowledge that is viewed as incomplete or incorrect</code>。<b>A（反用④❺ open to challenge）、B（挪用④❺ future researchers）、C（改写④❾ accepted and appreciated）全出在引号之外。</b></p>',
 traps:['<b>④❽ 的 But 是作者的冷水</b>：<code>But thinking what nobody else has thought … may not change their views</code>——它服务于作者的「悖论二」，不是 Szent-Györgyi 的看法。',
        '<b>作者还悄悄加了一个 else</b>（nobody → nobody else）：焦点从「思想的新颖」挪到「你与他人的隔阂」——正是作者要接的话。',
        '<b>与 R58、R69、R4 的分工</b>：R4 先分清谁在说话 · R69 意图归谁就只到谁说的那句里找 · R58 引语里的态度分两层 · <b>R124 管「那句话本身怎么读」</b>——R69 帮你找到它，R124 帮你读懂它。',
        '<b>2015·T3·33</b>：帕尔米贾尼是 SBoRE 自己的成员，夸自家很自然——但题目问「他认为」，只认他嘴里的 model their approach after Science ⟹ 33D。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col3',label:'2012·T3 · 02+++ 专栏（对称句变格表 ＋ 引号内外）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q34',label:'2012·T3·34（三个干扰项全在引号之外）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q33',label:'2015·T3·33（圈内人的话，题目只问他怎么说）'}]},

{id:'R125', tier:'🔴', qt:'主旨题 · 标题题', title:'标题题：先用前几题的定位段做覆盖表——三个干扰项常各占一段；两项共享话题词时，拆开 X of Y 比中心词 X 的复现',
 trig:['五道题一题一段、严格同序（前四题已替你读完每段主旨）','标题选项里出现前面某题正确项的原词（35B Collective Scrutiny ＝ 32 题答案）','两个选项共享同一个话题词（Evolution of Credibility ／ Challenge to Credibility）'],
 flow:'① <b>把前四题定位段的主旨写成一栏</b>（同序原则让这一步几乎免费）；<br>'
     +'② <b>拿每个标题选项去盖这一栏</b>：只盖住一段的出局，拼了两段的警惕（⟹ R39）；<br>'
     +'③ 剩下两项若共享话题词，<b>拆开 X of Y：Y 是话题，X 是中心词——拿 X 去数全文的同义复现</b>，多的赢；<br>'
     +'④ 最后一查：<b>中心词与原文的态度同向吗？</b>（Challenge to Credibility 把挑战当成可信度的敌人，而⑤❷ 里挑战是共同推理的一个动作）。',
 tmpl:'<table class="tk"><tr><th>选项</th><th>罩住哪一段</th></tr>'
     +'<tr><td>A Novelty as an Engine…</td><td>只罩④（且 novelty 在原文是招致怀疑的阻力）</td></tr>'
     +'<tr><td>B Collective Scrutiny…</td><td>只罩②（<b>＝32 题正确项原词</b>）</td></tr>'
     +'<tr><td>D Challenge … at the Gate…</td><td>③ 的 gatekeepers ＋ ④ 的 challenge 拼接</td></tr>'
     +'<tr><td><b>C Evolution of Credibility…</b> ✔</td><td>①–⑤ 全罩（≈原文标题）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T3·35：C 的中心词 Evolution 在全文约有 10 处同义复现（process ×4 · transform ×2 · becomes · mature · works its way through · In the end），D 的中心词 Challenge 只在④❺ 一次。<b>原文标题就是 The Evolution of Credibility</b>。</p>',
 traps:['<b>前题答案回收</b>：32 题刚确认过的正确项原词 collective scrutiny，被整个搬来做标题干扰项——你对它越熟，越容易觉得它是全文主旨。<b>规矩：标题选项里出现前题正确项原词，先问它是不是只属于那一段。</b>',
        '<b>多段拼接最像「全面」</b>：35D 四个词三个出处（Gate③ · Challenge④ · Credibility／Science 全文），拼起来却是原文没说过的意思；at the Gate 还把挑战的位置从发表之后挪到了发表之前。',
        '<b>别给作者安态度</b>：黄皮书排 35A 时称作者对「重新轻旧」持否定态度——原文④段没有贬义词（Not surprisingly 顺承、paradox 中性）；A 被排的理由是覆盖不足 ＋ 方向拧了，不需要这条。',
        '<b>与 R11、R40、R92 的分工</b>：R11 四查（对象／关系／程度／立场）· R40 覆盖度 → 褒贬度 → 原词义项 · R92 主体 ＋ 文体 · <b>R125 补两个具体动作：前题定位段覆盖表 ＋ X of Y 比中心词</b>。',
        '<b>2015·T3·35</b>：新闻稿的标题干扰项各从一个配角身上取词——35B statisticians（⑤ 约安尼季斯）、35C editors ＋ data analysis（②①）、35D statisticians（②❹）；正确项 A 取导语的主体 ＋ 动作 ＋ 潮流（见 <a href="#R186">R186</a>）。',
        '<b>2016·T1·25</b>：覆盖表 21①／22②／23⑤／24⑥ ⟹ 标题要同时装下法国（立法）与丹麦（自律）；A、D 共享 the Fashion Industry，<b>拆开看区别全在 ’s Body Ideals</b>（⟹ R200）；B 只装前四段。',
        '<b>2017·T1·25</b>：覆盖表 21②／22③④／23⑤／24⑥——前四题两题在问题线、两题在方案线；A 罩问题线且⑦❶ 仍在说长队，B／D 只罩⑤–⑦，C 是拼接（⟹ <a href="#R218">R218</a>）。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col4',label:'2012·T3 · 02++++ 专栏（五段覆盖表 ＋ 中心词复现）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q35',label:'2012·T3·35（B 前题答案回收 · D 多段拼接）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q25',label:'2013·T1·25（三个干扰项各占一块：A ④❸＋⑥❸ · B ①＋②❶左端 · D ②❹插入语）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q40',label:'2014·T4·40（覆盖表：B 取①❶／⑥❶ 的褒 · C 取④❶ 的双关 · D 只罩⑤；A 装下④❶ 论点 ＋ 首尾两段）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q25',label:'2015·T1·25（覆盖表：A 只装①之辱 · B／D 只装⑦查尔斯；C 装下①❹ 设问范围 ＋ ⑥ example）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q35',label:'2015·T3·35（三个干扰项各取一个配角的高频词）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q25',label:'2016·T1·25（原标题＝A；D 砍掉 Body Ideals）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q25',label:'2017·T1·25（覆盖表：问题线与方案线）'}]},

{id:'R126', tier:'🟡', qt:'首段推断题 · 细节题（首句是虚拟语气）', title:'开篇虚拟句＝把一个趋势包装成假设：解码成「今天 X 那一行的重心已经转到 Y」；虚拟当事实、当年当如今都是错',
 trig:['首句是 If X were alive today, he would…／Were X to…／Had you asked … in 1960, they would have said…','虚拟句后面紧跟几组「当年 vs 如今」的数据','选项里出现 used to／still／has been 这类把假设或过去写成事实、现在的动词'],
 flow:'① <b>先认出是虚拟</b>：从句 were／had done，主句 would do／would have done ⟹ 与事实相反；<br>'
     +'② <b>找虚拟句里「换了的那个成分」</b>：本篇是 represent 的宾语——当年他代表卡车司机（私营），「今天」他会代表公务员（公共）；<br>'
     +'③ <b>用紧跟的数据验证</b>，再写成一句陈述：「工会的重心已从私营部门转到公共部门」；<br>'
     +'④ <b>读不懂就先跳过</b>，读完后面的具体描述再回头解码（黄皮书的建议与此一致）。',
 tmpl:'<table class="tk"><tr><th>36 题选项</th><th>把虚拟句读成了什么</th></tr>'
     +'<tr><td><b>C enlarged their public-sector membership</b> ✔</td><td>解码后的趋势（1/10→36% · 反超私营 · 英国过半 vs 15%）</td></tr>'
     +'<tr><td>B Hoffa used to work as a civil servant</td><td><b>虚拟当事实</b>，且 represent → work as</td></tr>'
     +'<tr><td>A Teamsters still have a large body of members</td><td>in their prime <b>in 1960</b> → <b>still</b></td></tr>'
     +'<tr><td>D the government has improved its relationship…</td><td>定语 government 升成主语 ＋ 凭空关系</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T4·36：①❶ <code>If the trade unionist Jimmy Hoffa <b>were</b> alive today, he <b>would</b> probably <b>represent</b> civil servants.</code> 霍法 1975 年失踪，一辈子代表的是私营部门的卡车司机。</p>',
 traps:['<b>三个干扰项都长在「语气与时间」上，没有一个在内容上编造</b>：B 动语气（虚拟→事实）· A 动时间（1960→现在）· D 动语法角色（定语→主语）。<b>首段出现虚拟或过去的时间状语，就给每个选项标两样：真的还是假设的？当时还是现在？</b>',
        '<b>represent ≠ be</b>：工会领袖 represent 工人、律师 represent 当事人——代表者本人不必是被代表的那一类人。',
        '<b>与 R119 首尾成对</b>：R119 是段<b>尾</b>虚拟（真论点藏在 if 条件里），R126 是篇<b>首</b>虚拟（真趋势藏在 would 后面）；2012 年 T2、T4 各用一次。另与 R61（先给全文时态定调）同族。'],
 refs:[{p:'2012_T4_公共部门工会的膨胀.html',q:'col1',label:'2012·T4 · 02+ 专栏（虚拟句解码四步）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q36',label:'2012·T4·36（B 虚拟当事实 · A 当年当如今）'}]},

{id:'R127', tier:'🔴', qt:'事实细节题（Which of the following is true of Paragraph X?）· 定位段是列举段', title:'列举段的是非题：四个选项各认领一条，比的是谓语（关系、情态、方向），不是名词；原文给比例、选项写条件的当场判死',
 trig:['题干只给段号，不给关键词：true of Paragraph X／Which of the following is true','定位段是 First／Second／Third、One reason…Another…、分号串','选项的名词几乎都是原词，差别只在动词、情态词或关系词'],
 flow:'① <b>在卷边给列举的每一条编号</b>；<br>'
     +'② <b>给四个选项标「认领第几条」</b>——通常一条两项、其余各一（本篇 First 两项：一真一假）；<br>'
     +'③ <b>回到那一条，只比谓语的三样</b>：关系（associated with ↔ fighting against）· 情态（mostly ↔ required）· 方向（无后果 ↔ 谨慎）；<br>'
     +'④ 名词几乎都是原词，<b>比名词没用</b>。',
 tmpl:'<table class="tk"><tr><th>37 题选项 · 认领</th><th>谓语被动了什么</th></tr>'
     +'<tr><td><b>D seldom get in trouble</b> ✔ · First</td><td>同义改写 without suffering much in the way of consequences</td></tr>'
     +'<tr><td>A prudent in taking actions · First</td><td><b>行为→性格，且翻反</b>（无后果 ⟹ 敢于停摆）</td></tr>'
     +'<tr><td>B Education is required · Second</td><td><b>描述→必要条件</b>（mostly · a quarter）</td></tr>'
     +'<tr><td>C Labor Party … fighting against · Third</td><td><b>关系换成反义</b>（associated with；fought 借自⑤❷）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T4·37：②❹ <code><b>A quarter</b> of America’s public-sector workers have a university degree.</code>——若学历是入会条件，这个比例就该是 100%。<b>一个比例数字判死一个「必要条件」。</b></p>',
 traps:['<b>原文给比例、选项写条件，当场判死</b>：mostly／most／many／a quarter／more than half／tend to ↔ required／must／all／only／always——一个是「多少人这样」，一个是「必须这样」（⟹ R8 程度升级、R84 反向加限定）。',
        '<b>主语滑动</b>：②❸ 的 they 是工会，❹ 句换成了雇员——作者拿雇员的学历给工会的素质作证，37B 顺手把它粘成了「入会资格」。',
        '<b>跨段借词</b>：37C 的 fighting against 取自⑤❷ teachers’ unions have fought against…——同一个动词，主语宾语全换（⟹ R39）。',
        '<b>与老卡的分工</b>：R88 管「行为 ≠ 解释」（A 的病）· R84 管限定词（B 的病）· <b>R127 管「先分配、再逐条比谓语」这个顺序</b>，把一道看似要通读全段的题变成四次定点比对。'],
 refs:[{p:'2012_T4_公共部门工会的膨胀.html',q:'col2',label:'2012·T4 · 02++ 专栏（认领表 ＋ 比例判死条件）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q37',label:'2012·T4·37（A 行为翻性格 · B 描述升条件 · C 关系换反义）'}]},

{id:'R128', tier:'🔴', qt:'细节题 · 词义推断（定位句里有带引号的生词）· 四个选项同构', title:'引号生词不必认识：紧跟的分词短语就是作者自带的词典；四个选项同构「副词＋分词」时，划掉相同的，只比副词站在哪根轴',
 trig:['定位句里有一个带引号的生词或行话（“backloaded”）','引号词后面紧跟逗号 ＋ -ing 分词短语、冒号、破折号、that is','四个选项结构完全相同，只有一个修饰词不同（illegally／indirectly／excessively／fairly）'],
 flow:'① <b>引号 ＝ 非常规用法</b>（R29 第四功能），作者在提醒「这个词我是借来用的」；<br>'
     +'② <b>往后找释义</b>：同句后面的分词短语（本篇 keeping … but adding …）· 冒号／破折号后 · that is／in other words 后 · 下一句句首 Instead（⟹ R120）；<br>'
     +'③ 选项同构时<b>划掉相同的部分</b>，只比那一格；<br>'
     +'④ <b>回原文找该段的对立轴</b>（让步—转折最常见：❶ 表面 → But ❷ 实质），问每个副词站在哪根轴、哪一侧（⟹ R121）。',
 tmpl:'<table class="tk"><tr><th>38 题选项</th><th>副词站在哪根轴</th></tr>'
     +'<tr><td><b>B indirectly augmented</b> ✔</td><td>直接 ↔ 间接（工资 ↔ 福利）· 间接一侧</td></tr>'
     +'<tr><td>C excessively increased</td><td>程度轴，且方向反（pay increases <b>modest</b>）</td></tr>'
     +'<tr><td>D fairly adjusted</td><td>公平轴，且褒贬反（real gains／“backloaded”／already generous）</td></tr>'
     +'<tr><td>A illegally secured</td><td>合法性轴（原文没有这根轴）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T4·38：④❸ <code>Politicians have repeatedly “backloaded” public-sector pay deals, <b>keeping the pay increases modest but adding to holidays and especially pensions</b> that are already generous.</code></p>',
 traps:['<b>唯一有原文词根的选项偏偏是错的</b>：C 的 increased 对应 pay increases，却配了一个方向相反的副词 excessively（原文 modest）——只找「原文有的词」会第一眼被它吸住（⟹ R1）。',
        '<b>正确项也可以零词源</b>：indirectly augmented 两个词原文都没有——它是概括不是复现。「原文有没有这个词」只能定位、不能判分（2011 T2 的老结论，本篇又验证一次）。',
        '<b>作者不满的是「方式」不是「幅度」</b>：already generous 说的是养老金的水平，不是收入的涨幅——别据此选 excessively。',
        '<b>与 R120 的分工</b>：R120 管「下一句」给释义，R128 管「同一句后半」给释义。'],
 refs:[{p:'2012_T4_公共部门工会的膨胀.html',q:'col3',label:'2012·T4 · 02+++ 专栏（引号词释义 ＋ 副词站轴表）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q38',label:'2012·T4·38（C 唯一有词根却是错的）'}]},

{id:'R129', tier:'🔴', qt:'例证目的题（The example of X shows that…）', title:'夹心例子：上一片是论点，下一片的 But 句是干扰项工厂；论点可能在没被点名的上一段；再拿例子本身反证选项',
 trig:['例子前一句是概括句（politicians have begun to clamp down）','例子后一句以 But／However／Yet 开头，换了话题','题目按段排，而例子的上一段没有被任何题点名'],
 flow:'① <b>看例子的下一句</b>：是 But／However 就画一道横线，<b>横线以下的词一律不用</b>（⟹ R16）；<br>'
     +'② <b>往上找论点</b>：上一句 → 上一段首句；<b>没被点名的段往往是别的题的论点仓库</b>；<br>'
     +'③ <b>拿例子本身反证选项</b>：与例子里的事实冲突的直接排；<br>'
     +'④ 正确项常带软化词（may be／can be）——从一个例子推一般结论，命题人不敢写死（⟹ R95）。',
 tmpl:'<table class="tk"><tr><th>39 题选项</th><th>原料从哪来 · 判定</th></tr>'
     +'<tr><td><b>C may be a barrier to reforms</b> ✔</td><td>上片 ⑥❶ clamp down ＋ ⑤❶ Reform has been vigorously opposed</td></tr>'
     +'<tr><td>A often run against the current system</td><td><b>下片</b> ⑥❸ But … the current system ＋ 立场反 ＋ often</td></tr>'
     +'<tr><td>B change people’s political attitudes</td><td>馅里的 rallied supporters：召集 ≠ 改变</td></tr>'
     +'<tr><td>D dominant in the government</td><td>②❺ dominate left-of-centre politics ＋ 范围放大 ＋ <b>被馅反证</b></td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T4·39：⑥❷ <code>the unions have rallied thousands of supporters against Scott Walker, the <b>hardline</b> Republican governor</code>——被强硬州长压制、只能上街对抗的一方，谈不上「在政府中占主导」。<b>39C 几乎就是原刊副标题 The biggest barrier to public-sector reform is the unions。</b></p>',
 traps:['<b>空段不空</b>：本篇 7 段 5 题，③⑤ 两段没有被点名，但⑤❶ 是 39 的论点句，③段的 fearsome／patrolled 给 38、40 定了方向。',
        '<b>一个例子能证明什么常常说不准，但它不能证明什么一眼就能看出</b>：先排与例子事实冲突的，再在剩下的里找服务上一片论点的。',
        '<b>立场反最隐蔽</b>：39A 说工会「反对现行体制」，可工会反对的是要改变体制的州长——反对改变的人是现行体制的维护者。',
        '<b>与 R41 的分工</b>：R41 说「答案在例子服务的那句论点里」；R129 补两件事——论点可能在上一段，以及下一片 But 句是干扰项的原料地。'],
 refs:[{p:'2012_T4_公共部门工会的膨胀.html',q:'col4',label:'2012·T4 · 02++++ 专栏（夹心四片 ＋ 原料产地表）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q39',label:'2012·T4·39（A 取自 But 下片 · D 被例子反证）'}]},

{id:'R130', tier:'🔴', qt:'人物观点／态度题 · 作者态度题（作者不用第一人称时）', title:'转述动词测距离：points out／notes／shows 是认同型（作者借他的嘴说自己的话，可拿全文立场去验）；claims／alleges／insists 是保留型（常是作者的靶子）',
 trig:['题干问某位专家、学者的态度或观点','引出他的动词是 points out／notes／shows／finds／reveals，或 claims／alleges／insists','作者全文没有 I／we，却有明显的评价词'],
 flow:'① <b>先圈引出人物的那个动词</b>；<br>'
     +'② <b>认同型</b>（叙实动词：说「他指出 X」就预设了 X 为真）⟹ 人物观点 ≈ 作者观点，<b>可用作者的评价词、收尾句去验同向</b>；<br>'
     +'③ <b>中性</b>（says／reports／suggests）⟹ 只取他自己那句；<b>保留型</b> ⟹ 人物观点常是作者要驳的靶子（⟹ R66 折扣词族）；<br>'
     +'④ 人物的话里有 <b>A but B</b>，态度只看 B（⟹ R72）。',
 tmpl:'<table class="tk"><tr><th>40 题选项</th><th>从哪造出来的</th></tr>'
     +'<tr><td><b>A disapproval</b> ✔</td><td>⑦❶ but is bad for high achievers ＋ ⑦❸ 作者 may be a much bigger problem</td></tr>'
     +'<tr><td>B appreciation</td><td>只取让步前半的 suit</td></tr>'
     +'<tr><td>C tolerance</td><td>把 A but B 读成「利弊兼有」的折中</td></tr>'
     +'<tr><td>D indifference</td><td>零词源；他专门「指出」问题，谈不上漠不关心</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 2012·T4：<b>两位专家都用 points out that 引出</b>——③❷ Baldassare（预算被工会 patrolled）、⑦❶ Donahue（体制 suit those who want to stay put but is bad for high achievers）；<b>题干干脆借了作者⑦❸ 句里的 the public-sector system 来问 Donahue——两人同向，问谁都一样</b>。</p>',
 traps:['<b>argue 要看上下文</b>：作者自己的论证也常用 argue，它本身不带距离；只把「距离信号明确」的动词当判据。',
        '<b>给 2011 T2 那条元判断补一句</b>：作者表态 ⟹ 出作者态度题；作者躲在引语后 ⟹ 改出别的题；<b>第三种：作者不用第一人称却用评价词与认同型转述表态 ⟹ 态度题问那位认同型专家</b>。',
        '<b>强度尺</b>：is bad for／may be a problem 是明确而克制的负面 ⟹ disapproval 这一档；hostility／contempt 这类重词反而要排（⟹ R12）。',
        '<b>书评里的转述标记分两类</b>（2013·T1）：<code>Cline argues／she finds／Cline believes</code> 标「书作者说」；<code>of course</code>、无标记的宣判句、归类句、格言短句是「书评人说」——末段推断题取后者（⟹ <a href="#R142">R142</a>）。',
        '<b>2014·T1</b>：②❸ <code>he claimed</code> 引出奥斯本的辩护（②❹ 帮人更快就业）⟹ 保留型，<b>23B「保护失业者」就从这句取词，错</b>；作者紧接着 <code>Help? Really?</code> 表态。与 <a href="#R162">R162</a> 连用：<b>claimed 后面是说辞，What motivated him 后面才是动机</b>。'],
 refs:[{p:'2012_T4_公共部门工会的膨胀.html',q:'col5',label:'2012·T4 · 02+++++ 专栏（转述动词三档表）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q40',label:'2012·T4·40（B 取让步前半 · C 取折中）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'col4',label:'2013·T1 · 末段说话人表'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q23',label:'2014·T1·23B（he claimed 的辩护当动机）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q29',label:'2014·T2·29A／29C（opponents insist that 的辩护层）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'col1',label:'2014·T3 · 02+ 专栏（As Nature has pointed out：认同型 ＋ 社论自引＝作者）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'col2',label:'2018·T1 · 02++ 专栏（Optimists point out：认同型 ⟹ 22B 否定过头）'}]},

{id:'R131', tier:'🔴', qt:'完形 · 社论／时评型文章（首句是「X 已成为一个重要议题」，文中有 should／must）', title:'先写下作者的「应然」一句话，再让每个语境空对轴：它把事情往作者反对的那边推，还是往回拉',
 trig:['首句是 X has become an important issue 这类议题句','文中出现 should／must／At the very least 这类建议词','语境空多、四个选项同词性，比词义比不出高下'],
 flow:'① 读完首段与建议句，<b>把作者的「应然」写成一句话</b>（2012 完形＝<b>法律应当与政治分开</b>）；<br>'
     +'② 每个语境空只问一句：<b>它顺着应然还是逆着应然</b>——逆着的是作者批评的现象（涉政行为<u>削弱</u>声誉），顺着的是作者要的（<u>受</u>约束、<u>敢</u>挫败当权者）；<br>'
     +'③ <b>找到全文唯一的让步段</b>——它是轴的另一端，<b>近义词辨析常靠它裁决</b>。',
 tmpl:'<b>2012 完形：八个语境空挂在同一根轴上（4 分）</b>'
     +'<table class="tk"><tr><th>空</th><th>原文位置</th><th>对轴怎么判</th></tr>'
     +'<tr><td>3</td><td>Yet … acted in ways that ___ the court’s reputation</td><td>逆应然（涉政）⟹ <b>weakened</b></td></tr>'
     +'<tr><td>6</td><td>should make itself ___ to the code of conduct</td><td>顺应然（受约束）⟹ <b>subject</b></td></tr>'
     +'<tr><td>8</td><td>This and other similar cases ___ the question</td><td>涉政事件挑起问题 ⟹ <b>raise</b></td></tr>'
     +'<tr><td>9</td><td>still a ___ between the court and politics</td><td>应然的名词形式 ⟹ <b>line</b>（让步段裁决，非 barrier）</td></tr>'
     +'<tr><td>12</td><td>be free to ___ those in power</td><td>独立到敢对着干 ⟹ <b>upset</b></td></tr>'
     +'<tr><td>14</td><td>set law apart … because they are so closely ___</td><td>应然的反面作原因 ⟹ <b>tied</b></td></tr>'
     +'<tr><td>16</td><td>the law it ___ is inescapably political</td><td>让步端（法律注定带政治性）⟹ <b>shapes</b></td></tr>'
     +'<tr><td>19</td><td>making themselves ___ to the code of conduct</td><td>顺应然 ⟹ <b>accountable</b></td></tr></table>'
     +'<b>⟹ 与 <a href="#R102">R102</a> 同类：先立一根轴（2011 是因果箭头，2012 是应然立场），再让空格对轴。</b>',
 traps:['<b>轴有两端，别只看一端。</b>2012 完形⑤段是全文唯一的让步：<code>Constitutional law is political</code>——作者承认法律与政治注定有往来。'
        +'<b>9 题 line 胜 barrier（屏障＝阻隔往来）、16 题 shapes 胜 excludes，都是靠这句让步定下来的</b>；只盯着「分开」这一端，barrier 看着反而更「分得开」。',
        '<b>「依附」方向的选项配错框架就自相矛盾。</b>12 题 serve／satisfy（讨好当权者）要配 have to 才通，配 <code>be free to</code> 就荒谬——谁需要「自由」才能去讨好当权者？',
        '<b>社论的褒贬极其单一</b>：凡「像政客」「涉政」「分不开」都是要纠正的，凡「独立」「公正」「受约束」都是要的。'
        +'<b>带方向的选项先问它站哪边，再比词义</b>——3 题 restored／established、6 题 resistant／immune 都是这一刀直接划掉的。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q9',label:'2012·完形·9（让步段裁决 line vs barrier）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q12',label:'2012·完形·12（free to ＋ 不敢做的事）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q14',label:'2012·完形·14（应然的反面作原因）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q16',label:'2012·完形·16（轴的让步端）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'col4',label:'2015·T2 · 02++++ 专栏（社论的应然轴：can and should → must）'}]},

{id:'R132', tier:'🔴', qt:'完形 · 社论／评论型文章的末段（对策段）', title:'问题—对策镜像：末段把前文的问题句换极性、换近义词再说一遍——两处的空互为答案，卡住就跳末段',
 trig:['末段出现 must／should，且有一句「似曾相识」的框架句','前文某段已经完整走过一遍「问题—原因—对策」','前后两句同一骨架，只有 less／more、cannot／must 这类极性词不同'],
 flow:'① <b>做到末段，先把前文的问题句逐条列出来</b>（合法性守不住 · 判决难被视为公正 · 不受守则约束）；<br>'
     +'② <b>逐条找末段的镜像</b>：同一框架句 ⟹ 两处的空<b>同义</b>；less ↔ more 这类极性翻转 ⟹ 词族相同、方向相反；<br>'
     +'③ <b>反过来用</b>：做前面的空拿不准时，先跳到末段看对策句——<b>社论的末段是一张答案提示卡</b>。',
 tmpl:'<b>2012 完形：一张表管五个空</b>'
     +'<table class="tk"><tr><th>前文（问题）</th><th>末段（对策）</th><th>空</th></tr>'
     +'<tr><td>②❹ make itself <b>6</b> to the code of conduct</td><td>⑥❶ making themselves <b>19</b> to the code of conduct</td><td>6 subject ↔ 19 accountable</td></tr>'
     +'<tr><td>②❷ <b>less</b> likely … be <b>4</b> as impartial</td><td>⑥❷ <b>more</b> likely to be seen as separate</td><td>4 accepted（≈ seen）</td></tr>'
     +'<tr><td>①❷ cannot <b>1</b> its legitimacy</td><td>⑥❶ <b>18</b> doubts about the court’s legitimacy</td><td>1 maintain ↔ 18 address</td></tr>'
     +'<tr><td>③ still a <b>9</b> between the court and politics</td><td>⑥❷ separate from politics</td><td>9 line</td></tr></table>'
     +'<b>20 as a result 是这条链的因果终点</b>：与政治分离 ⟹ 作为法律令人信服（回扣①❷ guardian of the rule of law）。',
 traps:['<b>镜像给的是方向和词族，不是原词。</b>19 的答案不是再填一次 subject，而是它的近义词 accountable——四个选项里仍要挑那个真正能配上框架的。',
        '<b>对齐时先认清极性翻没翻。</b>②❷ 是 less likely（问题），⑥❷ 是 more likely（对策）——<b>抄反了会把接受族填成否弃族</b>。',
        '<b>与 <a href="#R73">R73</a> 同族不同种</b>：R73（2010 完形）是「定义句 ↔ 改写句」，同一概念说两遍、<b>极性不变</b>；'
        +'本卡是「问题句 ↔ 对策句」，同一件事从问题说到对策、<b>极性常翻转</b>。两刀都是「同一个意思出现两次，两处的空互为答案」。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'mirror',label:'2012·完形 · 02+ 镜像表（本页最值钱的一段）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q19',label:'2012·完形·19（②❹ 框架原样复现）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q6',label:'2012·完形·6（卡住就跳末段）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q4',label:'2012·完形·4（less ↔ more 换极性）'}]},

{id:'R133', tier:'🔴', qt:'完形 · as 框架空（be ___ as ＋ 补足语 / 空格就是 as / 句中有 as 而选项有 recognize、regard）', title:'as 框架三步：先看 as 贴着谁（能改写成「A is B」才是框架），再看 as 后面是褒是贬（接受族还是否弃族），最后在同族里比预设',
 trig:['空格后紧跟 as ＋ 形容词或名词','空格就在 as 的位置，前面是 see／regard／envision 这类动词','选项里有 recognize／regard／accept 这类「看作」动词，句中又恰好有个 as'],
 flow:'① <b>as 贴着谁？</b>把「动词 ＋ A ＋ as ＋ B」改写成「A is B」——通 ⟹ 框架；不通（its legitimacy is guardian）⟹ as 只是 A 的后置修饰，<b>别被熟搭配骗</b>；<br>'
     +'② <b>as 后面是褒是贬？</b>褒或中性 ⟹ <b>接受族</b> accept／see／regard／view／recognize／envision；贬 ⟹ <b>否弃族</b> dismiss／challenge／condemn／denounce；<br>'
     +'③ <b>同族里比预设</b>：dismiss（认定它就是这样）· distort（它本来不是这样、被歪曲）· challenge（提出正式质疑）——挑与作者立场相容的。',
 tmpl:'<b>2012 完形：266 词五个 as，三个设空、一个造假框架</b>'
     +'<table class="tk"><tr><th>原文</th><th>as 贴着谁 · 褒贬</th><th>答案</th></tr>'
     +'<tr><td>①❷ its legitimacy <b>as guardian</b></td><td>贴名词（假框架）</td><td>1 题 D recognize 是陷阱</td></tr>'
     +'<tr><td>②❷ will be <b>4</b> as impartial judgments</td><td>贴动词 · 褒</td><td><b>accepted</b>（接受族）</td></tr>'
     +'<tr><td>④❶ envisioned law <b>10</b> having authority</td><td>空格就是 as</td><td><b>as</b>（看作族）</td></tr>'
     +'<tr><td>⑤❷ are so easily <b>17</b> as unjust</td><td>贴动词 · 贬</td><td><b>dismissed</b>（否弃族）</td></tr></table>',
 traps:['<b>challenge … as 是真用法，但 as 后面必须是贬义</b>（a law challenged as unconstitutional）。2012 完形 4 题 challenged 错不在「不能接 as」，而在 as 后的 impartial 是褒义——'
        +'<b>同一年 T2 ②❶ 原文就有 challenge the constitutionality of Vermont’s rules</b>。',
        '<b>否弃族里挑预设。</b>17 题 distorted 也是贬义、也勉强能接 as，但「被歪曲为不公正」预设判决本来公正——作者恰恰承认判决带政治性，没有替它喊冤。<b>预设与立场冲突，比词义冲突更隐蔽。</b>',
        '<b>看作族的两个例外单记</b>：consider A (to be) B（as 可有可无）· call A B（不用 as）；其余 see／regard／view／think of／treat／envision／describe 一律接 as。',
        '<b>别和 as 引导的从句混。</b>2008 完形 13 题是 <code>as ＋ 主语 ＋ ___</code>（as 后面有谓语，答案 affirm）；本卡管的是 as 后面跟补足语的框架——<b>先数 as 后面有没有谓语动词</b>。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'as5',label:'2012·完形 · 02++ 一篇五个 as'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q4',label:'2012·完形·4（as ＋ 褒 ⟹ accepted）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q17',label:'2012·完形·17（as ＋ 贬 ⟹ dismissed）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q1',label:'2012·完形·1（D recognize 假框架）'},
       {p:'2008_完形_高智商与遗传疾病.html',q:'q13',label:'2008·完形·13（as 从句，不是框架）'}]},

{id:'R134', tier:'🟡', qt:'完形 · 举例结构前的类名空（N like／such as／including A and B）', title:'「例子 is a ___」代入检验：举例前的名词空，答案必须是例子的上位类名',
 trig:['空格是名词，紧跟 like／such as／including ＋ 两三个例子','四个选项都是抽象名词（concepts／theories／conventions／divisions 这一类）'],
 flow:'① 把例子逐个代进「<b>A is a ___</b>」（或复数「A and B are ___」）；<br>'
     +'② 不成立的当场划掉——通常一秒排三个；<br>'
     +'③ 剩下的再用修饰语（fundamental／social）验一遍：修饰语要能同时罩住所有例子。',
 tmpl:'<table class="tk"><tr><th>2012 完形 15 题</th><th>代入「Liberty is a ___」</th></tr>'
     +'<tr><td><b>A concepts</b> ✔</td><td>Liberty is a concept ✓（自由是一种观念）</td></tr>'
     +'<tr><td>B theories</td><td>✗ 自由是单个概念，「自由主义」才是学说</td></tr>'
     +'<tr><td>C divisions</td><td>✗ 自由不是分歧，也不是部门</td></tr>'
     +'<tr><td>D conventions</td><td>✗ 自由不是约定俗成的惯例（<b>我盲做时犹豫过的一项</b>）</td></tr></table>',
 traps:['<b>地道搭配不等于成员关系。</b>social conventions（社会习俗）是很地道的搭配，正因为顺口才成了最强干扰——<b>搭配只能说明这个词能出现在这里，代入检验才说明例子属于它</b>。',
        '<b>与阅读的类别名题是同一个动作</b>：<a href="#R118">R118</a>（2012 T2·28）是「照抄作者给事实贴的类别标签」，本卡是「给作者举的例子找类别名」——<b>一个从标签往下核、一个从例子往上找</b>，都在找上位词。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q15',label:'2012·完形·15（Liberty is a concept）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q28',label:'2012·T2·28（类别名概括题，R118）'}]},

{id:'R135', tier:'🟡', qt:'完形 · 从属连词空（两个完整分句之间，选项是 when／unless／so／since／provided 这一类）', title:'从属连词空两道验算：主句带否定时把 unless 换成 if … not 念一遍；从句里有 would／could ⟹ 先想目的 so (that)',
 trig:['空格在两个完整分句之间','主句有 cannot／never／no 这类否定','从句的谓语是 would／could／can ＋ 动词原形'],
 flow:'① <b>主句带否定、选项里有 unless</b>：把 unless 换成 if … not 念一遍——双重否定最容易「听着顺、意思反」；<br>'
     +'② <b>从句里有 would／could／can</b>：先想目的（so that／in order that），再想别的；<br>'
     +'③ 仍拿不准时判<b>主从关系</b>：从句写的是「想达到的」⟹ 目的；「已发生的」⟹ 原因；「还没发生、要先满足的」⟹ 条件。',
 tmpl:'<table class="tk"><tr><th>2012 完形</th><th>验算</th></tr>'
     +'<tr><td><b>2</b> The court cannot maintain its legitimacy ___ justices behave like politicians</td><td>unless ⟹「大法官<b>不</b>像政客就维持不了合法性」荒谬 ⟹ <b>when</b></td></tr>'
     +'<tr><td><b>11</b> They gave justices permanent positions ___ they <b>would</b> be free to…</td><td>would ⟹ 目的 ⟹ <b>so</b>（＝so that）；since 因果倒挂、provided 把结果当条件</td></tr></table>',
 traps:['<b>cannot … unless 的顺口是陷阱的来源</b>：You cannot pass unless you work hard 这类句子太常见，语感会自动补全——<b>换写一遍只要三秒</b>。同理 not … until（直到……才）也要还原成肯定句检验。',
        '<b>so 单独出现时别急着读成「所以」</b>：新闻与口语常省掉 so that 的 that，<b>从句里有 would／could 就是「以便」</b>。',
        '<b>2016·完形·5 与 13</b>：5 <code>___ a spouse has been selected, each family investigates</code>——Lest 要 (should) do、Unless 把前提说成例外，<b>时态 ＋ 换写两道验算</b>即排掉 ⟹ After；13 <code>may live … up to a year, ___ they can build a new house</code>——for／if 把「有能力盖房」说成同住的原因或条件，恰好说反 ⟹ until。',
        '<b>2017·T4·③</b>：<code>Merely helping … , unless done with clear intent to pressure those officials, is not corruption</code>——换成 if … not 念：不带施压意图 ⟹ 不算腐败 ⟹ 施压意图是必要条件之一；阅读题里它是 37C 的原料（⟹ <a href="#R226">R226</a>）。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q2',label:'2012·完形·2（unless 换写即荒谬）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q11',label:'2012·完形·11（would ⟹ 目的 so）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q5',label:'2016·完形·5（Lest／Unless 验算 ⟹ After）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'col2',label:'2017·T4 · 02++ 专栏（unless ＝ 必要条件的第二种写法）'}]},

{id:'R136', tier:'🔴', qt:'新题型 · 选句填空（每个空先读下一句）', title:'尾钩：下文把一个<u>此前没出现过的词</u>当已知信息用（the／it／疑问句追问）⟹ 这个词只能由空格引入',
 trig:['空格后一句（段末空则是下一段首句）以 The ＋ 名词、this ＋ 名词或代词 it 开头','下一段首句是个疑问句（What counts as X? / Why does X…?）','某个术语从某句起开始裸用，而在它之前全文没有交代过'],
 flow:'① 每个空<b>先读下一句</b>（段末空读下一段首句），圈出三类「被当成已知的词」：定冠词／指示词带着的名词、代词 it／they、疑问句追问的话题；<br>'
     +'② 回头查：这个词在空格之前<b>出现过没有</b>？<b>没出现过 ⟹ 它必须由空格引入</b>；<br>'
     +'③ 去七项里找它——通常只有一项有；<br>'
     +'④ 最后用头钩（选项开头要求上文有什么）复核。',
 tmpl:'<b>2012 新题型五空里三空只用前两步就锁死：</b>'
     +'<table class="tk"><tr><th>空</th><th>下文那一句（被当成已知的词）</th><th>谁接得住</th></tr>'
     +'<tr><td><b>41</b></td><td><code><b>The</b> networked computer is an amazing device</code>——networked 全文首现却带 The</td><td>只有 <b>C</b> 交代了 embed it in a worldwide system</td></tr>'
     +'<tr><td><b>42</b></td><td><code>I call <b>it</b> a secret war</code> ＋ 下一句起裸用 passive consumption</td><td>只有 <b>D</b> 有 secret war，且给下载／上传下了定义</td></tr>'
     +'<tr><td><b>45</b></td><td><code>What counts as <b>meaningful uploading</b>?</code></td><td>只有 <b>G</b> 有 meaningful uploading</td></tr></table>'
     +'<p style="margin-top:8px"><b>⭐ 为什么尾钩比头钩硬</b>：头钩只说「上文有个东西」，常常几项都能回指（2012 的 computer 在 D、E、G 三项里都有，downloading 在 A、D、F、G 四项里都有）；'
     +'尾钩说的是「下文已把某词当旧信息」——<b>旧信息必须先被引入，而引入全篇只能发生一次、发生在一个地方</b>。'
     +'与 <a href="#R54">R54</a>（术语的定义句早于裸用）是同一条原理：R54 管术语，本卡管一切被当成已知的新词。</p>',
 traps:['<b>尾钩要的是「第一次出现」的词</b>：下文的词若在空格之前早就出现过（2012 ⑥❶ 的 download 在第⑤段已出现），它只能加固、不能定位（同 <a href="#R110">R110</a>）。',
        '<b>被下文「定义」的词不是已知信息，而是正在被引入</b>：2012 第八段用引号给 stickiness 下定义，多余项 B 却把它当现成概念用（add stickiness），方向正好反了 ⟹ B 只能站在第八段之后（R54 反向）。',
        '<b>泛指名词作主语只算弱尾钩</b>：Television is… 这类泛指可以不经引入就出现，只能算「新话题」的提示（2012·44 靠的仍是头钩 this pyramid）。',
        '<b>尾钩的第二形态（2013）</b>：下一句不引入新词，而是用 <code>This／That</code> 回指整句再下评语（This is a shame／This is an adequate amount）——比的是<b>类型</b>不是<b>词面</b>，见 <a href="#R159">R159</a>；下一句里的 too／强调 do 则替空格规定了前提，见 <a href="#R160">R160</a>。',
        '<b>2015·43</b>：④❶ Such background material——background 全文首现就在 G，只有 G 能引入它；「Such ＋ 类名」是尾钩的第三种形态（<a href="#R196">R196</a>）。'],
 refs:[{p:'2012_新题型_下载与上传的隐秘战争.html',q:'tail',label:'2012·新题型 · 02+ 尾钩总表'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q41',label:'2012·新题型·41（The networked computer）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q42',label:'2012·新题型·42（I call it a secret war）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q45',label:'2012·新题型·45（What counts as meaningful uploading?）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'tail',label:'2013·新题型 · 尾钩第二形态（回指评价句）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q43',label:'2015·新题型·43（background 首现于 G）'}]},

{id:'R137', tier:'🟡', qt:'新题型 · 选句填空 / 找多余项（带 thus／so／therefore 的选项）', title:'结论句要完整的前提：前提只有一半在上文、另一半在别的选项里 ⟹ 它是那个选项的下家，不是这个空的主人',
 trig:['选项句首或句中带 thus / therefore / so / hence / as a result','选项读起来像全文主旨的一句总结，内容挑不出毛病','两个选项内容相关，一个像「论点」，一个像「由此得出的结论」'],
 flow:'① 把结论句<b>倒推成前提</b>：它说「因此 X」，上文必须已经说了哪几件事？一条条写下；<br>'
     +'② 逐条回原文核：<b>每一条都必须站在它前面</b>；<br>'
     +'③ 有一条只能在另一个选项里找到 ⟹ 它是那个选项的<b>下家</b>；两者只能进一个空时，看<b>下一句</b>要谁（<a href="#R136">R136</a>）。',
 tmpl:'<b>同一个 thus，一年是答案、一年是多余项：</b>'
     +'<table class="tk"><tr><th></th><th>2009·42 E（正确）</th><th>2012·E（多余）</th></tr>'
     +'<tr><td><b>结论句</b></td><td><code>Thus, in his view, diverse aspects of culture… all changed as societies evolved</code></td><td><code>The challenge the computer mounts to television thus bears little similarity to one format being replaced by another</code></td></tr>'
     +'<tr><td><b>前提在哪</b></td><td>紧邻上一句 <code>he attempted to show how all aspects of culture changed together</code>——全部在上文</td><td>前一半（电视只能下载）在 F 与第⑦段；后一半（电脑能逆转流向）<b>只在 G</b></td></tr>'
     +'<tr><td><b>判决</b></td><td>接得严丝合缝 ⟹ 进 42</td><td>最自然的位置是紧跟 G 之后，而 G 与第八段之间没有空 ⟹ 多余</td></tr></table>'
     +'<p style="margin-top:8px"><b>分界线只有一条：前提是否已经完整地站在它前面。</b></p>',
 traps:['<b>结论句的内容往往最「对」</b>：2012 的 E 几乎就是全文主旨的另一种说法（电脑不是更好的电视，而是反方向的机器）。命题人挑它当多余项，挑的正是「内容无懈可击、只是没有位置」的句子（同 <a href="#R31">R31</a>）。',
        '<b>放进 44 的诱惑</b>：E 同时有 computer 与 television，像是把「新文化机器」过渡到「电视」的桥——但电视要到第⑦段才被解释，thus 的前提此时一件都没有（黄皮书也把 E 列为 44 的备选）。',
        '<b>不要替原文补前提</b>：「电脑当然和电视不一样」是你的常识，不是上文的话。选句填空只认写在纸上的前提。',
        '<b>下家第二例（2013·A，非 thus 型）</b>：<code>It could be that we are evolving two communities…</code> 是推测句，推测总要一个现象在前——「期刊论文里关键词很少」只在 <b>B</b> 里 ⟹ A 是 B 的下家；B 占住 43 后，与第⑤段之间没有空。<b>结论句、推测句、例证句同理：它要的上家若在另一个选项里，它就不是这个空的主人。</b>'],
 refs:[{p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型 · 03 节 两个多余项'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q44',label:'2012·新题型·44（E 是最强干扰）'},
       {p:'2009_新题型_文化人类学理论.html',q:'q42',label:'2009·新题型·42（Thus 的前提就在紧邻上句）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'q43',label:'2013·新题型·43（A 是 B 的下家）'}]},

{id:'R138', tier:'🔴', qt:'新题型 · 选句填空（议论文 / 论证线）', title:'论证线文章：先看空格前一句「抛出了什么」——判断补理由、现象补原因、困境补出路、事实补评价',
 trig:['文章有明显的作者立场（I call it… / My definition… / we must…）','前几段先扬，某段 But 一转，出现 must / should / caution 这类判断','七个选项的开头多是功能词：This is because / One reason for / Of course / Not only / offers the first chance / like / thus'],
 flow:'① 读完前四段首句先<b>认线</b>：流程线（步骤）、人物线（一段一位学者）还是<b>论证线</b>（有论点、有转折、有对策）；<br>'
     +'② 论证线下，每个空先写一个<b>功能标签</b>——看空格前一句抛出了什么：没给理由的判断或警告 ⟹ 补<b>原因</b>；顽固的现象 ⟹ 补<b>原因</b>；困境 ⟹ 补<b>出路</b>；一段事实描述 ⟹ 补<b>评价</b>或<b>递进</b>；<br>'
     +'③ 给七个选项也贴功能标签（看开头五个词）；<br>'
     +'④ 标签配对后，用头钩与尾钩（<a href="#R136">R136</a>）逐空复核。<b>标签找不到上家的选项，就是多余项。</b>',
 tmpl:'<table class="tk"><tr><th>空格前一句抛出了什么</th><th>空格补什么</th><th>2012 的答案</th></tr>'
     +'<tr><td><code>we must also act with caution</code>（没给理由的警告）</td><td>原因</td><td><b>D</b> This is because…</td></tr>'
     +'<tr><td><code>a pyramid of production remains</code>（顽固的现象）</td><td>原因</td><td><b>F</b> One reason for the persistence of…</td></tr>'
     +'<tr><td><code>The hardest task … is to turn the power off</code>（困境）</td><td>出路</td><td><b>G</b> offers the first chance to reverse the flow</td></tr>'
     +'<tr><td>人类创造多余的物质与体验（事实）</td><td>评价</td><td><b>A</b> Of course, it is precisely these…</td></tr>'
     +'<tr><td>一群人造出一台神奇的机器（事实）</td><td>递进</td><td><b>C</b> Not only did they develop… but…also</td></tr></table>'
     +'<p style="margin-top:8px">多余项的标签也找不到上家：B ＝ <b>例证</b>（Applications like…，全文没有一个待举例的「黏性」主张站在空格前）；E ＝ <b>结论</b>（thus，前提不全，见 <a href="#R137">R137</a>）。</p>'
     +'<p style="margin-top:6px"><b>三篇选句填空，三种线，三把钥匙</b>：2008 流程线 → 唯一词（<a href="#R30">R30</a>）· 2009 人物线 → 指代距离与术语站位（<a href="#R53">R53</a>／<a href="#R54">R54</a>）· 2012 论证线 → 论证功能 ＋ 尾钩（本卡／R136）。</p>',
 traps:['<b>功能标签只能缩小范围，不能直接定答案</b>：2012 的 42 与 44 都是「补原因」，靠头钩（caution ↔ This is because；pyramid ↔ this pyramid）才分开。',
        '<b>认线要在读完前四段首句时完成</b>，别等做到一半才发现唯一词法不灵（2009 就是这么翻的车，见 <a href="#R55">R55</a>）。',
        '与 <a href="#R80">R80</a>（排序题「段尾是还没有证据的断言 ⟹ 下一段来举证」）同源：<b>议论文里每一句都在回答上一句引出的问题</b>，选句填空与排序题都能用。',
        '<b>2013 补边界：功能标签定范围，下一句定答案</b>。41 前一句是「社科贡献不足」（判断补理由），D（药方）、E（根源）、F（不愿意）三项都像在回应它；真正判胜负的是后文 <code>Here, too, the problems are social</code>（<a href="#R160">R160</a>）。2013 是「问题 → 原因 → 方案」三区线，多余项分区后还要比上家与杠杆（<a href="#R161">R161</a>）。'],
 refs:[{p:'2012_新题型_下载与上传的隐秘战争.html',q:'chain',label:'2012·新题型 · 02++ 论证链功能表'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'three',label:'2012·新题型 · 03+ 三篇选句填空对照'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q43',label:'2012·新题型·43（事实 ⟹ 评价）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'zones',label:'2013·新题型 · 三区分区（功能标签只把 41 缩到 D E F）'}]},
{id:'R139', tier:'🔴', qt:'通用 · 排除选项（选项里出现原文的词或同根词时）', title:'义项偷换：选项里的词原文真有，只是被换成了它最常用的那个意思——先写下它在原句的义项，再看选项取的是哪个',
 trig:['选项里出现原文的原词或同根词（imagining → imagination、bargain → bargaining）','原句是日常场景／电影情节／人物对话，满是初中词','一个简单词出现在不常见的搭配里（the poor girl、the bargain bin、a feverish world）'],
 flow:'① 选项与原文撞词时，<b>先别高兴</b>——停一秒，把这个词<b>在原句里的意思</b>写成中文；<br>'
     +'② <b>用搭配判义项，不用感觉判</b>：imagine ＋ that 从句 ＝ 以为 · poor ＋ 人 ＝ 可怜的 · bargain ＋ bin／price ＝ 便宜 · feverish 与贬义词同句 ＝ 狂热；<br>'
     +'③ 再看选项取的是哪个义项——<b>义项一换，整个选项作废，哪怕词形一模一样</b>。',
 tmpl:'<table class="tk"><tr><th>原文（2013·T1）</th><th>选项取的义项</th></tr>'
     +'<tr><td><code>for <b>imagining</b> that…</code> 误以为</td><td>21A <code>lack of <b>imagination</b></code> 想象力</td></tr>'
     +'<tr><td><code>the <b>poor</b> girl</code> 可怜的 ＋ <code>the <b>bargain</b> bin</code> 便宜货</td><td>21B <code><b>poor bargaining</b> skill</code> 讨价还价差</td></tr>'
     +'<tr><td><code>the <b>feverish</b> world</code> 狂热（贬）</td><td>23B <code>enthusiasm</code> 热情（褒）</td></tr></table>'
     +'<p style="margin-top:8px">🔁 旧例：2011·T3·33C 把 campaign（宣传活动，与 asset 并列）读成「竞赛」，再脑补「竞争加剧」。</p>',
 traps:['<b>越熟的词越危险</b>：首段是电影情节，poor、bargain、imagine 都是初中词，读者一定按最熟的义项读、而且读得飞快——命题人要的就是这个。',
        '<b>与 R1、R10、R39 的分工</b>：R1 说「原词复现是陷阱」（泛指）· R10 管<u>题干</u>里被考的词 · <a href="#R39">R39</a> 管「两个词被焊成一个短语」· <b>R139 专管<u>选项</u>里的词：词对、义项错</b>。21B 同时犯了 R39 和 R139。',
        '<b>褒贬也是义项的一部分</b>：feverish 与 enthusiasm 都含「热」，一贬一褒——同根或同源联想出来的选项，先查褒贬。',
        '<b>2015·T3·33C</b>：④❸ the publications in Science itself 是「《科学》自己发表的文章」，33C increase Science’s circulation 取了 publication 的「出版物」义再引到发行量。',
        '<b>2016·T1·24B</b>：⑥❶ <code>characteristics of models</code>（特征：年龄、健康）被换成 <code>models’ character</code>（性格）——<b>同根异义的形近词偷换</b>，而且 character 恰是作者③❷ 提倡看重的东西。',
        '<b>2016·T4·38C</b>：⑥❻ <code>costs nearly $500 a year</code> 的 costs 是读者订阅纸质版要花的钱（价格高），38C 的 cost of printing 是报社的印刷成本——<b>一个 cost 两个付钱方</b>；再加上原文是提价、不是降成本。'],
 refs:[{p:'2013_T1_快时尚的控诉书.html',q:'col1',label:'2013·T1 · 02+ 专栏（义项偷换表）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q21',label:'2013·T1·21（A、B 两项全靠换义项）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q23',label:'2013·T1·23B（feverish → enthusiasm）'},
       {p:'2011_T3_五种媒介的家谱.html',q:'q33',label:'2011·T3·33C（campaign 读成竞赛）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q33',label:'2014·T3·33C（demonstrate 证明 → 展示研究成果）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q33',label:'2015·T3·33C（publications → circulation）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q24',label:'2016·T1·24B（characteristics → character）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q38',label:'2016·T4·38C（读者的 costs → 报社的 cost）'}]},

{id:'R140', tier:'🔴', qt:'推理引申题 · 细节题（原文含双重否定、否定＋比较级、句末省略的不定式）', title:'否定结构先翻正：couldn’t be more X ＝ 最 X；can’t afford not to ＝ 不得不——先补省略，再逐个消否定，最后才对选项',
 trig:['can’t afford not to ／ can’t help but ／ not…until ／ no…without','couldn’t be more … ／ couldn’t agree more ／ can’t be too careful','不定式 to 后面戛然而止（…when they can’t afford not to.）'],
 flow:'① <b>补省略</b>：句末的 to 后面省掉了什么？回前文把动词短语抄回来（not to <u>shop more sustainably</u>）；<br>'
     +'② <b>逐个消否定</b>：afford not to shop sustainably ＝ 负担得起「不可持续地买」⟹ 加 can’t ＝ 负担不起「不可持续地买」；<br>'
     +'③ <b>写成大白话</b>：不可持续的买法贵到买不起了，人们才会改 ⟹ <b>价格决定</b>；<br>'
     +'④ 再对选项——<b>只读了半个否定的那一项，就是命题人给你准备的</b>。',
 tmpl:'<table class="tk"><tr><th>原句（2013·T1）</th><th>翻正后</th></tr>'
     +'<tr><td>⑥❸ <code>people will only start shopping more sustainably when they <b>can’t afford not to</b></code></td><td>只有「不可持续地买」负担不起时才改 ⟹ ✔ 24C Pricing is vital；⚠️ 24D 只读了 can’t afford（买不起的衣服）</td></tr>'
     +'<tr><td>②❶ <code>This top-down conception <b>couldn’t be more</b> out of date</code></td><td>过时到了极点 ⟹ 旧观念是靶子（25B 错在把它当主题）</td></tr></table>'
     +'<p style="margin-top:8px">🔁 afford 的三个层次：钱（can’t afford a car）→ 后果（2008·T4 <code>could not afford to part with its slaves</code>）→ 后果 ＋ 否定（本篇 <code>can’t afford not to</code>）。越往后越绕，翻法一样。</p>',
 traps:['<b>couldn’t be more 最容易读反</b>：不是「不能再过时」，是「过时得不能再过时」。同类：I couldn’t agree more（完全同意）· It couldn’t be better（再好不过）。',
        '<b>only … when 是条件的唯一性</b>：与 <a href="#R43">R43</a>（Only when A 倒装 B：被 Only 罩住的 A 才是重心）同源——本句没倒装，但 when 从句仍是重心。',
        '<b>先翻正、再认说话人</b>：翻出来的意思是谁的主张？2013·T1 这句是书评人的，与上一句克莱恩的主张相反（⟹ <a href="#R142">R142</a>）。',
        '<b>2013·T4·40A：虚拟条件 ＋ 否定事实要连读</b>——⑦❷ <code>if Congress wanted to prevent states from…, it could.</code> ⑦❸ <code>It never did so.</code> 是「本可以却没有」；A <code>Immigration issues are usually decided by Congress</code> 只取了前一半，还把 could 升成 usually。<b>读到 could／would have 的虚拟句，下一句若是短短的否定，务必连读</b>。',
        '<b>2014·T1·25D</b>：④❸ <code>is no longer that you can insure yourself against the risk of unemployment</code>——先把 no longer 翻正：「为失业投保」<b>已经不是</b>英国福利的原则 ⟹ D「新政能降低失业风险」既丢了否定，又把 insure against（为风险投保）偷换成 reduce（降低风险）。',
        '<b>2017·T2</b>：④❸ <code>did not always prioritize</code> ＝ 有时没做到（部分否定，≠ 从不）；⑥❹ <code>There is no reason why everyone cannot be welcomed</code> ＝ 完全可以（双重否定 ＝ 强肯定）⟹ 30B full approval。'],
 refs:[{p:'2013_T1_快时尚的控诉书.html',q:'col4',label:'2013·T1 · 02++++ 专栏（否定翻正表）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q24',label:'2013·T1·24（C 正解 · D 只读半截）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'s12',label:'2013·T1 · 长难句 s12'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'s16',label:'2013·T4 · 长难句 s16（if…it could. It never did so.）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q25',label:'2014·T1·25D（no longer 丢失 ＋ insure 偷换）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'s2',label:'2014·T2 · 长难句 s2（few places … more … than ＝ 最）· s9（too … to 隐性否定）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q30',label:'2017·T2·30（There is no reason why … cannot ＝ 强肯定）'}]},

{id:'R141', tier:'🟡', qt:'词义推断题（被考词是从别的领域借来的：法律／犯罪／战争／医学／体育）', title:'隐喻场：被考词若是借来的，就去找它的「同乡」——同一个老家的兄弟词连成一片，整片场的褒贬就是它的褒贬',
 trig:['商业／社会类文章里突然出现法律、犯罪、战争、医学词（indictment、hijack、victim、patrol、feverish）','被考词不认识，但同段或下一段首句有一个你认识的、同领域的词','四个选项褒贬分两边'],
 flow:'① <b>认老家</b>：这个词本来属于哪个领域？（indictment ＝ 法律「起诉书」）；<br>'
     +'② <b>找同乡</b>：往下扫两三句、再扫下一段首句，找同一个领域的词——作者用一个比喻，很少只用一次；<br>'
     +'③ <b>整片场定褒贬</b>：起诉、劫持、受害者 ⟹ 快时尚是被告 ⟹ 被考词只能是负面的「指控」；<br>'
     +'④ <b>再比强度</b>（⟹ <a href="#R12">R12</a>）。',
 tmpl:'<table class="tk"><tr><th>2013·T1 的罪案场</th><th>在文中</th></tr>'
     +'<tr><td><code>indictment</code>（②❶）起诉书</td><td>这本书 ＝ 递给快时尚的控诉书 ⟹ <b>23A accusation</b></td></tr>'
     +'<tr><td><code>hijacked</code>（②❺）劫持</td><td>品牌强行夺走时尚周期</td></tr>'
     +'<tr><td><code>victims</code>（③❶）受害者</td><td>设计师、劳工、资源、环境</td></tr></table>'
     +'<p style="margin-top:8px">🔁 旧例：2012·T4 <code>patrolled by unions</code> ＋ <code>fearsome</code>——看守／警务场，把工会写成占地盘的看守；2008·T3·32 数的是「营养」话题场推出 Living standards。<b>区别：话题场是同一件事的词；比喻场是借来的词，更能定褒贬。</b></p>',
 traps:['<b>认场要看搭配，不看单词</b>：revolution 单看中性甚至褒义，是 victims of this revolution 把它拉进了罪案场。',
        '<b>三条路互证</b>：认场 ＋ 同句同向（feverish 贬）＋ 下文罪状（低薪、耗资源、化学品）——单靠一条能做对，三条都走是满分把握。',
        '<b>被考词还可能是全书定性</b>：indictment 是书名同位语的中心词，同时管 25 题（⟹ <a href="#R143">R143</a>）。',
        '<b>2016·T3·33</b>：lenient 是法律借词，同乡一整片——penalties（④❶）· leniency · fines（④❷）· punishment（⑤❷ ⑥❸）· less costly（⑥❸）：整片场说的都是「罚得轻重」⟹ less severe。'],
 refs:[{p:'2013_T1_快时尚的控诉书.html',q:'col3',label:'2013·T1 · 02+++ 专栏（罪案场）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q23',label:'2013·T1·23（indictment ⟹ accusation）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'',label:'2012·T4（patrolled 看守场，对照）'},
       {p:'2008_T3_美国人的身高极限.html',q:'q32',label:'2008·T3·32（话题场，对照）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q33',label:'2016·T3·33（lenient 的法律词场）'}]},

{id:'R142', tier:'🔴', qt:'书评类文章 · 末段推断题／作者观点题', title:'认诊断、疑药方：书评人常同意书作者「病在哪」，却不信她「怎么治」——末段先分清哪句是书作者的主张、哪句是书评人的结论',
 trig:['末段出现 X believes／argues／insists … only …（书作者的药方）','紧跟一句 She exhibits／shares the idealism／optimism … common to …（归类）','段末一句无人称、一般现在时、短而硬的格言（Vanity is a constant.）','前文有 But as X is the first to note／admit（借对方之口的保留）'],
 flow:'① 按转述标记给末段逐句贴标签：<b>Cline argues／finds／believes／introduced ＝ 书作者</b>；of course／无标记的宣判句／归类句／格言 ＝ <b>书评人</b>；<br>'
     +'② 认出书评人的三步棋：<b>借她之口</b>（But as X is the first to note）→ <b>给她归类</b>（exhibits the idealism common to…）→ <b>用格言下结论</b>（Vanity is a constant）；<br>'
     +'③ 末段推断题／作者观点题<b>取书评人的那句</b>——它常与书作者的主张相反；<br>'
     +'④ 书评四格骨架（⟹ <a href="#R111">R111</a>）里，<b>「局限」那一格就是书评人自己的声音</b>，先找它。',
 tmpl:'<table class="tk"><tr><th>2013·T1 末两段</th><th>谁在说 · 说什么</th></tr>'
     +'<tr><td>⑤❷ <code>But as Cline is the first to note…</code></td><td>书评人借她之口：榜样学不来</td></tr>'
     +'<tr><td>⑥❶ <code>Cline believes lasting change can only be effected by the customer</code></td><td>书作者的药方：只能靠顾客</td></tr>'
     +'<tr><td>⑥❷ <code>She exhibits the idealism common to many advocates…</code></td><td>书评人归类：理想主义（温和的不同意）</td></tr>'
     +'<tr><td>⑥❸ <code>Vanity is a constant; …</code></td><td>书评人的格言：只有价格能逼人改 ⟹ ✔ 24C</td></tr></table>',
 traps:['<b>最易踩的坑是把 Cline believes … only … 当末段主旨</b>：它离题干最近、句子最长、还带 only——可它是被下一句归类、再被格言反驳的靶子。',
        '<b>归类即表态</b>：idealism／optimism／nostalgia／romanticism 这类「主义」标签出现在书评收尾处，十有八九是温和的不同意，不是夸奖。',
        '<b>与 R113 对照</b>：2012·T1 的分水岭是明说的（less persuasive）；2013·T1 是暗说的（the first to note ＋ 归类 ＋ 格言）——<b>分水岭越温和，越要圈出那个 But</b>。',
        '<b>先把否定翻正</b>：书评人的格言常带否定结构（can’t afford not to），翻错了方向，站对了边也没用（⟹ <a href="#R140">R140</a>）。'],
 refs:[{p:'2013_T1_快时尚的控诉书.html',q:'col4',label:'2013·T1 · 02++++ 专栏（末段说话人表）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q24',label:'2013·T1·24（取书评人的格言）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'col2',label:'2012·T1 · 分水岭明说版（对照）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'col4',label:'2014·T4 · 02++++ 专栏（认目标、疑诊断：与「认诊断、疑药方」并排）'}]},

{id:'R143', tier:'🟡', qt:'书评类文章 · 主旨题／词义题／态度题', title:'书名同位语＝全书定性：书评人第一次提到这本书时贴的标签（X’s three-year indictment of Y），就是主旨题的答案——它若被出成词义题，那道题等于送你主旨',
 trig:['书名后面紧跟一个同位语：Book, X’s ＋ 名词 ＋ of Y（indictment／defense／celebration／critique／memoir）','词义题考的词正是这个同位语的中心词','主旨题两项难分，其中一项是这个同位语的改写'],
 flow:'① 书评里<b>书第一次出场</b>的那句，圈出书名后的同位语或 contends that 从句；<br>'
     +'② 把同位语的<b>中心词 ＋ of 后的对象</b>写成四个字（控诉快时尚）——这就是全书定性；<br>'
     +'③ 主旨题／态度题直接拿它去对；它若被出成词义题，<b>两道题共用一把钥匙</b>。',
 tmpl:'<table class="tk"><tr><th>书的出场（写法）</th><th>该读哪几个词 · 管哪题</th></tr>'
     +'<tr><td>2013·T1 同位语：<code><i>Overdressed</i>, Elizabeth Cline’s three-year <b>indictment of 「fast fashion」</b></code></td><td>indictment of fast fashion ⟹ 23（accusation）＋ 25（Criticism of the fast-fashion industry）</td></tr>'
     +'<tr><td>2012·T1 主张句：<code>in her new book <i>Join the Club</i>, Tina Rosenberg <b>contends that</b>…</code></td><td>contends that 之后 ＝ 书的论点</td></tr></table>',
 traps:['<b>与 <a href="#R125">R125</a>「前题答案回收」正好反着</b>：2012·T3·35B 是把前题正确项原词拿去做标题干扰项（它只管一段）；2013·T1 是前题答案就是主旨（它管全篇）。<b>判据：前题考的那个词，是只管一段，还是作者给全篇下的定性？</b>',
        '<b>书评的主旨是「书对某事的态度」，不是「书评人对书的态度」</b>：2013·T1 书评人在药方上不同意克莱恩，但全文主旨仍是 Criticism of the fast-fashion industry——保留只针对「怎么治」。'],
 refs:[{p:'2013_T1_快时尚的控诉书.html',q:'col5',label:'2013·T1 · 02+++++ 专栏（一钥两锁）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q25',label:'2013·T1·25（C ＝ 同位语改写）'},
       {p:'2013_T1_快时尚的控诉书.html',q:'q23',label:'2013·T1·23（同位语中心词）'}]},

{id:'R144', tier:'🔴', qt:'词义指代题（the industry／the firm／the sector／such companies ＋ 题干标了段号）', title:'类名回指：同一个 the industry 在相邻两段可以指两拨人——题干给了段号，就只在那一段里画栏，答案取被考句动作的实施者',
 trig:['被考词是类名（the industry／the firm／the sector／the business／such companies），不是代词','题干括号写着 (Para. N)','文中有三方以上的机构，且有人同时站两栏（既做浏览器又做广告）','被考句前一句是一份名单（IE／Safari／Chrome）'],
 flow:'① <b>只在题干给的那一段的卷边画栏</b>：提议 · 实施 · 表态 · 受众；<br>'
     +'② <b>圈出被考句的谓语</b>（2013·T2：responding to DNT requests），问「<b>段内谁在做这件事</b>」——取实施者，不取表态者、不取受众；<br>'
     +'③ <b>看被考句前一句有没有名单</b>：定冠词 the ＋ 类名，最常回指刚列过的那一组；<br>'
     +'④ <b>段外证据只用来排除</b>（确认 B、C 在全文都没出现），<b>不用来推翻段内唯一的实施者</b>；<br>'
     +'⑤ <b>两边证据都硬</b>（段内一种读法、全文另一种读法）⟹ <b>认下它是争议题，按段内口径选、立刻翻页</b>。',
 tmpl:'<table class="tk"><tr><th>2013·T2 第 3 段画栏</th><th>谁 · 做什么</th></tr>'
     +'<tr><td>【提议】FTC</td><td>③❶ proposed adding DNT to browsers · ③❸ agreed</td></tr>'
     +'<tr><td>【实施】IE／Safari／Chrome</td><td>③❷ offer DNT／is due to do so ⟸ 被考句前一句 ⟹ <b>D ✔（官方）</b></td></tr>'
     +'<tr><td>【表态】DAA</td><td>③❸ agreed（本身是广告业组织）</td></tr>'
     +'<tr><td>【受众】users · advertisers</td><td>③❶ so that users could tell advertisers…</td></tr></table>'
     +'<p style="margin-top:8px">⚖️ <b>对面的证据（指向 A 广告商）</b>：⑤❹ <code>if the industry cannot collect information</code>（黄皮书自注「指 online advertisers，与第 27 题有别」）· ⑦❷ <code>an ad business … will comply with DNT requests</code> · ⑥❷ <code>a DNT signal does not oblige anyone to stop tracking</code>——<b>三条都在第 3 段之外</b>。</p>',
 traps:['<b>分歧只在一个词组 DNT requests</b>：读成「（FTC 提的）添加 DNT 的要求」⟹ 响应者 ＝ 去加的人（浏览器）；读成「用户发出的 DNT 信号」⟹ 响应者 ＝ 去照办的人（广告商）。<b>第 3 段此时还没讲到「信号」与「照办」，命题人取了段内的读法。</b>',
        '<b>我盲做选 A 的直觉「浏览器已经提供了，还用得着抓紧吗」站不住</b>：③❷ 说 IE、Safari 已提供，<b>Chrome 还没有</b>（is due to do so this year）。',
        '<b>一人站两栏的地方一定有题</b>：微软、谷歌既做浏览器又做广告（⑦❷❸），「业界」才说不清（⟹ <a href="#R117">R117</a>）。',
        '<b>与 R7／R68 的分工</b>：<a href="#R7">R7</a> 管事实题的「限定段落」· <a href="#R68">R68</a> 管斜体指示代词 · <b>R144 管「类名 ＋ 段号」的指代题</b>。本中心已复盘的指代题只有两道：2010·T3·34（these people）与 2013·T2·27（the industry，第一道争议题）。'],
 refs:[{p:'2013_T2_默认不追踪之争.html',q:'col1',label:'2013·T2 · 02+ 专栏（两条证据链并排 ＋ 考场规矩）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q27',label:'2013·T2·27（我错的那题 · 争议题）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q28',label:'2013·T2·28（⑤❹ 的 the industry ＝ 广告业）'}]},

{id:'R145', tier:'🟡', qt:'首段推断题 · 作用／好处题（help X to…／It is suggested in Paragraph 1 that…）', title:'开篇俗语是个「问题」：An old saying has it that X—the trouble is Y；下一句的新技术就是解法，首段题的答案是把问题反过来说，常被往上抽一层',
 trig:['首句是 An old saying has it that…／It is often said that…／Conventional wisdom holds that…','第二句出现 In the … age／Today／at least in theory ＋ can be reduced／solved','题干问首段暗示的「好处／作用」（help X to…）'],
 flow:'① 首句见俗语 ⟹ 卷边写「<b>老问题</b>」（它几乎从不是论点）；<br>'
     +'② 往下找「<b>解法的结论</b>」（can be much reduced）与「<b>解法的做法</b>」（By watching…, companies can aim…）；<br>'
     +'③ 题干问好处 ⟹ <b>答案在「结论」里，把老问题反过来说</b>（浪费 ⟹ 节省）；<b>允许选项往上抽一层</b>（广告预算 ⟹ 运营成本）；<br>'
     +'④ <b>「做法」句的具体细节只用来排除</b>——它信息最多，干扰项最爱从这里编。',
 tmpl:'<table class="tk"><tr><th>2013·T2 首段</th><th>功能 ⟹ 管 26 题哪部分</th></tr>'
     +'<tr><td>①❶ <code>half of all advertising budgets are wasted—the trouble is…</code></td><td>问题 ⟹ 好处是「钱」</td></tr>'
     +'<tr><td>①❷ <code>this fraction can be much reduced</code></td><td>解法的结论 ⟹ <b>A lower their operational costs ✔</b></td></tr>'
     +'<tr><td>①❸ <code>By watching…, companies can aim ads at…</code></td><td>解法的做法 ⟹ C 编「不被投诉」、D 编「更好的服务」</td></tr></table>',
 traps:['<b>上位替换比原词复现更像正确项</b>：advertising budgets ⊂ operational costs——别因为「原文没说运营成本」就排掉 A（⟹ <a href="#R1">R1</a>）。',
        '<b>形近词造项</b>：26B 拿 fraction（部分）碰 friction（摩擦、分歧），编出「缓和内部竞争」——原文从没谈竞争。',
        '<b>受益人偷换</b>：26D「投放更准」是广告商的本事，「服务更好」是消费者的体验；⑤❹ 利奥狄斯确实这么说过，但那是⑤段利益方的说辞，不是①段的意思。',
        '<b>at least in theory 是折扣词</b>（⟹ <a href="#R66">R66</a>），为后文「存疑」埋线，<b>但不改变首段题的方向</b>。',
        '<b>与 R11／R27 的分工</b>：<a href="#R11">R11</a> 管选项是谚语的主旨题 · <a href="#R27">R27</a> 管首段是事例／轶事 · <b>R145 管首段是俗语</b>：俗语 ＝ 问题，下一句 ＝ 解法或翻案。'],
 refs:[{p:'2013_T2_默认不追踪之争.html',q:'col2',label:'2013·T2 · 02++ 专栏（问题 → 结论 → 做法）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q26',label:'2013·T2·26（A ＝ 把浪费反过来说 ＋ 上位替换）'}]},

{id:'R146', tier:'🔴', qt:'作者态度题（全文或段落以问号收尾，后面没有句子）', title:'文末反问看前文：问号是全文最后一句时，R85 的「看后一句」失效——数问号前面的疑点句，看问句里的预设词，被质疑的是紧挨着问号的那句话',
 trig:['全文最后一句是问句（Could it really be that simple?）','问号前面有 unclear／After all／If it is trying to／though … before 这类疑点句','问号前紧挨着一句冠冕话或官方引语','选项有 skepticism／appreciation／understanding／indulgence'],
 flow:'① <b>问号在全文最后</b> ⟹ 改看前面（<a href="#R85">R85</a> 看后面）；<br>'
     +'② <b>往前数疑点句</b>：Also unclear is why… · After all… · If it is trying to… · though … before——<b>数到两句以上，问句就是反问</b>；<br>'
     +'③ <b>看问句措辞里的预设词</b>：really（预设「表面如此」）· that simple（预设「实际更复杂」）· surely · honestly ⟹ 质疑；<br>'
     +'④ <b>被质疑的对象 ＝ 问号前紧挨着的那句话</b>，对上题干（what X said）就选 skepticism／doubt。',
 tmpl:'<table class="tk"><tr><th>2013·T2 末段</th><th>作者在做什么</th></tr>'
     +'<tr><td>⑦❶ <code>Also unclear is why…</code></td><td>疑点一：动机不清</td></tr>'
     +'<tr><td>⑦❷ <code>After all, it has an ad business too</code></td><td>疑点二：它自己也靠广告</td></tr>'
     +'<tr><td>⑦❸❹ <code>If it is trying to upset Google… though … before</code></td><td>疑点三：冲着谷歌 ＋ 前科</td></tr>'
     +'<tr><td>⑦❺ <code>「We believe consumers should have more control.」</code></td><td>官话（被考对象）</td></tr>'
     +'<tr><td>⑦❻ <code>Could it really be that simple?</code></td><td>反问 ⟹ <b>D skepticism ✔</b></td></tr></table>',
 traps:['<b>三个干扰项都从本段的碎词里造</b>：A appreciation ← ⑦❹ favourably（主语是微软自夸，⟹ <a href="#R72">R72</a> 查谁对谁）· B understanding ← ⑦❷ After all（句首 ＝ 毕竟、别忘了，是加码不是体谅）· C indulgence ← ⑥段 promised／ignore（跨段、答非所问）。',
        '<b>真心发问的人不会用 really 和 that simple</b>：Why did Microsoft do this? 才是真问；Could it really be that simple? 自带答案。',
        '<b>与 R85 合起来，问号在任何位置都有判据</b>：R85 看问号之后（2011·T1：后面紧跟一句断言）· R146 看问号之前（2013·T2：问号是全文尽头）。',
        '<b>别把转述争议的问句当作者表态</b>：同篇②❶ 冒号后的 Should advertisers assume…? 挂在 a quarrel 身上，是在交代「吵的是什么」。'],
 refs:[{p:'2013_T2_默认不追踪之争.html',q:'col4',label:'2013·T2 · 02++++ 专栏（四句疑点 ＋ 一句官话 ＋ 一句反问）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q30',label:'2013·T2·30（D skepticism）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q25',label:'2011·T1·25（对照：问号后面有句子）'}]},

{id:'R147', tier:'🟡', qt:'段落是非题 · 推断题（文章写一项新规则／新技术／新承诺的效力）', title:'机制落空三问：强制吗 · 有人承诺吗 · 有人会绕开吗——三问都不利，正解就是「可能达不到目的」，三个干扰项各拿一问造反',
 trig:['某段出现 does not oblige／is voluntary／has no legal force','同段有 some have promised to…（部分承诺）','同段有 some may ignore／press on anyway（部分绕开）','题干问 Which is true according to Paragraph N? 且选项含 intended purpose／effect'],
 flow:'① 卷边写三问：<b>强制？承诺？绕开？</b>逐句对答；<br>'
     +'② <b>三问都不利</b> ⟹ 正解方向「<b>可能达不到目的／效果存疑</b>」，<b>情态跟原文同档</b>（may 对 may；写成 has failed 就推过头）；<br>'
     +'③ <b>「目的」回到制度第一次出场的那句去找</b>（常是 so that 从句）；<br>'
     +'④ 逐个核干扰项拿的是哪一问：<b>否定被丢</b> · <b>部分被扩成全体</b> · <b>对象被换</b>。',
 tmpl:'<table class="tk"><tr><th>2013·T2 第 6 段三问</th><th>回答 ⟹ 拿它造反的干扰项</th></tr>'
     +'<tr><td>① 强制吗？ <code>does not oblige anyone to stop tracking</code></td><td>不 ⟹ 29D <code>are obliged to offer behavioural ads</code>（丢否定 ＋ 换内容）</td></tr>'
     +'<tr><td>② 有人承诺吗？ <code>although some companies have promised</code></td><td>有些 ⟹ 29A <code>Advertisers are willing</code>（some → 全体）</td></tr>'
     +'<tr><td>③ 有人会绕开吗？ <code>some may ignore … and press on anyway</code></td><td>可能 ⟹ 29C <code>losing its popularity</code>（反对对象换成 DNT）</td></tr></table>'
     +'<p style="margin-top:8px">⟹ <b>29B <code>DNT may not serve its intended purpose</code> ✔</b>——目的在③❶ <code>so that users could tell advertisers that they did not want to be followed</code>。</p>',
 traps:['<b>正确项常「没有原词」</b>：它是整段的结论，还要借上文的目的才说得完整——与首段题「解法的结论」（<a href="#R145">R145</a>）同构。',
        '<b>whether…or whether… 推不出趋势</b>：29C 把「分不清是真反对还是懒得改默认」读成「消费者冷落 DNT」。',
        '<b>与 R24／R65 的分工</b>：<a href="#R24">R24</a> 管范围塌了（some → all 是它的一种）· <a href="#R65">R65</a> 管「例外那半句是干扰项工厂」· <b>R147 管「制度效力」段落：三问定方向</b>。'],
 refs:[{p:'2013_T2_默认不追踪之争.html',q:'col3',label:'2013·T2 · 02+++ 专栏（三问表）'},
       {p:'2013_T2_默认不追踪之争.html',q:'q29',label:'2013·T2·29（B ＝ 三问的结论）'}]},

{id:'R148', tier:'🔴', qt:'今昔对比型文章 · 细节题／标题题／段落是非题通用（「今」后面紧跟 But ＋ 否定词时）', title:'今昔对比的第三拍：「今」后面一句 But such X is misplaced，「今」就从重心降成靶子——作者站在第三个位置，昔、今两端都是干扰项工厂',
 trig:['Up until／It used to be ↔ Now／No longer 的对举之后，紧跟 But ＋ misplaced／wrong／exaggerated／premature','「今」那一段出现 You might be tempted to assume（诱人的错觉）','作者与「昔」同样乐观（或同样悲观），但理由不同'],
 flow:'① 读到昔 ↔ 今的对举，<b>先别把「今」标成重心</b>，往下再读一句；<br>'
     +'② 「今」后面若紧跟 <b>But ＋ 否定评价词</b> ⟹ 三拍文章，卷边写三行：<b>昔 ＝ ___（理由）· 今 ＝ ___（理由）· 作者 ＝ ___（理由）</b>；<br>'
     +'③ 做每道题先问「<b>这个选项是哪一拍的话</b>」：题干锁过去（used to）⟹ 取昔，今的内容排；题干问作者／标题 ⟹ 取第三拍，昔、今两端都排；题干限定某段 ⟹ 别的拍被搬进来就是挪位；<br>'
     +'④ <b>作者与「昔」同向时，比理由不比方向</b>。',
 tmpl:'<table class="tk"><tr><th>2013·T3 三拍</th><th>从这一拍取料的干扰项</th></tr>'
     +'<tr><td><b>昔</b>（①）：科技包治百病 ⟹ 前景光明</td><td>33C Technology offers solutions · 35D Science, Technology and Humanity</td></tr>'
     +'<tr><td><b>今</b>（②）：威胁太多 ⟹ 人类没什么未来</td><td>31C awareness of potential risks（今的原因搬到昔）· 35A Uncertainty about Our Future</td></tr>'
     +'<tr><td><b>作者</b>（③❶ But such gloominess is misplaced · ⑥❶ But take a longer view · ⑦❸ But we are now knowledgeable enough）</td><td>——五个正确项有四个在这一拍（31B 因题干锁了 used to 而取昔）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ <b>同是乐观，昔靠科技、作者靠历史</b>：作者对技术的原话是⑤❷ <code>dazzlingly complicated</code>（复杂难测）——带 technology／science 当主角的选项在本文里都属于第一拍。</p>',
 traps:['<b>「内容为真、位置不对」最难排</b>：31C 的 awareness 是对 appreciation 的<b>正确</b>改写，33C 的「技术解决问题」在①❷ <b>确有其说</b>——读得再细也排不掉，只能靠「它是哪一拍的话」。',
        '<b>与 <a href="#R23">R23</a>／<a href="#R42">R42</a> 的分工</b>：R23 管两拍今昔文（重心在今）· R42 管驳论文（一支箭头，靶子栏是干扰项工厂）· <b>R148 ＝ 两者叠加</b>：今昔文的「今」就是驳论文的靶子，<b>于是有两个靶子——被时间否定的昔、被作者否定的今</b>。',
        '<b>三拍文章的出题规律</b>：题干不锁时间，就默认问作者；五个正确项里只有被 used to 锁住的那一题取昔。'],
 refs:[{p:'2013_T3_人类前景的长视角.html',q:'col1',label:'2013·T3 · 02+ 专栏（三拍归属表）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q31',label:'2013·T3·31C（今的原因搬到昔）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q35',label:'2013·T3·35A／35D（今当作者 · 昔当标题）'},
       {p:'2013_T3_人类前景的长视角.html',q:'col5',label:'2013·T3 · 02+++++ 专栏（十五个干扰项产地总账）'}]},

{id:'R149', tier:'🔴', qt:'因果细节题 · 手段题（inspired by／rooted in ／ it is crucial to／the key to X is）', title:'问源头别取结果、问手段别取结论：X would cure…, leading to Y——inspired by 只取主语 X；This view makes Z seem a fad 里的 Z 是结论，不能翻成手段',
 trig:['题干 used to be inspired by／derived from／rooted in／based on（问源头）','题干 To ensure X, it is crucial to／the key to X lies in（问手段）','定位句里有「, leading to／, resulting in／, making」这类逗号后的分词结果状语','定位段里有 This X makes Y seem… 的使役结论句'],
 flow:'① <b>先给题干动词定端</b>：inspired by／rooted in ⟹ 源头；lead to／result in ⟹ 结果；crucial to／key to ⟹ 手段；<br>'
     +'② <b>把定位句切成两端</b>：主干 vs 逗号后的 leading to／resulting in（结果）；This X makes Y seem…（X 因、Y 果）；<br>'
     +'③ <b>选项名词落在哪一端，就只能答哪一端的题</b>——落在另一端的，词再对也排；<br>'
     +'④ <b>两个干扰项同出一处</b>（都在逗号后）⟹ 先怀疑那一处整个是另一端。',
 tmpl:'<table class="tk"><tr><th>2013·T3 定位句</th><th>正确项 ｜ 干扰项</th></tr>'
     +'<tr><td>31 ①❷ <code><b>Science and technology would cure all the ills</b>, leading to lives of fulfilment and opportunity for all</code></td><td>✔ B faith in science and technology（主语）｜ ✘ A fulfillment · D equal opportunity（<b>都在逗号后</b>）</td></tr>'
     +'<tr><td>34 ⑥❷ <code>the past holds the key</code> → ⑦❶ <code>makes the pessimistic view … seem … a passing fad</code></td><td>✔ A draw on experience from the past（手段）｜ ✘ B adopt an optimistic view（<b>结论翻成手段</b>）</td></tr></table>'
     +'<p style="margin-top:8px">黄皮书对 31 的原话：「D 项中 opportunity 位于结果状语里，故真正的源头在前，即全句主语『科学和技术』。」</p>',
 traps:['<b>would 是隐形的「相信」</b>：①❷ 没有 because，但 would 表示当时的人相信将会如此——正确项用 faith 把它补了出来。',
        '<b>「保持乐观」一类心态选项</b>：原文给的手段若全是认知层面（identified patterns · knowledgeable enough），心态选项连候选都算不上。',
        '<b>与 <a href="#R5">R5</a>／<a href="#R43">R43</a> 的分工</b>：R5 管问结果时沿链走到末端 · R43 管 Only when 倒装把结果当条件 · <b>R149 管反方向：问源头／手段时别取结果与结论</b>。'],
 refs:[{p:'2013_T3_人类前景的长视角.html',q:'col2',label:'2013·T3 · 02++ 专栏（两题的因果链表）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q31',label:'2013·T3·31（A／D 同出结果状语）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q34',label:'2013·T3·34B（结论当手段）'}]},

{id:'R150', tier:'🔴', qt:'段落是非题（Which of the following is true according to Paragraph N?）· 段首是比较句', title:'段首比较句＝段旨：it may be easier to A than to B——后文只解释其中一端；正解把比较级拆成单边判断，干扰项各取一个解释句里的配角再编谓语',
 trig:['题干只给段号：Which is true according to Paragraph N?','该段首句是比较句：easier／harder／more … than · not A but B · A rather than B','段首有评注语 Perhaps willfully／Surprisingly／Counterintuitively（预告反直觉观点）'],
 flow:'① <b>先读段首句</b>，是比较句就在卷边写「A ＞ B（就 ___ 而言）」；<br>'
     +'② <b>看后文解释的是哪一端</b>——被解释的那一端就是正确项的主角；<br>'
     +'③ <b>正确项常把比较拆成单边</b>（A 容易 ⟹ B 难），<b>用段内的程度词核档位</b>（may be easier 撑不住 is hard，要找 dazzlingly complicated 这类肯定语气）；<br>'
     +'④ <b>主角不是段旨主角的选项先排后核</b>——它们的谓语多半是编的。',
 tmpl:'<table class="tk"><tr><th>2013·T3 ⑤段</th><th>被做成的选项</th></tr>'
     +'<tr><td>❶ 段旨：思考长远 <b>easier</b> than 思考近期</td><td>✔ D Our immediate future is hard to conceive</td></tr>'
     +'<tr><td>❷ 解释：技术演变 dazzlingly complicated，best left to 科幻作家与未来学家</td><td>✘ A 科幻热在上升（无中生有）· ✘ C 技术解决社会问题（反向）</td></tr>'
     +'<tr><td>❸ 引申：所以我们办了 Arc（专注近期）</td><td>✘ B Arc 限定未来学研究范围（歪曲）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ <b>三个干扰项的共同手法是换主角</b>：主角一换，谓语只能编——on the rise、limit the scope、offers solutions 原文一个都没有。</p>',
 traps:['<b>比较对象要对齐</b>：than about the more immediate future 比的是「想近期」这件事，不是「近期」本身。',
        '<b>段旨的另一端可能在下一段才解释</b>（⑥段才讲长远为什么好想）——本段是非题只认本段被证明的那一端。',
        '<b>与 <a href="#R15">R15</a>／<a href="#R127">R127</a> 的分工</b>：R15 选项定位法（通用）· R127 列举段是非题（四项各认领一条）· <b>R150 管段首比较句型段落：先认段旨，主角不对的直接降级</b>。',
        '<b>2018·T1·23 补一个句内版</b>：段首比较句之外，句内的 <code>focus less on A and more on B</code> 同理——题干 put more emphasis on 只取 more 那一端（creativity），less 那一端（memorizing facts）连同段内的辅助项（supplement 的网络教育）都是干扰项原料。'],
 refs:[{p:'2013_T3_人类前景的长视角.html',q:'col3',label:'2013·T3 · 02+++ 专栏（⑤段三句三功能）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q33',label:'2013·T3·33（D 单边改写 · A／B／C 换主角）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'q23',label:'2018·T1·23（less on … more on … 只取 more 端 ⟹ creativity）'}]},

{id:'R151', tier:'🟡', qt:'最佳标题题（接 R40 三查）· 末段有 To be sure／Admittedly … But … 的让步', title:'标题题让步不降档：To be sure, X is not all rosy. But…——让步是作者替自己堵漏洞；四个选项里只有一个与作者同向时，措辞再满也选它，别拿让步句去削',
 trig:['标题选项里有 Ever-／Bright／Triumph 这类措辞很满的词','原文末段有 To be sure／Admittedly／Of course／It is true that … But …','其余三个选项或与作者反向、或没有立场'],
 flow:'① 先按 <a href="#R40">R40</a>／<a href="#R125">R125</a> 查主题与覆盖，排掉主题不对的；<br>'
     +'② 剩下的<b>按方向分</b>：与作者反向的排（常是取了靶子）；<br>'
     +'③ <b>若只剩一个同向选项，措辞再满也选它</b>——不要回原文找一句让步去削它；<br>'
     +'④ <b>只有两个选项都同向、一强一弱时</b>，才用让步句比档位，选与「让步后结论」同档的那个。',
 tmpl:'<table class="tk"><tr><th>2013·T3·35</th><th>主题 ｜ 方向</th></tr>'
     +'<tr><td>A Uncertainty about Our Future</td><td>✅ ｜ ❌ 反向（②段靶子）</td></tr>'
     +'<tr><td>B Evolution of the Human Species</td><td>❌ 物种进化（evolution 原属技术）｜ 无立场</td></tr>'
     +'<tr><td><b>C The Ever-bright Prospects of Mankind ✔</b></td><td>✅ ｜ ✅ <b>唯一同向</b></td></tr>'
     +'<tr><td>D Science, Technology and Humanity</td><td>❌ ｜ 无立场（且是第一拍的话）</td></tr></table>'
     +'<p style="margin-top:8px">⟹ ⑦❷ <code>To be sure, the future is not all rosy</code> 削不动 C：⑦❸ <code>But we are now knowledgeable enough…</code> 才是立场。原刊标题 <i>The Future Is Bright for Humanity</i>。</p>',
 traps:['<b>R40 的「褒贬度」管的是方向性错误</b>（原文质疑、标题写成揭露谎言），不是「标题措辞比原文某一句满」——标题本来就是浓缩的、有态度的文体。',
        '<b>R125 的「三个干扰项各占一段」在本篇只部分成立</b>（A 占无题的②段、B 半占③、D 占①）；排干扰项更快的是「主题词 ＋ 方向」两查，黄皮书也是这么排的。'],
 refs:[{p:'2013_T3_人类前景的长视角.html',q:'col4',label:'2013·T3 · 02++++ 专栏（主题 × 方向表）'},
       {p:'2013_T3_人类前景的长视角.html',q:'q35',label:'2013·T3·35（Ever-bright vs not all rosy）'}]}
,

{id:'R152', tier:'🔴', qt:'法院判决／议会表决／投票类新闻评论 · 通篇通用（首段同时报两个结果时）', title:'判决新闻的两块比分牌：a modest victory for A. But on the more important matter … a defeat for A——先把每道题挂到牌上，再在那块牌上找答案；两块牌的输家常常不是同一个',
 trig:['首段出现两个票数／比分（five to three … 8-0；narrowly passed … unanimously rejected）','首段有 modest／narrow／partial 这类「打折」形容词，紧跟 But on the more important matter／But more significantly','题干用不同词称呼同一类人：the majority／the Justices／Every Justice／the objecting Justices'],
 flow:'① <b>读首段先数比分、认输家</b>：本篇 <code>five to three</code>（政策层面，推翻州法大半，输家＝亚利桑那州）· <code>8-0</code>（宪法层面，输家＝白宫）；<br>'
     +'② <b>But 后面那块牌是作者的重心</b>（本篇还有 modest 与 more important 两个提示词），标题题／末段题默认挂在这块牌上；<br>'
     +'③ <b>给题干里的「人」定牌</b>：the majority（5 人，政策牌）· the Justices／Every Justice（8 人，宪法牌）· objecting Justices（3 人，牌外）；<br>'
     +'④ <b>做题时只在题目所在的牌上找答案</b>——<b>另一块牌上为真的内容，搬过来就是挪牌型干扰项</b>。',
 tmpl:'<table class="tk"><tr><th>2013·T4 的牌</th><th>挂在上面的题</th></tr>'
     +'<tr><td>政策牌 5-3（输家：州）</td><td>36A（多数派的理由 intruded on）</td></tr>'
     +'<tr><td>宪法牌 8-0（输家：白宫）</td><td>37C · 39A · 40D</td></tr>'
     +'<tr><td>牌外（反对派）</td><td>38B</td></tr></table>'
     +'<p style="margin-top:8px">挪牌干扰项：<b>36B</b> 把宪法牌上的 <code>balance of power</code> 搬进政策牌的题；<b>40B</b> 把政策牌上的政府小胜推成「政府在移民问题上占主导」。</p>',
 traps:['<b>一个人可以站两块牌</b>：阿利托在⑤段是政策牌上的反对派，在⑥❶ 又替 8-0 那块牌发言（a shocking assertion…）——<b>同一句里 The 8-0 objection 与 his objection 两个 objection 所指不同</b>。',
        '<b>「联邦」不是一个人</b>：国会（立法，三次被援引为裁决依据）· 白宫（行政，被批的一方）· Washington（泛指联邦）。<b>37D、40A、40C 三个干扰项都想让国会「上场」</b>，一律错（与 <a href="#R117">R117</a> 配合：先分牌，再在牌内画栏）。',
        '<b>题干不锁「推翻的那几条」，默认问 But 后的那块牌</b>：本篇五个正确项三个在宪法牌上，唯一在政策牌上的 36 是题干用 overturned 锁定的。',
        '<b>2019·T4 的对照：比分牌被删掉</b>：同为最高法院判决新闻、同为肯尼迪执笔多数意见——2013·T4 留下 5-3 与 8-0 两块牌，要分牌做题；2019·T4 原刊的 5-4 与罗伯茨异议被考卷整段删掉，考卷里只剩一块牌，<b>40A「对立看法」因此出局</b>（见 <a href="#R264">R264</a>）。'],
 refs:[{p:'2013_T4_移民法判决的两块比分牌.html',q:'col1',label:'2013·T4 · 02+ 专栏（两块牌 × 六方主体表）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q36',label:'2013·T4·36B（宪法牌的词进了政策牌的题）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q40',label:'2013·T4·40B（政策小胜推成占主导）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q40',label:'2019·T4·40A（5-4 与异议被考卷删掉，只剩一块牌）'}]}
,

{id:'R153', tier:'🔴', qt:'观点细节题（On which did the Justices／the court／the committee agree?）· 定位段是「裁决 ＋ 依据」', title:'裁决句与依据句：The Justices said that X would be allowed to… That&#39;s because Y has always envisioned…——问「法官同意什么」取 X 的角色；依据句的主语 Y 进了选项就是换主人',
 trig:['题干主语是法院／法官／委员会／监管机构（agree／rule／hold／decide）','定位段第二句以 That&#39;s because／since／on the grounds that／citing 开头','四个选项的主语各不相同（州／联邦官员／国会……）'],
 flow:'① <b>先找裁决动词</b>：said／ruled／held／rejected／approved——那一句的<b>内容主体</b>就是答案的主体；<br>'
     +'② <b>给依据句的主语画圈</b>（本篇三次都是 Congress）：它回答「为什么」，不回答「同意了什么」；<br>'
     +'③ <b>给四个选项标主体</b>，与裁决句主体不同的先排；<br>'
     +'④ <b>剩下的比动作强度</b>：allowed to verify ⟹ legitimate role（✔）而非 independence（推过头）。',
 tmpl:'<table class="tk"><tr><th>2013·T4·37</th><th>主体 ｜ 判</th></tr>'
     +'<tr><td>A States&#39; independence</td><td>州 ｜ 推过头</td></tr>'
     +'<tr><td>B Federal officers&#39; duty to withhold</td><td>联邦官员 ｜ share 的反面</td></tr>'
     +'<tr><td><b>C States&#39; legitimate role ✔</b></td><td>州 ｜ ← allowed to verify</td></tr>'
     +'<tr><td>D Congress&#39;s intervention</td><td>国会 ｜ 依据句的主语</td></tr></table>',
 traps:['<b>依据句可以借措辞、不能给主体</b>：37C 的 role in immigration enforcement 借了④❷ joint federal-state immigration enforcement 的词，但主体取自④❶。',
        '<b>本篇三处「裁决 ＋ 依据」都挂国会</b>：③❷ occupied the field（推翻）· ④❷ envisioned joint enforcement（保留）· ⑦❷❸ could but never did（驳回白宫）——<b>国会是规则，不是球员</b>。',
        '<b>与 <a href="#R69">R69</a> 同一个判据</b>：R69 防「意图被别人的话抢走」（2010·T4·38），R153 防「结论被依据抢走」（2013·T4·37）——<b>题干点了谁，就只认谁那一句</b>。',
        '<b>2017·T4·38</b>：⑤❶ The court’s ruling is legally sound（裁决的评价）· ⑤❷ must be allowed to（推论）· ⑤❸ The basic compact … assumes that（依据）——题干 based on the assumption 只取依据句 ⟹ C；A、B 从推论句⑤❷ 借词。'],
 refs:[{p:'2013_T4_移民法判决的两块比分牌.html',q:'col2',label:'2013·T4 · 02++ 专栏（三处裁决句 × 依据句）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q37',label:'2013·T4·37（D 国会进了答案）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q38',label:'2017·T4·38（评价 · 推论 · 依据三句分工）'}]}
,

{id:'R154', tier:'🔴', qt:'人物主张题（X claims／argues／insists that its…）· 评论文里转述对手观点时', title:'In effect 归结句：X argued that A, even if B. In effect, X claimed that C.——问 X 主张什么取 C；B 是让步从句，里面的词是干扰项工厂',
 trig:['定位段有 In effect／In essence／In other words／What this amounts to／boils down to','转述句里夹着 even if／although／while 让步从句','题干动词与归结句同词（claims ↔ claimed）'],
 flow:'① <b>给转述段的句子贴身份</b>：定性（借谁之口）→ 转述（argued that）→ 归结（In effect）；<br>'
     +'② <b>主张题取归结句</b>：它是作者替对方把话说透的版本，<b>往往比原话更极端——这是作者的立场，不是命题人的推过头</b>；<br>'
     +'③ <b>让步从句里的名词、动词先打问号</b>：它们是「对方承认的前提」或「极端假设」，不是主张本身；<br>'
     +'④ <b>回首段校验方向</b>：本篇①❷ 说政府企图打破平衡 ⟹ 「遵规守法、依赖各州」类选项一律反向（黄皮书技巧栏）。',
 tmpl:'<table class="tk"><tr><th>2013·T4·39 的原料</th><th>进了哪个选项</th></tr>'
     +'<tr><td>⑥❷ even if … complied with <b>federal statutes</b></td><td>39B established by federal statutes</td></tr>'
     +'<tr><td>⑥❷ even if state laws <b>complied with</b></td><td>39D rarely goes against state laws</td></tr>'
     +'<tr><td>⑥❸ <b>In effect</b> … could invalidate any … state law</td><td><b>39A outweighs ✔</b></td></tr></table>',
 traps:['<b>第二个归结句常在末段再出现</b>：⑦❹ <code>was in essence asserting that because…, no state should…</code>——40B 把这句<b>被驳回的主张</b>当成了事实。',
        '<b>与 <a href="#R151">R151</a> 是一家</b>：To be sure 让步句不降标题的档，even if 让步从句不是人物的主张——<b>让步句不承载立场</b>。',
        '<b>别把 in effect 读成「生效」</b>：<code>The law is in effect</code>（法律有效）与句首 <code>In effect,</code>（实际上）靠位置与逗号区分。',
        '<b>2016·T3·31C</b>：①❷ <code>even if you accept Friedman’s premise</code>——accept 是让步从句里「你」的假设动作，C approval 把它当成作者的立场。'],
 refs:[{p:'2013_T4_移民法判决的两块比分牌.html',q:'col3',label:'2013·T4 · 02+++ 专栏（定性 → 转述 → 归结）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q39',label:'2013·T4·39（B、D 同出 even if 从句）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q31',label:'2016·T3·31C（让步里的 accept）'}]}
,

{id:'R155', tier:'🟡', qt:'专名推断题（It can be inferred from Paragraph N that ＋ 历史事件／法律／名作）· 专名只在修饰语里出现一次', title:'文内推断只认文内逻辑：a defense of X going back to Y——Y 的立场＝它所修饰的 X 的立场；背景知识与文内方向相反时，背景知识让路',
 trig:['题干主语是一个历史法案、事件、学说，在原文只出现一次','它藏在分词短语／介词短语里（going back to／dating back to／rooted in／in reaction to）','你恰好熟悉它的背景，且背景与文内方向不一致'],
 flow:'① <b>查专名的成分</b>：主语？宾语？还是修饰语（本篇是修饰 defense of state privileges 的分词短语）；<br>'
     +'② <b>判修饰语的方向</b>：going back to／dating back to／rooted in／drawing on ＝ <b>顺承（同向）</b>；in reaction to／in defiance of／as opposed to ＝ <b>对立（反向）</b>；<br>'
     +'③ <b>用援引者的立场校验</b>：论据不会跟论点作对——斯卡利亚最护州，他援引的东西就站州一边；<br>'
     +'④ <b>最后才对照背景知识</b>，冲突时保留文内答案（题干 from Paragraph N 已把证据锁在本段）。',
 tmpl:'<table class="tk"><tr><th>2013·T4·38</th><th>指向</th></tr>'
     +'<tr><td>文内：defense of state privileges <b>going back to</b> the Acts</td><td><b>B stood in favor of the states ✔</b></td></tr>'
     +'<tr><td>史实：1798 年<b>联邦</b>法律，州权派反对它</td><td>D undermined the states&#39; interests ／ A violated the Constitution</td></tr></table>'
     +'<p style="margin-top:8px">斯卡利亚援引的其实是<b>围绕该法的州权之争</b>；文章省了「之争」二字，题目按文内逻辑出。</p>',
 traps:['<b>与 <a href="#R8">R8</a> 常识陷阱是一枚硬币的两面</b>：R8 防「选项现实为真、原文没说」（多选）；R155 防「选项现实存疑、文内只能推出它」（误排）——<b>原文是唯一的证据来源</b>。',
        '<b>「史实注」≠「争议题」</b>：2013·T2·27 的争议在文内（the industry 在不同段指两拨人，证据链打架，⟹ <a href="#R144">R144</a>）；2013·T4·38 的冲突在文外（⑤段只有一个方向信号）。<b>前者认下争议按段内口径选，后者直接按文内选</b>。',
        '<b>2016·T4·37C／38D</b>：常识里救报纸要找新读者、扩大受众，原文⑥❹ 却是做给「已经」迷上它的人——<b>文内方向与常识相反时听文内</b>；本篇这一族干扰项扩展成新卡 R208。'],
 refs:[{p:'2013_T4_移民法判决的两块比分牌.html',q:'col4',label:'2013·T4 · 02++++ 专栏（文内 × 史实 × 题干三层表）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'q38',label:'2013·T4·38（going back to 顺承 ⟹ B）'},
       {p:'2013_T4_移民法判决的两块比分牌.html',q:'bg',label:'2013·T4 · 00+ 背景表（Alien and Sedition Acts 史实）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q37',label:'2016·T4·37C（找新读者＝常识方向）'}]}
,

{id:'R156', tier:'🔴', qt:'完形 · 研究报道型文章（speculated／theorised → To test this idea → found）', title:'假说里的例子是实验发现的预告片：把「比方」与「发现」逐格对齐，数据段的方向空由比方反推',
 trig:['首段出现 speculated／theorised／hypothesised／suspected 这类「提出猜想」的动词','猜想之后紧跟一个 For example 的具体情境（一位法官、一个医生、一位老师）','下文用 To test this idea／turned to／found that 转入真实研究'],
 flow:'① <b>先圈研究者动词链</b>：speculate → theorise → <b>test</b> → study → find——链条中间缺的那一环就是空格；<br>'
     +'② <b>把比方拆成四格</b>：谁在判断 · 前面发生了什么 · 于是后面怎样 · 为什么；<br>'
     +'③ <b>读到发现句，照同样四格填</b>：两边的<b>方向必须一致</b>（前面宽 ⟹ 后面严），连接方式常常原样复现（if ↔ if…then）；<br>'
     +'④ <b>方向空拿不准时，去另一边找同一格</b>。',
 tmpl:'<b>2013 完形：法官 ↔ 面试官</b>'
     +'<table class="tk"><tr><th>①❹ 比方（法官）</th><th>④❶ 发现（面试官）</th><th>空</th></tr>'
     +'<tr><td>decision-makers → <b>a judge</b></td><td>admissions officers</td><td>4 For example</td></tr>'
     +'<tr><td>already sentenced five or six only to community service</td><td>previous candidate 0.75 higher than the one <b>17</b> that</td><td>17 before</td></tr>'
     +'<tr><td>more likely … <b>7</b> he had already …</td><td>found <b>if</b> … then …</td><td>7 if</td></tr>'
     +'<tr><td>send someone to prison（判重）</td><td>next applicant would <b>18</b>（给分低）</td><td>18 drop</td></tr></table>',
 traps:['<b>镜像给方向，不给原词，也不一定每格都有</b>：「为什么」那一格（fearful of appearing too soft）在发现句里是空的——<b>5 题只能在比方自己的句子里解</b>。',
        '<b>比方是推测，不是数据</b>：theorised／might 所在的句首不能填 On average 这类要数据的词（4B）；真正的 average 出现在发现句（by an average of）。',
        '<b>同族三刀</b>：<a href="#R73">R73</a> 定义句 ↔ 改写句（极性不变）· <a href="#R132">R132</a> 问题句 ↔ 对策句（极性常翻）· <b>R156 比方 ↔ 发现（换场景不换方向）</b>——都是「同一个意思出现两次，两处互为答案」。'],
 refs:[{p:'2013_完形_面试打分的当日偏见.html',q:'map',label:'2013·完形 · 02+ 法官 ↔ 面试官同构表（本页最值钱的一段）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q4',label:'2013·完形·4（大类 → 成员 ⟹ For example）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q7',label:'2013·完形·7（比方与发现同一个 if）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q8',label:'2013·完形·8（动词链中间一环 test）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q18',label:'2013·完形·18（判重 ↔ 给分低）'}]}
,

{id:'R157', tier:'🔴', qt:'完形 · 空格前后紧贴介词短语（___ sth into consideration／___ on a scale of／___ out of 800／soft ___ crime）', title:'介词先于词义：先把「空格＋宾语＋介词」整个框架写出来，搭不上的当场划掉——四个都搭得上时介词失效，改看因果',
 trig:['空格后隔一个宾语就是 into／on／out of／by／to 这类介词短语','四个选项是 put／get／take／give 这种最简单的动词，词义比不出高下','空格本身就是介词，前面是 soft／tough／hard 这类形容词'],
 flow:'① <b>写出完整框架</b>：___ numerous factors <b>into consideration</b>、___ applicants <b>on a scale of</b> 1 to 5；<br>'
     +'② <b>四个选项逐个套框架</b>：只能与名词搭、不能与介词搭的，一律划掉（give／get consideration 都成立，加上 into 只剩 take）；<br>'
     +'③ <b>被动后置定语 ___ by sb</b>：把 by 后的人放回主语念一遍（officers ___ interviews ⟹ conducted）；<br>'
     +'④ <b>介词失效检查</b>：四个选项都接同一个介词（fond／fearful／capable／thoughtless 全接 of）⟹ 语法筛不掉，回到句子的因果。',
 tmpl:'<b>2013 完形③段一段四个：打分场景的框架</b>'
     +'<table class="tk"><tr><th>框架</th><th>答案</th></tr>'
     +'<tr><td>interviews ___ <b>by</b> 31 admissions officers</td><td>12 conducted</td></tr>'
     +'<tr><td>___ applicants <b>on a scale of</b> one to five</td><td>13 rated</td></tr>'
     +'<tr><td>___ numerous factors <b>into consideration</b></td><td>14 took</td></tr>'
     +'<tr><td>a standardised exam which is ___ <b>out of</b> 800 points</td><td>16 marked</td></tr>'
     +'<tr><td>too soft ___ crime</td><td>6 on</td></tr></table>',
 traps:['<b>中文直译陷阱</b>：「放入考虑」诱人选 put … into consideration，英语的固定说法是 take（14A）。',
        '<b>同一个介词两种意思</b>：out of ＋ 分数＝满分（marked out of 800）；out of ＋ 一群同类＝从中（select A out of B）——16A selected 正是拿第二义造的干扰项。',
        '<b>介词失效</b>：2013 完形 5 题四个形容词都接 of，thoughtless 看着「孤立」却不是答案——此时要补全「他为什么判重」的因果（fearful）。',
        '<b>介词失效又一例</b>：2014 完形 10 题 excel／feature／persist／believe <b>全接 in</b>——改看谓语 is inherited（先天）；19 题四个 ___ on 同理，看宾语 strengths。⟹ <b>同带一个小词的短语，要连意思四个一组背</b>。',
        '<b>位置被占</b>：2014 完形 17 题 <code>provides detailed feedback ___ your performance</code>——provide sth for sb／provide sb with sth 的位置已被 feedback 占了，剩下的介词归名词 feedback 管（on）。',
        '<b>介词失效，2016 完形一篇三道</b>：12 grow／part／deal／live <b>全接 with</b>（靠 up to a year 要延续性 ＋ 前一个谓语 move in with）· 17 change／bring／shape／push <b>全接 into</b>（靠婚前财产原样带进）· 19 clear／warm／show／break <b>全接 up</b>（靠冒号后是证据）。同篇 <b>15 题介词有效</b>：exposed 只接 to，被 with 当场筛掉。⟹ 先试介词，筛不掉就放画面（接 <a href="#R212">R212</a>）。',
        '<b>介词失效，2017 完形一篇四道（本站最多）</b>：2 equal／restricted／connected／inferior <b>全接 to</b>（靠 and 同向）· 7 devoted／exposed／lost／attracted <b>全接 to</b>（靠实验流程）· 14 associated／equipped／presented／compared <b>全接 with</b>（靠压力与感冒的关联）· 17 attribute／commit／transfer／return <b>全能 ___ A to B</b>（靠因果方向，接 <a href="#R228">R228</a>）；另 4 题四个动词全接 doing。',
        '<b>介词（结构）失效，2018 完形一篇三道</b>：7 connect／compete／consult／compare <b>全接 with</b>（靠 herding instinct）· 14 added／transferred／introduced／entrusted <b>全能 be ___ to</b>（靠实验第一步是认识）· 18 forced／willing／hesitant／entitled <b>全能 be ___ to do</b>（靠句尾 demonstrating that they trusted）。同篇 8 题介词有效：exposure 只接 to（of 是揭露）。',
        '<b>介词（结构）失效，2019 完形两道</b>：2 put／take／run／come <b>全接 on</b>（靠 run on＝靠……运转、下半句 batteries can die）· 20 lead／adapt／restrict／expose <b>全接 sb to</b>（靠首段 navigate back to civilization）；5 题介词只筛掉一半（around／away 接 to 都别扭）。'],
 refs:[{p:'2014_完形_像练肌肉一样练大脑.html',q:'q10',label:'2014·完形·10（四个全接 in，介词失效）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q17',label:'2014·完形·17（feedback on；for／with 位置已占）'},{p:'2014_完形_像练肌肉一样练大脑.html',q:'q16',label:'2014·完形·16（keep ___ of 只有 track）'},{p:'2013_完形_面试打分的当日偏见.html',q:'q14',label:'2013·完形·14（加上 into 只剩 take）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q13',label:'2013·完形·13（on a scale of ⟹ rated）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q16',label:'2013·完形·16（out of 两义）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q12',label:'2013·完形·12（by 后的人放回主语）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q5',label:'2013·完形·5（反例：四个都接 of，介词失效）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q12',label:'2016·完形·12（四个全接 with，介词失效）'},
       {p:'2017_完形_拥抱有益健康.html',q:'q14',label:'2017·完形·14（四个全接 with，介词失效）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q7',label:'2018·完形·7（四个全接 with，介词失效）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q8',label:'2018·完形·8（exposure to，介词有效）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q2',label:'2019·完形·2（四个全接 on，介词失效）'}]}
,

{id:'R158', tier:'🟡', qt:'完形 · 数字句（previous／next／the one before that · by an average of · This might sound small, but …）', title:'数字句三件套：比较对象先画时间线（别让两格站同一个人）· 变化方向找下一句的回指名词 · sound small, but 之后必是「代价不小」',
 trig:['一句话里出现 previous、next、the one … that 三个人或三个时间点','变化动词空后面跟着 by ＋ 数量','下一句以 This might sound small, but … 或 such a ＋ 名词 开头'],
 flow:'① <b>画三格时间线</b>：[更早那位] → [上一位 previous] → [下一位 next]；<b>哪个选项让两格重合，直接划掉</b>；同一句的坐标系要统一（时间轴 before／after，数值轴 above／below）；<br>'
     +'② <b>变化方向不急着填</b>，往下读一句找 <code>such a decrease／this rise／the drop</code>；<br>'
     +'③ <b>认放大句</b>：<code>X might sound small, but …</code> ⟹ but 后面是「要补回来代价多大」，空格往「抵消（undo／offset）」「所需（necessary）」上想；<br>'
     +'④ <b>比较从句的空拿主句动词去对</b>：need ⟹ necessary。',
 tmpl:'<table class="tk"><tr><th>2013 完形④段</th><th>锁住哪个空</th></tr>'
     +'<tr><td>previous … higher than that of the one ___ that … the next applicant</td><td>17 before（after＝下一位本人）</td></tr>'
     +'<tr><td>下一句 such a <b>decrease</b></td><td>18 drop（jump 反向、fluctuate 无方向）</td></tr>'
     +'<tr><td>This might sound small, but to ___ the effects … need 30 more points</td><td>19 undo</td></tr>'
     +'<tr><td>30 more … than would otherwise have been ___（主句 need）</td><td>20 necessary</td></tr></table>',
 traps:['<b>两个 that 指两样东西</b>：than <b>that</b> of（＝the score）· the one before <b>that</b>（＝the previous candidate）——读混了就会选 after。',
        '<b>by 是差额，to 是终值</b>：drop by 0.075 points（降了）vs drop to 3.2（降到）。',
        '<b>「变化」动词先分有方向与没方向两栏</b>：rise／jump／drop／fall vs fluctuate／vary／float；by ＋ 数量要有方向的那栏。'],
 refs:[{p:'2013_完形_面试打分的当日偏见.html',q:'timeline',label:'2013·完形 · 02++ 三人时间线与数字链'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q17',label:'2013·完形·17（after 让两格重合）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q18',label:'2013·完形·18（such a decrease 回指）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q19',label:'2013·完形·19（放大句 ⟹ undo）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q20',label:'2013·完形·20（主句 need ⟹ necessary）'}]},

{id:'R159', tier:'🔴', qt:'新题型 · 选句填空（空格后一句以 This／That 开头 ＋ 评语）', title:'回指评价句：This／That 后面的评语就是空格的「类型说明书」——shame 要坏事、amount 要数量、create 要安排',
 trig:['空格后一句以 This is a／This is an／That should／This means／This has led to 开头','This／That 后面直接跟 be ＋ 名词或 should ＋ 动词，而不是跟一个名词（this pyramid）','几个选项的头钩都挂得上，一时分不出'],
 flow:'① 每个空<b>先读下一句</b>，圈出句首单独作主语的 <b>This／That</b>；<br>'
     +'② 把它后面的评语翻成<b>类型</b>：a shame／a pity／a problem ⟹ <b>坏事</b>；an adequate amount／too much ⟹ <b>数量</b>；should create／will lead to／help to ⟹ <b>一项会产生效果的安排</b>；good news／welcome ⟹ <b>好事</b>；because／the reason ⟹ <b>待解释的结果</b>；<br>'
     +'③ 七项里<b>先划掉类型不对的</b>——通常只剩一项；<br>'
     +'④ 再用头钩复核。',
 tmpl:'<b>2013 新题型三空，只用前三步就锁死：</b>'
     +'<table class="tk"><tr><th>下一句开头</th><th>空格类型</th><th>谁</th></tr>'
     +'<tr><td><code>This is a <b>shame</b>—the community should be grasping…</code></td><td>坏事（该做没做）</td><td><b>F</b> reluctant ＋ up in arms</td></tr>'
     +'<tr><td><code>This is an adequate <b>amount</b></code></td><td>数量</td><td><b>G</b>（七项唯一带数字）</td></tr>'
     +'<tr><td><code>That should <b>create</b> more collaborative endeavors</code></td><td>会产生协作的安排</td><td><b>C</b> integrate with other categories</td></tr></table>'
     +'<p style="margin-top:8px"><b>⭐ 与 <a href="#R136">R136</a> 是尾钩的两种形态</b>：R136 是「下文把新词当旧信息」⟹ 去七项里找<b>那个词</b>；本卡是「下文给整句下评语」⟹ 去七项里找<b>那个类型</b>。'
     +'类型钩连「没有任何共同词」的情形也管得住：G 与 <code>This is an adequate amount</code> 之间一个共同词都没有，照样锁死。</p>',
 traps:['<b>This 后面接名词时不归本卡</b>：<code>this pyramid of production</code>／<code>this separation</code> 是指代<b>某个词</b>，走 <a href="#R53">R53</a>（先行词紧邻）与 <a href="#R109">R109</a>（同源换词性）。本卡只管 This／That <b>单独作主语、回指整句</b>的情形。',
        '<b>评语会被药方类选项骗</b>：2013·42 的 D（The solution is to change the mindset）顺着上一段往下说很自然，可「一个解决方案怎么会是 a shame」——评语一对，当场出局。',
        '<b>先数距离</b>：空格与 This 之间若还隔着一句正文，This 通常回指那一句，而不是空格；2013 三处 This／That 全都紧挨着空格。',
        '<b>2015·44</b>：This doesn’t, however, make interpretation merely relative——评语要求 This 指一个「听上去像相对主义」的说法 ⟹ B（推向某些解读、遮蔽其他）；interpretations → interpretation 词形复现作旁证。'],
 refs:[{p:'2013_新题型_让社会科学有用起来.html',q:'tail',label:'2013·新题型 · 02+ 回指评价句总表'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'q42',label:'2013·新题型·42（This is a shame ⟹ F）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'q44',label:'2013·新题型·44（This is an adequate amount ⟹ G）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'q45',label:'2013·新题型·45（That should create ⟹ C）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q44',label:'2015·新题型·44（This doesn’t, however ⟹ B）'}]},

{id:'R160', tier:'🟡', qt:'新题型 · 选句填空（空格后文里的 too／also／强调 do／still）', title:'预设小词：Here, too 要求前面已有「同类一例」、强调 do 要求前面刚说过「很少做」——这个前提只能由空格给出',
 trig:['空格后一两句里出现 too／also／as well／either（同类）','肯定句里多出一个 do／does／did（When they do tackle…）','still／again／even 这类「承认前情」的副词'],
 flow:'① 圈出空格后文里的预设小词；<br>'
     +'② 把它<b>预设的前提</b>写成一句中文：too ⟹「前面已经有一处也是这样」；强调 do ⟹「平常很少这样做」；still ⟹「本以为会变」；<br>'
     +'③ 回头查：<b>空格之前</b>有没有说过这个前提？<b>没有 ⟹ 前提必须由空格给出</b>；<br>'
     +'④ 去七项里找说出这个前提的那一项。',
 tmpl:'<table class="tk"><tr><th>2013 新题型后文</th><th>它预设了什么</th><th>谁说出了前提</th></tr>'
     +'<tr><td><code>Here, <b>too</b>, the problems are social</code>（41 后第二句）</td><td>前面已有一例「问题是社会性的」</td><td><b>E</b> root causes in human behavior ＋ 气候一例</td></tr>'
     +'<tr><td><code>When social scientists <b>do</b> tackle practical issues</code>（43 后）</td><td>社科家平常很少碰现实问题</td><td><b>B</b> 1,600 of 100,000</td></tr></table>'
     +'<p style="margin-top:8px"><b>41 是头钩打平的标本</b>：D（The solution）、E（These issues）、F（such problems）三项都能回指上一句的全球挑战，黄皮书备选也是 D E F——<b>一个 too 判了胜负</b>。</p>',
 traps:['<b>too 要的是「同类」，不是「同词」</b>：E 里没有 social、没有 problems 这两个词，但「根子在人的行为 ＋ 气候一例」与「饥饿一例，问题在分配」是同一类论断。<b>比内容类型，不比词面。</b>',
        '<b>强调 do 很容易读漏</b>：When social scientists <u>do</u> tackle 读成 When social scientists tackle，预设就消失了，A（两个群体）与 B（很少）就分不开。',
        '阅读题里同一原理见 <a href="#R146">R146</a>（really／that simple 预设词定态度）：<b>小词不改字面意思，改的是「作者默认了什么」</b>。',
        '<b>预设小词也会长在选项里</b>（2015·42）：E 的 further 预设前面已有一轮推断 ⟹ 上家必是 ②❸ You infer。too／do 在正文里给空格提要求，further 在选项里给上一句提要求。'],
 refs:[{p:'2013_新题型_让社会科学有用起来.html',q:'q41',label:'2013·新题型·41（Here, too ⟹ E，三选一）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'q43',label:'2013·新题型·43（强调 do ⟹ B，二选一）'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'tail',label:'2013·新题型 · 02+ 总表下半'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q42',label:'2015·新题型·42（further 的预设）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'col2',label:'2019·T1 · 02++ 专栏（Much more could be done：more 预设前一段已做，回头收编美国一例）'}]},

{id:'R161', tier:'🟡', qt:'新题型 · 找多余项（「问题 → 原因 → 方案」议论文）', title:'三区分完还要比两件事：它要谁当上家（是不是正确项的下家）· 它的杠杆和作者亮出的方案是不是一个',
 trig:['文章是标准的问题 → 原因 → 方案三段式','两个多余项所在的区里都有空（不像 2009 那样整区没空）','某个选项以 The solution is／The key is 开头，而正文里作者自己已有 The trick is／The answer is 句'],
 flow:'① 按每段首句把正文分成三区，给七项各贴区号（These issues／Despite ＝ 问题；However the numbers／It could be that ＝ 原因；The solution／The idea／经费数字 ＝ 方案）；<br>'
     +'② 区里<b>没有空</b> ⟹ 该项多余（<a href="#R31">R31</a>／<a href="#R56">R56</a>）；<br>'
     +'③ 区里<b>有空</b>，再问：<b>它要谁当上家？</b>推测句、结论句、例证句要的上家若在另一个选项里，它就是那个选项的下家（<a href="#R137">R137</a>）；<br>'
     +'④ 方案区的选项再问：<b>它拉的杠杆，是不是作者自己亮出的那根？</b>不是 ⟹ 换了杠杆的第二张药方，多余。',
 tmpl:'<table class="tk"><tr><th>2013 多余项</th><th>区</th><th>死因</th></tr>'
     +'<tr><td><b>A</b> It could be that we are evolving two communities…</td><td>原因区（有空 43）</td><td>推测句要的现象「期刊论文里关键词很少」在 <b>B</b> 里 ⟹ B 的下家；B 占 43 后与第⑤段之间无空</td></tr>'
     +'<tr><td><b>D</b> The solution is to change the mindset…</td><td>方案区（有空 44、45）</td><td>作者的方案 ⑦❶ <code>The trick is to direct these funds better</code>，杠杆是<b>钱</b>；D 的杠杆是<b>观念</b></td></tr></table>'
     +'<p style="margin-top:8px"><b>「正确项的下家」连续两年</b>：2012 的 E（thus 的前提一半在 G）· 2013 的 A（推测的对象是 B 的数据）。做完五空，拿剩下两项各问一句「<b>它是不是某个答案的续篇？</b>」</p>',
 traps:['<b>D 词面最像</b>：Global challenges 对着 ②❶、social innovation 对着 E——多余项靠词面钓鱼，八篇里第五次（<a href="#R81">R81</a>）。',
        '<b>「作者亮出的方案」要找原话</b>：The trick is／The key is／The answer lies in／What is needed is。找到了，其余自称 The solution 的选项都要跟它比杠杆。',
        '<b>别用常识替作者选方案</b>：「改变学术界观念」在现实里完全可能是好办法，但本文从 ⑥❶ 到 ⑦❼ 一路在谈经费与资助类别——<b>选句填空只认这篇文章的方案</b>。',
        '<b>第三问：方向</b>（2015）：D 与全文同话题、同人称，却把重心拉回作者本意——做完五空，拿剩下两项问三句：是不是下家？是不是换了杠杆？是不是走反了方向？（<a href="#R197">R197</a>）'],
 refs:[{p:'2013_新题型_让社会科学有用起来.html',q:'zones',label:'2013·新题型 · 02++ 三区分区表'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'extra',label:'2013·新题型 · 03 两个多余项 ＋ 八篇总账'},
       {p:'2013_新题型_让社会科学有用起来.html',q:'q45',label:'2013·新题型·45（D 为什么进不来）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型 · E 是 G 的下家'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'extra',label:'2015·新题型 · 03 D 逆箭头'}]},

{id:'R162', tier:'🔴', qt:'政策／决策评论文 · 目的题与动机题成对出现时（was intended to ／ What prompted）', title:'说辞与动机：X was intended to…问方案本身（取政策文本），What prompted／motivated X…问人（取作者揭穿的那一层）——宣称的目的、当事人的辩护、On first hearing 的表象都是干扰项工厂',
 trig:['同一篇里既有 <code>The scheme／plan／policy was intended to…</code> 又有 <code>What prompted／motivated／drove X to…</code>','原文先把官方目的加引号复述（<code>In order to &quot;…&quot;</code>），再出现 <code>What motivated him … was</code>／<code>The real reason</code>','段里有 <code>he claimed</code> 的辩护 ＋ 作者的反问（<code>Help? Really?</code>）'],
 flow:'① <b>先把定位段分层</b>：宣称的目的（引号）→ 方案文本（Only if／There will now be）→ 当事人辩护（he claimed）→ 作者质疑（反问）→ 表象（On first hearing）→ 动机（What motivated him）；<br>'
     +'② <b>看题干动词</b>：<code>was intended to</code>／<code>is designed to</code>／<code>aims to</code> ⟹ 问<b>方案</b>，取「方案文本」层（用宣称目的辅助理解）；<code>What prompted／motivated</code>／<code>because</code> ⟹ 问<b>人</b>，取「动机」层；<br>'
     +'③ <b>给每个选项标层号</b>：取自「辩护」「表象」层的，两题都错；取自「方案文本」的放到动机题里也错，反之亦然。',
 tmpl:'<table class="tk"><tr><th>层（2014·T1）</th><th>挂在这一层的选项</th></tr>'
     +'<tr><td>①❶ 宣称目的 <code>&quot;change lives for the better&quot;</code></td><td>21B · 23A（词源）</td></tr>'
     +'<tr><td>①❷ 方案文本 <code>Only if … start looking for work</code></td><td><b>21C ✔</b> · 21A（细节 report）</td></tr>'
     +'<tr><td>②❹ 辩护 <code>help those on benefits … he claimed</code></td><td>23B</td></tr>'
     +'<tr><td>②❼ 表象 <code>On first hearing</code></td><td>23A · 25B</td></tr>'
     +'<tr><td>②❽ 动机 <code>What motivated him … protecting the taxpayer</code></td><td><b>23D ✔</b> · 23C（反向）</td></tr></table>'
     +'<p style="margin-top:8px">🔗 <b>与 <a href="#R69">R69</a> 反方向</b>：R69 防「反对者的引语被当成当事人的意图」；本卡防「当事人自己说的意图被当成真动机」。<b>问意图先找本人的话，问动机再找作者的揭穿。</b></p>',
 traps:['<b>表象层的词往往就是宣称目的的原话</b>：②❼ <code>trying to change lives for the better</code> 复述了①❶ 的口号——<b>23A 看起来有「原文两处支持」，其实两处都是说辞</b>。',
        '<b>受益方偷换</b>：动机句 <code>protecting the taxpayer</code> 被改成 <code>protect the unemployed</code>（23B）——同一个 protect，保护的人换了阵营。',
        '<b>动机句带 we were to understand／we are told 时照样取</b>：它表示作者保持距离，但文中给出的动机只有这一句，且与作者的批评同向（奥斯本关心的是钱不是人）。',
        '<b>2016·T2（跨年对照）</b>：2014·T1 拆奥斯本福利新政的说辞与动机，2016·T2 批奥斯本的住建偏好——⑤❸ <code>Under lobby pressure</code> 就是作者揭出的真实动因；29D <code>firm stand against lobby pressure</code> 把它反了过来。',
        '<b>2019·T2 三层版</b>：当初的目的（③❷ 过去时）· 学校的说辞（④ tend to emphasize that the goal …）· 学校的真实好处（⑤ That said … satisfies colleges’ own needs as well）——27 取第一层、28 取第三层，第二层是两题共用的陷阱；对照同卷 T1·21：那里的 The main purpose … is to 是政策文本，说辞就是目的。'],
 refs:[{p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'col1',label:'2014·T1 · 02+ 专栏（六层表）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q21',label:'2014·T1·21（was intended to ⟹ 方案文本）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q23',label:'2014·T1·23（What prompted ⟹ 动机句）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col1',label:'2016·T2 · 02+ 专栏（同一个奥斯本的两篇专栏）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q21',label:'2019·T1·21（one motive：取 ①❸ The main purpose … is to 的政策文本）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'q28',label:'2019·T2·28（④ 学校说的 vs ⑤ That said … own needs 学校得的）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'col5',label:'2019·T2 · 02+++++ 专栏（说辞与得利）'}]},

{id:'R163', tier:'🔴', qt:'作者观点题 · 态度题（驳论文 / 评论文，原文有 On first hearing / in X-land / we are told 一类句首框）', title:'视角框：On first hearing, …／But in Osborneland, …——框里的句子没有引号，却是对方的世界观；作者观点题从框里取词的选项一律先打问号',
 trig:['句首出现 <code>On first hearing／At first glance／On the face of it</code>','造地名、造人设：<code>in Osborneland</code>／<code>in the world of X</code>／<code>in X&#39;s eyes</code>','被动的理解：<code>we were to understand</code>／<code>we are told</code>／<code>it is claimed</code>','作者观点题的某个选项措辞很肯定，原料却来自这些句子'],
 flow:'① <b>通读时圈出所有框</b>，在卷边标「对方」；<br>'
     +'② <b>找作者的反驳</b>：框前或框后通常紧挨着作者自己的事实段，方向正相反（2014·T1 ③段夹在 ②❼ 与 ④❶ 两个框之间）；<br>'
     +'③ <b>作者观点题逐项查原料出处</b>：出自框内的判断 ⟹ 是对方的看法，除非作者另外明确认同，否则排除。',
 tmpl:'<table class="tk"><tr><th>框（2014·T1）</th><th>框里的判断 → 被造成的选项</th></tr>'
     +'<tr><td>②❼ <code>On first hearing,</code></td><td><code>indulgent system … subsidises laziness</code> → <b>25B</b>（一半）· <code>trying to change lives for the better</code> → <b>23A</b></td></tr>'
     +'<tr><td>④❶ <code>But in Osborneland,</code></td><td><code>your first instinct is to fall into dependency … indulge your falsehood</code> → <b>25B</b>（另一半）· 24D guilty 的背景</td></tr></table>'
     +'<p style="margin-top:8px">⚠️ <b>人称陷阱</b>：③段的 <code>you</code> 是「设身处地的你」（作者的论证），④❶ 的 <code>your first instinct</code> 是「奥斯本想象中的你」——<b>区别只在 But in Osborneland 三个词</b>。</p>',
 traps:['<b>框里常有 obviously／of course 一类笃定词</b>：那是作者在模仿对方的口气，不是作者自己的判断（②❼ <code>an obviously indulgent system</code>）。',
        '<b>与引号的分工</b>：引号标出「这个词是他的」（<a href="#R29">R29</a>），视角框标出「这一整句是他的」——框比引号管得宽，也更难发现。',
        '<b>判据不是语气，是有没有被作者反驳</b>：④❷ <code>It is as though … never happened</code> 也是一种框（虚拟），但它是作者在嘲讽，框里的「改革从未发生」是作者认定的反事实。',
        '<b>2015·T1</b>：④❷ <code>Symbolic of national unity as they claim to be</code>——as 让步倒装里的 <code>as they claim</code> 就是视角框：「象征统一」是王室自己的说法，作者紧接着说他们的历史 embodies 特权。'],
 refs:[{p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'col2',label:'2014·T1 · 02++ 专栏（视角框 ＋ 引号清单）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q25',label:'2014·T1·25B（两个框里的词拼成的选项）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'s11',label:'2014·T1 · 长难句 s11（But in Osborneland）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'s8',label:'2015·T1 · 长难句 s8（as they claim to be）'}]},

{id:'R164', tier:'🟡', qt:'段落情绪概括题（makes one feel ___／X felt ___，选项是四个情绪形容词）', title:'情绪概括取公因式：段里列了一串情绪和处境——答案是能把它们全盖住的温和上位词（常降档）；另起一种带对象的情绪（被侮辱／愤怒／内疚）就是编的',
 trig:['题干 <code>makes one feel</code>／<code>X felt</code>／<code>X&#39;s feeling can be described as</code> ＋ 段落限定','四个选项都是单个情绪形容词（insulted／uneasy／enraged／guilty）','定位段出现多个情绪词、处境词（terrifying／embarrassing／not wanted／excluded）'],
 flow:'① <b>列清单</b>：段里所有情绪词、处境词逐个写下；<br>'
     +'② <b>求公因式</b>：它们一起指向什么（痛苦、不安、没着落）；<br>'
     +'③ <b>逐项问「有对象吗」</b>：insulted（被谁侮辱？）· enraged（冲谁发怒？）· guilty（对谁有愧？）——需要一个原文没有的对象的，排除；<br>'
     +'④ <b>剩下的选项再比范围</b>：能和每一个描述都不冲突的，就是答案，哪怕它比原文最强的词弱得多。',
 tmpl:'<table class="tk"><tr><th>2014·T1·24 原文</th><th>干扰项从哪个碎片推出来</th></tr>'
     +'<tr><td>③❷ <code>psychologically embarrassing</code> ＋ ③❸ <code>not wanted … excluded</code></td><td>A insulted（被排斥 ≠ 被侮辱）</td></tr>'
     +'<tr><td>③❷ <code>support is minimal and extraordinarily hard to get</code></td><td>C enraged（难拿 ≠ 愤怒）</td></tr>'
     +'<tr><td>③❷ <code>financially terrifying</code> ＋ ③❹ <code>feed yourself and your family</code></td><td>D guilty（没钱养家 ≠ 内疚）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ <b>B uneasy</b> 盖住 hurting ＋ terrifying ＋ embarrassing ＋ not wanted ＋ excluded。<b>它比 terrifying 弱得多——概括题宁取弱的上位词，不取强的旁支词</b>。</p>',
 traps:['<b>与 <a href="#R12">R12</a> 强度尺的分工</b>：R12 管作者态度「方向对了再比强度」；本卡管段落情绪「范围全了就不必比强度」——两者别混用。',
        '<b>干扰项会偷站到对方视角里</b>：24D guilty 暗含「失业是自己的错」，正是④❶ Osborneland 的看法（<a href="#R163">R163</a>）。',
        '<b>思路同 <a href="#R89">R89</a>（问群体取公因式）</b>：R89 对人求公因式，本卡对情绪词求公因式；C enraged 同时是 <a href="#R37">R37</a>「客观事实 ⟹ 主观评价」的实例。'],
 refs:[{p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'col3',label:'2014·T1 · 02+++ 专栏（情绪清单 × 干扰项）'},
       {p:'2014_T1_奥斯本新政的台面上与台面下.html',q:'q24',label:'2014·T1·24（uneasy：取公因式）'}]},
{id:'R165', tier:'🔴', qt:'因果细节题（题干 due to ／ because ／ adds to ／ originates from，原文找不到 because／so／as a result）', title:'隐性因果词：没有连词时，致使动词本身就是箭头——tempting ／ This leaves … with ／ means that ／ This keeps ／ isolates … from，左因右果；左边是 This 就回溯上一句',
 trig:['题干问因（<code>due to</code>／<code>because</code>／<code>adds to</code>／<code>Hindrance … originates from</code>），定位段里却一个因果连词都没有','定位句带分词结果状语：<code>A did X, tempting／leading／forcing sb to …</code>','定位句以 <code>This／It</code> 开头，接致使动词：<code>This leaves／keeps／makes／means that …</code>'],
 flow:'① <b>先定问因还是问果</b>：due to／because／adds to／originates from 问因；leads to／makes sb feel／result 问果；<br>'
     +'② <b>在原文找到题干描述的那个「果」</b>（或「因」）；<br>'
     +'③ <b>找贴着它的致使动词</b>：tempt · leave … with · keep · make · mean · isolate … from · cause · drive——<b>动词左边是因，右边是果</b>；<br>'
     +'④ <b>左边是 This／It 时，回溯上一句</b>，把上一句拆成要素逐个与选项配对；<br>'
     +'⑤ <b>同句里 than／as 后面的名词先标「比较基准」</b>，它不是原因。',
 tmpl:'<table class="tk"><tr><th>原文（2014·T2）</th><th>因 → 果 → 题</th></tr>'
     +'<tr><td>②❷ <code>made skyscrapers-full of money, <b>tempting</b> ever more students to pile into law schools</code></td><td>赚大钱 → 学生涌入 ⟹ <b>26D attraction of financial rewards</b></td></tr>'
     +'<tr><td>③❹ <code><b>This leaves</b> … graduate with $100,000 of debt</code></td><td>This ＝ ③❸ 三要素 → 债务 ⟹ <b>27B</b>（回溯）</td></tr>'
     +'<tr><td>⑤❸ <code><b>This keeps</b> fees high and innovation slow</code></td><td>外人不得持股 → 收费高（后果层，不是 29 答案）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ <b>26B inflation</b> 取自②❶ <code>grew twice as fast <u>as inflation</u></code>——<b>比较基准不是原因</b>。</p>',
 traps:['<b>比较基准冒充原因</b>：<code>twice as fast as inflation</code> 的 inflation 是尺子（26B）——than／as 后面的名词一律先标「基准」（<a href="#R1">R1</a> 原词复现的一种）。',
        '<b>This 句本身不含答案</b>：27 题的答案在 This leaves 的<b>上一句</b>里；只读 This 句会被 <code>on top of undergraduate debts</code> 带去选 27A。',
        '<b>分工</b>：<a href="#R5">R5</a> 管「链很长别停在半路」、<a href="#R99">R99</a> 管「起点被换了人」；本卡管更前面一步——<b>没有连词时先把链认出来</b>。',
        '<b>2016·T4·36</b>：②❶ <code>there’s plenty of incentive to ditch print</code>——incentive（动因）没有 because 却在说「有很多理由」；下面三句各给一条：成本（❷ ⟹ 36D）· 读者（❸）· 收入（❹）。',
        '<b>2017·T2·27</b>：②❸ <code>where conditions allow telescopes to obtain images of unsurpassed clarity</code>——allow 是隐性因果箭头，原因在「高出稠密大气层」⟹ C geographical features；②❷ home to … telescopes 是结果（⟹ <a href="#R220">R220</a>）。'],
 refs:[{p:'2014_T2_美国律师业的两个病根.html',q:'col1',label:'2014·T2 · 02+ 专栏（七种隐性因果形式表）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q26',label:'2014·T2·26（tempting 左因右果）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q27',label:'2014·T2·27（This leaves … with 回溯三要素）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q36',label:'2016·T4·36（incentive 引出三条理由）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q27',label:'2017·T2·27（allow 连起原因与结果）'}]},

{id:'R166', tier:'🟡', qt:'抽象标签词题（X is considered／called &quot;restrictive／flawed／excessive&quot; partly because …）', title:'标签词三层：作者先贴一个评价词，后文分「规定／后果／辩护」三层落实——问「为什么叫 X」只认规定层；This keeps／makes 是后果，insist that 是反对派的辩护',
 trig:['题干把原文一个抽象形容词加引号：<code>is considered &quot;restrictive&quot; because</code>','标签句后紧跟一句带绝对词的具体规定（<code>may not … any</code>／<code>no</code>／<code>only</code>）','同段还有 <code>This keeps／makes …</code> 与 <code>X insist／claim that …</code>'],
 flow:'① <b>找标签句</b>（题干引号词首次出现处）；<br>'
     +'② <b>把后面几句分层</b>：规定（它具体禁止／要求什么）· 后果（This keeps／makes 回指规定）· 辩护（opponents／critics insist that）；<br>'
     +'③ <b>只取规定层</b>做同义替换；<br>'
     +'④ <b>规定层里再做主体校验</b>：被禁止的是谁（non-lawyers 不是 lawyers）。',
 tmpl:'<table class="tk"><tr><th>层（2014·T2 ⑤段）</th><th>挂在这一层的选项</th></tr>'
     +'<tr><td>规定 ⑤❷ <code>non-lawyers may not own any share</code> ＋ ⑤❹ <code>keeping outsiders out</code></td><td><b>29D ✔</b> bans outsiders&#39; involvement · 29B（non- 被删）</td></tr>'
     +'<tr><td>后果 ⑤❸ <code>This keeps fees high and innovation slow</code></td><td>（本题未设项）</td></tr>'
     +'<tr><td>辩护 ⑤❹ <code>opponents … insist that … isolates lawyers from the pressure to make money</code></td><td>29A due profits · 29C ethical situation</td></tr></table>',
 traps:['<b>题干的 partly</b>：只需说中一面，别因为 D 没提「费用高」就嫌它不全。',
        '<b>辩护层的词最像答案</b>：money、ethically 都在原文，而且离标签只隔两句——但说话人是反对派，作者用 In fact 反驳（<a href="#R130">R130</a>）。',
        '<b>与 <a href="#R35">R35</a>／<a href="#R94">R94</a> 的分工</b>：那两张管定义在前、例子在后；本卡管标签在前、内容紧跟，且内容分三层。同型还有 2014·T1 的 <a href="#R162">R162</a>（说辞 vs 动机）。'],
 refs:[{p:'2014_T2_美国律师业的两个病根.html',q:'col2',label:'2014·T2 · 02++ 专栏（标签词三层表）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q29',label:'2014·T2·29（restrictive ⟹ 规定层）'}]},

{id:'R167', tier:'🔴', qt:'「问题—原因—对策」型社论（One is … ／ The other reason … ／ Reforming … would help … but …）· 细节题 ＋ 阻力题 ＋ 主旨题', title:'问题—原因—对策表：读到 One is 就在卷边画 2×2（原因 × 对策）再加一行阻力——细节题一题一格，阻力题只取 but 后消极句的主语，主旨题正解必须同时装下「问题」和「对策」',
 trig:['原文有 <code>There are many reasons for this. One is …</code> ／ <code>The other reason why …</code>','对策段里夹着 <code>Sensible ideas have been around, but X have been too … to implement them</code>／<code>opponents … insist that</code>','题干 <code>Hindrance／obstacle／barrier to the reform</code> 或 <code>the author mainly discusses</code>'],
 flow:'① <b>画表</b>：问题｜原因一｜阻力一｜对策一｜原因二｜阻力二｜对策二；<br>'
     +'② <b>细节题</b>：先看题干落在哪一格，只在那一格里找；<br>'
     +'③ <b>阻力题</b>：取「but ＋ 主语 ＋ 消极谓语（too … to／refuse／oppose／insist）」的主语；同段的受益方、论据、别段的人都是干扰项；<br>'
     +'④ <b>主旨题</b>：给每个选项数格子——只占一轮原因、只占一句的都排除，留下「problem ＋ solutions」。',
 tmpl:'<table class="tk"><tr><th>格（2014·T2）</th><th>题 ／ 干扰项</th></tr>'
     +'<tr><td>阻力一 ④❷ <code>state-level bodies … too conservative to implement</code></td><td><b>28C ✔</b> · 28B 受益方 · 28D 论据 · 28A 别段的人</td></tr>'
     +'<tr><td>原因二 ⑤ ＋ 对策二 ⑥（一行）</td><td>30A 只占一行、还把对策说成成因</td></tr>'
     +'<tr><td>原因一 ③❸ 一句</td><td>30B successful lawyer · 30D undergraduate studies</td></tr>'
     +'<tr><td>首段问题 ＋ ④⑥ 对策</td><td><b>30C ✔</b> a problem … and solutions to it</td></tr></table>',
 traps:['<b>many reasons 却只写两个</b>：The other reason ＝ 两个中的另一个，别去找第三个，也别把任一个原因当全文。',
        '<b>论据不是阻力</b>：④❺ 「考试够严」是支持改革的理由（28D，<a href="#R90">R90</a> 逻辑角色）；<b>受益方不是阻力</b>：④❶ help both lawyers and their customers（28B，<a href="#R96">R96</a>）。',
        '<b>同一骨架三种题型</b>：完形 <a href="#R132">R132</a>（问题—对策镜像）· 新题型 <a href="#R161">R161</a>（找多余项）· 阅读本卡；主旨题另见 <a href="#R26">R26</a>、<a href="#R125">R125</a>。',
        '<b>⚠️ 2017 修正</b>：「主旨题正解必须同时装下问题和对策」只在选项里有这样一项时成立（2014·T2·30C）。2017·T1·25 是同一副骨架，四个标题却没有一项装得下两头——<b>退一步取贯穿首尾的线</b>：长队从①走到⑦，预检只在⑤⑥⑦ ⟹ A Getting Stuck in Security Lines（⟹ <a href="#R218">R218</a>）。'],
 refs:[{p:'2014_T2_美国律师业的两个病根.html',q:'col3',label:'2014·T2 · 02+++ 专栏（问题—原因—对策七格表）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q28',label:'2014·T2·28（阻力格：but ＋ too … to）'},
       {p:'2014_T2_美国律师业的两个病根.html',q:'q30',label:'2014·T2·30（主旨题数格子）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'col3',label:'2017·T1 · 02+++ 专栏（本卡的修正：装不下两头时取贯穿首尾的线）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q36',label:'2018·T4·36（There are many reasons ＋ Fundamentally 只给两个根因，partly 取一）'}]},
{id:'R168', tier:'🔴', qt:'人物观点题 ／ 作者观点题（The critics think … ／ The author believes …），原文没有引号、声音多层', title:'设问的答案归谁：What’s not to like? Quite a lot, according to a handful of X——问是作者替读者问的，答是 X 给的，还被 a handful 打了折；社论里 As 本刊 has pointed out (before) 才是作者本人',
 trig:['原文用设问句转场：<code>What’s not to like?</code>／<code>So what’s the problem?</code>，答句后紧跟 <code>according to</code>／<code>say X</code>','社论里出现 <code>As <i>Nature</i>／<i>The Economist</i>／this newspaper has pointed out (before)</code>','题干分别问 <code>The critics think</code> 与 <code>The author believes</code>——同一篇里两股相反的声音'],
 flow:'① <b>先给每一段标声音</b>：转述标记（as … said · they say · according to · say X）挂在哪句，那句就归谁；<br>'
     +'② <b>设问句不等于作者自答</b>：看答句后面有没有转述标记——有，答案归被引者；<br>'
     +'③ <b>社论自引＝作者</b>：As 本刊 has pointed out（认同型动词）＝ 编辑部自己的立场；同刊「另一篇报道 discusses」只是材料；<br>'
     +'④ <b>量词就是态度</b>：a handful of／some（少数）对 most（多数）⟹ 作者在给批评降权；<br>'
     +'⑤ <b>题干不给说话人时（is seen as），别替它找说话人</b>，只取谁都认的事实层。',
 tmpl:'<table class="tk"><tr><th>声音（2014·T3）</th><th>题</th></tr>'
     +'<tr><td>②❷ <code>Quite a lot, <b>according to a handful of scientists</b></code> · ②❹ <code>say scientists</code></td><td><b>32B</b>（The critics think）</td></tr>'
     +'<tr><td>④❶ <code><b>As <i>Nature</i> has pointed out before</b></code></td><td><b>33A · 34D</b>（作者本人）</td></tr>'
     +'<tr><td>⑤ <code>two things seem clear</code> · <code>It is wise to</code></td><td><b>35B</b>（The author believes）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 31 题干 <code>is seen as</code> 无主语 ⟹ 取①段事实层（US $3-million · lucrative awards）⟹ <b>31C</b>。</p>',
 traps:['<b>设问读成作者自答</b>：What’s not to like? Quite a lot 若当成作者的话，就会把②段批评当作者立场，35 题误选 A／D。',
        '<b>「本刊另一篇报道」≠ 社论立场</b>：①❸ As a News Feature article in <i>Nature</i> discusses 是材料来源，discuss 中性；④❶ has pointed out 才是编辑部表态（<a href="#R130">R130</a> 转述动词测距离）。',
        '<b>分工</b>：<a href="#R4">R4</a> 管「无引号无人名＝作者」、<a href="#R97">R97</a> 管「说话人编号」、<a href="#R66">R66</a> 管折扣词；本卡管两个它们没覆盖的信号——<b>设问答案的归属</b>与<b>社论自引</b>。',
        '<b>2015·T1</b>：①❸❹ 两个设问由⑥一句作答——<code>While Europe’s monarchies will no doubt … survive …, it is the British royals who have most to fear</code>：让步半句答「不，还没到末日」，强调半句答「但英国要当心」。'],
 refs:[{p:'2014_T3_富豪设奖与诺奖的出身.html',q:'col1',label:'2014·T3 · 02+ 专栏（五层声音表）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q32',label:'2014·T3·32（The critics think ⟹ 设问答案挂 according to）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q31',label:'2014·T3·31（is seen as 无主语 ⟹ 取事实层）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'col4',label:'2015·T1 · 02++++ 专栏（首段设问 → ⑥ 回答 → 标题范围）'}]},

{id:'R169', tier:'🔴', qt:'作者观点题 ／ 段落细节题（which is true of X，X 是公认的老权威）', title:'旧权威出身类比：新事物被骂出身，作者就说 X were, of course, themselves …——问老权威取 A, rather than B 的 A；问新事物只推一步「也该交给时间」',
 trig:['批评者攻击新事物的出身或动机（upstart · self-promotion · 有钱人的玩具）','作者接一句 <code>X were, of course, themselves set up by …</code>（of course ＋ 反身代词 themselves）','紧跟 <code>A, rather than B, has given them legitimacy／credibility</code>'],
 flow:'① <b>认出类比</b>：of course（让步：别忘了）＋ themselves（连它自己也）⟹ 作者把老权威拉回与新事物同一个出身；<br>'
     +'② <b>找桥</b>：两边的描述常逐字呼应（④❹ decided what he wanted to do with his own money ⟷ ⑤❹ money to do with as they please）；<br>'
     +'③ <b>问老权威</b>：取 rather than 前的 A（Time ⟹ endurance），B 一半（intention）是干扰项工厂；<br>'
     +'④ <b>问新事物</b>：只推一步——别凭出身判它，交给时间 ⟹ 「可以接受」，不推成「将来一定同样权威」。',
 tmpl:'<table class="tk"><tr><th>原文（2014·T3 ④❹❺）</th><th>题</th></tr>'
     +'<tr><td><code>Time, <b>rather than intention</b>, has given them legitimacy</code></td><td><b>34D</b> Their endurance has done justice to them</td></tr>'
     +'<tr><td>取被否定的一半 ＋ 拼 ❸ has long been</td><td>34C Their legitimacy has long been in dispute ✘</td></tr>'
     +'<tr><td>类比的言外之意</td><td><b>35B</b> acceptable despite the criticism</td></tr></table>',
 traps:['<b>「时间给了正统」≠「从未被怀疑」</b>：34A History has never cast doubt——前者暗示起初并非天然正当，never 过度。',
        '<b>别被同段的批评带偏</b>：④❸ 刚批过诺奖限额，但段落重心在末两句的「扬」；只看❸ 会选 34C。',
        '<b>反向样本</b>：同卷 2014 T1 作者追问意图（<a href="#R162">R162</a>）；本篇作者搁置意图——意图重不重要，看作者在揭穿还是在辩护。跨篇另见 2013 T3「放长视角」。'],
 refs:[{p:'2014_T3_富豪设奖与诺奖的出身.html',q:'col2',label:'2014·T3 · 02++ 专栏（of course ／ themselves ／ rather than 四信号表）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q34',label:'2014·T3·34（rather than 取前半 ⟹ endurance）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'s14',label:'2014·T3 · 长难句 s14'}]},

{id:'R170', tier:'🔴', qt:'作者态度题（The author believes that X is … ／ author’s attitude towards X）', title:'让步型态度题：As much as A may complain, … ／ It is fair to criticize …—but …——原文让步几次，正解就带着「despite 批评」那半句；全盘否定与阐释性无态度的选项先排',
 trig:['作者发声段句首 <code>As much as … may</code>（＝ Although，不是「和……一样多」）','<code>It is fair／understandable to criticize … but …</code>、<code>of course</code>、<code>To be sure</code> 连续出现','四个选项里有一个带 <code>despite／though／while</code> 的双层结构'],
 flow:'① <b>定主句方向</b>：让步之后的主句 ＋ 末句应然（It is wise to take such gifts）⟹ 褒 or 贬；<br>'
     +'② <b>数让步</b>：承认了几次批评，就是「有保留」；<br>'
     +'③ <b>按形状分选项</b>：全盘否定（harmful · unworthy）· 阐释性无态度（subject to changes）· 带让步的肯定（acceptable despite criticism）；<br>'
     +'④ <b>正解＝主句方向 ＋ 让步保留</b>，形状与原文同构。',
 tmpl:'<table class="tk"><tr><th>原文（2014·T3 ⑤）</th><th>正解对应</th></tr>'
     +'<tr><td>❶ <code><b>As much as</b> some scientists may complain</code> · ❹ <code><b>It is fair to</b> criticize …—<b>but</b></code></td><td>despite the criticism</td></tr>'
     +'<tr><td>❺ <code>It is wise to take such gifts with gratitude and grace</code></td><td>acceptable</td></tr>'
     +'<tr><td>❸ <code>surely a good thing</code> 反向</td><td>35A harmful · 35D unworthy ✘</td></tr></table>',
 traps:['<b>As much as 读成比较</b>：句首 As much as ＋ 主谓 ＋ 逗号一律按让步读，否则整段读反。',
        '<b>让步里的原词是干扰项原料</b>：⑤❹ that is the culture of research 指批评本身，35A 把它安到受害者位置。',
        '<b>分工</b>：<a href="#R12">R12</a> 态度强度尺先定方向再定强度；<a href="#R151">R151</a> 标题题里别拿让步去削唯一同向项；本卡管态度题本身——<b>让步不是用来削档的，它就是正解的一半</b>。',
        '<b>⚠️ 2017 边界</b>：让步几次就保留几分，<b>只在批评落在题干对象上时成立</b>。2017·T2 ④ 一整段自我批评（Some blame … belongs to astronomers），对象是天文学家过去的做法；30 题问的是选址，⑥❷ 说选址正是为了纠正这些过错 ⟹ full approval 不降档（⟹ <a href="#R221">R221</a>）。',
        '<b>2019·T3·34 的对照：作者自己的让步</b>：While the statement is vague, it represents one starting point——让步不是转述批评者，而是作者先给自己打折，所以态度落在「有保留的肯定」（affirmation），不到满格（respect）；本卡管的是「替对方说一句再驳倒」，那种态度更坚决（见 <a href="#R260">R260</a>）。'],
 refs:[{p:'2014_T3_富豪设奖与诺奖的出身.html',q:'col3',label:'2014·T3 · 02+++ 专栏（四种让步形式表）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'q35',label:'2014·T3·35（acceptable despite the criticism）'},
       {p:'2014_T3_富豪设奖与诺奖的出身.html',q:'s15',label:'2014·T3 · 长难句 s15（As much as ＝ 尽管）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'col1',label:'2014·T4 · 02+ 专栏（让步后遗憾：与 R170 方向相反的一对）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'col3',label:'2017·T2 · 02+++ 专栏（本卡的边界：批评对象 ≠ 题干对象）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q34',label:'2019·T3·34（作者自己的 While 让步：有保留的肯定）'}]},
{id:'R171', tier:'🔴', qt:'作者态度题（段落／全文，评论一份报告、计划、政策、书）· 最佳标题题', title:'表扬—遗憾型评论：X deserves praise for … Regrettably, however, … may cause more harm than good——态度取 however 后，强度被表扬压在 critical；全文几轮先褒后贬，标题就要装下「被评对象 ＋ 核心指控」',
 trig:['首段两句一褒一贬：<code>deserves praise／is to be applauded／generally admirable</code> 紧跟 <code>Regrettably／Unfortunately／However／Yet</code>','后文又出现第二、第三轮：<code>The goals … are admirable</code> → <code>Unfortunately, despite …</code>；<code>displays great enthusiasm</code> → <code>Yet …</code>','态度选项里同时有「批评」「蔑视」「欣赏」「容忍」四档'],
 flow:'① <b>数轮次</b>：每个 however／Unfortunately／Yet 下面划一道「→」，划几道就是几轮；<br>'
     +'② <b>方向取箭头右边</b>：贬的那半是重心，褒的那半是让步；<br>'
     +'③ <b>强度看让步有多真</b>：表扬给了具体理由、还带 may ⟹ 负向里取温和档 critical，不取 contemptuous／hostile；<br>'
     +'④ <b>tolerant／acceptable 要找「接受」的字</b>，只有表扬与遗憾时一律排除；<br>'
     +'⑤ <b>标题装两样</b>：被评对象 ＋ 作者的核心指控（常在冒号后）；只装褒的、装了对象丢了指控、装了指控丢了对象的都排。',
 tmpl:'<table class="tk"><tr><th>原文（2014·T4）</th><th>题</th></tr>'
     +'<tr><td>①❶ <code>deserves praise for affirming …</code> → ❷ <code><b>Regrettably, however</b> … may cause more harm than good</code></td><td><b>36A Critical</b>（B 只读褒 · C 升级 · D 无接受）</td></tr>'
     +'<tr><td>③ <code>generally admirable</code> → ④❶ <code><b>Unfortunately, despite</b> … never gets to the heart of the matter: the illiberal nature of liberal education</code></td><td>论点句</td></tr>'
     +'<tr><td>⑥❶ <code>great enthusiasm</code> → ❷ <code><b>Yet</b> … may well set back reform</code></td><td><b>40A</b>（B Contribution 只装褒）</td></tr></table>',
 traps:['<b>被表扬句拉走</b>：36B Appreciative、40B The AAAS’s Contribution 都只读了让步那半——热情 ≠ 贡献。',
        '<b>方向对、强度过头</b>：36C Contemptuous。作者肯说 deserves praise 并给出具体理由，就不是蔑视（<a href="#R12">R12</a> 强度尺）。',
        '<b>分工</b>：<a href="#R170">R170</a> 管「让步后<b>接受</b>」（As much as … may complain ⟹ acceptable despite）；本卡管「表扬后<b>遗憾</b>」，方向正相反，<b>2014 同卷 T3、T4 连考</b>；<a href="#R151">R151</a> 管标题题里 To be sure 让步不降档；<a href="#R142">R142</a> 书评「认诊断、疑药方」是本卡「认目标、疑诊断」的邻居。',
        '<b>2015·T3·34</b>（对照）：沃克斯 has some merit, but a weakness is … ——but 后只有「一个弱点」，肯定仍占上风，答案取 has room for further improvement；与 2014·T4 的 may cause more harm than good 正好一轻一重（见 <a href="#R188">R188</a>）。',
        '<b>2016·T1（对照）</b>：②❶ uplifting motives → ④❶ however, rely too much on——看似「表扬—遗憾」，<b>但后文又冒出另一种手段并排座次</b>（⑥ 丹麦自律、⑦ the best step · Even better），重心在排座次那句 ⟹ 归 <b>R198「认目标、比手段」</b>，不按本卡取 however 后作态度。'],
 refs:[{p:'2014_T4_没说到要害的人文报告.html',q:'col1',label:'2014·T4 · 02+ 专栏（三轮先褒后贬表 ＋ 四条判据）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q36',label:'2014·T4·36（Critical：方向取 however 后，强度被表扬压住）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q40',label:'2014·T4·40（标题＝被评对象 ＋ illiberal 指控）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q34',label:'2015·T3·34（but 后只是一个弱点 ⟹ 改进空间）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'col1',label:'2016·T1 · 02+ 专栏（R171 与 R198 的分界）'}]},

{id:'R172', tier:'🔴', qt:'事实细节题（题干只给段号 ／ how to ／ the report suggests），原文是长清单或一句里有两份清单', title:'清单题同行对齐：一句里 by 引出「谁来做」、to 引出「为了什么」——how to 只取 to 后；一段并列建议先画「动词 | 对象」表，选项的动词、对象、修饰必须出自同一行',
 trig:['一句里同时出现 <code>actions that could be taken by A, B, C … to do X</code> 这类「执行者清单 ＋ 目的」','一段由 <code>supports; stresses; and encourages</code>／<code>calls for A, B, C and D</code>／<code>also advocates</code> 串起一长串建议','选项里每个词都能在原文找到，但搭配看着有点「新」'],
 flow:'① <b>先分清单种类</b>：by／for 后是执行者，to／in order to 后是目的；题干 how to／aim／purpose 取目的；<br>'
     +'② <b>把并列建议画成表</b>：一行 ＝ 一个动词 ＋ 它自己的对象（分号、the 另起都是换行信号）；<br>'
     +'③ <b>选项必须落在一行</b>：动词在这行、对象在那行 ⟹ 拼接；<br>'
     +'④ <b>同一行里再比修饰语</b>：particularly → exclusive（程度）、实用课程 → theoretical（方向）；<br>'
     +'⑤ <b>近义动词是甜头，宾语才是陷阱</b>：maintain ≈ retain，但 excellence ≠ interest。',
 tmpl:'<table class="tk"><tr><th>行（2014·T4）</th><th>选项</th></tr>'
     +'<tr><td>②❶ by <code>governments … educators, individual benefactors</code>（执行者）</td><td>37A individuals · 37B government ✘</td></tr>'
     +'<tr><td>②❶ to <code>maintain national excellence in … scholarship and education</code></td><td><b>37D keep a leading position</b> · 37C retain interest ✘</td></tr>'
     +'<tr><td>③❷ <code>encourages the use of new digital technologies</code></td><td><b>38C application of emerging technologies</b></td></tr>'
     +'<tr><td>③❸ <code>funding for teachers</code> ＋ ③❹ <code>greater study of foreign languages</code></td><td>38D funding for languages ✘（两行拼一行）</td></tr></table>',
 traps:['<b>「每个词原文都有」最危险</b>：37A、37B、38D 的词全来自原文，错在不同行或不同清单。',
        '<b>并列切分看冠词</b>：<code>greater study of foreign languages, international affairs and the expansion of …</code>——the expansion 另起，前两项共用 greater study of。',
        '<b>分工</b>：<a href="#R8">R8</a> 总纲里有「杂糅」一类（知道有这种错）；<a href="#R15">R15</a> 管题干只给段号时拿选项回文（知道怎么定位）；本卡补定位后的一步——<b>按行对齐</b>；<a href="#R167">R167</a> 是二维的「问题—原因—对策」表，本卡是一维清单表。'],
 refs:[{p:'2014_T4_没说到要害的人文报告.html',q:'col2',label:'2014·T4 · 02++ 专栏（两种清单的「行」表）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q37',label:'2014·T4·37（how to 只取 to 后；A／B 捡执行者清单）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q38',label:'2014·T4·38（C 同一行；D 两行拼一行）'}]},

{id:'R173', tier:'🟡', qt:'推理引申题（The author implies that X are …）· 标题题 · 政治／教育评论里有两派立场标签时', title:'立场标签分两栏：treat A as proper while portraying B as outside ⟹ biased against B；同一个 liberal 在一篇里能换五个义项——选项把一栏的标签安到另一栏的人头上，就是干扰项',
 trig:['同一句里两组标签对举：<code>progressive … while portraying conservative or classical liberal ideas</code>','破折号 <code>—such as …—</code> 给其中一栏举例','一个核心词反复出现且带前缀或修饰：<code>liberal democracy／liberal education／illiberal／left-liberal／classical liberal</code>'],
 flow:'① <b>卷边画两栏</b>：谁认的 · 谁被排斥的；破折号里的 such as 例子归它前面那一栏；<br>'
     +'② <b>对举动词定关系</b>：treat A as 正当 ／ portray B as 界外 ⟹ 双重标准 ⟹ biased against B；<br>'
     +'③ <b>每个选项查「人」与「标签」同不同栏</b>：把被排斥栏的标签（free markets、conservative）安到排斥者头上 ⟹ 立场对调；<br>'
     +'④ <b>核心词逐次标义项</b>：illiberal 这种自相矛盾的词组往往就是论点与标题；<br>'
     +'⑤ <b>带引号的自称 ＋ or 改写 ＝ 作者不认</b>（"progressive," or left-liberal）。',
 tmpl:'<table class="tk"><tr><th>栏（2014·T4 ⑤❶）</th><th>选项</th></tr>'
     +'<tr><td>第一栏（教授认的）：<code>progressive interpretation of history · progressive public policy</code></td><td>39D conservative about public policy ✘</td></tr>'
     +'<tr><td>第二栏（被排斥的）：<code>conservative or classical liberal ideas—such as free markets and self-reliance</code></td><td><b>39B biased against classical liberal ideas</b> · 39A supportive of free markets ✘</td></tr>'
     +'<tr><td>句末名词 <code>intellectual investigation</code></td><td>39C cautious about … ✘（照搬名词）</td></tr></table>',
 traps:['<b>把 liberal education 读成「自由主义教育」</b>：它是博雅／通识教育，与政治派别无关；作者正是保守派却在捍卫它。',
        '<b>译名陷阱</b>：黄皮书把 classical liberal ideas 译「古典人文思想」，会与④❸「拿人文学科当宣传工具」混成一栏——应为「古典自由主义」。',
        '<b>分工</b>：<a href="#R139">R139</a> 管单个词被换义项；<a href="#R29">R29</a> 管引号三功能（本篇 "progressive," 是排斥）；本卡管<b>一组标签词分属两派、整栏挪位</b>。'],
 refs:[{p:'2014_T4_没说到要害的人文报告.html',q:'col3',label:'2014·T4 · 02+++ 专栏（liberal 五义表 ＋ 两栏）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'q39',label:'2014·T4·39（biased against；A／D 立场对调）'},
       {p:'2014_T4_没说到要害的人文报告.html',q:'s13',label:'2014·T4 · 长难句 s13（treat A as … while portraying B as …）'}]}
,
{id:'R174', tier:'🔴', qt:'完形 · 科普推介型文章（问题 → 科学依据 → 产品／方案 → 功能说明）', title:'按段标「＋／−」：推介文的方向按段固定——问题段填负，依据、产品、功能段填正；方向不对的选项整批划掉，同一个意思换一段就对错互换',
 trig:['首段讲一种困扰（not what they used to be／loss of mental focus／senior moments），第二段起换成 experts／scientists 说话','后半篇主语换成 a company／the program／it，句子是 allows you to／keeps track of／provides feedback on 的说明书口吻','选项里混着一对反义词（improves／fades · recovers／collapses），或一串「催逼、无规律、有风险、无效」的词'],
 flow:'① <b>读每段首句，看主语换成了谁</b>：受害者 → 专家 → 公司 → 产品；<br>'
     +'② <b>在段首写「＋」或「−」</b>：问题段 −，科学依据、产品、功能各段 ＋；<br>'
     +'③ <b>做题先按符号划掉方向不对的选项</b>，剩下的再比搭配与词义；<br>'
     +'④ <b>同一个意思（恢复、改善）在问题段是错项，到方案段才是答案</b>——选项本身无所谓对错，看它落在哪一段。',
 tmpl:'<table class="tk"><tr><th>2014 完形（段 · 主语）</th><th>方向</th><th>答案 ／ 因方向出局</th></tr>'
     +'<tr><td>① many people／We</td><td>−</td><td>2 fades · 4 damaging ／ improves · recovers · limited</td></tr>'
     +'<tr><td>②③ scientists／a company</td><td>＋</td><td>12 according to · 13 further ／ regardless of · back · aside</td></tr>'
     +'<tr><td>④ The program／it</td><td>＋</td><td>15 allows · 18 constantly · 20 effective ／ hurries · forces · irregularly · risky · familiar · idle</td></tr></table>'
     +'<p class="note">二十组选项里<b>十二个干扰项</b>靠「方向或褒贬不对」出局。</p>',
 traps:['<b>「恢复」放错了段</b>：2D recovers 在①段是错项，14 题 regain 在③段才是题眼——<b>问题还没提完，不谈恢复</b>；2A improves 同理。',
        '<b>说明书段不说产品的坏话</b>：15C forces、20A risky、20C idle 语法上都通，但推介口吻里不会出现「强迫」「有风险」「无效」。',
        '⚠️ <b>文外事实不进题</b>：本篇介绍的程序（Lumosity）2016 年被美国联邦贸易委员会认定宣传缺乏依据——做题只按文内方向走，这层批判留给作文。',
        '<b>分工</b>：<a href="#R49">R49</a> 管比喻两端对表；<a href="#R102">R102</a> 管一根因果箭头；<a href="#R156">R156</a> 管比方与发现同构；<b>本卡管整篇按段翻转极性</b>。'],
 refs:[{p:'2014_完形_像练肌肉一样练大脑.html',q:'polar',label:'2014·完形 · 02+ 四段极性表'},
       {p:'2014_完形_像练肌肉一样练大脑.html',q:'q2',label:'2014·完形·2（①段负 ⟹ fades，improves／recovers 出局）'},
       {p:'2014_完形_像练肌肉一样练大脑.html',q:'q14',label:'2014·完形·14（③段 regain ⟹ 回首段找丢掉的 clarity）'},
       {p:'2014_完形_像练肌肉一样练大脑.html',q:'q15',label:'2014·完形·15（说明书段只填赋能 allows）'},
       {p:'2014_完形_像练肌肉一样练大脑.html',q:'q20',label:'2014·完形·20（被夸的程序只能比有效的计划）'}]},

{id:'R175', tier:'🟡', qt:'完形 · 空格前的主语是代词（It ___ out that …／It ___ that …）', title:'代词主语先找先行词：找不到 ⟹ 形式主语句型（It turns out／seems／appears／follows that）；找得到 ⟹ 再核对人与物、单数与复数',
 trig:['空格紧跟句首的 It，后面又跟着 that 从句','四个选项都能和空后的小词组成短语（turns／finds／points／figures ＋ out）','上一句的主语是复数的人（Neuroscientists／researchers）'],
 flow:'① <b>回上一句找一个单数、非人的名词</b>，看 It 能不能指它；<br>'
     +'② <b>找不到 ⟹ It 是形式主语</b>，that 从句才是真主语——只有「不需要一个人去做」的动词进得来：turn out／seem／appear／happen／follow；<br>'
     +'③ <b>找得到 ⟹ 按 <a href="#R21">R21</a> 做主体校验</b>：find out／point out／figure out 要人做；It 是单数，不能指复数；<br>'
     +'④ <b>回代</b>：把 that 从句当成一件事放回 It 的位置读一遍。',
 tmpl:'<table class="tk"><tr><th>2014 完形 6 题</th><th>要不要一个做动作的人</th><th>本句</th></tr>'
     +'<tr><td>It <b>turns</b> out that …</td><td>不要（＝结果表明）</td><td>✅</td></tr>'
     +'<tr><td>It finds／points／figures out that …</td><td>要（谁查明、谁指出、谁想明白？）</td><td>✘ 上一句只有复数的 Neuroscientists</td></tr></table>',
 traps:['<b>中文「研究指出」的陷阱</b>：中文顺，英文 It points out 的 It 必须真有所指（The report points out that …）。',
        '<b>别背成「It 开头必填 turns」</b>：上一句若是 The study／The report，It points out that 就成立——<b>第一步永远是回头找先行词</b>。',
        '<b>It figures</b> 单用是口语「这不奇怪」，<b>不带 out</b>；It takes sb time to figure out 里 It 替的是不定式，不是本题结构。'],
 refs:[{p:'2014_完形_像练肌肉一样练大脑.html',q:'q6',label:'2014·完形·6（It 无先行词 ⟹ turns out）'},
       {p:'2014_完形_像练肌肉一样练大脑.html',q:'s4',label:'2014·完形 · 长难句 s4（It turns out that … and …）'}]},

{id:'R176', tier:'🔴', qt:'完形／阅读 · 限定词打折（seemingly／apparently／at first glance／to a certain extent／in theory）', title:'限定词＝作者给自己的话打折：打「表面」的折，同句另一半是「其实」；打「程度」「理论」的折，下一句是「但更重要的是」——折扣后的逻辑空填让步或转折，对面的实词空方向取反',
 trig:['seemingly／apparently／on the surface／at first glance 修饰一个评价词（innocent／a strength）','句首 To a certain extent／To some degree／In part／Admittedly／In theory','同一句里一个「看似」、一个「可能会」（seemingly … potentially）'],
 flow:'① <b>圈出限定词，判断它打的是哪种折</b>：表面（seemingly／at first glance）· 程度（to a certain extent）· 理论（in theory／on paper）；<br>'
     +'② <b>表面折</b> ⟹ 同句另一半「其实」方向相反：句首逻辑空填 While／Although，另一半的实词空取反；<br>'
     +'③ <b>程度折、理论折</b> ⟹ 下一句句首填 However／But，内容翻到另一边；折扣所在那句的实词空只讲被承认的那一半；<br>'
     +'④ <b>essentially／basically 是反向的限定</b>：它说「本质」，空格填定义（process），不填作用（channel）。',
 tmpl:'<table class="tk"><tr><th>原文（2013–2014 完形）</th><th>折扣</th><th>定的空</th></tr>'
     +'<tr><td>___ seemingly innocent, … potentially have a(n) ___ impact</td><td>表面</td><td>2014·3 While · 4 damaging</td></tr>'
     +'<tr><td>To a certain extent … inherited. ___, because … effort and practice</td><td>程度</td><td>2014·11 However（10 excel 只讲先天）</td></tr>'
     +'<tr><td>At first glance … a strength that ___ …</td><td>表面</td><td>2013·1 grants（扬的那句填正面）</td></tr>'
     +'<tr><td>In theory … but … the truth was ___</td><td>理论</td><td>2013·11 otherwise</td></tr></table>',
 traps:['<b>折扣所在那句填「表面」一侧</b>：2013·1 在 At first glance 句里填正面的 grants——别一看见让步就把整句都往负面填。',
        '<b>If 的「即使」不等于 While</b>：if 让步要求两边方向相同、程度不同（good, if not great）；「看似无害 vs 其实有害」方向相反，只能 While／Although。',
        '<b>阅读题同理</b>：原文用 seemingly／apparently 修饰的判断，选项照搬就是「把表面当结论」——与 <a href="#R163">R163</a> 视角框同一族。',
        '<b>2015·T1·22</b>：③❶ <code>this apparent transcendence of politics</code>——apparent 在打折，但 22 问「王室为什么被保留」、不问作者信不信这个理由 ⟹ <b>限定词动的是态度，不动因果细节题的答案</b>。',
        '<b>2016·T1</b>：一篇五道折——①❶ <code>an absolute right</code>（丢的是「绝对」，不是权利 ⟹ 21A 不是 21D）· ②❹ <code>seems to</code> · ③❶ <code>if fully enforced … would</code> · ③❷ <code>perhaps faintly … hint</code>：<b>全文立意最高的一句被作者打了最重的折</b>，下一段就是 however。',
        '<b>2016·T3·31A</b>：①❷ <code>may not be absolutely clear-cut</code> ＋ ①❸ <code>at least when</code>——作者给<b>自己的结论</b>打了程度折，A uncertainty 把它读成对弗里德曼拿不准；<b>限定词动的是语气，方向由下一句的证据定</b>（R204）。',
        '<b>2016·完形·4：In theory 本身被挖成了空</b>——上句「孩子几乎没有发言权」，这句「女孩可以否决」，句首只能填打折词 ⟹ In theory（For example 把另一方的情况当成例子、Above all 方向反）。2013 完形 In theory 在题干里当信号，2016 当答案（段落层面的成对结构见 <a href="#R211">R211</a>）。',
        '<b>2018·T3 一篇七个刻度词</b>：far too little · very great／could also · almost · not the only／not even the most · merely／mere · slightly · a welcome start——干扰项专把刻度拔高（32C sincere、33A at all costs）或换性质（34D ineffective）；见 2018·T3 的 02+++ 专栏。'],
 refs:[{p:'2014_完形_像练肌肉一样练大脑.html',q:'hedge',label:'2014·完形 · 02+++ 四个限定副词'},
       {p:'2014_完形_像练肌肉一样练大脑.html',q:'q3',label:'2014·完形·3（seemingly ⟹ While）'},
       {p:'2014_完形_像练肌肉一样练大脑.html',q:'q11',label:'2014·完形·11（To a certain extent ⟹ However）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q1',label:'2013·完形·1（At first glance 句里填正面）'},
       {p:'2013_完形_面试打分的当日偏见.html',q:'q11',label:'2013·完形·11（In theory … the truth was otherwise）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q22',label:'2015·T1·22（apparent 打折，但因果题答案不变）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q21',label:'2016·T1·21（absolute：不再独占 ≠ 行业衰落）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'q31',label:'2016·T3·31A（降调 ≠ 没方向）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q4',label:'2016·完形·4（In theory 作答案）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q32',label:'2018·T3·32C（almost apologised → sincere apologies 拔高）'}]},

{id:'R177', tier:'🔴', qt:'新题型 · 排序题／选句填空（上一段在分类、举例；下一段段首是 X, however, …）', title:'分类句里<u>没举例</u>的那一类＝下一段的主角；段首 however 可能只是「从岔路拉回主干」——它对立的是紧挨着的例子，不是上一段的观点',
 trig:['上一段把情况分成两三类，只给其中几类举了例子','某一类标着 Most／the majority，却一个例子也没有','下一段段首 X, however, … 的内容几乎在复述上一段的某一句'],
 flow:'① 给分类句的每一类标「<b>有例／无例</b>」；<br>'
     +'② <b>无例而占比最大</b>（Most）的那一类 ⟹ 下一段来展开它；<br>'
     +'③ 段首 however 先问「<b>它和谁对立</b>」：紧挨着的一两句（岔出去的例子），还是上一段的整体观点？前者＝<b>拉回主干</b>；<br>'
     +'④ 验证：拉回主干的 however 段，首句会<b>换个说法复述</b>上一段那一类（换词不换意）。',
 tmpl:'<table class="tk"><tr><th>原文（2014 Part B）</th><th>信号</th><th>结论</th></tr>'
     +'<tr><td>A③ Most … located by means of careful searching, while many others … by accident</td><td>三类：看得见（3 例）· 偶然（2 例）· <b>仔细搜寻（0 例，Most）</b></td><td>下一段展开「仔细搜寻」</td></tr>'
     +'<tr><td>A④⑤ butterfly hunter … / Aztec artifacts … subway</td><td>段落停在「偶然」这条岔路上</td><td>下一段要一个转回的词</td></tr>'
     +'<tr><td>F① Most archaeological sites, <b>however</b>, are discovered by archaeologists who have set out to look for them</td><td>复述 A③ ＋ however</td><td>F 落 42，紧跟 A</td></tr></table>',
 traps:['<b>把 however 读成「与上一段观点相反」</b>，就会去找一段和 A 唱反调的文字——全篇没有。2014 的 however 对立的是 A 末尾两个「偶然发现」的例子，F 与 A 的主张完全一致。',
        '<b>「复述」不是多余，是接缝。</b>说明文展开某一类之前，先把它原样再说一遍是标准写法；段首句与上一段某句几乎同义 ⟹ 这两段就该挨着。'
        +'与 <a href="#R110">R110</a> 不矛盾：R110 管的是<u>隔段</u>复现（只能加固），这里是<u>相邻段</u>。',
        '<b>阅读题同理</b>：段首 however 若对立的是上一句的例子，这一段的主旨仍与上一段同向——问段落关系时别选 contradicts／refutes。'],
 refs:[{p:'2014_新题型_考古学家怎样找到遗址.html',q:'q42',label:'2014·新题型·42（however 拉回「仔细搜寻」）'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'seams',label:'2014·新题型 · 02++ 接缝 A → F'}]},

{id:'R178', tier:'🔴', qt:'新题型／阅读 · 总述句列两项（can cover A or B ／ both A and B），后面跟两个例子（In one case … In another case …）', title:'总述「A or B」后的两个例子可能<u>倒着给</u>（先证 B、后证 A）——例子的先后靠 one／another、first／second 这类形式标记定，别拿「总述里谁先说」去一一对应',
 trig:['一句话先列两类（a single … or entire …），下文 In one case／In another case','排序题要决定两个例子段谁在前','阅读题问 The example of X is used to show that …'],
 flow:'① <b>排序只认形式标记</b>：one → another、first → second、for example → another example，它们决定先后；<br>'
     +'② <b>读懂再逐个配对</b>：每个例子问「它证的是哪一类」，看<b>范围词</b>（around the city 城外 vs the entire city 全城）；<br>'
     +'③ <b>允许交叉</b>：总述 A or B、例子按 B、A 给出完全合法；<br>'
     +'④ 例证题：选项把例子配到总述的另一半上，就是干扰项。',
 tmpl:'<table class="tk"><tr><th>总述</th><th>例一（In one case）</th><th>例二（In another case）</th></tr>'
     +'<tr><td>D① Surveys can cover <b>a single large settlement</b> or <b>entire landscapes</b></td><td>科潘：working <b>around</b> the city … hundreds of small <b>rural</b> villages ⟹ <b>整片景观</b></td><td>特奥蒂瓦坎：mapping <b>the entire city</b> ⟹ <b>单个大型聚落</b></td></tr></table>'
     +'<p class="note">黄皮书按顺序硬配成「D＝聚落、B＝景观」，恰好配反；答案不受影响，因为 44–45 的先后是 In one case／In another case 定的。</p>',
 traps:['<b>「按顺序对应」是默认直觉，也是命题人最便宜的一招。</b>若出一道例证题「Copán is mentioned to show that surveys can cover a single settlement」，照顺序配的人就会选它。',
        '<b>范围词是唯一可靠的判据</b>：around／surrounding／rural（城外、乡村）vs entire city／within（城内、全城）。先圈范围词，再配总述。'],
 refs:[{p:'2014_新题型_考古学家怎样找到遗址.html',q:'q45',label:'2014·新题型·45（两例倒序对应总述）'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'book',label:'2014·新题型 · 03+ 黄皮书配反之处'}]},

{id:'R179', tier:'🟡', qt:'新题型 · 排序题（说明文：先介绍几种方法／技术，再举案例）', title:'例子只能用「已经讲过」的方法：案例段里同时点名两种方法（aerial photographs ＋ surveys on foot），它就必须排在介绍这两种方法的段落之后',
 trig:['说明文分段介绍几种手段（空中／地面、理论／实验、线上／线下）','某段是 In one case／For example 引出的案例，案例里点名用了哪些手段','方法段与案例段的先后拿不准'],
 flow:'① 圈出案例段里的<b>手段名词</b>；<br>'
     +'② 回找每种手段在哪一段被介绍；<br>'
     +'③ 案例段排在<b>最后一个被它引用的方法段</b>之后；<br>'
     +'④ 顺带验「先总后分」：总说（systematic survey methods）→ 分说（空中、地面）→ 案例。',
 tmpl:'<table class="tk"><tr><th>案例段 D 里的词</th><th>在哪一段介绍</th><th>结论</th></tr>'
     +'<tr><td>aerial photographs</td><td>E（Airborne technologies … Aerial surveys）</td><td>D 在 E 之后</td></tr>'
     +'<tr><td>making surveys on foot</td><td>G（a lot of walking）</td><td>D 在 G 之后 ⟹ G → D</td></tr>'
     +'<tr><td>settlement maps · landscapes</td><td>G 末（map sites and the landscapes）</td><td>相邻复现，加固</td></tr></table>',
 traps:['<b>反过来不成立</b>：方法段里提到某个例子的名字，不说明例子段在后——例子常常先出场当引子（设问、故事开头）。这条只管「案例回用方法」这一个方向。',
        '<b>它是内容型证据，硬度却接近形式标记</b>：例子跑在方法前面，读者会先撞上还没解释过的术语，说明文作者不会这么写。2014 若把 [D–B] 放到 43–44，D 里的 surveys on foot 就跑到了 G（徒步勘测）前面。'],
 refs:[{p:'2014_新题型_考古学家怎样找到遗址.html',q:'q44',label:'2014·新题型·44（案例回用 E、G 两段的方法）'},
       {p:'2014_新题型_考古学家怎样找到遗址.html',q:'q43',label:'2014·新题型·43（D 放 43 会让例子跑在方法前）'}]},
{id:'R180', tier:'🔴', qt:'通读 · 因果细节／人物题／标题题（原文出现 It is X that／who … 强调句，尤其 It is X, not Y, who …）', title:'强调句是作者的荧光笔：It is X that／who … 被拎出来的 X 就是出题点；It is X, not Y, who … 里被排除的 Y 是现成的干扰项原料（「不是敌人」会被改成「是盟友」）',
 trig:['句子以 <code>It is … that／who …</code> 起头（或 <code>it is</code> 藏在 While／that 从句后面）','强调句里带 <code>only</code>（It is only X who …）或 <code>not Y</code>（It is X, not Y, that …）','一篇文章里强调句出现两次以上'],
 flow:'① <b>还原测试（三秒）</b>：去掉 It is 与 that／who，剩下的能还原成完整句子 ⟹ 强调句；不成句 ⟹ 形式主语的评价框（转 <a href="#R181">R181</a>）；<br>'
     +'② <b>在 X 下面画线、卷边打 ★</b>：X 是原因就等因果题，X 是对象就等题干原样引用，X 带 only 就等「反向依据」；<br>'
     +'③ <b>见 not Y 先写一句「Y 只是被排除」</b>：原文没说 Y 是什么，选项给 Y 贴任何正面标签（盟友、支持者、受益者）都是方向反；<br>'
     +'④ <b>While … , it is X who …</b> 这类「让步 ＋ 强调」：前半句是「大局」，后半句才是作者的重点。',
 tmpl:'<table class="tk"><tr><th>原文（2015·T1）</th><th>被强调的 X</th><th>题</th></tr>'
     +'<tr><td>③❶ <code><b>It is</b> this apparent transcendence of politics <b>that</b> explains …</code></td><td>原因</td><td><b>22A</b></td></tr>'
     +'<tr><td>⑥ <code>While …, <b>it is</b> the British royals <b>who</b> have most to fear …</code></td><td>对象</td><td>24 题干 · 25</td></tr>'
     +'<tr><td>⑦❶ <code><b>It is only</b> the Queen <b>who</b> has preserved …</code></td><td>唯一</td><td>24 反向依据</td></tr>'
     +'<tr><td>⑦❹ <code><b>it is</b> kings, <b>not republicans,</b> <b>who</b> are …</code></td><td>对比</td><td><b>24C</b> 的原料</td></tr></table>'
     +'<p class="note">七段文章四个强调句，22、24、25 三题的答案或题干全落在这四句上。</p>',
 traps:['<b>not Y 被读成反义</b>：24C takes republicans as his potential allies ← ⑦❹ not republicans。原文只说共和派<b>不是最大的敌人</b>，没说他们是什么，更没说查尔斯怎么看他们。',
        '<b>别把评价框当强调句</b>：<code>it is bizarre that wealthy aristocratic families should still be …</code> 去掉框后不成句——它问的是「作者怎么看」，不是「是谁」，交给 <a href="#R181">R181</a>。',
        '<b>分工</b>：<a href="#R43">R43</a> 管 Only when A, 倒装 B（靠倒装把重心前置）；本卡管 It is X that（靠框把重心前置）；<a href="#R168">R168</a> 管设问的答案归谁——2015·T1 ⑥ 那个强调句正是①段设问的回答。'],
 refs:[{p:'2015_T1_欧洲王室是否行将就木.html',q:'col1',label:'2015·T1 · 02+ 专栏（四个强调句 ＋ 还原测试）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q22',label:'2015·T1·22（③❶ 强调的是原因）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q24',label:'2015·T1·24（⑥⑦❶⑦❹ 三个强调句；C 造在 not republicans 上）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q31',label:'2018·T3·31（It is against that background that … 把裁定推到台前）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q33',label:'2018·T3·33（it is processing and aggregation, not the mere possession of bits, that …）'}]},

{id:'R181', tier:'🔴', qt:'事实细节题（题干 odd／ironic／surprising／paradoxical ＋ 段号），原文有 It is bizarre／ironic／strange that … ，前面常挂 At a time when／Given that', title:'评价框：At a time when X, it is bizarre that Y should still … ——怪的是 Y（它自己含着一对矛盾）；X 只是「为什么怪」的参照系，干扰项专从 X 里捡词；框里的 should 读「竟然」',
 trig:['题干问 <code>shown to be odd／ironic／surprising</code>、<code>the paradox is that</code>','原文 <code>It is bizarre／odd／strange／ironic／remarkable／no wonder that …</code> 或 <code>What is odd is that …</code>','评价框前挂着一个长状语：<code>At a time when …</code>／<code>Given that …</code>／<code>While …</code>'],
 flow:'① <b>题干的评价词对原文的评价词</b>（odd ↔ bizarre），段内一般只有一个，定位零成本；<br>'
     +'② <b>切三块</b>：参照系 X（At a time when …）｜评价词（it is bizarre that）｜评价对象 Y（that 从句）；<br>'
     +'③ <b>答案只取 Y</b>：先在 Y 里找那对矛盾（aristocratic ↔ democratic），正确项必须两头都装；<br>'
     +'④ <b>X 里的词只能当理由</b>：选项出现 X 的名词（inherited wealth）时，先问「这是作者说怪的事，还是社会正在发生的事」；<br>'
     +'⑤ <b>should 读「竟然」</b>，不读「应该」——读错了整句从讽刺变成主张。',
 tmpl:'<table class="tk"><tr><th>块</th><th>2015·T1 ④❸</th><th>题</th></tr>'
     +'<tr><td>参照系 X</td><td><code>At a time when … economists are warning of rising inequality and the increasing power of inherited wealth</code></td><td>23A 捡词</td></tr>'
     +'<tr><td>评价词</td><td><code>it is bizarre that</code></td><td>＝ 题干 odd</td></tr>'
     +'<tr><td>对象 Y</td><td><code>wealthy aristocratic families should still be the symbolic heart of modern democratic states</code></td><td><b>23B</b></td></tr></table>',
 traps:['<b>从参照系捡词</b>：23A Aristocrats’ excessive reliance on inherited wealth——inherited wealth 是经济学家警告的社会现象，「过度依赖」再凭空编一层。',
        '<b>从邻段挪「像怪事」的内容</b>：23C simple lifestyle 来自⑤段王室的努力；题干锁了段号，⑤段再像也不算（<a href="#R7">R7</a>）。',
        '<b>分工</b>：<a href="#R62">R62</a> 管「主句是新闻、非限定定语从句是背景」；本卡管「that 从句是评价对象、At a time when 是参照系」——<b>长句里总有一块是背景，干扰项专从背景里捡词</b>；强调句交给 <a href="#R180">R180</a>（还原测试可分）。'],
 refs:[{p:'2015_T1_欧洲王室是否行将就木.html',q:'col2',label:'2015·T1 · 02++ 专栏（评价框三块 ＋ 四条判据）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q23',label:'2015·T1·23（B 取 Y · A 捡 X · C 挪⑤段 · D 反⑤❶）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'s9',label:'2015·T1 · 长难句 s9（should 表惊讶）'}]},

{id:'R182', tier:'🟡', qt:'时评／议论文 · 通篇通用（原文有 provides arguments both for and against／pros and cons／on the one hand … on the other）', title:'正反两本账：读到 both for and against 就画两栏，每段往里填、Even so 是翻账键；每道题先问「它在哪本账」——干扰项专把一本账的词挪进另一本账的题；同一个词带引号记在对方账上、不带引号记在作者账上',
 trig:['段首总起句 <code>X provides arguments both for and against Y</code>／<code>has its pros and cons</code>','段首 <code>Even so</code>／<code>Still</code>／<code>That said</code> 反复出现','同一个动词或名词前后出现两次，一次带引号、一次不带'],
 flow:'① <b>画两栏</b>：正账（for：X 为什么成立／还在）｜反账（against：X 的问题）；<br>'
     +'② <b>逐段归账</b>，Even so 出现一次就翻一次；一段里可以先正后反（2015·T1 ⑤段）；<br>'
     +'③ <b>题目归账</b>：问「为什么被保留／好处」⟹ 正账；问「什么怪／弊端／风险」⟹ 反账；正确项的方向与所在账一致；<br>'
     +'④ <b>查跨账挪词</b>：选项里的词若来自另一本账，先怀疑；<br>'
     +'⑤ <b>看结论段</b>：两本账不等于作者骑墙——结论常是「守住正账的条件，否则反账成真」。',
 tmpl:'<table class="tk"><tr><th>账</th><th>2015·T1</th><th>题</th></tr>'
     +'<tr><td>正账</td><td>②❷ rise above politics · ③ 超越政治、无争议 · ⑤❶❷ 放下做派</td><td><b>22A</b>（D 反成「政治象征」）</td></tr>'
     +'<tr><td>反账</td><td>④ 过时特权、贵族当民主门面很怪 · ⑤❸ 终究是豪门</td><td><b>23B</b>（C 挪正账⑤ · D 与⑤❶ 反）</td></tr>'
     +'<tr><td>结论</td><td>⑦❸ 王室靠「无争议、不涉政治」的服务活着</td><td><b>24D</b></td></tr></table>'
     +'<p class="note">同一个 embody：②❷ 带引号（王室的说法：体现统一）记正账；④❷ 不带引号（作者的判决：体现特权）记反账。</p>',
 traps:['<b>正账题里混进「反正账」的说法</b>：22D everlasting political embodiment——正账的全部意思是<b>不</b>政治，D 取 embody 却把宾语换成政治。',
        '<b>反账题里混进正账内容</b>：23C simple lifestyle 是王室的努力（正账），不是④段说怪的事。',
        '<b>分工</b>：<a href="#R174">R174</a> 管完形「按段标 ＋／−」；本卡管阅读的两本账；<a href="#R42">R42</a> 管驳论文「只有一支箭头」——两本账的文章是两支箭头、作者偏向其中一支；<a href="#R29">R29</a> 管引号三功能，本卡用它给同一个词分账。',
        '<b>完形版的两本账（2018 完形）</b>：首段 On the one hand／On the other hand 就是目录，4 Then、11 Lucky for us 两个段首空是翻账键（⟹ <a href="#R245">R245</a>）。'],
 refs:[{p:'2015_T1_欧洲王室是否行将就木.html',q:'col3',label:'2015·T1 · 02+++ 专栏（两本账表 ＋ embody 两次）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q22',label:'2015·T1·22D（正账题里的「政治象征」）'},
       {p:'2015_T1_欧洲王室是否行将就木.html',q:'q23',label:'2015·T1·23C／D（反账题里的正账内容）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'ledger',label:'2018·完形 · 02+ 两本账表'}]},
{id:'R183', tier:'🔴', qt:'作者观点题（The author believes that X is comparable to／similar to ___）· 引用类比目的题（X’s comparison is quoted to indicate that）· 驳论文里出现两个比方时', title:'驳论里的两个比方：X’s lame argument that A is similar to B … But A is more like C——问「作者认为 A 像什么」取 But 之后的 C；被扔掉的 B 与证明 C 的论据都是干扰项原料；问「引用比方的目的」往前找它服务的论点',
 trig:['同一段里对同一个 A 出现两次「比作」：<code>is similar to</code>／<code>is like</code> 与 <code>But … is more like</code>／<code>is rather</code>','第一个比方被装在 <code>X’s argument that …</code> 里，前面有 discard／reject／dismiss／lame','题干是 <code>The author believes that … is comparable to</code>，或 <code>X’s comparison is quoted to indicate that</code>'],
 flow:'① <b>给每个比方标主人</b>：装在「对方的论点」里、又被抛弃的，是靶子；But 之后、没有转述动词的，是作者的；带人名 compares 的，是被引来作证的；<br>'
     +'② <b>比较级 more like 本身就是否定</b>：不是「不像 B」，是「更像 C」——题目要的就是 C；<br>'
     +'③ <b>比方后面的列举是论据，不是新比方</b>：它回答「为什么像 C」，把其中一项拎出来当比方的另一端 ⟹ 论据当比方 ＋ 以偏概全；<br>'
     +'④ <b>问引用目的，往前找论点</b>：例子放在论点后面，答案与论点同义；再拿比方的结论句（then／now 那半句）验一遍。',
 tmpl:'<table class="tk"><tr><th>原文（2015·T2）</th><th>谁的</th><th>题</th></tr>'
     +'<tr><td>④❶ <code>discarding California’s lame argument that exploring … is <b>similar to</b> … going through a suspect’s purse</code></td><td>加州（靶子）</td><td><b>28D</b> ✗</td></tr>'
     +'<tr><td>④❸ <code><b>But</b> exploring one’s smartphone is <b>more like</b> entering his or her home</code></td><td>作者</td><td><b>28A</b> ✔</td></tr>'
     +'<tr><td>⑦❸ <code>Orin Kerr … <b>compares</b> … with …: … then; … now</code></td><td>克尔（作证）</td><td><b>30B</b> ← ⑦❷ 论点</td></tr></table>'
     +'<p class="note">④❹ 列了阅读、财务、医疗、通信四类记录——那是「为什么像家」的论据，28B historical records、28C correspondences 都从这里拎词。</p>',
 traps:['<b>越像原文越要问是谁的话</b>：28D going through one’s wallet 连动词都照抄④❶——可那是作者说要扔掉的比方。',
        '<b>论据当比方</b>：28B／28C 把④❹ 手机里有什么，改成翻手机相当于处理历史档案／浏览通信；history 在原文是「个人记录」，historical records 还顺手偷换了词义。',
        '<b>引用目的别停在比方本身</b>：30A implemented flexibly 抓的是 novel rules 的字面，漏了⑦❷ 论点说的是「保护的适用范围」；分工——<a href="#R3">R3</a> 管例子服务的观点，<a href="#R122">R122</a> 管 Similar to／unlike 两次出场，本卡管<b>驳论里两个比方谁是谁的</b>。'],
 refs:[{p:'2015_T2_最高法院与手机隐私.html',q:'col1',label:'2015·T2 · 02+ 专栏（三个比方的主人表）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q28',label:'2015·T2·28（similar to 钱包 vs more like 家）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q30',label:'2015·T2·30（克尔的汽车类比 ← ⑦❷ 论点）'}]},

{id:'R184', tier:'🔴', qt:'作者态度题（The author’s attitude toward X is one of ___）· 原文出现「贬义副词 ＋ 褒义形容词」的搭配', title:'反讽搭配：recklessly modest——中心词是褒义、修饰它的副词是「过了头」的贬义，整个短语就是贬；作者常借对方的词说反话，态度只认副词的方向',
 trig:['「副词 ＋ 形容词」里形容词是褒义（modest、polite、optimistic、generous、cautious），副词是 recklessly／dangerously／excessively／naively／blindly／painfully','这个褒义词恰好是对方想要的姿态（对方请法院「克制」，作者说「克制得不负责任」）','后面紧跟一句正面反驳（can and should …）'],
 flow:'① <b>先看副词</b>：副词是「过度、不计后果」一类 ⟹ 短语为贬；<br>'
     +'② <b>再看这个褒义词是谁的</b>：若是对方的主张换了个说法，作者就在借对方的词说反话；<br>'
     +'③ <b>再看下一句</b>：紧跟着的正面主张（本篇③❷ can and should）给方向上保险；<br>'
     +'④ <b>最后定强度</b>：把全文对同一对象的其他评价（lame、discard、not … whole）放在一起，挑强度对得上的那个词。',
 tmpl:'<table class="tk"><tr><th>搭配</th><th>字面</th><th>真实意思</th></tr>'
     +'<tr><td><code><b>recklessly</b> modest</code>（2015·T2 ③❶）</td><td>不计后果地谦虚</td><td><b>克制到失职</b></td></tr>'
     +'<tr><td><code><b>dangerously</b> optimistic</code></td><td>危险地乐观</td><td>盲目乐观</td></tr>'
     +'<tr><td><code><b>painfully</b> polite</code></td><td>令人难受地礼貌</td><td>客气得做作</td></tr></table>'
     +'<p class="note">27 题四项：A tolerance（只读了 modest）· B indifference（把 discard 读成不理）· C disapproval ✔ · D cautiousness（对隐私谨慎 ≠ 对加州谨慎）。</p>',
 traps:['<b>只读中心词</b>：27A tolerance 就是读了 modest 没读 recklessly；黄皮书的提醒：两词一贬一褒、modest 是中心词，最容易误读成「有利有弊、总体可忍」。',
        '<b>义项自检</b>：modest 若取「不大的、适度的」，recklessly modest 就不通——<b>搭配读不通，说明义项取错了</b>（2013·T4 的 a modest victory 才是「不大的」）。',
        '<b>强度别过头</b>：同一篇⑦❶ should not swallow … whole 是部分否定 ⟹ 选 disapproval，不选 contempt／hostility 一类；分工——<a href="#R12">R12</a> 管强度尺，<a href="#R66">R66</a> 管折扣词，本卡管<b>褒词被贬副词翻转</b>。'],
 refs:[{p:'2015_T2_最高法院与手机隐私.html',q:'col2',label:'2015·T2 · 02++ 专栏（recklessly modest ＋ 作者三次驳加州的力度）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q27',label:'2015·T2·27（A tolerance 读了 modest 没读 recklessly）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'s4',label:'2015·T2 · 长难句 s4（would be recklessly modest if）'}]},

{id:'R185', tier:'🔴', qt:'作者担忧题（the author shows his concern that ___）· 段落观点题（原文先立原则、再说 As so often is the case／In practice／But applying it is another matter）', title:'原则与划线：stating that principle doesn’t ease the challenge of line-drawing——concern 的答案在「原则（应然）」与「落地（实然）」之间的缺口里；作者自己承认的事实、给出的方案、留的让步都不是担忧',
 trig:['题干含 concern／worry／fear，而原文那两段里<b>没有</b>这些字眼','原文有「原则句」（have a right to／should be protected by）紧跟「落地难」句（As so often is the case, stating that principle doesn’t …／In practice …）','后文作者开始出方案（would not be burdensome／could still …）'],
 flow:'① <b>给每句贴性质标签</b>：建议 · 事实 · 原则 · 缺口 · 方案 · 让步；<br>'
     +'② <b>担忧只可能在「缺口」那一格</b>：原则说了、线没划，所以保护没落实；<br>'
     +'③ <b>作者在出方案 ⟹ 问题还没解决</b>：would／could 都是设想，反推「目前没做到」；<br>'
     +'④ <b>排除</b>：事实项（作者承认的现实）、方向反项（让步说反）、难点挪位项（难划线 → 难表达）。',
 tmpl:'<table class="tk"><tr><th>句（2015·T2）</th><th>性质</th><th>选项</th></tr>'
     +'<tr><td>⑤❷ keeping sensitive information on these devices is increasingly a requirement of normal life</td><td>事实</td><td><b>29C</b> ✗</td></tr>'
     +'<tr><td>⑤❸ Citizens still have a right to expect private documents to remain private …</td><td>原则</td><td>29D 前一半</td></tr>'
     +'<tr><td>⑥❶ <code>As so often is the case, stating that principle doesn’t ease the challenge of line-drawing</code></td><td><b>缺口</b></td><td><b>29D</b> ✔ · 29A ✗</td></tr>'
     +'<tr><td>⑥❹ The court, though, may want to allow room for police … more freedom</td><td>让步</td><td><b>29B</b> ✗</td></tr></table>'
     +'<p class="note">黄皮书的说法：D 符合⑤⑥ As so often is the case 形成的「理论情形 vs 现实情况」对比。</p>',
 traps:['<b>事实不是担忧</b>：29C phones are used to store sensitive information ——那是作者承认的现实，而且是他反驳「你自己该小心」的论据；站在作者这边，却不是他担心的东西（接 <a href="#R37">R37</a>）。',
        '<b>难点挪位</b>：29A principles are hard to be clearly expressed ——原文难的是 line-drawing，不是 stating；原则本身说得清清楚楚。',
        '<b>让步反着说</b>：29B less room for action ← ⑥❹ allow room … more freedom；且 may want to 只是预判，法院还没给。分工——<a href="#R147">R147</a> 管「机制落空三问」（规则写了却管不住），本卡管<b>原则与落地之间的缺口怎么出担忧题</b>。'],
 refs:[{p:'2015_T2_最高法院与手机隐私.html',q:'col3',label:'2015·T2 · 02+++ 专栏（⑤⑥ 两段六句的性质标签表）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'q29',label:'2015·T2·29（担忧＝原则与落地的缺口）'},
       {p:'2015_T2_最高法院与手机隐私.html',q:'s12',label:'2015·T2 · 长难句 s12（As so often is the case）'}]},
{id:'R186', tier:'🔴', qt:'首段推理题（It can be learned from Paragraph 1 that）· 标题题（the best title of the text）· 新闻稿（开头有 announced today／said on Monday，后文一段一个人名加引语）', title:'新闻导语即标题：第一句「谁做了什么」＋ 第二句「这是潮流里的一步 ＋ 为什么」——首段推理题取两句的公因式，标题题取「主体 ＋ 动作 ＋ 潮流」，两题同源；标题干扰项专从后文配角嘴里捡高频词',
 trig:['首句是「机构 ＋ is doing ＋ 新举措」，句尾挂 <code>, X announced today</code>','第二句有 <code>follows similar efforts</code>／<code>joins</code>／<code>is the latest to</code>／<code>after widespread concern that</code>','同一篇里既有「从第一段可知」又有「最佳标题」两道题'],
 flow:'① <b>先认文体</b>：消息来源 ＋ 时间在句尾、后文轮流引人话 ⟹ 新闻稿，记者不表态；<br>'
     +'② <b>把导语拆成四格</b>：主体 · 动作 · 潮流（别家也在做）· 原因；<br>'
     +'③ <b>首段推理题取公因式</b>：「本家在做」＋「别家也在做」⟹ 复数主语 ＋ 动作的概括；只推一步；<br>'
     +'④ <b>标题题取「主体 ＋ 动作 ＋ 潮流」</b>，原因不进标题；再用覆盖度验：后文每个人评价的都是这项举措。',
 tmpl:'<table class="tk"><tr><th>导语（2015·T3）</th><th>格</th><th>题</th></tr>'
     +'<tr><td>①❶ <code>The journal Science is adding an extra round of statistical checks …</code></td><td>主体 ＋ 动作</td><td><b>35A</b> Science … Screen Statistics</td></tr>'
     +'<tr><td>①❷ <code>The policy follows similar efforts from other journals</code></td><td>潮流</td><td><b>31B</b> journals（复数）· <b>35A</b> Joins Push</td></tr>'
     +'<tr><td>①❷ <code>after widespread concern that basic mistakes in data analysis …</code></td><td>原因</td><td>31C ✗ · 31D ✗</td></tr></table>'
     +'<p class="note">35A 就是《自然》这篇新闻的原标题 Science Joins Push to Screen Statistics in Papers——导语是标题的展开版。</p>',
 traps:['<b>原因那一格是干扰项工厂</b>：31C 把 widespread concern 拧成 few journals are blamed，31D 把 mistakes in data analysis 换成 lack of data analysis——正确项在主干，干扰项在从句（接 <a href="#R62">R62</a>）。',
        '<b>标题干扰项从配角身上捡词</b>：35B statisticians（⑤ 约安尼季斯比的是两种审查）、35C editors ＋ data analysis、35D statisticians ＋ Coming Back——全文高频，却都不是导语的主语。',
        '<b>「追随」别说成「首创」</b>：导语第二句有 follows similar efforts，正确标题就带 Joins／Follows；分工——<a href="#R125">R125</a> 管评论文的标题覆盖表，<a href="#R89">R89</a> 管「个例 ＋ 一串同类」取公因式，本卡管<b>新闻稿的首段题与标题题同源</b>。',
        '<b>原刊标题账（全站十五道标题题）</b>：原样 5（2008 T1 · 2014 T4 · 2015 T3 · 2016 T1 · 2018 T2）· 改写 6 · 重拟 4——原刊标题是平实的陈述短语就原样搬，是问句、习语或只点一角才重拟；2016 T1 与 2018 T2 都出自箴言报社论（见 2018·T2 的 02++++ 专栏）。',
        '<b>原刊标题账更新（全站十六道标题题）</b>：原样 6（加 2018 T4 The Postal Service Needs More than a Band-Aid）· 改写 6 · 重拟 4。<b>给「习语就重拟」加个限定</b>：Band-Aid 是习语，却原样进了选项——因为标题里有主体（The Postal Service）、有判断（Needs More than）；被重拟的习语标题（2017 T1 Hurry Up and Wait、2015 T1 Is the Writing on the Wall …）要么没主体、要么是问句。2018 卷两道标题题（T2、T4）都是原样。',
        '<b>原刊标题账更新（全站十七道标题题）</b>：原样 7（加 2019 T1 Patience as a Corporate Virtue）· 改写 6 · 重拟 4。<b>箴言报社论出过三道标题题（2016 T1 · 2018 T2 · 2019 T1），三道全是原样</b>——箴言报社论的标题是平实的判断短语，本身就是全文一句话；2019 T1 连原刊导语（Other steps can help reduce ‘short-termism’ in corporations）都被拿去出了 24 题。'],
 refs:[{p:'2015_T3_科学期刊加入统计审查潮流.html',q:'col1',label:'2015·T3 · 02+ 专栏（导语四格表：31 与 35 同源）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q31',label:'2015·T3·31（Science ＋ other journals ⟹ journals 复数）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q35',label:'2015·T3·35（原标题 Joins Push to Screen Statistics）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q30',label:'2018·T2·30（原刊标题一字不差：A Rise in Critical Skills for Sharing News Online）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q40',label:'2018·T4·40（原刊标题一字不差：The Postal Service Needs More than a Band-Aid）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'col5',label:'2018·T4 · 02+++++ 专栏（标题账十六道 ＋ 「习语就重拟」的限定）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q25',label:'2019·T1·25（原刊标题一字不差：Patience as a Corporate Virtue）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'col3',label:'2019·T1 · 02+++ 专栏（标题账十七道 ＋ 箴言报三道全原样）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q36',label:'2019·T4·36（独句导语 ＝ 全文：force more people to pay sales tax ⟹ C）'}]},
{id:'R187', tier:'🔴', qt:'词义题（The phrase X is closest in meaning to）· 被考短语是一条流程里的某一步（then／next／these 回指）', title:'流程链定词义：把被考词放进「前一步 → ? → then 下一步」——下一步处理的是 these（一部分），这一步就只能是「挑出来」；再往后找白话版反证；词义题考的那一步，常常就是后文被批评的那一环',
 trig:['被考短语所在句是被动流程句：<code>X will be flagged up for … by … or by …</code>','下一句有 <code>then</code>，宾语用 <code>these</code>／<code>such</code> 回指上一步的结果','后文有人评价这套流程，点名某一环（<code>relies on … to identify … in the first place</code>）'],
 flow:'① <b>画流程链</b>：全体 → [被考词] → then 下一步 → 结果；<br>'
     +'② <b>看两头</b>：前面是「全部」，后面是「这些」⟹ 中间必是筛选／标记类动作；看施动者：判稿的人不会「修改」；<br>'
     +'③ <b>构词只做验算</b>：flag（旗）→ 插旗标记；先用流程定方向，再用构词验；<br>'
     +'④ <b>往后找白话版</b>：同一个名词（scrutiny）在后文复现的那一句，就是被考词的改写。',
 tmpl:'<table class="tk"><tr><th>流程（2015·T3）</th><th>原文</th><th>题</th></tr>'
     +'<tr><td>① 标出</td><td>②❸ <code>will be <b>flagged up</b> for additional scrutiny</code></td><td><b>32C marked</b> ✔</td></tr>'
     +'<tr><td>② 找人 → 审</td><td>②❹ <code>will <b>then</b> find external statisticians to review <b>these manuscripts</b></code></td><td>32A found ✗（词形挪位）</td></tr>'
     +'<tr><td>⚠️ 弱点</td><td>⑥❸ <code>relies on the board … to <b>identify ‘the papers that need scrutiny’</b> in the first place</code></td><td><b>34C</b>（同一个节点）</td></tr></table>'
     +'<p class="note">32 问「这一步是什么」，34 问「对整套做法怎么看」——答案落在同一个流程节点上。</p>',
 traps:['<b>下一句的动词最像答案</b>：32A found 来自②❹ 的 find（宾语是统计学家，与稿件无关），found 还能读成「建立」——一个词两层误导（接 <a href="#R6">R6</a>）。',
        '<b>行业常识造干扰</b>：32B revised 来自「审稿就会退修」的常识，但施动者是编辑与审稿人，他们判稿不改稿；32D stored 无中生有。',
        '<b>白话版可能隔了好几段</b>：<a href="#R120">R120</a> 说往下读一句，本篇要读到末段——靠 scrutiny 这个钩子搜；分工——<a href="#R10">R10</a> 管词义三步，<a href="#R123">R123</a> 管流程链的条件题，本卡管<b>流程链上某一步的动作是什么</b>。'],
 refs:[{p:'2015_T3_科学期刊加入统计审查潮流.html',q:'col2',label:'2015·T3 · 02++ 专栏（标稿 → 找人 → 审稿 ＋ 弱点节点）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q32',label:'2015·T3·32（flagged up ＝ marked）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'s15',label:'2015·T3 · 长难句 s15（identify … in the first place 反证）'}]},
{id:'R188', tier:'🟡', qt:'人物观点题（X believes that … may ___ ／ X holds that what … is doing ___）· 原文是带评价的引语', title:'人物评价短语词典：「B 以 A 为样板」＝「A 为 B 树立榜样」；「有可取之处，但有一个弱点」＝「还有改进空间」——人物观点题考的是把评价短语翻成选项措辞，档位由折扣词（some／a／hopefully）和 but 后面有多重决定',
 trig:['定位句是带评价的引语：<code>has some merit, but a weakness is</code>／<code>model their approach after</code>／<code>a most welcome step forward</code>','四个选项里有两三个方向不同或强度不同（threat／opposition／fail vs set an example／room for improvement）'],
 flow:'① <b>先扫态度词定方向</b>：一段全是褒义（foresight、novel、unique、lasting）⟹ 负面项先划；<br>'
     +'② <b>再按折扣词定档</b>：some merit（打折的肯定）、a weakness（一个弱点）、hopefully／may（期望不是事实）；<br>'
     +'③ <b>查词典翻译</b>：B model … after A ⟹ A set an example for B；merit ＋ weakness ⟹ room for further improvement；welcome ＋ overdue ⟹ should have been done earlier；<br>'
     +'④ <b>验两半</b>：「A, but B」型评价，正确项要把两半都装下；只装一半的是全赞或全否。',
 tmpl:'<table class="tk"><tr><th>原文评价（2015·T3）</th><th>档位</th><th>选项措辞</th></tr>'
     +'<tr><td>④❸ <code>B may want to model their approach after A</code></td><td>正 · 期望</td><td><b>33D</b> A may set an example for B</td></tr>'
     +'<tr><td>⑤❶ <code>a most welcome step forward</code> · <code>long overdue</code></td><td>强正 · 嫌晚</td><td>should have been taken earlier</td></tr>'
     +'<tr><td>⑥❸ <code>has some merit, but a weakness is …</code></td><td>弱正 ＋ 保留</td><td><b>34C</b> has room for further improvement</td></tr></table>'
     +'<p class="note">只读 weakness ⟹ 34D is to fail；把期望读成事实 ⟹ will 而不是 may。</p>',
 traps:['<b>主客互换不是偷换主体</b>：33D 的主语（the SBoRE）与④❸ 的主语（publishing places）不同，但关系没变——先把选项反过来说一遍，能还原成原句就是对的（接 <a href="#R21">R21</a>）。',
        '<b>档位看 but 后面有多重</b>：2014·T4 是 may cause more harm than good（保留压过肯定 ⟹ 取负面），2015·T3 只是 a weakness（肯定仍占上风 ⟹ 取改进空间）；分工——<a href="#R171">R171</a> 管作者的表扬—遗憾型评论，<a href="#R170">R170</a> 管让步型态度，本卡管<b>被引用人物的评价短语怎么翻成选项</b>。',
        '<b>义项偷换混在人物题里</b>：33C circulation ← ④❸ publications（发表的文章 → 发行量），态度方向对不上号时它也不对（接 <a href="#R139">R139</a>）。'],
 refs:[{p:'2015_T3_科学期刊加入统计审查潮流.html',q:'col3',label:'2015·T3 · 02+++ 专栏（评价短语 → 选项措辞词典）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q33',label:'2015·T3·33（model … after ⟹ set an example）'},
       {p:'2015_T3_科学期刊加入统计审查潮流.html',q:'q34',label:'2015·T3·34（merit ＋ weakness ⟹ room for improvement）'}]},
{id:'R189', tier:'🔴', qt:'人物观点题（According to the first two paragraphs, X was upset by）· 作者观点题（The author holds that …）· 评论文以名人的话开头（spoke of／she argued／she continued）', title:'引子人物被作者收编：开头两段是名人的话（带转述标记、带引号），后文作者去掉引号原样复述她的术语——她的诊断就是作者的论点；问人物的题与问作者的题同源，一个取「机制的后果」，一个取「机制的本质」',
 trig:['首段有 <code>X spoke of the “…”</code>、<code>she argued</code>、<code>she continued</code> 一类转述标记，而且带引号的术语','转述标记在某一段突然断掉，那一段的主句仍在用她的词（<code>the wider issue of dearth of integrity still stands</code>）','后文出现与首段几乎逐词相同的句子，只是引号没了、名词升了格（acceptance → doctrine）'],
 flow:'① <b>数转述标记</b>：标到哪一段为止，哪一段之前就是人物的话；<br>'
     +'② <b>在后文搜她的术语</b>：去掉引号复现 ＝ 作者认账（「代言」）；换了话题再不提 ＝ 只是由头（见 <a href="#R86">R86</a>）；<br>'
     +'③ <b>同源题分工</b>：问人物「为什么担忧」取因果链的走向（后果），问作者「这套信条显示什么」取作者自己的展开（本质）；<br>'
     +'④ <b>互相验算</b>：人物题选完回看作者题——答案应是同一件事的两面。',
 tmpl:'<table class="tk"><tr><th>她说的（2015·T4 ①②）</th><th>作者说的（③⑤）</th><th>题</th></tr>'
     +'<tr><td>①❶ spoke of the “unsettling <b>dearth of integrity</b> …”</td><td>③❶ the wider issue of <b>dearth of integrity</b> still stands</td><td>37D 的大前提</td></tr>'
     +'<tr><td>①❷ a collective <b>acceptance</b> that the only “<b>sorting mechanism</b>” … should be profit</td><td>⑤❸ the collective <b>doctrine</b> has been that the <b>sorting mechanism</b> … should be profit</td><td><b>36A</b> ↔ <b>39A</b></td></tr></table>'
     +'<p class="note">36 问她为什么不安 ⟹ consequences of the current sorting mechanism；39 问作者眼里集体信条显示了什么 ⟹ generally distorted values——同一个「利润当分选机制」，一个看后果、一个看本质。</p>',
 traps:['<b>引号是分水岭</b>：同一个术语带引号时是人物的，去掉引号就是作者的——判断「作者是否同意人物」，先找这个术语在后文还有没有引号（接 <a href="#R29">R29</a>）。',
        '<b>别把代言人当由头</b>：<a href="#R86">R86</a> 说人物由头 ≠ 主题，前提是后文换了轨；本卡的情形是后文<b>一直在用她的词</b>——这时问她的题就是在问全文的论点。',
        '<b>人物题只取人物段</b>：36 限定 the first two paragraphs，答案仍要在①② 里找依据；⑤ 的两张词单只用来验算，不用来作答（接 <a href="#R7">R7</a>）。',
        '<b>2017·T2·29</b>：开篇引语 “The ancient Hawaiians were astronomers” 在⑤ 被作者收回——early Polynesians 的好奇心今天驱使天文学家、our true ancestral homes ⟹ A fulfilling the dreams of ancient Hawaiians（⟹ <a href="#R219">R219</a>）。',
        '<b>2017·T3</b>：①❷ 作者许诺 <code>assess what he was referring to</code>，⑥❶ 兑现 <code>So, what Kennedy was referring to was that …</code>——肯尼迪的判词被作者收编成论点 ⟹ 31C misinterpreted 反向、31D low opinion 正确。'],
 refs:[{p:'2015_T4_窃听案与道德目的缺失.html',q:'col1',label:'2015·T4 · 02+ 专栏（她说的 vs 作者说的对照表）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q36',label:'2015·T4·36（她的不安 ＝ 分选机制的后果）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q39',label:'2015·T4·39（作者复述她的术语 ⟹ 价值观扭曲）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q29',label:'2017·T2·29（开篇引语在⑤ 被收回）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'q31',label:'2017·T3·31（①❷ 许诺 → ⑥❶ 兑现）'}]},
{id:'R190', tier:'🔴', qt:'作者观点题（The author believes that X’s defence／decision／verdict …）· 文中有官方结论（判决、裁定、调查结果）又有作者评论', title:'判决结果 ≠ 作者判断：法庭判她无罪、辩护「成功」是事实层，作者照录；作者的态度藏在惊叹词、排比和「也许有也许没有」里——档位落在「难以令人信服」，不上升到人格和罪名',
 trig:['文中出现 <code>found innocent／guilty</code>、<code>successful defence</code>、<code>the court ruled</code> 这类官方结论','紧挨着有作者的评价形容词（<code>astonishing</code>、<code>remarkable</code>、<code>bizarre</code>）或排比（<code>how little … how little … never …</code>）','作者刻意不下结论：<code>may or may not have …</code>、<code>whether or not …</code>'],
 flow:'① <b>把官方结论和作者评价分成两层</b>：successful／innocent 是事实层；astonishing、排比是作者层；<br>'
     +'② <b>作者层定方向</b>：惊叹 ＋ 排比 ⟹ 负面；<br>'
     +'③ <b>作者层定档位</b>：看他在哪里刹车——may or may not ⟹ 不定罪、只表示不信；<br>'
     +'④ <b>在负面选项里挑档位对的</b>：比作者重的（人格、阴谋、罪行）划掉，读偏的（琐碎）划掉。',
 tmpl:'<table class="tk"><tr><th>选项（2015·T4·38）</th><th>档位</th><th>判</th></tr>'
     +'<tr><td>B centered on trivial issues</td><td>读偏（how little ≠ 小事）</td><td>✗</td></tr>'
     +'<tr><td><b>C was hardly convincing</b></td><td>不信，但不定罪</td><td><b>✔</b></td></tr>'
     +'<tr><td>A revealed a cunning personality</td><td>上升到人格</td><td>✗</td></tr>'
     +'<tr><td>D was part of a conspiracy</td><td>上升到罪行（且与判决相反）</td><td>✗</td></tr></table>'
     +'<p class="note">作者在⑥❸ 写 may or may not have had suspicions——知不知情他不下结论，只说她不问、不指示、没留记录；这一刹车就是 C 的档位。</p>',
 traps:['<b>successful 不是作者的认可</b>：它是法庭结果；把它读成「作者认为辩护有道理」会滑向「可信」一侧。',
        '<b>借别人的罪名</b>：D 的 conspiracy 来自③❶ 库尔森的 conspiring——同一段两个人、两种判决，先给每个罪名标主人（接 <a href="#R21">R21</a>）。',
        '<b>行为 ≠ 解释</b>：原文只给了「不知道、不问、不打听」，A 的「狡诈」是没人说出口的解释（接 <a href="#R88">R88</a>）；档位尺见 <a href="#R12">R12</a>。',
        '<b>2017·T4 镜像</b>：法庭推翻定罪（结果层），作者说 legally sound、a step forward（作者层：支持）；对当事人行为，法院与作者都嫌（holding its nose · distasteful）——与 2015·T4 同样要把两层分开，方向正好相反（⟹ <a href="#R227">R227</a>）。'],
 refs:[{p:'2015_T4_窃听案与道德目的缺失.html',q:'col2',label:'2015·T4 · 02++ 专栏（法律层 vs 作者层五行表）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q38',label:'2015·T4·38（successful defence ⟹ hardly convincing）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'s17',label:'2015·T4 · 长难句 s17（may or may not 的刹车）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'col3',label:'2017·T4 · 02+++ 专栏（与 2015·T4 镜像表）'}]},
{id:'R191', tier:'🔴', qt:'细节题／作者观点题／末段推断题，定位句是一张清单（逗号串、or 串、how … how … 排比、not to A, to B or to C）', title:'清单题：定位句是一张清单时，正确项给整张清单起上位名、再标方向；干扰项专从清单里抽一项（或从两张清单各抽一项拼起来），再换对象、扩范围或拔高',
 trig:['定位句里有三项以上的并列（<code>government, media or business</code>、八个词一串）','两张相对的清单并排（<code>The words that have mattered are … Words degraded to the margin have been …</code>）','否定清单 ＋ 一句揭底（<code>was not to A, to B or to C. It was to D.</code>）'],
 flow:'① <b>给清单画框、数项数</b>：卷边写「清单 × N」；<br>'
     +'② <b>找方向</b>：方向在清单的谓语里（have mattered ／ degraded；was not … It was …），不在清单的词里；<br>'
     +'③ <b>起上位名</b>：用作者暗示的类别（经济词 vs 道德词 ⟹ values；三项都是道德 ⟹ moral awareness）；<br>'
     +'④ <b>筛干扰项</b>：只出现清单中一项原词的，先打问号——再看它有没有被扩范围、拔档位、换维度。',
 tmpl:'<table class="tk"><tr><th>清单（2015·T4）</th><th>正确项</th><th>抽一项的干扰项</th></tr>'
     +'<tr><td>⑤❹ 八个被看重的词 ／ ⑤❺ 五个被边缘化的词</td><td><b>39A</b> generally distorted values</td><td>39B wealth＋fairness · 39C margin</td></tr>'
     +'<tr><td>⑥❶ not to promote understanding, to be fair … or to betray any common humanity</td><td><b>40B</b> moral awareness matters</td><td>40C common humanity · 40A what was written</td></tr>'
     +'<tr><td>②❶ government, media or business ＋ 危险、伤害、迷失</td><td><b>36A</b> consequences of the current sorting mechanism</td><td>36C government</td></tr></table>'
     +'<p class="note">抽一项之后通常还有一次加工：40C 扩范围（这份报纸 → 新闻报道）并拔档位（流露一点 → 核心），40A 换维度（公正 → 质量）。</p>',
 traps:['<b>两张单子各抽一个词拼起来</b>：39B unfair wealth distribution——wealth 来自词单一、fairness 来自词单二，拼出一个原文没谈的「分配」（接 <a href="#R39">R39</a>）。',
        '<b>方向别从词里读</b>：39D 看到 moral 与 flexibility 就揉成「道德僵化」，却没看 have mattered／degraded 两个谓语——弹性被捧、道德被贬，问题是道德太少。',
        '<b>分工</b>：<a href="#R48">R48</a> 管选项只截了并列成分的一半；<a href="#R118">R118</a> 管用作者自己的类别名；<a href="#R89">R89</a> 管「个例 ＋ 一串同类」取公因式；本卡管<b>一题的定位句本身就是清单</b>——上位名 ＋ 方向。'],
 refs:[{p:'2015_T4_窃听案与道德目的缺失.html',q:'col3',label:'2015·T4 · 02+++ 专栏（四张清单：上位名 vs 抽一项）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q39',label:'2015·T4·39（两张词单 ⟹ distorted values）'},
       {p:'2015_T4_窃听案与道德目的缺失.html',q:'q40',label:'2015·T4·40（否定清单翻正 ⟹ moral awareness）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q35',label:'2019·T3·35C（mega-corporations 只是清单一类，拔成「未来在科技巨头手里」）'}]},
{id:'R192', tier:'🔴', qt:'完形 · 连接两个名词性成分的短语空（rather than／along with／according to／regardless of／instead of／as well as）', title:'连接空先把两端的修饰语并排写：是同一根轴的两端 ⟹ 取舍（rather than）；同类同向、能相加 ⟹ 伴随（along with）——被打引号、放进感叹句的那一端是被推开的',
 trig:['四个选项是 according to／rather than／regardless of／along with 这类短语介词或连词','空格前后各是一个名词性成分，两端的修饰语对举（genetically ↔ functional、natural ↔ deliberate）','后一端带引号，或句末是感叹号；上一句刚说过 there is more to it／not simply'],
 flow:'① <b>把空格两端各自的修饰语抽出来，上下并排写</b>：genetically similar ／ &quot;functional&quot; kinship；<br>'
     +'② <b>问：两端是不是在回答同一个问题</b>（为什么亲近？——出身 vs 用途）。是 ⟹ <b>一根轴的两端</b> ⟹ 取舍（rather than／instead of）；<br>'
     +'③ 两端<b>同类、同向、能相加</b>（都是原因、都是好处）⟹ 伴随或递进（along with／as well as）；<br>'
     +'④ <b>验方向</b>：带引号、放进感叹句的那一端多半是被调侃、被推开的；上一句若说 there is more to it，被推开的是<b>表面</b>那一端。',
 tmpl:'<table class="tk"><tr><th>2015 完形 13</th><th>两端</th><th>判定</th></tr>'
     +'<tr><td>choosing genetically similar friends ___ &quot;functional kinship&quot; of being friends with benefits!</td><td><b>基因上</b>的相近 ↔ <b>用途上</b>的亲缘</td><td>一根轴的两端 ⟹ <b>rather than</b></td></tr>'
     +'<tr><td>四个选项的动作</td><td>according to 当依据 · regardless of 当障碍 · along with 当同伴</td><td>三个把后面「拉进来」，只有 rather than「推出去」</td></tr></table>'
     +'<p class="note">同类的轴：natural ↔ deliberate（天生 ↔ 刻意）· real ↔ so-called（真的 ↔ 所谓的）· inner ↔ surface（内在 ↔ 表面）——见到这种对举，连接词只能取舍。</p>',
 traps:['⚠️ <b>附近的 together 别读到空格上</b>：many mechanisms <u>working together</u> that drive us in choosing … ___ …——together 只管机制之间的协同，不管空格两端（2015 完形 13 我选 along with 的病根）。',
        '<b>三缺一能救这一分</b>：according to／regardless of／along with 都把后面的东西拉进来（依据、障碍、同伴），只有 rather than 把它推出去——先分组就不会在 B／D 之间犹豫（接 <a href="#R74">R74</a>）。',
        '<b>背景知识反向时服从文内</b>：functional kinship 在论文里是作者自己的正面术语（友谊像功能上的亲情），本文记者给它打引号、配上 friends with benefits 与感叹号，改成了被推开的一端（接 <a href="#R155">R155</a>）。',
        '<b>分工</b>：<a href="#R104">R104</a> 管「句中已有 rather than／instead of，用它反推另一端的空」；<b>本卡管「空格就是连接词本身」</b>——先判两端反不反向，再决定填不填 rather than。引号的排斥功能见 <a href="#R29">R29</a>。',
        '<b>2016·完形·1（同向正例）</b>：<code>not only his parents and his friends, ___ those of the young woman, but also a matchmaker</code>——两端是<b>同类同向、能相加</b>的两群人（男方亲友 ↔ 女方亲友）⟹ 并列 as well as；on behalf of（代表）把两群人说成一方代表另一方。与 2015 完形 13 一反一正。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q13',label:'2015·完形·13（genetically ↔ functional ⟹ rather than，我的错题）'},
       {p:'2015_完形_朋友是基因上的远亲.html',q:'axis',label:'2015·完形 · 02+ 错题标本（五步复盘）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q1',label:'2016·完形·1（同类同向 ⟹ as well as）'}]},

{id:'R193', tier:'🔴', qt:'完形 · 全文反复出现同一个动作（否定表面、指向深层）', title:'「不止于表面」连发：Though not X … as &quot;X&quot; as · may seem …, it is not so · there is more to it · do not simply explain——在卷边写「表→里」，凡在表面（刻意、功利、同族）与深层（不自觉、天生、基因）之间二选一的空，一律站深层',
 trig:['首句是 Though not X, A is as &quot;X&quot; as B（表面不是、其实是）','文中反复出现 may seem … not so／there is more to it／do not simply／not merely','选项分成「刻意、有目的」与「不自觉、天生」两批（decision／endeavor vs tendency）'],
 flow:'① <b>读完首句就在卷边写「表 → 里」</b>；<br>'
     +'② 往下每遇到一次「否定表面」的信号句，打一个勾——<b>打到第二个勾就可以确信这是全文的动作</b>；<br>'
     +'③ 做二选一的空时问：<b>哪个选项是「表面那层」</b>（功利、刻意、看得见的原因）？先划掉；<br>'
     +'④ 剩下站在「深层」一侧的（天生的、不自觉的、机制驱动的）就是答案。',
 tmpl:'<table class="tk"><tr><th>2015 完形的四连</th><th>表面那层</th><th>管哪个空</th></tr>'
     +'<tr><td>①❶ Though not biologically related … as &quot;related&quot; as</td><td>没有血缘</td><td>8 resemble</td></tr>'
     +'<tr><td>③❶ 1% may seem ___, it is not so to a geneticist</td><td>数字看着小</td><td>6 insignificant</td></tr>'
     +'<tr><td>④❸❹ there is more to it · rather than &quot;functional kinship&quot;</td><td>环境、功利</td><td>11 to · 13 rather than</td></tr></table>'
     +'<p class="note">⑥❶ do not simply explain people&#39;s ___ to befriend those of similar ___ backgrounds 是第四连：推开「同族相亲」，18 选不自觉的 tendency（划掉刻意的 decision／arrangement／endeavor）。</p>',
 traps:['<b>四个信号一组背</b>：Though not X … &quot;X&quot; · may seem … it is not so · there is more to it (than meets the eye) · do not simply／not merely／not just——<b>都是否定表面、指向深层</b>。',
        '<b>18 题是同一个方向的第二次落地</b>：somehow manage to select（③❷）＋ mechanisms that drive us（④❹）早已说明择友是不自觉的 ⟹ tendency；decision／arrangement／endeavor 三个刻意词是「表面」那一侧（接 <a href="#R74">R74</a> 的客观倾向词族）。',
        '<b>分工</b>：<a href="#R176">R176</a> 管<b>单句里</b>的限定词打折（seemingly、to a certain extent）；<a href="#R66">R66</a> 管阅读里作者的折扣词；<b>本卡管全文反复出现的同一个动作</b>——出现两次以上才算，一次只是修辞。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'deeper',label:'2015·完形 · 02++ 「不止于表面」四连表'},
       {p:'2015_完形_朋友是基因上的远亲.html',q:'q18',label:'2015·完形·18（刻意三词 vs tendency）'},
       {p:'2015_完形_朋友是基因上的远亲.html',q:'q11',label:'2015·完形·11（there is more to it）'}]},

{id:'R194', tier:'🟡', qt:'完形 · 「X may seem ___, it is not so to Y」型评价空（选项常全带否定前缀）', title:'看似句：X may seem ___, it is not so to Y——空格填 Y 所否定的那个看法：先找 Y 的真实看法、再取反；四个选项全带 in-／un- 时，剥掉前缀比词根',
 trig:['While／Though X may seem／appear ___, it is not so／not the case to／for Y','四个选项同带否定前缀（insignificant／unexpected／unreliable／incredible）','Y 是专家、内行、当事人'],
 flow:'① <b>认句型</b>：一句里放了两种看法——一般人（may seem）与 Y（not so）；<br>'
     +'② <b>找 Y 的真实看法</b>：多在上一句或下一句（2015 完形：首句说 1% 相当于四代表亲 ⟹ 遗传学家眼里很有分量）；<br>'
     +'③ <b>取反填空</b>：Y 认为 significant ⟹ 空格 insignificant；<br>'
     +'④ <b>选项全带否定前缀时剥前缀</b>：significant／expected／reliable／credible——问「Y 认定的是哪个词根」，别被四个「不」字晃眼。',
 tmpl:'<table class="tk"><tr><th>2015 完形 6</th><th>Y 的看法</th><th>空格</th></tr>'
     +'<tr><td>While 1% may seem ___, it is not so to a geneticist.</td><td>1% ＝ 四代表亲的相似度，<b>分量很重</b></td><td><b>insignificant</b></td></tr></table>',
 traps:['<b>incredible 双义陷阱</b>：取「难以置信」则与福勒随后的「不知怎么」一样是惊讶，不构成 not so 的对立；取「极大」则方向正好反（遗传学家认为它大）。',
        '<b>unexpected 也是方向拧</b>：福勒下一句的 somehow 恰恰说明遗传学家也觉得意外——「对遗传学家并非出乎意料」站不住。',
        '<b>同族句</b>：2013 完形的 sound small, but … 之后必是「代价不小」（<a href="#R158">R158</a>）；2014 完形 seemingly innocent ⟹ 其实有害（<a href="#R176">R176</a>）——<b>看似句的空永远填「表面那一层」</b>，与 <a href="#R193">R193</a> 同向。',
        '2019·完形·7：四个 un- 形容词（unattractive／unfamiliar／unchanged／uncrowded）剥掉前缀比词根——只有 familiar 说「你认不认得这里」，与「迷路」同轴；下一段 familiar sights 正是它的反义回扣。'],
 refs:[{p:'2015_完形_朋友是基因上的远亲.html',q:'q6',label:'2015·完形·6（may seem ___, not so to a geneticist）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q7',label:'2019·完形·7（四个 un-，剥前缀 ⟹ familiar）'}]},
{id:'R195', tier:'🔴', qt:'新题型 · 选句填空（说明文／教材／指南：正文先对读者说 you，后来换成 we）', title:'人称分区：正文中途从 you 换到 we，选项的人称就是区号——先按人称把七项分堆；哪一区候选比空多，多出来的那项就是多余项嫌疑人；无区的直接出局',
 trig:['正文前半对读者说 you／your，后半换成 we／our（或反过来）','七个选项里 you、we、第三人称各占几句','文体是教材开篇、学习方法、操作指南类说明文'],
 flow:'① <b>扫正文</b>：每段圈出第一个人称代词，段旁标 Y／W／—（中性句不算）；<br>'
     +'② <b>扫七项</b>：同样标 Y／W／3；<br>'
     +'③ <b>按区配对</b>：区里空数＝候选数 ⟹ 全是答案，一口气做完；候选比空多 ⟹ 多出来的是多余项嫌疑人；第三人称无区 ⟹ 多余；<br>'
     +'④ <b>同区同人称的两项</b>，再用下一句与方向判（<a href="#R196">R196</a>／<a href="#R197">R197</a>）。',
 tmpl:'<table class="tk"><tr><th>2015 的区</th><th>空</th><th>候选</th></tr>'
     +'<tr><td><b>you 区</b>（①②段）</td><td>41 · 42</td><td>C · D · E（三选二，D 多余）</td></tr>'
     +'<tr><td><b>we 区</b>（③段末–⑤段）</td><td>43 · 44 · 45</td><td>A · B · G（三对三）</td></tr>'
     +'<tr><td>无区（第三人称）</td><td>—</td><td>F（多余）</td></tr></table>'
     +'<p style="margin-top:8px">黄皮书五组备选（41 C · 42 D E · 43 B G · 44 B · 45 A F）里，<b>只有 45 的 F 跨出了人称区，恰好被一票否决</b>。人称一换，说明论述层级换了：you 是「你这一个读者的操作」，we 是「所有读者共有的处境」。</p>',
 traps:['<b>人称是粗筛不是判决</b>：同区两项人称相同时切不开（2015·42 的 D、E 都是 you），最后一刀靠方向与下一句。',
        '<b>中性句与收尾句不算反例</b>：③❶ each reader、④❹ readers 没有人称；⑤❾ 的 your 是全文收束时回头对读者说话——区界只看空格前后两三句。',
        '<b>一个人称到底的文章没有这把刀</b>：2007 标题全是祈使句、2008 正文以 you 为主（五个答案 you 句与无人称句三比二）、2009 通篇第三人称；2012 的 D、2013 的 A 各只冒出一个 we，成不了区。先扫一眼正文有没有「换人称」再决定用不用。'],
 refs:[{p:'2015_新题型_阅读是一场主动的推断.html',q:'person',label:'2015·新题型 · 02+ 人称分区表'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q42',label:'2015·新题型·42（同区 D、E 人称切不开）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q45',label:'2015·新题型·45（F 第三人称，两区都进不去）'}]},

{id:'R196', tier:'🟡', qt:'新题型 · 选句填空（空格后一句以 Such／These／This kind of ＋ 名词开头）', title:'Such ＋ 类名尾钩：下一句用 Such X 回头指认空格，X 就是空格内容的「标题」——去七项里找能被 X 统称的那一句；X 若是全文首现的新词，只有首次引入它的那一项能进',
 trig:['空格后紧跟 Such X／These X／This kind of X ＋ 谓语','X 是概括名词（material／dimensions／factors／measures／problems）','两个选项内容都「像」X'],
 flow:'① <b>圈出 Such 后面的名词 X</b>，把它当成空格的标题；<br>'
     +'② 七项里找<b>内容能被统称为 X</b> 的：列清单的、举例的、下定义的；<br>'
     +'③ X 若在全文首现（2015 的 background），与 <a href="#R136">R136</a> 合流——只有<b>第一次说出这个词</b>的那一项能进；<br>'
     +'④ X 太宽（dimensions）会罩住假货，最后一刀回到空格<b>上一句</b>（that text 贴不贴 a given text、Rather 有没有否定可纠正）。',
 tmpl:'<table class="tk"><tr><th>2015 的空与下一句</th><th>谁能被它统称</th></tr>'
     +'<tr><td>43 · Such background material</td><td><b>G</b>（background、material 两词都首现于此）；B 有背景之实、无其名</td></tr>'
     +'<tr><td>45 · Such dimensions of reading</td><td><b>A</b>（读的目的三问 ＋ 场景对比）；F 是文学体裁，不是读法</td></tr></table>'
     +'<p style="margin-top:8px"><b>三年三种尾钩</b>：2012 新词当旧信息（<a href="#R136">R136</a>）比词面 · 2013 This ＋ 评语（<a href="#R159">R159</a>）比类型 · 2015 Such ＋ 类名（本卡）比标题——都是「下一句替空格起了名字」。</p>',
 traps:['<b>类名太宽会钓假货</b>：dimensions 能罩住 F 的三种体裁、background 能罩住 B 的六项因素——黄皮书备选 45 A F、43 B G 正是这样钓出来的。类名只缩小范围，定答案还得回上一句。',
        '<b>Such X 与 This ＋ 评语的分工</b>：This is a shame 给的是类型（坏事），Such background material 给的是名称（背景材料）；两者都回指整句而非某个词，所以都只认<b>紧邻</b>的上一句。',
        '<b>向上版见 <a href="#R270">R270</a></b>：排序题里 These tools／None of this／These views 按「类」找上家——类名两头都要对上。'],
 refs:[{p:'2015_新题型_阅读是一场主动的推断.html',q:'tail',label:'2015·新题型 · 02+++ 五道尾钩总表'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q43',label:'2015·新题型·43（Such background material ⟹ G）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'q45',label:'2015·新题型·45（Such dimensions of reading ⟹ A）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q45',label:'2019·新题型·45（These tools 往上找一串动作）'}]},

{id:'R197', tier:'🟡', qt:'新题型 · 找多余项（说明文层层外扩／论点句是 not X … Rather Y）', title:'逆箭头的选项：全文一路把重心从 X 推向 Y，偏有一项把重心拉回 X——它句内再通顺也是多余项，因为它说的正是文章要推翻的那种看法',
 trig:['正文有 not X … Rather Y／What is in question is not … 这类纠偏句','某个选项的落点正是被否定的 X（the author intended／the true meaning／the original purpose）','这一项带总结词（In effect／In short／Essentially），放进某个空读起来很顺'],
 flow:'① 找全文的纠偏句，写下「被否定的 X → 被肯定的 Y」；<br>'
     +'② 给每个选项标<b>重心落在 X 还是 Y</b>；<br>'
     +'③ 落在 X 的那一项，<b>再顺也要验下一句</b>：下一句若在说 Y（每个读者走的路不同／意义不是取回来的），它就是逆箭头；<br>'
     +'④ 多余项三问并排问：是不是某个答案的下家（<a href="#R137">R137</a>）？杠杆是不是作者亮出的那根（<a href="#R161">R161</a>）？方向是不是和全文一致（本卡）？',
 tmpl:'<table class="tk"><tr><th>2015·42 的两项</th><th>重心</th><th>下一段怎么说</th></tr>'
     +'<tr><td><b>E ✔</b> further inferences … significant to you</td><td>读者（作者 far less responsible）</td><td>③❶ 每个读者走的路不同 ⟸ 因为有个人反应</td></tr>'
     +'<tr><td><b>D ✘</b> In effect … the ones the author intended</td><td>作者本意</td><td>③❷ 不是取回唯一「真」意 ⟹ 正面否定 D</td></tr></table>'
     +'<p style="margin-top:8px">多余项造法第三族「<b>方向反</b>」首见于 2015；前两族是「词面像」「位置满」（见 2013 页与 <a href="#R81">R81</a>）。</p>',
 traps:['<b>In effect 是化妆品</b>：总结词让 D 在 42 句内通顺，黄皮书备选也是 D E——<b>顺的是这一句，不顺的是下一段</b>。',
        '<b>方向反 ≠ 内容错</b>：「还原作者本意」本身是一种正当的阅读活动，错在它站进了一篇正要说「意义不是取回来的」文章里。选句填空只认这篇文章的立场（同 <a href="#R161">R161</a>「别用常识替作者选方案」）。'],
 refs:[{p:'2015_新题型_阅读是一场主动的推断.html',q:'q42',label:'2015·新题型·42（D 为什么进不来）'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'ladder',label:'2015·新题型 · 02++ 外扩线七级台阶'},
       {p:'2015_新题型_阅读是一场主动的推断.html',q:'extra',label:'2015·新题型 · 03 两个多余项'}]},

{id:'R198', tier:'🔴', qt:'作者态度题 · 最佳标题题 · 是非细节题（社论评一项政策／法律／新规，文中还出现另一种做法）', title:'认目标、比手段：Such measures have uplifting motives … however, rely too much on … In contrast … may be the best step. Even better would be …——作者给「目标」和「手段」分开打分；阶梯上没有负分，「失败／威胁／又一轮折腾」就都没有台阶可站',
 trig:['先夸动机：uplifting／admirable／well-intentioned motives · a step in the right direction · That’s a start','再批做法：however ＋ rely too much on／go too far／heavy-handed','又出现另一种做法：In contrast to X’s actions … · voluntary／self-regulation','末段排座次：may be the best step · Even better would be · a better way'],
 flow:'① 在卷边画两栏：<b>目标 ｜ 手段</b>；<b>however 翻的是哪一栏</b>，就只在那一栏里扣分——④❶ <code>The French measures, however, rely too much on severe punishment</code> 扣的是手段，目标栏的 uplifting 一分不减；<br>'
     +'② <b>too much／too heavily 是程度批评</b>：该用，但不该主要靠它——不等于无效、失败、没必要；<br>'
     +'③ 文中若还有另一种手段（In contrast to …），把两种手段<b>按作者的比较级排座次</b>（more on · rather than · the best · Even better）；<br>'
     +'④ 把整篇的评价词连成一根阶梯（a start → go beyond → the best step → even better）：<b>阶梯上有没有负分</b>，决定态度题和标题题能不能出现「失败／威胁／徒劳」一类的词；<br>'
     +'⑤ 标题题要一个<b>能同时装下几种手段</b>的中性偏正名词（Challenge ／ Efforts ／ New Approaches），只装一种手段、或带敌意的一律排。',
 tmpl:'<table class="tk"><tr><th>2016·T1 的台阶</th><th>评的是</th><th>题</th></tr>'
     +'<tr><td>②❶ uplifting motives · ②❸ That’s a start · ②❹ go beyond</td><td>目标（满分）</td><td>22D · 23A 反证</td></tr>'
     +'<tr><td>④❶ however, rely too much on severe punishment</td><td>法国手段（偏重）</td><td>23A 已失败 ✘</td></tr>'
     +'<tr><td>⑦❶ ethical persuasion rather than law … the best step · ⑦❷ Even better</td><td>自律 ＞ 法律 ＜ 美超越行业标准</td><td>25A ✔ · 25C／25D ✘</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 一句可背的话：<b>作者批手段，不等于否目标；阶梯上没有负分，选项里就不许有负分</b>。</p>',
 traps:['<b>把手段的扣分记到目标上</b>：23A <code>The French measures have already failed</code>——rely too much on 只是「太依赖」，何况法案才 preliminary approval，谈不上「已经」（兼 <a href="#R61">R61</a> 时态定调）。',
        '<b>把「更进一步」贬成「又一轮折腾」</b>：25C <code>Just Another Round of Struggle for Beauty</code>——Just another round 是轻蔑口吻；作者说的是 Even better，方向相反（<a href="#R12">R12</a> 强度尺）。',
        '<b>把「挑战标准」升成「威胁行业」</b>：25D <code>The Great Threats to the Fashion Industry</code>——受挑战的是行业的身材典范，不是行业（⟹ <a href="#R200">R200</a>）。',
        '<b>分工</b>：<a href="#R171">R171</a> 是「表扬—遗憾」（褒贬对同一件事的两面，重心在 however 后）；<b>本卡是「认目标、疑手段、比手段」</b>，重心在排座次那句；<a href="#R142">R142</a> 书评「认诊断、疑药方」是近亲；<a href="#R9">R9</a> 告诉你两国对照处会出题，本卡告诉你出题的方向。'],
 refs:[{p:'2016_T1_时尚业的身材典范面临挑战.html',q:'col1',label:'2016·T1 · 02+ 专栏（四级评价阶梯）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q23',label:'2016·T1·23A（太依赖重罚 ≠ 已失败）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q25',label:'2016·T1·25（Challenge 装下法律与劝说；C 轻蔑、D 敌意）'}]},

{id:'R199', tier:'🔴', qt:'推理判断题（X is most likely to be rejected／punished／banned for …）· 细节题（规定、标准、限制类句子）', title:'维度词不给方向：rules and sanctions regarding the age, health … ——regarding／concerning／on 只说「管哪一块」，不说「往哪边管」；方向去宗旨句里找（especially on young people），被罚的是规定的反面',
 trig:['原文有 rules／standards／limits／requirements ＋ regarding／concerning／on／about／related to ＋ 中性名词（age／health／size／price／speed）','题干问 most likely to be rejected／punished／disqualified for','选项照抄原文的维度名词，却带了一个方向（high／low／too much／little）'],
 flow:'① 抄下维度：规定管哪几块（⑥❶ the age, health, and other characteristics of models）；<br>'
     +'② 找宗旨句：规定是为了保护谁、防止什么——常在紧跟的引语、目的状语、charter／mission 句里（⑥❷ take responsibility for the impact … especially on young people）；<br>'
     +'③ 用宗旨给每个维度标方向：年龄 ⟹ 防太小；健康 ⟹ 防不健康；<br>'
     +'④ 被罚者 ＝ 规定的反面：<b>先写规定的方向，再取负号</b> ⟹ showing little concern for health factors；<br>'
     +'⑤ 照抄维度名词、方向却和宗旨相反的选项，当场划掉。',
 tmpl:'<table class="tk"><tr><th>选项（2016·24）</th><th>维度</th><th>方向对吗</th></tr>'
     +'<tr><td>C little concern for health factors</td><td>health</td><td>✔ 宗旨重健康 ⟹ 违规者不重视</td></tr>'
     +'<tr><td>D a high age threshold</td><td>age</td><td>✘ 宗旨护年轻人 ⟹ 防的是太小</td></tr>'
     +'<tr><td>A perfect physical conditions</td><td>physical</td><td>✘ 把被纠正的「理想身材」换成「身体好」</td></tr>'
     +'<tr><td>B models’ character</td><td>characteristics</td><td>✘ 形近词偷换</td></tr></table>'
     +'<p style="margin-top:8px">见到维度词，在它后面的名词下画一根双向箭头「↔」：方向待定，去宗旨句补。</p>',
 traps:['<b>拿维度当方向</b>：rules regarding the age 不等于 an age limit that is high——24D 就造在这个空当上。',
        '<b>拿现实补方向</b>：丹麦宪章 2015 版确有「模特最低 16 岁」，可以验算，但考场上方向只从原文宗旨句来。',
        '<b>分工</b>：<a href="#R121">R121</a> 是「原文有轴，选项的修饰语站错边」；<b>本卡是「原文只给轴、没标刻度」</b>，刻度靠宗旨句补；<a href="#R172">R172</a> 清单同行对齐——regarding 后的清单也要逐项标方向。'],
 refs:[{p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q24',label:'2016·T1·24（regarding 只给维度，especially on young people 给方向）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'col2',label:'2016·T1 · 02++ 专栏（维度 → 宗旨 → 方向 → 违规者）'}]},

{id:'R200', tier:'🟡', qt:'首段推断题 · 最佳标题题 · 是非细节题（作者批评一个行业／机构的某一样东西时）', title:'矛头指向「X 的 Y」，不是 X：lost an absolute right to define beauty ／ a challenge to the fashion industry’s body ideals——被针对的是行业的一项权力、一套标准；选项把所有格后面那截砍掉、再配一个负面谓语（decline／threats），就是这族干扰项',
 trig:['原文的靶子是所有格短语：X’s right／power／standards／ideals／practice／habit · the Y of X','选项的主语或宾语只剩 X（the fashion industry／the company／the profession）','选项谓语比原文「热」一档：decline／collapse／threats／getting worse'],
 flow:'① 把原文的靶子整段抄下来（an absolute right to define physical beauty · the fashion industry’s body ideals）；<br>'
     +'② 把选项的靶子抄在旁边，<b>看它丢了哪一截</b>——丢了 Y 只剩 X，范围就从一个部件放大成了整台机器；<br>'
     +'③ 再比谓语的温度：原文是 lose ／ challenge ／ address the misuse（纠偏），选项是 decline ／ threat ／ worse（崩坏）；<br>'
     +'④ 最后查作者对 X 本身的态度：本篇两段夸时尚业在自律——被夸的行业不会是「巨大威胁」的受害者。',
 tmpl:'<table class="tk"><tr><th>原文的靶子</th><th>选项的靶子</th><th>题</th></tr>'
     +'<tr><td>an <b>absolute right to define</b> physical beauty</td><td>The fashion industry would decline</td><td>21D ✘</td></tr>'
     +'<tr><td>the Fashion Industry’s <b>Body Ideals</b></td><td>The Great Threats to the Fashion Industry</td><td>25D ✘</td></tr>'
     +'<tr><td>knows it has <b>an inherent problem</b>（正在改）</td><td>Its inherent problems are getting worse</td><td>23D ✘</td></tr></table>',
 traps:['<b>名词砍一截、动词升一档</b>是这族干扰项的固定长相：21D 与 25D 都是。',
        '<b>标题题里拆 X of Y</b>：25A 与 25D 都有 the Fashion Industry，区别全在 ’s Body Ideals（⟹ <a href="#R125">R125</a>）。',
        '<b>分工</b>：<a href="#R24">R24</a> 管「小群体被放大成全体」，<b>本卡管「一个部件被放大成整体」</b>；<a href="#R34">R34</a> 是定语换了主人，本卡是定语整个被砍；<a href="#R38">R38</a> 种属层级、<a href="#R46">R46</a> 整体与一类是同族。'],
 refs:[{p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q21',label:'2016·T1·21D（失去一项特权 ≠ 行业衰落）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'q25',label:'2016·T1·25D（挑战身材典范 ≠ 威胁行业）'},
       {p:'2016_T1_时尚业的身材典范面临挑战.html',q:'col3',label:'2016·T1 · 02+++ 专栏（所有格靶子对照表）'}]},

{id:'R201', tier:'🔴', qt:'作者观点题 · 作者态度题（题干 The author holds／believes that X’s preference／policy／decision …）', title:'作者观点题要带作者的尺子：X favours A against B … They do so best where building … respects their character … Why ruin rural ones?——「作者认为 X 的做法怎样」＝ 做法 × 作者亮出的标准；只把做法换个说法复述的选项（strong prejudice against urban areas），再眼熟也没回答「作者怎么看」',
 trig:['题干是「作者 ＋ 某人的某物」：<code>The author holds that X’s preference …</code> · <code>In the author’s view, X’s policy …</code>','定位段里人物的做法与作者的话交替出现，句子短、句间不用连词','段里有一句不以人物为主语的「标准句」（do so best where … · should … · the sensible place is …）或一句反问'],
 flow:'① <b>先认题干问的是谁的看法</b>：The author holds ⟹ 要的是<b>作者的评价</b>，不是人物做法本身；<br>'
     +'② <b>给定位段每句标「谁的」</b>：做法（人物）｜定性（作者）｜标准（作者）｜判决（作者，常是反问或 should）——2016·T2 ⑤段九句只有❸❹ 是奥斯本的；<br>'
     +'③ <b>拿作者的标准去量人物的做法</b>：偏爱乡村新建 × 「乡村在尊重其特色时发展得最好」＝ 不顾乡村特色；<br>'
     +'④ <b>正确项必须用上「标准」或「判决」里的东西</b>（character、ruin 的方向）；只有做法的选项，哪怕方向勉强说得通，也不是最佳；<br>'
     +'⑤ <b>最后做一次立场检查</b>：全文护着谁，判决就替谁说话——选项若替另一方鸣不平，回头。',
 tmpl:'<table class="tk"><tr><th>2016·T2 ⑤段</th><th>身份</th><th>选项</th></tr>'
     +'<tr><td>❸ Osborne favours rural new-build against urban renovation</td><td>做法</td><td>29A 只复述做法 ✘</td></tr>'
     +'<tr><td>❺ not a free market but a biased one · ❼ do so best where building … respects their character · ❾ Why ruin rural ones?</td><td>定性 · 标准 · 判决</td><td><b>29B disregard for the character of rural areas ✔</b></td></tr></table>'
     +'<p style="margin-top:8px">⭐ 一句可背的话：<b>作者观点 ＝ 人物做法 × 作者的尺子；只有做法、没有尺子的选项，是在回答另一个问题</b>。</p>',
 traps:['<b>把取舍里的 against 读成「敌视」</b>：favour A against B ＝ 选 A 不选 B；29A <code>a strong prejudice against urban areas</code> 就造在这个 against 上（Claude 盲做在此翻车）。',
        '<b>把修饰物的 biased 挪到人身上并加码</b>：⑤❺ <code>a biased one</code>（＝ market，被游说扭曲的市场）→ 29A <code>strong prejudice</code>（个人的强烈偏见），对象、程度一起升级（⟹ <a href="#R12">R12</a>）。',
        '<b>尺子不在人物那句里</b>：短句专栏的作者不会写「所以他不尊重乡村」，标准句的主语往往是别的东西（They ＝ 乡村城镇），<b>定位后至少读到段末</b>。',
        '<b>黄皮书的「对立项捷径」在这题上用不上</b>：A（对城市有偏见）与 B（漠视乡村特色）可以同时成立，判据是程度与视角，不是二选一。',
        '<b>分工</b>：<a href="#R87">R87</a> 管判决句紧贴对方主张（主张与负号同句）；<b>本卡管尺子隔着几句单独给出</b>；<a href="#R69">R69</a>（人物观点题只取人物的话）是本卡的镜像；<a href="#R162">R162</a> 管政策的说辞与动机（2014·T1 同一个奥斯本）。'],
 refs:[{p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q29',label:'2016·T2·29（做法 × 尺子；Claude 盲做选 A 翻车）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col1',label:'2016·T2 · 02+ 专栏（⑤段九句的身份表 ＋ 错因复盘）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col5',label:'2016·T2 · 02+++++ 专栏（立场一致性检查：A 是五个答案里唯一不护乡村的）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'s15',label:'2016·T2 · 长难句 s15（favour A against B）'}]},

{id:'R202', tier:'🟡', qt:'段落推断题（Which of the following can be inferred from Paragraph X?）· 点名段（一段挨个点名三方以上的立场）', title:'点名段：none of … likewise … are silent … Only X, sensing its chance …——likewise 把两方并成一栏，silent 是空栏，Only 把一方单拎出来；推断题的正解落在被单列、又带着动机或后果词的那一方',
 trig:['段首一句总判断：<code>none of the big parties／no one／few of them</code>','逐方点名、每方一句：<code>The Conservatives … Labour likewise … The Liberal Democrats are silent. Only Ukip …</code>','四个选项正好一方一个'],
 flow:'① <b>卷边画栏</b>：每读到一方，就按信号词归栏——<code>likewise／too／also／similarly</code> 并入上一方那栏；<code>silent／said nothing</code> 挂在栏外；<code>Only／alone</code> 单独一栏；<br>'
     +'② <b>找 likewise 并的是哪一点</b>：到它前后两句取公因式（2016·T2：都想绕开地方的反对）；<br>'
     +'③ <b>推断题取「动机 ＋ 效果」，不取「立场」</b>：只报立场的几方推不出将来；带 <code>sensing its chance</code>（动机）与 <code>struck terror into</code>（效果）的那一方，推一步就是 may gain；<br>'
     +'④ <b>逐项核主体</b>：从句里的主语（councils）被安到主句主语（Labour）头上，是这类段落最常见的干扰项。',
 tmpl:'<table class="tk"><tr><th>2016·T2 ③段</th><th>归栏</th><th>28 题</th></tr>'
     +'<tr><td>Conservatives · Labour likewise</td><td>要开发（并栏）</td><td>A 把工党挪去「反对开发」✘ · B authorising → abandon ✘</td></tr>'
     +'<tr><td>Liberal Democrats are silent</td><td>空栏</td><td>D 沉默 → 失势 ✘</td></tr>'
     +'<tr><td>Only Ukip, sensing its chance … struck terror into …</td><td>单列 ＋ 动机 ＋ 效果</td><td><b>C may gain ✔</b></td></tr></table>',
 traps:['<b>沉默 ≠ 失势</b>：28D 要推两步、还得借文外知识（自民党后来确实惨败，但文章发表之后的事不替原文说话，⟹ <a href="#R8">R8</a>）。',
        '<b>从句主语被偷到主句</b>：<code>Labour likewise wants to discontinue local planning where councils oppose development</code>——反对开发的是 councils（⟹ <a href="#R21">R21</a>）。',
        '<b>Only 句不等于作者替那一方站台</b>：作者借 considered 一词认可「审慎用地」，但结论是「左右两派都该团结」——保护乡村不该只是一个小党的旗号。',
        '<b>分工</b>：<a href="#R117">R117</a> 管名字、所有格住哪一栏（挪栏）；<b>本卡管栏是怎么被信号词划出来的</b>（归栏）；<a href="#R6">R6</a> 管推断只推一步。'],
 refs:[{p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q28',label:'2016·T2·28（Only Ukip ＋ sensing its chance ⟹ may gain）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col2',label:'2016·T2 · 02++ 专栏（信号词归栏表）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'s8',label:'2016·T2 · 长难句 s8（likewise ＋ where councils oppose）'}]},

{id:'R203', tier:'🟡', qt:'末段态度题 · 作者欣赏／批评题（the author shows his appreciation of …）· 功劳句', title:'欣赏记在促成者头上：Half a century of X has enabled it to retain an enviable Y, while still permitting Z——褒义词长在结果 Y 上，作者的欣赏却记在主语 X 头上；把褒义词挪到另一个结果上（enviable urban lifestyle）就是嫁接',
 trig:['功劳句：<code>X has enabled／allowed／helped sb to retain／achieve Y</code> · <code>thanks to X</code> · <code>X is credited with</code>','结果上挂着褒义词：<code>enviable／remarkable／impressive</code>','题干问 appreciation／approval／admiration of'],
 flow:'① <b>在段里找褒义词</b>（2016·T2 ⑥段只有一个：enviable）；<br>'
     +'② <b>看它长在哪个名词上</b>（rural coherence），<b>再看是谁促成了它</b>（主语 town and country planning）；<br>'
     +'③ <b>问「欣赏什么」取促成者，问「取得了什么」才取结果</b>；<br>'
     +'④ <b>用段内的正反例验方向</b>：❶ 开发应当规划 · ❹ 不规划的下场 ⟹ 欣赏的是规划；<br>'
     +'⑤ <b>should 句是呼吁不是欣赏</b>：欣赏的对象一定是已经发生的好事。',
 tmpl:'<table class="tk"><tr><th>⑥❸ 的成分</th><th>30 题</th></tr>'
     +'<tr><td>主语 Half a century of town and country planning（促成者）</td><td><b>C ✔</b></td></tr>'
     +'<tr><td>附带结果 still permitting low-density urban living</td><td>B enviable urban lifestyle ✘（褒义词被挪过来）</td></tr>'
     +'<tr><td>❷ most crowded · ❺ should unite the left and right</td><td>A size of population ✘ · D political life ✘（应然当实然）</td></tr></table>'
     +'<p style="margin-top:8px">⭐ 反过来的「罪过句」同理：<code>X has led to／is to blame for</code> ＋ 贬义结果 ⟹ <b>批评记在主语头上</b>。</p>',
 traps:['<b>褒义词搬家</b>：enviable 只认它紧贴的 rural coherence；urban living 前面是 still permitting（仍然容许），是退一步的说法（⟹ <a href="#R34">R34</a>）。',
        '<b>应然当实然</b>：30D 把 should unite（现在还没团结）读成「欣赏当今政治生活」——与①❸ limited political support 首尾矛盾。',
        '<b>分工</b>：<a href="#R34">R34</a> 管定语挂错中心词；<b>本卡管态度记在谁头上</b>；<a href="#R41">R41</a>（例子服务的论点）同理：结果是例证，促成者才是论点。'],
 refs:[{p:'2016_T2_英国乡村亟待各派联合保护.html',q:'q30',label:'2016·T2·30（enviable 长在结果上，欣赏记在规划头上）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'col3',label:'2016·T2 · 02+++ 专栏（功劳句成分表）'},
       {p:'2016_T2_英国乡村亟待各派联合保护.html',q:'s18',label:'2016·T2 · 长难句 s18（X has enabled it to retain …）'}]},

{id:'R204', tier:'🔴', qt:'作者态度题（The author views X’s statement with ___）· 开篇引名人语录、紧跟 But even if you accept … 的让步式驳论', title:'让步式驳引语：But even if you accept X’s premise …, things may not be absolutely clear-cut. New research suggests …——「就算你接受他的前提」＝ 作者不接受；may／absolutely／at least 压低的是作者自己结论的调门，不是对 X 拿不准 ⟹ skepticism，不是 uncertainty／approval／tolerance',
 trig:['开篇引一句名人语录（<code>"…," wrote X</code>），常带绝对化字眼（<code>one and only one</code>、<code>the only</code>）','紧跟 <code>But even if you accept／grant X’s premise …</code> 或 <code>Even if we agree that …</code>','让步之后是降调句（<code>may not be absolutely clear-cut</code>）＋ 一条方向相反的研究或证据（<code>New research suggests …</code>）','选项是四个态度名词：uncertainty · skepticism · approval · tolerance 一类'],
 flow:'① <b>认让步的主语</b>：even if <b>you</b> accept ⟹ 接受的是「你」（读者、对方），作者只是把前提让出去；<br>'
     +'② <b>跳过降调找方向</b>：may、not absolutely、at least when 是作者给<b>自己的结论</b>打的折扣，不是对对方的犹豫——方向在紧跟的证据句里（CSR 可能<b>创造</b>货币价值 ⟷ 弗里德曼说是<b>浪费</b>）；<br>'
     +'③ <b>给强度定档</b>：没说对方错（critical）、没嘲讽（contempt），只是「不全信 ＋ 摆证据」⟹ skepticism／doubt（<a href="#R12">R12</a>）；<br>'
     +'④ <b>排三个字面项</b>：降调词的字面 ⟹ uncertainty；让步动词的字面 ⟹ approval；让步的姿态 ⟹ tolerance。',
 tmpl:'<table class="tk"><tr><th>2016·T3 ①段</th><th>31 题</th></tr>'
     +'<tr><td>❷ <code>even if you accept Friedman’s premise</code>（让步）</td><td>C approval ✘ · D tolerance ✘</td></tr>'
     +'<tr><td>❷ <code>may not be absolutely clear-cut</code>（降调）</td><td>A uncertainty ✘（Claude 盲做在此晃过）</td></tr>'
     +'<tr><td>❸ <code>New research suggests that CSR may create monetary value</code>（反证）</td><td><b>B skepticism ✔</b></td></tr></table>'
     +'<p class="note">一句可背的话：<b>态度题看作者朝哪边站，不看作者说话有多谨慎</b>；「没方向」的态度词（uncertainty、ambivalence、indifference），只要作者后面亮出了方向就排掉。</p>',
 traps:['<b>把降调读成犹豫</b>：not absolutely clear-cut 的字面最像 uncertainty——可作者下一句就给了反方向的证据，<b>一个真拿不准的人不会紧接着说「新研究表明……」</b>。',
        '<b>让步从句不承载立场</b>：accept 在 even if 里是假设动作（⟹ <a href="#R154">R154</a>）；tolerance 的底色是「接受」，作者的底色是「不接受」（黄皮书：没把握「度」）。',
        '<b>研究发现往往就是作者的观点</b>：报道体里作者很少自己说话，New research suggests 后面的内容是作者拿来当武器的。',
        '<b>分工</b>：<a href="#R176">R176</a> 管限定词打的是哪种折；<a href="#R169">R169</a>、<a href="#R183">R183</a> 是另两种「不直说对方错」的驳法（老权威出身类比、换一个比方）；本卡管「连前提都让给你」的驳法。'],
 refs:[{p:'2016_T3_企业社会责任的光环效应.html',q:'q31',label:'2016·T3·31（B skepticism；A uncertainty 取降调词字面）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'col1',label:'2016·T3 · 02+ 专栏（让步 · 降调 · 反证 · 边界四层）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'s2',label:'2016·T3 · 长难句 s2（even if you accept … regard … as）'}]},

{id:'R205', tier:'🔴', qt:'事实概括题（According to Paragraph X, A helps B by ___）· 原文 First／Second／And third 列三条 ＋ 其中一条是看法动词', title:'信号不是实质：consumers may take X as a "signal" that Y——Y 是消费者的判断，不是企业的实际作为；问「A 怎么帮 B」而原文给了三条，先压成「谁对 B 怎样」取公因子',
 trig:['题干只给一个空，原文 <code>in three ways. First … Second … And third …</code>','某一条是看法动词：<code>take X as a "signal" that</code> · <code>regard／see／view X as</code> · <code>believe／assume that</code>','选项里有一个「把看法写成事实」的项（raising the quality of its products）'],
 flow:'① <b>数条</b>：总起句报了几条，下面就有几条；<br>'
     +'② <b>每条压成一句「谁 · 对 B 怎样」</b>：消费者<b>认为</b>产品好 · 顾客<b>愿意</b>买 · 消费者和其他人<b>更关照</b>；<br>'
     +'③ <b>取公因子</b>：三条的主语都是消费者一方，动作都是「高看一眼」⟹ winning trust from consumers；<br>'
     +'④ <b>单独对应某一条的选项，再查是不是这一条的准确改写</b>：看法动词框里的 Y 被改成「B 真的做到了 Y」＝ 偷换（看法 → 实质）；<br>'
     +'⑤ <b>出处越过题干限定段的选项先打问号</b>（<a href="#R7">R7</a>）。',
 tmpl:'<table class="tk"><tr><th>2016·T3 ②段</th><th>32 题</th></tr>'
     +'<tr><td>❸ consumers <b>take</b> CSR spending <b>as a "signal"</b> that … high quality</td><td>D raising the quality ✘（看法 → 实质）</td></tr>'
     +'<tr><td>❺ earn it greater consideration from consumers and others</td><td>B protected from being defamed ✘（升级）</td></tr>'
     +'<tr><td>三条的公因子：消费者一方高看一眼</td><td><b>C winning trust from consumers ✔</b></td></tr></table>'
     +'<p class="note">32A guarding against malpractices 取自①❸ prosecuted for corruption：不在②段，且把事后减罚换成了事前防范。</p>',
 traps:['<b>引号标出的术语按术语读</b>：<code>"signal"</code> 只让别人据此推断，本身不改变产品（⟹ <a href="#R29">R29</a>）。',
        '<b>全文两处 X as Y 都不是事实</b>：②❸ 是消费者的推断，①❷ <code>regard CSR policies as a waste</code> 是对手的前提——看法动词框住的内容，都要先问「谁的看法」。',
        '<b>分工</b>：<a href="#R94">R94</a> 管「某一类」的特征概括；<b>本卡管一条列举里夹着看法动词</b>；<a href="#R34">R34</a> 管定语挂错中心词。'],
 refs:[{p:'2016_T3_企业社会责任的光环效应.html',q:'q32',label:'2016·T3·32（C 取公因子；D 把信号当实质）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'col2',label:'2016·T3 · 02++ 专栏（三条渠道 × 靠不靠买）'}]},

{id:'R206', tier:'🔴', qt:'末段是非题（Which of the following is true of X, according to the last paragraph?）· 研究报道的局限段', title:'局限段两未知一已知：Researchers admit that their study does not answer X. Nor does it reveal Y. But at least they have demonstrated Z.——X、Y 只能被说成「未知」，Z 不能被说成坏事；金融报刊的双关（banking on ＝ 指望）不帮你选',
 trig:['末段出现 <code>admit</code> · <code>does not answer the question of</code> · <code>Nor does it reveal</code> · <code>remains unclear</code>','紧跟 <code>But at least … have demonstrated／shown that</code>','选项是四个「事物 ＋ 特征」：… is unknown · … has been overestimated · … are often overlooked · … has brought benefit to …'],
 flow:'① <b>给三句贴真值</b>：does not answer X ＝ 未知 · Nor does it reveal Y ＝ 未知 · But at least Z ＝ 已知；<br>'
     +'② <b>未知的事只能说成「未知／不确定／有待研究」</b>：选项一旦给它下了判断（被高估、被低估、很重要），就错；<br>'
     +'③ <b>已知的事不能说反</b>：局限段只收窄结论、不推翻结论——把 Z 读成「负面」「风险」的都越界；<br>'
     +'④ <b>单独查一遍双关与熟词僻义</b>：bank on ＝ 指望、costly ＝ 代价大，选项若拿常用义（银行业）造句，直接排掉。',
 tmpl:'<table class="tk"><tr><th>2016·T3 ⑥段</th><th>35 题</th></tr>'
     +'<tr><td>❶ does not answer … how much businesses <b>ought to</b> spend</td><td><b>A necessary amount … unknown ✔</b> · B capacity … overestimated ✘</td></tr>'
     +'<tr><td>❷ Nor does it reveal how much companies are <b>banking on</b> the halo effect</td><td>D banking industry ✘（望文生义）</td></tr>'
     +'<tr><td>❸ But at least … when companies get into trouble with the law, … a less costly punishment</td><td>C negative effects overlooked ✘（方向反）</td></tr></table>',
 traps:['<b>未知被改成已判</b>：35B 把「该花多少不知道」改成「财力被高估了」——对象（ought to → capacity）与真值（未知 → 判断）一起换。',
        '<b>Z 的场景不是 CSR 的负面</b>：惹上官司的原因是行贿，CSR 在这句里是帮企业减罚的（35C）。',
        '<b>黄皮书技巧栏对 Y 的转述不准</b>：Y 是企业做公益时<b>图</b>什么（动机），不是收益里光环占多少（比例）。',
        '<b>分工</b>：<a href="#R67">R67</a> 管「方法句 vs 结论句」（问最重要的因素）；<b>本卡管结论之后的局限句</b>；<a href="#R9">R9</a>：Nor 倒装是出题热点。'],
 refs:[{p:'2016_T3_企业社会责任的光环效应.html',q:'q35',label:'2016·T3·35（A 未知说成未知；B／C／D 三种越界）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'col3',label:'2016·T3 · 02+++ 专栏（局限段真值表）'},
       {p:'2016_T3_企业社会责任的光环效应.html',q:'s16',label:'2016·T3 · 长难句 s16（Nor does it reveal … banking on）'}]},

{id:'R207', tier:'🔴', qt:'人物观点题（X suggests that … should ___）· 同一个人在相邻两段一说「别急」、一说「别拖」，中间夹着 but only if', title:'条件式赞成：rushing to eliminate X would be a mistake ／ shouldn’t waste time getting out of X, but only if they go about doing it the right way——两句看着打架，观点在它们共同的那个条件里（用对的方法退）⟹ 答案是「调整做法」的上位概括；删掉条件、只留方向的选项（end for good · All at Once）就是干扰项',
 trig:['同一个说话人在相邻两处给出看似相反的话：一处否定 <code>rushing to …</code>，一处又说 <code>shouldn’t waste time doing …</code>','句中出现 <code>but only if</code> ／ <code>only when</code> ／ <code>provided that</code> ＋ <code>the right way</code> 一类方式词','紧跟一句把「对的做法」与「错的做法」分开：<code>accelerate that transition</code>（对）⟷ <code>discontinue it</code>（错）','选项里既有「彻底放弃」（for good · all at once），也有「保住原样」，还有一个抽象的「调整、改变策略」'],
 flow:'① <b>拆两栏</b>：把说话人每句话拆成「方向（做不做）」与「条件／做法（怎么做）」两栏；<br>'
     +'② <b>找否定落点</b>：<code>rushing to eliminate</code> 否定的是 rushing（方式），eliminate（方向）还站着；<br>'
     +'③ <b>找说破句</b>：附近一定有一句把两种做法分开（转型 ≠ 停掉），用它把两句「打架」的话合成一个主张；<br>'
     +'④ <b>取上位概括</b>：主张 ＝ 方向不变、做法要换 ⟹ strategic adjustments／change the approach；只有方向没有条件的选项、条件反了的选项一律排掉。',
 tmpl:'<table class="tk"><tr><th>2016·T4 Peretti 的话</th><th>37 题／40 题</th></tr>'
     +'<tr><td>③ <code>rushing to eliminate … would be a mistake</code>（否定方式）· ⑤❻ <code>I wouldn’t pick a year to end print</code></td><td>37B end for good ✘ · 40A All at Once ✘</td></tr>'
     +'<tr><td>④❶ <code>shouldn’t waste time getting out of …, but only if … the right way</code>（方向 ＋ 条件）</td><td><b>37A make strategic adjustments ✔</b></td></tr>'
     +'<tr><td>④❷ <code>accelerate that transition</code> ⟷ <code>discontinue it</code>（说破句）</td><td>—</td></tr></table>'
     +'<p class="note">一句可背的话：<b>一个人既说「别急」又说「别拖」，他的观点就在两句共同的那个条件里</b>；only 罩住的才是重心。</p>',
 traps:['<b>只读 but 前半句</b>：④❶ 前半「别在退出上浪费时间」像在催着退——删掉 but only if，就会选 37B end for good，恰好撞上③ 与⑤❻ 两次否定的一刀切。',
        '<b>只读转折后半句</b>：③ 的 but 后面是「急于砍掉是错误」——只读这句会以为他主张保住纸质版（40B／40C 的方向）。',
        '<b>方式词被换成反面</b>：40A All at Once 方向对（转网络），却把「加速转型」（有过程）换成「一下子全转」（没过程）。',
        '<b>分工</b>：<a href="#R43">R43</a> 管句首 Only ＋ 倒装；本卡管句中 but only if——only 罩住的才是重心；<a href="#R170">R170</a> 管作者对别人「批评里带认可」，本卡管同一个人「赞成里带条件」。'],
 refs:[{p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q37',label:'2016·T4·37（A strategic adjustments；B 删掉条件只留方向）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'col1',label:'2016·T4 · 02+ 专栏（方向 ＋ 条件两栏拆 Peretti 的六句话）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'s7',label:'2016·T4 · 长难句 s7（shouldn’t waste time …, but only if … the right way）'}]},

{id:'R208', tier:'🔴', qt:'人物观点题／概念推断题 · 文章给出一个违背常识的方案（提价而不降价、收窄而不扩大）', title:'反常识方案：常识里「救 X」＝ 扩大受众、压低成本、重现辉煌；文章的方案反着来——只做给已经迷上它的人（缩）、年年提价（涨）、只求多收钱 ⟹ 凡是「常识方向」的选项都是干扰项：先在卷边写下方案的三个箭头，再按箭头划选项',
 trig:['文章提出一个方案，且方案本身违背直觉：<code>raise prices</code> · <code>make it for the people who are already obsessed with it</code>','作者为方案自带证据：先例（<code>It was seen as a blunder … turned out to be foresighted</code>）或数据（<code>costs nearly $500 a year—more than twice as much as</code>）','选项里出现「扩大／新增／降低／恢复」一类常识动词：<code>seek new sources of readership</code> · <code>expands the popularity</code> · <code>cost … reduced</code> · <code>restore the glory</code>'],
 flow:'① <b>钉箭头</b>：读到方案段，在卷边写下三个方向——受众 ↓（收窄）· 价格 ↑ · 收入 ↑；<br>'
     +'② <b>按箭头划选项</b>：每个选项只问「它的箭头朝哪边」，朝反了当场划掉，不必细读；<br>'
     +'③ <b>核数字的主语</b>：costs 的主语是「读者订阅」还是「报社印刷」——一个 cost 两个付钱方（<a href="#R139">R139</a>）；<br>'
     +'④ <b>剩下的只核义项</b>：箭头方向对的选项再回原文核词（本篇 38B 取⑥❹ In other words 那一句）。',
 tmpl:'<table class="tk"><tr><th>维度</th><th>常识方向（干扰项）</th><th>2016·T4 原文方向</th></tr>'
     +'<tr><td>受众</td><td>37C new sources of readership · 38D expands the popularity</td><td>⑥❹ make it for the people who are already obsessed with it</td></tr>'
     +'<tr><td>价格</td><td>38C cost of printing reduced</td><td>⑤❼ raise prices · ⑥❸ increase it at a higher rate</td></tr></table>'
     +'<p class="note">一句可背的话：<b>文章越反常识，常识就越是干扰项的原料</b>——常识只帮你读懂行话，不帮你判方向。</p>',
 traps:['<b>凭生活经验选</b>：「救报纸当然要找新读者、降成本」——37C、38C、38D 正是顺着这种经验写的。',
        '<b>把读者付的钱读成报社的成本</b>：⑥❻ 的 costs 是订阅纸质版要花的钱（价格高的证据），38C 的 cost of printing 是报社的印刷成本。',
        '<b>忽略 already</b>：⑥❹ 做给「已经」迷上它的人——不是去争取新人。',
        '<b>分工</b>：<a href="#R155">R155</a> 是一般原则（文内推断只认文内逻辑）；本卡管「方案本身反常识」时常识被系统地拿来造干扰项；<a href="#R121">R121</a> 的对立轴是本卡的工具。'],
 refs:[{p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q38',label:'2016·T4·38（B 做给铁杆；C 降成本、D 扩受众都是常识方向）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'col2',label:'2016·T4 · 02++ 专栏（常识方向 vs 原文方向三维表）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'s15',label:'2016·T4 · 长难句 s15（In other words, … make it for the people who are already obsessed with it）'}]},

{id:'R209', tier:'🔴', qt:'人物观点题／标题题 · 同一个关键词在文中出现两次、两次义项不同（legacy product ⟷ legacy business；a luxury that … ⟷ a luxury good）', title:'一词两义：同一个词在同一篇里换了义项——legacy product（传承产品，出路）⟷ legacy business（传统业务，包袱）；it’s a tremendous luxury that …（一大幸事）⟷ a Luxury Good（奢侈品）——命题人把 A 处的词和 B 处的义项拼在一起，就是一个「每个词都在原文」的干扰项',
 trig:['一个关键词在文中出现两次，搭配的名词或句型不同：<code>legacy product</code> ⟷ <code>legacy business</code>','形式主语句里的评价名词：<code>it’s a tremendous luxury that …</code>（评价一件事，不指任何商品）','选项把两处的词杂糅成新组合：<code>traditional luxuries</code> · <code>legacy businesses are becoming outdated</code> · <code>restore the glory of former times</code>'],
 flow:'① <b>两处各写一个中文</b>：关键词第二次出现时，不许自动套用第一次的译名；<br>'
     +'② <b>看搭配</b>：legacy ＋ product（卖给顾客的东西）⟷ legacy ＋ business（公司的一块业务）；a luxury that …（评价一件事）⟷ a luxury good（一件商品）——搭配一变，义项多半跟着变；<br>'
     +'③ <b>查出处是否同一处</b>：选项里的词若「每个都在原文」，先查它们是不是出自同一句、同一个义项（<a href="#R39">R39</a>）；<br>'
     +'④ <b>核判断的主人</b>：39D 的「在过时」是谁说的？原文没人说——两个半句拼出来的判断一律排掉。',
 tmpl:'<table class="tk"><tr><th>2016·T4 两处</th><th>被搅出来的干扰项</th></tr>'
     +'<tr><td>⑤❼ legacy product（传承产品）· ⑦❶ legacy business（传统业务）</td><td>39D legacy businesses outdated ✘ · 38A restore the glory ✘</td></tr>'
     +'<tr><td>⑦❶ a tremendous luxury（幸事）· 40D Luxury Good（奢侈品）</td><td>39A traditional luxuries ✘</td></tr></table>'
     +'<p class="note">一句可背的话：<b>一个词在文中出现两次，就给两次各写一个中文</b>；选项把两处搅在一起，每个词都在原文也是错。</p>',
 traps:['<b>把 luxury 一律读成奢侈品</b>：⑦❶ 的 it’s a luxury that … 是口语里的「难得的好条件」——BuzzFeed 没有传统业务要背是幸事。',
        '<b>把 legacy 一律读成「传承」</b>：⑦❶ 的 legacy business 是包袱，不是出路；黄皮书把它也译成「传承业务」，读中文的人就会顺着错。',
        '<b>用常用义联想</b>：legacy ＝ 遗产 ⟹ 昔日荣光（38A）——原文⑥❶ 说的是 sustain（维持）品质，不是 restore（恢复）荣光。',
        '<b>分工</b>：<a href="#R139">R139</a> 是原文一处、选项一处的义项偷换；<a href="#R93">R93</a> 是新造术语之间串门；本卡是原文自己两处义项不同、选项把两处搅在一起。'],
 refs:[{p:'2016_T4_纸质报纸的奢侈品出路.html',q:'q39',label:'2016·T4·39（C；A、D 都拿 luxury／legacy 拼出来）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'col3',label:'2016·T4 · 02+++ 专栏（legacy × 2 · luxury × 2 对照表）'},
       {p:'2016_T4_纸质报纸的奢侈品出路.html',q:'s18',label:'2016·T4 · 长难句 s18（it’s a tremendous luxury that BuzzFeed doesn’t have a legacy business）'}]},

{id:'R210', tier:'🔴', qt:'完形 · 说明文／流程型文章（百科、国情介绍、民俗；按人生阶段或仪式先后写，通篇没有作者观点）', title:'没有作者观点的文章，方向由时间轴给：在卷边画一条流程线——逻辑空先押时间与对比，不押因果；预设「前面已经发生过」的选项回轴上找，找不到就划掉；口吻中立，情绪重的选项降权',
 trig:['通篇找不到 should／must／I think／critics／researchers found，句子主语是「一类人」（a young man · newlyweds · divorced persons）','谓语多是一般现在时 ＋ may／can（描述通常做法）','时间词成串：and then · after · formerly … but by the 1980s · traditionally · up to a year · until · before','逻辑空的选项里混着一整族因果词（since／so／for／in that／so that）'],
 flow:'① <b>认文体</b>：读完首句先问「这篇有没有作者观点」——没有 ⟹ 说明文，<b>方向不跟人走，跟时间走</b>；<br>'
     +'② <b>画轴</b>：卷边按段写出流程格（择偶 → 提亲 → 选定 → 调查 → 进门 ｜ 以前 → 现在 ｜ 仪式环节 ｜ 同住 → 盖房 ｜ 离婚 → 分财产 → 再婚）；<br>'
     +'③ <b>逻辑空</b>：先押<b>时间先后／终点</b>（After · until）与<b>对比</b>（今昔 but · 男女 while），<b>因果族最后才考虑</b>；<br>'
     +'④ <b>动词空</b>：凡是预设「已经开始过」的选项（close／renew／postpone · whereas 的对照项），回轴上找那件事——<b>找不到就划掉</b>；<br>'
     +'⑤ <b>降权</b>：说明文不下重话，isolated（被孤立）、deal with（周旋）这类情绪重的选项放到最后。',
 tmpl:'<table class="tk"><tr><th>2016 完形时间轴上的格</th><th>空与答案</th></tr>'
     +'<tr><td>选定 <code>and then</code> 请父母 ___ 婚事商谈（商谈尚未开始）</td><td>3 <b>arrange</b>（close／renew／postpone 都预设已开始）</td></tr>'
     +'<tr><td><code>___ a spouse has been selected, each family investigates</code>（完成时 → 一般现在时）</td><td>5 <b>After</b></td></tr>'
     +'<tr><td><code>Formerly three days, ___ by the 1980s a day and a half</code></td><td>7 <b>but</b>（今昔对比）</td></tr>'
     +'<tr><td><code>may live with them up to a year, ___ they can build a new house</code></td><td>13 <b>until</b>（时间终点）</td></tr>'
     +'<tr><td><code>the male … no waiting period ___ the woman must wait</code></td><td>20 <b>while</b>（男女对比）</td></tr></table>'
     +'<p class="note">一句可背的话：<b>有观点的文章跟着作者走，没观点的文章跟着时间走</b>。2016 完形六个逻辑空（并列、打折、先后、今昔、终点、男女）<b>一个因果都没有</b>。</p>',
 traps:['<b>把因果词当默认</b>：7 题 since／so、13 题 for／if、20 题 so that／in that 在本篇全部陪跑——流程文里两件事通常是<b>先后或对照</b>，不是一个导致另一个。',
        '<b>用「中文顺不顺」代替「时间对不对」</b>：3 题「请父母推迟／终止提亲」中文也说得通，但轴上此刻商谈还没开始——<b>时间点错了，句子再顺也不对</b>。',
        '<b>重词陷阱</b>：15 题 isolated 的干扰源是上句 not common（不常见 ⟹ 被当异类？），但 some disapproval 只是轻度；说明文口吻冷静，<b>程度比原文重的动词先降权</b>（12 题 deal with 同理）。',
        '<b>分工</b>：<a href="#R131">R131</a> 管社论型的「应然轴」、<a href="#R106">R106</a>／<a href="#R156">R156</a> 管研究报道、<a href="#R174">R174</a> 管推介文按段定正负——<b>本卡管这几种都不是的时候</b>：没有作者、没有研究、没有产品，只有流程。'],
 refs:[{p:'2016_完形_柬埔寨的婚俗.html',q:'timeline',label:'2016·完形 · 02+ 流程时间轴（十二格）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q3',label:'2016·完形·3（arrange：商谈尚未开始）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q5',label:'2016·完形·5（After：完成时 → 一般现在时）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q13',label:'2016·完形·13（until：同住的终点）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q15',label:'2016·完形·15（isolated 语气过重）'}]},

{id:'R211', tier:'🔴', qt:'完形／阅读 · 「许可—现实」成对出现（may／can／legal／in theory 说规矩允许什么，紧跟 but／little／not common／disapproval 说实际怎样）', title:'许可句后面必有一句现实：空在许可一侧填同向中性词（obtain），空在两者之间的句首填打折词（In theory），空在现实一侧填让现实「出场」的词（viewed with · shows up），连接两边的永远是 but／while',
 trig:['句中有 may／can／be legal／be allowed to／in theory 描述「可以做」','同句或下一句有 but／while／little to say／not common／with some disapproval 描述「实际怎样」','空格落在句首（逗号前）或 but 的前后'],
 flow:'① <b>先把每个许可句和它的现实句配成对</b>（本篇四对：可否决 ↔ 没发言权 · 可同住一年 ↔ 直到盖房 · 合法易办 ↔ 不常见、被看低 · 可再婚 ↔ 偏见露出来）；<br>'
     +'② <b>空在许可一侧</b> ⟹ 与 legal／may 同向的中性词（easy to <b>obtain</b>）；<br>'
     +'③ <b>空在两者之间的句首</b> ⟹ 打折词：In theory／technically／on paper／nominally——把许可降成「纸面上的」；<br>'
     +'④ <b>空在现实一侧</b> ⟹ 让现实<b>出场</b>的词（<b>viewed</b> with disapproval · a prejudice <b>shows</b> up），<b>不填让它消失的词</b>（clears up／breaks up）；<br>'
     +'⑤ <b>连接词</b>：许可与现实之间是 but／while，不是 so／because。',
 tmpl:'<table class="tk"><tr><th>2016 完形的四对</th><th>空</th></tr>'
     +'<tr><td>父母做主，孩子 <code>little to say</code> ↔ <code>___, a girl may veto</code></td><td>4 <b>In theory</b></td></tr>'
     +'<tr><td><code>legal and easy to ___, but not common</code></td><td>14 <b>obtain</b>（and 同向、but 反向）</td></tr>'
     +'<tr><td><code>Divorced persons are ___ with some disapproval</code></td><td>15 <b>viewed</b></td></tr>'
     +'<tr><td><code>may remarry, but a gender prejudice ___ up: … ___ …</code></td><td>19 <b>shows</b> · 20 <b>while</b></td></tr></table>'
     +'<p class="note">一句可背的话：<b>may 说的是规矩，but 后面才是日子</b>。阅读里同一个结构叫 in theory … in practice，题目最爱问「实际情况是」。</p>',
 traps:['<b>把许可当现实</b>：4 题若把 a girl may veto 当成「女孩说了算」，就会配 Above all（最重要的是）——正好和上句「孩子没发言权」打架。',
        '<b>把现实读成消失</b>：19 题 break up 在婚恋话题里太顺口（分手），但「偏见破裂」与冒号后的区别对待相反——<b>冒号后是证据，冒号前的主语必须在场</b>。',
        '<b>双箭头只看一个</b>：14 题同时被 and（同 legal）与 but（反 not common）夹住，challenge／avoid 各错两次；只看一个箭头就会在 follow 上犹豫。',
        '<b>分工</b>：<a href="#R176">R176</a> 管单个限定词给一句话打折（seemingly／to a certain extent／in theory）——2013 完形里 In theory 是题干信号，2016 把它挖成了空；<b>本卡管段落层面的成对结构</b>。阅读里的「应然 vs 实然」见 <a href="#R131">R131</a>。'],
 refs:[{p:'2016_完形_柬埔寨的婚俗.html',q:'permit',label:'2016·完形 · 02++ 许可与现实（四对）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q4',label:'2016·完形·4（In theory：否决权只在纸面上）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q14',label:'2016·完形·14（and 同向、but 反向 ⟹ obtain）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q19',label:'2016·完形·19（shows up：偏见在场才能举证）'}]},

{id:'R212', tier:'🟡', qt:'完形 · 具体动作空（仪式、手工、搬运、分配；四个动词中文都认识，介词又筛不掉）', title:'动作空三问：宾语什么形状、几个？往哪个方向去？为了什么？三个答案拼成一幅画面，四个动词里只有一个「做得出来」——线状 ⟹ tie、片状 ⟹ wrap、一件东西＋一圈人 ⟹ pass、原样带进 ⟹ bring',
 trig:['空格是动词（常为动名词或分词），后面紧跟一个具体名词（threads · a candle · property）和一个方位或方向小词（around · into · up）','四个选项都能接那个小词（wrapping／tying around · change／bring／shape／push into · clear／warm／show／break up）','句子在描写仪式、手工或财物处置'],
 flow:'① <b>形状与数量</b>：宾语是线、片、面还是块？一个还是一堆？——线 ⟹ tie · 片 ⟹ wrap · 平面 ⟹ fold · 块 ⟹ pile；<b>一件东西 ＋ 一群人 ⟹ pass</b>；<br>'
     +'② <b>方向</b>：around（绕）· into（进）· up（冒出来）——<b>先试介词能不能筛</b>（15 题 exposed 只接 to，被 with 当场筛掉），筛不掉再往下；<br>'
     +'③ <b>目的或上下文</b>：to bless（祝福 ⟹ 传福气）· 对照 jointly-acquired（婚前 ⟹ 原样带进）· 冒号后举证（⟹ 在场）；<br>'
     +'④ <b>三缺一复核</b>：介词失效的题，三个错项往往同一族（变形、强推、消失），答案是唯一「原样／出现」的那个。',
 tmpl:'<table class="tk"><tr><th>2016 完形</th><th>画面</th><th>动词</th></tr>'
     +'<tr><td>9 ___ cotton threads … around … wrists</td><td>细线绕手腕打个结</td><td><b>tying</b>（wrap 要片状）</td></tr>'
     +'<tr><td>10 ___ a candle around a circle of couples to bless</td><td>一支蜡烛在一圈人手里传一遍</td><td><b>passing</b>（一支没法绕一圈点燃）</td></tr>'
     +'<tr><td>17 property he or she ___ into the marriage</td><td>婚前财产原样跟人进门</td><td><b>brought</b>（change／shape／push 都变形或强推）</td></tr></table>'
     +'<p class="note">一句可背的话：<b>四个中文都认识的时候，别查词典，放电影</b>——哪个动作在脑子里演不出来，就划掉哪个。</p>',
 traps:['<b>头号搭配陷阱</b>：10 题 light a candle 是最熟的搭配，但只有一支蜡烛、围着的是一圈人——「绕着一圈人点燃一支蜡烛」演不出来。',
        '<b>搭配存在 ≠ 画面成立</b>：9 题 wrap … around 是现成搭配，但 wrap 讲的是片状材料严严实实包住（wrap a blanket around the baby），几根线裹不住手腕。',
        '<b>中文字面陷阱</b>：18 题 withdrawn「离婚时取出财产」、6 题 through「通过婚姻进入」中文都顺，英文却挂错了对象——<b>中文顺是最弱的证据</b>。',
        '<b>分工</b>：<a href="#R157">R157</a> 管抽象的「空格＋宾语＋介词」框架（take … into consideration），并记录介词失效的年份；<b>本卡管具体动作</b>，介词失效时靠形状、数量和目的定动词。',
        '<b>2018·完形·14–15（实验流程的动作）</b>：14 be introduced to（第一步是认识；added／transferred／entrusted 都把孩子当物件）· 15 look inside（out／back／around 都离开容器）——<b>实验里的动作常「两人各做一次」</b>：测试员 looking into，孩子 look inside。'],
 refs:[{p:'2016_完形_柬埔寨的婚俗.html',q:'scene',label:'2016·完形 · 02+++ 动作画面表（六题）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q9',label:'2016·完形·9（线状 ⟹ tie，wrap 要片状）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q10',label:'2016·完形·10（一支蜡烛＋一圈人 ⟹ pass）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'q17',label:'2016·完形·17（四个全接 into ⟹ 原样带进 bring）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q15',label:'2018·完形·15（朝向容器 ⟹ inside）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q14',label:'2018·完形·14（人与人认识 ⟹ introduced）'}]},

{id:'R213', tier:'🔴', qt:'新题型 · 标题／小标题匹配（七个标题的关键词在原文里原样出现，而且不止出现在一段）', title:'原词算不算数，看它落在哪一句：在「这一段让读者做的那件事」里，它就是标题；在例子、背景、被否定的半句、别人段落的宾语里，它就是诱饵——不数出现几次，只看站在哪',
 trig:['七个标题里有好几个的关键词在原文里原样出现','同一个关键词在两三段里都出现（professional(s) 出现在 41、42、44 三段）','某个标题的词在一段的首句里很显眼，可后文不再提'],
 flow:'① <b>逐段先找主句</b>：清单体文章每段只有一条建议——段首是祈使句就是它（Get clear · Look at · Enlist）；段首是作者经历或否定句，就往后找第一句对读者说的建议（④❷ may be a good time · ⑧❷ Instead, use it…）；<br>'
     +'② <b>用主句的宾语配标题</b>：原词、近义都行；<br>'
     +'③ <b>给每个撞词的标题定位</b>：它的词在这一段的哪一句、在句子的哪个位置？落在例子（④❶ new job）、目标的一种内容（⑤❷ refresh your image）、结果状语（⑥❻ more control）、被否定的前半（⑧❶ vain）、回收前文的宾语（⑦❶ goals and context）——统统不算；<br>'
     +'④ <b>段末句验覆盖</b>：标题要罩得住段末那句（41 的 no need 验出 B 的 if）。',
 tmpl:'<table class="tk"><tr><th>2016 撞词处</th><th>词落在哪</th><th>算不算</th></tr>'
     +'<tr><td>A new ← ④❶ a new job</td><td>作者经历里的例子</td><td>✘（主句在 ④❷）</td></tr>'
     +'<tr><td>A image ← ⑤❷ refresh your image</td><td>选择题的一个选项</td><td>✘（主句是 ⑤❶ Get clear）</td></tr>'
     +'<tr><td>E professionals ← ④❸</td><td>三类问意见的人之一</td><td>✘（在 ⑦❶ 才是主角）</td></tr>'
     +'<tr><td>D／G ← ⑦❶ goals and context</td><td>share with them 的宾语</td><td>✘（谓语宾语是 professionals）</td></tr>'
     +'<tr><td>C ≈ ⑧❶ vain</td><td>被 isn’t 否定的前半</td><td>✘（主句在 Instead 之后）</td></tr></table>'
     +'<p class="note">2007 与 2016 用同一把尺子：2007 的正确项三项零原词、多余项满是原词；2016 的正确项四项有原词。<b>统一的判据不是「有没有原词」，是「原词在不在主句里」</b>。</p>',
 traps:['<b>「复现词＝陷阱」只对了一半</b>：R17 从 2007 总结出的这条，在 2016 会让你把 44 题的 E、43 题的 D、42 题的 G 都当成陷阱——三个都是正确项。',
        '<b>「标题看段首句」只对了三成</b>：2016 五段里只有 42、43、44 的主句在段首；41 段首是作者经历，45 段首是否定句。',
        '<b>一句里挤了三个选项词</b>（⑦❶ professionals · goals · context）：先问谁是谓语的宾语，别数哪个词更长、更显眼。',
        '<b>分工</b>：<a href="#R17">R17</a> 管「先自写主旨、防复现陷阱」；本卡管「复现词站在哪一句」；<a href="#R214">R214</a> 管引子和段首的前后钩。'],
 refs:[{p:'2016_新题型_如何提升职业形象.html',q:'cover',label:'2016·新题型 · 02+ 覆盖表（诱饵每次只占一句）'},
       {p:'2016_新题型_如何提升职业形象.html',q:'q41',label:'2016·新题型·41（主句不在段首，A 的 new 落在例子里）'},
       {p:'2016_新题型_如何提升职业形象.html',q:'q44',label:'2016·新题型·44（一句三个选项词，看谁在主干上）'},
       {p:'2016_新题型_如何提升职业形象.html',q:'q45',label:'2016·新题型·45（C 押在被否定的 vain 上）'},
       {p:'2016_新题型_如何提升职业形象.html',q:'two',label:'2016·新题型 · 03+ 2007 vs 2016 两篇标题匹配'}]},

{id:'R214', tier:'🟡', qt:'新题型 · 标题匹配（how-to 清单体：引子以问句或 Here are some tips／steps／ways 收尾）', title:'引子里的问句是目录，后面的条目会回头点名前面的条目——标题匹配也有接缝：问句的关键词是小标题的草稿，后段回收前段时被回收的词是配角',
 trig:['引子最后一段连问几个 How／When／What','引子以 Here are some tips／a few measures／steps 收尾','某一段开头把前面两条建议的关键词并列提了一遍'],
 flow:'① <b>给引子的问句编号</b>：问什么，后面就答什么——when to invest ⟹ 时机（41 B）；one that enhances our goals ⟹ 目标（42 G）；<br>'
     +'② <b>问句里的指代先还原</b>：how do we navigate <b>this</b>——this 指上一段的困境（规范碎了、场合不同）⟹ 答案是「弄清环境」（43 D）；后文 ⑥ 问 norms、status 两个词，原样回扣 ②；<br>'
     +'③ <b>后段回收前段</b>：⑦❶ share with them your goals and context ⟹ 前两条按顺序是 goals、context，可以拿来验 42、43；<br>'
     +'④ 被回收的词在新段里是<b>配角</b>，别把它们当新段的标题。',
 tmpl:'<table class="tk"><tr><th>前面的钩</th><th>后面的落点</th><th>标题</th></tr>'
     +'<tr><td>③❷ when to invest in an upgrade</td><td>④❷ now may be a good time</td><td>41 B</td></tr>'
     +'<tr><td>③❸ one that enhances our goals</td><td>⑤❸ the goal</td><td>42 G</td></tr>'
     +'<tr><td>③❶ navigate this（＝② norms · status）</td><td>⑥❷❸ norms? status?</td><td>43 D</td></tr>'
     +'<tr><td>⑤ goals · ⑥ context</td><td>⑦❶ share … goals and context</td><td>回收（44 是 E）</td></tr></table>'
     +'<p class="note">2007 也有同一个开关：首段 Here are a few measures that parents can take ⟹ 七个祈使句、每段一条做法。</p>',
 traps:['<b>问句顺序 ≠ 段落顺序</b>：2016 引子三问的顺序是 navigate → when → goals，正文是 41 时机 → 42 目标 → 43 环境。按问句配段，别按问句排段。',
        '<b>引子不是每条都预告</b>：44 找专业人士、45 提高效率是「最好的办法」的具体做法，引子没有单独点名。',
        '<b>分工</b>：<a href="#R213">R213</a> 管段内「词落在哪」；本卡管段与段之间的钩；选句填空的尾钩见 <a href="#R196">R196</a>。'],
 refs:[{p:'2016_新题型_如何提升职业形象.html',q:'hooks',label:'2016·新题型 · 02++ 前后钩表'},
       {p:'2016_新题型_如何提升职业形象.html',q:'q43',label:'2016·新题型·43（⑥ 的 norms／status 回扣 ②）'},
       {p:'2016_新题型_如何提升职业形象.html',q:'q42',label:'2016·新题型·42（③❸ goals 预告，⑦❶ 回收）'}]},

{id:'R215', tier:'🟡', qt:'新题型 · 找多余项（标题／小标题匹配；两个剩下的标题都「很像这篇文章」）', title:'多余项常比正确项大一号：一个是全文话题本身，一个是放之四海皆准的心态口号——正确的小标题都能直接照着做，做不了、又哪段都沾一点的，就是它',
 trig:['五段定完，剩下两项读起来都像全文主旨','某一项的关键词是全文的话题词（image／upgrade 五段都有）','某一项全文零出现，却和某段的一个词意思沾边（confidence ↔ vain）'],
 flow:'① <b>问「能不能照着做」</b>：Decide if the time is right · Know your goals · Understand the context · Work with professionals · Make it efficient 都是一步具体动作；Create a new image · Have confidence 说的是结果或心态；<br>'
     +'② <b>问「是不是总话题」</b>：Directions 写 <b>sub</b>heading 时，总话题本身做不了小标题；A 的 image 散在五段，哪一段都不专属；<br>'
     +'③ <b>问「沾边的那个词被作者怎么处理」</b>：C 沾的 vain 被 isn’t 否定——押在作者说「不是」的那一半上；<br>'
     +'④ <b>问「和哪一句顶牛」</b>：A 默认要换、要全新，④❺ 说也许不必，⑤❷ 说翻新或转向。',
 tmpl:'<table class="tk"><tr><th>多余项</th><th>钓哪两段</th><th>死因</th></tr>'
     +'<tr><td>A Create a new image</td><td>41（new ×2）· 42（image ×2）</td><td>全文话题；与 ④❺ no need、⑤❷ refresh 顶牛</td></tr>'
     +'<tr><td>C Have confidence</td><td>43（control）· 45（vain）</td><td>全文零出现；vain 被否定</td></tr></table>'
     +'<p class="note">原文（Entrepreneur.com，Jeff Giesea）的五个小标题就是本题的 B、G、D、E、F，一字不差；A、C 是命题人编的——<b>命题人造的两项都比作者的五项更「大」</b>。</p>',
 traps:['<b>最像主旨的那一项先怀疑</b>：标题匹配里，读着最顺、最「对」的往往是总话题，不是某一段的小标题。',
        '<b>褒贬之辨不够硬</b>：只凭「vain 贬义、confidence 褒义」排 C，考场上会被「自信也可以是自负」绕进去；更硬的是「全文零出现 ＋ vain 被否定」。',
        '<b>分工</b>：多余项的其他死法见 <a href="#R81">R81</a>（词面像）、<a href="#R137">R137</a>（正确项的下家）、<a href="#R161">R161</a>（换杠杆）、<a href="#R197">R197</a>（方向反）；本卡管「大而空」。'],
 refs:[{p:'2016_新题型_如何提升职业形象.html',q:'extra',label:'2016·新题型 · 03 多余项 A、C 与十一篇总账'},
       {p:'2016_新题型_如何提升职业形象.html',q:'orig',label:'2016·新题型 · 03++ 原文与考卷对照（五个原小标题）'}]},

{id:'R216', tier:'🔴', qt:'写作目的题（X is mentioned to …）· 作者态度题 · 标题题（社论里出现句末省略：a reminder of why ／ And it should ／ doing so）', title:'省略句回填：句子在 why／should／so 处戛然而止，断掉的那半截只能从上一句补——补回来，事例服务谁、作者站哪边就都写在那里了',
 trig:['句末只剩一个疑问词：provides another reminder of why. ／ which explains why. ／ The question is how.','只剩情态动词或助动词：And it should: … ／ Nor should they. ／ It ought to.','do so／doing so 回指上一句的动作'],
 flow:'① 读到句子「没说完」就停，在卷边画一个箭头指回上一句；<br>'
     +'② <b>往上找最近的一个完整谓语</b>，原样补进去：why (Americans are willing to tolerate time-consuming security procedures) · it should (undermine public support)；<br>'
     +'③ 写作目的题：补出来的那句就是事例服务的对象——<b>事例本身什么也没证明，它只是「提醒」了上一句</b>；<br>'
     +'④ 态度题：And it should／Rightly so／As it should be 是作者给上一句的事实盖章——事实是「支持会下降」，立场是「下降得好」；<br>'
     +'⑤ 冒号后是盖章的理由（Wasted time is a drag on …），一句话里「判断 ＋ 理由」两层都有。',
 tmpl:'<table class="tk"><tr><th>2017·T1 原文</th><th>补回去</th><th>得到</th></tr>'
     +'<tr><td>②❷ reminder of why</td><td>why Americans tolerate the procedures（②❶）</td><td>21B ✔</td></tr>'
     +'<tr><td>②❹ And it should:</td><td>it should undermine public support（②❸）</td><td>立场：站旅客</td></tr>'
     +'<tr><td>⑥❹ doing so directly</td><td>bringing the price down（⑥❸）</td><td>24B／C 的排除依据</td></tr></table>'
     +'<p class="note">一句可背的话：<b>省略只承前，不启后</b>——把 why 补成「为什么要加强安检」（往下文、往常识找），就会选 21A。</p>',
 traps:['<b>从事例本身出发</b>：21A「强调全球加强安检的紧迫」、21C「升级美国机场」、21D「保护隐私」都没回到②❶——三个都在事例或段里别的词上打转（<a href="#R3">R3</a>、<a href="#R16">R16</a>）。',
        '<b>把盖章句当中立陈述</b>：And it should 不是「支持会下降」的重复，而是作者的评价——整篇的态度题、标题题方向由此定（<a href="#R18">R18</a>）。',
        '<b>分工</b>：<a href="#R140">R140</a> 补句末省略的不定式是为了消否定；<a href="#R60">R60</a> 补承前省略的 who are 是为了理结构；<b>本卡补省略是为了做写作目的题和态度题</b>。'],
 refs:[{p:'2017_T1_美国机场安检大排长龙.html',q:'q21',label:'2017·T1·21（reminder of why ⟹ 解释美国人为何忍安检）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'col1',label:'2017·T1 · 02+ 专栏（四处省略补全表）'}]},

{id:'R217', tier:'🔴', qt:'细节题 · 因果题 · 推理题（原文是「没达到／说不准／正在补／应该更」一类对现状的评价，选项里出现 decline／reduction／reluctance／wrongly 一类带方向的词）', title:'没达到 ≠ 在下降，不清楚 ≠ 变差，应该更 ≠ 不愿意：原文说的是「状态」或「建议」，选项给它加了一个方向——多出来的那个方向，就是命题人加的',
 trig:['原文：has not gotten anywhere close to ／ It is not yet clear how much more … ／ is rushing to … ／ X should … directly','选项：a dramatic reduction · declining efficiency · reluctance to · wrongly-directed'],
 flow:'① 选项里有「变化词」（decline／reduction／drop／worsen），先回原文找<b>两个时间点的对比</b>——没有「从前 X、如今 Y」，就没有变化；<br>'
     +'② not yet clear how much <b>more</b> X ＝ 方向已定为「更 X」、只是幅度未知——读成「变差」是把方向也否掉了；<br>'
     +'③ rushing to／struggling to／scrambling to ＝ 在补救，不是在变坏；<br>'
     +'④ X should do Y directly 只能反推「X 现在还没直接做 Y」，推不出 X 不愿意、更推不出 X 做错了；<b>再查同段有没有「已经在做」</b>（Upcoming reforms）；<br>'
     +'⑤ 没达到目标 ≠ 规模缩减：缩减要求先大后小，没到过的东西谈不上缩。',
 tmpl:'<table class="tk"><tr><th>原文（2017·T1）</th><th>选项</th><th>判</th></tr>'
     +'<tr><td>⑥❶ not anywhere close to 25 million</td><td>24A dramatic reduction</td><td>✘ 从没大过</td></tr>'
     +'<tr><td>③❸ not yet clear how much more effective ＋ ④❶ rushing to hire</td><td>22B declining efficiency</td><td>✘ 方向已是「更有效」</td></tr>'
     +'<tr><td>⑥❹ Congress should … directly</td><td>24B wrongly-directed · 24C reluctance</td><td>✘ 建议 ≠ 指控</td></tr></table>'
     +'<p class="note">⑥❸ Upcoming reforms might bring the price to a more reasonable level——改革已在路上，24C「不愿支持」当场出局。</p>',
 traps:['<b>多推一步</b>：从「没达到」推到「缩减」、从「应该更直接」推到「不愿意」，都是 <a href="#R6">R6</a> 所说的多推了一步。',
        '<b>与 R61 分工</b>：<a href="#R61">R61</a> 管时态（没发生的说成已经发生）；<b>本卡管方向</b>（没变的说成变了、没到的说成退了、建议说成指控）。',
        '<b>effective ≠ efficiency</b>：③❸ 谈的是安检的效果（effective），22B 换成了 TSA 的效率（efficiency）——概念也一并偷换了。',
        '<b>2019·T1 两例</b>：25B Failure of Quarterly Capitalism——原文说短期主义 has worsened（在加剧），作者批评它，选项却给它加了一个「失败」的结局；24D obstacles——美国法案 slightly helping reduce，效果小被写成「有障碍」。'],
 refs:[{p:'2017_T1_美国机场安检大排长龙.html',q:'q22',label:'2017·T1·22B（说不准 ＋ 在补人 ≠ 效率下降）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'q24',label:'2017·T1·24（A 没达到≠缩减 · B／C 建议≠指控）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'col2',label:'2017·T1 · 02++ 专栏（状态 → 被加了方向）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q25',label:'2019·T1·25B（has worsened → Failure：给批评加了结局）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q24',label:'2019·T1·24D（slightly helping → obstacles：效果小 ≠ 有障碍）'}]},

{id:'R218', tier:'🔴', qt:'最佳标题题（「问题—原因—方案」型社论，四个选项里没有一项能同时装下问题与方案）', title:'标题取贯穿首尾的那根线：能装两头就装两头（R167）；装不下，就数哪条线从第一段走到最后一段——通常是「问题」，因为方案是为它而写的；只罩方案的项覆盖面天然只有后半篇',
 trig:['全文骨架：问题 → 影响／原因 → 方案 → 障碍 → 呼吁','四个标题：有的只写问题（Getting Stuck in …），有的只写方案（X—a … Solution／Underused X）','没有一项像 2014·T2·30C 那样写成 a problem … and solutions to it'],
 flow:'① 先按 <a href="#R167">R167</a> 找「问题 ＋ 方案」双全的选项，有就选它；<br>'
     +'② 没有，就给每条线画一行、逐段打勾：问题线（lines · waits · time）与方案线（PreCheck）各占哪几段、首尾两段在谁那边；<br>'
     +'③ 选贯穿首尾的那条（2017·T1：问题线占①–⑤ 与⑦，方案线只占⑤⑥⑦）；<br>'
     +'④ 方案类标题再查评语：Belated（迟来的）对不对？原文 Since the beginning ＋ make the program work ＝ 早就有、没用起来——时间轴站错；<br>'
     +'⑤ 拼接类标题（方案机制 ＋ 全文关键词）查拼出来的因果原文说没说过：Less Screening for More Safety 与「多花时间换安全」的交易方向相反。',
 tmpl:'<table class="tk"><tr><th>2017·T1·25</th><th>罩住</th><th>判</th></tr>'
     +'<tr><td>A Getting Stuck in Security Lines</td><td>①–⑤ ＋ ⑦（首尾都在）</td><td>✔</td></tr>'
     +'<tr><td>B PreCheck—a Belated Solution</td><td>⑤–⑦；时间错位</td><td>✘</td></tr>'
     +'<tr><td>D Underused PreCheck Lanes</td><td>⑥⑦</td><td>✘</td></tr></table>'
     +'<p class="note">C Less Screening for More Safety：取⑤ 的少查 ＋ ②❶ 的 safety 拼成一个原文没说过的因果，方向与全文的交易相反。</p>',
 traps:['<b>有建议句 ≠ 标题必须给出路</b>：<a href="#R92">R92</a> 说有 should／It is time to 的才<b>可能</b>用 Way Out 类标题；本篇两样都有，标题照样落在问题上。',
        '<b>别把「标题是问题」读成「作者只描述不建议」</b>：作者的建议很具体（加入预检、国会出钱），标题只是取了更大的那个框。',
        '<b>R167 的修正</b>：「主旨题正解必须同时装下问题和对策」是在选项里有这样一项时成立；没有时，退一步取贯穿首尾的线。',
        '<b>2017·T3·35</b>：本篇有<b>两根</b>线同时从①走到⑦（GDP 这把尺子 · 它量不到的福祉）——两根都贯穿首尾时两根都要 ⟹ C High GDP But Inadequate Well-being；与同卷 T1（只有问题线贯穿）对照。',
        '<b>2018·T1·25 接着考同一种文章</b>：2017 问标题（装不下两头，取问题线），2018 把 a problem 写进题干、只问另一半 ⟹ possible solutions to it（<a href="#R236">R236</a>）——<b>同一种「问题—方案」社论，连着两年换问法</b>。'],
 refs:[{p:'2017_T1_美国机场安检大排长龙.html',q:'q25',label:'2017·T1·25（问题线贯穿首尾 ⟹ A）'},
       {p:'2017_T1_美国机场安检大排长龙.html',q:'col3',label:'2017·T1 · 02+++ 专栏（两条线逐段打勾 ＋ 2014·T2 对照）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col4',label:'2017·T3 · 02++++ 专栏（两根线都贯穿 ⟹ 两根都装）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'q25',label:'2018·T1·25（同一骨架直接问结构 ⟹ solutions，见 R236）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q25',label:'2019·T1·25（首尾都是英国新规、短 vs 长那根线走通 ①–⑦）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q35',label:'2019·T3·35（Complex ← ②–④ · Inevitable ← ⑤ 起；B 只罩首尾、D 只罩下场）'}]},

{id:'R219', tier:'🔴', qt:'写作目的题（X’s remark in Paragraph 1 indicates）· 推理题（It can be inferred from Paragraph N）· 评论文以名人引语开头（“…,” wrote X in 18xx）', title:'引语的三个时点：所说的年代 · 说话的年份 · 文章的现在——问「这句话表明什么」只取所说的年代，干扰项把内容挪到另两个时点；开篇引语到后文被收回时，就是推断题的答案',
 trig:['首句是带年份的引语：“The ancient X were …,” wrote Y in 1897.','引语后紧跟 Sadly／But … today 把时间拉到现在','选项里出现 in her time／in ancient times／today 一类时间状语','后文用 early／ancestral／the same … that first … 回扣引语的年代'],
 flow:'① 在卷边画三格：<b>古（引语内容）／ 说话时（年份）／ 今（文章）</b>，把原文的时态与时间词逐个钉上去；<br>'
     +'② 引语的「意思」读到下一句解释为止（引语 ＋ 解释句 ＝ 点面结合）；<br>'
     +'③ 问引语表明什么 ⟹ 只取「古」那一格；选项里的时间状语落在另两格的，内容再对也排；<br>'
     +'④ 读后文时留意有没有回扣引语的原词或意象——有，推断题的正确项多半就用它（引语被作者收回）；<br>'
     +'⑤ reminder／fear 一类词也有方向：reminder 朝过去，fear 朝将来——同一种挪位。',
 tmpl:'<table class="tk"><tr><th>2017·T2 时点</th><th>原文</th><th>选项</th></tr>'
     +'<tr><td>古（所说）</td><td>①❶ The ancient Hawaiians were astronomers ＋ ①❷ most esteemed</td><td>26A ✔</td></tr>'
     +'<tr><td>1897（说话）</td><td>①❶ wrote … in 1897</td><td>26D in her time ✘</td></tr>'
     +'<tr><td>今（文章）</td><td>①❸ Sadly … today</td><td>26C decline in ancient times ✘</td></tr>'
     +'<tr><td>收回</td><td>⑤❷ early Polynesians · ⑤❹ ancestral homes</td><td>29A dreams of ancient Hawaiians ✔</td></tr></table>'
     +'<p class="note">一句可背的话：<b>说话人的年份 ≠ 所说内容的年代</b>——1897 年的女王在回望祖先。</p>',
 traps:['<b>把说话时当成所说时</b>：26D feats in her time——女王说的是 ancient，不是她自己的时代。',
        '<b>把今天的问题挪回古代</b>：26C decline of astronomy in ancient times——不太平的是 today，古代恰恰最受尊敬。',
        '<b>不是所有开篇引语都会被收回</b>：<a href="#R86">R86</a> 人物由头 ≠ 文章主题；判据是后文有没有回扣引语的原词或意象。',
        '<b>分工</b>：<a href="#R98">R98</a> 管「当下 vs 事后」的时间维度；<a href="#R189">R189</a> 管名人的话被作者去引号复述；<b>本卡管一句引语里的三个时点，以及引语在后文的回收</b>。'],
 refs:[{p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q26',label:'2017·T2·26（引语只取所说的年代 ⟹ A）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q29',label:'2017·T2·29（引语在⑤ 被收回 ⟹ A）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'col1',label:'2017·T2 · 02+ 专栏（三个时点表）'}]},

{id:'R220', tier:'🔴', qt:'因果细节题（X is deemed as … due to／because／The reason why X is ideal）', title:'现状是结果不是原因：「is also home to／has long attracted／is already used by」证明它好，不解释它为什么好——原因在 where／because／allow 那一句；句首的地理坐标也不是理由',
 trig:['题干问 due to／because／why ideal／what makes X suitable','定位段先摆一个现状：X is also home to …／X has long attracted …','紧跟一句带 where conditions allow／enable／thanks to 的描写','选项里有 existing infrastructure／its popularity／its reputation 一类「已经有了」的名词'],
 flow:'① 先问「先有哪个」：先有条件，才有人来——先发生的是因，后发生的是果；<br>'
     +'② 在定位段里把现状句标「果」，往后找带 allow／enable／where conditions … 的句子标「因」；<br>'
     +'③ 句首分词短语（Rested in …／Located on …）只是坐标，理由在主句谓语里；<br>'
     +'④ 若段中有 But，先判题干问的是 But 前还是 But 后那一方的理由，另一半一律不看。',
 tmpl:'<table class="tk"><tr><th>2017·T2 ②</th><th>角色</th><th>选项</th></tr>'
     +'<tr><td>❶ worshiped as the piko</td><td>But 前：反对方的山</td><td>27A ✘</td></tr>'
     +'<tr><td>❷ home to … most powerful telescopes</td><td>现状 ＝ 结果</td><td>27D existing infrastructure ✘</td></tr>'
     +'<tr><td>❸ Rested in the Pacific Ocean</td><td>坐标</td><td>27B protective surroundings ✘</td></tr>'
     +'<tr><td>❸ peak rises above … atmosphere, where conditions allow …</td><td>原因</td><td>27C geographical features ✔</td></tr></table>'
     +'<p class="note">一句可背的话：<b>「已经有很多望远镜」是它理想的证据，不是它理想的原因</b>。</p>',
 traps:['<b>倒果为因</b>：27D existing infrastructure——设施是因为地方好才建的。',
        '<b>状语当理由</b>：27B 把「坐落在太平洋中」读成「受保护的环境」，文中没有「保护」。',
        '<b>分工</b>：<a href="#R5">R5</a> 问结果别停在原因；<a href="#R149">R149</a> 问源头别取结果；<a href="#R165">R165</a> 隐性因果词；<b>本卡管「并列摆出的现状被读成原因」</b>。'],
 refs:[{p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q27',label:'2017·T2·27（现状是结果，原因在 where conditions allow ⟹ C）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'col2',label:'2017·T2 · 02++ 专栏（现状 / 坐标 / 原因分层表）'}]},

{id:'R221', tier:'🔴', qt:'作者态度题（The author’s attitude toward X is one of）· 文中有大段让步或自我批评', title:'批评对象 ≠ 题干对象：作者批评的若是别的对象（自己人过去的做法），态度不降档——先把 toward 后面的宾语写在卷边，只数落在它身上的评价句；双重否定收口 ＝ 满格',
 trig:['题干 attitude toward ＋ 一个具体对象（choosing X as the site／the new policy）','文中有 Some blame … belongs to …／They did not always …／It is fair to criticize … 一类批评','作者身份与被批评者同属一方（we explore …）','末句是 There is no reason why … cannot／It is hard to see why … should not'],
 flow:'① 把题干 toward 后的宾语原样抄在卷边——它才是要数的对象；<br>'
     +'② 逐条给作者的评价句标对象：批评谁？肯定谁？只数落在题干对象上的；<br>'
     +'③ 查后文有没有「改正」：被批评的过错在后文被行动回应（The site was chosen to avoid …），批评就只剩在过去；<br>'
     +'④ 自己人批评自己人，常是为了让后面的论证更可信——认错是姿态，不是立场；<br>'
     +'⑤ 最后看收口句的强度：双重否定、It is long past time 一类 ＝ 满格，不选 slight／passive。',
 tmpl:'<table class="tk"><tr><th>2017·T2 作者的话</th><th>对象</th><th>落在选址上？</th></tr>'
     +'<tr><td>①❹ promises to revolutionize …</td><td>TMT</td><td>✔ 褒</td></tr>'
     +'<tr><td>④ Some blame … belongs to astronomers</td><td>天文学家过去的做法</td><td>✘ 不降档</td></tr>'
     +'<tr><td>⑥❷ The TMT site was chosen to …</td><td>这次选址</td><td>✔ 褒（纠正了④）</td></tr>'
     +'<tr><td>⑥❹ There is no reason why … cannot</td><td>各得其所</td><td>✔ 满格 ⟹ 30B</td></tr></table>'
     +'<p class="note">一句可背的话：<b>先问他批评的是不是这道题问的那件事</b>——<a href="#R170">R170</a> 的「让步几次就保留几分」只在批评落在题干对象上时成立。</p>',
 traps:['<b>把对别的对象的批评算进来</b>：30D slight hesitancy 取自④ 的自我批评，对象错。',
        '<b>把主动让步读成被动接受</b>：30C passive acceptance ← ⑥❶ is making compromises，主语是天文界、动作是做出。',
        '<b>把反对者的态度当成作者的</b>：30A severe criticism ← ③ 的 disrespect、painful（<a href="#R21">R21</a> 主体校验）。',
        '<b>改编会放大这个坑</b>：原刊在认错前还有一段替天文学家辩护，考卷删了——只剩认错，不剩辩护。',
        '<b>分工</b>：<a href="#R170">R170</a> 管批评落在题干对象上（带 despite 的正解）；<a href="#R114">R114</a> 管一个概念拆成两半、由段落限定词裁；<a href="#R12">R12</a> 定强度；<b>本卡管「批评对象 ≠ 题干对象」时不降档</b>。',
        '<b>2017·T4·40</b>：嫌恶的对象是麦克唐纳的<b>行为</b>（①❷ ④❶），题干问的是对<b>裁决</b>的态度 ⟹ 不降档，D supportive；本卡的判据换一个主语同样成立：法院嫌弃别的对象，作者对裁决的态度不受影响（⟹ <a href="#R227">R227</a>）。'],
 refs:[{p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'q30',label:'2017·T2·30（批评对象是天文学家的过去，选址 full approval ⟹ B）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'col3',label:'2017·T2 · 02+++ 专栏（逐句标对象表 ＋ 与 R170 分工）'},
       {p:'2017_T2_莫纳克亚山的望远镜之争.html',q:'col4',label:'2017·T2 · 02++++ 专栏（五方说话人对照表）'},
       {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q40',label:'2017·T4·40（嫌行为 ≠ 嫌裁决）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q35',label:'2018·T3·35B（welcome 的宾语是德纳姆的报告，不是 AI 医疗）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q39',label:'2018·T4·39A（common-sense 夸的是被漏掉的改革，不是立法者）'}]},

{id:'R222', tier:'🔴', qt:'写作目的题（X is cited because he …）· 人物观点题 · 名言里带 except／but／other than 的判词', title:'排除句看排除了什么：排掉的若是几个边角反例，重心在主句（R65）；排掉的若是最要紧的那样东西，重心就落在 except 后面——「量得了一切，唯独量不了最要紧的」是明褒实贬',
 trig:['开篇名言形如 X measures／covers／has “everything except …”','主句是 everything／all／anything 这种全称空壳','except 后面是 that which makes …／what matters／the one thing 一类「最要紧的东西」','选项里有 identified X with Y（等同于）与 had a low opinion of（评价低）同时出现'],
 flow:'① 见到 except／but／other than，先给<b>被排掉的东西称分量</b>：a few／some／minor ⟹ 边角；what matters／that which makes life worthwhile ⟹ 核心；<br>'
     +'② <b>边角</b> ⟹ 读主句，例外只是补丁（<a href="#R65">R65</a>）；<b>核心</b> ⟹ 读 except 后面，全称主句只是空壳；<br>'
     +'③ 把整句念成中文「它什么都……，<b>就是不</b>……」——「就是不」三个字就是判词的褒贬；<br>'
     +'④ 拿不准时去找作者的白话版（So, what X was referring to was that … ／ It does not include …）；<br>'
     +'⑤ 排选项：<b>except 减、besides 加</b>——把 except 读成「还包括」的选项（identified X with Y）一律划掉。',
 tmpl:'<table class="tk"><tr><th>句子</th><th>排掉的</th><th>重心</th></tr>'
     +'<tr><td>2010·T3 With the exception of a few celebrities, even the most influential …</td><td>几个边角反例</td><td>主句（R65）</td></tr>'
     +'<tr><td>2017·T3 GDP measures “everything except that which makes life worthwhile”</td><td>最要紧的东西</td><td>except 之后 ⟹ 31D</td></tr>'
     +'<tr><td>2017·T3 ⑥❷ It does not include important factors such as …</td><td>同上（白话版）</td><td>否定句 ⟹ 34B</td></tr></table>'
     +'<p class="note">一句可背的话：<b>except 前后谁重，看被排掉的那样东西有多重</b>。</p>',
 traps:['<b>把 except 读成 besides</b>：31B identified GDP with happiness——except 的宾语不在衡量范围之内。',
        '<b>拿「扬」的那半句当人物态度</b>：31A praised the UK for its GDP——夸英国的是②❹ 的数据，不是肯尼迪，而且下一句就被设问推翻（<a href="#R224">R224</a>）。',
        '<b>「掂量他的意思」不是「质疑他」</b>：31C misinterpreted——①❷ assess what he was referring to 在⑥❶ 兑现，作者赞同他（<a href="#R189">R189</a>）。',
        '<b>同族的 but</b>：all but（几乎）· nothing but（只不过）· anything but（绝不）· but for（要不是）——四个都是「除了」的变体，意思各不相同。',
        '<b>分工</b>：<a href="#R65">R65</a> 管排掉反例、规律在主句；<a href="#R58">R58</a> 管引语里的两层态度；<a href="#R189">R189</a> 管引子人物被作者收编；<b>本卡管「排掉的是核心」时重心在被排掉的东西上</b>。'],
 refs:[{p:'2017_T3_GDP不能衡量民生福祉.html',q:'q31',label:'2017·T3·31（everything except that which makes life worthwhile ⟹ D）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col1',label:'2017·T3 · 02+ 专栏（与 R65 对照表）'}]},

{id:'R223', tier:'🔴', qt:'事实判断题（Which is true about …）· 观点态度题（the author suggests that）· 原文有 rather than／instead of 的取舍结构', title:'rather than just ≠ rather than：多一个 just／simply，X 就从「被取代」变成「仍保留、只是不够」——原文是加法，选项写 exclude／abandon 的当场判死；选项写 beyond／besides 的才对得上',
 trig:['原文 Rather than just focusing on X, …','原文 … rather than simply worrying about X','同篇另有 the sole measure／no longer enough／not only 一类分寸词','选项里有 exclude X／abandon X 与 factors beyond X 同时出现'],
 flow:'① 读到 rather than／instead of，<b>先往后找 just／simply／only／merely</b>；<br>'
     +'② <b>有</b> ⟹ 加法：X 仍在，Y 是另加的；<b>没有</b> ⟹ 替换：X 被 Y 取代；<br>'
     +'③ 选项归类：beyond／besides／in addition to／other than（加法）· exclude／abandon／replace／instead of（替换）——<b>和原文不同类的直接划掉</b>；<br>'
     +'④ 同篇把 just／sole／simply／no longer enough 这类分寸词全圈出来——它们是一条线，作者的态度档位就是它（「不够」≠「该废除」）；<br>'
     +'⑤ 完形里用 <a href="#R104">R104</a>（两端反向）前，先确认没有 just／simply——有了，两端就不是反义关系。',
 tmpl:'<table class="tk"><tr><th>2017·T3 原文</th><th>X 的命运</th><th>选项</th></tr>'
     +'<tr><td>③❸ Rather than just focusing on GDP</td><td>仍是指标之一</td><td>33A excludes GDP ✘</td></tr>'
     +'<tr><td>⑤ the sole measure · ⑥❶ no longer enough</td><td>不再唯一、不够</td><td>35B Terminator ✘（过头）</td></tr>'
     +'<tr><td>⑦❷ rather than simply worrying about GDP figures</td><td>不能一味盯着</td><td>34B factors beyond GDP ✔</td></tr></table>'
     +'<p class="note">一句可背的话：<b>just 是全句最短的词，也是最贵的词</b>——作者反对的是「只看 X」，不是「看 X」。</p>',
 traps:['<b>读丢 just</b>：33A It excludes GDP as an indicator——研究不只看 GDP，GDP 仍在（黄皮书原话：忽视了 Rather than 后表强调的 just）。',
        '<b>把「不够」拔高成「终结」</b>：35B a Terminator of GDP——作者说 GDP 仍是最常用的方法（⑥❶），只是不够（<a href="#R12">R12</a> 强度尺）。',
        '<b>把积极调整换成消极谨慎</b>：34D it requires caution——refocus 是换重点，不是放慢手脚。',
        '<b>边界</b>：<a href="#R104">R104</a> 说取舍结构两端必然反向——带 just／simply 时不成立：well-being 不是 GDP 的反义，是 GDP 之外的另一样东西。',
        '<b>分工</b>：<a href="#R104">R104</a> 管完形取舍结构定两空；<a href="#R84">R84</a> 管形容词前的小否定词；<a href="#R176">R176</a> 管限定词给作者的话打折；<b>本卡管 rather than 后面那个 just／simply 把替换变成加法</b>。'],
 refs:[{p:'2017_T3_GDP不能衡量民生福祉.html',q:'q33',label:'2017·T3·33A（Rather than just ⟹ GDP 仍在，excludes 错）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'q34',label:'2017·T3·34（rather than simply ⟹ factors beyond GDP ⟹ B）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col3',label:'2017·T3 · 02+++ 专栏（四处分寸词一条线）'}]},

{id:'R224', tier:'🔴', qt:'段落推断题（It can be inferred from Paragraph N）· 作者态度题 · 原文出现 If … so well, then why …?', title:'设问质疑的是前提：If A, then why B?——A 是被怀疑的「表面」，B 是戳破它的反常事实；推断题取「A 不可信」，答案常在下一段第一句（给 R85 补第三种问句）',
 trig:['上一句把某样东西夸到顶（the envy of／record／high）','紧跟 If everything was going so well, then why …?','问句里带 despite（明知……还……）','下一段首句是 A study sheds some light on that question／The answer lies in …'],
 flow:'① 在卷边把 <b>If 从句圈起来打个问号</b>——被怀疑的是它，不是 why 后面的事实；<br>'
     +'② 问「这个前提是谁说的」：本篇「一切都好」是 GDP 数据说的 ⟹ 被怀疑的是 GDP 这把尺子；<br>'
     +'③ 看问号后面：接作者自己的回答 ⟹ <b>设问</b>（不是困惑，也不是反问后接断言）；<br>'
     +'④ 推断题正确项 ＝ <b>对前提的否定或怀疑</b>（the measure of success is widely defied）；<br>'
     +'⑤ 「扬」的那一句（the envy of …）不是作者立场——拿它当依据的选项全错。',
 tmpl:'<table class="tk"><tr><th>2017·T3 ②</th><th>身份</th></tr>'
     +'<tr><td>❹ the UK’s GDP has been the envy of the Western world</td><td>先扬（被推翻的表面）</td></tr>'
     +'<tr><td>❺ If everything was going so well, then why did over 17 million people vote for Brexit, despite the warnings …?</td><td>设问：怀疑 If 从句 ⟹ 32A ✔</td></tr>'
     +'<tr><td>③❶ A recent annual study … sheds some light on that question.</td><td>作者自答 ⟹ 设问不是困惑</td></tr></table>'
     +'<p class="note">一句可背的话：<b>「既然 A，为什么 B？」＝「说是 A，可 B 又怎么解释？」</b>——被打问号的是 A。</p>',
 traps:['<b>拿「扬」当立场</b>：32D reluctant to remold its economic pattern ← ❹ 的表面繁荣；31A praised the UK、35D a Window on Global Economic Health 同源。',
        '<b>代词不回指</b>：32C contribute less to the world economy——their country’s 的 their ＝ 投票的英国人，受损的是英国自己；could 还被升成 will。',
        '<b>偷换时间与人物</b>：32B UK policymakers paying less attention——②❶ 是半个多世纪、泛指的政策制定者被困扰。',
        '<b>三种问句分清</b>：反问后接断言（<a href="#R85">R85</a>）· 文末反问往前数疑点（<a href="#R146">R146</a>）· 设问后接作者自答（本卡）——三种都不是 puzzled。',
        '<b>分工</b>：<a href="#R85">R85</a> 管看问号后面那一句；<a href="#R146">R146</a> 管问号在全文最后；<a href="#R168">R168</a> 管设问的答案归谁；<b>本卡管「If A, then why B?」怀疑的是 A</b>。'],
 refs:[{p:'2017_T3_GDP不能衡量民生福祉.html',q:'q32',label:'2017·T3·32（If … so well, then why …? ⟹ GDP 这把尺子被无视 ⟹ A）'},
       {p:'2017_T3_GDP不能衡量民生福祉.html',q:'col2',label:'2017·T3 · 02++ 专栏（设问五成分表）'}]},

{id:'R225', tier:'🔴', qt:'句意推断题（The underlined sentence most probably shows that …）· 划线句形如 But it did so while doing Y／X, albeit reluctantly', title:'一句两层账：But it did so while doing Y——did so 回指上一句的动作（旧信息），while 后面是新增的态度（新信息）；划线句题只问新增的那一层，习语的方向由 But 定、由后文的白话版回收', trig:['划线句以 But it did so／did it／does so 开头','后面跟 while ＋ 现在分词，或 albeit／though ＋ 形容词','态度部分是一个习语或比喻（holding its nose、with a heavy heart、grudgingly）','后文某段出现同方向的白话评价词（distasteful、regrettable、reluctant）'], flow:'① <b>回填</b>：did so ＝ 上一句的谓语（R216）——念一遍「法院推翻定罪时……」；<br>' +'② <b>分层</b>：回填出来的是<b>动作层</b>（旧信息，上一句已说），while 后面是<b>态度层</b>（本句新增）；<br>' +'③ <b>给态度定方向</b>：But 让它与上一句的动作反向；看 at／toward 的宾语是什么（行为的道德问题 ⟹ 贬）；<br>' +'④ <b>往后找白话版</b>：隔一两段的评价词把习语翻成大白话；<br>' +'⑤ <b>排除</b>：读反动作层的、删掉态度层的（把「嫌弃」读成「不置评」）、换对象的。', tmpl:'<table class="tk"><tr><th>2017·T4·36 选项</th><th>判</th></tr>' +'<tr><td>A made no compromise in convicting</td><td>动作层读反（推翻 → 坚持定罪）✗</td></tr>' +'<tr><td>B avoided defining the extent of duties</td><td>换对象（取自②，初审法官）✗</td></tr>' +'<tr><td><b>C was contemptuous of his conduct</b></td><td><b>态度层 ← holding its nose ＋ ④❶ ✔</b></td></tr>' +'<tr><td>D refused to comment on his ethics</td><td>删掉态度层（捏鼻子 ≠ 不置评）✗</td></tr></table>' +'<p class="note">①❷ But it did so while holding its nose at the ethics of his conduct——did so ＝ overturned the conviction；④❶ The court did suggest that … is “distasteful” and “nasty.” 是它的白话版。</p>', traps:['<b>把旧信息当答案</b>：36A 取的是动作层（推翻），而这句话新增的只有态度——<b>动作在上一句已经说过了</b>。', '<b>把态度删掉</b>：36D refused to comment——hold one’s nose 本身就是评价；而且 D 与 But 的转折接不上（推翻 ＋ 不置评，谈不上「但是」）。', '<b>分工</b>：<a href="#R216">R216</a> 管「省略句回填」；<a href="#R115">R115</a> 管「习语读两端落差」；<a href="#R20">R20</a> 管「句意题三步」；<b>本卡管「回填之后分新旧两层，划线句只问新的那层，习语隔段回收」</b>。'], refs:[{p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q36',label:'2017·T4·36（did so 推翻 ＋ while holding its nose 嫌恶 ⟹ C）'}, {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'col1',label:'2017·T4 · 02+ 专栏（动作层 · 态度层 · 对象 · 白话版四行表）'}, {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'s2',label:'2017·T4 · 长难句 s2（did so while holding its nose）'}]},

{id:'R226', tier:'🔴', qt:'条件关系题（X is deemed … only if it involves ／ X is necessary for ／ What is required for …）· 原文在相邻几段里用不同写法给出好几个条件', title:'only if 找必要条件：原文很少写 only if，而写 must／require／unless／only／not … without——一篇里有好几处条件句时，题干的段落限定决定取哪一个；unless 那格、such as 的例子、Simply … is not 的排除项，专门供应干扰项', trig:['题干含 only if／necessary／required／must','题干限定了段落（According to Paragraph N）','定位段附近有 must be／requires／unless／Merely … is not／Simply … is not','条件句后面跟着 such as 举例'], flow:'① <b>认题型</b>：only if ＝ 必要条件（没有它就不成立）；<br>' +'② <b>在限定段里找「必须」</b>：must、have to、require、need；unless 换成 if … not 念一遍（R135）；<br>' +'③ <b>区分三类句子</b>：条件句（must）· 排除句（Simply／Merely … is not）· 表态句（did suggest … distasteful）——只有条件句是答案；<br>' +'④ <b>条件取上位词</b>：such as 后面是例子，不是条件；<br>' +'⑤ <b>给条件里的名词标受益人</b>：benefits 是谁得的？（R21）', tmpl:'<table class="tk"><tr><th>2017·T4 原文</th><th>性质 ｜ 喂出</th></tr>' +'<tr><td>③ unless done with clear intent to pressure</td><td>条件（段外）｜ 37C ✗</td></tr>' +'<tr><td>④❶ accepting favors … is “distasteful”</td><td>表态 ｜ 37B ✗</td></tr>' +'<tr><td><b>④❷ proof must be made of concrete benefits</b></td><td><b>条件（段内）｜ 37A ✔</b></td></tr>' +'<tr><td>④❷ such as approval of a contract</td><td>例子 ｜ 37D ✗（反向）</td></tr>' +'<tr><td>④❸ Simply arranging a meeting … is not</td><td>排除项 ｜ —</td></tr></table>' +'<p class="note">37A concrete returns for gift-givers——受益人是送礼人（受贿要以此换彼）；37B 写成官员收到的礼物，把「收」和「回报」两半调了个。</p>', traps:['<b>段外的条件句</b>：37C 的 intentionally 来自③ with clear intent——条件是条件，但不在题干限定的第四段（<a href="#R7">R7</a>）。', '<b>例子当条件，还反向</b>：37D breaking contracts ← approval of a contract——such as 后面只是一个例子，D 又把「批准」改成「违反」。', '<b>必要 ≠ 充分</b>：must 只说「没有它不行」，没说「有它就够」；选项若写成 always／guarantees 要回头核（<a href="#R36">R36</a> 的反面提醒）。', '<b>分工</b>：<a href="#R36">R36</a> 管「必要条件句可转写成 X 激发 Y」；<a href="#R135">R135</a> 管「unless 换成 if … not」；<a href="#R123">R123</a> 管「流程链的条件题」；<b>本卡管「一篇多处条件句时靠段落限定取舍，其余全是干扰项原料」</b>。'], refs:[{p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q37',label:'2017·T4·37（only if ↔ ④❷ must ⟹ A）'}, {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'col2',label:'2017·T4 · 02++ 专栏（四种条件写法 × 喂出的选项）'}, {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'s6',label:'2017·T4 · 长难句 s6（proof must be made of）'}]},

{id:'R227', tier:'🔴', qt:'作者态度题（The author’s attitude toward the court’s ruling／the decision is）· 依据推理题 · 文中既有对当事人行为的道德评价，又有对裁决（规则）的法律评价', title:'法与德两本账：对当事人「行为」的嫌恶与对「裁决」的支持可以并存——态度题先圈 toward 后面是行为还是裁决；「一边嫌、一边放」不是反讽；「一种」不犯罪 ≠「一律」免罪（给 R190 补一个镜像）', trig:['同一段里出现「推翻定罪／判无罪」和「令人不齿／嫌恶」','作者在后文用 legally sound／a step forward／reinforces 评价裁决','出现 a kind of X that is not criminal、not always corruption 这类部分否定','选项里有 sarcastic／skeptical（态度题）或 exempt from／immune（推理题）'], flow:'① <b>开两本账</b>：道德账（这件事可不可取）· 法律账（这件事犯不犯法）；<br>' +'② <b>逐段往里填</b>：谁的态度、对什么、褒还是贬；<br>' +'③ <b>态度题只翻题干指定的那本</b>：toward the ruling ⟹ 只收主语是 the ruling 的评价句；<br>' +'④ <b>见「嫌他又放他」先想两本账，不想反讽</b>：情与法各记各的；<br>' +'⑤ <b>部分否定不扩大</b>：a kind of／not always ⟹ 选项写成「一律」「免于定罪」就错。', tmpl:'<table class="tk"><tr><th>2017·T4</th><th>哪本账 ｜ 方向</th></tr>' +'<tr><td>①❷ holding its nose · ④❶ distasteful</td><td>道德账（对行为）｜ 贬</td></tr>' +'<tr><td>⑤❶ legally sound · ⑧ a step forward</td><td><b>法律账（对裁决）｜ 褒 ⟹ 40D</b></td></tr>' +'<tr><td>⑤❶ a kind of favoritism · ⑦❷ not always</td><td>偏袒分情况 ⟹ 38D ✗</td></tr></table>' +'<p class="note">判决书原话：本案令人不齿，也许比这更糟；但我们关心的不是法拉利、劳力士和舞会礼服这些艳俗故事——法院亲口把两本账分开。</p>', traps:['<b>两本账读成矛盾</b>：40A sarcastic——「既然这么嫌，为何推翻？」只是常有的情与法问题（黄皮书）。', '<b>公众的观感当作者的判断</b>：40C skeptical ← ⑦❶ can fan public perceptions of corruption，⑦❷ 马上转回（<a href="#R21">R21</a>）。', '<b>档位</b>：40B tolerant——三次夸不是「容忍」（<a href="#R12">R12</a>）。', '<b>一种当一律</b>：38D exempt from conviction on the charge of favoritism ← ⑤❶ a kind of favoritism（<a href="#R24">R24</a>）。', '<b>镜像</b>：<a href="#R190">R190</a>（2015·T4）是法庭判无罪、作者不信；本篇是法庭推翻定罪、作者支持——两篇都先把「法庭结论」与「作者评价」分层。<b>分工</b>：<a href="#R221">R221</a> 管「批评对象 ≠ 题干对象」；<a href="#R153">R153</a> 管「裁决句与依据句」；<b>本卡管「对行为的道德账与对裁决的法律账分开记」</b>。'], refs:[{p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q40',label:'2017·T4·40（toward the ruling ⟹ 三句三褒 ⟹ D）'}, {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'q38',label:'2017·T4·38D（一种当一律）'}, {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'col3',label:'2017·T4 · 02+++ 专栏（两本账 ＋ 与 2015·T4 镜像表）'}, {p:'2017_T4_最高法院推翻州长贪腐定罪.html',q:'col4',label:'2017·T4 · 02++++ 专栏（全文两本账逐段表）'}]},

{id:'R228', tier:'🔴', qt:'完形 · 研究报道／健康科普的「机制」句（explain X percent of · be associated with · attribute A to B · because）· 一篇只证明一件事、再往回追原因', title:'因果扣环词先认「因站哪一侧」：A explains B、A leads to B 因在左；attribute B to A、B results from A 因在右；be associated with 不分左右——干扰项专门把箭头倒过来（required）或凭空加一环（restored）', trig:['文章先给出一个好处或坏处，再用学者引语、「专家认为」往回追原因','空格两边一边是机制（减压、激素释放），一边是结果（少得病、症状轻）','选项里有 explain／require／restore／serve 或 attribute／commit／transfer／return 这类同框架动词','四个选项全接同一个介词（to／with），介词筛不掉'], flow:'① <b>在卷边画一条链</b>：左写原因、右写结果（2017：拥抱 → 减压 → 少得病／病得轻 → 催产素）；<br>' +'② <b>空格两边各是链上哪一环</b>：主语是因还是果？to 后面是因还是果？<br>' +'③ <b>按扣环词的方向代入</b>：因在左的（explain／lead to／influence／generate）要求主语是因；因在右的（attribute…to／result from／because）要求 to 或从句是因；<br>' +'④ <b>划掉三类错项</b>：倒果为因（require／depend on）· 预设链上不存在的一环（restore＝以前有过）· 把对照读成因果（decrease 接在 But 后）。', tmpl:'<table class="tk"><tr><th>2017 完形</th><th>扣环词 ｜ 因在哪</th></tr>' +'<tr><td>10 减压效果 ___ 32% 的好效果</td><td>explained ｜ 左（主语）</td></tr>' +'<tr><td>14 风险 usually ___ with stress</td><td>associated ｜ 只说相伴</td></tr>' +'<tr><td>17 ___ the benefits to oxytocin</td><td>attribute ｜ 右（to 后）</td></tr></table>' +'<p class="note">新闻稿原话 hugs were responsible for one-third of the protective effect——be responsible for 就是 10 题 explain 的意思；18 because 解释名字由来，也是「因在右」。</p>', traps:['<b>倒果为因</b>：10D required——「减压效果需要少感冒」＝先有结果才有原因。', '<b>凭空加一环</b>：10C restored——预设「以前有过、后来没了」，链上没有这一环；10A served 语法上要 serve as／to do。', '<b>同框架动词，to 的方向不同</b>：17 题 commit／transfer／return A to B 的 to 是去向，attribute A to B 的 to 是来源——介词相同、意思相反，<b>也是三缺一</b>（<a href="#R74">R74</a>）。', '<b>associated with 的分寸</b>：只说两者相伴，不说谁导致谁；阅读题若把它改写成 causes 就是过度推断。', '<b>分工</b>：<a href="#R102">R102</a>（2011 完形）管「争因果方向的文章先画箭头」；<a href="#R165">R165</a> 管没有连词时的致使动词；<a href="#R106">R106</a> 管实验段的方法—结果—结论；<b>本卡管箭头已定、看扣环词本身的方向</b>。'], refs:[{p:'2017_完形_拥抱有益健康.html',q:'chain',label:'2017·完形 · 02+ 因果链八环表'}, {p:'2017_完形_拥抱有益健康.html',q:'q10',label:'2017·完形·10（explain X percent of ＝ 是原因）'}, {p:'2017_完形_拥抱有益健康.html',q:'q17',label:'2017·完形·17（attribute A to B：to 后是因）'}, {p:'2017_完形_拥抱有益健康.html',q:'q14',label:'2017·完形·14（be associated with：只说相伴）'}, {p:'2017_完形_拥抱有益健康.html',q:'orig',label:'2017·完形 · 考卷 vs 研究原稿（responsible for ＝ explain）'}]},

{id:'R229', tier:'🔴', qt:'完形 · 只讲好处（或只讲坏处）的文章里的逻辑空 · 句首 Besides／Even／Still／Despite 之争', title:'只讲一边的文章，逻辑空考「再加一级」：两边同向、后一边更极端（范围更大、程度更深、更出人意料）⟹ Besides／even／Even；方向反了才轮到 Still／Despite——换了主体也不影响递进', trig:['全文没有反方：首段一问一答就定了调（a resounding “yes!”）','空格后是 among those who …、even for those who …（把范围缩到「已中招的人」）','前一句带 it turns out that／believe it or not 这类「没想到」','选项同时有 Even 与 Still、Besides 与 Despite'], flow:'① <b>先问两边同向吗</b>：都是好处 ⟹ 排除 Despite／Still／However／Rather；<br>' +'② <b>再问后一边更极端吗</b>：已知 → 新知、有益 → 不生病、未病 → 已病 ⟹ Besides／even／Even；只是并列 ⟹ also／in addition；<br>' +'③ <b>别被「意外」带偏</b>：turns out、believe it or not 只说超出预期，不说方向相反；<br>' +'④ <b>主体换了照样递进</b>：从「所有人」换成「已病者」是缩范围，不是转折。', tmpl:'<table class="tk"><tr><th>2017 完形三级台阶</th><th>空</th></tr>' +'<tr><td>亲近（已知）→ 健康（原来还有）</td><td>1 Besides</td></tr>' +'<tr><td>有益 → 甚至不生病</td><td>4 avoid（even 已给出）</td></tr>' +'<tr><td>不易得（预防）→ 得了也轻（缓解）</td><td>11 Even</td></tr></table>' +'<p class="note">健康研究的两问：会不会得（8 come down with）· 得了重不重（12 symptoms）——11 就卡在两问之间。</p>', traps:['<b>让步冒充递进</b>：1D Despite、11B Still——都要求两边方向相反；本篇两边都是好处。', '<b>「没想到」≠「转折」</b>：it turns out that 让人联想到「尽管……竟然」，但判逻辑只看内容同向还是反向。', '<b>Thus 冒充</b>：两项并列的发现之间没有因果，「不易感冒」推不出「得了的人症状轻」（11A）。', '<b>分工</b>：<a href="#R210">R210</a> 管没有观点的说明文（时间轴）；<a href="#R192">R192</a> 管连接两个名词性成分；<b>本卡管只讲一边的议论／科普文里的句首逻辑空</b>。'], refs:[{p:'2017_完形_拥抱有益健康.html',q:'steps',label:'2017·完形 · 02++ 递进三级台阶表'}, {p:'2017_完形_拥抱有益健康.html',q:'q11',label:'2017·完形·11（未病 → 已病 ⟹ Even）'}, {p:'2017_完形_拥抱有益健康.html',q:'q1',label:'2017·完形·1（已知 → 新知 ⟹ Besides）'}, {p:'2017_完形_拥抱有益健康.html',q:'q4',label:'2017·完形·4（even ＋ help ⟹ avoid）'}]},

{id:'R230', tier:'🟡', qt:'完形 · 框架对宾语有正负要求的空（protect／keep sb from ___ · help sb ___ · moderate／generate ___ the feeling）', title:'框架自带正负号：protect from／prevent／avoid／moderate／ease 的宾语是坏事，generate／foster／promote／boost 的宾语是好事，help 的结果对人有利——先给宾语标「＋／−」，号对不上的选项不用查词义就能划', trig:['空格在 protect sb from the ___ risk、help you ___ getting sick 这类框架里','四个动词的中文都讲得通','全文主题词（如「减压」「降低风险」）恰好是某个选项的意思'], flow:'① <b>给宾语标号</b>：getting sick（−）· risk（−）· the feeling that others are there to help（＋）；<br>' +'② <b>看框架要什么号</b>：from 后要「−」且越坏越符合「保护」；help 的结果要「＋」；moderate 只压「−」、generate 让「＋」出现；<br>' +'③ <b>号不对的直接划</b>，剩下的再比词义；<br>' +'④ <b>警惕主题词陷阱</b>：主题只告诉你全文方向，不告诉你这个空的宾语是什么。', tmpl:'<table class="tk"><tr><th>2017 完形</th><th>宾语号 ⟹ 答案</th></tr>' +'<tr><td>4 help you ___ getting sick</td><td>− ⟹ avoid（keep 是一直）</td></tr>' +'<tr><td>13 protect … from the ___ risk</td><td>− 要更坏 ⟹ increased</td></tr>' +'<tr><td>15 helps ___ the feeling that …</td><td>＋ ⟹ generate（不是 moderate）</td></tr></table>', traps:['<b>主题词陷阱</b>：15B moderate 贴合「减压」主题，但这个空的宾语是安全感；13B minimized 贴合「降低风险」主题，但 protect from 已替你做了「降低」。', '<b>少一个 from 意思全反</b>：4D keep doing＝一直做，keep sb from doing 才是阻止。', '<b>and 同号</b>：2 题 close and ___（＋）⟹ connected，inferior／restricted 是「−」（<a href="#R77">R77</a>）。', '<b>分工</b>：<a href="#R74">R74</a> 按极性给四个选项分组；<b>本卡先看框架给宾语定的号</b>——两张卡常一起用（13 题 minimized／controlled／highlighted ＋ increased）。'], refs:[{p:'2017_完形_拥抱有益健康.html',q:'sign',label:'2017·完形 · 02+++ 框架正负号表'}, {p:'2017_完形_拥抱有益健康.html',q:'q15',label:'2017·完形·15（宾语是好感觉 ⟹ generate）'}, {p:'2017_完形_拥抱有益健康.html',q:'q13',label:'2017·完形·13（protect from ⟹ increased）'}, {p:'2017_完形_拥抱有益健康.html',q:'q4',label:'2017·完形·4（help ＋ avoid getting sick）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'q24',label:'2019·T1·24（reduce short-termism ＝ encourage long-termism：两个方向说一件事）'}]},

{id:'R231', tier:'🔴', qt:'新题型 · 排序题／选句填空（段首出现作品名、人名、机构名的简称或别名；带 as it is (generally) known、known as、under the name、so-called）', title:'称呼由全到简：全称、来历先立，简称、别名后用——段首拿简称开口的段（尤其挂着 as it is generally known today 这种「叫法说明」），上家必是给出全称或来历的那一段',
 trig:['段首是 The runaway success of <i>X</i>, as it is generally known today 这样的叫法说明','书名里带着一个此前只作为笔名／绰号出现的词（<i>Sketches by Boz</i>）','同一部作品、同一个人在不同段里叫法长短不一'],
 flow:'① <b>把全文专名列成称呼链</b>：同一对象的每种叫法各在哪一段；<br>'
     +'② <b>最长、最正式、带来历的那个在前</b>（全称、全名、under the pen name X、类名同位语 The comic novel, <i>…</i>）；<br>'
     +'③ <b>简称、昵称、派生名在后</b>（<i>The Pickwick Papers</i> → <i>Pickwick</i>；Boz → <i>Sketches by Boz</i>）；<br>'
     +'④ <b>带「叫法说明」的段必须紧跟全称段</b>：as it is known today、now called、better known as 这些话只有在「上文用过另一个名字」时才有意义。',
 tmpl:'<table class="tk"><tr><th>2017 新题型</th><th>称呼链 ⟹ 顺序</th></tr>'
     +'<tr><td>笔名</td><td>A 末 under the pen name “Boz” ⟹ C 首 <i>Sketches by Boz</i>：<b>A 在 C 前</b></td></tr>'
     +'<tr><td>作品</td><td>C 末全称 <i>The Posthumous Papers of the Pickwick Club</i> ⟹ B 首 <i>The Pickwick Papers</i>, as it is generally known today ⟹ G 首 After <i>Pickwick</i>：<b>C—B—G</b></td></tr></table>'
     +'<p style="margin-top:8px">口诀：<b>先名后号，先全后简；讲叫法的句子，背后必有另一个叫法。</b></p>',
 traps:['<b>别把 as it is generally known today 读成「众所周知」</b>：known 在这里是 be known as（被称作），as 提前了＝「这是它今天通行的叫法」，说的是名字不是名气。2017 黄皮书译文就译成了「如今广为人知的」，把本题最硬的一条接缝译没了（它的路标推引却读对了）。',
        '<b>全称段与简称段未必紧邻</b>：<i>Pickwick</i> 在 G 又出现一次，隔着 B。只有挂着「叫法说明」、或有时间状语另证的那一处才能定位；其余只加固（<a href="#R110">R110</a>）。',
        '<b>分工</b>：<a href="#R54">R54</a> 管术语（定义句早于裸用），<b>本卡管专名</b>；<a href="#R136">R136</a> 管选句填空的尾钩（下文把新词当旧信息）——三张卡是同一个原理：<b>读者第一次见到一个名字时，文章要先交代它是什么</b>。',
        '<b>2018：叫法说明的反方向</b>——C 首 The State, War, and Navy Building, <b>as it was originally known</b>（「最初的叫法」）⟹ 上文先给<b>现名</b>（E 首 The Eisenhower Executive Office Building (EEOB)）。2017 是「今天通行的叫法」预设旧称在前，2018 是「最初的叫法」预设现名在前——<b>方向相反，结论一样：讲叫法的句子，紧挨着的上一段必有另一个叫法</b>。同篇还有：Supervising Architect of the Treasury, Alfred B. Mullett（E）→ Alfred Mullett（A）；the existing Treasury Building（G）→ the Treasury Building（A）。',
        '2019：<b>Dale Carnegie</b>（B，全名 ＋ 书名 ＋ 年份）→ <b>Carnegie</b>（G，只用姓）⟹ B 在 G 前；G 首 would be right 评的正是 B 里的引语 ⟹ G 紧跟 B。'],
 refs:[{p:'2017_新题型_狄更斯小传.html',q:'names',label:'2017·新题型 · 02+++ 称呼链表'},
       {p:'2017_新题型_狄更斯小传.html',q:'q44',label:'2017·新题型·44（全称 → as it is generally known today）'},
       {p:'2017_新题型_狄更斯小传.html',q:'q43',label:'2017·新题型·43（笔名 Boz → <i>Sketches by Boz</i>）'},
       {p:'2017_新题型_狄更斯小传.html',q:'book',label:'2017·新题型 · 03+ 商榷 1（黄皮书把叫法说明译成「广为人知」）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'names',label:'2018·新题型 · 02+++ 称呼链表（现名 → 原名）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q41',label:'2018·新题型·41（as it was originally known 锁首段）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q42',label:'2019·新题型·42（Dale Carnegie → Carnegie）'}]},

{id:'R232', tier:'🔴', qt:'新题型 · 排序题（人物传记、历史叙事：段首是 Soon after X／After X／When X／The first … 这类带事件的时间状语）', title:'接力链：段首时间状语里的那件事，就是上一段最后「发生」的事——每段抄一个「首事件」一个「尾事件」，连起来就是答案；动作词自带预设（release 预设 imprisoned，published 预设 submitted，After X 预设 X）',
 trig:['文体是人物传记或按时间推进的叙事','四五个段首都是 Soon after／After／The first ＋ 一件事','段内有插叙的年份（出生前两年、某年出版）'],
 flow:'① <b>每段抄两栏</b>：段首时间状语里的事件（首事件）· 段中最后发生的事件（尾事件）；<br>'
     +'② <b>连线</b>：尾事件 ＝ 某段的首事件，或它的自然下一步（入狱 → 出狱 · 投稿 → 发表 · 出版 → 成功 · 成名作 → After 成名作）；<br>'
     +'③ <b>没有时间状语的段按传记骨架放</b>：总评（先报结局）→ 出生家世 → 挫折 → 起步 → 成名 → 此后；<br>'
     +'④ <b>验收</b>：通读时任何一处「时间倒流」都说明排错了。',
 tmpl:'<table class="tk"><tr><th>接缝</th><th>尾事件 ⟹ 首事件</th></tr>'
     +'<tr><td>F → E</td><td>His father was then <b>imprisoned</b> ⟹ Soon after his father’s <b>release</b> from prison</td></tr>'
     +'<tr><td>E → A</td><td><b>submitted</b> short sketches ⟹ The first <b>published</b> sketch</td></tr>'
     +'<tr><td>A → C</td><td>sketches <b>appeared</b> under the pen name “Boz” ⟹ Soon after <i>Sketches by Boz</i> <b>appeared</b></td></tr>'
     +'<tr><td>C → B</td><td>first <b>published</b> in book form ⟹ The runaway <b>success</b></td></tr>'
     +'<tr><td>B → G</td><td>《匹克威克》成名 ⟹ <b>After <i>Pickwick</i></b></td></tr></table>',
 traps:['<b>尾事件不一定在最后一句</b>：2017 F 的最后两句是评论（伤口、秘密、小说的根基），跳出了时间线；最后「发生」的事是 ⑦ 父亲入狱。找接力棒要找最后一件事，不是最后一句话。',
        '<b>段中的年份不是接缝证据</b>：F 的 two years before Dickens’s birth 是插叙，C 的 1836／1837 是出版年份——它们讲的是故事本身。和 2014 的「年份分两种」同一条纪律（2014 新题型页 02++ 节）。',
        '<b>动作预设是硬证据</b>，与 one／another、序数词同级：release、return、resume、recover、published、After X 都在要求「上文已经发生过某件事」。和 2014 的 In another case 一样——<b>不指望你注意，但缺了就读不通</b>。',
        '<b>比较级也在要上家</b>：a better job 要一个更差的工作作参照（F 的鞋油厂），a bleaker world 要一个不那么暗的参照（Pickwick 的喜剧）。',
        '<b>2018 两条动作预设</b>：G 末 the <b>demolition</b> of the State Department building ⟹ A 首 a <b>new</b> State Department Building（new 预设旧的没了）；A 末 construction … <b>began</b> in June of 1871 ⟹ F 首 Construction <b>took 17 years</b>（工期预设开工；1871＋17＝E 的 1888）。另见 <a href="#R250">R250</a>：先总后分的接缝上，年份可以倒退。'],
 refs:[{p:'2017_新题型_狄更斯小传.html',q:'seams',label:'2017·新题型 · 02++ 六个接缝（五处是事件接力）'},
       {p:'2017_新题型_狄更斯小传.html',q:'q42',label:'2017·新题型·42（imprisoned → release）'},
       {p:'2017_新题型_狄更斯小传.html',q:'q41',label:'2017·新题型·41（传记从出生讲起）'},
       {p:'2017_新题型_狄更斯小传.html',q:'cand',label:'2017·新题型 · 02+ 每格候选表（三格单候选）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q43',label:'2018·新题型·43（began → took 17 years）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q42',label:'2018·新题型·42（demolition → new）'}]},

{id:'R233', tier:'🟡', qt:'新题型 · 排序题（排完序的验收；人物传记、机构史、技术史）', title:'程度阶梯验收：名气、规模、地位这类程度词沿全文单调上升（obscure → modest reputation → fame／national figure → nationally and internationally celebrated），排完把它们按段抄一遍，倒退一级就是排错了——阶梯只能验收，不能定位',
 trig:['文章讲一个人、一家公司、一项技术从无到有','各段散落着程度不同的评价词（obscure／modest／famous／celebrated；small／growing／dominant）','首段先给了一个最高级的定评（best-known／greatest）'],
 flow:'① 排完序后，把每段里的<b>名气／规模／地位词</b>各抄一个；<br>'
     +'② 按排好的顺序读：<b>应当只升不降</b>；<br>'
     +'③ 首段若是最高级定评（best-known、greatest），那是<b>终点被提前放到开头</b>——传记首段先报结局，不算倒退；<br>'
     +'④ 出现倒退，就回去查倒退处两侧的接缝。',
 tmpl:'<table class="tk"><tr><th>2017 顺序</th><th>名气刻度</th></tr>'
     +'<tr><td>F → E</td><td>被嘲笑的童工 → 投给 <b>obscure</b> magazines</td></tr>'
     +'<tr><td>A → C</td><td><b>a modest reputation</b> → 出版社来约稿，他压过 the then-famous artist</td></tr>'
     +'<tr><td>B → G</td><td><b>secured fame · a national figure</b> → <b>nationally and internationally celebrated</b></td></tr></table>',
 traps:['<b>只能验收，不能定位</b>：A（modest）与 B（fame）之间隔着 C，阶梯告诉不了你 A 放 43 还是 44；定位仍靠接缝（<a href="#R232">R232</a>、<a href="#R231">R231</a>）。',
        '<b>别被情绪词带偏</b>：G 的 a bleaker world 是题材变暗，不是名气下降；阶梯只量名气、规模、地位这一类词。',
        '<b>与完形 <a href="#R229">R229</a>（递进再加一级）同一个直觉</b>：只讲一边的文章，程度往一个方向走。排序题里它是验收工具，完形里它是选词依据。'],
 refs:[{p:'2017_新题型_狄更斯小传.html',q:'ladder',label:'2017·新题型 · 02+++ 名气阶梯表'},
       {p:'2017_新题型_狄更斯小传.html',q:'q45',label:'2017·新题型·45（阶梯顶端 ≠ 总结段）'}]},

{id:'R234', tier:'🔴', qt:'事实判断题（Who will be most／least …? · Which … is the greatest …?）· 原文并排写了几个群体、方案或因素', title:'「最」字题先排尺：原文给每个群体配了一个程度词（disproportionately squeezed／don’t appeal to／will be fine），排成一把尺取题干要的那一头；文中出现过、却不在这把尺上的人（场外人）先划掉',
 trig:['题干带 most／least／best／the greatest／hardest','原文一段里并排写了三四个群体（中产／低收入／富人），每个都带一个程度或方向词','某个选项是文中别处出现过的人或机构，但原文没说它「受 X」'],
 flow:'① 圈题干的「最」字和动作：most threatened ⟹ 只在「受威胁的人」里排；<br>'
     +'② 回原文，给每个群体抄一个程度词：<b>disproportionately squeezed</b>（顶格）· <b>don’t appeal to robots</b>（低）· <b>will be fine</b>（零）；<br>'
     +'③ 程度词要<b>站在受影响的一方</b>看方向——拟人句「机器人看不上」是安全、「引起了它们的兴趣」是危险；<br>'
     +'④ 取题干要的那一头；<br>'
     +'⑤ 剩下的选项分三类验收：底格（方向反）· 中间格（档位错）· <b>场外人</b>（文中出现过，但不在尺上）。',
 tmpl:'<table class="tk"><tr><th>2018·T1·21</th><th>原文程度词</th><th>判</th></tr>'
     +'<tr><td>D Middle-class workers</td><td>disproportionately squeezed（顶格）</td><td>✔</td></tr>'
     +'<tr><td>B Low-wage laborers</td><td>don’t appeal to robots（低）</td><td>✘</td></tr>'
     +'<tr><td>C Robot owners</td><td>will be fine（零）</td><td>✘</td></tr></table>'
     +'<p class="note">A Leading politicians：① 的 presidential campaign 只说政客「不会提这个话题」——他们是该关注的人，不在「受威胁」这把尺上。</p>',
 traps:['<b>比较级信号词常常一个就够</b>：disproportionately（不成比例地）本身就是「比别人重」——读到它就能定顶格，其余群体只用来排干扰项。同族顶格词：especially · particularly · hardest hit · bear the brunt of；零格词：be spared · will be fine · be immune to。',
        '<b>常识排序要让位于原文排序</b>：常识「越穷越危险」，原文偏说低收入工作机器人做不来——中间那层才被掏空（<a href="#R8">R8</a> 常识陷阱）。',
        '<b>与 <a href="#R21">R21</a>（主体三问）、<a href="#R46">R46</a>（整体还是其中一类）分工</b>：R21 查「是不是这个人」，R46 查「层级对不对」，本卡查「几个对的人里谁排第一」——场外人一步就被 R21 划掉，剩下三个才轮到排尺。'],
 refs:[{p:'2018_T1_机器人与中产阶级.html',q:'q21',label:'2018·T1·21（三档尺取顶格 ⟹ D）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'col1',label:'2018·T1 · 02+ 专栏（群体 × 程度词 × 档位表）'}]},

{id:'R235', tier:'🔴', qt:'作者观点题（Which … best represents the author’s view?）· 作者观点与人物观点交杂的段落 · 评论文的站位', title:'两头挡：作者先撇清一个极端（This isn’t to be alarmist），再对另一个极端让步（Optimists point out … Likewise …），最后用 But 落在中点（But in the medium term … need help）——正确项站中点（问题是真的、要去应对），干扰项把他推回某一头',
 trig:['段首 This isn’t to be alarmist／That is not to say／None of this means／Don’t dismiss … entirely','紧接着 Optimists／Critics／Some point out that … 再加一个 Likewise 或历史例子','段末或文末 But in the medium term／But … will be indispensable／X would be nuts. But …'],
 flow:'① 给段内每句标说话人：作者（撇清、落点）· 人物（被让步的一派）；<br>'
     +'② 标方向：撇清的是哪个极端（悲观：吓人）、让步的是哪个极端（乐观：终会变好）；<br>'
     +'③ 找 But 后的落点：<b>问题真实存在 ＋ 需要应对</b>；<br>'
     +'④ 拿末段验：评论文常在末段再挡一次（⑦❷ 砸机器是疯了 ⟷ ⑦❸ 政策不可或缺），落点应当相同；<br>'
     +'⑤ 选项分诊：跌到乐观极端（没根据／能避免）· 跌到悲观极端（令人惊恐）· 把让步否定过头（几乎找不到依据）· 站在中点（✔）。',
 tmpl:'<table class="tk"><tr><th>2018·T1·22</th><th>站在哪</th><th>判</th></tr>'
     +'<tr><td>C Issues … need to be tackled</td><td>中点：真 ＋ 要应对</td><td>✔</td></tr>'
     +'<tr><td>A Worries … groundless · D … can be avoided</td><td>乐观极端</td><td>✘</td></tr>'
     +'<tr><td>B Optimists’ opinions … find little support</td><td>让步被否定过头</td><td>✘</td></tr></table>'
     +'<p class="note">③❶ This isn’t to be alarmist ＝「我这么说不是为了吓人」：一句话同时肯定了② 的问题（否掉 22A），又撇清了悲观（否掉 25C alarming）。</p>',
 traps:['<b>分歧在时段，不在对错</b>：乐观派说 eventually（最终），作者管 in the medium term（中期）——两句可以同时为真；把它读成「观点对立」就会选 25A opposing views 或 22B find little support。',
        '<b>让步给出去的，不许再收回</b>：point out 是认同型转述（<a href="#R130">R130</a>），Likewise 连转述动词都没挂——作者承认乐观派有据，选项说「几乎找不到依据」就是否定过头（<a href="#R12">R12</a> 强度尺）。',
        '<b>need help adjusting ≠ can be avoided</b>：「帮着适应」的前提是冲击已经来了——22D 把应对读成了避免，跌回乐观极端。',
        '<b>与 <a href="#R227">R227</a>（法与德两本账）分工</b>：R227 是两个对象各一个态度（对行为嫌、对裁决挺）；本卡是<b>同一个对象上的两个极端</b>，作者站中间——前者要分对象，后者要找中点。'],
 refs:[{p:'2018_T1_机器人与中产阶级.html',q:'q22',label:'2018·T1·22（两头挡取中点 ⟹ C）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'col2',label:'2018·T1 · 02++ 专栏（③ 五句 ＋ ⑦ 两句说话人与方向表）'}]},

{id:'R236', tier:'🔴', qt:'文章结构题（In this text, the author presents a problem with ___ · the author mainly discusses）· 「问题—方案」型社论', title:'问题已给、答案数篇幅：题干把「问题」交出来了，空里要的是问题以外那一大块——四个「问题 ＋ 某某」的选项在原文里都有影子，判据不是有没有、是占多少；序列标记（The first step · underlines the need for · Finally）是免费的结构图',
 trig:['题干 In this text, the author presents a problem with ___／introduces X by …／mainly discusses','四个选项都以 it／its 开头（回指题干的 problem）：opposing views on it · solutions to it · its impacts · its variations','正文中后段出现 The first step／Second／underlines the need for／Finally'],
 flow:'① 题干已给的那一半（a problem）<b>不再是答案</b>；<br>'
     +'② 逐段标功能 ＋ 数词数：问题段、表态段、方案段、收口段；<br>'
     +'③ 找序列标记串起方案段（2018·T1：④ The first step · ⑤ underlines the need for · ⑥ Finally · ⑦ policies … indispensable）；<br>'
     +'④ 给每个选项量「罩住多少」：方案 272 词 60.7% ≫ 对立观点 60 词（③❷–❹）· 影响 68 词（只在②）· 变化 0 句；<br>'
     +'⑤ 同根词反撞与概括名词再验一遍：alarming 撞 isn’t to be alarmist（<a href="#R72">R72</a>）；variations 要有东西可抓（<a href="#R83">R83</a>）。',
 tmpl:'<table class="tk"><tr><th>年份·题</th><th>问法</th><th>正确项</th></tr>'
     +'<tr><td>2014·T2·30</td><td>mainly discusses</td><td>a problem … and solutions to it</td></tr>'
     +'<tr><td>2017·T1·25</td><td>best title</td><td>问题线（装不下两头）</td></tr>'
     +'<tr><td>2018·T1·25</td><td>presents a problem with</td><td>possible solutions to it</td></tr></table>'
     +'<p class="note">同一个「问题 ＋ 方案」骨架，三年三种问法：2014 把两半都放进选项，2017 让标题装不下两头（<a href="#R218">R218</a>），2018 把问题挪进题干、只选另一半。</p>',
 traps:['<b>黄皮书说本题「往年未出现过全篇论证结构题」——只对问法成立</b>：2014·T2·30C a problem in America’s legal profession and solutions to it 是同一个答案骨架（<a href="#R167">R167</a>）。',
        '<b>「有影子」不等于「是结构」</b>：② 确实写了影响、③ 确实有乐观派——但各占一段甚至半段；结构题取的是篇幅最大、贯穿到末段的那一块。',
        '<b>末段是方案还是影响，决定答案</b>：本篇⑦❸ 重申「政策不可或缺」，方案线走到最后一句；若末段是在渲染后果，才轮到 impacts 类选项。'],
 refs:[{p:'2018_T1_机器人与中产阶级.html',q:'q25',label:'2018·T1·25（问题已给、方案 60.7% ⟹ B）'},
       {p:'2018_T1_机器人与中产阶级.html',q:'col3',label:'2018·T1 · 02+++ 专栏（逐段篇幅表 ＋ 2014／2017／2018 三年对照）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'q30',label:'2019·T2·30（六段五段答「为什么」：判据是占多少）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q40',label:'2019·T4·40（量篇幅：⑦ 15% vs ①–④ ＋ ⑤–⑦ 罩住全文）'}]},

{id:'R237', tier:'🔴', qt:'事实细节题（According to the X survey／The X study found that …）· 一篇文章里摆了三份以上调查、研究、数据来源', title:'调查拼盘先贴标签：每份调查一个功能（引子／背景／论据／延伸）；题干点名哪份，就只在那一份的 found／concluded 边界内找——干扰项专从「隔壁」取词（边界外的作者概括、别的调查的原词）；标题只取论点，不取任何一份调查',
 trig:['一篇里反复出现 A survey … found／according to／a study by／the survey concluded','题干直接点名机构（the Knight Foundation survey／The Barna survey）','选项里的词在同段能找到，却不在那份调查的句子里'],
 flow:'① 读到每个 survey／study／according to，在卷边写两字标签：<b>引子</b>（开篇现象）· <b>背景</b>（说明问题多严重）· <b>论据</b>（支撑作者论点）· <b>延伸</b>（another effect／also 一类旁支）；<br>'
     +'② 题干点名调查 ⟹ 圈这份调查的<b>边界</b>：从它的发现动词（finds／found／concluded）开始，到下一份调查或作者自己的话（In other words／So／This means）为止；<br>'
     +'③ 只在边界内找答案；边界外的同段句子（作者的概括、描述）是干扰项原料；<br>'
     +'④ 别的调查的原词出现在选项里 ⟹ 张冠李戴，直接划掉；<br>'
     +'⑤ 标题题不取任何一份调查的机构名或具体发现，取作者自己的论点句 ＋ 收口句。',
 tmpl:'<table class="tk"><tr><th>2018·T2 六份调查</th><th>标签</th><th>题</th></tr>'
     +'<tr><td>哈佛 ①❶ finds</td><td>引子</td><td>26D 原料</td></tr>'
     +'<tr><td>牛津 ②❹ · BuzzFeed ②❺</td><td>背景</td><td>26C 借词 · 26D</td></tr>'
     +'<tr><td>奈特 ③❷ found → ③❹ concluded</td><td>论据一（技能）</td><td><b>28B</b></td></tr>'
     +'<tr><td>威斯康星 ④❷</td><td>延伸</td><td>无题</td></tr>'
     +'<tr><td>巴纳 ⑤❸ found → ⑤❻ says</td><td>论据二（转发）</td><td><b>29A</b></td></tr></table>'
     +'<p class="note">干扰项全从边界外取词：28A 的 cyberspace（③❶ 作者概括）· 29B 的 bias（③❸ 奈特那份）· 29C 的 values（⑤❶ 作者描述）。</p>',
 traps:['<b>「定位到段」不够，要「定位到调查」</b>：③❶ 与奈特调查同段，却是作者的话——28A 从这里取词。',
        '<b>背景不是论据</b>：牛津、BuzzFeed 的数据说「问题多严重」，支撑的是 Such a trend is badly needed；把它们当论据，就会以为全文在讲「假新闻泛滥」，标题题被带偏。',
        '<b>分工</b>：<a href="#R67">R67</a> 管一份研究内部的「方法句 vs 结论句」，<a href="#R89">R89</a> 管「个例 ＋ 一串同类」取公因式，本卡管<b>多份调查之间的边界</b>；比较句里的主次见 <a href="#R238">R238</a>。'],
 refs:[{p:'2018_T2_社交媒体时代的新闻素养.html',q:'col1',label:'2018·T2 · 02+ 专栏（六份调查标签表 ＋ 边界判据）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q28',label:'2018·T2·28（奈特调查边界内取 B；A 取自边界外）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q29',label:'2018·T2·29B（奈特的 bias 安到巴纳头上）'}]},

{id:'R238', tier:'🔴', qt:'因果细节题（a main cause／the top reason／the most important factor）· 原文有 X, more so than Y／rather than／not so much A as B', title:'X, more so than Y 只认胜者：Y 是陪跑，原词照搬进选项专等没读懂比较句的人；X 带引号时下一句就是它的内容——正确项＝标签的主语 ＋ 内容的名词（合法合并，不是拼接）',
 trig:['原文 the top reason … is X, more so than Y','原文 X rather than Y／not so much Y as X／less Y than X','X 是一个带引号的标签（“reader error”），紧跟一句 About a third say … / That is, …'],
 flow:'① 圈比较结构，标出胜者 X 与陪跑 Y（more so than／rather than 前面的是胜者；not so much A as B、less A than B 是 B 胜）；<br>'
     +'② 题干问 main／top／most ⟹ 只在 X 那一边找；<br>'
     +'③ X 若是笼统的标签（带引号、是个类名），往下读一句找它的<b>内容</b>；<br>'
     +'④ 正确项常把标签的主语（readers’）与内容的中心词（misinterpretation）合在一起——这是合法合并；<br>'
     +'⑤ 选项里出现 Y 的原词 ⟹ 陪跑项，划掉。',
 tmpl:'<table class="tk"><tr><th>2018·T2·29</th><th>地位</th><th>选项</th></tr>'
     +'<tr><td>⑤❸ “reader error” ＋ ⑤❹ misinterpretation</td><td>胜者（31%）</td><td><b>A</b> readers’ misinterpretation ✔</td></tr>'
     +'<tr><td>⑤❸ made-up stories</td><td>陪跑</td><td>D ✘</td></tr>'
     +'<tr><td>③❸ bias ＋ ⑤❸ reporting</td><td>不在候选里</td><td>B ✘ 拼接</td></tr></table>'
     +'<p class="note">巴纳原报告：「社交媒体上对真实新闻的误读或夸大」31%，单项最高，总结语即 reader error——❸ 的标签与 ❹ 的内容是同一个数字。</p>',
 traps:['<b>陪跑项最危险：它真的在原文里</b>——29D 的 made-up stories 一字不差；搜到了不等于选它，看它站在比较词的哪一边（<a href="#R1">R1</a>）。',
        '<b>题干用 a main cause 不是 the</b>：胜者只有三成出头，命题人措辞留了余地；别去找「唯一原因」。',
        '<b>rather than just 是例外</b>：多一个 just／simply，Y 仍然保留，只是不够（<a href="#R223">R223</a>）；more so than 没有这个例外。',
        '<b>与 <a href="#R67">R67</a> 同源</b>：R67 是「方法句列候选、结论句给胜出」，本卡是「同一句里用比较结构给胜出」——干扰项都来自落选者。'],
 refs:[{p:'2018_T2_社交媒体时代的新闻素养.html',q:'q29',label:'2018·T2·29（reader error, more so than made-up stories ⟹ A；D 陪跑）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'col2',label:'2018·T2 · 02++ 专栏（候选原因表 ＋ 同族比较结构）'}]},

{id:'R239', tier:'🔴', qt:'词义题 ＋ 最佳标题题（同一篇里两题都有）· 首段只有现象，第二段出现 Yet／But ＋ may be starting to／is beginning to 的趋势句', title:'趋势句＝论点句：转折 ＋ 推测 ＋ 起始 ＋ 变化动词（Yet … may be starting to beef up）提出全文的趋势，下一段 are indeed becoming … 证实它；词义题若考这个动词，它的答案就是标题的动词（beef up ⟹ sharpen ⟹ A Rise in … Skills）——两题互相验算',
 trig:['第二段句首 Yet／But，句中 may be starting to／appear to be／is beginning to','紧跟一句短评 Such a trend is badly needed／This is welcome','下一段首句 are indeed becoming／have indeed begun','同篇既有 The phrase X is closest in meaning to，又有 best title'],
 flow:'① 首段若只有现象（数据、事例）没有判断，往第二段找 Yet／But 句——那是论点；<br>'
     +'② 认出趋势句四件套：转折词 · 推测情态 · 起始／进行 · 变化动词；<br>'
     +'③ 往下找「证实句」（indeed、in fact、sure enough）——它就是趋势动词的白话版；<br>'
     +'④ 词义题考这个动词 ⟹ 按白话版选；<br>'
     +'⑤ 标题题找「这个动词的名词化 ＋ 对象」的选项（Rise／Growth／Shift／Decline in …），再用全文两条论据线验覆盖。',
 tmpl:'<table class="tk"><tr><th>2018·T2</th><th>动作</th><th>题</th></tr>'
     +'<tr><td>②❷ Yet … may be starting to <b>beef up</b> … skills</td><td>提出趋势</td><td><b>27C</b> sharpen</td></tr>'
     +'<tr><td>③❶ are <b>indeed</b> becoming more <b>skillful</b></td><td>证实（白话版）</td><td>27 · 30</td></tr>'
     +'<tr><td>⑥❶ thinking skills—and … when to share</td><td>收束两条线</td><td><b>30B</b> A Rise in Critical Skills for Sharing News Online</td></tr></table>'
     +'<p class="note">命题人删掉原刊首段的论点句、把 adept 改成 skillful——趋势只剩一处提出、并有同根回声；30B 就是原刊标题（<a href="#R186">R186</a>）。</p>',
 traps:['<b>Such a trend 回指的是「加强素养」</b>：30A 把 trend 嫁接到 over-tweeting 上（<a href="#R34">R34</a>）——凡选项里出现原文的 trend／move／shift，先查它在原文回指什么。',
        '<b>引子不是论点</b>：首段的现象（年轻人不赞成总统发推）在末段被重新解释；停在现象上的标题（30A）偏离重心（<a href="#R16">R16</a>）。',
        '<b>critical 一篇三义</b>：关键的（②❹）· 批评的（⑥❶）· 审辨的（30B）——标题里的 critical 不是「批评」。',
        '<b>分工</b>：<a href="#R120">R120</a> 管「下一句是白话版」，本卡管<b>白话版同时是论点的证实、因而把词义题与标题题连在一起</b>。'],
 refs:[{p:'2018_T2_社交媒体时代的新闻素养.html',q:'col3',label:'2018·T2 · 02+++ 专栏（趋势句五步表 ＋ 命题人三刀 ＋ critical 三义）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q27',label:'2018·T2·27（beef up ⟹ sharpen）'},
       {p:'2018_T2_社交媒体时代的新闻素养.html',q:'q30',label:'2018·T2·30（A Rise in Critical Skills ＝ 原刊标题）'}]},

{id:'R240', tier:'🔴', qt:'作者观点题（The author argues in Paragraph X that …）· 事实细节题（the real worry／problem／issue）· 评一份裁决、报告、政策的社论', title:'换尺子：作者认可裁定，却嫌它用错了尺子——旧尺子（裁定者、现行法律用的标准）与新尺子（作者换上的标准）各成一串词；题干问裁定就用旧尺，问作者就用新尺；作者观点题的干扰项专拿被换掉的那把尺造，最狡猾的一种把「尺子用错」偷换成「尺子没用好」',
 trig:['原文出现 But X is not the only angle／not even the most important','But this distinction misses the point／That misses the way …','The use of X to … feels maladapted／does not address the real worry','作者前面肯定了裁定（damning verdict、a welcome start），后面又说它不够'],
 flow:'① 读到 not the only angle／misses the point／maladapted／does not address，在卷边画一条竖线：左边写旧尺子（裁定者看重什么），右边写新尺子（作者看重什么）；<br>'
     +'② 两把尺子各自成串：同一把尺子的词会反复出现（本篇旧尺：privacy · controlled · identifiable · privacy law；新尺：processing · aggregation · who should benefit · monopoly）；<br>'
     +'③ 看题干问谁：问裁定本身（事实层）⟹ 答案在旧尺子上；问 The author argues／the real worry ⟹ 答案在新尺子上；<br>'
     +'④ 作者观点题里，旧尺子上的选项一律划掉——哪怕它「看起来合理」；<br>'
     +'⑤ 特别提防「执行不力」类选项：作者说的是工具用错（maladapted），选项说的是工具没用好（ineffective enforcement）——这是把旧尺子重新扶正。',
 tmpl:'<table class="tk"><tr><th>2018·T3</th><th>旧尺子（隐私法）</th><th>新尺子（作者）</th></tr>'
     +'<tr><td>②</td><td>❻ controlled vs merely processed</td><td>❼ processing and aggregation → <b>33B</b></td></tr>'
     +'<tr><td>③</td><td>❷ damage to an individual</td><td>❶ who should benefit · ❹ value from comparison</td></tr>'
     +'<tr><td>④</td><td>❶ privacy law → <b>34D</b> ✘</td><td>❹ a private monopoly → <b>34A</b></td></tr></table>'
     +'<p class="note">长在旧尺子上的干扰项：33A 隐私不惜一切代价（撞 ②❺）· 33D 泄露比出售更糟（德纳姆的轻重）· 34D 隐私法执行不力（maladapted 被换成 ineffective）。31 问协议本身，答案 C 恰在旧尺子上——先看题干问谁。</p>',
 traps:['<b>旧尺子不是错的</b>：作者承认 There are lessons about informed patient consent to learn，也说报告是 a welcome start——所以旧尺子上的选项「看起来合理」，只是不是作者这一题要的。',
        '<b>merely 与 mere 是两把尺子的秤砣</b>：谁用 merely／mere，谁就在压低后面那个词——德纳姆压「处理」，作者压「占有」。',
        '<b>分工</b>：<a href="#R190">R190</a> 管「判决结果 ≠ 作者判断」，<a href="#R227">R227</a> 管「嫌行为 ≠ 嫌裁决」，本卡管「作者认可裁定，却换掉了裁定的尺子」；降级句与取舍句的读法见 <a href="#R241">R241</a>。'],
 refs:[{p:'2018_T3_患者数据与科技垄断.html',q:'col1',label:'2018·T3 · 02+ 专栏（两把尺子逐段对照表 ＋ 三步用法）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q33',label:'2018·T3·33（作者的尺子 processing ⟹ B；A、D 长在旧尺子上）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q34',label:'2018·T3·34D（maladapted ≠ ineffective enforcement）'}]},

{id:'R241', tier:'🔴', qt:'事实细节题（the real worry／what matters／the key problem）· 作者态度题（原文有 It is not enough to say that …）', title:'不够—关键：It is not enough to say that X. What matters is that Y.——X 作者不否认、只嫌不够，Y 才是答案；被贬的 X 不能当答案，却能反证「全盘否定」的选项；题干常给被贬那一半的原词，答案往下一句找',
 trig:['原文 It is not enough to say that …／It is not enough to …','紧接 What matters is that …／What counts is …／The point is …','同篇还有降级句：not the only … not even the most …；强调句 It is X, not Y, that …；否定句 does not address the real …'],
 flow:'① 圈出「贬」与「抬」：It is not enough to say X（贬 X）→ What matters is Y（抬 Y）；<br>'
     +'② 题干若用了被贬那一半的原词（the real worry 在 does not address the real worry 里），不要停，往下一句找抬起来的 Y；<br>'
     +'③ 细节题、观点题：选 Y 的同义改写；<br>'
     +'④ 态度题：用 X 排除「全盘否定」（作者承认 X）、用 Y 排除「全盘赞赏」（作者担心 Y）；<br>'
     +'⑤ 同篇把四种「贬一个、抬一个」都标出来——本篇四处都挂着题。',
 tmpl:'<table class="tk"><tr><th>2018·T3 原文</th><th>贬的 → 抬的</th><th>题</th></tr>'
     +'<tr><td>②❺ not the only … not even the most</td><td>隐私 → （下文揭晓）</td><td>33A 撞它</td></tr>'
     +'<tr><td>②❼ it is X, not Y, that</td><td>占有 → 处理与聚合</td><td><b>33B</b></td></tr>'
     +'<tr><td>④❸ not enough to say ④❹ What matters</td><td>能救命 → 归私人垄断</td><td><b>34A</b> · 35</td></tr></table>'
     +'<p class="note">④❷ does not address the real worry 是第四处：它给出 34 的题干原词，答案在两句之后的 What matters is that。</p>',
 traps:['<b>「不够」≠「不对」</b>：④❸ 没说算法救不了命——所以 35D contemptuous 被它挡住；但也不能说作者在「指出」好处（黄皮书技巧栏「几度指出」夸了）。',
        '<b>What matters is that 是伪强调句</b>：与 It is X that … 同一个功能，都是作者的荧光笔（<a href="#R180">R180</a>）。',
        '<b>分工</b>：<a href="#R180">R180</a> 管 It is X, not Y, that … 这一种句型，<a href="#R235">R235</a> 管「两头挡」，本卡管「不够—关键」——被贬的一半作者是认的；换尺子的整体框架见 <a href="#R240">R240</a>。'],
 refs:[{p:'2018_T3_患者数据与科技垄断.html',q:'q34',label:'2018·T3·34（It is not enough to say … What matters is that … ⟹ A）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'col2',label:'2018·T3 · 02++ 专栏（四处「贬一个、抬一个」对照表）'},
       {p:'2018_T3_患者数据与科技垄断.html',q:'q35',label:'2018·T3·35D（被贬的「能救命」反证「蔑视」）'}]},

{id:'R242', tier:'🔴', qt:'因果细节题（caused by／due to／result from／can be addressed by）· 「问题—原因—对策」型社论里连出两三道因果题', title:'果—因配对：一篇文章里有几个「果」，每个果只认它自己的因——先在卷边竖着写一排「果 ← 因」，再让每道题认领一行；干扰项是站错格子的真话：果当因、别的果的因、用途当手段、前一步冒充后一步',
 trig:['同一篇里连着两三道因果题（caused partly by · fails to … due to · can be addressed by）','原文有多个因果标记：There are many reasons · Fundamentally · This is why · leaving · thus','题干限定了段落（According to Paragraph 2），而别的段落里也有一串「原因」'],
 flow:'① 读到第二个「果」（亏损、失败、抱怨、下降……），在卷边竖着写：果 ← 因；<br>'
     +'② 每个果只配它自己的因：看标记——Fundamentally／many reasons 管根因，This is why 回指上一句，thus／leaving 往下走一格；<br>'
     +'③ 做题先认题干是哪一行（题干的果 ＝ 哪一行的左边），只在那一行的右边找；<br>'
     +'④ 选项若是原文真话，再问一句：它在哪一格？——果本身、别的果的因、钱的用途、并列的另一个手段，统统出局。',
 tmpl:'<table class="tk"><tr><th>2018·T4 的果</th><th>它自己的因</th><th>站错格子的选项</th></tr>'
     +'<tr><td>财务困境（36）</td><td>①❺ 技术变革 ＋ <b>监管结构</b> → <b>36B</b></td><td>36A 收支不平（果本身）</td></tr>'
     +'<tr><td>现代化做不成（37）</td><td>②❶ <b>利益集团施压</b> → <b>37A</b></td><td>37C 需求萎缩（① 的因）</td></tr>'
     +'<tr><td>长期的抱怨（38）</td><td>③❹ <b>转进 Medicare</b> → <b>38A</b></td><td>38B 买新车（用途）· 38C 涨价（前一步）</td></tr></table>'
     +'<p class="note">四个「错环」干扰项在原文里都找得到、意思也没被改——用「原文有没有」查不出来，只能用「它在哪一格」查。</p>',
 traps:['<b>链是连着的，格子要分开</b>：监管结构（①❺）与利益集团（②❶）是同一件事的两面，现代化做不成又加重了财务困境——正因为三行连着，命题人才能让一行的因跑到另一行的题下面。',
        '<b>题干的 partly 是提示</b>：caused partly by ＝ 只要根因里的一个；根因有两个时，另一个多半被改写成干扰项（2018·T4·36C 把「技术变革压低需求」改成「技术升级的花费」）。',
        '<b>分工</b>：<a href="#R5">R5</a> 管沿一条链走到头，<a href="#R99">R99</a> 管链的起点被换了人，<a href="#R167">R167</a> 管把「问题—原因—对策」画成表；本卡管<b>一篇里有几条链、每个果各配各的因</b>；并列手段只挑其一见 <a href="#R243">R243</a>。'],
 refs:[{p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q36',label:'2018·T4·36（两个根因取一：rigid management ＝ 监管结构那一端）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q37',label:'2018·T4·37C（需求萎缩是财务困境的因，不是现代化失败的因）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q38',label:'2018·T4·38B（买新车是省下的钱的用途，不是回应抱怨的手段）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'col1',label:'2018·T4 · 02+ 专栏（三行果—因表 ＋ 四种站错格子）'}]},

{id:'R243', tier:'🔴', qt:'事实细节／因果题（can be addressed by／is achieved by）· 原文有 the former／the latter／the first／the second', title:'the latter 单挑：前一句并列两样（from A and from B），后一句用 The latter／The former 只挑一样、再用 thus 挂上效果——题干问那个效果，只认被挑中的那一样；另一样是原文真话，被原样改写成干扰项',
 trig:['原文一句里有 from A and from B／both A and B／A as well as B','紧跟一句以 The latter／The former／The first／The second 开头','题干原词在 thus／thereby／which means 之后的那半句'],
 flow:'① 题干原词回搜，看它前面挂着 thus／thereby——效果在后，手段在前；<br>'
     +'② 手段的主语是 The latter／The former ⟹ 马上回上一句，给并列的两样编号 A、B；<br>'
     +'③ latter ＝ B、former ＝ A——把被挑中的那一样和效果连起来读；<br>'
     +'④ 选项里有另一样的改写 ⟹ 直接划掉：它是真话，只是没被挑中。',
 tmpl:'<table class="tk"><tr><th>2018·T4 ③❸ 并列</th><th>③❹ 单挑</th><th>38 题</th></tr>'
     +'<tr><td>A：a penny-per-letter permanent rate increase</td><td>—</td><td>38C rate-increase mechanism ✘</td></tr>'
     +'<tr><td>B：shifting postal retirees into Medicare</td><td><b>The latter step</b> would largely offset … retiree health care, <b>thus addressing</b> a long-standing complaint</td><td><b>38A</b> ✔</td></tr></table>'
     +'<p class="note">38C 是四个干扰项里唯一挑不出事实错的——涨价是真的、是永久的、是法案内容，错只错在它是「前一步」。</p>',
 traps:['<b>被挑剩的那一样最危险</b>：它与正确项同出一句、同样是真话，常常改写得比正确项还像（38C 用了原文的 rate 与 increase）。',
        '<b>the latter 也会出现在选项里</b>：2018·T3·31A It fell short of the latter’s expectations——那次是命题人用 the latter 指题干里的 DeepMind，原文的 their 却回指患者（<a href="#R21">R21</a>）；同一张卷子 latter 两次都是陷阱。',
        '<b>刻度后看</b>：38A 把 largely offset 说成 removing，程度略拔高；先判格子（只有它在「后一步」），再判刻度（<a href="#R176">R176</a>）。「果—因配对」的整体框架见 <a href="#R242">R242</a>。'],
 refs:[{p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q38',label:'2018·T4·38（The latter step … thus addressing ⟹ A；C 是前一步）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'col2',label:'2018·T4 · 02++ 专栏（并列两钱源 ＋ 单挑后者）'}]},

{id:'R244', tier:'🔴', qt:'作者观点／态度题（the author seems to view X with／the author’s attitude toward X）· 社论末段评人', title:'同框两个 sign：X is a sign that A. It is not, however, a sign that B.——同一个评价框用两次，第一次给一个不体面的动机，第二次否掉作者期待的那个动机；态度 ＝ 不满（中档否定）；干扰项专从 B 里取词吞掉 not，或从作者夸的别的东西里取词',
 trig:['原文 is a sign that … It is not, however, a sign that …／shows that … but does not show that …','同段还有 amounts to A, not B／a major omission／Also missing is','题干 view X with／attitude toward X，选项里有 gratitude／respect 这类对人的感情褒义词'],
 flow:'① 先把题干的对象写在卷边（view legislators with ⟹ 立法者）；<br>'
     +'② 找直接评这个对象的句子，圈出两个 sign：A（给的）、B（否的）；<br>'
     +'③ 判档三问：A 是坏事吗（多半只是动机不体面）· B 是作者要的吗（是）· 用词重不重（平实）⟹ 不满／批评，不到蔑视、挖苦；<br>'
     +'④ 扫干扰项：从 B 里取词的（getting serious ⟹ gratitude）先查 not；从别处夸奖里取词的（common-sense ⟹ respect）先查夸的是谁。',
 tmpl:'<table class="tk"><tr><th>2018·T4 末段</th><th>给了（A）／否了（B）</th><th>39 题</th></tr>'
     +'<tr><td>④❻ is a sign that</td><td>A：legislators are getting frightened about a politically embarrassing … collapse</td><td><b>39C discontent</b></td></tr>'
     +'<tr><td>④❼ It is not, however, a sign that</td><td>B：they’re getting serious about transforming …</td><td>39D gratitude（吞 not）</td></tr>'
     +'<tr><td>④❹ common-sense … wide public support</td><td>夸的是被漏掉的改革</td><td>39A respect（对象错）</td></tr></table>'
     +'<p class="note">④❶ amounts to the bare, bare minimum …, not comprehensive reform 是同一种「给一个、否一个」，评的是法案——39B tolerance 误把它读成对人的容忍。</p>',
 traps:['<b>not 被插入语隔开</b>：It is not, however, a sign that they’re getting serious——not 与 serious 之间隔着 however 和 a sign that，越远越容易漏（<a href="#R84">R84</a>）。',
        '<b>夸奖的宾语先查</b>：作者越夸一项被立法者漏掉的改革，对立法者越不满（<a href="#R221">R221</a>）。',
        '<b>分工</b>：<a href="#R87">R87</a> 管 are missing the point 型判决句（正解 ＝ 对方主张 × 负号），<a href="#R241">R241</a> 管「不够—关键」，本卡管<b>评人的「这说明了 A，却说明不了 B」</b>；态度题账见 <a href="#R72">R72</a>。'],
 refs:[{p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'q39',label:'2018·T4·39（两个 sign：怕难堪 ＋ 不认真 ⟹ discontent）'},
       {p:'2018_T4_美国邮政需要的不只是创可贴.html',q:'col3',label:'2018·T4 · 02+++ 专栏（判档三问 ＋ 两种盯框子的干扰项）'}]},
{id:'R245', tier:'🔴', qt:'完形 · 首段摆出正反两面（On the one hand … On the other hand／has its pros and cons）的文章里的段首空', title:'两本账的翻账键：首段的 On the one hand／On the other hand 就是全文目录，后面每段只接其中一本；段首空先问「从哪本翻到哪本」——翻回好处且是问句 ⟹ Then；翻到解药且是评注 ⟹ Lucky／Fortunately for us；评注语的正负号 ＝ 上一段落在哪 × 这一段干什么',
 trig:['首段第二、三句是 On the one hand … On the other hand … 或 X has its pros and cons','段首空后面紧跟一个问句（___, why do we … at all?）','段首空是「___ for us」型评注语，四个选项全是形容词（Odd／Funny／Lucky／Ironic）'],
 flow:'① <b>画两栏</b>：左「好处／为什么会」，右「风险／怎么防」；首段两句各记一栏；<br>'
     +'② <b>每段归栏</b>：这一段在回答哪一栏的问题？<br>'
     +'③ <b>段首空＝翻账键</b>：从右栏翻回左栏、句子是问句 ⟹ <b>Then</b>（那么、既然如此）；Therefore 不接问句，Instead 要求上文说过「本该不做」，Again 要求上文问过；<br>'
     +'④ <b>评注语定号</b>：上一段落在风险（−）、这一段给解药 ⟹ 好消息 ⟹ Lucky／Fortunately；上一段落在好事、这一段翻出坏事 ⟹ Unfortunately／Sadly；Odd／Funny／Ironic 是「意外」族，下文不讲「怪」就不选；<br>'
     +'⑤ <b>段内实词空服从所在的栏</b>：风险栏里要负号的名词（price）、防备栏里要保护性作用的动词（protect）。',
 tmpl:'<table class="tk"><tr><th>2018 完形</th><th>在哪本账</th><th>翻账键</th></tr>'
     +'<tr><td>①❷ necessary condition ___ …</td><td>好处</td><td>On the one hand</td></tr>'
     +'<tr><td>①❸ putting your ___ in the wrong place</td><td>风险</td><td>On the other hand</td></tr>'
     +'<tr><td>② ___, why do we trust at all?</td><td>翻回好处</td><td><b>4 Then</b></td></tr>'
     +'<tr><td>③ ___ for us, we also have a sixth sense …</td><td>翻到防备</td><td><b>11 Lucky</b></td></tr></table>'
     +'<p class="note">②段末落在「肯借大钱给陌生人」（风险敞口），③段给出识别不诚信的第六感（解药）⟹ 好消息 ⟹ Lucky；12 题 that may ___ us 取 protect（作用），不取 delight／surprise（感受）。</p>',
 traps:['<b>Instead 最像</b>：中文「有风险，人们反而还信」太顺口，但 Instead 替换的是上文一个被否定的做法——上文没说过「本该不信」；而且 Instead 后面接做法，不接问句。',
        '<b>Therefore ＋ 问句是病句思路</b>：风险推出的结论应是「所以要小心」，不是「所以为什么要信」。',
        '<b>黄皮书说 Odd／Funny for sb 放句首「不常见」</b>——次要理由；真正起作用的是正负号：下文只讲这种能力怎么保护我们，没有一句在讲「怪」。',
        '<b>两本账不一样重</b>：2018 ②段 95 词、③④段 140 词，11–20 十个空全在「防」那一栏。',
        '<b>分工</b>：<a href="#R182">R182</a> 是阅读版的两本账（Even so 翻账、题目归账）；<a href="#R229">R229</a> 管只讲一边的文章（逻辑空考再加一级）——<b>先看首段有没有摆两面，决定用哪张</b>；<a href="#R52">R52</a> 管首句复现切两半。',
        '<b>对照 2019 完形</b>：首段给的不是两本账而是一张清单（a few tricks, one of which …），段首空就成了编号（Another option、Finally）——见 <a href="#R266">R266</a>。读完首段先问：它给了我两面，还是一张单子？'],
 refs:[{p:'2018_完形_为何信任是与生俱来的本能.html',q:'ledger',label:'2018·完形 · 02+ 两本账表'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q4',label:'2018·完形·4（翻回好处 ＋ 问句 ⟹ Then）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q11',label:'2018·完形·11（风险之后的解药 ⟹ Lucky）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q3',label:'2018·完形·3（风险栏的名词取负号 ⟹ price）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q12',label:'2018·完形·12（防备栏的动词取作用 ⟹ protect）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'list',label:'2019·完形 · 02+ 四招清单（段首空是编号，不是翻账键）'}]},
{id:'R246', tier:'🔴', qt:'完形／阅读 · 对照实验的结果段（Half of them … the other half … · the majority … In contrast, only … · than were their counterparts who …）', title:'对照实验平行句四格位：动作同义（found ⟹ discovered）· 结果反号（the majority willing ↔ only five）· 身份反写（not been tricked ⟹ “unreliable”）· 连接取对比（In contrast）——被下一句回指的空，按回指词定档（tricked ⟹ fooled，不是 betrayed）',
 trig:['句中出现 half the subjects／Half of them … the other half …','出现 than were their ___ who …／those who … vs those who …','末段两句一句讲 the majority、一句讲 only N of the …'],
 flow:'① <b>把平行句劈成左右两栏</b>：左实验组、右对照组；<br>'
     +'② <b>动作位</b>（两组都做的事）：取<b>同义</b>——右栏的动词是左栏动词换个说法（found ⟹ discovered）；预设「事先已知」（proved／remembered）或主观断言（insisted）的都不平行；<br>'
     +'③ <b>结果位</b>：取<b>反号</b>——左栏多数愿意，右栏只有少数；<br>'
     +'④ <b>身份位</b>（修饰组别的词）：是对面身份的<b>反写</b>（children who had not been tricked ⟹ the “unreliable” tester）；对照组的通称是 <b>counterparts</b>（身份相同、条件不同）；<br>'
     +'⑤ <b>连接位</b>：主语换组 ＋ 结果反向 ⟹ In contrast／By contrast；不填 As a result（两组不是因果）、For instance（不是例子）、On the whole（精确数字不是概括）；<br>'
     +'⑥ <b>回指定档</b>：空格的意思若在下一句被一个词重新说了一遍（had ___ them ⟸ who had not been tricked），空格要与这个词<b>同义且同档</b>。',
 tmpl:'<table class="tk"><tr><th>格位 · 2018 完形</th><th>答案</th></tr>'
     +'<tr><td>身份 · their ___ who inhaled something else</td><td><b>10 counterparts</b></td></tr>'
     +'<tr><td>动作 · Half found a toy; the other half ___</td><td><b>16 discovered</b></td></tr>'
     +'<tr><td>回指 · had ___ them ⟸ not been tricked</td><td><b>17 fooled</b></td></tr>'
     +'<tr><td>结果 · the majority were ___ to cooperate</td><td><b>18 willing</b></td></tr>'
     +'<tr><td>连接 · ___, only five of the 30</td><td><b>19 In contrast</b></td></tr>'
     +'<tr><td>身份 · paired with the “___” tester</td><td><b>20 unreliable</b></td></tr></table>',
 traps:['<b>档位陷阱</b>：17C betrayed 意思贴着主题 trust（辜负信任），但带道德谴责；下一句只说 tricked ⟹ 轻档 fooled。「骗」字族：fool／trick（轻）· deceive／cheat（中）· betray／wrong（重）。',
        '<b>句尾分词是作者的答案卡</b>：the majority were ___ to cooperate …, demonstrating that they trusted his leadership——空格要能被这句「说明」出来 ⟹ willing，forced／hesitant 当场出局。',
        '<b>对照组身份词的干扰项在评价人本身</b>：20 incapable／inflexible／unsuitable 说测试员能力、性格、适配，不说「信不信得过」。',
        '<b>研究原稿常把两个动作用同一个词</b>：康考迪亚新闻稿写 looked inside、invited to discover——考卷把测试员那次换成 looking into、把孩子那次挖成空（15 inside · 16 discovered）。',
        '<b>分工</b>：<a href="#R106">R106</a> 管实验<b>方法段</b>「两组条件必须相反」；本卡管<b>结果段</b>的四个格位；<a href="#R103">R103</a> 的「主语换没换人」在连接位同样适用。'],
 refs:[{p:'2018_完形_为何信任是与生俱来的本能.html',q:'pairs',label:'2018·完形 · 02++ 对照实验平行句表'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q16',label:'2018·完形·16（动作位同义 ⟹ discovered）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q17',label:'2018·完形·17（回指 tricked 定档 ⟹ fooled）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q20',label:'2018·完形·20（身份位反写 ⟹ unreliable）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q19',label:'2018·完形·19（换组 ＋ 反向 ⟹ In contrast）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q10',label:'2018·完形·10（对照组通称 ⟹ counterparts）'}]},
{id:'R247', tier:'🟡', qt:'完形 · 全文有一个反复出现的主题词（trust／stress／change…），选项里出现它的同义词、形近字或意义贴得很紧的重词', title:'主题词的替身分三种：同义替身是答案（faith＝trust · trusting mood）· 形近替身是陷阱（entrusted 长得像 trust，说的是「托付」）· 义近重词多半档位不对（betrayed）——反义替身（dishonest · fooled · unreliable）只站在「防」那一侧',
 trig:['读完首句能写出一个主题词，且它在正文里换着形态出现（trust／trusting／trusted）','某个选项含主题词的词根（en-trust-ed）','某个选项在意思上紧贴主题（betray＝辜负信任）却语气很重'],
 flow:'① <b>读完首句，把主题词写在卷边</b>；<br>'
     +'② <b>名词空、形容词空先问「是不是它换了身衣服」</b>：put your ___ in the wrong place ⟹ faith；a trusting ___ ⟹ mood；the “___” tester ⟹ unreliable；<br>'
     +'③ <b>看见主题词的形近字，停一秒</b>：问它在这句里说的是不是「谁信谁」——entrust sb with sth／entrust sth to sb 是「交出去托管」，与信任判断无关；<br>'
     +'④ <b>看见意义贴得太紧的重词，核档位</b>：下文回指用了什么词（tricked），就只选同档的。',
 tmpl:'<table class="tk"><tr><th>2018 完形 · 替身</th><th>结论</th></tr>'
     +'<tr><td>同义：2 faith · 9 trusting mood</td><td>✅ 答案</td></tr>'
     +'<tr><td>形近：14D entrusted</td><td>❌ 陷阱（托付 ≠ 信任判断）</td></tr>'
     +'<tr><td>义近档重：17C betrayed</td><td>❌ 陷阱（回指词是 tricked）</td></tr>'
     +'<tr><td>反义：dishonest · 17 fooled · 20 unreliable</td><td>✅ 只在防备那一栏、对照组那一侧</td></tr></table>',
 traps:['<b>四个选项全带否定前缀时剥掉前缀比词根</b>：capable／flexible／reliable／suitable——只有 reliable 与 trust 同义（接 <a href="#R194">R194</a>）。',
        '<b>选项之间互相串味不是线索</b>：2D interest（利息）与 3 题 price、debt、benefit（救济金）凑成「钱」的场子，正文讲的却是信任。',
        '<b>分工</b>：<a href="#R230">R230</a> 的主题词陷阱是<b>意义</b>陷阱（moderate 贴合「减压」但宾语正负不对）；本卡的 entrusted 是<b>字形</b>陷阱；<a href="#R51">R51</a> 管抽象名词空＝上文概念的同义复现。',
        '<b>2019 完形的变体：目标物替身</b>——全文在找「人迹」，替身不是同义词，而是这一类里的具体东西（缺口、人造光、痕迹），见 <a href="#R267">R267</a>。'],
 refs:[{p:'2018_完形_为何信任是与生俱来的本能.html',q:'theme',label:'2018·完形 · 02+++ 主题词替身表'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q2',label:'2018·完形·2（同义替身 ⟹ faith）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q14',label:'2018·完形·14（形近陷阱 entrusted）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'q17',label:'2018·完形·17（义近档重 betrayed）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'trace',label:'2019·完形 · 02++ 人迹替身链'}]}
,
{id:'R248', tier:'🔴', qt:'新题型 · 排序题（建筑史、机构史、公司史：七段里有的在说「它今天是什么／意味着什么」，有的在讲「某年某月发生了什么」）', title:'先分层再排序：段首主干用现在时／现在完成时、时间标记是「跨度／累计」的段属<u>总述层</u>（放首尾），用一般过去时、时间标记是「某年某月」的段属<u>叙事层</u>（放中间、按年份排）——总述层包住叙事层',
 trig:['七段里年份很多，却有两三段一个具体年份都没有','有段落用 has housed／has been the scene of／have participated 这类现在完成时回看全局','某段开口就给今天的定位：X commands a unique position／X is considered one of the best examples'],
 flow:'① <b>逐段看段首句</b>：主干动词的时态 ＋ 时间标记（跨度／累计 还是 某年某月），贴上「总」或「叙」；<br>'
     +'② <b>叙事层按年份排</b>（只允许 <a href="#R250">R250</a> 那种「先总后分」的回跳）；<br>'
     +'③ <b>总述层分首尾</b>：给出现名与地位的在首，第二段总述（原名、意义）紧跟首段；回看累计、点名人物事件的在尾；<br>'
     +'④ <b>两层交界处（总→叙、叙→总）往往没有词面钩子</b>——这是正常的，靠排除和「层」本身来定。',
 tmpl:'<table class="tk"><tr><th>2018 七段</th><th>段首时态 · 时间标记 ⟹ 层</th></tr>'
     +'<tr><td>E（41）</td><td>commands · from 1871 to 1888（跨度）⟹ <b>总（首）</b></td></tr>'
     +'<tr><td>C（给定）</td><td>as it was originally known · has housed／has been ⟹ <b>总（紧跟首段）</b></td></tr>'
     +'<tr><td>G（42）</td><td>began · 1799–1820 · 1814 · 1866 ⟹ 叙</td></tr>'
     +'<tr><td>A（43）</td><td>appointed · 1869 年 12 月 · 1871 年 6 月 ⟹ 叙</td></tr>'
     +'<tr><td>F（给定）</td><td>took 17 years ⟹ 叙</td></tr>'
     +'<tr><td>B（44）</td><td>was the first to be occupied · 1875 · 1879 ⟹ 叙</td></tr>'
     +'<tr><td>D（45）</td><td>have participated · has housed 16／21／24（累计）⟹ <b>总（尾）</b></td></tr></table>'
     +'<p style="margin-top:8px">结果 <b>E C ｜ G A F B ｜ D</b>：外层「今天 → 当年 → 今天」，里层年份。</p>',
 traps:['<b>看段首句，别被段内个别动词带偏</b>：C ① 的 housed 是过去时，说的却是半个世纪的跨度，② 马上变成 has housed；F ③④ 的 is／are 描述今天还在的楼梯与穹顶，段首 took 17 years 才是它的身份。',
        '<b>和 2017 传记的差别</b>：2017 七段里只有首段 D 是总评，其余六段都在时间线上（<a href="#R232">R232</a>）；2018 有三段总述——只排年份，E、C、D 三段就没处放。',
        '<b>层只管分堆，不管接缝</b>：两层交界的 C→G、B→D 是全篇最软的两缝；层内的接缝仍靠动作预设（<a href="#R232">R232</a>）、叫法说明（<a href="#R231">R231</a>）来定。',
        '2018 黄皮书 E 段路标写了「先用一般现在时总体介绍、后以一般过去时介绍其历史」——它只拿来定首段；<b>推到全文七段就是本卡</b>。',
        '2019 同一思路换到议论文：<b>说明文看时态分层，议论文看语气分堆</b>（虚拟／条件 → 假设举例 → need to → 祈使 → can，<a href="#R269">R269</a>）。'],
 refs:[{p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'layers',label:'2018·新题型 · 02+++ 两层表（总述层包住叙事层）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q45',label:'2018·新题型·45（回到总述层）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q42',label:'2018·新题型·42（总述 → 叙事的开关句）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'mood',label:'2019·新题型 · 02+++ 语气阶梯（议论文版的「分层」）'}]},
{id:'R249', tier:'🔴', qt:'新题型 · 排序题／选句填空（上一段的末句与某段首句几乎同义，看上去是天生一对）', title:'尾首复现先问「交棒还是预告」：上段末句若是一件<u>刚发生的事</u>，下段接着讲 ⟹ 交棒，可当接缝；若是一句<u>总评</u>（has been the scene of many historic events），它在预告全文，兑现可以隔好几段——再拿格子容量反证一遍',
 trig:['上一段末句是 has been／is one of／many … 这类概括评价','某段首句几乎把这句话换个说法重说一遍（historic events → historical events）','把这一对放在一起，别的段就没地方去'],
 flow:'① <b>看上段末句</b>：是一件事（imprisoned、demolition、began）还是一句评价（has been the scene of…、is considered…）？<br>'
     +'② <b>事件 ⟹ 交棒</b>：下一段讲它的后果或下一步，紧邻；<br>'
     +'③ <b>评价 ⟹ 预告</b>：兑现段负责展开（点名人物、列数字），位置由别的证据定，常在末段；<br>'
     +'④ <b>容量反证</b>：把这一对放在一起，试排其余各段——有段无处可放（时间倒流、预设落空）⟹ 这一对不是邻居。',
 tmpl:'<table class="tk"><tr><th>上段末 ⟶ 下段首</th><th>类型 ⟹ 结论</th></tr>'
     +'<tr><td>2017：His father was then <b>imprisoned</b> ⟶ his father’s <b>release</b></td><td>事件 ⟹ 交棒，紧邻 ✅</td></tr>'
     +'<tr><td>2018：construction … <b>began</b> ⟶ Construction <b>took 17 years</b></td><td>事件 ⟹ 交棒，紧邻 ✅</td></tr>'
     +'<tr><td>2018：has been the scene of many <b>historic events</b> ⟶ have participated in <b>historical events</b></td><td>评价 ⟹ 预告，答案里隔四段 ❌</td></tr></table>'
     +'<p style="margin-top:8px">2018 若把 D 接到 C 后面（42），G 只能去 45——1799 年的事排到 1879 之后，A 首的 new 也失去上家。</p>',
 traps:['<b>这是 <a href="#R110">R110</a> 的补丁</b>：R110 说「尾接首可以当接缝，跨段复现只加固」——2018 证明<b>尾接首也会骗人</b>。判据从「隔了几段」再往前挪一步：先问上段那句在讲事还是在下判断。',
        '<b>零多余项下代价翻倍</b>：D 拉到 42，G 只能去 45，42、45 一起错，丢 4 分。',
        '<b>黄皮书也注意到这组近义复现</b>，但排除理由写成「前者聚焦 EEOB、后者聚焦国务院、战争部和海军部大楼，不能完全等同」——C 首已说明两者是同一栋楼，这条理由不成立（2018 新题型页 03+ 节第 2 条）。',
        '<b>historic ≠ historical</b>：historic＝有历史意义的，historical＝历史上的；两词挨着出现，也不证明是邻居。',
        '<b>2019 第三种：镜像</b>——F 末 they can help you win ⟶ A 首 These tools can help you win，尾首几乎同句，却是作者的首尾对照（tricks ↔ tools），答案里隔三段；判据是回指名词的类（<a href="#R270">R270</a>）。'],
 refs:[{p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'seams',label:'2018·新题型 · 02++ 红框（尾首复现是预告，不是交棒）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q42',label:'2018·新题型·42（D 是最强对手）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'book',label:'2018·新题型 · 03+ 商榷 2（黄皮书排除 D 的理由不成立）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'seams',label:'2019·新题型 · 02++ 红框（尾首同句是镜像）'}]},
{id:'R250', tier:'🟡', qt:'新题型 · 排序题（按时间排的文章里，排完发现某一缝的年份往回倒）', title:'先总后分允许回跳：上段概述一个过程并写到终点，段里有 wing by wing／one by one／in stages 这类「逐个」词预告分述 ⟹ 下段回到过程中间某一年逐项细说——这一缝的年份倒退不是排错',
 trig:['排完序通读，发现一处年份倒退（整栋竣工之后，下一段是 Completed in 1875）','上段有 wing by wing、one after another、in stages、gradually 之类的「逐个／分阶段」词','下段首句是 the first … ／ Completed in …（分述的第一项）'],
 flow:'① 发现倒退，先看<b>上段是不是概述</b>：写了整个过程的总量或终点；<br>'
     +'② 找<b>许可证</b>：上段有没有预告分述的「逐个」词；<br>'
     +'③ 找<b>兑现</b>：下段讲的是不是这个过程的<b>一部分</b>（一翼、一个阶段、第一批）；<br>'
     +'④ 三样都有 ⟹ 合法回跳；缺任何一样 ⟹ 回去查接缝。',
 tmpl:'<table class="tk"><tr><th>2018 F → B</th><th>证据</th></tr>'
     +'<tr><td>概述</td><td>F ① Construction took 17 years（总量）· ② When the EEOB was finished（终点）</td></tr>'
     +'<tr><td>许可证</td><td>F ① as the building slowly rose <b>wing by wing</b></td></tr>'
     +'<tr><td>兑现</td><td>B ① the State Department’s <b>south wing</b> was <b>the first</b> to be occupied（1875）· ② the <b>east wing</b>（1879）</td></tr></table>'
     +'<p style="margin-top:8px">命题人还替你把回跳藏了一下：原刊 F ② 是 <i>When the EEOB was finished in 1888</i>，<b>考卷删了 in 1888</b>——留着它，1888 → 1875 一眼可见。</p>',
 traps:['<b>只有「总 → 分」的接缝能回跳</b>：别的接缝上出现倒退（把 G 的 1799 排到 B 的 1879 之后）就是排错了——叙事层里年份仍是单调的（<a href="#R248">R248</a>）。',
        '<b>与 <a href="#R232">R232</a>「段中的年份不是接缝证据」互补</b>：R232 说段中插叙的年份别拿来排序；本卡说段首的年份可以比上段段尾更早，只要上段是概述、且预告了分述。',
        '同一结构在议论文里是「先给结论，再分条论证」：上段 There are three reasons…，下段 The first…——<b>排序题里的 the first，永远先找它的「总」</b>。'],
 refs:[{p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'timeline',label:'2018·新题型 · 02+++ 时间轴（唯一一处合法回跳）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'q44',label:'2018·新题型·44（wing by wing ⟹ south wing／east wing）'},
       {p:'2018_新题型_艾森豪威尔行政办公楼.html',q:'orig',label:'2018·新题型 · 03++ 原刊 vs 考卷（删掉的 in 1888）'}]},

{id:'R251', tier:'🔴', qt:'一词概括题（the influence of X can be ___ · X is ___ · 四个选项都是单个形容词）', title:'单词选项先认轴：四个形容词常站在四根不同的轴上（程度 minimal · 路径 indirect · 方向 adverse · 时长 temporary），原文往往只回答了其中一根——先给每个选项写上它回答的问题，再看原文答了哪个；另外三项多半是把别处的修饰语挪到题干名词头上',
 trig:['四个选项都是单个形容词，意思互不相反、也不在同一根尺子上','题干是 the influence／effect／impact of X on Y can be','原文满篇是同一类修饰语（短、快、小），而题干名词本身没被它们修饰'],
 flow:'① <b>给四个选项各写一个问号</b>：多大？（程度）怎么传？（路径）好坏？（方向）多久？（时长）；<br>'
     +'② <b>回原文只找题干名词身上挂着的词</b>：本题是 the influence of transient investment ⟹ hinder（③❷）、at the expense of（④❷）；<br>'
     +'③ <b>原文答了哪根轴就只在那根轴上选</b>：hinder／at the expense of 都在「好坏」轴上 ⟹ adverse；<br>'
     +'④ <b>另外三项查产地</b>：它的修饰语在原文里修饰的是谁？修饰别的名词 ⟹ 挪位，排。',
 tmpl:'<table class="tk"><tr><th>2019·T1·23 选项（轴）</th><th>原文对「影响」</th><th>修饰语本属谁</th></tr>'
     +'<tr><td>A minimal（程度）</td><td>没答</td><td>⑤❶ slightly ——美国药方</td></tr>'
     +'<tr><td>B indirect（路径）</td><td>没答</td><td>④❶ allowed …, and thus … ——数字技术</td></tr>'
     +'<tr><td><b>C adverse（方向）✔</b></td><td>hinder · at the expense of</td><td>—</td></tr>'
     +'<tr><td>D temporary（时长）</td><td>没答</td><td>transient · seven months · quarterly ——投资者</td></tr></table>'
     +'<p class="note">transient（短暂的）与 temporary（暂时的）字面近义，可同义替换要求换的是<b>同一个名词</b>的修饰语：原文说投资是短的，伤的却是 long-term research——投资短、伤害长。</p>',
 traps:['<b>最危险的是「字面近义」的挪位</b>：transient investors → temporary influence 看着像教科书式的同义替换，其实换了中心词（接 <a href="#R34">R34</a>：定语＋中心词整体回搜）。',
        '<b>原文沉默时，常理只能用来否定</b>：妨碍长期研究的影响按常理只会深远——它和原文 hinder 同向，正好双保险；若常理与原文相反，让原文说了算（<a href="#R8">R8</a>）。',
        '<b>分工</b>：<a href="#R12">R12</a> 管同一根轴上「先方向后强度」；<a href="#R128">R128</a> 管「副词＋分词」同构时只比副词；本卡管<b>四个选项四根轴、原文只答一根</b>。'],
 refs:[{p:'2019_T1_耐心是一种企业美德.html',q:'q23',label:'2019·T1·23（四轴只答了方向：hinder ⟹ adverse；短／小／间接三处挪位）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'col1',label:'2019·T1 · 02+ 专栏（四轴表 ＋ 修饰语产地）'}]},

{id:'R252', tier:'🔴', qt:'例证目的题（The X and Y examples are used to illustrate／show）· 两个例子分在两段', title:'伞句夹在两个例子中间：例一在前一段、例二在后一段，两例共用的论点句夹在它们之间——Much more could be done to X, such as … 里的 more 预设「已经做了一些」，回头把前一段的例子收编；再把选项拆成「功能名词 × 话题」两格，话题对的常有两项，功能名词只有一个对',
 trig:['题干点了两个以上的例子（The US and France examples），它们在原文里跨段','两例之间有一句没有国名、没有数据的话（could be done／should／more … such as）','四个选项同构：the ＋ 功能名词（approaches／obstacles／significance／prevalence）＋ of／to ＋ 话题'],
 flow:'① <b>先排位置</b>：例一在哪一句、例二在哪一句，两者之间有没有一句「不属于任何一个例子」的话——有，它就是伞；<br>'
     +'② <b>看伞句的预设小词管多远</b>：such as 只往下管；more／also／another／further 还往上管（要求前面已有同类）；<br>'
     +'③ <b>拆选项两格</b>：话题格（reduce 坏事 ＝ encourage 好事，两个方向说的是同一件事）· 功能格（例子在做什么：方法？障碍？意义？现状？）；<br>'
     +'④ <b>用例子自带的评语验功能格</b>：helping reduce ⟹ 方法；效果小（slightly）不等于有障碍。',
 tmpl:'<table class="tk"><tr><th>2019·T1·24</th><th>原文</th><th>角色</th></tr>'
     +'<tr><td>⑤❶</td><td>In the US, … slightly helping reduce “short-termism.”</td><td>例一（被 more 收编）</td></tr>'
     +'<tr><td><b>⑥❶</b></td><td><b>Much more could be done to encourage “long-termism,”</b> such as …</td><td><b>伞</b></td></tr>'
     +'<tr><td>⑥❷</td><td>In France, shareholders who hold onto … earn more voting rights</td><td>例二（such as 带出）</td></tr></table>'
     +'<p class="note">选项：A approaches ✔ × promoting long-termism ✔ · D obstacles ✘ × preventing short-termism ✔ · C significance ✘ × long-term thinking ✔ · B prevalence ✘ × short-term thinking ✘（④❷ 病那半篇）。原刊导语 Other steps can help reduce ‘short-termism’ in corporations 就是 24A。</p>',
 traps:['<b>D 最像</b>：preventing short-termism 与原文 reduce short-termism 几乎逐词对应，只在前面多了 obstacles——效果小是「有限」，不是「受阻」（<a href="#R217">R217</a>：原文说的是状态，选项加了一个原因）。',
        '<b>话题两个方向是一件事</b>：reduce／prevent 接坏事，encourage／promote 接好事（<a href="#R230">R230</a>）——别因为一个说 long、一个说 short 就以为对立。',
        '<b>分工</b>：<a href="#R3">R3</a>／<a href="#R41">R41</a> 管「答案在例子服务的论点里」；<a href="#R160">R160</a> 管预设小词；<a href="#R89">R89</a> 管个例＋同类取公因式；本卡管<b>两例跨段、论点夹在中间，靠 more 回头认领</b>。'],
 refs:[{p:'2019_T1_耐心是一种企业美德.html',q:'q24',label:'2019·T1·24（⑥❶ Much more could be done 夹在美法两例中间 ⟹ approaches）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'col2',label:'2019·T1 · 02++ 专栏（位置表 ＋ 功能名词 × 话题）'}]},

{id:'R253', tier:'🔴', qt:'标题题／主旨题 · 作者观点鲜明的社论（通篇骂一种倾向）', title:'标题取反面：作者通篇骂 X（impatience／short-termism），标题就夸非 X（Patience）——答案的核心词在原文可以零出现，只要它是原文贬义关键词的反义词、且方向与作者一致；反过来，「作者批评它」不等于「它失败了」：给被批评的对象加一个结局（Failure）是命题人替作者下的判决',
 trig:['全文有一个被反复贬斥的倾向，而且它有现成的反义词（impatience／patience · short-term／long-term · greed／generosity）','某个选项的核心词在原文找不到，却正好是那个贬义词的反面','另一个选项把原文批评的对象写成 Failure／Decline／End of X'],
 flow:'① <b>写下作者骂的那个词</b>：this financial impatience（②❷）· Short-termism（②❶）；<br>'
     +'② <b>取反</b>：impatience → Patience；short-term → long-term；<br>'
     +'③ <b>查方向</b>：作者站在「长」那边吗？（①❹ long-term decision-making · ⑥❶ encourage long-termism · ⑦❷ for the long term）⟹ 是 ⟹ 标题带褒义（Virtue）；<br>'
     +'④ <b>查另外几项有没有「加结局」</b>：原文说 has worsened（在加剧），选项说 Failure（失败了）⟹ 方向反。',
 tmpl:'<table class="tk"><tr><th>2019·T1·25</th><th>原文</th><th>判</th></tr>'
     +'<tr><td><b>C Patience as a Corporate Virtue</b></td><td>patience 零出现；impatience ②❷、short／long 对照贯穿 ①–⑦</td><td><b>✔ 原刊标题</b></td></tr>'
     +'<tr><td>B Failure of Quarterly Capitalism</td><td>③❸ 仅一次；②❶ has worsened</td><td>✘ 加结局 ＋ 局部</td></tr>'
     +'<tr><td>A Decisiveness Required of Top Executives</td><td>①❹ decision-making 词形</td><td>✘ 快 ≠ 远</td></tr></table>'
     +'<p class="note">「X as a Y Virtue」式标题：as 后面是作者给 X 的评价——作者观点型社论的标题要带作者的褒贬。</p>',
 traps:['<b>别用「原文有没有这个词」卡标题</b>：<a href="#R40">R40</a> 的覆盖度查的是「罩不罩得住全文」，不是「词在不在」——Patience 一次没出现，却罩住了 ① 到 ⑦。',
        '<b>批评 ≠ 失败</b>：作者骂得越狠，往往说明这个倾向越强（has worsened · predominance）；Failure／Decline 类标题要回原文找「它在输」的证据（<a href="#R217">R217</a>）。',
        '<b>分工</b>：<a href="#R186">R186</a> 管原刊标题账；<a href="#R218">R218</a> 管贯穿首尾的线；<a href="#R247">R247</a> 管完形里主题词的反义替身；本卡管<b>阅读标题题里「答案词零出现、靠反义词撑腰」</b>。'],
 refs:[{p:'2019_T1_耐心是一种企业美德.html',q:'q25',label:'2019·T1·25（全文骂 impatience ⟹ Patience；B Failure 给批评加结局）'},
       {p:'2019_T1_耐心是一种企业美德.html',q:'col3',label:'2019·T1 · 02+++ 专栏（短／长两族逐段表 ＋ 标题账十七道）'}]},

{id:'R254', tier:'🔴', qt:'论证方式题（The author examines／discusses／illustrates X by ___ · 四个选项都是「动名词 ＋ 名词」）', title:'论证方式题给每段贴问号：是什么／为什么／怎么样／好不好／谁说的——数哪个问号最多，答案就是它；其余三项各有硬判据：feasibility 只评尚未实施的方案，long-run effects 要有将来时或结果链且不止一条，different views 至少要两个说话人对同一对象表态不同',
 trig:['题干是 The author examines／discusses／approaches X by ___','四个选项是 assessing／listing／comparing／analyzing 这类「方式动词 ＋ 名词」','文章是一篇讲某个现象或政策的评论'],
 flow:'① <b>给每段写一个问号</b>：它在答「是什么」「为什么」「效果如何」「该不该」还是「谁怎么看」；<br>'
     +'② <b>数问号</b>：哪一种占的段最多，就是作者的论证方式（2019·T2：六段五段答「为什么」⟹ analyzing the causes）；<br>'
     +'③ <b>其余三项查硬判据</b>：可行性 ⟹ 对象还没实施；长远影响 ⟹ 有 will／in the long run／eventually 的结果链；不同观点 ⟹ 数说话人，至少两方且表态不同；<br>'
     +'④ <b>转折词不算说话人</b>：That said／But 后面若还是作者自己，就不是「另一派」。',
 tmpl:'<table class="tk"><tr><th>2019·T2·30 选项</th><th>要求原文有什么</th><th>考卷有没有</th></tr>'
     +'<tr><td>A assessing feasibility</td><td>尚未实施的方案</td><td>❌ 已推行几十年</td></tr>'
     +'<tr><td>B long-run effects</td><td>结果链、将来时</td><td>❌ 只有一句眼前的好处</td></tr>'
     +'<tr><td>C different views</td><td>至少两个说话人</td><td>❌ 只有学校一方</td></tr>'
     +'<tr><td><b>D analyzing causes ✔</b></td><td>多段答「为什么」</td><td>✅ 六段五段</td></tr></table>'
     +'<p class="note">信号词：as（③❶）· the goal is less about … more about（④❶）· satisfies colleges’ own needs（⑤❶）· just another way that … are responding to（⑥❶）。</p>',
 traps:['<b>「有一句沾边」不等于「是论证方式」</b>：④❷ 教务主任说学生更成功，是「效果」，但全文只有这一句——判据是占多少（接 <a href="#R236">R236</a>）。',
        '<b>别把作者的让步转折当成第二派</b>：That said 之后是作者自己的分析；选 comparing views 的人常常数的是转折词，不是说话人。',
        '<b>分工</b>：<a href="#R236">R236</a> 管「题干已给出问题、空里要问题以外那一块」；本卡管「四个选项各是一种论证方式」时逐段贴问号。',
        '<b>2019·T4·40 的补充：说话人够了，篇幅不够</b>：末段零售业团体 praised、小企业团体 not well served at all——「两个说话人对同一对象表态不同」成立，但只占全文 15%；conflicting views 还要过 <a href="#R236">R236</a> 的「占多少」。'],
 refs:[{p:'2019_T2_大学成绩宽恕的兴起.html',q:'q30',label:'2019·T2·30（六段五段答「为什么」⟹ analyzing the causes）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'col2',label:'2019·T2 · 02++ 专栏（六段六个问号 ＋ 四种文章的判据表）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q40',label:'2019·T4·40A（末段两个说话人表态不同，但只占 15%）'}]},

{id:'R255', tier:'🟢', qt:'元套路 · 论证方式题／主旨题／态度题（选项描述了一种「这类文章一般会有」的内容：正反观点、长远影响、利弊权衡）', title:'考卷是删过的，只按考卷里剩下的判：原刊里有、考卷里删掉的那一块，常常正是某个干扰项的产地——「这类报道一般会列反对意见」「政策总有利有弊」是你替作者补的；考卷里找不到第二个说话人，就没有 comparing views',
 trig:['选项写 comparing different views／weighing pros and cons／listing long-term effects','你心里在想「这种话题一般会有人反对吧」','考卷里只出现一个说话人或一方立场'],
 flow:'① <b>先在卷边列出考卷里真实出现的说话人</b>（名字、机构、转述动词），数一数有几方；<br>'
     +'② <b>凡选项要求「多方」「利弊」「长远」</b>，逐项回考卷找原句——找不到就划掉，不管它合不合常理；<br>'
     +'③ <b>留意删改痕迹</b>：孤零零的 also／too 没有着落、人物第一次出现就用全名加头衔插在引语中间，常说明前面被删了一段——被删的东西不能拿来答题；<br>'
     +'④ <b>解析与常识同样要过这一关</b>：书上的理由若在考卷里找不到依据，只能当背景，不能当判据。',
 tmpl:'<table class="tk"><tr><th>2019·T2 原刊（12 段）</th><th>考卷（6 段）</th></tr>'
     +'<tr><td>6 段：迈纳乐观，but others are concerned</td><td>❌ 删</td></tr>'
     +'<tr><td>7–8 段：两位教授批评「GPA 失真」</td><td>❌ 删</td></tr>'
     +'<tr><td>9 段：科罗拉多大学 2010 年废止</td><td>❌ 删</td></tr>'
     +'<tr><td>10 段：College officials <u>also</u> tend to</td><td>删 also ⟹ 考卷 ④</td></tr></table>'
     +'<p class="note">原刊 1046 词，考卷留 405 词（38.7%）；删掉的六段全是「别人怎么看」⟹ 30C comparing different views 在原刊有料、在考卷必错。</p>',
 traps:['<b>最危险的是「常识上说得通」</b>：一项有争议的政策「应该」有正反两派——原刊里确实有，考卷里删了（接 <a href="#R8">R8</a> 常识陷阱）。',
        '<b>黄皮书也会用考卷外的理由</b>：2019·T2 30B 的解析说这些好处「不利于长远发展」，依据只在被删的原刊段落里；答案对，理由要换成考卷里的（全文没有一段写长远影响）。',
        '<b>反过来也成立</b>：删段会把某个选项「做对」——2019·T2 删掉各方意见后，D analyzing the causes 的篇幅从一半涨到六段五段。',
        '<b>2019·T3 再添三例：删掉的是「办法」「头衔」「出处」</b>：原刊在「自动驾驶难」之后给了两个办法（问卷调查人类司机、事后分析 AI 事故）和一句「希望 AI 司机终将远胜人类」——考卷全删，33 题才只剩「眼下做不到」（C），hardly ever（A）仍因原文只有 today／difficult 而出局；伊格曼原是《西部世界》的科学顾问，删了，32C「启发科幻剧」连影子都没了；「可解释、透明、公平」原属新加坡部长，删了出处，So does 的肯定更像作者自己的。',
        '<b>2019·T4 最强样本：删的是「反方」和「过程」</b>：原刊开头 5-4，后面有首席大法官罗伯茨四人的整段异议（电子商务在既有规则下长成国民经济重要的一部分，改动应由国会来做）与南达科他州立法、起诉、发回重审的三段——考卷全删（原刊 934 词只留 443 词、几乎一个词都没换）。40A conflicting views、40D long and complicated process 在原刊有料、在考卷必错；37C dominance of e-commerce、38A hindered economic development 的影子也都在那段异议里（38A 还是反着的：罗伯茨说的是推翻规则会扰乱发展）。',
        '<b>Part B 也是删过的，而且会拼</b>：2019 新题型 D 段由原刊两段拼成——Of course … Still 这一对「让步 → 转折」是拼出来的，such fallacies 因指代对象被删而换成 bad arguments；做题只按考卷读，拼好的 D 就是一段完整的「让步 ＋ 原则」。'],
 refs:[{p:'2019_T2_大学成绩宽恕的兴起.html',q:'q30',label:'2019·T2·30C（原刊有正反两派，考卷只剩学校一方）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'col1',label:'2019·T2 · 02+ 专栏（原刊 12 段 vs 考卷 6 段逐段对照）'},
       {p:'2019_T3_赋予AI以良知.html',q:'q33',label:'2019·T3·33（原刊给了两个办法 ＋ 一句希望，考卷全删）'},
       {p:'2019_T3_赋予AI以良知.html',q:'col1',label:'2019·T3 · 02+ 专栏（原刊 16 段 vs 考卷 9 段；删掉的四块各管一道题）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'q40',label:'2019·T4·40（原刊有 5-4、异议与官司过程，考卷全删 ⟹ A、D 必错）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'col1',label:'2019·T4 · 02+ 专栏（原刊 18 段 vs 考卷 7 段：删掉的是反方和过程）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'orig',label:'2019·新题型 · 03++ 原刊 vs 考卷（九段删成七段，D 由两段拼成）'}]},

{id:'R256', tier:'🔴', qt:'词义题 · 关系类短语（to be aligned／to coincide／to converge／to be at odds · 四个选项是两方关系的四个档位）', title:'关系词义四档：identical（两方要同一个东西）· complement（要不同的东西、彼此补缺）· counterbalance（方向相反、互相抵消）· contradictory（互相排斥）——先在卷边写下两方各自要什么，再按「同一个／不同但成全／不同且相抵／互斥」对档',
 trig:['被考短语描述两方的关系（incentives／interests／goals of A and B）','四个选项是 identical／complement／counterbalance／contradictory 一类','原文前一句用 Since／so／and 把两方连起来'],
 flow:'① <b>找两方</b>：被考句的主语里是谁和谁（students’ and colleges’ incentives）；<br>'
     +'② <b>顺着 this／On this 往上找各自要什么</b>，各写一行；<br>'
     +'③ <b>比两行</b>：写出来是同一个东西 ⟹ identical；不同但各补对方所缺 ⟹ complement；不同且此消彼长 ⟹ counterbalance；不能并存 ⟹ contradictory；<br>'
     +'④ <b>看连词定方向</b>：Since／so 是顺承，排矛盾与抗衡。',
 tmpl:'<table class="tk"><tr><th>2019·T2·29 两方</th><th>要什么</th></tr>'
     +'<tr><td>学生（和家长）</td><td>学位带来工作 ＋ 学费花得值（体面的成绩）</td></tr>'
     +'<tr><td>学校</td><td>尽可能合格——或至少看起来合格——的毕业生（体面的数据）</td></tr>'
     +'<tr><td><b>比较</b></td><td>同一张成绩单 ⟹ <b>identical ✔</b>，不是互补</td></tr></table>'
     +'<p class="note">complement 与 identical 都是「关系好」，差在两方要的是不是同一个东西——这是「近义换档」，与 R251 的「换轴」同一种造法。</p>',
 traps:['<b>「互补」最像正确项</b>：学校服务学生、自己也得利，看着像「各取所需」；但被考句的主语是 incentives（动机），两方动机指向同一处（黄皮书同此判）。',
        '<b>别把 respond 读成反击</b>：responding to expectations 是迎合，选 counterbalance 的人把它读成了反向回应。',
        '<b>限定词只帮你确认在说哪一点</b>：On this／seem 收窄的是范围和语气，不改档位（接 <a href="#R90">R90</a> 看逻辑角色、<a href="#R120">R120</a> 被考词的白话版）。'],
 refs:[{p:'2019_T2_大学成绩宽恕的兴起.html',q:'q29',label:'2019·T2·29（两方要同一样东西 ⟹ identical；complement 是换档）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'col4',label:'2019·T2 · 02++++ 专栏（关系四档表 ＋ 两方账）'}]},

{id:'R257', tier:'🟡', qt:'事实细节题（What is commonly regarded／generally believed as …）· 首段是「常见说法 ＋ But another」', title:'常见说法 ＋ 另一股相关力量：A is often considered … But another, related force B …——题干问 commonly regarded 只取 But 之前那一句；another 说明 B 是作者的新料，related 说明 B 与 A 有关（常在末段被收回 A 的框里）——否定型（But the real cause is）推翻 A，补充型（another, related）不推翻 A',
 trig:['题干含 commonly regarded／generally believed／traditionally thought','首段第一句是 is often considered／is widely seen as，第二句是 But another／But a less-noticed','末段出现 Indeed … just another way that … 或 is part of …'],
 flow:'① <b>题干问「普遍认为」⟹ 只看 But 之前</b>（often considered 那一句），别被作者的新料吸走；<br>'
     +'② <b>看 But 后面有没有 related／also</b>：有 ⟹ 补充型，A 仍然成立；是 the real／actually ⟹ 否定型，A 是靶子；<br>'
     +'③ <b>补充型要去末段找回扣</b>：just another way／is part of 把 B 收回 A——全文成圈，主旨题与论证方式题都要把 A 装进去；<br>'
     +'④ <b>第二层的名词是干扰项仓库</b>：B 句里的具体名词（course catalogs）进了选项，多半是错项。',
 tmpl:'<table class="tk"><tr><th>2019·T2 位置</th><th>原文</th><th>作用</th></tr>'
     +'<tr><td>①❶</td><td>is often considered a product of a consumer era</td><td>常见说法 ⟹ <b>26B ✔</b></td></tr>'
     +'<tr><td>①❷</td><td>But another, related force … grade forgiveness</td><td>作者新料 ⟹ 26A／26D 的原料</td></tr>'
     +'<tr><td>⑥❶</td><td>just another way that universities are responding to consumers’ expectations</td><td>收回 A：全文成圈</td></tr></table>'
     +'<p class="note">被删的原刊 8 段有旁证：Everyone knows about grade inflation, but this is GPA distortion——「人人都知道」的那一层，就是 commonly regarded。</p>',
 traps:['<b>最常见的错法是答了作者重点</b>：题目偏问铺垫（黄皮书称「避重就轻」）——26D 的 course catalogs 就等着这类人。',
        '<b>补充型里 A 不是靶子</b>：别因为作者转向 B，就在其他题里把「肯定 A」的选项划掉（对照 <a href="#R148">R148</a> 今昔对比第三拍：那里「今」被降成靶子）。',
        '<b>分工</b>：<a href="#R3">R3</a> 管例证服务的观点；<a href="#R86">R86</a> 管人物由头 ≠ 主题；本卡管首段「常见说法 ＋ 另一层」的两层取舍。'],
 refs:[{p:'2019_T2_大学成绩宽恕的兴起.html',q:'q26',label:'2019·T2·26（commonly regarded ＝ ①❶ often considered ⟹ consumer culture）'},
       {p:'2019_T2_大学成绩宽恕的兴起.html',q:'col3',label:'2019·T2 · 02+++ 专栏（「消费者」一根线首尾成圈）'}]},

{id:'R258', tier:'🔴', qt:'写作目的题（X is mentioned because it ___ · 首段是一本书／一件旧事的周年）', title:'周年引子分两件：This year marks … since … 只是时间钩（回答「为什么今天提」），同段里把旧事接到后文的那个动词（foreshadow／anticipate／prefigure／echo）才是桥——答案 ＝ 桥的两头：旧事的哪一面 ＋ 后文哪个话题；只谈旧事本身（热度、粉丝、争议）的选项一律出局',
 trig:['首段第一句是 This year marks … since …／It has been N years since …','题干问 X is mentioned／cited because it ___','首段第二句有 foreshadow／anticipate／predict／echo 这类「预示、呼应」动词'],
 flow:'① <b>把首段拆成「钩」和「桥」</b>：周年、纪念日、「今年正好」＝ 钩；预示／呼应类动词 ＝ 桥；<br>'
     +'② <b>顺着桥的宾语往后数</b>：它的宾语（2019·T3 是 ethical questions ＋ technologies）在后文复现成什么词、复现了几次——那就是正题；<br>'
     +'③ <b>正确项 ＝ 桥两头的合体</b>：旧事的那一面（预示了问题）＋ 后文的话题（今天的 AI）；<br>'
     +'④ <b>三类干扰项各困在引子里一处</b>：把周年读成热度（受欢迎多年）· 把大众的反应挪给专家 · 把「X 引发问题」的主语换成引子本身。',
 tmpl:'<table class="tk"><tr><th>2019·T3 首段</th><th>作用</th><th>31 题</th></tr>'
     +'<tr><td>This year marks two centuries since …</td><td>钩</td><td>B（歪成受欢迎）</td></tr>'
     +'<tr><td>would <b>foreshadow</b> ethical questions to be raised by technologies yet to come</td><td>桥</td><td><b>A ✔</b> · D（换主语）</td></tr>'
     +'<tr><td>③❷ humans remain fascinated</td><td>别段</td><td>C（大众 → 科学家）</td></tr></table>'
     +'<p class="note">原刊 ①❷ 是 spawned，命题人改成 raised，与 ②❶ raises fundamental questions 同词——正确项 31A 的 concerns raised by AI today 正是两处复现词的合体。</p>',
 traps:['<b>周年 ≠ 热度</b>：出版两百年只说明出了多久，推不出「两百年来一直受欢迎」；remarkable（非凡）也不等于 popular（受欢迎）——评价换了维度（接 <a href="#R37">R37</a> 客观事实推不出主观评价）。',
        '<b>「引发」的主语别看错</b>：questions to be raised by technologies——引发问题的是技术，小说只是预示；选项写「小说引发了争议」是偷换主语。',
        '<b>首尾呼应不等于主题</b>：引子常在末段再出现一次（Frankenstein’s monster），标题题里拿它当主题的选项只罩住首尾两句（接 <a href="#R218">R218</a>）。',
        '<b>分工</b>：<a href="#R16">R16</a> 管「配角引出主角」的一般判法（往外扩一层找意群）；本卡管首段有周年钩 ＋ 预示动词时，直接顺着桥的宾语找正题。'],
 refs:[{p:'2019_T3_赋予AI以良知.html',q:'q31',label:'2019·T3·31（foreshadow … ethical questions … technologies yet to come ⟹ concerns raised by AI today）'},
       {p:'2019_T3_赋予AI以良知.html',q:'col2',label:'2019·T3 · 02++ 专栏（周年引子：钩 · 评价 · 桥 · 接口 · 呼应五格表）'}]},

{id:'R259', tier:'🔴', qt:'事实细节题（The solution to X ___ · 选项是「能否解决」的不同档位：hardly ever／still beyond／will soon）', title:'眼下难 ≠ 永远无解：原文只写「为什么难」、不写解决办法时，从档位词反推——today／still／not nearly／difficult／thorny 是「眼下做不到」，选项只能到 still beyond our capacity；hardly ever／never／impossible 把将来也否定了，档位拔高一级，原文没有同档的词就划掉',
 trig:['题干问 the solution to ／ the prospect of ／ whether X can be solved','原文只描述困难（difficult、thorny、not nearly as … as），没有一句写 solution','选项里同时出现 hardly ever／never 与 still／not yet'],
 flow:'① <b>先找原文里的档位词</b>，分三档写在卷边：程度（difficult · thorny · complex）· 眼下（today · still · yet · not nearly · so far）· 永久（never · impossible · hardly ever）；<br>'
     +'② <b>原文最高到哪一档，选项就只能到哪一档</b>：只有程度与眼下 ⟹ 选 still／not yet／remains beyond；<br>'
     +'③ <b>永久档要原文同档的词撑腰</b>：找不到 never／impossible／no way，就是拔高；<br>'
     +'④ <b>换话题的项先排</b>：题干问「办法」，选项讲「公众关注」「好奇心」的，是从别段串来的。',
 tmpl:'<table class="tk"><tr><th>档位</th><th>2019·T3 原文</th><th>33 题</th></tr>'
     +'<tr><td>程度</td><td>thorny · complex · difficult</td><td>—</td></tr>'
     +'<tr><td>眼下</td><td>AI vision <b>today</b> is <b>not nearly</b> as sophisticated</td><td><b>C still beyond ✔</b></td></tr>'
     +'<tr><td>永久</td><td>（全篇没有）</td><td>A hardly ever ❌</td></tr></table>'
     +'<p class="note">原刊在「难」之后紧跟两个办法（问卷调查人类司机、事后分析 AI 事故）和一句「希望 AI 司机终将远胜人类」——考卷全删；即便只剩「难」，也只到「眼下」。</p>',
 traps:['<b>not nearly 是「远不」</b>：not nearly as good as ＝ 远不如；读成「几乎一样」就全反了。',
        '<b>双重否定别读成否定</b>：doesn’t mean … aren’t at hand ＝ 问题已在眼前——它讲问题来没来，不讲办法有没有；拿它去撑 hardly ever 是读错了否定的层数。',
        '<b>常识会推你选永久档</b>：「自动驾驶的伦理难题（电车难题）无解」是常识印象，考卷没说（接 <a href="#R8">R8</a>）；原刊甚至给了办法（接 <a href="#R255">R255</a>）。',
        '<b>分工</b>：<a href="#R37">R37</a> 管「做不到 ≠ 没做好」（能力 vs 评价）；本卡管「现在做不到 ≠ 永远做不到」（时间档）。'],
 refs:[{p:'2019_T3_赋予AI以良知.html',q:'q33',label:'2019·T3·33（today · not nearly · difficult ⟹ still beyond our capacity；A hardly ever 拔高）'},
       {p:'2019_T3_赋予AI以良知.html',q:'col4',label:'2019·T3 · 02++++ 专栏（程度／眼下／永久三档表 ＋ 原刊被删的两个办法）'}]},

{id:'R260', tier:'🔴', qt:'作者态度题（The author’s attitude toward X is one of ___ · 原文是 While X is ＜贬＞, it ＜褒＞ ＋ So does …）', title:'作者自己的让步取主句：While the statement is vague, it represents one starting point——让步从句是作者替自己打的折（保留），主句定方向（肯定），So does Y 再添一个同类 ⟹ 有保留的肯定 ＝ affirmation／approval；只抓从句的选负面，满格的 respect／enthusiasm 档位过高，对象也常不对',
 trig:['态度对象的下一句是 While／Although ＋ 缺点，主句 ＋ 优点','主句里有 starting point／a step／a start 这类「开了个头」的词','四个选项两正两负（contempt · skepticism · respect · affirmation）'],
 flow:'① <b>对象与态度常不在同一段</b>：先找作者开口评价的那句（常紧跟在对象段后）；<br>'
     +'② <b>判 While 是不是让步</b>：从句与主句一褒一贬、说的是同一个对象（the statement … it）⟹ 让步，重心在主句；<br>'
     +'③ <b>方向取主句</b>：represents one starting point ⟹ 正；<b>强度看从句与主句里的限定</b>：vague ＋ one starting point ⟹ 中档（有保留）；<br>'
     +'④ <b>两个正面词比对象</b>：respect 敬的是人／权威、档位高；affirmation／approval 认的是做法、容得下一句缺点。',
 tmpl:'<table class="tk"><tr><th>选项</th><th>方向 · 强度</th><th>2019·T3·34</th></tr>'
     +'<tr><td>contempt · skepticism</td><td>负</td><td>❌ 只抓了 vague</td></tr>'
     +'<tr><td>respect</td><td>正 · 满格（对人）</td><td>❌ 刚说了 vague</td></tr>'
     +'<tr><td><b>affirmation</b></td><td>正 · 有保留（对做法）</td><td><b>✔</b></td></tr></table>'
     +'<p class="note">So does the idea that … ＝ the idea represents one starting point, too——把谷歌声明和一条作者赞成的理念并排；原刊这条理念有出处（新加坡部长），考卷删了，更像作者自己的话。</p>',
 traps:['<b>让步是谁说的决定怎么算</b>：作者自己的让步（While X is vague）＝ 给肯定打折；转述批评者再反驳（As much as critics complain … but）＝ 态度更坚决（接 <a href="#R170">R170</a>）。',
        '<b>褒义词描述的对象要核</b>：explainable, transparent, and fair 描述的是 AI 系统的决定，不是作者对谷歌的评价——34C respect 就借它们造的。',
        '<b>后见之明陷阱</b>：谷歌 2025 年删了部分承诺——知道这件事会把你推向 skepticism；态度题只问文中作者当时的态度（接 <a href="#R8">R8</a>）。',
        '<b>分工</b>：<a href="#R12">R12</a> 是强度尺（先方向后强度）；本卡管「作者自己的 While 让步 ＋ So does 并列」时怎么落到尺子上。'],
 refs:[{p:'2019_T3_赋予AI以良知.html',q:'q34',label:'2019·T3·34（While … vague, it represents one starting point ⟹ affirmation）'},
       {p:'2019_T3_赋予AI以良知.html',q:'col5',label:'2019·T3 · 02+++++ 专栏（态度四词：方向 · 强度 · 对象）'}]},

{id:'R261', tier:'🟡', qt:'人物观点题（In X’s opinion, our knowledge of Y ___ · 原文是 Y is too complex to be understood, let alone reproduced）', title:'对象太难 ⟺ 认识太浅：原文说「对象太复杂」、选项说「我们懂得太少」，方向一致、对象一致就是合法的主客互换，不算偷换主体；not A, let alone B 的答案在 B（更远的那件事）——停在 A 的选项（能解释／会误导）是前一层的反面或换了性质',
 trig:['原文是 X is (far) too complex to be understood／beyond our understanding','原文有 let alone／much less／still less','选项主语是 our knowledge／our understanding／scientists'],
 flow:'① <b>拆否定的层</b>：too … to（第一层：理解不了）→ let alone（第二层：更别说复制／造出来）→ 补刀（no good theories · how could ever）；<br>'
     +'② <b>题干问的是哪一层</b>：问「能不能复制／造出来」取 let alone 后面；<br>'
     +'③ <b>认主客互换</b>：「对象太难」＝「我们的认识太有限」，too … to 骨架常原样保留（too limited for us to reproduce it）；<br>'
     +'④ <b>真正的换主体是换了一个人</b>：把大众换成科学家、把作者的话挂到专家头上——那才是错。',
 tmpl:'<table class="tk"><tr><th>说法</th><th>能否互换</th></tr>'
     +'<tr><td>X is far too complex to be understood, let alone reproduced</td><td rowspan="2">✅ 同一事实的两面</td></tr>'
     +'<tr><td>our knowledge of X is too limited for us to reproduce it</td></tr>'
     +'<tr><td>our knowledge helps explain AI</td><td>❌ 方向反（原文 no good theories explaining）</td></tr>'
     +'<tr><td>our knowledge can be misleading</td><td>❌ 换性质（不够 ≠ 错）</td></tr></table>'
     +'<p class="note">同理：X continues to evade scientists（X 躲着科学家）＝ scientists have not achieved X——「物做主语」与「人做主语」可以互换。</p>',
 traps:['<b>let alone 只用在否定之后</b>：后项比前项更难；题目问更难的那件事，答案就在 let alone 后面。',
        '<b>「误导」预设认识是错的</b>：原文只说认识不够、造不出来（阻碍），没说认识错了——misleading 换了性质。',
        '<b>人物观点先圈人名</b>：同一段前后的科幻剧、大众着迷是作者在讲，不是专家的观点（接 <a href="#R2">R2</a>）。'],
 refs:[{p:'2019_T3_赋予AI以良知.html',q:'q32',label:'2019·T3·32（far too complex to be understood, let alone reproduced ⟹ too limited for us to reproduce it）'},
       {p:'2019_T3_赋予AI以良知.html',q:'col3',label:'2019·T3 · 02+++ 专栏（let alone 两层 ＋ 主客互换表）'}]},

{id:'R262', tier:'🔴', qt:'事实细节题／段群主旨题（The decision will ___ ／ the overruled decisions ___ · 税、费、罚款、补贴类新闻）', title:'谁付 · 谁代收 · 谁收：一笔钱有三个角色——付的（购物者）、代收的（卖家，只过手）、收的（州）；付的一方少付 ⟺ 收的一方少收。先画钱的箭头，再看每个选项把哪一头写反、把哪个角色放错了位置',
 trig:['文章讲税、费、罚款、补贴、提成——钱在几方之间流动','原文有 pay／collect／charge／owe／revenue／send it to 这一族动词','选项的主语各是一方：shoppers／businesses／states／consumers'],
 flow:'① <b>卷边写三个角色</b>：付 · 代收 · 收（2019·T4：购物者 · 州外卖家 · 州）；<br>'
     +'② <b>画箭头</b>：新规则 购物者 → 卖家 → 州（⑥❸ collect … from customers and send it to the state）；旧规则这条线断在「购物者很少交」（③❷ few paid）；<br>'
     +'③ <b>记两头账</b>：付的一方少付 ⟺ 收的一方少收——新规则下购物者吃亏、州得利（①❶ lighter wallets but … a big financial win for states），旧规则反过来；<br>'
     +'④ <b>每个选项问一句</b>：它说谁吃亏／谁得利？把「代收」的当成「付」的、把「收」的写成「减」的、把占便宜的写成吃亏的，一律错。',
 tmpl:'<table class="tk"><tr><th>选项</th><th>放错了什么</th></tr>'
     +'<tr><td>36A 大多数网商陷入两难</td><td>把代收的当成掏钱的</td></tr>'
     +'<tr><td>36B 逼一些州减税</td><td>把收钱的写成减税（方向反）</td></tr>'
     +'<tr><td>37A 被网购者广泛批评</td><td>占便宜的一方不会批评</td></tr>'
     +'<tr><td>37B 这些年让消费者损失很多</td><td>cost them 的 them 是州</td></tr></table>'
     +'<p class="note">正解：36C make more online shoppers pay sales tax（付的一方多付）· 37D were considered unfavorable by states（收的一方少收，且 states said 是州自己说的）。</p>',
 traps:['<b>最阴的是借词换宾语</b>：37B 的 cost 与 over the years 都是原文的（②❶ cost them … annually），只把 them 换成 consumers——方向就整个反了（接 <a href="#R21">R21</a>）。',
        '<b>「该交」≠「交了」</b>：③❷ were generally responsible for paying … but … few paid——法律上的义务不等于实际负担，判谁吃亏看实际（few paid ⟹ 占了便宜）。',
        '<b>中间人只过手</b>：代扣代缴、平台抽成、票务代售一类文章都有这个第三角色——它的负担是手续与竞争劣势，不是替别人掏钱（接 <a href="#R96">R96</a> 先判受损方还是受益方）。'],
 refs:[{p:'2019_T4_最高法院网购销售税裁决.html',q:'q36',label:'2019·T4·36（force more people to pay ⟹ C；A 代收当付、B 收钱写成减税）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'col2',label:'2019·T4 · 02++ 专栏（钱的三个角色：旧规则 vs 新裁决）'}]},

{id:'R263', tier:'🔴', qt:'事实细节题／推断题（Who are most likely to welcome／oppose X? · 规则收回豁免、拉平赛场、统一标准类新闻）', title:'拉平赛场，早就在交的一方是赢家：新规则把原来的豁免收回时，本来就按规矩交的一方零成本、对手却要新增成本——它就是欢迎者；原来靠豁免占便宜的一方是输家。判据是句子里的 already／have been doing／typically',
 trig:['题干 Who are most likely to welcome／benefit from／oppose X','原文有 a victory for／a win for ＋ since … already','原文有 level the playing field／an even playing field／Until now … have been able to avoid'],
 flow:'① <b>把定位段里的人分两栏</b>：赢（victory · praised）／输（The losers · not well served · Until now … avoid）；<br>'
     +'② <b>看赢的理由</b>：2019·T4 ⑤❶ since they usually collect sales tax … already——新规则对它零成本，只是把 rivals 也拉进来；<br>'
     +'③ <b>四个选项逐个归栏</b>：原文点了名的人最危险——词全对、只是站在输家一栏；<br>'
     +'④ <b>「大」与「小」常是分栏线</b>：big chains ／ smaller sellers ／ smaller ones ／ small businesses。',
 tmpl:'<table class="tk"><tr><th>栏</th><th>2019·T4 原文</th><th>39 题</th></tr>'
     +'<tr><td>🟢 赢</td><td>a victory for big chains … already</td><td>A ✔</td></tr>'
     +'<tr><td>🔴 输</td><td>third-party sellers … don’t have to</td><td>B ✗</td></tr>'
     +'<tr><td>🔴 输</td><td>not well served at all</td><td>C ✗</td></tr>'
     +'<tr><td>🔴 输</td><td>The losers … especially smaller ones</td><td>D ✗</td></tr></table>'
     +'<p class="note">法官的理由与行业的掌声首尾咬合：④❸ has prevented market participants from competing on an even playing field ＝ ⑦❶ it levels the playing field——38B 与 39A 是同一件事的两面。</p>',
 traps:['<b>站错边比换词更难排</b>：39B、C、D 都是原文点了名的人，「回原文找词」全部通过，只有先分栏才排得掉。',
        '<b>欢迎者不一定是被直接提到「高兴」的人</b>：原文说「零售业团体称赞」，选项写「大连锁店老板」——同一栏即可，理由在 ⑤❶ since … already。',
        '<b>后见之明别带进来</b>：知道亚马逊后来替第三方卖家代收，也改变不了 2018 年的 don’t have to（接 <a href="#R8">R8</a>）。'],
 refs:[{p:'2019_T4_最高法院网购销售税裁决.html',q:'q39',label:'2019·T4·39（a victory for big chains … already ⟹ A；B、C、D 都在输家一栏）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'col4',label:'2019·T4 · 02++++ 专栏（赢家输家账本七方）'}]},

{id:'R264', tier:'🔴', qt:'行文逻辑题／作者态度题（In dealing with X, the author ___ ／ The author’s attitude · 文章是一篇通讯社新闻稿）', title:'新闻稿记账不站队：导语一句报完、日期写成星期、褒贬全挂在 said／wrote／praised 上、末段照例「各方反应」——作者只记谁赢谁输、不说好不好 ⟹ 行文题选 factual account ＋ consequences，态度题选 objective／neutral；这是 R72「社论里客观几乎必错」的镜像：先认文体，再定作者有没有态度',
 trig:['首段只有一句，交代谁 · 做了什么 · 何时 · 结果（Thursday／Monday 贴在名词后）','全文找不到 I／we／should，判断句都带转述动词','末段一个叫好、一个叫苦（praised … ／ said in a statement …）'],
 flow:'① <b>认文体</b>：四个信号齐了就是新闻稿（2019·T4：导语 38 词 · Thursday 3 次 · states said／Kennedy wrote／praised／said analyst／said in a statement · ⑦ 各方反应）；<br>'
     +'② <b>分块量篇幅</b>：事件（导语 ＋ 背景 ＋ 理由）／影响（谁赢谁输 ＋ 反应）——2019·T4 是 ①–④ 213 词 ＋ ⑤–⑦ 230 词；<br>'
     +'③ <b>正解 ＝ 两块的合体</b>：gives a factual account of it and discusses its consequences；<br>'
     +'④ <b>末段的「各方反应」不是全文写法</b>：一夸一骂天然就是 conflicting views，但只占一段（2019·T4 15%）。',
 tmpl:'<table class="tk"><tr><th>文体</th><th>作者</th><th>「客观」类选项</th></tr>'
     +'<tr><td>社论（2019 T1、T3）</td><td>要表态</td><td>几乎必错（R72）</td></tr>'
     +'<tr><td>评论（2019 T2）</td><td>分析原因</td><td>看论证方式（R254）</td></tr>'
     +'<tr><td>新闻稿（2019 T4）</td><td>只记账</td><td>正解</td></tr></table>'
     +'<p class="note">新闻稿的作者也会说「谁赢了」（① a big financial win for states · ⑤ a victory for big chains）——那是记账，不是褒贬。</p>',
 traps:['<b>两把尺子一起用</b>：R254 的「至少两个说话人表态不同」在末段成立，所以还要加 R236 的「占多少」——有没有 ＋ 占多少（接 <a href="#R236">R236</a>）。',
        '<b>原刊里的对立被删了</b>：2019·T4 原刊开头是 5-4，后面有首席大法官罗伯茨四人的整段异议——考卷全删，A conflicting views 只剩末段（接 <a href="#R255">R255</a>）。',
        '<b>判决新闻里票数留不留决定一切</b>：2013·T4 留了 5-3 与 8-0 两块比分牌（要分牌做题，<a href="#R152">R152</a>）；2017·T4 把 unanimous 写进第一句；2019·T4 把 5-4 删掉——考卷里没有反方。'],
 refs:[{p:'2019_T4_最高法院网购销售税裁决.html',q:'q40',label:'2019·T4·40（新闻稿：①–④ 事实 ＋ ⑤–⑦ 影响 ⟹ B；A 只在末段）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'col5',label:'2019·T4 · 02+++++ 专栏（2019 卷四篇文体对照 ＋ 新闻稿四信号）'}]},

{id:'R265', tier:'🔴', qt:'人物观点题（According to X, the rule／policy has ___ · 引语里列了几个受害者）', title:'受害清单逐格对：人物的引语列出「伤了谁、伤在哪」，选项的宾语必须落在清单上某一格、方向为负——不在清单上的是换对象（借来的形容词换了中心词、州扩成国家），在清单上但方向反的是反向；时态切不开时，对象才切得开',
 trig:['题干 According to X, the rule／law／practice has ___','引语里有 results in … losses to ／ limited … ability ／ has prevented … from','选项是「动词 ＋ 名词」：hindered development ／ harmed competition ／ boosted revenue'],
 flow:'① <b>先定站位</b>：2019·T4 ④❶ the previous decisions were flawed ⟹ 负向，褒义的 boosted、brought prosperity 先出局；<br>'
     +'② <b>把引语抄成清单</b>：各州的税收（revenue losses to the states）· 各州的能力（limited states’ ability to seek long-term prosperity）· 市场参与者的竞争（prevented market participants from competing on an even playing field）；<br>'
     +'③ <b>选项宾语逐格对</b>：harmed fair market competition 落在第三格 ⟹ ✔；<br>'
     +'④ <b>认出借词</b>：选项的形容词在原文出现过（economic ← economic reality），中心词却不在清单上——那是换了中心词。',
 tmpl:'<table class="tk"><tr><th>选项</th><th>在清单上吗</th><th>判</th></tr>'
     +'<tr><td>hindered economic development</td><td>❌ 清单上是州的能力</td><td>换中心</td></tr>'
     +'<tr><td>harmed fair market competition</td><td>✅ 第三格</td><td>✔</td></tr>'
     +'<tr><td>boosted growth in states’ revenue</td><td>✅ 但原文是 losses</td><td>反向</td></tr>'
     +'<tr><td>brought prosperity to the country</td><td>❌ 州 → 国家</td><td>扩范围 ＋ 反向</td></tr></table>'
     +'<p class="note">economic reality 说的是规则自己过时（网购时代还按有没有仓库判），不是经济受阻；limited states’ ability 伤的是州的手段，不是经济的结果。</p>',
 traps:['<b>时态这把刀常常不硬</b>：黄皮书判 38A「潜在危害被改成已然危害」，但 limited（过去时）与 has prevented（完成时）都是已然——按时态判，正解 harmed 也得出局；只有原文真有「当下 vs 将来」时才用时间轴（接 <a href="#R98">R98</a>）。',
        '<b>形容词借词是高发区</b>：选项与原文共享一个形容词（economic／financial／social），中心名词换了——先把选项的中心名词圈出来回原文找。',
        '<b>范围扩大</b>：states → the country、some → most——接 <a href="#R24">R24</a> 范围校验。'],
 refs:[{p:'2019_T4_最高法院网购销售税裁决.html',q:'q38',label:'2019·T4·38（受害清单三格 ⟹ B；A 借 economic 换中心、C 反向、D 扩范围又反向）'},
       {p:'2019_T4_最高法院网购销售税裁决.html',q:'col3',label:'2019·T4 · 02+++ 专栏（受害清单逐格对 ＋ 黄皮书时态刀商榷）'}]}
,

{id:'R266', tier:'🔴', qt:'完形 · 实用指南／清单体（首段有 a few tricks／tips／ways …, one of which is … 这样的目录句）的段首空、情形空与举例空', title:'清单体的段首空是编号：Another ___ 填目录名词（tricks）的替身 option；末段带着自己的新情形 ⟹ Finally，不是 Generally；各招的情形互不重叠——情形空拿不准，就去翻其他几招的情形',
 trig:['首段出现 a few tricks／tips／ways／steps …, one of which is …','某段段首是 Another ___: 后接祈使句','末段段首空后紧跟 assuming／if／when 引出的新情形','全篇第二人称 you ＋ 祈使句，没有论点、没有实验——是一篇指南'],
 flow:'① <b>读完首段找目录句</b>，在卷边写「招 ①②③④」；<br>'
     +'② 每段问三句：<b>第几招？什么情形？做什么、换来什么？</b>——空格落在「编号／情形／做法／结果」哪一格，就按那一格的规矩填；<br>'
     +'③ <b>编号格</b>：Another ___: ＋ 祈使句 ⟹ 填「办法」类名词（option／tip／way），即目录名词的替身；末段有新情形 ⟹ Finally；<br>'
     +'④ <b>情形格</b>：各招的情形互不重叠——拿不准时去翻其他几招的情形，别和它们撞；<br>'
     +'⑤ <b>举例空</b>：一招里的一个实例 ⟹ For example；Above all 要先摆出并列的几项才能挑。',
 tmpl:'<table class="tk"><tr><th>2019 完形 · 空</th><th>格</th><th>判据</th></tr>'
     +'<tr><td>12 option</td><td>编号</td><td>Another ＋ 冒号后祈使句 ⟹ tricks 的替身</td></tr>'
     +'<tr><td>18 Finally</td><td>编号</td><td>末段有 assuming 新情形 ⟹ 又一招</td></tr>'
     +'<tr><td>7 unfamiliar</td><td>情形</td><td>不与第四招「人常来的地方」撞</td></tr>'
     +'<tr><td>13 For example</td><td>做法</td><td>signs 复数泛称 → 一个实例</td></tr></table>'
     +'<p class="note">二十个空：情形格 4、做法格 8、结果格 4、编号格 2、铺垫 2——指南文的正文就是动作。</p>',
 traps:['<b>末段 ≠ 总结段</b>：Generally／In short 只配没有新情形的概括段；段首空后紧跟 assuming／if／when 就是又一招（2019·18D Generally 是陷阱）。',
        '<b>Above all 的前提是已经摆出并列几项</b>；一招里的一个例子用 For example（2019·13A Above all 是陷阱）。',
        '<b>一个情形只给一招</b>：7D uncrowded 与第四招「人常来的地方」撞车，19A memories 与第二招「来过这里」撞车。',
        '<b>分工</b>：<a href="#R245">R245</a> 管首段摆两面的文章（段首空是翻账键）；本卡管首段给目录的文章（段首空是编号）；<a href="#R76">R76</a> 管位置——但 Another ___: 这种句首空是名词，不是连接词。'],
 refs:[{p:'2019_完形_没有手机如何走出森林.html',q:'list',label:'2019·完形 · 02+ 四招清单表（编号／情形／做法／结果）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q12',label:'2019·完形·12（Another ___: ⟹ option）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q18',label:'2019·完形·18（末段有新情形 ⟹ Finally，不是 Generally）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q7',label:'2019·完形·7（情形互不重叠 ⟹ unfamiliar，不是 uncrowded）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q13',label:'2019·完形·13（一招里的实例 ⟹ For example，不是 Above all）'}]}
,

{id:'R267', tier:'🟡', qt:'完形 · 全文在「找」某样东西（人迹、证据、出路……），名词／形容词空挂在同一条目标链上', title:'目标链替身：先问全文在找什么，名词空就填属于它的那一样——人迹链 signs of people → gaps ⟹ breaks → artificial light → marks；目的地首尾扣环（navigate back to civilization ⟺ lead you to civilization），末空回首段找动词',
 trig:['同一个目标换着说法反复出现（signs of people／signs of human habitation／the marks we leave）','空格前有 these、后有 such as，或下一句就是列举','末句又出现首段的目的地词（civilization）'],
 flow:'① 读完首段，写下<b>全文要找的东西</b>（本篇＝人）和<b>目的地</b>（civilization）；<br>'
     +'② <b>回指空</b>：these ___ 回上一句找同类（gaps ⟹ breaks）；<br>'
     +'③ <b>举例空</b>：such as 的例子取公约数（fires, streetlights ⟹ artificial）；<br>'
     +'④ <b>概括空</b>：下一句的列举取公约数（trail blazes, tire tracks ⟹ marks）；<br>'
     +'⑤ <b>末空</b>：回首段找目的地前面的动词（navigate back ⟹ lead）。',
 tmpl:'<table class="tk"><tr><th>2019 完形 · 空</th><th>替身</th><th>干扰项偏在哪</th></tr>'
     +'<tr><td>16 breaks</td><td>＝gaps（人砍出的缺口）</td><td>posts 回指不到 · shades 不是人弄的</td></tr>'
     +'<tr><td>17 artificial</td><td>火堆、路灯的公约数</td><td>hidden／mysterious／limited 不说来源</td></tr>'
     +'<tr><td>19 marks</td><td>刻痕、车辙的公约数</td><td>memories 不在地上 · notes 是文字</td></tr>'
     +'<tr><td>5 back · 20 lead</td><td>目的地 civilization 首尾扣环</td><td>away／next · adapt／restrict／expose</td></tr></table>',
 traps:['<b>分工</b>：<a href="#R247">R247</a> 的主题词是一个概念（trust），替身是同义词与形近字；本卡的目标是一类东西，替身是这一类里的<b>具体成员</b>——所以常和 For example／such as／下一句列举一起出。',
        '<b>人造物也可能是陷阱</b>：16A posts（路边的杆子）是人造的，但 these 回指的是 gaps——先过回指，再过「是不是目标」。',
        '<b>目的地词首尾扣环</b>与 2012 完形的首尾镜像同一招：末空卡住，回首段找同一个词前后的搭配。'],
 refs:[{p:'2019_完形_没有手机如何走出森林.html',q:'trace',label:'2019·完形 · 02++ 人迹替身链七环'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q16',label:'2019·完形·16（these 回指 gaps ⟹ breaks）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q17',label:'2019·完形·17（such as 取公约数 ⟹ artificial）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q19',label:'2019·完形·19（下一句列举取公约数 ⟹ marks）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q20',label:'2019·完形·20（首尾扣环 ⟹ lead）'}]}
,

{id:'R268', tier:'🟡', qt:'完形 · 通用（找线索时用）；原刊可查时用来验证', title:'命题人会抹掉答案词在上下文里的原词复现：原刊 get lost off-trail 被删（6 off）、spotting 被换成 identifying（14 spot）——线索是同义词，不是原词；上下文里一个「意思很近却不是它」的词，往往正指着答案',
 trig:['在上下文里找不到与某个选项一模一样的词','上下文有一个与某选项意思很近的词（identifying ↔ spot · get lost ↔ off · gaps ↔ breaks）'],
 flow:'① <b>别指望答案词在别处原样出现</b>——命题人会删掉或换掉它；<br>'
     +'② <b>找同义线索</b>：get lost ⟹ off；look for／identifying ⟹ spot；gaps ⟹ breaks；<br>'
     +'③ <b>反向用</b>：上下文里一个意思相近的词，正好指明答案的方向；<br>'
     +'④ 原刊可查时核一遍改动——<b>改动全在空格以外</b>、恰好落在答案词的复现处，就是命题人在藏答案。',
 tmpl:'<table class="tk"><tr><th>原刊</th><th>考卷</th><th>藏的是</th></tr>'
     +'<tr><td>get lost off-trail</td><td>get lost</td><td>6 off</td></tr>'
     +'<tr><td>spotting a distinctive rock</td><td>identifying a distinctive rock</td><td>14 spot</td></tr>'
     +'<tr><td>gaps … these breaks（原作者自己换词）</td><td>原样保留</td><td>16 breaks 的同义线索</td></tr></table>',
 traps:['<b>不是每处改动都在藏答案</b>：删 power cables、删 (or near)、删 provided you don’t stumble onto a trail first 是为了简洁或让句子站得住。',
        '<b>与 2016 的区别</b>：2016 完形 20 空只有 17 个原词（有改写造出来的空）；2019 20 个全是原词，改动全在空外。',
        '2018 完形研究原稿 looked inside ⟹ 考卷 looking into（同时挖掉 15 inside）是同一现象，但原刊 403，改动者无法确认。',
        '<b>阅读题同理</b>：<a href="#R1">R1</a>——正确项是原文的同义替换；完形里线索与答案之间同样是同义替换。'],
 refs:[{p:'2019_完形_没有手机如何走出森林.html',q:'orig',label:'2019·完形 · 02+++ 原刊 vs 考卷（20 个原词、两处藏答案）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q6',label:'2019·完形·6（off-trail 被删，线索是 get lost）'},
       {p:'2019_完形_没有手机如何走出森林.html',q:'q14',label:'2019·完形·14（spotting 被换成 identifying）'},
       {p:'2018_完形_为何信任是与生俱来的本能.html',q:'orig',label:'2018·完形 · 02++++ 考卷 vs 研究原稿（looked inside ⟹ looking into）'},
       {p:'2016_完形_柬埔寨的婚俗.html',q:'edits',label:'2016·完形 · 原文 vs 考卷（20 空 17 个原词）'}]},
{id:'R269', tier:'🔴', qt:'新题型 · 排序题（议论文、评论、驳论：七段里有「别人错在哪」、有「更好的做法」、有「你该怎么做」，却几乎没有一个年份）', title:'议论文排序先贴语气标签：诊断错误看法用<u>虚拟／条件</u>（would … if、If you see …），示范用<u>假设举例</u>（Imagine、suppose），立原则用 <u>need to</u>，布置动作用<u>祈使句</u>，许诺结果用 <u>can</u>——语气只往「做」的方向走，按它排队',
 trig:['七段里几乎没有年份，满是 argument／view／should／need to','有段落开口就是 X would be right if …／If you see … as …','有一段通段祈使句（Next time you …, formulate … ask …）'],
 flow:'① <b>逐段看段首和主干动词</b>，贴一个语气标签：引述 · 虚拟／条件 · 假设举例 · need to · 祈使 · can；<br>'
     +'② <b>按「引述 → 虚拟／条件 → 假设举例 → need to → 祈使 → can」排队</b>：前面在诊断（别人错在哪、错了会怎样），中间在示范，后面在布置，最后许诺；<br>'
     +'③ <b>同一个标签的两段放在一起</b>，再用复数回指、also 定先后（2019 的 G、F 都在说「如果那样看争论」，F 首 These views … also 定 G 在前）；<br>'
     +'④ <b>标签只分堆，接缝还要靠回指词来钉</b>（<a href="#R270">R270</a> 类名回指、<a href="#R271">R271</a> 比较预设基准）。',
 tmpl:'<table class="tk"><tr><th>2019 七段</th><th>语气标签 ⟹ 论证动作</th></tr>'
     +'<tr><td>B（41）</td><td>Dale Carnegie wrote … but it depends on a mistaken view ⟹ <b>引述 ＋ 判断：立靶</b></td></tr>'
     +'<tr><td>G（42）</td><td>would be right if … were · would be almost as dismal if ⟹ <b>虚拟：批驳一</b></td></tr>'
     +'<tr><td>F（给定）</td><td>If you see a conversation as … you can win by cheating ⟹ <b>条件：批驳二</b></td></tr>'
     +'<tr><td>E（43）</td><td>Imagine that … · In contrast, suppose … ⟹ <b>假设举例：立论</b></td></tr>'
     +'<tr><td>D（44）</td><td>Of course … Still, we need to … ×3 ⟹ <b>让步 ＋ need to：原则</b></td></tr>'
     +'<tr><td>C（给定）</td><td>formulate · ask · Spell out · Assess · Raise · listen ⟹ <b>祈使：动作</b></td></tr>'
     +'<tr><td>A（45）</td><td>can help you win · If we readjust …, then we change ⟹ <b>can：收束</b></td></tr></table>'
     +'<p style="margin-top:8px">结果 <b>B ｜ G F ｜ E ｜ D ｜ C ｜ A</b>：破 → 立 → 让与规 → 行 → 合。</p>',
 traps:['<b>和 <a href="#R248">R248</a> 是同一个思路</b>：说明文看<b>时态</b>分层（2018 总述层包住叙事层），议论文看<b>语气</b>分堆——都是先看段首句的动词形态，先分堆再排队。',
        '<b>让步段紧跟示范段</b>：D 首 Of course, many discussions are not so successful 先退一步，再 Still 转回 need to——让步退的是「刚才那个成功的例子」，所以 D 在 E 后，不在批驳段后（<a href="#R271">R271</a>）。',
        '<b>末段的 can 要能「收」</b>：A 的 can help you win ＋ If we readjust …, then we change 同时收回全文的 win 与 view 两条线；只有 can、收不回线的段，不够当末段。',
        '<b>黄皮书把 E、D、C 并成「论述正确的争论观」一块</b>——那样就看不出 44 为什么是 D 不是 A；按语气拆成「示范 → 原则 → 动作」三步，44、45 才各只剩一个候选。'],
 refs:[{p:'2019_新题型_如何赢得每一场争论.html',q:'mood',label:'2019·新题型 · 02+++ 语气阶梯表（虚拟 → 假设举例 → need to → 祈使 → can）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q44',label:'2019·新题型·44（need to 的原则清单 → C 的 None of this）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q45',label:'2019·新题型·45（can ＋ 真实条件收束全文）'}]},

{id:'R270', tier:'🔴', qt:'新题型 · 排序题／选句填空（段首是 These／This／None of this ＋ 名词：These views、These tools、these tricks、This kind of thinking）', title:'类名回指按「类」找上家：These views 要两种以上<u>看法</u>、These tools 要一串能照着做的<u>动作</u>、None of this 要一串<u>要求</u>、these tricks 是<u>伎俩</u>——类名对不上，原词再像也不是邻居；两句骨架相同、类名相反（tricks ↔ tools），是作者埋的<u>镜像</u>，不是接缝',
 trig:['段首 These／This ＋ 抽象名词（views、tools、tricks、measures、problems）','段首 None of this／All of this／This kind of thinking','两段里有一对句子骨架几乎一样，只差一个名词'],
 flow:'① <b>把回指名词的「类」写下来</b>：看法 · 动作 · 要求 · 伎俩 · 问题 · 办法；<br>'
     +'② <b>去七段里找「正好是一串这一类东西」的段</b>——数量也要对（复数要两个以上）；<br>'
     +'③ 回指词带 <b>also／too</b> 时，上家还得<b>已经说过一件同类的事</b>（These views … also undermine reason ⟹ 上家已经说过一种害处）；<br>'
     +'④ <b>两段骨架相同但类名相反</b>（伎俩 vs 工具）⟹ 首尾对照，隔开放。',
 tmpl:'<table class="tk"><tr><th>回指语（2019）</th><th>要什么类 ⟹ 上家</th></tr>'
     +'<tr><td>These views of arguments also（F 首）</td><td>两种以上看法 ＋ 已说过一种害处 ⟹ <b>G</b>：fights · competitions；两败俱伤、人人回避</td></tr>'
     +'<tr><td>None of this will be easy（C 首）</td><td>一串要做、做起来难的要求 ⟹ <b>D</b>：need to ×3 ＋ requires you to</td></tr>'
     +'<tr><td>These tools（A 首）</td><td>一串能照着做的动作 ⟹ <b>C</b>：formulate · ask · Spell out · Assess · Raise · listen</td></tr>'
     +'<tr><td>these tricks（F ⑤）</td><td>伎俩 ⟹ F 本段：作弊 · 烂论证 · 骂人蠢 · 笑人无知</td></tr></table>'
     +'<p style="margin-top:8px">⟹ A 首 These tools can help you win 与 F 末 they (tricks) can help you win 骨架相同、类名相反 ⟹ <b>镜像</b>，A 不能进 43。</p>',
 traps:['<b>镜像不是交棒</b>：<a href="#R249">R249</a> 讲尾首复现先问「交棒还是预告」，这是第三种——<b>镜像</b>：作者把收尾写成前文某句的反面（伎俩 → 工具），好让读者看见转变。判据只有一个：回指名词的类对不对得上。',
        '<b>命题人会删掉现成的名字</b>：原刊 C 末本有 This method will require effort …，A 的 These tools 可以直接对 This method；考卷删了，读者只能自己把七个祈使动词归成「工具」。',
        '<b>和 <a href="#R196">R196</a> 一上一下</b>：R196「Such ＋ 类名」是往下找空格内容；本卡是往上找上家——类名两头都要对上。',
        '<b>view 有两个类</b>：view of arguments（争论观）与 their views（对方的观点）同在 F 段——These views of arguments 只能回指前一类。'],
 refs:[{p:'2019_新题型_如何赢得每一场争论.html',q:'seams',label:'2019·新题型 · 02++ 红框（F ⑤ ↔ A ① 同词镜像）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q45',label:'2019·新题型·45（These tools ← C 的七个祈使动词）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q42',label:'2019·新题型·42（These views … also ← G 的两种看法）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q43',label:'2019·新题型·43（A 放 43 为什么错）'}]},

{id:'R271', tier:'🟡', qt:'新题型 · 排序题（段首是比较级或程度词：a better way、a more serious problem、not so successful、even worse）', title:'段首比较预设基准：a better way、not so successful 这类开口的段，被比的那一个必须在<u>紧挨的上一段</u>，而且往往就在上段<u>末句</u>——上段末句若给自己打了折扣（in one way、in a sense、to some extent），下段多半拿「更好的」来比',
 trig:['段首 There is a better way …／A more … approach …','段首 Of course, many X are not so …／Not all X are so …','上一段末尾有 in one way／in a sense／to some extent 这类限定语'],
 flow:'① 段首一出现<b>比较级、so、such、even</b>，先问「跟谁比」；<br>'
     +'② 去找<b>刚刚</b>给出这个基准的段——一般就是它的末句；<br>'
     +'③ <b>基准要同类</b>：a better way 比的是「一种赢法」，not so successful 比的是「一场成功的讨论」；<br>'
     +'④ <b>反向用</b>：上段末句带限定语（in one way），就等于预告下段要给「更好的」。',
 tmpl:'<table class="tk"><tr><th>2019 接缝</th><th>基准在哪</th></tr>'
     +'<tr><td>F 末 help you win—in one way ⟶ E 首 There is a better way to win arguments</td><td><b>限定 → 比较</b>：基准＝F 里那种打了折扣的赢</td></tr>'
     +'<tr><td>E 末 Now we can understand each other’s positions ⟶ D 首 many discussions are not so successful</td><td><b>程度回指</b>：基准＝E 末那场成功的讨论</td></tr></table>',
 traps:['<b>「限定 → 比较」不是「让步 → 转折」</b>：黄皮书把 F → E 叫「让步—转折」，本页商榷——本文的让步转折在 D 首 Of course … Still；两种逻辑分清，44 才不会被 A 抢走。',
        '<b>基准可能被删薄</b>：原刊 E 与 D 之间有一整段「你说服了我、我反而赢了」，那才是 not so successful 最直接的基准；考卷删了，只剩 E 末一句撑着——仍然够用，但证据降到「中」。',
        '<b><a href="#R79">R79</a> 首段排除法要加这一类</b>：比较级、so、such 开口的段都欠上文一个基准，不能当首段（2019 的 E、D）。'],
 refs:[{p:'2019_新题型_如何赢得每一场争论.html',q:'q43',label:'2019·新题型·43（in one way → a better way）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'q44',label:'2019·新题型·44（not so successful 回指 E 末）'},
       {p:'2019_新题型_如何赢得每一场争论.html',q:'book',label:'2019·新题型 · 03+ 商榷 1（限定 → 比较 vs 让步 → 转折）'}]}

];

window.TRICK_READ_META = {
  subject:'英语一 · 阅读',
  source:'2022 Text 1–4 · 2007 Text 1–4 · 2008 Text 1–4 · 2009 Text 1–4 · 2010 Text 1–4 · 2011 Text 1–4 · 2012 Text 1–4 · 2013 Text 1–4 · 2014 Text 1–4 · 2015 Text 1–4 · 2016 Text 1–4 · 2017 Text 1–4 · 2018 Text 1–4 · 2019 Text 1–4 · 2007/2008/2009/2010/2011/2012/2013/2014/2015/2016/2017/2018/2019/2022 新题型 · 2008/2009/2010/2011/2012/2013/2014/2015/2016/2017/2018/2019 完形',
  note:'提炼自本复盘中心各篇阅读真题复盘页的技巧/干扰项分析，随复盘页增长。'
};
