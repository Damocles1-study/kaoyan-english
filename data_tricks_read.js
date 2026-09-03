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
        +'2007·T2·26 三种错法各来一个：B 错在动作（<code>envision</code> 想象折剪后的样子 → 说成真去动手折剪）、C 错在主体（读者提的问题 → 说成测试的题目）、A 错在语气（作者的<b>反问质疑</b> → 说成测试的内容）。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T3_艺术与科学.html',q:'q34',label:'T3·34'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36'},{p:'2007_T2_智力测试的边界.html',q:'q26',label:'2007·T2·26'}]},

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
 refs:[{p:'2022_T3_艺术与科学.html',q:'q32',label:'T3·32'},{p:'2007_T1_刻意练习造就高手.html',q:'q21',label:'2007·T1·21'},{p:'2008_T3_美国人的身高极限.html',q:'q31',label:'2008·T3·31（事例即靶子）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（事例即反差）'}]},

{id:'R4', tier:'🔴', qt:'作者态度 / 主旨 / 末段主旨', title:'先分清「谁在说话」，再抓情态词喊话句',
 trig:['the author thinks / suggests','末段','It can be concluded'],
 flow:'① <b>作者发声段＝没有引号、没有人名</b>的段落（那是作者自己评论，不是转述人物）；'
     +'② <b>首段形容词群</b>＝全文情感基调，先定调；③ <b>末段</b>盯 <code>needs to / must / should</code> 等情态词所在句＝作者最后的喊话。',
 tmpl:'问 the author → 只看作者发声段；问某人 → 只看那人的话。两者混用就是最大的坑。',
 traps:['拿人物的话当作者态度：T1·24 问 the author，答案在无引号的⑥段，不是 van Oosten 的话。',
        '<b>把「现状陈述段」当「作者立场段」</b>：2007·T2 第三段陈述「IQ 分数仍是衡量标准」，那是<b>被批判的靶子</b>，不是作者赞同——30 题 A 项专坑读错这一段的人。',
        '<b>句末的 <code>, argues X.</code> 是身份标签</b>：引述倒装把说话人甩到句末，一看到就要意识到「这一整句是 X 说的，不是作者说的」。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q24',label:'T1·24'},{p:'2022_T2_Z世代与学位.html',q:'q26',label:'T2·26'},{p:'2022_T3_艺术与科学.html',q:'q35',label:'T3·35'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30'}]},

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
 refs:[{p:'2022_T2_Z世代与学位.html',q:'q30',label:'T2·30'},{p:'2022_T4_解雇保护悖论.html',q:'q38',label:'T4·38'},{p:'2022_T1_塑料文物保护.html',q:'q25',label:'T1·25'},{p:'2007_T1_刻意练习造就高手.html',q:'q24',label:'2007·T1·24'},{p:'2007_T2_智力测试的边界.html',q:'q29',label:'2007·T2·29'}]},

{id:'R7', tier:'🟡', qt:'细节题（题干限定段落）', title:'题干限定第 N 段，别处的「对信息」也是错项',
 trig:['In Paragraph 5','According to Para X','题干明确点段号'],
 flow:'题干限定段落时，<b>只在该段找</b>；其他段落里即使有说得对的信息，放进选项也是<b>错的</b>——专为「不看限定」的人挖的坑。',
 tmpl:'答对此类题的动作：先在原文<b>圈出题干指定的段号</b>，答案定位不出这一段。',
 traps:['段落错位：T2·29 的 B 是⑥段的 up-skilling，题干却限定 Paragraph 5 → 错。',
        '2007·T2·27 限定 Paragraph 3，D 项却取材于末段的 important elements，且与第二段的<b>设问句</b>（「智力有多少<b>能够</b>被明确？」＝尚无定论）正相反。'],
 refs:[{p:'2022_T2_Z世代与学位.html',q:'q29',label:'T2·29'},{p:'2007_T2_智力测试的边界.html',q:'q27',label:'2007·T2·27'}]},

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
        '「偷换主语」是最隐蔽的一种偷换：2007·T1·23 的 D 把原文 it（指 deliberate practice）悄悄换成题干问的 good memory。'],
 refs:[{p:'2022_T1_塑料文物保护.html',q:'q21',label:'T1·21'},{p:'2022_T2_Z世代与学位.html',q:'q28',label:'T2·28'},{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2007_T1_刻意练习造就高手.html',q:'q23',label:'2007·T1·23'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（常识陷阱）'},{p:'2009_T1_习惯与创新.html',q:'q21',label:'2009·T1·21（偷换语义重心）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q26',label:'2009·T2·26（客观⟹主观）'},{p:'2009_T2_DNA检测与伪精确.html',q:'q29',label:'2009·T2·29（原词拼接）'}]},

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
        '⚠️⚠️ <b>「文章通篇在做 A 与 B 的对比」≠「文章的主题是 A 与 B 的差异」</b>（<b>2008·T1·25 我就栽在这上面</b>）。对比可以只是<b>论证手段</b>：2008·T1 全篇用「与男性相比」来<b>衬托女性之惨</b>，男性始终只是参照系（雄鼠、战场），从来不是被讨论的对象。'
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
        '<b>怀疑 ≠ 偏见</b>：skeptical 是「我有理由不信」（引研究、引专家、摆数据），biased 是「我不讲理由就是不信」。'],
 refs:[{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30'},{p:'2022_T1_塑料文物保护.html',q:'q24',label:'T1·24'},{p:'2022_T3_艺术与科学.html',q:'q35',label:'T3·35'}]},

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
        '<b>只读定位句就选，必被骗</b>：命题人挑来考「写作目的」的句子，<b>本身往往看不出观点</b>——观点在它的邻居那儿。'],
 refs:[{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36'},{p:'2007_T4_数据泄密的公司.html',q:'q38',label:'2007·T4·38'},{p:'2007_T1_刻意练习造就高手.html',q:'q21',label:'2007·T1·21'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（扩过了头）'}]},

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
        '<b>反过来也要防</b>：如果三种标记一条都找不到，那就<b>别自作多情地选倾向词</b>——真中立的文章选中性标题才对。<b>这一卡的用法是「查」，不是「一律选倾向词」。</b>'],
 refs:[{p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（三种标记齐全）'},{p:'2008_T1_女性与压力.html',q:'q21',label:'2008·T1·21（反语放倒 C 项）'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30（态度题）'}]},

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
        '<b>「受益」对了不等于选项对了</b>：2008·T2·28B 里科研人员确实受益，但受益的<b>方式</b>被换成了「拿到巨额利润」——<b>第三问漏了就会栽在这里。</b>'],
 refs:[{p:'2008_T2_科学出版的在线转向.html',q:'q27',label:'2008·T2·27（同句两名词）'},{p:'2008_T2_科学出版的在线转向.html',q:'q29',label:'2008·T2·29（多模式并列）'},{p:'2008_T2_科学出版的在线转向.html',q:'q30',label:'2008·T2·30（趋势 vs 推手）'},{p:'2007_T1_刻意练习造就高手.html',q:'q23',label:'2007·T1·23（偷换主语）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（制度 vs 人群）'},{p:'2008_完形_高智商与遗传疾病.html',q:'q13',label:'2008·完形·13（插入语造假主语）'}]},

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
        '<b>主旨题做完要回头检验前几题</b>：本篇主旨是「出版方式在变」，于是 26 答「传统流程」（旧）、28 答「获取更便捷」（新的优势）、29 答「作者付费」（新模式细则）——<b>四道题全在一条主线上。有一道对不上，那道多半选错了。</b>'],
 refs:[{p:'2008_T2_科学出版的在线转向.html',q:'q30',label:'2008·T2·30（今昔对比主旨题）'},{p:'2008_T2_科学出版的在线转向.html',q:'q26',label:'2008·T2·26（「昔」段的段落主旨）'},{p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（对照：空间对比）'}]},

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
        '⚠️⚠️ <b>这把刀已经砍中三次，时间线值得记一下</b>：2007·T4 立 R8 第十一类「泛化」→ 2008·T3·33 又栽、升级成本卡 → <b>2008·T4·36 第三次栽</b>。'
     +'<b>结论：「知道有这个坑」「甚至亲手写过这张卡」都不管用，只有把它绑成一个每题必做的<u>固定动作</u>才生效——落笔前把两个主语并排<u>写下来</u>。</b>'],
 refs:[{p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33（我错的那题）'},{p:'2008_T3_美国人的身高极限.html',q:'q34',label:'2008·T3·34（同一把刀第二次）'},{p:'2007_T4_数据泄密的公司.html',q:'q40',label:'2007·T4·40'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q36',label:'2008·T4·36（第三次栽）'},{p:'2008_T4_开国元勋与奴隶制.html',q:'q37',label:'2008·T4·37（同篇第二次）'}]},

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
 refs:[{p:'2008_T3_美国人的身高极限.html',q:'q33',label:'2008·T3·33'},{p:'2007_T2_智力测试的边界.html',q:'q30',label:'2007·T2·30（对照：态度题）'}]},

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
        '<b>反语与排斥容易混，判据在「引号里是形容词还是名称」</b>：形容词/褒义词被打引号 ⟹ 多半是<b>反语</b>；一个完整的<b>称谓/专名</b>被打引号且带 the ⟹ 多半是<b>排斥</b>。'],
 refs:[{p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（引用 + 排斥）'},{p:'2008_T1_女性与压力.html',q:'q21',label:'2008·T1（反语 opportunities）'},{p:'2022_T4_解雇保护悖论.html',q:'q36',label:'T4·36（比喻 time bomb）'}]}
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
        +'<code>this issue</code> 的 this——空格前若找不到它们指的东西，那这个先行词只能由所填内容提供。'],
 refs:[{p:'2008_新题型_如何写作初稿.html',q:'q43',label:'2008·新题型·43（唯一词 one side）'},{p:'2008_新题型_如何写作初稿.html',q:'q44',label:'2008·新题型·44（连体空 printouts）'},{p:'2008_新题型_如何写作初稿.html',q:'q41',label:'2008·新题型·41（新论点找下家）'}]},

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
        '<b>做完 5 个空必须回头验多余项</b>：把没用上的两项拿回去，逐个空确认放不下，才收工。'],
 refs:[{p:'2008_新题型_如何写作初稿.html',q:'q45',label:'2008·新题型·45（E vs F 专名撞车）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q42',label:'2007·新题型·42（首句陷阱）'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022·新题型（无人提及型多余项）'}]},

{id:'R32', tier:'🟢', qt:'新题型 · 元套路', title:'开考先读 Directions 那三行：Part B 有三种变体，认错变体比读不懂文章更致命',
 trig:['翻到 Part B 的第一秒','看到 A–G 七个选项但不确定它们是标题、观点还是段落'],
 flow:'<b>Part B 只考三种变体，Directions 的一个词就能认出来</b>；认出后再决定用哪套手感、给多少时间。'
     +'三种的共同铁律只有三条：① <b>一项一空、不重复</b>；② <b>定完 5 个必须回头验多余项</b>；'
     +'③ <b>证据必须落到具体的词或句，“感觉像”不算证据</b>。',
 tmpl:'<table class="tk"><tr><th>变体</th><th>认它的信号 · 第一步做什么</th><th>主战场 · 用时</th></tr>'
     +'<tr><td><b>标题匹配</b><br>（2007）</td>'
     +'<td>Directions 里出现 <code>heading</code>。<b>第一步：看七个标题的共同句式</b>，推出每段在写什么（2007 全是祈使句 ⟹ 每段＝一条建议）。</td>'
     +'<td><b>段落主旨的概括能力</b>；正确项常是原文<b>没出现</b>的上位词。<b>8–10 min</b>，不能自查。</td></tr>'
     +'<tr><td><b>观点匹配</b><br>（2022）</td>'
     +'<td>Directions 里出现 <code>match each person with his/her statement</code>。<b>第一步：给每个人贴立场标签</b>（支持/反对/中间），只看每段前两句。</td>'
     +'<td><b>立场 ＋ 同义替换</b>；最大坑是<b>主语偷换</b>。<b>8–10 min</b>，立场可复核。</td></tr>'
     +'<tr><td><b>选句填空</b><br>（2008）</td>'
     +'<td>Directions 里出现 <code>some segments have been removed</code>。<b>第一步：给每个空定位形态</b>（段首/段中/段末）。</td>'
     +'<td><b>衔接与连贯</b>；正确项必带<b>唯一词</b>。<b>6–8 min</b>，<b>唯一能自查</b>（填完通读验接缝）。</td></tr></table>'
     +'<p style="margin-top:8px">详细三方对照见 <a href="2008_新题型_如何写作初稿.html">2008 新题型页 · 04 节</a>。</p>',
 traps:['<b>用错手感是 Part B 最贵的失误</b>：拿“找复现词”的手感去做标题匹配 ⟹ 掉进复现陷阱（2007 的 A、G 两个多余项都有词面呼应）；'
        +'拿“概括段落主旨”的手感去做选句填空 ⟹ 忽略指代与照应，43/44 这种连体空必翻车。',
        '<b>三种变体的多余项造法各不相同</b>：标题匹配用<b>段内局部信息</b>做标题；观点匹配造一句<b>没人说过的话</b>；'
        +'选句填空则是<b>内容对但没有它的坑</b>（阶段错位）或<b>与正确项共用专名</b>。'],
 refs:[{p:'2008_新题型_如何写作初稿.html',q:'',label:'2008 · 选句填空（含三方对照表）'},{p:'2007_新题型_家长如何帮孩子.html',q:'',label:'2007 · 标题匹配'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022 · 观点匹配'}]},
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
        '<b>别用「这个词原文有」来给选项背书</b>——原文有的是<u>词</u>，不是<u>词组</u>。'],
 refs:[{p:'2009_T1_习惯与创新.html',q:'q25',label:'2009·T1·25 的 C 项'},{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36B（第九类对照）'}]},

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
 traps:['⚠️ <b>最难防的是「原因已经写明」这一种</b>：题干句里若出现 <code>since / because / as a result of</code>，'
        +'<b>原文已经替你归好因了，选项再补一个原因就是错的</b>。读到这三个词顺手标一个「因」字。',
        '⚠️ <b>动词层面的滑动最隐蔽</b>：<code>reveal → use</code> · <code>cannot → does not</code> · <code>fail to work → refuse to work</code>——'
        +'<b>只动一个动词，归因的性质就从「能力」变成了「态度」。读长难句时把主句的实义动词圈出来。</b>',
        '<b>本卡与三把老刀是一组</b>：<b>R21</b> 管「主体换没换」· <b>R24</b> 管「范围大小对不对」· <b>R35</b> 管「所指对象是谁」· '
        +'<b>R37 管「这句话的<u>性质</u>变了没有」</b>。⟹ 选项与原文之间的四种错位：<b>主体 · 范围 · 所指 · 性质</b>。'],
 refs:[{p:'2009_T2_DNA检测与伪精确.html',q:'q26',label:'2009·T2·26（C、D 双杀）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'q28',label:'2009·T2·28（C 项 reveal→use）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'col1',label:'2009·T2 · 02+ 专栏「主刀三连」'}]},

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
 traps:['⚠️ <b>定位段 ≠ 答案段</b>。本题定位在③段，答案句却在①段——<b>隔了两段</b>。',
        '⚠️ <b>缩写本身常常就是答案</b>：<b>P</b>aternity <b>T</b>esting <b>K</b>it 拆开就写着「亲子鉴定」。<b>题干里的缩写第一时间还原成全称。</b>',
        '<b>反过来也成立</b>：题干问的是「属」而定位句只讲了「某一种」时，同样不能把种的特性放大成属的特性——那就是 <b>R24 范围校验</b> 的活。'],
 refs:[{p:'2009_T2_DNA检测与伪精确.html',q:'q27',label:'2009·T2·27（定位③段，答案在①段）'}]},

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
        '⚠️ <b>标题题里尤其要查</b>：标题若含原文出现过的词，<b>一定回原文核它当时的搭配对象</b>——同一个词换个搭配就是另一个意思。'],
 refs:[{p:'2009_T2_DNA检测与伪精确.html',q:'q29',label:'2009·T2·29（D 项 patent evaluation）'},
       {p:'2009_T2_DNA检测与伪精确.html',q:'col2',label:'2009·T2 · 02++ 专栏「词都在，组合不在」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col4',label:'2009·T3 · 02++++ 专栏（四处拼接，跨句级）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q35',label:'2009·T3·35（B、D 两个拼接项）'}]},

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
 traps:['⚠️ <b>「文章里确实很流行」≠「有支持方在论证」</b>——事实陈述不能当成一方的立场，这是 Fors 类选项的通病。',
        '<b>与 R18（先判作者站没站队）配合用</b>：R18 定<b>方向</b>，R40 定<b>范围与力度</b>。'],
 refs:[{p:'2009_T2_DNA检测与伪精确.html',q:'q30',label:'2009·T2·30'},
       {p:'2008_T1_女性与压力.html',q:'q25',label:'2008·T1·25（中性标题 vs 有立场的标题）'}]}
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
 traps:['⚠️⚠️ <b>「段内最像」不等于「服务于论点」。</b>2009·T3·34 的 A 项用了原词 <code>time</code>（原文 <code>was there time</code>），'
        +'<b>字面重合度最高，却是错的</b>——Claude 盲做就栽在这里。<b>举例目的题里，含原词的选项要重点怀疑。</b>',
        '⚠️ <b>原文只说 <code>was there time</code>，没有 <code>enough</code></b>；且 <code>time for <b>other things</b></code> 并不直接等于 education——'
        +'<b>A 的链条到「有时间」就断了，还得再走一步。选项自己缺一环，也是排除依据。</b>',
        '<b>与 R43 配合用</b>：本题的❺句是 <code>Only when A, 倒装B</code>，<b>被 Only 罩住的 A 才是条件</b>——'
        +'<b>语法判据（R43）与论点判据（R41）指向同一个答案，互为交叉验证。</b>'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'q34',label:'2009·T3·34（Claude 唯一错题）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col2',label:'2009·T3 · 02++ 专栏「错题解剖」'},
       {p:'2008_T4_开国元勋与奴隶制.html',q:'q39',label:'2008·T4·39（写作目的题 · 引入方向）'}]},

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
 traps:['⚠️ <b>边界：这一招只在作者立场明确的驳论文里好用。</b>若文章是<b>中立说明文</b>（如 2009·T2 前四段的客观介绍），没有箭头可画，得换别的招。'
        +'<b>判据：第一段有没有一个明确的褒贬／否定词？</b>',
        '<b>不出题的段落别跳读</b>：2009·T3 的③段一道题都不出，却是④⑤段立论的地基——<b>跳过它，末两段的结论就成了无源之水。</b>',
        '<b>末段推理题可直接用它收尾</b>：题干若问的是全文讨论对象之一，<b>捷径就是「选与全文主旨相符的选项」</b>（35 题即是）。'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'col1',label:'2009·T3 · 02+ 专栏「一支箭头」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q31',label:'2009·T3·31（C 把方向掉了个头）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q35',label:'2009·T3·35（A/B/D 各动一次箭头）'},
       {p:'2009_T1_习惯与创新.html',q:'q21',label:'2009·T1·21（同年另一篇驳论文：习惯从敌人改判为工具）'}]},

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
 traps:['⚠️ <b>2009·T3·34 的 A 项就是「把结果当条件」</b>：原文 <code>Only when humanity began to get its food in a more productive way <b>was there time</b></code>，'
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
 traps:['⚠️⚠️ <b>这是排序策略，不是判据。</b>① 最终仍要<b>回原文验证</b>，不能因为「它俩相反」就随手挑一个；'
        +'② <b>只在两项确实是同一维度的对立时才成立</b>——若只是「看着相反」而维度不同，不适用。',
        '<b>反过来也能用</b>：<b>若有两个选项都指向原文从未讨论过的维度，正确答案基本在剩下两个里</b>。'
        +'2009·T3·33 的 A（纪律性）与 D（组织性）全文零提及 ⟹ <b>只需在 B、C 之间判。</b>'],
 refs:[{p:'2009_T3_教育与经济增长的真实关系.html',q:'q31',label:'2009·T3·31（C 低估 / D 高估）'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'col4',label:'2009·T3 · 02++++ 专栏附「矛盾选项优先法」'},
       {p:'2009_T3_教育与经济增长的真实关系.html',q:'q33',label:'2009·T3·33（A/D 凭空造维度 ⟹ 反向用法）'}]}

];

window.TRICK_READ_META = {
  subject:'英语一 · 阅读',
  source:'2022 Text 1–4 · 2007 Text 1–4 · 2008 Text 1–4 · 2009 Text 1–3 · 2007/2008/2022 新题型 · 2008 完形',
  note:'提炼自本复盘中心各篇阅读真题复盘页的技巧/干扰项分析，随复盘页增长。'
};
