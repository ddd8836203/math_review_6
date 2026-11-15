/* =========================================================
   六上數學特訓 — 新考場核心引擎 & 舊題轉接器 (arena.js)
   Phase P9: #view-arena 級聯篩選 / 雙軌測驗 / 模擬考 / 4D 詳解 / legacyId 轉移
   ========================================================= */

(function (root) {
  'use strict';

  const TRAP_LABEL_MAP = {
    U05_BASE_SWAP: '基準與比較搞反',
    U05_SUM_FORGET_ONE: '母子和忘記＋1',
    U05_DIFF_FORGET_MINUS_ONE: '母子差忘記−1',
    U05_MULTIPLY_INSTEAD: '乘除方向做反',
    U05_ANSWER_WRONG_TARGET: '答非所問',
    U05_DISCOUNT_AS_SAVING: '折扣與便宜搞反',
    U05_MARKUP_BASE_WRONG: '加成基準誤用',
    U05_RECIPROCAL_MISS: '比值互換沒取倒數',
    U05_PERCENT_DECIMAL_SHIFT: '小數百分率移位錯',
    U05_TRANSFER_TOTAL_CHANGE: '移動時總和忘不變',
    U05_AGE_DIFF_CHANGE: '年齡差誤以為會變',
    U05_CALC_SLIP: '計算粗心失誤',
  };

  function getTrapLabel(code) {
    return TRAP_LABEL_MAP[code] || code || '常見思維陷阱';
  }

  function escHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function defaultFormatMathForKids(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/(^|[^\$])((?:\d+\s*)?\\frac\{[^{}]+\}\{[^{}]+\})([^\$]|$)/g, '$1$$$2$$$3');
  }

  function defaultCleanOptionText(opt, fmt) {
    if (!opt || typeof opt !== 'string') return '';
    return fmt(opt.replace(/^(?:[A-D]\.|\([1-4A-D]\)|[①-④])\s*/i, ''));
  }

  function getDifficultyBand(q) {
    const lv = Number((q && (q.level || q.stars)) || 1);
    if (lv <= 3) return 'basic';
    if (lv <= 6) return 'standard';
    return 'challenge';
  }

  function renderTextSafe(text, is4D, km, fmt) {
    if (!text) return '';
    if (is4D && km && typeof km.renderKidsText === 'function') {
      return km.renderKidsText(String(text));
    }
    return fmt(String(text));
  }

  /**
   * 統一轉接 Schema v4D-1（U05 等 4D 題）與舊版題型（U01~U04, U06~U08, EXAM_MID1）。
   */
  function normalizeQuestion(q, opts) {
    const km = (opts && opts.kidsMath) || (typeof root !== 'undefined' && root.KidsMath) || null;
    const fmt = (opts && opts.formatMathForKids) || defaultFormatMathForKids;
    const is4D = !!(q && q.explanation && typeof q.explanation === 'object' && Array.isArray(q.explanation.steps));

    const level = Number((q && (q.level || q.stars)) || 1);
    const difficulty = Number((q && q.difficulty) || 2);
    const band = getDifficultyBand(q);

    const questionHtml = renderTextSafe(q && q.question, is4D, km, fmt);
    const questionPlain = String((q && q.question) || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '');

    // 題幹插圖：舊題 q.svg 屬於題意幾何圖（作答前就顯示）；4D figure 屬詳解輔助線段圖（於詳解 D4 / bar step 顯示）
    const stemFigureHtml = (q && q.svg) ? String(q.svg) : '';
    const solutionFigureHtml = (q && q.figure && q.figure.type === 'bar' && km && typeof km.renderBarDiagramSvg === 'function')
      ? km.renderBarDiagramSvg(q.figure)
      : '';

    const rawOptions = Array.isArray(q && q.options) ? q.options : [];
    const hasOptions = rawOptions.length > 0;
    const LETTERS = ['A', 'B', 'C', 'D'];

    const normalizedOptions = rawOptions.map((item, idx) => {
      if (item && typeof item === 'object') {
        const key = (item.key || LETTERS[idx] || String(idx + 1)).toUpperCase();
        const rawText = String(item.text || '');
        const trapCode = item.trapCode || null;
        return {
          key,
          rawText,
          html: renderTextSafe(rawText, is4D, km, fmt),
          trapCode,
          trapLabel: trapCode ? getTrapLabel(trapCode) : null,
        };
      }
      const key = LETTERS[idx] || String(idx + 1);
      const rawText = String(item || '').replace(/^(?:[A-D]\.|\([1-4A-D]\)|[①-④])\s*/i, '');
      return {
        key,
        rawText,
        html: fmt(rawText),
        trapCode: null,
        trapLabel: null,
      };
    });

    let answerKey = null;
    if (hasOptions) {
      if (is4D) {
        answerKey = String((q && q.answer) || '').trim().charAt(0).toUpperCase();
      } else {
        answerKey = String((q && (q.answerKey || (q.answer && q.answer.trim().charAt(0)))) || '').toUpperCase();
      }
    }

    let answerDisplayHtml = '';
    let answerPlainText = String((q && q.answer) || '');
    if (hasOptions && answerKey) {
      const matched = normalizedOptions.find(o => o.key === answerKey);
      if (matched) {
        answerDisplayHtml = `<span class="ans-key-pill">${answerKey}</span> ${matched.html}`;
        answerPlainText = `(${answerKey}) ${matched.rawText}`;
      } else {
        answerDisplayHtml = fmt(answerPlainText);
      }
    } else {
      answerDisplayHtml = fmt(answerPlainText);
    }

    // Steps normalization
    let stepBlocksHtml = [];
    let stepsPlain = [];
    if (is4D) {
      stepBlocksHtml = (q.explanation.steps || []).map(st => ({
        type: st.type,
        html: km && typeof km.renderStepBlockHtml === 'function'
          ? km.renderStepBlockHtml(st, q)
          : `<div class="km-step km-step-text">${escHtml(st.text || st.expr || '')}</div>`,
      }));
      stepsPlain = (q.explanation.steps || []).map(st => {
        if (st.type === 'text' || st.type === 'answer') return st.text;
        if (st.type === 'eq') return `${st.expr}${st.unit ? ' (' + st.unit + ')' : ''}`;
        if (st.type === 'longdiv') return `直式除法：${st.dividend} ÷ ${st.divisor}`;
        if (st.type === 'mul') return `直式乘法：${st.a} × ${st.b}`;
        if (st.type === 'addsub') return `直式計算：${st.a} ${st.op} ${st.b}`;
        if (st.type === 'bar') return '[線段圖]';
        return '';
      }).filter(Boolean);
    } else {
      const rawSteps = Array.isArray(q && q.steps) ? q.steps : [];
      stepBlocksHtml = rawSteps.map((s, idx) => ({
        type: 'legacy',
        html: `<div class="km-step km-step-legacy"><span class="legacy-step-num">${idx + 1}</span><div class="legacy-step-body">${fmt(String(s))}</div></div>`,
      }));
      stepsPlain = rawSteps.map(s => String(s));
    }

    const examPurpose = is4D ? String(q.explanation.examPurpose || '') : '';
    const distractorAnalysis = is4D ? (q.explanation.distractorAnalysis || {}) : null;
    const figureNote = is4D ? (q.explanation.figureNote || null) : null;
    const insight = is4D ? String(q.explanation.insight || '') : String((q && q.insight) || '');
    const insightHtml = renderTextSafe(insight, is4D, km, fmt);
    const extensionStudy = is4D && q.extensionStudy ? q.extensionStudy : null;

    // Trap summary (compat for error-book list & legacy UI)
    let primaryTrap = null;
    if (is4D) {
      const wrongOpt = normalizedOptions.find(o => o.trapCode);
      if (wrongOpt) {
        const reason = distractorAnalysis && distractorAnalysis[wrongOpt.key] ? distractorAnalysis[wrongOpt.key] : wrongOpt.trapLabel;
        primaryTrap = { code: wrongOpt.trapCode, label: wrongOpt.trapLabel, text: reason };
      }
    } else if (q && q.trap) {
      primaryTrap = {
        code: q.trap.code || '',
        label: q.trap.code || '',
        text: fmt(q.trap.text || ''),
      };
    }

    return {
      raw: q,
      id: q && q.id,
      legacyId: (q && q.legacyId) || null,
      unitId: (q && q.unitId) || '',
      section: (q && q.section) || '',
      sectionName: (q && q.sectionName) || '',
      category: (q && q.category) || '觀念綜合',
      batch: (q && q.batch) || '課本原型題',
      source: (q && q.source) || '',
      school: (q && q.school) || null,
      work: (q && q.work) || 'md',
      level,
      difficulty,
      band,
      is4D,
      questionHtml,
      questionPlain,
      stemFigureHtml,
      solutionFigureHtml,
      cropImage: (q && q.cropImage) || null,
      examPageImage: (q && q.examPageImage) || null,
      hasOptions,
      options: normalizedOptions,
      answerKey,
      answerDisplayHtml,
      answerPlainText,
      examPurpose,
      examPurposeHtml: renderTextSafe(examPurpose, is4D, km, fmt),
      stepBlocksHtml,
      stepsPlain,
      distractorAnalysis,
      figureNote,
      figureNoteHtml: renderTextSafe(figureNote, is4D, km, fmt),
      insight,
      insightHtml,
      primaryTrap,
      extensionStudy,
    };
  }

  /**
   * 動態從 QUESTION_BANK 建立 legacyId -> 新 4D ID 對照表（零硬編碼）。
   */
  function buildLegacyIdMap(questionBank) {
    const map = {};
    if (!Array.isArray(questionBank)) return map;
    for (const q of questionBank) {
      if (q && q.legacyId && q.id && q.legacyId !== q.id) {
        map[q.legacyId] = q.id;
      }
    }
    return map;
  }

  /**
   * 無損轉移舊版題號（例如 u05_001 -> U05-S1-B-001）至新版 4D ID。
   * 保留首次轉移前的備份於 stateObj.u05LegacyBackup，可反覆安全重跑（冪等）。
   */
  function migrateLegacyIdsInState(stateObj, questionBank) {
    const map = buildLegacyIdMap(questionBank);
    const legacyKeys = Object.keys(map);
    if (!stateObj || legacyKeys.length === 0) return { migratedCount: 0, map };

    let migratedCount = 0;
    const capturedBackup = stateObj.u05LegacyBackup || {
      migratedAt: null,
      errorBook: [],
      errorCounts: {},
      successCounts: {},
      slowCounts: {},
    };
    let touchedBackup = false;

    const recordLegacyVal = (bucket, oldId, val) => {
      if (bucket === 'errorBook') {
        if (!capturedBackup.errorBook.includes(oldId)) {
          capturedBackup.errorBook.push(oldId);
          touchedBackup = true;
        }
      } else if (capturedBackup[bucket] && capturedBackup[bucket][oldId] === undefined) {
        capturedBackup[bucket][oldId] = val;
        touchedBackup = true;
      }
    };

    if (Array.isArray(stateObj.errorBook)) {
      const nextErr = [];
      const seen = new Set();
      for (const id of stateObj.errorBook) {
        const mapped = map[id] || id;
        if (map[id]) {
          migratedCount++;
          recordLegacyVal('errorBook', id, true);
        }
        if (!seen.has(mapped)) {
          seen.add(mapped);
          nextErr.push(mapped);
        }
      }
      stateObj.errorBook = nextErr;
    }

    for (const countKey of ['errorCounts', 'successCounts', 'slowCounts']) {
      const obj = stateObj[countKey];
      if (!obj || typeof obj !== 'object') continue;
      for (const oldId of Object.keys(obj)) {
        const newId = map[oldId];
        if (!newId) continue;
        const val = Number(obj[oldId]) || 0;
        recordLegacyVal(countKey, oldId, val);
        obj[newId] = (Number(obj[newId]) || 0) + val;
        delete obj[oldId];
        migratedCount++;
      }
    }

    if (Array.isArray(stateObj.fullHistory)) {
      for (const sess of stateObj.fullHistory) {
        if (!sess || !Array.isArray(sess.answers)) continue;
        for (const ans of sess.answers) {
          if (ans && ans.qId && map[ans.qId]) {
            ans.qId = map[ans.qId];
            migratedCount++;
          }
        }
      }
    }

    if (touchedBackup || migratedCount > 0) {
      if (!capturedBackup.migratedAt) {
        capturedBackup.migratedAt = Date.now();
      }
      stateObj.u05LegacyBackup = capturedBackup;
    }

    return { migratedCount, map };
  }

  /**
   * 3 層級聯篩選：
   * L1: unit ('ALL' | 'ERROR_BOOK' | unitId | 'MIXED_ID_LIST')
   * L2: batch ('ALL' | '課本原型題' | '奧數天梯' | '純腦力體操' | '段考真題') ＋ school ('ALL' | schoolName)
   * L3: band ('ALL' | 'basic' | 'standard' | 'challenge')
   */
  function filterArenaPool(questionBank, stateObj, filter) {
    const f = filter || {};
    let list = Array.isArray(questionBank) ? [...questionBank] : [];

    // Custom explicit ID list (e.g. from QR code or retry single error question)
    if (Array.isArray(f.explicitIds) && f.explicitIds.length > 0) {
      const idSet = new Set(f.explicitIds);
      return list.filter(q => idSet.has(q.id));
    }

    // Layer 1: Unit / Error Book
    if (f.unit === 'ERROR_BOOK') {
      const errSet = new Set((stateObj && stateObj.errorBook) || []);
      list = list.filter(q => errSet.has(q.id));
    } else if (f.unit && f.unit !== 'ALL') {
      list = list.filter(q => q.unitId === f.unit);
    }

    if (f.errorsOnly) {
      const errSet = new Set((stateObj && stateObj.errorBook) || []);
      list = list.filter(q => errSet.has(q.id));
    }

    // Layer 2: Batch & School
    if (f.batch && f.batch !== 'ALL') {
      list = list.filter(q => (q.batch || '課本原型題') === f.batch);
    }
    if ((f.unit === 'EXAM_MID1' || f.batch === '段考真題') && f.school && f.school !== 'ALL') {
      list = list.filter(q => q.school === f.school);
    }

    // Layer 3: Difficulty Band (based on level 1..10)
    if (f.band && f.band !== 'ALL') {
      list = list.filter(q => getDifficultyBand(q) === f.band);
    }

    // Order
    if (f.sortOrder === 'ladder' || f.batch === '純腦力體操' || (list.length > 0 && list.every(q => q.unitId === 'U05'))) {
      // Keep U05 manifest/ladder coherence if sorted by ladder
      if (f.sortOrder === 'ladder') {
        list.sort((a, b) => ((a.level || a.stars || 1) - (b.level || b.stars || 1)));
      }
    }

    return list;
  }

  /**
   * 計算第 2 / 第 3 層各膠囊在目前上游篩選下的動態題數（確保永遠級聯、不出現幽靈選項）。
   */
  function getCascadeStats(questionBank, stateObj, filter) {
    const f = filter || {};
    const l1List = filterArenaPool(questionBank, stateObj, {
      unit: f.unit,
      errorsOnly: f.errorsOnly,
      explicitIds: f.explicitIds,
    });

    const batches = ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'];
    const batchCounts = { ALL: l1List.length };
    for (const b of batches) {
      batchCounts[b] = l1List.filter(q => (q.batch || '課本原型題') === b).length;
    }

    const l2List = filterArenaPool(questionBank, stateObj, {
      unit: f.unit,
      errorsOnly: f.errorsOnly,
      batch: f.batch,
      school: f.school,
      explicitIds: f.explicitIds,
    });

    const bandCounts = {
      ALL: l2List.length,
      basic: l2List.filter(q => getDifficultyBand(q) === 'basic').length,
      standard: l2List.filter(q => getDifficultyBand(q) === 'standard').length,
      challenge: l2List.filter(q => getDifficultyBand(q) === 'challenge').length,
    };

    return { batchCounts, bandCounts, totalMatched: filterArenaPool(questionBank, stateObj, f).length };
  }

  function buildHeatDrawerHtml(pool, stateObj, curIdx) {
    return pool.map((item, i) => {
      const okCnt = (stateObj.successCounts && stateObj.successCounts[item.id]) || 0;
      const errCnt = (stateObj.errorCounts && stateObj.errorCounts[item.id]) || 0;
      const slowCnt = (stateObj.slowCounts && stateObj.slowCounts[item.id]) || 0;
      const netErr = errCnt - okCnt;

      let heatCls = 'heat-none';
      if (errCnt > 0 || okCnt > 0) {
        if (netErr >= 3) heatCls = 'heat-bad-heavy';
        else if (netErr >= 2) heatCls = 'heat-bad-mid';
        else if (netErr >= 1) heatCls = 'heat-bad-light';
        else if (netErr === 0) heatCls = 'heat-tie';
        else if (netErr <= -3) heatCls = 'heat-ok-heavy';
        else if (netErr <= -1) heatCls = 'heat-ok-light';
      }
      const isCurrent = i === curIdx ? 'current' : '';
      let tip = `第 ${i + 1} 題：答對 ${okCnt} 次 · 答錯 ${errCnt} 次`;
      if (slowCnt > 0) tip += ` · 想很久 ${slowCnt} 次`;
      return `
        <button type="button" class="drawer-q-btn ${heatCls} ${isCurrent}" data-arena-jump="${i}" title="${escHtml(tip)}">
          ${okCnt > 0 ? `<span class="q-badge-ok">${okCnt}</span>` : ''}
          ${errCnt > 0 ? `<span class="q-badge-bad">${errCnt}</span>` : ''}
          <span class="q-num-center">${i + 1}</span>
        </button>
      `;
    }).join('');
  }

  /**
   * 渲染完整 #view-arena HTML（含 3 層級聯控制列 + 考題主卡 + 4D 診斷區 + 延伸學習 3 模組 + 抽屜速跳盤）
   */
  function renderArenaHtml(ctx) {
    const {
      units,
      examSchools,
      questionBank,
      state,
      filter,
      round,
      pool,
      hideCascadeBar,
      formatMathForKids,
      kidsMath,
    } = ctx;

    const cascade = getCascadeStats(questionBank, state, filter);
    const total = pool.length;
    const curIdx = Math.min(Math.max(0, round.cursor || 0), Math.max(0, total - 1));
    const rawQ = pool[curIdx] || null;
    const nq = rawQ ? normalizeQuestion(rawQ, { kidsMath, formatMathForKids }) : null;

    const roundKey = round.roundKey;
    const ansRecord = nq && round.answered ? round.answered[nq.id] : null;
    const examDraft = nq && round.examDrafts ? round.examDrafts[nq.id] : null;
    const isExamMode = filter.examMode === 'exam';
    const isAnswered = !!ansRecord;
    const showDiagnosis = isAnswered && (!isExamMode || round.examSubmitted);
    const answeredCount = isExamMode
      ? Object.keys(round.examDrafts || {}).length
      : Object.keys(round.answered || {}).length;

    const unitPills = [
      { id: 'ALL', label: `全題庫 (${questionBank.length})` },
      { id: 'ERROR_BOOK', label: `🔥 錯題本 (${state.errorBook.length})` },
      ...units.map(u => ({
        id: u.id,
        label: u.isExam ? '🏆 段考真題' : `第${u.no}單元 ${u.title}`,
      })),
    ];

    const batchDefs = [
      { id: 'ALL', label: '全部題型' },
      { id: '課本原型題', label: '📖 課本原型' },
      { id: '奧數天梯', label: '🪜 奧數天梯' },
      { id: '純腦力體操', label: '🧠 腦力體操' },
      { id: '段考真題', label: '🏆 段考真題' },
    ];

    const bandDefs = [
      { id: 'ALL', label: '全部難度' },
      { id: 'basic', label: '★ 基礎 (L1~L3)' },
      { id: 'standard', label: '★★ 標準 (L4~L6)' },
      { id: 'challenge', label: '★★★ 挑戰 (L7~L10)' },
    ];

    const cascadeBarHtml = hideCascadeBar ? `
      <div class="arena-explicit-bar card-surface">
        <span>🎯 目前正在進行專屬抽題練習（${total} 題）</span>
        <button type="button" class="btn btn-sm btn-ghost" id="btn-arena-open-cascade">🎛️ 切換自選篩選</button>
      </div>
    ` : `
      <section class="arena-cascade card-surface" id="arena-cascade">
        <div class="arena-filter-row">
          <span class="arena-filter-label">1. 單元：</span>
          <div class="arena-pill-scroll">
            ${unitPills.map(up => `
              <button type="button" class="arena-pill ${filter.unit === up.id ? 'active' : ''}" data-filter-unit="${escHtml(up.id)}">
                ${escHtml(up.label)}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="arena-filter-row">
          <span class="arena-filter-label">2. 題型：</span>
          <div class="arena-pill-scroll">
            ${batchDefs.map(b => {
              const cnt = cascade.batchCounts[b.id] || 0;
              const active = filter.batch === b.id ? 'active' : '';
              const disabled = b.id !== 'ALL' && cnt === 0 ? 'disabled' : '';
              return `
                <button type="button" class="arena-pill ${active}" data-filter-batch="${escHtml(b.id)}" ${disabled}>
                  ${escHtml(b.label)} <small>(${cnt})</small>
                </button>
              `;
            }).join('')}
            ${(filter.unit === 'EXAM_MID1' || filter.batch === '段考真題') ? `
              <select class="arena-school-select" id="arena-school-select" aria-label="選擇段考學校">
                ${examSchools.map(sch => `<option value="${escHtml(sch.id)}" ${filter.school === sch.id ? 'selected' : ''}>🏫 ${escHtml(sch.shortName)}</option>`).join('')}
              </select>
            ` : ''}
          </div>
        </div>

        <div class="arena-filter-row">
          <span class="arena-filter-label">3. 難度：</span>
          <div class="arena-pill-scroll">
            ${bandDefs.map(bd => {
              const cnt = cascade.bandCounts[bd.id] || 0;
              const active = filter.band === bd.id ? 'active' : '';
              const disabled = bd.id !== 'ALL' && cnt === 0 ? 'disabled' : '';
              return `
                <button type="button" class="arena-pill ${active}" data-filter-band="${escHtml(bd.id)}" ${disabled}>
                  ${escHtml(bd.label)} <small>(${cnt})</small>
                </button>
              `;
            }).join('')}

            <div class="arena-mode-switch" role="group" aria-label="作答模式">
              <button type="button" class="mode-pill ${!isExamMode ? 'active' : ''}" data-arena-mode="instant">⚡ 即時批改</button>
              <button type="button" class="mode-pill ${isExamMode ? 'active' : ''}" data-arena-mode="exam">📝 模擬考</button>
            </div>
          </div>
        </div>
      </section>
    `;

    // Empty state when filters yield 0 questions
    if (!nq) {
      return `
        <div class="view arena" id="view-arena" data-round-key="${escHtml(roundKey)}">
          <div class="arena-topbar">
            <button type="button" class="btn btn-ghost" id="btn-arena-home">← 回首頁</button>
            <h2>🎯 4D 智慧數學考場</h2>
          </div>
          ${cascadeBarHtml}
          <div class="card-surface empty-arena">
            <div class="emo">🔍</div>
            <h3>目前篩選組合沒有題目</h3>
            <p class="muted">請調整上方的單元、題型或難度篩選（若為錯題本，代表錯題已全部消滅！）</p>
            <button type="button" class="btn btn-primary" id="btn-arena-reset-filters">重置全部篩選</button>
          </div>
        </div>
      `;
    }

    const unitObj = units.find(u => u.id === nq.unitId) || { title: '綜合特訓', no: '?' };
    const isErr = state.errorBook.includes(nq.id);
    const hasImage = !!(nq.cropImage || nq.examPageImage);
    const isImgMode = !!(state.imgModeQuestions && state.imgModeQuestions[nq.id]);
    const isBlinded = !!round.hideOptions && nq.hasOptions && !showDiagnosis;
    const isExtOpen = !!(round.openExt && round.openExt[nq.id]);

    const starCount = nq.difficulty;
    const diffStars = '★'.repeat(starCount) + '☆'.repeat(Math.max(0, 5 - starCount));

    // Choices rendering
    const optionsHtml = nq.hasOptions ? `
      <div class="arena-opt-tools">
        ${!showDiagnosis ? `
          <button type="button" class="btn btn-sm btn-ghost ${round.hideOptions ? 'on' : ''}" id="btn-toggle-blind">
            ${round.hideOptions ? '👁️ 顯示選項並作答' : '🙈 遮住選項（先用計算紙算）'}
          </button>
        ` : ''}
        ${isExamMode && !round.examSubmitted ? `
          <span class="exam-draft-status">${examDraft ? `已暫存選擇 (${examDraft})` : '尚未作答，請點選 A / B / C / D'}</span>
        ` : ''}
      </div>
      <div class="options-grid ${isBlinded ? 'options-blinded' : ''}" id="arena-options-grid">
        ${nq.options.map(opt => {
          let cls = 'opt-btn arena-opt-btn';
          let dis = '';
          if (showDiagnosis) {
            dis = 'disabled';
            if (opt.key === nq.answerKey) cls += ' opt-correct';
            else if (ansRecord && ansRecord.userChoice === opt.key && ansRecord.result === 'bad') cls += ' opt-wrong';
            else cls += ' opt-dim';
          } else if (isExamMode && examDraft === opt.key) {
            cls += ' opt-picked-draft';
          }
          return `
            <button type="button" class="${cls}" data-arena-opt="${opt.key}" ${dis} ${isBlinded ? 'disabled' : ''}>
              <span class="opt-letter">${opt.key}</span>
              <span class="opt-text">${opt.html}</span>
            </button>
          `;
        }).join('')}
      </div>
    ` : `
      ${!showDiagnosis ? `
        <div class="reveal" id="arena-reveal-area">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-arena-reveal-open">
            👁️ 我在紙上算好了，查看正解與詳解
          </button>
        </div>
      ` : ''}
    `;

    // 4D Diagnosis Panel
    let wrongTrapBannerHtml = '';
    if (showDiagnosis && nq.hasOptions && ansRecord) {
      if (ansRecord.result === 'ok') {
        wrongTrapBannerHtml = `
          <div class="arena-alert ok">
            🎯 <b>作答正確！</b>${nq.is4D ? '觀念基準鎖定準確！' : '繼續維持手感！'}
          </div>
        `;
      } else {
        const pickedOpt = nq.options.find(o => o.key === ansRecord.userChoice);
        const daMsg = nq.distractorAnalysis && ansRecord.userChoice ? nq.distractorAnalysis[ansRecord.userChoice] : '';
        wrongTrapBannerHtml = `
          <div class="arena-alert bad">
            <div class="alert-head">
              💡 <b>你選了 (${escHtml(ansRecord.userChoice || '?')})</b>
              ${pickedOpt && pickedOpt.trapCode ? `<span class="trap-chip">${escHtml(pickedOpt.trapLabel)} <code>${escHtml(pickedOpt.trapCode)}</code></span>` : ''}
            </div>
            ${daMsg ? `<div class="alert-body">${renderTextSafe(daMsg, nq.is4D, kidsMath, formatMathForKids)}</div>` : ''}
          </div>
        `;
      }
    }

    // Wrong option breakdown list for Dimension 3
    let d3Html = '';
    if (nq.is4D && nq.distractorAnalysis) {
      const wrongItems = nq.options.filter(o => o.key !== nq.answerKey).map(o => `
        <div class="da-row ${ansRecord && ansRecord.userChoice === o.key ? 'da-picked' : ''}">
          <div class="da-head">
            <span class="da-key">(${o.key})</span>
            <span class="trap-chip">${escHtml(o.trapLabel || '')} <code>${escHtml(o.trapCode || '')}</code></span>
          </div>
          <div class="da-desc">${renderTextSafe(nq.distractorAnalysis[o.key] || '', true, kidsMath, formatMathForKids)}</div>
        </div>
      `).join('');
      d3Html = `
        <div class="box trap arena-d3">
          <h4>⚠️ 維度三：陷阱選項盲點拆解</h4>
          ${wrongItems}
        </div>
      `;
    } else if (nq.primaryTrap) {
      d3Html = `
        <div class="box trap">
          <h4>⚠️ 典型錯誤防坑診斷 ${nq.primaryTrap.code ? `<code>${escHtml(nq.primaryTrap.code)}</code>` : ''}</h4>
          <div>${nq.primaryTrap.text}</div>
        </div>
      `;
    }

    const d4Html = nq.figureNoteHtml ? `
      <div class="box figure-note arena-d4">
        <h4>📊 維度四：線段圖與基準定位關鍵</h4>
        ${nq.solutionFigureHtml ? `<div class="km-inline-fig">${nq.solutionFigureHtml}</div>` : ''}
        <p>${nq.figureNoteHtml}</p>
      </div>
    ` : '';

    const extHtml = nq.extensionStudy ? `
      <div class="arena-ext-wrap">
        <button type="button" class="btn btn-ghost btn-block arena-ext-toggle" id="btn-arena-ext-toggle" aria-expanded="${isExtOpen ? 'true' : 'false'}">
          📚 延伸學習密技（核心口訣 / 易混淆比較 / 段考變形題） ${isExtOpen ? '▴ 收合' : '▾ 展開查看'}
        </button>
        ${isExtOpen ? `
          <div class="arena-ext-panel" id="arena-ext-panel">
            <div class="ext-card">
              <h5>🔑 核心解題口訣</h5>
              <ul>${(nq.extensionStudy.coreFormulas || []).map(f => `<li>${renderTextSafe(f, true, kidsMath, formatMathForKids)}</li>`).join('')}</ul>
            </div>
            <div class="ext-card">
              <h5>⚖️ 易混淆觀念比較</h5>
              <p>${renderTextSafe(nq.extensionStudy.conceptCompare, true, kidsMath, formatMathForKids)}</p>
            </div>
            <div class="ext-card">
              <h5>🔮 段考與奧數變形預測</h5>
              <p>${renderTextSafe(nq.extensionStudy.examVariations, true, kidsMath, formatMathForKids)}</p>
            </div>
          </div>
        ` : ''}
      </div>
    ` : '';

    const legacySelfGradeHtml = (!nq.hasOptions) ? `
      <div class="feedback">
        <p>請誠實回饋你剛才的紙筆作答狀況：</p>
        <div class="fb-row">
          <button type="button" class="fb ok ${isAnswered && ansRecord.result === 'ok' ? 'picked' : (isAnswered ? 'dim' : '')}" data-arena-fb="ok" ${isAnswered ? 'disabled' : ''}>
            <span class="emo">👍</span>我算對了<small>思路清晰順暢</small>
          </button>
          <button type="button" class="fb slow ${isAnswered && ansRecord.result === 'slow' ? 'picked' : (isAnswered ? 'dim' : '')}" data-arena-fb="slow" ${isAnswered ? 'disabled' : ''}>
            <span class="emo">⏳</span>算對但想很久<small>需要加強熟練</small>
          </button>
          <button type="button" class="fb bad ${isAnswered && ansRecord.result === 'bad' ? 'picked' : (isAnswered ? 'dim' : '')}" data-arena-fb="bad" ${isAnswered ? 'disabled' : ''}>
            <span class="emo">❌</span>我有算錯<small>記進錯題本</small>
          </button>
        </div>
      </div>
    ` : `
      <div class="feedback arena-slow-bar">
        <span>若是「選對但算很久 / 猜中」，可手動標記熟練度：</span>
        <button type="button" class="btn btn-sm btn-ghost" id="btn-arena-mark-slow" ${(state.slowCounts[nq.id] || 0) > 0 ? 'disabled' : ''}>
          ${(state.slowCounts[nq.id] || 0) > 0 ? '✔ 已標記為想很久' : '⏳ 標記想很久'}
        </button>
      </div>
    `;

    const pct = total > 0 ? Math.round(((curIdx + 1) / total) * 100) : 0;

    return `
      <div class="view arena" id="view-arena" data-round-key="${escHtml(roundKey)}">
        <div class="quiz-head arena-head">
          <div class="quiz-nav-left">
            <button type="button" class="btn btn-ghost" id="btn-arena-home">← 結束回首頁</button>
            <button type="button" class="btn btn-ghost" id="btn-arena-reset-round" title="清空本輪進度重頭練（不刪歷史統計）">🔄 全部恢復未答</button>
          </div>
          <span class="crumb">${escHtml(unitObj.title)}${nq.sectionName ? ` · ${escHtml(nq.sectionName)}` : ''}</span>
          <div class="progress"><i style="width: ${pct}%"></i></div>
          <button type="button" class="count-badge-btn" id="btn-arena-drawer-toggle">第 ${curIdx + 1} / ${total} 題 ▾</button>
        </div>

        ${cascadeBarHtml}

        <div class="quiz-grid-drawer" id="arena-grid-drawer" style="display: none;">
          <div class="grid-drawer-head">
            <div class="drawer-legend-bar">
              <span class="leg-item"><b class="leg-dot ok"></b> 綠字=答對</span>
              <span class="leg-item"><b class="leg-dot bad"></b> 紅字=答錯</span>
              <span class="leg-item"><b class="leg-dot red-shade"></b> 淨錯熱力色階</span>
            </div>
            <button type="button" class="btn-close-drawer" id="btn-arena-drawer-close">✕</button>
          </div>
          <div class="drawer-q-grid">${buildHeatDrawerHtml(pool, state, curIdx)}</div>
        </div>

        ${isExamMode && !round.examSubmitted ? `
          <div class="arena-exam-banner card-surface">
            <div>
              <strong>📝 模擬考作答中</strong>
              <span class="muted">已暫存 ${answeredCount} / ${total} 題，作答期間不顯示答案，完卷後一次批改！</span>
            </div>
            <button type="button" class="btn btn-primary" id="btn-arena-submit-exam">📬 交卷批改 (${answeredCount}/${total})</button>
          </div>
        ` : ''}

        <article class="card-surface q-card arena-card">
          <div class="q-top-action-bar">
            <div class="q-tags">
              ${nq.school ? `<span class="tag school-tag">🏫 ${escHtml(nq.school)}</span>` : ''}
              <span class="tag">${escHtml(nq.batch)}</span>
              <span class="tag">${escHtml(nq.category)}</span>
              <span class="tag lv">L${nq.level} · ${diffStars}</span>
              <span class="tag">${escHtml(nq.source)}</span>
              ${nq.is4D ? `<span class="tag badge-4d">✨ 4D詳解</span>` : ''}
              ${isErr ? `<span class="tag bad">🔥 待消滅錯題</span>` : ''}
            </div>
            <div class="q-right-actions">
              ${(isAnswered && !isExamMode) ? `<button type="button" class="btn btn-sm btn-ghost" id="btn-arena-retry-this">🔄 重練本題</button>` : ''}
              ${hasImage ? `
                <button type="button" class="btn-crop-toggle ${isImgMode ? 'active' : ''}" id="btn-arena-crop-toggle">
                  ${isImgMode ? '📝 返回文字' : '📷 看考卷原圖'}
                </button>
              ` : ''}
            </div>
          </div>

          <div class="q-text arena-q-text" id="arena-q-content" style="${isImgMode ? 'display:none;' : ''}">${nq.questionHtml}</div>

          ${hasImage ? `
            <div class="crop-image-container" id="arena-crop-container" style="${isImgMode ? 'display:block;' : 'display:none;'}">
              <div class="crop-img-wrap" id="arena-crop-zoom">
                <img src="${escHtml(nq.cropImage || nq.examPageImage)}" alt="考卷原圖" class="exam-crop-img">
                <div class="crop-zoom-hint">🔍 點擊放大檢視</div>
              </div>
              ${nq.examPageImage && nq.cropImage ? `
                <div class="crop-footer-actions">
                  <button type="button" class="btn-view-page" id="btn-arena-full-page">📄 查看整頁原卷</button>
                </div>
              ` : ''}
            </div>
          ` : ''}

          ${nq.stemFigureHtml ? `<div class="q-figure">${nq.stemFigureHtml}</div>` : ''}

          ${optionsHtml}

          ${wrongTrapBannerHtml}

          ${showDiagnosis || (!nq.hasOptions && round.openRevealed && round.openRevealed[nq.id]) ? `
            <div class="answer arena-answer-4d" id="arena-answer-area">
              <div class="box final">
                <h4>🎯 正確答案</h4>
                <div class="ans">${nq.answerDisplayHtml}</div>
              </div>

              ${nq.examPurposeHtml ? `
                <div class="box purpose arena-d1">
                  <h4>🎯 維度一：考點與命題核心</h4>
                  <div>${nq.examPurposeHtml}</div>
                </div>
              ` : ''}

              ${nq.stepBlocksHtml.length > 0 ? `
                <div class="box steps arena-d2">
                  <h4>📐 維度二：小六無代數分步算理</h4>
                  <div class="km-steps-flow">
                    ${nq.stepBlocksHtml.map(s => s.html).join('')}
                  </div>
                </div>
              ` : ''}

              ${d3Html}
              ${d4Html}
              ${nq.insightHtml ? `
                <div class="box insight">
                  <h4>💡 秒殺直覺與數感要領</h4>
                  <div>${nq.insightHtml}</div>
                </div>
              ` : ''}
              ${extHtml}
              ${legacySelfGradeHtml}
            </div>
          ` : ''}

          <div class="quiz-bottom-nav">
            <button type="button" class="btn btn-ghost btn-lg" id="btn-arena-prev" ${curIdx === 0 ? 'disabled' : ''}>⏮️ 上一題</button>
            <button type="button" class="btn btn-ghost btn-lg btn-jump-drawer" id="btn-arena-drawer-bottom">🔢 題號跳轉</button>
            <button type="button" class="btn ${(isAnswered || isExamMode) ? 'btn-primary' : 'btn-secondary'} btn-lg" id="btn-arena-next">
              ${curIdx >= total - 1 ? (isExamMode && !round.examSubmitted ? '檢查完畢／準備交卷 📬' : '完成本輪結算 🏁') : (isAnswered || examDraft ? '下一題 →' : '跳至下一題 ❯')}
            </button>
          </div>
        </article>
      </div>
    `;
  }

  /**
   * 產生 A4 列印考卷 HTML（支援 'student' 學生空白卷 與 'teacher' 家長詳解卷）
   * 學生空白卷嚴格確保零答案與零詳解外洩。
   */
  function buildPaperSheetHtml(selectedQuestions, opts) {
    const o = opts || {};
    const printMode = o.printMode === 'teacher' ? 'teacher' : 'student';
    const curUser = o.curUser || { name: 'Rex' };
    const workSizeFallback = o.workSize || 'md';
    const qrSvg = o.qrSvg || '';
    const hasErrorBook = !!o.hasErrorBook;
    const mainTitle = o.mainTitle || '翰林版國小六上數學 特訓測驗卷';
    const km = o.kidsMath || (typeof root !== 'undefined' && root.KidsMath) || null;
    const fmt = o.formatMathForKids || defaultFormatMathForKids;
    const isTeacher = printMode === 'teacher';

    const questionsHtml = (selectedQuestions || []).map((q, idx) => {
      const nq = normalizeQuestion(q, { kidsMath: km, formatMathForKids: fmt });
      const workClass = nq.work || workSizeFallback;
      const isSpecificCrop = q.cropImage && !/_p\d+\.png$/i.test(q.cropImage);
      const figHtml = nq.stemFigureHtml
        ? `<div class="pq-fig">${nq.stemFigureHtml}</div>`
        : (isSpecificCrop ? `<div class="pq-fig"><img src="${escHtml(q.cropImage)}" alt="考卷題圖" style="max-width:140mm; max-height:55mm; object-fit:contain;"></div>` : '');

      const optionsHtml = nq.hasOptions ? `
        <div class="pq-options">
          ${nq.options.map(opt => `<div><b>(${opt.key})</b> ${opt.html}</div>`).join('')}
        </div>
      ` : '';

      let teacherKeyHtml = '';
      if (isTeacher) {
        const wrongBreakdown = nq.is4D && nq.distractorAnalysis
          ? nq.options.filter(x => x.key !== nq.answerKey).map(x => `<li><b>(${x.key}) [${escHtml(x.trapCode || '')}]</b> ${renderTextSafe(nq.distractorAnalysis[x.key] || '', true, km, fmt)}</li>`).join('')
          : (nq.primaryTrap ? `<li><b>${nq.primaryTrap.code ? `[${escHtml(nq.primaryTrap.code)}] ` : ''}</b>${nq.primaryTrap.text}</li>` : '');

        teacherKeyHtml = `
          <div class="pq-teacher-key">
            <div class="pq-key-ans">✅ 正解：${nq.answerDisplayHtml}</div>
            ${nq.examPurposeHtml ? `<div class="pq-key-purpose"><b>🎯 考點：</b>${nq.examPurposeHtml}</div>` : ''}
            ${nq.stepBlocksHtml.length > 0 ? `
              <div class="pq-key-steps">
                <b>📐 詳解步驟：</b>
                <div class="km-steps-flow pq-print-flow">${nq.stepBlocksHtml.map(s => s.html).join('')}</div>
              </div>
            ` : ''}
            ${wrongBreakdown ? `<ul class="pq-key-traps"><b>⚠️ 陷阱剖析：</b>${wrongBreakdown}</ul>` : ''}
            ${nq.figureNoteHtml && !nq.solutionFigureHtml ? `<div class="pq-key-note"><b>📊 圖解定位：</b>${nq.figureNoteHtml}</div>` : ''}
            ${nq.insightHtml ? `<div class="pq-key-insight"><b>💡 速解口訣：</b>${nq.insightHtml}</div>` : ''}
          </div>
        `;
      }

      return `
        <div class="pq ${isTeacher ? 'pq-teacher-item' : ''}" data-qid="${escHtml(nq.id)}">
          <div class="pq-title">
            <span class="pq-no">${idx + 1}.</span>
            <div style="flex: 1">${nq.questionHtml}</div>
          </div>
          ${optionsHtml}
          ${figHtml}
          ${!isTeacher ? `<div class="work-grid ${workClass}" title="5mm 手寫草稿格"></div><div class="pq-ans">答：<i></i></div>` : teacherKeyHtml}
        </div>
      `;
    }).join('');

    const badgeTitle = isTeacher ? `${mainTitle} 【🔑 家長詳解卷】` : mainTitle;
    return `
      <article class="paper ${isTeacher ? 'paper-teacher' : 'paper-student'}" data-print-mode="${printMode}">
        <header class="paper-head">
          <div>
            <h2>${escHtml(badgeTitle)}</h2>
            <div class="sub">${isTeacher ? `教師與家長專用解答本 · 共 ${selectedQuestions.length} 題（含線段圖、直式步驟與盲點診斷）` : '得分：________　作答時間：___ 分 ___ 秒'}</div>
            <div class="paper-fields">
              <span>班級：<i></i></span>
              <span>座號：<i></i></span>
              <span>姓名：<i style="font-style: normal; font-weight: 800; text-align: center; padding: 0 4px;">${escHtml(curUser.name)}</i></span>
              <span>日期：<i></i></span>
            </div>
          </div>
          <div class="paper-qr">
            ${qrSvg}
            <div>📱 掃碼線上對答案 (${escHtml(curUser.name)}${hasErrorBook ? ' · 錯題消滅' : ''})</div>
          </div>
        </header>

        <section class="paper-body">
          ${questionsHtml}
        </section>

        <footer class="paper-foot">
          六上數學特訓 · ${isTeacher ? '家長指導備忘：引導孩子先畫線段圖定出基準量（1 份）再列式' : '題目完成後請掃描右上角 QR Code 進行即時對答案與思路診斷'}
        </footer>
      </article>
    `;
  }

  function computeCloudActivityCount(snap) {
    if (!snap || typeof snap !== 'object') return 0;
    const histLen = Array.isArray(snap.fullHistory) ? snap.fullHistory.length : 0;
    const errBookLen = Array.isArray(snap.errorBook) ? snap.errorBook.length : 0;
    const okKeys = snap.successCounts && typeof snap.successCounts === 'object' ? Object.keys(snap.successCounts).length : 0;
    const errKeys = snap.errorCounts && typeof snap.errorCounts === 'object' ? Object.keys(snap.errorCounts).length : 0;
    const slowKeys = snap.slowCounts && typeof snap.slowCounts === 'object' ? Object.keys(snap.slowCounts).length : 0;
    return histLen + errBookLen + okKeys + errKeys + slowKeys;
  }

  function clonePlainObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return {};
    return Object.assign({}, obj);
  }

  /**
   * 建構純淨雲端同步 Payload（嚴格剔除本機暫存 arenaRounds / arenaFilter / printSelectionIds）
   */
  function buildCloudPayload(stateObj, opts) {
    const s = stateObj || {};
    const o = opts || {};
    const payload = {
      userId: o.userId || s.currentUser || 'rex',
      updatedAt: Number(o.updatedAt != null ? o.updatedAt : s.updatedAt) || Date.now(),
      errorBook: Array.isArray(s.errorBook) ? [...s.errorBook] : [],
      errorCounts: clonePlainObject(s.errorCounts),
      successCounts: clonePlainObject(s.successCounts),
      slowCounts: clonePlainObject(s.slowCounts),
      fullHistory: Array.isArray(s.fullHistory) ? s.fullHistory.map(h => Object.assign({}, h)) : [],
      selectedBatches: Array.isArray(s.selectedBatches) && s.selectedBatches.length > 0
        ? [...s.selectedBatches]
        : ['課本原型題', '奧數天梯', '純腦力體操', '段考真題'],
      unitProgress: clonePlainObject(s.unitProgress),
    };
    if (s.u05LegacyBackup && typeof s.u05LegacyBackup === 'object') {
      payload.u05LegacyBackup = JSON.parse(JSON.stringify(s.u05LegacyBackup));
    }
    if (o.resetAt) {
      payload.resetAt = Number(o.resetAt) || payload.updatedAt;
    }
    return payload;
  }

  /**
   * 清洗並自動遷移雲端下載的帳號資料（含舊 u05_* ID 無損轉移）
   */
  function sanitizeAndMigrateCloudUser(cloudData, questionBank) {
    if (!cloudData || typeof cloudData !== 'object') {
      return { data: null, migratedCount: 0 };
    }
    const clean = {
      userId: cloudData.userId || '',
      updatedAt: Number(cloudData.updatedAt) || 0,
      resetAt: Number(cloudData.resetAt) || 0,
      errorBook: Array.isArray(cloudData.errorBook) ? [...cloudData.errorBook] : [],
      errorCounts: clonePlainObject(cloudData.errorCounts),
      successCounts: clonePlainObject(cloudData.successCounts),
      slowCounts: clonePlainObject(cloudData.slowCounts),
      fullHistory: Array.isArray(cloudData.fullHistory) ? cloudData.fullHistory.map(h => Object.assign({}, h)) : [],
      selectedBatches: Array.isArray(cloudData.selectedBatches) && cloudData.selectedBatches.length > 0
        ? [...cloudData.selectedBatches]
        : null,
      unitProgress: clonePlainObject(cloudData.unitProgress),
      u05LegacyBackup: cloudData.u05LegacyBackup && typeof cloudData.u05LegacyBackup === 'object'
        ? JSON.parse(JSON.stringify(cloudData.u05LegacyBackup))
        : null,
    };
    const mig = migrateLegacyIdsInState(clean, questionBank || []);
    return { data: clean, migratedCount: mig.migratedCount || 0 };
  }

  /**
   * 雲端同步仲裁守衛：
   * 1. 空本機裝置絕對禁止覆蓋已populated雲端（即便本機不小心產生新時間戳）
   * 2. 支援測試帳號遠端 resetAt 同步歸零
   * 3. 兩邊皆有紀錄時依較新時間戳決定 pull / push / noop
   */
  function decideCloudSyncAction(localSnap, cloudSnap) {
    const localActivity = computeCloudActivityCount(localSnap);
    const localUpdated = Number(localSnap && localSnap.updatedAt) || 0;

    if (!cloudSnap || typeof cloudSnap !== 'object') {
      return localActivity > 0
        ? { action: 'push', reason: 'init_cloud' }
        : { action: 'noop', reason: 'both_empty' };
    }

    const cloudActivity = computeCloudActivityCount(cloudSnap);
    const cloudUpdated = Number(cloudSnap.updatedAt) || 0;
    const cloudResetAt = Number(cloudSnap.resetAt) || 0;

    if (localActivity === 0 && cloudActivity > 0) {
      return { action: 'pull', reason: 'guard_empty_local' };
    }
    if (cloudActivity === 0 && localActivity > 0 && cloudResetAt > localUpdated) {
      return { action: 'pull', reason: 'remote_reset' };
    }
    if (localActivity === 0 && cloudActivity === 0) {
      return { action: 'noop', reason: 'both_empty' };
    }
    if (cloudActivity === 0 && localActivity > 0) {
      return { action: 'push', reason: 'local_populated_cloud_empty' };
    }
    if (cloudUpdated > localUpdated) {
      return { action: 'pull', reason: 'cloud_newer' };
    }
    if (localUpdated > cloudUpdated) {
      return { action: 'push', reason: 'local_newer' };
    }
    return { action: 'noop', reason: 'in_sync' };
  }

  const api = {
    TRAP_LABEL_MAP,
    getTrapLabel,
    getDifficultyBand,
    normalizeQuestion,
    buildLegacyIdMap,
    migrateLegacyIdsInState,
    filterArenaPool,
    getCascadeStats,
    renderArenaHtml,
    buildPaperSheetHtml,
    computeCloudActivityCount,
    buildCloudPayload,
    sanitizeAndMigrateCloudUser,
    decideCloudSyncAction,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.MathArena = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
