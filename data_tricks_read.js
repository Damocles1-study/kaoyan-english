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
        '<b>2012·T4·38C</b>：四个选项里唯一有原文词根的 increased（pay increases）偏偏是错的——命题人给「原词复现」那一格配了一个方向相反的副词 excessively（原文 modest）；正确项 indirectly augmented 反而两词都零词源。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T3_艺术与科学.html',q:'q34',label:'T3·34'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36'},{p:'2007_T2_智力测试的边界.html',q:'q26',label:'2007·T2·26'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q32',label:'2012·T3·32A（inspection 恰是 scrutiny 的同义词，却丢了 collective——同义替换是必要不充分，见 R121）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q38',label:'2012·T4·38（唯一有词根的 C 是错的）'}]},

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
        '<b>凡选项要调动你的<u>课外知识</u>才成立，一律警惕。</b>2008·T3·31 的 D <code>assess the achievements of famous NBA players</code> 靠的是读者「张伯伦是历史级巨星」这个常识——<b>原文对他只有一句客观的身高描述，战绩一个字没提。</b>'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q26',label:'2010·T2·26B（反用：拿①段美林的例子 asset allocation 当「引发关注的原因」——例子只为论点作证，不能反过来充当论点）'},
       {p:'2022_T3_艺术与科学.html',q:'q32',label:'T3·32'},{p:'2007_T1_刻意练习造就高手.html',q:'q21',label:'2007·T1·21'},{p:'2008_T3_美国人的身高极限.html',q:'q31',label:'2008·T3·31（事例即靶子）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（事例即反差）'}]},

