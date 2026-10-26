# -*- coding: utf-8 -*-
"""历年真题词汇汇总 → data_vocab.js（词汇背诵页）＋ data_optvocab.js（各阅读页「选项词汇」）

用法：先跑一次 python3 _tools/ocd_index.py（解出系统自带《牛津英汉汉英词典》到 _tools/.cache/），
      再 python3 _tools/build_vocab.py。每新做一篇复盘页、改了词卡，重跑本脚本即可。

来源：
  1. 每个复盘页里的词卡 `const V = {...}`（阅读 / 完形 / 新题型 / 翻译；作文页的是写作表达，不收）
     ——这是「真题语境义」，逐篇按原句定的义项。
  2. 牛津英汉：给每个词挂「常见义」，背的时候两者并排，防止把语境僻义当成本义背偏。
  3. 阅读题的题干 + 四个选项：其中的词标成「题目词汇」；选项里的生词即使没做成词卡，也用牛津义项补一条。
"""
import re, json, glob, os, subprocess, tempfile, collections, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OCD = json.load(open(os.path.join(ROOT, '_tools', '.cache', 'ocd.json'), encoding='utf-8'))

FLD = {'Law': '法律', 'Finance': '金融', 'Business': '商业', 'Economics': '经济', 'Politics': '政治', 'Medicine': '医学',
       'Psychology': '心理', 'Biology': '生物', 'Zoology': '动物', 'Botany': '植物', 'Chemistry': '化学', 'Physics': '物理',
       'Computing': '计算机', 'Technology': '技术', 'Mathematics': '数学', 'Statistics': '统计', 'Philosophy': '哲学',
       'Religion': '宗教', 'History': '历史', 'Linguistics': '语言学', 'Literature': '文学', 'Art': '艺术', 'Music': '音乐',
       'Theatre': '戏剧', 'Cinema': '电影', 'Journalism': '新闻', 'Administration': '行政', 'Military': '军事',
       'Sociology': '社会学', 'Anatomy': '解剖', 'Astronomy': '天文', 'Geology': '地质', 'Geography': '地理',
       'Meteorology': '气象', 'Farming': '农业', 'Ecology': '生态', 'Telecommunications': '通信', 'University': '大学',
       'School': '教育', 'Education': '教育', 'Sport': '体育', 'Agriculture': '农业', 'Insurance': '保险',
       'Commerce': '商业', 'Accounting': '会计', 'Marketing': '营销', 'Industry': '工业', 'Architecture': '建筑',
       'Photography': '摄影', 'Television': '电视', 'Radio': '广播', 'Printing': '印刷', 'Publishing': '出版',
       'Electricity': '电学', 'Building': '建筑', 'Transport': '交通', 'Aviation': '航空', 'Nautical': '航海'}

def strip(h): return html.unescape(re.sub(r'<[^>]+>', '', h or '')).strip()
def cjk(s): return set(c for c in s if '一' <= c <= '鿿')
STOPC = cjk('的了地得是在和与或及等某人事物使让被把一个种些这那其之于为以对')

# ---------- 1. 从各页抽词卡（JavaScriptCore 执行对象字面量，比正则稳） ----------
def block(s, start):
    i = s.index('{', start); depth = 0; q = None; j = i
    while j < len(s):
        c = s[j]
        if q:
            if c == '\\': j += 2; continue
            if c == q: q = None
        else:
            if c in '"\'`': q = c
            elif c == '/' and s[j+1] == '*': j = s.index('*/', j) + 2; continue
            elif c == '/' and s[j+1] == '/': j = s.index('\n', j); continue
            elif c == '{': depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0: return s[i:j+1]
        j += 1

PAGES = {}; SRC = {}
js = 'var OUT={};\n'
for f in sorted(glob.glob(os.path.join(ROOT, '20[0-9][0-9]_*.html'))):
    name = os.path.basename(f)[:-5]
    year, typ, title = name.split('_', 2)
    if typ == '作文': continue
    s = open(f, encoding='utf-8').read(); SRC[name] = s
    PAGES[name] = [int(year), typ, title]
    m = re.search(r'(const|var|let)\s+V\s*=\s*\{', s)
    if not m: continue
    js += 'OUT[%s]=(function(){return %s;})();\n' % (json.dumps(name), block(s, m.start()))
js += 'JSON.stringify(OUT);'
with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as t:
    t.write(js); tmp = t.name
