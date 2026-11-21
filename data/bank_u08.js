// U08 4D 滿血題庫分片（共 65 題）
(function (root) {
  const DATA = [
  {
    "id": "U08-S1-B-001",
    "legacyId": "u08_001",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "課本原型題",
    "source": "課本 p.119",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "一座長 80 公尺的橋，在橋的一側每隔 20 公尺設一盞路燈。比較「兩端都設」和「兩端都不設」兩種設法，兩端都設比兩端都不設多設幾盞路燈？",
    "options": [
      {
        "key": "A",
        "text": "多 2 盞",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "多 1 盞",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "多 4 盞",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "一樣多",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(80 / 20 + 1) - (80 / 20 - 1)",
      "expect": "2",
      "extraChecks": [
        {
          "expr": "80 / 20 + 1",
          "expect": "5"
        },
        {
          "expr": "80 / 20 - 1",
          "expect": "3"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解直線上植樹／設路燈三種端點條件（「兩端都設」、「只設一端」、「兩端都不設」）與間隔數之間的加減 1 關係。",
      "steps": [
        {
          "type": "text",
          "text": "先算橋長 80 公尺，每隔 20 公尺設一盞路燈，共有幾個間隔："
        },
        {
          "type": "eq",
          "expr": "80 ÷ 20 ＝ 4",
          "unit": "個間隔"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"34\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">兩端都設</text><line x1=\"115\" y1=\"30\" x2=\"375\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"4\"/><circle cx=\"115\" cy=\"30\" r=\"7\" fill=\"#e11d48\"/><circle cx=\"180\" cy=\"30\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"245\" cy=\"30\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"310\" cy=\"30\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"375\" cy=\"30\" r=\"7\" fill=\"#e11d48\"/><text x=\"420\" y=\"34\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">5 盞</text><text x=\"10\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">只設一端</text><line x1=\"115\" y1=\"74\" x2=\"375\" y2=\"74\" stroke=\"#94a3b8\" stroke-width=\"4\"/><circle cx=\"115\" cy=\"74\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"180\" cy=\"74\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"245\" cy=\"74\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"310\" cy=\"74\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"375\" cy=\"74\" r=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"420\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">4 盞</text><text x=\"10\" y=\"122\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">兩端都不設</text><line x1=\"115\" y1=\"118\" x2=\"375\" y2=\"118\" stroke=\"#94a3b8\" stroke-width=\"4\"/><circle cx=\"115\" cy=\"118\" r=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/><circle cx=\"180\" cy=\"118\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"245\" cy=\"118\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"310\" cy=\"118\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"375\" cy=\"118\" r=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/><text x=\"420\" y=\"122\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">3 盞</text><text x=\"245\" y=\"148\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">4 個 20 公尺間隔，兩端多設出 2 盞紅燈</text></svg>",
          "caption": "橋長 80 公尺分為 4 個間隔，三種設法的路燈數量對照圖"
        },
        {
          "type": "eq",
          "expr": "兩端都設 ＝ 4 ＋ 1 ＝ 5",
          "unit": "盞"
        },
        {
          "type": "eq",
          "expr": "只設一端 ＝ 4",
          "unit": "盞"
        },
        {
          "type": "eq",
          "expr": "兩端都不設 ＝ 4 − 1 ＝ 3",
          "unit": "盞"
        },
        {
          "type": "eq",
          "expr": "5 − 3 ＝ 2",
          "unit": "盞"
        },
        {
          "type": "answer",
          "text": "答：多 2 盞"
        }
      ],
      "insight": "手指模型：5 根手指之間有 4 個指縫。直線上兩端都有比兩端都沒有剛好多了頭尾那 2 個端點。",
      "distractorAnalysis": {
        "C": "直接拿間隔數 80 ÷ 20 ＝ 4 當成差額，沒有分辨三種設法各自的加減 1。",
        "D": "誤套用封閉圖形的觀念，以為起點與終點重疊而不會改變路燈總數。",
        "B": "誤把「兩端都設」只看成 4 盞（或只比較兩端都設 5 盞與只設一端 4 盞），少算了另一端的差距。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "間隔數 ＝ 總長 ÷ 間隔長",
        "兩端都設 ＝ 間隔數 ＋ 1；只設一端 ＝ 間隔數；兩端都不設 ＝ 間隔數 − 1"
      ],
      "conceptCompare": "「兩端都設」和「兩端都不設」永遠相差 2 盞，與總長有幾個間隔無關。",
      "examVariations": "段考常考「橋的兩側都要設路燈」，算出單側盞數後記得最後還要乘以 2。"
    }
  },
  {
    "id": "U08-S1-B-002",
    "legacyId": "u08_002",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "課本原型題",
    "source": "課本 p.119",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "圓形蛋糕的圓周長是 30 公分，沿著周圍每隔 6 公分擠一朵奶油花，共要擠幾朵奶油花？",
    "options": [
      {
        "key": "A",
        "text": "6 朵",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "B",
        "text": "4 朵",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "5 朵",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "24 朵",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "30 / 6",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "測驗學生是否知道「封閉圓形」沒有起點與終點的區分，物體數量直接等於間隔數。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"130\" cy=\"75\" r=\"50\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"3\"/><circle cx=\"130\" cy=\"25\" r=\"8\" fill=\"#e11d48\"/><circle cx=\"178\" cy=\"60\" r=\"8\" fill=\"#e11d48\"/><circle cx=\"159\" cy=\"115\" r=\"8\" fill=\"#e11d48\"/><circle cx=\"101\" cy=\"115\" r=\"8\" fill=\"#e11d48\"/><circle cx=\"82\" cy=\"60\" r=\"8\" fill=\"#e11d48\"/><text x=\"130\" y=\"80\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">圓周 30 公分</text><text x=\"235\" y=\"52\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">封閉圓形沒有端點：</text><text x=\"235\" y=\"82\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">1 朵花對 1 個 6 公分間隔</text><text x=\"235\" y=\"112\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">花朵數 ＝ 間隔數 ＝ 5 朵</text></svg>",
          "caption": "圓形蛋糕封閉圖形示意圖：5 個 6 公分間隔正好對應 5 朵奶油花"
        },
        {
          "type": "text",
          "text": "圓形是首尾相接的封閉圖形，所以「花朵數 ＝ 間隔數」，直接用圓周長除以間隔長："
        },
        {
          "type": "eq",
          "expr": "30 ÷ 6 ＝ 5",
          "unit": "朵"
        },
        {
          "type": "answer",
          "text": "答：5 朵"
        }
      ],
      "insight": "封閉圖形（圓形、正方形、長方形周圍）沒有端點，所以點數直接等於間隔數，不用加 1 也不用減 1。",
      "distractorAnalysis": {
        "A": "誤套用直線「兩端都設」公式，算出 30 ÷ 6 ＝ 5 後又多加 1 朵變成 6 朵。",
        "B": "誤套用直線「兩端都不設」公式，算出 5 後又減 1 變成 4 朵。",
        "D": "未看清「每隔 6 公分」，誤用減法 30 − 6 ＝ 24。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "封閉圖形：物體數量 ＝ 間隔數 ＝ 總周長 ÷ 間隔長"
      ],
      "conceptCompare": "把圓形剪開拉直時，起點與終點原本是重疊的同一朵花，拉直後才等同「只種一端」，因此不需加 1。",
      "examVariations": "若題目改成「正五邊形蛋糕每邊邊長 6 公分，沿著周圍每隔 3 公分擠一朵花」，也是封閉圖形，直接 30 ÷ 3 ＝ 10 朵。"
    }
  },
  {
    "id": "U08-S1-B-003",
    "legacyId": "u08_003",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "課本原型題",
    "source": "課本 p.120",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "圓形池塘的周長是 1080 公尺，沿著池塘周圍設置 20 個告示牌，每個間隔一樣長。每個間隔長幾公尺？",
    "options": [
      {
        "key": "A",
        "text": "60 公尺",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "55 公尺",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "C",
        "text": "53 公尺",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "54 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "1080 / 20",
      "expect": "54"
    },
    "explanation": {
      "examPurpose": "測驗學生能否反向利用「封閉圖形間隔數 ＝ 告示牌數」，再由總周長除以間隔數求出每個間隔長。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"135\" cy=\"68\" rx=\"95\" ry=\"45\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"68\" r=\"5\" fill=\"#e11d48\"/><circle cx=\"68\" cy=\"35\" r=\"5\" fill=\"#e11d48\"/><circle cx=\"135\" cy=\"23\" r=\"5\" fill=\"#e11d48\"/><circle cx=\"202\" cy=\"35\" r=\"5\" fill=\"#e11d48\"/><circle cx=\"230\" cy=\"68\" r=\"5\" fill=\"#e11d48\"/><text x=\"135\" y=\"72\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">池塘周長 1080 公尺</text><text x=\"260\" y=\"50\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">封閉池塘周圍：</text><text x=\"260\" y=\"78\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">20 個告示牌 ＝ 20 個間隔</text><text x=\"260\" y=\"106\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">1080 ÷ 20 ＝ 54 公尺</text></svg>",
          "caption": "圓形池塘周長 1080 公尺，20 個告示牌平均分成 20 個間隔"
        },
        {
          "type": "text",
          "text": "池塘是封閉圓形，所以「間隔數 ＝ 告示牌數 ＝ 20」。將周長平分成 20 個間隔："
        },
        {
          "type": "eq",
          "expr": "1080 ÷ 20 ＝ 54",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：54 公尺"
        }
      ],
      "insight": "封閉圖形求間隔長：先確定「間隔數 ＝ 物件數」，再用「總周長 ÷ 間隔數」。",
      "distractorAnalysis": {
        "B": "算出 1080 ÷ 20 ＝ 54 後，誤以為封閉圖形最後還要再加 1，答成 55 公尺。",
        "C": "誤套用加減 1 觀念，將正確商 54 減 1 變成 53 公尺。",
        "A": "除法計算 1080 ÷ 20 時退位與乘法檢核失誤（誤將 108 ÷ 2 算成 60）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "每個間隔長 ＝ 總周長 ÷ 間隔數",
        "封閉圖形：間隔數 ＝ 告示牌數"
      ],
      "conceptCompare": "求間隔長時要先判斷題目給的是「直線」還是「封閉圖形」，才不會算錯總間隔數。",
      "examVariations": "若題目問「從第 1 個告示牌走到第 5 個告示牌走了幾公尺？」，共有 5 − 1 ＝ 4 個間隔，距離是 54 × 4 ＝ 216 公尺。"
    }
  },
  {
    "id": "U08-S1-B-004",
    "legacyId": "u08_004",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "課本原型題",
    "source": "課本 p.120",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "卡丁車跑道周長 700 公尺，沿著跑道設置 25 個指標牌，每個間隔一樣長。每個間隔長幾公尺？",
    "options": [
      {
        "key": "A",
        "text": "28 公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "27 公尺",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "35 公尺",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "29 公尺",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "700 / 25",
      "expect": "28"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能辨識卡丁車封閉賽道也是「封閉圖形」，間隔數等於指標牌個數。",
      "steps": [
        {
          "type": "text",
          "text": "卡丁車跑道繞一圈回到起點，屬於封閉圖形，所以間隔數 ＝ 指標牌數 ＝ 25。"
        },
        {
          "type": "eq",
          "expr": "700 ÷ 25 ＝ 28",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：28 公尺"
        }
      ],
      "insight": "不管跑道是圓形還是不規則封閉賽道，只要繞一圈回到原點，間隔數就一定等於指標牌數。",
      "distractorAnalysis": {
        "B": "算出 28 後誤以為要再減 1，答成 27 公尺。",
        "C": "700 ÷ 25 計算失誤，誤把 700 ÷ 20 ＝ 35 當成答案。",
        "D": "算出 28 後誤套直線植樹口訣多加 1，答成 29 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "封閉跑道：每個間隔長 ＝ 跑道總周長 ÷ 指標牌數"
      ],
      "conceptCompare": "封閉圖形不限於正圓，只要頭尾相連的操場跑道、正方形花圃或池塘，全部適用「物件數 ＝ 間隔數」。",
      "examVariations": "若改問「如果每個間隔縮短成 20 公尺，需要幾個指標牌？」，則計算 700 ÷ 20 ＝ 35 個。"
    }
  },
  {
    "id": "U08-S1-B-005",
    "legacyId": "u08_005",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "課本原型題",
    "source": "課本 p.121 練習",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "長 80 公尺的走廊，在一側擺放 16 盆花，起點不擺、終點擺，每個間隔一樣長。每個間隔長幾公尺？",
    "options": [
      {
        "key": "A",
        "text": "4 公尺",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "B",
        "text": "6 公尺",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "5 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "10 公尺",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "80 / 16",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解直線上「只有一端擺（起點不擺、終點擺）」時，花盆數剛好等於間隔數。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"50\" x2=\"420\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"50\" r=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/><circle cx=\"116\" cy=\"50\" r=\"7\" fill=\"#059669\"/><circle cx=\"192\" cy=\"50\" r=\"7\" fill=\"#059669\"/><circle cx=\"344\" cy=\"50\" r=\"7\" fill=\"#059669\"/><circle cx=\"420\" cy=\"50\" r=\"7\" fill=\"#059669\"/><text x=\"40\" y=\"30\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"middle\">起點不擺</text><text x=\"420\" y=\"30\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">終點擺</text><text x=\"268\" y=\"54\" font-size=\"16\" fill=\"#475569\" text-anchor=\"middle\">……</text><text x=\"230\" y=\"85\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">1 個間隔對應右邊 1 盆花 ➔ 共 16 個間隔</text><text x=\"230\" y=\"108\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">總長 80 公尺 ÷ 16 ＝ 5 公尺</text></svg>",
          "caption": "起點不擺、終點擺時，每一段間隔右端剛好配 1 盆花（16 盆 ＝ 16 個間隔）"
        },
        {
          "type": "text",
          "text": "只有一端擺花盆時，花盆數 ＝ 間隔數 ＝ 16 個。把走廊總長除以 16："
        },
        {
          "type": "eq",
          "expr": "80 ÷ 16 ＝ 5",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：5 公尺"
        }
      ],
      "insight": "直線上「只擺一端」的時候，可以把每 1 段間隔和它後面的 1 盆花綁成一組，因此「間隔數 ＝ 花盆數」。",
      "distractorAnalysis": {
        "B": "算出 5 公尺後，誤以為只擺一端要多補 1，多加 1 變成 6 公尺。",
        "D": "除法計算 80 ÷ 16 時算錯（誤算成 80 ÷ 8 ＝ 10）。",
        "A": "誤以為兩端問題必須把答案再少 1，算成 5 − 1 ＝ 4 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "只擺一端：間隔數 ＝ 物件數",
        "每個間隔長 ＝ 總長 ÷ 間隔數"
      ],
      "conceptCompare": "起點不擺終點擺，和起點擺終點不擺，間隔數都剛好等於花盆數。",
      "examVariations": "若題目改成「走廊兩側都擺花盆，共擺 32 盆」，要先除以 2 算出單側 16 盆再計算間隔長。"
    }
  },
  {
    "id": "U08-S1-B-006",
    "legacyId": "u08_006",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "課本原型題",
    "source": "課本 p.121 練習",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "一條長 104 公分的緞帶上要縫 7 顆鈕扣，兩端都不縫，每個間隔一樣長。每個間隔長幾公分？",
    "options": [
      {
        "key": "A",
        "text": "13 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "14 公分",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "C",
        "text": "17 公分",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "12 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "104 / (7 + 1)",
      "expect": "13"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握「兩端都不設」的反推關係：間隔數比鈕扣數多 1，也就是 7 ＋ 1 ＝ 8 個間隔。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 115\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"38\" width=\"400\" height=\"18\" rx=\"4\" fill=\"#fef2f2\" stroke=\"#e11d48\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"47\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"130\" cy=\"47\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"180\" cy=\"47\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"230\" cy=\"47\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"280\" cy=\"47\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"330\" cy=\"47\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"380\" cy=\"47\" r=\"6\" fill=\"#2563eb\"/><text x=\"30\" y=\"26\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"middle\">左端不縫</text><text x=\"430\" y=\"26\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"middle\">右端不縫</text><text x=\"230\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">7 顆藍鈕扣把緞帶分成 7 ＋ 1 ＝ 8 個間隔</text><text x=\"230\" y=\"105\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">104 公分 ÷ 8 ＝ 13 公分</text></svg>",
          "caption": "兩端都不縫時，7 顆鈕扣將 104 公分緞帶切成 8 段間隔"
        },
        {
          "type": "text",
          "text": "兩端都不縫鈕扣時，就像把緞帶剪 7 刀，會剪成 7 ＋ 1 ＝ 8 段間隔："
        },
        {
          "type": "eq",
          "expr": "7 ＋ 1 ＝ 8",
          "unit": "個間隔"
        },
        {
          "type": "eq",
          "expr": "104 ÷ 8 ＝ 13",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：13 公分"
        }
      ],
      "insight": "已知物件數求間隔數時剛好相反：「兩端都不設」要加 1；可以把鈕扣想像成剪刀，剪 7 刀會有 8 段。",
      "distractorAnalysis": {
        "B": "誤套用「間隔數 ＝ 鈕扣數 ＝ 7」，且誤把 104 ÷ 7 算成 14 公分。",
        "D": "正確算出 8 個間隔，但計算 104 ÷ 8 時十位退位算錯成 12 公分。",
        "C": "把「兩端都不設」記成要減 1，誤算成 7 − 1 ＝ 6 個間隔後再取整約 17 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩端都不設：間隔數 ＝ 物件數 ＋ 1",
        "每個間隔長 ＝ 緞帶總長 ÷ 間隔數"
      ],
      "conceptCompare": "記不住加減 1 時，用最簡單的「1 顆鈕扣縫在中間」想一下：1 顆鈕扣會分成 2 段間隔，所以間隔數 ＝ 1 ＋ 1 ＝ 2。",
      "examVariations": "「把一根木頭鋸成幾段」也是相同原理：鋸 7 次不切兩端，共會鋸出 7 ＋ 1 ＝ 8 段。"
    }
  },
  {
    "id": "U08-S1-B-007",
    "legacyId": "u08_007",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "課本原型題",
    "source": "課本 p.122 例 7",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "筆直的道路一側插了 20 枝旗子，相鄰兩枝的間隔都是 80 公分。從第 6 枝到第 16 枝旗子的距離是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "880 公分",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "800 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "720 公分",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "1520 公分",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(16 - 6) * 80",
      "expect": "800"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「第幾個到第幾個」的間隔數算法是兩編號直接相減，不會被總數 20 枝的多餘資訊幹擾。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 115\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"52\" x2=\"420\" y2=\"52\" stroke=\"#64748b\" stroke-width=\"3\"/><line x1=\"75\" y1=\"52\" x2=\"385\" y2=\"52\" stroke=\"#e11d48\" stroke-width=\"5\"/><circle cx=\"75\" cy=\"52\" r=\"7\" fill=\"#e11d48\"/><circle cx=\"145\" cy=\"52\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"315\" cy=\"52\" r=\"6\" fill=\"#2563eb\"/><circle cx=\"385\" cy=\"52\" r=\"7\" fill=\"#e11d48\"/><text x=\"75\" y=\"32\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">第 6 枝</text><text x=\"145\" y=\"32\" font-size=\"12\" fill=\"#2563eb\" text-anchor=\"middle\">第 7 枝</text><text x=\"230\" y=\"40\" font-size=\"15\" fill=\"#475569\" text-anchor=\"middle\">……</text><text x=\"315\" y=\"32\" font-size=\"12\" fill=\"#2563eb\" text-anchor=\"middle\">第 15 枝</text><text x=\"385\" y=\"32\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">第 16 枝</text><text x=\"230\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">間隔數 ＝ 16 − 6 ＝ 10 個（每個 80 公分）</text><text x=\"230\" y=\"105\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">10 × 80 ＝ 800 公分（總共 20 枝的多餘條件不用管）</text></svg>",
          "caption": "第 6 枝到第 16 枝共有 16 − 6 ＝ 10 個間隔"
        },
        {
          "type": "text",
          "text": "先算出從第 6 枝到第 16 枝之間有幾個間隔（直接用編號相減，不用加 1）："
        },
        {
          "type": "eq",
          "expr": "16 − 6 ＝ 10",
          "unit": "個間隔"
        },
        {
          "type": "eq",
          "expr": "80 × 10 ＝ 800",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：800 公分"
        }
      ],
      "insight": "第 6 枝到第 16 枝一共有 11 枝旗子，但題目問的是「距離（間隔數）」，所以共有 16 − 6 ＝ 10 個間隔。",
      "distractorAnalysis": {
        "A": "把旗子數量（16 − 6 ＋ 1 ＝ 11 枝）直接當成間隔數，多乘了一個 80 公分變成 880 公分。",
        "D": "沒注意只算第 6 到第 16 枝，直接計算全部 20 枝旗子的總距離 (20 − 1) × 80 ＝ 1520 公分。",
        "C": "錯以為還要再扣掉 1，算成 9 個間隔 × 80 ＝ 720 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "第甲枝到第乙枝的間隔數 ＝ 乙 − 甲",
        "距離 ＝ 間隔長 ×（大編號 − 小編號）"
      ],
      "conceptCompare": "題目給「總共 20 枝旗子」是干擾條件，只求其中一段距離時看起點和終點的編號就好。",
      "examVariations": "生活常見考法：「從第 3 根電線桿走到第 11 根，每根間隔 50 公尺，共走了幾公尺？」算法完全相同：(11 − 3) × 50 ＝ 400 公尺。"
    }
  },
  {
    "id": "U08-S2-B-008",
    "legacyId": "u08_008",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規律",
    "category": "數形規律",
    "batch": "課本原型題",
    "source": "課本 p.123 例 1",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "火車車廂的裝飾圖案依照「△、○、□、△、○、□……」的順序，每 3 個一組重複排列。第 25 個圖案是哪一個？",
    "svg": "<svg viewBox=\"0 0 460 90\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#92400e\" stroke-width=\"2.5\" stroke-linejoin=\"round\"><polygon points=\"25,52 55,52 40,24\" fill=\"#fde68a\"/><circle cx=\"95\" cy=\"38\" r=\"14\" fill=\"#bfdbfe\"/><rect x=\"136\" y=\"24\" width=\"28\" height=\"28\" fill=\"#fecdd3\"/><polygon points=\"195,52 225,52 210,24\" fill=\"#fde68a\"/><circle cx=\"265\" cy=\"38\" r=\"14\" fill=\"#bfdbfe\"/><rect x=\"306\" y=\"24\" width=\"28\" height=\"28\" fill=\"#fecdd3\"/><polygon points=\"365,52 395,52 380,24\" fill=\"#fde68a\"/></g><g font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\"><text x=\"40\" y=\"74\">1</text><text x=\"95\" y=\"74\">2</text><text x=\"150\" y=\"74\">3</text><text x=\"210\" y=\"74\">4</text><text x=\"265\" y=\"74\">5</text><text x=\"320\" y=\"74\">6</text><text x=\"380\" y=\"74\">7</text></g><text x=\"430\" y=\"45\" font-size=\"22\" fill=\"#92400e\" text-anchor=\"middle\">……</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "○（每組第 2 個）",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "B",
        "text": "△（每組第 1 個）",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "正方形（每組第 3 個）",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "無法判斷，因為缺少車廂總數",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "25 - 8 * 3",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生能否利用除法求「餘數」，判斷週期性重複排列圖案中指定位置的圖形。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 115\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"22\" width=\"120\" height=\"44\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"80\" y=\"49\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">第 1 組：△ ○ □</text><text x=\"165\" y=\"49\" font-size=\"15\" font-weight=\"700\" fill=\"#64748b\" text-anchor=\"middle\">……</text><rect x=\"190\" y=\"22\" width=\"120\" height=\"44\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"250\" y=\"49\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">第 8 組：△ ○ □</text><rect x=\"335\" y=\"22\" width=\"105\" height=\"44\" rx=\"6\" fill=\"#fef2f2\" stroke=\"#e11d48\" stroke-width=\"2.5\"/><text x=\"387\" y=\"49\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">第 25 個：△</text><text x=\"165\" y=\"95\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">前面 8 組共 24 個</text><text x=\"387\" y=\"95\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">餘 1 個（第 1 個）</text></svg>",
          "caption": "每 3 個一組分組示意：排完 8 組（24 個）後，第 25 個是下一組第 1 個"
        },
        {
          "type": "text",
          "text": "每 3 個圖案一組，用 25 除以 3 看排完幾組還餘幾個："
        },
        {
          "type": "eq",
          "expr": "25 ÷ 3 ＝ 8 …… 1",
          "unit": ""
        },
        {
          "type": "text",
          "text": "排完完整的 8 組（共 24 個）後，餘數 1 代表第 25 個是第 9 組的第 1 個圖案，也就是 △。"
        },
        {
          "type": "answer",
          "text": "答：△（每組第 1 個）"
        }
      ],
      "insight": "週期規律問題看「餘數」：餘 1 是每組第 1 個、餘 2 是第 2 個；如果剛好整除（沒有餘數），就是每組的最後一個。",
      "distractorAnalysis": {
        "C": "誤算 25 ÷ 3 ＝ 8 沒有餘數，或錯以為商 8 代表整組結束後的最後一個 □。",
        "D": "沒有發現每 3 個重複一次的固定週期，只需要位置編號就能推算，不需要車廂總數。",
        "A": "錯把餘數對齊順序算歪（例如從第 2 個開始數或誤算餘數為 2），選成每組第 2 個 ○。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "位置編號 ÷ 每組個數 ＝ 組數 …… 餘數",
        "餘數對應組內順序；整除時就是該組最後一個"
      ],
      "conceptCompare": "週期題目絕對不要一個一個畫到第 25 個；先框出「一組有幾個」，再用除法找餘數最快最準。",
      "examVariations": "段考常考「第 1 個到第 25 個圖案中，△ 一共出現幾次？」前 8 組各 1 次加上餘下的 1 個 △，共 8 ＋ 1 ＝ 9 次。"
    }
  },
  {
    "id": "U08-S2-B-009",
    "legacyId": "u08_009",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規律",
    "category": "數形規律",
    "batch": "課本原型題",
    "source": "課本 p.124 例 2",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "用棉花棒在同一水平列排成一排相連的正方形，每個新接上去的正方形都與左邊的正方形共用中間那根棉花棒（第 1 個用了 4 根，多排 1 個就多 3 根）。排成 20 個相連的正方形，一共需要幾根棉花棒？",
    "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#b45309\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"><rect x=\"25\" y=\"20\" width=\"46\" height=\"46\"/><rect x=\"125\" y=\"20\" width=\"46\" height=\"46\"/><rect x=\"171\" y=\"20\" width=\"46\" height=\"46\"/><rect x=\"270\" y=\"20\" width=\"46\" height=\"46\"/><rect x=\"316\" y=\"20\" width=\"46\" height=\"46\"/><rect x=\"362\" y=\"20\" width=\"46\" height=\"46\"/></g><g font-size=\"13\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"700\"><text x=\"48\" y=\"96\">1 個：4 根</text><text x=\"171\" y=\"96\">2 個：7 根</text><text x=\"339\" y=\"96\">3 個：10 根</text></g></svg>",
    "options": [
      {
        "key": "A",
        "text": "80 根",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "60 根",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "61 根",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "64 根",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "1 + 3 * 20",
      "expect": "61"
    },
    "explanation": {
      "examPurpose": "測驗學生能否從圖形觀察出相連正方形「共用邊」的規律，寫出累加關係而不是直接乘以 4。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"25\" x2=\"40\" y2=\"75\" stroke=\"#e11d48\" stroke-width=\"5\" stroke-linecap=\"round\"/><g stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"><polyline points=\"40,25 90,25 90,75 40,75\"/><polyline points=\"90,25 140,25 140,75 90,75\"/><polyline points=\"140,25 190,25 190,75 140,75\"/></g><text x=\"230\" y=\"56\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\">……</text><polyline points=\"270,25 320,25 320,75 270,75\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><text x=\"40\" y=\"100\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">最左 1 根</text><text x=\"260\" y=\"100\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">後續 20 個正方形各補 3 根藍棒（上、右、下）</text></svg>",
          "caption": "分解圖：先放最左邊 1 根紅棒，之後 20 個正方形每個只要 3 根藍棒"
        },
        {
          "type": "text",
          "text": "每個相連正方形都會跟前一個共用中間那根邊，所以「最左邊先放 1 根，之後每個正方形各用 3 根」："
        },
        {
          "type": "eq",
          "expr": "1 ＋ 3 × 20 ＝ 61",
          "unit": "根"
        },
        {
          "type": "text",
          "text": "也可以想成：第 1 個正方形用 4 根，後面多出來的 19 個各多 3 根：4 ＋ 3 × 19 ＝ 61 根。"
        },
        {
          "type": "answer",
          "text": "答：61 根"
        }
      ],
      "insight": "排一排相連正方形：每多 1 個就多 3 根，總數 ＝ 1 ＋ 3 × 正方形個數（或是 4 ＋ 3 × 多出來的個數）。",
      "distractorAnalysis": {
        "A": "沒有發現中間的棉花棒是共用的，直接用 4 × 20 ＝ 80 根重複計算了 19 根共用邊。",
        "B": "知道每個只要 3 根，卻忘記加上最左邊封口的那 1 根，算成 3 × 20 ＝ 60 根。",
        "D": "把兩種想法混在一起，將第 1 個的 4 根加上 3 × 20，多加了 3 根變成 64 根。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "相連正方形棒數 ＝ 1 ＋ 3 × 個數（或 4 ＋ 3 × (個數 − 1)）"
      ],
      "conceptCompare": "同樣的方法也適用正三角形：1 個正三角形 3 根，之後每多 1 個相連只要多 2 根，總數 ＝ 1 ＋ 2 × 個數。",
      "examVariations": "反推題：「如果共有 100 根棉花棒，最多可以排幾個相連正方形？」(100 − 1) ÷ 3 ＝ 33 個。"
    }
  },
  {
    "id": "U08-S2-B-010",
    "legacyId": "u08_010",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規律",
    "category": "數形規律",
    "batch": "課本原型題",
    "source": "課本 p.125 例 3",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "用花片排成一個「空心正方形」（只排最外圍四條邊，中間完全不放花片；四個角落的花片各屬於相鄰兩條邊）。如果每邊都排 30 個花片，一共需要幾個花片？",
    "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#8b5cf6\" stroke=\"#5b21b6\" stroke-width=\"1.5\"><circle cx=\"45\" cy=\"45\" r=\"8\"/><circle cx=\"69\" cy=\"45\" r=\"8\"/><circle cx=\"45\" cy=\"69\" r=\"8\"/><circle cx=\"69\" cy=\"69\" r=\"8\"/><circle cx=\"155\" cy=\"33\" r=\"8\"/><circle cx=\"179\" cy=\"33\" r=\"8\"/><circle cx=\"203\" cy=\"33\" r=\"8\"/><circle cx=\"155\" cy=\"57\" r=\"8\"/><circle cx=\"203\" cy=\"57\" r=\"8\"/><circle cx=\"155\" cy=\"81\" r=\"8\"/><circle cx=\"179\" cy=\"81\" r=\"8\"/><circle cx=\"203\" cy=\"81\" r=\"8\"/><circle cx=\"295\" cy=\"21\" r=\"8\"/><circle cx=\"319\" cy=\"21\" r=\"8\"/><circle cx=\"343\" cy=\"21\" r=\"8\"/><circle cx=\"367\" cy=\"21\" r=\"8\"/><circle cx=\"295\" cy=\"45\" r=\"8\"/><circle cx=\"367\" cy=\"45\" r=\"8\"/><circle cx=\"295\" cy=\"69\" r=\"8\"/><circle cx=\"367\" cy=\"69\" r=\"8\"/><circle cx=\"295\" cy=\"93\" r=\"8\"/><circle cx=\"319\" cy=\"93\" r=\"8\"/><circle cx=\"343\" cy=\"93\" r=\"8\"/><circle cx=\"367\" cy=\"93\" r=\"8\"/></g><g font-size=\"13\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"700\"><text x=\"57\" y=\"122\">每邊 2 個：4 個</text><text x=\"179\" y=\"122\">每邊 3 個：8 個</text><text x=\"331\" y=\"122\">每邊 4 個：12 個</text></g></svg>",
    "options": [
      {
        "key": "A",
        "text": "120 個",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "116 個",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "112 個",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "117 個",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(30 - 1) * 4",
      "expect": "116"
    },
    "explanation": {
      "examPurpose": "測驗學生處理空心正方形周界點數時，是否能扣除 4 個角落花片的重複計算。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"20\" width=\"92\" height=\"22\" rx=\"11\" fill=\"#fee2e2\" stroke=\"#e11d48\" stroke-width=\"2\"/><rect x=\"142\" y=\"20\" width=\"22\" height=\"92\" rx=\"11\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"72\" y=\"90\" width=\"92\" height=\"22\" rx=\"11\" fill=\"#dcfce7\" stroke=\"#059669\" stroke-width=\"2\"/><rect x=\"45\" y=\"47\" width=\"22\" height=\"65\" rx=\"11\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"104\" y=\"68\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">每組 29 個</text><text x=\"210\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">分組不重複法：</text><text x=\"210\" y=\"68\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">每邊只圈 (30 − 1) ＝ 29 個</text><text x=\"210\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">4 組共 29 × 4 ＝ 116 個</text></svg>",
          "caption": "空心正方形不重複圈選法：每邊少算 1 個頂點，4 邊正好分成 4 組"
        },
        {
          "type": "text",
          "text": "四個角落的花片同時屬於兩條邊，直接 30 × 4 會重複算。把每邊少算 1 個角落，分成 4 組："
        },
        {
          "type": "eq",
          "expr": "(30 − 1) × 4 ＝ 29 × 4 ＝ 116",
          "unit": "個"
        },
        {
          "type": "text",
          "text": "或先算 4 邊總數再扣掉重複的 4 個角：30 × 4 − 4 ＝ 120 − 4 ＝ 116 個。"
        },
        {
          "type": "answer",
          "text": "答：116 個"
        }
      ],
      "insight": "空心正多邊形外圈總數 ＝ (每邊個數 − 1) × 邊數 ＝ 每邊個數 × 邊數 − 頂點數。",
      "distractorAnalysis": {
        "A": "直接用 30 × 4 ＝ 120 個，忘了正方形 4 個頂點的花片被重複算了兩次。",
        "C": "扣過頭了！誤以為每邊要扣掉 2 個角變成 28 × 4 ＝ 112 個，反而漏算了 4 個頂點。",
        "D": "誤以為只有 3 個角落重複而算成 120 − 3 ＝ 117 個。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "空心正方形花片總數 ＝ (每邊個數 − 1) × 4",
        "驗算另一法：每邊個數 × 4 − 4"
      ],
      "conceptCompare": "如果用「扣角法」想，4 條邊每個頂點都被 2 條邊各算 1 次，多算 1 次就扣掉 4；用「分組法」想，每邊 29 個不重疊，共有 4 組。",
      "examVariations": "若改排成「空心正六邊形」，公式同理變為 (每邊個數 − 1) × 6。"
    }
  },
  {
    "id": "U08-S2-B-011",
    "legacyId": "u08_011",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規律",
    "category": "數形規律",
    "batch": "課本原型題",
    "source": "課本 p.125 思考帽",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "用花片排成空心正三角形，每邊的花片數一樣多，一共用了 72 個花片。每邊有幾個花片？",
    "options": [
      {
        "key": "A",
        "text": "25 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "23 個",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "24 個",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "27 個",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "72 / 3 + 1",
      "expect": "25"
    },
    "explanation": {
      "examPurpose": "測驗學生能否逆向思考：已知空心正三角形總花片數，反推每邊有幾個花片。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,20 45,105 155,105\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"20\" x2=\"55\" y2=\"90\" stroke=\"#e11d48\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"45\" y1=\"105\" x2=\"140\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"155\" y1=\"105\" x2=\"110\" y2=\"35\" stroke=\"#059669\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"100\" cy=\"20\" r=\"5\" fill=\"#e11d48\"/><circle cx=\"45\" cy=\"105\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"155\" cy=\"105\" r=\"5\" fill=\"#059669\"/><text x=\"210\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72 個平分成 3 組：</text><text x=\"210\" y=\"70\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">每組 72 ÷ 3 ＝ 24 個</text><text x=\"200\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">加上共用頂點：24 ＋ 1 ＝ 25 個</text></svg>",
          "caption": "空心正三角形 3 組分法：每組 24 個，加上最後 1 個頂點就是每邊 25 個"
        },
        {
          "type": "text",
          "text": "空心正三角形共有 3 條邊、3 個頂點。先把 72 個花片平分成 3 組不重疊的邊："
        },
        {
          "type": "eq",
          "expr": "72 ÷ 3 ＝ 24",
          "unit": "個"
        },
        {
          "type": "text",
          "text": "每一組都少算了另一端的 1 個頂點，加回來就是每邊的花片數："
        },
        {
          "type": "eq",
          "expr": "24 ＋ 1 ＝ 25",
          "unit": "個"
        },
        {
          "type": "answer",
          "text": "答：25 個"
        }
      ],
      "insight": "正三角形已知總數反推每邊個數：先除以 3（分組），再加 1（補回共用頂點）；也可以想成 (72 ＋ 3) ÷ 3 ＝ 25。",
      "distractorAnalysis": {
        "B": "把加回頂點寫成減 1，錯算成 24 − 1 ＝ 23 個。",
        "D": "誤以為有 3 個頂點就要直接加 3，算成 24 ＋ 3 ＝ 27 個（正確是總數加 3 再除以 3）。",
        "C": "直接 72 ÷ 3 ＝ 24 個，忘記頂點是被兩條邊共用的，還需要加回 1 個。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "空心正三角形總數 ＝ (每邊個數 − 1) × 3",
        "每邊個數 ＝ 總數 ÷ 3 ＋ 1"
      ],
      "conceptCompare": "算完後立刻驗算最保險：如果每邊 25 個，3 邊共 25 × 3 ＝ 75 個，扣掉 3 個重複的頂點剛好 75 − 3 ＝ 72 個。",
      "examVariations": "若換成「空心正方形共用了 72 個花片，每邊有幾個？」，算法變成 72 ÷ 4 ＋ 1 ＝ 19 個。"
    }
  },
  {
    "id": "U08-S2-B-012",
    "legacyId": "u08_012",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規律",
    "category": "數形規律",
    "batch": "課本原型題",
    "source": "課本 p.134 練習園地八",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "用邊長 1 公分的正方形方瓦，排成邊長 10 公分的空心正方形，共需要幾塊方瓦？",
    "options": [
      {
        "key": "A",
        "text": "40 塊",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "32 塊",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "100 塊",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "36 塊",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(10 - 1) * 4",
      "expect": "36"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把「邊長 1 公分方瓦排成邊長 10 公分空心正方形」轉化為每邊 10 塊的空心方陣問題。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"20\" width=\"75\" height=\"16\" fill=\"#fee2e2\" stroke=\"#e11d48\" stroke-width=\"2\"/><rect x=\"120\" y=\"20\" width=\"16\" height=\"75\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><rect x=\"61\" y=\"95\" width=\"75\" height=\"16\" fill=\"#dcfce7\" stroke=\"#059669\" stroke-width=\"2\"/><rect x=\"45\" y=\"36\" width=\"16\" height=\"75\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"195\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">每邊長 10 公分 ＝ 每邊 10 塊方瓦</text><text x=\"195\" y=\"70\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">每組佔 10 − 1 ＝ 9 塊方瓦（不重疊）</text><text x=\"195\" y=\"98\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">共需要 9 × 4 ＝ 36 塊方瓦</text></svg>",
          "caption": "空心方瓦框線拆解圖：4 條顏色長條各 9 塊，完全不重複"
        },
        {
          "type": "text",
          "text": "方瓦邊長 1 公分，所以邊長 10 公分的正方形每邊剛好有 10 塊方瓦。為避免 4 個角重複計算，每邊只算 10 − 1 ＝ 9 塊："
        },
        {
          "type": "eq",
          "expr": "(10 − 1) × 4 ＝ 9 × 4 ＝ 36",
          "unit": "塊"
        },
        {
          "type": "answer",
          "text": "答：36 塊"
        }
      ],
      "insight": "看到「空心正方形方瓦」時，先確認每邊幾塊，再套用 (每邊塊數 − 1) × 4（也可以用大正方形 10 × 10 扣掉中間空心 8 × 8 ＝ 36 塊）。",
      "distractorAnalysis": {
        "A": "直接算 10 × 4 ＝ 40 塊，忘了 4 個角落的方瓦被重複算了兩次。",
        "B": "每邊少算了 2 塊變成 8 × 4 ＝ 32 塊，漏掉了 4 個角落。",
        "C": "沒有看清題目是「空心」正方形，直接算成實心面積 10 × 10 ＝ 100 塊。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "空心方瓦塊數 ＝ (每邊塊數 − 1) × 4",
        "面積扣除法：外層 10 × 10 − 內層空心 8 × 8 ＝ 100 − 64 ＝ 36"
      ],
      "conceptCompare": "注意分辨方瓦邊長：若題目改用「邊長 2 公分的方瓦排成邊長 10 公分的空心正方形」，每邊只有 10 ÷ 2 ＝ 5 塊，答案會變成 (5 − 1) × 4 ＝ 16 塊。",
      "examVariations": "段考也常考「大正方形面積減小正方形面積」兩層實心框線，兩種想法結果都是 36 塊，剛好可以互相驗算。"
    }
  },
  {
    "id": "U08-S3-B-013",
    "legacyId": "u08_013",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "選擇與組合",
    "batch": "課本原型題",
    "source": "課本 p.126 例 1",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "義式餐廳的義大利麵有 5 種、燉飯有 6 種、披薩有 3 種。如果只單點其中一種主食，共有幾種選擇？",
    "options": [
      {
        "key": "A",
        "text": "11 種",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "90 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "C",
        "text": "14 種",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "33 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "5 + 6 + 3",
      "expect": "14"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能分辨「單選一種（加法原理）」與「搭配組合（乘法原理）」的差異。",
      "steps": [
        {
          "type": "text",
          "text": "因為只單點「其中一種」主食，義大利麵、燉飯、披薩三類不能同時選，所以直接把各類的數量加起來："
        },
        {
          "type": "eq",
          "expr": "5 ＋ 6 ＋ 3 ＝ 14",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：14 種"
        }
      ],
      "insight": "只選一種（「或」）用加法；每一樣都要選來配對（「而且」）才用乘法。",
      "distractorAnalysis": {
        "B": "把單選題誤用成乘法原理，算成 5 × 6 × 3 ＝ 90 種（那是三種主食各點一份的搭配法）。",
        "D": "把義大利麵與燉飯先相乘再加披薩（5 × 6 ＋ 3 ＝ 33），混淆了加減與乘法規則。",
        "A": "計算時漏加了披薩的 3 種，只算 5 ＋ 6 ＝ 11 種。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "只選一種（互斥分類）：總選擇數 ＝ 各類數量相加"
      ],
      "conceptCompare": "讀題時先圈關鍵字：「單點其中一種」只要加起來；「各點一種搭配套餐」才需要乘起來。",
      "examVariations": "若題目多加一句「再搭配 4 種飲料，主食和飲料各點一種」，這時要先算出 14 種主食，再 14 × 4 ＝ 56 種搭配。"
    }
  },
  {
    "id": "U08-S3-B-014",
    "legacyId": "u08_014",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "選擇與組合",
    "batch": "課本原型題",
    "source": "課本 p.126 例 2",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "有 0、3、5、8 四張數字卡，選兩張排成一個二位數，而且必須是偶數。共有幾種排法？",
    "options": [
      {
        "key": "A",
        "text": "6 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "5 種",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "8 種",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "3 + 2",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "測驗學生排數字卡組合時，是否懂得「偶數先固定個位」以及「二位數十位不能是 0」兩個限制條件。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"18\" width=\"200\" height=\"96\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"120\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">情況一：個位放 0</text><text x=\"120\" y=\"68\" font-size=\"13\" fill=\"#1e293b\" text-anchor=\"middle\">十位可放 3、5、8</text><text x=\"120\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">30、50、80（共 3 種）</text><rect x=\"240\" y=\"18\" width=\"200\" height=\"96\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"340\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#be123c\" text-anchor=\"middle\">情況二：個位放 8</text><text x=\"340\" y=\"68\" font-size=\"13\" fill=\"#1e293b\" text-anchor=\"middle\">十位不能放 0，可放 3、5</text><text x=\"340\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">38、58（共 2 種）</text></svg>",
          "caption": "先固定偶數個位（0 或 8），再分別列出合法的十位數字"
        },
        {
          "type": "text",
          "text": "二位數要是偶數，個位只能放 0 或 8；同時十位絕對不能放 0。分開列出來算："
        },
        {
          "type": "eq",
          "expr": "3 ＋ 2 ＝ 5",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：5 種"
        }
      ],
      "insight": "排數字卡有 0 時，一定要把「0 放個位」和「0 不能放最高位」分開討論，才不會多算或漏算。",
      "distractorAnalysis": {
        "A": "忘了二位數的十位不能放 0，把「08」也算進去變成 3 ＋ 3 ＝ 6 種。",
        "C": "只算了個位放 0 的 3 種，忘記個位還可以放 8。",
        "D": "誤以為兩張卡都有 4 種選擇或把奇數也算進來。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "含 0 排偶數：先分類討論「個位是 0」與「個位是非 0 偶數」"
      ],
      "conceptCompare": "千萬不要從十位先選！如果十位選了 8，個位剩 0 一種；如果十位選了 3 或 5，個位有 0 和 8 兩種，分法比較亂。有特殊條件（偶數、奇數）的位數要最先決定。",
      "examVariations": "若改問「排成二位數共有幾種（不限奇偶）？」，十位不能是 0 有 3 種、個位剩 3 張可選，共 3 × 3 ＝ 9 種。"
    }
  },
  {
    "id": "U08-S3-B-015",
    "legacyId": "u08_015",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "選擇與組合",
    "batch": "課本原型題",
    "source": "課本 p.126 練習",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "有 0、1、2、3、4 五張數字卡，選兩張排成一個二位數，而且必須是奇數。共有幾種排法？",
    "options": [
      {
        "key": "A",
        "text": "8 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "10 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "4 種",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6 種",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "3 + 3",
      "expect": "6"
    },
    "explanation": {
      "examPurpose": "測驗學生排二位奇數時，能否同時處理「個位必為奇數（1 或 3）」與「十位不可為 0」的雙重限制。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"18\" width=\"200\" height=\"96\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"120\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">情況一：個位放 1</text><text x=\"120\" y=\"68\" font-size=\"13\" fill=\"#1e293b\" text-anchor=\"middle\">十位可放 2、3、4（不放 0）</text><text x=\"120\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">21、31、41（共 3 種）</text><rect x=\"240\" y=\"18\" width=\"200\" height=\"96\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"340\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">情況二：個位放 3</text><text x=\"340\" y=\"68\" font-size=\"13\" fill=\"#1e293b\" text-anchor=\"middle\">十位可放 1、2、4（不放 0）</text><text x=\"340\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">13、23、43（共 3 種）</text></svg>",
          "caption": "先固定奇數個位（1 或 3），再排除 0 列出合法的十位數字"
        },
        {
          "type": "text",
          "text": "奇數的個位只能是 1 或 3；剩下的卡片中十位還不能放 0，所以兩種情況十位都各有 3 個數字可選："
        },
        {
          "type": "eq",
          "expr": "3 ＋ 3 ＝ 6",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：6 種"
        }
      ],
      "insight": "奇數看個位、位數首位不能是 0；先選受限制的個位（2 種），再選十位（扣除個位與 0 剩 3 種），共 2 × 3 ＝ 6 種。",
      "distractorAnalysis": {
        "A": "忘了十位不能放 0，多算了 01 與 03 兩種，算成 4 ＋ 4 ＝ 8 種。",
        "B": "誤以為兩張數字卡可以重複使用，或未扣掉已放個位的卡片，錯算成 2 × 5 ＝ 10 種。",
        "C": "漏掉其中一個奇數的排法，或錯誤多扣一張數字卡變成 2 ＋ 2 ＝ 4 種。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "二位奇數排法 ＝ 個位奇數選法 × 十位（不含 0 與個位）選法"
      ],
      "conceptCompare": "排奇數比排偶數還單純！因為 0 本身不是奇數，不會佔掉個位名額，所以每個奇數個位後面剩下的十位選法數量都完全一樣。",
      "examVariations": "若改用這五張卡排「三位奇數」，個位有 2 種（1 或 3）、百位不能放 0 與個位剩 3 種、十位可放 0 剩 3 種，共 2 × 3 × 3 ＝ 18 種。"
    }
  },
  {
    "id": "U08-S3-B-016",
    "legacyId": "u08_016",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "選擇與組合",
    "batch": "課本原型題",
    "source": "課本 p.127 練習",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "櫥櫃裡有 5 個不同的杯子和 3 個不同的杯蓋，選一個杯子配一個杯蓋，共有幾種搭配？",
    "options": [
      {
        "key": "A",
        "text": "15 種",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "12 種",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "18 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "8 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "5 * 3",
      "expect": "15"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解兩件獨立物品要「各選一個配對」時，必須使用乘法原理計算總組數。",
      "steps": [
        {
          "type": "text",
          "text": "5 個不同的杯子裡，每一個杯子都可以分別搭配 3 個不同的杯蓋，共有 5 個 3 種："
        },
        {
          "type": "eq",
          "expr": "5 × 3 ＝ 15",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：15 種"
        }
      ],
      "insight": "需要「兩樣東西一起搭配」時，把各自的選擇數乘起來就是全部的組合數。",
      "distractorAnalysis": {
        "B": "乘法口訣背錯或看錯數字（誤算成 4 × 3 ＝ 12）。",
        "C": "多算了一組杯蓋或把 6 × 3 ＝ 18 誤當成答案。",
        "D": "誤將搭配問題用加法計算（5 ＋ 3 ＝ 8），把題目看成「只選杯子或只選杯蓋其中一個」。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩層搭配總數 ＝ 第一類選法 × 第二類選法"
      ],
      "conceptCompare": "5 個杯子加 3 個杯蓋共 8 個物品，但如果問「配對成一組有幾種方法」，必須是 5 × 3 ＝ 15 種。",
      "examVariations": "若多加條件「其中 1 個杯子破裂不能使用」，剩下 4 個杯子配 3 個杯蓋，變成 4 × 3 ＝ 12 種。"
    }
  },
  {
    "id": "U08-S3-B-017",
    "legacyId": "u08_017",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "選擇與組合",
    "batch": "課本原型題",
    "source": "課本 p.128 例 4",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "速食店套餐：主餐 3 種、副餐 4 種、飲料 2 種，每份套餐三樣各選一種。共有幾種組合？",
    "options": [
      {
        "key": "A",
        "text": "12 種",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "9 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "C",
        "text": "14 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "24 種",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "3 * 4 * 2",
      "expect": "24"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握三階段同時選取（「各選一種」）時的連乘計算能力。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 110\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"24\" width=\"96\" height=\"46\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"68\" y=\"52\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">主餐 3 種</text><text x=\"134\" y=\"53\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">×</text><rect x=\"152\" y=\"24\" width=\"96\" height=\"46\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"200\" y=\"52\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">副餐 4 種</text><text x=\"266\" y=\"53\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">×</text><rect x=\"284\" y=\"24\" width=\"96\" height=\"46\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"332\" y=\"52\" font-size=\"13\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">飲料 2 種</text><text x=\"420\" y=\"52\" font-size=\"14\" font-weight=\"800\" fill=\"#e11d48\" text-anchor=\"middle\">＝ 24 種</text><text x=\"230\" y=\"96\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">三步都要各選一樣 ➔ 用乘法連乘</text></svg>",
          "caption": "速食店三層套餐搭配樹狀連乘示意圖"
        },
        {
          "type": "text",
          "text": "主餐、副餐、飲料三樣都要各選一種，將每一步的選法連乘起來："
        },
        {
          "type": "eq",
          "expr": "3 × 4 × 2 ＝ 24",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：24 種"
        }
      ],
      "insight": "分好幾個步驟完成一件事，且每一步都要選時，就是乘法原理：把每一步的選擇數量全部乘在一起。",
      "distractorAnalysis": {
        "B": "誤把「各選一種」當成「只選一種」，錯用加法算成 3 ＋ 4 ＋ 2 ＝ 9 種。",
        "C": "前兩樣用乘的、最後一樣卻用加的，算成 3 × 4 ＋ 2 ＝ 14 種。",
        "A": "漏掉最後一項飲料的 2 種選擇，只算到主餐配副餐 3 × 4 ＝ 12 種。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "三層搭配總數 ＝ 第一層 × 第二層 × 第三層"
      ],
      "conceptCompare": "和單點不同，套餐三個關卡缺一不可，所以 3 × 4 先得出 12 種主副餐配法，每一種都能再搭 2 種飲料，變成 24 種。",
      "examVariations": "若改為「飲料還可以選冰的或熱的（兩種溫度）」，飲料就等於變成 2 × 2 ＝ 4 種選法，總組合數變 48 種。"
    }
  },
  {
    "id": "U08-S3-B-018",
    "legacyId": "u08_018",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "選擇與組合",
    "batch": "課本原型題",
    "source": "課本 p.128 練習",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "登山步道會經過兩座吊橋：登山口到第一座橋有 3 條路，兩座橋之間有 2 條路，第二座橋到山頂有 2 條路。從登山口到山頂共有幾種走法？",
    "options": [
      {
        "key": "A",
        "text": "7 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "8 種",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "12 種",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "6 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "3 * 2 * 2",
      "expect": "12"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把「分段接力走完全程」的路線圖問題轉換成乘法原理連乘計算。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#2563eb\" stroke-width=\"2.2\" fill=\"none\"><path d=\"M 55 55 Q 98 25 140 55\"/><path d=\"M 55 55 L 140 55\"/><path d=\"M 55 55 Q 98 85 140 55\"/><path d=\"M 140 55 Q 208 30 275 55\"/><path d=\"M 140 55 Q 208 80 275 55\"/><path d=\"M 275 55 Q 340 30 405 55\"/><path d=\"M 275 55 Q 340 80 405 55\"/></g><g fill=\"#e11d48\"><circle cx=\"55\" cy=\"55\" r=\"6\"/><circle cx=\"140\" cy=\"55\" r=\"6\"/><circle cx=\"275\" cy=\"55\" r=\"6\"/><circle cx=\"405\" cy=\"55\" r=\"6\"/></g><g font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\"><text x=\"55\" y=\"22\">登山口</text><text x=\"140\" y=\"22\">第一座橋</text><text x=\"275\" y=\"22\">第二座橋</text><text x=\"405\" y=\"22\">山頂</text><text x=\"98\" y=\"100\" fill=\"#2563eb\">3 條路</text><text x=\"208\" y=\"100\" fill=\"#2563eb\">2 條路</text><text x=\"340\" y=\"100\" fill=\"#2563eb\">2 條路</text></g></svg>",
          "caption": "登山步道三段路線連接圖：三段依序都要經過，總走法為 3 × 2 × 2"
        },
        {
          "type": "text",
          "text": "從登山口走到山頂，三段路每一段都必須走過，所以把各段的路線條數相乘："
        },
        {
          "type": "eq",
          "expr": "3 × 2 × 2 ＝ 12",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：12 種"
        }
      ],
      "insight": "接力走路線：只要各段路是「依序接起來走」，就把每段的路線數乘起來。",
      "distractorAnalysis": {
        "A": "誤將路線數全部相加（3 ＋ 2 ＋ 2 ＝ 7 種），沒有考慮前段路和後段路可以互相搭配。",
        "D": "漏算了最後一段（第二座橋到山頂的 2 條路），只算 3 × 2 ＝ 6 種。",
        "B": "看錯第一段路線條數（誤用 2 × 2 × 2 ＝ 8）或連乘計算出錯。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "多段路線總走法 ＝ 第一段路數 × 第二段路數 × 第三段路數"
      ],
      "conceptCompare": "如果題目額外有一條「不經過吊橋、直接從登山口直達山頂的捷徑」，那條捷徑獨立在外面，算法就會變成 3 × 2 × 2 ＋ 1 ＝ 13 種。",
      "examVariations": "段考常考「從登山口到山頂後，再走不同路線下山」，上下山一來一回要分開算並乘起來。"
    }
  },
  {
    "id": "U08-S4-B-019",
    "legacyId": "u08_019",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "和差問題",
    "batch": "課本原型題",
    "source": "課本 p.130 例 3",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "一份特餐和一份升級套餐共 500 元，升級套餐比特餐貴 80 元。一份升級套餐是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "特餐",
          "units": 1,
          "role": "base"
        },
        {
          "label": "升級套餐",
          "units": 1.4,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "共 500 元（貴 80 元）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "210 元",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "580 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "420 元",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "290 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(500 + 80) / 2",
      "expect": "290",
      "extraChecks": [
        {
          "expr": "(500 - 80) / 2",
          "expect": "210"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解標準和差問題線段圖模型，並正確回答「較大數（升級套餐）」的價錢。",
      "figureNote": "把特餐當作基準長度，升級套餐比它長出 80 元；把這 80 元先補齊到特餐上，總和就會剛好等於兩份升級套餐的價錢。",
      "steps": [
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "從線段圖來看，如果把特餐也多加 80 元，兩份餐點就會變成一樣貴，總共需要 500 ＋ 80 ＝ 580 元（相當於 2 份升級套餐）："
        },
        {
          "type": "eq",
          "expr": "(500 ＋ 80) ÷ 2 ＝ 580 ÷ 2 ＝ 290",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "驗算：特餐 ＝ 290 − 80 ＝ 210 元，290 ＋ 210 ＝ 500 元，符合題意。"
        },
        {
          "type": "answer",
          "text": "答：290 元"
        }
      ],
      "insight": "和差問題口訣：大數 ＝ (和 ＋ 差) ÷ 2；小數 ＝ (和 − 差) ÷ 2。",
      "distractorAnalysis": {
        "A": "用 (500 − 80) ÷ 2 ＝ 210 元算出的是較便宜的「特餐」，沒看清楚題目問的是「升級套餐」。",
        "B": "把和加上差算出 500 ＋ 80 ＝ 580 元後，忘記除以 2 就直接作答。",
        "C": "算出 500 − 80 ＝ 420 元後忘記除以 2，誤把 2 份特餐的錢當成答案。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "大數 ＝ (和 ＋ 差) ÷ 2",
        "小數 ＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "求大數用「加差再除 2」（把小的補成跟大的一樣）；求小數用「減差再除 2」（把大的多餘部分拿掉）。",
      "examVariations": "段考常考「同時問兩者價錢」或「如果買 2 份升級套餐和 1 份特餐共幾元」，先求出單價再計算即可。"
    }
  },
  {
    "id": "U08-S4-B-020",
    "legacyId": "u08_020",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "和差問題",
    "batch": "課本原型題",
    "source": "課本 p.131 例 5",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "用一條長 60 公分的繩子圍成一個長方形，長比寬多 6 公分。這個長方形的寬是多少公分？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "長方形寬",
          "units": 1,
          "role": "base"
        },
        {
          "label": "長方形長",
          "units": 1.5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "長 ＋ 寬 ＝ 30 公分（差 6 公分）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "18 公分",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "27 公分",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "24 公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "12 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(60 / 2 - 6) / 2",
      "expect": "12"
    },
    "explanation": {
      "examPurpose": "測驗學生能否先將長方形「周長 60 公分」除以 2 換成「長 ＋ 寬的和」，再套用和差公式求出寬。",
      "figureNote": "長方形周長包含 2 個長和 2 個寬，所以一組「長 ＋ 寬」只有周長的一半，也就是 30 公分。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：繩子長 60 公分是長方形的周長（2 個長 ＋ 2 個寬），先除以 2 算出 1 組「長 ＋ 寬」："
        },
        {
          "type": "eq",
          "expr": "60 ÷ 2 ＝ 30",
          "unit": "公分"
        },
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "第 2 步：已知「長 ＋ 寬 ＝ 30 公分」，且「長 − 寬 ＝ 6 公分」。把長多出來的 6 公分拿掉，剩下 2 個寬："
        },
        {
          "type": "eq",
          "expr": "(30 − 6) ÷ 2 ＝ 24 ÷ 2 ＝ 12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：12 公分"
        }
      ],
      "insight": "長方形周長與和差問題結合時，第一動作永遠是「周長 ÷ 2 ＝ 長 ＋ 寬」，絕不能直接拿周長當兩數和！",
      "distractorAnalysis": {
        "A": "用 (30 ＋ 6) ÷ 2 ＝ 18 公分算出的是「長」，沒有看清題目要問的是「寬」。",
        "B": "忘了周長有兩組長與寬，直接拿 60 當成「長 ＋ 寬」去算 (60 − 6) ÷ 2 ＝ 27 公分。",
        "C": "算出 30 − 6 ＝ 24 公分後忘記除以 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "長 ＋ 寬 ＝ 長方形周長 ÷ 2",
        "寬（小數）＝ (半周長 − 長寬差) ÷ 2"
      ],
      "conceptCompare": "長方形周長 ＝ (長 ＋ 寬) × 2，所以做和差問題前一定要先除 2。",
      "examVariations": "進階考題會接著問：「這個長方形的面積是多少平方公分？」算出長 18、寬 12 後再算 18 × 12 ＝ 216 平方公分。"
    }
  },
  {
    "id": "U08-S4-B-021",
    "legacyId": "u08_021",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "和差問題",
    "batch": "課本原型題",
    "source": "課本 p.132 例 6",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "哥哥有 12 顆糖果，弟弟有 8 顆糖果。哥哥要給弟弟幾顆，兩人的糖果才會一樣多？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "弟弟（8 顆）",
          "units": 2,
          "role": "base"
        },
        {
          "label": "哥哥（12 顆）",
          "units": 3,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "相差 4 顆（平分給弟弟一半）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "4 顆",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "B",
        "text": "2 顆",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "10 顆",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "D",
        "text": "1 顆",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(12 - 8) / 2",
      "expect": "2"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握「移多補少」的關鍵觀念：給出相差數量的一半，兩人就會一樣多。",
      "figureNote": "哥哥比弟弟多出來的 4 顆糖果中，只要把一半（2 顆）移給弟弟，兩人的線段就會一樣長。",
      "steps": [
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "先算哥哥比弟弟多幾顆，再把多出來的部分平分成兩份，分給弟弟一份："
        },
        {
          "type": "eq",
          "expr": "(12 − 8) ÷ 2 ＝ 4 ÷ 2 ＝ 2",
          "unit": "顆"
        },
        {
          "type": "text",
          "text": "驗算：哥哥 12 − 2 ＝ 10 顆，弟弟 8 ＋ 2 ＝ 10 顆，剛好一樣多。"
        },
        {
          "type": "answer",
          "text": "答：2 顆"
        }
      ],
      "insight": "移多補少大原則：給對方 1 顆，自己少 1、對方多 1，兩人的差距會縮小 2 顆！所以只要給「相差數 ÷ 2」。",
      "distractorAnalysis": {
        "C": "算出平均後兩人各有 (12 ＋ 8) ÷ 2 ＝ 10 顆，誤把最後每人擁有的數量當成答案。",
        "D": "除法計算或看題目出錯，算成 1 顆。",
        "A": "只算出 12 − 8 ＝ 4 顆卻忘記除以 2，如果給 4 顆會反過來變成弟弟 12 顆、哥哥 8 顆。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "移多補少移動量 ＝ (大數 − 小數) ÷ 2"
      ],
      "conceptCompare": "也可以用「先求平均」算：總數 12 ＋ 8 ＝ 20 顆，平分每人 10 顆，哥哥多出 12 − 10 ＝ 2 顆。",
      "examVariations": "反推題：「哥哥給弟弟 5 顆糖果後，兩人一樣多，原本哥哥比弟弟多幾顆？」答案是 5 × 2 ＝ 10 顆。"
    }
  },
  {
    "id": "U08-S4-B-022",
    "legacyId": "u08_022",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "和差問題",
    "batch": "課本原型題",
    "source": "課本 p.132 例 7",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "紅瓶裝了 800 毫升的水，綠瓶裝了 600 毫升的水。紅瓶要倒多少毫升到綠瓶，兩瓶的水才會一樣多？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "綠瓶（600 毫升）",
          "units": 3,
          "role": "base"
        },
        {
          "label": "紅瓶（800 毫升）",
          "units": 4,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "多出 200 毫升（倒一半給綠瓶）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "100 毫升",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "200 毫升",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "700 毫升",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "D",
        "text": "50 毫升",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(800 - 600) / 2",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把液體倒水一樣多的生活情境，套用「相差量 ÷ 2」來解決。",
      "figureNote": "紅瓶比綠瓶多出 200 毫升，把這多出來的 200 毫升倒一半（100 毫升）進綠瓶，兩瓶就會一樣多。",
      "steps": [
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "先算出紅瓶比綠瓶多幾毫升的水，再把相差的量平分："
        },
        {
          "type": "eq",
          "expr": "(800 − 600) ÷ 2 ＝ 200 ÷ 2 ＝ 100",
          "unit": "毫升"
        },
        {
          "type": "text",
          "text": "驗算：紅瓶 800 − 100 ＝ 700 毫升，綠瓶 600 ＋ 100 ＝ 700 毫升。"
        },
        {
          "type": "answer",
          "text": "答：100 毫升"
        }
      ],
      "insight": "兩瓶倒水使水量一樣多，不需要把兩瓶的水全部加起來算平均；直接算「相差 ÷ 2」最快。",
      "distractorAnalysis": {
        "C": "把平均水量 (800 ＋ 600) ÷ 2 ＝ 700 毫升當成要倒的水量。",
        "D": "除以 2 時多除了一次變成 50 毫升。",
        "B": "只算 800 − 600 ＝ 200 毫升卻忘記除以 2，倒 200 毫升過去會變成綠瓶 800、紅瓶 600。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "倒水量 ＝ (多的一瓶 − 少的一瓶) ÷ 2"
      ],
      "conceptCompare": "不論是糖果、零用錢還是裝水，只要是「一個給另一個使兩邊一樣多」，公式永遠都是「差 ÷ 2」。",
      "examVariations": "若題目先從紅瓶倒掉 40 毫升喝掉，再問倒多少到綠瓶一樣多，要先變成 760 與 600 再計算 (760 − 600) ÷ 2 ＝ 80 毫升。"
    }
  },
  {
    "id": "U08-S4-B-023",
    "legacyId": "u08_023",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "和差問題",
    "batch": "課本原型題",
    "source": "課本 p.133 素養評量",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "巧庭付了兩人的車資 225 元，思妤付了兩人的餐費 385 元。如果所有費用兩人平均分攤，巧庭應該再給思妤多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "巧庭（225 元）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "思妤（385 元）",
          "units": 1.7,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "思妤多付 160 元（巧庭補一半）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "80 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "305 元",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "C",
        "text": "160 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "D",
        "text": "610 元",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(385 - 225) / 2",
      "expect": "80"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把「兩人分別代墊費用後平均分攤」的帳務題，轉化為移多補少模型求解。",
      "figureNote": "思妤付得比較多，多出了 160 元；這多付的 160 元兩人各負擔一半，所以巧庭只要補還思妤 80 元。",
      "steps": [
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "方法一（算差額平分）：思妤比巧庭多付了 385 − 225 ＝ 160 元，把多付的錢平分一半："
        },
        {
          "type": "eq",
          "expr": "(385 − 225) ÷ 2 ＝ 160 ÷ 2 ＝ 80",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "方法二（算總和再分攤）：總共 225 ＋ 385 ＝ 610 元，每人應付 610 ÷ 2 ＝ 305 元，巧庭少付了 305 − 225 ＝ 80 元。"
        },
        {
          "type": "answer",
          "text": "答：80 元"
        }
      ],
      "insight": "分攤費用題跟移多補少一樣：誰付得多，少付的人就補「兩人付款差額的一半」給對方。",
      "distractorAnalysis": {
        "B": "算出每人應分攤的金額 (225 ＋ 385) ÷ 2 ＝ 305 元後，忘記扣掉巧庭已經付出的 225 元。",
        "D": "只算出了兩人的總花費 225 ＋ 385 ＝ 610 元，沒有算出要補給對方的金額。",
        "C": "直接把思妤多付的差額 385 − 225 ＝ 160 元當成答案，忘記除以 2（給 160 元會變成巧庭反而多出錢）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "少付者補付金額 ＝ (多付者金額 − 少付者金額) ÷ 2",
        "驗算：每人應付金額 ＝ 總花費 ÷ 2"
      ],
      "conceptCompare": "三個人分攤費用時，就必須使用「方法二」先算全部總花費 ÷ 3 得到每人應出金額，再看各人多退少補。",
      "examVariations": "段考常同時問「誰要給誰多少元？」，記得付款金額較小的人（巧庭）給付款較大的人（思妤）。"
    }
  },
  {
    "id": "U08-S4-B-024",
    "legacyId": "u08_024",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "和差問題",
    "batch": "課本原型題",
    "source": "課本 p.135 練習園地八",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "一件襯衫比一件裙子便宜 400 元，媽媽買了一件襯衫和一件裙子共花 1200 元。一件襯衫是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "襯衫",
          "units": 1,
          "role": "base"
        },
        {
          "label": "裙子",
          "units": 2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "共 1200 元（裙子貴 400 元）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "800 元",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "1600 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "400 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "600 元",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(1200 - 400) / 2",
      "expect": "400",
      "extraChecks": [
        {
          "expr": "(1200 + 400) / 2",
          "expect": "800"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在「便宜 400 元」的表述下，是否能分辨誰是較小的數（襯衫），並正確求得襯衫價錢。",
      "figureNote": "襯衫比裙子便宜 400 元，代表裙子比襯衫多 400 元；先從總價 1200 元扣掉多出的 400 元，剩下的錢剛好等於 2 件襯衫。",
      "steps": [
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "襯衫較便宜（小數），先把裙子多出來的 400 元從總花費拿掉，剩下 2 件襯衫的價錢："
        },
        {
          "type": "eq",
          "expr": "(1200 − 400) ÷ 2 ＝ 800 ÷ 2 ＝ 400",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "驗算：裙子 ＝ 400 ＋ 400 ＝ 800 元，400 ＋ 800 ＝ 1200 元，符合題意。"
        },
        {
          "type": "answer",
          "text": "答：400 元"
        }
      ],
      "insight": "題目說「甲比乙便宜 400 元」，意思就是「甲是小數、乙是大數」，求小數用 (和 − 差) ÷ 2。",
      "distractorAnalysis": {
        "A": "用 (1200 ＋ 400) ÷ 2 ＝ 800 元算出的是「裙子（大數）」的價錢，沒有看清題目要問的是襯衫。",
        "B": "算完 1200 ＋ 400 ＝ 1600 元後忘記除以 2。",
        "D": "直接拿總花費除以 2 算成 1200 ÷ 2 ＝ 600 元，忽略了兩件衣服相差 400 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "小數（較便宜者）＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "有些同學看到「400 元」跟答案「400 元」一樣會懷疑自己算錯，只要把裙子 800 ＋ 襯衫 400 加起來檢查等於 1200 元就能放心！",
      "examVariations": "若題目改成「買兩件襯衫和一件裙子共 1600 元」，可以先想像成「多加 400 元把裙子也看成襯衫，或者 3 件襯衫 ＋ 400 ＝ 1600 元」。"
    }
  },
  {
    "id": "U08-S4-B-025",
    "legacyId": "u08_025",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "和差問題",
    "batch": "課本原型題",
    "source": "課本 p.135 練習園地八",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "天平左盤放了 480 公克的物品，從左盤拿 50 公克移到右盤，天平剛好平衡。右盤原本放了多少公克？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "右盤原本",
          "units": 1.5,
          "role": "base"
        },
        {
          "label": "左盤（480 公克）",
          "units": 2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "原本相差 50 × 2 ＝ 100 公克"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "430 公克",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "B",
        "text": "380 公克",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "580 公克",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "D",
        "text": "290 公克",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "480 - 50 * 2",
      "expect": "380"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解移多補少的「逆推」原理：移動 50 公克能平衡，代表原本兩邊相差 50 × 2 ＝ 100 公克。",
      "figureNote": "左盤移走 50 公克變成 430 公克，右盤得到 50 公克後也變成 430 公克，所以原本左盤比右盤重 100 公克。",
      "steps": [
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "方法一（差兩倍法）：從左盤拿 50 公克到右盤就平衡，表示原本左盤比右盤重 50 × 2 ＝ 100 公克："
        },
        {
          "type": "eq",
          "expr": "480 − 50 × 2 ＝ 480 − 100 ＝ 380",
          "unit": "公克"
        },
        {
          "type": "text",
          "text": "方法二（平衡後回推）：左盤拿走 50 公克後剩 430 公克，所以右盤加上 50 公克後也是 430 公克，原本右盤為 430 − 50 ＝ 380 公克。"
        },
        {
          "type": "answer",
          "text": "答：380 公克"
        }
      ],
      "insight": "「甲給乙 50 就一樣多」代表原本「甲比乙多 50 × 2 ＝ 100」，千萬不要直接只減 50！",
      "distractorAnalysis": {
        "C": "加減方向相反，把右盤誤當成比較重的一邊，算成 480 ＋ 100 ＝ 580 公克。",
        "D": "套錯和差公式或加減計算失誤。",
        "A": "誤以為左盤原本只比右盤重 50 公克，直接算 480 − 50 ＝ 430 公克（這是移動後的重量，不是右盤原本的重量）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "移動 50 後平衡 ➔ 原先相差 ＝ 50 × 2 ＝ 100",
        "平衡法驗算：左盤 − 50 ＝ 右盤 ＋ 50"
      ],
      "conceptCompare": "容易搞混時，「方法二」最直覺：先算左盤移動後剩下 430 公克，這時兩邊相等所以右盤也是 430，再扣掉放進來的 50 就得到原本 380 公克。",
      "examVariations": "考題常改成：「甲有 480 元，甲給乙 50 元後兩人錢一樣多，請問兩人原本共有多少元？」480 ＋ 380 ＝ 860 元（或直接 430 × 2 ＝ 860 元）。"
    }
  },
  {
    "id": "U08-S1-O-026",
    "legacyId": "u08_101",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "間隔問題",
    "batch": "奧數天梯",
    "source": "Unit08 AI_SPEC level_3（雙重植樹重合）",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "周長 400 公尺的環形跑道，原本每隔 8 公尺插一面旗子。後來改成每隔 10 公尺插一面（起點位置不變）。一共有幾面旗子不用移動？",
    "options": [
      {
        "key": "A",
        "text": "11 面",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "B",
        "text": "10 面",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "9 面",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "5 面",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "400 / 40",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗學生能否結合「最小公倍數」與「封閉環形植樹」概念，找出兩種間隔同時重合的點數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：不用移動的旗子位置，必須同時是 8 公尺和 10 公尺的倍數。先找出 8 和 10 的最小公倍數："
        },
        {
          "type": "eq",
          "expr": "8 和 10 的最小公倍數 ＝ 40",
          "unit": "公尺"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"35\" y1=\"50\" x2=\"415\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"3\"/><circle cx=\"45\" cy=\"50\" r=\"7\" fill=\"#e11d48\"/><circle cx=\"120\" cy=\"50\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"195\" cy=\"50\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"270\" cy=\"50\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"345\" cy=\"50\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"405\" cy=\"50\" r=\"7\" fill=\"#e11d48\"/><text x=\"45\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">0 公尺（重合）</text><text x=\"405\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">40 公尺（重合）</text><text x=\"230\" y=\"82\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">每隔 40 公尺重合 1 次（封閉環形直接相除）</text><text x=\"230\" y=\"104\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">400 ÷ 40 ＝ 10 面旗子不用移動</text></svg>",
          "caption": "雙重植樹重合圖：8 與 10 的最小公倍數是 40，每 40 公尺重合一次"
        },
        {
          "type": "text",
          "text": "第 2 步：跑道是封閉的環形，沒有起點與終點重複的問題，所以重合的面數直接等於間隔數："
        },
        {
          "type": "eq",
          "expr": "400 ÷ 40 ＝ 10",
          "unit": "面"
        },
        {
          "type": "answer",
          "text": "答：10 面"
        }
      ],
      "insight": "雙重植樹找「不用移動」的點：先用最小公倍數求出新的重合間隔，再依照直線或封閉圖形算點數。",
      "distractorAnalysis": {
        "A": "環形跑道是封閉圖形，卻誤套用直線「兩端都設」公式多加 1，算成 10 ＋ 1 ＝ 11 面。",
        "C": "誤算成要再減 1，少算了起點那一面旗子，答成 9 面。",
        "D": "直接用 8 × 10 ＝ 80 公尺當作最小公倍數，算出 400 ÷ 80 ＝ 5 面。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "重合間隔 ＝ 原間隔與新間隔的最小公倍數",
        "環形（封閉）不用移動數 ＝ 總周長 ÷ 重合間隔"
      ],
      "conceptCompare": "如果題目改成「筆直的 400 公尺跑道（兩端都插旗）」，答案才會變成 400 ÷ 40 ＋ 1 ＝ 11 面。",
      "examVariations": "進階題會問：「拔起來重插的旗子有幾面？」原本共 400 ÷ 8 ＝ 50 面，扣掉不用動的 10 面，共有 40 面需要拔起。"
    }
  },
  {
    "id": "U08-S2-O-027",
    "legacyId": "u08_102",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規律",
    "category": "數形規律",
    "batch": "奧數天梯",
    "source": "Unit08 AI_SPEC level_3（火柴棒方格）",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "用火柴棒排成 2 排、每排 10 個相連的小正方形方格（共有 20 個小正方形），一共需要幾根火柴棒？",
    "options": [
      {
        "key": "A",
        "text": "80 根",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "50 根",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "61 根",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "52 根",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "3 * 10 + 11 * 2",
      "expect": "52"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把二維火柴方格拆成「所有橫線」與「所有直線」兩個方向分開計數，避免錯用單排公式或漏數封口線。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#e11d48\" stroke-width=\"3.5\" stroke-linecap=\"round\"><line x1=\"40\" y1=\"25\" x2=\"340\" y2=\"25\"/><line x1=\"40\" y1=\"55\" x2=\"340\" y2=\"55\"/><line x1=\"40\" y1=\"85\" x2=\"340\" y2=\"85\"/></g><g stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\"><line x1=\"40\" y1=\"25\" x2=\"40\" y2=\"85\"/><line x1=\"70\" y1=\"25\" x2=\"70\" y2=\"85\"/><line x1=\"100\" y1=\"25\" x2=\"100\" y2=\"85\"/><line x1=\"130\" y1=\"25\" x2=\"130\" y2=\"85\"/><line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"85\"/><line x1=\"190\" y1=\"25\" x2=\"190\" y2=\"85\"/><line x1=\"220\" y1=\"25\" x2=\"220\" y2=\"85\"/><line x1=\"250\" y1=\"25\" x2=\"250\" y2=\"85\"/><line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"85\"/><line x1=\"310\" y1=\"25\" x2=\"310\" y2=\"85\"/><line x1=\"340\" y1=\"25\" x2=\"340\" y2=\"85\"/></g><text x=\"355\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">3 條紅橫線</text><text x=\"355\" y=\"64\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">各 10 根＝30</text><text x=\"225\" y=\"112\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">11 條藍直線 × 2 根 ＝ 22 根（合計 30 ＋ 22 ＝ 52 根）</text></svg>",
          "caption": "方格分方向數法：紅線算所有橫邊（3 × 10），藍線算所有直邊（11 × 2）"
        },
        {
          "type": "text",
          "text": "2 排、每排 10 個正方形時，把橫的跟直的分開來算，絕對不會重複也不會漏掉："
        },
        {
          "type": "eq",
          "expr": "橫的：3 × 10 ＝ 30",
          "unit": "根"
        },
        {
          "type": "eq",
          "expr": "直的：(10 ＋ 1) × 2 ＝ 11 × 2 ＝ 22",
          "unit": "根"
        },
        {
          "type": "eq",
          "expr": "30 ＋ 22 ＝ 52",
          "unit": "根"
        },
        {
          "type": "answer",
          "text": "答：52 根"
        }
      ],
      "insight": "排成整齊的網格時，不要一個一個正方形數！分成「橫排線段」和「直行線段」：2 排格子有 2 ＋ 1 ＝ 3 條橫線；10 列格子有 10 ＋ 1 ＝ 11 條直線。",
      "distractorAnalysis": {
        "A": "沒有扣除共用邊，直接用 20 × 4 ＝ 80 根。",
        "B": "直線只算了 10 條而漏掉最右邊封口的那條，變成 30 ＋ 20 ＝ 50 根。",
        "C": "誤套用單排正方形規律（1 ＋ 3 × 20 ＝ 61 根），忘記上下兩排相接時還會多共用 10 根橫線。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "橫排棒數 ＝ (排數 ＋ 1) × 每排格數",
        "直行棒數 ＝ (每排格數 ＋ 1) × 排數"
      ],
      "conceptCompare": "這個「分方向數線段」的方法跟植樹間隔完全相通：10 個格子就像 10 個間隔，兩端都要有直線，所以共有 10 ＋ 1 ＝ 11 條直線。",
      "examVariations": "若改問「排成 3 排、每排 5 個正方形（共 15 格）需要幾根？」，橫的 4 × 5 ＝ 20、直的 6 × 3 ＝ 18，合計 38 根。"
    }
  },
  {
    "id": "U08-S3-O-028",
    "legacyId": "u08_103",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "選擇與組合",
    "batch": "奧數天梯",
    "source": "Unit08 AI_SPEC level_4（塗色問題）",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "一排有 4 個格子，用紅、黃、藍 3 種顏色塗色，每格塗一種顏色，而且相鄰兩格不能同色。共有幾種塗法？",
    "options": [
      {
        "key": "A",
        "text": "81 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "12 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "9 種",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "24 種",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "3 * 2 * 2 * 2",
      "expect": "24"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「相鄰不同色」只限制相鄰兩格，不限制間隔格子重複用色，並用乘法原理逐格推算。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 115\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"25\" y=\"20\" width=\"82\" height=\"46\" rx=\"6\" fill=\"#fee2e2\" stroke=\"#e11d48\" stroke-width=\"2.2\"/><text x=\"66\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#be123c\" text-anchor=\"middle\">第 1 格：3 種</text><text x=\"121\" y=\"49\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">×</text><rect x=\"135\" y=\"20\" width=\"82\" height=\"46\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2.2\"/><text x=\"176\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">第 2 格：2 種</text><text x=\"231\" y=\"49\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">×</text><rect x=\"245\" y=\"20\" width=\"82\" height=\"46\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"286\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">第 3 格：2 種</text><text x=\"341\" y=\"49\" font-size=\"16\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">×</text><rect x=\"355\" y=\"20\" width=\"82\" height=\"46\" rx=\"6\" fill=\"#fee2e2\" stroke=\"#e11d48\" stroke-width=\"2.2\"/><text x=\"396\" y=\"48\" font-size=\"13\" font-weight=\"700\" fill=\"#be123c\" text-anchor=\"middle\">第 4 格：2 種</text><text x=\"230\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">第 2、3、4 格只要不和前一格同色，各都有 2 種選法</text></svg>",
          "caption": "相鄰異色塗色圖：第 1 格 3 種，之後每格只需避開前一格顏色（各 2 種）"
        },
        {
          "type": "text",
          "text": "從左到右一格一格塗色：第 1 格沒有任何限制有 3 種選法；第 2 格只要不和第 1 格同色就有 2 種；第 3 格只要不和第 2 格同色，還是可以塗回第 1 格的顏色，所以一樣有 2 種；第 4 格也是 2 種："
        },
        {
          "type": "eq",
          "expr": "3 × 2 × 2 × 2 ＝ 24",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：24 種"
        }
      ],
      "insight": "相鄰異色塗色問題：第 3 格可以和第 1 格同色！只要跟「緊鄰的前一格」不一樣就好，所以後面每一格都是 2 種。",
      "distractorAnalysis": {
        "A": "忘了「相鄰兩格不能同色」的規定，直接把每格都當成 3 種算成 3 × 3 × 3 × 3 ＝ 81 種。",
        "B": "誤以為第 3 格不能跟第 1、2 格同色（把顏色當成不能重複使用），錯算成 3 × 2 × 1 × 2 ＝ 12 種。",
        "C": "把每格的選法誤用加法相加（3 ＋ 2 ＋ 2 ＋ 2 ＝ 9 種）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "一排格子相鄰異色 ＝ 顏色數 × (顏色數 − 1) × (顏色數 − 1) × ……"
      ],
      "conceptCompare": "排成「一排」和圍成「一圈」不一樣！排成一排時第 4 格只受第 3 格影響；若是 4 格圍成一圈，第 4 格還要避開第 1 格，就不能直接這樣連乘。",
      "examVariations": "若改用 4 種顏色塗 4 個格子（相鄰異色），算法就變成 4 × 3 × 3 × 3 ＝ 108 種。"
    }
  },
  {
    "id": "U08-S4-O-029",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "三人和差問題",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（三量和差基準轉換）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "甲、乙、丙三人合買一套科學百科全書，總共付了 180 元。已知甲比乙多付 15 元，乙比丙多付 12 元，請問甲付了多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "丙的金額",
          "units": 1,
          "role": "base"
        },
        {
          "label": "乙（多丙12元）",
          "units": 1.25,
          "role": "compare"
        },
        {
          "label": "甲（多丙27元）",
          "units": 1.6,
          "role": "extra"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "三人合計 180 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "59 元",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "141 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "74 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "78 元",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(180 - 12 - (12 + 15)) / 3 + 12 + 15",
      "expect": "74",
      "extraChecks": [
        {
          "expr": "74 + 59 + 47",
          "expect": "180"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否透過線段圖將「三人和差」對齊同一個最小基準量（丙），扣掉多餘差額後先平分出丙，再逐層推回甲。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以金額最少的「丙」為基準，找出乙和甲各自比丙多付幾元。乙比丙多 12 元，甲比乙多 15 元，所以甲比丙多 12 ＋ 15 ＝ 27 元。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：從總金額 180 元中，把乙和甲比丙多出的部分先扣掉，剩下的錢就剛好是 3 個丙一樣多。"
        },
        {
          "type": "eq",
          "expr": "180 − 12 − 27 ＝ 141",
          "unit": "元"
        },
        {
          "type": "eq",
          "expr": "丙 ＝ 141 ÷ 3 ＝ 47",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：由丙的 47 元往回算出甲（加 27 元），並檢驗三人合計是否為 180 元。"
        },
        {
          "type": "eq",
          "expr": "甲 ＝ 47 ＋ 27 ＝ 74",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：甲付了 74 元"
        }
      ],
      "insight": "三人和差題要先「找最小量當基準」，把多出來的差額全部剪掉後，再除以 3 平分！",
      "figureNote": "線段圖以最少的丙為基準，乙比丙多出 12 元、甲比丙多出 12＋15 ＝ 27 元，三人線段總和為 180 元。",
      "distractorAnalysis": {
        "A": "算出的是乙的金額 47 ＋ 12 ＝ 59 元，看錯題目問的對象，忘記甲還要再加 15 元。",
        "D": "誤以為三人總差額只有 12 ＋ 15 ＝ 27 元（漏算甲裡面的那份 12 元），算成 (180 − 27) ÷ 3 ＋ 27 ＝ 78 元。",
        "B": "把多餘差額 12 ＋ 27 ＝ 39 元從 180 元扣掉後，忘記除以 3 平分就直接回答 141 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "三量和差先求最小量 ＝ (總和 − 中量多出 − 最大量多出) ÷ 3",
        "算完後務必驗算三人的和與兩兩差額是否符合題意"
      ],
      "conceptCompare": "兩人（和差）是除以 2；三人（和差）對齊最小量扣掉差額後，要除以 3，最常錯在以為甲只比丙多 15 元。",
      "examVariations": "段考常改為三人的體重、成績或木棒長度比較，有時會改成「甲給丙幾元後三人一樣多」，此時直接算總平均 180 ÷ 3 ＝ 60 元即可比較。"
    }
  },
  {
    "id": "U08-S1-O-030",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "公路兩側電線桿與距離",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（道路兩旁植樹設燈）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "一條筆直的景觀大道全長 240 公尺，工程人員在道路的「兩側」每隔 15 公尺設置一盞太陽能路燈，且起點與終點兩端都要設置。這條大道總共需要幾盞路燈？",
    "options": [
      {
        "key": "A",
        "text": "17 盞",
        "trapCode": "U08_BOTH_SIDES_FORGET_MUL2"
      },
      {
        "key": "B",
        "text": "34 盞",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "32 盞",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "30 盞",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(240 / 15 + 1) * 2",
      "expect": "34"
    },
    "explanation": {
      "examPurpose": "測驗學生在直線兩端都設的間隔問題中，能否先求單側盞數（間隔數 ＋ 1），再注意「兩側／兩旁」必須乘以 2。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算道路「單側」總共有幾個 15 公尺的間隔。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 520 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"52\" width=\"440\" height=\"66\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><line x1=\"40\" y1=\"85\" x2=\"480\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"10 8\"/><circle cx=\"40\" cy=\"42\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"128\" cy=\"42\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"216\" cy=\"42\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"392\" cy=\"42\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"480\" cy=\"42\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"128\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"128\" cy=\"128\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"216\" cy=\"128\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"392\" cy=\"128\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"480\" cy=\"128\" r=\"7\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"304\" y=\"46\" font-size=\"15\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">……</text><text x=\"304\" y=\"132\" font-size=\"15\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">……</text><text x=\"84\" y=\"25\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">15 公尺</text><text x=\"172\" y=\"25\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">15 公尺</text><text x=\"436\" y=\"25\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">15 公尺</text><text x=\"260\" y=\"160\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">全長 240 公尺（單側 16 間隔 ➔ 17 盞；兩側共 34 盞）</text></svg>",
          "caption": "道路「兩側」都要設燈，單側兩端都設需 16 ＋ 1 ＝ 17 盞，兩側共 17 × 2 ＝ 34 盞"
        },
        {
          "type": "eq",
          "expr": "240 ÷ 15 ＝ 16",
          "unit": "個間隔"
        },
        {
          "type": "text",
          "text": "第 2 步：因為兩端都要設路燈，單側盞數等於間隔數加 1。"
        },
        {
          "type": "eq",
          "expr": "16 ＋ 1 ＝ 17",
          "unit": "盞（單側）"
        },
        {
          "type": "text",
          "text": "第 3 步：題目要求道路「兩側」都設，所以要把單側盞數乘以 2。"
        },
        {
          "type": "eq",
          "expr": "17 × 2 ＝ 34",
          "unit": "盞"
        },
        {
          "type": "answer",
          "text": "答：總共需要 34 盞路燈"
        }
      ],
      "insight": "看到「道路兩側、橋樑兩旁、走廊左右兩邊」這類關鍵字，一定要在最後乘以 2！",
      "distractorAnalysis": {
        "A": "只算出了道路其中一側的路燈數 16 ＋ 1 ＝ 17 盞，忘記兩側都要設置而少乘 2。",
        "D": "誤把「兩端都設」記成「兩端都不設」，算出單側 16 − 1 ＝ 15 盞，兩側 30 盞。",
        "C": "算出 16 個間隔後，忘記兩端都設要加 1，直接算成 16 × 2 ＝ 32 盞。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直線兩端都設（單側）＝ 總長 ÷ 間隔長 ＋ 1",
        "道路兩側總數 ＝ 單側盞數 × 2"
      ],
      "conceptCompare": "直線兩端都設要「＋1」，兩端都不設要「−1」，只有環形封閉路線才是「間隔數 ＝ 物體數」。別看到道路題也套封閉公式。",
      "examVariations": "進階題會問「一共裝了 34 盞路燈，已知兩側兩端都有裝，問相鄰兩盞燈相距幾公尺？」，要先 34 ÷ 2 ＝ 17 盞，再減 1 得 16 個間隔，最後 240 ÷ 16 ＝ 15 公尺。"
    }
  },
  {
    "id": "U08-RV-O-031",
    "legacyId": null,
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "雞兔同籠標準假設法",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（大小車載客假設法）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "六年級舉辦戶外教學，租用了大車與小車共 14 輛，剛好把 94 位師生全部載滿。已知每輛大車可載 8 人、每輛小車可載 5 人，請問共租用了幾輛大車？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "小車每輛 (5人)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "大車每輛 (8人)",
          "units": 1.6,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "每換 1 輛多載 8 − 5 ＝ 3 人"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "6 輛",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "8 輛",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "12 輛",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "D",
        "text": "9 輛",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(94 - 5 * 14) / (8 - 5)",
      "expect": "8",
      "extraChecks": [
        {
          "expr": "8 * 8 + 6 * 5",
          "expect": "94"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生運用「假設法」解決雞兔同籠變形問題的能力，並能正確對應替換對象與人數差。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設這 14 輛車全部都是「小車」，先算出總共可以載多少人。"
        },
        {
          "type": "eq",
          "expr": "5 × 14 ＝ 70",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "第 2 步：比較與實際人數 94 人的差距，並看每次把 1 輛小車換成大車能多載幾人。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "94 − 70 ＝ 24",
          "unit": "人（少算的人數）"
        },
        {
          "type": "eq",
          "expr": "24 ÷ (8 − 5) ＝ 8",
          "unit": "輛（大車）"
        },
        {
          "type": "answer",
          "text": "答：共租用了 8 輛大車"
        }
      ],
      "insight": "「假設全部是小車，算出來就會是大車！」假設的對象和算出來的對象剛好相反，題目問大車就直接假設全是小車最快。",
      "figureNote": "線段圖顯示每將 1 輛小車換成大車，載客量就會增加 8 − 5 ＝ 3 人，總差額 24 人除以 3 即得大車輛數。",
      "distractorAnalysis": {
        "C": "計算大車與小車載客差時誤算成差 2 人，得出 24 ÷ 2 ＝ 12 輛。",
        "D": "計算 94 − 70 時誤減成 27 人，再除以 3 得到 9 輛。",
        "A": "求出小車有 6 輛後忘記減回大車，或假設全是大車算出小車就直接作答。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全為小量 ➔ 大量數 ＝ (實際總量 − 小量單價 × 總數) ÷ (大量單價 − 小量單價)",
        "假設法算出來的數量永遠是「被替換進去」的那一種"
      ],
      "conceptCompare": "假設全是大車（8 × 14 ＝ 112 人），多出 112 − 94 ＝ 18 人，18 ÷ 3 ＝ 6 輛是小車，最後仍須算 14 − 6 ＝ 8 輛大車；若一開始就假設全是小車，就能一步直達大車答案。",
      "examVariations": "常見換皮題包括大小和尚吃饅頭、兩人與三人協力車、兩種面額鈔票或郵票混合問題。"
    }
  },
  {
    "id": "U08-S2-O-032",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規則",
    "category": "三層實心與空心方陣換算",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（三層空心方陣總人數）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "校慶大會操排成一個 3 層的空心正方形方陣，最外層每一邊站了 16 位學生，相鄰兩層的總人數都相差 8 人。請問這個 3 層空心方陣總共有幾位學生？",
    "options": [
      {
        "key": "A",
        "text": "168 位",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "112 位",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "148 位",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "156 位",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(16 - 1) * 4 + (14 - 1) * 4 + (12 - 1) * 4",
      "expect": "156",
      "extraChecks": [
        {
          "expr": "16 * 16 - 10 * 10",
          "expect": "156"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解空心正方形每層人數需扣除 4 個重複頂點，以及多層方陣相鄰兩層每邊少 2 人、總數少 8 人的規律。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：算出最外層人數。正方形每邊 16 人，四個角落會重複計算一次，所以最外層共有 (16 − 1) × 4 ＝ 60 人。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"24\" y=\"18\" width=\"174\" height=\"174\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"3\"/><rect x=\"48\" y=\"42\" width=\"126\" height=\"126\" fill=\"#eef2ff\" stroke=\"#4f46e5\" stroke-width=\"3\"/><rect x=\"72\" y=\"66\" width=\"78\" height=\"78\" fill=\"#f0fdfa\" stroke=\"#0d9488\" stroke-width=\"3\"/><rect x=\"94\" y=\"88\" width=\"34\" height=\"34\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><text x=\"111\" y=\"110\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">空心</text><text x=\"215\" y=\"52\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">外層每邊16人：(16−1)×4 ＝ 60 人</text><text x=\"215\" y=\"96\" font-size=\"12\" font-weight=\"bold\" fill=\"#4338ca\">中層每邊14人：60 − 8 ＝ 52 人</text><text x=\"215\" y=\"140\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f766e\">內層每邊12人：52 − 8 ＝ 44 人</text><text x=\"215\" y=\"182\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\">合計：60 ＋ 52 ＋ 44 ＝ 156 人</text></svg>",
          "caption": "往內縮 1 層，左右上下各少 1 人，因此每邊少 2 人、整圈少 8 人"
        },
        {
          "type": "eq",
          "expr": "中層人數 ＝ 60 − 8 ＝ 52",
          "unit": "人"
        },
        {
          "type": "eq",
          "expr": "內層人數 ＝ 52 − 8 ＝ 44",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "第 2 步：把三層人數相加（或用中層平均 52 × 3）。"
        },
        {
          "type": "eq",
          "expr": "60 ＋ 52 ＋ 44 ＝ 156",
          "unit": "人"
        },
        {
          "type": "answer",
          "text": "答：總共有 156 位學生"
        }
      ],
      "insight": "多層正方形方陣往內 1 層，每邊會少 2 人（頭尾各縮進 1 格），因此整圈總人數固定少 8 人！",
      "distractorAnalysis": {
        "A": "每層計算時忘記扣除 4 個重複角落，錯算成 16×4 ＋ 14×4 ＋ 12×4 ＝ 168 位。",
        "B": "只加了外兩層 60 ＋ 52 ＝ 112 位而漏掉最內層；或用大正方形減小正方形面積時誤減 12×12 得到 256 − 144 ＝ 112 位。",
        "C": "三層相加 60 ＋ 52 ＋ 44 時十位與個位進位失誤，錯算成 148 位。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "單層方陣總人數 ＝ (每邊人數 − 1) × 4",
        "多層空心方陣：總人數 ＝ 中間層人數 × 層數（層數為奇數時）"
      ],
      "conceptCompare": "也可以用「大實心 − 小空心」來算：3 層往內共縮 6 人，內部空心每邊為 16 − 2×3 ＝ 10 人，因此 16 × 16 − 10 × 10 ＝ 256 − 100 ＝ 156 位！",
      "examVariations": "反推題會給「3 層空心方陣共有 156 人」，先用 156 ÷ 3 ＝ 52 求出中層人數，再加 8 得最外層 60 人，最後 60 ÷ 4 ＋ 1 ＝ 每邊 16 人。"
    }
  },
  {
    "id": "U08-RV-O-033",
    "legacyId": null,
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "測驗答對得5倒扣2",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（倒扣計分假設法）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "數學競試共有 20 題選擇題，規定答對 1 題得 5 分，答錯 1 題不但不給分還要倒扣 2 分（每題都必須作答）。小宇全部寫完後拿到 72 分，請問他答對了幾題？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "小宇實得分數",
          "units": 1.44,
          "role": "compare"
        },
        {
          "label": "20題全對滿分",
          "units": 2,
          "role": "base"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "少了 28 分（每錯 1 題少 5＋2 ＝ 7 分）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "15 題",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "4 題",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "6 題",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "D",
        "text": "16 題",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "20 - (20 * 5 - 72) / (5 + 2)",
      "expect": "16",
      "extraChecks": [
        {
          "expr": "16 * 5 - 4 * 2",
          "expect": "72"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在「倒扣計分」情境下，能否正確算出錯 1 題的總分差為「原本可得的 5 分 ＋ 倒扣的 2 分 ＝ 7 分」，而非只扣 2 分或 5 − 2 ＝ 3 分。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 20 題全部答對，總分應該是 5 × 20 ＝ 100 分。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "100 − 72 ＝ 28",
          "unit": "分（被扣掉的分數）"
        },
        {
          "type": "text",
          "text": "第 2 步：每錯 1 題，不只沒拿到 5 分，還倒扣 2 分，所以一來一回共相差 5 ＋ 2 ＝ 7 分。"
        },
        {
          "type": "eq",
          "expr": "28 ÷ (5 ＋ 2) ＝ 4",
          "unit": "題（答錯）"
        },
        {
          "type": "eq",
          "expr": "20 − 4 ＝ 16",
          "unit": "題（答對）"
        },
        {
          "type": "answer",
          "text": "答：他答對了 16 題"
        }
      ],
      "insight": "「得分與倒扣」的單題差距要把兩數「相加」（5 ＋ 2 ＝ 7 分），因為你既沒賺到 5 分，又賠掉 2 分！",
      "figureNote": "線段圖對比滿分 100 分與實得 72 分的差距 28 分，將少掉的 28 分除以每錯 1 題損失的 7 分即得答錯 4 題。",
      "distractorAnalysis": {
        "B": "只算出答錯的 4 題就直接選 4 題，忘記題目問的是「答對幾題」。",
        "C": "誤以為錯 1 題只比滿分少 2 分（沒加進拿不到的 5 分），算成錯 28 ÷ 2 ＝ 14 題，剩對 6 題。",
        "A": "減法 100 − 72 誤算成 35 分，導致算成錯 5 題、答對 15 題。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "錯 1 題總損失 ＝ 答對得分 ＋ 答錯倒扣分",
        "答錯題數 ＝ (滿分 − 實得分數) ÷ (得分 ＋ 倒扣分)"
      ],
      "conceptCompare": "一般雞兔同籠（兩者都是正數）單個差距用「大 − 小」；有「倒扣／賠錢」時，一正一負之間的距離要用「加」的，就像溫度從零上 5 度降到零下 2 度共降了 7 度。",
      "examVariations": "若題目多加入「未作答 0 分」，則需先由條件鎖定未作答題數，再對剩餘作答題套用假設法。"
    }
  },
  {
    "id": "U08-S4-O-034",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "年齡和反推今年與過幾年",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（年齡差不變與和差應用）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "4 年前爸爸比兒子大 28 歲，今年父子兩人的年齡總和剛好是 54 歲。請問兒子「今年」是幾歲？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "兒子今年",
          "units": 1,
          "role": "base"
        },
        {
          "label": "爸爸今年",
          "units": 2.2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "年齡差永遠不變 ＝ 28 歲"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "13 歲",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "11 歲",
        "trapCode": "U08_AGE_DIFF_CHANGE"
      },
      {
        "key": "C",
        "text": "9 歲",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "D",
        "text": "26 歲",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(54 - 28) / 2",
      "expect": "13",
      "extraChecks": [
        {
          "expr": "(54 + 28) / 2",
          "expect": "41"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握「兩人年齡差永遠不變」的核心性質，並能正確套用和差公式求出今年年齡。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：無論經過幾年，爸爸與兒子每年都會同時長大 1 歲，因此「年齡差永遠不變」。4 年前大 28 歲，今年爸爸一樣比兒子大 28 歲。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：已知今年兩人年齡和是 54 歲、年齡差是 28 歲，套用和差問題求小數（兒子今年）。"
        },
        {
          "type": "eq",
          "expr": "(54 − 28) ÷ 2 ＝ 13",
          "unit": "歲"
        },
        {
          "type": "answer",
          "text": "答：兒子今年是 13 歲"
        }
      ],
      "insight": "年齡問題的黃金定律：「年齡和每年會加 2（兩人各加 1），但年齡差永遠不變！」",
      "figureNote": "線段圖表示今年爸爸與兒子的年齡合計 54 歲，爸爸永遠比兒子多出 28 歲，扣掉 28 歲後剩下的兩小段相等。",
      "distractorAnalysis": {
        "B": "誤以為經過 4 年後年齡差也會變大 4 歲變成 32 歲，錯算成 (54 − 32) ÷ 2 ＝ 11 歲。",
        "D": "算出今年和減差 54 − 28 ＝ 26 歲後，忘記除以 2 就直接作答。",
        "C": "先換算 4 年前年紀和 54 − 8 ＝ 46 歲，算出 4 年前兒子 (46 − 28) ÷ 2 ＝ 9 歲後，卻忘記加回 4 年變成今年。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差永遠不變（過去、現在、未來都一樣）",
        "較小年齡 ＝ (今年年齡和 − 年齡差) ÷ 2"
      ],
      "conceptCompare": "如果這題先轉成 4 年前算，記得兩個人合計要扣掉 4 × 2 ＝ 8 歲，算出兒子 4 年前 9 歲後一定要再加 4 歲回到今年。",
      "examVariations": "延伸題常繼續追問：「再過幾年，爸爸的年齡會剛好是兒子的 3 倍？」只要利用年齡差 28 歲 ＝ 2 倍差，就能算出那時兒子 14 歲，也就是 1 年後！"
    }
  },
  {
    "id": "U08-S1-O-035",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "環形花圃轉角必種間隔",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（長方形四周轉角植樹）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "社區有一塊長 96 公尺、寬 72 公尺的長方形廣場，想在廣場四周邊界等距離種樹，規定相鄰兩棵樹的距離必須相等，且四個轉角處都一定要種樹。請問最少需要種幾棵樹？",
    "options": [
      {
        "key": "A",
        "text": "15 棵",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "B",
        "text": "7 棵",
        "trapCode": "U08_BOTH_SIDES_FORGET_MUL2"
      },
      {
        "key": "C",
        "text": "14 棵",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "18 棵",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(96 + 72) * 2 / 24",
      "expect": "14"
    },
    "explanation": {
      "examPurpose": "測驗學生能否結合「最大公因數求最大間隔」與「長方形封閉周長植樹（棵數 ＝ 總間隔數）」，避免重複計算 4 個轉角。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：要讓樹的總數「最少」，相鄰兩棵樹的間隔就要「最大」。因為四個轉角必種樹，間隔必須同時整除長 96 公尺與寬 72 公尺，即求 96 和 72 的最大公因數。"
        },
        {
          "type": "eq",
          "expr": "96 與 72 的最大公因數 ＝ 24",
          "unit": "公尺（最大間隔）"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"36\" width=\"280\" height=\"150\" fill=\"#f0fdf4\" stroke=\"#15803d\" stroke-width=\"2.5\"/><circle cx=\"80\" cy=\"36\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"150\" cy=\"36\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"220\" cy=\"36\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"290\" cy=\"36\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"360\" cy=\"36\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"360\" cy=\"86\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"360\" cy=\"136\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"360\" cy=\"186\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"290\" cy=\"186\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"220\" cy=\"186\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"150\" cy=\"186\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"80\" cy=\"186\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"80\" cy=\"136\" r=\"5\" fill=\"#16a34a\"/><circle cx=\"80\" cy=\"86\" r=\"5\" fill=\"#16a34a\"/><text x=\"220\" y=\"22\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">長 96 公尺（4 個 24 公尺間隔）</text><text x=\"410\" y=\"114\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">寬 72 公尺</text><text x=\"410\" y=\"132\" font-size=\"12\" fill=\"#15803d\" text-anchor=\"middle\">（3 個間隔）</text><text x=\"220\" y=\"116\" font-size=\"13\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">紅點＝4 個必種轉角，總周長封閉</text></svg>",
          "caption": "長邊 4 間隔、寬邊 3 間隔，長方形四周屬於封閉圖形，棵數 ＝ 總間隔數 ＝ (4＋3)×2 ＝ 14 棵"
        },
        {
          "type": "text",
          "text": "第 2 步：算出廣場周長並除以最大間隔 24 公尺。因為長方形四周是封閉迴圈，總棵數等於總間隔數。"
        },
        {
          "type": "eq",
          "expr": "(96 ＋ 72) × 2 ÷ 24 ＝ 14",
          "unit": "棵"
        },
        {
          "type": "answer",
          "text": "答：最少需要種 14 棵樹"
        }
      ],
      "insight": "長方形或三角形四周圍種樹也是「封閉圖形」！千萬別拆成四條邊各加 1 再相加，那樣會把四個轉角多算一遍。",
      "distractorAnalysis": {
        "A": "算出總間隔 14 個後，誤以為還要像直線兩端都種那樣加 1，得到 15 棵。",
        "B": "只算了一個長邊和一個寬邊 (96 ＋ 72) ÷ 24 ＝ 7 棵，忘記周長有兩組長和寬要乘以 2。",
        "D": "分別把四條邊套用兩端都種加 1，算成 (4 ＋ 1) × 2 ＋ (3 ＋ 1) × 2 ＝ 18 棵，將 4 個轉角都重複算了兩次。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "四個轉角必種求最少棵數 ➔ 間隔 ＝ 長與寬的最大公因數",
        "封閉多邊形植樹：總棵數 ＝ 總周長 ÷ 間隔長"
      ],
      "conceptCompare": "若題目改成「四個轉角不種樹（只立雕像）」，則總樹數要在封閉棵數 14 棵中扣掉 4 個轉角位置，變成 14 − 4 ＝ 10 棵。",
      "examVariations": "若長寬改為 96 公尺與 72 公尺且限定間隔至少 10 公尺以上，可用 24 的因數（24 或 12）測試不同的植樹方案。"
    }
  },
  {
    "id": "U08-S3-O-036",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "循環賽與握手組合",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（單循環賽總場數）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "全國國小躲避球錦標賽決賽共有 9 支隊伍參加，賽制採用「單循環賽」（任兩支隊伍之間都要正好比賽 1 場）。請問整個決賽總共要進行幾場比賽？",
    "options": [
      {
        "key": "A",
        "text": "72 場",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "45 場",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "36 場",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "32 場",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "9 * 8 / 2",
      "expect": "36",
      "extraChecks": [
        {
          "expr": "8 + 7 + 6 + 5 + 4 + 3 + 2 + 1",
          "expect": "36"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生處理「任選兩人配對／單循環賽」時，能否分辨不計先後順序（甲對乙與乙對甲為同一場）而必須除以 2 避免重複計算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：9 支隊伍中，每一隊都要和其餘 9 − 1 ＝ 8 隊各比賽 1 場，看似共有 9 × 8 ＝ 72 場。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 210\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"130\" cy=\"105\" r=\"76\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/><line x1=\"130\" y1=\"29\" x2=\"179\" y2=\"47\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"130\" y1=\"29\" x2=\"205\" y2=\"92\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"130\" y1=\"29\" x2=\"196\" y2=\"143\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"130\" y1=\"29\" x2=\"156\" y2=\"176\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"130\" y1=\"29\" x2=\"104\" y2=\"176\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"130\" y1=\"29\" x2=\"64\" y2=\"143\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"130\" y1=\"29\" x2=\"55\" y2=\"92\" stroke=\"#e11d48\" stroke-width=\"2\"/><line x1=\"130\" y1=\"29\" x2=\"81\" y2=\"47\" stroke=\"#e11d48\" stroke-width=\"2\"/><circle cx=\"130\" cy=\"29\" r=\"10\" fill=\"#e11d48\"/><text x=\"130\" y=\"33\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">1</text><circle cx=\"179\" cy=\"47\" r=\"9\" fill=\"#3b82f6\"/><text x=\"179\" y=\"51\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">2</text><circle cx=\"205\" cy=\"92\" r=\"9\" fill=\"#3b82f6\"/><text x=\"205\" y=\"96\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">3</text><circle cx=\"196\" cy=\"143\" r=\"9\" fill=\"#3b82f6\"/><text x=\"196\" y=\"147\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">4</text><circle cx=\"156\" cy=\"176\" r=\"9\" fill=\"#3b82f6\"/><text x=\"156\" y=\"180\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">5</text><circle cx=\"104\" cy=\"176\" r=\"9\" fill=\"#3b82f6\"/><text x=\"104\" y=\"180\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">6</text><circle cx=\"64\" cy=\"143\" r=\"9\" fill=\"#3b82f6\"/><text x=\"64\" y=\"147\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">7</text><circle cx=\"55\" cy=\"92\" r=\"9\" fill=\"#3b82f6\"/><text x=\"55\" y=\"96\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">8</text><circle cx=\"81\" cy=\"47\" r=\"9\" fill=\"#3b82f6\"/><text x=\"81\" y=\"51\" font-size=\"10\" fill=\"#ffffff\" text-anchor=\"middle\">9</text><text x=\"335\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">第 1 隊要打 8 場</text><text x=\"335\" y=\"104\" font-size=\"13\" fill=\"#475569\" text-anchor=\"middle\">「1對2」和「2對1」是同一場</text><text x=\"335\" y=\"136\" font-size=\"13\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">9 × 8 ÷ 2 ＝ 36 場</text><text x=\"335\" y=\"166\" font-size=\"12\" fill=\"#0f766e\" text-anchor=\"middle\">（或 8＋7＋6＋5＋4＋3＋2＋1 ＝ 36）</text></svg>",
          "caption": "每條連線代表 1 場比賽，若直接 9 × 8 會讓每條線被前後兩隊重複算到 2 次"
        },
        {
          "type": "text",
          "text": "第 2 步：因為「甲隊對乙隊」和「乙隊對甲隊」是同一場比賽，每場都被重複算了 2 次，所以必須除以 2。"
        },
        {
          "type": "eq",
          "expr": "9 × 8 ÷ 2 ＝ 36",
          "unit": "場"
        },
        {
          "type": "answer",
          "text": "答：總共要進行 36 場比賽"
        }
      ],
      "insight": "握手、單循環賽、圓周上任兩點連成線段，全都是同一套做法：人數 × (人數 − 1) ÷ 2！",
      "distractorAnalysis": {
        "A": "直接算成 9 × 8 ＝ 72 場，忘記每場比賽由兩隊共同進行、重複算了 2 次而少除以 2。",
        "D": "累加 8 ＋ 7 ＋ 6 ＋ 5 ＋ 4 ＋ 3 ＋ 2 ＋ 1 時漏算某項，誤算成 32 場。",
        "B": "誤把累加起點從 9 開始加（9＋8＋…＋1 ＝ 45），或算成 9 × 10 ÷ 2 ＝ 45 場（自己不能跟自己比賽）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "單循環賽總場數 ＝ 隊數 × (隊數 − 1) ÷ 2",
        "雙循環賽（分主客場）總場數 ＝ 隊數 × (隊數 − 1)"
      ],
      "conceptCompare": "注意區分「單循環賽」與「單淘汰賽」：9 隊打單循環賽要 36 場；若是 9 隊打單淘汰賽（輸一場就出局），每場淘汰 1 隊、留下 1 個冠軍，只需要 9 − 1 ＝ 8 場！",
      "examVariations": "若改問「火車站從第 1 站到第 9 站，單程共要印幾種不同票價的車票？（往返不同站）」，若不分方向是 36 種，若去程與回程算不同車票則是 72 種。"
    }
  },
  {
    "id": "U08-RV-O-037",
    "legacyId": null,
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "相向相遇問題",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（相向相遇與速度和）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "小晴與阿哲分別站在相距 900 公尺的筆直步道兩端，兩人同時出發「相向而行」（面對面走向對方）。已知小晴每分鐘走 65 公尺，阿哲每分鐘走 85 公尺，請問出發幾分鐘後兩人會相遇？",
    "options": [
      {
        "key": "A",
        "text": "45 分鐘",
        "trapCode": "U08_SPEED_DIR_CONFUSION"
      },
      {
        "key": "B",
        "text": "7 分鐘",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "5 分鐘",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6 分鐘",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "900 / (65 + 85)",
      "expect": "6"
    },
    "explanation": {
      "examPurpose": "測驗學生在兩人「相向而行」的相遇問題中，能否正確使用「速度和」（距離縮短的速率）來計算相遇時間。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：兩人面對面相向走來，每過 1 分鐘，兩人距離就會一起縮短 65 ＋ 85 ＝ 150 公尺。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 480 155\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"95\" x2=\"440\" y2=\"95\" stroke=\"#334155\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"95\" r=\"6\" fill=\"#e11d48\"/><circle cx=\"440\" cy=\"95\" r=\"6\" fill=\"#2563eb\"/><path d=\"M 52 75 L 150 75\" stroke=\"#e11d48\" stroke-width=\"3\"/><polygon points=\"150,69 164,75 150,81\" fill=\"#e11d48\"/><path d=\"M 428 75 L 310 75\" stroke=\"#2563eb\" stroke-width=\"3\"/><polygon points=\"310,69 296,75 310,81\" fill=\"#2563eb\"/><line x1=\"214\" y1=\"82\" x2=\"214\" y2=\"108\" stroke=\"#0d9488\" stroke-width=\"2.5\" stroke-dasharray=\"3 2\"/><text x=\"102\" y=\"60\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">小晴 65 公尺／分</text><text x=\"368\" y=\"60\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">阿哲 85 公尺／分</text><text x=\"214\" y=\"42\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f766e\" text-anchor=\"middle\">相遇點</text><text x=\"240\" y=\"132\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">相距 900 公尺（每分鐘共縮短 65＋85 ＝ 150 公尺）</text></svg>",
          "caption": "兩人相向而行時，雙方走過的距離加起來正好等於總距離 900 公尺"
        },
        {
          "type": "eq",
          "expr": "65 ＋ 85 ＝ 150",
          "unit": "公尺／分鐘（速度和）"
        },
        {
          "type": "text",
          "text": "第 2 步：用總距離除以速度和，求出幾分鐘後兩人會合。"
        },
        {
          "type": "eq",
          "expr": "900 ÷ 150 ＝ 6",
          "unit": "分鐘"
        },
        {
          "type": "answer",
          "text": "答：出發 6 分鐘後兩人會相遇"
        }
      ],
      "insight": "「相向相遇用速度和（兩速相加），同向追趕用速度差（兩速相減）」。先看箭頭方向再決定加還是減！",
      "distractorAnalysis": {
        "A": "混淆相向與同向方向，誤用速度差計算成 900 ÷ (85 − 65) ＝ 45 分鐘。",
        "B": "算出 6 分鐘後受間隔植樹題影響，多加 1 分鐘誤答 7 分鐘。",
        "C": "計算速度和 65 ＋ 85 時進位出錯誤算成 180，算得 900 ÷ 180 ＝ 5 分鐘。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "相遇時間 ＝ 總距離 ÷ (甲速率 ＋ 乙速率)",
        "相遇時兩人各走距離 ＝ 各自速率 × 相遇時間"
      ],
      "conceptCompare": "相遇時，阿哲走得比較快，所以會走過中點（走了 85 × 6 ＝ 510 公尺），小晴走了 65 × 6 ＝ 390 公尺，兩人剛好在中點偏小晴那側 60 公尺處相遇。",
      "examVariations": "若題目改成「兩人相向走，途中還相距 150 公尺時過了幾分鐘？」，只要把目標縮短距離改成 900 − 150 ＝ 750 公尺，再除以 150 得 5 分鐘。"
    }
  },
  {
    "id": "U08-S2-O-038",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "數形規則",
    "category": "週期餘數兼數字總和",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8（循環數列前段總和）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "有一串數字依照「3, 1, 4, 2, 3, 1, 4, 2, …」的規律不斷重複排列下去。請問這串數列從頭數起「前 35 個數字」的總和是多少？",
    "options": [
      {
        "key": "A",
        "text": "84",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "B",
        "text": "88",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "90",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "78",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(3 + 1 + 4 + 2) * 8 + (3 + 1 + 4)",
      "expect": "88"
    },
    "explanation": {
      "examPurpose": "測驗學生面對週期數列時，是否能透過「分組求組數與餘數」計算前段總和，避免誤把餘數當成只取單一項。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：找出循環週期與每組的數字總和。這串數字以「3, 1, 4, 2」4 個為一組不斷重複，每組總和為 3 ＋ 1 ＋ 4 ＋ 2 ＝ 10。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 490 165\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"34\" width=\"118\" height=\"52\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"79\" y=\"65\" font-size=\"15\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">3, 1, 4, 2</text><text x=\"79\" y=\"108\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">第 1 組（和＝10）</text><text x=\"162\" y=\"65\" font-size=\"16\" font-weight=\"bold\" fill=\"#64748b\" text-anchor=\"middle\">……</text><rect x=\"186\" y=\"34\" width=\"118\" height=\"52\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"245\" y=\"65\" font-size=\"15\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">3, 1, 4, 2</text><text x=\"245\" y=\"108\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">第 8 組（和＝10）</text><rect x=\"328\" y=\"34\" width=\"136\" height=\"52\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><text x=\"396\" y=\"65\" font-size=\"15\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">3, 1, 4</text><text x=\"396\" y=\"108\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">餘 3 個（和＝8）</text><text x=\"245\" y=\"146\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">前 35 個數字 ＝ 8 整組 ＋ 餘 3 個 ＝ 80 ＋ 8 ＝ 88</text></svg>",
          "caption": "35 ÷ 4 ＝ 8 餘 3，代表有 8 個完整循環組，加上新的一組前 3 個數字"
        },
        {
          "type": "eq",
          "expr": "35 ÷ 4 ＝ 8 … 3",
          "unit": "組（餘 3 個）"
        },
        {
          "type": "text",
          "text": "第 2 步：計算 8 整組的和，再加上餘下 3 個數字（依序為 3、1、4）。"
        },
        {
          "type": "eq",
          "expr": "10 × 8 ＋ (3 ＋ 1 ＋ 4) ＝ 88",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：前 35 個數字的總和是 88"
        }
      ],
      "insight": "求「第 35 個是誰」看餘數第 3 個（是 4）；但求「前 35 個的總和」必須把餘下的 3 個數字「全部」加起來（3 ＋ 1 ＋ 4 ＝ 8）！",
      "distractorAnalysis": {
        "A": "混淆題目問法，只把第 35 個數字「4」單獨加進去，誤算成 80 ＋ 4 ＝ 84。",
        "C": "看到有餘數就直接算成完整 9 組，誤答 10 × 9 ＝ 90。",
        "D": "除法 35 ÷ 4 商誤算為 7 組（或每組和少算 1），得到 70 ＋ 8 ＝ 78。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "週期總和 ＝ 每組和 × 完整組數 ＋ 餘數前幾項之和",
        "若剛好整除無餘數，代表最後一項剛好是該組的最後一個數"
      ],
      "conceptCompare": "週期題最常考三種問法：(1) 第幾個是什麼？(2) 前幾個總和是多少？(3) 前幾個裡面數字 3 出現幾次？做法全都是先用除法找「組數」與「餘數」。",
      "examVariations": "若題目改成「從頭開始連續加幾個數字，總和會剛好達到 88？」，先用 88 ÷ 10 ＝ 8 組餘 8，再看新組前幾項湊成 8（3＋1＋4 ＝ 8，需 3 項），答案就是 4 × 8 ＋ 3 ＝ 35 個。"
    }
  },
  {
    "id": "U08-S4-O-039",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "同向追趕先走差距問題",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8（延遲出發同向追及）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "弟弟每分鐘走 50 公尺，從校門口先出發走了 6 分鐘後，哥哥才發現弟弟忘了帶餐盒，立刻以每分鐘 80 公尺的速度沿同一方向去追趕弟弟。請問哥哥出發幾分鐘後可以追上弟弟？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "弟弟每分鐘走",
          "units": 1,
          "role": "base"
        },
        {
          "label": "哥哥每分鐘走",
          "units": 1.6,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "每分鐘追近 80 − 50 ＝ 30 公尺"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "16 分鐘",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "B",
        "text": "6 分鐘",
        "trapCode": "U08_SPEED_DIR_CONFUSION"
      },
      {
        "key": "C",
        "text": "15 分鐘",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "10 分鐘",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(50 * 6) / (80 - 50)",
      "expect": "10",
      "extraChecks": [
        {
          "expr": "80 * 10",
          "expect": "800"
        },
        {
          "expr": "50 * (6 + 10)",
          "expect": "800"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在「先走再追」的同向追及問題中，能否先算出先走造成的距離差，再除以兩人速度差求追趕時間。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出弟弟先走 6 分鐘後，已經領先哥哥多遠的距離。"
        },
        {
          "type": "eq",
          "expr": "50 × 6 ＝ 300",
          "unit": "公尺（起跑差距）"
        },
        {
          "type": "text",
          "text": "第 2 步：哥哥開始追時，弟弟也同時在前進，因此哥哥每分鐘只能把差距縮短 80 − 50 ＝ 30 公尺。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "300 ÷ (80 − 50) ＝ 10",
          "unit": "分鐘"
        },
        {
          "type": "answer",
          "text": "答：哥哥出發 10 分鐘後可以追上弟弟"
        }
      ],
      "insight": "追及問題兩步驟：(1) 找出「起追時的距離差」，(2) 除以「速度差（快減慢）」。最後可用「哥哥走 80×10＝800，弟弟走 50×16＝800」驗算！",
      "figureNote": "線段圖顯示哥哥每分鐘比弟弟多走 30 公尺，要追回弟弟先走出的 300 公尺距離差，需要 300 ÷ 30 ＝ 10 分鐘。",
      "distractorAnalysis": {
        "A": "算出哥哥追趕 10 分鐘後，又誤把弟弟先走的 6 分鐘加進去，錯答成弟弟總行走時間 16 分鐘。",
        "B": "忽略弟弟在追趕期間也會繼續前進，直接用 300 ÷ 50 ＝ 6 分鐘作答。",
        "C": "計算速度差 80 − 50 時誤算成 20 公尺，得到 300 ÷ 20 ＝ 15 分鐘。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同向追趕時間 ＝ 原先距離差 ÷ (快者速率 − 慢者速率)",
        "追上地點距起點距離 ＝ 快者速率 × 追趕時間"
      ],
      "conceptCompare": "注意題目問的是「哥哥出發後幾分鐘」還是「弟弟出發後共幾分鐘」。問哥哥是 10 分鐘；若問弟弟則要算 6 ＋ 10 ＝ 16 分鐘。",
      "examVariations": "時鐘的時針與分針追趕、或操場快者倒追一圈，都是完全一樣的「距離差 ÷ 速度差」模型。"
    }
  },
  {
    "id": "U08-RV-O-040",
    "legacyId": null,
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "郵票總和與張數差假設法",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8（雞兔假設反推兩量差）",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "郵局窗口賣出 3 元與 5 元兩種紀念郵票合計共 30 張，總收款金額剛好是 114 元。請問賣出的「3 元郵票」比「5 元郵票」多幾張？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "3 元郵票單價",
          "units": 1.2,
          "role": "base"
        },
        {
          "label": "5 元郵票單價",
          "units": 2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "每換 1 張價差 5 − 3 ＝ 2 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "6 張",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "12 張",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "24 張",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "D",
        "text": "3 張",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(30 - (114 - 3 * 30) / (5 - 3)) - (114 - 3 * 30) / (5 - 3)",
      "expect": "6",
      "extraChecks": [
        {
          "expr": "18 * 3 + 12 * 5",
          "expect": "114"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否先以假設法求出兩種郵票各自張數，並看清最後提問「多幾張」再做一次相減與驗算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 30 張全部都是 3 元郵票，先算出假設總金額與實際金額的差距。"
        },
        {
          "type": "eq",
          "expr": "3 × 30 ＝ 90",
          "unit": "元"
        },
        {
          "type": "eq",
          "expr": "114 − 90 ＝ 24",
          "unit": "元（差額）"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：每將 1 張 3 元郵票換成 5 元郵票會多 5 − 3 ＝ 2 元，因此可算出 5 元與 3 元郵票的張數。"
        },
        {
          "type": "eq",
          "expr": "5 元郵票 ＝ 24 ÷ (5 − 3) ＝ 12",
          "unit": "張"
        },
        {
          "type": "eq",
          "expr": "3 元郵票 ＝ 30 − 12 ＝ 18",
          "unit": "張"
        },
        {
          "type": "eq",
          "expr": "18 − 12 ＝ 6",
          "unit": "張"
        },
        {
          "type": "answer",
          "text": "答：3 元郵票比 5 元郵票多 6 張"
        }
      ],
      "insight": "高年級奧數題常在算出雞兔數量後，最後一問改成「相差幾隻／相差幾張」，務必多讀一次問題結尾再選答案！",
      "figureNote": "線段圖表示 5 元與 3 元郵票的單價相差 2 元，用總差額 24 元除以每張差價 2 元即得 5 元郵票有 12 張。",
      "distractorAnalysis": {
        "B": "只算出 5 元郵票有 12 張就作答，忘記還要算出 3 元郵票 18 張並相減求張數差。",
        "C": "算出總價差 114 − 90 ＝ 24 元後，忘記除以每張價差 2 元，直接把 24 當成張數作答。",
        "D": "算單張價差時誤把 5 − 3 寫成 5 ＋ 3 ＝ 8 元，算出 24 ÷ 8 ＝ 3 張。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設法求完各自數量後，還要確認題目問的是單一數量還是「數量差」",
        "總和驗算：18 × 3 ＋ 12 × 5 ＝ 54 ＋ 60 ＝ 114 元"
      ],
      "conceptCompare": "求得總數 30 張後，若先用「對半分各 15 張」試算（3×15＋5×15 ＝ 120 元），比 114 元多 6 元，表示 5 元要換成 3 元 6 ÷ 2 ＝ 3 張，立刻得到 18 張與 12 張，這是很方便的折半驗證法！",
      "examVariations": "若題目多出一種 10 元郵票且告知「3 元和 5 元數量相等」，只要把 3 元與 5 元各 1 張捆綁成「平均 4 元 1 張」，就能直接化為兩量雞兔問題！"
    }
  },
  {
    "id": "U08-S1-O-041",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "鋸木頭兼計時休息間隔",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9（鋸木頭與最後不休息間隔）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "md",
    "question": "木工師傅要把一根長木頭鋸成 6 段。已知每鋸一次需要 4 分鐘，每鋸完一次會固定休息 1 分鐘（最後一次鋸完已經完工，不再休息）。請問把木頭鋸成 6 段總共需要幾分鐘？",
    "options": [
      {
        "key": "A",
        "text": "29 分鐘",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "25 分鐘",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "24 分鐘",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "20 分鐘",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(6 - 1) * 4 + (6 - 2) * 1",
      "expect": "24"
    },
    "explanation": {
      "examPurpose": "測驗學生能否處理「雙重間隔」問題：段數轉次數（6−1 ＝ 5 次鋸木）以及次數轉休息次數（5−1 ＝ 4 次休息，最後一次不休）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把木頭鋸成 6 段，實際只需要下鋸 6 − 1 ＝ 5 次。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 500 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"34\" width=\"440\" height=\"32\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#b45309\" stroke-width=\"2\"/><line x1=\"103\" y1=\"26\" x2=\"103\" y2=\"74\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/><line x1=\"176\" y1=\"26\" x2=\"176\" y2=\"74\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/><line x1=\"250\" y1=\"26\" x2=\"250\" y2=\"74\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/><line x1=\"323\" y1=\"26\" x2=\"323\" y2=\"74\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/><line x1=\"397\" y1=\"26\" x2=\"397\" y2=\"74\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/><text x=\"103\" y=\"96\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">鋸1(4分)</text><text x=\"140\" y=\"118\" font-size=\"11\" fill=\"#2563eb\" text-anchor=\"middle\">休1分</text><text x=\"176\" y=\"96\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">鋸2(4分)</text><text x=\"213\" y=\"118\" font-size=\"11\" fill=\"#2563eb\" text-anchor=\"middle\">休1分</text><text x=\"250\" y=\"96\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">鋸3(4分)</text><text x=\"287\" y=\"118\" font-size=\"11\" fill=\"#2563eb\" text-anchor=\"middle\">休1分</text><text x=\"323\" y=\"96\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">鋸4(4分)</text><text x=\"360\" y=\"118\" font-size=\"11\" fill=\"#2563eb\" text-anchor=\"middle\">休1分</text><text x=\"397\" y=\"96\" font-size=\"11\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">鋸5(4分)</text><text x=\"448\" y=\"118\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f766e\" text-anchor=\"middle\">完工不休</text><text x=\"250\" y=\"154\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">鋸 5 次共 20 分 ＋ 休息 4 次共 4 分 ＝ 24 分鐘</text></svg>",
          "caption": "6 段木頭只鋸 5 刀；5 刀之間有 4 個休息間隔，第 5 刀鋸完直接完工"
        },
        {
          "type": "eq",
          "expr": "鋸木頭時間 ＝ 4 × 5 ＝ 20",
          "unit": "分鐘"
        },
        {
          "type": "text",
          "text": "第 2 步：5 次鋸木頭之間只有 5 − 1 ＝ 4 次休息時間（最後一次鋸完不需再休）。"
        },
        {
          "type": "eq",
          "expr": "休息時間 ＝ 1 × (5 − 1) ＝ 4",
          "unit": "分鐘"
        },
        {
          "type": "eq",
          "expr": "20 ＋ 4 ＝ 24",
          "unit": "分鐘"
        },
        {
          "type": "answer",
          "text": "答：總共需要 24 分鐘"
        }
      ],
      "insight": "這題有兩層「減 1」：(1) 6 段只需鋸 5 次；(2) 鋸 5 次中間只休 4 次！兩層都減對才不會算多。",
      "distractorAnalysis": {
        "A": "直接把 6 段當成鋸 6 次，算成鋸 6 次 24 分鐘加上休息 5 次 5 分鐘 ＝ 29 分鐘。",
        "B": "算對鋸 5 次，但忘記最後一次鋸完不休息，多加了 1 分鐘變成 (4＋1) × 5 ＝ 25 分鐘。",
        "D": "只算了鋸木頭的時間 4 × 5 ＝ 20 分鐘，完全漏算中間休息的 4 分鐘。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "鋸的次數 ＝ 段數 − 1",
        "休息次數 ＝ 鋸的次數 − 1 ＝ 段數 − 2"
      ],
      "conceptCompare": "類似的「最後一次不計算」問題還有青蛙跳井（最後一天跳出井口不會再滑下去）以及巴士發車／吃藥計時。",
      "examVariations": "若題目反問「師傅工作了 39 分鐘，同樣每鋸 4 分鐘休息 1 分鐘，木頭總共被鋸成幾段？」，先把每次看成 5 分鐘：(39 ＋ 1) ÷ 5 ＝ 8 次鋸木（加 1 是補齊最後一次沒休的 1 分鐘），最後 8 ＋ 1 ＝ 9 段！"
    }
  },
  {
    "id": "U08-S4-O-042",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差問題",
    "category": "跨雙時點母女年齡回推",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9（跨十年雙時點年齡倍數）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "5 年後媽媽與女兒的年齡和是 54 歲，而 5 年前媽媽的年齡剛好是女兒的 3 倍多 6 歲。請問女兒「今年」是幾歲？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "5年前女兒",
          "units": 1,
          "role": "base"
        },
        {
          "label": "5年前媽媽(3倍多6)",
          "units": 2.4,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "5年前和 34 歲"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "7 歲",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "B",
        "text": "17 歲",
        "trapCode": "U08_AGE_DIFF_CHANGE"
      },
      {
        "key": "C",
        "text": "12 歲",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "14 歲",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "((54 - 10 * 2) - 6) / (3 + 1) + 5",
      "expect": "12",
      "extraChecks": [
        {
          "expr": "(12 + 5) + (32 + 5)",
          "expect": "54"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否將「不同時間點的年齡和」統一換算到「倍數條件所在的那一年（5 年前）」，並小心每人經歷 10 年、兩人合計差 20 歲。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：因為倍數條件發生在「5 年前」，先把「5 年後」的年齡和 54 歲倒推回「5 年前」。從 5 年後到 5 年前共隔了 5 ＋ 5 ＝ 10 年，母女兩人合計要扣掉 10 × 2 ＝ 20 歲。"
        },
        {
          "type": "eq",
          "expr": "54 − 10 × 2 ＝ 34",
          "unit": "歲（5 年前年紀和）"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：5 年前媽媽是女兒的 3 倍多 6 歲，先扣掉多出來的 6 歲，剩下的就是女兒的 1 ＋ 3 ＝ 4 倍。"
        },
        {
          "type": "eq",
          "expr": "(34 − 6) ÷ (1 ＋ 3) ＝ 7",
          "unit": "歲（5 年前女兒）"
        },
        {
          "type": "text",
          "text": "第 3 步：從 5 年前加回 5 歲，還原成女兒「今年」的年齡。"
        },
        {
          "type": "eq",
          "expr": "7 ＋ 5 ＝ 12",
          "unit": "歲"
        },
        {
          "type": "answer",
          "text": "答：女兒今年是 12 歲"
        }
      ],
      "insight": "年齡倍數題一定要「先對齊時間點」再算倍數！從 5 年後回到 5 年前是跨越 10 年，兩人共少 20 歲，最後別忘了加 5 回到今年！",
      "figureNote": "線段圖呈現 5 年前兩人的關係：女兒為 1 份，媽媽為 3 份再多 6 歲，兩人當時合計 54 − 20 ＝ 34 歲。",
      "distractorAnalysis": {
        "A": "算出 5 年前女兒是 7 歲後直接作答，忘記加回 5 歲還原成今年。",
        "D": "求出 5 年前年紀和 34 歲扣 6 得 28 歲後，忘記共有 1 ＋ 3 ＝ 4 倍份數，誤只除以 2 得到 14 歲。",
        "B": "忘記年齡和會隨時間改變，直接拿 5 年後的 54 歲當 5 年前算成 (54 − 6) ÷ 4 ＋ 5 ＝ 17 歲。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "跨雙時點時間差 ＝ 前年數 ＋ 後年數（兩人和要乘以 2）",
        "基準量（較小年齡）＝ (對齊後和 − 多出歲數) ÷ (倍數 ＋ 1)"
      ],
      "conceptCompare": "求得女兒今年 12 歲後可以立刻驗算：媽媽 5 年前為 7 × 3 ＋ 6 ＝ 27 歲、今年 32 歲；5 年後女兒 17 歲、媽媽 37 歲，17 ＋ 37 ＝ 54 歲，完全吻合！",
      "examVariations": "若改為「5 年前媽媽比女兒的 3 倍少 2 歲」，只要把總和 34 「補上」少掉的 2 歲變成 (34 ＋ 2) ÷ 4 ＝ 9 歲即可。"
    }
  },
  {
    "id": "U08-RV-O-043",
    "legacyId": null,
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "環湖追及兩次相遇週期",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9（環湖反向相遇與同向倒追）",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一座圓形環湖步道周長 1200 公尺。小宇（每分鐘走 90 公尺）和小萱（每分鐘走 60 公尺）同時從同一地點出發，若「背對背反向而行」幾分鐘後首次相遇？若改成「朝同一方向同向而行」，幾分鐘後小宇會從後方追上並剛好領先小萱一整圈？",
    "options": [
      {
        "key": "A",
        "text": "反向 40 分鐘、同向 8 分鐘",
        "trapCode": "U08_SPEED_DIR_CONFUSION"
      },
      {
        "key": "B",
        "text": "反向 8 分鐘、同向 40 分鐘",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "反向 9 分鐘、同向 41 分鐘",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "D",
        "text": "反向 20 分鐘、同向 45 分鐘",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "1200 / (90 + 60)",
      "expect": "8",
      "extraChecks": [
        {
          "expr": "1200 / (90 - 60)",
          "expect": "40"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在環形封閉跑道上，是否能同時分辨「反向合走一圈（速度和）」與「同向倒追一圈（速度差）」的物理意義與公式。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：反向而行時，兩人從同一點背對背出發，合起來剛好走完一整圈 1200 公尺時會第一次相遇，要用「速度和」。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 480 195\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"125\" cy=\"88\" r=\"58\" fill=\"#f0f9ff\" stroke=\"#0284c7\" stroke-width=\"3\"/><circle cx=\"125\" cy=\"30\" r=\"6\" fill=\"#e11d48\"/><path d=\"M 114 31 A 58 58 0 0 0 68 80\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/><polygon points=\"63,76 67,90 75,78\" fill=\"#2563eb\"/><path d=\"M 136 31 A 58 58 0 0 1 182 80\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3\"/><polygon points=\"175,78 183,90 187,76\" fill=\"#e11d48\"/><text x=\"125\" y=\"92\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">周長 1200 公尺</text><text x=\"125\" y=\"168\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">反向：合走 1 圈（速度和 150）</text><circle cx=\"355\" cy=\"88\" r=\"58\" fill=\"#fef2f2\" stroke=\"#e11d48\" stroke-width=\"3\"/><circle cx=\"355\" cy=\"30\" r=\"6\" fill=\"#e11d48\"/><path d=\"M 366 31 A 58 58 0 0 1 412 80\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"3\"/><polygon points=\"405,78 413,90 417,76\" fill=\"#e11d48\"/><path d=\"M 366 42 A 46 46 0 0 1 398 76\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><polygon points=\"392,75 400,85 403,72\" fill=\"#16a34a\"/><text x=\"355\" y=\"92\" font-size=\"12\" font-weight=\"bold\" fill=\"#be123c\" text-anchor=\"middle\">快者多走 1 圈</text><text x=\"355\" y=\"168\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">同向：追上 1 圈（速度差 30）</text></svg>",
          "caption": "同點出發環湖：反向相遇靠「速度和」合走 1 圈；同向追及靠「速度差」多跑 1 圈"
        },
        {
          "type": "eq",
          "expr": "反向相遇 ＝ 1200 ÷ (90 ＋ 60) ＝ 8",
          "unit": "分鐘"
        },
        {
          "type": "text",
          "text": "第 2 步：同向而行時，快的小宇要從後面追上慢的小萱，代表小宇必須比小萱多走整整一圈 1200 公尺，要用「速度差」。"
        },
        {
          "type": "eq",
          "expr": "同向追及 ＝ 1200 ÷ (90 − 60) ＝ 40",
          "unit": "分鐘"
        },
        {
          "type": "answer",
          "text": "答：反向 8 分鐘後相遇，同向 40 分鐘後追上領先一圈"
        }
      ],
      "insight": "環形跑道同點出發：「反向合走一圈（用速度和）」、「同向快者多跑一圈（用速度差）」！",
      "distractorAnalysis": {
        "A": "把反向與同向的加減公式完全顛倒，錯用速度差算反向、速度和算同向。",
        "D": "除數或減法估算失誤，誤將速度和算成 60（1200 ÷ 60 ＝ 20）或把速度差看錯。",
        "C": "誤以為封閉跑道計算時間也要像直線端點植樹一樣加 1，兩個答案都多加了 1 分鐘。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "環形同點反向相遇時間 ＝ 圓周長 ÷ (甲速 ＋ 乙速)",
        "環形同點同向追上時間 ＝ 圓周長 ÷ (快者速 − 慢者速)"
      ],
      "conceptCompare": "因為兩人每次相遇或追上後，就等於「又從同一點同時出發」，所以反向每隔 8 分鐘相遇一次，同向每隔 40 分鐘倒追一圈！",
      "examVariations": "進階問題會問：「如果同向出發，經過幾分鐘後兩人會第一次同時回到最初的起點？」這就要先算小宇走一圈 1200 ÷ 90 ＝ 13 1/3 分、小萱走一圈 1200 ÷ 60 ＝ 20 分，再找兩者的最小公倍時間 40 分鐘。"
    }
  },
  {
    "id": "U08-S3-O-044",
    "legacyId": null,
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "選擇與組合",
    "category": "棋盤過河卒最短捷徑數",
    "batch": "奧數天梯",
    "source": "奧數天梯 L10（含障礙點棋盤捷徑標數法）",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "有一個橫向 4 格、縱向 3 格的方格棋盤街道，小螞蟻要從左下角「起點」沿著格子線走到右上角「終點」，每次只能「向右」或「向上」移動。若從起點算起向右 2 格、向上 1 格的路口剛好有積水不能通過，請問共有幾種最短走法？",
    "options": [
      {
        "key": "A",
        "text": "35 種",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "17 種",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "19 種",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "29 種",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(7 * 6 * 5) / (3 * 2 * 1) - 3 * (4 * 3) / 2",
      "expect": "17"
    },
    "explanation": {
      "examPurpose": "測驗學生使用「節點標數法」解決含障礙點（過河卒）棋盤最短路徑問題的能力，並理解每個路口走法數等於左方與下方路口走法數之和。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：使用小學最實用的「標數法」：起點與最底邊、最左邊的路口都只有 1 種直走方式，全部先標上 1；積水的路口不能走，標成 0。"
        },
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 245\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#94a3b8\" stroke-width=\"2\"><line x1=\"70\" y1=\"40\" x2=\"390\" y2=\"40\"/><line x1=\"70\" y1=\"95\" x2=\"390\" y2=\"95\"/><line x1=\"70\" y1=\"150\" x2=\"390\" y2=\"150\"/><line x1=\"70\" y1=\"205\" x2=\"390\" y2=\"205\"/><line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"205\"/><line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"205\"/><line x1=\"230\" y1=\"40\" x2=\"230\" y2=\"205\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"205\"/><line x1=\"390\" y1=\"40\" x2=\"390\" y2=\"205\"/></g><circle cx=\"230\" cy=\"150\" r=\"15\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"230\" y=\"155\" font-size=\"13\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">0(水)</text><text x=\"70\" y=\"225\" font-size=\"12\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">起點 1</text><text x=\"150\" y=\"225\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"230\" y=\"225\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"310\" y=\"225\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"390\" y=\"225\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"55\" y=\"154\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"end\">1</text><text x=\"55\" y=\"99\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"end\">1</text><text x=\"55\" y=\"44\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"end\">1</text><text x=\"142\" y=\"143\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">2</text><text x=\"302\" y=\"143\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">1</text><text x=\"382\" y=\"143\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">2</text><text x=\"142\" y=\"88\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">3</text><text x=\"222\" y=\"88\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">3</text><text x=\"302\" y=\"88\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">4</text><text x=\"382\" y=\"88\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">6</text><text x=\"142\" y=\"33\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">4</text><text x=\"222\" y=\"33\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">7</text><text x=\"302\" y=\"33\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"end\">11</text><circle cx=\"390\" cy=\"40\" r=\"16\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><text x=\"390\" y=\"45\" font-size=\"14\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">17</text><text x=\"390\" y=\"18\" font-size=\"12\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">終點</text></svg>",
          "caption": "每個交叉口數字 ＝ 左邊路口數字 ＋ 下邊路口數字；積水處標記為 0 不傳遞"
        },
        {
          "type": "text",
          "text": "第 2 步：由左下往右上逐排相加，積水點（向右 2、向上 1）記為 0，所以它右邊路口變成 0＋1 ＝ 1、上邊路口變成 3＋0 ＝ 3。"
        },
        {
          "type": "eq",
          "expr": "終點處 ＝ 11 ＋ 6 ＝ 17",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：共有 17 種最短走法"
        }
      ],
      "insight": "遇到障礙點時「標數法」比扣減法更不容易算錯：只要把不能走的點標 0，其餘每一格都是「左邊 ＋ 下邊」！",
      "distractorAnalysis": {
        "A": "算出了沒有積水障礙時的全部 35 種最短走法，完全忘記扣除經過積水點的路線。",
        "C": "在網格逐點標數相加時，把積水點右方或上方錯加導致最後總和算成 19 種。",
        "D": "用總走法減去障礙點路線時，誤以為從積水點到終點只有 2 種走法，少扣成 35 − 3 × 2 ＝ 29 種。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "棋盤捷徑標數法：每個路口走法數 ＝ 左邊路口走法數 ＋ 下方路口走法數",
        "無法經過的障礙點直接標記為 0"
      ],
      "conceptCompare": "也可以用「全部 − 必經積水點」驗算：無障礙共 35 種；起點到積水點 3 種，積水點到終點 6 種，必經積水點有 3 × 6 ＝ 18 種，35 − 18 ＝ 17 種！",
      "examVariations": "若積水的是「一段路」而不是路口，只要畫標數圖時把斷掉的那條邊擦掉不傳遞即可，原理完全相同。"
    }
  },
  {
    "id": "U08-RV-O-045",
    "legacyId": null,
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "損壞賠錢搬運花瓶問題",
    "batch": "奧數天梯",
    "source": "奧數天梯 L10（搬運花瓶倒賠假設法）",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "陶瓷工廠請搬運工運送 200 個高級花瓶，約定每完好送達 1 個可得工錢 3 元，但每打破 1 個不但拿不到工錢，還要倒賠 12 元。運送結束後，搬運工實際領到 540 元，請問他打破了幾個花瓶？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "實際領到工錢",
          "units": 1.8,
          "role": "compare"
        },
        {
          "label": "全完好應領工錢",
          "units": 2,
          "role": "base"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "少領 60 元（每破 1 個少 3＋12 ＝ 15 元）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "4 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "5 個",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "C",
        "text": "196 個",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "D",
        "text": "6 個",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(200 * 3 - 540) / (3 + 12)",
      "expect": "4",
      "extraChecks": [
        {
          "expr": "196 * 3 - 4 * 12",
          "expect": "540"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生在「完好賺錢、打破倒賠」的進階假設法中，是否能算出每打破 1 個實際損失「原本工錢 ＋ 倒賠金額」，再求打破個數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 200 個花瓶全部完好送達，應領到的總工錢是 3 × 200 ＝ 600 元。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "600 − 540 ＝ 60",
          "unit": "元（少領的工錢）"
        },
        {
          "type": "text",
          "text": "第 2 步：每打破 1 個花瓶，不僅拿不到原本的 3 元工錢，還要倒賠 12 元，所以和全完好相比，每破 1 個共會少領 3 ＋ 12 ＝ 15 元。"
        },
        {
          "type": "eq",
          "expr": "60 ÷ (3 ＋ 12) ＝ 4",
          "unit": "個"
        },
        {
          "type": "answer",
          "text": "答：他打破了 4 個花瓶"
        }
      ],
      "insight": "搬花瓶打破倒賠跟測驗倒扣一模一樣：每打破 1 個的總損失 ＝ 「沒賺到的 3 元」＋「倒貼出去的 12 元」＝ 15 元！",
      "figureNote": "線段圖呈現全完好應領 600 元與實領 540 元相差 60 元，將少領的 60 元除以每破 1 個的損失 15 元即得 4 個。",
      "distractorAnalysis": {
        "C": "算出完好送達的有 200 − 4 ＝ 196 個後，選成了完好的個數而非打破的個數。",
        "D": "計算 600 − 540 時誤減成 90 元，導致算出 90 ÷ 15 ＝ 6 個。",
        "B": "誤以為每打破 1 個只比原本少 12 元，沒有加回拿不到的 3 元工錢，錯算成 60 ÷ 12 ＝ 5 個。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "打破個數 ＝ (總件數 × 完好工錢 − 實領工錢) ÷ (完好工錢 ＋ 倒賠罰金)",
        "驗算：完好 196 × 3 − 打破 4 × 12 ＝ 588 − 48 ＝ 540 元"
      ],
      "conceptCompare": "假設全完好最不容易出錯；若假設「全部打破」，總共要倒賠 200 × 12 ＝ 2400 元，會出現負數，小學階段建議統一假設「全部完好／全部答對」。",
      "examVariations": "若題目改成「運送 200 個花瓶，破了 4 個後實領 540 元，已知完好 1 個給 3 元，問打破 1 個要倒賠幾元？」，先算少領 60 元 ➔ 每個少 60 ÷ 4 ＝ 15 元 ➔ 倒賠 15 − 3 ＝ 12 元。"
    }
  },
  {
    "id": "U08-S1-M-046",
    "legacyId": "u08_m01",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "植樹兩端",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "20 公尺的直路，每隔 5 公尺種一棵樹，兩端都種，共幾棵？",
    "options": [
      {
        "key": "A",
        "text": "4 棵",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "6 棵",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "C",
        "text": "5 棵",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "20 棵",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "20 / 5 + 1",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解直線上「兩端都種」時，樹的棵數會比間隔數多 1。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><line x1=\"50\" y1=\"70\" x2=\"410\" y2=\"70\" stroke=\"#475569\" stroke-width=\"3\"/><circle cx=\"50\" cy=\"70\" r=\"10\" fill=\"#16a34a\"/><circle cx=\"140\" cy=\"70\" r=\"10\" fill=\"#16a34a\"/><circle cx=\"230\" cy=\"70\" r=\"10\" fill=\"#16a34a\"/><circle cx=\"320\" cy=\"70\" r=\"10\" fill=\"#16a34a\"/><circle cx=\"410\" cy=\"70\" r=\"10\" fill=\"#16a34a\"/><text x=\"50\" y=\"46\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">起點種</text><text x=\"410\" y=\"46\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">終點種</text><text x=\"95\" y=\"94\" font-size=\"12\" fill=\"#2563eb\" text-anchor=\"middle\">5 公尺</text><text x=\"185\" y=\"94\" font-size=\"12\" fill=\"#2563eb\" text-anchor=\"middle\">5 公尺</text><text x=\"275\" y=\"94\" font-size=\"12\" fill=\"#2563eb\" text-anchor=\"middle\">5 公尺</text><text x=\"365\" y=\"94\" font-size=\"12\" fill=\"#2563eb\" text-anchor=\"middle\">5 公尺</text><text x=\"230\" y=\"118\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">總長 20 公尺（4 個間隔 → 5 棵樹）</text></svg>",
          "caption": "20 公尺每隔 5 公尺分一段共有 4 個間隔，因為起點和終點都要種樹，所以共有 5 棵樹。"
        },
        {
          "type": "text",
          "text": "第 1 步：先用總長除以每個間隔的長度，算出共有幾個間隔。"
        },
        {
          "type": "eq",
          "expr": "20 ÷ 5 ＝ 4",
          "unit": "個間隔"
        },
        {
          "type": "text",
          "text": "第 2 步：直路兩端都要種樹，就像張開手掌有 4 個指縫、5 根手指頭，棵數會比間隔數多 1。"
        },
        {
          "type": "eq",
          "expr": "4 ＋ 1 ＝ 5",
          "unit": "棵"
        },
        {
          "type": "answer",
          "text": "答：5 棵"
        }
      ],
      "insight": "直線兩端都種樹：棵數 ＝ 間隔數 ＋ 1；忘記加減 1 時，伸出手指頭數數「指縫與手指」馬上就能確認。",
      "distractorAnalysis": {
        "A": "只算出了 20 ÷ 5 ＝ 4 個間隔，卻忘記直路兩端都要種樹必須再加 1。",
        "D": "沒有將總長除以間隔距離，直接把路長 20 當作答案。",
        "B": "在間隔數上誤套用多補端點或再加 1，算出 4 ＋ 2 ＝ 6 棵。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直線兩端都種：棵數 ＝ 間隔數 ＋ 1",
        "間隔數 ＝ 總長 ÷ 間隔長"
      ],
      "conceptCompare": "直路植樹分三種：兩端都種是「間隔數 ＋ 1」、只種一端是「等於間隔數」、兩端都不種是「間隔數 − 1」。",
      "examVariations": "若題目改成「馬路兩側都要種」，算出單側 5 棵後，別忘了再乘以 2 變成 10 棵。"
    }
  },
  {
    "id": "U08-S1-M-047",
    "legacyId": "u08_m02",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "封閉植樹",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "周長 20 公尺的圓形水池，每隔 5 公尺種一棵樹，共幾棵？",
    "options": [
      {
        "key": "A",
        "text": "5 棵",
        "trapCode": "U08_CLOSED_LOOP_ADD_ONE"
      },
      {
        "key": "B",
        "text": "4 棵",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 棵",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "6 棵",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "20 / 5",
      "expect": "4"
    },
    "explanation": {
      "examPurpose": "測驗學生是否區分「封閉圓形」與「直線兩端都種」的植樹差別，理解封閉圖形棵數等於間隔數。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 400 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"150\" cy=\"80\" r=\"52\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"3\"/><circle cx=\"150\" cy=\"28\" r=\"8\" fill=\"#16a34a\"/><circle cx=\"202\" cy=\"80\" r=\"8\" fill=\"#16a34a\"/><circle cx=\"150\" cy=\"132\" r=\"8\" fill=\"#16a34a\"/><circle cx=\"98\" cy=\"80\" r=\"8\" fill=\"#16a34a\"/><text x=\"150\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">周長 20 公尺</text><text x=\"198\" y=\"42\" font-size=\"12\" fill=\"#334155\">5 公尺</text><text x=\"198\" y=\"126\" font-size=\"12\" fill=\"#334155\">5 公尺</text><text x=\"72\" y=\"42\" font-size=\"12\" fill=\"#334155\">5 公尺</text><text x=\"72\" y=\"126\" font-size=\"12\" fill=\"#334155\">5 公尺</text><text x=\"310\" y=\"72\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">頭尾相接成一圈</text><text x=\"310\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">4 個間隔 ＝ 4 棵樹</text></svg>",
          "caption": "圓形水池頭尾相接，起點與終點重合，因此 4 段 5 公尺的圓弧剛好對應 4 棵樹。"
        },
        {
          "type": "text",
          "text": "第 1 步：封閉圓形的起點和終點連在一起，相當於「只種一端」，所以棵數剛好等於間隔數。"
        },
        {
          "type": "eq",
          "expr": "20 ÷ 5 ＝ 4",
          "unit": "棵"
        },
        {
          "type": "answer",
          "text": "答：4 棵"
        }
      ],
      "insight": "封閉圖形（圓形、正方形、三角形周圍）沒有起點和終點之分：棵數 ＝ 間隔數，不必加 1 也不必減 1。",
      "distractorAnalysis": {
        "C": "誤以為要把間隔數減 1，算出 4 − 1 ＝ 3 棵。",
        "D": "除法或加減端點時計算粗心，算出不合理的 6 棵。",
        "A": "誤把封閉圓形當成直線兩端都種，算出 4 個間隔後又多加 1 變成 5 棵。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "封閉圖形植樹：棵數 ＝ 總周長 ÷ 間隔長 ＝ 間隔數"
      ],
      "conceptCompare": "把直線路彎成圓形時，原本兩端的那 2 棵樹會重疊合成 1 棵，所以「間隔數 ＋ 1」就會少 1 變回「等於間隔數」。",
      "examVariations": "只要是繞著公園池塘、環形跑道或蛋糕外圈等封閉路線擺設物品，全部都是「個數 ＝ 間隔數」。"
    }
  },
  {
    "id": "U08-S1-M-048",
    "legacyId": "u08_m03",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "鋸木頭",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "一根木頭要鋸成 5 段，需要鋸幾次？",
    "options": [
      {
        "key": "A",
        "text": "5 次",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "6 次",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "4 次",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "10 次",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "5 - 1",
      "expect": "4"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能把「鋸木頭／剪緞帶」轉換為植樹間隔模型，掌握刀數比段數少 1 的關係。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"40\" y=\"48\" width=\"380\" height=\"26\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#b45309\" stroke-width=\"2\"/><line x1=\"116\" y1=\"36\" x2=\"116\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><line x1=\"192\" y1=\"36\" x2=\"192\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><line x1=\"268\" y1=\"36\" x2=\"268\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><line x1=\"344\" y1=\"36\" x2=\"344\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/><text x=\"116\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">1 刀</text><text x=\"192\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">2 刀</text><text x=\"268\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">3 刀</text><text x=\"344\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">4 刀</text><text x=\"78\" y=\"106\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">段1</text><text x=\"154\" y=\"106\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">段2</text><text x=\"230\" y=\"106\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">段3</text><text x=\"306\" y=\"106\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">段4</text><text x=\"382\" y=\"106\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">段5</text></svg>",
          "caption": "每鋸 1 刀就多切出 1 段，木頭兩端本來就是斷開的，所以切出 5 段只需要 4 刀。"
        },
        {
          "type": "text",
          "text": "第 1 步：鋸木頭就像「兩端都不種樹」，因為木頭的最左邊和最右邊不需要鋸。"
        },
        {
          "type": "eq",
          "expr": "5 − 1 ＝ 4",
          "unit": "次"
        },
        {
          "type": "answer",
          "text": "答：4 次"
        }
      ],
      "insight": "刀數 ＝ 段數 − 1。從最簡單的「鋸 1 次變 2 段」去記，就永遠不會弄錯。",
      "distractorAnalysis": {
        "A": "直覺以為要幾段就得鋸幾次，忘了第 4 刀切完就已經分成第 4 段與第 5 段。",
        "B": "把加減 1 的方向做反，誤算成 5 ＋ 1 ＝ 6 次。",
        "D": "誤將段數乘以 2，算成 5 × 2 ＝ 10 次。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "鋸的次數 ＝ 分成的段數 − 1",
        "總時間 ＝ 每次鋸的時間 × (段數 − 1)"
      ],
      "conceptCompare": "這和「兩端都不種樹」完全一樣：段數就是間隔數，鋸的位置就是樹的位置。",
      "examVariations": "進階題常考「鋸成 4 段要 12 分鐘，那麼鋸成 7 段要幾分鐘？」，必須先算 4 − 1 ＝ 3 次，每次 4 分鐘，再算 6 次 × 4 ＝ 24 分鐘。"
    }
  },
  {
    "id": "U08-S1-M-049",
    "legacyId": "u08_m04",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "爬樓梯",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "從 1 樓走到 4 樓要 30 秒，同樣速度從 1 樓走到 8 樓要幾秒？",
    "options": [
      {
        "key": "A",
        "text": "70 秒",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "60 秒",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "80 秒",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "56 秒",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "30 / (4 - 1) * (8 - 1)",
      "expect": "70"
    },
    "explanation": {
      "examPurpose": "測驗學生是否知道「爬樓梯層數 ＝ 終點樓層 − 起點樓層」，不能直接拿樓層數字成比例放大。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從 1 樓走到 4 樓，其實只爬了 3 層樓梯（1→2、2→3、3→4），先算出爬 1 層要幾秒。"
        },
        {
          "type": "eq",
          "expr": "4 − 1 ＝ 3",
          "unit": "層"
        },
        {
          "type": "eq",
          "expr": "30 ÷ 3 ＝ 10",
          "unit": "秒（每爬 1 層的時間）"
        },
        {
          "type": "text",
          "text": "第 2 步：從 1 樓走到 8 樓總共要爬 7 層樓梯，乘以每層的時間即可。"
        },
        {
          "type": "eq",
          "expr": "8 − 1 ＝ 7",
          "unit": "層"
        },
        {
          "type": "eq",
          "expr": "10 × 7 ＝ 70",
          "unit": "秒"
        },
        {
          "type": "answer",
          "text": "答：70 秒"
        }
      ],
      "insight": "樓層問題也是間隔問題：你站在 1 樓不用爬，所以爬的層數永遠是「目標樓層 − 1」。",
      "distractorAnalysis": {
        "B": "誤以為 8 樓是 4 樓的 2 倍，就直接把 30 秒乘以 2 算成 60 秒。",
        "C": "忘記扣掉起點 1 樓，誤以為 1 樓到 8 樓要爬 8 層而算成 10 × 8 ＝ 80 秒。",
        "D": "在計算層數差或乘法時粗心失誤，錯算為 56 秒。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際爬的層數 ＝ 到達樓層 − 出發樓層",
        "總時間 ＝ 單層時間 × 實際爬的層數"
      ],
      "conceptCompare": "「幾樓」相當於數線上的點（樹），「爬幾層樓梯」相當於點與點之間的距離（間隔）。",
      "examVariations": "若題目改成「從 3 樓走到 8 樓」，實際爬的層數就是 8 − 3 ＝ 5 層，不是 8 − 1 層，讀題時要特別看清起點。"
    }
  },
  {
    "id": "U08-S4-M-050",
    "legacyId": "u08_m05",
    "unitId": "U08",
    "section": "8-4",
    "sectionName": "和差與移多補少",
    "category": "和差問題",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "兩數和是 20，差是 4，大數是多少？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "小數",
          "units": 2,
          "role": "base"
        },
        {
          "label": "大數",
          "units": 3,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "兩數和 ＝ 20（大數比小數多 4）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "16",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "B",
        "text": "8",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "12",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "10",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(20 + 4) / 2",
      "expect": "12"
    },
    "explanation": {
      "examPurpose": "測驗學生是否掌握經典和差問題解法，能透過線段圖把兩數補齊後除以 2 求出大數。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 1 步：把較小的數補上相差的 4，兩個數就會變得和大數一樣大，這時總和變成 2 個大數。"
        },
        {
          "type": "eq",
          "expr": "20 ＋ 4 ＝ 24",
          "unit": "（2 個大數的和）"
        },
        {
          "type": "text",
          "text": "第 2 步：平分成 2 份，就得到大數了。"
        },
        {
          "type": "eq",
          "expr": "24 ÷ 2 ＝ 12",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：12"
        }
      ],
      "insight": "和差口訣：大數 ＝ (和 ＋ 差) ÷ 2；小數 ＝ (和 − 差) ÷ 2。算完可以馬上驗算：12 ＋ 8 ＝ 20、12 − 8 ＝ 4，完全正確！",
      "figureNote": "小數線段加上相差的 4 後就和大數等長，兩段合起來是 20 ＋ 4 ＝ 24，除以 2 就得到大數 12。",
      "distractorAnalysis": {
        "B": "用 (20 − 4) ÷ 2 ＝ 8 算成了小數，沒看清題目要問的是大數。",
        "D": "直接把總和 20 平分成兩半得 10，忽略了兩數相差 4 的條件。",
        "A": "只算了 20 − 4 ＝ 16，卻忘記最後要除以 2 平分兩數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "大數 ＝ (和 ＋ 差) ÷ 2",
        "小數 ＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "求大數要用「補齊（和 ＋ 差）」；求小數則把多出的剪掉（和 − 差），最後一定要記得除以 2。",
      "examVariations": "段考常把「和」藏在長方形周長裡，例如「周長 40、長比寬多 4」，必須先除以 2 得到長 ＋ 寬 ＝ 20，才能套用本題算法。"
    }
  },
  {
    "id": "U08-S2-M-051",
    "legacyId": "u08_m06",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "規律問題",
    "category": "火柴正方形",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "用火柴棒排一排相連的正方形，排 1 個要 4 根，每多 1 個多 3 根。排 10 個要幾根？",
    "options": [
      {
        "key": "A",
        "text": "40 根",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "B",
        "text": "30 根",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "41 根",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "31 根",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "4 + 3 * (10 - 1)",
      "expect": "31"
    },
    "explanation": {
      "examPurpose": "測驗學生能否從圖形排列中找出「首項加固定差值」或「共用邊拆分」的規律。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><line x1=\"40\" y1=\"25\" x2=\"40\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"4\"/><path d=\"M 40,25 L 90,25 L 90,75 L 40,75\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 90,25 L 140,25 L 140,75 L 90,75\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><path d=\"M 140,25 L 190,25 L 190,75 L 140,75\" fill=\"#eff6ff\" fill-opacity=\"0.3\" stroke=\"#2563eb\" stroke-width=\"3.5\"/><text x=\"235\" y=\"56\" font-size=\"18\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">……</text><path d=\"M 280,25 L 330,25 L 330,75 L 280,75\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\" stroke-dasharray=\"4,2\"/><text x=\"40\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">先放 1 根</text><text x=\"260\" y=\"98\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">每多 1 格補 3 根藍棒（共 10 組）</text></svg>",
          "caption": "把最左邊的 1 根紅色火柴單獨算，後面 10 個正方形每個都剛好需要 3 根藍色火柴。"
        },
        {
          "type": "text",
          "text": "第 1 步：除了第 1 個正方形需要 4 根，後面多排的 9 個正方形都共用左邊那根，所以各只需要 3 根。"
        },
        {
          "type": "eq",
          "expr": "10 − 1 ＝ 9",
          "unit": "個（後面多排的正方形）"
        },
        {
          "type": "eq",
          "expr": "4 ＋ 3 × 9 ＝ 31",
          "unit": "根"
        },
        {
          "type": "text",
          "text": "第 2 步：也可以想成「先放最左邊 1 根，再加 10 組各 3 根」：1 ＋ 3 × 10 ＝ 31 根，結果完全一樣。"
        },
        {
          "type": "answer",
          "text": "答：31 根"
        }
      ],
      "insight": "相連正方形的規律：1 ＋ 3 × 正方形個數（或 4 ＋ 3 × (個數 − 1)），因為相鄰共用邊省下了火柴棒。",
      "distractorAnalysis": {
        "A": "誤以為排 10 個正方形都要獨立用 4 根，算成 4 × 10 ＝ 40 根，重複算了共用的邊。",
        "B": "只算出 3 × 10 ＝ 30 根，卻忘記加上最左邊最初的那 1 根。",
        "C": "在套用乘加步驟時計算粗心，誤算出 41 根。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "橫排相連正方形火柴數 ＝ 1 ＋ 3 × 正方形個數",
        "也可以記為：4 ＋ 3 × (正方形個數 − 1)"
      ],
      "conceptCompare": "如果是用牙籤排相連的「正三角形」，每多 1 個只多 2 根，所以公式變成「1 ＋ 2 × 正三角形個數」。",
      "examVariations": "段考常會反過來問：「用了 61 根火柴棒，可以排出幾個相連的正方形？」，只要先減最左邊 1 根剩 60，再除以 3 就得 20 個。"
    }
  },
  {
    "id": "U08-S2-M-052",
    "legacyId": "u08_m07",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "規律問題",
    "category": "空心方陣",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "空心方陣每邊 10 人，最外一圈共有幾人？",
    "options": [
      {
        "key": "A",
        "text": "36 人",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "40 人",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "100 人",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "38 人",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(10 - 1) * 4",
      "expect": "36"
    },
    "explanation": {
      "examPurpose": "測驗學生在計算正方形周邊人數（空心方陣）時，是否記得扣除 4 個頂點被重複計算的人數。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 380 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"60\" y=\"24\" width=\"112\" height=\"112\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"24\" x2=\"156\" y2=\"24\" stroke=\"#dc2626\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"172\" y1=\"24\" x2=\"172\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"172\" y1=\"136\" x2=\"76\" y2=\"136\" stroke=\"#16a34a\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"136\" x2=\"60\" y2=\"40\" stroke=\"#d97706\" stroke-width=\"6\" stroke-linecap=\"round\"/><text x=\"116\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">每組 9 人</text><text x=\"282\" y=\"62\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">4 條邊轉一圈分組：</text><text x=\"282\" y=\"86\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">每邊扣除下一個轉角</text><text x=\"282\" y=\"110\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">(10 − 1) × 4 ＝ 36 人</text></svg>",
          "caption": "把 4 條邊順時針各分成「每組 9 人」（含頭不含尾），4 組剛好不重複也不遺漏地湊成整圈。"
        },
        {
          "type": "text",
          "text": "第 1 步：如果直接 4 邊各算 10 人（40 人），四個角落的人剛好各被鄰邊重複算了 2 次。"
        },
        {
          "type": "eq",
          "expr": "10 × 4 − 4 ＝ 36",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "第 2 步：也可以把四條邊順時針各少算 1 個頂點，變成 (10 − 1) × 4 ＝ 36 人。"
        },
        {
          "type": "answer",
          "text": "答：36 人"
        }
      ],
      "insight": "正方形方陣外圈 ＝ (每邊人數 − 1) × 4（或每邊人數 × 4 − 4），關鍵是處理四個頂點的重複問題。",
      "distractorAnalysis": {
        "C": "誤把空心方陣外圈人數當成實心方陣總人數 10 × 10 ＝ 100 人。",
        "D": "知道要扣掉重複角落，但粗心只扣了 2 人而非 4 人。",
        "B": "直接算成 10 × 4 ＝ 40 人，忘記四個角落的人都被計算了兩次。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "空心正方形外圈 ＝ (每邊個數 − 1) × 4",
        "正三角形外圈 ＝ (每邊個數 − 1) × 3"
      ],
      "conceptCompare": "正多邊形外圈其實和「封閉圖形植樹」道理相同：轉角算 1 個點，總數就等於 4 條邊的間隔數總和。",
      "examVariations": "若改問「正三角形花壇每邊擺 10 盆花（三個頂點都擺），共要幾盆？」，算式為 (10 − 1) × 3 ＝ 27 盆。"
    }
  },
  {
    "id": "U08-S2-M-053",
    "legacyId": "u08_m08",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "規律問題",
    "category": "數列規律",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "1、4、9、16、□，□ 是多少？",
    "options": [
      {
        "key": "A",
        "text": "20",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "B",
        "text": "24",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "32",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "25",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "5 * 5",
      "expect": "25"
    },
    "explanation": {
      "examPurpose": "測驗學生對平方數列與相鄰差為連續奇數（3、5、7、9）規律的敏感度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察每一項和項次之間的乘法關係，或是相鄰兩數的差。"
        },
        {
          "type": "eq",
          "expr": "1 ＝ 1 × 1，4 ＝ 2 × 2，9 ＝ 3 × 3，16 ＝ 4 × 4",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：第 5 項就是 5 × 5 ＝ 25（也可以用相差 3、5、7，下一個加 9：16 ＋ 9 ＝ 25）。"
        },
        {
          "type": "eq",
          "expr": "5 × 5 ＝ 25",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：25"
        }
      ],
      "insight": "1、4、9、16、25、36……是經典的平方數列，同時相鄰兩數的差剛好是 3、5、7、9、11……的連續奇數。",
      "distractorAnalysis": {
        "A": "沒有觀察前後項差的變化，誤以為第 4 項 16 加上 4 就得 20。",
        "B": "看出差值在變大，但計算 16 ＋ 9 時粗心錯算成 16 ＋ 8 ＝ 24。",
        "C": "誤以為數列是用乘以 2 變大的，將 16 × 2 ＝ 32 當成下一項。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "第 1 項到第 10 項平方數：1、4、9、16、25、36、49、64、81、100"
      ],
      "conceptCompare": "找數列規律時，先算「前後兩數的差」，如果差每次固定增加 2（3、5、7、9），通常就對應正方形點陣圖的面積！",
      "examVariations": "段考常考「這組數列第 10 個數是多少？」，用 10 × 10 ＝ 100 比一個一個加奇數快得多。"
    }
  },
  {
    "id": "U08-RV-M-054",
    "legacyId": "u08_m09",
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "怎樣解題總複習",
    "category": "雞兔同籠",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "雞兔同籠共 10 個頭、32 隻腳，兔子有幾隻？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "假設全雞腳數",
          "units": 5,
          "role": "base"
        },
        {
          "label": "實際總腳數",
          "units": 8,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "多出 32 − 20 ＝ 12 隻腳（每隻兔比雞多 2 隻腳）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "4 隻",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "5 隻",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "8 隻",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "D",
        "text": "6 隻",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(32 - 10 * 2) / (4 - 2)",
      "expect": "6"
    },
    "explanation": {
      "examPurpose": "測驗學生是否熟練使用「假設法」解決雞兔問題，並能清楚辨別求出的是雞還是兔。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 1 步：題目要求兔子，就先假設 10 隻全部都是雞，算出總腳數與實際腳數的差。"
        },
        {
          "type": "eq",
          "expr": "2 × 10 ＝ 20",
          "unit": "隻腳（假設全是雞）"
        },
        {
          "type": "eq",
          "expr": "32 − 20 ＝ 12",
          "unit": "隻腳（少算的腳數）"
        },
        {
          "type": "text",
          "text": "第 2 步：每把 1 隻雞換成 1 隻兔子會多出 4 − 2 ＝ 2 隻腳，把少算的 12 隻腳除以 2 就是兔子數。"
        },
        {
          "type": "eq",
          "expr": "12 ÷ (4 − 2) ＝ 6",
          "unit": "隻兔子"
        },
        {
          "type": "answer",
          "text": "答：6 隻"
        }
      ],
      "insight": "假設法口訣：假設全都是「另一種」，求出來的結果就會剛好是「題目要問的那一種」！",
      "figureNote": "假設 10 隻全是雞只有 20 隻腳，比實際 32 隻腳少了 12 隻；每換 1 隻兔子能補回 2 隻腳，12 ÷ 2 ＝ 6 隻兔子。",
      "distractorAnalysis": {
        "A": "假設全都是兔算出雞有 4 隻後，搞反對象直接選成 4 隻。",
        "B": "沒有算每隻動物的腳數差，誤把 10 隻對半平分成 5 隻。",
        "C": "假設全是兔得 40 − 32 ＝ 8 隻腳差後，忘記除以每隻差 2 隻腳就直接作答。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全雞時：兔子隻數 ＝ (總腳數 − 2 × 總頭數) ÷ (4 − 2)",
        "假設全兔時：雞的隻數 ＝ (4 × 總頭數 − 總腳數) ÷ (4 − 2)"
      ],
      "conceptCompare": "雞兔問題的重點不是真的養雞養兔，舉凡大小車載人、5 元與 10 元硬幣、雙人房與四人房全部都用同一招「假設法」。",
      "examVariations": "段考最常出現「測驗答對得 5 分、答錯倒扣 2 分」，此時每換一題的分數差是 5 ＋ 2 ＝ 7 分（不是 5 − 2），要特別小心！"
    }
  },
  {
    "id": "U08-S2-M-055",
    "legacyId": "u08_m10",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "規律問題",
    "category": "高斯配對",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "1 ＋ 2 ＋ 3 ＋ …… ＋ 10 等於多少？",
    "options": [
      {
        "key": "A",
        "text": "50",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "B",
        "text": "55",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "100",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "110",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(1 + 10) * 10 / 2",
      "expect": "55"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解等差數列「頭尾配對」的高斯求和想法，並記得總數要除以 2。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 125\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><path d=\"M 45,75 Q 230,10 415,75\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><path d=\"M 86,75 Q 230,26 374,75\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 127,75 Q 230,40 333,75\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2\"/><path d=\"M 168,75 Q 230,52 292,75\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/><path d=\"M 209,75 Q 230,62 251,75\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2\"/><text x=\"45\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"86\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">2</text><text x=\"127\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">3</text><text x=\"168\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">4</text><text x=\"209\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">5</text><text x=\"251\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">6</text><text x=\"292\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">7</text><text x=\"333\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">8</text><text x=\"374\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">9</text><text x=\"415\" y=\"94\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">10</text><text x=\"230\" y=\"116\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">頭尾配成 5 對：1＋10、2＋9、3＋8、4＋7、5＋6，每對和都是 11</text></svg>",
          "caption": "把 1 到 10 從兩端頭尾配對，剛好可以配成 5 對，每一對的和都是 11。"
        },
        {
          "type": "text",
          "text": "第 1 步：將最小和最大的數頭尾配對，發現每對的和都一樣是 11，10 個數共有 5 對。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 10 ＝ 11",
          "unit": "（每對的和）"
        },
        {
          "type": "eq",
          "expr": "11 × (10 ÷ 2) ＝ 55",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：55"
        }
      ],
      "insight": "等差數列總和 ＝ (首項 ＋ 尾項) × 項數 ÷ 2，就像計算梯形面積「(上底 ＋ 下底) × 高 ÷ 2」一樣！",
      "distractorAnalysis": {
        "A": "誤以為每對的和是 10，算成 10 × 5 ＝ 50。",
        "C": "未正確配對求和，粗心算成 10 × 10 ＝ 100。",
        "D": "直接算 (1 ＋ 10) × 10 ＝ 110，卻忘記因為兩個數配成一對，最後要除以 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "等差數列和 ＝ (頭 ＋ 尾) × 個數 ÷ 2"
      ],
      "conceptCompare": "把 1 到 10 排成正梯形，再把一組倒過來的 10 到 1 併在一起，每一行都是 11、共有 10 行，因此兩組共 110，除以 2 就是 55。",
      "examVariations": "若問「1 ＋ 2 ＋ 3 ＋ …… ＋ 100」，同樣算法 (1 ＋ 100) × 100 ÷ 2 ＝ 5050，背起來在腦力題很有用！"
    }
  },
  {
    "id": "U08-S1-M-056",
    "legacyId": "u08_m11",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "敲鐘間隔",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "時鐘 3 點敲 3 下用 2 秒，6 點敲 6 下要幾秒？",
    "options": [
      {
        "key": "A",
        "text": "4 秒",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "B",
        "text": "5 秒",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "3 秒",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6 秒",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "2 / (3 - 1) * (6 - 1)",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "測驗學生是否看穿「敲鐘花的時間是在兩聲之間的間隔，而不是在敲的次數」，能轉換成間隔問題計算。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><text x=\"36\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">敲 3 下</text><circle cx=\"110\" cy=\"38\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"170\" cy=\"38\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"230\" cy=\"38\" r=\"7\" fill=\"#2563eb\"/><path d=\"M 110,30 Q 140,12 170,30\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><path d=\"M 170,30 Q 200,12 230,30\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"140\" y=\"18\" font-size=\"11\" fill=\"#dc2626\" text-anchor=\"middle\">1 秒</text><text x=\"200\" y=\"18\" font-size=\"11\" fill=\"#dc2626\" text-anchor=\"middle\">1 秒</text><text x=\"36\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\">敲 6 下</text><circle cx=\"110\" cy=\"92\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"170\" cy=\"92\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"230\" cy=\"92\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"290\" cy=\"92\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"350\" cy=\"92\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"410\" cy=\"92\" r=\"7\" fill=\"#16a34a\"/><path d=\"M 110,84 Q 140,66 170,84\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><path d=\"M 170,84 Q 200,66 230,84\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><path d=\"M 230,84 Q 260,66 290,84\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><path d=\"M 290,84 Q 320,66 350,84\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><path d=\"M 350,84 Q 380,66 410,84\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"260\" y=\"118\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">共有 5 個間隔 → 1 × 5 ＝ 5 秒</text></svg>",
          "caption": "敲第 1 下就開始計時，敲 3 下只經過 2 個間隔（共 2 秒），敲 6 下要經過 5 個間隔（共 5 秒）。"
        },
        {
          "type": "text",
          "text": "第 1 步：敲 3 下之間只有 3 − 1 ＝ 2 個時間間隔，用 2 秒代表每個間隔是 1 秒。"
        },
        {
          "type": "eq",
          "expr": "2 ÷ (3 − 1) ＝ 1",
          "unit": "秒（每個間隔）"
        },
        {
          "type": "text",
          "text": "第 2 步：敲 6 下有 6 − 1 ＝ 5 個間隔，所以需要 5 秒。"
        },
        {
          "type": "eq",
          "expr": "1 × (6 − 1) ＝ 5",
          "unit": "秒"
        },
        {
          "type": "answer",
          "text": "答：5 秒"
        }
      ],
      "insight": "時間花在「間隔」上，不是花在「敲」的那一瞬間：敲 1 下在第 0 秒，所以間隔數 ＝ 敲的次數 − 1。",
      "distractorAnalysis": {
        "A": "誤以為 6 下是 3 下的 2 倍，就直接把 2 秒乘以 2 算成 4 秒。",
        "C": "在換算間隔數與秒數時粗心算錯，誤得出 3 秒。",
        "D": "知道每個間隔 1 秒，卻忘了間隔數比次數少 1，算成 6 × 1 ＝ 6 秒。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "間隔數 ＝ 敲鐘次數 − 1",
        "總耗時 ＝ 每個間隔秒數 × (敲鐘次數 − 1)"
      ],
      "conceptCompare": "敲鐘問題和「爬樓梯」、「吃藥計時」完全是同一種間隔模型：第 1 次都在起點 0 秒，後面每間隔一次才計時間。",
      "examVariations": "若題目接著問「半夜 12 點敲 12 下要幾秒？」，千萬別乘 4 變成 8 秒，正確算法是 1 × (12 − 1) ＝ 11 秒。"
    }
  },
  {
    "id": "U08-S2-M-057",
    "legacyId": "u08_m12",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "規律問題",
    "category": "容斥原理",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "1 到 100 中，是 3 的倍數「或」5 的倍數的數有幾個？",
    "options": [
      {
        "key": "A",
        "text": "47 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "33 個",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "53 個",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "D",
        "text": "39 個",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "33 + 20 - 6",
      "expect": "47"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能結合公倍數與重複扣除（容斥原理），排除同時是 3 和 5 的公倍數被算了兩次的情況。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><circle cx=\"160\" cy=\"68\" r=\"50\" fill=\"#dbeafe\" fill-opacity=\"0.75\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><circle cx=\"250\" cy=\"68\" r=\"50\" fill=\"#fef3c7\" fill-opacity=\"0.75\" stroke=\"#d97706\" stroke-width=\"2.5\"/><text x=\"132\" y=\"64\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">3 的倍數</text><text x=\"132\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">共 33 個</text><text x=\"278\" y=\"64\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">5 的倍數</text><text x=\"278\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">共 20 個</text><text x=\"205\" y=\"64\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">15 的倍數</text><text x=\"205\" y=\"82\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">重疊 6 個</text><text x=\"205\" y=\"132\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">33 ＋ 20 − 6 ＝ 47 個</text></svg>",
          "caption": "像 15、30、45、60、75、90 這 6 個數同時屬於兩個圈圈，加總後必須扣回 1 次。"
        },
        {
          "type": "text",
          "text": "第 1 步：先分別算出 1 到 100 中 3 的倍數、5 的倍數各有多少個（取整數商）。"
        },
        {
          "type": "eq",
          "expr": "100 ÷ 3 ＝ 33 … 1",
          "unit": "（3 的倍數有 33 個）"
        },
        {
          "type": "eq",
          "expr": "100 ÷ 5 ＝ 20",
          "unit": "（5 的倍數有 20 個）"
        },
        {
          "type": "text",
          "text": "第 2 步：同時是 3 和 5 的倍數，就是 15 的倍數（15、30、45、60、75、90），這 6 個在兩邊各算了 1 次，所以要扣掉 6 個。"
        },
        {
          "type": "eq",
          "expr": "100 ÷ 15 ＝ 6 … 10",
          "unit": "（重疊 6 個）"
        },
        {
          "type": "eq",
          "expr": "33 ＋ 20 − 6 ＝ 47",
          "unit": "個"
        },
        {
          "type": "answer",
          "text": "答：47 個"
        }
      ],
      "insight": "計算「甲或乙」的總個數時：甲的個數 ＋ 乙的個數 − 兩者重疊的個數，才不會把重疊部分多算一次。",
      "distractorAnalysis": {
        "B": "只算出了 3 的倍數有 33 個，漏掉了 5 的倍數也要算進去。",
        "C": "直接將 33 ＋ 20 ＝ 53，忘記扣掉同時是 15 的倍數被重複計算的 6 個數。",
        "D": "在計算除法個數或加減時粗心出錯，算出 39 個。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 到某數中某因數的倍數個數 ＝ 該數 ÷ 因數（取整數商）",
        "甲或乙總數 ＝ 甲 ＋ 乙 − 同時滿足甲與乙（公倍數）"
      ],
      "conceptCompare": "求兩數的「公倍數」必須先找最小公倍數（3 和 5 的最小公倍數是 15），再看 100 裡面有幾個 15。",
      "examVariations": "段考常把題目反過來問：「1 到 100 中，既不是 3 的倍數也不是 5 的倍數有幾個？」，只要用 100 − 47 ＝ 53 個就解決了。"
    }
  },
  {
    "id": "U08-S1-M-058",
    "legacyId": "u08_m13",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "排隊位置",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "小明排隊，從前面數是第 8 個，從後面數是第 12 個，這一排共幾人？",
    "options": [
      {
        "key": "A",
        "text": "19 人",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "21 人",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "20 人",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "D",
        "text": "18 人",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "8 + 12 - 1",
      "expect": "19"
    },
    "explanation": {
      "examPurpose": "測驗學生對排隊問題中「序數包含自己」的重複計數判斷。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><line x1=\"40\" y1=\"56\" x2=\"420\" y2=\"56\" stroke=\"#94a3b8\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"56\" r=\"6\" fill=\"#64748b\"/><circle cx=\"190\" cy=\"56\" r=\"10\" fill=\"#dc2626\"/><circle cx=\"420\" cy=\"56\" r=\"6\" fill=\"#64748b\"/><path d=\"M 40,36 L 40,28 L 190,28 L 190,36\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"115\" y=\"20\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">從前面數第 8 個（含小明）</text><path d=\"M 190,76 L 190,84 L 420,84 L 420,76\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"305\" y=\"102\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">從後面數第 12 個（也含小明）</text><text x=\"190\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">小明</text></svg>",
          "caption": "前面數過來的 8 個人與後面數過去的 12 個人，剛好都在「小明」這裡重疊了 1 次。"
        },
        {
          "type": "text",
          "text": "第 1 步：從前面數到小明有 8 人，從後面數到小明有 12 人，兩邊都把小明自己算進去了。"
        },
        {
          "type": "text",
          "text": "第 2 步：把兩邊加起來後，小明重複算了 2 次，所以要扣掉 1 次。"
        },
        {
          "type": "eq",
          "expr": "8 ＋ 12 − 1 ＝ 19",
          "unit": "人"
        },
        {
          "type": "answer",
          "text": "答：19 人"
        }
      ],
      "insight": "前數 ＋ 後數 − 1。如果分不清是「第 8 個」還是「前面有 8 個人」，記得：「第」字有包含自己，「有」字不含自己！",
      "distractorAnalysis": {
        "B": "錯用「之間還有幾人」或加錯方向，算成 8 ＋ 12 ＋ 1 ＝ 21 人。",
        "D": "在減 1 時多減了一人或計算粗心，錯算成 18 人。",
        "C": "直接把 8 ＋ 12 ＝ 20，忘記小明在兩次報數中被重複計算了 1 次。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "全隊人數 ＝ 前面數來第幾個 ＋ 後面數來第幾個 − 1"
      ],
      "conceptCompare": "比較這兩句話：「小明前面有 8 人、後面有 12 人」總人數是 8 ＋ 1 ＋ 12 ＝ 21 人；「從前面數第 8 個、從後面數第 12 個」總人數是 8 ＋ 12 − 1 ＝ 19 人。",
      "examVariations": "段考也常考「隊伍共 25 人，小華排在從前面數第 9 個，從後面數是第幾個？」，用 25 − 9 ＋ 1 ＝ 第 17 個。"
    }
  },
  {
    "id": "U08-S2-M-059",
    "legacyId": "u08_m14",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "規律問題",
    "category": "數列奇偶",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "數列 1、1、2、3、5、8、13、……（每項是前兩項的和），第 100 項是奇數還是偶數？",
    "options": [
      {
        "key": "A",
        "text": "無法判斷",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "偶數",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "C",
        "text": "奇數",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "剛好是 0",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "100 - 3 * 33",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗學生是否會把大數列簡化為「奇偶週期規律」，利用除法餘數直接判斷第 100 項的奇偶性。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把數列 1、1、2、3、5、8、13……全部改寫成「奇、偶」，並找出重複出現的一組循環。"
        },
        {
          "type": "text",
          "text": "奇、奇、偶、奇、奇、偶、奇……可以發現每「3 個數」為一組不斷循環（奇、奇、偶）。"
        },
        {
          "type": "text",
          "text": "第 2 步：用 100 除以每組 3 個，看餘數對應到每組的第幾個。"
        },
        {
          "type": "eq",
          "expr": "100 ÷ 3 ＝ 33 … 1",
          "unit": "（餘 1 代表第 34 組的第 1 個）"
        },
        {
          "type": "text",
          "text": "第 3 步：每組第 1 個都是「奇數」，所以第 100 項是奇數。"
        },
        {
          "type": "answer",
          "text": "答：奇數"
        }
      ],
      "insight": "遇到巨大的項數不用硬算數值，只追蹤「奇偶性」的週期：奇 ＋ 奇 ＝ 偶、奇 ＋ 偶 ＝ 奇，就能馬上看出 3 個一循環。",
      "distractorAnalysis": {
        "B": "找錯週期或餘數看錯位置，誤把餘 1 當成每組最後一個而選偶數。",
        "D": "誤以為規律數列經過很多項後會循環回到 0。",
        "A": "誤以為沒有把數列算到第 100 個數字就無法知道奇偶。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "奇數 ＋ 奇數 ＝ 偶數；奇數 ＋ 偶數 ＝ 奇數",
        "週期問題定位：總項數 ÷ 每組個數 ＝ 組數 … 餘數（整除看最後一個）"
      ],
      "conceptCompare": "這種只看奇偶、餘數而不算真實大小的想法，是解決超大項次問題的必備絕招。",
      "examVariations": "若改問「前 100 項裡面共有幾個偶數？」，因為每 3 項有 1 個偶數，100 ÷ 3 ＝ 33 組餘 1（第 100 項是奇數），所以剛好有 33 個偶數。"
    }
  },
  {
    "id": "U08-S3-M-060",
    "legacyId": "u08_m15",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "搭配與組合問題",
    "category": "握手問題",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "6 個人，每兩人握手一次，共握幾次？",
    "options": [
      {
        "key": "A",
        "text": "15 次",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "30 次",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "C",
        "text": "36 次",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "D",
        "text": "12 次",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "6 * 5 / 2",
      "expect": "15"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解兩兩配對組合中「甲握乙與乙握甲算同一次」，需除以 2 排除重複計算。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 420 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><line x1=\"110\" y1=\"30\" x2=\"170\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"110\" y1=\"30\" x2=\"200\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"110\" y1=\"30\" x2=\"170\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"110\" y1=\"30\" x2=\"110\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"110\" y1=\"30\" x2=\"80\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"2\"/><line x1=\"170\" y1=\"30\" x2=\"200\" y2=\"75\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"30\" x2=\"170\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"30\" x2=\"110\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"30\" x2=\"80\" y2=\"75\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"200\" y1=\"75\" x2=\"170\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"200\" y1=\"75\" x2=\"110\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"200\" y1=\"75\" x2=\"80\" y2=\"75\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"120\" x2=\"110\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"120\" x2=\"80\" y2=\"75\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"120\" x2=\"80\" y2=\"75\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"30\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"170\" cy=\"30\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"200\" cy=\"75\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"170\" cy=\"120\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"110\" cy=\"120\" r=\"7\" fill=\"#2563eb\"/><circle cx=\"80\" cy=\"75\" r=\"7\" fill=\"#2563eb\"/><text x=\"315\" y=\"66\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">紅點連出 5 條線</text><text x=\"315\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">5 ＋ 4 ＋ 3 ＋ 2 ＋ 1 ＝ 15 次</text></svg>",
          "caption": "6 個人排成一圈，第 1 人與其餘 5 人握手，第 2 人只要再握剩下 4 人，依序加起來共 15 次。"
        },
        {
          "type": "text",
          "text": "第 1 步：每個人都和其他 5 個人握一次手，共會算出 6 × 5 ＝ 30 次。"
        },
        {
          "type": "text",
          "text": "第 2 步：但每對人之間只握一次（你握我 ＝ 我握你），剛才每人各自算一次等於重複算了 2 遍，所以必須除以 2。"
        },
        {
          "type": "eq",
          "expr": "6 × 5 ÷ 2 ＝ 15",
          "unit": "次"
        },
        {
          "type": "answer",
          "text": "答：15 次"
        }
      ],
      "insight": "兩兩握手或單循環賽總次數 ＝ 人數 × (人數 − 1) ÷ 2，也可以從 5 ＋ 4 ＋ 3 ＋ 2 ＋ 1 慢慢加出 15 次來互相檢查。",
      "distractorAnalysis": {
        "C": "忘記人不會自己跟自己握手，算成 6 × 6 ＝ 36 次。",
        "D": "誤用 6 × 2 ＝ 12 次，沒有正確列出配對算式。",
        "B": "算出了 6 × 5 ＝ 30 次，卻忘記兩人互相握手只算 1 次，沒有除以 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩兩配對次數 ＝ 人數 × (人數 − 1) ÷ 2",
        "或倒數相加：(人數 − 1) ＋ (人數 − 2) ＋ …… ＋ 1"
      ],
      "conceptCompare": "注意區分「互相寄賀年卡」與「互相握手」：互寄卡片你寄給我、我寄給你算 2 張，不用除以 2（6 × 5 ＝ 30 張）；握手和單循環球賽沒有順序之分，一定要除以 2。",
      "examVariations": "段考常考「9 支球隊打單循環賽，每兩隊比一場，共要比幾場？」，算式為 9 × 8 ÷ 2 ＝ 36 場。"
    }
  },
  {
    "id": "U08-S1-M-061",
    "legacyId": "u08_m16",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "兩側植樹",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "100 公尺長的路，兩側每隔 10 公尺種一棵樹，兩端都種，共幾棵？",
    "options": [
      {
        "key": "A",
        "text": "11 棵",
        "trapCode": "U08_BOTH_SIDES_FORGET_MUL2"
      },
      {
        "key": "B",
        "text": "22 棵",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "20 棵",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "10 棵",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(100 / 10 + 1) * 2",
      "expect": "22"
    },
    "explanation": {
      "examPurpose": "測驗學生在植樹問題中是否能同時顧及「兩端都種（＋ 1）」與「馬路兩側（× 2）」兩個關鍵條件。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"40\" y=\"42\" width=\"380\" height=\"46\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><circle cx=\"48\" cy=\"32\" r=\"6\" fill=\"#16a34a\"/><circle cx=\"118\" cy=\"32\" r=\"6\" fill=\"#16a34a\"/><circle cx=\"188\" cy=\"32\" r=\"6\" fill=\"#16a34a\"/><text x=\"255\" y=\"36\" font-size=\"14\" font-weight=\"700\" fill=\"#475569\">……</text><circle cx=\"342\" cy=\"32\" r=\"6\" fill=\"#16a34a\"/><circle cx=\"412\" cy=\"32\" r=\"6\" fill=\"#16a34a\"/><circle cx=\"48\" cy=\"98\" r=\"6\" fill=\"#16a34a\"/><circle cx=\"118\" cy=\"98\" r=\"6\" fill=\"#16a34a\"/><circle cx=\"188\" cy=\"98\" r=\"6\" fill=\"#16a34a\"/><text x=\"255\" y=\"102\" font-size=\"14\" font-weight=\"700\" fill=\"#475569\">……</text><circle cx=\"342\" cy=\"98\" r=\"6\" fill=\"#16a34a\"/><circle cx=\"412\" cy=\"98\" r=\"6\" fill=\"#16a34a\"/><text x=\"230\" y=\"69\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">馬路長 100 公尺（每側 10 個間隔 → 11 棵）</text><text x=\"230\" y=\"122\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">上側 11 棵 ＋ 下側 11 棵 ＝ 22 棵</text></svg>",
          "caption": "馬路的上下兩側各有一排樹，每側有 10 個間隔、兩端都種共 11 棵，兩側合計 22 棵。"
        },
        {
          "type": "text",
          "text": "第 1 步：先只看馬路的其中一側，算出間隔數後因為兩端都種，再加 1。"
        },
        {
          "type": "eq",
          "expr": "100 ÷ 10 ＋ 1 ＝ 11",
          "unit": "棵（單側棵數）"
        },
        {
          "type": "text",
          "text": "第 2 步：題目要求馬路「兩側」都要種樹，最後把單側棵數乘以 2。"
        },
        {
          "type": "eq",
          "expr": "11 × 2 ＝ 22",
          "unit": "棵"
        },
        {
          "type": "answer",
          "text": "答：22 棵"
        }
      ],
      "insight": "遇到「兩旁／兩側」題型一定要最後才乘以 2：先算單側，再乘 2；如果已知總棵數反求路長，則要先除以 2 回單側！",
      "distractorAnalysis": {
        "A": "算對了單側是 11 棵，卻漏看「兩側」兩個字而忘記乘以 2。",
        "D": "只算出單側的間隔數 100 ÷ 10 ＝ 10，既沒加 1 也沒乘以 2。",
        "C": "記得乘以 2，卻忘了每側兩端都種要先加 1，只算 10 × 2 ＝ 20 棵。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "道路兩側植樹總數 ＝ 單側棵數 × 2"
      ],
      "conceptCompare": "題目中最容易漏看的關鍵字就是「一側」還是「兩側（兩旁）」，畫圖時養成習慣先把馬路兩邊都點出樹的位置。",
      "examVariations": "反推題常考：「240 公尺筆直公路兩側兩端都設路燈，總共設了 34 盞，相鄰兩盞路燈相距幾公尺？」，必須先 34 ÷ 2 ＝ 17 盞，再 17 − 1 ＝ 16 個間隔，240 ÷ 16 ＝ 15 公尺。"
    }
  },
  {
    "id": "U08-S1-M-062",
    "legacyId": "u08_m17",
    "unitId": "U08",
    "section": "8-1",
    "sectionName": "間隔問題",
    "category": "青蛙爬井",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "井深 10 公尺，青蛙白天爬 3 公尺、晚上滑下 2 公尺。第幾天能爬出井口？",
    "options": [
      {
        "key": "A",
        "text": "第 8 天",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "第 10 天",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "C",
        "text": "第 7 天",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "第 9 天",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(10 - 3) / (3 - 2) + 1",
      "expect": "8"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「最後一天白天爬到井口就已經出井，不會再於晚上滑下」的分段思考。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 155\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"80\" y=\"20\" width=\"70\" height=\"118\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"65\" y1=\"20\" x2=\"165\" y2=\"20\" stroke=\"#16a34a\" stroke-width=\"3\"/><line x1=\"80\" y1=\"55\" x2=\"150\" y2=\"55\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 115,134 L 115,60\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/><path d=\"M 115,52 L 115,24\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3.5\"/><text x=\"175\" y=\"25\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\">井口 10 公尺（第 8 天白天爬出）</text><text x=\"180\" y=\"60\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">第 7 天結束時爬到 7 公尺</text><text x=\"180\" y=\"105\" font-size=\"12\" fill=\"#334155\">前 7 天每天淨上升 3 − 2 ＝ 1 公尺</text><text x=\"180\" y=\"138\" font-size=\"12\" fill=\"#475569\">井底 0 公尺</text></svg>",
          "caption": "先保留最後一天白天能爬上的 3 公尺，前 7 天到達 7 公尺後，第 8 天白天一跳就到 10 公尺井口。"
        },
        {
          "type": "text",
          "text": "第 1 步：先把最後一天白天會爬完的 3 公尺預留出來，看看前面需要淨上升幾公尺。"
        },
        {
          "type": "eq",
          "expr": "10 − 3 ＝ 7",
          "unit": "公尺（前幾天需淨上升的距離）"
        },
        {
          "type": "text",
          "text": "第 2 步：每天白天爬 3 公尺、晚上滑 2 公尺，一天淨爬 3 − 2 ＝ 1 公尺，爬到 7 公尺需要 7 天。"
        },
        {
          "type": "eq",
          "expr": "7 ÷ (3 − 2) ＝ 7",
          "unit": "天"
        },
        {
          "type": "text",
          "text": "第 3 步：第 8 天白天再往上爬 3 公尺，7 ＋ 3 ＝ 10 公尺剛好到達井口出去，所以共花 7 ＋ 1 ＝ 8 天。"
        },
        {
          "type": "eq",
          "expr": "7 ＋ 1 ＝ 8",
          "unit": "天"
        },
        {
          "type": "answer",
          "text": "答：第 8 天"
        }
      ],
      "insight": "青蛙爬井口訣：先扣掉最後白天那一段，算出前面要幾天，最後再加上那 1 天；千萬別直接拿總深度除以淨爬高度！",
      "distractorAnalysis": {
        "C": "算出前 7 天抵達 7 公尺後就停下來作答，忘記還要加上最後爬出去的第 8 天。",
        "D": "估算最後一天或倒推剩餘距離時加減錯位，誤算出第 9 天。",
        "B": "直接用總深度 10 ÷ 每天淨爬 1 ＝ 10 天，忘了第 8 天白天爬到井口後不會再滑下來。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "安全距離 ＝ 井深 − 白天爬升高度",
        "總天數 ＝ (井深 − 白天爬高) ÷ (白天爬高 − 晚上下滑) ＋ 1（若前面有餘數則無條件進位成整數天）"
      ],
      "conceptCompare": "這種「最後一步不會退回」的現象，在工程進度、蝸牛爬樹或存錢買東西湊滿目標時都會遇到。",
      "examVariations": "若改為「井深 11 公尺，白天爬 4 公尺、晚上滑 2 公尺」，11 − 4 ＝ 7 公尺，每天淨爬 2 公尺需 4 天（到達 8 公尺），第 5 天白天直接爬出井口，共 5 天。"
    }
  },
  {
    "id": "U08-S3-M-063",
    "legacyId": "u08_m18",
    "unitId": "U08",
    "section": "8-3",
    "sectionName": "搭配與組合問題",
    "category": "淘汰賽",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "64 人參加單淘汰賽（每場淘汰 1 人），要比幾場才能產生冠軍？",
    "options": [
      {
        "key": "A",
        "text": "32 場",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      },
      {
        "key": "B",
        "text": "64 場",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "6 場",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "63 場",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "64 - 1",
      "expect": "63"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能跳脫一輪一輪加總的繁瑣計算，改用「一場剛好淘汰 1 人」的一對一對應思維秒解。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：單淘汰賽每一場比賽都會有 1 位贏家晉級、1 位輸家被淘汰。"
        },
        {
          "type": "text",
          "text": "第 2 步：64 人最後只剩下 1 位冠軍，代表必須淘汰掉 64 − 1 ＝ 63 人，而淘汰 1 人剛好需要 1 場比賽。"
        },
        {
          "type": "eq",
          "expr": "64 − 1 ＝ 63",
          "unit": "場"
        },
        {
          "type": "text",
          "text": "第 3 步：也可以用每輪場數驗算：32 ＋ 16 ＋ 8 ＋ 4 ＋ 2 ＋ 1 ＝ 63 場，完全一致。"
        },
        {
          "type": "answer",
          "text": "答：63 場"
        }
      ],
      "insight": "換個角度想：不要去數「每一輪比幾場」，直接數「總共要淘汰幾個人」！幾個人被淘汰就要比幾場。",
      "distractorAnalysis": {
        "A": "只算出了第一輪 64 ÷ 2 ＝ 32 場，忘記還要加上後續決賽各輪的場數。",
        "B": "誤以為有 64 位選手就要比 64 場，忘了最後的冠軍從頭到尾不會被淘汰。",
        "C": "把總共要打 6 輪（32、16、8、4、2、1）誤當成總共只打 6 場比賽。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "單淘汰賽產生唯一冠軍總場數 ＝ 參賽總人數 − 1"
      ],
      "conceptCompare": "即使參賽人數不是 2 的連乘積（例如 37 隊參加有輪空的單淘汰賽），一樣是每場淘汰 1 隊、留 1 冠，總場數照樣是 37 − 1 ＝ 36 場！",
      "examVariations": "段考偶爾會改問「若還要另外加賽一場季軍戰，共要比幾場？」，那就會多 1 場變成 (人數 − 1) ＋ 1 ＝ 64 場。"
    }
  },
  {
    "id": "U08-RV-M-064",
    "legacyId": "u08_m19",
    "unitId": "U08",
    "section": "REVIEW",
    "sectionName": "怎樣解題總複習",
    "category": "抽屜原理",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "抽屜裡有紅襪 20 隻、黑襪 20 隻混在一起，摸黑拿，最少拿幾隻能保證有 2 隻同色？",
    "options": [
      {
        "key": "A",
        "text": "3 隻",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2 隻",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "C",
        "text": "11 隻",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "21 隻",
        "trapCode": "U08_COMB_DOUBLE_COUNT"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "2 + 1",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "測驗學生是否理解「抽屜原理」與「最壞情況 ＋ 1」的邏輯推理，不受干擾數字 20 的影響。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目要保證有 2 隻同色，思考時要先假設自己運氣「最倒楣」：每種顏色都只各拿到 1 隻。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1 ＝ 2",
          "unit": "隻（1 紅 1 黑，還沒有同色）"
        },
        {
          "type": "text",
          "text": "第 2 步：抽屜裡只有紅、黑 2 種顏色，所以再多拿第 3 隻時，不管是紅是黑，一定會跟手上其中一隻湊成同色！"
        },
        {
          "type": "eq",
          "expr": "2 ＋ 1 ＝ 3",
          "unit": "隻"
        },
        {
          "type": "answer",
          "text": "答：3 隻"
        }
      ],
      "insight": "「保證」問題看最壞情況：幾種顏色就先把每種各拿 1 隻（2 隻），再多拿 1 隻（共 3 隻）就一定達標，跟原本有 20 隻還是 200 隻毫無關係。",
      "distractorAnalysis": {
        "B": "只考慮運氣最好時（前 2 隻剛好同色），忘了題目要求「一定保證」需考量最倒楣的情況。",
        "C": "誤把單色數量 20 除以 2 再加 1，粗心算出 11 隻。",
        "D": "誤以為必須把某一種顏色的 20 隻全部拿完再加 1 隻，算成 20 ＋ 1 ＝ 21 隻。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "保證 2 隻同色最少拿取數 ＝ 顏色總數 ＋ 1"
      ],
      "conceptCompare": "如果題目變成「要保證拿到一雙紅襪（指定顏色）」，才需要把另一色全拿光再加 2 隻（20 ＋ 2 ＝ 22 隻）；只要沒指定哪一色，「顏色數 ＋ 1」就夠了！",
      "examVariations": "若抽屜裡有紅、黑、白 3 種顏色的襪子各 20 隻，至少要拿 3 ＋ 1 ＝ 4 隻才能保證有 2 隻同色。"
    }
  },
  {
    "id": "U08-S2-M-065",
    "legacyId": "u08_m20",
    "unitId": "U08",
    "section": "8-2",
    "sectionName": "規律問題",
    "category": "對折摺痕",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "一張紙對折 5 次後攤開，上面共有幾條摺痕？",
    "options": [
      {
        "key": "A",
        "text": "5 條",
        "trapCode": "U08_PATTERN_INDEX_OFF"
      },
      {
        "key": "B",
        "text": "10 條",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "31 條",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "32 條",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "2 * 2 * 2 * 2 * 2 - 1",
      "expect": "31"
    },
    "explanation": {
      "examPurpose": "測驗學生是否能結合「對折一次份數變 2 倍」與「摺痕數 ＝ 份數 − 1（間隔問題）」雙重規律。",
      "steps": [
        {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 460 135\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\"><rect x=\"25\" y=\"20\" width=\"120\" height=\"30\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><line x1=\"85\" y1=\"20\" x2=\"85\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/><text x=\"85\" y=\"68\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">對折 1 次：2 份、1 條</text><rect x=\"170\" y=\"20\" width=\"120\" height=\"30\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/><line x1=\"230\" y1=\"20\" x2=\"230\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/><line x1=\"260\" y1=\"20\" x2=\"260\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/><text x=\"230\" y=\"68\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">對折 2 次：4 份、3 條</text><rect x=\"315\" y=\"20\" width=\"120\" height=\"30\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><line x1=\"330\" y1=\"20\" x2=\"330\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"345\" y1=\"20\" x2=\"345\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"360\" y1=\"20\" x2=\"360\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"375\" y1=\"20\" x2=\"375\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"390\" y1=\"20\" x2=\"390\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"405\" y1=\"20\" x2=\"405\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><line x1=\"420\" y1=\"20\" x2=\"420\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/><text x=\"375\" y=\"68\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">對折 3 次：8 份、7 條</text><text x=\"230\" y=\"100\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">對折 5 次：2 × 2 × 2 × 2 × 2 ＝ 32 份</text><text x=\"230\" y=\"122\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">摺痕 ＝ 份數 − 1 ＝ 32 − 1 ＝ 31 條</text></svg>",
          "caption": "每多對折 1 次，紙張分成的等份數就乘以 2；而摺痕在紙的內部，永遠比份數少 1。"
        },
        {
          "type": "text",
          "text": "第 1 步：每對折 1 次，紙會被平分成原本的 2 倍份數，對折 5 次就是連續乘 5 個 2。"
        },
        {
          "type": "eq",
          "expr": "2 × 2 × 2 × 2 × 2 ＝ 32",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "第 2 步：摺痕就像鋸木頭的刀口，分成 32 份中間共有 32 − 1 ＝ 31 條摺痕。"
        },
        {
          "type": "eq",
          "expr": "32 − 1 ＝ 31",
          "unit": "條摺痕"
        },
        {
          "type": "answer",
          "text": "答：31 條"
        }
      ],
      "insight": "對折 1 次變 2 份（1 條摺痕）、2 次變 4 份（3 條）、3 次變 8 份（7 條）……先算連乘 2 得到總份數，再減 1 就是摺痕數。",
      "distractorAnalysis": {
        "A": "誤以為對折幾次只會產生幾條摺痕，忽略折起來後同時折出了好幾層。",
        "B": "錯把對折次數 5 乘以 2，算成 10 條。",
        "D": "算對了總共分成 32 份，卻忘記摺痕數 ＝ 份數 − 1 而誤選 32 條。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "對折 5 次分成的份數 ＝ 2 × 2 × 2 × 2 × 2 ＝ 32 份",
        "摺痕數 ＝ 總份數 − 1"
      ],
      "conceptCompare": "摺痕和剪紙條是一樣的原理：紙張被折成 32 等份，兩邊邊緣不算摺痕，所以中間只有 31 條摺痕。",
      "examVariations": "若題目接著問「沿著所有摺痕剪開後，總共會剪出幾張小紙片？」，剪開後就是總份數 32 張，不要再減 1 囉！"
    }
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U08'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
