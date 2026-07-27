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
     +'<b>同源变体还有两个：引言/谚语的作用、某概念的作用</b>——法则完全一样（<b>配角只负责引出主角</b>），操作细则见 <b>R16</b>（2007·T4 一篇里连考了这两个）。',
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
     +'<b>正确项三查</b>：① 信息本身为真；② 与题干<b>确有直接因果关系</b>（不是只在同一段出现）；③ <b>方向没反、程度没超</b>。',
 traps:['只走一半因果链就选，会选到中间环节而非最终结果。',
        '<b>「同义复述题干」的选项一律排除</b>：因果题里，题干给了「果」，把这个果换个说法再抄一遍的选项永远是错的（2007·T2·28 的 C「莎凡特是不会重演的极端个案」＝题干本身，不是原因）。',
        '<b>把「并列」读成「因果」</b>：两条信息都在文中，但原文从没把它们连过线。2007·T3·33 的 C——养老金减少与健康储蓄计划是<b>并排的两笔坏账</b>（都属于「风险转嫁」的表现），不是「后者补偿前者」。<b>并列段落先切块，再按块答题。</b>',
        '<b>把「假设的触发条件」读成「已发生的趋势」</b>：2007·T3·31 的 B——原文 <code>if the primary earner <b>got laid off</b></code> 只是假设情境（万一顶梁柱失业），不是说失业概率上升。<b>条件句里的内容是设想，不是事实。</b>',
        '<b>⭐做完的最后一个动作（30 秒，能救回一道题）</b>：把选中的那项<b>读出主语</b>——「我选的这句话，主语是谁？原文里这个主语发生的是<b>什么程度</b>的变化？」2007·T3·31 问完这两句，A 的两个毛病（主语错 + 程度超）会同时暴露。'],
 refs:[{p:'2007_T3_中产家庭的风险转嫁.html',q:'q31',label:'2007·T3·31'},{p:'2007_T3_中产家庭的风险转嫁.html',q:'q32',label:'2007·T3·32'},{p:'2022_T1_塑料文物保护.html',q:'q23',label:'T1·23'},{p:'2022_T4_解雇保护悖论.html',q:'q39',label:'T4·39'},{p:'2007_T2_智力测试的边界.html',q:'q28',label:'2007·T2·28'}]},

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

