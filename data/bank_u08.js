// U08 題庫分片（共 48 題）
(function (root) {
  const DATA = [
  {
    "id": "u08_001",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.119",
    "verified": false,
    "question": "一座長 80 公尺的橋，在橋的一側每隔 20 公尺設一盞路燈。<br>① 兩端都設，要設幾盞？<br>② 只設一端，要設幾盞？<br>③ 兩端都不設，要設幾盞？",
    "svg": "\n<svg viewBox=\"0 0 520 120\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Outfit, 'Noto Sans TC', sans-serif\">\n  <rect x=\"30\" y=\"54\" width=\"460\" height=\"16\" rx=\"4\" fill=\"#e0e7ff\" stroke=\"#3730a3\" stroke-width=\"2\"/>\n  <g stroke=\"#3730a3\" stroke-width=\"2\">\n    <line x1=\"30\" y1=\"46\" x2=\"30\" y2=\"78\"/><line x1=\"145\" y1=\"48\" x2=\"145\" y2=\"76\"/>\n    <line x1=\"260\" y1=\"48\" x2=\"260\" y2=\"76\"/><line x1=\"375\" y1=\"48\" x2=\"375\" y2=\"76\"/>\n    <line x1=\"490\" y1=\"46\" x2=\"490\" y2=\"78\"/>\n  </g>\n  <g font-size=\"15\" fill=\"#1e1b4b\" text-anchor=\"middle\">\n    <text x=\"87\" y=\"42\">20 m</text><text x=\"202\" y=\"42\">20 m</text><text x=\"317\" y=\"42\">20 m</text><text x=\"432\" y=\"42\">20 m</text>\n  </g>\n  <line x1=\"30\" y1=\"98\" x2=\"490\" y2=\"98\" stroke=\"#64748b\" stroke-width=\"1.5\" marker-start=\"url(#a)\" marker-end=\"url(#a)\"/>\n  <defs><marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#64748b\"/></marker></defs>\n  <text x=\"260\" y=\"114\" font-size=\"15\" fill=\"#334155\" text-anchor=\"middle\">橋長 80 m</text>\n</svg>",
    "answer": "① 5 盞　② 4 盞　③ 3 盞",
    "steps": [
      "間隔數：80 ÷ 20 = 4（個）",
      "① 兩端都設：4 + 1 = 5",
      "② 只設一端：4",
      "③ 兩端都不設：4 − 1 = 3"
    ],
    "insight": "手指模型：5 根手指之間有 4 個指縫。直線上「兩端都有」→ 棵數 = 間隔 + 1。",
    "trap": {
      "code": "ERR_INTERVAL_OFF_BY_ONE",
      "text": "直接 80 ÷ 20 = 4 就當答案，沒看清楚端點設不設。"
    }
  },
  {
    "id": "u08_002",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.119",
    "verified": false,
    "question": "圓形蛋糕的圓周長是 30 公分，沿著周圍每隔 6 公分擠一朵奶油花，共要擠幾朵？",
    "answer": "5 朵",
    "steps": [
      "圓形是封閉的：花朵數 = 間隔數",
      "30 ÷ 6 = 5"
    ],
    "insight": "封閉圖形沒有「端點」，所以不用 +1 也不用 −1。",
    "trap": {
      "code": "ERR_INTERVAL_OFF_BY_ONE",
      "text": "套用直線公式算成 6 朵。"
    },
    "work": "sm"
  },
  {
    "id": "u08_003",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.120",
    "verified": false,
    "question": "圓形池塘的周長是 1080 公尺，沿著池塘周圍設置 20 個告示牌，每個間隔一樣長。每個間隔長幾公尺？",
    "answer": "54 公尺",
    "steps": [
      "封閉圖形：間隔數 = 告示牌數 = 20",
      "1080 ÷ 20 = 54"
    ],
    "trap": {
      "code": "ERR_INTERVAL_OFF_BY_ONE",
      "text": "用 1080 ÷ 19 計算。"
    },
    "work": "sm"
  },
  {
    "id": "u08_004",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.120",
    "verified": false,
    "question": "卡丁車跑道周長 700 公尺，沿著跑道設置 25 個指標牌，每個間隔一樣長。每個間隔長幾公尺？",
    "answer": "28 公尺",
    "steps": [
      "封閉跑道：間隔數 = 指標牌數 = 25",
      "700 ÷ 25 = 28"
    ],
    "work": "sm"
  },
  {
    "id": "u08_005",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.121 練習",
    "verified": false,
    "question": "長 80 公尺的走廊，在一側擺放 16 盆花，起點不擺、終點擺，每個間隔一樣長。每個間隔長幾公尺？",
    "answer": "5 公尺",
    "steps": [
      "只有一端擺：間隔數 = 花盆數 = 16",
      "80 ÷ 16 = 5"
    ],
    "trap": {
      "code": "ERR_INTERVAL_OFF_BY_ONE",
      "text": "用 80 ÷ 15 或 80 ÷ 17。"
    },
    "work": "sm"
  },
  {
    "id": "u08_006",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.121 練習",
    "verified": false,
    "question": "一條長 104 公分的緞帶上要縫 7 顆鈕扣，兩端都不縫，每個間隔一樣長。每個間隔長幾公分？",
    "answer": "13 公分",
    "steps": [
      "兩端都不縫：間隔數 = 鈕扣數 + 1 = 8",
      "104 ÷ 8 = 13"
    ],
    "trap": {
      "code": "ERR_INTERVAL_OFF_BY_ONE",
      "text": "用 104 ÷ 7 或 104 ÷ 6。"
    },
    "work": "sm"
  },
  {
    "id": "u08_007",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.122 例 7",
    "verified": false,
    "question": "筆直的道路一側插了 20 枝旗子，相鄰兩枝的間隔都是 80 公分。從第 6 枝到第 16 枝旗子的距離是多少公分？",
    "answer": "800 公分",
    "steps": [
      "第 6 枝到第 16 枝的間隔數 = 16 − 6 = 10",
      "80 × 10 = 800"
    ],
    "insight": "第 a 個到第 b 個之間有 (b − a) 個間隔，不用 +1。",
    "trap": {
      "code": "ERR_INTERVAL_OFF_BY_ONE",
      "text": "算成 11 個間隔（880 公分）。"
    },
    "work": "sm"
  },
  {
    "id": "u08_008",
    "unitId": "U08",
    "category": "數形規律",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.123 例 1",
    "verified": false,
    "question": "火車車廂的裝飾圖案依照下圖的順序，每 3 個一組重複排列。第 25 個圖案是哪一個？",
    "svg": "\n<svg viewBox=\"0 0 560 90\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Outfit, sans-serif\">\n  <g fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2.5\" stroke-linejoin=\"round\">\n    <polygon points=\"20,60 50,60 35,30\"/><polygon points=\"75,30 75,60 105,45\"/><polygon points=\"130,30 160,30 145,60\"/>\n    <polygon points=\"185,60 215,60 200,30\"/><polygon points=\"240,30 240,60 270,45\"/><polygon points=\"295,30 325,30 310,60\"/>\n    <polygon points=\"350,60 380,60 365,30\"/>\n  </g>\n  <g font-size=\"13\" fill=\"#64748b\" text-anchor=\"middle\">\n    <text x=\"35\" y=\"80\">1</text><text x=\"90\" y=\"80\">2</text><text x=\"145\" y=\"80\">3</text><text x=\"200\" y=\"80\">4</text>\n    <text x=\"255\" y=\"80\">5</text><text x=\"310\" y=\"80\">6</text><text x=\"365\" y=\"80\">7</text>\n  </g>\n  <text x=\"440\" y=\"52\" font-size=\"26\" fill=\"#92400e\">……</text>\n</svg>",
    "answer": "△（每組的第 1 個）",
    "steps": [
      "每 3 個一組：25 ÷ 3 = 8 …… 1",
      "排完 8 組後，第 25 個是下一組的第 1 個 → △"
    ],
    "insight": "週期問題看「餘數」：餘 1 是第 1 個、餘 2 是第 2 個、整除是最後一個。",
    "work": "sm"
  },
  {
    "id": "u08_009",
    "unitId": "U08",
    "category": "數形規律",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.124 例 2",
    "verified": false,
    "question": "用棉花棒排一排相連的正方形（如下圖）。排 20 個相連的正方形，需要幾根棉花棒？",
    "svg": "\n<svg viewBox=\"0 0 560 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\">\n  <g stroke=\"#b45309\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\">\n    <rect x=\"30\" y=\"30\" width=\"60\" height=\"60\"/>\n    <rect x=\"150\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"210\" y=\"30\" width=\"60\" height=\"60\"/>\n    <rect x=\"330\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"390\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"450\" y=\"30\" width=\"60\" height=\"60\"/>\n  </g>\n  <g font-size=\"16\" fill=\"#1e1b4b\" text-anchor=\"middle\" font-weight=\"700\">\n    <text x=\"60\" y=\"125\">1 個：4 根</text><text x=\"210\" y=\"125\">2 個：7 根</text><text x=\"420\" y=\"125\">3 個：10 根</text>\n  </g>\n</svg>",
    "answer": "61 根",
    "steps": [
      "想法一：第 1 個用 4 根，之後每多 1 個多 3 根 → 4 + 3 × 19 = 61",
      "想法二：最左邊 1 根，每個正方形再用 3 根 → 1 + 3 × 20 = 61"
    ],
    "insight": "n 個相連正方形 = 3n + 1 根。"
  },
  {
    "id": "u08_010",
    "unitId": "U08",
    "category": "數形規律",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.125 例 3",
    "verified": false,
    "question": "用花片排成空心正方形（如下圖）。如果每邊排 30 個花片，一共需要幾個花片？",
    "svg": "\n<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\">\n  <g fill=\"#8b5cf6\" stroke=\"#5b21b6\" stroke-width=\"1.5\">\n    <circle cx=\"40\" cy=\"50\" r=\"9\"/><circle cx=\"64\" cy=\"50\" r=\"9\"/><circle cx=\"40\" cy=\"74\" r=\"9\"/><circle cx=\"64\" cy=\"74\" r=\"9\"/>\n    <circle cx=\"150\" cy=\"38\" r=\"9\"/><circle cx=\"174\" cy=\"38\" r=\"9\"/><circle cx=\"198\" cy=\"38\" r=\"9\"/>\n    <circle cx=\"150\" cy=\"62\" r=\"9\"/><circle cx=\"198\" cy=\"62\" r=\"9\"/>\n    <circle cx=\"150\" cy=\"86\" r=\"9\"/><circle cx=\"174\" cy=\"86\" r=\"9\"/><circle cx=\"198\" cy=\"86\" r=\"9\"/>\n    <circle cx=\"290\" cy=\"26\" r=\"9\"/><circle cx=\"314\" cy=\"26\" r=\"9\"/><circle cx=\"338\" cy=\"26\" r=\"9\"/><circle cx=\"362\" cy=\"26\" r=\"9\"/>\n    <circle cx=\"290\" cy=\"50\" r=\"9\"/><circle cx=\"362\" cy=\"50\" r=\"9\"/>\n    <circle cx=\"290\" cy=\"74\" r=\"9\"/><circle cx=\"362\" cy=\"74\" r=\"9\"/>\n    <circle cx=\"290\" cy=\"98\" r=\"9\"/><circle cx=\"314\" cy=\"98\" r=\"9\"/><circle cx=\"338\" cy=\"98\" r=\"9\"/><circle cx=\"362\" cy=\"98\" r=\"9\"/>\n  </g>\n  <g font-size=\"15\" fill=\"#1e1b4b\" text-anchor=\"middle\" font-weight=\"700\">\n    <text x=\"52\" y=\"140\">每邊 2 個：4 個</text><text x=\"174\" y=\"140\">每邊 3 個：8 個</text><text x=\"326\" y=\"140\">每邊 4 個：12 個</text>\n  </g>\n</svg>",
    "answer": "116 個",
    "steps": [
      "方法一：每邊只算 (30 − 1) 個，4 邊 → 29 × 4 = 116",
      "方法二：4 邊各 30 個 = 120，4 個角各多算 1 次 → 120 − 4 = 116"
    ],
    "trap": {
      "code": "ERR_INTERVAL_OFF_BY_ONE",
      "text": "直接 30 × 4 = 120，四個角重複算了。"
    }
  },
  {
    "id": "u08_011",
    "unitId": "U08",
    "category": "數形規律",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.125 思考帽",
    "verified": false,
    "question": "用花片排成空心正三角形，每邊的花片數一樣多，一共用了 72 個花片。每邊有幾個花片？",
    "answer": "25 個",
    "steps": [
      "空心正三角形：總數 = (每邊 − 1) × 3",
      "72 ÷ 3 = 24，每邊 = 24 + 1 = 25",
      "驗算：25 × 3 − 3 = 72 ✔"
    ],
    "work": "sm"
  },
  {
    "id": "u08_012",
    "unitId": "U08",
    "category": "數形規律",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.134 練習園地八",
    "verified": false,
    "question": "用邊長 1 公分的正方形方瓦，排成邊長 10 公分的空心正方形，共需要幾塊方瓦？",
    "answer": "36 塊",
    "steps": [
      "每邊 10 塊：(10 − 1) × 4 = 36"
    ],
    "work": "sm"
  },
  {
    "id": "u08_013",
    "unitId": "U08",
    "category": "選擇與組合",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.126 例 1",
    "verified": false,
    "question": "義式餐廳的義大利麵有 5 種、燉飯有 6 種、披薩有 3 種。如果只單點其中一種主食，共有幾種選擇？",
    "answer": "14 種",
    "steps": [
      "三類只選一種（不會同時發生）→ 相加",
      "5 + 6 + 3 = 14"
    ],
    "insight": "「或」→ 加法原理；「而且 / 每一個都要配」→ 乘法原理。",
    "trap": {
      "code": "ERR_ADD_MUL_CONFUSION",
      "text": "算成 5 × 6 × 3 = 90。"
    },
    "work": "sm"
  },
  {
    "id": "u08_014",
    "unitId": "U08",
    "category": "選擇與組合",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.126 例 2",
    "verified": false,
    "question": "有 0、3、5、8 四張數字卡，選兩張排成一個二位數，而且必須是偶數。共有幾種排法？",
    "answer": "5 種（30、50、80、38、58）",
    "steps": [
      "偶數的個位只能是 0 或 8",
      "個位 0：十位可放 3、5、8 → 3 種",
      "個位 8：十位不能放 0 → 只能放 3、5 → 2 種",
      "3 + 2 = 5"
    ],
    "trap": {
      "code": "ERR_ADD_MUL_CONFUSION",
      "text": "忘記 0 不能放十位，算成 6 種。"
    },
    "work": "sm"
  },
  {
    "id": "u08_015",
    "unitId": "U08",
    "category": "選擇與組合",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.126 練習",
    "verified": false,
    "question": "有 0、1、2、3、4 五張數字卡，選兩張排成一個二位數，而且必須是奇數。共有幾種排法？",
    "answer": "6 種（21、31、41、13、23、43）",
    "steps": [
      "奇數的個位只能是 1 或 3",
      "個位 1：十位可放 2、3、4 → 3 種",
      "個位 3：十位可放 1、2、4 → 3 種",
      "3 + 3 = 6"
    ],
    "work": "sm"
  },
  {
    "id": "u08_016",
    "unitId": "U08",
    "category": "選擇與組合",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.127 練習",
    "verified": false,
    "question": "櫥櫃裡有 5 個不同的杯子和 3 個不同的杯蓋，選一個杯子配一個杯蓋，共有幾種搭配？",
    "answer": "15 種",
    "steps": [
      "每個杯子都可以配 3 種杯蓋",
      "5 × 3 = 15"
    ],
    "trap": {
      "code": "ERR_ADD_MUL_CONFUSION",
      "text": "算成 5 + 3 = 8。"
    },
    "work": "sm"
  },
  {
    "id": "u08_017",
    "unitId": "U08",
    "category": "選擇與組合",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.128 例 4",
    "verified": false,
    "question": "速食店套餐：主餐 3 種、副餐 4 種、飲料 2 種，每份套餐三樣各選一種。共有幾種組合？",
    "answer": "24 種",
    "steps": [
      "分三步驟，每步都要做 → 相乘",
      "3 × 4 × 2 = 24"
    ],
    "work": "sm"
  },
  {
    "id": "u08_018",
    "unitId": "U08",
    "category": "選擇與組合",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.128 練習",
    "verified": false,
    "question": "登山步道會經過兩座吊橋：登山口到第一座橋有 3 條路，兩座橋之間有 2 條路，第二座橋到山頂有 2 條路。從登山口到山頂共有幾種走法？",
    "answer": "12 種",
    "steps": [
      "三段路依序都要走 → 相乘",
      "3 × 2 × 2 = 12"
    ],
    "work": "sm"
  },
  {
    "id": "u08_019",
    "unitId": "U08",
    "category": "和差問題",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.130 例 3",
    "verified": false,
    "question": "一份特餐和一份升級套餐共 500 元，升級套餐比特餐貴 80 元。兩種餐點各是多少元？",
    "svg": "\n<svg viewBox=\"0 0 540 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', Outfit, sans-serif\">\n  <g font-size=\"16\" font-weight=\"700\" fill=\"#1e1b4b\">\n    <text x=\"10\" y=\"44\">升級套餐</text><text x=\"10\" y=\"104\">特餐</text>\n  </g>\n  <rect x=\"100\" y=\"24\" width=\"260\" height=\"30\" rx=\"5\" fill=\"#c7d2fe\" stroke=\"#3730a3\" stroke-width=\"2\"/>\n  <rect x=\"360\" y=\"24\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#fecdd3\" stroke=\"#be123c\" stroke-width=\"2\"/>\n  <text x=\"400\" y=\"45\" font-size=\"15\" text-anchor=\"middle\" fill=\"#9f1239\" font-weight=\"700\">80 元</text>\n  <rect x=\"100\" y=\"84\" width=\"260\" height=\"30\" rx=\"5\" fill=\"#c7d2fe\" stroke=\"#3730a3\" stroke-width=\"2\"/>\n  <line x1=\"360\" y1=\"14\" x2=\"360\" y2=\"124\" stroke=\"#64748b\" stroke-dasharray=\"5 4\"/>\n  <path d=\"M455 24 Q470 24 470 44 L470 60 Q470 69 480 69 Q470 69 470 78 L470 94 Q470 114 455 114\" fill=\"none\" stroke=\"#1e1b4b\" stroke-width=\"2\"/>\n  <text x=\"490\" y=\"74\" font-size=\"16\" font-weight=\"800\" fill=\"#1e1b4b\">500 元</text>\n</svg>",
    "answer": "升級套餐 290 元，特餐 210 元",
    "steps": [
      "先拿掉多出來的 80 元：500 − 80 = 420 → 剩下 2 份特餐",
      "特餐 = 420 ÷ 2 = 210",
      "升級套餐 = 210 + 80 = 290"
    ],
    "insight": "大數 = (和 + 差) ÷ 2；小數 = (和 − 差) ÷ 2。"
  },
  {
    "id": "u08_020",
    "unitId": "U08",
    "category": "和差問題",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.131 例 5",
    "verified": false,
    "question": "用一條長 60 公分的繩子圍成一個長方形，長比寬多 6 公分。長和寬各是多少公分？",
    "answer": "長 18 公分，寬 12 公分",
    "steps": [
      "長 + 寬 = 60 ÷ 2 = 30",
      "長 = (30 + 6) ÷ 2 = 18",
      "寬 = (30 − 6) ÷ 2 = 12"
    ],
    "trap": {
      "code": "ERR_TRANSFER_HALF_DIFF",
      "text": "直接用 60 當「長 + 寬」，忘了周長 = (長 + 寬) × 2。"
    }
  },
  {
    "id": "u08_021",
    "unitId": "U08",
    "category": "和差問題",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.132 例 6",
    "verified": false,
    "question": "哥哥有 12 顆糖果，弟弟有 8 顆。哥哥要給弟弟幾顆，兩人才會一樣多？",
    "answer": "2 顆",
    "steps": [
      "相差 12 − 8 = 4",
      "把差平分：4 ÷ 2 = 2",
      "驗算：哥哥 10、弟弟 10 ✔"
    ],
    "insight": "給出去 k 個，兩人的差會縮小 2k。",
    "trap": {
      "code": "ERR_TRANSFER_HALF_DIFF",
      "text": "答 4 顆——給完變成弟弟比哥哥多 4 顆。"
    },
    "work": "sm"
  },
  {
    "id": "u08_022",
    "unitId": "U08",
    "category": "和差問題",
    "level": 1,
    "difficulty": 2,
    "batch": "課本原型題",
    "source": "課本 p.132 例 7",
    "verified": false,
    "question": "紅瓶裝了 800 毫升的水，綠瓶裝了 600 毫升。紅瓶要倒多少毫升到綠瓶，兩瓶才會一樣多？",
    "answer": "100 毫升",
    "steps": [
      "相差 800 − 600 = 200",
      "200 ÷ 2 = 100"
    ],
    "trap": {
      "code": "ERR_TRANSFER_HALF_DIFF",
      "text": "答 200 毫升。"
    },
    "work": "sm"
  },
  {
    "id": "u08_023",
    "unitId": "U08",
    "category": "和差問題",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.133 素養評量",
    "verified": false,
    "question": "巧庭付了兩人的車資 225 元，思妤付了兩人的餐費 385 元。如果所有費用兩人平均分攤，誰要給誰多少元？",
    "answer": "巧庭要給思妤 80 元",
    "steps": [
      "思妤多付 385 − 225 = 160 元",
      "平分差額：160 ÷ 2 = 80",
      "或：總共 610 元，每人 305 元，巧庭少付 305 − 225 = 80"
    ],
    "trap": {
      "code": "ERR_TRANSFER_HALF_DIFF",
      "text": "答「巧庭給思妤 160 元」。"
    },
    "work": "sm"
  },
  {
    "id": "u08_024",
    "unitId": "U08",
    "category": "和差問題",
    "level": 1,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.135 練習園地八",
    "verified": false,
    "question": "一件襯衫比一件裙子便宜 400 元，媽媽買了一件襯衫和一件裙子共花 1200 元。襯衫和裙子各是多少元？",
    "answer": "裙子 800 元，襯衫 400 元",
    "steps": [
      "裙子（大數）= (1200 + 400) ÷ 2 = 800",
      "襯衫（小數）= (1200 − 400) ÷ 2 = 400"
    ],
    "work": "sm"
  },
  {
    "id": "u08_025",
    "unitId": "U08",
    "category": "和差問題",
    "level": 2,
    "difficulty": 3,
    "batch": "課本原型題",
    "source": "課本 p.135 練習園地八",
    "verified": false,
    "question": "天平左盤放了 480 公克的物品，從左盤拿 50 公克移到右盤，天平剛好平衡。右盤原本放了多少公克？",
    "answer": "380 公克",
    "steps": [
      "移 50 公克就平衡 → 原本左盤比右盤多 50 × 2 = 100 公克",
      "右盤 = 480 − 100 = 380"
    ],
    "trap": {
      "code": "ERR_TRANSFER_HALF_DIFF",
      "text": "算成 480 − 50 = 430 公克。"
    },
    "work": "sm"
  },
  {
    "id": "u08_101",
    "unitId": "U08",
    "category": "間隔問題",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit08 AI_SPEC level_3（雙重植樹重合）",
    "verified": true,
    "question": "周長 400 公尺的環形跑道，原本每隔 8 公尺插一面旗子。後來改成每隔 10 公尺插一面（起點不變）。有幾面旗子不用移動？",
    "answer": "10 面",
    "steps": [
      "不用移動的位置要同時是 8 和 10 的倍數 → 每 40 公尺一個",
      "封閉跑道：400 ÷ 40 = 10"
    ],
    "insight": "兩種間隔重合 → 找最小公倍數；再套用封閉圖形「點數 = 間隔數」。",
    "work": "sm"
  },
  {
    "id": "u08_102",
    "unitId": "U08",
    "category": "數形規律",
    "level": 3,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit08 AI_SPEC level_3（火柴棒方格）",
    "verified": true,
    "question": "用火柴棒排成 2 排、每排 10 個的方格（共 20 個小正方形），一共需要幾根火柴棒？",
    "answer": "52 根",
    "steps": [
      "橫的：3 條橫線 × 每條 10 根 = 30",
      "直的：11 條直線 × 每條 2 根 = 22",
      "30 + 22 = 52"
    ],
    "insight": "m 排 n 列方格：橫的 (m + 1) × n 根、直的 (n + 1) × m 根。"
  },
  {
    "id": "u08_103",
    "unitId": "U08",
    "category": "選擇與組合",
    "level": 4,
    "difficulty": 4,
    "batch": "奧數天梯",
    "source": "Unit08 AI_SPEC level_4（塗色問題）",
    "verified": true,
    "question": "一排有 4 個格子，用紅、黃、藍 3 種顏色塗色，每格塗一種，相鄰兩格不能同色。共有幾種塗法？",
    "answer": "24 種",
    "steps": [
      "第 1 格：3 種",
      "第 2 格：不能和第 1 格同色 → 2 種",
      "第 3、4 格同理各 2 種",
      "3 × 2 × 2 × 2 = 24"
    ],
    "insight": "「只跟前一格比」的限制 → 乘法原理逐格算。",
    "work": "sm"
  },
  {
    "id": "u08_m01",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "植樹兩端",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "20 公尺的直路，每隔 5 公尺種一棵樹，兩端都種，共幾棵？",
    "options": [
      "4 棵",
      "5 棵",
      "6 棵",
      "20 棵"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "間隔數 ＝ $20 \\div 5 = 4$。",
      "兩端都種：棵數 ＝ 間隔數 ＋ 1 ＝ 5。"
    ],
    "insight": "直線兩端都種：點 ＝ 段 ＋ 1。",
    "trap": {
      "code": "ERR_U08_M01",
      "text": "只算間隔數 4。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m02",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "封閉植樹",
    "level": 1,
    "stars": 1,
    "difficulty": 1,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "verified": true,
    "question": "周長 20 公尺的圓形水池，每隔 5 公尺種一棵樹，共幾棵？",
    "options": [
      "4 棵",
      "5 棵",
      "3 棵",
      "6 棵"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "封閉圖形頭尾相接，起點 ＝ 終點。",
      "棵數 ＝ 間隔數 ＝ 4。"
    ],
    "insight": "封閉圖形：點 ＝ 段。",
    "trap": {
      "code": "ERR_U08_M02",
      "text": "套用直線公式多加 1。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m03",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "鋸木頭",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "一根木頭要鋸成 5 段，需要鋸幾次？",
    "options": [
      "5 次",
      "6 次",
      "10 次",
      "4 次"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "鋸 1 次變 2 段，每多鋸 1 次多 1 段。",
      "5 段需要鋸 4 次。"
    ],
    "insight": "刀數 ＝ 段數 − 1（植樹問題的變形）。",
    "trap": {
      "code": "ERR_U08_M03",
      "text": "以為段數 ＝ 次數。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m04",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "爬樓梯",
    "level": 2,
    "stars": 2,
    "difficulty": 2,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "verified": true,
    "question": "從 1 樓走到 4 樓要 30 秒，同樣速度從 1 樓走到 8 樓要幾秒？",
    "options": [
      "60 秒",
      "70 秒",
      "80 秒",
      "56 秒"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "1 樓到 4 樓只爬了 3 層 → 每層 10 秒。",
      "1 樓到 8 樓爬 7 層 → 70 秒。"
    ],
    "insight": "樓層問題 ＝ 植樹問題：層數 ＝ 樓數 − 1。",
    "trap": {
      "code": "ERR_U08_M04",
      "text": "以為 4 樓變 8 樓時間就加倍。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m05",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "和差問題",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "兩數和是 20，差是 4，大數是多少？",
    "options": [
      "12",
      "8",
      "16",
      "10"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "大數 ＝ (和 ＋ 差) ÷ 2 ＝ $24 \\div 2 = 12$。"
    ],
    "insight": "把小的補成大的：和 ＋ 差 ＝ 2 個大數。",
    "trap": {
      "code": "ERR_U08_M05",
      "text": "算出小數 8 就選。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m06",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "火柴正方形",
    "level": 3,
    "stars": 3,
    "difficulty": 3,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "verified": true,
    "question": "用火柴棒排一排相連的正方形，排 1 個要 4 根，每多 1 個多 3 根。排 10 個要幾根？",
    "options": [
      "40 根",
      "30 根",
      "31 根",
      "41 根"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "第一個 4 根，之後 9 個各 3 根。",
      "$4 + 9 \\times 3 = 31$，也就是 $3 \\times 10 + 1$。"
    ],
    "insight": "公式 $3n + 1$：每個正方形 3 根，加最左邊 1 根。",
    "trap": {
      "code": "ERR_U08_M06",
      "text": "直接 $4 \\times 10 = 40$，重複算了共用邊。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m07",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "空心方陣",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "空心方陣每邊 10 人，最外一圈共有幾人？",
    "options": [
      "40 人",
      "36 人",
      "100 人",
      "38 人"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "4 邊各 10 人 ＝ 40，但 4 個角各被算了 2 次。",
      "$40 - 4 = 36$。"
    ],
    "insight": "方陣外圈 ＝ $4n - 4$ ＝ $4(n - 1)$。",
    "trap": {
      "code": "ERR_U08_M07",
      "text": "忘了扣掉重複的角。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m08",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "數列規律",
    "level": 4,
    "stars": 4,
    "difficulty": 4,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "verified": true,
    "question": "1、4、9、16、□，□ 是多少？",
    "options": [
      "20",
      "24",
      "25",
      "32"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$1 \\times 1$、$2 \\times 2$、$3 \\times 3$、$4 \\times 4$。",
      "下一個 $5 \\times 5 = 25$。"
    ],
    "insight": "差 3、5、7、9 是連續奇數 → 平方數。",
    "trap": {
      "code": "ERR_U08_M08",
      "text": "只看差 3、5、7 卻算錯下一個。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m09",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "雞兔同籠",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "雞兔同籠共 10 個頭、32 隻腳，兔子有幾隻？",
    "options": [
      "4 隻",
      "5 隻",
      "8 隻",
      "6 隻"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "假設全是雞：20 隻腳，少了 12 隻。",
      "每把 1 隻雞換成兔子多 2 隻腳。",
      "$12 \\div 2 = 6$ 隻兔子。"
    ],
    "insight": "假設法：全部假設成一種，再用差額換。",
    "trap": {
      "code": "ERR_U08_M09",
      "text": "算出雞 4 隻就選。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m10",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "高斯配對",
    "level": 5,
    "stars": 5,
    "difficulty": 5,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "verified": true,
    "question": "$1 + 2 + 3 + \\cdots + 10$ 等於多少？",
    "options": [
      "50",
      "55",
      "100",
      "110"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "頭尾配對：$1 + 10 = 11$，共 5 對。",
      "$11 \\times 5 = 55$。"
    ],
    "insight": "等差數列和 ＝ (首 ＋ 尾) × 項數 ÷ 2。",
    "trap": {
      "code": "ERR_U08_M10",
      "text": "忘了除以 2 選 110。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m11",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "敲鐘間隔",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "時鐘 3 點敲 3 下用 2 秒，6 點敲 6 下要幾秒？",
    "options": [
      "4 秒",
      "6 秒",
      "3 秒",
      "5 秒"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "敲 3 下只有 2 個間隔 → 每間隔 1 秒。",
      "敲 6 下有 5 個間隔 → 5 秒。"
    ],
    "insight": "時間花在「間隔」上，不是在「敲」上。",
    "trap": {
      "code": "ERR_U08_M11",
      "text": "以為 3 下 2 秒，6 下就 4 秒。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m12",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "容斥原理",
    "level": 6,
    "stars": 6,
    "difficulty": 6,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "verified": true,
    "question": "1 到 100 中，是 3 的倍數「或」5 的倍數的數有幾個？",
    "options": [
      "53 個",
      "33 個",
      "47 個",
      "39 個"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "3 的倍數 33 個，5 的倍數 20 個。",
      "同時是 15 的倍數被算了 2 次：6 個。",
      "$33 + 20 - 6 = 47$。"
    ],
    "insight": "容斥：A ＋ B − 重疊（結合第 1 單元最小公倍數）。",
    "trap": {
      "code": "ERR_U08_M12",
      "text": "直接 33 ＋ 20 ＝ 53，忘了扣重複。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m13",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "排隊位置",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "小明排隊，從前面數是第 8 個，從後面數是第 12 個，這一排共幾人？",
    "options": [
      "20 人",
      "21 人",
      "19 人",
      "18 人"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "$8 + 12 = 20$，但小明被算了兩次。",
      "$20 - 1 = 19$。"
    ],
    "insight": "前數 ＋ 後數 − 1。",
    "trap": {
      "code": "ERR_U08_M13",
      "text": "直接相加得 20。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m14",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "數列奇偶",
    "level": 7,
    "stars": 7,
    "difficulty": 7,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "verified": true,
    "question": "數列 1、1、2、3、5、8、13、……（每項是前兩項的和），第 100 項是奇數還是偶數？",
    "options": [
      "奇數",
      "偶數",
      "無法判斷",
      "剛好是 0"
    ],
    "answer": "A",
    "answerKey": "A",
    "steps": [
      "只看奇偶：奇、奇、偶、奇、奇、偶……3 個一循環。",
      "第 3、6、9……項是偶數。",
      "100 不是 3 的倍數（99 才是）→ 第 100 項是奇數。"
    ],
    "insight": "巨大數列不用算值，只追蹤「奇偶週期」。",
    "trap": {
      "code": "ERR_U08_M14",
      "text": "想把數列寫到第 100 項。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m15",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "握手問題",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "6 個人，每兩人握手一次，共握幾次？",
    "options": [
      "30 次",
      "15 次",
      "36 次",
      "12 次"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "每人和其他 5 人握 → $6 \\times 5 = 30$。",
      "每次握手被兩人各算一次 → $30 \\div 2 = 15$。"
    ],
    "insight": "兩兩配對 ＝ $n(n - 1) \\div 2$。",
    "trap": {
      "code": "ERR_U08_M15",
      "text": "忘了除以 2。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m16",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "兩側植樹",
    "level": 8,
    "stars": 8,
    "difficulty": 8,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "verified": true,
    "question": "100 公尺長的路，兩側每隔 10 公尺種一棵樹，兩端都種，共幾棵？",
    "options": [
      "11 棵",
      "20 棵",
      "22 棵",
      "10 棵"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "一側：$100 \\div 10 + 1 = 11$ 棵。",
      "兩側：$11 \\times 2 = 22$ 棵。"
    ],
    "insight": "先算一側再乘 2。",
    "trap": {
      "code": "ERR_U08_M16",
      "text": "忘了「兩側」或忘了 ＋1。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m17",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "青蛙爬井",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "井深 10 公尺，青蛙白天爬 3 公尺、晚上滑下 2 公尺。第幾天能爬出井口？",
    "options": [
      "第 10 天",
      "第 8 天",
      "第 7 天",
      "第 9 天"
    ],
    "answer": "B",
    "answerKey": "B",
    "steps": [
      "每天淨爬 1 公尺，但最後一天爬到頂就出去了，不會再滑。",
      "前 7 天結束時在 7 公尺。",
      "第 8 天白天爬 3 公尺 → 10 公尺，出井！"
    ],
    "insight": "最後一步要單獨看：不要用「淨速度」算到底。",
    "trap": {
      "code": "ERR_U08_M17",
      "text": "用 $10 \\div 1 = 10$ 天。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m18",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "淘汰賽",
    "level": 9,
    "stars": 9,
    "difficulty": 9,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "verified": true,
    "question": "64 人參加單淘汰賽（每場淘汰 1 人），要比幾場才能產生冠軍？",
    "options": [
      "32 場",
      "64 場",
      "6 場",
      "63 場"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "每場剛好淘汰 1 人。",
      "最後只剩冠軍 1 人 → 淘汰 63 人 → 63 場。"
    ],
    "insight": "換個角度：數「被淘汰的人」，比數「每輪場數」快。",
    "trap": {
      "code": "ERR_U08_M18",
      "text": "只算第一輪 32 場，或算成 6 輪。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m19",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "抽屜原理",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "抽屜裡有紅襪 20 隻、黑襪 20 隻混在一起，摸黑拿，最少拿幾隻能保證有 2 隻同色？",
    "options": [
      "21 隻",
      "2 隻",
      "11 隻",
      "3 隻"
    ],
    "answer": "D",
    "answerKey": "D",
    "steps": [
      "只有 2 種顏色 ＝ 2 個抽屜。",
      "最倒楣：前 2 隻一紅一黑。",
      "第 3 隻一定和其中一隻同色。"
    ],
    "insight": "最壞情況 ＋ 1：顏色數 ＋ 1。",
    "trap": {
      "code": "ERR_U08_M19",
      "text": "以為要拿超過一半 21 隻。"
    },
    "work": "sm"
  },
  {
    "id": "u08_m20",
    "unitId": "U08",
    "category": "純腦力體操",
    "topic": "對折摺痕",
    "level": 10,
    "stars": 10,
    "difficulty": 10,
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "verified": true,
    "question": "一張紙對折 5 次後攤開，上面共有幾條摺痕？",
    "options": [
      "5 條",
      "10 條",
      "31 條",
      "32 條"
    ],
    "answer": "C",
    "answerKey": "C",
    "steps": [
      "對折 1 次：1 條；2 次：3 條；3 次：7 條……",
      "對折 $n$ 次分成 $2^n$ 份，摺痕 ＝ 份數 − 1。",
      "$2^5 - 1 = 32 - 1 = 31$。"
    ],
    "insight": "份數翻倍 ＋ 植樹「段 − 1」雙重模型。",
    "trap": {
      "code": "ERR_U08_M20",
      "text": "以為折幾次就幾條，或選份數 32。"
    },
    "work": "sm"
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U08'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