CARDS = json.loads(subprocess.run(['osascript', '-l', 'JavaScript', tmp], capture_output=True).stdout.decode('utf-8'))
os.unlink(tmp)

# ---------- 2. 牛津查词 ----------
def lemmas(w):
    w = w.lower().strip(); out = [w]
    for a, b in [('ies', 'y'), ('ied', 'y'), ('s', ''), ('es', ''), ('ed', 'e'), ('ed', ''), ('d', ''), ('ing', 'e'), ('ing', ''),
                 ('ily', 'y'), ('ly', ''), ('er', ''), ('est', '')]:
        if w.endswith(a) and len(w) - len(a) >= 3: out.append(w[:-len(a)] + b)
    m = re.search(r'(.)\1(ed|ing)$', w)
    if m: out.append(w[:-len(m.group(0))] + m.group(1))
    return list(dict.fromkeys(out))

def look_word(w):
    for l in lemmas(w):
        if l in OCD and OCD[l]['g']: return l
    return None

ARTS = {'be', 'one', "one's", 'one’s', 'sb', 'sth', "sb's", 'a', 'an', 'the', 'to', 'of', 'oneself', 'sb’s', '…', '...'}
def norm_w(w):
    w = strip(w).replace('’', "'").replace('‘', "'")
    w = re.sub(r'[（(][^）)]*[）)]', ' ', w)
    w = re.sub(r'\s*(…|\.\.\.)\s*', ' … ', w)
    return re.sub(r'\s+', ' ', w).strip()

def oxford(w):
    """返回 (词典词头, 义项组)；义项组 = [[词性, [[释义提示, 领域, 译文], ...]], ...]，短语只取短语动词或例句"""
    w = norm_w(w).lower()
    w = re.split(r'\s*[/／]\s*', w)[0]
    toks = [t for t in re.findall(r"[a-z][a-z'\-]*", w)]
    if not toks: return None, None
    if len(toks) == 1:
        l = look_word(toks[0])
        return (l, OCD[l]['g']) if l else (None, None)
    core = [t for t in toks if t not in ARTS]
    if not core: return None, None
    phrase = ' '.join(core)
    for t in core[:2]:
        for l in lemmas(t):
            e = OCD.get(l)
            if not e: continue
            for pv, g in e['pv'].items():
                pl = pv.strip().lower()
                if pl == phrase or (len(core) >= 2 and all(any(x in pl for x in lemmas(k)[:3]) for k in core[:2]) and len(pl.split()) <= len(core) + 1):
                    return pv.strip(), g
    for t in core[:2]:
        for l in lemmas(t):
            e = OCD.get(l)
            if not e: continue
            hits = []
            for c, tr in e['con']:
                cl = ' ' + c.lower() + ' '
                if all(any(' ' + x in cl for x in lemmas(k)[:4]) for k in core):
                    hits.append([c.strip(' ;'), tr])
            if hits: return phrase, [['例', [['', '', '「%s」%s' % (c, tr)] for c, tr in hits[:2]]]]
    return None, None

def trim(g, n_pos=3, n_sense=4):
    out = []
    for pos, ss in g[:n_pos]:
        out.append([pos, [[ind, fld, tr] for ind, fld, tr in ss[:n_sense]]])
    return out

def alltrans(g): return ''.join(x[2] for pos, ss in (g or []) for x in ss)

# ---------- 3. 合并 ----------
def qref(ex):  # 原句出自题干 / 选项
    return bool(re.search(r'（\s*\d{1,2}\s*(题|[A-D])\s*）|（\d{1,2}\s*题干）|\(\d{1,2}[A-D]?\)|^\s*\[?[A-D]\]', ex or ''))
W = collections.OrderedDict()
for page in sorted(CARDS, key=lambda p: (PAGES[p][0], p)):
    for k, c in CARDS[page].items():
        w = norm_w(c.get('w', ''))
        if not w: continue
        key = w.lower()
        e = W.get(key)
        if not e:
            e = W[key] = {'w': w, 'ipa': c.get('ipa', ''), 'pos': c.get('pos', ''), 'tags': set(), 'ctx': [], 'mem': [], 'syn': '', 'conf': '', 'en': c.get('en', ''), 'q': False}
        e['tags'] |= set(c.get('tags') or [])
        ex = c.get('ex', '')
        e['ctx'].append([page, k, c.get('cn', ''), ex])
        if qref(strip(ex)): e['q'] = True
        if c.get('mem') and not e['mem']: e['mem'].append(c['mem'])
        if not e['syn'] and c.get('syn'): e['syn'] = c['syn']
        if not e['conf'] and c.get('conf'): e['conf'] = c['conf']
        if not e['ipa'] and c.get('ipa'): e['ipa'] = c['ipa']

