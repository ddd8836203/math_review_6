// U04 題庫分片（共 32 題）
(function (root) {
  const DATA = [
  {
    "id": "u04_001",
    "unitId": "U04",
    "category": "比與比值概念",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.52 例題 1",
    "verified": true,
    "question": "一個長方形的長是 8 公分、寬是 5 公分。長對寬的比是多少？比值是多少？比值需要寫單位嗎？",
    "answer": "比是 $8 : 5$，比值是 $\\frac{8}{5}$（或 $1.6$），比值不帶單位",
    "steps": [
      "長對寬的比：前項是長，後項是寬 → $8 : 5$",
      "比值 ＝ 前項 $\\div$ 後項 ＝ $8 \\div 5 = \\frac{8}{5} = 1.6$",
      "比值是兩量相除的倍數倍率，是純純的數，絕對不能加「公分」等單位！"
    ],
    "trap": {
      "code": "ERR_RATIO_VALUE_UNIT_CONFUSION",
      "text": "在比值後面寫上單位「1.6 公分」。"
    },
    "work": "sm"
  },
  {
    "id": "u04_002",
    "unitId": "U04",
    "category": "相等的比",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.54 例題 2",
    "verified": true,
    "question": "煮特調鮮奶茶時，紅茶與鮮奶的毫升數比是 $3 : 2$。如果今天用了 600 毫升的鮮奶，需要準備多少毫升的紅茶？",
    "answer": "900 毫升",
    "steps": [
      "比的前項與後項同乘相同倍數，比值不變。",
      "鮮奶由 2 份變為 600 毫升 → 擴大了 $600 \\div 2 = 300$ 倍",
      "紅茶也必須擴大 300 倍：$3 \\times 300 = 900$ 毫升",
      "檢驗：$900 : 600 = 3 : 2$ ✔"
    ],
    "work": "sm"
  },
  {
    "id": "u04_003",
    "unitId": "U04",
    "category": "最簡整數比",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.56 例題 1",
    "verified": true,
    "question": "將 $48 : 72$ 化為最簡整數比，並求其比值。",
    "answer": "最簡整數比為 $2 : 3$，比值為 $\\frac{2}{3}$",
    "steps": [
      "求 48 和 72 的最大公因數：$(48, 72) = 24$",
      "前項與後項同除以 24：$(48 \\div 24) : (72 \\div 24) = 2 : 3$",
      "比值 ＝ $2 \\div 3 = \\frac{2}{3}$"
    ],
    "trap": {
      "code": "ERR_RATIO_NOT_PRIME_TO_EACH_OTHER",
      "text": "只除以 6 化成 8:12，未化簡至前後項互質。"
    },
    "work": "sm"
  },
  {
    "id": "u04_004",
    "unitId": "U04",
    "category": "最簡整數比",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.57 例題 2",
    "verified": true,
    "question": "把小數比 $1.2 : 0.8$ 化為最簡整數比。",
    "answer": "$3 : 2$",
    "steps": [
      "先同乘 10 變成整數比：$12 : 8$",
      "求最大公因數：$(12, 8) = 4$",
      "同除以 4：$3 : 2$"
    ],
    "work": "sm"
  },
  {
    "id": "u04_005",
    "unitId": "U04",
    "category": "最簡整數比",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.58 例題 3",
    "verified": true,
    "question": "把分數比 $\\frac{3}{4} : \\frac{5}{6}$ 化為最簡整數比。",
    "answer": "$9 : 10$",
    "steps": [
      "找分母 4 和 6 的最小公倍數：$[4, 6] = 12$",
      "前項與後項同乘 12：$(\\frac{3}{4} \\times 12) : (\\frac{5}{6} \\times 12) = 9 : 10$",
      "9 和 10 互質，即為最簡整數比。"
    ],
    "work": "sm"
  },
  {
    "id": "u04_006",
    "unitId": "U04",
    "category": "最簡整數比",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.59 例題 4",
    "verified": true,
    "question": "把 $0.75 : 1\\frac{1}{4}$ 化為最簡整數比，並求其比值。",
    "answer": "最簡整數比為 $3 : 5$，比值為 $\\frac{3}{5}$",
    "steps": [
      "統一化為分數：$0.75 = \\frac{3}{4}$， $1\\frac{1}{4} = \\frac{5}{4}$",
      "同乘 4 去分母：$3 : 5$",
      "比值 ＝ $\\frac{3}{5}$"
    ],
    "work": "sm"
  },
  {
    "id": "u04_007",
    "unitId": "U04",
    "category": "按比例分配",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.62 例題 1",
    "verified": true,
    "question": "全班共有 35 人，男生與女生的人數比是 $3 : 4$。男生和女生各有多少人？",
    "svg": "\n<svg viewBox=\"0 0 520 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', Outfit, sans-serif\">\n  <g font-size=\"15\" font-weight=\"700\" fill=\"#1e1b4b\">\n    <text x=\"20\" y=\"42\">男生 (3份)</text>\n    <text x=\"20\" y=\"86\">女生 (4份)</text>\n  </g>\n  <!-- 男生 3 格 -->\n  <g fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\">\n    <rect x=\"110\" y=\"24\" width=\"70\" height=\"26\" rx=\"3\"/><rect x=\"180\" y=\"24\" width=\"70\" height=\"26\" rx=\"3\"/><rect x=\"250\" y=\"24\" width=\"70\" height=\"26\" rx=\"3\"/>\n  </g>\n  <!-- 女生 4 格 -->\n  <g fill=\"#fbcfe8\" stroke=\"#be185d\" stroke-width=\"1.5\">\n    <rect x=\"110\" y=\"68\" width=\"70\" height=\"26\" rx=\"3\"/><rect x=\"180\" y=\"68\" width=\"70\" height=\"26\" rx=\"3\"/><rect x=\"250\" y=\"68\" width=\"70\" height=\"26\" rx=\"3\"/><rect x=\"320\" y=\"68\" width=\"70\" height=\"26\" rx=\"3\"/>\n  </g>\n  <path d=\"M400 24 Q415 24 415 57 Q415 94 400 94\" fill=\"none\" stroke=\"#4338ca\" stroke-width=\"2\"/>\n  <text x=\"425\" y=\"63\" font-size=\"16\" font-weight=\"800\" fill=\"#4338ca\">共 35 人 (每份 5 人)</text>\n  <text x=\"145\" y=\"42\" font-size=\"12\" fill=\"#1e3a8a\" text-anchor=\"middle\">5人</text>\n  <text x=\"215\" y=\"42\" font-size=\"12\" fill=\"#1e3a8a\" text-anchor=\"middle\">5人</text>\n  <text x=\"285\" y=\"42\" font-size=\"12\" fill=\"#1e3a8a\" text-anchor=\"middle\">5人</text>\n</svg>",
    "answer": "男生 15 人，女生 20 人",
    "steps": [
      "總份數：$3 + 4 = 7$ 份",
      "每份人數：$35 \\div 7 = 5$ 人",
      "男生佔 3 份：$5 \\times 3 = 15$ 人",
      "女生佔 4 份：$5 \\times 4 = 20$ 人"
    ],
    "insight": "按比例分配核心公式：某部分 ＝ 總量 $\\times \\frac{該部分份數}{總份數}$。",
    "work": "sm"
  },
  {
    "id": "u04_008",
    "unitId": "U04",
    "category": "按比例分配",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.63 例題 2",
    "verified": true,
    "question": "飲料店調製 1000 毫升的柳橙綠茶，綠茶與柳橙原汁的容量比是 $7 : 3$。綠茶和柳橙原汁各需要多少毫升？",
    "answer": "綠茶 700 毫升，柳橙原汁 300 毫升",
    "steps": [
      "總份數：$7 + 3 = 10$ 份",
      "綠茶容量：$1000 \\times \\frac{7}{10} = 700$ 毫升",
      "原汁容量：$1000 \\times \\frac{3}{10} = 300$ 毫升"
    ],
    "work": "sm"
  },
  {
    "id": "u04_009",
    "unitId": "U04",
    "category": "按比例分配幾何",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.66 練習園地",
    "verified": true,
    "question": "一個三角形的三個內角度數比是 $2 : 3 : 4$。求這三個內角各是多少度？",
    "answer": "40°、60°、80°",
    "steps": [
      "三角形內角和固定為 180°",
      "總份數：$2 + 3 + 4 = 9$ 份",
      "每份度數：$180^\\circ \\div 9 = 20^\\circ$",
      "三角分別為：$20 \\times 2 = 40^\\circ$、$20 \\times 3 = 60^\\circ$、$20 \\times 4 = 80^\\circ$"
    ],
    "work": "sm"
  },
  {
    "id": "u04_101",
    "unitId": "U04",
    "category": "和不變比例轉移",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit04 AI_SPEC level_2（轉學問題）",
    "verified": true,
    "question": "六年級甲、乙兩班學生共有 70 人，甲班人數與乙班人數的比是 $3 : 4$。後來甲班轉入若干人、乙班轉出相同人數後，甲班與乙班人數的比變成 $4 : 3$。請問甲班轉入多少人？",
    "answer": "10 人",
    "steps": [
      "轉入轉出人數相同 → 兩班總人數保持 70 人不變！",
      "原本甲班：$70 \\times \\frac{3}{3 + 4} = 30$ 人",
      "變動後甲班：$70 \\times \\frac{4}{4 + 3} = 40$ 人",
      "甲班轉入人數：$40 - 30 = 10$ 人"
    ],
    "insight": "不變量思維：找到過程中「總和不變」的基準，是比例轉移題的秒殺關鍵。",
    "work": "md"
  },
  {
    "id": "u04_102",
    "unitId": "U04",
    "category": "連比整合",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit04 AI_SPEC level_3（三量連比）",
    "verified": true,
    "question": "有甲、乙、丙三杯食鹽水，甲杯與乙杯重量比是 $2 : 3$，乙杯與丙杯重量比是 $4 : 5$。若三杯食鹽水共重 1050 公克，請問乙杯食鹽水重多少公克？",
    "answer": "360 公克",
    "steps": [
      "連比求中間項（乙）的最小公倍數：$[3, 4] = 12$",
      "甲 : 乙 ＝ $2 : 3 = 8 : 12$",
      "乙 : 丙 ＝ $4 : 5 = 12 : 15$",
      "得 甲 : 乙 : 丙 ＝ $8 : 12 : 15$",
      "總份數 ＝ $8 + 12 + 15 = 35$ 份",
      "每份重量 ＝ $1050 \\div 35 = 30$ 公克",
      "乙杯佔 12 份：$12 \\times 30 = 360$ 公克"
    ],
    "insight": "連比技巧：透過中間橋樑項找最小公倍數搭橋。",
    "work": "md"
  },
  {
    "id": "u04_103",
    "unitId": "U04",
    "category": "反比與行程",
    "level": 4,
    "difficulty": 5,
    "batch": "奧數天梯",
    "source": "Unit04 AI_SPEC level_4（AMC 8 行程反比）",
    "verified": true,
    "question": "一條山路，小明上山與下山的速率比是 $2 : 3$。已知小明上山和下山來回一趟共花了 5 小時，請問小明上山花費了多少小時？",
    "answer": "3 小時",
    "steps": [
      "路程相同時，時間與速率成反比！",
      "上山速率 : 下山速率 ＝ $2 : 3$",
      "因此 上山時間 : 下山時間 ＝ $3 : 2$",
      "總時間份數：$3 + 2 = 5$ 份，共 5 小時 → 每份 1 小時",
      "上山時間佔 3 份：$3 \\times 1 = 3$ 小時"
    ],
    "insight": "反比黃金法則：路程固定，時間比等於速率比的倒數。",
    "work": "sm"
  },
  {
    "id": "u04_m01",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "相等的比",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "$3 : 5$ 和 $6 : 10$ 的比值相比？",
    "options": [
      "相等",
      "前者大",
      "後者大",
      "無法比較"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "前項、後項同乘 2，比值不變。",
      "兩個比值都是 $\\frac{3}{5}$。"
    ],
    "insight": "比的前後項同乘同除（不為 0），比值不變。",
    "trap": {
      "code": "ERR_U04_M01",
      "text": "以為數字大比值就大。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m02",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "比值意義",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "$4 : 4$ 的比值是？",
    "options": [
      "0",
      "1",
      "4",
      "16"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "比值 ＝ 前項 ÷ 後項 ＝ $4 \\div 4 = 1$。"
    ],
    "insight": "前後項相同 → 比值必為 1。",
    "trap": {
      "code": "ERR_U04_M02",
      "text": "把比值當成相減得 0。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m03",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "最簡整數比",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "$0.5 : 1.5$ 的最簡整數比是？",
    "options": [
      "$3 : 1$",
      "$5 : 15$",
      "$1 : 3$",
      "$1 : 1.5$"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "1.5 是 0.5 的 3 倍。",
      "所以最簡整數比是 $1 : 3$。"
    ],
    "insight": "最簡整數比：前後項都是整數，且互質。",
    "trap": {
      "code": "ERR_U04_M03",
      "text": "$5 : 15$ 還沒約分；$1 : 1.5$ 不是整數比。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m04",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "部分與全體",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "班上男生 : 女生 ＝ $2 : 3$，男生占全班的幾分之幾？",
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{3}{5}$",
      "$\\frac{3}{2}$",
      "$\\frac{2}{5}$"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "全班看成 $2 + 3 = 5$ 份。",
      "男生占 2 份 → $\\frac{2}{5}$。"
    ],
    "insight": "部分 : 部分 → 部分 : 全體，分母要用「和」。",
    "trap": {
      "code": "ERR_U04_M04",
      "text": "直接寫 $\\frac{2}{3}$。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m05",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "連比橋接",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "甲 : 乙 ＝ $3 : 4$，乙 : 丙 ＝ $4 : 5$，甲 : 丙 ＝ ？",
    "options": [
      "$3 : 5$",
      "$4 : 5$",
      "$3 : 4$",
      "$5 : 3$"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "兩個比中的乙都是 4，可以直接接起來。",
      "甲 : 乙 : 丙 ＝ $3 : 4 : 5$ → 甲 : 丙 ＝ $3 : 5$。"
    ],
    "insight": "中間項相同 → 直接串成連比。",
    "trap": {
      "code": "ERR_U04_M05",
      "text": "把比值相乘時弄反方向。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m06",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "同乘不變",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "$a : b = 7 : 3$。若 $a$、$b$ 都乘以 2026，比值會？",
    "options": [
      "變大",
      "變小",
      "不變",
      "無法判斷"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "比值 ＝ $a \\div b$。",
      "被除數和除數同乘一個數，商不變。"
    ],
    "insight": "比的基本性質 ＝ 除法的商不變性質。",
    "trap": {
      "code": "ERR_U04_M06",
      "text": "以為乘了大數比值也變大。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m07",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "長度比與面積比",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "兩個正方形的邊長比是 $1 : 2$，周長比是？",
    "options": [
      "$1 : 2$",
      "$1 : 4$",
      "$2 : 1$",
      "$1 : 8$"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "周長 ＝ 邊長 × 4，兩邊都乘 4，比不變。",
      "周長比 ＝ 邊長比 ＝ $1 : 2$。"
    ],
    "insight": "「長度」跟著同比例；「面積」才會變平方（第 7 單元伏筆）。",
    "trap": {
      "code": "ERR_U04_M07",
      "text": "和面積比 $1 : 4$ 搞混。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m08",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "總數整除",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "班上男女生人數比是 $3 : 2$，全班人數可能是？",
    "options": [
      "32 人",
      "33 人",
      "34 人",
      "35 人"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "全班是 $3 + 2 = 5$ 份，每份人數相同。",
      "所以全班人數一定是 5 的倍數。",
      "只有 35 是 5 的倍數。"
    ],
    "insight": "比的和 → 總數必為（前項 ＋ 後項）的倍數。",
    "trap": {
      "code": "ERR_U04_M08",
      "text": "以為只要是 3 或 2 的倍數就行。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m09",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "平分差額",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "甲、乙的錢比是 $5 : 3$。甲給乙 10 元後兩人一樣多。兩人共有多少元？",
    "options": [
      "40 元",
      "60 元",
      "80 元",
      "100 元"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "總共 8 份，一樣多時各 4 份。",
      "甲從 5 份變 4 份 → 給出 1 份 ＝ 10 元。",
      "總共 $8 \\times 10 = 80$ 元。"
    ],
    "insight": "轉移問題：總量不變，看「份數變化」。",
    "trap": {
      "code": "ERR_U04_M09",
      "text": "以為差 2 份 ＝ 10 元。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m10",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "差與和的比",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "$a : b = 2 : 3$，則 $(b - a) : (a + b)$ ＝ ？",
    "options": [
      "$5 : 1$",
      "$2 : 5$",
      "$1 : 5$",
      "$1 : 3$"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "把 $a$ 看成 2 份，$b$ 看成 3 份。",
      "$b - a = 1$ 份，$a + b = 5$ 份。",
      "比是 $1 : 5$。"
    ],
    "insight": "用「份數」代替真實數字，任何比都能秒算。",
    "trap": {
      "code": "ERR_U04_M10",
      "text": "前後項順序寫反。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m11",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "年齡差不變",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "現在哥哥和弟弟的年齡比是 $3 : 1$，10 年後變成 $2 : 1$。弟弟現在幾歲？",
    "options": [
      "10 歲",
      "5 歲",
      "20 歲",
      "15 歲"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "年齡差永遠不變。現在差 2 份（弟弟 1 份）。",
      "10 年後比是 $2 : 1$，差 ＝ 弟弟的年齡 ＝ 2 份 → 弟弟從 1 份變 2 份。",
      "多出的 1 份 ＝ 10 年 → 弟弟現在 10 歲。"
    ],
    "insight": "年齡問題第一招：抓住「差不變」。",
    "trap": {
      "code": "ERR_U04_M11",
      "text": "以為兩人都加 10 比就不變。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m12",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "濃度直覺",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "一杯糖水（糖 : 水 ＝ $1 : 4$），再同時加入 10 公克糖和 10 公克水，糖水會？",
    "options": [
      "變甜",
      "變淡",
      "甜度不變",
      "無法判斷"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "原本糖占 $\\frac{1}{5}$ ＝ 20%。",
      "加入的部分糖占一半 ＝ 50%，比原本甜。",
      "混合後甜度介於兩者之間 → 比 20% 高 → 變甜。"
    ],
    "insight": "混合後的濃度一定介於兩者之間。",
    "trap": {
      "code": "ERR_U04_M12",
      "text": "以為糖水各加一樣多，比例就不變。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m13",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "角度連比",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "一個三角形三個內角的比是 $1 : 2 : 3$，它是什麼三角形？",
    "options": [
      "銳角三角形",
      "直角三角形",
      "鈍角三角形",
      "正三角形"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "內角和 180°，分成 6 份，每份 30°。",
      "最大角 ＝ 3 份 ＝ 90°。"
    ],
    "insight": "最大角占「一半」份數 → 剛好 90°。",
    "trap": {
      "code": "ERR_U04_M13",
      "text": "以為比例不同就是鈍角。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m14",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "分率反比",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "甲的 $\\frac{1}{2}$ 等於乙的 $\\frac{1}{3}$，甲 : 乙 ＝ ？",
    "options": [
      "$3 : 2$",
      "$2 : 3$",
      "$1 : 6$",
      "$6 : 1$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "只要拿出一半就等於乙的三分之一 → 甲比較少。",
      "設那個相等的量 ＝ 1：甲 ＝ 2，乙 ＝ 3。"
    ],
    "insight": "「甲的 $\\frac{1}{a}$ ＝ 乙的 $\\frac{1}{b}$」⇒ 甲 : 乙 ＝ $a : b$。",
    "trap": {
      "code": "ERR_U04_M14",
      "text": "直接寫 $\\frac{1}{2} : \\frac{1}{3} = 3 : 2$。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m15",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "槓桿混合",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "20% 的糖水和 30% 的糖水以 $1 : 3$ 的重量混合，濃度是？",
    "options": [
      "22.5%",
      "25%",
      "27.5%",
      "50%"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "30% 的那杯比較多 → 結果比較靠近 30%，先刪 A、B、D。",
      "槓桿：差距 10% 按 $3 : 1$ 反比分配 → 離 30% 有 2.5%。",
      "30% − 2.5% ＝ 27.5%。"
    ],
    "insight": "混合濃度 ＝ 槓桿原理：靠近量多的那邊。",
    "trap": {
      "code": "ERR_U04_M15",
      "text": "直接平均成 25%。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m16",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "百分率改變比",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "$A : B = 4 : 5$，若 $A$ 增加 25%，$B$ 不變，新的 $A : B$ ＝ ？",
    "options": [
      "$5 : 4$",
      "$4 : 5$",
      "$5 : 6$",
      "$1 : 1$"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "4 份增加 25% ＝ 增加 1 份 → 5 份。",
      "新比 ＝ $5 : 5 = 1 : 1$。"
    ],
    "insight": "百分率作用在「份數」上，不用真實數字。",
    "trap": {
      "code": "ERR_U04_M16",
      "text": "以為增加 25% 就把比反過來。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m17",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "比與周長",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "長方形長 : 寬 ＝ $3 : 2$，周長 50 公分，面積是多少？",
    "options": [
      "96 平方公分",
      "125 平方公分",
      "150 平方公分",
      "600 平方公分"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "長 ＋ 寬 ＝ 周長的一半 ＝ 25，分成 5 份，每份 5。",
      "長 15、寬 10，面積 150。"
    ],
    "insight": "周長要先「÷ 2」才是長寬和。",
    "trap": {
      "code": "ERR_U04_M17",
      "text": "用 50 分成 5 份，得到長 30、寬 20。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m18",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "連比占比",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "甲 : 乙 ＝ $2 : 3$，乙 : 丙 ＝ $2 : 5$，甲占三人總和的幾分之幾？",
    "options": [
      "$\\frac{2}{10}$",
      "$\\frac{4}{25}$",
      "$\\frac{2}{7}$",
      "$\\frac{4}{15}$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "乙在兩個比中是 3 和 2，統一成 6。",
      "甲 : 乙 : 丙 ＝ $4 : 6 : 15$，共 25 份。",
      "甲占 $\\frac{4}{25}$。"
    ],
    "insight": "連比的關鍵：把共同項換成公倍數（第 1 單元 LCM）。",
    "trap": {
      "code": "ERR_U04_M18",
      "text": "直接接成 $2 : 3 : 5$。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m19",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "平均速率陷阱",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "去程時速 60 公里，原路回程時速 40 公里，全程平均時速是？",
    "options": [
      "50 公里",
      "48 公里",
      "52 公里",
      "45 公里"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "設單程 120 公里：去 2 小時、回 3 小時。",
      "總路程 240 公里 ÷ 5 小時 ＝ 48。",
      "慢速花的時間比較多，平均會偏向 40 → 一定小於 50。"
    ],
    "insight": "路程相同時，速度比 $3 : 2$ ⇒ 時間比 $2 : 3$（反比）。",
    "trap": {
      "code": "ERR_U04_M19",
      "text": "直接把兩個速度平均成 50。"
    },
    "work": "sm"
  },
  {
    "id": "u04_m20",
    "unitId": "U04",
    "category": "純腦力體操",
    "topic": "總量不變轉移",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "甲、乙兩桶水的比是 $5 : 3$。甲倒 12 公升給乙後，比變成 $3 : 5$。兩桶共有多少公升？",
    "options": [
      "24 公升",
      "36 公升",
      "48 公升",
      "96 公升"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "總量不變，前後都是 8 份。",
      "甲從 5 份變 3 份 → 倒出 2 份 ＝ 12 公升 → 1 份 6 公升。",
      "總共 $8 \\times 6 = 48$。"
    ],
    "insight": "前後比的「和」相同 → 份數可以直接比較。",
    "trap": {
      "code": "ERR_U04_M20",
      "text": "以為 12 公升是 1 份。"
    },
    "work": "sm"
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U04'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
