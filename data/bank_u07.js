// U07 4D 滿血題庫分片（共 60 題）
(function (root) {
  const DATA = [
  {
    "id": "U07-S1-B-001",
    "legacyId": "u07_001",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "放大圖長寬與角度不變",
    "batch": "課本原型題",
    "source": "課本 p.104 例題 1",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "一個長方形的長是 4 公分、寬是 3 公分。畫成 2 倍放大圖後，放大圖的長、寬和四個角的角度各是多少？",
    "options": [
      {
        "key": "A",
        "text": "長 16 公分、寬 12 公分、每個角 90 度",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "B",
        "text": "長 8 公分、寬 6 公分、每個角 180 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "C",
        "text": "長 8 公分、寬 6 公分、每個角 90 度",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "長 2 公分、寬 1.5 公分、每個角 90 度",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "4 * 2",
      "expect": "8",
      "extraChecks": [
        {
          "expr": "3 * 2",
          "expect": "6"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握放大圖的兩大核心性質：對應邊長等比例放大，但對應角的角度完全不變。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：計算放大圖的長度。2 倍放大圖表示長和寬都要乘以 2："
        },
        {
          "type": "eq",
          "expr": "4 × 2 ＝ 8",
          "unit": "公分（放大後的長）"
        },
        {
          "type": "eq",
          "expr": "3 × 2 ＝ 6",
          "unit": "公分（放大後的寬）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"65\" width=\"64\" height=\"48\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><polyline points=\"30,77 42,77 42,65\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"62\" y=\"56\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">原圖甲：長 4</text><text x=\"18\" y=\"93\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">3</text><text x=\"62\" y=\"94\" font-size=\"12\" fill=\"#1e293b\" text-anchor=\"middle\">90°</text><path d=\"M 115 88 L 165 88\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"165,83 175,88 165,93\" fill=\"#f59e0b\"/><text x=\"142\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">放大 2 倍</text><rect x=\"195\" y=\"35\" width=\"128\" height=\"96\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><polyline points=\"195,50 210,50 210,35\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"1.5\"/><text x=\"259\" y=\"25\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">放大圖乙：長 8</text><text x=\"182\" y=\"88\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">6</text><text x=\"259\" y=\"88\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">角仍是 90°</text><text x=\"345\" y=\"65\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">長寬變 2 倍</text><text x=\"345\" y=\"92\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">角度完全不變</text></svg>",
          "caption": "長方形甲放大 2 倍後，對應邊長乘以 2，但四個直角依然維持 90°"
        },
        {
          "type": "text",
          "text": "第 2 步：判斷角度。放大只改變圖形大小，不改變形狀，所以長方形的四個角依然是 90 度。"
        },
        {
          "type": "answer",
          "text": "答：長 8 公分、寬 6 公分、每個角 90 度。"
        }
      ],
      "insight": "圖形放大或縮小後，對應邊會依倍率變長或變短，但對應角永遠一樣大！",
      "distractorAnalysis": {
        "B": "誤以為角度也要跟著乘以 2，把 90 度錯算成 180 度；若變成 180 度就會拉成直線，不再是長方形。",
        "D": "把「放大 2 倍」錯算成「縮小成 1/2 倍」，把長和寬都除以 2。",
        "A": "把 2 倍誤乘兩次變成 4 倍，算出長 16 公分、寬 12 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大圖邊長 ＝ 原圖邊長 × 放大倍數",
        "放大或縮小後，對應角的角度永遠保持不變"
      ],
      "conceptCompare": "長度（邊長、周長、對角線）會跟著放大倍數一起乘倍；角度則不論放大或縮小幾倍都維持不變。",
      "examVariations": "段考常考「把一個 30 度、60 度、90 度的直角三角形放大 5 倍，三個內角各是幾度？」，答案仍然是 30 度、60 度、90 度。"
    }
  },
  {
    "id": "U07-S1-B-002",
    "legacyId": "u07_002",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "面積放大平方倍",
    "batch": "課本原型題",
    "source": "課本 p.106 例題 2",
    "level": 2,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "一個邊長 5 公分的正方形，畫成 3 倍放大圖後，放大圖的周長和面積分別變成原來的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "周長變成 3 倍，面積變成 3 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "周長變成 3 倍，面積變成 9 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "周長變成 9 倍，面積變成 9 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "D",
        "text": "周長變成 3 倍，面積變成 6 倍",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "3 * 3",
      "expect": "9",
      "extraChecks": [
        {
          "expr": "(5 * 3 * 4) / (5 * 4)",
          "expect": "3"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否區分「長度（周長）」與「面積」在放大後的倍數差異：周長變成 3 倍，面積則變成 3 × 3 ＝ 9 倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算原圖與 3 倍放大圖的邊長和周長："
        },
        {
          "type": "eq",
          "expr": "5 × 3 ＝ 15",
          "unit": "公分（放大後的邊長）"
        },
        {
          "type": "eq",
          "expr": "（15 × 4）÷（5 × 4）＝ 60 ÷ 20 ＝ 3",
          "unit": "倍（周長倍數）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"95\" width=\"36\" height=\"36\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"53\" y=\"118\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">1 塊</text><text x=\"53\" y=\"148\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">邊長 5</text><path d=\"M 95 110 L 145 110\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"145,105 155,110 145,115\" fill=\"#f59e0b\"/><text x=\"122\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">邊長 3 倍</text><g transform=\"translate(175, 23)\"><rect x=\"0\" y=\"0\" width=\"108\" height=\"108\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"36\" y1=\"0\" x2=\"36\" y2=\"108\" stroke=\"#fb7185\" stroke-width=\"1.5\"/><line x1=\"72\" y1=\"0\" x2=\"72\" y2=\"108\" stroke=\"#fb7185\" stroke-width=\"1.5\"/><line x1=\"0\" y1=\"36\" x2=\"108\" y2=\"36\" stroke=\"#fb7185\" stroke-width=\"1.5\"/><line x1=\"0\" y1=\"72\" x2=\"108\" y2=\"72\" stroke=\"#fb7185\" stroke-width=\"1.5\"/><text x=\"54\" y=\"59\" font-size=\"14\" font-weight=\"800\" fill=\"#be123c\" text-anchor=\"middle\">共 9 塊</text><text x=\"54\" y=\"125\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">邊長 15（3 × 3 格）</text></g><text x=\"310\" y=\"58\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">周長變 3 倍</text><text x=\"310\" y=\"88\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">面積變 3 × 3 ＝ 9 倍</text><text x=\"310\" y=\"116\" font-size=\"12\" fill=\"#475569\">225 ÷ 25 ＝ 9 倍</text></svg>",
          "caption": "邊長放大 3 倍時，橫向與直向都變 3 倍，裡面可以排進 3 × 3 ＝ 9 個原正方形"
        },
        {
          "type": "text",
          "text": "第 2 步：比較面積倍數。原面積是 5 × 5 ＝ 25 平方公分，放大後面積是 15 × 15 ＝ 225 平方公分："
        },
        {
          "type": "eq",
          "expr": "225 ÷ 25 ＝ 9",
          "unit": "倍（即 3 × 3 ＝ 9 倍）"
        },
        {
          "type": "answer",
          "text": "答：周長變成 3 倍，面積變成 9 倍。"
        }
      ],
      "insight": "長度（邊長、周長）是一維線段，只乘 1 次倍數；面積包含長和寬兩個方向，要乘 2 次倍數！",
      "distractorAnalysis": {
        "A": "誤以為面積也只放大 3 倍，忘記面積是由「邊長 × 邊長」算出來的，兩條邊都變 3 倍。",
        "C": "把面積的平方規律誤套到周長上，以為周長也變成 9 倍。",
        "D": "把 3 的平方誤算成 3 ＋ 3 ＝ 6 倍或 3 × 2 ＝ 6 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖形放大或縮小為幾倍：周長就變幾倍",
        "面積倍數 ＝ 邊長倍數 × 邊長倍數"
      ],
      "conceptCompare": "如果是長方形、三角形或圓形，只要所有邊長（或半徑）都放大 3 倍，周長一律變 3 倍，面積一律變 3 × 3 ＝ 9 倍。",
      "examVariations": "段考常反過來問「正方形放大後面積變成原來的 25 倍，周長變成幾倍？」因為 5 × 5 ＝ 25，所以周長變成 5 倍。"
    }
  },
  {
    "id": "U07-S3-B-003",
    "legacyId": "u07_003",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "比例尺單位換算概念",
    "batch": "課本原型題",
    "source": "課本 p.108 例題 1",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "地圖上標示比例尺為 1：50000。這代表地圖上的 1 公分，相當於實際距離多少公尺？也就是多少公里？",
    "options": [
      {
        "key": "A",
        "text": "5000 公尺，也就是 5 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "50 公尺，也就是 0.05 公里",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "500 公尺，也就是 0.5 公里",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "50000 公尺，也就是 50 公里",
        "trapCode": "U07_RATIO_FRACTION_INV"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "50000 / 100",
      "expect": "500",
      "extraChecks": [
        {
          "expr": "50000 / 100000",
          "expect": "0.5"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解數字比例尺「1：50000」兩邊單位相同（公分對公分），並正確進行公分、公尺與公里的換算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：數字比例尺 1：50000 沒有寫單位時，前後都使用相同的長度單位。所以地圖上 1 公分，等於實際 50000 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"30\" width=\"110\" height=\"44\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"75\" y=\"50\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">圖上 1 公分</text><text x=\"75\" y=\"67\" font-size=\"12\" fill=\"#1e293b\" text-anchor=\"middle\">50000 公分</text><path d=\"M 135 52 L 165 52\" stroke=\"#64748b\" stroke-width=\"2\"/><polygon points=\"165,48 173,52 165,56\" fill=\"#64748b\"/><text x=\"152\" y=\"42\" font-size=\"11\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">去2個0</text><rect x=\"176\" y=\"30\" width=\"120\" height=\"44\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"236\" y=\"50\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">換算成公尺</text><text x=\"236\" y=\"67\" font-size=\"13\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">500 公尺</text><path d=\"M 301 52 L 331 52\" stroke=\"#64748b\" stroke-width=\"2\"/><polygon points=\"331,48 339,52 331,56\" fill=\"#64748b\"/><text x=\"318\" y=\"42\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">去3個0</text><rect x=\"342\" y=\"30\" width=\"100\" height=\"44\" rx=\"8\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"392\" y=\"50\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">換算成公里</text><text x=\"392\" y=\"67\" font-size=\"13\" font-weight=\"800\" fill=\"#9f1239\" text-anchor=\"middle\">0.5 公里</text><text x=\"230\" y=\"108\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">1 公里 ＝ 1000 公尺 ＝ 100000 公分（共少 5 個 0）</text></svg>",
          "caption": "把 50000 公分依序「去掉 2 個 0」變公尺，再「除以 1000」變公里"
        },
        {
          "type": "eq",
          "expr": "50000 ÷ 100 ＝ 500",
          "unit": "公尺"
        },
        {
          "type": "eq",
          "expr": "500 ÷ 1000 ＝ 0.5",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：500 公尺，也就是 0.5 公里。"
        }
      ],
      "insight": "比例尺口訣：公分變公尺去掉 2 個 0；公分變公里除以 100000（小數點向左移 5 位）！",
      "distractorAnalysis": {
        "A": "公分換公尺時少去掉一個 0（誤除以 10），把 50000 公分錯算成 5000 公尺。",
        "B": "公分換公尺時多去掉一個 0（誤除以 1000），錯算成 50 公尺與 0.05 公里。",
        "D": "直接把比例尺的數字 50000 當成公尺數，忘記比例尺前後兩邊一開始都是「公分」。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公尺 ＝ 100 公分；1 公里 ＝ 1000 公尺 ＝ 100000 公分",
        "比例尺 1：50000 ＝ 圖上 1 公分：實際 50000 公分"
      ],
      "conceptCompare": "沒有標明單位的「比」或「比值」比例尺，兩端單位必相同（通常是公分對公分）；若有標單位的線段比例尺，則依圖上標出的公尺或公里直接判讀。",
      "examVariations": "常改考「比例尺 1：200000 的地圖上，圖上 1 公分代表實際幾公里？」只要把 200000 去掉 5 個 0，答案就是 2 公里。"
    }
  },
  {
    "id": "U07-S3-B-004",
    "legacyId": "u07_004",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "圖上長求實際距離",
    "batch": "課本原型題",
    "source": "課本 p.110 例題 2",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "在一張比例尺 1：25000 的地圖上，量得甲、乙兩地的距離是 4 公分。兩地的實際距離是多少公里？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "圖上 1 公分（代表 250 公尺）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "圖上 4 公分（實際總距離）",
          "units": 4,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "4 個 250 公尺 ＝ 1000 公尺 ＝ 1 公里"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "10 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "0.16 公里",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "1 公里",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1.2 公里",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "4 * 25000 / 100000",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生能否由比例尺與圖上長度計算實際距離，並正確完成公分轉換為公里的單位換算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1：25000 表示實際距離是圖上長度的 25000 倍。先算實際幾公分："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "4 × 25000 ＝ 100000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：把 100000 公分化為公里（1 公里 ＝ 100000 公分）："
        },
        {
          "type": "eq",
          "expr": "100000 ÷ 100000 ＝ 1",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：1 公里。"
        }
      ],
      "insight": "也可以先把 25000 公分換成 250 公尺，再算 4 × 250 ＝ 1000 公尺 ＝ 1 公里，數字小更好算！",
      "figureNote": "線段圖顯示圖上 1 公分對應 250 公尺，甲乙兩地共 4 公分就是 4 個 250 公尺，合起來剛好 1 公里。",
      "distractorAnalysis": {
        "A": "把 100000 公分化為公里時少去掉一個 0（誤除以 10000），錯答成 10 公里。",
        "B": "沒有先算乘法，錯把 4 ÷ 25 算成 0.16 公里。",
        "D": "誤將 250 × 4 進位失誤算成 1200 公尺，換算成 1.2 公里。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際距離 ＝ 圖上距離 × 比例尺分母",
        "100000 公分 ＝ 1000 公尺 ＝ 1 公里"
      ],
      "conceptCompare": "求實際距離會「變大」，要用乘法；求圖上距離會「縮小」，要用除法。",
      "examVariations": "若圖上距離改為 12 公分，則實際距離為 3 × 1 ＝ 3 公里。"
    }
  },
  {
    "id": "U07-S3-B-005",
    "legacyId": "u07_005",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "實際長求圖上距離",
    "batch": "課本原型題",
    "source": "課本 p.111 例題 3",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "兩鎮實際相距 6 公里。在比例尺 1：300000 的地圖上，這兩鎮之間的距離是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "2 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "20 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "18 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "0.5 公分",
        "trapCode": "U07_RATIO_FRACTION_INV"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "6 * 100000 / 300000",
      "expect": "2"
    },
    "explanation": {
      "examPurpose": "測驗學生能否先統一長度單位（公里換成公分），再用「實際距離 ÷ 比例尺分母」求得圖上距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先統一單位！1 公里 ＝ 100000 公分，把 6 公里換成公分："
        },
        {
          "type": "eq",
          "expr": "6 × 100000 ＝ 600000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：在地圖上畫出來會變小，所以用實際距離除以 300000："
        },
        {
          "type": "eq",
          "expr": "600000 ÷ 300000 ＝ 2",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "600000",
          "divisor": "300000",
          "mode": "exact",
          "note": "同消去 5 個 0 後，相當於 6 ÷ 3 ＝ 2"
        },
        {
          "type": "answer",
          "text": "答：2 公分。"
        }
      ],
      "insight": "比例尺 1：300000 可以先翻譯成「圖上 1 公分代表 3 公里」，6 ÷ 3 ＝ 2 公分馬上秒殺！",
      "distractorAnalysis": {
        "C": "乘除用反，誤拿 6 × 3 ＝ 18 當成圖上公分數。",
        "D": "把「除以 3」顛倒算成「3 ÷ 6 ＝ 0.5 公分」。",
        "B": "單位換算多補了一個 0，錯把 6 公里換成 6000000 公分，導致除以 300000 變成 20 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上距離 ＝ 實際距離（換成公分）÷ 比例尺分母",
        "小撇步：先把分母去掉 5 個 0 變成「1 公分代表幾公里」，再直接除"
      ],
      "conceptCompare": "求圖上距離一定要先把公里或公尺化為公分，或把比例尺分母先化為公里再相除，兩邊單位一致才不會差 10 倍、100 倍。",
      "examVariations": "若改為比例尺 1：150000（圖上 1 公分代表 1.5 公里），則 6 公里在地圖上會長 6 ÷ 1.5 ＝ 4 公分。"
    }
  },
  {
    "id": "U07-S3-B-006",
    "legacyId": "u07_006",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "線段比例尺判讀",
    "batch": "課本原型題",
    "source": "課本 p.112 例題 4",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "地圖上的線段比例尺標示「圖上 1 公分代表實際 200 公尺」。在地圖上量得一座水庫長度為 3.5 公分，這座水庫的實際長度是多少公尺？",
    "options": [
      {
        "key": "A",
        "text": "650 公尺",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "70 公尺",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "700 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "57 公尺",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "3.5 * 200",
      "expect": "700"
    },
    "explanation": {
      "examPurpose": "測驗學生能否直接判讀線段比例尺的「每公分對應實際長度」，並乘以小數長度求實際距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：看懂線段比例尺，圖上每 1 公分就代表實際的 200 公尺。3.5 公分就是 3.5 個 200 公尺。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(35, 32)\"><rect x=\"0\" y=\"20\" width=\"80\" height=\"12\" fill=\"#1e293b\"/><rect x=\"80\" y=\"20\" width=\"80\" height=\"12\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><rect x=\"160\" y=\"20\" width=\"80\" height=\"12\" fill=\"#1e293b\"/><rect x=\"240\" y=\"20\" width=\"40\" height=\"12\" fill=\"#e11d48\"/><line x1=\"0\" y1=\"12\" x2=\"0\" y2=\"38\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"80\" y1=\"12\" x2=\"80\" y2=\"38\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"160\" y1=\"12\" x2=\"160\" y2=\"38\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"240\" y1=\"12\" x2=\"240\" y2=\"38\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"280\" y1=\"12\" x2=\"280\" y2=\"38\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"0\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">0</text><text x=\"80\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">200</text><text x=\"160\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">400</text><text x=\"240\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">600</text><text x=\"288\" y=\"7\" font-size=\"12\" font-weight=\"800\" fill=\"#e11d48\" text-anchor=\"start\">700 公尺</text><text x=\"140\" y=\"56\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">共 3.5 公分 ＝ 3 × 200 ＋ 100 ＝ 700 公尺</text></g></svg>",
          "caption": "線段比例尺：3 個 1 公分是 600 公尺，再加上半格 0.5 公分（100 公尺），共 700 公尺"
        },
        {
          "type": "eq",
          "expr": "200 × 3.5 ＝ 700",
          "unit": "公尺"
        },
        {
          "type": "mul",
          "a": "200",
          "b": "3.5",
          "note": "整數乘一位小數直式驗算"
        },
        {
          "type": "answer",
          "text": "答：700 公尺。"
        }
      ],
      "insight": "線段比例尺已經幫你把單位寫好了（1 公分 ＝ 200 公尺），直接把圖上公分數乘 200 就是公尺！",
      "distractorAnalysis": {
        "A": "錯把 3.5 的小數部分 0.5 當成 50 公尺，算成 600 ＋ 50 ＝ 650 公尺。",
        "B": "乘法進位後小數點多消了一個 0，將 700 誤算成 70 公尺。",
        "D": "乘除搞反，誤用 200 ÷ 3.5 大約算出 57 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "線段比例尺求實際長 ＝ 圖上公分數 × 每公分代表的實際長度"
      ],
      "conceptCompare": "線段比例尺因為直接寫出「1 公分對應幾公尺／幾公里」，計算時不需要先換成「1：20000」再換算回來，直接用對應單位相乘最快。",
      "examVariations": "若題目最後問「是多少公里？」，則要把算出來的 700 公尺再除以 1000，得到 0.7 公里。"
    }
  },
  {
    "id": "U07-S3-B-007",
    "legacyId": "u07_007",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "縮小圖平面面積換算",
    "batch": "課本原型題",
    "source": "課本 p.114 練習園地",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "一座長方形操場實際長 100 公尺、寬 60 公尺。在比例尺 1/1000 的縮小圖上，這個操場的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "6000 平方公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "6 平方公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "C",
        "text": "60 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "16 平方公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(100 * 100 / 1000) * (60 * 100 / 1000)",
      "expect": "60"
    },
    "explanation": {
      "examPurpose": "測驗學生是否知道計算縮圖面積時，必須先將「實際長」與「實際寬」分別換算成圖上公分數，再把圖上的長和寬相乘。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把實際長寬化為公分，再除以 1000 算出地圖上的長與寬："
        },
        {
          "type": "eq",
          "expr": "100 × 100 ÷ 1000 ＝ 10000 ÷ 1000 ＝ 10",
          "unit": "公分（圖上長）"
        },
        {
          "type": "eq",
          "expr": "60 × 100 ÷ 1000 ＝ 6000 ÷ 1000 ＝ 6",
          "unit": "公分（圖上寬）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"25\" width=\"170\" height=\"102\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/><text x=\"105\" y=\"65\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">實際操場</text><text x=\"105\" y=\"88\" font-size=\"12\" fill=\"#047857\" text-anchor=\"middle\">100 公尺 × 60 公尺</text><text x=\"105\" y=\"110\" font-size=\"11\" fill=\"#475569\" text-anchor=\"middle\">10000 公分 × 6000 公分</text><path d=\"M 205 76 L 265 76\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"265,71 275,76 265,81\" fill=\"#f59e0b\"/><text x=\"238\" y=\"64\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">邊長 ÷ 1000</text><rect x=\"295\" y=\"46\" width=\"100\" height=\"60\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"345\" y=\"71\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">縮小圖：10 × 6</text><text x=\"345\" y=\"92\" font-size=\"13\" font-weight=\"800\" fill=\"#e11d48\" text-anchor=\"middle\">面積 60 平方公分</text></svg>",
          "caption": "先分別算出縮小圖上的長 10 公分與寬 6 公分，再乘出圖上面積"
        },
        {
          "type": "text",
          "text": "第 2 步：用圖上長 × 圖上寬算出圖上面積："
        },
        {
          "type": "eq",
          "expr": "10 × 6 ＝ 60",
          "unit": "平方公分"
        },
        {
          "type": "answer",
          "text": "答：60 平方公分。"
        }
      ],
      "insight": "遇到比例尺面積題，最穩的做法是「先分開求圖上長與圖上寬，最後才相乘」，絕對不會掉進平方陷阱！",
      "distractorAnalysis": {
        "A": "算出 100 × 60 ＝ 6000 平方公尺後直接當成 6000 平方公分，忘了先把公尺換算成公分再縮小。",
        "B": "錯拿實際面積 6000 除以邊長比例 1000 得 6（面積應該除兩次 1000，且 1 平方公尺 ＝ 10000 平方公分）。",
        "D": "算出圖上長 10 公分與寬 6 公分後，錯用加法 10 ＋ 6 ＝ 16 當作面積。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上面積 ＝（實際長 ÷ 分母）×（實際寬 ÷ 分母）",
        "面積比例尺 ＝ 長度比例尺的平方"
      ],
      "conceptCompare": "長度縮小 1/1000 倍時，面積其實是縮小 1/1000000（一百萬分之一）倍，因此不能拿實際面積直接除以 1000。",
      "examVariations": "若反過來給圖上面積 60 平方公分與比例尺 1：1000，求實際面積為幾平方公尺，可用「圖上 1 公分 ＝ 10 公尺」，先推 1 平方公分 ＝ 10 × 10 ＝ 100 平方公尺，60 × 100 ＝ 6000 平方公尺。"
    }
  },
  {
    "id": "U07-S1-X-008",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "對應頂點與對應邊",
    "batch": "課本原型題",
    "source": "課本 p.104 例題延伸",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "長方形乙（頂點依序為 ㄉ、ㄊ、ㄋ、ㄌ）是長方形甲（頂點依序為 ㄅ、ㄆ、ㄇ、ㄈ）的 3 倍放大圖，其中頂點 ㄉ、ㄊ、ㄋ、ㄌ 分別對應 ㄅ、ㄆ、ㄇ、ㄈ。已知甲圖的長邊 ㄅㄆ 是 5 公分、寬邊 ㄆㄇ 是 2 公分，且角ㄅ是 90 度，請問乙圖的對應邊「ㄊㄋ」長度和對應角「角ㄉ」角度各是多少？",
    "options": [
      {
        "key": "A",
        "text": "ㄊㄋ長 6 公分，角ㄉ是 90 度",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "ㄊㄋ長 6 公分，角ㄉ是 270 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "C",
        "text": "ㄊㄋ長 15 公分，角ㄉ是 90 度",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "D",
        "text": "ㄊㄋ長 10 公分，角ㄉ是 90 度",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "2 * 3",
      "expect": "6",
      "extraChecks": [
        {
          "expr": "5 * 3",
          "expect": "15"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否從對應頂點位置找出正確的對應邊與對應角，並運用「邊長乘倍數、角度不變」求值。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先對齊兩個長方形的對應點：ㄅ對ㄉ、ㄆ對ㄊ、ㄇ對ㄋ、ㄈ對ㄌ。所以「ㄊㄋ」的對應邊是寬邊「ㄆㄇ」，「角ㄉ」的對應角是「角ㄅ」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(28, 52)\"><rect x=\"0\" y=\"0\" width=\"80\" height=\"36\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"-10\" y=\"-5\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">ㄅ</text><text x=\"82\" y=\"-5\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">ㄆ</text><text x=\"82\" y=\"48\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">ㄇ</text><text x=\"-10\" y=\"48\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">ㄈ</text><text x=\"40\" y=\"-10\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">5 公分</text><text x=\"98\" y=\"22\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">2 公分</text><text x=\"40\" y=\"23\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">甲圖</text></g><path d=\"M 155 72 L 195 72\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"195,67 205,72 195,77\" fill=\"#f59e0b\"/><text x=\"177\" y=\"60\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">3 倍</text><g transform=\"translate(225, 28)\"><rect x=\"0\" y=\"0\" width=\"160\" height=\"72\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"72\" stroke=\"#059669\" stroke-width=\"4\"/><text x=\"-12\" y=\"-5\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">ㄉ</text><text x=\"162\" y=\"-5\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">ㄊ</text><text x=\"162\" y=\"85\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">ㄋ</text><text x=\"-12\" y=\"85\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">ㄌ</text><text x=\"80\" y=\"-10\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">15 公分</text><text x=\"174\" y=\"40\" font-size=\"13\" font-weight=\"800\" fill=\"#059669\">？</text><text x=\"80\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">乙圖（3 倍放大圖）</text></g><text x=\"230\" y=\"148\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">寬邊 ㄆㄇ 對應 ㄊㄋ（2 × 3 ＝ 6）；角ㄅ 對應 角ㄉ（維持 90°）</text></svg>",
          "caption": "頂點位置對應對齊後，就能清楚看出 ㄊㄋ 對應寬邊 ㄆㄇ，角ㄉ 對應 角ㄅ"
        },
        {
          "type": "eq",
          "expr": "2 × 3 ＝ 6",
          "unit": "公分（ㄊㄋ的長度）"
        },
        {
          "type": "text",
          "text": "第 2 步：對應角大小不變，所以角ㄉ ＝ 角ㄅ ＝ 90 度。"
        },
        {
          "type": "answer",
          "text": "答：ㄊㄋ長 6 公分，角ㄉ是 90 度。"
        }
      ],
      "insight": "找對應邊先把頂點順序一一對齊（ㄅㄆㄇㄈ ➔ ㄉㄊㄋㄌ），才不會把長邊跟寬邊看錯！",
      "distractorAnalysis": {
        "B": "對應邊算對了，但誤以為「角ㄉ」也要乘以 3 變成 270 度。",
        "D": "把倍數乘錯或誤算成 2 × 5 ＝ 10 公分。",
        "C": "看錯對應邊，把寬邊「ㄊㄋ」誤當成對應長邊「ㄅㄆ」去乘 3（5 × 3 ＝ 15 公分）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "對應點順序對齊 ➔ 對應邊 ＝ 原邊長 × 倍數",
        "對應角 ＝ 原角度（保持不變）"
      ],
      "conceptCompare": "長方形對角線與周長也屬於長度，都會放大 3 倍；只有四個角的角度維持 90 度不變。",
      "examVariations": "若圖形旋轉 90 度後擺放，一樣先找到標示度數或長短特徵的對應頂點，再算對應邊才不會出錯。"
    }
  },
  {
    "id": "U07-S1-X-009",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "鈍角三角形 1/2 縮小圖",
    "batch": "課本原型題",
    "source": "課本 p.107 例題延伸",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "方格紙上有一個等腰鈍角三角形甲，底邊長 6 格、高 4 格，頂角是 120 度。如果畫出甲圖的 1/2 倍縮小圖乙，乙圖的底邊、高和頂角各是多少？",
    "options": [
      {
        "key": "A",
        "text": "底 12 格、高 8 格、頂角 120 度",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "B",
        "text": "底 3 格、高 2 格、頂角 60 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "C",
        "text": "底 2 格、高 3 格、頂角 120 度",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "D",
        "text": "底 3 格、高 2 格、頂角 120 度",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "6 * (1/2)",
      "expect": "3",
      "extraChecks": [
        {
          "expr": "4 * (1/2)",
          "expect": "2"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在方格紙畫縮小圖時，能否將底和高都乘以 1/2，同時維持鈍角 120 度不變。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：畫 1/2 倍縮小圖，表示所有的長度（底邊長與高）都要乘以 1/2（也就是除以 2）："
        },
        {
          "type": "eq",
          "expr": "6 × 1/2 ＝ 3",
          "unit": "格（乙圖的底）"
        },
        {
          "type": "eq",
          "expr": "4 × 1/2 ＝ 2",
          "unit": "格（乙圖的高）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(30, 20)\"><rect x=\"0\" y=\"0\" width=\"144\" height=\"96\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"96\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"0\" x2=\"48\" y2=\"96\" stroke=\"#e2e8f0\"/><line x1=\"72\" y1=\"0\" x2=\"72\" y2=\"96\" stroke=\"#e2e8f0\"/><line x1=\"96\" y1=\"0\" x2=\"96\" y2=\"96\" stroke=\"#e2e8f0\"/><line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"96\" stroke=\"#e2e8f0\"/><line x1=\"0\" y1=\"24\" x2=\"144\" y2=\"24\" stroke=\"#e2e8f0\"/><line x1=\"0\" y1=\"48\" x2=\"144\" y2=\"48\" stroke=\"#e2e8f0\"/><line x1=\"0\" y1=\"72\" x2=\"144\" y2=\"72\" stroke=\"#e2e8f0\"/><polygon points=\"0,96 144,96 72,48\" fill=\"#dbeafe\" fill-opacity=\"0.75\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"72\" y1=\"48\" x2=\"72\" y2=\"96\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"72\" y=\"38\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">120°</text><text x=\"72\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">甲圖：底 6 格、高 4 格</text></g><path d=\"M 205 68 L 245 68\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"245,63 255,68 245,73\" fill=\"#f59e0b\"/><text x=\"228\" y=\"56\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">× 1/2</text><g transform=\"translate(285, 44)\"><rect x=\"0\" y=\"0\" width=\"72\" height=\"48\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"48\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"0\" x2=\"48\" y2=\"48\" stroke=\"#e2e8f0\"/><line x1=\"0\" y1=\"24\" x2=\"72\" y2=\"24\" stroke=\"#e2e8f0\"/><polygon points=\"0,48 72,48 36,24\" fill=\"#ffe4e6\" fill-opacity=\"0.85\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"36\" y1=\"24\" x2=\"36\" y2=\"48\" stroke=\"#be123c\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><text x=\"36\" y=\"16\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">仍是 120°</text><text x=\"36\" y=\"68\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">乙圖：底 3 格、高 2 格</text></g></svg>",
          "caption": "鈍角三角形縮小 1/2 倍後，底變 3 格、高變 2 格，頂角依然是 120°"
        },
        {
          "type": "text",
          "text": "第 2 步：縮小圖只會等比例變小，形狀不會改變，所以頂角依然是 120 度。"
        },
        {
          "type": "answer",
          "text": "答：底 3 格、高 2 格、頂角 120 度。"
        }
      ],
      "insight": "縮小圖看的是「乘以 1/2」，底和高一起除以 2，頂角和底角的大小通通不變！",
      "distractorAnalysis": {
        "A": "看反縮小與放大，把 6 和 4 誤乘以 2 變成底 12 格、高 8 格。",
        "B": "錯把角度也跟著乘以 1/2，將頂角 120 度縮小成 60 度。",
        "C": "底邊長和高寫反了，變成底 2 格、高 3 格。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1/2 倍縮小圖：底和高都乘以 1/2（即除以 2）",
        "縮小後所有內角的度數保持不變"
      ],
      "conceptCompare": "如果一個三角形的兩個底角都是 30 度、頂角是 120 度，不管縮小成 1/2 倍或 1/10 倍，三個角加起來永遠是 180 度，形狀完全一樣。",
      "examVariations": "段考常考「甲圖是乙圖的 2 倍放大圖，那麼乙圖就是甲圖的幾倍縮小圖？」，答案為 1/2 倍（互為倒數）。"
    }
  },
  {
    "id": "U07-S1-X-010",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "判斷是否為真放大縮小圖",
    "batch": "課本原型題",
    "source": "課本 p.107 隨堂思考延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "小美有一張長 6 公分、寬 4 公分的長方形卡片，她把長和寬「都各加上 2 公分」，畫出一個長 8 公分、寬 6 公分的新長方形。請問新長方形是不是原卡片的放大圖？",
    "options": [
      {
        "key": "A",
        "text": "是，因為四個角都是 90 度",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "B",
        "text": "是，因為長和寬都一起加了 2 公分",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "C",
        "text": "不是，因為長是原來的 4/3 倍、寬是 3/2 倍，倍數不同",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "是，因為新長方形的周長剛好變原來的 2 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "8 / 6",
      "expect": "4/3",
      "extraChecks": [
        {
          "expr": "6 / 4",
          "expect": "3/2"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「放大圖必須對應邊長同乘以相同的倍數」，而非「各加上相同的長度」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：放大圖的每條對應邊必須「乘以相同倍數」。檢查新長方形的長和寬各變為原來的幾倍："
        },
        {
          "type": "eq",
          "expr": "8 ÷ 6 ＝ 4/3",
          "unit": "倍（長的放大倍數）"
        },
        {
          "type": "eq",
          "expr": "6 ÷ 4 ＝ 3/2",
          "unit": "倍（寬的放大倍數）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 145\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"42\" width=\"90\" height=\"60\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"80\" y=\"33\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">原圖：長 6、寬 4</text><text x=\"80\" y=\"76\" font-size=\"12\" fill=\"#1e40af\" text-anchor=\"middle\">6：4 ＝ 3：2</text><rect x=\"185\" y=\"28\" width=\"120\" height=\"90\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><text x=\"245\" y=\"19\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">各加 2 公分：長 8、寬 6</text><text x=\"245\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\" text-anchor=\"middle\">8：6 ＝ 4：3（變胖了）</text><text x=\"330\" y=\"62\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">4/3 倍 ≠ 3/2 倍</text><text x=\"330\" y=\"88\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">形狀改變 ➔ 不是放大圖</text></svg>",
          "caption": "長跟寬同時加 2 公分會讓長方形比例改變（變比較接近正方形），並不是真正的放大圖"
        },
        {
          "type": "text",
          "text": "第 2 步：因為 4/3 倍不等於 3/2 倍，對應邊沒有等比例放大，所以不是原卡片的放大圖。"
        },
        {
          "type": "answer",
          "text": "答：不是，因為長是原來的 4/3 倍、寬是 3/2 倍，倍數不同。"
        }
      ],
      "insight": "放大圖的關鍵是「同乘幾倍」，不是「同加幾公分」！長寬同加相同公分數會讓形狀變胖或變扁。",
      "distractorAnalysis": {
        "A": "只檢查「對應角相等（都是 90 度）」，忘記放大圖還要檢查「對應邊長成相同倍數」。",
        "B": "把等比例放大（乘法）誤以為是等量增加（加法）。",
        "D": "原本周長 (6 ＋ 4) × 2 ＝ 20 公分，新周長 (8 ＋ 6) × 2 ＝ 28 公分，並沒有變 2 倍，且周長就算相同也不能保證相似。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "真放大／縮小圖兩大條件：① 對應角相等 ② 所有對應邊長倍數完全相同"
      ],
      "conceptCompare": "「對應角相等」和「對應邊成相同倍數」必須同時成立，缺一不可！長方形只滿足角都是 90 度，還要比長與寬的倍數是否相同。",
      "examVariations": "若要把長 6 公分、寬 4 公分的長方形真正放大，長加 2 公分變成 8 公分（4/3 倍），寬也要乘 4/3 倍變成 16/3 公分才算放大圖。"
    }
  },
  {
    "id": "U07-S2-X-011",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖與縮小圖",
    "category": "方格紙長方形 3 倍放大",
    "batch": "課本原型題",
    "source": "課本 p.108 例題 1 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "在每格邊長 1 公分的方格紙上，有一個長 3 格、寬 2 格的長方形甲。如果畫出甲圖的 3 倍放大圖乙，乙圖的周長是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "15 公分",
        "trapCode": "U07_GRID_COUNT_ERR"
      },
      {
        "key": "B",
        "text": "90 公分",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "C",
        "text": "54 公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "30 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(3 * 3 + 2 * 3) * 2",
      "expect": "30"
    },
    "explanation": {
      "examPurpose": "測驗學生在方格紙繪製 3 倍放大圖時，能否正確數出新長方形的長寬格數，再算出周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把原圖甲的長和寬格數分別乘以 3，算出乙圖的長與寬："
        },
        {
          "type": "eq",
          "expr": "3 × 3 ＝ 9",
          "unit": "格（乙圖的長 ＝ 9 公分）"
        },
        {
          "type": "eq",
          "expr": "2 × 3 ＝ 6",
          "unit": "格（乙圖的寬 ＝ 6 公分）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(25, 45)\"><rect x=\"0\" y=\"0\" width=\"54\" height=\"36\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"18\" y1=\"0\" x2=\"18\" y2=\"36\" stroke=\"#93c5fd\"/><line x1=\"36\" y1=\"0\" x2=\"36\" y2=\"36\" stroke=\"#93c5fd\"/><line x1=\"0\" y1=\"18\" x2=\"54\" y2=\"18\" stroke=\"#93c5fd\"/><text x=\"27\" y=\"-8\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">甲：3 × 2 格</text><text x=\"27\" y=\"54\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">周長 10 公分</text></g><path d=\"M 105 63 L 150 63\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"150,58 160,63 150,68\" fill=\"#f59e0b\"/><text x=\"128\" y=\"51\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">× 3 倍</text><g transform=\"translate(180, 18)\"><rect x=\"0\" y=\"0\" width=\"162\" height=\"108\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"54\" y1=\"0\" x2=\"54\" y2=\"108\" stroke=\"#fda4af\"/><line x1=\"108\" y1=\"0\" x2=\"108\" y2=\"108\" stroke=\"#fda4af\"/><line x1=\"0\" y1=\"36\" x2=\"162\" y2=\"36\" stroke=\"#fda4af\"/><line x1=\"0\" y1=\"72\" x2=\"162\" y2=\"72\" stroke=\"#fda4af\"/><text x=\"81\" y=\"60\" font-size=\"13\" font-weight=\"800\" fill=\"#be123c\" text-anchor=\"middle\">乙：長 9 格、寬 6 格</text><text x=\"81\" y=\"128\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">周長（9 ＋ 6）× 2 ＝ 30 公分</text></g></svg>",
          "caption": "原圖 3×2 格放大 3 倍變成 9×6 格，周長也剛好變成原本 10 公分的 3 倍"
        },
        {
          "type": "text",
          "text": "第 2 步：算出乙圖的周長："
        },
        {
          "type": "eq",
          "expr": "（9 ＋ 6）× 2 ＝ 30",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：30 公分。"
        }
      ],
      "insight": "先算出甲圖周長 （3 ＋ 2）× 2 ＝ 10 公分，再乘以放大倍數 3，一樣秒出 30 公分！",
      "distractorAnalysis": {
        "A": "只加了一條長和一條寬（9 ＋ 6 ＝ 15 公分），忘記長方形周長要乘以 2。",
        "C": "把 9 × 6 ＝ 54 算成「面積」，題目問的是周長。",
        "B": "把原本周長 10 公分誤乘了 3 × 3 ＝ 9 倍，算成 90 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大後格數 ＝ 原格數 × 倍數",
        "長方形周長 ＝（長 ＋ 寬）× 2"
      ],
      "conceptCompare": "方格紙作圖時只要先確定垂直與水平的格數乘上倍數，就能畫出正確尺寸，且周長必定也乘上相同倍數。",
      "examVariations": "若改問「乙圖的面積是多少平方公分？」，則要算 9 × 6 ＝ 54 平方公分（即原面積 6 的 9 倍）。"
    }
  },
  {
    "id": "U07-S2-X-012",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖與縮小圖",
    "category": "直角三角形 1/4 縮小",
    "batch": "課本原型題",
    "source": "課本 p.108 例題 2 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "在每格邊長 1 公分的方格紙上，有一個底 8 格、高 4 格的直角三角形丙。畫出丙圖的 1/4 倍縮小圖丁時，丁圖的底、高和面積各是多少？",
    "options": [
      {
        "key": "A",
        "text": "底 32 格、高 16 格、面積 256 平方公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "B",
        "text": "底 4 格、高 2 格、面積 4 平方公分",
        "trapCode": "U07_GRID_COUNT_ERR"
      },
      {
        "key": "C",
        "text": "底 2 格、高 4 格、面積 4 平方公分",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "D",
        "text": "底 2 格、高 1 格、面積 1 平方公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(8 / 4) * (4 / 4) / 2",
      "expect": "1",
      "extraChecks": [
        {
          "expr": "8 / 4",
          "expect": "2"
        },
        {
          "expr": "4 / 4",
          "expect": "1"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在方格紙畫直角三角形 1/4 倍縮小圖時，能否同步將底與高都除以 4，並算出縮小後的面積。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：畫 1/4 倍縮小圖，將底與高都乘以 1/4（除以 4）："
        },
        {
          "type": "eq",
          "expr": "8 × 1/4 ＝ 2",
          "unit": "格（丁圖的底）"
        },
        {
          "type": "eq",
          "expr": "4 × 1/4 ＝ 1",
          "unit": "格（丁圖的高）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(25, 22)\"><rect x=\"0\" y=\"0\" width=\"160\" height=\"80\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"80\" stroke=\"#e2e8f0\"/><line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"80\" stroke=\"#e2e8f0\"/><line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"80\" stroke=\"#e2e8f0\"/><line x1=\"0\" y1=\"20\" x2=\"160\" y2=\"20\" stroke=\"#e2e8f0\"/><line x1=\"0\" y1=\"40\" x2=\"160\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"0\" y1=\"60\" x2=\"160\" y2=\"60\" stroke=\"#e2e8f0\"/><polygon points=\"0,80 160,80 0,0\" fill=\"#dbeafe\" fill-opacity=\"0.8\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"80\" y=\"100\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">丙圖：底 8 格、高 4 格</text><text x=\"80\" y=\"118\" font-size=\"11\" fill=\"#475569\" text-anchor=\"middle\">原面積 8 × 4 ÷ 2 ＝ 16</text></g><path d=\"M 205 62 L 245 62\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"245,57 255,62 245,67\" fill=\"#f59e0b\"/><text x=\"228\" y=\"50\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">× 1/4</text><g transform=\"translate(272, 62)\"><rect x=\"0\" y=\"0\" width=\"40\" height=\"20\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"20\" y1=\"0\" x2=\"20\" y2=\"20\" stroke=\"#e2e8f0\"/><polygon points=\"0,20 40,20 0,0\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><text x=\"48\" y=\"14\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">丁圖：底 2 格、高 1 格</text><text x=\"48\" y=\"38\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">面積 2 × 1 ÷ 2 ＝ 1</text></g></svg>",
          "caption": "直角三角形縮小 1/4 倍，底變 2 格、高變 1 格，面積則變成原來的 1/16"
        },
        {
          "type": "text",
          "text": "第 2 步：算出丁圖面積："
        },
        {
          "type": "eq",
          "expr": "2 × 1 ÷ 2 ＝ 1",
          "unit": "平方公分"
        },
        {
          "type": "answer",
          "text": "答：底 2 格、高 1 格、面積 1 平方公分。"
        }
      ],
      "insight": "縮小為 1/4 倍，底和高都要除以 4；而且原面積 16 ÷ (4 × 4) ＝ 1 平方公分，結果完全吻合！",
      "distractorAnalysis": {
        "B": "錯把 1/4 倍當成 1/2 倍，只把底和高除以 2，算成底 4 格、高 2 格。",
        "C": "只把底縮小為 1/4，忘記把高也一起縮小為 1/4，變成扁矮形狀改變的三角形。",
        "A": "把「1/4 倍縮小圖」看反成「4 倍放大圖」，誤乘以 4。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1/4 倍縮小圖：每個邊長和高都乘以 1/4",
        "直角三角形面積 ＝ 底 × 高 ÷ 2"
      ],
      "conceptCompare": "畫直角三角形縮小圖最容易，只要先畫出縮小的垂直兩條直角邊（底與高），最後把斜邊連起來就完成了。",
      "examVariations": "段考常考「1/4 倍縮小圖的面積是原圖面積的幾分之幾？」，答案為 1/4 × 1/4 ＝ 1/16。"
    }
  },
  {
    "id": "U07-S2-X-013",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖與縮小圖",
    "category": "扇形放大半徑與圓心角",
    "batch": "課本原型題",
    "source": "課本 p.109 思考帽延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "有一個半徑 4 公分、圓心角 60 度的扇形。將它畫成 3 倍放大圖後，新扇形的半徑和圓心角各是多少？",
    "options": [
      {
        "key": "A",
        "text": "半徑 12 公分，圓心角 60 度",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "半徑 36 公分，圓心角 60 度",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "C",
        "text": "半徑 12 公分，圓心角 180 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "D",
        "text": "半徑 12 公分，圓心角 20 度",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "4 * 3",
      "expect": "12",
      "extraChecks": [
        {
          "expr": "60",
          "expect": "60"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生繪製扇形放大圖時，是否清楚「半徑與弧長變 3 倍，但圓心角維持不變」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：扇形的半徑是長度，放大 3 倍就要乘以 3："
        },
        {
          "type": "eq",
          "expr": "4 × 3 ＝ 12",
          "unit": "公分（新扇形半徑）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(45, 115)\"><path d=\"M 0 0 L 45 0 A 45 45 0 0 0 22.5 -38.97 Z\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"22\" y=\"18\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">半徑 4</text><text x=\"32\" y=\"-8\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">60°</text></g><path d=\"M 125 90 L 165 90\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"165,85 175,90 165,95\" fill=\"#f59e0b\"/><text x=\"147\" y=\"78\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">放大 3 倍</text><g transform=\"translate(190, 132)\"><path d=\"M 0 0 L 110 0 A 110 110 0 0 0 55 -95.26 Z\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><path d=\"M 32 0 A 32 32 0 0 0 16 -27.71\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"55\" y=\"18\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">半徑 4 × 3 ＝ 12</text><text x=\"46\" y=\"-12\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">仍是 60°</text></g><text x=\"342\" y=\"62\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">半徑弧長：變 3 倍</text><text x=\"342\" y=\"88\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">圓心角：維持 60°</text></svg>",
          "caption": "扇形放大 3 倍時，半徑由 4 公分變成 12 公分，圓心角張開角度依然是 60°"
        },
        {
          "type": "text",
          "text": "第 2 步：圓心角是角度，圖形放大或縮小後，對應角大小完全不變，所以圓心角仍是 60 度。"
        },
        {
          "type": "answer",
          "text": "答：半徑 12 公分，圓心角 60 度。"
        }
      ],
      "insight": "畫扇形放大圖的 2 步驟：先用量角器畫出「一樣大的圓心角」，再以圓規取「放大後的半徑」畫弧！",
      "distractorAnalysis": {
        "B": "錯把面積的平方倍（3 × 3 ＝ 9 倍）套用到半徑上，算出 4 × 9 ＝ 36 公分。",
        "D": "誤以為放大圖的角度要反過來除以 3，算成 20 度。",
        "C": "誤把圓心角 60 度也一起乘以 3，錯算成 180 度（會變成半圓，形狀就變了）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形放大 3 倍：半徑變 3 倍、弧長變 3 倍、周長變 3 倍",
        "圓心角保持不變；扇形面積變 3 × 3 ＝ 9 倍"
      ],
      "conceptCompare": "就像比薩切出來的同一塊 1/6 圓（60 度），大比薩跟小比薩的角度都是 60 度，只有半徑與餅皮弧長變長。",
      "examVariations": "段考常改問「這個新扇形的面積是原扇形的幾倍？」，因為半徑變 3 倍、圓心角不變，面積就是 3 × 3 ＝ 9 倍。"
    }
  },
  {
    "id": "U07-S3-X-014",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "塗鴉牆實物與縮小圖比值",
    "batch": "課本原型題",
    "source": "課本 p.110 例題 1 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "學校有一面長 600 公分、寬 400 公分的大型彩繪牆，小平在電腦上做出長 6 公分、寬 4 公分的縮小圖。這張縮小圖的比例尺用「比」和「比值」表示各是多少？",
    "options": [
      {
        "key": "A",
        "text": "100：1，比值是 100",
        "trapCode": "U07_RATIO_FRACTION_INV"
      },
      {
        "key": "B",
        "text": "1：10，比值是 1/10",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "1：100，比值是 1/100",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1：1000，比值是 1/1000",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "6 / 600",
      "expect": "1/100"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握比例尺定義「縮小圖上長度：實際長度」，並能正確約分成最簡整數比與比值。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺永遠是「圖上長度」在前，「實際長度」在後（兩邊單位已經都是公分）："
        },
        {
          "type": "eq",
          "expr": "6：600 ＝ 1：100",
          "unit": "（用比表示）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"25\" width=\"135\" height=\"90\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/><text x=\"92\" y=\"64\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">實物彩繪牆</text><text x=\"92\" y=\"84\" font-size=\"12\" fill=\"#047857\" text-anchor=\"middle\">600 公分 × 400 公分</text><path d=\"M 178 70 L 238 70\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"238,65 248,70 238,75\" fill=\"#f59e0b\"/><text x=\"211\" y=\"58\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">縮為 1/100</text><rect x=\"265\" y=\"52\" width=\"54\" height=\"36\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"292\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">縮小圖：6 × 4</text><text x=\"390\" y=\"62\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">比：1：100</text><text x=\"390\" y=\"88\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">比值：1/100</text></svg>",
          "caption": "圖上 6 公分對應實際 600 公分，約分後比例尺為 1：100（比值 1/100）"
        },
        {
          "type": "text",
          "text": "第 2 步：再寫出比值，用圖上長度除以實際長度："
        },
        {
          "type": "eq",
          "expr": "6 ÷ 600 ＝ 1/100",
          "unit": "（用比值表示）"
        },
        {
          "type": "answer",
          "text": "答：1：100，比值是 1/100。"
        }
      ],
      "insight": "比例尺順序口訣：「圖上在前、實際在後」；縮小圖的比例尺比值一定小於 1！",
      "distractorAnalysis": {
        "A": "把順序寫反成「實際長度：圖上長度」，變成放大 100 倍的比例尺 100：1。",
        "B": "約分時少算了一個 0，誤把 6：600 約成 1：10。",
        "D": "約分時多補了一個 0，錯算成 1：1000。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上長度：實際長度（先統一單位再約分）",
        "比例尺比值 ＝ 圖上長度 ÷ 實際長度"
      ],
      "conceptCompare": "縮小圖的比例尺前項為 1、後項大於 1（如 1：100）；放大圖（例如手錶小零件設計圖）則前項大於 1（如 10：1）。",
      "examVariations": "若彩繪牆上的題目改用寬來算 4 ÷ 400 ＝ 1/100，同一張縮圖的長寬比例尺必然完全一樣。"
    }
  },
  {
    "id": "U07-S3-X-015",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "老街與小溪地圖雙題",
    "batch": "課本原型題",
    "source": "課本 p.111 例題 2 延伸",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "皮皮畫了一張老街地圖，實際長 1500 公尺的老街在地圖上畫了 25 公分。用同樣的比例尺，緊鄰老街旁一條實際長 1800 公尺的小溪，在地圖上應該畫幾公分？",
    "options": [
      {
        "key": "A",
        "text": "36 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "3000 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "60 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "30 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "1800 * 25 / 1500",
      "expect": "30"
    },
    "explanation": {
      "examPurpose": "測驗學生先由一組已知長度求比例尺（或圖上 1 公分代表幾公尺），再套用到另一段實際距離求圖上長度的兩步解題能力。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出這張地圖上「1 公分」代表實際多少公尺："
        },
        {
          "type": "eq",
          "expr": "1500 ÷ 25 ＝ 60",
          "unit": "公尺（即比例尺 1：6000）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"25\" width=\"165\" height=\"22\" rx=\"4\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"107\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">老街：圖上 25 公分</text><text x=\"200\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">➔ 1500 公尺（每公分 60 公尺）</text><rect x=\"25\" y=\"75\" width=\"195\" height=\"22\" rx=\"4\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"122\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\" text-anchor=\"middle\">小溪：圖上 ？ 公分</text><text x=\"232\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">➔ 實際 1800 公尺</text><text x=\"230\" y=\"124\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">1800 ÷ 60 ＝ 30 公分</text></svg>",
          "caption": "先求出圖上 1 公分代表 60 公尺，再用 1800 ÷ 60 求出小溪的圖上長度"
        },
        {
          "type": "text",
          "text": "第 2 步：小溪實際長 1800 公尺，除以每公分代表的 60 公尺："
        },
        {
          "type": "eq",
          "expr": "1800 ÷ 60 ＝ 30",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：30 公分。"
        }
      ],
      "insight": "先算出「圖上 1 公分 ＝ 實際 60 公尺」作為橋樑，不用特地換算成十幾萬公分，就能輕鬆又不易錯！",
      "distractorAnalysis": {
        "B": "把 1800 公尺乘以 100 換成 180000 公分後，誤除成 60 而不是 6000，算出 3000 公分。",
        "C": "只算到第一步「1500 ÷ 25 ＝ 60」，就把 60 直接當成最後答案，忘了再去算小溪的 1800 公尺。",
        "A": "除法計算 1500 ÷ 25 錯算成 50 公尺，接著 1800 ÷ 50 算出 36 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上 1 公分代表的實際長 ＝ 已知實際長 ÷ 已知圖上公分",
        "另一段圖上長度 ＝ 另一段實際長 ÷（1 公分代表長）"
      ],
      "conceptCompare": "同一張地圖的比例尺固定，圖上長度與實際長度成正比例：小溪長 1800 公尺是老街 1500 公尺的 1.2 倍，圖上長 25 × 1.2 ＝ 30 公分也會一樣大。",
      "examVariations": "若題目多問「這張地圖的比例尺用比怎麼表示？」，則需化為同單位：25 公分：150000 公分 ＝ 1：6000。"
    }
  },
  {
    "id": "U07-S3-X-016",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "圖示比例尺轉比與比值",
    "batch": "課本原型題",
    "source": "課本 p.112~115 圖示比例尺延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "一張登山步道的導覽圖附有線段比例尺：共有 3 小格（每小格在圖上剛好長 1 公分，全長 3 公分），刻度依序標示 0、50、100、150 公尺。這張導覽圖的比例尺用「比」和「比值」表示分別是多少？",
    "options": [
      {
        "key": "A",
        "text": "1：5000，比值是 1/5000",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "1：15000，比值是 1/15000",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "1：50，比值是 1/50",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "5000：1，比值是 5000",
        "trapCode": "U07_RATIO_FRACTION_INV"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "1 / (50 * 100)",
      "expect": "1/5000"
    },
    "explanation": {
      "examPurpose": "測驗學生能否分辨線段比例尺「一格 1 公分」與「全長 3 公分」的差別，並正確換算公尺為公分寫出比與比值。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察刻度，全長 3 公分代表 150 公尺，所以每 1 小格（圖上 1 公分）代表實際 50 公尺。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(45, 32)\"><rect x=\"0\" y=\"20\" width=\"100\" height=\"14\" fill=\"#1e293b\"/><rect x=\"100\" y=\"20\" width=\"100\" height=\"14\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><rect x=\"200\" y=\"20\" width=\"100\" height=\"14\" fill=\"#1e293b\"/><line x1=\"0\" y1=\"12\" x2=\"0\" y2=\"40\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"100\" y1=\"12\" x2=\"100\" y2=\"40\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"200\" y1=\"12\" x2=\"200\" y2=\"40\" stroke=\"#1e293b\" stroke-width=\"2\"/><line x1=\"300\" y1=\"12\" x2=\"300\" y2=\"40\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"0\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">0</text><text x=\"100\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">50</text><text x=\"200\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">100</text><text x=\"305\" y=\"7\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"start\">150 公尺</text><path d=\"M 0 48 L 0 56 L 100 56 L 100 48\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"50\" y=\"74\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">1 公分 ＝ 50 公尺</text><text x=\"245\" y=\"74\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">50 公尺 ＝ 5000 公分 ➔ 1：5000</text></g></svg>",
          "caption": "只看第一格 1 公分對應 50 公尺（5000 公分），或用全長 3 公分：15000 公分再約分"
        },
        {
          "type": "text",
          "text": "第 2 步：把 50 公尺換成 5000 公分，再寫出比例尺："
        },
        {
          "type": "eq",
          "expr": "1：5000",
          "unit": "（比值 ＝ 1/5000）"
        },
        {
          "type": "answer",
          "text": "答：1：5000，比值是 1/5000。"
        }
      ],
      "insight": "判讀多格線段比例尺的鐵則：不是看最右邊的總數字，而是先看「1 公分對應多少」或是「總公分：總公尺再約分」！",
      "distractorAnalysis": {
        "C": "沒把 50 公尺換算成公分就寫比例尺，兩邊單位不統一（1 公分寫成對 50 公尺）。",
        "D": "把實際長度放前面、圖上長度放後面，把比和比值寫顛倒了。",
        "B": "誤把比例尺最右端標示的 150 公尺當成「1 公分代表 150 公尺」，忘了全長其實有 3 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖示轉數字比例尺 ＝ 全長公分數：最末刻度實際長度（化為公分）再約分"
      ],
      "conceptCompare": "不管選「第 1 格 1 公分對 5000 公分」還是「全長 3 公分對 15000 公分」，約分後的比都是 1：5000！",
      "examVariations": "部分段考題的線段比例尺「1 格其實是 2 公分」，考前一定要先看題目說明或確認每格幾公分。"
    }
  },
  {
    "id": "U07-S3-X-017",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "國道公里轉地圖公分",
    "batch": "課本原型題",
    "source": "課本 p.115 應用題 1 延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "爸爸開車從基隆出發走南北高速公路到高雄，這條道路全長大約 374.5 公里。如果畫在一張比例尺是 1：3500000 的臺灣交通全圖上，這段路線在地圖上的長度大約是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "107 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "1.07 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "0.09 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "10.7 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "374.5 * 100000 / 3500000",
      "expect": "10.7"
    },
    "explanation": {
      "examPurpose": "測驗學生在多位大數比例尺下，先進行「公里轉公分」或「分母轉公里」的單位簡化，再完成含小數的除法運算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把比例尺 1：3500000 換成好算的公里概念。因為 1 公里 ＝ 100000 公分，去掉 5 個 0 後，地圖上 1 公分就代表實際 35 公里！"
        },
        {
          "type": "eq",
          "expr": "3500000 ÷ 100000 ＝ 35",
          "unit": "公里（圖上 1 公分代表 35 公里）"
        },
        {
          "type": "text",
          "text": "第 2 步：用全長 374.5 公里除以 35 公里，算出地圖上的公分數："
        },
        {
          "type": "eq",
          "expr": "374.5 ÷ 35 ＝ 10.7",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "374.5",
          "divisor": "35",
          "mode": "exact",
          "note": "先消去比例尺 5 個 0 變成 374.5 ÷ 35，直接做小數除以整數直式"
        },
        {
          "type": "answer",
          "text": "答：大約 10.7 公分。"
        }
      ],
      "insight": "遇到 1：3500000 這種好多 0 的比例尺，先消去 5 個 0 變成「1 公分 ＝ 35 公里」，直式數字立刻變小超好算！",
      "distractorAnalysis": {
        "A": "小數點對齊或 0 的個數數錯，把 374.5 ÷ 35 算大 10 倍變成 107 公分。",
        "B": "直式商數對齊時忘記十位補 0（把 10.7 誤寫成 1.7 或 1.07 公分）。",
        "C": "把除數跟被除數顛倒了，誤算成 35 ÷ 374.5。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "先去 5 個 0：比例尺後項 公分 ÷ 100000 ＝ 圖上 1 公分代表的公里數",
        "圖上公分 ＝ 實際公里 ÷（1 公分代表公里數）"
      ],
      "conceptCompare": "也可以先把 374.5 公里 × 100000 ＝ 37450000 公分，再算 37450000 ÷ 3500000 ＝ 10.7 公分，兩者答案完全一致。",
      "examVariations": "若改放在比例尺 1：5000000（圖上 1 公分 ＝ 50 公里）的地圖上，則圖上長度變為 374.5 ÷ 50 ＝ 7.49 公分。"
    }
  },
  {
    "id": "U07-S3-X-018",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "地圖公分轉實際公里",
    "batch": "課本原型題",
    "source": "課本 p.115 應用題 2 延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "小安拿著一張比例尺為 1/400000 的桃園旅遊摺頁地圖，用直尺量出連絡道路的圖上長度是 5.1 公分。請問這條道路的實際長度是多少公里？",
    "options": [
      {
        "key": "A",
        "text": "204 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "20.4 公里",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "24.4 公里",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1.275 公里",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "5.1 * 400000 / 100000",
      "expect": "20.4"
    },
    "explanation": {
      "examPurpose": "測驗學生由「分數形式比例尺」與「帶小數的圖上公分數」，求出實際公里數的能力。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1/400000 表示圖上 1 公分代表實際 400000 公分。先換成公里比較好乘："
        },
        {
          "type": "eq",
          "expr": "400000 ÷ 100000 ＝ 4",
          "unit": "公里（圖上 1 公分代表 4 公里）"
        },
        {
          "type": "text",
          "text": "第 2 步：地圖上量得 5.1 公分，就代表有 5.1 個 4 公里："
        },
        {
          "type": "eq",
          "expr": "5.1 × 4 ＝ 20.4",
          "unit": "公里"
        },
        {
          "type": "mul",
          "a": "5.1",
          "b": "4",
          "note": "一位小數乘整數直式驗算"
        },
        {
          "type": "answer",
          "text": "答：20.4 公里。"
        }
      ],
      "insight": "比例尺先消去 5 個 0 變成「1 公分 ＝ 4 公里」，再算 5.1 × 4 ＝ 20.4 公里，又快又不易算錯小數點！",
      "distractorAnalysis": {
        "A": "算出 5.1 × 400000 ＝ 2040000 公分後，換成公里時少去掉一個 0（誤除以 10000），錯答成 204 公里。",
        "C": "小數乘法計算失誤，把 5.1 × 4 誤算成 24.4 公里。",
        "D": "求實際距離應該放大（乘），卻錯用了除法 5.1 ÷ 4 ＝ 1.275 公里。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際公里數 ＝ 圖上公分數 ×（分母 ÷ 100000）"
      ],
      "conceptCompare": "無論比例尺寫成「1：400000」或「1/400000」，代表的倍率完全相同，都是實際長度為圖上的 400000 倍。",
      "examVariations": "若題目單位改問「是多少公尺？」，只要把 20.4 公里乘以 1000，答案就是 20400 公尺。"
    }
  },
  {
    "id": "U07-RV-X-019",
    "legacyId": null,
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "同面積圖紙不同比例尺比較",
    "batch": "課本原型題",
    "source": "課本 p.111 素養評量延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "甲校和乙校的校園形狀相似，且兩校的校園平面圖都剛好畫滿在「一樣長、一樣寬」的圖紙上。甲校平面圖的比例尺是 1/12000，乙校平面圖的比例尺是 1：8000。請問哪一間學校的實際校園面積比較大？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲校圖上 1 公分（1/12000）",
          "units": 1.2,
          "role": "base"
        },
        {
          "label": "乙校圖上 1 公分（1：8000）",
          "units": 0.8,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "甲校每公分代表 120 公尺，多乙校 40 公尺"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "乙校比較大，因為 1/8000 大於 1/12000",
        "trapCode": "U07_DUAL_MAP_RATIO_ERR"
      },
      {
        "key": "B",
        "text": "兩校一樣大，因為兩張圖紙一樣大",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "C",
        "text": "乙校比較大，因為圖上 1 公分代表 800 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "甲校比較大，因為圖上 1 公分代表 120 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "12000 / 100",
      "expect": "120",
      "extraChecks": [
        {
          "expr": "8000 / 100",
          "expect": "80"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解在「圖紙大小相同」的前提下，比例尺縮得越多（分母越大），實際代表的校園面積反而越大。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：分別算出兩張地圖上「1 公分」代表實際的多少公尺："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "12000 ÷ 100 ＝ 120",
          "unit": "公尺（甲校圖上 1 公分代表）"
        },
        {
          "type": "eq",
          "expr": "8000 ÷ 100 ＝ 80",
          "unit": "公尺（乙校圖上 1 公分代表）"
        },
        {
          "type": "text",
          "text": "第 2 步：因為兩張平面圖紙長寬相同，甲校每 1 公分裝進了 120 公尺（比乙校 80 公尺更長），所以甲校實際邊長比較長、實際校園面積比較大。"
        },
        {
          "type": "answer",
          "text": "答：甲校比較大，因為圖上 1 公分代表 120 公尺。"
        }
      ],
      "insight": "圖紙大小一樣時，比例尺比值越「小」（分母越大的 1/12000），代表縮得越厲害，所以塞進去的實際地盤越「大」！",
      "figureNote": "線段圖比較兩張平面圖「同樣 1 公分」所能容納的實際長度：甲校可容納 120 公尺，明顯比乙校的 80 公尺長。",
      "distractorAnalysis": {
        "A": "看見分數 1/8000 比 1/12000 大，就直覺誤以為乙校實際比較大；其實 1/8000 縮得較少，同一張紙能畫下的實際範圍反而較小。",
        "B": "忽略兩張平面圖的比例尺不同，只看圖紙一樣大就誤以為校園一樣大。",
        "C": "不但單位換算錯誤把 8000 公分算成 800 公尺，也搞反了比較方向。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖紙大小相同時：比例尺分母越大（縮越小），實際範圍越大",
        "實際物體相同時：比例尺比值越大（分母越小），畫出來的圖越大"
      ],
      "conceptCompare": "「相同圖紙比實際誰大」跟「相同實物比誰的圖大」剛好相反！考前要先分清楚是「圖紙一樣大」還是「實際距離一樣長」。",
      "examVariations": "段考常改考「同一張臺灣地圖上，甲圖 1：500000 和乙圖 1：1000000，哪一張畫出的臺灣比較大張？」，答案是 1：500000（縮得比較少）畫得比較大。"
    }
  },
  {
    "id": "U07-RV-X-020",
    "legacyId": null,
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "鳶形放大與縮小互推",
    "batch": "課本原型題",
    "source": "課本 p.114 練習園地 1 延伸",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "下圖中，乙圖（頂點ㄉ、ㄊ、ㄋ、ㄌ）是甲圖（頂點ㄅ、ㄆ、ㄇ、ㄈ）的 3 倍放大圖，兩個都是對稱鳶形。已知乙圖的對角線「ㄉㄋ」長 45 公分，請問甲圖是乙圖的幾倍縮小圖？甲圖對應的對角線「ㄅㄇ」長多少公分？",
    "options": [
      {
        "key": "A",
        "text": "1/3 倍縮小圖，ㄅㄇ長 135 公分",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "B",
        "text": "3 倍縮小圖，ㄅㄇ長 15 公分",
        "trapCode": "U07_RATIO_FRACTION_INV"
      },
      {
        "key": "C",
        "text": "1/3 倍縮小圖，ㄅㄇ長 15 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1/9 倍縮小圖，ㄅㄇ長 5 公分",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "45 / 3",
      "expect": "15",
      "extraChecks": [
        {
          "expr": "1 / 3",
          "expect": "1/3"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解放大倍數與縮小倍數互為倒數，並知道圖形內的對角線也同樣依比例縮放。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：乙圖是甲圖的 3 倍放大圖，反過來從乙圖看甲圖，所有長度都要變成原來的 1/3，所以甲圖是乙圖的 1/3 倍縮小圖。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(55, 58)\"><polygon points=\"30,0 56,28 30,80 4,28\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"80\" stroke=\"#059669\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><text x=\"30\" y=\"-8\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">ㄅ</text><text x=\"66\" y=\"32\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">ㄆ</text><text x=\"30\" y=\"96\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">ㄇ</text><text x=\"-8\" y=\"32\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">ㄈ</text><text x=\"30\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">甲圖（ㄅㄇ＝？）</text></g><path d=\"M 155 92 L 210 92\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"155,87 145,92 155,97\" fill=\"#f59e0b\"/><text x=\"180\" y=\"80\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">縮小 1/3 倍</text><g transform=\"translate(245, 22)\"><polygon points=\"60,0 112,56 60,126 8,56\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"126\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><text x=\"60\" y=\"-6\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">ㄉ</text><text x=\"122\" y=\"60\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">ㄊ</text><text x=\"60\" y=\"142\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">ㄋ</text><text x=\"-6\" y=\"60\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">ㄌ</text><text x=\"86\" y=\"72\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">ㄉㄋ＝45</text></g><text x=\"390\" y=\"75\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">內部對角線</text><text x=\"390\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">也是 1/3 倍</text></svg>",
          "caption": "對稱鳶形的對角線同樣符合縮放倍數：45 公分縮小為 1/3 倍就是 15 公分"
        },
        {
          "type": "text",
          "text": "第 2 步：圖形內部的對角線也是長度，同樣縮小為 1/3 倍："
        },
        {
          "type": "eq",
          "expr": "45 × 1/3 ＝ 15",
          "unit": "公分（對角線ㄅㄇ）"
        },
        {
          "type": "answer",
          "text": "答：1/3 倍縮小圖，ㄅㄇ長 15 公分。"
        }
      ],
      "insight": "只要屬於圖形上的長度（邊長、周長、高、對角線），全部都用同一個縮放倍數去乘！",
      "distractorAnalysis": {
        "B": "說「縮小圖」時倍數必須用小於 1 的分數 1/3，不能寫成「3 倍縮小圖」。",
        "D": "錯把面積縮小倍數 1/9 倍拿來當長度縮小倍數，算成 45 ÷ 9 ＝ 5 公分。",
        "A": "把 45 公分錯乘以 3 變成 135 公分，沒分清楚甲圖比乙圖小。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "乙是甲的 3 倍放大圖 ⇔ 甲是乙的 1/3 倍縮小圖",
        "對應對角線長 ＝ 對應原對角線 × 縮放倍數"
      ],
      "conceptCompare": "倍數用語必須和「放大／縮小」配合：大圖對小圖稱「3 倍放大圖」，小圖對大圖稱「1/3 倍縮小圖」。",
      "examVariations": "若題目先給甲圖的邊長 24 公分，反問乙圖對應邊長，則算 24 × 3 ＝ 72 公分。"
    }
  },
  {
    "id": "U07-S1-O-021",
    "legacyId": "u07_101",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "面積倍數反求周長",
    "batch": "奧數天梯",
    "source": "Unit07 AI_SPEC level_2（面積平方倍）",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "甲圖是乙圖的放大圖，已知甲圖的面積是乙圖面積的 16 倍。請問甲圖的周長是乙圖周長的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "16 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "4 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "8 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "D",
        "text": "2 倍",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "16 / 4",
      "expect": "4",
      "extraChecks": [
        {
          "expr": "4 * 4",
          "expect": "16"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否逆推平方關係：由面積倍數（16 倍）反推出邊長與周長的放大倍數（4 倍）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：面積放大倍數 ＝ 邊長放大倍數 × 邊長放大倍數。想一想，哪一個數自己乘自己等於 16？"
        },
        {
          "type": "eq",
          "expr": "4 × 4 ＝ 16",
          "unit": "（邊長放大為 4 倍）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"100\" width=\"28\" height=\"28\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"49\" y=\"118\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">1</text><text x=\"49\" y=\"144\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">乙圖</text><path d=\"M 85 110 L 130 110\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"130,105 140,110 130,115\" fill=\"#f59e0b\"/><text x=\"108\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">邊長 × 4</text><g transform=\"translate(160, 18)\"><rect x=\"0\" y=\"0\" width=\"112\" height=\"112\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"28\" y1=\"0\" x2=\"28\" y2=\"112\" stroke=\"#fda4af\"/><line x1=\"56\" y1=\"0\" x2=\"56\" y2=\"112\" stroke=\"#fda4af\"/><line x1=\"84\" y1=\"0\" x2=\"84\" y2=\"112\" stroke=\"#fda4af\"/><line x1=\"0\" y1=\"28\" x2=\"112\" y2=\"28\" stroke=\"#fda4af\"/><line x1=\"0\" y1=\"56\" x2=\"112\" y2=\"56\" stroke=\"#fda4af\"/><line x1=\"0\" y1=\"84\" x2=\"112\" y2=\"84\" stroke=\"#fda4af\"/><text x=\"56\" y=\"62\" font-size=\"13\" font-weight=\"800\" fill=\"#be123c\" text-anchor=\"middle\">4 × 4 ＝ 16 格</text><text x=\"56\" y=\"130\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">甲圖（邊長與周長皆 4 倍）</text></g><text x=\"295\" y=\"60\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">面積 16 倍 ＝ 4 × 4</text><text x=\"295\" y=\"88\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">周長是長度 ➔ 4 倍</text></svg>",
          "caption": "4×4 方格共有 16 格，代表面積 16 倍時，邊長和周長都是原來的 4 倍"
        },
        {
          "type": "text",
          "text": "第 2 步：周長是所有邊長相加，所以周長的放大倍數跟邊長完全一樣，都是 4 倍。"
        },
        {
          "type": "answer",
          "text": "答：4 倍。"
        }
      ],
      "insight": "維度反推術：看到面積放大 16 倍，先找 4 × 4 ＝ 16，就知道邊長和周長只放大 4 倍！",
      "distractorAnalysis": {
        "A": "誤以為面積放大幾倍，周長就跟著放大幾倍，沒分清楚一維長度與二維面積。",
        "C": "看到面積 16 倍就錯用「除以 2」算成 8 倍，忘記面積是「自己乘自己」而不是「乘以 2」。",
        "D": "把 4 × 4 ＝ 16 誤記成 2 × 2 或算錯數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "面積放大倍數 ＝ □ × □ ➔ 邊長與周長放大倍數 ＝ □"
      ],
      "conceptCompare": "無論甲乙兩圖是三角形、正方形、圓形或不規則多邊形，只要甲是乙的放大圖且面積變 16 倍，周長一律變 4 倍。",
      "examVariations": "若題目改給「乙圖面積是甲圖的 1/25 倍」，則 1/5 × 1/5 ＝ 1/25，乙圖周長是甲圖的 1/5 倍。"
    }
  },
  {
    "id": "U07-S3-O-022",
    "legacyId": "u07_102",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "雙重比例尺面積換算",
    "batch": "奧數天梯",
    "source": "Unit07 AI_SPEC level_3（跨地圖換算）",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "甲地圖的比例尺是 1：20000，一座森林在甲地圖上的面積是 16 平方公分。在另一張比例尺為 1：40000 的乙地圖上，這座森林的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "64 平方公分",
        "trapCode": "U07_DUAL_MAP_RATIO_ERR"
      },
      {
        "key": "B",
        "text": "4 平方公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "32 平方公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "8 平方公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "16 * (20000 / 40000) * (20000 / 40000)",
      "expect": "4"
    },
    "explanation": {
      "examPurpose": "測驗學生在跨比例尺換算面積時，能比較兩張地圖的比例尺比值，並運用「長度 1/2 倍 ➔ 面積 1/4 倍」的平方規律解題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比較兩張地圖的比例尺。乙地圖比例尺 1：40000 的縮放比值，只有甲地圖 1：20000 的一半："
        },
        {
          "type": "eq",
          "expr": "1/40000 ÷ 1/20000 ＝ 20000 ÷ 40000 ＝ 1/2",
          "unit": "倍（圖上邊長縮成一半）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(30, 22)\"><rect x=\"0\" y=\"0\" width=\"96\" height=\"96\" fill=\"#dcfce7\" stroke=\"#059669\" stroke-width=\"2.5\"/><line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"96\" stroke=\"#86efac\"/><line x1=\"48\" y1=\"0\" x2=\"48\" y2=\"96\" stroke=\"#86efac\"/><line x1=\"72\" y1=\"0\" x2=\"72\" y2=\"96\" stroke=\"#86efac\"/><line x1=\"0\" y1=\"24\" x2=\"96\" y2=\"24\" stroke=\"#86efac\"/><line x1=\"0\" y1=\"48\" x2=\"96\" y2=\"48\" stroke=\"#86efac\"/><line x1=\"0\" y1=\"72\" x2=\"96\" y2=\"72\" stroke=\"#86efac\"/><text x=\"48\" y=\"52\" font-size=\"13\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">16 平方公分</text><text x=\"48\" y=\"116\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">甲圖 1：20000</text></g><path d=\"M 150 70 L 205 70\" stroke=\"#f59e0b\" stroke-width=\"3\"/><polygon points=\"205,65 215,70 205,75\" fill=\"#f59e0b\"/><text x=\"180\" y=\"56\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">長度 × 1/2</text><text x=\"180\" y=\"92\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">面積 × 1/4</text><g transform=\"translate(238, 46)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"48\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"48\" stroke=\"#fda4af\"/><line x1=\"0\" y1=\"24\" x2=\"48\" y2=\"24\" stroke=\"#fda4af\"/><text x=\"24\" y=\"68\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">乙圖 1：40000</text><text x=\"24\" y=\"86\" font-size=\"12\" font-weight=\"800\" fill=\"#be123c\" text-anchor=\"middle\">4 平方公分</text></g><text x=\"370\" y=\"62\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">乙圖縮得更小</text><text x=\"370\" y=\"88\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">16 × 1/4 ＝ 4</text></svg>",
          "caption": "同一座森林在 1：40000 地圖上邊長縮小成一半，因此圖上面積縮小為 1/2 × 1/2 ＝ 1/4"
        },
        {
          "type": "text",
          "text": "第 2 步：圖上邊長變為 1/2 倍，面積則縮為 1/2 × 1/2 ＝ 1/4 倍："
        },
        {
          "type": "eq",
          "expr": "16 × 1/4 ＝ 4",
          "unit": "平方公分"
        },
        {
          "type": "answer",
          "text": "答：4 平方公分。"
        }
      ],
      "insight": "雙重比例尺捷徑：先算圖上長度變幾倍（1/2 倍），再平方一次（1/4 倍），不用把森林的實際面積硬算出來！",
      "distractorAnalysis": {
        "A": "看到 40000 比 20000 大 2 倍，就誤以為面積要放大 4 倍（16 × 4 ＝ 64），其實分母越大圖縮得越小。",
        "C": "看到 40000 ÷ 20000 ＝ 2 就直接拿 16 × 2 ＝ 32。",
        "D": "知道 1：40000 縮得較小，但忘了面積是平方縮放，只把 16 除以 2 算成 8 平方公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "乙圖長度是甲圖長度的（甲比例尺分母 ÷ 乙比例尺分母）倍",
        "乙圖面積 ＝ 甲圖面積 ×（長度倍數 × 長度倍數）"
      ],
      "conceptCompare": "當然也可以繞遠路驗證：甲圖 1 公分 ＝ 200 公尺 ➔ 16 平方公分 ＝ 16 × 40000 ＝ 640000 平方公尺；乙圖 1 公分 ＝ 400 公尺（1 平方公分 ＝ 160000 平方公尺）➔ 640000 ÷ 160000 ＝ 4 平方公分。",
      "examVariations": "若乙地圖比例尺改為 1：10000（圖上長度變 2 倍），則森林在乙地圖上會變成 16 × 4 ＝ 64 平方公分。"
    }
  },
  {
    "id": "U07-S2-O-023",
    "legacyId": "u07_103",
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖與縮小圖",
    "category": "相似三角形影長",
    "batch": "奧數天梯",
    "source": "Unit07 AI_SPEC level_4（AMC 8 陽光影長）",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "身高 1.5 公尺的小明垂直站在水平地面上，陽光下的影長是 2 公尺。在同一時間同一地點，旁邊垂直站在地面的一棵大樹影長是 16 公尺。這棵大樹的實際高度是多少公尺？",
    "options": [
      {
        "key": "A",
        "text": "15.5 公尺",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "B",
        "text": "21.3 公尺",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "12 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "24 公尺",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "16 * 1.5 / 2",
      "expect": "12"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「同一時間太陽照射角度相同」，物高與影長形成放大縮小關係（相似三角形），進而利用倍數求樹高。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：同一時間太陽光線平行，所以「大樹與影子」的直角三角形，就是「小明與影子」直角三角形的放大圖。先看影長放大了幾倍："
        },
        {
          "type": "eq",
          "expr": "16 ÷ 2 ＝ 8",
          "unit": "倍（大樹影長是小明的 8 倍）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(30, 15)\"><line x1=\"10\" y1=\"115\" x2=\"125\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"2\"/><line x1=\"45\" y1=\"75\" x2=\"45\" y2=\"115\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"45\" y1=\"75\" x2=\"105\" y2=\"115\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"45\" y1=\"115\" x2=\"105\" y2=\"115\" stroke=\"#059669\" stroke-width=\"4\"/><text x=\"25\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">1.5</text><text x=\"75\" y=\"133\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">影 2 公尺</text><text x=\"55\" y=\"65\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">小明</text><line x1=\"210\" y1=\"115\" x2=\"415\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"2\"/><line x1=\"245\" y1=\"25\" x2=\"245\" y2=\"115\" stroke=\"#e11d48\" stroke-width=\"5\"/><circle cx=\"245\" cy=\"22\" r=\"18\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\"/><line x1=\"245\" y1=\"25\" x2=\"395\" y2=\"115\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/><line x1=\"245\" y1=\"115\" x2=\"395\" y2=\"115\" stroke=\"#059669\" stroke-width=\"4\"/><text x=\"216\" y=\"78\" font-size=\"12\" font-weight=\"800\" fill=\"#e11d48\" text-anchor=\"middle\">？公尺</text><text x=\"320\" y=\"133\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">樹影 16 公尺（8 倍）</text></g><text x=\"350\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">太陽光角度相等</text><text x=\"350\" y=\"64\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">高 12 公尺</text></svg>",
          "caption": "太陽角度相同，兩個直角三角形互為放大圖：影子變 8 倍，高度也變 8 倍"
        },
        {
          "type": "text",
          "text": "第 2 步：影長放大 8 倍，對應的高度也要放大 8 倍："
        },
        {
          "type": "eq",
          "expr": "1.5 × 8 ＝ 12",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：12 公尺。"
        }
      ],
      "insight": "古希臘泰勒斯測金字塔秘訣：影子變幾倍，高度就跟著變幾倍（或直接用高：影 ＝ 1.5：2 ＝ 3：4 推算）！",
      "distractorAnalysis": {
        "A": "用加減法思考，誤以為「影長比身高多 0.5 公尺」，就用 16 － 0.5 ＝ 15.5 公尺，忽略放大圖看的是倍數而非差值。",
        "D": "忘記先除以小明影長 2 公尺，直接把 1.5 × 16 ＝ 24 當成樹高。",
        "B": "把高和影長的比寫反，誤算成 16 × 2 ÷ 1.5 ≈ 21.3 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同一時間同一地點：大樹高：大樹影長 ＝ 人高：人影長",
        "大樹高 ＝ 人高 ×（大樹影長 ÷ 人影長）"
      ],
      "conceptCompare": "「同時同地」四個字很重要，因為太陽仰角相同，兩個直角三角形的對應角才會完全相等，構成放大縮小圖關係。",
      "examVariations": "段考常改問「若大樹高 15 公尺，在同一時間的影子會長幾公尺？」，先算影長是身高的 2 ÷ 1.5 ＝ 4/3 倍，15 × 4/3 ＝ 20 公尺。"
    }
  },
  {
    "id": "U07-S1-O-024",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "category": "三圖連環縮放倍率",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（連環倍率複合）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "已知乙圖是甲圖的 3/2 倍放大圖，丙圖又是乙圖的 4 倍放大圖。請問丙圖是甲圖的幾倍放大圖？反過來，甲圖是丙圖的幾分之幾倍縮小圖？",
    "options": [
      {
        "key": "A",
        "text": "丙是甲的 1/6 倍，甲是丙的 6 倍",
        "trapCode": "U07_RATIO_FRACTION_INV"
      },
      {
        "key": "B",
        "text": "丙是甲的 5 1/2 倍，甲是丙的 2/11 倍",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "C",
        "text": "丙是甲的 6 倍，甲是丙的 1/6 倍",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "丙是甲的 8/3 倍，甲是丙的 3/8 倍",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(3/2) * 4",
      "expect": "6",
      "extraChecks": [
        {
          "expr": "1 / ((3/2) * 4)",
          "expect": "1/6"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在多層圖形連續放大時，能否用倍率連乘求出總放大倍數，並正確取倒數回答逆向的縮小倍率。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把甲圖的邊長當作 1 倍。乙圖是甲圖的 3/2 倍，丙圖又是乙圖的 4 倍，連續縮放時倍率要相乘。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"155\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"24\" y=\"68\" width=\"30\" height=\"22\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"39\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">甲圖（1 份）</text><path d=\"M 62 79 L 106 79\" stroke=\"#d97706\" stroke-width=\"2.5\" fill=\"none\"/><polygon points=\"106,75 114,79 106,83\" fill=\"#d97706\"/><text x=\"86\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">× 3/2</text><rect x=\"120\" y=\"57\" width=\"45\" height=\"33\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"142\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">乙圖（3/2 份）</text><path d=\"M 173 79 L 218 79\" stroke=\"#e11d48\" stroke-width=\"2.5\" fill=\"none\"/><polygon points=\"218,75 226,79 218,83\" fill=\"#e11d48\"/><text x=\"198\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">× 4</text><rect x=\"234\" y=\"20\" width=\"120\" height=\"88\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"294\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#9f1239\">丙圖（6 份）</text><text x=\"230\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">丙是甲的 3/2 × 4 ＝ 6 倍；反過來，甲是丙的 1/6 倍</text></svg>",
          "caption": "圖解：連環放大時倍率用乘法連乘，逆向求縮小倍數則取倒數。"
        },
        {
          "type": "eq",
          "expr": "3/2 × 4 ＝ 6",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "1 ÷ 6 ＝ 1/6",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "因為丙圖邊長是甲圖的 6 倍，反過來以丙圖為基準，甲圖的邊長就是丙圖的 1 ÷ 6 ＝ 1/6 倍。"
        },
        {
          "type": "answer",
          "text": "答：丙是甲的 6 倍，甲是丙的 1/6 倍"
        }
      ],
      "insight": "連環縮放看倍率：正推連乘（3/2 × 4 ＝ 6），反推取倒數（1/6）。",
      "distractorAnalysis": {
        "B": "誤把兩次放大的倍數相加（3/2 ＋ 4 ＝ 5 1/2），忘記連續放大要使用乘法。",
        "D": "誤將 4 除以 3/2（4 ÷ 3/2 ＝ 8/3），把連乘算成除法。",
        "A": "把甲和丙的比較基準搞顛倒，將「丙是甲的幾倍」和「甲是丙的幾分之幾倍」寫反了。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "連環縮放總倍率 ＝ 第一段倍率 × 第二段倍率",
        "互為基準轉換：乙是甲的幾倍，甲就是乙的「倒數」倍"
      ],
      "conceptCompare": "倍數的合成是「乘除」而不是「加減」；從大圖看小圖是縮小幾分之一，從小圖看大圖才是放大幾倍。",
      "examVariations": "若題目多加問面積：丙圖面積會是甲圖面積的 6 × 6 ＝ 36 倍，甲圖面積是丙圖面積的 1/36 倍。"
    }
  },
  {
    "id": "U07-S2-O-025",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大與縮小圖",
    "category": "非直角鈍角三角形高與底縮放",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（方格鈍角三角形縮放）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "在方格紙上畫出一個底為 9 格、對應高為 4 格的鈍角三角形（每小格邊長 1 公分）。如果將這個鈍角三角形畫成原圖的 2/3 倍縮小圖，縮小後新三角形的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "8 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "12 平方公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "C",
        "text": "6 平方公分",
        "trapCode": "U07_GRID_COUNT_ERR"
      },
      {
        "key": "D",
        "text": "16 平方公分",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(9 * 4 / 2) * (2/3) * (2/3)",
      "expect": "8",
      "extraChecks": [
        {
          "expr": "9 * (2/3)",
          "expect": "6"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生繪製非直角（鈍角）三角形縮小圖時，底與外高都要同步乘以縮放倍率 2/3，並驗證面積會縮為原來的 4/9 倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：鈍角三角形的底和高也要一起縮小為原來的 2/3 倍。新底邊 ＝ 9 × 2/3 ＝ 6 格（6 公分），新高 ＝ 4 × 2/3 ＝ 8/3 公分（2 2/3 格）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"175\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><line x1=\"30\" y1=\"116\" x2=\"220\" y2=\"116\" stroke=\"#e2e8f0\" stroke-width=\"1\"/><line x1=\"30\" y1=\"44\" x2=\"220\" y2=\"44\" stroke=\"#e2e8f0\" stroke-width=\"1\"/><polygon points=\"30,116 156,116 184,60\" fill=\"#fef3c7\" fill-opacity=\"0.7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"156\" y1=\"116\" x2=\"184\" y2=\"116\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><line x1=\"184\" y1=\"60\" x2=\"184\" y2=\"116\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"93\" y=\"134\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">原底 9 格</text><text x=\"198\" y=\"92\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">高 4 格</text><polygon points=\"275,116 359,116 378,79\" fill=\"#dbeafe\" fill-opacity=\"0.8\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"359\" y1=\"116\" x2=\"378\" y2=\"116\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><line x1=\"378\" y1=\"79\" x2=\"378\" y2=\"116\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"317\" y=\"134\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">新底 6 格</text><text x=\"390\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">高 2 2/3 格</text><text x=\"230\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">原面積 18 平方公分 ➔ 縮小 2/3 倍後，面積變 18 × 4/9 ＝ 8 平方公分</text></svg>",
          "caption": "圖解：鈍角三角形畫在三角形外部的高，也要和底邊一起縮小 2/3 倍。"
        },
        {
          "type": "eq",
          "expr": "9 × 4 ÷ 2 ＝ 18",
          "unit": "平方公分"
        },
        {
          "type": "eq",
          "expr": "18 × 2/3 × 2/3 ＝ 8",
          "unit": "平方公分"
        },
        {
          "type": "text",
          "text": "也可以直接用新底與新高計算：6 × 8/3 ÷ 2 ＝ 16 ÷ 2 ＝ 8 平方公分，結果完全一致。"
        },
        {
          "type": "answer",
          "text": "答：8 平方公分"
        }
      ],
      "insight": "就算高不在整數格線上（2 2/3 格），只要把握「面積倍率 ＝ 邊長倍率的平方」，就能穩穩算出整數面積 8 平方公分。",
      "distractorAnalysis": {
        "C": "在方格紙估計新高度時直接把 2 2/3 格看成整數 2 格，錯算成 6 × 2 ÷ 2 ＝ 6 平方公分。",
        "D": "計算新面積 6 × 8/3 時忘記三角形面積公式最後要除以 2，算成 16 平方公分。",
        "B": "求出原面積 18 平方公分後，誤以為面積也只縮小 2/3 倍，算成 18 × 2/3 ＝ 12 平方公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形縮小圖：底與高都同乘縮放倍數",
        "縮放後面積 ＝ 原面積 × 縮放倍率 × 縮放倍率"
      ],
      "conceptCompare": "鈍角三角形的高常落在底邊延長線的外側，畫縮小圖時要找「頂點向右偏移幾格、向上幾格」，把兩個方向格數同乘 2/3 就能精準定出頂點位置。",
      "examVariations": "若題目改為放大 3/2 倍，新底為 9 × 3/2 ＝ 13.5 格、新高為 6 格，面積變為 18 × 9/4 ＝ 40.5 平方公分。"
    }
  },
  {
    "id": "U07-S3-O-026",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "category": "農地地圖面積轉實際公頃",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（比例尺與公頃面積）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "在比例尺 1：20000 的地圖上，有一塊長方形農地，量得圖上長 5 公分、寬 3 公分。請問這塊農地的實際面積是多少公頃？（提示：1 公頃 ＝ 10000 平方公尺）",
    "options": [
      {
        "key": "A",
        "text": "60 公頃",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "6000 公頃",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "0.3 公頃",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "6 公頃",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(5 * 20000 / 100) * (3 * 20000 / 100) / 10000",
      "expect": "60"
    },
    "explanation": {
      "examPurpose": "測驗學生從地圖長寬、比例尺換算實際公尺後，計算大面積並正確進行平方公尺與公頃的單位轉換。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1：20000 表示圖上 1 公分等於實際 20000 公分 ＝ 200 公尺。先分別算出農地的實際長與實際寬。"
        },
        {
          "type": "eq",
          "expr": "5 × 200 ＝ 1000",
          "unit": "公尺"
        },
        {
          "type": "eq",
          "expr": "3 × 200 ＝ 600",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：用實際長乘以實際寬求出實際面積（平方公尺），再除以 10000 換算為公頃。"
        },
        {
          "type": "mul",
          "a": "1000",
          "b": "600",
          "note": "實際長 1000 公尺乘以實際寬 600 公尺，得 600000 平方公尺"
        },
        {
          "type": "eq",
          "expr": "600000 ÷ 10000 ＝ 60",
          "unit": "公頃"
        },
        {
          "type": "answer",
          "text": "答：實際面積是 60 公頃"
        }
      ],
      "insight": "先換長寬再算面積最不易錯：圖上 1 公分 ＝ 200 公尺 ➔ 圖上 1 平方公分 ＝ 200 × 200 ＝ 40000 平方公尺 ＝ 4 公頃，15 × 4 ＝ 60 公頃！",
      "distractorAnalysis": {
        "B": "算出 600000 平方公尺後，把 1 公頃誤記為 100 平方公尺（與公畝混淆），除以 100 得 6000 公頃。",
        "D": "在 600000 ÷ 10000 時多消了一個 0，錯算成 6 公頃。",
        "C": "先算出圖上面積 15 平方公分後，忘記面積倍率要平方，誤直接用 15 × 200 ＝ 3000 平方公尺 ＝ 0.3 公頃。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "先線性換算再相乘：實際面積 ＝ 實際長 × 實際寬",
        "面積單位關係：1 公頃 ＝ 100 公畝 ＝ 10000 平方公尺"
      ],
      "conceptCompare": "1 平方公分在 1：20000 地圖上代表「200 公尺 × 200 公尺 ＝ 40000 平方公尺 ＝ 4 公頃」，不是 200 平方公尺。",
      "examVariations": "若改用平方公里表示，因為 1 平方公里 ＝ 100 公頃，60 公頃 ＝ 0.6 平方公里。"
    }
  },
  {
    "id": "U07-S1-O-027",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "category": "擴大圖面積差反推原正方形邊長",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（面積差倍反推周長）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "把一個正方形畫成 3 倍放大圖後，放大圖的面積比原本正方形的面積多了 72 平方公分。請問原本正方形的周長是多少公分？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "原面積 (1 份)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "放大後 (9 份)",
          "units": 9,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "多出 8 份 ＝ 72 平方公分"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "24 公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "36 公分",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "C",
        "text": "12 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "9 公分",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "3 * 4",
      "expect": "12",
      "extraChecks": [
        {
          "expr": "72 / (3 * 3 - 1)",
          "expect": "9"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生結合「面積放大為邊長倍數的平方（3 × 3 ＝ 9 倍）」與「差倍問題線段圖」，從面積差反推出原邊長與原周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：邊長放大 3 倍時，正方形面積會變為原來的 3 × 3 ＝ 9 倍。把原面積當作 1 份，放大後的面積就是 9 份，兩者相差 9 − 1 ＝ 8 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "72 ÷ (3 × 3 − 1) ＝ 72 ÷ 8 ＝ 9",
          "unit": "平方公分"
        },
        {
          "type": "text",
          "text": "第 2 步：算出原本正方形面積是 9 平方公分。因為 3 × 3 ＝ 9，可知原正方形的邊長是 3 公分。"
        },
        {
          "type": "eq",
          "expr": "3 × 4 ＝ 12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：原本正方形的周長是 12 公分"
        }
      ],
      "insight": "先用差倍求原面積（72 ÷ 8 ＝ 9），再想哪個數自己乘自己等於 9（3 × 3 ＝ 9）找出原邊長！",
      "figureNote": "線段圖把原面積設為 1 份，3 倍放大圖面積為 9 份，多出的 8 份對應 72 平方公分，因此每 1 份（原面積）是 9 平方公分。",
      "distractorAnalysis": {
        "A": "誤以為放大 3 倍面積也只變 3 倍，算成 72 ÷ (3 − 1) ＝ 36 平方公分，反推邊長 6 公分而誤選周長 24 公分。",
        "B": "求出原面積 9 平方公分後，忘記從面積反推邊長 3 公分，直接把 9 當成邊長乘以 4 算成 36 公分（或算出放大後周長）。",
        "D": "求出原面積 72 ÷ 8 ＝ 9 後直接停筆，把面積當成最後要求的周長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大後面積比原面積多的份數 ＝ 邊長倍率 × 邊長倍率 − 1",
        "原正方形面積 ＝ 面積差 ÷ (倍率平方 − 1)"
      ],
      "conceptCompare": "這題考驗兩次轉換：先用「平方倍」找原面積，再用正方形「邊長 × 邊長 ＝ 面積」找邊長，最後「邊長 × 4」求周長。",
      "examVariations": "若改問「放大後正方形的周長是多少公分？」，可以直接用原周長 12 × 3 ＝ 36 公分。"
    }
  },
  {
    "id": "U07-S3-O-028",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "category": "精密零件放大比例尺（40：1）",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（放大比例尺與毫米換算）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "手錶廠繪製精密齒輪的設計圖時，採用 40：1 的放大比例尺。如果在設計圖上量得齒輪的直徑是 12 公分，請問這顆齒輪的實際直徑是多少毫米？（提示：1 公分 ＝ 10 毫米）",
    "options": [
      {
        "key": "A",
        "text": "0.3 毫米",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "3 毫米",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "4800 毫米",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "480 毫米",
        "trapCode": "U07_RATIO_FRACTION_INV"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(12 / 40) * 10",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "測驗學生能否辨識「前項大於後項」的放大比例尺（40：1 代表圖上比實物大 40 倍），正確用除法反求實物尺寸並換算成毫米。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺永遠是「圖上長度：實際長度」。40：1 代表圖上 40 公分對應實際 1 公分，也就是圖紙把實物放大了 40 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：從圖上長度反推實際長度，要將 12 公分除以 40。"
        },
        {
          "type": "eq",
          "expr": "12 ÷ 40 ＝ 0.3",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "12",
          "divisor": "40",
          "mode": "exact",
          "note": "直式計算 12 ÷ 40，補小數點與 0 得 0.3 公分"
        },
        {
          "type": "eq",
          "expr": "0.3 × 10 ＝ 3",
          "unit": "毫米"
        },
        {
          "type": "answer",
          "text": "答：這顆齒輪的實際直徑是 3 毫米"
        }
      ],
      "insight": "比例尺前項比後項大（例如 40：1）是「放大設計圖」，求實物反而要除以 40！也可以先把 12 公分換成 120 毫米，120 ÷ 40 ＝ 3 毫米。",
      "distractorAnalysis": {
        "A": "正確算出 12 ÷ 40 ＝ 0.3 公分，卻忘記題目問的是「毫米」，沒有乘以 10 做單位換算。",
        "C": "習慣地圖縮小比例尺後看到 40 就直接用乘法，誤算成 12 × 40 ＝ 480 公分 ＝ 4800 毫米。",
        "D": "把 40：1 看反成 1：40 之外，又直接把 12 × 40 ＝ 480 當成毫米寫入答案。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上距離：實際距離",
        "前項大於後項（如 40：1）➔ 放大圖（精密零件、昆蟲標本）"
      ],
      "conceptCompare": "地圖比例尺通常是 1：幾萬（縮小），零件圖則是 幾十：1（放大）；無論哪一種，口訣都是「圖上在前、實際在後」。",
      "examVariations": "若實物齒輪有個孔洞直徑只有 1.5 毫米，畫在這張 40：1 設計圖上會是 1.5 × 40 ＝ 60 毫米 ＝ 6 公分。"
    }
  },
  {
    "id": "U07-RV-O-029",
    "legacyId": null,
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "路燈影長相似梯形",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（路燈倒影相似三角形）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "夜晚時，身高 1.6 公尺的小華垂直站在水平地面高 4 公尺的路燈下（路燈也垂直地面），測得她在地上的影子長為 2 公尺。請問小華站在距離路燈燈桿幾公尺的位置？",
    "options": [
      {
        "key": "A",
        "text": "5 公尺",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "B",
        "text": "3 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3.2 公尺",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "D",
        "text": "6 公尺",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "2 * (4 / 1.6) - 2",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "測驗學生能否從路燈光線照射形成的大小兩個重疊相似直角三角形，先求大三角形底邊全長，再扣除影長算出人與燈桿的距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：路燈光線斜射地面，形成「路燈大三角形」與「小華影長小三角形」。大三角形的高（4 公尺）是小三角形高（1.6 公尺）的放大圖。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"170\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><line x1=\"35\" y1=\"135\" x2=\"260\" y2=\"135\" stroke=\"#334155\" stroke-width=\"2.5\"/><line x1=\"60\" y1=\"25\" x2=\"60\" y2=\"135\" stroke=\"#d97706\" stroke-width=\"4\"/><circle cx=\"60\" cy=\"25\" r=\"6\" fill=\"#f59e0b\"/><line x1=\"150\" y1=\"91\" x2=\"150\" y2=\"135\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><circle cx=\"150\" cy=\"86\" r=\"4.5\" fill=\"#2563eb\"/><line x1=\"60\" y1=\"25\" x2=\"210\" y2=\"135\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><line x1=\"150\" y1=\"135\" x2=\"210\" y2=\"135\" stroke=\"#0f172a\" stroke-width=\"4\"/><text x=\"32\" y=\"85\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">4 公尺</text><text x=\"122\" y=\"114\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">1.6 公尺</text><text x=\"105\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">離燈 ？ 公尺</text><text x=\"180\" y=\"152\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">影長 2 公尺</text><rect x=\"272\" y=\"25\" width=\"172\" height=\"118\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"284\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">放大倍數：4 ÷ 1.6 ＝ 2.5 倍</text><text x=\"284\" y=\"82\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">大底全長：2 × 2.5 ＝ 5 公尺</text><text x=\"284\" y=\"112\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">離燈距離：5 − 2 ＝ 3 公尺</text></svg>",
          "caption": "圖解：路燈三角形的底邊包含了「人離燈距離」與「影長 2 公尺」兩段。"
        },
        {
          "type": "eq",
          "expr": "4 ÷ 1.6 ＝ 2.5",
          "unit": "倍"
        },
        {
          "type": "longdiv",
          "dividend": "4",
          "divisor": "1.6",
          "mode": "exact",
          "note": "小數除法：除數與被除數同時乘以 10 變成 40 ÷ 16 ＝ 2.5"
        },
        {
          "type": "eq",
          "expr": "2 × 2.5 − 2 ＝ 5 − 2 ＝ 3",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：小華距離路燈燈桿 3 公尺"
        }
      ],
      "insight": "重疊相似三角形最關鍵一步：大三角形的底邊是「人離燈距離 ＋ 影長」，算出 5 公尺後別忘了減掉影長 2 公尺！",
      "distractorAnalysis": {
        "A": "求出大三角形底邊全長 2 × 2.5 ＝ 5 公尺後，誤把整條大底邊當成小華離路燈的距離，忘記減去影長 2 公尺。",
        "D": "計算 4 ÷ 1.6 時誤算成 4 倍，進而錯算成 2 × 4 − 2 ＝ 6 公尺。",
        "C": "把人高與影長直接用錯誤的比例乘除（1.6 × 2 ＝ 3.2 公尺），沒有找出兩三角形高的放大倍數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "高度放大倍率 ＝ 路燈高 ÷ 人高",
        "大三角形底邊（離燈距 ＋ 影長）＝ 影長 × 高度放大倍率"
      ],
      "conceptCompare": "陽光測樹高時，兩個三角形是分開並排的（影長比就是樹高比）；路燈問題則是兩個三角形「疊在一起共用影尖」，所以大底 ＝ 人離燈距 ＋ 影長。",
      "examVariations": "若小華再往前遠離路燈 3 公尺（離燈 6 公尺），影子會變長嗎？因為離燈距佔大底的 1.5 ÷ 2.5 ＝ 3/5，此時 6 ÷ 3 × 2 ＝ 4 公尺，影子也會拉長為 4 公尺！"
    }
  },
  {
    "id": "U07-S2-O-030",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大與縮小圖",
    "category": "梯形縮小圖邊長與面積",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（方格梯形縮放逆推）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "在方格紙上畫一個上底 4 格、下底 8 格、高 6 格的梯形（每小格邊長 1 公分）。將這個梯形畫成它的「縮小圖」後，新梯形的面積變成 9 平方公分。請問縮小後梯形的「下底」長是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "4 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "3 公分",
        "trapCode": "U07_GRID_COUNT_ERR"
      },
      {
        "key": "C",
        "text": "16 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "2 公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "8 * (1/2)",
      "expect": "4",
      "extraChecks": [
        {
          "expr": "(4 + 8) * 6 / 2 / 9",
          "expect": "4"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否從梯形縮放前後的面積比，反推出邊長縮放倍率，再求對應下底的新長度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先計算原梯形的面積，再比較新梯形面積是原梯形面積的幾分之幾。"
        },
        {
          "type": "eq",
          "expr": "(4 ＋ 8) × 6 ÷ 2 ＝ 36",
          "unit": "平方公分"
        },
        {
          "type": "eq",
          "expr": "9 ÷ 36 ＝ 1/4",
          "unit": "倍"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"165\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><polygon points=\"58,32 114,32 142,116 30,116\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><line x1=\"58\" y1=\"32\" x2=\"58\" y2=\"116\" stroke=\"#b45309\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><text x=\"86\" y=\"25\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">上底 4 格</text><text x=\"86\" y=\"133\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">下底 8 格</text><text x=\"86\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">面積 36</text><path d=\"M 164 74 L 204 74\" stroke=\"#2563eb\" stroke-width=\"2.5\" fill=\"none\"/><polygon points=\"204,70 212,74 204,78\" fill=\"#2563eb\"/><text x=\"184\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">面積 1/4</text><text x=\"184\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">邊長 1/2</text><polygon points=\"238,53 266,53 280,95 224,95\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"252\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">面積 9</text><text x=\"252\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">下底 ？ 公分</text><rect x=\"304\" y=\"28\" width=\"140\" height=\"106\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"316\" y=\"54\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">1/2 × 1/2 ＝ 1/4</text><text x=\"316\" y=\"82\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">邊長縮為 1/2 倍</text><text x=\"316\" y=\"110\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">下底 ＝ 8 × 1/2 ＝ 4</text></svg>",
          "caption": "圖解：面積變為 1/4 倍時，代表上底、下底與高各縮小為原來的 1/2 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：因為 1/2 × 1/2 ＝ 1/4，所以梯形各邊長都縮小為原來的 1/2 倍。縮小後的下底 ＝ 8 × 1/2 ＝ 4 公分。"
        },
        {
          "type": "eq",
          "expr": "8 × 1/2 ＝ 4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：縮小後梯形的下底長是 4 公分"
        }
      ],
      "insight": "面積縮為 1/4 倍，不等於邊長也縮為 1/4 倍！先找出 1/2 × 1/2 ＝ 1/4，才能把邊長倍率還原為 1/2。",
      "distractorAnalysis": {
        "B": "算對邊長縮小為 1/2 倍後，錯把高 6 格乘以 1/2 ＝ 3 公分當作下底，或數錯方格把下底當成 6 格。",
        "C": "把縮小方向與倍率搞反，錯把 8 乘以 2 算成 16 公分。",
        "D": "算出面積縮為 1/4 倍後，直接把原下底 8 公分也乘以 1/4（8 × 1/4 ＝ 2 公分），忽略面積比與邊長比的平方關係。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "梯形面積 ＝ (上底 ＋ 下底) × 高 ÷ 2",
        "面積變為 1/4 倍 ➔ 所有線段（上底、下底、高、腰、周長）皆變為 1/2 倍"
      ],
      "conceptCompare": "無論是正方形、三角形還是梯形，只要做相似縮放，面積倍率永遠是邊長倍率的平方。",
      "examVariations": "順便驗算縮小後梯形的尺寸：上底 2 公分、下底 4 公分、高 3 公分，面積 ＝ (2 ＋ 4) × 3 ÷ 2 ＝ 9 平方公分，完全符合！"
    }
  },
  {
    "id": "U07-S3-O-031",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "category": "雙地圖同線段不同比例尺轉算",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（雙地圖反推比例尺）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "在比例尺 1：50000 的甲地圖上，一條公路的長度是 12 公分；同樣一條公路畫在乙地圖上，長度是 15 公分。請問乙地圖的比例尺是多少？",
    "options": [
      {
        "key": "A",
        "text": "1：62500",
        "trapCode": "U07_DUAL_MAP_RATIO_ERR"
      },
      {
        "key": "B",
        "text": "1：400",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "1：750000",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "1：40000",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(12 * 50000) / 15",
      "expect": "40000"
    },
    "explanation": {
      "examPurpose": "測驗學生運用「同一條公路實際長度不變」的橋樑法，由甲地圖算出實際公分數後，重新與乙地圖圖長化簡求比例尺。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：這條公路不管畫在哪張地圖上，它的實際長度都是固定不變的。先從甲地圖算出實際長度。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"155\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"20\" y=\"20\" width=\"190\" height=\"62\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\"/><text x=\"115\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">甲地圖（1：50000）</text><line x1=\"45\" y1=\"62\" x2=\"165\" y2=\"62\" stroke=\"#2563eb\" stroke-width=\"4\"/><text x=\"105\" y=\"75\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">圖長 12 公分</text><rect x=\"250\" y=\"20\" width=\"190\" height=\"62\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#059669\"/><text x=\"345\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\">乙地圖（1：？）</text><line x1=\"270\" y1=\"62\" x2=\"420\" y2=\"62\" stroke=\"#059669\" stroke-width=\"4\"/><text x=\"345\" y=\"75\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">圖長 15 公分</text><rect x=\"55\" y=\"96\" width=\"350\" height=\"42\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\"/><text x=\"230\" y=\"115\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\">共同橋樑：實際公路長 ＝ 12 × 50000 ＝ 600000 公分</text><text x=\"230\" y=\"132\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">乙地圖比例尺 ＝ 15：600000 ＝ 1：40000</text></svg>",
          "caption": "圖解：同一條公路在兩張地圖上圖長不同，但實際公分數完全相等。"
        },
        {
          "type": "eq",
          "expr": "12 × 50000 ＝ 600000",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "600000 ÷ 15 ＝ 40000",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：在乙地圖上，15 公分代表實際 600000 公分，將前後項同除以 15 化為最簡整數比，得 1：40000。"
        },
        {
          "type": "answer",
          "text": "答：乙地圖的比例尺是 1：40000"
        }
      ],
      "insight": "圖上畫得越長（15 公分 > 12 公分），代表地圖越詳細，比例尺的比值越大（後項數字反而要變小：40000 < 50000）！",
      "distractorAnalysis": {
        "A": "誤以為圖上越長後項數字就要跟著變大，直接用 50000 × 15 ÷ 12 算成 1：62500。",
        "B": "把 600000 公分換算成 6000 公尺後，直接拿「15 公分：6000 公尺」化簡成 1：400，忘記比例尺前後項必須單位相同。",
        "C": "求出 50000 後沒有先算 12 × 50000，卻誤把 50000 直接乘以 15 寫成 1：750000。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際長度 ＝ 甲圖長 × 甲比例尺分母 ＝ 乙圖長 × 乙比例尺分母",
        "圖上距離與比例尺分母成反比：圖長越長，分母越小"
      ],
      "conceptCompare": "求比例尺「圖長：實長」之前，務必確認兩個數字都是「公分」（或同單位）才能約分。",
      "examVariations": "如果有一塊公園在甲地圖上面積是 16 平方公分，在乙地圖上會是多少平方公分？邊長比 15：12 ＝ 5/4 倍，面積變為 16 × 25/16 ＝ 25 平方公分。"
    }
  },
  {
    "id": "U07-RV-O-032",
    "legacyId": null,
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "直角扇形半徑縮放比",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（扇形周長與面積倍數）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "甲、乙兩個圓心角都是 90° 的扇形，甲扇形的半徑是乙扇形半徑的 2.5 倍。請問甲扇形的「周長」是乙扇形的幾倍？甲扇形的「面積」又是乙扇形的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "周長是 2.5 倍、面積是 2.5 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "周長是 6.25 倍、面積是 6.25 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "C",
        "text": "周長是 0.4 倍、面積是 0.16 倍",
        "trapCode": "U07_RATIO_FRACTION_INV"
      },
      {
        "key": "D",
        "text": "周長是 2.5 倍、面積是 6.25 倍",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "2.5 * 2.5",
      "expect": "6.25",
      "extraChecks": [
        {
          "expr": "2.5",
          "expect": "2.5"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生整合扇形與放大圖觀念：圓心角相同時，兩扇形互為相似圖，因此周長（弧長＋兩半徑）同為 2.5 倍，面積則為平方倍 6.25 倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：兩個扇形的圓心角都是 90°，形狀完全相似，甲就是乙的 2.5 倍放大圖。無論弧長或兩條半徑都是長度，所以甲扇形的周長是乙扇形的 2.5 倍。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"165\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><path d=\"M 50,125 L 92,125 A 42,42 0 0,0 50,83 Z\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"71\" y=\"145\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">乙扇形（半徑 1 份）</text><text x=\"64\" y=\"117\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">90°</text><path d=\"M 175,125 L 280,125 A 105,105 0 0,0 175,20 Z\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"228\" y=\"145\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">甲扇形（半徑 2.5 份）</text><text x=\"205\" y=\"110\" font-size=\"12\" font-weight=\"700\" fill=\"#9f1239\">90°</text><rect x=\"302\" y=\"24\" width=\"142\" height=\"114\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"314\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">長度（周長）：2.5 倍</text><text x=\"314\" y=\"82\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">面積：2.5 × 2.5</text><text x=\"346\" y=\"108\" font-size=\"13\" font-weight=\"700\" fill=\"#be123c\">＝ 6.25 倍</text></svg>",
          "caption": "圖解：圓心角相同的兩個扇形互為放大縮小圖，周長 2.5 倍、面積 6.25 倍。"
        },
        {
          "type": "eq",
          "expr": "2.5 × 2.5 ＝ 6.25",
          "unit": "倍"
        },
        {
          "type": "mul",
          "a": "2.5",
          "b": "2.5",
          "note": "直式計算 2.5 × 2.5，小數共 2 位得 6.25"
        },
        {
          "type": "text",
          "text": "可以用具體數字驗算：設乙半徑 2，周長 ＝ 4×3.14×1/4＋4 ＝ 7.14、面積 ＝ 4×3.14×1/4 ＝ 3.14；甲半徑 5，周長 ＝ 10×3.14×1/4＋10 ＝ 17.85（為 7.14 的 2.5 倍）、面積 ＝ 25×3.14×1/4 ＝ 19.625（為 3.14 的 6.25 倍）。"
        },
        {
          "type": "answer",
          "text": "答：周長是 2.5 倍、面積是 6.25 倍"
        }
      ],
      "insight": "圓心角一樣的兩個扇形一定是相似圖形！周長看長度一次方（2.5 倍），面積看半徑平方（2.5 × 2.5 ＝ 6.25 倍），完全不需要先乘圓周率 3.14。",
      "distractorAnalysis": {
        "A": "誤以為面積的放大倍數和半徑一樣，都只放大 2.5 倍。",
        "B": "算對面積為 6.25 倍後，誤以為周長也會跟著平方放大成 6.25 倍。",
        "C": "把甲和乙的比較對象搞反了，算成乙扇形是甲扇形的 0.4 倍與 0.16 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同圓心角扇形：周長倍數 ＝ 弧長倍數 ＝ 半徑倍數",
        "同圓心角扇形：面積倍數 ＝ 半徑倍數 × 半徑倍數"
      ],
      "conceptCompare": "如果兩個扇形的圓心角不同（例如甲 90°、乙 45°），就不是放大縮小圖，這時不能直接平方求面積倍，必須把圓心角比例也乘進去！",
      "examVariations": "若進階問「甲扇形面積比乙扇形面積多幾倍？」，答案為 6.25 − 1 ＝ 5.25 倍。"
    }
  },
  {
    "id": "U07-S1-O-033",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "category": "影印機連續 80% 與 125% 還原",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（影印連縮與還原倍率）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一張海報在影印機上連續按了兩次「80%」縮小鍵（每次都把邊長縮為前一次的 80%）。請問兩次縮小後的新海報「面積」是原來海報的幾分之幾？如果想把這張兩次縮小後的成品直接一次放大「恢復原來的邊長大小」，影印機的縮放倍率應該設定為多少百分比？",
    "options": [
      {
        "key": "A",
        "text": "面積為原本的 9/25，需設定為 140%",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "B",
        "text": "面積為原本的 256/625，需設定為 156.25%",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "面積為原本的 16/25，需設定為 156.25%",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "面積為原本的 256/625，需設定為 125%",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(80/100) * (80/100) * (80/100) * (80/100)",
      "expect": "256/625",
      "extraChecks": [
        {
          "expr": "1 / ((80/100) * (80/100))",
          "expect": "1.5625"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生理解影印機百分比代表「邊長縮放倍率」，連續按兩次 80% 後邊長為 16/25、面積為 (16/25) 的平方，且還原邊長須除以 0.64（非加回 40%）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：影印機按 80%（即 4/5）是指邊長縮為原本的 4/5。連續按兩次後，邊長變成原來的 4/5 × 4/5 ＝ 16/25（即 0.64 倍）。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"165\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"22\" y=\"32\" width=\"75\" height=\"75\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"59\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">原海報 1</text><path d=\"M 104 68 L 142 68\" stroke=\"#d97706\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"142,64 150,68 142,72\" fill=\"#d97706\"/><text x=\"125\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">× 80%</text><rect x=\"156\" y=\"40\" width=\"60\" height=\"60\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"186\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#92400e\">邊長 4/5</text><path d=\"M 223 68 L 261 68\" stroke=\"#e11d48\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"261,64 269,68 261,72\" fill=\"#e11d48\"/><text x=\"244\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#be123c\">× 80%</text><rect x=\"276\" y=\"48\" width=\"48\" height=\"48\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"300\" y=\"69\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#9f1239\">邊長 16/25</text><text x=\"300\" y=\"84\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#9f1239\">面積 256/625</text><rect x=\"340\" y=\"28\" width=\"106\" height=\"84\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#059669\"/><text x=\"393\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">還原倍率：</text><text x=\"393\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">1 ÷ 0.64 ＝ 1.5625</text><text x=\"393\" y=\"98\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">設定 156.25%</text><text x=\"230\" y=\"142\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">面積 ＝ 16/25 × 16/25 ＝ 256/625；還原邊長 ＝ 1 ÷ 0.64 ＝ 156.25%</text></svg>",
          "caption": "圖解：連縮兩次 80% 邊長變為 0.64 倍，面積為 256/625，還原需除以 0.64。"
        },
        {
          "type": "eq",
          "expr": "16/25 × 16/25 ＝ 256/625",
          "unit": ""
        },
        {
          "type": "eq",
          "expr": "1 ÷ 0.64 ＝ 1.5625 ＝ 156.25%",
          "unit": ""
        },
        {
          "type": "longdiv",
          "dividend": "1",
          "divisor": "0.64",
          "mode": "exact",
          "note": "除數小數點右移兩位變成 100 ÷ 64 ＝ 1.5625，即 156.25%"
        },
        {
          "type": "answer",
          "text": "答：面積為原本的 256/625，需設定為 156.25%"
        }
      ],
      "insight": "只縮小一次 80% 時要按 125%（1 ÷ 0.8 ＝ 1.25）還原；連續縮小兩次後邊長剩 0.64 倍，還原就要 1.25 × 1.25 ＝ 1.5625 ＝ 156.25%！",
      "distractorAnalysis": {
        "A": "誤把連縮兩次 80%（少 20%）當成減去 20% ＋ 20% ＝ 40%，認為邊長剩 60%（3/5）、面積剩 9/25，且誤以為加回 40% 成 140% 即可還原。",
        "D": "忘記共縮小了「兩次」，還原倍率只算了一次 1 ÷ 0.8 ＝ 125%。",
        "C": "沒有算面積平方，直接把兩次縮小後的「邊長倍率」16/25 誤當成面積倍率。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "連續縮放倍率相乘：0.8 × 0.8 ＝ 0.64（即 16/25）",
        "還原放大倍率 ＝ 1 ÷ 累計邊長倍率（1 ÷ 0.64 ＝ 1.5625 ＝ 156.25%）"
      ],
      "conceptCompare": "為什麼按完 80% 再按 120% 不能回到原圖？因為 0.8 × 1.2 ＝ 0.96，會比原圖還小 4%！基準量變了，還原必須用「乘除倒數」而非加減。",
      "examVariations": "實務上影印機沒有小數點輸入鍵時，可以先按一次 125% 放大，再對印出的紙按第二次 125% 放大，就能精準還原！"
    }
  },
  {
    "id": "U07-S3-O-034",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "category": "水庫面積 1：50000 轉平方公里",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（比例尺與平方公里）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "在一張標有線段比例尺的地圖上，每 1 小格長 1 公分，連續 2 小格共 2 公分代表實際 1 公里（即數值比例尺 1：50000）。這張地圖上某座水庫的面積是 8 平方公分，請問這座水庫的實際面積是多少平方公里？",
    "options": [
      {
        "key": "A",
        "text": "2 平方公里",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "8 平方公里",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "4 平方公里",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "2000000 平方公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "8 * (50000 / 100000) * (50000 / 100000)",
      "expect": "2"
    },
    "explanation": {
      "examPurpose": "測驗學生由「圖上 2 公分 ＝ 1 公里」讀出圖上 1 公分代表 0.5 公里，並進一步計算 1 平方公分對應的平方公里數（0.5 × 0.5 ＝ 0.25 平方公里）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：線段比例尺上「2 公分代表 1 公里」，所以圖上 1 公分代表實際 1 ÷ 2 ＝ 0.5 公里。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"165\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><text x=\"30\" y=\"32\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">線段比例尺（每格圖上 1 公分）：</text><rect x=\"30\" y=\"46\" width=\"60\" height=\"12\" fill=\"#1e293b\" stroke=\"#1e293b\"/><rect x=\"90\" y=\"46\" width=\"60\" height=\"12\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">0</text><text x=\"90\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">0.5</text><text x=\"150\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">1 公里</text><rect x=\"30\" y=\"96\" width=\"48\" height=\"48\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"54\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">圖上</text><text x=\"54\" y=\"133\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">1 平方公分</text><text x=\"92\" y=\"124\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">＝ 0.5 公里 × 0.5 公里 ＝ 0.25 平方公里</text><rect x=\"210\" y=\"22\" width=\"232\" height=\"66\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#059669\"/><text x=\"326\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\">水庫圖上面積 8 平方公分</text><text x=\"326\" y=\"72\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">8 × 0.25 ＝ 2 平方公里</text></svg>",
          "caption": "圖解：先由 2 公分 ＝ 1 公里算出 1 公分 ＝ 0.5 公里，再乘平方求單位面積。"
        },
        {
          "type": "eq",
          "expr": "0.5 × 0.5 ＝ 0.25",
          "unit": "平方公里"
        },
        {
          "type": "eq",
          "expr": "8 × 0.25 ＝ 2",
          "unit": "平方公里"
        },
        {
          "type": "answer",
          "text": "答：這座水庫的實際面積是 2 平方公里"
        }
      ],
      "insight": "圖上 1 公分 ＝ 0.5 公里，所以圖上 1 平方公分 ＝ 0.5 × 0.5 ＝ 0.25 平方公里（即 1/4 平方公里），8 平方公分就是 8 ÷ 4 ＝ 2 平方公里！",
      "distractorAnalysis": {
        "B": "看錯線段比例尺的標示，把 2 格共 2 公分標示的「1 公里」當成「每 1 公分代表 1 公里」，算出 8 × 1 × 1 ＝ 8 平方公里。",
        "D": "算出實際面積為 2000000 平方公尺後，忘記把平方公尺除以 1000000 換算為平方公里。",
        "C": "求出 1 公分代表 0.5 公里後，忘記面積需要平方（0.5 × 0.5），誤直接用 8 × 0.5 ＝ 4 平方公里。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公里 ＝ 1000 公尺 ＝ 100000 公分",
        "1 平方公里 ＝ 1000 公尺 × 1000 公尺 ＝ 1000000 平方公尺 ＝ 100 公頃"
      ],
      "conceptCompare": "換成公里再平方（0.5 × 0.5 ＝ 0.25）可以避開 50000 × 50000 ＝ 2500000000 平方公分那種超多 0 的計算陷阱。",
      "examVariations": "若題目最後改問「是多少公頃？」，因為 1 平方公里 ＝ 100 公頃，2 × 100 ＝ 200 公頃。"
    }
  },
  {
    "id": "U07-RV-O-035",
    "legacyId": null,
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "長方體與正方體表面積體積縮放",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（立體形體表面積與容積縮放）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "一個木製長方體無蓋水盒，工匠把它所有的長、寬、高與盒壁厚度都等比例縮小為原來的 1/2 倍，做成一個迷你模型。請問迷你模型的「表面積」與「裝水容積」分別是原來水盒的幾分之幾？",
    "options": [
      {
        "key": "A",
        "text": "表面積為 1/4，容積為 1/8",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "表面積為 1/8，容積為 1/8",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "C",
        "text": "表面積為 1/4，容積為 1/6",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "表面積為 1/2，容積為 1/4",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(1/2) * (1/2) * (1/2)",
      "expect": "1/8",
      "extraChecks": [
        {
          "expr": "(1/2) * (1/2)",
          "expect": "1/4"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生將二維縮放推廣到三維立體圖形的能力：區分表面積屬於「面積（二次方）」與容積／體積屬於「立體空間（三次方）」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：長方體的每個面都是長方形。當長、寬、高都縮成原來的 1/2 倍時，每個面的面積都變成 1/2 × 1/2 ＝ 1/4 倍，因此總表面積也是原來的 1/4。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"165\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><polygon points=\"32,54 112,54 136,34 56,34\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"32\" y=\"54\" width=\"80\" height=\"64\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"112,54 136,34 136,98 112,118\" fill=\"#fcd34d\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"72\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">原長方體盒（1 倍）</text><path d=\"M 150 76 L 184 76\" stroke=\"#2563eb\" stroke-width=\"2.5\" fill=\"none\"/><polygon points=\"184,72 192,76 184,80\" fill=\"#2563eb\"/><text x=\"170\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">長寬高</text><text x=\"170\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">× 1/2</text><polygon points=\"204,76 244,76 256,66 216,66\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"204\" y=\"76\" width=\"40\" height=\"32\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"244,76 256,66 256,98 244,108\" fill=\"#93c5fd\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"228\" y=\"138\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">模型（1/2 倍）</text><rect x=\"278\" y=\"28\" width=\"164\" height=\"108\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"290\" y=\"56\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">表面積（兩個維度）：</text><text x=\"290\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">1/2 × 1/2 ＝ 1/4</text><text x=\"290\" y=\"102\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">裝水容積（三個維度）：</text><text x=\"290\" y=\"122\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">1/2 × 1/2 × 1/2 ＝ 1/8</text></svg>",
          "caption": "圖解：立體盒邊長縮為 1/2 時，表面積是二次方縮小（1/4），容積是三次方縮小（1/8）。"
        },
        {
          "type": "eq",
          "expr": "1/2 × 1/2 ＝ 1/4",
          "unit": ""
        },
        {
          "type": "eq",
          "expr": "1/2 × 1/2 × 1/2 ＝ 1/8",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：裝水容積＝內部長 × 寬 × 高，三個邊長各乘 1/2，所以容積變成原來的 1/2 × 1/2 × 1/2 ＝ 1/8。"
        },
        {
          "type": "answer",
          "text": "答：表面積為 1/4，容積為 1/8"
        }
      ],
      "insight": "維度記憶口訣：長度一次方（1/2）、表面積二次方（1/4）、體積容積三次方（1/8）！",
      "distractorAnalysis": {
        "B": "看到題目講立體盒子，就誤以為表面積和容積一樣都要乘三次 1/2 變成 1/8。",
        "C": "三個 1/2 相乘時誤把分母相加（2 ＋ 2 ＋ 2 ＝ 6），把 1/8 錯算成 1/6。",
        "D": "把表面積當作一次方（1/2）、容積當作二次方（1/4），全部少乘了一個 1/2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "立體相似縮放：邊長（稜長）× 縮放倍率",
        "表面積 × (縮放倍率 × 縮放倍率)；體積／容積 × (縮放倍率 × 縮放倍率 × 縮放倍率)"
      ],
      "conceptCompare": "就算是「無蓋」水盒只有 5 個面，因為這 5 個面的面積各自都縮小為 1/4，加起來的總表面積依然是原來的 1/4。",
      "examVariations": "如果是把正方體邊長放大為原來的 3 倍，表面積會變為 3 × 3 ＝ 9 倍，體積會變為 3 × 3 × 3 ＝ 27 倍！"
    }
  },
  {
    "id": "U07-S2-O-036",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大與縮小圖",
    "category": "等高線地形比例尺與行進時間",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（等高線圖示比例尺與速率）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一張等高線登山地圖的圖示比例尺畫成連續 3 小格（每小格圖上長 1 公分，全長 3 公分標示為 0 到 4.5 公里）。小凱在圖上量得甲步道長 2.4 公分、乙步道長 3.6 公分。如果他以每小時 3 公里的平均速度走完這兩條步道，共需要幾小時？",
    "options": [
      {
        "key": "A",
        "text": "3000 小時",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "9 小時",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "3 小時",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1 1/3 小時",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(2.4 + 3.6) * (4.5 / 3) / 3",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "測驗學生判讀多格圖示比例尺（先算出每 1 公分對應多少公里），再合併計算兩段路線圖長並結合速率公式求登山時間。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圖示比例尺 3 格共 3 公分標示為 4.5 公里，先除以 3 算出「圖上 1 公分」代表實際幾公里。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"175\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><ellipse cx=\"105\" cy=\"85\" rx=\"72\" ry=\"42\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><ellipse cx=\"105\" cy=\"85\" rx=\"46\" ry=\"26\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><polyline points=\"42,95 95,78 158,64\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><text x=\"68\" y=\"76\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">甲 2.4 公分</text><text x=\"125\" y=\"56\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">乙 3.6 公分</text><line x1=\"95\" y1=\"78\" x2=\"158\" y2=\"64\" stroke=\"#e11d48\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><rect x=\"210\" y=\"24\" width=\"56\" height=\"12\" fill=\"#1e293b\" stroke=\"#1e293b\"/><rect x=\"266\" y=\"24\" width=\"56\" height=\"12\" fill=\"#ffffff\" stroke=\"#1e293b\"/><rect x=\"322\" y=\"24\" width=\"56\" height=\"12\" fill=\"#1e293b\" stroke=\"#1e293b\"/><text x=\"210\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">0</text><text x=\"266\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">1.5</text><text x=\"322\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">3</text><text x=\"378\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">4.5 公里</text><rect x=\"206\" y=\"70\" width=\"234\" height=\"82\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"218\" y=\"93\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">1 公分 ＝ 4.5 ÷ 3 ＝ 1.5 公里</text><text x=\"218\" y=\"116\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">圖長和 ＝ 2.4 ＋ 3.6 ＝ 6 公分</text><text x=\"218\" y=\"139\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">實距 6 × 1.5 ＝ 9 公里 ➔ 3 小時</text></svg>",
          "caption": "圖解：3 格共 4.5 公里代表每 1 公分 ＝ 1.5 公里，兩步道合併算總長再除以時速。"
        },
        {
          "type": "eq",
          "expr": "4.5 ÷ 3 ＝ 1.5",
          "unit": "公里"
        },
        {
          "type": "eq",
          "expr": "(2.4 ＋ 3.6) × 1.5 ＝ 6 × 1.5 ＝ 9",
          "unit": "公里"
        },
        {
          "type": "eq",
          "expr": "9 ÷ 3 ＝ 3",
          "unit": "小時"
        },
        {
          "type": "answer",
          "text": "答：共需要 3 小時"
        }
      ],
      "insight": "先將 2.4 ＋ 3.6 加總成整數 6 公分，再乘以每公分 1.5 公里，計算會比分別乘完再相加更快更準確！",
      "distractorAnalysis": {
        "B": "誤讀圖示比例尺，把全長 3 公分標示的「4.5 公里」直接當成「每 1 公分代表 4.5 公里」，錯算成 6 × 4.5 ÷ 3 ＝ 9 小時。",
        "D": "圖長換算實距時搞反乘除方向，誤把 6 除以 1.5 算成 4 公里，再除以 3 得 1 1/3 小時。",
        "A": "把 9 公里換算成 9000 公尺後，卻忘記把時速 3 公里也換成公尺，直接拿 9000 ÷ 3 算成 3000 小時。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "每小格（1 公分）實際距離 ＝ 總標示距離 ÷ 格數",
        "行進時間 ＝ 總實際距離 ÷ 平均時速"
      ],
      "conceptCompare": "看到圖示比例尺一定要確認「標示的數字是全段總長還是單格長度」，這裡 3 格終點標 4.5 公里，必須先除以 3。",
      "examVariations": "如果題目問這張地圖的數值比例尺是多少？1 公分：1.5 公里 ＝ 1 公分：150000 公分 ＝ 1：150000。"
    }
  },
  {
    "id": "U07-S3-O-037",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "category": "地圖誤縮放 20% 修正真實比例尺",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（縮印地圖校正還原）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一張原本比例尺為 1：10000 的都市計畫圖，因為印表機設定錯誤，整張地圖被縮小成 80%（邊長少 20%）列印出來。小明在這張印錯的縮印圖上，量得一條街道長 5 公分，請問這條街道的實際長度是多少公尺？",
    "options": [
      {
        "key": "A",
        "text": "400 公尺",
        "trapCode": "U07_DUAL_MAP_RATIO_ERR"
      },
      {
        "key": "B",
        "text": "62500 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "600 公尺",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "D",
        "text": "625 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(5 / 0.8) * 10000 / 100",
      "expect": "625"
    },
    "explanation": {
      "examPurpose": "測驗學生處理「原圖被不當縮印」時的雙重比例修正能力：能先將縮印圖的量測長度除以 0.8 還原回原圖長度，再乘以原比例尺換算實際距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：印錯的圖是原圖的 80%（0.8 倍），也就是「原圖長度 × 0.8 ＝ 縮印圖上的 5 公分」。反推原圖上的街道長度 ＝ 5 ÷ 0.8 ＝ 6.25 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"165\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"20\" y=\"24\" width=\"135\" height=\"76\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"87\" y=\"46\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">原設計圖（1：10000）</text><line x1=\"40\" y1=\"72\" x2=\"135\" y2=\"72\" stroke=\"#2563eb\" stroke-width=\"4\"/><text x=\"87\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">原圖 6.25 公分</text><path d=\"M 162 62 L 206 62\" stroke=\"#e11d48\" stroke-width=\"2.5\" fill=\"none\"/><polygon points=\"206,58 214,62 206,66\" fill=\"#e11d48\"/><text x=\"186\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#be123c\">誤印 80%</text><rect x=\"220\" y=\"30\" width=\"116\" height=\"64\" rx=\"8\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"278\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#9f1239\">縮印圖（1：12500）</text><line x1=\"240\" y1=\"72\" x2=\"316\" y2=\"72\" stroke=\"#e11d48\" stroke-width=\"4\"/><text x=\"278\" y=\"87\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">量得 5 公分</text><rect x=\"348\" y=\"24\" width=\"96\" height=\"76\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#059669\"/><text x=\"396\" y=\"48\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">1 公分 ＝</text><text x=\"396\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\">125 公尺</text><text x=\"396\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">5×125 ＝ 625</text><text x=\"230\" y=\"135\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">還原原圖：5 ÷ 0.8 ＝ 6.25 公分 ➔ 6.25 × 100 公尺 ＝ 625 公尺</text></svg>",
          "caption": "圖解：地圖縮印成 80% 後，比例尺會從 1：10000 變成 1：12500。"
        },
        {
          "type": "eq",
          "expr": "5 ÷ 0.8 ＝ 6.25",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "5",
          "divisor": "0.8",
          "mode": "exact",
          "note": "小數除法：5 ÷ 0.8 化為 50 ÷ 8 ＝ 6.25 公分"
        },
        {
          "type": "eq",
          "expr": "6.25 × 10000 ÷ 100 ＝ 625",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：這條街道的實際長度是 625 公尺"
        }
      ],
      "insight": "也可以直接算「誤印圖的真實比例尺」：原圖 1 公分 ＝ 100 公尺，縮印後 0.8 公分就代表 100 公尺，所以縮印圖上 1 公分 ＝ 100 ÷ 0.8 ＝ 125 公尺，5 公分就是 5 × 125 ＝ 625 公尺！",
      "distractorAnalysis": {
        "A": "誤將縮印後的 5 公分再乘以 80% 變成 4 公分，算出 4 × 100 ＝ 400 公尺，把縮小方向算反了。",
        "C": "看到地圖少印了 20%，就誤以為直接加回 20%（5 × 1.2 ＝ 6 公分）就能還原，錯算成 600 公尺。",
        "B": "正確算出實際長度為 62500 公分後，忘記除以 100 換算成公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "縮印圖真實比例尺分母 ＝ 原比例尺分母 ÷ 縮印倍率",
        "還原原圖長 ＝ 縮印圖量得長度 ÷ 縮印倍率"
      ],
      "conceptCompare": "地圖印小了，代表同一段實際距離在地圖上變短，反過來同樣 1 公分在縮印圖上能涵蓋的實際距離就「變長了」（從 100 公尺變成 125 公尺）。",
      "examVariations": "若印表機不小心設定成「放大成 125%」印出，在錯印圖上量到 5 公分，實際長度會是 5 ÷ 1.25 × 100 ＝ 400 公尺。"
    }
  },
  {
    "id": "U07-RV-O-038",
    "legacyId": null,
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "三角形各邊中點連線層層面積",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（三角形中點連線巢狀縮小）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "有一個面積為 160 平方公分的大三角形（第 1 層）。連接這個三角形三條邊的中點，會在中央圍出第 2 層小三角形；接著再連接第 2 層三角形三邊的中點，圍出第 3 層小三角形；依此類推，連續連接 3 次中點後形成「第 4 層」小三角形。請問第 4 層小三角形的面積是多少平方公分？",
    "options": [
      {
        "key": "A",
        "text": "20 平方公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "10 平方公分",
        "trapCode": "U07_GRID_COUNT_ERR"
      },
      {
        "key": "C",
        "text": "2.5 平方公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "0.625 平方公分",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "160 / (4 * 4 * 4)",
      "expect": "2.5"
    },
    "explanation": {
      "examPurpose": "測驗學生發現「連接三角形三邊中點會將三角形平分成 4 個全等小三角形（邊長為 1/2、面積為 1/4）」，並準確推算第 4 層的縮放次數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：連接大三角形三邊的中點，新圍出的小三角形每條邊都是原本的 1/2 倍，同時把原三角形剛好切成 4 個面積一樣的小三角形。因此每連一次中點，中央三角形面積就縮為 1/4 倍。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"175\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><polygon points=\"115,18 35,148 195,148\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><polygon points=\"75,83 155,83 115,148\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><polygon points=\"115,83 95,115.5 135,115.5\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"1.8\"/><polygon points=\"105,99.2 125,99.2 115,115.5\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1.5\"/><rect x=\"224\" y=\"20\" width=\"216\" height=\"134\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"236\" y=\"46\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">第 1 層（原圖）：160 平方公分</text><text x=\"236\" y=\"72\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">第 2 層（÷ 4）：40 平方公分</text><text x=\"236\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">第 3 層（÷ 4）：10 平方公分</text><text x=\"236\" y=\"124\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">第 4 層（÷ 4）：2.5 平方公分</text><text x=\"236\" y=\"144\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">第 1 ➔ 第 4 層，共縮小 3 次！</text></svg>",
          "caption": "圖解：每連接一次三邊中點，邊長縮半、面積縮為 1/4；到第 4 層共除以三次 4。"
        },
        {
          "type": "eq",
          "expr": "160 × 1/4 × 1/4 × 1/4 ＝ 160 ÷ 64 ＝ 2.5",
          "unit": "平方公分"
        },
        {
          "type": "text",
          "text": "第 2 步：逐層檢查確認沒有算錯層數：第 1 層 160 ➔ 第 2 層 40 ➔ 第 3 層 10 ➔ 第 4 層 2.5 平方公分。"
        },
        {
          "type": "answer",
          "text": "答：第 4 層小三角形的面積是 2.5 平方公分"
        }
      ],
      "insight": "從第 1 層數到第 4 層只經過「3 次」間隔（4 − 1 ＝ 3），所以是除以 4 三次（即除以 64），不是除以 4 四次！",
      "distractorAnalysis": {
        "A": "知道邊長每次變 1/2，卻誤以為面積也只跟著除以 2，算成 160 ÷ 2 ÷ 2 ÷ 2 ＝ 20 平方公分。",
        "B": "沒有算清楚層數，少除了一次 4，算成第 3 層的面積 160 ÷ 16 ＝ 10 平方公分。",
        "D": "看到題目寫「第 4 層」就直接除以 4 四次，多除了一次變成第 5 層的面積 0.625 平方公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "中點連線性質：三邊中點連線所圍小三角形，邊長為原圖 1/2、面積為原圖 1/4",
        "第 4 層面積 ＝ 原面積 ÷ (4 × 4 × 4)"
      ],
      "conceptCompare": "這種結構叫做「謝爾賓斯基」類型的等比縮放，層數與縮放次數之間永遠差 1（像植樹間隔一樣，第 1 層到第 4 層有 3 次縮放）。",
      "examVariations": "若題目改問第 4 層的周長是第 1 層的幾分之幾？每次邊長變 1/2，連縮 3 次後周長為 1/2 × 1/2 × 1/2 ＝ 1/8。"
    }
  },
  {
    "id": "U07-S3-O-039",
    "legacyId": null,
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "category": "雙地圖面積差與公頃綜合換算",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（雙比例尺面積差與公頃）",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "同一塊森林保護區分別繪製在比例尺 1：10000 的甲地圖與比例尺 1：25000 的乙地圖上。已知這塊保護區在甲地圖上的面積比在乙地圖上的面積多 21 平方公分，請問這塊森林保護區的實際面積是多少公頃？（提示：1 公頃 ＝ 10000 平方公尺）",
    "options": [
      {
        "key": "A",
        "text": "14 公頃",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "35 公頃",
        "trapCode": "U07_DUAL_MAP_RATIO_ERR"
      },
      {
        "key": "C",
        "text": "25 公頃",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2500 公頃",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "21 / (1 - (10000 / 25000) * (10000 / 25000))",
      "expect": "25"
    },
    "explanation": {
      "examPurpose": "測驗學生在雙地圖面積差的高難度綜合題中，透過「比例尺比 ➔ 圖上長度比 ➔ 圖上面積平方比 ➔ 差倍求原圖面積 ➔ 公頃換算」五步解題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先比較兩張地圖的圖上長度比例。同一段實距，在甲圖（1：10000）與乙圖（1：25000）上的長度比為 1/10000 ： 1/25000 ＝ 25000 ： 10000 ＝ 5 ： 2。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"175\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"24\" y=\"28\" width=\"90\" height=\"90\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"42\" y1=\"28\" x2=\"42\" y2=\"118\" stroke=\"#93c5fd\"/><line x1=\"60\" y1=\"28\" x2=\"60\" y2=\"118\" stroke=\"#93c5fd\"/><line x1=\"78\" y1=\"28\" x2=\"78\" y2=\"118\" stroke=\"#93c5fd\"/><line x1=\"96\" y1=\"28\" x2=\"96\" y2=\"118\" stroke=\"#93c5fd\"/><line x1=\"24\" y1=\"46\" x2=\"114\" y2=\"46\" stroke=\"#93c5fd\"/><line x1=\"24\" y1=\"64\" x2=\"114\" y2=\"64\" stroke=\"#93c5fd\"/><line x1=\"24\" y1=\"82\" x2=\"114\" y2=\"82\" stroke=\"#93c5fd\"/><line x1=\"24\" y1=\"100\" x2=\"114\" y2=\"100\" stroke=\"#93c5fd\"/><text x=\"62\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">甲 1：10000</text><text x=\"62\" y=\"153\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">面積 5×5 ＝ 25 份</text><rect x=\"148\" y=\"82\" width=\"36\" height=\"36\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"166\" y1=\"82\" x2=\"166\" y2=\"118\" stroke=\"#fda4af\"/><line x1=\"148\" y1=\"100\" x2=\"184\" y2=\"100\" stroke=\"#fda4af\"/><text x=\"162\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#be123c\">乙 1：25000</text><text x=\"162\" y=\"153\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#9f1239\">面積 2×2 ＝ 4 份</text><rect x=\"216\" y=\"24\" width=\"226\" height=\"128\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"228\" y=\"48\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">長度比 ＝ 5：2 ➔ 面積比 ＝ 25：4</text><text x=\"228\" y=\"74\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">相差 25 − 4 ＝ 21 份 ＝ 21 平方公分</text><text x=\"228\" y=\"100\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">1 份 ＝ 1 ➔ 甲圖面積 ＝ 25 平方公分</text><text x=\"228\" y=\"126\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">甲圖 1 平方公分 ＝ 1 公頃 ➔ 25 公頃</text></svg>",
          "caption": "圖解：甲乙兩圖面積比為 25：4，相差的 21 份剛好等於題目給的 21 平方公分。"
        },
        {
          "type": "eq",
          "expr": "5 × 5 − 2 × 2 ＝ 25 − 4 ＝ 21",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "21 ÷ 21 × 25 ＝ 25",
          "unit": "平方公分"
        },
        {
          "type": "text",
          "text": "第 2 步：在甲地圖（1：10000）上，1 公分 ＝ 10000 公分 ＝ 100 公尺，所以圖上 1 平方公分 ＝ 100 × 100 ＝ 10000 平方公尺 ＝ 1 公頃。因此 25 平方公分對應實際 25 公頃！"
        },
        {
          "type": "answer",
          "text": "答：森林保護區的實際面積是 25 公頃"
        }
      ],
      "insight": "甲圖比例尺剛好是 1：10000（1 公分 ＝ 100 公尺），圖上「每 1 平方公分 ＝ 1 公頃」！用乙圖驗算：乙圖 4 平方公分，每 1 公分 ＝ 250 公尺，4 × 250 × 250 ÷ 10000 ＝ 25 公頃，完全吻合！",
      "distractorAnalysis": {
        "B": "求出兩張地圖的長度比為 5：2 後，忘記平方成面積比 25：4，直接用 5 − 2 ＝ 3 份 ＝ 21 平方公分，算出甲圖 5 × 7 ＝ 35 公頃。",
        "D": "算出實際面積為 250000 平方公尺後，誤把 1 公頃當成 100 平方公尺，算成 250000 ÷ 100 ＝ 2500 公頃。",
        "A": "知道甲圖長度是乙圖的 2.5 倍，卻誤把 2.5 − 1 ＝ 1.5 倍當成面積差倍數，算成 21 ÷ 1.5 ＝ 14 公頃。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同一實物在兩張地圖上的圖上長度比 ＝ 兩比例尺的反比",
        "圖上面積比 ＝ 圖上長度比的平方"
      ],
      "conceptCompare": "這題如果硬設真實面積去算會遇到巨大零頭；先用「長度比 5：2 ➔ 面積比 25：4」的份數法，心算就能解開！",
      "examVariations": "若題目問兩圖面積「總和」是 58 平方公分，則 25 ＋ 4 ＝ 29 份，每份 2 平方公分，甲圖面積為 50 平方公分 ＝ 50 公頃。"
    }
  },
  {
    "id": "U07-RV-O-040",
    "legacyId": null,
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "長方形外框加寬不相似",
    "batch": "奧數天梯",
    "source": "Unit07 奧數進階（等寬邊框相似性辨析）",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一個長 10 公分、寬 6 公分的長方形相框內框，在它的四條邊向外等寬各加上 2 公分的木框（上、下、左、右各外擴 2 公分），形成一個大長方形外框。請問：外框的「寬放大倍數」與「長放大倍數」相差幾倍？這個大長方形外框是否為內框的放大圖？",
    "options": [
      {
        "key": "A",
        "text": "相差 0 倍，是放大圖",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "B",
        "text": "相差 4/15 倍，不是放大圖",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "相差 1/15 倍，是放大圖",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "D",
        "text": "相差 2/15 倍，不是放大圖",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(6 + 2 * 2) / 6 - (10 + 2 * 2) / 10",
      "expect": "4/15"
    },
    "explanation": {
      "examPurpose": "測驗學生突破「四邊同加相同寬度就是放大圖」的常見迷思：放大圖必須「各邊同乘相同倍數」，而非「各邊同加相同長度」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：四周等寬外擴 2 公分時，左右兩邊各多 2 公分，所以外框長 ＝ 10 ＋ 2 × 2 ＝ 14 公分；上下兩邊各多 2 公分，所以外框寬 ＝ 6 ＋ 2 × 2 ＝ 10 公分。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"175\" rx=\"10\" fill=\"#ffffff\" stroke=\"#cbd5e1\"/><rect x=\"30\" y=\"25\" width=\"168\" height=\"120\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.5\"/><rect x=\"54\" y=\"49\" width=\"120\" height=\"72\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"114\" y=\"88\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">內框：長 10、寬 6</text><text x=\"114\" y=\"161\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">外框：長 14、寬 10</text><text x=\"114\" y=\"41\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">上加 2</text><text x=\"114\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">下加 2</text><text x=\"42\" y=\"88\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#e11d48\">＋2</text><text x=\"186\" y=\"88\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#e11d48\">＋2</text><rect x=\"216\" y=\"24\" width=\"226\" height=\"126\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"228\" y=\"48\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">長放大：14 ÷ 10 ＝ 7/5 倍</text><text x=\"228\" y=\"74\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">寬放大：10 ÷ 6 ＝ 5/3 倍</text><text x=\"228\" y=\"100\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">相差：5/3 − 7/5 ＝ 4/15 倍</text><text x=\"228\" y=\"126\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">倍率不相等 ➔ 不是放大圖</text></svg>",
          "caption": "圖解：等寬邊框上下左右各加 2 公分，長寬放大倍數不同，形狀變胖了。"
        },
        {
          "type": "eq",
          "expr": "(10 ＋ 2 × 2) ÷ 10 ＝ 14 ÷ 10 ＝ 7/5",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "(6 ＋ 2 × 2) ÷ 6 ＝ 10 ÷ 6 ＝ 5/3",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "5/3 − 7/5 ＝ 25/15 − 21/15 ＝ 4/15",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：外框的寬放大了 5/3 倍（約 1.67 倍），長只放大 7/5 倍（1.4 倍），兩者相差 4/15 倍，倍率不一致，所以外框「不是」內框的放大圖！"
        },
        {
          "type": "answer",
          "text": "答：相差 4/15 倍，不是放大圖"
        }
      ],
      "insight": "判斷長方形是不是放大圖，不能只看「四個角都是 90°」，必須檢查「長的倍數 ＝ 寬的倍數」！對原本不等長的邊同時「加」相同公分數，一定會破壞長寬比。",
      "distractorAnalysis": {
        "A": "陷入「各邊同加相同公分數就會相似」的迷思，直接以為倍率相差 0 倍且外框是放大圖。",
        "C": "看到外框與內框依然都是 90° 直角，就誤判為是放大圖，並把分數通分差算錯成 1/15 倍。",
        "D": "算外框長寬時忘記上下、左右各要加兩次 2 公分，只各加一次 2 算成 12 ÷ 10 ＝ 6/5 與 8 ÷ 6 ＝ 4/3，得出相差 2/15 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "真正放大圖條件：對應角相等，且所有對應邊長「同乘」相同倍數",
        "等寬木框陷阱：外長 ＝ 內長 ＋ 2 × 框寬，外寬 ＝ 內寬 ＋ 2 × 框寬"
      ],
      "conceptCompare": "什麼情況下等寬外擴後還是放大圖？只有原本內框是「正方形」（長＝寬）時，左右上下各加 2 公分才會維持長寬相等！只要內框長 ≠ 寬，等寬外框就一定不相似。",
      "examVariations": "若想讓寬度 6 公分的邊外擴 2 公分變成 10 公分（5/3 倍），且外框「真正是內框的放大圖」，長 10 公分的邊左右共要擴張多少公分？10 × 5/3 ＝ 50/3 公分，左右各需多 (50/3 − 10) ÷ 2 ＝ 3 1/3 公分！"
    }
  },
  {
    "id": "U07-S1-M-041",
    "legacyId": "u07_m01",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "角度不變",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "把一個三角形畫成 2 倍的放大圖後，它對應角的角度會怎麼變化？",
    "options": [
      {
        "key": "A",
        "text": "完全不變",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "變成原來的一半",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "變成原來的 2 倍",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "D",
        "text": "變成原來的 4 倍",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握放大與縮小圖「只改大小、不改形狀」的性質，理解對應角永遠相等。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：放大圖與原圖的「形狀」完全一樣，只是邊長同比例拉長。"
        },
        {
          "type": "eq",
          "expr": "放大後對應角 ＝ 原圖對應角（維持 1 倍）",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：例如直角三角形放大 2 倍後，直角依然是 90°，不會變成 180°；三角形三個內角的和永遠是 180°。"
        },
        {
          "type": "answer",
          "text": "答：完全不變"
        }
      ],
      "insight": "判斷是不是真正的放大圖或縮小圖，兩個條件缺一不可：對應邊成比例，而且「對應角完全相等」。",
      "distractorAnalysis": {
        "B": "把「放大 2 倍」與「縮小 1/2」搞混，且誤以為角度也會跟著除以 2。",
        "D": "誤把面積的平方倍（2 × 2 ＝ 4）直接套用到角度上。",
        "C": "誤以為整個圖形放大 2 倍，連角度也要乘以 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大與縮小圖性質：對應邊長成相同倍數，對應角角度完全不變"
      ],
      "conceptCompare": "長度（邊長、高、周長）會跟著倍數放大或縮小，但「角度」看的是兩條邊張開的程度，圖形沒歪斜就不會變。",
      "examVariations": "段考是非題常問「將 60° 的角用 3 倍放大鏡看，角度會變成 180° 嗎？」，答案是不會，依然是 60°。"
    }
  },
  {
    "id": "U07-S3-M-042",
    "legacyId": "u07_m02",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "比例尺意義",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "比例尺 1：1000 的地圖上，圖上的 1 公分代表實際距離多長？",
    "options": [
      {
        "key": "A",
        "text": "1000 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "10 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "100 公尺",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1 公尺",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "1000 / 100",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗學生是否知道比例尺前後項必須使用「相同單位（公分）」，並能正確把公分換算成公尺。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1：1000 表示「圖上 1 公分」相當於「實際 1000 公分」。"
        },
        {
          "type": "eq",
          "expr": "1000 ÷ 100 ＝ 10",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：因為 1 公尺 ＝ 100 公分，所以把 1000 公分去掉兩個 0，就是 10 公尺。"
        },
        {
          "type": "answer",
          "text": "答：10 公尺"
        }
      ],
      "insight": "比例尺沒有寫單位時，預設前項與後項單位完全相同（圖上 1 公分對實際 1000 公分），千萬不要直接把後項當成公尺。",
      "distractorAnalysis": {
        "A": "最常見的單位陷阱，誤把「1000 公分」直接讀成「1000 公尺」。",
        "C": "公分換算成公尺時少去掉一個 0，錯算成 100 公尺。",
        "D": "除以 1000 算成 1 公尺，把換公尺和換公里搞混。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公尺 ＝ 100 公分（公分換公尺，去掉 2 個 0）"
      ],
      "conceptCompare": "看到 1：1000，心裡要先補上單位「1 公分：1000 公分」，接著再換成公尺或公里，保證不會錯。",
      "examVariations": "段考常考「比例尺 1：50000 的地圖上，1 公分代表實際幾公尺？」，先把 50000 公分去掉兩個 0 得 500 公尺。"
    }
  },
  {
    "id": "U07-S1-M-043",
    "legacyId": "u07_m03",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "周長倍數",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "一個多邊形畫成原來的 3 倍放大圖，它的周長會變成原來的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "3 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "6 倍",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "9 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "D",
        "text": "不變",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "3",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "測驗學生能否區分「周長（長度）」與「面積」在放大時的倍率差異，確認長度與邊長同倍數變化。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：放大 3 倍時，每一條邊的長度都變成原來的 3 倍。"
        },
        {
          "type": "eq",
          "expr": "新周長 ＝ 原周長 × 3",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：周長只是把所有邊長一條一條加起來，所以總和也只會變成原來的 3 倍。"
        },
        {
          "type": "answer",
          "text": "答：3 倍"
        }
      ],
      "insight": "只要問的是「長度類」的量（邊長、周長、對角線、高），放大幾倍就跟著變幾倍，不需要平方。",
      "distractorAnalysis": {
        "B": "誤用 3 ＋ 3 ＝ 6 或 3 × 2 ＝ 6 計算倍數。",
        "C": "把「面積變成 3 × 3 ＝ 9 倍」的規則誤用到周長上。",
        "D": "把「角度不變」的性質誤記成周長也不變。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "線性長度規律：邊長放大幾倍，周長就放大幾倍"
      ],
      "conceptCompare": "周長是「一維的線段總長」，單位是公分；面積是「二維的平面大小」，單位是平方公分，所以面積才要乘兩次倍數。",
      "examVariations": "常出複合選填題：長方形放大 3 倍，周長變幾倍（3 倍）？面積變幾倍（9 倍）？"
    }
  },
  {
    "id": "U07-S1-M-044",
    "legacyId": "u07_m04",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "面積平方倍",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "把正方形的邊長放大成原來的 2 倍，面積會變成原來的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "2 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "不變",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "8 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "D",
        "text": "4 倍",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "2 * 2",
      "expect": "4"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解正方形邊長放大 2 倍時，橫向與縱向同時放大 2 倍，面積會變為 4 倍。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"45\" y=\"58\" width=\"48\" height=\"48\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"69\" y=\"87\" font-size=\"14\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">1 格</text><text x=\"69\" y=\"128\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">原圖（邊長 1 份）</text><text x=\"152\" y=\"86\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">放大 2 倍 ➔</text><rect x=\"210\" y=\"20\" width=\"48\" height=\"48\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"258\" y=\"20\" width=\"48\" height=\"48\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"210\" y=\"68\" width=\"48\" height=\"48\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><rect x=\"258\" y=\"68\" width=\"48\" height=\"48\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"234\" y=\"49\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">1</text><text x=\"282\" y=\"49\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">2</text><text x=\"234\" y=\"97\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">3</text><text x=\"282\" y=\"97\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">4</text><text x=\"258\" y=\"138\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">長 2 格 × 寬 2 格 ＝ 4 格</text><text x=\"385\" y=\"72\" font-size=\"15\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">面積變成</text><text x=\"385\" y=\"94\" font-size=\"16\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">4 倍！</text></svg>",
          "caption": "左邊原正方形有 1 格；邊長放大 2 倍後，橫排 2 格、直排 2 格，總共拼出 4 格。"
        },
        {
          "type": "text",
          "text": "第 1 步：正方形的長和寬這兩個方向都各自放大成 2 倍。"
        },
        {
          "type": "eq",
          "expr": "2 × 2 ＝ 4",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：從方格切分圖可以一眼看出，大正方形裡面能擺進 4 個原正方形。"
        },
        {
          "type": "answer",
          "text": "答：4 倍"
        }
      ],
      "insight": "面積 ＝ 長 × 寬，兩個方向都要乘以倍數，所以邊長變 2 倍，面積會變 2 × 2 ＝ 4 倍。",
      "distractorAnalysis": {
        "A": "直接把邊長倍數當成面積倍數，忘記面積有長與寬兩個方向。",
        "C": "誤算成正方體的體積倍數（2 × 2 × 2 ＝ 8 倍）。",
        "B": "錯把「對應角角度不變」的性質套用到「面積」上。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "平面圖形面積倍數 ＝ 邊長倍數 × 邊長倍數"
      ],
      "conceptCompare": "周長只看一邊一圈相加（變 2 倍），面積是長乘寬（變 2 × 2 ＝ 4 倍），體積是長乘寬乘高（變 2 × 2 × 2 ＝ 8 倍）。",
      "examVariations": "段考應用題會給實際邊長（例如邊長 5 公分放大 2 倍），再問新面積是原面積的幾倍或相差幾平方公分。"
    }
  },
  {
    "id": "U07-S3-M-045",
    "legacyId": "u07_m05",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "比例尺詳細度",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "同樣大小的兩張紙，一張比例尺是 1：50000，另一張是 1：5000，哪一張畫得比較詳細（實物在紙上看起來比較大）？",
    "options": [
      {
        "key": "A",
        "text": "一樣詳細",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "無法判斷",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "1：50000 那一張",
        "trapCode": "U07_DUAL_MAP_RATIO_ERR"
      },
      {
        "key": "D",
        "text": "1：5000 那一張",
        "trapCode": null
      }
    ],
    "answer": "D",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "(1 / 5000) / (1 / 50000)",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗學生能否比較分數形式比例尺 1/5000 與 1/50000 的大小，理解大比例尺（縮得較少）畫面更精細。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"25\" y=\"25\" width=\"175\" height=\"95\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"112\" y=\"46\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">比例尺 1：50000</text><rect x=\"102\" y=\"64\" width=\"20\" height=\"14\" fill=\"#94a3b8\"/><text x=\"112\" y=\"104\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">1 公分裝 500 公尺（縮很大）</text><rect x=\"250\" y=\"25\" width=\"185\" height=\"95\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"342\" y=\"46\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">比例尺 1：5000</text><rect x=\"308\" y=\"56\" width=\"68\" height=\"32\" fill=\"#3b82f6\" rx=\"3\"/><text x=\"342\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">教室建築</text><text x=\"342\" y=\"106\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">1 公分裝 50 公尺（較大較清楚）</text></svg>",
          "caption": "左圖縮了 50000 倍，建築物縮成一小點；右圖只縮 5000 倍，建築物畫得比較大、看得比較清楚。"
        },
        {
          "type": "text",
          "text": "第 1 步：把比例尺換成每 1 公分代表的實際距離，立刻比較。"
        },
        {
          "type": "eq",
          "expr": "1：5000 ➔ 1 公分代表 50 公尺；1：50000 ➔ 1 公分代表 500 公尺",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：比值 1/5000 ＞ 1/50000，代表實物只被縮小 5000 倍，所以在紙上畫得比較大、街道細節比較清楚。"
        },
        {
          "type": "answer",
          "text": "答：1：5000 那一張"
        }
      ],
      "insight": "比例尺後項數字越大，代表縮小得越多，看到的範圍很廣但建築物很小；後項數字越小，反而是「大比例尺」，畫得越詳細。",
      "distractorAnalysis": {
        "A": "以為紙張一樣大，畫出來的詳細程度就一樣。",
        "B": "沒有把比例尺轉成「1 公分代表幾公尺」來比較。",
        "C": "被大數字 50000 騙到，誤以為數字大就畫得比較大。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比例尺比值越大（後項越小）➔ 縮得越少 ➔ 建築物越大越詳細"
      ],
      "conceptCompare": "地圖比例尺其實是分數「1/5000」和「1/50000」比大小，分母越小分數才越大！",
      "examVariations": "段考素養題常問「用相同大小的紙畫校園平面圖與台灣全島圖，哪一張比例尺比值比較大？」，答案是校園平面圖。"
    }
  },
  {
    "id": "U07-S1-M-046",
    "legacyId": "u07_m06",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "縮小面積",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "把一個正方形畫成原來的 1/3 倍縮小圖，縮小圖的面積是原來面積的幾分之幾？",
    "options": [
      {
        "key": "A",
        "text": "1/3",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "1/9",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1/6",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "3 倍",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(1 / 3) * (1 / 3)",
      "expect": "1/9"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解縮小圖的面積同樣遵守「倍數乘以倍數」規律，1/3 縮小圖面積變為 1/9。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><g transform=\"translate(55,18)\"><rect x=\"0\" y=\"0\" width=\"34\" height=\"34\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"2\"/><rect x=\"34\" y=\"0\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"68\" y=\"0\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"0\" y=\"34\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"34\" y=\"34\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"68\" y=\"34\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"0\" y=\"68\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"34\" y=\"68\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect x=\"68\" y=\"68\" width=\"34\" height=\"34\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"51\" y=\"122\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">原圖 3 × 3 ＝ 9 格</text></g><text x=\"285\" y=\"52\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">邊長各縮成原本的 1/3</text><text x=\"285\" y=\"82\" font-size=\"15\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">紅色只佔 9 格中的 1 格</text><text x=\"285\" y=\"110\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">1/3 × 1/3 ＝ 1/9</text></svg>",
          "caption": "把原圖邊長切成 3 等份（共 3 × 3 ＝ 9 小格），邊長 1/3 的紅色縮小圖剛好只佔其中 1 小格。"
        },
        {
          "type": "text",
          "text": "第 1 步：邊長縮成原來的 1/3，代表長和寬同時變成原來的 1/3。"
        },
        {
          "type": "eq",
          "expr": "1/3 × 1/3 ＝ 1/9",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：分母 3 × 3 ＝ 9，因此面積變成原來的 1/9。"
        },
        {
          "type": "answer",
          "text": "答：1/9"
        }
      ],
      "insight": "不管放大還是縮小，面積倍數永遠是「邊長倍數 × 邊長倍數」；分數相乘時，分母要相乘。",
      "distractorAnalysis": {
        "A": "誤以為面積倍數跟邊長倍數一樣都是 1/3。",
        "D": "把縮小圖和放大圖的關係看反，寫成原圖是縮小圖的 3 倍。",
        "C": "把 3 × 3 誤算成 3 ＋ 3 ＝ 6 或 3 × 2 ＝ 6。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "縮小 1/3 倍 ➔ 周長為 1/3 倍，面積為 1/3 × 1/3 ＝ 1/9 倍"
      ],
      "conceptCompare": "「縮小圖面積是原圖的 1/9」反過來講就是「原圖面積是縮小圖的 9 倍」，兩句話說的是同一件事。",
      "examVariations": "段考常考「梯形畫成 1/2 倍縮小圖後，面積變成原來的幾倍？」，一樣是 1/2 × 1/2 ＝ 1/4。"
    }
  },
  {
    "id": "U07-S3-M-047",
    "legacyId": "u07_m07",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "求比例尺",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "地圖上 2 公分的線段代表實際距離 1 公里，這張地圖的比例尺是多少？",
    "options": [
      {
        "key": "A",
        "text": "1：2",
        "trapCode": "U07_RATIO_FRACTION_INV"
      },
      {
        "key": "B",
        "text": "1：500",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "1：5000",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1：50000",
        "trapCode": null
      }
    ],
    "answer": "D",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "2 / 100000",
      "expect": "1/50000"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能先把「公里」正確換算成「公分」，再約分成前項為 1 的最簡比例尺。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把前後兩邊換成相同的「公分」單位。"
        },
        {
          "type": "eq",
          "expr": "1 公里 ＝ 1000 公尺 ＝ 100000 公分",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：寫出「圖上距離：實際距離」，再同除以 2 化簡。"
        },
        {
          "type": "eq",
          "expr": "2：100000 ＝ 1：50000",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：1：50000"
        }
      ],
      "insight": "必背黃金換算：1 公里 ＝ 1000 公尺 ＝ 100000 公分（1 後面有 5 個 0）。計算比例尺前，單位一定要先統一。",
      "distractorAnalysis": {
        "B": "只把 1 公里當成 1000 公尺就除以 2，忘了再換成公分（少了兩個 0）。",
        "C": "公里換成公分時少寫了一個 0，拿 10000 除以 2 算成 5000。",
        "A": "直接把 1 和 2 寫成比，完全忽略單位不同。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公里 ＝ 100000 公分（5 個 0）",
        "比例尺 ＝ 圖上距離：實際距離（單位統一後化簡）"
      ],
      "conceptCompare": "看到題目同時出現「公分」和「公里」，先在數字後面補 5 個 0 換成公分再寫比，永遠不會算錯位數。",
      "examVariations": "段考也常把題目出成「用比值表示比例尺」，此時要寫成分數 1/50000。"
    }
  },
  {
    "id": "U07-S1-M-048",
    "legacyId": "u07_m08",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "體積立方倍",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "把一個正方體的每條邊長都放大成原來的 2 倍，體積會變成原來的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "2 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "B",
        "text": "8 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "6 倍",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "4 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "2 * 2 * 2",
      "expect": "8"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解立體圖形的體積包含長、寬、高三個方向，邊長放大 2 倍時體積會變 8 倍。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><g transform=\"translate(48,55)\"><polygon points=\"0,20 26,8 52,20 26,32\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><polygon points=\"0,20 26,32 26,60 0,48\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><polygon points=\"26,32 52,20 52,48 26,60\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><text x=\"26\" y=\"80\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">原正方體 1 個</text></g><text x=\"152\" y=\"88\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">邊長 2 倍 ➔</text><g transform=\"translate(212,20)\"><polygon points=\"48,0 96,22 48,44 0,22\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"0,22 48,44 48,96 0,74\" fill=\"#fbbf24\" stroke=\"#b45309\" stroke-width=\"2\"/><polygon points=\"48,44 96,22 96,74 48,96\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><line x1=\"24\" y1=\"11\" x2=\"72\" y2=\"33\" stroke=\"#92400e\" stroke-width=\"1.5\"/><line x1=\"24\" y1=\"33\" x2=\"72\" y2=\"11\" stroke=\"#92400e\" stroke-width=\"1.5\"/><line x1=\"24\" y1=\"33\" x2=\"24\" y2=\"85\" stroke=\"#92400e\" stroke-width=\"1.5\"/><line x1=\"72\" y1=\"33\" x2=\"72\" y2=\"85\" stroke=\"#92400e\" stroke-width=\"1.5\"/><line x1=\"0\" y1=\"48\" x2=\"48\" y2=\"70\" stroke=\"#92400e\" stroke-width=\"1.5\"/><line x1=\"48\" y1=\"70\" x2=\"96\" y2=\"48\" stroke=\"#92400e\" stroke-width=\"1.5\"/><text x=\"48\" y=\"116\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">下層 4 個 ＋ 上層 4 個 ＝ 8 個</text></g><text x=\"392\" y=\"68\" font-size=\"14\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">長×2 寬×2 高×2</text><text x=\"392\" y=\"92\" font-size=\"16\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">共 8 倍！</text></svg>",
          "caption": "邊長變 2 倍的積木大正方體，下層要排 2 × 2 ＝ 4 塊，再疊 2 層，一共需要 8 塊小正方體。"
        },
        {
          "type": "text",
          "text": "第 1 步：正方體體積 ＝ 長 × 寬 × 高，三個方向的邊長都放大成 2 倍。"
        },
        {
          "type": "eq",
          "expr": "2 × 2 × 2 ＝ 8",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：想像用 1 公分小積木疊成邊長 2 公分的大正方體，底層 4 顆、共疊 2 層，剛好 8 顆。"
        },
        {
          "type": "answer",
          "text": "答：8 倍"
        }
      ],
      "insight": "一維長度（周長）乘 1 次倍數，二維平面（面積）乘 2 次倍數，三維立體（體積）要乘 3 次倍數。",
      "distractorAnalysis": {
        "A": "誤以為體積與邊長同倍數變化。",
        "C": "誤把三個 2 相加（2 ＋ 2 ＋ 2 ＝ 6）或誤算成 2 × 3 ＝ 6。",
        "D": "只乘了長與寬兩個方向（2 × 2 ＝ 4），漏掉「高度」也要變 2 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "邊長變 2 倍 ➔ 表面積變 2 × 2 ＝ 4 倍，體積變 2 × 2 × 2 ＝ 8 倍"
      ],
      "conceptCompare": "正方體「表面積」是平面圖形拼起來的，所以只變 4 倍；裝水容量或體積要算長寬高三條邊相乘，所以變 8 倍。",
      "examVariations": "生活素養題會換成問「同材質的大積木邊長是小積木的 2 倍，重量會是幾倍？」，重量看體積，一樣是 8 倍。"
    }
  },
  {
    "id": "U07-S2-M-049",
    "legacyId": "u07_m09",
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖和縮小圖",
    "category": "影子相似",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "同一時間下，1 公尺高的竹竿在地面上的影長是 2 公尺，旁邊一棵大樹的影長是 10 公尺，這棵大樹有多高？",
    "options": [
      {
        "key": "A",
        "text": "10 公尺",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "B",
        "text": "20 公尺",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "5 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2 公尺",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "10 / 2 * 1",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能利用「同時同地太陽光平行」產生的放大縮小關係，透過影長倍數反推實物高度。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><line x1=\"20\" y1=\"115\" x2=\"440\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"2.5\"/><line x1=\"55\" y1=\"82\" x2=\"55\" y2=\"115\" stroke=\"#d97706\" stroke-width=\"4\"/><line x1=\"55\" y1=\"115\" x2=\"125\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"55\" y1=\"82\" x2=\"125\" y2=\"115\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><text x=\"42\" y=\"99\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"end\">1 公尺</text><text x=\"90\" y=\"135\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">影 2 公尺</text><line x1=\"230\" y1=\"30\" x2=\"230\" y2=\"115\" stroke=\"#15803d\" stroke-width=\"6\"/><circle cx=\"230\" cy=\"32\" r=\"18\" fill=\"#22c55e\" opacity=\"0.85\"/><line x1=\"230\" y1=\"115\" x2=\"415\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"230\" y1=\"30\" x2=\"415\" y2=\"115\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><text x=\"216\" y=\"80\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"end\">樹高 ？ 公尺</text><text x=\"322\" y=\"135\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">影長 10 公尺（變 5 倍）</text></svg>",
          "caption": "太陽光平行照射下，大樹和影子的直角三角形是竹竿的 5 倍放大圖。"
        },
        {
          "type": "text",
          "text": "第 1 步：同一時間物高與影長形成的三角形互為放大縮小圖，樹影長是竹竿影長的 5 倍。"
        },
        {
          "type": "eq",
          "expr": "10 ÷ 2 ＝ 5",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：既然影子放大 5 倍，代表樹高也是竹竿高的 5 倍。"
        },
        {
          "type": "eq",
          "expr": "1 × 5 ＝ 5",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：5 公尺"
        }
      ],
      "insight": "也可以看「物高：影長 ＝ 1：2」，影長永遠是高度的 2 倍，所以高度就是影長的一半（10 ÷ 2 ＝ 5 公尺）。",
      "distractorAnalysis": {
        "B": "把高度與影長的倍數看反，拿影長 10 去乘以 2 錯算成 20 公尺。",
        "D": "直接抄寫竹竿影長 2 公尺而未進行比例換算。",
        "A": "誤以為樹高就等於樹影長 10 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同時同地：大樹高：大樹影長 ＝ 竹竿高：竹竿影長"
      ],
      "conceptCompare": "求樹高有兩種心算路：一是看「樹影是竿影的幾倍（10 ÷ 2 ＝ 5）」，二是看「影長是物高的幾倍（2 ÷ 1 ＝ 2，再反除）」。",
      "examVariations": "段考也常換成「身高 1.5 公尺的小明影長 2 公尺，旗桿影長 12 公尺」，旗桿高 12 ÷ 2 × 1.5 ＝ 9 公尺。"
    }
  },
  {
    "id": "U07-S3-M-050",
    "legacyId": "u07_m10",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "地圖面積換算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "在比例尺 1：10000 的地圖上，一塊面積為 1 平方公分的區域，實際面積是多少平方公尺？",
    "options": [
      {
        "key": "A",
        "text": "100 平方公尺",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "1 平方公尺",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "1000 平方公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "10000 平方公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(10000 / 100) * (10000 / 100)",
      "expect": "10000"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能先將地圖比例尺的「邊長」換成實際公尺，再相乘求得實際「面積」。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"54\" y=\"52\" width=\"34\" height=\"34\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"71\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">1 公分</text><text x=\"45\" y=\"73\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"end\">1 公分</text><text x=\"71\" y=\"108\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">地圖 1 平方公分</text><text x=\"165\" y=\"73\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">1：10000 ➔</text><rect x=\"235\" y=\"24\" width=\"82\" height=\"82\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><text x=\"276\" y=\"17\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">實際 100 公尺</text><text x=\"325\" y=\"69\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">實際 100 公尺</text><text x=\"276\" y=\"128\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">100 × 100 ＝ 10000 平方公尺</text></svg>",
          "caption": "圖上 1 公分 × 1 公分對應實際 100 公尺 × 100 公尺，必須把邊長先換成公尺再相乘。"
        },
        {
          "type": "text",
          "text": "第 1 步：先算地圖上 1 公分邊長代表實際多長，並換算成公尺。"
        },
        {
          "type": "eq",
          "expr": "10000 公分 ＝ 100 公尺",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：正方形面積 ＝ 邊長 × 邊長，兩個邊都是 100 公尺。"
        },
        {
          "type": "eq",
          "expr": "100 × 100 ＝ 10000",
          "unit": "平方公尺"
        },
        {
          "type": "answer",
          "text": "答：10000 平方公尺"
        }
      ],
      "insight": "算地圖面積最穩的秘訣：「先換邊長、再乘面積」，永遠不要拿比例尺 10000 直接當面積倍率。",
      "distractorAnalysis": {
        "A": "算出圖上 1 公分 ＝ 100 公尺後，忘記面積要「邊長 × 邊長」，直接寫 100 平方公尺。",
        "C": "單位換算或平方乘積少寫了一個 0，錯算成 1000 平方公尺。",
        "B": "直接照抄題目裡的數字 1，沒有乘上比例尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "先算圖上 1 公分的實際邊長 ➔ 再算 實際邊長 × 實際邊長 ＝ 實際面積"
      ],
      "conceptCompare": "10000 平方公尺剛好等於「1 公頃」，這也是地圖 1：10000 上每 1 平方公分剛好對應 1 公頃的原因。",
      "examVariations": "如果題目給的是圖上「3 公分 × 2 公分」的長方形公園，先各乘比例尺換成 300 公尺與 200 公尺，再相乘得 60000 平方公尺。"
    }
  },
  {
    "id": "U07-S1-M-051",
    "legacyId": "u07_m11",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "相似面積比",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "兩個互為放大縮小關係的三角形，對應邊長的比是 2：3，這兩個三角形的面積比是多少？",
    "options": [
      {
        "key": "A",
        "text": "4：9",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2：3",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "C",
        "text": "3：2",
        "trapCode": "U07_RATIO_FRACTION_INV"
      },
      {
        "key": "D",
        "text": "8：27",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "(2 * 2) / (3 * 3)",
      "expect": "4/9"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解兩個相似圖形的面積比等於對應邊長比各自的平方。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><g transform=\"translate(55,34)\"><rect x=\"0\" y=\"0\" width=\"30\" height=\"30\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"0\" width=\"30\" height=\"30\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"0\" y=\"30\" width=\"30\" height=\"30\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"30\" width=\"30\" height=\"30\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"30\" y=\"85\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">邊 2 份 ➔ 2 × 2 ＝ 4 格</text></g><text x=\"182\" y=\"72\" font-size=\"18\" font-weight=\"800\" fill=\"#334155\" text-anchor=\"middle\">：</text><g transform=\"translate(230,18)\"><rect x=\"0\" y=\"0\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"28\" y=\"0\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"56\" y=\"0\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"0\" y=\"28\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"28\" y=\"28\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"56\" y=\"28\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"0\" y=\"56\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"28\" y=\"56\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><rect x=\"56\" y=\"56\" width=\"28\" height=\"28\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"42\" y=\"105\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">邊 3 份 ➔ 3 × 3 ＝ 9 格</text></g><text x=\"392\" y=\"65\" font-size=\"14\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">面積比</text><text x=\"392\" y=\"90\" font-size=\"18\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">4：9</text></svg>",
          "caption": "不論是三角形或正方形，只要底和高都以 2：3 同時縮放，面積就以 2 × 2：3 × 3 ＝ 4：9 比例變化。"
        },
        {
          "type": "text",
          "text": "第 1 步：三角形面積 ＝ 底 × 高 ÷ 2。因為形狀相似，底邊比是 2：3，高的比也會是 2：3。"
        },
        {
          "type": "eq",
          "expr": "(2 × 2)：(3 × 3) ＝ 4：9",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：底和高的倍數都要乘起來，所以面積比為 4：9。"
        },
        {
          "type": "answer",
          "text": "答：4：9"
        }
      ],
      "insight": "相似圖形之間：邊長比如果是 2：3，周長比也是 2：3，面積比是（2 × 2）：（3 × 3），體積比則是（2 × 2 × 2）：（3 × 3 × 3）。",
      "distractorAnalysis": {
        "B": "直接把對應邊比 2：3 當成面積比，忘了平方。",
        "C": "把比例前後項順序寫反，且同樣忘記計算平方。",
        "D": "寫成體積的立方比 8：27，把平面面積和立體體積搞混。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "對應邊比為 2：3 ➔ 周長比為 2：3，面積比為 4：9"
      ],
      "conceptCompare": "不管三角形的形狀怎麼斜、是不是直角三角形，只要兩三角形互為放大縮小圖，高和底都會同比例縮放，所以面積比永遠等於邊長平方比。",
      "examVariations": "進階題會反問「兩個相似圖形面積比是 16：25，對應邊比是多少？」，逆推 4 × 4 ＝ 16 與 5 × 5 ＝ 25，得邊比 4：5。"
    }
  },
  {
    "id": "U07-S1-M-052",
    "legacyId": "u07_m12",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "不等比放大",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "把一個長方形的長放大成 2 倍、寬放大成 3 倍，新畫出來的圖形是原圖的放大圖嗎？",
    "options": [
      {
        "key": "A",
        "text": "不是",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "是",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "C",
        "text": "只要面積變大就是",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "D",
        "text": "不一定，要看原本長寬",
        "trapCode": "U07_ANGLE_SCALED"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握放大圖的嚴格定義：每一條對應邊都必須以「完全相同」的倍數放大，否則會變形。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"52\" y=\"52\" width=\"72\" height=\"32\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"88\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">長 2 格</text><text x=\"46\" y=\"72\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"end\">寬 1 格</text><text x=\"88\" y=\"108\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">原圖（扁長形）</text><text x=\"175\" y=\"73\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">長×2，寬×3 ➔</text><rect x=\"236\" y=\"20\" width=\"120\" height=\"80\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"296\" y=\"14\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\" text-anchor=\"middle\">新長 4 格（×2）</text><text x=\"364\" y=\"64\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">新寬 3 格（×3）</text><text x=\"296\" y=\"124\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">形狀變胖了，不是放大圖！</text></svg>",
          "caption": "原本長與寬是 2：1，長變 2 倍寬變 3 倍後變成 4：3，比例走樣變形，不再是原圖的放大圖。"
        },
        {
          "type": "text",
          "text": "第 1 步：放大圖的每條對應邊，放大倍率必須「全部相同」（例如長 × 2、寬也要 × 2）。"
        },
        {
          "type": "eq",
          "expr": "長放大倍數 2 ≠ 寬放大倍數 3",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：長和寬放大倍率不同，圖片就像被單方向拉寬或壓扁一樣變形，雖然面積變大但不是數學上的放大圖。"
        },
        {
          "type": "answer",
          "text": "答：不是"
        }
      ],
      "insight": "生活中用手機縮放照片如果只拉高不拉寬，人臉會變形；數學上的放大圖必須「長寬同倍率」才算數。",
      "distractorAnalysis": {
        "C": "把面積變大誤當成放大圖的條件，忽略形狀比例必須維持不變。",
        "D": "不管原本長寬是多少，只要兩邊乘上不同倍數（2 和 3），原本的長寬比必定改變，所以絕對不是放大圖。",
        "B": "只因為新圖的四個角都是直角、圖形變大了，就誤判為放大圖。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "合格放大圖：所有對應角相等，且所有對應邊的放大倍數完全相同"
      ],
      "conceptCompare": "另外一種常見陷阱是「長和寬各加 2 公分」：只有長寬本來就一樣的正方形會同比例，一般長方形各加同公分數也不會是放大圖！",
      "examVariations": "段考常考「長 6 寬 4 的長方形，畫成長 8 寬 6 的新長方形，是放大圖嗎？」，8 ÷ 6 ＝ 4/3 倍而 6 ÷ 4 ＝ 3/2 倍，倍率不同故不是。"
    }
  },
  {
    "id": "U07-S1-M-053",
    "legacyId": "u07_m13",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "面積逆推周長",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "一個正方形的面積變成原來的 9 倍，它的周長變成原來的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "9 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "3 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "81 倍",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "D",
        "text": "4.5 倍",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "9 / 3",
      "expect": "3",
      "extraChecks": [
        {
          "expr": "3 * 3",
          "expect": "9"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否能從面積倍數逆向推算出邊長倍數，進而得知周長倍數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：面積倍數 ＝ 邊長倍數 × 邊長倍數 ＝ 9 倍，想哪一個數自己乘自己等於 9。"
        },
        {
          "type": "eq",
          "expr": "3 × 3 ＝ 9 ➔ 邊長變成原來的 3 倍",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：周長和邊長同為線性長度，邊長變 3 倍，周長也就變成原來的 3 倍。"
        },
        {
          "type": "answer",
          "text": "答：3 倍"
        }
      ],
      "insight": "從面積逆推周長分兩步走：先問「幾 × 幾 ＝ 面積倍數」找出邊長倍數，周長倍數就等於邊長倍數。",
      "distractorAnalysis": {
        "C": "看到 9 倍又把 9 平方成 9 × 9 ＝ 81 倍，方向完全做反。",
        "D": "誤把 9 除以 2 算成 4.5 倍。",
        "A": "誤以為面積是 9 倍，周長就跟著也是 9 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "面積 9 倍（3 × 3）➔ 邊長 3 倍 ➔ 周長 3 倍"
      ],
      "conceptCompare": "正向是由「邊長倍數」乘兩次變「面積倍數」；逆向則是把「面積倍數」拆成兩個相同數字相乘，找回邊長倍數。",
      "examVariations": "段考常換數字出成「面積變 16 倍（4 × 4），周長變幾倍（4 倍）」或「面積變 25 倍（5 × 5），邊長變幾倍（5 倍）」。"
    }
  },
  {
    "id": "U07-RV-M-054",
    "legacyId": "u07_m14",
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "單元綜合複習",
    "category": "披薩直覺",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "同樣厚度的圓形披薩，1 片直徑 20 公分的大披薩，和 2 片直徑 10 公分的小披薩，哪一種吃到的披薩比較多？",
    "options": [
      {
        "key": "A",
        "text": "2 片小的比較多",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "1 片大的比較多",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "一樣多",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "沒有圓周率無法比較",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "(20 / 2) * (20 / 2)",
      "expect": "100",
      "extraChecks": [
        {
          "expr": "2 * (10 / 2) * (10 / 2)",
          "expect": "50"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把圓形也看成放大縮小圖，利用直徑 2 倍則面積 4 倍的生活直覺秒殺比大小。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"95\" cy=\"72\" r=\"50\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"3\"/><line x1=\"45\" y1=\"72\" x2=\"145\" y2=\"72\" stroke=\"#9a3412\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"95\" y1=\"22\" x2=\"95\" y2=\"122\" stroke=\"#9a3412\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"95\" y=\"140\" font-size=\"12\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">直徑 20 公分 ＝ 4 倍面積</text><text x=\"182\" y=\"78\" font-size=\"16\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">＞</text><circle cx=\"250\" cy=\"72\" r=\"25\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2.5\"/><circle cx=\"312\" cy=\"72\" r=\"25\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2.5\"/><text x=\"281\" y=\"140\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">2 片直徑 10 公分 ＝ 2 倍面積</text><text x=\"402\" y=\"64\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">1 片大的</text><text x=\"402\" y=\"88\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">足足多 1 倍！</text></svg>",
          "caption": "大披薩直徑是小披薩的 2 倍，面積足足是小披薩的 4 倍，比 2 片小披薩還多出整整一倍。"
        },
        {
          "type": "text",
          "text": "第 1 步：所有的圓形都是彼此的放大或縮小圖。大披薩直徑 20 公分，是小披薩直徑 10 公分的 2 倍。"
        },
        {
          "type": "eq",
          "expr": "直徑 2 倍 ➔ 面積變 2 × 2 ＝ 4 倍",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：1 片大披薩的份量等於 4 片小披薩，4 片當然比 2 片多很多。"
        },
        {
          "type": "answer",
          "text": "答：1 片大的比較多"
        }
      ],
      "insight": "點披薩超實用數學：直徑 2 倍面積就變 4 倍；所以 1 個大披薩往往比買 2 個一半直徑的小披薩還划算。",
      "distractorAnalysis": {
        "A": "誤以為 2 片小披薩看起來比較多，沒有算出圓面積的平方倍數。",
        "D": "不知道直徑 20 是 10 的 2 倍 ➔ 1 片大披薩面積 ＝ 10 × 10 × 4 ＝ 4 倍小披薩（贏過 2 片小的），不用算出 3.14 就能比較！",
        "C": "最常見的生活直覺錯覺：以為 1 × 20 ＝ 2 × 10 所以一樣多，忘了面積是平方不是一次方。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓直徑變 2 倍 ➔ 圓周長變 2 倍，圓面積變 2 × 2 ＝ 4 倍"
      ],
      "conceptCompare": "如果問的是「披薩外圈烤餅皮的總長度（周長）」，1 個直徑 20 的周長才會剛好等於 2 個直徑 10 的周長和；但比吃的「面積」則是大披薩贏 2 倍！",
      "examVariations": "生活素養題常把披薩換成「直徑 12 公分的蛋糕和 2 個直徑 6 公分的蛋糕」，結論一樣是大的比較多。"
    }
  },
  {
    "id": "U07-S3-M-055",
    "legacyId": "u07_m15",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "比例尺換算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "在比例尺 1：25000 的地圖上量得一條道路長 4 公分，這條道路的實際長度是多少？",
    "options": [
      {
        "key": "A",
        "text": "4 公里",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "B",
        "text": "10 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "100 公尺",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1 公里",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "4 * 25000 / 100000",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能利用 4 × 25 ＝ 100 快速心算比例尺實距，並正確把 100000 公分換算為 1 公里。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：地圖上每 1 公分代表實際 25000 公分，量得 4 公分就乘以 4。"
        },
        {
          "type": "eq",
          "expr": "25000 × 4 ＝ 100000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：100000 公分去掉 5 個 0（先除以 100 變 1000 公尺，再除以 1000），剛好就是 1 公里。"
        },
        {
          "type": "eq",
          "expr": "100000 ÷ 100000 ＝ 1",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：1 公里"
        }
      ],
      "insight": "心算亮點：看到 25000 配上 4 公分，馬上用 25 × 4 ＝ 100 湊整，再加上 3 個 0 就是 100000 公分 ＝ 1 公里。",
      "distractorAnalysis": {
        "B": "單位換算少去掉一個 0，把 100000 公分錯算成 10 公里。",
        "C": "把 100000 公分錯換成 100 公尺（多去掉一個 0）。",
        "A": "誤把圖上的 4 公分當成實際距離 4 公里，或錯誤除以 25000。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際距離 ＝ 圖上距離 × 比例尺分母",
        "100000 公分 ＝ 1000 公尺 ＝ 1 公里"
      ],
      "conceptCompare": "也可以先換單位再乘：比例尺 1：25000 代表 1 公分 ＝ 250 公尺，圖上 4 公分就是 250 × 4 ＝ 1000 公尺 ＝ 1 公里，數字更小更好算！",
      "examVariations": "段考常考「1：25000 地圖上長 12 公分，實際是幾公里？」，利用 4 公分 ＝ 1 公里，12 公分立刻得出 3 公里。"
    }
  },
  {
    "id": "U07-RV-M-056",
    "legacyId": "u07_m16",
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "單元綜合複習",
    "category": "模型重量",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "用完全相同的實心材質，依長度比例尺 1：100 做出一台汽車模型，這個模型的重量大約是真實汽車的幾分之幾？",
    "options": [
      {
        "key": "A",
        "text": "1/1000000",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "1/10000",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "C",
        "text": "1/100",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "一樣重",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(1 / 100) * (1 / 100) * (1 / 100)",
      "expect": "1/1000000"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解同材質實心物體的重量取決於「體積」，當長度縮小 1/100 時，體積與重量會縮成百萬分之一。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：相同材質的實心模型，重量和「體積」成正比，必須考慮長、寬、高三個方向。"
        },
        {
          "type": "eq",
          "expr": "1/100 × 1/100 × 1/100 ＝ 1/1000000",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：每次乘 100 會多出 2 個 0，連乘三次共有 6 個 0，所以是實車重量的 1000000 分之一。"
        },
        {
          "type": "answer",
          "text": "答：1/1000000"
        }
      ],
      "insight": "真實世界驗證：1 台汽車重約 1000 公斤（1000000 公克），如果縮小 1：100 做成同材質實心模型，重量剛好約 1 公克，完全符合生活經驗。",
      "distractorAnalysis": {
        "B": "只乘了兩個 100（面積比例），忘了實心模型還有第三個維度（高度）。",
        "D": "忽略材質相同下縮小體積會大幅變輕的事實。",
        "C": "誤以為重量跟長度比例尺一樣，直接除以 100。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同材質實心重量比 ＝ 體積比 ＝ 長度比連乘三次"
      ],
      "conceptCompare": "面積算 2 個方向（平方），體積與實心重量算 3 個方向（立方）；看清題目問的是「烤漆面積」還是「實心重量」，就能選對次數。",
      "examVariations": "若改問「在模型車表面噴漆所需的油漆量大約是實車的幾分之幾？」，油漆塗在表面看面積，答案就會是 1/10000。"
    }
  },
  {
    "id": "U07-S3-M-057",
    "legacyId": "u07_m17",
    "unitId": "U07",
    "section": "7-3",
    "sectionName": "認識比例尺",
    "category": "兩張地圖",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "同一個長方形操場，畫在比例尺 1：2000 的地圖上，圖上面積是畫在 1：5000 地圖上面積的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "2.5 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "25 倍",
        "trapCode": "U07_DUAL_MAP_RATIO_ERR"
      },
      {
        "key": "C",
        "text": "5 倍",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6.25 倍",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(5000 / 2000) * (5000 / 2000)",
      "expect": "6.25"
    },
    "explanation": {
      "examPurpose": "測驗學生在兩張不同比例尺地圖之間，是否能先求出「圖上長度的倍率」，再平方求得「圖上面積倍率」。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"45\" y=\"58\" width=\"48\" height=\"30\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"69\" y=\"48\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">1：5000 地圖</text><text x=\"69\" y=\"110\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">邊長 1 份</text><text x=\"152\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">長度 2.5 倍 ➔</text><rect x=\"210\" y=\"32\" width=\"120\" height=\"75\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"270\" y=\"22\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">1：2000 地圖（畫得較大）</text><text x=\"270\" y=\"128\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">長變 2.5 倍，寬也變 2.5 倍</text><text x=\"398\" y=\"64\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">面積倍數</text><text x=\"398\" y=\"88\" font-size=\"15\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">6.25 倍</text></svg>",
          "caption": "1：2000 縮得比較少，同一個操場的圖上長與寬都是 1：5000 地圖的 2.5 倍，面積就是 2.5 × 2.5 ＝ 6.25 倍。"
        },
        {
          "type": "text",
          "text": "第 1 步：先比兩張地圖上的「邊長」倍數：實際操場大小固定，1/2000 除以 1/5000，等於拿後項相除。"
        },
        {
          "type": "eq",
          "expr": "5000 ÷ 2000 ＝ 2.5",
          "unit": "倍（圖上長度倍數）"
        },
        {
          "type": "text",
          "text": "第 2 步：長與寬都變 2.5 倍，面積再相乘。"
        },
        {
          "type": "eq",
          "expr": "2.5 × 2.5 ＝ 6.25",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：6.25 倍"
        }
      ],
      "insight": "兩張地圖比大小口訣：「先確定哪張畫得大（分母小的大），拿兩個分母相除得長度倍數，問面積就再平方」。",
      "distractorAnalysis": {
        "A": "正確算出長度是 2.5 倍，但忘記題目問的是「面積」，少了平方這一步。",
        "C": "誤把 2.5 × 2 算成 5 倍，而不是 2.5 × 2.5。",
        "B": "比例尺分母相除錯算成 5 倍，再平方錯算成 25 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩圖長度倍率 ＝ (1/2000) ÷ (1/5000) ＝ 5000 ÷ 2000 ＝ 2.5 倍",
        "兩圖面積倍率 ＝ 2.5 × 2.5 ＝ 6.25 倍"
      ],
      "conceptCompare": "也可以用假設數值法驗證：假設操場實際長 100 公尺（10000 公分），在 1：2000 圖上長 5 公分，在 1：5000 圖上長 2 公分，5 ÷ 2 ＝ 2.5 倍！",
      "examVariations": "段考常考給定 A 圖面積（如 16 平方公分）求 B 圖面積，先算面積倍率再乘或除即可。"
    }
  },
  {
    "id": "U07-S2-M-058",
    "legacyId": "u07_m18",
    "unitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖和縮小圖",
    "category": "中點三角形",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "把一個三角形三條邊的中點連起來，在中間圍成一個倒立的小三角形。這個小三角形的面積是原來大三角形面積的幾分之幾？",
    "options": [
      {
        "key": "A",
        "text": "1/2",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "1/4",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1/3",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1/8",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(1 / 2) * (1 / 2)",
      "expect": "1/4"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能同時從「幾何切割成 4 等份」與「邊長 1/2 縮小圖面積 1/4」兩個角度理解中點連線性質。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><polygon points=\"130,18 45,126 215,126\" fill=\"#f1f5f9\" stroke=\"#334155\" stroke-width=\"2.5\"/><polygon points=\"87.5,72 172.5,72 130,126\" fill=\"#fde68a\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"130\" y=\"56\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">1</text><text x=\"130\" y=\"103\" font-size=\"14\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">2</text><text x=\"87\" y=\"114\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">3</text><text x=\"173\" y=\"114\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">4</text><text x=\"335\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">三條中點連線切成 4 塊一樣大</text><text x=\"335\" y=\"80\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">邊長縮為 1/2 ➔ 面積 1/2 × 1/2 ＝ 1/4</text><text x=\"335\" y=\"110\" font-size=\"13\" fill=\"#475569\" text-anchor=\"middle\">黃色剛好佔整塊的 1/4</text></svg>",
          "caption": "三條中點連線會把原三角形平分成 4 個全等的小三角形，每一塊邊長都是原來的一半、面積是 1/4。"
        },
        {
          "type": "text",
          "text": "第 1 步：把三邊中點連起來，會剛好把原本的大三角形切出 4 個形狀與大小完全相同的小三角形。"
        },
        {
          "type": "eq",
          "expr": "1 ÷ 4 ＝ 1/4",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：用放大縮小圖來看也完全相通：小三角形每邊都是大三角形的 1/2，所以面積是 1/2 × 1/2 ＝ 1/4。"
        },
        {
          "type": "answer",
          "text": "答：1/4"
        }
      ],
      "insight": "「圖形切 4 等份」與「邊長 1/2 ➔ 面積 1/4」兩種思路得出完全一樣的答案，這就是數學之美。",
      "distractorAnalysis": {
        "A": "因為取的是各邊「中點（一半）」，就誤以為面積也變成一半（1/2）。",
        "D": "誤套用了立體圖形的立方（1/2 × 1/2 × 1/2 ＝ 1/8）。",
        "C": "只數邊角切出的 3 個三角形，漏算中間倒立的那第 4 塊一樣大的小三角形，誤當成只有 3 塊。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "連接三角形三邊中點 ➔ 分成 4 個全等小三角形，每個面積是原來的 1/4"
      ],
      "conceptCompare": "如果把中間那個小三角形的三邊中點再連一次，又會變成 1/4 的 1/4，也就是原三角形面積的 1/16！",
      "examVariations": "奧數與資優題常連續取 2 到 3 次中點連線，問最小三角形的面積，每次乘以 1/4 即可秒解。"
    }
  },
  {
    "id": "U07-RV-M-059",
    "legacyId": "u07_m19",
    "unitId": "U07",
    "section": "REVIEW",
    "sectionName": "單元綜合複習",
    "category": "巨人悖論",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "假設一個巨人身體每個方向的長度都放大成一般人的 10 倍，體重也依照體積比例增加。他每平方公分腿骨必須承受的重量是一般人的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "10 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "一樣重（1 倍）",
        "trapCode": "U07_PERIMETER_SQUARE_ERR"
      },
      {
        "key": "C",
        "text": "100 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "1000 倍",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(10 * 10 * 10) / (10 * 10)",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能同時比較「體積（立方倍）」與「截面積（平方倍）」的成長速度，理解物理與生物的平方—立方規律。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"25\" y=\"22\" width=\"135\" height=\"106\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"92\" y=\"50\" font-size=\"14\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">一般人（1 倍）</text><text x=\"92\" y=\"78\" font-size=\"13\" fill=\"#475569\" text-anchor=\"middle\">體重：1 份</text><text x=\"92\" y=\"104\" font-size=\"13\" fill=\"#475569\" text-anchor=\"middle\">骨頭截面積：1 份</text><text x=\"195\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">放大 10 倍 ➔</text><rect x=\"232\" y=\"22\" width=\"202\" height=\"106\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"333\" y=\"48\" font-size=\"14\" font-weight=\"800\" fill=\"#991b1b\" text-anchor=\"middle\">巨人（身高 10 倍）</text><text x=\"333\" y=\"74\" font-size=\"13\" font-weight=\"700\" fill=\"#b91c1c\" text-anchor=\"middle\">體重（體積）：1000 倍</text><text x=\"333\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">骨截面積（面積）：100 倍</text><text x=\"333\" y=\"118\" font-size=\"13\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">1000 ÷ 100 ＝ 每格扛 10 倍重！</text></svg>",
          "caption": "體重隨體積暴增 1000 倍，但腿骨截面積只增加 100 倍，每平方公分骨頭要多扛 10 倍重量。"
        },
        {
          "type": "text",
          "text": "第 1 步：身體長、寬、高都變 10 倍，體重跟著體積一起暴增。"
        },
        {
          "type": "eq",
          "expr": "體重倍數 ＝ 10 × 10 × 10 ＝ 1000",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：骨頭橫切面的面積只看長和寬兩個方向，只增加 100 倍；把總重量平均分給截面積："
        },
        {
          "type": "eq",
          "expr": "1000 ÷ 100 ＝ 10",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：10 倍"
        }
      ],
      "insight": "這就是自然界著名的「平方—立方定律」：動物若直接放大 10 倍，骨頭承受壓力會變 10 倍而斷裂，所以大象腿必須特別粗壯，現實中也不可能出現 18 公尺高的巨人。",
      "distractorAnalysis": {
        "C": "只算出腿骨截面積變 100 倍，忘了用體重 1000 倍去除。",
        "D": "只算出體重變 1000 倍，忘了腿骨也同時變粗成 100 倍截面積。",
        "B": "誤以為全身一起放大 10 倍，負荷就會互相抵銷而維持 1 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "單位面積壓力比 ＝ 體積倍數 ÷ 截面積倍數 ＝ (10 × 10 × 10) ÷ (10 × 10) ＝ 10 倍"
      ],
      "conceptCompare": "長度 10 倍 ➔ 面積 100 倍 ➔ 體積 1000 倍；三者倍數差距在放大倍率很大時會非常驚人。",
      "examVariations": "科普素養題常問「小昆蟲如果等比例放大成 100 倍，為什麼反而會被自己的重量壓垮？」，也是同樣的立方對平方落差。"
    }
  },
  {
    "id": "U07-S1-M-060",
    "legacyId": "u07_m20",
    "unitId": "U07",
    "section": "7-1",
    "sectionName": "認識放大圖與縮小圖",
    "category": "面積增加率",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "一個正方形的邊長增加 10%，它的面積會增加百分之幾？",
    "options": [
      {
        "key": "A",
        "text": "10%",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "21%",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "20%",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "100%",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(11 * 11 - 100) / 100",
      "expect": "21/100"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把「邊長增加 10%」轉成 1.1 倍放大圖，並算出新面積多出來的角落小方塊（1%）。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><g transform=\"translate(55,15)\"><rect x=\"0\" y=\"0\" width=\"85\" height=\"85\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"85\" y=\"0\" width=\"17\" height=\"85\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><rect x=\"0\" y=\"85\" width=\"85\" height=\"17\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><rect x=\"85\" y=\"85\" width=\"17\" height=\"17\" fill=\"#fca5a5\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"42\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">原面積 100%</text><text x=\"93\" y=\"48\" font-size=\"10\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">+10%</text><text x=\"42\" y=\"98\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">+10%</text><text x=\"122\" y=\"98\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">多 1%</text><text x=\"51\" y=\"124\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">10% + 10% + 1% ＝ 21%</text></g><text x=\"322\" y=\"48\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">邊長增加 10% ＝ 變成 1.1 倍</text><text x=\"322\" y=\"78\" font-size=\"15\" font-weight=\"800\" fill=\"#2563eb\" text-anchor=\"middle\">1.1 × 1.1 ＝ 1.21（121%）</text><text x=\"322\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">121% − 100% ＝ 增加 21%</text></svg>",
          "caption": "右邊和下方各多出 10% 長條，但右下角還補上一塊 10% × 10% ＝ 1% 的紅色小角，合計增加 21%。"
        },
        {
          "type": "text",
          "text": "第 1 步：原本邊長當作 1，增加 10%（0.1）後，新邊長變成原來的 1.1 倍。"
        },
        {
          "type": "eq",
          "expr": "1.1 × 1.1 ＝ 1.21",
          "unit": "倍（即 121%）"
        },
        {
          "type": "text",
          "text": "第 2 步：減掉原本的面積 1（100%），算出增加的百分率。"
        },
        {
          "type": "eq",
          "expr": "1.21 − 1 ＝ 0.21 ＝ 21%",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：21%"
        }
      ],
      "insight": "這題最快的檢查法：假設原邊長 10 公分（面積 100），增加 10% 變 11 公分（面積 121），一眼就看出增加 21%。",
      "distractorAnalysis": {
        "A": "直接把邊長增加率 10% 當成面積增加率。",
        "D": "把 10% 平方誤算成 10 × 10 ＝ 100%。",
        "C": "只想到右邊加 10%、下面加 10%，合計 20%，漏掉了右下角那塊 0.1 × 0.1 ＝ 1% 的小正方形。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "邊長增加 10% ➔ 面積變成 1.1 × 1.1 ＝ 1.21 倍 ➔ 面積增加 21%"
      ],
      "conceptCompare": "反過來如果是「邊長減少 10%」，新邊長變成 0.9 倍，面積變 0.9 × 0.9 ＝ 0.81 倍，所以面積減少 19%（而不是 20%）。",
      "examVariations": "段考壓軸題會改成「長方形的長增加 20%、寬減少 10%，面積變成原來的幾%？」，直接算 1.2 × 0.9 ＝ 1.08，即增加 8%。"
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U07'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
