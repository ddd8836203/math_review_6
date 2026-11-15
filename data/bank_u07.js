// U07 題庫分片（共 30 題）
(function (root) {
  const DATA = [
  {
    "id": "u07_001",
    "unitId": "U07",
    "category": "放大圖性質",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.104 例題 1",
    "verified": true,
    "question": "一個長方形的長是 4 公分、寬是 3 公分。畫成 2 倍放大圖後，放大圖的長和寬各是多少公分？四個角的角度有變大嗎？",
    "answer": "長 8 公分、寬 6 公分；四個角依然是 90°，角度不變",
    "steps": [
      "長度放大：長變為 $4 \\times 2 = 8$ 公分，寬變為 $3 \\times 2 = 6$ 公分",
      "放大圖與縮小圖核心定理：對應邊成比例變大，但「對應角完全不變」！"
    ],
    "trap": {
      "code": "ERR_ANGLE_SCALED",
      "text": "誤以為角也會放大 2 倍變成 180°。形狀相同角度必定相等！"
    },
    "work": "sm"
  },
  {
    "id": "u07_002",
    "unitId": "U07",
    "category": "面積放大平方倍大魔王",
    "level": 2,
    "difficulty": 4,
    "batch": "課本原型題",
    "source": "課本 p.106 例題 2",
    "verified": true,
    "question": "一個邊長 5 公分的正方形，畫成 3 倍放大圖後，邊長變成原來的幾倍？面積變成原來的幾倍？",
    "svg": "\n<svg viewBox=\"0 0 520 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', Outfit, sans-serif\">\n  <g transform=\"translate(30, 25)\">\n    <!-- 比例尺條 -->\n    <rect x=\"0\" y=\"20\" width=\"80\" height=\"12\" fill=\"#1e1b4b\"/>\n    <rect x=\"80\" y=\"20\" width=\"80\" height=\"12\" fill=\"#fff\" stroke=\"#1e1b4b\" stroke-width=\"1\"/>\n    <rect x=\"160\" y=\"20\" width=\"80\" height=\"12\" fill=\"#1e1b4b\"/>\n    <line x1=\"0\" y1=\"14\" x2=\"0\" y2=\"38\" stroke=\"#1e1b4b\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"14\" x2=\"80\" y2=\"38\" stroke=\"#1e1b4b\" stroke-width=\"2\"/>\n    <line x1=\"160\" y1=\"14\" x2=\"160\" y2=\"38\" stroke=\"#1e1b4b\" stroke-width=\"2\"/>\n    <line x1=\"240\" y1=\"14\" x2=\"240\" y2=\"38\" stroke=\"#1e1b4b\" stroke-width=\"2\"/>\n    <text x=\"0\" y=\"10\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1e1b4b\">0</text>\n    <text x=\"80\" y=\"10\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1e1b4b\">50</text>\n    <text x=\"160\" y=\"10\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1e1b4b\">100</text>\n    <text x=\"240\" y=\"10\" font-size=\"12\" text-anchor=\"middle\" fill=\"#1e1b4b\">150 公尺</text>\n    <text x=\"120\" y=\"55\" font-size=\"13\" font-weight=\"700\" fill=\"#4338ca\" text-anchor=\"middle\">1 公分代表實際 50 公尺 (1 : 5000)</text>\n  </g>\n  <g transform=\"translate(320, 20)\" font-size=\"13\" fill=\"#1e1b4b\">\n    <text x=\"0\" y=\"22\" font-weight=\"800\" fill=\"#4338ca\">放大/縮小核心規律：</text>\n    <text x=\"0\" y=\"46\">● 長度（邊長、周長）：變 k 倍</text>\n    <text x=\"0\" y=\"70\" font-weight=\"700\" fill=\"#b91c1c\">● 面積：變 k × k ＝ k² 倍</text>\n    <text x=\"0\" y=\"94\" fill=\"#047857\">● 對應角：角度完全不變！</text>\n  </g>\n</svg>",
    "answer": "邊長變成 3 倍，面積變成原來的 9 倍",
    "steps": [
      "原正方形面積：$5 \\times 5 = 25$ 平方公分",
      "放大後邊長：$5 \\times 3 = 15$ 公分",
      "放大後面積：$15 \\times 15 = 225$ 平方公分",
      "面積倍數：$225 \\div 25 = 9$ 倍（即 $3 \\times 3 = 3^2 = 9$ 倍）"
    ],
    "insight": "長度與面積縮放定理：邊長擴大 $k$ 倍，周長擴大 $k$ 倍，但面積擴大 $k^2$（$k$ 的平方）倍！",
    "trap": {
      "code": "ERR_AREA_SCALE_LINEAR",
      "text": "誤以為面積也是放大 3 倍。面積包含長與寬兩個維度，必須乘兩次！"
    },
    "work": "md"
  },
  {
    "id": "u07_003",
    "unitId": "U07",
    "category": "比例尺概念",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.108 例題 1",
    "verified": true,
    "question": "地圖上標示比例尺為 $1 : 50000$。這代表地圖上的 1 公分，相當於實際距離多少公尺？是多少公里？",
    "answer": "500 公尺，也就是 0.5 公里",
    "steps": [
      "比例尺 $1 : 50000$ 表示實際長度是圖上的 50000 倍",
      "$1 \\text{ 公分} \\times 50000 = 50000 \\text{ 公分}$",
      "$50000 \\text{ 公分} = 500 \\text{ 公尺} = 0.5 \\text{ 公里}$"
    ],
    "trap": {
      "code": "ERR_UNIT_CONVERT_M_TO_KM",
      "text": "單位換算搞混：1 公里 ＝ 1000 公尺 ＝ 100000 公分（去 5 個 0）。"
    },
    "work": "sm"
  },
  {
    "id": "u07_004",
    "unitId": "U07",
    "category": "圖上長求實際長",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.110 例題 2",
    "verified": true,
    "question": "在一張比例尺 $1 : 25000$ 的地圖上，量得甲、乙兩地的距離是 4 公分。兩地的實際距離是多少公里？",
    "answer": "1 公里",
    "steps": [
      "實際距離 ＝ 圖上距離 $\\times$ 比例尺分母",
      "$4 \\times 25000 = 100000$ 公分",
      "$100000 \\text{ 公分} = 1000 \\text{ 公尺} = 1 \\text{ 公里}$"
    ],
    "work": "sm"
  },
  {
    "id": "u07_005",
    "unitId": "U07",
    "category": "實際長求圖上長",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.111 例題 3",
    "verified": true,
    "question": "兩鎮實際相距 6 公里。在比例尺 $1 : 300000$ 的地圖上，這兩鎮之間的距離是多少公分？",
    "answer": "2 公分",
    "steps": [
      "先將公里化為公分：$6 \\text{ 公里} = 600000 \\text{ 公分}$",
      "圖上長 ＝ 實際長 $\\div$ 比例尺分母",
      "$600000 \\div 300000 = 2$ 公分"
    ],
    "trap": {
      "code": "ERR_INVERSE_SCALE",
      "text": "乘除混淆：求地圖上的長度必須「變小（除以分母）」，不是乘以分母。"
    },
    "work": "sm"
  },
  {
    "id": "u07_006",
    "unitId": "U07",
    "category": "線段比例尺判讀",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.112 例題 4",
    "verified": true,
    "question": "地圖上線段比例尺標示「1 公分代表 200 公尺」。在地圖上量得一座水庫長度為 3.5 公分，水庫的實際長度是多少公尺？",
    "answer": "700 公尺",
    "steps": [
      "1 公分代表 200 公尺",
      "3.5 公分代表：$3.5 \\times 200 = 700$ 公尺"
    ],
    "work": "sm"
  },
  {
    "id": "u07_007",
    "unitId": "U07",
    "category": "縮小圖面積換算",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.114 練習園地",
    "verified": true,
    "question": "一座長方形操場實際長 100 公尺、寬 60 公尺。在比例尺 $\\frac{1}{1000}$ 的縮小圖上，這個操場的面積是多少平方公分？",
    "answer": "60 平方公分",
    "steps": [
      "實際長：$100 \\text{ 公尺} = 10000 \\text{ 公分} \\implies$ 圖上長 $10000 \\div 1000 = 10$ 公分",
      "實際寬：$60 \\text{ 公尺} = 6000 \\text{ 公分} \\implies$ 圖上寬 $6000 \\div 1000 = 6$ 公分",
      "圖上面積：$10 \\times 6 = 60$ 平方公分"
    ],
    "work": "md"
  },
  {
    "id": "u07_101",
    "unitId": "U07",
    "category": "面積倍數反求邊長",
    "level": 3,
    "difficulty": 3,
    "batch": "奧數天梯",
    "source": "Unit07 AI_SPEC level_2（面積平方倍）",
    "verified": true,
    "question": "甲圖是乙圖的放大圖，已知甲圖的面積是乙圖面積的 16 倍。請問甲圖的周長是乙圖周長的幾倍？",
    "answer": "4 倍",
    "steps": [
      "面積比 ＝ 邊長比的平方",
      "因為 $4 \\times 4 = 16$，所以邊長放大為原來的 4 倍",
      "周長是長度維度，放大倍數與邊長相同，也是 4 倍"
    ],
    "insight": "維度直覺：長度是一次方，面積是二次方。面積變 16 倍 → 長度變 $\\sqrt{16} = 4$ 倍。",
    "work": "sm"
  },
  {
    "id": "u07_102",
    "unitId": "U07",
    "category": "雙重比例尺換算",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit07 AI_SPEC level_3（跨地圖換算）",
    "verified": true,
    "question": "地圖 A 的比例尺是 $1 : 20000$，一座森林在圖 A 上的面積是 16 平方公分。在另一張比例尺為 $1 : 40000$ 的地圖 B 上，這座森林的面積是多少平方公分？",
    "answer": "4 平方公分",
    "steps": [
      "比較兩張地圖比例尺：地圖 B 的長度只有地圖 A 的 $\\frac{20000}{40000} = \\frac{1}{2}$ 倍",
      "邊長變為 $\\frac{1}{2}$ 倍，則圖上面積縮小為 $(\\frac{1}{2})^2 = \\frac{1}{4}$ 倍",
      "地圖 B 上面積：$16 \\times \\frac{1}{4} = 4$ 平方公分"
    ],
    "insight": "雙重比例尺捷徑：直接比較比例尺倍率比，免去反求真實萬平方公尺的冗長換算。",
    "work": "md"
  },
  {
    "id": "u07_103",
    "unitId": "U07",
    "category": "相似三角形影長",
    "level": 4,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit07 AI_SPEC level_4（AMC 8 陽光影長）",
    "verified": true,
    "question": "身高 1.5 公尺的小明在陽光下的影長是 2 公尺。在同一時間同一地點，旁邊一棵大樹的影長是 16 公尺。這棵大樹的實際高度是多少公尺？",
    "answer": "12 公尺",
    "steps": [
      "同一時間陽光平行，物高與影長成正比例（相似三角形原理）：",
      "高 : 影長 ＝ $1.5 : 2$",
      "樹高 : $16 = 1.5 : 2$",
      "樹高 ＝ $16 \\times \\frac{1.5}{2} = 16 \\times 0.75 = 12$ 公尺"
    ],
    "insight": "泰勒斯金字塔測高法：利用相似比，將影子長度換算成真實高度。",
    "work": "sm"
  },
  {
    "id": "u07_m01",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "角度不變",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "一個三角形放大成 2 倍的放大圖，對應角的角度會？",
    "options": [
      "變 2 倍",
      "變一半",
      "不變",
      "變 4 倍"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "放大縮小只改變大小，不改變形狀。",
      "形狀不變 → 角度不變。"
    ],
    "insight": "放大圖：對應邊成比例、對應角相等。",
    "trap": {
      "code": "ERR_U07_M01",
      "text": "以為整個圖放大，角也放大。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m02",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "比例尺意義",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "比例尺 $1 : 1000$，圖上 1 公分代表實際多長？",
    "options": [
      "1000 公尺",
      "10 公尺",
      "100 公尺",
      "1 公尺"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "1 公分代表 1000 公分。",
      "1000 公分 ＝ 10 公尺。"
    ],
    "insight": "公分 → 公尺：去掉兩個 0。",
    "trap": {
      "code": "ERR_U07_M02",
      "text": "直接當成 1000 公尺。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m03",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "周長倍數",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "一個圖形放大 3 倍，周長變成？",
    "options": [
      "3 倍",
      "6 倍",
      "9 倍",
      "不變"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "每條邊都變 3 倍，加起來也是 3 倍。"
    ],
    "insight": "所有「長度」都同倍數變化。",
    "trap": {
      "code": "ERR_U07_M03",
      "text": "和面積 9 倍搞混。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m04",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "面積平方倍",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "正方形邊長放大成 2 倍，面積變成？",
    "options": [
      "2 倍",
      "4 倍",
      "8 倍",
      "不變"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "長變 2 倍、寬也變 2 倍。",
      "面積 ＝ $2 \\times 2 = 4$ 倍。"
    ],
    "insight": "面積放大 ＝ 邊長倍數 × 邊長倍數。",
    "trap": {
      "code": "ERR_U07_M04",
      "text": "以為面積也只變 2 倍。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m05",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "比例尺詳細度",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "同樣大小的紙，比例尺 $1 : 50000$ 和 $1 : 5000$，哪一張畫得比較詳細（圖上看起來比較大）？",
    "options": [
      "一樣",
      "無法判斷",
      "$1 : 50000$",
      "$1 : 5000$"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "$1 : 5000$：1 公分只代表 50 公尺。",
      "$1 : 50000$：1 公分代表 500 公尺。",
      "每公分代表的越少 → 畫得越大越詳細。"
    ],
    "insight": "比例尺後項越小 → 縮得越少 → 越詳細。",
    "trap": {
      "code": "ERR_U07_M05",
      "text": "以為數字越大越詳細。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m06",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "縮小面積",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "一個圖形縮小成 $\\frac{1}{3}$，面積變成原來的？",
    "options": [
      "$\\frac{1}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{9}$",
      "3 倍"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "長寬都變 $\\frac{1}{3}$。",
      "面積 ＝ $\\frac{1}{3} \\times \\frac{1}{3} = \\frac{1}{9}$。"
    ],
    "insight": "縮小也一樣，面積是平方。",
    "trap": {
      "code": "ERR_U07_M06",
      "text": "以為面積也是 $\\frac{1}{3}$。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m07",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "求比例尺",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "地圖上 2 公分代表實際 1 公里，比例尺是？",
    "options": [
      "$1 : 50000$",
      "$1 : 500$",
      "$1 : 5000$",
      "$1 : 2$"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "1 公里 ＝ 100000 公分。",
      "2 公分 : 100000 公分 ＝ $1 : 50000$。"
    ],
    "insight": "1 公里 ＝ 1 後面 5 個 0 公分。",
    "trap": {
      "code": "ERR_U07_M07",
      "text": "公里換公分時少了 0。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m08",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "體積立方倍",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "正方體的邊長放大成 2 倍，體積變成？",
    "options": [
      "2 倍",
      "4 倍",
      "6 倍",
      "8 倍"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "長、寬、高都變 2 倍。",
      "體積 ＝ $2 \\times 2 \\times 2 = 8$ 倍。"
    ],
    "insight": "長度 $k$ 倍 → 面積 $k^2$ 倍 → 體積 $k^3$ 倍。",
    "trap": {
      "code": "ERR_U07_M08",
      "text": "以為體積和面積一樣是 4 倍。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m09",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "影子相似",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "同一時間，1 公尺高的竹竿影長 2 公尺，一棵樹的影長 10 公尺，樹高多少？",
    "options": [
      "5 公尺",
      "20 公尺",
      "10 公尺",
      "2 公尺"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "同一時間，物高 : 影長 都是 $1 : 2$。",
      "影長 10 → 樹高 5。"
    ],
    "insight": "陽光平行 → 形成縮放關係的三角形。",
    "trap": {
      "code": "ERR_U07_M09",
      "text": "把比例倒過來算成 20。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m10",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "地圖面積換算",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "比例尺 $1 : 10000$ 的地圖上，1 平方公分代表實際多少面積？",
    "options": [
      "100 平方公尺",
      "10000 平方公尺",
      "1000 平方公尺",
      "1 平方公尺"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "圖上 1 公分 ＝ 實際 10000 公分 ＝ 100 公尺。",
      "1 平方公分 ＝ $100 \\times 100 = 10000$ 平方公尺。"
    ],
    "insight": "面積比例 ＝ 長度比例的平方。",
    "trap": {
      "code": "ERR_U07_M10",
      "text": "直接用 10000 公分換算成 100 平方公尺。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m11",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "相似面積比",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "兩個放大縮小關係的三角形，對應邊比是 $2 : 3$，面積比是？",
    "options": [
      "$8 : 27$",
      "$2 : 3$",
      "$3 : 2$",
      "$4 : 9$"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "面積比 ＝ 邊長比的平方。",
      "$2 \\times 2 : 3 \\times 3 = 4 : 9$。"
    ],
    "insight": "邊比 $a : b$ → 面積比 $a^2 : b^2$ → 體積比 $a^3 : b^3$。",
    "trap": {
      "code": "ERR_U07_M11",
      "text": "選 $8 : 27$（那是體積比）。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m12",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "不等比放大",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "長方形的長放大 2 倍、寬放大 3 倍，新圖形是原來的放大圖嗎？",
    "options": [
      "是",
      "不是",
      "只要面積變大就是",
      "不一定"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "放大圖的每條邊必須放大「相同」倍數。",
      "長寬倍數不同 → 形狀變了 → 不是放大圖。"
    ],
    "insight": "放大圖的判斷：所有對應邊比值相同。",
    "trap": {
      "code": "ERR_U07_M12",
      "text": "以為「變大」就是放大圖。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m13",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "面積逆推周長",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "正方形面積變成原來的 9 倍，周長變成原來的幾倍？",
    "options": [
      "3 倍",
      "9 倍",
      "81 倍",
      "4.5 倍"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "面積 9 倍 → 邊長 3 倍（$3 \\times 3 = 9$）。",
      "周長跟著邊長 → 3 倍。"
    ],
    "insight": "面積倍數開平方 ＝ 長度倍數。",
    "trap": {
      "code": "ERR_U07_M13",
      "text": "以為周長也 9 倍。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m14",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "披薩直覺",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "同樣厚度的披薩，1 片直徑 20 公分，和 2 片直徑 10 公分，哪個吃得比較多？",
    "options": [
      "2 片小的",
      "一樣多",
      "1 片大的",
      "無法判斷"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "直徑 2 倍 → 面積 4 倍。",
      "1 片大的 ＝ 4 片小的 ＞ 2 片小的。"
    ],
    "insight": "圓也是放大縮小關係，面積是直徑倍數的平方。",
    "trap": {
      "code": "ERR_U07_M14",
      "text": "以為直徑 2 倍就 ＝ 2 片。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m15",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "比例尺換算",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "比例尺 $1 : 25000$ 的地圖上量得 4 公分，實際距離是？",
    "options": [
      "1 公里",
      "10 公里",
      "100 公尺",
      "4 公里"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "$4 \\times 25000 = 100000$ 公分。",
      "100000 公分 ＝ 1 公里。"
    ],
    "insight": "先湊整：$4 \\times 25 = 100$。",
    "trap": {
      "code": "ERR_U07_M15",
      "text": "單位換算少一個 0。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m16",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "模型重量",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "同材質的實心汽車模型，比例 $1 : 100$，模型的重量大約是實物的？",
    "options": [
      "$\\frac{1}{100}$",
      "$\\frac{1}{10000}$",
      "$\\frac{1}{1000000}$",
      "一樣重"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "長寬高都縮成 $\\frac{1}{100}$。",
      "體積（重量）縮成 $\\frac{1}{100 \\times 100 \\times 100}$。"
    ],
    "insight": "重量跟著「體積」走 → 立方。",
    "trap": {
      "code": "ERR_U07_M16",
      "text": "以為重量跟長度一樣縮 100 倍。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m17",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "兩張地圖",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "同一個操場，畫在比例尺 $1 : 2000$ 的地圖上，面積是畫在 $1 : 5000$ 地圖上的幾倍？",
    "options": [
      "2.5 倍",
      "6.25 倍",
      "5 倍",
      "25 倍"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "長度：$1 : 2000$ 那張是另一張的 $5000 \\div 2000 = 2.5$ 倍。",
      "面積：$2.5 \\times 2.5 = 6.25$ 倍。"
    ],
    "insight": "兩張比例尺先比「長度倍數」，再平方。",
    "trap": {
      "code": "ERR_U07_M17",
      "text": "只算長度倍數 2.5。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m18",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "中點三角形",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "連接三角形三邊的中點，形成一個小三角形，它的面積是原三角形的？",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{8}$"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "三條中點連線把原三角形切成 4 個一模一樣的小三角形。",
      "每個都是原三角形的縮小圖（邊長 $\\frac{1}{2}$ → 面積 $\\frac{1}{4}$）。"
    ],
    "insight": "邊長一半 → 面積四分之一，兩種想法互相印證。",
    "trap": {
      "code": "ERR_U07_M18",
      "text": "以為邊長一半面積也一半。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m19",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "巨人悖論",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "一個巨人身體每個方向都放大成一般人的 10 倍。他的腿骨每平方公分要承受的重量是一般人的幾倍？",
    "options": [
      "一樣",
      "10 倍",
      "100 倍",
      "1000 倍"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "體重跟著體積 → 1000 倍。",
      "腿骨截面積 → 100 倍。",
      "每單位面積承受 ＝ $1000 \\div 100 = 10$ 倍。"
    ],
    "insight": "平方—立方定律：這就是為什麼巨人和超大昆蟲不可能存在。",
    "trap": {
      "code": "ERR_U07_M19",
      "text": "以為全部同步放大，所以一樣。"
    },
    "work": "sm"
  },
  {
    "id": "u07_m20",
    "unitId": "U07",
    "category": "純腦力體操",
    "topic": "面積增加率",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "正方形邊長增加 10%，面積增加百分之幾？",
    "options": [
      "10%",
      "21%",
      "20%",
      "100%"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "邊長變 1.1 倍 → 面積變 $1.1 \\times 1.1 = 1.21$ 倍。",
      "增加 21%。"
    ],
    "insight": "多出來的 1% 就是角落那個 $0.1 \\times 0.1$ 的小正方形。",
    "trap": {
      "code": "ERR_U07_M20",
      "text": "以為長寬各加 10% 合起來是 20%。"
    },
    "work": "sm"
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U07'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
