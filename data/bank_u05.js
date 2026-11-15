// U05 兩量關係 4D 題庫分片（P7 全量 60 題：課本原型 20 + 奧數天梯 20 + 純腦力體操 20）
(function (root) {
  const DATA = [
  {
    "id": "U05-S1-B-001",
    "legacyId": "u05_001",
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "基準量與比較量比值",
    "batch": "課本原型題",
    "source": "課本 p.72 例題 1",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "弟弟的身高是 120 公分，哥哥的身高是 150 公分。以弟弟的身高為基準量，哥哥身高的比值是多少？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "弟弟 (基準量)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "哥哥 (比較量)",
          "units": 1.25,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "哥哥多 0.25 份 (30 公分)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "0.8 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "1.25 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1.2 倍",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "D",
        "text": "18 倍",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "150 / 120",
      "expect": "1.25"
    },
    "explanation": {
      "examPurpose": "測驗學生能否正確辨識基準量（當作 1 倍的量）與比較量，並依據「比值 ＝ 比較量 ÷ 基準量」列式計算。",
      "steps": [
        {
          "type": "text",
          "text": "找出基準量與比較量：以「弟弟的身高」為基準量，當作 1 倍（除數）；「哥哥的身高」是比較量（被除數）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "150 ÷ 120 ＝ 1.25",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：1.25 倍（或 1 1/4 倍）"
        }
      ],
      "insight": "「以誰為基準」，誰就當作 1 份放在除數（分母）。",
      "figureNote": "線段圖中弟弟的身高長度當作基準 1 份，哥哥比弟弟更長，相當於 1.25 份，因此比值大於 1。",
      "distractorAnalysis": {
        "A": "誤把哥哥當作基準量，列成 120 ÷ 150 ＝ 0.8 倍（顛倒基準量與比較量）。",
        "C": "除法計算時遺漏尾數的小數點轉換，誤算為 1.2 倍。",
        "D": "看到兩量關係誤用乘法運算，算成 18 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比值 ＝ 比較量 ÷ 基準量",
        "「以誰為基準」，誰就放在除數（分母）當作 1 倍"
      ],
      "conceptCompare": "基準量與比較量互換時，兩個比值互為倒數關係。若以弟弟為基準，哥哥是 1.25 倍（5/4 倍）；若改以哥哥為基準，弟弟則是 0.8 倍（4/5 倍）。",
      "examVariations": "段考常見變形題會問「哥哥比弟弟高多少倍？」，此時要算的是 (150 − 120) ÷ 120 ＝ 0.25 倍。"
    }
  },
  {
    "id": "U05-S1-B-002",
    "legacyId": "u05_002",
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "給定倍數求比較量",
    "batch": "課本原型題",
    "source": "課本 p.74 例題 2",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "媽媽每個月薪水 45000 元，伙食費是薪水的 0.3 倍。伙食費是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "薪水 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "伙食費 (0.3 倍)",
          "units": 0.3,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "伙食費佔 0.3 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "150000 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "1350 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "13500 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "31500 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "45000 * 0.3",
      "expect": "13500"
    },
    "explanation": {
      "examPurpose": "測驗學生能否運用「比較量 ＝ 基準量 × 比值」，熟練進行整數與一位小數的直式乘法運算。",
      "steps": [
        {
          "type": "text",
          "text": "媽媽的薪水是基準量（1 倍），伙食費是比較量（0.3 倍）。求比較量用乘法。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "45000 × 0.3 ＝ 13500",
          "unit": "元"
        },
        {
          "type": "mul",
          "a": "45000",
          "b": "0.3"
        },
        {
          "type": "answer",
          "text": "答：13500 元"
        }
      ],
      "insight": "已知基準量求部分比較量：乘上比值即可。",
      "figureNote": "線段圖中全月薪水為基準量 1 份，伙食費只佔其中的 0.3 份（不到一半），因此金額一定比薪水少。",
      "distractorAnalysis": {
        "A": "混淆乘除法，誤拿薪水除以比值算成 45000 ÷ 0.3 ＝ 150000 元，比原本薪水還要多，不合常理。",
        "B": "乘法計算時小數點位移點錯位置，少算了一個 0 變成 1350 元。",
        "D": "算出的是扣除伙食費後剩下的其他生活費 45000 × (1 − 0.3) ＝ 31500 元，答非所問。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比較量 ＝ 基準量 × 比值",
        "求部分量時，用全部基準量乘上對應的倍數或比值"
      ],
      "conceptCompare": "求比較量用乘法（基準量 × 倍數）；求基準量用除法（比較量 ÷ 倍數）。乘出來的值如果比基準量大，代表倍數大於 1；若倍數小於 1，乘出來必定比基準量小。",
      "examVariations": "變形題常將「0.3 倍」改為「佔三成」或「30%」，解法完全相同。"
    }
  },
  {
    "id": "U05-S1-B-003",
    "legacyId": "u05_003",
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "給定比較量求基準量",
    "batch": "課本原型題",
    "source": "課本 p.75 例題 3",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "小新有一本故事書，今天看了 48 頁，剛好是全書頁數的 0.4 倍。這本故事書共有多少頁？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "全書頁數 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "已看頁數 (0.4 倍)",
          "units": 0.4,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "已看 48 頁相當於 0.4 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "120 頁",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "19.2 頁",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "C",
        "text": "1200 頁",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "D",
        "text": "12 頁",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "48 / 0.4",
      "expect": "120"
    },
    "explanation": {
      "examPurpose": "測驗學生能否從題目情境判斷全書為基準量（未知的 1 倍），並透過「基準量 ＝ 比較量 ÷ 比值」進行小數除法運算。",
      "steps": [
        {
          "type": "text",
          "text": "全書頁數是基準量（當作 1 倍），已看的 48 頁是比較量（0.4 倍）。求基準量用除法。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "48 ÷ 0.4 ＝ 120",
          "unit": "頁"
        },
        {
          "type": "longdiv",
          "dividend": "48",
          "divisor": "0.4",
          "mode": "exact"
        },
        {
          "type": "answer",
          "text": "答：120 頁"
        }
      ],
      "insight": "已知部分比值反求全部：用除法還原 1 倍。",
      "figureNote": "線段圖中全書是一整條基準線段（1 份），48 頁只佔 0.4 份，全書總頁數一定比 48 頁更多。",
      "distractorAnalysis": {
        "B": "誤把求基準量當作求比較量，直接列乘法 48 × 0.4 ＝ 19.2 頁，算出全書比已看頁數還少。",
        "C": "直式除法擴分時小數點移位錯誤，被除數多補了一個 0，算成 1200 頁。",
        "D": "直式除法 480 ÷ 4 時個位忘記補 0，算成 12 頁。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 比較量 ÷ 比值",
        "除數是小數時，除數與被除數的小數點要同時向右移動相同的位數"
      ],
      "conceptCompare": "已知整體求部分用「乘法」（整體 × 比值）；已知部分反求整體用「除法」（部分 ÷ 比值）。",
      "examVariations": "若題目改問「還剩下多少頁沒看？」，應先算出全書 120 頁，再算 120 − 48 ＝ 72 頁（或 120 × (1 − 0.4) ＝ 72 頁）。"
    }
  },
  {
    "id": "U05-S2-B-004",
    "legacyId": "u05_004",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "兩量和分數倍",
    "batch": "課本原型題",
    "source": "課本 p.76 例題 2",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "爸爸的體重是 72 公斤，小華的體重是爸爸的 3/8 倍。兩人的體重合起來是多少公斤？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "爸爸 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "小華 (3/8 倍)",
          "units": 0.375,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "合起來 1 3/8 倍 (99 公斤)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "27 公斤",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "72 3/8 公斤",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "192 公斤",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "99 公斤",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "72 * (1 + 3/8)",
      "expect": "99"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解「母子和」結構，將基準量當作 1 倍，加上比較量的分數倍後求兩量總和。",
      "steps": [
        {
          "type": "text",
          "text": "以爸爸體重為基準量（當作 1 倍），小華是 3/8 倍。兩人合起來相當於爸爸體重的 1 ＋ 3/8 ＝ 1 3/8 倍（即 11/8 倍）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 3/8 ＝ 11/8",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "72 × 11/8 ＝ 99",
          "unit": "公斤"
        },
        {
          "type": "text",
          "text": "另解：小華體重 72 × 3/8 ＝ 27 公斤，合起來 72 ＋ 27 ＝ 99 公斤。"
        },
        {
          "type": "answer",
          "text": "答：99 公斤"
        }
      ],
      "insight": "母子和公式：兩量之和 ＝ 基準量 × (1 ＋ 比值)。",
      "figureNote": "線段圖中爸爸是完整的 1 份，小華是 3/8 份，右方括號將兩條線段合併，總長度是 1 3/8 份。",
      "distractorAnalysis": {
        "A": "算出的 27 公斤只是小華個人的體重，遺漏了最後加上爸爸體重的步驟。",
        "B": "將倍數 3/8 誤當作具體重量直接相加，算成 72 ＋ 3/8 ＝ 72 3/8 公斤。",
        "C": "乘除方向弄反，誤用比較量 ÷ 比值（列式為 72 ÷ 3/8 ＝ 192 公斤），兩人合重不可能比爸爸體重的兩倍還多。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩量之和 ＝ 基準量 × (1 ＋ 比值)",
        "母子和：基準量是 1 倍，比較量是幾倍，合起來就是 (1 ＋ 幾倍)"
      ],
      "conceptCompare": "不要把倍數和具體數量混在一起相加。3/8 是「倍數」，必須先乘上基準量 72 算出公斤數，才能與爸爸的 72 公斤相加。",
      "examVariations": "若改問「爸爸比小華重多少公斤？」，則為母子差問題，列式為 72 × (1 − 3/8) ＝ 45 公斤。"
    }
  },
  {
    "id": "U05-S3-B-005",
    "legacyId": "u05_005",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "兩量差小數倍",
    "batch": "課本原型題",
    "source": "課本 p.79 做做看",
    "level": 1,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "果園裡蘋果樹有 160 棵，梨子樹的數量是蘋果樹的 0.75 倍。蘋果樹比梨子樹多幾棵？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "蘋果樹 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "梨子樹 (0.75 倍)",
          "units": 0.75,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "相差 0.25 份 (40 棵)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "120 棵",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "40 棵",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "160 棵",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "D",
        "text": "213 棵",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "160 * (1 - 0.75)",
      "expect": "40"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解「母子差」結構，以基準量為 1 倍，扣除比較量倍數後求出相差量。",
      "steps": [
        {
          "type": "text",
          "text": "以蘋果樹為基準量（當作 1 倍），梨子樹是 0.75 倍。蘋果樹比梨子樹多出的倍數為 1 − 0.75 ＝ 0.25 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 − 0.75 ＝ 0.25",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "160 × 0.25 ＝ 40",
          "unit": "棵"
        },
        {
          "type": "mul",
          "a": "160",
          "b": "0.25"
        },
        {
          "type": "text",
          "text": "另解：梨子樹有 160 × 0.75 ＝ 120 棵，相差 160 − 120 ＝ 40 棵。"
        },
        {
          "type": "answer",
          "text": "答：40 棵"
        }
      ],
      "insight": "母子差公式：兩量之差 ＝ 基準量 × (1 − 比值)。",
      "figureNote": "線段圖中蘋果樹為 1 份，梨子樹為 0.75 份，右方虛線標示出多出來的差額正是 1 − 0.75 ＝ 0.25 份。",
      "distractorAnalysis": {
        "A": "算出的 120 棵是梨子樹的總棵數，不是蘋果樹比梨子樹多的棵數。",
        "C": "忘記相差倍數要用 (1 − 比值) 計算，誤把基準量直接當答案。",
        "D": "誤將題目當成除法逆推，顛倒基準量算成 160 ÷ 0.75 ＝ 213 棵。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩量之差 ＝ 基準量 × (1 − 比值)",
        "母子差先算倍數差：1 − 比值，再乘上基準量"
      ],
      "conceptCompare": "「和」用加法 (1 ＋ 比值)，「差」用減法 (1 − 比值)。0.75 倍即 3/4，0.25 倍即 1/4，160 的 1/4 即 40 棵。",
      "examVariations": "若題目改為「兩樹共有幾棵？」，則為母子和，列式為 160 × (1 ＋ 0.75) ＝ 280 棵。"
    }
  },
  {
    "id": "U05-S3-B-006",
    "legacyId": "u05_006",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "百分率與折扣差",
    "batch": "課本原型題",
    "source": "課本 p.80 例題 3",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "一雙名牌球鞋定價 2400 元，週年慶全館打七五折。這雙球鞋的售價是多少元？便宜了多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "定價 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "售價 (75%)",
          "units": 0.75,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "便宜 25% (600 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "售價 1800 元，便宜 600 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "售價 600 元，便宜 1800 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "售價 180 元，便宜 2220 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "D",
        "text": "售價 1800 元，便宜 400 元",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "2400 * 75%",
      "expect": "1800",
      "extraChecks": [
        {
          "expr": "2400 * (1 - 75%)",
          "expect": "600"
        }
      ]
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解「打折」的生活意義，分辨「售價是原價的幾成」與「便宜了幾成」，並正確完成兩階段計算。",
      "steps": [
        {
          "type": "text",
          "text": "打七五折代表售價是定價的 75%（即 0.75 倍）。便宜的金額是定價的 1 − 75% ＝ 25%（即 0.25 倍）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "2400 × 0.75 ＝ 1800",
          "unit": "元"
        },
        {
          "type": "mul",
          "a": "2400",
          "b": "0.75"
        },
        {
          "type": "eq",
          "expr": "2400 − 1800 ＝ 600",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：售價 1800 元，便宜 600 元"
        }
      ],
      "insight": "打七五折付 75%，便宜 25%。",
      "figureNote": "線段圖中定價為 1 份，打七五折後售價佔 0.75 份，右方相差的 0.25 份即為便宜的金額 600 元。",
      "distractorAnalysis": {
        "B": "將打七五折誤解為「降價 75%」，直接把 2400 × 0.75 當成便宜金額，導致售價與便宜金額顛倒。",
        "C": "百分率化為小數時小數點多移了一位，把 75% 誤算為 0.075 倍。",
        "D": "售價計算正確，但第二步相減時發生退位計算失誤，誤算為便宜 400 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "打幾折 ＝ 售價佔定價的百分之幾十",
        "便宜金額 ＝ 定價 × (1 − 折扣率)"
      ],
      "conceptCompare": "「打七五折」付 75%（0.75 倍），便宜 25%（0.25 倍）；若是「便宜二成五」，也是付 75%。兩者語意相反，切勿混淆。",
      "examVariations": "段考常見「買三送一」相當於打幾折？4 件只付 3 件的錢，3 ÷ 4 ＝ 0.75，即打七五折。"
    }
  },
  {
    "id": "U05-S2-B-007",
    "legacyId": "u05_007",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "成本加三成求定價",
    "batch": "課本原型題",
    "source": "課本 p.77 例題 3",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "文具店老闆進了一批筆記本，成本每本 40 元，加三成作為定價。每本筆記本的定價是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "成本 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "定價 (1.3 倍)",
          "units": 1.3,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "定價是 1.3 份 (52 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "12 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "41.2 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "52 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "28 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "40 * (1 + 30%)",
      "expect": "52"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解商業生活中的「加成」用語，掌握「加三成即為成本的 1 ＋ 30% ＝ 1.3 倍」之母子和列式。",
      "steps": [
        {
          "type": "text",
          "text": "成本為基準量（當作 1 倍，100%）。加三成表示定價比成本多 30%，也就是成本的 1 ＋ 30% ＝ 1.3 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 30% ＝ 1.3",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "40 × 1.3 ＝ 52",
          "unit": "元"
        },
        {
          "type": "mul",
          "a": "40",
          "b": "1.3"
        },
        {
          "type": "text",
          "text": "另解：利潤為 40 × 0.3 ＝ 12 元，定價 40 ＋ 12 ＝ 52 元。"
        },
        {
          "type": "answer",
          "text": "答：52 元"
        }
      ],
      "insight": "成本加三成 ＝ 成本 × 1.3。",
      "figureNote": "線段圖中成本是完整 1 份，定價向右延長 0.3 份，合起來共 1.3 份，因此定價必定高於成本。",
      "distractorAnalysis": {
        "A": "算出的 12 元只是增加的利潤金額，忘記再加上原本的成本 40 元。",
        "B": "將三成（30%）混淆為 3%，小數點點錯位置導致算成 40 × 1.03 ＝ 41.2 元。",
        "D": "將「加三成」誤解為「少三成」，列成減法 40 × (1 − 0.3) ＝ 28 元，賣得比成本還低。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "加幾成 ＝ 成本 × (1 ＋ 幾成)",
        "一成代表 10%（0.1 倍），三成代表 30%（0.3 倍）"
      ],
      "conceptCompare": "「加三成」是 1 ＋ 0.3 ＝ 1.3 倍；「打三折」則是只要付 0.3 倍。兩者相差 1 整倍，差非常多！",
      "examVariations": "進階題常問「加二成五」，即 1 ＋ 25% ＝ 1.25 倍（5/4 倍）。"
    }
  },
  {
    "id": "U05-S2-B-008",
    "legacyId": "u05_008",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "加成逆推求成本",
    "batch": "課本原型題",
    "source": "課本 p.78 例題 4",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "服飾店一件外套售價 1560 元，這是依成本加三成後的定價。這件外套的進貨成本是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "進貨成本 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "定價售價 (1.3 倍)",
          "units": 1.3,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "1.3 份相當於 1560 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1092 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "B",
        "text": "2028 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "C",
        "text": "120 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "1200 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "1560 / 1.3",
      "expect": "1200"
    },
    "explanation": {
      "examPurpose": "測驗學生能否克服「加成逆推」常見盲點，理解基準量是未知的「成本」，必須用除法求基準量，絕不能拿售價去減三成。",
      "steps": [
        {
          "type": "text",
          "text": "進貨成本是基準量（當作 1 倍，100%）。加三成後的定價是成本的 1 ＋ 30% ＝ 1.3 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 30% ＝ 1.3",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "1560 ÷ 1.3 ＝ 1200",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "1560",
          "divisor": "1.3",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "驗算：成本 1200 元加三成，1200 × 1.3 ＝ 1560 元，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：1200 元"
        }
      ],
      "insight": "加成求定價用乘法；已知定價反推成本必用除法！",
      "figureNote": "線段圖中已知的 1560 元代表的是比較量 1.3 份，要求基準量 1 份，必須將 1560 平均分成 1.3 份（除以 1.3）。",
      "distractorAnalysis": {
        "A": "最常見的大魔王陷阱！誤以為加三成的相反是減三成，拿售價乘 0.7 算成 1092 元。基準量是成本，不能拿售價打折。",
        "B": "題目已給出售價，卻誤用乘法又加成一次，算成 1560 × 1.3 ＝ 2028 元，成本反而比售價高。",
        "C": "直式小數除法中，擴分移位後 15600 ÷ 13 ＝ 1200，但商的末尾漏寫一個 0 算成 120 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "成本 ＝ 定價 ÷ (1 ＋ 加成率)",
        "求基準量必用除法：比較量 ÷ 比值"
      ],
      "conceptCompare": "100 元加三成是 130 元；但 130 元減三成是 130 × 0.7 ＝ 91 元，不會回到 100 元！因為兩次的基準量不同。逆推加成一定要用除法！",
      "examVariations": "若題目說「定價 1560 元打八折賣出」，則八折的基準量是定價，要用乘法 1560 × 0.8。切記：先看基準量是誰，再決定乘除！"
    }
  },
  {
    "id": "U05-S1-X-009",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "生活倍數與比較量",
    "batch": "課本原型題",
    "source": "課本 p.70~71 章首延伸",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "學校推廣減塑生活，小華自備的大號環保杯高度是 25 公分，一般免洗紙杯的高度是 10 公分。以一般免洗紙杯的高度為基準量，大號環保杯高度的比值是多少？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "免洗紙杯 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "大號環保杯 (比較量)",
          "units": 2.5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "環保杯高 2.5 份 (25 公分)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "2.5 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "0.4 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "250 倍",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "0.25 倍",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "25 / 10",
      "expect": "2.5"
    },
    "explanation": {
      "examPurpose": "測驗學生能否從生活減塑情境中辨識基準量（除數）與比較量（被除數），並運用「比值 ＝ 比較量 ÷ 基準量」計算出小數倍數。",
      "steps": [
        {
          "type": "text",
          "text": "找出基準量與比較量：題目說明「以免洗紙杯高度為基準量」，因此免洗紙杯高度 10 公分為基準量（當作 1 倍，放在除數）；大號環保杯高度 25 公分為比較量（放在被除數）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "25 ÷ 10 ＝ 2.5",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：2.5 倍"
        }
      ],
      "insight": "「以誰為基準」，誰就當作 1 份放在除數（分母）。",
      "figureNote": "線段圖中免洗紙杯的高度為基準量 1 份，大號環保杯長度相當於 2.5 份，因此比值為 2.5 倍。",
      "distractorAnalysis": {
        "B": "顛倒基準量與比較量，誤算成 10 ÷ 25 ＝ 0.4 倍。",
        "C": "看到題目中的兩個數量直接相乘，誤算成 25 × 10 ＝ 250 倍。",
        "D": "除法計算時小數點位移點錯位置，誤算成 0.25 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比值 ＝ 比較量 ÷ 基準量",
        "基準量放除數（分母），比較量放被除數（分子）"
      ],
      "conceptCompare": "比值大於 1 表示比較量比基準量多（環保杯比紙杯高）；比值小於 1 則表示比較量比基準量少。若互換基準量，比值互為倒數關係（2.5 與 0.4 互為倒數）。",
      "examVariations": "常見變形題會詢問「環保杯比紙杯高多少倍？」，此時要用兩量之差除以基準量：(25 − 10) ÷ 10 ＝ 1.5 倍。"
    }
  },
  {
    "id": "U05-S1-X-010",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "基準量互換與倒數",
    "batch": "課本原型題",
    "source": "課本 p.73 例題 3 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "咖啡店裡，大杯拿鐵容量是 900 毫升，中杯拿鐵容量是 600 毫升。如果改以大杯拿鐵容量為基準量，中杯拿鐵容量的比值是多少？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "大杯容量 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "中杯容量 (比較量 2/3)",
          "units": 0.6667,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "中杯佔大杯的 2/3 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1 1/2 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "2/3 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1 2/3 倍",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "D",
        "text": "1/3 倍",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "600 / 900",
      "expect": "2/3"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解基準量互換的倒數特性，並依「比值 ＝ 比較量 ÷ 基準量」精確計算最簡分數比值。",
      "steps": [
        {
          "type": "text",
          "text": "找出基準量與比較量：題目要求「以大杯拿鐵容量為基準量」，因此大杯 900 毫升放在除數（分母）；中杯 600 毫升是比較量（分子）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "600 ÷ 900 ＝ 2/3",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：2/3 倍"
        }
      ],
      "insight": "基準量與比較量互換後，兩者的比值互為倒數關係。",
      "figureNote": "線段圖中大杯容量為基準量 1 份，中杯容量只有大杯的三分之二，因此比值為 2/3 倍。",
      "distractorAnalysis": {
        "A": "顛倒基準量與比較量，列成 900 ÷ 600 ＝ 1 1/2 倍（仍以中杯為基準量）。",
        "C": "倒數轉換混淆，誤將分數與整數倒數運算混用算成 1 2/3 倍。",
        "D": "算出兩杯相差容量 900 − 600 ＝ 300 毫升佔大杯的比值 300 ÷ 900 ＝ 1/3 倍，誤答差額比值而非中杯的比值。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比值 ＝ 比較量 ÷ 基準量",
        "基準量互換倒數特性：若甲是乙的 3/2 倍，則乙是甲的 2/3 倍"
      ],
      "conceptCompare": "若以中杯為基準量，大杯比值是 900 ÷ 600 ＝ 3/2 倍（1 1/2 倍）；改以大杯為基準量，中杯比值則是 600 ÷ 900 ＝ 2/3 倍。兩者相乘恰好等於 1（互為倒數）。",
      "examVariations": "考試常給定「大杯是中杯的 1.5 倍」，直接要求填出「中杯是大杯的幾分之幾倍」，可直接利用倒數特性求出 2/3 倍。"
    }
  },
  {
    "id": "U05-S1-X-011",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "百分率加量求比較量",
    "batch": "課本原型題",
    "source": "課本 p.74 例題 4 延伸",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "某品牌洗手乳原包裝容量是 240 毫升，廠商推出增量回饋瓶，容量是原容量的 125%。增量回饋瓶的容量是多少毫升？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "原容量 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "增量瓶 (125%)",
          "units": 1.25,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "增量瓶相當於 1.25 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "60 毫升",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "192 毫升",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "C",
        "text": "300 毫升",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "30 毫升",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "240 * 1.25",
      "expect": "300"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解百分率大於 100% 的比較量意義，熟練「比較量 ＝ 基準量 × 比值」的小數乘法運算。",
      "steps": [
        {
          "type": "text",
          "text": "原容量 240 毫升為基準量（當作 1 倍或 100%），增量瓶容量是原容量的 125%，換算成小數是 1.25 倍。已知基準量求比較量，用乘法計算。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "125% ＝ 1.25"
        },
        {
          "type": "eq",
          "expr": "240 × 1.25 ＝ 300",
          "unit": "毫升"
        },
        {
          "type": "mul",
          "a": "240",
          "b": "1.25"
        },
        {
          "type": "answer",
          "text": "答：300 毫升"
        }
      ],
      "insight": "已知基準量求比較量：直接乘上給定的小數或百分率倍數。",
      "figureNote": "線段圖中原容量為基準量 1 份，增量瓶為 1.25 份（超過原本的一整條），因此新容量必定比 240 毫升更多。",
      "distractorAnalysis": {
        "A": "忘記加算基準量本身 100%，只算出增量的部分 240 × 25% ＝ 60 毫升。",
        "B": "混淆乘除法，誤拿原容量除以倍數 240 ÷ 1.25 ＝ 192 毫升，算出容量反而變少。",
        "D": "百分率化小數點移位錯誤，將 125% 誤算為 0.125，乘出來得到 30 毫升。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比較量 ＝ 基準量 × 比值",
        "百分率化小數：小數點向左移動兩位（125% ＝ 1.25）"
      ],
      "conceptCompare": "「增量到 125%」代表新容量是原本的 1.25 倍；若題目敘述為「增量 25%」，則表示新容量是原本的 (1 ＋ 25%) ＝ 1.25 倍，兩者語意與算理相同。",
      "examVariations": "變形題常問「增量瓶比原包裝多了多少毫升？」，可算 300 − 240 ＝ 60 毫升，或直接算 240 × 0.25 ＝ 60 毫升。"
    }
  },
  {
    "id": "U05-S1-X-012",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "倒數互換雙步驟推算",
    "batch": "課本原型題",
    "source": "課本 p.74 思考帽延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "果汁店調配特調飲品，原本以甲桶容量為基準量，乙桶柳橙汁的容量是甲桶的 4/5 倍。若改以乙桶容量為基準量，甲桶容量是乙桶的幾倍？如果乙桶柳橙汁有 36 公升，甲桶柳橙汁有多少公升？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲桶果汁 (原基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "乙桶果汁 (4/5 倍)",
          "units": 0.8,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "乙桶有 36 公升 (相當於 4/5 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "4/5 倍，28.8 公升",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "1 1/5 倍，43.2 公升",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "C",
        "text": "1 1/4 倍，28.8 公升",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "1 1/4 倍，45 公升",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "36 / (4 / 5)",
      "expect": "45"
    },
    "explanation": {
      "examPurpose": "測驗學生能否靈活運用基準量互換之倒數原理，並透過「基準量 ＝ 比較量 ÷ 比值」進行兩步驟推導計算。",
      "steps": [
        {
          "type": "text",
          "text": "第一步（求倒數倍數）：乙桶是甲桶的 4/5 倍（以甲桶為基準量 1）。若改以乙桶為基準量，甲桶是乙桶的倒數：1 ÷ 4/5 ＝ 5/4 ＝ 1 1/4 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ÷ 4/5 ＝ 5/4 ＝ 1 1/4",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第二步（求甲桶具體容量）：以乙桶 36 公升為基準量 1 倍，甲桶容量是乙桶的 5/4 倍，用乘法求甲桶（或以甲桶為基準量，36 ÷ 4/5 ＝ 45）。"
        },
        {
          "type": "eq",
          "expr": "36 × 5/4 ＝ 45",
          "unit": "公升"
        },
        {
          "type": "answer",
          "text": "答：1 1/4 倍，45 公升"
        }
      ],
      "insight": "若乙是甲的 4/5 倍，則甲是乙的 5/4 倍（1 1/4 倍）。求甲桶容量直接乘上 5/4 即可。",
      "figureNote": "線段圖中乙桶是甲桶的 4/5 份，反過來以乙桶當作 1 份基準時，甲桶就相當於 5/4 份（1.25 份），因此甲桶必定比乙桶容量更多。",
      "distractorAnalysis": {
        "A": "未進行基準量互換倒數，誤以為甲是乙仍為 4/5 倍，並算出 36 × 4/5 ＝ 28.8 公升。",
        "B": "倒數轉換計算失誤，誤以為 4/5 的倒數是 6/5（1 1/5 倍），算出 36 × 6/5 ＝ 43.2 公升。",
        "C": "倍數求對為 1 1/4 倍，但求具體容量時混淆乘除法，誤拿 36 乘以 4/5 算出 28.8 公升。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "倒數關係：若乙是甲的 4/5 倍，則甲是乙的 5/4 倍（1 1/4 倍）",
        "基準量 ＝ 比較量 ÷ 比值，或 比較量 ＝ 基準量 × 比值"
      ],
      "conceptCompare": "已知乙是甲的 4/5 倍求甲：可以把甲當作基準量，列式 36 ÷ 4/5 ＝ 45；也可以先求甲是乙的 5/4 倍，再列式 36 × 5/4 ＝ 45。兩種算理完全一致。",
      "examVariations": "思考帽常考雙向問答，例如先給定分數倍，再反問倒數倍數與兩桶相差多少公升（45 − 36 ＝ 9 公升）。"
    }
  },
  {
    "id": "U05-S2-X-013",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "兩量和逆推基準量",
    "batch": "課本原型題",
    "source": "課本 p.78 例題 4 延伸",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "食品工廠生產新包裝黑胡椒粉，增量 35% 後的重量是 540 公克。舊包裝黑胡椒粉的重量是多少公克？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "舊包裝 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "新包裝 (增量 1.35 倍)",
          "units": 1.35,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "新包裝重 540 公克 (1.35 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "729 公克",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "400 公克",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "189 公克",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "40 公克",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "540 / 1.35",
      "expect": "400"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解增量百分率對應的基準量關係（1 ＋ 35%），並透過小數除法直式正確逆推原本的基準量重量。",
      "steps": [
        {
          "type": "text",
          "text": "舊包裝重量為基準量（當作 1 倍或 100%）。新包裝增量 35%，重量相當於舊包裝的 1 ＋ 35% ＝ 135% ＝ 1.35 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 35% ＝ 1.35"
        },
        {
          "type": "text",
          "text": "已知新包裝重量 540 公克對應 1.35 倍，求舊包裝基準量用除法計算。"
        },
        {
          "type": "eq",
          "expr": "540 ÷ 1.35 ＝ 400",
          "unit": "公克"
        },
        {
          "type": "longdiv",
          "dividend": "540",
          "divisor": "1.35",
          "mode": "exact"
        },
        {
          "type": "answer",
          "text": "答：400 公克"
        }
      ],
      "insight": "已知增量後的總量求原本量：總量 ÷ (1 ＋ 增量率) ＝ 原基準量。",
      "figureNote": "線段圖中舊包裝是基準量 1 份，新包裝是 1.35 份。540 公克對應 1.35 份，因此舊包裝重量必定小於 540 公克。",
      "distractorAnalysis": {
        "A": "誤把求基準量當成求比較量，直接列乘法 540 × 1.35 ＝ 729 公克，越算越多。",
        "C": "忘記加算基準量本身 1 倍，直接將 540 乘上 35% 算出 189 公克。",
        "D": "小數除法小數點移位計算錯誤，將 1.35 誤移兩位成 13.5，算成 40 公克。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩量和 ÷ (1 ＋ 比值)",
        "增量後總倍數 ＝ 1 ＋ 增量百分率"
      ],
      "conceptCompare": "增量 35% 後的重量是原本的 1.35 倍，因此求原本重量必須除以 1.35，絕對不能用「540 × (1 − 35%)」計算，因為增量 35% 是以舊包裝為基準，而非新包裝。",
      "examVariations": "類似題型常見於生活中的加量不加價促銷瓶，或者颱風後蔬菜價格上漲後的原價逆推。"
    }
  },
  {
    "id": "U05-S2-X-014",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "分數倍和倍求基準",
    "batch": "課本原型題",
    "source": "課本 p.76 與 p.78 整合",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "小明和小華共有 260 元，小明的錢是小華的 1 3/5 倍。小華有多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "小華 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "小明 (1 3/5 倍)",
          "units": 1.6,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "兩人共有 260 元 (2 3/5 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "160 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "162.5 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "20 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "100 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "260 / (1 + 1 3/5)",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "測驗學生能否掌握分數倍和倍問題的線段圖模型，將帶分數倍數轉化為總倍數（1 ＋ 1 3/5），並正確算出基準量金額。",
      "steps": [
        {
          "type": "text",
          "text": "以小華的錢為基準量（當作 1 份），小明的錢是 1 3/5 份。兩人合起來共有 1 ＋ 1 3/5 ＝ 2 3/5 ＝ 13/5 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1 3/5 ＝ 13/5"
        },
        {
          "type": "text",
          "text": "合起來的 260 元相當於 13/5 份，求小華的錢（1 份基準量）用除法計算。"
        },
        {
          "type": "eq",
          "expr": "260 ÷ 13/5 ＝ 260 × 5/13 ＝ 100",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：100 元"
        }
      ],
      "insight": "和倍問題求基準量：兩量之和 ÷ (1 ＋ 倍數) ＝ 基準量。",
      "figureNote": "線段圖中小華是 1 份，小明是 1.6 份，兩者合併為 2.6 份（13/5 份）等於 260 元，因此 1 份小華是 100 元。",
      "distractorAnalysis": {
        "A": "算出的是小明的錢 260 − 100 ＝ 160 元，誤答比較量而非基準量小華。",
        "B": "忘記加上基準量小華本身的 1 份，直接拿 260 除以 1 3/5：260 ÷ 8/5 ＝ 162.5 元。",
        "C": "分數除法計算粗心，260 ÷ 13 ＝ 20 元，漏乘了分母 5。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 總和 ÷ (1 ＋ 倍數)",
        "比較量 ＝ 基準量 × 倍數，或 總和 − 基準量"
      ],
      "conceptCompare": "帶分數倍數運算時，務必將 1（基準量）與倍數相加（1 ＋ 1 3/5 ＝ 13/5）。除以分數等於乘上倒數（× 5/13）。",
      "examVariations": "常考延伸題會進一步詢問「小明比小華多多少元？」，此時可算 160 − 100 ＝ 60 元，或 100 × 3/5 ＝ 60 元。"
    }
  },
  {
    "id": "U05-S2-X-015",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "加薪與服務費兩段加成",
    "batch": "課本原型題",
    "source": "課本 p.82~83 練習園地延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "林叔叔一家人到餐廳用餐，餐點費用合計 3000 元。憑貴賓卡享有九折優惠，結帳時需再依折扣後的金額加收一成（10%）服務費。林叔叔結帳時一共要付多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "餐點原價 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "九折金額 (0.9 倍)",
          "units": 0.9,
          "role": "compare"
        },
        {
          "label": "加服務費後實付 (原價的 0.99 倍)",
          "units": 0.99,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "結帳實付 2970 元 (0.99 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "2970 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "3000 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "C",
        "text": "270 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "2727 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "3000 * 0.9 * 1.1",
      "expect": "2970"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解連續兩段百分率運算（先折扣再加成），辨識每一階段不同的基準量，並正確依序計算實付金額。",
      "steps": [
        {
          "type": "text",
          "text": "第一步（計算打折後餐費）：以原價 3000 元為基準量，打九折即乘上 0.9。"
        },
        {
          "type": "eq",
          "expr": "3000 × 0.9 ＝ 2700",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第二步（計算加收服務費後總額）：以折扣後的 2700 元為新基準量（當作 1 倍），加收一成（10%）服務費，相當於乘上 1 ＋ 10% ＝ 1.1 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 10% ＝ 1.1"
        },
        {
          "type": "eq",
          "expr": "2700 × 1.1 ＝ 2970",
          "unit": "元"
        },
        {
          "type": "mul",
          "a": "2700",
          "b": "1.1"
        },
        {
          "type": "answer",
          "text": "答：2970 元"
        }
      ],
      "insight": "加收服務費是以「折扣後的金額」為基準量，非以原本未打折的金額為基準。",
      "figureNote": "線段圖中原價為 1 份，打九折縮短為 0.9 份（2700 元），再以 0.9 份為基準加成 10%，實付為原本的 0.99 份（2970 元）。",
      "distractorAnalysis": {
        "B": "加成基準混淆，誤以為「打九折（少 10%）」與「加一成（多 10%）」可以直接抵消，誤答原價 3000 元。",
        "C": "算完打折後 2700 元，計算服務費時忘記加回餐費本金，只算出服務費 2700 × 10% ＝ 270 元。",
        "D": "服務費百分率 10% 小數點位移錯誤，誤當成 1%（0.01），算成 2700 ＋ 27 ＝ 2727 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "折後金額 ＝ 原價 × 折扣率",
        "含服務費總額 ＝ 折後金額 × (1 ＋ 服務費率)"
      ],
      "conceptCompare": "「先打九折再加一成」不等於原本金額！因為折扣是以 3000 元為基準（少了 300 元），而加一成是以 2700 元為基準（只加了 270 元），整體相當於 3000 × 0.9 × 1.1 ＝ 3000 × 0.99 ＝ 2970 元。",
      "examVariations": "類似題型如：定價加二成再打八折，售價為原價的 1.2 × 0.8 ＝ 0.96 倍（反而賠 4%）。"
    }
  },
  {
    "id": "U05-S3-X-016",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "差倍小數逆推基準",
    "batch": "課本原型題",
    "source": "課本 p.81 例題 4 延伸",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "烘焙坊今天做的草莓蛋糕比布丁多 24 個，已知草莓蛋糕的數量是布丁的 1.6 倍。烘焙坊今天做了多少個布丁？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "布丁 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "草莓蛋糕 (1.6 倍)",
          "units": 1.6,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "草莓蛋糕比布丁多 24 個 (0.6 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "15 個",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "B",
        "text": "64 個",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "40 個",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "14.4 個",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "24 / (1.6 - 1)",
      "expect": "40"
    },
    "explanation": {
      "examPurpose": "測驗學生能否掌握差倍問題線段圖模型，求出倍數差（1.6 − 1 ＝ 0.6），並透過「基準量 ＝ 差值 ÷ (倍數 − 1)」熟練小數除法直式計算。",
      "steps": [
        {
          "type": "text",
          "text": "以布丁的數量為基準量（當作 1 份），草莓蛋糕是 1.6 份。草莓蛋糕比布丁多 1.6 − 1 ＝ 0.6 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1.6 − 1 ＝ 0.6"
        },
        {
          "type": "text",
          "text": "相差的 24 個對應 0.6 份，求布丁數量（基準量 1 份）用除法計算。"
        },
        {
          "type": "eq",
          "expr": "24 ÷ 0.6 ＝ 40",
          "unit": "個"
        },
        {
          "type": "longdiv",
          "dividend": "24",
          "divisor": "0.6",
          "mode": "exact"
        },
        {
          "type": "answer",
          "text": "答：40 個"
        }
      ],
      "insight": "差倍問題求基準量：兩量之差 ÷ (倍數 − 1) ＝ 基準量。",
      "figureNote": "線段圖中布丁為基準量 1 份，草莓蛋糕為 1.6 份，相差的 0.6 份長度代表 24 個，因此 1 份布丁等於 40 個。",
      "distractorAnalysis": {
        "A": "忘記減去基準量的 1 份，直接拿差值除以倍數：24 ÷ 1.6 ＝ 15 個。",
        "B": "算出的是草莓蛋糕的數量 40 ＋ 24 ＝ 64 個，誤答比較量而非基準量布丁。",
        "D": "看到 24 與 0.6 混淆乘除法，誤用乘法計算 24 × 0.6 ＝ 14.4 個。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩量差 ÷ (倍數 − 1)",
        "比較量 ＝ 基準量 × 倍數，或 基準量 ＋ 兩量差"
      ],
      "conceptCompare": "「和倍問題」除以倍數之和（1 ＋ 倍數）；「差倍問題」除以倍數之差（倍數 − 1）。兩者核心皆是先求出 1 份基準量的數值。",
      "examVariations": "變形題常問「草莓蛋糕做了多少個？」（40 × 1.6 ＝ 64 個）或「兩種甜點一共做了多少個？」（40 ＋ 64 ＝ 104 個）。"
    }
  },
  {
    "id": "U05-S3-X-017",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "折扣差額逆推原價",
    "batch": "課本原型題",
    "source": "課本 p.81 例題 4 與 p.83 延伸",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "服飾專賣店週年慶特賣，一件機能外套打六五折出售，比原價便宜了 490 元。這件機能外套的原價是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "外套原價 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "折後售價 (65%)",
          "units": 0.65,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "便宜 490 元 (相當於 0.35 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "910 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "B",
        "text": "318.5 元",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "140 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "D",
        "text": "1400 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "490 / (1 - 0.65)",
      "expect": "1400"
    },
    "explanation": {
      "examPurpose": "測驗學生能否理解折扣與便宜百分率的差額關係（1 − 65% ＝ 35%），並透過小數除法直式逆推原價基準量。",
      "steps": [
        {
          "type": "text",
          "text": "外套原價為基準量（當作 1 倍或 100%）。打六五折表示售價是原價的 65%，比原價便宜了 1 − 65% ＝ 35% ＝ 0.35 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 − 65% ＝ 35% ＝ 0.35"
        },
        {
          "type": "text",
          "text": "便宜的 490 元對應原價的 0.35 倍，求原價基準量用除法計算。"
        },
        {
          "type": "eq",
          "expr": "490 ÷ 0.35 ＝ 1400",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "490",
          "divisor": "0.35",
          "mode": "exact"
        },
        {
          "type": "answer",
          "text": "答：1400 元"
        }
      ],
      "insight": "已知便宜金額求原價：便宜金額 ÷ (1 − 折扣率) ＝ 原價。",
      "figureNote": "線段圖中原價是一整條基準線段（1 份），售價佔 0.65 份，相差的 0.35 份代表便宜的 490 元，因此原價為 1400 元。",
      "distractorAnalysis": {
        "A": "誤將打折售價 910 元當成答案，混淆了折後售價與原價的關係（1400 − 490 ＝ 910 元）。",
        "B": "顛倒基準量，誤把便宜的 490 元當作原價，計算 490 × 0.65 ＝ 318.5 元。",
        "C": "小數除法小數點移位錯誤，將 0.35 誤除為 3.5，算成 140 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "便宜金額 ＝ 原價 × (1 − 折扣率)",
        "原價 ＝ 便宜金額 ÷ (1 − 折扣率)"
      ],
      "conceptCompare": "「打六五折」代表付 65%，省下 (1 − 65%) ＝ 35%。若已知售價求原價，用「售價 ÷ 0.65」；若已知便宜金額求原價，用「便宜金額 ÷ 0.35」。兩者除數完全不同！",
      "examVariations": "段考常考連環問：先求外套原價（1400 元），再求打折後的實付售價（1400 − 490 ＝ 910 元）。"
    }
  },
  {
    "id": "U05-S3-X-018",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "雙向百分率佔比差",
    "batch": "課本原型題",
    "source": "課本 p.80 做做看延伸",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "爸爸每個月薪水 48000 元，其中日常生活開銷佔 65%，其餘存起來。爸爸每個月的日常生活開銷比存起來的錢多多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "生活開銷 (佔 65%)",
          "units": 0.65,
          "role": "compare"
        },
        {
          "label": "儲蓄存錢 (佔 35%)",
          "units": 0.35,
          "role": "base"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "開銷比儲蓄多 30% (14400 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "31200 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "14400 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "16800 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "D",
        "text": "7200 元",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "48000 * (0.65 - 0.35)",
      "expect": "14400"
    },
    "explanation": {
      "examPurpose": "測驗學生能否靈活求出兩部分的各自百分率佔比（開銷 65%、儲蓄 35%），算出差值百分率（30%），並求出兩者相差的具體金額。",
      "steps": [
        {
          "type": "text",
          "text": "全部月薪 48000 元為基準量（當作 100% 或 1 倍）。開銷佔 65%，則存起來的錢佔 1 − 65% ＝ 35%。"
        },
        {
          "type": "eq",
          "expr": "1 − 65% ＝ 35%"
        },
        {
          "type": "text",
          "text": "生活開銷比存起來的錢多的百分率：65% − 35% ＝ 30% ＝ 0.3 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "65% − 35% ＝ 30% ＝ 0.3"
        },
        {
          "type": "text",
          "text": "以全部薪水 48000 元乘上相差的比值 0.3，求出多出的金額。"
        },
        {
          "type": "eq",
          "expr": "48000 × 0.3 ＝ 14400",
          "unit": "元"
        },
        {
          "type": "mul",
          "a": "48000",
          "b": "0.3"
        },
        {
          "type": "answer",
          "text": "答：14400 元"
        }
      ],
      "insight": "雙向佔比差問題：先算各自佔比再相減（65% − 35% ＝ 30%），乘上總基準量即可快速求出差額。",
      "figureNote": "線段圖中全月薪水為 1 份，開銷佔 0.65 份，儲蓄佔 0.35 份，開銷比儲蓄多出 0.3 份（14400 元）。",
      "distractorAnalysis": {
        "A": "算出的是生活開銷的金額 48000 × 65% ＝ 31200 元，答非所問。",
        "C": "誤把其餘儲蓄佔比 35% 當成相差的金額，算出儲蓄金額 48000 × 35% ＝ 16800 元。",
        "D": "計算相差百分率時忘記扣除儲蓄本身的基準，誤以 65% 與半數 50% 相減得到 15%，算成 48000 × 0.15 ＝ 7200 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "差額 ＝ 總量 × (佔比甲 − 佔比乙)",
        "佔比乙 ＝ 1 − 佔比甲"
      ],
      "conceptCompare": "本題有兩種解法：方法一為分別算出開銷 31200 元與儲蓄 16800 元再相減（31200 − 16800 ＝ 14400 元）；方法二為先求百分率之差（65% − 35% ＝ 30%）再乘一次（48000 × 0.3 ＝ 14400 元）。方法二更不易計算粗心！",
      "examVariations": "常見於家庭記帳、投票選舉（得票率差）、疫苗接種率等生活情境題。"
    }
  },
  {
    "id": "U05-RV-X-019",
    "legacyId": null,
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合練習園地",
    "category": "練習園地複合母子和",
    "batch": "課本原型題",
    "source": "課本 p.83 題目 4 延伸",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "work": "lg",
    "question": "生態農場裡有一隻黑兔和一隻白兔，黑兔的重量是白兔的 0.75 倍。已知黑兔重 4.5 公斤，這兩隻兔子合起來共重多少公斤？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "白兔 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "黑兔 (0.75 倍)",
          "units": 0.75,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "兩兔共重 10.5 公斤 (1.75 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "10.5 公斤",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "6 公斤",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "7.875 公斤",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "3.375 公斤",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "4.5 / 0.75 + 4.5",
      "expect": "10.5"
    },
    "explanation": {
      "examPurpose": "測驗學生能否從比較量與小數倍數先透過小數除法逆求基準量，再進一步結合兩量求出母子和（總重）。",
      "steps": [
        {
          "type": "text",
          "text": "第一步（求基準量白兔重量）：題目中「黑兔重量是白兔的 0.75 倍」，表示白兔是基準量（當作 1 倍），黑兔 4.5 公斤是比較量（0.75 倍）。求白兔重量用除法。"
        },
        {
          "type": "eq",
          "expr": "4.5 ÷ 0.75 ＝ 6",
          "unit": "公斤"
        },
        {
          "type": "longdiv",
          "dividend": "4.5",
          "divisor": "0.75",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "第二步（求兩兔合重）：白兔重 6 公斤，加上黑兔重 4.5 公斤，合起來是 6 ＋ 4.5 ＝ 10.5 公斤（或用母子和 6 × (1 ＋ 0.75) ＝ 10.5 公斤）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "6 ＋ 4.5 ＝ 10.5",
          "unit": "公斤"
        },
        {
          "type": "answer",
          "text": "答：10.5 公斤"
        }
      ],
      "insight": "先用除法還原 1 份基準量，再將兩量相加求出兩量和。",
      "figureNote": "線段圖中白兔為基準量 1 份（6 公斤），黑兔為 0.75 份（4.5 公斤），兩者合併為 1.75 份，總重為 10.5 公斤。",
      "distractorAnalysis": {
        "B": "求出白兔重量 6 公斤後，忘記把黑兔重量 4.5 公斤加回去，只答了白兔的重量。",
        "C": "顛倒基準量，誤把黑兔當基準量，算出 4.5 × (1 ＋ 0.75) ＝ 7.875 公斤。",
        "D": "看到 4.5 與 0.75 混淆乘除法，誤用乘法算出 4.5 × 0.75 ＝ 3.375 公斤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 比較量 ÷ 比值",
        "兩量和 ＝ 基準量 × (1 ＋ 比值) ＝ 基準量 ＋ 比較量"
      ],
      "conceptCompare": "已知比較量求總和：必須先用除法求出基準量，再將兩量相加。千萬不可直接拿比較量去乘 (1 ＋ 比值)，因為倍數關係是以白兔為基準，不是黑兔。",
      "examVariations": "練習園地與段考常見題：已知黑兔重量與比值，求兩兔相差多少公斤（6 − 4.5 ＝ 1.5 公斤）。"
    }
  },
  {
    "id": "U05-RV-X-020",
    "legacyId": null,
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合練習園地",
    "category": "三量共用單基準扣除",
    "batch": "課本原型題",
    "source": "課本 p.81 素養評量延伸",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "lg",
    "question": "小芳全家四人暑假參加四天三夜旅行，總花費是 32000 元。其中景點門票與雜支固定支出共 2400 元，剩下的費用只有交通費、住宿費和餐飲費，住宿費是交通費的 1.6 倍，餐飲費是交通費的 1.1 倍。請以交通費為基準量，算出交通費是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "交通費 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "住宿費 (1.6 倍)",
          "units": 1.6,
          "role": "compare"
        },
        {
          "label": "餐飲費 (1.1 倍)",
          "units": 1.1,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "三項合為 3.7 份 (29600 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "10963 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "800 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "8000 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "12800 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(32000 - 2400) / (1 + 1.6 + 1.1)",
      "expect": "8000"
    },
    "explanation": {
      "examPurpose": "測驗學生能否從多量生活素養情境中先扣除無關固定支出，建立三量共用單一基準量的總倍數模型（1 ＋ 1.6 ＋ 1.1 ＝ 3.7），並以小數除法求出基準量金額。",
      "steps": [
        {
          "type": "text",
          "text": "第一步（扣除固定門票與雜支）：從總花費 32000 元中扣除 2400 元，得到住宿、餐飲與交通三項的總花費。"
        },
        {
          "type": "eq",
          "expr": "32000 − 2400 ＝ 29600",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第二步（求總倍數）：以交通費為基準量（當作 1 份），住宿費佔 1.6 份，餐飲費佔 1.1 份。三項合計共有 1 ＋ 1.6 ＋ 1.1 ＝ 3.7 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1.6 ＋ 1.1 ＝ 3.7"
        },
        {
          "type": "text",
          "text": "第三步（求交通費基準量）：三項花費共 29600 元對應 3.7 份，用除法求交通費 1 份金額。"
        },
        {
          "type": "eq",
          "expr": "29600 ÷ 3.7 ＝ 8000",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "29600",
          "divisor": "3.7",
          "mode": "exact"
        },
        {
          "type": "answer",
          "text": "答：8000 元"
        }
      ],
      "insight": "多量共用同一基準量時，將各項倍數相加（含基準量本身的 1 份），再用扣除後的總和除以總倍數即可求出基準量。",
      "figureNote": "線段圖中交通費為基準量 1 份，住宿費為 1.6 份，餐飲費為 1.1 份，三項合計為 3.7 份等於 29600 元，因此 1 份交通費為 8000 元。",
      "distractorAnalysis": {
        "A": "計算總倍數時忘記交通費本身的 1 份，只把住宿與餐飲相加 1.6 ＋ 1.1 ＝ 2.7 份，29600 ÷ 2.7 約等於 10963 元。",
        "B": "小數除法直式計算時退位移位錯誤，少寫一個 0 算成 800 元。",
        "D": "算出的是住宿費 8000 × 1.6 ＝ 12800 元，誤答比較量而非交通費基準量。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扣除後總額 ＝ 全部總額 − 固定支出",
        "基準量 ＝ 扣除後總額 ÷ (1 ＋ 倍數甲 ＋ 倍數乙)"
      ],
      "conceptCompare": "三量關係中，只要各項目皆以同一個量（交通費）為基準，就能直接將倍數累加合併。此技巧比逐一假設更直觀且不易出錯。",
      "examVariations": "素養評量常考題型：求出交通費後，進一步要求算住宿費（12800 元）或餐飲費（8800 元），或問住宿費比餐飲費多多少元（4000 元）。"
    }
  },
  {
    "id": "U05-S2-O-021",
    "legacyId": "u05_101",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "加成再打折逆推成本",
    "batch": "奧數天梯",
    "source": "Unit05 AI_SPEC level_2（利潤逆推）",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "某童裝進貨成本加五成作為定價，季末按定價打八折售出，賣出價格為 720 元。請問這件童裝的進貨成本是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "成本 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "售價 (1.2 倍)",
          "units": 1.2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "售價 1.2 份為 720 元 (賺 120 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "720 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "B",
        "text": "600 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "2400 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "D",
        "text": "60 元",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "720 / (1.5 * 0.8)",
      "expect": "600"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「先加成、再打折」複合百分率問題時，能否將各階段倍數連續相乘，求出最終售價對成本的綜合倍數並逆推成本。",
      "steps": [
        {
          "type": "text",
          "text": "將進貨成本當作基準量 1 倍。加五成後的定價是成本的 1 ＋ 50% ＝ 1.5 倍。"
        },
        {
          "type": "text",
          "text": "再將定價打八折售出，售價是成本的 1.5 × 0.8 ＝ 1.2 倍（相當於依然淨賺兩成）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1.5 × 0.8 ＝ 1.2",
          "unit": "倍"
        },
        {
          "type": "mul",
          "a": "1.5",
          "b": "0.8"
        },
        {
          "type": "eq",
          "expr": "720 ÷ 1.2 ＝ 600",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "720",
          "divisor": "1.2",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "驗算：成本 600 元，加五成定價為 900 元，打八折售出為 900 × 0.8 ＝ 720 元，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：進貨成本 600 元"
        }
      ],
      "insight": "連乘算倍數：加五成再打八折 ＝ 1.5 × 0.8 ＝ 1.2 倍成本。",
      "figureNote": "線段圖顯示雖然打了八折，但因為原本加了五成，最終售價依然是成本的 1.2 倍（比基準長 0.2 份），因此 720 元對應 1.2 份。",
      "distractorAnalysis": {
        "A": "直覺以為加五成與打八折會相互抵銷，誤認為售價等於進貨成本。",
        "C": "將打八折（付 80%）誤當成便宜八成（只付 20%），算出售價只有 0.3 倍成本，導致逆推算出 2400 元荒謬高價。",
        "D": "直式除法 7200 ÷ 12 ＝ 600，商的末尾漏寫了一個 0 算成 60 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "綜合倍數 ＝ (1 ＋ 加成率) × 折扣率",
        "成本 ＝ 最終售價 ÷ 綜合倍數"
      ],
      "conceptCompare": "加成後的基準量變成了定價，因此打八折是「以定價為基準」，即 1.5 × 0.8 ＝ 1.2，絕不能把百分率直接相加減（50% − 20% ＝ 30% 是完全錯誤的）！",
      "examVariations": "若進一步問老闆賺多少錢，用 720 − 600 ＝ 120 元（或 600 × 0.2 ＝ 120 元）即可求得利潤。"
    }
  },
  {
    "id": "U05-S3-O-022",
    "legacyId": "u05_102",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "動態移書總和不變",
    "batch": "奧數天梯",
    "source": "Unit05 AI_SPEC level_3（和不變倍數）",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "甲書架有書 120 本，乙書架有書 80 本。要從甲書架拿幾本書放到乙書架，才能使乙書架的書本數成為甲書架的 3 倍？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲書架 (最後 1 份)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "乙書架 (最後 3 份)",
          "units": 3,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "總和不變共 4 份 (200 本)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "70 本",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "50 本",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "80 本",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "40 本",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "120 - ((120 + 80) / (1 + 3))",
      "expect": "70"
    },
    "explanation": {
      "examPurpose": "測驗學生能否抓住「內部互相調動，總和永遠不變」之核心不變量，並運用「和倍問題」求出調動後基準量的那 1 份。",
      "steps": [
        {
          "type": "text",
          "text": "書本只在甲乙兩書架間移轉，書本總數保持不變：120 ＋ 80 ＝ 200 本。"
        },
        {
          "type": "text",
          "text": "調動後乙書架是甲書架的 3 倍。將最後的甲書架當作 1 份，乙書架為 3 份，總共分成 1 ＋ 3 ＝ 4 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "120 ＋ 80 ＝ 200",
          "unit": "本"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 3 ＝ 4",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "200 ÷ 4 ＝ 50",
          "unit": "本"
        },
        {
          "type": "eq",
          "expr": "120 − 50 ＝ 70",
          "unit": "本"
        },
        {
          "type": "text",
          "text": "驗算：甲剩下 50 本，乙變成 80 ＋ 70 ＝ 150 本，150 ÷ 50 ＝ 3 倍，完全正確。"
        },
        {
          "type": "answer",
          "text": "答：70 本"
        }
      ],
      "insight": "總和不變原理：兩邊互相調動，總和固定，先求基準量的那 1 份。",
      "figureNote": "線段圖顯示調動後的狀態：甲為 1 份、乙為 3 份，兩者合併恰好等於總數 200 本，每 1 份即為 50 本。",
      "distractorAnalysis": {
        "B": "算出的 50 本是甲書架最後剩下的書本數，題目問的是要從甲書架「拿幾本書」，還需要用 120 − 50 ＝ 70 本。",
        "C": "計算份數時忘記甲自己也佔 1 份，誤直接拿甲的 120 本除以 3 得 40 本當作甲剩下的書，算出需拿走 120 − 40 ＝ 80 本。",
        "D": "忽略了從甲拿書時甲自己也會減少的動態變化，誤直接拿兩架差額 120 − 80 ＝ 40 本計算。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "總和不變原理：兩者互相給予，總和固定",
        "調動後基準量 ＝ 總數量 ÷ (1 ＋ 變動後倍數)"
      ],
      "conceptCompare": "動態轉移問題一定要先找「什麼量沒有變」。本題兩者互換，因此「總和不變」；若是兩人各花掉相同的錢，則是「相差不變」。",
      "examVariations": "若改為「從乙拿幾本給甲，甲變成乙的 4 倍？」，算法相同：200 ÷ (1 ＋ 4) ＝ 40 本，乙最後剩 40 本，需給甲 80 − 40 ＝ 40 本。"
    }
  },
  {
    "id": "U05-S3-O-023",
    "legacyId": "u05_103",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "年齡差恆定倍數問題",
    "batch": "奧數天梯",
    "source": "Unit05 AI_SPEC level_4（年齡倍數）",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "今年父親 42 歲，兒子 10 歲。幾年後，父親的年齡恰好是兒子年齡的 3 倍？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "兒子那時 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "父親那時 (3 倍)",
          "units": 3,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "年齡差恆定 2 份 (32 歲)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "16 年後",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "8 年後",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "C",
        "text": "6 年後",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "4 年後",
        "trapCode": "U05_AGE_DIFF_CHANGE"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "((42 - 10) / (3 - 1)) - 10",
      "expect": "6"
    },
    "explanation": {
      "examPurpose": "測驗學生能否靈活運用「年齡差永遠不變」之核心奧數思維，結合差倍問題求出特定倍數時的基準年齡與經過年數。",
      "steps": [
        {
          "type": "text",
          "text": "年齡問題關鍵：不管經過多少年，兩人的年齡差永遠不變。今年差：42 − 10 ＝ 32 歲。"
        },
        {
          "type": "text",
          "text": "當父親年齡是兒子的 3 倍時，以兒子為 1 份，父親為 3 份，兩人的年齡差相當於兒子的 3 − 1 ＝ 2 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "42 − 10 ＝ 32",
          "unit": "歲"
        },
        {
          "type": "eq",
          "expr": "3 − 1 ＝ 2",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "32 ÷ 2 ＝ 16",
          "unit": "歲"
        },
        {
          "type": "eq",
          "expr": "16 − 10 ＝ 6",
          "unit": "年後"
        },
        {
          "type": "text",
          "text": "驗算：6 年後父親 42 ＋ 6 ＝ 48 歲，兒子 10 ＋ 6 ＝ 16 歲，48 ÷ 16 ＝ 3 倍，完全正確。"
        },
        {
          "type": "answer",
          "text": "答：6 年後"
        }
      ],
      "insight": "年齡差不變：差值 ＝ 那時年齡 × (倍數 − 1)。",
      "figureNote": "線段圖顯示那時父親比兒子多出的 2 份，恰好對應兩人永遠不變的年齡差 32 歲，因此每 1 份（兒子那時歲數）為 16 歲。",
      "distractorAnalysis": {
        "A": "算出的 16 歲是那時兒子的年齡，題目問的是「幾年後」，必須再扣掉兒子今年的 10 歲，即 16 − 10 ＝ 6 年後。",
        "B": "差倍份數計算錯誤，忘記倍數要減 1（3 − 1 ＝ 2 份），誤用和倍份數 3 ＋ 1 ＝ 4 份去算，得出 32 ÷ 4 ＝ 8 年後。",
        "D": "錯誤假設父親年齡固定在 42 歲不動，誤拿 42 ÷ 3 ＝ 14 歲，忽略了兩人每年都會同時增長 1 歲。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差永遠不變（年齡差 ＝ 大者年齡 − 小者年齡）",
        "那時較小者年齡 ＝ 年齡差 ÷ (倍數 − 1)"
      ],
      "conceptCompare": "很多同學會誤用「現在父親 42 歲 ÷ 3 ＝ 14 歲」來算，這是致命錯誤！因為過幾年後，父親不可能永遠停在 42 歲，兩個人每年都會長 1 歲，只有「差」是不變的。",
      "examVariations": "若改問「幾年前父親是兒子的 5 倍？」，同樣用年齡差 32 歲，32 ÷ (5 − 1) ＝ 8 歲，兒子那時 8 歲，即 10 − 8 ＝ 2 年前。"
    }
  },
  {
    "id": "U05-S2-O-024",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "三量橋接統整基準",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（三量橋接）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "甲、乙、丙三人共有 380 元。已知甲的錢數是乙的 1.5 倍，丙的錢數是乙的 2/3 倍。請問甲比丙多多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "乙 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "甲 (1.5 倍)",
          "units": 1.5,
          "role": "compare"
        },
        {
          "label": "丙 (2/3 倍)",
          "units": 0.6667,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "三人合計 19/6 份 (380 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "100 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "40 元",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "60 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "80 元",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(380 / (1 + 3/2 + 2/3)) * (3/2 - 2/3)",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "測驗學生面對三個量的關係時，能否正確以共用基準量（乙）設為 1 份，將小數與分數倍數統整通分求出總份數，並計算兩比較量之間的差額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：找出統整基準量。甲和丙都以「乙的錢數」作為比較對象，因此以乙為基準量 1 份。"
        },
        {
          "type": "text",
          "text": "甲是乙的 1.5 倍（即 3/2 份），丙是乙的 2/3 倍（即 2/3 份）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：將三人的份數全部相加，求出總份數。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 3/2 ＋ 2/3 ＝ 6/6 ＋ 9/6 ＋ 4/6 ＝ 19/6",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "第 3 步：已知三人共有 380 元對應 19/6 份，求基準量 1 份（乙的錢數）。"
        },
        {
          "type": "eq",
          "expr": "380 ÷ (19/6) ＝ 380 × 6/19 ＝ 120",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 4 步：求甲比丙多多少份與具體金額。甲是 3/2 份，丙是 2/3 份，相差："
        },
        {
          "type": "eq",
          "expr": "3/2 − 2/3 ＝ 9/6 − 4/6 ＝ 5/6",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "120 × 5/6 ＝ 100",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "（亦可算出甲有 120 × 1.5 ＝ 180 元，丙有 120 × 2/3 ＝ 80 元，相差 180 − 80 ＝ 100 元）"
        },
        {
          "type": "answer",
          "text": "答：甲比丙多 100 元"
        }
      ],
      "insight": "三量橋接抓共用基準：誰是共同比較的對象，就將誰當作基準量 1 份。",
      "figureNote": "線段圖以乙的錢數為基準 1 份，甲為 1.5 份，丙為 2/3 份，三人合併長度為 19/6 份對應 380 元，甲比丙多出的線段長度為 5/6 份對應 100 元。",
      "distractorAnalysis": {
        "B": "誤將乙當成比較對象求差，算成乙比丙多 120 − 80 ＝ 40 元（基準量顛倒與比較對象混淆）。",
        "C": "求相差金額時漏扣丙的份數，誤以基準量 1 份相減，算成甲比乙多 120 × (1.5 − 1) ＝ 60 元。",
        "D": "分數通分計算 3/2 − 2/3 ＝ 9/6 − 4/6 ＝ 5/6 時粗心算成 4/6，求得 120 × 4/6 ＝ 80 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "三量統整：共用基準量設為 1 份，其餘各量轉為基準量的倍數",
        "基準量 ＝ 總和 ÷ 總份數"
      ],
      "conceptCompare": "很多同學看到 1.5 倍與 2/3 倍會想換成比例，但在國小階段，統一以「乙」為基準量 1 份，將 1.5 換成 3/2 進行分數通分加減，是最乾淨且不容易出錯的思維。",
      "examVariations": "若改問「三人中最多與最少相差多少元？」，一樣是甲減丙；若問「乙比丙多幾元？」，則算 120 − 80 ＝ 40 元。"
    }
  },
  {
    "id": "U05-S3-O-025",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "同花同差抓差不變量",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（差不變量）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "哥哥原有 420 元，弟弟原有 180 元。兩人各自買了一本相同價錢的筆記本後，哥哥剩下的錢恰好是弟弟剩下錢的 4 倍。請問這本筆記本一本多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "弟弟剩下 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "哥哥剩下 (4 倍)",
          "units": 4,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "差不變 3 份 (240 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "80 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "100 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "120 元",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "D",
        "text": "60 元",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "180 - ((420 - 180) / (4 - 1))",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "測驗學生能否掌握「兩人同時減少相同數量，兩量的差永遠不變」之核心不變量思維，並運用差倍關係逆推花費金額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：抓出不變量。兩人各買相同價錢的筆記本（各花去同樣多的錢），所以兩人的「差」永遠保持不變。"
        },
        {
          "type": "eq",
          "expr": "420 − 180 ＝ 240",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：分析後來倍數關係。哥哥剩下的錢是弟弟的 4 倍，以弟弟剩下的錢為基準量 1 份，哥哥剩下的錢為 4 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "兩人剩下的錢相差 4 − 1 ＝ 3 份，這 3 份恰好對應永遠不變的差額 240 元。"
        },
        {
          "type": "eq",
          "expr": "4 − 1 ＝ 3",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "240 ÷ 3 ＝ 80",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "每 1 份（弟弟最後剩下的錢）是 80 元。"
        },
        {
          "type": "text",
          "text": "第 3 步：求筆記本價錢。弟弟原本有 180 元，剩下 80 元，花掉的金額就是筆記本價錢："
        },
        {
          "type": "eq",
          "expr": "180 − 80 ＝ 100",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "驗算：哥哥原有 420 元花掉 100 元剩 320 元；320 ÷ 80 ＝ 4 倍，完全符合題意。"
        },
        {
          "type": "answer",
          "text": "答：這本筆記本一本 100 元"
        }
      ],
      "insight": "同增同減差不變：兩數同時減去相同量，差值固定；差值 ＝ 後來基準量 × (倍數 − 1)。",
      "figureNote": "線段圖顯示兩人各扣掉相同長度後，相差的 3 份依然精確等於原本兩人的差額 240 元，每 1 份即為弟弟剩下的 80 元。",
      "distractorAnalysis": {
        "A": "算出弟弟買完後剩下的錢 80 元，忘記題目問的是筆記本一本多少元，未用 180 − 80 算出花掉的錢。",
        "C": "計算差倍問題時忘記減 1，誤直接拿 240 ÷ 4 ＝ 60 元當作弟弟剩下的錢，算出筆記本 180 − 60 ＝ 120 元。",
        "D": "誤套用總和不變公式，誤算為 (420 ＋ 180) ÷ (1 ＋ 4) ＝ 120 元，求出 180 − 120 ＝ 60 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "差不變原理：兩量同時加或減同一個數，兩量的差固定不變",
        "變動後基準量 ＝ 差額 ÷ (變動後倍數 − 1)"
      ],
      "conceptCompare": "動態題型第一步永遠是判斷「什麼量沒變」：一人給另一人是「總和不變」；兩人同增或同減則是「差額不變」。",
      "examVariations": "若改為「兩人各存入相同金額後，哥哥變弟弟的 2 倍」，差額依然是 240 元，此時 240 ÷ (2 − 1) ＝ 240 元，存入 240 − 180 ＝ 60 元。"
    }
  },
  {
    "id": "U05-RV-O-026",
    "legacyId": null,
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合練習園地",
    "category": "帶餘數／補整數和倍",
    "batch": "奧數天梯",
    "source": "奧數天梯 L5（補整數和倍）",
    "level": 5,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "甲、乙兩人共有 290 張貼紙。如果甲另外從老師那裡得到 10 張貼紙，甲的貼紙張數就會恰好是乙的 2 倍。請問甲原本有多少張貼紙？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "乙 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "甲補 10 張後 (2 倍)",
          "units": 2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "總張數變 3 份 (300 張)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "200 張",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "140 張",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "190 張",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "180 張",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "((290 + 10) / (1 + 2)) * 2 - 10",
      "expect": "190"
    },
    "explanation": {
      "examPurpose": "測驗學生面對帶有增補條件的和倍問題時，能否先修正總量使數量滿足整數倍關係，再還原求出原本的數量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：修正總張數。甲另外從老師那裡得到 10 張貼紙，兩人的貼紙總數也會跟著增加 10 張。"
        },
        {
          "type": "eq",
          "expr": "290 ＋ 10 ＝ 300",
          "unit": "張"
        },
        {
          "type": "text",
          "text": "第 2 步：分析倍數關係。此時甲是乙的 2 倍，以乙為基準量 1 份，甲為 2 份，兩人合計為 1 ＋ 2 ＝ 3 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 2 ＝ 3",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "300 ÷ 3 ＝ 100",
          "unit": "張"
        },
        {
          "type": "text",
          "text": "每 1 份（乙的張數）是 100 張。"
        },
        {
          "type": "text",
          "text": "第 3 步：求甲原本的張數。甲拿到 10 張後是乙的 2 倍（100 × 2 ＝ 200 張），因此甲原本的張數要扣回 10 張："
        },
        {
          "type": "eq",
          "expr": "100 × 2 − 10 ＝ 190",
          "unit": "張"
        },
        {
          "type": "text",
          "text": "驗算：甲原本 190 張，乙原本 100 張，190 ＋ 100 ＝ 290 張；甲拿 10 張後變 200 張，200 ÷ 100 ＝ 2 倍，完全正確。"
        },
        {
          "type": "answer",
          "text": "答：甲原本有 190 張貼紙"
        }
      ],
      "insight": "補齊倍數求基準：總數加上不足量（或減去多餘量），轉化為標準和倍問題，最後記得還原。",
      "figureNote": "線段圖顯示補上虛線的 10 張貼紙後，甲剛好是乙的 2 倍，總長度成為整整 3 份共 300 張，每份 100 張。",
      "distractorAnalysis": {
        "A": "算出甲拿到 10 張之後的張數 200 張，忘記減去 10 張還原甲原本的張數。",
        "B": "計算總份數時漏加乙本身的 1 份，誤直接拿 300 ÷ 2 ＝ 150，扣 10 算成 140 張。",
        "D": "最後一步 200 − 10 計算失誤，減法退位粗心算成 180 張。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "修正後總量 ＝ 原總量 ＋ 補入量（或 − 給出量）",
        "基準量 ＝ 修正後總量 ÷ 總份數"
      ],
      "conceptCompare": "「甲多拿 10 張」代表外來增補，總和會增加 10；若是「甲給乙 10 張」，則是內部轉移，總和不會改變。",
      "examVariations": "若題幹改為「甲給出 10 張後是乙的 2 倍」，則修正總數為 290 − 10 ＝ 280 張，求乙為 280 ÷ 3（若整除），甲最後加上 10 張。"
    }
  },
  {
    "id": "U05-S1-O-027",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "加成折扣盈虧差基準",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（折扣盈虧逆推）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "某商店將一件商品的進貨成本加六成作為定價，促銷期間按定價打八五折售出，結果依然賺了 144 元。請問這件商品的進貨成本是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "成本 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "定價 (1.6 倍)",
          "units": 1.6,
          "role": "compare"
        },
        {
          "label": "售價 (1.36 倍)",
          "units": 1.36,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "淨賺 0.36 份 (144 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "320 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "B",
        "text": "960 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "51.84 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "400 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "144 / ((1 + 0.6) * 0.85 - 1)",
      "expect": "400"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「先加成定價、再打折售出」的複合百分率問題時，能否透過小數連乘求出最終售價相對於成本的綜合倍數，並利用直式除法逆推求出成本。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以進貨成本為基準量 1 份。加六成後的定價是成本的 1 ＋ 60% ＝ 1.6 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：打八五折代表售價是定價的 0.85 倍。計算售價是成本的幾倍："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1.6 × 0.85 ＝ 1.36",
          "unit": "倍"
        },
        {
          "type": "mul",
          "a": "1.6",
          "b": "0.85"
        },
        {
          "type": "text",
          "text": "售價是成本的 1.36 倍，表示每件商品淨賺成本的 1.36 − 1 ＝ 0.36 倍。"
        },
        {
          "type": "eq",
          "expr": "1.36 − 1 ＝ 0.36",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 3 步：已知淨賺 144 元對應 0.36 倍，利用除法逆推進貨成本："
        },
        {
          "type": "eq",
          "expr": "144 ÷ 0.36 ＝ 400",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "144",
          "divisor": "0.36",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "驗算：成本 400 元，加六成定價為 400 × 1.6 ＝ 640 元；打八五折售出為 640 × 0.85 ＝ 544 元；544 − 400 ＝ 144 元，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：進貨成本是 400 元"
        }
      ],
      "insight": "連乘算售價倍數：加六成再打八五折 ＝ 1.6 × 0.85 ＝ 1.36 倍成本，賺 0.36 倍。",
      "figureNote": "線段圖顯示定價為 1.6 份，打八五折縮短為 1.36 份，依然比成本 1 份長出 0.36 份，這 0.36 份恰好是賺得的 144 元。",
      "distractorAnalysis": {
        "A": "誤將百分率直接相減 60% − 15% ＝ 45%，算成 144 ÷ 0.45 ＝ 320 元（基準量不同不可直接相加減百分率）。",
        "B": "將打八五折誤當成便宜 15%，直接拿 144 ÷ 0.15 ＝ 960 元。",
        "C": "已知利潤與比值逆推成本時誤用乘法，算成 144 × 0.36 ＝ 51.84 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "綜合售價倍數 ＝ (1 ＋ 加成率) × 折扣率",
        "淨賺倍數 ＝ 綜合售價倍數 − 1",
        "成本 ＝ 利潤金額 ÷ 淨賺倍數"
      ],
      "conceptCompare": "加成是以「成本」為基準量，打折是以「定價」為基準量。基準量改變，百分率絕不能直接加減（60% − 15% ＝ 45% 是常見典型錯誤）！",
      "examVariations": "若改問定價是多少元，算出成本 400 元後再乘以 1.6 即可得到定價 640 元。"
    }
  },
  {
    "id": "U05-S2-O-028",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "剩餘量分步還原",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（分步還原倒推）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "lg",
    "question": "有一桶冬瓜檸檬飲料，第一天喝去全桶的 2/5 又 3 公升，第二天喝去第一天剩下容量的 1/2，此時桶子裡還剩下 6 公升。請問這桶冬瓜檸檬飲料原本有多少公升？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "第一天剩下 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "第二天喝去 (1/2)",
          "units": 0.5,
          "role": "compare"
        },
        {
          "label": "最後剩下 (1/2)",
          "units": 0.5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "第一天剩下共 12 公升"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "25 公升",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "90 公升",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "9 公升",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "15 公升",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(6 / (1 - 1/2) + 3) / (1 - 2/5)",
      "expect": "25"
    },
    "explanation": {
      "examPurpose": "測驗學生面對多步驟分數剩餘問題時，能否理清各階段基準量的轉換，由後往前使用倒推法分步還原。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：由後往前倒推第二天。第二天喝去第一天剩下的 1/2，最後還剩 6 公升。"
        },
        {
          "type": "text",
          "text": "表示最後剩下的 6 公升相當於第一天剩下容量的 1 − 1/2 ＝ 1/2。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "6 ÷ (1/2) ＝ 6 × 2 ＝ 12",
          "unit": "公升"
        },
        {
          "type": "text",
          "text": "得出第一天喝完後剩下 12 公升。"
        },
        {
          "type": "text",
          "text": "第 2 步：倒推第一天。第一天喝去全桶的 2/5「又 3 公升」才剩下 12 公升。"
        },
        {
          "type": "text",
          "text": "如果那 3 公升沒有喝，桶裡應該剩下 12 ＋ 3 ＝ 15 公升。"
        },
        {
          "type": "eq",
          "expr": "12 ＋ 3 ＝ 15",
          "unit": "公升"
        },
        {
          "type": "text",
          "text": "這 15 公升恰好是全桶原有容量的 1 − 2/5 ＝ 3/5。"
        },
        {
          "type": "eq",
          "expr": "1 − 2/5 ＝ 3/5",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "第 3 步：求全桶原有容量。已知 15 公升對應 3/5 份，用除法還原全桶（基準量 1 份）："
        },
        {
          "type": "eq",
          "expr": "15 ÷ (3/5) ＝ 15 × 5/3 ＝ 25",
          "unit": "公升"
        },
        {
          "type": "text",
          "text": "驗算：全桶 25 公升，第一天喝 25 × 2/5 ＋ 3 ＝ 13 公升剩 12 公升；第二天喝 12 × 1/2 ＝ 6 公升剩 6 公升，完全吻合。"
        },
        {
          "type": "answer",
          "text": "答：這桶冬瓜檸檬飲料原本有 25 公升"
        }
      ],
      "insight": "分步還原倒推法：由最後的結果一步步往前推，喝去多少就加回來，除以所佔的分數還原前一步。",
      "figureNote": "線段圖顯示第二天將第一天剩下的容量平分為 2 份，剩下的 6 公升對應半份，因此第一天剩下的容量為 12 公升。",
      "distractorAnalysis": {
        "B": "誤把第二天喝去的 1/2 當成以「全桶」為基準量，算成全桶剩下 1 − (2/5 ＋ 1/2) ＝ 1/10，得出 9 ÷ (1/10) ＝ 90 公升。",
        "C": "最後一步由 15 公升求全桶時誤用乘法，算成 15 × 3/5 ＝ 9 公升。",
        "D": "倒推第一天時符號弄反，誤將 12 ＋ 3 算成 12 − 3 ＝ 9 公升，得出 9 ÷ (3/5) ＝ 15 公升。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "倒推還原法：剩餘量 ÷ (1 − 剩餘佔比) ＝ 前一步總量",
        "「喝去 2/5 又 3 公升」倒推時要「先加回 3 公升，再除以 (1 − 2/5)」"
      ],
      "conceptCompare": "第二天的基準量是「第一天剩下的容量」，不是「整桶飲料容量」！兩階段的基準量不同，絕不能直接將 2/5 與 1/2 相加。",
      "examVariations": "若改為「第一天喝去 1/3 少 2 公升」，倒推時就要先減去 2 公升，再除以 (1 − 1/3)。"
    }
  },
  {
    "id": "U05-S3-O-029",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "跨時點雙邊年齡差",
    "batch": "奧數天梯",
    "source": "奧數天梯 L6（雙時點年齡差）",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "md",
    "question": "5 年前媽媽的年齡是女兒的 5 倍。如果今年媽媽比女兒大 28 歲，請問女兒今年幾歲？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "5 年前女兒 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "5 年前媽媽 (5 倍)",
          "units": 5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "年齡差恆定 4 份 (28 歲)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "7 歲",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "12 歲",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "10.6 歲",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "D",
        "text": "33 歲",
        "trapCode": "U05_AGE_DIFF_CHANGE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(28 / (5 - 1)) + 5",
      "expect": "12"
    },
    "explanation": {
      "examPurpose": "測驗學生能否結合「年齡差永遠恆定不變」之核心觀念，跨越時間點建立差倍關係，並精確還原到當前時點的年齡。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：掌握年齡問題最高準則：不管經過多少年，兩人的年齡差永遠恆定不變。"
        },
        {
          "type": "text",
          "text": "今年媽媽比女兒大 28 歲，表示 5 年前媽媽同樣比女兒大 28 歲。"
        },
        {
          "type": "text",
          "text": "第 2 步：分析 5 年前的倍數關係。以 5 年前女兒的年齡為基準量 1 份，媽媽為 5 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "5 年前兩人的年齡差相當於 5 − 1 ＝ 4 份，對應永遠不變的 28 歲。"
        },
        {
          "type": "eq",
          "expr": "5 − 1 ＝ 4",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "28 ÷ 4 ＝ 7",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "算得 5 年前女兒是 7 歲（媽媽是 7 × 5 ＝ 35 歲）。"
        },
        {
          "type": "text",
          "text": "第 3 步：求女兒今年的年齡。由 5 年前推回今年，要加上 5 歲："
        },
        {
          "type": "eq",
          "expr": "7 ＋ 5 ＝ 12",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "驗算：女兒今年 12 歲，媽媽今年 12 ＋ 28 ＝ 40 歲。5 年前女兒 7 歲、媽媽 35 歲，35 ÷ 7 ＝ 5 倍，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：女兒今年 12 歲"
        }
      ],
      "insight": "年齡差永遠恆定：不管哪一年，年齡差都一樣；由差倍求出過去年齡後，記得加回經過年數。",
      "figureNote": "線段圖顯示 5 年前媽媽比女兒多出的 4 份長度，正等於兩人永遠不變的年齡差 28 歲，每份即為 5 年前女兒的 7 歲。",
      "distractorAnalysis": {
        "A": "算出的 7 歲是 5 年前女兒的年齡，忘記加上 5 歲還原為女兒今年的年齡。",
        "C": "差倍計算份數差時忘記減 1，誤直接除以 5，算成 28 ÷ 5 ＝ 5.6 歲，加 5 歲得出 10.6 歲。",
        "D": "誤以為經過 5 年兩人的年齡差會增加 5 歲，拿 28 ＋ 5 ＝ 33 歲推算。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差永遠不變（年齡差 ＝ 大者年齡 − 小者年齡）",
        "過去基準年齡 ＝ 年齡差 ÷ (倍數 − 1)",
        "今年年齡 ＝ 過去基準年齡 ＋ 經過年數"
      ],
      "conceptCompare": "很多同學常被「今年大 28 歲」和「5 年前是 5 倍」兩個不同時點搞混。切記：時點不同，倍數會變，但年齡差絕對不會變！",
      "examVariations": "若改問「媽媽今年幾歲？」，算得女兒今年 12 歲後，加上 28 歲即為媽媽今年 40 歲。"
    }
  },
  {
    "id": "U05-S2-O-030",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "比例贈與後總和守恆",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（轉移後總和守恆）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "甲、乙兩人共有 560 元。如果甲把自己現有錢數的 1/5 給乙，兩人的錢數就會變得一樣多。請問甲、乙兩人原本相差多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "甲原本 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "甲剩下 (4/5 份)",
          "units": 0.8,
          "role": "compare"
        },
        {
          "label": "平分後每人 (280 元)",
          "units": 0.8,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "總和守恆 560 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "70 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "112 元",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "C",
        "text": "140 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "56 元",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(560 / 2) / (1 - 1/5) - (560 - (560 / 2) / (1 - 1/5))",
      "expect": "140"
    },
    "explanation": {
      "examPurpose": "測驗學生能否掌握內部轉移問題中「總金額守恆不變」之奧數精髓，並由平分狀態倒推單方基準量與原始差額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：抓出不變量。甲給乙錢屬於內部互給，兩人的「總金額 560 元」保持不變。"
        },
        {
          "type": "text",
          "text": "第 2 步：求後來兩人的錢數。給完後兩人錢數一樣多，因此最後每人各有："
        },
        {
          "type": "eq",
          "expr": "560 ÷ 2 ＝ 280",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：以甲原本的錢為基準量 1 份。甲給出自己的 1/5 後，甲剩下原本的 1 − 1/5 ＝ 4/5 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "這 4/5 份恰好等於甲後來擁有的 280 元。求甲原本有多少元："
        },
        {
          "type": "eq",
          "expr": "1 − 1/5 ＝ 4/5",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "280 ÷ (4/5) ＝ 280 × 5/4 ＝ 350",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "甲原本有 350 元，給出 350 × 1/5 ＝ 70 元。"
        },
        {
          "type": "text",
          "text": "第 4 步：求乙原本的錢數與兩人原本相差金額。"
        },
        {
          "type": "eq",
          "expr": "560 − 350 ＝ 210",
          "unit": "元"
        },
        {
          "type": "eq",
          "expr": "350 − 210 ＝ 140",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "（亦可這樣思考：甲給了乙 70 元後兩人一樣多，表示甲原本比乙多 2 個 70 元，即 70 × 2 ＝ 140 元）"
        },
        {
          "type": "answer",
          "text": "答：甲、乙兩人原本相差 140 元"
        }
      ],
      "insight": "轉移問題抓總和守恆：平分後各得一半；由甲剩下的分數逆推甲原本金額，甲給乙幾元，原相差就是 2 個幾元。",
      "figureNote": "線段圖顯示甲原本的 1 份給出 1/5 份後剩下 4/5 份，對應平分後的 280 元，逆推求得甲原本有 350 元。",
      "distractorAnalysis": {
        "A": "算出甲給乙的金額 70 元，誤以為這就是兩人原本相差的金額（忘記甲少 70 同時乙多 70，原本應差 70 × 2 ＝ 140 元）。",
        "B": "誤將總金額 560 元當作基準量直接乘以 1/5 ＝ 112 元，忽略了 1/5 是以「甲自己的錢」為基準。",
        "D": "誤以平分後的 280 元為基準量計算給出的錢（280 × 1/5 ＝ 56 元），推得相差 56 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "互給問題：總和守恆不變，平分後每人 ＝ 總和 ÷ 2",
        "原給予者本金 ＝ 平分金額 ÷ (1 − 給出分率)",
        "原相差 ＝ 給出金額 × 2"
      ],
      "conceptCompare": "「甲給乙 70 元後兩人同錢」代表甲比乙多 140 元，而不是 70 元！很多同學忘記給予時「甲減少、乙增加」的雙向消長效應。",
      "examVariations": "若改問「乙原本有多少元？」，利用 560 − 350 ＝ 210 元即可求出。"
    }
  },
  {
    "id": "U05-S3-O-031",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "溶質不變量濃度調整",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（溶質不變量）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "有一杯 200 公克、濃度 12% 的食鹽水，經過加熱蒸發掉一部分水之後，食鹽水的濃度提高為 20%。請問蒸發掉了多少公克的水？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "蒸發前鹽水 (200 公克)",
          "units": 200,
          "role": "base"
        },
        {
          "label": "蒸發後鹽水 (120 公克)",
          "units": 120,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "蒸發水份 80 公克 (鹽 24 公克不變)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "16 公克",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "188 公克",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "60 公克",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "80 公克",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "200 - (200 * 0.12) / 0.2",
      "expect": "80"
    },
    "explanation": {
      "examPurpose": "測驗學生能否掌握蒸發問題中「溶質（純鹽）重量永遠不變」之核心關鍵，以鹽的重量為橋樑，運用小數除法逆推蒸發後鹽水總重並求出蒸發水量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：找不變量。加熱蒸發只會帶走純水，食鹽水中的「鹽（溶質）」重量完全不變！"
        },
        {
          "type": "text",
          "text": "算出原本食鹽水中有多少純鹽（比較量 ＝ 基準量 × 比值）："
        },
        {
          "type": "eq",
          "expr": "200 × 12% ＝ 200 × 0.12 ＝ 24",
          "unit": "公克"
        },
        {
          "type": "text",
          "text": "第 2 步：求蒸發後的鹽水總重。蒸發後濃度變為 20%，鹽依然是 24 公克。"
        },
        {
          "type": "text",
          "text": "以「蒸發後鹽水總重」為基準量 1 份，鹽佔 20%（即 0.2 倍）。用除法求新總重："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "24 ÷ 20% ＝ 24 ÷ 0.2 ＝ 120",
          "unit": "公克"
        },
        {
          "type": "longdiv",
          "dividend": "24",
          "divisor": "0.2",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "第 3 步：求蒸發掉的水重。蒸發前後鹽水總重量的差，就是被蒸發的水量："
        },
        {
          "type": "eq",
          "expr": "200 − 120 ＝ 80",
          "unit": "公克"
        },
        {
          "type": "text",
          "text": "驗算：蒸發後剩 120 公克鹽水，其中純鹽 24 公克，24 ÷ 120 ＝ 0.2 ＝ 20%，濃度完全正確。"
        },
        {
          "type": "answer",
          "text": "答：蒸發掉了 80 公克的水"
        }
      ],
      "insight": "蒸發純水鹽不變：抓住溶質（鹽）重量固定；後來的鹽水總重 ＝ 鹽重 ÷ 新濃度。",
      "figureNote": "線段圖顯示蒸發前後純鹽固定為 24 公克，但由於水份蒸發減少 80 公克，鹽水總重從 200 公克縮減為 120 公克，使得鹽的佔比由 12% 提高到 20%。",
      "distractorAnalysis": {
        "A": "誤把原本的 200 公克鹽水當基準，直接乘以濃度差 200 × (20% − 12%) ＝ 16 公克（混淆基準量）。",
        "B": "小數除法直式計算小數點移位錯誤，將 24 ÷ 0.2 誤算為 12 公克，得出 200 − 12 ＝ 188 公克。",
        "C": "最後一步減法計算退位粗心，將 200 − 120 誤算為 60 公克。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "溶質（鹽重） ＝ 鹽水總重 × 濃度（永遠不變量）",
        "蒸發後鹽水總重 ＝ 溶質重 ÷ 新濃度",
        "蒸發水量 ＝ 原鹽水重 − 蒸發後鹽水重"
      ],
      "conceptCompare": "濃度提高是因為「水變少了」，不是「鹽變多了」！絕不能直接把百分率相減（20% − 12% ＝ 8%）拿去乘總重量。",
      "examVariations": "若是「加水稀釋」問題，同樣鹽重不變：新總重 ＝ 鹽重 ÷ 新稀釋濃度，加入水量 ＝ 新總重 − 原鹽水重。"
    }
  },
  {
    "id": "U05-RV-O-032",
    "legacyId": null,
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合練習園地",
    "category": "兩批同售價異盈虧率",
    "batch": "奧數天梯",
    "source": "奧數天梯 L7（同售價盈虧比）",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "服飾店老闆同時賣出兩件不同款式的外套，每件售價都是 1200 元。已知第一件賺二成，第二件賠二成。請問這兩件外套合計是賺還是賠？賺或賠多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "第一件成本 (1000 元)",
          "units": 1000,
          "role": "base"
        },
        {
          "label": "第二件成本 (1500 元)",
          "units": 1500,
          "role": "base"
        },
        {
          "label": "兩件總售價 (2400 元)",
          "units": 2400,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "總成本 2500 元，賠 100 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "不賺不賠 (0 元)",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "B",
        "text": "賺 100 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "賠 200 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "賠 100 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(1200 / (1 - 0.2) + 1200 / (1 + 0.2)) - 2400",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "測驗學生能否辨析「售價相同但基準量（成本）不同」時盈虧不能直接互相抵銷的本質，並分別逆推兩件商品的進貨成本求出綜合盈虧。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：求第一件外套的成本。第一件賺二成（賺 20%），表示售價是第一件成本的 1 ＋ 20% ＝ 1.2 倍。"
        },
        {
          "type": "eq",
          "expr": "1200 ÷ 1.2 ＝ 1000",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "1200",
          "divisor": "1.2",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "第一件成本 1000 元，賺了 1200 − 1000 ＝ 200 元。"
        },
        {
          "type": "text",
          "text": "第 2 步：求第二件外套的成本。第二件賠二成（賠 20%），表示售價是第二件成本的 1 − 20% ＝ 0.8 倍。"
        },
        {
          "type": "eq",
          "expr": "1200 ÷ 0.8 ＝ 1500",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "1200",
          "divisor": "0.8",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "第二件成本 1500 元，賠了 1500 − 1200 ＝ 300 元。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 3 步：合併計算兩件的總成本與總售價。"
        },
        {
          "type": "eq",
          "expr": "1000 ＋ 1500 ＝ 2500",
          "unit": "元"
        },
        {
          "type": "eq",
          "expr": "1200 ＋ 1200 ＝ 2400",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "總成本是 2500 元，而總售價只有 2400 元，總售價比總成本少："
        },
        {
          "type": "eq",
          "expr": "2500 − 2400 ＝ 100",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "（或是賺 200 元但賠了 300 元，綜合結果：賠了 300 − 200 ＝ 100 元）"
        },
        {
          "type": "answer",
          "text": "答：合計賠 100 元"
        }
      ],
      "insight": "同售價異盈虧必虧損：賺二成成本小、賠二成成本大，賠的金額大於賺的金額，合計一定賠錢！",
      "figureNote": "線段圖顯示第一件成本為 1000 元，第二件成本高達 1500 元，合計總成本 2500 元，大於兩件外套的總售價 2400 元，因此淨賠 100 元。",
      "distractorAnalysis": {
        "A": "直覺以為「賺二成」與「賠二成」剛好相互抵銷，誤選不賺不賠（忽略了兩件外套的成本基準量不同）。",
        "B": "計算賺賠方向弄反：第一件實際賺 200 元、第二件實際賠 300 元，卻誤把兩者方向看反（當成賺 300 元、賠 200 元），算成淨賺 100 元。",
        "C": "直式除法 1200 ÷ 0.8 計算失誤算成 1600 元，導致總成本算成 2600 元而誤選賠 200 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "賺錢商品成本 ＝ 售價 ÷ (1 ＋ 獲利率)",
        "賠錢商品成本 ＝ 售價 ÷ (1 − 虧損率)",
        "合計盈虧 ＝ 總售價 − 總成本（成本較大為賠，售價較大為賺）"
      ],
      "conceptCompare": "很多同學最容易掉入「賺 20% 與賠 20% 互相抵銷 ＝ 0」的陷阱！切記：賺 20% 的基準量是比較便宜的成本（1000 元），而賠 20% 的基準量是比較昂貴的成本（1500 元）。同樣是 20%，昂貴成本賠的金額絕對比便宜成本賺的金額更多！",
      "examVariations": "若兩件外套售價改為 2400 元，一件賺二成、一件賠二成，算法相同：2400 ÷ 1.2 ＝ 2000，2400 ÷ 0.8 ＝ 3000，總成本 5000，總售價 4800，合計賠 200 元。"
    }
  },
  {
    "id": "U05-S1-O-033",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "兩方案折扣盈虧差",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8 兩方案折扣盈虧差",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "文具店進了一批紀念鋼筆，老闆設定價後發現：如果按定價打七五折出售，每枝會賠 60 元；如果改按定價打九折出售，每枝可賺 75 元。請問這批紀念鋼筆每枝的定價是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "七五折售價 (定價 × 0.75)",
          "units": 0.75,
          "role": "compare"
        },
        {
          "label": "九折售價 (定價 × 0.9)",
          "units": 0.9,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "兩次相差 0.15 份 (賠 60 元到賺 75 元，共差 135 元)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "900 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "100 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "150 元",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "D",
        "text": "90 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(75 + 60) / (0.9 - 0.75)",
      "expect": "900"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「一盈一虧」雙折扣方案時，能否以商品定價為基準量「1」，找出兩次售價的份數差與金額差，並運用小數除法逆推算出商品定價。",
      "insight": "盈虧抓差額：從賠 60 元到賺 75 元，兩次售價實際相差 75 ＋ 60 ＝ 135 元，對應定價的 0.9 − 0.75 ＝ 0.15 倍。",
      "figureNote": "線段圖清晰呈現兩次打折售價皆以定價為基準量。九折長度 0.9 與七五折長度 0.75 相差 0.15 份，而金額上從賠 60 元到賺 75 元跨越了進貨成本線，總差額為 135 元。",
      "steps": [
        {
          "type": "text",
          "text": "以「每枝鋼筆的定價」為基準量「1」。打九折的售價是定價的 0.9 倍，打七五折的售價是定價的 0.75 倍。"
        },
        {
          "type": "text",
          "text": "分析兩次售價的差額：以進貨成本為基準，打九折賺 75 元（高於成本 75 元），打七五折賠 60 元（低於成本 60 元），因此兩次賣出的金額相差 75 ＋ 60 ＝ 135 元。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "0.9 − 0.75 ＝ 0.15",
          "unit": "倍"
        },
        {
          "type": "eq",
          "expr": "75 ＋ 60 ＝ 135",
          "unit": "元"
        },
        {
          "type": "eq",
          "expr": "135 ÷ 0.15 ＝ 900",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "135",
          "divisor": "0.15",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "驗算：定價 900 元。九折售價 900 × 0.9 ＝ 810 元，成本為 810 − 75 ＝ 735 元；七五折售價 900 × 0.75 ＝ 675 元，成本為 675 ＋ 60 ＝ 735 元，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：定價是 900 元"
        }
      ],
      "distractorAnalysis": {
        "B": "誤將賺 75 元與賠 60 元相減求差（75 − 60 ＝ 15 元），列式 15 ÷ 0.15 ＝ 100 元，忽略了從虧損到獲利必須跨越成本加總差額。",
        "C": "忘記求兩折數之差，直接拿總差額 135 元除以九折 0.9，算出 135 ÷ 0.9 ＝ 150 元。",
        "D": "在計算小數除法 135 ÷ 0.15 時，小數點向右移位失誤，算成 135 ÷ 1.5 ＝ 90 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "總金額差 ＝ 盈利金額 ＋ 虧損金額",
        "基準量（定價）＝ 總金額差 ÷ 倍數差"
      ],
      "conceptCompare": "「一賺一賠」相差要相加（跨越成本線），「兩次都賺」或「兩次都賠」相差才是相減。基準量永遠是設定折數的定價！",
      "examVariations": "若題目進一步問每枝鋼筆的「進貨成本」是多少元，可由定價 900 元代入：900 × 0.9 − 75 ＝ 735 元。"
    }
  },
  {
    "id": "U05-S2-O-034",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "部分不變比例基準轉移",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8 部分不變比例基準轉移",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "學校美術社原本男生人數佔全社總人數的 40%，後來新加入 15 位女生，此時男生人數變成佔全社總人數的 30%。請問美術社原本共有多少人？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "男生人數 (全程不變量)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "原全社人數 (男生的 5/2 倍)",
          "units": 2.5,
          "role": "compare"
        },
        {
          "label": "新全社人數 (男生的 10/3 倍)",
          "units": 3.333,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "加入 15 位女生，全社對男生增加 5/6 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "150 人",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "B",
        "text": "45 人",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "18 人",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "60 人",
        "trapCode": "U05_RECIPROCAL_MISS"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "15 / (10/3 - 5/2) / (4/10)",
      "expect": "45"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「部分量改變、另一部分量不變」的情境時，能否鎖定全程不變的男生人數為基準，將全社總人數轉換為男生的倍數來列式求解。",
      "insight": "抓住不變量轉移基準：女生加入但男生人數完全不變！將全社人數轉為男生人數的倍數，即可利用女生增加的人數求出男生人數。",
      "figureNote": "線段圖以不變的「男生人數」為基準 1 份。原本全社是男生的 2.5 倍（5/2 份），加入 15 位女生後新全社變成男生的 10/3 份，增加的 15 人正好對應 10/3 − 5/2 ＝ 5/6 份。",
      "steps": [
        {
          "type": "text",
          "text": "觀察不變量：題目中只加入女生，所以「男生人數全程沒有改變」。以不變的「男生人數」當作基準量 1 份。"
        },
        {
          "type": "text",
          "text": "原本男生佔全社的 40%（即 2/5），換句話說，原全社總人數是男生的 1 ÷ (2/5) ＝ 5/2 倍。"
        },
        {
          "type": "text",
          "text": "加入 15 位女生後，男生佔新全社的 30%（即 3/10），新全社總人數是男生的 1 ÷ (3/10) ＝ 10/3 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "10/3 − 5/2 ＝ 20/6 − 15/6 ＝ 5/6",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "新加入的 15 位女生，讓全社相對於男生增加了 5/6 倍，因此男生人數為 15 ÷ 5/6 ＝ 18 人。"
        },
        {
          "type": "eq",
          "expr": "15 ÷ 5/6 ＝ 18",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "原本全社總人數以男生佔 40% 逆推：18 ÷ 0.4 ＝ 45 人。"
        },
        {
          "type": "eq",
          "expr": "18 ÷ 0.4 ＝ 45",
          "unit": "人"
        },
        {
          "type": "longdiv",
          "dividend": "18",
          "divisor": "0.4",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "驗算：原全社 45 人，男生佔 40% 為 18 人，女生為 27 人。加入 15 位女生後女生變 42 人，全社變 60 人，男生佔比 18 ÷ 60 ＝ 30%，完全符合題意。"
        },
        {
          "type": "answer",
          "text": "答：美術社原本共有 45 人"
        }
      ],
      "distractorAnalysis": {
        "A": "誤以為全社總人數不變，直接拿百分率差 40% − 30% ＝ 10% 來除：15 ÷ 0.1 ＝ 150 人，忽略了總人數隨女生加入而擴大。",
        "C": "正確算出不變量男生人數 18 人，但誤以為題目問男生人數，未換算回原本全社總人數。",
        "D": "算出加入女生後的新全社總人數（18 ÷ 0.3 ＝ 60 人），忘記題目問的是原本全社共有多少人。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "總量相對於不變量之倍數 ＝ 1 ÷ 不變量佔比",
        "不變量 ＝ 增減量 ÷ 倍數差"
      ],
      "conceptCompare": "若總人數不變（如內部轉移），可以直接相減百分率；但當總人數被改變時，百分率的基準量一直在變，必須綁定「真正沒變的量」當基準。",
      "examVariations": "此題亦可反問「原本女生有多少人」：45 − 18 ＝ 27 人；或問「加入女生後全社共有多少人」：45 ＋ 15 ＝ 60 人。"
    }
  },
  {
    "id": "U05-S3-O-035",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "雙數同增同基準轉化",
    "batch": "奧數天梯",
    "source": "奧數天梯 L8 雙數同增同基準轉化",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "哥哥原有的儲蓄是弟弟的 4 倍，如果兩人這週各存入 120 元，哥哥的儲蓄就會變成弟弟的 2 倍。請問哥哥原本有多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "兩人的相差金額 (差不變基準 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "原本弟弟的錢 (相差的 1/3)",
          "units": 0.3333,
          "role": "compare"
        },
        {
          "label": "後來弟弟的錢 (等於相差的 1 倍)",
          "units": 1,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "弟弟存入 120 元，剛好增加了 2/3 份相差量"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "60 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "180 元",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "C",
        "text": "240 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "360 元",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "120 / (1 / 1 - 1 / 3) * 1/3 * 4",
      "expect": "240"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「兩量同增同減」時，能否掌握「差不變」的奧數核心思維，將不同時點的倍數轉換為以固定差額為基準的份數來解題。",
      "insight": "同增同減差不變：兩人各存入 120 元，哥哥比弟弟多的金額永遠固定！以「相差金額」為基準 1，原弟弟佔 1/3 份，後來弟弟佔 1 份，存入的 120 元就是相差的 2/3。",
      "figureNote": "線段圖展示兩人的相差金額保持不變。原本弟弟佔差額的 1/3 份，存入 120 元後弟弟正好等於差額的 1 份，因此 120 元對應差額的 2/3 份。",
      "steps": [
        {
          "type": "text",
          "text": "尋找不變量：兩人各自存入相同的 120 元，所以「哥哥與弟弟的錢數相差始終不變」。以「兩人的相差金額」為基準量 1 份。"
        },
        {
          "type": "text",
          "text": "原本哥哥是弟弟的 4 倍，以原弟弟為 1 份，哥哥為 4 份，相差 4 − 1 ＝ 3 份。因此，原本弟弟的錢佔相差金額的 1/3 倍。"
        },
        {
          "type": "text",
          "text": "各存 120 元後，哥哥是弟弟的 2 倍，以新弟弟為 1 份，哥哥為 2 份，相差 2 − 1 ＝ 1 份。因此，新弟弟的錢等於相差金額的 1/1 ＝ 1 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 − 1/3 ＝ 2/3",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "弟弟增加的 120 元，對應相差金額的 2/3 份，因此兩人的相差金額為 120 ÷ 2/3 ＝ 180 元。"
        },
        {
          "type": "eq",
          "expr": "120 ÷ 2/3 ＝ 180",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "弟弟原本有 180 × 1/3 ＝ 60 元。"
        },
        {
          "type": "eq",
          "expr": "180 × 1/3 ＝ 60",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "哥哥原本是弟弟的 4 倍，所以哥哥原本有 60 × 4 ＝ 240 元。"
        },
        {
          "type": "eq",
          "expr": "60 × 4 ＝ 240",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "驗算：哥哥原有 240 元，弟弟原有 60 元，相差 180 元且哥哥為弟弟 4 倍。兩人各存 120 元後，哥哥 360 元，弟弟 180 元，360 ÷ 180 ＝ 2 倍，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：哥哥原本有 240 元"
        }
      ],
      "distractorAnalysis": {
        "A": "正確推算出弟弟原有的錢為 60 元，但審題不清，誤以為題目問弟弟原有金額而直接作答。",
        "B": "算出兩人的相差金額 180 元，誤以為是哥哥原有金額。",
        "D": "算出存入 120 元後哥哥現在的金額（240 ＋ 120 ＝ 360 元），忘記題目問的是原本有多少元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "份數差 ＝ 1 ÷ (後倍數 − 1) − 1 ÷ (前倍數 − 1)",
        "固定差額 ＝ 增加量 ÷ 份數差"
      ],
      "conceptCompare": "同增同減問題（如年齡問題、同花同存）的鑰匙是「差不變」；若是甲給乙、乙給甲的內部轉移，鑰匙則是「和不變」。",
      "examVariations": "此題亦可變形為「兩人各花去 50 元」：差額依然不變，只是新弟弟的份數會比原弟弟變小，依然用差額除以份數差求解。"
    }
  },
  {
    "id": "U05-S2-O-036",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "多人分擔轉總和基準",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9 多人分擔轉總和基準",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "甲、乙、丙三人合買一件禮物送給老師。已知甲出的錢是其餘兩人出錢總和的 1/2，乙出的錢是其餘兩人出錢總和的 1/3，丙出了 300 元。請問這件禮物的總價是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "禮物總價 (全體基準 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "甲出資 (佔總價 1/3)",
          "units": 0.333,
          "role": "compare"
        },
        {
          "label": "乙出資 (佔總價 1/4)",
          "units": 0.25,
          "role": "compare"
        },
        {
          "label": "丙出資 300 元 (佔總價 5/12)",
          "units": 0.417,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "甲(1/3) ＋ 乙(1/4) ＋ 丙(5/12) ＝ 總價 1 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1800 元",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "B",
        "text": "360 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "240 元",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "720 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "300 / (1 - 1/3 - 1/4)",
      "expect": "720"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「以他人之和為基準」的分數條件時，能否利用母子和關係，將每個人的出資比例統一轉換為以「禮物總價」為基準量，求出整體總價。",
      "insight": "轉化為全體總和基準：甲是其餘的 1/2，代表甲佔 1 份、其餘佔 2 份，全部共 3 份，所以甲佔全體總價的 1/3！同理乙佔全體總價的 1/4。",
      "figureNote": "線段圖展示將禮物總價切分為甲、乙、丙三段。甲佔 1/3、乙佔 1/4，剩下未知的丙佔 1 − 1/3 − 1/4 ＝ 5/12，對應丙出的 300 元。",
      "steps": [
        {
          "type": "text",
          "text": "統一基準量：題目中甲和乙比較的基準都是「其餘兩人」，基準量不同無法直接相加。我們必須全部換算成以「禮物總價」為基準量「1」。"
        },
        {
          "type": "text",
          "text": "甲出的是其餘兩人的 1/2：把其餘兩人當作 2 份，甲就是 1 份，三人出資總價就是 1 ＋ 2 ＝ 3 份。因此，甲出的錢佔全體總價的 1 ÷ (1 ＋ 2) ＝ 1/3。"
        },
        {
          "type": "text",
          "text": "乙出的是其餘兩人的 1/3：把其餘兩人當作 3 份，乙就是 1 份，三人出資總價就是 1 ＋ 3 ＝ 4 份。因此，乙出的錢佔全體總價的 1 ÷ (1 ＋ 3) ＝ 1/4。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 − 1/3 − 1/4 ＝ 12/12 − 4/12 − 3/12 ＝ 5/12",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "丙出的 300 元佔全體總價的 5/12，逆推禮物總價：300 ÷ 5/12 ＝ 300 × 12/5 ＝ 720 元。"
        },
        {
          "type": "eq",
          "expr": "300 ÷ 5/12 ＝ 720",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "驗算：總價 720 元。甲出 720 × 1/3 ＝ 240 元，其餘兩人出 720 − 240 ＝ 480 元，240 ÷ 480 ＝ 1/2 倍；乙出 720 × 1/4 ＝ 180 元，其餘兩人出 540 元，180 ÷ 540 ＝ 1/3 倍；丙出 300 元，240 ＋ 180 ＋ 300 ＝ 720 元，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：這件禮物的總價是 720 元"
        }
      ],
      "distractorAnalysis": {
        "A": "混淆基準量，誤以為甲出總價的 1/2、乙出總價的 1/3，列式 1 − 1/2 − 1/3 ＝ 1/6，再用 300 ÷ 1/6 ＝ 1800 元。",
        "B": "忘記加上基準量 1 轉化為總價，直接將 1/2 與 1/3 相加得出 5/6，誤以為丙出 5/6，算得 300 ÷ 5/6 ＝ 360 元。",
        "C": "正確算出總價 720 元後，誤算或看錯題目，回答成甲所出的金額（720 × 1/3 ＝ 240 元）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "佔總量之比例 ＝ 部分份數 ÷ (部分份數 ＋ 基準份數)",
        "總量 ＝ 具體量 ÷ 佔總量之比例"
      ],
      "conceptCompare": "「是其餘的幾分之幾」不等於「佔全部的幾分之幾」！前者是以他人為基準，後者是以全體為基準，轉化方式為：部分份數 ÷ (部分份數 ＋ 基準份數)。",
      "examVariations": "此題亦可延伸求三人中誰出的錢最多、誰出的錢最少：丙 300 元最多，甲 240 元次之，乙 180 元最少。"
    }
  },
  {
    "id": "U05-S3-O-037",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "年齡雙時點倍數反推",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9 年齡雙時點倍數反推",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "3 年前阿姨的年齡是小明的 5 倍，3 年後阿姨的年齡變成小明的 3 倍。請問小明今年幾歲？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "年齡差 (恆定不變基準 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "3 年前小明歲數 (差額的 1/4)",
          "units": 0.25,
          "role": "compare"
        },
        {
          "label": "3 年後小明歲數 (差額的 1/2)",
          "units": 0.5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "經過 3 ＋ 3 ＝ 6 年，小明長大差額的 1/4 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "9 歲",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "6 歲",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "C",
        "text": "12 歲",
        "trapCode": "U05_AGE_DIFF_CHANGE"
      },
      {
        "key": "D",
        "text": "33 歲",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(3 + 3) / (1 / (3 - 1) - 1 / (5 - 1)) * (1 / (5 - 1)) + 3",
      "expect": "9"
    },
    "explanation": {
      "examPurpose": "測驗學生面對跨越過去與未來的「雙時點年齡倍數」問題時，能否以「年齡差永遠不變」為唯一基準，求出年齡差並精準推算當前年齡。",
      "insight": "年齡差跨時點恆定：阿姨與小明的年齡差永遠不變！3 年前小明是年齡差的 1/4，3 年後是 1/2，經過 6 年長大 1/4 份差額，差額為 24 歲。",
      "figureNote": "線段圖以不變的「年齡差」為基準 1 份。3 年前小明年齡佔 1/4 份，3 年後小明年齡佔 1/2 份（2/4 份），前後相隔 6 年正好就是 1/4 份年齡差。",
      "steps": [
        {
          "type": "text",
          "text": "抓住不變量：兩人每過一年都長一歲，因此「阿姨與小明的年齡差永遠不變」。以「兩人年齡差」為基準量 1 份。"
        },
        {
          "type": "text",
          "text": "分析 3 年前：阿姨是小明的 5 倍，若小明為 1 份，阿姨為 5 份，年齡差為 5 − 1 ＝ 4 份。因此，3 年前小明的年齡佔年齡差的 1/4。"
        },
        {
          "type": "text",
          "text": "分析 3 年後：阿姨是小明的 3 倍，若小明為 1 份，阿姨為 3 份，年齡差為 3 − 1 ＝ 2 份。因此，3 年後小明的年齡佔年齡差的 1/2（即 2/4）。"
        },
        {
          "type": "text",
          "text": "從「3 年前」到「3 年後」，小明實際長大了 3 ＋ 3 ＝ 6 歲，這 6 歲佔兩人年齡差的份數變化為："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1/2 − 1/4 ＝ 1/4",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "年齡差的 1/4 份剛好對應 6 歲，由此可求出兩人永遠不變的年齡差："
        },
        {
          "type": "eq",
          "expr": "6 ÷ 1/4 ＝ 24",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "已知兩人年齡差為 24 歲，而 3 年前小明的年齡佔年齡差的 1/4，先算出 3 年前小明的歲數："
        },
        {
          "type": "eq",
          "expr": "24 × 1/4 ＝ 6",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "從 3 年前的 6 歲回到今年，必須加上 3 歲，得到小明今年的年齡："
        },
        {
          "type": "eq",
          "expr": "6 ＋ 3 ＝ 9",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "驗算：小明今年 9 歲，阿姨大 24 歲為 33 歲。3 年前小明 6 歲、阿姨 30 歲，30 ÷ 6 ＝ 5 倍；3 年後小明 12 歲、阿姨 36 歲，36 ÷ 12 ＝ 3 倍，完全相符。"
        },
        {
          "type": "answer",
          "text": "答：小明今年 9 歲"
        }
      ],
      "distractorAnalysis": {
        "B": "正確算出 3 年前小明的年齡為 6 歲，但漏掉最後加 3 歲的步驟，直接回答了 3 年前的年齡。",
        "C": "推算到 3 年後小明的年齡（6 ＋ 6 ＝ 12 歲），或是誤以為 3 年前到 3 年後只差 3 年導致算錯。",
        "D": "算出阿姨今年的歲數 33 歲，未仔細審視題目是要求小明今年的歲數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "時點間隔年數 ＝ 過去年數 ＋ 未來年數",
        "年齡差 ＝ 間隔年數 ÷ (未來份數比 − 過去份數比)"
      ],
      "conceptCompare": "跨時點的年齡問題，倍數會隨著年齡增長而越來越小（差不變但基數變大），但兩人的年齡差永恆不變，切勿拿不同年份的年齡直接相減倍數！",
      "examVariations": "此題亦可反問「今年阿姨幾歲」：9 ＋ 24 ＝ 33 歲；或問「再過幾年阿姨是小明的 2 倍」：年齡差 24 歲除以 (2 − 1) ＝ 24 歲，24 − 9 ＝ 15 年後。"
    }
  },
  {
    "id": "U05-RV-O-038",
    "legacyId": null,
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合練習園地",
    "category": "折價券與折扣門檻差",
    "batch": "奧數天梯",
    "source": "奧數天梯 L9 折價券與折扣門檻差",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "甲、乙兩家運動用品店促銷同款球鞋：甲店全面八折後再打九折；乙店則是消費滿 1000 元現折 350 元。小華發現買這款球鞋在兩家店實付金額完全相同。請問這款球鞋的定價是多少元？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "球鞋定價 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "甲店實付 (0.72 倍)",
          "units": 0.72,
          "role": "compare"
        },
        {
          "label": "乙店現折 (0.28 倍 ＝ 350 元)",
          "units": 0.28,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "甲店便宜 28% 與乙店現折 350 元等價"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "1750 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "B",
        "text": "1250 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "900 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "D",
        "text": "125 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "350 / (1 - 0.8 * 0.9)",
      "expect": "1250"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「連鎖複合折扣」與「滿額定額折抵」兩種不同促銷模式時，能否以商品定價為基準，找出兩店等價時折扣率與折抵金額的對應關係並正確列式。",
      "insight": "兩店等價即省下的錢相同：甲店八折再九折實付 0.72 倍，相當於省下 1 − 0.72 ＝ 0.28 倍。乙店省下 350 元，因此定價的 0.28 倍剛好就是 350 元。",
      "figureNote": "線段圖展示以球鞋定價為基準量 1 份。甲店連鎖打折後實付 0.72 份，便宜了 0.28 份；因為兩店實付相同，所以乙店現折的 350 元正好對應定價的 0.28 份。",
      "steps": [
        {
          "type": "text",
          "text": "以「球鞋的定價」為基準量「1」。"
        },
        {
          "type": "text",
          "text": "計算甲店連續折扣後的售價倍數：先打八折是定價的 0.8 倍，再打九折是 0.8 × 0.9 ＝ 0.72 倍。"
        },
        {
          "type": "eq",
          "expr": "0.8 × 0.9 ＝ 0.72",
          "unit": "倍"
        },
        {
          "type": "mul",
          "a": "0.8",
          "b": "0.9"
        },
        {
          "type": "text",
          "text": "甲店實付 0.72 倍定價，代表甲店為顧客便宜了定價的 1 − 0.72 ＝ 0.28 倍。"
        },
        {
          "type": "eq",
          "expr": "1 − 0.72 ＝ 0.28",
          "unit": "倍"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "乙店消費滿 1000 元現折 350 元。既然兩店實付金額相同，表示甲店便宜的金額正好等於乙店現折的 350 元。"
        },
        {
          "type": "eq",
          "expr": "350 ÷ 0.28 ＝ 1250",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "350",
          "divisor": "0.28",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "檢驗門檻與實付：定價 1250 元大於 1000 元，符合乙店現折門檻。甲店實付 1250 × 0.72 ＝ 900 元；乙店實付 1250 − 350 ＝ 900 元，兩店實付完全一致。"
        },
        {
          "type": "answer",
          "text": "答：這款球鞋的定價是 1250 元"
        }
      ],
      "distractorAnalysis": {
        "A": "誤以為八折再九折只看第一階段的八折便宜 20%，算得 350 ÷ 0.2 ＝ 1750 元。",
        "C": "算出售價 900 元後，誤把實付金額當成商品定價回答。",
        "D": "小數除法 350 ÷ 0.28 直式計算時，小數點移位漏補 0，算成 125 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "連續折扣率 ＝ 折扣一 × 折扣二",
        "省下佔比 ＝ 1 − 連續折扣率",
        "原價 ＝ 折抵金額 ÷ 省下佔比"
      ],
      "conceptCompare": "「八折再九折」是 0.8 × 0.9 ＝ 0.72（七二折），絕非 0.8 ＋ 0.9 ＝ 1.7 折，更非 80% − 10% ＝ 70%！連續折扣是以打折後的金額為新基準連續相乘。",
      "examVariations": "此題可延伸為消費決策題：若球鞋定價高於 1250 元（如 2000 元），甲店便宜 2000 × 0.28 ＝ 560 元大於 350 元，去甲店買更划算。"
    }
  },
  {
    "id": "U05-S2-O-039",
    "legacyId": null,
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "牛吃草雙期消長不變",
    "batch": "奧數天梯",
    "source": "奧數天梯 L10 牛吃草雙期消長不變",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "一片牧草地的青草每天勻速等量生長，且每頭牛每天吃的草量相同。這片草地上的草可供 10 頭牛吃 18 天，或者供 16 頭牛吃 9 天。如果要 6 天把草地上的草剛好吃完，需要多少頭牛？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "10 頭牛吃 18 天總量 (180 份)",
          "units": 180,
          "role": "compare"
        },
        {
          "label": "16 頭牛吃 9 天總量 (144 份)",
          "units": 144,
          "role": "compare"
        },
        {
          "label": "草地原有草量 (108 份)",
          "units": 108,
          "role": "base"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "相差 9 天新生長的草量 ＝ 36 份 (每天長 4 份)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "18 頭",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "B",
        "text": "30 頭",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "22 頭",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "24 頭",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(10 * 18 - (10 * 18 - 16 * 9) / (18 - 9) * 18) / 6 + (10 * 18 - 16 * 9) / (18 - 9)",
      "expect": "22"
    },
    "explanation": {
      "examPurpose": "測驗學生面對經典牛吃草問題時，能否透過消長法分離出「草地原有草量」與「每天新生長草量」，以一頭牛一天吃草量為基準量計算所需牛數。",
      "insight": "分離原有量與生長量：10 頭牛 18 天吃 180 份，16 頭牛 9 天吃 144 份，相差的 9 天多長了 36 份草，每天長草 4 份！",
      "figureNote": "線段圖將草量拆解：總吃草量包含原有草量與吃草期間新生長的草量。兩方案的天數差 9 天對應吃草量差 36 份，由此可得每天生長 4 份草，原有草量為 108 份。",
      "steps": [
        {
          "type": "text",
          "text": "設定基準量：把「1 頭牛 1 天所吃的草量」當作基準量「1 份」。"
        },
        {
          "type": "text",
          "text": "計算兩種方案的吃草總量：方案一中 10 頭牛吃 18 天，共吃 10 × 18 ＝ 180 份；方案二中 16 頭牛吃 9 天，共吃 16 × 9 ＝ 144 份。"
        },
        {
          "type": "eq",
          "expr": "10 × 18 ＝ 180",
          "unit": "份"
        },
        {
          "type": "eq",
          "expr": "16 × 9 ＝ 144",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "分析差額：方案一比方案二多吃了 180 − 144 ＝ 36 份，這是因為草地多生長了 18 − 9 ＝ 9 天的草。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "求草地每天新生長的草量：36 ÷ 9 ＝ 4 份（每天新長的草需要 4 頭牛專門吃完）。"
        },
        {
          "type": "eq",
          "expr": "36 ÷ 9 ＝ 4",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "求草地原本擁有的草量：180 − 4 × 18 ＝ 180 − 72 ＝ 108 份。"
        },
        {
          "type": "eq",
          "expr": "180 − 72 ＝ 108",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "計算 6 天吃完所需牛數：原有草量 108 份在 6 天吃完需要 108 ÷ 6 ＝ 18 頭牛；每天新長出的 4 份草需要 4 頭牛隨長隨吃。合計需要 18 ＋ 4 ＝ 22 頭牛。"
        },
        {
          "type": "eq",
          "expr": "108 ÷ 6 ＋ 4 ＝ 22",
          "unit": "頭"
        },
        {
          "type": "text",
          "text": "驗算：22 頭牛吃 6 天共吃 22 × 6 ＝ 132 份。6 天內草地共有草 108 ＋ 4 × 6 ＝ 132 份，剛好完全吃完，計算無誤。"
        },
        {
          "type": "answer",
          "text": "答：需要 22 頭牛"
        }
      ],
      "distractorAnalysis": {
        "A": "忽略了草地每天還在持續生長，只拿原有草量 108 份除以 6 天得出 18 頭牛，少了專門吃新長草的 4 頭牛。",
        "B": "誤以為草量固定不會生長，直接使用反比例計算：10 × 18 ÷ 6 ＝ 30 頭，嚴重高估所需牛數。",
        "D": "計算每天生長草量時誤算成每天長 3 份草，推得原有草量 180 − 3 × 18 ＝ 126 份，最後算出 126 ÷ 6 ＋ 3 ＝ 24 頭牛。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "每天長草量 ＝ (牛數一 × 天數一 − 牛數二 × 天數二) ÷ (天數一 − 天數二)",
        "原有草量 ＝ 牛數 × 天數 − 每天長草量 × 天數",
        "所需牛數 ＝ 原有草量 ÷ 目標天數 ＋ 每天長草量"
      ],
      "conceptCompare": "牛吃草問題與一般工程問題最大的不同在於「總工作量會隨時間等速增加」。關鍵思維是把牛分成兩批：一批吃原有的存量，另一批吃每天的新增量。",
      "examVariations": "此題亦可反問「若放入 13 頭牛，可以吃多少天」：原有草量 108 份除以 (13 − 4) ＝ 108 ÷ 9 ＝ 12 天。"
    }
  },
  {
    "id": "U05-RV-O-040",
    "legacyId": null,
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合練習園地",
    "category": "高階漲價再折扣逆推",
    "batch": "奧數天梯",
    "source": "奧數天梯 L10 高階漲價再折扣逆推",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "lg",
    "question": "某服飾店老闆引進一批秋季外套，先按進貨成本提高 25% 作為定價，週年慶期間為了刺激買氣，老闆將外套按定價打折出售，結算後發現每件外套仍比進貨成本賺了 5%。請問這批外套是打了幾折出售？",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "進貨成本 (總基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "定價 (成本的 1.25 倍)",
          "units": 1.25,
          "role": "compare"
        },
        {
          "label": "實售價 (成本的 1.05 倍)",
          "units": 1.05,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "以定價 1.25 為基準，實售價 1.05 佔 0.84 倍 (八四折)"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "九五折（95%）",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "B",
        "text": "八折（80%）",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "C",
        "text": "七五折（75%）",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "D",
        "text": "八四折（84%）",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(1 + 0.05) / (1 + 0.25)",
      "expect": "0.84"
    },
    "explanation": {
      "examPurpose": "測驗學生面對「先漲價再打折」的雙重基準轉移問題時，能否以成本為統一基準「1」，正確區分定價與售價的倍數關係，並利用比值定義逆求折扣率。",
      "insight": "比值定義定基準：定價是成本的 1.25 倍，售價是成本的 1.05 倍。打折是「以定價為基準」，因此折扣 ＝ 售價 ÷ 定價 ＝ 1.05 ÷ 1.25 ＝ 0.84（八四折）。",
      "figureNote": "線段圖清楚呈現三者長度關係：以成本為基準 1，提高 25% 後定價長度為 1.25，賺 5% 的實售價長度為 1.05。要求打了幾折，是以定價為除數（基準量），1.05 ÷ 1.25 ＝ 0.84。",
      "steps": [
        {
          "type": "text",
          "text": "設定統一基準：將外套的「進貨成本」當作基準量「1」。"
        },
        {
          "type": "text",
          "text": "按成本提高 25% 作為定價，定價是成本的 1 ＋ 25% ＝ 1.25 倍。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 0.25 ＝ 1.25",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "每件外套仍比成本賺 5%，表示實際售價是成本的 1 ＋ 5% ＝ 1.05 倍。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 0.05 ＝ 1.05",
          "unit": "倍"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "求打了幾折：打折是以「定價」為基準量（除數），「實際售價」為比較量（被除數）。折扣率 ＝ 售價 ÷ 定價 ＝ 1.05 ÷ 1.25。"
        },
        {
          "type": "eq",
          "expr": "1.05 ÷ 1.25 ＝ 0.84",
          "unit": "倍"
        },
        {
          "type": "longdiv",
          "dividend": "1.05",
          "divisor": "1.25",
          "mode": "exact"
        },
        {
          "type": "text",
          "text": "0.84 倍換算成折扣為八四折（即 84%）。驗算：假設成本 100 元，定價 125 元。打八四折售出為 125 × 0.84 ＝ 105 元，剛好比成本 100 元多賺 5 元（賺 5%），完全相符。"
        },
        {
          "type": "answer",
          "text": "答：這批外套是打了八四折（84%）出售"
        }
      ],
      "distractorAnalysis": {
        "A": "看到比成本賺 5%，誤以為折讓了 5%，直接用 100% − 5% ＝ 95% 算成九五折。",
        "B": "誤將提高的 25% 與賺的 5% 直接相減（25% − 5% ＝ 20%），誤以為便宜了 20% 而選八折（80%），混淆了百分率的基準量不可直接加減。",
        "C": "小數除法 1.05 ÷ 1.25 計算錯誤，或是誤以成本為除數算得七五折。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "定價倍數 ＝ 1 ＋ 提高率",
        "售價倍數 ＝ 1 ＋ 利潤率",
        "折扣率 ＝ 售價倍數 ÷ 定價倍數"
      ],
      "conceptCompare": "「賺 5%」的基準量是進貨成本，「打折」的基準量是定價。不同基準的百分率絕對不能直接加減，必須先轉換為對同一基準（成本）的倍數才能運算。",
      "examVariations": "此題亦可變形為「若按定價打八折出售，會賺還是賠百分之幾」：1.25 × 0.8 ＝ 1.00，剛好不賺不賠；若打七五折出售：1.25 × 0.75 ＝ 0.9375，賠 6.25%。"
    }
  },
  {
    "id": "U05-S3-M-041",
    "legacyId": "u05_m01",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "年齡差恆定",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "哥哥今年 14 歲，弟弟今年 11 歲。再過 5 年後，哥哥比弟弟大幾歲？",
    "options": [
      {
        "key": "A",
        "text": "3 歲",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "8 歲",
        "trapCode": "U05_AGE_DIFF_CHANGE"
      },
      {
        "key": "C",
        "text": "19 歲",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "2 歲",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "理解年齡差永遠恆定不變的本質，不管經過幾年，兩人年齡差都不會改變。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算今年哥哥比弟弟大幾歲。"
        },
        {
          "type": "eq",
          "expr": "14 − 11 ＝ 3",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "第 2 步：每過 1 年，兩人都長 1 歲，所以年齡差永遠保持不變。"
        },
        {
          "type": "answer",
          "text": "答：再過 5 年後，哥哥仍然比弟弟大 3 歲。"
        }
      ],
      "insight": "年齡差永遠不變：不管過幾年，兩人長大的歲數一樣多，相差的年齡固定不變。",
      "distractorAnalysis": {
        "B": "誤以為過了 5 年相差的歲數也要跟著加 5 歲，算成 3 ＋ 5 ＝ 8 歲。",
        "C": "算出 14 ＋ 5 ＝ 19 歲，這是哥哥 5 年後的年齡，不是兩人的年齡差。",
        "D": "心算粗心減錯，14 減 11 算成 2 歲。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 大年齡 − 小年齡（永遠恆定不變）"
      ],
      "conceptCompare": "過幾年後，兩人的「年齡總和」會增加（兩人各加幾歲），但「年齡差」絕對不會改變。",
      "examVariations": "段考常換問句：「10 年前哥哥比弟弟大幾歲？」抓住年齡差永遠是 3 歲即可秒答。"
    },
    "check": {
      "expr": "14 - 11",
      "expect": "3"
    }
  },
  {
    "id": "U05-S1-M-042",
    "legacyId": "u05_m02",
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "單價與總價倍數",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 1★",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "一枝原子筆賣 15 元，小華買了 □ 枝，一共付了 120 元。請問小華買了幾枝原子筆？",
    "options": [
      {
        "key": "A",
        "text": "1800 枝",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "8 枝",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1/8 枝",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "7 枝",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "利用單價與總價的關係，已知總價與單價，透過除法逆推求出數量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：已知單價 15 元與總價 120 元，數量等於總價除以單價。"
        },
        {
          "type": "eq",
          "expr": "120 ÷ 15 ＝ 8",
          "unit": "枝"
        },
        {
          "type": "answer",
          "text": "答：小華買了 8 枝原子筆。"
        }
      ],
      "insight": "總價 ＝ 單價 × 數量；逆推求數量時用除法：數量 ＝ 總價 ÷ 單價。",
      "distractorAnalysis": {
        "A": "看到兩個數字直接相乘 120 × 15 ＝ 1800，把除法當成乘法。",
        "C": "把被除數和除數顛倒，算成 15 ÷ 120 ＝ 1/8 枝。",
        "D": "除法心算失誤，誤算為 7 枝。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "數量 ＝ 總價 ÷ 單價"
      ],
      "conceptCompare": "求總價用乘法（單價 × 數量）；已知總價求單價或數量用除法。",
      "examVariations": "若改問「買 12 枝要多少元」，則直接用乘法計算 15 × 12 ＝ 180 元。"
    },
    "check": {
      "expr": "120 / 15",
      "expect": "8"
    }
  },
  {
    "id": "U05-S2-M-043",
    "legacyId": "u05_m03",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "周長半周和倍心算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "一個長方形的周長是 20 公分，長是 6 公分，請問寬是多少公分？",
    "options": [
      {
        "key": "A",
        "text": "14 公分",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "5 公分",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "4 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "10 公分",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "理解長方形周長包含兩個長與兩個寬，長與寬的和固定為半周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：長方形周長是（長 ＋ 寬）× 2，所以長與寬的和等於周長的一半。"
        },
        {
          "type": "eq",
          "expr": "20 ÷ 2 ＝ 10",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：長與寬的和是 10 公分，已知長是 6 公分，減去長求寬。"
        },
        {
          "type": "eq",
          "expr": "10 − 6 ＝ 4",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：寬是 4 公分。"
        }
      ],
      "insight": "長方形周長題口訣：先除以 2 得半周（長 ＋ 寬），再減去長就是寬！",
      "distractorAnalysis": {
        "A": "忘記周長是 2 個長加 2 個寬，直接拿 20 − 6 ＝ 14 公分。",
        "B": "算出半周長 10 公分後，減法心算粗心誤算為 5 公分。",
        "D": "算出長寬之和 20 ÷ 2 ＝ 10 公分後，誤把半周長當成寬。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "長 ＋ 寬 ＝ 周長 ÷ 2"
      ],
      "conceptCompare": "周長是長與寬之和的 2 倍；長與寬的關係是「和固定為半周長」。",
      "examVariations": "若題目進一步問面積，算得寬 4 公分後再計算 6 × 4 ＝ 24 平方公分。"
    },
    "check": {
      "expr": "20 / 2 - 6",
      "expect": "4"
    }
  },
  {
    "id": "U05-S2-M-044",
    "legacyId": "u05_m04",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "和固定消長",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 2★",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "甲數和乙數合起來是 10。如果兩數的總和維持 10 不變，甲數原本是 3，後來增加為 4，那麼乙數會變成多少？",
    "options": [
      {
        "key": "A",
        "text": "8",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "B",
        "text": "7",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "5",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "體會兩數之和固定的此消彼長關係：一數增加，另一數必減少相同數量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：甲數和乙數相加固定是 10。"
        },
        {
          "type": "text",
          "text": "第 2 步：甲數變成 4 時，用總和減去甲數就得到乙數。"
        },
        {
          "type": "eq",
          "expr": "10 − 4 ＝ 6"
        },
        {
          "type": "answer",
          "text": "答：乙數會變成 6。"
        }
      ],
      "insight": "和固定必為此消彼長：甲數增加多少，乙數就必須減少多少，總和才不會變。",
      "distractorAnalysis": {
        "A": "誤以為兩數同增同減，甲加 1 乙也加 1 變成 7 ＋ 1 ＝ 8，總和會變成 12。",
        "B": "誤以為甲數改變時乙數不受影響，直接回答原本的 7。",
        "C": "減法心算粗心，10 減 4 算成 5。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲 ＋ 乙 ＝ 總和（固定） → 甲增加多少，乙就減少多少"
      ],
      "conceptCompare": "和固定是「一增一減」；正比關係則是「同增同減、同倍縮放」。",
      "examVariations": "若甲數從 3 減少為 1，則乙數會從 7 增加為 9。"
    },
    "check": {
      "expr": "10 - 4",
      "expect": "6"
    }
  },
  {
    "id": "U05-S1-M-045",
    "legacyId": "u05_m05",
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "正比倍數同步縮放",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "乙數永遠是甲數的 3 倍。如果甲數從 4 變成 8（變成原來的 2 倍），那麼乙數會變成原來的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "2 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "6 倍",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "C",
        "text": "3 倍",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "4 倍",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "掌握正比放大規律：基準量擴大為幾倍，比較量也同步擴大為相同的倍數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：甲數原本是 4，乙數原本是 4 × 3 ＝ 12。"
        },
        {
          "type": "text",
          "text": "第 2 步：甲數變成 8，乙數變成 8 × 3 ＝ 24。"
        },
        {
          "type": "text",
          "text": "第 3 步：算出乙數前後的倍數變化。"
        },
        {
          "type": "eq",
          "expr": "24 ÷ 12 ＝ 2",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：乙數會變成原來的 2 倍。"
        }
      ],
      "insight": "正比同步放大規律：比較量 ＝ 基準量 × 固定倍數，基準量擴大幾倍，比較量就擴大相同倍數！",
      "distractorAnalysis": {
        "B": "把題目中的 3 倍與 2 倍直接相乘，誤算為 3 × 2 ＝ 6 倍。",
        "C": "看到乙是甲的 3 倍，誤把兩數間的比值 3 倍當成乙數前後的倍數變化。",
        "D": "誤將甲數增加的差額 8 − 4 ＝ 4 當作放大倍數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "正比關係：基準量放大幾倍，比較量就跟著放大相同倍數"
      ],
      "conceptCompare": "乘法關係才能同步翻倍；若甲乙是相差 3 歲，年齡就絕對不能同步翻倍。",
      "examVariations": "「正方形邊長變 3 倍，周長變幾倍？」因為周長 ＝ 邊長 × 4，周長同樣變 3 倍。"
    },
    "check": {
      "expr": "(3 * 8) / (3 * 4)",
      "expect": "2"
    }
  },
  {
    "id": "U05-S3-M-046",
    "legacyId": "u05_m06",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "差一定不可亂翻倍",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 3★",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "sm",
    "question": "姊姊比妹妹大 5 歲。當妹妹從 5 歲長大到 10 歲（變成 2 倍）時，姊姊會變成幾歲？",
    "options": [
      {
        "key": "A",
        "text": "20 歲",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "15 歲",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "10 歲",
        "trapCode": "U05_AGE_DIFF_CHANGE"
      },
      {
        "key": "D",
        "text": "14 歲",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "破除「所有數量關係都能翻倍」的迷思，分辨加法差額與乘法倍數的本質差異。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：妹妹原本 5 歲，姊姊比妹妹大 5 歲，姊姊原本是 5 ＋ 5 ＝ 10 歲。"
        },
        {
          "type": "text",
          "text": "第 2 步：妹妹長大到 10 歲時，姊姊依然比妹妹大 5 歲（年齡差永遠是 5 歲）。"
        },
        {
          "type": "eq",
          "expr": "10 ＋ 5 ＝ 15",
          "unit": "歲"
        },
        {
          "type": "answer",
          "text": "答：姊姊會變成 15 歲。"
        }
      ],
      "insight": "相差固定絕不能亂翻倍！年齡是同時加歲數，不是乘以倍數。",
      "distractorAnalysis": {
        "A": "掉入翻倍陷阱：姊姊原本 10 歲，看到妹妹變 2 倍就以為姊姊也變 2 倍算成 10 × 2 ＝ 20 歲。",
        "C": "忽略兩人會同時長大，誤以為只有妹妹長大到 10 歲、姊姊停在原本的 10 歲不動，導致年齡差改變。",
        "D": "加法心算粗心，10 ＋ 5 算成 14 歲。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "大數 ＝ 小數 ＋ 年齡差（差值固定，不能用倍數翻倍）"
      ],
      "conceptCompare": "倍數問題（正比）能翻倍；差固定問題（年齡、長短差）只能加減固定差額。",
      "examVariations": "「媽媽比小明大 24 歲，小明從 1 歲變 2 歲（2 倍），媽媽會變 2 倍嗎？」不會，媽媽是 25 歲變 26 歲。"
    },
    "check": {
      "expr": "10 + 5",
      "expect": "15"
    }
  },
  {
    "id": "U05-S3-M-047",
    "legacyId": "u05_m07",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "年齡差倍數心算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "媽媽今年 40 歲，兒子今年 10 歲。請問幾年後，媽媽的年齡會剛好是兒子的 2 倍？",
    "options": [
      {
        "key": "A",
        "text": "30 年後",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "15 年後",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "C",
        "text": "20 年後",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "10 年後",
        "trapCode": "U05_AGE_DIFF_CHANGE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "利用「年齡差永遠不變」的特性，結合差倍問題公式，求出經過的年數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：媽媽和兒子的年齡差永遠固定不變。"
        },
        {
          "type": "eq",
          "expr": "40 − 10 ＝ 30",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "第 2 步：當媽媽年齡是兒子 2 倍時，相差的份數是 2 − 1 ＝ 1 份，所以 1 份（兒子那時年齡）就是 30 歲。"
        },
        {
          "type": "eq",
          "expr": "30 ÷ (2 − 1) ＝ 30",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "第 3 步：兒子從現在的 10 歲長大到 30 歲，計算需要經過的年數。"
        },
        {
          "type": "eq",
          "expr": "30 − 10 ＝ 20",
          "unit": "年"
        },
        {
          "type": "answer",
          "text": "答：20 年後媽媽的年齡會是兒子的 2 倍。"
        }
      ],
      "insight": "差倍年齡問題口訣：年齡差永遠不變！年齡差 ÷（倍數 − 1）＝ 那時小者的年齡。",
      "distractorAnalysis": {
        "A": "算出那時兒子是 30 歲，卻忘記減去兒子現在的 10 歲，誤把目標歲數當成年數。",
        "B": "忘記倍數要減 1，直接用 30 ÷ 2 ＝ 15 年。",
        "D": "誤以為媽媽年齡固定在 40 歲不會變老，直接算 40 ÷ 2 ＝ 20 歲，再減去兒子現在 10 歲，得出 20 − 10 ＝ 10 年後。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "那時小者的年齡 ＝ 年齡差 ÷（倍數 − 1）",
        "經過年數 ＝ 目標年齡 − 現在年齡"
      ],
      "conceptCompare": "和倍問題分母是「1 ＋ 倍數」；差倍問題分母是「倍數 − 1」。",
      "examVariations": "若改問幾年前媽媽是兒子的 4 倍，則算 30 ÷ (4 − 1) ＝ 10 歲（兒子那時 10 歲即現在）。"
    },
    "check": {
      "expr": "(40 - 10) / (2 - 1) - 10",
      "expect": "20"
    }
  },
  {
    "id": "U05-S3-M-048",
    "legacyId": "u05_m08",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "連續折扣相乘折數",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 4★",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "sm",
    "question": "某百貨公司舉辦特賣會，一件衣服「先打 八折，結帳時再打 八折」。請問這相當於直接打原價的百分之幾？",
    "options": [
      {
        "key": "A",
        "text": "60%",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "B",
        "text": "6.4%",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "68%",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "64%",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "理解連續折扣的運算原理：每次打折都以當下的價格為基準量，折數必須相乘而非相加。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：打 八折代表售價是原價的 0.8 倍（80%）。"
        },
        {
          "type": "text",
          "text": "第 2 步：第二次再打 八折，是以第一次打折後的價格為基準，再乘以 0.8 倍。"
        },
        {
          "type": "eq",
          "expr": "0.8 × 0.8 ＝ 0.64 ＝ 64%"
        },
        {
          "type": "answer",
          "text": "答：相當於直接打原價的 64%。"
        }
      ],
      "insight": "連續折扣必須「相乘」，不能相加！第二次打折的基準量已經變小了。",
      "distractorAnalysis": {
        "A": "誤把兩次省下的 20% 直接相加成省 40%，以為等於打 六折（60%）。",
        "B": "小數換算百分率位置點錯，把 0.64 誤寫成 6.4%。",
        "C": "乘法口訣心算失誤，誤算為 68%。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "連續折扣 ＝ 第 1 次折數 × 第 2 次折數"
      ],
      "conceptCompare": "打 八折再打 八折是 0.64（64 折），直接打 六折是 0.60，所以直接 六折比較便宜。",
      "examVariations": "「先打 九折再打 八折」相當於直接打 0.9 × 0.8 ＝ 0.72 ＝ 72 折。"
    },
    "check": {
      "expr": "80% * 80%",
      "expect": "64%"
    }
  },
  {
    "id": "U05-S2-M-049",
    "legacyId": "u05_m09",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "先漲一成再降一成",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "一個定價 100 元的保溫杯，老闆先漲價 10%，後來發現賣不好，又降價 10% 出售。請問最後的售價是多少元？",
    "options": [
      {
        "key": "A",
        "text": "99 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "100 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "C",
        "text": "90 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "D",
        "text": "9.9 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "破除漲跌互相抵消的迷思，認清降價時的基準量已經變大，因此降價扣除的金額大於最初漲價的金額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算漲價 10% 後的新價格（以原價 100 元為基準量）。"
        },
        {
          "type": "eq",
          "expr": "100 × (1 ＋ 10%) ＝ 100 × 1.1 ＝ 110",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：再算降價 10% 後的售價（此時以漲價後的 110 元為基準量）。"
        },
        {
          "type": "eq",
          "expr": "110 × (1 − 10%) ＝ 110 × 0.9 ＝ 99",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：最後的售價是 99 元。"
        }
      ],
      "insight": "漲跌不對稱原理：降價的 10% 是以較大的「新價格 110 元」為基準，扣掉的錢（11 元）比當初漲的錢（10 元）還多！",
      "distractorAnalysis": {
        "B": "誤以為先 ＋10% 再 −10% 會剛好互相抵消，以為價格維持 100 元不變。",
        "C": "忽略先漲價的過程，直接把原價 100 元拿去打九折算成 90 元。",
        "D": "小數乘法小數點點錯位置，誤算為 9.9 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "最後價格 ＝ 原價 ×（1 ＋ 漲率）×（1 − 降率）"
      ],
      "conceptCompare": "「先降 10% 再漲 10%」結果也是 100 × 0.9 × 1.1 ＝ 99 元，無論先漲先降最後都比原價低。",
      "examVariations": "若漲跌率改為 20%，最後售價為 100 × 1.2 × 0.8 ＝ 96 元，少 4%。"
    },
    "check": {
      "expr": "100 * (1 + 10%) * (1 - 10%)",
      "expect": "99"
    }
  },
  {
    "id": "U05-S1-M-050",
    "legacyId": "u05_m10",
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "積固定反比縮放",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 5★",
    "level": 5,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "一個長方形的面積是 24 平方公分，原來的長是 6 公分、寬是 4 公分。如果面積維持 24 平方公分不變，長變成原來的 2 倍，那麼寬會變成多少公分？",
    "options": [
      {
        "key": "A",
        "text": "8 公分",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "2 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1/2 公分",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "3 公分",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "理解面積固定的反向縮放規律：兩量乘積固定時，一量擴大幾倍，另一量必須縮小為幾分之一。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：長變成原來的 2 倍，新長是 6 × 2 ＝ 12 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：面積維持 24 平方公分不變，寬等於面積除以新長。"
        },
        {
          "type": "eq",
          "expr": "24 ÷ 12 ＝ 2",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：寬會變成 2 公分。"
        }
      ],
      "insight": "「面積固定（積固定）」規律：長與寬相乘固定，長放大 2 倍，寬就必須縮小為原來的 1/2 倍（變一半）！",
      "distractorAnalysis": {
        "A": "誤以為長放大 2 倍寬也要放大 2 倍算成 4 × 2 ＝ 8 公分，面積會暴增為 96 平方公分。",
        "C": "公式記反，把長與寬的倍數關係顛倒。",
        "D": "除法心算失誤，24 ÷ 12 誤算為 3。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "積固定：一個量變成 2 倍，另一個量就縮小為 1/2 倍"
      ],
      "conceptCompare": "長寬和固定（周長不變）是一增一減；長寬積固定（面積不變）是一翻倍一減半。",
      "examVariations": "「總工程天數固定，工人人數增加為 3 倍，完成天數變成原來的幾倍？」答案是 1/3 倍。"
    },
    "check": {
      "expr": "24 / (6 * 2)",
      "expect": "2"
    }
  },
  {
    "id": "U05-RV-M-051",
    "legacyId": "u05_m11",
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "兩倍加 1 逆算奇數",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "某個整數先乘以 2，再加 1，最後得到的結果是 37。請問這個整數是多少？",
    "options": [
      {
        "key": "A",
        "text": "75",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "36",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "18",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "17",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "運用逆推還原法解題，注意倒推時運算順序與符號皆需相反（先減後除）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：採用逆推法，最後一步是「加 1」，倒推回去第一步要「減 1」。"
        },
        {
          "type": "eq",
          "expr": "37 − 1 ＝ 36"
        },
        {
          "type": "text",
          "text": "第 2 步：原本是「乘以 2」，倒推回去第二步要「除以 2」。"
        },
        {
          "type": "eq",
          "expr": "36 ÷ 2 ＝ 18"
        },
        {
          "type": "answer",
          "text": "答：這個整數是 18。"
        }
      ],
      "insight": "逆推還原法口訣：順序倒過來，加變減、乘變除，步步倒算！",
      "distractorAnalysis": {
        "A": "沒有逆推反而照順序拿 37 去乘 2 加 1 算成 75。",
        "B": "只做了第一步減 1，忘記還要除以 2，誤選中間結果 36。",
        "D": "心算粗心失誤，36 ÷ 2 誤算為 17。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "原本的數 ＝（最後結果 − 增加量）÷ 倍數"
      ],
      "conceptCompare": "正算先乘除後加減；逆推剛好相反，要先加減還原、再乘除還原。",
      "examVariations": "「某數除以 3 再減 5 等於 10」，逆推就是 (10 ＋ 5) × 3 ＝ 45。"
    },
    "check": {
      "expr": "(37 - 1) / 2",
      "expect": "18"
    }
  },
  {
    "id": "U05-S1-M-052",
    "legacyId": "u05_m12",
    "unitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "category": "基準互換倒數心算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 6★",
    "level": 6,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "甲的存款是乙的 1.5 倍（也就是 3/2 倍）。如果改以甲的存款為基準量，乙的存款是甲的幾倍？",
    "options": [
      {
        "key": "A",
        "text": "1.5 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "0.5 倍",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "C",
        "text": "1/3 倍",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "2/3 倍",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "理解基準量與比較量互換時，兩量比值互為倒數的數學本質。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：甲是乙的 1.5 倍，換成分數是 3/2 倍，代表乙若是 2 份，甲就是 3 份。"
        },
        {
          "type": "text",
          "text": "第 2 步：題目改問「乙是甲的幾倍」，是以甲為基準量（放在分母）。"
        },
        {
          "type": "eq",
          "expr": "1 ÷ 3/2 ＝ 1 × 2/3 ＝ 2/3",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：乙的存款是甲的 2/3 倍。"
        }
      ],
      "insight": "基準量互換口訣：甲是乙的幾倍，反過來問「乙是甲的幾倍」，只要直接取「倒數」！",
      "distractorAnalysis": {
        "A": "忽略基準量已經換成甲，誤以為倍數永遠相同。",
        "B": "把比值取倒數誤用成減法，用 1.5 − 1 ＝ 0.5 倍。",
        "C": "倒數計算粗心，把 3/2 的倒數誤寫成 1/3。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量與比較量互換時，新比值 ＝ 原比值的倒數（1 ÷ 原比值）"
      ],
      "conceptCompare": "甲比乙多幾元，反過來乙比甲少相同元數（差額相同）；但倍數關係互換是「取倒數」，不是加減。",
      "examVariations": "「哥哥年齡是弟弟的 1 1/4 倍（5/4 倍），弟弟是哥哥的幾倍？」答案直接取倒數得 4/5 倍。"
    },
    "check": {
      "expr": "1 / (3/2)",
      "expect": "2/3"
    }
  },
  {
    "id": "U05-S3-M-053",
    "legacyId": "u05_m13",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "增減百分率基準轉換",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "甲的零用錢比乙多 25%。如果改以甲的零用錢為基準，那麼乙比甲少百分之幾？",
    "options": [
      {
        "key": "A",
        "text": "20%",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "25%",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "75%",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "D",
        "text": "2%",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "掌握比較基準轉換時百分率的變化，避免直覺誤以為「多 25% 反過來就是少 25%」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把乙的錢當作基準量 100%（即 1 份），甲的錢就是 1 ＋ 25% ＝ 125%（即 1.25 份）。"
        },
        {
          "type": "text",
          "text": "第 2 步：改以甲為基準，乙比甲少 25%，除以甲的 125%。"
        },
        {
          "type": "eq",
          "expr": "25% ÷ 125% ＝ 25/125 ＝ 1/5 ＝ 20%"
        },
        {
          "type": "answer",
          "text": "答：乙比甲少 20%。"
        }
      ],
      "insight": "基準量陷阱核心：「比誰」，誰就是分母！基準量從原本的 100% 變成 125%，分母變大，算出的百分率就縮小為 20%。",
      "distractorAnalysis": {
        "B": "直覺誤以為「甲比乙多 25%」反過來就是「乙比甲少 25%」，忽略基準量已經換成甲（125%）。",
        "C": "看到 25% 直接用 100% − 25% ＝ 75%。",
        "D": "分數換算百分率小數點點錯，把 0.20 誤當成 2%。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "減少百分率 ＝ 兩量相差值 ÷ 新基準量"
      ],
      "conceptCompare": "多 25%（1/4）反過來少 20%（1/5）；多 50%（1/2）反過來少 33 1/3%（1/3）。",
      "examVariations": "反向出題：「水結成冰體積增加 1/11，冰融化成水體積減少幾分之幾？」答案是 1/12。"
    },
    "check": {
      "expr": "(125% - 1) / 125%",
      "expect": "20%"
    }
  },
  {
    "id": "U05-RV-M-054",
    "legacyId": "u05_m14",
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "和固定乘積最大值",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 7★",
    "level": 7,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "有兩個正整數相加等於 10。請問這兩個正整數相乘的結果，最大是多少？",
    "options": [
      {
        "key": "A",
        "text": "24",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "25",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "50",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "D",
        "text": "21",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "探索和固定時兩數之積的變化規律，體會兩數越接近乘積越大的極值觀念。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：列出相加等於 10 的所有正整數組合與乘積：1 × 9 ＝ 9、2 × 8 ＝ 16、3 × 7 ＝ 21、4 × 6 ＝ 24、5 × 5 ＝ 25。"
        },
        {
          "type": "text",
          "text": "第 2 步：觀察發現兩數越接近，相乘的積就越大；當兩數相等（均為 5）時乘積最大。"
        },
        {
          "type": "eq",
          "expr": "5 × 5 ＝ 25"
        },
        {
          "type": "answer",
          "text": "答：這兩個正整數相乘最大是 25。"
        }
      ],
      "insight": "極值幾何直覺：周長固定（和固定）的長方形中，長寬相等（正方形）時面積最大！",
      "distractorAnalysis": {
        "A": "誤以為題目要求兩數相異，選了 6 × 4 ＝ 24。題目只說兩正整數，可以相等。",
        "C": "隨意拿題目數字亂乘，算成 10 × 5 ＝ 50。",
        "D": "選了 7 × 3 ＝ 21，這不是最接近的數，乘積不是最大。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "和固定時：兩數差距越小，乘積越大；兩數相等時乘積達到最大值"
      ],
      "conceptCompare": "積固定時剛好相反：兩數差距越大，和越大（如面積 24，1 ＋ 24 ＝ 25 最大；兩數越近和越小）。",
      "examVariations": "「用 20 公尺繩子圍成長方形，怎樣圍面積最大？」答：圍成邊長 5 公尺的正方形面積 25 平方公尺。"
    },
    "check": {
      "expr": "5 * 5",
      "expect": "25"
    }
  },
  {
    "id": "U05-S3-M-055",
    "legacyId": "u05_m15",
    "unitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差",
    "category": "雙時點年齡心算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "2 年前爸爸的年齡是女兒的 4 倍，3 年後爸爸的年齡是女兒的 3 倍。請問女兒現在是幾歲？",
    "options": [
      {
        "key": "A",
        "text": "10 歲",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "B",
        "text": "15 歲",
        "trapCode": "U05_AGE_DIFF_CHANGE"
      },
      {
        "key": "C",
        "text": "12 歲",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "17 歲",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "利用「年齡差不變」作為不變的基準，以份數差對應時間差，解出雙時點年齡問題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：年齡差永遠固定不變。2 年前爸爸是女兒的 4 倍，兩人相差 4 − 1 ＝ 3 份，所以那時女兒的年齡是年齡差的 1/3。"
        },
        {
          "type": "text",
          "text": "第 2 步：3 年後爸爸是女兒的 3 倍，兩人相差 3 − 1 ＝ 2 份，所以那時女兒的年齡是年齡差的 1/2。"
        },
        {
          "type": "text",
          "text": "第 3 步：從「2 年前」到「3 年後」一共經過 2 ＋ 3 ＝ 5 年，對應的份數差是 1/2 − 1/3 ＝ 1/6。"
        },
        {
          "type": "eq",
          "expr": "1/2 − 1/3 ＝ 1/6"
        },
        {
          "type": "text",
          "text": "第 4 步：年齡差的 1/6 剛好對應 5 年，所以兩人年齡差為 5 ÷ 1/6 ＝ 30 歲；2 年前女兒的年齡是 30 × 1/3 ＝ 10 歲。"
        },
        {
          "type": "eq",
          "expr": "5 ÷ 1/6 ＝ 30",
          "unit": "歲"
        },
        {
          "type": "eq",
          "expr": "30 × 1/3 ＝ 10",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "第 5 步：從 2 年前回到現在，女兒現在的年齡要加上 2 歲。"
        },
        {
          "type": "eq",
          "expr": "10 ＋ 2 ＝ 12",
          "unit": "歲"
        },
        {
          "type": "answer",
          "text": "答：女兒現在是 12 歲。"
        }
      ],
      "insight": "雙時點年齡問題最高心法：抓住唯一不變的量——「年齡差」！把兩次兒子的年齡都化為年齡差的幾分之幾，用分數差對應經過的年數。",
      "distractorAnalysis": {
        "A": "算出 2 年前女兒的年齡是 10 歲，忘記題目問的是「現在」要加上 2 歲。",
        "B": "算出 3 年後女兒的年齡 15 歲，誤當成現在年齡。",
        "D": "時間差或加減步驟計算失誤，誤算為 17 歲。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 時間差 ÷（新份數比值 − 舊份數比值）"
      ],
      "conceptCompare": "單時點年齡題直接除以（倍數 − 1）；雙時點年齡題必須抓兩次倍數差的分數變化量。",
      "examVariations": "爸爸現在幾歲？2 年前女兒 10 歲、爸爸 40 歲，爸爸現在就是 40 ＋ 2 ＝ 42 歲。"
    },
    "check": {
      "expr": "(2 + 3) / (1/2 - 1/3) / 3 + 2",
      "expect": "12"
    }
  },
  {
    "id": "U05-RV-M-056",
    "legacyId": "u05_m16",
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "平方加 1 數列規律",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 8★",
    "level": 8,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "觀察數字規律：第 1 個數對應 2，第 2 個數對應 5，第 3 個對應 10，第 4 個對應 17。按照這個規律，第 10 個數對應的數是多少？",
    "options": [
      {
        "key": "A",
        "text": "20",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "100",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "37",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "101",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "觀察多組對應數據，歸納出平方數加 1 的非線性數列關係，並能驗算延伸。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察每組對應數字的計算關係：1 對應 1 × 1 ＋ 1 ＝ 2；2 對應 2 × 2 ＋ 1 ＝ 5；3 對應 3 × 3 ＋ 1 ＝ 10；4 對應 4 × 4 ＋ 1 ＝ 17。"
        },
        {
          "type": "text",
          "text": "第 2 步：發現規律是「第一個數自乘（平方）再加上 1」。"
        },
        {
          "type": "eq",
          "expr": "10 × 10 ＋ 1 ＝ 100 ＋ 1 ＝ 101"
        },
        {
          "type": "answer",
          "text": "答：對應的數是 101。"
        }
      ],
      "insight": "規律題驗算心法：找到假想的規律後，一定要至少帶入 3 組資料檢查！1×1+1＝2、2×2+1＝5、3×3+1＝10 全部吻合才是真規律。",
      "distractorAnalysis": {
        "A": "只看了第 1 組數字（1 變成 2）就草率以為規律是乘以 2，算出 10 × 2 ＝ 20。",
        "B": "算出 10 自乘等於 100，卻漏掉最後加 1 的步驟。",
        "C": "觀察相鄰兩項的差（＋3、＋5、＋7）後，誤以為從第 4 項起只再加兩次遞增差（17 ＋ 9 ＋ 11 ＝ 37），錯把第 6 項當成第 10 項的值。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "對應數 ＝ 第一個數 × 第一個數 ＋ 1"
      ],
      "conceptCompare": "等差規律每次差固定；二階等差（差 3, 5, 7, 9）必與「正方形自乘（平方）」相關。",
      "examVariations": "反過來問：若對應的數是 50，第一個數是多少？逆推 50 − 1 ＝ 49，7 × 7 ＝ 49，所以第一個數是 7。"
    },
    "check": {
      "expr": "10 * 10 + 1",
      "expect": "101"
    }
  },
  {
    "id": "U05-S2-M-057",
    "legacyId": "u05_m17",
    "unitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "category": "總和守恆互轉比",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "甲和乙兩人共有 100 元，原本甲的錢和乙的錢的比是 3：2。甲要給乙多少元後，兩人的錢的比才會變成 2：3？",
    "options": [
      {
        "key": "A",
        "text": "20 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "40 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "10 元",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "D",
        "text": "60 元",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "利用內部轉移時總和守恆的性質，先求出各自分配金額，再計算給出的轉移量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：兩人的總金額固定是 100 元。原本比是 3：2，總共分成 3 ＋ 2 ＝ 5 份。每份是 100 ÷ 5 ＝ 20 元。甲原本有 20 × 3 ＝ 60 元。"
        },
        {
          "type": "eq",
          "expr": "100 × 3/5 ＝ 60",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：後來的比變成 2：3，甲只要留 2 份，也就是 20 × 2 ＝ 40 元。"
        },
        {
          "type": "eq",
          "expr": "100 × 2/5 ＝ 40",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：算出甲必須給乙多少元。"
        },
        {
          "type": "eq",
          "expr": "60 − 40 ＝ 20",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：甲要給乙 20 元。"
        }
      ],
      "insight": "比對調心法：總和不變時，比從 3：2 變成 2：3，代表兩人金額剛好對調！甲原本 60 元、後來 40 元，減少的 20 元就是直接給乙的錢。",
      "distractorAnalysis": {
        "B": "算出甲後來剩下的錢 40 元，誤以為這就是給出的錢。",
        "C": "直覺拿相差的 20 元除以 2 誤算為 10 元，若甲給 10 元兩人變成 50 與 50 元（比是 1：1 不是 2：3）。",
        "D": "算出甲原本的錢 60 元，誤當成答案。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "給出的金額 ＝ 甲原本的錢 − 甲後來的錢"
      ],
      "conceptCompare": "內部互相給錢「總和守恆」；一人給第三者錢則總和會變少。",
      "examVariations": "若改問「甲給乙幾元後兩人錢一樣多？」，兩人一樣多各 50 元，甲給 60 − 50 ＝ 10 元。"
    },
    "check": {
      "expr": "100 * 3/5 - 100 * 2/5",
      "expect": "20"
    }
  },
  {
    "id": "U05-RV-M-058",
    "legacyId": "u05_m18",
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "定額連減正餘數上限",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 9★",
    "level": 9,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "小宇有 99 元，每次去文具店都花掉 3 元買貼紙。如果每次花完後，口袋剩下的錢都必須大於 0 元，請問小宇最多可以買幾次貼紙？",
    "options": [
      {
        "key": "A",
        "text": "33 次",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "32 次",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "31 次",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "D",
        "text": "297 次",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "探討帶有邊界條件（剩下金額大於 0 元）的有餘數除法極值應用。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：口袋剩下的錢必須大於 0 元，代表不能把 99 元全部花光，至少要剩下 1 元。"
        },
        {
          "type": "text",
          "text": "第 2 步：若不考慮限制，99 元除以 3 元剛好整除："
        },
        {
          "type": "eq",
          "expr": "99 ÷ 3 ＝ 33"
        },
        {
          "type": "text",
          "text": "第 3 步：買 33 次會剩下 0 元，不符合「大於 0 元」的規定；因此最多只能買 33 − 1 ＝ 32 次（花掉 96 元，剩下 3 元大於 0 元）。"
        },
        {
          "type": "eq",
          "expr": "33 − 1 ＝ 32",
          "unit": "次"
        },
        {
          "type": "answer",
          "text": "答：小宇最多可以買 32 次貼紙。"
        }
      ],
      "insight": "極值與大於 0 限制：剛好整除時（99 ÷ 3 ＝ 33）會剩下 0 元，不符合「大於 0 元」，必須退 1 次變成 32 次！",
      "distractorAnalysis": {
        "A": "只算 99 ÷ 3 ＝ 33 次，忽略了買 33 次後剩下 0 元，不符合「剩下的錢必須大於 0 元」的條件。",
        "C": "多退了一步誤算為 31 次。買 31 次花 93 元剩下 6 元，還能再買 1 次。",
        "D": "把 99 除以 3 誤算成乘法 99 × 3 ＝ 297 次。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "最多買幾次 ＝（總金額 − 至少保留金額）÷ 單次花費 的整數商"
      ],
      "conceptCompare": "裝箱問題（全部裝完）用「無條件進位」；花錢購買（錢有限）用「去尾法（只取整數商）」。",
      "examVariations": "若規定「剩下至少要 10 元」，則先扣掉 10 元：(99 − 10) ÷ 3 ＝ 89 ÷ 3 ＝ 29 ... 2，最多買 29 次。"
    },
    "check": {
      "expr": "(99 - 3) / 3",
      "expect": "32"
    }
  },
  {
    "id": "U05-RV-M-059",
    "legacyId": "u05_m19",
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "雙向等百分率逆算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "某商品先漲價某個百分率，再降價相同的百分率，最後的價格比原本的價格少了 4%。請問這個百分率是多少？",
    "options": [
      {
        "key": "A",
        "text": "4%",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "B",
        "text": "2%",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "20%",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "16%",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "探究先漲後降相同比率時的平方差損失規律，並透過已知損失率逆推原始百分率。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：設原價為 100 元。先漲價某個百分率後，價格會變成「原價 ＋ 漲價金額」。"
        },
        {
          "type": "text",
          "text": "第 2 步：再降價相同百分率時，是以「漲價後的價格」為新基準！除了原本的 100 元會少掉漲價金額（兩者剛好抵銷），連剛才多出來的「漲價金額」本身也會跟著打折少掉相同的百分率！"
        },
        {
          "type": "text",
          "text": "第 3 步：因此，最後比原價少的比率，就是「漲價的百分率 × 降價的百分率」。題目說最後比原價少 4%（即 0.04），代表「某百分率 × 某百分率 ＝ 0.04」。"
        },
        {
          "type": "text",
          "text": "第 4 步：因為 0.2 × 0.2 ＝ 0.04，所以這個百分率就是 0.2，也就是 20%。"
        },
        {
          "type": "eq",
          "expr": "0.2 × 0.2 ＝ 0.04 ＝ 4%"
        },
        {
          "type": "text",
          "text": "第 5 步：帶入驗算：100 元先漲 20% 變 120 元（多 20 元），120 元再降 20% 時，原本的 100 元少 20 元、剛多出的 20 元也少了 20%（20 × 20% ＝ 4 元），變成 120 − 24 ＝ 96 元，剛好比 100 元少 4%！"
        },
        {
          "type": "answer",
          "text": "答：這個百分率是 20%。"
        }
      ],
      "insight": "漲跌對稱平方差秘訣：先漲 □ 再降 □，最後結果永遠是少「□ × □」！因為 0.2 × 0.2 ＝ 0.04（少 4%），所以該百分率就是 20%。",
      "distractorAnalysis": {
        "A": "看到最後少了 4%，直覺誤以為漲跌的百分率就是 4%。",
        "B": "以為少 4% 是漲跌相抵後各分一半，用 4% ÷ 2 ＝ 2%。",
        "D": "把 4% 當作 0.04，平方運算時小數點或概念混淆選了 16%。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "先漲 □ 再降 □：最後損失比率 ＝ □ × □"
      ],
      "conceptCompare": "先漲 10% 再降 10% 少 0.1 × 0.1 ＝ 1%；先漲 30% 再降 30% 則少 0.3 × 0.3 ＝ 9%。",
      "examVariations": "若最後比原價少 9%，該百分率就是 30%（因為 0.3 × 0.3 ＝ 0.09）。"
    },
    "check": {
      "expr": "4% / 20%",
      "expect": "20%",
      "extraChecks": [
        {
          "expr": "20/100 * 20/100",
          "expect": "4/100"
        }
      ]
    }
  },
  {
    "id": "U05-RV-M-060",
    "legacyId": "u05_m20",
    "unitId": "U05",
    "section": "REVIEW",
    "sectionName": "綜合複習與應用",
    "category": "雞兔兩價差假設心算",
    "batch": "純腦力體操",
    "source": "早餐免動筆思維天梯 10★",
    "level": 10,
    "difficulty": 5,
    "questionType": "choice",
    "work": "sm",
    "question": "遊樂園門票大人票每張 100 元、小孩票每張 50 元。一群人共有 10 人，買門票一共付了 700 元。請問小孩有幾人？",
    "options": [
      {
        "key": "A",
        "text": "4 人",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "3 人",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "C",
        "text": "5 人",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6 人",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "利用經典雞兔同籠假設法，將整體多算金額除以單張差價，求解目標數量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：使用假設法。假設 10 個人全部都是買大人票，算出需要付的錢："
        },
        {
          "type": "eq",
          "expr": "100 × 10 ＝ 1000",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：算出假設全部是大人時，比實際付的 700 元多出了多少元："
        },
        {
          "type": "eq",
          "expr": "1000 − 700 ＝ 300",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 張大人票換成 1 張小孩票，可以少付 100 − 50 ＝ 50 元。多出的 300 元需要換成幾張小孩票："
        },
        {
          "type": "eq",
          "expr": "300 ÷ 50 ＝ 6",
          "unit": "人"
        },
        {
          "type": "answer",
          "text": "答：小孩有 6 人。"
        }
      ],
      "insight": "雞兔同籠假設法口訣：求小孩先全設大人！多算的總金額 ÷ 兩者單價差 ＝ 小孩人數。",
      "distractorAnalysis": {
        "A": "算出大人的人數 10 − 6 ＝ 4 人，題目問的是小孩，看錯對象。",
        "B": "總差額除以單價差時心算粗心誤算為 3 人。",
        "C": "沒有認真計算，隨意用 10 人平分成各 5 人。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "小孩人數 ＝（全部設為大人的總價 − 實際總價）÷（大人單價 − 小孩單價）"
      ],
      "conceptCompare": "求小的全設大的；若要求大人人數，也可以全設小孩：(700 − 50 × 10) ÷ 50 ＝ 200 ÷ 50 ＝ 4 位大人。",
      "examVariations": "驗算檢查：4 位大人 400 元 ＋ 6 位小孩 300 元 ＝ 700 元，完全吻合。"
    },
    "check": {
      "expr": "(100 * 10 - 700) / (100 - 50)",
      "expect": "6"
    }
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['U05'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