# ---------- 4. 阅读题：题干 + 选项里的词 ----------
CORP = collections.Counter()
for e in OCD.values():
    for c, tr in e['con']: CORP.update(re.findall(r"[a-z]+", c.lower()))
FUNC = set('''a an the and or but if then than so as of to in on at by for with from into onto about over under after before
since until while when where which who whom whose what why how that this these those it its they them their there here is are was were
be been being am do does did done have has had having will would shall should can could may might must not no nor also only just very
more most less least much many some any each every all both either neither other another such same own i you he she we me him her us
my your our his one ones up down out off again further once too yet still even ever never always often sometimes already almost
whether because although though unless however therefore thus hence else rather quite enough several few little lot lots per via
mr mrs ms dr st etc vs ie eg'''.split())
def is_basic(w):  # 牛津例句里出现得多的词＝基础词，选项里就不单列了
    return w in FUNC or CORP[w] >= 12 or len(w) <= 3

INDEX = {key: key for key in W if ' ' not in key}

OPT = {}   # page -> {qid: [[where, surface, vocabKey]]}
AUTO = collections.OrderedDict()
for page, s in SRC.items():
    if not PAGES[page][1].startswith('T'): continue
    for qm in re.finditer(r'<div class="q"[^>]*id="(q\d+)"[^>]*>(.*?)<div class="expl"', s, re.S):
        qid, body = qm.group(1), qm.group(2)
        parts = []
        st = re.search(r'<p class="stem">(.*?)</p>', body, re.S)
        if st: parts.append(('题干', strip(re.sub(r'<span class="qt">.*?</span>', '', st.group(1)))))
        for om in re.finditer(r'<div class="opt">(.*?)</div>', body, re.S):
            t = strip(om.group(1)); m = re.match(r'\[([A-D])\]\s*', t)
            parts.append((m.group(1) if m else '?', t[m.end():] if m else t))
        got = []; seen = set(); spans = {}
        for where, text in parts:
            low = ' ' + re.sub(r"[^a-z' \-]", ' ', text.lower().replace('’', "'")) + ' '
            # 先认词卡里的多词短语
            for key, e in sorted(W.items(), key=lambda kv: -len(kv[0])):
                if ' ' not in key or key in seen: continue
                core = [t for t in re.findall(r"[a-z][a-z'\-]*", key) if t not in ARTS]
                here = any(x[0] == page for x in e['ctx'])
                if len(core) < 2 or (not here and len(core) < 3): continue
                pat = r'\b' + r'\w*(?:\W+\w+){0,2}?\W+'.join(re.escape(t[:max(4, len(t) - 2)]) for t in core) + r'\w*'
                m = re.search(pat, low)
                if not m or any(m.start() >= a and m.end() <= b for a, b in spans.get(where, [])): continue
                spans.setdefault(where, []).append((m.start(), m.end()))
                got.append([where, e['w'], key]); seen.add(key)
                for t in core: seen.add('~' + t)
            for tok in re.findall(r"[a-z][a-z\-']+", low):
                tok = tok.strip("'-")
                if tok in FUNC or "'" in tok or '~' + tok in seen: continue
                key = None
                for l in lemmas(tok):
                    if l in INDEX: key = INDEX[l]; break
                if key:
                    here = any(x[0] == page for x in W[key]['ctx'])
                    if key not in seen and (here or not is_basic(tok)):
                        got.append([where, tok, key]); seen.add(key)
                    continue
                if is_basic(tok): continue
                l = look_word(tok)
                if not l or is_basic(l) or l in seen: continue
                akey = '@' + l
                a = AUTO.get(akey)
                if not a:
                    a = AUTO[akey] = {'w': l, 'ipa': '/' + OCD[l]['ph'] + '/' if OCD[l]['ph'] else '', 'pos': '', 'tags': {'auto'}, 'ctx': [], 'mem': [], 'syn': '', 'conf': '', 'en': '', 'q': True}
                a['ctx'].append([page, qid, '', '%s（%s %s）' % (text, qid[1:], where if where != '题干' else '题干')])
                got.append([where, tok, akey]); seen.add(l)
        if got: OPT.setdefault(page, {})[qid] = got
        for where, tok, key in got:
            if key in W: W[key]['q'] = True

