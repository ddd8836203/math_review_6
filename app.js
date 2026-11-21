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
  const EXAM_SCHOOLS_MID1 = [
    { id: 'ALL', name: '全部學校 (第一次段考綜合)', shortName: '🎲 全部名校綜合', count: 215 },
    { id: '臺北市立西松國小', name: '臺北市立西松國小', shortName: '西松國小', count: 24 },
    { id: '桃子腳國民中小學', name: '桃子腳國民中小學', shortName: '桃子腳國中小', count: 32 },
    { id: '高雄市立獅湖國小', name: '高雄市立獅湖國小', shortName: '獅湖國小', count: 42 },
    { id: '高雄市鳳山區忠孝國小', name: '高雄市鳳山區忠孝國小', shortName: '忠孝國小', count: 50 },
    { id: '桃園市普仁國小', name: '桃園市普仁國小', shortName: '普仁國小', count: 40 },
    { id: '臺南市和順國小', name: '臺南市和順國小', shortName: '和順國小', count: 27 },
  ];

  const EXAM_SCHOOLS_MID2 = [
    { id: 'ALL', name: '全部學校 (八校九卷期末綜合)', shortName: '🎲 八校九卷綜合', count: 243 },
    { id: '臺南市和順國小', name: '臺南市和順國小 (114學年)', shortName: '和順國小', count: 20 },
    { id: '桃園市普仁國小', name: '桃園市普仁國小 (114學年)', shortName: '普仁國小', count: 29 },
    { id: '桃子腳國民中小學', name: '新北市桃子腳國中小 (114學年)', shortName: '桃子腳國中小', count: 25 },
    { id: '高雄市立獅湖國小 (114)', name: '高雄市立獅湖國小 (114學年)', shortName: '獅湖國小 (114)', count: 25 },
    { id: '高雄市鳳山區忠孝國小', name: '高雄市鳳山區忠孝國小 (114學年)', shortName: '忠孝國小', count: 35 },
    { id: '新北市安和國小', name: '新北市安和國小 (113學年)', shortName: '安和國小', count: 23 },
    { id: '桃園市建德國小', name: '桃園市建德國小 (113學年)', shortName: '建德國小', count: 18 },
    { id: '桃園市大華國小', name: '桃園市大華國小 (113學年)', shortName: '大華國小', count: 32 },
    { id: '高雄市立獅湖國小 (113)', name: '高雄市立獅湖國小 (113學年)', shortName: '獅湖國小 (113)', count: 36 },
  ];

  function isExamUnitId(uId) {
    return uId === 'EXAM_MID1' || uId === 'EXAM_MID2';
  }

  function getExamSchoolsForContext(unitId, batch) {
    if (unitId === 'EXAM_MID1') return EXAM_SCHOOLS_MID1;
    if (unitId === 'EXAM_MID2') return EXAM_SCHOOLS_MID2;
    if (/^U0[5-8]$/.test(String(unitId || ''))) {
      // 動態計算該一般單元（U05~U08）有涵蓋的第二次段考學校清單
      const unitExamQs = QUESTION_BANK.filter(q =>
        q.unitId === 'EXAM_MID2' && window.MathArena && window.MathArena.matchesUnitFilter(q, unitId)
      );
      const countBySch = {};
      for (const q of unitExamQs) {
        if (q.school) countBySch[q.school] = (countBySch[q.school] || 0) + 1;
      }
      const res = [{ id: 'ALL', name: '全部學校', shortName: `🎲 全部期末學校 (${unitExamQs.length}題)`, count: unitExamQs.length }];
      for (const sch of EXAM_SCHOOLS_MID2) {
        if (sch.id !== 'ALL' && countBySch[sch.id]) {
          res.push(Object.assign({}, sch, {
            shortName: `${sch.shortName} (${countBySch[sch.id]}題)`,
            count: countBySch[sch.id],
          }));
        }
      }
      return res;
    }
    // ALL / 混合：聯集去重
    const seen = new Set(['ALL']);
    const merged = [{ id: 'ALL', name: '全部學校', shortName: '🎲 全部名校綜合', count: 458 }];
    for (const s of [...EXAM_SCHOOLS_MID2, ...EXAM_SCHOOLS_MID1]) {
      if (!seen.has(s.id)) {
        seen.add(s.id);
        merged.push(s);
      }
    }
    return merged;
  }

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
    u05LegacyBackup: null, // P9: 保留 u05_* 轉移前備份，確保回滾無損
    arenaFilter: {
      unit: 'U05',
      batch: 'ALL',
      school: 'ALL',
      band: 'ALL',
      errorsOnly: false,
      examMode: 'instant',
      explicitIds: null,
      sortOrder: 'default',
    },
    arenaRounds: {}, // P9: 本機單輪作答暫存（不推雲端，僅保存當輪未完成/批改畫面）
    printConfig: {
      unitIds: ['U01'],
      count: 6,
      workSize: 'md', // 'sm' | 'md' | 'lg'
      printMode: 'student', // 'student' | 'teacher'
      includeInsight: false,
      batches: ['課本原型題', '奧數天梯', '段考真題'],
    },
    printSelectionIds: null, // 保存當前預覽卷題目順序，切換學生卷／家長詳解卷時保持同一份題目
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

  const LOCAL_ARENA_KEYS = {
    rounds: 'g6_math_arena_rounds',
    filter: 'g6_math_arena_filter',
    legacyBackup: 'g6_math_u05_legacy_backup',
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
      const ebOrig = ebRaw ? JSON.parse(ebRaw) : [];
      const scOrig = scRaw ? JSON.parse(scRaw) : {};
      const fh = fhRaw ? JSON.parse(fhRaw) : [];
      const lMap = (window.MathArena && window.MathArena.buildLegacyIdMap)
        ? window.MathArena.buildLegacyIdMap(QUESTION_BANK)
        : {};
      const ebSet = new Set(ebOrig.map(id => lMap[id] || id));
      const sc = {};
      Object.keys(scOrig).forEach(k => {
        const nk = lMap[k] || k;
        sc[nk] = (sc[nk] || 0) + (Number(scOrig[k]) || 0);
      });
      const mastered = QUESTION_BANK.filter(q => (sc[q.id] || 0) >= 1 && !ebSet.has(q.id)).length;
      const pct = QUESTION_BANK.length > 0 ? Math.round((mastered / QUESTION_BANK.length) * 100) : 0;
      return { errCount: ebSet.size, mastered, pct, sessions: fh.length };
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

      const arRaw = localStorage.getItem(getUserStorageKey(LOCAL_ARENA_KEYS.rounds, uid));
      state.arenaRounds = arRaw ? JSON.parse(arRaw) : {};
      const afRaw = localStorage.getItem(getUserStorageKey(LOCAL_ARENA_KEYS.filter, uid));
      if (afRaw) {
        state.arenaFilter = Object.assign({
          unit: 'U05', batch: 'ALL', school: 'ALL', band: 'ALL',
          errorsOnly: false, examMode: 'instant', explicitIds: null, sortOrder: 'default',
        }, JSON.parse(afRaw));
      }
      const lbRaw = localStorage.getItem(getUserStorageKey(LOCAL_ARENA_KEYS.legacyBackup, uid));
      state.u05LegacyBackup = lbRaw ? JSON.parse(lbRaw) : null;

      // P9: 自動將舊版 u05_* ID 無損轉移至新版 U05-* 4D ID（冪等，保留 u05LegacyBackup）
      if (window.MathArena && window.MathArena.migrateLegacyIdsInState) {
        const mig = window.MathArena.migrateLegacyIdsInState(state, QUESTION_BANK);
        if (mig.migratedCount > 0) {
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorBook, uid), JSON.stringify(state.errorBook));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorCounts, uid), JSON.stringify(state.errorCounts));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.successCounts, uid), JSON.stringify(state.successCounts));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.slowCounts, uid), JSON.stringify(state.slowCounts));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.history, uid), JSON.stringify(state.fullHistory));
          if (state.u05LegacyBackup) {
            localStorage.setItem(getUserStorageKey(LOCAL_ARENA_KEYS.legacyBackup, uid), JSON.stringify(state.u05LegacyBackup));
          }
        }
      }
    } catch (e) {
      console.warn('LocalStorage 載入失敗：', e);
    }
    updateNavUserUI();
  }

  let cloudSyncTimer = null;

  function saveArenaLocalState() {
    const uid = state.currentUser;
    try {
      localStorage.setItem(getUserStorageKey(LOCAL_ARENA_KEYS.rounds, uid), JSON.stringify(state.arenaRounds || {}));
      localStorage.setItem(getUserStorageKey(LOCAL_ARENA_KEYS.filter, uid), JSON.stringify(state.arenaFilter || {}));
    } catch (e) {
      console.warn('Arena 本機狀態寫入失敗：', e);
    }
  }

  function saveState(skipCloudPush = false, preservedUpdatedAt = null) {
    const uid = state.currentUser;
    state.updatedAt = (preservedUpdatedAt && preservedUpdatedAt > 0) ? preservedUpdatedAt : Date.now();
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
      if (state.u05LegacyBackup) {
        localStorage.setItem(getUserStorageKey(LOCAL_ARENA_KEYS.legacyBackup, uid), JSON.stringify(state.u05LegacyBackup));
      } else {
        localStorage.removeItem(getUserStorageKey(LOCAL_ARENA_KEYS.legacyBackup, uid));
      }
      saveArenaLocalState();
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
  // 跨裝置雲端同步引擎 (Firebase Realtime DB REST API + 空本機保護)
  // -------------------------------------------------------
  function normalizeCloudUrl(url) {
    if (!url) return '';
    return url.trim().replace(/\/+$/, '').replace(/\.json$/i, '');
  }

  function readLocalUserSnap(uid) {
    try {
      const parseSafe = (key, fallback) => {
        const raw = localStorage.getItem(getUserStorageKey(key, uid));
        return raw ? JSON.parse(raw) : fallback;
      };
      return {
        updatedAt: parseInt(localStorage.getItem(getUserStorageKey(STORAGE_KEYS.updatedAt, uid)) || '0', 10) || 0,
        errorBook: parseSafe(STORAGE_KEYS.errorBook, []),
        errorCounts: parseSafe(STORAGE_KEYS.errorCounts, {}),
        successCounts: parseSafe(STORAGE_KEYS.successCounts, {}),
        slowCounts: parseSafe(STORAGE_KEYS.slowCounts, {}),
        fullHistory: parseSafe(STORAGE_KEYS.history, []),
      };
    } catch (e) {
      return { updatedAt: 0, errorBook: [], errorCounts: {}, successCounts: {}, slowCounts: {}, fullHistory: [] };
    }
  }

  async function pushToCloud(userId = state.currentUser, opts = {}) {
    const base = normalizeCloudUrl(state.cloudDbUrl);
    if (!base) return false;

    const activityCnt = window.MathArena && window.MathArena.computeCloudActivityCount
      ? window.MathArena.computeCloudActivityCount(state)
      : ((state.fullHistory?.length || 0) + Object.keys(state.successCounts || {}).length + (state.errorBook?.length || 0));

    // P12 守衛：禁止尚未載入完成的空本機狀態蓋掉雲端紀錄（除非為合法重置請求）
    if (activityCnt === 0 && !opts.forceReset) {
      state.cloudSyncStatus = 'synced';
      return false;
    }

    state.cloudSyncStatus = 'syncing';
    const payload = window.MathArena && window.MathArena.buildCloudPayload
      ? window.MathArena.buildCloudPayload(state, { userId, updatedAt: state.updatedAt || Date.now(), resetAt: opts.resetAt })
      : {
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

      // 先同步並無損遷移其他 3 個非當前帳號的摘要快取至本機 LocalStorage
      USERS.forEach(u => {
        if (u.id === userId) return;
        const rawOther = allCloudUsers[u.id];
        if (!rawOther || typeof rawOther !== 'object') return;
        const cleanOther = window.MathArena && window.MathArena.sanitizeAndMigrateCloudUser
          ? window.MathArena.sanitizeAndMigrateCloudUser(rawOther, QUESTION_BANK).data
          : rawOther;
        if (!cleanOther) return;

        const localOther = readLocalUserSnap(u.id);
        const decision = window.MathArena && window.MathArena.decideCloudSyncAction
          ? window.MathArena.decideCloudSyncAction(localOther, cleanOther)
          : { action: (cleanOther.updatedAt || 0) > (localOther.updatedAt || 0) ? 'pull' : 'noop' };

        if (decision.action === 'pull') {
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorBook, u.id), JSON.stringify(cleanOther.errorBook || []));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.errorCounts, u.id), JSON.stringify(cleanOther.errorCounts || {}));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.successCounts, u.id), JSON.stringify(cleanOther.successCounts || {}));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.slowCounts, u.id), JSON.stringify(cleanOther.slowCounts || {}));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.history, u.id), JSON.stringify(cleanOther.fullHistory || []));
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.unitProgress, u.id), JSON.stringify(cleanOther.unitProgress || {}));
          if (Array.isArray(cleanOther.selectedBatches) && cleanOther.selectedBatches.length > 0) {
            localStorage.setItem(getUserStorageKey(STORAGE_KEYS.batches, u.id), JSON.stringify(cleanOther.selectedBatches));
          }
          if (cleanOther.u05LegacyBackup) {
            localStorage.setItem(getUserStorageKey(LOCAL_ARENA_KEYS.legacyBackup, u.id), JSON.stringify(cleanOther.u05LegacyBackup));
          } else {
            localStorage.removeItem(getUserStorageKey(LOCAL_ARENA_KEYS.legacyBackup, u.id));
          }
          localStorage.setItem(getUserStorageKey(STORAGE_KEYS.updatedAt, u.id), String(cleanOther.updatedAt || 0));
        }
      });

      const rawCloudData = allCloudUsers[userId];
      const cleanRes = window.MathArena && window.MathArena.sanitizeAndMigrateCloudUser
        ? window.MathArena.sanitizeAndMigrateCloudUser(rawCloudData, QUESTION_BANK)
        : { data: rawCloudData, migratedCount: 0 };
      const cloudData = cleanRes.data;

      const decision = window.MathArena && window.MathArena.decideCloudSyncAction
        ? window.MathArena.decideCloudSyncAction(state, cloudData)
        : { action: cloudData ? 'pull' : 'noop', reason: 'fallback' };

      if (decision.action === 'pull' && cloudData) {
        state.errorBook = Array.isArray(cloudData.errorBook) ? cloudData.errorBook : [];
        state.errorCounts = cloudData.errorCounts || {};
        state.successCounts = cloudData.successCounts || {};
        state.slowCounts = cloudData.slowCounts || {};
        state.fullHistory = Array.isArray(cloudData.fullHistory) ? cloudData.fullHistory : [];
        state.unitProgress = cloudData.unitProgress || {};
        if (Array.isArray(cloudData.selectedBatches) && cloudData.selectedBatches.length > 0) {
          state.selectedBatches = cloudData.selectedBatches;
        }
        if (cloudData.u05LegacyBackup) {
          state.u05LegacyBackup = cloudData.u05LegacyBackup;
        } else if (decision.reason === 'remote_reset') {
          state.u05LegacyBackup = null;
        }
        if (window.MathArena && window.MathArena.migrateLegacyIdsInState) {
          window.MathArena.migrateLegacyIdsInState(state, QUESTION_BANK);
        }
        saveState(true, cloudData.updatedAt || Date.now());
        if (state.view === 'dashboard') renderDashboardView();
        else if (state.view === 'arena') renderArenaView();
        else if (state.view === 'error_book') renderErrorBookView();
        else if (state.view === 'print') renderPrintSetupView();
        const uObj = USERS.find(u => u.id === userId) || { name: userId };
        showToast(decision.reason === 'remote_reset'
          ? `🧹 【${uObj.name}】已在其他裝置重置，已同步歸零！`
          : `☁️ 已同步【${uObj.name}】的最新雲端進度！`);
      } else if (decision.action === 'push') {
        await pushToCloud(userId);
        if (showFeedback) {
          showToast(decision.reason === 'init_cloud' ? '☁️ 已將本機紀錄首次備份至雲端！' : '☁️ 本機進度較新，已推送更新至雲端！');
        }
      } else {
        if (state.view === 'dashboard') renderDashboardView();
        if (showFeedback) showToast('☁️ 目前已是最新雲端同步狀態！');
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
    } else if (state.view === 'arena') {
      renderArenaView();
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
    Object.values(LOCAL_ARENA_KEYS).forEach(baseKey => {
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
      state.arenaRounds = {};
      state.u05LegacyBackup = null;
      state.updatedAt = nowTs;
      saveState(true, nowTs);
      if (state.view === 'dashboard') renderDashboardView();
      else if (state.view === 'arena') renderArenaView();
      else if (state.view === 'error_book') renderErrorBookView();
    }

    // 同步將雲端上的該測試帳號歸零（附帶 resetAt 讓其他裝置同步歸零）
    const base = normalizeCloudUrl(state.cloudDbUrl);
    if (base) {
      try {
        const zeroState = {
          currentUser: userId,
          updatedAt: nowTs,
          errorBook: [],
          errorCounts: {},
          successCounts: {},
          slowCounts: {},
          fullHistory: [],
          selectedBatches: ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'],
          unitProgress: {},
          u05LegacyBackup: null,
        };
        const resetPayload = window.MathArena && window.MathArena.buildCloudPayload
          ? window.MathArena.buildCloudPayload(zeroState, { userId, updatedAt: nowTs, resetAt: nowTs })
          : Object.assign({ userId, resetAt: nowTs }, zeroState);
        await fetch(`${base}/g6_math_users/${userId}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(resetPayload),
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
    return isExamUnitId(unitId) ? `${unitId}_${state.examSchool || 'ALL'}` : unitId;
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
    const all = (window.MathArena && window.MathArena.matchesUnitFilter)
      ? QUESTION_BANK.filter(q => window.MathArena.matchesUnitFilter(q, unitId))
      : QUESTION_BANK.filter(q => q.unitId === unitId);
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
      const cardSchools = u.id === 'EXAM_MID2' ? EXAM_SCHOOLS_MID2 : EXAM_SCHOOLS_MID1;
      const selectedCardSchool = cardSchools.some(s => s.id === state.examSchool) ? state.examSchool : 'ALL';

      return `
        <article class="unit-card ${isExamUnit ? 'exam-card' : ''} ${isLocked ? 'locked' : ''}" style="--hue: ${u.hue}">
          <span class="u-no">${isExamUnit ? '🏆 段考特訓' : `UNIT ${String(u.no).padStart(2, '0')}`} · ${u.pages}</span>
          <h3>${isExamUnit ? u.title : `第 ${u.no} 單元 ${u.title}`}</h3>
          <div class="progress" title="掌握度 ${st.pct}%"><i style="width: ${st.pct}%"></i></div>
          <div class="u-meta">
            <span class="tag ${st.pct === 100 ? 'ok' : ''}">掌握 ${st.pct}%</span>
            ${st.errCount > 0 ? `<span class="tag bad">🔥 ${st.errCount} 題待消滅</span>` : ''}
            ${isExamUnit ? `<span class="tag exam-badge">${u.id === 'EXAM_MID2' ? '🏆 8校9卷全真期末' : '🏆 6校全真考卷'}</span>` : `<span class="tag lv">${st.hasMental ? `⭐ 10★天梯` : `天梯 L${st.maxLevel}`}</span>`}
            <span class="tag">${st.total} 題</span>
          </div>

          ${isExamUnit ? `
            <div class="exam-card-quick-select" style="margin-top: 6px;">
              <select class="exam-school-select" data-exam-select="${u.id}" style="width: 100%; padding: 8px 10px; border-radius: 10px; border: 1.5px solid #fcd34d; font-size: 13px; font-weight: 700; color: #78350f; background: #fffdf5; outline: none; cursor: pointer;">
                ${cardSchools.map(sch => `<option value="${sch.id}" ${selectedCardSchool === sch.id ? 'selected' : ''}>${sch.shortName} (${sch.count}題)</option>`).join('')}
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
          <span class="muted">翰林版第十一冊 · 全 8 單元 + 兩次段考名校全真題庫</span>
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
        if (isExamUnitId(uId)) {
          const sel = app.querySelector(`[data-exam-select="${uId}"]`);
          const school = sel ? sel.value : 'ALL';
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
  // 視圖渲染器：2. 4D 智慧數學考場 (#view-arena)
  // -------------------------------------------------------
  function buildArenaFilterKey(f) {
    const exp = Array.isArray(f.explicitIds) && f.explicitIds.length > 0 ? f.explicitIds.join(',') : '';
    return [f.unit || 'U05', f.batch || 'ALL', f.school || 'ALL', f.band || 'ALL', f.errorsOnly ? 1 : 0, f.examMode || 'instant', exp].join('|');
  }

  function getOrCreateArenaRound(pool, forceRebuildQueue = false) {
    const f = state.arenaFilter;
    const key = buildArenaFilterKey(f);
    let r = state.arenaRounds[key];
    const poolIds = pool.map(q => q.id);
    const poolSet = new Set(poolIds);

    if (!r || forceRebuildQueue) {
      let orderedIds = poolIds;
      if (f.explicitIds && f.explicitIds.length > 0) {
        orderedIds = f.explicitIds.filter(id => poolSet.has(id));
      } else if (f.unit === 'ERROR_BOOK' || f.errorsOnly || isExamUnitId(f.unit)) {
        orderedIds = (isExamUnitId(f.unit) && f.school && f.school !== 'ALL') ? poolIds : shuffle(poolIds);
      }
      r = {
        roundKey: key,
        queueIds: orderedIds,
        cursor: 0,
        answered: {},
        subAnswered: {},
        examDrafts: {},
        subExamDrafts: {},
        openRevealed: {},
        openExt: {},
        hideOptions: false,
        examSubmitted: false,
        startedAt: Date.now(),
      };
      state.arenaRounds[key] = r;
    } else {
      // Sync queueIds with current pool (keeping order of remaining items, appending new items cleanly)
      const kept = (r.queueIds || []).filter(id => poolSet.has(id));
      const keptSet = new Set(kept);
      for (const id of poolIds) {
        if (!keptSet.has(id)) kept.push(id);
      }
      r.queueIds = kept;
      if (!r.subAnswered) r.subAnswered = {};
      if (!r.subExamDrafts) r.subExamDrafts = {};
      if (r.cursor >= kept.length) r.cursor = Math.max(0, kept.length - 1);
    }
    return r;
  }

  function renderArenaView() {
    state.view = 'arena';
    const app = document.getElementById('app');
    if (!window.MathArena) {
      app.innerHTML = '<p class="loading">考場模組載入失敗，請重新整理頁面。</p>';
      return;
    }

    const f = state.arenaFilter;
    const validSchools = getExamSchoolsForContext(f.unit, f.batch);
    if (f.school && f.school !== 'ALL' && !validSchools.some(s => s.id === f.school)) {
      f.school = 'ALL';
    }

    // Cascading guard: if current batch or band became 0 after upstream change, reset cleanly to ALL
    const c1 = MathArena.getCascadeStats(QUESTION_BANK, state, f);
    if (!f.explicitIds && f.batch !== 'ALL' && (c1.batchCounts[f.batch] || 0) === 0) {
      f.batch = 'ALL';
    }
    const c2 = MathArena.getCascadeStats(QUESTION_BANK, state, f);
    if (!f.explicitIds && f.band !== 'ALL' && (c2.bandCounts[f.band] || 0) === 0) {
      f.band = 'ALL';
    }

    const rawPool = MathArena.filterArenaPool(QUESTION_BANK, state, f);
    const round = getOrCreateArenaRound(rawPool, false);
    const byId = new Map(rawPool.map(q => [q.id, q]));
    const orderedPool = (round.queueIds || []).map(id => byId.get(id)).filter(Boolean);

    state.quizQuestions = orderedPool;
    state.quizIndex = round.cursor || 0;
    state.currentUnitId = (f.unit !== 'ALL' && f.unit !== 'ERROR_BOOK') ? f.unit : (orderedPool[0] ? orderedPool[0].unitId : null);

    app.innerHTML = MathArena.renderArenaHtml({
      units: UNITS,
      examSchools: validSchools,
      questionBank: QUESTION_BANK,
      state,
      filter: f,
      round,
      pool: orderedPool,
      hideCascadeBar: Array.isArray(f.explicitIds) && f.explicitIds.length > 0,
      formatMathForKids,
      kidsMath: window.KidsMath || null,
    });

    // KaTeX runs smoothly on legacy questions while 4D uses pure KidsMath HTML
    renderMath(app);
    bindArenaViewEvents(app, round, orderedPool);
  }

  function bindArenaViewEvents(app, round, pool) {
    const q = pool[round.cursor] || null;
    const nq = q ? MathArena.normalizeQuestion(q, { kidsMath: window.KidsMath, formatMathForKids }) : null;

    const playSfx = (name) => {
      if (window.MathSound && typeof window.MathSound[name] === 'function') {
        window.MathSound[name]();
      }
    };

    const homeBtn = document.getElementById('btn-arena-home');
    if (homeBtn) {
      homeBtn.addEventListener('click', () => {
        saveArenaLocalState();
        state.view = 'dashboard';
        renderDashboardView();
      });
    }

    const openCascadeBtn = document.getElementById('btn-arena-open-cascade');
    if (openCascadeBtn) {
      openCascadeBtn.addEventListener('click', () => {
        state.arenaFilter.explicitIds = null;
        saveArenaLocalState();
        renderArenaView();
      });
    }

    const resetFilterBtn = document.getElementById('btn-arena-reset-filters');
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        state.arenaFilter = {
          unit: 'U05', batch: 'ALL', school: 'ALL', band: 'ALL',
          errorsOnly: false, examMode: state.arenaFilter.examMode || 'instant',
          explicitIds: null, sortOrder: 'default',
        };
        saveArenaLocalState();
        renderArenaView();
      });
    }

    // 3-layer cascading filter pills
    app.querySelectorAll('[data-filter-unit]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.arenaFilter.unit = btn.getAttribute('data-filter-unit');
        state.arenaFilter.explicitIds = null;
        state.arenaFilter.errorsOnly = false;
        saveArenaLocalState();
        renderArenaView();
      });
    });

    app.querySelectorAll('[data-filter-batch]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        state.arenaFilter.batch = btn.getAttribute('data-filter-batch');
        state.arenaFilter.explicitIds = null;
        saveArenaLocalState();
        renderArenaView();
      });
    });

    const schoolSel = document.getElementById('arena-school-select');
    if (schoolSel) {
      schoolSel.addEventListener('change', () => {
        state.arenaFilter.school = schoolSel.value;
        state.examSchool = schoolSel.value;
        saveArenaLocalState();
        renderArenaView();
      });
    }

    app.querySelectorAll('[data-filter-band]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        state.arenaFilter.band = btn.getAttribute('data-filter-band');
        state.arenaFilter.explicitIds = null;
        saveArenaLocalState();
        renderArenaView();
      });
    });

    app.querySelectorAll('[data-arena-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-arena-mode');
        if (mode === state.arenaFilter.examMode) return;
        state.arenaFilter.examMode = mode;
        saveArenaLocalState();
        renderArenaView();
      });
    });

    const resetRoundBtn = document.getElementById('btn-arena-reset-round');
    if (resetRoundBtn) {
      resetRoundBtn.addEventListener('click', () => {
        round.answered = {};
        round.subAnswered = {};
        round.examDrafts = {};
        round.subExamDrafts = {};
        round.openRevealed = {};
        round.openExt = {};
        round.examSubmitted = false;
        round.cursor = 0;
        state.sessionAnswers = [];
        saveArenaLocalState();
        showToast('🔄 本輪已恢復全部未答（歷史累計統計完整保留）');
        renderArenaView();
      });
    }

    const retryThisBtn = document.getElementById('btn-arena-retry-this');
    if (retryThisBtn && q) {
      retryThisBtn.addEventListener('click', () => {
        delete round.answered[q.id];
        if (round.subAnswered) delete round.subAnswered[q.id];
        delete round.openRevealed[q.id];
        delete round.examDrafts[q.id];
        if (round.subExamDrafts) delete round.subExamDrafts[q.id];
        saveArenaLocalState();
        renderArenaView();
      });
    }

    // Drawer toggle & quick jump
    const toggleDrawer = () => {
      const d = document.getElementById('arena-grid-drawer');
      if (d) d.style.display = d.style.display === 'none' ? 'block' : 'none';
    };
    const dt1 = document.getElementById('btn-arena-drawer-toggle');
    const dt2 = document.getElementById('btn-arena-drawer-bottom');
    const dt3 = document.getElementById('btn-arena-drawer-close');
    if (dt1) dt1.addEventListener('click', toggleDrawer);
    if (dt2) dt2.addEventListener('click', toggleDrawer);
    if (dt3) dt3.addEventListener('click', toggleDrawer);

    app.querySelectorAll('[data-arena-jump]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-arena-jump'), 10);
        if (!isNaN(idx) && idx >= 0 && idx < pool.length) {
          round.cursor = idx;
          saveArenaLocalState();
          renderArenaView();
        }
      });
    });

    // Blind options toggle (paper-first discipline)
    const blindBtn = document.getElementById('btn-toggle-blind');
    if (blindBtn) {
      blindBtn.addEventListener('click', () => {
        round.hideOptions = !round.hideOptions;
        saveArenaLocalState();
        renderArenaView();
      });
    }

    // Inline stemImage & subquestion image lightbox + Original exam crop image toggle
    const inlineStemImg = document.getElementById('arena-stem-image');
    if (inlineStemImg && q && q.stemImage) {
      inlineStemImg.addEventListener('click', () => {
        openLightbox(q.stemImage, `${q.school || '段考'} - 題目附圖`);
      });
    }
    app.querySelectorAll('[data-zoom-img]').forEach(el => {
      el.addEventListener('click', () => {
        const src = el.getAttribute('data-zoom-img');
        if (src) openLightbox(src, `${(q && q.school) || '段考'} - 題目附圖`);
      });
    });

    const cropBtn = document.getElementById('btn-arena-crop-toggle');
    if (cropBtn && q) {
      cropBtn.addEventListener('click', () => {
        state.imgModeQuestions[q.id] = !state.imgModeQuestions[q.id];
        renderArenaView();
      });
    }
    const cropZoom = document.getElementById('arena-crop-zoom');
    if (cropZoom && q) {
      cropZoom.addEventListener('click', () => {
        openLightbox(q.cropImage || q.examPageImage, `${q.school || '段考'} - 題目原卷裁切`);
      });
    }
    const fullPageBtn = document.getElementById('btn-arena-full-page');
    if (fullPageBtn && q) {
      fullPageBtn.addEventListener('click', () => {
        openLightbox(q.examPageImage, `${q.school || '段考'} - 考卷整頁原圖`);
      });
    }

    // Compound group subquestion clicks
    if (q && nq && nq.isGroup) {
      app.querySelectorAll('[data-arena-subopt]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          const subId = btn.getAttribute('data-arena-subq');
          const chosen = btn.getAttribute('data-arena-subopt').toUpperCase();
          const sub = nq.subQuestions.find(s => s.subId === subId);
          if (!sub) return;

          if (state.arenaFilter.examMode === 'exam' && !round.examSubmitted) {
            round.subExamDrafts = round.subExamDrafts || {};
            round.subExamDrafts[q.id] = round.subExamDrafts[q.id] || {};
            round.subExamDrafts[q.id][subId] = chosen;
            saveArenaLocalState();
            playSfx('click');
            renderArenaView();
            return;
          }

          round.subAnswered = round.subAnswered || {};
          round.subAnswered[q.id] = round.subAnswered[q.id] || {};
          if (round.subAnswered[q.id][subId]) return;

          const isCorrect = (chosen === sub.answerKey);
          round.subAnswered[q.id][subId] = { result: isCorrect ? 'ok' : 'bad', userChoice: chosen };
          playSfx(isCorrect ? 'ok' : 'bad');

          const subMap = round.subAnswered[q.id];
          if (nq.subQuestions.every(s => !!subMap[s.subId])) {
            const allOk = nq.subQuestions.every(s => subMap[s.subId].result === 'ok');
            let firstTrap = null;
            if (!allOk) {
              for (const s of nq.subQuestions) {
                if (subMap[s.subId].result === 'bad') {
                  const pickedOpt = s.options.find(o => o.key === subMap[s.subId].userChoice);
                  if (pickedOpt && pickedOpt.trapCode) {
                    firstTrap = pickedOpt.trapCode;
                    break;
                  }
                }
              }
            }
            const res = allOk ? 'ok' : 'bad';
            const choiceTag = allOk ? 'GROUP_OK' : 'GROUP_BAD';
            recordAnswer(q, res, choiceTag, firstTrap);
            round.answered[q.id] = { result: res, userChoice: choiceTag };
          }
          saveArenaLocalState();
          renderArenaView();
        });
      });
    }

    // Choice option clicks
    if (q && nq && nq.hasOptions) {
      app.querySelectorAll('[data-arena-opt]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          const chosen = btn.getAttribute('data-arena-opt').toUpperCase();
          if (state.arenaFilter.examMode === 'exam' && !round.examSubmitted) {
            round.examDrafts[q.id] = chosen;
            saveArenaLocalState();
            playSfx('click');
            renderArenaView();
            return;
          }
          const isCorrect = (chosen === nq.answerKey);
          const result = isCorrect ? 'ok' : 'bad';
          const trapCode = (!isCorrect && nq.options)
            ? (nq.options.find(o => o.key === chosen)?.trapCode || null)
            : null;
          recordAnswer(q, result, chosen, trapCode);
          round.answered[q.id] = { result, userChoice: chosen };
          saveArenaLocalState();
          playSfx(isCorrect ? 'ok' : 'bad');
          renderArenaView();
        });
      });
    }

    // Legacy non-option reveal & 3-state self-grading
    const revealOpenBtn = document.getElementById('btn-arena-reveal-open');
    if (revealOpenBtn && q) {
      revealOpenBtn.addEventListener('click', () => {
        round.openRevealed[q.id] = true;
        saveArenaLocalState();
        renderArenaView();
      });
    }
    app.querySelectorAll('[data-arena-fb]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled || !q) return;
        const val = btn.getAttribute('data-arena-fb');
        recordAnswer(q, val, val);
        round.answered[q.id] = { result: val, userChoice: val };
        saveArenaLocalState();
        playSfx(val === 'ok' ? 'ok' : val === 'slow' ? 'slow' : 'bad');
        renderArenaView();
      });
    });

    const slowMarkBtn = document.getElementById('btn-arena-mark-slow');
    if (slowMarkBtn && q && !slowMarkBtn.disabled) {
      slowMarkBtn.addEventListener('click', () => {
        state.slowCounts[q.id] = (state.slowCounts[q.id] || 0) + 1;
        saveState();
        playSfx('slow');
        renderArenaView();
      });
    }

    const extToggleBtn = document.getElementById('btn-arena-ext-toggle');
    if (extToggleBtn && q) {
      extToggleBtn.addEventListener('click', () => {
        round.openExt = round.openExt || {};
        round.openExt[q.id] = !round.openExt[q.id];
        saveArenaLocalState();
        renderArenaView();
      });
    }

    const submitExamAndFinish = () => {
      if (state.arenaFilter.examMode === 'exam' && !round.examSubmitted) {
        const drafts = round.examDrafts || {};
        const subDrafts = round.subExamDrafts || {};
        const draftedIds = Object.keys(drafts);
        const subDraftedIds = Object.keys(subDrafts).filter(id => Object.keys(subDrafts[id] || {}).length > 0);
        if (draftedIds.length === 0 && subDraftedIds.length === 0) {
          showToast('你還沒有點選任何題目的答案喔！');
          return;
        }
        state.sessionAnswers = [];
        for (const item of pool) {
          const normItem = MathArena.normalizeQuestion(item, { kidsMath: window.KidsMath, formatMathForKids });
          if (normItem.isGroup) {
            const gDraft = subDrafts[item.id];
            if (!gDraft || Object.keys(gDraft).length === 0) continue;
            round.subAnswered = round.subAnswered || {};
            round.subAnswered[item.id] = {};
            let allOk = true;
            let firstTrap = null;
            for (const sub of normItem.subQuestions) {
              const ch = gDraft[sub.subId];
              if (!ch) {
                allOk = false;
                continue;
              }
              const subOk = (ch === sub.answerKey);
              round.subAnswered[item.id][sub.subId] = { result: subOk ? 'ok' : 'bad', userChoice: ch };
              if (!subOk) {
                allOk = false;
                if (!firstTrap) {
                  const po = sub.options.find(o => o.key === ch);
                  if (po && po.trapCode) firstTrap = po.trapCode;
                }
              }
            }
            const res = allOk ? 'ok' : 'bad';
            const choiceTag = allOk ? 'GROUP_OK' : 'GROUP_BAD';
            recordAnswer(item, res, choiceTag, firstTrap);
            round.answered[item.id] = { result: res, userChoice: choiceTag };
            continue;
          }
          const ch = drafts[item.id];
          if (!ch) continue;
          if (normItem.hasOptions) {
            const ok = (ch === normItem.answerKey);
            const res = ok ? 'ok' : 'bad';
            const tc = (!ok && normItem.options) ? (normItem.options.find(o => o.key === ch)?.trapCode || null) : null;
            recordAnswer(item, res, ch, tc);
            round.answered[item.id] = { result: res, userChoice: ch };
          }
        }
        round.examSubmitted = true;
        saveArenaLocalState();
      } else {
        state.sessionAnswers = [];
        for (const item of pool) {
          const rec = round.answered && round.answered[item.id];
          if (rec) {
            state.sessionAnswers.push({
              qId: item.id,
              unitId: item.unitId,
              category: item.category,
              level: item.level || item.stars || 1,
              result: rec.result,
              userChoice: rec.userChoice,
              trapCode: null,
              time: new Date().toISOString(),
            });
          }
        }
      }
      playSfx('fanfare');
      finishQuiz();
    };

    const submitExamBtn = document.getElementById('btn-arena-submit-exam');
    if (submitExamBtn) {
      submitExamAndFinish && submitExamBtn.addEventListener('click', submitExamAndFinish);
    }

    const prevBtn = document.getElementById('btn-arena-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (round.cursor > 0) {
          round.cursor--;
          saveArenaLocalState();
          renderArenaView();
        }
      });
    }

    const nextBtn = document.getElementById('btn-arena-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (round.cursor < pool.length - 1) {
          round.cursor++;
          saveArenaLocalState();
          renderArenaView();
        } else {
          submitExamAndFinish();
        }
      });
    }
  }

  function startQuiz(mode, unitId = null, schoolId = null, explicitIds = null) {
    state.quizMode = mode;
    state.currentUnitId = unitId;
    state.sessionAnswers = [];

    if (schoolId) state.examSchool = schoolId;

    const batchesSel = state.selectedBatches || [];
    const singleMental = batchesSel.length === 1 && batchesSel[0] === '純腦力體操';

    if (Array.isArray(explicitIds) && explicitIds.length > 0) {
      state.arenaFilter = {
        unit: unitId || 'ALL',
        batch: 'ALL',
        school: state.examSchool || 'ALL',
        band: 'ALL',
        errorsOnly: false,
        examMode: 'instant',
        explicitIds: [...explicitIds],
        sortOrder: 'default',
      };
    } else if (mode === 'unit') {
      state.arenaFilter = {
        unit: unitId || 'U05',
        batch: singleMental ? '純腦力體操' : 'ALL',
        school: isExamUnitId(unitId) ? (state.examSchool || 'ALL') : 'ALL',
        band: 'ALL',
        errorsOnly: false,
        examMode: 'instant',
        explicitIds: null,
        sortOrder: unitId === 'U05' ? 'ladder' : 'default',
      };
    } else if (mode === 'unit_error') {
      state.arenaFilter = {
        unit: unitId || 'U05',
        batch: 'ALL',
        school: 'ALL',
        band: 'ALL',
        errorsOnly: true,
        examMode: 'instant',
        explicitIds: null,
        sortOrder: 'default',
      };
    } else if (mode === 'error_book') {
      state.arenaFilter = {
        unit: 'ERROR_BOOK',
        batch: 'ALL',
        school: 'ALL',
        band: 'ALL',
        errorsOnly: false,
        examMode: 'instant',
        explicitIds: null,
        sortOrder: 'default',
      };
    } else if (mode === 'mental_mixed') {
      const mentalPool = QUESTION_BANK.filter(q => q.batch === '純腦力體操');
      const ladder = [];
      for (let s = 1; s <= 10; s++) {
        ladder.push(...shuffle(mentalPool.filter(q => (q.stars || q.level) === s)).slice(0, 2));
      }
      state.arenaFilter = {
        unit: 'ALL',
        batch: '純腦力體操',
        school: 'ALL',
        band: 'ALL',
        errorsOnly: false,
        examMode: 'instant',
        explicitIds: ladder.map(q => q.id),
        sortOrder: 'ladder',
      };
    } else {
      const filtered = filterQuestionsByBatches(QUESTION_BANK);
      state.arenaFilter = {
        unit: 'ALL',
        batch: 'ALL',
        school: 'ALL',
        band: 'ALL',
        errorsOnly: false,
        examMode: 'instant',
        explicitIds: shuffle(filtered).slice(0, 10).map(q => q.id),
        sortOrder: 'default',
      };
    }

    const poolCheck = MathArena.filterArenaPool(QUESTION_BANK, state, state.arenaFilter);
    if (poolCheck.length === 0) {
      if (mode === 'error_book' || mode === 'unit_error') {
        showToast('🎉 太棒了！該範圍的錯題已全部消滅完畢！');
        state.view = 'dashboard';
        renderDashboardView();
      } else {
        showToast('目前沒有符合條件的題目喔！請調整篩選條件。');
        renderArenaView();
      }
      return;
    }

    // Build fresh shuffled round when starting unit_error / error_book / explicit
    const round = getOrCreateArenaRound(poolCheck, (mode === 'error_book' || mode === 'unit_error' || mode === 'mental_mixed' || mode === 'mixed'));
    round.cursor = 0;
    round.answered = {};
    round.subAnswered = {};
    round.examDrafts = {};
    round.subExamDrafts = {};
    round.openRevealed = {};
    round.examSubmitted = false;
    saveArenaLocalState();
    renderArenaView();
  }

  function recordAnswer(q, result, userChoice = null, trapCodeOverride = null) {
    const existingIndex = state.sessionAnswers.findIndex(a => a.qId === q.id);
    const derivedTrap = trapCodeOverride || (q.trap ? q.trap.code : null);
    const answerRecord = {
      qId: q.id,
      unitId: q.unitId,
      category: q.category,
      level: q.level || q.stars || 1,
      result: result, // 'ok' | 'slow' | 'bad'
      userChoice: userChoice, // 'A' | 'B' | 'C' | 'D' or 'ok' | 'slow' | 'bad'
      trapCode: derivedTrap,
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
      const nq = MathArena.normalizeQuestion(q, { kidsMath: window.KidsMath, formatMathForKids });
      const ans = state.sessionAnswers.find(a => a.qId === q.id);
      const u = UNITS.find(x => x.id === q.unitId) || { title: '綜合特訓' };
      const isMental = q.batch === '純腦力體操' || nq.hasOptions;
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
              <b>${nq.answerDisplayHtml}</b>
            </div>
          </div>
        `;
      } else if (nq.isGroup) {
        choiceHtml = `
          <div class="review-choice-grid">
            <div class="review-choice-pill ${isCorrect ? 'correct' : 'wrong'}">
              <span class="label">題組作答：</span>
              <b>${isCorrect ? `✅ ${nq.subQuestions.length} 小題全對` : '❌ 題組有小題答錯'}</b>
            </div>
            <div class="review-choice-pill correct">
              <span class="label">標準正解：</span>
              <b>${nq.answerDisplayHtml}</b>
            </div>
          </div>
        `;
      } else if (nq.hasOptions) {
        const userKey = (ans.userChoice || '').toUpperCase();
        const userOpt = nq.options.find(o => o.key === userKey);
        const userOptText = userOpt ? userOpt.html : (ans.userChoice || '未作答');
        const corOpt = nq.options.find(o => o.key === nq.answerKey);
        const corOptText = corOpt ? corOpt.html : formatMathForKids(q.answer);

        choiceHtml = `
          <div class="review-choice-grid">
            <div class="review-choice-pill ${isCorrect ? 'correct' : 'wrong'}">
              <span class="label">你的選擇：</span>
              <b>(${userKey}) ${userOptText}</b>
            </div>
            ${!isCorrect ? `
              <div class="review-choice-pill correct">
                <span class="label">標準正解：</span>
                <b>(${nq.answerKey}) ${corOptText}</b>
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
              <b>${nq.answerDisplayHtml}</b>
            </div>
          </div>
        `;
      }

      const groupSolHtml = nq.isGroup ? nq.subQuestions.map(sub => `
        <div class="review-sub-sol">
          <div><b>${sub.label}</b> ${sub.questionHtml} ➔ ${sub.answerDisplayHtml}</div>
          ${sub.stepBlocksHtml.length > 0 ? `<div class="km-steps-flow">${sub.stepBlocksHtml.map(s => s.html).join('')}</div>` : ''}
        </div>
      `).join('') : '';

      return `
        <div class="review-item ${!isAnswered ? 'skipped' : ans.result}">
          <div class="review-item-head">
            <div class="review-item-meta">
              <span class="review-q-num">第 ${idx + 1} 題</span>
              <span class="tag">${u.title}</span>
              <span class="tag lv">${isMental && q.stars ? `⭐ ${q.stars}★` : `L${nq.level}`}</span>
              ${statusTag}
            </div>
            <button type="button" class="btn btn-ghost btn-sm btn-toggle-detail" data-target="detail-${idx}">
              📖 看詳解 ▾
            </button>
          </div>

          <div class="review-q-text">${nq.questionHtml}</div>
          ${nq.stemImage ? `<div class="review-q-fig"><img src="${nq.stemImage}" alt="題目附圖" class="exam-stem-img"></div>` : ''}
          ${nq.stemFigureHtml ? `<div class="review-q-fig">${nq.stemFigureHtml}</div>` : ''}

          ${choiceHtml}

          <div class="review-sol-panel" id="detail-${idx}" style="display: none;">
            <div class="box final">
              <h4>🎯 正確答案</h4>
              <div class="ans">${nq.answerDisplayHtml}</div>
            </div>

            ${groupSolHtml}

            ${nq.examPurposeHtml ? `
              <div class="box purpose">
                <h4>🎯 考點核心</h4>
                <div>${nq.examPurposeHtml}</div>
              </div>
            ` : ''}

            ${nq.stepBlocksHtml.length > 0 ? `
              <div class="box steps">
                <h4>📐 ${isMental ? '邏輯推理分析' : '步驟拆解與推導過程'}</h4>
                <div class="km-steps-flow">${nq.stepBlocksHtml.map(s => s.html).join('')}</div>
              </div>
            ` : ''}

            ${nq.insightHtml ? `
              <div class="box insight">
                <h4>💡 ${isMental ? '純腦力秒殺思維' : '奧數秒殺思維（競賽直覺）'}</h4>
                <div>${nq.insightHtml}</div>
              </div>
            ` : ''}

            ${nq.primaryTrap ? `
              <div class="box trap">
                <h4>⚠️ 典型錯誤防坑診斷 <code>${nq.primaryTrap.code || ''}</code></h4>
                <div>${nq.primaryTrap.text}</div>
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
    const matchUnit = (q, uId) => (window.MathArena && window.MathArena.matchesUnitFilter)
      ? window.MathArena.matchesUnitFilter(q, uId)
      : q.unitId === uId;
    const displayed = filterUnit ? errorQuestions.filter(q => matchUnit(q, filterUnit)) : errorQuestions;

    const unitTabsHtml = [
      `<button class="chip ${!filterUnit ? 'on' : ''}" data-filter-unit="all">全部 (${errorQuestions.length})</button>`,
      ...UNITS.map(u => {
        const cnt = errorQuestions.filter(q => matchUnit(q, u.id)).length;
        if (cnt === 0) return '';
        const titleText = u.isExam ? `🏆 ${u.title.replace('六年級上_', '')} (${cnt})` : `第${u.no}單元 (${cnt})`;
        return `<button class="chip ${filterUnit === u.id ? 'on' : ''}" data-filter-unit="${u.id}">${titleText}</button>`;
      })
    ].join('');

    const listHtml = displayed.length > 0 ? displayed.map(q => {
      const nq = MathArena.normalizeQuestion(q, { kidsMath: window.KidsMath, formatMathForKids });
      const u = UNITS.find(x => x.id === q.unitId) || {};
      const ec = state.errorCounts[q.id] || 1;
      const unitLabel = u.isExam ? `🏆 ${u.title.replace('六年級上_', '')}` : `第 ${u.no} 單元 ${u.title}`;
      return `
        <div class="err-item">
          <div>
            <div class="q-mini">${nq.questionHtml}</div>
            <div class="meta">
              <span class="tag">${unitLabel}</span>
              ${q.school ? `<span class="tag" style="background:#e0e7ff; color:#3730a3; font-weight:700;">🏫 ${q.school}</span>` : ''}
              <span class="tag">${q.category || ''}</span>
              <span class="tag bad">🔥 累計錯 ${ec} 次</span>
              ${nq.primaryTrap ? `<span class="tag" style="background: #fef2f2; color: #991b1b">盲點：${nq.primaryTrap.text}</span>` : ''}
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
            ${errorQuestions.length > 0 ? `
              <button class="btn btn-primary" id="btn-drill-all-errors">一鍵消滅全部錯題</button>
              <button class="btn btn-ghost" id="btn-print-errors" title="將當前錯題排版為 A4 考卷列印">🖨️ A4 錯題出卷</button>
            ` : ''}
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

    const printErrorsBtn = document.getElementById('btn-print-errors');
    if (printErrorsBtn) {
      printErrorsBtn.addEventListener('click', () => {
        state.printConfig.unitIds = ['ERROR_BOOK'];
        state.printConfig.count = Math.max(1, state.errorBook.length);
        renderPrintSetupView();
      });
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
          startQuiz('error_book', q.unitId, null, [q.id]);
        }
      });
    });
  }

  // 取得當前 A4 出卷設定下符合所有條件（單元/錯題本 + 題型分類）的可用題目池
  function getPrintPool() {
    const hasErrorBook = state.printConfig.unitIds.includes('ERROR_BOOK');
    const normalUnitIds = state.printConfig.unitIds.filter(id => id !== 'ERROR_BOOK');
    const matchAnyUnit = (q) => normalUnitIds.some(uId => (window.MathArena && window.MathArena.matchesUnitFilter)
      ? window.MathArena.matchesUnitFilter(q, uId)
      : q.unitId === uId);
    let pool = [];
    if (hasErrorBook) {
      const errPool = QUESTION_BANK.filter(q => state.errorBook.includes(q.id));
      pool = (normalUnitIds.length > 0) ? errPool.filter(matchAnyUnit) : errPool;
    } else {
      pool = QUESTION_BANK.filter(matchAnyUnit);
    }

    const pBatches = state.printConfig.batches || ['課本原型題', '奧數天梯', '段考真題'];
    let filteredPool = pool.filter(q => pBatches.includes(q.batch || '課本原型題'));
    if (filteredPool.length === 0 && pool.length > 0) {
      filteredPool = pool;
    }
    return filteredPool;
  }

  // -------------------------------------------------------
  // 視圖渲染器：5. A4 考卷排版與出卷 (Print Setup View)
  // -------------------------------------------------------
  function renderPrintSetupView() {
    state.view = 'print';

    const errCount = state.errorBook.length;
    const isErrChecked = state.printConfig.unitIds.includes('ERROR_BOOK');
    const curU = getCurrentUserObj();

    const errorBookCheckHtml = `
      <label class="unit-error-book ${errCount === 0 ? 'disabled' : ''}" title="${errCount === 0 ? '目前沒有任何待消滅錯題' : '從錯題本中篩選出題'}">
        <input type="checkbox" value="ERROR_BOOK" ${isErrChecked ? 'checked' : ''} ${errCount === 0 ? 'disabled' : ''} data-print-unit-toggle>
        <span>🔥 <b>${curU.name} 的錯題本</b> <small style="color:${errCount > 0 ? '#e11d48' : '#94a3b8'}; font-weight:800;">(${errCount} 題)</small></span>
      </label>
    `;

    const unitChecksHtml = errorBookCheckHtml + UNITS.map(u => {
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

    const initialPool = getPrintPool();
    const totalAvail = initialPool.length;
    const sliderMax = Math.max(30, totalAvail);
    if (!state.printConfig.count || state.printConfig.count < 1) {
      state.printConfig.count = Math.min(6, sliderMax);
    } else if (state.printConfig.count > sliderMax) {
      state.printConfig.count = sliderMax;
    }

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
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <label style="margin-bottom: 0;">題目數量：</label>
              <button type="button" class="btn btn-sm btn-ghost" id="btn-print-pick-all" style="padding: 2px 10px; font-size: 12.5px; border-radius: 8px; font-weight: 700; color: var(--primary);" title="直接將題數設為當前篩選的所有可用題目">
                ⚡ 出齊全部 (<span id="avail-pool-count">${totalAvail}</span> 題)
              </button>
            </div>
            <div class="range-row">
              <input type="range" id="print-q-count" min="1" max="${sliderMax}" value="${state.printConfig.count}">
              <b id="print-q-count-val">${state.printConfig.count}</b>
            </div>
          </div>

          <div class="field">
            <label>考卷類型（同一份試卷可一鍵印出空白卷 ＋ 家長詳解）：</label>
            <div class="seg">
              <button type="button" class="chip ${(state.printConfig.printMode || 'student') === 'student' ? 'on' : ''}" data-print-mode="student">📄 學生空白卷</button>
              <button type="button" class="chip ${state.printConfig.printMode === 'teacher' ? 'on' : ''}" data-print-mode="teacher">🔑 家長詳解卷</button>
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

    const updatePrintSliderUI = () => {
      const p = getPrintPool();
      const cntEl = document.getElementById('avail-pool-count');
      if (cntEl) cntEl.textContent = p.length;
      const sMax = Math.max(30, p.length);
      const rInput = document.getElementById('print-q-count');
      const rVal = document.getElementById('print-q-count-val');
      if (rInput && rVal) {
        rInput.max = sMax;
        if (state.printConfig.count > sMax) {
          state.printConfig.count = sMax;
        }
        rInput.value = state.printConfig.count;
        rVal.textContent = state.printConfig.count;
      }
    };

    // 綁定事件
    app.querySelectorAll('[data-print-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.printConfig.printMode = btn.getAttribute('data-print-mode') === 'teacher' ? 'teacher' : 'student';
        app.querySelectorAll('[data-print-mode]').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        renderPaperSheet(false);
      });
    });

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
        updatePrintSliderUI();
        renderPaperSheet(true);
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
        updatePrintSliderUI();
        renderPaperSheet(true);
      });
    });

    const rangeInput = document.getElementById('print-q-count');
    const rangeVal = document.getElementById('print-q-count-val');
    rangeInput.addEventListener('input', () => {
      state.printConfig.count = parseInt(rangeInput.value, 10);
      rangeVal.textContent = state.printConfig.count;
      renderPaperSheet(true);
    });

    const pickAllBtn = document.getElementById('btn-print-pick-all');
    if (pickAllBtn) {
      pickAllBtn.addEventListener('click', () => {
        const p = getPrintPool();
        if (p.length > 0) {
          state.printConfig.count = p.length;
          if (rangeInput && rangeVal) {
            rangeInput.max = Math.max(30, p.length);
            rangeInput.value = p.length;
            rangeVal.textContent = p.length;
          }
          renderPaperSheet(true);
          showToast(`已設定出齊全部 ${p.length} 題！`);
        } else {
          showToast('目前條件下沒有任何可用題目');
        }
      });
    }

    app.querySelectorAll('[data-work]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.printConfig.workSize = btn.getAttribute('data-work');
        app.querySelectorAll('[data-work]').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        renderPaperSheet(false);
      });
    });

    const shufflePrintBtn = document.getElementById('btn-shuffle-print');
    if (shufflePrintBtn) {
      shufflePrintBtn.addEventListener('click', () => {
        renderPaperSheet(true);
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

  function renderPaperSheet(forceReshuffle = false) {
    const container = document.getElementById('paper-container');
    if (!container) return;

    const hasErrorBook = state.printConfig.unitIds.includes('ERROR_BOOK');
    const normalUnitIds = state.printConfig.unitIds.filter(id => id !== 'ERROR_BOOK');
    const curUser = getCurrentUserObj();

    // 取得當前設定下的題目池
    const pool = getPrintPool();

    if (pool.length === 0) {
      state.printSelectionIds = null;
      container.innerHTML = `
        <article class="paper" style="padding: 60px 40px; text-align: center; color: var(--ink-soft);">
          <div style="font-size: 52px; margin-bottom: 16px;">📑</div>
          <h2 style="font-size: 20pt; color: var(--ink); margin-bottom: 12px;">目前條件下無可出題目</h2>
          <p style="font-size: 13pt; line-height: 1.8;">
            ${hasErrorBook 
              ? (normalUnitIds.length > 0 ? `太好了！【${curUser.name}】在所選單元中目前沒有累積任何錯題！` : `太棒了！【${curUser.name}】目前錯題本中沒有待消滅的題目！`)
              : '所選取的單元目前無符合分類之題目，請嘗試切換題型分類或勾選其他單元。'}
          </p>
        </article>
      `;
      return;
    }

    const actualCount = Math.min(pool.length, state.printConfig.count);
    const poolById = new Map(pool.map(q => [q.id, q]));
    let selected = [];
    if (!forceReshuffle && Array.isArray(state.printSelectionIds) && state.printSelectionIds.length === actualCount) {
      const reused = state.printSelectionIds.map(id => poolById.get(id)).filter(Boolean);
      if (reused.length === actualCount) selected = reused;
    }
    if (selected.length === 0) {
      selected = shuffle(pool).slice(0, actualCount);
      state.printSelectionIds = selected.map(q => q.id);
    }

    // 依人員與題目 ID 組裝 QR Code 網址，支援直接在 iPad 掃描時自動切回該人員帳號對答案（錯題卷模式附帶 mode=error_book）
    const qIds = selected.map(q => q.id).join(',');
    const modeParam = hasErrorBook ? '&mode=error_book' : '';
    const checkUrl = `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(state.currentUser)}${modeParam}&quiz_ids=${encodeURIComponent(qIds)}`;
    const qrSvg = makeQRCode(checkUrl);

    let mainTitle = '';
    if (hasErrorBook && normalUnitIds.length === 0) {
      mainTitle = `翰林版國小六上數學 🔥【${curUser.name} 弱點錯題消滅卷】`;
    } else if (hasErrorBook && normalUnitIds.length > 0) {
      const uNames = normalUnitIds.map(uId => {
        const u = UNITS.find(x => x.id === uId);
        return u ? (u.isExam ? u.title : `第${u.no}單元`) : '';
      }).filter(Boolean).join('、');
      mainTitle = `翰林版國小六上數學 🔥【${curUser.name} 錯題消滅卷・${uNames}】`;
    } else {
      const uNames = normalUnitIds.map(uId => {
        const u = UNITS.find(x => x.id === uId);
        return u ? (u.isExam ? u.title : `第${u.no}單元`) : '';
      }).filter(Boolean).join('、');
      mainTitle = `翰林版國小六上數學 特訓測驗卷 【${uNames}】`;
    }

    container.innerHTML = MathArena.buildPaperSheetHtml(selected, {
      printMode: state.printConfig.printMode || 'student',
      curUser,
      workSize: state.printConfig.workSize,
      qrSvg,
      hasErrorBook,
      mainTitle,
      kidsMath: window.KidsMath || null,
      formatMathForKids,
    });

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
        const nq = MathArena.normalizeQuestion(q, { kidsMath: window.KidsMath, formatMathForKids });
        const u = UNITS.find(x => x.id === q.unitId) || {};
        md += `### ${idx + 1}. [${u.title}] ${q.category} (天梯 L${nq.level})\n`;
        md += `- **題目：** ${nq.questionPlain}\n`;
        md += `- **正確答案：** ${nq.answerPlainText}\n`;
        md += `- **推導步驟：** ${nq.stepsPlain.join(' → ')}\n`;
        if (nq.primaryTrap) {
          md += `- **盲點代碼：** \`${nq.primaryTrap.code}\` — ${nq.primaryTrap.text}\n`;
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
    const modeParam = params.get('mode');
    if (quizIds) {
      const lMap = (window.MathArena && window.MathArena.buildLegacyIdMap)
        ? window.MathArena.buildLegacyIdMap(QUESTION_BANK)
        : {};
      const ids = quizIds.split(',').map(id => lMap[id.trim()] || id.trim());
      const selected = QUESTION_BANK.filter(q => ids.includes(q.id));
      if (selected.length > 0) {
        const curU = getCurrentUserObj();
        const mode = (modeParam === 'error_book') ? 'error_book' : 'mixed';
        startQuiz(mode, selected[0].unitId, null, selected.map(q => q.id));
        if (modeParam === 'error_book') {
          showToast(`已載入【${curU.name}】的 A4 錯題消滅卷！算對自動消滅錯題！`);
        } else {
          showToast(`已載入【${curU.name}】的考卷對應題目！`);
        }
        return true;
      }
    }
    return false;
  }

  // -------------------------------------------------------
  // 初始化與事件監聽
  // -------------------------------------------------------
  const FONT_SCALES = [0.9, 1, 1.15, 1.3, 1.4];
  const FONT_SCALE_KEY = 'g6_math_font_scale';

  function applyFontScale(scale) {
    const valid = FONT_SCALES.includes(scale) ? scale : 1;
    document.documentElement.style.setProperty('--font-scale', String(valid));
    const lbl = document.getElementById('nav-font-label');
    if (lbl) lbl.textContent = `${Math.round(valid * 100)}%`;
    try {
      localStorage.setItem(FONT_SCALE_KEY, String(valid));
    } catch (e) {}
    return valid;
  }

  function updateSoundButtonUI() {
    const btn = document.getElementById('nav-sound');
    if (!btn) return;
    const on = window.MathSound ? window.MathSound.isEnabled() : true;
    btn.textContent = on ? '🔊' : '🔇';
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.title = on ? '音效已開啟（點擊靜音）' : '音效已靜音（點擊開啟）';
  }

  function init() {
    const savedUser = localStorage.getItem(GLOBAL_STORAGE_KEYS.currentUser) || 'rex';
    loadState(savedUser);
    updateNavBadge();
    updateNavUserUI();

    const savedScale = parseFloat(localStorage.getItem(FONT_SCALE_KEY) || '1');
    applyFontScale(savedScale);
    updateSoundButtonUI();

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

    const navFontBtn = document.getElementById('nav-font');
    if (navFontBtn) {
      navFontBtn.addEventListener('click', () => {
        const cur = parseFloat(localStorage.getItem(FONT_SCALE_KEY) || '1');
        const idx = FONT_SCALES.indexOf(cur);
        const next = FONT_SCALES[(idx + 1) % FONT_SCALES.length];
        applyFontScale(next);
        showToast(`🔠 題目字級切換為 ${Math.round(next * 100)}%`);
      });
    }

    const navSoundBtn = document.getElementById('nav-sound');
    if (navSoundBtn) {
      navSoundBtn.addEventListener('click', () => {
        if (window.MathSound) {
          const on = window.MathSound.toggle();
          updateSoundButtonUI();
          showToast(on ? '🔊 已開啟答題音效' : '🔇 已靜音');
        }
      });
    }

    document.getElementById('nav-home').addEventListener('click', () => {
      state.view = 'dashboard';
      renderDashboardView();
    });

    const navArenaBtn = document.getElementById('nav-arena');
    if (navArenaBtn) {
      navArenaBtn.addEventListener('click', () => {
        state.arenaFilter.explicitIds = null;
        renderArenaView();
      });
    }

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
