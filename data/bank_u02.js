// U02 題庫分片（共 36 題）
(function (root) {
  const DATA = [
  {
    "id": "u02_001",
    "unitId": "U02",
    "category": "最簡分數",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.26 例題 1",
    "verified": true,
    "question": "六年一班共有 28 個人，其中 12 個人參加合唱團。參加合唱團的人數占全班人數的幾分之幾？（請化為最簡分數）",
    "answer": "$\\frac{3}{7}$",
    "steps": [
      "求比例：$\\frac{12}{28}$",
      "分子分母求最大公因數：$(12, 28) = 4$",
      "約分：$\\frac{12 \\div 4}{28 \\div 4} = \\frac{3}{7}$"
    ],
    "insight": "分子和分母互質（最大公因數是 1）的分數，就是最簡分數。",
    "trap": {
      "code": "ERR_NOT_FULLY_REDUCED",
      "text": "只約除以 2 寫成 6/14，未約分至最簡分數。"
    },
    "work": "sm"
  },
  {
    "id": "u02_002",
    "unitId": "U02",
    "category": "最簡分數",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.27 例題 2",
    "verified": true,
    "question": "把下列分數化為最簡分數：<br>① $\\frac{18}{24}$　② $\\frac{35}{42}$　③ $2\\frac{16}{20}$",
    "answer": "① $\\frac{3}{4}$　② $\\frac{5}{6}$　③ $2\\frac{4}{5}$",
    "steps": [
      "① (18, 24) = 6 → 18/24 = 3/4",
      "② (35, 42) = 7 → 35/42 = 5/6",
      "③ 帶分數整數部分不變，(16, 20) = 4 → 2又4/5"
    ],
    "work": "sm"
  },
  {
    "id": "u02_003",
    "unitId": "U02",
    "category": "同分母分數除法",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.28 例題 1",
    "verified": true,
    "question": "有 3 條長度相同的緞帶，每 $\\frac{1}{4}$ 條剪成一段，全部剪完，可以剪成幾段？",
    "answer": "12 段",
    "steps": [
      "1 條緞帶有 4 個 $\\frac{1}{4}$ 條",
      "3 條緞帶有 $3 \\times 4 = 12$ 個 $\\frac{1}{4}$ 條",
      "算式：$3 \\div \\frac{1}{4} = 3 \\times 4 = 12$ 段"
    ],
    "insight": "整數除以單位分數 $\\frac{1}{n}$，相當於乘以 $n$。",
    "work": "sm"
  },
  {
    "id": "u02_004",
    "unitId": "U02",
    "category": "同分母分數除法",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.29 例題 2",
    "verified": true,
    "question": "有 $\\frac{6}{7}$ 公升的柳橙汁，每 $\\frac{2}{7}$ 公升倒滿 1 杯，全部倒完，共可倒滿幾杯？",
    "answer": "3 杯",
    "steps": [
      "$\\frac{6}{7}$ 是 6 個 $\\frac{1}{7}$，$\\frac{2}{7}$ 是 2 個 $\\frac{1}{7}$",
      "同分母分數相除，直接用分子除以分子：$6 \\div 2 = 3$",
      "算式：$\\frac{6}{7} \\div \\frac{2}{7} = 6 \\div 2 = 3$ 杯"
    ],
    "insight": "同分母代表計數單位相同，直接算「幾個單位除以幾個單位」。",
    "work": "sm"
  },
  {
    "id": "u02_005",
    "unitId": "U02",
    "category": "同分母分數除法",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.29 例題 3",
    "verified": true,
    "question": "一袋麵粉重 $\\frac{7}{9}$ 公斤，做一塊麵包需要 $\\frac{2}{9}$ 公斤，全部用完，可以做出幾塊麵包？",
    "answer": "$3\\frac{1}{2}$ 塊（或 $\\frac{7}{2}$ 塊）",
    "steps": [
      "同分母分子相除：$7 \\div 2 = \\frac{7}{2} = 3\\frac{1}{2}$",
      "算式：$\\frac{7}{9} \\div \\frac{2}{9} = 7 \\div 2 = 3\\frac{1}{2}$ 塊"
    ],
    "work": "sm"
  },
  {
    "id": "u02_006",
    "unitId": "U02",
    "category": "帶分數除法",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.30 例題 5",
    "verified": true,
    "question": "有 $2\\frac{3}{4}$ 公升的果汁，每 $1\\frac{1}{4}$ 公升裝 1 瓶，全部裝完，可裝成幾瓶？",
    "answer": "$2\\frac{1}{5}$ 瓶（或 $\\frac{11}{5}$ 瓶）",
    "steps": [
      "遇到帶分數相除，第一步必須化為假分數！",
      "$2\\frac{3}{4} = \\frac{11}{4}$， $1\\frac{1}{4} = \\frac{5}{4}$",
      "同分母相除：$\\frac{11}{4} \\div \\frac{5}{4} = 11 \\div 5 = \\frac{11}{5} = 2\\frac{1}{5}$ 瓶"
    ],
    "trap": {
      "code": "ERR_FRAC_DIV_MIXED_DIRECT",
      "text": "帶分數直接相除（把 2÷1 加上 3/4÷1/4），切記一定要先化為假分數！"
    },
    "work": "sm"
  },
  {
    "id": "u02_007",
    "unitId": "U02",
    "category": "異分母分數除法",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.31 例題 2",
    "verified": true,
    "question": "有 $\\frac{3}{4}$ 公斤的紅糖，要分裝成每包 $\\frac{2}{5}$ 公斤，全部裝完，可裝成幾包？",
    "answer": "$1\\frac{7}{8}$ 包（或 $\\frac{15}{8}$ 包）",
    "steps": [
      "除以分數等於乘以倒數（除號變乘號，除數翻跟斗）：",
      "$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2}$",
      "分子相乘、分母相乘：$\\frac{3 \\times 5}{4 \\times 2} = \\frac{15}{8} = 1\\frac{7}{8}$ 包"
    ],
    "insight": "除以 $\\frac{a}{b}$ ＝ 乘以 $\\frac{b}{a}$。",
    "trap": {
      "code": "ERR_FRAC_DIV_NO_RECIPROCAL",
      "text": "除號改成乘號，卻忘記把除數顛倒成 5/2。"
    },
    "work": "sm"
  },
  {
    "id": "u02_008",
    "unitId": "U02",
    "category": "分數除以整數",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.32 例題 4",
    "verified": true,
    "question": "美美做了 $\\frac{12}{7}$ 公升的綜合果汁，平分給 5 個人，全部分完，每人可分得幾公升？",
    "answer": "$\\frac{12}{35}$ 公升",
    "steps": [
      "平分給 5 人即除以 5：$\\frac{12}{7} \\div 5$",
      "整數 5 的倒數是 $\\frac{1}{5}$",
      "$\\frac{12}{7} \\times \\frac{1}{5} = \\frac{12}{35}$ 公升"
    ],
    "work": "sm"
  },
  {
    "id": "u02_009",
    "unitId": "U02",
    "category": "分數除法大魔王",
    "level": 2,
    "difficulty": 4,
    "batch": "課本原型題",
    "source": "課本 p.32 思考帽",
    "verified": true,
    "question": "緞帶長 $1\\frac{1}{2}$ 公尺，每 $\\frac{1}{3}$ 公尺做 1 朵花，最多可做成幾朵？還剩下幾公尺的緞帶？",
    "svg": "\n<svg viewBox=\"0 0 540 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', Outfit, sans-serif\">\n  <!-- 總緞帶 -->\n  <rect x=\"20\" y=\"30\" width=\"480\" height=\"26\" rx=\"4\" fill=\"#ede9fe\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n  <!-- 4 朵花各 1/3 公尺 (每朵 106px) -->\n  <g fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1.5\">\n    <rect x=\"20\" y=\"30\" width=\"106\" height=\"26\"/>\n    <rect x=\"126\" y=\"30\" width=\"106\" height=\"26\"/>\n    <rect x=\"232\" y=\"30\" width=\"106\" height=\"26\"/>\n    <rect x=\"338\" y=\"30\" width=\"106\" height=\"26\"/>\n  </g>\n  <!-- 剩餘 1/6 公尺 (56px) -->\n  <rect x=\"444\" y=\"30\" width=\"56\" height=\"26\" fill=\"#fecdd3\" stroke=\"#e11d48\" stroke-width=\"1.5\"/>\n  <!-- 標註 -->\n  <g font-size=\"13\" font-weight=\"700\" fill=\"#1e1b4b\" text-anchor=\"middle\">\n    <text x=\"73\" y=\"48\">第1朵 (⅓m)</text>\n    <text x=\"179\" y=\"48\">第2朵 (⅓m)</text>\n    <text x=\"285\" y=\"48\">第3朵 (⅓m)</text>\n    <text x=\"391\" y=\"48\">第4朵 (⅓m)</text>\n    <text x=\"472\" y=\"48\" fill=\"#be123c\">剩 ⅙m</text>\n  </g>\n  <text x=\"260\" y=\"90\" font-size=\"15\" fill=\"#1e1b4b\" text-anchor=\"middle\" font-weight=\"700\">總長 1½ 公尺 ＝ 4 朵花（用掉 1⅓ 公尺）＋ 剩餘 ⅙ 公尺（半朵花）</text>\n  <text x=\"260\" y=\"115\" font-size=\"13\" fill=\"#be123c\" text-anchor=\"middle\">⚠️ 陷阱警告：商 4½ 中的「½」代表「½ 朵花」，不是「½ 公尺」！</text>\n</svg>",
    "answer": "最多可做 4 朵，剩下 $\\frac{1}{6}$ 公尺",
    "steps": [
      "化假分數相除：$1\\frac{1}{2} \\div \\frac{1}{3} = \\frac{3}{2} \\times \\frac{3}{1} = \\frac{9}{2} = 4\\frac{1}{2}$（朵）",
      "整數商是 4，表示最多做 4 朵花。",
      "注意！餘數分數是「$\\frac{1}{2}$ 朵花」，不是 $\\frac{1}{2}$ 公尺！",
      "還原為實體長度：每朵 $\\frac{1}{3}$ 公尺 $\\times \\frac{1}{2}$ 朵 ＝ $\\frac{1}{6}$ 公尺",
      "驗算：4 朵用掉 $4 \\times \\frac{1}{3} = \\frac{4}{3}$ 公尺，$1\\frac{1}{2} - \\frac{4}{3} = \\frac{9}{6} - \\frac{8}{6} = \\frac{1}{6}$ 公尺 ✔"
    ],
    "insight": "大魔王考點：帶分數商的真分數部分是「除數單位的幾分之幾」，乘回除數才是真正的長度！",
    "trap": {
      "code": "ERR_FRAC_DIV_REMAINDER_UNIT",
      "text": "誤將商 $4\\frac{1}{2}$ 的真分數直接當答案，回答「剩 $\\frac{1}{2}$ 公尺」。"
    },
    "work": "lg"
  },
  {
    "id": "u02_010",
    "unitId": "U02",
    "category": "被除數、除數與商",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.33 例題 1",
    "verified": true,
    "question": "在 $\\square$ 裡填入 $>$、$<$ 或 $=$：<br>① $\\frac{5}{6} \\div \\frac{2}{3} \\ \\square \\ \\frac{5}{6}$<br>② $\\frac{5}{6} \\div 1 \\ \\square \\ \\frac{5}{6}$<br>③ $\\frac{5}{6} \\div \\frac{4}{3} \\ \\square \\ \\frac{5}{6}$",
    "answer": "① $>$　② $=$　③ $<$",
    "steps": [
      "① 除數 $\\frac{2}{3} < 1$，商比被除數大 → 填 $>$",
      "② 除數 $= 1$，商等於被除數 → 填 $=$",
      "③ 除數 $\\frac{4}{3} > 1$，商比被除數小 → 填 $<$"
    ],
    "insight": "切蛋糕法則：除數 $< 1$（切得更細），份數反而增加（商 $>$ 被除數）。",
    "trap": {
      "code": "ERR_FRAC_RELATION_REVERSE",
      "text": "受整數除法直覺影響，誤以為除法算出來一定會變小。"
    },
    "work": "sm"
  },
  {
    "id": "u02_011",
    "unitId": "U02",
    "category": "綜合應用",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.35 練習園地",
    "verified": true,
    "question": "一個長方形花圃的面積是 $15\\frac{3}{4}$ 平方公尺，長是 $4\\frac{1}{2}$ 公尺，寬是多少公尺？",
    "answer": "$3\\frac{1}{2}$ 公尺（或 $\\frac{7}{2}$ 公尺）",
    "steps": [
      "寬 ＝ 面積 $\\div$ 長",
      "$15\\frac{3}{4} \\div 4\\frac{1}{2} = \\frac{63}{4} \\div \\frac{9}{2}$",
      "顛倒相乘並約分：$\\frac{63}{4} \\times \\frac{2}{9} = \\frac{7 \\times 1}{2 \\times 1} = \\frac{7}{2} = 3\\frac{1}{2}$ 公尺"
    ],
    "work": "sm"
  },
  {
    "id": "u02_012",
    "unitId": "U02",
    "category": "綜合應用",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.35 練習園地",
    "verified": true,
    "question": "水壺裡有 $3\\frac{1}{5}$ 公升的水，每 $\\frac{2}{5}$ 公升裝成 1 杯，最多可裝滿幾杯？還剩下多少公升的水？",
    "answer": "剛好裝滿 8 杯，沒有剩下",
    "steps": [
      "$3\\frac{1}{5} = \\frac{16}{5}$",
      "$\\frac{16}{5} \\div \\frac{2}{5} = 16 \\div 2 = 8$ 杯，剛好整除無餘數"
    ],
    "work": "sm"
  },
  {
    "id": "u02_101",
    "unitId": "U02",
    "category": "繁分數運算",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit02 AI_SPEC level_1（繁分數簡算）",
    "verified": true,
    "question": "計算下列繁分數之值：$$\\frac{3\\frac{1}{3} \\times 1\\frac{1}{5}}{2\\frac{2}{3} \\div 1\\frac{7}{9}} = ?$$",
    "answer": "$\\frac{8}{3}$（或 $2\\frac{2}{3}$）",
    "steps": [
      "分子部分：$\\frac{10}{3} \\times \\frac{6}{5} = 4$",
      "分母部分：$\\frac{8}{3} \\div \\frac{16}{9} = \\frac{8}{3} \\times \\frac{9}{16} = \\frac{3}{2}$",
      "繁分數化簡：$4 \\div \\frac{3}{2} = 4 \\times \\frac{2}{3} = \\frac{8}{3} = 2\\frac{2}{3}$"
    ],
    "insight": "繁分數就是「分子 $\\div$ 分母」，分層擊破。",
    "work": "md"
  },
  {
    "id": "u02_102",
    "unitId": "U02",
    "category": "連分數化簡",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit02 AI_SPEC level_2（連分數）",
    "verified": true,
    "question": "化簡下列連分數為最簡分數：$$1 + \\frac{1}{2 + \\frac{1}{3 + \\frac{1}{4}}}$$",
    "answer": "$\\frac{43}{30}$（或 $1\\frac{13}{30}$）",
    "steps": [
      "從最底層開始往上算：",
      "底層：$3 + \\frac{1}{4} = \\frac{13}{4}$",
      "中層倒數：$1 \\div \\frac{13}{4} = \\frac{4}{13}$",
      "中層和：$2 + \\frac{4}{13} = \\frac{30}{13}$",
      "最外層倒數：$1 \\div \\frac{30}{13} = \\frac{13}{30}$",
      "總和：$1 + \\frac{13}{30} = \\frac{43}{30}$"
    ],
    "insight": "連分數技巧：由下而上、層層倒數翻轉。",
    "work": "md"
  },
  {
    "id": "u02_103",
    "unitId": "U02",
    "category": "工程問題",
    "level": 4,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit02 AI_SPEC level_3（水池工程）",
    "verified": true,
    "question": "有一水池，甲水管單獨注水需 $2\\frac{1}{2}$ 小時注滿，乙水管單獨注水需 $3\\frac{3}{4}$ 小時注滿。若兩管同時注水，且池底排水管每小時排出全池的 $\\frac{1}{15}$，將空水池注滿需多少小時？",
    "answer": "$1\\frac{2}{3}$ 小時（或 $\\frac{5}{3}$ 小時）",
    "steps": [
      "甲每小時注水速率：$1 \\div \\frac{5}{2} = \\frac{2}{5}$",
      "乙每小時注水速率：$1 \\div \\frac{15}{4} = \\frac{4}{15}$",
      "每小時淨進水量：$\\frac{2}{5} + \\frac{4}{15} - \\frac{1}{15} = \\frac{6}{15} + \\frac{4}{15} - \\frac{1}{15} = \\frac{9}{15} = \\frac{3}{5}$",
      "注滿全池所需時間：$1 \\div \\frac{3}{5} = \\frac{5}{3} = 1\\frac{2}{3}$ 小時"
    ],
    "insight": "工程問題：總工作量設為 1，工作效率 ＝ 1 ÷ 時間。",
    "work": "lg"
  },
  {
    "id": "u02_104",
    "unitId": "U02",
    "category": "單位分數拆解",
    "level": 4,
    "difficulty": 5,
    "batch": "奧數天梯",
    "source": "Unit02 AI_SPEC level_4（埃及分數）",
    "verified": true,
    "question": "將 $\\frac{2}{15}$ 拆寫為兩個不同單位分數（分子皆為 1）的和：$$\\frac{2}{15} = \\frac{1}{x} + \\frac{1}{y} \\quad (x < y)$$求這兩個單位分數分母和 $x + y$ 的最小值。",
    "answer": "32（$x = 12,\\ y = 20$）",
    "steps": [
      "通分整理：$2xy = 15(x + y) \\implies 4xy - 30x - 30y + 225 = 225$",
      "因式分解：$(2x - 15)(2y - 15) = 225$",
      "225 的正因數對：$1 \\times 225$, $3 \\times 75$, $5 \\times 45$, $9 \\times 25$",
      "若 $2x-15=9, 2y-15=25 \\implies 2x=24 (x=12), 2y=40 (y=20)$",
      "此時分母和 $x + y = 12 + 20 = 32$",
      "檢驗：$\\frac{1}{12} + \\frac{1}{20} = \\frac{5}{60} + \\frac{3}{60} = \\frac{8}{60} = \\frac{2}{15}$ ✔"
    ],
    "insight": "埃及分數分解技巧：利用因式分解構造不定方程求整數解極值。",
    "work": "lg"
  },
  {
    "id": "u02_m01",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "除數小於 1",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "不用算：$12 \\div \\frac{3}{4}$ 的結果和 12 比起來？",
    "options": [
      "比 12 大",
      "比 12 小",
      "等於 12",
      "無法判斷"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "除數 $\\frac{3}{4}$ 比 1 小。",
      "「一個數裡有幾個 $\\frac{3}{4}$」一定比「有幾個 1」還多。",
      "所以商比 12 大。"
    ],
    "insight": "除以小於 1 的數 → 變大；除以大於 1 的數 → 變小。",
    "trap": {
      "code": "ERR_U02_M01",
      "text": "以為「除法一定越除越小」。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m02",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "自己除自己",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "$\\frac{5}{8} \\div \\frac{5}{8}$ 等於多少？",
    "options": [
      "0",
      "1",
      "$\\frac{25}{64}$",
      "$\\frac{5}{8}$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "任何不為 0 的數除以自己，都等於 1。"
    ],
    "insight": "$a \\div a = 1$，不管 $a$ 長得多複雜。",
    "trap": {
      "code": "ERR_U02_M02",
      "text": "習慣性顛倒相乘，算成 $\\frac{25}{64}$。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m03",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "倒數縮放",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "下列哪一個算式的結果最大？",
    "options": [
      "$100 \\times \\frac{1}{2}$",
      "$100 \\div 2$",
      "$100 \\div \\frac{1}{2}$",
      "$100 - \\frac{1}{2}$"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$100 \\times \\frac{1}{2}$ 與 $100 \\div 2$ 都是 50。",
      "$100 - \\frac{1}{2}$ 不到 100。",
      "$100 \\div \\frac{1}{2}$ 是「100 裡有幾個半」= 200，最大。"
    ],
    "insight": "除以 $\\frac{1}{2}$ ＝ 乘以 2。",
    "trap": {
      "code": "ERR_U02_M03",
      "text": "把「÷ 1/2」和「× 1/2」搞混。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m04",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "整數除以分數",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "$7 \\div \\frac{7}{9}$ 等於多少？",
    "options": [
      "1",
      "9",
      "$\\frac{1}{9}$",
      "$\\frac{49}{9}$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "$7 \\div \\frac{7}{9} = 7 \\times \\frac{9}{7}$。",
      "7 和 7 直接約掉，剩下 9。"
    ],
    "insight": "$a \\div \\frac{a}{b} = b$：分子相同，直接看分母。",
    "trap": {
      "code": "ERR_U02_M04",
      "text": "只把分子相除得到 1。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m05",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "同分母相除",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "$\\frac{6}{7} \\div \\frac{2}{7}$ 等於多少？",
    "options": [
      "3",
      "$\\frac{12}{49}$",
      "$\\frac{1}{3}$",
      "$\\frac{6}{49}$"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "分母相同 → 單位都是「$\\frac{1}{7}$」。",
      "6 個 $\\frac{1}{7}$ 裡有幾個 2 個 $\\frac{1}{7}$？ → $6 \\div 2 = 3$。"
    ],
    "insight": "同分母分數相除 ＝ 分子直接相除。",
    "trap": {
      "code": "ERR_U02_M05",
      "text": "分子分母分別相除，或誤用乘法。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m06",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "除數減半商加倍",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "已知 $A \\div \\frac{3}{5} = 10$，那麼 $A \\div \\frac{3}{10}$ 等於多少？",
    "options": [
      "5",
      "10",
      "20",
      "30"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$\\frac{3}{10}$ 剛好是 $\\frac{3}{5}$ 的一半。",
      "被除數不變、除數變一半 → 商變 2 倍。",
      "$10 \\times 2 = 20$。"
    ],
    "insight": "商的變化：除數 ÷ k → 商 × k。",
    "trap": {
      "code": "ERR_U02_M06",
      "text": "以為除數變小商也變小，選 5。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m07",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "積相等比大小",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "$A \\times \\frac{5}{4} = B \\times \\frac{5}{6}$（$A$、$B$ 都大於 0），誰比較大？",
    "options": [
      "A 比較大",
      "B 比較大",
      "一樣大",
      "無法判斷"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "兩邊乘出來一樣多。",
      "$A$ 乘的是比 1 大的 $\\frac{5}{4}$，$B$ 乘的是比 1 小的 $\\frac{5}{6}$。",
      "要乘「縮小的數」才能追平的那個，原本一定比較大 → $B$ 大。"
    ],
    "insight": "積相等時：乘數越小，另一個因數越大。",
    "trap": {
      "code": "ERR_U02_M07",
      "text": "看到 $\\frac{5}{4}$ 比較大就選 A。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m08",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "連除倒數",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "$1 \\div \\frac{1}{2} \\div \\frac{1}{3} \\div \\frac{1}{4}$ 等於多少？",
    "options": [
      "$\\frac{1}{24}$",
      "1",
      "9",
      "24"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "每除以一個 $\\frac{1}{n}$，就等於乘以 $n$。",
      "$1 \\times 2 \\times 3 \\times 4 = 24$。"
    ],
    "insight": "÷ 單位分數 ＝ × 分母。",
    "trap": {
      "code": "ERR_U02_M08",
      "text": "直接把分數相乘得 $\\frac{1}{24}$。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m09",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "包含除應用",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "一條繩子每段剪 $\\frac{3}{4}$ 公尺剛好剪成 8 段。若改成每段 $\\frac{3}{8}$ 公尺，可以剪幾段？",
    "options": [
      "4 段",
      "12 段",
      "16 段",
      "24 段"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "繩子總長不變。",
      "每段長度變成原來的一半（$\\frac{3}{8}$ 是 $\\frac{3}{4}$ 的一半）。",
      "段數就變 2 倍：$8 \\times 2 = 16$。"
    ],
    "insight": "總量固定：每份越小，份數越多（反比）。",
    "trap": {
      "code": "ERR_U02_M09",
      "text": "先算總長再除，浪費時間又容易算錯。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m10",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "整除結合因數",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "下列哪一個結果是「整數」？",
    "options": [
      "$10 \\div \\frac{3}{7}$",
      "$9 \\div \\frac{3}{7}$",
      "$8 \\div \\frac{3}{7}$",
      "$7 \\div \\frac{3}{7}$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "$n \\div \\frac{3}{7} = \\frac{7n}{3}$。",
      "7 和 3 互質，所以 $n$ 必須是 3 的倍數才能整除。",
      "選項中只有 9 是 3 的倍數。"
    ],
    "insight": "結合第 1 單元：分母要被約掉 → 找倍數與互質。",
    "trap": {
      "code": "ERR_U02_M10",
      "text": "以為 7 是分母的分子就一定整除。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m11",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "不可能任務",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "有一個正數 $x$，使得 $x \\div \\frac{2}{3}$ 的結果比 $x$ 還小。這樣的 $x$ 是？",
    "options": [
      "任何正數都可以",
      "大於 1 的正數",
      "小於 1 的正數",
      "不存在這樣的正數"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "$x \\div \\frac{2}{3} = x \\times \\frac{3}{2}$。",
      "正數乘以比 1 大的數，一定變大。",
      "所以不可能變小 → 不存在。"
    ],
    "insight": "先判斷「變大或變小」只看除數和 1 的大小，和被除數無關。",
    "trap": {
      "code": "ERR_U02_M11",
      "text": "以為 $x$ 小於 1 時會反過來。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m12",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "倒數平方",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "$a$、$b$ 都是正整數，若 $\\frac{a}{b} \\div \\frac{b}{a} = 1$，則 $a$ 與 $b$ 的關係是？",
    "options": [
      "$a = b$",
      "$a = 2b$",
      "$a + b = 1$",
      "任何 $a$、$b$ 都成立"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "$\\frac{a}{b} \\div \\frac{b}{a} = \\frac{a}{b} \\times \\frac{a}{b}$。",
      "一個正數自己乘自己等於 1，這個數只能是 1。",
      "$\\frac{a}{b} = 1 \\Rightarrow a = b$。"
    ],
    "insight": "除以倒數 ＝ 乘以自己。",
    "trap": {
      "code": "ERR_U02_M12",
      "text": "以為「一個數除以它的倒數」永遠是 1。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m13",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "剩餘分率連乘",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "一桶水先倒出 $\\frac{1}{3}$，再倒出「剩下的」$\\frac{1}{2}$，最後剩下全桶的幾分之幾？",
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "0"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "倒出 $\\frac{1}{3}$ → 剩 $\\frac{2}{3}$。",
      "再倒掉剩下的一半 → 剩 $\\frac{2}{3}$ 的一半 = $\\frac{1}{3}$。"
    ],
    "insight": "「剩下的幾分之幾」要換基準量，用剩餘部分連乘。",
    "trap": {
      "code": "ERR_U02_M13",
      "text": "直接 $1 - \\frac{1}{3} - \\frac{1}{2} = \\frac{1}{6}$。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m14",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "工程合作",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "一件工作甲單獨做 6 天完成，乙單獨做 3 天完成。兩人合作幾天完成？",
    "options": [
      "2 天",
      "4.5 天",
      "9 天",
      "3 天"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "乙的速度是甲的 2 倍 → 乙 = 2 個甲。",
      "甲＋乙 = 3 個甲一起做。",
      "1 個甲要 6 天 → 3 個甲要 $6 \\div 3 = 2$ 天。"
    ],
    "insight": "合作一定比最快的人還快 → 答案必小於 3，秒刪 B、C、D。",
    "trap": {
      "code": "ERR_U02_M14",
      "text": "把天數相加或取平均。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m15",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "裂項相消",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\cdots + \\frac{1}{9 \\times 10}$ 等於多少？",
    "options": [
      "$\\frac{1}{10}$",
      "$\\frac{9}{10}$",
      "1",
      "$\\frac{10}{9}$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$。",
      "展開後中間全部抵消：$(1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + \\cdots$。",
      "只剩 $1 - \\frac{1}{10} = \\frac{9}{10}$。"
    ],
    "insight": "裂項：相鄰兩數乘積的倒數 ＝ 兩倒數之差。",
    "trap": {
      "code": "ERR_U02_M15",
      "text": "想通分 9 個分數。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m16",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "連分數",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "$1 + \\cfrac{1}{1 + \\cfrac{1}{1 + 1}}$ 等於多少？",
    "options": [
      "$\\frac{8}{5}$",
      "$\\frac{3}{2}$",
      "2",
      "$\\frac{5}{3}$"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "由最下面往上算：$1 + 1 = 2$。",
      "$1 + \\frac{1}{2} = \\frac{3}{2}$。",
      "$\\frac{1}{3/2} = \\frac{2}{3}$，最後 $1 + \\frac{2}{3} = \\frac{5}{3}$。"
    ],
    "insight": "連分數永遠「由下往上」一層層翻。",
    "trap": {
      "code": "ERR_U02_M16",
      "text": "從最上面開始算而亂掉。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m17",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "與 1 的距離",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "不用算：$\\frac{2025}{2026}$ 和 $\\frac{2026}{2027}$ 哪一個比較大？",
    "options": [
      "$\\frac{2025}{2026}$",
      "$\\frac{2026}{2027}$",
      "一樣大",
      "無法比較"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "$\\frac{2025}{2026} = 1 - \\frac{1}{2026}$。",
      "$\\frac{2026}{2027} = 1 - \\frac{1}{2027}$。",
      "$\\frac{1}{2027}$ 比較小 → 離 1 比較近 → 比較大。"
    ],
    "insight": "真分數比大小：看「差 1 多少」，差越少越大。",
    "trap": {
      "code": "ERR_U02_M17",
      "text": "用交叉相乘算四位數乘法。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m18",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "連鎖相消",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "一個數依序除以 $\\frac{3}{4}$、$\\frac{4}{5}$、$\\frac{5}{6}$、……一直除到 $\\frac{9}{10}$，結果是原數的幾倍？",
    "options": [
      "$\\frac{10}{3}$",
      "$\\frac{3}{10}$",
      "10",
      "3"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "每次除法都變成乘倒數：$\\frac{4}{3} \\times \\frac{5}{4} \\times \\frac{6}{5} \\times \\cdots \\times \\frac{10}{9}$。",
      "分子分母像骨牌一樣兩兩抵消。",
      "只剩最後的分子 10 與最前的分母 3 → $\\frac{10}{3}$。"
    ],
    "insight": "連乘相消：只看頭尾。",
    "trap": {
      "code": "ERR_U02_M18",
      "text": "除以真分數卻以為變小，選 $\\frac{3}{10}$。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m19",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "括號極值",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "在 $\\frac{1}{2} \\div \\frac{1}{3} \\div \\frac{1}{4} \\div \\frac{1}{5}$ 中可以任意加括號，能得到的「最大」結果是？",
    "options": [
      "120",
      "30",
      "$\\frac{6}{5}$",
      "$\\frac{3}{40}$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "無論怎麼加括號，第 1 個數永遠在分子、第 2 個數永遠在分母。",
      "後面的 $\\frac{1}{4}$、$\\frac{1}{5}$ 都小於 1，放在分母（被除）結果才會變大。",
      "最大 = $\\frac{1}{2} \\div (\\frac{1}{3} \\times \\frac{1}{4} \\times \\frac{1}{5}) = \\frac{1}{2} \\times 60 = 30$，正好就是不加括號的結果。"
    ],
    "insight": "連除結構分析：先找「位置固定」的數，再決定其他數放分子或分母。",
    "trap": {
      "code": "ERR_U02_M19",
      "text": "以為可以把 $\\frac{1}{2}$ 也移到分母得到 120。"
    },
    "work": "sm"
  },
  {
    "id": "u02_m20",
    "unitId": "U02",
    "category": "純腦力體操",
    "topic": "最簡分數配對",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "把分母是 30 的「所有最簡真分數」加起來，總和是多少？",
    "options": [
      "4",
      "8",
      "15",
      "$\\frac{29}{2}$"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "和 30 互質的分子：1、7、11、13、17、19、23、29，共 8 個。",
      "配對：$\\frac{1}{30} + \\frac{29}{30} = 1$，$\\frac{7}{30} + \\frac{23}{30} = 1$ ……",
      "若 $n$ 與 30 互質，$30 - n$ 也與 30 互質 → 剛好 4 對，總和 4。"
    ],
    "insight": "對稱配對 ＋ 第 1 單元互質：$\\gcd(n, 30) = \\gcd(30 - n, 30)$。",
    "trap": {
      "code": "ERR_U02_M20",
      "text": "把 1~29 全部加起來得 $\\frac{29}{2}$。"
    },
    "work": "sm"
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U02'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
