// EXAM_MID2 題庫分片（共 243 張題卡，由 build_exam_mid2.js 整併八校九卷 4D 題庫生成）
(function (root) {
  const DATA = [
  {
    "id": "EX2-HESHUN-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "「阿和的錢是小順的錢的 0.5 倍」、「媽媽的年齡是哥哥年齡的 1.8 倍」，根據這兩句話，下列哪一個選項是正確的？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "options": [
      {
        "key": "A",
        "text": "句子中的比較量是：小順的錢、媽媽的年齡",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "比值：0.5、1.8",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "句子中的基準量：阿和的錢、哥哥年齡",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "當作 1 的量：小順的錢、媽媽的年齡",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗能否從「甲是乙的幾倍」句型中，正確區分基準量（當作 1 的量）、比較量與比值。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：拆解「阿和的錢是小順的錢的 0.5 倍」：「是」後面「小順的錢」是基準量（當作 1 的量），「阿和的錢」是比較量，0.5 是比值。"
        },
        {
          "type": "text",
          "text": "第 2 步：拆解「媽媽的年齡是哥哥年齡的 1.8 倍」：「是」後面「哥哥年齡」是基準量（當作 1 的量），「媽媽的年齡」是比較量，1.8 是比值。"
        },
        {
          "type": "text",
          "text": "第 3 步：逐一核對四個選項，只有「比值：0.5、1.8」完全正確。"
        },
        {
          "type": "answer",
          "text": "答：選項 B（比值：0.5、1.8）。"
        }
      ],
      "insight": "看到「甲是乙的幾倍」時，「的」前面的乙是基準量（當作 1 的量），「是」前面的甲是比較量，倍數就是比值！",
      "distractorAnalysis": {
        "A": "第一句的比較量應該是「阿和的錢」，而不是「小順的錢」。",
        "C": "第一句的基準量應該是「小順的錢」，把基準量與比較量弄反了。",
        "D": "第二句「當作 1 的量（基準量）」應該是「哥哥年齡」，而不是「媽媽的年齡」。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲是乙的幾倍：甲 ＝ 比較量，乙 ＝ 基準量（當作 1 的量），倍數 ＝ 比值"
      ],
      "conceptCompare": "基準量又叫做「當作 1 的量」；比較量 ÷ 基準量 ＝ 比值（倍數）。",
      "examVariations": "常改考「小順的錢是阿和的幾倍？」此時基準量變成阿和，比值倒數為 1 ÷ 0.5 ＝ 2 倍。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "work": "sm"
  },
  {
    "id": "EX2-HESHUN-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "圓周長與直徑比較",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "有一條長 314 公分的緞帶，繞甲圓柱形禮盒圓周可繞 3 圈，繞乙圓柱形禮盒圓周可繞 2 圈，甲圓柱形禮盒和乙圓柱形禮盒哪一個的底面的圓形直徑比較短？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "options": [
      {
        "key": "A",
        "text": "甲圓柱形禮盒",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "乙圓柱形禮盒",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "兩個禮盒的直徑一樣長",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "D",
        "text": "無法比較",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "利用固定長度的繩子繞圓周的圈數，推論圓周長與直徑的大小關係。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：同一條 314 公分緞帶，繞的圈數越多，代表禮盒繞 1 圈的圓周長越短。"
        },
        {
          "type": "eq",
          "expr": "314 ÷ 2 = 157",
          "unit": "公分（乙禮盒圓周長）"
        },
        {
          "type": "eq",
          "expr": "314 ÷ 3 = 104 2/3",
          "unit": "公分（甲禮盒圓周長）"
        },
        {
          "type": "text",
          "text": "第 2 步：因為圓周長 ＝ 直徑 × 3.14，圓周長越短，底面圓形直徑就越短（甲圓周長 ＜ 乙圓周長）。"
        },
        {
          "type": "answer",
          "text": "答：甲圓柱形禮盒的底面圓形直徑比較短。"
        }
      ],
      "insight": "緞帶總長固定時，繞越多圈代表 1 圈越短，直徑也越小！不需要真的算出 314 ÷ 3 ÷ 3.14 就能秒判。",
      "distractorAnalysis": {
        "B": "看到 3 圈比 2 圈大，誤以為繞 3 圈的甲直徑較長、乙較短，思考方向剛好相反。",
        "C": "誤以為同一條 314 公分緞帶繞出來的兩個圓周長都一樣，忘記兩人繞的圈數不同。",
        "D": "題目已給緞帶長與圈數，乙直徑 ＝ 157 ÷ 3.14 ＝ 50 公分，甲直徑約 33.3 公分，完全可以比較。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 直徑 × 3.14",
        "總長固定時：繞的圈數越多，單圈圓周長越短，直徑也越短"
      ],
      "conceptCompare": "直徑大小與圓周長成正相關，圓周長越短、直徑越短；但兩者的圓周率都是 3.14 一樣大。",
      "examVariations": "若改問「乙禮盒底面直徑大約是幾公分？」則算 314 ÷ 2 ÷ 3.14 ＝ 50 公分。"
    },
    "check": {
      "expr": "314 / 2 / 3.14",
      "expect": "50"
    },
    "work": "sm"
  },
  {
    "id": "EX2-HESHUN-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "放大圖與縮小圖",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "將邊長 5 公分的正方形圖片放大 2 倍後，正方形圖片的邊長會變成多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "options": [
      {
        "key": "A",
        "text": "5 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "10 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "15 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "20 公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "理解平面圖形放大 2 倍時，每個對應邊長都會變成原來的 2 倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：放大 2 倍是指所有對應邊的長度都乘以 2："
        },
        {
          "type": "eq",
          "expr": "5 × 2 = 10",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：正方形圖片的邊長會變成 10 公分。"
        }
      ],
      "insight": "圖形放大幾倍，邊長就乘以幾倍（面積才會乘以倍數的平方，即 2 × 2 ＝ 4 倍）。",
      "distractorAnalysis": {
        "A": "誤把「角不變」記成「邊長不變」。",
        "C": "計算錯誤（5 ＋ 10 ＝ 15）。",
        "D": "把面積放大 4 倍誤套用到邊長上，算成 5 × 4 ＝ 20 公分（或把周長 20 公分當成邊長）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大圖邊長 ＝ 原圖邊長 × 放大倍數"
      ],
      "conceptCompare": "正方形放大 2 倍：邊長變 2 倍（10 公分）、周長變 2 倍（40 公分）、面積變 4 倍（100 平方公分）、內角不變（仍為 90 度）。",
      "examVariations": "常改問「放大 2 倍後，周長會變成幾公分？」（10 × 4 ＝ 40 公分）或「面積會變成原來的幾倍？」（4 倍）。"
    },
    "check": {
      "expr": "5 * 2",
      "expect": "10"
    },
    "work": "sm"
  },
  {
    "id": "EX2-HESHUN-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "相對放大縮小倍數",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "乙圖是甲圖的 2 倍放大圖，丙圖是甲圖的 4 倍放大圖，下列敘述何者正確？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "options": [
      {
        "key": "A",
        "text": "丙圖是乙圖的 2 倍放大圖",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "乙圖是丙圖 1/4 倍縮小圖",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "C",
        "text": "乙圖是丙圖 1/8 倍縮小圖",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "D",
        "text": "丙圖是乙圖 8 倍放大圖",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗以第三圖（甲圖）為基準，換算乙圖與丙圖之間的相對放大／縮小倍數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把甲圖的邊長當作 1 份，乙圖邊長是 2 份，丙圖邊長是 4 份。"
        },
        {
          "type": "eq",
          "expr": "4 ÷ 2 = 2",
          "unit": "倍（丙圖是乙圖的 2 倍放大圖）"
        },
        {
          "type": "eq",
          "expr": "2 ÷ 4 = 1/2",
          "unit": "倍（乙圖是丙圖的 1/2 倍縮小圖）"
        },
        {
          "type": "answer",
          "text": "答：丙圖是乙圖的 2 倍放大圖（選項 A）。"
        }
      ],
      "insight": "設甲 ＝ 1，直接用分數比大小：乙 ＝ 2，丙 ＝ 4，丙 ÷ 乙 ＝ 4 ÷ 2 ＝ 2 倍，秒殺不被文字繞暈！",
      "distractorAnalysis": {
        "B": "乙是 2、丙是 4，乙是丙的 2 ÷ 4 ＝ 1/2 倍縮小圖，不是 1/4 倍。",
        "C": "誤把 2 × 4 ＝ 8 拿去當分母算成 1/8 倍。",
        "D": "誤把兩個放大倍數直接相乘（2 × 4 ＝ 8 倍）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "誰是誰的幾倍：比較圖邊長 ÷ 基準圖邊長"
      ],
      "conceptCompare": "「乙是甲的 2 倍、丙是甲的 4 倍」是倍數比較，不是相乘 2 × 4 ＝ 8；只有「丙是乙的 4 倍、乙是甲的 2 倍」連鎖放大時才用乘法 2 × 4 ＝ 8。",
      "examVariations": "若改為「乙圖是甲圖的 2 倍放大圖，丙圖是乙圖的 4 倍放大圖」，此時丙才是甲的 8 倍！審題要看清基準圖是甲還是乙。"
    },
    "check": {
      "expr": "4 / 2",
      "expect": "2"
    },
    "work": "sm"
  },
  {
    "id": "EX2-HESHUN-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與周長",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "將一個半徑 50 公分的圓對摺一次，摺好後的扇形周長大約是幾公分？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "options": [
      {
        "key": "A",
        "text": "107 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "157 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "207 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "D",
        "text": "257 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "理解圓對摺一次會變成 1/2 圓的半圓扇形，周長必須算「半圓弧長 ＋ 兩條半徑」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓對摺一次變成 1/2 圓扇形（半圓），先算半圓弧長："
        },
        {
          "type": "eq",
          "expr": "50 × 2 × 3.14 ÷ 2 = 157",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：扇形周長還要加上摺痕上的兩條半徑（50 ＋ 50 ＝ 100 公分）："
        },
        {
          "type": "eq",
          "expr": "157 + 50 × 2 = 257",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：摺好後的扇形周長大約是 257 公分。"
        }
      ],
      "insight": "半圓周長必背口訣：半圓弧長（157）＋ 直徑（100）＝ 257 公分！",
      "distractorAnalysis": {
        "A": "誤將直徑與半徑混淆，算成 107 公分。",
        "B": "只算了圓弧長 157 公分，忘記加上摺痕這條直徑（2 條半徑 ＝ 100 公分）。",
        "C": "只加了 1 條半徑 50 公分（157 ＋ 50 ＝ 207 公分），少算另一條半徑。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2",
        "半圓周長 ＝ 直徑 × 3.14 ÷ 2 ＋ 直徑"
      ],
      "conceptCompare": "「對摺一次」＝ 1/2 圓（圓心角 180 度）；「對摺兩次」＝ 1/4 圓（圓心角 90 度）；不管幾分之幾圓，求周長一定要加兩條半徑！",
      "examVariations": "若改問對摺兩次（1/4 圓扇形），周長為 50 × 2 × 3.14 ÷ 4 ＋ 50 × 2 ＝ 78.5 ＋ 100 ＝ 178.5 公分。"
    },
    "check": {
      "expr": "50 * 2 * 3.14 / 2 + 50 * 2",
      "expect": "257"
    },
    "work": "md"
  },
  {
    "id": "EX2-HESHUN-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大與縮小圖",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 二、畫圖題",
    "batch": "段考真題",
    "category": "方格紙繪製縮小圖",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "畫出三角形 ABC 的 1/2 倍縮小圖，並標示對應點 D、E、F。（原圖底邊 BC 為 6 格、高為 8 格，頂點 A 在頂點 B 往右 4 格、往上 8 格的位置；下列哪一組縮小圖 △DEF 尺寸正確？）",
    "stemImage": "images/exams/EXAM_MID2/crop_heshun_grid_abc.png",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "figureSvg": "<svg viewBox=\"0 0 360 360\" width=\"100%\" style=\"max-width:340px;background:#fff;border:1px solid #cbd5e1;border-radius:8px\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"heshunGrid18\" width=\"18\" height=\"18\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 18 0 L 0 0 0 18\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"27\" y=\"27\" width=\"306\" height=\"306\" fill=\"url(#heshunGrid18)\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n  <!-- 原圖三角形 ABC：B(0,9), C(6,9), A(4,1) -->\n  <polygon points=\"99,45 27,189 135,189\" fill=\"rgba(59,130,246,0.2)\" stroke=\"#1d4ed8\" stroke-width=\"2.2\"/>\n  <circle cx=\"99\" cy=\"45\" r=\"3\" fill=\"#1d4ed8\"/>\n  <circle cx=\"27\" cy=\"189\" r=\"3\" fill=\"#1d4ed8\"/>\n  <circle cx=\"135\" cy=\"189\" r=\"3\" fill=\"#1d4ed8\"/>\n  <text x=\"95\" y=\"39\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">A</text>\n  <text x=\"13\" y=\"194\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">B</text>\n  <text x=\"139\" y=\"194\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">C</text>\n  <text x=\"58\" y=\"206\" font-size=\"11\" fill=\"#1e40af\">底 BC ＝ 6 格</text>\n  <line x1=\"99\" y1=\"45\" x2=\"99\" y2=\"189\" stroke=\"#1d4ed8\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"103\" y=\"122\" font-size=\"11\" fill=\"#1e40af\">高 8 格</text>\n  <!-- 1/2 縮小圖三角形 DEF：E(9,9), F(12,9), D(11,5) -->\n  <polygon points=\"225,117 189,189 243,189\" fill=\"rgba(16,185,129,0.22)\" stroke=\"#059669\" stroke-width=\"2.2\"/>\n  <circle cx=\"225\" cy=\"117\" r=\"3\" fill=\"#059669\"/>\n  <circle cx=\"189\" cy=\"189\" r=\"3\" fill=\"#059669\"/>\n  <circle cx=\"243\" cy=\"189\" r=\"3\" fill=\"#059669\"/>\n  <text x=\"221\" y=\"111\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">D</text>\n  <text x=\"176\" y=\"194\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">E</text>\n  <text x=\"247\" y=\"194\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">F</text>\n  <text x=\"190\" y=\"206\" font-size=\"11\" fill=\"#047857\">底 EF ＝ 3 格</text>\n  <line x1=\"225\" y1=\"117\" x2=\"225\" y2=\"189\" stroke=\"#059669\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"229\" y=\"158\" font-size=\"11\" fill=\"#047857\">高 4 格</text>\n  <text x=\"27\" y=\"348\" font-size=\"11\" fill=\"#475569\">藍：原圖 △ABC（底 6 格、高 8 格）　綠：1/2 縮小圖 △DEF（底 3 格、高 4 格）</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "底邊 EF 為 12 格、高為 16 格，頂點 D 在頂點 E 往右 8 格、往上 16 格的位置",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "B",
        "text": "底邊 EF 為 3 格、高為 2 格，頂點 D 在頂點 E 往右 1 格、往上 2 格的位置",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "底邊 EF 為 3 格、高為 4 格，頂點 D 在頂點 E 往右 2 格、往上 4 格的位置",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "底邊 EF 為 6 格、高為 4 格，只縮小高度而底邊不變",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "練習在方格紙上找出多邊形的底、高與頂點相對格數，並等比例繪製 1/2 倍縮小圖。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：數出原圖 △ABC 的格子數：底邊 BC ＝ 6 格，高 ＝ 8 格，頂點 A 在 B 往右 4 格、往上 8 格的位置。"
        },
        {
          "type": "eq",
          "expr": "6 × 1/2 = 3",
          "unit": "格（縮小圖底邊 EF）"
        },
        {
          "type": "eq",
          "expr": "8 × 1/2 = 4",
          "unit": "格（縮小圖的高）"
        },
        {
          "type": "eq",
          "expr": "4 × 1/2 = 2",
          "unit": "格（頂點 D 相對 E 往右 2 格、往上 4 格）"
        },
        {
          "type": "text",
          "text": "第 2 步：在右側空白方格先畫出水平底邊 EF（3 格），再從 E 往右 2 格、往上 4 格點出 D，連接 DE 與 DF 並標上對應點 D、E、F。"
        },
        {
          "type": "answer",
          "text": "答：底邊 EF 為 3 格、高為 4 格，頂點 D 在頂點 E 往右 2 格、往上 4 格的位置。"
        }
      ],
      "insight": "斜邊不好直接用尺量格數，改用「往右幾格、往上幾格」的水平與垂直位移一起乘以 1/2，畫出來的斜邊與角度才會 100% 精準！",
      "distractorAnalysis": {
        "D": "畫縮小圖時底與高必須同時乘以 1/2，不能只縮小高而不縮底邊。",
        "A": "把 1/2 倍縮小圖誤算成乘以 2 的 2 倍放大圖（6 × 2 ＝ 12 格、8 × 2 ＝ 16 格）。",
        "B": "把高與水平位移誤除以 4（8 ÷ 4 ＝ 2 格），與底邊的縮小倍數不一致。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "方格圖形縮放口訣：底邊格數 × 倍數、水平位移格數 × 倍數、垂直高度格數 × 倍數"
      ],
      "conceptCompare": "對應點順序不可對調：原圖寫「三角形 ABC 的對應點 D、E、F」，就表示 A 對應 D、B 對應 E、C 對應 F。",
      "examVariations": "若題目要求「2 倍放大圖」，這題 17 × 17 的方格紙要放得下底 12 格、高 16 格，起點就要從靠左下方開始畫。"
    },
    "check": {
      "expr": "6 * 1/2",
      "expect": "3",
      "extraChecks": [
        {
          "expr": "8 * 1/2",
          "expect": "4"
        },
        {
          "expr": "4 * 1/2",
          "expect": "2"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-HESHUN-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題與兩量關係",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 三、填充題 第1題(1)~(4)",
    "batch": "段考真題",
    "category": "年齡問題",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "1. 哥哥今年年齡 25 歲，弟弟今年年齡 12 歲。",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-HESHUN-G01-1",
        "label": "(1)",
        "question": "今年哥哥和弟弟相差（　　）歲。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "12 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "25 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "C",
            "text": "13 歲",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "37 歲",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "練習求兩個人的基本年齡差，作為後面年齡不變推論的基礎。",
          "steps": [
            {
              "type": "text",
              "text": "用哥哥今年的年齡減去弟弟今年的年齡："
            },
            {
              "type": "eq",
              "expr": "25 - 12 = 13",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：今年哥哥和弟弟相差 13 歲。"
            }
          ],
          "insight": "大數減小數就能求出兩人相差幾歲。",
          "distractorAnalysis": {
            "D": "誤用加法算成 25 ＋ 12 ＝ 37 歲，那是兩人的年齡和。",
            "A": "直接填入弟弟今年的年齡 12 歲。",
            "B": "直接填入哥哥今年的年齡 25 歲。"
          }
        },
        "check": {
          "expr": "25 - 12",
          "expect": "13"
        }
      },
      {
        "subId": "EX2-HESHUN-G01-2",
        "label": "(2)",
        "question": "20 年後，哥哥和弟弟相差（　　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "33 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "B",
            "text": "20 歲",
            "trapCode": "U08_AGE_NOW_OFFSET_MISS"
          },
          {
            "key": "C",
            "text": "77 歲",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "13 歲",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "理解「經過幾年，兩個人同時長大相同歲數，年齡差永遠不變」。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：20 年後哥哥變成 25 ＋ 20 ＝ 45 歲，弟弟變成 12 ＋ 20 ＝ 32 歲。"
            },
            {
              "type": "eq",
              "expr": "45 - 32 = 13",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：20 年後，哥哥和弟弟仍然相差 13 歲。"
            }
          ],
          "insight": "不管過了 20 年還是 50 年，哥哥和弟弟每年都一起加 1 歲，年齡差永遠不變！",
          "distractorAnalysis": {
            "A": "誤把今年年齡差 13 歲加上 20 年變成 33 歲，忘記弟弟也在長大。",
            "B": "誤直接填寫經過的年數 20 歲。",
            "C": "誤算成 20 年後兩人的年齡和（45 ＋ 32 ＝ 77 歲）。"
          }
        },
        "check": {
          "expr": "(25 + 20) - (12 + 20)",
          "expect": "13"
        }
      },
      {
        "subId": "EX2-HESHUN-G01-3",
        "label": "(3)",
        "question": "列式表示哥哥年齡和弟弟年齡間的關係？（　　）年齡 −（　　）年齡 ＝（　　）。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "哥哥年齡 − 弟弟年齡 ＝ 13",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "弟弟年齡 − 哥哥年齡 ＝ 13",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "哥哥年齡 − 弟弟年齡 ＝ 25",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "D",
            "text": "哥哥年齡 − 弟弟年齡 ＝ 12",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "A",
        "skipOptionNumMatch": true,
        "explanation": {
          "examPurpose": "將「年齡差不變」寫成減法關係式，用來推算未來的年齡。",
          "steps": [
            {
              "type": "text",
              "text": "哥哥比弟弟大，所以用「哥哥年齡」減去「弟弟年齡」，結果永遠等於兩人的年齡差 13 歲。"
            },
            {
              "type": "eq",
              "expr": "25 - 12 = 13",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：哥哥年齡 − 弟弟年齡 ＝ 13。"
            }
          ],
          "insight": "大年齡 − 小年齡 ＝ 固定不變的年齡差。",
          "distractorAnalysis": {
            "B": "把被減數與減數對調了，弟弟年齡比較小，不能減哥哥年齡等於 13。",
            "C": "誤把哥哥今年的年齡 25 填入等號右邊的差。",
            "D": "誤把弟弟今年的年齡 12 填入等號右邊的差。"
          }
        },
        "check": {
          "expr": "25 - 12",
          "expect": "13"
        }
      },
      {
        "subId": "EX2-HESHUN-G01-4",
        "label": "(4)",
        "question": "當哥哥年齡變為 2 倍時，弟弟是（　　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "50 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "37 歲",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "24 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "D",
            "text": "13 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "破除「哥哥變 2 倍、弟弟也跟著變 2 倍」的迷思，運用「年齡差 ＝ 13 歲不變」求弟弟年齡。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：當哥哥年齡變為今年（25 歲）的 2 倍時，哥哥的年齡是："
            },
            {
              "type": "eq",
              "expr": "25 × 2 = 50",
              "unit": "歲"
            },
            {
              "type": "text",
              "text": "第 2 步：利用第 (3) 小題「哥哥年齡 − 弟弟年齡 ＝ 13」求弟弟年齡："
            },
            {
              "type": "eq",
              "expr": "50 - 13 = 37",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：弟弟是 37 歲。"
            }
          ],
          "insight": "兩人的年齡是「相差 13 歲」的差不變關係，不是倍數關係！哥哥變成 2 倍（50 歲）代表過了 25 年，弟弟也同樣長大 25 歲（12 ＋ 25 ＝ 37 歲）。",
          "distractorAnalysis": {
            "C": "最常見陷阱！誤以為哥哥年齡變 2 倍，弟弟也會變 2 倍（12 × 2 ＝ 24 歲）。",
            "D": "直接填了兩人的年齡差 13 歲（或誤讀成哥哥是弟弟的 2 倍）。",
            "A": "算出哥哥變 2 倍是 50 歲後，忘記減去年齡差 13 歲就直接作答。"
          }
        },
        "check": {
          "expr": "25 * 2 - (25 - 12)",
          "expect": "37"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 大年齡 − 小年齡（永遠不變）",
        "弟弟年齡 ＝ 哥哥年齡 − 年齡差"
      ],
      "conceptCompare": "年齡問題中「年齡和」每過 1 年會增加 2 歲，但「年齡差」永遠固定；而且「哥哥年齡變 2 倍」時，弟弟是增加相同的年數，絕對不是乘以 2！",
      "examVariations": "另一常見題型問「當哥哥年齡是弟弟年齡的 2 倍時，弟弟幾歲？」此時畫線段圖可知 1 份等於年齡差 13 歲，弟弟是 13 歲。"
    }
  },
  {
    "id": "EX2-HESHUN-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 三、填充題 第2題(1)~(4)",
    "batch": "段考真題",
    "category": "放大圖的邊長、角、周長與面積",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "2. 甲圖是邊長 10 公分的正方形，乙圖是甲圖的 2.5 倍放大圖。",
    "stemImage": "images/exams/EXAM_MID2/crop_heshun_sq_10cm.png",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "figureSvg": "<svg viewBox=\"0 0 340 160\" width=\"100%\" style=\"max-width:320px;background:#fff;border:1px solid #cbd5e1;border-radius:8px\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"24\" y=\"46\" width=\"50\" height=\"50\" fill=\"rgba(59,130,246,0.12)\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n  <text x=\"49\" y=\"75\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\">甲</text>\n  <text x=\"49\" y=\"39\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1e40af\">10 公分</text>\n  <text x=\"12\" y=\"75\" text-anchor=\"middle\" font-size=\"10\" fill=\"#1e40af\">10</text>\n  <text x=\"115\" y=\"75\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">2.5 倍放大 →</text>\n  <rect x=\"195\" y=\"16\" width=\"125\" height=\"125\" fill=\"rgba(16,185,129,0.14)\" stroke=\"#059669\" stroke-width=\"2\"/>\n  <text x=\"257\" y=\"82\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#059669\">乙</text>\n  <text x=\"257\" y=\"153\" text-anchor=\"middle\" font-size=\"11\" fill=\"#047857\">邊長 25 公分（每個角 90 度）</text>\n</svg>",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-HESHUN-G02-1",
        "label": "(1)",
        "question": "乙圖的每個邊長是（　　）公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "12.5 公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "250 公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "25 公分",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "4 公分",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "練習將原圖邊長乘以放大倍數（小數倍），求出放大圖的對應邊長。",
          "steps": [
            {
              "type": "text",
              "text": "乙圖是甲圖的 2.5 倍放大圖，邊長也要變成原來的 2.5 倍："
            },
            {
              "type": "eq",
              "expr": "10 × 2.5 = 25",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：乙圖的每個邊長是 25 公分。"
            }
          ],
          "insight": "10 × 2.5 把小數點往右移一位就是 25 公分。",
          "distractorAnalysis": {
            "D": "誤用除法算成 10 ÷ 2.5 ＝ 4 公分（變成了縮小圖）。",
            "A": "誤用加法算成 10 ＋ 2.5 ＝ 12.5 公分。",
            "B": "小數點忘記點，10 × 2.5 誤算成 250 公分。"
          }
        },
        "check": {
          "expr": "10 * 2.5",
          "expect": "25"
        }
      },
      {
        "subId": "EX2-HESHUN-G02-2",
        "label": "(2)",
        "question": "乙圖的每個角是（　　）度。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "225 度",
            "trapCode": "U07_ANGLE_SCALED"
          },
          {
            "key": "B",
            "text": "36 度",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "C",
            "text": "360 度",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "90 度",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "檢核核心觀念：放大圖與縮小圖的對應角大小完全不變。",
          "steps": [
            {
              "type": "text",
              "text": "甲圖是正方形，每個內角都是 90 度。圖形放大 2.5 倍後形狀不變，每個對應角仍然是直角。"
            },
            {
              "type": "answer",
              "text": "答：乙圖的每個角是 90 度。"
            }
          ],
          "insight": "放大縮小只改變邊長，角度永遠不會跟著放大或縮小！",
          "distractorAnalysis": {
            "A": "超級陷阱！誤把角度 90 度也乘以 2.5 倍（90 × 2.5 ＝ 225 度）。",
            "B": "誤用 90 ÷ 2.5 ＝ 36 度，以為角度也要變動。",
            "C": "360 度是四個內角的總和，題目問的是「每個角」。"
          }
        },
        "check": {
          "expr": "90",
          "expect": "90"
        }
      },
      {
        "subId": "EX2-HESHUN-G02-3",
        "label": "(3)",
        "question": "乙圖的周長是（　　）公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "100 公分",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "40 公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "250 公分",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "D",
            "text": "625 公分",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "由放大後的正方形邊長 25 公分計算周長，並驗證周長也是原來的 2.5 倍。",
          "steps": [
            {
              "type": "text",
              "text": "乙圖邊長是 25 公分，正方形周長 ＝ 邊長 × 4："
            },
            {
              "type": "eq",
              "expr": "25 × 4 = 100",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：乙圖的周長是 100 公分。"
            }
          ],
          "insight": "也可先算甲圖周長 10 × 4 ＝ 40 公分，再乘以 2.5 倍 ＝ 100 公分！",
          "distractorAnalysis": {
            "B": "算成原本甲圖的周長 10 × 4 ＝ 40 公分，忘了已經放大 2.5 倍。",
            "C": "把甲圖面積 100 乘以 2.5 算成 250，混淆周長與面積。",
            "D": "把面積 25 × 25 ＝ 625 當成周長。"
          }
        },
        "check": {
          "expr": "10 * 2.5 * 4",
          "expect": "100"
        }
      },
      {
        "subId": "EX2-HESHUN-G02-4",
        "label": "(4)",
        "question": "乙圖的面積是（　　）平方公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "500 平方公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "625 平方公分",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "250 平方公分",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "D",
            "text": "100 平方公分",
            "trapCode": "U07_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "理解正方形放大 2.5 倍後，邊長 × 邊長使面積放大為 2.5 × 2.5 ＝ 6.25 倍。",
          "steps": [
            {
              "type": "text",
              "text": "利用乙圖的邊長 25 公分，計算正方形面積 ＝ 邊長 × 邊長："
            },
            {
              "type": "eq",
              "expr": "25 × 25 = 625",
              "unit": "平方公分"
            },
            {
              "type": "answer",
              "text": "答：乙圖的面積是 625 平方公分。"
            }
          ],
          "insight": "長與寬各放大 2.5 倍，所以面積會放大 2.5 × 2.5 ＝ 6.25 倍（100 × 6.25 ＝ 625 平方公分）！",
          "distractorAnalysis": {
            "C": "高頻錯誤！先算出甲圖面積 100 平方公分，再誤以為面積只放大 2.5 倍（100 × 2.5 ＝ 250）。",
            "D": "算成原本甲圖的面積 10 × 10 ＝ 100 平方公分。",
            "A": "誤算成甲圖面積 100 × (2.5 × 2) ＝ 500 平方公分。"
          }
        },
        "check": {
          "expr": "(10 * 2.5) * (10 * 2.5)",
          "expect": "625"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "圖形放大 □ 倍：對應邊長 × □、周長 × □、面積 × (□ × □)、對應角不變"
      ],
      "conceptCompare": "「邊長與周長」是線段長度，只放大 2.5 倍；「面積」是二維乘積，會放大 2.5 × 2.5 ＝ 6.25 倍；「角度」則是完全不變！",
      "examVariations": "若題目只問「乙圖面積是甲圖面積的幾倍？」不要回答 2.5 倍，要回答 2.5 × 2.5 ＝ 6.25 倍！"
    }
  },
  {
    "id": "EX2-HESHUN-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 三、填充題 第3題(1)~(2)",
    "batch": "段考真題",
    "category": "分數倍數求基準量",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "3. 一盒餅乾，哥哥吃掉的數量是全部餅乾的 4/7 倍，",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-HESHUN-G03-1",
        "label": "(1)",
        "question": "剩下的量是全部餅乾的（　　）倍",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1 4/7 倍",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "B",
            "text": "7/3 倍",
            "trapCode": "U05_RECIPROCAL_MISS"
          },
          {
            "key": "C",
            "text": "3/7 倍",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "4/7 倍",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "把全部餅乾當作基準量 1，扣除吃掉的倍數求出剩下的倍數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把全部餅乾當作基準量 1，減去哥哥吃掉的 4/7 倍："
            },
            {
              "type": "eq",
              "expr": "1 - 4/7 = 3/7",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：剩下的量是全部餅乾的 3/7 倍。"
            }
          ],
          "insight": "全部就是 1（7/7），吃掉 4/7 就剩下 3/7！",
          "distractorAnalysis": {
            "D": "4/7 是「哥哥吃掉」的倍數，題目問的是「剩下的量」。",
            "A": "誤把 1 和 4/7 加起來變成 1 4/7 倍。",
            "B": "分子與分母倒過來寫成 7/3 倍。"
          }
        },
        "check": {
          "expr": "1 - 4/7",
          "expect": "3/7"
        }
      },
      {
        "subId": "EX2-HESHUN-G03-2",
        "label": "(2)",
        "question": "如果剩下的餅乾有 21 塊，這盒餅乾原本有（　　）塊。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "9 塊",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "B",
            "text": "36 塊",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "12 塊",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "49 塊",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "利用第 (1) 題求出的「剩下倍數 3/7」，以「比較量 ÷ 對應倍數 ＝ 基準量」反推全部餅乾數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：剩下的 21 塊對應全部餅乾的 3/7 倍，求基準量（全部餅乾）要用除法："
            },
            {
              "type": "eq",
              "expr": "21 ÷ 3/7 = 21 × 7/3 = 49",
              "unit": "塊"
            },
            {
              "type": "answer",
              "text": "答：這盒餅乾原本有 49 塊。"
            }
          ],
          "insight": "21 塊剛好是 3 份，先算 1 份 ＝ 21 ÷ 3 ＝ 7 塊，全部 7 份就是 7 × 7 ＝ 49 塊！",
          "distractorAnalysis": {
            "A": "誤用乘法算成 21 × 3/7 ＝ 9 塊，原本全部的餅乾不可能比剩下的 21 塊還少。",
            "B": "誤用吃掉的 4/7 來除：21 ÷ 4/7 ＝ 36.75（或隨意湊成 36），忘記 21 塊是「剩下」不是「吃掉」。",
            "C": "算成 21 × 4/7 ＝ 12 塊。"
          }
        },
        "check": {
          "expr": "21 / (1 - 4/7)",
          "expect": "49"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "剩下的倍數 ＝ 1 − 用掉的倍數",
        "全部的量（基準量）＝ 剩下的數量 ÷ 剩下的倍數"
      ],
      "conceptCompare": "算基準量之前一定要「量率對應」：題目給的是「剩下 21 塊」，除數就必須用「剩下的倍數 3/7」，不能直接拿「吃掉的 4/7」來除！",
      "examVariations": "進階題會直接省略第 (1) 小題，直接問「吃掉 4/7 盒後剩下 21 塊，原本有幾塊？」解法一樣是先算 1 − 4/7 ＝ 3/7 再除。"
    }
  },
  {
    "id": "EX2-HESHUN-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 三、填充題 第4題(1)~(4)",
    "batch": "段考真題",
    "category": "基準量與比較量判別",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "4. 爸爸的體重是 90 公斤，媽媽的體重是 60 公斤，妹妹的體重是 18 公斤。問：妹妹的體重是爸爸的體重多少倍？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-HESHUN-G04-1",
        "label": "(1)",
        "question": "誰的體重是基準量？（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "爸爸",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "妹妹",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "媽媽",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "兩者都不是",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "A",
        "skipOptionNumMatch": true,
        "explanation": {
          "examPurpose": "從問句「妹妹的體重是爸爸的體重多少倍？」辨識基準量。",
          "steps": [
            {
              "type": "text",
              "text": "「妹妹的體重是爸爸的體重多少倍」當中，「是」後面、作為比較對象的「爸爸的體重（90 公斤）」就是基準量。"
            },
            {
              "type": "answer",
              "text": "答：爸爸的體重是基準量。"
            }
          ],
          "insight": "口訣：「甲是乙的多少倍」，跟在「是」後面或「的幾倍」前面的乙就是基準量！",
          "distractorAnalysis": {
            "B": "妹妹的體重是要被比較的對象，屬於比較量，不是基準量。",
            "C": "題目只比較妹妹與爸爸，媽媽體重 60 公斤是多餘條件，不是基準量。",
            "D": "問句中已經明確指出以爸爸的體重作為基準。"
          }
        },
        "check": {
          "expr": "90",
          "expect": "90"
        }
      },
      {
        "subId": "EX2-HESHUN-G04-2",
        "label": "(2)",
        "question": "誰的體重是比較量？（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "兩者都不是",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "妹妹",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "爸爸",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "媽媽",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "B",
        "skipOptionNumMatch": true,
        "explanation": {
          "examPurpose": "辨識「妹妹的體重是爸爸的體重多少倍？」中的比較量。",
          "steps": [
            {
              "type": "text",
              "text": "問句把「妹妹的體重」拿來和爸爸比較，所以「妹妹的體重（18 公斤）」就是比較量。"
            },
            {
              "type": "answer",
              "text": "答：妹妹的體重是比較量。"
            }
          ],
          "insight": "「甲是乙的多少倍」裡面的主角甲（妹妹）就是比較量！",
          "distractorAnalysis": {
            "C": "爸爸的體重是當作 1 的基準量，不是比較量。",
            "D": "媽媽的體重 60 公斤沒有參與這個問句的比較。",
            "A": "問句明確將妹妹的體重拿來當作比較量。"
          }
        },
        "check": {
          "expr": "18",
          "expect": "18"
        }
      },
      {
        "subId": "EX2-HESHUN-G04-3",
        "label": "(3)",
        "question": "妹妹的體重是爸爸的體重多少倍？（　　）倍",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "0.3 倍",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "72 倍",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "0.2 倍",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "5 倍",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "依照「比較量 ÷ 基準量 ＝ 倍數（比值）」正確列式計算。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：用比較量（妹妹 18 公斤）除以基準量（爸爸 90 公斤）："
            },
            {
              "type": "eq",
              "expr": "18 ÷ 90 = 1/5 = 0.2",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：妹妹的體重是爸爸的體重 0.2 倍（或 1/5 倍）。"
            }
          ],
          "insight": "妹妹比爸爸輕，所以算出的倍數一定比 1 小（0.2 倍）！",
          "distractorAnalysis": {
            "D": "把比較量跟基準量放反，算成 90 ÷ 18 ＝ 5 倍（那是爸爸是妹妹的幾倍）。",
            "A": "誤拿妹妹 18 公斤除以媽媽 60 公斤（18 ÷ 60 ＝ 0.3 倍）。",
            "B": "誤用減法 90 − 18 ＝ 72，把相差公斤數當成倍數。"
          }
        },
        "check": {
          "expr": "18 / 90",
          "expect": "0.2"
        }
      },
      {
        "subId": "EX2-HESHUN-G04-4",
        "label": "(4)",
        "question": "把爸爸的體重當作基準量 1，那麼妹妹的體重相當於（　　）。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "5",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "0.3",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "C",
            "text": "0.67",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "0.2",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "建立「基準量當作 1，比較量就相當於比值 0.2」的觀念連結。",
          "steps": [
            {
              "type": "text",
              "text": "由第 (3) 小題得知妹妹體重是爸爸的 0.2 倍，因此把爸爸當作 1 時，妹妹就相當於 1 × 0.2 ＝ 0.2。"
            },
            {
              "type": "eq",
              "expr": "1 × 0.2 = 0.2"
            },
            {
              "type": "answer",
              "text": "答：妹妹的體重相當於 0.2（或 1/5）。"
            }
          ],
          "insight": "基準量永遠當成 1，比較量是基準量的幾倍，就相當於那個比值本身！",
          "distractorAnalysis": {
            "A": "誤把妹妹當作基準量 1，反算出爸爸相當於 5。",
            "B": "誤用媽媽體重 60 公斤當基準量算成 18 ÷ 60 ＝ 0.3。",
            "C": "誤算成媽媽體重除以爸爸體重（60 ÷ 90 ≈ 0.67）。"
          }
        },
        "check": {
          "expr": "18 / 90",
          "expect": "0.2"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "比值（倍數）＝ 比較量 ÷ 基準量",
        "當題幹出現多餘數據（如媽媽 60 公斤）時，要根據問句篩選真正需要的兩個量"
      ],
      "conceptCompare": "「妹妹是爸爸的幾倍」用 18 ÷ 90 ＝ 0.2；「爸爸是妹妹的幾倍」用 90 ÷ 18 ＝ 5，兩者剛好互為倒數！",
      "examVariations": "常改問「如果把妹妹體重當作 1，爸爸體重相當於多少？」答案就變成 90 ÷ 18 ＝ 5。"
    }
  },
  {
    "id": "EX2-HESHUN-G05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 四、比例尺 第(1)~(3)題",
    "batch": "段考真題",
    "category": "線段比例尺轉最簡整數比",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "四、將下面的比例尺用比表示？（註：比例尺 1 格為 1 公分）（用最簡整數比表示）",
    "stemImage": "images/exams/EXAM_MID2/crop_heshun_scale_4a.png",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p1.png",
    "figureSvg": "<svg viewBox=\"0 0 340 165\" width=\"100%\" style=\"max-width:330px;background:#fff;border:1px solid #cbd5e1;border-radius:8px\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"22\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">(1) 2 格（2 公分）代表 3 公尺：</text>\n  <rect x=\"20\" y=\"30\" width=\"45\" height=\"10\" fill=\"#1e293b\" stroke=\"#1e293b\"/>\n  <rect x=\"65\" y=\"30\" width=\"45\" height=\"10\" fill=\"#fff\" stroke=\"#1e293b\"/>\n  <text x=\"16\" y=\"54\" font-size=\"11\" fill=\"#334155\">0</text>\n  <text x=\"102\" y=\"54\" font-size=\"11\" fill=\"#334155\">3 公尺</text>\n  <text x=\"14\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">(2) 3 格（3 公分）代表 45 公里：</text>\n  <rect x=\"20\" y=\"84\" width=\"45\" height=\"10\" fill=\"#1e293b\" stroke=\"#1e293b\"/>\n  <rect x=\"65\" y=\"84\" width=\"45\" height=\"10\" fill=\"#fff\" stroke=\"#1e293b\"/>\n  <rect x=\"110\" y=\"84\" width=\"45\" height=\"10\" fill=\"#1e293b\" stroke=\"#1e293b\"/>\n  <text x=\"16\" y=\"108\" font-size=\"11\" fill=\"#334155\">0</text>\n  <text x=\"145\" y=\"108\" font-size=\"11\" fill=\"#334155\">45 公里</text>\n  <text x=\"14\" y=\"130\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">(3) 3 格（3 公分）代表 9 公尺：</text>\n  <path d=\"M 20 138 L 20 146 L 155 146 L 155 138 M 65 140 L 65 146 M 110 140 L 110 146\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"16\" y=\"159\" font-size=\"11\" fill=\"#334155\">0</text>\n  <text x=\"145\" y=\"159\" font-size=\"11\" fill=\"#334155\">9 公尺</text>\n</svg>",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-HESHUN-G05-1",
        "label": "(1)",
        "question": "圖示為 1 黑格加 1 白格共 2 格，起點 0 到終點 3 公尺，比為（　　）",
        "stemImage": "images/exams/EXAM_MID2/crop_heshun_scale_4a.png",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1：150",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "1：300",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "C",
            "text": "1：3",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "D",
            "text": "2：3",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "A",
        "skipOptionNumMatch": true,
        "explanation": {
          "examPurpose": "練習看懂 2 格（2 公分）的線段比例尺，並換算相同單位後化為最簡整數比。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：數一數圖示共有 1 黑格 ＋ 1 白格 ＝ 2 格，題目註明 1 格為 1 公分，所以圖上距離是 2 公分，代表實際 3 公尺。"
            },
            {
              "type": "text",
              "text": "第 2 步：把實際距離 3 公尺換算成公分：3 公尺 ＝ 300 公分。"
            },
            {
              "type": "eq",
              "expr": "2 ÷ 2 = 1",
              "unit": "（前項除以 2）"
            },
            {
              "type": "eq",
              "expr": "300 ÷ 2 = 150",
              "unit": "（後項除以 2）"
            },
            {
              "type": "answer",
              "text": "答：比為 1：150。"
            }
          ],
          "insight": "寫比例尺前一定要做兩件事：①數清楚有幾格（幾公分）；②把公尺或公里全部換算成公分再約分！",
          "distractorAnalysis": {
            "B": "只看到 0 到 3 公尺，忘記圖上有 2 格（2 公分），誤把 1 公分當作 3 公尺算成 1：300。",
            "C": "忘記把公尺換算成公分（1 公尺 ＝ 100 公分）。",
            "D": "直接寫成 2 公分：3 公尺，單位沒有統一也沒有約分。"
          }
        },
        "check": {
          "expr": "3 * 100 / 2",
          "expect": "150"
        }
      },
      {
        "subId": "EX2-HESHUN-G05-2",
        "label": "(2)",
        "question": "圖示為黑、白、黑共 3 格，起點 0 到終點 45 公里，比為（　　）",
        "stemImage": "images/exams/EXAM_MID2/crop_heshun_scale_4b.png",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1：15000",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "1：1500000",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "1：4500000",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "D",
            "text": "1：150000",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "B",
        "skipOptionNumMatch": true,
        "explanation": {
          "examPurpose": "練習將「3 格 ＝ 45 公里」的線段比例尺換算成公分並化為最簡整數比。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：數出圖示共有黑、白、黑 3 格，也就是 3 公分代表實際 45 公里。"
            },
            {
              "type": "text",
              "text": "第 2 步：先求 1 公分代表多少公里：45 ÷ 3 ＝ 15 公里。"
            },
            {
              "type": "text",
              "text": "第 3 步：1 公里 ＝ 1000 公尺 ＝ 100000 公分（5 個 0），把 15 公里換算成公分："
            },
            {
              "type": "eq",
              "expr": "15 × 100000 = 1500000",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：比為 1：1500000。"
            }
          ],
          "insight": "秒記換算口訣：1 公里 ＝ 100000 公分（後面加 5 個 0）！先用 45 ÷ 3 ＝ 15 公里，再補 5 個 0 就是 1500000！",
          "distractorAnalysis": {
            "C": "忘記圖上是 3 格（3 公分），直接用 45 公里去換算成 1：4500000。",
            "D": "公里換公分少寫 1 個 0（1 公里是 5 個 0，誤記成 4 個 0）。",
            "A": "只把公里換算成公尺（15 × 1000 ＝ 15000 公尺），忘記再換成公分。"
          }
        },
        "check": {
          "expr": "45 * 100000 / 3",
          "expect": "1500000"
        }
      },
      {
        "subId": "EX2-HESHUN-G05-3",
        "label": "(3)",
        "question": "圖示為 3 等分刻度線段共 3 格，起點 0 到終點 9 公尺，比為（　　）",
        "stemImage": "images/exams/EXAM_MID2/crop_heshun_scale_4c.png",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1：3",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "1：30",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "1：300",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "1：900",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          }
        ],
        "answer": "C",
        "skipOptionNumMatch": true,
        "explanation": {
          "examPurpose": "辨識線段刻度型比例尺共分成 3 格（3 公分），並正確化為最簡整數比。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：從 0 到 9 公尺中間共有 3 段等長格子（3 公分），所以 3 公分代表 9 公尺。"
            },
            {
              "type": "eq",
              "expr": "9 ÷ 3 = 3",
              "unit": "公尺（圖上 1 公分代表實際 3 公尺）"
            },
            {
              "type": "eq",
              "expr": "3 × 100 = 300",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：比為 1：300。"
            }
          ],
          "insight": "不管比例尺畫成黑白方條還是刻度線段，一樣先數有幾「格（段）」！4 條豎線中間夾的是 3 格。",
          "distractorAnalysis": {
            "D": "忘記先除以 3 格，直接把 9 公尺換成 900 公分寫成 1：900。",
            "A": "忘記把公尺換算成公分（1 公尺 ＝ 100 公分）。",
            "B": "單位換算錯把 1 公尺當成 10 公分，少寫 1 個 0。"
          }
        },
        "check": {
          "expr": "9 * 100 / 3",
          "expect": "300"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上距離：實際距離（兩者必須換算成相同單位：公分）",
        "1 公尺 ＝ 100 公分（加 2 個 0）；1 公里 ＝ 100000 公分（加 5 個 0）"
      ],
      "conceptCompare": "看線段比例尺最容易錯在「沒有數清楚終點數字是第幾格」：一定要從 0 開始數有幾段格子，先除出「1 公分代表多少」再換單位！",
      "examVariations": "若題目要求改寫成「比值」，就把 1：300 寫成分數 1/300；寫成「比」則必須保留冒號 1：300。"
    }
  },
  {
    "id": "EX2-HESHUN-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "年齡問題",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 五、應用題 第1題",
    "batch": "段考真題",
    "category": "年齡問題",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "1. 小順今年 12 歲，爸爸今年 45 歲。當小順 33 歲時，爸爸是幾歲呢？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "options": [
      {
        "key": "A",
        "text": "54 歲",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "B",
        "text": "78 歲",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "67 歲",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "66 歲",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "運用「兩人年齡差永遠不變」或「經過相同年數」解決年齡問題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出爸爸和小順相差幾歲（年齡差永遠不變）："
        },
        {
          "type": "eq",
          "expr": "45 - 12 = 33",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "第 2 步：當小順 33 歲時，爸爸還是比小順大 33 歲："
        },
        {
          "type": "eq",
          "expr": "33 + 33 = 66",
          "unit": "歲"
        },
        {
          "type": "answer",
          "text": "答：爸爸是 66 歲。"
        }
      ],
      "insight": "小順長大到 33 歲（過了 21 年），爸爸也一樣長大 21 歲（45 ＋ 21 ＝ 66 歲）；用年齡差 33 ＋ 33 ＝ 66 更快！",
      "distractorAnalysis": {
        "A": "算錯經過年數或誤把 33 − 12 ＝ 21 加錯，算成 45 ＋ 9 ＝ 54 歲。",
        "B": "誤把爸爸今年的 45 歲直接加上小順後來的 33 歲（45 ＋ 33 ＝ 78 歲）。",
        "C": "加法進位粗心算成 67 歲。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 大年齡 − 小年齡（不變）",
        "經過年數 ＝ 後來年齡 − 今年年齡"
      ],
      "conceptCompare": "兩種做法結果一樣：①年齡差法（45 − 12 ＋ 33 ＝ 66）；②經過年數法（33 − 12 ＋ 45 ＝ 66）。",
      "examVariations": "常改問「幾年後，爸爸的年齡剛好是小順的 2 倍？」用年齡差 33 ÷ (2 − 1) ＝ 33 歲，再減今年 12 歲得 21 年後！"
    },
    "check": {
      "expr": "45 + (33 - 12)",
      "expect": "66"
    },
    "work": "sm"
  },
  {
    "id": "EX2-HESHUN-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與周長",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 五、應用題 第2題",
    "batch": "段考真題",
    "category": "扇形周長與圈數",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "2. 阿智沿著 1/5 圓扇形、半徑是 25 公尺的公園走 10 圈，是走了多少公尺？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "options": [
      {
        "key": "A",
        "text": "814 公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "314 公尺",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "564 公尺",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "D",
        "text": "1570 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗「扇形周長 ＝ 弧長 ＋ 兩條半徑」，並乘以行走圈數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算 1/5 圓扇形的弧長（直徑 ＝ 25 × 2 ＝ 50 公尺）："
        },
        {
          "type": "eq",
          "expr": "25 × 2 × 3.14 × 1/5 = 31.4",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：公園走一圈的周長，要把弧長加上兩條半徑（25 × 2 ＝ 50 公尺）："
        },
        {
          "type": "eq",
          "expr": "31.4 + 25 × 2 = 81.4",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 3 步：走了 10 圈的總距離："
        },
        {
          "type": "eq",
          "expr": "81.4 × 10 = 814",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：阿智共走了 814 公尺。"
        }
      ],
      "insight": "繞扇形公園走 1 圈，走到弧線盡頭還要沿兩條直直的半徑走回起點！1 圈 ＝ 31.4 ＋ 50 ＝ 81.4 公尺，乘 10 圈就是 814 公尺。",
      "distractorAnalysis": {
        "B": "最常見陷阱！只算了弧長 31.4 × 10 ＝ 314 公分／公尺，忘記扇形周長要加上兩條半徑 50 公尺。",
        "C": "只加了一條半徑（31.4 ＋ 25 ＝ 56.4），走 10 圈算成 564 公尺。",
        "D": "忘了算 1/5 圓或直徑半徑算錯，直接算成全圓圓周長 157 × 10 ＝ 1570 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 圓周長 × 幾分之幾圓 ＋ 半徑 × 2"
      ],
      "conceptCompare": "看到「沿著扇形公園走幾圈」就一定是算「扇形周長」（弧長＋2 條半徑），不是只算「弧長」。",
      "examVariations": "可能改給「圓心角 72 度的扇形」，72 ÷ 360 ＝ 1/5 圓，後續算式完全相同！"
    },
    "check": {
      "expr": "(25 * 2 * 3.14 * 1/5 + 25 * 2) * 10",
      "expect": "814"
    },
    "work": "md"
  },
  {
    "id": "EX2-HESHUN-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-1",
    "sectionName": "和差問題",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 五、應用題 第3題",
    "batch": "段考真題",
    "category": "長方形周長與和差問題",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "3. 用一條長 550 公分的繩子，繞一個長方形的書桌桌面後，還剩下 70 公分，且書桌桌面的寬比長少 80 公分，這個長方形的書桌桌面長是多少公分？寬是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "書桌寬",
          "units": 1,
          "role": "base"
        },
        {
          "label": "書桌長",
          "units": 2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "長 ＋ 寬 ＝ 240 公分（長比寬多 80 公分）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "長 120 公分、寬 40 公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "長 160 公分、寬 80 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "長 280 公分、寬 200 公分",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "D",
        "text": "長 315 公分、寬 235 公分",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "結合「剩餘繩長求周長」、「周長 ÷ 2 ＝ 長 ＋ 寬」與「和差問題」三層解題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：總繩長減去剩下的 70 公分，就是長方形桌面的周長："
        },
        {
          "type": "eq",
          "expr": "550 - 70 = 480",
          "unit": "公分（桌面周長）"
        },
        {
          "type": "text",
          "text": "第 2 步：周長包含 2 個長和 2 個寬，所以周長除以 2 才是「1 個長 ＋ 1 個寬」的和："
        },
        {
          "type": "eq",
          "expr": "480 ÷ 2 = 240",
          "unit": "公分（長 ＋ 寬的和）"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 3 步：套用和差公式（長 ＋ 寬 ＝ 240，長 − 寬 ＝ 80）："
        },
        {
          "type": "eq",
          "expr": "(240 + 80) ÷ 2 = 160",
          "unit": "公分（長）"
        },
        {
          "type": "eq",
          "expr": "160 - 80 = 80",
          "unit": "公分（寬）"
        },
        {
          "type": "answer",
          "text": "答：長是 160 公分、寬是 80 公分。"
        }
      ],
      "insight": "大魔王關卡在第二步：480 是「2 個長 ＋ 2 個寬」，一定要先 ÷ 2 變成 240，才能套用和差公式！",
      "figureNote": "長與寬的和為 240 公分、差為 80 公分，補上 80 公分變成兩個一樣長的邊共 320 公分，除以 2 就得長 160 公分。",
      "distractorAnalysis": {
        "C": "大魔王陷阱！算出周長 480 後忘記先除以 2，直接套 (480 ＋ 80) ÷ 2 ＝ 280。",
        "D": "既忘記扣掉剩下的 70 公分，也忘記將周長除以 2，直接拿 550 套和差公式。",
        "A": "算出長 ＋ 寬 ＝ 240 後，誤先將 240 ÷ 2 ＝ 120 當作長，再減 80 得寬 40。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方形周長 ÷ 2 ＝ 長 ＋ 寬",
        "和差問題：大數 ＝ (和 ＋ 差) ÷ 2；小數 ＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "寫完後務必驗算：長 160 ＋ 寬 80 ＝ 240，周長 240 × 2 ＝ 480，加上剩下 70 ＝ 550 公分，完全吻合！",
      "examVariations": "若改為「不夠 70 公分」，桌面周長就變成 550 ＋ 70 ＝ 620 公分，其餘步驟相同。"
    },
    "check": {
      "expr": "((550 - 70) / 2 + 80) / 2",
      "expect": "160",
      "extraChecks": [
        {
          "expr": "((550 - 70) / 2 - 80) / 2",
          "expect": "80"
        }
      ]
    },
    "work": "lg"
  },
  {
    "id": "EX2-HESHUN-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題（假設法）",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 五、應用題 第4題",
    "batch": "段考真題",
    "category": "雞兔問題與篩選有效資訊",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "4. 和順國小印製面額 20 元和 50 元的園遊券給學生使用。六年十班結算銷售金額為 2200 元，其中統計出收到園遊券的張數為 34 張，且園遊券的總金額為 1040 元，六年十班收到多少張 20 元的園遊券？多少張 50 元的園遊券？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "options": [
      {
        "key": "A",
        "text": "20 元 20 張、50 元 14 張",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "20 元 18 張、50 元 16 張",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "C",
        "text": "20 元 22 張、50 元 12 張",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "20 元 12 張、50 元 22 張",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "在素養長文中排除干擾數字（銷售金額 2200 元），運用假設法解雞兔問題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目問「收到」幾張 20 元與 50 元園遊券，所以要用「收到 34 張、總金額 1040 元」（銷售金額 2200 元是干擾條件）。"
        },
        {
          "type": "text",
          "text": "第 2 步：假設 34 張全部都是 20 元園遊券："
        },
        {
          "type": "eq",
          "expr": "20 × 34 = 680",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：與實際金額 1040 元的差額，除以每換一張 50 元增加的 30 元："
        },
        {
          "type": "eq",
          "expr": "(1040 - 680) ÷ (50 - 20) = 360 ÷ 30 = 12",
          "unit": "張（50 元園遊券）"
        },
        {
          "type": "eq",
          "expr": "34 - 12 = 22",
          "unit": "張（20 元園遊券）"
        },
        {
          "type": "answer",
          "text": "答：收到 20 元園遊券 22 張、50 元園遊券 12 張。"
        }
      ],
      "insight": "假設全部都是 20 元，最後除出來的答案一定是「另一種」50 元的張數！別忘了最後一定要驗算 20 × 22 ＋ 50 × 12 ＝ 1040 元！",
      "distractorAnalysis": {
        "D": "把算出的 50 元 12 張跟 20 元 22 張寫反了！假設全 20 元算出來的是 50 元張數喔。",
        "A": "計算差額或除法時出錯。",
        "B": "忘記先除單張差額 30 元，或誤拿 2200 元來猜測調整。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全部是小數：大數個數 ＝ (實際總數 − 小數 × 總個數) ÷ (大數 − 小數)"
      ],
      "conceptCompare": "如果一開始假設全部是 50 元（50 × 34 ＝ 1700 元），就會算出 20 元 ＝ (1700 − 1040) ÷ 30 ＝ 22 張，一樣可以算出正解！",
      "examVariations": "素養題常故意安插「原本帶去 2200 元」等無關條件，讀題時先圈出問題要問的對象是「收到園遊券」。"
    },
    "check": {
      "expr": "(1040 - 20 * 34) / (50 - 20)",
      "expect": "12",
      "extraChecks": [
        {
          "expr": "34 - (1040 - 20 * 34) / (50 - 20)",
          "expect": "22"
        }
      ]
    },
    "work": "lg"
  },
  {
    "id": "EX2-HESHUN-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "secondaryUnitIds": [
      "U06"
    ],
    "section": "7-3",
    "sectionName": "比例尺與圓周長整合",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 五、應用題 第5題",
    "batch": "段考真題",
    "category": "比例尺與半圓周長",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "question": "5. 在比例尺為 0 到 20 公里（圖上共 5 格為 5 公分）的地圖上，有一個半圓形的草莓園，半徑為 5 公分，則此半圓形草莓園的實際周長大約是多少公里？（註：比例尺 1 格為 1 公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_heshun_scale_5.png",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "figureSvg": "<svg viewBox=\"0 0 340 135\" width=\"100%\" style=\"max-width:320px;background:#fff;border:1px solid #cbd5e1;border-radius:8px\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"14\" y=\"22\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">比例尺（5 格共 5 公分 ＝ 20 公里，1 公分 ＝ 4 公里）：</text>\n  <rect x=\"20\" y=\"34\" width=\"36\" height=\"10\" fill=\"#1e293b\" stroke=\"#1e293b\"/>\n  <rect x=\"56\" y=\"34\" width=\"36\" height=\"10\" fill=\"#fff\" stroke=\"#1e293b\"/>\n  <rect x=\"92\" y=\"34\" width=\"36\" height=\"10\" fill=\"#1e293b\" stroke=\"#1e293b\"/>\n  <rect x=\"128\" y=\"34\" width=\"36\" height=\"10\" fill=\"#fff\" stroke=\"#1e293b\"/>\n  <rect x=\"164\" y=\"34\" width=\"36\" height=\"10\" fill=\"#1e293b\" stroke=\"#1e293b\"/>\n  <text x=\"16\" y=\"58\" font-size=\"11\" fill=\"#334155\">0</text>\n  <text x=\"186\" y=\"58\" font-size=\"11\" fill=\"#334155\">20 公里</text>\n  <path d=\"M 40 112 A 60 60 0 0 1 160 112 Z\" fill=\"rgba(244,63,94,0.16)\" stroke=\"#e11d48\" stroke-width=\"2\"/>\n  <line x1=\"100\" y1=\"112\" x2=\"160\" y2=\"112\" stroke=\"#9f1239\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n  <text x=\"172\" y=\"96\" font-size=\"11\" fill=\"#9f1239\">圖上半徑 5 公分 → 實際半徑 20 公里</text>\n  <text x=\"172\" y=\"114\" font-size=\"11\" fill=\"#9f1239\">周長 ＝ 半圓弧長 ＋ 直徑（40 公里）</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "62.8 公里",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "51.4 公里",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "25.7 公里",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "102.8 公里",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "整合「線段比例尺判讀」、「實際半徑換算」與「半圓周長 ＝ 半圓弧長 ＋ 直徑」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：原卷比例尺從 0 到 20 公里共有 5 格（5 公分），先算出地圖上 1 公分代表實際幾公里："
        },
        {
          "type": "eq",
          "expr": "20 ÷ 5 = 4",
          "unit": "公里"
        },
        {
          "type": "text",
          "text": "第 2 步：地圖上半徑 5 公分，換算成草莓園的實際半徑（也可看成 5 公分剛好等於比例尺全長 20 公里）："
        },
        {
          "type": "eq",
          "expr": "5 × 4 = 20",
          "unit": "公里（實際半徑），實際直徑 ＝ 20 × 2 ＝ 40 公里"
        },
        {
          "type": "text",
          "text": "第 3 步：半圓形草莓園的實際周長 ＝ 半圓弧長 ＋ 直徑："
        },
        {
          "type": "eq",
          "expr": "40 × 3.14 ÷ 2 + 40 = 62.8 + 40 = 102.8",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：此半圓形草莓園的實際周長大約是 102.8 公里。"
        }
      ],
      "insight": "雙重把關才不失分：①比例尺有 5 格，1 公分是 4 公里，半徑 5 公分剛好就是 20 公里；②半圓周長一定要記得加回直徑 40 公里！",
      "distractorAnalysis": {
        "A": "只算了半圓弧長 62.8 公里，忘記加上下面的直徑 40 公里。",
        "B": "誤把實際半徑 20 公里當作直徑去算（20 × 3.14 ÷ 2 ＋ 20 ＝ 51.4 公里）。",
        "C": "只算了地圖上的周長（10 × 3.14 ÷ 2 ＋ 10 ＝ 25.7 公分），忘記乘以比例尺倍率。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公分代表的實際距離 ＝ 終點刻度 ÷ 總格數",
        "半圓周長 ＝ 直徑 × 3.14 ÷ 2 ＋ 直徑"
      ],
      "conceptCompare": "圖上週長先算出 25.7 公分再乘以「1 公分代表 4 公里」，25.7 × 4 ＝ 102.8 公里，跟先換實際半徑再算周長答案完全一樣！",
      "examVariations": "考題常換成 1/4 圓公園，記得先數清楚比例尺有幾格，再加兩條半徑。"
    },
    "check": {
      "expr": "(5 * (20 / 5)) * 2 * 3.14 / 2 + (5 * (20 / 5)) * 2",
      "expect": "102.8"
    },
    "work": "lg"
  },
  {
    "id": "EX2-HESHUN-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "折扣與百分率應用",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 五、應用題 第6題",
    "batch": "段考真題",
    "category": "折扣省下金額",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "6. 大北百貨公司周年慶全面打七五折出售，媽媽買了一件定價 3000 元的洋裝，請問媽媽可以少付多少錢？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "定價（基準量 1）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "七五折售價（0.75）",
          "units": 0.75,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "少付（省下）＝ 1 − 0.75 ＝ 0.25 份"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "750 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2250 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "250 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "75 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "區分折扣題問的是「售價（付多少錢）」還是「折扣掉的差價（少付多少錢）」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：打七五折表示售價是定價的 75%（0.75 倍），所以少付的比例是 1 − 75% ＝ 25%（0.25 倍）。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "3000 × (1 - 0.75) = 3000 × 0.25 = 750",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：媽媽可以少付 750 元。"
        }
      ],
      "insight": "看清題目問「付多少錢」還是「少付（便宜）多少錢」！打七五折就是便宜了 25%，直接 3000 × 0.25 ＝ 750 元更快！",
      "figureNote": "整條定價為 1 份（3000 元），實付售價佔 0.75 份，突出的空白差額 0.25 份就是媽媽少付的 750 元。",
      "distractorAnalysis": {
        "B": "最常見陷阱！3000 × 0.75 ＝ 2250 元是打折後的「售價」，題目問的是「少付多少錢」喔！",
        "C": "把 25% 誤算成 250 元。",
        "D": "小數點移位錯誤，少寫一個 0 算成 75 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "少付金額 ＝ 定價 × (1 − 折數)"
      ],
      "conceptCompare": "「打七五折」實付 75%、少付 25%；「打七折」實付 70%、少付 30%；「打七五折後再減 100」則先乘 0.75 再減 100。",
      "examVariations": "若改為「爸爸買了一條領帶少付了 300 元，剛好是打七五折，領帶定價多少？」則算 300 ÷ (1 − 0.75) ＝ 1200 元。"
    },
    "check": {
      "expr": "3000 * (1 - 75%)",
      "expect": "750"
    },
    "work": "sm"
  },
  {
    "id": "EX2-HESHUN-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和（和倍問題）",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 五、應用題 第7題",
    "batch": "段考真題",
    "category": "和倍問題與小數除法",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "7. 參加路跑活動的人共有 144 人，其中男生人數是女生人數的 0.6 倍，男生有多少人？女生有多少人？",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "女生（基準量 1）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "男生（比較量 0.6）",
          "units": 0.6,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "共有 144 人（1 ＋ 0.6 ＝ 1.6 份）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "男生 64 人、女生 80 人",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "男生 54 人、女生 90 人",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "男生 90 人、女生 54 人",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "男生 86.4 人、女生 57.6 人",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "運用「基準量 ＝ 兩量和 ÷ (1 ＋ 倍數)」與除數為小數的直式除法求男女生人數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：女生人數當作基準量 1 份，男生人數是 0.6 份，總人數合起來是 1 ＋ 0.6 ＝ 1.6 份。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 + 0.6 = 1.6",
          "unit": "份"
        },
        {
          "type": "text",
          "text": "第 2 步：用總人數 144 除以 1.6 份求出基準量（女生人數）："
        },
        {
          "type": "longdiv",
          "dividend": "144",
          "divisor": "1.6",
          "mode": "exact",
          "note": "除數 1.6 小數點右移一位變 16，被除數 144 補一個 0 變 1440"
        },
        {
          "type": "eq",
          "expr": "144 ÷ 1.6 = 90",
          "unit": "人（女生人數）"
        },
        {
          "type": "eq",
          "expr": "144 - 90 = 54",
          "unit": "人（男生人數）"
        },
        {
          "type": "answer",
          "text": "答：男生有 54 人，女生有 90 人。"
        }
      ],
      "insight": "和倍問題先算「1 ＋ 0.6 ＝ 1.6」，而且算出來一定是「當作基準量 1 的女生人數（90 人）」喔！",
      "figureNote": "女生佔 1 份，男生佔 0.6 份，合起來 1.6 份剛好是 144 人。",
      "distractorAnalysis": {
        "C": "算對 90 人與 54 人，但把基準量（女生 90 人）跟比較量（男生 54 人）填反了！",
        "D": "看到 0.6 倍就直接乘以 144（144 × 0.6 ＝ 86.4），忘記人數不能出現小數且應先求 1 ＋ 0.6 份。",
        "A": "除法計算錯誤或錯估成 80 與 64（64 ÷ 80 ＝ 0.8 倍，不是 0.6 倍）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩量和 ÷ (1 ＋ 倍數)",
        "比較量 ＝ 兩量和 − 基準量（或 基準量 × 倍數）"
      ],
      "conceptCompare": "男生是女生的 0.6 倍，所以男生一定比女生少（54 ＜ 90），且 54 ＋ 90 ＝ 144、54 ÷ 90 ＝ 0.6，馬上就能驗算！",
      "examVariations": "若改為「女生比男生多 36 人」，則是差倍問題：36 ÷ (1 − 0.6) ＝ 90 人。"
    },
    "check": {
      "expr": "144 / (1 + 0.6)",
      "expect": "90",
      "extraChecks": [
        {
          "expr": "144 - 144 / (1 + 0.6)",
          "expect": "54"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-HESHUN-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 六、鋪色部分周長 第1題",
    "batch": "段考真題",
    "category": "複合圖形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "1. 圖中鋪色部分的周長大約是多少公分？（單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_heshun_shaded_1.png",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "options": [
      {
        "key": "A",
        "text": "30.7 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "35.7 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "25.7 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "15.7 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗描繪複合圖形「外圍邊界」的能力，分辨實線外框與內部輔助虛線。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：用手指沿著鋪色部分的外圍描一圈，共有「兩條 1/4 圓弧（半徑 5 公分）」和「兩條 5 公分直線段」（中間虛線在內部不算周長）。"
        },
        {
          "type": "text",
          "text": "第 2 步：兩條半徑 5 公分的 1/4 圓弧，合起來剛好是一個半圓弧（1/2 圓周長）："
        },
        {
          "type": "eq",
          "expr": "5 × 2 × 3.14 ÷ 2 = 15.7",
          "unit": "公分（兩段弧長和）"
        },
        {
          "type": "text",
          "text": "第 3 步：加上底下和上方各一條 5 公分的直線段："
        },
        {
          "type": "eq",
          "expr": "15.7 + 5 + 5 = 25.7",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：鋪色部分的周長大約是 25.7 公分。"
        }
      ],
      "insight": "算複合圖形周長先用色筆把塗色邊界描一圈！看得到有幾條弧、幾條直線段，就不會漏邊也不會多算中間虛線。",
      "distractorAnalysis": {
        "D": "只算了兩條 1/4 圓弧（15.7 公分），忘記加上下面與上面兩條 5 公分的直線邊！",
        "A": "誤把中間那條用來切割正方形的虛線（5 公分）也加進周長裡（25.7 ＋ 5 ＝ 30.7 公分）。",
        "B": "多算了正方形左右兩條不是鋪色邊界的邊長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "複合圖形周長 ＝ 所有包圍塗色區域的「外圍曲線弧長 ＋ 外圍直線邊長」"
      ],
      "conceptCompare": "這題如果改問「鋪色部分面積」，把右邊突出的尖角補到左邊白色缺口，剛好變成 1 個邊長 5 公分的正方形（5 × 5 ＝ 25 平方公分），但算「周長」不能把圖形搬移後直接當正方形算，必須乖乖描邊界！",
      "examVariations": "常改問同圖的「鋪色部分面積是多少？」（切補法直接算 5 × 5 ＝ 25 平方公分）。"
    },
    "check": {
      "expr": "5 * 2 * 3.14 / 2 + 5 * 2",
      "expect": "25.7"
    },
    "work": "md"
  },
  {
    "id": "EX2-HESHUN-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "臺南市和順國小",
    "source": "和順國小 114上 第二次段考 六、鋪色部分周長 第2題",
    "batch": "段考真題",
    "category": "複合圖形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "2. 圖中鋪色部分的周長大約是多少公分？（單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_heshun_shaded_2.png",
    "examPageImage": "images/exams/EXAM_MID2/heshun_p2.png",
    "options": [
      {
        "key": "A",
        "text": "47.1 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "67.1 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "117.75 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "57.1 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗大型半圓挖去小型半圓後，塗色部分周長為「大半圓弧 ＋ 小半圓弧 ＋ 實線半徑 10 公分」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：沿鋪色區域外圍描一圈，邊界共有三段：①上方大半圓弧（直徑 10 ＋ 10 ＝ 20 公分）、②右方挖空處小半圓弧（直徑 10 公分）、③左下方實線段（10 公分），右下方虛線不算。"
        },
        {
          "type": "eq",
          "expr": "(10 + 10) × 3.14 ÷ 2 = 31.4",
          "unit": "公分（大半圓弧長）"
        },
        {
          "type": "eq",
          "expr": "10 × 3.14 ÷ 2 = 15.7",
          "unit": "公分（小半圓弧長）"
        },
        {
          "type": "eq",
          "expr": "31.4 + 15.7 + 10 = 57.1",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：鋪色部分的周長大約是 57.1 公分。"
        }
      ],
      "insight": "小半圓挖掉後，弧線反而成為鋪色的新邊界所以要「加上去」，不要用減的！再加上左邊 10 公分直線就是 57.1 公分。",
      "distractorAnalysis": {
        "A": "算出大半圓弧 31.4 ＋ 小半圓弧 15.7 ＝ 47.1 公分後，漏掉了左下方的 10 公分直線邊！",
        "B": "誤把右下方只是標示寬度的虛線 10 公分也加了進去（57.1 ＋ 10 ＝ 67.1 公分）。",
        "C": "看錯公式算成了「面積」（10 × 10 × 3.14 ÷ 2 − 5 × 5 × 3.14 ÷ 2 ＝ 117.75）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "挖空半圓周長 ＝ 大弧長 ＋ 小弧長 ＋ 留下的直線段"
      ],
      "conceptCompare": "求「面積」時，被挖掉的小半圓要用減的；求「周長」時，挖掉後露出的圓弧邊界反而要全部用加的！",
      "examVariations": "若題目將整個半圓左邊也挖掉一個直徑 10 的小半圓，底部 10 公分直線消失，周長就會變成「大半圓弧 ＋ 兩個小半圓弧 ＝ 62.8 公分」。"
    },
    "check": {
      "expr": "(10 + 10) * 3.14 / 2 + 10 * 3.14 / 2 + 10",
      "expect": "57.1"
    },
    "work": "md"
  },
  {
    "id": "EX2-PUREN-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與周長",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "扇形概念",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "question": "1. 關於扇形的敘述，何者正確？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "扇形周長是半徑＋扇形弧長",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "圓心角相同的兩個扇形，所對應的弧長會一樣長",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "C",
        "text": "圓心角 150° 的扇形一定比圓心角 90° 的扇形大",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "1/4 圓的扇形的圓心角是 90°",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "360 / 4",
      "expect": "90"
    },
    "explanation": {
      "examPurpose": "測試扇形周長組成（兩條半徑＋弧長）、弧長與半徑／圓心角之關係，以及幾分之幾圓的圓心角換算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：扇形周長必須包含「兩條半徑」和「一段弧長」，所以不能只加一條半徑。"
        },
        {
          "type": "text",
          "text": "第 2 步：弧長和面積大小都同時受到「半徑」和「圓心角」兩個條件影響，若半徑不同，圓心角大的扇形不一定比較大。"
        },
        {
          "type": "text",
          "text": "第 3 步：整圓的圓心角是 360°，因此 1/4 圓的扇形圓心角為："
        },
        {
          "type": "eq",
          "expr": "360 ÷ 4 = 90",
          "unit": "度"
        },
        {
          "type": "answer",
          "text": "答：1/4 圓的扇形的圓心角是 90°。"
        }
      ],
      "insight": "判斷扇形大小或弧長時，一定要同時確認「半徑」和「圓心角」兩個條件！",
      "distractorAnalysis": {
        "A": "忘記扇形有兩條直邊半徑，漏加了一條半徑（應為半徑 × 2 ＋ 弧長）。",
        "B": "忽略半徑長短的影響；半徑不同的兩個扇形，就算圓心角相同，弧長也不會一樣長。",
        "C": "只看圓心角大小就比較扇形大小，沒有考慮兩個圓原本半徑可能不一樣長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2",
        "幾分之幾圓的圓心角 ＝ 360° × 幾分之幾"
      ],
      "conceptCompare": "「同一個圓（或半徑相等）」時，圓心角越大，弧長越長；若半徑未知，不能只靠圓心角比較大小。",
      "examVariations": "常改考「1/6 圓、1/8 圓或 3/4 圓的圓心角是幾度？」只要用 360° 乘以分數即可秒殺。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "圓周長反求直徑",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "2. 老師想買可以戴在小姆指上的戒指，她拿了一條 10 公分長的棉線繞無名指一圈後，棉線還多出 5.6 公分。依據上表，阿姨比較適合挑選國際戒圍幾號的戒指？",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_ring_table.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "4 號",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "5 號",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "6 號",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "7 號",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "(10 - 5.6) / 3.14",
      "expect": "220/157"
    },
    "explanation": {
      "examPurpose": "先從棉線總長與多出長度求出手指圓周長，再除以圓周率 3.14 反求內直徑並查表。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：棉線總長 10 公分，繞一圈後多出 5.6 公分，先算出手指一圈的圓周長。"
        },
        {
          "type": "eq",
          "expr": "10 − 5.6 = 4.4",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：利用「直徑 ＝ 圓周長 ÷ 3.14」算出內直徑大約是多少公分。"
        },
        {
          "type": "longdiv",
          "dividend": "4.4",
          "divisor": "3.14",
          "note": "除數 3.14 往右移兩位成 314，被除數 4.4 補 0 成為 440"
        },
        {
          "type": "eq",
          "expr": "4.4 ÷ 3.14 = 1.40",
          "unit": "公分（約）"
        },
        {
          "type": "text",
          "text": "第 3 步：對照表格，內直徑 1.40 公分對應的是國際戒圍 6 號。"
        },
        {
          "type": "answer",
          "text": "答：適合挑選國際戒圍 6 號的戒指。"
        }
      ],
      "insight": "看到「多出 5.6 公分」要先相減求出圓周長 4.4 公分，再除以 3.14 求直徑！",
      "distractorAnalysis": {
        "A": "計算減法或小數除法估算偏小，誤對應到 1.30 公分的 4 號。",
        "B": "除法移小數點或四捨五入誤差，誤對應到 1.35 公分的 5 號。",
        "D": "對照表格時看錯相鄰欄位，或小數除法進位估錯成 1.45 公分的 7 號。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 圓周長 ÷ 3.14",
        "圓周長 ＝ 總長 − 剩下長度"
      ],
      "conceptCompare": "表格給的是「內直徑」，不是半徑也不是圓周長，算出圓周長 4.4 公分後只要除以 3.14 即可，不需要再除以 2。",
      "examVariations": "常改問「如果要戴大一號的戒指，周長大約要多幾公分？」或「線繞兩圈還剩多少公分？」"
    },
    "work": "md"
  },
  {
    "id": "EX2-PUREN-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "比較量與基準量之差",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "兩量之差列式",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "3. 「黃繩子長 0.6 公尺，紅繩子的長度是黃繩子的 1.3 倍，請問兩條繩子的長度相差多少公尺？」這道題目的正確算式為何？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "0.6 × (1 ＋ 1.3)",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "0.6 × (1.3 − 1)",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "0.6 ÷ (1 ＋ 1.3)",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "0.6 ÷ (1.3 − 1)",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "0.6 * (1.3 - 1)",
      "expect": "0.18"
    },
    "explanation": {
      "examPurpose": "分辨題幹給的是「基準量」還是「兩量差」，並正確使用「兩量差 ＝ 基準量 × (比值 − 1)」列式。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「紅繩子是黃繩子的 1.3 倍」，代表黃繩子是基準量（1 倍），紅繩子是 1.3 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：題目已告訴我們基準量黃繩子長 0.6 公尺，求兩條繩子「相差」多少公尺，應將倍數相減（1.3 − 1）再乘以基準量。"
        },
        {
          "type": "eq",
          "expr": "0.6 × (1.3 − 1) = 0.18",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：正確算式為 0.6 × (1.3 − 1)。"
        }
      ],
      "insight": "已知「1 倍的基準量」求「相差」，口訣就是：基準量 × (大倍數 − 1)！",
      "distractorAnalysis": {
        "A": "算出的是兩條繩子的「總和」，題目問的是「相差」，應該用減法不是加法。",
        "C": "誤把 0.6 公尺當成兩條繩子的總和，用除法反求基準量。",
        "D": "誤把 0.6 公尺當成兩條繩子的相差長度，用除法反求基準量。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩量差 ＝ 基準量 × (比值 − 1)"
      ],
      "conceptCompare": "「已知基準量求兩量差」用乘法；「已知兩量差反求基準量」才用除法。",
      "examVariations": "若題目改成「紅繩子比黃繩子長 0.6 公尺，紅繩子是黃繩子的 1.3 倍，求黃繩子長多少？」，算式就會變成選項 D 的 0.6 ÷ (1.3 − 1)！"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與地圖距離",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "比例尺大小比較",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "4. 下面有四種不同比例尺的臺灣地圖，請問在哪張地圖上，臺北到臺南的距離最短？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "比例尺 1：600000",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "比例尺 1/500000",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "比例尺 1：400000",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "比例尺 1/300000",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1 / 600000",
      "expect": "1/600000"
    },
    "explanation": {
      "examPurpose": "理解「實際距離固定時，比例尺越小（分母越大），地圖上的圖上距離越短」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：臺北到臺南的「實際距離」固定不變，圖上距離 ＝ 實際距離 × 比例尺。"
        },
        {
          "type": "text",
          "text": "第 2 步：把四個比例尺都看成分數：1/600000、1/500000、1/400000、1/300000。分母越大，縮得越小！"
        },
        {
          "type": "text",
          "text": "第 3 步：1/600000 是四個比例尺中最小的（1 公分就代表實際 600000 公分），所以圖上的距離最短。"
        },
        {
          "type": "answer",
          "text": "答：在比例尺 1：600000 的地圖上距離最短。"
        }
      ],
      "insight": "實際距離相同時：比例尺分母越大，縮得越厲害，圖上的線段就越短！",
      "distractorAnalysis": {
        "B": "沒有比較到分母最大的 600000。",
        "C": "混淆比值大小，誤判 1/400000 最小。",
        "D": "看到 300000 數字最小就以為圖上距離最短，其實 1/300000 比例尺最大，圖上距離反而最長！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上距離 ＝ 實際距離 × 比例尺（＝ 實際距離 ÷ 比例尺分母）"
      ],
      "conceptCompare": "「1：600000」和「1/600000」意義完全相同；分母越大代表「比例尺越小」，畫出來的圖也越小。",
      "examVariations": "常反問：「哪一張地圖的範圍涵蓋最廣？」或「哪一張地圖上兩地的距離最長（選分母最小的 1/300000）？」"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "雞兔與組合問題",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "換錢組合計數",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "5. 樂樂想同時擁有 100 元和 1000 元的新鈔票，帶著 10000 元來到銀行換錢，他有幾種換法？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "10 種",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "B",
        "text": "9 種",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "8 種",
        "trapCode": "U08_INTERVAL_OFF_BY_ONE"
      },
      {
        "key": "D",
        "text": "7 種",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "10 - 1",
      "expect": "9"
    },
    "explanation": {
      "examPurpose": "測試有限制條件（「同時擁有」兩種面額，不能為 0 張）的整數金額組合列表計數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：用 1000 元鈔票的張數來依序列舉，因為要「同時擁有」100 元和 1000 元，所以兩種鈔票至少都要有 1 張。"
        },
        {
          "type": "text",
          "text": "第 2 步：若換 10 張 1000 元，就沒有 100 元鈔票了；若換 0 張 1000 元，就沒有 1000 元鈔票了，這兩種都不算。"
        },
        {
          "type": "text",
          "text": "第 3 步：1000 元鈔票只能有 1、2、3、4、5、6、7、8、9 張（對應 100 元為 90、80、70、60、50、40、30、20、10 張），共有 9 種換法。"
        },
        {
          "type": "eq",
          "expr": "9 − 1 + 1 = 9",
          "unit": "種"
        },
        {
          "type": "answer",
          "text": "答：他有 9 種換法。"
        }
      ],
      "insight": "看到「同時擁有」或「兩種都要有」，記得把「其中一種為 0 張」的頭尾情況扣掉！",
      "distractorAnalysis": {
        "A": "多算了「10 張 1000 元、0 張 100 元」或「0 張 1000 元、100 張 100 元」其中一種不符合條件的換法。",
        "C": "列舉時多扣了一次，少數了 1 種組合。",
        "D": "列舉漏掉部分組合。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "整數組合計數：從大面額開始列表，確認每種面額至少有 1 張以上"
      ],
      "conceptCompare": "「換成 100 元或 1000 元（可單一一種）」會有 11 種；「同時擁有 100 元和 1000 元」頭尾 2 種都不行，只剩 9 種。",
      "examVariations": "若改成「帶著 10000 元換 500 元和 1000 元，兩種都要有」，1000 元可為 1～9 張，一樣是 9 種；若只換 2000 元，則 1000 元只有 1 張這 1 種！"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "加成與折扣問題",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第6題",
    "batch": "段考真題",
    "category": "成本與定價關係",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "question": "6. 如果把成本加 15% 當作定價，下列敘述何者正確？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "成本＝定價×(1＋15%)",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "成本＝定價×(1－15%)",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "定價＝成本×(1＋15%)",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "定價＝成本×(1－15%)",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1 + 15%",
      "expect": "1.15"
    },
    "explanation": {
      "examPurpose": "辨識「把成本加幾成／加幾％當作定價」的基準量是成本，定價 ＝ 成本 × (1 ＋ 加成百分率)。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「把成本加 15% 當作定價」，代表以「成本」為基準量（1），定價比成本多出成本的 15%。"
        },
        {
          "type": "text",
          "text": "第 2 步：因此定價 ＝ 成本 ＋ 成本 × 15% ＝ 成本 × (1 ＋ 15%)。"
        },
        {
          "type": "answer",
          "text": "答：定價＝成本×(1＋15%)。"
        }
      ],
      "insight": "加成定價以「成本」為 1 倍，加上 15% 變成原來的 1.15 倍！",
      "distractorAnalysis": {
        "A": "把成本和定價的位置寫反了，變成定價越加越小、成本比定價還貴。",
        "B": "不但把成本與定價顛倒，還誤以為反推就是乘以 (1 − 15%)。",
        "D": "題目說的是「加 15%」不是減 15%，減掉會變成打折虧本。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "定價 ＝ 成本 × (1 ＋ 加成百分率)",
        "成本 ＝ 定價 ÷ (1 ＋ 加成百分率)"
      ],
      "conceptCompare": "「加成」是對成本往上加（× (1 ＋ 百分率)）；「打折」則是對定價打折（× 折數）。",
      "examVariations": "若改問「成本加一成五當作定價」，一成五就是 15%，關係式完全一樣！"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "兩量之和",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第7題",
    "batch": "段考真題",
    "category": "基準量與兩量和",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "7. 甲數是乙數的 3/7 倍，甲、乙兩數的和是多少？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "乙數的 1 3/7 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "甲數的 3/7 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "乙數的 3/7 倍",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "甲數的 1 3/7 倍",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "1 + 3/7",
      "expect": "1 3/7"
    },
    "explanation": {
      "examPurpose": "理解「甲數是乙數的 3/7 倍」時，乙數為基準量 1，兩數之和為基準量的 (1 ＋ 3/7) 倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「甲數是乙數的 3/7 倍」，是以「乙數」當作基準量（1 倍），甲數則是乙數的 3/7 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：甲、乙兩數的和 ＝ 乙數 × (1 ＋ 3/7)。"
        },
        {
          "type": "eq",
          "expr": "1 + 3/7 = 1 3/7",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：甲、乙兩數的和是乙數的 1 3/7 倍。"
        }
      ],
      "insight": "「是誰的幾倍」，誰就是基準量 1！兩數和就是基準量的 (1 ＋ 倍數) 倍。",
      "distractorAnalysis": {
        "B": "把基準量「乙數」看成「甲數」，而且沒加上原本的 1 倍。",
        "C": "忘記把基準量乙數本身的 1 倍加進去，3/7 倍只是甲數而已。",
        "D": "倍數算對了 1 3/7，但主詞誤選成甲數，忘記本題基準量是乙數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩數和 ＝ 基準量 × (1 ＋ 比值)"
      ],
      "conceptCompare": "若改問「甲、乙兩數相差多少？」，則是以大減小：乙數 × (1 − 3/7) ＝ 乙數的 4/7 倍。",
      "examVariations": "常改問成「乙數和甲、乙兩數和的比值」或改用小數倍數出題。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖性質",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第8題",
    "batch": "段考真題",
    "category": "放大與縮小圖定義",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "8. 有一個邊長 2 公分的小正方形，和另一個邊長 4 公分的大正方形，下列敘述何者錯誤？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "大正方形邊長是小正方形邊長的 2 倍",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "大正方形面積是小正方形面積的 4 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "C",
        "text": "小正方形是大正方形的 2 倍縮圖",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "大正方形是小正方形的 2 倍放大圖",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "2 / 4",
      "expect": "1/2"
    },
    "explanation": {
      "examPurpose": "辨別「縮圖」的正確倍數寫法：縮小一半稱為「1/2 倍縮圖」，不是「2 倍縮圖」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：大正方形邊長 4 公分，小正方形邊長 2 公分，4 ÷ 2 ＝ 2，所以大正方形是小正方形的 2 倍放大圖（①、④ 都正確）。"
        },
        {
          "type": "text",
          "text": "第 2 步：面積方面，(4 × 4) ÷ (2 × 2) ＝ 16 ÷ 4 ＝ 4 倍（② 正確）。"
        },
        {
          "type": "text",
          "text": "第 3 步：小正方形邊長是大正方形的一半（2 ÷ 4 ＝ 1/2），因此小正方形是大正方形的「1/2 倍縮圖」，說成「2 倍縮圖」是錯誤的！"
        },
        {
          "type": "eq",
          "expr": "2 ÷ 4 = 1/2",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：「小正方形是大正方形的 2 倍縮圖」是錯誤的敘述。"
        }
      ],
      "insight": "數學課本嚴格規定：縮小圖要講「幾分之幾倍縮圖」（如 1/2 倍縮圖），放大圖才講「幾倍放大圖」！",
      "distractorAnalysis": {
        "A": "4 ÷ 2 ＝ 2，此敘述正確，題目問的是「何者錯誤」。",
        "B": "邊長變 2 倍、面積變 2 × 2 ＝ 4 倍，此敘述正確。",
        "D": "大正方形邊長是小正方形的 2 倍且對應角皆為 90°，確實是 2 倍放大圖，此敘述正確。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "縮圖倍數 ＝ 縮圖邊長 ÷ 原圖邊長（小於 1 的分數）",
        "面積比 ＝ 邊長倍數 × 邊長倍數"
      ],
      "conceptCompare": "生活中常口語說「縮小 2 倍」，但在國小數學幾何定義上，必須寫成「1/2 倍縮圖（或 1/2 縮小圖）」。",
      "examVariations": "常改考邊長 3 公分與 9 公分的正方形，問「小圖是大圖的幾倍縮圖？（1/3 倍縮圖）」。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第9題",
    "batch": "段考真題",
    "category": "半徑與圓周長倍數關係",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "question": "9. 當圓的半徑變成原來的 2 倍時，圓周長變為原來的幾倍？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "1/2 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "2 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "4 倍",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "8 倍",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "2",
      "expect": "2"
    },
    "explanation": {
      "examPurpose": "理解圓周長與半徑（直徑）成正比：半徑變幾倍，圓周長就變幾倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓周長 ＝ 半徑 × 2 × 3.14。"
        },
        {
          "type": "text",
          "text": "第 2 步：我們可以舉數字測試，假設原本半徑是 1 公分，圓周長 ＝ 1 × 2 × 3.14 ＝ 6.28 公分。"
        },
        {
          "type": "text",
          "text": "第 3 步：半徑變成原來的 2 倍（2 公分）後，圓周長 ＝ 2 × 2 × 3.14 ＝ 12.56 公分。"
        },
        {
          "type": "longdiv",
          "dividend": "12.56",
          "divisor": "6.28",
          "note": "把 12.56 ÷ 6.28 轉為 1256 ÷ 628"
        },
        {
          "type": "eq",
          "expr": "12.56 ÷ 6.28 = 2",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：圓周長變為原來的 2 倍。"
        }
      ],
      "insight": "圓周長是一維的「長度」，所以半徑變幾倍，直徑和圓周長都一起變同樣的倍數！",
      "distractorAnalysis": {
        "A": "方向搞反，以為半徑變大圓周長反而縮小。",
        "C": "誤把「圓面積」的倍數（2 × 2 ＝ 4 倍）當成「圓周長」的倍數。",
        "D": "多乘了一次 2 或與立方體積倍數搞混。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半徑變幾倍 ➔ 直徑變幾倍 ➔ 圓周長也變幾倍"
      ],
      "conceptCompare": "「圓周長」只與半徑的一次方有關，半徑 × 2 ➔ 圓周長 × 2；若是「正方形面積」，邊長 × 2 ➔ 面積 × 4。",
      "examVariations": "常改問「圓的直徑變成原來的 3 倍，圓周長變為幾倍？（3 倍）圓周率變為幾倍？（不變，1 倍）」。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與周長",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 一、選擇題 第10題",
    "batch": "段考真題",
    "category": "由弧長反求圓心角",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "10. 半徑 5 公分，弧長大約是 31.4 公分的扇形，圓心角是多少度？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "150 度",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "B",
        "text": "180 度",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "270 度",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "360 度",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "31.4 / (5 * 2 * 3.14) * 360",
      "expect": "360"
    },
    "explanation": {
      "examPurpose": "先算出整圓圓周長，再用「弧長 ÷ 整圓圓周長」求占幾分之幾圓，進而求出圓心角。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：半徑 5 公分，直徑為 5 × 2 ＝ 10 公分，整圓圓周長為："
        },
        {
          "type": "eq",
          "expr": "5 × 2 × 3.14 = 31.4",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：題目給的弧長也是 31.4 公分，代表這個弧長剛好占了整個圓！"
        },
        {
          "type": "longdiv",
          "dividend": "31.4",
          "divisor": "31.4",
          "note": "用弧長 31.4 除以整圓周長 31.4"
        },
        {
          "type": "eq",
          "expr": "31.4 ÷ 31.4 × 360 = 360",
          "unit": "度"
        },
        {
          "type": "answer",
          "text": "答：圓心角是 360 度。"
        }
      ],
      "insight": "半徑 5 公分的圓，圓周長剛好就是 31.4 公分！所以弧長 31.4 公分就是一整個圓（360°）。",
      "distractorAnalysis": {
        "A": "未算出整圓周長，憑感覺猜測圓心角度數。",
        "B": "以為 31.4 公分只是半圓弧長，誤選 180 度（注意：半徑 10 公分時 31.4 才是半圓）。",
        "C": "分數比例換算失誤，誤算成 3/4 圓的 270 度。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓心角 ＝ 360° × (弧長 ÷ 整圓圓周長)"
      ],
      "conceptCompare": "「半徑 5 公分」的整圓周長是 31.4 公分；「直徑 5 公分」的整圓周長則是 15.7 公分，千萬別看漏「半徑」還是「直徑」！",
      "examVariations": "若改為「半徑 10 公分，弧長 31.4 公分」，整圓周長是 62.8 公分，圓心角就會變成 180°。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與地圖距離",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第1題",
    "batch": "段考真題",
    "category": "線段比例尺轉比值",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "1. 比例尺圖示（0 到 20、40、60 公里，每格長 1 公分），用比值方式表示為（　　）。",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_scale_fill1.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "1/2000000",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "1/6000000",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "1/20",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "1/20000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "1 / (20 * 100000)",
      "expect": "1/2000000"
    },
    "explanation": {
      "examPurpose": "讀取線段比例尺「每 1 格（1 公分）代表 20 公里」，先統一換算成公分後，再寫成「比值」分數形式。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：線段比例尺每 1 小格代表實際距離 20 公里（看 0 到 20 這一段，不是看最右邊的 60）。"
        },
        {
          "type": "text",
          "text": "第 2 步：把 20 公里換算成公分（1 公里 ＝ 1000 公尺 ＝ 100000 公分，後面補 5 個 0）。"
        },
        {
          "type": "eq",
          "expr": "20 × 100000 = 2000000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：比例尺「比值」必須寫成分數（或小數）的形式，即 1/2000000。"
        },
        {
          "type": "answer",
          "text": "答：用比值方式表示為 1/2000000。"
        }
      ],
      "insight": "讀線段比例尺一定要看「第一小格」的數字 20 公里，然後公里換公分直接加 5 個 0！",
      "distractorAnalysis": {
        "C": "完全沒有把公里換算成公分，直接寫 1/20。",
        "D": "把 1 公里誤記成 1000 公分（只補了 3 個 0，少了 公尺換公分 的 2 個 0）。",
        "B": "直接讀取線段最末端的數字 60 公里，忘記那代表 3 格（3 公分）的總長！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公里 ＝ 1000 公尺 ＝ 100000 公分（去或補 5 個 0）"
      ],
      "conceptCompare": "「比」的寫法是「1：2000000」；題目問「比值」時要寫成分數「1/2000000」，看清題目要的是比還是比值！",
      "examVariations": "有時線段比例尺共 3 格標示 0 到 60 公里，要先用 60 ÷ 3 ＝ 20 算出 1 公分代表 20 公里。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "加成與折扣問題",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第2題",
    "batch": "段考真題",
    "category": "折扣省錢反求原價",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "2. 百貨公司特賣會，商品一律以定價打八折售出，爸爸買一套西裝便宜了 800 元，這套西裝定價是（　　）元。",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "6400 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "1000 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "3200 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "4000 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "800 / (1 - 0.8)",
      "expect": "4000"
    },
    "explanation": {
      "examPurpose": "理解「打八折」代表售價是定價的 80%，而「便宜的錢」占定價的 (1 − 0.8) ＝ 20%，藉此反求原定價。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：打八折就是售價只付原定價的 0.8 倍，所以便宜了原定價的 1 − 0.8 ＝ 0.2 倍（20%）。"
        },
        {
          "type": "text",
          "text": "第 2 步：已知便宜的 0.2 倍剛好就是 800 元，用「比較量 ÷ 倍數」反推原定價（基準量）。"
        },
        {
          "type": "longdiv",
          "dividend": "800",
          "divisor": "0.2",
          "note": "將 800 ÷ 0.2 的除數與被除數同乘 10，變成 8000 ÷ 2"
        },
        {
          "type": "eq",
          "expr": "800 ÷ (1 − 0.8) = 4000",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：這套西裝定價是 4000 元。"
        }
      ],
      "insight": "看到「打八折便宜了 800 元」，800 元對應的不是 0.8，而是省下來的 0.2（兩折）！",
      "distractorAnalysis": {
        "B": "誤以為 800 元是打八折後的售價，直接算 800 ÷ 0.8 ＝ 1000 元。",
        "C": "把算出的定價 4000 元再扣掉 800 元，答成售價 3200 元，沒看清題目問的是「定價」。",
        "A": "求原價誤用乘法，把 800 × 8 ＝ 6400 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "原定價 ＝ 便宜的金額 ÷ (1 − 折數)"
      ],
      "conceptCompare": "「打八折賣 800 元」是 800 ÷ 0.8；「打八折便宜 800 元」則是 800 ÷ (1 − 0.8)！",
      "examVariations": "常改問「打七五折省下 500 元，這件衣服售價是多少？」（先算 500 ÷ 0.25 ＝ 2000 元定價，再減 500 得售價 1500 元）。"
    },
    "work": "md"
  },
  {
    "id": "EX2-PUREN-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "雞兔與組合問題",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第3題",
    "batch": "段考真題",
    "category": "差額替換問題",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "3. 紅筆單價比藍筆多 6 元，小舒只買了紅筆，維尼買了紅筆和藍筆。如果他們兩人買的筆數量一樣多，但是小舒多付了 30 元，維尼買（　　）枝藍筆。",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "5 枝",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "6 枝",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "30 枝",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "4 枝",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "30 / 6",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "利用雞兔同籠替換思想：把 1 枝藍筆換成 1 枝紅筆就會多付 6 元，總共多付 30 元即對應 5 枝藍筆。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：兩人買的筆總數量一樣多，可以把相同的紅筆數量抵銷不看，只看「小舒買紅筆、維尼買藍筆」的這些數量。"
        },
        {
          "type": "text",
          "text": "第 2 步：每 1 枝紅筆比藍筆多付 6 元，小舒總共多付了 30 元，代表維尼有幾枝買成了藍筆："
        },
        {
          "type": "eq",
          "expr": "30 ÷ 6 = 5",
          "unit": "枝"
        },
        {
          "type": "answer",
          "text": "答：維尼買了 5 枝藍筆。"
        }
      ],
      "insight": "總枝數相同時，小舒每多買 1 枝紅筆代替藍筆就多花 6 元，直接用「總價差 ÷ 單價差」就能秒殺！",
      "distractorAnalysis": {
        "D": "除法計算錯誤或誤減去 1 枝。",
        "B": "誤把單價差 6 元直接當成筆的枝數。",
        "C": "直接把多付的 30 元當成答案。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "替換數量 ＝ 總價差 ÷ 單價差"
      ],
      "conceptCompare": "這題不告訴你兩人一共買了幾枝筆、也不告訴你紅筆藍筆各幾元，因為「差額法」完全不需要知道總枝數！",
      "examVariations": "若改為「兩人共買了 10 枝筆」，就能進一步算出維尼買了 5 枝藍筆、5 枝紅筆。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "兩量之和與差",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第4題",
    "batch": "段考真題",
    "category": "已知兩量和求兩量差",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "4. 今年夏至那一天的白天時間是晚上時間的 1.4 倍，這天的白天時間比晚上時間多出（　　）小時。",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "9.6 小時",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "4 小時",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "10 小時",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "14 小時",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "24 / (1 + 1.4) * (1.4 - 1)",
      "expect": "4"
    },
    "explanation": {
      "examPurpose": "結合生活常識（一日 ＝ 24 小時）與基準量兩量和差：先由 24 小時反求晚上時間，再求白天與晚上的時間差。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：一天有 24 小時（白天 ＋ 晚上 ＝ 24 小時）。以晚上時間為基準量 1，白天是 1.4 倍，合起來是 1 ＋ 1.4 ＝ 2.4 倍。"
        },
        {
          "type": "longdiv",
          "dividend": "24",
          "divisor": "2.4",
          "note": "把 24 ÷ 2.4 的被除數與除數同乘 10，變成 240 ÷ 24"
        },
        {
          "type": "eq",
          "expr": "24 ÷ (1 + 1.4) = 10",
          "unit": "小時（晚上）"
        },
        {
          "type": "text",
          "text": "第 2 步：白天比晚上多出 1.4 − 1 ＝ 0.4 倍，即："
        },
        {
          "type": "eq",
          "expr": "10 × (1.4 − 1) = 4",
          "unit": "小時"
        },
        {
          "type": "answer",
          "text": "答：白天時間比晚上時間多出 4 小時。"
        }
      ],
      "insight": "隱含條件「一天 ＝ 24 小時」！先算出晚上 10 小時，白天是 14 小時，14 − 10 ＝ 4 小時。",
      "distractorAnalysis": {
        "C": "算出基準量「晚上時間」10 小時就停筆，忘記題目問的是白天比晚上「多出」幾小時。",
        "D": "算出「白天時間」14 小時就停筆，沒有再減去晚上的 10 小時。",
        "A": "忘記把基準量本身的 1 倍加進總和，誤用 24 × (1.4 − 1) ＝ 9.6 小時。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩量和 ÷ (1 ＋ 倍數)",
        "兩量差 ＝ 基準量 × (倍數 − 1)"
      ],
      "conceptCompare": "許多時間應用題不會明寫「一天 24 小時」，需自己看出白天 ＋ 晚上 ＝ 24 小時這個總和條件。",
      "examVariations": "若改為「冬至白天時間是晚上的 0.6 倍」，則晚上 ＝ 24 ÷ (1 ＋ 0.6) ＝ 15 小時，白天 9 小時，相差 6 小時。"
    },
    "work": "md"
  },
  {
    "id": "EX2-PUREN-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第5題",
    "batch": "段考真題",
    "category": "長方形內最大圓周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "5. 在長 40 公分，寬 30 公分的長方形中畫出一個最大的圓，它的周長大約是（　　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "188.4 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "140 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "C",
        "text": "94.2 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "125.6 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "30 * 3.14",
      "expect": "94.2"
    },
    "explanation": {
      "examPurpose": "理解長方形內接最大圓的「直徑」受限於較短邊（寬 30 公分），再求圓周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：要在長 40 公分、寬 30 公分的長方形裡面畫出最大的圓，圓不能超出長方形，所以最大直徑只能等於「寬」30 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：代入「圓周長 ＝ 直徑 × 3.14」計算："
        },
        {
          "type": "eq",
          "expr": "30 × 3.14 = 94.2",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：它的周長大約是 94.2 公分。"
        }
      ],
      "insight": "長方形裡面能畫出的最大圓，直徑永遠等於長方形的「寬（較短邊）」！",
      "distractorAnalysis": {
        "D": "誤把較長的「長 40 公分」當成最大圓的直徑（40 × 3.14 ＝ 125.6 公分），這樣圓會凸出長方形外面。",
        "A": "把寬 30 公分當成「半徑」而不是直徑，算成 30 × 2 × 3.14 ＝ 188.4 公分。",
        "B": "算出長方形本身的周長 (40 ＋ 30) × 2 ＝ 140 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "長方形內最大圓直徑 ＝ 長方形的寬（較短邊）",
        "圓周長 ＝ 直徑 × 3.14"
      ],
      "conceptCompare": "別把「寬 30 公分」誤當成半徑！長方形的寬同時限制了圓從上到下的總高度，也就是「直徑」。",
      "examVariations": "常改問「在長 40 公分、寬 30 公分的紙上剪下最大的半圓，周長是多少？」（此時半圓直徑可達長 40 公分，半徑 20 公分也不會超出寬 30 公分！超經典陷阱題！）。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-16",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第6題",
    "batch": "段考真題",
    "category": "輪胎滾動圈數",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "6. 均均推一個半徑 25 公分的輪胎，沿著長 78.5 公尺的直線跑道滾動，大約滾了（　　）圈。",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "100 圈",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "25 圈",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "0.5 圈",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "50 圈",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(78.5 * 100) / (25 * 2 * 3.14)",
      "expect": "50"
    },
    "explanation": {
      "examPurpose": "先算出輪胎滾動 1 圈的周長，並注意跑道「公尺」與輪胎「公分」的單位換算，再相除求圈數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：輪胎半徑 25 公分，直徑為 25 × 2 ＝ 50 公分，先算出輪胎滾動 1 圈前進的距離（圓周長）："
        },
        {
          "type": "eq",
          "expr": "25 × 2 × 3.14 = 157",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：把跑道長度 78.5 公尺換算成公分（1 公尺 ＝ 100 公分）："
        },
        {
          "type": "eq",
          "expr": "78.5 × 100 = 7850",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：總距離除以 1 圈長度，即為滾動圈數："
        },
        {
          "type": "eq",
          "expr": "7850 ÷ 157 = 50",
          "unit": "圈"
        },
        {
          "type": "answer",
          "text": "答：大約滾了 50 圈。"
        }
      ],
      "insight": "輪胎題兩大陷阱：① 半徑要先 × 2 變直徑；② 跑道單位是「公尺」，要記得 × 100 換成「公分」！",
      "distractorAnalysis": {
        "C": "忘記把 78.5 公尺換算成 7850 公分，直接用 78.5 ÷ 157 ＝ 0.5 圈。",
        "A": "把半徑 25 公分直接當成直徑來算周長（25 × 3.14 ＝ 78.5 公分），再算 7850 ÷ 78.5 ＝ 100 圈。",
        "B": "除法算錯或少算 2 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "滾動圈數 ＝ 總距離 ÷ 圓周長",
        "1 公尺 ＝ 100 公分"
      ],
      "conceptCompare": "輪胎「滾 1 圈的距離」就是輪胎外圍的「圓周長」，不是半徑也不是直徑。",
      "examVariations": "常改問：「在直線牆壁之間（起點到終點牆壁內距 78.5 公尺），輪胎從貼著左牆滾到貼著右牆，球心或輪胎少滾了一段直徑怎麼辦？」那種進階題需先扣掉 1 條直徑（2 個半徑）。"
    },
    "work": "md"
  },
  {
    "id": "EX2-PUREN-17",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "平均與差額移補",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第7題",
    "batch": "段考真題",
    "category": "移多補少分攤問題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "7. 樂樂和希希兩人到電影院看電影，樂樂付午餐費 450 元，希希付電影票錢 580 元，誰要給誰多少元，兩人分攤的錢才會一樣多？（　　），（　　）元",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "options": [
      {
        "key": "A",
        "text": "樂樂給希希，65 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "希希給樂樂，65 元",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "樂樂給希希，130 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "D",
        "text": "樂樂給希希，515 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(580 - 450) / 2",
      "expect": "65"
    },
    "explanation": {
      "examPurpose": "理解「分攤後兩人一樣多」＝ 每人應付總金額的一半，並判斷應由付較少錢的人補差額給付較多錢的人。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出兩人總共花了多少錢，再除以 2 求出每人平均應分攤多少元："
        },
        {
          "type": "eq",
          "expr": "(450 + 580) ÷ 2 = 515",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：樂樂只付了 450 元（比平均 515 元少），希希付了 580 元（比平均多），所以應該由「樂樂給希希」。"
        },
        {
          "type": "eq",
          "expr": "515 − 450 = 65",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：樂樂給希希，65 元。"
        }
      ],
      "insight": "誰付得少，誰就要拿錢出來補！給的錢剛好是「兩人相差金額的一半」（(580 − 450) ÷ 2 ＝ 65 元）。",
      "distractorAnalysis": {
        "B": "把給錢方向弄反了！希希已經墊付比較多（580 元），不應該再拿錢給樂樂。",
        "C": "直接用 580 − 450 ＝ 130 元，忘記除以 2；若樂樂給 130 元，會變成樂樂花 580 元、希希花 450 元，反而顛倒了！",
        "D": "直接填了每人平均應分攤的 515 元，忘記扣掉樂樂原本已經先付的 450 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "移補金額 ＝ (大 − 小) ÷ 2 ＝ 平均數 − 較小數"
      ],
      "conceptCompare": "「移多補少」永遠只要移動相差的一半！自己做完一定要驗算看看：450 ＋ 65 ＝ 515、580 − 65 ＝ 515，兩邊相等才算對。",
      "examVariations": "若題目改成 3 個人（例如又多一位朋友付了 230 元），就一定要用「總和 ÷ 3」算出平均數，再跟每個人的實付金額比較。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 二、填填看 第8題",
    "batch": "段考真題",
    "category": "基準量、比較量與列式",
    "level": 1,
    "difficulty": 2,
    "questionType": "group",
    "question": "8. 淡水河全長約 158 公里，急水溪全長約 65 公里，急水溪的長度是淡水河的幾倍？【不用計算】",
    "examPageImage": "images/exams/EXAM_MID2/puren_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-PUREN-G01-1",
        "label": "基準量",
        "question": "基準量：（　　）公里",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "223 公里",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "158 公里",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "65 公里",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "93 公里",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "B",
        "check": {
          "expr": "158",
          "expect": "158"
        },
        "explanation": {
          "examPurpose": "由關鍵問句「急水溪的長度是淡水河的幾倍」辨識「是」後面、「的」前面的淡水河為基準量。",
          "steps": [
            {
              "type": "text",
              "text": "「急水溪的長度是淡水河的幾倍」，被拿來當作比較標準（1 倍）的是淡水河。"
            },
            {
              "type": "answer",
              "text": "答：基準量是 158 公里。"
            }
          ],
          "insight": "口訣：「是誰的幾倍」，「的」前面的量就是基準量！",
          "distractorAnalysis": {
            "C": "把比較量「急水溪（65 公里）」誤認成基準量。",
            "D": "誤算出兩條河流的長度差 158 − 65 ＝ 93 公里。",
            "A": "誤算出兩條河流的長度和 158 ＋ 65 ＝ 223 公里。"
          }
        }
      },
      {
        "subId": "EX2-PUREN-G01-2",
        "label": "比較量",
        "question": "比較量：（　　）公里",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "223 公里",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "158 公里",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "65 公里",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "93 公里",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "C",
        "check": {
          "expr": "65",
          "expect": "65"
        },
        "explanation": {
          "examPurpose": "確認問句主詞「急水溪的長度」為比較量。",
          "steps": [
            {
              "type": "text",
              "text": "題目問「急水溪的長度是淡水河的幾倍」，主角「急水溪」就是比較量。"
            },
            {
              "type": "answer",
              "text": "答：比較量是 65 公里。"
            }
          ],
          "insight": "基準量是「的」前面的淡水河，比較量就是「是」前面的急水溪！",
          "distractorAnalysis": {
            "B": "把基準量「淡水河（158 公里）」與比較量寫顛倒了。",
            "D": "誤算成兩條溪流長度差。",
            "A": "誤算成兩條溪流長度和。"
          }
        }
      },
      {
        "subId": "EX2-PUREN-G01-3",
        "label": "算式",
        "question": "算式：＿＿＿＿＿＿＿＿＿【不用計算】",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "158 × 65",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "B",
            "text": "158 − 65",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "158 ÷ 65",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "65 ÷ 158",
            "trapCode": null
          }
        ],
        "answer": "D",
        "skipOptionNumMatch": true,
        "check": {
          "expr": "65 / 158",
          "expect": "65/158"
        },
        "explanation": {
          "examPurpose": "依據「比值（倍數）＝ 比較量 ÷ 基準量」正確列式。",
          "steps": [
            {
              "type": "text",
              "text": "倍數 ＝ 比較量 ÷ 基準量，因此用急水溪（65）除以淡水河（158）。"
            },
            {
              "type": "eq",
              "expr": "65 ÷ 158 = 65/158",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：算式為 65 ÷ 158。"
            }
          ],
          "insight": "基準量（1 倍）永遠放在除號後面當除數！",
          "distractorAnalysis": {
            "C": "習慣用大數字除以小數字，寫成 158 ÷ 65（這樣算出的是「淡水河是急水溪的幾倍」，基準量弄反了！）。",
            "A": "求倍數誤用乘法。",
            "B": "把求「幾倍」看成求「相差幾公里」。"
          }
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "倍數（比值）＝ 比較量 ÷ 基準量"
      ],
      "conceptCompare": "千萬不要有「大數一定除以小數」的錯覺！比值完全可以小於 1（急水溪比較短，所以是淡水河的 65/158 倍）。",
      "examVariations": "若把問句改為「淡水河的長度是急水溪的幾倍？」，基準量就會變成 65 公里、比較量變成 158 公里，算式變成 158 ÷ 65。"
    }
  },
  {
    "id": "EX2-PUREN-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖性質",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 三、看圖回答問題 第1題",
    "batch": "段考真題",
    "category": "放大縮小三角形性質",
    "level": 2,
    "difficulty": 3,
    "questionType": "group",
    "question": "1. 甲圖為乙圖的 2 倍放大圖。",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_tri_ab.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-PUREN-G02-1",
        "label": "①",
        "question": "① 線段 MO 的長是（　　）公分，線段 AC 的長是（　　）公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "8 公分，34 公分",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "32 公分，8.5 公分",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "C",
            "text": "11 公分，34 公分",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "D",
            "text": "8 公分，17 公分",
            "trapCode": "U07_CALC_SLIP"
          }
        ],
        "answer": "A",
        "check": {
          "expr": "16 / 2",
          "expect": "8",
          "extraChecks": [
            {
              "expr": "17 * 2",
              "expect": "34"
            }
          ]
        },
        "explanation": {
          "examPurpose": "辨認放大圖與原圖的對應邊，並依 2 倍放大／縮小的比例換算對應邊長。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：從頂點記號找對應關係：點 A 對應點 N、點 B 對應點 M、點 C 對應點 O。"
            },
            {
              "type": "text",
              "text": "第 2 步：線段 MO 的對應邊是線段 BC（16 公分），因為甲圖是乙圖的 2 倍，所以乙圖邊長是甲圖的一半："
            },
            {
              "type": "eq",
              "expr": "16 ÷ 2 = 8",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 3 步：線段 AC 的對應邊是線段 NO（17 公分），所以線段 AC 長為："
            },
            {
              "type": "eq",
              "expr": "17 × 2 = 34",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：線段 MO 的長是 8 公分，線段 AC 的長是 34 公分。"
            }
          ],
          "insight": "先找準「對應邊」：甲（大圖）➔ 乙（小圖）要 ÷ 2；乙（小圖）➔ 甲（大圖）要 × 2！",
          "distractorAnalysis": {
            "B": "把放大跟縮小的方向乘除弄反了（誤算 16 × 2 與 17 ÷ 2）。",
            "C": "找錯線段 MO 的對應邊，誤拿線段 AB（22 公分）除以 2 算成 11 公分。",
            "D": "線段 AC 忘記乘以 2，直接抄了線段 NO 的 17 公分。"
          }
        }
      },
      {
        "subId": "EX2-PUREN-G02-2",
        "label": "②",
        "question": "② ∠B 是（　　）度。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "67.5 度",
            "trapCode": "U07_ANGLE_SCALED"
          },
          {
            "key": "B",
            "text": "135 度",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "270 度",
            "trapCode": "U07_ANGLE_SCALED"
          },
          {
            "key": "D",
            "text": "45 度",
            "trapCode": "U07_CALC_SLIP"
          }
        ],
        "answer": "B",
        "check": {
          "expr": "135",
          "expect": "135"
        },
        "explanation": {
          "examPurpose": "測試放大圖與原圖的「對應角完全相等」性質。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：∠B 的對應角是乙圖上的 ∠M（135°）。"
            },
            {
              "type": "text",
              "text": "第 2 步：圖形放大或縮小後，形狀不變，所以對應角的度數完全不變！"
            },
            {
              "type": "answer",
              "text": "答：∠B 是 135 度。"
            }
          ],
          "insight": "無論放大幾倍或縮小幾倍，「對應角永遠一模一樣大」，絕對不能乘以 2 或除以 2！",
          "distractorAnalysis": {
            "A": "誤把角度也一起除以 2，算成 67.5 度。",
            "C": "誤把角度也一起乘以 2，算成 270 度（三角形內角和才 180° 呢！）。",
            "D": "誤用 180° − 135° ＝ 45° 當成 ∠B。"
          }
        }
      },
      {
        "subId": "EX2-PUREN-G02-3",
        "label": "③",
        "question": "③ 甲圖的面積是 80 平方公分，乙圖的面積是（　　）平方公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "320 平方公分",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "B",
            "text": "40 平方公分",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "C",
            "text": "20 平方公分",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "160 平方公分",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          }
        ],
        "answer": "C",
        "check": {
          "expr": "80 / (2 * 2)",
          "expect": "20"
        },
        "explanation": {
          "examPurpose": "掌握邊長變成 2 倍時，面積變成 2 × 2 ＝ 4 倍；因此反求小圖面積要除以 4。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：甲圖是乙圖的 2 倍放大圖，所以底變 2 倍、高也變 2 倍，甲圖面積是乙圖面積的 2 × 2 ＝ 4 倍。"
            },
            {
              "type": "text",
              "text": "第 2 步：已知甲圖面積 80 平方公分，因此乙圖面積為："
            },
            {
              "type": "eq",
              "expr": "80 ÷ 4 = 20",
              "unit": "平方公分"
            },
            {
              "type": "answer",
              "text": "答：乙圖的面積是 20 平方公分。"
            }
          ],
          "insight": "長度縮放 2 倍，面積要縮放 2 × 2 ＝ 4 倍！大面積反求小面積，直接除以 4。",
          "distractorAnalysis": {
            "B": "誤以為面積也只縮小一半（80 ÷ 2 ＝ 40 平方公分），忘記底和高兩個維度都縮小成 1/2。",
            "D": "不但只算 2 倍，還用成了乘法（80 × 2 ＝ 160 平方公分）。",
            "A": "把乙圖面積乘以 4（80 × 4 ＝ 320 平方公分），但乙圖是比較小的原圖！"
          }
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "放大圖對應邊 ＝ 原圖邊 × 倍數",
        "對應角永遠相等（角度不縮放）",
        "放大圖面積 ＝ 原圖面積 × (倍數 × 倍數)"
      ],
      "conceptCompare": "記住三口訣：邊長乘一次倍數、面積乘兩次倍數、角度完全不變！",
      "examVariations": "常改問「乙圖周長是甲圖周長的幾倍？（1/2 倍）」或「甲圖面積比乙圖多幾平方公分？」。"
    }
  },
  {
    "id": "EX2-PUREN-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "secondaryUnitIds": [
      "U06"
    ],
    "section": "7-3",
    "sectionName": "比例尺與地圖距離",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 三、看圖回答問題 第2題",
    "batch": "段考真題",
    "category": "比例尺與圓周長面積應用",
    "level": 3,
    "difficulty": 3,
    "questionType": "group",
    "question": "2. 下圖是文化中心戶外表演場及四周的平面圖，地圖的比例尺是 1：5000，根據下圖回答問題。",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_culture_map.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "work": "lg",
    "subQuestions": [
      {
        "subId": "EX2-PUREN-G03-1",
        "label": "①",
        "question": "① 安安沿著池塘的外圍散步，繞了 1 圈，大約走了（　　）公尺。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "3140 公尺",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          },
          {
            "key": "B",
            "text": "157000 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "31.4 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "D",
            "text": "1570 公尺",
            "trapCode": null
          }
        ],
        "answer": "D",
        "check": {
          "expr": "10 * 5000 / 100 * 3.14",
          "expect": "1570"
        },
        "explanation": {
          "examPurpose": "結合比例尺（1：5000）與圓周長計算，先算實際直徑並換算公尺，再求實際圓周長。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺 1：5000 表示圖上 1 公分 ＝ 實際 5000 公分 ＝ 50 公尺。"
            },
            {
              "type": "text",
              "text": "第 2 步：從圖上讀出圓形池塘的直徑是 10 公分，因此池塘的實際直徑為："
            },
            {
              "type": "eq",
              "expr": "10 × 50 = 500",
              "unit": "公尺"
            },
            {
              "type": "text",
              "text": "第 3 步：池塘外圍 1 圈就是圓周長，用「實際直徑 × 3.14」計算："
            },
            {
              "type": "eq",
              "expr": "500 × 3.14 = 1570",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：大約走了 1570 公尺。"
            }
          ],
          "insight": "先求「比例尺 1 公分 ＝ 50 公尺」，直接用圖上公分乘以 50 就能直接變公尺，超級不易出錯！",
          "distractorAnalysis": {
            "C": "忘記乘以比例尺 5000，只算了圖上 10 × 3.14 ＝ 31.4。",
            "A": "誤把圖上標示的直徑 10 公分當成「半徑」，多乘了一次 2 變成 3140 公尺。",
            "B": "算出公分答案 157000 公分後，忘記除以 100 換算成公尺！"
          }
        }
      },
      {
        "subId": "EX2-PUREN-G03-2",
        "label": "②",
        "question": "② 舞臺的實際面積是（　　）平方公尺。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "37500 平方公尺",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "15000 平方公尺",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "750 平方公尺",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "D",
            "text": "75000 平方公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "A",
        "check": {
          "expr": "(5 * 50) * (3 * 50)",
          "expect": "37500"
        },
        "explanation": {
          "examPurpose": "先利用比例尺將長方形舞臺的圖上長、寬分別換算為實際公尺，再相乘求實際面積。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺 1：5000 代表圖上 1 公分 ＝ 實際 50 公尺。"
            },
            {
              "type": "text",
              "text": "第 2 步：從圖上讀出長方形舞臺長 5 公分、寬 3 公分，先算出實際長與實際寬："
            },
            {
              "type": "eq",
              "expr": "5 × 50 = 250",
              "unit": "公尺（實際長）"
            },
            {
              "type": "eq",
              "expr": "3 × 50 = 150",
              "unit": "公尺（實際寬）"
            },
            {
              "type": "text",
              "text": "第 3 步：長方形實際面積 ＝ 實際長 × 實際寬："
            },
            {
              "type": "eq",
              "expr": "250 × 150 = 37500",
              "unit": "平方公尺"
            },
            {
              "type": "answer",
              "text": "答：舞臺的實際面積是 37500 平方公尺。"
            }
          ],
          "insight": "求實際面積一定要「先把長和寬各自放大換成實際公尺，最後再長 × 寬」！",
          "distractorAnalysis": {
            "C": "先算圖上面積 5 × 3 ＝ 15 平方公分，之後只乘了一次 50（15 × 50 ＝ 750），忘記長跟寬各放大了 50 倍！",
            "D": "單位換算混淆或長寬乘錯成 2 倍。",
            "B": "先算圖上面積 15 再乘以 1000，忘記 1 公分是 50 公尺且面積要乘兩次 50（2500 倍）。"
          }
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "1 公分：5000 公分 ＝ 1 公分：50 公尺",
        "實際面積 ＝ 實際長 × 實際寬 ＝ 圖上面積 × (比例尺分母公尺數)²"
      ],
      "conceptCompare": "算面積最安全的做法就是「先換長度、再乘面積」，永遠不要拿圖上面積直接乘一次比例尺！",
      "examVariations": "常加問「觀眾席半圓形的實際面積」或「舞臺與池塘之間相距幾公尺」。"
    }
  },
  {
    "id": "EX2-PUREN-18",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "畫放大圖與縮小圖",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 三、看圖回答問題 第3題",
    "batch": "段考真題",
    "category": "方格紙畫放大圖",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "3. 畫出下圖的 2 倍放大圖。（請選出放大圖各關鍵邊的正確格數，並於作答後對照標準方格圖）",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_grid_pent.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "figureSvg": "<svg viewBox=\"0 0 420 320\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', sans-serif\">\n  <rect x=\"0\" y=\"0\" width=\"420\" height=\"320\" fill=\"#ffffff\"/>\n  <g transform=\"translate(10, 10)\">\n    <!-- 20x15 grid (1 cell = 20px) -->\n    <g stroke=\"#cbd5e1\" stroke-width=\"1\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"300\"/><line x1=\"20\" y1=\"0\" x2=\"20\" y2=\"300\"/><line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"300\"/><line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"300\"/><line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"300\"/><line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"300\"/><line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"300\"/><line x1=\"140\" y1=\"0\" x2=\"140\" y2=\"300\"/><line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"300\"/><line x1=\"180\" y1=\"0\" x2=\"180\" y2=\"300\"/><line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"300\"/><line x1=\"220\" y1=\"0\" x2=\"220\" y2=\"300\"/><line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"300\"/><line x1=\"260\" y1=\"0\" x2=\"260\" y2=\"300\"/><line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"300\"/><line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"300\"/><line x1=\"320\" y1=\"0\" x2=\"320\" y2=\"300\"/><line x1=\"340\" y1=\"0\" x2=\"340\" y2=\"300\"/><line x1=\"360\" y1=\"0\" x2=\"360\" y2=\"300\"/><line x1=\"380\" y1=\"0\" x2=\"380\" y2=\"300\"/><line x1=\"400\" y1=\"0\" x2=\"400\" y2=\"300\"/>\n      <line x1=\"0\" y1=\"0\" x2=\"400\" y2=\"0\"/><line x1=\"0\" y1=\"20\" x2=\"400\" y2=\"20\"/><line x1=\"0\" y1=\"40\" x2=\"400\" y2=\"40\"/><line x1=\"0\" y1=\"60\" x2=\"400\" y2=\"60\"/><line x1=\"0\" y1=\"80\" x2=\"400\" y2=\"80\"/><line x1=\"0\" y1=\"100\" x2=\"400\" y2=\"100\"/><line x1=\"0\" y1=\"120\" x2=\"400\" y2=\"120\"/><line x1=\"0\" y1=\"140\" x2=\"400\" y2=\"140\"/><line x1=\"0\" y1=\"160\" x2=\"400\" y2=\"160\"/><line x1=\"0\" y1=\"180\" x2=\"400\" y2=\"180\"/><line x1=\"0\" y1=\"200\" x2=\"400\" y2=\"200\"/><line x1=\"0\" y1=\"220\" x2=\"400\" y2=\"220\"/><line x1=\"0\" y1=\"240\" x2=\"400\" y2=\"240\"/><line x1=\"0\" y1=\"260\" x2=\"400\" y2=\"260\"/><line x1=\"0\" y1=\"280\" x2=\"400\" y2=\"280\"/><line x1=\"0\" y1=\"300\" x2=\"400\" y2=\"300\"/>\n    </g>\n    <!-- Original pentagon: (1,2)-(3,0)-(9,0)-(9,3)-(5,5) -->\n    <polygon points=\"20,40 60,0 180,0 180,60 100,100\" fill=\"rgba(100,116,139,0.18)\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/>\n    <!-- 2x Enlarged pentagon: (2,6)-(6,2)-(18,2)-(18,8)-(10,12) -->\n    <polygon points=\"40,120 120,40 360,40 360,160 200,240\" fill=\"rgba(37,99,235,0.15)\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n    <g fill=\"#1d4ed8\">\n      <circle cx=\"40\" cy=\"120\" r=\"4\"/><circle cx=\"120\" cy=\"40\" r=\"4\"/><circle cx=\"360\" cy=\"40\" r=\"4\"/><circle cx=\"360\" cy=\"160\" r=\"4\"/><circle cx=\"200\" cy=\"240\" r=\"4\"/>\n    </g>\n    <text x=\"240\" y=\"32\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">上方水平邊：6 × 2 ＝ 12 格</text>\n    <text x=\"368\" y=\"105\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"start\">右側</text>\n    <text x=\"368\" y=\"122\" font-size=\"13\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"start\">6 格</text>\n    <text x=\"95\" y=\"16\" font-size=\"12\" fill=\"#475569\" text-anchor=\"middle\">原圖(虛線)</text>\n    <text x=\"200\" y=\"262\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">總寬 16 格 × 總高 10 格（全部頂點格距皆 × 2）</text>\n  </g>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "上方水平邊長 24 格，右側垂直邊長 12 格，總高 20 格",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "上方水平邊長 12 格，右側垂直邊長 6 格，總高 10 格",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "上方水平邊長 12 格，右側垂直邊長 3 格，總高 5 格",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "上方水平邊長 8 格，右側垂直邊長 5 格，總高 7 格",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "6 * 2",
      "expect": "12",
      "extraChecks": [
        {
          "expr": "3 * 2",
          "expect": "6"
        },
        {
          "expr": "5 * 2",
          "expect": "10"
        }
      ]
    },
    "explanation": {
      "examPurpose": "在方格紙上運用「水平格數 × 2、垂直格數 × 2」準確定位五邊形各頂點，畫出 2 倍放大圖。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先數原圖五邊形的水平與垂直格數：上方水平邊佔 6 格、右側垂直邊佔 3 格、整張圖總寬 8 格、總高 5 格。"
        },
        {
          "type": "text",
          "text": "第 2 步：畫 2 倍放大圖時，每一個方向的格數都要乘以 2："
        },
        {
          "type": "eq",
          "expr": "6 × 2 = 12",
          "unit": "格（上方水平邊）"
        },
        {
          "type": "eq",
          "expr": "3 × 2 = 6",
          "unit": "格（右側垂直邊）"
        },
        {
          "type": "eq",
          "expr": "5 × 2 = 10",
          "unit": "格（總高度）"
        },
        {
          "type": "text",
          "text": "第 3 步：斜邊不用硬量長度，只要數對「往左幾格、往下幾格」把 5 個頂點（例如往左 4 格往下 4 格、往右 8 格往下 6 格等）點出來再連直線即可！"
        },
        {
          "type": "answer",
          "text": "答：上方水平邊長 12 格，右側垂直邊長 6 格，總高 10 格。"
        }
      ],
      "insight": "畫方格斜邊秘訣：「數頂點的水平位移與垂直位移」，兩者同時 × 2 就能畫出完全平行的斜邊！",
      "distractorAnalysis": {
        "C": "只放大了橫向的水平邊長，垂直邊長和高度忘記乘以 2，圖形會變得扁扁的。",
        "D": "誤把「2 倍」當成「各邊加 2 格」（6 ＋ 2 ＝ 8、3 ＋ 2 ＝ 5），放大是乘法不是加法！",
        "A": "把每段格數誤乘以 4（畫成了 4 倍放大圖），已經超出 20 × 15 方格紙範圍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "方格作圖法：每個頂點的 (水平格數, 垂直格數) 都乘以放大倍數"
      ],
      "conceptCompare": "「放大 2 倍」是每邊格數 × 2，千萬不要「加 2 格」！也不要只拉長寬度而忘記拉高高度。",
      "examVariations": "常考在畫好的 2 倍放大圖中，讓學生直接檢查是否每個內角的角度看起來都與原圖完全一致。"
    },
    "work": "lg"
  },
  {
    "id": "EX2-PUREN-19",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 四、應用題 第1題",
    "batch": "段考真題",
    "category": "年齡差不變問題",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "1. 小丸子和爺爺一起看相簿，爺爺說：「這張照片是你媽媽 32 歲、姊姊 4 歲時拍的。」今年媽媽的年齡是姊姊的 5 倍，這張照片是幾年前拍攝的？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "options": [
      {
        "key": "A",
        "text": "4 年前",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "5 年前",
        "trapCode": "U08_AGE_DIFF_CHANGE"
      },
      {
        "key": "C",
        "text": "3 年前",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "7 年前",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(32 - 4) / (5 - 1) - 4",
      "expect": "3"
    },
    "explanation": {
      "examPurpose": "把握「兩人的年齡差永遠不變」，由今年媽媽是姊姊的 5 倍求出今年姊姊幾歲，再減去拍照時的 4 歲。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：不管經過幾年，媽媽和姊姊的年齡差永遠固定不變："
        },
        {
          "type": "eq",
          "expr": "32 − 4 = 28",
          "unit": "歲（年齡差）"
        },
        {
          "type": "text",
          "text": "第 2 步：今年媽媽年齡是姊姊的 5 倍，把今年姊姊年齡當作 1 份，媽媽就是 5 份，年齡差 28 歲剛好對應 5 − 1 ＝ 4 份。"
        },
        {
          "type": "eq",
          "expr": "28 ÷ (5 − 1) = 7",
          "unit": "歲（今年姊姊）"
        },
        {
          "type": "text",
          "text": "第 3 步：拍照時姊姊 4 歲，今年姊姊 7 歲，所以照片是在幾年前拍攝的："
        },
        {
          "type": "eq",
          "expr": "7 − 4 = 3",
          "unit": "年前"
        },
        {
          "type": "answer",
          "text": "答：這張照片是 3 年前拍攝的。"
        }
      ],
      "insight": "年齡問題黃金鐵律：「兩人年齡差永遠不變」！算出今年姊姊 7 歲後，別忘了再減 4 歲才是幾年前！",
      "distractorAnalysis": {
        "D": "算出今年姊姊 7 歲就直接當成答案，忘記再減去拍照時的 4 歲！",
        "A": "誤把拍照時姊姊的年齡 4 歲當成經過的年數，或計算錯誤。",
        "B": "誤用年齡差相關計算出錯，或把倍數 5 直接當答案。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 大年齡 − 小年齡（永遠不變）",
        "幾年前 ＝ 今年年齡 − 拍照時年齡"
      ],
      "conceptCompare": "算完一定要用今年年齡反過來驗算：3 年後媽媽 32 ＋ 3 ＝ 35 歲、姊姊 4 ＋ 3 ＝ 7 歲，35 ÷ 7 ＝ 5 倍，完全吻合！",
      "examVariations": "常改問：「幾年後，媽媽的年齡會是姊姊的 3 倍？」（28 ÷ (3 − 1) ＝ 14 歲，再減現在或拍照年齡）。"
    },
    "work": "md"
  },
  {
    "id": "EX2-PUREN-20",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 四、應用題 第2題",
    "batch": "段考真題",
    "category": "正三角形減三扇形周長",
    "level": 3,
    "difficulty": 4,
    "questionType": "choice",
    "question": "2. 下圖是一個邊長 20 公分的正三角形，以正三角形的 3 個頂點為圓心，分別剪下半徑 6 公分的扇形後，剩下的塗色部分的周長大約是多少公分？",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_tri_sector.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "options": [
      {
        "key": "A",
        "text": "18.84 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "B",
        "text": "54.84 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "61.68 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "42.84 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(20 - 6 * 2) * 3 + 6 * 2 * 3.14 / 2",
      "expect": "42.84"
    },
    "explanation": {
      "examPurpose": "拆解複合圖形外圍邊界：由 3 段直邊與 3 段圓弧組成，並利用「三角形內角和 ＝ 180°」將 3 段圓弧合併為半圓弧長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：計算 3 段直線邊界：正三角形每條邊長 20 公分，兩頭各被剪掉半徑 6 公分，每段剩下 20 − 6 − 6 ＝ 8 公分。"
        },
        {
          "type": "eq",
          "expr": "(20 − 6 × 2) × 3 = 24",
          "unit": "公分（3 段直邊）"
        },
        {
          "type": "text",
          "text": "第 2 步：計算 3 段彎曲弧長：正三角形 3 個內角都是 60°，三個扇形圓心角合起來為 60° × 3 ＝ 180°，剛好拼成半個圓的弧長！"
        },
        {
          "type": "eq",
          "expr": "6 × 2 × 3.14 ÷ 2 = 18.84",
          "unit": "公分（3 段弧長和）"
        },
        {
          "type": "text",
          "text": "第 3 步：把直邊與弧長相加，就是塗色部分的總周長："
        },
        {
          "type": "eq",
          "expr": "24 + 18.84 = 42.84",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：剩下的塗色部分的周長大約是 42.84 公分。"
        }
      ],
      "insight": "看到三角形 3 個頂點剪扇形，別一個一個慢慢算！3 個內角加起來永遠是 180°（半圓）！",
      "distractorAnalysis": {
        "A": "只算出了 3 段彎曲弧長 18.84 公分，完全忘記加上中間剩下的 3 段直邊 24 公分！",
        "B": "每條邊 20 公分只減了一個 6 公分（算成 14 × 3 ＝ 42 公分），忘記每一邊「左右兩頭」各有一個頂點剪掉 6 公分！",
        "C": "誤以為 3 個扇形合起來是一個整圓（360°），多算了一倍的弧長變成 24 ＋ 37.68 ＝ 61.68 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "複合圖形周長 ＝ 所有外圍直邊 ＋ 所有外圍圓弧（虛線不算！）",
        "三角形三個內角和 ＝ 180° ＝ 1/2 圓"
      ],
      "conceptCompare": "原三角形周長是 60 公分，剪去兩頭兩段直邊（6 ＋ 6 ＝ 12 公分，三邊共少 36 公分），再補回半圓弧長 18.84 公分。",
      "examVariations": "若改成「正方形 4 個頂點各剪下半徑 6 公分的扇形」，四個內角和為 360°，弧長就會剛好拼成 1 個整圓！"
    },
    "work": "lg"
  },
  {
    "id": "EX2-PUREN-21",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與地圖距離",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 四、應用題 第3題",
    "batch": "段考真題",
    "category": "比例尺與速率時間應用",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "3. 下面是中央三角運動公園（1/5000）的縮小圖，瓔珞以一分鐘 200 公尺的速度繞公園跑步，要花幾分鐘才能跑完一圈？",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_tri_park.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "options": [
      {
        "key": "A",
        "text": "5 分鐘",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "0.1 分鐘",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "500 分鐘",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "10 分鐘",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(4 + 7 + 9) * 5000 / 100 / 200",
      "expect": "5"
    },
    "explanation": {
      "examPurpose": "結合三角形周長、1/5000 比例尺換算實際公尺數，以及距離 ÷ 速率 ＝ 時間的跨單元計算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從圖中讀取三角形三邊長分別是 4 公分、7 公分、9 公分，先算圖上周長："
        },
        {
          "type": "eq",
          "expr": "4 + 7 + 9 = 20",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：公園是 1/5000 的縮小圖，代表實際長度是圖上長度的 5000 倍，先算實際周長並換算為公尺（1 公尺 ＝ 100 公分）："
        },
        {
          "type": "eq",
          "expr": "20 × 5000 ÷ 100 = 1000",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 3 步：每分鐘跑 200 公尺，跑完 1000 公尺所需的時間為："
        },
        {
          "type": "eq",
          "expr": "1000 ÷ 200 = 5",
          "unit": "分鐘"
        },
        {
          "type": "answer",
          "text": "答：要花 5 分鐘才能跑完一圈。"
        }
      ],
      "insight": "先算圖上周長 20 公分 ➔ 乘 5000 變 100000 公分 ➔ 去 2 個 0 變 1000 公尺 ➔ 除以 200 得 5 分鐘！",
      "distractorAnalysis": {
        "B": "忘記先乘以比例尺分母 5000，直接用 20 ÷ 200 ＝ 0.1 分鐘。",
        "C": "算出實際距離 100000 公分後，忘記把公分除以 100 換成公尺，直接算 100000 ÷ 200 ＝ 500 分鐘！",
        "D": "周長加錯或除法計算失誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際周長 ＝ 圖上周長 × 比例尺分母",
        "時間 ＝ 實際距離 ÷ 每分鐘速度"
      ],
      "conceptCompare": "比例尺 1/5000 相當於圖上 1 公分 ＝ 實際 50 公尺，先記住「1 公分 ＝ 50 公尺」，再算 20 × 50 ＝ 1000 公尺更快！",
      "examVariations": "若改問「跑 3 圈要花幾分鐘？」（15 分鐘）或「想在 4 分鐘內跑完一圈，每分鐘至少要跑幾公尺？（250 公尺）」。"
    },
    "work": "md"
  },
  {
    "id": "EX2-PUREN-22",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "反求基準量",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 四、應用題 第4題",
    "batch": "段考真題",
    "category": "部分長度反求全長",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "4. 有一根竹竿，在水面下的長度是 4/5 公尺，在水面上的部分占整根竹竿的 4/5，這根竹竿全長幾公尺？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "options": [
      {
        "key": "A",
        "text": "1 公尺",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "4 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "16/25 公尺",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "5 公尺",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(4/5) / (1 - 4/5)",
      "expect": "4"
    },
    "explanation": {
      "examPurpose": "區分「有單位的實際長度（4/5 公尺）」與「沒單位的比例（占全長的 4/5）」，先求水面下所占比例，再反求全長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把「整根竹竿的全長」當作基準量 1。水面上的部分占了 4/5，所以水面下的部分占整根竹竿的："
        },
        {
          "type": "eq",
          "expr": "1 − 4/5 = 1/5"
        },
        {
          "type": "text",
          "text": "第 2 步：已知水面下的長度是 4/5 公尺，正好對應整根竹竿的 1/5，用「部分量 ÷ 對應比例」求出全長："
        },
        {
          "type": "eq",
          "expr": "4/5 ÷ 1/5 = 4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：這根竹竿全長 4 公尺。"
        }
      ],
      "insight": "這題故意讓兩個數字都是 4/5！看清楚：一個有「公尺」（實際量），一個沒有單位（占全長的比例），要用 4/5 公尺除以 (1 − 4/5)！",
      "distractorAnalysis": {
        "A": "沒看出 4/5 公尺是「水面下」、占 4/5 是「水面上」，直接用 4/5 ÷ 4/5 ＝ 1 公尺。",
        "C": "反求基準量誤用乘法，算成 4/5 × 4/5 ＝ 16/25 公尺。",
        "D": "分數除法誤算分子分母，寫成 5 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "全長 ＝ 某段實際長度 ÷ 該段占全長的比例"
      ],
      "conceptCompare": "「占全長的 4/5」是水上，「4/5 公尺」是水下，兩者位置相反，必須先用 1 − 4/5 ＝ 1/5 找出水下的比例才能相除！",
      "examVariations": "經典竹竿插入水中題，常加進「插入泥土中的部分占 1/6、水上占 1/2，剩下水中有 2 公尺」的三段問法。"
    },
    "work": "sm"
  },
  {
    "id": "EX2-PUREN-23",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "和差問題",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 四、應用題 第5題",
    "batch": "段考真題",
    "category": "周長與和差問題",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "5. 一條長 110 公分的緞帶，剛好可以圍著一個長方形餅乾盒子周長一圈，打結處用了 20 公分，餅乾盒的長比寬多 15 公分，餅乾盒的長和寬各是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p2.png",
    "options": [
      {
        "key": "A",
        "text": "長 35 公分，寬 20 公分",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "長 60 公分，寬 30 公分",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "長 30 公分，寬 15 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "長 52.5 公分，寬 37.5 公分",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "((110 - 20) / 2 + 15) / 2",
      "expect": "30",
      "extraChecks": [
        {
          "expr": "((110 - 20) / 2 - 15) / 2",
          "expect": "15"
        }
      ]
    },
    "explanation": {
      "examPurpose": "先扣掉打結長度求出長方形周長，再除以 2 求出「長 ＋ 寬」的和，最後代入和差公式。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：緞帶長 110 公分扣掉打結用的 20 公分，才是餅乾盒的周長："
        },
        {
          "type": "eq",
          "expr": "110 − 20 = 90",
          "unit": "公分（周長）"
        },
        {
          "type": "text",
          "text": "第 2 步：長方形周長包含 2 條長和 2 條寬，所以一組「長 ＋ 寬」的和為："
        },
        {
          "type": "eq",
          "expr": "90 ÷ 2 = 45",
          "unit": "公分（長 ＋ 寬）"
        },
        {
          "type": "text",
          "text": "第 3 步：利用和差公式（大數 ＝ (和 ＋ 差) ÷ 2）算出長與寬："
        },
        {
          "type": "eq",
          "expr": "(45 + 15) ÷ 2 = 30",
          "unit": "公分（長）"
        },
        {
          "type": "eq",
          "expr": "30 − 15 = 15",
          "unit": "公分（寬）"
        },
        {
          "type": "answer",
          "text": "答：餅乾盒的長是 30 公分，寬是 15 公分。"
        }
      ],
      "insight": "長方形和差題兩大關卡：① 記得先扣掉打結處 20 公分；② 周長 90 要先 ÷ 2 才是一組「長 ＋ 寬」！",
      "distractorAnalysis": {
        "D": "忘記周長 90 要先除以 2 才是一組長＋寬，直接把 90 當成「長 ＋ 寬」去算 (90 ＋ 15) ÷ 2。",
        "A": "忘記扣掉打結處 20 公分，用 110 ÷ 2 ＝ 55 去算 (55 ＋ 15) ÷ 2 ＝ 35 公分。",
        "B": "算出 (長 ＋ 寬) ＝ 45 與相加後忘記除以 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "長 ＋ 寬 ＝ 長方形周長 ÷ 2",
        "大數 ＝ (和 ＋ 差) ÷ 2；小數 ＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "最後一定要驗算周長＋打結：(30 ＋ 15) × 2 ＋ 20 ＝ 90 ＋ 20 ＝ 110 公分，長 − 寬 ＝ 15 公分！",
      "examVariations": "有時會把「打結處」改成「接縫處重疊 5 公分」，重疊時可用長度也是先扣掉重疊處嗎？要注意是重疊會少 5 公分還是打結多用掉 20 公分！"
    },
    "work": "lg"
  },
  {
    "id": "EX2-PUREN-24",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "雞兔與假設法",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 四、應用題 第6題",
    "batch": "段考真題",
    "category": "問答倒扣假設法",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "6. 小杉參加知識問題搶答，大會規定答對一題得 10 分，答錯一題倒扣 2 分。小杉一共搶答了 33 題，最後得到的分數是 246 分，請問小杉一共答對幾題？（倒扣是指得不到原本的分數，還要再扣分）",
    "examPageImage": "images/exams/EXAM_MID2/puren_p3.png",
    "options": [
      {
        "key": "A",
        "text": "22 題",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "B",
        "text": "23 題",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "C",
        "text": "7 題",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "D",
        "text": "26 題",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "33 - (33 * 10 - 246) / (10 + 2)",
      "expect": "26"
    },
    "explanation": {
      "examPurpose": "熟練含「倒扣」的雞兔同籠假設法：答錯一題與答對一題的差距是「加起來（10 ＋ 2 ＝ 12 分）」，不是相減。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 33 題全部都答對，滿分應為："
        },
        {
          "type": "eq",
          "expr": "33 × 10 = 330",
          "unit": "分"
        },
        {
          "type": "text",
          "text": "第 2 步：實際只得 246 分，比滿分少拿了："
        },
        {
          "type": "eq",
          "expr": "330 − 246 = 84",
          "unit": "分"
        },
        {
          "type": "text",
          "text": "第 3 步：每錯 1 題不但拿不到原本的 10 分，還要倒扣 2 分，一來一回差了 10 ＋ 2 ＝ 12 分！所以答錯題數為："
        },
        {
          "type": "eq",
          "expr": "84 ÷ (10 + 2) = 7",
          "unit": "題（答錯）"
        },
        {
          "type": "text",
          "text": "第 4 步：最後用總題數扣掉答錯題數，算出答對幾題："
        },
        {
          "type": "eq",
          "expr": "33 − 7 = 26",
          "unit": "題（答對）"
        },
        {
          "type": "answer",
          "text": "答：小杉一共答對 26 題。"
        }
      ],
      "insight": "倒扣題必殺技：少拿的 10 分 ＋ 倒扣的 2 分 ＝ 每錯一題總共損失 12 分！最後記得用 33 減 7 求「答對」題數。",
      "distractorAnalysis": {
        "C": "算出了「答錯」的 7 題就直接當答案，忘記題目問的是「答對幾題」！",
        "A": "一來一回的分數差誤用減法 10 − 2 ＝ 8，算成少拿 84 ÷ 8 無法整除或胡亂四捨五入（或誤算答錯 10.5 題）。",
        "B": "倒扣算錯成只扣 10 分（84 ÷ 10 約 8～9 題），忘記把倒扣的 2 分加進去。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全對總分 ＝ 總題數 × 答對得分",
        "錯 1 題損失分數 ＝ 答對得分 ＋ 倒扣分數",
        "答錯題數 ＝ (全對總分 − 實得總分) ÷ (得分 ＋ 倒扣分)"
      ],
      "conceptCompare": "假設「全對」時，算出來的是「答錯」的題數；假設「全錯（−66 分）」時，算出來的才是「答對」的題數，因此用假設全對後一定要記得用總題數去減！",
      "examVariations": "常改寫為「運送玻璃瓶：運到一個給運費 10 元，打破一個賠 20 元」（損失 10 ＋ 20 ＝ 30 元），解法完全相同。"
    },
    "work": "lg"
  },
  {
    "id": "EX2-PUREN-25",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "雞兔與假設法",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 四、應用題 第7題",
    "batch": "段考真題",
    "category": "雞兔同籠假設法",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "7. 籠子裡一共有 12 隻怪獸，怪獸 A 有 11 隻腳，怪獸 B 有 17 隻腳，牠們共有 156 隻腳，籠子裡的怪獸各有多少隻？",
    "examPageImage": "images/exams/EXAM_MID2/puren_p3.png",
    "options": [
      {
        "key": "A",
        "text": "怪獸 A 有 8 隻，怪獸 B 有 4 隻",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "怪獸 A 有 4 隻，怪獸 B 有 8 隻",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "怪獸 A 有 6 隻，怪獸 B 有 6 隻",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "怪獸 A 有 9 隻，怪獸 B 有 3 隻",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "12 - (156 - 12 * 11) / (17 - 11)",
      "expect": "8",
      "extraChecks": [
        {
          "expr": "(156 - 12 * 11) / (17 - 11)",
          "expect": "4"
        }
      ]
    },
    "explanation": {
      "examPurpose": "運用標準雞兔同籠假設法，求出兩種不同腳數怪獸各自的數量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 12 隻全部都是腳比較少的「怪獸 A」（每隻 11 隻腳），總腳數應為："
        },
        {
          "type": "eq",
          "expr": "12 × 11 = 132",
          "unit": "隻腳"
        },
        {
          "type": "text",
          "text": "第 2 步：比實際的 156 隻腳少了 156 − 132 ＝ 24 隻腳。每把 1 隻怪獸 A 換成怪獸 B 會多出 17 − 11 ＝ 6 隻腳，因此怪獸 B 的數量為："
        },
        {
          "type": "eq",
          "expr": "(156 − 132) ÷ (17 − 11) = 4",
          "unit": "隻（怪獸 B）"
        },
        {
          "type": "text",
          "text": "第 3 步：剩下的就是怪獸 A 的數量："
        },
        {
          "type": "eq",
          "expr": "12 − 4 = 8",
          "unit": "隻（怪獸 A）"
        },
        {
          "type": "answer",
          "text": "答：怪獸 A 有 8 隻，怪獸 B 有 4 隻。"
        }
      ],
      "insight": "假設全部是腳數少的（怪獸 A），多出來的腳 ÷ 兩者腳數差 ＝ 腳數多的（怪獸 B）！",
      "distractorAnalysis": {
        "B": "把算出的 4 隻誤當成假設的怪獸 A，造成兩種怪獸數量顛倒。",
        "C": "直接把 12 隻平分成 6 隻和 6 隻，沒驗算腳數（6 × 11 ＋ 6 × 17 ＝ 168 隻腳，不合）。",
        "D": "減法或除法計算失誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全為小數 ➔ 算出的是大數的數量",
        "大數數量 ＝ (實際總數 − 全小數總數) ÷ (大 − 小)"
      ],
      "conceptCompare": "解完雞兔同籠一定要把答案代回腳數驗算：8 × 11 ＋ 4 × 17 ＝ 88 ＋ 68 ＝ 156 隻腳，100% 正確！",
      "examVariations": "常改寫為「車輪問題（汽車 4 輪、機車 2 輪）」或「硬幣問題（10 元與 50 元）」，架構完全一模一樣。"
    },
    "work": "lg"
  },
  {
    "id": "EX2-PUREN-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-4",
    "sectionName": "雞兔與基準量綜合應用",
    "school": "桃園市普仁國小",
    "source": "普仁國小 114上 期末評量 五、題組題 第1題(1)~(2)",
    "batch": "段考真題",
    "category": "飲料園遊會情境題組",
    "level": 3,
    "difficulty": 4,
    "questionType": "group",
    "question": "1. 普仁國小即將舉行園遊會，六年和班經過討論後決定賣飲料。下面是飲料的價目表，回答問題。",
    "stemImage": "images/exams/EXAM_MID2/crop_puren_drink_table.png",
    "examPageImage": "images/exams/EXAM_MID2/puren_p3.png",
    "work": "lg",
    "subQuestions": [
      {
        "subId": "EX2-PUREN-G04-1",
        "label": "(1)",
        "question": "(1) 有一位媽媽點了珍珠奶茶和綜合果汁共 10 杯，但是負責點餐的同學忘記這位媽媽各點了幾杯，只記得總共收了 390 元，這位媽媽珍珠奶茶和綜合果汁各點了幾杯？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "珍珠奶茶 7 杯，綜合果汁 3 杯",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "珍珠奶茶 6 杯，綜合果汁 4 杯",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "珍珠奶茶 4 杯，綜合果汁 6 杯",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "D",
            "text": "珍珠奶茶 5 杯，綜合果汁 5 杯",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "B",
        "check": {
          "expr": "10 - (390 - 35 * 10) / (45 - 35)",
          "expect": "6",
          "extraChecks": [
            {
              "expr": "(390 - 35 * 10) / (45 - 35)",
              "expect": "4"
            }
          ]
        },
        "explanation": {
          "examPurpose": "從價目表正確讀取珍珠奶茶（35 元）與綜合果汁（45 元）單價，並用假設法求出各自杯數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：先查價目表：珍珠奶茶每杯 35 元，綜合果汁每杯 45 元。"
            },
            {
              "type": "text",
              "text": "第 2 步：假設 10 杯全部點珍珠奶茶，總金額應為 35 × 10 ＝ 350 元，比實收 390 元少了 40 元。"
            },
            {
              "type": "text",
              "text": "第 3 步：每把 1 杯珍奶換成綜合果汁會多收 45 − 35 ＝ 10 元，因此綜合果汁的杯數為："
            },
            {
              "type": "eq",
              "expr": "(390 − 35 × 10) ÷ (45 − 35) = 4",
              "unit": "杯（綜合果汁）"
            },
            {
              "type": "text",
              "text": "第 4 步：再用 10 杯減去綜合果汁，得珍珠奶茶的杯數："
            },
            {
              "type": "eq",
              "expr": "10 − 4 = 6",
              "unit": "杯（珍珠奶茶）"
            },
            {
              "type": "answer",
              "text": "答：珍珠奶茶 6 杯，綜合果汁 4 杯。"
            }
          ],
          "insight": "6 × 35 ＋ 4 × 45 ＝ 210 ＋ 180 ＝ 390 元！用價目表先查對單價，再套假設法就穩拿滿分。",
          "distractorAnalysis": {
            "C": "把算出的 4 杯誤對應為珍珠奶茶，造成兩種飲料杯數對調（4 × 35 ＋ 6 × 45 ＝ 410 元不合）。",
            "D": "誤以為各半（5 × 35 ＋ 5 × 45 ＝ 400 元，比 390 元多 10 元）。",
            "A": "7 × 35 ＋ 3 × 45 ＝ 380 元，少算了 10 元。"
          }
        }
      },
      {
        "subId": "EX2-PUREN-G04-2",
        "label": "(2)",
        "question": "(2) 園遊會接近尾聲，同學決定將剩下的蘋果和紅茶用來做蘋果茶。先將蘋果榨成汁，再加入 7 倍的水稀釋成蘋果汁。一杯蘋果茶中，蘋果汁的容量是紅茶的 1/4 倍，想要調配 4 公升的蘋果茶，需要準備多少公升的水、蘋果原汁和紅茶？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "水 0.7 公升，蘋果原汁 0.8 公升，紅茶 3.2 公升",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "水 0.1 公升，蘋果原汁 0.7 公升，紅茶 3.2 公升",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "水 0.7 公升，蘋果原汁 0.1 公升，紅茶 3.2 公升",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "水 0.875 公升，蘋果原汁 0.125 公升，紅茶 3 公升",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "C",
        "check": {
          "expr": "4 / (1 + 1/4)",
          "expect": "3.2",
          "extraChecks": [
            {
              "expr": "(4 - 4 / (1 + 1/4)) / (1 + 7)",
              "expect": "0.1"
            },
            {
              "expr": "(4 - 4 / (1 + 1/4)) / (1 + 7) * 7",
              "expect": "0.7"
            }
          ]
        },
        "explanation": {
          "examPurpose": "雙層基準量反推大魔王：先從蘋果茶總量（4 公升）反求紅茶與蘋果汁，再由蘋果汁反求蘋果原汁與水量。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：蘋果茶 ＝ 紅茶 ＋ 蘋果汁。因為蘋果汁是紅茶的 1/4 倍，把紅茶當作 1，整杯蘋果茶就是紅茶的 1 ＋ 1/4 ＝ 5/4 倍。"
            },
            {
              "type": "eq",
              "expr": "4 ÷ (1 + 1/4) = 3.2",
              "unit": "公升（紅茶）"
            },
            {
              "type": "text",
              "text": "第 2 步：蘋果汁的容量 ＝ 4 − 3.2 ＝ 0.8 公升。"
            },
            {
              "type": "text",
              "text": "第 3 步：蘋果汁是由「蘋果原汁 ＋ 7 倍的水」調成的，所以蘋果汁是蘋果原汁的 1 ＋ 7 ＝ 8 倍："
            },
            {
              "type": "eq",
              "expr": "0.8 ÷ (1 + 7) = 0.1",
              "unit": "公升（蘋果原汁）"
            },
            {
              "type": "text",
              "text": "第 4 步：最後算出水的容量（蘋果原汁的 7 倍）："
            },
            {
              "type": "eq",
              "expr": "0.1 × 7 = 0.7",
              "unit": "公升（水）"
            },
            {
              "type": "answer",
              "text": "答：需要準備水 0.7 公升、蘋果原汁 0.1 公升和紅茶 3.2 公升。"
            }
          ],
          "insight": "兩層基準量從外層往內層拆：① 先用 4 ÷ (1 ＋ 1/4) 拆出紅茶與蘋果汁；② 再用 0.8 ÷ (1 ＋ 7) 拆出蘋果原汁與水！",
          "distractorAnalysis": {
            "D": "把「蘋果汁是紅茶的 1/4 倍」誤當成「蘋果汁占整杯蘋果茶的 1/4（1 公升）」，導致紅茶算成 3 公升。",
            "A": "把整杯「蘋果汁 0.8 公升」直接當成了「蘋果原汁」，忘記蘋果汁裡面還混了 0.7 公升的水！",
            "B": "把水和蘋果原汁的容量寫反了（水應該比蘋果原汁多 7 倍才對）。"
          }
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "第一層基準量（紅茶）：總量 ÷ (1 ＋ 1/4)",
        "第二層基準量（蘋果原汁）：蘋果汁 ÷ (1 ＋ 7)"
      ],
      "conceptCompare": "調配問題要把「濃縮原汁」和「稀釋後的果汁」分清楚：題目給的「蘋果汁是紅茶的 1/4 倍」指的是稀釋後的蘋果汁（水 ＋ 蘋果原汁）。",
      "examVariations": "常改寫為「紅茶的容量是綠茶的 3/5 倍」或改問「水比蘋果原汁多幾公升？（0.6 公升）」。"
    }
  },
  {
    "id": "EX2-TAOZIJIAO-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和（和倍問題）",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "1. 媽媽和弟弟的年齡和為 52 歲，媽媽的年齡是弟弟的 3 1/3 倍，弟弟是幾歲？",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "弟弟（基準量 1 倍）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "媽媽（3 1/3 倍）",
          "units": 3.33,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "年齡和 52 歲（共 4 1/3 倍）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "10 歲",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "12 歲",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "14 歲",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "15 歲",
        "trapCode": "U05_SUM_FORGET_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗已知兩量的和與分數倍數關係時，能否先將基準量視為 1 倍，再以「總和 ÷ 總倍數」反求基準量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以弟弟的年齡為基準量（1 倍），媽媽是 3 1/3 倍，兩人年齡和共是（1 ＋ 3 1/3）倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 + 3 1/3 = 4 1/3 = 13/3",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：用年齡和除以總倍數，求出弟弟的年齡："
        },
        {
          "type": "eq",
          "expr": "52 ÷ 13/3 = 52 × 3/13 = 12",
          "unit": "歲"
        },
        {
          "type": "answer",
          "text": "答：弟弟是 12 歲。"
        }
      ],
      "insight": "和倍問題口訣：基準量 ＝ 總和 ÷（1 ＋ 倍數）。",
      "figureNote": "線段圖中把弟弟當作 1 份，媽媽佔 3 1/3 份，合計 4 1/3 份對應 52 歲，先算 1 份就是弟弟的歲數。",
      "distractorAnalysis": {
        "A": "分數除法約分計算失誤，52 ÷ 13 ＝ 4，再乘 3 應為 12，誤算成 10 歲。",
        "C": "分數通分或帶分數化假分數時計算錯誤，誤算成 14 歲。",
        "D": "忘記加上弟弟本身的 1 倍，直接拿 52 除以 3 1/3 並取整數估計，漏算基準量 1 份。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩量的和 ÷（1 ＋ 倍數）",
        "比較量 ＝ 基準量 × 倍數"
      ],
      "conceptCompare": "「和倍問題」要先把倍數加 1 再當除數；「差倍問題」則要把倍數減 1 再當除數，千萬不能忘記基準量本身佔 1 份！",
      "examVariations": "常改問「媽媽是幾歲？」或「媽媽和弟弟相差幾歲？」算出弟弟 12 歲後，媽媽是 52 − 12 ＝ 40 歲，兩人相差 40 − 12 ＝ 28 歲。"
    },
    "check": {
      "expr": "52 / (1 + 3 + 1/3)",
      "expect": "12"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與兩量的和",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "2. 甲數是乙數的 7 倍，甲、乙兩數的和是",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "乙數（基準量 1 倍）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "甲數（7 倍）",
          "units": 7,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "甲 ＋ 乙 ＝ 乙數的 8 倍"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "乙數的 8 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "乙數的 6 倍",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "C",
        "text": "甲數的 8 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "甲數的 6 倍",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗能否正確辨識「是乙數的 7 倍」是以乙數為基準量，並將兩數之和用基準量的倍數表示。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「甲數是乙數的 7 倍」，代表乙數是基準量（乙數的 1 倍），甲數是乙數的 7 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：甲、乙兩數的和 ＝ 乙數的 7 倍 ＋ 乙數的 1 倍："
        },
        {
          "type": "eq",
          "expr": "7 + 1 = 8",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：甲、乙兩數的和是乙數的 8 倍。"
        }
      ],
      "insight": "看到「誰是誰的幾倍」，後面的量就是基準量（1 份），「兩數和」就是（倍數 ＋ 1）倍！",
      "figureNote": "線段圖把乙數畫成 1 份，甲數畫成 7 份，全部合起來就是乙數的 8 份。",
      "distractorAnalysis": {
        "B": "把「和」看成「差」，算成 7 − 1 ＝ 6 倍。",
        "C": "基準量弄反了，乙數比甲數小，兩數和不可能比甲數大 8 倍。",
        "D": "基準量弄反且誤算成差倍 6 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 1 份，比較量 ＝ 倍數份",
        "兩數和 ＝ 基準量 ×（倍數 ＋ 1）"
      ],
      "conceptCompare": "「甲、乙兩數的和」是「乙數」的 8 倍；如果改問「甲、乙兩數的差」才是「乙數」的 6 倍，審題要看清基準量是誰！",
      "examVariations": "若題目改問「乙數是兩數和的幾分之幾？」因為乙是 1 份、和是 8 份，答案就是 1/8。"
    },
    "check": {
      "expr": "7 + 1",
      "expect": "8"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "3. 甲圓的圓周長是乙圓圓周長的 5 倍，已知甲圓的圓周長是 942 公分，下列有關乙圓的敘述，何者錯誤？",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "圓周率約 3.14",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "圓周長 188.4 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "直徑約 50 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "半徑約 30 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗圓周長的倍數換算、圓周率固定不變的性質，以及由圓周長反求直徑與半徑的能力。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出乙圓的圓周長（甲圓的 1/5）："
        },
        {
          "type": "eq",
          "expr": "942 ÷ 5 = 188.4",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：利用「直徑 ＝ 圓周長 ÷ 3.14」算出乙圓直徑（除數 3.14 為小數）："
        },
        {
          "type": "longdiv",
          "dividend": "188.4",
          "divisor": "3.14",
          "note": "把除數 3.14 放大 100 倍變成 314，被除數 188.4 也放大 100 倍變成 18840"
        },
        {
          "type": "eq",
          "expr": "188.4 ÷ 3.14 = 60",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：乙圓半徑 ＝ 60 ÷ 2 ＝ 30 公分；且任何圓的圓周率都固定約 3.14。因此敘述錯誤的是選項 C（直徑應約為 60 公分，不是 50 公分）。"
        },
        {
          "type": "answer",
          "text": "答：敘述錯誤的是「直徑約 50 公分」（正確直徑應約為 60 公分）。"
        }
      ],
      "insight": "半徑是 30 公分，直徑一定是半徑的 2 倍 ＝ 60 公分！兩個選項數字對不上時就能立刻抓出錯誤敘述。",
      "distractorAnalysis": {
        "A": "圓周率是固定常數（約 3.14），不會因為圓縮小為 1/5 而跟著縮小，所以選項 A 是正確敘述。",
        "B": "942 ÷ 5 ＝ 188.4 公分，這是正確的乙圓圓周長。",
        "D": "直徑 60 ÷ 2 ＝ 30 公分，這是正確的乙圓半徑。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 圓周長 ÷ 3.14",
        "半徑 ＝ 直徑 ÷ 2",
        "大圓與小圓的圓周率永遠相同（約 3.14）"
      ],
      "conceptCompare": "直徑、半徑、圓周長會同比例縮放（都是 5 倍）；但圓周率永遠固定是 3.14，不會變成 5 倍或 1/5 倍！",
      "examVariations": "若題目改問「甲圓直徑是乙圓半徑的幾倍？」甲直徑 300 公分、乙半徑 30 公分，答案是 10 倍。"
    },
    "check": {
      "expr": "942 / 5 / 3.14",
      "expect": "60"
    },
    "work": "md"
  },
  {
    "id": "EX2-TAOZIJIAO-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的性質",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "4. 將一個正方形影印放大 3 倍後，放大圖的其中一個角是幾度？",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "30 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "B",
        "text": "90 度",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "270 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "D",
        "text": "360 度",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗圖形放大或縮小後，「對應角大小完全不變」的核心性質。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：正方形的四個角原本都是直角（90 度）。"
        },
        {
          "type": "text",
          "text": "第 2 步：將圖形放大 3 倍後，邊長會變成原來的 3 倍，但形狀不變，所以每個「對應角」的角度完全不變，依然是 90 度。"
        },
        {
          "type": "eq",
          "expr": "90 = 90",
          "unit": "度"
        },
        {
          "type": "answer",
          "text": "答：放大圖的其中一個角是 90 度。"
        }
      ],
      "insight": "放大縮小口訣：邊長會縮放、面積變平方倍，唯有「角度永遠不變」！",
      "distractorAnalysis": {
        "A": "誤把 90 度除以 3 倍算成 30 度，角度不會跟著縮放。",
        "C": "誤以為角度也要乘以 3 倍，算成 90 × 3 ＝ 270 度。",
        "D": "把正方形四個角的內角和 360 度當成其中一個角的度數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大圖或縮小圖中：對應邊成比例，對應角相等（度數不變）"
      ],
      "conceptCompare": "影印放大 3 倍時：邊長變 3 倍、周長變 3 倍、面積變 3 × 3 ＝ 9 倍，但角度仍然是原來的 1 倍（90 度）。",
      "examVariations": "常改用放大鏡看 30 度角，問「用 5 倍放大鏡看一個 30 度的角，看到的角是幾度？」答案依然是 30 度！"
    },
    "check": {
      "expr": "90",
      "expect": "90"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題（假設法）",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "5. 小龍用 116 根數棒排了不相連的三角形和五邊形共 26 個，小龍排了幾個三角形？",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "7 個",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "8 個",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "18 個",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "19 個",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗運用假設法解決雞兔同籠變形問題（三角形 3 根與五邊形 5 根），並正確鎖定題目所問的對象。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：要求「幾個三角形」，先假設 26 個全部都是五邊形（每個用 5 根），算出總數棒數："
        },
        {
          "type": "eq",
          "expr": "5 × 26 = 130",
          "unit": "根"
        },
        {
          "type": "text",
          "text": "第 2 步：算出假設的數棒比實際的 116 根多出幾根："
        },
        {
          "type": "eq",
          "expr": "130 − 116 = 14",
          "unit": "根"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 個五邊形換成 1 個三角形，數棒會減少（5 − 3）＝ 2 根，所以三角形個數為："
        },
        {
          "type": "eq",
          "expr": "14 ÷ (5 − 3) = 7",
          "unit": "個"
        },
        {
          "type": "answer",
          "text": "答：小龍排了 7 個三角形。"
        }
      ],
      "insight": "問「三角形」就全部假設成「五邊形」，算出來的差額除以 2 就會直接得到三角形的數量！",
      "distractorAnalysis": {
        "B": "減法或除法計算失誤，14 ÷ 2 ＝ 7 誤算為 8。",
        "C": "26 − 8 ＝ 18 的連鎖誤算。",
        "D": "算出五邊形有 19 個就選答案，沒有看清楚題目問的是「幾個三角形」（19 個是五邊形）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全為乙種圖形：總數差異 ＝ 假設總量 − 實際總量",
        "甲種數量 ＝ 總數差異 ÷ 每組差額"
      ],
      "conceptCompare": "假設法求完一定要代回驗算：7 × 3 ＋ 19 × 5 ＝ 21 ＋ 95 ＝ 116 根，7 ＋ 19 ＝ 26 個，兩個條件全對才不會把三角形和五邊形搞反！",
      "examVariations": "若改為「相連」排成一列，每多 1 個會共用 1 根邊，需改用間隔規律（起始邊 ＋ 每次增加數）來算。"
    },
    "check": {
      "expr": "(5 * 26 - 116) / (5 - 3)",
      "expect": "7"
    },
    "work": "md"
  },
  {
    "id": "EX2-TAOZIJIAO-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "比與基準量化簡",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第1題(1)~(2)",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "1. 將下列題目的比，化為最簡整數比記下來。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-TAOZIJIAO-G01-1",
        "label": "(1)",
        "question": "班上近視的人數是全班的 75%。班上近視人數和全班人數的比可以記成（　　）。",
        "choiceStyle": "standard",
        "skipOptionNumMatch": true,
        "options": [
          {
            "key": "A",
            "text": "4：3",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "75：100",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "3：1",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          },
          {
            "key": "D",
            "text": "3：4",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "測驗將百分率關係轉換成兩量之比，並約分至最簡整數比。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：全班人數當作基準量 100%，近視人數是 75%，兩者的比為 75：100。"
            },
            {
              "type": "eq",
              "expr": "75 ： 100 = (75 ÷ 25) ： (100 ÷ 25) = 3 ： 4",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：班上近視人數和全班人數的比可以記成 3：4。"
            }
          ],
          "insight": "75% ＝ 3/4，分子 3 就是前項（近視人數），分母 4 就是後項（全班人數）。",
          "distractorAnalysis": {
            "A": "把「近視人數」與「全班人數」的前後項順序寫反了。",
            "B": "雖然寫出 75：100，但沒有繼續同除以最大公因數 25 化為「最簡整數比」。",
            "C": "把 75% 的比較與 25%（未近視）搞混，誤寫成 3：1。"
          }
        },
        "check": {
          "expr": "75 / 100",
          "expect": "3/4"
        }
      },
      {
        "subId": "EX2-TAOZIJIAO-G01-2",
        "label": "(2)",
        "question": "麵包店將肉桂捲的成本加四成五作為肉桂捲的定價，定價和成本的比可以記成（　　）。",
        "choiceStyle": "standard",
        "skipOptionNumMatch": true,
        "options": [
          {
            "key": "A",
            "text": "20：29",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "9：20",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "C",
            "text": "145：100",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "29：20",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "測驗理解「成本加四成五＝成本的 145%」，並寫出定價與成本的最簡整數比。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把成本當作 100%（1 份），加四成五就是加 45%，所以定價是成本的（100% ＋ 45%）＝ 145%。"
            },
            {
              "type": "text",
              "text": "第 2 步：寫出「定價：成本」並同除以 5 化為最簡整數比："
            },
            {
              "type": "eq",
              "expr": "145 ： 100 = (145 ÷ 5) ： (100 ÷ 5) = 29 ： 20",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：定價和成本的比可以記成 29：20。"
            }
          ],
          "insight": "幾成幾就是百分之幾十幾：四成五 ＝ 45%，加四成五就是 1 ＋ 0.45 ＝ 1.45 倍！",
          "distractorAnalysis": {
            "A": "寫成「成本：定價」，前後項順序顛倒。",
            "B": "只拿加成的四成五（45）去比成本 100，忘記加上成本原本的 100%。",
            "C": "寫成 145：100 卻忘記約分到最簡整數比（可同除以 5）。"
          }
        },
        "check": {
          "expr": "(1 + 0.45) / 1",
          "expect": "29/20"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "最簡整數比：前項與後項的最大公因數必須是 1",
        "加四成五 ＝ 原本的（1 ＋ 45%）＝ 145%"
      ],
      "conceptCompare": "寫「比」時一定要對照題目順序：「誰」和「誰」的比，前面的名詞放前項，後面的名詞放後項，且題目要求最簡整數比一定要約分到底！",
      "examVariations": "若改為「定價按成本打八折」，則售價是成本的 80%，售價和成本的比為 80：100 ＝ 4：5。"
    }
  },
  {
    "id": "EX2-TAOZIJIAO-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題（假設法步驟拆解）",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第2題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "2. 小鴨和小豬共 15 隻，小鴨和小豬合起來有 40 隻腳，如果把全部當作小豬，計算後的小豬腳數比實際的腳數多（　③　）隻腳，可以算出有（　④　）隻小鴨。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-TAOZIJIAO-G02-1",
        "label": "第 ③ 格",
        "question": "如果把全部當作小豬，計算後的小豬腳數比實際的腳數多（　　）隻腳。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "10 隻",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "B",
            "text": "30 隻",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "20 隻",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "60 隻",
            "trapCode": "U08_PENALTY_DIFF_ERR"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "測驗假設法的第一步：計算「假設總腳數」與「實際總腳數」的差額。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：每隻小豬有 4 隻腳，全部 15 隻都當成小豬，共有腳："
            },
            {
              "type": "eq",
              "expr": "4 × 15 = 60",
              "unit": "隻"
            },
            {
              "type": "text",
              "text": "第 2 步：減去題目給的實際總腳數 40 隻："
            },
            {
              "type": "eq",
              "expr": "60 − 40 = 20",
              "unit": "隻"
            },
            {
              "type": "answer",
              "text": "答：比實際的腳數多 20 隻腳。"
            }
          ],
          "insight": "全當小豬共 60 隻腳，比實際 40 隻腳多出的 20 隻腳，就是因為把小鴨也多算了腳！",
          "distractorAnalysis": {
            "D": "只算了全部當作小豬的總腳數 60 隻，忘記減去實際的 40 隻。",
            "A": "把下一格的小鴨數量 10 隻填錯格子。",
            "B": "假設全部當作小鴨（2 × 15 ＝ 30 隻腳）的計算混淆。"
          }
        },
        "check": {
          "expr": "4 * 15 - 40",
          "expect": "20"
        }
      },
      {
        "subId": "EX2-TAOZIJIAO-G02-2",
        "label": "第 ④ 格",
        "question": "承上題，可以算出有（　　）隻小鴨。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "15 隻",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "20 隻",
            "trapCode": "U08_PENALTY_DIFF_ERR"
          },
          {
            "key": "C",
            "text": "5 隻",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "D",
            "text": "10 隻",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "測驗假設法的第二步：將總腳數差額除以「每隻動物的腳數差（4 − 2）」，求得小鴨數量。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：每把 1 隻小豬換回 1 隻小鴨，會少（4 − 2）＝ 2 隻腳。"
            },
            {
              "type": "text",
              "text": "第 2 步：多出的 20 隻腳除以每次換回少掉的 2 隻腳，就是小鴨隻數："
            },
            {
              "type": "eq",
              "expr": "20 ÷ (4 − 2) = 10",
              "unit": "隻"
            },
            {
              "type": "answer",
              "text": "答：可以算出有 10 隻小鴨。"
            }
          ],
          "insight": "驗算一下：10 隻小鴨有 20 隻腳，5 隻小豬有 20 隻腳，20 ＋ 20 ＝ 40 隻腳，完全正確！",
          "distractorAnalysis": {
            "C": "5 隻是小豬的數量（15 − 10 ＝ 5），不是小鴨。",
            "A": "誤把總隻數 15 隻當作答案。",
            "B": "忘記除以單隻腳數差（4 − 2），直接拿多出的 20 當答案。"
          }
        },
        "check": {
          "expr": "(4 * 15 - 40) / (4 - 2)",
          "expect": "10"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "全假設為 4 隻腳的小豬：多出腳數 ＝ 4 × 總隻數 − 實際腳數",
        "2 隻腳的小鴨數 ＝ 多出腳數 ÷（4 − 2）"
      ],
      "conceptCompare": "全部假設成「小豬」，算出來的結果是「小鴨」；反過來如果全部假設成「小鴨」，算出來的結果就會是「小豬」！",
      "examVariations": "常改成買兩種門票（全票與半票）、大小盒包裝（如本卷應用題第 4 題）或答對加分、答錯倒扣問題。"
    }
  },
  {
    "id": "EX2-TAOZIJIAO-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題（年齡差不變）",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第3題(1)~(2)",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 1,
    "difficulty": 2,
    "questionType": "group",
    "question": "3. 奶奶今年 70 歲，爸爸今年 43 歲。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-TAOZIJIAO-G03-1",
        "label": "(1)",
        "question": "怎麼列式來表示奶奶年齡和爸爸年齡的關係？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "奶奶年齡 − 爸爸年齡 ＝ 27",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "奶奶年齡 ＋ 爸爸年齡 ＝ 113",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "C",
            "text": "奶奶年齡 ÷ 爸爸年齡 ＝ 27",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "D",
            "text": "爸爸年齡 − 奶奶年齡 ＝ 27",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "測驗理解兩人「年齡差永遠不變」的不變量關係，並能正確列式表達。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：計算今年奶奶與爸爸的年齡差："
            },
            {
              "type": "eq",
              "expr": "70 − 43 = 27",
              "unit": "歲"
            },
            {
              "type": "text",
              "text": "第 2 步：不管經過多少年，兩人每過 1 年都同時長大 1 歲，所以兩人的年齡差永遠維持 27 歲不變（也可寫成「爸爸年齡 ＋ 27 ＝ 奶奶年齡」）。"
            },
            {
              "type": "answer",
              "text": "答：奶奶年齡 − 爸爸年齡 ＝ 27（或 爸爸年齡 ＋ 27 ＝ 奶奶年齡）。"
            }
          ],
          "insight": "年齡和每年會加 2，倍數每年會變小，只有「年齡差」一輩子都不會改變！",
          "distractorAnalysis": {
            "B": "70 ＋ 43 ＝ 113 只是今年的年齡和，明年兩人年齡和會變成 115，無法用來表示永遠的關係。",
            "C": "年齡的關係是相加減固定差距，不是相除固定倍數。",
            "D": "奶奶比爸爸年長，減法順序寫反了。"
          }
        },
        "check": {
          "expr": "70 - 43",
          "expect": "27"
        }
      },
      {
        "subId": "EX2-TAOZIJIAO-G03-2",
        "label": "(2)",
        "question": "爸爸 50 歲時，奶奶幾歲？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "70 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "B",
            "text": "77 歲",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "87 歲",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "67 歲",
            "trapCode": "U08_AGE_NOW_OFFSET_MISS"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "測驗應用「年齡差永遠為 27 歲」推算未來某一年時兩人的年齡。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：奶奶永遠比爸爸大 27 歲（也可想成從 43 歲到 50 歲經過了 7 年）。"
            },
            {
              "type": "eq",
              "expr": "50 + 27 = 77",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：爸爸 50 歲時，奶奶 77 歲。"
            }
          ],
          "insight": "爸爸從 43 歲長大到 50 歲過了 7 年，奶奶也一樣長大 7 年：70 ＋ 7 ＝ 77 歲，用兩種算法結果都一樣！",
          "distractorAnalysis": {
            "D": "十位數加法進位或減法計算錯誤（算成 70 − 3）。",
            "A": "誤以為爸爸長大時奶奶年齡停在 70 歲不變。",
            "C": "進位算錯，50 ＋ 27 誤算為 87 歲。"
          }
        },
        "check": {
          "expr": "50 + (70 - 43)",
          "expect": "77"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 年長者歲數 − 年幼者歲數（永遠固定）",
        "未來某時的年長者歲數 ＝ 年幼者當時歲數 ＋ 年齡差"
      ],
      "conceptCompare": "「兩人的年齡差」是絕對不變量；「兩人的年齡和」與「倍數關係」則會隨著年分改變。",
      "examVariations": "若題目改問「幾年後奶奶的年齡是爸爸的 2 倍？」當奶奶是爸爸的 2 倍時，爸爸剛好等於年齡差 27 歲（這題裡 43 歲已經過去了，所以會改成問「幾年前」：43 − 27 ＝ 16 年前）。"
    }
  },
  {
    "id": "EX2-TAOZIJIAO-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "兩量的差（差倍問題）",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第4題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "4. 小新有 600 元，小年的錢是小新的 4.14 倍，小年比小新多（　　）元。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "小新（基準量 1 倍）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "小年（4.14 倍）",
          "units": 4.14,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "小年比小新多 3.14 倍"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "3084 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "1848 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "1884 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2484 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗已知基準量與小數倍數，能否運用「兩量的差 ＝ 基準量 ×（倍數 − 1）」快速求解。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把小新的錢當作 1 倍，小年是 4.14 倍，所以小年比小新多（4.14 − 1）＝ 3.14 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "4.14 − 1 = 3.14",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：用小新的 600 元乘以多出的 3.14 倍："
        },
        {
          "type": "eq",
          "expr": "600 × 3.14 = 1884",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：小年比小新多 1884 元。"
        }
      ],
      "insight": "先減 1 倍再乘比較快！600 × 3.14 ＝ 6 × 314 ＝ 1884 元，不用先把 2484 算出來再減 600。",
      "figureNote": "線段圖顯示小年比小新多出來的部分是 4.14 − 1 ＝ 3.14 份，剛好對應 1884 元。",
      "distractorAnalysis": {
        "D": "算成 600 × 4.14 ＝ 2484 元，那是「小年的錢」，忘記減去小新的 600 元。",
        "A": "誤算成「兩人合起來有多少元」：600 ×（4.14 ＋ 1）＝ 3084 元。",
        "B": "三位數乘法計算進位或位數對錯，把 1884 寫成 1848。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩量的差 ＝ 基準量 ×（倍數 − 1）"
      ],
      "conceptCompare": "問「多多少元」是求差量，用（倍數 − 1）；問「共多少元」是求和量，用（倍數 ＋ 1）。",
      "examVariations": "若改為「小年的錢是小新的 0.75 倍，小年比小新少幾元？」則差量倍數為（1 − 0.75）＝ 0.25 倍，600 × 0.25 ＝ 150 元。"
    },
    "check": {
      "expr": "600 * (4.14 - 1)",
      "expect": "1884"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "漲價逆推與小數除法",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第5題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "5. 台東颳起焚風，果農因此損失慘重，水果的價格也跟著漲了 15%。如果漲價後每斤釋迦是 92 元，比漲價前每斤貴（　　）元。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "漲價前（基準量 100%）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "漲價後（115% ＝ 92 元）",
          "units": 1.15,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "漲價 15%（貴多少元？）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "13.8 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "B",
        "text": "80 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "105.8 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "12 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗已知加成後的售價，能否逆推原本基準量（小數除法），並求出實際漲價的差額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把「漲價前」的價格當作基準量 1（100%），漲了 15% 後，漲價後的價格是原價的（1 ＋ 15%）＝ 1.15 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：已知 1.15 倍是 92 元，用除法反求漲價前的價格（除數 1.15 是小數）："
        },
        {
          "type": "longdiv",
          "dividend": "92",
          "divisor": "1.15",
          "note": "除數 1.15 放大 100 倍變 115，被除數 92 放大 100 倍變 9200，9200 ÷ 115 ＝ 80"
        },
        {
          "type": "eq",
          "expr": "92 ÷ 1.15 = 80",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：題目問「比漲價前每斤貴幾元」，再用漲價後減去漲價前："
        },
        {
          "type": "eq",
          "expr": "92 − 80 = 12",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：比漲價前每斤貴 12 元。"
        }
      ],
      "insight": "「漲價 15%」是以「原價」當基準量，不是用漲價後的 92 元去乘 15%！算出原價 80 元後記得再相減才算完題。",
      "figureNote": "線段圖顯示 92 元對應的是 1.15 份，必須先除以 1.15 算出 1 份（80 元），兩者的差額 0.15 份就是貴的 12 元。",
      "distractorAnalysis": {
        "A": "錯用漲價後的 92 元直接乘以 15%（92 × 0.15 ＝ 13.8），基準量抓錯了！",
        "B": "求出漲價前的原價 80 元就停手，沒看清題目問的是「貴了多少元」。",
        "C": "順推逆推搞混，拿 92 去乘以 1.15 算成 105.8 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "原價 ＝ 漲價後價格 ÷（1 ＋ 漲幅）",
        "貴的金額 ＝ 漲價後價格 − 原價"
      ],
      "conceptCompare": "「原價 80 元漲價 15%」是 80 × 1.15 ＝ 92 元；「92 元打八五折」則是 92 × 0.85 ＝ 78.2 元，兩者基準量不同，千萬不能混為一談！",
      "examVariations": "若改為「打八折後售價是 120 元，便宜了多少元？」先算原價 120 ÷ 0.8 ＝ 150 元，便宜 150 − 120 ＝ 30 元。"
    },
    "check": {
      "expr": "92 - 92 / 1.15",
      "expect": "12"
    },
    "work": "md"
  },
  {
    "id": "EX2-TAOZIJIAO-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長反求圓周長",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第6題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "6. 一個 7/12 圓的扇形，弧長是 84 公分，這個扇形所在的圓的圓周長是（　　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "144 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "72 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "168 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "49 公分",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗已知「幾分之幾圓」扇形的弧長，能否逆推求出完整圓的圓周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：7/12 圓的弧長就是整個圓周長的 7/12 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：已知圓周長 × 7/12 ＝ 84 公分，用除法反求圓周長："
        },
        {
          "type": "eq",
          "expr": "84 ÷ 7/12 = 84 × 12/7 = 144",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這個扇形所在的圓的圓周長是 144 公分。"
        }
      ],
      "insight": "把圓周長分成 12 等分，其中 7 等分是 84 公分，所以 1 等分 ＝ 84 ÷ 7 ＝ 12 公分，12 等分 ＝ 12 × 12 ＝ 144 公分！",
      "distractorAnalysis": {
        "D": "順逆推搞反，誤用乘法 84 × 7/12 ＝ 49 公分，圓周長不可能比弧長還短。",
        "B": "約分後乘法計算錯誤，把 12 × 12 誤算為 72。",
        "C": "分母 12 看成 14 或乘法進位算錯，誤得 168 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "整圓圓周長 ＝ 扇形弧長 ÷（幾分之幾圓）"
      ],
      "conceptCompare": "已知「整個圓」求「扇形弧長」用乘法；已知「扇形弧長」反求「整個圓」用除法！",
      "examVariations": "若題目進一步問「這個圓的直徑大約是多少公分？」算出圓周長 144 公分後，再除以 3.14 即可（這題出題時設計為整數 144，是為避免 144 ÷ 3.14 除不盡，所以只問圓周長）。"
    },
    "check": {
      "expr": "84 / (7/12)",
      "expect": "144"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長倍數關係",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第7題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "7. 大披薩的直徑是 39 公分，小披薩的半徑是 6.5 公分，大披薩的圓周長是小披薩圓周長的（　　）倍。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "1.5 倍",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "3 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "6 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "9 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗理解「圓周長比 ＝ 直徑比」，且能先將半徑換算成直徑再比較，免去繁瑣的 3.14 乘法。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目給一個「直徑」、一個「半徑」，先統一換算成直徑：小披薩的直徑 ＝ 6.5 × 2 ＝ 13 公分。"
        },
        {
          "type": "eq",
          "expr": "6.5 × 2 = 13",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：因為圓周長 ＝ 直徑 × 3.14，兩圓的 3.14 可以直接約掉，圓周長倍數就等於直徑的倍數："
        },
        {
          "type": "eq",
          "expr": "39 ÷ 13 = 3",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：大披薩的圓周長是小披薩圓周長的 3 倍。"
        }
      ],
      "insight": "算圓周長幾倍時根本不用乘 3.14！只要把兩個直徑（或兩個半徑）統一好，直接相除就是答案。",
      "distractorAnalysis": {
        "C": "沒看清楚小披薩給的是「半徑」，直接用直徑 39 除以半徑 6.5 算成 6 倍。",
        "D": "把「圓周長倍數」和「面積倍數（平方倍）」搞混，誤算成 3 × 3 ＝ 9 倍。",
        "A": "把 39 ÷ 13 誤算成 1.5 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "大圓周長 ÷ 小圓周長 ＝ 大圓直徑 ÷ 小圓直徑 ＝ 大圓半徑 ÷ 小圓半徑"
      ],
      "conceptCompare": "直徑、半徑、圓周長是一維長度，三者放大倍率完全一樣；只有面積才會變成平方倍！",
      "examVariations": "若問「大披薩的面積大約是小披薩面積的幾倍？」直徑是 3 倍，面積就是 3 × 3 ＝ 9 倍。"
    },
    "check": {
      "expr": "39 / (6.5 * 2)",
      "expect": "3"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與單位換算",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第8題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "question": "8. 在比例尺 1：50000 的地圖上，長 20 公分的公路，實際長度是（　　）公里。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "0.1 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "1 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "10 公里",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "100 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗已知數字比例尺與地圖長度，求實際距離，並正確完成公分換公里的單位換算（去 5 個 0）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1：50000 表示實際長度是圖上長度的 50000 倍，先算出實際長多少公分："
        },
        {
          "type": "eq",
          "expr": "20 × 50000 = 1000000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：1 公里 ＝ 1000 公尺 ＝ 100000 公分（去掉 5 個 0）："
        },
        {
          "type": "eq",
          "expr": "1000000 ÷ 100000 = 10",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：實際長度是 10 公里。"
        }
      ],
      "insight": "公分換公里「直接砍掉 5 個 0」（1 公里 ＝ 100000 公分）；也可以先記住「1：50000 代表 1 公分 ＝ 0.5 公里」，20 × 0.5 ＝ 10 公里！",
      "distractorAnalysis": {
        "B": "公分換公里時多砍了 1 個 0，把 1000000 公分誤算成 1 公里。",
        "D": "單位換算少砍了 1 個 0（只砍 4 個 0），誤算成 100 公里。",
        "A": "進位與小數點退位錯誤，誤算成 0.1 公里。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際長度 ＝ 地圖長度 × 比例尺後項",
        "1 公里 ＝ 1000 公尺 ＝ 100000 公分"
      ],
      "conceptCompare": "先算公分換公尺（去 2 個 0：1000000 公分 ＝ 10000 公尺），再換公里（去 3 個 0：10000 公尺 ＝ 10 公里），分兩段去 0 最不容易算錯！",
      "examVariations": "若改問「在比例尺 1：25000 的地圖上，實際 10 公里的公路會畫幾公分？」1000000 ÷ 25000 ＝ 40 公分。"
    },
    "check": {
      "expr": "20 * 50000 / 100000",
      "expect": "10"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺換算與雙重比例尺",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第9題(1)~(2)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 3,
    "questionType": "group",
    "question": "9. 小快繪製了一張地圖，地圖的比例尺是 1/2000，桃子腳國中小到台北大學的距離在地圖上長 80 公分，回答問題。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p2.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-TAOZIJIAO-G04-1",
        "label": "(1)",
        "question": "桃子腳國中小到台北大學的距離實際長（　　）公尺。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "16000 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "40 公尺",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "C",
            "text": "160 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "D",
            "text": "1600 公尺",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "測驗已知分數形式比例尺與圖上公分數，求實際公尺數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺 1/2000 表示實際距離是地圖長度的 2000 倍，先求實際公分數："
            },
            {
              "type": "eq",
              "expr": "80 × 2000 = 160000",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 2 步：1 公尺 ＝ 100 公分，把公分換成公尺（去掉 2 個 0）："
            },
            {
              "type": "eq",
              "expr": "160000 ÷ 100 = 1600",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：實際長 1600 公尺。"
            }
          ],
          "insight": "1/2000 代表圖上 1 公分 ＝ 2000 公分 ＝ 20 公尺，所以 80 × 20 ＝ 1600 公尺，秒殺！",
          "distractorAnalysis": {
            "C": "公分換公尺時多去掉了 1 個 0，誤算成 160 公尺。",
            "A": "換算時少去掉了 1 個 0，誤算成 16000 公尺。",
            "B": "乘除方向弄反，誤用 8000 ÷ 2000 或其他除法算成 40 公尺。"
          }
        },
        "check": {
          "expr": "80 * 2000 / 100",
          "expect": "1600"
        }
      },
      {
        "subId": "EX2-TAOZIJIAO-G04-2",
        "label": "(2)",
        "question": "同樣是桃子腳國中小到台北大學的距離，小快改成用比例尺 1：40000 繪製，在地圖上會變成（　　）公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "4 公分",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "40 公分",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "16 公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "1600 公分",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "測驗同一段實際距離在不同比例尺地圖上的長度換算（雙重比例尺轉換）。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：實際距離是 160000 公分（1600 公尺），現在改用比例尺 1：40000（縮小 40000 倍）："
            },
            {
              "type": "eq",
              "expr": "160000 ÷ 40000 = 4",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 2 步：也可以直接比較比例尺分母：40000 是 2000 的 20 倍（縮得更小），所以地圖上的長度會變成原來的 1/20：80 ÷ 20 ＝ 4 公分。"
            },
            {
              "type": "answer",
              "text": "答：在地圖上會變成 4 公分。"
            }
          ],
          "insight": "比例尺分母越大，地圖縮得越小！從 1/2000 變成 1/40000，分母變 20 倍，圖上長度就除以 20 變成 4 公分。",
          "distractorAnalysis": {
            "B": "160000 ÷ 40000 劃掉 0 時少劃一個 0，誤算成 40 公分。",
            "C": "誤把 16 ÷ 4 ＝ 4 與乘法混淆，寫成 16 公分。",
            "D": "忘記除以新比例尺分母 40000，直接填了第 (1) 題的 1600。"
          }
        },
        "check": {
          "expr": "(80 * 2000) / 40000",
          "expect": "4"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "實際距離 ＝ 圖上長 × 舊比例尺分母",
        "新圖上長 ＝ 實際距離 ÷ 新比例尺分母"
      ],
      "conceptCompare": "兩張地圖畫同一個地方時，哪一張比例尺的分母「比較小」，哪一張在地圖上就會畫得「比較大（比較詳細）」！",
      "examVariations": "常改問「同一塊正方形公園，在 1：2000 地圖和 1：40000 地圖上的面積相差幾倍？」長度差 20 倍，面積就會差 20 × 20 ＝ 400 倍！"
    }
  },
  {
    "id": "EX2-TAOZIJIAO-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長比較",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 二、填充題 第10題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "question": "10. 下圖中周長相同的圖形是（請填入代號）（　　）。（單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_fig_abcd.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "乙、丁",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "甲、丙",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "甲、乙",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "甲、丁",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗拆解複合圖形的「外圍邊界（周長）」，能分辨曲線弧長拼合後是否等於完整圓周長，而不被「面積」誤導。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：分別計算甲、乙、丙、丁四個塗色圖形的外圍周長："
        },
        {
          "type": "text",
          "text": "・圖甲：直徑 30 公分的整圓周長。"
        },
        {
          "type": "eq",
          "expr": "30 × 3.14 = 94.2",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "・圖乙：正方形的 3 條邊長（各 30 公分）＋ 1 個直徑 30 公分的半圓弧長："
        },
        {
          "type": "eq",
          "expr": "30 × 3 + 30 × 3.14 ÷ 2 = 90 + 47.1 = 137.1",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "・圖丙：上方由 2 個半徑 15 公分的 1/4 圓弧（合為半徑 15、即直徑 30 公分的半圓弧）＋ 下方 1 個直徑 30 公分的半圓弧，兩個半圓弧剛好合成 1 個整圓周長！"
        },
        {
          "type": "eq",
          "expr": "30 × 3.14 ÷ 2 + 30 × 3.14 ÷ 2 = 94.2",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "・圖丁：左右兩側各 1 個直徑 30 公分的半圓弧（合成 1 個整圓周長）＋ 上下兩條直線（各 10 公分）："
        },
        {
          "type": "eq",
          "expr": "30 × 3.14 + 10 × 2 = 114.2",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：周長相同的圖形是甲、丙（皆為 94.2 公分）。"
        }
      ],
      "insight": "算複合圖形周長不要急著乘 3.14！先把弧線拼起來看成「幾個直徑 30 的圓」＋「幾條直線」：甲＝1 個圓、乙＝半圓＋90、丙＝1 個圓、丁＝1 個圓＋20，一眼就看出甲和丙一樣！",
      "distractorAnalysis": {
        "C": "誤以為乙也是圓的一部分而忽略它多了 3 條 30 公分的正方形邊長。",
        "D": "忽略圖丁上下各多了一條 10 公分的直線邊，誤以為丁與甲一樣長。",
        "A": "把凹進去或凸出來的曲線弧長算錯，未正確盤點外圍邊界。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "複合圖形周長 ＝ 所有外圍曲線弧長 ＋ 所有外圍直線邊長（虛線輔助線不算周長）"
      ],
      "conceptCompare": "圖丙雖然面積比圖甲小很多（上方凹進去了兩個 1/4 圓），但凹進去的兩個 1/4 圓弧拼起來剛好等於凸出去的半圓弧，所以「周長反而跟整圓一模一樣」！",
      "examVariations": "若題目改問「四個圖形中周長最長的是哪一個？」乙圖 137.1 公分最長（乙 ＞ 丁 ＞ 甲 ＝ 丙）。"
    },
    "check": {
      "expr": "30 * 3.14",
      "expect": "94.2"
    },
    "work": "lg"
  },
  {
    "id": "EX2-TAOZIJIAO-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "方格紙繪製放大圖與縮小圖",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 三、畫畫看",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "畫出甲圖的 2 倍放大圖和 1/2 倍縮小圖。",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_grid_tri.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p3.png",
    "figureSvg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"'Noto Sans TC', Outfit, sans-serif\">\n  <rect x=\"0\" y=\"0\" width=\"600\" height=\"320\" fill=\"#ffffff\"/>\n  <g stroke=\"#cbd5e1\" stroke-width=\"1\">\n    <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"300\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"300\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"300\"/><line x1=\"80\" y1=\"20\" x2=\"80\" y2=\"300\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"300\"/><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"300\"/><line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"300\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"300\"/><line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"300\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"300\"/><line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"300\"/><line x1=\"240\" y1=\"20\" x2=\"240\" y2=\"300\"/><line x1=\"260\" y1=\"20\" x2=\"260\" y2=\"300\"/><line x1=\"280\" y1=\"20\" x2=\"280\" y2=\"300\"/><line x1=\"300\" y1=\"20\" x2=\"300\" y2=\"300\"/><line x1=\"320\" y1=\"20\" x2=\"320\" y2=\"300\"/><line x1=\"340\" y1=\"20\" x2=\"340\" y2=\"300\"/><line x1=\"360\" y1=\"20\" x2=\"360\" y2=\"300\"/><line x1=\"380\" y1=\"20\" x2=\"380\" y2=\"300\"/><line x1=\"400\" y1=\"20\" x2=\"400\" y2=\"300\"/><line x1=\"420\" y1=\"20\" x2=\"420\" y2=\"300\"/><line x1=\"440\" y1=\"20\" x2=\"440\" y2=\"300\"/><line x1=\"460\" y1=\"20\" x2=\"460\" y2=\"300\"/><line x1=\"480\" y1=\"20\" x2=\"480\" y2=\"300\"/><line x1=\"500\" y1=\"20\" x2=\"500\" y2=\"300\"/><line x1=\"520\" y1=\"20\" x2=\"520\" y2=\"300\"/><line x1=\"540\" y1=\"20\" x2=\"540\" y2=\"300\"/><line x1=\"560\" y1=\"20\" x2=\"560\" y2=\"300\"/><line x1=\"580\" y1=\"20\" x2=\"580\" y2=\"300\"/>\n    <line x1=\"20\" y1=\"20\" x2=\"580\" y2=\"20\"/><line x1=\"20\" y1=\"40\" x2=\"580\" y2=\"40\"/><line x1=\"20\" y1=\"60\" x2=\"580\" y2=\"60\"/><line x1=\"20\" y1=\"80\" x2=\"580\" y2=\"80\"/><line x1=\"20\" y1=\"100\" x2=\"580\" y2=\"100\"/><line x1=\"20\" y1=\"120\" x2=\"580\" y2=\"120\"/><line x1=\"20\" y1=\"140\" x2=\"580\" y2=\"140\"/><line x1=\"20\" y1=\"160\" x2=\"580\" y2=\"160\"/><line x1=\"20\" y1=\"180\" x2=\"580\" y2=\"180\"/><line x1=\"20\" y1=\"200\" x2=\"580\" y2=\"200\"/><line x1=\"20\" y1=\"220\" x2=\"580\" y2=\"220\"/><line x1=\"20\" y1=\"240\" x2=\"580\" y2=\"240\"/><line x1=\"20\" y1=\"260\" x2=\"580\" y2=\"260\"/><line x1=\"20\" y1=\"280\" x2=\"580\" y2=\"280\"/><line x1=\"20\" y1=\"300\" x2=\"580\" y2=\"300\"/>\n  </g>\n  <!-- 原圖甲：底 8 格 (0..8), 高 3 格 (y=3 -> y=0), 頂點 (3,0) -->\n  <polygon points=\"20,80 180,80 80,20\" fill=\"rgba(30,41,59,0.1)\" stroke=\"#0f172a\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line x1=\"80\" y1=\"20\" x2=\"80\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"86\" y=\"68\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\">甲（底 8、高 3）</text>\n  <!-- 1/2 倍縮小圖：底 4 格 (12..16), 高 1.5 格 (y=3 -> y=1.5), 頂點 (13.5, 1.5) -->\n  <polygon points=\"260,80 340,80 290,50\" fill=\"rgba(16,185,129,0.16)\" stroke=\"#059669\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line x1=\"290\" y1=\"50\" x2=\"290\" y2=\"80\" stroke=\"#059669\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"352\" y=\"72\" font-size=\"13\" font-weight=\"700\" fill=\"#047857\">1/2 倍縮小圖（底 4 格、高 1.5 格）</text>\n  <!-- 2 倍放大圖：底 16 格 (1..17), 高 6 格 (y=12 -> y=6), 頂點 (7, 6) -->\n  <polygon points=\"40,260 360,260 160,140\" fill=\"rgba(79,70,229,0.14)\" stroke=\"#4338ca\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line x1=\"160\" y1=\"140\" x2=\"160\" y2=\"260\" stroke=\"#4338ca\" stroke-width=\"1.4\" stroke-dasharray=\"4,3\"/>\n  <text x=\"172\" y=\"236\" font-size=\"13\" font-weight=\"700\" fill=\"#3730a3\">2 倍放大圖（底 16 格、高 6 格）</text>\n  <text x=\"380\" y=\"195\" font-size=\"12\" fill=\"#334155\">● 2 倍圖頂點：從左底角往右 6 格、往上 6 格</text>\n  <text x=\"380\" y=\"218\" font-size=\"12\" fill=\"#334155\">● 1/2 倍圖頂點：從左底角往右 1.5 格、往上 1.5 格</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "2 倍放大圖：底 32 格、高 12 格；1/2 倍縮小圖：底 2 格、高 0.75 格",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "2 倍放大圖：底 10 格、高 5 格；1/2 倍縮小圖：底 6 格、高 1 格",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "2 倍放大圖：底 16 格、高 6 格；1/2 倍縮小圖：底 4 格、高 1.5 格",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "2 倍放大圖：底 16 格、高 3 格；1/2 倍縮小圖：底 4 格、高 3 格",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗在方格紙上畫放大圖與縮小圖時，能否數出底邊、高與頂點偏移的格數，並將所有直線距離等比例縮放。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：數一數原圖甲的關鍵格數：底邊長 8 格、高 3 格，而且頂點是從左邊頂點「往右 3 格、往上 3 格」（到右邊頂點是水平 5 格）。"
        },
        {
          "type": "text",
          "text": "第 2 步：畫 2 倍放大圖，所有格數都乘以 2："
        },
        {
          "type": "eq",
          "expr": "8 × 2 = 16",
          "unit": "格（底）"
        },
        {
          "type": "eq",
          "expr": "3 × 2 = 6",
          "unit": "格（高與左頂點水平距離）"
        },
        {
          "type": "text",
          "text": "第 3 步：畫 1/2 倍縮小圖，所有格數都乘以 1/2（除以 2）："
        },
        {
          "type": "eq",
          "expr": "8 ÷ 2 = 4",
          "unit": "格（底）"
        },
        {
          "type": "eq",
          "expr": "3 ÷ 2 = 1.5",
          "unit": "格（高與左頂點水平距離）"
        },
        {
          "type": "answer",
          "text": "答：2 倍放大圖為底 16 格、高 6 格（頂點右偏 6 格）；1/2 倍縮小圖為底 4 格、高 1.5 格（頂點右偏 1.5 格）。"
        }
      ],
      "insight": "畫斜邊三角形的秘訣：不要用眼睛猜斜線！只要先畫出「底」，再量出頂點「往右幾格、往上幾格」，把三個頂點點出來再連起來就 100% 精準！",
      "distractorAnalysis": {
        "D": "只放大或縮小了底邊，忘記「高」與頂點位置也必須等比例一起乘 2 或乘 1/2。",
        "A": "誤以為放大 2 倍要乘 4、縮小 1/2 要除以 4（與面積 4 倍、1/4 倍混淆）。",
        "B": "把倍數縮放（×2、÷2）誤當成加減 2 格。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "方格作圖法：底、高、頂點水平偏移格數「全部乘以相同倍率」"
      ],
      "conceptCompare": "如果圖形有垂直／水平邊，直接數格數；如果有斜邊，一定要拆成「橫向幾格＋縱向幾格」來定位頂點，1.5 格就畫在格子正中間！",
      "examVariations": "常改畫平行四邊形、梯形或五邊形，同樣找出每個頂點相對於起點的（橫格數、縱格數）再同乘倍率即可。"
    },
    "check": {
      "expr": "8 * 2",
      "expect": "16",
      "extraChecks": [
        {
          "expr": "3 * 2",
          "expect": "6"
        },
        {
          "expr": "8 / 2",
          "expect": "4"
        },
        {
          "expr": "3 / 2",
          "expect": "1.5"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-TAOZIJIAO-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "圖示比例尺轉比與比值",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 四、計算題 第1題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "1. 將比例尺用比和比值表示",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_scale_1.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "options": [
      {
        "key": "A",
        "text": "比：1：4000，比值：1/4000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "比：1：2000000，比值：1/2000000",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "比：1：40000，比值：1/40000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "比：1：400000，比值：1/400000",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗讀取多格線段比例尺（5 格共代表 20 公里），先求出 1 公分代表的實際公里數，再換算成公分寫出比與比值。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：依課本圖示比例尺約定，每 1 格代表圖上 1 公分。圖中黑白相間共有 5 格，代表 5 公分對應實際 20 公里，先算 1 公分代表多少公里："
        },
        {
          "type": "eq",
          "expr": "20 ÷ 5 = 4",
          "unit": "公里"
        },
        {
          "type": "text",
          "text": "第 2 步：把 4 公里換算成公分（1 公里 ＝ 100000 公分）："
        },
        {
          "type": "eq",
          "expr": "4 × 100000 = 400000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：寫成比為 1：400000，比值為 1/400000。"
        },
        {
          "type": "answer",
          "text": "答：比是 1：400000，比值是 1/400000。"
        }
      ],
      "insight": "看到一整條好多格的比例尺，先數「總共有幾格」算出 1 格代表多少，再補 5 個 0（公里換公分）或補 2 個 0（公尺換公分）！",
      "distractorAnalysis": {
        "A": "把 4 公里換成 4000 公尺就停下來，忘記公尺還要再乘 100 換成公分（應加 5 個 0）。",
        "B": "忘記線段有 5 格，直接把終點標示的 20 公里當作圖上 1 公分代表 20 公里。",
        "C": "公里換公分時少算 1 個 0，誤寫成 40000。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖示比例尺標準約定：每一小格長度為 1 公分",
        "1 公里 ＝ 1000 公尺 ＝ 100000 公分"
      ],
      "conceptCompare": "「比」是用冒號記作 1：400000，「比值」是分數記作 1/400000，計算題兩者都要寫出來！",
      "examVariations": "若比例尺圖改標示為 0 到 20 公尺（一樣 5 格），則 1 格 ＝ 4 公尺 ＝ 400 公分，比為 1：400，比值為 1/400。"
    },
    "check": {
      "expr": "5 / (20 * 100000)",
      "expect": "1/400000"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "圖示比例尺轉比與比值",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 四、計算題 第2題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "2. 將比例尺用比和比值表示",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_scale_2.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "options": [
      {
        "key": "A",
        "text": "比：1：300000，比值：1/300000",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "比：1：600000，比值：1/600000",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "比：1：3000，比值：1/3000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "比：1：30000，比值：1/30000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗讀取兩段式刻度比例尺（2 格共代表 6 公里），換算為同單位的比與比值。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圖中刻度從 0 到 6 公里平均分成 2 格（每格代表圖上 1 公分），所以 1 公分代表："
        },
        {
          "type": "eq",
          "expr": "6 ÷ 2 = 3",
          "unit": "公里"
        },
        {
          "type": "text",
          "text": "第 2 步：將 3 公里換算成公分（補 5 個 0）："
        },
        {
          "type": "eq",
          "expr": "3 × 100000 = 300000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：圖上 1 公分代表實際 300000 公分，比為 1：300000，比值為 1/300000。"
        },
        {
          "type": "answer",
          "text": "答：比是 1：300000，比值是 1/300000。"
        }
      ],
      "insight": "注意中間那條小刻度線！它把整條線段分成 2 格，所以 6 公里要除以 2 才是一格（1 公分）代表的距離！",
      "distractorAnalysis": {
        "B": "沒注意中間的刻度，直接把 6 公里當成 1 公分代表 6 公里，算成 1：600000。",
        "C": "把 3 公里換成 3000 公尺，忘記再換成公分。",
        "D": "3 公里換算成公分時少寫一個 0。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比 ＝ 1：每公分實際公分數",
        "比值 ＝ 1 ÷ 每公分實際公分數"
      ],
      "conceptCompare": "刻度式線段比例尺就算沒有黑白塗色，只要看有幾個小間隔，就是幾格（幾公分），中間漏標數字一樣代表平分！",
      "examVariations": "若改為「在這個比例尺的地圖上，12 公里的路程要畫幾公分？」12 ÷ 3 ＝ 4 公分。"
    },
    "check": {
      "expr": "2 / (6 * 100000)",
      "expect": "1/300000"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形周長計算",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 四、計算題 第3題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "3. 求塗色部分扇形的周長（單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_sector_3.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "options": [
      {
        "key": "A",
        "text": "45.68 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "B",
        "text": "53.68 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "28.56 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "37.68 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗由空白處直角符號推算塗色扇形為 3/4 圓，並記得扇形周長必須「弧長 ＋ 兩條半徑」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察圖形，空白缺口有直角符號（90 度，占 1/4 圓），因此塗色部分是（360 − 90）＝ 270 度，也就是 3/4 圓的扇形，半徑為 8 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：計算 3/4 圓的弧長（直徑 ＝ 8 × 2 ＝ 16 公分）："
        },
        {
          "type": "eq",
          "expr": "8 × 2 × 3.14 × 3/4 = 37.68",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：加上兩條半徑（8 ＋ 8 ＝ 16 公分）才是扇形的周長："
        },
        {
          "type": "eq",
          "expr": "37.68 + 8 × 2 = 53.68",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分扇形的周長大約是 53.68 公分。"
        }
      ],
      "insight": "看清圖上直角記號在哪裡！直角標在「空白處」，所以塗色部分是 3/4 圓，最後還要加上兩條半徑 16 公分！",
      "distractorAnalysis": {
        "D": "只算了 3/4 圓的弧長 37.68 公分，忘記加上兩條半徑！",
        "A": "只加上了 1 條半徑（37.68 ＋ 8 ＝ 45.68），漏掉另一條半徑。",
        "C": "看錯塗色部分，誤算成白色 1/4 圓的周長（8 × 2 × 3.14 × 1/4 ＋ 16 ＝ 28.56）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2",
        "塗色圓心角 ＝ 360 度 − 空白圓心角"
      ],
      "conceptCompare": "算扇形周長最容易出現兩種陷阱：① 忘記加兩條半徑；② 沒看清角度標在空白處還是塗色處。",
      "examVariations": "若題目只問「塗色部分扇形的弧長是多少？」答案就是 37.68 公分（不用加兩條半徑）。"
    },
    "check": {
      "expr": "8 * 2 * 3.14 * (270 / 360) + 8 * 2",
      "expect": "53.68"
    },
    "work": "md"
  },
  {
    "id": "EX2-TAOZIJIAO-16",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長計算",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 四、計算題 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "4. 求塗色部分扇形的弧長（單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_sector_4.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "options": [
      {
        "key": "A",
        "text": "31.12 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "12.56 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "25.12 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "37.12 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗分辨題目問的是「弧長」而非「周長」，並能將圓心角 240 度約分為 2/3 圓求解。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：塗色扇形圓心角是 240 度，先約分算出占整個圓的幾分之幾："
        },
        {
          "type": "eq",
          "expr": "240 ÷ 360 = 2/3",
          "unit": "圓"
        },
        {
          "type": "text",
          "text": "第 2 步：半徑為 6 公分（直徑 ＝ 6 × 2 ＝ 12 公分），題目只要求「弧長」（不必加兩條半徑）："
        },
        {
          "type": "eq",
          "expr": "6 × 2 × 3.14 × 2/3 = 25.12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分扇形的弧長大約是 25.12 公分。"
        }
      ],
      "insight": "寫計算題先圈關鍵字：「弧長」只要算彎彎的圓弧（25.12）；只有問「周長」才要加兩條半徑（＋ 12）！",
      "distractorAnalysis": {
        "B": "忘記半徑要乘以 2 變成直徑（直接用 6 × 3.14 × 2/3 ＝ 12.56），或是算錯空白 120 度的弧長。",
        "D": "題目只問弧長，卻多加了兩條半徑（25.12 ＋ 12 ＝ 37.12），算成了周長！",
        "A": "多加了 1 條半徑（25.12 ＋ 6 ＝ 31.12）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長 ＝ 直徑 × 3.14 ×（圓心角 ÷ 360）"
      ],
      "conceptCompare": "第 3 題問「周長」、第 4 題問「弧長」，兩題放在一起最常考學生有沒有看清最後兩個字！",
      "examVariations": "若題目改問「塗色扇形的周長是多少？」就把弧長 25.12 再加上兩條半徑 12 公分，變成 37.12 公分。"
    },
    "check": {
      "expr": "6 * 2 * 3.14 * (240 / 360)",
      "expect": "25.12"
    },
    "work": "sm"
  },
  {
    "id": "EX2-TAOZIJIAO-17",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "環形複合圖形周長",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 五、應用題 第1題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "1. 花博展設計了一個大的拱形花圃(塗色處)，至羚沿著花圃外緣跑一圈，行進的距離大約是幾公尺？",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_arch_app1.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "options": [
      {
        "key": "A",
        "text": "22.84 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "66.8 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "31.4 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "35.4 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗半圓環（拱形）花圃外圍周長的四段邊界拆解能力：外半圓弧 ＋ 內半圓弧 ＋ 兩端寬度直線。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從圖上圓心（黑點）出發，內半圓的半徑是 4 公尺，環寬是 2 公尺，所以外半圓的半徑是 4 ＋ 2 ＝ 6 公尺。"
        },
        {
          "type": "text",
          "text": "第 2 步：算出外半圓弧長（直徑 6 × 2 ＝ 12 公尺）與內半圓弧長（直徑 4 × 2 ＝ 8 公尺）："
        },
        {
          "type": "eq",
          "expr": "6 × 2 × 3.14 ÷ 2 = 18.84",
          "unit": "公尺（外弧）"
        },
        {
          "type": "eq",
          "expr": "4 × 2 × 3.14 ÷ 2 = 12.56",
          "unit": "公尺（內弧）"
        },
        {
          "type": "text",
          "text": "第 3 步：跑完一圈外緣，還必須加上左右兩端的直線寬度（各 2 公尺）："
        },
        {
          "type": "eq",
          "expr": "18.84 + 12.56 + 2 × 2 = 35.4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：行進的距離大約是 35.4 公尺。"
        }
      ],
      "insight": "用手指沿著塗色處邊緣描一圈，你會經過「外半圓弧 ＋ 內半圓弧 ＋ 左直線 2 ＋ 右直線 2」，四段缺一不可！",
      "distractorAnalysis": {
        "C": "只算了外半圓弧 18.84 ＋ 內半圓弧 12.56 ＝ 31.4 公尺，忘記加上左右兩段 2 公尺直線！",
        "A": "只算了外半圓弧 ＋ 兩段直線（18.84 ＋ 4 ＝ 22.84），漏掉裡面的內半圓弧。",
        "B": "忘記「半圓」弧長要除以 2，把兩個半圓當成兩個整圓算成 12×3.14 ＋ 8×3.14 ＋ 4 ＝ 66.8 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半圓環周長 ＝（外圓直徑 ＋ 內圓直徑）× 3.14 ÷ 2 ＋ 環寬 × 2"
      ],
      "conceptCompare": "兩條弧長合併算超快：（外直徑 12 ＋ 內直徑 8）× 3.14 ÷ 2 ＝ 20 × 3.14 ÷ 2 ＝ 10 × 3.14 ＝ 31.4 公尺，最後加 4 ＝ 35.4 公尺！",
      "examVariations": "若改為「1/4 圓環形花圃」，外弧與內弧都要改成 × 1/4，左右兩端一樣是加「環寬 × 2」。"
    },
    "check": {
      "expr": "6 * 2 * 3.14 / 2 + 4 * 2 * 3.14 / 2 + 2 * 2",
      "expect": "35.4"
    },
    "work": "lg"
  },
  {
    "id": "EX2-TAOZIJIAO-18",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-1",
    "sectionName": "和差問題",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 五、應用題 第2題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "2. 蒙奇奇到便利商店買沙拉和優格當午餐，結帳金額為 121 元，沙拉比優格貴 37 元，沙拉和優格各是多少元？",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "優格",
          "units": 1,
          "role": "base"
        },
        {
          "label": "沙拉（多 37 元）",
          "units": 1.88,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "合計 121 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "沙拉 79 元，優格 42 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "沙拉 84 元，優格 37 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "沙拉 42 元，優格 79 元",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "沙拉 97.5 元，優格 23.5 元",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗運用和差問題公式「（和 − 差）÷ 2 ＝ 較小數」求出兩種商品的個別金額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從總金額 121 元先扣掉沙拉比優格多出的 37 元，剩下的就是 2 個優格的價錢："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "(121 − 37) ÷ 2 = 84 ÷ 2 = 42",
          "unit": "元（優格）"
        },
        {
          "type": "text",
          "text": "第 2 步：沙拉比優格貴 37 元，把 37 元加回去就是沙拉的價錢："
        },
        {
          "type": "eq",
          "expr": "42 + 37 = 79",
          "unit": "元（沙拉）"
        },
        {
          "type": "answer",
          "text": "答：沙拉是 79 元，優格是 42 元。"
        }
      ],
      "insight": "和差問題口訣：較大數 ＝（和 ＋ 差）÷ 2；較小數 ＝（和 − 差）÷ 2。驗算 79 ＋ 42 ＝ 121、79 − 42 ＝ 37！",
      "figureNote": "把線段圖中沙拉多出來的 37 元遮掉後，兩條線段一樣長，總和 84 元平分給 2 條就是優格 42 元。",
      "distractorAnalysis": {
        "B": "121 − 37 ＝ 84 後忘記除以 2，直接寫成 84 元和 37 元。",
        "C": "題目說「沙拉比優格貴」，卻把較貴的 79 元和較便宜的 42 元寫反了。",
        "D": "除法計算或加減順序誤算（誤算成 121 − 37 ÷ 2）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "較小數 ＝（兩數和 − 兩數差）÷ 2",
        "較大數 ＝（兩數和 ＋ 兩數差）÷ 2"
      ],
      "conceptCompare": "「和差問題」兩數差距是固定金額（多 37 元）；「和倍問題」是倍數關係（多幾倍），解法完全不同，別混淆！",
      "examVariations": "若改為「爸爸買了沙拉和 2 杯優格共 163 元，沙拉比每杯優格貴 37 元」，則多減去 37 元後剩下 3 杯優格的錢，要除以 3！"
    },
    "check": {
      "expr": "(121 + 37) / 2",
      "expect": "79",
      "extraChecks": [
        {
          "expr": "(121 - 37) / 2",
          "expect": "42"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-TAOZIJIAO-G05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "百分率與兩量和倍素養題",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 五、應用題 第3題①②",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 3,
    "questionType": "group",
    "question": "3. 台灣已故首富王永慶曾說過：「你賺的 1 塊錢不是你的 1 塊錢，你存的 1 塊錢才是你的 1 塊錢。」得到啟發的布布想用 631 法則來規劃自己的薪資。",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-TAOZIJIAO-G05-1",
        "label": "①",
        "question": "631 法則建議將每月薪資的 30% 存入銀行，布布每月的薪資是 48000 元，他儲蓄後還剩下多少元？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "14400 元",
            "trapCode": "U05_DISCOUNT_AS_SAVING"
          },
          {
            "key": "B",
            "text": "33600 元",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "28800 元",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "3360 元",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "測驗已知基準量與消耗百分率，求剩餘量（1 − 30% ＝ 70%）。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把每月薪資 48000 元當作 1（100%），存下 30% 後，還剩下（1 − 30%）＝ 70%。"
            },
            {
              "type": "eq",
              "expr": "48000 × (1 − 30%) = 48000 × 0.7 = 33600",
              "unit": "元"
            },
            {
              "type": "answer",
              "text": "答：他儲蓄後還剩下 33600 元。"
            }
          ],
          "insight": "也可以先算存下來的錢：48000 × 30% ＝ 14400 元，再用 48000 − 14400 ＝ 33600 元，一樣好算！",
          "distractorAnalysis": {
            "A": "算出存進銀行的 14400 元就當答案，忘記題目問的是「儲蓄後還剩下多少元」。",
            "C": "誤直接乘以 60%（0.6）算成 28800 元，把剩餘的 70% 算成日常開銷的 60%。",
            "D": "小數乘法少算 1 個 0，把 33600 寫成 3360 元。"
          }
        },
        "check": {
          "expr": "48000 * (1 - 0.3)",
          "expect": "33600"
        }
      },
      {
        "subId": "EX2-TAOZIJIAO-G05-2",
        "label": "②",
        "question": "儲蓄後剩餘的錢，布布用於日常開銷和投資，日常開銷的錢是投資的 6 倍，他日常開銷和投資的錢各是多少元？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "日常開銷 4800 元，投資 28800 元",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "日常開銷 41143 元，投資 6857 元",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "C",
            "text": "日常開銷 28800 元，投資 4800 元",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "日常開銷 28000 元，投資 5600 元",
            "trapCode": "U05_SUM_FORGET_ONE"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "測驗承接第 ① 題剩餘金額作為新的兩量和（33600 元），運用和倍問題算出基準量（投資）與比較量（日常開銷）。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：以「投資的錢」為基準量（1 倍），日常開銷是 6 倍，兩項合起來是（1 ＋ 6）＝ 7 倍，對應剩餘的 33600 元。"
            },
            {
              "type": "eq",
              "expr": "33600 ÷ (1 + 6) = 33600 ÷ 7 = 4800",
              "unit": "元（投資）"
            },
            {
              "type": "text",
              "text": "第 2 步：算出日常開銷（投資的 6 倍）："
            },
            {
              "type": "eq",
              "expr": "4800 × 6 = 28800",
              "unit": "元（日常開銷）"
            },
            {
              "type": "answer",
              "text": "答：日常開銷是 28800 元，投資是 4800 元。"
            }
          ],
          "insight": "剛好對應「631 法則」：日常開銷 28800（60%）、儲蓄 14400（30%）、投資 4800（10%），三項加起來正好 48000 元！",
          "distractorAnalysis": {
            "D": "忘記加投資本身的 1 倍，直接用 33600 ÷ 6 ＝ 5600 元，算錯投資與開銷金額。",
            "A": "算對兩個數字，但把「日常開銷」和「投資」的金額寫顛倒了。",
            "B": "沒注意是用「儲蓄後剩餘的 33600 元」去分，誤用總薪資 48000 元除以 7。"
          }
        },
        "check": {
          "expr": "33600 / (1 + 6) * 6",
          "expect": "28800",
          "extraChecks": [
            {
              "expr": "33600 / (1 + 6)",
              "expect": "4800"
            }
          ]
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "剩餘金額 ＝ 總金額 ×（1 − 支出比例）",
        "投資（基準量）＝ 剩餘金額 ÷（1 ＋ 倍數）"
      ],
      "conceptCompare": "連續兩小題的情境題，第 ② 小題的總額是承接第 ① 小題算出的「剩餘金額」，千萬不要再拿原始的 48000 元去算！",
      "examVariations": "若改問「如果布布想把投資提高到薪資的 20%，投資要增加多少元？」48000 × 20% − 4800 ＝ 4800 元。"
    }
  },
  {
    "id": "EX2-TAOZIJIAO-19",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題應用",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 五、應用題 第4題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "4. 聖誕節將至，學校家長會想發糖果跟同學一起歡慶，糖果包裝有 2 種，大盒的有 150 顆，小盒的有 90 顆，家長會長買了 38 盒，共有 4200 顆糖果，是買了幾大盒和幾小盒？",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "options": [
      {
        "key": "A",
        "text": "25 大盒，13 小盒",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "15 大盒，23 小盒",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "12 大盒，26 小盒",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "13 大盒，25 小盒",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗將生活包裝情境抽象為雞兔同籠模型，運用假設法算出兩種盒數並驗算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 38 盒全部都是小盒（每盒 90 顆），總糖果數為："
        },
        {
          "type": "eq",
          "expr": "90 × 38 = 3420",
          "unit": "顆"
        },
        {
          "type": "text",
          "text": "第 2 步：算出比實際的 4200 顆少了幾顆："
        },
        {
          "type": "eq",
          "expr": "4200 − 3420 = 780",
          "unit": "顆"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 小盒換成 1 大盒，糖果會增加（150 − 90）＝ 60 顆，所以大盒數量為："
        },
        {
          "type": "eq",
          "expr": "780 ÷ (150 − 90) = 780 ÷ 60 = 13",
          "unit": "大盒"
        },
        {
          "type": "text",
          "text": "第 4 步：再用總盒數減去大盒，求出小盒數量："
        },
        {
          "type": "eq",
          "expr": "38 − 13 = 25",
          "unit": "小盒"
        },
        {
          "type": "answer",
          "text": "答：買了 13 大盒，25 小盒。"
        }
      ],
      "insight": "全部假設為「小盒」，算出的就會是「大盒」（13 盒）；最後別忘記驗算：13 × 150 ＋ 25 × 90 ＝ 1950 ＋ 2250 ＝ 4200 顆！",
      "distractorAnalysis": {
        "A": "把算出的 13 盒誤當成小盒，導致大盒與小盒數量對調。",
        "B": "780 ÷ 60 計算失誤，把 13 算成 15。",
        "C": "乘法 90 × 38 或減法 4200 − 3420 計算失誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全小盒 ➔ 差額 ＝ 實際總顆數 − 90 × 總盒數",
        "大盒數 ＝ 差額 ÷（150 − 90）"
      ],
      "conceptCompare": "假設誰，最後算出來的就是「另一種」！養成假設完直接代回驗算的習慣，保證大盒小盒永不寫反。",
      "examVariations": "若改為「大盒每盒 150 顆、小盒每盒 90 顆，大盒和小盒一樣多，共有 2400 顆」，則直接把「1 大＋1 小＝240 顆」一組一組分即可（2400 ÷ 240 ＝ 10 組）。"
    },
    "check": {
      "expr": "(4200 - 90 * 38) / (150 - 90)",
      "expect": "13",
      "extraChecks": [
        {
          "expr": "38 - (4200 - 90 * 38) / (150 - 90)",
          "expect": "25"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-TAOZIJIAO-20",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "設計平面圖求縮放比例尺",
    "school": "桃子腳國民中小學",
    "source": "桃子腳國中小 114上 第二次段考 五、應用題 第5題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 3,
    "questionType": "choice",
    "question": "5. 瑪特在工作多年後終於存到買房頭期款，喜歡泡澡的他，跟室內設計師討論後，決定將原來的浴室改大放入浴缸，下面是設計平面圖，實際浴室改大後長 5 公尺，寬 3 公尺，設計平面圖是實際浴廁的幾倍縮小圖？",
    "stemImage": "images/exams/EXAM_MID2/crop_taozijiao_bath_app5.png",
    "examPageImage": "images/exams/EXAM_MID2/taozijiao_p4.png",
    "options": [
      {
        "key": "A",
        "text": "1/20 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "20 倍",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "1/400 倍",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "1/5 倍",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗從平面圖讀取尺寸（長 25 公分、寬 15 公分），將實際公尺換算成公分後，正確求出「縮小圖 ÷ 實際」的縮小倍數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從設計平面圖讀出圖上長度為長 25 公分、寬 15 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：把實際浴室的長 5 公尺換算成公分（1 公尺 ＝ 100 公分）："
        },
        {
          "type": "eq",
          "expr": "5 × 100 = 500",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：問「設計平面圖是實際浴廁的幾倍縮小圖」，用平面圖長度除以實際長度（用寬 15 ÷ 300 算結果也相同）："
        },
        {
          "type": "eq",
          "expr": "25 ÷ 500 = 25/500 = 1/20",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：設計平面圖是實際浴廁的 1/20 倍縮小圖。"
        }
      ],
      "insight": "算「幾倍縮小圖」要先把單位都換成「公分」，再用「圖上長度 ÷ 實際長度」，一定是小於 1 的分數！",
      "distractorAnalysis": {
        "B": "除反了（算成 500 ÷ 25 ＝ 20），20 倍是「實際浴室是設計圖的 20 倍」，不是縮小圖倍數！",
        "C": "誤拿面積來比（(25 × 15) ÷ (500 × 300) ＝ 1/400），放大／縮小圖倍數看的是「邊長比」，不是面積比！",
        "D": "忘記把 5 公尺換成 500 公分，直接用 5 與 25 去約分（5 ÷ 25 ＝ 1/5）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "幾倍縮小圖 ＝ 圖上邊長 ÷ 實際邊長（單位必須一致）"
      ],
      "conceptCompare": "「縮小圖是原圖的幾倍」用「縮小圖邊長 ÷ 原圖邊長」（會得到真分數 1/20）；「原圖是縮小圖的幾倍放大圖」才用「原圖邊長 ÷ 縮小圖邊長」（會得到 20 倍）。",
      "examVariations": "若題目改問「平面圖的面積是實際浴室面積的幾分之幾？」面積倍數要平方，答案才是 1/20 × 1/20 ＝ 1/400！"
    },
    "check": {
      "expr": "25 / (5 * 100)",
      "expect": "1/20"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺表示法與換算",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "1. 實際長 160 公尺的圍牆，在地圖上長 8 公分，這張地圖的比例尺不可能是哪一個？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_q1_scales.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 1：2000",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "B",
        "text": "② 1/2000",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "C",
        "text": "③ 圖示比例尺（0 到 0.4 公里，兩格共 2 公分）",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "④ 圖示比例尺（0 到 40 公尺，兩格共 2 公分）",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測試把「圖上長度：實際長度」統一單位成公分後化簡成比例尺，並能判讀比、比值與圖示比例尺三種寫法是否等價。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把實際長 160 公尺換算成公分，再寫出比例尺的比並約分。"
        },
        {
          "type": "eq",
          "expr": "160 × 100 = 16000",
          "unit": "公分"
        },
        {
          "type": "eq",
          "expr": "8 ÷ 8 = 1",
          "unit": "（前項）"
        },
        {
          "type": "eq",
          "expr": "16000 ÷ 8 = 2000",
          "unit": "（後項）"
        },
        {
          "type": "text",
          "text": "第 2 步：比是 1：2000（① 正確），比值是 1/2000（② 正確），代表圖上 1 公分等於實際 2000 公分（＝ 20 公尺），圖上 2 公分就代表 40 公尺（④ 正確）。"
        },
        {
          "type": "text",
          "text": "第 3 步：選項 ③ 兩格共 2 公分標示成 0.4 公里（＝ 400 公尺），代表 1 公分＝ 200 公尺＝ 20000 公分，比例尺是 1：20000，和 1：2000 不符！"
        },
        {
          "type": "answer",
          "text": "答：這張地圖的比例尺不可能是 ③。"
        }
      ],
      "insight": "比、比值、圖示三種比例尺只要「1 公分對應的實際公分數」算出來一樣，就是同一張比例尺！",
      "distractorAnalysis": {
        "A": "1：2000 正是 8 公分：16000 公分約分後的結果，題目問的是「不可能」的那一個。",
        "B": "1/2000 是 1：2000 的比值表示法，完全正確，不是不可能的選項。",
        "D": "圖上 2 公分 × 2000 ＝ 4000 公分 ＝ 40 公尺，所以 ④ 與 1：2000 完全相符。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上長度：實際長度（先統一成公分再約分）",
        "1：2000 代表圖上 1 公分 ＝ 實際 20 公尺"
      ],
      "conceptCompare": "比（1：2000）、分數比值（1/2000）、圖示線段（0 到 40 公尺占 2 公分）三者意思完全相同，考卷常把其中一個多乘 10 倍當陷阱。",
      "examVariations": "常改考給圖示比例尺，反問「圖上 5 公分實際有多長」，先算「1 公分代表幾公尺」再乘以 5 最穩。"
    },
    "check": {
      "expr": "160 * 100 / 8",
      "expect": "2000",
      "extraChecks": [
        {
          "expr": "2 * 2000 / 100",
          "expect": "40"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "單價與小數除法比較",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "2. 在網路商店看到兩款洗髮精，下圖為相關資訊（甲店 84 元 0.9 公升、乙店 84 元 1.1 公升），請問哪家店洗髮精一公升的單價比較便宜？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_q2_shampoo.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 甲",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "② 乙",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "③ 一樣便宜",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "④ 無法比較",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗「每公升單價 ＝ 總價 ÷ 公升數」，並能在總價相同時快速判斷「容量越大、單價越便宜」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：兩款都是 84 元，但乙店有 1.1 公升，比甲店的 0.9 公升多。花一樣的錢買越多公升，每一公升就越便宜。"
        },
        {
          "type": "text",
          "text": "第 2 步：實際用「總價 ÷ 公升數」算算看乙店每公升單價（84 ÷ 1.1）："
        },
        {
          "type": "eq",
          "expr": "84 ÷ 1.1 ≈ 76.36",
          "unit": "元／公升"
        },
        {
          "type": "longdiv",
          "dividend": "84",
          "divisor": "1.1",
          "mode": "round",
          "places": 2,
          "note": "除數 1.1 右移 1 位變成 11，被除數 84 補一個 0 變成 840；甲店 84 ÷ 0.9 約 93.33 元，大於乙店 76.36 元"
        },
        {
          "type": "answer",
          "text": "答：乙店一公升的單價比較便宜（②）。"
        }
      ],
      "insight": "價錢相同比單價：容量越大，平均每 1 公升越便宜，不用硬算完就能秒殺！",
      "distractorAnalysis": {
        "A": "甲店只有 0.9 公升卻要 84 元，不到 1 公升就花 84 元，1 公升單價超過 93 元反而更貴！",
        "C": "兩家總價都是 84 元，但容量分別是 0.9 公升與 1.1 公升，單位價格不可能一樣。",
        "D": "兩家都同時給了「價錢」與「公升數」，各自相除即可比出單價大小。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "每 1 公升單價 ＝ 總價 ÷ 總公升數",
        "被除數固定時，除數越大、商越小"
      ],
      "conceptCompare": "問「一公升幾元」要把「公升」當除數（元 ÷ 公升）；問「一元買幾公升」才是把「元」當除數，千萬不要除反！",
      "examVariations": "若改為「甲 80 元 0.8 公升、乙 110 元 1.1 公升」，兩家單價就都是 100 元／公升一樣便宜。"
    },
    "check": {
      "expr": "84 / 1.1",
      "expect": "840/11"
    },
    "work": "sm"
  },
  {
    "id": "EX2-SHIHU114-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "倍數與比的轉換",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "3. 如果甲數是乙數的 7 倍，下列敘述哪一個正確？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 甲數：乙數 ＝ 1：7",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "② 甲數：乙數 ＝ 7：1",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "③ 甲數是 48，48 × (7 − 1) ＝ 乙數",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "④ 乙數是 48，48 ÷ (7 ＋ 1) ＝ 甲數",
        "trapCode": "U05_SUM_FORGET_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "理解「甲數是乙數的 7 倍」代表乙數是基準量（1 份）、甲數是比較量（7 份），進而寫出正確的比與求法。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把「乙數」當作 1 份，因為甲數是乙數的 7 倍，所以甲數就是 7 份。"
        },
        {
          "type": "eq",
          "expr": "7 ÷ 1 = 7",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：因此「甲數：乙數」就是 7 份比 1 份，記作 7：1（② 正確）。"
        },
        {
          "type": "answer",
          "text": "答：② 甲數：乙數 ＝ 7：1 正確。"
        }
      ],
      "insight": "「甲是乙的 7 倍」就是乙 ＝ 1 份、甲 ＝ 7 份，甲大乙小，別把前後項寫反成 1：7！",
      "distractorAnalysis": {
        "A": "把甲數和乙數的前後項順序寫反了，甲是 7 份、乙是 1 份，應該是 7：1。",
        "C": "已知甲數是 48 要反推乙數（1 份），應該用 48 ÷ 7，不是乘以 (7 − 1)。",
        "D": "已知乙數是 48 要求甲數（7 份），應該用 48 × 7，不是除以 (7 ＋ 1)。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲是乙的 □ 倍 ➔ 乙為 1 份，甲為 □ 份，甲：乙 ＝ □：1"
      ],
      "conceptCompare": "「(7 ＋ 1)」只在算兩數「和」的時候用；「(7 − 1)」只在算兩數「差」的時候用；單純求另一數直接 ×7 或 ÷7。",
      "examVariations": "常改成「甲數是乙數的 0.25 倍」，這時甲：乙 ＝ 0.25：1 ＝ 1：4。"
    },
    "check": {
      "expr": "7 / 1",
      "expect": "7"
    },
    "work": "sm"
  },
  {
    "id": "EX2-SHIHU114-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題（假設法）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "4. 已知巧克力 1 顆 10 元，水果軟糖 1 顆 5 元。若小明買了巧克力和水果軟糖共 60 顆，花了 400 元，請問兩種糖果的數量關係為何？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 巧克力和水果軟糖一樣多",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "② 巧克力比水果軟糖多 20 顆",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "③ 巧克力比水果軟糖少 10 顆",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "④ 巧克力比水果軟糖少 20 顆",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "運用雞兔問題（假設法）分別算出兩種糖果各幾顆，並注意題目最後問的是「誰比誰多／少幾顆」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 60 顆全部都是比較便宜的水果軟糖（每顆 5 元），算算看只需要幾元："
        },
        {
          "type": "eq",
          "expr": "5 × 60 = 300",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：實際花了 400 元，多出的錢是因為把部分軟糖換成巧克力（每換 1 顆多 5 元）："
        },
        {
          "type": "eq",
          "expr": "(400 − 300) ÷ (10 − 5) = 20",
          "unit": "顆（巧克力）"
        },
        {
          "type": "text",
          "text": "第 3 步：算出水果軟糖數量，再比較兩者相差幾顆："
        },
        {
          "type": "eq",
          "expr": "60 − 20 = 40",
          "unit": "顆（水果軟糖）"
        },
        {
          "type": "eq",
          "expr": "40 − 20 = 20",
          "unit": "顆"
        },
        {
          "type": "answer",
          "text": "答：巧克力 20 顆、水果軟糖 40 顆，巧克力比水果軟糖少 20 顆（④）。"
        }
      ],
      "insight": "全部假設成「便宜的那種」，多出來的總錢數除以單價差，算出的就會是「貴的那種（巧克力）」數量！",
      "distractorAnalysis": {
        "A": "若各 30 顆會花 30 × 10 ＋ 30 × 5 ＝ 450 元，超過 400 元了。",
        "B": "把巧克力和水果軟糖的數量對調，誤以為巧克力 40 顆、軟糖 20 顆。",
        "C": "把總差額或單價差算錯，正確差距為 40 − 20 ＝ 20 顆。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全買小單價：貴的數量 ＝ (實際總價 − 小單價 × 總數) ÷ (大單價 − 小單價)"
      ],
      "conceptCompare": "求出 20 顆和 40 顆後別急著收工，題目常問「多幾顆／少幾顆」，一定要再相減！",
      "examVariations": "若改假設全部都是巧克力（600 元），多算 200 元 ÷ 5 ＝ 40 顆就會直接算出水果軟糖有 40 顆。"
    },
    "check": {
      "expr": "(60 - (400 - 5 * 60) / (10 - 5)) - (400 - 5 * 60) / (10 - 5)",
      "expect": "20"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周率的意義",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "5. 圓周率「約 3.14」代表什麼？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 圓面積約是圓周長的 3.14 倍",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "B",
        "text": "② 圓周長約是直徑的 3.14 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "③ 直徑約是半徑的 3.14 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "④ 半徑和圓周長相差約 3.14 公分",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "確認「圓周率 ＝ 圓周長 ÷ 直徑 ≈ 3.14」的核心定義，不與半徑或圓面積混淆。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：任何一個圓，拿它的圓周長去除以直徑，得到的比值永遠都大約是 3.14，這個定值叫做「圓周率」。"
        },
        {
          "type": "eq",
          "expr": "3.14 × 1 = 3.14",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：圓周率約 3.14 代表「圓周長約是直徑的 3.14 倍」（②）。"
        }
      ],
      "insight": "圓周率就是「圓周長 ÷ 直徑」，記住：圓繞一圈大約是直徑的 3.14 倍！",
      "distractorAnalysis": {
        "A": "圓周率是「圓周長」與「直徑」的倍數關係，不是圓面積和圓周長。",
        "C": "直徑永遠剛好是半徑的 2 倍，不是 3.14 倍。",
        "D": "圓周率是一個固定「倍數」，沒有公分單位，也不是兩者相減的差。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周率 ＝ 圓周長 ÷ 直徑（約 3.14）"
      ],
      "conceptCompare": "直徑是半徑的 2 倍；圓周長才是直徑的約 3.14 倍（也就是半徑的約 6.28 倍）。",
      "examVariations": "常改考是非題：「大圓的圓周率比小圓的圓周率大」，答案是錯，不管圓多大，圓周率都約 3.14。"
    },
    "check": {
      "expr": "3.14",
      "expect": "3.14"
    },
    "work": "sm"
  },
  {
    "id": "EX2-SHIHU114-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "secondaryUnitIds": [
      "U06",
      "U07",
      "U08"
    ],
    "section": "REVIEW",
    "sectionName": "跨單元園遊會總召日記素養題組",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第1題（日記全文 13 格）",
    "batch": "段考真題",
    "category": "跨單元綜合應用",
    "level": 4,
    "difficulty": 3,
    "questionType": "group",
    "question": "1. 六年甲班總召集人日記：那一天，我們算出了奇蹟（日期：1 月 14 日｜天氣：晴）\n隨著校慶園遊會圓滿落幕，看著班費存摺裡增加的數字，這一切的辛苦都值得了。回想這忙碌的一週，每一個決策竟然都離不開數學，現在想起來，這真是一場精彩的數字戰役！\n記得籌備的第一天，我們拿著學校發下來的操場縮圖（比例尺 1：200）尋找班級位置。圖上我們班的攤位畫成了一個長方形，我拿尺仔細測量，發現圖上的長是 6 公分、寬是 4.5 公分。為了規劃動線，我換算了真實的大小，原來這塊地的實際長度是（ ① ）公尺、實際寬度是（ ② ）公尺，算出我們班的實際佔地面積為（ ③ ）平方公尺，也足夠我們大展身手了！\n確定場地後，美術宣傳組開始製作裝飾用的緞帶花。總務股長買了一大捲長度為 20.5 公尺的緞帶，已知製作一朵緞帶花需要用掉 0.85 公尺。為了不浪費材料，我幫忙計算了一下，告訴同學這捲緞帶最多剪出（ ④ ）朵完整的花；而剪完後剩下的緞帶，剛好拿來綁包裝袋。\n活動當天，最吸睛的就是我們搭建的扇形表演舞台。這個扇形的半徑是 4 公尺，圓心角是 135 度。事前，為了防止觀眾太靠近，我們必須在舞台的四周拉起封鎖線。我按了按計算機，算出這個扇形的弧長部分約是（ ⑤ ）公尺（圓周率以 3.14 計算）；如果要把整個扇形圍一圈，總共需要準備（ ⑥ ）公尺長的封鎖線才夠安全。\n除了表演，我們的招牌飲料「星空特調」也是人氣王。廚房緊急調配了一桶共 36 公升的鮮奶茶。為了突顯茶香，我們調整了配方，讓紅茶的份量恰好是鮮奶的 3 倍。因此，這桶飲料中含有（ ⑦ ）公升的紅茶，以及（ ⑧ ）公升的鮮奶，茶味濃厚超好喝！下午結帳時，雖然忙中有錯弄丟了記帳單，但還好我們記得總數。今天熱食部只賣「熱狗」和「薯條」兩種商品，總共賣出了 124 份。已知熱狗比薯條受歡迎，熱狗賣出的數量比薯條多了 28 份。經過推算才確定今天熱狗賣出了（ ⑨ ）份，而薯條賣出了（ ⑩ ）份。\n最後是大家最關心的利潤結算。我們這次批發進貨的總成本是 6400 元。為了要有合理的獲利，我們設定「利潤」是成本的 30%。算一算，我們預計賺取的利潤是（ ⑪ ）元；如果不算其他開銷，將成本加上利潤後，我們今天的總營收應該要是（ ⑫ ）元，這也代表我們的營收是成本的（ ⑬ ）倍。\n這場園遊會不只凝聚了大家的感情，更讓我發現，原來數學課本裡的知識，真的能解決生活中的大小難題呢！",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p1.png",
    "work": "lg",
    "subQuestions": [
      {
        "subId": "EX2-SHIHU114-G01-1",
        "label": "① 攤位實際長",
        "question": "縮圖比例尺 1：200，圖上攤位長是 6 公分，實際長度是（ ① ）公尺。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "12 公尺",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "1.2 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "120 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "D",
            "text": "1200 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "由比例尺 1：200 與圖上長 6 公分換算實際公尺數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺 1：200 代表實際長度是圖上的 200 倍，先算出實際有幾公分，再除以 100 換成公尺。"
            },
            {
              "type": "eq",
              "expr": "6 × 200 ÷ 100 = 12",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：實際長度是 12 公尺。"
            }
          ],
          "insight": "1：200 就是「圖上 1 公分 ＝ 實際 2 公尺」，所以 6 × 2 ＝ 12 公尺！",
          "distractorAnalysis": {
            "B": "把 1200 公分誤除以 1000 才得到 1.2 公尺（1 公尺 ＝ 100 公分）。",
            "C": "換算公尺時少除了一個 10，把 1200 公分看成 120 公尺。",
            "D": "忘記把公分換算成公尺，直接把 1200 公分寫成 1200 公尺。"
          }
        },
        "check": {
          "expr": "6 * 200 / 100",
          "expect": "12"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-2",
        "label": "② 攤位實際寬",
        "question": "縮圖比例尺 1：200，圖上攤位寬是 4.5 公分，實際寬度是（ ② ）公尺。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "900 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "0.9 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "9 公尺",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "90 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "由比例尺 1：200 與圖上寬 4.5 公分換算實際公尺數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：圖上寬 4.5 公分放大 200 倍為實際公分數，再除以 100 換成公尺。"
            },
            {
              "type": "eq",
              "expr": "4.5 × 200 ÷ 100 = 9",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：實際寬度是 9 公尺。"
            }
          ],
          "insight": "圖上 1 公分 ＝ 實際 2 公尺，4.5 × 2 ＝ 9 公尺！",
          "distractorAnalysis": {
            "B": "除以 1000 算錯小數點位數，少算 10 倍。",
            "D": "公分換公尺只除以 10，誤寫成 90 公尺。",
            "A": "算出 900 公分後忘記換成公尺。"
          }
        },
        "check": {
          "expr": "4.5 * 200 / 100",
          "expect": "9"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-3",
        "label": "③ 實際佔地面積",
        "question": "由實際長度與寬度，算出我們班的實際佔地面積為（ ③ ）平方公尺。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "5400 平方公尺",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "B",
            "text": "27 平方公尺",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "C",
            "text": "42 平方公尺",
            "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
          },
          {
            "key": "D",
            "text": "108 平方公尺",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "利用已換算出的實際長（12 公尺）與實際寬（9 公尺）求長方形面積，避免把面積只乘一次比例尺。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：先用實際長度 12 公尺乘以實際寬度 9 公尺："
            },
            {
              "type": "eq",
              "expr": "12 × 9 = 108",
              "unit": "平方公尺"
            },
            {
              "type": "answer",
              "text": "答：實際佔地面積為 108 平方公尺。"
            }
          ],
          "insight": "面積一定要「先換好實際的長和寬」再相乘！長放大 200 倍、寬也放大 200 倍，面積是放大 40000 倍。",
          "distractorAnalysis": {
            "B": "只算了縮圖面積 6 × 4.5 ＝ 27，忘記依比例尺放大。",
            "C": "誤算成長方形周長 (12 ＋ 9) × 2 ＝ 42。",
            "A": "把縮圖面積 27 錯當成直接乘以 200 得到 5400。"
          }
        },
        "check": {
          "expr": "(6 * 200 / 100) * (4.5 * 200 / 100)",
          "expect": "108"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-4",
        "label": "④ 緞帶剪出花朵數",
        "question": "一大捲長度為 20.5 公尺的緞帶，製作一朵緞帶花需要用掉 0.85 公尺，這捲緞帶最多剪出（ ④ ）朵完整的花。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "24 朵",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "25 朵",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "17 朵",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "D",
            "text": "23 朵",
            "trapCode": "U05_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "小數除法求商與餘數的應用：做「完整」的花朵，餘下的緞帶不夠 1 朵不能無條件進位。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：用緞帶總長 20.5 公尺除以每朵需要的 0.85 公尺，商取整數。"
            },
            {
              "type": "eq",
              "expr": "20.5 ÷ 0.85 = 24",
              "unit": "朵（餘 0.1 公尺）"
            },
            {
              "type": "longdiv",
              "dividend": "20.5",
              "divisor": "0.85",
              "mode": "remainder",
              "places": 0,
              "note": "除數 0.85 右移 2 位成 85，20.5 右移 2 位補 0 成 2050；2050 ÷ 85 得商 24，剩下 0.1 公尺不夠再做 1 朵"
            },
            {
              "type": "answer",
              "text": "答：最多可剪出 24 朵完整的花。"
            }
          ],
          "insight": "問「最多剪出幾朵完整的花」只能用無條件捨去法取整數商 24 朵！",
          "distractorAnalysis": {
            "D": "直式計算 2050 ÷ 85 試商算小了一朵。",
            "B": "把剩下的 0.1 公尺誤用無條件進位多加 1 朵，但 0.1 公尺不夠 0.85 公尺做一朵花。",
            "C": "誤用乘法 20.5 × 0.85 ≈ 17.4 取整數 17。"
          }
        },
        "check": {
          "expr": "24",
          "expect": "24",
          "extraChecks": [
            {
              "expr": "20.5 - 24 * 0.85",
              "expect": "0.1"
            }
          ]
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-5",
        "label": "⑤ 扇形舞台弧長",
        "question": "扇形表演舞台半徑是 4 公尺，圓心角是 135 度，這個扇形的弧長部分約是（ ⑤ ）公尺（圓周率以 3.14 計算）。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "25.12 公尺",
            "trapCode": "U06_ANGLE_FRACTION_WRONG"
          },
          {
            "key": "B",
            "text": "4.71 公尺",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          },
          {
            "key": "C",
            "text": "9.42 公尺",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "17.42 公尺",
            "trapCode": "U06_ARC_AS_PERIMETER"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "由半徑 4 公尺與圓心角 135 度計算扇形弧長，先化簡 135/360 ＝ 3/8 再算更不容易錯。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：先算出 135 度是幾分之幾圓：135 ÷ 360 ＝ 3/8 圓。"
            },
            {
              "type": "text",
              "text": "第 2 步：弧長 ＝ 直徑 × 3.14 × 3/8（直徑 ＝ 半徑 4 × 2 ＝ 8 公尺）："
            },
            {
              "type": "eq",
              "expr": "4 × 2 × 3.14 × 3/8 = 9.42",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：這個扇形的弧長部分約是 9.42 公尺。"
            }
          ],
          "insight": "8 × 3.14 × 3/8 先把 8 和分母 8 約掉，只剩 3 × 3.14 ＝ 9.42，又快又準！",
          "distractorAnalysis": {
            "B": "忘記把半徑 4 公尺乘以 2 變成直徑 8 公尺，直接算 4 × 3.14 × 3/8 ＝ 4.71。",
            "D": "這是把兩條半徑 8 公尺也加上去的「扇形周長」，本題只問「弧長」。",
            "A": "算成一整個圓的圓周長 8 × 3.14 ＝ 25.12，忘記乘以 135/360。"
          }
        },
        "check": {
          "expr": "4 * 2 * 3.14 * 135 / 360",
          "expect": "9.42"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-6",
        "label": "⑥ 扇形周長封鎖線",
        "question": "承上題，如果要把整個扇形（半徑 4 公尺、圓心角 135 度）圍一圈，總共需要準備（ ⑥ ）公尺長的封鎖線才夠安全。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "18.84 公尺",
            "trapCode": "U06_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "9.42 公尺",
            "trapCode": "U06_FORGET_TWO_RADII"
          },
          {
            "key": "C",
            "text": "13.42 公尺",
            "trapCode": "U06_FORGET_TWO_RADII"
          },
          {
            "key": "D",
            "text": "17.42 公尺",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "區分「扇形弧長」與「扇形周長」，知道圍一圈封鎖線必須加上兩條直線半徑。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：整個扇形外圍包含「一段圓弧（9.42 公尺）」和「兩條半徑（各 4 公尺）」。"
            },
            {
              "type": "eq",
              "expr": "9.42 + 4 × 2 = 17.42",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：總共需要準備 17.42 公尺長的封鎖線。"
            }
          ],
          "insight": "圍一圈 ＝ 弧長 ＋ 2 條半徑，兩條直線邊沒圍會留大缺口喔！",
          "distractorAnalysis": {
            "B": "只圍了圓弧部分 9.42 公尺，忘記加上兩條半徑。",
            "C": "9.42 ＋ 4 ＝ 13.42，只加了 1 條半徑，漏掉另一條半徑。",
            "A": "誤把 9.42 直接乘以 2 或錯加半徑長。"
          }
        },
        "check": {
          "expr": "4 * 2 * 3.14 * 135 / 360 + 4 * 2",
          "expect": "17.42"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-7",
        "label": "⑦ 紅茶公升數",
        "question": "一桶共 36 公升的鮮奶茶，紅茶的份量恰好是鮮奶的 3 倍，這桶飲料中含有（ ⑦ ）公升的紅茶。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "27 公升",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "9 公升",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "C",
            "text": "12 公升",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "D",
            "text": "24 公升",
            "trapCode": "U05_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "典型「和倍問題」：已知兩量和為 36 公升與倍數 3 倍，透過「基準量 1 份 ＋ 比較量 3 份 ＝ 4 份」求各量。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把鮮奶當成 1 份，紅茶是鮮奶的 3 倍就是 3 份，合計共有 1 ＋ 3 ＝ 4 份。"
            },
            {
              "type": "eq",
              "expr": "36 ÷ (1 + 3) = 9",
              "unit": "公升（鮮奶）"
            },
            {
              "type": "text",
              "text": "第 2 步：紅茶佔 3 份，用 1 份的公升數乘以 3："
            },
            {
              "type": "eq",
              "expr": "9 × 3 = 27",
              "unit": "公升（紅茶）"
            },
            {
              "type": "answer",
              "text": "答：這桶飲料中含有 27 公升的紅茶。"
            }
          ],
          "insight": "紅茶 3 份 ＋ 鮮奶 1 份 ＝ 共 4 份，先除以 4 算出 1 份（鮮奶 9 公升），再 × 3 就是紅茶！",
          "distractorAnalysis": {
            "B": "9 公升是 1 份「鮮奶」的量，看錯題目要問的「紅茶」。",
            "C": "直接把 36 ÷ 3 ＝ 12，忘記把鮮奶自己的 1 份加進總份數裡（3 ＋ 1 ＝ 4 份）。",
            "D": "算成 36 − 12 ＝ 24，錯源同樣是誤用 3 份平分。"
          }
        },
        "check": {
          "expr": "36 / (1 + 3) * 3",
          "expect": "27"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-8",
        "label": "⑧ 鮮奶公升數",
        "question": "承上題，這桶共 36 公升的鮮奶茶中，含有（ ⑧ ）公升的鮮奶。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "27 公升",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "9 公升",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "12 公升",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "D",
            "text": "18 公升",
            "trapCode": "U05_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "承接上題求出基準量（1 份鮮奶），並可利用 27 ＋ 9 ＝ 36 做雙重驗算。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：鮮奶為基準量（1 份），共 1 ＋ 3 ＝ 4 份："
            },
            {
              "type": "eq",
              "expr": "36 ÷ (1 + 3) = 9",
              "unit": "公升"
            },
            {
              "type": "answer",
              "text": "答：含有 9 公升的鮮奶。"
            }
          ],
          "insight": "驗算一下：9 × 3 ＝ 27（紅茶），27 ＋ 9 ＝ 36 公升，完全吻合！",
          "distractorAnalysis": {
            "C": "忘記加基準量 1 份，直接除以 3 才得到 12。",
            "D": "誤對半平分 36 ÷ 2 ＝ 18。",
            "A": "27 公升是紅茶的公升數，不是鮮奶。"
          }
        },
        "check": {
          "expr": "36 / (1 + 3)",
          "expect": "9"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-9",
        "label": "⑨ 熱狗份數",
        "question": "熱食部只賣「熱狗」和「薯條」兩種商品，總共賣出了 124 份，熱狗賣出的數量比薯條多了 28 份，今天熱狗賣出了（ ⑨ ）份。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "48 份",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "B",
            "text": "62 份",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          },
          {
            "key": "C",
            "text": "76 份",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "96 份",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "經典「和差問題」：已知兩數和 124 與兩數差 28，利用「(和 ＋ 差) ÷ 2 ＝ 大數」求較多的熱狗份數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把較少的薯條補上 28 份，兩者就會一樣多且都等於熱狗的份數："
            },
            {
              "type": "eq",
              "expr": "(124 + 28) ÷ 2 = 76",
              "unit": "份"
            },
            {
              "type": "answer",
              "text": "答：今天熱狗賣出了 76 份。"
            }
          ],
          "insight": "熱狗比較多，用「(和 ＋ 差) ÷ 2」直接算出大數！",
          "distractorAnalysis": {
            "A": "48 份是較少的「薯條」份數，不是熱狗。",
            "B": "只算了 124 ÷ 2 ＝ 62，忘記處理兩者相差的 28 份。",
            "D": "算了 124 − 28 ＝ 96 後忘記除以 2。"
          }
        },
        "check": {
          "expr": "(124 + 28) / 2",
          "expect": "76"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-10",
        "label": "⑩ 薯條份數",
        "question": "承上題，今天「熱狗」和「薯條」共賣出 124 份，熱狗比薯條多 28 份，薯條賣出了（ ⑩ ）份。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "76 份",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "B",
            "text": "96 份",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          },
          {
            "key": "C",
            "text": "34 份",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "48 份",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "應用「(和 − 差) ÷ 2 ＝ 小數」求較少的薯條份數，並與 76 ＋ 48 ＝ 124 交叉驗算。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：先把熱狗多出的 28 份扣掉，剩下的 96 份就是兩倍的薯條數量："
            },
            {
              "type": "eq",
              "expr": "(124 − 28) ÷ 2 = 48",
              "unit": "份"
            },
            {
              "type": "answer",
              "text": "答：薯條賣出了 48 份。"
            }
          ],
          "insight": "驗算：76 − 48 ＝ 28 份、76 ＋ 48 ＝ 124 份，兩個條件都對！",
          "distractorAnalysis": {
            "C": "減法或除以 2 時計算失誤（誤算成 96 ÷ 2 以外的數）。",
            "A": "76 份是較多的熱狗份數。",
            "B": "算出 124 − 28 ＝ 96 後忘記除以 2 平分。"
          }
        },
        "check": {
          "expr": "(124 - 28) / 2",
          "expect": "48"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-11",
        "label": "⑪ 預計利潤",
        "question": "總成本是 6400 元，我們設定「利潤」是成本的 30%，算一算，我們預計賺取的利潤是（ ⑪ ）元。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1920 元",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "4480 元",
            "trapCode": "U05_DISCOUNT_AS_SAVING"
          },
          {
            "key": "C",
            "text": "8320 元",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "192 元",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "由基準量（成本 6400 元）與百分率（30%）計算利潤金額（比較量）。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：「是成本的 30%」就是把成本乘以 30%（＝ 0.3）："
            },
            {
              "type": "eq",
              "expr": "6400 × 30% = 1920",
              "unit": "元"
            },
            {
              "type": "answer",
              "text": "答：預計賺取的利潤是 1920 元。"
            }
          ],
          "insight": "「成本的 30%」＝ 成本 × 0.3，算完要檢查大小合不合理（大約三分之一）。",
          "distractorAnalysis": {
            "D": "把 30% 誤看成 3%（0.03），少算了一位小數點。",
            "B": "算成了 6400 × (1 − 30%) ＝ 4480 元。",
            "C": "8320 元是成本加上利潤後的「總營收」，這格只問「利潤」。"
          }
        },
        "check": {
          "expr": "6400 * 30%",
          "expect": "1920"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-12",
        "label": "⑫ 總營收金額",
        "question": "如果不算其他開銷，將成本 6400 元加上 30% 的利潤後，今天的總營收應該要是（ ⑫ ）元。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "6430 元",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "8320 元",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "1920 元",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "4480 元",
            "trapCode": "U05_DISCOUNT_AS_SAVING"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "計算「基準量 ＋ 增量 ＝ 總營收」，即 成本 × (1 ＋ 30%)。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把成本 6400 元加上預計利潤 1920 元："
            },
            {
              "type": "eq",
              "expr": "6400 + 1920 = 8320",
              "unit": "元"
            },
            {
              "type": "answer",
              "text": "答：總營收應該要是 8320 元。"
            }
          ],
          "insight": "總營收 ＝ 成本 ＋ 利潤 ＝ 6400 × 1.3 ＝ 8320 元！",
          "distractorAnalysis": {
            "C": "只寫了利潤 1920 元，忘記加回原本的成本 6400 元。",
            "D": "用減法算成 6400 − 1920 ＝ 4480，越賣越虧了。",
            "A": "誤把 30% 當成 30 元直接加上去。"
          }
        },
        "check": {
          "expr": "6400 * (1 + 30%)",
          "expect": "8320"
        }
      },
      {
        "subId": "EX2-SHIHU114-G01-13",
        "label": "⑬ 營收是成本幾倍",
        "question": "承上題，總營收（成本加上 30% 利潤）代表我們的營收是成本的（ ⑬ ）倍。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "30 倍",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          },
          {
            "key": "B",
            "text": "0.3 倍",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "C",
            "text": "1.3 倍",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "13 倍",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "掌握「基準量是 1，加 30% 後變成 1 ＋ 0.3 ＝ 1.3 倍」的母子和觀念。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：成本本身是 1 倍，利潤是成本的 30%（0.3 倍），合起來就是："
            },
            {
              "type": "eq",
              "expr": "1 + 30% = 1.3",
              "unit": "倍"
            },
            {
              "type": "text",
              "text": "第 2 步：也可以用總營收除以成本驗算：8320 ÷ 6400 ＝ 1.3 倍。"
            },
            {
              "type": "answer",
              "text": "答：營收是成本的 1.3 倍。"
            }
          ],
          "insight": "成本是 1，多賺 30% ＝ 1 ＋ 0.3 ＝ 1.3 倍！",
          "distractorAnalysis": {
            "B": "0.3 倍只是「利潤」是成本的幾倍，忘記加上成本本身的 1 倍。",
            "D": "把 1.3 倍的小數點向右移錯一位。",
            "A": "忘記把 30% 除以 100 換成小數 0.3。"
          }
        },
        "check": {
          "expr": "1 + 30%",
          "expect": "1.3"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "比例尺面積計算：先各別換成實際長與寬，再相乘！",
        "和倍問題：基準量 ＝ 兩數和 ÷ (1 ＋ 倍數)",
        "和差問題：大數 ＝ (和 ＋ 差) ÷ 2、小數 ＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "這篇日記一次串起 U05（百分率、和倍、小數除法）、U06（扇形弧長與周長）、U07（比例尺與面積）、U08（和差問題），讀長文時先圈出「單位」和「關鍵字」就不會混！",
      "examVariations": "常把「緞帶剩下幾公尺」與「最多幾朵」一起考，記得用直式餘數看原本被除數的小數點位置！"
    }
  },
  {
    "id": "EX2-SHIHU114-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長計算",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第2題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "2. 圓形餐盤的直徑是 22 公分，圓周長大約是（　　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "options": [
      {
        "key": "A",
        "text": "69.8 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "138.16 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "34.54 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "69.08 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "直接套用「圓周長 ＝ 直徑 × 3.14」，注意題目給的是「直徑」不必再乘以 2。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目直接給直徑 22 公分，圓周長 ＝ 直徑 × 3.14："
        },
        {
          "type": "eq",
          "expr": "22 × 3.14 = 69.08",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：圓周長大約是 69.08 公分。"
        }
      ],
      "insight": "看到直徑直接 × 3.14；只有給半徑才要先 × 2！",
      "distractorAnalysis": {
        "C": "誤把直徑當成兩倍或再除以 2，只算了 11 × 3.14 ＝ 34.54。",
        "A": "小數乘法對位出錯，把 69.08 寫成 69.8。",
        "B": "題目已經給「直徑」22 公分，卻又多乘了一次 2 算成 44 × 3.14 ＝ 138.16。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 直徑 × 3.14 ＝ 半徑 × 2 × 3.14"
      ],
      "conceptCompare": "直徑 22 公分約有 22 × 3 ＝ 66 多一點，寫出 138 或 34 馬上就能用估算抓出錯！",
      "examVariations": "常改給「半徑 11 公分」，這時才要先 11 × 2 ＝ 22 再乘 3.14。"
    },
    "check": {
      "expr": "22 * 3.14",
      "expect": "69.08"
    },
    "work": "sm"
  },
  {
    "id": "EX2-SHIHU114-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題與關係列式",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第3題(1)~(2)",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "3. 書宇今年 11 歲，姐姐今年 15 歲。請回答下列 (1)、(2) 題：",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-SHIHU114-G02-1",
        "label": "(1)",
        "question": "15 年後，書宇和姐姐相差（　　）歲。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "4 歲",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "15 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "C",
            "text": "19 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "D",
            "text": "30 歲",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "理解兩人的「年齡差永遠不變」，不因經過 15 年而改變。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：15 年後書宇和姐姐都同時長大 15 歲，所以兩人的年齡差和今年完全一樣："
            },
            {
              "type": "eq",
              "expr": "15 − 11 = 4",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：15 年後，書宇和姐姐仍然相差 4 歲。"
            }
          ],
          "insight": "不管過了幾年，兩個人同時長大 1 歲，相差的歲數永遠不變！",
          "distractorAnalysis": {
            "B": "直接把「15 年後」或「姐姐 15 歲」當成了答案。",
            "C": "誤以為年齡差 4 歲也要加上 15 年，寫成 4 ＋ 15 ＝ 19 歲。",
            "D": "只算出了 15 年後姐姐的年齡 15 ＋ 15 ＝ 30 歲，忘記減去書宇的 26 歲。"
          }
        },
        "check": {
          "expr": "15 - 11",
          "expect": "4"
        }
      },
      {
        "subId": "EX2-SHIHU114-G02-2",
        "label": "(2)",
        "question": "將書宇的年齡和姐姐年齡的關係列式表示：（　　　　）。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "書宇的年齡 ＋ 15 ＝ 姐姐的年齡",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "B",
            "text": "書宇的年齡 ＋ 4 ＝ 姐姐的年齡",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "書宇的年齡 − 4 ＝ 姐姐的年齡",
            "trapCode": "U08_AGE_NOW_OFFSET_MISS"
          },
          {
            "key": "D",
            "text": "書宇的年齡 × 4 ＝ 姐姐的年齡",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "將固定不變的「年齡差 4 歲」用中文數量關係式表達（書宇 ＋ 4 ＝ 姐姐，或姐姐 − 4 ＝ 書宇）。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：姐姐永遠比書宇大 4 歲，所以把書宇的年齡加上 4 就等於姐姐的年齡："
            },
            {
              "type": "eq",
              "expr": "11 + 4 = 15",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：書宇的年齡 ＋ 4 ＝ 姐姐的年齡。"
            }
          ],
          "insight": "誰比較大、誰比較小？書宇較小，加上相差的 4 歲才會等於姐姐！",
          "distractorAnalysis": {
            "C": "把大、小寫反了，書宇減 4 歲會變得比姐姐更小 8 歲。",
            "D": "年齡關係是「相差幾歲」（加減關係），不是固定 4 倍關係。",
            "A": "15 是姐姐今年的年齡，不是兩人相差的歲數 4 歲。"
          }
        },
        "check": {
          "expr": "15 - 11",
          "expect": "4"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "大年齡 − 小年齡 ＝ 年齡差（永遠固定不變）",
        "小年齡 ＋ 年齡差 ＝ 大年齡"
      ],
      "conceptCompare": "寫關係式時先用今年的數字 11 和 15 套進去檢查看看：11 ＋ 4 ＝ 15 才對，11 − 4 ＝ 7 不對！",
      "examVariations": "有時也會要求寫成「姐姐的年齡 − 書宇的年齡 ＝ 4」或「姐姐的年齡 − 4 ＝ 書宇的年齡」，意義完全相同。"
    }
  },
  {
    "id": "EX2-SHIHU114-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長（正三角形拼半圓）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "4. 下圖是小柔用圖卡所拼成的圖形，塗色部分中間是一個邊長 10 公分的正三角形，塗色部分的周長大約是（　　）公分。",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_fill4_tri.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "options": [
      {
        "key": "A",
        "text": "94.2 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "31.4 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "47.1 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "77.1 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "看圖辨識塗色部分外圍是由「3 個直徑 10 公分的半圓弧」圍成，且內部虛線三角形邊長不計入周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察圖中三個黑點都在正三角形三邊的中點，代表外側有 3 個直徑都是 10 公分的半圓弧。"
        },
        {
          "type": "text",
          "text": "第 2 步：周長只算「最外圍一圈」，3 個半圓弧合起來等於 1.5 個圓的圓周長："
        },
        {
          "type": "eq",
          "expr": "10 × 3.14 ÷ 2 × 3 = 47.1",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 47.1 公分。"
        }
      ],
      "insight": "先用鉛筆沿著塗色圖形「最外圍邊界」描一圈，就知道只有 3 個半圓弧，中間虛線不能加！",
      "distractorAnalysis": {
        "B": "只算了 2 個半圓弧（1 個圓 31.4 公分），少算了第 3 個半圓弧。",
        "D": "把中間虛線正三角形的 3 條邊（30 公分）也加進去了，變成 47.1 ＋ 30 ＝ 77.1。",
        "A": "誤把邊長 10 公分當成「半徑」，算出 10 × 2 × 3.14 × 3 ÷ 2 ＝ 94.2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "複合圖形周長 ＝ 最外圍所有弧長與邊長總和（內部虛線不計）"
      ],
      "conceptCompare": "看清楚圖中的黑點圓心落在三角形邊長中點，所以正三角形的邊長 10 公分是半圓的「直徑」，不是半徑！",
      "examVariations": "若正三角形周圍貼的是 3 個圓心角 300 度的扇形，算法會變成 3 個 5/6 圓，要看準圓心在哪裡。"
    },
    "check": {
      "expr": "10 * 3.14 / 2 * 3",
      "expect": "47.1"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "被除數與商的大小關係",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第5題(1)~(4)",
    "batch": "段考真題",
    "category": "小數除法與商的大小",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "5. 將商大於被除數的算式打 ✓，商小於被除數的算式畫 ○，商等於被除數的算式打 ✕。",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-SHIHU114-G03-1",
        "label": "(1)",
        "question": "24.42 ÷ 11.1",
        "choiceStyle": "compare3",
        "options": [
          {
            "key": "A",
            "text": "✓ 商大於被除數",
            "trapCode": "U05_RECIPROCAL_MISS"
          },
          {
            "key": "B",
            "text": "○ 商小於被除數",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "✕ 商等於被除數",
            "trapCode": "U05_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "判斷除數 11.1 大於 1 時，商會小於被除數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：除數 11.1 ＞ 1，分給比 1 大的份數，每份變小，所以商小於被除數。"
            },
            {
              "type": "eq",
              "expr": "24.42 ÷ 11.1 = 2.2",
              "unit": ""
            },
            {
              "type": "longdiv",
              "dividend": "24.42",
              "divisor": "11.1",
              "note": "驗證：2.2 小於原本被除數 24.42"
            },
            {
              "type": "answer",
              "text": "答：○（商小於被除數）。"
            }
          ],
          "insight": "除數 ＞ 1，商 ＜ 被除數！",
          "distractorAnalysis": {
            "A": "把小數乘法的規則搞混了；除法時除數大於 1 商反而變小。",
            "C": "只有除數剛好等於 1 時，商才會等於被除數。"
          }
        },
        "check": {
          "expr": "24.42 / 11.1",
          "expect": "2.2"
        }
      },
      {
        "subId": "EX2-SHIHU114-G03-2",
        "label": "(2)",
        "question": "24.42 ÷ 0.1",
        "choiceStyle": "compare3",
        "options": [
          {
            "key": "A",
            "text": "✓ 商大於被除數",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "○ 商小於被除數",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "C",
            "text": "✕ 商等於被除數",
            "trapCode": "U05_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "判斷除數 0.1 小於 1 時，商會大於被除數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：除數 0.1 ＜ 1，越切越細（每 0.1 切一段），總段數反而變多，所以商大於被除數。"
            },
            {
              "type": "eq",
              "expr": "24.42 ÷ 0.1 = 244.2",
              "unit": ""
            },
            {
              "type": "longdiv",
              "dividend": "24.42",
              "divisor": "0.1",
              "note": "除以 0.1 相當於乘以 10，244.2 ＞ 24.42"
            },
            {
              "type": "answer",
              "text": "答：✓（商大於被除數）。"
            }
          ],
          "insight": "除數 ＜ 1（且大於 0），商 ＞ 被除數！",
          "distractorAnalysis": {
            "B": "誤與乘法混淆（以為乘 0.1 變小，除以 0.1 也變小）；實際上除以 0.1 會變成 10 倍！",
            "C": "除數不是 1，商不會等於被除數。"
          }
        },
        "check": {
          "expr": "24.42 / 0.1",
          "expect": "244.2"
        }
      },
      {
        "subId": "EX2-SHIHU114-G03-3",
        "label": "(3)",
        "question": "24.42 ÷ 1",
        "choiceStyle": "compare3",
        "options": [
          {
            "key": "A",
            "text": "✓ 商大於被除數",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "○ 商小於被除數",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "✕ 商等於被除數",
            "trapCode": null
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "判斷任何數除以 1，商都等於原本的被除數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：除數剛好等於 1，所以商等於被除數："
            },
            {
              "type": "eq",
              "expr": "24.42 ÷ 1 = 24.42",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：✕（商等於被除數）。"
            }
          ],
          "insight": "除以 1 不增不減，商 ＝ 被除數！",
          "distractorAnalysis": {
            "A": "除以 1 不會變大，商和被除數完全相等。",
            "B": "除以 1 不會變小，商和被除數完全相等。"
          }
        },
        "check": {
          "expr": "24.42 / 1",
          "expect": "24.42"
        }
      },
      {
        "subId": "EX2-SHIHU114-G03-4",
        "label": "(4)",
        "question": "24.42 ÷ 1.1",
        "choiceStyle": "compare3",
        "options": [
          {
            "key": "A",
            "text": "✓ 商大於被除數",
            "trapCode": "U05_RECIPROCAL_MISS"
          },
          {
            "key": "B",
            "text": "○ 商小於被除數",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "✕ 商等於被除數",
            "trapCode": "U05_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "測試靠近 1 但大於 1 的除數 1.1，判斷商依然小於被除數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：別被「1.1」跟 1 很接近騙了，只要除數大於 1，商就一定小於被除數。"
            },
            {
              "type": "eq",
              "expr": "24.42 ÷ 1.1 = 22.2",
              "unit": ""
            },
            {
              "type": "longdiv",
              "dividend": "24.42",
              "divisor": "1.1",
              "note": "驗證：22.2 小於原本被除數 24.42"
            },
            {
              "type": "answer",
              "text": "答：○（商小於被除數）。"
            }
          ],
          "insight": "不管大多少，只要除數 ＞ 1（哪怕只是 1.1 或 1.01），商都小於被除數！",
          "distractorAnalysis": {
            "A": "1.1 雖然只比 1 多一點點，但它還是大於 1，因此商變小。",
            "C": "只有剛好除以 1 才會相等，1.1 不等於 1。"
          }
        },
        "check": {
          "expr": "24.42 / 1.1",
          "expect": "22.2"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "被除數 ÷ 除數（被除數 ＞ 0）：",
        "除數 ＞ 1 ➔ 商 ＜ 被除數",
        "除數 ＝ 1 ➔ 商 ＝ 被除數",
        "0 ＜ 除數 ＜ 1 ➔ 商 ＞ 被除數"
      ],
      "conceptCompare": "「乘法」是乘大於 1 變大、乘小於 1 變小；「除法」剛好相反：除以大於 1 變小、除以小於 1 變大！",
      "examVariations": "常改寫成「15 ÷ 0.99」與「15 ÷ 1.01」比較，不用真的算完，看除數和 1 比大小就秒殺。"
    }
  },
  {
    "id": "EX2-SHIHU114-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "加量百分比與求基準量",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第6題(1)~(2)",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 3,
    "difficulty": 3,
    "questionType": "group",
    "question": "6. 菲菲到便利商店購買冰品時，發現牆上貼著一張海報（加量 20%，大杯免費升級特大杯），請根據海報回答下列問題。",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_fill6_drink.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-SHIHU114-G04-1",
        "label": "(1)",
        "question": "特大杯與大杯的比是（　　）：1，比值用小數表示是（　　）。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "0.2：1，比值 0.2",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "B",
            "text": "0.8：1，比值 0.8",
            "trapCode": "U05_DISCOUNT_AS_SAVING"
          },
          {
            "key": "C",
            "text": "20：1，比值 20",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          },
          {
            "key": "D",
            "text": "1.2：1，比值 1.2",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "看懂海報「加量 20%，大杯免費升級特大杯」代表以大杯為基準量 1，特大杯為 1 ＋ 20% ＝ 1.2。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把「大杯」當作基準量 1，「加量 20%」就是多了原本的 0.2，所以特大杯是："
            },
            {
              "type": "eq",
              "expr": "1 + 20% = 1.2",
              "unit": ""
            },
            {
              "type": "text",
              "text": "第 2 步：因此「特大杯：大杯 ＝ 1.2：1」，比值是 1.2 ÷ 1 ＝ 1.2。"
            },
            {
              "type": "answer",
              "text": "答：比是 1.2：1，比值用小數表示是 1.2。"
            }
          ],
          "insight": "加量 20% ＝ 原本的 1 加上 0.2 ＝ 1.2 倍！",
          "distractorAnalysis": {
            "A": "0.2 只是「多出來的那 20%」，忘記加上原來大杯的 1 了。",
            "B": "把「加量 20%」錯當成「減少 20%」（1 − 0.2 ＝ 0.8）。",
            "C": "忘記把 20% 換算成小數 0.2（或 1.2），直接寫成 20。"
          }
        },
        "check": {
          "expr": "1 + 20%",
          "expect": "1.2"
        }
      },
      {
        "subId": "EX2-SHIHU114-G04-2",
        "label": "(2)",
        "question": "特大杯容量是 750 毫升，大杯的容量是（　　）毫升。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "625 毫升",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "900 毫升",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "C",
            "text": "150 毫升",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "600 毫升",
            "trapCode": "U05_DISCOUNT_AS_SAVING"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "已知「比較量（特大杯 750 毫升）」與「比值 1.2」，要用除法反推「基準量（大杯）」。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：特大杯是大杯的 1.2 倍，反求大杯要用「比較量 ÷ 倍數」："
            },
            {
              "type": "eq",
              "expr": "750 ÷ 1.2 = 625",
              "unit": "毫升"
            },
            {
              "type": "longdiv",
              "dividend": "750",
              "divisor": "1.2",
              "note": "除數 1.2 右移 1 位成 12，被除數 750 補一個 0 成 7500；7500 ÷ 12 ＝ 625"
            },
            {
              "type": "answer",
              "text": "答：大杯的容量是 625 毫升。"
            }
          ],
          "insight": "特大杯一定比大杯多！用 625 × 1.2 ＝ 750 驗算完全對；最常見陷阱是拿 750 × 0.8 ＝ 600，超危險！",
          "distractorAnalysis": {
            "C": "只算了 750 × 20% ＝ 150。",
            "D": "最經典陷阱！誤算成 750 × (1 − 20%) ＝ 600，但 600 再加 20% 只會變成 720 毫升，不是 750！",
            "B": "大杯應該比特大杯小，卻反用乘法 750 × 1.2 ＝ 900，越算越大杯了。"
          }
        },
        "check": {
          "expr": "750 / (1 + 20%)",
          "expect": "625"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "大杯（基準量） × (1 ＋ 20%) ＝ 特大杯（比較量）",
        "求基準量 ＝ 比較量 ÷ (1 ＋ 百分率)"
      ],
      "conceptCompare": "「甲比乙多 20%」絕對不等於「乙比甲少 20%」！因為基準量不一樣（625 的 20% 是 125，750 的 20% 是 150）。",
      "examVariations": "商店改寫「加量 25% 後重 500 公克，原重幾公克？」做法相同：500 ÷ 1.25 ＝ 400 公克。"
    }
  },
  {
    "id": "EX2-SHIHU114-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形圓心角與幾分之幾圓",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第7題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "7. 圓心角 60° 的扇形，其弧長對圓周長的比值是多少？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_fill7_60deg.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "options": [
      {
        "key": "A",
        "text": "6",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "B",
        "text": "1/6",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1/3",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "1/4",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "理解「弧長對圓周長的比值」等於「圓心角對周角 360° 的比值」，即幾分之幾圓。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：一整個圓的圓周角是 360°，弧長佔圓周長的幾分之幾，就是圓心角除以 360°："
        },
        {
          "type": "eq",
          "expr": "60 ÷ 360 = 1/6",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：比值是 1/6。"
        }
      ],
      "insight": "360 ÷ 60 ＝ 6，所以 60° 就是 1/6 圓，弧長也是全圓周長的 1/6！",
      "distractorAnalysis": {
        "C": "誤除以 180°（半圓平角），算成 60 ÷ 180 ＝ 1/3。",
        "D": "約分錯誤，1/4 圓的圓心角是 90°，不是 60°。",
        "A": "把分子分母顛倒，寫成 360 ÷ 60 ＝ 6。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長：圓周長 ＝ 圓心角：360°",
        "常見角度：90° ＝ 1/4 圓、60° ＝ 1/6 圓、45° ＝ 1/8 圓、120° ＝ 1/3 圓"
      ],
      "conceptCompare": "「A 對 B 的比值」一定是「A ÷ B」（前面當分子、後面當分母）。",
      "examVariations": "常改問「弧長是圓周長的 3/8，圓心角是幾度？」解法：360 × 3/8 ＝ 135°。"
    },
    "check": {
      "expr": "60 / 360",
      "expect": "1/6"
    },
    "work": "sm"
  },
  {
    "id": "EX2-SHIHU114-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長（正方形內四分之一圓弧）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第8題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "8. 下方圖形中（正方形邊長為 10 公尺），塗色部分的周長大約是多少公尺？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_fill8_shade.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "options": [
      {
        "key": "A",
        "text": "31.4 公尺",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "B",
        "text": "41.4 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "51.4 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "71.4 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "拆解正方形內塗色區域的邊界：四段 1/4 圓弧（半徑 5 公尺）＋ 上下兩條 10 公尺實線邊。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：正方形邊長 10 公尺，被十字虛線平分成 4 個小正方形，每個小正方形邊長為 10 ÷ 2 ＝ 5 公尺。"
        },
        {
          "type": "text",
          "text": "第 2 步：塗色部分有 4 段半徑為 5 公尺的 1/4 圓弧，合起來剛好是 1 個直徑 10 公尺的完整圓周長："
        },
        {
          "type": "eq",
          "expr": "5 × 2 × 3.14 = 31.4",
          "unit": "公尺（弧長總和）"
        },
        {
          "type": "text",
          "text": "第 3 步：再加上塗色部分最上方和最下方兩條長度各 10 公尺的實線直邊："
        },
        {
          "type": "eq",
          "expr": "31.4 + 10 × 2 = 51.4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 51.4 公尺。"
        }
      ],
      "insight": "周長 ＝ 4 個 1/4 圓弧（1 個圓周）＋ 上下 2 條直邊（20 公尺）！左右兩邊是虛線，不要算進周長裡！",
      "distractorAnalysis": {
        "A": "只算出了 4 段圓弧合起來的 31.4 公尺，漏掉了上下兩條 10 公尺的直線邊！",
        "B": "只加了上方一條 10 公尺直邊（31.4 ＋ 10 ＝ 41.4），漏掉下方那一條。",
        "D": "把左右兩條虛線也加進去了，多加了 20 公尺變成 71.4 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "4 個半徑相等的 1/4 圓弧 ＝ 1 個完整圓周長",
        "塗色周長 ＝ 曲線部分 ＋ 實線直邊"
      ],
      "conceptCompare": "看清楚圖形中的「實線」與「虛線」：虛線只是輔助線，只有實線圍住塗色部分的地方才算周長！",
      "examVariations": "若改為「上下左右四邊都塗色成風車形」，四條邊都是實線時就要加 10 × 4 ＝ 40 公尺。"
    },
    "check": {
      "expr": "10 * 3.14 + 10 * 2",
      "expect": "51.4"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際面積換算",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 二、填充題 第9題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "9. 在比例尺 1/1000 的平面圖上，泳池長 8 公分、寬 4 公分，泳池的實際面積是（　　）平方公尺。",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "options": [
      {
        "key": "A",
        "text": "3.2 平方公尺",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "B",
        "text": "240 平方公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "320 平方公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "3200 平方公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "先將圖上長、寬分別依比例尺放大 1000 倍並換成公尺，最後再相乘求實際面積。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1/1000 代表實際長度是圖上的 1000 倍，先分別算出實際的長和寬（換成公尺）："
        },
        {
          "type": "eq",
          "expr": "8 × 1000 ÷ 100 = 80",
          "unit": "公尺（實際長）"
        },
        {
          "type": "eq",
          "expr": "4 × 1000 ÷ 100 = 40",
          "unit": "公尺（實際寬）"
        },
        {
          "type": "text",
          "text": "第 2 步：長方形面積 ＝ 長 × 寬："
        },
        {
          "type": "eq",
          "expr": "80 × 40 = 3200",
          "unit": "平方公尺"
        },
        {
          "type": "answer",
          "text": "答：泳池的實際面積是 3200 平方公尺。"
        }
      ],
      "insight": "求比例尺面積口訣：「先換邊長再相乘，千萬別把面積直接乘 1000！」",
      "distractorAnalysis": {
        "A": "用圖上面積 8 × 4 ＝ 32 只乘 1000 變成 32000 平方公分，再除以 10000 才得出錯的 3.2 平方公尺。",
        "B": "算成了泳池的實際周長 (80 ＋ 40) × 2 ＝ 240 公尺。",
        "C": "單位換算少了一個 0（把 80 × 40 算成 320，或 800 公分誤為 8 公尺）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際面積 ＝ 實際長 × 實際寬",
        "1 平方公尺 ＝ 10000 平方公分"
      ],
      "conceptCompare": "長度比例尺是 1：1000，面積比例尺會變成 1：(1000 × 1000) ＝ 1：1000000，所以先換好邊長最不容易錯！",
      "examVariations": "若平面圖是直角三角形（底 8 公分、高 4 公分），實際面積就是 80 × 40 ÷ 2 ＝ 1600 平方公尺。"
    },
    "check": {
      "expr": "(8 * 1000 / 100) * (4 * 1000 / 100)",
      "expect": "3200"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "加成與求基準量",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 三、應用題 第1題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "1. 小新在網路上購買一張演唱會門票，在網路購買須多付票價的 10% 做為手續費，於是小新一共付了 4290 元，原本演唱會的門票票價（不含手續費）是多少元？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "options": [
      {
        "key": "A",
        "text": "3900 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "4719 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "C",
        "text": "390 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "D",
        "text": "3861 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "已知加上 10% 手續費後的總金額（比較量 4290 元），反求原本的門票票價（基準量）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把原本票價當成 1，多付 10% 手續費後，一共付的錢是原本票價的 (1 ＋ 10%) ＝ 1.1 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：已知比較量 4290 元，用除法求基準量（原本票價）："
        },
        {
          "type": "eq",
          "expr": "4290 ÷ (1 + 10%) = 3900",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "4290",
          "divisor": "1.1",
          "note": "除數 1.1 右移 1 位成 11，被除數 4290 補一個 0 成 42900；42900 ÷ 11 ＝ 3900"
        },
        {
          "type": "answer",
          "text": "答：原本演唱會的門票票價是 3900 元。"
        }
      ],
      "insight": "原本票價 ＋ 10% ＝ 4290，驗算 3900 ＋ 390 ＝ 4290 元，完全吻合！",
      "distractorAnalysis": {
        "C": "少算了一位數，390 元其實是「手續費」的金額，不是原本票價。",
        "D": "最常見陷阱！拿 4290 × (1 − 10%) ＝ 3861，錯把總金額當成基準量去扣 10%。",
        "B": "反用乘法算成 4290 × 1.1 ＝ 4719，比實付金額還貴，不合理。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實付金額 ＝ 原票價 × (1 ＋ 手續費率)",
        "原票價 ＝ 實付金額 ÷ (1 ＋ 手續費率)"
      ],
      "conceptCompare": "「多付 10%」是乘以 1.1；反求原價就要除以 1.1，絕對不能把實付金額乘以 0.9！",
      "examVariations": "餐廳收 10% 服務費、商店加 5% 營業稅都是完全相同的題型。"
    },
    "check": {
      "expr": "4290 / (1 + 10%)",
      "expect": "3900"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "母子差（兩量相差）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 三、應用題 第2題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "2. 水果行進貨一批水果，其中蘋果有 2000 公斤，水梨的重量是蘋果的 0.65 倍，蘋果和水梨的重量相差多少公斤？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p2.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "蘋果（基準）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "水梨（比較）",
          "units": 0.65,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "相差 1 − 0.65 ＝ 0.35 份（？公斤）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "70 公斤",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "B",
        "text": "700 公斤",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1300 公斤",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "3300 公斤",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "用母子差「基準量 × (1 − 倍數)」或「先算水梨重量再相減」求出蘋果和水梨相差幾公斤。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 1 步：蘋果是 1 倍（2000 公斤），水梨是蘋果的 0.65 倍，所以兩者相差 (1 − 0.65) 倍："
        },
        {
          "type": "eq",
          "expr": "2000 × (1 − 0.65) = 700",
          "unit": "公斤"
        },
        {
          "type": "answer",
          "text": "答：蘋果和水梨的重量相差 700 公斤。"
        }
      ],
      "insight": "也可以先算水梨 2000 × 0.65 ＝ 1300 公斤，再算 2000 − 1300 ＝ 700 公斤，兩種方法都能互相驗算！",
      "distractorAnalysis": {
        "A": "2000 × 0.35 小數點算錯少一位，寫成 70 公斤。",
        "C": "1300 公斤是「水梨的重量」，題目問的是兩者「相差」多少公斤。",
        "D": "用成了加法 2000 × (1 ＋ 0.65) ＝ 3300，算成了蘋果和水梨的重量「和」。"
      },
      "figureNote": "線段圖清楚呈現蘋果為完整 1 份，水梨佔 0.65 份，紅色虛線差額部分就是 1 − 0.65 ＝ 0.35 份。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩量相差 ＝ 基準量 × (1 − 比值)"
      ],
      "conceptCompare": "看清楚題末問的是「共有多少」（用 1 ＋ 0.65）還是「相差多少」（用 1 − 0.65）。",
      "examVariations": "若題目改成「共重 3300 公斤」，反求蘋果就要用 3300 ÷ (1 ＋ 0.65) ＝ 2000 公斤。"
    },
    "check": {
      "expr": "2000 * (1 - 0.65)",
      "expect": "700"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題（大小包裝假設法）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 三、應用題 第3題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "3. 獅湖雜糧行買進雜糧 350 公斤，分裝成大包裝和小包裝，共 80 包，大包裝每包重 5.5 公斤，小包裝每包重 2.5 公斤，大、小包裝各有幾包？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p3.png",
    "options": [
      {
        "key": "A",
        "text": "大包裝 40 包、小包裝 40 包",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "大包裝 60 包、小包裝 20 包",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "大包裝 50 包、小包裝 30 包",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "大包裝 30 包、小包裝 50 包",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "使用假設法解含小數重量（5.5 公斤、2.5 公斤）的雞兔同籠問題，並養成代回驗算總重量的習慣。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 80 包全部都是小包裝（每包 2.5 公斤），算算看總重量："
        },
        {
          "type": "eq",
          "expr": "2.5 × 80 = 200",
          "unit": "公斤"
        },
        {
          "type": "text",
          "text": "第 2 步：實際重量 350 公斤比 200 公斤多了 150 公斤；每把 1 包小包裝換成大包裝會多出 5.5 − 2.5 ＝ 3 公斤："
        },
        {
          "type": "eq",
          "expr": "(350 − 200) ÷ (5.5 − 2.5) = 50",
          "unit": "包（大包裝）"
        },
        {
          "type": "text",
          "text": "第 3 步：算出小包裝包數："
        },
        {
          "type": "eq",
          "expr": "80 − 50 = 30",
          "unit": "包（小包裝）"
        },
        {
          "type": "answer",
          "text": "答：大包裝有 50 包、小包裝有 30 包。"
        }
      ],
      "insight": "代回驗算：50 × 5.5 ＋ 30 × 2.5 ＝ 275 ＋ 75 ＝ 350 公斤，包數 50 ＋ 30 ＝ 80 包，保證 100% 全對！",
      "distractorAnalysis": {
        "D": "大包裝與小包裝的包數顛倒了，若大 30、小 50 總重只有 165 ＋ 125 ＝ 290 公斤。",
        "A": "若各 40 包，總重為 40 × (5.5 ＋ 2.5) ＝ 320 公斤，不等於 350 公斤。",
        "B": "若大 60、小 20，總重為 330 ＋ 50 ＝ 380 公斤，超過 350 公斤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全為小包裝：大包裝數量 ＝ (總重量 − 小包重 × 總包數) ÷ (大包重 − 小包重)"
      ],
      "conceptCompare": "兩包重量相差 5.5 − 2.5 ＝ 3 是整數，假設全部為小包裝計算最輕鬆！",
      "examVariations": "如果題目問「大包裝比小包裝多幾包」，算出 50 包和 30 包後再算 50 − 30 ＝ 20 包。"
    },
    "check": {
      "expr": "(350 - 2.5 * 80) / (5.5 - 2.5)",
      "expect": "50",
      "extraChecks": [
        {
          "expr": "80 - (350 - 2.5 * 80) / (5.5 - 2.5)",
          "expect": "30"
        }
      ]
    },
    "work": "lg"
  },
  {
    "id": "EX2-SHIHU114-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長反推直徑",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 三、應用題 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "4. 英國的大笨鐘是世界上最準確的四面報時鐘之一。過年時，每個圓形鐘面的外圍都用燈飾繞了一圈做裝飾，整座大笨鐘四個面的圓形鐘面燈飾總共長 87.92 公尺，一面圓形鐘面的直徑大約是幾公尺？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p3.png",
    "options": [
      {
        "key": "A",
        "text": "14 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "28 公尺",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "3.5 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "7 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "先將四面鐘面的燈飾總長除以 4 算出單面圓周長，再用圓周長除以 3.14 反推直徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目給的是「四個面」的總長 87.92 公尺，先除以 4 算出「一面」圓形鐘面的圓周長："
        },
        {
          "type": "eq",
          "expr": "87.92 ÷ 4 = 21.98",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：已知圓周長 ＝ 直徑 × 3.14，用除法反推直徑："
        },
        {
          "type": "eq",
          "expr": "21.98 ÷ 3.14 = 7",
          "unit": "公尺"
        },
        {
          "type": "longdiv",
          "dividend": "21.98",
          "divisor": "3.14",
          "note": "除數與被除數小數點同時右移 2 位成 2198 ÷ 314 ＝ 7"
        },
        {
          "type": "answer",
          "text": "答：一面圓形鐘面的直徑大約是 7 公尺。"
        }
      ],
      "insight": "看清「四個面總長」和問「一面直徑」！先 ÷ 4 得一面圓周長 21.98，再 ÷ 3.14 得直徑 7 公尺。",
      "distractorAnalysis": {
        "C": "7 ÷ 2 ＝ 3.5 公尺是鐘面的「半徑」，題目問的是「直徑」。",
        "A": "誤以為算出 7 公尺是半徑而再乘以 2 得到 14 公尺。",
        "B": "忘記先把四個面除以 4，直接拿 87.92 ÷ 3.14 ＝ 28 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "單面圓周長 ＝ 總長度 ÷ 面數",
        "直徑 ＝ 圓周長 ÷ 3.14"
      ],
      "conceptCompare": "3.14 × 7 ＝ 21.98 是段考超高頻組合，背熟 3.14 的 1~9 倍可以一眼看穿除數商是 7！",
      "examVariations": "若題目改問「半徑大約是幾公尺」，算出直徑 7 公尺後還要再除以 2 得 3.5 公尺。"
    },
    "check": {
      "expr": "87.92 / 4 / 3.14",
      "expect": "7"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與繩長應用",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 三、應用題 第5題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "5. 一條繩子繞直徑 30 公分的圓柱一圈後，還剩下 5.8 公分，這條繩子的長度大約是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p3.png",
    "options": [
      {
        "key": "A",
        "text": "100 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "194.2 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "88.4 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "94.2 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "理解「繩子總長 ＝ 繞一圈的圓周長 ＋ 剩下的長度」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算繞圓柱一圈的圓周長（直徑 30 × 3.14）："
        },
        {
          "type": "eq",
          "expr": "30 × 3.14 = 94.2",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：再加上還剩下的 5.8 公分，就是原本繩子的總長："
        },
        {
          "type": "eq",
          "expr": "94.2 + 5.8 = 100",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這條繩子的長度大約是 100 公分。"
        }
      ],
      "insight": "繞完還有剩代表繩子比圓周長更長，所以要用加法！94.2 ＋ 5.8 ＝ 100 公分非常漂亮！",
      "distractorAnalysis": {
        "C": "用成了減法 94.2 − 5.8 ＝ 88.4，繩子都繞完還有剩，不可能比圓周長短。",
        "D": "只算了圓周長 94.2 公分，忘記加回剩下的 5.8 公分。",
        "B": "把直徑 30 公分誤當半徑再乘以 2，算成 60 × 3.14 ＋ 5.8 ＝ 194.2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "繩長 ＝ 圓柱周長 ＋ 剩餘長度（若「不夠 5.8 公分」才是減去 5.8）"
      ],
      "conceptCompare": "「還剩下 5.8 公分」要用加；如果是「還差 5.8 公分才夠一圈」才要用減！",
      "examVariations": "若改為「繞了 3 圈後還剩下 5.8 公分」，就要算 94.2 × 3 ＋ 5.8。"
    },
    "check": {
      "expr": "30 * 3.14 + 5.8",
      "expect": "100"
    },
    "work": "sm"
  },
  {
    "id": "EX2-SHIHU114-16",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺求地圖長度",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 三、應用題 第6題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "6. 國道一號（又稱中山高速公路）的全長為 374 公里，在 1：200000 的地圖上長多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p3.png",
    "options": [
      {
        "key": "A",
        "text": "18.7 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "187 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "748 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "1.87 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "將實際距離（公里）先換算成公分（1 公里 ＝ 100000 公分），再依比例尺除以 200000 求出地圖上長度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：1 公里 ＝ 1000 公尺 ＝ 100000 公分，先把 374 公里換算成公分："
        },
        {
          "type": "eq",
          "expr": "374 × 100000 = 37400000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：在 1：200000 的地圖上，圖上長度是實際長度的 1/200000，除以 200000（各消去 5 個 0）："
        },
        {
          "type": "eq",
          "expr": "37400000 ÷ 200000 = 187",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：在地圖上長 187 公分。"
        }
      ],
      "insight": "1：200000 消去 5 個 0，正好代表「圖上 1 公分 ＝ 實際 2 公里」！直接算 374 ÷ 2 ＝ 187 公分超快！",
      "distractorAnalysis": {
        "D": "公里換公分少補了兩個 0，或除以 200000 時多消去兩個 0。",
        "A": "把 1 公里誤當成 10000 公分（少 1 個 0），算出 18.7 公分。",
        "C": "把乘除方向搞反了，誤用 374 × 2 ＝ 748。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公里 ＝ 1000 公尺 ＝ 100000 公分（5 個 0）",
        "圖上長度 ＝ 實際長度（公分） ÷ 比例尺後項"
      ],
      "conceptCompare": "看到 200000 有 5 個 0，馬上想到 1 公里也是 5 個 0，所以 1：200000 就是「圖上 1 公分代表 2 公里」！",
      "examVariations": "若比例尺改為 1：500000（1 公分 ＝ 5 公里），374 公里在地圖上就是 374 ÷ 5 ＝ 74.8 公分。"
    },
    "check": {
      "expr": "374 * 100000 / 200000",
      "expect": "187"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-17",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "小數除法取概數（四捨五入）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 四、計算題 第1題",
    "batch": "段考真題",
    "category": "小數除法與四捨五入",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "1. 用四捨五入法將商取概數到小數點後第二位：50 ÷ 2.55",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p3.png",
    "options": [
      {
        "key": "A",
        "text": "19.6",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "19.60",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "19.61",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1.96",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "練習「除數為兩位小數」的直式小數除法，並能算到小數第三位後依四捨五入法取到小數第二位。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：取概數到小數點後第二位，直式要除到「小數點後第三位」看要不要進位："
        },
        {
          "type": "eq",
          "expr": "50 ÷ 2.55 ≈ 19.607",
          "unit": ""
        },
        {
          "type": "longdiv",
          "dividend": "50",
          "divisor": "2.55",
          "mode": "round",
          "places": 2,
          "note": "除數 2.55 右移 2 位變成 255，被除數 50 補兩個 0 變成 5000；除到千分位是 7（滿 5 進位），四捨五入到小數第二位為 19.61"
        },
        {
          "type": "text",
          "text": "第 2 步：小數第三位是 7，滿 5 進位到小數第二位，0 ＋ 1 ＝ 1，因此約為 19.61。"
        },
        {
          "type": "answer",
          "text": "答：約 19.61。"
        }
      ],
      "insight": "取到小數第 2 位要算到第 3 位！這題第 3 位是 7，要記得進位變成 19.61 而不是停在 19.60。",
      "distractorAnalysis": {
        "D": "被除數補 0 不夠或小數點位置點錯，差了 10 倍變成 1.96。",
        "A": "只取到小數第一位（19.6），未依題意取到第二位。",
        "B": "看到 19.607… 直接無條件捨去千分位的 7，忘記四捨五入要進位成 19.61。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "除數有幾位小數，除數與被除數小數點就同時向右移幾位",
        "取概數到第 2 位 ➔ 除到第 3 位再四捨五入"
      ],
      "conceptCompare": "如果問「商取到整數」，就要除到小數第一位看要不要進位；永遠多算一位！",
      "examVariations": "常與有餘數除法一起考，記住：算「概數」要一直補 0 除下去；算「餘數」則看原本被除數的小數點。"
    },
    "check": {
      "expr": "50 / 2.55",
      "expect": "1000/51",
      "extraChecks": [
        {
          "expr": "19.61 * 2.55",
          "expect": "50.0055"
        }
      ]
    },
    "work": "lg"
  },
  {
    "id": "EX2-SHIHU114-18",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長（長方形凹進半圓）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 四、計算題 第2題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "2. 求塗色部分的周長。（長方形長 40 公分、寬 25 公分，單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_calc2_shade.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p3.png",
    "options": [
      {
        "key": "A",
        "text": "169.25 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "183.5 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "C",
        "text": "119.25 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "144.25 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "計算「長方形上方挖掉一個半圓」的塗色圖形周長，注意周長包含左、右、下三條直邊及凹進去的半圓弧，不包含上方虛線直徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出塗色部分外圍的三條直線邊（左 40 ＋ 右 40 ＋ 下 25）："
        },
        {
          "type": "eq",
          "expr": "40 × 2 + 25 = 105",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：再加上凹進去那一段直徑 25 公分的半圓弧長："
        },
        {
          "type": "eq",
          "expr": "25 × 3.14 ÷ 2 = 39.25",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：把直線邊和半圓弧相加："
        },
        {
          "type": "eq",
          "expr": "105 + 39.25 = 144.25",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 144.25 公分。"
        }
      ],
      "insight": "被挖掉半圓的洞，面積雖然變小了，但原本上面的 25 公分直邊換成了更長的半圓弧 39.25 公分，周長反而變大！",
      "distractorAnalysis": {
        "C": "只加了左右兩條 40 公分，漏掉底部的 25 公分（80 ＋ 39.25 ＝ 119.25）。",
        "A": "把上方那條「虛線直徑 25 公分」也多加進去了（144.25 ＋ 25 ＝ 169.25）。",
        "B": "半圓弧忘記除以 2，算成整個圓周長 25 × 3.14 ＝ 78.5（105 ＋ 78.5 ＝ 183.5）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "凹半圓周長 ＝ 長方形剩餘三邊 ＋ 1/2 圓周長"
      ],
      "conceptCompare": "「算面積」要用長方形減掉半圓；「算周長」則是把凹進去的半圓弧「加上去」，千萬別把面積的減法拿來減周長！",
      "examVariations": "若上下兩端都各挖掉一個半徑相同的半圓，周長就會變成「兩條長邊 40×2 ＋ 1 個完整圓周長」。"
    },
    "check": {
      "expr": "40 * 2 + 25 + 25 * 3.14 / 2",
      "expect": "144.25"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-19",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長（大圓內含小圓洞）",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 四、計算題 第3題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "3. 求下面塗色部分的周長。（大圓半徑 5 公分，內部白色小圓直徑 5 公分，單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_calc3_shade.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p4.png",
    "options": [
      {
        "key": "A",
        "text": "47.1 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "62.8 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "15.7 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "31.4 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "看懂大圓與內部白色小圓的尺寸標示（大圓半徑 5 公分 ＝ 直徑 10 公分；小圓直徑 5 公分），且理解「挖空圖形的周長 ＝ 外圈圓周長 ＋ 內圈圓周長」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：看圖辨識尺寸：上方「5」是從大圓頂端到大圓圓心，所以大圓半徑 ＝ 5 公分（直徑 ＝ 5 × 2 ＝ 10 公分）；下方「5」是整個白色小圓的直徑 ＝ 5 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：分別算出大圓和小圓的圓周長："
        },
        {
          "type": "eq",
          "expr": "5 × 2 × 3.14 = 31.4",
          "unit": "公分（大圓周長）"
        },
        {
          "type": "eq",
          "expr": "5 × 3.14 = 15.7",
          "unit": "公分（小圓周長）"
        },
        {
          "type": "text",
          "text": "第 3 步：塗色部分的邊界同時包含外圈和內洞一圈，周長要相加："
        },
        {
          "type": "eq",
          "expr": "31.4 + 15.7 = 47.1",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 47.1 公分。"
        }
      ],
      "insight": "塗色區域只要「摸得到邊界」就都是周長！裡面挖了一個洞，周長不但沒少，反而多出了裡面小圓那一圈（一定要用加的）！",
      "distractorAnalysis": {
        "C": "錯用減法 31.4 − 15.7 ＝ 15.7，誤以為挖空周長也會變小。",
        "D": "只算了外面大圓的圓周長 31.4 公分，漏算了裡面白色小圓的邊界！",
        "B": "把下面小圓的「5 公分」也誤當成半徑再乘以 2，變成 31.4 ＋ 31.4 ＝ 62.8。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "中空圖形周長 ＝ 外圍大圓周長 ＋ 內部小圓周長"
      ],
      "conceptCompare": "看圖時一定要確認虛線上的黑點位置：上方的 5 只有一個端點是圓心（所以是半徑）；下方的 5 跨越整個小圓兩端（所以是直徑）。",
      "examVariations": "若題目只塗色上半個半圓，計算時就要把外半圓弧、內圓或直徑分開抓邊界。"
    },
    "check": {
      "expr": "5 * 2 * 3.14 + 5 * 3.14",
      "expect": "47.1"
    },
    "work": "md"
  },
  {
    "id": "EX2-SHIHU114-20",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "圖示比例尺轉數字比",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 四、計算題 第4題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "4. 將圖示形式比例尺用比表示。（圖示每小格長 1 公分，兩格共 2 公分表示實際 500 公尺）",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_calc4_scale.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p4.png",
    "options": [
      {
        "key": "A",
        "text": "1：500",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "1：25000",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1：50000",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      },
      {
        "key": "D",
        "text": "1：250",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "讀懂圖示比例尺兩格共長 2 公分代表實際 500 公尺，先統一單位成公分再約分成「1：？」的形式。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圖示比例尺共有 2 格（每格 1 公分，共 2 公分），對應實際距離 500 公尺。"
        },
        {
          "type": "text",
          "text": "第 2 步：先把 500 公尺換算成公分（1 公尺 ＝ 100 公分）："
        },
        {
          "type": "eq",
          "expr": "500 × 100 = 50000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：寫成比「2 公分：50000 公分」，前後項同除以 2 化為最簡整數比："
        },
        {
          "type": "eq",
          "expr": "50000 ÷ 2 = 25000",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：用比表示為 1：25000。"
        }
      ],
      "insight": "圖示比例尺一定要先看「500 公尺對應幾格（幾公分）」，這題 2 公分 ＝ 500 公尺，所以 1 公分 ＝ 250 公尺 ＝ 25000 公分！",
      "distractorAnalysis": {
        "D": "忘記把公尺換算成公分（少乘以 100），誤寫成 1：250。",
        "A": "既沒把公尺換成公分，也沒除以 2 公分，直接寫成 1：500。",
        "C": "有把 500 公尺換成 50000 公分，但誤以為整條只有 1 公分，忘記除以 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上公分數：實際公分數（1 公尺 ＝ 100 公分）"
      ],
      "conceptCompare": "看線段比例尺第一步就是數「0 到標示數字之間總共有幾公分」，而不是直接拿數字去加兩個 0！",
      "examVariations": "若題目問「用比值表示」，要把 1：25000 寫成分數 1/25000。"
    },
    "check": {
      "expr": "500 * 100 / 2",
      "expect": "25000"
    },
    "work": "sm"
  },
  {
    "id": "EX2-SHIHU114-G05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "方格紙繪製放大圖與縮小圖",
    "school": "高雄市立獅湖國小 (114)",
    "source": "獅湖國小 114上 期末考 五、利用直尺畫畫看 (1)~(2)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "group",
    "question": "五、利用直尺畫畫看（每小格邊長為 1 公分）：\n（1）畫出三角形 PQR 的 2 倍放大圖，並標示對應點 A、B、C。\n（2）畫出三角形 PQR 的 1/2 倍縮小圖，並標示對應點 D、E、F。",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu114_grid_pqr.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu114_p4.png",
    "figureSvg": "<svg viewBox=\"0 0 368 528\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"三角形PQR 2倍放大圖ABC與1/2倍縮小圖DEF標準方格解答圖\" style=\"max-width:420px;width:100%;height:auto;background:#ffffff;border-radius:10px;border:1px solid #cbd5e1;\"><text x=\"28\" y=\"15\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">每格邊長 1 公分｜原圖 PQR（灰）／ 2 倍放大 ABC（藍）／ 1/2 倍縮小 DEF（綠）</text><line x1=\"28\" y1=\"24\" x2=\"28\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"48\" y1=\"24\" x2=\"48\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"68\" y1=\"24\" x2=\"68\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"88\" y1=\"24\" x2=\"88\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"108\" y1=\"24\" x2=\"108\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"128\" y1=\"24\" x2=\"128\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"148\" y1=\"24\" x2=\"148\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"168\" y1=\"24\" x2=\"168\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"188\" y1=\"24\" x2=\"188\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"208\" y1=\"24\" x2=\"208\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"228\" y1=\"24\" x2=\"228\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"248\" y1=\"24\" x2=\"248\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"268\" y1=\"24\" x2=\"268\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"288\" y1=\"24\" x2=\"288\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"308\" y1=\"24\" x2=\"308\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"328\" y1=\"24\" x2=\"328\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"348\" y1=\"24\" x2=\"348\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"24\" x2=\"348\" y2=\"24\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"44\" x2=\"348\" y2=\"44\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"64\" x2=\"348\" y2=\"64\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"84\" x2=\"348\" y2=\"84\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"104\" x2=\"348\" y2=\"104\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"124\" x2=\"348\" y2=\"124\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"144\" x2=\"348\" y2=\"144\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"164\" x2=\"348\" y2=\"164\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"184\" x2=\"348\" y2=\"184\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"204\" x2=\"348\" y2=\"204\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"224\" x2=\"348\" y2=\"224\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"244\" x2=\"348\" y2=\"244\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"264\" x2=\"348\" y2=\"264\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"284\" x2=\"348\" y2=\"284\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"304\" x2=\"348\" y2=\"304\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"324\" x2=\"348\" y2=\"324\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"344\" x2=\"348\" y2=\"344\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"364\" x2=\"348\" y2=\"364\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"384\" x2=\"348\" y2=\"384\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"404\" x2=\"348\" y2=\"404\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"424\" x2=\"348\" y2=\"424\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"444\" x2=\"348\" y2=\"444\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"464\" x2=\"348\" y2=\"464\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"484\" x2=\"348\" y2=\"484\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"28\" y1=\"504\" x2=\"348\" y2=\"504\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><polygon points=\"68,164 108,44 188,164\" fill=\"rgba(100,116,139,0.14)\" stroke=\"#475569\" stroke-width=\"2.2\"/><polygon points=\"68,464 148,224 308,464\" fill=\"rgba(79,70,229,0.12)\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/><polygon points=\"248,124 268,64 308,124\" fill=\"rgba(5,150,105,0.15)\" stroke=\"#059669\" stroke-width=\"2.4\"/><line x1=\"108\" y1=\"44\" x2=\"108\" y2=\"164\" stroke=\"#64748b\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><line x1=\"148\" y1=\"224\" x2=\"148\" y2=\"464\" stroke=\"#6366f1\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><line x1=\"268\" y1=\"64\" x2=\"268\" y2=\"124\" stroke=\"#10b981\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><circle cx=\"68\" cy=\"164\" r=\"3.2\" fill=\"#334155\"/><text x=\"56\" y=\"176\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">P</text><circle cx=\"108\" cy=\"44\" r=\"3.2\" fill=\"#334155\"/><text x=\"96\" y=\"40\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">Q</text><circle cx=\"188\" cy=\"164\" r=\"3.2\" fill=\"#334155\"/><text x=\"193\" y=\"176\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">R</text><circle cx=\"68\" cy=\"464\" r=\"3.6\" fill=\"#4f46e5\"/><text x=\"55\" y=\"477\" font-size=\"12\" font-weight=\"800\" fill=\"#4f46e5\">A</text><circle cx=\"148\" cy=\"224\" r=\"3.6\" fill=\"#4f46e5\"/><text x=\"135\" y=\"219\" font-size=\"12\" font-weight=\"800\" fill=\"#4f46e5\">B</text><circle cx=\"308\" cy=\"464\" r=\"3.6\" fill=\"#4f46e5\"/><text x=\"314\" y=\"477\" font-size=\"12\" font-weight=\"800\" fill=\"#4f46e5\">C</text><circle cx=\"248\" cy=\"124\" r=\"3.4\" fill=\"#059669\"/><text x=\"235\" y=\"136\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">D</text><circle cx=\"268\" cy=\"64\" r=\"3.4\" fill=\"#059669\"/><text x=\"273\" y=\"60\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">E</text><circle cx=\"308\" cy=\"124\" r=\"3.4\" fill=\"#059669\"/><text x=\"314\" y=\"136\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">F</text><text x=\"128\" y=\"178\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#475569\">6 公分</text><text x=\"188\" y=\"479\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#4f46e5\">底 12 公分・高 12 公分</text><text x=\"278\" y=\"139\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#059669\">底 3・高 3</text></svg>",
    "work": "lg",
    "subQuestions": [
      {
        "subId": "EX2-SHIHU114-G05-1",
        "label": "(1)",
        "question": "從方格紙的點 A 出發，畫出三角形 PQR 的 2 倍放大圖（對應點依序為 A、B、C），線段 AC 的長度和對應高各是多少公分？頂點 B 在點 A 的什麼位置？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "底邊 AC 長 12 公分、高 6 公分（只把底邊乘 2、高沒放大）",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "B",
            "text": "底邊 AC 長 24 公分、高 24 公分（把邊長誤放大成 4 倍）",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "C",
            "text": "底邊 AC 長 12 公分、高 12 公分（B 在 A 的右 4 格、上 12 格）",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "底邊 AC 長 3 公分、高 3 公分（B 在 A 的右 1 格、上 3 格）",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "練習從方格紙數出原圖三角形 PQR 的底（6 格）、高（6 格）與頂點 Q 相對位移（從 P 向右 2 格、向上 6 格），再全部乘以 2 繪出 2 倍放大圖 ABC。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：數原圖格子：線段 PR（底）長 6 格 ＝ 6 公分；點 Q 在點 P 的「右 2 格、上 6 格」位置（高為 6 公分）。"
            },
            {
              "type": "text",
              "text": "第 2 步：全部放大成 2 倍：底邊 AC ＝ 6 × 2 ＝ 12 公分（從 A 向右數 12 格點出 C）；對應高 ＝ 6 × 2 ＝ 12 公分。"
            },
            {
              "type": "eq",
              "expr": "6 × 2 = 12",
              "unit": "公分（底與高）"
            },
            {
              "type": "eq",
              "expr": "2 × 2 = 4",
              "unit": "格（B 相對 A 向右格數）"
            },
            {
              "type": "text",
              "text": "第 3 步：頂點 B 在點 A 的「右 4 格、上 12 格」處，依序連出線段 AB、BC、AC 並標上 A、B、C 即完成。"
            },
            {
              "type": "answer",
              "text": "答：底邊 AC 長 12 公分、高 12 公分，頂點 B 在 A 的右 4 格、上 12 格。"
            }
          ],
          "insight": "方格紙畫斜邊放大圖祕訣：「不要量斜邊，直接數水平幾格、垂直幾格，全部乘以 2 再連起來！」",
          "distractorAnalysis": {
            "D": "把放大跟縮小搞反了，誤算成 1/2 倍縮小圖的尺寸。",
            "A": "只放大了水平的底邊 AC，忘記垂直高度和向右位移也要同時放大 2 倍，會畫扁掉。",
            "B": "把「面積會變 4 倍」誤當成「邊長要乘以 4」。"
          }
        },
        "check": {
          "expr": "6 * 2",
          "expect": "12",
          "extraChecks": [
            {
              "expr": "2 * 2",
              "expect": "4"
            }
          ]
        }
      },
      {
        "subId": "EX2-SHIHU114-G05-2",
        "label": "(2)",
        "question": "從方格紙的點 D 出發，畫出三角形 PQR 的 1/2 倍縮小圖（對應點依序為 D、E、F），線段 DF 的長度和對應高各是多少公分？頂點 E 在點 D 的什麼位置？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "底邊 DF 長 12 公分、高 12 公分（E 在 D 的右 4 格、上 12 格）",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "B",
            "text": "底邊 DF 長 3 公分、高 6 公分（只把底邊縮小、高忘記縮小）",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "C",
            "text": "底邊 DF 長 1.5 公分、高 1.5 公分（誤縮小成 1/4 倍）",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "D",
            "text": "底邊 DF 長 3 公分、高 3 公分（E 在 D 的右 1 格、上 3 格）",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "將原圖三角形 PQR 的底、高與頂點水平／垂直格數全部除以 2，從點 D 繪出 1/2 倍縮小圖 DEF。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：原圖底邊 PR ＝ 6 格、高 ＝ 6 格、Q 在 P 的「右 2 格、上 6 格」。"
            },
            {
              "type": "text",
              "text": "第 2 步：全部乘以 1/2（即除以 2）：底邊 DF ＝ 6 ÷ 2 ＝ 3 公分（從 D 向右數 3 格點出 F）；高 ＝ 6 ÷ 2 ＝ 3 公分。"
            },
            {
              "type": "eq",
              "expr": "6 ÷ 2 = 3",
              "unit": "公分（底與高）"
            },
            {
              "type": "eq",
              "expr": "2 ÷ 2 = 1",
              "unit": "格（E 相對 D 向右格數）"
            },
            {
              "type": "text",
              "text": "第 3 步：頂點 E 在點 D 的「右 1 格、上 3 格」處，依序連出線段 DE、EF、DF 並標上 D、E、F 即完成（可比對下方標準解答方格圖）。"
            },
            {
              "type": "answer",
              "text": "答：底邊 DF 長 3 公分、高 3 公分，頂點 E 在 D 的右 1 格、上 3 格。"
            }
          ],
          "insight": "底邊 3 格、高 3 格，且 E 往右 1 格、往上 3 格，畫出來角度跟原圖完全一樣！",
          "distractorAnalysis": {
            "A": "畫成了 2 倍放大圖，把縮小跟放大題號寫反了。",
            "B": "只把底邊除以 2，垂直高度忘記除以 2，三角形會被拉長變形。",
            "C": "除了一次 2 又再除以 2，誤縮小成 1/4 倍了。"
          }
        },
        "check": {
          "expr": "6 / 2",
          "expect": "3",
          "extraChecks": [
            {
              "expr": "2 / 2",
              "expect": "1"
            }
          ]
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "方格作圖法：數出每個頂點「向右幾格、向上幾格」➔ 全部乘以放大或縮小倍率",
        "放大後對應角大小完全不變，對應邊成等比例放大／縮小"
      ],
      "conceptCompare": "畫完記得檢查兩點：(1) 題目要求標示的對應點字母 A、B、C、D、E、F 有沒有漏寫；(2) 目視三角形形狀有沒有跟原圖長得一樣（沒有變扁或變瘦）。",
      "examVariations": "常接續問：「2 倍放大圖 ABC 的面積是原圖 PQR 的幾倍？」邊長 2 倍，面積會是 2 × 2 ＝ 4 倍！"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與比較量的和",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "甲數是乙數的 5 倍，甲、乙兩數的和是",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "乙數的 6 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "乙數的 5 倍",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "甲數的 4 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "甲數的 5 倍",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗以「的」前面的數（乙數）當作基準量 1，計算甲、乙兩數和的倍數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目說「甲數是乙數的 5 倍」，所以把乙數當作基準量 1，甲數就是 5。"
        },
        {
          "type": "text",
          "text": "第 2 步：甲、乙兩數的和是乙數的（1 ＋ 5）倍。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 5 ＝ 6",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：甲、乙兩數的和是乙數的 6 倍。"
        }
      ],
      "insight": "看到「甲是乙的 5 倍」，就把乙想成 1 份、甲想成 5 份，合起來共有 6 份！",
      "distractorAnalysis": {
        "B": "只算了甲數本身是乙數的 5 倍，忘記加上乙數自己的 1 倍。",
        "C": "把基準量乙數跟比較量甲數搞混，又誤用減法（5 － 1 ＝ 4）。",
        "D": "把基準量看成甲數，忘記甲數比乙數大，兩數和不可能是甲數的 5 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 1，兩數和 ＝ 基準量 ×（1 ＋ 倍數）"
      ],
      "conceptCompare": "問「兩數和」要把 1 加上倍數；問「兩數差」才是把較大倍數減去 1。",
      "examVariations": "若改問「甲、乙兩數的差是乙數的幾倍？」，答案就是 5 － 1 ＝ 4 倍。"
    },
    "check": {
      "expr": "1 + 5",
      "expect": "6"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長公式",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "下列哪一個式子可以表示此圓的圓周長？（圖中圓的半徑標示為 8 公分）",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_q2_circle.png",
    "options": [
      {
        "key": "A",
        "text": "8 × 3.14",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "8 ÷ 2 × 3.14",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "8 × 2 × 3.14",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "8 × 8 × 3.14",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "分辨圓的「半徑」與「直徑」，並正確套用圓周長公式：直徑 × 3.14。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從圓心連到圓周的線段是半徑，所以這個圓的半徑是 8 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：先算出直徑（半徑 × 2），再乘以圓周率 3.14 就是圓周長。"
        },
        {
          "type": "eq",
          "expr": "8 × 2 × 3.14 ＝ 50.24",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：可以表示此圓圓周長的式子是 8 × 2 × 3.14。"
        }
      ],
      "insight": "算圓周長之前，先用眼睛檢查圖上標的是從圓心出發（半徑），還是貫穿整個圓（直徑）！",
      "distractorAnalysis": {
        "A": "誤把半徑 8 公分直接當成直徑來乘 3.14，少了乘以 2。",
        "B": "把半徑誤以為是直徑，還多除以 2，越算越小。",
        "D": "背成圓面積公式「半徑 × 半徑 × 3.14」，跟圓周長搞混了。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 直徑 × 3.14 ＝ 半徑 × 2 × 3.14"
      ],
      "conceptCompare": "圓周長算的是「外圍一圈長度」，只要半徑 × 2 × 3.14；圓面積才是半徑 × 半徑 × 3.14。",
      "examVariations": "若題目圖中虛線改畫成通過圓心、兩端都在圓周上的 8 公分線段，圓周長算式就會變成 8 × 3.14。"
    },
    "check": {
      "expr": "8 * 2 * 3.14",
      "expect": "50.24"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "今天婉秀想做蛋糕當做下午茶，食譜中記載麵粉的重量是鮮奶的 5/4 倍。她使用了 120 公克的麵粉，需要搭配多少公克的鮮奶？關於上述問題，下列敘述何者錯誤？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "麵粉：鮮奶 ＝ 5：4",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "需要鮮奶 96 公克",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "C",
        "text": "需要鮮奶 150 公克",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "麵粉和鮮奶的比值是 5/4",
        "trapCode": "U05_RECIPROCAL_MISS"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "已知「比較量」與「倍數」時，能用除法反推「基準量」，並同步檢驗比與比值的敘述是否正確。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「麵粉的重量是鮮奶的 5/4 倍」，鮮奶是基準量、麵粉是比較量，因此麵粉：鮮奶 ＝ 5：4，比值是 5/4（選項 A、D 都正確）。"
        },
        {
          "type": "text",
          "text": "第 2 步：已知比較量（麵粉 120 公克），求基準量（鮮奶）要用除法。"
        },
        {
          "type": "eq",
          "expr": "120 ÷ 5/4 ＝ 120 × 4/5 ＝ 96",
          "unit": "公克"
        },
        {
          "type": "text",
          "text": "第 3 步：正確需要鮮奶 96 公克（選項 B 正確），因此「需要鮮奶 150 公克」是錯誤敘述。"
        },
        {
          "type": "answer",
          "text": "答：敘述錯誤的是選項 C（需要鮮奶 150 公克）。"
        }
      ],
      "insight": "看到「何者錯誤」，先算出鮮奶正確重量是 96 公克，就能抓出誤用乘法 120 × 5/4 ＝ 150 的假答案！",
      "distractorAnalysis": {
        "A": "「麵粉是鮮奶的 5/4 倍」代表鮮奶 4 份、麵粉 5 份，比為 5：4，這是正確敘述。",
        "B": "用 120 ÷ 5/4 算出鮮奶 96 公克，這是正確計算結果，題目問的是「錯誤」敘述。",
        "D": "比值就是前項除以後項，5 ÷ 4 ＝ 5/4，這是正確敘述。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比較量 ÷ 倍數 ＝ 基準量"
      ],
      "conceptCompare": "求「比較量」用乘法；已知比較量反推「基準量」一定要用除法！",
      "examVariations": "若改為「鮮奶用了 120 公克，需要多少麵粉？」，這時已知基準量求比較量，算式才變成 120 × 5/4 ＝ 150 公克。"
    },
    "check": {
      "expr": "120 / (5/4)",
      "expect": "96",
      "extraChecks": [
        {
          "expr": "120 * (5/4)",
          "expect": "150"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周率的固定性質",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "甲圓的直徑是 14 公分，乙圓的直徑是 10 公分，丙圓的直徑是 18 公分，哪一個圓的圓周率最大？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "甲",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "乙",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "C",
        "text": "丙",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "D",
        "text": "一樣大",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "建立「任何大小的圓，圓周長除以直徑的比值（圓周率）都相等」的觀念。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓周率是「圓周長 ÷ 直徑」得到的固定數值，大約是 3.14。"
        },
        {
          "type": "text",
          "text": "第 2 步：直徑越大，圓周長會跟著變長，但兩者的比值「圓周率」永遠不變，所以甲、乙、丙三個圓的圓周率一樣大。"
        },
        {
          "type": "answer",
          "text": "答：三個圓的圓周率一樣大。"
        }
      ],
      "insight": "不管圓大圓小，「圓周長」會變大，但「圓周率」永遠都大約是 3.14，不會變大也不會變小！",
      "distractorAnalysis": {
        "A": "誤以為直徑 14 公分對應某種特定比例，忘記圓周率是常數。",
        "B": "誤以為直徑越小的圓，圓周率越大。",
        "C": "把「圓周長」跟「圓周率」搞混，誤以為直徑最大的丙圓，圓周率也最大。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周率 ＝ 圓周長 ÷ 直徑 ≈ 3.14（固定不變）"
      ],
      "conceptCompare": "直徑變 2 倍時，「圓周長」和「半徑」都會變 2 倍，但「圓周率」永遠不變。",
      "examVariations": "常改考是非題：「大圓的圓周率比小圓的圓周率大」，答案是錯（╳）。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與比較量的和",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "社團有 50 個男生，女生人數是男生人數的 0.6 倍，社團共有多少個學生？何者算式為正確解法？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "50 ×（1 － 0.6）＝ 20",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "B",
        "text": "50 × 0.6 ＝ 30",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "50 ÷（1 － 0.6）＝ 125",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "50 ×（1 ＋ 0.6）＝ 80",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "能用基準量 ×（1 ＋ 倍數）一次算出男生和女生的總人數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把男生人數 50 個當作基準量 1，女生人數是 0.6 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：社團總人數就是男生的（1 ＋ 0.6）倍。"
        },
        {
          "type": "eq",
          "expr": "50 ×（1 ＋ 0.6）＝ 50 × 1.6 ＝ 80",
          "unit": "個"
        },
        {
          "type": "answer",
          "text": "答：正確解法為 50 ×（1 ＋ 0.6）＝ 80。"
        }
      ],
      "insight": "問「共有多少個」就是把基準量 1 和比較量 0.6 加起來，乘上基準量 50 就能一步完成！",
      "distractorAnalysis": {
        "A": "算式用減法（1 － 0.6），算出的是「男生比女生多幾個人」，不是總人數。",
        "B": "只算出女生有 30 人，忘記把原本的 50 個男生加回去。",
        "C": "既用錯減法，又誤把求兩數和的乘法寫成除法。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "總人數 ＝ 基準量 ×（1 ＋ 倍數）"
      ],
      "conceptCompare": "「共多少」用（1 ＋ 0.6）；「多幾人／差幾人」才用（1 － 0.6）。",
      "examVariations": "若題目改為「男生有 50 人，比女生多 0.6 倍」或「女生是男生的 0.6 倍，男女相差幾人？」，算式就會改為 50 ×（1 － 0.6）。"
    },
    "check": {
      "expr": "50 * (1 + 0.6)",
      "expect": "80"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "圖示比例尺的意義",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第6題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "question": "比例尺圖示為兩小格（0、1、2 公尺，每小格為圖上 1 公分），這個圖示在地圖上表示什麼意思？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_q6_scale.png",
    "options": [
      {
        "key": "A",
        "text": "地圖上長 1 公尺，實際長是 1 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "地圖上長 1 公尺，實際長是 1 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "地圖上長 1 公分，實際長是 1 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "地圖上長 2 公尺，實際長是 1 公尺",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "理解圖示比例尺中每一小格（圖上 1 公分）與標示實際長度之間的對應關係。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察考卷原題的比例尺線段圖，從 0 到 2 公尺共分成 2 小格，代表每 1 小格的圖上長度是 1 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：2 公分對應實際長度 2 公尺，所以 1 小格（地圖上長 1 公分）對應實際長度 1 公尺。"
        },
        {
          "type": "eq",
          "expr": "2 ÷ 2 ＝ 1",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：表示地圖上長 1 公分，實際長是 1 公尺。"
        }
      ],
      "insight": "圖示比例尺上面寫的數字（公尺、公里）都是「實際長度」，地圖上的格子每一小格通常是「1 公分」喔！",
      "distractorAnalysis": {
        "A": "把圖上距離的單位也看成公尺，地圖上不可能畫出 1 公尺那麼長的一格。",
        "B": "把地圖上的單位跟實際長度的單位完全顛倒了。",
        "D": "把地圖上的公分單位誤寫成公尺，且沒有除以 2 算出單格長度。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上距離 1 公分 ： 實際距離 1 公尺 ＝ 1 ： 100"
      ],
      "conceptCompare": "地圖上的長度一定比實際土地小很多，所以圖上通常用「公分」，實際才用「公尺」或「公里」。",
      "examVariations": "若題目改問這個比例尺的比值是多少？記得把 1 公尺換成 100 公分，比值就是 1/100。"
    },
    "check": {
      "expr": "100 / 1",
      "expect": "100"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "和差與移多補少",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第7題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "question": "怡蓁有 424 元，幼婷有 282 元，怡蓁給幼婷幾元後，兩人的錢就會一樣多？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "92 元",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "71 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "86 元",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "104 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "運用「相差 ÷ 2」解決移多補少問題，讓兩人的數量變得相等。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出怡蓁比幼婷多多少元。"
        },
        {
          "type": "eq",
          "expr": "424 － 282 ＝ 142",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：把多出來的 142 元平分成 2 份，怡蓁給幼婷其中 1 份，兩人就會一樣多（各 353 元）。"
        },
        {
          "type": "eq",
          "expr": "142 ÷ 2 ＝ 71",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：怡蓁給幼婷 71 元後，兩人的錢會一樣多。"
        }
      ],
      "insight": "「誰給誰多少會一樣多」就是把「相差的錢除以 2」！也可以先加起來除以 2 算出平均 353 元，再看 424 － 353 ＝ 71。",
      "distractorAnalysis": {
        "A": "計算 424 － 282 時十位或百位借位出錯。",
        "C": "計算差值或除以 2 時發生計算失誤。",
        "D": "沒有用正確的差 142 除以 2，誤算為其他數值。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "移多補少給予量 ＝（大數 － 小數）÷ 2"
      ],
      "conceptCompare": "給出去的人減少 71 元、收到的人增加 71 元，一來一回兩人的差距就縮小 71 × 2 ＝ 142 元。",
      "examVariations": "反過來問：「怡蓁給幼婷 71 元後一樣多，原來兩人相差幾元？」，答案就是 71 × 2 ＝ 142 元。"
    },
    "check": {
      "expr": "(424 - 282) / 2",
      "expect": "71"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際面積",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第8題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "在比例尺是 1：1000 的地圖上，底 8 公分、高 6 公分的三角形土地，實際的面積是幾平方公尺？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "2400 平方公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "1200 平方公尺",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "24 平方公尺",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "12 平方公尺",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "先將圖上三角形的底與高分別換算成實際長度（公尺），再計算三角形實際面積。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1：1000 代表圖上 1 公分 ＝ 實際 1000 公分 ＝ 10 公尺。"
        },
        {
          "type": "text",
          "text": "第 2 步：分別算出實際的底和高（單位：公尺）。"
        },
        {
          "type": "eq",
          "expr": "8 × 10 ＝ 80",
          "unit": "公尺"
        },
        {
          "type": "eq",
          "expr": "6 × 10 ＝ 60",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 3 步：套用三角形面積公式「底 × 高 ÷ 2」。"
        },
        {
          "type": "eq",
          "expr": "80 × 60 ÷ 2 ＝ 2400",
          "unit": "平方公尺"
        },
        {
          "type": "answer",
          "text": "答：實際的面積是 2400 平方公尺。"
        }
      ],
      "insight": "求實際面積最安全的方法：先個別把「底」和「高」都放大成實際公尺數，最後再乘起來除以 2！",
      "distractorAnalysis": {
        "B": "三角形面積算對底 × 高 ÷ 2 後又誤除以 2，或底與高其中一邊沒算對。",
        "C": "先算圖上面積 8 × 6 ÷ 2 ＝ 24，忘記面積要放大 10 × 10 ＝ 100 倍，只當成 24 平方公尺。",
        "D": "單位換算少兩個 0，或誤算圖上面積再忘記平方倍率。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際底 ＝ 圖上底 × 比例尺分母",
        "實際三角形面積 ＝ 實際底 × 實際高 ÷ 2"
      ],
      "conceptCompare": "長度放大 1000 倍時，面積會放大 1000 × 1000 ＝ 1000000 倍，千萬不能直接把圖上面積乘以 1000！",
      "examVariations": "若改為平行四邊形土地，最後就不用除以 2，面積會是 80 × 60 ＝ 4800 平方公尺。"
    },
    "check": {
      "expr": "(8 * 1000 / 100) * (6 * 1000 / 100) / 2",
      "expect": "2400"
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔同籠（隻數相等求腳差）",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第9題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "question": "承恩養的雞和兔子的總數一樣多，兔子的腳數比雞多 16 隻，承恩養了幾隻雞？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "4 隻",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "B",
        "text": "6 隻",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "8 隻",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "10 隻",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "將「數量一樣多的 1 隻兔子與 1 隻雞」配成一組，利用每組相差 2 隻腳反推組數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：因為雞和兔子的隻數一樣多，我們把 1 隻兔子和 1 隻雞配成 1 組。每組裡兔子的腳比雞多 4 － 2 ＝ 2 隻。"
        },
        {
          "type": "eq",
          "expr": "4 － 2 ＝ 2",
          "unit": "隻"
        },
        {
          "type": "text",
          "text": "第 2 步：總共多了 16 隻腳，代表共有 16 ÷ 2 ＝ 8 組，也就是有 8 隻雞和 8 隻兔子。"
        },
        {
          "type": "eq",
          "expr": "16 ÷ 2 ＝ 8",
          "unit": "隻"
        },
        {
          "type": "answer",
          "text": "答：承恩養了 8 隻雞。"
        }
      ],
      "insight": "驗算看看：8 隻兔子有 32 隻腳，8 隻雞有 16 隻腳，32 － 16 ＝ 16 隻腳，完全符合！",
      "distractorAnalysis": {
        "A": "誤把 16 除以兔子的 4 隻腳（16 ÷ 4 ＝ 4），忘記要用兩者腳數的「差」（4 － 2 ＝ 2）來除。",
        "B": "除以單隻腳差時計算錯誤。",
        "D": "猜錯隻數，10 隻兔子和 10 隻雞腳數相差 20 隻。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "隻數相同時：組數 ＝ 總腳數差 ÷（4 － 2）"
      ],
      "conceptCompare": "一般雞兔同籠給「總隻數」和「總腳數」；這題給「隻數一樣多」和「腳數差」，用分組法最快！",
      "examVariations": "若改為「鴨子和山羊一樣多，共 48 隻腳」，每組共 2 ＋ 4 ＝ 6 隻腳，就有 48 ÷ 6 ＝ 8 組。"
    },
    "check": {
      "expr": "16 / (4 - 2)",
      "expect": "8"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的性質",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 一、選擇題 第10題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "繪製圖形的放大圖或縮小圖時，下列哪一個敘述正確？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "繪製原圖的 2 倍放大圖時，放大圖的角度也會變成原圖對應角的 2 倍",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "B",
        "text": "繪製原圖的 1/4 倍縮小圖時，縮小圖的高是原圖高的 1/4 倍長。",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "繪製原圖的 1/5 倍縮小圖時，原圖的邊長是縮小圖對應邊的 1/5 倍長",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "D",
        "text": "繪製原圖的 3 倍放大圖時，放大圖的邊長是原圖對應邊的 1/3 倍長",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "理解圖形放大與縮小時「對應角相等」及「所有對應線段（含邊長與高）等比例縮放」的性質。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圖形放大或縮小時，形狀不變，所以對應角的大小永遠相等（選項 A 錯誤）。"
        },
        {
          "type": "text",
          "text": "第 2 步：繪製 1/4 倍縮小圖時，所有對應邊長和對應高都會變成原圖的 1/4 倍（選項 B 正確）。"
        },
        {
          "type": "text",
          "text": "第 3 步：1/5 倍縮小圖的邊長是原圖的 1/5 倍，反過來原圖邊長應是縮小圖的 5 倍（選項 C 錯誤）；3 倍放大圖的邊長應是原圖的 3 倍（選項 D 錯誤）。"
        },
        {
          "type": "answer",
          "text": "答：敘述正確的是選項 B。"
        }
      ],
      "insight": "放大縮小只改變「線段長度」（邊長、高、周長），「對應角」永遠保持一樣大！",
      "distractorAnalysis": {
        "A": "常見迷思：以為圖形放大 2 倍，連角度都要乘以 2（三角形內角和仍是 180 度，不會變成 360 度）。",
        "C": "主詞顛倒：原圖比縮小圖大，應該是縮小圖的 5 倍才對。",
        "D": "把 3 倍放大圖的對應邊長倍數寫反成 1/3 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大／縮小圖：對應角相等；對應邊、對應高、周長都變成原圖的相同倍數"
      ],
      "conceptCompare": "「對應角」不變；「邊長、高、周長」變為原來的幾倍；「面積」則會變為原來的（倍數 × 倍數）倍。",
      "examVariations": "若題目問「繪製原圖的 3 倍放大圖時，放大圖的面積是原圖的幾倍？」，答案是 3 × 3 ＝ 9 倍。"
    },
    "check": {
      "expr": "1 / 4",
      "expect": "1/4"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第1題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 1,
    "difficulty": 1,
    "questionType": "group",
    "question": "9.6 是 8 的幾倍？請依序回答下列空格。",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-ZHONGXIAO-G01-1",
        "label": "(1)",
        "question": "（　　）是基準量。",
        "options": [
          {
            "key": "A",
            "text": "8",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "9.6",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "1.2",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "1",
            "trapCode": "U05_SUM_FORGET_ONE"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "從「甲是乙的幾倍」句型中，正確辨識「的」前面的數是基準量。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：題目問「9.6 是 8 的幾倍？」，被用來當作比較標準（在「的」前面）的數是 8。"
            },
            {
              "type": "answer",
              "text": "答：8 是基準量。"
            }
          ],
          "insight": "口訣：「的」前面是基準量，「是」前面是比較量！",
          "distractorAnalysis": {
            "B": "9.6 在「是」前面，它是比較量，不是基準量。",
            "C": "1.2 是算出的倍數（比值），不是題目原本給的基準量。",
            "D": "1 是基準量代表的比例份數，此題要填題目中的實際數字 8。"
          }
        },
        "check": {
          "expr": "8",
          "expect": "8"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G01-2",
        "label": "(2)",
        "question": "求倍數的算式（　　）÷（　　）＝（　　）應如何填寫？",
        "options": [
          {
            "key": "A",
            "text": "9.6 × 8 ＝ 76.8",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "B",
            "text": "9.6 ÷ 8 ＝ 1.2",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "8 ÷ 9.6 ＝ 5/6",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "9.6 ÷ 1.2 ＝ 8",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "列式計算「比較量 ÷ 基準量 ＝ 倍數（比值）」。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：用比較量 9.6 除以基準量 8。"
            },
            {
              "type": "eq",
              "expr": "9.6 ÷ 8 ＝ 1.2",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：算式應填寫 9.6 ÷ 8 ＝ 1.2。"
            }
          ],
          "insight": "比較量 ÷ 基準量 ＝ 比值（倍數），不能把兩個數顛倒相除喔！",
          "distractorAnalysis": {
            "C": "把基準量跟比較量寫反了，變成 8 除以 9.6。",
            "D": "題目原本只給 9.6 和 8，還不知道 1.2，不能拿 1.2 當除數。",
            "A": "求「幾倍」要用除法，誤用乘法會算出 76.8。"
          }
        },
        "check": {
          "expr": "9.6 / 8",
          "expect": "1.2"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G01-3",
        "label": "(3)",
        "question": "答：9.6 是 8 的（　　）倍。",
        "options": [
          {
            "key": "A",
            "text": "0.8 倍",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "1.6 倍",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "12 倍",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          },
          {
            "key": "D",
            "text": "1.2 倍",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "正確完成小數除法並填入倍數答句。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：由上一小題算式 9.6 ÷ 8 ＝ 1.2，直接得知倍數。"
            },
            {
              "type": "eq",
              "expr": "9.6 ÷ 8 ＝ 1.2",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：9.6 是 8 的 1.2 倍。"
            }
          ],
          "insight": "9.6 比 8 大一點點，所以答案一定比 1 倍多一些，算出 1.2 倍非常合理！",
          "distractorAnalysis": {
            "A": "9.6 比 8 大，倍數不可能小於 1。",
            "B": "誤把小數點後面的 .6 直接寫成 1.6 倍，沒有真的去做除法。",
            "C": "小數點位置忘記點上，把 1.2 誤看成 12。"
          }
        },
        "check": {
          "expr": "9.6 / 8",
          "expect": "1.2"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝「的」前面的數",
        "比值（倍數）＝ 比較量 ÷ 基準量"
      ],
      "conceptCompare": "「9.6 是 8 的幾倍」基準量是 8；「8 是 9.6 的幾倍」基準量就會變成 9.6。",
      "examVariations": "若改問「8 是 9.6 的幾分之幾？」，算式為 8 ÷ 9.6 ＝ 5/6。"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "縮小圖與比例尺表示法",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第2題(1)~(3)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "皮皮畫了一張長 10 公分、寬 4 公分的臥房平面圖。請回答下列問題：",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-ZHONGXIAO-G02-1",
        "label": "(1)",
        "question": "皮皮的臥房實際長 500 公分，寬 200 公分，這張平面圖是實際臥房的（　　）倍縮小圖。",
        "options": [
          {
            "key": "A",
            "text": "1/50 倍",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "50 倍",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "C",
            "text": "1/500 倍",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "1/20 倍",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "由圖上長度與實際長度計算縮小圖的縮放倍率。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：用平面圖的長 10 公分除以實際的長 500 公分（寬 4 ÷ 200 也會得到相同結果）。"
            },
            {
              "type": "eq",
              "expr": "10 ÷ 500 ＝ 10/500 ＝ 1/50",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：這張平面圖是實際臥房的 1/50 倍縮小圖。"
            }
          ],
          "insight": "平面圖比實際臥房小，所以「幾倍縮小圖」的倍數一定是小於 1 的分數 1/50！",
          "distractorAnalysis": {
            "B": "用實際長除以圖上長（500 ÷ 10 ＝ 50），寫成 50 倍就變成放大圖了。",
            "C": "誤以為 500 公分直接寫在分母就是 1/500，忘記除以圖上長 10 公分。",
            "D": "拿圖上長 10 公分去配實際寬 200 公分（10 ÷ 200 ＝ 1/20），對應邊錯配！"
          }
        },
        "check": {
          "expr": "10 / 500",
          "expect": "1/50"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G02-2",
        "label": "(2)",
        "question": "這張平面圖的比例尺用比值表示是（　　），用比表示是（　　）。",
        "options": [
          {
            "key": "A",
            "text": "比值是 1：50，用比表示是 1/50",
            "trapCode": "U07_RELATIVE_SCALE_ERR"
          },
          {
            "key": "B",
            "text": "比值是 1/50，用比表示是 1：50",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "比值是 50，用比表示是 50：1",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "D",
            "text": "比值是 1/500，用比表示是 1：500",
            "trapCode": "U07_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "熟練將同一張平面圖的比例尺同時寫成「比值（分數）」與「最簡整數比」。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺 ＝ 圖上距離：實際距離 ＝ 10 公分：500 公分。"
            },
            {
              "type": "eq",
              "expr": "10 ÷ 500 ＝ 1/50",
              "unit": ""
            },
            {
              "type": "text",
              "text": "第 2 步：比值寫作 1/50，將 10：500 約分同除以 10，用比表示就是 1：50。"
            },
            {
              "type": "answer",
              "text": "答：比值是 1/50，用比表示是 1：50。"
            }
          ],
          "insight": "看清楚題目順序！先問「比值」（要寫分數 1/50），再問「比」（要寫 1：50）。",
          "distractorAnalysis": {
            "C": "把圖上長度與實際長度前後項寫反，寫成放大 50 倍的比。",
            "D": "未先約分 10 與 500，直接照抄 500。",
            "A": "看錯空格順序，把「比」跟「比值」的寫法寫反了。"
          }
        },
        "check": {
          "expr": "10 / 500",
          "expect": "1/50"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G02-3",
        "label": "(3)",
        "question": "平面圖上書桌的長度是實際長度的（　　）倍。",
        "options": [
          {
            "key": "A",
            "text": "50 倍",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "B",
            "text": "1/2500 倍",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "C",
            "text": "1/10 倍",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "1/50 倍",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "理解同一張平面圖上，所有家具與物品都依相同比例尺縮放。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：同一張平面圖的比例尺是 1：50（比值 1/50），圖上任何線段長度都是實際長度的 1/50 倍。"
            },
            {
              "type": "text",
              "text": "第 2 步：所以書桌在平面圖上的長度，也是實際書桌長度的 1/50 倍。"
            },
            {
              "type": "answer",
              "text": "答：平面圖上書桌的長度是實際長度的 1/50 倍。"
            }
          ],
          "insight": "同一個平面圖裡，房間、床、書桌全都共用同一個比例尺 1/50！",
          "distractorAnalysis": {
            "A": "圖上書桌比實際小，不可能是 50 倍。",
            "B": "把長度的比例尺誤平方成面積倍率 1/2500。",
            "C": "誤用平面圖的長 10 公分直接當成 1/10 倍。"
          }
        },
        "check": {
          "expr": "10 / 500",
          "expect": "1/50"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上距離 ÷ 實際距離 ＝ 圖上距離 ： 實際距離"
      ],
      "conceptCompare": "「比值」是一個數字或分數（如 1/50）；「比」有全形冒號（如 1：50），記得前後單位必須先統一成公分再約分。",
      "examVariations": "若改問「實際書桌長 150 公分，在平面圖上要畫幾公分？」，算式為 150 × 1/50 ＝ 3 公分。"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "放大圖的對應點、邊、角與周長",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第3題(1)~(4)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "假設乙三角形是甲三角形的 3 倍放大圖，看圖回答下列問題。（註：依原卷題幹所標示「3 倍放大圖」計算）",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_fill3_tri.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-ZHONGXIAO-G03-1",
        "label": "(1)",
        "question": "點 A 的對應點是點（　　）。",
        "options": [
          {
            "key": "A",
            "text": "點 D",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "點 E",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "C",
            "text": "點 F",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "D",
            "text": "點 C",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "辨識相似放大圖中頂點的對應位置。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：觀察甲、乙兩個直角三角形的擺放方向完全相同，左下角的銳角頂點對左下角的銳角頂點。"
            },
            {
              "type": "text",
              "text": "第 2 步：甲三角形左下角的點 A，對應到乙三角形左下角的點 D。"
            },
            {
              "type": "answer",
              "text": "答：點 A 的對應點是點 D。"
            }
          ],
          "insight": "兩個三角形沒有旋轉翻轉，直接看相同方向的位置：左下點 A 對點 D、上方點 B 對點 E、右下直角點 C 對點 F！",
          "distractorAnalysis": {
            "B": "點 E 在上方，對應的是點 B，不是點 A。",
            "C": "點 F 在右下角，對應的是直角頂點 C。",
            "D": "點 C 是甲三角形自己的頂點，要找乙三角形上的對應點。"
          }
        },
        "check": {
          "expr": "1",
          "expect": "1"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G03-2",
        "label": "(2)",
        "question": "線段 DF ＝（　　）公分，線段 DE ＝（　　）公分。（依原卷題幹所寫 3 倍放大圖計算）",
        "options": [
          {
            "key": "A",
            "text": "線段 DF 是 15 公分，線段 DE 是 12 公分",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "B",
            "text": "線段 DF 是 12 公分，線段 DE 是 15 公分",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "線段 DF 是 9 公分，線段 DE 是 15 公分",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "D",
            "text": "線段 DF 是 8 公分，線段 DE 是 10 公分",
            "trapCode": "U07_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "依放大圖倍率（3 倍）乘上對應邊長，求出線段 DF 與線段 DE。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：線段 DF 的對應邊是線段 AC（4 公分），放大 3 倍後長度為 4 × 3 ＝ 12 公分。"
            },
            {
              "type": "eq",
              "expr": "4 × 3 ＝ 12",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 2 步：線段 DE 的對應邊是斜邊 AB（5 公分），放大 3 倍後長度為 5 × 3 ＝ 15 公分。"
            },
            {
              "type": "eq",
              "expr": "5 × 3 ＝ 15",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "（提醒：原卷附圖乙三角形視覺比例略小於 3 倍，但考題文字明確指定為 3 倍放大圖，作答請依題幹「3 倍」計算。）"
            },
            {
              "type": "answer",
              "text": "答：線段 DF 是 12 公分，線段 DE 是 15 公分。"
            }
          ],
          "insight": "先找準對應邊：底邊 AC（4 公分）對 DF，斜邊 AB（5 公分）對 DE，再通通乘以 3！",
          "distractorAnalysis": {
            "C": "把底邊 DF 誤拿去乘垂直邊 BC 的 3 公分（3 × 3 ＝ 9）。",
            "D": "誤以圖形視覺尺寸當作 2 倍放大來算（4 × 2 ＝ 8、5 × 2 ＝ 10），忽略題幹明寫「3 倍」。",
            "A": "把底邊 DF（12 公分）跟斜邊 DE（15 公分）的數字填反了。"
          }
        },
        "check": {
          "expr": "4 * 3",
          "expect": "12",
          "extraChecks": [
            {
              "expr": "5 * 3",
              "expect": "15"
            }
          ]
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G03-3",
        "label": "(3)",
        "question": "∠F ＝ ∠（　　）＝（　　）度",
        "options": [
          {
            "key": "A",
            "text": "∠B，90 度",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "B",
            "text": "∠A，30 度",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "C",
            "text": "∠C，90 度",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "∠C，270 度",
            "trapCode": "U07_ANGLE_SCALED"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "確認放大圖的對應角完全相等，直角放大後依然是 90 度。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：乙三角形的 ∠F 位於右下角，對應甲三角形右下角的 ∠C。"
            },
            {
              "type": "text",
              "text": "第 2 步：圖中 ∠C 有直角符號，代表 90 度；放大圖的對應角不會改變度數，所以 ∠F ＝ ∠C ＝ 90 度。"
            },
            {
              "type": "answer",
              "text": "答：∠F ＝ ∠C ＝ 90 度。"
            }
          ],
          "insight": "看到圖上的小正方形直角記號，就知道是 90 度；放大 3 倍後還是 90 度，千萬不要 90 × 3！",
          "distractorAnalysis": {
            "D": "誤把角度也乘以放大倍率 3（90 × 3 ＝ 270 度），這是放大圖最常見陷阱！",
            "A": "找錯對應角，把右下角 ∠F 誤對應到上方的 ∠B。",
            "B": "找錯對應角且自行猜測度數。"
          }
        },
        "check": {
          "expr": "90",
          "expect": "90"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G03-4",
        "label": "(4)",
        "question": "甲三角形的周長是（　　）公分，乙三角形的周長是（　　）公分，乙三角形的周長是甲三角形的（　　）倍。",
        "options": [
          {
            "key": "A",
            "text": "甲周長 12 公分，乙周長 24 公分，2 倍",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "甲周長 12 公分，乙周長 108 公分，9 倍",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          },
          {
            "key": "C",
            "text": "甲周長 6 公分，乙周長 18 公分，3 倍",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "甲周長 12 公分，乙周長 36 公分，3 倍",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "比較放大圖與原圖的周長關係，驗證「周長倍率等於邊長放大倍率」。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：先算甲三角形的三邊總長（周長）。"
            },
            {
              "type": "eq",
              "expr": "3 ＋ 4 ＋ 5 ＝ 12",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 2 步：乙三角形三邊分別為 9 公分、12 公分、15 公分，周長為 9 ＋ 12 ＋ 15 ＝ 36 公分。"
            },
            {
              "type": "eq",
              "expr": "9 ＋ 12 ＋ 15 ＝ 36",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 3 步：比較兩者周長倍數：36 ÷ 12 ＝ 3 倍（提醒：原卷考題文字寫 3 倍，故依 3 倍計算為 36 公分、3 倍）。"
            },
            {
              "type": "eq",
              "expr": "36 ÷ 12 ＝ 3",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：甲三角形周長 12 公分，乙三角形周長 36 公分，乙周長是甲周長的 3 倍。"
            }
          ],
          "insight": "邊長放大 3 倍，周長也跟著放大 3 倍（12 × 3 ＝ 36 公分）；只有「面積」才會放大 3 × 3 ＝ 9 倍喔！",
          "distractorAnalysis": {
            "A": "誤把題目當成 2 倍放大圖來計算乙周長。",
            "B": "把「周長倍率」跟「面積倍率（3 × 3 ＝ 9 倍）」搞混，誤算出 108 公分與 9 倍。",
            "C": "把甲三角形的面積（3 × 4 ÷ 2 ＝ 6）誤當成甲三角形的周長。"
          }
        },
        "check": {
          "expr": "(3 + 4 + 5) * 3",
          "expect": "36",
          "extraChecks": [
            {
              "expr": "3 + 4 + 5",
              "expect": "12"
            },
            {
              "expr": "36 / 12",
              "expect": "3"
            }
          ]
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "放大圖倍率為幾倍時：對應邊長 × 倍數，周長 × 倍數，對應角不變，面積 ×（倍數 × 倍數）"
      ],
      "conceptCompare": "「周長」和「邊長」都是長度單位，倍率一樣是 3 倍；「面積」是長 × 寬，倍率才會變成 3 × 3 ＝ 9 倍。",
      "examVariations": "若改問「乙三角形的面積是甲三角形的幾倍？」，甲面積 6 平方公分、乙面積 9 × 12 ÷ 2 ＝ 54 平方公分，54 ÷ 6 ＝ 9 倍。"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量為 1 的和與差",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第4題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 1,
    "difficulty": 1,
    "questionType": "group",
    "question": "「香噴噴麵包店 12 月營業額是 11 月營業額的 2.5 倍」，如果把 11 月營業額當作基準量 1，請回答下列問題：",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-ZHONGXIAO-G04-1",
        "label": "(1)",
        "question": "12 月營業額是（　　）。",
        "options": [
          {
            "key": "A",
            "text": "2.5",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "1.5",
            "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
          },
          {
            "key": "C",
            "text": "3.5",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "D",
            "text": "0.4",
            "trapCode": "U05_RECIPROCAL_MISS"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "依基準量為 1，寫出比較量對應的倍數值。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把 11 月營業額當作 1，12 月是 11 月的 2.5 倍，所以 12 月營業額就是 1 × 2.5 ＝ 2.5。"
            },
            {
              "type": "eq",
              "expr": "1 × 2.5 ＝ 2.5",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：12 月營業額是 2.5。"
            }
          ],
          "insight": "基準量是 1 時，比較量就是題目寫的倍數 2.5！",
          "distractorAnalysis": {
            "B": "寫成兩數差（2.5 － 1 ＝ 1.5），不是 12 月單月營業額。",
            "C": "寫成兩數和（1 ＋ 2.5 ＝ 3.5），看錯題意。",
            "D": "誤拿 1 除以 2.5 算出 0.4。"
          }
        },
        "check": {
          "expr": "1 * 2.5",
          "expect": "2.5"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G04-2",
        "label": "(2)",
        "question": "11 月和 12 月的營業額總和是（　　）。",
        "options": [
          {
            "key": "A",
            "text": "2.6",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "3.5",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "2.5",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "D",
            "text": "1.5",
            "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "計算基準量 1 與比較量 2.5 的總和。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把 11 月的 1 加上 12 月的 2.5。"
            },
            {
              "type": "eq",
              "expr": "1 ＋ 2.5 ＝ 3.5",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：11 月和 12 月的營業額總和是 3.5。"
            }
          ],
          "insight": "注意 1 要加在個位數上：1 ＋ 2.5 ＝ 3.5，千萬別加到十分位變成 2.6！",
          "distractorAnalysis": {
            "C": "忘記把 11 月的基準量 1 加進去。",
            "D": "把「總和」誤算成「差」（2.5 － 1 ＝ 1.5）。",
            "A": "小數加法位數對錯，把 1 誤加成 0.1 得到 2.6。"
          }
        },
        "check": {
          "expr": "1 + 2.5",
          "expect": "3.5"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G04-3",
        "label": "(3)",
        "question": "11 月和 12 月的營業額差是（　　）。",
        "options": [
          {
            "key": "A",
            "text": "3.5",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "B",
            "text": "2.4",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "1.5",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "2.5",
            "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "計算基準量 1 與比較量 2.5 的差。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：用較大的 12 月營業額 2.5 減去 11 月營業額 1。"
            },
            {
              "type": "eq",
              "expr": "2.5 － 1 ＝ 1.5",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：11 月和 12 月的營業額差是 1.5。"
            }
          ],
          "insight": "2.5 － 1 ＝ 1.5，也就是 12 月比 11 月多出 1.5 倍！",
          "distractorAnalysis": {
            "D": "忘記減去 11 月的基準量 1。",
            "A": "把「差」誤算成「總和」（1 ＋ 2.5 ＝ 3.5）。",
            "B": "小數減法位數對錯，把 1 誤當成 0.1 去減。"
          }
        },
        "check": {
          "expr": "2.5 - 1",
          "expect": "1.5"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 1，兩數和 ＝ 1 ＋ 倍數，兩數差 ＝ 倍數 － 1"
      ],
      "conceptCompare": "算小數加減 1 時，1 是「1.0」，要跟個位對齊：1.0 ＋ 2.5 ＝ 3.5；2.5 － 1.0 ＝ 1.5。",
      "examVariations": "若接下來告訴你「兩個月相差 30 萬元」，就可以直接用 30 ÷ 1.5 ＝ 20 萬元算出 11 月營業額！"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與半徑的倍數關係",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第5題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "question": "大披薩的圓周長是小披薩圓周長的 4 倍，大披薩的半徑是小披薩半徑的（　　）倍。",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "8 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "16 倍",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "C",
        "text": "2 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "4 倍",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "掌握圓的「半徑、直徑、圓周長」三者成等比例放大或縮小的關係。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：因為圓周長 ＝ 半徑 × 2 × 3.14，其中 2 和 3.14 都是固定不變的數。"
        },
        {
          "type": "text",
          "text": "第 2 步：當圓周長變成小披薩的 4 倍時，半徑與直徑也都會跟著變成小披薩的 4 倍。"
        },
        {
          "type": "answer",
          "text": "答：大披薩的半徑是小披薩半徑的 4 倍。"
        }
      ],
      "insight": "半徑、直徑、圓周長是好朋友，其中一個變 4 倍，另外兩個也全部都變 4 倍！",
      "distractorAnalysis": {
        "C": "誤以為面積才跟半徑平方有關而拿去開根號（4 變成 2），或者錯把直徑與半徑除 2。",
        "A": "誤把 4 倍再乘 2（直徑與半徑公式的 2 倍重複計算）。",
        "B": "把圓周長倍數跟圓面積倍數（4 × 4 ＝ 16 倍）搞混了。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半徑倍數 ＝ 直徑倍數 ＝ 圓周長倍數"
      ],
      "conceptCompare": "圓周長是 4 倍 ➔ 半徑與直徑也是 4 倍；只有「圓面積」才會變成 4 × 4 ＝ 16 倍。",
      "examVariations": "若改問「大披薩的面積是小披薩面積的幾倍？」，答案才是 4 × 4 ＝ 16 倍。"
    },
    "check": {
      "expr": "4",
      "expect": "4"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "移多補少反推原差",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第6題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "恩俊的貼紙給小娟 26 張後，兩個人的貼紙張數就會一樣多，恩俊原來的貼紙比小娟原來的貼紙多（　　）張。",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "52 張",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "78 張",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "13 張",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "26 張",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "由「移給對方多少後相等」反推兩人原來的數量差（給予量 × 2）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：恩俊給出 26 張會少 26 張，小娟收到 26 張會多 26 張，一來一回兩人的差距縮小了 2 個 26 張才變一樣多。"
        },
        {
          "type": "eq",
          "expr": "26 × 2 ＝ 52",
          "unit": "張"
        },
        {
          "type": "answer",
          "text": "答：恩俊原來的貼紙比小娟多 52 張。"
        }
      ],
      "insight": "舉個小例子驗算：假如恩俊原本有 52 張、小娟 0 張，恩俊給小娟 26 張後，兩人都變成 26 張，一模一樣！",
      "distractorAnalysis": {
        "C": "搞反乘除，誤把 26 除以 2 得到 13。",
        "D": "誤以為給幾張就代表原來只差幾張，忘記給出後自己少 26、對方多 26。",
        "B": "計算 26 × 2 時誤算成 26 × 3 ＝ 78。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "原本相差量 ＝ 給出後相等的移動量 × 2"
      ],
      "conceptCompare": "已知「原差」求「要給多少」用 ÷ 2；已知「給多少會一樣多」求「原差」用 × 2。",
      "examVariations": "若題目再補一句「兩人共有 100 張」，就能接著用和差問題求出恩俊原本有（100 ＋ 52）÷ 2 ＝ 76 張。"
    },
    "check": {
      "expr": "26 * 2",
      "expect": "52"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與比較量（多幾倍求總和）",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第7題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "冬冬昨天走了 12 公里，今天比昨天多走 0.2 倍，兩天共走了（　　）公里。",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "14.4 公里",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "26.4 公里",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "24.2 公里",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "12.2 公里",
        "trapCode": "U05_SUM_FORGET_ONE"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "區分「多 0.2 倍」與「是 0.2 倍」，並計算兩天的總距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把昨天走的 12 公里當作基準量 1，今天「比昨天多走 0.2 倍」，所以今天走了昨天的（1 ＋ 0.2）＝ 1.2 倍。"
        },
        {
          "type": "eq",
          "expr": "12 ×（1 ＋ 0.2）＝ 14.4",
          "unit": "公里"
        },
        {
          "type": "text",
          "text": "第 2 步：把昨天和今天走的距離加起來，算出兩天共走幾公里。"
        },
        {
          "type": "eq",
          "expr": "12 ＋ 14.4 ＝ 26.4",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：兩天共走了 26.4 公里。"
        }
      ],
      "insight": "也可以直接把兩天份量合併成「1 ＋（1 ＋ 0.2）＝ 2.2 倍」，再用 12 × 2.2 ＝ 26.4 公里！",
      "distractorAnalysis": {
        "A": "14.4 公里只是「今天」走的距離，忘記把昨天的 12 公里加起來求兩天總和。",
        "C": "誤把 0.2 倍當成「多走 0.2 公里」，算成 12 ＋ 12.2 ＝ 24.2 公里。",
        "D": "既把 0.2 倍當成 0.2 公里，又忘記加上昨天走的 12 公里。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比基準量多 0.2 倍 ＝ 基準量 ×（1 ＋ 0.2）",
        "兩天總和 ＝ 基準量 ×（1 ＋ 1 ＋ 0.2）"
      ],
      "conceptCompare": "「多 0.2 倍」沒有單位，要乘基準量 12；「多 0.2 公里」才有單位，直接用加的！",
      "examVariations": "若改為「今天比昨天少走 0.2 倍」，則今天走 12 ×（1 － 0.2）＝ 9.6 公里，兩天共走 21.6 公里。"
    },
    "check": {
      "expr": "12 + 12 * (1 + 0.2)",
      "expect": "26.4"
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形圓心角與弧長關係",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第8題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "choiceStyle": "tf",
    "question": "在相同的圓內，扇形的圓心角越大，弧長就越（　　）。（選出「長」或「短」）",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "長",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "短",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "理解在同一個圓（半徑相同）內，扇形弧長與圓心角大小成正比。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：扇形弧長 ＝ 圓周長 ×（圓心角 ÷ 360 度）。"
        },
        {
          "type": "text",
          "text": "第 2 步：在相同的圓內，圓周長固定不變，因此圓心角張得越開（越大），占整個圓的比例越高，弧長就越長。"
        },
        {
          "type": "answer",
          "text": "答：在相同的圓內，扇形的圓心角越大，弧長就越長。"
        }
      ],
      "insight": "想像切披薩：同一個大披薩，圓心角切得越寬，外圈餅皮（弧長）當然就越長！",
      "distractorAnalysis": {
        "B": "把關係想反了；只有在「弧長固定」或看錯大小時才會混淆，同圓內角度越大弧越長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "同圓內：圓心角越大 ➔ 所占幾分之幾圓越大 ➔ 弧長越長"
      ],
      "conceptCompare": "注意前提是「在相同的圓內（半徑相等）」。如果拿大圓的小圓心角跟小圓的大圓心角比，就不能只看角度！",
      "examVariations": "常改考「若甲扇形圓心角 120 度、乙扇形圓心角 60 度（同圓），甲弧長是乙弧長的幾倍？」，答案是 120 ÷ 60 ＝ 2 倍。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "年齡問題（年齡差不變）",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第9題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "今年惠雯的年齡比尚輝大 9 歲，13 年後，惠雯的年齡會比尚輝大（　　）歲。",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "options": [
      {
        "key": "A",
        "text": "4 歲",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "B",
        "text": "13 歲",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "C",
        "text": "9 歲",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "22 歲",
        "trapCode": "U08_AGE_DIFF_CHANGE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "理解兩人的年齡同時增加相同年數，因此「年齡差永遠不變」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：過了 13 年，惠雯會長大 13 歲，尚輝也會同時長大 13 歲。"
        },
        {
          "type": "text",
          "text": "第 2 步：兩個人加的歲數一樣多，所以 13 年後他們的年齡差距完全不會改變，依然是 9 歲。"
        },
        {
          "type": "answer",
          "text": "答：13 年後，惠雯的年齡會比尚輝大 9 歲。"
        }
      ],
      "insight": "大 9 歲的人，不管過 10 年、13 年還是 50 年，永遠都比對方大 9 歲！",
      "distractorAnalysis": {
        "D": "誤把 13 年直接加到年齡差上（9 ＋ 13 ＝ 22），忘記尚輝自己也會長大 13 歲。",
        "A": "誤拿 13 減 9 算出 4 歲，把經過的年數跟年齡差混淆。",
        "B": "直接把「13 年後」的 13 抄成答案。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "任何時間點：兩人的年齡差 ＝ 固定不變"
      ],
      "conceptCompare": "「年齡差」永遠不變，但「年齡倍數」和「年齡和」會隨著時間改變（每過 1 年，兩人年齡和會增加 2 歲）。",
      "examVariations": "若改問「5 年前惠雯比尚輝大幾歲？」，答案一樣是 9 歲！"
    },
    "check": {
      "expr": "9",
      "expect": "9"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-G05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔同籠問題",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 二、填充題 第10題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "農場裡的羊和鵝共 10 隻，農場裡的羊和鵝合起來有 24 隻腳，請依假設法回答下列問題：",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-ZHONGXIAO-G05-1",
        "label": "(1)",
        "question": "如果把全部當作羊，計算後的羊的腳比實際的腳數多（　　）隻腳。",
        "options": [
          {
            "key": "A",
            "text": "40 隻腳",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "4 隻腳",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "C",
            "text": "14 隻腳",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "16 隻腳",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "練習雞兔同籠「全部假設為 4 隻腳的動物」後，計算與實際腳數的差。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：1 隻羊有 4 隻腳，全部 10 隻都當作羊，總腳數會算出 4 × 10 ＝ 40 隻腳。"
            },
            {
              "type": "eq",
              "expr": "4 × 10 ＝ 40",
              "unit": "隻"
            },
            {
              "type": "text",
              "text": "第 2 步：減去題目實際給的 24 隻腳，就是多出來的腳數。"
            },
            {
              "type": "eq",
              "expr": "40 － 24 ＝ 16",
              "unit": "隻"
            },
            {
              "type": "answer",
              "text": "答：計算後的羊的腳比實際的腳數多 16 隻腳。"
            }
          ],
          "insight": "假設法第一步先乘 4 算出總腳數 40，再減掉題目實際腳數 24，差 16 隻腳！",
          "distractorAnalysis": {
            "A": "40 隻腳是全部當作羊的總腳數，還沒減去實際的 24 隻腳。",
            "B": "誤用全部當作鵝（2 × 10 ＝ 20）去和 24 相減。",
            "C": "減法 40 － 24 借位計算錯誤。"
          }
        },
        "check": {
          "expr": "4 * 10 - 24",
          "expect": "16"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G05-2",
        "label": "(2)",
        "question": "由多出來的腳數，可以算出農場裡有（　　）隻鵝。",
        "options": [
          {
            "key": "A",
            "text": "8 隻鵝",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "2 隻鵝",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "C",
            "text": "4 隻鵝",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "6 隻鵝",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "利用每把 1 隻鵝看成羊會多出 2 隻腳，由總腳差反推出鵝的隻數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：1 隻羊有 4 隻腳、1 隻鵝有 2 隻腳，每把 1 隻鵝誤算成羊，就會多出 4 － 2 ＝ 2 隻腳。"
            },
            {
              "type": "eq",
              "expr": "4 － 2 ＝ 2",
              "unit": "隻"
            },
            {
              "type": "text",
              "text": "第 2 步：總共多出 16 隻腳，除以每隻多出的 2 隻腳，就知道有幾隻鵝被誤算成羊了。"
            },
            {
              "type": "eq",
              "expr": "16 ÷ 2 ＝ 8",
              "unit": "隻"
            },
            {
              "type": "answer",
              "text": "答：可以算出有 8 隻鵝。"
            }
          ],
          "insight": "全部假設為「羊」，算出來多出的腳除以（4 － 2），得到的永遠是另一種動物「鵝」的隻數！",
          "distractorAnalysis": {
            "B": "2 隻其實是「羊」的隻數（10 － 8 ＝ 2），把羊和鵝的隻數搞反了！",
            "C": "誤把多出的 16 隻腳除以 4，忘記除以的是腳數差（4 － 2 ＝ 2）。",
            "D": "腳數差計算或除法估算失誤。"
          }
        },
        "check": {
          "expr": "(4 * 10 - 24) / (4 - 2)",
          "expect": "8"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "全當作羊 ➔（4 × 總隻數 － 實際腳數）÷（4 － 2）＝ 鵝的隻數"
      ],
      "conceptCompare": "全部當作 4 隻腳的羊，先算出的是 2 隻腳的鵝；如果想直接先算羊，就要全部當作鵝來假設！",
      "examVariations": "驗算習慣：8 隻鵝有 16 隻腳，剩下 2 隻羊有 8 隻腳，16 ＋ 8 ＝ 24 隻腳，保證 100% 拿滿分。"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-16",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長計算",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 三、計算題 第1題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "如下圖，一個圓心角為 120 度、半徑為 12 公尺的扇形，求這個扇形的弧長大約是多少公尺？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p1.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_calc1_120.png",
    "options": [
      {
        "key": "A",
        "text": "150.72 公尺",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "B",
        "text": "25.12 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "12.56 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "49.12 公尺",
        "trapCode": "U06_ARC_AS_PERIMETER"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "由扇形圓心角求得占整個圓的幾分之幾，並計算扇形「弧長」（不含兩條半徑）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓心角 120 度占整個圓（360 度）的 120/360 ＝ 1/3。"
        },
        {
          "type": "eq",
          "expr": "120 ÷ 360 ＝ 1/3",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：半徑 12 公尺，直徑為 12 × 2 ＝ 24 公尺，乘以 3.14 再乘以 1/3 就是扇形弧長。"
        },
        {
          "type": "eq",
          "expr": "12 × 2 × 3.14 × 1/3 ＝ 25.12",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：扇形弧長大約是 25.12 公尺。"
        }
      ],
      "insight": "先約分最輕鬆！12 × 2 × 1/3 ＝ 8，只要算 8 × 3.14 ＝ 25.12 公尺，少算很多大數字乘法！",
      "distractorAnalysis": {
        "C": "忘記把半徑 12 乘以 2 變成直徑，直接拿 12 × 3.14 × 1/3 ＝ 12.56。",
        "D": "題目只問「弧長」，誤多加了兩條半徑（25.12 ＋ 12 ＋ 12 ＝ 49.12），算成了扇形周長。",
        "A": "誤套用扇形面積公式 12 × 12 × 3.14 × 1/3 ＝ 150.72。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長 ＝ 半徑 × 2 × 3.14 ×（圓心角 ÷ 360 度）"
      ],
      "conceptCompare": "看清楚題目問「弧長」還是「周長」：問「弧長」就停在 25.12 公尺；問「周長」才要再加上 12 × 2 ＝ 24 公尺。",
      "examVariations": "若題目改問這塊扇形的周長，答案是 25.12 ＋ 12 ＋ 12 ＝ 49.12 公尺。"
    },
    "check": {
      "expr": "12 * 2 * 3.14 * (120 / 360)",
      "expect": "25.12"
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-17",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與周長",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 三、計算題 第2題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "下圖是一個半徑 15 公分的 4/5 圓塗色扇形，求塗色扇形的弧長與周長大約各是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_calc2_45.png",
    "options": [
      {
        "key": "A",
        "text": "弧長 37.68 公分，周長 67.68 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "弧長 18.84 公分，周長 48.84 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "C",
        "text": "弧長 75.36 公分，周長 105.36 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "弧長 75.36 公分，周長 90.36 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "已知扇形是幾分之幾圓，正確求出弧長後，再加上 2 條半徑得到完整周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：半徑 15 公分，直徑為 15 × 2 ＝ 30 公分。4/5 圓的弧長是整圓周長的 4/5。"
        },
        {
          "type": "eq",
          "expr": "15 × 2 × 3.14 × 4/5 ＝ 24 × 3.14 ＝ 75.36",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：塗色扇形的周長還要把外圍兩條直線半徑（各 15 公分）加進去。"
        },
        {
          "type": "eq",
          "expr": "75.36 ＋ 15 × 2 ＝ 105.36",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色扇形的弧長大約是 75.36 公分，周長大約是 105.36 公分。"
        }
      ],
      "insight": "算 30 × 4/5 先約分變成 24，再算 24 × 3.14 ＝ 75.36；最後記得加回「兩條半徑 30 公分」才是周長！",
      "distractorAnalysis": {
        "D": "算周長時只加了 1 條半徑（75.36 ＋ 15 ＝ 90.36），漏掉另一條半徑。",
        "A": "算弧長時忘記把半徑 15 乘以 2 變成直徑，導致弧長少一半。",
        "B": "把 4/5 圓誤看成缺角的 1/5 圓來算（30 × 3.14 × 1/5 ＝ 18.84）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "弧長 ＝ 直徑 × 3.14 × 幾分之幾圓",
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2"
      ],
      "conceptCompare": "「1/5 圓」是圖中空白缺角的部分；題目問的是「塗色部分（4/5 圓）」，千萬別看錯塊！",
      "examVariations": "若題目改問空白部分（1/5 圓）的周長，弧長是 18.84 公分，一樣要加兩條半徑 30 公分，周長為 48.84 公分。"
    },
    "check": {
      "expr": "15 * 2 * 3.14 * (4/5)",
      "expect": "75.36",
      "extraChecks": [
        {
          "expr": "15 * 2 * 3.14 * (4/5) + 15 * 2",
          "expect": "105.36"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-18",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "百分率與基準量線段圖",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 三、計算題 第3題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "以線段圖中的 1（全長 1500 公分）為基準量，左段占 30%，求出右段（　　）裡的數是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_calc3_bar.png",
    "options": [
      {
        "key": "A",
        "text": "1950 公分",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "5000 公分",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "C",
        "text": "450 公分",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "1050 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "看懂線段圖的基準量 1 與部分百分比，利用 1 － 30% 求剩餘部分量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：線段圖整條基準量 1 是 1500 公分，左邊那一段占了 30%，所以右邊虛線那一段占（1 － 30%）＝ 70%。"
        },
        {
          "type": "eq",
          "expr": "1 － 30% ＝ 70% ＝ 0.7",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 2 步：已知基準量 1500 公分，用乘法算出這段 70% 的長度。"
        },
        {
          "type": "eq",
          "expr": "1500 ×（1 － 30%）＝ 1500 × 0.7 ＝ 1050",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：（　　）裡的數是 1050 公分。"
        }
      ],
      "insight": "也可以先算出左段 1500 × 30% ＝ 450 公分，再用全長 1500 － 450 ＝ 1050 公分！",
      "distractorAnalysis": {
        "C": "450 公分是左段 30% 的長度，括號問的是右邊較長的虛線段。",
        "A": "把「扣除 30%」誤寫成「加上 30%」（1500 × 1.3 ＝ 1950），超過基準量全長了。",
        "B": "誤用除法 1500 ÷ 30% ＝ 5000，把基準量與比較量搞反。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "剩餘部分量 ＝ 基準量 ×（1 － 部分百分率）"
      ],
      "conceptCompare": "看線段圖一定要看括號指在哪一段！指在「虛線剩餘段」就用 1 － 30%；指在「全長往外延伸」才會用 1 ＋ 30%。",
      "examVariations": "若題目改為已知右邊虛線段長 1050 公分，反求整條基準量 1 的長度，算式就變成 1050 ÷（1 － 30%）＝ 1500 公分。"
    },
    "check": {
      "expr": "1500 * (1 - 30%)",
      "expect": "1050"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-19",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 三、計算題 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "下圖中，塗色部分的周長大約是幾公分？（每個正方形邊長皆為 9 公分）",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_calc4_shade.png",
    "options": [
      {
        "key": "A",
        "text": "46.26 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "28.26 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "C",
        "text": "37.26 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "55.26 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "找出塗色複合圖形的全部外圍邊界（兩段 1/4 圓弧 ＋ 兩條直線邊長）並相加求周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：沿著塗色區域的外框走一圈，共有 2 條半徑 9 公分的 1/4 圓弧（合起來剛好是一個半徑 9 公分的 1/2 圓弧），以及上、下各 1 條 9 公分的直線段。"
        },
        {
          "type": "text",
          "text": "第 2 步：先算 2 條 1/4 圓弧（即 1/2 圓弧）的長度。"
        },
        {
          "type": "eq",
          "expr": "9 × 2 × 3.14 ÷ 2 ＝ 28.26",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：再加上塗色區塊上方的 9 公分直線段和下方的 9 公分直線段。"
        },
        {
          "type": "eq",
          "expr": "28.26 ＋ 9 ＋ 9 ＝ 46.26",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 46.26 公分。"
        }
      ],
      "insight": "算複合圖形周長時，拿筆把灰色區塊的邊緣描一圈：左弧 ＋ 上橫線 ＋ 右弧 ＋ 下橫線，不漏也不重複！",
      "distractorAnalysis": {
        "B": "只算了兩條圓弧的長度 28.26 公分，忘記加上上下兩條 9 公分的直線邊。",
        "C": "只加了其中一條 9 公分直線段，漏掉上面或下面的另一條。",
        "D": "多算了虛線或中間重疊邊（多加了 9 公分），把不是塗色外框的線段算進去了。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "複合圖形周長 ＝ 所有「塗色外圍邊界」弧長與直線段的總和"
      ],
      "conceptCompare": "兩個同半徑的 1/4 圓弧可以拼成 1 個半圓弧（1/2 圓弧），先拼起來再乘 3.14 能省下一次乘法！",
      "examVariations": "有趣的是，這題若改問塗色部分的「面積」，右邊凸出彎塊補進左邊空白彎塊，面積剛好是一個邊長 9 公分的正方形 9 × 9 ＝ 81 平方公分！"
    },
    "check": {
      "expr": "9 * 2 * 3.14 / 4 * 2 + 9 * 2",
      "expect": "46.26"
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-G06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "圖示比例尺換算為比與比值",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 三、計算題 第5題(1)~(2)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "將圖示形式的比例尺用比和比值表示。（圖示每 1 小格代表圖上 1 公分）",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_calc5_scales.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-ZHONGXIAO-G06-1",
        "label": "(1)",
        "question": "第 (1) 題圖示共有 5 小格（每格 1 公分，全長對應實際 8 公里），用比和比值表示分別是多少？",
        "options": [
          {
            "key": "A",
            "text": "比：5：8，比值：5/8",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "比：1：160000，比值：1/160000",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "比：1：800000，比值：1/800000",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "D",
            "text": "比：1：1600，比值：1/1600",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "讀出 5 格圖示比例尺的全長（5 公分）與實際距離（8 公里），統一單位為公分後約分為最簡整數比與比值。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：圖示共有 5 小格，圖上總長為 5 公分，對應實際距離 8 公里。"
            },
            {
              "type": "text",
              "text": "第 2 步：把 8 公里換算成公分（1 公里 ＝ 1000 公尺 ＝ 100000 公分）。"
            },
            {
              "type": "eq",
              "expr": "8 × 100000 ＝ 800000",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 3 步：寫成「圖上：實際 ＝ 5：800000」，前後項同除以 5 約分，得到最簡整數比與比值。"
            },
            {
              "type": "eq",
              "expr": "800000 ÷ 5 ＝ 160000",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：用比表示是 1：160000，用比值表示是 1/160000。"
            }
          ],
          "insight": "兩大關鍵：先數清楚「8 公里對應的是 5 格（5 公分）」，再把「公里變公分乘以 100000」！",
          "distractorAnalysis": {
            "C": "把 8 公里換成 800000 公分後，忘記除以 5 小格（把整條誤當成 1 公分）。",
            "D": "單位換算少兩個 0，把 1 公里誤算成 1000 公分（其實是 1000 公尺）。",
            "A": "完全沒有做單位換算，直接拿 5 公分比 8 公里。"
          }
        },
        "check": {
          "expr": "5 / (8 * 100000)",
          "expect": "1/160000"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G06-2",
        "label": "(2)",
        "question": "第 (2) 題圖示共有 2 小格（每格 1 公分，全長對應實際 500 公尺），用比和比值表示分別是多少？",
        "options": [
          {
            "key": "A",
            "text": "比：1：250，比值：1/250",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "比：1：2500，比值：1/2500",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "比：1：25000，比值：1/25000",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "比：1：50000，比值：1/50000",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "讀出 2 格圖示比例尺（2 公分對應 500 公尺），統一單位為公分後約分為比與比值。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：圖示分成 2 小格，表示圖上 2 公分對應實際距離 500 公尺（即圖上 1 公分代表實際 250 公尺）。"
            },
            {
              "type": "text",
              "text": "第 2 步：把 500 公尺換算成公分（1 公尺 ＝ 100 公分）。"
            },
            {
              "type": "eq",
              "expr": "500 × 100 ＝ 50000",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 3 步：圖上：實際 ＝ 2：50000，前後項同除以 2 約分。"
            },
            {
              "type": "eq",
              "expr": "50000 ÷ 2 ＝ 25000",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：用比表示是 1：25000，用比值表示是 1/25000。"
            }
          ],
          "insight": "先看 500 公尺 ÷ 2 格 ＝ 每格 250 公尺，再把 250 公尺補 2 個 0 變成 25000 公分，馬上得出 1：25000！",
          "distractorAnalysis": {
            "D": "把 500 公尺換成 50000 公分後，忘記圖示總共有 2 格，漏掉除以 2。",
            "A": "忘記把公尺換成公分，直接拿 2：500 約分成 1：250。",
            "B": "公尺換公分時只多補 1 個 0（誤以為 1 公尺 ＝ 10 公分）。"
          }
        },
        "check": {
          "expr": "2 / (500 * 100)",
          "expect": "1/25000"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "1 公尺 ＝ 100 公分；1 公里 ＝ 100000 公分",
        "比例尺 ＝ 圖上公分數 ： 實際公分數"
      ],
      "conceptCompare": "看圖示比例尺一定要先「數有幾小格」，再「統一單位成公分」，最後才約分！",
      "examVariations": "有些考題會在第一格標數字（例如 0、4、8km），不管怎麼標，找「0 到末端數字共幾公分」來除以格數就不會錯。"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-20",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "依比例尺求圖上長度",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第1題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "小琪以 1/3000 為比例尺，要畫出一個正方形公園的平面圖，這個正方形公園的實際邊長是 900 公尺，平面圖上的邊長要畫幾公分？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "3 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "0.3 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "300 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "30 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "將實際長度（公尺）換算為公分後，乘以比例尺求出平面圖上的長度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先將實際邊長 900 公尺換算成公分。"
        },
        {
          "type": "eq",
          "expr": "900 × 100 ＝ 90000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：實際長度乘以比例尺 1/3000，就是圖上要畫的邊長。"
        },
        {
          "type": "eq",
          "expr": "90000 × 1/3000 ＝ 90000 ÷ 3000 ＝ 30",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：平面圖上的邊長要畫 30 公分。"
        }
      ],
      "insight": "也可以先想：比例尺 1/3000 代表「圖上 1 公分 ＝ 實際 3000 公分 ＝ 30 公尺」，所以 900 ÷ 30 ＝ 30 公分！",
      "distractorAnalysis": {
        "A": "900 公尺換算公分時少乘一個 10（誤算成 9000 公分），導致少一個 0 變成 3 公分。",
        "B": "忘記把 900 公尺換成公分，直接拿 900 ÷ 3000 ＝ 0.3。",
        "C": "除以 3000 時只消掉兩個 0，多留了一個 0 變成 300 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上距離 ＝ 實際距離（先換成公分）× 比例尺"
      ],
      "conceptCompare": "算圖上距離用「乘法（變小）」；算實際距離用「除法（變大）」。",
      "examVariations": "若改問這張平面圖上的正方形面積是幾平方公分？答案是 30 × 30 ＝ 900 平方公分。"
    },
    "check": {
      "expr": "900 * 100 * (1/3000)",
      "expect": "30"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-21",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "加成問題（加一成服務費）",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第2題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "question": "丹丹一家人去海產店聚餐，點了 2200 元餐點。結帳時，餐廳要加一成服務費，丹丹要付多少元？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "2420 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "2210 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "220 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "1980 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "理解日常生活中「加一成」代表增加 10%（0.1 倍），計算包含服務費的總金額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「一成」就是 10%（0.1），加一成代表要付原來餐費的（1 ＋ 10%）＝ 1.1 倍。"
        },
        {
          "type": "eq",
          "expr": "2200 ×（1 ＋ 10%）＝ 2200 × 1.1 ＝ 2420",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：丹丹要付 2420 元。"
        }
      ],
      "insight": "也可以先算出服務費 2200 × 10% ＝ 220 元，再加上原本的餐費 2200 ＋ 220 ＝ 2420 元！",
      "distractorAnalysis": {
        "C": "220 元只是「服務費」，忘記加上原本的餐費 2200 元。",
        "D": "把「加一成」誤算成「減一成（打九折）」，算成 2200 × 0.9 ＝ 1980 元。",
        "B": "誤以為加一成就是多加 10 元，算成 2200 ＋ 10 ＝ 2210 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "加一成 ＝ 原價 ×（1 ＋ 10%）＝ 原價 × 1.1"
      ],
      "conceptCompare": "「加一成」是 × 1.1（變貴）；「打一折」是 × 0.1；「打九折（省一成）」才是 × 0.9。",
      "examVariations": "若結帳時出示貴賓卡先打九折、再加一成服務費，算式會是 2200 × 0.9 × 1.1 ＝ 2178 元。"
    },
    "check": {
      "expr": "2200 * (1 + 10%)",
      "expect": "2420"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-22",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔同籠（買兩種花問題）",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第3題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "玫瑰花 1 朵 13 元，百合花 1 朵 20 元，媽媽總共買了 10 朵，花了 172 元。玫瑰花與百合花各買幾朵？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "玫瑰花 3 朵、百合花 7 朵",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "玫瑰花 4 朵、百合花 6 朵",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "玫瑰花 6 朵、百合花 4 朵",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "D",
        "text": "玫瑰花 5 朵、百合花 5 朵",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "應用雞兔同籠假設法，由總朵數與總花費反推兩種花的數量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 10 朵全部都買較便宜的玫瑰花（每朵 13 元），總花費為 13 × 10 ＝ 130 元。"
        },
        {
          "type": "eq",
          "expr": "13 × 10 ＝ 130",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：比實際花費 172 元少了 172 － 130 ＝ 42 元。"
        },
        {
          "type": "eq",
          "expr": "172 － 130 ＝ 42",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 朵玫瑰花換成 1 朵百合花會貴 20 － 13 ＝ 7 元，所以共換了 42 ÷ 7 ＝ 6 朵百合花。"
        },
        {
          "type": "eq",
          "expr": "42 ÷（20 － 13）＝ 6",
          "unit": "朵"
        },
        {
          "type": "text",
          "text": "第 4 步：玫瑰花共有 10 － 6 ＝ 4 朵。"
        },
        {
          "type": "eq",
          "expr": "10 － 6 ＝ 4",
          "unit": "朵"
        },
        {
          "type": "answer",
          "text": "答：玫瑰花買 4 朵、百合花買 6 朵。"
        }
      ],
      "insight": "選出答案後花 3 秒驗算：4 × 13 ＋ 6 × 20 ＝ 52 ＋ 120 ＝ 172 元，馬上確定無誤！",
      "distractorAnalysis": {
        "C": "算式正確得出 6 朵後，誤以為是先假設的玫瑰花數量，把兩種花顛倒寫了。",
        "D": "5 朵玫瑰花和 5 朵百合花共 65 ＋ 100 ＝ 165 元，不合 172 元。",
        "A": "3 朵玫瑰花和 7 朵百合花共 39 ＋ 140 ＝ 179 元，不合 172 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全買玫瑰花 ➔（實際總價 － 13 × 總朵數）÷（20 － 13）＝ 百合花朵數"
      ],
      "conceptCompare": "假設法有個鐵則：「假設全部都是甲，算出來的一定是乙的數量！」",
      "examVariations": "若題目改為「全部買 10 朵共花 172 元，多退少補」，換成假設全買 20 元的百合花也能算：（200 － 172）÷ 7 ＝ 4 朵玫瑰花。"
    },
    "check": {
      "expr": "(172 - 13 * 10) / (20 - 13)",
      "expect": "6",
      "extraChecks": [
        {
          "expr": "10 - (172 - 13 * 10) / (20 - 13)",
          "expect": "4"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-23",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "兩數和與倍數求兩數差",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第4題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "question": "甲、乙兩數和是 24，甲數是乙數的 1.4 倍，甲、乙兩數差是多少？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "10",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "14",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "4",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "6",
        "trapCode": "U05_SUM_FORGET_ONE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "先利用「和 ÷（1 ＋ 倍數）」求出基準量乙數，再進階計算甲、乙兩數的差。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把乙數當作基準量 1，甲數就是 1.4，兩數合起來是（1 ＋ 1.4）＝ 2.4 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：用兩數和 24 除以 2.4，先算出基準量乙數。"
        },
        {
          "type": "eq",
          "expr": "24 ÷（1 ＋ 1.4）＝ 24 ÷ 2.4 ＝ 10",
          "unit": ""
        },
        {
          "type": "longdiv",
          "dividend": "24",
          "divisor": "2.4",
          "note": "除數 2.4 乘以 10 變成 24，被除數 24 也乘以 10 變成 240，240 ÷ 24 ＝ 10。"
        },
        {
          "type": "text",
          "text": "第 3 步：甲數是 10 × 1.4 ＝ 14，再算甲、乙兩數差（14 － 10 ＝ 4）。"
        },
        {
          "type": "eq",
          "expr": "14 － 10 ＝ 4",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：甲、乙兩數差是 4。"
        }
      ],
      "insight": "小撇步：算出乙數是 10 之後，題目問的是「兩數差」，直接用 10 ×（1.4 － 1）＝ 4 也能一步到位！",
      "distractorAnalysis": {
        "A": "10 只是乙數，算出基準量後還要再算兩數的差。",
        "B": "14 只是甲數，忘記最後要算 14 － 10。",
        "D": "計算 24 ÷ 2.4 時忘記加上基準量 1（誤算成 24 ÷ 1.4），或 24 ×（1.4 － 1）誤用乘法。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩數和 ÷（1 ＋ 倍數）",
        "兩數差 ＝ 基準量 ×（倍數 － 1）"
      ],
      "conceptCompare": "這題多問了一步「兩數差是多少？」，所以算出乙 ＝ 10 後絕對不能停筆，一定要繼續算到差 ＝ 4！",
      "examVariations": "若改為「甲、乙兩數差是 4，甲數是乙數的 1.4 倍，兩數和是多少？」，先算乙 ＝ 4 ÷（1.4 － 1）＝ 10，再算和 ＝ 10 × 2.4 ＝ 24。"
    },
    "check": {
      "expr": "24 / (1 + 1.4) * (1.4 - 1)",
      "expect": "4"
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-24",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長應用",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第5題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "question": "用一條 120 公分的繩子繞直徑 25 公分的圓形柱子一圈，繩子大約多出幾公分？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "37 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "95 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "78.5 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "41.5 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "先求圓形柱子的圓周長，再與總繩長相減求剩餘長度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓形柱子的直徑是 25 公分，繞一圈需要的繩子長度就是它的圓周長。"
        },
        {
          "type": "eq",
          "expr": "25 × 3.14 ＝ 78.5",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：用原本 120 公分的繩子減去繞一圈用掉的 78.5 公分。"
        },
        {
          "type": "eq",
          "expr": "120 － 78.5 ＝ 41.5",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：繩子大約多出 41.5 公分。"
        }
      ],
      "insight": "題目給的是「直徑 25 公分」，直接 25 × 3.14 就能算出圓周長，不用再乘 2 喔！",
      "distractorAnalysis": {
        "C": "78.5 公分只是繞柱子一圈用掉的繩長，忘記用 120 公分去減。",
        "A": "把 120 減去 78.5 時誤將 25 當成半徑或其他計算失誤（如誤多減成 120 － 83）。",
        "B": "直接拿繩長 120 減去直徑 25（120 － 25 ＝ 95），忘記直徑還要乘以 3.14 才是圓周長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "剩餘繩長 ＝ 繩子總長 － 直徑 × 3.14"
      ],
      "conceptCompare": "「繞一圈」就是算「圓周長」；若是「繞兩圈」就要減去 2 倍的圓周長！",
      "examVariations": "若改問「還差幾公分才能再多繞一圈？」（已經多出 41.5 公分，一圈要 78.5 公分），答案是 78.5 － 41.5 ＝ 37 公分。"
    },
    "check": {
      "expr": "120 - 25 * 3.14",
      "expect": "41.5"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-25",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "半圓弧路線長度比較",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第6題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "choiceStyle": "compare3",
    "question": "一隻螞蟻從ㄅ走到ㄆ，去程走黑色路線，回程走灰色路線，哪一條路線比較長？（虛線每段皆標示為 20 公分）",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_app6_ant.png",
    "options": [
      {
        "key": "A",
        "text": "黑色路線比較長",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "灰色路線比較長",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "一樣長",
        "trapCode": null
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "分別計算大圓弧與兩個連續小圓弧的總長度，發現「大圓直徑 ＝ 兩小圓直徑和」時路線等長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：黑色路線是 1 個大半圓弧，直徑為 20 ＋ 20 ＋ 20 ＝ 60 公分。"
        },
        {
          "type": "eq",
          "expr": "60 × 3.14 ÷ 2 ＝ 94.2",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：灰色路線由 1 個直徑 20 公分的半圓弧和 1 個直徑 40 公分（20 ＋ 20）的半圓弧接成。"
        },
        {
          "type": "eq",
          "expr": "20 × 3.14 ÷ 2 ＋ 40 × 3.14 ÷ 2 ＝ 31.4 ＋ 62.8 ＝ 94.2",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：兩條路線算出來都是 94.2 公分，所以一樣長。"
        },
        {
          "type": "answer",
          "text": "答：黑色路線與灰色路線一樣長。"
        }
      ],
      "insight": "重要定理（六年級必考）：只要幾個小半圓的直徑加起來等於大半圓的直徑，走小半圓弧跟走大半圓弧的總長度一定完全相等！",
      "distractorAnalysis": {
        "A": "憑直覺誤以為大半圓弧看起來比較高、繞得比較遠就比較長。",
        "B": "憑直覺誤以為灰色路線轉彎比較多、比較曲折就比較長。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "（小直徑 1 ＋ 小直徑 2）× 3.14 ÷ 2 ＝ 大直徑 × 3.14 ÷ 2"
      ],
      "conceptCompare": "不需要先猜感覺，把直徑 60 跟（20 ＋ 40）都乘以 3.14 ÷ 2，用分配律一看就知道兩邊完全相等！",
      "examVariations": "即使灰色路線分成 3 個、4 個甚至 10 個小半圓，只要它們的直徑總和剛好從ㄅ到ㄆ（60 公分），總長依然是 94.2 公分！"
    },
    "check": {
      "expr": "60 * 3.14 / 2",
      "expect": "94.2",
      "extraChecks": [
        {
          "expr": "20 * 3.14 / 2 + 40 * 3.14 / 2",
          "expect": "94.2"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ZHONGXIAO-26",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "移多補少問題",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第7題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "有甲、乙兩個一樣大的杯子，甲杯有 600 毫升的牛奶，乙杯有 900 毫升的牛奶，乙杯要倒多少毫升的牛奶到甲杯，兩個杯子裡的牛奶才會一樣多？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p2.png",
    "options": [
      {
        "key": "A",
        "text": "150 毫升",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "750 毫升",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "200 毫升",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "300 毫升",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "利用兩杯牛奶的容量差除以 2，求得讓兩杯一樣多所需倒出的量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出乙杯比甲杯多幾毫升的牛奶。"
        },
        {
          "type": "eq",
          "expr": "900 － 600 ＝ 300",
          "unit": "毫升"
        },
        {
          "type": "text",
          "text": "第 2 步：把多出來的 300 毫升平分成兩半，倒一半到甲杯，兩杯就會一樣多（各 750 毫升）。"
        },
        {
          "type": "eq",
          "expr": "300 ÷ 2 ＝ 150",
          "unit": "毫升"
        },
        {
          "type": "answer",
          "text": "答：乙杯要倒 150 毫升的牛奶到甲杯。"
        }
      ],
      "insight": "也可以先求兩杯平均：（600 ＋ 900）÷ 2 ＝ 750 毫升，再看乙杯多出 900 － 750 ＝ 150 毫升！",
      "distractorAnalysis": {
        "D": "忘記除以 2，若把全部相差的 300 毫升都倒過去，會變成甲 900、乙 600，反而換甲杯多了。",
        "B": "750 毫升是最後兩杯各自擁有的牛奶量，不是倒過去的量。",
        "C": "除法或差值估算失誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "倒出量 ＝（多量 － 少量）÷ 2"
      ],
      "conceptCompare": "只要是「拿多的給少的，最後一樣多」，永遠只要把「相差的量平分成兩份」就好。",
      "examVariations": "若題目改問「最後兩杯各有幾毫升？」，答案是 750 毫升。"
    },
    "check": {
      "expr": "(900 - 600) / 2",
      "expect": "150"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-27",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "移多補少反推原量",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 四、應用問題 第8題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "大雄採收了 58 公斤的花生，胖虎採收的比較少，大雄分給胖虎 12 公斤花生後，兩人的花生就一樣重了。胖虎採收了多少公斤的花生？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p3.png",
    "options": [
      {
        "key": "A",
        "text": "46 公斤",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "B",
        "text": "34 公斤",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "24 公斤",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "70 公斤",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "從移動後的相等重量反推原本較少一方的重量。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：大雄分給胖虎 12 公斤後，大雄剩下 58 － 12 ＝ 46 公斤，此時胖虎也是 46 公斤。"
        },
        {
          "type": "eq",
          "expr": "58 － 12 ＝ 46",
          "unit": "公斤"
        },
        {
          "type": "text",
          "text": "第 2 步：胖虎是因為拿了大雄的 12 公斤才變成 46 公斤，所以扣掉這 12 公斤就是胖虎原來採收的重量。"
        },
        {
          "type": "eq",
          "expr": "46 － 12 ＝ 34",
          "unit": "公斤"
        },
        {
          "type": "answer",
          "text": "答：胖虎採收了 34 公斤的花生。"
        }
      ],
      "insight": "或者直接想：大雄比胖虎多 12 × 2 ＝ 24 公斤，所以胖虎原本有 58 － 24 ＝ 34 公斤！",
      "distractorAnalysis": {
        "A": "46 公斤是兩人分完之後各自擁有的重量，忘記再扣掉胖虎從大雄那邊拿來的 12 公斤。",
        "C": "24 公斤是兩人原本相差的重量（12 × 2），不是胖虎原本的重量。",
        "D": "題目已明寫胖虎採收的比較少，卻把 12 公斤誤加到 58 上變成 70 公斤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "較少者原量 ＝ 較多者原量 － 移動量 × 2"
      ],
      "conceptCompare": "分步想最不容易錯：① 分完後兩人一樣重（58 － 12 ＝ 46）；② 把別人的 12 公斤還回去（46 － 12 ＝ 34）。",
      "examVariations": "若改為已知胖虎原有 34 公斤、大雄給他 12 公斤後一樣重，則大雄原有 34 ＋ 12 × 2 ＝ 58 公斤。"
    },
    "check": {
      "expr": "58 - 12 * 2",
      "expect": "34"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ZHONGXIAO-G07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺生活應用（房屋與公園）",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 五、閱讀素養題 第1題(1)~(2)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "近幾年，臺灣的房價飆漲，在有限的經濟能力下想購屋的民眾往往很難買到價格實惠的房子。小強在工作多年後終於存到了頭期款，在眾多選擇中挑選了一間符合自己需求的房子，而且住宅旁邊就是一座長方形大公園，居家環境相當不錯。回答下列問題。",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p3.png",
    "stemImage": "images/exams/EXAM_MID2/crop_zhongxiao_read1_house.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-ZHONGXIAO-G07-1",
        "label": "(1)",
        "question": "下圖是小強家的平面圖（長 4 公分、寬 2 公分，圖示比例尺每格 1 公分對應實際 15 公尺），小強家的實際面積是幾平方公尺？",
        "options": [
          {
            "key": "A",
            "text": "900 平方公尺",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "180 平方公尺",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "1800 平方公尺",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "120 平方公尺",
            "trapCode": "U07_AREA_LINEAR_SCALE"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "判讀平面圖長寬與單格圖示比例尺，換算實際長寬後計算長方形面積。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺圖示為 1 公分長對應實際 15 公尺，先算出房子的實際長與實際寬。"
            },
            {
              "type": "eq",
              "expr": "4 × 15 ＝ 60",
              "unit": "公尺"
            },
            {
              "type": "eq",
              "expr": "2 × 15 ＝ 30",
              "unit": "公尺"
            },
            {
              "type": "text",
              "text": "第 2 步：長方形面積 ＝ 實際長 × 實際寬。"
            },
            {
              "type": "eq",
              "expr": "60 × 30 ＝ 1800",
              "unit": "平方公尺"
            },
            {
              "type": "answer",
              "text": "答：小強家的實際面積是 1800 平方公尺。"
            }
          ],
          "insight": "算面積前，長跟寬「兩邊都要乘 15」再相乘！不能只算平面圖面積 4 × 2 ＝ 8 後再乘 15。",
          "distractorAnalysis": {
            "D": "只算平面圖面積 4 × 2 ＝ 8，再誤乘一次比例尺 15（8 × 15 ＝ 120），少乘一次 15。",
            "A": "誤套用三角形面積公式，算完 60 × 30 後又多除以 2。",
            "B": "計算 60 × 30 時漏掉一個 0，算成 180 平方公尺。"
          }
        },
        "check": {
          "expr": "(4 * 15) * (2 * 15)",
          "expect": "1800"
        }
      },
      {
        "subId": "EX2-ZHONGXIAO-G07-2",
        "label": "(2)",
        "question": "在比例尺 1：2000 的地圖上，小強家附近的長方形大公園的長是 25 公分、寬是 15 公分，實際的長和寬各是幾公尺？",
        "options": [
          {
            "key": "A",
            "text": "長 50 公尺、寬 30 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "長 5000 公尺、寬 3000 公尺",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "長 300 公尺、寬 500 公尺",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "D",
            "text": "長 500 公尺、寬 300 公尺",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "利用數值比比例尺 1：2000 求出公園的實際長寬並換算成公尺。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺 1：2000 表示地圖上 1 公分代表實際 2000 公分（即 2000 ÷ 100 ＝ 20 公尺）。"
            },
            {
              "type": "text",
              "text": "第 2 步：把地圖上的長 25 公分與寬 15 公分都乘以 20 公尺，求出實際的長和寬。"
            },
            {
              "type": "eq",
              "expr": "25 × 20 ＝ 500",
              "unit": "公尺"
            },
            {
              "type": "eq",
              "expr": "15 × 20 ＝ 300",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：實際的長是 500 公尺，寬是 300 公尺。"
            }
          ],
          "insight": "先把 2000 公分去掉 2 個 0 變成「1 公分 ＝ 20 公尺」，再用 25 × 20 和 15 × 20，數字好算又不易錯！",
          "distractorAnalysis": {
            "A": "把 2000 公分換成公尺時多去了一個 0（誤當成 2 公尺）。",
            "B": "把 2000 公分換成公尺時少去了一個 0（誤當成 200 公尺）。",
            "C": "把長和寬的順序寫反了。"
          }
        },
        "check": {
          "expr": "25 * 2000 / 100",
          "expect": "500",
          "extraChecks": [
            {
              "expr": "15 * 2000 / 100",
              "expect": "300"
            }
          ]
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "實際長度 ＝ 圖上公分 ×（比例尺分母 ÷ 100）公尺",
        "實際長方形面積 ＝ 實際長 × 實際寬"
      ],
      "conceptCompare": "第(1)題是「圖示比例尺」直接給 15 公尺；第(2)題是「比比例尺」1：2000（單位是公分），必須自己先 ÷ 100 換成公尺！",
      "examVariations": "若繼續問公園的實際面積是多少平方公尺？答案是 500 × 300 ＝ 150000 平方公尺（15 公頃）。"
    }
  },
  {
    "id": "EX2-ZHONGXIAO-28",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-2",
    "sectionName": "生活素養綜合解題（飲水站飲料）",
    "school": "高雄市鳳山區忠孝國小",
    "source": "忠孝國小 114上 期末評量 五、閱讀素養題 第2題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "question": "某國小運動會，在休息區分別設置 A、B 兩個飲水站，A 站準備的運動飲料箱數是 B 站的 2 倍，A 站每箱運動飲料有 24 瓶，B 站每箱運動飲料有 20 瓶，兩站共準備 45 箱運動飲料，兩站運動飲料總瓶數為 1020 瓶，請問 A、B 站各準備多少瓶運動飲料？",
    "examPageImage": "images/exams/EXAM_MID2/zhongxiao_p3.png",
    "options": [
      {
        "key": "A",
        "text": "A 站 720 瓶，B 站 300 瓶",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "A 站 300 瓶，B 站 720 瓶",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "A 站 600 瓶，B 站 420 瓶",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "A 站 30 瓶，B 站 15 瓶",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "整合「和倍問題（或雞兔同籠假設法）」與總量計算，求出兩站各自準備的運動飲料瓶數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：方法一（和倍法）：A 站箱數是 B 站的 2 倍，把 B 站箱數當作 1，共 45 箱，所以 B 站箱數為 45 ÷（1 ＋ 2）＝ 15 箱，A 站箱數為 15 × 2 ＝ 30 箱。"
        },
        {
          "type": "eq",
          "expr": "45 ÷（1 ＋ 2）＝ 15",
          "unit": "箱"
        },
        {
          "type": "text",
          "text": "第 2 步：方法二（雞兔同籠假設法也可驗證）：假設 45 箱全為每箱 20 瓶的 B 站（900 瓶），A 站箱數 ＝（1020 － 900）÷（24 － 20）＝ 30 箱，B 站 45 － 30 ＝ 15 箱，結果完全一致。"
        },
        {
          "type": "text",
          "text": "第 3 步：分別乘上每箱瓶數，算出各站總瓶數。"
        },
        {
          "type": "eq",
          "expr": "30 × 24 ＝ 720",
          "unit": "瓶"
        },
        {
          "type": "eq",
          "expr": "15 × 20 ＝ 300",
          "unit": "瓶"
        },
        {
          "type": "answer",
          "text": "答：A 站準備 720 瓶，B 站準備 300 瓶。"
        }
      ],
      "insight": "這題同時可以用「和倍關係」與「雞兔同籠」兩種方法互相驗算，算出 720 ＋ 300 ＝ 1020 瓶就穩穩對了！",
      "distractorAnalysis": {
        "B": "把 A 站和 B 站的飲料瓶數填反了。",
        "C": "計算各站箱數或每箱瓶數相乘時算錯（24 與 20 錯置）。",
        "D": "30 和 15 是兩站各自的「箱數」，忘記乘以每箱的瓶數（24 瓶與 20 瓶）！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "箱數（和倍法）：B 站箱數 ＝ 總箱數 ÷（1 ＋ 2）",
        "各站瓶數 ＝ 箱數 × 每箱瓶數"
      ],
      "conceptCompare": "看清楚最後問的是「多少瓶」不是「多少箱」，算出 30 箱與 15 箱後還要各乘 24 與 20！",
      "examVariations": "若題目沒給「A 站箱數是 B 站的 2 倍」，只給共 45 箱、共 1020 瓶，依然可以用雞兔同籠法算出 30 箱和 15 箱！"
    },
    "check": {
      "expr": "(1020 - 45 * 20) / (24 - 20) * 24",
      "expect": "720",
      "extraChecks": [
        {
          "expr": "(45 - (1020 - 45 * 20) / (24 - 20)) * 20",
          "expect": "300"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "放大與縮小的性質",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "1. 有關圖形放大或縮小的敘述，下列何者是錯誤的？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 對應角角度會跟著放大或縮小",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "② 對應邊長度會跟著放大或縮小",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "C",
        "text": "③ 新圖和原圖對應邊成比例",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "D",
        "text": "④ 三角形的高會跟著放大或縮小",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "檢驗學生是否理解放大圖與縮小圖的核心性質：邊長會等比例改變，但對應角角度永遠不變。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圖形放大或縮小時，所有長度（邊長、周長、三角形的高）都會乘以相同的倍率。"
        },
        {
          "type": "text",
          "text": "第 2 步：形狀完全相似，所以「對應角的角度」永遠保持一樣，不會跟著放大或縮小！"
        },
        {
          "type": "answer",
          "text": "答：錯誤的敘述是 ① 對應角角度會跟著放大或縮小。"
        }
      ],
      "insight": "放大縮小只改變「邊的長短」，「角的大小」打死不變！",
      "distractorAnalysis": {
        "B": "對應邊的長度確實會依照倍率一起放大或縮小，這是正確的。",
        "C": "新圖和原圖的每組對應邊比值相同（成比例），這是正確的。",
        "D": "三角形的高也是長度的一種，會跟著原圖依相同倍率放大或縮小，這是正確的。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大／縮小圖：對應角相等，對應邊成比例"
      ],
      "conceptCompare": "邊長、周長、高都會變為原本的幾倍；但角度（例如 60 度、90 度）絕對不會乘倍率！",
      "examVariations": "常改考計算：「一個 30 度的角畫成 3 倍放大圖後變成幾度？」答案仍然是 30 度。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周率與圓周長",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "圓周率與圓周長概念",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "question": "2. 下列敘述，何者正確？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 圓周率會隨著圓的直徑長短而改變",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "② 直徑大約是圓周長的 3.14 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "③ 圓周長會因為半徑的長度不同而改變",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "④ 圓周長 ÷ 半徑 ＝ 圓周率",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "釐清圓周率是固定常數（約 3.14），以及圓周長、直徑與半徑之間的乘法關係。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：任何大小的圓，圓周長 ÷ 直徑 都等於固定不變的圓周率（大約 3.14），所以 ① 和 ④ 都錯。"
        },
        {
          "type": "text",
          "text": "第 2 步：是「圓周長」大約是「直徑」的 3.14 倍，不是直徑比較長，所以 ② 錯。"
        },
        {
          "type": "text",
          "text": "第 3 步：因為圓周長 ＝ 半徑 × 2 × 圓周率，所以半徑越長，圓周長就會越長！"
        },
        {
          "type": "answer",
          "text": "答：正確的敘述是 ③ 圓周長會因為半徑的長度不同而改變。"
        }
      ],
      "insight": "圓周率像「圓的固定密碼」約 3.14，大圓小圓都一樣；圓周長才會隨半徑或直徑變大！",
      "distractorAnalysis": {
        "A": "誤以為大圓的圓周率比較大，其實圓周率永遠固定大約是 3.14。",
        "B": "把「圓周長」跟「直徑」的大小順序說反了。",
        "D": "圓周率是「圓周長 ÷ 直徑」，除以半徑會得到圓周率的 2 倍（約 6.28）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周率 ＝ 圓周長 ÷ 直徑 ≈ 3.14",
        "圓周長 ＝ 直徑 × 圓周率 ＝ 半徑 × 2 × 圓周率"
      ],
      "conceptCompare": "「圓周率」永遠不變；「圓周長」會隨著半徑／直徑等比例變長或變短。",
      "examVariations": "常改問是非題：「把一個圓的半徑變成 2 倍，它的圓周率也會變成 2 倍嗎？」答案是錯，只有圓周長變 2 倍。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題與不變量",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "年齡差不變",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "3. 小文今年 12 歲，弟弟今年 7 歲，下列敘述何者是錯誤的？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 今年小文跟弟弟相差 5 歲",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "② 10 年後，小文和弟弟相差 10 歲",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "③ 小文的年齡 − 弟弟的年齡 ＝ 5",
        "trapCode": "U08_AGE_NOW_OFFSET_MISS"
      },
      {
        "key": "D",
        "text": "④ 弟弟 30 歲時，小文 35 歲",
        "trapCode": "U08_AGE_DIFF_CHANGE"
      }
    ],
    "answer": "B",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗「兩人的年齡差永遠不變」的核心不變量觀念。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出今年兩人的年齡差："
        },
        {
          "type": "eq",
          "expr": "12 − 7 ＝ 5",
          "unit": "歲"
        },
        {
          "type": "text",
          "text": "第 2 步：每過 1 年，小文和弟弟都會同時長大 1 歲，所以不管過幾年，兩人永遠相差 5 歲！"
        },
        {
          "type": "text",
          "text": "第 3 步：10 年後小文 22 歲、弟弟 17 歲，還是相差 5 歲，不是 10 歲。"
        },
        {
          "type": "answer",
          "text": "答：錯誤的敘述是 ② 10 年後，小文和弟弟相差 10 歲。"
        }
      ],
      "insight": "你長一歲、我也長一歲，「年齡差」一輩子都不會變！",
      "distractorAnalysis": {
        "A": "12 − 7 ＝ 5 歲，今年確實相差 5 歲，是正確敘述。",
        "C": "兩人的年齡差永遠維持 5 歲，是正確關係式。",
        "D": "弟弟 30 歲時，小文是 30 ＋ 5 ＝ 35 歲，是正確敘述。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 大年齡 − 小年齡（過幾年後都不變）"
      ],
      "conceptCompare": "「年齡差」永遠不變；「年齡和」每過 1 年會增加 2 歲（兩個人各加 1 歲）。",
      "examVariations": "進階題會問：「幾年後兩人的年齡和是 39 歲？」要先算今年和 19 歲，多出 20 歲要除以 2 ＝ 10 年後。"
    },
    "check": {
      "expr": "12 - 7",
      "expect": "5"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "比與比值應用",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "比例與單位換算",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "4. 六年好班有學生腸病毒確診，為了有效防疫，老師請學生準備進行環境消毒工作。消毒水配製的比例為「漂白水：清水 ＝ 1：100」，由三個學生泡製，誰的作法是正確的？\n＊甲生：70 毫升的漂白水加上 7070 毫升的清水\n＊乙生：8 公升的清水中，倒入 80 毫升的漂白水\n＊丙生：50 毫升的漂白水，搭配 4950 毫升的清水",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 甲生",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "② 乙生",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "③ 丙生",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "④ 以上皆非",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗在生活情境中將「公升」換算成「毫升」，並檢驗兩量比是否符合 1：100。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目要求「漂白水：清水 ＝ 1：100」，也就是清水的量必須剛好是漂白水的 100 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：逐一檢驗三人：甲生 70 × 100 ＝ 7000 毫升（多倒了 70 毫升）；丙生 50 × 100 ＝ 5000 毫升（少倒了 50 毫升）。"
        },
        {
          "type": "text",
          "text": "第 3 步：乙生有 8 公升清水，先換算單位：8 公升 ＝ 8000 毫升。"
        },
        {
          "type": "eq",
          "expr": "8000 ÷ 80 ＝ 100",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：作法正確的是 ② 乙生（80：8000 ＝ 1：100）。"
        }
      ],
      "insight": "看清楚題目比的是「漂白水：清水」，不是「漂白水：整桶消毒水」！單位要先統一成毫升。",
      "distractorAnalysis": {
        "A": "甲生錯把 70 毫升去算 70 × 101 ＝ 7070 毫升，比例變成 1：101。",
        "C": "丙生誤把 5000 毫升當成「總水量」再扣掉 50 毫升漂白水，使清水變 4950 毫升（1：99）。",
        "D": "乙生 8 公升 ＝ 8000 毫升，80：8000 剛好是 1：100，所以有正確人選！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公升 ＝ 1000 毫升",
        "比較兩量比時，兩邊單位必須先換算一致"
      ],
      "conceptCompare": "「漂白水：清水 ＝ 1：100」是部分對部分；若題目改寫「漂白水佔整桶消毒水的 1/100」，總量才是 100 份！",
      "examVariations": "常改考「若要配成總重 2020 公克的 1：100 消毒水，需要幾公克漂白水？」需用 2020 ÷ (1 ＋ 100) ＝ 20 公克。"
    },
    "check": {
      "expr": "8000 / 80",
      "expect": "100"
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "比例尺大小與圖上距離比較",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "5. 下列哪個比例尺的臺灣地圖上，臺北到臺南的圖上距離最短？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "① 1：300000",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "B",
        "text": "② 1/400000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "③ 1/500000",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "D",
        "text": "④ 1：600000",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "理解實際距離固定時，比例尺比值越小（縮得越多），在地圖上的距離就越短。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：臺北到臺南的實際距離固定不變，圖上距離 ＝ 實際距離 × 比例尺。"
        },
        {
          "type": "text",
          "text": "第 2 步：比較四個比例尺的比值大小："
        },
        {
          "type": "eq",
          "expr": "1/600000 ＜ 1/500000 ＜ 1/400000 ＜ 1/300000"
        },
        {
          "type": "text",
          "text": "第 3 步：分母 600000 最大，代表把實際距離縮小最多倍，所以圖上距離最短！"
        },
        {
          "type": "answer",
          "text": "答：圖上距離最短的是 ④ 1：600000。"
        }
      ],
      "insight": "比值分母越大，地圖「縮得越狠」，同兩地的圖上距離就越短！",
      "distractorAnalysis": {
        "A": "1：300000 是四個裡面縮得最少（比值最大）的，圖上距離反而最長！",
        "B": "1/400000 比 1/600000 大，所以圖上距離比 ④ 還長。",
        "C": "1/500000 縮得沒有 1/600000 多，還不是最短的。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上距離 ＝ 實際距離 × 比例尺（比值越小，圖上越短）"
      ],
      "conceptCompare": "「1：600000」跟「1/600000」意思是相同的，都是圖上 1 公分代表實際 600000 公分（6 公里）。",
      "examVariations": "反過來問「哪個地圖畫出來的臺北到臺南最長（最詳細）？」就要挑分母最小的 1：300000。"
    },
    "check": {
      "expr": "600000",
      "expect": "600000"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 二、填填看 第1題",
    "batch": "段考真題",
    "category": "影印縮放倍率",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "1. 在超商的影印機上，按「75%」縮放鍵影印後，原圖上長度 12 公分的線段會變成（　　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "3 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "87 公分",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "C",
        "text": "9 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "16 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "練習把影印機縮放百分率轉成小數或分數乘法，求出縮小後的邊長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：縮放「75%」代表新圖長度是原圖的 75%（也就是 0.75 倍或 3/4 倍）。"
        },
        {
          "type": "eq",
          "expr": "12 × 75% ＝ 12 × 0.75 ＝ 9",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：原圖 12 公分的線段會變成 9 公分。"
        }
      ],
      "insight": "75% ＝ 3/4，12 的 3/4 就是 9 公分，比原本的 12 公分短才合理！",
      "distractorAnalysis": {
        "D": "誤用除法算成 12 ÷ 0.75 ＝ 16 公分，縮小後不可能反而變長。",
        "A": "算成減少的長度 12 × (1 − 75%) ＝ 3 公分，題目問的是變成幾公分。",
        "B": "直接把 12 ＋ 75 ＝ 87，忘記 75% 是倍數不是公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "新圖長度 ＝ 原圖長度 × 縮放倍率"
      ],
      "conceptCompare": "按「75%」是縮小圖（倍率 ＜ 1）；按「150%」是放大圖（倍率 ＞ 1）。",
      "examVariations": "若改問「先按 50% 再按 200%」，總倍率是 0.5 × 2 ＝ 1 倍，大小不變！"
    },
    "check": {
      "expr": "12 * 75%",
      "expect": "9"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周率與圓周長",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 二、填填看 第2題",
    "batch": "段考真題",
    "category": "圓規半徑與圓周長",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "question": "2. 把圓規張開 10 公分所畫出來的圓，圓周長大約是（　　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "314 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "B",
        "text": "20 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "31.4 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "62.8 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "了解「圓規張開的距離」就是圓的半徑，必須先乘以 2 變成直徑再算圓周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓規張開 10 公分，畫出來的圓「半徑」就是 10 公分，所以直徑是："
        },
        {
          "type": "eq",
          "expr": "10 × 2 ＝ 20",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：圓周長 ＝ 直徑 × 3.14："
        },
        {
          "type": "eq",
          "expr": "20 × 3.14 ＝ 62.8",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：圓周長大約是 62.8 公分。"
        }
      ],
      "insight": "看到「圓規張開幾公分」，先大喊一聲：「這是半徑，要記得 × 2 變直徑！」",
      "distractorAnalysis": {
        "C": "直接用 10 × 3.14 ＝ 31.4，忘記圓規張開的長度是半徑而不是直徑！",
        "A": "錯算成 10 × 10 × 3.14 ＝ 314，這是圓面積不是圓周長。",
        "B": "只算出了直徑 10 × 2 ＝ 20 公分，還沒乘 3.14。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓規張開距離 ＝ 半徑",
        "圓周長 ＝ 半徑 × 2 × 3.14"
      ],
      "conceptCompare": "「圓規張開 10 公分」是半徑 10 公分；「用 10 公分長的紙條圍成一圈」才是圓周長 10 公分。",
      "examVariations": "常反過來問：「畫出圓周長 62.8 公分的圓，圓規要張開幾公分？」要先除以 3.14 再除以 2，得 10 公分。"
    },
    "check": {
      "expr": "10 * 2 * 3.14",
      "expect": "62.8"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 二、填填看 第3題(1)~(2)",
    "batch": "段考真題",
    "category": "線段圖示比例尺換算",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "3. 在比例尺（圖示 0 到 2 公尺，每段長 1 公分）的地圖中：",
    "stemImage": "images/exams/EXAM_MID2/crop_anhe_scale_3.png",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-ANHE-G01-1",
        "label": "(1)",
        "question": "1 公分代表實際長度（　　）公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "100 公分",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "1 公分",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "200 公分",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "D",
            "text": "1000 公分",
            "trapCode": "U07_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "判讀線段比例尺的每一格（1 公分）對應實際長度，並將公尺換算成公分。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：觀察圖示比例尺，每 1 段（長 1 公分）標示到 1 公尺。"
            },
            {
              "type": "text",
              "text": "第 2 步：題目問代表實際長度幾「公分」，所以把 1 公尺換算成公分："
            },
            {
              "type": "eq",
              "expr": "1 × 100 ＝ 100",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：1 公分代表實際長度 100 公分。"
            }
          ],
          "insight": "1 公尺 ＝ 100 公分，看比例尺先看「第 1 格」的數字，再統一單位成公分！",
          "distractorAnalysis": {
            "B": "看到數字 1 就直接填 1 公分，忘記後面單位是「公尺」要乘 100。",
            "C": "誤看成整條線段尾端的「2 公尺」，寫成 200 公分（那是 2 公分代表的長度）。",
            "D": "把 1 公尺誤記成 1000 公分（1 公里才是 1000 公尺）。"
          }
        },
        "check": {
          "expr": "1 * 100",
          "expect": "100"
        }
      },
      {
        "subId": "EX2-ANHE-G01-2",
        "label": "(2)",
        "question": "實際距離 30 公尺，在地圖上是（　　）公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "0.3 公分",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "B",
            "text": "30 公分",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "15 公分",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "D",
            "text": "3000 公分",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "利用已知的單位比例（地圖 1 公分代表實際 1 公尺），反推地圖上的距離。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：由第 (1) 題知道，地圖上 1 公分代表實際 1 公尺（100 公分），比例尺是 1：100。"
            },
            {
              "type": "text",
              "text": "第 2 步：實際距離 30 公尺 ＝ 3000 公分，除以 100（或直接用 30 ÷ 1）："
            },
            {
              "type": "eq",
              "expr": "3000 ÷ 100 ＝ 30",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：在地圖上是 30 公分。"
            }
          ],
          "insight": "地圖 1 公分 ＝ 實際 1 公尺，所以有幾公尺在地圖上就是幾公分！",
          "distractorAnalysis": {
            "C": "如果第 (1) 題誤讀成 1 公分代表 2 公尺，這題就會跟著算錯成 30 ÷ 2 ＝ 15 公分。",
            "D": "直接把 30 公尺換算成 3000 公分就當作答案，忘記還要縮回地圖比例尺！",
            "A": "在換算單位後又多除了 100（30 ÷ 100 ＝ 0.3 公分）。"
          }
        },
        "check": {
          "expr": "30 * 100 / 100",
          "expect": "30"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "圖示比例尺判讀：先量／看 1 格代表的實際距離，再將公尺或公里換算成公分"
      ],
      "conceptCompare": "「圖上 1 公分 ＝ 實際 1 公尺」寫成比是 1：100；寫成比值是 1/100。",
      "examVariations": "常改問：「地圖上 4.5 公分的走廊，實際長度是多少公尺？」因 1 公分代表 1 公尺，答案直接是 4.5 公尺。"
    }
  },
  {
    "id": "EX2-ANHE-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 二、填填看 第4題(1)~(2)",
    "batch": "段考真題",
    "category": "基準量辨識與倍率計算",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "4. 小安的體重是 28.5 公斤，爸爸的體重是 57 公斤，小安的體重是爸爸的幾倍？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "work": "md",
    "subQuestions": [
      {
        "subId": "EX2-ANHE-G02-1",
        "label": "(1)",
        "question": "（　　）公斤是基準量。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "85.5 公斤",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "28 公斤",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "57 公斤",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "28.5 公斤",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "練習從問句「Ａ 是 Ｂ 的幾倍」中準確抓出誰是基準量。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：問句是「小安的體重是爸爸的幾倍？」，「的」前面寫的是「爸爸」。"
            },
            {
              "type": "text",
              "text": "第 2 步：所以要把爸爸的體重 57 公斤當作 1 份（基準量）。"
            },
            {
              "type": "answer",
              "text": "答：57 公斤是基準量。"
            }
          ],
          "insight": "口訣：「是〇〇的幾倍」或「跟〇〇比」，〇〇就是基準量，一定要放在除數！",
          "distractorAnalysis": {
            "D": "28.5 公斤是小安的體重，在這句話裡是「比較量」，不是基準量。",
            "A": "算成兩人體重總和 28.5 ＋ 57 ＝ 85.5 公斤。",
            "B": "四捨五入或粗心看錯 28.5 公斤。"
          }
        },
        "check": {
          "expr": "57",
          "expect": "57"
        }
      },
      {
        "subId": "EX2-ANHE-G02-2",
        "label": "(2)",
        "question": "答：（　　）÷（　　）＝（　　）倍",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "57 ÷ 28.5 ＝ 2 倍",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "28.5 ÷ 57 ＝ 5 倍",
            "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
          },
          {
            "key": "C",
            "text": "57 ÷ 28.5 ＝ 0.5 倍",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "28.5 ÷ 57 ＝ 0.5 倍",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "練習依「比較量 ÷ 基準量 ＝ 倍數（比值）」正確填入被除數、除數與商。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比較量（小安 28.5 公斤）放前面當被除數，基準量（爸爸 57 公斤）放後面當除數。"
            },
            {
              "type": "eq",
              "expr": "28.5 ÷ 57 ＝ 0.5",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：28.5 ÷ 57 ＝ 0.5 倍。"
            }
          ],
          "insight": "小安比爸爸輕，所以「小安是爸爸的幾倍」一定小於 1 倍（0.5 倍就是一半）！",
          "distractorAnalysis": {
            "A": "把被除數與除數寫反了，57 ÷ 28.5 ＝ 2 算的是「爸爸是小安的幾倍」。",
            "B": "小數點位置看錯，28.5 ÷ 57 是 0.5 不是 5（285 ÷ 57 才是 5）。",
            "C": "算式寫成 57 ÷ 28.5 卻又填 0.5，前後矛盾。"
          }
        },
        "check": {
          "expr": "28.5 / 57",
          "expect": "0.5"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "倍數（比值）＝ 比較量 ÷ 基準量"
      ],
      "conceptCompare": "「小安是爸爸的幾倍」算 28.5 ÷ 57 ＝ 0.5 倍；「爸爸是小安的幾倍」則算 57 ÷ 28.5 ＝ 2 倍。",
      "examVariations": "這兩倍數互為倒數：0.5 ＝ 1/2，倒過來就是 2/1 ＝ 2！"
    }
  },
  {
    "id": "EX2-ANHE-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "雞兔問題",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 二、填填看 第5題",
    "batch": "段考真題",
    "category": "雞兔同籠假設法",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "5. 開心農場養了兔子和雞共 50 隻，這些兔子和雞的腳共有 160 隻，所以農場裡有（　　）隻兔子和（　　）隻雞。",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p1.png",
    "options": [
      {
        "key": "A",
        "text": "30 隻兔子、20 隻雞",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "20 隻兔子、30 隻雞",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "40 隻兔子、10 隻雞",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "25 隻兔子、25 隻雞",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "運用假設法（全當成雞或全當成兔）解決經典雞兔問題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 50 隻全部都是 2 隻腳的雞，總腳數會有："
        },
        {
          "type": "eq",
          "expr": "2 × 50 ＝ 100",
          "unit": "隻腳"
        },
        {
          "type": "text",
          "text": "第 2 步：比實際的 160 隻腳少了多少隻腳？"
        },
        {
          "type": "eq",
          "expr": "160 − 100 ＝ 60",
          "unit": "隻腳"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 隻雞換成 4 隻腳的兔子會多出 4 − 2 ＝ 2 隻腳，所以兔子數量為："
        },
        {
          "type": "eq",
          "expr": "60 ÷ (4 − 2) ＝ 30",
          "unit": "隻兔子"
        },
        {
          "type": "text",
          "text": "第 4 步：最後用總隻數減掉兔子，算出雞有幾隻："
        },
        {
          "type": "eq",
          "expr": "50 − 30 ＝ 20",
          "unit": "隻雞"
        },
        {
          "type": "answer",
          "text": "答：農場裡有 30 隻兔子和 20 隻雞。"
        }
      ],
      "insight": "假設全部都是「雞」，算出來除以腳數差的答案一定是「兔子」喔（總會算出另一種）！",
      "distractorAnalysis": {
        "B": "把算出來的 30 誤當成雞的數量，兔子和雞數量寫反了！（20×4＋30×2＝140 隻腳，不合）",
        "C": "誤直接拿 160 ÷ 4 ＝ 40 當成兔子數量，沒考慮總頭數只有 50 隻。",
        "D": "直接平分成各 25 隻（25×4＋25×2＝150 隻腳，少於 160 隻）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全是雞：兔數 ＝ (總腳數 − 2 × 總頭數) ÷ (4 − 2)"
      ],
      "conceptCompare": "算完一定要代回驗算總腳數：30 × 4 ＋ 20 × 2 ＝ 120 ＋ 40 ＝ 160，這樣就保證 100% 不會把雞和兔寫反！",
      "examVariations": "同型題常換成「大車載 6 人、小車載 4 人」或「答對得 5 分、答錯倒扣 2 分」（此時每換 1 題分差是 5 ＋ 2 ＝ 7 分）。"
    },
    "check": {
      "expr": "(160 - 50 * 2) / (4 - 2)",
      "expect": "30",
      "extraChecks": [
        {
          "expr": "50 - 30",
          "expect": "20"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-4",
    "sectionName": "數量關係與和固定",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 二、填填看 第6題(1)~(2)",
    "batch": "段考真題",
    "category": "出缺席總和不變",
    "level": 1,
    "difficulty": 1,
    "questionType": "group",
    "question": "6. 以下是六年甲班學生出缺席的情況：",
    "stemImage": "images/exams/EXAM_MID2/crop_anhe_table_6.png",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p2.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-ANHE-G03-1",
        "label": "(1)",
        "question": "請完成下表（依序填入星期三缺席人數、星期四出席人數、星期五缺席人數）。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "星期三缺席 3 人、星期四出席 24 人、星期五缺席 6 人",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          },
          {
            "key": "B",
            "text": "星期三缺席 3 人、星期四出席 26 人、星期五缺席 6 人",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "星期三缺席 2 人、星期四出席 25 人、星期五缺席 5 人",
            "trapCode": "U08_PATTERN_INDEX_OFF"
          },
          {
            "key": "D",
            "text": "星期三缺席 4 人、星期四出席 26 人、星期五缺席 7 人",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "從已完整紀錄的星期一與星期二找出全班固定總人數，推算表格其餘空格。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：從星期一（27 ＋ 1 ＝ 28）與星期二（28 ＋ 0 ＝ 28），知道全班固定有 28 人。"
            },
            {
              "type": "eq",
              "expr": "28 − 25 ＝ 3",
              "unit": "人（星期三缺席）"
            },
            {
              "type": "eq",
              "expr": "28 − 2 ＝ 26",
              "unit": "人（星期四出席）"
            },
            {
              "type": "eq",
              "expr": "28 − 22 ＝ 6",
              "unit": "人（星期五缺席）"
            },
            {
              "type": "answer",
              "text": "答：星期三缺席 3 人、星期四出席 26 人、星期五缺席 6 人。"
            }
          ],
          "insight": "同一班每天的「出席 ＋ 缺席 ＝ 全班人數 28 人」，總和固定不變！",
          "distractorAnalysis": {
            "C": "誤以為全班只有 27 人，造成每格都少 1 人。",
            "D": "誤以為全班有 29 人，或減法計算粗心。",
            "A": "星期四減法算錯，28 − 2 是 26 不是 24。"
          }
        },
        "check": {
          "expr": "28 - 25",
          "expect": "3",
          "extraChecks": [
            {
              "expr": "28 - 2",
              "expect": "26"
            },
            {
              "expr": "28 - 22",
              "expect": "6"
            }
          ]
        }
      },
      {
        "subId": "EX2-ANHE-G03-2",
        "label": "(2)",
        "question": "出席和缺席的人數關係怎麼表示？出席人數 ＋ 缺席人數 ＝（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "26",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "29",
            "trapCode": "U08_PATTERN_INDEX_OFF"
          },
          {
            "key": "C",
            "text": "28",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "27",
            "trapCode": "U08_INTERVAL_OFF_BY_ONE"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "將表格中觀察到的固定數量關係寫成「和不變」的定值關係式。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：把星期一的出席與缺席人數相加："
            },
            {
              "type": "eq",
              "expr": "27 ＋ 1 ＝ 28",
              "unit": "人"
            },
            {
              "type": "text",
              "text": "第 2 步：星期二的 28 ＋ 0 也等於 28，代表全班人數固定是 28 人。"
            },
            {
              "type": "answer",
              "text": "答：出席人數 ＋ 缺席人數 ＝ 28。"
            }
          ],
          "insight": "看到兩欄一多一少、上下加起來永遠相等，就是「和不變」的關係！",
          "distractorAnalysis": {
            "D": "只看了星期一的出席人數 27，忘了把缺席的 1 人加回來。",
            "A": "減法或合計數錯成 26。",
            "B": "誤把人數算成 29 人。"
          }
        },
        "check": {
          "expr": "27 + 1",
          "expect": "28"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "和不變關係：甲 ＋ 乙 ＝ 固定總數（例如出席人數 ＋ 缺席人數 ＝ 全班總人數）"
      ],
      "conceptCompare": "六年級常見兩種不變關係：一、和不變（出缺席、一塊蛋糕吃掉與剩下）；二、差不變（兩人年齡差）。",
      "examVariations": "若改考「旗竿高度與影長」，同一時間則是「商不變」（比值固定）喔！"
    }
  },
  {
    "id": "EX2-ANHE-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與周長",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 三、算算看 第1題",
    "batch": "段考真題",
    "category": "扇形弧長計算",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "1. 算出灰色部分扇形的弧長",
    "stemImage": "images/exams/EXAM_MID2/crop_anhe_calc1_150.png",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p2.png",
    "options": [
      {
        "key": "A",
        "text": "7.85 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "27.7 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "C",
        "text": "47.1 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "15.7 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗讀取圖形半徑與圓心角，計算扇形弧長，並區分「弧長」與「周長」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：從圖中讀出半徑是 6 公分、圓心角是 150 度，先求圓心角佔整個圓的幾分之幾："
        },
        {
          "type": "eq",
          "expr": "150 ÷ 360 ＝ 5/12"
        },
        {
          "type": "text",
          "text": "第 2 步：弧長 ＝ 直徑 × 3.14 × 圓心角比例："
        },
        {
          "type": "eq",
          "expr": "6 × 2 × 3.14 × 5/12 ＝ 5 × 3.14 ＝ 15.7",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：灰色部分扇形的弧長大約是 15.7 公分。"
        }
      ],
      "insight": "6 × 2 ＝ 12 剛好跟分母 12 約掉，不用急著乘 3.14，先約分變 5 × 3.14 秒殺！",
      "distractorAnalysis": {
        "A": "直接用半徑 6 × 3.14 × 5/12 ＝ 7.85，忘記先乘以 2 變成直徑！",
        "B": "多算了兩條半徑 6 ＋ 6 ＝ 12，算出 15.7 ＋ 12 ＝ 27.7，那是「周長」不是「弧長」。",
        "C": "誤用面積算式 6 × 6 × 3.14 × 5/12 ＝ 47.1。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長 ＝ 半徑 × 2 × 3.14 × (圓心角 ÷ 360)"
      ],
      "conceptCompare": "問「弧長」只算彎曲圓弧部分；問「周長」才要再加上兩條直線半徑！",
      "examVariations": "若把題目改成算這個扇形的「周長」，答案要再加 6 × 2 ＝ 12，變成 27.7 公分。"
    },
    "check": {
      "expr": "6 * 2 * 3.14 * 150 / 360",
      "expect": "15.7"
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 三、算算看 第2題",
    "batch": "段考真題",
    "category": "繩拴農舍外圍複合扇形周長",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "question": "2. 算出灰色部分的周長",
    "stemImage": "images/exams/EXAM_MID2/crop_anhe_calc2_farm.png",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p2.png",
    "options": [
      {
        "key": "A",
        "text": "47.4 公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "31.4 公尺",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "C",
        "text": "43.4 公尺",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "D",
        "text": "53.68 公尺",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "剖析繩子繞過牆角折轉形成的大小兩個扇形，並沿灰色區域外圍完整加總所有曲線與直線邊界。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：左側是半徑 8 公尺的 1/2 圓（半圓弧）："
        },
        {
          "type": "eq",
          "expr": "8 × 2 × 3.14 × 1/2 ＝ 25.12",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：繩子往下繞過農舍左下角時，左邊牆壁已經佔掉 12 − 8 ＝ 4 公尺，剩下繩長 8 − 4 ＝ 4 公尺，在下方形成半徑 4 公尺的 1/4 圓弧："
        },
        {
          "type": "eq",
          "expr": "4 × 2 × 3.14 × 1/4 ＝ 6.28",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 3 步：別忘記貼著農舍牆壁的直線邊界！左側邊長 12 公尺，加上下側貼住小扇形的 4 公尺："
        },
        {
          "type": "eq",
          "expr": "25.12 ＋ 6.28 ＋ 12 ＋ 4 ＝ 47.4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：灰色部分的周長大約是 47.4 公尺。"
        }
      ],
      "insight": "算複合圖形「周長」要用手指沿著灰色邊界走一圈：大圓弧 ＋ 小圓弧 ＋ 左邊牆 12 ＋ 底邊牆 4！",
      "distractorAnalysis": {
        "B": "只算了兩段圓弧 25.12 ＋ 6.28 ＝ 31.4 公尺，完全漏掉灰色區域靠著農舍的直線牆邊 12 ＋ 4 ＝ 16 公尺！",
        "C": "加了農舍左側 12 公尺，卻漏加下方小扇形貼著農舍底邊的那 4 公尺（31.4 ＋ 12 ＝ 43.4）。",
        "D": "把下方小 1/4 圓的半徑誤看成原本繩長 8 公尺（25.12 ＋ 12.56 ＋ 16 ＝ 53.68）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "折轉剩餘繩長 ＝ 原繩長 − 牆壁已用長度",
        "複合圖形周長 ＝ 所有外圍實線弧長 ＋ 所有外圍直線邊長"
      ],
      "conceptCompare": "牆內或灰色圖形內部的虛線／半徑標示線不能算進周長，只有「最外圈圍住灰色的實線」才算！",
      "examVariations": "若繩子改綁在牆角且繩長大於正方形邊長 12 公尺（例如 14 公尺），則會同時繞過上方與下方兩個牆角，形成兩個 1/4 小圓弧。"
    },
    "check": {
      "expr": "8 * 2 * 3.14 / 2 + 4 * 2 * 3.14 / 4 + 12 + 4",
      "expect": "47.4"
    },
    "work": "lg"
  },
  {
    "id": "EX2-ANHE-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖與縮小圖",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 四、畫畫看 第1題",
    "batch": "段考真題",
    "category": "方格紙繪製面積指定三角形與放大圖",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "1. 假設下方為邊長 1 公分的方格紙，請先畫出一個面積 12 平方公分的三角形 ABC（非直角三角形），並標示點 A、B、C。再畫出原圖的 2 倍放大圖，並依序標示對應點 D、E、F。",
    "stemImage": "images/exams/EXAM_MID2/crop_anhe_draw1_grid.png",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p2.png",
    "figureSvg": "<svg viewBox=\"0 0 512 260\" width=\"100%\" style=\"max-width:560px;background:#fff;border:1px solid #e2e8f0;border-radius:8px\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"16\" y1=\"16\" x2=\"16\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"36\" y1=\"16\" x2=\"36\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"56\" y1=\"16\" x2=\"56\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"76\" y1=\"16\" x2=\"76\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"96\" y1=\"16\" x2=\"96\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"116\" y1=\"16\" x2=\"116\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"136\" y1=\"16\" x2=\"136\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"156\" y1=\"16\" x2=\"156\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"176\" y1=\"16\" x2=\"176\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"196\" y1=\"16\" x2=\"196\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"216\" y1=\"16\" x2=\"216\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"236\" y1=\"16\" x2=\"236\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"256\" y1=\"16\" x2=\"256\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"276\" y1=\"16\" x2=\"276\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"296\" y1=\"16\" x2=\"296\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"316\" y1=\"16\" x2=\"316\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"336\" y1=\"16\" x2=\"336\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"356\" y1=\"16\" x2=\"356\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"376\" y1=\"16\" x2=\"376\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"396\" y1=\"16\" x2=\"396\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"416\" y1=\"16\" x2=\"416\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"436\" y1=\"16\" x2=\"436\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"456\" y1=\"16\" x2=\"456\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"476\" y1=\"16\" x2=\"476\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"496\" y1=\"16\" x2=\"496\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"16\" x2=\"496\" y2=\"16\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"36\" x2=\"496\" y2=\"36\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"56\" x2=\"496\" y2=\"56\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"76\" x2=\"496\" y2=\"76\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"96\" x2=\"496\" y2=\"96\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"116\" x2=\"496\" y2=\"116\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"136\" x2=\"496\" y2=\"136\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"156\" x2=\"496\" y2=\"156\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"176\" x2=\"496\" y2=\"176\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"196\" x2=\"496\" y2=\"196\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"16\" y1=\"216\" x2=\"496\" y2=\"216\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n  <polygon points=\"76,116 36,196 156,196\" fill=\"rgba(59,130,246,0.18)\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <polygon points=\"296,36 216,196 456,196\" fill=\"rgba(16,185,129,0.16)\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n  <line x1=\"76\" y1=\"116\" x2=\"76\" y2=\"196\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <line x1=\"296\" y1=\"36\" x2=\"296\" y2=\"196\" stroke=\"#059669\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <text x=\"76\" y=\"111\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">A</text>\n  <text x=\"30\" y=\"208\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"end\">B</text>\n  <text x=\"162\" y=\"208\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"start\">C</text>\n  <text x=\"296\" y=\"32\" font-size=\"12\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">D</text>\n  <text x=\"210\" y=\"208\" font-size=\"12\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"end\">E</text>\n  <text x=\"462\" y=\"208\" font-size=\"12\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"start\">F</text>\n  <text x=\"96\" y=\"212\" font-size=\"11\" fill=\"#1e40af\" text-anchor=\"middle\">底 6 格、高 4 格</text>\n  <text x=\"336\" y=\"212\" font-size=\"11\" fill=\"#065f46\" text-anchor=\"middle\">底 12 格、高 8 格（2 倍放大圖）</text>\n  <text x=\"256\" y=\"254\" font-size=\"11\" fill=\"#475569\" text-anchor=\"middle\">解答參考圖（每小格邊長 1 公分，原圖 12 平方公分，放大圖 48 平方公分）</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "原圖底 6 格、高 4 格（面積 12 平方公分），2 倍放大圖底 8 格、高 6 格（面積 24 平方公分）",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      },
      {
        "key": "B",
        "text": "原圖底 6 格、高 4 格（面積 12 平方公分），2 倍放大圖底 12 格、高 8 格（面積 48 平方公分）",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "原圖底 6 格、高 4 格（面積 12 平方公分），2 倍放大圖底 12 格、高 8 格（面積 24 平方公分）",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "原圖底 6 格、高 2 格（面積 12 平方公分），2 倍放大圖底 12 格、高 4 格（面積 24 平方公分）",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "先利用「底 × 高 ÷ 2 ＝ 12」設計非直角三角形，再將底、高與頂點水平位移同時放大 2 倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：三角形面積 ＝ 底 × 高 ÷ 2 ＝ 12，所以「底 × 高」要等於 24。可取底 ＝ 6 格、高 ＝ 4 格（且頂點 A 往內移 2 格，避開直角）。"
        },
        {
          "type": "eq",
          "expr": "6 × 4 ÷ 2 ＝ 12",
          "unit": "平方公分"
        },
        {
          "type": "text",
          "text": "第 2 步：畫 2 倍放大圖時，底、高和頂點水平位移通通乘以 2：底 ＝ 12 格、高 ＝ 8 格（位移 4 格）。"
        },
        {
          "type": "eq",
          "expr": "12 × 8 ÷ 2 ＝ 48",
          "unit": "平方公分"
        },
        {
          "type": "answer",
          "text": "答：原圖可畫底 6 格、高 4 格（面積 12 平方公分），2 倍放大圖為底 12 格、高 8 格（面積 48 平方公分，對應點依序標示 D、E、F）。"
        }
      ],
      "insight": "邊長變 2 倍，面積會變「2 × 2 ＝ 4 倍」（12 × 4 ＝ 48），且頂點不可落在底邊端點正上方以免變成直角三角形！",
      "distractorAnalysis": {
        "C": "誤以為 2 倍放大圖的面積也只變 2 倍（12 × 2 ＝ 24），其實 12 × 8 ÷ 2 ＝ 48。",
        "D": "算三角形面積忘記除以 2，底 6 格、高 2 格的三角形面積只有 6 平方公分。",
        "A": "誤把「2 倍放大」當成「每邊各加 2 格」（6 ＋ 2 ＝ 8、4 ＋ 2 ＝ 6）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "三角形面積 ＝ 底 × 高 ÷ 2",
        "邊長放大 2 倍，面積放大 2 × 2 ＝ 4 倍"
      ],
      "conceptCompare": "畫斜邊最穩的方法：不要直接量斜邊長度，改數頂點對底邊左端點的「向右幾格、向上幾格」，再把格數同時乘 2！",
      "examVariations": "常改畫「面積 12 平方公分的平行四邊形」，此時直接取底 × 高 ＝ 12（如底 4 格、高 3 格），2 倍放大後底 8 格、高 6 格。"
    },
    "check": {
      "expr": "12 * (2 * 2)",
      "expect": "48",
      "extraChecks": [
        {
          "expr": "6 * 4 / 2",
          "expect": "12"
        },
        {
          "expr": "12 * 8 / 2",
          "expect": "48"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 四、畫畫看 第2題",
    "batch": "段考真題",
    "category": "容量比例線段圖作圖",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "2. 咖啡店小、中、大三種尺寸的杯子，容量分別是 200 毫升、300 毫升、500 毫升。用線段圖表示飲料的容量大小關係，將小杯的容量當作 1，請畫出代表中杯和大杯容量的線段有多長。",
    "stemImage": "images/exams/EXAM_MID2/crop_anhe_draw2_bars.png",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p2.png",
    "figureSvg": "<svg viewBox=\"0 0 500 165\" width=\"100%\" style=\"max-width:500px;background:#fff;border:1px solid #e2e8f0;border-radius:8px\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"122\" y=\"34\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"end\">小杯 (200 毫升)</text>\n  <line x1=\"135\" y1=\"20\" x2=\"135\" y2=\"32\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n  <line x1=\"135\" y1=\"32\" x2=\"259\" y2=\"32\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n  <line x1=\"259\" y1=\"20\" x2=\"259\" y2=\"32\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n  <text x=\"269\" y=\"34\" font-size=\"12\" fill=\"#334155\">當作 1（2 格）</text>\n  <text x=\"122\" y=\"76\" font-size=\"13\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"end\">中杯 (300 毫升)</text>\n  <rect x=\"135\" y=\"60\" width=\"62\" height=\"22\" fill=\"rgba(59,130,246,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"197\" y=\"60\" width=\"62\" height=\"22\" fill=\"rgba(59,130,246,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"259\" y=\"60\" width=\"62\" height=\"22\" fill=\"rgba(59,130,246,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"321\" y=\"60\" width=\"62\" height=\"22\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"383\" y=\"60\" width=\"62\" height=\"22\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n  <text x=\"329\" y=\"76\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">塗 3 格（1.5 倍）</text>\n  <text x=\"122\" y=\"118\" font-size=\"13\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"end\">大杯 (500 毫升)</text>\n  <rect x=\"135\" y=\"102\" width=\"62\" height=\"22\" fill=\"rgba(16,185,129,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"197\" y=\"102\" width=\"62\" height=\"22\" fill=\"rgba(16,185,129,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"259\" y=\"102\" width=\"62\" height=\"22\" fill=\"rgba(16,185,129,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"321\" y=\"102\" width=\"62\" height=\"22\" fill=\"rgba(16,185,129,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/><rect x=\"383\" y=\"102\" width=\"62\" height=\"22\" fill=\"rgba(16,185,129,0.35)\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n  <text x=\"453\" y=\"118\" font-size=\"12\" font-weight=\"bold\" fill=\"#047857\">5 格（2.5 倍）</text>\n  <text x=\"250\" y=\"150\" font-size=\"11\" fill=\"#475569\" text-anchor=\"middle\">每 1 小格 ＝ 100 毫升（0.5 個小杯）</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "中杯畫 2 格（2/3 倍）、大杯畫 4 格（2/5 倍）",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "中杯畫 4 格（2 倍）、大杯畫 5 格（3 倍）",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "中杯畫 3 格（1.5 倍）、大杯畫 5 格（2.5 倍）",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "中杯畫 1.5 格（1.5 倍）、大杯畫 2.5 格（2.5 倍）",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "先算出中杯、大杯各是小杯（基準量 1）的幾倍，再配合考卷上 1 小格 ＝ 100 毫升的格子畫出正確長度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：將小杯 200 毫升當作 1，觀察考卷題圖：小杯的長度剛好對齊下方空白格的「2 格」，所以每 1 小格代表 200 ÷ 2 ＝ 100 毫升（0.5 倍小杯）。"
        },
        {
          "type": "eq",
          "expr": "300 ÷ 200 ＝ 1.5",
          "unit": "倍（佔 3 格）"
        },
        {
          "type": "eq",
          "expr": "500 ÷ 200 ＝ 2.5",
          "unit": "倍（佔 5 格）"
        },
        {
          "type": "answer",
          "text": "答：中杯應畫 3 格（1.5 倍），大杯應畫 5 格（2.5 倍，剛好畫滿 5 格）。"
        }
      ],
      "insight": "先看題目小杯長度佔了幾格！小杯是 2 格（200 毫升），1 格就是 100 毫升，300 毫升當然畫 3 格、500 毫升畫 5 格！",
      "distractorAnalysis": {
        "D": "算出了 1.5 倍與 2.5 倍，卻忘記題圖的小杯佔 2 格而不是 1 格，直接只畫 1.5 格與 2.5 格。",
        "A": "把基準量放反，算成 200 ÷ 300 與 200 ÷ 500。",
        "B": "格數與倍數估計錯誤，300 毫升不是 200 毫升的 2 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比較量佔基準量的倍數 ＝ 比較量 ÷ 基準量"
      ],
      "conceptCompare": "畫線段圖前一定要對齊「1 單位」在考卷上佔了幾格，不能直接把倍數當成格數！",
      "examVariations": "若改將「大杯 500 毫升當作 1」，則小杯是 200 ÷ 500 ＝ 0.4（2/5）、中杯是 300 ÷ 500 ＝ 0.6（3/5）。"
    },
    "check": {
      "expr": "300 / 200",
      "expect": "1.5",
      "extraChecks": [
        {
          "expr": "500 / 200",
          "expect": "2.5"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第1題",
    "batch": "段考真題",
    "category": "母子和（分數倍）求兩量差",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "question": "安和國小 12 月份舉辦三天兩夜的畢業旅行，六年級的同學每個人都非常的期待，讓我們來看看一路上，他們有哪些有趣的際遇。\n1. 這次全學年參加的學生人數一共有 310 人，已知女生的人數是男生的 15/16，請問男、女相差多少人？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p3.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "男生（基準量）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "女生（比較量 15/16）",
          "units": 0.9375,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "全學年共有 310 人"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "160 人",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "150 人",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "20 人",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "D",
        "text": "10 人",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "綜合應用母子和算出基準量（男生人數），再求出比較量（女生人數）與兩者差值。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：女生人數是男生的 15/16，所以把「男生人數」當作基準量 1，女生就是 15/16。"
        },
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "text",
          "text": "第 2 步：全學年總人數 310 人對應的總份數為 1 ＋ 15/16 ＝ 31/16，先算出男生人數："
        },
        {
          "type": "eq",
          "expr": "310 ÷ (1 ＋ 15/16) ＝ 310 ÷ 31/16 ＝ 160",
          "unit": "人（男生）"
        },
        {
          "type": "text",
          "text": "第 3 步：算出女生人數後相減（或直接算差額份數 160 × 1/16）："
        },
        {
          "type": "eq",
          "expr": "310 − 160 ＝ 150",
          "unit": "人（女生）"
        },
        {
          "type": "eq",
          "expr": "160 − 150 ＝ 10",
          "unit": "人"
        },
        {
          "type": "answer",
          "text": "答：男、女相差 10 人。"
        }
      ],
      "insight": "女生是男生的 15/16，代表男生 16 份、女生 15 份，合計 31 份 ＝ 310 人，每 1 份剛好 10 人，男女就差 1 份 ＝ 10 人！",
      "distractorAnalysis": {
        "A": "算出男生 160 人就停手了，忘記題目問的是男、女相差幾人！",
        "B": "算出女生 150 人當作答案，沒算出兩者差值。",
        "C": "倍數份數差或計算出錯，算成 20 人。"
      },
      "figureNote": "把男生畫成 1 整條（16 小格），女生佔 15 小格，合起來一共 31 小格代表 310 人。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩量的和 ÷ (1 ＋ 倍數)",
        "兩量的差 ＝ 基準量 × (大倍數 − 小倍數)"
      ],
      "conceptCompare": "看到「一共有 310 人」要用 1 ＋ 15/16；若改說「男生比女生多 10 人」，才用 1 − 15/16。",
      "examVariations": "常改問「女生比男生少幾人？」算法完全一樣，就是 10 人！"
    },
    "check": {
      "expr": "310 / (1 + 15/16) * (1 - 15/16)",
      "expect": "10"
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "6-1",
    "sectionName": "圓周率與圓周長",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第2題",
    "batch": "段考真題",
    "category": "單位換算與圓周長比值",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "（延續安和國小三天兩夜畢業旅行故事）\n2. 第一站來到了臺南十鼓文創園區，全學年的師生先體驗了打鼓活動，再到小劇場欣賞了一場由十鼓擊樂團演出、震撼人心的演奏，位於舞臺中央的圓形大鼓鼓面和體驗用的圓形小鼓鼓面，半徑分別為 2 公尺和 20 公分，請問小鼓鼓面的圓周長是大鼓鼓面的圓周長的幾倍？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p3.png",
    "options": [
      {
        "key": "A",
        "text": "0.1 倍",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "10 倍",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "1/100 倍",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "100 倍",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "考驗先統一長度單位（公尺換公分），再正確依「比較量 ÷ 基準量」計算圓周長倍數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把大鼓半徑 2 公尺換算成公分：2 公尺 ＝ 200 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：分別算出小鼓和大鼓的圓周長："
        },
        {
          "type": "eq",
          "expr": "20 × 2 × 3.14 ＝ 125.6",
          "unit": "公分（小鼓圓周長）"
        },
        {
          "type": "eq",
          "expr": "200 × 2 × 3.14 ＝ 1256",
          "unit": "公分（大鼓圓周長）"
        },
        {
          "type": "text",
          "text": "第 3 步：問「小鼓是大鼓的幾倍」，大鼓是基準量要放除數："
        },
        {
          "type": "eq",
          "expr": "125.6 ÷ 1256 ＝ 0.1",
          "unit": "倍（或 1/10 倍）"
        },
        {
          "type": "answer",
          "text": "答：小鼓鼓面的圓周長是大鼓鼓面的圓周長的 0.1 倍（或 1/10 倍）。"
        }
      ],
      "insight": "圓周長比就等於半徑比！小鼓半徑 20 公分 ÷ 大鼓半徑 200 公分 ＝ 0.1 倍，直接約掉 2 × 3.14 更快！",
      "distractorAnalysis": {
        "B": "把基準量放反，算出 1256 ÷ 125.6 ＝ 10 倍，那是「大鼓是小鼓的幾倍」。",
        "C": "誤算成圓面積的倍數（0.1 × 0.1 ＝ 1/100）。",
        "D": "既沒換單位又放反方向（或誤算面積倍數倒數）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "兩圓周長比 ＝ 兩圓直徑比 ＝ 兩圓半徑比"
      ],
      "conceptCompare": "問「圓周長是幾倍」，直接用半徑相除（20 ÷ 200 ＝ 0.1）；若改問「圓面積是幾倍」，才是 0.1 × 0.1 ＝ 0.01 倍。",
      "examVariations": "若題目改問「大鼓圓周長比小鼓圓周長多幾公分？」，就要老實算出 1256 − 125.6 ＝ 1130.4 公分！"
    },
    "check": {
      "expr": "(20 * 2 * 3.14) / (200 * 2 * 3.14)",
      "expect": "0.1"
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第3題",
    "batch": "段考真題",
    "category": "打折反求原定價",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "（延續安和國小三天兩夜畢業旅行故事）\n3. 第二天，全體同學來到了故宮南院參觀後，丹丹看見禮品店有販賣文物複製品，且參觀者購買可以打九折，丹丹看到有一個瓷器湯盤，打折後的售價是 1800 元，那這個瓷器湯盤的定價是多少元？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p3.png",
    "options": [
      {
        "key": "A",
        "text": "18000 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "B",
        "text": "2000 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1620 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "200 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "已知打九折後的售價（比較量）與折數 0.9，反推求出原本的定價（基準量）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：定價 □ 元是基準量 1，「打九折」表示售價是定價的 0.9 倍（90%）。"
        },
        {
          "type": "eq",
          "expr": "□ × 0.9 ＝ 1800"
        },
        {
          "type": "longdiv",
          "dividend": "1800",
          "divisor": "0.9",
          "mode": "exact",
          "note": "除數 0.9 右移一位變 9，被除數 1800 補一個 0 變 18000"
        },
        {
          "type": "eq",
          "expr": "1800 ÷ 0.9 ＝ 2000",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：這個瓷器湯盤的定價是 2000 元。"
        }
      ],
      "insight": "打折後變便宜了才是 1800 元，所以原本的「定價」一定要比 1800 元貴才合理！",
      "distractorAnalysis": {
        "C": "用 1800 × 0.9 ＝ 1620，把定價當成 1800 元又再打了一次九折！",
        "D": "算 1800 ÷ 0.9 時忘記把被除數一起放大 10 倍，直接除成 1800 ÷ 9 ＝ 200。",
        "A": "誤把「打九折」當成乘／除 0.1，算成 1800 ÷ 0.1 ＝ 18000 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "售價 ＝ 定價 × 折數",
        "定價 ＝ 售價 ÷ 折數"
      ],
      "conceptCompare": "「打九折」折數是 0.9（付 90%）；「打八五折」折數是 0.85；「便宜了 20%」則等於打八折（1 − 0.2 ＝ 0.8）。",
      "examVariations": "常改問：「打九折後比原定價便宜了多少元？」算出定價 2000 元後再減 1800 元 ＝ 200 元。"
    },
    "check": {
      "expr": "1800 / 0.9",
      "expect": "2000"
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-16",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "雞兔問題",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第4題",
    "batch": "段考真題",
    "category": "假設法求大小盒各幾盒",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "（延續安和國小三天兩夜畢業旅行故事）\n4. 離開故宮南院，小真來到彰化芬園的一福堂名產店，想起了這次行程的贊助者媽媽有交代要買著名的太陽餅回家發送給親朋好友，而太陽餅大盒裝 12 個，小盒裝 8 個。玩過頭的小真只記得總共要買 7 盒，一共有 68 個太陽餅，卻忘記媽媽交代各要買幾盒。請問媽媽交代小真大盒和小盒各買幾盒呢？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p3.png",
    "options": [
      {
        "key": "A",
        "text": "大盒 5 盒、小盒 2 盒",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "大盒 2 盒、小盒 5 盒",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "C",
        "text": "大盒 3 盒、小盒 4 盒",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "大盒 4 盒、小盒 3 盒",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "應用雞兔假設法解決生活中大小包裝混合採買的數量問題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 7 盒全部都買小盒（每盒 8 個），總個數只有："
        },
        {
          "type": "eq",
          "expr": "8 × 7 ＝ 56",
          "unit": "個"
        },
        {
          "type": "text",
          "text": "第 2 步：比媽媽交代的 68 個少了多少個？"
        },
        {
          "type": "eq",
          "expr": "68 − 56 ＝ 12",
          "unit": "個"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 盒小盒換成大盒（12 個），總數會多 12 − 8 ＝ 4 個，所以大盒有："
        },
        {
          "type": "eq",
          "expr": "12 ÷ (12 − 8) ＝ 3",
          "unit": "盒（大盒）"
        },
        {
          "type": "text",
          "text": "第 4 步：再由總盒數 7 盒減掉大盒數量："
        },
        {
          "type": "eq",
          "expr": "7 − 3 ＝ 4",
          "unit": "盒（小盒）"
        },
        {
          "type": "answer",
          "text": "答：大盒買 3 盒、小盒買 4 盒。"
        }
      ],
      "insight": "算完馬上驗算總個數：3 × 12 ＋ 4 × 8 ＝ 36 ＋ 32 ＝ 68 個，剛好吻合！",
      "distractorAnalysis": {
        "D": "把算出來的大盒 3 盒跟小盒 4 盒寫反了（4×12＋3×8 ＝ 72 個，超過 68 個）。",
        "A": "計算或假設差值出錯（5×12＋2×8 ＝ 76 個）。",
        "B": "誤用錯的盒數差（2×12＋5×8 ＝ 64 個）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全小盒：大盒數 ＝ (總個數 − 小盒裝數 × 總盒數) ÷ (大盒裝數 − 小盒裝數)"
      ],
      "conceptCompare": "假設法就像「先全部買便宜／小的，不夠幾個再一盒一盒換成大的補齊」。",
      "examVariations": "也能假設全部買大盒：12 × 7 ＝ 84 個，多了 84 − 68 ＝ 16 個，16 ÷ 4 ＝ 4 盒小盒，結果一樣！"
    },
    "check": {
      "expr": "(68 - 8 * 7) / (12 - 8)",
      "expect": "3",
      "extraChecks": [
        {
          "expr": "7 - 3",
          "expect": "4"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-ANHE-17",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第5題",
    "batch": "段考真題",
    "category": "已知比例尺與實際長度求圖上長度",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "（延續安和國小三天兩夜畢業旅行故事）\n5. 下一站，來到了臺中科學博物館，館中有最受歡迎的人氣明星「機械暴龍」，牠的高度為 7 公尺。如果在比例尺 1/35 的解說圖卡上，牠的高度是多少公分呢？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p3.png",
    "options": [
      {
        "key": "A",
        "text": "0.2 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "24500 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "200 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "20 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "先將實際長度「公尺」換算成「公分」，再乘以分數比例尺算出圖上長度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先把機械暴龍的實際高度 7 公尺換算成公分："
        },
        {
          "type": "eq",
          "expr": "7 × 100 ＝ 700",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：解說圖卡上的高度是實際高度的 1/35："
        },
        {
          "type": "eq",
          "expr": "700 × 1/35 ＝ 20",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：在解說圖卡上，牠的高度是 20 公分。"
        }
      ],
      "insight": "圖上高度比實際高度小，先換成公分（700 公分）再乘 1/35（也就是除以 35），得到 20 公分剛剛好放在圖卡上！",
      "distractorAnalysis": {
        "A": "忘記把 7 公尺先換成 700 公分，直接用 7 ÷ 35 ＝ 0.2 公分。",
        "B": "乘除方向搞反，用 700 ÷ 1/35 ＝ 700 × 35 ＝ 24500 公分。",
        "C": "單位換算或除法補零多寫了一個 0，算成 200 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上長度 ＝ 實際長度（公分） × 比例尺"
      ],
      "conceptCompare": "「1/35」代表圖上 1 公分 ＝ 實際 35 公分；千萬不能忘記把「公尺」先乘 100 變「公分」。",
      "examVariations": "若反過來已知「圖卡上的長頸龍高 15 公分」，實際高度就要算 15 × 35 ＝ 525 公分 ＝ 5.25 公尺。"
    },
    "check": {
      "expr": "7 * 100 * (1 / 35)",
      "expect": "20"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-18",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "兩量的和",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第6題",
    "batch": "段考真題",
    "category": "多量小數倍數加總",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "（延續安和國小三天兩夜畢業旅行故事）\n6. 第三天收拾完行李，大家前往麗寶樂園遊玩。小智和小組同學先直衝「搶救地心」，設施的俯衝和旋轉，讓他們尖叫聲不斷，沙啞失聲的他們，決定先買飲料喝。一杯冬瓜茶要 25 元，一杯可樂的價錢是冬瓜茶的 1.4 倍，一杯橘子汽水是冬瓜茶的 1.8 倍，他們各買一杯共要付多少元？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p4.png",
    "options": [
      {
        "key": "A",
        "text": "105 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "80 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "100 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "63 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "練習把同一基準量（冬瓜茶）的各個比較量倍率加起來（1 ＋ 1.4 ＋ 1.8），再一次求總和。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：冬瓜茶是基準量 1 倍，可樂是 1.4 倍，橘子汽水是 1.8 倍，三杯合起來一共是冬瓜茶的幾倍？"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1.4 ＋ 1.8 ＝ 4.2",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：用 1 倍的價錢（25 元）乘以總倍數 4.2："
        },
        {
          "type": "eq",
          "expr": "25 × 4.2 ＝ 105",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：各買一杯共要付 105 元。"
        }
      ],
      "insight": "也可以分開算再加起來驗算：冬瓜茶 25 元 ＋ 可樂 35 元 ＋ 橘子汽水 45 元 ＝ 105 元！",
      "distractorAnalysis": {
        "B": "只算了 25 × (1.4 ＋ 1.8) ＝ 80 元，忘記加上「冬瓜茶本身那 1 杯 25 元」！",
        "C": "小數加法或乘法粗心算錯成 100 元。",
        "D": "誤把兩個倍數拿去連乘 25 × 1.4 × 1.8 ＝ 63 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "總價錢 ＝ 基準量 × (1 ＋ 倍數一 ＋ 倍數二)"
      ],
      "conceptCompare": "「各買一杯」一定要把當作 1 份的冬瓜茶也算進去，不能只加 1.4 ＋ 1.8！",
      "examVariations": "若題目改問「橘子汽水比可樂貴幾元？」則算 25 × (1.8 − 1.4) ＝ 25 × 0.4 ＝ 10 元。"
    },
    "check": {
      "expr": "25 * (1 + 1.4 + 1.8)",
      "expect": "105"
    },
    "work": "sm"
  },
  {
    "id": "EX2-ANHE-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "secondaryUnitIds": [
      "U07"
    ],
    "section": "6-2",
    "sectionName": "圓周長、扇形周長與比例尺綜合",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第7題(1)~(3)",
    "batch": "段考真題",
    "category": "摩天輪生活情境題組",
    "level": 4,
    "difficulty": 3,
    "questionType": "group",
    "question": "（延續安和國小三天兩夜畢業旅行故事）\n7. 中午領隊要全班在入口處 subway 潛艇堡集合用餐時，安安看到遠方的摩天輪天空之夢 Sky Dream，好奇地拿起手機查詢相關資訊。麗寶樂園的摩天輪是全臺最大，整座摩天輪的高度有 384 公尺，每個車廂可載 8 人，運轉一圈需要 25 分鐘。",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p4.png",
    "work": "lg",
    "subQuestions": [
      {
        "subId": "EX2-ANHE-G04-1",
        "label": "(1)",
        "question": "摩天輪運轉一圈是 376.8 公尺，請問摩天輪的半徑大約是多少公尺？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "240 公尺",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          },
          {
            "key": "B",
            "text": "60 公尺",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "120 公尺",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          },
          {
            "key": "D",
            "text": "30 公尺",
            "trapCode": "U06_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "已知圓周長反推直徑，再除以 2 求出半徑，並演練除數為兩位小數 3.14 的直式計算。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：運轉一圈 376.8 公尺就是圓周長，先除以 3.14 算出直徑："
            },
            {
              "type": "longdiv",
              "dividend": "376.8",
              "divisor": "3.14",
              "mode": "exact",
              "note": "除數 3.14 小數點右移兩位變 314，被除數 376.8 右移兩位補 0 變 37680"
            },
            {
              "type": "eq",
              "expr": "376.8 ÷ 3.14 ＝ 120",
              "unit": "公尺（直徑）"
            },
            {
              "type": "text",
              "text": "第 2 步：題目問的是「半徑」，再把直徑除以 2："
            },
            {
              "type": "eq",
              "expr": "120 ÷ 2 ＝ 60",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：摩天輪的半徑大約是 60 公尺。"
            }
          ],
          "insight": "看到已知圓周長求「半徑」，一定有兩關：先 ÷ 3.14 變直徑，再 ÷ 2 變半徑！",
          "distractorAnalysis": {
            "C": "只算完 376.8 ÷ 3.14 ＝ 120 公尺就交卷，那是直徑不是半徑！",
            "D": "多除以 2 或直式移位算錯。",
            "A": "不該乘以 2 卻乘以 2（120 × 2 ＝ 240）。"
          }
        },
        "check": {
          "expr": "376.8 / 3.14 / 2",
          "expect": "60"
        }
      },
      {
        "subId": "EX2-ANHE-G04-2",
        "label": "(2)",
        "question": "摩天輪的任一車廂移動的任兩點和中心點的連線可以看成一個扇形。安安搭摩天輪後，從起點經過了 5 分鐘，請問這 5 分鐘他的車廂從起點到現在的位置與摩天輪的中心，形成的扇形周長大約是多少公尺？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "135.36 公尺",
            "trapCode": "U06_FORGET_TWO_RADII"
          },
          {
            "key": "B",
            "text": "315.36 公尺",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          },
          {
            "key": "C",
            "text": "195.36 公尺",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "75.36 公尺",
            "trapCode": "U06_ARC_AS_PERIMETER"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "將「經過時間 ÷ 轉一圈時間」轉化為扇形佔幾分之幾圓，再求出扇形弧長並加上兩條半徑得到周長。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：轉一圈要 25 分鐘，經過 5 分鐘表示轉了幾分之幾圈？"
            },
            {
              "type": "eq",
              "expr": "5 ÷ 25 ＝ 1/5",
              "unit": "圈"
            },
            {
              "type": "text",
              "text": "第 2 步：算出這 1/5 圈的弧長："
            },
            {
              "type": "eq",
              "expr": "376.8 × 1/5 ＝ 75.36",
              "unit": "公尺"
            },
            {
              "type": "text",
              "text": "第 3 步：扇形周長 ＝ 弧長 ＋ 兩條半徑（由第 (1) 題知半徑 60 公尺）："
            },
            {
              "type": "eq",
              "expr": "75.36 ＋ 60 × 2 ＝ 195.36",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：形成的扇形周長大約是 195.36 公尺。"
            }
          ],
          "insight": "時間比例就是圓弧比例：5 分鐘 ÷ 25 分鐘 ＝ 1/5 圓；算「周長」千萬記得加兩條半徑 120 公尺！",
          "distractorAnalysis": {
            "D": "只算了弧長 75.36 公尺，忘記加上與中心連線的兩條半徑！",
            "A": "只加了一條半徑（75.36 ＋ 60 ＝ 135.36 公尺）。",
            "B": "誤把直徑 120 公尺當成半徑加了兩次（75.36 ＋ 240 ＝ 315.36 公尺）。"
          }
        },
        "check": {
          "expr": "376.8 * (5 / 25) + 60 * 2",
          "expect": "195.36"
        }
      },
      {
        "subId": "EX2-ANHE-G04-3",
        "label": "(3)",
        "question": "最後，安安有跟摩天輪合照，照片中的摩天輪高度是 8 公分，請問比例尺是多少？（用比表示比例尺）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1：48",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "4800：1",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          },
          {
            "key": "C",
            "text": "1：4710",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "1：4800",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "整合前段資訊（整座摩天輪高度 384 公尺）與照片高度（8 公分），換算相同單位並化簡成最簡整數比。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：從題幹找出整座摩天輪的實際高度是 384 公尺，先換算成公分："
            },
            {
              "type": "eq",
              "expr": "384 × 100 ＝ 38400",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 2 步：比例尺 ＝ 圖上長度 ： 實際長度，再同除以 8 化簡："
            },
            {
              "type": "eq",
              "expr": "38400 ÷ 8 ＝ 4800"
            },
            {
              "type": "text",
              "text": "第 3 步：寫成前項為 1 的比就是 1：4800。"
            },
            {
              "type": "answer",
              "text": "答：比例尺是 1：4800。"
            }
          ],
          "insight": "寫比例尺前「公尺一定要先乘 100 變公分」，而且永遠是「圖上 ： 實際」，所以 1 在左邊！",
          "distractorAnalysis": {
            "A": "忘記把 384 公尺換算成公分，直接用 384 ÷ 8 ＝ 48 寫成 1：48。",
            "B": "把圖上跟實際的順序放反了，寫成放大比例尺 4800：1。",
            "C": "看錯題目數字，誤拿圓周長 376.8 公尺（37680 公分）去除以 8 得到 4710。"
          }
        },
        "check": {
          "expr": "384 * 100 / 8",
          "expect": "4800"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "半徑 ＝ 圓周長 ÷ 3.14 ÷ 2",
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2",
        "比例尺 ＝ 圖上長度（公分）： 實際長度（公分）"
      ],
      "conceptCompare": "摩天輪直徑 120 公尺，但架在高台上所以「整座高度」384 公尺！第 (1)(2) 題用圓周長，第 (3) 題問高度要用 384 公尺，不能用錯數字。",
      "examVariations": "常改問第 (2) 題：「經過 5 分鐘，車廂繞摩天輪中心旋轉了幾度？」即 360 × (5/25) ＝ 72 度。"
    }
  },
  {
    "id": "EX2-ANHE-19",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-3",
    "sectionName": "和差問題",
    "school": "新北市安和國小",
    "source": "安和國小 113上 第二次段考 五、應用題 第8題",
    "batch": "段考真題",
    "category": "年齡和差問題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "（延續安和國小三天兩夜畢業旅行故事）\n8. 回程的路上，領隊小無感性的發言，讓同學們依依不捨的在遊覽車上哭成一片；這時，同學小言詢問領隊到底幾歲了，為了迅速平復同學的心情，領隊小無出了一道題，讓同學恢復理性思考。他說：「我和小言的年齡加起來是 38 歲，我又比小言多 14 歲。」請問小無和小言各是幾歲？",
    "examPageImage": "images/exams/EXAM_MID2/anhe_p4.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "小言（較小數）",
          "units": 1,
          "role": "base"
        },
        {
          "label": "小無（多 14 歲）",
          "units": 2.1667,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "兩人年齡和 38 歲"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "小無 26 歲、小言 12 歲",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "小無 12 歲、小言 26 歲",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      },
      {
        "key": "C",
        "text": "小無 24 歲、小言 14 歲",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "D",
        "text": "小無 28 歲、小言 10 歲",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "運用和差問題基本解法「(和 ＋ 差) ÷ 2 ＝ 大數」、「(和 − 差) ÷ 2 ＝ 小數」求兩人年齡。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把小無比小言多的 14 歲先補給小言（或先扣掉），先用 (和 ＋ 差) ÷ 2 算較大的領隊小無年齡："
        },
        {
          "type": "bar",
          "ref": "figure"
        },
        {
          "type": "eq",
          "expr": "(38 ＋ 14) ÷ 2 ＝ 52 ÷ 2 ＝ 26",
          "unit": "歲（小無）"
        },
        {
          "type": "text",
          "text": "第 2 步：再用兩人年齡和減掉小無的 26 歲，得出小言的年齡："
        },
        {
          "type": "eq",
          "expr": "38 − 26 ＝ 12",
          "unit": "歲（小言）"
        },
        {
          "type": "answer",
          "text": "答：領隊小無 26 歲、小言 12 歲。"
        }
      ],
      "insight": "和差問題兩口訣：大數 ＝ (和 ＋ 差) ÷ 2、小數 ＝ (和 − 差) ÷ 2，算完記得檢查 26 ＋ 12 ＝ 38、26 − 12 ＝ 14！",
      "distractorAnalysis": {
        "B": "把算出的 26 歲和 12 歲人名寫反，小言是六年級同學不會比領隊大。",
        "C": "直接用 38 − 14 ＝ 24 就停住，忘記減掉差之後剩下的是「兩個小言」，必須再除以 2！",
        "D": "加減或除法粗心算錯（28 − 10 ＝ 18，不是多 14 歲）。"
      },
      "figureNote": "領隊小無比小言多出一小段 14 歲，把總和 38 減掉 14 就是兩段一樣長的小言年齡。"
    },
    "extensionStudy": {
      "coreFormulas": [
        "大數 ＝ (和 ＋ 差) ÷ 2",
        "小數 ＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "「小無比小言多 14 歲」是和差問題（加 14 或減 14）；若說「小無是小言的 2 倍」才是和倍問題（除以 1 ＋ 2）。",
      "examVariations": "若多加一問：「幾年後小無的年齡是小言的 2 倍？」年齡差固定 14 歲，當時小言 14 歲，所以是 14 − 12 ＝ 2 年後！"
    },
    "check": {
      "expr": "(38 + 14) / 2",
      "expect": "26",
      "extraChecks": [
        {
          "expr": "(38 - 14) / 2",
          "expect": "12"
        }
      ]
    },
    "work": "sm"
  },
  {
    "id": "EX2-JIANDE-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 一、想想看 第1題(1)~(5)",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "一、想想看（1）：正確的在（　）裡畫 ○，錯誤的打 ╳。",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-JIANDE-G01-1",
        "label": "(1)",
        "question": "直徑的長就是圓周長。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": null
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "分辨「直徑」與「圓周長」的定義差別。",
          "steps": [
            {
              "type": "text",
              "text": "直徑是通過圓心、兩端在圓周上的直線段長度；圓周長則是沿著圓周繞一圈的長度。"
            },
            {
              "type": "text",
              "text": "圓周長大約是直徑的 3.14 倍，兩者並不相等。"
            },
            {
              "type": "answer",
              "text": "答：錯誤（╳）。"
            }
          ],
          "insight": "圓周長大約 ＝ 直徑 × 3.14，直徑只是圓內最長的直線段，不是圓周長。",
          "distractorAnalysis": {
            "A": "把直線段的「直徑」和外圍一圈的「圓周長」混淆了。"
          }
        },
        "check": {
          "expr": "1",
          "expect": "1"
        }
      },
      {
        "subId": "EX2-JIANDE-G01-2",
        "label": "(2)",
        "question": "圓的直徑越長，圓周長就越長。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": "U06_PI_CONSTANT_MYTH"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "理解圓周長 ＝ 直徑 × 圓周率，圓周率固定時直徑越長圓周長越長。",
          "steps": [
            {
              "type": "text",
              "text": "圓周長大約等於直徑 × 3.14，因為圓周率固定不變，所以直徑越長，乘出來的圓周長就越長。"
            },
            {
              "type": "answer",
              "text": "答：正確（○）。"
            }
          ],
          "insight": "圓越大、直徑越長，外圍一圈的圓周長就越長。",
          "distractorAnalysis": {
            "B": "誤以為所有圓的周長都一樣，忽略圓周長會隨著直徑變長而等比例變長。"
          }
        },
        "check": {
          "expr": "1",
          "expect": "1"
        }
      },
      {
        "subId": "EX2-JIANDE-G01-3",
        "label": "(3)",
        "question": "圓越小，圓的直徑就越短。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "建立圓的大小與半徑、直徑長短之間的直覺連結。",
          "steps": [
            {
              "type": "text",
              "text": "圓的大小由半徑（或直徑）決定；圓越小，表示圓心到圓周的距離（半徑）越短，因此直徑也越短。"
            },
            {
              "type": "answer",
              "text": "答：正確（○）。"
            }
          ],
          "insight": "圓越小 → 半徑越短 → 直徑越短 → 圓周長也越短。",
          "distractorAnalysis": {
            "B": "對圓的大小與直徑的連動關係判斷相反。"
          }
        },
        "check": {
          "expr": "1",
          "expect": "1"
        }
      },
      {
        "subId": "EX2-JIANDE-G01-4",
        "label": "(4)",
        "question": "半徑 6 公分的圓形紙板，可以剛好放在邊長 6 公分的正方形紙上。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": null
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "測驗「半徑」與「直徑」的換算，以及正方形內最大圓的直徑等於正方形邊長。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：先算出這個圓形紙板的直徑："
            },
            {
              "type": "eq",
              "expr": "6 × 2 = 12",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 2 步：正方形紙的邊長只有 6 公分，無法放進直徑 12 公分的圓形紙板（會超出紙外）。要「直徑 6 公分」（半徑 3 公分）的圓才能剛好放下。"
            },
            {
              "type": "answer",
              "text": "答：錯誤（╳）。"
            }
          ],
          "insight": "正方形內能放下的最大圓，「直徑」才等於正方形邊長，不是半徑等於邊長！",
          "distractorAnalysis": {
            "A": "忘記把半徑 6 公分乘以 2 換算成直徑 12 公分，直接拿半徑 6 去比邊長 6。"
          }
        },
        "check": {
          "expr": "6 * 2",
          "expect": "12"
        }
      },
      {
        "subId": "EX2-JIANDE-G01-5",
        "label": "(5)",
        "question": "圓的周長和直徑有倍數關係。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": "U06_PI_CONSTANT_MYTH"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "理解圓周率就是「圓周長是直徑的幾倍」，兩者具有固定倍數關係。",
          "steps": [
            {
              "type": "text",
              "text": "任何一個圓的圓周長除以它的直徑，商都會固定是圓周率（約 3.14），也就是圓周長大約是直徑的 3.14 倍，因此兩者有倍數關係。"
            },
            {
              "type": "answer",
              "text": "答：正確（○）。"
            }
          ],
          "insight": "圓周長 ÷ 直徑 ＝ 圓周率（大約 3.14 倍），這就是最經典的倍數關係！",
          "distractorAnalysis": {
            "B": "忘記圓周率（約 3.14）代表的就是圓周長與直徑之間的固定倍數關係。"
          }
        },
        "check": {
          "expr": "1",
          "expect": "1"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 半徑 × 2",
        "圓周長 ＝ 直徑 × 圓周率（約 3.14）＝ 半徑 × 2 × 3.14"
      ],
      "conceptCompare": "正方形紙上剛好能剪出或放下的最大圓，「圓的直徑 ＝ 正方形邊長」；題目若給半徑，一定要先乘以 2 變成直徑再比較！",
      "examVariations": "常改考：「直徑 8 公分的圓可以放進邊長 8 公分的正方形裡嗎？」答案是 ○；若問「半徑 8 公分」放進「邊長 8 公分」則是 ╳。"
    }
  },
  {
    "id": "EX2-JIANDE-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與圓周率概念",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 一、想想看 第2題(1)~(3)（原卷PDF附圖遺失，依題意補全條件）",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "一、想想看（2）：看下圖，正確的在（　）裡畫 ○，錯誤的打 ╳。（註：原卷 PDF 轉檔時附圖遺失，依題意補全條件：已知甲圓半徑 15 公分、乙圓半徑 10 公分）",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "figureSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 150\" width=\"380\" height=\"150\"><rect width=\"380\" height=\"150\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><circle cx=\"105\" cy=\"75\" r=\"54\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><circle cx=\"105\" cy=\"75\" r=\"3\" fill=\"#1e40af\"/><line x1=\"105\" y1=\"75\" x2=\"159\" y2=\"75\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"4 2\"/><text x=\"105\" y=\"55\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#1e3a8a\">甲圓</text><text x=\"132\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1e40af\">半徑 15 公分</text><circle cx=\"275\" cy=\"75\" r=\"36\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><circle cx=\"275\" cy=\"75\" r=\"3\" fill=\"#92400e\"/><line x1=\"275\" y1=\"75\" x2=\"311\" y2=\"75\" stroke=\"#92400e\" stroke-width=\"2\" stroke-dasharray=\"4 2\"/><text x=\"275\" y=\"60\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#78350f\">乙圓</text><text x=\"290\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#92400e\">半徑 10 公分</text></svg>",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-JIANDE-G02-1",
        "label": "(1)",
        "question": "甲圓直徑是乙圓半徑的 3 倍。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "比較兩圓的直徑與半徑倍數關係。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：先算出甲圓的直徑："
            },
            {
              "type": "eq",
              "expr": "15 × 2 = 30",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 2 步：乙圓半徑是 10 公分，用甲圓直徑除以乙圓半徑："
            },
            {
              "type": "eq",
              "expr": "30 ÷ 10 = 3",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：正確（○）。"
            }
          ],
          "insight": "題目問的是「甲圓直徑」和「乙圓半徑」，看清楚一個是直徑、一個是半徑再相除！",
          "distractorAnalysis": {
            "B": "誤拿甲圓半徑 15 除以乙圓半徑 10，或誤拿甲圓直徑 30 除以乙圓直徑 20，以為不是 3 倍。"
          }
        },
        "check": {
          "expr": "15 * 2 / 10",
          "expect": "3"
        }
      },
      {
        "subId": "EX2-JIANDE-G02-2",
        "label": "(2)",
        "question": "甲圓的圓周率和乙圓的圓周率一樣。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": "U06_PI_CONSTANT_MYTH"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "破除「大圓的圓周率比小圓大」的常見迷思，確認圓周率為常數。",
          "steps": [
            {
              "type": "text",
              "text": "無論圓的半徑是 15 公分還是 10 公分，所有圓的圓周長 ÷ 直徑都等於同一個固定數值（圓周率大約 3.14）。"
            },
            {
              "type": "answer",
              "text": "答：正確（○）。"
            }
          ],
          "insight": "大圓小圓都一樣，圓周率永遠不變（約 3.14）！",
          "distractorAnalysis": {
            "B": "誤以為比較大的甲圓「圓周率」也會比較大，把圓周率跟圓周長搞混了。"
          }
        },
        "check": {
          "expr": "1",
          "expect": "1"
        }
      },
      {
        "subId": "EX2-JIANDE-G02-3",
        "label": "(3)",
        "question": "甲圓的圓周長大約是 30 × 3.14 公分。",
        "choiceStyle": "tf",
        "options": [
          {
            "key": "A",
            "text": "○（正確）",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "╳（錯誤）",
            "trapCode": "U06_DIAMETER_RADIUS_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "檢查是否記得圓周長是用「直徑 × 3.14」，而非半徑 × 3.14。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：甲圓半徑為 15 公分，直徑為 15 × 2 ＝ 30 公分。"
            },
            {
              "type": "text",
              "text": "第 2 步：圓周長 ＝ 直徑 × 圓周率，所以大約是 30 × 3.14 公分。"
            },
            {
              "type": "eq",
              "expr": "15 × 2 × 3.14 = 94.2",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：正確（○）。"
            }
          ],
          "insight": "半徑 15 → 直徑 30 → 圓周長大約是 30 × 3.14 公分！",
          "distractorAnalysis": {
            "B": "誤以為圓周長是半徑 15 × 3.14，忘記先將半徑乘以 2 換成直徑 30 公分。"
          }
        },
        "check": {
          "expr": "15 * 2",
          "expect": "30"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 直徑 × 3.14 ＝ 半徑 × 2 × 3.14",
        "所有圓的圓周率都相同（約 3.14），不隨圓大小改變"
      ],
      "conceptCompare": "大圓的「圓周長」比較長，但大圓和小圓的「圓周率」完全一樣！",
      "examVariations": "常改問「甲圓半徑是乙圓的 1.5 倍，甲圓周長是乙圓周長的幾倍？」答案也是 1.5 倍。"
    }
  },
  {
    "id": "EX2-JIANDE-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "線段比例尺與實際長度",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第1題(1)~(2)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "group",
    "question": "二、填空題 1. 下面是綺綺房間擺設的室內平面圖，看圖回答問題。（圖中線段比例尺從 0 到 120 公分共分為 2 格，圖上每 1 格長 1 公分、全長 2 公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_jiande_room_map.png",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-JIANDE-G03-1",
        "label": "(1)",
        "question": "平面圖上比例尺（0 到 120 公分，共 2 格長 2 公分）表示圖上 1 公分，代表實際長度（　）公分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "30 公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "60 公分",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "120 公分",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "D",
            "text": "240 公分",
            "trapCode": "U07_SCALE_MUL_DIV_SWAP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "讀懂線段比例尺的刻度：注意全長幾公分、共有幾格。",
          "steps": [
            {
              "type": "text",
              "text": "線段比例尺從 0 到 120 公分共有 2 格（圖上共 2 公分），代表圖上 2 公分 ＝ 實際 120 公分。"
            },
            {
              "type": "text",
              "text": "算出圖上 1 公分代表的實際長度："
            },
            {
              "type": "eq",
              "expr": "120 ÷ 2 = 60",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：表示圖上 1 公分代表實際長度 60 公分。"
            }
          ],
          "insight": "看線段比例尺不能只看最右邊的數字 120，要先數它佔了「幾格（幾公分）」再相除！",
          "distractorAnalysis": {
            "C": "沒有除以格數 2，直接把比例尺最右邊寫的 120 公分當成圖上 1 公分。",
            "D": "誤把 120 乘以 2 算成 240 公分。",
            "A": "多除以一次 2，誤算成 120 ÷ 4 ＝ 30 公分。"
          }
        },
        "check": {
          "expr": "120 / 2",
          "expect": "60"
        }
      },
      {
        "subId": "EX2-JIANDE-G03-2",
        "label": "(2)",
        "question": "如果平面圖中單人床的長約 3.5 公分。用比例尺算算看，單人床實際的長是多少公分？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "180 公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "105 公分",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "210 公分",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "420 公分",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "運用比例尺由圖上長度換算家具的實際長度。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：由第 (1) 題得知圖上 1 公分代表實際 60 公分。"
            },
            {
              "type": "text",
              "text": "第 2 步：單人床在圖上長 3.5 公分，實際長度為："
            },
            {
              "type": "eq",
              "expr": "60 × 3.5 = 210",
              "unit": "公分"
            },
            {
              "type": "answer",
              "text": "答：單人床實際的長是 210 公分。"
            }
          ],
          "insight": "實際長度 ＝ 圖上長度 × 圖上 1 公分代表的實際長度；210 公分（約 2.1 公尺）也符合真實單人床長度！",
          "distractorAnalysis": {
            "D": "把第 (1) 題誤認成 1 公分代表 120 公分，算成 120 × 3.5 ＝ 420 公分（一張單人床不可能長達 4.2 公尺）。",
            "A": "漏掉小數部分 0.5 公分，只算成 60 × 3 ＝ 180 公分。",
            "B": "誤用 30 × 3.5 ＝ 105 公分。"
          }
        },
        "check": {
          "expr": "60 * 3.5",
          "expect": "210"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "圖上 1 公分代表實際長度 ＝ 比例尺總標示長度 ÷ 總公分數",
        "實際長度 ＝ 圖上長度 × 比例尺倍數"
      ],
      "conceptCompare": "遇到線段比例尺，第一步一定先看「0 到終點」佔了幾公分（幾格），再除以格數，別被終點數字直接騙了！",
      "examVariations": "常接續問：「如果衣櫃實際長 120 公分，在平面圖上要畫幾公分？」算式為 120 ÷ 60 ＝ 2 公分。"
    }
  },
  {
    "id": "EX2-JIANDE-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的對應邊關係",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第2題(1)~(2)",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "二、填空題 2. 甲圖是乙圖的放大圖，看圖回答問題。",
    "stemImage": "images/exams/EXAM_MID2/crop_jiande_quad_ab.png",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-JIANDE-G04-1",
        "label": "(1)",
        "question": "甲圖和乙圖的對應邊長有同樣的倍數關係嗎？（　）。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "沒有（各組對應邊倍數不相同）",
            "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
          },
          {
            "key": "B",
            "text": "有（甲圖對應邊都是乙圖的 4 倍）",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "有（甲圖對應邊都是乙圖的 2 倍）",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "有（甲圖對應邊都是乙圖的 3 倍）",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "驗證放大圖與原圖之間，所有對應邊長必須成相同倍數放大。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：逐一檢查四組對應邊長的比值："
            },
            {
              "type": "eq",
              "expr": "12 ÷ 4 = 3",
              "unit": "倍"
            },
            {
              "type": "eq",
              "expr": "45 ÷ 15 = 3",
              "unit": "倍"
            },
            {
              "type": "eq",
              "expr": "54 ÷ 18 = 3",
              "unit": "倍"
            },
            {
              "type": "eq",
              "expr": "39 ÷ 13 = 3",
              "unit": "倍"
            },
            {
              "type": "text",
              "text": "第 2 步：四組對應邊長都是乙圖的 3 倍，倍數完全相同。"
            },
            {
              "type": "answer",
              "text": "答：有（甲圖對應邊都是乙圖的 3 倍）。"
            }
          ],
          "insight": "真正的放大圖／縮小圖，每一組對應邊的放大（或縮小）倍數都必須一模一樣！",
          "distractorAnalysis": {
            "A": "檢查對應邊時看錯邊（例如拿 54 去對 15），導致誤以為倍數不同。",
            "B": "看見乙圖最上面邊長是 4 公分，誤把 4 當成放大倍數。",
            "C": "計算倍數錯誤，把 3 倍誤算成 2 倍。"
          }
        },
        "check": {
          "expr": "12 / 4",
          "expect": "3",
          "extraChecks": [
            {
              "expr": "45 / 15",
              "expect": "3"
            },
            {
              "expr": "54 / 18",
              "expect": "3"
            },
            {
              "expr": "39 / 13",
              "expect": "3"
            }
          ]
        }
      },
      {
        "subId": "EX2-JIANDE-G04-2",
        "label": "(2)",
        "question": "乙圖是甲圖的（　）倍縮小圖。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1/3 倍",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "3 倍",
            "trapCode": "U07_RELATIVE_SCALE_ERR"
          },
          {
            "key": "C",
            "text": "1/2 倍",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "1/4 倍",
            "trapCode": "U07_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "理解「甲是乙的 3 倍放大圖」與「乙是甲的 1/3 倍縮小圖」互為倒數關係。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：題目問「乙圖是甲圖的幾倍」，所以甲圖是基準量（放分母）、乙圖是比較量（放分子）。"
            },
            {
              "type": "eq",
              "expr": "4 ÷ 12 = 1/3",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：乙圖是甲圖的 1/3 倍縮小圖。"
            }
          ],
          "insight": "誰是誰的幾倍，「的」前面是基準量放分母！乙 ÷ 甲 ＝ 4 ÷ 12 ＝ 1/3 倍。",
          "distractorAnalysis": {
            "B": "沒有分辨「甲是乙的幾倍」跟「乙是甲的幾倍」方向相反，直接填了 3 倍。",
            "C": "縮小倍數計算錯誤，誤填 1/2 倍。",
            "D": "看見乙圖上底為 4，誤寫成 1/4 倍。"
          }
        },
        "check": {
          "expr": "4 / 12",
          "expect": "1/3"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "放大倍數 ＝ 放大圖邊長 ÷ 原圖對應邊長",
        "若甲是乙的 3 倍放大圖，則乙是甲的 1/3 倍縮小圖（兩者互為倒數）"
      ],
      "conceptCompare": "「放大或縮小」只會改變邊長與周長，不會改變「對應角的大小」！所以甲圖和乙圖的對應角依然一樣大。",
      "examVariations": "常多考一小題：「若乙圖面積是 18 平方公分，甲圖面積是幾平方公分？」注意面積要乘 3 × 3 ＝ 9 倍，不是 3 倍！"
    }
  },
  {
    "id": "EX2-JIANDE-G05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題（年齡差不變）",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第3題(1)~(2)",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "question": "二、填空題 3. 姍姍今年 12 歲，剛好是弟弟的 2 倍。",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-JIANDE-G05-1",
        "label": "(1)",
        "question": "今年姍姍跟弟弟相差幾歲？（　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "12 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "6 歲",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "24 歲",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "D",
            "text": "10 歲",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "先由基準量關係求出弟弟今年年齡，再求兩人的年齡差。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：姍姍 12 歲剛好是弟弟的 2 倍，所以弟弟今年是："
            },
            {
              "type": "eq",
              "expr": "12 ÷ 2 = 6",
              "unit": "歲"
            },
            {
              "type": "text",
              "text": "第 2 步：算出兩人今年的年齡差："
            },
            {
              "type": "eq",
              "expr": "12 − 6 = 6",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：今年姍姍跟弟弟相差 6 歲。"
            }
          ],
          "insight": "「是弟弟的 2 倍」，表示 12 歲裡面有 2 個弟弟的歲數，所以要先除以 2！",
          "distractorAnalysis": {
            "C": "方向弄反，誤把 12 × 2 ＝ 24 當成弟弟的歲數（弟弟比姊姊還老不合理）。",
            "D": "誤把「2 倍」看成「多 2 歲」，算成 12 − 2 ＝ 10 歲。",
            "A": "誤以為兩人相差 12 歲，直接照抄題目數字 12。"
          }
        },
        "check": {
          "expr": "12 - 12 / 2",
          "expect": "6"
        }
      },
      {
        "subId": "EX2-JIANDE-G05-2",
        "label": "(2)",
        "question": "姍姍 30 歲時，弟弟幾歲？（　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "36 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "18 歲",
            "trapCode": "U08_AGE_NOW_OFFSET_MISS"
          },
          {
            "key": "C",
            "text": "24 歲",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "15 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "掌握年齡問題鐵律：無論經過幾年，兩人的「年齡差」永遠不變。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：由第 (1) 題得知姍姍永遠比弟弟大 6 歲。"
            },
            {
              "type": "text",
              "text": "第 2 步：當姍姍長大到 30 歲時，弟弟的歲數為："
            },
            {
              "type": "eq",
              "expr": "30 − 6 = 24",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：姍姍 30 歲時，弟弟 24 歲。"
            }
          ],
          "insight": "時間一直走，兩人是一起長大的！所以「年齡差 6 歲」永遠不會變成「永遠 2 倍」。",
          "distractorAnalysis": {
            "D": "掉進最大陷阱！誤以為姊姊永遠是弟弟的 2 倍，算成 30 ÷ 2 ＝ 15 歲。",
            "A": "加減方向弄反，算成 30 ＋ 6 ＝ 36 歲（弟弟比姊姊大了）。",
            "B": "只算了姍姍從 12 歲長大到 30 歲經過了 30 − 12 ＝ 18 年，忘了把 18 加回弟弟今年的 6 歲。"
          }
        },
        "check": {
          "expr": "30 - (12 - 12 / 2)",
          "expect": "24"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 大年齡 − 小年齡（不管過幾年都不變）",
        "幾年後弟弟年齡 ＝ 幾年後姊姊年齡 − 年齡差"
      ],
      "conceptCompare": "今年的「幾倍關係」會隨著長大而改變（12÷6＝2 倍 → 30÷24＝1.25 倍），唯獨「年齡差」永遠不變！",
      "examVariations": "常改問：「再過幾年，姍姍跟弟弟的年齡和會變成 36 歲？」注意每過 1 年，兩人年齡和會增加 2 歲喔！"
    }
  },
  {
    "id": "EX2-JIANDE-G06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "認識基準量與比較量",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第4題(1)~(3)",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 1,
    "difficulty": 1,
    "questionType": "group",
    "question": "二、填空題 4. 「7 是 9 的幾倍？」請依序判斷基準量、比較量與倍數：",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "work": "sm",
    "subQuestions": [
      {
        "subId": "EX2-JIANDE-G06-1",
        "label": "(1)",
        "question": "（　）是基準量。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "7",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "7/9",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "C",
            "text": "9/7",
            "trapCode": "U05_RECIPROCAL_MISS"
          },
          {
            "key": "D",
            "text": "9",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "透過關鍵字「的幾倍」找出誰是基準量。",
          "steps": [
            {
              "type": "text",
              "text": "在「比較量 是 基準量 的幾倍」這句話中，「是」前面的 7 是比較量，「的」前面的 9 是用來當標準的基準量。"
            },
            {
              "type": "answer",
              "text": "答：9 是基準量。"
            }
          ],
          "insight": "秒殺口訣：「的」前面找基準，「是」前面找比較！",
          "distractorAnalysis": {
            "A": "把比較量 7 和基準量 9 弄反了。",
            "B": "把算出來的「倍數（比值）」7/9 當成了基準量。",
            "C": "把反過來算的倍數 9/7 當成了基準量。"
          }
        },
        "check": {
          "expr": "9",
          "expect": "9"
        }
      },
      {
        "subId": "EX2-JIANDE-G06-2",
        "label": "(2)",
        "question": "（　）是比較量。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "7",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "9",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "7/9",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "2",
            "trapCode": "U05_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "透過關鍵字「是」分辨比較量與基準量。",
          "steps": [
            {
              "type": "text",
              "text": "「7 是 9 的幾倍？」裡，被拿來跟 9 比較的對象是 7，所以 7 是比較量。"
            },
            {
              "type": "answer",
              "text": "答：7 是比較量。"
            }
          ],
          "insight": "基準量（9）當標準放分母，比較量（7）放分子。",
          "distractorAnalysis": {
            "B": "把基準量 9 誤認為比較量。",
            "C": "把倍數（比值）7/9 誤認為比較量。",
            "D": "誤把兩數相減 9 − 7 ＝ 2 當成比較量。"
          }
        },
        "check": {
          "expr": "7",
          "expect": "7"
        }
      },
      {
        "subId": "EX2-JIANDE-G06-3",
        "label": "(3)",
        "question": "7 是 9 的（　）倍。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "2/9 倍",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "7/9 倍",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "9/7 倍",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "1 2/7 倍",
            "trapCode": "U05_RECIPROCAL_MISS"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "熟練「倍數（比值） ＝ 比較量 ÷ 基準量」。",
          "steps": [
            {
              "type": "text",
              "text": "用比較量（7）除以基準量（9）："
            },
            {
              "type": "eq",
              "expr": "7 ÷ 9 = 7/9",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：7 是 9 的 7/9 倍。"
            }
          ],
          "insight": "記住公式：倍數 ＝ 比較量 ÷ 基準量 ＝ 7 ÷ 9 ＝ 7/9（前面 ÷ 後面）。",
          "distractorAnalysis": {
            "C": "基準量與比較量放反，算成 9 ÷ 7 ＝ 9/7。",
            "D": "把 9 ÷ 7 寫成帶分數 1 2/7，同樣是除數被除數顛倒。",
            "A": "誤用兩數的差（9 − 7 ＝ 2）除以 9。"
          }
        },
        "check": {
          "expr": "7 / 9",
          "expect": "7/9"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "比較量 ÷ 基準量 ＝ 倍數（比值）",
        "句型口訣：「甲 是 乙 的幾倍？」→ 甲是比較量，乙是基準量，算式 ＝ 甲 ÷ 乙"
      ],
      "conceptCompare": "「7 是 9 的幾倍」答案是 7/9 倍；如果題目問「9 是 7 的幾倍」，答案就會反過來變成 9/7（即 1 2/7）倍！",
      "examVariations": "常改寫成應用題：「哥哥有 70 元，弟弟有 90 元，哥哥的錢是弟弟的幾倍？」一樣是 70 ÷ 90 ＝ 7/9 倍。"
    }
  },
  {
    "id": "EX2-JIANDE-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比、比值轉換",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第5題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "question": "二、填空題 5. 「甲是乙的 4.9 倍」，用比表示甲和乙的關係是（　），比值是（　）。",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "options": [
      {
        "key": "A",
        "text": "49：10（即 4.9：1），比值是 10/49",
        "trapCode": "U05_RECIPROCAL_MISS"
      },
      {
        "key": "B",
        "text": "4.9：10，比值是 0.49",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "49：10（即 4.9：1），比值是 4.9",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "10：49（即 1：4.9），比值是 10/49",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "將兩量的倍數關係轉換為「比（甲：乙）」與「比值」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「甲是乙的 4.9 倍」中，乙是基準量（設為 1），甲是比較量（4.9），因此甲：乙 ＝ 4.9：1。"
        },
        {
          "type": "text",
          "text": "第 2 步：前後項同乘以 10 化成最簡整數比："
        },
        {
          "type": "eq",
          "expr": "4.9 × 10 = 49",
          "unit": ""
        },
        {
          "type": "eq",
          "expr": "1 × 10 = 10",
          "unit": ""
        },
        {
          "type": "text",
          "text": "所以最簡整數比為 49：10。"
        },
        {
          "type": "text",
          "text": "第 3 步：比值就是前項除以後項（也就是倍數本身）：4.9 ÷ 1 ＝ 4.9（或 49 ÷ 10 ＝ 49/10 ＝ 4.9）。"
        },
        {
          "type": "answer",
          "text": "答：用比表示是 49：10（即 4.9：1），比值是 4.9。"
        }
      ],
      "insight": "「甲是乙的 幾 倍」，那個「幾」本身就是甲：乙 的比值！設乙＝1、甲＝4.9 就能秒殺寫出 4.9：1 ＝ 49：10。",
      "distractorAnalysis": {
        "D": "把「甲：乙」前後寫反成「乙：甲」（10：49），導致比值也跟著倒數。",
        "A": "比寫對了，但算比值時誤把後項 10 除以前項 49（分子分母放反）。",
        "B": "把 4.9 乘以 10 之前忘了把基準量 1 也一起乘以 10，誤寫成 4.9：10。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲是乙的 幾 倍 → 設乙＝1、甲＝幾 → 甲：乙 ＝ 幾：1",
        "比值 ＝ 前項 ÷ 後項（等於倍數）"
      ],
      "conceptCompare": "「比」有兩項（中間用全形冒號「：」連接，如 49：10）；「比值」是一個數（前項 ÷ 後項，如 4.9 或 4 9/10）。",
      "examVariations": "若改為「乙是甲的 4.9 倍」，問甲：乙，就要反過來寫成 1：4.9 ＝ 10：49，比值是 10/49。"
    },
    "check": {
      "expr": "4.9",
      "expect": "4.9"
    },
    "work": "sm"
  },
  {
    "id": "EX2-JIANDE-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與母子和應用",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第6題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "question": "二、填空題 6. 根據教育部推動的書包重量檢測標準，書包重量不能超過學童體重的 12.5%。明明的體重為 40 公斤，他背的書包重量是體重的 15%，明明背著書包去秤重，此時體重機會顯示（　）公斤，他的書包重量和教育部規定的標準重量相差（　）公斤。",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "options": [
      {
        "key": "A",
        "text": "6 公斤；相差 1 公斤",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "45 公斤；相差 1 公斤",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "C",
        "text": "46 公斤；相差 2.5 公斤",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "46 公斤；相差 1 公斤",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "綜合考驗「母子和（體重 ＋ 書包重）」與「母子差（兩百分率之差 × 基準量）」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：明明背著書包去秤重，體重機顯示「明明體重 ＋ 書包重」（也就是體重的 1 ＋ 15% ＝ 115%）："
        },
        {
          "type": "eq",
          "expr": "40 × 0.15 = 6",
          "unit": "公斤（書包重）"
        },
        {
          "type": "eq",
          "expr": "40 + 6 = 46",
          "unit": "公斤（體重機顯示）"
        },
        {
          "type": "text",
          "text": "第 2 步：算出教育部規定的標準重量上限（體重的 12.5%）："
        },
        {
          "type": "eq",
          "expr": "40 × 0.125 = 5",
          "unit": "公斤"
        },
        {
          "type": "text",
          "text": "第 3 步：算出實際書包重量與標準重量的差距："
        },
        {
          "type": "eq",
          "expr": "6 − 5 = 1",
          "unit": "公斤"
        },
        {
          "type": "answer",
          "text": "答：體重機會顯示 46 公斤；相差 1 公斤。"
        }
      ],
      "insight": "相差重量也能用母子差秒算：40 × (15% − 12.5%) ＝ 40 × 2.5% ＝ 1 公斤！",
      "distractorAnalysis": {
        "A": "第一格只算出了書包重 6 公斤，忘記加上明明自己的體重 40 公斤（他是背著書包站上體重機）。",
        "B": "第一格誤拿標準書包重 5 公斤加上體重 40 公斤，變成 45 公斤。",
        "C": "把百分率相差 15% − 12.5% ＝ 2.5% 直接當成 2.5 公斤，忘記乘以基準量 40 公斤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "母子和（人 ＋ 書包）＝ 體重 × (1 ＋ 書包比例)",
        "兩量差 ＝ 基準量 × (比例一 − 比例二)"
      ],
      "conceptCompare": "百分比只是「佔體重的幾分之幾」，要得到真正的「公斤數」，一定要拿「百分比 × 基準量（體重）」！",
      "examVariations": "常改問：「明明最多只能裝多少公斤的書？」即 40 × 12.5% ＝ 5 公斤；或問「現在已經超重幾公斤？」答案一樣是 1 公斤。"
    },
    "check": {
      "expr": "40 + 40 * 0.15",
      "expect": "46",
      "extraChecks": [
        {
          "expr": "40 * 0.15 - 40 * 0.125",
          "expect": "1"
        }
      ]
    },
    "work": "md"
  },
  {
    "id": "EX2-JIANDE-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "已知母子和反求基準量",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第7題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "question": "二、填空題 7. 甲、乙兩數，甲數是乙數的 5 倍，如果甲、乙兩數的和是 360，甲數是（　），乙數是（　）。",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "乙數（1倍）",
          "units": 1
        },
        {
          "label": "甲數（5倍）",
          "units": 5
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "兩數和 ＝ 360"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "甲數是 300，乙數是 60",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "甲數是 288，乙數是 72",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "C",
        "text": "甲數是 60，乙數是 300",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "D",
        "text": "甲數是 360，乙數是 72",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "練習「母子和 ÷ (1 ＋ 倍數) ＝ 基準量」的經典圖解法。",
      "steps": [
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 1 步：乙數是基準量（看成 1 份），甲數是乙數的 5 倍（5 份），兩數合起來共 1 ＋ 5 ＝ 6 份。"
        },
        {
          "type": "text",
          "text": "第 2 步：先用總和除以總份數，算出 1 份的「乙數」："
        },
        {
          "type": "eq",
          "expr": "360 ÷ (1 + 5) = 60",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 3 步：再算出 5 份的「甲數」："
        },
        {
          "type": "eq",
          "expr": "60 × 5 = 300",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：甲數是 300，乙數是 60。"
        }
      ],
      "insight": "看到兩數的和，就要把基準量自己本身那「1 倍」也加進去，共 1 ＋ 5 ＝ 6 倍！",
      "figureNote": "線段圖中，乙數佔 1 格、甲數佔 5 格，合起來共 6 格等於 360，所以 1 格（乙數）就是 360 ÷ 6 ＝ 60。",
      "distractorAnalysis": {
        "B": "忘記把基準量乙數自己的「1 倍」加進去，直接算成 360 ÷ 5 ＝ 72（這會變成甲＋乙＝360＋72＝432，錯了）。",
        "C": "把甲數和乙數的值寫顛倒（甲是乙的 5 倍，甲應該比較大才對）。",
        "D": "直接把 360 當成甲數，再除以 5 得到 72。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩數和 ÷ (1 ＋ 倍數)",
        "比較量 ＝ 基準量 × 倍數（或 兩數和 − 基準量）"
      ],
      "conceptCompare": "「兩數和」要用 1 ＋ 倍數 去當除數；若題目改給「兩數差」，就要用 倍數 − 1 去當除數！",
      "examVariations": "若改為「甲、乙兩數的差是 360」，則乙數 ＝ 360 ÷ (5 − 1) ＝ 90，甲數 ＝ 450。"
    },
    "check": {
      "expr": "360 / (1 + 5) * 5",
      "expect": "300",
      "extraChecks": [
        {
          "expr": "360 / (1 + 5)",
          "expect": "60"
        }
      ]
    },
    "work": "sm"
  },
  {
    "id": "EX2-JIANDE-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖的性質",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第8題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "question": "二、填空題 8. 甲是一個正三角形，乙是甲的 2 倍放大圖，所以乙是（　）形。",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "options": [
      {
        "key": "A",
        "text": "鈍角三角形",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "B",
        "text": "正三角形",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "正六邊形",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "D",
        "text": "等腰直角三角形",
        "trapCode": "U07_ANGLE_SCALED"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "理解放大圖與縮小圖的形狀、角度不變性。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：放大圖會將原本的每一條邊長同時放大 2 倍，原來 3 條一樣長的邊，放大後依然 3 條一樣長。"
        },
        {
          "type": "text",
          "text": "第 2 步：放大後對應角完全不變，三個內角依然都是 60 度，所以乙還是正三角形。"
        },
        {
          "type": "answer",
          "text": "答：乙是正三角形。"
        }
      ],
      "insight": "圖形放大或縮小後，邊數不會變、形狀不會變、角度更不會跟著乘以 2 倍！",
      "distractorAnalysis": {
        "C": "誤以為 2 倍放大圖會把「三角形」變成邊數加倍的「六邊形」。",
        "D": "誤以為放大會改變內角（例如 60 度變成 90 度或 45 度）。",
        "A": "誤以為每個 60 度角放大 2 倍會變成 120 度的鈍角三角形。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大／縮小圖三大不變：形狀不變、邊數不變、對應角度數不變"
      ],
      "conceptCompare": "唯一會變的是「邊長（× 倍數）」、「周長（× 倍數）」和「面積（× 倍數 × 倍數）」，「角度」永遠不變！",
      "examVariations": "常改問：「正三角形甲的每個內角是 60 度，乙是甲的 3 倍放大圖，乙的每個內角是幾度？」答案仍然是 60 度！"
    },
    "check": {
      "expr": "60",
      "expect": "60"
    },
    "work": "sm"
  },
  {
    "id": "EX2-JIANDE-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "母子和（基準量增加幾倍）",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 二、填空題 第9題（原卷PDF漏印分數圖示，補齊為增加 1/4 倍）",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "question": "二、填空題 9. 奶茶原包裝的容量是 360 毫升，改包裝後增加 1/4 倍，改包裝後是（　）毫升。（註：原卷 PDF 漏印分數圖示，依課本常見題補齊為「增加 1/4 倍」，原卷單位 cc 已統一為毫升）",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p1.png",
    "options": [
      {
        "key": "A",
        "text": "270 毫升",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "B",
        "text": "360 1/4 毫升",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "450 毫升",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "90 毫升",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "區分「增加 1/4 倍」與「變成 1/4 倍」，練習基準量 × (1 ＋ 增加比例)。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「增加 1/4 倍」表示以原包裝 360 毫升為基準量（1 倍），再多出原本的 1/4 倍："
        },
        {
          "type": "eq",
          "expr": "360 × 1/4 = 90",
          "unit": "毫升（增加的容量）"
        },
        {
          "type": "text",
          "text": "第 2 步：把原容量加上增加的容量（即 360 × (1 ＋ 1/4)）："
        },
        {
          "type": "eq",
          "expr": "360 + 90 = 450",
          "unit": "毫升"
        },
        {
          "type": "answer",
          "text": "答：改包裝後是 450 毫升。"
        }
      ],
      "insight": "看到「增加 1/4 倍」，就要變成原本的 (1 ＋ 1/4) ＝ 1 1/4 倍，改包裝後容量一定比 360 毫升多！",
      "distractorAnalysis": {
        "D": "只算出了「增加的 90 毫升」，忘記加回原包裝的 360 毫升。",
        "A": "看錯加減方向，把「增加 1/4 倍」誤算成「減少 1/4 倍」（360 − 90 ＝ 270）。",
        "B": "把「增加 1/4 倍」誤當成直接「加 1/4 毫升」。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "增加後的新量 ＝ 原量 × (1 ＋ 增加的倍數)",
        "減少後的新量 ＝ 原量 × (1 − 減少的倍數)"
      ],
      "conceptCompare": "「變成原來的 1/4 倍」是縮小成 90 毫升；「比原來增加 1/4 倍」是變成原來的 1 ＋ 1/4 倍 ＝ 450 毫升！",
      "examVariations": "若改寫成「加量不加價，多送 25%」，因為 25% ＝ 1/4，答案一樣是 360 × (1 ＋ 0.25) ＝ 450 毫升。"
    },
    "check": {
      "expr": "360 * (1 + 1/4)",
      "expect": "450"
    },
    "work": "sm"
  },
  {
    "id": "EX2-JIANDE-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與多量總和應用",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 五、寫出算式做做看 第1題（原卷PDF漏印分數圖示，補齊為 1 1/3 倍與 2/3 倍）",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "question": "五、寫出算式做做看 1. 一束玫瑰花要 2100 元，一束紫羅蘭的價錢是玫瑰花的 1 1/3 倍，一束百合花的價錢是玫瑰花的 2/3 倍，三種花束各買一束共要付多少元？（註：原卷 PDF 轉檔時兩處分數圖示漏印，依課本同型題補齊為「1 1/3 倍」與「2/3 倍」）",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p2.png",
    "options": [
      {
        "key": "A",
        "text": "4200 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "4900 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "3500 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "6300 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "練習以同一基準量（玫瑰花）整合多個比較量的總和計算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以玫瑰花價錢（2100 元）為基準量 1，紫羅蘭是 1 1/3 倍，百合花是 2/3 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：先把三種花合起來佔玫瑰花的總倍數算出來（也可以分開算再相加）："
        },
        {
          "type": "eq",
          "expr": "1 + 1 1/3 + 2/3 = 3",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 3 步：算出總共要付的錢："
        },
        {
          "type": "eq",
          "expr": "2100 × 3 = 6300",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：三種花束各買一束共要付 6300 元。"
        }
      ],
      "insight": "分別算也可以：紫羅蘭 2800 元 ＋ 百合花 1400 元 ＋ 玫瑰花 2100 元 ＝ 6300 元；但先加倍數 1 ＋ 1 1/3 ＋ 2/3 ＝ 3 倍，一步就秒殺！",
      "distractorAnalysis": {
        "A": "算出紫羅蘭 2800 元與百合花 1400 元後相加（2800 ＋ 1400 ＝ 4200 元），忘記把「玫瑰花」自己的 2100 元也算進去！",
        "B": "只算了玫瑰花加上紫羅蘭（2100 ＋ 2800 ＝ 4900 元），漏加了百合花。",
        "C": "只算了玫瑰花加上百合花（2100 ＋ 1400 ＝ 3500 元），漏加了紫羅蘭。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "總價錢 ＝ 基準量價錢 × (1 ＋ 倍數甲 ＋ 倍數乙)"
      ],
      "conceptCompare": "三種花都跟「玫瑰花」比，表示基準量完全相同，所以可以直接把「倍數」先加起來再乘 2100 元，算得又快又不容易錯！",
      "examVariations": "若題目問「買一束紫羅蘭比一束百合花貴幾元？」，就直接算 2100 × (1 1/3 − 2/3) ＝ 2100 × 2/3 ＝ 1400 元。"
    },
    "check": {
      "expr": "2100 * (1 + (1 + 1/3) + 2/3)",
      "expect": "6300"
    },
    "work": "md"
  },
  {
    "id": "EX2-JIANDE-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "成數與百分率兩量差",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 五、寫出算式做做看 第2題",
    "batch": "段考真題",
    "category": "基準量與比較量",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "question": "五、寫出算式做做看 2. 六年十三班數學測驗通過率是九成，六年十三班全班有 30 人，通過測驗的學生比沒通過測驗的學生多幾人？",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p2.png",
    "options": [
      {
        "key": "A",
        "text": "24 人",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "27 人",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "3 人",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "D",
        "text": "21 人",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "理解「九成 ＝ 90% ＝ 0.9」，並分辨「通過人數」與「通過比沒通過多幾人」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：「九成」就是 90%（0.9）。先算出通過測驗的人數："
        },
        {
          "type": "eq",
          "expr": "30 × 0.9 = 27",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "第 2 步：算出沒通過測驗的人數："
        },
        {
          "type": "eq",
          "expr": "30 − 27 = 3",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "第 3 步：求出「通過」比「沒通過」多幾人："
        },
        {
          "type": "eq",
          "expr": "27 − 3 = 24",
          "unit": "人"
        },
        {
          "type": "answer",
          "text": "答：通過測驗的學生比沒通過測驗的學生多 24 人。"
        }
      ],
      "insight": "也可以直接用比率相減：通過佔 0.9、沒通過佔 0.1，相差 0.9 − 0.1 ＝ 0.8，所以 30 × 0.8 ＝ 24 人！",
      "distractorAnalysis": {
        "B": "只算到通過測驗的 27 人就直接作答，忘記再減去沒通過的 3 人。",
        "C": "只算了沒通過測驗的 3 人（1 − 0.9 ＝ 0.1，30 × 0.1 ＝ 3 人），答非所問。",
        "D": "把九成誤以為少算 10% 後直接 30 − 9 ＝ 21 人。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "九成 ＝ 90% ＝ 0.9",
        "兩組人數差 ＝ 全班人數 × (通過率 − 未通過率)"
      ],
      "conceptCompare": "「成」代表十分之幾：一成 ＝ 10%，九成 ＝ 90%，九五折才是 95% 喔！",
      "examVariations": "常改考：「全班 30 人中，有 3 人沒通過，請問通過率是幾成？」算式：(30 − 3) ÷ 30 ＝ 0.9 ＝ 九成。"
    },
    "check": {
      "expr": "30 * 0.9 - 30 * (1 - 0.9)",
      "expect": "24"
    },
    "work": "md"
  },
  {
    "id": "EX2-JIANDE-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長生活應用與單位換算",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 五、寫出算式做做看 第3題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "question": "五、寫出算式做做看 3. 腳踏車輪胎的半徑是 37.5 公分，琳琳從學校騎腳踏車到外公家，輪胎共轉了 200 圈，學校到外公家的路線長大約是多少公尺？",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p2.png",
    "options": [
      {
        "key": "A",
        "text": "47.1 公尺",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "471 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "235.5 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "47100 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "結合「輪胎轉 1 圈 ＝ 圓周長」、「半徑換直徑」與「公分換公尺」三大考點。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：輪胎半徑是 37.5 公分，先算出直徑，再算輪胎轉 1 圈的圓周長："
        },
        {
          "type": "eq",
          "expr": "37.5 × 2 = 75",
          "unit": "公分（直徑）"
        },
        {
          "type": "eq",
          "expr": "75 × 3.14 = 235.5",
          "unit": "公分（轉 1 圈）"
        },
        {
          "type": "text",
          "text": "第 2 步：輪胎共轉了 200 圈，算出總長度（公分）："
        },
        {
          "type": "eq",
          "expr": "235.5 × 200 = 47100",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：題目最後問「多少公尺」，1 公尺 ＝ 100 公分，記得除以 100："
        },
        {
          "type": "eq",
          "expr": "47100 ÷ 100 = 471",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：學校到外公家的路線長大約是 471 公尺。"
        }
      ],
      "insight": "輪胎轉 1 圈走過的距離 ＝ 輪胎圓周長！看到半徑 37.5 先乘 2 變 75，最後公分除以 100 變公尺。",
      "distractorAnalysis": {
        "C": "忘記把半徑 37.5 乘以 2 變成直徑 75，直接算成 37.5 × 3.14 × 200 ÷ 100 ＝ 235.5 公尺。",
        "D": "忘記把「公分」除以 100 換算成「公尺」，直接把 47100 當作公尺。",
        "A": "公分換公尺時小數點多左移了一位（誤除以 1000），算成 47.1 公尺。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "前進總距離 ＝ 輪胎圓周長 × 轉動圈數",
        "1 公尺 ＝ 100 公分"
      ],
      "conceptCompare": "題目給「半徑」就要先乘以 2；給「公分」最後問「公尺」一定要除以 100！",
      "examVariations": "常反過來考：「路線長 471 公尺，輪胎直徑 75 公分，輪胎共轉幾圈？」算式：47100 ÷ (75 × 3.14) ＝ 200 圈。"
    },
    "check": {
      "expr": "37.5 * 2 * 3.14 * 200 / 100",
      "expect": "471"
    },
    "work": "lg"
  },
  {
    "id": "EX2-JIANDE-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "由圓周長反求直徑",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 五、寫出算式做做看 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "question": "五、寫出算式做做看 4. 小芬拿一條長 180 公分的緞帶裝飾一個圓柱型禮盒，繞禮盒一圈後緞帶還剩 23 公分，這個圓柱禮盒底面的直徑大約是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p2.png",
    "options": [
      {
        "key": "A",
        "text": "57.3 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "100 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "50 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "25 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "先扣掉剩下的緞帶長度得出圓周長，再用「圓周長 ÷ 3.14」反求直徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出繞禮盒一圈（底面圓周長）實際用掉的緞帶長度："
        },
        {
          "type": "eq",
          "expr": "180 − 23 = 157",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：因為圓周長 ＝ 直徑 × 3.14，所以直徑 ＝ 圓周長 ÷ 3.14："
        },
        {
          "type": "eq",
          "expr": "157 ÷ 3.14 = 50",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "157",
          "divisor": "3.14",
          "note": "計算 157 ÷ 3.14 時，除數 3.14 的小數點向右移 2 位變成 314，被除數 157 也要補 2 個 0 變成 15700，再算 15700 ÷ 314 ＝ 50。"
        },
        {
          "type": "answer",
          "text": "答：這個圓柱禮盒底面的直徑大約是 50 公分。"
        }
      ],
      "insight": "記住黃金算式：157 ÷ 3.14 ＝ 50，62.8 ÷ 3.14 ＝ 20，31.4 ÷ 3.14 ＝ 10！先減掉剩下的 23 公分得出 157，就一眼看出答案 50 了！",
      "distractorAnalysis": {
        "D": "算出直徑 50 公分後，又多除以一次 2，算出了「半徑」25 公分（題目問的是直徑）。",
        "A": "忘記先減去剩下的 23 公分，直接拿整條 180 公分除以 3.14（約 57.3 公分）。",
        "B": "把直徑 50 公分當成半徑，再多乘以 2 變成 100 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓柱底面圓周長 ＝ 緞帶總長 − 剩下長度",
        "直徑 ＝ 圓周長 ÷ 3.14"
      ],
      "conceptCompare": "「圓周長 ÷ 3.14」算出的是「直徑」，不是半徑！如果題目改問半徑，最後才需要再除以 2。",
      "examVariations": "若題目改說「繞兩圈後還剩 23 公分」，那底面圓周長就要變成 (180 − 23) ÷ 2 ＝ 78.5 公分，直徑為 78.5 ÷ 3.14 ＝ 25 公分。"
    },
    "check": {
      "expr": "(180 - 23) / 3.14",
      "expect": "50"
    },
    "work": "lg"
  },
  {
    "id": "EX2-JIANDE-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "移多補少問題",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 五、寫出算式做做看 第5題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "question": "五、寫出算式做做看 5. 文文有 51 顆彈珠，吉吉有 97 顆彈珠，吉吉要給文文幾顆彈珠，兩人的彈珠就會一樣多？",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p2.png",
    "options": [
      {
        "key": "A",
        "text": "46 顆",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "B",
        "text": "74 顆",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "24 顆",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "23 顆",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "掌握「移多補少」核心概念：給出相差量的一半，兩人就會一樣多。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出吉吉比文文多幾顆彈珠："
        },
        {
          "type": "eq",
          "expr": "97 − 51 = 46",
          "unit": "顆"
        },
        {
          "type": "text",
          "text": "第 2 步：把多出來的 46 顆平分成兩份，吉吉給文文其中一半，兩人就一樣多了："
        },
        {
          "type": "eq",
          "expr": "46 ÷ 2 = 23",
          "unit": "顆"
        },
        {
          "type": "text",
          "text": "第 3 步：驗算：97 − 23 ＝ 74 顆，51 ＋ 23 ＝ 74 顆，兩人一樣多！"
        },
        {
          "type": "answer",
          "text": "答：吉吉要給文文 23 顆彈珠。"
        }
      ],
      "insight": "移多補少口訣：多出來的先除以 2！因為你減 1 顆、我加 1 顆，差距一次會縮小 2 顆！",
      "distractorAnalysis": {
        "A": "算出兩人相差 46 顆後忘記除以 2，如果給 46 顆，兩人就會變成吉吉 51 顆、文文 97 顆（剛好對調）。",
        "B": "算出了平分後「每人會有 74 顆」，但題目問的是「要給幾顆」（97 − 74 ＝ 23 顆）。",
        "C": "相減或除法算錯，誤算為 24 顆。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "移動數量 ＝ 兩人相差數量 ÷ 2",
        "驗算方法：平均數 ＝ (大數 ＋ 小數) ÷ 2，移動數量 ＝ 大數 − 平均數"
      ],
      "conceptCompare": "千萬別把所有「多的 46 顆」全給對方，只要給「一半」就夠了！",
      "examVariations": "另一種解法：(51 ＋ 97) ÷ 2 ＝ 74 顆（每人一樣多時的顆數），再用 97 − 74 ＝ 23 顆，結果完全一樣！"
    },
    "check": {
      "expr": "(97 - 51) / 2",
      "expect": "23"
    },
    "work": "sm"
  },
  {
    "id": "EX2-JIANDE-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與公里公分換算",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 五、寫出算式做做看 第6題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "question": "五、寫出算式做做看 6. 國道 1 號長約 374.5 公里，在比例尺 1：3500000 的地圖上長度是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p2.png",
    "options": [
      {
        "key": "A",
        "text": "10.7 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "107 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "1.07 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "1070 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "熟練「1 公里 ＝ 100000 公分」換算，再依比值比例尺求出圖上距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1：3500000 的前後項單位必須一致（都是公分）。先將 374.5 公里換算成公分（1 公里 ＝ 1000 公尺 ＝ 100000 公分）："
        },
        {
          "type": "eq",
          "expr": "374.5 × 100000 = 37450000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：實際長度除以縮小倍數 3500000（同時去掉 5 個 0，即 374.5 ÷ 35）："
        },
        {
          "type": "eq",
          "expr": "37450000 ÷ 3500000 = 10.7",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：在地圖上長度是 10.7 公分。"
        }
      ],
      "insight": "超級速算撇步：先把比例尺「3500000 公分」直接去掉 5 個 0 變成「35 公里」！這樣地圖 1 公分 ＝ 實際 35 公里，直接算 374.5 ÷ 35 ＝ 10.7 公分，零失誤！",
      "distractorAnalysis": {
        "B": "公里換公分時多乘了一個 0（誤乘以 1000000），算成 107 公分。",
        "C": "公里換公分時少乘了一個 0（誤乘以 10000），算成 1.07 公分。",
        "D": "單位換算錯誤，算成 1070 公分（地圖上不可能長達 10 公尺）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公里 ＝ 1000 公尺 ＝ 100000 公分（相差 5 個 0）",
        "圖上長度 ＝ 實際長度 ÷ 縮小倍數"
      ],
      "conceptCompare": "看到百萬級大數字比例尺（如 1：3500000），先把後項去掉 5 個 0 變成公里（1 公分代表 35 公里），算起來既直覺又不容易漏掉 0！",
      "examVariations": "常改問：「在這張地圖上 8 公分的路線，實際長是多少公里？」直接算 8 × 35 ＝ 280 公里。"
    },
    "check": {
      "expr": "374.5 * 100000 / 3500000",
      "expect": "10.7"
    },
    "work": "lg"
  },
  {
    "id": "EX2-JIANDE-G07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-4",
    "sectionName": "綜合應用素養題（和差與雞兔問題）",
    "school": "桃園市建德國小",
    "source": "建德國小 113上 第二次段考 六、素養題 第(1)~(5)題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 5,
    "difficulty": 4,
    "questionType": "group",
    "question": "六、素養題：\n退休後的李老師有一座農場，農場裡有一塊菜園用來種植農作物，另一塊長方形土地用圍欄圍起來，圍欄周長是 140 公尺，圍欄裡養了雞、鴨、牛和兔子。他主要是將雞和鴨生的蛋拿去賣，鴨蛋的售價比雞蛋高，現在每斤的鴨蛋蛋價是雞蛋蛋價的 1.2 倍。不過近年來因為疫情和戰爭的關係，飼料的價格逐年上漲，今年每公斤飼料的價錢比去年增加了 10%。\n在菜園的部分，菜園裡種了番茄、彩椒和玉米還有一些葉菜類，番茄、彩椒和玉米共收成 644 斤。這些蔬果除了自己留著吃，也會賣出去增加收入。這個月李老師在計算上個月的收入和成本，也在思考農場未來還可以種什麼農作物，以及怎麼在增加的成本中提高收益。回答下面問題。",
    "examPageImage": "images/exams/EXAM_MID2/jiande_p2.png",
    "work": "lg",
    "subQuestions": [
      {
        "subId": "EX2-JIANDE-G07-1",
        "label": "(1)",
        "question": "長方形土地的長比寬多 32 公尺，長方形土地的面積是多少平方公尺？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1216 平方公尺",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          },
          {
            "key": "B",
            "text": "969 平方公尺",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "4644 平方公尺",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "1632 平方公尺",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "先從「長方形周長 ÷ 2 ＝ 長 ＋ 寬」找出兩量和，再用和差公式求出長與寬，最後求面積。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：圍欄周長 140 公尺包含 2 條長和 2 條寬，先除以 2 得到「長 ＋ 寬」："
            },
            {
              "type": "eq",
              "expr": "140 ÷ 2 = 70",
              "unit": "公尺"
            },
            {
              "type": "text",
              "text": "第 2 步：已知長與寬的和是 70 公尺、差是 32 公尺，算出長與寬："
            },
            {
              "type": "eq",
              "expr": "(70 + 32) ÷ 2 = 51",
              "unit": "公尺（長）"
            },
            {
              "type": "eq",
              "expr": "70 − 51 = 19",
              "unit": "公尺（寬）"
            },
            {
              "type": "text",
              "text": "第 3 步：計算長方形面積："
            },
            {
              "type": "eq",
              "expr": "51 × 19 = 969",
              "unit": "平方公尺"
            },
            {
              "type": "answer",
              "text": "答：長方形土地的面積是 969 平方公尺。"
            }
          ],
          "insight": "長方形周長題必先「÷ 2」得到長＋寬！沒除以 2 直接套和差公式就會算出荒謬的大數字。",
          "distractorAnalysis": {
            "C": "忘記把周長 140 公尺除以 2，直接拿 140 當作長與寬的和，算成 86 × 54 ＝ 4644。",
            "D": "算出長 51 公尺後，誤把「多 32 公尺」直接當成寬去乘（51 × 32 ＝ 1632）。",
            "A": "算出長＋寬＝ 70 後，直接算 70 − 32 ＝ 38 再乘以 32（未除以 2）。"
          }
        },
        "check": {
          "expr": "((140 / 2 + 32) / 2) * ((140 / 2 - 32) / 2)",
          "expect": "969"
        }
      },
      {
        "subId": "EX2-JIANDE-G07-2",
        "label": "(2)",
        "question": "上個月 1 斤雞蛋的蛋價是 40 元，1 斤鴨蛋的蛋價是多少元？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "41.2 元",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "52 元",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "48 元",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "32 元",
            "trapCode": "U05_MARKUP_BASE_WRONG"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "從長文資訊擷取「鴨蛋蛋價是雞蛋蛋價的 1.2 倍」進行倍數乘法計算。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：從文章第一段得知「每斤鴨蛋蛋價是雞蛋蛋價的 1.2 倍」。"
            },
            {
              "type": "text",
              "text": "第 2 步：1 斤雞蛋 40 元，算出 1 斤鴨蛋價錢："
            },
            {
              "type": "eq",
              "expr": "40 × 1.2 = 48",
              "unit": "元"
            },
            {
              "type": "answer",
              "text": "答：1 斤鴨蛋的蛋價是 48 元。"
            }
          ],
          "insight": "閱讀素養題要把文字裡的線索圈起來：「1.2 倍」就是直接乘以 1.2！",
          "distractorAnalysis": {
            "D": "誤以為比雞蛋便宜 0.2 倍，算成 40 × (1 − 0.2) ＝ 32 元（文章已說明鴨蛋售價比雞蛋高）。",
            "A": "把「1.2 倍」誤用加法算成 40 ＋ 1.2 ＝ 41.2 元。",
            "B": "把 1.2 倍誤算成多 12 元，得到 40 ＋ 12 ＝ 52 元。"
          }
        },
        "check": {
          "expr": "40 * 1.2",
          "expect": "48"
        }
      },
      {
        "subId": "EX2-JIANDE-G07-3",
        "label": "(3)",
        "question": "接第 (2) 題，李老師上個月雞蛋和鴨蛋共賣了 569 斤，賣蛋所得的錢是 25360 元，上個月雞蛋和鴨蛋各賣了多少斤？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "雞蛋 325 斤，鴨蛋 244 斤",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "B",
            "text": "雞蛋 250 斤，鴨蛋 319 斤",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "雞蛋 264 斤，鴨蛋 305 斤",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "雞蛋 244 斤，鴨蛋 325 斤",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "運用「假設法（雞兔同籠）」解出兩種不同單價的蛋各賣幾斤。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：假設賣出的 569 斤全部都是 1 斤 40 元的雞蛋，總收入應該是："
            },
            {
              "type": "eq",
              "expr": "569 × 40 = 22760",
              "unit": "元"
            },
            {
              "type": "text",
              "text": "第 2 步：實際賣了 25360 元，比假設的金額多了："
            },
            {
              "type": "eq",
              "expr": "25360 − 22760 = 2600",
              "unit": "元"
            },
            {
              "type": "text",
              "text": "第 3 步：每把 1 斤雞蛋換成 1 斤鴨蛋，收入會多 48 − 40 ＝ 8 元，因此鴨蛋賣了："
            },
            {
              "type": "eq",
              "expr": "2600 ÷ (48 − 40) = 325",
              "unit": "斤（鴨蛋）"
            },
            {
              "type": "text",
              "text": "第 4 步：算出雞蛋賣出的斤數："
            },
            {
              "type": "eq",
              "expr": "569 − 325 = 244",
              "unit": "斤（雞蛋）"
            },
            {
              "type": "answer",
              "text": "答：上個月雞蛋賣了 244 斤，鴨蛋賣了 325 斤。"
            }
          ],
          "insight": "假設全部都是便宜的雞蛋，算出差額除以單價差（8 元），得到的就是比較貴的「鴨蛋」！",
          "distractorAnalysis": {
            "A": "假設全賣雞蛋，算出的 325 斤其實是「鴨蛋」，卻不小心把雞蛋和鴨蛋的數字寫反了！",
            "B": "計算總價差或除以 8 時發生筆誤。",
            "C": "減法計算錯誤導致雞蛋與鴨蛋斤數失真。"
          }
        },
        "check": {
          "expr": "569 - (25360 - 569 * 40) / (48 - 40)",
          "expect": "244",
          "extraChecks": [
            {
              "expr": "(25360 - 569 * 40) / (48 - 40)",
              "expect": "325"
            }
          ]
        }
      },
      {
        "subId": "EX2-JIANDE-G07-4",
        "label": "(4)",
        "question": "彩椒和玉米收成的斤數合起來是 206 斤，彩椒比玉米多 122 斤，彩椒、玉米和番茄各收成幾斤？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "彩椒 164 斤、玉米 42 斤、番茄 438 斤",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "彩椒 42 斤、玉米 164 斤、番茄 438 斤",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "C",
            "text": "彩椒 328 斤、玉米 84 斤、番茄 232 斤",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          },
          {
            "key": "D",
            "text": "彩椒 164 斤、玉米 42 斤、番茄 206 斤",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "結合長文條件「三種共收成 644 斤」與和差問題，依序算出三種農作物收成量。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：彩椒和玉米共 206 斤，彩椒比玉米多 122 斤，用和差公式求出彩椒與玉米："
            },
            {
              "type": "eq",
              "expr": "(206 + 122) ÷ 2 = 164",
              "unit": "斤（彩椒）"
            },
            {
              "type": "eq",
              "expr": "206 − 164 = 42",
              "unit": "斤（玉米）"
            },
            {
              "type": "text",
              "text": "第 2 步：回看題幹第二段「番茄、彩椒和玉米共收成 644 斤」，減掉彩椒和玉米的合計 206 斤即為番茄："
            },
            {
              "type": "eq",
              "expr": "644 − 206 = 438",
              "unit": "斤（番茄）"
            },
            {
              "type": "answer",
              "text": "答：彩椒收成 164 斤、玉米 42 斤、番茄 438 斤。"
            }
          ],
          "insight": "算番茄不用分開減 164 和 42，直接拿三者總和 644 減掉兩者合計 206 ＝ 438 斤，超快！",
          "distractorAnalysis": {
            "B": "把較多的彩椒和較少的玉米數字寫反了。",
            "C": "套用和差公式時忘記除以 2，直接把 206 ＋ 122 ＝ 328 當成彩椒。",
            "D": "誤把彩椒與玉米的合計 206 斤直接填成番茄的斤數，忘了用 644 去減。"
          }
        },
        "check": {
          "expr": "(206 + 122) / 2",
          "expect": "164",
          "extraChecks": [
            {
              "expr": "(206 - 122) / 2",
              "expect": "42"
            },
            {
              "expr": "644 - 206",
              "expect": "438"
            }
          ]
        }
      },
      {
        "subId": "EX2-JIANDE-G07-5",
        "label": "(5)",
        "question": "圍欄裡有一區養雞和兔子共 117 隻，這些兔子和雞共有 344 隻腳。這一區養了幾隻雞？幾隻兔子？",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "雞 72 隻，兔子 45 隻",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "雞 62 隻，兔子 55 隻",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "雞 55 隻，兔子 62 隻",
            "trapCode": "U08_CHICKEN_RABBIT_SWAP"
          },
          {
            "key": "D",
            "text": "雞 60 隻，兔子 57 隻",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "經典雞兔同籠假設法練習。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：假設這 117 隻全部都是雞（每隻 2 隻腳），總腳數應該是："
            },
            {
              "type": "eq",
              "expr": "117 × 2 = 234",
              "unit": "隻腳"
            },
            {
              "type": "text",
              "text": "第 2 步：實際共有 344 隻腳，比假設的腳數多了："
            },
            {
              "type": "eq",
              "expr": "344 − 234 = 110",
              "unit": "隻腳"
            },
            {
              "type": "text",
              "text": "第 3 步：每 1 隻兔子比雞多 4 − 2 ＝ 2 隻腳，所以兔子有："
            },
            {
              "type": "eq",
              "expr": "110 ÷ (4 − 2) = 55",
              "unit": "隻（兔子）"
            },
            {
              "type": "text",
              "text": "第 4 步：最後算出雞的隻數："
            },
            {
              "type": "eq",
              "expr": "117 − 55 = 62",
              "unit": "隻（雞）"
            },
            {
              "type": "answer",
              "text": "答：這一區養了 62 隻雞，55 隻兔子。"
            }
          ],
          "insight": "假設全部都是「雞」，算出來的一定是「兔子」；若假設全部都是「兔子」，算出來的就是「雞」！",
          "distractorAnalysis": {
            "C": "假設全雞算出 55 隻兔子後，不小心跟雞的隻數 62 寫對調了！",
            "D": "110 ÷ 2 或減法計算失誤。",
            "A": "腳數差計算失誤，算成雞 72 隻、兔子 45 隻（總腳數會變成 324 隻，不符合 344 隻）。"
          }
        },
        "check": {
          "expr": "117 - (344 - 117 * 2) / (4 - 2)",
          "expect": "62",
          "extraChecks": [
            {
              "expr": "(344 - 117 * 2) / (4 - 2)",
              "expect": "55"
            }
          ]
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "和差問題：大數 ＝ (和 ＋ 差) ÷ 2；小數 ＝ (和 − 差) ÷ 2",
        "雞兔問題：假設全為甲，則乙 ＝ 總差 ÷ 單差；甲 ＝ 總數 − 乙"
      ],
      "conceptCompare": "素養題長文往往同時藏了題目需要的條件（如圍欄周長 140 公尺、三種菜共 644 斤、鴨蛋 1.2 倍）與干擾資訊（牛、葉菜類、飼料漲 10%），解題前先劃出重點數據！",
      "examVariations": "若第 (1) 題再追問「明年飼料每公斤比去年 80 元漲 10% 是幾元？」，算式為 80 × (1 ＋ 10%) ＝ 88 元。"
    }
  },
  {
    "id": "EX2-DAHUA-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "1. 圓的半徑變為原來的 3 倍時，圓周長會變為原來的幾倍？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "1/3 倍",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "3 倍",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "6 倍",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "不變",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗圓的半徑、直徑與圓周長之間的等比例放大關係。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓周長 ＝ 直徑 × 圓周率 ＝ 半徑 × 2 × 圓周率。"
        },
        {
          "type": "text",
          "text": "第 2 步：當半徑變為原來的 3 倍，直徑也同時變為原來的 3 倍；因為圓周率固定不變，所以圓周長也變為原來的 3 倍。"
        },
        {
          "type": "eq",
          "expr": "1 × 3 ＝ 3",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：圓周長會變為原來的 3 倍。"
        }
      ],
      "insight": "半徑變幾倍，直徑和圓周長就跟著變幾倍（但圓周率永遠不變）！",
      "distractorAnalysis": {
        "A": "把放大倍數倒數算成 1/3 倍。",
        "C": "誤把「直徑 ＝ 半徑 × 2」的 2 倍跟題目的 3 倍相乘成 6 倍；其實原來和後來都要乘 2，倍數仍是 3 倍。",
        "D": "把「圓周率不變」誤記成「圓周長不變」。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "半徑變為幾倍，直徑與圓周長皆同步變為幾倍"
      ],
      "conceptCompare": "無論圓怎麼放大或縮小，「圓周率」永遠大約是 3.14 不會改變；會跟著成比例改變的是直徑與圓周長。",
      "examVariations": "若題目改問「直徑變為原來的 4 倍，圓周長變為幾倍？圓周率變為幾倍？」答案分別是 4 倍與不變。"
    },
    "check": {
      "expr": "3",
      "expect": "3"
    }
  },
  {
    "id": "EX2-DAHUA-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "基準量與比較量的差",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "2. 甲數是乙數的 0.7 倍，且甲數和乙數相差 18，甲數和乙數的和是多少？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "54",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "36",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "102",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "90",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗已知比較量是基準量的幾倍及兩數之差，先逆推基準量再求兩數總和。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以乙數為基準量（1 倍），甲數為 0.7 倍，兩數相差 1 − 0.7 ＝ 0.3 倍，剛好是 18。"
        },
        {
          "type": "eq",
          "expr": "1 − 0.7 ＝ 0.3",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：用差量除以倍率差，算出基準量乙數："
        },
        {
          "type": "longdiv",
          "dividend": "18",
          "divisor": "0.3",
          "note": "除數 0.3 向右移 1 位變 3，被除數 18 補 0 變 180"
        },
        {
          "type": "eq",
          "expr": "18 ÷ 0.3 ＝ 60",
          "unit": ""
        },
        {
          "type": "text",
          "text": "第 3 步：算出甲數 ＝ 60 × 0.7 ＝ 42（或 60 − 18 ＝ 42），再將兩數相加："
        },
        {
          "type": "eq",
          "expr": "60 ＋ 42 ＝ 102",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：甲數和乙數的和是 102。"
        }
      ],
      "insight": "先找「差量 18 對應 0.3 倍」算出 1 倍的乙數 60，兩數和就是 60 × (1 ＋ 0.7) ＝ 102！",
      "distractorAnalysis": {
        "A": "誤把 18 直接乘以 3 算出 54，忘記先除以 0.3 得 60 再乘以 1.7。",
        "B": "比例或減法誤算（如 60 − 24 ＝ 36）。",
        "D": "求出乙數 60 後只加到一半，或誤以 18 ÷ 0.2 ＝ 90 計算。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩數差 ÷ (1 − 比值)",
        "兩數和 ＝ 基準量 × (1 ＋ 比值)"
      ],
      "conceptCompare": "看到「相差」用 (1 − 比值) 去除；看到「總和」用 (1 ＋ 比值) 去除，千萬不要搞混！",
      "examVariations": "若改為「甲數是乙數的 1.4 倍，兩數相差 18」，則相差 1.4 − 1 ＝ 0.4 倍，乙數 ＝ 18 ÷ 0.4 ＝ 45。"
    },
    "check": {
      "expr": "18 / (1 - 0.7) * (1 + 0.7)",
      "expect": "102"
    }
  },
  {
    "id": "EX2-DAHUA-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "3. 神奇柑仔店將各種糖果成本加二成五作為商品的定價，定價和成本的比可以記成？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "6：5",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "4：5",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "5：4",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "5：6",
        "trapCode": "U05_BASE_SWAP"
      }
    ],
    "answer": "C",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗加成（加二成五）換算為基準量與比較量之最簡整數比，並注意前項與後項順序。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：二成五就是 25%（0.25）。把成本當作基準量 1，定價就是 1 ＋ 0.25 ＝ 1.25（或 125%）。"
        },
        {
          "type": "text",
          "text": "第 2 步：寫出「定價：成本」的比並化為最簡整數比："
        },
        {
          "type": "text",
          "text": "定價：成本 ＝ 125：100 ＝ 5：4（前後項同除以 25）。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 0.25 ＝ 1.25",
          "unit": "倍"
        },
        {
          "type": "answer",
          "text": "答：定價和成本的比可以記成 5：4。"
        }
      ],
      "insight": "加二成五就是「成本 4 份，多加 1 份變定價 5 份」，定價在前、成本在後就是 5：4！",
      "distractorAnalysis": {
        "A": "誤把「二成五」算成多加 1/5，變成 6：5。",
        "B": "順序顛倒！寫成「成本：定價 ＝ 4：5」，沒看清楚題目問的是「定價和成本的比」。",
        "D": "加成比例換算錯誤且順序顛倒。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "加二成五 ＝ 成本 × (1 ＋ 25%) ＝ 成本 × 5/4",
        "比的前後項順序必須與題目文字完全一致"
      ],
      "conceptCompare": "「打八折」是 × 0.8（4：5）；「加二成五」是 × 1.25（5：4）。",
      "examVariations": "若改問「成本和定價的比值是多少？」則是 4 ÷ 5 ＝ 4/5（0.8）。"
    },
    "check": {
      "expr": "(1 + 25%) / 1",
      "expect": "5/4"
    }
  },
  {
    "id": "EX2-DAHUA-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際距離",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "4. 在比例尺 1/100000 的地圖上，長 3.5 公分的清境天空觀景步道，實際長是多少？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "350 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "3500 公尺",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "35000 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "3500000 公分",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗由地圖上長度與數字比例尺求實際距離，並進行公分與公尺的單位換算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1/100000 表示「圖上 1 公分 ＝ 實際 100000 公分」。先算出實際幾公分："
        },
        {
          "type": "eq",
          "expr": "3.5 × 100000 ＝ 350000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：1 公尺 ＝ 100 公分，將公分換算成公尺（去掉 2 個 0）："
        },
        {
          "type": "eq",
          "expr": "350000 ÷ 100 ＝ 3500",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：實際長是 3500 公尺。"
        }
      ],
      "insight": "100000 公分 ＝ 1000 公尺 ＝ 1 公里！所以 3.5 公分 × 1000 公尺 ＝ 3500 公尺。",
      "distractorAnalysis": {
        "A": "多除以 10，把 3500 公尺錯換成 350 公尺。",
        "C": "少除以 10，把 350000 公分錯換成 35000 公尺。",
        "D": "多乘了 10 倍，把 350000 公分算成 3500000 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際長度 ＝ 圖上長度 ÷ 比例尺",
        "1 公尺 ＝ 100 公分；1 公里 ＝ 100000 公分"
      ],
      "conceptCompare": "遇到比例尺 1/100000，先直接把十萬公分換成「1 公里（1000 公尺）」，就能馬上口算 3.5 × 1000 ＝ 3500 公尺！",
      "examVariations": "若問實際長是多少「公里」，3500 公尺 ＝ 3.5 公里。"
    },
    "check": {
      "expr": "3.5 * 100000 / 100",
      "expect": "3500"
    }
  },
  {
    "id": "EX2-DAHUA-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-1",
    "sectionName": "和差問題與移多補少",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "5. 姊姊小岑有 60 張貼紙，妹妹小如給姐姐 8 張後，兩個人的貼紙就會一樣多。妹妹原有幾張貼紙？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "52 張",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "B",
        "text": "34 張",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "76 張",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "26 張",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗「移多補少」後兩量相等的逆推問題：相差數量 ＝ 移動數量的 2 倍。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：姊姊小岑原有 60 張，收到妹妹給的 8 張後，姊姊現在有："
        },
        {
          "type": "eq",
          "expr": "60 ＋ 8 ＝ 68",
          "unit": "張"
        },
        {
          "type": "text",
          "text": "第 2 步：這時兩人一樣多，代表妹妹給出 8 張後也剩下 68 張，所以妹妹原來有："
        },
        {
          "type": "eq",
          "expr": "68 ＋ 8 ＝ 76",
          "unit": "張"
        },
        {
          "type": "answer",
          "text": "答：妹妹原有 76 張貼紙。"
        }
      ],
      "insight": "小如給姊姊 8 張才一樣多，代表小如原本比姊姊多「2 個 8 張（16 張）」，60 ＋ 16 ＝ 76 張！",
      "distractorAnalysis": {
        "A": "誤把 60 − 8 ＝ 52 當作答案，沒搞清楚是妹妹「給出」貼紙後變少，原本一定比 60 張多！",
        "B": "誤把 68 ÷ 2 ＝ 34 當作妹妹原有張數。",
        "D": "算式誤用 (60 − 8) ÷ 2 ＝ 26。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "給對方 □ 個後一樣多 ➔ 原來相差 □ × 2 個"
      ],
      "conceptCompare": "「誰給誰」最容易看反！先算出「一樣多時每人有幾張（60 ＋ 8 ＝ 68）」，再把給出去的 8 張討回來（68 ＋ 8 ＝ 76）最不容易錯。",
      "examVariations": "若改為「姊姊給妹妹 8 張後兩人一樣多」，則變成 60 − 8 ＝ 52 張，妹妹原有 52 − 8 ＝ 44 張。"
    },
    "check": {
      "expr": "60 + 8 * 2",
      "expect": "76"
    }
  },
  {
    "id": "EX2-DAHUA-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 一、選擇題 第6題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "6. 老師在黑板上用圓規畫了甲乙丙三個不同的圓，甲的直徑是 6 公分，乙的直徑是 14 公分，丙的直徑是 10 公分，哪一個圓的圓周率最大？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "甲",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "乙",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "C",
        "text": "丙",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "D",
        "text": "一樣大",
        "trapCode": null
      }
    ],
    "answer": "D",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "建立正確圓周率觀念：任何大小的圓，圓周長除以直徑的比值（圓周率）都固定不變。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓周率 ＝ 圓周長 ÷ 直徑，是一個固定的數（大約是 3.14）。"
        },
        {
          "type": "text",
          "text": "第 2 步：不管圓的直徑是 6 公分、14 公分還是 10 公分，三個圓的圓周率都完全一樣大。"
        },
        {
          "type": "answer",
          "text": "答：一樣大。"
        }
      ],
      "insight": "圓周率跟圓的大小無關！大圓小圓的圓周率都一樣大約是 3.14。",
      "distractorAnalysis": {
        "A": "誤以為最小圓的圓周率最大。",
        "B": "看見乙的直徑 14 公分最大，就把「圓周長最大」誤當成「圓周率最大」。",
        "C": "受題目數字干擾誤選丙。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "所有圓的圓周率都相等（大約 3.14）"
      ],
      "conceptCompare": "乙圓的「圓周長」最大，但三個圓的「圓周率」一樣大！",
      "examVariations": "是非題常考：「大圓的圓周率比小圓的圓周率大」➔ 答案是 ╳（錯誤）。"
    },
    "check": {
      "expr": "1",
      "expect": "1"
    }
  },
  {
    "id": "EX2-DAHUA-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與圓心角",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 一、選擇題 第7題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "7. 將一張直徑長 10 公分的圓形紙片，沿著兩條半徑剪成兩個扇形。剪完後其中一個扇形的弧長是 7.85 公分，則另一個扇形的圓心角度數是多少？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "90 度",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "120 度",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "C",
        "text": "180 度",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "270 度",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗先由弧長占圓周長的比例反推圓心角，再求剩下另一個扇形的圓心角。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：算出整張圓形紙片的圓周長："
        },
        {
          "type": "eq",
          "expr": "10 × 3.14 ＝ 31.4",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：算出弧長 7.85 公分是幾分之幾圓："
        },
        {
          "type": "longdiv",
          "dividend": "7.85",
          "divisor": "31.4",
          "note": "除數 31.4 向右移 1 位變 314，被除數 7.85 變 78.5"
        },
        {
          "type": "eq",
          "expr": "7.85 ÷ 31.4 ＝ 0.25",
          "unit": "圓"
        },
        {
          "type": "text",
          "text": "第 3 步：0.25 圓的圓心角是 360 × 0.25 ＝ 90 度，所以另一個扇形的圓心角是："
        },
        {
          "type": "eq",
          "expr": "360 − 90 ＝ 270",
          "unit": "度"
        },
        {
          "type": "answer",
          "text": "答：另一個扇形的圓心角度數是 270 度。"
        }
      ],
      "insight": "第一個扇形占 1/4 圓（90 度），剩下的另一個扇形就占 3/4 圓（270 度）！",
      "distractorAnalysis": {
        "A": "算出 90 度就停下來，忘記題目問的是「另一個」扇形的圓心角！",
        "B": "比例換算失誤，錯把 7.85 ÷ 31.4 當成 1/3 圓而算出 120 度。",
        "C": "誤以為剪開一半變成 180 度。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形是幾分之幾圓 ＝ 弧長 ÷ 圓周長",
        "另一個扇形圓心角 ＝ 360 度 − 已知扇形圓心角"
      ],
      "conceptCompare": "看清楚題目最後問「這個扇形」還是「另一個扇形」，讀題圈出關鍵字就不會掉入 90 度的陷阱！",
      "examVariations": "也可以先算「另一個扇形的弧長 ＝ 31.4 − 7.85 ＝ 23.55 公分」，再用 23.55 ÷ 31.4 × 360 ＝ 270 度驗算。"
    },
    "check": {
      "expr": "360 - (7.85 / (10 * 3.14)) * 360",
      "expect": "270"
    }
  },
  {
    "id": "EX2-DAHUA-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與比較量的和",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第1題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "1. 「10 月份巧克力蛋糕禮盒銷售總數為 1180 盒，比 9 月增加了 18%，9 月的巧克力蛋糕禮盒賣出幾盒？（　　）盒",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "1000 盒",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "967.6 盒",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "1392.4 盒",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "1162 盒",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗已知增加百分率後的結果，逆推原本基準量（9 月銷售量）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把「比」後面的 9 月賣出盒數當作基準量 1；10 月比 9 月多 18%，所以 10 月是 9 月的 1 ＋ 0.18 ＝ 1.18 倍。"
        },
        {
          "type": "eq",
          "expr": "1 ＋ 0.18 ＝ 1.18",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：已知 9 月的 1.18 倍是 1180 盒，用除法求基準量 9 月："
        },
        {
          "type": "longdiv",
          "dividend": "1180",
          "divisor": "1.18",
          "note": "除數 1.18 向右移 2 位變 118，被除數 1180 補 2 個 0 變 118000"
        },
        {
          "type": "eq",
          "expr": "1180 ÷ 1.18 ＝ 1000",
          "unit": "盒"
        },
        {
          "type": "answer",
          "text": "答：9 月的巧克力蛋糕禮盒賣出 1000 盒。"
        }
      ],
      "insight": "比 9 月多 18% 就是「1.18 倍」；求基準量要用除法：1180 ÷ 1.18 ＝ 1000 盒！",
      "distractorAnalysis": {
        "B": "誤把「9 月比 10 月少 18%」用乘法算成 1180 × (1 − 0.18) ＝ 967.6 盒。",
        "C": "誤用乘法 1180 × 1.18 ＝ 1392.4 盒，把 9 月算得比 10 月還多。",
        "D": "直接把 1180 減掉 18 當成 1162 盒，忽略 18% 是百分率不是 18 盒。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 比較量 ÷ (1 ＋ 增加的百分率)"
      ],
      "conceptCompare": "遇到「10 月比 9 月增加 18%」，「比」後面的 9 月才是基準量 1！已知 10 月求 9 月一定要用「除」的。",
      "examVariations": "若改為「10 月賣出 820 盒，比 9 月減少了 18%」，則 9 月 ＝ 820 ÷ (1 − 0.18) ＝ 1000 盒。"
    },
    "check": {
      "expr": "1180 / (1 + 18%)",
      "expect": "1000"
    }
  },
  {
    "id": "EX2-DAHUA-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題與數量關係",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第2題(1)~(5)",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "work": "md",
    "question": "2. 舅舅今年 38 歲，小彥今年 13 歲，回答下列問題。",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "subQuestions": [
      {
        "subId": "EX2-DAHUA-G01-1",
        "label": "(1)",
        "question": "舅舅和小彥相差幾歲？（　　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "25 歲",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "51 歲",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "24 歲",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "15 歲",
            "trapCode": "U08_CALC_SLIP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "計算兩人今年的年齡差，作為後續年齡問題的不變量基礎。",
          "steps": [
            {
              "type": "text",
              "text": "用舅舅今年的年齡減去小彥今年的年齡："
            },
            {
              "type": "eq",
              "expr": "38 − 13 ＝ 25",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：相差 25 歲。"
            }
          ],
          "insight": "兩人的年齡差是 38 − 13 ＝ 25 歲！",
          "distractorAnalysis": {
            "B": "誤用加法算成 38 ＋ 13 ＝ 51 歲（這是年齡和）。",
            "C": "減法個位或十位計算失誤。",
            "D": "計算失誤少算了 10 歲。"
          }
        },
        "check": {
          "expr": "38 - 13",
          "expect": "25"
        }
      },
      {
        "subId": "EX2-DAHUA-G01-2",
        "label": "(2)",
        "question": "14 年後，舅舅和小彥相差幾歲？（　　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "53 歲",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "39 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "C",
            "text": "11 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          },
          {
            "key": "D",
            "text": "25 歲",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "建立年齡問題核心觀念：不管經過多少年，兩人的年齡差永遠不變。",
          "steps": [
            {
              "type": "text",
              "text": "14 年後，舅舅長大 14 歲（52 歲），小彥也長大 14 歲（27 歲）。"
            },
            {
              "type": "eq",
              "expr": "52 − 27 ＝ 25",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：14 年後相差 25 歲。"
            }
          ],
          "insight": "兩個人同時長大 14 歲，年齡差永遠不變，還是 25 歲！",
          "distractorAnalysis": {
            "B": "誤把年齡差 25 直接加上 14 歲，忘記小彥也會同時長大。",
            "C": "誤把年齡差 25 減掉 14 歲。",
            "A": "誤算成 39 ＋ 14 或其他數值。"
          }
        },
        "check": {
          "expr": "38 - 13",
          "expect": "25"
        }
      },
      {
        "subId": "EX2-DAHUA-G01-3",
        "label": "(3)",
        "question": "當舅舅 58 歲時，小彥是幾歲？（　　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "33 歲",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "83 歲",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "25 歲",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "45 歲",
            "trapCode": "U08_AGE_NOW_OFFSET_MISS"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "利用固定年齡差，由舅舅的年齡推算小彥的年齡。",
          "steps": [
            {
              "type": "text",
              "text": "因為舅舅永遠比小彥大 25 歲，所以小彥的年齡 ＝ 舅舅年齡 − 25："
            },
            {
              "type": "eq",
              "expr": "58 − 25 ＝ 33",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：小彥是 33 歲。"
            }
          ],
          "insight": "舅舅 58 歲（過了 20 年），小彥也長大 20 歲：13 ＋ 20 ＝ 33 歲，或直接 58 − 25 ＝ 33 歲！",
          "distractorAnalysis": {
            "B": "加法方向搞反，算成 58 ＋ 25 ＝ 83 歲，小彥反而比舅舅老。",
            "C": "直接寫了年齡差 25 歲。",
            "D": "誤用 58 − 13 ＝ 45 歲。"
          }
        },
        "check": {
          "expr": "58 - (38 - 13)",
          "expect": "33"
        }
      },
      {
        "subId": "EX2-DAHUA-G01-4",
        "label": "(4)",
        "question": "當小彥 25 歲時，舅舅是幾歲？（　　）歲",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "63 歲",
            "trapCode": "U08_AGE_NOW_OFFSET_MISS"
          },
          {
            "key": "B",
            "text": "50 歲",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "37 歲",
            "trapCode": "U08_CALC_SLIP"
          },
          {
            "key": "D",
            "text": "12 歲",
            "trapCode": "U08_AGE_NOW_OFFSET_MISS"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "利用固定年齡差，由小彥的年齡推算舅舅的年齡。",
          "steps": [
            {
              "type": "text",
              "text": "舅舅永遠比小彥大 25 歲，所以舅舅的年齡 ＝ 小彥年齡 ＋ 25："
            },
            {
              "type": "eq",
              "expr": "25 ＋ 25 ＝ 50",
              "unit": "歲"
            },
            {
              "type": "answer",
              "text": "答：舅舅是 50 歲。"
            }
          ],
          "insight": "小彥從 13 歲長大到 25 歲（過了 12 年），舅舅也長大 12 歲：38 ＋ 12 ＝ 50 歲！",
          "distractorAnalysis": {
            "D": "算出小彥長大了 25 − 13 ＝ 12 年就停下，忘記加回舅舅原本的 38 歲。",
            "A": "誤用 38 ＋ 25 ＝ 63 歲，把小彥未來的 25 歲加到舅舅今年的 38 歲。",
            "C": "加減法計算失誤。"
          }
        },
        "check": {
          "expr": "25 + (38 - 13)",
          "expect": "50"
        }
      },
      {
        "subId": "EX2-DAHUA-G01-5",
        "label": "(5)",
        "question": "要怎麼列式表示舅舅年齡和小彥年齡間的關係？（　　）",
        "choiceStyle": "standard",
        "skipOptionNumMatch": true,
        "options": [
          {
            "key": "A",
            "text": "小彥年齡 − 舅舅年齡 ＝ 25 歲",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "舅舅年齡 ÷ 小彥年齡 ＝ 25",
            "trapCode": "U05_MULTIPLY_INSTEAD"
          },
          {
            "key": "C",
            "text": "舅舅年齡 − 小彥年齡 ＝ 25 歲",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "舅舅年齡 ＋ 小彥年齡 ＝ 51 歲",
            "trapCode": "U08_AGE_DIFF_CHANGE"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "將固定不變的「年齡差」歸納為兩量間的一般數量關係式。",
          "steps": [
            {
              "type": "text",
              "text": "因為兩人的年齡和每年都會增加 2 歲（會變），只有「年齡差 ＝ 25 歲」永遠不會變！"
            },
            {
              "type": "text",
              "text": "因此可列式為：舅舅年齡 − 小彥年齡 ＝ 25 歲（或 小彥年齡 ＋ 25 歲 ＝ 舅舅年齡）。"
            },
            {
              "type": "answer",
              "text": "答：舅舅年齡 − 小彥年齡 ＝ 25 歲。"
            }
          ],
          "insight": "年齡和會隨時間變大，倍數也會變，只有「相差 25 歲」是永遠成立的關係式！",
          "distractorAnalysis": {
            "D": "「年齡和 ＝ 51 歲」只在今年成立，明年就變成 53 歲了，不是永遠成立的關係。",
            "A": "減數與被減數寫反，小彥年齡比舅舅小，不能減去舅舅年齡。",
            "B": "兩人年齡的倍數關係不是 25 倍，且倍數會隨時間改變。"
          }
        },
        "check": {
          "expr": "38 - 13",
          "expect": "25"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "年齡差 ＝ 較大年齡 − 較小年齡（永遠不變）"
      ],
      "conceptCompare": "「年齡差」不管過幾年都完全相同；「年齡和」每過 1 年會增加 2 歲（因為兩人都各長大 1 歲）。",
      "examVariations": "常加考：「幾年後舅舅的年齡會是小彥的 2 倍？」當舅舅是 2 倍時，小彥剛好等於年齡差 25 歲，所以是 25 − 13 ＝ 12 年後。"
    }
  },
  {
    "id": "EX2-DAHUA-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "基準量與比較量的差",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第3題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "3. 小承參加字音字形比賽，比賽題目有 250 題，他的答對率是 78%，答對的題數比答錯的多幾題？（　　）題",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "130 題",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "195 題",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "C",
        "text": "55 題",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "140 題",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗百分率在總量中的應用：求部分量（答對與答錯題數）並計算相差題數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：算出答對的題數（全部 250 題的 78%）："
        },
        {
          "type": "eq",
          "expr": "250 × 0.78 ＝ 195",
          "unit": "題"
        },
        {
          "type": "text",
          "text": "第 2 步：算出答錯的題數："
        },
        {
          "type": "eq",
          "expr": "250 − 195 ＝ 55",
          "unit": "題"
        },
        {
          "type": "text",
          "text": "第 3 步：算出答對比答錯多幾題："
        },
        {
          "type": "eq",
          "expr": "195 − 55 ＝ 140",
          "unit": "題"
        },
        {
          "type": "answer",
          "text": "答：答對的題數比答錯的多 140 題。"
        }
      ],
      "insight": "也可以直接先算百分率差：答對 78%、答錯 22%，相差 78% − 22% ＝ 56%，250 × 0.56 ＝ 140 題！",
      "distractorAnalysis": {
        "B": "只算出答對題數 195 題，忘記減去答錯的 55 題。",
        "C": "算出的是答錯題數 55 題，而非兩者相差幾題。",
        "A": "減法或乘法進位計算失誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "答對比答錯多 ＝ 總題數 × (答對率 − 答錯率)"
      ],
      "conceptCompare": "先算各別題數再相減（195 − 55），或先算百分率差再乘總題數（250 × 56%），兩種算法剛好可以互相驗算！",
      "examVariations": "若改為「答對率是 60%，答對比答錯多 50 題，請問共有幾題？」則總題數 ＝ 50 ÷ (60% − 40%) ＝ 250 題。"
    },
    "check": {
      "expr": "250 * 78% - 250 * (1 - 78%)",
      "expect": "140"
    }
  },
  {
    "id": "EX2-DAHUA-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "4. 小琴要將圓規張開幾公分，才能畫出周長是 37.68 公分的圓？（　　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "6 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "3 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "18.84 公分",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "12 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗「圓規張開的距離 ＝ 圓的半徑」，必須由圓周長先求直徑再除以 2。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓規兩腳張開的距離是圓的「半徑」。先用圓周長除以 3.14 算出直徑："
        },
        {
          "type": "longdiv",
          "dividend": "37.68",
          "divisor": "3.14",
          "note": "除數 3.14 向右移 2 位變 314，被除數 37.68 變 3768"
        },
        {
          "type": "eq",
          "expr": "37.68 ÷ 3.14 ＝ 12",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：直徑是 12 公分，除以 2 求出半徑（圓規張開距離）："
        },
        {
          "type": "eq",
          "expr": "12 ÷ 2 ＝ 6",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：要將圓規張開 6 公分。"
        }
      ],
      "insight": "圓規張開的距離是「半徑」不是直徑！37.68 ÷ 3.14 ＝ 12 是直徑，一定要再除以 2 才是 6 公分！",
      "distractorAnalysis": {
        "D": "算出直徑 12 公分就直接當答案，忘記圓規張開的是「半徑」！",
        "B": "多除以一次 2 變成 3 公分。",
        "C": "只把 37.68 ÷ 2 ＝ 18.84，忘記除以圓周率 3.14。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "直徑 ＝ 圓周長 ÷ 3.14",
        "圓規張開距離 ＝ 半徑 ＝ 直徑 ÷ 2"
      ],
      "conceptCompare": "題目問「圓規要張開幾公分」，就是在問「半徑」！",
      "examVariations": "若改為「圓規張開 5 公分畫圓，圓周長大約是多少？」則為 5 × 2 × 3.14 ＝ 31.4 公分。"
    },
    "check": {
      "expr": "37.68 / 3.14 / 2",
      "expect": "6"
    }
  },
  {
    "id": "EX2-DAHUA-G02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際距離",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第5題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "group",
    "work": "sm",
    "question": "5. 地圖比例尺 1/15000，用圖示表示成下圖，★ 和 ♥ 表示的數分別是多少？",
    "stemImage": "images/exams/EXAM_MID2/crop_dahua_fill5_scale.png",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "subQuestions": [
      {
        "subId": "EX2-DAHUA-G02-1",
        "label": "(1)",
        "question": "★ 是（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "15000",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "B",
            "text": "150",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "15",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "D",
            "text": "1500",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "測驗將數字比例尺 1/15000 轉換為線段比例尺第 1 格（1 公分）的實際公尺數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：比例尺 1/15000 表示「圖上 1 公分 ＝ 實際 15000 公分」。"
            },
            {
              "type": "text",
              "text": "第 2 步：線段圖第 1 格代表圖上 1 公分，且單位標示為公尺（1 公尺 ＝ 100 公分）："
            },
            {
              "type": "eq",
              "expr": "15000 ÷ 100 ＝ 150",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：★ 是 150。"
            }
          ],
          "insight": "15000 公分去掉 2 個 0 就變成 150 公尺！",
          "distractorAnalysis": {
            "C": "多去掉了一個 0，誤算為 15。",
            "D": "只去掉一個 0（除以 10），誤算為 1500。",
            "A": "忘記把公分換算成公尺，直接填了 15000。"
          }
        },
        "check": {
          "expr": "15000 / 100",
          "expect": "150"
        }
      },
      {
        "subId": "EX2-DAHUA-G02-2",
        "label": "(2)",
        "question": "♥ 是（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "450",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "B",
            "text": "30",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "300",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "3000",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "測驗線段比例尺第 2 格（2 公分）的實際距離計算。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：1 格（1 公分）代表實際 150 公尺。"
            },
            {
              "type": "text",
              "text": "第 2 步：♥ 在第 2 格的位置，代表 2 個 150 公尺："
            },
            {
              "type": "eq",
              "expr": "150 × 2 ＝ 300",
              "unit": "公尺"
            },
            {
              "type": "answer",
              "text": "答：♥ 是 300。"
            }
          ],
          "insight": "第 1 格是 150 公尺，第 2 格就是 150 × 2 ＝ 300 公尺！",
          "distractorAnalysis": {
            "B": "單位換算少了一個 0（由錯誤的 ★ ＝ 15 推得 30）。",
            "D": "單位換算多了一個 0（由錯誤的 ★ ＝ 1500 推得 3000）。",
            "A": "誤看成第 3 格算出 150 × 3 ＝ 450。"
          }
        },
        "check": {
          "expr": "15000 / 100 * 2",
          "expect": "300"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "數字比例尺 1/15000 ➔ 圖上 1 公分 ＝ 實際 15000 公分 ＝ 150 公尺"
      ],
      "conceptCompare": "圖示比例尺上每一等長小格代表「圖上 1 公分」，最先看清楚上面寫的單位是「公尺」還是「公里」！",
      "examVariations": "如果題目標示的單位變成「公里」，150 公尺 ＝ 0.15 公里，♥ 就是 0.3 公里。"
    }
  },
  {
    "id": "EX2-DAHUA-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第6題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "6. 有一個圓形花圃的直徑是 20 公尺，沿著這個花圃的圓周走一圈，大約是走幾公尺？（　　）公尺",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "125.6 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "31.4 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "314 公尺",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "62.8 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗直接應用公式「圓周長 ＝ 直徑 × 圓周率（3.14）」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：已知圓形花圃的「直徑」是 20 公尺，走一圈的長度就是圓周長。"
        },
        {
          "type": "eq",
          "expr": "20 × 3.14 ＝ 62.8",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：大約是走 62.8 公尺。"
        }
      ],
      "insight": "題目給的是「直徑 20 公尺」，直接乘以 3.14 就是圓周長 62.8 公尺！",
      "distractorAnalysis": {
        "A": "誤把直徑 20 當成半徑，再多乘一次 2 變成 20 × 2 × 3.14 ＝ 125.6 公尺。",
        "B": "誤把直徑 20 除以 2 後去乘 3.14，算出半圓弧長 31.4 公尺。",
        "C": "套錯圓面積概念（10 × 10 × 3.14 ＝ 314）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 直徑 × 3.14 ＝ 半徑 × 2 × 3.14"
      ],
      "conceptCompare": "動筆前先圈出「直徑」或「半徑」，給直徑直接 × 3.14；給半徑才要先 × 2 再 × 3.14！",
      "examVariations": "若改問「走 5 圈大約是幾公尺？」，則再把 62.8 × 5 ＝ 314 公尺。"
    },
    "check": {
      "expr": "20 * 3.14",
      "expect": "62.8"
    }
  },
  {
    "id": "EX2-DAHUA-G03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "secondaryUnitIds": [
      "U08"
    ],
    "section": "5-2",
    "sectionName": "基準量與比較量的和與差",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第7題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 2,
    "questionType": "group",
    "work": "sm",
    "question": "7. 體育器材室裡籃球數量是排球數量的 7/9 倍，回答下列問題：",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "subQuestions": [
      {
        "subId": "EX2-DAHUA-G03-1",
        "label": "(1)",
        "question": "籃球和排球數量的總和是（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "排球數量的 1 7/9 倍",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "排球數量的 7/9 倍",
            "trapCode": "U05_SUM_FORGET_ONE"
          },
          {
            "key": "C",
            "text": "排球數量的 2/9 倍",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "D",
            "text": "籃球數量的 1 7/9 倍",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "A",
        "explanation": {
          "examPurpose": "測驗在未知具體數量的情況下，以基準量表示「兩數之和」的倍數關係。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：「是」後面的「排球數量」為基準量 1，籃球數量為排球數量的 7/9 倍。"
            },
            {
              "type": "text",
              "text": "第 2 步：兩者總和為基準量的 (1 ＋ 7/9) 倍："
            },
            {
              "type": "eq",
              "expr": "1 ＋ 7/9 ＝ 1 7/9",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：籃球和排球數量的總和是排球數量的 1 7/9 倍（或 16/9 倍）。"
            }
          ],
          "insight": "排球是 1 份，籃球是 7/9 份，合起來就是排球數量的 1 7/9 倍！",
          "distractorAnalysis": {
            "B": "忘記把基準量排球的「1 倍」加進去。",
            "C": "算成「兩數的差」（1 − 7/9 ＝ 2/9），看錯題意。",
            "D": "把基準量「排球數量」和比較量「籃球數量」寫反了！"
          }
        },
        "check": {
          "expr": "1 + 7/9",
          "expect": "1 7/9"
        }
      },
      {
        "subId": "EX2-DAHUA-G03-2",
        "label": "(2)",
        "question": "籃球和排球數量的差是（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "排球數量的 1 7/9 倍",
            "trapCode": "U05_ANSWER_WRONG_TARGET"
          },
          {
            "key": "B",
            "text": "排球數量的 2/9 倍",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "排球數量的 7/9 倍",
            "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
          },
          {
            "key": "D",
            "text": "籃球數量的 2/9 倍",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "B",
        "explanation": {
          "examPurpose": "測驗在未知具體數量的情況下，以基準量表示「兩數之差」的倍數關係。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：排球數量為基準量 1（大），籃球數量為排球數量的 7/9 倍（小）。"
            },
            {
              "type": "text",
              "text": "第 2 步：兩者相差為基準量的 (1 − 7/9) 倍："
            },
            {
              "type": "eq",
              "expr": "1 − 7/9 ＝ 2/9",
              "unit": "倍"
            },
            {
              "type": "answer",
              "text": "答：籃球和排球數量的差是排球數量的 2/9 倍。"
            }
          ],
          "insight": "排球有 1（9/9）份、籃球有 7/9 份，排球比籃球多排球數量的 2/9 倍！",
          "distractorAnalysis": {
            "A": "算成兩數總和 1 ＋ 7/9 ＝ 1 7/9 倍。",
            "C": "直接寫了比較量的倍數 7/9，忘記用 1 去減。",
            "D": "基準量誤寫為「籃球數量」。"
          }
        },
        "check": {
          "expr": "1 - 7/9",
          "expect": "2/9"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "兩量之和 ＝ 基準量 × (1 ＋ 比值)",
        "兩量之差 ＝ 基準量 × (1 − 比值) 或 基準量 × (比值 − 1)"
      ],
      "conceptCompare": "沒有給具體幾顆球時，答案必須寫清楚「是誰的幾倍」（這裡以排球為基準量 1，所以是排球數量的 1 7/9 倍與 2/9 倍）。",
      "examVariations": "若題目補充「已知排球有 45 顆」，總和就是 45 × 1 7/9 ＝ 80 顆，差就是 45 × 2/9 ＝ 10 顆。"
    }
  },
  {
    "id": "EX2-DAHUA-G04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際距離",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第8題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "group",
    "work": "sm",
    "question": "8. 將地圖的比例尺分別用比和比值表示。（圖示比例尺分為 3 等分，每小格為 1 公分，全長 3 公分代表實際 120 公尺）",
    "stemImage": "images/exams/EXAM_MID2/crop_dahua_fill8_scale.png",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "subQuestions": [
      {
        "subId": "EX2-DAHUA-G04-1",
        "label": "(1)",
        "question": "用「比」表示：（　　）",
        "choiceStyle": "standard",
        "skipOptionNumMatch": true,
        "options": [
          {
            "key": "A",
            "text": "1：3000",
            "trapCode": "U07_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "1：40",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "1：4000",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "1：12000",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          }
        ],
        "answer": "C",
        "explanation": {
          "examPurpose": "測驗讀取 3 格線段比例尺，先求圖上 1 公分代表的實際公尺數，再統一單位化為比。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：圖示線段共有 3 小格（每小格代表圖上 1 公分），3 公分代表實際 120 公尺，所以圖上 1 公分代表實際："
            },
            {
              "type": "eq",
              "expr": "120 ÷ 3 ＝ 40",
              "unit": "公尺"
            },
            {
              "type": "text",
              "text": "第 2 步：把 40 公尺換成同單位的公分：40 × 100 ＝ 4000 公分。"
            },
            {
              "type": "eq",
              "expr": "40 × 100 ＝ 4000",
              "unit": "公分"
            },
            {
              "type": "text",
              "text": "第 3 步：圖上距離：實際距離 ＝ 1 公分：4000 公分 ＝ 1：4000。"
            },
            {
              "type": "answer",
              "text": "答：比為 1：4000。"
            }
          ],
          "insight": "看到線段比例尺要先數有幾格！3 格 120 公尺 ➔ 1 格 40 公尺 ＝ 4000 公分 ➔ 1：4000！",
          "distractorAnalysis": {
            "B": "忘記把 40 公尺換算成公分，直接寫成 1：40。",
            "D": "沒有除以 3 格，直接把 120 公尺換成 12000 公分寫成 1：12000。",
            "A": "除法或乘法計算失誤。"
          }
        },
        "check": {
          "expr": "1 / (120 * 100 / 3)",
          "expect": "1/4000"
        }
      },
      {
        "subId": "EX2-DAHUA-G04-2",
        "label": "(2)",
        "question": "用「比值」表示：（　　）",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "4000",
            "trapCode": "U05_RECIPROCAL_MISS"
          },
          {
            "key": "B",
            "text": "1/40",
            "trapCode": "U07_SCALE_UNIT_MISMATCH"
          },
          {
            "key": "C",
            "text": "1/12000",
            "trapCode": "U07_BAR_SCALE_READ_ERR"
          },
          {
            "key": "D",
            "text": "1/4000",
            "trapCode": null
          }
        ],
        "answer": "D",
        "explanation": {
          "examPurpose": "測驗將比例尺的「比」轉換為分數型態的「比值」（前項 ÷ 後項）。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：由第 (1) 小題可知比例尺的比是 1：4000。"
            },
            {
              "type": "text",
              "text": "第 2 步：比值 ＝ 前項 ÷ 後項 ＝ 1 ÷ 4000 ＝ 1/4000。"
            },
            {
              "type": "eq",
              "expr": "1 ÷ 4000 ＝ 1/4000",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：比值為 1/4000。"
            }
          ],
          "insight": "比寫作 1：4000，比值就寫作分數 1/4000！",
          "distractorAnalysis": {
            "B": "忘記把公尺換成公分，錯寫為 1/40。",
            "C": "未先除以 3 格，錯寫為 1/12000。",
            "A": "前項後項顛倒，寫成了 4000 ÷ 1 ＝ 4000。"
          }
        },
        "check": {
          "expr": "1 / (120 * 100 / 3)",
          "expect": "1/4000"
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "比例尺（比） ＝ 圖上長度：實際長度（同單位）",
        "比例尺（比值） ＝ 圖上長度 ÷ 實際長度"
      ],
      "conceptCompare": "解線段比例尺兩步驟：一、數格數求「1 公分 ＝ 幾公尺」；二、乘以 100（或 100000）換成「公分」，千萬不可跳過統一單位！",
      "examVariations": "題目有時也會問「如果地圖上兩地距離 5 公分，實際距離是幾公尺？」可直接用 5 × 40 ＝ 200 公尺。"
    }
  },
  {
    "id": "EX2-DAHUA-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量與比較量",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第9題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "9. 阿嫻的體重是阿融的 0.84 倍，用最簡整數比表示阿嫻與阿融的體重關係是（　　）",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "21：25",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "25：21",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "84：100",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "42：50",
        "trapCode": "U05_CALC_SLIP"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "explanation": {
      "examPurpose": "測驗將小數倍數關係轉換為兩量的最簡整數比。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以阿融的體重為基準量 1，則阿嫻的體重是 0.84。"
        },
        {
          "type": "text",
          "text": "第 2 步：寫出阿嫻：阿融 ＝ 0.84：1，兩項同乘以 100 化為整數比 84：100。"
        },
        {
          "type": "text",
          "text": "第 3 步：找出 84 和 100 的最大公因數 4，兩項同除以 4 化為最簡整數比："
        },
        {
          "type": "eq",
          "expr": "84 ÷ 4 ＝ 21",
          "unit": ""
        },
        {
          "type": "eq",
          "expr": "100 ÷ 4 ＝ 25",
          "unit": ""
        },
        {
          "type": "answer",
          "text": "答：阿嫻與阿融的體重關係是 21：25。"
        }
      ],
      "insight": "0.84 ＝ 84/100 ＝ 21/25，所以 阿嫻：阿融 ＝ 21：25！",
      "distractorAnalysis": {
        "B": "前後項順序寫反成「阿融：阿嫻 ＝ 25：21」。",
        "C": "只化成了整數比 84：100，忘記約分到「最簡」整數比！",
        "D": "只約分了 2，沒有約到最簡整數比。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比較量：基準量 ＝ 比值：1（再同時擴分與約分至互質）"
      ],
      "conceptCompare": "看到「最簡整數比」，必須檢查前後項的最大公因數是不是 1！21 和 25 互質，才算最簡。",
      "examVariations": "若改問「阿融和阿嫻的體重比」，順序反過來就是 25：21。"
    },
    "check": {
      "expr": "84 / 100",
      "expect": "21/25"
    }
  },
  {
    "id": "EX2-DAHUA-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與比較量的和",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第10題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "10. 阿傑到日本料理店用餐，點了 1280 元的餐點。結帳時，餐廳加收一成服務費，阿傑要付多少元？（　　）元",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "1290 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "B",
        "text": "1408 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "128 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "1152 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗生活情境中「加收一成（＋10%）」的基準量與比較量和計算。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：一成 ＝ 10% ＝ 0.1。加收一成服務費，代表總價是餐點原價的 1 ＋ 0.1 ＝ 1.1 倍。"
        },
        {
          "type": "eq",
          "expr": "1280 × (1 ＋ 0.1) ＝ 1408",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：阿傑要付 1408 元。"
        }
      ],
      "insight": "也可以先算服務費 1280 × 10% ＝ 128 元，再加回原價 1280 ＋ 128 ＝ 1408 元！",
      "distractorAnalysis": {
        "C": "只算了服務費 128 元，忘記加上餐點原價 1280 元。",
        "D": "誤把加收一成算成打九折（1280 − 128 ＝ 1152 元）。",
        "A": "誤把「一成」當成加 10 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "加收一成後總價 ＝ 原價 × (1 ＋ 10%) ＝ 原價 × 1.1"
      ],
      "conceptCompare": "「加一成」是乘以 1.1（變貴）；「打一折」是乘以 0.1，「減一成（九折）」是乘以 0.9。",
      "examVariations": "若改問「若阿傑最後付了 1408 元（含一成服務費），請問未加服務費前餐點原價幾元？」則為 1408 ÷ 1.1 ＝ 1280 元。"
    },
    "check": {
      "expr": "1280 * (1 + 10%)",
      "expect": "1408"
    }
  },
  {
    "id": "EX2-DAHUA-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "放大圖與縮小圖的繪製與計算",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第11題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "11. 有一幅長 1.2 公尺、寬 800 公分的大型海報，小珮用電腦做出這張海報的 1/100 倍縮小圖，縮小圖的長是（　　）公分",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "0.012 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "12 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "1.2 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "8 公分",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗縮小圖計算前必須先將「公尺」統一換算為「公分」，並準確對應題目所問的「長」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目問縮小圖的「長」（單位是公分），先把海報的長 1.2 公尺換成公分："
        },
        {
          "type": "eq",
          "expr": "1.2 × 100 ＝ 120",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：做出 1/100 倍縮小圖，長也變成原來的 1/100 倍："
        },
        {
          "type": "eq",
          "expr": "120 × 1/100 ＝ 1.2",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：縮小圖的長是 1.2 公分。"
        }
      ],
      "insight": "1.2 公尺 ＝ 120 公分，再縮小 1/100 倍剛好又變回 1.2 公分！別被多餘的「寬 800 公分」騙了！",
      "distractorAnalysis": {
        "D": "拿錯成海報的「寬 800 公分」去算（800 × 1/100 ＝ 8 公分）。",
        "A": "忘記先把 1.2 公尺換成公分，直接將 1.2 ÷ 100 算出 0.012。",
        "B": "小數點少移了一位。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "縮小圖邊長 ＝ 原圖對應邊長 × 縮小倍率（先統一單位）"
      ],
      "conceptCompare": "「1.2 公尺」縮小 1/100 倍，因為 1 公尺 ＝ 100 公分，數值剛好變成「1.2 公分」！",
      "examVariations": "若改問「縮小圖的面積是幾平方公分？」，縮小圖長 1.2 公分、寬 8 公分，面積 ＝ 1.2 × 8 ＝ 9.6 平方公分。"
    },
    "check": {
      "expr": "1.2 * 100 / 100",
      "expect": "1.2"
    }
  },
  {
    "id": "EX2-DAHUA-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際距離",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 二、填填看 第12題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "12. 在比例尺 1/4000000 的地圖上，國道 3 號長 11 公分，實際長是多少公里？（　　）公里",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "44 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "4400 公里",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "110 公里",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "440 公里",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗大比例尺地圖的實際距離計算與公分換算成公里的進位。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1/4000000 表示「圖上 1 公分 ＝ 實際 4000000 公分」。先算出實際公分數："
        },
        {
          "type": "eq",
          "expr": "11 × 4000000 ＝ 44000000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：1 公里 ＝ 1000 公尺 ＝ 100000 公分，將公分換算成公里（去掉 5 個 0）："
        },
        {
          "type": "eq",
          "expr": "44000000 ÷ 100000 ＝ 440",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：實際長是 440 公里。"
        }
      ],
      "insight": "先記住「1 公里 ＝ 100000 公分（5 個 0）」！4000000 公分去掉 5 個 0 就是 40 公里，11 × 40 ＝ 440 公里！",
      "distractorAnalysis": {
        "A": "單位換算多去掉了一個 0（誤除以 1000000），算出 44 公里。",
        "B": "只去掉了 4 個 0，算出 4400 公里（臺灣全長都沒這麼長！）。",
        "C": "乘法或數字讀取錯誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "1 公里 ＝ 100000 公分（去掉 5 個 0）"
      ],
      "conceptCompare": "遇到好多個 0 的比例尺，先把「1 公分對應幾公里」換出來（4000000 公分 ＝ 40 公里），再乘 11 公分就不會數錯 0！",
      "examVariations": "也可以利用生活常識驗算：國道 3 號從基隆到屏東大約 400 多公里，440 公里完全合理！"
    },
    "check": {
      "expr": "11 * 4000000 / 100000",
      "expect": "440"
    }
  },
  {
    "id": "EX2-DAHUA-16",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 三、算算看畫畫看 第1題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "1. 請算出塗色部分的周長。單位：公分",
    "stemImage": "images/exams/EXAM_MID2/crop_dahua_calc1_petal.png",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p1.png",
    "options": [
      {
        "key": "A",
        "text": "41.12 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "57.12 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "C",
        "text": "28.56 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "25.12 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗複合圖形周長的空間拆解能力：分辨「外圍實線邊界」與「內部虛線輔助線」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：用手指沿著塗色部分的最外圍描一圈，外圍邊界包含「4 段 1/4 圓弧」和「4 條伸出去的直線半徑」，中間虛線正方形的 4 條邊在圖形內部不算周長。"
        },
        {
          "type": "text",
          "text": "第 2 步：4 個半徑 4 公分的 1/4 圓弧，剛好拼成 1 個半徑 4 公分的完整圓周長："
        },
        {
          "type": "eq",
          "expr": "4 × 2 × 3.14 ＝ 25.12",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：再加上外圍 4 條長度各為 4 公分的直線邊："
        },
        {
          "type": "eq",
          "expr": "25.12 ＋ 4 × 4 ＝ 41.12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 41.12 公分。"
        }
      ],
      "insight": "周長只算「最外圍一圈」！4 個 1/4 圓弧 ＝ 1 個整圓（25.12），再加上外面 4 根刺出的半徑（16）＝ 41.12 公分！",
      "distractorAnalysis": {
        "D": "只算了 4 個 1/4 圓弧的長度 25.12 公分，漏算外圍 4 條直線半徑！",
        "B": "把裡面虛線正方形的 4 條邊（16 公分）也多算進周長裡（25.12 ＋ 32 ＝ 57.12）。",
        "C": "誤把半徑 4 公分當成直徑來算弧長（4 × 3.14 ＋ 16 ＝ 28.56）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "塗色周長 ＝ 1 個完整圓周長（半徑 4 公分） ＋ 4 條外圍半徑"
      ],
      "conceptCompare": "遇到複合圖形周長，一定要先用筆「沿最外圈描邊」，只把實線外框算進來，裡面重疊或虛線都不能加！",
      "examVariations": "若中間正方形邊長改為 6 公分，則周長 ＝ 6 × 2 × 3.14 ＋ 6 × 4 ＝ 37.68 ＋ 24 ＝ 61.68 公分。"
    },
    "check": {
      "expr": "4 * 2 * 3.14 + 4 * 4",
      "expect": "41.12"
    }
  },
  {
    "id": "EX2-DAHUA-17",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 三、算算看畫畫看 第2題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 6,
    "difficulty": 4,
    "questionType": "choice",
    "work": "lg",
    "question": "2. 請算出塗色部分的周長（單位：公分）",
    "stemImage": "images/exams/EXAM_MID2/crop_dahua_calc2_shade.png",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "50.84 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "42.84 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "49.12 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "D",
        "text": "34.84 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗正方形與圓形重疊複合圖形的外圍周長拆解（直線邊界＋ 3/4 圓弧長）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：正方形邊長 8 公分，圓心剛好在正方形的直角頂點上，露出圓外的邊長是 4 公分，所以圓的半徑 ＝ 8 − 4 ＝ 4 公分。"
        },
        {
          "type": "text",
          "text": "第 2 步：正方形的直角是 90 度，所以圓被擋住 1/4 圓，露出外圍的圓弧是 3/4 圓（360 − 90 ＝ 270 度）："
        },
        {
          "type": "eq",
          "expr": "4 × 2 × 3.14 × 3/4 ＝ 18.84",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：數一數外圍所有實線直線邊：左側 2 條完整正方形邊（8 ＋ 8）和右側露出圓外的 2 段邊（4 ＋ 4）："
        },
        {
          "type": "eq",
          "expr": "8 × 2 ＋ 4 × 2 ＝ 24",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 4 步：把弧長和外圍直線段相加："
        },
        {
          "type": "eq",
          "expr": "18.84 ＋ 24 ＝ 42.84",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 42.84 公分。"
        }
      ],
      "insight": "圓心在正方形直角上 ➔ 外面弧長就是 3/4 圓（18.84 公分），加上外露的直線（8＋8＋4＋4 ＝ 24 公分）＝ 42.84 公分！",
      "distractorAnalysis": {
        "A": "多算了圓裡面的兩條虛線（4 ＋ 4 ＝ 8 公分），算成 32 ＋ 18.84 ＝ 50.84 公分。",
        "C": "誤把外面的圓弧當成一整個圓（4 × 2 × 3.14 ＝ 25.12），沒扣除重疊在正方形內的 1/4 圓弧！",
        "D": "漏加了兩段 4 公分的邊，只算 8 ＋ 8 ＋ 18.84 ＝ 34.84 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "外圍直線段 ＝ 完整兩邊 (8 × 2) ＋ 露出兩段 (4 × 2) ＝ 24 公分",
        "外圍圓弧 ＝ 半徑 4 公分的 3/4 圓弧 ＝ 18.84 公分"
      ],
      "conceptCompare": "算複合圖形周長，一定要先問自己兩個問題：1.「圓半徑是多少？」（8 − 4 ＝ 4）；2.「圓弧佔幾分之幾圓？」（正方形直角 90°，剩 270° 即 3/4 圓）。",
      "examVariations": "若題目將圓縮小到半徑只有 3 公分（露出 5 公分），則圓弧為 3 × 2 × 3.14 × 3/4 ＝ 14.13 公分，直線為 16 ＋ 10 ＝ 26 公分，總周長 40.13 公分。"
    },
    "check": {
      "expr": "4 * 2 * 3.14 * 3/4 + 8 * 2 + (8 - 4) * 2",
      "expect": "42.84"
    }
  },
  {
    "id": "EX2-DAHUA-18",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與圓心角",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 三、算算看畫畫看 第3題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "3. 下圖是一個圓心角 40° 的扇形，已知圓的直徑是 72 公分，這個扇形的弧長大約是多少公分？",
    "stemImage": "images/exams/EXAM_MID2/crop_dahua_calc3_sector.png",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "50.24 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "226.08 公分",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "C",
        "text": "25.12 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "97.12 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗扇形「弧長」公式，並區分題目問「弧長」與「周長」的差異。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓心角 40 度占整個圓（360 度）的幾分之幾：40/360 ＝ 1/9 圓。"
        },
        {
          "type": "text",
          "text": "第 2 步：扇形弧長 ＝ 直徑 × 3.14 × 幾分之幾圓："
        },
        {
          "type": "eq",
          "expr": "72 × 3.14 × 1/9 ＝ 8 × 3.14 ＝ 25.12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這個扇形的弧長大約是 25.12 公分。"
        }
      ],
      "insight": "先約分最省力！72 先乘 1/9 ＝ 8，再算 8 × 3.14 ＝ 25.12，注意題目只問「弧長」，不要多加兩條半徑！",
      "distractorAnalysis": {
        "D": "把「弧長」算成了「扇形周長」，多加了一條直徑 72 公分（25.12 ＋ 72 ＝ 97.12）。",
        "A": "誤把直徑 72 當成半徑來算（72 × 2 × 3.14 ÷ 9 ＝ 50.24）。",
        "B": "忘記乘以 40/360，算出整張圓形的圓周長 226.08 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長 ＝ 圓周長 × (圓心角 ÷ 360)"
      ],
      "conceptCompare": "先算整數約分（72 ÷ 9 ＝ 8），最後再乘 3.14，比先乘 3.14 再除以 9 快很多又不容易算錯！",
      "examVariations": "若題目改問「這個扇形的周長大約是多少公分？」，才要再加上兩條半徑（即直徑 72 公分）：25.12 ＋ 72 ＝ 97.12 公分。"
    },
    "check": {
      "expr": "72 * 3.14 * 40 / 360",
      "expect": "25.12"
    }
  },
  {
    "id": "EX2-DAHUA-19",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "放大圖與縮小圖的繪製與計算",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 三、算算看畫畫看 第4題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "4. 在下面方格紙上畫出四邊形 NOPQ 的 2 倍放大圖，並標示對應點 D、E、F、G。",
    "stemImage": "images/exams/EXAM_MID2/crop_dahua_draw4_grid.png",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "figureSvg": "<svg viewBox=\"0 0 380 380\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:360px;width:100%;background:#fff;border:1px solid #cbd5e1;border-radius:8px;\"><defs><pattern id=\"g20\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"1\"/></pattern></defs><rect x=\"30\" y=\"30\" width=\"320\" height=\"320\" fill=\"url(#g20)\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"30\" y=\"22\" font-size=\"11\" fill=\"#475569\">1公分</text><text x=\"2\" y=\"45\" font-size=\"11\" fill=\"#475569\">1公分</text><polygon points=\"90,50 50,90 150,90 130,50\" fill=\"rgba(59,130,246,0.14)\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"86\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">N</text><text x=\"38\" y=\"96\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">O</text><text x=\"154\" y=\"96\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">P</text><text x=\"128\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">Q</text><polygon points=\"190,170 110,250 310,250 270,170\" fill=\"rgba(16,185,129,0.16)\" stroke=\"#059669\" stroke-width=\"2.5\"/><circle cx=\"190\" cy=\"170\" r=\"3.5\" fill=\"#059669\"/><circle cx=\"110\" cy=\"250\" r=\"3.5\" fill=\"#059669\"/><circle cx=\"310\" cy=\"250\" r=\"3.5\" fill=\"#059669\"/><circle cx=\"270\" cy=\"170\" r=\"3.5\" fill=\"#059669\"/><text x=\"184\" y=\"162\" font-size=\"13\" font-weight=\"bold\" fill=\"#047857\">D</text><text x=\"96\" y=\"262\" font-size=\"13\" font-weight=\"bold\" fill=\"#047857\">E</text><text x=\"314\" y=\"262\" font-size=\"13\" font-weight=\"bold\" fill=\"#047857\">F</text><text x=\"272\" y=\"162\" font-size=\"13\" font-weight=\"bold\" fill=\"#047857\">G</text><text x=\"216\" y=\"164\" font-size=\"11\" fill=\"#047857\">4 公分</text><text x=\"185\" y=\"268\" font-size=\"11\" fill=\"#047857\">10 公分</text><line x1=\"190\" y1=\"170\" x2=\"190\" y2=\"250\" stroke=\"#059669\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><text x=\"194\" y=\"215\" font-size=\"11\" fill=\"#047857\">高 4 公分</text></svg>",
    "options": [
      {
        "key": "A",
        "text": "上底 DG 長 4 公分、下底 EF 長 5 公分、高 4 公分",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "B",
        "text": "上底 DG 長 2 公分、下底 EF 長 5 公分、高 2 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "上底 DG 長 8 公分、下底 EF 長 20 公分、高 8 公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "上底 DG 長 4 公分、下底 EF 長 10 公分、高 4 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗在方格紙上畫出梯形的 2 倍放大圖，利用水平格數與垂直格數的 2 倍精準定位對應頂點。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先數原圖梯形 NOPQ 的格數：上底 NQ ＝ 2 格、下底 OP ＝ 5 格、高 ＝ 2 格；從 N 到 O 要往左 2 格、往下 2 格；從 Q 到 P 要往右 1 格、往下 2 格。"
        },
        {
          "type": "text",
          "text": "第 2 步：畫 2 倍放大圖時，每段水平格數與垂直格數都要乘以 2："
        },
        {
          "type": "eq",
          "expr": "2 × 2 ＝ 4",
          "unit": "公分（上底與高）"
        },
        {
          "type": "eq",
          "expr": "5 × 2 ＝ 10",
          "unit": "公分（下底）"
        },
        {
          "type": "text",
          "text": "第 3 步：從點 D 出發，往右 4 格標出對應點 G；從點 D 往左 4 格、往下 4 格標出對應點 E；從點 E 往右 10 格標出對應點 F，最後依序連線即可。"
        },
        {
          "type": "answer",
          "text": "答：2 倍放大圖的上底 DG 長 4 公分、下底 EF 長 10 公分、高 4 公分。"
        }
      ],
      "insight": "斜邊不好用尺量格數，改數「往左幾格、往下幾格」，把每個方向移動格數都 × 2，點一定畫得超精準！",
      "distractorAnalysis": {
        "A": "下底 EF 忘記放大 2 倍，只畫了原來的 5 公分。",
        "B": "完全沒有放大，照抄了原圖的邊長尺寸。",
        "C": "誤把所有邊長乘以 4 倍（2 × 2 ＝ 4）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "2 倍放大圖 ➔ 水平格數 × 2、垂直格數 × 2、對應角大小完全不變"
      ],
      "conceptCompare": "放大圖的「邊長和高」變為 2 倍，但「每個內角度數」完全不變，且「面積」會變為 2 × 2 ＝ 4 倍！",
      "examVariations": "畫好後可以用面積驗算：原圖面積 (2 ＋ 5) × 2 ÷ 2 ＝ 7 平方公分；放大圖面積 (4 ＋ 10) × 4 ÷ 2 ＝ 28 平方公分，剛好是 4 倍！"
    },
    "check": {
      "expr": "5 * 2",
      "expect": "10",
      "extraChecks": [
        {
          "expr": "2 * 2",
          "expect": "4"
        }
      ]
    }
  },
  {
    "id": "EX2-DAHUA-20",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "平均分攤與移多補少",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第1題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "1. 小立和小清一起去公園野餐，小立負責買水果，他付了 360 元；小清負責買麵包，他付了 270 元。兩人野餐後要平均分攤費用，誰要給誰多少元？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "小清給小立 45 元",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "小立給小清 45 元",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "小清給小立 90 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "D",
        "text": "小立給小清 90 元",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗平均分攤費用的問題：先求總費用與每人平均應付金額，再判斷誰付太多、誰該補差額。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：算出兩人野餐一共花了多少元："
        },
        {
          "type": "eq",
          "expr": "360 ＋ 270 ＝ 630",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：平均分攤，每人應該付："
        },
        {
          "type": "eq",
          "expr": "630 ÷ 2 ＝ 315",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 3 步：小立已經付了 360 元（多付了），小清只付 270 元（少付了），所以小清要補差額給小立："
        },
        {
          "type": "eq",
          "expr": "315 − 270 ＝ 45",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：小清要給小立 45 元。"
        }
      ],
      "insight": "付比較少錢的小清（270 元）要補給付比較多錢的小立（360 元）；兩人相差 90 元，除以 2 就是 45 元！",
      "distractorAnalysis": {
        "B": "金額算對了，但把「誰給誰」的方向寫反了！",
        "C": "只算了兩人所付金額的差 360 − 270 ＝ 90 元，忘記除以 2，如果給 90 元就變成小清多付了。",
        "D": "方向寫反且忘記除以 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "每人應攤費用 ＝ 總費用 ÷ 人數",
        "補差額 ＝ 應攤費用 − 已付金額"
      ],
      "conceptCompare": "另一種解法：(360 − 270) ÷ 2 ＝ 45 元。算完後記得驗算：270 ＋ 45 ＝ 315 元，360 − 45 ＝ 315 元，兩邊一樣多才對！",
      "examVariations": "若改為 3 個人平均分攤，就要把總費用除以 3，再分別比對每人已付金額與平均值的差。"
    },
    "check": {
      "expr": "(360 + 270) / 2 - 270",
      "expect": "45"
    }
  },
  {
    "id": "EX2-DAHUA-21",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與比較量的和",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第2題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "2. 阿湖老師到書店買書，買小婦人這本書花了 300 元，買小說秘密花園的價格是小婦人的 1.5 倍，買加拿大名著綠屋安妮的價格是小婦人的 0.8 倍，阿湖老師總共花了多少元？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "690 元",
        "trapCode": "U05_SUM_FORGET_ONE"
      },
      {
        "key": "B",
        "text": "990 元",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "1020 元",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "750 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗三個量（一個基準量＋兩個比較量）合併計算總和的應用能力。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以小婦人的價格（300 元）為基準量 1，總共買了 3 本書，分別對應 1 倍、1.5 倍和 0.8 倍。"
        },
        {
          "type": "text",
          "text": "第 2 步：先算總共是基準量的幾倍："
        },
        {
          "type": "eq",
          "expr": "1 ＋ 1.5 ＋ 0.8 ＝ 3.3",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 3 步：算出總共花費的金額："
        },
        {
          "type": "eq",
          "expr": "300 × 3.3 ＝ 990",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：阿湖老師總共花了 990 元。"
        }
      ],
      "insight": "三本書一共花了 1 ＋ 1.5 ＋ 0.8 ＝ 3.3 個 300 元 ＝ 990 元！千萬別忘記小婦人自己的那 1 倍！",
      "distractorAnalysis": {
        "A": "只算了秘密花園（450 元）加上綠屋安妮（240 元）＝ 690 元，忘記加上小婦人自己的 300 元！",
        "C": "倍數相加時誤把 1 ＋ 1.5 ＋ 0.8 算成 3.4。",
        "D": "只算了小婦人與秘密花園兩本書（300 ＋ 450 ＝ 750 元）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "總金額 ＝ 基準量 × (1 ＋ 倍數甲 ＋ 倍數乙)"
      ],
      "conceptCompare": "也可以分開算再相加：300 ＋ 450 ＋ 240 ＝ 990 元，兩種做法都很清楚。",
      "examVariations": "若改問「買秘密花園比買綠屋安妮貴多少元？」則為 300 × (1.5 − 0.8) ＝ 210 元。"
    },
    "check": {
      "expr": "300 * (1 + 1.5 + 0.8)",
      "expect": "990"
    }
  },
  {
    "id": "EX2-DAHUA-22",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "基準量與比較量的和",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第3題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "3. 畢業季到來，一束香水百合的價錢上漲了四成。如果一束香水百合價錢未上漲前是 450 元，漲價後買 2 束共要多少元？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "630 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "360 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "1260 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "540 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗生活百分率「上漲四成（＋40%）」的總價計算，並注意最後購買數量為 2 束。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：上漲四成就是增加 40%（0.4），漲價後每束價格是原價的 1 ＋ 0.4 ＝ 1.4 倍："
        },
        {
          "type": "eq",
          "expr": "450 × (1 ＋ 0.4) ＝ 630",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：買 2 束共要付的金額："
        },
        {
          "type": "eq",
          "expr": "630 × 2 ＝ 1260",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：漲價後買 2 束共要 1260 元。"
        }
      ],
      "insight": "1 束漲價後變 630 元，題目問的是買「2 束」，所以 630 × 2 ＝ 1260 元！",
      "distractorAnalysis": {
        "A": "只算出買 1 束的價格 630 元，忘記乘以 2 束！",
        "B": "只算出了「上漲的那四成金額」（450 × 0.4 × 2 ＝ 360 元），忘記加回原本的價錢。",
        "D": "誤把上漲四成算成減少四成（450 × 0.6 × 2 ＝ 540 元）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "漲價四成後的單價 ＝ 原價 × (1 ＋ 40%)",
        "總價 ＝ 單價 × 數量"
      ],
      "conceptCompare": "「上漲四成」是 × 1.4；「減價四成（打六折）」是 × 0.6；「打四折」才是 × 0.4！",
      "examVariations": "若題目改說「打八折後買 2 束」，就是 450 × 0.8 × 2 ＝ 720 元。"
    },
    "check": {
      "expr": "450 * (1 + 40%) * 2",
      "expect": "1260"
    }
  },
  {
    "id": "EX2-DAHUA-23",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際距離",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第4題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "4. 室內設計圖裡兒童房的長 300 公分，在比例尺 1/60 的平面圖上長多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "50 公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "18000 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "6 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "5 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗已知實際長度與比例尺，計算平面圖上的縮圖長度。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：已知實際長 300 公分，求 1/60 縮圖上的長度，單位已經都是公分，直接相乘（或除以 60）："
        },
        {
          "type": "eq",
          "expr": "300 × 1/60 ＝ 5",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：在平面圖上長 5 公分。"
        }
      ],
      "insight": "圖上長度 ＝ 實際長度 × 比例尺！300 公分縮小成 1/60 ＝ 5 公分。",
      "distractorAnalysis": {
        "A": "除法計算多留了一個 0，算出 50 公分。",
        "B": "乘除搞反！誤把 300 乘以 60 算出 18000 公分，圖紙比房子還要大！",
        "C": "除法計算失誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上長度 ＝ 實際長度 × 比例尺"
      ],
      "conceptCompare": "求「圖上」長度一定比實際小（乘 1/60）；求「實際」長度一定比圖上大（乘 60）。用常理檢查大小就不會乘除寫反！",
      "examVariations": "若題目給的實際長是「3 公尺」，必須先換成 300 公分再除以 60。"
    },
    "check": {
      "expr": "300 * 1/60",
      "expect": "5"
    }
  },
  {
    "id": "EX2-DAHUA-24",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第5題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 4,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "5. 阿葳要準備禮物，買了 25 元和 35 元的螢光筆共 30 枝，總共花了 950 元。這兩種螢光筆的數量相差幾枝？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "10 枝",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "5 枝",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "15 枝",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "20 枝",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗假設法（雞兔問題變形）求兩種單價商品的數量，並進一步求兩者數量之差。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：假設 30 枝全部買 25 元的螢光筆，總價是："
        },
        {
          "type": "eq",
          "expr": "25 × 30 ＝ 750",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：比實際花的 950 元少了 950 − 750 ＝ 200 元；每換 1 枝 35 元的多 35 − 25 ＝ 10 元，所以 35 元的有："
        },
        {
          "type": "eq",
          "expr": "(950 − 750) ÷ (35 − 25) ＝ 20",
          "unit": "枝"
        },
        {
          "type": "text",
          "text": "第 3 步：算出 25 元的數量，再求兩種筆相差幾枝："
        },
        {
          "type": "eq",
          "expr": "30 − 20 ＝ 10",
          "unit": "枝"
        },
        {
          "type": "eq",
          "expr": "20 − 10 ＝ 10",
          "unit": "枝"
        },
        {
          "type": "answer",
          "text": "答：這兩種螢光筆的數量相差 10 枝。"
        }
      ],
      "insight": "算出 35 元有 20 枝、25 元有 10 枝後，看清楚最後問「相差幾枝」：20 − 10 ＝ 10 枝！",
      "distractorAnalysis": {
        "D": "算出 35 元螢光筆有 20 枝後就直接作答，忘記再求兩者的數量差！",
        "B": "總差額或單枝差價除法計算錯誤。",
        "C": "誤以為兩種筆各買一半 15 枝。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "高價數量 ＝ (總金額 − 低價 × 總枝數) ÷ (高價 − 低價)"
      ],
      "conceptCompare": "寫完雞兔問題一定要驗算總金額：35 × 20 ＋ 25 × 10 ＝ 700 ＋ 250 ＝ 950 元，完全符合題意！",
      "examVariations": "若最後改問「買 25 元的螢光筆花了多少元？」，答案則為 25 × 10 ＝ 250 元。"
    },
    "check": {
      "expr": "(950 - 25 * 30) / (35 - 25) - (30 - (950 - 25 * 30) / (35 - 25))",
      "expect": "10"
    }
  },
  {
    "id": "EX2-DAHUA-25",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與圓心角",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第6題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "6. 桌上有一張半徑長 10 公分，圓心角是 270° 的扇形卡紙。這張卡紙的周長大約是幾公分？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "47.1 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "67.1 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "57.1 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "D",
        "text": "33.55 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "B",
    "explanation": {
      "examPurpose": "測驗扇形周長公式：圓弧長加上兩條直線半徑。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圓心角 270 度占全圓的 270/360 ＝ 3/4 圓。先算扇形的弧長（半徑 10 公分 ➔ 直徑 20 公分）："
        },
        {
          "type": "eq",
          "expr": "10 × 2 × 3.14 × 3/4 ＝ 47.1",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：扇形卡紙周長還要加上兩條直線半徑（10 ＋ 10 ＝ 20 公分）："
        },
        {
          "type": "eq",
          "expr": "47.1 ＋ 10 × 2 ＝ 67.1",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這張卡紙的周長大約是 67.1 公分。"
        }
      ],
      "insight": "扇形周長永遠有三段：1 段彎彎的弧長（47.1）＋ 2 條直直的半徑（20）＝ 67.1 公分！",
      "distractorAnalysis": {
        "A": "只算了弧長 47.1 公分，忘記加上兩條半徑 20 公分（最高頻錯法！）。",
        "C": "只加了「1 條」半徑 10 公分（47.1 ＋ 10 ＝ 57.1 公分）。",
        "D": "誤把半徑 10 公分當成直徑來算弧長（10 × 3.14 × 3/4 ＋ 10 ＝ 33.55 公分）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 弧長 ＋ 半徑 × 2"
      ],
      "conceptCompare": "「扇形弧長」只有曲線部分；「扇形周長」一定要把兩條半徑加進來，就像拿剪刀沿整張卡紙外圍繞一圈！",
      "examVariations": "若圓心角改為 90°（1/4 圓），則周長為 10 × 2 × 3.14 × 1/4 ＋ 20 ＝ 15.7 ＋ 20 ＝ 35.7 公分。"
    },
    "check": {
      "expr": "10 * 2 * 3.14 * 270 / 360 + 10 * 2",
      "expect": "67.1"
    }
  },
  {
    "id": "EX2-DAHUA-26",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第7題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "7. 青青農場養了鴕鳥和綿羊一共 24 隻，鴕鳥和綿羊一共有 76 隻腳，鴕鳥有幾隻？綿羊有幾隻？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "鴕鳥 12 隻、綿羊 12 隻",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "鴕鳥 19 隻、綿羊 5 隻",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      },
      {
        "key": "C",
        "text": "鴕鳥 10 隻、綿羊 14 隻",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "鴕鳥 14 隻、綿羊 10 隻",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "C",
    "explanation": {
      "examPurpose": "測驗經典雞兔同籠問題：利用腳數差異假設法求出兩種動物各幾隻。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：鴕鳥每隻 2 隻腳，綿羊每隻 4 隻腳。假設 24 隻全部都是鴕鳥，共有腳："
        },
        {
          "type": "eq",
          "expr": "2 × 24 ＝ 48",
          "unit": "隻腳"
        },
        {
          "type": "text",
          "text": "第 2 步：少了 76 − 48 ＝ 28 隻腳；把 1 隻鴕鳥換成綿羊會多 4 − 2 ＝ 2 隻腳，所以綿羊有："
        },
        {
          "type": "eq",
          "expr": "(76 − 48) ÷ (4 − 2) ＝ 14",
          "unit": "隻"
        },
        {
          "type": "text",
          "text": "第 3 步：算出鴕鳥的隻數："
        },
        {
          "type": "eq",
          "expr": "24 − 14 ＝ 10",
          "unit": "隻"
        },
        {
          "type": "answer",
          "text": "答：鴕鳥有 10 隻，綿羊有 14 隻。"
        }
      ],
      "insight": "假設全部是「2 隻腳的鴕鳥」，算出來的就會是「4 隻腳的綿羊」（14 隻）；驗算：10×2 ＋ 14×4 ＝ 76 隻腳！",
      "distractorAnalysis": {
        "D": "把算出來的 14 隻誤當成原本假設的「鴕鳥」，兩種動物隻數寫反了！",
        "A": "誤以為兩種動物各一半 12 隻。",
        "B": "直接把 76 ÷ 4 ＝ 19 當成其中一種數量。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全是鴕鳥(2腳) ➔ 先求出的數量是綿羊(4腳)"
      ],
      "conceptCompare": "「假設誰，算出來就是另外一種！」這個口訣能防止 10 隻和 14 隻對調寫錯。",
      "examVariations": "若總隻數 24 隻改為 80 隻腳，則綿羊 ＝ (80 − 48) ÷ 2 ＝ 16 隻，鴕鳥 ＝ 8 隻。"
    },
    "check": {
      "expr": "24 - (76 - 2 * 24) / (4 - 2)",
      "expect": "10",
      "extraChecks": [
        {
          "expr": "(76 - 2 * 24) / (4 - 2)",
          "expect": "14"
        }
      ]
    }
  },
  {
    "id": "EX2-DAHUA-27",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與直徑關係",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第8題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "8. 小凱的模型車輪胎半徑 7 公分，一分鐘可以前進大約 439.6 公分，他的模型車輪胎一分鐘轉幾圈？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "20 圈",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "5 圈",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "100 圈",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "10 圈",
        "trapCode": null
      }
    ],
    "answer": "D",
    "explanation": {
      "examPurpose": "測驗輪子滾動問題：「滾動 1 圈的距離 ＝ 輪胎圓周長」，用總距離除以圓周長求圈數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：輪胎半徑 7 公分，先算出輪胎滾動 1 圈的長度（圓周長）："
        },
        {
          "type": "eq",
          "expr": "7 × 2 × 3.14 ＝ 43.96",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：一分鐘前進 439.6 公分，除以 1 圈的長度求出轉了幾圈："
        },
        {
          "type": "longdiv",
          "dividend": "439.6",
          "divisor": "43.96",
          "note": "除數 43.96 向右移 2 位變 4396，被除數 439.6 補 0 變 43960"
        },
        {
          "type": "eq",
          "expr": "439.6 ÷ 43.96 ＝ 10",
          "unit": "圈"
        },
        {
          "type": "answer",
          "text": "答：他的模型車輪胎一分鐘轉 10 圈。"
        }
      ],
      "insight": "輪胎轉 1 圈 ＝ 圓周長 43.96 公分，總距離 439.6 公分剛好是 10 倍，小數點右移 1 位就是 10 圈！",
      "distractorAnalysis": {
        "A": "忘記半徑要乘以 2 變直徑，只算 7 × 3.14 ＝ 21.98 公分，導致算出的圈數變成 20 圈！",
        "B": "誤多除以 2，算出 5 圈。",
        "C": "小數點多移動一位，錯算為 100 圈。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "車輪滾動距離 ＝ 輪胎圓周長 × 轉動圈數"
      ],
      "conceptCompare": "看到車輪轉圈題，第一步先確認題目給的是「半徑」還是「直徑」！這題給半徑 7 公分，一定要先 7 × 2 ＝ 14 公分。",
      "examVariations": "若題目改問「輪胎轉 25 圈會前進大約幾公分？」，就是 43.96 × 25 ＝ 1099 公分。"
    },
    "check": {
      "expr": "439.6 / (7 * 2 * 3.14)",
      "expect": "10"
    }
  },
  {
    "id": "EX2-DAHUA-28",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-3",
    "sectionName": "基準量與比較量的差",
    "school": "桃園市大華國小",
    "source": "大華國小 113上 期末評量 四、應用題 第9題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 5,
    "difficulty": 3,
    "questionType": "choice",
    "work": "lg",
    "question": "9. 圖書館裡藝術類書籍數量是哲學類書籍的 1 3/8 倍，藝術類書籍比哲學類書籍多 642 本，藝術類和哲學類書籍各有幾本？",
    "examPageImage": "images/exams/EXAM_MID2/dahua_p2.png",
    "options": [
      {
        "key": "A",
        "text": "藝術類 2354 本、哲學類 1712 本",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "藝術類 1712 本、哲學類 2354 本",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "C",
        "text": "藝術類 1108 本、哲學類 466 本",
        "trapCode": "U05_DIFF_FORGET_MINUS_ONE"
      },
      {
        "key": "D",
        "text": "藝術類 2354 本、哲學類 642 本",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "A",
    "explanation": {
      "examPurpose": "測驗分數倍數的差量問題：先求出基準量（哲學類），再求比較量（藝術類）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：以哲學類書籍為基準量 1，藝術類是 1 3/8 倍，兩類相差 1 3/8 − 1 ＝ 3/8 倍，剛好是 642 本。"
        },
        {
          "type": "eq",
          "expr": "1 3/8 − 1 ＝ 3/8",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：用差量 642 本除以 3/8，算出基準量哲學類書籍數量："
        },
        {
          "type": "eq",
          "expr": "642 ÷ 3/8 ＝ 642 × 8/3 ＝ 1712",
          "unit": "本"
        },
        {
          "type": "text",
          "text": "第 3 步：藝術類比哲學類多 642 本，算出藝術類書籍數量："
        },
        {
          "type": "eq",
          "expr": "1712 ＋ 642 ＝ 2354",
          "unit": "本"
        },
        {
          "type": "answer",
          "text": "答：藝術類書籍有 2354 本，哲學類書籍有 1712 本。"
        }
      ],
      "insight": "1 3/8 倍比 1 倍多出「3/8 倍」，這 3/8 倍就是多出來的 642 本！先算 642 ÷ 3/8 ＝ 1712（哲學類），再加 642 ＝ 2354（藝術類）！",
      "distractorAnalysis": {
        "B": "把基準量「哲學類」和比較量「藝術類」對調了！藝術類比較多，應該比哲學類多 642 本才對。",
        "C": "忘記先減去基準量 1 倍，直接拿 642 去除以 1 3/8。",
        "D": "誤把兩者的差額 642 本直接當成哲學類書籍的本數。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 兩數差 ÷ (倍數 − 1)",
        "比較量 ＝ 基準量 ＋ 兩數差"
      ],
      "conceptCompare": "算完一定要檢查兩件事：1. 藝術類減哲學類是不是 642（2354 − 1712 ＝ 642）；2. 藝術類是不是比較多的那一邊！",
      "examVariations": "若題目改說「藝術類和哲學類共有 4066 本」，則哲學類 ＝ 4066 ÷ (1 ＋ 1 3/8) ＝ 4066 ÷ 19/8 ＝ 1712 本。"
    },
    "check": {
      "expr": "642 / (1 3/8 - 1) + 642",
      "expect": "2354",
      "extraChecks": [
        {
          "expr": "642 / (1 3/8 - 1)",
          "expect": "1712"
        }
      ]
    }
  },
  {
    "id": "EX2-SHIHU113-01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與圓周率",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第1題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "1. 下列關於圓周長和圓周率的關係，何者錯誤？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "直徑 × 圓周率 ＝ 圓周長",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "B",
        "text": "圓周長 ÷ 直徑 ＝ 圓周率",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      },
      {
        "key": "C",
        "text": "直徑 × 圓周長 ＝ 圓周率",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "圓周長 ÷ 圓周率 ＝ 直徑",
        "trapCode": "U06_PI_CONSTANT_MYTH"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗對圓周長、直徑與圓周率三者乘除互換關係的理解。",
      "steps": [
        {
          "type": "text",
          "text": "圓周率是「圓周長」除以「直徑」的比值（大約 3.14），所以三者基本關係為："
        },
        {
          "type": "eq",
          "expr": "圓周長 = 直徑 × 圓周率",
          "unit": ""
        },
        {
          "type": "text",
          "text": "由乘除互逆可知：「圓周長 ÷ 直徑 ＝ 圓周率」與「圓周長 ÷ 圓周率 ＝ 直徑」都正確；只有「直徑 × 圓周長 ＝ 圓周率」是錯誤的。"
        },
        {
          "type": "answer",
          "text": "答：選項 C（直徑 × 圓周長 ＝ 圓周率）錯誤。"
        }
      ],
      "insight": "圓周長是直徑的圓周率倍（大約 3.14 倍），所以圓周長最大，直徑乘圓周率才會等於圓周長。",
      "distractorAnalysis": {
        "A": "這是正確的圓周長公式，題目問的是「何者錯誤」。",
        "B": "這是圓周率的定義式，敘述正確。",
        "D": "已知圓周長反求直徑確實要除以圓周率，敘述正確。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圓周長 ＝ 直徑 × 圓周率",
        "圓周率 ＝ 圓周長 ÷ 直徑（固定約 3.14）"
      ],
      "conceptCompare": "乘除互逆時，最大量「圓周長」永遠是被除數，或放在等號單獨那一邊；「直徑」與「圓周率」才是相乘的兩個數。",
      "examVariations": "常改考是非題：「大圓的圓周率比小圓的圓周率大」，答案是錯，因為所有圓的圓周率都一樣。"
    }
  },
  {
    "id": "EX2-SHIHU113-02",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的性質",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第2題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "2. 將一個正方形影印放大 2 倍後，放大圖的其中一個角是幾度？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "50 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "B",
        "text": "90 度",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "100 度",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "D",
        "text": "120 度",
        "trapCode": "U07_ANGLE_SCALED"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "90",
      "expect": "90"
    },
    "explanation": {
      "examPurpose": "測驗圖形放大或縮小時，對應角角度完全不變的核心觀念。",
      "steps": [
        {
          "type": "text",
          "text": "正方形原本的四個角都是直角，也就是 90 度。"
        },
        {
          "type": "text",
          "text": "圖形放大 2 倍時，邊長會變成原來的 2 倍，但「對應角」的大小完全不會改變，仍然是 90 度。"
        },
        {
          "type": "answer",
          "text": "答：放大圖的其中一個角是 90 度。"
        }
      ],
      "insight": "放大或縮小圖「只變邊長、不變角度」；正方形放大後還是正方形，每個角依然是 90 度！",
      "distractorAnalysis": {
        "A": "誤以為角度會隨比例改變，且未察覺正方形內角為 90 度。",
        "C": "誤把角度當成邊長去放大或拼湊數字。",
        "D": "錯把正方形的直角 90 度記成鈍角 120 度。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大圖與縮小圖的「對應角相等」，角度絕對不會乘以或除以倍數！"
      ],
      "conceptCompare": "邊長、周長跟著倍數變（乘 2）；面積跟著「倍數 × 倍數」變（乘 4）；只有「角度」永遠乘 1 不變。",
      "examVariations": "常改問：「將一個 40 度的角放大 3 倍後是幾度？」陷阱選項會放 120 度，正解依然是 40 度！"
    }
  },
  {
    "id": "EX2-SHIHU113-03",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的性質",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第3題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "3. 下列關於放大圖和原圖的關係，哪一個敘述正確？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "原圖面積會比放大圖的面積小。",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "放大圖的角和原圖的對應角相比，放大圖的角比較大。",
        "trapCode": "U07_ANGLE_SCALED"
      },
      {
        "key": "C",
        "text": "原圖的邊長和放大圖的對應邊一樣長。",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "D",
        "text": "原圖的周長和放大圖的周長一樣。",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "比較原圖與放大圖在面積、對應角、對應邊長與周長四項性質的變化。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：圖形放大後，各邊長會依放大倍率變長，因此周長變大、面積也變大，原圖面積確實比放大圖小。"
        },
        {
          "type": "text",
          "text": "第 2 步：檢查其餘選項，對應角會「一樣大」（不是比較大），對應邊與周長都會變長（不會一樣）。"
        },
        {
          "type": "answer",
          "text": "答：選項 A（原圖面積會比放大圖的面積小。）正確。"
        }
      ],
      "insight": "放大圖「角度不變，邊長、周長、面積通通變大」！",
      "distractorAnalysis": {
        "B": "對應角永遠一樣大，放大圖的角不會比較大。",
        "C": "放大圖的對應邊會等比例變長，不會和原圖一樣長。",
        "D": "邊長都變長了，加起來的周長當然也會變大。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大圖：對應角相等、對應邊成比例放大、周長同倍放大、面積平方倍放大。"
      ],
      "conceptCompare": "「形狀相同、大小不同」叫做相似（放大或縮小圖）：角度決定形狀，邊長決定大小。",
      "examVariations": "若改為「縮小圖」，則是原圖面積比縮小圖大，對應角一樣相等。"
    }
  },
  {
    "id": "EX2-SHIHU113-04",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的性質",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第4題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "4. 四邊形 EFGH 是四邊形 ABCD 的放大圖，如下圖，∠E 的角度是幾度？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_q4_quad.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "80°",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "B",
        "text": "85°",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "90°",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "95°",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "360 - (120 + 80 + 75)",
      "expect": "85"
    },
    "explanation": {
      "examPurpose": "結合「對應角相等」與「四邊形內角和 360°」求出未知對應角。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：由對應頂點順序 E 對 A、F 對 B、G 對 C、H 對 D，可知對應角相等：∠C ＝ ∠G ＝ 80°。"
        },
        {
          "type": "text",
          "text": "第 2 步：在四邊形 ABCD 中，已知角 B 為 120°、角 C 為 80°、角 D 為 75°，用四邊形內角和 360° 扣掉三個角即可求出角 A："
        },
        {
          "type": "eq",
          "expr": "360 − (120 + 80 + 75) = 85",
          "unit": "度"
        },
        {
          "type": "text",
          "text": "第 3 步：因為角 E 與角 A 是對應角，所以兩者角度相等，都是 85°。"
        },
        {
          "type": "answer",
          "text": "答：∠E 的角度是 85°。"
        }
      ],
      "insight": "先找齊兩個圖的對應角（把 ∠G ＝ 80° 搬回 ∠C），再用四邊形內角和 360° 一減就秒殺！",
      "distractorAnalysis": {
        "A": "誤把隔壁對應的 ∠G ＝ 80° 直接當作 ∠E 的角度。",
        "C": "計算 360 − 275 時十位數進退位失誤算成 90°。",
        "D": "減法 360 − (120 ＋ 80 ＋ 75) 時誤將 275 算成 265，得到 95°。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "四邊形內角和 ＝ 360°",
        "放大圖對應角完全相等（無須看邊長 3 公分或 8 公分）"
      ],
      "conceptCompare": "圖上給的邊長（3 公分、3.5 公分、8 公分、9 公分）是來測試倍率或干擾視線的，求角度只需要看「對應角」與「內角和」！",
      "examVariations": "若改問邊 CD 的長度，就要用 GH（9 公分）除以放大倍率（8 ÷ 3.5 或題目另給整數倍率）來算。"
    }
  },
  {
    "id": "EX2-SHIHU113-05",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第5題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "5. 塗色部分的周長大約是幾公分？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_q5_shade.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "37.68 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      },
      {
        "key": "B",
        "text": "61.68 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "30.84 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "42.84 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "12 * 2 * 3.14 / 2 + 12 * 2",
      "expect": "61.68"
    },
    "explanation": {
      "examPurpose": "測驗複合圖形周長拆解能力：用手指沿塗色外圍描一圈，確認由「2 個 1/4 圓弧」與「2 條直線段」組成。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：沿塗色邊界繞一圈，發現有兩段半徑都是 12 公分的 1/4 圓弧，合起來剛好是一個 1/2 圓的弧長："
        },
        {
          "type": "eq",
          "expr": "12 × 2 × 3.14 ÷ 2 = 37.68",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：再加上底部 12 公分與頂部 12 公分這兩條直線邊長："
        },
        {
          "type": "eq",
          "expr": "37.68 + 12 × 2 = 61.68",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：塗色部分的周長大約是 61.68 公分。"
        }
      ],
      "insight": "算複合圖形周長先用螢光筆描外框：兩條弧合起來是半圓（37.68），再加上一上一下兩條 12 公分！",
      "distractorAnalysis": {
        "A": "只算出了兩段圓弧合起來的長度 37.68 公分，忘記加上上下兩條 12 公分的直線！",
        "C": "誤把半徑 12 公分當成直徑來算半圓弧長（12 × 3.14 ÷ 2 ＋ 12 ＝ 30.84）。",
        "D": "把半徑 12 公分當直徑算圓弧 18.84 公分，再加上 24 公分得到 42.84 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "複合圖形周長 ＝ 所有外圍曲線弧長 ＋ 所有外圍直線段"
      ],
      "conceptCompare": "如果這題改問塗色部分的「面積」，把右邊 1/4 圓補到左邊空格，剛好變成一個邊長 12 公分的正方形（144 平方公分）；但問「周長」時不能直接平移面積，要一條一條把外框加起來！",
      "examVariations": "若正方形邊長改為 10 公分，則周長為 10 × 2 × 3.14 ÷ 2 ＋ 10 × 2 ＝ 51.4 公分。"
    }
  },
  {
    "id": "EX2-SHIHU113-06",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-3",
    "sectionName": "年齡問題",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第6題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "6. 嘉隆今年 12 歲，老師今年 31 歲，20 年後嘉隆和老師相差幾歲？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "12 歲",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "17 歲",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "19 歲",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "31 歲",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "31 - 12",
      "expect": "19"
    },
    "explanation": {
      "examPurpose": "測試年齡問題的核心不變量概念：「兩人的年齡差永遠不變」。",
      "steps": [
        {
          "type": "text",
          "text": "過了 20 年，嘉隆會長大 20 歲，老師也會同時長大 20 歲，所以兩人的年齡差距永遠和今年一樣！"
        },
        {
          "type": "eq",
          "expr": "31 − 12 = 19",
          "unit": "歲"
        },
        {
          "type": "answer",
          "text": "答：20 年後嘉隆和老師相差 19 歲。"
        }
      ],
      "insight": "你長 1 歲、我也長 1 歲，不管過幾年，「年齡差」永遠不會變！",
      "distractorAnalysis": {
        "A": "直接誤選了嘉隆今年的年齡 12 歲。",
        "B": "減法 31 − 12 退位時誤算成 17 歲。",
        "D": "直接誤選了老師今年的年齡 31 歲（或與 20 年後年齡混淆）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "不管幾年後或幾年前，兩人的「年齡差」永遠相等"
      ],
      "conceptCompare": "「年齡差」永遠不變；但「年齡和」每過 1 年會多 2 歲，20 年後兩人的年齡和會多 40 歲！",
      "examVariations": "常改問「20 年後兩人的年齡和是多少？」，算式為 (12 ＋ 20) ＋ (31 ＋ 20) ＝ 83 歲。"
    }
  },
  {
    "id": "EX2-SHIHU113-07",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長與圓心角",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第7題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "7. 小豪將一張半徑長 6 公分的圓形紙片，沿著兩條半徑剪成兩個扇形。剪完後其中一個扇形弧長是 15.7 公分，則另一個扇形的圓心角度數是多少？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "30 度",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "B",
        "text": "60 度",
        "trapCode": "U06_ANGLE_FRACTION_WRONG"
      },
      {
        "key": "C",
        "text": "105 度",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "210 度",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(6 * 2 * 3.14 - 15.7) / (6 * 2 * 3.14) * 360",
      "expect": "210"
    },
    "explanation": {
      "examPurpose": "從「弧長占全圓周長的比例」反推扇形圓心角，並注意題目問的是「另一個」扇形。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出整張圓形紙片的圓周長："
        },
        {
          "type": "eq",
          "expr": "6 × 2 × 3.14 = 37.68",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：算出另一個扇形的弧長："
        },
        {
          "type": "eq",
          "expr": "37.68 − 15.7 = 21.98",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：把弧長除以圓周率 3.14 看是幾倍的 3.14，再算出占全圓的幾分之幾（全圓 37.68 是 12 個 3.14，另一個扇形 21.98 是 7 個 3.14，也就是 7/12 圓）："
        },
        {
          "type": "eq",
          "expr": "21.98 ÷ 3.14 = 7",
          "unit": "個 3.14"
        },
        {
          "type": "longdiv",
          "dividend": "21.98",
          "divisor": "3.14",
          "mode": "exact",
          "note": "除數 3.14 往右移兩位變 314，被除數 21.98 變 2198，2198 ÷ 314 ＝ 7"
        },
        {
          "type": "eq",
          "expr": "360 × 7/12 = 210",
          "unit": "度"
        },
        {
          "type": "answer",
          "text": "答：另一個扇形的圓心角是 210 度。"
        }
      ],
      "insight": "看到 15.7 要立刻想到它是 3.14 的 5 倍！全部圓周長是 3.14 的 12 倍（6 × 2），扣掉 5 份剩下 7 份，就是 7/12 圓（210 度）！",
      "distractorAnalysis": {
        "A": "算成 1/12 圓的圓心角 30 度（1 份是 30 度，忘記乘以 7 份）。",
        "B": "誤將比率估算錯誤算成 1/6 圓（60 度）。",
        "C": "計算時少算直徑 2 倍或將 210 度誤折半成 105 度。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長 ÷ 圓周長 ＝ 扇形圓心角 ÷ 360°"
      ],
      "conceptCompare": "也可以先算出剪下來的那個扇形圓心角（15.7 ÷ 37.68 × 360 ＝ 150°），再用 360° − 150° ＝ 210°！",
      "examVariations": "若改問題目中「原本這一個扇形（弧長 15.7 公分）」的圓心角，答案則是 150 度。"
    }
  },
  {
    "id": "EX2-SHIHU113-08",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的周長",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第8題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "8. 甲圖是長 18 公分、寬 12 公分的長方形，乙圖是甲圖的 1/6 倍縮小圖，乙圖的周長是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "180 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "B",
        "text": "60 公分",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "C",
        "text": "10 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "5 公分",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(18 / 6 + 12 / 6) * 2",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗縮小圖各對應邊同比例縮短，並計算縮小圖周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：乙圖是甲圖的 1/6 倍縮小圖，先分別算出乙圖的長與寬："
        },
        {
          "type": "eq",
          "expr": "18 ÷ 6 = 3",
          "unit": "公分（乙的長）"
        },
        {
          "type": "eq",
          "expr": "12 ÷ 6 = 2",
          "unit": "公分（乙的寬）"
        },
        {
          "type": "text",
          "text": "第 2 步：代入長方形周長公式「(長 ＋ 寬) × 2」："
        },
        {
          "type": "eq",
          "expr": "(3 + 2) × 2 = 10",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：乙圖的周長是 10 公分。"
        }
      ],
      "insight": "也可以先算甲圖周長 (18 ＋ 12) × 2 ＝ 60 公分，周長直接乘以 1/6，一樣是 10 公分！",
      "distractorAnalysis": {
        "A": "忘記縮放倍率，或誤把 18 × 12 ÷ 6 算錯成 180（把面積或乘法搞混）。",
        "B": "算成了原本甲圖的周長 60 公分，忘記縮小成 1/6 倍。",
        "D": "只算了長 ＋ 寬（3 ＋ 2 ＝ 5 公分），忘記乘以 2 才是四條邊的周長！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "縮小圖周長 ＝ 原圖周長 × 縮小倍率"
      ],
      "conceptCompare": "周長只要乘以 1/6（60 × 1/6 ＝ 10）；但如果問「乙圖面積」，則要長和寬都變 1/6，面積會變原本的 1/36（216 ÷ 36 ＝ 6 平方公分）！",
      "examVariations": "常改問「乙圖的面積是多少平方公分？」，正解為 3 × 2 ＝ 6 平方公分。"
    }
  },
  {
    "id": "EX2-SHIHU113-09",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺的意義與表示法",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第9題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "9. 比例尺的圖示（每格長 1 公分，共 2 格標示 0、1、2 公尺）在地圖上表示什麼意思？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_q9_scale.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "地圖上長 1 公分，實際長是 1 公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "地圖上長 1 公尺，實際長是 1 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "地圖上長 1 公尺，實際長是 1 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "地圖上長 2 公尺，實際長是 1 公尺",
        "trapCode": "U07_BAR_SCALE_READ_ERR"
      }
    ],
    "answer": "A",
    "skipOptionNumMatch": true,
    "check": {
      "expr": "1",
      "expect": "1"
    },
    "explanation": {
      "examPurpose": "測驗讀懂線段比例尺「地圖上每 1 公分代表實際幾公尺（或幾公里）」的意義。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：地圖上的線段比例尺每一格通常都是「圖上 1 公分」。"
        },
        {
          "type": "text",
          "text": "第 2 步：觀察刻度從 0 到 1 旁邊寫著單位「公尺」，共有 2 格標到 2 公尺，表示地圖上 1 格（1 公分）代表實際長度 1 公尺。"
        },
        {
          "type": "answer",
          "text": "答：地圖上長 1 公分，實際長是 1 公尺。"
        }
      ],
      "insight": "線段比例尺「1 格 ＝ 圖上 1 公分」，上面的數字跟單位就是「實際距離」！",
      "distractorAnalysis": {
        "B": "把「地圖上長度」和「實際長度」的位置寫顛倒了。",
        "C": "地圖不可能長 1 公尺這麼大，混淆了圖上單位（公分）與實際單位（公尺）。",
        "D": "誤把整條 2 格的 2 公尺當成圖上長度，也沒分清圖上與實際單位。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上距離 ： 實際距離（圖上通常以「公分」為單位）"
      ],
      "conceptCompare": "這個線段比例尺是 1 公分代表 1 公尺（100 公分），換算成比就是 1：100。",
      "examVariations": "若題目改問「這個比例尺用比值表示是多少？」，答案為 1/100。"
    }
  },
  {
    "id": "EX2-SHIHU113-10",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題（假設法）",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第10題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "10. 農場裡的雞和豬一共有 40 隻，牠們一共有 94 隻腳，請問農場裡有幾隻雞？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "33 隻",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "28 隻",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "22 隻",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "18 隻",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(40 * 4 - 94) / (4 - 2)",
      "expect": "33"
    },
    "explanation": {
      "examPurpose": "使用「假設法」解決標準雞兔同籠問題，並確認最後求出的數量對應正確的動物。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：要求雞的隻數，先假設 40 隻全部都是豬（每隻 4 隻腳），算出總腳數："
        },
        {
          "type": "eq",
          "expr": "4 × 40 = 160",
          "unit": "隻腳"
        },
        {
          "type": "text",
          "text": "第 2 步：比實際的 94 隻腳多出了幾隻腳？"
        },
        {
          "type": "eq",
          "expr": "160 − 94 = 66",
          "unit": "隻腳"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 隻豬換成 1 隻雞（2 隻腳），腳數會減少 4 − 2 ＝ 2 隻，所以雞有："
        },
        {
          "type": "eq",
          "expr": "66 ÷ (4 − 2) = 33",
          "unit": "隻"
        },
        {
          "type": "answer",
          "text": "答：農場裡有 33 隻雞。"
        }
      ],
      "insight": "求雞就先全假設成豬，算出來的差除以 (4 − 2) 就直接是雞！驗算：33 × 2 ＋ 7 × 4 ＝ 66 ＋ 28 ＝ 94 隻腳。",
      "distractorAnalysis": {
        "B": "算出有 7 隻豬後，誤將 7 × 4 ＝ 28 隻腳當成雞的數量。",
        "C": "差值計算錯誤（如 160 − 94 誤算成 44 再除以 2）。",
        "D": "雞與豬的條件或假設步驟算亂導致隻數錯誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全部是腳多的（豬），（假設總腳數 − 實際總腳數）÷ 單隻腳差 ＝ 腳少的數量（雞）"
      ],
      "conceptCompare": "如果一開始全假設成雞（2 × 40 ＝ 80 隻腳），算出 (94 − 80) ÷ 2 ＝ 7 隻會是「豬」，記得還要用 40 − 7 ＝ 33 才是雞！",
      "examVariations": "常改寫成「2 元和 5 元硬幣共 40 個、合計 94 元」或「大車載 4 人、小車載 2 人」。"
    }
  },
  {
    "id": "EX2-SHIHU113-11",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "等量分組與差量問題",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第11題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "11. 炳坤家養的鴨和牛一樣多，牛腳比鴨腳多 16 隻，炳坤家養了幾頭牛？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "6 頭",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "8 頭",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "12 頭",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "16 頭",
        "trapCode": "U08_PENALTY_DIFF_ERR"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "16 / (4 - 2)",
      "expect": "8"
    },
    "explanation": {
      "examPurpose": "利用「一對一分組」觀念：數量一樣多時，把 1 頭牛和 1 隻鴨配成一組來算腳數差。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：因為鴨和牛一樣多，把「1 頭牛 ＋ 1 隻鴨」綁成一組，每一組裡牛腳比鴨腳多："
        },
        {
          "type": "eq",
          "expr": "4 − 2 = 2",
          "unit": "隻腳"
        },
        {
          "type": "text",
          "text": "第 2 步：全部牛腳比鴨腳多 16 隻，用總腳差除以每組腳差，算出共有幾組（就是幾頭牛）："
        },
        {
          "type": "eq",
          "expr": "16 ÷ 2 = 8",
          "unit": "頭"
        },
        {
          "type": "answer",
          "text": "答：炳坤家養了 8 頭牛。"
        }
      ],
      "insight": "兩樣東西數量一樣多時，「打包成一組」最快速！每組差 2 隻腳，差 16 隻腳就有 8 組。",
      "distractorAnalysis": {
        "A": "除數或被除數算錯，未能正確算出 16 ÷ 2。",
        "C": "誤把牛腳數或兩者數量相加混淆計算。",
        "D": "直接把題目給的「多 16 隻腳」當成「16 頭牛」，忘記除以每組腳差 2。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "數量相等時：組數 ＝ 總差量 ÷ 每組（1 對 1）的差量"
      ],
      "conceptCompare": "如果題目改成「鴨和牛共有 48 隻腳」，那就用總腳數除以每組腳和 (4 ＋ 2 ＝ 6)，48 ÷ 6 ＝ 8 頭牛！",
      "examVariations": "常改寫成「10 元和 5 元硬幣一樣多，10 元比 5 元多 35 元，各有幾個硬幣？」，解法相同：35 ÷ (10 − 5) ＝ 7 個。"
    }
  },
  {
    "id": "EX2-SHIHU113-12",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與滾動距離",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第12題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "12. 車的輪子半徑是 20 公分，沿直線前進滾了 25 圈，大約前進了幾公尺？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "3140 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "125.6 公尺",
        "trapCode": "U06_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "31.4 公尺",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "5 公尺",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "20 * 2 * 3.14 * 25 / 100",
      "expect": "31.4"
    },
    "explanation": {
      "examPurpose": "測驗「輪子滾動 1 圈 ＝ 1 個圓周長」，以及最後將「公分」換算成「公尺」的單位轉換。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：輪子半徑 20 公分，直徑為 20 × 2 ＝ 40 公分，滾 1 圈的距離（圓周長）為："
        },
        {
          "type": "eq",
          "expr": "20 × 2 × 3.14 = 125.6",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：滾了 25 圈，總共前進的公分數為："
        },
        {
          "type": "eq",
          "expr": "125.6 × 25 = 3140",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：題目問「幾公尺」，因為 1 公尺 ＝ 100 公分，所以除以 100："
        },
        {
          "type": "eq",
          "expr": "3140 ÷ 100 = 31.4",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：大約前進了 31.4 公尺。"
        }
      ],
      "insight": "看到「20 × 2 × 25 ＝ 1000」，先乘起來再乘 3.14 就是 3140 公分，去掉 2 個零變公尺＝ 31.4 公尺，連直式都不用列！",
      "distractorAnalysis": {
        "A": "算出了 3140 公分後，忘記除以 100 換算成公尺！",
        "B": "直接把滾 1 圈的 125.6 公分寫成 125.6 公尺。",
        "D": "只算了 20 × 25 ÷ 100 ＝ 5 公尺，忘記乘以圓周率 3.14。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "前進距離 ＝ 圓周長 × 圈數",
        "1 公尺 ＝ 100 公分"
      ],
      "conceptCompare": "記得先看給的是「半徑」還是「直徑」，再看最後問的是「公分」還是「公尺」，這兩關是段考最常設計陷阱的地方。",
      "examVariations": "常反過來考：「輪子半徑 20 公分，前進 31.4 公尺共滾了幾圈？」，先把 31.4 公尺換成 3140 公分，再除以圓周長 125.6 公分 ＝ 25 圈。"
    }
  },
  {
    "id": "EX2-SHIHU113-13",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與面積換算",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第13題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "13. 有一塊實際長 75 公尺、寬 50 公尺的長方形土地，畫在比例尺是 1：2500 的地圖上，面積是幾平方公分？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p1.png",
    "options": [
      {
        "key": "A",
        "text": "6 平方公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "60 平方公分",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "150 平方公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "750 平方公分",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "(75 * 100 / 2500) * (50 * 100 / 2500)",
      "expect": "6"
    },
    "explanation": {
      "examPurpose": "測驗先將長、寬各別依比例尺縮小並統一成公分後，再相乘求地圖上面積（避免直接拿面積除以 2500）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1：2500 代表地圖上 1 公分 ＝ 實際 2500 公分（即 25 公尺）。分別算出地圖上的長與寬："
        },
        {
          "type": "eq",
          "expr": "75 × 100 ÷ 2500 = 3",
          "unit": "公分（圖上長）"
        },
        {
          "type": "eq",
          "expr": "50 × 100 ÷ 2500 = 2",
          "unit": "公分（圖上寬）"
        },
        {
          "type": "text",
          "text": "第 2 步：把圖上的長與寬相乘，就是地圖上的面積："
        },
        {
          "type": "eq",
          "expr": "3 × 2 = 6",
          "unit": "平方公分"
        },
        {
          "type": "answer",
          "text": "答：地圖上的面積是 6 平方公分。"
        }
      ],
      "insight": "求比例尺的「面積」，一定要「先各別把長、寬換算成圖上公分數，再相乘」，絕對不能先把面積乘起來再除以 2500！",
      "distractorAnalysis": {
        "B": "長與寬各別除以 2500 時少除了 10（或公分與公尺換算少乘了 100 的倍數）。",
        "C": "先把實際面積 75 × 50 ＝ 3750 算出來，又錯用面積直接除以 25 算成 150。",
        "D": "將長寬與比例尺換算時小數點錯位，導致面積放大了 125 倍。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "圖上長 ＝ 實際長 ÷ 比例尺分母（先換同單位）",
        "圖上面積 ＝ 圖上長 × 圖上寬"
      ],
      "conceptCompare": "長度比例尺是 1：2500，但面積的比例尺會變成 1：(2500 × 2500) ＝ 1：6250000，所以分開換長、寬最安全！",
      "examVariations": "若改給地圖上的長 3 公分、寬 2 公分，求實際面積（平方公尺），同樣先換出實際長 75 公尺、寬 50 公尺，再相乘得 3750 平方公尺。"
    }
  },
  {
    "id": "EX2-SHIHU113-14",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖與縮小圖的邊長計算",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第14題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "14. 在方格邊長是 1 公分的方格紙上畫甲圖的 2.5 倍放大圖時，甲圖邊長 4 公分的線段，放大圖的對應邊要畫幾公分？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "2.5 公分",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "4 公分",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "C",
        "text": "6.5 公分",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "10 公分",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "4 * 2.5",
      "expect": "10"
    },
    "explanation": {
      "examPurpose": "測驗「放大 2.5 倍」就是把原圖邊長乘以 2.5。",
      "steps": [
        {
          "type": "text",
          "text": "甲圖的邊長是 4 公分，放大 2.5 倍後的對應邊長為："
        },
        {
          "type": "eq",
          "expr": "4 × 2.5 = 10",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：放大圖的對應邊要畫 10 公分。"
        }
      ],
      "insight": "放大幾倍就乘以幾！4 × 2.5 ＝ 10 公分。",
      "distractorAnalysis": {
        "A": "直接照抄了放大倍數 2.5，忘記乘以原本的邊長 4。",
        "B": "誤以為放大圖對應邊長不變，仍選了原本的 4 公分。",
        "C": "誤把放大 2.5 倍算成加法 4 ＋ 2.5 ＝ 6.5 公分！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大（縮小）後邊長 ＝ 原圖邊長 × 倍率"
      ],
      "conceptCompare": "只要方格紙 1 格邊長是 1 公分，畫 10 公分就剛好數 10 格。",
      "examVariations": "若方格紙 1 格改為 2 公分，則 10 公分只需畫 10 ÷ 2 ＝ 5 格，讀題要注意方格邊長！"
    }
  },
  {
    "id": "EX2-SHIHU113-15",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-3",
    "sectionName": "複合圖形周長",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 一、選擇題 第15題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 4,
    "difficulty": 4,
    "questionType": "choice",
    "work": "lg",
    "question": "15. 邊長 10 公分的正方形和半徑 5 公分的圓重疊成一個如下圖的圖形（圓心在正方形頂點上）。這個圖形的周長大約是多少公分？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_q15_overlap.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "30 公分",
        "trapCode": "U06_COMPOSITE_BOUNDARY_ERR"
      },
      {
        "key": "B",
        "text": "47.1 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "53.55 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "107.1 公分",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(10 * 4 - 5 * 2) + (5 * 2 * 3.14 * 3 / 4)",
      "expect": "53.55"
    },
    "explanation": {
      "examPurpose": "高難度複合圖形周長：區分「被蓋在內部看不見的邊」與「露在最外圍的邊界」，不能直接將兩圖形周長相加。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：正方形原本 4 條邊共 10 × 4 ＝ 40 公分，但右上角有兩段各 5 公分的邊被蓋在圓裡面，所以露在外面的是："
        },
        {
          "type": "eq",
          "expr": "10 × 4 − 5 × 2 = 30",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：圓心在正方形直角（90°）頂點上，所以 1/4 圓被蓋在正方形裡面，露在外面的是 3/4 圓弧（半徑 5 公分）："
        },
        {
          "type": "eq",
          "expr": "5 × 2 × 3.14 × 3/4 = 23.55",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 3 步：把外圍的直線邊和外圍的圓弧加起來："
        },
        {
          "type": "eq",
          "expr": "30 + 23.55 = 53.55",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這個圖形的周長大約是 53.55 公分。"
        }
      ],
      "insight": "重疊圖形求周長口訣：「只算最外圈」！被遮住的兩條 5 公分半徑和 1/4 圓弧都在肚子裡，通通不算！",
      "distractorAnalysis": {
        "A": "只算了外露的正方形邊長 30 公分，忘記加上外面那一圈 3/4 圓弧（23.55 公分）。",
        "B": "誤算成 10 × 3.14 × 1.5 ＝ 47.1 公分，未正確加上正方形外框。",
        "D": "將正確周長 53.55 誤乘 2 倍算成 107.1 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "重疊圖形周長 ＝ 正方形外露直線邊 ＋ 圓外露弧長"
      ],
      "conceptCompare": "另一種算法：把圓周長 (31.4) ＋ 正方形周長 (40) ＝ 71.4，再扣掉藏在裡面的「1/4 圓弧 (7.85) ＋ 2 條半徑 (10)」＝ 71.4 − 17.85 ＝ 53.55 公分！",
      "examVariations": "若改為圓心在正方形頂點且半徑為 4 公分，做法完全相同：外露直線 (40 − 8 ＝ 32) ＋ 外露 3/4 圓弧 (4 × 2 × 3.14 × 3/4 ＝ 18.84) ＝ 50.84 公分。"
    }
  },
  {
    "id": "EX2-SHIHU113-16",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "打折與省下金額",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第1題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "1. 歡慶臺灣奪得世界棒球 12 強賽冠軍，捷克斯運動用品店全店打 8 折出售，老師買了一個定價 600 元的樂樂棒打擊座，老師可以少付多少（　）元。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "480 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "B",
        "text": "48 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "720 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "D",
        "text": "120 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "600 * (1 - 0.8)",
      "expect": "120"
    },
    "explanation": {
      "examPurpose": "測驗「打 8 折」的意義，並區分題目問的是「售價（付多少）」還是「少付多少（便宜多少）」。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：打 8 折表示售價是定價的 0.8 倍（80%），所以便宜（少付）了定價的 1 − 0.8 ＝ 0.2 倍。"
        },
        {
          "type": "eq",
          "expr": "600 × (1 − 0.8) = 120",
          "unit": "元"
        },
        {
          "type": "answer",
          "text": "答：老師可以少付 120 元。"
        }
      ],
      "insight": "看到「打 8 折」先圈關鍵字！問「打折後多少元」才乘 0.8（480 元）；問「少付／便宜多少元」要乘 0.2（120 元）！",
      "distractorAnalysis": {
        "A": "算成了打 8 折後的「售價」600 × 0.8 ＝ 480 元，沒有看清楚題目問的是「少付多少元」。",
        "B": "小數點移位錯誤（誤算成 600 × 0.08 ＝ 48 元）。",
        "C": "把打折少付算成加價 20%，列成 600 × 1.2 ＝ 720 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "省下（少付）金額 ＝ 定價 × (1 − 折數)"
      ],
      "conceptCompare": "「打 8 折」就是省下 20%（2 折）；「打 75 折」就是省下 25%（0.25 倍）。",
      "examVariations": "若題目改問「老師買這個打擊座實際要付多少元？」，答案就是 600 × 0.8 ＝ 480 元。"
    }
  },
  {
    "id": "EX2-SHIHU113-17",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "已知比較量求基準量與兩量和",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第2題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "2. 本屆世界棒球 12 強賽，美國最後拿下 6 場勝利，美國的勝場數是臺灣的 1.2 倍，請問美國和臺灣一共拿下（　）場勝利。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "臺灣 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "美國 (1.2 倍＝6 場)",
          "units": 1.2,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "sum",
        "text": "一共 2.2 份（共幾場？）"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "13.2 場",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "12 場",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "5 場",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "11 場",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "6 + 6 / 1.2",
      "expect": "11"
    },
    "explanation": {
      "examPurpose": "先以「比較量 ÷ 倍數」求出基準量（臺灣勝場數），再將兩國勝場數相加。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：美國的勝場數（6 場）是臺灣的 1.2 倍，以臺灣為基準量 1，先用除法算出臺灣拿下幾場："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "6 ÷ 1.2 = 5",
          "unit": "場（臺灣）"
        },
        {
          "type": "longdiv",
          "dividend": "6",
          "divisor": "1.2",
          "mode": "exact",
          "note": "除數 1.2 變 12，被除數 6 補 0 變 60，60 ÷ 12 ＝ 5"
        },
        {
          "type": "text",
          "text": "第 2 步：把美國和臺灣的勝場數合起來："
        },
        {
          "type": "eq",
          "expr": "6 + 5 = 11",
          "unit": "場"
        },
        {
          "type": "answer",
          "text": "答：美國和臺灣一共拿下 11 場勝利。"
        }
      ],
      "insight": "「美國是臺灣的 1.2 倍」，誰在「的」前面誰就是基準量 1！已知比較量 6 場，反求基準量一定要用「除以 1.2」，最後別忘記問的是「一共」幾場！",
      "figureNote": "線段圖中臺灣是基準 1 份，美國是 1.2 份（剛好 6 場），除以 1.2 得出 1 份為 5 場，合計 2.2 份＝ 11 場。",
      "distractorAnalysis": {
        "C": "只算出臺灣拿下的 5 場勝利，忘記加上美國的 6 場！",
        "A": "誤把基準量和比較量搞反，算成 6 × 1.2 ＝ 7.2 場再加 6 場，得到不合理的 13.2 場。",
        "B": "加法或除法估算失誤，誤算為 12 場。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 比較量 ÷ 倍數",
        "兩量和 ＝ 比較量 ＋ 基準量"
      ],
      "conceptCompare": "勝場數一定是整數！如果誤用 6 × 1.2 算出 7.2 場，就要立刻警覺比賽場次不可能是小數，代表乘除用反了！",
      "examVariations": "常改問「美國比臺灣多贏幾場？」，算式為 6 − (6 ÷ 1.2) ＝ 1 場。"
    }
  },
  {
    "id": "EX2-SHIHU113-18",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "母子和問題",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第3題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "3. 獅湖國小六年級體育季活動是樂樂棒競賽，競賽規定每班男生 8 人上場。女生上場人數是男生上場人數的 0.75 倍，請問六年級各班一共需派出（　）人上場參加體育季的樂樂棒競賽。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "6 人",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "B",
        "text": "14 人",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "18 人",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "D",
        "text": "15 人",
        "trapCode": "U05_SUM_FORGET_ONE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "8 * (1 + 0.75)",
      "expect": "14"
    },
    "explanation": {
      "examPurpose": "已知基準量（男生 8 人）與比較量倍數（0.75 倍），求母子和（一共派出人數）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：女生上場人數是男生（8 人）的 0.75 倍："
        },
        {
          "type": "eq",
          "expr": "8 × 0.75 = 6",
          "unit": "人（女生）"
        },
        {
          "type": "text",
          "text": "第 2 步：把男生和女生加起來，就是各班一共派出的人數："
        },
        {
          "type": "eq",
          "expr": "8 + 6 = 14",
          "unit": "人"
        },
        {
          "type": "answer",
          "text": "答：各班一共需派出 14 人上場。"
        }
      ],
      "insight": "也可以用母子和直接列式：8 × (1 ＋ 0.75) ＝ 8 × 1.75 ＝ 14 人！",
      "distractorAnalysis": {
        "A": "只算出了女生人數 6 人，忘記問的是「男女生一共」派出幾人！",
        "C": "誤將 8 × 0.75 當成 10 人或其他數字相加而算錯。",
        "D": "小數乘法 8 × 0.75 進位誤算為 7 人，再加 8 人得 15 人。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "母子和 ＝ 基準量 × (1 ＋ 倍數)"
      ],
      "conceptCompare": "0.75 就是 3/4，8 × 3/4 ＝ 6 人，口算超快！",
      "examVariations": "若改問「男生比女生多幾人？」，則是 8 × (1 − 0.75) ＝ 2 人。"
    }
  },
  {
    "id": "EX2-SHIHU113-19",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "已知倍數求基準量",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第4題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "4. 臺灣今年遭遇到許多颱風侵襲，放了好幾天颱風假，烏薩奇看到中央氣象局的資料提到強颱康芮的十級風暴風半徑有 150 公里，是中颱天兔的 3 倍，請問中颱天兔的十級風暴風半徑有多少（　）公里。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "75 公里",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "147 公里",
        "trapCode": "U05_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "450 公里",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "D",
        "text": "50 公里",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "150 / 3",
      "expect": "50"
    },
    "explanation": {
      "examPurpose": "判別誰是基準量（中颱天兔），並以除法反求基準量。",
      "steps": [
        {
          "type": "text",
          "text": "強颱康芮（150 公里）是中颱天兔的 3 倍，代表中颱天兔比較小，要用除法除以 3："
        },
        {
          "type": "eq",
          "expr": "150 ÷ 3 = 50",
          "unit": "公里"
        },
        {
          "type": "answer",
          "text": "答：中颱天兔的十級風暴風半徑有 50 公里。"
        }
      ],
      "insight": "「康芮是天兔的 3 倍」＝「康芮 ＝ 天兔 × 3」，反過來求天兔當然要用 150 ÷ 3 ＝ 50 公里！",
      "distractorAnalysis": {
        "C": "看到「3 倍」就反射性用乘法，算成 150 × 3 ＝ 450 公里，比強颱還大就不合理了。",
        "A": "誤將 150 除以 2 算成 75 公里。",
        "B": "誤把「3 倍」看成「多 3 公里」，用減法 150 − 3 ＝ 147 公里。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "基準量 ＝ 比較量 ÷ 倍數"
      ],
      "conceptCompare": "算完一定要用常識檢查一下：強颱比中颱強大，所以中颱半徑 50 公里一定比強颱 150 公里小！",
      "examVariations": "若問「兩個颱風的暴風半徑相差多少公里？」，則是 150 − 50 ＝ 100 公里。"
    }
  },
  {
    "id": "EX2-SHIHU113-20",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "和差問題",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第5題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "work": "md",
    "question": "5. 小虎這次小考國語和數學的分數合起來共 186 分，數學比國語少 6 分，小虎數學的分數是（　）分，國語的分數是（　）分。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "subQuestions": [
      {
        "subId": "EX2-SHIHU113-20-1",
        "label": "(1) 數學分數",
        "question": "小虎數學的分數是（　）分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "90 分",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "96 分",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "C",
            "text": "87 分",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          },
          {
            "key": "D",
            "text": "180 分",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          }
        ],
        "answer": "A",
        "check": {
          "expr": "(186 - 6) / 2",
          "expect": "90"
        },
        "explanation": {
          "examPurpose": "利用和差問題「(和 − 差) ÷ 2 ＝ 較小數」求出數學分數。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：數學比國語少 6 分，代表把國語多出的 6 分拿掉後，兩科就一樣多了："
            },
            {
              "type": "eq",
              "expr": "186 − 6 = 180",
              "unit": "分"
            },
            {
              "type": "text",
              "text": "第 2 步：把一樣多的兩科平分除以 2，就是比較少的數學分數："
            },
            {
              "type": "eq",
              "expr": "180 ÷ 2 = 90",
              "unit": "分"
            },
            {
              "type": "answer",
              "text": "答：小虎數學的分數是 90 分。"
            }
          ],
          "insight": "口訣：「(和 − 差) ÷ 2 ＝ 較小數」！數學比國語少，所以數學是較小數＝ 90 分。",
          "distractorAnalysis": {
            "B": "96 分是比較高的「國語」分數，不是數學分數！",
            "C": "誤把 (186 ÷ 2) − 6 ＝ 87 分當成數學分數，少除了 6 ÷ 2。",
            "D": "186 − 6 ＝ 180 分後，忘記除以 2 平分給兩科！"
          }
        }
      },
      {
        "subId": "EX2-SHIHU113-20-2",
        "label": "(2) 國語分數",
        "question": "小虎國語的分數是（　）分。",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "90 分",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "B",
            "text": "96 分",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "99 分",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          },
          {
            "key": "D",
            "text": "192 分",
            "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
          }
        ],
        "answer": "B",
        "check": {
          "expr": "(186 + 6) / 2",
          "expect": "96"
        },
        "explanation": {
          "examPurpose": "利用「較小數 ＋ 差 ＝ 較大數」或「(和 ＋ 差) ÷ 2 ＝ 較大數」求出國語分數。",
          "steps": [
            {
              "type": "text",
              "text": "方法一：數學是 90 分，國語比數學多 6 分，直接加上 6 分："
            },
            {
              "type": "eq",
              "expr": "90 + 6 = 96",
              "unit": "分"
            },
            {
              "type": "text",
              "text": "方法二：也可以直接用和差公式 (186 ＋ 6) ÷ 2 ＝ 96 分，驗算 90 ＋ 96 ＝ 186 分、96 − 90 ＝ 6 分。"
            },
            {
              "type": "answer",
              "text": "答：小虎國語的分數是 96 分。"
            }
          ],
          "insight": "算出兩科後記得「加起來看是不是 186、相減看是不是差 6」，1 秒驗算零失誤！",
          "distractorAnalysis": {
            "A": "90 分是數學分數，國語比較高應該是 96 分。",
            "C": "誤算成 (186 ÷ 2) ＋ 6 ＝ 99 分，未先加減差再平分。",
            "D": "186 ＋ 6 ＝ 192 分後，忘記除以 2 平分！"
          }
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "較大數 ＝ (和 ＋ 差) ÷ 2",
        "較小數 ＝ (和 − 差) ÷ 2"
      ],
      "conceptCompare": "先算平均 186 ÷ 2 ＝ 93 分也行！把一半的差（6 ÷ 2 ＝ 3 分）一加一減：國語 93 ＋ 3 ＝ 96 分、數學 93 − 3 ＝ 90 分。",
      "examVariations": "常改寫成「甲、乙兩數和 186、差 6」或「哥哥弟弟共 186 元、弟弟少 6 元」。"
    }
  },
  {
    "id": "EX2-SHIHU113-21",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺的表示法",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第6題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "6. 鐵馬道實際長 5.8 公里，在地圖上長 29 公分，這張地圖的比例尺用比表示是（　）。【用最簡單整數比】",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "20000：1",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "B",
        "text": "1：2000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "1：20000",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "1：200000",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "5.8 * 100000 / 29",
      "expect": "20000"
    },
    "explanation": {
      "examPurpose": "測驗將「公里」換算成「公分」後，寫出「圖上距離：實際距離」並化簡為最簡單整數比。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先統一單位，因為 1 公里 ＝ 1000 公尺 ＝ 100000 公分，把 5.8 公里換成公分："
        },
        {
          "type": "eq",
          "expr": "5.8 × 100000 = 580000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：列出「圖上距離 ： 實際距離」＝ 29 ： 580000，前後兩項同時除以 29 化簡："
        },
        {
          "type": "eq",
          "expr": "580000 ÷ 29 = 20000",
          "unit": ""
        },
        {
          "type": "text",
          "text": "因此最簡單整數比為 1：20000。"
        },
        {
          "type": "answer",
          "text": "答：這張地圖的比例尺用比表示是 1：20000。"
        }
      ],
      "insight": "記住超好用換算：「1 公里 ＝ 100000 公分（5 個零）」！把 5.8 乘 100000 變成 580000，再除以 29 馬上得 20000！",
      "distractorAnalysis": {
        "B": "公里換成公分時少乘了一個 10（只變 58000），錯算成 1：2000。",
        "D": "公里換成公分時多算了一個零，錯算成 1：200000。",
        "A": "把「圖上：實際」寫反成「實際：圖上」（20000：1）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "比例尺 ＝ 圖上距離 ： 實際距離（兩邊必須同單位！）",
        "1 公里 ＝ 100000 公分"
      ],
      "conceptCompare": "「1：20000」表示地圖縮小了；如果寫成「20000：1」是放大兩萬倍（顯微鏡觀察細菌才會出現比 1 大的前項）。",
      "examVariations": "若改問「用比值表示」，答案就是 1/20000。"
    }
  },
  {
    "id": "EX2-SHIHU113-22",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-3",
    "sectionName": "比例尺與實際長度",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第7題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "7. 在比例尺 1/2000 的平面圖上，教學大樓的長度是 5 公分，實際長度是（　）公尺。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "1000 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "B",
        "text": "10000 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "C",
        "text": "10 公尺",
        "trapCode": "U07_SCALE_UNIT_MISMATCH"
      },
      {
        "key": "D",
        "text": "100 公尺",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "5 * 2000 / 100",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "由分數比例尺和圖上長度反求實際長度，並將公分換算為公尺。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：比例尺 1/2000 表示實際長度是圖上長度的 2000 倍，先算出實際公分數："
        },
        {
          "type": "eq",
          "expr": "5 × 2000 = 10000",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：把公分換成公尺（1 公尺 ＝ 100 公分，除以 100）："
        },
        {
          "type": "eq",
          "expr": "10000 ÷ 100 = 100",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：教學大樓實際長度是 100 公尺。"
        }
      ],
      "insight": "也可以先把「比例尺 1/2000」翻譯成「圖上 1 公分 ＝ 實際 20 公尺」，再乘 5 格＝ 100 公尺！",
      "distractorAnalysis": {
        "C": "多除以 10，把 10000 公分誤換成 10 公尺。",
        "A": "少除以 10，把 10000 公分誤換成 1000 公尺。",
        "B": "算出 10000 公分後忘記除以 100，直接填了 10000 公尺！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "實際距離 ＝ 圖上距離 ÷ 比例尺（或 × 分母）",
        "100 公分 ＝ 1 公尺"
      ],
      "conceptCompare": "先在比例尺分母「劃掉 2 個零」，就能直接從公分變公尺（2000 公分 ＝ 20 公尺），超級不易算錯零！",
      "examVariations": "若改為已知教學大樓實際長 100 公尺，在 1/2000 地圖上要畫幾公分？10000 ÷ 2000 ＝ 5 公分。"
    }
  },
  {
    "id": "EX2-SHIHU113-23",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-1",
    "sectionName": "放大圖的邊長計算",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第8題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 1,
    "difficulty": 1,
    "questionType": "choice",
    "work": "sm",
    "question": "8. 把邊長 8 公分的正方形放大 4 倍後，放大圖的邊長是（　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "32 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "128 公分",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "C",
        "text": "2 公分",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "D",
        "text": "12 公分",
        "trapCode": "U07_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "8 * 4",
      "expect": "32"
    },
    "explanation": {
      "examPurpose": "基本放大圖邊長計算：原邊長乘以放大倍數。",
      "steps": [
        {
          "type": "text",
          "text": "邊長 8 公分放大 4 倍，只要把原邊長乘以 4："
        },
        {
          "type": "eq",
          "expr": "8 × 4 = 32",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：放大圖的邊長是 32 公分。"
        }
      ],
      "insight": "問「邊長」就 8 × 4 ＝ 32 公分；如果問「周長」才是 32 × 4 ＝ 128 公分！",
      "distractorAnalysis": {
        "C": "錯把放大 4 倍用成除法 8 ÷ 4 ＝ 2 公分。",
        "D": "錯把「放大 4 倍」用成加法 8 ＋ 4 ＝ 12 公分。",
        "B": "算成了放大圖的「周長」（32 × 4 ＝ 128 公分），題目問的是「邊長」。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "放大圖邊長 ＝ 原圖邊長 × 放大倍率"
      ],
      "conceptCompare": "看清楚題目最後問的是「邊長」（32 公分）、「周長」（128 公分）還是「面積」（1024 平方公分）。",
      "examVariations": "若改為「面積是原圖面積的幾倍？」，答案為 4 × 4 ＝ 16 倍。"
    }
  },
  {
    "id": "EX2-SHIHU113-24",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "secondaryUnitIds": [
      "U05"
    ],
    "section": "8-1",
    "sectionName": "移動後一樣多問題",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第9題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "9. 坤俊有 70 張貼紙，他送給皓辰 15 張後，兩人的貼紙就一樣多，皓辰原有（　）張貼紙。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "25 張",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "40 張",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "55 張",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      },
      {
        "key": "D",
        "text": "85 張",
        "trapCode": "U05_TRANSFER_TOTAL_CHANGE"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "70 - 15 * 2",
      "expect": "40"
    },
    "explanation": {
      "examPurpose": "測驗「給出去 15 張就一樣多」代表原本兩人相差 15 × 2 ＝ 30 張（一增一減）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：坤俊送出 15 張後，還剩下："
        },
        {
          "type": "eq",
          "expr": "70 − 15 = 55",
          "unit": "張"
        },
        {
          "type": "text",
          "text": "第 2 步：此時皓辰也剛好變成 55 張，但其中有 15 張是坤俊送的，扣回來就是皓辰原本的張數："
        },
        {
          "type": "eq",
          "expr": "55 − 15 = 40",
          "unit": "張"
        },
        {
          "type": "answer",
          "text": "答：皓辰原有 40 張貼紙。"
        }
      ],
      "insight": "坤俊少 15、皓辰多 15，一來一回本來就差了 15 × 2 ＝ 30 張！70 − 30 ＝ 40 張。",
      "distractorAnalysis": {
        "C": "只算了兩人後來的張數 70 − 15 ＝ 55 張，忘記再扣掉皓辰收到的 15 張！",
        "D": "誤把 70 ＋ 15 ＝ 85 張算成皓辰原有的，這反而比坤俊還多了。",
        "A": "多扣了一個 15 或減法計算失誤算成 25 張。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "甲給乙 □ 個後兩人一樣多 ➔ 原來相差 2 × □ 個"
      ],
      "conceptCompare": "「坤俊原來比皓辰多 30 張」跟「送 15 張就一樣多」是完全同一件事；就像「乙杯倒 100 毫升給甲杯就一樣多，代表乙杯原本比甲杯多 200 毫升」！",
      "examVariations": "常改問「兩人總共有幾張貼紙？」，因為送來送去總數不變，只要算 55 × 2 ＝ 110 張（或 70 ＋ 40 ＝ 110 張）。"
    }
  },
  {
    "id": "EX2-SHIHU113-G01",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-1",
    "sectionName": "基準量、比較量與比值",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第10題(1)~(4)",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 2,
    "difficulty": 2,
    "questionType": "group",
    "work": "md",
    "question": "10. 世界棒球 12 強賽，臺灣勇奪隊史第一座冠軍，根據下列世界棒球 12 強各國全壘打數統計表回答下面問題：（臺灣 10、日本 7、韓國 5、美國 12、澳洲 6）",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_fill10_hr.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "subQuestions": [
      {
        "subId": "EX2-SHIHU113-G01-1",
        "label": "(1)",
        "question": "美國的全壘打數是澳洲的（　）倍。（　）的全壘打數是基準量，（　）的全壘打數是比較量。【括號內請填入國家】",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "1/2 倍；基準量：澳洲、比較量：美國",
            "trapCode": "U05_RECIPROCAL_MISS"
          },
          {
            "key": "B",
            "text": "6 倍；基準量：澳洲、比較量：美國",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "2 倍；基準量：澳洲、比較量：美國",
            "trapCode": null
          },
          {
            "key": "D",
            "text": "2 倍；基準量：美國、比較量：澳洲",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "C",
        "check": {
          "expr": "12 / 6",
          "expect": "2"
        },
        "explanation": {
          "examPurpose": "從統計表讀取數據，並判斷「甲是乙的幾倍」中誰是基準量、誰是比較量。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：查表得美國全壘打 12 支、澳洲 6 支。「美國是澳洲的幾倍」要拿美國除以澳洲："
            },
            {
              "type": "eq",
              "expr": "12 ÷ 6 = 2",
              "unit": "倍"
            },
            {
              "type": "text",
              "text": "第 2 步：在「的」前面當分母的「澳洲」是基準量，被比較的「美國」是比較量。"
            },
            {
              "type": "answer",
              "text": "答：2 倍；澳洲的全壘打數是基準量，美國的全壘打數是比較量。"
            }
          ],
          "insight": "語法秒殺：「誰是誰的幾倍？」➔「是」前面是比較量，「的」前面是基準量！",
          "distractorAnalysis": {
            "D": "倍數算對了，但把基準量（澳洲）與比較量（美國）寫顛倒了！",
            "A": "算成了澳洲是美國的 6 ÷ 12 ＝ 1/2 倍。",
            "B": "誤把乘法除法的倍數算成相差支數 12 − 6 ＝ 6。"
          }
        }
      },
      {
        "subId": "EX2-SHIHU113-G01-2",
        "label": "(2)",
        "question": "日本的全壘打數是韓國的（　）倍。（　）的全壘打數是基準量，（　）的全壘打數是比較量。【括號內請填入國家】",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "5/7 倍；基準量：韓國、比較量：日本",
            "trapCode": "U05_RECIPROCAL_MISS"
          },
          {
            "key": "B",
            "text": "2 倍；基準量：韓國、比較量：日本",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "1.4 倍；基準量：日本、比較量：韓國",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "1.4 倍；基準量：韓國、比較量：日本",
            "trapCode": null
          }
        ],
        "answer": "D",
        "check": {
          "expr": "7 / 5",
          "expect": "1.4"
        },
        "explanation": {
          "examPurpose": "處理除後為小數或分數的倍數計算，並再次確認基準量與比較量位置。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：查表得日本 7 支、韓國 5 支。算日本是韓國的幾倍："
            },
            {
              "type": "eq",
              "expr": "7 ÷ 5 = 1.4",
              "unit": "倍（或 1 2/5 倍）"
            },
            {
              "type": "text",
              "text": "第 2 步：「韓國」在「的」前面，當基準量（除數）；「日本」是比較量（被除數）。"
            },
            {
              "type": "answer",
              "text": "答：1.4 倍（或 1 2/5 倍）；韓國的全壘打數是基準量，日本的全壘打數是比較量。"
            }
          ],
          "insight": "7 ÷ 5 ＝ 7/5 ＝ 1.4 倍（或 1 2/5 倍），小數與分數答案都等價！",
          "distractorAnalysis": {
            "C": "倍數計算正確，但將基準量與比較量的國家填反了。",
            "A": "誤算成 5 ÷ 7 ＝ 5/7 倍（除數與被除數顛倒）。",
            "B": "誤算成兩國相減 7 − 5 ＝ 2。"
          }
        }
      },
      {
        "subId": "EX2-SHIHU113-G01-3",
        "label": "(3)",
        "question": "臺灣全壘打數是韓國的 2 倍，臺灣和韓國的全壘打數比是（　），比值是（　）。【用最簡單整數比】",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "比為 2：1，比值是 2",
            "trapCode": null
          },
          {
            "key": "B",
            "text": "比為 10：5，比值是 2",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "C",
            "text": "比為 1：2，比值是 1/2",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "比為 2：1，比值是 1/2",
            "trapCode": "U05_RECIPROCAL_MISS"
          }
        ],
        "answer": "A",
        "check": {
          "expr": "10 / 5",
          "expect": "2"
        },
        "explanation": {
          "examPurpose": "串聯「倍數、最簡單整數比、比值」三種表示法。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：臺灣 10 支、韓國 5 支，兩者比為 10：5，同除以最大公因數 5 化成最簡單整數比："
            },
            {
              "type": "text",
              "text": "10：5 ＝ (10 ÷ 5)：(5 ÷ 5) ＝ 2：1。"
            },
            {
              "type": "text",
              "text": "第 2 步：比值是前項除以後項："
            },
            {
              "type": "eq",
              "expr": "2 ÷ 1 = 2",
              "unit": ""
            },
            {
              "type": "answer",
              "text": "答：比是 2：1，比值是 2。"
            }
          ],
          "insight": "「臺灣是韓國的 2 倍」＝「比為 2：1」＝「比值是 2」，三個其實說的是同一件事！",
          "distractorAnalysis": {
            "B": "寫成 10：5 沒有依照題目要求化成「最簡單整數比」2：1。",
            "C": "把「臺灣和韓國」寫反成「韓國和臺灣」1：2。",
            "D": "比是正確的 2：1，但比值誤將後項除以前項算成 1/2。"
          }
        }
      },
      {
        "subId": "EX2-SHIHU113-G01-4",
        "label": "(4)",
        "question": "日本全壘打數是臺灣的（　）倍，日本和臺灣的全壘打數比是（　），比值是（　）。【用最簡單整數比】",
        "choiceStyle": "standard",
        "options": [
          {
            "key": "A",
            "text": "0.3 倍；比為 3：10，比值是 3/10",
            "trapCode": "U05_CALC_SLIP"
          },
          {
            "key": "B",
            "text": "0.7 倍；比為 7：10，比值是 7/10",
            "trapCode": null
          },
          {
            "key": "C",
            "text": "1 3/7 倍；比為 10：7，比值是 10/7",
            "trapCode": "U05_BASE_SWAP"
          },
          {
            "key": "D",
            "text": "0.7 倍；比為 10：7，比值是 7/10",
            "trapCode": "U05_BASE_SWAP"
          }
        ],
        "answer": "B",
        "check": {
          "expr": "7 / 10",
          "expect": "0.7"
        },
        "explanation": {
          "examPurpose": "當比較量小於基準量時，同時寫出倍數（小於 1）、最簡單整數比與比值。",
          "steps": [
            {
              "type": "text",
              "text": "第 1 步：查表得日本 7 支、臺灣 10 支，日本是臺灣的幾倍："
            },
            {
              "type": "eq",
              "expr": "7 ÷ 10 = 0.7",
              "unit": "倍（或 7/10 倍）"
            },
            {
              "type": "text",
              "text": "第 2 步：日本和臺灣的比是 7：10（已經互質，是最簡單整數比），比值為 7 ÷ 10 ＝ 7/10（或 0.7）。"
            },
            {
              "type": "answer",
              "text": "答：0.7 倍（或 7/10 倍）；比是 7：10，比值是 7/10（或 0.7）。"
            }
          ],
          "insight": "日本（7）比臺灣（10）少，所以「日本是臺灣的幾倍」一定小於 1（0.7 倍），比的順序也維持日本在前、臺灣在後（7：10）！",
          "distractorAnalysis": {
            "C": "順序顛倒，算成了「臺灣是日本的幾倍」與「臺灣和日本的比」。",
            "D": "倍數與比值對了，但把「日本和臺灣的比」寫反成 10：7。",
            "A": "誤把兩國相差的 3 支（10 − 7）拿來當成日本的全壘打數。"
          }
        }
      }
    ],
    "extensionStudy": {
      "coreFormulas": [
        "「甲是乙的幾倍？」＝ 甲 ÷ 乙（乙是基準量、甲是比較量）",
        "甲與乙的比 ＝ 甲：乙，比值 ＝ 甲 ÷ 乙"
      ],
      "conceptCompare": "「甲是乙的幾倍」與「甲：乙的比值」算出來永遠一模一樣！兩者都是前項（比較量）÷ 後項（基準量）。",
      "examVariations": "若考題改問「美國比日本多幾倍？」，要算的是 (12 − 7) ÷ 7 ＝ 5/7 倍。"
    }
  },
  {
    "id": "EX2-SHIHU113-25",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形弧長計算",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 二、填充題 第11題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "11. 有一個 3/4 圓的扇形，半徑是 12 公分，弧長大約是（　）公分。",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p2.png",
    "options": [
      {
        "key": "A",
        "text": "28.26 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "B",
        "text": "452.16 公分",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "C",
        "text": "56.52 公分",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "80.52 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "12 * 2 * 3.14 * 3 / 4",
      "expect": "56.52"
    },
    "explanation": {
      "examPurpose": "計算 3/4 圓扇形的「弧長」（不含兩條半徑）。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：題目問「弧長」，只需要算整個圓周長的 3/4，不用加上半徑！先由半徑 12 公分算出直徑 12 × 2 ＝ 24 公分："
        },
        {
          "type": "eq",
          "expr": "12 × 2 × 3.14 × 3/4 = 56.52",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：弧長大約是 56.52 公分。"
        }
      ],
      "insight": "先約分最省力：24 × 3/4 ＝ 18，再算 18 × 3.14 ＝ 56.52 公分！看清楚問的是「弧長」不是「周長」。",
      "distractorAnalysis": {
        "D": "把「弧長」誤算成了「扇形周長」（多加了 2 條半徑 24 公分，變成 80.52 公分）。",
        "A": "忘記把半徑 12 公分乘以 2 變成直徑，直接算成 12 × 3.14 × 3/4 ＝ 28.26 公分。",
        "B": "錯用面積算式 12 × 12 × 3.14 ＝ 452.16。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形弧長 ＝ 直徑 × 3.14 × 幾分之幾圓",
        "扇形周長 ＝ 扇形弧長 ＋ 半徑 × 2"
      ],
      "conceptCompare": "只問「弧長」➔ 不加半徑（56.52 公分）；問「周長」➔ 必加兩條半徑（56.52 ＋ 24 ＝ 80.52 公分）。",
      "examVariations": "若改給圓心角 270 度，270 ÷ 360 ＝ 3/4 圓，算式完全一樣！"
    }
  },
  {
    "id": "EX2-SHIHU113-26",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "繪製縮小圖",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 三、畫畫看 第1題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "1. 在下面方格紙上利用直尺畫出 B 圖的 1/5 倍縮小圖。（請選出縮小後正確的圖形尺寸）",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_draw1_b.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p3.png",
    "figureSvg": "<svg viewBox=\"0 0 380 230\" width=\"100%\" style=\"max-width:380px;background:#fff;border:1px solid #cbd5e1;border-radius:8px;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"g1\" width=\"14\" height=\"14\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 14 0 L 0 0 0 14\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"20\" y=\"24\" width=\"224\" height=\"168\" fill=\"url(#g1)\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <rect x=\"34\" y=\"38\" width=\"140\" height=\"140\" fill=\"rgba(148,163,184,0.12)\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n  <text x=\"104\" y=\"114\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">B（原圖）</text>\n  <text x=\"104\" y=\"210\" font-size=\"12\" text-anchor=\"middle\" fill=\"#334155\">原圖 B：邊長 10 公分（10 格）</text>\n  <rect x=\"202\" y=\"94\" width=\"28\" height=\"28\" fill=\"rgba(37,99,235,0.18)\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <text x=\"216\" y=\"86\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">1/5 縮小圖</text>\n  <text x=\"312\" y=\"102\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">縮小後：</text>\n  <text x=\"312\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" fill=\"#2563eb\">邊長 2 公分</text>\n  <text x=\"312\" y=\"138\" font-size=\"12\" text-anchor=\"middle\" fill=\"#2563eb\">（2 格 × 2 格）</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "邊長 5 公分的正方形（5 格 × 5 格）",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "邊長 50 公分的正方形（50 格 × 50 格）",
        "trapCode": "U07_SCALE_MUL_DIV_SWAP"
      },
      {
        "key": "C",
        "text": "邊長 4 公分的正方形（4 格 × 4 格）",
        "trapCode": "U07_AREA_LINEAR_SCALE"
      },
      {
        "key": "D",
        "text": "邊長 2 公分的正方形（2 格 × 2 格）",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "10 / 5",
      "expect": "2"
    },
    "explanation": {
      "examPurpose": "測驗在方格紙上數出原圖格數，並依縮小倍率計算繪製後的對應格數。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：仔細數方格紙上的原圖 B，橫邊佔 10 格（10 公分）、直邊也佔 10 格（10 公分），是一個邊長 10 公分的正方形。"
        },
        {
          "type": "text",
          "text": "第 2 步：畫 1/5 倍縮小圖時，每條邊長都要乘以 1/5（也就是除以 5）："
        },
        {
          "type": "eq",
          "expr": "10 × 1/5 = 2",
          "unit": "公分（2 格）"
        },
        {
          "type": "text",
          "text": "第 3 步：拿直尺在方格紙空白處畫出橫 2 格、直 2 格、四個角都是直角的正方形即可。"
        },
        {
          "type": "answer",
          "text": "答：應畫出邊長 2 公分的正方形（2 格 × 2 格）。"
        }
      ],
      "insight": "畫方格圖三步驟：①數原圖格數（10 格 × 10 格）→ ②乘以倍率（10 ÷ 5 ＝ 2 格）→ ③拿直尺沿格線畫直！",
      "distractorAnalysis": {
        "A": "誤把 1/5 倍看成減去 5 格（10 − 5 ＝ 5 格），或除以 2 當成 1/2 倍縮小圖。",
        "B": "把縮小 1/5 倍用成放大 5 倍，10 × 5 ＝ 50 格。",
        "C": "數錯方格格數或比例換算失誤算成 4 格。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "縮小圖畫法：原圖各邊格數 × 縮小倍率 ＝ 縮小後格數"
      ],
      "conceptCompare": "畫完記得驗算面積：原圖面積 10 × 10 ＝ 100 平方公分，縮小圖面積 2 × 2 ＝ 4 平方公分，剛好變成原來的 1/25！",
      "examVariations": "若題目改為「畫出 1/2 倍縮小圖」，則每邊應畫 10 ÷ 2 ＝ 5 格。"
    }
  },
  {
    "id": "EX2-SHIHU113-27",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U07",
    "section": "7-2",
    "sectionName": "繪製放大圖",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 三、畫畫看 第2題",
    "batch": "段考真題",
    "category": "放大、縮小與比例尺",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "2. 畫出三角形 ABC 的 4 倍放大圖，並標示對應點 D、E、F。（請選出放大後正確的底邊、高與對應點 E 的位置）",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_draw2_abc.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p3.png",
    "figureSvg": "<svg viewBox=\"0 0 380 280\" width=\"100%\" style=\"max-width:380px;background:#fff;border:1px solid #cbd5e1;border-radius:8px;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"g2\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 16 0 L 0 0 0 16\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"16\" y=\"16\" width=\"256\" height=\"256\" fill=\"url(#g2)\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <polygon points=\"64,32 80,64 32,64\" fill=\"rgba(148,163,184,0.18)\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n  <text x=\"64\" y=\"27\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">A</text>\n  <text x=\"86\" y=\"74\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\">B</text>\n  <text x=\"22\" y=\"74\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\">C</text>\n  <polygon points=\"176,96 240,224 48,224\" fill=\"rgba(37,99,235,0.14)\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <line x1=\"176\" y1=\"96\" x2=\"176\" y2=\"224\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"176\" cy=\"96\" r=\"3\" fill=\"#2563eb\"/>\n  <circle cx=\"240\" cy=\"224\" r=\"3\" fill=\"#2563eb\"/>\n  <circle cx=\"48\" cy=\"224\" r=\"3\" fill=\"#2563eb\"/>\n  <text x=\"176\" y=\"88\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">D</text>\n  <text x=\"248\" y=\"236\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">E</text>\n  <text x=\"36\" y=\"236\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">F</text>\n  <text x=\"144\" y=\"242\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">底邊 FE：12 公分（12 格）</text>\n  <text x=\"182\" y=\"168\" font-size=\"11\" font-weight=\"bold\" fill=\"#ef4444\">高 8 格</text>\n  <text x=\"326\" y=\"110\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#334155\">4 倍放大：</text>\n  <text x=\"326\" y=\"130\" font-size=\"11\" text-anchor=\"middle\" fill=\"#2563eb\">D 往左 8 格、</text>\n  <text x=\"326\" y=\"146\" font-size=\"11\" text-anchor=\"middle\" fill=\"#2563eb\">下 8 格得 F</text>\n  <text x=\"326\" y=\"168\" font-size=\"11\" text-anchor=\"middle\" fill=\"#2563eb\">D 往右 4 格、</text>\n  <text x=\"326\" y=\"184\" font-size=\"11\" text-anchor=\"middle\" fill=\"#2563eb\">下 8 格得 E</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "底邊 FE 長 12 公分（12 格）、高 8 公分（8 格），且 E 在 D 往右 4 格、往下 8 格",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "底邊 FE 長 7 公分（7 格）、高 6 公分（6 格），且 E 在 D 往右 4 格、往下 8 格",
        "trapCode": "U07_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "底邊 FE 長 12 公分（12 格）、高 2 公分（2 格），只放大底邊不放大高",
        "trapCode": "U07_CORRESPONDING_SIDE_SWAP"
      },
      {
        "key": "D",
        "text": "底邊 FE 長 6 公分（6 格）、高 4 公分（4 格），畫成 2 倍放大圖",
        "trapCode": "U07_RELATIVE_SCALE_ERR"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "3 * 4",
      "expect": "12"
    },
    "explanation": {
      "examPurpose": "測驗在方格紙上畫斜邊三角形放大圖時，必須「水平位移格數」與「垂直位移格數」同時乘以放大倍率。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：觀察原圖三角形 ABC：底邊 CB 橫向長 3 格（3 公分）；頂點 A 到 C 是「往左 2 格、往下 2 格」，頂點 A 到 B 是「往右 1 格、往下 2 格」（高為 2 格）。"
        },
        {
          "type": "text",
          "text": "第 2 步：放大 4 倍時，所有格數位移都乘以 4："
        },
        {
          "type": "eq",
          "expr": "3 × 4 = 12",
          "unit": "格（底邊 FE 長 12 公分）"
        },
        {
          "type": "eq",
          "expr": "2 × 4 = 8",
          "unit": "格（高為 8 公分）"
        },
        {
          "type": "text",
          "text": "第 3 步：從指定對應點 D 出發，往左 2 × 4 ＝ 8 格、往下 2 × 4 ＝ 8 格標出 F；往右 1 × 4 ＝ 4 格、往下 2 × 4 ＝ 8 格標出 E，最後用直尺連成三角形 DEF。"
        },
        {
          "type": "answer",
          "text": "答：底邊 FE 長 12 公分（12 格）、高 8 公分（8 格），且 E 在 D 往右 4 格、往下 8 格。"
        }
      ],
      "insight": "畫斜線的絕招：「不用量斜邊長度，只要把向右幾格、向下幾格各別乘以 4」，連起來斜度跟角度就 100% 精準！",
      "distractorAnalysis": {
        "B": "誤把放大 4 倍用成加法（3 ＋ 4 ＝ 7 格、2 ＋ 4 ＝ 6 格）。",
        "C": "只放大了底邊 12 格，卻忘記高度也要一起放大 4 倍，變成扁扁的三角形。",
        "D": "只放大了 2 倍（底 6 格、高 4 格），忘記題目要求的是 4 倍放大圖。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "斜邊放大口訣：水平格數 × 倍率，垂直格數 × 倍率"
      ],
      "conceptCompare": "千萬別只算「對應點字母順序」就亂標！D 對應 A（最上方頂點）、E 對應 B（右下頂點）、F 對應 C（左下頂點），這樣連出來的斜邊方向才會一致。",
      "examVariations": "若改在方格紙畫「梯形」或「五邊形」放大圖，一樣對每個頂點用「橫幾格、直幾格」乘以倍率找點再連線！"
    }
  },
  {
    "id": "EX2-SHIHU113-28",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-2",
    "sectionName": "扇形周長應用",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第1題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "1. 第 47 週年獅湖國小校慶暨運動會完美落幕，老師為了慰勞辛苦完成校慶各項比賽的班上學生，決定請全班吃披薩，已知老師買來的一盒大披薩直徑 32 公分，可以被切成 12 片扇形小披薩，今天伯瀚肚子餓吃了三片扇形小披薩，請問這三片小披薩組合起來的扇形(如圖)周長是多少？",
    "stemImage": "images/exams/EXAM_MID2/crop_shihu113_app1_pizza.png",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p3.png",
    "options": [
      {
        "key": "A",
        "text": "41.12 公分",
        "trapCode": "U06_ARC_AS_PERIMETER"
      },
      {
        "key": "B",
        "text": "57.12 公分",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "114.24 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "D",
        "text": "25.12 公分",
        "trapCode": "U06_FORGET_TWO_RADII"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "32 * 3.14 * 3 / 12 + 32",
      "expect": "57.12"
    },
    "explanation": {
      "examPurpose": "先從「12 片中的 3 片」判斷為 1/4 圓扇形，算出弧長後加上「兩條半徑（＝1 條直徑）」求扇形周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：12 片披薩拿 3 片，組合起來是 3/12 圓（也就是 1/4 圓）。已知直徑 32 公分，先算這段圓弧的弧長："
        },
        {
          "type": "eq",
          "expr": "32 × 3.14 × 3/12 = 25.12",
          "unit": "公分"
        },
        {
          "type": "text",
          "text": "第 2 步：問「組合起來的扇形周長」，還要加上外圍兩條直線半徑（半徑各 16 公分，兩條合起來剛好是一條直徑 32 公分）："
        },
        {
          "type": "eq",
          "expr": "25.12 + 32 = 57.12",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：這三片小披薩組合起來的扇形周長大約是 57.12 公分。"
        }
      ],
      "insight": "「組合起來的扇形」中間那兩條切線不算外圍周長，只要算最外面的 1/4 圓弧 ＋ 左右兩邊半徑（32 公分）！",
      "distractorAnalysis": {
        "D": "只算出了 3 片披薩外圍的弧長 25.12 公分，忘記加上兩條半徑（32 公分）！",
        "A": "只加了 1 條半徑 16 公分（25.12 ＋ 16 ＝ 41.12 公分），少加另一條半徑。",
        "C": "誤把直徑 32 公分當成半徑計算（先乘 2 再算，變成兩倍大 114.24 公分）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "扇形周長 ＝ 圓周長 × (片數 ÷ 總片數) ＋ 半徑 × 2"
      ],
      "conceptCompare": "如果題目問「分開吃三片，每片周長合起來是多少？」，那中間的切邊就會露出來，總周長會變成 25.12 ＋ 6 條半徑！所以題目特別畫圖說「組合起來的扇形」。",
      "examVariations": "若吃的是 4 片小披薩（4/12 ＝ 1/3 圓），做法相同：算出 1/3 圓弧長後一樣加上 32 公分。"
    }
  },
  {
    "id": "EX2-SHIHU113-29",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "打折反求原價（母子差）",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第2題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "2. 獅湖國小畢業旅行第二天傍晚前往淡水老街，當地伴手禮店家紛紛提出許多優惠折扣希望吸引獅湖國小的學生購買，當地一間著名的魚酥店提出只要買十包魚酥，立即打 7 折出售，十包魚酥的售價會比十包魚酥的定價便宜 165 元，請問這十包魚酥的定價是多少元？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p3.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "定價 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "售價 (打 7 折＝0.7)",
          "units": 0.7,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "便宜 0.3 份 ＝ 165 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "115.5 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "55 元",
        "trapCode": "U05_PERCENT_DECIMAL_SHIFT"
      },
      {
        "key": "C",
        "text": "550 元",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "385 元",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "165 / (1 - 0.7)",
      "expect": "550"
    },
    "explanation": {
      "examPurpose": "母子差應用：「打 7 折便宜 165 元」代表定價的 (1 − 0.7) 倍就是 165 元，用除法反求定價。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把十包魚酥的「定價」當作基準量 1，打 7 折後的售價是定價的 0.7 倍，所以便宜了定價的："
        },
        {
          "type": "bar"
        },
        {
          "type": "eq",
          "expr": "1 − 0.7 = 0.3",
          "unit": "倍"
        },
        {
          "type": "text",
          "text": "第 2 步：便宜的 0.3 倍剛好就是 165 元，用「差量 ÷ 差比率」算出定價："
        },
        {
          "type": "eq",
          "expr": "165 ÷ 0.3 = 550",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "165",
          "divisor": "0.3",
          "mode": "exact",
          "note": "除數 0.3 移一位變 3，被除數 165 補 0 變 1650，1650 ÷ 3 ＝ 550"
        },
        {
          "type": "answer",
          "text": "答：這十包魚酥的定價是 550 元。"
        }
      ],
      "insight": "打 7 折 ＝ 付 7 成、省 3 成！題目給「便宜 165 元（省下的 3 成）」，所以 165 要除以 0.3，不是除以 0.7 喔！",
      "figureNote": "線段圖顯示定價為 1 份，售價為 0.7 份，兩者相差 0.3 份正好對應 165 元，故 1 份定價為 165 ÷ 0.3 ＝ 550 元。",
      "distractorAnalysis": {
        "D": "算出定價 550 元後，又多減 165 元寫成了打折後「售價」385 元！",
        "A": "誤用乘法 165 × 0.7 ＝ 115.5 元，越算越便宜。",
        "B": "小數除法 165 ÷ 0.3 忘記補 0，少了一位數算成 55 元！"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "原價（定價）＝ 便宜金額 ÷ (1 − 折數)"
      ],
      "conceptCompare": "算完一定要驗算：定價 550 元打 7 折是 385 元，550 − 385 ＝ 165 元，完全吻合！",
      "examVariations": "若改問「打 7 折後的售價是多少元？」或「一包魚酥定價多少元？」，算出 550 元後再減 165 得 385 元，或除以 10 包得一包 55 元。"
    }
  },
  {
    "id": "EX2-SHIHU113-30",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U05",
    "section": "5-2",
    "sectionName": "加成反求基準量（母子和）",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第3題",
    "batch": "段考真題",
    "category": "兩量關係",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "3. 山陀兒颱風過後，高雄市路樹倒塌，許多的鐵皮屋頂都被吹飛，愛國海賊團公司負責維修三民區住家的鐵皮屋，但因為颱風災情嚴重鐵皮屋維修需求太多，因此公司決定將維修費漲價 50%，變成 4500 元，請問原本公司維修鐵皮屋的費用是多少元？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p3.png",
    "figure": {
      "type": "bar",
      "rows": [
        {
          "label": "原本費用 (基準量 1)",
          "units": 1,
          "role": "base"
        },
        {
          "label": "漲價後 (1＋50%＝1.5 倍)",
          "units": 1.5,
          "role": "compare"
        }
      ],
      "brace": {
        "kind": "diff",
        "text": "漲價後共 1.5 份 ＝ 4500 元"
      }
    },
    "options": [
      {
        "key": "A",
        "text": "6750 元",
        "trapCode": "U05_MULTIPLY_INSTEAD"
      },
      {
        "key": "B",
        "text": "9000 元",
        "trapCode": "U05_DISCOUNT_AS_SAVING"
      },
      {
        "key": "C",
        "text": "2250 元",
        "trapCode": "U05_MARKUP_BASE_WRONG"
      },
      {
        "key": "D",
        "text": "3000 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "4500 / (1 + 0.5)",
      "expect": "3000"
    },
    "explanation": {
      "examPurpose": "母子和反推基準量：「漲價 50% 變成 4500 元」，代表原本費用的 (1 ＋ 0.5) 倍＝ 4500 元。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：把「原本費用」當作基準量 1，漲價 50%（0.5 倍）後的新價格是原本費用的 1 ＋ 0.5 ＝ 1.5 倍。"
        },
        {
          "type": "bar"
        },
        {
          "type": "text",
          "text": "第 2 步：已知漲價後是 4500 元，反求原本費用要用除法："
        },
        {
          "type": "eq",
          "expr": "4500 ÷ (1 + 0.5) = 3000",
          "unit": "元"
        },
        {
          "type": "longdiv",
          "dividend": "4500",
          "divisor": "1.5",
          "mode": "exact",
          "note": "除數 1.5 變 15，被除數 4500 補 0 變 45000，45000 ÷ 15 ＝ 3000"
        },
        {
          "type": "answer",
          "text": "答：原本公司維修鐵皮屋的費用是 3000 元。"
        }
      ],
      "insight": "「漲價 50% 變成 4500 元」最忌諱直接拿 4500 砍半！一定要先想「漲價後是原價的 1.5 倍」，再用 4500 ÷ 1.5 ＝ 3000 元！",
      "figureNote": "線段圖顯示原價為 1 份，漲價 50% 後變成 1.5 份（4500 元），故 1 份原價 ＝ 4500 ÷ 1.5 ＝ 3000 元。",
      "distractorAnalysis": {
        "C": "錯把漲價後的 4500 元當作基準量去扣 50%，誤算為 4500 × 0.5 ＝ 2250 元！",
        "A": "反求基準量誤用乘法，算成 4500 × 1.5 ＝ 6750 元，比漲價後還貴。",
        "B": "忘記加回基準量 1，錯把 4500 ÷ 0.5 算成 9000 元。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "原價 ＝ 漲價後售價 ÷ (1 ＋ 漲幅)"
      ],
      "conceptCompare": "驗算一下：原價 3000 元漲價 50%（加 1500 元），剛好變成 4500 元！如果是 2250 元漲價 50% 才只有 3375 元，一眼就抓出錯！",
      "examVariations": "若改為「賠錢賣出、降價 20% 後變成 4000 元」，則是 4000 ÷ (1 − 0.2) ＝ 5000 元。"
    }
  },
  {
    "id": "EX2-SHIHU113-31",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長應用",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第4題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "4. 獅湖國小畢旅前往雲林的劍湖山樂園，樂園裡有一座幸福摩天輪約三十層樓高，已知它的直徑長 90 公尺。幼辰坐進車廂後，讓摩天輪繞了兩圈才下來，請問這個車廂大約走了多少公尺？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p4.png",
    "options": [
      {
        "key": "A",
        "text": "565.2 公尺",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "1130.4 公尺",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "12717 公尺",
        "trapCode": "U06_AREA_FORMULA_CONFUSION"
      },
      {
        "key": "D",
        "text": "282.6 公尺",
        "trapCode": "U06_CALC_SLIP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "90 * 3.14 * 2",
      "expect": "565.2"
    },
    "explanation": {
      "examPurpose": "應用圓周長公式計算摩天輪轉動多圈的移動距離。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：摩天輪直徑已經給 90 公尺，先算繞 1 圈的圓周長："
        },
        {
          "type": "eq",
          "expr": "90 × 3.14 = 282.6",
          "unit": "公尺"
        },
        {
          "type": "text",
          "text": "第 2 步：摩天輪繞了「兩圈」，所以乘以 2："
        },
        {
          "type": "eq",
          "expr": "282.6 × 2 = 565.2",
          "unit": "公尺"
        },
        {
          "type": "answer",
          "text": "答：這個車廂大約走了 565.2 公尺。"
        }
      ],
      "insight": "看清題目給的是「直徑 90 公尺」，不要再多乘一次 2 變成半徑算兩遍，最後只需乘以「兩圈」的 2！",
      "distractorAnalysis": {
        "D": "只算了摩天輪繞 1 圈的距離 282.6 公尺，忘記繞了「兩圈」要乘以 2！",
        "B": "誤把直徑 90 公尺當成半徑，先乘 2 變 180 又乘以 2 圈，得到兩倍的 1130.4 公尺。",
        "C": "錯用圓面積公式（45 × 45 × 3.14 × 2 ＝ 12717）。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "移動距離 ＝ 直徑 × 3.14 × 圈數"
      ],
      "conceptCompare": "「約三十層樓高」是題目補充的生活情境敘述，不是要拿 30 來參與計算的數據喔！",
      "examVariations": "若改問「如果車廂繞一圈要 15 分鐘，幼辰總共坐了幾分鐘？每分鐘走幾公尺？」，先算總距離再除以時間即可。"
    }
  },
  {
    "id": "EX2-SHIHU113-32",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "移動一樣多（和差問題）",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第5題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 1,
    "difficulty": 2,
    "questionType": "choice",
    "work": "sm",
    "question": "5. 有甲、乙兩個一樣大的杯子，甲杯有 700 毫升的奶茶，乙杯有 900 毫升的奶茶，乙杯要倒多少毫升的奶茶到甲杯，兩個杯子裡的奶茶才會一樣多？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p4.png",
    "options": [
      {
        "key": "A",
        "text": "200 毫升",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "B",
        "text": "100 毫升",
        "trapCode": null
      },
      {
        "key": "C",
        "text": "800 毫升",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "150 毫升",
        "trapCode": "U08_CALC_SLIP"
      }
    ],
    "answer": "B",
    "check": {
      "expr": "(900 - 700) / 2",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "理解「移多補少」概念：把多出來的量「平分一半」給對方，兩者就會相等。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：先算出乙杯比甲杯多出多少毫升："
        },
        {
          "type": "eq",
          "expr": "900 − 700 = 200",
          "unit": "毫升"
        },
        {
          "type": "text",
          "text": "第 2 步：把多出來的 200 毫升平分給兩杯（除以 2），只倒一半過去就好："
        },
        {
          "type": "eq",
          "expr": "200 ÷ 2 = 100",
          "unit": "毫升"
        },
        {
          "type": "answer",
          "text": "答：乙杯要倒 100 毫升的奶茶到甲杯。"
        }
      ],
      "insight": "移多補少口訣：「差 ÷ 2 ＝ 移動量」！如果把 200 毫升全倒過去，甲變 900、乙剩 700，反而換甲杯多了！",
      "distractorAnalysis": {
        "A": "只算到兩杯相差 200 毫升，忘記平分除以 2（倒 200 過去會反過來變甲杯多 200）。",
        "C": "算成了最後每杯都有 (700 ＋ 900) ÷ 2 ＝ 800 毫升，忘記再用 900 − 800 ＝ 100。",
        "D": "估算或減法算錯。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "移動量 ＝ (大數 − 小數) ÷ 2",
        "或是先算平均 ＝ (大數 ＋ 小數) ÷ 2，再用大數 − 平均"
      ],
      "conceptCompare": "這題跟前面填充題第 9 題「坤俊送皓辰 15 張後一樣多，代表原本差 30 張」正好互為正反題！",
      "examVariations": "若共有 3 個杯子（例如 600、700、1100 毫升），就必須先算三杯平均 (600 ＋ 700 ＋ 1100) ÷ 3 ＝ 800 毫升，再看誰倒多少。"
    }
  },
  {
    "id": "EX2-SHIHU113-33",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-2",
    "sectionName": "雞兔問題（假設法）",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第6題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "6. 藝璇全班在周末到苗栗旅遊，全班 36 人共租了 15 輛協力車，耀宇提議每輛只能兩人共騎或三人共騎，在這 15 輛協力車中，由三人共騎的有幾輛？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p4.png",
    "options": [
      {
        "key": "A",
        "text": "12 輛",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "B",
        "text": "5 輛",
        "trapCode": "U08_CALC_SLIP"
      },
      {
        "key": "C",
        "text": "6 輛",
        "trapCode": null
      },
      {
        "key": "D",
        "text": "9 輛",
        "trapCode": "U08_CHICKEN_RABBIT_SWAP"
      }
    ],
    "answer": "C",
    "check": {
      "expr": "(36 - 15 * 2) / (3 - 2)",
      "expect": "6"
    },
    "explanation": {
      "examPurpose": "將「雞兔同籠假設法」遷移應用到「兩人協力車與三人協力車」分配問題。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：要求三人共騎的輛數，先假設這 15 輛車全部都是兩人共騎，共可坐："
        },
        {
          "type": "eq",
          "expr": "2 × 15 = 30",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "第 2 步：還有幾位同學沒有位置坐？"
        },
        {
          "type": "eq",
          "expr": "36 − 30 = 6",
          "unit": "人"
        },
        {
          "type": "text",
          "text": "第 3 步：每把 1 輛兩人車換成三人車，可多坐 3 − 2 ＝ 1 人，所以需要三人車："
        },
        {
          "type": "eq",
          "expr": "6 ÷ (3 − 2) = 6",
          "unit": "輛"
        },
        {
          "type": "answer",
          "text": "答：由三人共騎的有 6 輛。"
        }
      ],
      "insight": "驗算：6 輛三人車（18 人）＋ 9 輛兩人車（18 人）＝ 15 輛車、36 人，剛剛好！",
      "distractorAnalysis": {
        "D": "9 輛是「兩人共騎」的輛數，若題目問三人共騎卻全假設成三人車就會錯答成 9 輛！",
        "A": "直接拿 36 ÷ 3 ＝ 12 輛，沒考慮車子總數必須剛好 15 輛。",
        "B": "除法或減法計算失誤。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "假設全為少量（2 人車），（實際總人數 − 假設人數）÷ 單車人數差 ＝ 多量（3 人車）的數量"
      ],
      "conceptCompare": "只要兩種車每輛多 1 個人，多出的人數直接就是「換成大車的數量」；如果是 4 人座與 2 人座，記得要除以 (4 − 2 ＝ 2)！",
      "examVariations": "若改問「兩人共騎的有幾輛？」，答案為 15 − 6 ＝ 9 輛。"
    }
  },
  {
    "id": "EX2-SHIHU113-34",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U08",
    "section": "8-1",
    "sectionName": "和差問題",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第7題",
    "batch": "段考真題",
    "category": "怎樣解題",
    "level": 2,
    "difficulty": 2,
    "questionType": "choice",
    "work": "md",
    "question": "7. 全班得知老師生日即將到來，於是默默準備一個慶生會，負責買蛋糕的帆億和宣豪合買一個 420 元的生日蛋糕準備送給老師，已知宣豪比帆億多付 80 元，帆億和宣豪各付多少元買生日蛋糕？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p4.png",
    "options": [
      {
        "key": "A",
        "text": "帆億付 250 元、宣豪付 170 元",
        "trapCode": "U05_BASE_SWAP"
      },
      {
        "key": "B",
        "text": "帆億付 130 元、宣豪付 290 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "C",
        "text": "帆億付 340 元、宣豪付 80 元",
        "trapCode": "U08_SUM_DIFF_FORGET_DIV2"
      },
      {
        "key": "D",
        "text": "帆億付 170 元、宣豪付 250 元",
        "trapCode": null
      }
    ],
    "answer": "D",
    "check": {
      "expr": "(420 - 80) / 2",
      "expect": "170",
      "extraChecks": [
        {
          "expr": "(420 + 80) / 2",
          "expect": "250"
        }
      ]
    },
    "explanation": {
      "examPurpose": "和差問題應用：已知兩人合付總額（和 420 元）與相差金額（差 80 元），分別求出兩人各付多少元。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：宣豪比帆億多付 80 元，先把多出的 80 元拿開，剩下的金額兩人就一樣多："
        },
        {
          "type": "eq",
          "expr": "420 − 80 = 340",
          "unit": "元"
        },
        {
          "type": "text",
          "text": "第 2 步：平分給兩個人，算出付比較少的「帆億」付的錢："
        },
        {
          "type": "eq",
          "expr": "340 ÷ 2 = 170",
          "unit": "元（帆億）"
        },
        {
          "type": "text",
          "text": "第 3 步：宣豪比帆億多付 80 元，把 80 元加回來就是宣豪付的錢："
        },
        {
          "type": "eq",
          "expr": "170 + 80 = 250",
          "unit": "元（宣豪）"
        },
        {
          "type": "answer",
          "text": "答：帆億付 170 元，宣豪付 250 元。"
        }
      ],
      "insight": "誰多付、誰少付一定要對準名字！宣豪比帆億多付 ➔ 宣豪 250 元比較多、帆億 170 元比較少；250 ＋ 170 ＝ 420，相差 80！",
      "distractorAnalysis": {
        "A": "數字都算對，但把帆億和宣豪的金額寫反了！",
        "B": "錯用「420 ÷ 2 − 80 ＝ 130」來算，忘記 80 元也要先除以 2（40 元）。",
        "C": "算到 420 − 80 ＝ 340 後沒有除以 2，錯把 340 跟 80 當成兩人付的錢。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "較小數（帆億）＝ (和 − 差) ÷ 2",
        "較大數（宣豪）＝ (和 ＋ 差) ÷ 2"
      ],
      "conceptCompare": "用平均法也很好想：先算平均一人付 420 ÷ 2 ＝ 210 元；多付的那位多一半（＋40 變 250）、少付的那位少一半（−40 變 170）。",
      "examVariations": "常改寫成三人和差或「哥哥給弟弟 40 元後兩人一樣多，合買 420 元禮物」。"
    }
  },
  {
    "id": "EX2-SHIHU113-35",
    "unitId": "EXAM_MID2",
    "targetUnitId": "U06",
    "section": "6-1",
    "sectionName": "圓周長與正方形關係",
    "school": "高雄市立獅湖國小 (113)",
    "source": "獅湖國小 113上 期末評量 四、應用題 第8題",
    "batch": "段考真題",
    "category": "圓周長與扇形周長",
    "level": 3,
    "difficulty": 3,
    "questionType": "choice",
    "work": "md",
    "question": "8. 在正方形內部畫一個最大的圓，已知這個圓的圓周長是 78.5 公分，正方形的周長大約是多少公分？",
    "examPageImage": "images/exams/EXAM_MID2/shihu113_p4.png",
    "figureSvg": "<svg viewBox=\"0 0 280 180\" width=\"100%\" style=\"max-width:280px;background:#fff;border:1px solid #cbd5e1;border-radius:8px;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"30\" y=\"25\" width=\"110\" height=\"110\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n  <circle cx=\"85\" cy=\"80\" r=\"55\" fill=\"rgba(59,130,246,0.1)\" stroke=\"#2563eb\" stroke-width=\"2.2\"/>\n  <line x1=\"30\" y1=\"80\" x2=\"140\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"85\" cy=\"80\" r=\"2.5\" fill=\"#0f172a\"/>\n  <text x=\"85\" y=\"73\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#ef4444\">直徑 ＝ 25 公分</text>\n  <text x=\"85\" y=\"155\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">正方形邊長 ＝ 圓直徑 ＝ 25 公分</text>\n  <text x=\"210\" y=\"72\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">圓周長 78.5 公分</text>\n  <text x=\"210\" y=\"92\" font-size=\"11\" text-anchor=\"middle\" fill=\"#334155\">直徑 ＝ 78.5 ÷ 3.14</text>\n  <text x=\"210\" y=\"110\" font-size=\"11\" text-anchor=\"middle\" fill=\"#334155\">周長 ＝ 25 × 4</text>\n</svg>",
    "options": [
      {
        "key": "A",
        "text": "100 公分",
        "trapCode": null
      },
      {
        "key": "B",
        "text": "200 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      },
      {
        "key": "C",
        "text": "25 公分",
        "trapCode": "U05_ANSWER_WRONG_TARGET"
      },
      {
        "key": "D",
        "text": "50 公分",
        "trapCode": "U06_DIAMETER_RADIUS_SWAP"
      }
    ],
    "answer": "A",
    "check": {
      "expr": "78.5 / 3.14 * 4",
      "expect": "100"
    },
    "explanation": {
      "examPurpose": "掌握「正方形內畫最大的圓，圓的直徑就等於正方形的邊長」，並透過小數除法反求直徑再算正方形周長。",
      "steps": [
        {
          "type": "text",
          "text": "第 1 步：在正方形內部畫一個最大的圓，圓的直徑剛好撐滿整個正方形的邊長。先用圓周長 78.5 公分除以圓周率 3.14 算出直徑（即正方形邊長）："
        },
        {
          "type": "eq",
          "expr": "78.5 ÷ 3.14 = 25",
          "unit": "公分"
        },
        {
          "type": "longdiv",
          "dividend": "78.5",
          "divisor": "3.14",
          "mode": "exact",
          "note": "除數 3.14 往右移兩位變 314，被除數 78.5 補一個 0 變 7850，7850 ÷ 314 ＝ 25"
        },
        {
          "type": "text",
          "text": "第 2 步：正方形有 4 條一樣長的邊，把邊長乘以 4 就是正方形周長："
        },
        {
          "type": "eq",
          "expr": "25 × 4 = 100",
          "unit": "公分"
        },
        {
          "type": "answer",
          "text": "答：正方形的周長大約是 100 公分。"
        }
      ],
      "insight": "記住黃金等式：「正方形裡最大的圓 ➔ 圓直徑 ＝ 正方形邊長」！算出直徑 25 公分後，別忘記最後要乘以 4 求周長喔！",
      "distractorAnalysis": {
        "C": "只算出了圓的直徑（也是正方形邊長）25 公分，忘記乘以 4 才是正方形的周長！",
        "D": "誤把直徑 25 公分除以 2 當成正方形邊長 12.5 公分，再乘以 4 算出 50 公分。",
        "B": "誤以為 25 公分是半徑，把邊長算成 25 × 2 ＝ 50 公分，周長就變成兩倍的 200 公分。"
      }
    },
    "extensionStudy": {
      "coreFormulas": [
        "正方形內最大圓：圓的直徑 ＝ 正方形邊長",
        "正方形周長 ＝ 邊長 × 4"
      ],
      "conceptCompare": "3.14 的 25 倍是 78.5、5 倍是 15.7、4 倍是 12.56，把這幾個常考倍數記熟，遇到除法立刻就有感覺！",
      "examVariations": "若改考「在長 30 公分、寬 20 公分的長方形裡畫最大的圓，圓周長是多少？」，因為受限於較短的那一邊，最大圓的直徑只能是 20 公分（周長 62.8 公分）！"
    }
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['EXAM_MID2'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