{id:'R4', tier:'🔴', qt:'作者态度 / 主旨 / 末段主旨', title:'先分清「谁在说话」，再抓情态词喊话句',
 trig:['the author thinks / suggests','末段','It can be concluded'],
 flow:'① <b>作者发声段＝没有引号、没有人名</b>的段落（那是作者自己评论，不是转述人物）；'
     +'② <b>首段形容词群</b>＝全文情感基调，先定调；③ <b>末段</b>盯 <code>needs to / must / should</code> 等情态词所在句＝作者最后的喊话。',
 tmpl:'问 the author → 只看作者发声段；问某人 → 只看那人的话。两者混用就是最大的坑。',
 traps:['拿人物的话当作者态度：T1·24 问 the author，答案在无引号的⑥段，不是 van Oosten 的话。',
        '<b>把「现状陈述段」当「作者立场段」</b>：2007·T2 第三段陈述「IQ 分数仍是衡量标准」，那是<b>被批判的靶子</b>，不是作者赞同——30 题 A 项专坑读错这一段的人。',
        '<b>句末的 <code>, argues X.</code> 是身份标签</b>：引述倒装把说话人甩到句末，一看到就要意识到「这一整句是 X 说的，不是作者说的」。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q24',label:'T1·24'},{p:'2022_T2_Z世代与学位.html',q:'q26',label:'T2·26'},{p:'2022_T3_艺术与科学.html',q:'q35',label:'T3·35'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q25',label:'2011·T1·25（四个说话人，25C 把 Alex Ross 的信心安给作者）'}]},

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
        '<b>⭐做完的最后一个动作（30 秒，能救回一道题）</b>：把选中的那项<b>读出主语</b>——「我选的这句话，主语是谁？原文里这个主语发生的是<b>什么程度</b>的变化？」2007·T3·31 问完这两句，A 的两个毛病（主语错 + 程度超）会同时暴露。'],
 refs:[{p:'2007_T3_中产家庭的风险转嫁.html',q:'q31',label:'2007·T3·31'},{p:'2007_T3_中产家庭的风险转嫁.html',q:'q32',label:'2007·T3·32'},{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2022_T4_解雇保护悖论.html',q:'q39',label:'T4·39'},{p:'2007_T2_智力测试的边界.html',q:'q28',label:'2007·T2·28'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q40',label:'2008·T4·40（追根 vs 中间环）'}]},

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
        '<b>部分否定别读成全盘否定</b>：<code>may not assess <u>all</u></code>、<code>do <u>not necessarily</u> predict</code> ＝「未必全部」，不是「完全不能」。not + all/both/every/always/necessarily 一律是部分否定。'],
 refs:[{p:'2022_T2_Z世代与学位.html',q:'q30',label:'T2·30'},{p:'2022_T4_解雇保护悖论.html',q:'q38',label:'T4·38'},{p:'2022_T1_塑料文物保护.html',q:'q25',label:'T1·25'},{p:'2007_T1_刻意练习造就高手.html',q:'q24',label:'2007·T1·24'},{p:'2007_T2_智力测试的边界.html',q:'q29',label:'2007·T2·29'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q30',label:'2012·T2·30C（推一步是「申请可能受影响」，推两步才是「撤回」）'}]},

{id:'R7', tier:'🟡', qt:'细节题（题干限定段落）', title:'题干限定第 N 段，别处的「对信息」也是错项',
 trig:['In Paragraph 5','According to Para X','题干明确点段号'],
 flow:'题干限定段落时，<b>只在该段找</b>；其他段落里即使有说得对的信息，放进选项也是<b>错的</b>——专为「不看限定」的人挖的坑。',
 tmpl:'答对此类题的动作：先在原文<b>圈出题干指定的段号</b>，答案定位不出这一段。',
 traps:['段落错位：T2·29 的 B 是⑥段的 up-skilling，题干却限定 Paragraph 5 → 错。',
        '2007·T2·27 限定 Paragraph 3，D 项却取材于末段的 important elements，且与第二段的<b>设问句</b>（「智力有多少<b>能够</b>被明确？」＝尚无定论）正相反。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'col3',label:'2011·T3·33（限定段只限取材段，不限佐证段）'},{p:'2022_T2_Z世代与学位.html',q:'q29',label:'T2·29'},{p:'2007_T2_智力测试的边界.html',q:'q27',label:'2007·T2·27'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q21',label:'2011·T1·21B（题干写死 Paragraph 1，suspicion 取料越到了第二段）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q25',label:'2012·T1·25C（⑤❶ enormous influence 为真，却不在末段）'}]},

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
        '<b>2012·T4 补两例</b>：37B 把 mostly／a quarter 升格成 is required（一个比例数字就能判死必要条件）；38A illegally secured 凭空造了一根原文没有的「合法性」轴。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T2_Z世代与学位.html',q:'q28',label:'T2·28'},{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2007_T1_刻意练习造就高手.html',q:'q23',label:'2007·T1·23'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（常识陷阱）'},{p:'2009_T1_习惯与创新.html',q:'q21',label:'2009·T1·21（偷换语义重心）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q26',label:'2009·T2·26（客观⟹主观）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q29',label:'2009·T2·29（原词拼接）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q26',label:'2011·T2·26（行为→人品：三个干扰项全是人格标签）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q31',label:'2012·T3·31B（Opportunities for … abound 的「可能」升格成「特征」）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q37',label:'2012·T4·37（B 描述升格为必要条件）'}]},

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
 traps:['<b>别拆词根、别凭字面联想。</b>2010·T2·28 的 <code>about-face</code>（军事口令「向后转」，face ＝ 面向）被 D 项 <code>enhancement of <b>dignity</b></code> 用 <code>lose face</code>／<code>save face</code> 这条<u>真实存在</u>的搭配来钓——<b>联想是真的，所以更危险。破解只能靠上下文的结构信号。</b>',
        '<b>用字典义答题</b>：mania 的医学义是「躁狂症」，照搬就会选 hysteria；词义题考的永远是<b>语境义</b>。',
        '把生词当拦路虎：生词所在句往往<b>自带注解</b>（同位语/举例/对比），先读完整句再看选项。',
        '强度稀释项常成对出现（fun 与 excitement 是同一种错法），认出这一对可一次排两个。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q33',label:'2011·T3·33C（campaign 被读成“竞赛”）'},{p:'2010_T2_商业方法专利的威胁.html',q:'q28',label:'2010·T2·28（词义题标本：找<b>对立结构</b>——because 引出解释 ＋ itself 强调主体同一 ＋ 一对反义动作 Curbs ↔ introduced，四项里只有「转变」装得下）'},
       {p:'2007_T1_刻意练习造就高手.html',q:'q22',label:'2007·T1·22'},
       {p:'2011_T2_高管裸辞潮.html',q:'q28',label:'2011·T2·28（超纲词 poach：同段同根词 head<u>hunt</u>ers 就是答案）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q26',label:'2012·T2·26（极性锁在同句 justified outrage ＋ 下一段 Instead 改写，见 R120）'}]},

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
        '<b>2012·T4·40</b>：Donahue 的 is bad for 与作者的 may be a much bigger problem 都是明确而克制的负面 ⟹ disapproval 这一档；appreciation 取让步前半、tolerance 取折中、indifference 零词源。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q33',label:'2011·T3·33A/33D（constant 与 deserve all 写死了）'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30'},{p:'2022_T1_塑料文物保护.html',q:'q24',label:'T1·24'},{p:'2022_T3_艺术与科学.html',q:'q35',label:'T3·35'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q40',label:'2010·T4·40（同情 &gt; 满意的完整推导）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q25',label:'2011·T1·25（doubtful 的三段证据链 ＋ 态度词能不能选清单）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q40',label:'2012·T4·40（disapproval 的强度档）'}]},

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
 refs:[{p:'2007_T4_数据泄密的公司.html',q:'q40',label:'2007·T4·40'},{p:'2007_T2_智力测试的边界.html',q:'q29',label:'2007·T2·29'}]},

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
       {p:'2012_T4_公共部门工会的膨胀.html',q:'col4',label:'2012·T4 · 02++++ 专栏（夹心例子）'}]},

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
        '<b>一段一项、不重复</b>：撞车时（44 与 43 都能扯上 skills）回去比<b>哪一段的证据更硬</b>，硬的那段留住选项。'],
 refs:[{p:'2007_新题型_家长如何帮孩子.html',q:'q42',label:'2007·新题型·42（首句陷阱）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q43',label:'2007·新题型·43（复现陷阱）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q44',label:'2007·新题型·44（反向引申）'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022·新题型（观点匹配对照）'}]},

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
        '<b>2012·T4</b>：作者全篇不用 I，立场全靠词——fearsome · patrolled（比喻动词）· most notoriously（情感副词）· “backloaded”（引号）· already generous · fat pay packets；读完③段就在卷边写「作者站在工会对面」，38D／39A／40B 三个褒向或错向的选项一起出局。'],
 refs:[{p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（三种标记齐全）'},{p:'2008_T1_女性与压力.html',q:'q21',label:'2008·T1·21（反语放倒 C 项）'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30（态度题）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'col6',label:'2012·T4 · 02++++++ 专栏（极性翻转六例）'}]},

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
        '<b>绝对化表述先扣分</b>：同题 A 的 <code>cared about <b>nothing but</b> making money</code>——而前文明说她拼命是为了 <code>get the college degree</code>、<code>that was my <b>escape</b></code>（上学是摆脱困境的出口）。'],
 refs:[{p:'2008_T1_女性与压力.html',q:'q24',label:'2008·T1·24'},{p:'2007_T4_数据泄密的公司.html',q:'q40',label:'2007·T4·40（段落主线优先）'}]},

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
        '<b>2012·T4·36D</b>：government workers（政府雇员）里的 government 只是定语，选项把它升成主语 the government（政府本身），再编一段「关系改善」——定语升主语也是一种主体偷换。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q34',label:'2011·T3·34B（劝人抵制的是消费者，不是丰田）'},{p:'2010_T2_商业方法专利的威胁.html',q:'q29',label:'2010·T2·29C（换义＋换主语：缩小保护的是<b>最高法院</b>、对象是<b>所有</b>专利权人，与「商业方法专利怎么样」无关）'},
       {p:'2008_T2_科学出版的在线转向.html',q:'q27',label:'2008·T2·27（同句两名词）'},{p:'2008_T2_科学出版的在线转向.html',q:'q29',label:'2008·T2·29（多模式并列）'},{p:'2008_T2_科学出版的在线转向.html',q:'q30',label:'2008·T2·30（趋势 vs 推手）'},{p:'2007_T1_刻意练习造就高手.html',q:'q23',label:'2007·T1·23（偷换主语）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（制度 vs 人群）'},{p:'2008_完形_高智商与遗传疾病.html',q:'q13',label:'2008·完形·13（插入语造假主语）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'q33',label:'2010·T3·33C／32C（主体被换两例）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q38',label:'2010·T4·38B（压力的源头被换成「同行」）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q40',label:'2010·T4·40B（投资者对银行 ⟹ 作者对准则制定者）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q30',label:'2011·T2·30A/B（主体错：写的是二把手，CEO 只是他们想去的地方）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22D（骂公共健康运动的负面词被安给广告）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q26',label:'2012·T2·26A（谴责是佛州的反应，被挪成公司的动作）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q31',label:'2012·T3·31B（self-deception 的 self- 被拿掉，受骗者从自己换成别人）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q36',label:'2012·T4·36（D 定语升主语）'}]},

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
        '<b>概括性答案 ≠ 过度推断</b>：A 项 <code>provides an easier access to scientific results</code> 是对②④两段的合理概括；而 C、D 两项拿③段首句「知识的价值取决于广泛传播与便捷获取」去造「强调知识重要性」「便利公共投资」，那是<b>移位</b>不是概括。<b>判据：概括是「把几处说的同一件事合起来说」，移位是「把一句话的中心词换掉」。</b>'],
 refs:[{p:'2008_T2_科学出版的在线转向.html',q:'q28',label:'2008·T2·28（online publication 零原词）'}]},

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
        '<b>主旨题做完要回头检验前几题</b>：本篇主旨是「出版方式在变」，于是 26 答「传统流程」（旧）、28 答「获取更便捷」（新的优势）、29 答「作者付费」（新模式细则）——<b>四道题全在一条主线上。有一道对不上，那道多半选错了。</b>'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q35',label:'2011·T3（No longer. 两个词的今昔分水岭）'},{p:'2010_T2_商业方法专利的威胁.html',q:'col1',label:'2010·T2 · 02+（「今」这一端本身还分成「正在做的」与「还没做的」——第二道缝见 <a href="#R61">R61</a>）'},
       {p:'2008_T2_科学出版的在线转向.html',q:'q30',label:'2008·T2·30（今昔对比主旨题）'},{p:'2008_T2_科学出版的在线转向.html',q:'q26',label:'2008·T2·26（「昔」段的段落主旨）'},{p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（对照：空间对比）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q25',label:'2010·T1·25（今昔对比的标题题）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'col4',label:'2010·T1 · 02++++ 专栏（五道题的刀法总账）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q31',label:'2012·T3·31（理想 vs 现实 ＝ 昔 vs 今的同构：idealized version 被 But 否掉，C／D 全出在理想版）'}]},

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
        '<b>2010·T3·33D 是最省事的一次范围校验</b>：原文 <code><b>a few</b> celebrities like Oprah Winfrey</code> ⟹ 选项 <code><b>most</b> celebrities</code>。⚠️ <b>更根本的是：就算量词不改它也不能选</b>——<b>这句话是论证的<u>前提</u>（先把名人排除掉），不是题干问的「研究者<u>观察到</u>的发现」</b>（⟹ 与新卡 <a href="#R65">R65</a> 同用）。'],
 refs:[{p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33（我错的那题）'},{p:'2008_T3_美国人的身高极限.html',q:'q34',label:'2008·T3·34（同一把刀第二次）'},{p:'2007_T4_数据泄密的公司.html',q:'q40',label:'2007·T4·40'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（第三次栽）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q37',label:'2008·T4·37（同篇第二次）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'q33',label:'2010·T3·33D（a few ⟹ most）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q21',label:'2012·T1·21C（个人的不良行为被拔高成社会进步的障碍）'}]},

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
        '<b>做完主旨题要回头检验它</b>：2008·T3 的主旨是「美国人没长高」，而 33A 说「有人把美国人的平均身高拉高了」——<b>与主旨直接相悖。这道检验我当时没做。</b>'],
 refs:[{p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30（对照：态度题）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q30',label:'2012·T2·30A（观点 ＋ 例子 ＋ 建议三句合成）'}]},

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
        '<b>反向引入的事例，末尾常有一个「抖包袱」的结构</b>（破折号 / 分号 / 句末从句）。2008·T4①段 <code>…transplant nine teeth into his jaw<b>—having extracted them from the mouths of his slaves</b></code>——<b>前半句平淡，最后五个词才是刀。见到这种「延迟揭露」，基本就是反向引入。</b>'],
 refs:[{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（我错的那题）'},{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36（对照：正向引入）'},{p:'2008_T3_美国人的身高极限.html',q:'q31',label:'2008·T3·31（对照：事例即靶子）'}]},

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
        '<b>2012·新题型 ⑧❷</b>：引号第四功能（命名）的又一例——<code>the concept of “stickiness”—creations and experiences to which others adhere</code>，引号 ＋ 破折号就地下定义。<b>被命名的那一处就是这个词的「出生点」，任何裸用它的句子都只能站在出生点之后</b>——多余项 B（add stickiness）正是死在这里（⟹ R54 反向 · <a href="#R136">R136</a>）。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'col3',label:'2010·T2（同一篇里三种引号：「a very big deal」引用评价／「reconsider」引用指令原话／「inventions」作者的排斥）'},
       {p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（引用 + 排斥）'},{p:'2008_T1_女性与压力.html',q:'q21',label:'2008·T1（反语 opportunities）'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36（比喻 time bomb）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'s10',label:'2010·T3 · s10（引号＝命名，破折号给定义）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s5',label:'2010·T4 · s5（politely calls ＝ 反讽的样板）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q37',label:'2010·T4·37A（把被美化的「管理层判断力」读成了「作用削弱」）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q24',label:'2011·T1（三处引号刚好三种功能：引用原话／排斥／引用他人评价）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q35',label:'2012·T3·⑤❶（credibility “happens”：引号的第四种功能——标记非常规用法）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'col3',label:'2012·T4 · 02+++ 专栏（引号词的自带释义）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型（“stickiness” 的命名点判了 B 出局）'}]}
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
     +'<tr><td><b>标题匹配</b><br>（2007）</td>'
     +'<td>Directions 里出现 <code>heading</code>。<b>第一步：看七个标题的共同句式</b>，推出每段在写什么（2007 全是祈使句 ⟹ 每段＝一条建议）。</td>'
     +'<td><b>段落主旨的概括能力</b>；正确项常是原文<b>没出现</b>的上位词。<b>8–10 min</b>，不能自查。</td></tr>'
     +'<tr><td><b>观点匹配</b><br>（2022）</td>'
     +'<td>Directions 里出现 <code>match each person with his/her statement</code>。<b>第一步：给每个人贴立场标签</b>（支持/反对/中间），只看每段前两句。</td>'
     +'<td><b>立场 ＋ 同义替换</b>；最大坑是<b>主语偷换</b>。<b>8–10 min</b>，立场可复核。</td></tr>'
     +'<tr><td><b>选句填空</b><br>（2008 · 2009 · <b>2012</b>）</td>'
     +'<td>Directions 里出现 <code>some segments have been removed</code>。<b>第一步：给每个空定位形态</b>（段首/段中/段末）；<b>2012 起再加一步：每空先读下一句找尾钩</b>（<a href="#R136">R136</a>）；<b>认线</b>（流程／人物／论证，<a href="#R138">R138</a>）。</td>'
     +'<td><b>衔接与连贯</b>；正确项必带<b>唯一词</b>或<b>硬指代</b>。<b>6–9 min</b>，<b>唯一能自查</b>（填完通读验接缝）。</td></tr>'+'<tr><td><b>排序题</b><br>（<b>2010</b>）</td>'+'<td>Directions 里出现 <code>choose the most suitable <b>paragraphs</b>… fill them into the numbered <b>boxes</b></code>。<b>第一步：先做被「已给定段」夹住的那个空，再用段首排除法定首段</b>（<a href="#R78">R78</a>／<a href="#R79">R79</a>）。</td>'+'<td><b>段落顺序</b>；证据只长在<b>段首与段尾</b>共 14 个接口（<a href="#R80">R80</a>）。<b>8–10 min</b>，<b>与选句填空并列为仅有的两种能自查的变体</b>。</td></tr></table>'
     +'<p style="margin-top:8px"><b>四种变体至此全部实做过一遍</b>（2007 标题 5/5 · 2022 观点 5/5 · 2008 选句 5/5 · <b>2009 选句 3/5</b> · 2010 排序 5/5 · <b>2011 排序 5/5</b> · <b>2012 选句 5/5</b>）。<b>认完变体还要认<u>形态</u>：排序题分「有多余项」（2010，6 格 7 项）与「零多余项」（2011，7 格 7 项）两种，打法与验收都不同 ⟹ <a href="#R107">R107</a>。</b>四方对照的最新版见 <a href="2010_新题型_欧洲食杂零售商转战批发.html">2010 新题型页 · 04 节</a>，上一版在 <a href="2009_新题型_文化人类学理论.html">2009 新题型页 · 04 节</a>。</p>',
 traps:['<b>用错手感是 Part B 最贵的失误</b>：拿“找复现词”的手感去做标题匹配 ⟹ 掉进复现陷阱（2007 的 A、G 两个多余项都有词面呼应）；'
        +'拿“概括段落主旨”的手感去做选句填空 ⟹ 忽略指代与照应，43/44 这种连体空必翻车（<b>2009 我正是这么翻的，见 <a href="#R55">R55</a></b>）。',
        '<b>四种变体的多余项造法各不相同</b>：标题匹配用<b>段内局部信息</b>做标题；观点匹配造一句<b>没人说过的话</b>；'
        +'选句填空则是<b>内容对但没有它的坑</b>（阶段错位）或<b>与正确项共用专名</b>；<b>排序题（2010）则专拿<u>复现词</u>钓鱼——多余项 C 的段首段尾各放一个回指词，却整段不含全文主线名词</b>（见 <a href="#R81">R81</a>）。'],
 refs:[{p:'2008_新题型_如何写作初稿.html',q:'',label:'2008 · 选句填空（含三方对照表）'},{p:'2007_新题型_家长如何帮孩子.html',q:'',label:'2007 · 标题匹配'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022 · 观点匹配'},{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010 · 排序题（四方对照最新版）'},{p:'2012_新题型_下载与上传的隐秘战争.html',q:'three',label:'2012 · 选句填空第三篇（三种线对照）'}]},
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
        '这类句子几乎总出现在<b>段末或文末</b>，位置本身就是信号：它是<b>收口</b>，负责把整段的问题接到解决方案上。'],
 refs:[{p:'2009_T1_习惯与创新.html',q:'q25',label:'2009·T1·25（Claude 在此翻车）'}]},

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
        '🔗 <b>与新卡 <a href="#R70">R70</a> 是一对，别混</b>：<b>本卡（R34）是「定语挂错了中心词」，两处词都真实存在，错在<u>搭配</u>，靠「把定语＋中心词当整体回搜」来破；R70 是「切分点整个挪了位」，把先行词与从句主语粘成一个假复合名词，错在<u>断句</u>，靠「数缺口」来破。</b><b>2010·T4·36C <code>the price managers</code> 属于后者。</b>'],
 refs:[{p:'2009_T1_习惯与创新.html',q:'q25',label:'2009·T1·25 的 C 项'},{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36B（第九类对照）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col2',label:'2010·T4 · 02++ 专栏（R70 与 R34 的分界）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q27',label:'2012·T2·27B（Vermont legislature 被安上 federal 定语）'}]},

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
        +'<b>R37 管「这句话的<u>性质</u>变了没有」</b>。⟹ 选项与原文之间的四种错位：<b>主体 · 范围 · 所指 · 性质</b>。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q31',label:'2011·T3·31C（“我热衷”被换成“东西优质”）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q26',label:'2009·T2·26（C、D 双杀）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'q28',label:'2009·T2·28（C 项 reveal→use）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'col1',label:'2009·T2 · 02+ 专栏「主刀三连」'},
       {p:'2011_T2_高管裸辞潮.html',q:'q29',label:'2011·T2·29C（不光彩正在淡去≠他们更在意名声）'}]},

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
        '<b>2010·T4 里三个原词拼接项，各拼各的</b>：<b>37C</b> <code>the banks’ <b>long-term asset losses</b></code>——原文③❷是 <code>flexibility in <b>recognizing losses on long-term assets</b></code>，<b>「认定损失时更灵活」被拼成「导致损失」</b>；<b>39A</b> <code><b>market price indicators</b></code>——这个词组原文根本没有，是把 <code>market prices</code> 与 <code>reflect</code> 杂糅出来的；<b>40B</b> <code>skepticism</code>——词根在文中（<code>investors are <b>skeptical</b></code>），<b>但主体被换掉</b>。<b>⟹ 态度题里尤其要用这条：选项的态度词若能在原文找到同词根的词，先查那个词是「谁对谁」的。</b>'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q27',label:'2010·T2·27B（<code>a very big</code> 来自②❸、<code>transaction</code> 来自③❷，两句话被拼成一个选项）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'q29',label:'2009·T2·29（D 项 patent evaluation）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'col2',label:'2009·T2 · 02++ 专栏「词都在，组合不在」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col4',label:'2009·T3 · 02++++ 专栏（四处拼接，跨句级）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q35',label:'2009·T3·35（B、D 两个拼接项）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q21',label:'2010·T1·21（C 项 high-quality newspapers）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q25',label:'2010·T1·25（C 项 Journalism）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q37',label:'2010·T4·37C（记账自由度 ⟹ 亏损本身）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q39',label:'2010·T4·39A（market prices ＋ reflect 杂糅成 market price indicators）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22A（②段的 recruit ＋ ③段的 advertisers）'}]},

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
        '<b>与 R18（先判作者站没站队）配合用</b>：R18 定<b>方向</b>，R40 定<b>范围与力度</b>。'],
 refs:[{p:'2011_T3_五种媒介的家谱.html',q:'q35',label:'2011·T3·35（覆盖度：B/C/D 各只盖一两段）'},{p:'2010_T2_商业方法专利的威胁.html',q:'q30',label:'2010·T2·30（四项对象全对，胜负手在<b>阶段</b>：looming 迫近 vs prevailing 已盛行；C 拿论据当论题且文中有<b>两个</b>案子）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'q30',label:'2009·T2·30'},
       {p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（中性标题 vs 有立场的标题）'},{p:'2010_T1_报纸艺术评论的衰落.html',q:'q25',label:'2010·T1·25（两要素：对象 ＋ 发生了什么）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q30',label:'2011·T2·30（三查不够用，要再加「主体」与「文体」两查 ⟹ R92）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q35',label:'2012·T3·35（C／D 共享 Credibility，比中心词 Evolution vs Challenge，见 R125）'}]}
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
        '<b>2010·T3 是驳论文的标准件，而箭头画得比 however 更早</b>：①❷ <code>The idea is intuitively compelling, <b>but</b> it doesn\'t explain…</code>——<b>第一段末尾就已定向，③段的 however 只是把它挑明，不是新信息。</b><br>⚠️⚠️ <b>本篇给出了这张卡最硬的一个数字：十五个干扰项里有<u>八个</u>产自「靶子」那一栏</b>（32A／32B／32C／31C 被否定的理论 ＋ 33B／33C／33D 被排除的例外 ＋ 35B 被落选的变量）。<br>📌 <b>而版面上靶子（①②，7 句）比作者的主张（③，2 句）还长——<u>篇幅 ≠ 重心</u>。</b><br>⭐ <b>判据要带上后半句：凡取材自靶子栏的选项，<u>除非题干专门问靶子</u>，一律不能选</b>（本篇 31 题正是那个「除非」：它问的就是「引用这本书意在什么」）。'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'col1',label:'2009·T3 · 02+ 专栏「一支箭头」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q31',label:'2009·T3·31（C 把方向掉了个头）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q35',label:'2009·T3·35（A/B/D 各动一次箭头）'},
       {p:'2009_T1_习惯与创新.html',q:'q21',label:'2009·T1·21（同年另一篇驳论文：习惯从敌人改判为工具）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col4',label:'2010·T3 · 02++++ 专栏（十五个干扰项产地总账）'}]},

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
        '<b>与 R41 交叉验证</b>：R43 是<b>语法判据</b>，R41 是<b>论点判据</b>——<b>两条指向同一个答案时，可以放心落笔。</b>'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'s6',label:'2009·T3 · 长难句 s6'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col3',label:'2009·T3 · 02+++ 专栏「Only when 倒装」'}]},

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
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q33',label:'2009·T3·33（A/D 凭空造维度 ⟹ 反向用法）'}]},

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
        '<b>与 R21 的分工</b>：R21「主体校验」抓的是<b>两个被谈论对象之间</b>的偷换（谁对谁做了什么）；R45 抓的是<b>叙述者与被叙述者之间</b>那道界线。<b>R21 在文章之内，R45 在文章内外。</b>'],
 refs:[{p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q37',label:'2009·T4·37C（our examination 被安给新英格兰人）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q39',label:'2009·T4·39C（One wonders 被安给丹奈）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'col2',label:'2009·T4 · 02++ 专栏（同一把刀一篇连发两次）'}]},

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
        +'且 <code>A as well as B</code> 的重心在 A，只取 B 的选项更站不住。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q30',label:'2010·T2·30B（只截 <code>protections for patent holders</code>，把「被<b>缩小</b>」整个丢了，方向反转）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q38',label:'2009·T4·38A（both New World and Old World 被砍一半）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'q39',label:'2009·T4·39B（三项并列被拆开拼接，对照 R39）'},
       {p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33（R24 范围放大，反方向的对照）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'q34',label:'2010·T3·34D／32B（名词维度＋情态维度）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q36',label:'2010·T4·36D（动作复现、态度丢失）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q24',label:'2012·T1·24A／24D（只抱住破折号里的 negative ones）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q32',label:'2012·T3·32A（scrutiny and acceptance 只截了前一半）'}]},

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
        '<b>喻体那一栏的特征词被搬到本体栏。</b>2009 完形 7 题的 spontaneous（自发的、不假思索的）<b>恰恰是 instinct 的特征</b>，被摆到了形容 learning 的位置上——<b>凡对比句里出现「另一侧的特征词」，一律是陷阱。</b>'],
 refs:[{p:'2009_完形_智力的代价.html',q:'q3',label:'2009·完形·3（dimmer，接口词 bright）'},
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
        '⭐ <b>并列连体空的又一种形态：<code>be free to ___ and have no need to ___</code></b>（2012 完形 12＋13）——一个框架接「本来不敢做的事」（upset 挫败当权者）、一个接「本来不得不做的事」（cultivate 争取支持），<b>合起来念一遍才是「独立」</b>；serve／satisfy 配 free to 就自相矛盾，express 配 no need to 则把「谁给谁支持」弄反了。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q12',label:'2012·完形·12＋13（free to ／ no need to 并列连体空）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q4',label:'2011·完形·4＋5（因果型连体空，见 R105）'},{p:'2009_完形_智力的代价.html',q:'q18',label:'2009·完形·18（Above all，递进链末环）'},
       {p:'2009_完形_智力的代价.html',q:'q19',label:'2009·完形·19（fundamental，与 18 同档）'},
       {p:'2009_完形_智力的代价.html',q:'q16',label:'2009·完形·16（三句平行句互为答案）'},
       {p:'2008_完形_高智商与遗传疾病.html',q:'q5',label:'2008·完形·5（句中已有 however ⟹ 填 Even）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q9',label:'2010·完形·9/10（enough ＋ by itself，连体空互为验算）'}]},

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
        '⭐ <b>反向用法：单句成段的过渡段里，抽象名词空的答案在<u>下文</u>。</b>2012 完形 9 题 <code>whether there is still a ___ between the court and politics</code> 独占③段，下文④段两次 <code>apart from politics</code>、⑥段一次 <code>separate from politics</code>——<b>line 就是「分开」的名词形式</b>；它与 barrier 的裁决靠⑤段的让步（法律注定带政治性 ⟹ 只能有界线、不能有屏障）。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q9',label:'2012·完形·9（过渡段 ⟹ 答案在下文）'},{p:'2009_完形_智力的代价.html',q:'q11',label:'2009·完形·11（costs ← high-priced/upkeep/fuel）'},
       {p:'2009_完形_智力的代价.html',q:'q9',label:'2009·完形·9（limited ← not being too bright）'},
       {p:'2009_完形_智力的代价.html',q:'q4',label:'2009·完形·4（advantage，方向由并列从句定）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q8',label:'2010·完形·8（awareness ← ①段定义句）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q13',label:'2010·完形·13（evidence，能被「找到」的才是它）'}]},

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
        '<b>2012·新题型·41</b>：C 的 <code>they</code> 与 <code>such a device</code> 双双在紧邻上句找到先行词（一群天才、斗士、企业家 ＋ a fabulous machine）——代词与概括名词同时回指，是最稳的一种头钩。<b>42 反过来用这条</b>：下一句 <code>I call it a secret war</code> 的 it 需要紧邻的先行词，空格必须提供它。'],
 refs:[{p:'2009_新题型_文化人类学理论.html',q:'q43',label:'2009·新题型·43（我在这翻的车）'},
       {p:'2009_新题型_文化人类学理论.html',q:'q44',label:'2009·新题型·44（零距离先行词）'},
       {p:'2009_新题型_文化人类学理论.html',q:'q41',label:'2009·新题型·41（He argued 紧贴 Spencer argued）'},
       {p:'2008_新题型_如何写作初稿.html',q:'q44',label:'2008·新题型·44（These printouts）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q41',label:'2012·新题型·41（they ＋ such a device）'}]},

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
        '<b>2012·新题型 给优先级表补一条与 ① 同级的判据：尾钩</b>（下文把一个没出现过的词当已知信息用 ⟹ 空格必须引入它，见 <a href="#R136">R136</a>）。45 题头钩打平（B、E、G 都沾得上），靠的就是尾钩一击即中。'],
 refs:[{p:'2009_新题型_文化人类学理论.html',q:'',label:'2009·新题型（00 节判据优先级表 · 02+ 错题标本）'},
       {p:'2008_新题型_如何写作初稿.html',q:'',label:'2008·新题型（唯一词五连）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q45',label:'2012·新题型·45（头钩打平，尾钩定胜负）'}]},

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
        +'但传播论者关注的是起源与扩散，不是仪式。'],
 refs:[{p:'2009_新题型_文化人类学理论.html',q:'',label:'2009·新题型（01 节分区表 · 03 节两个多余项）'},
       {p:'2008_新题型_如何写作初稿.html',q:'',label:'2008·新题型（流程线的时间线分格）'}]},
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
        +'写成 <code>It is writers’ <b>duty</b></code>（职责，<b>客观要求</b>），<b>顺手还把「这几个人这么想」放大成了「作家都该这样」——一句话动了两处。</b>'],
 refs:[{p:'2010_T1_报纸艺术评论的衰落.html',q:'q23',label:'2010·T1·23（B 项 contemptible）'},
       {p:'2010_T1_报纸艺术评论的衰落.html',q:'col2',label:'2010·T1 · 02++ 专栏（两层态度拆解 ＋ 三个信号词）'},
       {p:'2009_T4_新英格兰早期的精神文化生活.html',q:'col2',label:'2009·T4 · R45（同族的第一把刀）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q22',label:'2011·T1·22（加强版：他的话 vs 别人对他这句话的反应）'}]},

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
        '<b>2012·T4·36A</b>：were in their prime in 1960（当年鼎盛）→ still have（如今仍有）——过去说成现在，与「将来说成已经」是同一族的时态偷换（⟹ R126）。'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q27',label:'2010·T2·27（27A 与 27C 一把刀同时出局）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'q30',label:'2010·T2·30（looming vs prevailing）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col1',label:'2010·T2 · 02+ 专栏（六处标记全表 ＋ 三种说「已经」的手段）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q29',label:'2011·T2·29B（原文 has been inverted 已完成 vs 选项 is getting out-dated 进行中）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q36',label:'2012·T4·36（A 当年当如今）'}]},

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
        +'<b>R62 管的是<u>同一个句子内部</u>的新旧两半</b>——<b>后者更隐蔽，因为两半之间只隔一个逗号，连段落都不用换。</b>'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q26',label:'2010·T2·26（C 与 D 产自同一句的两半）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col2',label:'2010·T2 · 02++ 专栏（劈句表 ＋ 为什么这刀砍得中人）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'s1',label:'2010·T2 · s1（主句一个点，从句一段区间）'}]},

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
        +'<b>a big deal 的正反两用都是「事情的分量」，与「买卖」无关；判据是它前面通常有 a／no 而不是 the，且不带 with／between 这类交易搭配。</b>'],
 refs:[{p:'2010_T2_商业方法专利的威胁.html',q:'q27',label:'2010·T2·27B（deal ⟹ business transaction）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col3',label:'2010·T2 · 02+++ 专栏（三步动作 ＋ 三种引号功能）'}]},

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
        +'凡<b>破折号里包着一整个从句</b>，先在卷边打个问号。'],
 refs:[{p:'2010_T3_社会流行潮的传播.html',q:'q33',label:'2010·T3·33（三个干扰项全产自例外半句）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col1',label:'2010·T3 · 02+ 专栏（例外区/规律区分栏表）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'s5',label:'2010·T3 · s5（54 词长难句拆解）'}]},

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
        '<b>这把刀是双向的</b>：若全文调子是「确凿、已证实」，那么写 seems / may 的选项反而要警惕。<b>先定调，再用刀。</b>'],
 refs:[{p:'2010_T3_社会流行潮的传播.html',q:'q32',label:'2010·T3·32（六处折扣词定态度）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col2',label:'2010·T3 · 02++ 专栏（折扣词表 ＋ 选项取材分类）'},
       {p:'2010_T2_商业方法专利的威胁.html',q:'col1',label:'2010·T2 · 02+ 专栏（姊妹刀 R61：时间刻度）'}]},

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
        +'<b>两者的词高度重合（本篇 tendency to be influenced 两句都出现），但只有后者能答题。</b>'],
 refs:[{p:'2010_T3_社会流行潮的传播.html',q:'q35',label:'2010·T3·35（方法句 vs 结论句）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'col3',label:'2010·T3 · 02+++ 专栏（分工表 ＋ 同构选项对齐法）'},
       {p:'2010_T3_社会流行潮的传播.html',q:'s10',label:'2010·T3 · s10（not of A but rather of B）'}]},

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
        +'<b>表一列完，属格陷阱自然就避开了。</b>'],
 refs:[{p:'2010_T4_会计准则制定者被迁怒.html',q:'q38',label:'2010·T4·38（唯一错题，完整拆解）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col1',label:'2010·T4 · 02+ 专栏（三句身份表）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s6',label:'2010·T4 · s6（IASB 自己说的那句）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'s7',label:'2010·T4 · s7（McCreevy 的双 that 从句）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q34',label:'2012·T3·34（引语后的 But 是作者的，三个干扰项全在引号之外，见 R124）'}]},

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
        +'<code>the pressure to fold</code> · <code>hostility from special interests</code> · <code>require independent and even combative</code>）——<b>一个被四方施压、本该硬气、如今正在被削弱的角色 ⟹ 同情。</b>'],
 refs:[{p:'2010_T4_会计准则制定者被迁怒.html',q:'q40',label:'2010·T4·40（三道闸完整拆解）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'col4',label:'2010·T4 · 02++++ 专栏（三道闸 ＋ 干扰项产地总账）'},
       {p:'2010_T4_会计准则制定者被迁怒.html',q:'q39',label:'2010·T4·39（强调句 ＝ 态度转折点）'}]},

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
        '⭐ <b>2012 完形一篇成立三次、无反例</b>：<b>4</b>（challenged／compromised／suspected 三个负面评价 ＋ <b>accepted</b>）· <b>18</b>（suppress／exploit／ignore 都不正面处理 ＋ <b>address</b>）· <b>19</b>（accessible／amiable／agreeable 都是「好相处」＋ <b>accountable</b>）——<b>三次孤立项全是答案</b>；分不出 3+1 的 3 题（restored／established 对 weakened／eliminated，2 正 2 负）就老实读 Yet 定方向。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q4',label:'2012·完形·4（三负一正）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q18',label:'2012·完形·18（三个不正面处理）'},{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q19',label:'2012·完形·19（三个好相处）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q16',label:'2010·完形·16（duly，全篇最难的一空）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q19',label:'2010·完形·19（tended，同一把刀的第二次）'},
       {p:'2009_完形_智力的代价.html',q:'q2',label:'2009·完形·2（tended，跨年第一次）'}]},

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
 tmpl:'<b>六年考点分布（自己数的，判据＝「解这一题你得做什么动作」）</b>：'
     +'<table class="tk"><tr><th>年份</th><th>词义 / 搭配 / 逻辑 / 语境</th><th>这一年压在哪</th></tr>'
     +'<tr><td>2007</td><td>9 / 5 / 4 / 2</td><td>词义辨析</td></tr>'
     +'<tr><td>2008</td><td>9 / 6 / <b>2</b> / 3</td><td>六道实义动词的主语适配</td></tr>'
     +'<tr><td>2009</td><td>6 / 5 / 5 / 4</td><td>四类几乎持平</td></tr>'
     +'<tr><td>2010</td><td>9 / 4 / 4 / 3</td><td>形容词与副词的「方向」</td></tr>'
     +'<tr><td>2011</td><td>6 / 3 / <u>6</u> / 5</td><td>一根因果箭头的方向（逻辑空最多）</td></tr>'
     +'<tr><td><b>2012</b></td><td><b>5 / 4 / 3 / <u>8</u></b></td><td><b>作者的应然立场 ＋ 首尾镜像（语境空六年最多）</b></td></tr></table>'
     +'<b>⟹ 六年六种分布，「完形没有万能重心」已第六次坐实。</b>',
 traps:['<b>2012：三个逻辑空 3/3 落在「成分首」</b>——2、11 在从句首，<b>20 插在 and 与第二个补足语之间（前后都有逗号）</b> ⟹ 「句首＝逻辑」可扩写成「成分首＝逻辑」。线索位置统计：句内自足 16 ／ 跨句 4（<b>80%</b>；2010 65% → 2011 75% → 2012 80%），我犹豫过的 9 题正是四个跨句空之一。',
        '<b>句首＝逻辑，2011 完形再次 4/4 成立</b>：1（But 之后的状语位）· 6（段首）· 11（句首）· 20（句首），<b>四个逻辑空全部在句首或近句首</b>，其余 16 个空全在主谓宾内部。<b>而 2011 的线索位置统计是「句内自足 15 ／ 跨句 5」——句内比例升到 75%，但我唯一做错的 20 题正是那五个跨句空之一。</b>',
        '<b>「句首＝逻辑」这条<u>反向</u>最稳，正向不是铁律。</b>2010 完形四个逻辑空（7 分句首 · 12 · 15 · 18）<b>全部落在句首或分句首，4/4 成立</b>；'
        +'2009 句首的 1 Consider · 18 Above all · 20 So far 也全是逻辑。'
        +'<b>但反过来不成立</b>：<a href="2009_完形_智力的代价.html#q14">2009 完形 14 题</a>的 <code>for instance</code> 就以<b>插入语</b>形态出现在句中。'
        +'⟹ <b>看见空在句首，放心按逻辑做；看见空在句中，别以为就一定不考逻辑。</b>',
        '📌 <b>线索位置统计（2010 完形，判据＝线索是否落在同一个句号之内）：句内自足 13 空 ／ 跨句 7 空。</b>'
        +'⟹ <b>第一遍先把 65% 的句内空锁住（6.5 分），第二遍再回头处理那七个跨句的</b>——时间和心态都稳。',
        '<b>别指望一招通吃。</b>四年的信号类型各不相同：2022 靠 nonetheless／However 这类<b>明信号词</b>；2007 靠 less agreement／except 这类<b>结构性信号</b>；'
        +'2008 <b>基本不给信号</b>，靠「动词能不能带这个主语」；2009 靠<b>语用功能</b>（引例、递进、收口）；<b>2010 靠<u>叙事的方向</u></b>（三次反转 ＋ 一个对照组 ＋ 两组三缺一）。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q20',label:'2012·完形·20（成分首 ⟹ 逻辑，空在句中）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q20',label:'2011·完形·20（句首 ⟹ 逻辑，但考类比不是因果）'},{p:'2010_完形_霍桑效应遭到质疑.html',q:'q7',label:'2010·完形·7（分句首 ⟹ 条件连词）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q15',label:'2010·完形·15（句首 ⟹ 总分关系）'},
       {p:'2009_完形_智力的代价.html',q:'q14',label:'2009·完形·14（反例：引例以插入语形态出现在句中）'}]},

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
        +'定下 7 再回头看 6，「做什么不要紧」就顺出来了。（同 <a href="#R55">R55</a>：两空互相牵制时先做有硬排除的那个。）'],
 refs:[{p:'2010_完形_霍桑效应遭到质疑.html',q:'q17',label:'2010·完形·17（and 同向）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q6',label:'2010·完形·6（分号左侧）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q20',label:'2010·完形·20（倒 U 曲线的中段）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'s5',label:'2010·完形·s5（把状语全划掉再看主干）'}]}
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
        '<b>第⑤步（验多余项）不是每年都有。</b>2011 是<b>七格七项、零多余项</b>，没有多余项可以拿来反证，<b>整链通读就成了唯一的自查工具</b>；而且零多余项下<b>一处排错必然连累第二处</b>（错位成对发生）。<b>开考先数格子，见 <a href="#R107">R107</a>。</b>'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q45',label:'2010·新题型·45（先做被 E 夹住的空）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q41',label:'2010·新题型·41（排除法定首段）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 00 节打法五步表'}]},

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
        '<b>首段被题目直接给定时，这套查法不作废，只是换了用途。</b>2011 的首段 G 是题目给的，于是七个段首的路标全部变成<b>粘块</b>的依据（见 <a href="#R108">R108</a>）：C 的 <code>Equally</code> 说明它必须紧跟一个「不足为奇」的结论、D 的 <code>such courses</code> 说明它必须紧跟一个讲课程的段落。<b>路标的本质从来不是「定首段」，而是「这一项欠上文什么」。</b>'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q41',label:'2010·新题型·41（六项六个路标）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 02+ 首段判据表'}]},

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
        +'见到这种句子收尾，<b>下一段几乎一定是来举证的</b>（2010 的 B→F 就是）。反过来，一段已经列完清单，下一段就该总结。'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 02++ 五个接缝总表'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q44',label:'2010·新题型·44（同一对相邻段用了两种缝法）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q42',label:'2010·新题型·42（未证的断言 ⟹ For example）'}]},

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
        '<b>2012 补：两个多余项都有词面呼应</b>——B 抓第八段的 stickiness，E 同时抓 computer 与 television。<b>多余项分两大族</b>：「词面像」（2007 A／G · 2008 F · 2010 C · 2012 B、E）与「位置满」（2008 B · 2009 D／F · 2012 B、E），<b>2012 两族兼备</b>：词面把你往空里引，位置把它挡在外面。'],
 refs:[{p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 03 节 多余项 C 三条理由'},
       {p:'2007_新题型_家长如何帮孩子.html',q:'',label:'2007·新题型（两个多余项都有词面呼应）'},
       {p:'2009_新题型_文化人类学理论.html',q:'',label:'2009·新题型（整区没有空 ⟹ 两项一起死）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型（七篇多余项造法总账）'}]},

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
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'q43',label:'2010·新题型·43（such variations 是空钩）'}]},

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
       {p:'2011_T1_古典音乐会的危机.html',q:'q24',label:'2011·T1·24D（反向：原文没有 only，选项加一个）'}]},

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
        +'<b>⟹ 见到问号，别急着找「作者不懂什么」，去找他<u>紧接着说了什么</u>。</b>'],
 refs:[{p:'2011_T1_古典音乐会的危机.html',q:'q25',label:'2011·T1·25（问号是反问，正解 doubtful）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'col2',label:'2011·T1 · 02++ 专栏（两种身份对照 ＋ 态度词能不能选清单）'}]},

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
        +'<b>R27 管一道题（写作目的），R86 管整篇的读法。</b>'],
 refs:[{p:'2011_T1_古典音乐会的危机.html',q:'col3',label:'2011·T1 · 02+++ 专栏（分区表 ＋ 四个说话人表）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'q23',label:'2011·T1·23（题干与首段人物无关，在横线以下）'}]},

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
        +'<b>那么正确项必须能在原文里找到<u>作者的那句判决</u>作为靠山</b>——本题的靠山就是 <code>are missing the point</code> 五个词。'],
 refs:[{p:'2011_T1_古典音乐会的危机.html',q:'q23',label:'2011·T1·23（主张 × 负号 ＝ overestimate）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'col4',label:'2011·T1 · 02++++ 专栏（两步动作 ＋ 十五个干扰项产地总账）'},
       {p:'2011_T1_古典音乐会的危机.html',q:'s5',label:'2011·T1 · 长难句 s5（who 从句撑开主谓，误读会丢掉判决）'}]}

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
        '<b>2012·T4·37A</b>：原文是行为「能让事情停摆而几乎不承担后果」，选项贴了个性格标签 prudent（谨慎）——而且贴反了：无后果的潜台词是敢于停摆。'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q26',label:'2011·T2·26（三个干扰项全是人格标签）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col1',label:'2011·T2 · 02+ 专栏（行为 vs 解释对照表 ＋ 形容词体检表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'q27',label:'2011·T2·27C（把「没被点将」升级成「关系紧张」）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q37',label:'2012·T4·37（A 行为翻成相反的性格）'}]},

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
        +'<b>凡定位句是「动词 ＋ 长宾语从句」，宾语从句读完再判。</b>'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q27',label:'2011·T2·27（三组人的公因式）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col2',label:'2011·T2 · 02++ 专栏（三组人对照表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'s3',label:'2011·T2 · 长难句 s3（get the nod ＝ 被点将，不是关系紧张）'}]},

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
        +'<b>「本篇出现过这个意思」不等于「被考词是这个意思」。</b>'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q28',label:'2011·T2·28（poach ＝ hunted for）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col3',label:'2011·T2 · 02+++ 专栏（四个选项塞回原句的对照表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'s7',label:'2011·T2 · 长难句 s7（完全倒装 ＋ 双重否定 ＋ 两层定语从句）'}]},

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
        '<b>推理题的安全方向</b>：往「原文明说了什么，它的<u>时间前提</u>是什么」推一步（A 对），<b>不要往「他们心里怎么想」推</b>（B、C 全错在这）。'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q29',label:'2011·T2·29（正解 ＝ 被推翻的旧规则的过去式）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col4',label:'2011·T2 · 02++++ 专栏（末段三种时态对表）'},
       {p:'2011_T2_高管裸辞潮.html',q:'s9',label:'2011·T2 · 长难句 s9（was ／ has been inverted 两个时态）'}]},

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
        '<b>主体错最难发现</b>，因为那个词在原文里出现了几十次——<b>但它出现的位置是「他们想去的地方」，不是「他们是谁」。</b>'],
 refs:[{p:'2011_T2_高管裸辞潮.html',q:'q30',label:'2011·T2·30（Top Managers Jump without a Net）'},
       {p:'2011_T2_高管裸辞潮.html',q:'col5',label:'2011·T2 · 02+++++ 专栏（四查对照表 ＋ 干扰项产地总账）'}]},

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
       {p:'2011_T3_五种媒介的家谱.html',q:'col4',label:'2011·T3 · 02++++ 专栏（动词三族表 ＋ 干扰项产地总账）'}]},

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
        +'<b>29C 把公司为打官司抛出的主张（只有联邦有权）当成了「此案要检验的东西」</b>；而题干写 author&#39;s view、原文是 scholars say——作者转述后未驳，可作作者之见（⟹ R119）。'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col1',label:'2011·T4 · 02+ 专栏（三个声音编号表 ＋ 六个串门干扰项）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q38',label:'2011·T4·38（38C/38D 说的是【M】的潜台词）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q39',label:'2011·T4·39（39B 混说话人 · 39C 把【研究】当【杂志】）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q29',label:'2012·T2·29C（「只有联邦有权」是公司的主张，被当成检验对象）'}]},

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
        +'<b>题干带年份时先在轴上圈出那一格</b>——27C 的 extension／license 出自 2006 年句，被挪到了 2002 年的协议头上（⟹ R116）。'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col2',label:'2011·T4 · 02++ 专栏（时间轴钉点法 ＋ 时点/时长对照表）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q36',label:'2011·T4·36（三个错项全长在同一条轴上）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'s3',label:'2011·T4 · 长难句 s3（in the moment ↔ later）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q27',label:'2012·T2·27C（2006 年的 extension／license 串到 2002 年协议）'}]},

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
        '<b><code>in the same way that</code> / <code>just as</code> / <code>much like</code> 之后是<u>类比</u>，不是新信息</b>——<b>答案几乎从不在类比里</b>，做题时整段跳过。'],
 refs:[{p:'2011_T4_育儿幸福观的三个声音.html',q:'col3',label:'2011·T4 · 02+++ 专栏（三格压缩法 ＋ B/C 逐格对比）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'q40',label:'2011·T4·40（C 只动了主语）'},
       {p:'2011_T4_育儿幸福观的三个声音.html',q:'s10',label:'2011·T4 · 长难句 s10（54 词，三个语法机关）'}]},

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
        +'<b>not 否定的是那条因果，不是 cry 这个动作</b>。把否定对象看成动词，unless／until／if 三个错项就会同时变得「说得通」（2011 完形 13 题一刀砍三个）。'],
 refs:[{p:'2011_完形_笑与情绪的方向之争.html',q:'q12',label:'2011·完形·12（rooted in）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q13',label:'2011·完形·13（否定转移）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q14',label:'2011·完形·14（让步填逆箭头）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q15',label:'2011·完形·15（flow from）'}]},

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
        '⭐⭐ <b>2012 是本卡的对照情形：主语没换 ⟹ 因果持证上岗。</b>末空 <code>their rulings … seen as separate from politics and, ___, convincing as law</code>——两个补足语共用主语 their rulings，<b>没换人</b> ⟹ 因果成立，填 <b>as a result</b>（in a word 要求后面是前文的缩写，而 convincing as law 是新信息）。<b>三问不是为了排除因果，而是为了让因果持证上岗。</b>四年四种形态：2009 收口 · 2010 不是收口 · 2011 收口考类比 · <b>2012 收口考因果，且空格插在句中 and 之后</b>。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q20',label:'2012·完形·20（主语未换 ⟹ as a result）'},{p:'2011_完形_笑与情绪的方向之争.html',q:'q20',label:'2011·完形·20（换人 ⟹ 类比）'},
       {p:'2010_完形_霍桑效应遭到质疑.html',q:'q20',label:'2010·完形·20（末空不是收口）'},
       {p:'2009_完形_智力的代价.html',q:'q20',label:'2009·完形·20（末空是收口）'}]},

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
        '<b>一个结构常带出第二个空</b>：先用结构定下方向明确的那个（2011 的 7 空），再用它去卡紧邻的下一个（8 空）——<b>顺序反了会多花一倍时间。</b>'],
 refs:[{p:'2011_完形_笑与情绪的方向之争.html',q:'q7',label:'2011·完形·7（instead of ⟹ opposite）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q8',label:'2011·完形·8（同一结构反推 relaxes）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q13',label:'2011·完形·13（not…but…）'}]},

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
        +'而 requiring（后须虚拟语气）、supposing（引出假设）在<b>语法上</b>就与陈述语气的 that 从句打架——<b>先用语法判据砍，再谈语义。</b>'],
 refs:[{p:'2011_完形_笑与情绪的方向之争.html',q:'q16',label:'2011·完形·16（两组都做得到的动作）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q17',label:'2011·完形·17（相反≠中性）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q18',label:'2011·完形·18（被测变量）'},
       {p:'2011_完形_笑与情绪的方向之争.html',q:'q19',label:'2011·完形·19（结论句的分寸）'}]}
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
        +'看起来只有五个空，<b>但格子是七个</b>——漏数已给定的 G 与 E，就会误判成「有两个多余项」。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 00 节「先数格子」'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'q45',label:'2011·新题型·45（末格白送）'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 有多余项的那一年'}]},

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
        +'而 43／44 一旦作为一个块整体落位，<b>两格是一次判断而不是两次</b>。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'q44',label:'2011·新题型·44（副词呼应＋数字接力）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 00 节第②条（120 → 6）'}]},

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
        '<b>2012·新题型 一篇用了两次</b>：45 题 <code>a one-way tap <b>flowing</b></code> → G 的 <code><b>the flow</b></code>（动词 → 名词 ＋ 定冠词）；44 题 <code>a pyramid of production <b>remains</b></code> → F 的 <code>the <b>persistence</b> of this pyramid</code>（同义换词性 ＋ 指示词）。选句填空里照样好使。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'q42',label:'2011·新题型·42（separate ⟶ this separation）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 02++ 六个接缝总表'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q45',label:'2012·新题型·45（flowing → the flow）'}]},

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
        +'<b>不指望你注意、却在语法上非有不可</b>的东西：His 找不到人就读不通、this separation 找不到「分离」就读不通、half 找不到中心词就读不通。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'q45',label:'2011·新题型·45（隔两段的复现）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 02++ 缝法强弱表'},
       {p:'2010_新题型_欧洲食杂零售商转战批发.html',q:'',label:'2010·新题型 · 03 多余项 C'}]},

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
        +'<b>阅读题里书评给出三个可被问的主体（书作者／书本身／所评之事），题干主语决定取料层</b>（⟹ R112、R113）。'],
 refs:[{p:'2011_新题型_知识与人才的专业化困境.html',q:'',label:'2011·新题型 · 00 节第③条（书评四格骨架）'},
       {p:'2011_新题型_知识与人才的专业化困境.html',q:'q45',label:'2011·新题型·45（两个末段标记）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'col1',label:'2012·T1（书评第一次以阅读 Text 出现 ⟹ 三层主体，见 R112）'}]},

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
        '<b>书评体裁天生是主体类干扰项的温床</b>：2012 T1 十五个干扰项里六个是主体挪位（占四成）。<b>一认出书评，把主体校验提到第一顺位。</b>'],
 refs:[{p:'2012_T1_同侪压力与社会疗法.html',q:'col1',label:'2012·T1 · 02+ 专栏（三层主体表）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q23',label:'2012·T1·23（四个选项全在三层间挪）'}]},

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
        '<b>分水岭是「分区」不是「取舍」</b>：2012 T1 的 22 题（4 分）恰恰全在分水岭以上——与 R86 话题换轨句同理，前半段照样出题。'],
 refs:[{p:'2012_T1_同侪压力与社会疗法.html',q:'col2',label:'2012·T1 · 02++ 专栏（分水岭两句）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22（取分水岭以上）'}]},

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
        '<b>跨段拼词是这类题的标配干扰</b>：22A recruit professional advertisers 的 recruit 来自②段（对象是年轻人），advertisers 来自③段——<b>习语推出来是「学」，「雇」自然出局</b>（⟹ R39）。'],
 refs:[{p:'2012_T1_同侪压力与社会疗法.html',q:'col4',label:'2012·T1 · 02++++ 专栏（两端落差）'},
       {p:'2012_T1_同侪压力与社会疗法.html',q:'q22',label:'2012·T1·22（take a page from）'}]},

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
        '<b>与 R93（术语关系表）、R97（说话人编号）是一个家族</b>：文章里凡有三个以上「长得像的名字」——术语、说话人、机构——都先画表再做题。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col1',label:'2012·T2 · 02+ 专栏（三栏表 ＋ 五个挪栏干扰项）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q30',label:'2012·T2·30D（its reputation in Vermont → Vermont&#39;s reputation）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q29',label:'2012·T2·29C（州权 → 联邦权）'}]},

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
        '<b>与 R37（数字推不出评价）、R88（行为推不出人品）同族</b>：三张卡都说「别替作者往上多走一步」——R37 管数字 → 评价，R88 管行为 → 人品，R118 管事实 → 类别。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col3',label:'2012·T2 · 02+++ 专栏（作者的归类 vs 你的标签）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q28',label:'2012·T2·28（B 替事实贴标签 · D 猜测当事实）'}]},

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
        '<b>「公理 ＋ except」式反讽开头</b>（A deal is a deal—except, apparently, when X is involved）已把全篇极性写死：后文任何与「守约」有关的词，方向都朝「违约」。'],
 refs:[{p:'2012_T2_背弃承诺的核电厂主.html',q:'col5',label:'2012·T2 · 02+++++ 专栏（逐成分对齐 ＋ 十五个干扰项总账）'},
       {p:'2012_T2_背弃承诺的核电厂主.html',q:'q26',label:'2012·T2·26（Instead 引出白话版 · A 施受颠倒）'}]},

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
        '<b>2012·T4·38 第二例（相邻两篇连用）</b>：④段的轴是「直接（工资）↔ 间接（福利）」，B indirectly 站间接一侧；C excessively 换到程度轴且方向反、D fairly 换到公平轴、A illegally 换到原文没有的合法性轴（⟹ R128）。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col1',label:'2012·T3 · 02+ 专栏（对立轴四选项站位表）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q32',label:'2012·T3·32（A 中心词同义、轴换了）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q38',label:'2012·T4·38（直接 ↔ 间接轴）'}]},

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
        '<b>与 R2、R49 的分工</b>：R2 把比喻翻成直义，R49 找比喻链的接口词；<b>R122 管「同一个类比出场两次时读哪一次」</b>。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col2',label:'2012·T3 · 02++ 专栏第一步（类比两次出场）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q33',label:'2012·T3·33（不同点预告了答案的主体）'}]},

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
       {p:'2012_T3_科学发现的取信过程.html',q:'q33',label:'2012·T3·33（A 结果当条件 · C／D 条件之一）'}]},

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
        '<b>与 R58、R69、R4 的分工</b>：R4 先分清谁在说话 · R69 意图归谁就只到谁说的那句里找 · R58 引语里的态度分两层 · <b>R124 管「那句话本身怎么读」</b>——R69 帮你找到它，R124 帮你读懂它。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col3',label:'2012·T3 · 02+++ 专栏（对称句变格表 ＋ 引号内外）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q34',label:'2012·T3·34（三个干扰项全在引号之外）'}]},

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
        '<b>与 R11、R40、R92 的分工</b>：R11 四查（对象／关系／程度／立场）· R40 覆盖度 → 褒贬度 → 原词义项 · R92 主体 ＋ 文体 · <b>R125 补两个具体动作：前题定位段覆盖表 ＋ X of Y 比中心词</b>。'],
 refs:[{p:'2012_T3_科学发现的取信过程.html',q:'col4',label:'2012·T3 · 02++++ 专栏（五段覆盖表 ＋ 中心词复现）'},
       {p:'2012_T3_科学发现的取信过程.html',q:'q35',label:'2012·T3·35（B 前题答案回收 · D 多段拼接）'}]},

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
        '<b>强度尺</b>：is bad for／may be a problem 是明确而克制的负面 ⟹ disapproval 这一档；hostility／contempt 这类重词反而要排（⟹ R12）。'],
 refs:[{p:'2012_T4_公共部门工会的膨胀.html',q:'col5',label:'2012·T4 · 02+++++ 专栏（转述动词三档表）'},
       {p:'2012_T4_公共部门工会的膨胀.html',q:'q40',label:'2012·T4·40（B 取让步前半 · C 取折中）'}]},

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
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q16',label:'2012·完形·16（轴的让步端）'}]},

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
        '<b>so 单独出现时别急着读成「所以」</b>：新闻与口语常省掉 so that 的 that，<b>从句里有 would／could 就是「以便」</b>。'],
 refs:[{p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q2',label:'2012·完形·2（unless 换写即荒谬）'},
       {p:'2012_完形_大法官的伦理与法院的合法性.html',q:'q11',label:'2012·完形·11（would ⟹ 目的 so）'}]},

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
        '<b>泛指名词作主语只算弱尾钩</b>：Television is… 这类泛指可以不经引入就出现，只能算「新话题」的提示（2012·44 靠的仍是头钩 this pyramid）。'],
 refs:[{p:'2012_新题型_下载与上传的隐秘战争.html',q:'tail',label:'2012·新题型 · 02+ 尾钩总表'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q41',label:'2012·新题型·41（The networked computer）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q42',label:'2012·新题型·42（I call it a secret war）'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q45',label:'2012·新题型·45（What counts as meaningful uploading?）'}]},

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
        '<b>不要替原文补前提</b>：「电脑当然和电视不一样」是你的常识，不是上文的话。选句填空只认写在纸上的前提。'],
 refs:[{p:'2012_新题型_下载与上传的隐秘战争.html',q:'extra',label:'2012·新题型 · 03 节 两个多余项'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q44',label:'2012·新题型·44（E 是最强干扰）'},
       {p:'2009_新题型_文化人类学理论.html',q:'q42',label:'2009·新题型·42（Thus 的前提就在紧邻上句）'}]},

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
        '与 <a href="#R80">R80</a>（排序题「段尾是还没有证据的断言 ⟹ 下一段来举证」）同源：<b>议论文里每一句都在回答上一句引出的问题</b>，选句填空与排序题都能用。'],
 refs:[{p:'2012_新题型_下载与上传的隐秘战争.html',q:'chain',label:'2012·新题型 · 02++ 论证链功能表'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'three',label:'2012·新题型 · 03+ 三篇选句填空对照'},
       {p:'2012_新题型_下载与上传的隐秘战争.html',q:'q43',label:'2012·新题型·43（事实 ⟹ 评价）'}]}

];

window.TRICK_READ_META = {
  subject:'英语一 · 阅读',
  source:'2022 Text 1–4 · 2007 Text 1–4 · 2008 Text 1–4 · 2009 Text 1–4 · 2010 Text 1–4 · 2011 Text 1–4 · 2012 Text 1–4 · 2007/2008/2009/2010/2011/2012/2022 新题型 · 2008/2009/2010/2011/2012 完形',
  note:'提炼自本复盘中心各篇阅读真题复盘页的技巧/干扰项分析，随复盘页增长。'
};
