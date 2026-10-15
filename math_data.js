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
    question: '在 $\\square$ 裡填入 $>$、$<$$ 或 $=$：<br>① $\\frac{5}{6} \\div \\frac{2}{3} \\ \\square \\ \\frac{5}{6}$<br>② $\\frac{5}{6} \\div 1 \\ \\square \\ \\frac{5}{6}$<br>③ $\\frac{5}{6} \\div \\frac{4}{3} \\ \\square \\ \\frac{5}{6}$',
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
    question: '在 $\\square$ 裡填入 $>$、$<$$ 或 $=$：<br>① $0.9 \\div 0.9 \\ \\square \\ 0.9$<br>② $2.38 \\div 1.2 \\ \\square \\ 2.38$<br>③ $40.2 \\div 1.01 \\ \\square \\ 40.2 \\div 0.99$',
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


