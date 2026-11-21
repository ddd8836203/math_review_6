// U06 4D 滿血題庫分片（共 60 題）
(function (root) {
  const DATA = [
  {
    "id": "U06-S1-B-001",
    "legacyId": "u06_001",
    "unitId": "U06",
    "section": "6-1",
    "sectionName": "圓周率",
    "category": "圓周率概念",
    "batch": "課本原型題",
    "source": "課本 p.86 例題 1",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "測量一個圓形光碟，直徑是 12 公分，圓周長大約是 37.68 公分。圓周長除以直徑的比值是多少？這個比值叫做什麼？",
    "options": [
      {
        "key": "A",
        "text": "6.28，叫做圓周長",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "31.4，叫做圓周率",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "C",
        "text": "3.14，叫做圓周率",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "3.14，而且圓越大比值越大",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "37.68 / 12",
      "expect": "3.14"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解圓周率的定義為「圓周長 ÷ 直徑」的固定比值，並知道國小常用 3.14 作為近似值。",
      "steps": [
        {
          "type": "text",
          "text": "圓周長除以直徑的比值，就是圓周率。把光碟的圓周長 37.68 公分除以直徑 12 公分："
        },
        {
          "type": "eq",
          "expr": "37.68 ÷ 12 ＝ 3.14",
          "unit": ""
        },
        {
          "type": "longdiv",
          "dividend": "37.68",
          "divisor": "12",
          "mode": "exact",
          "note": "小數除以整數直式驗算"
        },
        {
          "type": "text",
          "text": "任何大小的圓，圓周長除以直徑的比值都是固定不變的常數，叫做「圓周率」，大約是 3.14。"
        },
        {
          "type": "answer",
          "text": "答：大約是 3.14，叫做圓周率"
        }
      ],
      "insight": "圓周率是「圓周長 ÷ 直徑」的固定比值，大約等於 3.14，與圓的大小完全無關。",
      "distractorAnalysis": {
        "B": "小數除法計算時小數點位置點錯，將 37.68 ÷ 12 ＝ 3.14 誤寫成 31.4。",
        "D": "對圓周率產生迷思，誤以為圓形越大的物體，圓周長除以直徑的比值也會跟著變大。",
        "A": "把 37.68 ÷ 12 × 2 錯當成 6.28，且誤把這個比值叫做圓周長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周率 ＝ 圓周長 ÷ 直徑（大約 3.14）",
        "圓周率是一個固定不變的常數，不會因為圓變大或變小而改變"
      ],
      "conceptCompare": "「圓周長」會隨著直徑變大而等比例變長，但「圓周率」是圓周長除以直徑的比值，所有圓的圓周率都一樣。",
      "examVariations": "段考常考觀念題：拿 10 元硬幣與大摩天輪比較誰的圓周率比較大，正確答案是「一樣大」。"
    }
  },
  {
    "id": "U06-S2-B-002",
    "legacyId": "u06_002",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "直徑求圓周長",
    "batch": "課本原型題",
    "source": "課本 p.88 例題 2",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "遊樂園的摩天輪直徑是 80 公尺，摩天輪旋轉一圈，車廂大約移動了多少公尺？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "502.4 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "241.2 公尺",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "25.12 公尺",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "D",
        "text": "251.2 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "80 * (314 / 100)",
      "expect": "251.2"
    },
    "explanation": {
      "examPurpose": "測驗學生能否分辨題目已提供「直徑」，並正確套用「圓周長 ＝ 直徑 × 圓周率（大約 3.14）」進行小數乘法計算。",
      "steps": [
        {
          "type": "text",
          "text": "摩天輪旋轉一圈移動的距離就是圓周長。題目已經給了「直徑」80 公尺，直接乘以圓周率（大約 3.14）："
        },
        {
          "type": "eq",
          "expr": "80 × 3.14 ＝ 251.2",
          "unit": "公尺"
        },
        {
          "type": "mul",
          "a": "80",
          "b": "3.14",
          "note": "整數乘以二位小數直式計算"
        },
        {
          "type": "answer",
          "text": "答：大約 251.2 公尺"
        }
      ],
      "insight": "計算圓周長前先圈出關鍵字：給「直徑」就直接乘 3.14，不用再乘 2。",
      "distractorAnalysis": {
        "A": "混淆直徑與半徑，把題目的直徑 80 公尺當成半徑，多乘了一次 2 算成 80 × 2 × 3.14 ＝ 502.4 公尺。",
        "C": "小數乘法結算時小數點向左移過頭，把 251.2 誤點成 25.12 公尺。",
        "B": "直式乘法計算 80 × 3.14 時十位數進位失誤，算成 241.2 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 直徑 × 圓周率（大約 3.14）"
      ],
      "conceptCompare": "看到題目給「直徑」就直接 × 3.14；如果給的是「半徑」，才要先 × 2 變成直徑再 × 3.14。",
      "examVariations": "段考常將「旋轉一圈」改成「旋轉 3 圈共移動幾公尺」，算出單圈周長後再乘以圈數即可。"
    }
  },
  {
    "id": "U06-S2-B-003",
    "legacyId": "u06_003",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "半徑求圓周長",
    "batch": "課本原型題",
    "source": "課本 p.89 例題 3",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "公園裡有一個圓形噴水池，半徑是 5 公尺。這個噴水池的圓周長大約是多少公尺？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "15.7 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "78.5 公尺",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "C",
        "text": "31.4 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "314 公尺",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "5 * 2 * (314 / 100)",
      "expect": "31.4"
    },
    "explanation": {
      "examPurpose": "測驗學生遇到給定「半徑」時，是否記得先將半徑乘以 2 換算成直徑，再乘以 3.14 求圓周長。",
      "steps": [
        {
          "type": "text",
          "text": "題目給的是「半徑」5 公尺，先乘以 2 算出直徑，再乘以圓周率（大約 3.14）："
        },
        {
          "type": "eq",
          "expr": "5 × 2 ＝ 10",
          "unit": "公尺（直徑）"
        },
        {
          "type": "eq",
          "expr": "10 × 3.14 ＝ 31.4",
          "unit": "公尺"
        },
        {
          "type": "mul",
          "a": "10",
          "b": "3.14",
          "note": "直徑乘以圓周率直式計算"
        },
        {
          "type": "answer",
          "text": "答：大約 31.4 公尺"
        }
      ],
      "insight": "已知半徑求圓周長，一定要記住「半徑 × 2 × 3.14」，先變直徑才不會少乘 2。",
      "distractorAnalysis": {
        "A": "混淆半徑與直徑，直接把半徑 5 乘以 3.14，算成 5 × 3.14 ＝ 15.7 公尺（忘記乘 2）。",
        "B": "把圓周長公式與圓面積公式混淆，誤算成半徑 × 半徑 × 3.14 ＝ 5 × 5 × 3.14 ＝ 78.5。",
        "D": "計算 10 × 3.14 時忘記點上小數點，將 31.4 寫成 314 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 半徑 × 2",
        "圓周長 ＝ 半徑 × 2 × 圓周率（大約 3.14）"
      ],
      "conceptCompare": "圓周長是長度（半徑 × 2 × 3.14），圓面積才是面積（半徑 × 半徑 × 3.14），兩者切勿搞混。",
      "examVariations": "常改為「用欄杆圍住半徑 5 公尺的圓形花圃，每公尺欄杆 100 元要花多少元？」，算出周長 31.4 公尺後再乘單價。"
    }
  },
  {
    "id": "U06-S2-B-004",
    "legacyId": "u06_004",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "圓周長反求半徑",
    "batch": "課本原型題",
    "source": "課本 p.90 例題 4",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "有一棵大神木，用繩子圍繞樹幹一圈的長度剛好是 188.4 公分。這棵樹幹橫截面的直徑和半徑大約各是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "直徑 30 公分，半徑 15 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "直徑 60 公分，半徑 30 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "直徑 120 公分，半徑 60 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "直徑 6 公分，半徑 3 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "188.4 / (314 / 100) / 2",
      "expect": "30",
      "extraChecks": [
        {
          "expr": "188.4 / (314 / 100)",
          "expect": "60"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生由圓周長逆推直徑與半徑的能力，並熟練除數為二位小數（3.14）的直式除法移位運算。",
      "steps": [
        {
          "type": "text",
          "text": "由「圓周長 ＝ 直徑 × 圓周率（大約 3.14）」反推，先將圓周長除以 3.14 算出直徑："
        },
        {
          "type": "eq",
          "expr": "188.4 ÷ 3.14 ＝ 60",
          "unit": "公分（直徑）"
        },
        {
          "type": "longdiv",
          "dividend": "188.4",
          "divisor": "3.14",
          "mode": "exact",
          "note": "除數有兩位小數，被除數與除數小數點同時右移兩位變成 18840 ÷ 314"
        },
        {
          "type": "text",
          "text": "接著將直徑除以 2，就是樹幹橫截面的半徑："
        },
        {
          "type": "eq",
          "expr": "60 ÷ 2 ＝ 30",
          "unit": "公分（半徑）"
        },
        {
          "type": "answer",
          "text": "答：直徑大約 60 公分，半徑大約 30 公分"
        }
      ],
      "insight": "已知圓周長除以 3.14 得到的是「直徑」，如果題目要求「半徑」，還要再除以 2！",
      "distractorAnalysis": {
        "A": "誤將 188.4 ÷ 3.14 ＝ 60 再除以 2 當成直徑 30 公分，連帶讓半徑算成 15 公分。",
        "C": "誤以為求出 60 是半徑，反而再乘以 2 當成直徑 120 公分。",
        "D": "計算 188.4 ÷ 3.14 時小數點移位沒補 0（誤算 1884 ÷ 314 ＝ 6），少算 10 倍變成直徑 6 公分、半徑 3 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 圓周長 ÷ 3.14",
        "半徑 ＝ 圓周長 ÷ 3.14 ÷ 2"
      ],
      "conceptCompare": "計算 188.4 ÷ 3.14 時，除數 3.14 往右移 2 位變 314，被除數 188.4 只有 1 位小數，所以右移 2 位要補一個 0 變成 18840。",
      "examVariations": "若題目改成「用 188.4 公分的繩子在圓柱上繞了 3 圈，求圓柱直徑」，要先除以 3 算出 1 圈的圓周長，再除以 3.14。"
    }
  },
  {
    "id": "U06-S3-B-005",
    "legacyId": "u06_005",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "扇形弧長",
    "batch": "課本原型題",
    "source": "課本 p.92 例題 5",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "一個扇形的半徑是 12 公分，圓心角是 90°。這個扇形的弧長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "18.84 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "9.42 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "25.12 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "42.84 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "12 * 2 * (314 / 100) * (90 / 360)",
      "expect": "18.84"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握「扇形弧長 ＝ 整圓周長 × (圓心角 ÷ 360°)」，並能區分題目只求「弧長」而不需加上兩條半徑。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 90 130 L 190 130 A 100 100 0 0 0 90 30 Z\" fill=\"#fff1f2\"/><path d=\"M 90 112 L 108 112 L 108 130\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"90\" y1=\"130\" x2=\"190\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"90\" y1=\"130\" x2=\"90\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><path d=\"M 190 130 A 100 100 0 0 0 90 30\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4.5\"/><circle cx=\"90\" cy=\"130\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"140\" y=\"148\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">半徑 12 公分</text><text x=\"122\" y=\"114\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">90°</text><text x=\"188\" y=\"62\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">紅色弧長</text><text x=\"250\" y=\"56\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">弧長佔整圓的 1/4</text><text x=\"250\" y=\"84\" font-size=\"13\" fill=\"#334155\">整圓周長 ＝ 12 × 2 × 3.14</text><text x=\"250\" y=\"112\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">題目只求紅色弧長，不加半徑</text></svg>",
          "caption": "半徑 12 公分、圓心角 90° 的扇形弧長示意圖（只算紅色圓弧部分）"
        },
        {
          "type": "text",
          "text": "先算出完整圓的圓周長，再乘以圓心角 90° 佔整個圓（360°）的幾分之幾："
        },
        {
          "type": "eq",
          "expr": "12 × 2 × 3.14 ＝ 75.36",
          "unit": "公分（整圓周長）"
        },
        {
          "type": "eq",
          "expr": "90 ÷ 360 ＝ 90/360 ＝ 1/4",
          "unit": "（佔整圓的幾分之幾）"
        },
        {
          "type": "eq",
          "expr": "75.36 × 1/4 ＝ 18.84",
          "unit": "公分（弧長）"
        },
        {
          "type": "answer",
          "text": "答：大約 18.84 公分"
        }
      ],
      "insight": "看到「弧長」只要算彎曲的那段圓弧即可，不需要再加上兩條直的半徑。",
      "distractorAnalysis": {
        "B": "誤把半徑 12 公分當成直徑來算整圓周長，算成 12 × 3.14 × 1/4 ＝ 9.42 公分。",
        "C": "圓心角佔整圓的幾分之幾約分錯誤，把 90/360 誤當成 1/3，算成 75.36 × 1/3 ＝ 25.12 公分。",
        "D": "把「弧長」和「扇形周長」搞混，算出弧長 18.84 公分後又多加上兩條半徑 24 公分，變成 42.84 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形佔整圓的幾分之幾 ＝ 圓心角 ÷ 360°",
        "扇形弧長 ＝ 半徑 × 2 × 3.14 × (圓心角 ÷ 360°)"
      ],
      "conceptCompare": "「扇形弧長」只包含彎曲的圓弧邊；「扇形周長」則要包含弧長加上兩條直線半徑。",
      "examVariations": "常見的幾分之幾圓心角：180° ＝ 1/2 圓、120° ＝ 1/3 圓、90° ＝ 1/4 圓、60° ＝ 1/6 圓、45° ＝ 1/8 圓。"
    }
  },
  {
    "id": "U06-S3-B-006",
    "legacyId": "u06_006",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "扇形周長",
    "batch": "課本原型題",
    "source": "課本 p.93 例題 6",
    "level": 2,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "美勞課把一張半徑 12 公分的圓形卡紙，剪下一塊圓心角 60° 的扇形小摺扇，沿著這塊小摺扇外圍描一圈的周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "12.56 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "B",
        "text": "24.56 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "36.56 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "30.28 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "12 * 2 * (314 / 100) * (60 / 360) + 12 * 2",
      "expect": "36.56"
    },
    "explanation": {
      "examPurpose": "測驗學生計算「扇形周長」時，能否確實把弧長加上兩條直線半徑，避免只算弧長的經典錯誤。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 70 135 L 175 135 A 105 105 0 0 0 122.5 44.1 Z\" fill=\"#fef3c7\"/><path d=\"M 95 135 A 25 25 0 0 0 82.5 113.3\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.8\"/><line x1=\"70\" y1=\"135\" x2=\"175\" y2=\"135\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"70\" y1=\"135\" x2=\"122.5\" y2=\"44.1\" stroke=\"#2563eb\" stroke-width=\"3\"/><path d=\"M 175 135 A 105 105 0 0 0 122.5 44.1\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4.5\"/><circle cx=\"70\" cy=\"135\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"122\" y=\"153\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">半徑 12 公分</text><text x=\"48\" y=\"84\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">半徑 12 公分</text><text x=\"104\" y=\"126\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">60°</text><text x=\"155\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">紅弧長 12.56</text><text x=\"255\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">扇形周長要圍一圈：</text><text x=\"255\" y=\"82\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">紅色弧長 ＋ 2 條藍色半徑</text><text x=\"255\" y=\"112\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">12.56 ＋ 12 × 2 ＝ 36.56 公分</text></svg>",
          "caption": "扇形周長分解圖：紅色圓弧長加上兩條藍色半徑才是一整圈周長"
        },
        {
          "type": "text",
          "text": "扇形的周長包含「1 段紅色弧長」和「2 條藍色半徑」。先算出 60° 弧長："
        },
        {
          "type": "eq",
          "expr": "60 ÷ 360 ＝ 60/360 ＝ 1/6",
          "unit": "（佔整圓的幾分之幾）"
        },
        {
          "type": "eq",
          "expr": "12 × 2 × 3.14 × 1/6 ＝ 12.56",
          "unit": "公分（弧長）"
        },
        {
          "type": "text",
          "text": "最後一定要加上圍成扇形兩側的兩條半徑，才是完整封閉的周長："
        },
        {
          "type": "eq",
          "expr": "12.56 ＋ 12 × 2 ＝ 36.56",
          "unit": "公分（扇形周長）"
        },
        {
          "type": "answer",
          "text": "答：大約 36.56 公分"
        }
      ],
      "insight": "幾何圍欄法則：周長是「外圍完整走一圈的總長度」，一定要把弧長加上 2 條半徑。",
      "distractorAnalysis": {
        "A": "只算出弧長 12.56 公分就直接當作整個扇形周長，忘了還有兩條直線半徑。",
        "D": "誤把半徑 12 公分直接當成直徑來算弧長，算出 12 × 3.14 × 1/6 ＋ 24 ＝ 30.28 公分。",
        "B": "算完弧長後只加上了「一條」半徑 12 公分，變成 12.56 ＋ 12 ＝ 24.56 公分，漏算另一條半徑。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2",
        "扇形周長 ＝ 半徑 × 2 × 3.14 × (圓心角 ÷ 360°) ＋ 半徑 × 2"
      ],
      "conceptCompare": "算「弧長」只要算紅線部分；算「扇形周長」一定要「紅線弧長 ＋ 2 條藍線半徑」。",
      "examVariations": "段考常考「披薩切片」或「摺扇」的周長，問法雖生活化，但算式一樣是弧長加 2 條半徑。"
    }
  },
  {
    "id": "U06-S3-B-007",
    "legacyId": "u06_007",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "半圓周長",
    "batch": "課本原型題",
    "source": "課本 p.94 例題 7",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "有一個直徑 14 公分的半圓形量角器，它的周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "35.98 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "28.98 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "21.98 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "D",
        "text": "57.96 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "14 * (314 / 100) / 2 + 14",
      "expect": "35.98"
    },
    "explanation": {
      "examPurpose": "測驗學生是否知道「半圓形的周長」除了半圓弧長之外，還必須加上底邊那一條直徑。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 45 125 A 85 85 0 0 1 215 125 Z\" fill=\"#eff6ff\"/><line x1=\"45\" y1=\"125\" x2=\"215\" y2=\"125\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 45 125 A 85 85 0 0 1 215 125\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4.5\"/><circle cx=\"130\" cy=\"125\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"130\" y=\"28\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">半圓弧長 21.98 公分</text><text x=\"130\" y=\"146\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">底邊直徑 14 公分</text><text x=\"250\" y=\"58\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">半圓周長要繞完整一圈：</text><text x=\"250\" y=\"88\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">紅色半圓弧 ＋ 藍色底邊直徑</text><text x=\"250\" y=\"118\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">21.98 ＋ 14 ＝ 35.98 公分</text></svg>",
          "caption": "半圓形周長示意圖：必須將紅色半圓弧與藍色底邊直徑相加"
        },
        {
          "type": "text",
          "text": "半圓形其實就是圓心角 180°（佔 1/2 圓）的扇形，先算出上方半圓弧的長度："
        },
        {
          "type": "eq",
          "expr": "14 × 3.14 ÷ 2 ＝ 21.98",
          "unit": "公分（半圓弧長）"
        },
        {
          "type": "text",
          "text": "量角器底下還有一條直線（直徑 14 公分），加起來才是完整的周長："
        },
        {
          "type": "eq",
          "expr": "21.98 ＋ 14 ＝ 35.98",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：大約 35.98 公分"
        }
      ],
      "insight": "「圓周長的一半」只有彎曲的弧；「半圓形的周長」是封閉圖形，等於「半圓弧 ＋ 1 條直徑」。",
      "distractorAnalysis": {
        "B": "只加了半徑 7 公分（21.98 ＋ 7 ＝ 28.98 公分），漏加另一半的半徑。",
        "D": "誤把直徑 14 公分當成半徑計算弧長，算成 14 × 3.14 ＋ 14 ＝ 57.96 公分。",
        "C": "只算出了上方半圓弧長 21.98 公分，忘記加上底邊那條直徑 14 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半圓周長 ＝ 直徑 × 3.14 ÷ 2 ＋ 直徑"
      ],
      "conceptCompare": "半圓底邊是一條直徑（也就是兩條半徑連成一條直線），道理和扇形周長要加兩條半徑完全相同。",
      "examVariations": "若題目改成「半徑 10 公分的半圓周長」，要先注意半徑 × 2 ＝ 直徑 20 公分，再算 20 × 3.14 ÷ 2 ＋ 20 ＝ 51.4 公分。"
    }
  },
  {
    "id": "U06-S4-B-008",
    "legacyId": "u06_008",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "跑道複合圖形",
    "batch": "課本原型題",
    "source": "課本 p.96 例題 8",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "學校操場跑道，中間是兩條各長 100 公尺的直線，兩端是半徑 30 公尺的半圓。沿著最內側跑道跑一圈大約是多少公尺？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "508.4 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "294.2 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "388.4 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "288.4 公尺",
        "trapCode": "U06_TRACK_INNER_OUTER_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "30 * 2 * (314 / 100) + 100 * 2",
      "expect": "388.4"
    },
    "explanation": {
      "examPurpose": "測驗學生能否將操場跑道拆解成「兩條直線 ＋ 兩個相同半圓（合為一個圓）」，並正確排除內部輔助線。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 85 35 L 235 35 A 45 45 0 0 1 235 125 L 85 125 A 45 45 0 0 1 85 35 Z\" fill=\"#ecfdf5\"/><line x1=\"85\" y1=\"35\" x2=\"85\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\"/><line x1=\"235\" y1=\"35\" x2=\"235\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\"/><line x1=\"85\" y1=\"80\" x2=\"40\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><line x1=\"85\" y1=\"35\" x2=\"235\" y2=\"35\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"85\" y1=\"125\" x2=\"235\" y2=\"125\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 85 125 A 45 45 0 0 1 85 35\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><path d=\"M 235 35 A 45 45 0 0 1 235 125\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><text x=\"160\" y=\"25\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直線 100 公尺</text><text x=\"160\" y=\"145\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直線 100 公尺</text><text x=\"138\" y=\"84\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">半徑 30 公尺</text><text x=\"295\" y=\"56\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">兩端紅弧合為 1 整圓</text><text x=\"295\" y=\"86\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">加上 2 條藍色直線</text><text x=\"295\" y=\"116\" font-size=\"12\" fill=\"#64748b\">內部虛線不算周長</text></svg>",
          "caption": "操場跑道分解圖：兩條藍色直線加上左右兩個紅色半圓（合為一個完整圓）"
        },
        {
          "type": "text",
          "text": "左右兩端各是一個半徑 30 公尺（直徑 60 公尺）的半圓，合起來剛好是一個完整的圓："
        },
        {
          "type": "eq",
          "expr": "30 × 2 × 3.14 ＝ 188.4",
          "unit": "公尺（兩端圓弧總長）"
        },
        {
          "type": "text",
          "text": "再把上下兩條直線跑道加上去，注意內部的虛線沒有跑在上面，不能算進去："
        },
        {
          "type": "eq",
          "expr": "100 × 2 ＋ 188.4 ＝ 388.4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：大約 388.4 公尺"
        }
      ],
      "insight": "複合圖形算周長只要沿著「最外圍」走一圈：操場就是「1 個整圓周長 ＋ 2 條直線長」，千萬別加內部虛線。",
      "distractorAnalysis": {
        "A": "誤把左右半圓內部的兩條直徑虛線（60 × 2 ＝ 120 公尺）也加進周長，算出 388.4 ＋ 120 ＝ 508.4 公尺。",
        "B": "誤把題目的半徑 30 公尺當成直徑來算整圓，變成 30 × 3.14 ＋ 200 ＝ 294.2 公尺。",
        "D": "只算了其中一條 100 公尺直線，漏加對面另一條直線，算出 100 ＋ 188.4 ＝ 288.4 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "跑道一圈全長 ＝ 1 個整圓周長 ＋ 2 條直線跑道長"
      ],
      "conceptCompare": "求整個操場「周長」時，中間分隔矩形與半圓的虛線要完全忽略；若問「面積」才會分別算出長方形面積與圓面積相加。",
      "examVariations": "段考進階題常考「跑道寬 1 公尺，外圈跑道比內圈跑道一圈多幾公尺？」，直線部分相抵消，只差在外圓直徑多 2 公尺，所以多 2 × 3.14 ＝ 6.28 公尺。"
    }
  },
  {
    "id": "U06-S1-X-009",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-1",
    "sectionName": "圓周率",
    "category": "圓周率無關大小",
    "batch": "課本原型題",
    "source": "課本 p.89 概念辨析延伸",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "爸爸拿了一個直徑 2 公分的 1 元硬幣，小華拿了遊樂園裡直徑 80 公尺的真實摩天輪。分別算出硬幣和摩天輪「圓周長 ÷ 直徑」的比值，哪一個比較大？",
    "options": [
      {
        "key": "A",
        "text": "摩天輪的比值比較大，因為直徑長很多",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "一樣大，都大約是 3.14",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "硬幣的比值比較大，因為半徑比較小",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "摩天輪的比值比較大，因為圓面積比較大",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "314/100",
      "expect": "3.14"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「圓周率是任何圓的圓周長與直徑的固定比值」，不會因為圓形的大小改變而變大或變小。",
      "steps": [
        {
          "type": "text",
          "text": "先看圓周率的定義：任何圓的「圓周長 ÷ 直徑」都叫做圓周率。"
        },
        {
          "type": "eq",
          "expr": "圓周長 ÷ 直徑 ＝ 圓周率（約 3.14）"
        },
        {
          "type": "text",
          "text": "硬幣雖然很小、摩天輪雖然很大，當直徑放大時，圓周長也會等比例一起放大，所以兩者相除後的比值完全相同。"
        },
        {
          "type": "answer",
          "text": "答：一樣大，都大約是 3.14。"
        }
      ],
      "insight": "圓越大，圓周長跟直徑一起變大，兩者相除的比值（圓周率）永遠不變！",
      "distractorAnalysis": {
        "A": "誤以為圓形越大、圓周率就會跟著越大，忽略了圓周長與直徑是等比例放大的。",
        "D": "把圓面積的放大效果錯套用到「圓周長 ÷ 直徑」的比值上。",
        "C": "把半徑與直徑的大小關係和圓周率混為一談，誤認圓小比值就大。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周率 ＝ 圓周長 ÷ 直徑 ≈ 3.14",
        "所有圓的圓周率都是相同的固定常數，與圓的大小無關"
      ],
      "conceptCompare": "「圓周長」會隨直徑變大而變長，「圓周率」卻永遠固定約 3.14；就像小正方形和大正方形的「周長 ÷ 邊長」永遠都是 4 一樣。",
      "examVariations": "段考常把問題改成「直徑 10 公分的圓和半徑 50 公分的圓，哪個圓周率比較大？」答案仍然是一樣大！"
    }
  },
  {
    "id": "U06-S2-X-010",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長與反求",
    "category": "圓周長反求直徑",
    "batch": "課本原型題",
    "source": "課本 p.99 題 7 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "早餐店廚房裡有一個圓柱形麥片罐，用皮尺量出罐底的圓周長大約是 40.82 公分，這個麥片罐底面的直徑大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "14 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "1.3 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "C",
        "text": "6.5 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "13 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "40.82 / (314/100)",
      "expect": "13"
    },
    "explanation": {
      "examPurpose": "測驗學生能否逆用圓周長公式「直徑 ＝ 圓周長 ÷ 3.14」，並正確完成除數為兩位小數的除法直式。",
      "steps": [
        {
          "type": "text",
          "text": "已知圓周長反求直徑，用圓周長除以圓周率 3.14："
        },
        {
          "type": "eq",
          "expr": "40.82 ÷ 3.14 ＝ 13",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "40.82",
          "divisor": "3.14",
          "mode": "exact",
          "note": "除數 3.14 與被除數 40.82 的小數點同時向右移 2 位，變成 4082 ÷ 314"
        },
        {
          "type": "answer",
          "text": "答：大約 13 公分。"
        }
      ],
      "insight": "除數 3.14 有兩位小數，直式計算時兩個數的小數點要一起向右移 2 位再除！",
      "distractorAnalysis": {
        "B": "小數點位移不一致，誤將除數向右移 2 位、被除數只向右移 1 位，算成 408.2 ÷ 314 ＝ 1.3 公分。",
        "C": "算出直徑 13 公分後又多除以 2，把題目要問的「直徑」錯答成「半徑 6.5 公分」。",
        "A": "試商進位錯誤：算 4082 ÷ 314 時十位為 1，餘 942 除以 314 應得 3，卻錯試商成 4 而選了 14 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 圓周長 ÷ 3.14",
        "半徑 ＝ 圓周長 ÷ 3.14 ÷ 2"
      ],
      "conceptCompare": "求圓周長用乘法（直徑 × 3.14）；已知圓周長反求直徑用除法（圓周長 ÷ 3.14）。題目問直徑時算完不用再除以 2。",
      "examVariations": "若題目最後改問「這個麥片罐底面的半徑大約是多少公分？」，就要把 13 再除以 2，得到 6.5 公分。"
    }
  },
  {
    "id": "U06-S2-X-011",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長與反求",
    "category": "已知半徑求周長應用",
    "batch": "課本原型題",
    "source": "課本 p.90 與 p.99 題 6 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "烘焙教室做了一個半徑 15 公分的圓形蛋糕盤，想要用蕾絲花邊沿著盤緣繞 2 圈做裝飾（接頭處不計），共需要大約多少公分的蕾絲花邊？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "188.4 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "47.1 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "18.84 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "D",
        "text": "94.2 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "15 * 2 * (314/100) * 2",
      "expect": "188.4"
    },
    "explanation": {
      "examPurpose": "測驗已知半徑時先乘 2 換成直徑再求圓周長，並注意題目要求繞 2 圈的多步驟審題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目給的是「半徑 15 公分」，先乘 2 求出圓形蛋糕盤的直徑："
        },
        {
          "type": "eq",
          "expr": "15 × 2 ＝ 30",
          "unit": "公分（蛋糕盤直徑）"
        },
        {
          "type": "text",
          "text": "第 2 步：繞 2 圈相當於 2 個直徑 30 公分的圓周長，先算 30 × 2 ＝ 60 再乘 3.14 更好算："
        },
        {
          "type": "eq",
          "expr": "30 × 2 × 3.14 ＝ 60 × 3.14 ＝ 188.4",
          "unit": "公分"
        },
        {
          "type": "mul",
          "a": "60",
          "b": "3.14",
          "note": "直式計算 60 × 3.14，小數共 2 位，去掉末尾的 0 得 188.4"
        },
        {
          "type": "answer",
          "text": "答：共需要大約 188.4 公分的蕾絲花邊。"
        }
      ],
      "insight": "先算「半徑 × 2 ＝ 直徑」，再把所有整數先乘起來湊整十數（60 × 3.14），最不容易算錯！",
      "distractorAnalysis": {
        "B": "既把半徑 15 當成直徑，又忘記乘以 2 圈，算成 15 × 3.14 ＝ 47.1 公分。",
        "C": "小數點位數點錯位置，少算一位變成 18.84 公分。",
        "D": "把半徑 15 公分誤當成直徑來算（15 × 3.14 × 2 ＝ 94.2 公分），或是只算了繞 1 圈的長度就停筆。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 半徑 × 2 × 3.14",
        "繞 2 圈的總長 ＝ 圓周長 × 2"
      ],
      "conceptCompare": "看到題目給「半徑」，立刻先在草稿紙寫出「直徑 ＝ 半徑 × 2」，避免直接拿半徑去乘 3.14。",
      "examVariations": "段考常改成「有一條 200 公分的蕾絲花邊繞盤子 2 圈後，還剩下多少公分？」（200 − 188.4 ＝ 11.6 公分）。"
    }
  },
  {
    "id": "U06-S3-X-012",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "45° 扇形弧長",
    "batch": "課本原型題",
    "source": "課本 p.93 做做看延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "摺紙課時，小宇剪出一個半徑 18 公分、圓心角 45° 的扇形紙卡，想在扇形的圓弧邊貼上紅色亮片線（不含兩條直邊），請問這段弧長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "14.13 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "7.065 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "18.84 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "50.13 公分",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "18 * 2 * (314/100) * (45/360)",
      "expect": "14.13"
    },
    "explanation": {
      "examPurpose": "測驗學生能否把圓心角 45° 化為 1/8 圓，並區分「只求弧長」與「求扇形周長」的差別。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算圓心角 45° 是幾分之幾圓：45 ÷ 360 ＝ 1/8 圓。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"160\" rx=\"10\" fill=\"#ffffff\"/><path d=\"M 85,130 L 180,130 A 95,95 0 0,0 152.2,62.8 Z\" fill=\"#fff1f2\"/><line x1=\"85\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"85\" y1=\"130\" x2=\"152.2\" y2=\"62.8\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><path d=\"M 180,130 A 95,95 0 0,0 152.2,62.8\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"130\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"122\" y=\"118\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">45°</text><text x=\"132\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">半徑 18 公分（虛線不計）</text><rect x=\"220\" y=\"20\" width=\"222\" height=\"118\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"234\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">圓心角比例：45 ÷ 360 ＝ 1/8 圓</text><text x=\"234\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">只算紅色弧長（不含直邊）</text><text x=\"234\" y=\"108\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">36 × 3.14 × 1/8 ＝ 14.13 公分</text></svg>",
          "caption": "圖解：45° 扇形佔整圓的 1/8，題目只求紅色弧長，不加藍色半徑。"
        },
        {
          "type": "eq",
          "expr": "18 × 2 × 3.14 × 1/8 ＝ 36 × 1/8 × 3.14 ＝ 4.5 × 3.14 ＝ 14.13",
          "unit": "公分"
        },
        {
          "type": "mul",
          "a": "4.5",
          "b": "3.14",
          "note": "直式計算 4.5 × 3.14，小數共 3 位，去掉末尾的 0 得 14.13"
        },
        {
          "type": "answer",
          "text": "答：這段弧長大約是 14.13 公分。"
        }
      ],
      "insight": "先算出「36 × 1/8 ＝ 4.5」再乘 3.14，比先乘 3.14 再除以 8 輕鬆非常多！",
      "figureNote": "圖中藍色虛線代表兩條半徑（不算在弧長裡），紅色粗線才是亮片線要貼的弧長。",
      "distractorAnalysis": {
        "C": "把 45 ÷ 360 錯約分成 1/6 圓，算成 36 × 3.14 × 1/6 ＝ 18.84 公分。",
        "D": "題目明確要求「弧長（不含兩條直邊）」，卻多加了兩條半徑 36 公分，算出整個扇形周長 50.13 公分。",
        "B": "忘記把半徑 18 公分乘以 2 變成直徑，直接列成 18 × 3.14 × 1/8 ＝ 7.065 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長 ＝ 直徑 × 3.14 × (圓心角 ÷ 360)",
        "常見角度比例：45° ＝ 1/8 圓、60° ＝ 1/6 圓、90° ＝ 1/4 圓"
      ],
      "conceptCompare": "題目問「弧長」只要算彎曲的紅線；題目問「周長」才要把彎曲弧長加上兩條直線半徑。",
      "examVariations": "若這題改問「這張扇形紙卡的周長大約是多少公分？」，就要算 14.13 ＋ 18 × 2 ＝ 50.13 公分。"
    }
  },
  {
    "id": "U06-S3-X-013",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "150° 扇形弧長",
    "batch": "課本原型題",
    "source": "課本 p.94 例題 4 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "園藝社團用直徑 24 公分的圓形花圈底盤，裁出一個圓心角 150° 的扇形裝飾板，這個扇形外側的圓弧長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "55.4 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "25.12 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "C",
        "text": "62.8 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "31.4 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "24 * (314/100) * (150/360)",
      "expect": "31.4"
    },
    "explanation": {
      "examPurpose": "測驗已知直徑與圓心角 150° 時，先約分角度為 5/12 圓再與直徑先約分，避免繁瑣小數運算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把圓心角 150° 佔整個圓的比例約分到最簡：150 ÷ 360 ＝ 5/12 圓。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"160\" rx=\"10\" fill=\"#ffffff\"/><path d=\"M 125,128 L 203,128 A 78,78 0 0,0 57.5,89 Z\" fill=\"#fff1f2\"/><line x1=\"125\" y1=\"128\" x2=\"203\" y2=\"128\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"125\" y1=\"128\" x2=\"57.5\" y2=\"89\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><path d=\"M 203,128 A 78,78 0 0,0 57.5,89\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"125\" cy=\"128\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"122\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">150°</text><text x=\"125\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">直徑 24 公分（半徑 12 公分）</text><rect x=\"222\" y=\"20\" width=\"220\" height=\"118\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"236\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">角度比例：150 ÷ 360 ＝ 5/12 圓</text><text x=\"236\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">只算紅色弧長（不含直邊）</text><text x=\"236\" y=\"108\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">24 × 5/12 × 3.14 ＝ 31.4 公分</text></svg>",
          "caption": "圖解：直徑 24 公分、圓心角 150° 的扇形，先約分 24 × 5/12 ＝ 10。"
        },
        {
          "type": "eq",
          "expr": "24 × 3.14 × 5/12 ＝ 10 × 3.14 ＝ 31.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：外側圓弧長大約是 31.4 公分。"
        }
      ],
      "insight": "把 24 和分母 12 先約分變成 2，再乘分子 5 得到 10，10 × 3.14 一秒心算就是 31.4！",
      "figureNote": "題目直接給「直徑 24 公分」，直接代入「直徑 × 3.14 × 5/12」，不要再多乘以 2；也只要算紅色弧長。",
      "distractorAnalysis": {
        "B": "把 150 ÷ 360 錯約分成 1/3 圓，算成 24 × 3.14 × 1/3 ＝ 25.12 公分。",
        "C": "題目已經給直徑 24 公分，卻當成半徑又多乘 2，算成 24 × 2 × 3.14 × 5/12 ＝ 62.8 公分。",
        "A": "題目只問外側圓弧長，卻多加了兩條半徑（直徑 24 公分），算成 31.4 ＋ 24 ＝ 55.4 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "150° ÷ 360° ＝ 5/12 圓",
        "弧長 ＝ 直徑 × (圓心角 ÷ 360) × 3.14（先跟 3.14 以外的數約分）"
      ],
      "conceptCompare": "看到題目要先圈出兩個關鍵詞：「給直徑還是給半徑？」以及「求弧長還是求周長？」",
      "examVariations": "若改為求這個扇形裝飾板的「周長」，就要把弧長 31.4 再加上兩條半徑（直徑 24），答案會變成 55.4 公分。"
    }
  },
  {
    "id": "U06-S3-X-014",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "幾分之幾圓扇形周長",
    "batch": "課本原型題",
    "source": "課本 p.95 例題 5 延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "美勞課要把一張半徑 6 公分的圓形色紙剪成一個 2/3 圓的扇形造型卡，這張 2/3 圓扇形造型卡的周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "25.12 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "37.12 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "24.56 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "31.12 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "6 * 2 * (314/100) * (2/3) + 6 * 2",
      "expect": "37.12"
    },
    "explanation": {
      "examPurpose": "測驗已知扇形為幾分之幾圓（2/3 圓）與半徑時，算出弧長後務必加上 2 條半徑形成封閉周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目給半徑 6 公分，先算出 2/3 圓的紅色弧長，再補上 2 條藍色直線半徑："
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"160\" rx=\"10\" fill=\"#ffffff\"/><path d=\"M 105,82 L 132,35.2 A 54,54 0 1,0 132,128.8 Z\" fill=\"#fef3c7\"/><path d=\"M 132,35.2 A 54,54 0 1,0 132,128.8\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"105\" y1=\"82\" x2=\"132\" y2=\"35.2\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"105\" y1=\"82\" x2=\"132\" y2=\"128.8\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"105\" cy=\"82\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"78\" y=\"86\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\">2/3 圓</text><text x=\"148\" y=\"60\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">半徑 6 公分</text><text x=\"148\" y=\"112\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">半徑 6 公分</text><rect x=\"226\" y=\"16\" width=\"216\" height=\"126\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"240\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">扇形周長 ＝ 紅弧 ＋ 2 藍半徑</text><text x=\"240\" y=\"70\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">紅色弧長：25.12 公分</text><text x=\"240\" y=\"98\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">藍色 2 半徑：6 × 2 ＝ 12 公分</text><text x=\"240\" y=\"126\" font-size=\"13\" font-weight=\"800\" fill=\"#059669\">總周長：37.12 公分</text></svg>",
          "caption": "圖解：2/3 圓扇形的封閉周長包含 1 條紅色 2/3 圓弧和 2 條藍色半徑。"
        },
        {
          "type": "eq",
          "expr": "6 × 2 × 3.14 × 2/3 ＝ 8 × 3.14 ＝ 25.12",
          "unit": "公分（弧長）"
        },
        {
          "type": "mul",
          "a": "8",
          "b": "3.14",
          "note": "直式計算 8 × 3.14 ＝ 25.12"
        },
        {
          "type": "eq",
          "expr": "25.12 ＋ 6 × 2 ＝ 25.12 ＋ 12 ＝ 37.12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這張 2/3 圓扇形造型卡的周長大約是 37.12 公分。"
        }
      ],
      "insight": "大於半圓的扇形（像 2/3 圓）一樣有 2 條直邊半徑，沿著外框描一圈才不會漏加 12 公分！",
      "figureNote": "看圖檢查：手指從圓心沿藍線走到圓弧，繞過紅弧後再沿另一條藍線走回圓心，一共經過 1 條紅弧和 2 條藍線。",
      "distractorAnalysis": {
        "A": "只算出了 2/3 圓的弧長 25.12 公分，忘記加上兩條直線半徑（6 × 2 ＝ 12 公分）。",
        "C": "算弧長時把半徑 6 當成直徑來乘（6 × 3.14 × 2/3 ＝ 12.56），加上 12 後誤得 24.56 公分。",
        "D": "算出弧長 25.12 公分後只加了 1 條半徑 6 公分，漏加另一條半徑，算成 25.12 ＋ 6 ＝ 31.12 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2",
        "2/3 圓相當於圓心角 240°"
      ],
      "conceptCompare": "無論扇形是 1/4 圓還是 2/3 圓，只要從圓剪下來形成「扇形」，周長永遠等於「弧長 ＋ 2 條半徑」。",
      "examVariations": "段考常把「2/3 圓」換成「圓心角 240° 的扇形」，240 ÷ 360 ＝ 2/3 圓，算式與答案完全相同。"
    }
  },
  {
    "id": "U06-S3-X-015",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "72° 扇形周長",
    "batch": "課本原型題",
    "source": "課本 p.95 做做看延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "科學營製作測風向的旗標，把一片半徑 15 公分、圓心角 72° 的扇形塑膠片邊緣繞一圈貼滿反光條，共需要大約幾公分的反光條？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "18.84 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "33.84 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "C",
        "text": "45.7 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "48.84 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "15 * 2 * (314/100) * (72/360) + 15 * 2",
      "expect": "48.84"
    },
    "explanation": {
      "examPurpose": "測驗圓心角 72° 轉化為 1/5 圓的熟練度，並完整計算「弧長 ＋ 兩條半徑」的扇形周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算圓心角 72° 是幾分之幾圓：72 ÷ 360 ＝ 1/5 圓。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"160\" rx=\"10\" fill=\"#ffffff\"/><path d=\"M 75,130 L 170,130 A 95,95 0 0,0 104.4,39.6 Z\" fill=\"#fef3c7\"/><path d=\"M 170,130 A 95,95 0 0,0 104.4,39.6\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"75\" y1=\"130\" x2=\"170\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"75\" y1=\"130\" x2=\"104.4\" y2=\"39.6\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"75\" cy=\"130\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"105\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">72°</text><text x=\"125\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">半徑 15 公分</text><rect x=\"218\" y=\"16\" width=\"224\" height=\"126\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"232\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72 ÷ 360 ＝ 1/5 圓</text><text x=\"232\" y=\"70\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">紅色弧長：18.84 公分</text><text x=\"232\" y=\"98\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">藍色 2 半徑：15 × 2 ＝ 30 公分</text><text x=\"232\" y=\"126\" font-size=\"13\" font-weight=\"800\" fill=\"#059669\">總周長：48.84 公分</text></svg>",
          "caption": "圖解：72° 是 1/5 圓，沿邊緣貼一圈反光條包含紅色弧長與兩條藍色半徑。"
        },
        {
          "type": "eq",
          "expr": "15 × 2 × 3.14 × 1/5 ＝ 6 × 3.14 ＝ 18.84",
          "unit": "公分（弧長）"
        },
        {
          "type": "mul",
          "a": "6",
          "b": "3.14",
          "note": "直式計算 6 × 3.14 ＝ 18.84"
        },
        {
          "type": "eq",
          "expr": "18.84 ＋ 15 × 2 ＝ 18.84 ＋ 30 ＝ 48.84",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：共需要大約 48.84 公分的反光條。"
        }
      ],
      "insight": "記住常見圓心角好朋友：72° 就是 1/5 圓（5 × 72 ＝ 360）！算完弧長立刻加上 2 條半徑。",
      "figureNote": "「邊緣繞一圈貼滿」代表要算整個封閉扇形的周長，1 條紅弧 ＋ 2 條藍邊缺一不可。",
      "distractorAnalysis": {
        "A": "只算出紅色弧長 18.84 公分就停筆，忘記兩條直邊也要貼反光條（少加 30 公分）。",
        "C": "把 72 ÷ 360 錯算成 1/6 圓，算出弧長 30 × 3.14 × 1/6 ＝ 15.7 公分，再加 30 得 45.7 公分。",
        "B": "算出弧長 18.84 公分後，只加了 1 條半徑 15 公分（18.84 ＋ 15 ＝ 33.84 公分）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "72° ＝ 1/5 圓（因為 360 ÷ 72 ＝ 5）",
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2"
      ],
      "conceptCompare": "求「周長」時，2 條半徑的和剛好就是「直徑」（15 × 2 ＝ 30 公分），所以也可以直接寫成「弧長 ＋ 直徑」。",
      "examVariations": "常見變形是把「72°」換成「144°」（2/5 圓）或「216°」（3/5 圓），分母同樣都是 5！"
    }
  },
  {
    "id": "U06-S4-X-016",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "方形角 1/4 弧著色",
    "batch": "課本原型題",
    "source": "課本 p.99 題 5-1 延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "在一張邊長 20 公分的正方形色紙中，以左下角頂點為圓心、邊長為半徑，從左上角到右下角畫出一條 1/4 圓弧，並把弧線右上方的角落塗滿顏色。請問這塊塗色部分的周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "71.4 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "31.4 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "111.4 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "51.4 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "20 * 2 * (314/100) * (1/4) + 20 * 2",
      "expect": "71.4"
    },
    "explanation": {
      "examPurpose": "測驗學生判讀複合圖形「外圍封閉邊界」的能力，知道角落塗色塊的周長是由 1 條 1/4 圓弧與正方形的 2 條邊圍成。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：用螢光筆沿著塗色部分的外圍描一圈，可以看到它由「1 條半徑 20 公分的 1/4 圓弧」和「正方形的上方、右方 2 條直邊」組成。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"160\" rx=\"10\" fill=\"#ffffff\"/><line x1=\"55\" y1=\"22\" x2=\"55\" y2=\"132\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\"/><line x1=\"55\" y1=\"132\" x2=\"165\" y2=\"132\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\"/><path d=\"M 55,22 L 165,22 L 165,132 A 110,110 0 0,0 55,22 Z\" fill=\"#fef3c7\"/><line x1=\"55\" y1=\"22\" x2=\"165\" y2=\"22\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"165\" y1=\"22\" x2=\"165\" y2=\"132\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><path d=\"M 55,22 A 110,110 0 0,1 165,132\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"55\" cy=\"132\" r=\"3.5\" fill=\"#1e293b\"/><text x=\"110\" y=\"15\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">20 公分</text><text x=\"195\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">20 公分</text><text x=\"42\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">圓心</text><rect x=\"232\" y=\"16\" width=\"212\" height=\"126\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"246\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">著色邊界 ＝ 紅弧 ＋ 2 藍邊</text><text x=\"246\" y=\"70\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">紅色 1/4 弧：31.4 公分</text><text x=\"242\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">藍色 2 直邊：20 ＋ 20 ＝ 40 公分</text><text x=\"246\" y=\"126\" font-size=\"13\" font-weight=\"800\" fill=\"#059669\">總周長：71.4 公分</text></svg>",
          "caption": "圖解：塗色部分（黃色區域）的外圍由紅色 1/4 圓弧和兩條藍色正方形邊圍成，左下虛線邊不計入。"
        },
        {
          "type": "eq",
          "expr": "20 × 2 × 3.14 × 1/4 ＝ 10 × 3.14 ＝ 31.4",
          "unit": "公分（紅色 1/4 弧長）"
        },
        {
          "type": "eq",
          "expr": "31.4 ＋ 20 ＋ 20 ＝ 71.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這塊塗色部分的周長大約是 71.4 公分。"
        }
      ],
      "insight": "求複合塗色圖形的周長，只算「塗色塊外圍那一圈」，沒有碰到塗色區的虛線邊絕對不能加進去！",
      "figureNote": "正方形左邊和底下的兩條灰色虛線在塗色區域之外，所以塗色部分只有上、右兩條藍色直邊，加上中間的紅色 1/4 圓弧。",
      "distractorAnalysis": {
        "B": "只算出 1/4 圓弧的長度 31.4 公分，漏算塗色部分外圍的兩條正方形邊長（40 公分）。",
        "C": "把整個正方形的四條邊周長 20 × 4 ＝ 80 公分全部加進來，再加弧長 31.4 得 111.4 公分。",
        "D": "算出弧長 31.4 公分後只加了 1 條正方形邊長 20 公分，少加另一條直邊，得 51.4 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方形角 1/4 弧夾角塗色周長 ＝ 1/4 圓弧長 ＋ 邊長 × 2"
      ],
      "conceptCompare": "左下角的 1/4 圓扇形周長是 31.4 ＋ 20 × 2 ＝ 71.4 公分；而右上角剩餘的塗色部分周長也是 31.4 ＋ 20 × 2 ＝ 71.4 公分！雖然兩塊面積不同，外圍周長卻一模一樣！",
      "examVariations": "段考常把兩個 1/4 弧疊在一起變成「正方形裡的一片葉子」，葉子周長則是兩條 1/4 弧（共半圓）31.4 × 2 ＝ 62.8 公分，就不含直邊了。"
    }
  },
  {
    "id": "U06-S4-X-017",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "凸半圓凹半圓複合",
    "batch": "課本原型題",
    "source": "課本 p.99 題 5-2 延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "美術班設計了一個對稱窗花圖案：中間是一個邊長 40 公分的正方形，上方向外凸出一個直徑 40 公分的半圓，下方卻向內凹進一個直徑 40 公分的半圓，左右兩側保留直線邊。這個窗花圖案外圍一圈的周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "285.6 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "205.6 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "80 公分",
        "trapCode": "U06_TRACK_INNER_OUTER_ERR"
      },
      {
        "key": "D",
        "text": "142.8 公分",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "40 * (314/100) + 40 * 2",
      "expect": "205.6"
    },
    "explanation": {
      "examPurpose": "測驗學生區分「面積割補抵消」與「周長邊界累加」的核心觀念：凹進去的半圓面積雖可補平，但凹進去的弧線邊界一樣要走過並計入周長！",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：沿著窗花最外圍走一圈，上下各有一條直徑 40 公分的紅色半圓弧，合起來剛好是一個整圓的圓周長；左右兩側則是兩條 40 公分的藍色直邊。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"160\" rx=\"10\" fill=\"#ffffff\"/><path d=\"M 72,48 A 38,38 0 0,1 148,48 L 148,124 A 38,38 0 0,0 72,124 Z\" fill=\"#fef3c7\"/><line x1=\"72\" y1=\"48\" x2=\"148\" y2=\"48\" stroke=\"#94a3b8\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/><line x1=\"72\" y1=\"124\" x2=\"148\" y2=\"124\" stroke=\"#94a3b8\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/><path d=\"M 72,48 A 38,38 0 0,1 148,48\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><path d=\"M 148,124 A 38,38 0 0,0 72,124\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"72\" y1=\"48\" x2=\"72\" y2=\"124\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"48\" x2=\"148\" y2=\"124\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><text x=\"42\" y=\"90\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">40 公分</text><text x=\"176\" y=\"90\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">40 公分</text><text x=\"110\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">上凸半圓弧</text><text x=\"110\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">下凹半圓弧</text><rect x=\"218\" y=\"16\" width=\"226\" height=\"126\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"232\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">兩半圓弧合為 1 整圓（虛線不計）</text><text x=\"228\" y=\"70\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">2 條紅弧：40 × 3.14 ＝ 125.6 公分</text><text x=\"232\" y=\"98\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">2 條藍邊：40 ＋ 40 ＝ 80 公分</text><text x=\"232\" y=\"126\" font-size=\"13\" font-weight=\"800\" fill=\"#059669\">總周長：205.6 公分</text></svg>",
          "caption": "圖解：凸半圓與凹半圓的兩條紅色弧線都要算入周長，合為直徑 40 公分的一整圓周；灰色虛線不算。"
        },
        {
          "type": "eq",
          "expr": "40 × 3.14 ＝ 125.6",
          "unit": "公分（上下兩半圓弧合計）"
        },
        {
          "type": "eq",
          "expr": "125.6 ＋ 40 ＋ 40 ＝ 205.6",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：窗花外圍一圈的周長大約是 205.6 公分。"
        }
      ],
      "insight": "「上凸下凹」只是面積補起來一樣大，算周長時凹進去的弧線依然是外圍邊界，兩半圓弧合起來就是 1 整圓周！",
      "figureNote": "圖中上下兩條灰色虛線在圖形內部，不能算進周長；外圍剛好是 2 條紅色半圓弧 ＋ 左右 2 條藍色直邊。",
      "distractorAnalysis": {
        "A": "誤把正方形內部上下兩條灰色虛線（40 ＋ 40 ＝ 80 公分）也加進周長中，算成 125.6 ＋ 160 ＝ 285.6 公分。",
        "D": "漏掉其中一個半圓弧，只算了 1 個半圓弧 62.8 公分加上 80 公分，誤得 142.8 公分。",
        "C": "把「面積割補」和「周長」搞混，誤以為上凸半圓和下凹半圓的弧長互相抵消為 0，只算出左右兩條直線 80 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "上凸半圓 ＋ 下凹半圓的複合周長 ＝ 1 個整圓周長 ＋ 兩側直線邊長"
      ],
      "conceptCompare": "如果這題改成問「面積」，把上面凸出的半圓剪下來補進下面凹進的半圓，面積剛好等於原正方形（40 × 40 ＝ 1600 平方公分）；但算「周長」時，兩條圓弧都要算！",
      "examVariations": "段考常把「下凹半圓」改成左右兩側都向內凹，只要把描出來的外圍紅弧加總，看能拼成幾個整圓即可。"
    }
  },
  {
    "id": "U06-S4-X-018",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "S 型雙弧機器人路徑",
    "batch": "課本原型題",
    "source": "課本 p.97 例題 3 延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "公園裡有一條封閉的「S型波浪步道」：起點與終點在同一條直線上，機器人去程先從直徑上方沿著一個直徑 60 公尺的大半圓弧走到終點，回程時再從另一側沿著一條直徑 40 公尺與一條直徑 20 公尺相接的兩個小半圓弧走回起點。機器人繞這條封閉步道走一圈，大約走了多少公尺？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "248.4 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "94.2 公尺",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "C",
        "text": "376.8 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "188.4 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(60 + 40 + 20) * (314/100) / 2",
      "expect": "188.4"
    },
    "explanation": {
      "examPurpose": "測驗學生運用「先分別算出半圓直徑的一半再與 3.14 相乘（分配律湊整）」來簡化多段圓弧加總。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把去程的大半圓弧和回程的兩個小半圓弧畫出來，中間藍色虛線是直徑參考線，機器人沒有走上去，不計入距離。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"460\" height=\"160\" rx=\"10\" fill=\"#ffffff\"/><line x1=\"30\" y1=\"92\" x2=\"180\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><path d=\"M 30,92 A 75,75 0 0,1 180,92\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><path d=\"M 30,92 A 50,50 0 0,0 130,92\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><path d=\"M 130,92 A 25,25 0 0,1 180,92\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"30\" cy=\"92\" r=\"4\" fill=\"#1e293b\"/><circle cx=\"180\" cy=\"92\" r=\"4\" fill=\"#1e293b\"/><text x=\"26\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">起點</text><text x=\"184\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">終點</text><text x=\"105\" y=\"14\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">大半圓直徑 60 公尺</text><text x=\"80\" y=\"154\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">直徑 40 公尺</text><text x=\"155\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#e11d48\">直徑 20 公尺</text><rect x=\"214\" y=\"16\" width=\"232\" height=\"126\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"228\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">藍虛線為直徑參考線（不計入）</text><text x=\"228\" y=\"70\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">大紅半圓弧：30 × 3.14 ＝ 94.2</text><text x=\"224\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">兩小弧：(20 ＋ 10) × 3.14 ＝ 94.2</text><text x=\"228\" y=\"126\" font-size=\"13\" font-weight=\"800\" fill=\"#059669\">總路程：60 × 3.14 ＝ 188.4 公尺</text></svg>",
          "caption": "圖解：三個紅色半圓弧的直徑和 40 ＋ 20 ＝ 60，回程兩小弧剛好等於去程大弧長。"
        },
        {
          "type": "eq",
          "expr": "(60 ÷ 2 ＋ 40 ÷ 2 ＋ 20 ÷ 2) × 3.14 ＝ (30 ＋ 20 ＋ 10) × 3.14 ＝ 60 × 3.14 ＝ 188.4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：機器人繞一圈大約走了 188.4 公尺。"
        }
      ],
      "insight": "只要兩個小半圓的直徑加起來等於大半圓直徑（40 ＋ 20 ＝ 60），回程兩個小半圓弧合起來就跟去程大半圓弧一樣長！",
      "figureNote": "去程與回程的距離竟然完全相等（都是 94.2 公尺），所以整圈合起來剛好就是一個直徑 60 公尺的大圓周長！",
      "distractorAnalysis": {
        "A": "誤把中間藍色虛線標示的直徑長度 60 公尺也加進去，算成 188.4 ＋ 60 ＝ 248.4 公尺。",
        "C": "把題目給的直徑 60、40、20 當成半徑再乘以 2，算成 188.4 × 2 ＝ 376.8 公尺。",
        "B": "只算了去程直徑 60 公尺大半圓的弧長 94.2 公尺，忘記加上回程兩個小半圓弧的長度。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "多段相接半圓弧總長 ＝ (各直徑之和 ÷ 2) × 3.14",
        "去程大半圓弧長 ＝ 回程小半圓弧長總和（只要小直徑和 ＝ 大直徑）"
      ],
      "conceptCompare": "用分配律把每段共有多少個 3.14 合併起來，不用分開算出 94.2、62.8、31.4 再加總，速度更快也更不會進位出錯！",
      "examVariations": "段考常把回程改成「三個或四個直徑不相等的波浪半圓弧」，只要起點到終點的總直徑不變，回程路程永遠等於去程大半圓弧！"
    }
  },
  {
    "id": "U06-RV-X-019",
    "legacyId": null,
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元總複習",
    "category": "繩長圍不同圖形比較",
    "batch": "課本原型題",
    "source": "課本 p.98 題 1 延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "美勞社用三條緞帶分別圍出「邊長 20 公分的正方形」、「直徑 20 公分的圓形」和「邊長 20 公分的正三角形」。請問周長最接近的兩個圖形，它們的周長相差多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "20 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "17.2 公分",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "C",
        "text": "86 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "2.8 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "20 * (314/100) - 20 * 3",
      "expect": "2.8"
    },
    "explanation": {
      "examPurpose": "透過比較相同邊長／直徑的正三角形、圓形與正方形周長，讓學生從具體數值感受「圓周長大約是直徑的 3.14 倍，最接近正三角形的 3 倍」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：分別算出三種圖形的周長："
        },
        {
          "type": "eq",
          "expr": "正方形周長 ＝ 20 × 4 ＝ 80",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "圓形周長 ＝ 20 × 3.14 ＝ 62.8",
          "unit": "公分"
        },
        {
          "type": "mul",
          "a": "20",
          "b": "3.14",
          "note": "直式計算 20 × 3.14 ＝ 62.8"
        },
        {
          "type": "eq",
          "expr": "正三角形周長 ＝ 20 × 3 ＝ 60",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：比較兩兩相差，80 − 62.8 ＝ 17.2 公分，而 62.8 − 60 ＝ 2.8 公分，所以圓形與正三角形最接近。"
        },
        {
          "type": "eq",
          "expr": "62.8 − 60 ＝ 2.8",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：圓形與正三角形周長最接近，相差 2.8 公分。"
        }
      ],
      "insight": "圓周長 ＝ 3.14 個直徑，只比正三角形的 3 個邊長多出「0.14 個直徑」（20 × 0.14 ＝ 2.8 公分），遠小於正方形的 4 個邊長！",
      "distractorAnalysis": {
        "A": "誤把圓形直徑 20 公分當成半徑計算，得出圓周長 125.6 公分，導致誤選正方形 80 公分和正三角形 60 公分相減（80 − 60 ＝ 20 公分）。",
        "B": "只把 80 − 62.8 ＝ 17.2 公分算出來就以為是最小差，忽略了圓形 62.8 公分跟正三角形 60 公分更接近。",
        "C": "把周長錯算成面積來比較，拿正方形面積 400 減去圓面積 314，得到 86。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "正三角形周長（3 倍） ＜ 圓形周長（3.14 倍） ＜ 正方形周長（4 倍）",
        "圓周長與正三角形周長之差 ＝ 直徑 × 0.14"
      ],
      "conceptCompare": "這正好呼應課本 6-1 的核心結論：圓周長比直徑的 3 倍多一點點（多 0.14 倍），比直徑的 4 倍短很多（少 0.86 倍）。",
      "examVariations": "若把「邊長與直徑 20 公分」改成「100 公分」，圓形和正三角形的周長差就會變成 100 × 0.14 ＝ 14 公分！"
    }
  },
  {
    "id": "U06-RV-X-020",
    "legacyId": null,
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元總複習",
    "category": "扇形周長反推半徑",
    "batch": "課本原型題",
    "source": "課本 p.95 與 p.99 綜合延伸",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "公園入口有一個半圓形的彩繪花台，測量它最外圍一圈的周長大約是 51.4 公尺（包含弧邊與底下的直線邊），這個半圓形花台的半徑大約是多少公尺？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "20 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "16.4 公尺",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "10 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "100 公尺",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "51.4 / (314/100 + 2)",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗學生逆向推算「半圓扇形周長 ＝ 半徑 × (3.14 ＋ 2) ＝ 半徑 × 5.14」的倍數合成關係，進而反推出半徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把 1 條半徑當作 1 份，分析半圓扇形的周長共有幾個半徑："
        },
        {
          "type": "text",
          "text": "半圓弧長 ＝ 半徑 × 2 × 3.14 ÷ 2 ＝ 半徑 × 3.14；底下的直線邊是直徑，等於半徑 × 2。"
        },
        {
          "type": "eq",
          "expr": "半圓周長 ＝ 半徑 × (3.14 ＋ 2) ＝ 半徑 × 5.14"
        },
        {
          "type": "text",
          "text": "第 2 步：已知半圓周長是 51.4 公尺，除以 5.14 就能算出半徑："
        },
        {
          "type": "eq",
          "expr": "51.4 ÷ 5.14 ＝ 10",
          "unit": "公尺"
        },
        {
          "type": "longdiv",
          "dividend": "51.4",
          "divisor": "5.14",
          "mode": "exact",
          "note": "除數 5.14 與被除數 51.4 的小數點同時向右移 2 位，變成 5140 ÷ 514 ＝ 10"
        },
        {
          "type": "text",
          "text": "驗算一下：半圓弧長 10 × 3.14 ＝ 31.4 公尺，加上直徑 20 公尺，剛好是 31.4 ＋ 20 ＝ 51.4 公尺。"
        },
        {
          "type": "answer",
          "text": "答：這個半圓形花台的半徑大約是 10 公尺。"
        }
      ],
      "insight": "必記黃金常數：任何半圓形的周長永遠等於「半徑 × 5.14」！看到 51.4、25.7、102.8 直接除以 5.14 就秒殺出半徑！",
      "distractorAnalysis": {
        "A": "求出的是「直徑 20 公尺」（51.4 ÷ 2.57 ＝ 20 公尺），忘記題目問的是半徑還要除以 2。",
        "B": "忘記半圓周長裡包含了兩條半徑（直徑），直接把 51.4 當成半圓弧長去算 51.4 ÷ 3.14 ≈ 16.4 公尺。",
        "D": "在計算 51.4 ÷ 5.14 時小數點位移錯誤，把被除數多補了 1 個 0，誤算成 100 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半圓形周長 ＝ 半徑 × 5.14 ＝ 直徑 × 2.57",
        "已知半圓周長反求半徑 ＝ 半圓周長 ÷ 5.14"
      ],
      "conceptCompare": "「整圓周長」反求直徑是除以 3.14；「半圓周長」因為多了 2 條半徑（即 1 條直徑），反求半徑要除以 (3.14 ＋ 2) ＝ 5.14，千萬不能直接除以 3.14！",
      "examVariations": "段考也常考「1/4 圓扇形的周長是 35.7 公分，求半徑」，此時周長 ＝ 半徑 × (6.28 × 1/4 ＋ 2) ＝ 半徑 × 3.57，35.7 ÷ 3.57 ＝ 10 公分！"
    }
  },
  {
    "id": "U06-S2-O-021",
    "legacyId": "u06_101",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "滾輪距離換算",
    "batch": "奧數天梯",
    "source": "課本 p.91 滾輪延伸／奧數 L3",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "自行車輪子的直徑是 50 公分。小明騎車讓輪子在地上滾動了 20 圈，一共前進了大約多少公尺？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "15.7 公尺",
        "trapCode": "U06_ROLLER_TURN_ERR"
      },
      {
        "key": "B",
        "text": "3140 公尺",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "C",
        "text": "62.8 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "31.4 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "50 * (314 / 100) * 20 / 100",
      "expect": "31.4"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「輪子滾動 1 圈 ＝ 1 個圓周長」，並能完成公分與公尺的單位換算。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"75\" cy=\"75\" r=\"42\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><line x1=\"75\" y1=\"33\" x2=\"75\" y2=\"117\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"75\" y1=\"117\" x2=\"420\" y2=\"117\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><circle cx=\"75\" cy=\"117\" r=\"4\" fill=\"#e11d48\"/><circle cx=\"235\" cy=\"117\" r=\"4\" fill=\"#2563eb\"/><text x=\"124\" y=\"78\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">直徑 50 公分</text><text x=\"235\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">輪子滾動 1 圈 ＝ 圓周長 157 公分</text><text x=\"245\" y=\"142\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">滾動 20 圈 ＝ 3140 公分 ＝ 31.4 公尺</text></svg>",
          "caption": "滾輪前進示意圖：輪子每轉 1 圈，地面留下的距離就等於 1 個圓周長"
        },
        {
          "type": "text",
          "text": "輪子滾動 1 圈前進的距離，等於輪子外圍 1 圈的圓周長："
        },
        {
          "type": "eq",
          "expr": "50 × 3.14 ＝ 157",
          "unit": "公分（滾動 1 圈）"
        },
        {
          "type": "text",
          "text": "輪子滾動 20 圈，再將公分換算成公尺（1 公尺 ＝ 100 公分）："
        },
        {
          "type": "eq",
          "expr": "157 × 20 ＝ 3140",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "3140 ÷ 100 ＝ 31.4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：大約 31.4 公尺"
        }
      ],
      "insight": "滾輪題兩大關鍵：滾 1 圈 ＝ 圓周長；看清楚題幹單位是「公分」而問題問「公尺」，最後別忘了除以 100。",
      "distractorAnalysis": {
        "B": "算出 3140 公分後忘記把公分換算成公尺，直接寫成 3140 公尺。",
        "C": "混淆直徑與半徑，誤把直徑 50 公分當成半徑再乘以 2，算出 62.8 公尺。",
        "A": "把 20 圈除以 2 誤以為只轉了 10 圈，列成 1.57 × 10 ＝ 15.7 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "前進總距離 ＝ 輪子圓周長 × 滾動圈數",
        "1 公尺 ＝ 100 公分"
      ],
      "conceptCompare": "正推求距離用乘法（1 圈周長 × 圈數）；反推問「需要滾幾圈」時則用除法（總距離 ÷ 1 圈周長），同樣要先統一單位！",
      "examVariations": "高階變化題會同時給「前輪」和「後輪」不同直徑，問走完同一段路時前輪比後輪多轉幾圈。"
    }
  },
  {
    "id": "U06-S4-O-022",
    "legacyId": "u06_102",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "挖角正方形周長",
    "batch": "奧數天梯",
    "source": "奧數天梯 L3（正方形挖角）",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "邊長 10 公分的正方形，在四個角各挖掉一個半徑 2 公分的 1/4 圓。剩下圖形的外圍周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "24 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "49.12 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "52.56 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "D",
        "text": "36.56 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(10 - 2 * 2) * 4 + 2 * 2 * (314 / 100)",
      "expect": "36.56"
    },
    "explanation": {
      "examPurpose": "測驗學生在幾何圖形被挖角後，能否看清「少掉原角邊長，但新增 4 段凹進去圓弧」的邊界變化，並將 4 段 1/4 圓弧拼回 1 個整圓計算。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"25\" width=\"110\" height=\"110\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 67 25 L 133 25 A 22 22 0 0 0 155 47 L 155 113 A 22 22 0 0 0 133 135 L 67 135 A 22 22 0 0 0 45 113 L 45 47 A 22 22 0 0 0 67 25 Z\" fill=\"#f8fafc\"/><line x1=\"67\" y1=\"25\" x2=\"133\" y2=\"25\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"155\" y1=\"47\" x2=\"155\" y2=\"113\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"67\" y1=\"135\" x2=\"133\" y2=\"135\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"45\" y1=\"47\" x2=\"45\" y2=\"113\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 45 47 A 22 22 0 0 0 67 25\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><path d=\"M 133 25 A 22 22 0 0 0 155 47\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><path d=\"M 155 113 A 22 22 0 0 0 133 135\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><path d=\"M 67 135 A 22 22 0 0 0 45 113\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><text x=\"100\" y=\"16\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">原邊長 10 公分</text><text x=\"100\" y=\"152\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">每段直線 6 公分</text><text x=\"195\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">4 條藍線 ＝ 6 × 4 ＝ 24 公分</text><text x=\"195\" y=\"84\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">4 個紅弧 ＝ 1 個整圓 12.56 公分</text><text x=\"195\" y=\"116\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">總周長 ＝ 24 ＋ 12.56 ＝ 36.56 公分</text></svg>",
          "caption": "正方形四角挖弧圖：4 段藍色直線加上 4 個紅色 1/4 圓弧（合成 1 個完整小圓）"
        },
        {
          "type": "text",
          "text": "正方形每條邊的左右兩端各被挖掉半徑 2 公分，先算出每邊剩下的藍色直線段："
        },
        {
          "type": "eq",
          "expr": "10 − 2 × 2 ＝ 6",
          "unit": "公分（每邊剩餘直線）"
        },
        {
          "type": "eq",
          "expr": "6 × 4 ＝ 24",
          "unit": "公分（4 條直線總長）"
        },
        {
          "type": "text",
          "text": "四個角各留下 1 段半徑 2 公分的 1/4 圓弧，合起來剛好是 1 個半徑 2 公分（直徑 4 公分）的整圓周長："
        },
        {
          "type": "eq",
          "expr": "2 × 2 × 3.14 ＝ 12.56",
          "unit": "公分（4 段紅弧總長）"
        },
        {
          "type": "eq",
          "expr": "24 ＋ 12.56 ＝ 36.56",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：大約 36.56 公分"
        }
      ],
      "insight": "組合割補思維：把四個角落分散的 1/4 圓弧先拼湊成 1 個完整圓，計算又快又不易出錯。",
      "distractorAnalysis": {
        "A": "只算了四邊剩下的直線長 6 × 4 ＝ 24 公分，完全漏加四個角落新露出的紅色圓弧邊界。",
        "C": "忘記扣掉每個角被挖掉的線段長度，直接拿原正方形周長 40 公分加上圓周長 12.56 公分，算出 52.56 公分。",
        "B": "將半徑 2 公分誤套為直徑 4 公分後又再乘以 2（誤算 4 × 2 × 3.14 ＝ 25.12），加上 24 變成 49.12 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "挖角後剩餘每邊直線 ＝ 原邊長 − 圓弧半徑 × 2",
        "4 個 1/4 圓弧總長 ＝ 1 個整圓周長"
      ],
      "conceptCompare": "挖掉角落時，「面積」一定會變小，但「周長」不一定變小（本題原本 40 公分，挖後變 36.56 公分；若是往內挖出垂直長方形角，周長甚至可能不變）。",
      "examVariations": "若題目改為「從正方形的邊中間往內挖半圓」，那麼只少掉 1 條直徑、多出 1 個半圓弧，周長反而會增加。"
    }
  },
  {
    "id": "U06-S4-O-023",
    "legacyId": "u06_103",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "外公切線兩圓綑繩",
    "batch": "奧數天梯",
    "source": "奧數天梯 L4（圓柱綑繩）",
    "level": 4,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "用一條繩子將兩個半徑都是 5 公分的圓柱並排緊緊綑綁一圈（不計打結長度）。這條繩子的長度至少大約需要多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "31.4 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      },
      {
        "key": "B",
        "text": "51.4 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "41.4 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "62.8 公分",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "5 * 2 * 2 + 5 * 2 * (314 / 100)",
      "expect": "51.4"
    },
    "explanation": {
      "examPurpose": "測驗學生解決經典「圓柱綑綁繩長」問題的能力：把繩長分解成「圓心連線等長的直線段」與「兩端圓弧合成的 1 個整圓」。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"95\" cy=\"80\" r=\"40\" fill=\"#eff6ff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"175\" cy=\"80\" r=\"40\" fill=\"#eff6ff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"95\" y1=\"80\" x2=\"175\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><line x1=\"95\" y1=\"40\" x2=\"175\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"95\" y1=\"120\" x2=\"175\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 95 120 A 40 40 0 0 1 95 40\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><path d=\"M 175 40 A 40 40 0 0 1 175 120\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><circle cx=\"95\" cy=\"80\" r=\"3\" fill=\"#1e293b\"/><circle cx=\"175\" cy=\"80\" r=\"3\" fill=\"#1e293b\"/><text x=\"135\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直線段 10 公分</text><text x=\"135\" y=\"140\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直線段 10 公分</text><text x=\"135\" y=\"96\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">圓心距 10 公分</text><text x=\"235\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">上下 2 條藍線 ＝ 10 × 2 ＝ 20 公分</text><text x=\"235\" y=\"84\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">左右 2 個紅弧 ＝ 1 個整圓 31.4 公分</text><text x=\"235\" y=\"116\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">繩子總長 ＝ 20 ＋ 31.4 ＝ 51.4 公分</text></svg>",
          "caption": "雙圓柱綑繩圖：上下兩條藍色直線（各等於 1 個直徑）加上左右兩個紅色半圓（合為 1 個整圓）"
        },
        {
          "type": "text",
          "text": "把緊緊繞一圈的繩子拆成「直線」和「弧線」：兩個半徑 5 公分的圓柱緊靠時，上下兩條藍色直線各等於 1 個直徑（5 ＋ 5 ＝ 10 公分）："
        },
        {
          "type": "eq",
          "expr": "5 × 2 × 2 ＝ 20",
          "unit": "公分（上下兩條直線總長）"
        },
        {
          "type": "text",
          "text": "左右兩側緊貼圓柱的紅色弧線各為 1/2 圓，合起來剛好是 1 個半徑 5 公分（直徑 10 公分）的整圓周長："
        },
        {
          "type": "eq",
          "expr": "5 × 2 × 3.14 ＝ 31.4",
          "unit": "公分（兩端弧線總長）"
        },
        {
          "type": "eq",
          "expr": "20 ＋ 31.4 ＝ 51.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：至少大約需要 51.4 公分"
        }
      ],
      "insight": "奧數綑綁模型：將外圍同樣大小圓柱緊緊綑一圈，彎曲的弧線不管幾個圓，合起來永遠剛好等於「1 個整圓周長」！",
      "distractorAnalysis": {
        "A": "只算出左右兩個半圓弧合成的 1 個整圓周長 31.4 公分，完全漏算上下兩條 10 公分的直線切線段。",
        "D": "以為綑綁兩個圓柱就需要兩個完整圓的周長，直接用 31.4 × 2 ＝ 62.8 公分，沒有扣掉中間被夾住沒貼到繩子的半圓。",
        "C": "混淆半徑與直徑，誤把每條直線段當成半徑 5 公分，算出兩條直線只有 10 公分（10 ＋ 31.4 ＝ 41.4 公分）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩等圓緊綑一圈繩長 ＝ 直徑 × 2 ＋ 1 個整圓周長",
        "三等圓呈三角形緊綑一圈繩長 ＝ 直徑 × 3 ＋ 1 個整圓周長"
      ],
      "conceptCompare": "不管是 2 個圓並排、3 個圓排成正三角形，還是 4 個圓排成正方形，繩子繞過所有轉角弧線的總和永遠剛好是「360°（1 個整圓）」，差別只在直線段數！",
      "examVariations": "段考與資優考常考「3 根或 4 根等粗水管用膠帶捆一圈」或「計算 6 根水管疊兩層的最省繩捆法」。"
    }
  },
  {
    "id": "U06-S2-O-024",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "大小輪同路段圈數差",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（大小輪轉數差）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "一輛工程車在長 314 公尺的筆直隧道中行駛，已知前輪直徑是 50 公分，後輪直徑是 100 公分。當車子完全通過這段 314 公尺的路段時，前輪比後輪多轉了幾圈？（圓周率以 3.14 計算）",
    "options": [
      {
        "key": "A",
        "text": "200 圈",
        "trapCode": "U06_ROLLER_TURN_ERR"
      },
      {
        "key": "B",
        "text": "100 圈",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "10 圈",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "D",
        "text": "50 圈",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "314 / (50/100 * (314/100)) - 314 / (100/100 * (314/100))",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "測驗學生能否先統一長度單位（公分換公尺），再分別算出大小輪滾動一圈的圓周長，最後用總路段長除以各自圓周長求出圈數差。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先統一單位為公尺。前輪直徑 50 公分 ＝ 0.5 公尺，後輪直徑 100 公分 ＝ 1 公尺。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"120\" x2=\"430\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"110\" cy=\"98\" r=\"22\" fill=\"#fef2f2\" stroke=\"#e11d48\" stroke-width=\"3\"/><line x1=\"88\" y1=\"98\" x2=\"132\" y2=\"98\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/><circle cx=\"330\" cy=\"76\" r=\"44\" fill=\"#eff6ff\" stroke=\"#e11d48\" stroke-width=\"3\"/><line x1=\"286\" y1=\"76\" x2=\"374\" y2=\"76\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/><text x=\"110\" y=\"66\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">前輪直徑 0.5 公尺</text><text x=\"330\" y=\"22\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">後輪直徑 1 公尺</text><text x=\"230\" y=\"142\" font-size=\"13\" fill=\"#1e293b\" text-anchor=\"middle\">共同行駛總距離 ＝ 314 公尺</text></svg>",
          "caption": "紅圓周＝各自滾動 1 圈的距離；藍直線＝共同行駛的 314 公尺路段"
        },
        {
          "type": "text",
          "text": "第 2 步：算出前、後輪滾動 1 圈的距離（圓周長）。"
        },
        {
          "type": "eq",
          "expr": "前輪 1 圈 ＝ 0.5 × 3.14 ＝ 1.57",
          "unit": "公尺"
        },
        {
          "type": "eq",
          "expr": "後輪 1 圈 ＝ 1 × 3.14 ＝ 3.14",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 3 步：用總長 314 公尺分別除以兩輪的圓周長，求出各自轉動的圈數。"
        },
        {
          "type": "eq",
          "expr": "前輪圈數 ＝ 314 ÷ 1.57 ＝ 200",
          "unit": "圈"
        },
        {
          "type": "longdiv",
          "dividend": "314",
          "divisor": "1.57",
          "mode": "exact",
          "note": "除數 1.57 與被除數 314 的小數點同時向右移 2 位，變成 31400 ÷ 157 ＝ 200"
        },
        {
          "type": "eq",
          "expr": "後輪圈數 ＝ 314 ÷ 3.14 ＝ 100",
          "unit": "圈"
        },
        {
          "type": "text",
          "text": "第 4 步：相減求出前輪比後輪多轉的圈數。"
        },
        {
          "type": "eq",
          "expr": "200 − 100 ＝ 100",
          "unit": "圈"
        },
        {
          "type": "answer",
          "text": "答：前輪比後輪多轉 100 圈"
        }
      ],
      "insight": "行駛距離相同時，輪子直徑越小、轉的圈數越多；要先分別算出兩輪圈數再相減，絕不能直接用距離去除以圓周長差！",
      "distractorAnalysis": {
        "C": "單位換算少補一個 0，把 314 公尺誤換成 3140 公分，算成前輪 20 圈、後輪 10 圈，得出 20 − 10 ＝ 10 圈。",
        "D": "誤把題目給的「直徑」當成「半徑」多乘 2，算出前輪 100 圈、後輪 50 圈，相差 50 圈。",
        "A": "誤把「總距離 ÷ 兩輪圓周差」當成圈數差，列成 314 ÷ (3.14 − 1.57) ＝ 200 圈（概念倒置，前輪 200 圈只是前輪總圈數）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "行駛總距離 ＝ 輪子圓周長 × 滾動圈數",
        "滾動圈數 ＝ 行駛總距離 ÷ 輪子圓周長（計算前須先統一長度單位）"
      ],
      "conceptCompare": "同一段路程上，前輪直徑 50 公分與後輪直徑 100 公分是 1：2，所以圈數反而是 2：1。很多同學會誤用「總距離 ÷ 圓周差」，算出來會變成 200 圈，這點要特別小心。",
      "examVariations": "若改為「前輪轉了 60 圈時，後輪轉了幾圈？」，可直接利用兩輪行走距離相同，先求總距離 60 × 1.57 ＝ 94.2 公尺，再除以 3.14 得 30 圈（或用直徑比 1：2 反推圈數比 2：1）。"
    }
  },
  {
    "id": "U06-S3-O-025",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "兩同心扇形拱門外框",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（同心扇環拱門）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "遊樂園設計了一座「四分之一圓」的拱形彩虹花廊（圓心角 90°），外圈大扇形半徑為 20 公尺，內圈小扇形半徑為 10 公尺，兩扇形共用同一個圓心。若要在這片拱形走道的「最外圍一圈邊界」架設燈條，至少需要準備幾公尺的燈條？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "47.1 公尺",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "87.1 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "67.1 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "114.2 公尺",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(20 * 2 * (314/100) * 1/4) + (10 * 2 * (314/100) * 1/4) + (20 - 10) * 2",
      "expect": "67.1"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「同心扇環（拱形走道）」複合圖形時，能否正確拆解出「外圓弧 ＋ 內圓弧 ＋ 兩端路寬直邊」，避免漏算直邊或重複計入內部半徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先畫圖把拱形花廊最外圍的 4 段邊界描出來：1 條外圈大弧、1 條內圈小弧，以及左右兩端各 1 段寬度為 20 − 10 ＝ 10 公尺的直線邊。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 130 30 A 120 120 0 0 1 250 150 L 190 150 A 60 60 0 0 0 130 90 Z\" fill=\"#fff1f2\" stroke=\"none\"/><line x1=\"130\" y1=\"150\" x2=\"130\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><line x1=\"130\" y1=\"150\" x2=\"190\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><path d=\"M 130 30 A 120 120 0 0 1 250 150\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 130 90 A 60 60 0 0 1 190 150\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"90\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"190\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"218\" y=\"62\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\">外弧（半徑 20）</text><text x=\"165\" y=\"108\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\">內弧</text><text x=\"82\" y=\"65\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">直邊 10</text><text x=\"220\" y=\"168\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">直邊 10</text><text x=\"115\" y=\"154\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"end\">圓心 (90°)</text></svg>",
          "caption": "紅粗線＝外弧與內弧（各為 90° 四分之一圓）；藍實線＝兩端短直邊（各 10 公尺）；灰虛線不計"
        },
        {
          "type": "text",
          "text": "第 2 步：分別計算 90°（佔整圓的 1/4）的外弧長與內弧長。"
        },
        {
          "type": "eq",
          "expr": "外弧長 ＝ 20 × 2 × 3.14 × 1/4 ＝ 31.4",
          "unit": "公尺"
        },
        {
          "type": "eq",
          "expr": "內弧長 ＝ 10 × 2 × 3.14 × 1/4 ＝ 15.7",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 3 步：計算兩端直邊長（大扇形半徑 − 小扇形半徑，共有 2 條）並全部相加。"
        },
        {
          "type": "eq",
          "expr": "兩端直邊 ＝ (20 − 10) × 2 ＝ 20",
          "unit": "公尺"
        },
        {
          "type": "eq",
          "expr": "總燈條長 ＝ 31.4 ＋ 15.7 ＋ 20 ＝ 67.1",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：至少需要 67.1 公尺的燈條"
        }
      ],
      "insight": "拱形走道外框 ＝ 外圓弧 ＋ 內圓弧 ＋ 2 條走道寬（大減小），切記不是加整個大半徑 20！",
      "distractorAnalysis": {
        "A": "只加了外弧 31.4 與內弧 15.7 ＝ 47.1 公尺，忘記補上拱門兩端封口的 2 條直線段 20 公尺。",
        "D": "誤把圓心角 90° 當成整圓的 1/2 計算弧長，算出 62.8 ＋ 31.4 ＋ 20 ＝ 114.2 公尺。",
        "B": "誤把大扇形的整條半徑 20 × 2 ＝ 40 公尺全部算入，沒有扣除小扇形內部的虛線半徑，算成 47.1 ＋ 40 ＝ 87.1 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇環周長 ＝ 外扇形弧長 ＋ 內扇形弧長 ＋ 2 × (外半徑 − 內半徑)"
      ],
      "conceptCompare": "扇環的「面積」要用大扇形減小扇形，但扇環的「周長」則是外弧「加」內弧，因為內圈凹進去的弧線也是外圍邊界的一部分，千萬不能用大弧減小弧！",
      "examVariations": "若將題目中的 90° 改成 180°（半圓形拱門），兩段弧長會各變為 2 倍，但兩端直線段寬度依舊是 2 × (20 − 10) ＝ 20 公尺。"
    }
  },
  {
    "id": "U06-S4-O-026",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "正方形內嵌雙葉形",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（雙弧葉形周長）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "一張邊長 10 公分的正方形手工卡片，分別以左上角與右下角兩個對角頂點為圓心、邊長 10 公分為半徑，在卡片內各畫出一條 90° 的圓弧，兩條圓弧在中央夾出一片橄欖葉形的塗色花瓣。請問這片塗色花瓣的周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "15.7 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "B",
        "text": "51.4 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "31.4 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "57 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "10 * 2 * (314/100) * 1/4 * 2",
      "expect": "31.4"
    },
    "explanation": {
      "examPurpose": "測驗學生辨識正方形內部雙圓弧交集「葉形」外圍邊界的能力，確認花瓣周長完全由兩條對稱的 90° 圓弧組成，不含正方形直邊。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：用色筆沿著塗色葉片的邊界繞一圈，發現它的外框只有左右兩條彎曲的 90°（1/4 圓）圓弧，正方形的四條外邊都不屬於葉片邊界。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"170\" y=\"20\" width=\"120\" height=\"120\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><path d=\"M 290 20 A 120 120 0 0 1 170 140 A 120 120 0 0 1 290 20 Z\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><circle cx=\"170\" cy=\"20\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"290\" cy=\"140\" r=\"4\" fill=\"#2563eb\"/><text x=\"162\" y=\"24\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"end\">圓心 1</text><text x=\"298\" y=\"144\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"start\">圓心 2</text><text x=\"230\" y=\"156\" font-size=\"13\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">正方形邊長（半徑）＝ 10 公分</text><text x=\"230\" y=\"84\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">兩條 90° 紅弧</text></svg>",
          "caption": "紅粗線＝兩條對稱的 1/4 圓弧（半徑皆為 10 公分）；灰虛線＝正方形邊長（不計入葉片周長）"
        },
        {
          "type": "text",
          "text": "第 2 步：兩條 90° 圓弧合起來剛好是 180°（半個圓），所以直接算半徑 10 公分的半圓弧長即可。"
        },
        {
          "type": "eq",
          "expr": "一條弧長 ＝ 10 × 2 × 3.14 × 1/4 ＝ 15.7",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "葉片周長 ＝ 15.7 × 2 ＝ 31.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這片塗色花瓣的周長大約是 31.4 公分"
        }
      ],
      "insight": "葉形周長看邊界：兩條 1/4 圓弧合起來剛好是 1 條半圓弧（90° ＋ 90° ＝ 180°），千萬別多加正方形的邊長！",
      "distractorAnalysis": {
        "A": "只算出了單側一條 90° 圓弧長 15.7 公分，忘記葉形是由兩條對稱圓弧圍成而漏乘 2。",
        "B": "誤把正方形的兩條鄰邊（10 × 2 ＝ 20 公分）當成葉片邊界，算成單一扇形周長 31.4 ＋ 20 ＝ 51.4 公分。",
        "D": "混淆周長與面積公式，誤算成塗色葉形的面積（10 × 10 × 3.14 ÷ 2 − 10 × 10 ＝ 57）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方形內嵌單葉形周長 ＝ 2 × (半徑 × 2 × 3.14 × 1/4) ＝ 半徑 × 3.14"
      ],
      "conceptCompare": "注意分辨題目問「葉形（橄欖形）塗色部分周長」還是「葉形外面兩個空白角周長」：若是算單葉形周長，只有兩條 90° 圓弧（31.4 公分）；若是連外圍正方形邊框都問，才要加正方形邊長。",
      "examVariations": "若在同一張邊長 10 公分的正方形四個角都畫 90° 圓弧形成兩片交叉葉（四瓣花），外圍會變成 4 條 90° 圓弧，周長就合為 1 個整圓 62.8 公分。"
    }
  },
  {
    "id": "U06-S3-O-027",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "三角形三頂點扇形合",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（三角形三扇形合）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "有一個三邊長分別為 12 公分、15 公分、18 公分的任意三角形，分別以三個頂點為圓心，各以該頂點的「內角」為圓心角，畫出半徑為 4 公分的扇形（三個扇形互不重疊）。請問這三個扇形「各自的周長加起來」總和是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "12.56 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "36.56 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "20.56 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "49.12 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "4 * 2 * (314/100) * (180/360) + 4 * 6",
      "expect": "36.56"
    },
    "explanation": {
      "examPurpose": "測驗學生運用「三角形內角和 180°」將三個未知度數的圓弧合併為半圓弧計算，同時細心計入 3 個獨立扇形共有的 6 條半徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：雖然不知道三個內角個別是幾度，但三個扇形半徑都是 4 公分，圓心角合起來剛好是 180°（半個圓）！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"55,125 185,125 135,35\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><path d=\"M 55 125 L 87 125 A 32 32 0 0 0 70.5 97 Z\" fill=\"#ffe4e6\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 87 125 A 32 32 0 0 0 70.5 97\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 185 125 L 169.5 97 A 32 32 0 0 0 153 125 Z\" fill=\"#ffe4e6\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 169.5 97 A 32 32 0 0 0 153 125\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 135 35 L 119.5 63 A 32 32 0 0 0 150.5 63 Z\" fill=\"#ffe4e6\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 119.5 63 A 32 32 0 0 0 150.5 63\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><text x=\"225\" y=\"88\" font-size=\"20\" font-weight=\"bold\" fill=\"#475569\">➔</text><path d=\"M 275 110 A 45 45 0 0 1 365 110\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><line x1=\"275\" y1=\"110\" x2=\"365\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"382\" y1=\"75\" x2=\"418\" y2=\"75\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"382\" y1=\"92\" x2=\"418\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"382\" y1=\"109\" x2=\"418\" y2=\"109\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"382\" y1=\"126\" x2=\"418\" y2=\"126\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"310\" y=\"52\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">三段弧拼成半圓</text><text x=\"415\" y=\"58\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">另加 4 條</text><text x=\"320\" y=\"132\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">共 6 條半徑 (各 4 公分)</text></svg>",
          "caption": "三段紅弧合為 180° 半圓弧；但 3 個獨立扇形各自有 2 條藍半徑，總共有 6 條半徑"
        },
        {
          "type": "text",
          "text": "第 2 步：先求三段圓弧合併的長度（半圓弧）。"
        },
        {
          "type": "eq",
          "expr": "三段弧長和 ＝ 4 × 2 × 3.14 × 1/2 ＝ 12.56",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：每個獨立扇形都有 2 條半徑，3 個扇形共有 3 × 2 ＝ 6 條半徑。"
        },
        {
          "type": "eq",
          "expr": "6 條半徑總長 ＝ 4 × 6 ＝ 24",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "三個扇形周長總和 ＝ 12.56 ＋ 24 ＝ 36.56",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：三個扇形周長總和是 36.56 公分"
        }
      ],
      "insight": "缺角打包術：遇到同半徑扇形組，角度先打包成 180° 算弧長；但算「各自周長總和」時，3 個扇形有 6 條半徑一條都不能漏！",
      "distractorAnalysis": {
        "A": "只算出三段圓弧合併的 180° 弧長 12.56 公分，完全忘記加上三個扇形的 6 條半徑。",
        "C": "雖然記得把三段弧拼成半圓，卻誤以為只要加上半圓的 2 條半徑（8 公分），漏掉其餘 4 條半徑而算成 12.56 ＋ 8 ＝ 20.56 公分。",
        "D": "誤以為三角形三個內角和是 360°（一個整圓），把弧長多算一倍成 25.12 ＋ 24 ＝ 49.12 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形內角和 ＝ 180°（半圓）",
        "多邊形各頂點同半徑獨立扇形周長總和 ＝ 合併弧長 ＋ 扇形個數 × 2 × 半徑"
      ],
      "conceptCompare": "若題目改成「四邊形」四個頂點畫出四個半徑 4 公分的扇形，因為四邊形內角和是 360°，弧長會合成 1 個整圓，半徑則共有 4 × 2 ＝ 8 條！",
      "examVariations": "若題目改問「從三角形三個角剪下這三個扇形後，剩下的塗色圖形周長是多少？」此時原本的半徑邊會被剪掉又露出新的弧線，周長就會變成（三邊扣掉 6 條半徑）＋ 3 段弧長 ＝ (12 ＋ 15 ＋ 18 − 24) ＋ 12.56 ＝ 33.56 公分。"
    }
  },
  {
    "id": "U06-S4-O-028",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "操場內外道差與起跑前移",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（操場跑道起跑前移）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "標準田徑操場的跑道兩側為等長直線，兩端為半圓形彎道。已知第 1 道最內側彎道半徑為 20 公尺，每條跑道寬度都是 1.25 公尺（相鄰外道半徑多 1.25 公尺）。若進行 1 圈賽跑，第 2 道的起跑線必須比第 1 道往前移動幾公尺才公平？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "78.5 公尺",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "B",
        "text": "3.925 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "7.85 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "15.7 公尺",
        "trapCode": "U06_TRACK_INNER_OUTER_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(125/100) * 2 * (314/100)",
      "expect": "7.85"
    },
    "explanation": {
      "examPurpose": "測驗學生運用「消去共同直線段」與「圓周差只看直徑差」的數感結構，迅速求出同心圓跑道每往外一道多出的距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察操場跑道結構，第 1 道和第 2 道的左右兩段直線完全一樣長，因此起跑線前移的距離，只差在兩端半圓合起來的「1 個整圓周長差」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 150 20 L 310 20 A 65 65 0 0 1 310 150 L 150 150 A 65 65 0 0 1 150 20 Z\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"3\"/><path d=\"M 150 40 L 310 40 A 45 45 0 0 1 310 130 L 150 130 A 45 45 0 0 1 150 40 Z\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><line x1=\"310\" y1=\"20\" x2=\"310\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><line x1=\"150\" y1=\"85\" x2=\"150\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"230\" y=\"34\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">道寬 1.25 公尺（半徑差）</text><text x=\"230\" y=\"145\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">另一側也多 1.25 公尺 ➔ 直徑多 2.5 公尺</text><text x=\"230\" y=\"90\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">內道半徑 20 公尺（直線段等長互相抵銷）</text></svg>",
          "caption": "藍線＝第 1 道；紅線＝第 2 道；上下道寬各 1.25 公尺，合起來直徑多 2.5 公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：利用「分配律」簡化計算。第 2 道半徑比第 1 道多 1.25 公尺，所以直徑多了 1.25 × 2 ＝ 2.5 公尺。"
        },
        {
          "type": "eq",
          "expr": "直徑差 ＝ 1.25 × 2 ＝ 2.5",
          "unit": "公尺"
        },
        {
          "type": "eq",
          "expr": "一圈多出的距離 ＝ 2.5 × 3.14 ＝ 7.85",
          "unit": "公尺"
        },
        {
          "type": "mul",
          "a": "3.14",
          "b": "2.5",
          "note": "直徑差 2.5 乘以 3.14，小數共 2 ＋ 1 ＝ 3 位（7.850 即 7.85）"
        },
        {
          "type": "answer",
          "text": "答：第 2 道起跑線必須往前移動 7.85 公尺"
        }
      ],
      "insight": "相鄰跑道一圈差 ＝ 2 × 道寬 × 3.14，和原本內道半徑 20 公尺或直線多長完全無關！",
      "distractorAnalysis": {
        "B": "誤將「道寬 1.25 公尺」直接當成「直徑差」而非「半徑差」，漏乘 2 而算成 1.25 × 3.14 ＝ 3.925 公尺。",
        "D": "誤以為操場兩端各有兩個完整圓，把道寬乘了 4 倍，算出 1.25 × 4 × 3.14 ＝ 15.7 公尺。",
        "A": "計算 2.5 × 3.14 時小數點點錯位（少點一位），錯算成 78.5 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "相鄰跑道 1 圈長度差 ＝ 2 × 跑道寬度 × 3.14"
      ],
      "conceptCompare": "如果用傻方法先算第 2 道 (21.25 × 2 × 3.14) 再減第 1 道 (20 × 2 × 3.14)，很容易在繁瑣小數計算中算錯；改用「半徑差 × 2 × 3.14」只要兩步就算完！",
      "examVariations": "若題目問「第 4 道比第 1 道起跑線前移幾公尺？」中間隔了 4 − 1 ＝ 3 個道寬，只要算出 3 × 7.85 ＝ 23.55 公尺即可；若只跑「半圈（200 公尺賽跑）」只經過一個彎道，前移距離就只有一半（3.925 公尺）。"
    }
  },
  {
    "id": "U06-RV-O-029",
    "legacyId": null,
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "扇形弧長與直徑倍數",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（120° 扇形周長反推）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "一張圓心角 120° 的扇形卡紙，量得它的整個「扇形周長」剛好是 36.84 公分。請問這個扇形原本所在的圓，半徑是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "3 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "B",
        "text": "90 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "C",
        "text": "18 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "9 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(36.84 * 3) / (314/100 + 3) / 2",
      "expect": "9"
    },
    "explanation": {
      "examPurpose": "測驗學生不設未知數，而是利用「將 3 個 120° 扇形拼成 1 個整圓」的幾何轉化與小數除法直式，從扇形周長逆推半徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：120° 剛好是 1/3 個圓，因此把「3 個」一模一樣的 120° 扇形周長加起來，弧長會拼成 1 個整圓周長（直徑 × 3.14），同時還有 3 組（共 6 條 ＝ 3 個直徑）半徑。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"125\" cy=\"80\" r=\"55\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><line x1=\"125\" y1=\"80\" x2=\"125\" y2=\"25\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"125\" y1=\"80\" x2=\"172.6\" y2=\"107.5\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"125\" y1=\"80\" x2=\"77.4\" y2=\"107.5\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"125\" y=\"152\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">3 個 120° 弧 ＝ 1 個整圓周</text><text x=\"215\" y=\"85\" font-size=\"18\" font-weight=\"bold\" fill=\"#475569\">＋</text><line x1=\"245\" y1=\"45\" x2=\"365\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"245\" y1=\"75\" x2=\"365\" y2=\"75\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"245\" y1=\"105\" x2=\"365\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"305\" y=\"135\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">6 條半徑 ＝ 3 個直徑</text><text x=\"390\" y=\"82\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"start\">共 110.52</text></svg>",
          "caption": "3 個扇形周長和 110.52 ＝ 直徑的 3.14 倍 ＋ 直徑的 3 倍 ＝ 直徑的 6.14 倍"
        },
        {
          "type": "text",
          "text": "第 2 步：算出 3 個扇形周長總和，這等於直徑的 (3.14 ＋ 3) ＝ 6.14 倍。"
        },
        {
          "type": "eq",
          "expr": "36.84 × 3 ＝ 110.52",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "直徑 ＝ 110.52 ÷ (3.14 ＋ 3) ＝ 110.52 ÷ 6.14 ＝ 18",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "110.52",
          "divisor": "6.14",
          "mode": "exact",
          "note": "除數與被除數小數點同時右移 2 位，計算 11052 ÷ 614 ＝ 18"
        },
        {
          "type": "text",
          "text": "第 3 步：題目問半徑，把直徑除以 2。"
        },
        {
          "type": "eq",
          "expr": "半徑 ＝ 18 ÷ 2 ＝ 9",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：半徑是 9 公分"
        }
      ],
      "insight": "分數扇形反推半徑：先把 120° 乘 3 拼回整圓，立刻變身「直徑 × (3.14 ＋ 3)」整潔直式除法！",
      "distractorAnalysis": {
        "A": "忘記 120° 只是 1/3 個圓、未先乘以 3 拼整圓，直接拿 36.84 ÷ 6.14 ＝ 6 再除以 2，錯算成 3 公分。",
        "C": "成功算出直徑 18 公分後就急著停筆選答案，忘記題目要求的是半徑還須再除以 2。",
        "B": "在計算 110.52 ÷ 6.14 小數除法時被除數多補一個 0 移錯位，商算成 180，再除以 2 變成 90 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "120° 扇形周長 × 3 ＝ 直徑 × (3.14 ＋ 3) ＝ 直徑 × 6.14",
        "半圓周長 ＝ 半徑 × (3.14 ＋ 2) ＝ 半徑 × 5.14"
      ],
      "conceptCompare": "求半圓半徑時常會先算「周長 ÷ 5.14」，但遇到 120°（1/3 圓）時若直接除就會碰到除不盡的小數；改用「先乘 3 拼整圓」就能避開除不盡的困擾，穩穩算出整數直徑！",
      "examVariations": "若改為「90°（1/4 圓）扇形周長是 28.56 公分」，同樣先乘 4 拼成整圓：28.56 × 4 ＝ 114.24，這等於直徑 × (3.14 ＋ 4) ＝ 直徑 × 7.14，算出直徑 16 公分，半徑 8 公分。"
    }
  },
  {
    "id": "U06-S2-O-030",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "時針與分針針尖路程",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（時分針針尖路程差）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "牆上掛鐘的時針長 6 公分，分針長 10 公分。從下午 1 點整走到下午 4 點整，這段時間內「分針針尖」與「時針針尖」走過的路程相差幾公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "178.98 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "175.84 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "C",
        "text": "89.49 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "197.82 公分",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "10 * 2 * (314/100) * 3 - 6 * 2 * (314/100) * (3/12)",
      "expect": "178.98"
    },
    "explanation": {
      "examPurpose": "測驗學生將時鐘指針長度辨識為「旋轉半徑」，並分別推算出經過 3 小時後分針（轉 3 整圈）與時針（轉 1/4 圈）的正確弧長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從下午 1 點走到 4 點共經過 4 − 1 ＝ 3 小時。指針固定在鐘面中心，所以指針長度就是圓的「半徑」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"145\" cy=\"82\" r=\"65\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"3\"/><circle cx=\"145\" cy=\"82\" r=\"39\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><path d=\"M 164.5 48.2 A 39 39 0 0 1 178.8 101.5\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><line x1=\"145\" y1=\"82\" x2=\"145\" y2=\"17\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"145\" y1=\"82\" x2=\"178.8\" y2=\"101.5\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"145\" cy=\"82\" r=\"4\" fill=\"#1e293b\"/><text x=\"102\" y=\"52\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"end\">分針半徑 10</text><text x=\"198\" y=\"128\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">時針 90°(1/4圈)</text><text x=\"248\" y=\"54\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\">經過 3 小時：</text><text x=\"248\" y=\"82\" font-size=\"12\" fill=\"#1e293b\">• 分針 3 圈：188.4 公分</text><text x=\"248\" y=\"108\" font-size=\"12\" fill=\"#1e293b\">• 時針 1/4 圈：9.42 公分</text></svg>",
          "caption": "分針（半徑 10）轉 3 圈大紅圓；時針（半徑 6）從 1 點走到 4 點只走 90° 紅弧"
        },
        {
          "type": "text",
          "text": "第 2 步：分針每小時轉 1 圈，3 小時共轉 3 圈。"
        },
        {
          "type": "eq",
          "expr": "分針路程 ＝ 10 × 2 × 3.14 × 3 ＝ 188.4",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：時針 12 小時才轉 1 圈，3 小時只走了 3/12 ＝ 1/4 圈（圓心角 90°）。"
        },
        {
          "type": "eq",
          "expr": "時針路程 ＝ 6 × 2 × 3.14 × 1/4 ＝ 9.42",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 4 步：求兩針針尖走過路程的差。"
        },
        {
          "type": "eq",
          "expr": "188.4 − 9.42 ＝ 178.98",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：兩針針尖走過的路程相差 178.98 公分"
        }
      ],
      "insight": "時鐘問題兩關鍵：指針長＝半徑（別忘乘 2）；分針 1 小時 1 圈、時針 1 小時只走 1/12 圈！",
      "distractorAnalysis": {
        "B": "誤以為時針走 3 小時就是走了 1/3 圈（120°）而非 3/12 ＝ 1/4 圈，將時針路程算成 12.56 公分，算出 188.4 − 12.56 ＝ 175.84 公分。",
        "D": "各自算出 188.4 公分與 9.42 公分後，未看清楚題目問「相差」多少而誤用加法，算成 188.4 ＋ 9.42 ＝ 197.82 公分。",
        "C": "誤把分針長 10 公分與時針長 6 公分當成「直徑」而非「半徑」，結果全部少乘 2，算出 94.2 − 4.71 ＝ 89.49 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "分針針尖 1 小時走 1 整圈：分針長 × 2 × 3.14",
        "時針針尖 1 小時走 1/12 圈（30°）：時針長 × 2 × 3.14 × 1/12"
      ],
      "conceptCompare": "很多同學看見「下午 1 點走到 4 點（3 小時）」會錯把時針當成走 3/10 圈或 1/3 圈，記得鐘面一圈共 12 個大格，走 3 格永遠是 3/12 ＝ 1/4 圈。",
      "examVariations": "若時間改為「下午 2 點 30 分走到 3 點 10 分（共 40 分鐘）」，分針轉了 40/60 ＝ 2/3 圈，時針則只轉了 40/720 ＝ 1/18 圈。"
    }
  },
  {
    "id": "U06-S4-O-031",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "3 圓排三角形緊綑繩長",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（品字三管綑綁）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "工地師傅將 3 根直徑都是 10 公分的圓柱形排水管排成「品」字形緊密靠攏，再用鋼絲緊緊綑綁 1 圈固定（接頭打結處不計）。請問至少需要多長的鋼絲？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "31.4 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      },
      {
        "key": "B",
        "text": "61.4 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "92.8 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "94.2 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "10 * 3 + 10 * (314/100)",
      "expect": "61.4"
    },
    "explanation": {
      "examPurpose": "測驗學生運用「切線分解法」處理多圓緊綑問題：拆成貼緊兩圓之間的直線段（等於圓心距＝直徑）與轉角弧線段（必拼成 1 個整圓）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把外圍鋼絲拆成兩類線段：連接相鄰圓管的「直線公切線」，以及貼著圓管轉彎的「圓弧」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"230\" cy=\"54\" r=\"28\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"202\" cy=\"102.5\" r=\"28\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"258\" cy=\"102.5\" r=\"28\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"205.8\" y1=\"40\" x2=\"177.8\" y2=\"88.5\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"254.2\" y1=\"40\" x2=\"282.2\" y2=\"88.5\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><line x1=\"202\" y1=\"130.5\" x2=\"258\" y2=\"130.5\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 205.8 40 A 28 28 0 0 1 254.2 40\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><path d=\"M 282.2 88.5 A 28 28 0 0 1 258 130.5\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><path d=\"M 202 130.5 A 28 28 0 0 1 177.8 88.5\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><polygon points=\"230,54 202,102.5 258,102.5\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><text x=\"162\" y=\"62\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"end\">直線 ＝ 直徑 10</text><text x=\"298\" y=\"62\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"start\">3 段紅弧 ＝ 1 個整圓</text><text x=\"230\" y=\"152\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">共 3 條直線段 (10 × 3 ＝ 30)</text></svg>",
          "caption": "藍實線＝3 條平行圓心距的直線段（各等於直徑 10）；紅粗線＝3 段 120° 弧（合為 1 整圓）"
        },
        {
          "type": "text",
          "text": "第 2 步：每條直線段與圓心連線組成矩形，長度剛好等於 2 條半徑（即 1 個直徑 10 公分），共有 3 條。"
        },
        {
          "type": "eq",
          "expr": "直線段總長 ＝ 10 × 3 ＝ 30",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：三個轉角貼附的圓弧各是 120°，120° × 3 ＝ 360°，剛好拼成 1 個直徑 10 公分的完整圓周長。"
        },
        {
          "type": "eq",
          "expr": "轉角圓弧總長 ＝ 10 × 3.14 ＝ 31.4",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "鋼絲總長 ＝ 30 ＋ 31.4 ＝ 61.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：至少需要 61.4 公分的鋼絲"
        }
      ],
      "insight": "圓柱綑綁神公式：不論綑成三角形還是正方形，轉角弧永遠拼成「1 個整圓」，只要數清楚外圍有幾段直線公切線！",
      "distractorAnalysis": {
        "A": "只算出轉角合起來的 1 個圓周長 31.4 公分，完全漏掉懸空跨過兩圓之間的 3 條直線段（30 公分）。",
        "C": "誤把題目的「直徑 10 公分」當成「半徑 10 公分」計算轉角圓周長，算出 30 ＋ 10 × 2 × 3.14 ＝ 92.8 公分。",
        "D": "誤以為 3 根水管就要算 3 個完整圓周長，直接列成 10 × 3.14 × 3 ＝ 94.2 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "等圓凸包綑綁 1 圈繩長 ＝ 外圍直線公切線總長 ＋ 1 個完整圓周長"
      ],
      "conceptCompare": "2 根並列要加 2 個直徑、3 根品字形要加 3 個直徑、4 根 2×2 正方形要加 4 個直徑；但無論幾根，外面轉彎的圓弧角度加起來永遠都是 360°（1 個整圓）！",
      "examVariations": "若題目改成「綑綁 2 圈，且接頭打結需預留 8 公分」，就先把 1 圈長 61.4 乘以 2，最後再加上 8 公分即可（61.4 × 2 ＋ 8 ＝ 130.8 公分）。"
    }
  },
  {
    "id": "U06-RV-O-032",
    "legacyId": null,
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "四葉草塗色周長",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（四葉草重疊周長）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "在一個邊長 20 公分的正方形內，分別以四條邊為直徑向正方形內部各畫一個半圓，四個半圓重疊交織出中間「四葉幸運草」形狀的塗色花瓣。請問這朵四葉草塗色部分的外圍周長（四片花瓣的邊界總長）是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "251.2 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "205.6 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "125.6 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "228 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "20 * (314/100) / 2 * 4",
      "expect": "125.6"
    },
    "explanation": {
      "examPurpose": "測驗學生穿透複雜重疊交織圖形的能力：把四葉草的 8 段小圓弧重新配對還原成原本的 4 個完整半圓弧。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：仔細觀察這 4 片花瓣的紅色外圍輪廓，每一片花瓣都由 2 段 1/4 圓弧組成；4 片花瓣共有 8 段 1/4 圓弧，剛好就是原本畫出的「4 個半圓的圓弧線」全部！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"170\" y=\"20\" width=\"120\" height=\"120\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><path d=\"M 170 20 A 60 60 0 0 1 230 80 A 60 60 0 0 1 170 20 Z\" fill=\"#fecdd3\"/><path d=\"M 290 20 A 60 60 0 0 1 230 80 A 60 60 0 0 1 290 20 Z\" fill=\"#fecdd3\"/><path d=\"M 170 140 A 60 60 0 0 1 230 80 A 60 60 0 0 1 170 140 Z\" fill=\"#fecdd3\"/><path d=\"M 290 140 A 60 60 0 0 1 230 80 A 60 60 0 0 1 290 140 Z\" fill=\"#fecdd3\"/><path d=\"M 170 20 A 60 60 0 0 0 290 20\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3\"/><path d=\"M 290 20 A 60 60 0 0 0 290 140\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3\"/><path d=\"M 290 140 A 60 60 0 0 0 170 140\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3\"/><path d=\"M 170 140 A 60 60 0 0 0 170 20\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3\"/><text x=\"315\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\">4 個直徑 20 的半圓弧</text><text x=\"315\" y=\"90\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\">＝ 2 個整圓周長</text><text x=\"152\" y=\"85\" font-size=\"13\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"end\">邊長 20</text></svg>",
          "caption": "4 片粉紅花瓣的外框剛好完整用盡 4 條紅色半圓弧（合為 2 個整圓）；灰虛線正方形邊長不屬於花瓣邊界"
        },
        {
          "type": "text",
          "text": "第 2 步：每個半圓的直徑都是正方形邊長 20 公分，4 個半圓剛好合為 4 ÷ 2 ＝ 2 個完整圓。"
        },
        {
          "type": "eq",
          "expr": "1 個半圓弧長 ＝ 20 × 3.14 ÷ 2 ＝ 31.4",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "四葉草周長 ＝ 31.4 × 4 ＝ 125.6",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：四葉草塗色部分的周長是 125.6 公分"
        }
      ],
      "insight": "拆開重組見真章：4 個半圓交錯形成的四葉草，每一絲半圓弧線都成了花瓣邊界，所以 4 個半圓弧 ＝ 2 個整圓周長！",
      "distractorAnalysis": {
        "B": "誤將外圍正方形的四條虛線邊長 20 × 4 ＝ 80 公分也算入四葉草周長，錯算成 125.6 ＋ 80 ＝ 205.6 公分。",
        "D": "誤將四葉草的「面積」算式（2 個整圓面積 − 正方形面積 ＝ 10 × 10 × 3.14 × 2 − 20 × 20 ＝ 228）當成周長。",
        "A": "誤把正方形邊長 20 公分當成半圓的「半徑」而非「直徑」，多乘了 2 倍算出 251.2 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "四葉草（四邊內向半圓交集）周長 ＝ 4 個半圓弧 ＝ 2 × 邊長 × 3.14"
      ],
      "conceptCompare": "求四葉草「面積」要用容斥原理（4 個半圓減正方形 ＝ 2 圓減 1 正方形），但求四葉草「周長」千萬不要減，直接把 4 條半圓弧線全部加起來就好！",
      "examVariations": "若正方形內有「4 個空白角落」，問 4 個空白處加 4 片花瓣的所有交界線總長，則還要再加上正方形周長 80 公分（共 205.6 公分）。"
    }
  },
  {
    "id": "U06-S2-O-033",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "硬幣貼正方形外框滾動",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8（圓心外滾軌跡長）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "將一枚半徑 2 公分的圓形代幣，緊貼著邊長 20 公分的正方形木板「外側」邊緣無滑動滾動 1 整圈回到出發位置。請問這枚代幣的「圓心」走過的路徑總長是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "92.56 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "80 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      },
      {
        "key": "C",
        "text": "96 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "86.28 公分",
        "trapCode": "U06_ROLLER_TURN_ERR"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "20 * 4 + 2 * 2 * (314/100)",
      "expect": "92.56"
    },
    "explanation": {
      "examPurpose": "測驗學生在動態滾動幾何中，追蹤「圓心軌跡」在頂點處會由直線轉變為「以頂點為圓心、代幣半徑為半徑的 90° 圓弧」，避免誤畫成尖角大正方形。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：分段追蹤圓心位置！當代幣沿著 4 條直線邊滾動時，圓心各走 1 段與邊長等長的直線（20 公分）；但每繞過正方形的 1 個頂點時，圓心必須繞頂點轉彎 90°，畫出半徑為 2 公分的 1/4 圓弧。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"185\" y=\"42\" width=\"90\" height=\"90\" fill=\"#f1f5f9\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"185\" y1=\"24\" x2=\"275\" y2=\"24\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"293\" y1=\"42\" x2=\"293\" y2=\"132\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"275\" y1=\"150\" x2=\"185\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"167\" y1=\"132\" x2=\"167\" y2=\"42\" stroke=\"#2563eb\" stroke-width=\"3\"/><path d=\"M 167 42 A 18 18 0 0 1 185 24\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 275 24 A 18 18 0 0 1 293 42\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 293 132 A 18 18 0 0 1 275 150\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 185 150 A 18 18 0 0 1 167 132\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><circle cx=\"230\" cy=\"24\" r=\"18\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><circle cx=\"230\" cy=\"24\" r=\"3\" fill=\"#2563eb\"/><text x=\"230\" y=\"92\" font-size=\"13\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">邊長 20</text><text x=\"315\" y=\"34\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\">4 個轉角 90° 紅弧</text><text x=\"315\" y=\"52\" font-size=\"12\" fill=\"#be123c\">＝ 半徑 2 的整圓</text><text x=\"145\" y=\"90\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"end\">4 條藍直線各 20</text></svg>",
          "caption": "圓心路徑＝4 條藍直線（與正方形邊長等長）＋ 4 段轉角紅弧（半徑 2 公分的 90° 圓弧合為 1 整圓）"
        },
        {
          "type": "text",
          "text": "第 2 步：計算 4 條直線段總長。"
        },
        {
          "type": "eq",
          "expr": "直線路徑 ＝ 20 × 4 ＝ 80",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：4 個轉角圓弧各為 90°，合計 360°（1 個半徑 2 公分的完整圓周長）。"
        },
        {
          "type": "eq",
          "expr": "轉角圓弧 ＝ 2 × 2 × 3.14 ＝ 12.56",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "圓心總路徑長 ＝ 80 ＋ 12.56 ＝ 92.56",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：代幣圓心走過的路徑總長是 92.56 公分"
        }
      ],
      "insight": "硬幣外滾繞凸多邊形一圈，圓心永遠走「原多邊形周長 ＋ 1 個硬幣自己的圓周長」（轉彎必為圓弧而非直角尖角）！",
      "distractorAnalysis": {
        "C": "誤以為圓心走過的是一圈放大後的尖角正方形，把邊長加上兩側半徑變成 24 × 4 ＝ 96 公分。",
        "D": "知道轉角 4 個弧會拼成 1 個圓，卻誤把硬幣「半徑 2 公分」當成直徑直接乘 3.14，算出 80 ＋ 6.28 ＝ 86.28 公分。",
        "B": "完全忘記代幣在四個角轉彎時圓心會畫出 90° 圓弧，只算出正方形原本的周長 20 × 4 ＝ 80 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓滾動繞任意凸多邊形「外側」1 圈，圓心路徑長 ＝ 多邊形周長 ＋ 滾動圓的圓周長"
      ],
      "conceptCompare": "注意區分「外側滾動」與「內側滾動」：若是半徑 2 公分的硬幣沿著邊長 20 公分正方形木框「內側」滾動，圓心在轉角撞牆後會直接轉折 90°、沒有外凸圓弧，圓心軌跡會變成邊長 16 公分的小正方形（周長 64 公分），路徑反而比外框更小！",
      "examVariations": "若這題改成問「代幣掃過的面積」，則是 4 個長方形（20 × 4 × 4）加 1 個半徑 4 的圓（因為掃過外緣寬度是直徑 4 公分）；而圓心路徑只看「半徑 2 公分」的軌跡，別混用！"
    }
  },
  {
    "id": "U06-S4-O-034",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "勒洛三角形三弧周長",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8（勒洛三角形弧長）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "畫一個邊長為 12 公分的正三角形，再分別以它的三個頂點為圓心、邊長 12 公分為半徑，向對邊外側各畫出一條圓心角 60° 的圓弧，構成一個曲邊的「勒洛三角形」（像三角飯糰的外框）。請問這個勒洛三角形的周長大約是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "73.68 公分",
        "trapCode": "U06_TRACK_INNER_OUTER_ERR"
      },
      {
        "key": "B",
        "text": "37.68 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "75.36 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "18.84 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "12 * 2 * (314/100) * (60 * 3 / 360)",
      "expect": "37.68"
    },
    "explanation": {
      "examPurpose": "測驗學生能否辨識勒洛三角形的三條外弧皆為 60°（合計僅 180° 半圓而非 360° 整圓），且內部輔助線段絕不能算進周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：確認外圍邊界。內部灰色的正三角形只是輔助線，這個圖形的外框完全由 3 條一模一樣的 60° 紅色圓弧接成。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 230 32 A 104 104 0 0 1 282 122 A 104 104 0 0 1 178 122 A 104 104 0 0 1 230 32 Z\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><polygon points=\"230,32 178,122 282,122\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4 4\"/><circle cx=\"230\" cy=\"32\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"178\" cy=\"122\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"282\" cy=\"122\" r=\"4\" fill=\"#2563eb\"/><text x=\"230\" y=\"88\" font-size=\"12\" font-weight=\"bold\" fill=\"#64748b\" text-anchor=\"middle\">內部邊長 12 (不計)</text><text x=\"308\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\">60° 圓弧 × 3</text><text x=\"308\" y=\"90\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\">＝ 180° 半圓弧</text><text x=\"152\" y=\"76\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"end\">半徑 12 公分</text></svg>",
          "caption": "外框只有 3 條 60° 紅弧（合計 180° 半圓）；內部灰虛線正三角形僅作圓心定位，不計入周長"
        },
        {
          "type": "text",
          "text": "第 2 步：3 條 60° 弧線合起來的圓心角 ＝ 60° × 3 ＝ 180°，也就是半徑 12 公分圓的「一半（半圓弧）」。"
        },
        {
          "type": "eq",
          "expr": "圓心角總和 ＝ 60° × 3 ＝ 180°（佔整圓 1/2）",
          "unit": ""
        },
        {
          "type": "eq",
          "expr": "外圍周長 ＝ 12 × 2 × 3.14 × 1/2 ＝ 37.68",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：勒洛三角形的周長大約是 37.68 公分"
        }
      ],
      "insight": "勒洛三角形 3 條弧加起來只有 180°（半圓），不是 360° 整圓！且內部正三角形三邊是輔助線，絕不相加！",
      "distractorAnalysis": {
        "A": "正確算出 3 條圓弧長 37.68 公分，卻誤將內部輔助的正三角形三邊長 12 × 3 ＝ 36 公分也計入，錯算成 37.68 ＋ 36 ＝ 73.68 公分。",
        "D": "誤將正三角形邊長 12 公分當成圓的「直徑」而非「半徑」，算出 12 × 3.14 ÷ 2 ＝ 18.84 公分。",
        "C": "誤以為 3 條圓弧合起來就是一個 360° 的完整圓，多算一倍成 12 × 2 × 3.14 ＝ 75.36 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "勒洛三角形周長 ＝ 3 條 60° 弧長 ＝ 180° 半圓弧 ＝ 邊長 × 3.14"
      ],
      "conceptCompare": "正三角形內角 60° 乘以 3 是 180°，所以勒洛三角形有個神奇特性：它的周長剛好就跟「直徑等於邊長 12 公分的普通圓形」（12 × 3.14 ＝ 37.68）完全一樣長！",
      "examVariations": "生活上許多水溝蓋或特殊鑽頭會使用勒洛三角形，因為它不論從哪個方向夾住，寬度永遠都是 12 公分（等寬曲線）。"
    }
  },
  {
    "id": "U06-RV-O-035",
    "legacyId": null,
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "兩輪同起點相遇公倍圈",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8（雙輪公倍數重合）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "地面起點線上並排立著甲、乙兩個圓輪，底部都貼地且各有一個紅色標記點接觸起點。已知甲輪的「圓周長」為 47.1 公分，乙輪的「直徑」為 20 公分。兩輪同時向右沿直線無滑動滾動，直到兩個紅色標記點「第一次同時再次貼地」時停下，請問兩輪各前進了幾公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "942 公分",
        "trapCode": "U06_ROLLER_TURN_ERR"
      },
      {
        "key": "B",
        "text": "188.4 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "376.8 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1884 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "60 * (314/100)",
      "expect": "188.4",
      "extraChecks": [
        {
          "expr": "47.1 / (314/100)",
          "expect": "15"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生先用小數除法逆推甲輪直徑，再結合第一單元「最小公倍數」求兩輪標記點首次同步貼地的最短距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把條件換成同一種標準！甲輪只給圓周長 47.1 公分，先用除法反求甲輪的直徑。"
        },
        {
          "type": "eq",
          "expr": "甲輪直徑 ＝ 47.1 ÷ 3.14 ＝ 15",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "47.1",
          "divisor": "3.14",
          "mode": "exact",
          "note": "除數 3.14 與被除數 47.1 小數點同時向右移 2 位（補一個 0），變成 4710 ÷ 314 ＝ 15"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"35\" y1=\"115\" x2=\"425\" y2=\"115\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"60\" cy=\"91\" r=\"24\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><circle cx=\"60\" cy=\"115\" r=\"4\" fill=\"#e11d48\"/><circle cx=\"150\" cy=\"115\" r=\"4\" fill=\"#e11d48\"/><circle cx=\"240\" cy=\"115\" r=\"4\" fill=\"#e11d48\"/><circle cx=\"330\" cy=\"115\" r=\"4\" fill=\"#e11d48\"/><circle cx=\"420\" cy=\"115\" r=\"4\" fill=\"#e11d48\"/><circle cx=\"180\" cy=\"115\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"300\" cy=\"115\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"420\" cy=\"83\" r=\"32\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><circle cx=\"420\" cy=\"115\" r=\"5\" fill=\"#1d4ed8\"/><text x=\"60\" y=\"58\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">甲輪直徑 15</text><text x=\"420\" y=\"42\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">乙輪直徑 20</text><text x=\"230\" y=\"138\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">甲 4 圈（4×15）與 乙 3 圈（3×20）於 60×3.14 公分同時著地</text></svg>",
          "caption": "紅點＝甲輪每轉 15 × 3.14 貼地一次；藍點＝乙輪每轉 20 × 3.14 貼地一次；兩者於 188.4 公分首次重合"
        },
        {
          "type": "text",
          "text": "第 2 步：甲輪每轉 1 圈前進 15 × 3.14 公分，乙輪每轉 1 圈前進 20 × 3.14 公分；因為兩邊都有「× 3.14」，只要先求直徑 15 和 20 的最小公倍數！"
        },
        {
          "type": "eq",
          "expr": "15 和 20 的最小公倍數 ＝ 60",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 3 步：當甲輪轉 60 ÷ 15 ＝ 4 圈、乙輪轉 60 ÷ 20 ＝ 3 圈時，前進總距離剛好是 60 × 3.14 公分（即 47.1 × 4）。"
        },
        {
          "type": "eq",
          "expr": "前進距離 ＝ 60 × 3.14 ＝ 188.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：兩輪各前進了 188.4 公分"
        }
      ],
      "insight": "小數圓周找公倍數，先同除以 3.14 找直徑（15 與 20）的最小公倍數 60，最後再乘回 3.14，整潔零誤差！",
      "distractorAnalysis": {
        "A": "求出甲輪直徑 15 公分後，沒求最小公倍數 60，直接把兩直徑相乘算成 15 × 20 × 3.14 ＝ 942 公分。",
        "C": "把 15 和 20 的最小公倍數錯算成 120，多乘 2 倍而得出 120 × 3.14 ＝ 376.8 公分。",
        "D": "計算 60 × 3.14 或 47.1 × 4 時小數點漏點（或錯移一位），算成 1884 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同起點兩輪首次再次同時貼地距離 ＝ (甲輪直徑與乙輪直徑的最小公倍數) × 3.14"
      ],
      "conceptCompare": "面對 47.1 與 62.8 這種小數，千萬別傻傻去列短除法，先提出共同因子 3.14 化成整數 15 和 20 再找最小公倍數，是奧數最核心的「提出公因數簡化法」。",
      "examVariations": "若改問「停下時甲輪比乙輪多轉了幾圈？」，只要用 60 ÷ 15 − 60 ÷ 20 ＝ 4 − 3 ＝ 1 圈即可。"
    }
  },
  {
    "id": "U06-S3-O-036",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "等邊三角繞牆滾轉頂點弧",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9（正三角形翻滾頂點弧）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一個邊長 12 公分的正三角形積木平放在長尺上，一開始在左下角貼地的頂點貼上紅點貼紙。將這個正三角形沿著長尺向右連續無滑動翻滾 3 次後，恰好恢復原本正立的姿勢。請問在這 3 次翻滾過程中，那顆「紅點貼紙」走過的弧線總長是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "25.12 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "B",
        "text": "75.36 公分",
        "trapCode": "U06_ROLLER_TURN_ERR"
      },
      {
        "key": "C",
        "text": "50.24 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "36 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "12 * 2 * (314/100) * (120/360) * 2",
      "expect": "50.24"
    },
    "explanation": {
      "examPurpose": "測驗學生在多邊形翻滾問題中，精準判定每次的旋轉支點、外角旋轉角度（180° − 60° ＝ 120°），並發現第 3 次翻滾時紅點剛好作為支點靜止不動。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：畫出正三角形向右翻滾 3 次的軌跡！正三角形內角 60°，每次向右翻滾會繞著右下角支點旋轉 180° − 60° ＝ 120°。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"130\" x2=\"440\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><polygon points=\"50,130 120,130 85,69.4\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><polygon points=\"120,130 190,130 155,69.4\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polygon points=\"190,130 260,130 225,69.4\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polygon points=\"260,130 330,130 295,69.4\" fill=\"#fff1f2\" stroke=\"#475569\" stroke-width=\"2\"/><path d=\"M 50 130 A 70 70 0 0 1 155 69.4\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 155 69.4 A 70 70 0 0 1 260 130\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><circle cx=\"50\" cy=\"130\" r=\"5\" fill=\"#e11d48\"/><circle cx=\"155\" cy=\"69.4\" r=\"5\" fill=\"#e11d48\"/><circle cx=\"260\" cy=\"130\" r=\"5\" fill=\"#e11d48\"/><text x=\"102\" y=\"48\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">第 1 次 120° 弧</text><text x=\"210\" y=\"48\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">第 2 次 120° 弧</text><text x=\"320\" y=\"110\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"start\">第 3 次以紅點為支點</text><text x=\"320\" y=\"126\" font-size=\"12\" fill=\"#1d4ed8\" text-anchor=\"start\">(靜止不動 0 公分)</text></svg>",
          "caption": "紅點貼紙共畫出 2 段半徑 12 公分的 120° 紅弧；第 3 次翻滾時紅點被壓在地面當支點，移動距離為 0"
        },
        {
          "type": "text",
          "text": "第 2 步：追蹤紅點貼紙 3 次翻滾的動態："
        },
        {
          "type": "text",
          "text": "• 第 1 次翻滾：紅點從左下角飛到頂端，畫出半徑 12 公分、120° 的圓弧。"
        },
        {
          "type": "text",
          "text": "• 第 2 次翻滾：紅點從頂端落回地面，再畫出半徑 12 公分、120° 的圓弧。"
        },
        {
          "type": "text",
          "text": "• 第 3 次翻滾：紅點剛好踩在地面上當作旋轉支點，移動 0 公分！"
        },
        {
          "type": "eq",
          "expr": "1 段 120° 弧長 ＝ 12 × 2 × 3.14 × 1/3 ＝ 25.12",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "紅點總弧長 ＝ 25.12 × 2 ＝ 50.24",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：紅點貼紙走過的弧線總長是 50.24 公分"
        }
      ],
      "insight": "多邊形翻滾找兩件事：一算外角看轉幾度（180° − 60° ＝ 120°），二看誰當支點（當支點那次移動 0）！",
      "distractorAnalysis": {
        "B": "誤以為翻滾 3 次，紅點就畫了 3 段 120° 圓弧，沒有察覺第 3 次紅點本身是支點沒移動，多算成 25.12 × 3 ＝ 75.36 公分。",
        "D": "誤以為正三角形翻滾 3 次頂點走的直線距離等於 3 條邊長，直接錯算成 12 × 3 ＝ 36 公分。",
        "A": "誤將正三角形的「內角 60°」當成翻滾旋轉的圓心角（正確應為外角 120°），弧長少算一半成 12.56 × 2 ＝ 25.12 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "正三角形外角 ＝ 180° − 60° ＝ 120°（1/3 圓）",
        "滾回原姿勢（3 次）單一頂點路徑 ＝ 2 段 120° 圓弧 ＝ 240°（2/3 圓）"
      ],
      "conceptCompare": "正三角形 3 個頂點輪流當支點，每次有 2 個點飛起來畫弧、1 個點踩地不動。若是「正方形」翻滾 4 次回原姿勢，外角是 90°，那個紅點一樣有 1 次當支點不動，另外 3 次畫弧（其中有 1 次半徑是對角線，小學階段多只考正三角形或正方形只看貼邊點）。",
      "examVariations": "若把「3 次」改成「連續翻滾 6 次（兩大輪）」，只要將 50.24 × 2 ＝ 100.48 公分即可。"
    }
  },
  {
    "id": "U06-S4-O-037",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "圓周長與弧長的應用",
    "category": "6 根圓柱兩層綑綁最省繩",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9（6 圓柱排法比較）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "倉儲人員要把 6 根半徑都是 5 公分的圓形鋼管緊密綑綁 1 圈（不計打結長度），目前考慮兩種堆疊法：方法一是排成「2 排 × 3 根」的長方形；方法二是從上到下排成「1 根、2 根、3 根」的正三角形。請問哪一種排法比較省繩子？最少需要幾公分繩子？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "正三角形排法比較省，只需要 61.4 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      },
      {
        "key": "B",
        "text": "長方形排法比較省，只需要 81.4 公分",
        "trapCode": "U06_TRACK_INNER_OUTER_ERR"
      },
      {
        "key": "C",
        "text": "兩種一樣省，都需要 91.4 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "兩種一樣省，都需要 122.8 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "6 * (5 * 2) + (5 * 2) * (314/100)",
      "expect": "91.4"
    },
    "explanation": {
      "examPurpose": "測驗學生對一般多圓外包綑綁模型的深刻理解：透過各自拆解「外圍直線段數（圓心距段數）」與「轉角整圓」，驚喜發現兩種排列繩長竟然完全相等。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先求鋼管直徑 ＝ 5 × 2 ＝ 10 公分（兩個相切圓心的距離也是 10 公分）。接著畫出兩種排法的外圍切線與轉角圓弧！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"55\" cy=\"68\" r=\"20\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"95\" cy=\"68\" r=\"20\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"135\" cy=\"68\" r=\"20\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"55\" cy=\"108\" r=\"20\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"95\" cy=\"108\" r=\"20\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"135\" cy=\"108\" r=\"20\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"55\" y1=\"48\" x2=\"135\" y2=\"48\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"55\" y1=\"128\" x2=\"135\" y2=\"128\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"35\" y1=\"68\" x2=\"35\" y2=\"108\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"155\" y1=\"68\" x2=\"155\" y2=\"108\" stroke=\"#2563eb\" stroke-width=\"3\"/><path d=\"M 35 68 A 20 20 0 0 1 55 48\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 135 48 A 20 20 0 0 1 155 68\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 155 108 A 20 20 0 0 1 135 128\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 55 128 A 20 20 0 0 1 35 108\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><text x=\"95\" y=\"28\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">方法一：長方形 2×3</text><text x=\"95\" y=\"152\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">直線：20＋10＋20＋10＝60</text><circle cx=\"340\" cy=\"54\" r=\"18\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"322\" cy=\"85.2\" r=\"18\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"358\" cy=\"85.2\" r=\"18\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"304\" cy=\"116.4\" r=\"18\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"340\" cy=\"116.4\" r=\"18\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"376\" cy=\"116.4\" r=\"18\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"324.4\" y1=\"45\" x2=\"288.4\" y2=\"107.4\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"355.6\" y1=\"45\" x2=\"391.6\" y2=\"107.4\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"304\" y1=\"134.4\" x2=\"376\" y2=\"134.4\" stroke=\"#2563eb\" stroke-width=\"3\"/><path d=\"M 324.4 45 A 18 18 0 0 1 355.6 45\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 391.6 107.4 A 18 18 0 0 1 376 134.4\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 304 134.4 A 18 18 0 0 1 288.4 107.4\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><text x=\"340\" y=\"24\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">方法二：正三角形 1+2+3</text><text x=\"340\" y=\"156\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">直線：20＋20＋20＝60</text></svg>",
          "caption": "兩種排法外圍藍色直線加總都是 6 個直徑（60 公分），紅色轉角圓弧都合為 1 個整圓（31.4 公分）"
        },
        {
          "type": "text",
          "text": "第 2 步：分別計算兩種排法的繩長。"
        },
        {
          "type": "text",
          "text": "• 方法一（長方形）：上下兩長邊各跨 2 個圓心距（20 公分）、左右兩短邊各跨 1 個圓心距（10 公分），直線共有 (20 ＋ 10) × 2 ＝ 60 公分；四個角各 90° 合為 1 整圓（31.4 公分）。"
        },
        {
          "type": "text",
          "text": "• 方法二（正三角形）：三條邊各跨 2 個圓心距（20 公分），直線共有 20 × 3 ＝ 60 公分；三個角各 120° 同樣合為 1 整圓（31.4 公分）。"
        },
        {
          "type": "eq",
          "expr": "兩種排法繩長 ＝ 60 ＋ 10 × 3.14 ＝ 60 ＋ 31.4 ＝ 91.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：兩種排法一樣省，都需要 91.4 公分"
        }
      ],
      "insight": "比省繩子只看外圍跨了幾個「圓心距」：長方形繞一圈跨了 2＋1＋2＋1 ＝ 6 個，正三角形繞一圈跨了 2＋2＋2 ＝ 6 個，所以竟然一模一樣長！",
      "distractorAnalysis": {
        "A": "數正三角形外圍直線段時，誤把每邊 2 個圓心距當成只有 1 個直徑，算出 30 ＋ 31.4 ＝ 61.4 公分。",
        "D": "雖然正確看出兩種一樣長，卻誤將半徑 5 公分當成直徑 10、或圓弧多乘 2 算成 60 ＋ 62.8 ＝ 122.8 公分。",
        "B": "計算長方形排列外圍直線段時漏算了一邊或減錯圓心距，只加了 50 公分而錯算成 50 ＋ 31.4 ＝ 81.4 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "方法一（2×3 長方形）繩長 ＝ (2＋1＋2＋1) × 直徑 ＋ 1 圓周 ＝ 6 × 直徑 ＋ 1 圓周",
        "方法二（1＋2＋3 三角形）繩長 ＝ (2＋2＋2) × 直徑 ＋ 1 圓周 ＝ 6 × 直徑 ＋ 1 圓周"
      ],
      "conceptCompare": "那「排成 1 排 × 6 根」呢？單排繞一圈會跨過 5＋5 ＝ 10 個圓心距，總長需要 100 ＋ 31.4 ＝ 131.4 公分，足足多了 40 公分！所以堆成多層緊湊形狀才會最省繩子。",
      "examVariations": "若換成「7 根鋼管圍成 1 根在中間、6 根包在周圍的正六邊形」，外圍每邊各跨 1 個直徑，6 邊共 6 個直徑 ＋ 1 整圓，繩長依然是 91.4 公分（用同樣的繩子多捆了 1 根）！"
    }
  },
  {
    "id": "U06-RV-O-038",
    "legacyId": null,
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "扇形弧長倍數逆推周長",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9（弧長比例反推扇形周長）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一個半徑為 12 公分的扇形零件，工廠測得它的「弧長」恰好是它自己「半徑」的 3.14 倍。請問這個扇形零件的「整個周長」是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "37.68 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "99.36 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "C",
        "text": "226.08 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "61.68 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "12 * (314/100) + 12 * 2",
      "expect": "61.68"
    },
    "explanation": {
      "examPurpose": "測驗學生對圓周長結構的深層數感：當「弧長 ＝ 半徑 × 3.14」時，因為整圓周長是「直徑 × 3.14 ＝ 2 × 半徑 × 3.14」，所以這個扇形正是 180° 半圓，最後還要加上兩條半徑才成為周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從條件「弧長 ＝ 半徑 × 3.14」反推這是幾分之幾圓。因為整圓周長 ＝ 2 × 半徑 × 3.14，所以這段弧長剛好是整圓的 1/2（180° 半圓）！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 110 115 A 100 100 0 0 1 310 115 Z\" fill=\"#fff1f2\" stroke=\"none\"/><path d=\"M 110 115 A 100 100 0 0 1 310 115\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"4\"/><line x1=\"110\" y1=\"115\" x2=\"310\" y2=\"115\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"210\" cy=\"115\" r=\"4\" fill=\"#1e293b\"/><text x=\"210\" y=\"52\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">紅弧長 ＝ 半徑 × 3.14 ＝ 12 × 3.14 ＝ 37.68</text><text x=\"160\" y=\"136\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">半徑 12</text><text x=\"260\" y=\"136\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">半徑 12</text><text x=\"210\" y=\"96\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"middle\">圓心角 180°（半圓）</text></svg>",
          "caption": "紅弧長＝12 × 3.14＝37.68 公分（剛好是半圓弧）；整個扇形周長必須加上下方兩條藍半徑 24 公分"
        },
        {
          "type": "text",
          "text": "第 2 步：先算出弧長（半徑 12 公分的 3.14 倍）。"
        },
        {
          "type": "eq",
          "expr": "弧長 ＝ 12 × 3.14 ＝ 37.68",
          "unit": "公分"
        },
        {
          "type": "mul",
          "a": "3.14",
          "b": "12",
          "note": "計算弧長 3.14 × 12 ＝ 37.68 公分"
        },
        {
          "type": "text",
          "text": "第 3 步：扇形整個周長 ＝ 弧長 ＋ 2 條半徑。"
        },
        {
          "type": "eq",
          "expr": "整個周長 ＝ 37.68 ＋ 12 × 2 ＝ 37.68 ＋ 24 ＝ 61.68",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：整個扇形零件的周長是 61.68 公分"
        }
      ],
      "insight": "數感密碼：「弧長是半徑的 3.14 倍」就是半圓（180°），「弧長是直徑的 3.14 倍」才是整圓（360°）；別忘記周長還要加兩條半徑！",
      "distractorAnalysis": {
        "A": "只算出了題目描述的「弧長」37.68 公分，忘記問的是「整個扇形周長」必須加上兩條半徑 24 公分。",
        "B": "誤把題目說的「半徑的 3.14 倍」錯記成 2 倍弧長，算出整圓周長 75.36 再加 24 ＝ 99.36 公分。",
        "C": "誤套用圓面積公式算出半圓面積（12 × 12 × 3.14 ÷ 2 ＝ 226.08），把面積當成周長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "整圓周長 ＝ 直徑 × 3.14 ＝ 2 × 半徑 × 3.14",
        "半圓弧長 ＝ 半徑 × 3.14；半圓周長 ＝ 半徑 × (3.14 ＋ 2)"
      ],
      "conceptCompare": "「弧長是半徑的 3.14 倍」在幾何上就代表圓心角剛好是 180°（半圓）！不用背特別名詞，只要比較「半徑 × 3.14」剛好是整圓「2 × 半徑 × 3.14」的一半，就能秒殺看穿它是半圓！",
      "examVariations": "若改問「當弧長是半徑的 1.57 倍時，這是幾分之幾圓？」，因為 1.57 ＝ 3.14 ÷ 2，所以佔了半圓的一半，也就是 1/4 圓（圓心角 90°）。"
    }
  },
  {
    "id": "U06-S2-O-039",
    "legacyId": null,
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長",
    "category": "齒輪帶動兩圓滾動轉數",
    "batch": "奧數天梯",
    "source": "奧數天梯 L10（小圓外滾大圓自轉）",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "桌面上固定著一個半徑 12 公分的大圓盤，另有一枚半徑 4 公分的小圓盤緊貼著大圓盤「外側」邊緣無滑動滾動，繞大圓盤外圍 1 整圈回到起點。請問在滾動過程中，小圓盤自己總共自轉了幾圈？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "3 圈",
        "trapCode": "U06_ROLLER_TURN_ERR"
      },
      {
        "key": "B",
        "text": "2 圈",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "C",
        "text": "6 圈",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "4 圈",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "((12 + 4) * 2 * (314/100)) / (4 * 2 * (314/100))",
      "expect": "4"
    },
    "explanation": {
      "examPurpose": "測驗 AMC 8 壓軸經典模型「硬幣外滾悖論」：學生極易只算兩圓周長比 (12 ÷ 4 ＝ 3)，透過追蹤「小圓圓心走過的實際大圓軌跡（半徑 12 ＋ 4 ＝ 16）」，直觀破解多出來的公轉 1 圈。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：破解「只除周長比」的陷阱！小圓盤不只是在大圓盤上滾動，它的「圓心」同時繞著大圓盤的中心公轉了一整圈。觀察下圖，小圓盤圓心走出的藍色虛線大圓，半徑是 12 ＋ 4 ＝ 16 公分！"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"170\" cy=\"88\" r=\"68\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-dasharray=\"5 4\"/><circle cx=\"170\" cy=\"88\" r=\"51\" fill=\"#f1f5f9\" stroke=\"#475569\" stroke-width=\"2.5\"/><circle cx=\"238\" cy=\"88\" r=\"17\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><line x1=\"170\" y1=\"88\" x2=\"221\" y2=\"88\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"221\" y1=\"88\" x2=\"238\" y2=\"88\" stroke=\"#e11d48\" stroke-width=\"2\"/><circle cx=\"170\" cy=\"88\" r=\"3.5\" fill=\"#1e293b\"/><circle cx=\"238\" cy=\"88\" r=\"3.5\" fill=\"#2563eb\"/><text x=\"195\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">12</text><text x=\"230\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">4</text><text x=\"262\" y=\"64\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">藍虛線＝小圓圓心軌跡</text><text x=\"262\" y=\"84\" font-size=\"12\" fill=\"#1d4ed8\">軌跡半徑 ＝ 12 ＋ 4 ＝ 16</text><text x=\"262\" y=\"108\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\">紅小圓自轉 ＝ 軌跡周 ÷ 小圓周</text><text x=\"262\" y=\"128\" font-size=\"11\" fill=\"#be123c\">(16×2×3.14)÷(4×2×3.14) ＝ 4</text></svg>",
          "caption": "大圓半徑 12（灰）、小圓半徑 4（紅）；小圓圓心走過的藍虛線圓半徑為 12 ＋ 4 ＝ 16 公分"
        },
        {
          "type": "text",
          "text": "第 2 步：算出小圓盤「圓心」走過的路徑總長，以及小圓盤自己的圓周長。"
        },
        {
          "type": "eq",
          "expr": "圓心路徑長 ＝ (12 ＋ 4) × 2 × 3.14 ＝ 32 × 3.14 ＝ 100.48",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "小圓盤周長 ＝ 4 × 2 × 3.14 ＝ 8 × 3.14 ＝ 25.12",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：圓心走過的總距離除以小圓盤周長，就是小圓盤實際自轉的總圈數。"
        },
        {
          "type": "eq",
          "expr": "自轉圈數 ＝ 100.48 ÷ 25.12 ＝ 4",
          "unit": "圈"
        },
        {
          "type": "longdiv",
          "dividend": "100.48",
          "divisor": "25.12",
          "mode": "exact",
          "note": "除數與被除數小數點同時右移 2 位，10048 ÷ 2512 ＝ 4 圈"
        },
        {
          "type": "answer",
          "text": "答：小圓盤自己總共自轉了 4 圈"
        }
      ],
      "insight": "硬幣外滾秒殺口訣：外滾看「圓心軌道半徑（大＋小）」除以「小圓半徑」，即 (12 ＋ 4) ÷ 4 ＝ 4 圈（也就是周長倍數再加公轉 1 圈）！",
      "distractorAnalysis": {
        "A": "經典誤區！只算大圓周長除以小圓周長（12 ÷ 4 ＝ 3 圈），忘記小圓繞大圓外圍公轉 1 圈還會額外多自轉 1 圈。",
        "B": "把外滾加 1 圈跟內滾減 1 圈搞混，誤算成 12 ÷ 4 − 1 ＝ 2 圈。",
        "C": "誤將大圓半徑 12 公分當成直徑 24 公分與小圓半徑 4 混用相除，錯算成 24 ÷ 4 ＝ 6 圈。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "小圓沿大圓「外側」滾 1 圈自轉數 ＝ (大圓半徑 ＋ 小圓半徑) ÷ 小圓半徑 ＝ (大 ÷ 小) ＋ 1",
        "小圓沿大圓「內側」滾 1 圈自轉數 ＝ (大圓半徑 − 小圓半徑) ÷ 小圓半徑 ＝ (大 ÷ 小) − 1"
      ],
      "conceptCompare": "「沿大圓外側滾動」相當於沿著平坦路面滾 3 圈的同時、整個路面自己又順時針翻轉了一整圈（3 ＋ 1 ＝ 4）；相反地，若是在大圓「內側」滾動，圓心軌跡半徑只剩 12 − 4 ＝ 8 公分，所以自轉就會變成 8 ÷ 4 ＝ 2 圈！",
      "examVariations": "AMC 8 曾考過完全相同的結構：小圓半徑是 1、大圓半徑是 3 時，小圓繞大圓外滾回原處也是自轉 3 ＋ 1 ＝ 4 圈。"
    }
  },
  {
    "id": "U06-RV-O-040",
    "legacyId": null,
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "多層半圓接力波浪周長",
    "batch": "奧數天梯",
    "source": "奧數天梯 L10（五半圓封閉魚形）",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "在一條水平虛線上方，由左到右依序緊密接連畫出 4 個半圓，直徑分別是 6 公分、12 公分、18 公分、24 公分；在水平虛線下方，則從最左端連到最右端畫出 1 個直徑 60 公分的大半圓，共同圍成一個封閉的波浪魚形徽章。請問這枚徽章最外圍的總周長是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "188.4 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "248.4 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "94.2 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      },
      {
        "key": "D",
        "text": "376.8 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(6 + 12 + 18 + 24) * (314/100) / 2 + 60 * (314/100) / 2",
      "expect": "188.4"
    },
    "explanation": {
      "examPurpose": "測驗學生運用「分配律打包直徑和」與「內部虛線消去原則」，看穿多個接力半圓弧長總和必定等於同跨距大半圓弧長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：檢查外圍邊界！徽章最外圍是由「上方 4 個小半圓弧」加上「下方 1 個大半圓弧」接成，中間 60 公分的水平虛線被包在徽章裡面，絕對不能算進周長。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 175\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 140 62 A 9 9 0 0 1 158 62 A 18 18 0 0 1 194 62 A 27 27 0 0 1 248 62 A 36 36 0 0 1 320 62 A 90 90 0 0 1 140 62 Z\" fill=\"#fff1f2\" stroke=\"none\"/><line x1=\"140\" y1=\"62\" x2=\"320\" y2=\"62\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\"/><path d=\"M 140 62 A 9 9 0 0 1 158 62 A 18 18 0 0 1 194 62 A 27 27 0 0 1 248 62 A 36 36 0 0 1 320 62\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3.5\"/><path d=\"M 140 62 A 90 90 0 0 0 320 62\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><text x=\"149\" y=\"46\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">6</text><text x=\"176\" y=\"38\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">12</text><text x=\"221\" y=\"29\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">18</text><text x=\"284\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">24</text><text x=\"336\" y=\"52\" font-size=\"12\" font-weight=\"bold\" fill=\"#64748b\" text-anchor=\"start\">內部虛線總長 60</text><text x=\"336\" y=\"69\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"start\">(不計入外圍周長)</text><text x=\"230\" y=\"168\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">下方大半圓弧（直徑 60）</text></svg>",
          "caption": "上方 4 個紅波浪半圓弧（直徑和 6＋12＋18＋24＝60）＋ 下方藍色大半圓弧（直徑 60），合為 1 整圓"
        },
        {
          "type": "text",
          "text": "第 2 步：用分配律把上方 4 個半圓的弧長合起來計算，不需要個別算出 4 個小數！"
        },
        {
          "type": "eq",
          "expr": "上方 4 弧總長 ＝ (6 ＋ 12 ＋ 18 ＋ 24) × 3.14 ÷ 2 ＝ 60 × 3.14 ÷ 2 ＝ 94.2",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：算出下方直徑 60 公分的大半圓弧長，再兩者相加。"
        },
        {
          "type": "eq",
          "expr": "下方大弧長 ＝ 60 × 3.14 ÷ 2 ＝ 94.2",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "徽章總周長 ＝ 94.2 ＋ 94.2 ＝ 188.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這枚徽章最外圍的總周長是 188.4 公分"
        }
      ],
      "insight": "共線相切半圓神技：一串半圓只要「直徑和」等於下方大半圓直徑，波浪總弧長就和大半圓弧長一模一樣，合起來正好是 1 個完整圓！",
      "distractorAnalysis": {
        "B": "誤把中間僅用於定位直徑的 60 公分水平虛線也計入外圍周長，算出 188.4 ＋ 60 ＝ 248.4 公分。",
        "C": "只算出上方 4 個波浪半圓弧總長 94.2 公分，漏算了下方包圍封閉圖形的大半圓弧 94.2 公分。",
        "D": "在計算半圓弧長時忘記除以 2，把每個半圓都當成整圓去乘，結果多算 2 倍成 188.4 × 2 ＝ 376.8 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同直徑總長的多段半圓弧之和 ＝ (各小直徑總和) × 3.14 ÷ 2 ＝ 對應大半圓弧長"
      ],
      "conceptCompare": "就算上方這 4 個半圓改成「10 個或 100 個大小不等的半圓接在一起」，只要起點與終點總長度一樣是 60 公分，波浪線的總長度永遠還是 94.2 公分！這就是著名的等長半圓波浪不變性。",
      "examVariations": "若題目改成「上方 4 個半圓改成『交錯上下凹凸』形成太極蛇形曲線（仍接回起終點）」，只要把原本直徑 60 的下方大半圓弧移過來配對，曲線總長依然不變！"
    }
  },
  {
    "id": "U06-S1-M-041",
    "legacyId": "u06_m01",
    "unitId": "U06",
    "section": "6-1",
    "sectionName": "認識圓周率",
    "category": "圓周率意義",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "任何一個圓，「圓周長 ÷ 直徑」的結果是？",
    "options": [
      {
        "key": "A",
        "text": "圓周率（約 3.14）",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "半徑",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "依圓的大小而不同",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解圓周率是「圓周長除以直徑」的固定比值，且與圓的大小無關。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：任意大小的圓，形狀都完全相似，都是彼此的放大或縮小圖。"
        },
        {
          "type": "eq",
          "expr": "圓周長 ÷ 直徑 ＝ 圓周率（約 3.14）",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：不管圓變大或變小，圓周長跟直徑都會以相同倍數一起放大或縮小，所以兩者的比值永遠固定不變。"
        },
        {
          "type": "answer",
          "text": "答：圓周率（約 3.14）"
        }
      ],
      "insight": "圓周率是一個固定不變的常數（大約 3.14），不管是 1 元硬幣還是地球赤道，圓周長除以直徑都一樣大。",
      "distractorAnalysis": {
        "C": "混淆了長度名詞，圓周長除以直徑得到的是沒有單位的倍數（圓周率），而不是半徑。",
        "D": "誤以為越大的圓，圓周長除以直徑的比值也會跟著變大。",
        "B": "誤把「直徑 ÷ 半徑 ＝ 2」的關係套用到圓周長與直徑上。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周率 ＝ 圓周長 ÷ 直徑 ≈ 3.14（固定不變）"
      ],
      "conceptCompare": "直徑有單位（如公分、公尺），圓周長也有單位，但「圓周長 ÷ 直徑」代表圓周長是直徑的幾倍，所以圓周率沒有單位，而且大小圓都一樣。",
      "examVariations": "段考常考「直徑 10 公分的圓和直徑 100 公分的圓，哪一個的圓周率比較大？」，答案是一樣大。"
    }
  },
  {
    "id": "U06-S2-M-042",
    "legacyId": "u06_m02",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長計算與應用",
    "category": "直徑與半徑",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "直徑 10 公分的圓和半徑 5 公分的圓，圓周長相比哪一個比較長？",
    "options": [
      {
        "key": "A",
        "text": "前者比較長",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "一樣長",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "後者比較長",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "無法比較",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否會先將「半徑」與「直徑」統一換算成相同基準後再進行比較。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把兩個圓都換算成「直徑」來比較。"
        },
        {
          "type": "eq",
          "expr": "5 × 2 ＝ 10",
          "unit": "公分（後者的直徑）"
        },
        {
          "type": "text",
          "text": "第 2 步：兩者的直徑都是 10 公分，代表是完全一樣大的圓，因此圓周長一樣長。"
        },
        {
          "type": "answer",
          "text": "答：一樣長"
        }
      ],
      "insight": "比較兩個圓的大小或周長時，先統一換算成「半徑」或統一換算成「直徑」，不要直接拿數字 10 和 5 硬比。",
      "distractorAnalysis": {
        "A": "沒有注意單位名詞不同，直接把直徑 10 和半徑 5 比大小而誤選前者。",
        "D": "誤以為沒有給圓周率精確值就無法比較兩個圓的周長。",
        "C": "反過來以為有提到半徑還要再加倍，誤判後者比較長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 半徑 × 2",
        "直徑相等的兩個圓，半徑、圓周長與面積全都相等"
      ],
      "conceptCompare": "題目同時出現「直徑」和「半徑」是最常見的閱讀陷阱，動筆或心算前一定要先把兩者換成同一種稱呼。",
      "examVariations": "段考常考「半徑 6 公分的圓和直徑 10 公分的圓，哪一個周長比較長？」，先算半徑 6 的直徑 ＝ 12 公分，便可知前者較長。"
    }
  },
  {
    "id": "U06-S2-M-043",
    "legacyId": "u06_m03",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長計算與應用",
    "category": "周長正比",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "圓的直徑變成原來的 3 倍，圓周長會變成原來的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "不變",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "6 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "9 倍",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "3 倍",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "3",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握「圓周長與直徑成正比」的一維長度倍數關係，避免與二維面積平方倍混淆。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：寫出圓周長關係式，其中圓周率（約 3.14）是固定不變的常數。"
        },
        {
          "type": "eq",
          "expr": "新圓周長 ＝ (原直徑 × 3) × 3.14 ＝ 原圓周長 × 3",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：直徑變成 3 倍時，圓周長也跟著變成 3 倍。"
        },
        {
          "type": "answer",
          "text": "答：3 倍"
        }
      ],
      "insight": "長度跟著長度同倍數變化：直徑（或半徑）變幾倍，圓周長就變幾倍；只有面積才會變成倍數的平方（3 × 3 ＝ 9 倍）。",
      "distractorAnalysis": {
        "B": "把「直徑 ＝ 半徑 × 2」的多餘 2 倍乘進去，誤算成 3 × 2 ＝ 6 倍。",
        "C": "和圓面積混淆，誤把周長變化也算成 3 × 3 ＝ 9 倍。",
        "A": "和「圓周率固定不變」的性質搞混，以為圓周長也不會變。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半徑或直徑變為幾倍 ➔ 圓周長也變為幾倍（成正比）",
        "圓周率永遠固定不變"
      ],
      "conceptCompare": "直徑變 3 倍時：圓周率「不變（1 倍）」、半徑變「3 倍」、圓周長變「3 倍」、圓面積才變「9 倍」。",
      "examVariations": "若題目改成「半徑變成原來的 4 倍，圓周長變成幾倍？」，同樣直接回答 4 倍，不要再乘以 2。"
    }
  },
  {
    "id": "U06-S3-M-044",
    "legacyId": "u06_m04",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "半圓周長",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "「半圓形的周長」和「圓周長的一半」，哪一個比較長？",
    "options": [
      {
        "key": "A",
        "text": "半圓形的周長",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "一樣長",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "C",
        "text": "圓周長的一半",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "無法比較",
        "trapCode": "U06_FORGET_TWO_RADII"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能區分「半圓弧長（圓周長的一半）」與「半圓形周長（弧長 ＋ 直徑）」的關鍵差異。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><path d=\"M 40,100 A 55,55 0 0,1 150,100\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"40\" y1=\"100\" x2=\"150\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/><text x=\"95\" y=\"28\" font-size=\"14\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">圓周長的一半</text><text x=\"95\" y=\"128\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">只有紅色圓弧</text><path d=\"M 240,100 A 55,55 0 0,1 350,100 Z\" fill=\"#eff6ff\" stroke=\"none\"/><path d=\"M 240,100 A 55,55 0 0,1 350,100\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"240\" y1=\"100\" x2=\"350\" y2=\"100\" stroke=\"#2563eb\" stroke-width=\"4\"/><text x=\"295\" y=\"28\" font-size=\"14\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">半圓形的周長</text><text x=\"295\" y=\"128\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">弧長 ＋ 多了這條直徑</text><text x=\"410\" y=\"82\" font-size=\"14\" font-weight=\"800\" fill=\"#b91c1c\" text-anchor=\"middle\">半圓形</text><text x=\"410\" y=\"102\" font-size=\"14\" font-weight=\"800\" fill=\"#b91c1c\" text-anchor=\"middle\">比較長！</text></svg>",
          "caption": "左圖「圓周長的一半」只有紅色弧線；右圖「半圓形的周長」必須繞一整圈，多了一條藍色直徑。"
        },
        {
          "type": "text",
          "text": "第 1 步：「圓周長的一半」只包含上方那一段彎曲的半圓弧長。"
        },
        {
          "type": "eq",
          "expr": "半圓形的周長 ＝ 半圓弧長 ＋ 直徑",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：半圓形周長因為封閉成一個圖形，多了一條直徑的直線邊，所以一定比較長。"
        },
        {
          "type": "answer",
          "text": "答：半圓形的周長"
        }
      ],
      "insight": "凡是問「圖形的周長」，就一定要從起點沿外圍繞「一整圈」回到起點，千萬別漏掉切開後的直線邊（直徑或兩條半徑）。",
      "distractorAnalysis": {
        "C": "把概念記反，誤以為圓周長的一半反而比較長。",
        "D": "不知道半圓就是直徑加上半圓弧，誤以為沒給數字就不能比較。",
        "B": "望文生義，誤以為「半圓形的周長」就是「圓周長的一半」，忘了加直徑。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半圓形的周長 ＝ 直徑 × 3.14 ÷ 2 ＋ 直徑"
      ],
      "conceptCompare": "「弧長」是曲線的長度，「周長」是封閉圖形外圍一圈的總長度；半圓是圓心角 180° 的特殊扇形，周長同樣要加上 2 條半徑（即 1 條直徑）。",
      "examVariations": "段考是非題與計算題最愛考「把圓形紙對摺成半圓後，周長是不是變成原來的一半？」，答案是否，會比一半多出一條直徑。"
    }
  },
  {
    "id": "U06-S3-M-045",
    "legacyId": "u06_m05",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "扇形弧長占比",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "圓心角 90° 的扇形，它的弧長是整個圓周長的幾分之幾？",
    "options": [
      {
        "key": "A",
        "text": "1/2",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "1/3",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "C",
        "text": "1/90",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "1/4",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "90 / 360",
      "expect": "1/4"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解扇形圓心角佔周角 360° 的比例，即等於該扇形弧長佔整圓周長的比例。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"115\" cy=\"75\" r=\"52\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><path d=\"M 115,75 L 115,23 A 52,52 0 0,1 167,75 Z\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"115\" y1=\"75\" x2=\"115\" y2=\"23\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"115\" y1=\"75\" x2=\"167\" y2=\"75\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><path d=\"M 115,23 A 52,52 0 0,1 167,75\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><polyline points=\"115,63 127,63 127,75\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><text x=\"136\" y=\"58\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">90°</text><text x=\"315\" y=\"52\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">整圓一圈 ＝ 360°</text><text x=\"315\" y=\"82\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">90° ÷ 360° ＝ 1/4 圓</text><text x=\"315\" y=\"112\" font-size=\"13\" fill=\"#475569\" text-anchor=\"middle\">弧長剛好佔整圓周長的 1/4</text></svg>",
          "caption": "90° 直角剛好是周角 360° 的 4 等份之一，紅色弧長佔整圓周長的 1/4。"
        },
        {
          "type": "text",
          "text": "第 1 步：整個圓繞一圈的圓心角（周角）是 360°。"
        },
        {
          "type": "eq",
          "expr": "90 ÷ 360 ＝ 90/360 ＝ 1/4",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：圓心角佔整圈的 1/4，所以弧長也是整個圓周長的 1/4。"
        },
        {
          "type": "answer",
          "text": "答：1/4"
        }
      ],
      "insight": "扇形弧長佔圓周長的幾分之幾，只要算「圓心角 ÷ 360°」再約分就可以了。",
      "distractorAnalysis": {
        "A": "對角度沒有換算周角 360°，誤猜成 1/2。",
        "B": "把 360° 除以 90° 的商誤記成 3，寫成 1/3。",
        "C": "直接把圓心角 90 當成分母寫成 1/90，忘記扇形比例的分母是周角 360°。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形佔整圓比例 ＝ 圓心角 ÷ 360°",
        "常見比例：180° ＝ 1/2 圓、120° ＝ 1/3 圓、90° ＝ 1/4 圓、60° ＝ 1/6 圓、45° ＝ 1/8 圓"
      ],
      "conceptCompare": "圓心角 90° 的扇形，「弧長」是圓周長的 1/4，「面積」也是圓面積的 1/4；但整個「扇形周長」因為多了兩條半徑，並不是圓周長的 1/4。",
      "examVariations": "段考常反過來問「1/6 圓扇形的圓心角是幾度？」，用 360° × 1/6 ＝ 60° 即可。"
    }
  },
  {
    "id": "U06-S2-M-046",
    "legacyId": "u06_m06",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長計算與應用",
    "category": "周長反推",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "一個圓的周長是 31.4 公分（圓周率用 3.14），它的直徑是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "5 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "10 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "100 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "D",
        "text": "3.14 公分",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "31.4 / 3.14",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗學生由圓周長反推直徑的能力，並培養對 3.14 乘以 10 的數感以達成快速心算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：利用「直徑 ＝ 圓周長 ÷ 圓周率」列式。"
        },
        {
          "type": "eq",
          "expr": "31.4 ÷ 3.14 ＝ 10",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "31.4",
          "divisor": "3.14",
          "note": "被除數與除數同乘以 100（小數點各右移 2 位），變成 3140 ÷ 314 ＝ 10"
        },
        {
          "type": "text",
          "text": "第 2 步：3.14 的小數點向右移 1 位就是 31.4，所以直徑剛好是 10 公分。"
        },
        {
          "type": "answer",
          "text": "答：10 公分"
        }
      ],
      "insight": "熟記 3.14 常見倍數能一秒心算：直徑 10 ➔ 周長 31.4；直徑 20 ➔ 周長 62.8；直徑 5 ➔ 周長 15.7。",
      "distractorAnalysis": {
        "A": "算出直徑 10 公分後，又除以 2 算成半徑 5 公分，答非所問。",
        "C": "小數除法移動小數點時少補或錯位，把 10 倍誤算成 100 公分。",
        "D": "直接把圓周率 3.14 當成直徑答案。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 圓周長 ÷ 3.14",
        "半徑 ＝ 圓周長 ÷ 3.14 ÷ 2"
      ],
      "conceptCompare": "題目若問「直徑」，除一次 3.14 就結束；若問「半徑」，除完 3.14 後一定要記得再除以 2。",
      "examVariations": "段考常考周長為 62.8、94.2 或 15.7 公分，反推直徑分別是 20、30 與 5 公分。"
    }
  },
  {
    "id": "U06-S2-M-047",
    "legacyId": "u06_m07",
    "unitId": "U06",
    "section": "6-2",
    "sectionName": "圓周長計算與應用",
    "category": "地球繩子",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "一條繩子剛好緊緊繞地球赤道一圈。把繩子加長 6.28 公尺後，均勻撐起離地，繩子離地大約多高？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "不到 1 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      },
      {
        "key": "B",
        "text": "約 1 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "地球太大，無法計算",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "D",
        "text": "約 2 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "6.28 / (2 * 3.14)",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「周長增加量與半徑增加量成正比」，且該差值與原本圓有多大完全無關。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"105\" cy=\"75\" r=\"36\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><circle cx=\"105\" cy=\"75\" r=\"56\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"6,4\"/><line x1=\"105\" y1=\"75\" x2=\"141\" y2=\"75\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"141\" y1=\"75\" x2=\"161\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"105\" y=\"79\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">地球</text><text x=\"151\" y=\"67\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">離地</text><text x=\"315\" y=\"42\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">周長多 6.28 公尺</text><text x=\"315\" y=\"70\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">直徑多：6.28 ÷ 3.14 ＝ 2 公尺</text><text x=\"315\" y=\"98\" font-size=\"14\" font-weight=\"800\" fill=\"#1d4ed8\" text-anchor=\"middle\">半徑多：2 ÷ 2 ＝ 1 公尺</text><text x=\"315\" y=\"124\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">跟原本圓多大完全無關！</text></svg>",
          "caption": "不管內圈是地球還是籃球，只要外圈周長多 6.28 公尺，半徑差（離地高度）固定多 1 公尺。"
        },
        {
          "type": "text",
          "text": "第 1 步：因為圓周長 ＝ 直徑 × 3.14，周長多出 6.28 公尺，代表直徑多出幾公尺。"
        },
        {
          "type": "longdiv",
          "dividend": "6.28",
          "divisor": "3.14",
          "note": "同乘 100 變成 628 ÷ 314 ＝ 2（直徑多出 2 公尺）"
        },
        {
          "type": "eq",
          "expr": "6.28 ÷ 3.14 ÷ 2 ＝ 1",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：直徑多 2 公尺，半徑就多 2 ÷ 2 ＝ 1 公尺，這就是繩子均勻撐起後離地的高度。"
        },
        {
          "type": "answer",
          "text": "答：約 1 公尺"
        }
      ],
      "insight": "圓周長增加量只決定半徑增加量，和原本的圓有多大完全無關！給籃球套繩加長 6.28 公尺，離地也一樣是 1 公尺。",
      "distractorAnalysis": {
        "A": "被「地球很大」的直覺誤導，以為 6.28 公尺攤到整個地球上會小到看不見。",
        "C": "以為沒有給地球赤道原長或半徑就無法算出離地高度。",
        "D": "算出直徑多 2 公尺後直接當答案，忘記四面均勻撐起的高度是「半徑」的增加量（要除以 2）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半徑增加量 ＝ 周長增加量 ÷ 3.14 ÷ 2"
      ],
      "conceptCompare": "這個經典模型和「操場跑道內外圈差」原理完全相同：外圈半徑比內圈多 1 公尺，外圈周長就比內圈多 6.28 公尺。",
      "examVariations": "段考可能改問「把套住籃球的繩子加長 3.14 公尺，離球面多高？」，答案是 3.14 ÷ 3.14 ÷ 2 ＝ 0.5 公尺（50 公分）。"
    }
  },
  {
    "id": "U06-S3-M-048",
    "legacyId": "u06_m08",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "分針路程",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "時鐘的分針長 10 公分，1 小時分針尖端走了多遠？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "62.8 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "31.4 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "10 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "6.28 公分",
        "trapCode": "U06_DECIMAL_SHIFT_ERR"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "10 * 2 * 3.14",
      "expect": "62.8"
    },
    "explanation": {
      "examPurpose": "測驗學生是否知道鐘面指針的長度相當於圓的「半徑」，且分針 1 小時剛好轉完 1 整圈。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"105\" cy=\"75\" r=\"52\" fill=\"#fff7ed\" stroke=\"#dc2626\" stroke-width=\"3\"/><circle cx=\"105\" cy=\"75\" r=\"3.5\" fill=\"#1e293b\"/><line x1=\"105\" y1=\"75\" x2=\"105\" y2=\"23\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"122\" y=\"52\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">分針 10 公分</text><text x=\"122\" y=\"66\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">（就是半徑）</text><text x=\"315\" y=\"48\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">1 小時分針轉一整圈（360°）</text><text x=\"315\" y=\"78\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直徑 ＝ 10 × 2 ＝ 20 公分</text><text x=\"315\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">路程 ＝ 20 × 3.14 ＝ 62.8 公分</text></svg>",
          "caption": "分針固定在鐘面中心旋轉，針長 10 公分就是圓的半徑，1 小時轉完一圈圓周。"
        },
        {
          "type": "text",
          "text": "第 1 步：1 小時分針剛好繞鐘面一整圈，而針長 10 公分是半徑，所以要先乘以 2 算出直徑。"
        },
        {
          "type": "eq",
          "expr": "10 × 2 × 3.14 ＝ 62.8",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：62.8 公分"
        }
      ],
      "insight": "指針長度 ＝ 圓的半徑（不是直徑！），而且分針 1 小時走 1 圈、30 分鐘走半圈、15 分鐘走 1/4 圈。",
      "distractorAnalysis": {
        "C": "以為針長 10 公分就是走過的距離，沒有算出圓周長。",
        "D": "算式少乘了一個 10（或小數點左移一位），誤得 6.28 公分。",
        "B": "誤把分針長 10 公分當作「直徑」，直接算成 10 × 3.14 ＝ 31.4 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "分針尖端路程 ＝ 指針長 × 2 × 3.14 × (經過分鐘數 ÷ 60)"
      ],
      "conceptCompare": "分針走 1 小時是 1 圈（360°）；時針走 1 小時只是從一個數字走到下一個數字，佔 1/12 圈（30°）。",
      "examVariations": "段考常改成「分針長 10 公分，從 2 點走到 2 點 15 分，針尖走了幾公分？」，因為走了 1/4 圈，所以 62.8 × 1/4 ＝ 15.7 公分。"
    }
  },
  {
    "id": "U06-S4-M-049",
    "legacyId": "u06_m09",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "半圓弧切割",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "以線段甲乙為直徑畫一個大半圓弧，再把線段甲乙任意分成兩段，各以這兩段為直徑畫出兩個小半圓弧。大半圓弧的長度和兩個小半圓弧的總長相比，哪一個比較長？",
    "options": [
      {
        "key": "A",
        "text": "大半圓弧比較長",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "兩個小半圓弧比較長",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "一樣長",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "要看分割點在哪裡",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解半圓弧長與直徑成正比，利用乘法分配律看出「分段直徑和 ＝ 總直徑」時弧長總和不變。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><line x1=\"35\" y1=\"115\" x2=\"215\" y2=\"115\" stroke=\"#64748b\" stroke-width=\"2\"/><path d=\"M 35,115 A 90,90 0 0,1 215,115\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3.5\"/><path d=\"M 35,115 A 60,60 0 0,1 155,115\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 155,115 A 30,30 0 0,1 215,115\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><circle cx=\"35\" cy=\"115\" r=\"3.5\" fill=\"#0f172a\"/><circle cx=\"155\" cy=\"115\" r=\"3.5\" fill=\"#2563eb\"/><circle cx=\"215\" cy=\"115\" r=\"3.5\" fill=\"#0f172a\"/><text x=\"35\" y=\"135\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">甲</text><text x=\"155\" y=\"135\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">分割點</text><text x=\"215\" y=\"135\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">乙</text><text x=\"125\" y=\"18\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">大半圓弧</text><text x=\"95\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">左小弧</text><text x=\"185\" y=\"96\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">右小弧</text><text x=\"345\" y=\"52\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">左小直徑 ＋ 右小直徑 ＝ 甲乙</text><text x=\"345\" y=\"82\" font-size=\"14\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">紅弧長 ＝ 兩條藍弧總長</text><text x=\"345\" y=\"110\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">跟分割點在哪裡無關！</text></svg>",
          "caption": "兩條藍色小半圓的直徑合起來剛好等於線段甲乙，所以兩段藍弧加起來和上方紅弧一樣長。"
        },
        {
          "type": "text",
          "text": "第 1 步：半圓弧長 ＝ 直徑 × 3.14 ÷ 2，弧長與直徑成正比。"
        },
        {
          "type": "eq",
          "expr": "(左直徑 ＋ 右直徑) × 3.14 ÷ 2 ＝ 大直徑 × 3.14 ÷ 2",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：不管分割點在哪裡，兩段小直徑加起來永遠等於線段甲乙的總長，所以兩條小半圓弧合起來剛好等於大半圓弧。"
        },
        {
          "type": "answer",
          "text": "答：一樣長"
        }
      ],
      "insight": "只要幾個半圓的直徑緊緊排成同一條直線，它們的半圓弧長總和就等於「以總長度為直徑」的大半圓弧長。",
      "distractorAnalysis": {
        "A": "看圖覺得大圓弧彎得比較高、跨度大，直覺誤選大半圓弧較長。",
        "B": "覺得兩段小弧彎來彎去有兩次轉彎，直覺誤以為波浪形比較長。",
        "D": "不知道乘法對加法的分配律會把分割點位置抵銷掉，誤以為不同切法總長會變。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "共線半圓弧總長 ＝ 總直徑 × 3.14 ÷ 2（不管切幾段都一樣）"
      ],
      "conceptCompare": "注意這題比的是「弧長」，兩者一樣長；若題目改問兩條小半圓與大半圓夾出的「彎月形面積」，因為大圓面積遠大於兩小圓面積和，面積就不相等。",
      "examVariations": "常見進階題：螞蟻甲走上面一條大半圓弧，螞蟻乙走下面三個大小不一的小半圓弧，同時出發誰先到乙點？答案是同時到達（路程相等）。"
    }
  },
  {
    "id": "U06-S3-M-050",
    "legacyId": "u06_m10",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "扇形周長陷阱",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "半徑 10 公分的半圓形，它的周長是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "31.4 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "B",
        "text": "41.4 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "51.4 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "62.8 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(10 * 2 * 3.14) / 2 + 10 * 2",
      "expect": "51.4"
    },
    "explanation": {
      "examPurpose": "測驗學生計算半圓周長時，能否同時避開「忘記加上底邊直徑」與「只加了一條半徑」兩大陷阱。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><path d=\"M 45,105 A 65,65 0 0,1 175,105 Z\" fill=\"#eff6ff\" stroke=\"none\"/><path d=\"M 45,105 A 65,65 0 0,1 175,105\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"45\" y1=\"105\" x2=\"175\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"4\"/><circle cx=\"110\" cy=\"105\" r=\"4\" fill=\"#1e3a8a\"/><text x=\"110\" y=\"30\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">半圓弧 31.4 公分</text><text x=\"78\" y=\"126\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">半徑 10</text><text x=\"142\" y=\"126\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">半徑 10</text><text x=\"325\" y=\"48\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">弧長 ＝ 20 × 3.14 ÷ 2 ＝ 31.4</text><text x=\"325\" y=\"78\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">底邊直徑 ＝ 10 × 2 ＝ 20</text><text x=\"325\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">周長 ＝ 31.4 ＋ 20 ＝ 51.4 公分</text></svg>",
          "caption": "半圓形周長包含紅色半圓弧（31.4 公分）與藍色直徑（兩條半徑共 20 公分）。"
        },
        {
          "type": "text",
          "text": "第 1 步：半徑 10 公分 ➔ 直徑是 20 公分，先算出上半部的半圓弧長。"
        },
        {
          "type": "eq",
          "expr": "20 × 3.14 ÷ 2 ＝ 31.4",
          "unit": "公分（弧長）"
        },
        {
          "type": "text",
          "text": "第 2 步：加上底邊的 1 條直徑（即 2 條半徑，共 20 公分），才是完整半圓形的周長。"
        },
        {
          "type": "eq",
          "expr": "31.4 ＋ 20 ＝ 51.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：51.4 公分"
        }
      ],
      "insight": "半圓形周長一定要記住「弧長 ＋ 2 條半徑（直徑）」，只加一條半徑算成 41.4 是經典半錯陷阱！",
      "distractorAnalysis": {
        "A": "只算出半圓弧長 31.4 公分，完全忘記加上底邊直徑。",
        "B": "記得要加直線邊，卻只加了一條半徑 10 公分（31.4 ＋ 10 ＝ 41.4），漏掉另一條半徑。",
        "D": "直接算出整個圓的周長 62.8 公分，沒有除以 2 也沒加直徑。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2",
        "半圓周長 ＝ 半圓弧長 ＋ 直徑"
      ],
      "conceptCompare": "半徑 10 的半圓周長是 51.4，而半徑 10 的整圓周長是 62.8；半圓周長是整圓周長的一半再多出 20 公分。",
      "examVariations": "段考常把題目倒過來考：「一個半圓形的周長是 51.4 公分，請問它的半徑是多少公分？」，可利用「周長 ＝ 半徑 × (3.14 ＋ 2)」➔ 51.4 ÷ 5.14 ＝ 10 公分。"
    }
  },
  {
    "id": "U06-S3-M-051",
    "legacyId": "u06_m11",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "弧長等於半徑",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "當一個扇形的弧長剛好等於它的半徑時，圓心角大約是幾度？",
    "options": [
      {
        "key": "A",
        "text": "約 57°",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "約 30°",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "約 90°",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "剛好 60°",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能用「整圈周長約為半徑的 6.28 倍」推算 1 個半徑弧長所對應的圓心角，並破除正三角形 60° 的幾何錯覺。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><path d=\"M 85,120 L 165,120 A 80,80 0 0,0 128.5,52.9 Z\" fill=\"#fef2f2\" stroke=\"none\"/><line x1=\"85\" y1=\"120\" x2=\"165\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"85\" y1=\"120\" x2=\"128.5\" y2=\"52.9\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"165\" y1=\"120\" x2=\"128.5\" y2=\"52.9\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><path d=\"M 165,120 A 80,80 0 0,0 128.5,52.9\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"115\" y=\"107\" font-size=\"13\" font-weight=\"800\" fill=\"#1d4ed8\">約 57°</text><text x=\"166\" y=\"78\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">弧長 ＝ 半徑</text><text x=\"320\" y=\"48\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">整圈周長 ≈ 6.28 個半徑</text><text x=\"320\" y=\"78\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">360° ÷ 6.28 ≈ 57°</text><text x=\"320\" y=\"108\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">因為彎曲的弧比直線弦長一點，</text><text x=\"320\" y=\"126\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">所以角度會比正三角形 60° 略小！</text></svg>",
          "caption": "整圈圓周大約有 6.28 個半徑長，把 360° 平分成 6.28 份，每份約 57°，比正三角形的 60° 小一點。"
        },
        {
          "type": "text",
          "text": "第 1 步：整個圓的周長 ＝ 2 × 3.14 × 半徑 ＝ 6.28 × 半徑，也就是整圈共有 6.28 個半徑那麼長。"
        },
        {
          "type": "longdiv",
          "dividend": "360",
          "divisor": "6.28",
          "note": "將 360° 平分給約 6.28 個半徑長：36000 ÷ 628 ≈ 57.3，約為 57°"
        },
        {
          "type": "eq",
          "expr": "360 ÷ 6.28 ≈ 57",
          "unit": "度"
        },
        {
          "type": "answer",
          "text": "答：約 57°"
        }
      ],
      "insight": "因為圓周率 3.14 比 3 大一點，整圓有 6.28 個半徑（比 6 多），所以 1 個半徑長的圓弧圓心角比 60° 小一點，大約是 57°。",
      "distractorAnalysis": {
        "C": "隨意把弧長等於半徑的扇形誤猜成直角扇形 90°。",
        "D": "誤把兩端點連成的「直線段」（正三角形 60°）當成彎曲弧長等於半徑，忽略彎曲的弧比直線更長。",
        "B": "誤以為 360° 要除以約 12，估算錯誤選成約 30°。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "整圓周長 ≈ 6.28 × 半徑",
        "弧長等於半徑的圓心角 ＝ 360° ÷ 6.28 ≈ 57.3°"
      ],
      "conceptCompare": "把扇形兩條半徑的頂端連成一條直線，當「直線長度 ＝ 半徑」時恰好圍成正三角形（60°）；因為圓弧是彎的、比直線更長，所以弧長要縮短到等於半徑，圓心角就必須比 60° 稍微小一點（約 57°）。",
      "examVariations": "段考常見思考：整個圓周大約有 6.28 條半徑那麼長，只要把 360° 平分給 6.28 段，就知道 1 條半徑長的圓弧大約是 360° ÷ 6.28 ≈ 57°！"
    }
  },
  {
    "id": "U06-S4-M-052",
    "legacyId": "u06_m12",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "方與圓",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "正方形的邊長等於一個圓的直徑，這個正方形周長和圓周長相比，哪一個比較長？",
    "options": [
      {
        "key": "A",
        "text": "圓比較長",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "正方形比較長",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "一樣長",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "無法比較",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生能否用「直徑倍數」直觀比較外切正方形周長（4 倍直徑）與圓周長（約 3.14 倍直徑）。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"55\" y=\"25\" width=\"100\" height=\"100\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"105\" cy=\"75\" r=\"50\" fill=\"#fef2f2\" fill-opacity=\"0.65\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"55\" y1=\"75\" x2=\"155\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/><text x=\"105\" y=\"71\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">直徑 ＝ 邊長</text><text x=\"315\" y=\"48\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">正方形周長 ＝ 4 × 直徑</text><text x=\"315\" y=\"78\" font-size=\"14\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">圓周長 ≈ 3.14 × 直徑</text><text x=\"315\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">4 ＞ 3.14 ➔ 正方形比較長</text></svg>",
          "caption": "圓剛好被包在正方形裡面，正方形周長是 4 個直徑，圓周長大約只有 3.14 個直徑。"
        },
        {
          "type": "text",
          "text": "第 1 步：把正方形的邊長（也就是圓的直徑）當作 1 份。"
        },
        {
          "type": "eq",
          "expr": "正方形周長 ＝ 4 × 直徑，圓周長 ≈ 3.14 × 直徑",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：因為 4 大於 3.14，而且圓剛好被包在正方形裡面，所以正方形的周長比較長。"
        },
        {
          "type": "answer",
          "text": "答：正方形比較長"
        }
      ],
      "insight": "正方形周長是直徑的 4 倍，圓周長只有直徑的 3.14 倍；而且正方形把圓完全包在裡面，外框一定比裡面的圓長！",
      "distractorAnalysis": {
        "C": "以為正方形剛好緊貼著圓，兩者的周長就會一樣長。",
        "D": "沒給具體邊長數字就以為不能比較，忽略兩者都能用「直徑的幾倍」直接比出大小。",
        "A": "誤以為圓形的彎曲弧線比較長，或只看局部形狀誤判圓較長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "外切正方形周長 ＝ 4 × 直徑",
        "圓周長 ≈ 3.14 × 直徑（約為正方形周長的 3.14 ÷ 4 ＝ 78.5%）"
      ],
      "conceptCompare": "這個概念也能用來估計圓周率：圓被包在正方形裡面，所以圓周率一定小於 4；又把正六邊形包在圓裡面，所以圓周率一定大於 3，也就是 3 ＜ 圓周率 ＜ 4。",
      "examVariations": "若題目給一條固定長度的繩子（周長相等），改問「圍成正方形和圍成圓形，哪一個面積比較大？」，答案反而是圓形的面積比較大！"
    }
  },
  {
    "id": "U06-S4-M-053",
    "legacyId": "u06_m13",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "跑道內外道",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "操場跑道兩端是半圓，中間是兩條等長的直線。外圈跑道的半徑比內圈多 1 公尺，跑一圈外圈比內圈多跑多少公尺？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "6.28 公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "3.14 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "2 公尺",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "依直線跑道長短而定",
        "trapCode": "U06_TRACK_INNER_OUTER_ERR"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "1 * 2 * 3.14",
      "expect": "6.28"
    },
    "explanation": {
      "examPurpose": "測驗學生是否看穿跑道直線段互相抵銷，只須將兩端半圓合成一個圓並利用半徑差算出起跑差距。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><path d=\"M 85,29 L 175,29 A 46,46 0 0,1 175,121 L 85,121 A 46,46 0 0,1 85,29 Z\" fill=\"#fef2f2\" stroke=\"none\"/><path d=\"M 85,45 L 175,45 A 30,30 0 0,1 175,105 L 85,105 A 30,30 0 0,1 85,45 Z\" fill=\"#ffffff\" stroke=\"none\"/><line x1=\"85\" y1=\"29\" x2=\"175\" y2=\"29\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"85\" y1=\"45\" x2=\"175\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"85\" y1=\"105\" x2=\"175\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"85\" y1=\"121\" x2=\"175\" y2=\"121\" stroke=\"#2563eb\" stroke-width=\"3\"/><path d=\"M 85,29 A 46,46 0 0,0 85,121 M 175,29 A 46,46 0 0,1 175,121\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3.5\"/><path d=\"M 85,45 A 30,30 0 0,0 85,105 M 175,45 A 30,30 0 0,1 175,105\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"2.5\"/><text x=\"130\" y=\"79\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">藍色直線段一樣長</text><text x=\"335\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直線部分內外完全相同</text><text x=\"335\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">兩端彎道合成 1 個整圓</text><text x=\"335\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">多出：1 × 2 × 3.14 ＝ 6.28 公尺</text></svg>",
          "caption": "上下藍色直線長度相等不影響差距，兩端紅色彎道合起來是一個整圓，半徑多 1 公尺就多 6.28 公尺。"
        },
        {
          "type": "text",
          "text": "第 1 步：跑道上下兩條直線段，內圈與外圈長度完全一樣，跑一圈的差距全部來自兩端的半圓。"
        },
        {
          "type": "text",
          "text": "第 2 步：左右兩個半圓合起來剛好是 1 個整圓。外圈半徑多 1 公尺，直徑就多 2 公尺。"
        },
        {
          "type": "eq",
          "expr": "1 × 2 × 3.14 ＝ 6.28",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：6.28 公尺"
        }
      ],
      "insight": "跑道內外圈差距跟地球套繩是完全一樣的原理：直線會抵銷，只看「道寬（半徑差）× 2 × 3.14」。",
      "distractorAnalysis": {
        "B": "忘記半徑差 1 公尺換算成直徑差要乘以 2，誤算成 1 × 3.14 ＝ 3.14 公尺。",
        "D": "不知道直線段內外圈完全等長，誤以為操場越長差距就會越大。",
        "C": "只算了直徑差 1 × 2 ＝ 2 公尺，忘記彎道要乘以圓周率 3.14。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "跑道相鄰兩圈長度差 ＝ 2 × 道寬 × 3.14"
      ],
      "conceptCompare": "正式田徑場跑 400 公尺一圈時，外側跑道的起跑線都要往前錯開 2 × 道寬 × 3.14 公尺，這樣大家跑回終點線的距離才會公平相等。",
      "examVariations": "段考常考「標準跑道每道寬 1.25 公尺，第 3 道比第 1 道跑一圈多幾公尺？」，先算道寬差 2 道 ＝ 2.5 公尺，再算 2 × 2.5 × 3.14 ＝ 15.7 公尺。"
    }
  },
  {
    "id": "U06-S4-M-054",
    "legacyId": "u06_m14",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "兩圓綑綁",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "兩個半徑 4 公分的圓並排相切，用繩子緊緊綑一圈，繩長是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "50.24 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      },
      {
        "key": "B",
        "text": "25.12 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "41.12 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "33.12 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "4 * 2 * 2 + 4 * 2 * 3.14",
      "expect": "41.12"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把綑綁繩長拆解為「2 條等於直徑的外公切線直線段」加上「左右兩側合為 1 個整圓的弧長」。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"85\" cy=\"75\" r=\"32\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"149\" cy=\"75\" r=\"32\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"85\" y1=\"43\" x2=\"149\" y2=\"43\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"85\" y1=\"107\" x2=\"149\" y2=\"107\" stroke=\"#2563eb\" stroke-width=\"4\"/><path d=\"M 85,43 A 32,32 0 0,0 85,107\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><path d=\"M 149,43 A 32,32 0 0,1 149,107\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"85\" y1=\"75\" x2=\"149\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><circle cx=\"85\" cy=\"75\" r=\"3\" fill=\"#334155\"/><circle cx=\"149\" cy=\"75\" r=\"3\" fill=\"#334155\"/><text x=\"117\" y=\"33\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直徑 8</text><text x=\"117\" y=\"126\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">直徑 8</text><text x=\"330\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">藍線 2 段：8 × 2 ＝ 16 公分</text><text x=\"330\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">左右紅弧合成 1 整圓：25.12 公分</text><text x=\"330\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">總繩長 ＝ 16 ＋ 25.12 ＝ 41.12 公分</text></svg>",
          "caption": "上下兩條藍色直線段各長 8 公分（等於兩圓心距離），左右兩側紅色半圓弧合為 1 個整圓。"
        },
        {
          "type": "text",
          "text": "第 1 步：半徑 4 公分 ➔ 每個圓的直徑是 8 公分。上下兩條緊繃的直線段，長度都等於兩圓心距離（1 個直徑）。"
        },
        {
          "type": "eq",
          "expr": "8 × 2 ＝ 16",
          "unit": "公分（直線段）"
        },
        {
          "type": "text",
          "text": "第 2 步：左右兩端各貼著半個圓周，合起來剛好是 1 個直徑 8 公分的完整圓周長。"
        },
        {
          "type": "eq",
          "expr": "8 × 3.14 ＝ 25.12",
          "unit": "公分（圓弧總和）"
        },
        {
          "type": "eq",
          "expr": "16 ＋ 25.12 ＝ 41.12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：41.12 公分"
        }
      ],
      "insight": "圓柱綑綁核心模型：總繩長 ＝ 直線切線段總和 ＋ 1 個完整圓周長（不管綁幾個圓，所有轉角弧加起來永遠是 1 個圓）。",
      "distractorAnalysis": {
        "A": "沒有拆開曲線與直線段，直接把兩個完整圓的周長 25.12 × 2 加起來算成 50.24 公分。",
        "D": "在計算直線段時誤把半徑 4 當直徑使用，只加了 4 × 2 ＝ 8 公分，算成 33.12 公分。",
        "B": "只算出 1 個圓周長 25.12 公分，完全漏掉上下兩條直線段。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "2 個等圓綑綁繩長 ＝ 2 × 直徑 ＋ 1 × 圓周長"
      ],
      "conceptCompare": "兩圓並排綑綁時，繩子在兩個圓中間是拉直的，不會繞進內側相切處，所以絕對不是兩個圓周長相加。",
      "examVariations": "若改成「3 個半徑 4 公分的圓橫排成一直線綑一圈」，左右仍是 2 個半圓合成 1 整圓（25.12），但上下直線各跨過 2 倍圓心距（16 × 2 ＝ 32），總長為 57.12 公分。"
    }
  },
  {
    "id": "U06-S4-M-055",
    "legacyId": "u06_m15",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "三圓綑綁",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "三個半徑 4 公分的圓兩兩相切（排成三角形），用繩子緊緊綑一圈，繩長是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "49.12 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "37.12 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "25.12 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "75.36 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "4 * 2 * 3 + 4 * 2 * 3.14",
      "expect": "49.12"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「凸多邊形外角和為 360°」的幾何直覺：三個圓的轉角弧各 120°，合起來剛好是一整個圓。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"110\" cy=\"54\" r=\"24\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"95.6\" r=\"24\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"134\" cy=\"95.6\" r=\"24\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"119.6\" x2=\"134\" y2=\"119.6\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"65.2\" y1=\"83.6\" x2=\"89.2\" y2=\"42\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"130.8\" y1=\"42\" x2=\"154.8\" y2=\"83.6\" stroke=\"#2563eb\" stroke-width=\"4\"/><path d=\"M 89.2,42 A 24,24 0 0,1 130.8,42\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><path d=\"M 154.8,83.6 A 24,24 0 0,1 134,119.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><path d=\"M 86,119.6 A 24,24 0 0,1 65.2,83.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"330\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">藍線 3 段：8 × 3 ＝ 24 公分</text><text x=\"330\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">3 個 120° 紅弧 ＝ 1 整圓 25.12</text><text x=\"330\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">總繩長 ＝ 24 ＋ 25.12 ＝ 49.12 公分</text></svg>",
          "caption": "三角形排列共有 3 條藍色直線段（各 8 公分），以及 3 段各 120° 的紅色轉角弧（剛好合成 1 個整圓）。"
        },
        {
          "type": "text",
          "text": "第 1 步：半徑 4 公分 ➔ 直徑 8 公分。三邊共有 3 條直線段，每條都等於兩圓心距離 8 公分。"
        },
        {
          "type": "eq",
          "expr": "8 × 3 ＝ 24",
          "unit": "公分（直線段）"
        },
        {
          "type": "text",
          "text": "第 2 步：沿著繩子走一圈剛好轉向 360°，所以 3 個轉角弧合起來正好等於 1 個完整圓周長 25.12 公分。"
        },
        {
          "type": "eq",
          "expr": "24 ＋ 8 × 3.14 ＝ 49.12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：49.12 公分"
        }
      ],
      "insight": "不管綁成三角形還是幾邊形，只要繩子繞一整圈回到原方向，所有「轉彎圓弧」合起來永遠剛好等於 1 個完整圓周！",
      "distractorAnalysis": {
        "B": "算直線段時誤把半徑 4 當成圓心距，只加上 4 × 3 ＝ 12，得 37.12 公分。",
        "D": "誤把三個圓各自當成完整圓周直接加總，算成 25.12 × 3 ＝ 75.36 公分。",
        "C": "只算了轉角弧合成的 1 個圓周長 25.12 公分，漏掉 3 條直線切線段。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "3 個等圓三角形綑綁繩長 ＝ 3 × 直徑 ＋ 1 × 圓周長"
      ],
      "conceptCompare": "每個轉角處，繩子轉了 120°（1/3 圓），3 個 120° 剛好等於 360°（1 整圓），千萬不要誤以為每個角都貼了半圓（180°）。",
      "examVariations": "段考常把水壺或飲料罐改成「直徑 8 公分」（要注意看清題目給的是半徑還是直徑！），若直徑 8 公分，答案一樣是 24 ＋ 25.12 ＝ 49.12 公分。"
    }
  },
  {
    "id": "U06-S4-M-056",
    "legacyId": "u06_m16",
    "unitId": "U06",
    "section": "6-4",
    "sectionName": "複合圖形周長",
    "category": "四圓綑綁",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "四個半徑 5 公分的圓排成 2 × 2 正方形，用繩子緊緊綑一圈，繩長是多少公分？（圓周率用 3.14）",
    "options": [
      {
        "key": "A",
        "text": "62.8 公分",
        "trapCode": "U06_ROPE_TANGENT_MISS"
      },
      {
        "key": "B",
        "text": "40 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "51.4 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "71.4 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "5 * 2 * 4 + 5 * 2 * 3.14",
      "expect": "71.4"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能類推四圓正方形排列的綑綁繩長公式：4 條直徑切線段加上 4 個 1/4 圓角弧（1 整圓）。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"86\" cy=\"51\" r=\"24\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"134\" cy=\"51\" r=\"24\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"99\" r=\"24\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"134\" cy=\"99\" r=\"24\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"27\" x2=\"134\" y2=\"27\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"158\" y1=\"51\" x2=\"158\" y2=\"99\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"134\" y1=\"123\" x2=\"86\" y2=\"123\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"62\" y1=\"99\" x2=\"62\" y2=\"51\" stroke=\"#2563eb\" stroke-width=\"4\"/><path d=\"M 134,27 A 24,24 0 0,1 158,51\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><path d=\"M 158,99 A 24,24 0 0,1 134,123\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><path d=\"M 86,123 A 24,24 0 0,1 62,99\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><path d=\"M 62,51 A 24,24 0 0,1 86,27\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"330\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">藍線 4 段：10 × 4 ＝ 40 公分</text><text x=\"330\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">4 個 90° 紅弧 ＝ 1 整圓 31.4</text><text x=\"330\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">總繩長 ＝ 40 ＋ 31.4 ＝ 71.4 公分</text></svg>",
          "caption": "正方形外圍有 4 條各 10 公分的藍色直線段，以及四個角落各 90° 的紅色 1/4 圓弧（合計 1 整圓）。"
        },
        {
          "type": "text",
          "text": "第 1 步：半徑 5 公分 ➔ 直徑 10 公分。四個邊各有 1 條連接相鄰圓切點的直線段。"
        },
        {
          "type": "eq",
          "expr": "10 × 4 ＝ 40",
          "unit": "公分（直線段）"
        },
        {
          "type": "text",
          "text": "第 2 步：四個角落各有 1 個 90°（1/4 圓）的圓弧，合起來剛好是 1 個完整圓周長 31.4 公分。"
        },
        {
          "type": "eq",
          "expr": "40 ＋ 31.4 ＝ 71.4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：71.4 公分"
        }
      ],
      "insight": "繞任何凸多邊形排列的圓柱一圈，圓弧加總永遠是 1 個圓周長（360°），差別只在「直線切線段一共有幾條直徑」。",
      "distractorAnalysis": {
        "A": "沒有分開算直線段，或誤以為四個轉角各有半圓（共 2 個整圓），算出 31.4 × 2 ＝ 62.8 公分。",
        "C": "直線段誤用半徑 5 × 4 ＝ 20 計算（實際應為直徑 10 × 4 ＝ 40），算成 20 ＋ 31.4 ＝ 51.4 公分。",
        "B": "只算了四條直線段 40 公分，完全漏掉四個角落的圓弧長度。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "4 個等圓正方形綑綁繩長 ＝ 4 × 直徑 ＋ 1 × 圓周長"
      ],
      "conceptCompare": "觀察連續三題：2 個圓綑綁 ＝ 2 直徑 ＋ 1 圓（51.4）；3 個圓 ＝ 3 直徑 ＋ 1 圓（61.4）；4 個圓 ＝ 4 直徑 ＋ 1 圓（71.4）。圓周部分始終只有「1 個圓」，不會變多！",
      "examVariations": "段考進階題常考「6 個圓排成 2 × 3 矩形」和「6 個圓排成正三角形」比較哪個更省繩：雖然外框線段數量都對應 6 個直徑寬度，其實外圍圓心連線周長都是 6 個直徑，總繩長竟然一樣長！"
    }
  },
  {
    "id": "U06-RV-M-057",
    "legacyId": "u06_m17",
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合複習",
    "category": "硬幣滾動",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "一枚硬幣沿著另一枚「同樣大小」的固定硬幣外緣無滑動滾一圈回到原處，滾動的硬幣自己轉了幾圈？",
    "options": [
      {
        "key": "A",
        "text": "1 圈",
        "trapCode": "U06_ROLLER_TURN_ERR"
      },
      {
        "key": "B",
        "text": "2 圈",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3.14 圈",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "D",
        "text": "4 圈",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(1 + 1) / 1",
      "expect": "2"
    },
    "explanation": {
      "examPurpose": "測驗學生能否克服「接觸邊長等於 1 倍周長」的直覺陷阱，改用「圓心走過的軌跡路徑長」正確算出硬幣自轉圈數。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"105\" cy=\"75\" r=\"52\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><circle cx=\"105\" cy=\"75\" r=\"26\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2.5\"/><circle cx=\"157\" cy=\"75\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2.5\"/><circle cx=\"105\" cy=\"75\" r=\"3\" fill=\"#0f172a\"/><circle cx=\"157\" cy=\"75\" r=\"3\" fill=\"#dc2626\"/><line x1=\"105\" y1=\"75\" x2=\"157\" y2=\"75\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"105\" y=\"79\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">固定</text><text x=\"157\" y=\"79\" font-size=\"11\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">滾動</text><text x=\"105\" y=\"142\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">紅虛線：圓心走的圓（半徑 2 倍）</text><text x=\"335\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">圓心路徑半徑 ＝ 1 ＋ 1 ＝ 2 份</text><text x=\"335\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">圓心走過的路程 ＝ 2 倍硬幣周長</text><text x=\"335\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">自轉圈數 ＝ 2 ÷ 1 ＝ 2 圈</text></svg>",
          "caption": "滾動硬幣的圓心繞著一個半徑為「2 個硬幣半徑」的紅色大圓圈移動，所以自轉了 2 圈。"
        },
        {
          "type": "text",
          "text": "第 1 步：不要只看硬幣貼著滾過的邊緣長度，要看「滾動硬幣的圓心」一共走了多遠！"
        },
        {
          "type": "text",
          "text": "第 2 步：滾動硬幣圓心到固定硬幣圓心的距離 ＝ 1 個半徑 ＋ 1 個半徑 ＝ 2 倍硬幣半徑，所以圓心軌跡的周長是硬幣自身周長的 2 倍。"
        },
        {
          "type": "eq",
          "expr": "(1 ＋ 1) ÷ 1 ＝ 2",
          "unit": "圈"
        },
        {
          "type": "answer",
          "text": "答：2 圈"
        }
      ],
      "insight": "硬幣外滾秘訣（AMC 經典悖論）：「自轉圈數 ＝ 圓心走過的總距離 ÷ 滾動硬幣自己的周長」，多出來的那 1 圈是「繞著大圓公轉一圈」所帶來的！",
      "distractorAnalysis": {
        "A": "經典直覺陷阱：以為兩枚硬幣周長一樣，邊緣接觸長度相等就只轉了 1 圈，忽略硬幣本身也在繞著中心公轉。",
        "C": "把圓周率 3.14 誤套進圈數中。",
        "D": "在計算時重複乘了 2 倍，誤算成 4 圈。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "沿圓形外側滾一圈的自轉圈數 ＝ (固定圓半徑 ÷ 滾動圓半徑) ＋ 1"
      ],
      "conceptCompare": "如果硬幣是在「平坦直線」上滾動一個圓周長，硬幣只會自轉 1 圈；但在圓的「外側」繞一圈時，路徑是彎的且圓心多繞了 360°，因此必定多出 1 圈變成 2 圈。",
      "examVariations": "若反過來問「小圓在 3 倍半徑的大圓內側貼著滾一圈」，圓心半徑變成 3 − 1 ＝ 2 份，自轉圈數就會變成 3 − 1 ＝ 2 圈。"
    }
  },
  {
    "id": "U06-S3-M-058",
    "legacyId": "u06_m18",
    "unitId": "U06",
    "section": "6-3",
    "sectionName": "扇形弧長與周長",
    "category": "時針分針路程",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "鐘面上的時針長 6 公分、分針長 10 公分。在 12 小時內，時針尖端和分針尖端走過的路程比是多少？",
    "options": [
      {
        "key": "A",
        "text": "1：12",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "B",
        "text": "3：5",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "5：3",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1：20",
        "trapCode": null
      }
    ],
    "answer": "D",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "(6 * 1) / (10 * 12)",
      "expect": "1/20"
    },
    "explanation": {
      "examPurpose": "測驗學生能否同時整合「針長比（半徑比）」與「12 小時內的旋轉圈數比」，用複合比例心算求出路程比。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先確定 12 小時內兩根指針各轉幾圈：時針剛好轉 1 圈，分針每小時轉 1 圈、12 小時共轉 12 圈。"
        },
        {
          "type": "text",
          "text": "第 2 步：因為路程 ＝ 半徑 × 2 × 3.14 × 圈數，兩邊都有「2 × 3.14」，比的時候可以直接約掉，只比「針長 × 圈數」。"
        },
        {
          "type": "eq",
          "expr": "(6 × 1)：(10 × 12) ＝ 6：120 ＝ 1：20",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：1：20"
        }
      ],
      "insight": "路程比 ＝ 半徑比 × 圈數比！比值的題目不需要真的乘出 3.14，先把共同的 2 × 3.14 約掉就能一秒心算。",
      "distractorAnalysis": {
        "A": "只考慮了 12 小時兩針轉的圈數比 1：12，忘記時針和分針的長度（半徑）並不相同。",
        "B": "只比了兩根指針的長度比 6：10 ＝ 3：5，完全忘記分針轉了 12 圈而時針只轉 1 圈。",
        "C": "只算長度比又把前後項寫反成 5：3。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "指針尖端路程比 ＝ (時針長 × 時針圈數)：(分針長 × 分針圈數)"
      ],
      "conceptCompare": "注意這題算的是兩針經過「12 小時」的路程；若改成「24 小時（一天）」，時針轉 2 圈、分針轉 24 圈，圈數比依然是 1：12，所以路程比還是 1：20。",
      "examVariations": "若問題改成「6 小時內，時針尖與分針尖的路程比」，時針轉 1/2 圈、分針轉 6 圈，(6 × 1/2)：(10 × 6) ＝ 3：60 ＝ 1：20，結果仍然相同。"
    }
  },
  {
    "id": "U06-S1-M-059",
    "legacyId": "u06_m19",
    "unitId": "U06",
    "section": "6-1",
    "sectionName": "認識圓周率",
    "category": "圓周率大於 3",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "為什麼我們在數學上可以確定圓周率一定比 3 大？",
    "options": [
      {
        "key": "A",
        "text": "用尺量了很多圓發現都是這樣",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "B",
        "text": "因為課本寫 3.14 比 3 大",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "C",
        "text": "圓內畫正六邊形，周長 ＝ 3 個直徑，而圓周比它長",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "圓外切正方形的周長是 4 個直徑，所以圓周率剛好等於 3",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解阿基米德「圓內接正六邊形」夾擠證明圓周率大於 3 的幾何推理，而非背誦結論。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"105\" cy=\"75\" r=\"52\" fill=\"#fef2f2\" fill-opacity=\"0.5\" stroke=\"#dc2626\" stroke-width=\"3\"/><polygon points=\"157,75 131,120 79,120 53,75 79,30 131,30\" fill=\"#eff6ff\" fill-opacity=\"0.7\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"53\" y1=\"75\" x2=\"157\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"79\" y1=\"30\" x2=\"131\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"131\" y1=\"30\" x2=\"79\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><text x=\"105\" y=\"21\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">每邊 ＝ 半徑</text><text x=\"330\" y=\"46\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">正六邊形由 6 個正三角形組成</text><text x=\"330\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">六邊形周長 ＝ 6 半徑 ＝ 3 直徑</text><text x=\"330\" y=\"106\" font-size=\"14\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">紅圓周比藍線長 ➔ 圓周率 ＞ 3</text></svg>",
          "caption": "圓內接正六邊形可以切成 6 個正三角形，6 條邊長共 6 個半徑（等於 3 個直徑），而外側圓弧一定比直線邊更長。"
        },
        {
          "type": "text",
          "text": "第 1 步：在圓裡面畫一個頂點剛好貼在圓周上的正六邊形，連接圓心與 6 個頂點，會分成 6 個一模一樣的正三角形。"
        },
        {
          "type": "eq",
          "expr": "正六邊形周長 ＝ 6 × 半徑 ＝ 3 × 直徑",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：兩點之間直線段最短，每一段圓弧都比正六邊形的直線邊更長，所以圓周長一定大於 3 個直徑，也就是圓周率 ＞ 3。"
        },
        {
          "type": "answer",
          "text": "答：圓內畫正六邊形，周長 ＝ 3 個直徑，而圓周比它長"
        }
      ],
      "insight": "阿基米德的經典想法：用「圓內接正六邊形（3 倍直徑）」從裡面撐住圓，再用「外切正方形（4 倍直徑）」從外面包住圓，證明 3 ＜ 圓周率 ＜ 4。",
      "distractorAnalysis": {
        "B": "這是用已經知道的課本近似值「3.14」來解釋，屬於倒果為因，不是數學證明。",
        "D": "正方形周長 4 個直徑只能說明圓周率小於 4，不能推論圓周率等於 3。",
        "A": "實測只能觀察有限幾個圓的近似結果，無法在邏輯上嚴格確定所有圓都一定成立。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓內接正六邊形周長 ＝ 6 × 半徑 ＝ 3 × 直徑",
        "內接正六邊形周長 ＜ 圓周長 ＜ 外切正方形周長（3 ＜ 圓周率 ＜ 4）"
      ],
      "conceptCompare": "當內接正多邊形的邊數從 6 邊一直增加到 12 邊、24 邊、96 邊時，它的周長會越來越貼近圓周長，這就是古人用來把圓周率算到越來越精準的方法。",
      "examVariations": "段考素養題常考「比較圓內接正六邊形周長、圓周長、圓外切正方形周長的大小關係」，由小到大依序是 3 倍直徑 ＜ 約 3.14 倍直徑 ＜ 4 倍直徑。"
    }
  },
  {
    "id": "U06-RV-M-060",
    "legacyId": "u06_m20",
    "unitId": "U06",
    "section": "REVIEW",
    "sectionName": "單元綜合複習",
    "category": "大小硬幣滾動",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "一枚小硬幣沿著半徑是它「2 倍」的固定大硬幣外緣無滑動滾一圈回到原處，滾動的小硬幣自己轉了幾圈？",
    "options": [
      {
        "key": "A",
        "text": "3 圈",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2 圈",
        "trapCode": "U06_ROLLER_TURN_ERR"
      },
      {
        "key": "C",
        "text": "4 圈",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "1 圈",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(2 + 1) / 1",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "測驗學生能否將「圓心軌跡半徑法」推廣至大小不等的兩圓外切滾動問題，避開只算 2 倍周長的常見失誤。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"100\" cy=\"75\" r=\"60\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/><circle cx=\"100\" cy=\"75\" r=\"40\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2.5\"/><circle cx=\"160\" cy=\"75\" r=\"20\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2.5\"/><circle cx=\"100\" cy=\"75\" r=\"3\" fill=\"#0f172a\"/><circle cx=\"160\" cy=\"75\" r=\"3\" fill=\"#dc2626\"/><line x1=\"100\" y1=\"75\" x2=\"160\" y2=\"75\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"100\" y=\"71\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">固定大圓</text><text x=\"100\" y=\"87\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">半徑 2 份</text><text x=\"160\" y=\"63\" font-size=\"10\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">小圓 1 份</text><text x=\"100\" y=\"145\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">圓心路徑半徑 ＝ 2 ＋ 1 ＝ 3 份</text><text x=\"335\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">大圓半徑 2 份 ＋ 小圓半徑 1 份</text><text x=\"335\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">圓心路程 ＝ 3 倍小圓周長</text><text x=\"335\" y=\"108\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">自轉圈數 ＝ (2 ＋ 1) ÷ 1 ＝ 3 圈</text></svg>",
          "caption": "固定大圓半徑佔 2 份、滾動小圓半徑佔 1 份，小圓圓心走的紅色軌跡圓半徑一共是 3 份，因此小圓自轉 3 圈。"
        },
        {
          "type": "text",
          "text": "第 1 步：把小硬幣的半徑當作 1 份，固定大硬幣的半徑就是 2 份。"
        },
        {
          "type": "text",
          "text": "第 2 步：小硬幣在大硬幣外側滾動時，小硬幣圓心距離大硬幣圓心永遠是「大圓半徑 ＋ 小圓半徑 ＝ 2 ＋ 1 ＝ 3 份」。"
        },
        {
          "type": "eq",
          "expr": "(2 ＋ 1) ÷ 1 ＝ 3",
          "unit": "圈"
        },
        {
          "type": "text",
          "text": "第 3 步：圓心走的路徑周長是小硬幣自身周長的 3 倍，所以小硬幣一共自轉了 3 圈。"
        },
        {
          "type": "answer",
          "text": "答：3 圈"
        }
      ],
      "insight": "外滾口訣：「自轉圈數 ＝ (大半徑 ÷ 小半徑) ＋ 1」，那多出來的「＋ 1」永遠來自小圓繞大圓公轉一整圈的角度。",
      "distractorAnalysis": {
        "B": "經典陷阱：只比較大圓周長是小圓周長的 2 倍，忘了小硬幣本身也公轉了 1 圈，漏加 1 而誤選 2 圈。",
        "C": "誤把大圓半徑倍數 2 平方算成 4 圈（面積思考誤用）。",
        "D": "沒有考慮半徑比例與路徑長，隨意誤選 1 圈。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "外滾自轉圈數 ＝ 圓心路徑半徑 ÷ 滾動圓半徑 ＝ (大圓半徑 ÷ 小圓半徑) ＋ 1"
      ],
      "conceptCompare": "無論大圓半徑是小圓的 1 倍、2 倍還是 3 倍，在外側繞一圈的自轉圈數分別是 2 圈、3 圈、4 圈，永遠比周長倍數多 1 圈。",
      "examVariations": "段考或競賽題常改成「半徑 4 公分的小圓繞著半徑 12 公分的大圓外側滾一圈，小圓自轉幾圈？」，先算 12 ÷ 4 ＝ 3 倍，再加公轉 1 圈得 3 ＋ 1 ＝ 4 圈。"
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U06'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
