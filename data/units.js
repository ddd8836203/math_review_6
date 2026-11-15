// 全系統單元定義 (從 P0 基線拆分)
(function (root) {
  const DATA = [
  {
    "id": "U01",
    "no": 1,
    "title": "最大公因數與最小公倍數",
    "pages": "p.4–23",
    "hue": 255
  },
  {
    "id": "U02",
    "no": 2,
    "title": "分數除法",
    "pages": "p.24–35",
    "hue": 200
  },
  {
    "id": "U03",
    "no": 3,
    "title": "小數除法",
    "pages": "p.36–49",
    "hue": 170
  },
  {
    "id": "U04",
    "no": 4,
    "title": "比與比值",
    "pages": "p.50–69",
    "hue": 140
  },
  {
    "id": "U05",
    "no": 5,
    "title": "兩量關係",
    "pages": "p.70–83",
    "hue": 35
  },
  {
    "id": "U06",
    "no": 6,
    "title": "圓周長與扇形周長",
    "pages": "p.84–101",
    "hue": 10
  },
  {
    "id": "U07",
    "no": 7,
    "title": "放大、縮小與比例尺",
    "pages": "p.102–115",
    "hue": 320
  },
  {
    "id": "U08",
    "no": 8,
    "title": "怎樣解題",
    "pages": "p.116–135",
    "hue": 285
  },
  {
    "id": "EXAM_MID1",
    "no": "段考",
    "title": "六年級上_第一次段考",
    "pages": "六校名校段考全真題庫",
    "hue": 45,
    "isExam": true
  }
];
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
  } else {
    root.MATH_BANK_SHARDS = root.MATH_BANK_SHARDS || {};
    root.MATH_BANK_SHARDS['UNITS'] = DATA;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