# ---------- 5. 输出 ----------
pid = {p: i for i, p in enumerate(sorted(PAGES, key=lambda p: (PAGES[p][0], p)))}
def cats(e, ox):
    t = e['tags']; c = []
    multi = ' ' in e['w'].strip() or 'phrase' in t
    if 'auto' in t: c.append('opt')
    elif multi: c.append('phrase')
    else: c.append('word')
    if 'poly' in t: c.append('poly')
    if 'write' in t: c.append('write')
    if e['q']: c.append('q')
    return c
def bigrams(s):
    s = re.sub(r'[^\u4e00-\u9fff]+', '|', s)
    return set(s[i:i+2] for i in range(len(s) - 1) if '|' not in s[i:i+2])
def primary(cn):  # 语境义的「主义项」：<b> 里那段，或第一个分隔符之前
    m = re.search(r'<b>(.*?)</b>', cn or '')
    t = strip(m.group(1)) if m else strip(cn)
    t = re.sub(r'^[⚠️⭐\s]+', '', t)
    return re.split(r'[；;，,、②（(]', t.lstrip('①'))[0]
TERMS = {k: v for k, v in json.load(open(os.path.join(ROOT, '_tools', 'fld_terms.json'), encoding='utf-8')).items() if not k.startswith('_')}
HINT = {'法律': '法诉判罪审律案刑罚权证告院禁约规监司宪执照许', '经济商业': '经济财税市股资金融贸商价利债货银投产企业营销本收支雇薪零售垄断衰退通胀预算订户', '政治': '政党选议国治府权外交统民革官殖王君移公派',
        '科技': '科技术数据算网电机研实验码基因物理化学星器航智能统计宽带', '医学健康': '医病药疗症健康疫诊体心理营养肌肉卵巢激素蛋白热量剂手术残保险免卫焦虑福祉', '教育学术': '教学校课考位研论文证书刊录毕业',
        '环境生态': '环境生态气候污染能源物种碳排保护农肥海火山大气栖濒森林温乡', '文化艺术': '文艺术剧乐博展诗画宗演作品化伦道德仪式考古遗古董雕塑杰新闻社论审稿记者', '社会心理': '社会人口心理性别族群行为情青少年意识偏见歧视平等贫困千禧自尊多样个性人格认同'}
AMBIG = set('state rule trust act will board share fine hear dismiss test review design cost price party interest bill stock bond cell code organ operation stream platform network culture band major grade course degree sentence appeal charge power firm company market model term green water oil gas energy custom review critic collection exhibit field return yield issue measure check balance account capital credit draft strike union press media program'.split())
FIELD_OF = {}
for f, lst in TERMS.items():
    for t in lst: FIELD_OF.setdefault(t.lower(), []).append(f)
def fields(e, g):
    key = e['w'].lower()
    cands = FIELD_OF.get(key) or ([] if key.endswith('ly') else next((FIELD_OF[l] for l in lemmas(key) if l in FIELD_OF), []))
    if not cands: return []
    ctx = ''.join(primary(x[2]) for x in e['ctx'] if x[2]) or ''.join(x[2] for pos, ss in (g or []) for x in ss[:2])
    out = []
    for f in cands:
        if any(ch in ctx for ch in HINT[f]): out.append(f)   # 语境主义项要落在这个领域里（appreciate＝认识到 就不算金融词）
    return out
def _fields_oxford(e, g):   # 旧法：按牛津领域标签判，误判太多，留作参考
    a = set().union(*[bigrams(primary(x[2])) for x in e['ctx']]) if e['ctx'] else set(); out = []
    for pos, ss in g or []:
        for ind, fld, tr in ss:
            if fld and a and (bigrams(tr) & a):
                for f in fld.split():
                    if f in FLD and FLD[f] not in out: out.append(FLD[f])
    return out

