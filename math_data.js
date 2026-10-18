/* =========================================================
   六上數學特訓 — 題庫 (math_data.js)
   ---------------------------------------------------------
   ✅ 之後只要改這個檔案就能更新題庫（手機在 GitHub 網頁編輯即可）
   ✅ AI 匯出的新題，直接貼在檔案「最下面」的 QUESTION_BANK.push(...) 區
   ---------------------------------------------------------
   欄位說明：
   id          唯一代碼（不可重複）
   unitId      'U01' ~ 'U08'
   category    小分類（例：間隔問題）
   level       奧數天梯 1~5（1 課本、2 課本延伸、3 競賽入門、4 AMC 8、5 亞太盃）
   difficulty  1~5 星
   batch       '課本原型題' | '奧數天梯' | 'AI加強題庫_YYYYMMDD'
   source      出處（例：課本 p.18 例題 1）
   verified    true = 已逐字對照課本照片；false = 數據來自課本、題幹措辭尚待核對
   question    題目（可用 $...$ 寫 KaTeX；乘除直接打 × ÷；分數寫 \\frac{1}{2}）
   svg         （選填）向量圖，網頁與 A4 列印共用
   answer      最終答案
   steps       解題步驟（陣列）
   insight     （選填）奧數直覺 / 秒殺思維
   trap        （選填）{ code: 錯誤代碼, text: 常見錯法 } —— 對應 MD 檔 misconceptions
   work        （選填）A4 草稿格大小 'sm' | 'md' | 'lg'，預設 'md'
   ========================================================= */

const UNITS = [
  { id: 'U01', no: 1, title: '最大公因數與最小公倍數', pages: 'p.4–23', hue: 255 },
  { id: 'U02', no: 2, title: '分數除法', pages: 'p.24–35', hue: 200 },
  { id: 'U03', no: 3, title: '小數除法', pages: 'p.36–49', hue: 170 },
  { id: 'U04', no: 4, title: '比與比值', pages: 'p.50–69', hue: 140 },
  { id: 'U05', no: 5, title: '兩量關係', pages: 'p.70–83', hue: 35 },
  { id: 'U06', no: 6, title: '圓周長與扇形周長', pages: 'p.84–101', hue: 10 },
  { id: 'U07', no: 7, title: '放大、縮小與比例尺', pages: 'p.102–115', hue: 320 },
  { id: 'U08', no: 8, title: '怎樣解題', pages: 'p.116–135', hue: 285 },
  { id: 'EXAM_MID1', no: '段考', title: '六年級上_第一次段考', pages: '六校名校段考全真題庫', hue: 45, isExam: true },
];

/* ---------- 共用 SVG 圖形 ---------- */
const SVG_BRIDGE_80 = `
<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" font-family="Outfit, 'Noto Sans TC', sans-serif">
  <rect x="30" y="54" width="460" height="16" rx="4" fill="#e0e7ff" stroke="#3730a3" stroke-width="2"/>
  <g stroke="#3730a3" stroke-width="2">
    <line x1="30" y1="46" x2="30" y2="78"/><line x1="145" y1="48" x2="145" y2="76"/>
    <line x1="260" y1="48" x2="260" y2="76"/><line x1="375" y1="48" x2="375" y2="76"/>
    <line x1="490" y1="46" x2="490" y2="78"/>
  </g>
  <g font-size="15" fill="#1e1b4b" text-anchor="middle">
    <text x="87" y="42">20 m</text><text x="202" y="42">20 m</text><text x="317" y="42">20 m</text><text x="432" y="42">20 m</text>
  </g>
  <line x1="30" y1="98" x2="490" y2="98" stroke="#64748b" stroke-width="1.5" marker-start="url(#a)" marker-end="url(#a)"/>
  <defs><marker id="a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#64748b"/></marker></defs>
  <text x="260" y="114" font-size="15" fill="#334155" text-anchor="middle">橋長 80 m</text>
</svg>`;

const SVG_STICK_SQUARES = `
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', sans-serif">
  <g stroke="#b45309" stroke-width="5" stroke-linecap="round" fill="none">
    <rect x="30" y="30" width="60" height="60"/>
    <rect x="150" y="30" width="60" height="60"/><rect x="210" y="30" width="60" height="60"/>
    <rect x="330" y="30" width="60" height="60"/><rect x="390" y="30" width="60" height="60"/><rect x="450" y="30" width="60" height="60"/>
  </g>
  <g font-size="16" fill="#1e1b4b" text-anchor="middle" font-weight="700">
    <text x="60" y="125">1 個：4 根</text><text x="210" y="125">2 個：7 根</text><text x="420" y="125">3 個：10 根</text>
  </g>
</svg>`;

const SVG_HOLLOW_SQUARE = `
<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', sans-serif">
  <g fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.5">
    <circle cx="40" cy="50" r="9"/><circle cx="64" cy="50" r="9"/><circle cx="40" cy="74" r="9"/><circle cx="64" cy="74" r="9"/>
    <circle cx="150" cy="38" r="9"/><circle cx="174" cy="38" r="9"/><circle cx="198" cy="38" r="9"/>
    <circle cx="150" cy="62" r="9"/><circle cx="198" cy="62" r="9"/>
    <circle cx="150" cy="86" r="9"/><circle cx="174" cy="86" r="9"/><circle cx="198" cy="86" r="9"/>
    <circle cx="290" cy="26" r="9"/><circle cx="314" cy="26" r="9"/><circle cx="338" cy="26" r="9"/><circle cx="362" cy="26" r="9"/>
    <circle cx="290" cy="50" r="9"/><circle cx="362" cy="50" r="9"/>
    <circle cx="290" cy="74" r="9"/><circle cx="362" cy="74" r="9"/>
    <circle cx="290" cy="98" r="9"/><circle cx="314" cy="98" r="9"/><circle cx="338" cy="98" r="9"/><circle cx="362" cy="98" r="9"/>
  </g>
  <g font-size="15" fill="#1e1b4b" text-anchor="middle" font-weight="700">
    <text x="52" y="140">每邊 2 個：4 個</text><text x="174" y="140">每邊 3 個：8 個</text><text x="326" y="140">每邊 4 個：12 個</text>
  </g>
</svg>`;

const SVG_TRAIN_PATTERN = `
<svg viewBox="0 0 560 90" xmlns="http://www.w3.org/2000/svg" font-family="Outfit, sans-serif">
  <g fill="#fde68a" stroke="#92400e" stroke-width="2.5" stroke-linejoin="round">
    <polygon points="20,60 50,60 35,30"/><polygon points="75,30 75,60 105,45"/><polygon points="130,30 160,30 145,60"/>
    <polygon points="185,60 215,60 200,30"/><polygon points="240,30 240,60 270,45"/><polygon points="295,30 325,30 310,60"/>
    <polygon points="350,60 380,60 365,30"/>
  </g>
  <g font-size="13" fill="#64748b" text-anchor="middle">
    <text x="35" y="80">1</text><text x="90" y="80">2</text><text x="145" y="80">3</text><text x="200" y="80">4</text>
    <text x="255" y="80">5</text><text x="310" y="80">6</text><text x="365" y="80">7</text>
  </g>
  <text x="440" y="52" font-size="26" fill="#92400e">……</text>
</svg>`;

const SVG_TAPE_500_80 = `
<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', Outfit, sans-serif">
  <g font-size="16" font-weight="700" fill="#1e1b4b">
    <text x="10" y="44">升級套餐</text><text x="10" y="104">特餐</text>
  </g>
  <rect x="100" y="24" width="260" height="30" rx="5" fill="#c7d2fe" stroke="#3730a3" stroke-width="2"/>
  <rect x="360" y="24" width="80" height="30" rx="5" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
  <text x="400" y="45" font-size="15" text-anchor="middle" fill="#9f1239" font-weight="700">80 元</text>
  <rect x="100" y="84" width="260" height="30" rx="5" fill="#c7d2fe" stroke="#3730a3" stroke-width="2"/>
  <line x1="360" y1="14" x2="360" y2="124" stroke="#64748b" stroke-dasharray="5 4"/>
  <path d="M455 24 Q470 24 470 44 L470 60 Q470 69 480 69 Q470 69 470 78 L470 94 Q470 114 455 114" fill="none" stroke="#1e1b4b" stroke-width="2"/>
  <text x="490" y="74" font-size="16" font-weight="800" fill="#1e1b4b">500 元</text>
</svg>`;

const SVG_RIBBON_FLOWER = `
<svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', Outfit, sans-serif">
  <!-- 總緞帶 -->
  <rect x="20" y="30" width="480" height="26" rx="4" fill="#ede9fe" stroke="#6366f1" stroke-width="2"/>
  <!-- 4 朵花各 1/3 公尺 (每朵 106px) -->
  <g fill="#a7f3d0" stroke="#059669" stroke-width="1.5">
    <rect x="20" y="30" width="106" height="26"/>
    <rect x="126" y="30" width="106" height="26"/>
    <rect x="232" y="30" width="106" height="26"/>
    <rect x="338" y="30" width="106" height="26"/>
  </g>
  <!-- 剩餘 1/6 公尺 (56px) -->
  <rect x="444" y="30" width="56" height="26" fill="#fecdd3" stroke="#e11d48" stroke-width="1.5"/>
  <!-- 標註 -->
  <g font-size="13" font-weight="700" fill="#1e1b4b" text-anchor="middle">
    <text x="73" y="48">第1朵 (⅓m)</text>
    <text x="179" y="48">第2朵 (⅓m)</text>
    <text x="285" y="48">第3朵 (⅓m)</text>
    <text x="391" y="48">第4朵 (⅓m)</text>
    <text x="472" y="48" fill="#be123c">剩 ⅙m</text>
  </g>
  <text x="260" y="90" font-size="15" fill="#1e1b4b" text-anchor="middle" font-weight="700">總長 1½ 公尺 ＝ 4 朵花（用掉 1⅓ 公尺）＋ 剩餘 ⅙ 公尺（半朵花）</text>
  <text x="260" y="115" font-size="13" fill="#be123c" text-anchor="middle">⚠️ 陷阱警告：商 4½ 中的「½」代表「½ 朵花」，不是「½ 公尺」！</text>
</svg>`;

const SVG_DECIMAL_DIV_REMAINDER = `
<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" font-family="'Outfit', 'Noto Sans TC', sans-serif">
  <rect x="10" y="10" width="480" height="130" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <g font-size="16" fill="#1e1b4b">
    <text x="40" y="45" font-weight="700">題目：5.8 ÷ 0.35 ＝ 16 ⋯⋯ ( ？ )</text>
    <text x="40" y="78" fill="#047857" font-weight="700">✔ 正確餘數：0.2 公斤</text>
    <text x="260" y="78" font-size="14" fill="#64748b">（餘數小數點對齊原被除數 5.8）</text>
    <text x="40" y="112" fill="#be123c" font-weight="700">❌ 典型錯誤：2 或 0.02</text>
    <text x="260" y="112" font-size="14" fill="#be123c">（誤對齊向右移兩位後的 580）</text>
  </g>
</svg>`;

const SVG_RATIO_BAR = `
<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', Outfit, sans-serif">
  <g font-size="15" font-weight="700" fill="#1e1b4b">
    <text x="20" y="42">男生 (3份)</text>
    <text x="20" y="86">女生 (4份)</text>
  </g>
  <!-- 男生 3 格 -->
  <g fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5">
    <rect x="110" y="24" width="70" height="26" rx="3"/><rect x="180" y="24" width="70" height="26" rx="3"/><rect x="250" y="24" width="70" height="26" rx="3"/>
  </g>
  <!-- 女生 4 格 -->
  <g fill="#fbcfe8" stroke="#be185d" stroke-width="1.5">
    <rect x="110" y="68" width="70" height="26" rx="3"/><rect x="180" y="68" width="70" height="26" rx="3"/><rect x="250" y="68" width="70" height="26" rx="3"/><rect x="320" y="68" width="70" height="26" rx="3"/>
  </g>
  <path d="M400 24 Q415 24 415 57 Q415 94 400 94" fill="none" stroke="#4338ca" stroke-width="2"/>
  <text x="425" y="63" font-size="16" font-weight="800" fill="#4338ca">共 35 人 (每份 5 人)</text>
  <text x="145" y="42" font-size="12" fill="#1e3a8a" text-anchor="middle">5人</text>
  <text x="215" y="42" font-size="12" fill="#1e3a8a" text-anchor="middle">5人</text>
  <text x="285" y="42" font-size="12" fill="#1e3a8a" text-anchor="middle">5人</text>
</svg>`;

const SVG_BASE_COMPARE_TAPE = `
<svg viewBox="0 0 540 140" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', Outfit, sans-serif">
  <g font-size="15" font-weight="700" fill="#1e1b4b">
    <text x="15" y="42">弟弟 (基準量)</text>
    <text x="15" y="96">哥哥 (比較量)</text>
  </g>
  <!-- 基準量 120cm -->
  <rect x="130" y="24" width="240" height="26" rx="4" fill="#ddd6fe" stroke="#5b21b6" stroke-width="1.5"/>
  <text x="250" y="42" font-size="14" fill="#3b0764" text-anchor="middle" font-weight="700">120 cm (相當於 1 倍)</text>
  <!-- 比較量 150cm (240 + 60) -->
  <rect x="130" y="78" width="240" height="26" rx="4" fill="#ddd6fe" stroke="#5b21b6" stroke-width="1.5"/>
  <rect x="370" y="78" width="60" height="26" rx="4" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
  <text x="250" y="96" font-size="14" fill="#3b0764" text-anchor="middle" font-weight="700">120 cm</text>
  <text x="400" y="96" font-size="14" fill="#7c2d12" text-anchor="middle" font-weight="700">+30cm</text>
  <text x="445" y="96" font-size="15" font-weight="800" fill="#c2410c">150 cm (1.25倍)</text>
</svg>`;

const SVG_SECTOR_PERIMETER = `
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', Outfit, sans-serif">
  <g transform="translate(60, 20)">
    <!-- 扇形 r=120, 60度 -->
    <path d="M0,120 L120,120 A120,120 0 0,0 60,16.08 Z" fill="#e0e7ff" stroke="#4338ca" stroke-width="2.5"/>
    <text x="60" y="140" font-size="14" font-weight="700" fill="#312e81" text-anchor="middle">半徑 r = 10 cm</text>
    <text x="12" y="65" font-size="14" font-weight="700" fill="#312e81" text-anchor="middle">半徑 r</text>
    <text x="110" y="60" font-size="14" font-weight="700" fill="#b91c1c" text-anchor="middle">圓弧長 (約 10.47 cm)</text>
    <path d="M25,120 A25,25 0 0,0 12.5,98.35" fill="none" stroke="#4338ca" stroke-width="1.5"/>
    <text x="32" y="112" font-size="12" fill="#4338ca" font-weight="700">60°</text>
  </g>
  <g font-size="14" fill="#1e1b4b" transform="translate(250, 45)">
    <text x="0" y="20" font-weight="800" fill="#4338ca">扇形周長公式：</text>
    <text x="0" y="48">＝ 弧長 ＋ 半徑 × 2</text>
    <text x="0" y="74" fill="#b91c1c" font-weight="700">⚠️ 千萬不能只算弧長！</text>
    <text x="0" y="96" fill="#64748b">必須加上兩條圍成邊的半徑</text>
  </g>
</svg>`;

const SVG_SCALE_BAR = `
<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans TC', Outfit, sans-serif">
  <g transform="translate(30, 25)">
    <!-- 比例尺條 -->
    <rect x="0" y="20" width="80" height="12" fill="#1e1b4b"/>
    <rect x="80" y="20" width="80" height="12" fill="#fff" stroke="#1e1b4b" stroke-width="1"/>
    <rect x="160" y="20" width="80" height="12" fill="#1e1b4b"/>
    <line x1="0" y1="14" x2="0" y2="38" stroke="#1e1b4b" stroke-width="2"/>
    <line x1="80" y1="14" x2="80" y2="38" stroke="#1e1b4b" stroke-width="2"/>
    <line x1="160" y1="14" x2="160" y2="38" stroke="#1e1b4b" stroke-width="2"/>
    <line x1="240" y1="14" x2="240" y2="38" stroke="#1e1b4b" stroke-width="2"/>
    <text x="0" y="10" font-size="12" text-anchor="middle" fill="#1e1b4b">0</text>
    <text x="80" y="10" font-size="12" text-anchor="middle" fill="#1e1b4b">50</text>
    <text x="160" y="10" font-size="12" text-anchor="middle" fill="#1e1b4b">100</text>
    <text x="240" y="10" font-size="12" text-anchor="middle" fill="#1e1b4b">150 公尺</text>
    <text x="120" y="55" font-size="13" font-weight="700" fill="#4338ca" text-anchor="middle">1 公分代表實際 50 公尺 (1 : 5000)</text>
  </g>
  <g transform="translate(320, 20)" font-size="13" fill="#1e1b4b">
    <text x="0" y="22" font-weight="800" fill="#4338ca">放大/縮小核心規律：</text>
    <text x="0" y="46">● 長度（邊長、周長）：變 k 倍</text>
    <text x="0" y="70" font-weight="700" fill="#b91c1c">● 面積：變 k × k ＝ k² 倍</text>
    <text x="0" y="94" fill="#047857">● 對應角：角度完全不變！</text>
  </g>
</svg>`;


/* =========================================================
   題庫
   ========================================================= */
const QUESTION_BANK = [
  /* ==================== U01 最大公因數與最小公倍數（已對照課本） ==================== */
  {
    id: 'u01_001', unitId: 'U01', category: '質數與合數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.7 例題 3', verified: true,
    question: '下面各數中，哪些是質數？哪些是合數？<br><b>31、42、51、67、85、97</b>',
    answer: '質數：31、67、97；合數：42、51、85',
    steps: [
      '42 個位是 2 → 2 的倍數 → 合數',
      '51：5 + 1 = 6 是 3 的倍數 → 51 = 3 × 17 → 合數',
      '85 個位是 5 → 5 的倍數 → 合數',
      '31、67、97 用 2、3、5、7 試除都除不盡 → 質數',
    ],
    insight: '判斷 100 以內的數是不是質數，只要試除 2、3、5、7 就夠了（因為 11 × 11 = 121 > 100）。',
    trap: { code: 'ERR_51_IS_PRIME', text: '51 看起來像質數，其實 5 + 1 = 6，是 3 的倍數（51 = 3 × 17）。91 = 7 × 13 也是常見陷阱。' },
    work: 'sm',
  },
  {
    id: 'u01_002', unitId: 'U01', category: '質數與合數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.7 隨堂練習', verified: true,
    question: '找出 50 到 70 之間所有的質數。',
    answer: '53、59、61、67',
    steps: [
      '先刪掉偶數和個位是 5 的數，剩下 51、53、57、59、61、63、67、69',
      '數字和是 3 的倍數要刪：51（5+1=6）、57（5+7=12）、63（6+3=9）、69（6+9=15）',
      '剩下 53、59、61、67，再用 7 試除都除不盡 → 都是質數',
    ],
    trap: { code: 'ERR_51_IS_PRIME', text: '把 51、57 當成質數。' },
    work: 'sm',
  },
  {
    id: 'u01_003', unitId: 'U01', category: '質因數分解', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.10 例題 4', verified: true,
    question: '用短除法把 90 做質因數分解。',
    answer: '90 = 2 × 3 × 3 × 5',
    steps: ['2 | 90 → 45', '3 | 45 → 15', '3 | 15 → 5（5 是質數，停止）', '90 = 2 × 3 × 3 × 5'],
    trap: { code: 'ERR_EARLY_STOP', text: '除到 45 就停下來。最底下的商一定要是質數才能停。' },
  },
  {
    id: 'u01_004', unitId: 'U01', category: '質因數分解', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.10 隨堂練習 ③', verified: true,
    question: '用短除法把 45 做質因數分解。',
    answer: '45 = 3 × 3 × 5',
    steps: ['3 | 45 → 15', '3 | 15 → 5', '45 = 3 × 3 × 5'],
    trap: { code: 'ERR_DIVISOR_NOT_PRIME', text: '寫成 9 | 45 → 45 = 9 × 5。9 是合數，短除法左邊必須是質數。（課本上就有這個手寫錯誤）' },
    work: 'sm',
  },
  {
    id: 'u01_005', unitId: 'U01', category: '最大公因數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.14 例題 5', verified: true,
    question: '用短除法求 48 和 108 的最大公因數。',
    answer: '12',
    steps: ['2 | 48  108 → 24  54', '2 | 24  54 → 12  27', '3 | 12  27 → 4  9（4 和 9 互質，停止）', '最大公因數 = 2 × 2 × 3 = 12'],
    trap: { code: 'ERR_GCD_MULTIPLY_BOTTOM', text: '把底下的 4 和 9 也乘進去。最大公因數只乘「左邊那一條」。' },
  },
  {
    id: 'u01_006', unitId: 'U01', category: '最大公因數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.14 隨堂練習 ①②', verified: true,
    question: '用短除法求：<br>① 36 和 60 的最大公因數<br>② 40 和 60 的最大公因數',
    answer: '① 12　② 20',
    steps: ['① 2 | 36 60 → 2 | 18 30 → 3 | 9 15 → 3 5，最大公因數 = 2 × 2 × 3 = 12', '② 2 | 40 60 → 2 | 20 30 → 5 | 10 15 → 2 3，最大公因數 = 2 × 2 × 5 = 20'],
  },
  {
    id: 'u01_007', unitId: 'U01', category: '互質', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.14 隨堂練習 ③', verified: true,
    question: '下列各組數中，哪些互質？<br>15 和 16　／　21 和 35　／　13 和 39　／　11 和 24',
    answer: '15 和 16、11 和 24',
    steps: ['15 和 16 是連續整數 → 互質', '21 和 35 都有因數 7 → 不互質', '39 = 3 × 13 → 13 和 39 不互質', '11 是質數且 24 不是 11 的倍數 → 互質'],
    insight: '相鄰的兩個整數一定互質。',
    trap: { code: 'ERR_COPRIME_MEANS_PRIME', text: '以為兩個數都要是質數才互質。15 和 16 都是合數，但它們互質。' },
    work: 'sm',
  },
  {
    id: 'u01_008', unitId: 'U01', category: '最小公倍數', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.16 隨堂練習', verified: true,
    question: '用短除法求 48 和 84 的最小公倍數。',
    answer: '336',
    steps: ['2 | 48 84 → 24 42', '2 | 24 42 → 12 21', '3 | 12 21 → 4 7（互質，停止）', '最小公倍數 = 2 × 2 × 3 × 4 × 7 = 336'],
    insight: '口訣：最大公因數走「I」，最小公倍數走「L」（左邊一條 + 底下一排）。',
    trap: { code: 'ERR_LCM_ONLY_DIVISORS', text: '只乘左邊的 2 × 2 × 3 = 12，漏乘底下的 4 和 7。' },
  },
  {
    id: 'u01_009', unitId: 'U01', category: '最小公倍數', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.17 隨堂練習', verified: true,
    question: '找出 400 到 1000 之間，45 和 60 的所有公倍數。',
    answer: '540、720、900',
    steps: ['3 | 45 60 → 5 | 15 20 → 3 4，最小公倍數 = 3 × 5 × 3 × 4 = 180', '180 的倍數：180、360、540、720、900、1080……', '在 400 到 1000 之間：540、720、900'],
    trap: { code: 'ERR_RANGE_BOUNDARY', text: '把 360 或 1080 也算進去，沒有檢查範圍。' },
  },
  {
    id: 'u01_010', unitId: 'U01', category: '應用題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.18 例題 1', verified: true,
    question: '東東水果店進貨一箱水梨和一箱柿子，每箱都不到 200 顆。<br>① 水梨每 12 顆裝一盒或每 16 顆裝一盒，都剛好可以裝完。水梨最少有幾顆？<br>② 柿子平分成 8 盒或平分成 12 盒，都剛好可以分完。柿子最多有幾顆？',
    answer: '① 48 顆　② 192 顆',
    steps: ['① 顆數要是 12 和 16 的公倍數，最少 = 最小公倍數 = 48', '② 顆數要是 8 和 12 的公倍數，最小公倍數 = 24', '不到 200：200 ÷ 24 = 8 …… 8，24 × 8 = 192'],
    insight: '「最少」找最小公倍數；「最多但不超過」找最小公倍數的最大倍數。',
  },
  {
    id: 'u01_011', unitId: 'U01', category: '應用題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.18 例題 2', verified: true,
    question: '春季賞花專車每 20 分鐘發一班車，爬山專車每 50 分鐘發一班車，兩種專車都是在上午 5 時 30 分發第一班車。最少再經過多久時間，才會同時發車？',
    answer: '100 分鐘（1 小時 40 分鐘）',
    steps: ['同時發車的間隔 = 20 和 50 的最小公倍數', '10 | 20 50 → 2 5，最小公倍數 = 10 × 2 × 5 = 100（分鐘）'],
    insight: '延伸：下一次同時發車是上午 7 時 10 分。',
    work: 'sm',
  },
  {
    id: 'u01_012', unitId: 'U01', category: '應用題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.19 例題 3', verified: true,
    question: '有 24 個男生和 18 個女生參加小小主播營。全部男生和女生混合分組，男生和女生都剛好分完，每一組的男生一樣多，女生也一樣多。<br>① 最多可以分成幾組？<br>② 每一組有幾個男生？幾個女生？',
    answer: '① 6 組　② 每組 4 個男生、3 個女生',
    steps: ['組數要同時是 24 和 18 的因數，最多 = 最大公因數', '2 | 24 18 → 3 | 12 9 → 4 3，最大公因數 = 6', '男生 24 ÷ 6 = 4，女生 18 ÷ 6 = 3'],
  },
  {
    id: 'u01_013', unitId: 'U01', category: '應用題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.19 隨堂練習', verified: true,
    question: '老師將 34 個橡皮擦和 68 枝鉛筆全部混合裝袋，剛好裝完，每袋橡皮擦一樣多，鉛筆也一樣多。最多可以裝成幾袋？每一袋有幾個橡皮擦？幾枝鉛筆？',
    answer: '34 袋；每袋 1 個橡皮擦、2 枝鉛筆',
    steps: ['68 是 34 的倍數 → 最大公因數 = 34', '橡皮擦 34 ÷ 34 = 1，鉛筆 68 ÷ 34 = 2'],
    insight: '大數是小數的倍數時，最大公因數就是小數。',
    work: 'sm',
  },
  {
    id: 'u01_101', unitId: 'U01', category: '質數', level: 2, difficulty: 3,
    batch: '奧數天梯', source: 'Unit01 AI_SPEC level_2', verified: true,
    question: '兩個質數的和是 39，這兩個質數的乘積是多少？',
    answer: '74',
    steps: ['39 是奇數，奇數 = 偶數 + 奇數', '唯一的偶數質數是 2 → 另一個是 39 − 2 = 37（質數）', '2 × 37 = 74'],
    insight: '看到「質數相加是奇數」，第一反應：其中一個一定是 2。',
    trap: { code: 'ERR_ALL_PRIMES_ARE_ODD', text: '忘記 2 也是質數，一直找兩個奇數質數。' },
    work: 'sm',
  },
  {
    id: 'u01_102', unitId: 'U01', category: '最小公倍數', level: 3, difficulty: 3,
    batch: '奧數天梯', source: 'Unit01 AI_SPEC level_3', verified: true,
    question: '求 12、18、24 的最小公倍數。',
    answer: '72',
    steps: ['2 | 12 18 24 → 6 9 12', '3 | 6 9 12 → 2 3 4', '2 | 2 3 4 → 1 3 2（3 照抄）', '最小公倍數 = 2 × 3 × 2 × 1 × 3 × 2 = 72'],
    insight: '三個數做短除法：只要有任兩個數還有公因數就要繼續除，不能整除的數直接照抄到下一行。',
    trap: { code: 'ERR_LCM_ONLY_DIVISORS', text: '三個數除到「沒有三個數的公因數」就停，結果漏了 2 和 4 之間的公因數 2。' },
  },
  {
    id: 'u01_103', unitId: 'U01', category: '質數', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit01 AI_SPEC level_3', verified: true,
    question: '如果 p、p + 2、p + 4 三個數都是質數，p 是多少？',
    answer: 'p = 3（3、5、7）',
    steps: ['連續三個「差 2」的數 p、p+2、p+4，除以 3 的餘數剛好是 0、1、2 各一個', '所以三個數裡一定有一個是 3 的倍數', '3 的倍數又要是質數 → 只能是 3 本身 → p = 3'],
    insight: '「一定有一個是 3 的倍數」是奧數最常用的餘數分類技巧。',
    work: 'sm',
  },
  {
    id: 'u01_104', unitId: 'U01', category: '因數個數', level: 4, difficulty: 4,
    batch: '奧數天梯', source: 'Unit01 AI_SPEC level_4（AMC 8 開關燈）', verified: true,
    question: '走廊上有編號 1～100 的 100 盞燈，一開始全部關著。第 1 位同學把所有燈的開關按一次，第 2 位同學按 2 的倍數號，第 3 位同學按 3 的倍數號……一直到第 100 位同學按 100 的倍數號。最後亮著的燈有幾盞？',
    answer: '10 盞（1、4、9、16、25、36、49、64、81、100）',
    steps: ['第 n 號燈被按的次數 = n 的因數個數', '按奇數次會亮 → 因數個數是奇數', '因數成對出現（例 12：1×12、2×6、3×4），只有完全平方數會有一對「自己乘自己」→ 因數個數為奇數', '1～100 的完全平方數有 1² ～ 10²，共 10 個'],
    insight: '因數個數是奇數 ⇔ 完全平方數。',
    work: 'lg',
  },

  

  /* ==================== U01 純腦力體操（1~10星思維天梯・免動筆選擇題） ==================== */
  {
    id: 'u01_m01', unitId: 'U01', category: '純腦力體操', level: 1, stars: 1, difficulty: 1,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 1★', verified: true,
    question: '黑板上寫著一個超大的乘積算式：$$13 \\times 25 \\times 37 \\times 49 \\times 61 \\times 73$$完全不需要拿筆計算，這個乘積的「個位數字」必定是幾？',
    options: ['A. 0', 'B. 5', 'C. 3', 'D. 無法確定，需乘開才知道'],
    answer: 'B', answerKey: 'B',
    steps: [
      '所有乘數 13, 25, 37, 49, 61, 73 全部都是奇數。',
      '奇數相乘，結果必定永遠是奇數。',
      '乘數中有一個 25（個位是 5）。',
      '任何個位是 5 的數乘上奇數，末尾必定永遠是 5（$5 \\times 奇數 = \\dots 5$）。',
      '因此不需要做任何乘法運算，直接秒殺選 5！'
    ],
    insight: '數感直覺：奇數 × 5 ＝ 尾數 5；偶數 × 5 ＝ 尾數 0。',
    trap: { code: 'ERR_BLIND_CALCULATION', text: '真的拿筆從 13 × 25 開始慢慢乘，浪費時間且容易算錯。' },
    work: 'sm'
  },
  {
    id: 'u01_m02', unitId: 'U01', category: '純腦力體操', level: 1, stars: 1, difficulty: 1,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 1★', verified: true,
    question: '把前 9 個大於 0 的連續奇數加起來：$$1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17$$不用算出真正的總和，請問這個總和必定是奇數還是偶數？',
    options: ['A. 必定是奇數', 'B. 必定是偶數', 'C. 可能是奇數也可能是偶數', 'D. 取決於最後一個數字大小'],
    answer: 'A', answerKey: 'A',
    steps: [
      '偶數個奇數相加會成對湊成偶數（奇 + 奇 = 偶）。',
      '現在共有 9 個奇數相加，9 是奇數。',
      '前 8 個奇數相加是偶數，再加上最後第 9 個奇數（偶 + 奇 = 奇）。',
      '所以「奇數個奇數相加，總和必定是奇數」！'
    ],
    insight: '奇偶相消：數一數奇數有幾個。奇數個奇數 ＝ 奇數；偶數個奇數 ＝ 偶數。',
    trap: { code: 'ERR_PARITY_ADDITION', text: '誤以為數字越加越大就會變成偶數。' },
    work: 'sm'
  },
  {
    id: 'u01_m03', unitId: 'U01', category: '純腦力體操', level: 2, stars: 2, difficulty: 2,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 2★', verified: true,
    question: '有兩個很大的相鄰整數：2025 和 2026。完全不需要做短除法，它們的「最大公因數」必定是多少？',
    options: ['A. 1', 'B. 2', 'C. 5', 'D. 無法確定'],
    answer: 'A', answerKey: 'A',
    steps: [
      '輾轉相除核心定理：兩數的任意公因數，必定能整除這兩數的「差」。',
      '$2026 - 2025 = 1$。',
      '它們的公因數必須能整除 1，而 1 的正因數只有 1。',
      '所以任何兩個相鄰的連續整數，最大公因數必定是 1（必定互質）！'
    ],
    insight: '相鄰必互質：$\\gcd(n, n+1) = \\gcd(n, 1) = 1$。',
    trap: { code: 'ERR_SHORT_DIV_LARGE_NUM', text: '看到四位數就想拿筆做短除法試除。' },
    work: 'sm'
  },
  {
    id: 'u01_m04', unitId: 'U01', category: '純腦力體操', level: 2, stars: 2, difficulty: 2,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 2★', verified: true,
    question: '已知有兩個質數相加的和恰好是 99。完全不用動筆，這兩個質數的「乘積」是奇數還是偶數？',
    options: ['A. 必定是偶數', 'B. 必定是奇數', 'C. 奇數偶數皆有可能', 'D. 99 不可能拆成兩質數之和'],
    answer: 'A', answerKey: 'A',
    steps: [
      '99 是一個「奇數」。',
      '兩個整數相加為奇數，必定是「一奇一偶」（偶 + 奇 = 奇）。',
      '在數學世界所有的質數中，唯一的偶數質數只有「2」。',
      '所以這兩個質數中必定有一個是 2（另一個是 97）。',
      '既然有一個是 2，那兩數相乘必定是 $2 \\times 97 = \\text{偶數}$！'
    ],
    insight: '看到「質數相加為奇數」，第一反應：其中一個一定是 2。',
    trap: { code: 'ERR_FORGET_TWO_IS_PRIME', text: '忘記 2 是質數，誤以為所有質數都是奇數相乘必為奇數。' },
    work: 'sm'
  },
  {
    id: 'u01_m05', unitId: 'U01', category: '純腦力體操', level: 3, stars: 3, difficulty: 3,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 3★', verified: true,
    question: '一個七位數 $345678A$ 能被 9 整除。不用除法直式，只看數字特性，個位數字 $A$ 必須是多少？',
    options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
    answer: 'C', answerKey: 'C',
    steps: [
      '9 的倍數特徵：所有數碼加起來必須是 9 的倍數。',
      '棄九法秒殺：兩兩湊成 9 直接劃掉！',
      '$3 + 6 = 9$（劃掉），$4 + 5 = 9$（劃掉）。',
      '只剩下 $7 + 8 = 15$。',
      '15 加上 $A$ 要能被 9 整除（最接近的是 18），因此 $A = 18 - 15 = 3$！'
    ],
    insight: '棄九法：數碼中只要湊成 9 就直接丟掉，心算速度快十倍。',
    trap: { code: 'ERR_SUM_MANUALLY', text: '把全部數字一個個慢吞吞加總，容易加錯。' },
    work: 'sm'
  },
  {
    id: 'u01_m06', unitId: 'U01', category: '純腦力體操', level: 3, stars: 3, difficulty: 3,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 3★', verified: true,
    question: '隨便寫一個三位數（例如 742），將它的百位和個位對調寫成新數（247）。這兩個三位數的差（$742 - 247 = 495$），必定是哪一個數的倍數？',
    options: ['A. 7', 'B. 9', 'C. 13', 'D. 17'],
    answer: 'B', answerKey: 'B',
    steps: [
      '設原三位數為 $100a + 10b + c$，對調後為 $100c + 10b + a$。',
      '兩數相減：$(100a + 10b + c) - (100c + 10b + a) = 99a - 99c = 99(a - c)$。',
      '中間的十位 $10b$ 完全抵消，差永遠是 99 的倍數！',
      '既然是 99 的倍數，當然必定是 9（也是 11）的倍數！'
    ],
    insight: '代數對稱：對調首尾做差，十位抵消，差恆為 99 的倍數。',
    trap: { code: 'ERR_NO_ALGEBRA_INTUITION', text: '以為這只是巧合，不知道位值原理的保證性。' },
    work: 'sm'
  },
  {
    id: 'u01_m07', unitId: 'U01', category: '純腦力體操', level: 4, stars: 4, difficulty: 4,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 4★', verified: true,
    question: '甲數和乙數是兩個不同的正整數，且甲數小於乙數（甲 $<$ 乙）。甲數和乙數的「最大公因數」，最大可能達到多少？',
    options: ['A. 等於乙數', 'B. 等於甲數', 'C. 等於乙數的一半', 'D. 大於甲數'],
    answer: 'B', answerKey: 'B',
    steps: [
      '因數的定義：任何數的因數，都不可能大於這個數本身。',
      '公因數既然是甲數的因數，就絕不可能大於甲數（$\\gcd \\le \\text{甲}$）。',
      '當乙數剛好是甲數的倍數時（例如甲=6，乙=18），兩數的最大公因數就是甲數本身（6）！',
      '所以最大可能達到的上限就是甲數。'
    ],
    insight: '尺度邊界感：公因數不超過較小數，公倍數不小於較大數。',
    trap: { code: 'ERR_BOUND_CONFUSION', text: '誤以為可能等於乙數，但因數不可能超過較小的甲數。' },
    work: 'sm'
  },
  {
    id: 'u01_m08', unitId: 'U01', category: '純腦力體操', level: 4, stars: 4, difficulty: 4,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 4★', verified: true,
    question: '已知兩正整數 $A$ 和 $B$ 的乘積 $A \\times B = 360$，且它們互質（最大公因數為 1）。那麼 $A$ 和 $B$ 的「最小公倍數」是多少？',
    options: ['A. 1', 'B. 60', 'C. 180', 'D. 360'],
    answer: 'D', answerKey: 'D',
    steps: [
      '兩數因倍數黃金恆等式：$A \\times B = \\gcd(A, B) \\times \\operatorname{lcm}(A, B)$。',
      '題目已知最大公因數 $\\gcd(A, B) = 1$。',
      '代入恆等式：$360 = 1 \\times \\operatorname{lcm}(A, B)$。',
      '直接得出最小公倍數 $\\operatorname{lcm}(A, B) = 360$！根本不用找出 $A$ 和 $B$ 分別是多少。'
    ],
    insight: '整體性思維：利用 $A \\times B = \\gcd \\times \\operatorname{lcm}$，互質時乘積就是最小公倍數。',
    trap: { code: 'ERR_SEARCH_FACTORS', text: '試圖把 360 分解找 A 和 B，浪費寶貴時間。' },
    work: 'sm'
  },
  {
    id: 'u01_m09', unitId: 'U01', category: '純腦力體操', level: 5, stars: 5, difficulty: 5,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 5★', verified: true,
    question: '在 1 到 100 的所有正整數中，有哪些數的正因數個數是「奇數」個？',
    options: ['A. 所有的質數', 'B. 所有的偶數', 'C. 完全平方數（如 1, 4, 9, 16...）', 'D. 所有的奇數'],
    answer: 'C', answerKey: 'C',
    steps: [
      '一般整數的因數都是「成雙成對」出現的（例如 12 的因數：$1\\times 12, 2\\times 6, 3\\times 4$ 成對出現）。',
      '只有當一個數是「自己乘自己」（完全平方數，如 $36 = 6 \\times 6$）時，中間那對因數重複只有一個。',
      '因此，只有完全平方數的因數個數才是「奇數」！',
      '其餘所有整數的因數個數皆為偶數。'
    ],
    insight: '成對抵消思維：因數成對 $a \\times b = N$，只有 $a = b$ 完全平方數才會落單成奇數。',
    trap: { code: 'ERR_PRIME_HAS_ODD_FACTORS', text: '誤以為質數是奇數個因數，其實質數有 1 和自己共 2 個因數（2 是偶數）。' },
    work: 'sm'
  },
  {
    id: 'u01_m10', unitId: 'U01', category: '純腦力體操', level: 5, stars: 5, difficulty: 5,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 5★', verified: true,
    question: '如果一個正整數「恰好只有 3 個正因數」，那麼這個數一定具有什麼本質結構？',
    options: ['A. 它是某個質數的 2 倍', 'B. 它是某個質數的平方（質數$^2$）', 'C. 它一定是某個質數', 'D. 它是任意奇數的平方'],
    answer: 'B', answerKey: 'B',
    steps: [
      '因數個數為奇數 $\\implies$ 必為完全平方數。',
      '因數個數公式：若質因數分解為 $p^k$，因數個數是 $k + 1$。',
      '因數個數恰為 3 $\\implies k + 1 = 3 \\implies k = 2$。',
      '底數 $p$ 必須是質數！所以這個數必定是「某質數的平方」（例如 $2^2=4$ 有 1,2,4；$3^2=9$ 有 1,3,9；$5^2=25$ 有 1,5,25）。'
    ],
    insight: '質數平方數結構：只有 1、$p$、$p^2$ 三個因數。合數平方（如 $16=4^2$）有 5 個因數。',
    trap: { code: 'ERR_ANY_SQUARE', text: '誤以為任何平方數都是 3 個因數，例如 16 有 1, 2, 4, 8, 16 共 5 個。' },
    work: 'sm'
  },
  {
    id: 'u01_m11', unitId: 'U01', category: '純腦力體操', level: 6, stars: 6, difficulty: 6,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 6★', verified: true,
    question: '任選三個連續正整數相乘：$n \\times (n+1) \\times (n+2)$。不管 $n$ 是多少，這個乘積一定能被哪一個數整除？',
    options: ['A. 4', 'B. 6', 'C. 9', 'D. 12'],
    answer: 'B', answerKey: 'B',
    steps: [
      '三個連續整數中，必定至少含有一個 2 的倍數（每 2 個數就有一個偶數）。',
      '三個連續整數中，必定恰好含有一個 3 的倍數（每 3 個數就有一個 3 的倍數）。',
      '既然既能被 2 整除，又能被 3 整除，且 2 與 3 互質，乘積必定能被 $2 \\times 3 = 6$ 整除！'
    ],
    insight: '抽屜原理特例：$k$ 個連續整數相乘，必能被 $k!$（$k$ 的階乘）整除。3 個連續數必被 $3! = 6$ 整除。',
    trap: { code: 'ERR_SUBSTITUTE_EXTREME', text: '代入 $1 \\times 2 \\times 3 = 6$，發現能整除 6 但不能整除 12，排除 12。' },
    work: 'sm'
  },
  {
    id: 'u01_m12', unitId: 'U01', category: '純腦力體操', level: 6, stars: 6, difficulty: 6,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 6★', verified: true,
    question: '已知有兩個質數 $P$ 和 $Q$，且它們的差 $P - Q = 1$。那麼 $P + Q$ 的值是多少？',
    options: ['A. 3', 'B. 5', 'C. 7', 'D. 9'],
    answer: 'B', answerKey: 'B',
    steps: [
      '相差 1 表示 $P$ 和 $Q$ 是「相鄰的連續整數」。',
      '相鄰兩整數必為「一奇一偶」。',
      '所有質數中唯一的偶數質數是 2，所以較小的一定是 $Q = 2$！',
      '較大的質數則是 $P = 2 + 1 = 3$。',
      '因此 $P + Q = 3 + 2 = 5$！'
    ],
    insight: '唯一相鄰質數對：全世界只有 (2, 3) 這一對質數相差 1，其他質數全都是奇數，差至少為 2。',
    trap: { code: 'ERR_LOOK_FOR_OTHERS', text: '想找其他奇質數，忘了所有大於 2 的質數都是奇數。' },
    work: 'sm'
  },
  {
    id: 'u01_m13', unitId: 'U01', category: '純腦力體操', level: 7, stars: 7, difficulty: 7,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 7★', verified: true,
    question: '有一籃橘子，每 3 個一數剩 2 個，每 4 個一數剩 3 個，每 5 個一數剩 4 個。這籃橘子只要「再補進幾個」，就能剛好同時被 3、4、5 整除？',
    options: ['A. 1 個', 'B. 2 個', 'C. 3 個', 'D. 4 個'],
    answer: 'A', answerKey: 'A',
    steps: [
      '不足同餘觀察：',
      '「每 3 個剩 2 個」相當於「差 1 個就湊滿 3 個」。',
      '「每 4 個剩 3 個」相當於「差 1 個就湊滿 4 個」。',
      '「每 5 個剩 4 個」相當於「差 1 個就湊滿 5 個」。',
      '三種分法全部都「只差 1 個」！所以只要再補進 1 個，就能同時被 3、4、5 整除。'
    ],
    insight: '逆向同餘：餘數 $r$ 與除數 $m$ 若有相同差額 $m - r = 1$，補 1 個即為公倍數。',
    trap: { code: 'ERR_CHINESE_REMAINDER_COMPLEX', text: '試圖用中國剩餘定理算最小數，忘了題目只問「要補幾個」。' },
    work: 'sm'
  },
  {
    id: 'u01_m14', unitId: 'U01', category: '純腦力體操', level: 7, stars: 7, difficulty: 7,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 7★', verified: true,
    question: '已知正整數 $A$ 是 6 的倍數。那麼 $A$ 與 $A + 6$ 的最大公因數是多少？',
    options: ['A. 1', 'B. 2', 'C. 3', 'D. 6'],
    answer: 'D', answerKey: 'D',
    steps: [
      '輾轉相除原理：$\\gcd(A, A + 6) = \\gcd(A, (A + 6) - A) = \\gcd(A, 6)$。',
      '題目已明確說明 $A$ 是 6 的倍數。',
      '6 的倍數與 6 的最大公因數，必定就是 6 本身！'
    ],
    insight: '差值輾轉相除：$\\gcd(x, x+k) = \\gcd(x, k)$。若 $x$ 是 $k$ 的倍數，最大公因數即為 $k$。',
    trap: { code: 'ERR_TRY_CONCRETE_VALUES_FAIL', text: '代入特定數字時算錯，其實只要套用輾轉相減。' },
    work: 'sm'
  },
  {
    id: 'u01_m15', unitId: 'U01', category: '純腦力體操', level: 8, stars: 8, difficulty: 8,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 8★', verified: true,
    question: '從 1 到 10 這 10 個整數中，任意取出 6 個不同的數。請問這 6 個數中，是否「必定存在」兩個數，它們的和等於 11？',
    options: ['A. 必定存在', 'B. 必定不存在', 'C. 不一定，要看挑選哪些數', 'D. 必須挑 7 個數才能保證'],
    answer: 'A', answerKey: 'A',
    steps: [
      '抽屜原理構造：把 1 到 10 配成「和為 11」的 5 個抽屜：',
      '抽屜 1：{1, 10}，抽屜 2：{2, 9}，抽屜 3：{3, 8}，抽屜 4：{4, 7}，抽屜 5：{5, 6}。',
      '總共只有 5 個抽屜，現在要挑選 6 個數（6 隻鴿子）。',
      '根據抽屜原理，必定至少有 2 個數來自「同一個抽屜」！',
      '落在同一個抽屜裡的兩個數，相加剛好就是 11！所以必定存在。'
    ],
    insight: '鴿籠構造思維：將元素配對成和為目標的抽屜，個數超過抽屜數即保證命中。',
    trap: { code: 'ERR_WORST_CASE_MISUNDERSTOOD', text: '以為可以避開和為 11，但最多只能避開 5 個（每個抽屜挑 1 個），第 6 個必破防。' },
    work: 'sm'
  },
  {
    id: 'u01_m16', unitId: 'U01', category: '純腦力體操', level: 8, stars: 8, difficulty: 8,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 8★', verified: true,
    question: '任意寫下 5 個不同的正整數。不用知道它們是多少，其中必定能找到兩個數，它們的「差」是哪一個數的倍數？',
    options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
    answer: 'B', answerKey: 'B',
    steps: [
      '任何整數除以 4 的餘數只有 4 種可能：0, 1, 2, 3。',
      '把這 4 種餘數當作 4 個抽屜。',
      '任意挑選 5 個整數放進這 4 個抽屜，根據抽屜原理，必定至少有 2 個數落在同一個抽屜（除以 4 餘數相同）。',
      '兩數除以 4 的餘數相同，它們相減時餘數相消，差必定是 4 的倍數！'
    ],
    insight: '同餘抽屜原理：$n+1$ 個數中，必有兩數除以 $n$ 餘數相同，故差為 $n$ 的倍數。',
    trap: { code: 'ERR_CONFUSE_N_AND_N_PLUS_ONE', text: '選了 5，但 5 個數是保證差為 4 的倍數，不是 5 的倍數。' },
    work: 'sm'
  },
  {
    id: 'u01_m17', unitId: 'U01', category: '純腦力體操', level: 9, stars: 9, difficulty: 9,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 9★', verified: true,
    question: '設 $N = 2 \\times 3 \\times 5 \\times 7 + 1 = 211$。完全不需要試除，請問 $N$ 能被 2、3、5、7 其中的任何一個數整除嗎？',
    options: ['A. 能被 2 整除', 'B. 能被 3 整除', 'C. 能被 7 整除', 'D. 完全不能被其中任何一個整除'],
    answer: 'D', answerKey: 'D',
    steps: [
      '觀察算式結構：$N = (2 \\times 3 \\times 5 \\times 7) + 1$。',
      '前項 $2 \\times 3 \\times 5 \\times 7$ 同時是 2, 3, 5, 7 的倍數。',
      '後面多加了 1，所以：',
      '$N \\div 2$ 餘 1；$N \\div 3$ 餘 1；$N \\div 5$ 餘 1；$N \\div 7$ 餘 1。',
      '每一項除出來都必定留下餘數 1，因此絕不可能被 2, 3, 5, 7 任何一個整除！'
    ],
    insight: '歐幾里得質數無窮構造：$P_1 \\times P_2 \\dots \\times P_k + 1$ 與所有已知質數互質。',
    trap: { code: 'ERR_TEST_DIVISIBILITY_SLOWLY', text: '拿 211 慢慢除以 7，不知道乘積加 1 的餘數必為 1 結構。' },
    work: 'sm'
  },
  {
    id: 'u01_m18', unitId: 'U01', category: '純腦力體操', level: 9, stars: 9, difficulty: 9,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 9★', verified: true,
    question: '設 $n$ 為任意正整數。兩個連續奇數 $2n + 1$ 與 $2n + 3$ 的最大公因數只可能是多少？',
    options: ['A. 1', 'B. 2', 'C. 3', 'D. 視 $n$ 的大小而定'],
    answer: 'A', answerKey: 'A',
    steps: [
      '兩數之差：$(2n + 3) - (2n + 1) = 2$。',
      '公因數必須能整除兩數之差，所以公因數只能是 2 的正因數（1 或 2）。',
      '但 $2n + 1$ 和 $2n + 3$ 明確都是「奇數」，奇數不可能有公因數 2。',
      '排除 2 之後，公因數只剩下 1！',
      '因此任意兩個相鄰的連續奇數，必定互質！'
    ],
    insight: '兩步秒殺：差為 2 $\\implies$ 公因數只能是 1 或 2；奇數排除 2 $\\implies$ 只能是 1。',
    trap: { code: 'ERR_CHOOSE_TWO', text: '看到差是 2 就以為最大公因數是 2，忘了奇數不能被 2 整除。' },
    work: 'sm'
  },
  {
    id: 'u01_m19', unitId: 'U01', category: '純腦力體操', level: 10, stars: 10, difficulty: 10,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 10★（AMC 8 不變量）', verified: true,
    question: '黑板上寫著 1 到 20 共 20 個整數。小華每次擦掉其中任意兩個數 $a$ 和 $b$，並在黑板上寫上它們的差 $|a - b|$。重複這個操作 19 次後，黑板上只剩下最後 1 個數。請問最後剩下的這個數，必定是奇數還是偶數？',
    options: ['A. 必定是奇數', 'B. 必定是偶數', 'C. 奇數偶數皆有可能', 'D. 取決於每次擦掉哪兩個數'],
    answer: 'B', answerKey: 'B',
    steps: [
      '奧數不變量核心思維：考察黑板上「所有數的總和」的奇偶性！',
      '注意：$(a + b)$ 和 $|a - b|$ 的奇偶性完全相同（同奇相減得偶、同偶相減得偶、一奇一偶相減得奇）。',
      '因此每次擦掉 $a, b$ 寫上 $|a - b|$，黑板上所有數總和的奇偶性「永遠不會改變」！',
      '原本 1 到 20 中，奇數有 10 個（1, 3, 5 ... 19）。',
      '10 個奇數相加，總和是「偶數」！',
      '既然初始總和是偶數，經過 19 次操作後，最後剩下的那唯一一個數，也必定是「偶數」！'
    ],
    insight: '不變量大法：兩數相減與相加同奇偶，操作中「奇數個數的奇偶性」恆定不變。',
    trap: { code: 'ERR_SIMULATE_CHAOS', text: '試圖手動模擬擦拭過程，被無限多的可能組合嚇住。' },
    work: 'sm'
  },
  {
    id: 'u01_m20', unitId: 'U01', category: '純腦力體操', level: 10, stars: 10, difficulty: 10,
    batch: '純腦力體操', source: '早餐免動筆思維天梯 10★（亞太盃滿分直覺）', verified: true,
    question: '四個互不相同的質數 $a, b, c, d$ 滿足 $a < b < c < d$，且它們的和剛好是 41（$a + b + c + d = 41$）。完全不需要猜測這四個數是多少，其中最小的質數 $a$ 必定是多少？',
    options: ['A. 2', 'B. 3', 'C. 5', 'D. 7'],
    answer: 'A', answerKey: 'A',
    steps: [
      '41 是一個「奇數」。',
      '假設 $a, b, c, d$ 全部都是奇質數，那麼 4 個奇數相加必定是「偶數」（奇+奇+奇+奇 = 偶）。',
      '這與總和等於 41（奇數）產生嚴重矛盾！',
      '因此這四個質數中「不能全部是奇數」，必須至少含有一個偶數質數。',
      '在數學世界裡，唯一的偶數質數只有 2！',
      '既然 2 是其中一個質數，且 2 是所有質數中最小的，那麼題目中排在最前面的最小質數 $a$，必定就是 2！'
    ],
    insight: '反證奇偶法：四奇數之和為偶，和為奇數必含 2，最小質數秒定 2。',
    trap: { code: 'ERR_GUESS_AND_CHECK', text: '花幾分鐘拿筆盲目湊數字，忘了用奇偶性 1 秒秒殺。' },
    work: 'sm'
  },

  /* ==================== U02 分數除法 ==================== */
  {
    id: 'u02_001', unitId: 'U02', category: '最簡分數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.26 例題 1', verified: true,
    question: '六年一班共有 28 個人，其中 12 個人參加合唱團。參加合唱團的人數占全班人數的幾分之幾？（請化為最簡分數）',
    answer: '$\\frac{3}{7}$',
    steps: ['求比例：$\\frac{12}{28}$', '分子分母求最大公因數：$(12, 28) = 4$', '約分：$\\frac{12 \\div 4}{28 \\div 4} = \\frac{3}{7}$'],
    insight: '分子和分母互質（最大公因數是 1）的分數，就是最簡分數。',
    trap: { code: 'ERR_NOT_FULLY_REDUCED', text: '只約除以 2 寫成 6/14，未約分至最簡分數。' },
    work: 'sm',
  },
  {
    id: 'u02_002', unitId: 'U02', category: '最簡分數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.27 例題 2', verified: true,
    question: '把下列分數化為最簡分數：<br>① $\\frac{18}{24}$　② $\\frac{35}{42}$　③ $2\\frac{16}{20}$',
    answer: '① $\\frac{3}{4}$　② $\\frac{5}{6}$　③ $2\\frac{4}{5}$',
    steps: ['① (18, 24) = 6 → 18/24 = 3/4', '② (35, 42) = 7 → 35/42 = 5/6', '③ 帶分數整數部分不變，(16, 20) = 4 → 2又4/5'],
    work: 'sm',
  },
  {
    id: 'u02_003', unitId: 'U02', category: '同分母分數除法', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.28 例題 1', verified: true,
    question: '有 3 條長度相同的緞帶，每 $\\frac{1}{4}$ 條剪成一段，全部剪完，可以剪成幾段？',
    answer: '12 段',
    steps: ['1 條緞帶有 4 個 $\\frac{1}{4}$ 條', '3 條緞帶有 $3 \\times 4 = 12$ 個 $\\frac{1}{4}$ 條', '算式：$3 \\div \\frac{1}{4} = 3 \\times 4 = 12$ 段'],
    insight: '整數除以單位分數 $\\frac{1}{n}$，相當於乘以 $n$。',
    work: 'sm',
  },
  {
    id: 'u02_004', unitId: 'U02', category: '同分母分數除法', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.29 例題 2', verified: true,
    question: '有 $\\frac{6}{7}$ 公升的柳橙汁，每 $\\frac{2}{7}$ 公升倒滿 1 杯，全部倒完，共可倒滿幾杯？',
    answer: '3 杯',
    steps: ['$\\frac{6}{7}$ 是 6 個 $\\frac{1}{7}$，$\\frac{2}{7}$ 是 2 個 $\\frac{1}{7}$', '同分母分數相除，直接用分子除以分子：$6 \\div 2 = 3$', '算式：$\\frac{6}{7} \\div \\frac{2}{7} = 6 \\div 2 = 3$ 杯'],
    insight: '同分母代表計數單位相同，直接算「幾個單位除以幾個單位」。',
    work: 'sm',
  },
  {
    id: 'u02_005', unitId: 'U02', category: '同分母分數除法', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.29 例題 3', verified: true,
    question: '一袋麵粉重 $\\frac{7}{9}$ 公斤，做一塊麵包需要 $\\frac{2}{9}$ 公斤，全部用完，可以做出幾塊麵包？',
    answer: '$3\\frac{1}{2}$ 塊（或 $\\frac{7}{2}$ 塊）',
    steps: ['同分母分子相除：$7 \\div 2 = \\frac{7}{2} = 3\\frac{1}{2}$', '算式：$\\frac{7}{9} \\div \\frac{2}{9} = 7 \\div 2 = 3\\frac{1}{2}$ 塊'],
    work: 'sm',
  },
  {
    id: 'u02_006', unitId: 'U02', category: '帶分數除法', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.30 例題 5', verified: true,
    question: '有 $2\\frac{3}{4}$ 公升的果汁，每 $1\\frac{1}{4}$ 公升裝 1 瓶，全部裝完，可裝成幾瓶？',
    answer: '$2\\frac{1}{5}$ 瓶（或 $\\frac{11}{5}$ 瓶）',
    steps: [
      '遇到帶分數相除，第一步必須化為假分數！',
      '$2\\frac{3}{4} = \\frac{11}{4}$， $1\\frac{1}{4} = \\frac{5}{4}$',
      '同分母相除：$\\frac{11}{4} \\div \\frac{5}{4} = 11 \\div 5 = \\frac{11}{5} = 2\\frac{1}{5}$ 瓶',
    ],
    trap: { code: 'ERR_FRAC_DIV_MIXED_DIRECT', text: '帶分數直接相除（把 2÷1 加上 3/4÷1/4），切記一定要先化為假分數！' },
    work: 'sm',
  },
  {
    id: 'u02_007', unitId: 'U02', category: '異分母分數除法', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.31 例題 2', verified: true,
    question: '有 $\\frac{3}{4}$ 公斤的紅糖，要分裝成每包 $\\frac{2}{5}$ 公斤，全部裝完，可裝成幾包？',
    answer: '$1\\frac{7}{8}$ 包（或 $\\frac{15}{8}$ 包）',
    steps: [
      '除以分數等於乘以倒數（除號變乘號，除數翻跟斗）：',
      '$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2}$',
      '分子相乘、分母相乘：$\\frac{3 \\times 5}{4 \\times 2} = \\frac{15}{8} = 1\\frac{7}{8}$ 包',
    ],
    insight: '除以 $\\frac{a}{b}$ ＝ 乘以 $\\frac{b}{a}$。',
    trap: { code: 'ERR_FRAC_DIV_NO_RECIPROCAL', text: '除號改成乘號，卻忘記把除數顛倒成 5/2。' },
    work: 'sm',
  },
  {
    id: 'u02_008', unitId: 'U02', category: '分數除以整數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.32 例題 4', verified: true,
    question: '美美做了 $\\frac{12}{7}$ 公升的綜合果汁，平分給 5 個人，全部分完，每人可分得幾公升？',
    answer: '$\\frac{12}{35}$ 公升',
    steps: ['平分給 5 人即除以 5：$\\frac{12}{7} \\div 5$', '整數 5 的倒數是 $\\frac{1}{5}$', '$\\frac{12}{7} \\times \\frac{1}{5} = \\frac{12}{35}$ 公升'],
    work: 'sm',
  },
  {
    id: 'u02_009', unitId: 'U02', category: '分數除法大魔王', level: 2, difficulty: 4,
    batch: '課本原型題', source: '課本 p.32 思考帽', verified: true,
    question: '緞帶長 $1\\frac{1}{2}$ 公尺，每 $\\frac{1}{3}$ 公尺做 1 朵花，最多可做成幾朵？還剩下幾公尺的緞帶？',
    svg: SVG_RIBBON_FLOWER,
    answer: '最多可做 4 朵，剩下 $\\frac{1}{6}$ 公尺',
    steps: [
      '化假分數相除：$1\\frac{1}{2} \\div \\frac{1}{3} = \\frac{3}{2} \\times \\frac{3}{1} = \\frac{9}{2} = 4\\frac{1}{2}$（朵）',
      '整數商是 4，表示最多做 4 朵花。',
      '注意！餘數分數是「$\\frac{1}{2}$ 朵花」，不是 $\\frac{1}{2}$ 公尺！',
      '還原為實體長度：每朵 $\\frac{1}{3}$ 公尺 $\\times \\frac{1}{2}$ 朵 ＝ $\\frac{1}{6}$ 公尺',
      '驗算：4 朵用掉 $4 \\times \\frac{1}{3} = \\frac{4}{3}$ 公尺，$1\\frac{1}{2} - \\frac{4}{3} = \\frac{9}{6} - \\frac{8}{6} = \\frac{1}{6}$ 公尺 ✔',
    ],
    insight: '大魔王考點：帶分數商的真分數部分是「除數單位的幾分之幾」，乘回除數才是真正的長度！',
    trap: { code: 'ERR_FRAC_DIV_REMAINDER_UNIT', text: '誤將商 $4\\frac{1}{2}$ 的真分數直接當答案，回答「剩 $\\frac{1}{2}$ 公尺」。' },
    work: 'lg',
  },
  {
    id: 'u02_010', unitId: 'U02', category: '被除數、除數與商', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.33 例題 1', verified: true,
    question: '在 $\\square$ 裡填入 $>$、$<$ 或 $=$：<br>① $\\frac{5}{6} \\div \\frac{2}{3} \\ \\square \\ \\frac{5}{6}$<br>② $\\frac{5}{6} \\div 1 \\ \\square \\ \\frac{5}{6}$<br>③ $\\frac{5}{6} \\div \\frac{4}{3} \\ \\square \\ \\frac{5}{6}$',
    answer: '① $>$　② $=$　③ $<$',
    steps: [
      '① 除數 $\\frac{2}{3} < 1$，商比被除數大 → 填 $>$',
      '② 除數 $= 1$，商等於被除數 → 填 $=$',
      '③ 除數 $\\frac{4}{3} > 1$，商比被除數小 → 填 $<$',
    ],
    insight: '切蛋糕法則：除數 $< 1$（切得更細），份數反而增加（商 $>$ 被除數）。',
    trap: { code: 'ERR_FRAC_RELATION_REVERSE', text: '受整數除法直覺影響，誤以為除法算出來一定會變小。' },
    work: 'sm',
  },
  {
    id: 'u02_011', unitId: 'U02', category: '綜合應用', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.35 練習園地', verified: true,
    question: '一個長方形花圃的面積是 $15\\frac{3}{4}$ 平方公尺，長是 $4\\frac{1}{2}$ 公尺，寬是多少公尺？',
    answer: '$3\\frac{1}{2}$ 公尺（或 $\\frac{7}{2}$ 公尺）',
    steps: [
      '寬 ＝ 面積 $\\div$ 長',
      '$15\\frac{3}{4} \\div 4\\frac{1}{2} = \\frac{63}{4} \\div \\frac{9}{2}$',
      '顛倒相乘並約分：$\\frac{63}{4} \\times \\frac{2}{9} = \\frac{7 \\times 1}{2 \\times 1} = \\frac{7}{2} = 3\\frac{1}{2}$ 公尺',
    ],
    work: 'sm',
  },
  {
    id: 'u02_012', unitId: 'U02', category: '綜合應用', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.35 練習園地', verified: true,
    question: '水壺裡有 $3\\frac{1}{5}$ 公升的水，每 $\\frac{2}{5}$ 公升裝成 1 杯，最多可裝滿幾杯？還剩下多少公升的水？',
    answer: '剛好裝滿 8 杯，沒有剩下',
    steps: ['$3\\frac{1}{5} = \\frac{16}{5}$', '$\\frac{16}{5} \\div \\frac{2}{5} = 16 \\div 2 = 8$ 杯，剛好整除無餘數'],
    work: 'sm',
  },
  {
    id: 'u02_101', unitId: 'U02', category: '繁分數運算', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit02 AI_SPEC level_1（繁分數簡算）', verified: true,
    question: '計算下列繁分數之值：$$\\frac{3\\frac{1}{3} \\times 1\\frac{1}{5}}{2\\frac{2}{3} \\div 1\\frac{7}{9}} = ?$$',
    answer: '$\\frac{8}{3}$（或 $2\\frac{2}{3}$）',
    steps: [
      '分子部分：$\\frac{10}{3} \\times \\frac{6}{5} = 4$',
      '分母部分：$\\frac{8}{3} \\div \\frac{16}{9} = \\frac{8}{3} \\times \\frac{9}{16} = \\frac{3}{2}$',
      '繁分數化簡：$4 \\div \\frac{3}{2} = 4 \\times \\frac{2}{3} = \\frac{8}{3} = 2\\frac{2}{3}$',
    ],
    insight: '繁分數就是「分子 $\\div$ 分母」，分層擊破。',
    work: 'md',
  },
  {
    id: 'u02_102', unitId: 'U02', category: '連分數化簡', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit02 AI_SPEC level_2（連分數）', verified: true,
    question: '化簡下列連分數為最簡分數：$$1 + \\frac{1}{2 + \\frac{1}{3 + \\frac{1}{4}}}$$',
    answer: '$\\frac{43}{30}$（或 $1\\frac{13}{30}$）',
    steps: [
      '從最底層開始往上算：',
      '底層：$3 + \\frac{1}{4} = \\frac{13}{4}$',
      '中層倒數：$1 \\div \\frac{13}{4} = \\frac{4}{13}$',
      '中層和：$2 + \\frac{4}{13} = \\frac{30}{13}$',
      '最外層倒數：$1 \\div \\frac{30}{13} = \\frac{13}{30}$',
      '總和：$1 + \\frac{13}{30} = \\frac{43}{30}$',
    ],
    insight: '連分數技巧：由下而上、層層倒數翻轉。',
    work: 'md',
  },
  {
    id: 'u02_103', unitId: 'U02', category: '工程問題', level: 4, difficulty: 4,
    batch: '奧數天梯', source: 'Unit02 AI_SPEC level_3（水池工程）', verified: true,
    question: '有一水池，甲水管單獨注水需 $2\\frac{1}{2}$ 小時注滿，乙水管單獨注水需 $3\\frac{3}{4}$ 小時注滿。若兩管同時注水，且池底排水管每小時排出全池的 $\\frac{1}{15}$，將空水池注滿需多少小時？',
    answer: '$1\\frac{2}{3}$ 小時（或 $\\frac{5}{3}$ 小時）',
    steps: [
      '甲每小時注水速率：$1 \\div \\frac{5}{2} = \\frac{2}{5}$',
      '乙每小時注水速率：$1 \\div \\frac{15}{4} = \\frac{4}{15}$',
      '每小時淨進水量：$\\frac{2}{5} + \\frac{4}{15} - \\frac{1}{15} = \\frac{6}{15} + \\frac{4}{15} - \\frac{1}{15} = \\frac{9}{15} = \\frac{3}{5}$',
      '注滿全池所需時間：$1 \\div \\frac{3}{5} = \\frac{5}{3} = 1\\frac{2}{3}$ 小時',
    ],
    insight: '工程問題：總工作量設為 1，工作效率 ＝ 1 ÷ 時間。',
    work: 'lg',
  },
  {
    id: 'u02_104', unitId: 'U02', category: '單位分數拆解', level: 4, difficulty: 5,
    batch: '奧數天梯', source: 'Unit02 AI_SPEC level_4（埃及分數）', verified: true,
    question: '將 $\\frac{2}{15}$ 拆寫為兩個不同單位分數（分子皆為 1）的和：$$\\frac{2}{15} = \\frac{1}{x} + \\frac{1}{y} \\quad (x < y)$$求這兩個單位分數分母和 $x + y$ 的最小值。',
    answer: '32（$x = 12,\\ y = 20$）',
    steps: [
      '通分整理：$2xy = 15(x + y) \\implies 4xy - 30x - 30y + 225 = 225$',
      '因式分解：$(2x - 15)(2y - 15) = 225$',
      '225 的正因數對：$1 \\times 225$, $3 \\times 75$, $5 \\times 45$, $9 \\times 25$',
      '若 $2x-15=9, 2y-15=25 \\implies 2x=24 (x=12), 2y=40 (y=20)$',
      '此時分母和 $x + y = 12 + 20 = 32$',
      '檢驗：$\\frac{1}{12} + \\frac{1}{20} = \\frac{5}{60} + \\frac{3}{60} = \\frac{8}{60} = \\frac{2}{15}$ ✔',
    ],
    insight: '埃及分數分解技巧：利用因式分解構造不定方程求整數解極值。',
    work: 'lg',
  },

  /* ==================== U03 小數除法 ==================== */
  {
    id: 'u03_001', unitId: 'U03', category: '整數除以小數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.38 例題 1', verified: true,
    question: '一綑繩子長 9 公尺，每 1.5 公尺剪成一段做跳繩，全部剪完，共可剪成幾段？',
    answer: '6 段',
    steps: ['除數 1.5 小數點向右移 1 位變 15', '被除數 9 也向右移 1 位補 0 變 90', '$90 \\div 15 = 6$ 段'],
    insight: '小數除法核心：除數變整數，被除數小數點向右移相同位數（同乘 10）。',
    work: 'sm',
  },
  {
    id: 'u03_002', unitId: 'U03', category: '小數除以小數', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.40 例題 1', verified: true,
    question: '有 3.6 公斤的茶葉，每 0.45 公斤裝成一罐，全部裝完，可以裝成幾罐？',
    answer: '8 罐',
    steps: ['除數 0.45 是兩位小數，小數點向右移兩位變 45', '被除數 3.6 向右移兩位補 0 變 360', '$360 \\div 45 = 8$ 罐'],
    work: 'sm',
  },
  {
    id: 'u03_003', unitId: 'U03', category: '小數除法補零', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.41 例題 3', verified: true,
    question: '一袋 2.4 公斤的咖啡豆，每 0.75 公斤裝成一包，全部裝完，可以裝成幾包？',
    answer: '3.2 包',
    steps: ['除數 0.75 移兩位變 75，被除數 2.4 移兩位變 240', '$240 \\div 75 = 3$ 餘 15', '在商點小數點，餘數補 0 變 150', '$150 \\div 75 = 2$ → 答案為 3.2 包'],
    work: 'sm',
  },
  {
    id: 'u03_004', unitId: 'U03', category: '小數除法大魔王', level: 2, difficulty: 4,
    batch: '課本原型題', source: '課本 p.42 例題 1', verified: true,
    question: '有 5.8 公斤的砂糖，每 0.35 公斤裝成一包，最多可裝滿幾包？還剩下幾公斤砂糖？',
    svg: SVG_DECIMAL_DIV_REMAINDER,
    answer: '最多可裝滿 16 包，還剩下 0.2 公斤',
    steps: [
      '直式計算：除數 0.35 向右移兩位變 35，被除數 5.8 移兩位變 580',
      '$580 \\div 35 = 16$ 餘 20',
      '大魔王關鍵！餘數小數點必須「對齊原來的被除數小數點」！',
      '原被除數是 5.8，20 還原小數點後是 0.2 公斤（不是 2，也不是 0.02）',
      '驗算：$0.35 \\times 16 + 0.2 = 5.6 + 0.2 = 5.8$ 公斤 ✔',
    ],
    insight: '小數除法餘數守則：商的小數點對齊新位置，餘數的小數點對齊「原來」被除數小數點！',
    trap: { code: 'ERR_DEC_DIV_REMAINDER_POINT', text: '把餘數寫成 20 或 0.02 公斤，忘記餘數小數點要垂直對齊原被除數。' },
    work: 'md',
  },
  {
    id: 'u03_005', unitId: 'U03', category: '小數除法與餘數', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.43 例題 2', verified: true,
    question: '桶子裡有 24.8 公升的果汁，每 1.5 公升裝滿 1 瓶，最多可裝滿幾瓶？還剩下幾公升果汁？',
    answer: '最多裝滿 16 瓶，剩下 0.8 公升',
    steps: [
      '$248 \\div 15 = 16$ 餘 8',
      '餘數 8 對齊原小數點（十分位），因此是 0.8 公升',
      '驗算：$1.5 \\times 16 + 0.8 = 24 + 0.8 = 24.8$ 公升 ✔',
    ],
    work: 'sm',
  },
  {
    id: 'u03_006', unitId: 'U03', category: '商與被除數的關係', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.44 例題 1', verified: true,
    question: '在 $\\square$ 裡填入 $>$、$<$ 或 $=$：<br>① $0.9 \\div 0.9 \\ \\square \\ 0.9$<br>② $2.38 \\div 1.2 \\ \\square \\ 2.38$<br>③ $40.2 \\div 1.01 \\ \\square \\ 40.2 \\div 0.99$',
    answer: '① $>$　② $<$　③ $<$',
    steps: [
      '① $0.9 \\div 0.9 = 1$，$1 > 0.9$ → 填 $>$',
      '② 除數 $1.2 > 1$，商小於被除數 → 填 $<$',
      '③ 左式除數 $>1$（值變小）；右式除數 $<1$（值變大）→ 填 $<$',
    ],
    insight: '被除數相同時，除數越大，商越小；除數越小，商越大。',
    work: 'sm',
  },
  {
    id: 'u03_007', unitId: 'U03', category: '除法與概數', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.45 例題 1', verified: true,
    question: '一包白米售價 175 元，重量是 1.5 公斤。1 公斤白米大約是多少元？（用四捨五入法將商取概數到個位）',
    answer: '大約 117 元',
    steps: [
      '列式：$175 \\div 1.5$',
      '要求取概數到個位，必須先算到下一位（小數點後第一位十分位）！',
      '$175 \\div 1.5 = 116.6\\dots$',
      '十分位數字是 6，滿 5 向個位進 1 → 約 117 元',
    ],
    trap: { code: 'ERR_DEC_DIV_EARLY_STOP', text: '只算到個位 116 就停筆，直接寫 116 元；切記「求到哪一位，必算到下一位」。' },
    work: 'sm',
  },
  {
    id: 'u03_008', unitId: 'U03', category: '除法與概數', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.45 例題 2', verified: true,
    question: '挪威洛達爾隧道長約 24.5 公里，臺灣雪山隧道長約 12.9 公里。洛達爾隧道的長度大約是雪山隧道的幾倍？（用四捨五入法將商取概數到小數點後第一位）',
    answer: '大約 1.9 倍',
    steps: [
      '$24.5 \\div 12.9$',
      '取概數到小數點後第一位，需算到第二位（百分位）：',
      '$24.5 \\div 12.9 = 1.89\\dots$',
      '百分位是 9，進位得 1.9 倍',
    ],
    work: 'sm',
  },
  {
    id: 'u03_009', unitId: 'U03', category: '素養評量', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.46 例題 3', verified: true,
    question: '藍鯨身長約 29.5 公尺，瓶鼻海豚身長約 3.6 公尺。藍鯨的身長大約是幾隻海豚的身長？（用四捨五入法取概數到小數點後第二位）',
    answer: '大約 8.19 隻',
    steps: [
      '$29.5 \\div 3.6$',
      '取概數到第二位（百分位），需計算到第三位（千分位）：',
      '$29.5 \\div 3.6 = 8.194\\dots$',
      '千分位數字為 4，捨去 → 8.19 隻',
    ],
    work: 'sm',
  },
  {
    id: 'u03_010', unitId: 'U03', category: '素養觀念', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.46 素養評量', verified: true,
    question: '紅繩長 3.69 公尺，黃繩長 82 公分。求紅繩長是黃繩長的幾倍？多多算 $3.69 \\div 0.82 = 4.5$，丹丹算 $369 \\div 82 = 4.5$。為什麼兩人的答案完全相同？',
    answer: '因為被除數與除數同時乘以 100，商不變',
    steps: [
      '多多的單位是公尺：82 公分 ＝ 0.82 公尺，算式為 $3.69 \\div 0.82$',
      '丹丹的單位是公分：3.69 公尺 ＝ 369 公分，算式為 $369 \\div 82$',
      '小數除法中，被除數與除數同乘 100，商的值保持不變。',
    ],
    work: 'sm',
  },
  {
    id: 'u03_101', unitId: 'U03', category: '移位逆推', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit03 AI_SPEC level_3（看錯小數點）', verified: true,
    question: '小華在計算一道除法題時，把除數的小數點向右看錯了一位，算得的商是 4.8。已知被除數沒有看錯，這道題目正確的商應該是多少？',
    answer: '48',
    steps: [
      '除數小數點向右看錯一位，表示除數擴大了 10 倍。',
      '在被除數不變的情況下，除數擴大 10 倍會導致算出的商縮小為原本的 $\\frac{1}{10}$。',
      '原本正確的商 ＝ $4.8 \\times 10 = 48$。',
    ],
    insight: '逆向思維：除數擴大，商就縮小；把縮小的商乘回去就是正解。',
    work: 'sm',
  },
  {
    id: 'u03_102', unitId: 'U03', category: '循環小數週期性', level: 4, difficulty: 4,
    batch: '奧數天梯', source: 'Unit03 AI_SPEC level_4（循環小數）', verified: true,
    question: '將分數 $\\frac{5}{7}$ 化為小數，小數點後第 100 位數字是多少？',
    answer: '2',
    steps: [
      '長除法計算：$5 \\div 7 = 0.\\overline{714285}\\dots$',
      '循環節數字為 7、1、4、2、8、5，共 6 個數字循環。',
      '$100 \\div 6 = 16$ 餘 4',
      '餘數是 4，表示落在第 4 個循環數字 → 數字為 2',
    ],
    insight: '週期規律：找循環長度，利用除法餘數精確定位。',
    work: 'md',
  },
  {
    id: 'u03_103', unitId: 'U03', category: '公倍數節奏', level: 3, difficulty: 3,
    batch: '奧數天梯', source: '課本 p.49 數學搖滾挑戰題', verified: true,
    question: '一首 180 拍的數學搖滾樂曲，吉他每小節 4 拍，鼓每小節 3 拍。在整首曲子中，兩種樂器的重拍剛好在同一拍合在一起的次數共有幾次？',
    answer: '15 次',
    steps: [
      '求 4 和 3 的最小公倍數：$[4, 3] = 12$',
      '每隔 12 拍會剛好重合一次（第 12、24、36……拍）',
      '總共重合次數：$180 \\div 12 = 15$ 次',
    ],
    work: 'sm',
  },

  /* ==================== U04 比與比值 ==================== */
  {
    id: 'u04_001', unitId: 'U04', category: '比與比值概念', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.52 例題 1', verified: true,
    question: '一個長方形的長是 8 公分、寬是 5 公分。長對寬的比是多少？比值是多少？比值需要寫單位嗎？',
    answer: '比是 $8 : 5$，比值是 $\\frac{8}{5}$（或 $1.6$），比值不帶單位',
    steps: [
      '長對寬的比：前項是長，後項是寬 → $8 : 5$',
      '比值 ＝ 前項 $\\div$ 後項 ＝ $8 \\div 5 = \\frac{8}{5} = 1.6$',
      '比值是兩量相除的倍數倍率，是純純的數，絕對不能加「公分」等單位！',
    ],
    trap: { code: 'ERR_RATIO_VALUE_UNIT_CONFUSION', text: '在比值後面寫上單位「1.6 公分」。' },
    work: 'sm',
  },
  {
    id: 'u04_002', unitId: 'U04', category: '相等的比', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.54 例題 2', verified: true,
    question: '煮特調鮮奶茶時，紅茶與鮮奶的毫升數比是 $3 : 2$。如果今天用了 600 毫升的鮮奶，需要準備多少毫升的紅茶？',
    answer: '900 毫升',
    steps: [
      '比的前項與後項同乘相同倍數，比值不變。',
      '鮮奶由 2 份變為 600 毫升 → 擴大了 $600 \\div 2 = 300$ 倍',
      '紅茶也必須擴大 300 倍：$3 \\times 300 = 900$ 毫升',
      '檢驗：$900 : 600 = 3 : 2$ ✔',
    ],
    work: 'sm',
  },
  {
    id: 'u04_003', unitId: 'U04', category: '最簡整數比', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.56 例題 1', verified: true,
    question: '將 $48 : 72$ 化為最簡整數比，並求其比值。',
    answer: '最簡整數比為 $2 : 3$，比值為 $\\frac{2}{3}$',
    steps: [
      '求 48 和 72 的最大公因數：$(48, 72) = 24$',
      '前項與後項同除以 24：$(48 \\div 24) : (72 \\div 24) = 2 : 3$',
      '比值 ＝ $2 \\div 3 = \\frac{2}{3}$',
    ],
    trap: { code: 'ERR_RATIO_NOT_PRIME_TO_EACH_OTHER', text: '只除以 6 化成 8:12，未化簡至前後項互質。' },
    work: 'sm',
  },
  {
    id: 'u04_004', unitId: 'U04', category: '最簡整數比', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.57 例題 2', verified: true,
    question: '把小數比 $1.2 : 0.8$ 化為最簡整數比。',
    answer: '$3 : 2$',
    steps: ['先同乘 10 變成整數比：$12 : 8$', '求最大公因數：$(12, 8) = 4$', '同除以 4：$3 : 2$'],
    work: 'sm',
  },
  {
    id: 'u04_005', unitId: 'U04', category: '最簡整數比', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.58 例題 3', verified: true,
    question: '把分數比 $\\frac{3}{4} : \\frac{5}{6}$ 化為最簡整數比。',
    answer: '$9 : 10$',
    steps: [
      '找分母 4 和 6 的最小公倍數：$[4, 6] = 12$',
      '前項與後項同乘 12：$(\\frac{3}{4} \\times 12) : (\\frac{5}{6} \\times 12) = 9 : 10$',
      '9 和 10 互質，即為最簡整數比。',
    ],
    work: 'sm',
  },
  {
    id: 'u04_006', unitId: 'U04', category: '最簡整數比', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.59 例題 4', verified: true,
    question: '把 $0.75 : 1\\frac{1}{4}$ 化為最簡整數比，並求其比值。',
    answer: '最簡整數比為 $3 : 5$，比值為 $\\frac{3}{5}$',
    steps: [
      '統一化為分數：$0.75 = \\frac{3}{4}$， $1\\frac{1}{4} = \\frac{5}{4}$',
      '同乘 4 去分母：$3 : 5$',
      '比值 ＝ $\\frac{3}{5}$',
    ],
    work: 'sm',
  },
  {
    id: 'u04_007', unitId: 'U04', category: '按比例分配', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.62 例題 1', verified: true,
    question: '全班共有 35 人，男生與女生的人數比是 $3 : 4$。男生和女生各有多少人？',
    svg: SVG_RATIO_BAR,
    answer: '男生 15 人，女生 20 人',
    steps: [
      '總份數：$3 + 4 = 7$ 份',
      '每份人數：$35 \\div 7 = 5$ 人',
      '男生佔 3 份：$5 \\times 3 = 15$ 人',
      '女生佔 4 份：$5 \\times 4 = 20$ 人',
    ],
    insight: '按比例分配核心公式：某部分 ＝ 總量 $\\times \\frac{該部分份數}{總份數}$。',
    work: 'sm',
  },
  {
    id: 'u04_008', unitId: 'U04', category: '按比例分配', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.63 例題 2', verified: true,
    question: '飲料店調製 1000 毫升的柳橙綠茶，綠茶與柳橙原汁的容量比是 $7 : 3$。綠茶和柳橙原汁各需要多少毫升？',
    answer: '綠茶 700 毫升，柳橙原汁 300 毫升',
    steps: [
      '總份數：$7 + 3 = 10$ 份',
      '綠茶容量：$1000 \\times \\frac{7}{10} = 700$ 毫升',
      '原汁容量：$1000 \\times \\frac{3}{10} = 300$ 毫升',
    ],
    work: 'sm',
  },
  {
    id: 'u04_009', unitId: 'U04', category: '按比例分配幾何', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.66 練習園地', verified: true,
    question: '一個三角形的三個內角度數比是 $2 : 3 : 4$。求這三個內角各是多少度？',
    answer: '40°、60°、80°',
    steps: [
      '三角形內角和固定為 180°',
      '總份數：$2 + 3 + 4 = 9$ 份',
      '每份度數：$180^\\circ \\div 9 = 20^\\circ$',
      '三角分別為：$20 \\times 2 = 40^\\circ$、$20 \\times 3 = 60^\\circ$、$20 \\times 4 = 80^\\circ$',
    ],
    work: 'sm',
  },
  {
    id: 'u04_101', unitId: 'U04', category: '和不變比例轉移', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit04 AI_SPEC level_2（轉學問題）', verified: true,
    question: '六年級甲、乙兩班學生共有 70 人，甲班人數與乙班人數的比是 $3 : 4$。後來甲班轉入若干人、乙班轉出相同人數後，甲班與乙班人數的比變成 $4 : 3$。請問甲班轉入多少人？',
    answer: '10 人',
    steps: [
      '轉入轉出人數相同 → 兩班總人數保持 70 人不變！',
      '原本甲班：$70 \\times \\frac{3}{3 + 4} = 30$ 人',
      '變動後甲班：$70 \\times \\frac{4}{4 + 3} = 40$ 人',
      '甲班轉入人數：$40 - 30 = 10$ 人',
    ],
    insight: '不變量思維：找到過程中「總和不變」的基準，是比例轉移題的秒殺關鍵。',
    work: 'md',
  },
  {
    id: 'u04_102', unitId: 'U04', category: '連比整合', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit04 AI_SPEC level_3（三量連比）', verified: true,
    question: '有甲、乙、丙三杯食鹽水，甲杯與乙杯重量比是 $2 : 3$，乙杯與丙杯重量比是 $4 : 5$。若三杯食鹽水共重 1050 公克，請問乙杯食鹽水重多少公克？',
    answer: '360 公克',
    steps: [
      '連比求中間項（乙）的最小公倍數：$[3, 4] = 12$',
      '甲 : 乙 ＝ $2 : 3 = 8 : 12$',
      '乙 : 丙 ＝ $4 : 5 = 12 : 15$',
      '得 甲 : 乙 : 丙 ＝ $8 : 12 : 15$',
      '總份數 ＝ $8 + 12 + 15 = 35$ 份',
      '每份重量 ＝ $1050 \\div 35 = 30$ 公克',
      '乙杯佔 12 份：$12 \\times 30 = 360$ 公克',
    ],
    insight: '連比技巧：透過中間橋樑項找最小公倍數搭橋。',
    work: 'md',
  },
  {
    id: 'u04_103', unitId: 'U04', category: '反比與行程', level: 4, difficulty: 5,
    batch: '奧數天梯', source: 'Unit04 AI_SPEC level_4（AMC 8 行程反比）', verified: true,
    question: '一條山路，小明上山與下山的速率比是 $2 : 3$。已知小明上山和下山來回一趟共花了 5 小時，請問小明上山花費了多少小時？',
    answer: '3 小時',
    steps: [
      '路程相同時，時間與速率成反比！',
      '上山速率 : 下山速率 ＝ $2 : 3$',
      '因此 上山時間 : 下山時間 ＝ $3 : 2$',
      '總時間份數：$3 + 2 = 5$ 份，共 5 小時 → 每份 1 小時',
      '上山時間佔 3 份：$3 \\times 1 = 3$ 小時',
    ],
    insight: '反比黃金法則：路程固定，時間比等於速率比的倒數。',
    work: 'sm',
  },

  /* ==================== U05 兩量關係 ==================== */
  {
    id: 'u05_001', unitId: 'U05', category: '基準量與比較量', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.72 例題 1', verified: true,
    question: '弟弟的身高是 120 公分，哥哥的身高是 150 公分。以弟弟的身高為基準量，哥哥身高的比值是多少？',
    svg: SVG_BASE_COMPARE_TAPE,
    answer: '$1.25$（或 $1\\frac{1}{4}$）',
    steps: [
      '比值 ＝ 比較量 $\\div$ 基準量',
      '以弟弟為基準量（當作 1 倍）：$150 \\div 120 = 1.25$ 倍',
    ],
    insight: '「以⋯⋯為基準」的那個量放在除數（分母）。',
    work: 'sm',
  },
  {
    id: 'u05_002', unitId: 'U05', category: '求比較量', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.74 例題 2', verified: true,
    question: '媽媽每個月薪水 45000 元，伙食費是薪水的 0.3 倍。伙食費是多少元？',
    answer: '13500 元',
    steps: ['比較量 ＝ 基準量 $\\times$ 比值', '$45000 \\times 0.3 = 13500$ 元'],
    work: 'sm',
  },
  {
    id: 'u05_003', unitId: 'U05', category: '求基準量', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.75 例題 3', verified: true,
    question: '小新有一本故事書，今天看了 48 頁，剛好是全書頁數的 0.4 倍。這本故事書共有多少頁？',
    answer: '120 頁',
    steps: ['基準量 ＝ 比較量 $\\div$ 比值', '$48 \\div 0.4 = 120$ 頁'],
    work: 'sm',
  },
  {
    id: 'u05_004', unitId: 'U05', category: '兩量之和（母子和）', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.76 例題 4', verified: true,
    question: '爸爸的體重是 72 公斤，小華的體重是爸爸的 $\\frac{3}{8}$ 倍。兩人的體重合起來是多少公斤？',
    answer: '99 公斤',
    steps: [
      '爸爸是基準量（1 倍），小華是 $\\frac{3}{8}$ 倍',
      '合起來是基準量的 $1 + \\frac{3}{8} = \\frac{11}{8}$ 倍',
      '$72 \\times (1 + \\frac{3}{8}) = 72 \\times \\frac{11}{8} = 99$ 公斤',
      '或：小華 $72 \\times \\frac{3}{8} = 27$ 公斤，兩人共 $72 + 27 = 99$ 公斤',
    ],
    insight: '母子和公式：兩量之和 ＝ 基準量 $\\times (1 + \\text{比值})$。',
    work: 'sm',
  },
  {
    id: 'u05_005', unitId: 'U05', category: '兩量之差（母子差）', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.77 例題 5', verified: true,
    question: '果園裡蘋果樹有 160 棵，梨子樹的數量是蘋果樹的 0.75 倍。蘋果樹比梨子樹多幾棵？',
    answer: '40 棵',
    steps: [
      '相差倍數：$1 - 0.75 = 0.25$ 倍',
      '相差棵數：$160 \\times 0.25 = 40$ 棵',
    ],
    insight: '母子差公式：兩量之差 ＝ 基準量 $\\times (1 - \\text{比值})$。',
    work: 'sm',
  },
  {
    id: 'u05_006', unitId: 'U05', category: '百分率與折扣', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.78 例題 6', verified: true,
    question: '一雙名牌球鞋定價 2400 元，週年慶全館打七五折。這雙球鞋的售價是多少元？便宜了多少元？',
    answer: '售價 1800 元，便宜了 600 元',
    steps: [
      '打七五折即付原價的 75%（0.75 倍）',
      '售價：$2400 \\times 0.75 = 1800$ 元',
      '便宜金額：$2400 - 1800 = 600$ 元（或 $2400 \\times (1 - 0.75) = 600$ 元）',
    ],
    trap: { code: 'ERR_DISCOUNT_PERCENT_BASE', text: '看到「打七五折」誤以為是便宜了 75%，直接拿 2400 × 0.75 當作便宜的錢。' },
    work: 'sm',
  },
  {
    id: 'u05_007', unitId: 'U05', category: '加成問題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.80 例題 7', verified: true,
    question: '文具店老闆進了一批筆記本，成本每本 40 元，加三成作為定價。每本筆記本的定價是多少元？',
    answer: '52 元',
    steps: [
      '加三成表示定價是成本的 $1 + 30\\% = 1.3$ 倍',
      '定價：$40 \\times (1 + 0.3) = 40 \\times 1.3 = 52$ 元',
    ],
    work: 'sm',
  },
  {
    id: 'u05_008', unitId: 'U05', category: '加成逆推大魔王', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.81 素養題', verified: true,
    question: '服飾店一件外套售價 1560 元，這是依成本加三成後的定價。這件外套的進貨成本是多少元？',
    answer: '1200 元',
    steps: [
      '成本是基準量（100%），加三成後售價是成本的 130%（1.3 倍）',
      '求基準量用除法：$1560 \\div 1.3 = 1200$ 元',
      '驗算：$1200 \\times 1.3 = 1560$ 元 ✔',
    ],
    trap: { code: 'ERR_MARKUP_PERCENT_BASE_ERROR', text: '誤用「售價 × (1 - 0.3)」計算成本，算成 1560 × 0.7 = 1092 元。基準量是成本，不能拿售價去打折！' },
    work: 'md',
  },
  {
    id: 'u05_101', unitId: 'U05', category: '加成再打折利潤', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit05 AI_SPEC level_2（利潤逆推）', verified: true,
    question: '某童裝進貨成本加五成作為定價，季末按定價打八折售出，賣出價格為 720 元。請問這件童裝的進貨成本是多少元？老闆有賺錢還是賠錢？',
    answer: '進貨成本 600 元，賺 120 元',
    steps: [
      '設成本為 1 倍，加五成後定價為 1.5 倍',
      '定價打八折售出：$1.5 \\times 0.8 = 1.2$ 倍成本',
      '成本：$720 \\div 1.2 = 600$ 元',
      '利潤：$720 - 600 = 120$ 元（賺錢）',
    ],
    insight: '乘法綜合：加五成再打八折 ＝ 1.5 × 0.8 ＝ 1.2 倍（依然淨賺兩成！）。',
    work: 'md',
  },
  {
    id: 'u05_102', unitId: 'U05', category: '動態移書倍數轉移', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit05 AI_SPEC level_3（和不變倍數）', verified: true,
    question: '甲書架有書 120 本，乙書架有書 80 本。要從甲書架拿幾本書放到乙書架，才能使乙書架的書本數成為甲書架的 3 倍？',
    answer: '70 本',
    steps: [
      '書本總數不變：$120 + 80 = 200$ 本',
      '變動後乙是甲的 3 倍 → 總共分成 $1 + 3 = 4$ 份',
      '甲書架最後應剩：$200 \\div 4 = 50$ 本',
      '需要從甲拿走：$120 - 50 = 70$ 本',
      '檢驗：乙變成 $80 + 70 = 150$ 本，$150 \\div 50 = 3$ 倍 ✔',
    ],
    insight: '總和不變原理：兩邊互相調動，總和固定，先求基準量的那一份。',
    work: 'sm',
  },
  {
    id: 'u05_103', unitId: 'U05', category: '年齡差不變', level: 4, difficulty: 4,
    batch: '奧數天梯', source: 'Unit05 AI_SPEC level_4（年齡倍數）', verified: true,
    question: '今年父親 42 歲，兒子 10 歲。幾年後，父親的年齡恰好是兒子年齡的 3 倍？',
    answer: '6 年後',
    steps: [
      '年齡問題核心：不管過幾年，兩人的「年齡差永遠不變」！',
      '年齡差：$42 - 10 = 32$ 歲',
      '當父親是兒子的 3 倍時，年齡差是兒子的 $3 - 1 = 2$ 倍',
      '那時兒子的年齡：$32 \\div 2 = 16$ 歲',
      '經過的年數：$16 - 10 = 6$ 年後',
    ],
    insight: '年齡差不變：差值 ＝ 兒子年齡 × (倍數 - 1)。',
    work: 'sm',
  },

  /* ==================== U06 圓周長與扇形周長 ==================== */
  {
    id: 'u06_001', unitId: 'U06', category: '圓周率概念', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.86 例題 1', verified: true,
    question: '測量一個圓形光碟，直徑是 12 公分，圓周長大約是 37.68 公分。圓周長除以直徑的值是多少？這個比值叫做什麼？',
    answer: '約為 3.14，叫做圓周率（$\\pi$）',
    steps: [
      '$37.68 \\div 12 = 3.14$',
      '任何圓的圓周長除以直徑的比值都是固定的常數，叫做圓周率，常用 3.14 作為近似值。',
    ],
    work: 'sm',
  },
  {
    id: 'u06_002', unitId: 'U06', category: '直徑求圓周長', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.88 例題 2', verified: true,
    question: '遊樂園的摩天輪直徑是 80 公尺，摩天輪旋轉一圈，車廂移動了大約多少公尺？',
    answer: '251.2 公尺',
    steps: ['圓周長 ＝ 直徑 $\\times 3.14$', '$80 \\times 3.14 = 251.2$ 公尺'],
    work: 'sm',
  },
  {
    id: 'u06_003', unitId: 'U06', category: '半徑求圓周長', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.89 例題 3', verified: true,
    question: '公園裡有一個圓形噴水池，半徑是 5 公尺。噴水池的圓周長是多少公尺？',
    answer: '31.4 公尺',
    steps: ['直徑 ＝ 半徑 $\\times 2 = 10$ 公尺', '圓周長 ＝ $10 \\times 3.14 = 31.4$ 公尺'],
    work: 'sm',
  },
  {
    id: 'u06_004', unitId: 'U06', category: '圓周長反求半徑', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.90 例題 4', verified: true,
    question: '有一棵大神木，用繩子圍繞樹幹一圈的長度剛好是 188.4 公分。這棵樹幹橫截面的直徑和大約半徑各是多少公分？',
    answer: '直徑 60 公分，半徑 30 公分',
    steps: [
      '直徑 ＝ 圓周長 $\\div 3.14$ ＝ $188.4 \\div 3.14 = 60$ 公分',
      '半徑 ＝ 直徑 $\\div 2 = 60 \\div 2 = 30$ 公分',
    ],
    work: 'sm',
  },
  {
    id: 'u06_005', unitId: 'U06', category: '扇形弧長', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.92 例題 5', verified: true,
    question: '一個扇形的半徑是 12 公分，圓心角是 90°。這個扇形的弧長是多少公分？',
    answer: '18.84 公分',
    steps: [
      '整圓周長：$12 \\times 2 \\times 3.14 = 75.36$ 公分',
      '90° 是整圓（360°）的 $\\frac{90}{360} = \\frac{1}{4}$',
      '弧長：$75.36 \\times \\frac{1}{4} = 18.84$ 公分',
    ],
    work: 'sm',
  },
  {
    id: 'u06_006', unitId: 'U06', category: '扇形周長大魔王', level: 2, difficulty: 4,
    batch: '課本原型題', source: '課本 p.93 例題 6', verified: true,
    question: '一個扇形的半徑是 10 公分，圓心角是 60°。這個扇形的周長大約是多少公分？',
    svg: SVG_SECTOR_PERIMETER,
    answer: '大約 30.47 公分（或 $10.47 + 20$）',
    steps: [
      '整圓周長：$10 \\times 2 \\times 3.14 = 62.8$ 公分',
      '弧長：$62.8 \\times \\frac{60}{360} = 62.8 \\div 6 \\approx 10.47$ 公分',
      '大魔王關鍵！扇形周長 ＝ 弧長 ＋ 兩條半徑！',
      '扇形周長：$10.47 + 10 \\times 2 = 10.47 + 20 = 30.47$ 公分',
    ],
    insight: '幾何圍欄法則：周長是「外圍完整走一圈的總長度」，包含圓弧與切開的兩條半徑。',
    trap: { code: 'ERR_SECTOR_PERIMETER_OMIT_RADIUS', text: '算完弧長 10.47 公分直接當答案，漏加兩條半徑 2r。' },
    work: 'md',
  },
  {
    id: 'u06_007', unitId: 'U06', category: '半圓周長', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.94 例題 7', verified: true,
    question: '直徑 14 公分的半圓形量角器，周長是多少公分？',
    answer: '35.98 公分',
    steps: [
      '半圓弧長：$14 \\times 3.14 \\div 2 = 21.98$ 公分',
      '周長包含底下的直徑：$21.98 + 14 = 35.98$ 公分',
    ],
    trap: { code: 'ERR_SECTOR_PERIMETER_OMIT_RADIUS', text: '忘了加底邊直徑 14 公分。' },
    work: 'sm',
  },
  {
    id: 'u06_008', unitId: 'U06', category: '跑道複合圖形', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.96 例題 8', verified: true,
    question: '學校操場跑道，中間是兩條各長 100 公尺的直線，兩端是半徑 30 公尺的半圓。沿著最內側跑道跑一圈大約是多少公尺？',
    answer: '388.4 公尺',
    steps: [
      '兩端的半圓剛好合為一個半徑 30 公尺（直徑 60 公尺）的完整圓：$60 \\times 3.14 = 188.4$ 公尺',
      '加上兩條直線跑道：$100 \\times 2 = 200$ 公尺',
      '跑道總長：$200 + 188.4 = 388.4$ 公尺',
    ],
    work: 'sm',
  },
  {
    id: 'u06_101', unitId: 'U06', category: '滾輪距離換算', level: 3, difficulty: 3,
    batch: '奧數天梯', source: 'Unit06 AI_SPEC level_2（滾輪圈數）', verified: true,
    question: '自行車輪子的直徑是 50 公分。小明騎車讓輪子在地上滾動了 20 圈，一共前進了大約多少公尺？',
    answer: '31.4 公尺',
    steps: [
      '滾動 1 圈的距離 ＝ 輪子圓周長：$50 \\times 3.14 = 157$ 公分 ＝ 1.57 公尺',
      '滾動 20 圈：$1.57 \\times 20 = 31.4$ 公尺',
    ],
    work: 'sm',
  },
  {
    id: 'u06_102', unitId: 'U06', category: '複合幾何周長', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit06 AI_SPEC level_3（正方形挖角）', verified: true,
    question: '邊長 10 公分的正方形，在四個角各挖掉一個半徑 2 公分的 $\\frac{1}{4}$ 圓。剩下圖形的外圍周長是多少公分？',
    answer: '36.56 公分',
    steps: [
      '每邊剩下的直線段：$10 - 2 \\times 2 = 6$ 公分，4 邊共有 $6 \\times 4 = 24$ 公分',
      '四個角的 $\\frac{1}{4}$ 圓弧剛好合為一個半徑 2 公分（直徑 4 公分）的完整圓：$4 \\times 3.14 = 12.56$ 公分',
      '外圍總周長：$24 + 12.56 = 36.56$ 公分',
    ],
    insight: '組合割補思維：分散的弧長先拼湊成整圓再計算。',
    work: 'md',
  },
  {
    id: 'u06_103', unitId: 'U06', category: '外公切線綑綁繩長', level: 4, difficulty: 5,
    batch: '奧數天梯', source: 'Unit06 AI_SPEC level_4（束帶長度）', verified: true,
    question: '用一條繩子將兩個半徑都是 5 公分的圓柱緊緊綑綁一圈（不計打結長度）。這條繩子的長度至少需要多少公分？',
    answer: '51.4 公分',
    steps: [
      '畫出切線分析：上下兩條直線段外公切線長度 ＝ 兩圓心距離 ＝ $2r = 10$ 公分，兩條共 $10 \\times 2 = 20$ 公分',
      '左右兩側貼附圓柱的弧各為半圓，合為一個半徑 5 公分（直徑 10 公分）的整圓周長：$10 \\times 3.14 = 31.4$ 公分',
      '繩子總長度：$20 + 31.4 = 51.4$ 公分',
    ],
    insight: '奧數綑綁模型：n 個等圓綑一圈，繩長 ＝ n 條直線段（直徑×n）＋ 1 個完整圓周長（2πr）。',
    work: 'md',
  },

  /* ==================== U07 放大、縮小與比例尺 ==================== */
  {
    id: 'u07_001', unitId: 'U07', category: '放大圖性質', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.104 例題 1', verified: true,
    question: '一個長方形的長是 4 公分、寬是 3 公分。畫成 2 倍放大圖後，放大圖的長和寬各是多少公分？四個角的角度有變大嗎？',
    answer: '長 8 公分、寬 6 公分；四個角依然是 90°，角度不變',
    steps: [
      '長度放大：長變為 $4 \\times 2 = 8$ 公分，寬變為 $3 \\times 2 = 6$ 公分',
      '放大圖與縮小圖核心定理：對應邊成比例變大，但「對應角完全不變」！',
    ],
    trap: { code: 'ERR_ANGLE_SCALED', text: '誤以為角也會放大 2 倍變成 180°。形狀相同角度必定相等！' },
    work: 'sm',
  },
  {
    id: 'u07_002', unitId: 'U07', category: '面積放大平方倍大魔王', level: 2, difficulty: 4,
    batch: '課本原型題', source: '課本 p.106 例題 2', verified: true,
    question: '一個邊長 5 公分的正方形，畫成 3 倍放大圖後，邊長變成原來的幾倍？面積變成原來的幾倍？',
    svg: SVG_SCALE_BAR,
    answer: '邊長變成 3 倍，面積變成原來的 9 倍',
    steps: [
      '原正方形面積：$5 \\times 5 = 25$ 平方公分',
      '放大後邊長：$5 \\times 3 = 15$ 公分',
      '放大後面積：$15 \\times 15 = 225$ 平方公分',
      '面積倍數：$225 \\div 25 = 9$ 倍（即 $3 \\times 3 = 3^2 = 9$ 倍）',
    ],
    insight: '長度與面積縮放定理：邊長擴大 $k$ 倍，周長擴大 $k$ 倍，但面積擴大 $k^2$（$k$ 的平方）倍！',
    trap: { code: 'ERR_AREA_SCALE_LINEAR', text: '誤以為面積也是放大 3 倍。面積包含長與寬兩個維度，必須乘兩次！' },
    work: 'md',
  },
  {
    id: 'u07_003', unitId: 'U07', category: '比例尺概念', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.108 例題 1', verified: true,
    question: '地圖上標示比例尺為 $1 : 50000$。這代表地圖上的 1 公分，相當於實際距離多少公尺？是多少公里？',
    answer: '500 公尺，也就是 0.5 公里',
    steps: [
      '比例尺 $1 : 50000$ 表示實際長度是圖上的 50000 倍',
      '$1 \\text{ 公分} \\times 50000 = 50000 \\text{ 公分}$',
      '$50000 \\text{ 公分} = 500 \\text{ 公尺} = 0.5 \\text{ 公里}$',
    ],
    trap: { code: 'ERR_UNIT_CONVERT_M_TO_KM', text: '單位換算搞混：1 公里 ＝ 1000 公尺 ＝ 100000 公分（去 5 個 0）。' },
    work: 'sm',
  },
  {
    id: 'u07_004', unitId: 'U07', category: '圖上長求實際長', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.110 例題 2', verified: true,
    question: '在一張比例尺 $1 : 25000$ 的地圖上，量得甲、乙兩地的距離是 4 公分。兩地的實際距離是多少公里？',
    answer: '1 公里',
    steps: [
      '實際距離 ＝ 圖上距離 $\\times$ 比例尺分母',
      '$4 \\times 25000 = 100000$ 公分',
      '$100000 \\text{ 公分} = 1000 \\text{ 公尺} = 1 \\text{ 公里}$',
    ],
    work: 'sm',
  },
  {
    id: 'u07_005', unitId: 'U07', category: '實際長求圖上長', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.111 例題 3', verified: true,
    question: '兩鎮實際相距 6 公里。在比例尺 $1 : 300000$ 的地圖上，這兩鎮之間的距離是多少公分？',
    answer: '2 公分',
    steps: [
      '先將公里化為公分：$6 \\text{ 公里} = 600000 \\text{ 公分}$',
      '圖上長 ＝ 實際長 $\\div$ 比例尺分母',
      '$600000 \\div 300000 = 2$ 公分',
    ],
    trap: { code: 'ERR_INVERSE_SCALE', text: '乘除混淆：求地圖上的長度必須「變小（除以分母）」，不是乘以分母。' },
    work: 'sm',
  },
  {
    id: 'u07_006', unitId: 'U07', category: '線段比例尺判讀', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.112 例題 4', verified: true,
    question: '地圖上線段比例尺標示「1 公分代表 200 公尺」。在地圖上量得一座水庫長度為 3.5 公分，水庫的實際長度是多少公尺？',
    answer: '700 公尺',
    steps: ['1 公分代表 200 公尺', '3.5 公分代表：$3.5 \\times 200 = 700$ 公尺'],
    work: 'sm',
  },
  {
    id: 'u07_007', unitId: 'U07', category: '縮小圖面積換算', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.114 練習園地', verified: true,
    question: '一座長方形操場實際長 100 公尺、寬 60 公尺。在比例尺 $\\frac{1}{1000}$ 的縮小圖上，這個操場的面積是多少平方公分？',
    answer: '60 平方公分',
    steps: [
      '實際長：$100 \\text{ 公尺} = 10000 \\text{ 公分} \\implies$ 圖上長 $10000 \\div 1000 = 10$ 公分',
      '實際寬：$60 \\text{ 公尺} = 6000 \\text{ 公分} \\implies$ 圖上寬 $6000 \\div 1000 = 6$ 公分',
      '圖上面積：$10 \\times 6 = 60$ 平方公分',
    ],
    work: 'md',
  },
  {
    id: 'u07_101', unitId: 'U07', category: '面積倍數反求邊長', level: 3, difficulty: 3,
    batch: '奧數天梯', source: 'Unit07 AI_SPEC level_2（面積平方倍）', verified: true,
    question: '甲圖是乙圖的放大圖，已知甲圖的面積是乙圖面積的 16 倍。請問甲圖的周長是乙圖周長的幾倍？',
    answer: '4 倍',
    steps: [
      '面積比 ＝ 邊長比的平方',
      '因為 $4 \\times 4 = 16$，所以邊長放大為原來的 4 倍',
      '周長是長度維度，放大倍數與邊長相同，也是 4 倍',
    ],
    insight: '維度直覺：長度是一次方，面積是二次方。面積變 16 倍 → 長度變 $\\sqrt{16} = 4$ 倍。',
    work: 'sm',
  },
  {
    id: 'u07_102', unitId: 'U07', category: '雙重比例尺換算', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit07 AI_SPEC level_3（跨地圖換算）', verified: true,
    question: '地圖 A 的比例尺是 $1 : 20000$，一座森林在圖 A 上的面積是 16 平方公分。在另一張比例尺為 $1 : 40000$ 的地圖 B 上，這座森林的面積是多少平方公分？',
    answer: '4 平方公分',
    steps: [
      '比較兩張地圖比例尺：地圖 B 的長度只有地圖 A 的 $\\frac{20000}{40000} = \\frac{1}{2}$ 倍',
      '邊長變為 $\\frac{1}{2}$ 倍，則圖上面積縮小為 $(\\frac{1}{2})^2 = \\frac{1}{4}$ 倍',
      '地圖 B 上面積：$16 \\times \\frac{1}{4} = 4$ 平方公分',
    ],
    insight: '雙重比例尺捷徑：直接比較比例尺倍率比，免去反求真實萬平方公尺的冗長換算。',
    work: 'md',
  },
  {
    id: 'u07_103', unitId: 'U07', category: '相似三角形影長', level: 4, difficulty: 4,
    batch: '奧數天梯', source: 'Unit07 AI_SPEC level_4（AMC 8 陽光影長）', verified: true,
    question: '身高 1.5 公尺的小明在陽光下的影長是 2 公尺。在同一時間同一地點，旁邊一棵大樹的影長是 16 公尺。這棵大樹的實際高度是多少公尺？',
    answer: '12 公尺',
    steps: [
      '同一時間陽光平行，物高與影長成正比例（相似三角形原理）：',
      '高 : 影長 ＝ $1.5 : 2$',
      '樹高 : $16 = 1.5 : 2$',
      '樹高 ＝ $16 \\times \\frac{1.5}{2} = 16 \\times 0.75 = 12$ 公尺',
    ],
    insight: '泰勒斯金字塔測高法：利用相似比，將影子長度換算成真實高度。',
    work: 'sm',
  },

  /* ==================== U08 怎樣解題（數據取自課本，題幹措辭待與原圖核對） ==================== */
  {
    id: 'u08_001', unitId: 'U08', category: '間隔問題', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.119', verified: false,
    question: '一座長 80 公尺的橋，在橋的一側每隔 20 公尺設一盞路燈。<br>① 兩端都設，要設幾盞？<br>② 只設一端，要設幾盞？<br>③ 兩端都不設，要設幾盞？',
    svg: SVG_BRIDGE_80,
    answer: '① 5 盞　② 4 盞　③ 3 盞',
    steps: ['間隔數：80 ÷ 20 = 4（個）', '① 兩端都設：4 + 1 = 5', '② 只設一端：4', '③ 兩端都不設：4 − 1 = 3'],
    insight: '手指模型：5 根手指之間有 4 個指縫。直線上「兩端都有」→ 棵數 = 間隔 + 1。',
    trap: { code: 'ERR_INTERVAL_OFF_BY_ONE', text: '直接 80 ÷ 20 = 4 就當答案，沒看清楚端點設不設。' },
  },
  {
    id: 'u08_002', unitId: 'U08', category: '間隔問題', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.119', verified: false,
    question: '圓形蛋糕的圓周長是 30 公分，沿著周圍每隔 6 公分擠一朵奶油花，共要擠幾朵？',
    answer: '5 朵',
    steps: ['圓形是封閉的：花朵數 = 間隔數', '30 ÷ 6 = 5'],
    insight: '封閉圖形沒有「端點」，所以不用 +1 也不用 −1。',
    trap: { code: 'ERR_INTERVAL_OFF_BY_ONE', text: '套用直線公式算成 6 朵。' },
    work: 'sm',
  },
  {
    id: 'u08_003', unitId: 'U08', category: '間隔問題', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.120', verified: false,
    question: '圓形池塘的周長是 1080 公尺，沿著池塘周圍設置 20 個告示牌，每個間隔一樣長。每個間隔長幾公尺？',
    answer: '54 公尺',
    steps: ['封閉圖形：間隔數 = 告示牌數 = 20', '1080 ÷ 20 = 54'],
    trap: { code: 'ERR_INTERVAL_OFF_BY_ONE', text: '用 1080 ÷ 19 計算。' },
    work: 'sm',
  },
  {
    id: 'u08_004', unitId: 'U08', category: '間隔問題', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.120', verified: false,
    question: '卡丁車跑道周長 700 公尺，沿著跑道設置 25 個指標牌，每個間隔一樣長。每個間隔長幾公尺？',
    answer: '28 公尺',
    steps: ['封閉跑道：間隔數 = 指標牌數 = 25', '700 ÷ 25 = 28'],
    work: 'sm',
  },
  {
    id: 'u08_005', unitId: 'U08', category: '間隔問題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.121 練習', verified: false,
    question: '長 80 公尺的走廊，在一側擺放 16 盆花，起點不擺、終點擺，每個間隔一樣長。每個間隔長幾公尺？',
    answer: '5 公尺',
    steps: ['只有一端擺：間隔數 = 花盆數 = 16', '80 ÷ 16 = 5'],
    trap: { code: 'ERR_INTERVAL_OFF_BY_ONE', text: '用 80 ÷ 15 或 80 ÷ 17。' },
    work: 'sm',
  },
  {
    id: 'u08_006', unitId: 'U08', category: '間隔問題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.121 練習', verified: false,
    question: '一條長 104 公分的緞帶上要縫 7 顆鈕扣，兩端都不縫，每個間隔一樣長。每個間隔長幾公分？',
    answer: '13 公分',
    steps: ['兩端都不縫：間隔數 = 鈕扣數 + 1 = 8', '104 ÷ 8 = 13'],
    trap: { code: 'ERR_INTERVAL_OFF_BY_ONE', text: '用 104 ÷ 7 或 104 ÷ 6。' },
    work: 'sm',
  },
  {
    id: 'u08_007', unitId: 'U08', category: '間隔問題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.122 例 7', verified: false,
    question: '筆直的道路一側插了 20 枝旗子，相鄰兩枝的間隔都是 80 公分。從第 6 枝到第 16 枝旗子的距離是多少公分？',
    answer: '800 公分',
    steps: ['第 6 枝到第 16 枝的間隔數 = 16 − 6 = 10', '80 × 10 = 800'],
    insight: '第 a 個到第 b 個之間有 (b − a) 個間隔，不用 +1。',
    trap: { code: 'ERR_INTERVAL_OFF_BY_ONE', text: '算成 11 個間隔（880 公分）。' },
    work: 'sm',
  },
  {
    id: 'u08_008', unitId: 'U08', category: '數形規律', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.123 例 1', verified: false,
    question: '火車車廂的裝飾圖案依照下圖的順序，每 3 個一組重複排列。第 25 個圖案是哪一個？',
    svg: SVG_TRAIN_PATTERN,
    answer: '△（每組的第 1 個）',
    steps: ['每 3 個一組：25 ÷ 3 = 8 …… 1', '排完 8 組後，第 25 個是下一組的第 1 個 → △'],
    insight: '週期問題看「餘數」：餘 1 是第 1 個、餘 2 是第 2 個、整除是最後一個。',
    work: 'sm',
  },
  {
    id: 'u08_009', unitId: 'U08', category: '數形規律', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.124 例 2', verified: false,
    question: '用棉花棒排一排相連的正方形（如下圖）。排 20 個相連的正方形，需要幾根棉花棒？',
    svg: SVG_STICK_SQUARES,
    answer: '61 根',
    steps: ['想法一：第 1 個用 4 根，之後每多 1 個多 3 根 → 4 + 3 × 19 = 61', '想法二：最左邊 1 根，每個正方形再用 3 根 → 1 + 3 × 20 = 61'],
    insight: 'n 個相連正方形 = 3n + 1 根。',
  },
  {
    id: 'u08_010', unitId: 'U08', category: '數形規律', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.125 例 3', verified: false,
    question: '用花片排成空心正方形（如下圖）。如果每邊排 30 個花片，一共需要幾個花片？',
    svg: SVG_HOLLOW_SQUARE,
    answer: '116 個',
    steps: ['方法一：每邊只算 (30 − 1) 個，4 邊 → 29 × 4 = 116', '方法二：4 邊各 30 個 = 120，4 個角各多算 1 次 → 120 − 4 = 116'],
    trap: { code: 'ERR_INTERVAL_OFF_BY_ONE', text: '直接 30 × 4 = 120，四個角重複算了。' },
  },
  {
    id: 'u08_011', unitId: 'U08', category: '數形規律', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.125 思考帽', verified: false,
    question: '用花片排成空心正三角形，每邊的花片數一樣多，一共用了 72 個花片。每邊有幾個花片？',
    answer: '25 個',
    steps: ['空心正三角形：總數 = (每邊 − 1) × 3', '72 ÷ 3 = 24，每邊 = 24 + 1 = 25', '驗算：25 × 3 − 3 = 72 ✔'],
    work: 'sm',
  },
  {
    id: 'u08_012', unitId: 'U08', category: '數形規律', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.134 練習園地八', verified: false,
    question: '用邊長 1 公分的正方形方瓦，排成邊長 10 公分的空心正方形，共需要幾塊方瓦？',
    answer: '36 塊',
    steps: ['每邊 10 塊：(10 − 1) × 4 = 36'],
    work: 'sm',
  },
  {
    id: 'u08_013', unitId: 'U08', category: '選擇與組合', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.126 例 1', verified: false,
    question: '義式餐廳的義大利麵有 5 種、燉飯有 6 種、披薩有 3 種。如果只單點其中一種主食，共有幾種選擇？',
    answer: '14 種',
    steps: ['三類只選一種（不會同時發生）→ 相加', '5 + 6 + 3 = 14'],
    insight: '「或」→ 加法原理；「而且 / 每一個都要配」→ 乘法原理。',
    trap: { code: 'ERR_ADD_MUL_CONFUSION', text: '算成 5 × 6 × 3 = 90。' },
    work: 'sm',
  },
  {
    id: 'u08_014', unitId: 'U08', category: '選擇與組合', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.126 例 2', verified: false,
    question: '有 0、3、5、8 四張數字卡，選兩張排成一個二位數，而且必須是偶數。共有幾種排法？',
    answer: '5 種（30、50、80、38、58）',
    steps: ['偶數的個位只能是 0 或 8', '個位 0：十位可放 3、5、8 → 3 種', '個位 8：十位不能放 0 → 只能放 3、5 → 2 種', '3 + 2 = 5'],
    trap: { code: 'ERR_ADD_MUL_CONFUSION', text: '忘記 0 不能放十位，算成 6 種。' },
    work: 'sm',
  },
  {
    id: 'u08_015', unitId: 'U08', category: '選擇與組合', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.126 練習', verified: false,
    question: '有 0、1、2、3、4 五張數字卡，選兩張排成一個二位數，而且必須是奇數。共有幾種排法？',
    answer: '6 種（21、31、41、13、23、43）',
    steps: ['奇數的個位只能是 1 或 3', '個位 1：十位可放 2、3、4 → 3 種', '個位 3：十位可放 1、2、4 → 3 種', '3 + 3 = 6'],
    work: 'sm',
  },
  {
    id: 'u08_016', unitId: 'U08', category: '選擇與組合', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.127 練習', verified: false,
    question: '櫥櫃裡有 5 個不同的杯子和 3 個不同的杯蓋，選一個杯子配一個杯蓋，共有幾種搭配？',
    answer: '15 種',
    steps: ['每個杯子都可以配 3 種杯蓋', '5 × 3 = 15'],
    trap: { code: 'ERR_ADD_MUL_CONFUSION', text: '算成 5 + 3 = 8。' },
    work: 'sm',
  },
  {
    id: 'u08_017', unitId: 'U08', category: '選擇與組合', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.128 例 4', verified: false,
    question: '速食店套餐：主餐 3 種、副餐 4 種、飲料 2 種，每份套餐三樣各選一種。共有幾種組合？',
    answer: '24 種',
    steps: ['分三步驟，每步都要做 → 相乘', '3 × 4 × 2 = 24'],
    work: 'sm',
  },
  {
    id: 'u08_018', unitId: 'U08', category: '選擇與組合', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.128 練習', verified: false,
    question: '登山步道會經過兩座吊橋：登山口到第一座橋有 3 條路，兩座橋之間有 2 條路，第二座橋到山頂有 2 條路。從登山口到山頂共有幾種走法？',
    answer: '12 種',
    steps: ['三段路依序都要走 → 相乘', '3 × 2 × 2 = 12'],
    work: 'sm',
  },
  {
    id: 'u08_019', unitId: 'U08', category: '和差問題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.130 例 3', verified: false,
    question: '一份特餐和一份升級套餐共 500 元，升級套餐比特餐貴 80 元。兩種餐點各是多少元？',
    svg: SVG_TAPE_500_80,
    answer: '升級套餐 290 元，特餐 210 元',
    steps: ['先拿掉多出來的 80 元：500 − 80 = 420 → 剩下 2 份特餐', '特餐 = 420 ÷ 2 = 210', '升級套餐 = 210 + 80 = 290'],
    insight: '大數 = (和 + 差) ÷ 2；小數 = (和 − 差) ÷ 2。',
  },
  {
    id: 'u08_020', unitId: 'U08', category: '和差問題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.131 例 5', verified: false,
    question: '用一條長 60 公分的繩子圍成一個長方形，長比寬多 6 公分。長和寬各是多少公分？',
    answer: '長 18 公分，寬 12 公分',
    steps: ['長 + 寬 = 60 ÷ 2 = 30', '長 = (30 + 6) ÷ 2 = 18', '寬 = (30 − 6) ÷ 2 = 12'],
    trap: { code: 'ERR_TRANSFER_HALF_DIFF', text: '直接用 60 當「長 + 寬」，忘了周長 = (長 + 寬) × 2。' },
  },
  {
    id: 'u08_021', unitId: 'U08', category: '和差問題', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.132 例 6', verified: false,
    question: '哥哥有 12 顆糖果，弟弟有 8 顆。哥哥要給弟弟幾顆，兩人才會一樣多？',
    answer: '2 顆',
    steps: ['相差 12 − 8 = 4', '把差平分：4 ÷ 2 = 2', '驗算：哥哥 10、弟弟 10 ✔'],
    insight: '給出去 k 個，兩人的差會縮小 2k。',
    trap: { code: 'ERR_TRANSFER_HALF_DIFF', text: '答 4 顆——給完變成弟弟比哥哥多 4 顆。' },
    work: 'sm',
  },
  {
    id: 'u08_022', unitId: 'U08', category: '和差問題', level: 1, difficulty: 2,
    batch: '課本原型題', source: '課本 p.132 例 7', verified: false,
    question: '紅瓶裝了 800 毫升的水，綠瓶裝了 600 毫升。紅瓶要倒多少毫升到綠瓶，兩瓶才會一樣多？',
    answer: '100 毫升',
    steps: ['相差 800 − 600 = 200', '200 ÷ 2 = 100'],
    trap: { code: 'ERR_TRANSFER_HALF_DIFF', text: '答 200 毫升。' },
    work: 'sm',
  },
  {
    id: 'u08_023', unitId: 'U08', category: '和差問題', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.133 素養評量', verified: false,
    question: '巧庭付了兩人的車資 225 元，思妤付了兩人的餐費 385 元。如果所有費用兩人平均分攤，誰要給誰多少元？',
    answer: '巧庭要給思妤 80 元',
    steps: ['思妤多付 385 − 225 = 160 元', '平分差額：160 ÷ 2 = 80', '或：總共 610 元，每人 305 元，巧庭少付 305 − 225 = 80'],
    trap: { code: 'ERR_TRANSFER_HALF_DIFF', text: '答「巧庭給思妤 160 元」。' },
    work: 'sm',
  },
  {
    id: 'u08_024', unitId: 'U08', category: '和差問題', level: 1, difficulty: 3,
    batch: '課本原型題', source: '課本 p.135 練習園地八', verified: false,
    question: '一件襯衫比一件裙子便宜 400 元，媽媽買了一件襯衫和一件裙子共花 1200 元。襯衫和裙子各是多少元？',
    answer: '裙子 800 元，襯衫 400 元',
    steps: ['裙子（大數）= (1200 + 400) ÷ 2 = 800', '襯衫（小數）= (1200 − 400) ÷ 2 = 400'],
    work: 'sm',
  },
  {
    id: 'u08_025', unitId: 'U08', category: '和差問題', level: 2, difficulty: 3,
    batch: '課本原型題', source: '課本 p.135 練習園地八', verified: false,
    question: '天平左盤放了 480 公克的物品，從左盤拿 50 公克移到右盤，天平剛好平衡。右盤原本放了多少公克？',
    answer: '380 公克',
    steps: ['移 50 公克就平衡 → 原本左盤比右盤多 50 × 2 = 100 公克', '右盤 = 480 − 100 = 380'],
    trap: { code: 'ERR_TRANSFER_HALF_DIFF', text: '算成 480 − 50 = 430 公克。' },
    work: 'sm',
  },
  {
    id: 'u08_101', unitId: 'U08', category: '間隔問題', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit08 AI_SPEC level_3（雙重植樹重合）', verified: true,
    question: '周長 400 公尺的環形跑道，原本每隔 8 公尺插一面旗子。後來改成每隔 10 公尺插一面（起點不變）。有幾面旗子不用移動？',
    answer: '10 面',
    steps: ['不用移動的位置要同時是 8 和 10 的倍數 → 每 40 公尺一個', '封閉跑道：400 ÷ 40 = 10'],
    insight: '兩種間隔重合 → 找最小公倍數；再套用封閉圖形「點數 = 間隔數」。',
    work: 'sm',
  },
  {
    id: 'u08_102', unitId: 'U08', category: '數形規律', level: 3, difficulty: 4,
    batch: '奧數天梯', source: 'Unit08 AI_SPEC level_3（火柴棒方格）', verified: true,
    question: '用火柴棒排成 2 排、每排 10 個的方格（共 20 個小正方形），一共需要幾根火柴棒？',
    answer: '52 根',
    steps: ['橫的：3 條橫線 × 每條 10 根 = 30', '直的：11 條直線 × 每條 2 根 = 22', '30 + 22 = 52'],
    insight: 'm 排 n 列方格：橫的 (m + 1) × n 根、直的 (n + 1) × m 根。',
  },
  {
    id: 'u08_103', unitId: 'U08', category: '選擇與組合', level: 4, difficulty: 4,
    batch: '奧數天梯', source: 'Unit08 AI_SPEC level_4（塗色問題）', verified: true,
    question: '一排有 4 個格子，用紅、黃、藍 3 種顏色塗色，每格塗一種，相鄰兩格不能同色。共有幾種塗法？',
    answer: '24 種',
    steps: ['第 1 格：3 種', '第 2 格：不能和第 1 格同色 → 2 種', '第 3、4 格同理各 2 種', '3 × 2 × 2 × 2 = 24'],
    insight: '「只跟前一格比」的限制 → 乘法原理逐格算。',
    work: 'sm',
  },
];

/* =========================================================
   ⬇⬇⬇ AI 加強題庫：把 AI 輸出的 QUESTION_BANK.push(...) 貼在這下面 ⬇⬇⬇
   ========================================================= */

/* =========================================================
   純腦力體操 U02～U08（早餐 iPad・1~10★ 思維天梯・免動筆 4 選 1）
   MG(unitId, 題序 1~20, 主題, 題目, 選項[4], 正解字母, 推理步驟[], 秒殺直覺, 防坑)
   星級自動 = ceil(題序 / 2) → 每星 2 題
   ========================================================= */
function MG(unitId, n, topic, question, options, key, steps, insight, trapText) {
  const stars = Math.ceil(n / 2);
  const id = `${unitId.toLowerCase()}_m${String(n).padStart(2, '0')}`;
  return {
    id, unitId, category: '純腦力體操', topic, level: stars, stars, difficulty: stars,
    batch: '純腦力體操', source: `早餐免動筆思維天梯 ${stars}★`, verified: true,
    question, options, answer: key, answerKey: key, steps, insight,
    trap: { code: `ERR_${id.toUpperCase()}`, text: trapText }, work: 'sm',
  };
}

/* ---------- U02 分數除法 ---------- */
QUESTION_BANK.push(
  MG('U02', 1, '除數小於 1', '不用算：$12 \\div \\frac{3}{4}$ 的結果和 12 比起來？',
    ['比 12 大', '比 12 小', '等於 12', '無法判斷'], 'A',
    ['除數 $\\frac{3}{4}$ 比 1 小。', '「一個數裡有幾個 $\\frac{3}{4}$」一定比「有幾個 1」還多。', '所以商比 12 大。'],
    '除以小於 1 的數 → 變大；除以大於 1 的數 → 變小。', '以為「除法一定越除越小」。'),
  MG('U02', 2, '自己除自己', '$\\frac{5}{8} \\div \\frac{5}{8}$ 等於多少？',
    ['0', '1', '$\\frac{25}{64}$', '$\\frac{5}{8}$'], 'B',
    ['任何不為 0 的數除以自己，都等於 1。'],
    '$a \\div a = 1$，不管 $a$ 長得多複雜。', '習慣性顛倒相乘，算成 $\\frac{25}{64}$。'),
  MG('U02', 3, '倒數縮放', '下列哪一個算式的結果最大？',
    ['$100 \\times \\frac{1}{2}$', '$100 \\div 2$', '$100 \\div \\frac{1}{2}$', '$100 - \\frac{1}{2}$'], 'C',
    ['$100 \\times \\frac{1}{2}$ 與 $100 \\div 2$ 都是 50。', '$100 - \\frac{1}{2}$ 不到 100。', '$100 \\div \\frac{1}{2}$ 是「100 裡有幾個半」= 200，最大。'],
    '除以 $\\frac{1}{2}$ ＝ 乘以 2。', '把「÷ 1/2」和「× 1/2」搞混。'),
  MG('U02', 4, '整數除以分數', '$7 \\div \\frac{7}{9}$ 等於多少？',
    ['1', '9', '$\\frac{1}{9}$', '$\\frac{49}{9}$'], 'B',
    ['$7 \\div \\frac{7}{9} = 7 \\times \\frac{9}{7}$。', '7 和 7 直接約掉，剩下 9。'],
    '$a \\div \\frac{a}{b} = b$：分子相同，直接看分母。', '只把分子相除得到 1。'),
  MG('U02', 5, '同分母相除', '$\\frac{6}{7} \\div \\frac{2}{7}$ 等於多少？',
    ['3', '$\\frac{12}{49}$', '$\\frac{1}{3}$', '$\\frac{6}{49}$'], 'A',
    ['分母相同 → 單位都是「$\\frac{1}{7}$」。', '6 個 $\\frac{1}{7}$ 裡有幾個 2 個 $\\frac{1}{7}$？ → $6 \\div 2 = 3$。'],
    '同分母分數相除 ＝ 分子直接相除。', '分子分母分別相除，或誤用乘法。'),
  MG('U02', 6, '除數減半商加倍', '已知 $A \\div \\frac{3}{5} = 10$，那麼 $A \\div \\frac{3}{10}$ 等於多少？',
    ['5', '10', '20', '30'], 'C',
    ['$\\frac{3}{10}$ 剛好是 $\\frac{3}{5}$ 的一半。', '被除數不變、除數變一半 → 商變 2 倍。', '$10 \\times 2 = 20$。'],
    '商的變化：除數 ÷ k → 商 × k。', '以為除數變小商也變小，選 5。'),
  MG('U02', 7, '積相等比大小', '$A \\times \\frac{5}{4} = B \\times \\frac{5}{6}$（$A$、$B$ 都大於 0），誰比較大？',
    ['A 比較大', 'B 比較大', '一樣大', '無法判斷'], 'B',
    ['兩邊乘出來一樣多。', '$A$ 乘的是比 1 大的 $\\frac{5}{4}$，$B$ 乘的是比 1 小的 $\\frac{5}{6}$。', '要乘「縮小的數」才能追平的那個，原本一定比較大 → $B$ 大。'],
    '積相等時：乘數越小，另一個因數越大。', '看到 $\\frac{5}{4}$ 比較大就選 A。'),
  MG('U02', 8, '連除倒數', '$1 \\div \\frac{1}{2} \\div \\frac{1}{3} \\div \\frac{1}{4}$ 等於多少？',
    ['$\\frac{1}{24}$', '1', '9', '24'], 'D',
    ['每除以一個 $\\frac{1}{n}$，就等於乘以 $n$。', '$1 \\times 2 \\times 3 \\times 4 = 24$。'],
    '÷ 單位分數 ＝ × 分母。', '直接把分數相乘得 $\\frac{1}{24}$。'),
  MG('U02', 9, '包含除應用', '一條繩子每段剪 $\\frac{3}{4}$ 公尺剛好剪成 8 段。若改成每段 $\\frac{3}{8}$ 公尺，可以剪幾段？',
    ['4 段', '12 段', '16 段', '24 段'], 'C',
    ['繩子總長不變。', '每段長度變成原來的一半（$\\frac{3}{8}$ 是 $\\frac{3}{4}$ 的一半）。', '段數就變 2 倍：$8 \\times 2 = 16$。'],
    '總量固定：每份越小，份數越多（反比）。', '先算總長再除，浪費時間又容易算錯。'),
  MG('U02', 10, '整除結合因數', '下列哪一個結果是「整數」？',
    ['$10 \\div \\frac{3}{7}$', '$9 \\div \\frac{3}{7}$', '$8 \\div \\frac{3}{7}$', '$7 \\div \\frac{3}{7}$'], 'B',
    ['$n \\div \\frac{3}{7} = \\frac{7n}{3}$。', '7 和 3 互質，所以 $n$ 必須是 3 的倍數才能整除。', '選項中只有 9 是 3 的倍數。'],
    '結合第 1 單元：分母要被約掉 → 找倍數與互質。', '以為 7 是分母的分子就一定整除。'),
  MG('U02', 11, '不可能任務', '有一個正數 $x$，使得 $x \\div \\frac{2}{3}$ 的結果比 $x$ 還小。這樣的 $x$ 是？',
    ['任何正數都可以', '大於 1 的正數', '小於 1 的正數', '不存在這樣的正數'], 'D',
    ['$x \\div \\frac{2}{3} = x \\times \\frac{3}{2}$。', '正數乘以比 1 大的數，一定變大。', '所以不可能變小 → 不存在。'],
    '先判斷「變大或變小」只看除數和 1 的大小，和被除數無關。', '以為 $x$ 小於 1 時會反過來。'),
  MG('U02', 12, '倒數平方', '$a$、$b$ 都是正整數，若 $\\frac{a}{b} \\div \\frac{b}{a} = 1$，則 $a$ 與 $b$ 的關係是？',
    ['$a = b$', '$a = 2b$', '$a + b = 1$', '任何 $a$、$b$ 都成立'], 'A',
    ['$\\frac{a}{b} \\div \\frac{b}{a} = \\frac{a}{b} \\times \\frac{a}{b}$。', '一個正數自己乘自己等於 1，這個數只能是 1。', '$\\frac{a}{b} = 1 \\Rightarrow a = b$。'],
    '除以倒數 ＝ 乘以自己。', '以為「一個數除以它的倒數」永遠是 1。'),
  MG('U02', 13, '剩餘分率連乘', '一桶水先倒出 $\\frac{1}{3}$，再倒出「剩下的」$\\frac{1}{2}$，最後剩下全桶的幾分之幾？',
    ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '0'], 'B',
    ['倒出 $\\frac{1}{3}$ → 剩 $\\frac{2}{3}$。', '再倒掉剩下的一半 → 剩 $\\frac{2}{3}$ 的一半 = $\\frac{1}{3}$。'],
    '「剩下的幾分之幾」要換基準量，用剩餘部分連乘。', '直接 $1 - \\frac{1}{3} - \\frac{1}{2} = \\frac{1}{6}$。'),
  MG('U02', 14, '工程合作', '一件工作甲單獨做 6 天完成，乙單獨做 3 天完成。兩人合作幾天完成？',
    ['2 天', '4.5 天', '9 天', '3 天'], 'A',
    ['乙的速度是甲的 2 倍 → 乙 = 2 個甲。', '甲＋乙 = 3 個甲一起做。', '1 個甲要 6 天 → 3 個甲要 $6 \\div 3 = 2$ 天。'],
    '合作一定比最快的人還快 → 答案必小於 3，秒刪 B、C、D。', '把天數相加或取平均。'),
  MG('U02', 15, '裂項相消', '$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\cdots + \\frac{1}{9 \\times 10}$ 等於多少？',
    ['$\\frac{1}{10}$', '$\\frac{9}{10}$', '1', '$\\frac{10}{9}$'], 'B',
    ['$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$。', '展開後中間全部抵消：$(1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + \\cdots$。', '只剩 $1 - \\frac{1}{10} = \\frac{9}{10}$。'],
    '裂項：相鄰兩數乘積的倒數 ＝ 兩倒數之差。', '想通分 9 個分數。'),
  MG('U02', 16, '連分數', '$1 + \\cfrac{1}{1 + \\cfrac{1}{1 + 1}}$ 等於多少？',
    ['$\\frac{8}{5}$', '$\\frac{3}{2}$', '2', '$\\frac{5}{3}$'], 'D',
    ['由最下面往上算：$1 + 1 = 2$。', '$1 + \\frac{1}{2} = \\frac{3}{2}$。', '$\\frac{1}{3/2} = \\frac{2}{3}$，最後 $1 + \\frac{2}{3} = \\frac{5}{3}$。'],
    '連分數永遠「由下往上」一層層翻。', '從最上面開始算而亂掉。'),
  MG('U02', 17, '與 1 的距離', '不用算：$\\frac{2025}{2026}$ 和 $\\frac{2026}{2027}$ 哪一個比較大？',
    ['$\\frac{2025}{2026}$', '$\\frac{2026}{2027}$', '一樣大', '無法比較'], 'B',
    ['$\\frac{2025}{2026} = 1 - \\frac{1}{2026}$。', '$\\frac{2026}{2027} = 1 - \\frac{1}{2027}$。', '$\\frac{1}{2027}$ 比較小 → 離 1 比較近 → 比較大。'],
    '真分數比大小：看「差 1 多少」，差越少越大。', '用交叉相乘算四位數乘法。'),
  MG('U02', 18, '連鎖相消', '一個數依序除以 $\\frac{3}{4}$、$\\frac{4}{5}$、$\\frac{5}{6}$、……一直除到 $\\frac{9}{10}$，結果是原數的幾倍？',
    ['$\\frac{10}{3}$', '$\\frac{3}{10}$', '10', '3'], 'A',
    ['每次除法都變成乘倒數：$\\frac{4}{3} \\times \\frac{5}{4} \\times \\frac{6}{5} \\times \\cdots \\times \\frac{10}{9}$。', '分子分母像骨牌一樣兩兩抵消。', '只剩最後的分子 10 與最前的分母 3 → $\\frac{10}{3}$。'],
    '連乘相消：只看頭尾。', '除以真分數卻以為變小，選 $\\frac{3}{10}$。'),
  MG('U02', 19, '括號極值', '在 $\\frac{1}{2} \\div \\frac{1}{3} \\div \\frac{1}{4} \\div \\frac{1}{5}$ 中可以任意加括號，能得到的「最大」結果是？',
    ['120', '30', '$\\frac{6}{5}$', '$\\frac{3}{40}$'], 'B',
    ['無論怎麼加括號，第 1 個數永遠在分子、第 2 個數永遠在分母。', '後面的 $\\frac{1}{4}$、$\\frac{1}{5}$ 都小於 1，放在分母（被除）結果才會變大。', '最大 = $\\frac{1}{2} \\div (\\frac{1}{3} \\times \\frac{1}{4} \\times \\frac{1}{5}) = \\frac{1}{2} \\times 60 = 30$，正好就是不加括號的結果。'],
    '連除結構分析：先找「位置固定」的數，再決定其他數放分子或分母。', '以為可以把 $\\frac{1}{2}$ 也移到分母得到 120。'),
  MG('U02', 20, '最簡分數配對', '把分母是 30 的「所有最簡真分數」加起來，總和是多少？',
    ['4', '8', '15', '$\\frac{29}{2}$'], 'A',
    ['和 30 互質的分子：1、7、11、13、17、19、23、29，共 8 個。', '配對：$\\frac{1}{30} + \\frac{29}{30} = 1$，$\\frac{7}{30} + \\frac{23}{30} = 1$ ……', '若 $n$ 與 30 互質，$30 - n$ 也與 30 互質 → 剛好 4 對，總和 4。'],
    '對稱配對 ＋ 第 1 單元互質：$\\gcd(n, 30) = \\gcd(30 - n, 30)$。', '把 1~29 全部加起來得 $\\frac{29}{2}$。'),
);

/* ---------- U03 小數除法 ---------- */
QUESTION_BANK.push(
  MG('U03', 1, '除數小於 1', '不用算：$36 \\div 0.9$ 的結果和 36 比起來？',
    ['比 36 大', '比 36 小', '等於 36', '無法判斷'], 'A',
    ['除數 0.9 小於 1。', '除以小於 1 的數，商比被除數大。'],
    '和分數除法同一個道理：看除數比 1 大還是小。', '以為除法一定變小。'),
  MG('U03', 2, '小數點同移', '$4.8 \\div 0.6$ 和下列哪一個算式的結果相同？',
    ['$4.8 \\div 6$', '$480 \\div 6$', '$48 \\div 6$', '$48 \\div 0.6$'], 'C',
    ['被除數和除數「同時乘以 10」，商不變。', '$4.8 \\div 0.6 = 48 \\div 6$。'],
    '商不變性質：被除數、除數同乘同除一個數。', '只移動除數的小數點。'),
  MG('U03', 3, '倍數直覺', '$2.5 \\div 0.25$ 等於多少？',
    ['100', '0.1', '1', '10'], 'D',
    ['0.25 的 10 倍是 2.5。', '所以 2.5 裡有 10 個 0.25。'],
    '把除法讀成「裡面有幾個」。', '小數點位數算錯，選 1 或 100。'),
  MG('U03', 4, '除以 0.01', '$7 \\div 0.01$ 和下列哪一個相等？',
    ['$7 \\times 100$', '$7 \\div 100$', '$7 \\times 0.01$', '0.07'], 'A',
    ['$0.01 = \\frac{1}{100}$。', '除以 $\\frac{1}{100}$ ＝ 乘以 100。'],
    '÷ 0.1 ＝ × 10；÷ 0.01 ＝ × 100。', '把 ÷ 0.01 和 × 0.01 搞混。'),
  MG('U03', 5, '商相等比大小', '甲 $\\div 0.8$ ＝ 乙 $\\div 1.2$（甲、乙都大於 0），誰比較大？',
    ['甲', '乙', '一樣大', '無法判斷'], 'B',
    ['甲除以小於 1 的數 → 被放大了。', '乙除以大於 1 的數 → 被縮小了。', '放大後的甲 ＝ 縮小後的乙 → 乙原本比較大。'],
    '結果相同時，被「放大」的那個原本比較小。', '看到 1.2 比較大就以為乙的結果大。'),
  MG('U03', 6, '商的縮放', '已知 $12.6 \\div 3 = 4.2$，那麼 $1.26 \\div 0.03$ 等於多少？',
    ['0.42', '4.2', '42', '420'], 'C',
    ['被除數 ÷ 10 → 商 ÷ 10。', '除數 ÷ 100 → 商 × 100。', '合起來商 × 10：$4.2 \\times 10 = 42$。'],
    '被除數與除數的縮放效果要「分開算再合併」。', '只看被除數變小就選 0.42。'),
  MG('U03', 7, '餘數小數點', '小華算 $17 \\div 0.3$，商取到整數位，寫「商 56，餘 2」。哪裡有問題？',
    ['商算錯了', '餘數應該是 0.2', '餘數應該是 0.02', '完全正確'], 'B',
    ['驗算：$0.3 \\times 56 = 16.8$。', '$17 - 16.8 = 0.2$。', '餘數的小數點要對齊「原來的被除數」，不是移動後的。'],
    '餘數一定比除數 0.3 小 → 2 不可能是餘數，秒判。', '直式移位後忘了把餘數的小數點移回來。'),
  MG('U03', 8, '循環小數', '$1 \\div 3$ 化成小數，小數點後第 100 位數字是？',
    ['3', '0', '1', '6'], 'A',
    ['$1 \\div 3 = 0.333\\ldots$，每一位都是 3。'],
    '循環節只有一位時，任何一位都一樣。', '以為後面會出現四捨五入的 4。'),
  MG('U03', 9, '循環節週期', '$\\frac{1}{7} = 0.\\overline{142857}$。小數點後第 100 位數字是？',
    ['1', '4', '2', '8'], 'D',
    ['循環節 6 位一組。', '96 是 6 的倍數 → 第 96 位是一組的結尾 7。', '第 100 位是下一組的第 4 位 → 8。'],
    '週期問題：找最近的週期倍數，再數餘下幾位。', '直接用 100 ÷ 6 的商去找。'),
  MG('U03', 10, '除得盡判斷', '下列哪一個分數化成小數會「除不盡」？',
    ['$\\frac{3}{8}$', '$\\frac{5}{6}$', '$\\frac{9}{12}$', '$\\frac{7}{20}$'], 'B',
    ['最簡分數的分母只含質因數 2 和 5，才除得盡。', '$\\frac{9}{12} = \\frac{3}{4}$，分母只剩 2 → 除得盡。', '$\\frac{5}{6}$ 分母有 3 → 除不盡。'],
    '結合第 1 單元質因數分解：先約分再看分母。', '看到 12 有 3 就選，忘了先約分。'),
  MG('U03', 11, '倍數合併', '$A \\div 0.5 + A \\div 0.25$ 等於 $A$ 的幾倍？',
    ['0.75 倍', '6 倍', '3 倍', '8 倍'], 'B',
    ['÷ 0.5 ＝ × 2。', '÷ 0.25 ＝ × 4。', '$2A + 4A = 6A$。'],
    '常用換算：0.5 ↔ 2、0.25 ↔ 4、0.125 ↔ 8、0.2 ↔ 5。', '把除數相加變成 ÷ 0.75。'),
  MG('U03', 12, '看錯除數', '小明把除數 0.25 看成 2.5，算出商是 4。正確的商應該是多少？',
    ['0.4', '4', '40', '400'], 'C',
    ['正確除數是看錯除數的 $\\frac{1}{10}$。', '除數變成 $\\frac{1}{10}$ → 商變 10 倍。', '$4 \\times 10 = 40$。'],
    '不必回推被除數，直接用「除數與商反向縮放」。', '先回推被除數再算，容易出錯。'),
  MG('U03', 13, '0.999… 之謎', '$0.999\\ldots$（9 無限循環）和 1 比較？',
    ['比 1 小一點點', '剛好等於 1', '比 1 大', '無法表示'], 'B',
    ['$\\frac{1}{3} = 0.333\\ldots$。', '兩邊同乘 3：$1 = 0.999\\ldots$。'],
    '無限循環小數可以剛好等於整數。', '以為永遠差一點點。'),
  MG('U03', 14, '循環化分數', '$0.\\overline{12}$（$0.121212\\ldots$）寫成最簡分數是？',
    ['$\\frac{1}{12}$', '$\\frac{12}{100}$', '$\\frac{6}{50}$', '$\\frac{4}{33}$'], 'D',
    ['$\\frac{1}{99} = 0.010101\\ldots$。', '$0.121212\\ldots = 12 \\times \\frac{1}{99} = \\frac{12}{99}$。', '約分得 $\\frac{4}{33}$。'],
    '兩位循環節 → 分母 99；一位循環節 → 分母 9。', '把循環小數當成 0.12。'),
  MG('U03', 15, '比值還原', '$a$、$b$ 是互質的正整數，且 $a \\div b = 0.75$，則 $a + b$ 等於多少？',
    ['7', '75', '175', '4'], 'A',
    ['$0.75 = \\frac{3}{4}$。', '3 和 4 互質 → $a = 3$、$b = 4$。', '$3 + 4 = 7$。'],
    '常用小數分數秒換：0.75 ＝ $\\frac{3}{4}$、0.125 ＝ $\\frac{1}{8}$。', '直接寫 $\\frac{75}{100}$ 而沒約分。'),
  MG('U03', 16, '連除換乘', '$1 \\div 0.125 \\div 0.125$ 等於多少？',
    ['16', '8', '64', '$\\frac{1}{64}$'], 'C',
    ['$0.125 = \\frac{1}{8}$，除以它 ＝ 乘以 8。', '$1 \\times 8 \\times 8 = 64$。'],
    '把常見小數看成單位分數，連除變連乘。', '以為一直除會越來越小。'),
  MG('U03', 17, '誰更接近 1', '$0.98 \\div 0.99$ 和 $0.99 \\div 0.98$，哪一個比較接近 1？',
    ['$0.98 \\div 0.99$', '$0.99 \\div 0.98$', '一樣近', '無法判斷'], 'A',
    ['$0.98 \\div 0.99 = \\frac{98}{99} = 1 - \\frac{1}{99}$。', '$0.99 \\div 0.98 = \\frac{99}{98} = 1 + \\frac{1}{98}$。', '$\\frac{1}{99} < \\frac{1}{98}$ → 前者離 1 比較近。'],
    '把小數化成「1 ± 小分數」比較距離。', '以為兩者互為倒數，所以離 1 一樣遠。'),
  MG('U03', 18, '補數循環', '$\\frac{1}{7} = 0.142857\\ldots$。不用直式，$\\frac{6}{7}$ 小數第 1 位是？',
    ['1', '5', '8', '7'], 'C',
    ['$\\frac{6}{7} = 1 - \\frac{1}{7}$。', '$1 - 0.142857\\ldots = 0.857142\\ldots$。', '第 1 位是 8。'],
    '補數法：$\\frac{6}{7}$ 的每一位 ＝ 9 減去 $\\frac{1}{7}$ 的每一位。', '真的去做 6 ÷ 7 的直式。'),
  MG('U03', 19, '循環小數和', '$0.\\overline{1} + 0.\\overline{2} + 0.\\overline{3} + \\cdots + 0.\\overline{8}$ 等於多少？',
    ['3.6', '36', '4', '3.96'], 'C',
    ['$0.\\overline{k} = \\frac{k}{9}$。', '總和 $= \\frac{1 + 2 + \\cdots + 8}{9} = \\frac{36}{9} = 4$。'],
    '一位循環 ＝ 九分之幾，配合 1~8 配對和 36。', '當成 0.1 + 0.2 + … + 0.8 = 3.6。'),
  MG('U03', 20, '有限小數計數', '$n$ 是 1 到 20 的整數，$\\frac{1}{n}$ 化成小數是「有限小數」的 $n$ 共有幾個？',
    ['6 個', '7 個', '8 個', '10 個'], 'C',
    ['$\\frac{1}{n}$ 是有限小數 ⇔ $n$ 只含質因數 2 和 5。', '列出：1、2、4、5、8、10、16、20。', '共 8 個。'],
    'AMC 8 經典：只含 2 與 5 的數 ＝ $2^a \\times 5^b$。', '漏掉 1 或 16、20。'),
);

/* ---------- U04 比與比值 ---------- */
QUESTION_BANK.push(
  MG('U04', 1, '相等的比', '$3 : 5$ 和 $6 : 10$ 的比值相比？',
    ['相等', '前者大', '後者大', '無法比較'], 'A',
    ['前項、後項同乘 2，比值不變。', '兩個比值都是 $\\frac{3}{5}$。'],
    '比的前後項同乘同除（不為 0），比值不變。', '以為數字大比值就大。'),
  MG('U04', 2, '比值意義', '$4 : 4$ 的比值是？',
    ['0', '1', '4', '16'], 'B',
    ['比值 ＝ 前項 ÷ 後項 ＝ $4 \\div 4 = 1$。'],
    '前後項相同 → 比值必為 1。', '把比值當成相減得 0。'),
  MG('U04', 3, '最簡整數比', '$0.5 : 1.5$ 的最簡整數比是？',
    ['$3 : 1$', '$5 : 15$', '$1 : 3$', '$1 : 1.5$'], 'C',
    ['1.5 是 0.5 的 3 倍。', '所以最簡整數比是 $1 : 3$。'],
    '最簡整數比：前後項都是整數，且互質。', '$5 : 15$ 還沒約分；$1 : 1.5$ 不是整數比。'),
  MG('U04', 4, '部分與全體', '班上男生 : 女生 ＝ $2 : 3$，男生占全班的幾分之幾？',
    ['$\\frac{2}{3}$', '$\\frac{3}{5}$', '$\\frac{3}{2}$', '$\\frac{2}{5}$'], 'D',
    ['全班看成 $2 + 3 = 5$ 份。', '男生占 2 份 → $\\frac{2}{5}$。'],
    '部分 : 部分 → 部分 : 全體，分母要用「和」。', '直接寫 $\\frac{2}{3}$。'),
  MG('U04', 5, '連比橋接', '甲 : 乙 ＝ $3 : 4$，乙 : 丙 ＝ $4 : 5$，甲 : 丙 ＝ ？',
    ['$3 : 5$', '$4 : 5$', '$3 : 4$', '$5 : 3$'], 'A',
    ['兩個比中的乙都是 4，可以直接接起來。', '甲 : 乙 : 丙 ＝ $3 : 4 : 5$ → 甲 : 丙 ＝ $3 : 5$。'],
    '中間項相同 → 直接串成連比。', '把比值相乘時弄反方向。'),
  MG('U04', 6, '同乘不變', '$a : b = 7 : 3$。若 $a$、$b$ 都乘以 2026，比值會？',
    ['變大', '變小', '不變', '無法判斷'], 'C',
    ['比值 ＝ $a \\div b$。', '被除數和除數同乘一個數，商不變。'],
    '比的基本性質 ＝ 除法的商不變性質。', '以為乘了大數比值也變大。'),
  MG('U04', 7, '長度比與面積比', '兩個正方形的邊長比是 $1 : 2$，周長比是？',
    ['$1 : 2$', '$1 : 4$', '$2 : 1$', '$1 : 8$'], 'A',
    ['周長 ＝ 邊長 × 4，兩邊都乘 4，比不變。', '周長比 ＝ 邊長比 ＝ $1 : 2$。'],
    '「長度」跟著同比例；「面積」才會變平方（第 7 單元伏筆）。', '和面積比 $1 : 4$ 搞混。'),
  MG('U04', 8, '總數整除', '班上男女生人數比是 $3 : 2$，全班人數可能是？',
    ['32 人', '33 人', '34 人', '35 人'], 'D',
    ['全班是 $3 + 2 = 5$ 份，每份人數相同。', '所以全班人數一定是 5 的倍數。', '只有 35 是 5 的倍數。'],
    '比的和 → 總數必為（前項 ＋ 後項）的倍數。', '以為只要是 3 或 2 的倍數就行。'),
  MG('U04', 9, '平分差額', '甲、乙的錢比是 $5 : 3$。甲給乙 10 元後兩人一樣多。兩人共有多少元？',
    ['40 元', '60 元', '80 元', '100 元'], 'C',
    ['總共 8 份，一樣多時各 4 份。', '甲從 5 份變 4 份 → 給出 1 份 ＝ 10 元。', '總共 $8 \\times 10 = 80$ 元。'],
    '轉移問題：總量不變，看「份數變化」。', '以為差 2 份 ＝ 10 元。'),
  MG('U04', 10, '差與和的比', '$a : b = 2 : 3$，則 $(b - a) : (a + b)$ ＝ ？',
    ['$5 : 1$', '$2 : 5$', '$1 : 5$', '$1 : 3$'], 'C',
    ['把 $a$ 看成 2 份，$b$ 看成 3 份。', '$b - a = 1$ 份，$a + b = 5$ 份。', '比是 $1 : 5$。'],
    '用「份數」代替真實數字，任何比都能秒算。', '前後項順序寫反。'),
  MG('U04', 11, '年齡差不變', '現在哥哥和弟弟的年齡比是 $3 : 1$，10 年後變成 $2 : 1$。弟弟現在幾歲？',
    ['10 歲', '5 歲', '20 歲', '15 歲'], 'A',
    ['年齡差永遠不變。現在差 2 份（弟弟 1 份）。', '10 年後比是 $2 : 1$，差 ＝ 弟弟的年齡 ＝ 2 份 → 弟弟從 1 份變 2 份。', '多出的 1 份 ＝ 10 年 → 弟弟現在 10 歲。'],
    '年齡問題第一招：抓住「差不變」。', '以為兩人都加 10 比就不變。'),
  MG('U04', 12, '濃度直覺', '一杯糖水（糖 : 水 ＝ $1 : 4$），再同時加入 10 公克糖和 10 公克水，糖水會？',
    ['變甜', '變淡', '甜度不變', '無法判斷'], 'A',
    ['原本糖占 $\\frac{1}{5}$ ＝ 20%。', '加入的部分糖占一半 ＝ 50%，比原本甜。', '混合後甜度介於兩者之間 → 比 20% 高 → 變甜。'],
    '混合後的濃度一定介於兩者之間。', '以為糖水各加一樣多，比例就不變。'),
  MG('U04', 13, '角度連比', '一個三角形三個內角的比是 $1 : 2 : 3$，它是什麼三角形？',
    ['銳角三角形', '直角三角形', '鈍角三角形', '正三角形'], 'B',
    ['內角和 180°，分成 6 份，每份 30°。', '最大角 ＝ 3 份 ＝ 90°。'],
    '最大角占「一半」份數 → 剛好 90°。', '以為比例不同就是鈍角。'),
  MG('U04', 14, '分率反比', '甲的 $\\frac{1}{2}$ 等於乙的 $\\frac{1}{3}$，甲 : 乙 ＝ ？',
    ['$3 : 2$', '$2 : 3$', '$1 : 6$', '$6 : 1$'], 'B',
    ['只要拿出一半就等於乙的三分之一 → 甲比較少。', '設那個相等的量 ＝ 1：甲 ＝ 2，乙 ＝ 3。'],
    '「甲的 $\\frac{1}{a}$ ＝ 乙的 $\\frac{1}{b}$」⇒ 甲 : 乙 ＝ $a : b$。', '直接寫 $\\frac{1}{2} : \\frac{1}{3} = 3 : 2$。'),
  MG('U04', 15, '槓桿混合', '20% 的糖水和 30% 的糖水以 $1 : 3$ 的重量混合，濃度是？',
    ['22.5%', '25%', '27.5%', '50%'], 'C',
    ['30% 的那杯比較多 → 結果比較靠近 30%，先刪 A、B、D。', '槓桿：差距 10% 按 $3 : 1$ 反比分配 → 離 30% 有 2.5%。', '30% − 2.5% ＝ 27.5%。'],
    '混合濃度 ＝ 槓桿原理：靠近量多的那邊。', '直接平均成 25%。'),
  MG('U04', 16, '百分率改變比', '$A : B = 4 : 5$，若 $A$ 增加 25%，$B$ 不變，新的 $A : B$ ＝ ？',
    ['$5 : 4$', '$4 : 5$', '$5 : 6$', '$1 : 1$'], 'D',
    ['4 份增加 25% ＝ 增加 1 份 → 5 份。', '新比 ＝ $5 : 5 = 1 : 1$。'],
    '百分率作用在「份數」上，不用真實數字。', '以為增加 25% 就把比反過來。'),
  MG('U04', 17, '比與周長', '長方形長 : 寬 ＝ $3 : 2$，周長 50 公分，面積是多少？',
    ['96 平方公分', '125 平方公分', '150 平方公分', '600 平方公分'], 'C',
    ['長 ＋ 寬 ＝ 周長的一半 ＝ 25，分成 5 份，每份 5。', '長 15、寬 10，面積 150。'],
    '周長要先「÷ 2」才是長寬和。', '用 50 分成 5 份，得到長 30、寬 20。'),
  MG('U04', 18, '連比占比', '甲 : 乙 ＝ $2 : 3$，乙 : 丙 ＝ $2 : 5$，甲占三人總和的幾分之幾？',
    ['$\\frac{2}{10}$', '$\\frac{4}{25}$', '$\\frac{2}{7}$', '$\\frac{4}{15}$'], 'B',
    ['乙在兩個比中是 3 和 2，統一成 6。', '甲 : 乙 : 丙 ＝ $4 : 6 : 15$，共 25 份。', '甲占 $\\frac{4}{25}$。'],
    '連比的關鍵：把共同項換成公倍數（第 1 單元 LCM）。', '直接接成 $2 : 3 : 5$。'),
  MG('U04', 19, '平均速率陷阱', '去程時速 60 公里，原路回程時速 40 公里，全程平均時速是？',
    ['50 公里', '48 公里', '52 公里', '45 公里'], 'B',
    ['設單程 120 公里：去 2 小時、回 3 小時。', '總路程 240 公里 ÷ 5 小時 ＝ 48。', '慢速花的時間比較多，平均會偏向 40 → 一定小於 50。'],
    '路程相同時，速度比 $3 : 2$ ⇒ 時間比 $2 : 3$（反比）。', '直接把兩個速度平均成 50。'),
  MG('U04', 20, '總量不變轉移', '甲、乙兩桶水的比是 $5 : 3$。甲倒 12 公升給乙後，比變成 $3 : 5$。兩桶共有多少公升？',
    ['24 公升', '36 公升', '48 公升', '96 公升'], 'C',
    ['總量不變，前後都是 8 份。', '甲從 5 份變 3 份 → 倒出 2 份 ＝ 12 公升 → 1 份 6 公升。', '總共 $8 \\times 6 = 48$。'],
    '前後比的「和」相同 → 份數可以直接比較。', '以為 12 公升是 1 份。'),
);

/* ---------- U05 兩量關係 ---------- */
QUESTION_BANK.push(
  MG('U05', 1, '差固定', '哥哥比弟弟大 3 歲。弟弟 $x$ 歲、哥哥 $y$ 歲，$x$ 和 $y$ 的關係式是？',
    ['$y = x + 3$', '$y = x - 3$', '$y = 3 \\times x$', '$x + y = 3$'], 'A',
    ['哥哥比較大 → $y$ 比 $x$ 多 3。'],
    '「差固定」型：$y = x + a$。', '寫成 $y = 3x$（把「大 3 歲」當成「3 倍」）。'),
  MG('U05', 2, '倍數固定', '一枝筆 15 元，買 $x$ 枝共 $y$ 元，關係式是？',
    ['$y = 15 + x$', '$y = 15 \\times x$', '$y = x \\div 15$', '$x + y = 15$'], 'B',
    ['總價 ＝ 單價 × 數量。'],
    '「單價固定」型：$y = a \\times x$。', '把單價和數量相加。'),
  MG('U05', 3, '和固定', '周長 20 公分的長方形，長 $x$ 公分、寬 $y$ 公分，關係式是？',
    ['$x + y = 20$', '$x \\times y = 20$', '$x + y = 10$', '$y = x + 10$'], 'C',
    ['周長 ＝ (長 ＋ 寬) × 2 ＝ 20。', '所以 長 ＋ 寬 ＝ 10。'],
    '周長固定 → 長寬「和固定」為周長的一半。', '忘了除以 2，寫成 $x + y = 20$。'),
  MG('U05', 4, '和固定的變化', '$x + y = 10$，當 $x$ 變大時，$y$ 會？',
    ['變大', '不變', '不一定', '變小'], 'D',
    ['兩數和固定，一個多了，另一個就要少。'],
    '和固定 → 此消彼長。', '以為兩量一定同時變大。'),
  MG('U05', 5, '正比縮放', '$y = 3 \\times x$，當 $x$ 變成 2 倍時，$y$ 變成？',
    ['2 倍', '3 倍', '6 倍', '多 2'], 'A',
    ['$y$ 永遠是 $x$ 的 3 倍。', '$x$ 變 2 倍，$y$ 也跟著變 2 倍。'],
    '$y = a \\times x$：$x$ 變幾倍，$y$ 就變幾倍。', '把 3 和 2 相乘選 6 倍。'),
  MG('U05', 6, '差固定不成正比', '$y = x + 5$，當 $x$ 變成 2 倍時，$y$ 會？',
    ['一定變 2 倍', '不會變成 2 倍', '變 3 倍', '不變'], 'B',
    ['試 $x = 1$：$y = 6$；$x = 2$：$y = 7$。', '7 不是 6 的 2 倍。'],
    '只有 $y = a \\times x$ 才有「同步變倍」，加法關係沒有。', '以為所有關係都會跟著變倍。'),
  MG('U05', 7, '年齡差不變', '媽媽 40 歲、兒子 10 歲。幾年後媽媽的年齡是兒子的 2 倍？',
    ['10 年', '15 年', '20 年', '30 年'], 'C',
    ['年齡差永遠是 30 歲。', '媽媽是兒子 2 倍時，差 ＝ 兒子的年齡 ＝ 30 歲。', '兒子從 10 歲到 30 歲 → 20 年後。'],
    '「2 倍」時，差就等於小的那個。', '用 40 ÷ 2 ＝ 20 歲去想。'),
  MG('U05', 8, '連續折扣', '原價相同，「先打 8 折再打 8 折」和「直接打 6 折」，哪一個比較便宜？',
    ['兩次 8 折比較便宜', '直接 6 折比較便宜', '一樣', '無法判斷'], 'B',
    ['兩次 8 折 ＝ $0.8 \\times 0.8 = 0.64$ ＝ 6.4 折。', '6 折比 6.4 折便宜。'],
    '連續折扣要「相乘」，不能「相加減」。', '以為 8 折兩次 ＝ 少 40% ＝ 6 折。'),
  MG('U05', 9, '漲跌不對稱', '一件商品先漲價 10%，再降價 10%，最後價格和原價比？',
    ['回到原價', '比原價高', '比原價低', '不一定'], 'C',
    ['$1.1 \\times 0.9 = 0.99$。', '比原價少 1%。'],
    '降價的 10% 是以「漲後的價格」為基準，基準量變大了。', '以為 +10% −10% 抵消。'),
  MG('U05', 10, '積固定', '面積 24 平方公分的長方形，長 $x$、寬 $y$。$x$ 變成 2 倍時，$y$ 會？',
    ['不變', '減少 2', '變 2 倍', '變一半'], 'D',
    ['$x \\times y = 24$ 固定。', '$x$ 變 2 倍，$y$ 必須變一半，乘積才不變。'],
    '「積固定」→ 一個變幾倍，另一個就變幾分之一。', '以為長變長，寬也變長。'),
  MG('U05', 11, '關係式奇偶', '$y = 2 \\times x + 1$（$x$ 是正整數），$y$ 一定是？',
    ['奇數', '偶數', '質數', '3 的倍數'], 'A',
    ['$2 \\times x$ 一定是偶數。', '偶數 ＋ 1 ＝ 奇數。'],
    '結合第 1 單元奇偶性：$2x$ 偶、$2x + 1$ 奇。', '看到 $x = 1, 2, 3$ 得 3、5、7 就以為一定是質數（$x = 4$ 時 $y = 9$）。'),
  MG('U05', 12, '倍數倒轉', '甲的錢是乙的 1.5 倍，那麼乙的錢是甲的幾倍？',
    ['1.5 倍', '0.5 倍', '$\\frac{2}{3}$ 倍', '$\\frac{1}{3}$ 倍'], 'C',
    ['$1.5 = \\frac{3}{2}$ → 甲 : 乙 ＝ $3 : 2$。', '乙是甲的 $\\frac{2}{3}$。'],
    '反過來問 → 取倒數。', '以為反過來就是 1 − 0.5 = 0.5 倍。'),
  MG('U05', 13, '基準量換位', 'A 比 B 多 25%，那麼 B 比 A 少百分之幾？',
    ['25%', '20%', '75%', '80%'], 'B',
    ['設 B ＝ 4 份，A ＝ 5 份。', 'B 比 A 少 1 份，以 A 的 5 份為基準 → $\\frac{1}{5}$ ＝ 20%。'],
    '「比誰」誰就是基準量，基準量換了，百分率就換了。', '以為多 25% 反過來就是少 25%。'),
  MG('U05', 14, '和固定積最大', '$x + y = 10$（$x$、$y$ 是正整數），$x \\times y$ 最大是多少？',
    ['21', '24', '25', '50'], 'C',
    ['和固定時，兩數越接近，乘積越大。', '$5 \\times 5 = 25$ 最大。'],
    '周長固定的長方形，正方形面積最大。', '以為差越大乘積越大。'),
  MG('U05', 15, '差不變雙倍數', '3 年前爸爸的年齡是兒子的 5 倍，3 年後是兒子的 3 倍。兒子現在幾歲？',
    ['9 歲', '6 歲', '12 歲', '15 歲'], 'A',
    ['年齡差 $d$ 不變。3 年前差是兒子的 4 倍 → 兒子 ＝ $\\frac{d}{4}$。', '3 年後差是兒子的 2 倍 → 兒子 ＝ $\\frac{d}{2}$。', '兩個時間相隔 6 年：$\\frac{d}{2} - \\frac{d}{4} = \\frac{d}{4} = 6$ → 3 年前兒子 6 歲，現在 9 歲。'],
    '把「差」當成固定的尺，用份數變化對應時間差。', '把 3 年前的 6 歲當成答案。'),
  MG('U05', 16, '表格找規律', '$x$：1、2、3、4，$y$：2、5、10、17。當 $x = 10$ 時，$y$ ＝ ？',
    ['20', '37', '100', '101'], 'D',
    ['觀察：$2 = 1 \\times 1 + 1$、$5 = 2 \\times 2 + 1$、$10 = 3 \\times 3 + 1$。', '規律 $y = x \\times x + 1$。', '$x = 10$ → 101。'],
    '差 3、5、7 是連續奇數 → 平方數家族。', '以為每次多 3 或每次乘 2。'),
  MG('U05', 17, '和固定轉移', '甲、乙共有 100 元，原本比 $3 : 2$。甲給乙幾元後，比變成 $2 : 3$？',
    ['10 元', '20 元', '30 元', '40 元'], 'B',
    ['原本甲 60、乙 40。', '之後甲 40、乙 60（總和不變，比剛好對調）。', '甲給了 20 元。'],
    '比對調 → 兩人「交換」金額，給出的就是差的一半。', '把差 20 再乘 2 選 40。'),
  MG('U05', 18, '邊界極值', '$y = 100 - 3 \\times x$，$x$ 和 $y$ 都是正整數，$x$ 最大是多少？',
    ['30', '32', '33', '34'], 'C',
    ['$y$ 至少是 1 → $3x$ 最多 99。', '$x$ 最大 33（此時 $y = 1$）。'],
    '極值題：先讓另一個量取最小可能值。', '讓 $y = 0$ 而忘了 $y$ 要是正整數；或算成 34。'),
  MG('U05', 19, '漲跌逆推', '某商品先漲價 $p\\%$ 再降價 $p\\%$，結果比原價少 4%。$p$ 是多少？',
    ['2', '4', '16', '20'], 'D',
    ['漲 $p\\%$ 再跌 $p\\%$ 後，損失的比率剛好是 $p\\% \\times p\\%$。', '$p\\% \\times p\\% = 4\\%$ → $p\\% = 20\\%$（因為 $0.2 \\times 0.2 = 0.04$）。'],
    '$(1 + r)(1 - r) = 1 - r \\times r$：損失 ＝ 比率的平方。', '直接選 4 或 2。'),
  MG('U05', 20, '假設法', '大人票 100 元、小孩票 50 元，10 個人共付 700 元。小孩有幾人？',
    ['4 人', '6 人', '3 人', '7 人'], 'B',
    ['假設 10 人全是大人：1000 元，多了 300 元。', '每把 1 個大人換成小孩，少 50 元。', '$300 \\div 50 = 6$ 個小孩。'],
    '兩量和固定 ＋ 總價固定 → 假設法（第 8 單元雞兔同籠的原型）。', '算出大人 4 人卻選了 4。'),
);

/* ---------- U06 圓周長與扇形周長 ---------- */
QUESTION_BANK.push(
  MG('U06', 1, '圓周率意義', '任何一個圓，「圓周長 ÷ 直徑」的結果是？',
    ['2', '圓周率（約 3.14）', '半徑', '依圓的大小而不同'], 'B',
    ['所有圓都是彼此的放大縮小。', '圓周長和直徑的比值永遠固定 ＝ 圓周率。'],
    '圓周率是常數，跟圓的大小無關。', '以為大圓的比值比較大。'),
  MG('U06', 2, '直徑與半徑', '直徑 10 公分的圓和半徑 5 公分的圓，周長相比？',
    ['前者長', '後者長', '一樣長', '無法比較'], 'C',
    ['半徑 5 → 直徑 10。', '直徑相同的圓，周長一樣。'],
    '先統一成直徑再比。', '直接比 10 和 5。'),
  MG('U06', 3, '周長正比', '圓的直徑變成 3 倍，圓周長變成？',
    ['3 倍', '6 倍', '9 倍', '不變'], 'A',
    ['周長 ＝ 直徑 × 圓周率，圓周率固定。', '直徑變 3 倍，周長也變 3 倍。'],
    '長度跟著長度同倍數變化（面積才是平方倍）。', '和面積 9 倍搞混。'),
  MG('U06', 4, '半圓周長', '「半圓形的周長」和「圓周長的一半」，哪一個比較長？',
    ['一樣長', '半圓形的周長', '圓周長的一半', '無法比較'], 'B',
    ['圓周長的一半只有一段弧。', '半圓形周長 ＝ 弧 ＋ 直徑，多了一條直徑。'],
    '圖形周長要繞「一整圈」，別忘了直線邊。', '以為兩個說法一樣。'),
  MG('U06', 5, '扇形弧長占比', '圓心角 90° 的扇形，弧長是整個圓周長的幾分之幾？',
    ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{90}$', '$\\frac{1}{4}$'], 'D',
    ['$90° \\div 360° = \\frac{1}{4}$。'],
    '弧長占比 ＝ 圓心角 ÷ 360°。', '用 90 當分母。'),
  MG('U06', 6, '周長反推', '一個圓的周長是 31.4 公分（圓周率用 3.14），直徑是多少？',
    ['5 公分', '10 公分', '15.7 公分', '3.14 公分'], 'B',
    ['$31.4 = 3.14 \\times 10$，一眼看出直徑 10。'],
    '熟記：直徑 10 → 周長 31.4；直徑 20 → 62.8。', '算成半徑 5。'),
  MG('U06', 7, '地球繩子', '一條繩子剛好繞地球赤道一圈。把繩子加長 6.28 公尺，均勻撐起離地，繩子離地大約多高？',
    ['不到 1 公分', '約 1 公尺', '約 100 公尺', '地球太大，無法計算'], 'B',
    ['周長多 6.28 → 直徑多 $6.28 \\div 3.14 = 2$ 公尺。', '半徑多 1 公尺 → 離地約 1 公尺。'],
    '周長增加量只和半徑增加量有關，跟原本的圓多大無關！', '直覺以為地球那麼大，加 6 公尺根本看不出來。'),
  MG('U06', 8, '分針路程', '分針長 10 公分，1 小時分針尖端走了多遠？（圓周率 3.14）',
    ['31.4 公分', '62.8 公分', '10 公分', '314 公分'], 'B',
    ['1 小時分針轉一整圈，半徑 10 → 直徑 20。', '$20 \\times 3.14 = 62.8$。'],
    '針長 ＝ 半徑，不是直徑。', '把 10 當直徑算成 31.4。'),
  MG('U06', 9, '半圓弧切割', '直徑 AB 上的大半圓弧，和把 AB 任意分成兩段、各以兩段為直徑畫的兩個小半圓弧，總長相比？',
    ['大半圓弧比較長', '兩個小半圓弧比較長', '一樣長', '要看分割點在哪'], 'C',
    ['半圓弧長 ＝ 直徑 × 圓周率 ÷ 2，和直徑成正比。', '兩段小直徑加起來 ＝ AB。', '所以兩小弧總長 ＝ 大弧長，和分割點無關。'],
    '正比關係可以「拆開再加回」→ 總和不變。', '看圖覺得彎彎曲曲比較長。'),
  MG('U06', 10, '扇形周長陷阱', '半徑 10 公分的半圓形，周長是多少？（圓周率 3.14）',
    ['31.4 公分', '41.4 公分', '62.8 公分', '51.4 公分'], 'D',
    ['弧長 ＝ $20 \\times 3.14 \\div 2 = 31.4$。', '再加直徑 20 → 51.4。'],
    '扇形周長 ＝ 弧長 ＋ 2 條半徑。', '只算弧長 31.4。'),
  MG('U06', 11, '弧長等於半徑', '扇形的弧長剛好等於半徑時，圓心角大約是幾度？',
    ['約 30°', '約 57°', '約 90°', '剛好 60°'], 'B',
    ['整圈弧長 ＝ 2 × 3.14 × 半徑 ≈ 6.28 個半徑。', '1 個半徑長的弧 → $360° \\div 6.28 \\approx 57°$。'],
    '比 60° 小一點：因為圓周率比 3 大一點。', '以為正三角形 60° 的弧長等於半徑（那是弦長）。'),
  MG('U06', 12, '方與圓', '正方形的邊長等於圓的直徑，正方形周長和圓周長相比？',
    ['正方形比較長', '圓比較長', '一樣長', '無法比較'], 'A',
    ['正方形周長 ＝ 4 個直徑。', '圓周長 ≈ 3.14 個直徑。'],
    '圓被正方形包在裡面，周長一定比較短。', '以為圓「看起來」比較大。'),
  MG('U06', 13, '跑道內外道', '操場跑道兩端是半圓。外圈跑道的半徑比內圈多 1 公尺，跑一圈外圈比內圈多跑多少？',
    ['2 公尺', '3.14 公尺', '6.28 公尺', '依跑道長短而定'], 'C',
    ['直線部分內外一樣長。', '兩個半圓 ＝ 一個整圓，半徑多 1 → 直徑多 2。', '多 $2 \\times 3.14 = 6.28$ 公尺。'],
    '跟地球繩子同一原理：只看半徑差。', '以為跑道越長差越多。'),
  MG('U06', 14, '兩圓綑綁', '兩個半徑 5 公分的圓並排相切，用繩子緊緊綑一圈，繩長是多少？（圓周率 3.14）',
    ['51.4 公分', '62.8 公分', '31.4 公分', '41.4 公分'], 'A',
    ['兩條直線段，各等於兩圓心距離 10 → 20。', '兩端各半圓 → 合起來一整圓 31.4。', '$20 + 31.4 = 51.4$。'],
    '綑綁繩長 ＝ 直線段 ＋ 一整個圓周。', '把兩個圓周全部加起來 62.8。'),
  MG('U06', 15, '三圓綑綁', '三個半徑 5 公分的圓兩兩相切（排成三角形），用繩子緊綑一圈，繩長是多少？',
    ['31.4 公分', '51.4 公分', '61.4 公分', '94.2 公分'], 'C',
    ['3 條直線段，各 10 → 30。', '3 個轉角弧，轉角加起來剛好轉一圈 → 一整圓 31.4。', '$30 + 31.4 = 61.4$。'],
    '不管幾個圓，轉角弧加總永遠 ＝ 一個圓周。', '以為三段弧各是半圓。'),
  MG('U06', 16, '四圓綑綁', '四個半徑 5 公分的圓排成 2 × 2 正方形，用繩子緊綑一圈，繩長是多少？',
    ['62.8 公分', '71.4 公分', '81.4 公分', '40 公分'], 'B',
    ['4 條直線段，各 10 → 40。', '4 個轉角各 $\\frac{1}{4}$ 圓 → 一整圓 31.4。', '$40 + 31.4 = 71.4$。'],
    '繞一圈回到原方向 ＝ 總共轉 360° ＝ 一個圓周。', '只算直線 40。'),
  MG('U06', 17, '硬幣滾動', '一枚硬幣沿著另一枚「同樣大小」的固定硬幣外緣滾一圈回到原處，滾動的硬幣自己轉了幾圈？',
    ['1 圈', '2 圈', '3 圈', '4 圈'], 'B',
    ['滾動硬幣的中心走的圓，半徑是 2 個硬幣半徑 → 路程是自身周長的 2 倍。', '中心路程 ÷ 自身周長 ＝ 2 圈。'],
    'AMC 經典：自轉圈數 ＝ 中心走的路 ÷ 自己的周長。', '只看接觸邊長相等而選 1。'),
  MG('U06', 18, '時針分針路程', '時針長 6 公分、分針長 10 公分。12 小時內，時針尖和分針尖走的路程比是？',
    ['$1 : 12$', '$3 : 5$', '$1 : 20$', '$5 : 3$'], 'C',
    ['12 小時：時針轉 1 圈，分針轉 12 圈。', '路程 ∝ 半徑 × 圈數：$6 \\times 1 : 10 \\times 12 = 6 : 120 = 1 : 20$。'],
    '路程 ＝ 半徑比 × 圈數比，兩個比要相乘。', '只考慮圈數或只考慮長度。'),
  MG('U06', 19, '圓周率大於 3', '為什麼可以確定圓周率一定比 3 大？',
    ['圓內畫正六邊形，周長 ＝ 3 個直徑，而圓周比它長', '因為 3.14 比 3 大', '量了很多圓都是這樣', '因為圓周長總是直徑的 3 倍多一點點，所以剛好是 3'], 'A',
    ['圓內接正六邊形由 6 個正三角形組成，每邊 ＝ 半徑。', '六邊形周長 ＝ 6 個半徑 ＝ 3 個直徑。', '兩點之間直線最短 → 圓周比六邊形周長長 → 圓周率 ＞ 3。'],
    '阿基米德的想法：用多邊形把圓「夾」起來。', '用結論（3.14）證明結論。'),
  MG('U06', 20, '大小硬幣滾動', '一枚硬幣沿著半徑是它「2 倍」的固定硬幣外緣滾一圈，滾動的硬幣自己轉了幾圈？',
    ['1 圈', '2 圈', '4 圈', '3 圈'], 'D',
    ['小硬幣半徑 $r$，大硬幣 $2r$ → 中心走的圓半徑 $3r$。', '中心路程是自身周長的 3 倍 → 3 圈。'],
    '外滾公式：自轉圈數 ＝ 大半徑 ÷ 小半徑 ＋ 1。', '只算 2 倍周長選 2 圈。'),
);

/* ---------- U07 放大縮小與比例尺 ---------- */
QUESTION_BANK.push(
  MG('U07', 1, '角度不變', '一個三角形放大成 2 倍的放大圖，對應角的角度會？',
    ['變 2 倍', '變一半', '不變', '變 4 倍'], 'C',
    ['放大縮小只改變大小，不改變形狀。', '形狀不變 → 角度不變。'],
    '放大圖：對應邊成比例、對應角相等。', '以為整個圖放大，角也放大。'),
  MG('U07', 2, '比例尺意義', '比例尺 $1 : 1000$，圖上 1 公分代表實際多長？',
    ['1000 公尺', '10 公尺', '100 公尺', '1 公尺'], 'B',
    ['1 公分代表 1000 公分。', '1000 公分 ＝ 10 公尺。'],
    '公分 → 公尺：去掉兩個 0。', '直接當成 1000 公尺。'),
  MG('U07', 3, '周長倍數', '一個圖形放大 3 倍，周長變成？',
    ['3 倍', '6 倍', '9 倍', '不變'], 'A',
    ['每條邊都變 3 倍，加起來也是 3 倍。'],
    '所有「長度」都同倍數變化。', '和面積 9 倍搞混。'),
  MG('U07', 4, '面積平方倍', '正方形邊長放大成 2 倍，面積變成？',
    ['2 倍', '4 倍', '8 倍', '不變'], 'B',
    ['長變 2 倍、寬也變 2 倍。', '面積 ＝ $2 \\times 2 = 4$ 倍。'],
    '面積放大 ＝ 邊長倍數 × 邊長倍數。', '以為面積也只變 2 倍。'),
  MG('U07', 5, '比例尺詳細度', '同樣大小的紙，比例尺 $1 : 50000$ 和 $1 : 5000$，哪一張畫得比較詳細（圖上看起來比較大）？',
    ['一樣', '無法判斷', '$1 : 50000$', '$1 : 5000$'], 'D',
    ['$1 : 5000$：1 公分只代表 50 公尺。', '$1 : 50000$：1 公分代表 500 公尺。', '每公分代表的越少 → 畫得越大越詳細。'],
    '比例尺後項越小 → 縮得越少 → 越詳細。', '以為數字越大越詳細。'),
  MG('U07', 6, '縮小面積', '一個圖形縮小成 $\\frac{1}{3}$，面積變成原來的？',
    ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{9}$', '3 倍'], 'C',
    ['長寬都變 $\\frac{1}{3}$。', '面積 ＝ $\\frac{1}{3} \\times \\frac{1}{3} = \\frac{1}{9}$。'],
    '縮小也一樣，面積是平方。', '以為面積也是 $\\frac{1}{3}$。'),
  MG('U07', 7, '求比例尺', '地圖上 2 公分代表實際 1 公里，比例尺是？',
    ['$1 : 50000$', '$1 : 500$', '$1 : 5000$', '$1 : 2$'], 'A',
    ['1 公里 ＝ 100000 公分。', '2 公分 : 100000 公分 ＝ $1 : 50000$。'],
    '1 公里 ＝ 1 後面 5 個 0 公分。', '公里換公分時少了 0。'),
  MG('U07', 8, '體積立方倍', '正方體的邊長放大成 2 倍，體積變成？',
    ['2 倍', '4 倍', '6 倍', '8 倍'], 'D',
    ['長、寬、高都變 2 倍。', '體積 ＝ $2 \\times 2 \\times 2 = 8$ 倍。'],
    '長度 $k$ 倍 → 面積 $k^2$ 倍 → 體積 $k^3$ 倍。', '以為體積和面積一樣是 4 倍。'),
  MG('U07', 9, '影子相似', '同一時間，1 公尺高的竹竿影長 2 公尺，一棵樹的影長 10 公尺，樹高多少？',
    ['5 公尺', '20 公尺', '10 公尺', '2 公尺'], 'A',
    ['同一時間，物高 : 影長 都是 $1 : 2$。', '影長 10 → 樹高 5。'],
    '陽光平行 → 形成縮放關係的三角形。', '把比例倒過來算成 20。'),
  MG('U07', 10, '地圖面積換算', '比例尺 $1 : 10000$ 的地圖上，1 平方公分代表實際多少面積？',
    ['100 平方公尺', '10000 平方公尺', '1000 平方公尺', '1 平方公尺'], 'B',
    ['圖上 1 公分 ＝ 實際 10000 公分 ＝ 100 公尺。', '1 平方公分 ＝ $100 \\times 100 = 10000$ 平方公尺。'],
    '面積比例 ＝ 長度比例的平方。', '直接用 10000 公分換算成 100 平方公尺。'),
  MG('U07', 11, '相似面積比', '兩個放大縮小關係的三角形，對應邊比是 $2 : 3$，面積比是？',
    ['$8 : 27$', '$2 : 3$', '$3 : 2$', '$4 : 9$'], 'D',
    ['面積比 ＝ 邊長比的平方。', '$2 \\times 2 : 3 \\times 3 = 4 : 9$。'],
    '邊比 $a : b$ → 面積比 $a^2 : b^2$ → 體積比 $a^3 : b^3$。', '選 $8 : 27$（那是體積比）。'),
  MG('U07', 12, '不等比放大', '長方形的長放大 2 倍、寬放大 3 倍，新圖形是原來的放大圖嗎？',
    ['是', '不是', '只要面積變大就是', '不一定'], 'B',
    ['放大圖的每條邊必須放大「相同」倍數。', '長寬倍數不同 → 形狀變了 → 不是放大圖。'],
    '放大圖的判斷：所有對應邊比值相同。', '以為「變大」就是放大圖。'),
  MG('U07', 13, '面積逆推周長', '正方形面積變成原來的 9 倍，周長變成原來的幾倍？',
    ['3 倍', '9 倍', '81 倍', '4.5 倍'], 'A',
    ['面積 9 倍 → 邊長 3 倍（$3 \\times 3 = 9$）。', '周長跟著邊長 → 3 倍。'],
    '面積倍數開平方 ＝ 長度倍數。', '以為周長也 9 倍。'),
  MG('U07', 14, '披薩直覺', '同樣厚度的披薩，1 片直徑 20 公分，和 2 片直徑 10 公分，哪個吃得比較多？',
    ['2 片小的', '一樣多', '1 片大的', '無法判斷'], 'C',
    ['直徑 2 倍 → 面積 4 倍。', '1 片大的 ＝ 4 片小的 ＞ 2 片小的。'],
    '圓也是放大縮小關係，面積是直徑倍數的平方。', '以為直徑 2 倍就 ＝ 2 片。'),
  MG('U07', 15, '比例尺換算', '比例尺 $1 : 25000$ 的地圖上量得 4 公分，實際距離是？',
    ['1 公里', '10 公里', '100 公尺', '4 公里'], 'A',
    ['$4 \\times 25000 = 100000$ 公分。', '100000 公分 ＝ 1 公里。'],
    '先湊整：$4 \\times 25 = 100$。', '單位換算少一個 0。'),
  MG('U07', 16, '模型重量', '同材質的實心汽車模型，比例 $1 : 100$，模型的重量大約是實物的？',
    ['$\\frac{1}{100}$', '$\\frac{1}{10000}$', '$\\frac{1}{1000000}$', '一樣重'], 'C',
    ['長寬高都縮成 $\\frac{1}{100}$。', '體積（重量）縮成 $\\frac{1}{100 \\times 100 \\times 100}$。'],
    '重量跟著「體積」走 → 立方。', '以為重量跟長度一樣縮 100 倍。'),
  MG('U07', 17, '兩張地圖', '同一個操場，畫在比例尺 $1 : 2000$ 的地圖上，面積是畫在 $1 : 5000$ 地圖上的幾倍？',
    ['2.5 倍', '6.25 倍', '5 倍', '25 倍'], 'B',
    ['長度：$1 : 2000$ 那張是另一張的 $5000 \\div 2000 = 2.5$ 倍。', '面積：$2.5 \\times 2.5 = 6.25$ 倍。'],
    '兩張比例尺先比「長度倍數」，再平方。', '只算長度倍數 2.5。'),
  MG('U07', 18, '中點三角形', '連接三角形三邊的中點，形成一個小三角形，它的面積是原三角形的？',
    ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$'], 'C',
    ['三條中點連線把原三角形切成 4 個一模一樣的小三角形。', '每個都是原三角形的縮小圖（邊長 $\\frac{1}{2}$ → 面積 $\\frac{1}{4}$）。'],
    '邊長一半 → 面積四分之一，兩種想法互相印證。', '以為邊長一半面積也一半。'),
  MG('U07', 19, '巨人悖論', '一個巨人身體每個方向都放大成一般人的 10 倍。他的腿骨每平方公分要承受的重量是一般人的幾倍？',
    ['一樣', '10 倍', '100 倍', '1000 倍'], 'B',
    ['體重跟著體積 → 1000 倍。', '腿骨截面積 → 100 倍。', '每單位面積承受 ＝ $1000 \\div 100 = 10$ 倍。'],
    '平方—立方定律：這就是為什麼巨人和超大昆蟲不可能存在。', '以為全部同步放大，所以一樣。'),
  MG('U07', 20, '面積增加率', '正方形邊長增加 10%，面積增加百分之幾？',
    ['10%', '21%', '20%', '100%'], 'B',
    ['邊長變 1.1 倍 → 面積變 $1.1 \\times 1.1 = 1.21$ 倍。', '增加 21%。'],
    '多出來的 1% 就是角落那個 $0.1 \\times 0.1$ 的小正方形。', '以為長寬各加 10% 合起來是 20%。'),
);

/* ---------- U08 怎樣解題 ---------- */
QUESTION_BANK.push(
  MG('U08', 1, '植樹兩端', '20 公尺的直路，每隔 5 公尺種一棵樹，兩端都種，共幾棵？',
    ['4 棵', '5 棵', '6 棵', '20 棵'], 'B',
    ['間隔數 ＝ $20 \\div 5 = 4$。', '兩端都種：棵數 ＝ 間隔數 ＋ 1 ＝ 5。'],
    '直線兩端都種：點 ＝ 段 ＋ 1。', '只算間隔數 4。'),
  MG('U08', 2, '封閉植樹', '周長 20 公尺的圓形水池，每隔 5 公尺種一棵樹，共幾棵？',
    ['4 棵', '5 棵', '3 棵', '6 棵'], 'A',
    ['封閉圖形頭尾相接，起點 ＝ 終點。', '棵數 ＝ 間隔數 ＝ 4。'],
    '封閉圖形：點 ＝ 段。', '套用直線公式多加 1。'),
  MG('U08', 3, '鋸木頭', '一根木頭要鋸成 5 段，需要鋸幾次？',
    ['5 次', '6 次', '10 次', '4 次'], 'D',
    ['鋸 1 次變 2 段，每多鋸 1 次多 1 段。', '5 段需要鋸 4 次。'],
    '刀數 ＝ 段數 − 1（植樹問題的變形）。', '以為段數 ＝ 次數。'),
  MG('U08', 4, '爬樓梯', '從 1 樓走到 4 樓要 30 秒，同樣速度從 1 樓走到 8 樓要幾秒？',
    ['60 秒', '70 秒', '80 秒', '56 秒'], 'B',
    ['1 樓到 4 樓只爬了 3 層 → 每層 10 秒。', '1 樓到 8 樓爬 7 層 → 70 秒。'],
    '樓層問題 ＝ 植樹問題：層數 ＝ 樓數 − 1。', '以為 4 樓變 8 樓時間就加倍。'),
  MG('U08', 5, '和差問題', '兩數和是 20，差是 4，大數是多少？',
    ['12', '8', '16', '10'], 'A',
    ['大數 ＝ (和 ＋ 差) ÷ 2 ＝ $24 \\div 2 = 12$。'],
    '把小的補成大的：和 ＋ 差 ＝ 2 個大數。', '算出小數 8 就選。'),
  MG('U08', 6, '火柴正方形', '用火柴棒排一排相連的正方形，排 1 個要 4 根，每多 1 個多 3 根。排 10 個要幾根？',
    ['40 根', '30 根', '31 根', '41 根'], 'C',
    ['第一個 4 根，之後 9 個各 3 根。', '$4 + 9 \\times 3 = 31$，也就是 $3 \\times 10 + 1$。'],
    '公式 $3n + 1$：每個正方形 3 根，加最左邊 1 根。', '直接 $4 \\times 10 = 40$，重複算了共用邊。'),
  MG('U08', 7, '空心方陣', '空心方陣每邊 10 人，最外一圈共有幾人？',
    ['40 人', '36 人', '100 人', '38 人'], 'B',
    ['4 邊各 10 人 ＝ 40，但 4 個角各被算了 2 次。', '$40 - 4 = 36$。'],
    '方陣外圈 ＝ $4n - 4$ ＝ $4(n - 1)$。', '忘了扣掉重複的角。'),
  MG('U08', 8, '數列規律', '1、4、9、16、□，□ 是多少？',
    ['20', '24', '25', '32'], 'C',
    ['$1 \\times 1$、$2 \\times 2$、$3 \\times 3$、$4 \\times 4$。', '下一個 $5 \\times 5 = 25$。'],
    '差 3、5、7、9 是連續奇數 → 平方數。', '只看差 3、5、7 卻算錯下一個。'),
  MG('U08', 9, '雞兔同籠', '雞兔同籠共 10 個頭、32 隻腳，兔子有幾隻？',
    ['4 隻', '5 隻', '8 隻', '6 隻'], 'D',
    ['假設全是雞：20 隻腳，少了 12 隻。', '每把 1 隻雞換成兔子多 2 隻腳。', '$12 \\div 2 = 6$ 隻兔子。'],
    '假設法：全部假設成一種，再用差額換。', '算出雞 4 隻就選。'),
  MG('U08', 10, '高斯配對', '$1 + 2 + 3 + \\cdots + 10$ 等於多少？',
    ['50', '55', '100', '110'], 'B',
    ['頭尾配對：$1 + 10 = 11$，共 5 對。', '$11 \\times 5 = 55$。'],
    '等差數列和 ＝ (首 ＋ 尾) × 項數 ÷ 2。', '忘了除以 2 選 110。'),
  MG('U08', 11, '敲鐘間隔', '時鐘 3 點敲 3 下用 2 秒，6 點敲 6 下要幾秒？',
    ['4 秒', '6 秒', '3 秒', '5 秒'], 'D',
    ['敲 3 下只有 2 個間隔 → 每間隔 1 秒。', '敲 6 下有 5 個間隔 → 5 秒。'],
    '時間花在「間隔」上，不是在「敲」上。', '以為 3 下 2 秒，6 下就 4 秒。'),
  MG('U08', 12, '容斥原理', '1 到 100 中，是 3 的倍數「或」5 的倍數的數有幾個？',
    ['53 個', '33 個', '47 個', '39 個'], 'C',
    ['3 的倍數 33 個，5 的倍數 20 個。', '同時是 15 的倍數被算了 2 次：6 個。', '$33 + 20 - 6 = 47$。'],
    '容斥：A ＋ B − 重疊（結合第 1 單元最小公倍數）。', '直接 33 ＋ 20 ＝ 53，忘了扣重複。'),
  MG('U08', 13, '排隊位置', '小明排隊，從前面數是第 8 個，從後面數是第 12 個，這一排共幾人？',
    ['20 人', '21 人', '19 人', '18 人'], 'C',
    ['$8 + 12 = 20$，但小明被算了兩次。', '$20 - 1 = 19$。'],
    '前數 ＋ 後數 − 1。', '直接相加得 20。'),
  MG('U08', 14, '數列奇偶', '數列 1、1、2、3、5、8、13、……（每項是前兩項的和），第 100 項是奇數還是偶數？',
    ['奇數', '偶數', '無法判斷', '剛好是 0'], 'A',
    ['只看奇偶：奇、奇、偶、奇、奇、偶……3 個一循環。', '第 3、6、9……項是偶數。', '100 不是 3 的倍數（99 才是）→ 第 100 項是奇數。'],
    '巨大數列不用算值，只追蹤「奇偶週期」。', '想把數列寫到第 100 項。'),
  MG('U08', 15, '握手問題', '6 個人，每兩人握手一次，共握幾次？',
    ['30 次', '15 次', '36 次', '12 次'], 'B',
    ['每人和其他 5 人握 → $6 \\times 5 = 30$。', '每次握手被兩人各算一次 → $30 \\div 2 = 15$。'],
    '兩兩配對 ＝ $n(n - 1) \\div 2$。', '忘了除以 2。'),
  MG('U08', 16, '兩側植樹', '100 公尺長的路，兩側每隔 10 公尺種一棵樹，兩端都種，共幾棵？',
    ['11 棵', '20 棵', '22 棵', '10 棵'], 'C',
    ['一側：$100 \\div 10 + 1 = 11$ 棵。', '兩側：$11 \\times 2 = 22$ 棵。'],
    '先算一側再乘 2。', '忘了「兩側」或忘了 ＋1。'),
  MG('U08', 17, '青蛙爬井', '井深 10 公尺，青蛙白天爬 3 公尺、晚上滑下 2 公尺。第幾天能爬出井口？',
    ['第 10 天', '第 8 天', '第 7 天', '第 9 天'], 'B',
    ['每天淨爬 1 公尺，但最後一天爬到頂就出去了，不會再滑。', '前 7 天結束時在 7 公尺。', '第 8 天白天爬 3 公尺 → 10 公尺，出井！'],
    '最後一步要單獨看：不要用「淨速度」算到底。', '用 $10 \\div 1 = 10$ 天。'),
  MG('U08', 18, '淘汰賽', '64 人參加單淘汰賽（每場淘汰 1 人），要比幾場才能產生冠軍？',
    ['32 場', '64 場', '6 場', '63 場'], 'D',
    ['每場剛好淘汰 1 人。', '最後只剩冠軍 1 人 → 淘汰 63 人 → 63 場。'],
    '換個角度：數「被淘汰的人」，比數「每輪場數」快。', '只算第一輪 32 場，或算成 6 輪。'),
  MG('U08', 19, '抽屜原理', '抽屜裡有紅襪 20 隻、黑襪 20 隻混在一起，摸黑拿，最少拿幾隻能保證有 2 隻同色？',
    ['21 隻', '2 隻', '11 隻', '3 隻'], 'D',
    ['只有 2 種顏色 ＝ 2 個抽屜。', '最倒楣：前 2 隻一紅一黑。', '第 3 隻一定和其中一隻同色。'],
    '最壞情況 ＋ 1：顏色數 ＋ 1。', '以為要拿超過一半 21 隻。'),
  MG('U08', 20, '對折摺痕', '一張紙對折 5 次後攤開，上面共有幾條摺痕？',
    ['5 條', '10 條', '31 條', '32 條'], 'C',
    ['對折 1 次：1 條；2 次：3 條；3 次：7 條……', '對折 $n$ 次分成 $2^n$ 份，摺痕 ＝ 份數 − 1。', '$2^5 - 1 = 32 - 1 = 31$。'],
    '份數翻倍 ＋ 植樹「段 − 1」雙重模型。', '以為折幾次就幾條，或選份數 32。'),
);

/* ==================== 六年級上學期 第一次段考（六校全真題庫） ==================== */
QUESTION_BANK.push(
  {"id": "EX_XISONG_01", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第1題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "西松國小為落實聯合國永續發展目標，邀請環境工程專家到校舉辦「碳中和生活實踐」專題講座。根據環境部發布的全國碳足跡資料庫顯示，國人每改吃 1 公斤的在地當季蔬食，其製程、運輸與廢棄物處理的碳排放量，平均可幫地球減少 2.5 公斤的二氧化碳當量。小召全家在聽完講座後大受感動，決定從日常飲食開始轉型，並使用手機 App 進行減碳日記的追蹤。經過連續一整個星期的嚴格飲食控制與記錄，小召發現他們家因為這個星期的飲食轉型，總共成功幫地球減少了 15 公斤的碳排放量。請問在不考慮其他生活排碳變數的前提下，小召全家這星期總共吃了幾公斤的在地當季蔬食？", "options": ["A. 5", "B. 6", "C. 7.5", "D. 8"], "answerKey": "B", "answer": "B · 6 公斤", "steps": ["每吃 1 公斤蔬食可減少 2.5 公斤碳排放量。", "總共減少了 15 公斤碳排放量，列式為 $15 \\div 2.5$。", "計算：$15 \\div 2.5 = 150 \\div 25 = 6$（公斤）。"], "insight": "直覺速算：$15 \\div 2.5 = 15 \\times \\frac{4}{10} = 6$（除以 2.5 等於乘以 4 除以 10）。", "trap": {"code": "TRAP_DECIMAL_DIV", "text": "小心小數點移位，若忘記擴分補 0 容易算成 0.6 或 60。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p1.png"},
  {"id": "EX_XISONG_02", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第2題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "臺中山區的青年農夫小召返鄉創立「自然農法實驗果園」，今年秋天他首度導入智慧型採收輔助系統，清點後總共採收了 84 個果肉飽滿、單價高昂的蜜蘋果，以及 108 個清甜多汁、適合外銷的拉拉山雪梨。小召計畫將這兩種頂級水果混合分裝成精緻的中秋雙層商務禮盒送往臺北市場。為了維持品牌的尊榮感與視覺美觀，小召要求每一個禮盒內所裝的蜜蘋果數量都必須完全一樣多，且每個禮盒內的雪梨數量也必須完全一樣多，所有採收的水果都要剛好全部分裝完畢，且包裝廠內不能留下任何多餘的水果。請問小召最多可以將這些水果分裝成幾個中秋精緻雙層商務禮盒？", "options": ["A. 6", "B. 12", "C. 14", "D. 24"], "answerKey": "B", "answer": "B · 12 個", "steps": ["禮盒數量必須能同時整除 84 與 108，且要求「最多」分裝成幾個，即求 84 與 108 的最大公因數 $\\gcd(84, 108)$。", "短除法求最大公因數：$84 = 12 \\times 7$，$108 = 12 \\times 9$。", "7 與 9 互質，因此 $\\gcd(84, 108) = 12$。"], "insight": "84 與 108 差為 24，公因數必為 24 的因數。檢驗 24 不行，次大因數 12 可同時整除 84 與 108，直接秒殺 12！", "trap": {"code": "TRAP_MAX_FACTOR", "text": "容易誤選 24 或 6，注意 24 不能整除 84與108。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p1.png"},
  {"id": "EX_XISONG_03", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第3題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "為了響應社區發展協會舉辦的「關懷獨居長者溫馨野餐日」活動，媽媽主動提議在家裡的親子廚房烘焙手工草莓戚風蛋糕。根據日本職人烘焙食譜上的黃金配方，製作一個標準 8 吋的草莓戚風蛋糕，需要精準耗費 $\\frac{3}{4}$ 公斤的進口低筋麵粉。媽媽打開廚房的恆溫防潮麵粉桶，經過電子磅秤仔細秤量後，發現桶內目前還有 $5\\frac{1}{4}$ 公斤的低筋麵粉。如果媽媽打算在不調整單個蛋糕配方比例、且完全不浪費任何麵粉的前提下，將這桶麵粉全部投入烘焙流程中，請問媽媽最後總共可以做出幾個外觀完整的標準 8 吋草莓戚風蛋糕？", "options": ["A. 5", "B. 6", "C. 7", "D. 8"], "answerKey": "C", "answer": "C · 7 個", "steps": ["總麵粉量為 $5\\frac{1}{4}$ 公斤，每個蛋糕需要 $\\frac{3}{4}$ 公斤。", "列式計算蛋糕個數：$5\\frac{1}{4} \\div \\frac{3}{4}$。", "化為假分數運算：$\\frac{21}{4} \\div \\frac{3}{4} = \\frac{21}{4} \\times \\frac{4}{3} = 7$（個）。"], "insight": "同分母分數相除，直接將分子相除：$21 \\div 3 = 7$！", "trap": {"code": "TRAP_FRAC_DIV", "text": "注意帶分數化假分數時 $5\\frac{1}{4} = \\frac{21}{4}$，不要算成 $\\frac{20}{4}$。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p1.png"},
  {"id": "EX_XISONG_04", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第4題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "6 年級的海外教育旅行計畫於寒假前往日本關西地區進行跨文化交流。小澄為了能在當地的神社購買限定御守以及文具，在出發前夕特別和爸爸一同前往臺灣銀行總行臨櫃辦理外幣兌換體驗。當時銀行大廳電子告示牌上正跳動著最新的國際匯率牌價，小澄拿出了自己存很久的 2500 元新臺幣鈔票，在扣除手續費優惠後，剛好換到了 10000 元的日圓紙鈔。如果我們要從總體經濟學的角度來研究當天這兩種貨幣在該交易時刻的價值對稱關係，請問這天新臺幣對日圓的「比值」應該是多少？", "options": ["A. 4", "B. 2.5", "C. 0.4", "D. 0.25"], "answerKey": "D", "answer": "D · 0.25", "steps": ["「新臺幣對日圓的比」寫成比為 $2500 : 10000$。", "求比值即為前項除以後項：$2500 \\div 10000$。", "計算：$\\frac{2500}{10000} = \\frac{1}{4} = 0.25$。"], "insight": "前項為新臺幣(2500)，後項為日圓(10000)，比值 = 前項 ÷ 後項 = 0.25。", "trap": {"code": "TRAP_RATIO_ORDER", "text": "易顛倒前後項算成 $10000 \\div 2500 = 4$。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p1.png"},
  {"id": "EX_XISONG_05", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第5題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "為了迎接一年一度的校慶運動會，西松國小體育處在秋高氣爽的季節舉辦了「6 年級 1.5 公里校園環狀步道長跑測驗」，藉此評量學生的心肺耐力與自我配速策略。班上的體育股長小烱在測驗中表現極為優異，他根據風向與坡度適時調整呼吸，手錶的專業計時器顯示跑完全程 1.5 公里總共花了 9 分鐘。假設小烱在整個長跑測驗過程中，大腿肌耐力與心肺輸出均勻穩定，始終保持著完全相同的運動速度，請問他平均跑 1 公里需要耗費幾分鐘？", "options": ["A. 6", "B. 6.5", "C. 7", "D. 7.5"], "answerKey": "A", "answer": "A · 6 分鐘", "steps": ["題目問的是「平均跑 1 公里需要幾分鐘」，單位為「分鐘/公里」。", "列式：總時間 ÷ 總距離 = $9 \\div 1.5$。", "計算：$9 \\div 1.5 = 90 \\div 15 = 6$（分鐘）。"], "insight": "求每公里時間，就是把分鐘當被除數：$9 \\div 1.5 = 6$。", "trap": {"code": "TRAP_UNIT_CONFUSION", "text": "若拿距離除以時間 $1.5 \\div 9$ 會算出速度（公里/分鐘），審題要看清問的是每公里幾分鐘。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p1.png"},
  {"id": "EX_XISONG_06", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第6題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "6 年 5 班全體同學在導師的指導下，決定在校慶園遊會上開設一家主打減塑與公平貿易的「職人特調飲品」攤位。經過全班在數學課與生活課進行多次的盲測、統計與數據分析，大家一致通過推出最受歡迎的「黃金比例鮮奶茶」。這個令全校驚豔的秘方規定：每一大桶特調鮮奶茶，都必須嚴格調和 3 公升的日月潭阿薩姆紅茶原汁，以及 2 公升的在地小農鮮乳。請問在這份經過全班盲測決議的招牌配方中，鮮乳容量對紅茶容量的比該如何正確表示？", "options": ["A. 3 : 2", "B. 2 : 3", "C. 3 : 5", "D. 2 : 5"], "answerKey": "B", "answer": "B · 2 : 3", "steps": ["題幹要求的是「鮮乳容量對紅茶容量的比」。", "前項為鮮乳容量（2 公升），後項為紅茶容量（3 公升）。", "比表示為 $2 : 3$。"], "insight": "審題抓前項與後項：鮮乳(2)在前，紅茶(3)在後，即 2 : 3。", "trap": {"code": "TRAP_RATIO_TERMS", "text": "容易誤看成紅茶對鮮乳 (3:2) 或鮮乳對總容量 (2:5)。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p1.png"},
  {"id": "EX_XISONG_07", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第7題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "熱心的社會公益志工團從小貨車上搬下了 48 顆知名品牌的大白兔奶糖，以及 60 支各種水果風味的進口棒棒糖，準備平均分給現場的小朋友們。大會規定每個人分到糖果數量必須一樣多。在所有糖果剛好全部分完，且每位小朋友都一定有拿到的條件下，請問現場最多可以有多少個小朋友同時參與分糖果？", "options": ["A. 24", "B. 12", "C. 6", "D. 4"], "answerKey": "B", "answer": "B · 12 個小朋友", "steps": ["小朋友人數必須能同時整除 48 與 60，且要求「最多」，即求 $\\gcd(48, 60)$。", "短除法求最大公因數：$48 = 12 \\times 4$，$60 = 12 \\times 5$。", "4 與 5 互質，故 $\\gcd(48, 60) = 12$。"], "insight": "$60 - 48 = 12$。12 能整除 48 與 60，直接得出 12！", "trap": {"code": "TRAP_COMMON_DIV", "text": "注意 24 不能整除 60。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p1.png"},
  {"id": "EX_XISONG_08", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第8題", "batch": "段考真題", "category": "規律與關係", "level": 2, "difficulty": 2, "question": "國際萬金石馬拉松是一項獲得世界田徑總會認證的黃金標籤賽事。大會為了確保數萬名國內外職業選手與路跑愛好者的生命安全與電解質平衡，在漫長的海岸線賽道上實施了嚴格的醫療與水站規劃：從起點出發後，賽道旁每隔 2.5 公里就會設置一個功能完善的官方中央長跑飲水補給站。一位來自衣索比亞的專業長跑選手在比賽中專注向前奔跑，當他視線前方看見賽道旁的第 5 個補給站時，請問他此時實際上已經從起點跑了幾公里？", "options": ["A. 10", "B. 11.5", "C. 12", "D. 12.5"], "answerKey": "D", "answer": "D · 12.5 公里", "steps": ["題幹敘述：「從起點出發後，賽道旁每隔 2.5 公里設置一個補給站」。", "第 1 個補給站在 2.5 公里處，第 2 個在 5.0 公里處，依此類推。", "第 5 個補給站的位置為 $2.5 \\times 5 = 12.5$（公里）。"], "insight": "起點沒有設站，因此第 1 站到第 5 站共有 5 個間隔：$5 \\times 2.5 = 12.5$ 公里。", "trap": {"code": "TRAP_TREE_INTERVAL", "text": "容易誤以為起點有算第 1 站而算成 $(5-1) \\times 2.5 = 10$ 公里。題幹特別指明「從起點出發後每隔2.5公里設置一個」。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_09", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 一、基本題 第9題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "內政部國家公園署管理處決定在陽明山山區興建一條全新的「碎石與木棧混合型生態步道」，經工程測量這條步道全長總共為 4.2 公里。由於沿途山區地形陡峭且需要避開珍貴的稀有植物棲地，工程隊引進了低衝擊的手工鋪設法，經過實測評估，該工程隊在氣候晴朗的狀況下，平均每天只能鋪設 0.6 公里的步道。假設在整個施工期間完全沒有受到大雨或地震延誤，請問這支工程隊需要連續工作幾天才能把整條生態步道完全鋪設完成？", "options": ["A. 6", "B. 7", "C. 8", "D. 9"], "answerKey": "B", "answer": "B · 7 天", "steps": ["步道全長 4.2 公里，每天鋪設 0.6 公里。", "所需天數 = 全長 ÷ 每天進度 = $4.2 \\div 0.6$。", "計算：$4.2 \\div 0.6 = 42 \\div 6 = 7$（天）。"], "insight": "小數點同移一位：$42 \\div 6 = 7$ 天完成。", "trap": {"code": "TRAP_DIV_SIMPLE", "text": "注意四則乘除小數點位置，不要多算一位。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_10", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 二、進階題 第10題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "西松國小 6 年級童軍團利用週末搭乘大客車前往苗栗南庄的森林營地，進行兩天一夜的野外求生與紮營技巧移地訓練。根據出發前的報名系統清點，本次參加移地訓練的童軍成員中，男生共有 54 人，女生則共有 90 人。總團長為了方便在森林中進行跨班級的技能對抗賽，要求必須將男女生混合編組，且為了確保競賽的公平性，每組裡面的男生人數要完全一樣多，女生人數也必須完全一樣多，且所有來到營地的團員都必須被編入小組中。當總團長將分出的「小組組數」控制在最多時，請問此時每一組裡面總共包含了多少個男女童軍團員？", "options": ["A. 18", "B. 12", "C. 8", "D. 6"], "answerKey": "C", "answer": "C · 8 個團員", "steps": ["求分出最多小組數，即求 54 與 90 的最大公因數 $\\gcd(54, 90)$。", "短除法：$54 = 18 \\times 3$，$90 = 18 \\times 5$。最大公因數為 18 組。", "題目問的是「每一組裡面總共包含多少個團員」！", "每組男生：$54 \\div 18 = 3$ 人；每組女生：$90 \\div 18 = 5$ 人。", "每組總人數 = $3 + 5 = 8$（人）。"], "insight": "關鍵在題目問「每組人數」而不是「組數」！組數是 18，每組人數是 $3 + 5 = 8$ 人。", "trap": {"code": "TRAP_QUESTION_TARGET", "text": "經典陷阱題！大部分學生一算出最大公因數 18 就興奮選 (A) 18，殊不知題目問的是每組人數 8 人！"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_11", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 二、進階題 第11題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "陳老師從美勞準備室拿出一張長 60 公分，寬 45 公分的復古長方形高級厚紙板，要求同學們必須將這張長方形厚紙板，用裁刀完美裁剪成一塊塊大小完全相同，且邊長為「整數公分」的最大正方形，用來製作班級紀念徽章。為了符合不浪費材料的環保精神，裁剪過程必須完美利用紙板，不能有任何多餘的剩料或邊角料。請問同學們在滿足老師「正方形邊長最大化」的要求下，最後總共可以從這張長方形厚紙板上剪出多少個正方形徽章底板？", "options": ["A. 15", "B. 12", "C. 9", "D. 6"], "answerKey": "B", "answer": "B · 12 個", "steps": ["正方形邊長最大化，即求長與寬的最大公因數 $\\gcd(60, 45)$。", "短除法：$\\gcd(60, 45) = 15$ 公分（正方形邊長）。", "長邊可剪個數：$60 \\div 15 = 4$ 個。", "寬邊可剪個數：$45 \\div 15 = 3$ 個。", "正方形徽章底板總個數 = $4 \\times 3 = 12$（個）。"], "insight": "邊長是 15，個數是長邊 4 乘寬邊 3 = 12 個！", "trap": {"code": "TRAP_SIDE_VS_COUNT", "text": "再次注意陷阱：題目問「剪出多少個」，非問邊長 15。誤選 15 就中計了！"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_12", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 二、進階題 第12題", "batch": "段考真題", "category": "兩量關係 / 行程問題", "level": 2, "difficulty": 2, "question": "南投日月潭擁有一條名聞遐邇的環湖自行車暨健行步道，其中一段圍繞著特定生態保育區的封閉型小環狀步道，其全長經 GPS 精準測量剛好為 1200 公尺。清晨時分，氣溫宜人，爸爸與小召同時從這條小環狀步道的某個木棧道起點出發。兩人為了鍛鍊體能，選擇了背向而行，開始慢跑。已知爸爸平日有長跑習慣，他的平均運動速度是每分鐘慢跑 70 公尺；而小召一邊觀察鳥類生態，他的平均運動速度是每分鐘步行 50 公尺。請問在兩人都沒有停下來休息、且配速完全恆定的狀況下，出發後幾分鐘兩人在步道上會第一次迎面相遇？", "options": ["A. 10", "B. 12", "C. 15", "D. 20"], "answerKey": "A", "answer": "A · 10 分鐘", "steps": ["兩人背向而行，每分鐘共同縮短的距離（速度和）= $70 + 50 = 120$（公尺/分）。", "環狀步道全長為 1200 公尺，第一次相遇即兩人路程和等於步道全長。", "相遇時間 = 總路程 ÷ 速度和 = $1200 \\div 120 = 10$（分鐘）。"], "insight": "環狀背向相遇：相遇時間 = 全長 ÷ 速度和 = $1200 \\div (70+50) = 10$ 分鐘！", "trap": {"code": "TRAP_MEET_OPPOSITE", "text": "注意背向而行是速度「相加」，不是同向追及的速度相減。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_13", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 二、進階題 第13題", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "位於市中心鬧區的網美精品咖啡廳最近推出了一款結合視覺美感與極致口感的「職人特調冰拿鐵」，在網路上引發了極大的討論。店長透露，這款咖啡之所以能維持完美的層次與香氣，是因為烘焙後的衣索比亞耶加雪菲咖啡豆重量，與搭配的職人鮮牛奶重量，兩者必須嚴格維持在 15 : 26 的黃金比例。今天早上因為有大型公司預約了下午茶茶會，吧檯咖啡師清點原物料後，一口氣秤量並使用了 180 克的頂級烘焙咖啡豆進行萃取。請問為了嚴格維持這款咖啡引以為傲的黃金比例風味，他需要精準秤量並準備幾克的職人鮮牛奶來搭配？", "options": ["A. 280", "B. 300", "C. 312", "D. 324"], "answerKey": "C", "answer": "C · 312 克", "steps": ["咖啡豆重量 : 鮮牛奶重量 = $15 : 26$。", "實際咖啡豆重量為 180 克，設鮮牛奶重量為 $x$ 克。", "列出等比關係：$15 : 26 = 180 : x$。", "倍數擴分：$180 \\div 15 = 12$ 倍，故 $x = 26 \\times 12 = 312$（克）。"], "insight": "$180 \\div 15 = 12$；$26 \\times 12 = 312$ 克，快速心算！", "trap": {"code": "TRAP_RATIO_SCALE", "text": "算 $26 \\times 12$ 時注意末位 $6 \\times 2 = 12$ 末位為 2，選項中只有 312 末位是 2，可秒殺！"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_14", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 二、進階題 第14題", "batch": "段考真題", "category": "分數除法", "level": 2, "difficulty": 2, "question": "在極限童軍大露營的鋼索吊橋搭建活動中，安全維護是首要任務。工程組長為了固定中央大帳篷的抗風拉繩，從工具庫房拿出一根長度經雷射測距儀測量剛好為 $10\\frac{2}{3}$ 公尺的高強度強化麻繩。根據結構力學與營帳結構安全的需求，這根高強度麻繩必須被精準裁剪成數根長度剛好都是 $1\\frac{1}{3}$ 公尺的固定短繩。請問這根長麻繩在施工人員刀功精確、完全不產生任何鋸齒損耗與剩餘短料的理想狀況下，最後可以被成功裁剪成幾段長度合格的固定短繩？", "options": ["A. 6", "B. 7", "C. 8", "D. 9"], "answerKey": "C", "answer": "C · 8 段", "steps": ["麻繩全長為 $10\\frac{2}{3}$ 公尺，每根短繩長度為 $1\\frac{1}{3}$ 公尺。", "裁剪段數 = 全長 ÷ 短繩長度 = $10\\frac{2}{3} \\div 1\\frac{1}{3}$。", "化為假分數計算：$\\frac{32}{3} \\div \\frac{4}{3} = \\frac{32}{3} \\times \\frac{3}{4} = 8$（段）。"], "insight": "同分母直接分子相除：$32 \\div 4 = 8$ 段！", "trap": {"code": "TRAP_FRAC_REDUCE", "text": "原卷字體排版易將 $1\\frac{1}{3}$ 看成 $\\frac{1}{3}$，若看成 $\\frac{1}{3}$ 會算成 32 段（選項無 32），看清前方帶分數整數 1。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_15", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 二、進階題 第15題", "batch": "段考真題", "category": "小數除法", "level": 2, "difficulty": 2, "question": "在竹科擔任晶片設計工程師的小叡，每天開車通勤於竹北高鐵特區與科學園區之間。根據車載導航數據，他單趟的通勤距離為 28.5 公里。小叡駕駛的油電混合車，在園區路況下平均每消耗 1 公升汽油可跑 12 公里。請問小叡每天開車上下班一個來回，總共需要消耗幾公升的汽油？", "options": ["A. 2.375", "B. 4.75", "C. 5.7", "D. 9.5"], "answerKey": "B", "answer": "B · 4.75 公升", "steps": ["注意題目問的是「上下班一個來回」的總耗油量！", "來回總里程 = $28.5 \\times 2 = 57$（公里）。", "每公升跑 12 公里，總耗油量 = $57 \\div 12$。", "直式除法計算：$57 \\div 12 = 4.75$（公升）。"], "insight": "$57 \\div 12 = \\frac{19}{4} = 4.75$ 公升！", "trap": {"code": "TRAP_ROUND_TRIP", "text": "極易忘記「一個來回」乘 2，若只算單趟 $28.5 \\div 12 = 2.375$ 就會落入選項 (A) 的陷阱！"}, "cropImage": "images/exams/EXAM_MID1/xisong_p2.png"},
  {"id": "EX_XISONG_16", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 三、挑戰題 第16題", "batch": "段考真題", "category": "因數與倍數 / 密碼推理", "level": 3, "difficulty": 3, "question": "小湘參加臺北動漫展的密室逃脫解謎遊戲，最終關卡擺著一個古老的 4 位數密碼鎖。旁邊的泛黃線索紙條上寫著一段複雜的數學謎題：此寶箱的正確解鎖密碼是一個滿足以下所有嚴格條件的 4 位數：\n① 它本身是 12、18 與 15 三個數字的公倍數\n② 將這個 4 位數的千位、百位、十位與個位數字相加的數字和，其結果必須剛好是 18 的因數\n③ 這個 4 位數在除去其百位與個位數字後，所組成的 2 位數仍然是 9 的倍數\n④ 密碼的數值範圍介於 1000 以上（含）到 2000 之間（含）\n請問小湘應該在密碼鎖上輸入哪一個唯一的正確數字，才能順利打開寶箱取得終極大獎？", "options": ["A. 1080", "B. 1440", "C. 1620", "D. 1800"], "answerKey": "A", "answer": "A · 1080", "steps": ["條件①：求 12, 18, 15 的最小公倍數。$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, $15 = 3 \\times 5$，$\\operatorname{lcm}(12, 18, 15) = 2^2 \\times 3^2 \\times 5 = 180$。", "條件④：1000~2000 之間的 180 的倍數有 1080, 1260, 1440, 1620, 1800, 1980。", "條件②：各選項四個位數字和皆為 9（$1+0+8+0=9$、$1+4+4+0=9$ 等），9 是 18 的因數，四者皆符合。", "條件③：「除去百位與個位後組成的 2 位數（即千位與十位組成的數字）仍是 9 的倍數」：", "檢查各選項：A(1080) -> 千位1、十位8，組成 18，是 9 的倍數；B(1440) -> 組成 14，非 9 倍數；C(1620) -> 組成 12，非 9 倍數；D(1800) -> 組成 10，非 9 倍數。", "因此唯一符合所有嚴格條件的密碼為 1080。"], "insight": "關鍵在條件③：看「千位」與「十位」組成的兩位數。只有 1080 的 18 是 9 的倍數，一秒鎖定 (A)！", "trap": {"code": "TRAP_CRYPTO_COND3", "text": "漏看條件③會誤以為 4 個選項都對，必須仔細檢驗千位與十位組成的兩位數。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p3.png"},
  {"id": "EX_XISONG_17", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 三、挑戰題 第17題", "batch": "段考真題", "category": "分數除法 / 基準量與比較量", "level": 4, "difficulty": 4, "question": "臺電在竹北高鐵特區建置了一套智慧微型電網，將微網內的總發電量分配給甲、乙、丙三個不同的科學園區示範基地。已知電網的分配規則與傳輸損耗如下：分配給甲基地的電力，在扣除該線路 $\\frac{1}{6}$ 的傳輸損耗後，實際送達的電力剛好等於總發電量的 $\\frac{1}{4}$；分配給乙基地的電力，除以 $\\frac{2}{3}$ 後的數值，剛好等於總發電量除以 $4\\frac{1}{6}$ 的商。其餘的電力則全額分配給丙基地（丙基地線路無損耗）。若已知丙基地最後實際收到的電力，比乙基地實際收到的電力多了 1900 瓩，請問該微型電網當時的總發電量是多少瓩？", "options": ["A. 18000", "B. 16200", "C. 6840", "D. 5000"], "answerKey": "D", "answer": "D · 5000 瓩", "steps": ["設微型電網總發電量為 $T$ 瓩。", "分析甲基地分配量：扣除 $\\frac{1}{6}$ 損耗後剩下 $1 - \\frac{1}{6} = \\frac{5}{6}$。實際送達為 $\\frac{1}{4} T$，故甲分配電力 = $\\frac{1}{4} T \\div \\frac{5}{6} = \\frac{1}{4} \\times \\frac{6}{5} T = \\frac{3}{10} T$。", "分析乙基地分配量：乙分配量 $\\div \\frac{2}{3} = T \\div 4\\frac{1}{6}$。因 $4\\frac{1}{6} = \\frac{25}{6}$，右式 $= T \\div \\frac{25}{6} = \\frac{6}{25} T$。故乙分配電力 = $\\frac{6}{25} T \\times \\frac{2}{3} = \\frac{4}{25} T$。", "分析丙基地分配量：丙收到電力 = 總發電量 - 甲分配 - 乙分配 = $T - \\frac{3}{10} T - \\frac{4}{25} T$。通分分母 50：$T \\times (1 - \\frac{15}{50} - \\frac{8}{50}) = \\frac{27}{50} T$。", "丙比乙多 1900 瓩：$\\frac{27}{50} T - \\frac{4}{25} T = \\frac{27}{50} T - \\frac{8}{50} T = \\frac{19}{50} T = 1900$ 瓩。", "求解總發電量 $T = 1900 \\div \\frac{19}{50} = 1900 \\times \\frac{50}{19} = 5000$（瓩）。"], "insight": "通分基準量：甲佔 15/50，乙佔 8/50，丙佔 27/50。丙減乙為 19/50 恰對應 1900 瓩，1/50 就是 100，總量 50 份即為 5000 瓩！", "trap": {"code": "TRAP_FRAC_COMPLEX", "text": "甲基地有傳輸損耗，求分配量要反推除以 (1 - 1/6)；乙基地則是由除法商還原。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p3.png"},
  {"id": "EX_XISONG_18", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 三、挑戰題 第18題", "batch": "段考真題", "category": "規律與關係 / 幾何圖形規律", "level": 4, "difficulty": 4, "question": "科學園區新建了一座零碳排綠建築，樓頂準備鋪設高效能正六邊形太陽能發電板。為了極大化發電效率，施工團隊採用「蜂巢式緊鄰擴建法」：\n階段①：鋪設 1 片正六邊形面板，需要 6 支不銹鋼固定支架\n階段②：在原面板周圍緊鄰拼接，擴展成共用邊的結構。若拼成 2 片緊鄰面板需要 11 支支架；拼成 3 片成折線狀則需要 15 支支架。\n為了使整體發電陣列結構最穩固、外圍周長最短，團隊決定以「同心六邊形環狀」向外對稱擴張。意即：核心 1 片，第 1 環圍繞 6 片，第 2 環再向外圍繞 12 片，依此類推。當施工團隊將太陽能面板完美擴建到「第 3 環結束」，即包含核心、第 1 環、第 2 環、第 3 環完整填滿，不留任何內部空缺時，這套發電陣列總共需要使用幾支不銹鋼固定支架？", "options": ["A. 123", "B. 127", "C. 132", "D. 137"], "answerKey": "C", "answer": "C · 132 支", "steps": ["正六邊形面板拼接，每條支架即為六邊形蜂巢網格的一條邊（Edge）。", "計算總面板數（面數 $F$）：核心 1 片，第 1 環 6 片，第 2 環 12 片，第 3 環 18 片。總片數 $F = 1 + 6 + 12 + 18 = 37$ 片。", "整體構成一個每邊有 4 個六邊形的大正六邊形蜂巢結構（半徑 $R = 3$）。", "外圍邊界周長：最外層第 3 環有 18 片六邊形，其外圍暴露的邊數為 $6 \\times (2 \\times 3 + 1) = $ 總外邊界 $E_{\\text{外}} = 6 \\times (2 \\times 3) = 36$ 或頂點公式。", "嚴謹圖論邊數計算：37 個六邊形總共有 90 條內部共用邊。每個正六邊形有 6 條邊，總邊數 $E = 6F - \\text{共用邊數} = 6 \\times 37 - 90 = 222 - 90 = 132$ 支。", "故總共需要 132 支固定支架。"], "insight": "蜂巢半徑 $n=3$ 的總邊數公式為 $E(n) = 9n^2 + 15n + 6$（當 $n=0$ 為 6；$n=1$ 為 30；$n=2$ 為 72；$n=3$ 為 $9 \\times 9 + 15 \\times 3 + 6 = 81 + 45 + 6 = 132$ 支）！秒殺！", "trap": {"code": "TRAP_HEX_GRID", "text": "注意多個環狀閉合拼接時，內部邊會被多個相鄰六邊形共用，不可只按一維線性 $1 + 5n$ 計算。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p3.png"},
  {"id": "EX_XISONG_19", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 三、挑戰題 第19題", "batch": "段考真題", "category": "比例尺與放大 / 體積與長度", "level": 3, "difficulty": 3, "question": "達人小卡改依固定比例 1 : 100 打造另一座全新地標大樓的模型。模型頂樓有一座圓柱體電子公告欄，其體積為 31.4 立方公寸，高度為 10 公寸（圓周率 $\\pi$ 以 3.14 計算）。在文創發表會上主辦單位透露：真實大樓的實際總高度，剛好是這面公告欄在真實世界中「實際直徑」平方的 1.5 倍，再加上公告欄在真實世界中「實際高度」的 2 倍。請問這座真實地標大樓的實際總高度是多少公尺？", "options": ["A. 26", "B. 80", "C. 260", "D. 800"], "answerKey": "D", "answer": "D · 800 公尺", "steps": ["先求模型公告欄的直徑：圓柱體積 = 底面積 $\\times$ 高 $\\Rightarrow 31.4 = \\text{底面積} \\times 10 \\Rightarrow \\text{底面積} = 3.14$ 平方公寸。", "底面積 $= \\pi \\times r^2 = 3.14 \\times r^2 = 3.14 \\Rightarrow r^2 = 1 \\Rightarrow r = 1$ 公寸，模型直徑 $d = 2$ 公寸。", "模型高度為 10 公寸。", "依比例尺 1 : 100 放大至真實世界尺寸（1 公寸 = 0.1 公尺）：", "真實世界公告欄實際直徑 $= 2 \\text{ 公寸} \\times 100 = 200 \\text{ 公寸} = 20$ 公尺。", "真實世界公告欄實際高度 $= 10 \\text{ 公寸} \\times 100 = 1000 \\text{ 公寸} = 100$ 公尺。", "計算大樓實際總高度：實際直徑平方的 1.5 倍 + 實際高度的 2 倍 $= 20^2 \\times 1.5 + 100 \\times 2 = 400 \\times 1.5 + 200 = 600 + 200 = 800$（公尺）。"], "insight": "直徑 = 20 公尺，高 = 100 公尺。$20^2 \\times 1.5 + 100 \\times 2 = 600 + 200 = 800$ 公尺！", "trap": {"code": "TRAP_UNIT_DECIMETER", "text": "注意單位轉換！公寸(dm)轉公尺(m)：200 公寸 = 20 公尺，1000 公寸 = 100 公尺。若直接以公寸計算會數值混亂。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p3.png"},
  {"id": "EX_XISONG_20", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 三、挑戰題 第20題", "batch": "段考真題", "category": "比與比值 / 溶液混合", "level": 4, "difficulty": 4, "question": "第 20～21 題為題組，請先閱讀內容再回答：\n晶圓廠的蝕刻製程中，需要使用由化學藥劑甲、化學藥劑乙與超純水調配而成的特製蝕刻液。目前實驗室有兩桶現成的半成品：\n第 1 桶溶液：藥劑甲與藥劑乙的重量比為 2 : 3，且不含任何超純水\n第 2 桶溶液：藥劑乙與超純水的重量比為 1 : 4，且不含任何藥劑甲\n製程工程師需要調配出黃金比例的「最終蝕刻液」，其成分要求為：（藥劑甲重量）:（藥劑乙重量）:（超純水重量）= 4 : 7 : 8。\n20. 工程師應該將「第 1 桶溶液」與「第 2 桶溶液」以什麼樣的重量比進行混合，才能使混合液中的藥劑甲與藥劑乙達到此黃金比例？", "options": ["A. 1 : 1", "B. 1 : 3", "C. 2 : 1", "D. 3 : 2"], "answerKey": "C", "answer": "C · 2 : 1", "steps": ["目標：混合後藥劑甲 : 藥劑乙 = 4 : 7。", "第 1 桶中，甲佔重量的 $\\frac{2}{5}$，乙佔 $\\frac{3}{5}$；第 2 桶中，乙佔重量的 $\\frac{1}{5}$（其餘為超純水）。", "設取第 1 桶重量為 $x$，第 2 桶重量為 $y$。", "混合後甲總重 $= \\frac{2}{5}x$；乙總重 $= \\frac{3}{5}x + \\frac{1}{5}y$。", "要求甲與乙之比為 $4 : 7$：$\\frac{\\frac{2}{5}x}{\\frac{3}{5}x + \\frac{1}{5}y} = \\frac{4}{7} \\Rightarrow \\frac{2x}{3x+y} = \\frac{4}{7}$。", "交叉相乘：$14x = 4(3x + y) = 12x + 4y \\Rightarrow 2x = 4y \\Rightarrow x : y = 2 : 1$。", "故第 1 桶與第 2 桶應以 2 : 1 的重量比混合。"], "insight": "甲只存在於第 1 桶！甲要佔 4 份，第 1 桶需出 4 份甲，此時自帶乙 6 份。目標乙要 7 份，故第 2 桶只需補 1 份乙。第 1 桶總重 10 份，第 2 桶乙佔 1/5 故總重 5 份，比例為 10 : 5 = 2 : 1！", "trap": {"code": "TRAP_MIXTURE_RATIO", "text": "注意第 2 桶乙與純水是 1:4，所以乙佔第 2 桶的 1/5 而非 1/4。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p3.png"},
  {"id": "EX_XISONG_21", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 三、挑戰題 第21題", "batch": "段考真題", "category": "比與比值 / 溶液稀釋", "level": 3, "difficulty": 3, "question": "承上題，若工程師在依 2 : 1 混合第 1、2 桶溶液後，此時混合液中藥劑甲與藥劑乙的比例已經正確達到 4 : 7。若目前混合液總重為 600 公克，請問他需要再額外倒入幾公克的「超純水」，才能完成這批符合黃金比例（甲:乙:水 = 4:7:8）的最終蝕刻液？", "options": ["A. 120", "B. 160", "C. 200", "D. 320"], "answerKey": "B", "answer": "B · 160 公克", "steps": ["目前混合液 600 公克，由第 1 桶與第 2 桶依 2 : 1 混合而成。", "第 1 桶重量 $= 600 \\times \\frac{2}{3} = 400$ 克；第 2 桶重量 $= 600 \\times \\frac{1}{3} = 200$ 克。", "成分計算：藥劑甲 $= 400 \\times \\frac{2}{5} = 160$ 克；藥劑乙 $= 400 \\times \\frac{3}{5} + 200 \\times \\frac{1}{5} = 240 + 40 = 280$ 克。", "現有超純水重量 $= 200 \\times \\frac{4}{5} = 160$ 克。", "黃金比例要求 甲 : 乙 : 水 = 4 : 7 : 8。因為甲有 160 克（佔 4 份，每份 40 克），故水總共需要 $8 \\times 40 = 320$ 克。", "需要額外倒入的超純水 $= 320 - 160 = 160$（公克）。"], "insight": "現有水是 160 克，目標需要 320 克水，因此只需再加 $320 - 160 = 160$ 克！", "trap": {"code": "TRAP_ADDITIONAL_WATER", "text": "注意問的是「額外倒入」幾公克，不可直接回答總需水量 320 克。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p3.png"},
  {"id": "EX_XISONG_22", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 貳、非選題 一.應用題 第1題", "batch": "段考真題", "category": "兩量關係 / 比例反推", "level": 4, "difficulty": 4, "question": "小湘家裡突然停電，而她只能靠手機維持亮光。在手機電量還有 100% 的時候，小湘決定開啟手電筒並觀看影片，耗電速度為純待機狀態的 22.5 倍，持續了 40 分鐘，隨後因為手機發燙，她選擇只觀看影片。但當手機電量剩下 10% 時，小湘決定節省電力，只保留手電筒，耗電速度為純待機狀態的 13.5 倍。此時她觀察到：電量從 10% 降到 5% 剛好需要 20 分鐘。最後，當電量剩下 5% 時，小湘關閉所有功能，使手機進入純待機狀態直到完全沒電。\n(1) 只觀看影片的總耗電速度為純待機狀態的幾倍？\n(2) 如果不充電，這支手機從 100% 開始使用總共最多能用多久？", "answer": "(1) 9 倍；(2) 770 分鐘（12 小時 50 分鐘）", "steps": ["(1) 由題意知：(手電筒+影片)耗電速度 = 22.5 倍待機；(只開手電筒)耗電速度 = 13.5 倍待機。因此，只看影片耗電速度 = $22.5 - 13.5 = 9$ 倍待機速度。", "(2) 先由手電筒消耗量求待機基準速度：手電筒耗電速度為 13.5 倍，20 分鐘消耗 $10\\% - 5\\% = 5\\%$ 電量。故待機速度 $v = \\frac{5\\%}{13.5 \\times 20} = \\frac{5\\%}{270} = \\frac{1\\%}{54}$（每 54 分鐘待機消耗 1% 電量）。", "前 40 分鐘(手電筒+影片)消耗電量 = $22.5 \\times \\frac{1\\%}{54} \\times 40 = \\frac{50}{3}\\% = 16\\frac{2}{3}\\%$。", "只看影片階段消耗電量 = $100\\% - 16\\frac{2}{3}\\% - 10\\% = 73\\frac{1}{3}\\% = \\frac{220}{3}\\%$。只看影片耗電速度為 9 倍待機 = $9 \\times \\frac{1\\%}{54} = \\frac{1\\%}{6}$。所花時間 = $\\frac{220}{3}\\% \\div \\frac{1\\%}{6} = 440$ 分鐘。", "手電筒階段花費 20 分鐘；最後 5% 純待機所花時間 = $5 \\times 54 = 270$ 分鐘。", "總共使用時間 = $40 + 440 + 20 + 270 = 770$ 分鐘（即 12 小時 50 分鐘）。"], "insight": "速度疊加原理：手電筒+影片 = 22.5，手電筒 = 13.5，相減立得影片 = 9 倍！再利用基準量換算出各階段時間相加。", "trap": {"code": "TRAP_MULTI_STAGE", "text": "四個不同耗電階段需分段計算消耗電量與時間，注意不要混淆不同模式的放電速率。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p4.png"},
  {"id": "EX_XISONG_23", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 貳、非選題 一.應用題 第2題", "batch": "段考真題", "category": "比與比值 / 百分率應用", "level": 3, "difficulty": 3, "question": "某半導體廠同時生產甲、乙兩種型號的晶片，當天這兩種晶片的產量比為 5 : 4。在封裝測試時，品檢系統偵測出甲晶片的不良率為 8%，其餘皆為優良品；乙晶片的不良率則為 15%，其餘亦皆為優良品。\n(1) 當天全廠生產的優良品總數與不良品總數的最簡整數比是多少？\n(2) 若已知當天甲晶片的優良品數量比乙晶片的優良品數量多了 240 片，則當天全廠生產的乙晶片總共有幾片？", "answer": "(1) 8 : 1；(2) 800 片", "steps": ["(1) 設甲晶片產量為 $500k$，乙晶片產量為 $400k$。", "甲優良品 $= 500k \\times (1 - 8\\%) = 460k$，甲不良品 $= 500k \\times 8\\% = 40k$。", "乙優良品 $= 400k \\times (1 - 15\\%) = 340k$，乙不良品 $= 400k \\times 15\\% = 60k$。", "優良品總數 $= 460k + 340k = 800k$；不良品總數 $= 40k + 60k = 100k$。", "最簡整數比 $= 800k : 100k = 8 : 1$。", "(2) 甲優良品比乙優良品多 240 片：$460k - 340k = 120k = 240 \\Rightarrow k = 2$。", "乙晶片總產量 $= 400k = 400 \\times 2 = 800$（片）。"], "insight": "設份數為 500 與 400 避開小數：優良品總計 800，不良品 100，比例即 8 : 1！差值 120 對應 240 片，倍數為 2，乙產量即 800 片。", "trap": {"code": "TRAP_PERCENT_RATIO", "text": "注意不良率與優良率的互補性（優良率 = 1 - 不良率）。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p4.png"},
  {"id": "EX_XISONG_24", "unitId": "EXAM_MID1", "school": "臺北市立西松國小", "source": "西松國小 114上 第一次段考 貳、非選題 二.計算題 第3題", "batch": "段考真題", "category": "比與比值 / 連比應用", "level": 3, "difficulty": 3, "question": "已知甲的 1.25 倍 = 乙的 2.5 倍 = 丙的 1.5 倍，若已知甲、乙、丙三個數的總和是 280。\n(1) 求甲、乙、丙三個數的最簡整數比？\n(2) 丙數的數值是多少？", "answer": "(1) 6 : 3 : 5；(2) 100", "steps": ["(1) 將小數倍數化為分數：甲 $\\times \\frac{5}{4} = $ 乙 $\\times \\frac{5}{2} = $ 丙 $\\times \\frac{3}{2} = K$。", "反求各數：甲 $= \\frac{4}{5} K = \\frac{12}{15} K$，乙 $= \\frac{2}{5} K = \\frac{6}{15} K$，丙 $= \\frac{2}{3} K = \\frac{10}{15} K$。", "甲 : 乙 : 丙 $= \\frac{12}{15} : \\frac{6}{15} : \\frac{10}{15} = 12 : 6 : 10 = 6 : 3 : 5$。", "(2) 三數總和為 280，總份數 $= 6 + 3 + 5 = 14$ 份。", "每份數值 $= 280 \\div 14 = 20$。", "丙數佔 5 份：丙 $= 20 \\times 5 = 100$。"], "insight": "倒數求比：比等於倍數倒數比 $\\frac{1}{1.25} : \\frac{1}{2.5} : \\frac{1}{1.5} = 0.8 : 0.4 : \\frac{2}{3} = \\frac{4}{5} : \\frac{2}{5} : \\frac{2}{3} = 12 : 6 : 10 = 6 : 3 : 5$！", "trap": {"code": "TRAP_INVERSE_RATIO", "text": "千萬不能直接把係數拿來當比（不可寫成 1.25 : 2.5 : 1.5），因為乘積相等時數值與倍數成反比。"}, "cropImage": "images/exams/EXAM_MID1/xisong_p4.png"},
  {"id": "EX_TAOZIJIAO_01", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第1題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "阿婌將 1～15 的質數相乘，因為漏乘了 1 個數，得到的積是 10010，他漏乘了多少？", "options": ["A. 2", "B. 3", "C. 7", "D. 13"], "answerKey": "B", "answer": "B · 3", "steps": ["1～15 的質數有：2、3、5、7、11、13 共 6 個質數。", "將 10010 做質因數分解：$10010 = 10 \\times 1001 = 2 \\times 5 \\times 7 \\times 11 \\times 13$。", "比對完整的質數清單，發現獨缺質數 3，因此漏乘的數為 3。"], "insight": "$1001 = 7 \\times 11 \\times 13$ 是常見質因數速算特徵；$10010$ 各數字和為 $1+0+0+1+0=2$（非3的倍數），立刻知道漏乘 3！", "trap": {"code": "TRAP_PRIME_LIST", "text": "小心不要把 1 當成質數，1～15 的質數從 2 開始。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_02", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第2題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "桃子腳外圍一圈為 920 公尺，舉辦桃跑節，需設立補水站，每個補水站需要一桌二椅，補水站間距為 230 公尺，共需幾張椅子？", "options": ["A. 4 張", "B. 6 張", "C. 8 張", "D. 10 張"], "answerKey": "C", "answer": "C · 8 張", "steps": ["外圍一圈為封閉圓周路線，間距數等於站數。", "補水站數量：$920 \\div 230 = 4$（處）。", "每個補水站需要 2 張椅子，總共需要：$4 \\times 2 = 8$（張）。"], "insight": "封閉路線植樹問題「棵數＝間隔數」，算完 4 個站後切記題目問的是椅子張數（一桌二椅），需乘以 2！", "trap": {"code": "TRAP_TREE_CLOSED", "text": "小心封閉路線不需要加 1，也不要誤答成補水站數量 4。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_03", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第3題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "三鶯大橋原長 811 公尺，經改建後全長 596.7 公尺，新橋是舊橋的幾倍？（取概數至小數第一位）", "options": ["A. 0.6 倍", "B. 0.7 倍", "C. 0.8 倍", "D. 1.4 倍"], "answerKey": "B", "answer": "B · 0.7 倍", "steps": ["求新橋是舊橋的幾倍，以舊橋為基準量：$596.7 \\div 811$。", "計算直式小數除法：$596.7 \\div 811 \\approx 0.7357...$", "取概數到小數第一位，觀察小數第二位數字 3，四捨五入得 $0.7$（倍）。"], "insight": "判斷基準量：「A 是 B 的幾倍」一律算 $A \\div B$。新比舊短，答案必小於 1。", "trap": {"code": "TRAP_ROUNDING", "text": "注意四捨五入到小數第一位要看第二位數字 3 捨去，勿誤除成 811 ÷ 596.7。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_04_1", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第4題①", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "寫出正確的答案：$9 : 7 = (\\quad) : 1$", "options": ["A. $\\frac{7}{9}$", "B. $\\frac{9}{7}$", "C. $1\\frac{1}{7}$", "D. 2"], "answerKey": "B", "answer": "B · $\\frac{9}{7}$ (或 $1\\frac{2}{7}$)", "steps": ["根據相等的比，後項由 7 變為 1，除以 7。", "前項也必須除以 7：$9 \\div 7 = \\frac{9}{7} = 1\\frac{2}{7}$。", "因此括號中填入 $\\frac{9}{7}$。"], "insight": "比值等於前項除以後項：$9:7$ 的比值就是 $\\frac{9}{7}$，後項為 1 時前項即等於比值！", "trap": {"code": "TRAP_RATIO_INV", "text": "注意不要把前項與後項顛倒寫成 7/9。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_04_2", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第4題②", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "寫出正確的答案：$4 : 13 = 20 : (\\quad)$", "options": ["A. 52", "B. 60", "C. 65", "D. 70"], "answerKey": "C", "answer": "C · 65", "steps": ["觀察前項變化：$20 \\div 4 = 5$，前項擴大了 5 倍。", "後項也要乘以 5：$13 \\times 5 = 65$。", "因此等式為 $4:13 = 20:65$。"], "insight": "利用比的等價性質：前項與後項同乘以相同非零數，比值不變。", "trap": {"code": "TRAP_CALC", "text": "注意 13 × 5 = 65，不要誤乘為 52 或 60。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_05", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第5題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "將色紙依下圖規則排列，第 10 個圖（ ）色的紙片會比較多。", "options": ["A. 黑", "B. 白", "C. 一樣多", "D. 無法判斷"], "answerKey": "A", "answer": "A · 黑", "steps": ["觀察階梯圖形斜對角線排列規則：", "第 1 斜層（左下角）為 1 個黑色；第 2 斜層為 2 個白色；第 3 斜層為 3 個黑色；第 4 斜層為 4 個白色...以此類推。", "奇數斜層為黑色，偶數斜層為白色。", "圖 1 有 2 個斜層（黑1, 白2）；圖 2 有 3 個斜層（黑1+3=4, 白2）；圖 3 有 4 個斜層（黑1+3=4, 白2+4=6）。", "圖 10 共有 11 個斜層，奇數層（黑）有第 1, 3, 5, 7, 9, 11 層，黑紙片數 $= 1+3+5+7+9+11 = 36$。", "偶數層（白）有第 2, 4, 6, 8, 10 層，白紙片數 $= 2+4+6+8+10 = 30$。", "因為 $36 > 30$，所以黑色紙片比較多。"], "insight": "斜對角層數：圖 n 共有 n+1 層。圖 10 有 11 層，最後一層是第 11 層（奇數層＝黑色），黑色多了整整 11-5=6 片，黑多！", "trap": {"code": "TRAP_PATTERN", "text": "容易誤以為「圖一是白多、圖二是黑多、圖三是白多，所以偶數圖黑多？等等，圖10對應第11層是黑」，務必用層數嚴格計算奇偶和。"}, "cropImage": "images/exams/EXAM_MID1/crop_taozijiao_q5.png"},
  {"id": "EX_TAOZIJIAO_06_1", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第6題①", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "嘜未燈早餐店菜單中，主食有 5 種、配菜有 8 種、飲料有 5 種。安安點餐時，要在主食、配菜、飲料中各選 1 種，共有幾種選擇？", "options": ["A. 18 種", "B. 40 種", "C. 100 種", "D. 200 種"], "answerKey": "D", "answer": "D · 200 種", "steps": ["菜單種類：主食 5 種、配菜 8 種、飲料 5 種。", "根據乘法原理（搭配問題）：總選擇數 $= 5 \\times 8 \\times 5$。", "計算：$5 \\times 8 \\times 5 = 40 \\times 5 = 200$（種）。"], "insight": "乘法原理典型題：多步驟獨立選擇，全部選項個數相乘。", "trap": {"code": "TRAP_COMBINATION_ADD", "text": "切勿將選項相加（5+8+5=18），搭配問題必須用乘法。"}, "cropImage": "images/exams/EXAM_MID1/crop_taozijiao_q6.png"},
  {"id": "EX_TAOZIJIAO_06_2", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第6題②", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "承上題菜單，光光是個純植維根(Vegan)飲食者，想要搭配個全套特餐（含主食、配菜、飲料各1種並升級套餐），舒適的享受一頓升級後的早午餐。點餐時，光光有幾種選擇的組合？", "options": ["A. 6 種", "B. 9 種", "C. 12 種", "D. 18 種"], "answerKey": "B", "answer": "B · 9 種", "steps": ["檢視菜單上標有 VEGAN（純植維根）標誌的品項：", "主食（VEGAN）：漢堡、丹麥堡、可頌麵包，共 3 種。", "配菜（VEGAN）：鮮蔬，共 1 種。", "飲料（VEGAN）：豆漿、米漿、果汁，共 3 種。", "升級套餐（VEGAN）：C 套餐（薯餅2片+茶凍），共 1 種。", "光光選擇升級特餐的組合數：$3 \\times 1 \\times 3 \\times 1 = 9$（種）。"], "insight": "仔細看圖表中標註綠色 VEGAN 葉子圖案的品項，升級選項中只有 C 套餐標有 VEGAN！", "trap": {"code": "TRAP_VEGAN_FILTER", "text": "注意題目要求「全套特餐（升級套餐）」，升級套餐中的 A 與 B 不是 Vegan。"}, "cropImage": "images/exams/EXAM_MID1/crop_taozijiao_q6.png"},
  {"id": "EX_TAOZIJIAO_07_1", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第7題(種數)", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "用 2、4、6、8、0 五張數字卡，選其中 3 張排成大於 8 的二位小數，數字不能重複。請問共有幾種排列法？", "options": ["A. 6 種", "B. 12 種", "C. 18 種", "D. 24 種"], "answerKey": "B", "answer": "B · 12 種", "steps": ["二位小數形式為「個位 . 十分位 百分位」，數字不重複。", "要大於 8，且卡片最大數字為 8，故個位數只能選 8。", "剩下 4 張卡片（0、2、4、6）選 2 張依序填入十分位與百分位。", "排列數：十分位有 4 種選擇，百分位剩 3 種選擇，共 $4 \\times 3 = 12$（種）。", "因為小數部分不全為 0，排出的 12 個數皆大於 8。"], "insight": "個位定為 8 後，小數兩位即為 $P(4, 2) = 4 \\times 3 = 12$ 種！", "trap": {"code": "TRAP_PERMUTATION", "text": "注意二位小數是指小數點後有兩位數（如 8.xx），個位不能為兩位數。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_07_2", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第7題(最值)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題（用 2、4、6、8、0 排成大於 8 的二位小數），排列出來最大的小數與最小的小數分別是多少？", "options": ["A. 最大 8.64，最小 8.02", "B. 最大 8.62，最小 8.20", "C. 最大 8.46，最小 8.04", "D. 最大 8.64，最小 8.20"], "answerKey": "A", "answer": "A · 最大 8.64，最小 8.02", "steps": ["個位數必須固定為 8。", "要使小數最大：從剩餘數字 {0, 2, 4, 6} 中挑選最大放十分位(6)、次大放百分位(4)，得最大小數為 $8.64$。", "要使小數最小：挑選最小放十分位(0)、次小放百分位(2)，得最小小數為 $8.02$。"], "insight": "比大小看高位：十分位越大數越大，十分位越小數越小。", "trap": {"code": "TRAP_ZERO_PLACE", "text": "小數部分十分位可以為 0（8.02 > 8 合法），勿誤以為最小是 8.20。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_08", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第8題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "有四家超商促銷同一罐飲料：歇們 56元2罐、發米 104元4罐、嗨來福 162元6罐、喔開 75元3罐。請問哪一家超商賣得最便宜？哪一家賣得最貴？", "options": ["A. 喔開最便宜，歇們最貴", "B. 發米最便宜，嗨來福最貴", "C. 歇們最便宜，喔開最貴", "D. 喔開最便宜，發米最貴"], "answerKey": "A", "answer": "A · 喔開最便宜，歇們最貴", "steps": ["計算各超商每罐飲料的單價（價格 ÷ 數量）：", "歇們：$56 \\div 2 = 28$（元/罐）。", "發米：$104 \\div 4 = 26$（元/罐）。", "嗨來福：$162 \\div 6 = 27$（元/罐）。", "喔開：$75 \\div 3 = 25$（元/罐）。", "比大小：$25 < 26 < 27 < 28$，故喔開賣得最便宜（25元），歇們賣得最貴（28元）。"], "insight": "化為單價（基準量為1罐），比較數值大小即可迅速破題。", "trap": {"code": "TRAP_UNIT_PRICE", "text": "注意不要直接比總價 56 與 162，必須除以罐數算單價。"}, "cropImage": "images/exams/EXAM_MID1/crop_taozijiao_q8.png"},
  {"id": "EX_TAOZIJIAO_09", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第9題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "在臺灣，常以「甲」來描述農地大小。1 甲大約是 9700 平方公尺，桃子腳校地面積是 52000 平方公尺，大約是幾甲？（用四捨五入法取概數到小數第一位）", "options": ["A. 5.3 甲", "B. 5.4 甲", "C. 5.5 甲", "D. 53.6 甲"], "answerKey": "B", "answer": "B · 5.4 甲", "steps": ["列式計算甲數：$52000 \\div 9700 = 520 \\div 97$。", "直式除法：$520 \\div 97 \\approx 5.3608...$", "取概數到小數第一位，看小數第二位數字 6，四捨五入進位得 $5.4$（甲）。"], "insight": "化簡：先同除以 100 變成 $520 \\div 97$，商約 5.36，四捨五入為 5.4。", "trap": {"code": "TRAP_ROUNDING", "text": "小數第二位是 6 大於等於 5，記得進位成 5.4。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_10", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第10題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "桶連客運每車有 24 個座位，座位排列如下圖（左側雙人座為 2,3 與 5,6，靠窗為 2, 5；右側單人座為 1 與 4）。阿禎想買一張票，坐「雙人座靠窗戶」，且坐在「車子的前半部」。可以選擇的座位有哪些？", "options": ["A. 2、5、8、11", "B. 1、4、7、10", "C. 3、6、9、12", "D. 2、3、5、6"], "answerKey": "A", "answer": "A · 2、5、8、11", "steps": ["整車 24 個座位，每排 3 個位子（左側雙人座2個、右側單人座1個），全車共有 $24 \\div 3 = 8$ 排。", "車子的「前半部」為第 1 排到第 4 排（座位號碼 1～12 號）。", "觀察圖中「雙人座靠窗戶」的位置規律：第 1 排為 2 號、第 2 排為 5 號、第 3 排為 $5+3=8$ 號、第 4 排為 $8+3=11$ 號。", "因此前半部雙人座靠窗的座位為：2、5、8、11。"], "insight": "每排跨度為 3，雙人座靠窗是公差為 3 的等差數列：$2, 5, 8, 11, 14, 17, 20, 23$。前半部取前 4 個即為 2, 5, 8, 11。", "trap": {"code": "TRAP_SEAT_RULE", "text": "注意 3 與 6 是靠走道；1 與 4 是單人座靠窗，題目指定「雙人座靠窗」。"}, "cropImage": "images/exams/EXAM_MID1/crop_taozijiao_q10.png"},
  {"id": "EX_TAOZIJIAO_11", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 一、填充題 第11題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "請從下列分數中，選出「不是」以最簡分數形態呈現的分數：$\\frac{9999}{10000}$、$\\frac{51}{85}$、$\\frac{57}{95}$、$\\frac{230}{470}$。", "options": ["A. 只有 $\\frac{230}{470}$", "B. $\\frac{51}{85}$、$\\frac{57}{95}$、$\\frac{230}{470}$", "C. $\\frac{9999}{10000}$、$\\frac{230}{470}$", "D. 全部都是最簡分數"], "answerKey": "B", "answer": "B · $\\frac{51}{85}$、$\\frac{57}{95}$、$\\frac{230}{470}$", "steps": ["檢驗 $\\frac{9999}{10000}$：$10000 = 2^4 \\times 5^4$，質因數只有 2 與 5；9999 為奇數且個位不是 5，故 $\\gcd(9999, 10000) = 1$，是最簡分數。", "檢驗 $\\frac{51}{85}$：$51 = 3 \\times 17$，$85 = 5 \\times 17$，公因數有 17，可約分為 $\\frac{3}{5}$，不是最簡分數。", "檢驗 $\\frac{57}{95}$：$57 = 3 \\times 19$，$95 = 5 \\times 19$，公因數有 19，可約分為 $\\frac{3}{5}$，不是最簡分數。", "檢驗 $\\frac{230}{470}$：分子分母皆有公因數 10，可約分為 $\\frac{23}{47}$，不是最簡分數。", "因此「不是最簡分數」的為：$\\frac{51}{85}$、$\\frac{57}{95}$、$\\frac{230}{470}$。"], "insight": "17 與 19 是小學最常考的隱蔽質數盲區！$51 = 3 \\times 17, 85 = 5 \\times 17$；$57 = 3 \\times 19, 95 = 5 \\times 19$。", "trap": {"code": "TRAP_PRIME_FACTOR", "text": "學生容易看不出 51/85 與 57/95 能被 17 與 19 約分，而只圈出 230/470。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_B1", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 二、比比看 第1題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "比比看，在括號中填入正確符號：$4\\frac{2}{3} \\div 1$ （ ） $4\\frac{2}{3} \\times 1$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "C", "answer": "C · =", "steps": ["任何數除以 1 都等於其本身：$4\\frac{2}{3} \\div 1 = 4\\frac{2}{3}$。", "任何數乘以 1 也都等於其本身：$4\\frac{2}{3} \\times 1 = 4\\frac{2}{3}$。", "兩者相等，括號填入「$=$」。"], "insight": "1 是乘除法的單位元素，乘 1 或除以 1 數值完全不變。", "trap": {"code": "TRAP_DIV_MUL_1", "text": "不要直覺看到除號就以為比乘號小。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_B2", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 二、比比看 第2題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "比比看，在括號中填入正確符號：$\\frac{7}{8} \\div \\frac{7}{8}$ （ ） $\\frac{7}{8} \\div \\frac{3}{5}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["被除數皆為 $\\frac{7}{8}$。", "左式除數為 $\\frac{7}{8} = 1$（被除數除以本身等於 1）。", "右式除數為 $\\frac{3}{5} < 1$，除以小於 1 的正數，商會大於被除數：$\\frac{7}{8} \\div \\frac{3}{5} = \\frac{7}{8} \\times \\frac{5}{3} = \\frac{35}{24} > 1$。", "因此左式（1）小於右式（$1\\frac{11}{24}$），括號填入「$<$」。"], "insight": "被除數相同時，除數越小商越大！$\\frac{3}{5} < \\frac{7}{8}$，所以除以 $\\frac{3}{5}$ 的結果比較大。", "trap": {"code": "TRAP_DIV_SIZE", "text": "除法中「除數越小，商反而越大」，勿與乘法混淆。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_B3", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 二、比比看 第3題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "比比看，在括號中填入正確符號：$0.125 \\times \\frac{1}{2}$ （ ） $\\frac{1}{8} \\div 2$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "C", "answer": "C · =", "steps": ["將小數轉換為分數：$0.125 = \\frac{1}{8}$。", "左式：$\\frac{1}{8} \\times \\frac{1}{2} = \\frac{1}{16}$。", "右式：除以 2 等於乘以 $\\frac{1}{2}$，即 $\\frac{1}{8} \\div 2 = \\frac{1}{8} \\times \\frac{1}{2} = \\frac{1}{16}$。", "兩者相等，括號填入「$=$」。"], "insight": "黃金分數小數互換記憶：$0.125 = \\frac{1}{8}$，且「$\\div 2$」完全等同於「$\\times \\frac{1}{2}$」。", "trap": {"code": "TRAP_DECIMAL_FRAC", "text": "注意 0.125 是 1/8 不是 1/4。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_B4", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 二、比比看 第4題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "比比看，在括號中填入正確符號：$0.43 \\times 3$ （ ） $3 \\div 0.43$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["估算左式：$0.43 \\times 3 = 1.29$。", "估算右式：3 除以小於 1 的數（0.43），商會大於 3（$3 \\div 0.43 \\approx 6.98$）。", "因為 $1.29 < 6.98$，括號填入「$<$」。"], "insight": "速算定性比較：3 乘以小於 1 的數結果 $<3$；3 除以小於 1 的數結果 $>3$，故左式必小於右式！", "trap": {"code": "TRAP_NUMBER_SENSE", "text": "運用數感定性比較即可秒殺，不需辛苦算出 3 ÷ 0.43 的確切小數值。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_B5", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 二、比比看 第5題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "比比看，在括號中填入正確符號：$0.5 \\div \\frac{1}{2}$ （ ） $\\frac{1}{2} \\times 0.5$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "A", "answer": "A · >", "steps": ["因為 $0.5 = \\frac{1}{2}$。", "左式：$\\frac{1}{2} \\div \\frac{1}{2} = 1$。", "右式：$\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 0.25$。", "因為 $1 > 0.25$，括號填入「$>$」。"], "insight": "除以 $\\frac{1}{2}$ 等於乘以 2（數值變大為 1）；乘以 0.5 等於折半（數值縮小為 0.25）。", "trap": {"code": "TRAP_DIV_VS_MUL", "text": "分清楚除以 1/2 與乘以 1/2 的根本差異。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p1.png"},
  {"id": "EX_TAOZIJIAO_C1", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 三、計算題 第1題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "完成 154 的質因數分解樹狀圖，並寫出質因數分解式：$154 = (\\quad)$", "options": ["A. $154 = 2 \\times 77$", "B. $154 = 2 \\times 7 \\times 11$", "C. $154 = 14 \\times 11$", "D. $154 = 2 \\times 3 \\times 23$"], "answerKey": "B", "answer": "B · $154 = 2 \\times 7 \\times 11$", "steps": ["154 是偶數，先提出質因數 2：$154 = 2 \\times 77$。", "將 77 繼續分解：$77 = 7 \\times 11$（7 與 11 皆為質數）。", "故質因數分解結果為：$154 = 2 \\times 7 \\times 11$。"], "insight": "質因數分解式中的乘數必須全部都是質數，不可留下 77 或 14 這類合數。", "trap": {"code": "TRAP_PRIME_FACTOR", "text": "注意 77 還能分解成 7 × 11，不要停在 2 × 77。"}, "cropImage": "images/exams/EXAM_MID1/crop_taozijiao_c1.png"},
  {"id": "EX_TAOZIJIAO_C2", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 三、計算題 第2題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "用短除法求 108、72 的最小公倍數：", "options": ["A. 36", "B. 72", "C. 216", "D. 432"], "answerKey": "C", "answer": "C · 216", "steps": ["用短除法分解 108 與 72：", "同除以 2 得 54、36；同除以 2 得 27、18；同除以 9 得 3、2。", "商數 3 與 2 互質，短除法停止。", "最小公倍數等於左側除數與底端商的連乘積：$2 \\times 2 \\times 9 \\times 3 \\times 2 = 36 \\times 6 = 216$。"], "insight": "速算：最大公因數 $\\gcd(108, 72) = 36$。最小公倍數 $= 36 \\times (108/36) \\times (72/36) = 36 \\times 3 \\times 2 = 216$。", "trap": {"code": "TRAP_LCM_GCD", "text": "注意 36 是最大公因數，題目問的是最小公倍數，底下的商 3 與 2 也要乘進去。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p2.png"},
  {"id": "EX_TAOZIJIAO_C3", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 三、計算題 第3題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "計算：$5\\frac{1}{15} \\div 3\\frac{4}{5} = (\\quad)$", "options": ["A. $1\\frac{1}{3}$", "B. $1\\frac{1}{4}$", "C. $\\frac{3}{4}$", "D. $2\\frac{1}{3}$"], "answerKey": "A", "answer": "A · $1\\frac{1}{3}$ (或 $\\frac{4}{3}$)", "steps": ["先化為假分數：$5\\frac{1}{15} = \\frac{76}{15}$，$3\\frac{4}{5} = \\frac{19}{5}$。", "除法轉乘倒數：$\\frac{76}{15} \\div \\frac{19}{5} = \\frac{76}{15} \\times \\frac{5}{19}$。", "約分：76 與 19 約分得 4；5 與 15 約分得 3。", "計算結果：$\\frac{4 \\times 1}{3 \\times 1} = \\frac{4}{3} = 1\\frac{1}{3}$。"], "insight": "神奇數字 19：$19 \\times 4 = 76$，76 與 19 直接約成 4！", "trap": {"code": "TRAP_IMPROPER_FRAC", "text": "帶分數相除必須先化成假分數，絕對不可整數除以整數、分數除以分數。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p2.png"},
  {"id": "EX_TAOZIJIAO_C4", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 三、計算題 第4題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "觀察圓圈規律：圖一有 1 個、圖二有 3 個、圖三有 6 個、圖四有 10 個...依此規律，圖十會有幾個圓圈？", "options": ["A. 45 個", "B. 50 個", "C. 55 個", "D. 66 個"], "answerKey": "C", "answer": "C · 55 個", "steps": ["圖一：1", "圖二：$1 + 2 = 3$", "圖三：$1 + 2 + 3 = 6$", "圖四：$1 + 2 + 3 + 4 = 10$", "發現第 n 個圖的圓圈數為從 1 加到 n 的三角形數：", "圖十圓圈數 $= 1 + 2 + 3 + ... + 10 = \\frac{(1 + 10) \\times 10}{2} = 55$（個）。"], "insight": "高斯梯形公式：首項加末項乘以項數除以 2，$(1+10) \\times 10 \\div 2 = 55$。", "trap": {"code": "TRAP_TRIANGULAR_SUM", "text": "不要誤算成圖九的 45 個或圖十一的 66 個。"}, "cropImage": "images/exams/EXAM_MID1/crop_taozijiao_c4.png"},
  {"id": "EX_TAOZIJIAO_C5", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 三、計算題 第5題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "寫出下列比的最簡整數比：$1\\frac{3}{16} : \\frac{5}{8}$", "options": ["A. 19 : 10", "B. 19 : 5", "C. 3 : 5", "D. 38 : 20"], "answerKey": "A", "answer": "A · 19 : 10", "steps": ["先將帶分數化為假分數：$1\\frac{3}{16} = \\frac{19}{16}$。", "原比化為：$\\frac{19}{16} : \\frac{5}{8}$。", "前項與後項同乘以分母的最小公倍數 16：", "前項：$\\frac{19}{16} \\times 16 = 19$", "後項：$\\frac{5}{8} \\times 16 = 10$", "得最簡整數比為 $19 : 10$。"], "insight": "同乘公分母 16，分母直接消去，最簡且快速。", "trap": {"code": "TRAP_RATIO_SIMPLIFY", "text": "後項乘以 16 是 10，不要漏乘變成 5。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p2.png"},
  {"id": "EX_TAOZIJIAO_C6", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 三、計算題 第6題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "寫成直式算算看（用四捨五入法將商取概數到小數點後第一位）：$4.82 \\div 1.52 \\approx (\\quad)$", "options": ["A. 3.1", "B. 3.2", "C. 3.17", "D. 3.3"], "answerKey": "B", "answer": "B · 3.2", "steps": ["除數與被除數的小數點同時向右移動兩位：$4.82 \\div 1.52 = 482 \\div 152$。", "直式計算：", "$482 \\div 152 = 3.171...$", "題目要求「四捨五入法取概數到小數點後第一位」，觀察小數第二位數字 7，向第一位進位。", "得概數約為 $3.2$。"], "insight": "要取到小數第一位，直式必須除到小數第二位（看到 7）才能判定四捨五入！", "trap": {"code": "TRAP_ROUNDING_POS", "text": "注意看小數第二位 7 >= 5 必須進位，不能直接寫 3.1。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p2.png"},
  {"id": "EX_TAOZIJIAO_A1", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 四、應用題 第1題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "沿著桃子腳國小校園跑一圈的距離大約是 0.92 公里，桃跑節鈞鈞沿著校園跑了 2 公里，大約是跑了幾圈？（四捨五入將商取概數到小數點後第二位）", "options": ["A. 2.17 圈", "B. 2.18 圈", "C. 2.16 圈", "D. 1.84 圈"], "answerKey": "A", "answer": "A · 大約 2.17 圈", "steps": ["以跑一圈的長度 0.92 公里為基準量，求 2 公里包含幾圈：$2 \\div 0.92$。", "除數與被除數同乘以 100：$200 \\div 92$。", "直式計算商到小數第三位：$200 \\div 92 \\approx 2.1739...$", "題目要求「四捨五入取概數到小數點後第二位」，看第三位數字 3，捨去。", "得大約跑了 $2.17$（圈）。"], "insight": "取概數到小數點後第二位，必須算到小數第三位（3），由於 $3 < 5$ 直接捨去得 2.17。", "trap": {"code": "TRAP_ROUNDING_3RD", "text": "注意算到第三位為 3 捨去，不要誤進位成 2.18。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_p2.png"},
  {"id": "EX_TAOZIJIAO_A2", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 四、應用題 第2題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "桃藝節六年信班製作每瓶 $1\\frac{3}{4}$ 公升的清潔劑可賣 200 元，49 公升的清潔劑可以賣多少元？", "options": ["A. 4800 元", "B. 5200 元", "C. 5600 元", "D. 6000 元"], "answerKey": "C", "answer": "C · 5600 元", "steps": ["先求出 49 公升可以裝成幾瓶：$49 \\div 1\\frac{3}{4}$。", "計算瓶數：$49 \\div \\frac{7}{4} = 49 \\times \\frac{4}{7} = 28$（瓶）。", "每瓶賣 200 元，總共可以賣：$28 \\times 200 = 5600$（元）。"], "insight": "先除求瓶數（$49 \\times \\frac{4}{7} = 28$ 瓶），再乘以單價 200 元。", "trap": {"code": "TRAP_MULTISTEP", "text": "注意不要把 49 直接乘 200，必須先算裝成幾瓶。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_app2.png"},
  {"id": "EX_TAOZIJIAO_A3_1", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 四、應用題 第3題①", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "雙十國慶來臨，三鶯二橋全長 1400 公尺，其中的一邊每隔 50 公尺插上一支國旗。若橋的「起點和終點都要插旗」，共要幾支國旗？", "options": ["A. 27 支", "B. 28 支", "C. 29 支", "D. 30 支"], "answerKey": "C", "answer": "C · 29 支", "steps": ["先計算間隔數：$1400 \\div 50 = 28$（個間隔）。", "直線路線「兩端都插旗」規律：國旗數 $=$ 間隔數 $+ 1$。", "計算：$28 + 1 = 29$（支）。"], "insight": "植樹問題三大典型：兩端都插 $=$ 間隔 $+ 1$；兩端都不插 $=$ 間隔 $- 1$；一端插一端不插 $=$ 間隔數。", "trap": {"code": "TRAP_TREE_BOTH", "text": "注意兩端都插要加 1，不要只回答間隔數 28。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_app2.png"},
  {"id": "EX_TAOZIJIAO_A3_2", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 四、應用題 第3題②", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題（三鶯二橋全長 1400 公尺，每隔 50 公尺插旗），若橋的「起點和終點都不插旗」，共要幾支國旗？", "options": ["A. 27 支", "B. 28 支", "C. 29 支", "D. 30 支"], "answerKey": "A", "answer": "A · 27 支", "steps": ["先計算間隔數：$1400 \\div 50 = 28$（個間隔）。", "直線路線「兩端都不插旗」規律：國旗數 $=$ 間隔數 $- 1$。", "計算：$28 - 1 = 27$（支）。"], "insight": "兩端都不插，相當於在兩端有插的基礎上扣除頭尾 2 支：$29 - 2 = 27$ 支。", "trap": {"code": "TRAP_TREE_NEITHER", "text": "注意兩端都不插要減 1，為 28 - 1 = 27 支。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_app2.png"},
  {"id": "EX_TAOZIJIAO_A4", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 四、應用題 第4題", "batch": "段考真題", "category": "分數除法", "level": 2, "difficulty": 2, "question": "教師節來臨，六年義班用一捆 15 公尺長的緞帶來包給老師的禮物，每 $1\\frac{1}{3}$ 公尺剪成一段，1 段緞帶可以包一個禮物，最多可以包幾個禮物？還剩下幾公尺的緞帶？", "options": ["A. 11 個禮物，剩下 $\\frac{1}{3}$ 公尺", "B. 11 個禮物，剩下 $\\frac{1}{4}$ 公尺", "C. 10 個禮物，剩下 1 公尺", "D. 11 個禮物，剩下 1 公尺"], "answerKey": "A", "answer": "A · 最多包 11 個禮物，剩下 $\\frac{1}{3}$ 公尺", "steps": ["列式計算段數：$15 \\div 1\\frac{1}{3} = 15 \\div \\frac{4}{3} = 15 \\times \\frac{3}{4} = \\frac{45}{4} = 11\\frac{1}{4}$（段）。", "整數部分表示可以剪成 11 段完整緞帶，即最多可包 11 個禮物。", "分數餘數 $\\frac{1}{4}$ 表示「$\\frac{1}{4}$ 段」，求實際剩下的長度必須乘以每段的長度：", "剩下長度：$\\frac{1}{4} \\times 1\\frac{1}{3} = \\frac{1}{4} \\times \\frac{4}{3} = \\frac{1}{3}$（公尺）。", "驗算：$11 \\times \\frac{4}{3} + \\frac{1}{3} = \\frac{44}{3} + \\frac{1}{3} = \\frac{45}{3} = 15$ 公尺，完全正確。"], "insight": "段考最高頻易錯題陷阱：除出來的餘數 $\\frac{1}{4}$ 是「段」不是「公尺」，求剩下公尺數務必回乘每段長度 $\\frac{4}{3}$！", "trap": {"code": "TRAP_FRAC_REMAINDER", "text": "超高頻陷阱！千萬不能把餘數 1/4 段直接當成剩下 1/4 公尺。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_calc_p2.png"},
  {"id": "EX_TAOZIJIAO_A5", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 四、應用題 第5題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "六年和班學生用長 30 公分、寬 18 公分的長方形卡片，拼成一張正方形的教師節海報，請問拼成最小的正方形海報，邊長是幾公分？共需要幾張長方形卡片？", "options": ["A. 邊長 90 公分，需要 15 張", "B. 邊長 90 公分，需要 8 張", "C. 邊長 60 公分，需要 10 張", "D. 邊長 180 公分，需要 30 張"], "answerKey": "A", "answer": "A · 邊長 90 公分，共需要 15 張", "steps": ["拼成正方形，邊長必須同時是 30 與 18 的倍數，最小正方形邊長即求最小公倍數 $\\text{lcm}(30, 18)$。", "短除法求最小公倍數：$30 = 6 \\times 5$，$18 = 6 \\times 3$，故 $\\text{lcm}(30, 18) = 6 \\times 5 \\times 3 = 90$（公分）。", "計算長與寬各需要幾張：", "長邊需排：$90 \\div 30 = 3$（張）", "寬邊需排：$90 \\div 18 = 5$（張）", "總共需要卡片張數：$3 \\times 5 = 15$（張）。"], "insight": "由小拼大求倍數（LCM）；長度張數與寬度張數相乘即為總張數。", "trap": {"code": "TRAP_ADD_OR_MUL", "text": "總張數是 3 × 5 = 15，不要誤加成 3 + 5 = 8 張。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_app_p2.png"},
  {"id": "EX_TAOZIJIAO_A6", "unitId": "EXAM_MID1", "school": "桃子腳國民中小學", "source": "桃子腳 114上 第一次段考 四、應用題 第6題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "六年平班想要將一個長 225 公分、寬 125 公分的長方形紙板，切割成大小一樣的正方形紙板(邊長是整數公分)，用來製作桃藝節販賣的商品，請問正方形紙板的邊長最長是幾公分？可以切割成多少張？", "options": ["A. 邊長最長 25 公分，可以切割成 45 張", "B. 邊長最長 5 公分，可以切割成 1125 張", "C. 邊長最長 25 公分，可以切割成 14 張", "D. 邊長最長 15 公分，可以切割成 75 張"], "answerKey": "A", "answer": "A · 邊長最長 25 公分，可切割成 45 張", "steps": ["由大分割為小，正方形邊長必須能整除 225 與 125，邊長「最長」即求最大公因數 $\\gcd(225, 125)$。", "短除法求最大公因數：$225 = 25 \\times 9$，$125 = 25 \\times 5$，9 與 5 互質，故 $\\gcd(225, 125) = 25$（公分）。", "計算長與寬各切成幾段：", "長切成：$225 \\div 25 = 9$（排）", "寬切成：$125 \\div 25 = 5$（排）", "共可切成正方形張數：$9 \\times 5 = 45$（張）。"], "insight": "由大裁小求因數（GCD）。邊長求得 25 後，張數即為兩邊商的乘積 $9 \\times 5 = 45$。", "trap": {"code": "TRAP_ADD_OR_MUL", "text": "切割張數是 9 × 5 = 45，切勿誤算成 9 + 5 = 14。"}, "cropImage": "images/exams/EXAM_MID1/taozijiao_app_p2.png"},
  {"id": "EX_SHIHU_01", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第1題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "下面哪一組數互質？", "options": ["A. 51 和 68", "B. 16 和 85", "C. 33 和 121", "D. 13 和 39"], "answerKey": "B", "answer": "B · 16 和 85", "steps": ["互質的定義為：兩數的最大公因數為 1。", "檢驗 A：$51 = 17 \\times 3$，$68 = 17 \\times 4$，公因數有 17，不互質。", "檢驗 B：$16 = 2^4$（質因數只有 2），$85 = 5 \\times 17$（質因數為 5、17），$\\gcd(16, 85) = 1$，互質。", "檢驗 C：$33 = 11 \\times 3$，$121 = 11 \\times 11$，公因數有 11，不互質。", "檢驗 D：$13 \\times 3 = 39$，公因數有 13，不互質。"], "insight": "16 是 2 的次方數（只有偶數因數），85 是奇數且個位為 5，兩者絕無共同因數，必互質！", "trap": {"code": "TRAP_COPRIME_17", "text": "注意 51 與 68 是 17 的倍數，容易漏看出 17。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_02", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第2題", "batch": "段考真題", "category": "分數除法", "level": 2, "difficulty": 2, "question": "下面各式中，商比 $5\\frac{4}{7}$ 小的有幾個？\n甲：$5\\frac{4}{7} \\div \\frac{2}{3}$\n乙：$5\\frac{4}{7} \\div 2$\n丙：$5\\frac{4}{7} \\div \\frac{3}{3}$\n丁：$5\\frac{4}{7} \\div \\frac{6}{5}$\n戊：$5\\frac{4}{7} \\div 3\\frac{1}{2}$\n己：$5\\frac{4}{7} \\times \\frac{4}{9}$", "options": ["A. 2 個", "B. 3 個", "C. 4 個", "D. 5 個"], "answerKey": "B", "answer": "B · 3 個", "steps": ["被除數固定為 $5\\frac{4}{7}$。除法運算中，若除數大於 1，則商比被除數小：", "甲：除數 $\\frac{2}{3} < 1$，商比 $5\\frac{4}{7}$ 大。", "乙：除數 $2 > 1$，商比 $5\\frac{4}{7}$ 小。（符合條件）", "丙：除數 $\\frac{3}{3} = 1$，商等於 $5\\frac{4}{7}$。", "丁：除數 $\\frac{6}{5} > 1$，商比 $5\\frac{4}{7}$ 小。（符合條件）", "戊：除數 $3\\frac{1}{2} > 1$，商比 $5\\frac{4}{7}$ 小。（符合條件）", "己：運算符號為「$\\times$」（乘法），其計算結果稱為「積」而非「商」（干擾項）。", "符合「商比 $5\\frac{4}{7}$ 小」的除法式子共有乙、丁、戊 3 個。"], "insight": "關鍵字陷阱「商」！商專指除法的計算結果，式子「己」是乘法算出的「積」，故不計入！除法中除數 $>1$ 者有乙、丁、戊 3 個。", "trap": {"code": "TRAP_QUOTIENT_TERM", "text": "小心己是乘法不是除法，乘法算出來的是「積」不是「商」。"}, "cropImage": "images/exams/EXAM_MID1/shihu_q2_crop.png"},
  {"id": "EX_SHIHU_03", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第3題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "下面哪一個比和 $3:4$ 不是相等的比？", "options": ["A. 9 : 12", "B. 0.6 : 0.8", "C. $\\frac{1}{3} : 0.4$", "D. $\\frac{1}{4}$ : $\\frac{1}{3}$"], "answerKey": "C", "answer": "C · $\\frac{1}{3} : 0.4$", "steps": ["目標比為 $3:4$，比值為 $\\frac{3}{4} = 0.75$。", "檢驗 A：$9 : 12 = (9\\div 3) : (12\\div 3) = 3 : 4$（相等）。", "檢驗 B：$0.6 : 0.8 = 6 : 8 = 3 : 4$（相等）。", "檢驗 C：$\\frac{1}{3} : 0.4 = \\frac{1}{3} : \\frac{2}{5} = \\frac{1}{3} \\times 15 : \\frac{2}{5} \\times 15 = 5 : 6 \\neq 3 : 4$（不相等）。", "檢驗 D：$\\frac{1}{4} : \\frac{1}{3} = \\frac{1}{4} \\times 12 : \\frac{1}{3} \\times 12 = 3 : 4$（相等）。"], "insight": "分數比的化簡：$\\frac{1}{4} : \\frac{1}{3}$ 交叉相乘直接等於 $3:4$；而 C 是 $5:6$。", "trap": {"code": "TRAP_RATIO_CALC", "text": "注意 1/3 : 0.4 = 5:6，小心通分乘錯。"}, "cropImage": "images/exams/EXAM_MID1/shihu_q3_crop.png"},
  {"id": "EX_SHIHU_04", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第4題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "將撲克牌按照「♥ ♠ ♦ ♣ ♥ ♠ ♦ ♣ ……」的規律排成一列，請問第 50 張撲克牌是什麼圖案？", "options": ["A. ♠ (黑桃)", "B. ♥ (紅心)", "C. ♦ (方塊)", "D. ♣ (梅花)"], "answerKey": "A", "answer": "A · ♠ (黑桃)", "steps": ["花色規律為：♥(1)、♠(2)、♦(3)、♣(4)，每 4 張一個完整週期循環。", "計算週期：$50 \\div 4 = 12$ 週期 $\\dots 2$ 張。", "餘數為 2，對應週期中的第 2 個圖案，即「♠」（黑桃）。"], "insight": "看除以 4 的餘數：餘 1 為 ♥、餘 2 為 ♠、餘 3 為 ♦、整除為 ♣。50 除以 4 餘 2 即為 ♠！", "trap": {"code": "TRAP_CYCLE_REMAINDER", "text": "注意 50 除以 4 是商 12 餘 2，不要誤看商數 12。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_05", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第5題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "將小於 10 的所有質數相加後，得到的數字是多少？", "options": ["A. 17", "B. 18", "C. 26", "D. 27"], "answerKey": "A", "answer": "A · 17", "steps": ["小於 10 的質數有：2、3、5、7（注意 1 不是質數，9 是合數）。", "相加：$2 + 3 + 5 + 7 = 17$。"], "insight": "基本質數定義牢記：小於 10 的質數恰有 4 個（2, 3, 5, 7）。", "trap": {"code": "TRAP_ONE_IS_NOT_PRIME", "text": "注意 1 不是質數，9 = 3×3 不是質數。若加了 1 會誤選 18。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_06", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第6題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "大會舞隊形為每邊 6 人的空心正六邊形，共需要幾人？", "options": ["A. 28 人", "B. 30 人", "C. 34 人", "D. 36 人"], "answerKey": "B", "answer": "B · 30 人", "steps": ["正六邊形有 6 條邊和 6 個頂點。", "因為每個頂點的人同時屬於相鄰的兩條邊（被重複計算），計算方式為：", "方法一：每邊扣除 1 個頂點，$6 \\times (6 - 1) = 6 \\times 5 = 30$（人）。", "方法二：總邊長人數扣除 6 個重複頂點，$6 \\times 6 - 6 = 36 - 6 = 30$（人）。"], "insight": "封閉多邊形周界人數公式：邊數 $\\times$ (每邊人數 $- 1$) $= 6 \\times 5 = 30$ 人。", "trap": {"code": "TRAP_POLYGON_CORNER", "text": "切勿直接 6 × 6 = 36，頂點角落下的人會被多算一次。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_07", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第7題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "$\\frac{3}{25}$ 是 $\\frac{6}{5}$ 的幾倍？", "options": ["A. 2 倍", "B. 10 倍", "C. $\\frac{1}{2}$ 倍", "D. $\\frac{1}{10}$ 倍"], "answerKey": "D", "answer": "D · $\\frac{1}{10}$ 倍", "steps": ["求「A 是 B 的幾倍」，列式為 $A \\div B$。", "$\\frac{3}{25} \\div \\frac{6}{5} = \\frac{3}{25} \\times \\frac{5}{6}$。", "約分：3 與 6 約成 1 與 2；5 與 25 約成 1 與 5。", "計算：$\\frac{1 \\times 1}{5 \\times 2} = \\frac{1}{10}$（倍）。"], "insight": "比較量 $\\div$ 基準量。被除數小於除數，倍數必然小於 1，秒選 $\\frac{1}{10}$。", "trap": {"code": "TRAP_DIV_ORDER", "text": "注意不要把除數和被除數倒置算成 6/5 ÷ 3/25 = 10。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_08", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第8題", "batch": "段考真題", "category": "分數除法", "level": 2, "difficulty": 2, "question": "甲 $\\div \\frac{2}{3} = A$，甲 $\\div \\frac{1}{3} = B$。請問 $A \\div B = ?$（甲數不為 0）", "options": ["A. $\\frac{1}{3}$", "B. $\\frac{1}{2}$", "C. 2", "D. 3"], "answerKey": "B", "answer": "B · $\\frac{1}{2}$", "steps": ["將 A 與 B 用含有甲的代數式表示：", "$A = \\text{甲} \\div \\frac{2}{3} = \\text{甲} \\times \\frac{3}{2} = \\frac{3}{2}\\text{甲}$。", "$B = \\text{甲} \\div \\frac{1}{3} = \\text{甲} \\times 3 = 3\\text{甲}$。", "計算 $A \\div B$：$(\\frac{3}{2}\\text{甲}) \\div (3\\text{甲}) = \\frac{3}{2} \\div 3 = \\frac{3}{2} \\times \\frac{1}{3} = \\frac{1}{2}$。"], "insight": "令甲 $= 1$，則 $A = 1 \\div \\frac{2}{3} = \\frac{3}{2}$，$B = 1 \\div \\frac{1}{3} = 3$。$A \\div B = \\frac{3}{2} \\div 3 = \\frac{1}{2}$，快速破題！", "trap": {"code": "TRAP_SPECIAL_VALUE", "text": "注意 A 和 B 除數的關係，除數 2/3 是 1/3 的 2 倍，故商 A 反而是 B 的一半。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_09", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第9題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "甲數 $= 3 \\times 3 \\times 7$，乙數 $= 2 \\times 3 \\times 7$。下列哪個答案「不是」甲數和乙數的公因數？", "options": ["A. 1", "B. 7", "C. $3 \\times 7$", "D. $2 \\times 3 \\times 3 \\times 7$"], "answerKey": "D", "answer": "D · $2 \\times 3 \\times 3 \\times 7$", "steps": ["找出甲數與乙數的最大公因數：$\\gcd(\\text{甲}, \\text{乙}) = 3 \\times 7 = 21$。", "公因數必須是最大公因數的因數，其質因數只能取兩者共同具備且次數不超過公因數者：質因數只能有 3 和 7（各至多一次）。", "選項 D 中含有質因數 2（甲數沒有），且質因數 3 出現兩次（乙數只有一次）。", "事實上 $2 \\times 3 \\times 3 \\times 7$ 是甲與乙的「最小公倍數」，絕對不是公因數。"], "insight": "公因數 $\\le$ 兩數中較小者；選項 D 數值為 126，比甲(63)與乙(42)都大，絕不可能是公因數！", "trap": {"code": "TRAP_GCD_LCM_DEF", "text": "注意公倍數與公因數的差別，因數不能大於原數。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_10", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 一、選擇題 第10題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "在一個長 250 公尺、寬 150 公尺長方形廣場的周界，每隔 50 公尺設置一盞路燈，共有幾盞路燈？", "options": ["A. 15 盞", "B. 16 盞", "C. 17 盞", "D. 18 盞"], "answerKey": "B", "answer": "B · 16 盞", "steps": ["長方形周長 $= (250 + 150) \\times 2 = 400 \\times 2 = 800$（公尺）。", "封閉路線植樹問題規律：路燈數量 $=$ 總長度 $\\div$ 間隔距離。", "路燈數量 $= 800 \\div 50 = 16$（盞）。"], "insight": "封閉迴路首尾相接，棵數等於間隔數，不加 1 也不減 1。", "trap": {"code": "TRAP_CLOSED_PERIMETER", "text": "注意長方形周界是封閉圖形，算完 800 ÷ 50 = 16 後切勿隨意 +1 或 -1。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F01", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第1題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "將五邊形黑點如圖的方式向外擴展排列，圖(一)有 5 個黑點、圖(二)有 12 個黑點、圖(三)有 22 個黑點...請問圖(八)會有幾個黑點？", "options": ["A. 92 個", "B. 110 個", "C. 117 個", "D. 145 個"], "answerKey": "C", "answer": "C · 117 個", "steps": ["此圖形為經典五角數擴展規律，觀察各圖黑點總數與增加量：", "圖(一)：5", "圖(二)：$5 + 7 = 12$（增加 7）", "圖(三)：$12 + 10 = 22$（增加 10）", "增加量依序為：$7, 10, 13, 16, 19, 22, 25$（每次增加量公差為 3）。", "圖(四)：$22 + 13 = 35$", "圖(五)：$35 + 16 = 51$", "圖(六)：$51 + 19 = 70$", "圖(七)：$70 + 22 = 92$", "圖(八)：$92 + 25 = 117$（個）。", "亦可由五角數通式檢驗：圖 n 邊長為 $n+1$，$P(9) = \\frac{3 \\times 9^2 - 9}{2} = \\frac{243 - 9}{2} = 117$。"], "insight": "差階等差數列：每次增加量為 $3k+1$（7, 10, 13, 16, 19, 22, 25），逐步累加至第 8 圖得 117。", "trap": {"code": "TRAP_PENTAGON_NUMBER", "text": "注意增加量不是固定的，第二層差才是常數 3。"}, "cropImage": "images/exams/EXAM_MID1/crop_shihu_fill1.png"},
  {"id": "EX_SHIHU_F02", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第2題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "寫出 126 的所有質因數。", "options": ["A. 2、3、7", "B. 2、7、9", "C. 1、2、3、7", "D. 2、3、6、7"], "answerKey": "A", "answer": "A · 2、3、7", "steps": ["先將 126 進行質因數分解：$126 = 2 \\times 63 = 2 \\times 3 \\times 3 \\times 7 = 2 \\times 3^2 \\times 7$。", "126 的質因數必須同時是「因數」且是「質數」。", "因此質因數為：2、3、7。"], "insight": "質因數分解式中相異的質數底數即為全部質因數，重複出現的 3 只列一次。", "trap": {"code": "TRAP_COMPOSITE_FACTOR", "text": "注意 1 不是質數，6、9、14、21 是合數，不能算作質因數。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F03_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第3題(1)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "把 $\\frac{45}{60}$ 約分成最簡分數：", "options": ["A. $\\frac{3}{4}$", "B. $\\frac{9}{12}$", "C. $\\frac{15}{20}$", "D. $\\frac{4}{5}$"], "answerKey": "A", "answer": "A · $\\frac{3}{4}$", "steps": ["找出 45 與 60 的最大公因數：$\\gcd(45, 60) = 15$。", "分子分母同除以 15：$\\frac{45 \\div 15}{60 \\div 15} = \\frac{3}{4}$。"], "insight": "45 和 60 都是 15 的倍數，直接同除 15 得 3/4。", "trap": {"code": "TRAP_REDUCE", "text": "注意必須約到最簡，約成 9/12 還能繼續約。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F03_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第3題(2)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "把 $3\\frac{42}{88}$ 約分成最簡分數：", "options": ["A. $3\\frac{21}{44}$", "B. $3\\frac{7}{15}$", "C. $\\frac{153}{44}$", "D. $3\\frac{21}{88}$"], "answerKey": "A", "answer": "A · $3\\frac{21}{44}$", "steps": ["整數部分 3 保持不變，將真分數部分 $\\frac{42}{88}$ 約分。", "42 與 88 的最大公因數為 2。", "分子分母同除以 2：$\\frac{42 \\div 2}{88 \\div 2} = \\frac{21}{44}$。", "21（因數 3, 7）與 44（因數 2, 4, 11）互質，故最簡分數為 $3\\frac{21}{44}$。"], "insight": "帶分數約分只約分數部分，整數 3 不動。", "trap": {"code": "TRAP_INTEGER_PART", "text": "整數 3 不要漏寫。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F04_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第4題(橋長)", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "在一座橋樑的兩側，每隔 10 公尺插掛 1 面國旗，橋樑的頭尾都不放置，共放了 98 面，這座橋樑長幾公尺？", "options": ["A. 490 公尺", "B. 500 公尺", "C. 980 公尺", "D. 1000 公尺"], "answerKey": "B", "answer": "B · 500 公尺", "steps": ["題目說明在橋樑「兩側」共放了 98 面，因此每一側放的國旗數為：$98 \\div 2 = 49$（面）。", "「頭尾都不放置」植樹問題規律：間隔數 $=$ 旗子數 $+ 1$。", "單側間隔數 $= 49 + 1 = 50$（個間隔）。", "橋樑全長 $= 50 \\times 10 = 500$（公尺）。"], "insight": "雙側問題先除以 2 化為單側（49 面）；兩端都不放則間隔數比旗子多 1（50 個間隔），$50 \\times 10 = 500$ 公尺。", "trap": {"code": "TRAP_BOTH_SIDES", "text": "注意「兩側」要先除以 2，且兩端都不放是間隔 = 旗數 + 1，不可直接 98 × 10。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F04_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第4題(距離)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題，若將旗子從同一側的第一支開始編號，第 12 號到第 23 號旗子距離幾公尺？", "options": ["A. 100 公尺", "B. 110 公尺", "C. 120 公尺", "D. 230 公尺"], "answerKey": "B", "answer": "B · 110 公尺", "steps": ["第 12 號旗子到第 23 號旗子之間的間隔個數為：$23 - 12 = 11$（個間隔）。", "每個間隔長度為 10 公尺。", "距離 $= 11 \\times 10 = 110$（公尺）。"], "insight": "兩棵樹之間的間隔數等於編號差：$23 - 12 = 11$ 個間隔，直接乘 10 公尺。", "trap": {"code": "TRAP_INTERVAL_COUNT", "text": "算兩旗間距離不要誤加 1（不是問總旗數，是問間隔數）。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F05", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第5題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "找出 300 到 800 之間，60 和 90 的所有公倍數：", "options": ["A. 360、540、720", "B. 360、450、540、720", "C. 300、480、660", "D. 180、360、540、720"], "answerKey": "A", "answer": "A · 360、540、720", "steps": ["先求 60 與 90 的最小公倍數：$\\text{lcm}(60, 90) = 180$。", "60 和 90 的公倍數必為 180 的正整數倍：$180, 360, 540, 720, 900, \\dots$", "選取介於 300 到 800 之間的數：$360$、$540$、$720$。"], "insight": "公倍數皆為最小公倍數 180 的倍數。$180 \\times 2 = 360, 180 \\times 3 = 540, 180 \\times 4 = 720$。", "trap": {"code": "TRAP_RANGE_LIMIT", "text": "注意範圍限制在 300 到 800 之間，不要把 180 寫進去。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F06_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第6題(1)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "求出最簡整數比：$144 : 225 = (\\quad)$", "options": ["A. 16 : 25", "B. 12 : 15", "C. 4 : 5", "D. 48 : 75"], "answerKey": "A", "answer": "A · 16 : 25", "steps": ["求 144 與 225 的最大公因數：", "$144 = 9 \\times 16$，$225 = 9 \\times 25$。", "16 與 25 互質，故最大公因數為 9。", "前項與後項同除以 9：$144 \\div 9 : 225 \\div 9 = 16 : 25$。"], "insight": "$1+4+4=9$，$2+2+5=9$，兩者皆為 9 的倍數，直接同除以 9 得 $16:25$。", "trap": {"code": "TRAP_SIMPLIFY", "text": "注意化到最簡整數比，12:15 還能再約。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F06_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第6題(2)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "求出最簡整數比：$3\\frac{1}{2} : 4.2 = (\\quad)$", "options": ["A. 5 : 6", "B. 7 : 8.4", "C. 35 : 42", "D. 6 : 5"], "answerKey": "A", "answer": "A · 5 : 6", "steps": ["將分數化為小數：$3\\frac{1}{2} = 3.5$。", "原比為 $3.5 : 4.2$。", "同乘以 10 化為整數：$35 : 42$。", "同除以最大公因數 7：$35 \\div 7 : 42 \\div 7 = 5 : 6$。"], "insight": "化成小數比 $3.5:4.2$，擴大 10 倍為 $35:42$，除以 7 秒殺 $5:6$。", "trap": {"code": "TRAP_FRAC_DEC_RATIO", "text": "注意不要把比項顛倒寫成 6:5。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F07", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第7題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "希望國小環保集點：寶特瓶每 2 個換 9 點、鐵鋁罐每個換 5 點、玻璃容器每個換 4 點、廢電池每顆換 3 點。妮妮班上收集了 14 個寶特瓶和 13 個鐵鋁罐，一共可以換到幾點？", "options": ["A. 118 點", "B. 126 點", "C. 128 點", "D. 135 點"], "answerKey": "C", "answer": "C · 128 點", "steps": ["寶特瓶換點：每 2 個換 9 點，14 個寶特瓶可換組數 $= 14 \\div 2 = 7$ 組，點數 $= 7 \\times 9 = 63$（點）。", "鐵鋁罐換點：每個換 5 點，13 個鐵鋁罐可換點數 $= 13 \\times 5 = 65$（點）。", "合計總點數 $= 63 + 65 = 128$（點）。"], "insight": "寶特瓶是「每 2 個換 9 點」，記得先除以 2 算組數：$14 \\div 2 \\times 9 = 63$ 點。", "trap": {"code": "TRAP_GROUP_RATE", "text": "切勿將寶特瓶 14 直接乘 9，必須每 2 個為一組。"}, "cropImage": "images/exams/EXAM_MID1/crop_shihu_fill7.png"},
  {"id": "EX_SHIHU_F08", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第8題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "將 60 做質因數分解：$60 = (\\quad)$", "options": ["A. $2 \\times 2 \\times 3 \\times 5$", "B. $4 \\times 15$", "C. $2 \\times 3 \\times 10$", "D. $6 \\times 10$"], "answerKey": "A", "answer": "A · $2 \\times 2 \\times 3 \\times 5$ (或 $2^2 \\times 3 \\times 5$)", "steps": ["短除法分解 60：", "$60 \\div 2 = 30$", "$30 \\div 2 = 15$", "$15 \\div 3 = 5$", "5 為質數，分解完成。質因數分解式為 $60 = 2 \\times 2 \\times 3 \\times 5$。"], "insight": "質因數分解式中的每個乘數都必須是質數！", "trap": {"code": "TRAP_COMPOSITE_FACTOR", "text": "不能寫成含有合數的 4 × 15 或 6 × 10。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F09_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第9題(GCD)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "兩數質因數分解為 $2 \\times 2 \\times 3 \\times 5 \\times 7$ 和 $2 \\times 3 \\times 3 \\times 7 \\times 11$，則此兩數的最大公因數是多少？", "options": ["A. $2 \\times 3 \\times 7$ (42)", "B. 21", "C. $2 \\times 3$ (6)", "D. 7"], "answerKey": "A", "answer": "A · $2 \\times 3 \\times 7$ (即 42)", "steps": ["第一數：$2^2 \\times 3 \\times 5 \\times 7$", "第二數：$2 \\times 3^2 \\times 7 \\times 11$", "最大公因數取共同質因數的「最低次方」：", "質因數 2 的最低次方為 $2^1$；", "質因數 3 的最低次方為 $3^1$；", "質因數 7 的最低次方為 $7^1$。", "故最大公因數為 $2 \\times 3 \\times 7 = 42$。"], "insight": "標準分解式求 GCD：只取共同質因數，次方挑最小的。", "trap": {"code": "TRAP_FACTOR_POWER", "text": "注意質因數 2 和 3 都只能各取一個，5 和 11 不是共同質因數不可取。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F09_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第9題(LCM)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "承上題（兩數為 $2^2 \\times 3 \\times 5 \\times 7$ 和 $2 \\times 3^2 \\times 7 \\times 11$），最小公倍數是多少？", "options": ["A. $2 \\times 2 \\times 3 \\times 3 \\times 5 \\times 7 \\times 11$ (13860)", "B. $2 \\times 3 \\times 7$ (42)", "C. $2 \\times 3 \\times 5 \\times 7 \\times 11$", "D. $2 \\times 2 \\times 3 \\times 7$"], "answerKey": "A", "answer": "A · $2 \\times 2 \\times 3 \\times 3 \\times 5 \\times 7 \\times 11$ (即 13860)", "steps": ["最小公倍數取所有出現過的質因數的「最高次方」：", "質因數 2 取最高次：$2^2$", "質因數 3 取最高次：$3^2$", "質因數 5 取最高次：$5^1$", "質因數 7 取最高次：$7^1$", "質因數 11 取最高次：$11^1$", "連乘積：$2^2 \\times 3^2 \\times 5 \\times 7 \\times 11 = 4 \\times 9 \\times 5 \\times 7 \\times 11 = 13860$。"], "insight": "標準分解式求 LCM：所有質因數全收，次方挑最大的！", "trap": {"code": "TRAP_LCM_POWER", "text": "小心質因數 2 和 3 要取二次方，不可漏掉 5 和 11。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F10", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第10題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "國光客運高雄開往台北的公車每天發車時間是早上 6 時 30 分，最後一班公車出發的時間是下午 9 時 30 分，一天 21 個班次，各班次間相隔的時間相同，每隔幾分鐘會有一班車？", "options": ["A. 40 分鐘", "B. 42.8 分鐘", "C. 45 分鐘", "D. 50 分鐘"], "answerKey": "C", "answer": "C · 45 分鐘", "steps": ["下午 9 時 30 分換算為 24 時制是 21 時 30 分。", "計算營運總時間：$21:30 - 6:30 = 15$ 小時。", "換算為分鐘：$15 \\times 60 = 900$（分鐘）。", "一天共有 21 個班次（首班與末班皆出發），間隔數為：$21 - 1 = 20$（個間隔）。", "每個間隔時間：$900 \\div 20 = 45$（分鐘）。"], "insight": "公車班次是頭尾都有的植樹問題：間隔數 $=$ 班次數 $- 1 = 20$ 個間隔。總分鐘數 $900 \\div 20 = 45$ 分鐘。", "trap": {"code": "TRAP_INTERVAL_MINUS_ONE", "text": "超高頻陷阱！絕不可除以 21，首末班車之間只有 20 個時間間隔。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F11", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第11題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "在 0、1、3、5、6 五張數字卡中選擇 3 張，排成一個大於 5 的二位小數，數字不能重複，有幾種選擇？", "options": ["A. 12 種", "B. 18 種", "C. 24 種", "D. 36 種"], "answerKey": "C", "answer": "C · 24 種", "steps": ["二位小數形式為「整數 . 十分位 百分位」，數字不重複。", "要大於 5，且卡片數字為 0, 1, 3, 5, 6，整數位（個位）可以為 5 或 6：", "情況一：個位填 5。剩餘 4 張數字卡（0, 1, 3, 6）選 2 張填入十分位與百分位，排列數為 $4 \\times 3 = 12$ 種（因為小數部分不全為 0，皆大於 5）。", "情況二：個位填 6。剩餘 4 張數字卡（0, 1, 3, 5）選 2 張填入十分位與百分位，排列數為 $4 \\times 3 = 12$ 種（皆大於 5）。", "總組合數：$12 + 12 = 24$（種）。"], "insight": "分類討論法：個位是 5 有 12 種，個位是 6 有 12 種，合計 $12 + 12 = 24$ 種。", "trap": {"code": "TRAP_DIGIT_CARDS", "text": "注意個位數字為 6 也大於 5，不要只算了個位為 5 的 12 種。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F12_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第12題(1)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "一包奶茶成分為：紅茶粉 7 公克，奶精 4 公克，砂糖 3 公克。奶精和紅茶粉的重量比是( )，比值是( )。", "options": ["A. 重量比 4 : 7，比值 $\\frac{4}{7}$", "B. 重量比 7 : 4，比值 $\\frac{7}{4}$", "C. 重量比 4 : 3，比值 $\\frac{4}{3}$", "D. 重量比 3 : 7，比值 $\\frac{3}{7}$"], "answerKey": "A", "answer": "A · 重量比 4 : 7，比值 $\\frac{4}{7}$", "steps": ["題目問的是「奶精和紅茶粉」的重量比：", "奶精為前項（4 公克），紅茶粉為後項（7 公克）。", "重量比為 $4 : 7$。", "比值為前項除以後項：$4 \\div 7 = \\frac{4}{7}$。"], "insight": "依題意文字順序對齊：奶精(4) : 紅茶粉(7) $= 4:7$，比值即為分數 $\\frac{4}{7}$。", "trap": {"code": "TRAP_RATIO_ORDER", "text": "注意文字先後順序，不要寫顛倒成 7:4。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F12_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第12題(2)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "承上題（紅茶粉 7g、砂糖 3g），若要調配口味一樣的奶茶，紅茶粉 35 公克，需要加入砂糖幾公克？", "options": ["A. 10 公克", "B. 15 公克", "C. 20 公克", "D. 21 公克"], "answerKey": "B", "answer": "B · 15 公克", "steps": ["紅茶粉與砂糖的比例為 $7 : 3$。", "現在紅茶粉為 35 公克，放大了 $35 \\div 7 = 5$ 倍。", "砂糖也要放大 5 倍：$3 \\times 5 = 15$（公克）。"], "insight": "相等的比：前項擴大 5 倍，後項同步擴大 5 倍，$3 \\times 5 = 15$ 克。", "trap": {"code": "TRAP_PROPORTION", "text": "小心比對的是紅茶粉與砂糖，不要用成奶精的 4 克。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F13_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第13題(1)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "在方框中填入正確符號：$\\frac{5}{14} \\div \\frac{14}{5}$ □ $\\frac{5}{14} \\div 1\\frac{1}{5}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["兩式被除數皆為 $\\frac{5}{14}$。", "左式除數為 $\\frac{14}{5} = 2.8$。", "右式除數為 $1\\frac{1}{5} = \\frac{6}{5} = 1.2$。", "因為除數 $2.8 > 1.2$，在被除數相同的情況下，除數越大，商越小。", "因此左式小於右式，方框填入「$<$」。"], "insight": "除數越大商越小：$\\frac{14}{5} > 1\\frac{1}{5}$，故除以 $\\frac{14}{5}$ 的結果比較小！", "trap": {"code": "TRAP_DIV_SIZE", "text": "除法中「除數越大，商越小」，勿與乘法混淆。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_F13_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 二、填充題 第13題(2)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "在方框中填入正確符號：$\\frac{8}{9}$ □ $\\frac{8}{9} \\div \\frac{8}{9}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["左式數值為 $\\frac{8}{9}$（小於 1 的真分數）。", "右式數值為 $\\frac{8}{9} \\div \\frac{8}{9} = 1$（任何非零數除以自身等於 1）。", "因為 $\\frac{8}{9} < 1$，所以左式小於右式，方框填入「$<$」。"], "insight": "任何非零數自己除以自己等於 1。真分數 $\\frac{8}{9} < 1$ 秒殺！", "trap": {"code": "TRAP_SAME_NUM_DIV", "text": "注意右式除出來是 1，不是 0。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p1.png"},
  {"id": "EX_SHIHU_C01_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 三、綜合題 第1題(1)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "用短除法找出 63、42 的最大公因數和最小公倍數：", "options": ["A. 最大公因數 21，最小公倍數 126", "B. 最大公因數 7，最小公倍數 126", "C. 最大公因數 21，最小公倍數 252", "D. 最大公因數 3，最小公倍數 84"], "answerKey": "A", "answer": "A · 最大公因數 21，最小公倍數 126", "steps": ["短除法分解 63 與 42：", "同除以 3 得 21 與 14；", "同除以 7 得 3 與 2（3 與 2 互質）。", "最大公因數：左側除數相乘 $3 \\times 7 = 21$。", "最小公倍數：左側除數與底端商相乘 $3 \\times 7 \\times 3 \\times 2 = 21 \\times 6 = 126$。"], "insight": "63 與 42 差為 21，21 能整除 63 與 42，故最大公因數直接為 21；LCM 為 $21 \\times 3 \\times 2 = 126$。", "trap": {"code": "TRAP_GCD_LCM", "text": "注意最大公因數是左邊相乘(21)，最小公倍數是L型全乘(126)。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_C01_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 三、綜合題 第1題(2)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "用短除法找出 36、48 的最大公因數和最小公倍數：", "options": ["A. 最大公因數 12，最小公倍數 144", "B. 最大公因數 6，最小公倍數 144", "C. 最大公因數 12，最小公倍數 72", "D. 最大公因數 24，最小公倍數 288"], "answerKey": "A", "answer": "A · 最大公因數 12，最小公倍數 144", "steps": ["短除法分解 36 與 48：", "同除以 2 得 18 與 24；同除以 2 得 9 與 12；同除以 3 得 3 與 4（互質）。", "最大公因數：$2 \\times 2 \\times 3 = 12$。", "最小公倍數：$12 \\times 3 \\times 4 = 144$。"], "insight": "經典公倍數組合：36 和 48 的最大公因數是 12，最小公倍數是 144。", "trap": {"code": "TRAP_CALC", "text": "12 × 12 = 144，不要誤乘成 72。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_C02_1", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 三、綜合題 第2題(1)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "算算看，答案要化成最簡分數：$21 \\div \\frac{7}{9} = (\\quad)$", "options": ["A. 27", "B. $\\frac{49}{3}$", "C. 18", "D. 24"], "answerKey": "A", "answer": "A · 27", "steps": ["整數除以分數，轉為乘以倒數：$21 \\div \\frac{7}{9} = 21 \\times \\frac{9}{7}$。", "約分：21 與 7 約分得 3。", "計算：$3 \\times 9 = 27$。"], "insight": "$21 \\times \\frac{9}{7} = 3 \\times 9 = 27$。", "trap": {"code": "TRAP_RECIPROCAL", "text": "注意倒數要顛倒分子分母成 9/7。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_C02_2", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 三、綜合題 第2題(2)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "算算看，答案要化成最簡分數：$2\\frac{2}{57} \\div \\frac{5}{57} = (\\quad)$", "options": ["A. $23\\frac{1}{5}$", "B. 24", "C. $22\\frac{4}{5}$", "D. $\\frac{116}{57}$"], "answerKey": "A", "answer": "A · $23\\frac{1}{5}$ (或 $\\frac{116}{5}$)", "steps": ["帶分數化假分數：$2\\frac{2}{57} = \\frac{2 \\times 57 + 2}{57} = \\frac{116}{57}$。", "除法轉乘倒數：$\\frac{116}{57} \\div \\frac{5}{57} = \\frac{116}{57} \\times \\frac{57}{5}$。", "同分母 57 約分消去，得 $\\frac{116}{5} = 23\\frac{1}{5}$。"], "insight": "同分母分數相除，結果直接等於分子相除：$116 \\div 5 = \\frac{116}{5} = 23\\frac{1}{5}$！", "trap": {"code": "TRAP_COMMON_DENOM", "text": "帶分數先化假分數 116/57，不可整數 2 不動直接 2/57 ÷ 5/57。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_C02_3", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 三、綜合題 第2題(3)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "算算看，答案要化成最簡分數：$6\\frac{2}{3} \\div \\frac{15}{7} = (\\quad)$", "options": ["A. $3\\frac{1}{9}$", "B. $2\\frac{8}{9}$", "C. $\\frac{28}{9}$", "D. $3\\frac{2}{9}$"], "answerKey": "A", "answer": "A · $3\\frac{1}{9}$ (或 $\\frac{28}{9}$)", "steps": ["帶分數化為假分數：$6\\frac{2}{3} = \\frac{20}{3}$。", "除以分數轉為乘以倒數：$\\frac{20}{3} \\div \\frac{15}{7} = \\frac{20}{3} \\times \\frac{7}{15}$。", "約分：20 與 15 同除以 5 得 4 與 3。", "相乘：$\\frac{4 \\times 7}{3 \\times 3} = \\frac{28}{9} = 3\\frac{1}{9}$。"], "insight": "化簡約分：$\\frac{20 \\times 7}{3 \\times 15} = \\frac{4 \\times 7}{3 \\times 3} = \\frac{28}{9} = 3\\frac{1}{9}$。", "trap": {"code": "TRAP_REDUCE", "text": "注意 20 和 15 約分後分母是 3×3=9，不要誤算成 3。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_C02_4", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 三、綜合題 第2題(4)", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "算算看，求未知數：$6 : 221 = \\square : 17$", "options": ["A. $\\frac{6}{13}$", "B. $\\frac{13}{6}$", "C. 78", "D. 1"], "answerKey": "A", "answer": "A · $\\frac{6}{13}$", "steps": ["觀察後項變化：後項由 221 變成 17。", "計算縮小倍數：$221 \\div 17 = 13$。", "前項也必須同除以 13：$\\square = 6 \\div 13 = \\frac{6}{13}$。"], "insight": "相等的比性質：後項除以 13，前項也除以 13，直接得 $\\frac{6}{13}$。", "trap": {"code": "TRAP_NOT_INT", "text": "小學題目有時答案是分數，6 ÷ 13 不能整除，寫成最簡分數 6/13 即可。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_A01", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 四、應用題 第1題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "幸福國小六年級學生人數為 248 人，有 128 個男生和 108 個女生參加畢業旅行。請問幸福國小「未參加畢業旅行人數」和「全校六年級學生人數」的比值是多少？", "options": ["A. $\\frac{3}{62}$", "B. $\\frac{59}{62}$", "C. $\\frac{12}{248}$", "D. $\\frac{1}{20}$"], "answerKey": "A", "answer": "A · $\\frac{3}{62}$", "steps": ["參加畢業旅行的總人數：$128 + 108 = 236$（人）。", "未參加畢業旅行的人數：$248 - 236 = 12$（人）。", "未參加人數與全校六年級人數的比為 $12 : 248$。", "比值 $= \\frac{12}{248}$，分子分母同除以最大公因數 4 約分：$\\frac{12 \\div 4}{248 \\div 4} = \\frac{3}{62}$。"], "insight": "仔細審題是問「未參加」的比值：$12 \\div 248 = \\frac{3}{62}$。", "trap": {"code": "TRAP_READING", "text": "注意題目問的是「未參加」，不要算成參加人數的比值 236/248 = 59/62。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_A02", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 四、應用題 第2題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "下圖是遊覽車座位配置圖（左邊單號：靠窗 1, 靠走道 3；右邊雙號：靠走道 4, 靠窗 2），如果乖乖想要坐 26 號座位，請問是哪一個位置？", "options": ["A. 第 7 排，右邊靠窗", "B. 第 7 排，右邊靠走道", "C. 第 6 排，右邊靠窗", "D. 第 7 排，左邊靠窗"], "answerKey": "A", "answer": "A · 第 7 排，右邊靠窗", "steps": ["觀察座位排數與號碼規律：每排有 4 個座位。", "計算排數：$26 \\div 4 = 6 \\dots 2$。", "商為 6 表示前 6 排已滿，餘數 2 表示位於「第 7 排」。", "觀察餘數對應位置（除以 4 的餘數）：", "餘 1：左邊靠窗（如 1, 5...）", "餘 2：右邊靠窗（如 2, 6...）", "餘 3：左邊靠走道（如 3, 7...）", "整除（餘 0）：右邊靠走道（如 4, 8...）", "因為 26 號餘數為 2，故位置在「第 7 排，右邊靠窗」。"], "insight": "座位除以 4 看餘數與排數：$26 = 4 \\times 6 + 2$。排數是 $6+1=7$，餘 2 對照第 1 排的 2 號（右邊靠窗）！", "trap": {"code": "TRAP_SEAT_AISLE_WINDOW", "text": "注意右側雙號靠窗是 2, 6（餘2），靠走道是 4, 8（餘0），不要與左邊混淆。"}, "cropImage": "images/exams/EXAM_MID1/crop_shihu_app2.png"},
  {"id": "EX_SHIHU_A03", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 四、應用題 第3題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "三峽老街名產為金牛角麵包。有一塊重 $\\frac{3}{4}$ 公斤的麵團，每 $\\frac{5}{72}$ 公斤可做成一個金牛角麵包，一共可以做成幾個？", "options": ["A. 10 個", "B. 11 個", "C. 12 個", "D. 9 個"], "answerKey": "A", "answer": "A · 10 個 (剩餘 $\\frac{1}{18}$ 公斤麵團)", "steps": ["求可以做成幾個麵包，列式為總重量除以每個麵包重量：$\\frac{3}{4} \\div \\frac{5}{72}$。", "除法轉乘倒數：$\\frac{3}{4} \\times \\frac{72}{5}$。", "約分：72 與 4 約分得 18。", "計算：$\\frac{3 \\times 18}{5} = \\frac{54}{5} = 10\\frac{4}{5}$（個）。", "因為麵包必須是整數個，不夠做成一個完整的麵包，故一共可以做成 10 個。"], "insight": "帶分數結果為 $10\\frac{4}{5}$ 個，題目問可以做成幾個，取整數部分 10 個。", "trap": {"code": "TRAP_INTEGER_TRUNC", "text": "做麵包不足一個不能算，必須無條件捨去，不能四捨五入成 11 個。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_A04", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 四、應用題 第4題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "晚上回飯店休息。128 個男生和 108 個女生分開編組住宿，每間房間的人數一樣多，男生和女生都剛好分完。每間房間最多可以住幾人？共需要幾間房間？", "options": ["A. 每間最多住 4 人，共需要 59 間", "B. 每間最多住 4 人，共需要 58 間", "C. 每間最多住 2 人，共需要 118 間", "D. 每間最多住 8 人，共需要 30 間"], "answerKey": "A", "answer": "A · 每間最多住 4 人，共需要 59 間房間", "steps": ["每間人數必須能整除 128 與 108，且人數要求「最多」，即求最大公因數 $\\gcd(128, 108)$。", "短除法求最大公因數：$128 = 4 \\times 32$，$108 = 4 \\times 27$。32 與 27 互質，故 $\\gcd(128, 108) = 4$（人）。", "計算房間數：", "男生需要：$128 \\div 4 = 32$（間）", "女生需要：$108 \\div 4 = 27$（間）", "共需要房間數：$32 + 27 = 59$（間）。"], "insight": "求最大公因數得 4 人/間；總人數 $(128+108) \\div 4 = 236 \\div 4 = 59$ 間。", "trap": {"code": "TRAP_ADD_ROOMS", "text": "男女分開住宿，房間總數是男生間數加女生間數 32 + 27 = 59 間。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_A05", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 四、應用題 第5題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "笑傲飛鷹車體全長 18.2 公尺，每隔 140 公分設計一排座位 (不考慮椅子厚度)，頭尾都設，請問總共會有幾排座位？", "options": ["A. 13 排", "B. 14 排", "C. 15 排", "D. 12 排"], "answerKey": "B", "answer": "B · 14 排座位", "steps": ["單位換算：$18.2$ 公尺 $= 1820$ 公分。", "計算間隔數：$1820 \\div 140 = 13$（個間隔）。", "直線路線「頭尾都設」植樹問題規律：座位排數 $=$ 間隔數 $+ 1$。", "排數 $= 13 + 1 = 14$（排）。"], "insight": "先統一度量衡（18.2m = 1820cm），兩端都設必 $+1$：$13 + 1 = 14$ 排。", "trap": {"code": "TRAP_UNIT_CONVERT", "text": "注意公尺與公分的單位換算，且頭尾都設要加 1。"}, "cropImage": "images/exams/EXAM_MID1/shihu_p2.png"},
  {"id": "EX_SHIHU_A06", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 四、應用題 第6題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "在木柵動物園吃麥當當套餐，漢堡有 5 種、點心有 2 種（薯條、蘋果派）、飲料有 4 種，可以各選 1 種。若乖乖「一定要吃薯條」，請問共有幾種不同的選擇？", "options": ["A. 10 種", "B. 20 種", "C. 40 種", "D. 9 種"], "answerKey": "B", "answer": "B · 20 種", "steps": ["分析各餐點選項數：", "漢堡：大麥克、麥香雞、麥香魚、雙層牛肉吉事堡、勁辣雞腿堡，共 5 種。", "點心：題目限定「一定要吃薯條」，故點心只有「薯條」1 種選擇。", "飲料：可樂、雪碧、檸檬紅茶、柳橙汁，共 4 種。", "依乘法原理計算總組合數：$5 \\times 1 \\times 4 = 20$（種）。"], "insight": "限定條件直接固定：點心只有 1 種可能，總搭配數為 $5 \\times 1 \\times 4 = 20$ 種。", "trap": {"code": "TRAP_CONDITION_FIX", "text": "注意點心固定吃薯條，不要算成點心有 2 種（5 × 2 × 4 = 40）。"}, "cropImage": "images/exams/EXAM_MID1/crop_shihu_app6.png"},
  {"id": "EX_SHIHU_A07", "unitId": "EXAM_MID1", "school": "高雄市立獅湖國小", "source": "獅湖國小 114上 期中考 四、應用題 第7題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "三個景點販賣同一款狐獴玩偶：自然科學博物館 2 個 1288 元、六福村 3 個 1680 元、木柵動物園 4 個 2499 元。哪一個景點的狐獴玩偶賣得最貴？", "options": ["A. 自然科學博物館", "B. 六福村", "C. 木柵動物園", "D. 三個景點價格一樣"], "answerKey": "A", "answer": "A · 自然科學博物館", "steps": ["計算各景點每個狐獴玩偶的平均單價（金額 ÷ 數量）：", "自然科學博物館：$1288 \\div 2 = 644$（元/個）。", "六福村：$1680 \\div 3 = 560$（元/個）。", "木柵動物園：$2499 \\div 4 = 624.75$（元/個）。", "比較單價：$644 > 624.75 > 560$。", "因此自然科學博物館賣得最貴（644元）。"], "insight": "單價比較：自科館 644 元，動物園 624.75 元，六福村 560 元。自科館最貴！", "trap": {"code": "TRAP_UNIT_PRICE", "text": "不要直接看總金額 2499 元就誤選木柵動物園，必須除以數量算單價。"}, "cropImage": "images/exams/EXAM_MID1/crop_shihu_app7.png"},
  {"id": "EX_ZHONGXIAO_01", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第1題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "下列哪一個數不是 84 的質因數？", "options": ["A. 2", "B. 3", "C. 5", "D. 7"], "answerKey": "C", "answer": "C · 5", "steps": ["將 84 進行質因數分解：$84 = 2^2 \\times 3 \\times 7$。", "84 的質因數只有 2、3、7。", "84 的個位數字不是 0 或 5，不能被 5 整除，因此 5 不是 84 的因數，更不是質因數。"], "insight": "判斷倍數法則：84 個位非 0 也非 5，絕不可能含有質因數 5！", "trap": {"code": "TRAP_PRIME_FACTOR", "text": "注意 5 雖然是質數，但不是 84 的因數。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_02", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第2題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "甲、乙兩數互質，甲、乙兩數的最大公因數是：", "options": ["A. 1", "B. 甲＋乙", "C. 甲－乙", "D. 甲×乙"], "answerKey": "A", "answer": "A · 1", "steps": ["互質的數學定義：兩數的最大公因數為 1，即稱為互質。", "因此互質的兩數最大公因數必定是 1。"], "insight": "基礎數學定義：$\\gcd(\\text{甲}, \\text{乙}) = 1 \\iff$ 兩數互質。選項 D 的「甲×乙」是它們的最小公倍數。", "trap": {"code": "TRAP_LCM_GCD_CONFUSE", "text": "小心不要把最大公因數(1)與最小公倍數(甲×乙)混淆。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_03", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第3題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "下列何者可表示兩個質數的乘積？", "options": ["A. 19", "B. 20", "C. 21", "D. 81"], "answerKey": "C", "answer": "C · 21", "steps": ["分析各選項的質因數分解：", "A. 19：本身就是質數，不是兩個質數的乘積。", "B. 20：$20 = 2 \\times 2 \\times 5$（三個質數的乘積）。", "C. 21：$21 = 3 \\times 7$（3 和 7 都是質數，恰為兩個質數的乘積）。", "D. 81：$81 = 3^4$（四個質數的乘積）。"], "insight": "$21 = 3 \\times 7$，是半質數（Semiprime），恰由兩個相異質數相乘而成。", "trap": {"code": "TRAP_PRIME_COUNT", "text": "注意 20 有三個質因數 (2×2×5)，81 有四個質因數 (3×3×3×3)。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_04", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第4題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "下列哪一個比是最簡整數比？", "options": ["A. 25 : 80", "B. 4 : 9", "C. 0.8 : 7", "D. 9 : 45"], "answerKey": "B", "answer": "B · 4 : 9", "steps": ["最簡整數比的條件：前項與後項皆為整數，且兩者的最大公因數為 1（互質）。", "A. 25:80，公因數有 5，可約分成 5:16。", "B. 4:9，4 與 9 互質（$\\gcd(4,9)=1$），符合最簡整數比定義。", "C. 0.8:7，前項 0.8 是小數，不是整數比。", "D. 9:45，公因數有 9，可約分成 1:5。"], "insight": "最簡整數比雙重檢驗：1. 必須是整數；2. 必須互質。4 與 9 完全符合！", "trap": {"code": "TRAP_COPRIME_CHECK", "text": "4 和 9 雖然各自是合數，但彼此沒有共同質因數，兩者互質！"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_05", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第5題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "1〜10 的質數相加的和是多少？", "options": ["A. 16", "B. 17", "C. 18", "D. 20"], "answerKey": "B", "answer": "B · 17", "steps": ["1〜10 的質數有：2、3、5、7（共 4 個）。", "計算總和：$2 + 3 + 5 + 7 = 17$。"], "insight": "注意 1 不是質數，9 是合數。和為 17。", "trap": {"code": "TRAP_ONE_IS_NOT_PRIME", "text": "注意 1 既不是質數也不是合數。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_06", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第6題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "分數約分成最簡分數後，值會：", "options": ["A. 變大", "B. 變小", "C. 不變", "D. 不一定"], "answerKey": "C", "answer": "C · 不變", "steps": ["約分的本質是將分數的分子和分母同時除以相同的非零整數（公因數）。", "根據等值分數的性質，約分前後分數的大小（值）完全保持不變。"], "insight": "約分只是數字形式變簡化，代表的分數大小完全不變。", "trap": {"code": "TRAP_FRACTION_VALUE", "text": "雖然分子分母數字變小，但分數的「值」保持不變。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_07", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第7題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "一個商品的成本占定價的七成，商品的成本和定價的最簡整數比可以記成？", "options": ["A. 7 : 100", "B. 70 : 100", "C. 7 : 10", "D. 3 : 10"], "answerKey": "C", "answer": "C · 7 : 10", "steps": ["「七成」代表 $\\frac{7}{10}$（即 70%）。", "成本占定價的七成，表示定價為 10 份時，成本為 7 份。", "成本和定價的比為 $70 : 100$。", "同除以 10 化為最簡整數比：$7 : 10$。"], "insight": "七成 $= \\frac{7}{10}$，最簡整數比即為 $7:10$。", "trap": {"code": "TRAP_SEVEN_TENTHS", "text": "注意七成是 70% 不是 7%，不要選 7:100。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_08", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 一、選擇題 第8題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "$70 \\div 1.2$ 用四捨五入法將商取概數到小數點後第一位，商是：", "options": ["A. 58.3", "B. 58.4", "C. 583.3", "D. 584.3"], "answerKey": "A", "answer": "A · 58.3", "steps": ["被除數與除數同乘以 10：$700 \\div 12$。", "直式計算：$700 \\div 12 = 58.333...$", "取概數到小數點後第一位，觀察小數第二位數字 3。", "因為 $3 < 5$，捨去，得商約為 $58.3$。"], "insight": "除到小數第二位判斷四捨五入：第二位是 3 捨去，得 58.3。", "trap": {"code": "TRAP_DECIMAL_PLACE", "text": "小心小數點位置，不要選成 583.3。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_B1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 二、填入＜＝＞ 第1題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "在 □ 裡填入＜、＝或＞：$\\frac{59}{8} \\div 3$ □ $\\frac{59}{8}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["被除數皆為 $\\frac{59}{8}$。", "左式除以 3（除數大於 1），商會小於被除數：$\\frac{59}{8} \\div 3 = \\frac{59}{24} < \\frac{59}{8}$。", "因此填入「$<$」。"], "insight": "正數除以大於 1 的數，結果必小於原數。", "trap": {"code": "TRAP_DIV_SIZE", "text": "除數大於 1 時商小於被除數。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_B2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 二、填入＜＝＞ 第2題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "在 □ 裡填入＜、＝或＞：$4\\frac{2}{3} \\div \\frac{4}{5}$ □ $4\\frac{2}{3}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "A", "answer": "A · >", "steps": ["被除數皆為 $4\\frac{2}{3}$。", "除數為 $\\frac{4}{5} < 1$。", "正數除以小於 1 的數，商會大於被除數：$4\\frac{2}{3} \\div \\frac{4}{5} = \\frac{14}{3} \\times \\frac{5}{4} = \\frac{35}{6} = 5\\frac{5}{6} > 4\\frac{2}{3}$。", "因此填入「$>$」。"], "insight": "除以小於 1 的正數，商大於被除數。", "trap": {"code": "TRAP_DIV_LESS_1", "text": "除以真分數結果變大，填 >。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_B3", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 二、填入＜＝＞ 第3題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "在 □ 裡填入＜、＝或＞：$54.87 \\div 1$ □ $54.87$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "C", "answer": "C · =", "steps": ["任何數除以 1 都等於其本身：$54.87 \\div 1 = 54.87$。", "左右兩邊完全相等，填入「$=$」。"], "insight": "1 是除法單位元素，數值不變。", "trap": {"code": "TRAP_DIV_ONE", "text": "除以 1 等於原數，不是 1。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_B4", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 二、填入＜＝＞ 第4題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "在 □ 裡填入＜、＝或＞：$39 \\div 0.12$ □ $39 \\div 1.2$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "A", "answer": "A · >", "steps": ["被除數皆為 39。", "比較除數：$0.12 < 1.2$。", "被除數相同時，除數越小，商反而越大。", "因為 $0.12 < 1.2$，所以 $39 \\div 0.12 > 39 \\div 1.2$，填入「$>$」。"], "insight": "除數越小商越大：除以 0.12 是除以 1.2 的 10 倍大！", "trap": {"code": "TRAP_DIVISOR_INVERSE", "text": "被除數相同時，除數越小商越大，小心不要判斷顛倒。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_Q_LESS_68", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 三、商比6.8小", "batch": "段考真題", "category": "小數除法", "level": 2, "difficulty": 2, "question": "商比 6.8 小的算式有哪些？\n① $6.8 \\div 2.54$\n② $6.8 \\div 0.28$\n③ $6.8 \\div 1$\n④ $6.8 \\div \\frac{51}{8}$", "options": ["A. 只有 ① 和 ④", "B. 只有 ① 和 ②", "C. 只有 ② 和 ③", "D. 只有 ①、③ 和 ④"], "answerKey": "A", "answer": "A · 只有 ① 和 ④", "steps": ["被除數皆為 6.8。商要比 6.8 小，除數必須大於 1：", "① $6.8 \\div 2.54$：除數 $2.54 > 1$，商比 6.8 小。（符合）", "② $6.8 \\div 0.28$：除數 $0.28 < 1$，商比 6.8 大。（不符合）", "③ $6.8 \\div 1$：除數為 1，商等於 6.8。（不符合）", "④ $6.8 \\div \\frac{51}{8}$：$\\frac{51}{8} = 6.375 > 1$，除數大於 1，商比 6.8 小。（符合）", "因此商比 6.8 小的算式為 ① 和 ④。"], "insight": "抓住核心準則：「商比被除數小 $\\iff$ 除數 $>1$」。$2.54 > 1$ 且 $\\frac{51}{8} = 6.375 > 1$！", "trap": {"code": "TRAP_EQUAL_CASE", "text": "題目問「比 6.8 小」，等於 6.8 的算式 ③ 不能選。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C01_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 1(1)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "把答案用最簡分數表示：$6\\frac{2}{3} \\div 1\\frac{7}{9} = (\\quad)$", "options": ["A. $3\\frac{3}{4}$", "B. $3\\frac{1}{2}$", "C. $\\frac{15}{4}$", "D. $4\\frac{1}{4}$"], "answerKey": "A", "answer": "A · $3\\frac{3}{4}$ (或 $\\frac{15}{4}$)", "steps": ["化為假分數：$6\\frac{2}{3} = \\frac{20}{3}$，$1\\frac{7}{9} = \\frac{16}{9}$。", "除以分數轉為乘以倒數：$\\frac{20}{3} \\times \\frac{9}{16}$。", "約分：20 與 16 同除以 4 得 5 與 4；9 與 3 約分得 3 與 1。", "相乘：$\\frac{5 \\times 3}{1 \\times 4} = \\frac{15}{4} = 3\\frac{3}{4}$。"], "insight": "帶分數化假分數後交叉約分：$\\frac{20}{3} \\times \\frac{9}{16} = \\frac{5 \\times 3}{4} = \\frac{15}{4} = 3\\frac{3}{4}$。", "trap": {"code": "TRAP_IMPROPER_FRAC", "text": "注意 1又7/9 化為假分數是 16/9，不是 17/9。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C01_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 1(2)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "把答案用最簡分數表示：$8\\frac{2}{5} \\div (8 \\div 5) = (\\quad)$", "options": ["A. $5\\frac{1}{4}$", "B. $5\\frac{1}{2}$", "C. $\\frac{21}{4}$", "D. $4\\frac{3}{4}$"], "answerKey": "A", "answer": "A · $5\\frac{1}{4}$ (或 $\\frac{21}{4}$)", "steps": ["括號內計算：$8 \\div 5 = \\frac{8}{5}$。", "帶分數化為假分數：$8\\frac{2}{5} = \\frac{42}{5}$。", "同分母相除，直接分子除以分子：$\\frac{42}{5} \\div \\frac{8}{5} = 42 \\div 8 = \\frac{42}{8}$。", "約分成最簡分數：$\\frac{42 \\div 2}{8 \\div 2} = \\frac{21}{4} = 5\\frac{1}{4}$。"], "insight": "括號內 $8 \\div 5 = \\frac{8}{5}$，與被除數同分母，直接 $42 \\div 8 = \\frac{21}{4} = 5\\frac{1}{4}$。", "trap": {"code": "TRAP_REDUCE", "text": "42/8 還能除以 2 約分成 21/4，記得化到最簡。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C02_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 2(1)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "用短除法求出 24、36 的最大公因數和最小公倍數：", "options": ["A. 最大公因數 12，最小公倍數 72", "B. 最大公因數 6，最小公倍數 72", "C. 最大公因數 12，最小公倍數 144", "D. 最大公因數 4，最小公倍數 36"], "answerKey": "A", "answer": "A · 最大公因數 12，最小公倍數 72", "steps": ["短除法分解 24 與 36：", "同除以 2 得 12 與 18；同除以 2 得 6 與 9；同除以 3 得 2 與 3（2 與 3 互質）。", "最大公因數：$2 \\times 2 \\times 3 = 12$。", "最小公倍數：$12 \\times 2 \\times 3 = 72$。"], "insight": "速算：24 與 36 的差是 12，12 能整除 24 與 36，故最大公因數直接為 12；LCM 為 $12 \\times 2 \\times 3 = 72$。", "trap": {"code": "TRAP_GCD_LCM", "text": "最大公因數是 12，最小公倍數是 72。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C02_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 2(2)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "用短除法求出 54、60 的最大公因數和最小公倍數：", "options": ["A. 最大公因數 6，最小公倍數 540", "B. 最大公因數 6，最小公倍數 270", "C. 最大公因數 18，最小公倍數 540", "D. 最大公因數 3，最小公倍數 180"], "answerKey": "A", "answer": "A · 最大公因數 6，最小公倍數 540", "steps": ["短除法分解 54 與 60：", "同除以 2 得 27 與 30；同除以 3 得 9 與 10（9 與 10 互質）。", "最大公因數：$2 \\times 3 = 6$。", "最小公倍數：$6 \\times 9 \\times 10 = 540$。"], "insight": "9 和 10 連續整數必互質！故最大公因數是 6，LCM 為 $6 \\times 9 \\times 10 = 540$。", "trap": {"code": "TRAP_LCM_PRODUCT", "text": "底端商 9 和 10 相乘為 90，再乘 6 得 540。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C03_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 3(1)", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "寫成直式算算看：$13 \\div 3.25 = (\\quad)$", "options": ["A. 4", "B. 0.4", "C. 40", "D. 3.8"], "answerKey": "A", "answer": "A · 4", "steps": ["小數點向右移兩位：$13 \\div 3.25 = 1300 \\div 325$。", "直式計算：$325 \\times 4 = 1300$。", "因此商恰好為整數 4。"], "insight": "直覺速算：$3.25 = 3\\frac{1}{4} = \\frac{13}{4}$。$13 \\div \\frac{13}{4} = 13 \\times \\frac{4}{13} = 4$！", "trap": {"code": "TRAP_DECIMAL_PLACE", "text": "注意被除數 13 補兩個零變成 1300，商是 4 不是 0.4。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C03_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 3(2)", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "寫成直式算算看：$1.68 \\div 0.6 = (\\quad)$", "options": ["A. 2.8", "B. 0.28", "C. 28", "D. 2.6"], "answerKey": "A", "answer": "A · 2.8", "steps": ["除數與被除數的小數點同時向右移動一位：$1.68 \\div 0.6 = 16.8 \\div 6$。", "直式計算：$16.8 \\div 6 = 2.8$。"], "insight": "$16.8 \\div 6 = 2.8$，商的小數點要和移位後的新小數點對齊。", "trap": {"code": "TRAP_DECIMAL_ALIGN", "text": "除數 0.6 只有一位小數，所以被除數只移動一位變成 16.8。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C04_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 4(1)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "求比值：$91 : 78 = (\\quad)$", "options": ["A. $\\frac{7}{6}$", "B. $\\frac{6}{7}$", "C. $1\\frac{1}{6}$", "D. 1.2"], "answerKey": "A", "answer": "A · $\\frac{7}{6}$ (或 $1\\frac{1}{6}$)", "steps": ["比值為前項除以後項：$91 \\div 78 = \\frac{91}{78}$。", "尋找 91 與 78 的最大公因數：", "$91 = 7 \\times 13$，$78 = 6 \\times 13$。", "分子分母同除以 13 約分：$\\frac{91 \\div 13}{78 \\div 13} = \\frac{7}{6} = 1\\frac{1}{6}$。"], "insight": "神奇質數 13：$91 = 7 \\times 13$ 與 $78 = 6 \\times 13$ 是常見約分組合！", "trap": {"code": "TRAP_PRIME_13", "text": "注意 91 不是質數，能被 13 約分。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_C04_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 四、計算題 4(2)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "求比值：$0.08 : 0.4 = (\\quad)$", "options": ["A. 0.2", "B. 2", "C. $\\frac{1}{5}$", "D. 0.02"], "answerKey": "A", "answer": "A · 0.2 (或 $\\frac{1}{5}$)", "steps": ["比值 $=$ 前項 $\\div$ 後項：$0.08 \\div 0.4$。", "同乘以 100：$\\frac{8}{40} = \\frac{1}{5} = 0.2$。"], "insight": "$0.08 \\div 0.4 = 0.8 \\div 4 = 0.2$。", "trap": {"code": "TRAP_DECIMAL_DIV", "text": "小心 0.08 ÷ 0.4 = 0.2，不要算成 2 或 0.02。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p1.png"},
  {"id": "EX_ZHONGXIAO_P01", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 五、規律 第1題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "一串串珠按照「◆ ☉ ★ △ ◆ ☉ ★ △ ……」的順序排列，第 19 顆是什麼？", "options": ["A. ★", "B. ◆", "C. ☉", "D. △"], "answerKey": "A", "answer": "A · ★", "steps": ["循環週期為 4 顆：◆(1)、☉(2)、★(3)、△(4)。", "計算週期：$19 \\div 4 = 4$ 週期 $\\dots 3$ 顆。", "餘數為 3，對應週期中第 3 個圖案，即「★」。"], "insight": "看除以 4 的餘數：餘 3 就是第 3 個符號「★」。", "trap": {"code": "TRAP_REMAINDER", "text": "餘數 3 代表第 3 個圖案，切勿看商數 4。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p2.png"},
  {"id": "EX_ZHONGXIAO_P02_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 五、規律 第2題(1)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "用木棒排成一橫列正方形，圖1排1個用4根、圖2排2個用7根、圖3排3個用10根。每多排一個正方形要多用幾根木棒？", "options": ["A. 3 根", "B. 4 根", "C. 2 根", "D. 1 根"], "answerKey": "A", "answer": "A · 3 根", "steps": ["圖1：4根木棒。", "圖2：7根木棒，增加了 $7 - 4 = 3$ 根。", "圖3：10根木棒，增加了 $10 - 7 = 3$ 根。", "因為相鄰正方形共用一條公共邊，所以每多排一個正方形只要多用 3 根木棒。"], "insight": "正方形火柴棒規律：第 1 個需要 4 根，之後每個只需補 3 根（共用邊）。", "trap": {"code": "TRAP_SHARED_EDGE", "text": "正方形有一邊重疊共用，不是每次加 4 根。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_match.png"},
  {"id": "EX_ZHONGXIAO_P02_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 五、規律 第2題(2)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題（排正方形木棒），圖 10 要用到幾根木棒？", "options": ["A. 31 根", "B. 40 根", "C. 30 根", "D. 34 根"], "answerKey": "A", "answer": "A · 31 根", "steps": ["正方形木棒通式：木棒數 $= 1 + 3 \\times n$（其中 n 為正方形個數）。", "當 $n = 10$ 時：", "木棒數 $= 1 + 3 \\times 10 = 1 + 30 = 31$（根）。"], "insight": "最左邊 1 根，加上 10 個「ㄈ」字形（各3根）：$1 + 3 \\times 10 = 31$ 根。", "trap": {"code": "TRAP_STICK_FORMULA", "text": "注意不要直接 4 × 10 = 40。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_match.png"},
  {"id": "EX_ZHONGXIAO_P02_3", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 五、規律 第2題(3)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題，圖 10 會比圖 6 多幾根木棒？", "options": ["A. 12 根", "B. 15 根", "C. 10 根", "D. 9 根"], "answerKey": "A", "answer": "A · 12 根", "steps": ["圖 10 比圖 6 多排了 $10 - 6 = 4$ 個正方形。", "每多排一個正方形多用 3 根木棒。", "總共多用：$4 \\times 3 = 12$（根）。"], "insight": "直接用差值算：多了 4 個正方形，每個多 3 根，$4 \\times 3 = 12$ 根。", "trap": {"code": "TRAP_DIFF_CALC", "text": "不需算出兩圖木棒再相減，直接看增加了 4 個正方形 × 3 = 12 根。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_match.png"},
  {"id": "EX_ZHONGXIAO_P03", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 五、規律 第3題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "妮妮拿黑色、紅色和白色三種色球進行規律排列：黑、紅、紅、白、黑、紅、紅、白……第 40 顆色球的顏色會是什麼？", "options": ["A. 白色", "B. 黑色", "C. 紅色", "D. 無法判斷"], "answerKey": "A", "answer": "A · 白色", "steps": ["規律為「黑、紅、紅、白」，每 4 顆為一個循環。", "計算週期：$40 \\div 4 = 10 \\dots 0$（剛好整除）。", "整除表示剛好是第 10 個循環的最後一顆。", "每個循環的最後一顆色球是「白色」，因此第 40 顆色球是白色。"], "insight": "整除看週期的最後一個！週期為 (黑, 紅, 紅, 白)，最後一個就是白色。", "trap": {"code": "TRAP_CYCLE_ZERO", "text": "整除是週期的最後一個，切勿誤當成第 1 個。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_balls.png"},
  {"id": "EX_ZHONGXIAO_P04", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 五、規律 第4題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "小安排列梯形圖卡，並在梯形的邊上各放一些鈕扣（圖1有5顆、圖2有8顆、圖3有11顆）。觀察圖形，排列圖 9 需要用到幾顆鈕扣？", "options": ["A. 29 顆", "B. 26 顆", "C. 32 顆", "D. 35 顆"], "answerKey": "A", "answer": "A · 29 顆", "steps": ["觀察鈕扣數量規律：", "圖1：5顆", "圖2：$5 + 3 = 8$顆（增加 3 顆）", "圖3：$8 + 3 = 11$顆（增加 3 顆）", "每增加 1 個梯形圖卡，多用 3 顆鈕扣，公差為 3。", "鈕扣數通式：$5 + 3 \\times (n - 1) = 3n + 2$。", "當 $n = 9$ 時：$3 \\times 9 + 2 = 27 + 2 = 29$（顆）。"], "insight": "等差數列通式：$a_n = a_1 + (n-1)d = 5 + (9-1) \\times 3 = 5 + 24 = 29$ 顆。", "trap": {"code": "TRAP_N_MINUS_ONE", "text": "注意是 9-1=8 個公差，不要誤乘成 3 × 9 = 27。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_buttons.png"},
  {"id": "EX_ZHONGXIAO_P05", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 五、規律 第5題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "遊覽車有 30 個座位，左邊雙人座（靠窗為 2,5,8...，靠走道為 3,6,9...），右邊個人座（靠窗為 1,4,7...）。請問第 26 號座位是個人座還是雙人座？是靠窗還是靠走道？", "options": ["A. 雙人座，靠窗", "B. 雙人座，靠走道", "C. 個人座，靠窗", "D. 個人座，靠走道"], "answerKey": "A", "answer": "A · 雙人座，靠窗", "steps": ["每排有 3 個座位：", "除以 3 的餘數規律：", "餘數 1（1, 4, 7, 10...）：右邊個人座，靠窗。", "餘數 2（2, 5, 8, 11...）：左邊雙人座，靠窗。", "整除餘 0（3, 6, 9, 12...）：左邊雙人座，靠走道。", "計算 26 號的位置：$26 \\div 3 = 8 \\dots 2$。", "餘數為 2，對應左邊「雙人座」，且位置為「靠窗」。"], "insight": "$26 \\div 3 = 8 \\dots 2$。餘 2 就是第 1 排的 2 號：在雙人座靠窗！", "trap": {"code": "TRAP_SEAT_MOD", "text": "注意每排是 3 個座位，以除以 3 的餘數分類。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_bus.png"},
  {"id": "EX_ZHONGXIAO_D01", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 六、做做看 第1題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "找出在 300 到 500 以內，16 和 20 的所有公倍數：", "options": ["A. 320、400、480", "B. 320、360、400、480", "C. 300、380、460", "D. 320、400"], "answerKey": "A", "answer": "A · 320、400、480", "steps": ["求 16 與 20 的最小公倍數：", "$16 = 4 \\times 4$，$20 = 4 \\times 5$。", "$\\text{lcm}(16, 20) = 4 \\times 4 \\times 5 = 80$。", "所有公倍數皆為 80 的倍數：$80, 160, 240, 320, 400, 480, 560...$", "介於 300 到 500 之間的公倍數為：320、400、480。"], "insight": "最小公倍數是 80。在 300~500 內有 $80\\times 4=320, 80\\times 5=400, 80\\times 6=480$。", "trap": {"code": "TRAP_RANGE", "text": "注意 360 不是 16 的倍數，公倍數必須是 80 的倍數。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p2.png"},
  {"id": "EX_ZHONGXIAO_D02", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 六、做做看 第2題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "媽媽出國旅行，帶 6 件上衣，4 件褲子和 3 套套裝，上衣和褲子可以任意搭配，但套裝不能拆開且不用搭配上衣和褲子。媽媽有幾種穿搭的組合？", "options": ["A. 27 種", "B. 24 種", "C. 72 種", "D. 33 種"], "answerKey": "A", "answer": "A · 27 種穿搭組合", "steps": ["分類討論穿搭方式：", "類別一（上衣＋褲子）：上衣 6 件任意搭配褲子 4 件，由乘法原理得 $6 \\times 4 = 24$ 種穿法。", "類別二（套裝）：套裝不用拆開也不需搭配，直接穿整套，有 3 種穿法。", "加法原理：兩種穿搭方式互斥，總穿法 $= 24 + 3 = 27$（種）。"], "insight": "分類用加法，分步用乘法：$(6 \\times 4) + 3 = 24 + 3 = 27$ 種組合！", "trap": {"code": "TRAP_SUIT_COMBINE", "text": "切勿將套裝也乘進去（6 × 4 × 3 = 72 是錯的），套裝是獨立整套穿著。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p2.png"},
  {"id": "EX_ZHONGXIAO_D03", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 六、做做看 第3題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "媽媽用 800 毫升的冬瓜茶、60 毫升的檸檬汁調配出檸檬冬瓜茶。姐姐想調配出口感一樣的檸檬冬瓜茶，用 160 毫升的冬瓜茶需要加幾毫升的檸檬汁？", "options": ["A. 12 毫升", "B. 10 毫升", "C. 15 毫升", "D. 20 毫升"], "answerKey": "A", "answer": "A · 12 毫升", "steps": ["冬瓜茶與檸檬汁的比例保持不變：$800 : 60$。", "姐姐使用的冬瓜茶為 160 毫升，縮小的倍數為：$800 \\div 160 = 5$（即縮小為原來的 $\\frac{1}{5}$）。", "檸檬汁也必須同除以 5：$60 \\div 5 = 12$（毫升）。"], "insight": "比例式：$800 : 60 = 160 : x \\Rightarrow x = 60 \\times \\frac{160}{800} = 60 \\div 5 = 12$ 毫升。", "trap": {"code": "TRAP_SCALE_FACTOR", "text": "注意冬瓜茶是 800 變 160（除以 5），檸檬汁 60 除以 5 是 12。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p2.png"},
  {"id": "EX_ZHONGXIAO_D04", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 六、做做看 第4題", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "小靜用一條繩子圍出一個長和寬的比為 3：5 的長方形，已知這個長方形的長是 2.7 公尺，它的周長是多少公尺？", "options": ["A. 14.4 公尺", "B. 7.2 公尺", "C. 12.8 公尺", "D. 18 公尺"], "answerKey": "A", "answer": "A · 14.4 公尺", "steps": ["題目給定「長和寬的比為 3：5」，對應長為 3 份、寬為 5 份。", "已知長是 2.7 公尺，每 1 份的長度為：$2.7 \\div 3 = 0.9$（公尺）。", "寬的長度為 5 份：$5 \\times 0.9 = 4.5$（公尺）。", "計算長方形周長：$(\\text{長} + \\text{寬}) \\times 2 = (2.7 + 4.5) \\times 2 = 7.2 \\times 2 = 14.4$（公尺）。"], "insight": "周長總份數：$(3 + 5) \\times 2 = 16$ 份。每份 0.9 公尺，周長 $= 16 \\times 0.9 = 14.4$ 公尺。", "trap": {"code": "TRAP_PERIMETER_TIMES_2", "text": "求周長切記 (長+寬) 要乘以 2，不要只算出 7.2 公尺。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p2.png"},
  {"id": "EX_ZHONGXIAO_D05_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 六、做做看 第5題(1)", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "小丑漢堡套餐包含主餐、副餐和飲料：主餐 4 種和飲料 5 種各選 1 種；副餐 5 種（薯條、沙拉、蛋塔、蘋果派、QQ球）選 3 種。若大雄「一定選薯條和蛋塔」，他的套餐組合共有幾種選擇？", "options": ["A. 60 種", "B. 20 種", "C. 100 種", "D. 40 種"], "answerKey": "A", "answer": "A · 60 種選擇", "steps": ["分析各項目選擇數：", "主餐：共有 4 種選擇。", "飲料：共有 5 種選擇。", "副餐：需選 3 種，大雄已固定選了「薯條」與「蛋塔」2 種，因此只需在剩餘的 3 種副餐（沙拉、蘋果派、QQ球）中再挑選 1 種，副餐有 3 種選擇。", "依乘法原理計算總組合數：$4 \\times 3 \\times 5 = 60$（種）。"], "insight": "限定條件簡化法：副餐 5 選 3 且固定 2 個，等於剩下的 3 種選 1 種（3 種可能），$4 \\times 3 \\times 5 = 60$ 種。", "trap": {"code": "TRAP_COMBINATION_REMAIN", "text": "注意副餐已經挑了 2 種，只要再從剩下 3 種挑 1 種，副餐可能性是 3 種。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_burger.png"},
  {"id": "EX_ZHONGXIAO_D05_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 六、做做看 第5題(2)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題菜單（主餐 4 種、副餐 5 種、飲料 5 種），靜香點餐時，要從整張菜單中「只選 1 種」品項，共有幾種選擇？", "options": ["A. 14 種", "B. 100 種", "C. 20 種", "D. 9 種"], "answerKey": "A", "answer": "A · 14 種選擇", "steps": ["題目要求從菜單全部品項中「只選 1 種」單點。", "主餐有 4 種品項。", "副餐有 5 種品項。", "飲料有 5 種品項。", "加法原理：總品項數 $= 4 + 5 + 5 = 14$（種）。"], "insight": "只選 1 種是單選題，適用加法原理：$4 + 5 + 5 = 14$ 種。", "trap": {"code": "TRAP_ADD_OR_MUL", "text": "注意是「只選 1 種」單點，不是套餐搭配，要用加法不是乘法。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p2_burger.png"},
  {"id": "EX_ZHONGXIAO_A01", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第1題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "小盛用長 48 公分、寬 32 公分的長方形圖卡，拼成一張正方形的海報。拼成最小的正方形海報，邊長是幾公分？要有多少張長方形圖卡？", "options": ["A. 邊長 96 公分，需要 6 張", "B. 邊長 96 公分，需要 5 張", "C. 邊長 192 公分，需要 24 張", "D. 邊長 48 公分，需要 3 張"], "answerKey": "A", "answer": "A · 邊長 96 公分，需要 6 張圖卡", "steps": ["拼成正方形，邊長必須是 48 與 32 的公倍數，最小邊長求最小公倍數 $\\text{lcm}(48, 32)$。", "短除法求最小公倍數：$48 = 16 \\times 3$，$32 = 16 \\times 2$。$\\text{lcm}(48, 32) = 16 \\times 3 \\times 2 = 96$（公分）。", "計算長與寬各需要幾張：", "長邊排：$96 \\div 48 = 2$（張）", "寬邊排：$96 \\div 32 = 3$（張）", "總共需要圖卡張數：$2 \\times 3 = 6$（張）。"], "insight": "小拼大求 LCM：邊長 96 公分；張數是長張數乘寬張數 $2 \\times 3 = 6$ 張。", "trap": {"code": "TRAP_ADD_OR_MUL", "text": "張數是 2 × 3 = 6，不要誤加成 2 + 3 = 5。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A02", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第2題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "下圖是某年 7 月的月曆（7月1日是星期三），其中一部分被撕破了，請問 7 月 30 日是星期幾？", "options": ["A. 星期四", "B. 星期三", "C. 星期五", "D. 星期二"], "answerKey": "A", "answer": "A · 星期四", "steps": ["由圖中可確認：7 月 1 日是星期三。", "計算 7 月 1 日到 7 月 30 日相差的天數：$30 - 1 = 29$（天）。", "每星期有 7 天，計算週期：$29 \\div 7 = 4$ 星期 $\\dots 1$ 天。", "星期三往後推 1 天，即為「星期四」。", "因此 7 月 30 日是星期四。"], "insight": "日期差除以 7：相隔 29 天，29 除以 7 餘 1。星期三再加 1 天就是星期四！", "trap": {"code": "TRAP_DATE_INTERVAL", "text": "天數差是 30 - 1 = 29 天，不要誤用 30 天去算（若用 30 ÷ 7 餘 2 會算錯）。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p3_calendar.png"},
  {"id": "EX_ZHONGXIAO_A03", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第3題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "一桶空桶子可以裝 $6\\frac{3}{4}$ 公升的水，將 $3\\frac{3}{5}$ 公升的水全部倒入空桶子裡。倒入的水是幾桶？", "options": ["A. $\\frac{8}{15}$ 桶", "B. $1\\frac{7}{8}$ 桶", "C. $\\frac{7}{15}$ 桶", "D. $\\frac{4}{5}$ 桶"], "answerKey": "A", "answer": "A · $\\frac{8}{15}$ 桶", "steps": ["以一滿桶容量 $6\\frac{3}{4}$ 公升為基準量，求 $3\\frac{3}{5}$ 公升占幾桶：$3\\frac{3}{5} \\div 6\\frac{3}{4}$。", "化為假分數：$3\\frac{3}{5} = \\frac{18}{5}$，$6\\frac{3}{4} = \\frac{27}{4}$。", "除法轉乘倒數：$\\frac{18}{5} \\times \\frac{4}{27}$。", "約分：18 與 27 同除以 9 得 2 與 3。", "計算：$\\frac{2 \\times 4}{5 \\times 3} = \\frac{8}{15}$（桶）。"], "insight": "比較量 $\\div$ 基準量：倒入的水少於一桶容量，答案必定小於 1，為 $\\frac{8}{15}$ 桶。", "trap": {"code": "TRAP_DIV_ORDER", "text": "注意基準量是一桶的容量，式子是 3又3/5 ÷ 6又3/4，不要顛倒。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A04", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第4題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "六年級畢業旅行 32 個男生和 24 個女生參加，住宿時每間人數要一樣多，且男、女生要分開住，每間人數最多是幾人？總共要訂幾間房間？", "options": ["A. 每間最多 8 人，共訂 7 間", "B. 每間最多 8 人，共訂 8 間", "C. 每間最多 4 人，共訂 14 間", "D. 每間最多 6 人，共訂 10 間"], "answerKey": "A", "answer": "A · 每間最多 8 人，總共要訂 7 間房間", "steps": ["每間人數必須能整除 32 與 24，求最大公因數 $\\gcd(32, 24)$。", "短除法：$32 = 8 \\times 4$，$24 = 8 \\times 3$，故最大公因數為 8，每間最多住 8 人。", "計算男女生房間數：", "男生：$32 \\div 8 = 4$（間）", "女生：$24 \\div 8 = 3$（間）", "總房間數：$4 + 3 = 7$（間）。"], "insight": "最大公因數 8 人；房間數為 $(32+24) \\div 8 = 56 \\div 8 = 7$ 間。", "trap": {"code": "TRAP_ROOM_SUM", "text": "房間總數是男生間數加女生間數 4 + 3 = 7 間。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A05", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第5題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "有一個平行四邊形，底是 20 公分，底和高的比是 4：5，面積是多少平方公分？", "options": ["A. 500 平方公分", "B. 250 平方公分", "C. 400 平方公分", "D. 100 平方公分"], "answerKey": "A", "answer": "A · 500 平方公分", "steps": ["底和高的比為 $4 : 5$。", "已知底為 20 公分，對應前項擴大 $20 \\div 4 = 5$ 倍。", "高為後項乘以 5：$5 \\times 5 = 25$（公分）。", "平行四邊形面積公式 $=$ 底 $\\times$ 高：$20 \\times 25 = 500$（平方公分）。"], "insight": "求出高為 25 公分後，面積 $=$ 底 $\\times$ 高 $= 20 \\times 25 = 500$ 平方公分。", "trap": {"code": "TRAP_TRIANGLE_DIV2", "text": "注意這是平行四邊形，不是三角形，面積公式不需要除以 2！"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A06", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第6題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "媽媽花了 496 元買了 $2\\frac{2}{3}$ 公斤的橘子，橘子 1 公斤賣多少元？", "options": ["A. 186 元", "B. 192 元", "C. 176 元", "D. 180 元"], "answerKey": "A", "answer": "A · 186 元", "steps": ["求 1 公斤價格（單價），列式為總價除以重量：$496 \\div 2\\frac{2}{3}$。", "化為假分數：$2\\frac{2}{3} = \\frac{8}{3}$。", "除法轉乘倒數：$496 \\times \\frac{3}{8}$。", "約分計算：$496 \\div 8 = 62$，$62 \\times 3 = 186$（元）。"], "insight": "$496 \\times \\frac{3}{8} = 62 \\times 3 = 186$ 元/公斤。", "trap": {"code": "TRAP_DIV_RECIPROCAL", "text": "注意 2又2/3 是 8/3，倒數是 3/8。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A07", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第7題", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "鹹酥雞店有兩種不同分量的鹹酥雞：大份賣 90 元，重量 210 公克；小份賣 60 元，重量 120 公克。買哪一種份量的鹹酥雞比較划算？", "options": ["A. 大份比較划算", "B. 小份比較划算", "C. 兩種一樣划算", "D. 無法比較"], "answerKey": "A", "answer": "A · 大份比較划算", "steps": ["方法一：計算每公克單價（價格 ÷ 重量）：", "大份每公克：$90 \\div 210 = \\frac{90}{210} = \\frac{3}{7} \\approx 0.4286$（元/公克）。", "小份每公克：$60 \\div 120 = 0.5$（元/公克）。", "因為 $0.43 < 0.5$，大份每公克價格較便宜，故大份較划算。", "方法二：計算每 1 元能買到幾公克（重量 ÷ 價格）：", "大份：$210 \\div 90 = \\frac{7}{3} \\approx 2.33$（公克/元）。", "小份：$120 \\div 60 = 2$（公克/元）。", "花同樣的 1 元，大份能買到更多公克，故大份划算。"], "insight": "單價比較：大份每克約 0.43 元，小份每克 0.5 元。大份便宜又划算！", "trap": {"code": "TRAP_UNIT_PRICE", "text": "單價越低越划算，勿看總價 90 元大於 60 元就以為小份便宜。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A08", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第8題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "1 英寸是 2.54 公分，琳琳想買一件洋裝，袖長 98.7 公分，大約是多少英寸？（用四捨五入法將商取概數到個位）", "options": ["A. 39 英寸", "B. 38 英寸", "C. 40 英寸", "D. 38.9 英寸"], "answerKey": "A", "answer": "A · 大約 39 英寸", "steps": ["計算英寸數：$98.7 \\div 2.54 = 9870 \\div 254$。", "直式除法計算到小數第一位：$9870 \\div 254 \\approx 38.85...$", "題目要求「四捨五入法取概數到個位」，觀察十分位數字 8。", "因為 $8 \\ge 5$，向個位進位，得大約 $39$（英寸）。"], "insight": "取概數到個位，直式必須除到十分位（8），進位得 39。", "trap": {"code": "TRAP_ROUNDING_UNIT", "text": "注意題目要求取到「個位」，不是小數第一位。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A09", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第9題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "紅線公車每 25 分開出一班，黃線公車每 30 分開出一班，上午 8 點 10 分這兩路公車同時開出，下一次同時開出是幾分鐘後？是上午幾時幾分開車？", "options": ["A. 150 分鐘後，上午 10 時 40 分", "B. 150 分鐘後，上午 10 時 10 分", "C. 75 分鐘後，上午 9 時 25 分", "D. 300 分鐘後，下午 1 時 10 分"], "answerKey": "A", "answer": "A · 150 分鐘後，上午 10 時 40 分開車", "steps": ["求兩公車同時開出的間隔時間，即求 25 與 30 的最小公倍數 $\\text{lcm}(25, 30)$。", "短除法：$25 = 5 \\times 5$，$30 = 5 \\times 6$，故 $\\text{lcm}(25, 30) = 5 \\times 5 \\times 6 = 150$（分鐘）。", "下一次同時開出是 150 分鐘後。", "換算時間：150 分鐘 $= 2$ 小時 30 分鐘。", "開車時刻：上午 8 時 10 分 $+ 2$ 小時 30 分鐘 $=$ 上午 10 時 40 分。"], "insight": "LCM 為 150 分鐘＝2小時30分。8:10 + 2:30 = 上午 10:40。", "trap": {"code": "TRAP_TIME_ADD", "text": "小心 150 分鐘是 2 小時 30 分鐘，不要算成 1 小時 50 分鐘。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_A10", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 七、應用題 第10題", "batch": "段考真題", "category": "小數除法", "level": 2, "difficulty": 2, "question": "教室內的桌子一張重 6.25 公斤，椅子一張重 1.5 公斤，一張椅子和幾張桌子重量一樣？", "options": ["A. 0.24 張", "B. 4.16 張", "C. 0.25 張", "D. 2.4 張"], "answerKey": "A", "answer": "A · 0.24 張桌子", "steps": ["題目問的是「一張椅子」和「幾張桌子」重量一樣，以桌子重量為基準量：$1.5 \\div 6.25$。", "小數除法計算：$1.5 \\div 6.25 = 150 \\div 625$。", "約分計算：$\\frac{150}{625} = \\frac{6}{25} = 0.24$（張）。"], "insight": "基準量判斷：「和幾張桌子重量一樣」以桌子為除數：$1.5 \\div 6.25 = 0.24$ 張。", "trap": {"code": "TRAP_BASE_QUANTITY", "text": "注意除數是桌子重 6.25，千萬不要算成 6.25 ÷ 1.5 ≈ 4.17。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p3.png"},
  {"id": "EX_ZHONGXIAO_S01_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 八、素養題 第1題(1)", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "爸爸的保險箱密碼是由 4 個數字組成，每個數字可由 0〜9 任選。爸爸已經設定第一個數字為 8。如果要設定剩下 3 個密碼，且「數字不可以重複」，他可以有幾種數字的組合？", "options": ["A. 504 種", "B. 720 種", "C. 648 種", "D. 1000 種"], "answerKey": "A", "answer": "A · 504 種組合", "steps": ["0〜9 共有 10 個數字，第一個數字固定為 8，剩餘可選的數字有 $10 - 1 = 9$ 個。", "剩下 3 個密碼位置，數字不可重複：", "第 2 個密碼有 9 種選擇；", "第 3 個密碼剩 8 種選擇；", "第 4 個密碼剩 7 種選擇。", "依乘法原理計算總組合數：$9 \\times 8 \\times 7 = 504$（種）。"], "insight": "排列數公式：從剩餘 9 個數字中選 3 個排列，$P(9, 3) = 9 \\times 8 \\times 7 = 504$ 種。", "trap": {"code": "TRAP_DIGIT_EXCLUDE", "text": "注意 8 已經被第 1 位使用，可選數字只剩 9 個。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p4_safe.png"},
  {"id": "EX_ZHONGXIAO_S01_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 八、素養題 第1題(2)", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "承上題（第一個數字為 8），如果爸爸想將這組 4 位數密碼設定為「5 的倍數」，且「數字可以重複」，他可以有幾種數字的組合？", "options": ["A. 200 種", "B. 100 種", "C. 90 種", "D. 180 種"], "answerKey": "A", "answer": "A · 200 種組合", "steps": ["一個整數是 5 的倍數，其末位數字（個位數，即第 4 個密碼）必須是 0 或 5（共 2 種選擇）。", "分析 4 個位置的選擇數（數字可重複）：", "第 1 個數字：已固定為 8（1 種選擇）。", "第 2 個數字：0〜9 任選，共 10 種選擇。", "第 3 個數字：0〜9 任選，共 10 種選擇。", "第 4 個數字：只能是 0 或 5，共 2 種選擇。", "依乘法原理計算總組合數：$1 \\times 10 \\times 10 \\times 2 = 200$（種）。"], "insight": "5 的倍數特徵：末位必為 0 或 5（2種）。中間兩位各自 10 種，故 $10 \\times 10 \\times 2 = 200$ 種。", "trap": {"code": "TRAP_DIGIT_REPEAT", "text": "這小題題目明確註明「數字可以重複」，每位皆有 10 種選擇。"}, "cropImage": "images/exams/EXAM_MID1/crop_zhongxiao_p4_safe.png"},
  {"id": "EX_ZHONGXIAO_S02_1", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 八、素養題 第2題(1)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "42 公里的馬拉松賽道，主辦單位由起點開始，每隔 3 公里處設置一個補給站，但在「起點和終點皆不設置」，共設置了幾個補給站？", "options": ["A. 13 個", "B. 14 個", "C. 15 個", "D. 12 個"], "answerKey": "A", "answer": "A · 13 個補給站", "steps": ["計算總間隔數：$42 \\div 3 = 14$（個間隔）。", "直線路線「起點和終點皆不設置」規律：站數 $=$ 間隔數 $- 1$。", "補給站數 $= 14 - 1 = 13$（個）。"], "insight": "兩端都不設：間隔數減 1，即 $14 - 1 = 13$ 個補給站。", "trap": {"code": "TRAP_NEITHER_END", "text": "注意頭尾都不設要減 1，不要直接回答間隔數 14。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p4.png"},
  {"id": "EX_ZHONGXIAO_S02_2", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 八、素養題 第2題(2)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題（每隔 3 公里設置補給站），從「第 3 個補給站」到「第 10 個補給站」，總間隔長多少公里？", "options": ["A. 21 公里", "B. 24 公里", "C. 18 公里", "D. 30 公里"], "answerKey": "A", "answer": "A · 21 公里", "steps": ["第 3 個補給站到第 10 個補給站之間共有：$10 - 3 = 7$（個間隔）。", "每個間隔長度為 3 公里。", "總長度 $= 7 \\times 3 = 21$（公里）。"], "insight": "站與站之間的間隔數是序號相減：$10 - 3 = 7$ 個間隔，$7 \\times 3 = 21$ 公里。", "trap": {"code": "TRAP_INTERVAL_DIFF", "text": "算距離是看間隔數 7，不要誤算成 8 個間隔。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p4.png"},
  {"id": "EX_ZHONGXIAO_S02_3", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 八、素養題 第2題(3)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "42 公里的馬拉松賽程中，如果要設置 8 個救護站，每個救護站間的距離一樣，且「在起點和終點皆有設置」。每個救護站的間隔要多少公里？", "options": ["A. 6 公里", "B. 5.25 公里", "C. 7 公里", "D. 5 公里"], "answerKey": "A", "answer": "A · 6 公里", "steps": ["起點和終點皆有設置 8 個救護站，則間隔數為：$8 - 1 = 7$（個間隔）。", "賽道全長為 42 公里。", "每個間隔的距離：$42 \\div 7 = 6$（公里）。"], "insight": "兩端都設時：間隔數 $=$ 站數 $- 1 = 8 - 1 = 7$。間隔距離 $= 42 \\div 7 = 6$ 公里。", "trap": {"code": "TRAP_TREE_DIVISOR", "text": "注意 8 個站只有 7 個間隔，切勿用 42 ÷ 8 = 5.25。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p4.png"},
  {"id": "EX_ZHONGXIAO_S02_4", "unitId": "EXAM_MID1", "school": "高雄市鳳山區忠孝國小", "source": "忠孝國小 114上 期中評量 八、素養題 第2題(4)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "主辦單位將參加馬拉松比賽的人分成 2 組，青年組和壯年組的人數比是 7：6，青年組有 210 人，請問比賽選手共有幾個人？", "options": ["A. 390 人", "B. 180 人", "C. 360 人", "D. 420 人"], "answerKey": "A", "answer": "A · 390 人", "steps": ["青年組占 7 份，人數為 210 人。", "計算每 1 份代表的人數：$210 \\div 7 = 30$（人）。", "總人數占的份數為：$7 + 6 = 13$（份）。", "比賽選手總人數：$13 \\times 30 = 390$（人）。\n（亦可先算壯年組 $6 \\times 30 = 180$ 人，相加 $210 + 180 = 390$ 人）。"], "insight": "總份數 $7 + 6 = 13$ 份。每份 30 人，總人數 $= 13 \\times 30 = 390$ 人。", "trap": {"code": "TRAP_TOTAL_SUM", "text": "注意題目問的是「比賽選手共有幾人」（總人數），不是只問壯年組人數 180 人。"}, "cropImage": "images/exams/EXAM_MID1/zhongxiao_p4.png"},
  {"id": "EX_PUREN_01", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第1題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "下列哪一個不是「$3 \\times 5 \\times 5 \\times 7$」的因數？", "options": ["A. $3 \\times 3 \\times 5$", "B. $3 \\times 5 \\times 5 \\times 7$", "C. $3 \\times 7$", "D. $5 \\times 5$"], "answerKey": "A", "answer": "A · $3 \\times 3 \\times 5$", "steps": ["原數的標準分解式為 $3^1 \\times 5^2 \\times 7^1$。", "因數的質因數及其次方不可超過原數所包含的數量：", "選項 A 為 $3^2 \\times 5$，質因數 3 出現了 2 次，但原數只有一個 3，因此 A 不是原數的因數。", "選項 B 等於原數本身；選項 C 和 D 的質因數次方皆未超過原數，都是原數的因數。"], "insight": "因數檢驗法：質因數次數不能超過原數。原數只有一個 3，不可能有含兩個 3 的因數！", "trap": {"code": "TRAP_FACTOR_POWERS", "text": "注意因數中的質因數次方不能多於被除數。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_02", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第2題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "19 和 17 兩數互質，所以 19 和 17 的最小公倍數是多少？", "options": ["A. $19 + 17$", "B. $19 - 17$", "C. $19 \\times 17$", "D. $19 \\div 17$"], "answerKey": "C", "answer": "C · $19 \\times 17$", "steps": ["兩數互質表示它們的最大公因數為 1。", "互質兩數的最小公倍數等於兩數的乘積。", "因此 19 和 17 的最小公倍數是 $19 \\times 17 = 323$。"], "insight": "互質數性質：$\\gcd(a, b) = 1 \\implies \\text{lcm}(a, b) = a \\times b$。", "trap": {"code": "TRAP_COPRIME_LCM", "text": "最小公倍數是相乘，不要選成相加。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_03", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第3題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "下列哪個選項的比值與 $6:8$ 的比值相等？", "options": ["A. $(6 + 3) : (8 + 3)$", "B. $(6 \\times 9) : (8 \\times 9)$", "C. $(6 - 5) : (8 - 5)$", "D. $(2 \\div 6) : (2 \\div 8)$"], "answerKey": "B", "answer": "B · $(6 \\times 9) : (8 \\times 9)$", "steps": ["根據等比性質：比的前項與後項同時乘以（或除以）同一個不為 0 的數，比值保持不變。", "選項 B 前後項同乘以 9，比值仍為 $\\frac{6}{8} = \\frac{3}{4}$。", "選項 A 同加 3 得 $9:11$，比值為 $\\frac{9}{11} \\neq \\frac{3}{4}$。", "選項 C 同減 5 得 $1:3$，比值為 $\\frac{1}{3} \\neq \\frac{3}{4}$。"], "insight": "等比核心：只有「同乘」或「同除」同一個非零數，比值才不變；同加同減比值必改變！", "trap": {"code": "TRAP_RATIO_ADD_SUB", "text": "小學超常見迷思：以為前項後項同加同減比值不變，這是完全錯誤的。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_04", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第4題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "$88 \\div 0.8 = \\text{甲}$，$88 \\times 0.8 = \\text{乙}$，甲和乙的關係為何？", "options": ["A. 甲 = 乙", "B. 甲 > 乙", "C. 甲 < 乙", "D. 不一定"], "answerKey": "B", "answer": "B · 甲 > 乙", "steps": ["計算甲：$88 \\div 0.8 = 880 \\div 8 = 110$。", "計算乙：$88 \\times 0.8 = 70.4$。", "因為 $110 > 70.4$，所以甲 $>$ 乙。", "（亦可由數感判斷：正數除以小於 1 的數會變大 $>88$；正數乘以小於 1 的數會變小 $<88$，故商甲必大於積乙）。"], "insight": "數感秒殺：除以 0.8 結果 $>88$；乘以 0.8 結果 $<88$，所以甲絕對大於乙。", "trap": {"code": "TRAP_DIV_MUL_DECIMAL", "text": "分清楚除以小數會放大、乘以純小數會縮小。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_05", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第5題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "利用 2、3、7 這 3 張數字卡排成數字不重複的二位數，可以排成幾個質數？", "options": ["A. 1 個", "B. 2 個", "C. 3 個", "D. 4 個"], "answerKey": "C", "answer": "C · 3 個", "steps": ["列出用 2、3、7 排出所有不重複的二位數：", "十位是 2：23、27", "十位是 3：32、37", "十位是 7：72、73", "檢驗是否為質數：", "23：質數（符合）", "27：合數（$3 \\times 9 = 27$）", "32：合數（偶數）", "37：質數（符合）", "72：合數（偶數）", "73：質數（符合）", "質數共有 23、37、73，共 3 個。"], "insight": "所有偶數（32, 72）必為合數；27 數字和 2+7=9 必為合數；剩下 23、37、73 全是質數，共 3 個！", "trap": {"code": "TRAP_27_NOT_PRIME", "text": "注意 27 是合數（3×9=27），不要把 27 當成質數。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_06", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第6題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "$95.6 \\div 0.18$ 的答案和下面何者相同？", "options": ["A. $956 \\div 18$", "B. $9.56 \\div 1.8$", "C. $956 \\div 0.018$", "D. $956 \\div 1.8$"], "answerKey": "D", "answer": "D · $956 \\div 1.8$", "steps": ["根據除法等價性質：被除數與除數同時乘以或除以相同非零數，商不變。", "將 $95.6 \\div 0.18$ 的被除數與除數同時乘以 10：", "被除數：$95.6 \\times 10 = 956$", "除數：$0.18 \\times 10 = 1.8$", "算式變為 $956 \\div 1.8$，商保持完全相同。"], "insight": "小數點同步平移原則：被除數向右移一位(956)，除數也必須向右移一位(1.8)。", "trap": {"code": "TRAP_DECIMAL_SHIFT", "text": "小心選項 A 是被除數乘 10 但除數乘 100，移位數不同會改變商。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_07", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第7題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "櫻木利用五子棋排出 4 個圖樣（圖一有 1 顆、圖二有 4 顆、圖三有 9 顆、圖四有 16 顆），若按照這樣的規則排列，圖八需要用到幾顆五子棋？", "options": ["A. 49 顆", "B. 64 顆", "C. 81 顆", "D. 100 顆"], "answerKey": "B", "answer": "B · 64 顆", "steps": ["觀察各圖形五子棋數量：", "圖一：$1 \\times 1 = 1$", "圖二：$2 \\times 2 = 4$", "圖三：$3 \\times 3 = 9$", "圖四：$4 \\times 4 = 16$", "規律為完全平方數：第 n 個圖需要 $n \\times n$ 顆五子棋。", "圖八需要五子棋數：$8 \\times 8 = 64$（顆）。"], "insight": "正方形數規律：邊長為 n 的實心正方形，總棋子數為 $n^2$。$8^2 = 64$。", "trap": {"code": "TRAP_SQUARE_NUM", "text": "圖八是 8×8=64，不要看成圖七的 49 或圖九的 81。"}, "cropImage": "images/exams/EXAM_MID1/crop_puren_p1_q7.png"},
  {"id": "EX_PUREN_08", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第8題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "下列哪一個比和 $44 : 36$ 是相等的比？", "options": ["A. $\\frac{1}{11}$ : $\\frac{1}{9}$", "B. 1.21 : 0.99", "C. 24 : 16", "D. 6 : 3.5"], "answerKey": "B", "answer": "B · 1.21 : 0.99", "steps": ["將 $44 : 36$ 化為最簡整數比：$44 \\div 4 : 36 \\div 4 = 11 : 9$。", "檢驗各選項：", "A. $\\frac{1}{11} : \\frac{1}{9} = 9 : 11 \\neq 11 : 9$。", "B. $1.21 : 0.99 = 121 : 99$，同除以 11 得 $11 : 9$（相等！）。", "C. $24 : 16 = 3 : 2$。", "D. $6 : 3.5 = 12 : 7$。"], "insight": "$1.21 : 0.99$ 擴大 100 倍得 $121 : 99$，除以 11 即為 $11 : 9$，與 $44 : 36$ 完全相等。", "trap": {"code": "TRAP_RECIPROCAL_RATIO", "text": "注意分數比 1/11 : 1/9 交叉相乘後是 9:11，項順序反了。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_09", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第9題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "公園裡有一塊小空地的長和寬分別為 126 公分、105 公分，要鋪上大小相同的正方形地磚（邊長的公分數是整數），且剛好全部鋪滿，至少需要幾塊地磚？", "options": ["A. 11 塊", "B. 21 塊", "C. 30 塊", "D. 35 塊"], "answerKey": "C", "answer": "C · 30 塊", "steps": ["要使地磚塊數「至少」，正方形地磚的邊長必須「最大」，即求 126 與 105 的最大公因數 $\\gcd(126, 105)$。", "短除法求最大公因數：$126 = 21 \\times 6$，$105 = 21 \\times 5$。6 與 5 互質，故最大邊長為 21 公分。", "計算長與寬各鋪幾塊地磚：", "長邊需鋪：$126 \\div 21 = 6$（塊）", "寬邊需鋪：$105 \\div 21 = 5$（塊）", "總共至少需要地磚：$6 \\times 5 = 30$（塊）。"], "insight": "塊數最少 $\\implies$ 邊長最大 (GCD=21)。地磚總塊數 $= 6 \\times 5 = 30$ 塊。", "trap": {"code": "TRAP_GCD_VS_TILES", "text": "小心選項 21 是地磚邊長，題目問的是地磚塊數 30 塊。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_10", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第10題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "小葵帶了 3 件短袖、2 件長袖，和 4 件褲子、2 件裙子去畢業旅行。小葵想穿短袖，請問上半身搭配下半身有幾種搭配組合？", "options": ["A. 16 種", "B. 18 種", "C. 24 種", "D. 48 種"], "answerKey": "B", "answer": "B · 18 種", "steps": ["分析上半身與下半身的選擇數：", "上半身：題目限定「想穿短袖」，短袖有 3 件，故上半身有 3 種選擇。", "下半身：有 4 件褲子和 2 件裙子，任選一件穿著，下半身共有 $4 + 2 = 6$ 種選擇。", "依乘法原理計算總穿搭組合數：$3 \\times 6 = 18$（種）。"], "insight": "限定短袖（3種），下半身褲+裙（4+2=6種），搭配組合 $= 3 \\times 6 = 18$ 種。", "trap": {"code": "TRAP_RESTRICTION", "text": "注意限定穿短袖，長袖的 2 件不計入上半身選擇。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_11", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 一、選擇題 第11題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "下列哪一個敘述是正確的？", "options": ["A. 1~20 中，有 9 個質數。", "B. 6 是 18 的因數，也是 18 的質因數。", "C. 1~10 的整數中，只有 4、6、8、9、10 五個是合數，其餘都是質數。", "D. 97 是質數。"], "answerKey": "D", "answer": "D · 97 是質數", "steps": ["檢驗各選項：", "A. 1~20 的質數有 2, 3, 5, 7, 11, 13, 17, 19，共 8 個（非 9 個，錯誤）。", "B. 6 是合數（$6=2\\times 3$），質因數必須本身是質數，故 6 不是質因數（錯誤）。", "C. 1 既不是質數也不是合數，扣除合數後剩下的「其餘」包含了 1，並非全為質數（錯誤）。", "D. 97 在 100 以內除了 1 和 97 外沒有其他因數，是質數（正確！）。"], "insight": "97 是 100 以內最大的質數！記住 1 不是質數、質因數必須是質數。", "trap": {"code": "TRAP_PRIME_CONCEPTS", "text": "1 既不是質數也不是合數；合數絕對不能叫做質因數。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_B1", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 二、填入符號 (A)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "觀察除法算式，填入 >、=、<：$5\\frac{1}{2} \\div \\frac{5}{6}$ □ $5\\frac{1}{2}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "A", "answer": "A · >", "steps": ["除數為 $\\frac{5}{6} < 1$。", "正數除以小於 1 的數，商會大於被除數。", "因此左式大於右式，填入「$>$」。"], "insight": "除以真分數結果變大，填 >。", "trap": {"code": "TRAP_DIV_SIZE", "text": "除數小於 1，商大於被除數。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_B2", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 二、填入符號 (B)", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "觀察除法算式，填入 >、=、<：$4.6 \\div 4.6$ □ $4.6$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["左式：$4.6 \\div 4.6 = 1$。", "右式：$4.6$。", "因為 $1 < 4.6$，填入「$<$」。"], "insight": "任何非零數除以自己等於 1。$1 < 4.6$ 秒殺！", "trap": {"code": "TRAP_DIV_SELF", "text": "左式算出來是 1，不是 0 也不等於 4.6。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_B3", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 二、填入符號 (C)", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "觀察除法算式，填入 >、=、<：$0.9 \\div 0.03$ □ $0.9$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "A", "answer": "A · >", "steps": ["除數為 $0.03 < 1$。", "計算左式：$0.9 \\div 0.03 = 90 \\div 3 = 30$。", "因為 $30 > 0.9$，填入「$>$」。"], "insight": "除以 0.03 等於擴大 $\\frac{100}{3}$ 倍，30 遠大於 0.9。", "trap": {"code": "TRAP_DECIMAL_DIV", "text": "除以純小數商大於被除數。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_B4", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 二、填入符號 (D)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "觀察除法算式，填入 >、=、<：$3\\frac{1}{2} \\div 1\\frac{3}{4}$ □ $3\\frac{1}{2}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["除數為 $1\\frac{3}{4} > 1$。", "正數除以大於 1 的數，商小於被除數。", "計算左式：$\\frac{7}{2} \\div \\frac{7}{4} = 2$。$2 < 3.5$。", "因此填入「$<$」。"], "insight": "除數大於 1，商小於被除數，填 <。", "trap": {"code": "TRAP_DIV_GREATER_1", "text": "除數為帶分數大於 1，商必變小。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_B5", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 二、填入符號 (E)", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "觀察除法算式，填入 >、=、<：$8\\frac{2}{5} \\div 1$ □ $8\\frac{2}{5}$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "C", "answer": "C · =", "steps": ["任何數除以 1 都等於原數。", "左右兩邊完全相等，填入「$=$」。"], "insight": "除以 1 數值完全不變。", "trap": {"code": "TRAP_DIV_ONE", "text": "注意除以 1 數值不變。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_B6", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 二、填入符號 (F)", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "觀察除法算式，填入 >、=、<：$0.26 \\div 1.005$ □ $0.26$", "options": ["A. >", "B. <", "C. =", "D. 無法比較"], "answerKey": "B", "answer": "B · <", "steps": ["除數為 $1.005 > 1$。", "正數除以大於 1 的數，商會小於被除數。", "因此左式小於右式，填入「$<$」。"], "insight": "雖然 1.005 只比 1 大一點點，但只要除數 $>1$，商就必定小於被除數！", "trap": {"code": "TRAP_NEAR_ONE", "text": "除數 1.005 > 1，不要誤以為等於。"}, "cropImage": "images/exams/EXAM_MID1/puren_p1.png"},
  {"id": "EX_PUREN_F01_1", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第1題(1)", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "火車座位號碼配置（左邊單號：靠窗 1,5.. 靠走道 3,7..；右邊雙號：靠走道 4,8.. 靠窗 2,6..）。曉彥車票座位號碼是 39 號，她的座位是在單號還是雙號？靠窗還是靠走道？", "options": ["A. 單號，靠走道", "B. 單號，靠窗", "C. 雙號，靠走道", "D. 雙號，靠窗"], "answerKey": "A", "answer": "A · 單號，靠走道", "steps": ["39 是奇數，位於左邊「單號」。", "每排有 4 個號碼，計算排數與餘數：$39 \\div 4 = 9 \\dots 3$。", "餘數為 3，對照第 1 排中除以 4 餘 3 的號碼為 3 號。", "由座位圖可知 3 號位於左邊「靠走道」。", "因此 39 號是在「單號，靠走道」。"], "insight": "$39 \\div 4 = 9 \\dots 3$。餘 3 對應第 1 排的 3 號，在單號靠走道！", "trap": {"code": "TRAP_TRAIN_SEAT", "text": "注意單號靠窗是餘 1（1, 5, 9...），靠走道是餘 3（3, 7, 11...）。"}, "cropImage": "images/exams/EXAM_MID1/crop_puren_p2_seats.png"},
  {"id": "EX_PUREN_F01_2", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第1題(2)", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "承上題，坐在曉彥正前方（上一排同一個位置）的座位號碼是幾號？", "options": ["A. 35 號", "B. 37 號", "C. 38 號", "D. 43 號"], "answerKey": "A", "answer": "A · 35 號", "steps": ["每往上一排，同位置的座位號碼減少 4（每排 4 個座位）。", "正前方座位號碼：$39 - 4 = 35$（號）。"], "insight": "同側同位置前後排號碼相差 4：$39 - 4 = 35$ 號。", "trap": {"code": "TRAP_ROW_DIFF", "text": "注意火車是一排 4 個號碼，正前方號碼要減 4。"}, "cropImage": "images/exams/EXAM_MID1/crop_puren_p2_seats.png"},
  {"id": "EX_PUREN_F02", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第2題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "道路長 100 公尺，在路一側每五公尺種一棵樹，且道路首尾都不種，共種幾棵樹？", "options": ["A. 19 棵", "B. 20 棵", "C. 21 棵", "D. 18 棵"], "answerKey": "A", "answer": "A · 19 棵樹", "steps": ["計算間隔數：$100 \\div 5 = 20$（個間隔）。", "「首尾都不種」規律：樹木棵數 $=$ 間隔數 $- 1$。", "棵數 $= 20 - 1 = 19$（棵）。"], "insight": "兩端都不種：棵數 $=$ 間隔數 $- 1 = 20 - 1 = 19$ 棵。", "trap": {"code": "TRAP_TREE_NEITHER", "text": "首尾都不種要減 1，切勿直接回答間隔數 20。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F03", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第3題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "阿暐花 120 元買了一盒水彩，剛好用去所有錢的 $\\frac{6}{11}$，阿暐原有幾元？", "options": ["A. 220 元", "B. 200 元", "C. 240 元", "D. 180 元"], "answerKey": "A", "answer": "A · 220 元", "steps": ["已知基準量的分率對應量為 120 元，求基準量（原有錢數）：$120 \\div \\frac{6}{11}$。", "除法轉乘倒數：$120 \\times \\frac{11}{6}$。", "計算：$(120 \\div 6) \\times 11 = 20 \\times 11 = 220$（元）。"], "insight": "基準量 $=$ 比較量 $\\div$ 分率：$120 \\div \\frac{6}{11} = 220$ 元。", "trap": {"code": "TRAP_BASE_AMOUNT", "text": "求原有全部錢數要用除法，不要乘 6/11。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F04", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第4題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "香香想買芭樂，甲店 7 公斤 260 元，乙店 3 公斤 112 元，丙店 5 公斤 186 元，哪一家賣的芭樂最便宜？", "options": ["A. 甲店", "B. 乙店", "C. 丙店", "D. 三家一樣便宜"], "answerKey": "A", "answer": "A · 甲店", "steps": ["計算各店每公斤平均單價（金額 ÷ 公斤數）：", "甲店：$260 \\div 7 \\approx 37.14$（元/公斤）。", "乙店：$112 \\div 3 \\approx 37.33$（元/公斤）。", "丙店：$186 \\div 5 = 37.2$（元/公斤）。", "比較大小：$37.14 < 37.20 < 37.33$。", "因此甲店賣得最便宜。"], "insight": "單價比較：甲店 37.14元，丙店 37.2元，乙店 37.33元。甲店最便宜！", "trap": {"code": "TRAP_UNIT_PRICE", "text": "注意算到小數第二位精確比較：37.14 < 37.20。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F05", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第5題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "請列出相等的比：$\\frac{1}{8} : (\\quad) = 7 : 8$", "options": ["A. $\\frac{1}{7}$", "B. $\\frac{7}{8}$", "C. $\\frac{1}{56}$", "D. 7"], "answerKey": "A", "answer": "A · $\\frac{1}{7}$", "steps": ["設空格為 $x$，則比值為 $\\frac{\\frac{1}{8}}{x} = \\frac{7}{8}$。", "等式兩邊交叉相乘：$7 \\times x = \\frac{1}{8} \\times 8 = 1$。", "解出 $x$：$x = 1 \\div 7 = \\frac{1}{7}$。", "檢驗：$\\frac{1}{8} : \\frac{1}{7} = \\frac{1}{8} \\times 56 : \\frac{1}{7} \\times 56 = 7 : 8$，完全正確。"], "insight": "分數比快速法：$\\frac{1}{8} : \\frac{1}{7} = 7 : 8$，秒填 $\\frac{1}{7}$！", "trap": {"code": "TRAP_FRAC_RATIO", "text": "注意分母交叉相乘：1/8 : 1/7 = 7:8，不要填 1/56。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F06", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第6題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "有 40 位小朋友排成一橫列舉宣導標語牌，相鄰兩位小朋友的間隔長都是 0.8 公尺。從「第 8 位」到「第 20 位」小朋友的總間隔長是幾公尺？", "options": ["A. 9.6 公尺", "B. 10.4 公尺", "C. 8.8 公尺", "D. 16 公尺"], "answerKey": "A", "answer": "A · 9.6 公尺", "steps": ["計算第 8 位到第 20 位小朋友之間的間隔數：$20 - 8 = 12$（個間隔）。", "每個間隔長度為 0.8 公尺。", "總間隔長度：$12 \\times 0.8 = 9.6$（公尺）。"], "insight": "間隔數等於座號差：$20 - 8 = 12$ 個間隔。$12 \\times 0.8 = 9.6$ 公尺。", "trap": {"code": "TRAP_INTERVAL_COUNT", "text": "算距離是乘間隔數 12，不要誤加 1 算成 13 個間隔。"}, "cropImage": "images/exams/EXAM_MID1/crop_puren_p2_banner.png"},
  {"id": "EX_PUREN_F07_1", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第7題(1)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "學校裡有一個邊長 180 公分的正方體裝置藝術，想要做成邊長 6 公分的正方體吊飾。裝置藝術和吊飾「邊長的比值」是多少？", "options": ["A. 30", "B. $\\frac{1}{30}$", "C. 900", "D. 3"], "answerKey": "A", "answer": "A · 30", "steps": ["裝置藝術邊長為 180 公分，吊飾邊長為 6 公分。", "邊長比為 $180 : 6$。", "比值 $=$ 前項 $\\div$ 後項：$180 \\div 6 = 30$。"], "insight": "邊長縮小為 $\\frac{1}{30}$，裝置藝術對吊飾的比值即為 30。", "trap": {"code": "TRAP_RATIO_ORDER", "text": "注意是「裝置藝術和吊飾」的比值，是 180÷6=30，不要顛倒成 1/30。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F07_2", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第7題(2)", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "承上題，裝置藝術和吊飾「面積的最簡整數比」是多少？", "options": ["A. 900 : 1", "B. 30 : 1", "C. 27000 : 1", "D. 360 : 1"], "answerKey": "A", "answer": "A · 900 : 1", "steps": ["相似圖形的表面積比等於邊長的平方比。", "邊長比為 $30 : 1$。", "面積比為 $30^2 : 1^2 = 900 : 1$。", "（亦可用單面面積計算：$180 \\times 180 = 32400$，$6 \\times 6 = 36$。$32400 : 36 = 900 : 1$）。"], "insight": "面積比等於長度比的平方：$30^2 : 1^2 = 900 : 1$。（若是體積比則是立方比 27000:1）。", "trap": {"code": "TRAP_AREA_RATIO_SQUARE", "text": "面積比要平方，不要誤填邊長比 30:1 或體積比 27000:1。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F08", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第8題", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "媽媽用 1 公升蜂蜜、2 公升檸檬汁、10 公升紅茶的比例調配蜂蜜檸檬茶。假如這次用了 0.3 公升的蜂蜜，那麼需要幾公升紅茶？這次調配好的蜂蜜檸檬茶共有幾公升？", "options": ["A. 需要 3 公升紅茶，共有 3.9 公升", "B. 需要 3 公升紅茶，共有 3.6 公升", "C. 需要 10 公升紅茶，共有 13 公升", "D. 需要 3 公升紅茶，共有 4.2 公升"], "answerKey": "A", "answer": "A · 需要 3 公升紅茶，共有 3.9 公升", "steps": ["配方比例：蜂蜜 : 檸檬汁 : 紅茶 $= 1 : 2 : 10$。", "蜂蜜使用量為 0.3 公升，放大倍數為 $0.3 \\div 1 = 0.3$ 倍。", "需要紅茶：$10 \\times 0.3 = 3$（公升）。", "需要檸檬汁：$2 \\times 0.3 = 0.6$（公升）。", "調配好的蜂蜜檸檬茶總量：$0.3 + 0.6 + 3 = 3.9$（公升）。\n（亦可由總比例計算：總份數 $1+2+10=13$ 份，$13 \\times 0.3 = 3.9$ 公升）。"], "insight": "總份數為 13 份，每份 0.3 公升，總重量 $= 13 \\times 0.3 = 3.9$ 公升；紅茶 $= 10 \\times 0.3 = 3$ 公升。", "trap": {"code": "TRAP_TOTAL_VOLUME", "text": "總量要加進檸檬汁 0.6 公升，不可只算蜂蜜加紅茶 3.3 公升。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F09", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第9題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "翔翔練習短除法時，不小心將水打翻污損了題目（被除數為 165 與 121，底端商為 15 與 11）。請問污損處的除數數字是多少？", "options": ["A. 11", "B. 15", "C. 13", "D. 7"], "answerKey": "A", "answer": "A · 11", "steps": ["短除法的關係為：被除數 $\\div$ 除數 $=$ 商。", "利用第 1 個數檢驗：$165 \\div 15 = 11$。", "利用第 2 個數檢驗：$121 \\div 11 = 11$。", "兩者皆吻合，故污損處的數字為 11。"], "insight": "$121 = 11 \\times 11$，底端商是 11，左側除數必然是 11！", "trap": {"code": "TRAP_SHORT_DIV", "text": "由 121 ÷ 11 = 11 直接秒殺。"}, "cropImage": "images/exams/EXAM_MID1/crop_puren_p2_division.png"},
  {"id": "EX_PUREN_F10", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第10題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "$42 = 2 \\times 3 \\times 7$，$70 = 2 \\times 5 \\times 7$。用質因數相乘回答：42 和 70 的最大公因數與最小公倍數分別是多少？", "options": ["A. 最大公因數 14 (2$\\times$ 7)，最小公倍數 210 (2$\\times$ 3$\\times$ 5$\\times$ 7)", "B. 最大公因數 7，最小公倍數 210", "C. 最大公因數 14，最小公倍數 420", "D. 最大公因數 2，最小公倍數 70"], "answerKey": "A", "answer": "A · 最大公因數 2$\\times$ 7 = 14，最小公倍數 2$\\times$ 3$\\times$ 5$\\times$ 7 = 210", "steps": ["最大公因數：取兩者共同質因數的最低次方：$2 \\times 7 = 14$。", "最小公倍數：取所有質因數的最高次方連乘：$2 \\times 3 \\times 5 \\times 7 = 210$。"], "insight": "共同質因數為 2 與 7，GCD = 14；全體質因數 2, 3, 5, 7 相乘，LCM = 210。", "trap": {"code": "TRAP_PRIME_GCD_LCM", "text": "注意質因數相乘格式：2×7 與 2×3×5×7。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F11", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第11題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "玩具特賣會原價與特惠價關係：原價 100元 特惠價 75元、原價 200元 特惠價 150元... (1)玩具原價和特惠價的比值是多少？ (2)特惠價是 375 元的玩具，原價是多少元？", "options": ["A. 比值 $\\frac{4}{3}$ (或 $1\\frac{1}{3}$)，原價 500 元", "B. 比值 $\\frac{3}{4}$，原價 500 元", "C. 比值 $\\frac{4}{3}$，原價 281 元", "D. 比值 0.75，原價 450 元"], "answerKey": "A", "answer": "A · 比值 $\\frac{4}{3}$ (或 $1\\frac{1}{3}$)，原價 500 元", "steps": ["(1) 原價和特惠價的比為 $100 : 75$。比值 $= 100 \\div 75 = \\frac{100}{75} = \\frac{4}{3} = 1\\frac{1}{3}$。", "(2) 設原價為 $x$，由比值關係列式：$\\frac{x}{375} = \\frac{4}{3}$。", "計算：$x = 375 \\times \\frac{4}{3} = 125 \\times 4 = 500$（元）。"], "insight": "打七五折：原價比特惠價為 $4:3$。特惠價 3 份是 375 元，每份 125 元，原價 4 份是 500 元。", "trap": {"code": "TRAP_RATIO_INV", "text": "注意是「原價和特惠價的比值」（前項除以後項），是 4/3 而非 3/4。"}, "cropImage": "images/exams/EXAM_MID1/crop_puren_p2_toy.png"},
  {"id": "EX_PUREN_F12", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第12題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "日圓 1 元可以兌換新臺幣 0.21 元，新臺幣 1000 元大約可以兌換多少日圓？（四捨五入法將商取概數到個位）", "options": ["A. 4762 日圓", "B. 4761 日圓", "C. 4760 日圓", "D. 210 日圓"], "answerKey": "A", "answer": "A · 大約 4762 日圓", "steps": ["以 0.21 元為 1 日圓，計算 1000 元能換幾日圓：$1000 \\div 0.21$。", "小數點移位：$100000 \\div 21$。", "直式除法計算到小數第一位：$100000 \\div 21 \\approx 4761.90...$", "題目要求「四捨五入法取概數到個位」，看十分位數字 9。", "因為 $9 \\ge 5$，向個位進位，得約 $4762$（日圓）。"], "insight": "直式除到十分位 9，向個位進位成 4762 日圓。", "trap": {"code": "TRAP_ROUNDING_ONES", "text": "十分位是 9 必須進位，不要忘記進位寫成 4761。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_F13", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 三、填填看 第13題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "將下列各數約成最簡分數：(1) $\\frac{75}{42} = (\\quad)$  (2) $8\\frac{51}{68} = (\\quad)$", "options": ["A. (1) $1\\frac{11}{14}$ (或 $\\frac{25}{14}$)，(2) $8\\frac{3}{4}$", "B. (1) $\\frac{25}{14}$，(2) $8\\frac{17}{24}$", "C. (1) $1\\frac{1}{2}$，(2) $8\\frac{3}{4}$", "D. (1) $\\frac{75}{42}$，(2) $8\\frac{51}{68}$"], "answerKey": "A", "answer": "A · (1) $1\\frac{11}{14}$ (或 $\\frac{25}{14}$)，(2) $8\\frac{3}{4}$", "steps": ["(1) $\\frac{75}{42}$：分子分母的最大公因數為 3。$\\frac{75 \\div 3}{42 \\div 3} = \\frac{25}{14} = 1\\frac{11}{14}$。", "(2) $8\\frac{51}{68}$：真分數部分 51 與 68 的最大公因數為 17。$\\frac{51 \\div 17}{68 \\div 17} = \\frac{3}{4}$，最簡帶分數為 $8\\frac{3}{4}$。"], "insight": "51 和 68 都能被 17 約分得 3/4！", "trap": {"code": "TRAP_PRIME_17", "text": "注意 51 與 68 是 17 的倍數，容易看不出來。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_A01", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第1題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "遊覽車每行駛 5.6 公里需耗油 1 公升，從普仁國小到劍湖山樂園需要行駛 206.08 公里，請問需要多少公升的汽油？", "options": ["A. 36.8 公升", "B. 36.5 公升", "C. 38.6 公升", "D. 35.8 公升"], "answerKey": "A", "answer": "A · 36.8 公升", "steps": ["以每公升行駛 5.6 公里為基準量，求 206.08 公里需油量：$206.08 \\div 5.6$。", "除數與被除數的小數點向右移一位：$2060.8 \\div 56$。", "直式除法計算：$2060.8 \\div 56 = 36.8$（公升）。"], "insight": "直式小數除法：$2060.8 \\div 56 = 36.8$ 公升。", "trap": {"code": "TRAP_DECIMAL_DIV", "text": "小數點只需右移一位，對齊商的小數點。"}, "cropImage": "images/exams/EXAM_MID1/puren_p2.png"},
  {"id": "EX_PUREN_A02", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第2題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "在 921 地震園區裡，有一個周長 450 公尺的圓形公園，在圓周上每 $7\\frac{1}{2}$ 公尺設一張休息椅，每張休息椅能坐 3 人，全部的休息椅共可供幾人坐？", "options": ["A. 180 人", "B. 60 人", "C. 183 人", "D. 177 人"], "answerKey": "A", "answer": "A · 180 人", "steps": ["圓形公園為封閉路線，椅子數量等於間隔數：$450 \\div 7\\frac{1}{2}$。", "計算椅子數：$450 \\div \\frac{15}{2} = 450 \\times \\frac{2}{15} = 30 \\times 2 = 60$（張）。", "每張椅子能坐 3 人，全部可供人數：$60 \\times 3 = 180$（人）。"], "insight": "封閉路線植樹問題：$450 \\div 7.5 = 60$ 張椅子。全部可坐 $60 \\times 3 = 180$ 人。", "trap": {"code": "TRAP_TREE_CLOSED", "text": "圓周封閉路線不需加 1 也不能減 1。"}, "cropImage": "images/exams/EXAM_MID1/puren_p3.png"},
  {"id": "EX_PUREN_A03", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第3題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "劍湖山樂園的飛天潛艇 G5，每 5 分鐘發一班車，從上午 9 時 30 分開始發出第 1 班車，小普在上午 11 時 15 分排到，請問他搭乘的是第幾班車？", "options": ["A. 第 22 班車", "B. 第 21 班車", "C. 第 20 班車", "D. 第 23 班車"], "answerKey": "A", "answer": "A · 第 22 班車", "steps": ["計算從 9 時 30 分到 11 時 15 分經過的總時間：", "11 時 15 分 $- 9$ 時 30 分 $= 1$ 小時 45 分鐘 $= 105$ 分鐘。", "計算發車間隔數：$105 \\div 5 = 21$（個間隔）。", "因為第 1 班車是在起點（0 分鐘）時發出，所以班車編號等於間隔數加 1：", "班次 $= 21 + 1 = 22$（第 22 班車）。"], "insight": "經過 105 分鐘有 21 個間隔。第 1 班在 0 分，所以是 $21 + 1 = 22$ 班車！", "trap": {"code": "TRAP_FIRST_BUS", "text": "注意 9:30 就發出「第 1 班車」，因此班次是間隔數 + 1，切勿直接回答 21。"}, "cropImage": "images/exams/EXAM_MID1/puren_p3.png"},
  {"id": "EX_PUREN_A04", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第4題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "晚會中舉辦勁歌樂舞大賽，參加的人數共有 72 位，其中女生和男生參加人數的比值是 $\\frac{5}{3}$，這次比賽的參賽者中，有幾位女生？", "options": ["A. 45 位", "B. 27 位", "C. 40 位", "D. 36 位"], "answerKey": "A", "answer": "A · 45 位女生", "steps": ["女生和男生人數的比值是 $\\frac{5}{3}$，表示 女生 : 男生 $= 5 : 3$。", "總人數占的份數為：$5 + 3 = 8$（份）。", "計算每 1 份的人數：$72 \\div 8 = 9$（人）。", "女生占 5 份：$5 \\times 9 = 45$（位）。\n（男生占 3 份：$3 \\times 9 = 27$ 位）。"], "insight": "按比例分配：女生占總人數的 $\\frac{5}{5+3} = \\frac{5}{8}$。$72 \\times \\frac{5}{8} = 45$ 人。", "trap": {"code": "TRAP_RATIO_SHARE", "text": "注意分母是總份數 5+3=8，不是直接 72 × 5/3。"}, "cropImage": "images/exams/EXAM_MID1/puren_p3.png"},
  {"id": "EX_PUREN_A05", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第5題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "旅行社請糕點店做了一些小蛋糕作為宵夜，小蛋糕數量比 100 個多，比 250 個少，每 15 個裝成一盒或每 20 個裝成一盒，都剛好裝完，這些小蛋糕最少有幾個？最多有幾個？", "options": ["A. 最少 120 個，最多 240 個", "B. 最少 120 個，最多 180 個", "C. 最少 60 個，最多 240 個", "D. 最少 105 個，最多 245 個"], "answerKey": "A", "answer": "A · 最少有 120 個，最多有 240 個", "steps": ["蛋糕數量必須是 15 和 20 的公倍數，先求最小公倍數 $\\text{lcm}(15, 20)$。", "短除法：$15 = 5 \\times 3$，$20 = 5 \\times 4$。$\\text{lcm}(15, 20) = 5 \\times 3 \\times 4 = 60$。", "15 和 20 的公倍數為 60 的倍數：$60, 120, 180, 240, 300...$", "限制範圍在「比 100 個多，比 250 個少」之間：", "符合條件的公倍數有：120、180、240。", "因此最少有 120 個，最多有 240 個。"], "insight": "LCM 為 60。在 100~250 之間的 60 倍數是 120, 180, 240。最少 120，最多 240。", "trap": {"code": "TRAP_RANGE_MIN_MAX", "text": "注意 60 小於 100 不合；300 大於 250 不合。"}, "cropImage": "images/exams/EXAM_MID1/puren_p3.png"},
  {"id": "EX_PUREN_A06", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第6題", "batch": "段考真題", "category": "分數除法", "level": 2, "difficulty": 2, "question": "各組比賽倒飲料。一桶可樂有 $3\\frac{3}{5}$ 公升，每 $\\frac{7}{10}$ 公升倒滿 1 瓶，最多可以倒滿多少瓶？剩下多少公升？", "options": ["A. 最多倒滿 5 瓶，剩下 $\\frac{1}{10}$ 公升", "B. 最多倒滿 5 瓶，剩下 $\\frac{1}{7}$ 公升", "C. 最多倒滿 5 瓶，剩下 0.2 公升", "D. 最多倒滿 6 瓶，剩下 0 公升"], "answerKey": "A", "answer": "A · 最多倒滿 5 瓶，剩下 $\\frac{1}{10}$ 公升 (或 0.1 公升)", "steps": ["計算可倒滿瓶數：$3\\frac{3}{5} \\div \\frac{7}{10} = \\frac{18}{5} \\times \\frac{10}{7} = \\frac{36}{7} = 5\\frac{1}{7}$（瓶）。", "整數部分 5 表示最多可以倒滿 5 瓶。", "分數餘數 $\\frac{1}{7}$ 代表的是「$\\frac{1}{7}$ 瓶」，求剩餘公升數必須回乘每瓶容量：", "剩餘公升數：$\\frac{1}{7} \\times \\frac{7}{10} = \\frac{1}{10}$（公升，即 0.1 公升）。", "（亦可用減法驗算：$3.6 - 5 \\times 0.7 = 3.6 - 3.5 = 0.1$ 公升，完全吻合）。"], "insight": "分數除法餘數大考點：餘數 $\\frac{1}{7}$ 是瓶不是公升，乘回 $\\frac{7}{10}$ 得剩下 $\\frac{1}{10}$ 公升！", "trap": {"code": "TRAP_FRAC_REMAINDER", "text": "切勿直接寫剩下 1/7 公升！餘數分率必須乘以除數才等於實際剩餘量。"}, "cropImage": "images/exams/EXAM_MID1/puren_p3.png"},
  {"id": "EX_PUREN_A07", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第7題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "密室逃脫卡片上寫著：「$\\frac{95}{275}$ 的最簡分數，便是密碼鎖上的答案。密碼鎖的密碼為四位數字，分子為密碼前兩位數字、分母為密碼後兩位數字」，請問密碼鎖的密碼是多少？", "options": ["A. 1955", "B. 9527", "C. 1925", "D. 0555"], "answerKey": "A", "answer": "A · 1955", "steps": ["將 $\\frac{95}{275}$ 約分成最簡分數：", "95 與 275 的個位都是 5，公因數有 5。", "分子除以 5：$95 \\div 5 = 19$。", "分母除以 5：$275 \\div 5 = 55$。", "19 是質數，19 不能整除 55，故最簡分數為 $\\frac{19}{55}$。", "分子為前兩位數字「19」，分母為後兩位數字「55」，組合成四位數密碼為「1955」。"], "insight": "$95 \\div 5 = 19$，$275 \\div 5 = 55$，最簡分數為 $\\frac{19}{55}$，密碼即為 1955！", "trap": {"code": "TRAP_REDUCE_CALC", "text": "小心 275 ÷ 5 = 55，不要算成 45 或 25。"}, "cropImage": "images/exams/EXAM_MID1/puren_p3.png"},
  {"id": "EX_PUREN_A08", "unitId": "EXAM_MID1", "school": "桃園市普仁國小", "source": "普仁國小 114上 期中評量 四、應用題 第8題", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "領隊說在小組競賽中只要集滿 20 個印章可以換 1 張小獎卡，集滿 15 張小獎卡就可以換 2 顆扭蛋，第二小隊換了 6 顆扭蛋，請問第二小隊是用幾張小獎卡換的？（請先列出相等的比，再做計算）", "options": ["A. 45 張", "B. 30 張", "C. 60 張", "D. 90 張"], "answerKey": "A", "answer": "A · 45 張小獎卡", "steps": ["根據獎卡與扭蛋的兌換關係列出比：", "獎卡張數 : 扭蛋顆數 $= 15 : 2$。", "設第二小隊用了 $x$ 張小獎卡，列出相等的比：$15 : 2 = x : 6$。", "觀察後項由 2 顆變成 6 顆，擴大了 $6 \\div 2 = 3$ 倍。", "前項小獎卡張數也必須擴大 3 倍：$x = 15 \\times 3 = 45$（張）。"], "insight": "比例式：$15 : 2 = x : 6 \\implies x = 15 \\times \\frac{6}{2} = 45$ 張。", "trap": {"code": "TRAP_UNUSED_INFO", "text": "題目中的「20個印章換1張獎卡」是干擾資訊，題目只問獎卡張數，直接用 15:2 計算即可。"}, "cropImage": "images/exams/EXAM_MID1/puren_p3.png"},
  {"id": "EX_HESHUN_01", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 一、選擇題 第1題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "用「0、3、5、6、7」這 5 個數字排出二位數，數字不可以重複使用，可以排出幾種是 5 的倍數的二位數？", "options": ["A. 6 種", "B. 7 種", "C. 8 種", "D. 9 種"], "answerKey": "B", "answer": "B · 7 種", "steps": ["二位數的十位數字不能為 0。", "一個整數是 5 的倍數，其個位數字必須是 0 或 5：", "類別一（個位是 0）：十位可從 {3, 5, 6, 7} 中任選 1 個，有 4 種（30、50、60、70）。", "類別二（個位是 5）：十位不能為 0 也不能重複為 5，只能從 {3, 6, 7} 中任選 1 個，有 3 種（35、65、75）。", "加法原理：總共有 $4 + 3 = 7$（種）。"], "insight": "分類討論法：個位定為 0 有 4 個；個位定為 5 有 3 個（扣除十位不能為0），合計 7 種！", "trap": {"code": "TRAP_LEADING_ZERO", "text": "注意二位數十位不能是 0，且數字不可重複使用。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_02", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 一、選擇題 第2題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 2, "difficulty": 2, "question": "小於 10 且最接近 10 的 3 個質數總和，和小於 10 且最接近 10 的 3 個合數總和，兩者相差多少？", "options": ["A. 6", "B. 8", "C. 12", "D. 18"], "answerKey": "B", "answer": "B · 8", "steps": ["小於 10 的質數有：2、3、5、7。其中最接近 10 的 3 個質數為 7、5、3。", "質數總和：$7 + 5 + 3 = 15$。", "小於 10 的合數有：4、6、8、9。其中最接近 10 的 3 個合數為 9、8、6。", "合數總和：$9 + 8 + 6 = 23$。", "兩者相差：$23 - 15 = 8$。"], "insight": "審題關鍵：最接近 10 的三個質數是 7, 5, 3（和為15）；最接近 10 的三個合數是 9, 8, 6（和為23）。差為 8！", "trap": {"code": "TRAP_CLOSEST_THREE", "text": "小心合數不要漏掉 9，也不要把 1 當成質數或合數。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_03", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 一、選擇題 第3題", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "黃師傅烘焙坊製作綜合麵包禮盒，其中包含 15 個歐式麵包、10 個可頌和 5 個司康。請問歐式麵包數量與禮盒內所有麵包總數量的最簡整數比為何？", "options": ["A. 3 : 5", "B. 3 : 6", "C. 5 : 6", "D. 1 : 2"], "answerKey": "D", "answer": "D · 1 : 2", "steps": ["禮盒內所有麵包總數量：$15 + 10 + 5 = 30$（個）。", "歐式麵包數量與總數量的比為 $15 : 30$。", "前項與後項同除以最大公因數 15 化為最簡整數比：$1 : 2$。"], "insight": "總數為 30 個，歐式麵包占 15 個，恰好是一半，最簡比為 $1:2$。", "trap": {"code": "TRAP_TOTAL_SUM", "text": "後項是所有麵包的「總數量」（30），不是剩下的麵包數。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_04", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 一、選擇題 第4題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "下面各式中，商比 $\\frac{7}{9}$ 小的有幾個？\n甲：$\\frac{7}{9} \\div \\frac{5}{6}$\n乙：$\\frac{7}{9} \\div 5$\n丙：$\\frac{7}{9} \\div \\frac{9}{9}$\n丁：$\\frac{7}{9} \\div \\frac{10}{7}$\n戊：$\\frac{7}{9} \\div 1\\frac{3}{4}$\n己：$\\frac{7}{9} \\div \\frac{7}{8}$", "options": ["A. 2 個", "B. 3 個", "C. 4 個", "D. 5 個"], "answerKey": "B", "answer": "B · 3 個", "steps": ["被除數固定為 $\\frac{7}{9}$。除數大於 1 時，商比被除數小：", "甲：除數 $\\frac{5}{6} < 1$，商比 $\\frac{7}{9}$ 大。", "乙：除數 $5 > 1$，商比 $\\frac{7}{9}$ 小。（符合）", "丙：除數 $\\frac{9}{9} = 1$，商等於 $\\frac{7}{9}$。", "丁：除數 $\\frac{10}{7} > 1$，商比 $\\frac{7}{9}$ 小。（符合）", "戊：除數 $1\\frac{3}{4} > 1$，商比 $\\frac{7}{9}$ 小。（符合）", "己：除數 $\\frac{7}{8} < 1$，商比 $\\frac{7}{9}$ 大。", "商比 $\\frac{7}{9}$ 小的有乙、丁、戊，共 3 個。"], "insight": "定性分析：找除數 $>1$ 的算式！乙(5)、丁(10/7)、戊(1又3/4)三個除數都大於 1，故商小於原數。", "trap": {"code": "TRAP_DIV_SIZE", "text": "丙的除數是 9/9 = 1，商等於原數，不符合「比 7/9 小」。"}, "cropImage": "images/exams/EXAM_MID1/heshun_q5_crop.png"},
  {"id": "EX_HESHUN_05", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 一、選擇題 第5題", "batch": "段考真題", "category": "小數除法", "level": 2, "difficulty": 2, "question": "某工廠今天生產了 80 公斤的糖果，第一批先裝袋 12.8 公斤，剩下的部分每 1.45 公斤包成一小袋，共可包成多少袋？", "options": ["A. 5 袋", "B. 6.25 袋", "C. 46 袋", "D. 55 袋"], "answerKey": "C", "answer": "C · 46 袋", "steps": ["計算第一批裝袋後剩餘的糖果重量：$80 - 12.8 = 67.2$（公斤）。", "每 1.45 公斤包成一袋，求可包成幾袋：$67.2 \\div 1.45$。", "直式計算：$6720 \\div 145 = 46.34...$", "因為包裝袋必須裝滿整袋，不足一袋的 0.5 公斤不能算作完整一袋，故共可包成 46 袋整。"], "insight": "剩餘 $67.2$ 公斤，除以 $1.45$ 得 $46$ 餘 $0.5$ 公斤，取整數袋數為 46 袋。", "trap": {"code": "TRAP_INTEGER_BAG", "text": "包裝成袋取整數商，不可四捨五入。"}, "cropImage": "images/exams/EXAM_MID1/heshun_q5_crop.png"},
  {"id": "EX_HESHUN_F01_1", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第1題(1)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "運動會時班級準備 7 箱飲料，每箱有 12 瓶運動飲料、8 瓶果汁跟 4 瓶礦泉水。每箱的運動飲料和果汁的最簡整數比是：", "options": ["A. 3 : 2", "B. 12 : 8", "C. 6 : 4", "D. 2 : 3"], "answerKey": "A", "answer": "A · 3 : 2", "steps": ["運動飲料 12 瓶，果汁 8 瓶。", "比為 $12 : 8$。", "前項與後項同除以最大公因數 4：$12 \\div 4 : 8 \\div 4 = 3 : 2$。"], "insight": "同除以 4 得最簡整數比 $3:2$。", "trap": {"code": "TRAP_SIMPLIFY", "text": "注意要約到最簡整數比。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_F01_2", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第1題(2)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "承上題（每箱 12 瓶運動飲料、8 瓶果汁、4 瓶礦泉水），礦泉水和整個箱子飲料數量的最簡整數比是：", "options": ["A. 1 : 6", "B. 4 : 24", "C. 1 : 5", "D. 1 : 4"], "answerKey": "A", "answer": "A · 1 : 6", "steps": ["每箱飲料總數量：$12 + 8 + 4 = 24$（瓶）。", "礦泉水數量與整箱總數量的比為 $4 : 24$。", "同除以 4 約分得最簡整數比：$1 : 6$。"], "insight": "整箱總數為 24 瓶，礦泉水 4 瓶，比為 $4:24 = 1:6$。", "trap": {"code": "TRAP_TOTAL_COUNT", "text": "後項是整箱總數 24 瓶，不是其他飲料總數 20 瓶。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_F01_3", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第1題(3)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "承上題，7 箱所有的運動飲料總數和礦泉水總數的最簡整數比是：", "options": ["A. 3 : 1", "B. 84 : 28", "C. 21 : 7", "D. 1 : 3"], "answerKey": "A", "answer": "A · 3 : 1", "steps": ["方法一：單箱運動飲料與礦泉水比為 $12 : 4 = 3 : 1$。放大 7 箱同乘 7，比值不變，最簡整數比仍為 $3 : 1$。", "方法二：7 箱運動飲料總數 $= 12 \\times 7 = 84$ 瓶；7 箱礦泉水總數 $= 4 \\times 7 = 28$ 瓶。$84 : 28 = 3 : 1$。"], "insight": "每箱比例相同，總箱數不影響最簡整數比，直接 $12:4 = 3:1$！", "trap": {"code": "TRAP_RATIO_SCALE", "text": "注意最簡整數比前後項必須互質，不能寫 84:28。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_F02", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第2題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "循環小數是指從某一位起，小數部分的數字會不斷重複出現的無限小數。已知有個循環小數是 $0.142857142...$（循環節為 142857），小數點後 72 位的數字是多少？", "options": ["A. 7", "B. 1", "C. 4", "D. 8"], "answerKey": "A", "answer": "A · 7", "steps": ["觀察循環小數規律：循環節為「1、4、2、8、5、7」，每 6 位數字為一個完整循環週期。", "計算週期：$72 \\div 6 = 12 \\dots 0$（剛好整除）。", "整除表示第 72 位的數字剛好是週期中的最後一個數字。", "循環節的最後一個數字是 7，因此小數點後第 72 位數字是 7。"], "insight": "整除看週期的末位！$72 = 6 \\times 12$，剛好在「142857」的第 6 位數字「7」。", "trap": {"code": "TRAP_CYCLE_END", "text": "整除是循環節的最後一位，不要誤以為是第一位 1。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_F03_1", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第3題(1)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "寫出括號中的數字：$8 : 5 = 6.4 : (\\quad)$", "options": ["A. 4", "B. 3.2", "C. 4.5", "D. 5"], "answerKey": "A", "answer": "A · 4", "steps": ["前項由 8 變為 6.4，縮小倍數為：$6.4 \\div 8 = 0.8$ 倍。", "後項也要乘以 0.8：$5 \\times 0.8 = 4$。", "因此括號中填入 4。"], "insight": "$8 \\times 0.8 = 6.4$，$5 \\times 0.8 = 4$。", "trap": {"code": "TRAP_DECIMAL_MUL", "text": "注意 5 × 0.8 = 4，不要算錯小數點。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_F03_2", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第3題(2)", "batch": "段考真題", "category": "比與比值", "level": 1, "difficulty": 1, "question": "寫出括號中的數字：$(\\quad) : 65 = 11 : 5$", "options": ["A. 143", "B. 132", "C. 154", "D. 55"], "answerKey": "A", "answer": "A · 143", "steps": ["後項由 5 變為 65，放大了 $65 \\div 5 = 13$ 倍。", "前項也要放大 13 倍：$11 \\times 13 = 143$。", "因此括號中填入 143。"], "insight": "速算：$11 \\times 13 = 143$。", "trap": {"code": "TRAP_CALC", "text": "11 × 13 = 143，計算要仔細。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_F04_1", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第4題(GCD)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "$36 = 2 \\times 2 \\times 3 \\times 3$，$42 = 2 \\times 3 \\times 7$。36 和 42 的最大公因數是：", "options": ["A. 6", "B. 12", "C. 3", "D. 18"], "answerKey": "A", "answer": "A · 6", "steps": ["找出兩數共同的質因數：共同質因數有 2（一次）與 3（一次）。", "最大公因數為共同質因數的乘積：$2 \\times 3 = 6$。"], "insight": "共同質因數連乘：$2 \\times 3 = 6$。", "trap": {"code": "TRAP_GCD", "text": "質因數 2 只能取一次，因為 42 只有一個 2。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_F04_2", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 二、填充題 第4題(LCM)", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "承上題（$36 = 2^2 \\times 3^2$，$42 = 2 \\times 3 \\times 7$），36 和 42 的最小公倍數是：", "options": ["A. 252", "B. 126", "C. 504", "D. 168"], "answerKey": "A", "answer": "A · 252", "steps": ["取各質因數的最高次方：$2^2 \\times 3^2 \\times 7$。", "連乘計算：$4 \\times 9 \\times 7 = 36 \\times 7 = 252$。"], "insight": "$36 \\times 7 = 252$。", "trap": {"code": "TRAP_LCM", "text": "質因數 3 要取平方（9），不要漏乘。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_C01_1", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 三、計算題 第1題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "計算：$\\frac{14}{21} \\div \\frac{4}{7} = (\\quad)$", "options": ["A. $1\\frac{1}{6}$", "B. $\\frac{7}{6}$", "C. $\\frac{2}{3}$", "D. $1\\frac{1}{3}$"], "answerKey": "A", "answer": "A · $1\\frac{1}{6}$ (或 $\\frac{7}{6}$)", "steps": ["先把被除數約分：$\\frac{14}{21} = \\frac{2}{3}$。", "除以分數轉為乘以倒數：$\\frac{2}{3} \\times \\frac{7}{4}$。", "約分：2 與 4 約分得 1 與 2。", "相乘：$\\frac{1 \\times 7}{3 \\times 2} = \\frac{7}{6} = 1\\frac{1}{6}$。"], "insight": "先約分再相乘更不易算錯：$\\frac{2}{3} \\times \\frac{7}{4} = \\frac{7}{6} = 1\\frac{1}{6}$。", "trap": {"code": "TRAP_REDUCE", "text": "答案請寫成最簡分數或帶分數。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_C01_2", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 三、計算題 第2題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "計算：$4\\frac{2}{5} \\div 1\\frac{1}{10} = (\\quad)$", "options": ["A. 4", "B. $3\\frac{1}{2}$", "C. $\\frac{22}{5}$", "D. $4\\frac{1}{5}$"], "answerKey": "A", "answer": "A · 4", "steps": ["帶分數化為假分數：$4\\frac{2}{5} = \\frac{22}{5}$，$1\\frac{1}{10} = \\frac{11}{10}$。", "除法轉乘倒數：$\\frac{22}{5} \\times \\frac{10}{11}$。", "約分：22 與 11 約分得 2；10 與 5 約分得 2。", "相乘：$2 \\times 2 = 4$。"], "insight": "神奇整數解：$4.4 \\div 1.1 = 4$！化為小數也能秒殺！", "trap": {"code": "TRAP_RECIPROCAL", "text": "注意倒數為 10/11。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_C02_1", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 四、直式計算 第1題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "寫成直式算算看：$4.55 \\div 0.5 = (\\quad)$", "options": ["A. 9.1", "B. 0.91", "C. 91", "D. 9.01"], "answerKey": "A", "answer": "A · 9.1", "steps": ["小數點向右移動一位：$4.55 \\div 0.5 = 45.5 \\div 5$。", "直式計算：$45.5 \\div 5 = 9.1$。"], "insight": "除以 0.5 等於乘以 2：$4.55 \\times 2 = 9.1$！", "trap": {"code": "TRAP_DECIMAL_PLACE", "text": "除數 0.5 只有一位小數，被除數移一位成 45.5。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_C02_2", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 四、直式計算 第2題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "寫成直式算算看：$14 \\div 0.56 = (\\quad)$", "options": ["A. 25", "B. 2.5", "C. 250", "D. 24.5"], "answerKey": "A", "answer": "A · 25", "steps": ["小數點向右移動兩位：$14 \\div 0.56 = 1400 \\div 56$。", "直式計算：$1400 \\div 56 = 25$。"], "insight": "化簡：$1400 \\div 56 = 100 \\div 4 = 25$。", "trap": {"code": "TRAP_PADDING_ZEROS", "text": "整數 14 移兩位要補兩個零變成 1400。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_C02_3", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 四、直式計算 第3題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "寫成直式算算看（用四捨五入法將商取概數到小數點後第一位）：$5.5 \\div 0.43 \\approx (\\quad)$", "options": ["A. 12.8", "B. 12.7", "C. 12.79", "D. 13.0"], "answerKey": "A", "answer": "A · 12.8", "steps": ["除數與被除數同時向右移動兩位：$5.5 \\div 0.43 = 550 \\div 43$。", "直式除法計算到小數第二位：$550 \\div 43 \\approx 12.79...$", "取概數到小數點後第一位，看小數第二位數字 9。", "因為 $9 \\ge 5$，向第一位進位，得 $12.8$。"], "insight": "算到小數第二位為 9，四捨五入進位得 12.8。", "trap": {"code": "TRAP_ROUNDING", "text": "注意看小數第二位 9 進位，不要停在 12.7。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_C02_4", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 四、直式計算 第4題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "寫成直式算算看（用四捨五入法將商取概數到小數點後第一位）：$0.92 \\div 3.7 \\approx (\\quad)$", "options": ["A. 0.2", "B. 0.25", "C. 0.3", "D. 0.24"], "answerKey": "A", "answer": "A · 0.2", "steps": ["除數與被除數同時向右移動一位：$0.92 \\div 3.7 = 9.2 \\div 37$。", "直式除法計算到小數第二位：$9.2 \\div 37 \\approx 0.248...$", "取概數到小數第一位，看小數第二位數字 4。", "因為 $4 < 5$，捨去，得 $0.2$。"], "insight": "直式除到小數第二位為 4，捨去得 0.2。", "trap": {"code": "TRAP_ROUNDING_DOWN", "text": "第二位是 4 必須捨去，不要進位成 0.3。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_A01", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第1題", "batch": "段考真題", "category": "分數除法", "level": 1, "difficulty": 1, "question": "晚會時桌上有一個容量是 $2\\frac{4}{9}$ 公升的飲料桶，阿哲將 $1\\frac{1}{6}$ 公升的水果茶倒入飲料桶中，請問可以倒成幾桶？", "options": ["A. $\\frac{21}{44}$ 桶", "B. $2\\frac{2}{21}$ 桶", "C. $\\frac{11}{24}$ 桶", "D. $\\frac{7}{12}$ 桶"], "answerKey": "A", "answer": "A · $\\frac{21}{44}$ 桶", "steps": ["以飲料桶滿桶容量 $2\\frac{4}{9}$ 公升為基準量，求倒入水果茶占幾桶：$1\\frac{1}{6} \\div 2\\frac{4}{9}$。", "帶分數化為假分數：$1\\frac{1}{6} = \\frac{7}{6}$，$2\\frac{4}{9} = \\frac{22}{9}$。", "除法轉乘倒數：$\\frac{7}{6} \\times \\frac{9}{22}$。", "約分：6 與 9 同除以 3 得 2 與 3。", "相乘計算：$\\frac{7 \\times 3}{2 \\times 22} = \\frac{21}{44}$（桶）。"], "insight": "比較量 $\\div$ 基準量：倒入茶少於一桶，答案小於 1，為 $\\frac{21}{44}$ 桶。", "trap": {"code": "TRAP_DIV_ORDER", "text": "除數是整桶容量 2又4/9 公升，不可倒轉式子。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p1.png"},
  {"id": "EX_HESHUN_A02", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第2題", "batch": "段考真題", "category": "怎樣解題", "level": 1, "difficulty": 1, "question": "下圖是用五子棋的黑子排列出來的十字圖案（圖一有 1 顆、圖二有 5 顆、圖三有 9 顆），如果依照規則排列，請問第 8 個圖會使用幾個黑子？", "options": ["A. 29 個", "B. 33 個", "C. 25 個", "D. 37 個"], "answerKey": "A", "answer": "A · 29 個黑子", "steps": ["分析十字圖案黑子排列規律：", "圖一：1 顆", "圖二：中心 1 顆，上下左右 4 個分支各增加 1 顆 $\\implies 1 + 4 \\times 1 = 5$ 顆", "圖三：中心 1 顆，上下左右 4 個分支各增加 2 顆 $\\implies 1 + 4 \\times 2 = 9$ 顆", "黑子數量通式：第 n 個圖黑子數 $= 1 + 4 \\times (n - 1) = 4n - 3$。", "第 8 個圖黑子數：$1 + 4 \\times (8 - 1) = 1 + 4 \\times 7 = 1 + 28 = 29$（個）。"], "insight": "十字形等差數列：公差為 4。首項 1，第 8 項 $= 1 + 7 \\times 4 = 29$ 個黑子。", "trap": {"code": "TRAP_CROSS_PATTERN", "text": "注意是 7 個公差，不要誤算成 4 × 8 = 32。"}, "cropImage": "images/exams/EXAM_MID1/crop_heshun_p2_godots.png"},
  {"id": "EX_HESHUN_A03", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第3題", "batch": "段考真題", "category": "分數除法", "level": 2, "difficulty": 2, "question": "芙特汽車的工廠在 $1\\frac{3}{5}$ 小時內可組裝 40 臺汽車。如果維持相同的組裝速率，請問 $\\frac{7}{10}$ 小時能組裝幾臺汽車？", "options": ["A. 17.5 臺 (或 $17\\frac{1}{2}$ 臺)", "B. 28 臺", "C. 20 臺", "D. 18 臺"], "answerKey": "A", "answer": "A · 17.5 臺 (或 $17\\frac{1}{2}$ 臺)", "steps": ["先求每 1 小時組裝速率（總臺數 ÷ 時間）：$40 \\div 1\\frac{3}{5}$。", "計算時速：$40 \\div \\frac{8}{5} = 40 \\times \\frac{5}{8} = 25$（臺/小時）。", "計算 $\\frac{7}{10}$ 小時組裝臺數：$25 \\times \\frac{7}{10} = \\frac{175}{10} = 17.5$（臺，或 $17\\frac{1}{2}$ 臺）。"], "insight": "先除求單位速率（25 臺/小時），再乘以時間 $\\frac{7}{10}$ 小時，得 17.5 臺。", "trap": {"code": "TRAP_UNIT_RATE", "text": "注意 40 ÷ 8/5 = 25，再乘 7/10 得 17.5。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p2.png"},
  {"id": "EX_HESHUN_A04", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第4題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "下圖是一個卡丁車的賽道，已知總長為 600 公尺，賽事主辦方沿著周邊每隔相同的距離設立一個廣告牌，總共設立 40 個廣告牌。請問從第 10 個廣告牌到第 30 個廣告牌的間隔總長是多少公尺？", "options": ["A. 300 公尺", "B. 315 公尺", "C. 285 公尺", "D. 350 公尺"], "answerKey": "A", "answer": "A · 300 公尺", "steps": ["卡丁車賽道為封閉圓周路線，設立 40 個廣告牌表示共有 40 個等長間隔。", "計算每個間隔的距離：$600 \\div 40 = 15$（公尺）。", "計算第 10 個廣告牌到第 30 個廣告牌之間的間隔個數：$30 - 10 = 20$（個間隔）。", "總長度：$20 \\times 15 = 300$（公尺）。\n（亦可由比例直接看出：20 個間隔恰好是 40 個間隔的一半，總長度 $= 600 \\div 2 = 300$ 公尺）。"], "insight": "直覺速算：20 個間隔恰為全場 40 個間隔的一半，距離直接為 $600 \\div 2 = 300$ 公尺！", "trap": {"code": "TRAP_INTERVAL_CLOSED", "text": "封閉賽道每個間隔 15 公尺，第 10 到第 30 個牌之間有 20 個間隔。"}, "cropImage": "images/exams/EXAM_MID1/crop_heshun_p2_kart.png"},
  {"id": "EX_HESHUN_A05", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第5題", "batch": "段考真題", "category": "怎樣解題", "level": 2, "difficulty": 2, "question": "好口福牛排店菜單：排餐 3 種（特級豬排、特上牛排、無骨雞腿排）；附餐有爆漿餐包、蒜味吐司、飲品(紅茶、奶茶)；湯品 3 種（玉米濃湯、南瓜濃湯、主廚例湯）。阿榮去店裡點了個套餐(排餐、附餐、湯品各擇一)，請問他有幾種組合可以選擇？", "options": ["A. 36 種", "B. 27 種", "C. 18 種", "D. 48 種"], "answerKey": "A", "answer": "A · 36 種組合", "steps": ["分析各品項數量：", "排餐：3 種。", "附餐：菜單列出「爆漿餐包」、「蒜味吐司」、「飲品(紅茶、奶茶)」，注意飲品包含紅茶與奶茶 2 種，故附餐實質品項為：爆漿餐包、蒜味吐司、紅茶、奶茶，共 4 種。", "湯品：3 種。", "依乘法原理計算總組合數：$3 \\times 4 \\times 3 = 36$（種）。"], "insight": "菜單細節題：附餐中的「飲品(紅茶、奶茶)」其實是 2 個選項，因此附餐共有 $1+1+2=4$ 種，$3 \\times 4 \\times 3 = 36$ 種！", "trap": {"code": "TRAP_MENU_READING", "text": "注意飲品括號內有「紅茶、奶茶」2 種，附餐不是 3 種而是 4 種。"}, "cropImage": "images/exams/EXAM_MID1/crop_heshun_p2_steak.png"},
  {"id": "EX_HESHUN_A06", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第6題", "batch": "段考真題", "category": "最大公因數與最小公倍數", "level": 1, "difficulty": 1, "question": "百貨公司廣場有一塊長方形區域，長 144 公尺，寬 96 公尺。現在要用大小一樣的正方形地墊鋪滿整個區域，且地墊的邊長必須是整數公尺，請問能使用的最大正方形地墊的邊長是幾公尺？需要多少塊這樣的地墊才能鋪滿？", "options": ["A. 邊長 48 公尺，需要 6 塊", "B. 邊長 24 公尺，需要 24 塊", "C. 邊長 48 公尺，需要 5 塊", "D. 邊長 16 公尺，需要 54 塊"], "answerKey": "A", "answer": "A · 邊長 48 公尺，需要 6 塊地墊", "steps": ["求能使用的最大正方形地墊邊長，即求 144 與 96 的最大公因數 $\\gcd(144, 96)$。", "短除法：$144 = 48 \\times 3$，$96 = 48 \\times 2$。3 與 2 互質，故最大邊長為 48 公尺。", "計算長與寬各鋪幾塊地墊：", "長邊需鋪：$144 \\div 48 = 3$（塊）", "寬邊需鋪：$96 \\div 48 = 2$（塊）", "鋪滿共需要地墊塊數：$3 \\times 2 = 6$（塊）。"], "insight": "144 與 96 差為 48，48 可整除 144 與 96，最大公因數直接為 48！塊數為 $3 \\times 2 = 6$ 塊。", "trap": {"code": "TRAP_ADD_OR_MUL", "text": "塊數是 3 × 2 = 6 塊，不要加成 3 + 2 = 5 塊。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p2.png"},
  {"id": "EX_HESHUN_A07", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第7題", "batch": "段考真題", "category": "小數除法", "level": 1, "difficulty": 1, "question": "一個游泳池的容量為 128.4 立方公尺，有一台抽水機每分鐘可抽出 8.75 立方公尺的抽水機。請問這台抽水機大約需要幾分鐘才能把游泳池抽空？（用四捨五入法求到小數點第二位）", "options": ["A. 14.67 分鐘", "B. 14.68 分鐘", "C. 14.66 分鐘", "D. 14.70 分鐘"], "answerKey": "A", "answer": "A · 大約 14.67 分鐘", "steps": ["計算抽空所需時間：$128.4 \\div 8.75$。", "除數與被除數的小數點向右移兩位：$12840 \\div 875$。", "直式除法計算到小數點後第三位：$12840 \\div 875 \\approx 14.6742...$", "題目要求「四捨五入法求到小數點第二位」，看小數第三位數字 4。", "因為 $4 < 5$，捨去，得大約需要 $14.67$（分鐘）。"], "insight": "取到小數第二位，直式必須除到小數第三位（4），捨去得 14.67 分鐘。", "trap": {"code": "TRAP_ROUNDING_3RD", "text": "看第三位數字 4 捨去，不要誤進位成 14.68。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p2.png"},
  {"id": "EX_HESHUN_A08", "unitId": "EXAM_MID1", "school": "臺南市和順國小", "source": "和順國小 114上 第一次評量 五、應用題 第8題", "batch": "段考真題", "category": "比與比值", "level": 2, "difficulty": 2, "question": "書晉準備將新臺幣換成韓圓，參考了兩家銀行的匯率：\n好富有銀行：新臺幣與韓圓的兌換比率為 1：40。\n金有錢銀行：兌換 10000 韓圓需要支付 245 新臺幣。\n若書晉要將 2500 新臺幣全部兌換成韓圓，在哪一家銀行兌換可以得到較多的韓圓？", "options": ["A. 金有錢銀行", "B. 好富有銀行", "C. 兩家一樣多", "D. 無法比較"], "answerKey": "A", "answer": "A · 金有錢銀行", "steps": ["分別計算 2500 新臺幣在兩家銀行可兌換的韓圓數量：", "好富有銀行：比率為 $1 : 40$，可兌換韓圓 $= 2500 \\times 40 = 100000$（韓圓）。", "金有錢銀行：設可兌換 $x$ 韓圓，依比例式 $\\frac{x}{2500} = \\frac{10000}{245}$，計算 $x = 2500 \\div 245 \\times 10000 \\approx 10.204 \\times 10000 \\approx 102041$（韓圓）。", "比較數量：$102041 > 100000$。", "因此在「金有錢銀行」兌換可以得到較多的韓圓。"], "insight": "比較 1 新臺幣能換多少韓圓：好富有換 40 韓圓；金有錢換 $10000 \\div 245 \\approx 40.82$ 韓圓。金有錢換得更多！", "trap": {"code": "TRAP_EXCHANGE_RATE", "text": "小心金有錢銀行計算：2500 ÷ 245 × 10000 ≈ 102041 韓圓，比 100000 多出兩千多韓圓。"}, "cropImage": "images/exams/EXAM_MID1/heshun_p2.png"},
);
