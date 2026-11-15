// U06 題庫分片（共 31 題）
(function (root) {
  const DATA = [
  {
    "id": "u06_001",
    "unitId": "U06",
    "category": "圓周率概念",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.86 例題 1",
    "verified": true,
    "question": "測量一個圓形光碟，直徑是 12 公分，圓周長大約是 37.68 公分。圓周長除以直徑的值是多少？這個比值叫做什麼？",
    "answer": "約為 3.14，叫做圓周率（$\\pi$）",
    "steps": [
      "$37.68 \\div 12 = 3.14$",
      "任何圓的圓周長除以直徑的比值都是固定的常數，叫做圓周率，常用 3.14 作為近似值。"
    ],
    "work": "sm"
  },
  {
    "id": "u06_002",
    "unitId": "U06",
    "category": "直徑求圓周長",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.88 例題 2",
    "verified": true,
    "question": "遊樂園的摩天輪直徑是 80 公尺，摩天輪旋轉一圈，車廂移動了大約多少公尺？",
    "answer": "251.2 公尺",
    "steps": [
      "圓周長 ＝ 直徑 $\\times 3.14$",
      "$80 \\times 3.14 = 251.2$ 公尺"
    ],
    "work": "sm"
  },
  {
    "id": "u06_003",
    "unitId": "U06",
    "category": "半徑求圓周長",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.89 例題 3",
    "verified": true,
    "question": "公園裡有一個圓形噴水池，半徑是 5 公尺。噴水池的圓周長是多少公尺？",
    "answer": "31.4 公尺",
    "steps": [
      "直徑 ＝ 半徑 $\\times 2 = 10$ 公尺",
      "圓周長 ＝ $10 \\times 3.14 = 31.4$ 公尺"
    ],
    "work": "sm"
  },
  {
    "id": "u06_004",
    "unitId": "U06",
    "category": "圓周長反求半徑",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.90 例題 4",
    "verified": true,
    "question": "有一棵大神木，用繩子圍繞樹幹一圈的長度剛好是 188.4 公分。這棵樹幹橫截面的直徑和大約半徑各是多少公分？",
    "answer": "直徑 60 公分，半徑 30 公分",
    "steps": [
      "直徑 ＝ 圓周長 $\\div 3.14$ ＝ $188.4 \\div 3.14 = 60$ 公分",
      "半徑 ＝ 直徑 $\\div 2 = 60 \\div 2 = 30$ 公分"
    ],
    "work": "sm"
  },
  {
    "id": "u06_005",
    "unitId": "U06",
    "category": "扇形弧長",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.92 例題 5",
    "verified": true,
    "question": "一個扇形的半徑是 12 公分，圓心角是 90°。這個扇形的弧長是多少公分？",
    "answer": "18.84 公分",
    "steps": [
      "整圓周長：$12 \\times 2 \\times 3.14 = 75.36$ 公分",
      "90° 是整圓（360°）的 $\\frac{90}{360} = \\frac{1}{4}$",
      "弧長：$75.36 \\times \\frac{1}{4} = 18.84$ 公分"
    ],
    "work": "sm"
  },
  {
    "id": "u06_006",
    "unitId": "U06",
    "category": "扇形周長大魔王",
    "level": 2,
    "difficulty": 4,
    "batch": "課本原型題",
    "source": "課本 p.93 例題 6",
    "verified": true,
    "question": "一個扇形的半徑是 10 公分，圓心角是 60°。這個扇形的周長大約是多少公分？",
    "svg": "\n<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', Outfit, sans-serif\">\n  <g transform=\"translate(60, 20)\">\n    <!-- 扇形 r=120, 60度 -->\n    <path d=\"M0,120 L120,120 A120,120 0 0,0 60,16.08 Z\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2.5\"/>\n    <text x=\"60\" y=\"140\" font-size=\"14\" font-weight=\"700\" fill=\"#312e81\" text-anchor=\"middle\">半徑 r = 10 cm</text>\n    <text x=\"12\" y=\"65\" font-size=\"14\" font-weight=\"700\" fill=\"#312e81\" text-anchor=\"middle\">半徑 r</text>\n    <text x=\"110\" y=\"60\" font-size=\"14\" font-weight=\"700\" fill=\"#b91c1c\" text-anchor=\"middle\">圓弧長 (約 10.47 cm)</text>\n    <path d=\"M25,120 A25,25 0 0,0 12.5,98.35\" fill=\"none\" stroke=\"#4338ca\" stroke-width=\"1.5\"/>\n    <text x=\"32\" y=\"112\" font-size=\"12\" fill=\"#4338ca\" font-weight=\"700\">60°</text>\n  </g>\n  <g font-size=\"14\" fill=\"#1e1b4b\" transform=\"translate(250, 45)\">\n    <text x=\"0\" y=\"20\" font-weight=\"800\" fill=\"#4338ca\">扇形周長公式：</text>\n    <text x=\"0\" y=\"48\">＝ 弧長 ＋ 半徑 × 2</text>\n    <text x=\"0\" y=\"74\" fill=\"#b91c1c\" font-weight=\"700\">⚠️ 千萬不能只算弧長！</text>\n    <text x=\"0\" y=\"96\" fill=\"#64748b\">必須加上兩條圍成邊的半徑</text>\n  </g>\n</svg>",
    "answer": "大約 30.47 公分（或 $10.47 + 20$）",
    "steps": [
      "整圓周長：$10 \\times 2 \\times 3.14 = 62.8$ 公分",
      "弧長：$62.8 \\times \\frac{60}{360} = 62.8 \\div 6 \\approx 10.47$ 公分",
      "大魔王關鍵！扇形周長 ＝ 弧長 ＋ 兩條半徑！",
      "扇形周長：$10.47 + 10 \\times 2 = 10.47 + 20 = 30.47$ 公分"
    ],
    "insight": "幾何圍欄法則：周長是「外圍完整走一圈的總長度」，包含圓弧與切開的兩條半徑。",
    "trap": {
      "code": "ERR_SECTOR_PERIMETER_OMIT_RADIUS",
      "text": "算完弧長 10.47 公分直接當答案，漏加兩條半徑 2r。"
    },
    "work": "md"
  },
  {
    "id": "u06_007",
    "unitId": "U06",
    "category": "半圓周長",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.94 例題 7",
    "verified": true,
    "question": "直徑 14 公分的半圓形量角器，周長是多少公分？",
    "answer": "35.98 公分",
    "steps": [
      "半圓弧長：$14 \\times 3.14 \\div 2 = 21.98$ 公分",
      "周長包含底下的直徑：$21.98 + 14 = 35.98$ 公分"
    ],
    "trap": {
      "code": "ERR_SECTOR_PERIMETER_OMIT_RADIUS",
      "text": "忘了加底邊直徑 14 公分。"
    },
    "work": "sm"
  },
  {
    "id": "u06_008",
    "unitId": "U06",
    "category": "跑道複合圖形",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.96 例題 8",
    "verified": true,
    "question": "學校操場跑道，中間是兩條各長 100 公尺的直線，兩端是半徑 30 公尺的半圓。沿著最內側跑道跑一圈大約是多少公尺？",
    "answer": "388.4 公尺",
    "steps": [
      "兩端的半圓剛好合為一個半徑 30 公尺（直徑 60 公尺）的完整圓：$60 \\times 3.14 = 188.4$ 公尺",
      "加上兩條直線跑道：$100 \\times 2 = 200$ 公尺",
      "跑道總長：$200 + 188.4 = 388.4$ 公尺"
    ],
    "work": "sm"
  },
  {
    "id": "u06_101",
    "unitId": "U06",
    "category": "滾輪距離換算",
    "level": 3,
    "difficulty": 3,
    "batch": "奧數天梯",
    "source": "Unit06 AI_SPEC level_2（滾輪圈數）",
    "verified": true,
    "question": "自行車輪子的直徑是 50 公分。小明騎車讓輪子在地上滾動了 20 圈，一共前進了大約多少公尺？",
    "answer": "31.4 公尺",
    "steps": [
      "滾動 1 圈的距離 ＝ 輪子圓周長：$50 \\times 3.14 = 157$ 公分 ＝ 1.57 公尺",
      "滾動 20 圈：$1.57 \\times 20 = 31.4$ 公尺"
    ],
    "work": "sm"
  },
  {
    "id": "u06_102",
    "unitId": "U06",
    "category": "複合幾何周長",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit06 AI_SPEC level_3（正方形挖角）",
    "verified": true,
    "question": "邊長 10 公分的正方形，在四個角各挖掉一個半徑 2 公分的 $\\frac{1}{4}$ 圓。剩下圖形的外圍周長是多少公分？",
    "answer": "36.56 公分",
    "steps": [
      "每邊剩下的直線段：$10 - 2 \\times 2 = 6$ 公分，4 邊共有 $6 \\times 4 = 24$ 公分",
      "四個角的 $\\frac{1}{4}$ 圓弧剛好合為一個半徑 2 公分（直徑 4 公分）的完整圓：$4 \\times 3.14 = 12.56$ 公分",
      "外圍總周長：$24 + 12.56 = 36.56$ 公分"
    ],
    "insight": "組合割補思維：分散的弧長先拼湊成整圓再計算。",
    "work": "md"
  },
  {
    "id": "u06_103",
    "unitId": "U06",
    "category": "外公切線綑綁繩長",
    "level": 4,
    "difficulty": 5,
    "batch": "奧數天梯",
    "source": "Unit06 AI_SPEC level_4（束帶長度）",
    "verified": true,
    "question": "用一條繩子將兩個半徑都是 5 公分的圓柱緊緊綑綁一圈（不計打結長度）。這條繩子的長度至少需要多少公分？",
    "answer": "51.4 公分",
    "steps": [
      "畫出切線分析：上下兩條直線段外公切線長度 ＝ 兩圓心距離 ＝ $2r = 10$ 公分，兩條共 $10 \\times 2 = 20$ 公分",
      "左右兩側貼附圓柱的弧各為半圓，合為一個半徑 5 公分（直徑 10 公分）的整圓周長：$10 \\times 3.14 = 31.4$ 公分",
      "繩子總長度：$20 + 31.4 = 51.4$ 公分"
    ],
    "insight": "奧數綑綁模型：n 個等圓綑一圈，繩長 ＝ n 條直線段（直徑×n）＋ 1 個完整圓周長（2πr）。",
    "work": "md"
  },
  {
    "id": "u06_m01",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "圓周率意義",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "任何一個圓，「圓周長 ÷ 直徑」的結果是？",
    "options": [
      "2",
      "圓周率（約 3.14）",
      "半徑",
      "依圓的大小而不同"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "所有圓都是彼此的放大縮小。",
      "圓周長和直徑的比值永遠固定 ＝ 圓周率。"
    ],
    "insight": "圓周率是常數，跟圓的大小無關。",
    "trap": {
      "code": "ERR_U06_M01",
      "text": "以為大圓的比值比較大。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m02",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "直徑與半徑",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "直徑 10 公分的圓和半徑 5 公分的圓，周長相比？",
    "options": [
      "前者長",
      "後者長",
      "一樣長",
      "無法比較"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "半徑 5 → 直徑 10。",
      "直徑相同的圓，周長一樣。"
    ],
    "insight": "先統一成直徑再比。",
    "trap": {
      "code": "ERR_U06_M02",
      "text": "直接比 10 和 5。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m03",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "周長正比",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "圓的直徑變成 3 倍，圓周長變成？",
    "options": [
      "3 倍",
      "6 倍",
      "9 倍",
      "不變"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "周長 ＝ 直徑 × 圓周率，圓周率固定。",
      "直徑變 3 倍，周長也變 3 倍。"
    ],
    "insight": "長度跟著長度同倍數變化（面積才是平方倍）。",
    "trap": {
      "code": "ERR_U06_M03",
      "text": "和面積 9 倍搞混。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m04",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "半圓周長",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "「半圓形的周長」和「圓周長的一半」，哪一個比較長？",
    "options": [
      "一樣長",
      "半圓形的周長",
      "圓周長的一半",
      "無法比較"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "圓周長的一半只有一段弧。",
      "半圓形周長 ＝ 弧 ＋ 直徑，多了一條直徑。"
    ],
    "insight": "圖形周長要繞「一整圈」，別忘了直線邊。",
    "trap": {
      "code": "ERR_U06_M04",
      "text": "以為兩個說法一樣。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m05",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "扇形弧長占比",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "圓心角 90° 的扇形，弧長是整個圓周長的幾分之幾？",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{90}$",
      "$\\frac{1}{4}$"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "$90° \\div 360° = \\frac{1}{4}$。"
    ],
    "insight": "弧長占比 ＝ 圓心角 ÷ 360°。",
    "trap": {
      "code": "ERR_U06_M05",
      "text": "用 90 當分母。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m06",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "周長反推",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "一個圓的周長是 31.4 公分（圓周率用 3.14），直徑是多少？",
    "options": [
      "5 公分",
      "10 公分",
      "15.7 公分",
      "3.14 公分"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "$31.4 = 3.14 \\times 10$，一眼看出直徑 10。"
    ],
    "insight": "熟記：直徑 10 → 周長 31.4；直徑 20 → 62.8。",
    "trap": {
      "code": "ERR_U06_M06",
      "text": "算成半徑 5。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m07",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "地球繩子",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "一條繩子剛好繞地球赤道一圈。把繩子加長 6.28 公尺，均勻撐起離地，繩子離地大約多高？",
    "options": [
      "不到 1 公分",
      "約 1 公尺",
      "約 100 公尺",
      "地球太大，無法計算"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "周長多 6.28 → 直徑多 $6.28 \\div 3.14 = 2$ 公尺。",
      "半徑多 1 公尺 → 離地約 1 公尺。"
    ],
    "insight": "周長增加量只和半徑增加量有關，跟原本的圓多大無關！",
    "trap": {
      "code": "ERR_U06_M07",
      "text": "直覺以為地球那麼大，加 6 公尺根本看不出來。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m08",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "分針路程",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "分針長 10 公分，1 小時分針尖端走了多遠？（圓周率 3.14）",
    "options": [
      "31.4 公分",
      "62.8 公分",
      "10 公分",
      "314 公分"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "1 小時分針轉一整圈，半徑 10 → 直徑 20。",
      "$20 \\times 3.14 = 62.8$。"
    ],
    "insight": "針長 ＝ 半徑，不是直徑。",
    "trap": {
      "code": "ERR_U06_M08",
      "text": "把 10 當直徑算成 31.4。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m09",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "半圓弧切割",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "直徑 AB 上的大半圓弧，和把 AB 任意分成兩段、各以兩段為直徑畫的兩個小半圓弧，總長相比？",
    "options": [
      "大半圓弧比較長",
      "兩個小半圓弧比較長",
      "一樣長",
      "要看分割點在哪"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "半圓弧長 ＝ 直徑 × 圓周率 ÷ 2，和直徑成正比。",
      "兩段小直徑加起來 ＝ AB。",
      "所以兩小弧總長 ＝ 大弧長，和分割點無關。"
    ],
    "insight": "正比關係可以「拆開再加回」→ 總和不變。",
    "trap": {
      "code": "ERR_U06_M09",
      "text": "看圖覺得彎彎曲曲比較長。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m10",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "扇形周長陷阱",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "半徑 10 公分的半圓形，周長是多少？（圓周率 3.14）",
    "options": [
      "31.4 公分",
      "41.4 公分",
      "62.8 公分",
      "51.4 公分"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "弧長 ＝ $20 \\times 3.14 \\div 2 = 31.4$。",
      "再加直徑 20 → 51.4。"
    ],
    "insight": "扇形周長 ＝ 弧長 ＋ 2 條半徑。",
    "trap": {
      "code": "ERR_U06_M10",
      "text": "只算弧長 31.4。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m11",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "弧長等於半徑",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "扇形的弧長剛好等於半徑時，圓心角大約是幾度？",
    "options": [
      "約 30°",
      "約 57°",
      "約 90°",
      "剛好 60°"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "整圈弧長 ＝ 2 × 3.14 × 半徑 ≈ 6.28 個半徑。",
      "1 個半徑長的弧 → $360° \\div 6.28 \\approx 57°$。"
    ],
    "insight": "比 60° 小一點：因為圓周率比 3 大一點。",
    "trap": {
      "code": "ERR_U06_M11",
      "text": "以為正三角形 60° 的弧長等於半徑（那是弦長）。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m12",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "方與圓",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "正方形的邊長等於圓的直徑，正方形周長和圓周長相比？",
    "options": [
      "正方形比較長",
      "圓比較長",
      "一樣長",
      "無法比較"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "正方形周長 ＝ 4 個直徑。",
      "圓周長 ≈ 3.14 個直徑。"
    ],
    "insight": "圓被正方形包在裡面，周長一定比較短。",
    "trap": {
      "code": "ERR_U06_M12",
      "text": "以為圓「看起來」比較大。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m13",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "跑道內外道",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "操場跑道兩端是半圓。外圈跑道的半徑比內圈多 1 公尺，跑一圈外圈比內圈多跑多少？",
    "options": [
      "2 公尺",
      "3.14 公尺",
      "6.28 公尺",
      "依跑道長短而定"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "直線部分內外一樣長。",
      "兩個半圓 ＝ 一個整圓，半徑多 1 → 直徑多 2。",
      "多 $2 \\times 3.14 = 6.28$ 公尺。"
    ],
    "insight": "跟地球繩子同一原理：只看半徑差。",
    "trap": {
      "code": "ERR_U06_M13",
      "text": "以為跑道越長差越多。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m14",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "兩圓綑綁",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "兩個半徑 5 公分的圓並排相切，用繩子緊緊綑一圈，繩長是多少？（圓周率 3.14）",
    "options": [
      "51.4 公分",
      "62.8 公分",
      "31.4 公分",
      "41.4 公分"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "兩條直線段，各等於兩圓心距離 10 → 20。",
      "兩端各半圓 → 合起來一整圓 31.4。",
      "$20 + 31.4 = 51.4$。"
    ],
    "insight": "綑綁繩長 ＝ 直線段 ＋ 一整個圓周。",
    "trap": {
      "code": "ERR_U06_M14",
      "text": "把兩個圓周全部加起來 62.8。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m15",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "三圓綑綁",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "三個半徑 5 公分的圓兩兩相切（排成三角形），用繩子緊綑一圈，繩長是多少？",
    "options": [
      "31.4 公分",
      "51.4 公分",
      "61.4 公分",
      "94.2 公分"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "3 條直線段，各 10 → 30。",
      "3 個轉角弧，轉角加起來剛好轉一圈 → 一整圓 31.4。",
      "$30 + 31.4 = 61.4$。"
    ],
    "insight": "不管幾個圓，轉角弧加總永遠 ＝ 一個圓周。",
    "trap": {
      "code": "ERR_U06_M15",
      "text": "以為三段弧各是半圓。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m16",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "四圓綑綁",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "四個半徑 5 公分的圓排成 2 × 2 正方形，用繩子緊綑一圈，繩長是多少？",
    "options": [
      "62.8 公分",
      "71.4 公分",
      "81.4 公分",
      "40 公分"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "4 條直線段，各 10 → 40。",
      "4 個轉角各 $\\frac{1}{4}$ 圓 → 一整圓 31.4。",
      "$40 + 31.4 = 71.4$。"
    ],
    "insight": "繞一圈回到原方向 ＝ 總共轉 360° ＝ 一個圓周。",
    "trap": {
      "code": "ERR_U06_M16",
      "text": "只算直線 40。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m17",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "硬幣滾動",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "一枚硬幣沿著另一枚「同樣大小」的固定硬幣外緣滾一圈回到原處，滾動的硬幣自己轉了幾圈？",
    "options": [
      "1 圈",
      "2 圈",
      "3 圈",
      "4 圈"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "滾動硬幣的中心走的圓，半徑是 2 個硬幣半徑 → 路程是自身周長的 2 倍。",
      "中心路程 ÷ 自身周長 ＝ 2 圈。"
    ],
    "insight": "AMC 經典：自轉圈數 ＝ 中心走的路 ÷ 自己的周長。",
    "trap": {
      "code": "ERR_U06_M17",
      "text": "只看接觸邊長相等而選 1。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m18",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "時針分針路程",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "時針長 6 公分、分針長 10 公分。12 小時內，時針尖和分針尖走的路程比是？",
    "options": [
      "$1 : 12$",
      "$3 : 5$",
      "$1 : 20$",
      "$5 : 3$"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "12 小時：時針轉 1 圈，分針轉 12 圈。",
      "路程 ∝ 半徑 × 圈數：$6 \\times 1 : 10 \\times 12 = 6 : 120 = 1 : 20$。"
    ],
    "insight": "路程 ＝ 半徑比 × 圈數比，兩個比要相乘。",
    "trap": {
      "code": "ERR_U06_M18",
      "text": "只考慮圈數或只考慮長度。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m19",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "圓周率大於 3",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "為什麼可以確定圓周率一定比 3 大？",
    "options": [
      "圓內畫正六邊形，周長 ＝ 3 個直徑，而圓周比它長",
      "因為 3.14 比 3 大",
      "量了很多圓都是這樣",
      "因為圓周長總是直徑的 3 倍多一點點，所以剛好是 3"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "圓內接正六邊形由 6 個正三角形組成，每邊 ＝ 半徑。",
      "六邊形周長 ＝ 6 個半徑 ＝ 3 個直徑。",
      "兩點之間直線最短 → 圓周比六邊形周長長 → 圓周率 ＞ 3。"
    ],
    "insight": "阿基米德的想法：用多邊形把圓「夾」起來。",
    "trap": {
      "code": "ERR_U06_M19",
      "text": "用結論（3.14）證明結論。"
    },
    "work": "sm"
  },
  {
    "id": "u06_m20",
    "unitId": "U06",
    "category": "純腦力體操",
    "topic": "大小硬幣滾動",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "一枚硬幣沿著半徑是它「2 倍」的固定硬幣外緣滾一圈，滾動的硬幣自己轉了幾圈？",
    "options": [
      "1 圈",
      "2 圈",
      "4 圈",
      "3 圈"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "小硬幣半徑 $r$，大硬幣 $2r$ → 中心走的圓半徑 $3r$。",
      "中心路程是自身周長的 3 倍 → 3 圈。"
    ],
    "insight": "外滾公式：自轉圈數 ＝ 大半徑 ÷ 小半徑 ＋ 1。",
    "trap": {
      "code": "ERR_U06_M20",
      "text": "只算 2 倍周長選 2 圈。"
    },
    "work": "sm"
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U06'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