{id:'R8', tier:'🔴', qt:'通用 · 排除选项', title:'干扰项类型总纲（十一类）：认出类型就秒排',
 trig:['排除三个错误选项时','拿不准该选哪个'],
 flow:'考研阅读的错误项<b>几乎都能归进下面这几类</b>（前五类最常见，后面几类是本复盘中心逐篇补上的），认出是哪一类，排除就快且稳：',
 tmpl:'<table class="tk"><tr><th>类型</th><th>长相</th><th>例</th></tr>'
     +'<tr><td><b>无中生有</b></td><td>文中根本没提</td><td>T1·24A「谈钱」全文没有</td></tr>'
     +'<tr><td><b>偷换</b></td><td>换概念/主宾/时态/段落</td><td>T1·21B 偷换首句、T2·30C 换时态</td></tr>'
     +'<tr><td><b>反向</b></td><td>把原文意思说反</td><td>T2·28D、T4 多处</td></tr>'
     +'<tr><td><b>张冠李戴</b></td><td>把 A 的事安到 B 头上</td><td>T1·23C 化学家的活安给博物馆；2007·T1·23D 把「刻意练习」的三要素安给「好记忆」</td></tr>'
     +'<tr><td><b>过度推断</b></td><td>顺着原文多推一步</td><td>T2·30C 推两步；2007·T2·29C 以偏概全</td></tr>'
     +'<tr><td><b>杂糅</b>（第六类·最难）</td><td>把<b>相邻两句</b>的成分拼成一句</td><td>2007·T2·29B 把④句的「IQ⇄领导力相关」和⑤句的「SAT」拼成「IQ 与 SAT 高度相关」</td></tr>'
     +'<tr><td><b>凭空比较</b></td><td>原文无比较对象，选项加比较级</td><td>2007·T2·27B 的 <b>More</b> versions——比谁多？原文没给；2007·T3·34A 的 <b>outweigh</b>——原文只说两种 fallout 一前一后，从没比过轻重（<b>「先后」≠「轻重」</b>）</td></tr>'
     +'<tr><td><b>程度升级</b>（第八类）</td><td>削弱→消失；有缺陷→已淘汰；变糟→毁灭；趋势→结局</td><td>2007·T3·31A 把「安全网被削弱」拉满成 <b>has disappeared</b>；2007·T3·35D 把「岌岌可危」说成 <b>in Ruins</b>（已成废墟）；2007·T2·29D 把「有局限」说成「过时」</td></tr>'
     +'<tr><td><b>偷换修饰对象</b>（第九类·极隐蔽）</td><td>形容词照抄原文，<b>被修饰的名词换掉</b></td><td>2007·T4·36B：<code>feeble <b>corporation governance</b></code>（乏力的公司治理）→ 说成「乏力的<b>老板与董事会关系</b>」</td></tr>'
     +'<tr><td><b>已知换未知</b></td><td>把原文<b>已经交代清楚</b>的东西，说成「有待查明/尚不知道」的东西</td><td>2007·T4·37B：被泄露的数据是什么，句首就写明了（<code>customer and employee data</code>）——已知的东西不会是「要去查明」的东西</td></tr>'
     +'<tr><td><b>泛化 / 扩大范围</b></td><td>一部具体的法 → 一整类立法；一个州 → 全世界；一个技巧 → 整类行为</td><td>2007·T4·40C：加州那部「数据被盗须告知」的法 → <b>security legislation</b>；美国首个州 → <b>takes the lead</b>（而欧洲早有罚则）</td></tr></table>'
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
     +'主旨句只在<b>首尾段</b>找，绝不在中间的实验细节里找。<br>'
     +'<b>⭐标题题三查（四项主语相同、只差后半截时尤其好用）：</b><br>'
     +'· <b>① 查对象</b>：讨论的主角对不对？<br>'
     +'· <b>② 查特点/关系</b>：它处在什么状态、跟谁发生关系？（2007·T3·35 的 A <code>on the Alert</code> 把<b>被动挨打</b>写成<b>主动戒备</b> ✗；C <code>in Conflict</code> 把<b>并列</b>——「老家庭惨，年轻家庭也 <code>not any better</code>」——写成<b>对立</b> ✗）<br>'
     +'· <b>③ 查程度</b>：到哪一步了？（同题 D <code>in Ruins</code> 把「岌岌可危」说成「已成废墟」✗；正解 B <code>on the Cliff</code>＝<b>危险已到眼前但尚未坠落</b>，正对原文 <code><b>already</b> overburdened shoulders</code> 与 <code>may not be far behind</code> 的未然语气）<br>'
     +'三关全过的才是答案。<b>写作里给段落起小标题同理：对象 + 关系 + 程度三者都要对准。</b>',
 traps:['<b>「沾边但没打到靶心」最难排</b>：2007·T1·25 的 B「种瓜得瓜」重心是「付出与回报的对应」，完全没触碰「天赋」这一边 → 错。',
        '反向谚语反而好排：同题 D「有其父必有其子」讲遗传，与 made, not born 正相反。',
        '把某段的细节当主旨：谚语题问的是全文 message，不是某个实验说明了什么。',
        '<b>把趋势说成结局</b>是标题题最常见的错法（2007·T3·35D）。判断依据看原文的<b>未然语气</b>：<code>may / already but not yet / on the brink</code> 都表示「还没到最后一步」。',
        '<b>警告是说给谁听的，决定标题的主语状态</b>：2007·T3 末句「政治后果不远了」是<b>写给政策制定者的警告</b>，全文把中产写成<b>被动承受方</b>（首句用被动语态 <code>has been transformed by</code>），所以「中产自己保持警惕」的 A 项从一开始就站错了位。'],
 refs:[{p:'2007_T3_中产家庭的风险转嫁.html',q:'q35',label:'2007·T3·35'},{p:'2007_T1_刻意练习造就高手.html',q:'q25',label:'2007·T1·25'},{p:'2022_T1_塑料文物保护.html',q:'q25',label:'T1·25'}]},

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
        '<b>括号里的信息也受题干段落限定约束</b>：先确认这个括号在不在题干指定的那一段（配合 R7 用）。'],
 refs:[{p:'2007_T2_智力测试的边界.html',q:'q27',label:'2007·T2·27'},{p:'2022_T2_Z世代与学位.html',q:'q29',label:'T2·29'}]},

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
     +'<b>③ 答案 = 这个意群的主旨，一律往上抽一层。</b>',
 tmpl:'<b>⭐两个标本都在 2007·T4（一篇里连出两道，说明命题人吃准了这个考法）</b>：<br>'
     +'· <b>36 题 · 引言/谚语</b>：<code>It never rains but it pours</code> 之后<b>冒号点名 <b>data insecurity</b></code>，下一句主语又是 information protection → 答案 D <b>the severity of data leakage</b>。'
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
 refs:[{p:'2007_T4_数据泄密的公司.html',q:'q36',label:'2007·T4·36'},{p:'2007_T4_数据泄密的公司.html',q:'q38',label:'2007·T4·38'},{p:'2007_T1_刻意练习造就高手.html',q:'q21',label:'2007·T1·21'}]},

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
 refs:[{p:'2007_新题型_家长如何帮孩子.html',q:'q42',label:'2007·新题型·42（首句陷阱）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q43',label:'2007·新题型·43（复现陷阱）'},{p:'2007_新题型_家长如何帮孩子.html',q:'q44',label:'2007·新题型·44（反向引申）'},{p:'2022_新题型_动物园之辩.html',q:'',label:'2022·新题型（观点匹配对照）'}]}

];

window.TRICK_READ_META = {
  subject:'英语一 · 阅读',
  source:'2022 Text 1–4 · 2007 Text 1–4 · 2007/2022 新题型',
  note:'提炼自本复盘中心各篇阅读真题复盘页的技巧/干扰项分析，随复盘页增长。'
};