words = []; idmap = {}
allw = list(W.items()) + list(AUTO.items())
for key, e in allw:
    hw, g = oxford(e['w'] if 'auto' not in e['tags'] else e['w'])
    g = trim(g) if g else []
    fl = fields(e, g)
    c = cats(e, g)
    if fl: c.append('fld')
    pages = list(dict.fromkeys(x[0] for x in e['ctx']))
    if 'auto' in e['tags']:
        ipa = e['ipa']; pos = ' · '.join(dict.fromkeys(p for p, _ in g))[:40]
    else:
        ipa = e['ipa']; pos = e['pos']
    item = {'w': e['w'], 'ipa': ipa, 'pos': pos, 'c': c, 'n': len(pages),
            'y': sorted(set(PAGES[p][0] for p in pages)),
            'x': [[pid[p], cn, ex] for p, k, cn, ex in e['ctx']][:5]}
    if fl: item['f'] = fl
    if g: item['o'] = g
    if e['mem']: item['m'] = e['mem']
    if e['syn']: item['s'] = e['syn']
    if e['conf']: item['k'] = e['conf']
    if e.get('en'): item['e'] = e['en']
    idmap[key] = len(words); words.append(item)

pages_out = [[PAGES[p][0], PAGES[p][1], PAGES[p][2], p + '.html'] for p in sorted(PAGES, key=lambda p: (PAGES[p][0], p))]
cnt = collections.Counter(c for w in words for c in w['c'])
meta = {'built': __import__('datetime').date.today().isoformat(), 'n': len(words), 'cards': sum(len(v) for v in CARDS.values()),
        'pages': len(CARDS), 'cat': dict(cnt)}
with open(os.path.join(ROOT, 'data_vocab.js'), 'w', encoding='utf-8') as f:
    f.write('/* 由 _tools/build_vocab.py 生成，别手改。x＝真题语境 [页序号, 语境义, 原句]；o＝牛津英汉常见义 [[词性,[[提示,领域,译文]]]] */\n')
    f.write('window.VOCAB=' + json.dumps({'meta': meta, 'pages': pages_out, 'words': words}, ensure_ascii=False, separators=(',', ':')) + ';\n')

PHR = {}   # 页 → 本篇的多词短语卡（小写词形, 卡片）
for page, cs in CARDS.items():
    for k, c in cs.items():
        w = norm_w(c.get('w', '')).lower()
        if ' ' in w: PHR.setdefault(page, []).append((w, {'w': norm_w(c['w']), 'cn': c.get('cn', ''), 'tags': c.get('tags') or []}))
# 选项词汇：每页只带自己用到的词。语境义只取「本篇词卡」给的那一条——别篇的语境义不搬过来，避免张冠李戴
ov = {}; vw = {}
for page, qs in OPT.items():
    P = ov[page + '.html'] = {}
    for qid, lst in qs.items():
        row = []
        for wh, sf, k in lst:
            i = idmap[k]; w = words[i]
            src = W.get(k) or AUTO.get(k)
            here = [(c, 'poly' in (CARDS[pg][kk].get('tags') or [])) for pg, kk, c, ex in src['ctx'] if pg == page and c]
            if not here:   # 本篇没单做这个词，但它是本篇某个短语卡的一部分（circuit ⊂ Court of Appeals for the Federal Circuit）
                for pk, pe in PHR.get(page, []):
                    if any(l in pk.split() for l in lemmas(sf.lower())):
                        here = [('<span style="font-weight:400">见本篇短语 <i>%s</i>：</span>%s' % (html.escape(pe['w']), pe['cn']), 'poly' in pe['tags'])]; break
            row.append([wh, sf, i, here[0][0] if here else '', 1 if here and here[0][1] else 0])
            if i not in vw:
                vw[i] = [w['w'], w['ipa'], w['pos'], '；'.join(tr for pos, ss in w.get('o', [])[:2] for ind, fld, tr in ss[:3])[:90], 'poly' in w['c'], w['n']]
        P[qid] = row
with open(os.path.join(ROOT, 'data_optvocab.js'), 'w', encoding='utf-8') as f:
    f.write('/* 由 _tools/build_vocab.py 生成。OPTV.q[页][题]=[[位置,原词,词号,本篇语境义,本篇是否按熟词僻义讲]]；OPTV.w[词号]=[词,音标,词性,牛津常见义,是否熟词僻义,真题出现篇数] */\n')
    f.write('window.OPTV=' + json.dumps({'q': ov, 'w': {str(k): v for k, v in vw.items()}}, ensure_ascii=False, separators=(',', ':')) + ';\n')

print('cards', meta['cards'], 'pages', meta['pages'], '→ words', len(words), dict(cnt))
print('option-vocab pages', len(ov), 'words', len(vw), 'auto', len(AUTO))
print('sizes', os.path.getsize(os.path.join(ROOT, 'data_vocab.js')) // 1024, 'KB /', os.path.getsize(os.path.join(ROOT, 'data_optvocab.js')) // 1024, 'KB')
