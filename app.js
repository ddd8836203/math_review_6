/* =========================================================
   六上數學特訓 — 應用程式核心 (app.js)
   ========================================================= */

(function () {
  'use strict';

  // -------------------------------------------------------
  // 全域狀態
  // -------------------------------------------------------
  // 全域狀態
  // -------------------------------------------------------
  const EXAM_SCHOOLS = [
    { id: 'ALL', name: '全部學校 (綜合練習)', shortName: '🎲 全部名校綜合', count: 215 },
    { id: '臺北市立西松國小', name: '臺北市立西松國小', shortName: '西松國小', count: 24 },
    { id: '桃子腳國民中小學', name: '桃子腳國民中小學', shortName: '桃子腳國中小', count: 32 },
    { id: '高雄市立獅湖國小', name: '高雄市立獅湖國小', shortName: '獅湖國小', count: 42 },
    { id: '高雄市鳳山區忠孝國小', name: '高雄市鳳山區忠孝國小', shortName: '忠孝國小', count: 50 },
    { id: '桃園市普仁國小', name: '桃園市普仁國小', shortName: '普仁國小', count: 40 },
    { id: '臺南市和順國小', name: '臺南市和順國小', shortName: '和順國小', count: 27 },
  ];

  // -------------------------------------------------------
  // 多人學習帳號設定 (預設 4 人：Rex + Test 1~3)
  // -------------------------------------------------------
  const USERS = [
    { id: 'rex',   name: 'Rex',    icon: '🦖', role: '正式學員', color: '#5b4bdb', bg: '#ede9fe', isTest: false },
    { id: 'test1', name: 'Test 1', icon: '🧪', role: '測試帳號 1', color: '#059669', bg: '#d1fae5', isTest: true },
    { id: 'test2', name: 'Test 2', icon: '🔬', role: '測試帳號 2', color: '#d97706', bg: '#fef3c7', isTest: true },
    { id: 'test3', name: 'Test 3', icon: '🛠️', role: '測試帳號 3', color: '#0284c7', bg: '#e0f2fe', isTest: true },
  ];

  // 預設雲端資料庫網址（已綁定 Firebase Realtime DB，電腦與 iPad 免設定自動同步）
  const DEFAULT_CLOUD_DB_URL = 'https://math-review-6-default-rtdb.asia-southeast1.firebasedatabase.app';

  const state = {
    currentUser: 'rex', // 'rex' | 'test1' | 'test2' | 'test3'
    cloudDbUrl: '', // Firebase Realtime Database URL
    cloudSyncStatus: 'local', // 'local' | 'syncing' | 'synced' | 'offline'
    view: 'dashboard', // 'dashboard' | 'quiz' | 'result' | 'error_book' | 'print'
    selectedBatches: ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'], // 預設篩選
    currentUnitId: null,
    examSchool: 'ALL', // 段考測驗選定學校 ('ALL' | 各校名稱)
    imgModeQuestions: {}, // 各題是否切換成原圖檢視模式 { [qId]: boolean }
    quizMode: 'unit', // 'unit' | 'error_book' | 'mixed'
    quizQuestions: [],
    quizIndex: 0,
    resumeTargetIdx: null, // 進入測驗時偵測到的上次斷點題號
    unitProgress: {}, // 各單元進行到的最後題號 { [unitId]: lastIndex }
    sessionAnswers: [], // { qId, result: 'ok'|'slow'|'bad', time }
    errorBook: [], // [ qId, ... ]
    errorCounts: {}, // { [qId]: count }
    successCounts: {}, // { [qId]: count }
    slowCounts: {}, // { [qId]: count }
    fullHistory: [], // [ session, ... ]
    updatedAt: 0,
    printConfig: {
      unitIds: ['U01'],
      count: 6,
      workSize: 'md', // 'sm' | 'md' | 'lg'
      includeInsight: false,
      batches: ['課本原型題', '奧數天梯', '段考真題'],
    },
  };

  // -------------------------------------------------------
  // 本地儲存 (LocalStorage 多帳號命名空間隔離 + 舊資料無損移轉)
  // -------------------------------------------------------
  const STORAGE_KEYS = {
    errorBook: 'g6_math_error_book',
    errorCounts: 'g6_math_error_counts',
    successCounts: 'g6_math_success_counts',
    slowCounts: 'g6_math_slow_counts',
    history: 'g6_math_full_history',
    batches: 'g6_math_selected_batches',
    unitProgress: 'g6_math_unit_progress',
    updatedAt: 'g6_math_updated_at',
  };

  const GLOBAL_STORAGE_KEYS = {
    currentUser: 'g6_math_current_user',
    migratedV1: 'g6_math_user_migrated_v1',
    cloudDbUrl: 'g6_math_cloud_db_url',
  };

  function getCurrentUserObj() {
    return USERS.find(u => u.id === state.currentUser) || USERS[0];
  }

  function getUserStorageKey(baseKey, userId = state.currentUser) {
    return `${baseKey}__${userId}`;
  }

  // 將舊版無帳號後綴的資料自動無損遷移至預設主人 Rex 名下
  function migrateLegacyDataToRex() {
    try {
      if (localStorage.getItem(GLOBAL_STORAGE_KEYS.migratedV1) === '1') return;
      let migratedAny = false;
      Object.values(STORAGE_KEYS).forEach(baseKey => {
        const legacyVal = localStorage.getItem(baseKey);
        const rexKey = getUserStorageKey(baseKey, 'rex');
        if (legacyVal !== null && localStorage.getItem(rexKey) === null) {
          localStorage.setItem(rexKey, legacyVal);
          migratedAny = true;
        }
      });
      if (migratedAny) {
        localStorage.setItem(getUserStorageKey(STORAGE_KEYS.updatedAt, 'rex'), String(Date.now()));
      }
      localStorage.setItem(GLOBAL_STORAGE_KEYS.migratedV1, '1');
    } catch (e) {
      console.warn('舊資料遷移失敗：', e);
    }
  }

  function loadUserStatsSummary(userId) {
    try {
      const ebRaw = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.errorBook, userId));
      const scRaw = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.successCounts, userId));
      const fhRaw = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.history, userId));
      const eb = ebRaw ? JSON.parse(ebRaw) : [];
      const sc = scRaw ? JSON.parse(scRaw) : {};
      const fh = fhRaw ? JSON.parse(fhRaw) : [];
      const mastered = QUESTION_BANK.filter(q => (sc[q.id] || 0) >= 1 && !eb.includes(q.id)).length;
      const pct = QUESTION_BANK.length > 0 ? Math.round((mastered / QUESTION_BANK.length) * 100) : 0;
      return { errCount: eb.length, mastered, pct, sessions: fh.length };
    } catch (e) {
      return { errCount: 0, mastered: 0, pct: 0, sessions: 0 };
    }
  }

  function loadState(userId = state.currentUser) {
    try {
      migrateLegacyDataToRex();

      const savedUser = localStorage.getItem(GLOBAL_STORAGE_KEYS.currentUser);
      if (!userId && savedUser && USERS.some(u => u.id === savedUser)) {
        state.currentUser = savedUser;
      } else if (userId && USERS.some(u => u.id === userId)) {
        state.currentUser = userId;
      }

      const savedCloudUrl = localStorage.getItem(GLOBAL_STORAGE_KEYS.cloudDbUrl);
      state.cloudDbUrl = (savedCloudUrl && savedCloudUrl.trim()) ? savedCloudUrl.trim() : DEFAULT_CLOUD_DB_URL;

      const uid = state.currentUser;
      const eb = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.errorBook, uid));
      state.errorBook = eb ? JSON.parse(eb) : [];

      const ec = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.errorCounts, uid));
      state.errorCounts = ec ? JSON.parse(ec) : {};

      const sc = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.successCounts, uid));
      state.successCounts = sc ? JSON.parse(sc) : {};

      const sl = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.slowCounts, uid));
      state.slowCounts = sl ? JSON.parse(sl) : {};

      const fh = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.history, uid));
      state.fullHistory = fh ? JSON.parse(fh) : [];

      const up = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.unitProgress, uid));
      state.unitProgress = up ? JSON.parse(up) : {};

      const ua = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.updatedAt, uid));
      state.updatedAt = ua ? parseInt(ua, 10) || 0 : 0;

      const sb = localStorage.getItem(getUserStorageKey(STORAGE_KEYS.batches, uid));
      if (sb) {
        state.selectedBatches = JSON.parse(sb);
        if (!state.selectedBatches.includes('純腦力體操')) {
          state.selectedBatches.push('純腦力體操');
        }
        if (!state.selectedBatches.includes('段考真題')) {
          state.selectedBatches.push('段考真題');
        }
      } else {
        state.selectedBatches = ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'];
      }
    } catch (e) {
      console.warn('LocalStorage 載入失敗：', e);
    }
    updateNavUserUI();
  }

  let cloudSyncTimer = null;

  function saveState(skipCloudPush = false) {
    const uid = state.currentUser;
    state.updatedAt = Date.now();
    try {
      localStorage.setItem(GLOBAL_STORAGE_KEYS.currentUser, uid);
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorBook, uid), JSON.stringify(state.errorBook));
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorCounts, uid), JSON.stringify(state.errorCounts));
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.successCounts, uid), JSON.stringify(state.successCounts));
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.slowCounts, uid), JSON.stringify(state.slowCounts));
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.history, uid), JSON.stringify(state.fullHistory));
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.batches, uid), JSON.stringify(state.selectedBatches));
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.unitProgress, uid), JSON.stringify(state.unitProgress));
      localStorage.setItem(getUserStorageKey(STORAGE_KEYS.updatedAt, uid), String(state.updatedAt));
    } catch (e) {
      console.warn('LocalStorage 儲存失敗：', e);
    }
    updateNavBadge();
    updateNavUserUI();

    if (!skipCloudPush && state.cloudDbUrl) {
      clearTimeout(cloudSyncTimer);
      cloudSyncTimer = setTimeout(() => pushToCloud(uid), 450);
    }
  }

  // -------------------------------------------------------
  // 跨裝置雲端同步引擎 (Firebase Realtime DB REST API)
  // -------------------------------------------------------
  function normalizeCloudUrl(url) {
    if (!url) return '';
    return url.trim().replace(/\/+$/, '').replace(/\.json$/i, '');
  }

  async function pushToCloud(userId = state.currentUser) {
    const base = normalizeCloudUrl(state.cloudDbUrl);
    if (!base) return false;
    state.cloudSyncStatus = 'syncing';
    const payload = {
      userId,
      updatedAt: state.updatedAt || Date.now(),
      errorBook: state.errorBook,
      errorCounts: state.errorCounts,
      successCounts: state.successCounts,
      slowCounts: state.slowCounts,
      fullHistory: state.fullHistory,
      selectedBatches: state.selectedBatches,
      unitProgress: state.unitProgress,
    };
    try {
      const res = await fetch(`${base}/g6_math_users/${userId}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        state.cloudSyncStatus = 'synced';
        return true;
      }
    } catch (e) {
      state.cloudSyncStatus = 'offline';
    }
    return false;
  }

  async function syncFromCloud(userId = state.currentUser, showFeedback = false) {
    const base = normalizeCloudUrl(state.cloudDbUrl);
    if (!base) return false;
    state.cloudSyncStatus = 'syncing';
    try {
      const res = await fetch(`${base}/g6_math_users.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const allCloudUsers = (await res.json()) || {};

      // 先同步其他 3 個非當前帳號的摘要快取至本機 LocalStorage，讓切換膠囊與彈窗即時顯示最新數字
      USERS.forEach(u => {
        if (u.id === userId) return;
        const cData = allCloudUsers[u.id];
        if (!cData || typeof cData !== 'object') return;
        const lUp = parseInt(localStorage.getItem(getUserStorageKey(STORAGE_KEYS.updatedAt, u.id)) || '0', 10) || 0;
        const cUp = cData.updatedAt || 0;
        if (cUp > lUp) {
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorBook, u.id), JSON.stringify(cData.errorBook || []));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorCounts, u.id), JSON.stringify(cData.errorCounts || {}));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.successCounts, u.id), JSON.stringify(cData.successCounts || {}));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.slowCounts, u.id), JSON.stringify(cData.slowCounts || {}));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.history, u.id), JSON.stringify(cData.fullHistory || []));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.unitProgress, u.id), JSON.stringify(cData.unitProgress || {}));
          if (Array.isArray(cData.selectedBatches) && cData.selectedBatches.length > 0) {
            localStorage.setItem(getUserStorageKey(STORAGE_KEYS.batches, u.id), JSON.stringify(cData.selectedBatches));
          }
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.updatedAt, u.id), String(cUp));
        }
      });

      const cloudData = allCloudUsers[userId];
      const localUpdated = state.updatedAt || 0;
      const localActivityCount = (state.fullHistory?.length || 0) + Object.keys(state.successCounts || {}).length + (state.errorBook?.length || 0);

      if (cloudData && typeof cloudData === 'object') {
        const cloudUpdated = cloudData.updatedAt || 0;
        const cloudActivityCount = (cloudData.fullHistory?.length || 0) + Object.keys(cloudData.successCounts || {}).length + (cloudData.errorBook?.length || 0);

        // 當雲端時間戳記較新，或本機從未初始化 (localUpdated === 0) 但雲端有紀錄時，套用雲端資料
        if (cloudUpdated > localUpdated || (localUpdated === 0 && cloudActivityCount > 0)) {
          state.errorBook = Array.isArray(cloudData.errorBook) ? cloudData.errorBook : [];
          state.errorCounts = cloudData.errorCounts || {};
          state.successCounts = cloudData.successCounts || {};
          state.slowCounts = cloudData.slowCounts || {};
          state.fullHistory = Array.isArray(cloudData.fullHistory) ? cloudData.fullHistory : [];
          state.unitProgress = cloudData.unitProgress || {};
          if (Array.isArray(cloudData.selectedBatches) && cloudData.selectedBatches.length > 0) {
            state.selectedBatches = cloudData.selectedBatches;
          }
          state.updatedAt = cloudUpdated;
          saveState(true);
          if (state.view === 'dashboard') renderDashboardView();
          else if (state.view === 'error_book') renderErrorBookView();
          else if (state.view === 'print') renderPrintSetupView();
          const uObj = USERS.find(u => u.id === userId) || { name: userId };
          showToast(`☁️ 已同步【${uObj.name}】的最新雲端進度！`);
        } else if (localUpdated > cloudUpdated && localActivityCount > 0) {
          await pushToCloud(userId);
          if (showFeedback) showToast('☁️ 本機進度較新，已推送更新至雲端！');
        } else {
          if (state.view === 'dashboard') renderDashboardView();
          if (showFeedback) showToast('☁️ 目前已是最新雲端同步狀態！');
        }
      } else if (localActivityCount > 0) {
        // 雲端尚無此人員節點，直接將本機資料推上雲端初始化
        await pushToCloud(userId);
        if (showFeedback) showToast('☁️ 已將本機紀錄首次備份至雲端！');
      }
      state.cloudSyncStatus = 'synced';
      return true;
    } catch (e) {
      state.cloudSyncStatus = 'offline';
      if (showFeedback) showToast('⚠️ 雲端連線失敗，請檢查網址與資料庫權限設定');
      return false;
    }
  }

  // 切換使用者帳號
  function switchUser(newUserId, showMsg = true) {
    const target = USERS.find(u => u.id === newUserId);
    if (!target) return;
    state.currentUser = target.id;
    localStorage.setItem(GLOBAL_STORAGE_KEYS.currentUser, target.id);
    state.sessionAnswers = [];
    state.resumeTargetIdx = null;
    loadState(target.id);
    updateNavBadge();
    updateNavUserUI();

    if (showMsg) {
      showToast(`${target.icon} 已切換為：${target.name}（${target.role}）`);
    }

    if (state.cloudDbUrl) {
      syncFromCloud(target.id, false);
    }

    if (state.view === 'error_book') {
      renderErrorBookView();
    } else if (state.view === 'print') {
      renderPrintSetupView();
    } else {
      state.view = 'dashboard';
      renderDashboardView();
    }
  }

  // 一鍵清空重置測試帳號資料（僅限 Test 1 ~ Test 3，保護 Rex，並同步清空雲端節點）
  async function resetTestUser(userId) {
    const target = USERS.find(u => u.id === userId);
    if (!target || !target.isTest) {
      showToast('🔒 Rex 為正式學員帳號，受系統保護不可一鍵清空！');
      return;
    }
    const nowTs = Date.now();
    Object.values(STORAGE_KEYS).forEach(baseKey => {
      localStorage.removeItem(getUserStorageKey(baseKey, userId));
    });
    localStorage.setItem(getUserStorageKey(STORAGE_KEYS.updatedAt, userId), String(nowTs));

    if (state.currentUser === userId) {
      state.errorBook = [];
      state.errorCounts = {};
      state.successCounts = {};
      state.slowCounts = {};
      state.fullHistory = [];
      state.unitProgress = {};
      state.sessionAnswers = [];
      state.resumeTargetIdx = null;
      state.updatedAt = nowTs;
      saveState(true);
      if (state.view === 'dashboard') renderDashboardView();
      else if (state.view === 'error_book') renderErrorBookView();
    }

    // 同步將雲端上的該測試帳號歸零
    const base = normalizeCloudUrl(state.cloudDbUrl);
    if (base) {
      try {
        await fetch(`${base}/g6_math_users/${userId}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            updatedAt: nowTs,
            errorBook: [],
            errorCounts: {},
            successCounts: {},
            slowCounts: {},
            fullHistory: [],
            selectedBatches: ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'],
            unitProgress: {},
          }),
        });
      } catch (e) {
        console.warn('雲端重置測試帳號失敗：', e);
      }
    }

    showToast(`🧹 已將【${target.name}】的本機與雲端紀錄全部歸零重置！`);
  }

  // -------------------------------------------------------
  // 國小 12 歲兒童數學排版防禦函式
  // -------------------------------------------------------
  function formatMathForKids(str) {
    if (!str || typeof str !== 'string') return str;
    let res = str;
    // 檢查是否有裸露的 \frac{...}{...}（前後沒有 $）
    res = res.replace(/(^|[^\$])((?:\d+\s*)?\\frac\{[^{}]+\}\{[^{}]+\})([^\$]|$)/g, '$1$$$2$$$3');
    return res;
  }

  function cleanOptionText(opt) {
    if (!opt || typeof opt !== 'string') return '';
    return formatMathForKids(opt.replace(/^(?:[A-D]\.|\([1-4A-D]\)|[①-④])\s*/i, ''));
  }

  function getProgressKey(unitId) {
    if (!unitId) return null;
    return unitId === 'EXAM_MID1' ? `EXAM_MID1_${state.examSchool || 'ALL'}` : unitId;
  }

  // -------------------------------------------------------
  // KaTeX 數學渲染與 QR Code
  // -------------------------------------------------------
  function renderMath(targetEl) {
    if (!targetEl) return;
    if (window.renderMathInElement) {
      window.renderMathInElement(targetEl, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        throwOnError: false,
      });
    }
  }

  function makeQRCode(url) {
    if (!window.qrcode) return '';
    try {
      const qr = window.qrcode(0, 'M');
      qr.addData(url);
      qr.make();
      return qr.createSvgTag({ scalable: true, margin: 0 });
    } catch (e) {
      return '';
    }
  }

  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 2400);
  }

  // -------------------------------------------------------
  // 考卷原圖超高解析 Lightbox 檢視
  // -------------------------------------------------------
  function openLightbox(imgSrc, title = '考卷原圖超清檢視') {
    let modal = document.getElementById('lightbox-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lightbox-modal';
      modal.className = 'lightbox-modal';
      document.body.appendChild(modal);
    }
    modal.innerHTML = `
      <div class="lightbox-header">
        <span class="lightbox-title">📷 ${title}</span>
        <button type="button" class="lightbox-close-btn" id="lightbox-close" title="關閉">✕</button>
      </div>
      <div class="lightbox-body" id="lightbox-body">
        <img src="${imgSrc}" alt="${title}">
      </div>
    `;
    modal.style.display = 'flex';

    const closeModal = () => {
      modal.style.display = 'none';
      document.removeEventListener('keydown', handleKey);
    };

    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    document.getElementById('lightbox-close').onclick = closeModal;
    modal.onclick = (e) => {
      if (e.target === modal || e.target.id === 'lightbox-body') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKey);
  }

  // -------------------------------------------------------
  // 導航列更新與帳號管理彈窗
  // -------------------------------------------------------
  function updateNavBadge() {
    const badge = document.getElementById('nav-error-count');
    if (badge) {
      const cnt = state.errorBook.length;
      badge.textContent = cnt;
      if (cnt === 0) badge.classList.add('zero');
      else badge.classList.remove('zero');
    }
  }

  function updateNavUserUI() {
    const curUser = getCurrentUserObj();
    const btn = document.getElementById('nav-user');
    const iconEl = document.getElementById('nav-user-icon');
    const nameEl = document.getElementById('nav-user-name');
    if (iconEl) iconEl.textContent = curUser.icon;
    if (nameEl) nameEl.textContent = curUser.name;
    if (btn) {
      btn.style.borderColor = curUser.color;
      btn.style.background = curUser.bg;
      btn.style.color = curUser.color;
    }
  }

  function openUserModal() {
    let modal = document.getElementById('user-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'user-modal';
      modal.className = 'user-modal-backdrop';
      document.body.appendChild(modal);
    }

    const renderModalContent = () => {
      const userCardsHtml = USERS.map(u => {
        const isCurrent = u.id === state.currentUser;
        const st = loadUserStatsSummary(u.id);
        return `
          <div class="user-profile-card ${isCurrent ? 'active' : ''}" style="--u-color: ${u.color}; --u-bg: ${u.bg};">
            <div class="u-card-left" data-pick-user="${u.id}">
              <span class="u-avatar">${u.icon}</span>
              <div class="u-info">
                <div class="u-name-row">
                  <b>${u.name}</b>
                  <span class="u-role-tag" style="background:${u.bg}; color:${u.color};">${u.role}</span>
                  ${isCurrent ? `<span class="u-cur-badge">✔ 使用中</span>` : ''}
                </div>
                <div class="u-stats-row">
                  <span>掌握度 <b>${st.pct}%</b> (${st.mastered}題)</span>
                  <span>·</span>
                  <span class="${st.errCount > 0 ? 'err-txt' : ''}">錯題 <b>${st.errCount}</b></span>
                  <span>·</span>
                  <span>練習 <b>${st.sessions}</b> 場</span>
                </div>
              </div>
            </div>
            <div class="u-card-actions">
              ${!isCurrent ? `
                <button type="button" class="btn btn-sm btn-primary" data-pick-user="${u.id}">切換</button>
              ` : ''}
              ${u.isTest ? `
                <button type="button" class="btn btn-sm btn-ghost btn-reset-test" data-reset-user="${u.id}" title="將此測試帳號的錯題與進度歸零">
                  🧹 清空
                </button>
              ` : `
                <span class="u-protect-tag" title="正式學員資料受保護，防止誤刪">🔒 保護中</span>
              `}
            </div>
          </div>
        `;
      }).join('');

      modal.innerHTML = `
        <div class="user-modal-panel glass" role="dialog" aria-label="切換學習帳號與雲端設定">
          <div class="user-modal-head">
            <div>
              <h3>👥 切換使用人員（錯題本與進度獨立隔離）</h3>
              <p class="muted" style="font-size: 13px; margin: 4px 0 0;">點擊人員即可立即切換，測試帳號可隨時一鍵清空重置，絕不影響 Rex 的紀錄。</p>
            </div>
            <button type="button" class="btn-close-drawer" id="user-modal-close">✕</button>
          </div>

          <div class="user-cards-list">
            ${userCardsHtml}
          </div>

          <div class="cloud-sync-box">
            <div class="cloud-sync-head">
              <span>☁️ 跨裝置雲端同步（Firebase Realtime DB 網址）</span>
              <span class="cloud-badge ${state.cloudDbUrl ? 'on' : ''}">${state.cloudDbUrl ? '🟢 已啟用雲端同步' : '⚪ 目前為本機獨立儲存'}</span>
            </div>
            <div class="cloud-input-row">
              <input type="url" id="input-cloud-url" placeholder="貼上 https://你的專案.firebasedatabase.app" value="${state.cloudDbUrl || ''}">
              <button type="button" class="btn btn-primary btn-sm" id="btn-save-cloud">儲存並同步</button>
            </div>
            <div class="cloud-sync-hint">
              填入免費 Firebase Realtime Database 網址後，4 個人的帳號進度將在電腦與 iPad 間自動即時同步。
            </div>
          </div>
        </div>
      `;

      document.getElementById('user-modal-close').onclick = closeModal;
      modal.querySelectorAll('[data-pick-user]').forEach(el => {
        el.onclick = () => {
          const uid = el.getAttribute('data-pick-user');
          switchUser(uid);
          closeModal();
        };
      });

      modal.querySelectorAll('[data-reset-user]').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const uid = btn.getAttribute('data-reset-user');
          const uObj = USERS.find(x => x.id === uid);
          if (uObj && confirm(`確定要清空測試帳號【${uObj.name}】的所有錯題本與練習進度嗎？（Rex 的資料不會受影響）`)) {
            resetTestUser(uid);
            renderModalContent();
          }
        };
      });

      const saveCloudBtn = document.getElementById('btn-save-cloud');
      if (saveCloudBtn) {
        saveCloudBtn.onclick = async () => {
          const val = (document.getElementById('input-cloud-url')?.value || '').trim();
          state.cloudDbUrl = val;
          localStorage.setItem(GLOBAL_STORAGE_KEYS.cloudDbUrl, val);
          if (val) {
            saveCloudBtn.disabled = true;
            saveCloudBtn.textContent = '同步中...';
            await syncFromCloud(state.currentUser, true);
          } else {
            showToast('已關閉雲端同步，改為純本機儲存模式');
          }
          renderModalContent();
        };
      }
    };

    const closeModal = () => {
      modal.style.display = 'none';
    };

    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };

    renderModalContent();
    modal.style.display = 'flex';
  }

  // -------------------------------------------------------
  // 題庫輔助計算
  // -------------------------------------------------------
  function getAvailableBatches() {
    const set = new Set();
    QUESTION_BANK.forEach(q => set.add(q.batch || '課本原型題'));
    return Array.from(set);
  }

  function filterQuestionsByBatches(list) {
    if (!state.selectedBatches || state.selectedBatches.length === 0) return list;
    return list.filter(q => state.selectedBatches.includes(q.batch || '課本原型題'));
  }

  function getUnitStats(unitId) {
    const all = QUESTION_BANK.filter(q => q.unitId === unitId);
    const active = filterQuestionsByBatches(all);
    const errCount = active.filter(q => state.errorBook.includes(q.id)).length;
    const mastered = active.filter(q => (state.successCounts[q.id] || 0) >= 1 && !state.errorBook.includes(q.id)).length;
    const pct = active.length > 0 ? Math.round((mastered / active.length) * 100) : 0;
    const maxLevel = active.reduce((m, q) => Math.max(m, q.stars || q.level || 1), 1);
    const hasMental = active.some(q => q.batch === '純腦力體操');
    return { total: active.length, errCount, mastered, pct, maxLevel, hasMental, rawTotal: all.length };
  }

  function getGlobalStats() {
    const active = filterQuestionsByBatches(QUESTION_BANK);
    const mastered = active.filter(q => (state.successCounts[q.id] || 0) >= 1 && !state.errorBook.includes(q.id)).length;
    const pct = active.length > 0 ? Math.round((mastered / active.length) * 100) : 0;
    return {
      total: active.length,
      mastered,
      pct,
      errors: state.errorBook.length,
    };
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // -------------------------------------------------------
  // 視圖渲染器：1. 首頁 (Dashboard)
  // -------------------------------------------------------
  function renderDashboardView() {
    const g = getGlobalStats();
    const batches = getAvailableBatches();

    const chipsHtml = batches.map(b => {
      const on = state.selectedBatches.includes(b);
      const icon = b === '純腦力體操' ? '🧠 ' : b === '奧數天梯' ? '🪜 ' : b === '段考真題' ? '🏆 ' : '📖 ';
      return `<button type="button" class="chip ${on ? 'on' : ''}" data-batch="${b}"><span class="dot"></span>${icon}${b}</button>`;
    }).join('');

    const unitCardsHtml = UNITS.map(u => {
      const st = getUnitStats(u.id);
      const isLocked = st.total === 0;
      const isMentalActive = state.selectedBatches.length === 1 && state.selectedBatches[0] === '純腦力體操';
      const isExamUnit = !!u.isExam;

      return `
        <article class="unit-card ${isExamUnit ? 'exam-card' : ''} ${isLocked ? 'locked' : ''}" style="--hue: ${u.hue}">
          <span class="u-no">${isExamUnit ? '🏆 段考特訓' : `UNIT ${String(u.no).padStart(2, '0')}`} · ${u.pages}</span>
          <h3>${isExamUnit ? u.title : `第 ${u.no} 單元 ${u.title}`}</h3>
          <div class="progress" title="掌握度 ${st.pct}%"><i style="width: ${st.pct}%"></i></div>
          <div class="u-meta">
            <span class="tag ${st.pct === 100 ? 'ok' : ''}">掌握 ${st.pct}%</span>
            ${st.errCount > 0 ? `<span class="tag bad">🔥 ${st.errCount} 題待消滅</span>` : ''}
            ${isExamUnit ? `<span class="tag exam-badge">🏆 6校全真考卷</span>` : `<span class="tag lv">${st.hasMental ? `⭐ 10★天梯` : `天梯 L${st.maxLevel}`}</span>`}
            <span class="tag">${st.total} 題</span>
          </div>

          ${isExamUnit ? `
            <div class="exam-card-quick-select" style="margin-top: 6px;">
              <select class="exam-school-select" data-exam-select="${u.id}" style="width: 100%; padding: 8px 10px; border-radius: 10px; border: 1.5px solid #fcd34d; font-size: 13px; font-weight: 700; color: #78350f; background: #fffdf5; outline: none; cursor: pointer;">
                ${EXAM_SCHOOLS.map(sch => `<option value="${sch.id}" ${state.examSchool === sch.id ? 'selected' : ''}>${sch.shortName} (${sch.count}題)</option>`).join('')}
              </select>
            </div>
          ` : ''}

          ${st.errCount > 0 ? `
            <div class="u-actions has-errors" style="margin-top: ${isExamUnit ? '10px' : 'auto'};">
              <div class="u-actions-top-row">
                <button class="btn btn-primary" data-start-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
                  ${isExamUnit ? '🏆 開始段考' : isMentalActive ? '🧠 開始體操' : '開始特訓'}
                </button>
                <button class="btn btn-kill-err" data-kill-unit-errors="${u.id}">
                  🔥 消滅錯題 (${st.errCount})
                </button>
              </div>
              <button class="btn btn-ghost btn-block" data-print-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
                🖨️ A4 出卷
              </button>
            </div>
          ` : `
            <div class="u-actions" style="margin-top: ${isExamUnit ? '10px' : 'auto'};">
              <button class="btn btn-primary" data-start-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
                ${isExamUnit ? '🏆 開始段考' : isMentalActive ? '🧠 開始體操' : '開始特訓'}
              </button>
              <button class="btn btn-ghost" data-print-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
                🖨️ A4 出卷
              </button>
            </div>
          `}
        </article>
      `;
    }).join('');

    const curUser = getCurrentUserObj();
    const userSwitcherHtml = `
      <section class="user-switcher-bar glass" style="--active-user-color: ${curUser.color}; --active-user-bg: ${curUser.bg};">
        <div class="user-bar-left">
          <span class="user-bar-label">👤 目前使用人員：</span>
          <div class="user-pills-row">
            ${USERS.map(u => {
              const active = u.id === state.currentUser;
              const st = loadUserStatsSummary(u.id);
              return `
                <button type="button" class="user-pill-btn ${active ? 'active' : ''}" data-quick-user="${u.id}" style="--u-color: ${u.color}; --u-bg: ${u.bg};">
                  <span>${u.icon} ${u.name}</span>
                  ${st.errCount > 0 ? `<b class="u-err-dot" title="${st.errCount} 題待消滅">${st.errCount}</b>` : ''}
                </button>
              `;
            }).join('')}
          </div>
        </div>
        <div class="user-bar-right">
          ${curUser.isTest ? `
            <span class="test-mode-tag">🧪 測試隔離模式（不影響 Rex 紀錄）</span>
            <button type="button" class="btn btn-sm btn-ghost btn-clear-cur-test" id="btn-dash-reset-test">🧹 清空 ${curUser.name} 紀錄</button>
          ` : `
            <span class="rex-mode-tag">🦖 Rex 正式學習模式（進度保護中）</span>
          `}
          <button type="button" class="btn btn-sm btn-ghost" id="btn-open-user-modal">⚙️ 帳號與雲端</button>
        </div>
      </section>
    `;

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view dashboard">
        ${userSwitcherHtml}
        <section class="glass hero">
          <div>
            <h2>${curUser.icon} ${curUser.name} 的六上數學特訓 <span class="grad">奧數能力天梯</span></h2>
            <p>先在實體紙筆計算，再上網即時對答案。自動建立專屬錯題本，無縫對接 AMC 8 競賽思維。</p>
            <div class="filters">
              <span class="label">題庫範圍：</span>
              ${chipsHtml}
            </div>
          </div>
          <div class="stats">
            <div class="stat pri"><b>${g.pct}%</b><span>全冊掌握度</span></div>
            <div class="stat bad"><b>${g.errors}</b><span>待消滅錯題</span></div>
            <div class="stat ok"><b>${g.total}</b><span>上線題數</span></div>
          </div>
        </section>

        <aside class="glass banner-mental" id="banner-mental-launch">
          <div style="display: flex; gap: 14px; align-items: center;">
            <span style="font-size: 34px;">☕</span>
            <div>
              <h3>早餐 iPad 專屬：純腦力體操（10星思維天梯）</h3>
              <p>完全不需動筆計算！利用早餐 5~10 分鐘，從 1★ 到 10★ 快速啟動奧數滿分數感與解題直覺（全 8 單元共 160 題深度選擇題）。</p>
            </div>
          </div>
          <div class="mental-quick-actions" style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <select id="select-mental-unit" style="padding: 10px 14px; border-radius: 10px; border: 1.5px solid #c7d2fe; background: #ffffff; color: #3730a3; font-weight: 700; font-size: 14px; outline: none; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.08);">
              ${UNITS.filter(u => !u.isExam).map(u => `<option value="${u.id}">第 ${u.no} 單元：${u.title} (20題)</option>`).join('')}
              <option value="all_mixed">🎲 全冊 8 單元綜合挑戰 (20題 1~10★跨單元升級)</option>
            </select>
            <button class="btn btn-primary" id="btn-quick-mental" style="white-space: nowrap;">
              🧠 啟動思維天梯
            </button>
          </div>
        </aside>

        ${state.errorBook.length > 0 ? `
          <aside class="banner-error">
            <div>
              <h3>🔥 跨單元錯題消滅戰</h3>
              <p>目前累積 ${state.errorBook.length} 個弱點題，答對即可徹底移出錯題本！</p>
            </div>
            <button class="btn btn-lg" id="btn-kill-errors">立即消滅錯題</button>
          </aside>
        ` : ''}

        <div class="section-title">
          <h2>📚 單元進度地圖</h2>
          <span class="muted">翰林版第十一冊 · 全 8 單元 + 六校段考全真題庫</span>
        </div>
        <section class="unit-grid">
          ${unitCardsHtml}
        </section>
      </div>
    `;

    // 綁定事件
    app.querySelectorAll('.chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const b = btn.getAttribute('data-batch');
        if (state.selectedBatches.includes(b)) {
          if (state.selectedBatches.length > 1) {
            state.selectedBatches = state.selectedBatches.filter(x => x !== b);
          } else {
            showToast('至少保留一個題庫範圍喔！');
            return;
          }
        } else {
          state.selectedBatches.push(b);
        }
        saveState();
        renderDashboardView();
      });
    });

    const quickMentalBtn = document.getElementById('btn-quick-mental');
    if (quickMentalBtn) {
      quickMentalBtn.addEventListener('click', () => {
        const sel = document.getElementById('select-mental-unit');
        const chosen = sel ? sel.value : 'U01';
        state.selectedBatches = ['純腦力體操'];
        saveState();
        if (chosen === 'all_mixed') {
          startQuiz('mental_mixed');
        } else {
          startQuiz('unit', chosen);
        }
      });
    }

    app.querySelectorAll('[data-start-unit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const uId = btn.getAttribute('data-start-unit');
        if (uId === 'EXAM_MID1') {
          const sel = app.querySelector(`[data-exam-select="${uId}"]`);
          const school = sel ? sel.value : (state.examSchool || 'ALL');
          startQuiz('unit', uId, school);
        } else {
          startQuiz('unit', uId);
        }
      });
    });

    app.querySelectorAll('[data-kill-unit-errors]').forEach(btn => {
      btn.addEventListener('click', () => {
        const uId = btn.getAttribute('data-kill-unit-errors');
        startQuiz('unit_error', uId);
      });
    });

    app.querySelectorAll('[data-print-unit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const uId = btn.getAttribute('data-print-unit');
        state.printConfig.unitIds = [uId];
        renderPrintSetupView();
      });
    });

    const killBtn = document.getElementById('btn-kill-errors');
    if (killBtn) {
      killBtn.addEventListener('click', () => startQuiz('error_book'));
    }

    // 綁定首頁人員快速切換與測試帳號清空事件
    app.querySelectorAll('[data-quick-user]').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-quick-user');
        if (uid && uid !== state.currentUser) {
          switchUser(uid);
        }
      });
    });

    const dashResetBtn = document.getElementById('btn-dash-reset-test');
    if (dashResetBtn) {
      dashResetBtn.addEventListener('click', () => {
        const curU = getCurrentUserObj();
        if (curU.isTest && confirm(`確定要將測試帳號【${curU.name}】的錯題本與練習進度全部歸零嗎？`)) {
          resetTestUser(curU.id);
        }
      });
    }

    const openModalBtn = document.getElementById('btn-open-user-modal');
    if (openModalBtn) {
      openModalBtn.addEventListener('click', () => openUserModal());
    }
  }

  // -------------------------------------------------------
  // 視圖渲染器：2. 測驗與對答案 (Quiz View)
  // -------------------------------------------------------
  function startQuiz(mode, unitId = null, schoolId = null) {
    state.quizMode = mode;
    state.currentUnitId = unitId;
    state.quizIndex = 0;
    state.sessionAnswers = [];

    let pool = [];
    if (mode === 'unit') {
      if (unitId === 'EXAM_MID1') {
        if (schoolId) {
          state.examSchool = schoolId;
        } else if (!state.examSchool) {
          state.examSchool = 'ALL';
        }

        let examPool = QUESTION_BANK.filter(q => q.unitId === 'EXAM_MID1');
        if (state.examSchool && state.examSchool !== 'ALL') {
          examPool = examPool.filter(q => q.school === state.examSchool);
        } else {
          examPool = shuffle(examPool);
        }
        pool = examPool;
      } else {
        pool = QUESTION_BANK.filter(q => q.unitId === unitId);
        pool = filterQuestionsByBatches(pool);

        // 若當前題目全部是「純腦力體操」，嚴格按 1 顆星到 10 顆星由易到難升級排序！
        const isMentalOnly = pool.length > 0 && pool.every(q => q.batch === '純腦力體操');
        if (isMentalOnly) {
          pool.sort((a, b) => (a.stars || a.level || 1) - (b.stars || b.level || 1));
        } else {
          pool = shuffle(pool);
        }
      }
    } else if (mode === 'unit_error') {
      // 專屬消滅該單元的錯題
      pool = QUESTION_BANK.filter(q => q.unitId === unitId && state.errorBook.includes(q.id));
      pool = shuffle(pool);
    } else if (mode === 'mental_mixed') {
      // 全冊純腦力體操綜合：從 1★ 到 10★，每顆星從全冊隨機抽 2 題，總共 20 題嚴格由易到難！
      const mentalPool = QUESTION_BANK.filter(q => q.batch === '純腦力體操');
      let ladder = [];
      for (let s = 1; s <= 10; s++) {
        const starPool = shuffle(mentalPool.filter(q => (q.stars || q.level) === s));
        ladder.push(...starPool.slice(0, 2));
      }
      pool = ladder;
    } else if (mode === 'error_book') {
      pool = QUESTION_BANK.filter(q => state.errorBook.includes(q.id));
      pool = shuffle(pool);
    } else if (mode === 'mixed') {
      pool = filterQuestionsByBatches(QUESTION_BANK);
      pool = shuffle(pool).slice(0, 10);
    }

    if (pool.length === 0) {
      if (mode === 'error_book') {
        showToast('🎉 太棒了！錯題已全部消滅完畢！');
        state.view = 'dashboard';
        renderDashboardView();
      } else {
        showToast('目前沒有符合條件的題目喔！請檢查上方題庫範圍是否包含此題型。');
      }
      return;
    }

    state.quizQuestions = pool;
    state.view = 'quiz';

    // 記錄進入測驗前的上次題號（若是 EXAM_MID1 則區分學校，並向下相容舊版進度鍵值）
    const progKey = getProgressKey(unitId);
    let savedIdx = progKey ? state.unitProgress[progKey] : undefined;
    if (savedIdx === undefined && unitId) {
      savedIdx = state.unitProgress[unitId];
    }
    state.resumeTargetIdx = (typeof savedIdx === 'number' && savedIdx > 0 && savedIdx < pool.length)
      ? savedIdx
      : null;

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    if (state.quizIndex >= state.quizQuestions.length) {
      const progKey = getProgressKey(state.currentUnitId);
      if (progKey) {
        state.unitProgress[progKey] = 0;
        saveState();
      }
      finishQuiz();
      return;
    }

    const q = state.quizQuestions[state.quizIndex];
    const total = state.quizQuestions.length;
    const cur = state.quizIndex + 1;
    const pct = Math.round((cur / total) * 100);

    const progKey = getProgressKey(state.currentUnitId || q.unitId);
    const canResume = (state.quizIndex === 0 && typeof state.resumeTargetIdx === 'number' && state.resumeTargetIdx > 0 && state.resumeTargetIdx < total);
    const lastSavedIdx = state.resumeTargetIdx;

    // 當推進離開第 0 題，或本身沒有待續考提示時，才覆寫儲存目前練習題號進度
    if (progKey && (state.quizIndex > 0 || !canResume)) {
      if (state.quizIndex > 0) state.resumeTargetIdx = null;
      state.unitProgress[progKey] = state.quizIndex;
      saveState();
    }

    // 產生題號速跳抽屜盤 HTML
    const drawerGridHtml = state.quizQuestions.map((item, i) => {
      const ans = state.sessionAnswers.find(a => a.qId === item.id);
      let statusClass = 'unanswered';
      let badgeText = '';
      if (ans) {
        if (ans.result === 'ok') { statusClass = 'ok'; badgeText = '✓'; }
        else if (ans.result === 'slow') { statusClass = 'slow'; badgeText = '⏳'; }
        else if (ans.result === 'bad') { statusClass = 'bad'; badgeText = '✗'; }
      }
      const isCurrent = (i === state.quizIndex) ? 'current' : '';
      return `
        <button type="button" class="drawer-q-btn ${statusClass} ${isCurrent}" data-jump-idx="${i}">
          <span>${i + 1}</span>
          ${badgeText ? `<span class="q-ic">${badgeText}</span>` : ''}
        </button>
      `;
    }).join('');

    const isExamUnit = q.unitId === 'EXAM_MID1' || (state.currentUnitId === 'EXAM_MID1');
    const unitObj = UNITS.find(u => u.id === q.unitId) || { title: isExamUnit ? '六年級上_第一次段考' : '綜合特訓' };
    const isMental = q.batch === '純腦力體操' || (q.options && q.options.length > 0 && !isExamUnit);
    const starNum = q.stars || q.level || 1;
    const starsHtml = isMental
      ? `<span class="tag star-badge">⭐ ${starNum} 顆星天梯</span>`
      : '★'.repeat(q.difficulty || 2) + '☆'.repeat(Math.max(0, 5 - (q.difficulty || 2)));
    const isError = state.errorBook.includes(q.id);

    const hasImage = !!(q.cropImage || q.examPageImage);
    const isImgMode = !!state.imgModeQuestions[q.id];

    // 檢查本題是否在當前場次中已被作答過（回頭看上一題情況）
    const existingAnswer = state.sessionAnswers.find(a => a.qId === q.id);
    const isAnswered = !!existingAnswer;

    const hasOptions = Array.isArray(q.options) && q.options.length > 0;
    const correctKey = (q.answerKey || q.answer.trim().charAt(0)).toUpperCase();
    let answerDisplay = formatMathForKids(q.answer);
    if (hasOptions) {
      const optIdx = ['A', 'B', 'C', 'D'].indexOf(correctKey);
      if (optIdx >= 0 && q.options[optIdx]) {
        const cleanOpt = cleanOptionText(q.options[optIdx]);
        answerDisplay = `${correctKey} · ${cleanOpt}`;
      }
    }

    const optionsHtml = hasOptions ? `
      <div class="options-grid" id="options-grid">
        ${q.options.map((opt, i) => {
          const letter = ['A', 'B', 'C', 'D'][i] || String(i + 1);
          const cleanText = cleanOptionText(opt);
          let btnClass = 'opt-btn';
          let disabledAttr = '';
          if (isAnswered) {
            disabledAttr = 'disabled';
            if (letter === correctKey) {
              btnClass += ' opt-correct';
            } else if (letter === existingAnswer.userChoice && existingAnswer.result === 'bad') {
              btnClass += ' opt-wrong';
            } else {
              btnClass += ' opt-dim';
            }
          }
          return `
            <button type="button" class="${btnClass}" data-opt-key="${letter}" ${disabledAttr}>
              <span class="opt-letter">${letter}</span>
              <span class="opt-text">${cleanText}</span>
            </button>
          `;
        }).join('')}
      </div>
    ` : '';

    const hintHtml = isMental ? `
      <div class="paper-hint mental-hint">
        <span style="font-size: 26px">🧠</span>
        <div>
          <b>早餐純腦力直覺・完全不需拿筆計算</b>
          <div style="font-size: 14px; opacity: .88">請直接點選選項！運用數感、奇偶性、倍數特徵或極值推導秒殺。</div>
        </div>
      </div>
    ` : isExamUnit ? `
      <div class="paper-hint" style="background: linear-gradient(135deg, #fefce8, #fef9c3); border: 1.5px solid #fde047; color: #854d0e;">
        <span style="font-size: 24px">🏆</span>
        <div>
          <b>段考全真題紙筆作答時間</b>
          <div style="font-size: 14px; opacity: .9">考卷題目與選項 100% 忠實還原，請先在紙上計算，算好後核對標準答案。如看不清題意可點右上角查看原卷！</div>
        </div>
      </div>
    ` : `
      <div class="paper-hint">
        <span style="font-size: 24px">📝</span>
        <div>
          <b>紙筆計算時間</b>
          <div style="font-size: 14px; opacity: .85">請先在計算紙上完整列出算式與推導，算好後再點擊下方對答案。</div>
        </div>
      </div>
    `;

    const alertHtml = isAnswered && hasOptions ? `
      <div id="mental-feedback-alert" class="mental-feedback-alert ${existingAnswer.result === 'ok' ? 'ok' : 'bad'}" style="display: block;">
        ${existingAnswer.result === 'ok' ? '🎯 <b>直覺精準！完全不用拿筆就秒殺！</b>' : '💡 <b>掉進思維盲點了！快看不用動筆的秒殺邏輯：</b>'}
      </div>
    ` : `
      <div id="mental-feedback-alert" style="display: none;"></div>
    `;

    const examTabsHtml = isExamUnit ? `
      <div class="exam-school-tabs-wrap">
        <div class="exam-tabs-header">
          <span class="exam-tabs-title">🏫 選擇段考學校（方案 C 雙模速換）：</span>
          <span class="muted" style="font-size: 12.5px;">目前模式：<b>${EXAM_SCHOOLS.find(s => s.id === state.examSchool)?.name || '全部學校綜合'}</b></span>
        </div>
        <div class="exam-school-tabs">
          ${EXAM_SCHOOLS.map(sch => {
            const active = (state.examSchool || 'ALL') === sch.id ? 'active' : '';
            return `
              <button type="button" class="school-tab-btn ${active}" data-school-tab="${sch.id}">
                <span>${sch.shortName}</span>
                <span class="badge-cnt">${sch.count}題</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    ` : '';

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view quiz">
        <div class="quiz-head">
          <div class="quiz-nav-left">
            <button class="btn btn-ghost" id="btn-back-dash" title="離開測驗">← 結束測驗</button>
            <button class="btn btn-ghost" id="btn-prev-q" title="回頭看上一題" ${state.quizIndex === 0 ? 'disabled' : ''}>⏮️ 上一題</button>
            <button class="btn btn-ghost" id="btn-next-q-top" title="跳至下一題">${cur === total ? '結算 🏁' : '下一題 ⏭️'}</button>
          </div>
          <span class="crumb">${unitObj.title}</span>
          <div class="progress"><i style="width: ${pct}%"></i></div>
          <button type="button" class="count-badge-btn" id="btn-toggle-drawer" title="展開題號速跳盤">
            第 ${cur} / ${total} 題 ▾
          </button>
        </div>

        <div class="quiz-grid-drawer" id="quiz-grid-drawer" style="display: none;">
          <div class="grid-drawer-head">
            <span>🔢 題號速跳盤（綠色答對・紅色答錯・灰色未答，點擊直接跳題）</span>
            <button type="button" class="btn-close-drawer" id="btn-close-drawer">✕</button>
          </div>
          <div class="drawer-q-grid">
            ${drawerGridHtml}
          </div>
        </div>

        ${canResume ? `
          <div class="resume-hint-bar">
            <span>📌 上次練習記錄進行到第 ${lastSavedIdx + 1} 題</span>
            <button type="button" class="btn btn-sm btn-jump-resume" id="btn-resume-jump" data-resume-idx="${lastSavedIdx}">👉 直接跳轉第 ${lastSavedIdx + 1} 題</button>
          </div>
        ` : ''}

        ${examTabsHtml}

        <article class="glass q-card">
          <div class="q-top-action-bar">
            <div class="q-tags" style="margin-bottom: 0;">
              ${q.school ? `<span class="tag" style="background:#e0e7ff; color:#3730a3; font-weight:800;">🏫 ${q.school}</span>` : ''}
              <span class="tag">${q.category || '觀念綜合'}</span>
              <span class="tag lv">${isMental ? `純腦力 ${starNum}★` : isExamUnit ? `段考題` : `天梯 Level ${q.level || 1}`}</span>
              ${starsHtml}
              <span class="tag">${q.source || ''}</span>
              ${isError ? `<span class="tag bad">🔥 錯題待消滅</span>` : ''}
              ${q.cropImage ? `<span class="tag" style="background:#f0fdf4; color:#166534; font-weight:700;">📷 附原卷圖表裁切</span>` : ''}
            </div>

            ${hasImage ? `
              <button type="button" class="btn-crop-toggle ${isImgMode ? 'active' : ''}" id="btn-crop-toggle" title="切換文字題目與考卷原圖">
                ${isImgMode ? '📝 返回文字題目' : '📷 查看考卷原圖'}
              </button>
            ` : ''}
          </div>

          <div class="q-text" id="q-content" style="${isImgMode ? 'display: none;' : ''}">${q.question}</div>

          ${hasImage ? `
            <div class="crop-image-container" id="crop-image-container" style="${isImgMode ? 'display: block;' : 'display: none;'}">
              <div class="crop-img-wrap" id="crop-img-wrap" title="點擊放大超高清檢視">
                <img src="${q.cropImage || q.examPageImage}" alt="考卷題目原圖" class="exam-crop-img" id="exam-crop-img">
                <div class="crop-zoom-hint">🔍 點擊查看超清大圖</div>
              </div>
              ${q.examPageImage && q.cropImage ? `
                <div class="crop-footer-actions">
                  <button type="button" class="btn-view-page" id="btn-view-full-page">
                    📄 查看考卷整頁原圖
                  </button>
                </div>
              ` : ''}
            </div>
          ` : ''}

          ${hasImage && !isImgMode ? `
            <div style="font-size: 13px; color: #047857; margin: 8px 0 14px; font-weight: 700;">
              💡 本題附有全真考卷圖表裁切，如需核對考卷排版與插圖，請點右上角「📷 查看考卷原圖」！
            </div>
          ` : ''}

          ${q.svg ? `<div class="q-figure">${q.svg}</div>` : ''}

          ${hintHtml}

          ${hasOptions ? optionsHtml : ''}

          ${alertHtml}

          ${!hasOptions ? `
            <div class="reveal" id="reveal-area" style="${isAnswered ? 'display: none;' : ''}">
              <button class="btn btn-primary btn-lg btn-block" id="btn-show-answer">
                👁️ 查看正解與推導步驟
              </button>
            </div>
          ` : ''}

          <div class="answer" id="answer-area" style="${isAnswered ? 'display: grid;' : 'display: none;'}">
            <div class="box final">
              <h4>🎯 正確答案</h4>
              <div class="ans">${answerDisplay}</div>
            </div>

            ${q.steps && q.steps.length > 0 ? `
              <div class="box steps">
                <h4>📐 ${isMental ? '邏輯推理分析' : '步驟拆解與推導過程'}</h4>
                <ol>
                  ${q.steps.map(s => `<li>${s}</li>`).join('')}
                </ol>
              </div>
            ` : ''}

            ${q.insight ? `
              <div class="box insight">
                <h4>💡 ${isMental ? '純腦力秒殺思維（為什麼完全不用拿筆算）' : '奧數秒殺思維（競賽直覺速算）'}</h4>
                <div>${q.insight}</div>
              </div>
            ` : ''}

            ${q.trap ? `
              <div class="box trap">
                <h4>⚠️ 典型錯誤防坑診斷 <code>${q.trap.code || ''}</code></h4>
                <div>${q.trap.text}</div>
              </div>
            ` : ''}

            ${!hasOptions ? `
              <div class="feedback">
                <p>請誠實回饋你剛才的紙筆作答狀況：</p>
                <div class="fb-row">
                  <button type="button" class="fb ok ${isAnswered && existingAnswer.result === 'ok' ? 'picked' : (isAnswered ? 'dim' : '')}" data-fb="ok" ${isAnswered ? 'disabled' : ''}>
                    <span class="emo">👍</span>
                    我算對了
                    <small>思路清晰順暢</small>
                  </button>
                  <button type="button" class="fb slow ${isAnswered && existingAnswer.result === 'slow' ? 'picked' : (isAnswered ? 'dim' : '')}" data-fb="slow" ${isAnswered ? 'disabled' : ''}>
                    <span class="emo">⏳</span>
                    算對但想很久
                    <small>需要加強熟練</small>
                  </button>
                  <button type="button" class="fb bad ${isAnswered && existingAnswer.result === 'bad' ? 'picked' : (isAnswered ? 'dim' : '')}" data-fb="bad" ${isAnswered ? 'disabled' : ''}>
                    <span class="emo">❌</span>
                    我有算錯
                    <small>記進錯題本</small>
                  </button>
                </div>
              </div>
            ` : `
              <div class="feedback" style="padding: 14px 18px;">
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                  <span style="font-size: 14px; color: var(--ink-2); font-weight: 700;">若是「猜對但想太久」，可手動標記：</span>
                  <button type="button" class="btn btn-ghost" id="btn-mark-slow" style="padding: 6px 14px; font-size: 14px;" ${(state.slowCounts[q.id] || 0) > 0 ? 'disabled' : ''}>
                    ${(state.slowCounts[q.id] || 0) > 0 ? '✔ 已標記為想很久' : '⏳ 想很久（標記熟練度）'}
                  </button>
                </div>
              </div>
            `}

          </div>

          <div class="quiz-bottom-nav">
            <button type="button" class="btn btn-ghost btn-lg" id="btn-prev-q-bottom" ${state.quizIndex === 0 ? 'disabled' : ''}>
              ⏮️ 上一題
            </button>
            <button type="button" class="btn btn-ghost btn-lg btn-jump-drawer" id="btn-bottom-drawer" title="展開題號速跳盤">
              🔢 快速跳題
            </button>
            ${isAnswered ? `
              <button type="button" class="btn btn-primary btn-lg" id="btn-next-q">
                ${cur === total ? '完成測驗並結算 🏁' : '進入下一題 →'}
              </button>
            ` : `
              <button type="button" class="btn btn-secondary btn-lg btn-skip-next" id="btn-next-q" title="先跳過本題直接做下一題">
                ${cur === total ? '測驗結算 🏁' : '跳至下一題 ❯'}
              </button>
            `}
          </div>
        </article>
      </div>
    `;

    renderMath(app);

    // 綁定中斷/離開按鈕（直接結算並回顧）
    document.getElementById('btn-back-dash').addEventListener('click', () => {
      finishQuiz();
    });

    // 綁定雙向導航切換
    const handlePrev = () => {
      if (state.quizIndex > 0) {
        state.quizIndex--;
        renderQuizQuestion();
      }
    };
    const prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) prevBtn.addEventListener('click', handlePrev);
    const prevBtnBottom = document.getElementById('btn-prev-q-bottom');
    if (prevBtnBottom) prevBtnBottom.addEventListener('click', handlePrev);

    const handleNext = () => {
      if (state.quizIndex < state.quizQuestions.length - 1) {
        state.quizIndex++;
        renderQuizQuestion();
      } else {
        finishQuiz();
      }
    };
    const nextBtnTop = document.getElementById('btn-next-q-top');
    if (nextBtnTop) nextBtnTop.addEventListener('click', handleNext);
    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) nextBtn.addEventListener('click', handleNext);

    // 抽屜盤切換事件
    const toggleDrawer = () => {
      const drawer = document.getElementById('quiz-grid-drawer');
      if (drawer) {
        drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
      }
    };
    const drawerToggleBtn = document.getElementById('btn-toggle-drawer');
    if (drawerToggleBtn) drawerToggleBtn.addEventListener('click', toggleDrawer);
    const bottomDrawerBtn = document.getElementById('btn-bottom-drawer');
    if (bottomDrawerBtn) bottomDrawerBtn.addEventListener('click', toggleDrawer);
    const closeDrawerBtn = document.getElementById('btn-close-drawer');
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', toggleDrawer);

    // 抽屜盤題目按鈕跳轉
    app.querySelectorAll('[data-jump-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-jump-idx'), 10);
        if (!isNaN(idx) && idx >= 0 && idx < state.quizQuestions.length) {
          state.quizIndex = idx;
          renderQuizQuestion();
        }
      });
    });

    // 續考跳轉按鈕事件
    const resumeBtn = document.getElementById('btn-resume-jump');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', () => {
        const targetIdx = parseInt(resumeBtn.getAttribute('data-resume-idx'), 10);
        if (!isNaN(targetIdx) && targetIdx >= 0 && targetIdx < state.quizQuestions.length) {
          state.resumeTargetIdx = null;
          state.quizIndex = targetIdx;
          renderQuizQuestion();
        }
      });
    }

    // 方案 C：學校分頁切換按鈕事件
    app.querySelectorAll('[data-school-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSchool = btn.getAttribute('data-school-tab');
        if (state.examSchool === targetSchool) return;
        if (state.sessionAnswers.length > 0) {
          if (!confirm('切換學校將會重新開始該校段考測驗，確定切換嗎？')) return;
        }
        startQuiz('unit', 'EXAM_MID1', targetSchool);
      });
    });

    // 考卷原圖切換按鈕事件
    const cropToggleBtn = document.getElementById('btn-crop-toggle');
    if (cropToggleBtn) {
      cropToggleBtn.addEventListener('click', () => {
        const newMode = !state.imgModeQuestions[q.id];
        state.imgModeQuestions[q.id] = newMode;
        const qContent = document.getElementById('q-content');
        const cropContainer = document.getElementById('crop-image-container');
        if (newMode) {
          if (qContent) qContent.style.display = 'none';
          if (cropContainer) cropContainer.style.display = 'block';
          cropToggleBtn.classList.add('active');
          cropToggleBtn.textContent = '📝 返回文字題目';
        } else {
          if (qContent) qContent.style.display = 'block';
          if (cropContainer) cropContainer.style.display = 'none';
          cropToggleBtn.classList.remove('active');
          cropToggleBtn.textContent = '📷 查看考卷原圖';
        }
      });
    }

    // 點擊原圖開啟 Lightbox 超高清放大
    const cropWrap = document.getElementById('crop-img-wrap');
    if (cropWrap) {
      cropWrap.addEventListener('click', () => {
        openLightbox(q.cropImage || q.examPageImage, `${q.school || '段考'} - 題目原卷裁切`);
      });
    }

    // 查看整頁考卷原圖
    const fullPageBtn = document.getElementById('btn-view-full-page');
    if (fullPageBtn) {
      fullPageBtn.addEventListener('click', () => {
        openLightbox(q.examPageImage, `${q.school || '段考'} - 考卷整頁原圖`);
      });
    }

    const ansArea = document.getElementById('answer-area');

    if (hasOptions) {
      if (!isAnswered) {
        app.querySelectorAll('.opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const chosen = btn.getAttribute('data-opt-key');
            const isCorrect = (chosen.toUpperCase() === correctKey);

            app.querySelectorAll('.opt-btn').forEach(b => {
              b.disabled = true;
              const k = b.getAttribute('data-opt-key').toUpperCase();
              if (k === correctKey) {
                b.classList.add('opt-correct');
              } else if (b === btn && !isCorrect) {
                b.classList.add('opt-wrong');
              } else {
                b.classList.add('opt-dim');
              }
            });

            recordAnswer(q, isCorrect ? 'ok' : 'bad', chosen);

            const alertDiv = document.getElementById('mental-feedback-alert');
            if (alertDiv) {
              alertDiv.style.display = 'block';
              alertDiv.className = `mental-feedback-alert ${isCorrect ? 'ok' : 'bad'}`;
              alertDiv.innerHTML = isCorrect
                ? '🎯 <b>直覺精準！完全不用拿筆就秒殺！</b>'
                : '💡 <b>掉進思維盲點了！快看不用動筆的秒殺邏輯：</b>';
            }

            ansArea.style.display = 'grid';
            renderMath(ansArea);
            const bNext = document.getElementById('btn-next-q');
            if (bNext) {
              bNext.className = 'btn btn-primary btn-lg';
              bNext.textContent = (cur === total) ? '完成測驗並結算 🏁' : '進入下一題 →';
              bNext.removeAttribute('title');
            }
            ansArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        });
      }

      const markSlowBtn = document.getElementById('btn-mark-slow');
      if (markSlowBtn && !markSlowBtn.disabled) {
        markSlowBtn.addEventListener('click', () => {
          state.slowCounts[q.id] = (state.slowCounts[q.id] || 0) + 1;
          saveState();
          markSlowBtn.disabled = true;
          markSlowBtn.textContent = '✔ 已標記為想很久';
        });
      }
    } else {
      if (!isAnswered) {
        const showBtn = document.getElementById('btn-show-answer');
        if (showBtn) {
          showBtn.addEventListener('click', () => {
            showBtn.style.display = 'none';
            ansArea.style.display = 'grid';
            renderMath(ansArea);
            ansArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        }

        const fbButtons = app.querySelectorAll('[data-fb]');
        fbButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-fb');
            recordAnswer(q, val, val);

            fbButtons.forEach(b => {
              b.disabled = true;
              if (b === btn) b.classList.add('picked');
              else b.classList.add('dim');
            });

            const bNext = document.getElementById('btn-next-q');
            if (bNext) {
              bNext.className = 'btn btn-primary btn-lg';
              bNext.textContent = (cur === total) ? '完成測驗並結算 🏁' : '進入下一題 →';
              bNext.removeAttribute('title');
            }
            ansArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        });
      }
    }
  }

  function recordAnswer(q, result, userChoice = null) {
    const existingIndex = state.sessionAnswers.findIndex(a => a.qId === q.id);
    const answerRecord = {
      qId: q.id,
      unitId: q.unitId,
      category: q.category,
      level: q.level || q.stars || 1,
      result: result, // 'ok' | 'slow' | 'bad'
      userChoice: userChoice, // 'A' | 'B' | 'C' | 'D' or 'ok' | 'slow' | 'bad'
      trapCode: q.trap ? q.trap.code : null,
      time: new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      const old = state.sessionAnswers[existingIndex];
      if (old.result !== result) {
        if (old.result === 'ok') state.successCounts[q.id] = Math.max(0, (state.successCounts[q.id] || 1) - 1);
        if (old.result === 'slow') state.slowCounts[q.id] = Math.max(0, (state.slowCounts[q.id] || 1) - 1);
        if (old.result === 'bad') state.errorCounts[q.id] = Math.max(0, (state.errorCounts[q.id] || 1) - 1);

        if (result === 'ok') {
          state.successCounts[q.id] = (state.successCounts[q.id] || 0) + 1;
          state.errorBook = state.errorBook.filter(id => id !== q.id);
        } else if (result === 'slow') {
          state.slowCounts[q.id] = (state.slowCounts[q.id] || 0) + 1;
        } else if (result === 'bad') {
          state.errorCounts[q.id] = (state.errorCounts[q.id] || 0) + 1;
          if (!state.errorBook.includes(q.id)) state.errorBook.push(q.id);
        }
      }
      state.sessionAnswers[existingIndex] = answerRecord;
    } else {
      state.sessionAnswers.push(answerRecord);
      if (result === 'ok') {
        state.successCounts[q.id] = (state.successCounts[q.id] || 0) + 1;
        state.errorBook = state.errorBook.filter(id => id !== q.id);
      } else if (result === 'slow') {
        state.slowCounts[q.id] = (state.slowCounts[q.id] || 0) + 1;
      } else if (result === 'bad') {
        state.errorCounts[q.id] = (state.errorCounts[q.id] || 0) + 1;
        if (!state.errorBook.includes(q.id)) {
          state.errorBook.push(q.id);
        }
      }
    }
    saveState();
  }

  // -------------------------------------------------------
  // 視圖渲染器：3. 場次結算 (Result View)
  // -------------------------------------------------------
  function finishQuiz() {
    if (state.sessionAnswers.length === 0) {
      showToast('本場次未作答任何題目，已返回首頁');
      state.view = 'dashboard';
      renderDashboardView();
      return;
    }

    const answeredTotal = state.sessionAnswers.length;
    const testTotal = state.quizQuestions.length;
    const okCnt = state.sessionAnswers.filter(a => a.result === 'ok').length;
    const slowCnt = state.sessionAnswers.filter(a => a.result === 'slow').length;
    const badCnt = state.sessionAnswers.filter(a => a.result === 'bad').length;
    const skippedCnt = Math.max(0, testTotal - answeredTotal);
    const score = answeredTotal > 0 ? Math.round((okCnt / answeredTotal) * 100) : 0;

    const sessionRecord = {
      date: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
      mode: state.quizMode,
      unitId: state.currentUnitId,
      total: testTotal,
      answeredTotal,
      skippedCnt,
      okCnt,
      slowCnt,
      badCnt,
      score,
      answers: [...state.sessionAnswers],
    };

    state.fullHistory.push(sessionRecord);
    saveState();

    const reviewItemsHtml = state.quizQuestions.map((q, idx) => {
      const ans = state.sessionAnswers.find(a => a.qId === q.id);
      const u = UNITS.find(x => x.id === q.unitId) || { title: '綜合特訓' };
      const isMental = q.batch === '純腦力體操' || (q.options && q.options.length > 0);
      const isAnswered = !!ans;
      const isCorrect = ans && ans.result === 'ok';
      const isSlow = ans && ans.result === 'slow';

      const statusTag = !isAnswered
        ? '<span class="tag" style="background:#f1f5f9; color:#64748b; font-weight:700;">⚪ 未作答 (已跳過)</span>'
        : isCorrect
        ? '<span class="tag ok">✅ 答對秒殺</span>'
        : isSlow
        ? '<span class="tag" style="background:#eef2ff; color:#3730a3; font-weight:700;">⏳ 算對想很久</span>'
        : '<span class="tag bad">❌ 答錯入庫</span>';

      let choiceHtml = '';
      if (!isAnswered) {
        choiceHtml = `
          <div class="review-choice-grid">
            <div class="review-choice-pill skipped">
              <span class="label">作答狀況：</span>
              <b>⚪ 本題跳過未作答（不計入錯題）</b>
            </div>
            <div class="review-choice-pill correct">
              <span class="label">標準正解：</span>
              <b>${q.answer}</b>
            </div>
          </div>
        `;
      } else if (q.options && q.options.length > 0) {
        const userKey = (ans.userChoice || '').toUpperCase();
        const optIdx = ['A', 'B', 'C', 'D'].indexOf(userKey);
        const userOptText = optIdx >= 0 && q.options[optIdx] ? cleanOptionText(q.options[optIdx]) : (ans.userChoice || '未作答');

        const correctKey = (q.answerKey || q.answer.trim().charAt(0)).toUpperCase();
        const corIdx = ['A', 'B', 'C', 'D'].indexOf(correctKey);
        const corOptText = corIdx >= 0 && q.options[corIdx] ? cleanOptionText(q.options[corIdx]) : formatMathForKids(q.answer);

        choiceHtml = `
          <div class="review-choice-grid">
            <div class="review-choice-pill ${isCorrect ? 'correct' : 'wrong'}">
              <span class="label">你的選擇：</span>
              <b>(${userKey}) ${userOptText}</b>
            </div>
            ${!isCorrect ? `
              <div class="review-choice-pill correct">
                <span class="label">標準正解：</span>
                <b>(${correctKey}) ${corOptText}</b>
              </div>
            ` : ''}
          </div>
        `;
      } else {
        choiceHtml = `
          <div class="review-choice-grid">
            <div class="review-choice-pill ${isCorrect ? 'correct' : isSlow ? 'slow' : 'wrong'}">
              <span class="label">作答狀況：</span>
              <b>${isCorrect ? '👍 我算對了' : isSlow ? '⏳ 算對但想很久' : '❌ 我有算錯'}</b>
            </div>
            <div class="review-choice-pill correct">
              <span class="label">標準正解：</span>
              <b>${q.answer}</b>
            </div>
          </div>
        `;
      }

      return `
        <div class="review-item ${!isAnswered ? 'skipped' : ans.result}">
          <div class="review-item-head">
            <div class="review-item-meta">
              <span class="review-q-num">第 ${idx + 1} 題</span>
              <span class="tag">${u.title}</span>
              <span class="tag lv">${isMental ? `⭐ ${q.stars || 1}★` : `L${q.level || 1}`}</span>
              ${statusTag}
            </div>
            <button type="button" class="btn btn-ghost btn-sm btn-toggle-detail" data-target="detail-${idx}">
              📖 看詳解 ▾
            </button>
          </div>

          <div class="review-q-text">${q.question}</div>
          ${q.svg ? `<div class="review-q-fig">${q.svg}</div>` : ''}

          ${choiceHtml}

          <div class="review-sol-panel" id="detail-${idx}" style="display: none;">
            <div class="box final">
              <h4>🎯 正確答案</h4>
              <div class="ans">${q.answer}</div>
            </div>

            ${q.steps && q.steps.length > 0 ? `
              <div class="box steps">
                <h4>📐 ${isMental ? '邏輯推理分析' : '步驟拆解與推導過程'}</h4>
                <ol>${q.steps.map(s => `<li>${s}</li>`).join('')}</ol>
              </div>
            ` : ''}

            ${q.insight ? `
              <div class="box insight">
                <h4>💡 ${isMental ? '純腦力秒殺思維（為什麼完全不用拿筆算）' : '奧數秒殺思維（競賽直覺）'}</h4>
                <div>${q.insight}</div>
              </div>
            ` : ''}

            ${q.trap ? `
              <div class="box trap">
                <h4>⚠️ 典型錯誤防坑診斷 <code>${q.trap.code || ''}</code></h4>
                <div>${q.trap.text}</div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view result">
        <div class="glass result-card wide" style="padding: 40px; margin: 0 auto;">
          <div style="font-size: 64px; line-height: 1">
            ${score >= 80 ? '🎉' : score >= 60 ? '💪' : '🌱'}
          </div>
          <div class="big" style="color: ${score >= 80 ? 'var(--ok)' : score >= 60 ? 'var(--slow)' : 'var(--bad)'}; margin: 12px 0;">
            ${score} 分
          </div>
          <p class="muted">
            已作答 ${answeredTotal} 題 ${skippedCnt > 0 ? `（另有 ${skippedCnt} 題跳過未作答）` : ''} · 總題數 ${testTotal} 題
          </p>

          <div class="result-bars">
            <div class="stat ok"><b>${okCnt}</b><span>秒殺熟練</span></div>
            <div class="stat pri"><b>${slowCnt}</b><span>想很久</span></div>
            <div class="stat bad"><b>${badCnt}</b><span>答錯進錯題</span></div>
            ${skippedCnt > 0 ? `
              <div class="stat" style="background: #f8fafc; border-color: #cbd5e1; color: #475569;">
                <b>${skippedCnt}</b><span>跳過未答</span>
              </div>
            ` : ''}
          </div>

          <div class="result-actions">
            <button class="btn btn-primary btn-lg" id="btn-restart-unit">再練一次</button>
            ${state.errorBook.length > 0 ? `<button class="btn btn-ghost btn-lg" id="btn-goto-errors">查看錯題本 (${state.errorBook.length})</button>` : ''}
            <button class="btn btn-ghost btn-lg" id="btn-res-home">返回首頁</button>
          </div>

          <div class="review-section">
            <div class="review-header-bar">
              <h3>📋 本次測驗答題明細回顧 (${testTotal} 題)</h3>
              <span style="font-size: 13px; color: var(--ink-2);">點擊「📖 看詳解」可展開解題推導與秒殺思維</span>
            </div>
            <div class="review-list">
              ${reviewItemsHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    renderMath(app);

    document.getElementById('btn-restart-unit').addEventListener('click', () => {
      startQuiz(state.quizMode, state.currentUnitId);
    });
    const errBtn = document.getElementById('btn-goto-errors');
    if (errBtn) {
      errBtn.addEventListener('click', () => renderErrorBookView());
    }
    document.getElementById('btn-res-home').addEventListener('click', () => {
      state.view = 'dashboard';
      renderDashboardView();
    });

    // 詳解展開/收合事件綁定
    app.querySelectorAll('.btn-toggle-detail').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        if (panel) {
          const isHidden = (panel.style.display === 'none');
          panel.style.display = isHidden ? 'grid' : 'none';
          btn.textContent = isHidden ? '收起詳解 ▴' : '📖 看詳解 ▾';
          if (isHidden) {
            renderMath(panel);
          }
        }
      });
    });
  }

  // -------------------------------------------------------
  // 視圖渲染器：4. 錯題本 (Error Book View)
  // -------------------------------------------------------
  function renderErrorBookView(filterUnit = null) {
    state.view = 'error_book';
    const errorQuestions = QUESTION_BANK.filter(q => state.errorBook.includes(q.id));
    const displayed = filterUnit ? errorQuestions.filter(q => q.unitId === filterUnit) : errorQuestions;

    const unitTabsHtml = [
      `<button class="chip ${!filterUnit ? 'on' : ''}" data-filter-unit="all">全部 (${errorQuestions.length})</button>`,
      ...UNITS.map(u => {
        const cnt = errorQuestions.filter(q => q.unitId === u.id).length;
        if (cnt === 0) return '';
        const titleText = u.isExam ? `🏆 段考真題 (${cnt})` : `第${u.no}單元 (${cnt})`;
        return `<button class="chip ${filterUnit === u.id ? 'on' : ''}" data-filter-unit="${u.id}">${titleText}</button>`;
      })
    ].join('');

    const listHtml = displayed.length > 0 ? displayed.map(q => {
      const u = UNITS.find(x => x.id === q.unitId) || {};
      const ec = state.errorCounts[q.id] || 1;
      const unitLabel = u.isExam ? `🏆 六上第一次段考` : `第 ${u.no} 單元 ${u.title}`;
      return `
        <div class="err-item">
          <div>
            <div class="q-mini">${q.question}</div>
            <div class="meta">
              <span class="tag">${unitLabel}</span>
              ${q.school ? `<span class="tag" style="background:#e0e7ff; color:#3730a3; font-weight:700;">🏫 ${q.school}</span>` : ''}
              <span class="tag">${q.category || ''}</span>
              <span class="tag bad">🔥 累計錯 ${ec} 次</span>
              ${q.trap ? `<span class="tag" style="background: #fef2f2; color: #991b1b">盲點：${q.trap.text}</span>` : ''}
            </div>
          </div>
          <div>
            <button class="btn btn-primary" data-retry-q="${q.id}">重做此題</button>
          </div>
        </div>
      `;
    }).join('') : `
      <div class="empty">
        <div class="emo">🌟</div>
        <h3>太棒了！目前沒有待消滅的錯題</h3>
        <p class="muted">繼續保持，可以在首頁直接挑選新單元挑戰奧數天梯！</p>
      </div>
    `;

    const curUser = getCurrentUserObj();
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view error-book">
        <div class="section-title">
          <h2>🔥 ${curUser.icon} ${curUser.name} 的終身錯題本</h2>
          <div style="display: flex; gap: 8px;">
            ${errorQuestions.length > 0 ? `<button class="btn btn-primary" id="btn-drill-all-errors">一鍵消滅全部錯題</button>` : ''}
            <button class="btn btn-ghost" id="btn-err-back">← 回首頁</button>
          </div>
        </div>

        <div class="err-tabs">${unitTabsHtml}</div>
        <div class="err-list" id="err-list-container">${listHtml}</div>
      </div>
    `;

    renderMath(app);

    document.getElementById('btn-err-back').addEventListener('click', () => {
      state.view = 'dashboard';
      renderDashboardView();
    });

    const drillBtn = document.getElementById('btn-drill-all-errors');
    if (drillBtn) {
      drillBtn.addEventListener('click', () => startQuiz('error_book'));
    }

    app.querySelectorAll('[data-filter-unit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const u = btn.getAttribute('data-filter-unit');
        renderErrorBookView(u === 'all' ? null : u);
      });
    });

    app.querySelectorAll('[data-retry-q]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = btn.getAttribute('data-retry-q');
        const q = QUESTION_BANK.find(x => x.id === qId);
        if (q) {
          state.quizQuestions = [q];
          state.quizIndex = 0;
          state.quizMode = 'error_book';
          state.currentUnitId = q.unitId;
          state.sessionAnswers = [];
          state.view = 'quiz';
          renderQuizQuestion();
        }
      });
    });
  }

  // -------------------------------------------------------
  // 視圖渲染器：5. A4 考卷排版與出卷 (Print Setup View)
  // -------------------------------------------------------
  function renderPrintSetupView() {
    state.view = 'print';

    const unitChecksHtml = UNITS.map(u => {
      const chk = state.printConfig.unitIds.includes(u.id) ? 'checked' : '';
      const labelText = u.isExam ? `🏆 ${u.title}` : `第 ${u.no} 單元 ${u.title}`;
      return `
        <label>
          <input type="checkbox" value="${u.id}" ${chk} data-print-unit-toggle>
          <span>${labelText}</span>
        </label>
      `;
    }).join('');

    const printBatches = state.printConfig.batches || ['課本原型題', '奧數天梯', '段考真題'];
    const isPaperOnly = printBatches.includes('課本原型題') && printBatches.includes('奧數天梯') && !printBatches.includes('純腦力體操');
    const isMentalOnly = printBatches.length === 1 && printBatches[0] === '純腦力體操';
    const isAllBatch = printBatches.includes('純腦力體操') && printBatches.includes('課本原型題');

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view print-setup">
        <aside class="glass setup-panel no-print">
          <h3>🖨️ A4 考卷設定</h3>
          
          <div class="field">
            <label>選擇出題單元：</label>
            <div class="check-list">${unitChecksHtml}</div>
          </div>

          <div class="field">
            <label>考卷題型分類：</label>
            <div class="seg" style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button type="button" class="chip ${isPaperOnly ? 'on' : ''}" data-print-batch-mode="paper">紙筆計算 (課本+奧數)</button>
              <button type="button" class="chip ${isMentalOnly ? 'on' : ''}" data-print-batch-mode="mental">純腦力選擇卷</button>
              <button type="button" class="chip ${isAllBatch ? 'on' : ''}" data-print-batch-mode="all">全題型綜合</button>
            </div>
          </div>

          <div class="field">
            <label>題目數量：</label>
            <div class="range-row">
              <input type="range" id="print-q-count" min="3" max="15" value="${state.printConfig.count}">
              <b id="print-q-count-val">${state.printConfig.count}</b>
            </div>
          </div>

          <div class="field">
            <label>草稿方格大小：</label>
            <div class="seg">
              <button type="button" class="chip ${state.printConfig.workSize === 'sm' ? 'on' : ''}" data-work="sm">緊湊 (35mm)</button>
              <button type="button" class="chip ${state.printConfig.workSize === 'md' ? 'on' : ''}" data-work="md">標準 (50mm)</button>
              <button type="button" class="chip ${state.printConfig.workSize === 'lg' ? 'on' : ''}" data-work="lg">充裕 (70mm)</button>
            </div>
          </div>

          <button class="btn btn-primary btn-lg btn-block" id="btn-do-print">
            🖨️ 立即列印此考卷 (A4)
          </button>
          <button class="btn btn-ghost btn-block" id="btn-shuffle-print" style="margin-top: 8px;">
            🎲 換一批題目
          </button>
          <button class="btn btn-ghost btn-block" id="btn-print-back" style="margin-top: 8px;">
            ← 取消回首頁
          </button>
        </aside>

        <section class="preview-wrap">
          <div id="paper-container"></div>
        </section>
      </div>
    `;

    renderPaperSheet();

    // 綁定事件
    app.querySelectorAll('[data-print-unit-toggle]').forEach(chk => {
      chk.addEventListener('change', () => {
        const uId = chk.value;
        if (chk.checked) {
          if (!state.printConfig.unitIds.includes(uId)) state.printConfig.unitIds.push(uId);
        } else {
          state.printConfig.unitIds = state.printConfig.unitIds.filter(x => x !== uId);
        }
        if (state.printConfig.unitIds.length === 0) {
          chk.checked = true;
          state.printConfig.unitIds.push(uId);
          showToast('至少勾選一個單元！');
          return;
        }
        renderPaperSheet();
      });
    });

    app.querySelectorAll('[data-print-batch-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-print-batch-mode');
        if (mode === 'paper') {
          state.printConfig.batches = ['課本原型題', '奧數天梯', '段考真題'];
        } else if (mode === 'mental') {
          state.printConfig.batches = ['純腦力體操'];
        } else {
          state.printConfig.batches = ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'];
        }
        app.querySelectorAll('[data-print-batch-mode]').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        renderPaperSheet();
      });
    });

    const rangeInput = document.getElementById('print-q-count');
    const rangeVal = document.getElementById('print-q-count-val');
    rangeInput.addEventListener('input', () => {
      state.printConfig.count = parseInt(rangeInput.value, 10);
      rangeVal.textContent = state.printConfig.count;
      renderPaperSheet();
    });

    app.querySelectorAll('[data-work]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.printConfig.workSize = btn.getAttribute('data-work');
        app.querySelectorAll('[data-work]').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        renderPaperSheet();
      });
    });

    const shufflePrintBtn = document.getElementById('btn-shuffle-print');
    if (shufflePrintBtn) {
      shufflePrintBtn.addEventListener('click', () => {
        renderPaperSheet();
        showToast('已隨機換一批全新考卷題目！');
      });
    }

    document.getElementById('btn-do-print').addEventListener('click', () => {
      window.print();
    });

    document.getElementById('btn-print-back').addEventListener('click', () => {
      state.view = 'dashboard';
      renderDashboardView();
    });
  }

  function renderPaperSheet() {
    const container = document.getElementById('paper-container');
    if (!container) return;

    // 挑選題目：根據考卷獨立設定的 batches，不互相干擾首頁 dashboard 的選定批次
    let pool = QUESTION_BANK.filter(q => state.printConfig.unitIds.includes(q.unitId));
    const pBatches = state.printConfig.batches || ['課本原型題', '奧數天梯', '段考真題'];
    pool = pool.filter(q => pBatches.includes(q.batch || '課本原型題'));
    if (pool.length === 0) {
      pool = QUESTION_BANK.filter(q => state.printConfig.unitIds.includes(q.unitId));
    }
    const selected = shuffle(pool).slice(0, state.printConfig.count);

    // 依人員與題目 ID 組裝 QR Code 網址，支援直接在 iPad 掃描時自動切回該人員帳號對答案
    const curUser = getCurrentUserObj();
    const qIds = selected.map(q => q.id).join(',');
    const checkUrl = `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(state.currentUser)}&quiz_ids=${encodeURIComponent(qIds)}`;
    const qrSvg = makeQRCode(checkUrl);

    const titleUnits = state.printConfig.unitIds.map(uId => {
      const u = UNITS.find(x => x.id === uId);
      if (!u) return '';
      return u.isExam ? u.title : `第${u.no}單元`;
    }).join('、');

    const questionsHtml = selected.map((q, idx) => {
      const workClass = q.work || state.printConfig.workSize;
      const isMentalQ = q.batch === '純腦力體操' || (q.options && q.options.length > 0);
      const isSpecificCrop = q.cropImage && !/_p\d+\.png$/i.test(q.cropImage);
      const figHtml = q.svg
        ? `<div class="pq-fig">${q.svg}</div>`
        : (isSpecificCrop ? `<div class="pq-fig"><img src="${q.cropImage}" alt="考卷題圖" style="max-width:140mm; max-height:55mm; object-fit:contain;"></div>` : '');
      return `
        <div class="pq">
          <div class="pq-title">
            <span class="pq-no">${idx + 1}.</span>
            <div style="flex: 1">${formatMathForKids(q.question)}</div>
          </div>
          ${q.options && q.options.length > 0 ? `
            <div class="pq-options" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 16px; margin: 8px 0 12px; font-size: 14px; font-weight: 600;">
              ${q.options.map((opt, i) => {
                const letter = ['(A)', '(B)', '(C)', '(D)'][i] || `(${i+1})`;
                const clean = cleanOptionText(opt);
                return `<div><b>${letter}</b> ${clean}</div>`;
              }).join('')}
            </div>
          ` : ''}
          ${figHtml}
          <div class="work-grid ${workClass}" title="${isMentalQ ? '直覺思考/草稿格' : '5mm 手寫草稿格'}"></div>
          <div class="pq-ans">答：<i></i></div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <article class="paper">
        <header class="paper-head">
          <div>
            <h2>翰林版國小六上數學 特訓測驗卷 【${titleUnits}】</h2>
            <div class="sub">得分：________　作答時間：___ 分 ___ 秒</div>
            <div class="paper-fields">
              <span>班級：<i></i></span>
              <span>座號：<i></i></span>
              <span>姓名：<i style="font-style: normal; font-weight: 800; text-align: center; padding: 0 4px;">${curUser.name}</i></span>
              <span>日期：<i></i></span>
            </div>
          </div>
          <div class="paper-qr">
            ${qrSvg}
            <div>📱 掃碼線上對答案 (${curUser.name})</div>
          </div>
        </header>

        <section class="paper-body">
          ${questionsHtml}
        </section>

        <footer class="paper-foot">
          六上數學特訓 · 題目完成後請掃描右上角 QR Code 進行即時對答案與思路診斷
        </footer>
      </article>
    `;

    renderMath(container);
  }

  // -------------------------------------------------------
  // AI 閉環匯出：Markdown + 專業教研 Prompt
  // -------------------------------------------------------
  function exportToAI() {
    const curUser = getCurrentUserObj();
    const errorQuestions = QUESTION_BANK.filter(q => state.errorBook.includes(q.id));
    const allAnswers = state.fullHistory.flatMap(h => h.answers || []);
    const dateStr = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

    let md = `# [System Prompt] 國小六年級數學資優教研出題指令（學員：${curUser.name}）

你是一位「國小數學資優培訓與奧數教研專家」。這是學員【${curUser.name}】最近在「六上數學特訓網」的手寫作答與三態自評紀錄。
請深入分析學生的錯題弱點與卡關題目，精準派生新題，並輸出成可直接加入題庫的 JavaScript 程式碼。

## 【學生弱點診斷目標】：
1. 深入分析學生的「算錯題目（❌）」：
   - 提取題目中的 \`misconception_code\`（例如：ERR_INTERVAL_OFF_BY_ONE 間隔漏加1、ERR_TRANSFER_HALF_DIFF 移多補少忘了除以2、ERR_51_IS_PRIME 質數誤判）。
   - 針對每一個錯誤觀念，重新設計 2 題「觀念修正變式題」，變換情境但直擊核心盲點。
2. 針對「算對但想很久（⏳）」的題目：
   - 針對其觀念生成 1~2 題結構相同但數字/情境不同的變形題，訓練解題直覺與直觀反應速度。
3. 針對「算對且熟練（👍）」的題目：
   - 自動啟動「奧數天梯 (olympiad_ladder)」，拔高難度至 Level 3~4（AMC 8 / 亞太盃初賽題型），嚴禁重複出簡單課本死板題！
4. 輸出代碼格式要求：
   - 必須完全符合 \`math_data.js\` 的 QUESTION_BANK 物件規範。
   - batch 屬性請設定為 \`'AI加強題庫_${new Date().toISOString().slice(0, 10).replace(/-/g, '')}'\`。
   - 若為幾何或線段題，請提供精確的 Inline-SVG（包含 viewBox、線段、標註與顏色）。
   - 請只輸出 JavaScript 代碼區塊 \`QUESTION_BANK.push(...);\`，不說任何客套廢話！

==================================================
# 📖 六上數學特訓 — 學員【${curUser.name}】歷史作答與錯題總表
匯出時間：${dateStr}
使用帳號：${curUser.name} (${curUser.role})
待消滅錯題總數：${errorQuestions.length} 題
累積練習場次：${state.fullHistory.length} 場

## 一、🔥 當前待消滅錯題清單（最高優先加強）
`;

    if (errorQuestions.length === 0) {
      md += `目前沒有任何錯題，全冊課本掌握狀況極佳！請直接調用 AMC 8 奧數天梯出題。\n\n`;
    } else {
      errorQuestions.forEach((q, idx) => {
        const u = UNITS.find(x => x.id === q.unitId) || {};
        md += `### ${idx + 1}. [${u.title}] ${q.category} (天梯 L${q.level || 1})\n`;
        md += `- **題目：** ${q.question.replace(/<br>/g, ' ')}\n`;
        md += `- **正確答案：** ${q.answer}\n`;
        md += `- **推導步驟：** ${(q.steps || []).join(' → ')}\n`;
        if (q.trap) {
          md += `- **盲點代碼：** \`${q.trap.code}\` — ${q.trap.text}\n`;
        }
        md += `- **累計錯誤次數：** ${state.errorCounts[q.id] || 1} 次\n\n`;
      });
    }

    md += `## 二、歷史測驗紀錄摘要\n`;
    state.fullHistory.forEach((h, idx) => {
      md += `### 場次 ${idx + 1}（${h.date}）\n`;
      md += `- 得分：${h.score} 分（算對 ${h.okCnt} 題 / 想很久 ${h.slowCnt} 題 / 算錯 ${h.badCnt} 題）\n`;
    });

    // 觸發下載
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const fDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const safeName = curUser.name.replace(/\s+/g, '_');
    a.href = url;
    a.download = `六上數學特訓紀錄_${safeName}_AI派題_${fDate}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`已匯出【${curUser.name}】的 AI 診斷 Prompt Markdown！`);
  }

  // -------------------------------------------------------
  // URL 參數深度連結（支援 QR Code 掃描直接切回指定帳號對答案）
  // -------------------------------------------------------
  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('user');
    if (userParam && USERS.some(u => u.id === userParam.toLowerCase())) {
      switchUser(userParam.toLowerCase(), false);
    }
    const quizIds = params.get('quiz_ids');
    if (quizIds) {
      const ids = quizIds.split(',');
      const selected = QUESTION_BANK.filter(q => ids.includes(q.id));
      if (selected.length > 0) {
        const curU = getCurrentUserObj();
        state.quizQuestions = selected;
        state.quizIndex = 0;
        state.quizMode = 'mixed';
        state.sessionAnswers = [];
        state.view = 'quiz';
        renderQuizQuestion();
        showToast(`已載入【${curU.name}】的考卷對應題目！`);
        return true;
      }
    }
    return false;
  }

  // -------------------------------------------------------
  // 初始化與事件監聽
  // -------------------------------------------------------
  function init() {
    const savedUser = localStorage.getItem(GLOBAL_STORAGE_KEYS.currentUser) || 'rex';
    loadState(savedUser);
    updateNavBadge();
    updateNavUserUI();

    if (state.cloudDbUrl) {
      syncFromCloud(state.currentUser, false);
    }

    // 導航列按鈕
    const navUserBtn = document.getElementById('nav-user');
    if (navUserBtn) {
      navUserBtn.addEventListener('click', () => {
        openUserModal();
      });
    }

    document.getElementById('nav-home').addEventListener('click', () => {
      state.view = 'dashboard';
      renderDashboardView();
    });

    document.getElementById('nav-errors').addEventListener('click', () => {
      renderErrorBookView();
    });

    document.getElementById('nav-print').addEventListener('click', () => {
      renderPrintSetupView();
    });

    document.getElementById('nav-export').addEventListener('click', () => {
      exportToAI();
    });

    // 檢查是否有由 QR Code 帶入的題目參數
    if (!checkUrlParams()) {
      renderDashboardView();
    }
  }

  // 頁面載入完成啟動
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
