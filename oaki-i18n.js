/* The original English copy stays in the document. Keep both languages in one
   page so scroll position, videos, and the draggable Oaki preview survive a switch. */
(() => {
  const button = document.getElementById('oaki-language-toggle');
  if (!button) return;

  const zh = {
    'Made for big feelings': '为每一种强烈感受而做',
    'Unreliable but sincere. Clumsy but healing.': '不太可靠，却很真诚。笨拙，却很治愈。',
    'Home': '首页',
    'The Story of Oaki': 'Oaki 的故事',
    'Oaki Across Your Day': 'Oaki 陪你每一天',
    'The Exhibition': 'Oaki 展览',
    'Rooftop Short Drama': '天台短剧',
    'Meet the Guardians': '认识守护员',
    'A Little World': '小小世界',
    'Strawberry Oaki': '草莓 Oaki',
    'Cherry Pudding': '樱桃布丁',
    'Pastry Oaki': '糕点 Oaki',
    'Cookie Oaki': '饼干 Oaki',
    'First things to try': '先试试这些',
    'Meet an intern guardian': '认识一位实习守护员',
    'Feed a worry': '喂 Oaki 一件烦心事',
    'Explore the family map': '探索家族图鉴',
    'Watch Oaki change color': '看看 Oaki 如何变色',
    "Visit Oaki's little world": '走进 Oaki 的小小世界',
    'A little world': '小小世界',
    'in the everyday': '藏在日常里',
    "When your desk feels overwhelming, Oaki's little world opens beside you.": '当桌前的一切让你喘不过气，Oaki 的小小世界便在你身边打开。',
    'Still interns,': '还是实习生，',
    'still here': '却始终在你身边',
    'The little Oaki keep failing their guardian exams. They come to us anyway.': '这些小小 Oaki 总是考不过守护员考试，却仍一次次向我们走来。',
    'Feelings bloom': '感受慢慢',
    'into color': '长成颜色',
    'Oaki absorbs exhaustion, emptiness, breakdowns, and joy. Every feeling leaves a color.': 'Oaki 吸收疲惫、空虚、崩溃与快乐。每一种感受都会留下颜色。',
    'Clumsy help,': '笨拙地帮忙，',
    'honest care': '真诚地在乎',
    'Its mission is to make you suffer less. The plan usually goes wrong; the care is real.': '它的任务是让你少难过一点。计划常常出错，关心却是真的。',
    'Oaki across your day': 'Oaki 陪你度过一天',
    'HELLO Oaki!': '你好，Oaki！',
    '“A 3D desktop Oaki you can click and drag. Turn difficult thoughts into little typewritten notes.”': '“一只可以点击、拖动的桌面 Oaki。把难以说出口的念头变成一张张打字便签。”',
    'Stop It Oaki!': '停一下，Oaki！',
    '“Oaki lives in a tiny aquarium on your wrist. Feed it your worries and watch its colour change with your feelings.”': '“Oaki 住在手腕上的小水族箱。把烦恼喂给它，看它随着你的心情变色。”',
    'oaki Touch': 'Oaki Touch',
    '“A collectible phone stand with NFC. Connect the physical Oaki to its app to discover new forms and colours.”': '“带有 NFC 的收藏款手机支架。让实体 Oaki 与应用连接，发现新的形态与颜色。”',
    'oaki oaki exhibition': 'Oaki Oaki 展览',
    '“A walk-through world of five playful spaces, from the Stress Washing Area to the Oaki Salon.”': '“走进五个可以亲身体验的空间，从压力洗涤区一直逛到 Oaki 沙龙。”',
    'Feel it. Touch it.': '感受它。\n触碰它。',
    'Let it go.': '放下它。',
    'Step inside the oaki oaki exhibition: five places for stress, rest, and the small comforts in between.': '走进 Oaki Oaki 展览：五个关于压力、休息，以及日常小小慰藉的空间。',
    'A pause': '在城市上方',
    'above the city.': '暂停片刻。',
    'When work gets too loud, an intern guardian turns up beside you — a little late, but with good intentions.': '当工作喧嚣得让人透不过气，一位实习守护员出现在你身边——虽然迟了点，却带着满满的好意。',
    'THE OAKI FAMILY MAP': 'OAKI 家族图鉴',
    'Meet the interns': '认识这些实习生',
    'who keep showing up': '它们总会再次出现',
    'Six Oaki, six qualities: Fortune, Career, Health, Love, Wisdom, and Courage. Each is a small, sincere intern guardian from a little world tucked inside the everyday, learning to care in its own way.': '六只 Oaki，六种属性：幸运、事业、健康、爱、智慧和勇气。它们都是来自日常里那个小小世界的实习守护员，真诚地学习用自己的方式关心你。',
    'OAKI GUARDIAN': 'OAKI 守护员',
    'Good for:': '适合：',
    'Vibes:': '气质：',
    'Oaki · Fortune': 'Oaki · 幸运',
    'A warm Oaki for moments when a little luck would help.': '温暖的 Oaki，陪你等待一点好运。',
    'welcoming small possibilities': '迎接微小的可能',
    'hopeful, warm, patient': '充满希望、温暖、耐心',
    'Oaki · Wisdom': 'Oaki · 智慧',
    'A pastel Oaki that pauses with you before the next answer.': '柔和的 Oaki，陪你停一停，再寻找答案。',
    'making room to think': '留一点思考空间',
    'gentle, curious, reflective': '温柔、好奇、爱思考',
    'Oaki · Career': 'Oaki · 事业',
    'A spotted Oaki for busy days and one small task at a time.': '斑点 Oaki，陪你在忙碌的一天里一步步前进。',
    'facing the working day': '面对忙碌的工作日',
    'steady, attentive, sincere': '踏实、专注、真诚',
    'Oaki · Health': 'Oaki · 健康',
    'A soft Oaki that reminds you to rest and care for yourself.': '柔软的 Oaki，提醒你休息，也照顾好自己。',
    'taking a needed pause': '在需要时停下来',
    'calm, tender, restorative': '平静、体贴、让人放松',
    'Oaki · Courage': 'Oaki · 勇气',
    'A starry Oaki for trying again when the next step feels big.': '星星 Oaki，陪你在不敢迈步时再试一次。',
    'finding the nerve to begin': '鼓起勇气开始',
    'bright, brave, encouraging': '明亮、勇敢、鼓舞人心',
    'Oaki · Love': 'Oaki · 爱',
    'A pink Oaki that makes space for affection and being seen.': '粉色的 Oaki，留住爱与被看见的感受。',
    'sharing a little kindness': '分享一点善意',
    'sweet, open, caring': '甜蜜、坦率、关怀',
    'Front view of Fortune Oaki': '幸运 Oaki 正面照',
    'Front view of Wisdom Oaki': '智慧 Oaki 正面照',
    'Front view of Career Oaki': '事业 Oaki 正面照',
    'Front view of Health Oaki': '健康 Oaki 正面照',
    'Front view of Courage Oaki': '勇气 Oaki 正面照',
    'Front view of Love Oaki': '爱之 Oaki 正面照',
    'Oaki, Fortune': 'Oaki，幸运',
    'Oaki, Wisdom': 'Oaki，智慧',
    'Oaki, Career': 'Oaki，事业',
    'Oaki, Health': 'Oaki，健康',
    'Oaki, Courage': 'Oaki，勇气',
    'Oaki, Love': 'Oaki，爱',
    'BACK TO': '回到',
    'UP HERE': '回到上面',
    'Back to top': '返回顶部',
    'A little world of oaki oaki!': 'Oaki Oaki 的小小世界！',
    'Meet the guardians ↗': '认识守护员 ↗',
    'From the little': '来自日常里的',
    'world within': '小小世界',
    'From the little world within': '来自日常里的小小世界',
    'Tell Oaki what happened': '告诉 Oaki 发生了什么',
    'Search chapters': '搜索章节',
    'Search': '搜索',
    'Chat with Oaki': '和 Oaki 聊聊',
    'Dictate': '语音输入',
    'Send': '发送',
    'Apps': '应用',
    'Discover': '发现',
    'Toggle sidebar': '展开或收起侧边栏',
    'Back': '返回',
    'Forward': '前进',
    'Oaki rooftop short drama trailer': 'Oaki 天台短剧预告片',
    'Play rooftop trailer': '播放天台预告片',
    'Oaki rooftop short drama': 'Oaki 天台短剧',
    'The story of Oaki': 'Oaki 的故事',
    'Oaki across screens and objects': '屏幕与日常物品里的 Oaki',
    'oaki agent cards': 'Oaki 守护员卡片',
    'Meet the oaki guardians': '认识 Oaki 守护员',
    'Oaki Oaki exhibition opening film': 'Oaki Oaki 展览开场影片',
    'Exhibition opening film': '展览开场影片',
    'Exhibition concept drawing': '展览概念图',
    'Exhibition model': '展览模型',
    'Stress Washing Area': '压力洗涤区',
    'Smash the Keyboard': '敲碎键盘',
    'Lying Flat at the Office': '办公室躺平区',
    'Oaki Distribution Center': 'Oaki 配送中心',
    'Oaki Salon': 'Oaki 沙龙',
    'Choose exhibition slide': '选择展览画面',
    'Previous exhibition slide': '上一张展览画面',
    'Next exhibition slide': '下一张展览画面',
    'Back to the oaki world': '回到 Oaki 的世界',
    'Golden Oaki close-up': '金色 Oaki 特写',
    'Play with Golden Oaki': '与金色 Oaki 互动',
    'Unreliable but sincere. Clumsy but super healing.': '不太可靠，却很真诚。笨拙，却很治愈。',
    'Footer links': '页脚链接',
    'oaki oaki footer': 'Oaki Oaki 页脚',
    'Interactive preview of the oaki app': 'Oaki 应用交互预览',
    'Oaki birthday scene': 'Oaki 生日场景',
    'oaki is loading': 'Oaki 正在加载',
    'Oaki guardians in motion': '正在活动的 Oaki 守护员',
    'oaki oaki header': 'Oaki Oaki 页首',
    'oaki oaki! home': '返回 Oaki Oaki 首页',
    'oaki home': 'Oaki 首页',
    'HELLO Oaki desktop companion beside a laptop': '笔记本电脑旁的 HELLO Oaki 桌面伙伴',
    'Oaki Oaki exhibition concept drawing': 'Oaki Oaki 展览概念图',
    'Oaki Oaki exhibition model': 'Oaki Oaki 展览模型',
    'Overview of the five-space oaki oaki exhibition': 'Oaki Oaki 五个展览空间概览',
    'Stop It Oaki watch face with Oaki in a small aquarium': '小水族箱里的 Oaki 手表界面',
    'oaki Touch collectible phone stand attached to a phone': '连接手机的 Oaki Touch 收藏款支架',
    'Clock': '时钟',
    'Dismiss starter task list': '关闭新手任务清单',
    'Exhibition spaces': '展览空间',
    'Oaki 3D character — move to spin': 'Oaki 3D 模型，可拖动旋转',
    'Interactive 3D Oaki character': '可互动的 Oaki 3D 模型',
    'oaki navigation': 'Oaki 导航'
  };
  const enOverrides = {
    '樱桃布丁造型的 Oaki 玩偶': 'Cherry pudding Oaki plush',
    '草莓奶油造型的 Oaki 玩偶': 'Strawberry cream Oaki plush',
    '趴着的饼干 Oaki 玩偶': 'Cookie Oaki plush',
    '金色酥皮造型的 Oaki 玩偶': 'Golden pastry Oaki plush'
  };
  const originalNodes = new Map();
  const originalAttributes = new Map();
  const attributes = ['aria-label', 'alt', 'placeholder', 'title', 'data-type-text'];
  const skip = 'script,style,svg,noscript,.started-title,.footer-quote,.ha-loader__message,#oaki-language-toggle';

  function translated(value) {
    if (zh[value]) return zh[value];
    const dot = value.match(/^Show exhibition slide (\d+): (.+)$/);
    if (dot) return `显示第 ${dot[1]} 张展览画面：${translated(dot[2])}`;
    const slide = value.match(/^(\d+) of (\d+), (.+)$/);
    if (slide) return `第 ${slide[1]} 张，共 ${slide[2]} 张：${translated(slide[3])}`;
    const egg = value.match(/^打开 Oaki 生日页面：鸡蛋 (\d+)$/);
    if (egg) return value;
    return value;
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim() || node.parentElement?.closest(skip)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  for (let node = walker.nextNode(); node; node = walker.nextNode()) originalNodes.set(node, node.nodeValue);
  document.querySelectorAll('*').forEach(element => {
    const originals = {};
    attributes.forEach(name => { if (element.hasAttribute(name)) originals[name] = element.getAttribute(name); });
    if (Object.keys(originals).length) originalAttributes.set(element, originals);
  });

  function setLanguage(language) {
    const chinese = language === 'zh';
    const anchor = [...document.querySelectorAll('.site .panel')]
      .map(panel => ({panel, rect: panel.getBoundingClientRect()}))
      .sort((a, b) => Math.max(0, Math.min(b.rect.bottom, innerHeight) - Math.max(b.rect.top, 0))
        - Math.max(0, Math.min(a.rect.bottom, innerHeight) - Math.max(a.rect.top, 0)))[0];
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    document.title = chinese ? 'oaki oaki! — 日常实习守护员' : 'oaki oaki! — Everyday Intern Guardians';
    document.querySelector('meta[name="description"]')?.setAttribute('content', chinese
      ? '认识来自日常里小小世界的 Oaki：笨拙、真诚的实习守护员。'
      : 'Meet Oaki, the clumsy, sincere intern guardians from a little world tucked inside the everyday.');
    originalNodes.forEach((original, node) => {
      const word = original.trim();
      node.nodeValue = chinese && zh[word] ? original.replace(word, zh[word]) : original;
    });
    originalAttributes.forEach((originals, element) => {
      for (const [name, value] of Object.entries(originals)) {
        const egg = value.match(/^打开 Oaki 生日页面：鸡蛋 (\d+)$/);
        element.setAttribute(name, chinese ? translated(value) : egg ? `Open Oaki birthday page: egg ${egg[1]}` : enOverrides[value] || value);
      }
    });
    button.textContent = chinese ? 'EN' : '中文';
    button.setAttribute('aria-label', chinese ? 'Switch to English' : 'Switch to Chinese');
    if (anchor) {
      const shift = anchor.panel.getBoundingClientRect().top - anchor.rect.top;
      if (Math.abs(shift) > 1) window.scrollBy({top: shift, behavior: 'instant'});
    }
    const story = document.getElementById('story');
    if (story && story.getBoundingClientRect().bottom > 0 && story.getBoundingClientRect().top < innerHeight) {
      story.dispatchEvent(new Event('started:enter'));
    }
    const footer = document.getElementById('footer');
    if (footer && typeof resetFooterQuote === 'function') {
      resetFooterQuote(footer);
      if (footer.getBoundingClientRect().bottom > 0 && footer.getBoundingClientRect().top < innerHeight && typeof startFooterQuote === 'function') startFooterQuote(footer);
    }
    try { localStorage.setItem('oaki-language', language); } catch (e) {}
  }

  button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh'));
  setLanguage(document.documentElement.lang === 'zh-CN' ? 'zh' : 'en');
})();
