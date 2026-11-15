// U03 題庫分片（共 33 題）
(function (root) {
  const DATA = [
  {
    "id": "u03_001",
    "unitId": "U03",
    "category": "整數除以小數",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.38 例題 1",
    "verified": true,
    "question": "一綑繩子長 9 公尺，每 1.5 公尺剪成一段做跳繩，全部剪完，共可剪成幾段？",
    "answer": "6 段",
    "steps": [
      "除數 1.5 小數點向右移 1 位變 15",
      "被除數 9 也向右移 1 位補 0 變 90",
      "$90 \\div 15 = 6$ 段"
    ],
    "insight": "小數除法核心：除數變整數，被除數小數點向右移相同位數（同乘 10）。",
    "work": "sm"
  },
  {
    "id": "u03_002",
    "unitId": "U03",
    "category": "小數除以小數",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.40 例題 1",
    "verified": true,
    "question": "有 3.6 公斤的茶葉，每 0.45 公斤裝成一罐，全部裝完，可以裝成幾罐？",
    "answer": "8 罐",
    "steps": [
      "除數 0.45 是兩位小數，小數點向右移兩位變 45",
      "被除數 3.6 向右移兩位補 0 變 360",
      "$360 \\div 45 = 8$ 罐"
    ],
    "work": "sm"
  },
  {
    "id": "u03_003",
    "unitId": "U03",
    "category": "小數除法補零",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.41 例題 3",
    "verified": true,
    "question": "一袋 2.4 公斤的咖啡豆，每 0.75 公斤裝成一包，全部裝完，可以裝成幾包？",
    "answer": "3.2 包",
    "steps": [
      "除數 0.75 移兩位變 75，被除數 2.4 移兩位變 240",
      "$240 \\div 75 = 3$ 餘 15",
      "在商點小數點，餘數補 0 變 150",
      "$150 \\div 75 = 2$ → 答案為 3.2 包"
    ],
    "work": "sm"
  },
  {
    "id": "u03_004",
    "unitId": "U03",
    "category": "小數除法大魔王",
    "level": 2,
    "difficulty": 4,
    "batch": "課本原型題",
    "source": "課本 p.42 例題 1",
    "verified": true,
    "question": "有 5.8 公斤的砂糖，每 0.35 公斤裝成一包，最多可裝滿幾包？還剩下幾公斤砂糖？",
    "svg": "\n<svg viewBox=\"0 0 500 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Outfit', 'Noto Sans TC', sans-serif\">\n  <rect x=\"10\" y=\"10\" width=\"480\" height=\"130\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n  <g font-size=\"16\" fill=\"#1e1b4b\">\n    <text x=\"40\" y=\"45\" font-weight=\"700\">題目：5.8 ÷ 0.35 ＝ 16 ⋯⋯ ( ？ )</text>\n    <text x=\"40\" y=\"78\" fill=\"#047857\" font-weight=\"700\">✔ 正確餘數：0.2 公斤</text>\n    <text x=\"260\" y=\"78\" font-size=\"14\" fill=\"#64748b\">（餘數小數點對齊原被除數 5.8）</text>\n    <text x=\"40\" y=\"112\" fill=\"#be123c\" font-weight=\"700\">❌ 典型錯誤：2 或 0.02</text>\n    <text x=\"260\" y=\"112\" font-size=\"14\" fill=\"#be123c\">（誤對齊向右移兩位後的 580）</text>\n  </g>\n</svg>",
    "answer": "最多可裝滿 16 包，還剩下 0.2 公斤",
    "steps": [
      "直式計算：除數 0.35 向右移兩位變 35，被除數 5.8 移兩位變 580",
      "$580 \\div 35 = 16$ 餘 20",
      "大魔王關鍵！餘數小數點必須「對齊原來的被除數小數點」！",
      "原被除數是 5.8，20 還原小數點後是 0.2 公斤（不是 2，也不是 0.02）",
      "驗算：$0.35 \\times 16 + 0.2 = 5.6 + 0.2 = 5.8$ 公斤 ✔"
    ],
    "insight": "小數除法餘數守則：商的小數點對齊新位置，餘數的小數點對齊「原來」被除數小數點！",
    "trap": {
      "code": "ERR_DEC_DIV_REMAINDER_POINT",
      "text": "把餘數寫成 20 或 0.02 公斤，忘記餘數小數點要垂直對齊原被除數。"
    },
    "work": "md"
  },
  {
    "id": "u03_005",
    "unitId": "U03",
    "category": "小數除法與餘數",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.43 例題 2",
    "verified": true,
    "question": "桶子裡有 24.8 公升的果汁，每 1.5 公升裝滿 1 瓶，最多可裝滿幾瓶？還剩下幾公升果汁？",
    "answer": "最多裝滿 16 瓶，剩下 0.8 公升",
    "steps": [
      "$248 \\div 15 = 16$ 餘 8",
      "餘數 8 對齊原小數點（十分位），因此是 0.8 公升",
      "驗算：$1.5 \\times 16 + 0.8 = 24 + 0.8 = 24.8$ 公升 ✔"
    ],
    "work": "sm"
  },
  {
    "id": "u03_006",
    "unitId": "U03",
    "category": "商與被除數的關係",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.44 例題 1",
    "verified": true,
    "question": "在 $\\square$ 裡填入 $>$、$<$ 或 $=$：<br>① $0.9 \\div 0.9 \\ \\square \\ 0.9$<br>② $2.38 \\div 1.2 \\ \\square \\ 2.38$<br>③ $40.2 \\div 1.01 \\ \\square \\ 40.2 \\div 0.99$",
    "answer": "① $>$　② $<$　③ $<$",
    "steps": [
      "① $0.9 \\div 0.9 = 1$，$1 > 0.9$ → 填 $>$",
      "② 除數 $1.2 > 1$，商小於被除數 → 填 $<$",
      "③ 左式除數 $>1$（值變小）；右式除數 $<1$（值變大）→ 填 $<$"
    ],
    "insight": "被除數相同時，除數越大，商越小；除數越小，商越大。",
    "work": "sm"
  },
  {
    "id": "u03_007",
    "unitId": "U03",
    "category": "除法與概數",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.45 例題 1",
    "verified": true,
    "question": "一包白米售價 175 元，重量是 1.5 公斤。1 公斤白米大約是多少元？（用四捨五入法將商取概數到個位）",
    "answer": "大約 117 元",
    "steps": [
      "列式：$175 \\div 1.5$",
      "要求取概數到個位，必須先算到下一位（小數點後第一位十分位）！",
      "$175 \\div 1.5 = 116.6\\dots$",
      "十分位數字是 6，滿 5 向個位進 1 → 約 117 元"
    ],
    "trap": {
      "code": "ERR_DEC_DIV_EARLY_STOP",
      "text": "只算到個位 116 就停筆，直接寫 116 元；切記「求到哪一位，必算到下一位」。"
    },
    "work": "sm"
  },
  {
    "id": "u03_008",
    "unitId": "U03",
    "category": "除法與概數",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.45 例題 2",
    "verified": true,
    "question": "挪威洛達爾隧道長約 24.5 公里，臺灣雪山隧道長約 12.9 公里。洛達爾隧道的長度大約是雪山隧道的幾倍？（用四捨五入法將商取概數到小數點後第一位）",
    "answer": "大約 1.9 倍",
    "steps": [
      "$24.5 \\div 12.9$",
      "取概數到小數點後第一位，需算到第二位（百分位）：",
      "$24.5 \\div 12.9 = 1.89\\dots$",
      "百分位是 9，進位得 1.9 倍"
    ],
    "work": "sm"
  },
  {
    "id": "u03_009",
    "unitId": "U03",
    "category": "素養評量",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.46 例題 3",
    "verified": true,
    "question": "藍鯨身長約 29.5 公尺，瓶鼻海豚身長約 3.6 公尺。藍鯨的身長大約是幾隻海豚的身長？（用四捨五入法取概數到小數點後第二位）",
    "answer": "大約 8.19 隻",
    "steps": [
      "$29.5 \\div 3.6$",
      "取概數到第二位（百分位），需計算到第三位（千分位）：",
      "$29.5 \\div 3.6 = 8.194\\dots$",
      "千分位數字為 4，捨去 → 8.19 隻"
    ],
    "work": "sm"
  },
  {
    "id": "u03_010",
    "unitId": "U03",
    "category": "素養觀念",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.46 素養評量",
    "verified": true,
    "question": "紅繩長 3.69 公尺，黃繩長 82 公分。求紅繩長是黃繩長的幾倍？多多算 $3.69 \\div 0.82 = 4.5$，丹丹算 $369 \\div 82 = 4.5$。為什麼兩人的答案完全相同？",
    "answer": "因為被除數與除數同時乘以 100，商不變",
    "steps": [
      "多多的單位是公尺：82 公分 ＝ 0.82 公尺，算式為 $3.69 \\div 0.82$",
      "丹丹的單位是公分：3.69 公尺 ＝ 369 公分，算式為 $369 \\div 82$",
      "小數除法中，被除數與除數同乘 100，商的值保持不變。"
    ],
    "work": "sm"
  },
  {
    "id": "u03_101",
    "unitId": "U03",
    "category": "移位逆推",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit03 AI_SPEC level_3（看錯小數點）",
    "verified": true,
    "question": "小華在計算一道除法題時，把除數的小數點向右看錯了一位，算得的商是 4.8。已知被除數沒有看錯，這道題目正確的商應該是多少？",
    "answer": "48",
    "steps": [
      "除數小數點向右看錯一位，表示除數擴大了 10 倍。",
      "在被除數不變的情況下，除數擴大 10 倍會導致算出的商縮小為原本的 $\\frac{1}{10}$。",
      "原本正確的商 ＝ $4.8 \\times 10 = 48$。"
    ],
    "insight": "逆向思維：除數擴大，商就縮小；把縮小的商乘回去就是正解。",
    "work": "sm"
  },
  {
    "id": "u03_102",
    "unitId": "U03",
    "category": "循環小數週期性",
    "level": 4,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit03 AI_SPEC level_4（循環小數）",
    "verified": true,
    "question": "將分數 $\\frac{5}{7}$ 化為小數，小數點後第 100 位數字是多少？",
    "answer": "2",
    "steps": [
      "長除法計算：$5 \\div 7 = 0.\\overline{714285}\\dots$",
      "循環節數字為 7、1、4、2、8、5，共 6 個數字循環。",
      "$100 \\div 6 = 16$ 餘 4",
      "餘數是 4，表示落在第 4 個循環數字 → 數字為 2"
    ],
    "insight": "週期規律：找循環長度，利用除法餘數精確定位。",
    "work": "md"
  },
  {
    "id": "u03_103",
    "unitId": "U03",
    "category": "公倍數節奏",
    "level": 3,
    "difficulty": 3,
    "batch": "奧數天梯",
    "source": "課本 p.49 數學搖滾挑戰題",
    "verified": true,
    "question": "一首 180 拍的數學搖滾樂曲，吉他每小節 4 拍，鼓每小節 3 拍。在整首曲子中，兩種樂器的重拍剛好在同一拍合在一起的次數共有幾次？",
    "answer": "15 次",
    "steps": [
      "求 4 和 3 的最小公倍數：$[4, 3] = 12$",
      "每隔 12 拍會剛好重合一次（第 12、24、36……拍）",
      "總共重合次數：$180 \\div 12 = 15$ 次"
    ],
    "work": "sm"
  },
  {
    "id": "u03_m01",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "除數小於 1",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "不用算：$36 \\div 0.9$ 的結果和 36 比起來？",
    "options": [
      "比 36 大",
      "比 36 小",
      "等於 36",
      "無法判斷"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "除數 0.9 小於 1。",
      "除以小於 1 的數，商比被除數大。"
    ],
    "insight": "和分數除法同一個道理：看除數比 1 大還是小。",
    "trap": {
      "code": "ERR_U03_M01",
      "text": "以為除法一定變小。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m02",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "小數點同移",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "$4.8 \\div 0.6$ 和下列哪一個算式的結果相同？",
    "options": [
      "$4.8 \\div 6$",
      "$480 \\div 6$",
      "$48 \\div 6$",
      "$48 \\div 0.6$"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "被除數和除數「同時乘以 10」，商不變。",
      "$4.8 \\div 0.6 = 48 \\div 6$。"
    ],
    "insight": "商不變性質：被除數、除數同乘同除一個數。",
    "trap": {
      "code": "ERR_U03_M02",
      "text": "只移動除數的小數點。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m03",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "倍數直覺",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "$2.5 \\div 0.25$ 等於多少？",
    "options": [
      "100",
      "0.1",
      "1",
      "10"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "0.25 的 10 倍是 2.5。",
      "所以 2.5 裡有 10 個 0.25。"
    ],
    "insight": "把除法讀成「裡面有幾個」。",
    "trap": {
      "code": "ERR_U03_M03",
      "text": "小數點位數算錯，選 1 或 100。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m04",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "除以 0.01",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "$7 \\div 0.01$ 和下列哪一個相等？",
    "options": [
      "$7 \\times 100$",
      "$7 \\div 100$",
      "$7 \\times 0.01$",
      "0.07"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "$0.01 = \\frac{1}{100}$。",
      "除以 $\\frac{1}{100}$ ＝ 乘以 100。"
    ],
    "insight": "÷ 0.1 ＝ × 10；÷ 0.01 ＝ × 100。",
    "trap": {
      "code": "ERR_U03_M04",
      "text": "把 ÷ 0.01 和 × 0.01 搞混。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m05",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "商相等比大小",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "甲 $\\div 0.8$ ＝ 乙 $\\div 1.2$（甲、乙都大於 0），誰比較大？",
    "options": [
      "甲",
      "乙",
      "一樣大",
      "無法判斷"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "甲除以小於 1 的數 → 被放大了。",
      "乙除以大於 1 的數 → 被縮小了。",
      "放大後的甲 ＝ 縮小後的乙 → 乙原本比較大。"
    ],
    "insight": "結果相同時，被「放大」的那個原本比較小。",
    "trap": {
      "code": "ERR_U03_M05",
      "text": "看到 1.2 比較大就以為乙的結果大。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m06",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "商的縮放",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "已知 $12.6 \\div 3 = 4.2$，那麼 $1.26 \\div 0.03$ 等於多少？",
    "options": [
      "0.42",
      "4.2",
      "42",
      "420"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "被除數 ÷ 10 → 商 ÷ 10。",
      "除數 ÷ 100 → 商 × 100。",
      "合起來商 × 10：$4.2 \\times 10 = 42$。"
    ],
    "insight": "被除數與除數的縮放效果要「分開算再合併」。",
    "trap": {
      "code": "ERR_U03_M06",
      "text": "只看被除數變小就選 0.42。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m07",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "餘數小數點",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "小華算 $17 \\div 0.3$，商取到整數位，寫「商 56，餘 2」。哪裡有問題？",
    "options": [
      "商算錯了",
      "餘數應該是 0.2",
      "餘數應該是 0.02",
      "完全正確"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "驗算：$0.3 \\times 56 = 16.8$。",
      "$17 - 16.8 = 0.2$。",
      "餘數的小數點要對齊「原來的被除數」，不是移動後的。"
    ],
    "insight": "餘數一定比除數 0.3 小 → 2 不可能是餘數，秒判。",
    "trap": {
      "code": "ERR_U03_M07",
      "text": "直式移位後忘了把餘數的小數點移回來。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m08",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "循環小數",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "$1 \\div 3$ 化成小數，小數點後第 100 位數字是？",
    "options": [
      "3",
      "0",
      "1",
      "6"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "$1 \\div 3 = 0.333\\ldots$，每一位都是 3。"
    ],
    "insight": "循環節只有一位時，任何一位都一樣。",
    "trap": {
      "code": "ERR_U03_M08",
      "text": "以為後面會出現四捨五入的 4。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m09",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "循環節週期",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "$\\frac{1}{7} = 0.\\overline{142857}$。小數點後第 100 位數字是？",
    "options": [
      "1",
      "4",
      "2",
      "8"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "循環節 6 位一組。",
      "96 是 6 的倍數 → 第 96 位是一組的結尾 7。",
      "第 100 位是下一組的第 4 位 → 8。"
    ],
    "insight": "週期問題：找最近的週期倍數，再數餘下幾位。",
    "trap": {
      "code": "ERR_U03_M09",
      "text": "直接用 100 ÷ 6 的商去找。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m10",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "除得盡判斷",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "下列哪一個分數化成小數會「除不盡」？",
    "options": [
      "$\\frac{3}{8}$",
      "$\\frac{5}{6}$",
      "$\\frac{9}{12}$",
      "$\\frac{7}{20}$"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "最簡分數的分母只含質因數 2 和 5，才除得盡。",
      "$\\frac{9}{12} = \\frac{3}{4}$，分母只剩 2 → 除得盡。",
      "$\\frac{5}{6}$ 分母有 3 → 除不盡。"
    ],
    "insight": "結合第 1 單元質因數分解：先約分再看分母。",
    "trap": {
      "code": "ERR_U03_M10",
      "text": "看到 12 有 3 就選，忘了先約分。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m11",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "倍數合併",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "$A \\div 0.5 + A \\div 0.25$ 等於 $A$ 的幾倍？",
    "options": [
      "0.75 倍",
      "6 倍",
      "3 倍",
      "8 倍"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "÷ 0.5 ＝ × 2。",
      "÷ 0.25 ＝ × 4。",
      "$2A + 4A = 6A$。"
    ],
    "insight": "常用換算：0.5 ↔ 2、0.25 ↔ 4、0.125 ↔ 8、0.2 ↔ 5。",
    "trap": {
      "code": "ERR_U03_M11",
      "text": "把除數相加變成 ÷ 0.75。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m12",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "看錯除數",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "小明把除數 0.25 看成 2.5，算出商是 4。正確的商應該是多少？",
    "options": [
      "0.4",
      "4",
      "40",
      "400"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "正確除數是看錯除數的 $\\frac{1}{10}$。",
      "除數變成 $\\frac{1}{10}$ → 商變 10 倍。",
      "$4 \\times 10 = 40$。"
    ],
    "insight": "不必回推被除數，直接用「除數與商反向縮放」。",
    "trap": {
      "code": "ERR_U03_M12",
      "text": "先回推被除數再算，容易出錯。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m13",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "0.999… 之謎",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "$0.999\\ldots$（9 無限循環）和 1 比較？",
    "options": [
      "比 1 小一點點",
      "剛好等於 1",
      "比 1 大",
      "無法表示"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "$\\frac{1}{3} = 0.333\\ldots$。",
      "兩邊同乘 3：$1 = 0.999\\ldots$。"
    ],
    "insight": "無限循環小數可以剛好等於整數。",
    "trap": {
      "code": "ERR_U03_M13",
      "text": "以為永遠差一點點。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m14",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "循環化分數",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "$0.\\overline{12}$（$0.121212\\ldots$）寫成最簡分數是？",
    "options": [
      "$\\frac{1}{12}$",
      "$\\frac{12}{100}$",
      "$\\frac{6}{50}$",
      "$\\frac{4}{33}$"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "$\\frac{1}{99} = 0.010101\\ldots$。",
      "$0.121212\\ldots = 12 \\times \\frac{1}{99} = \\frac{12}{99}$。",
      "約分得 $\\frac{4}{33}$。"
    ],
    "insight": "兩位循環節 → 分母 99；一位循環節 → 分母 9。",
    "trap": {
      "code": "ERR_U03_M14",
      "text": "把循環小數當成 0.12。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m15",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "比值還原",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "$a$、$b$ 是互質的正整數，且 $a \\div b = 0.75$，則 $a + b$ 等於多少？",
    "options": [
      "7",
      "75",
      "175",
      "4"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "$0.75 = \\frac{3}{4}$。",
      "3 和 4 互質 → $a = 3$、$b = 4$。",
      "$3 + 4 = 7$。"
    ],
    "insight": "常用小數分數秒換：0.75 ＝ $\\frac{3}{4}$、0.125 ＝ $\\frac{1}{8}$。",
    "trap": {
      "code": "ERR_U03_M15",
      "text": "直接寫 $\\frac{75}{100}$ 而沒約分。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m16",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "連除換乘",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "$1 \\div 0.125 \\div 0.125$ 等於多少？",
    "options": [
      "16",
      "8",
      "64",
      "$\\frac{1}{64}$"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$0.125 = \\frac{1}{8}$，除以它 ＝ 乘以 8。",
      "$1 \\times 8 \\times 8 = 64$。"
    ],
    "insight": "把常見小數看成單位分數，連除變連乘。",
    "trap": {
      "code": "ERR_U03_M16",
      "text": "以為一直除會越來越小。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m17",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "誰更接近 1",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "$0.98 \\div 0.99$ 和 $0.99 \\div 0.98$，哪一個比較接近 1？",
    "options": [
      "$0.98 \\div 0.99$",
      "$0.99 \\div 0.98$",
      "一樣近",
      "無法判斷"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "$0.98 \\div 0.99 = \\frac{98}{99} = 1 - \\frac{1}{99}$。",
      "$0.99 \\div 0.98 = \\frac{99}{98} = 1 + \\frac{1}{98}$。",
      "$\\frac{1}{99} < \\frac{1}{98}$ → 前者離 1 比較近。"
    ],
    "insight": "把小數化成「1 ± 小分數」比較距離。",
    "trap": {
      "code": "ERR_U03_M17",
      "text": "以為兩者互為倒數，所以離 1 一樣遠。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m18",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "補數循環",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "$\\frac{1}{7} = 0.142857\\ldots$。不用直式，$\\frac{6}{7}$ 小數第 1 位是？",
    "options": [
      "1",
      "5",
      "8",
      "7"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$\\frac{6}{7} = 1 - \\frac{1}{7}$。",
      "$1 - 0.142857\\ldots = 0.857142\\ldots$。",
      "第 1 位是 8。"
    ],
    "insight": "補數法：$\\frac{6}{7}$ 的每一位 ＝ 9 減去 $\\frac{1}{7}$ 的每一位。",
    "trap": {
      "code": "ERR_U03_M18",
      "text": "真的去做 6 ÷ 7 的直式。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m19",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "循環小數和",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "$0.\\overline{1} + 0.\\overline{2} + 0.\\overline{3} + \\cdots + 0.\\overline{8}$ 等於多少？",
    "options": [
      "3.6",
      "36",
      "4",
      "3.96"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$0.\\overline{k} = \\frac{k}{9}$。",
      "總和 $= \\frac{1 + 2 + \\cdots + 8}{9} = \\frac{36}{9} = 4$。"
    ],
    "insight": "一位循環 ＝ 九分之幾，配合 1~8 配對和 36。",
    "trap": {
      "code": "ERR_U03_M19",
      "text": "當成 0.1 + 0.2 + … + 0.8 = 3.6。"
    },
    "work": "sm"
  },
  {
    "id": "u03_m20",
    "unitId": "U03",
    "category": "純腦力體操",
    "topic": "有限小數計數",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "$n$ 是 1 到 20 的整數，$\\frac{1}{n}$ 化成小數是「有限小數」的 $n$ 共有幾個？",
    "options": [
      "6 個",
      "7 個",
      "8 個",
      "10 個"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$\\frac{1}{n}$ 是有限小數 ⇔ $n$ 只含質因數 2 和 5。",
      "列出：1、2、4、5、8、10、16、20。",
      "共 8 個。"
    ],
    "insight": "AMC 8 經典：只含 2 與 5 的數 ＝ $2^a \\times 5^b$。",
    "trap": {
      "code": "ERR_U03_M20",
      "text": "漏掉 1 或 16、20。"
    },
    "work": "sm"
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U03'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
