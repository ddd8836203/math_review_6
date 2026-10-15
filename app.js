/* =========================================================
   六上數學特訓 — 應用程式核心 (app.js)
   ========================================================= */

(function () {
  'use strict';

  // -------------------------------------------------------
  // 全域狀態
  // -------------------------------------------------------
  const state = {
    view: 'dashboard', // 'dashboard' | 'quiz' | 'result' | 'error_book' | 'print'
    selectedBatches: ['課本原型題', '奧數天梯', '純腦力體操'], // 預設篩選
    currentUnitId: null,
    quizMode: 'unit', // 'unit' | 'error_book' | 'mixed'
    quizQuestions: [],
    quizIndex: 0,
    sessionAnswers: [], // { qId, result: 'ok'|'slow'|'bad', time }
    errorBook: [], // [ qId, ... ]
    errorCounts: {}, // { [qId]: count }
    successCounts: {}, // { [qId]: count }
    slowCounts: {}, // { [qId]: count }
    fullHistory: [], // [ session, ... ]
    printConfig: {
      unitIds: ['U01'],
      count: 6,
      workSize: 'md', // 'sm' | 'md' | 'lg'
      includeInsight: false,
      batches: ['課本原型題', '奧數天梯'],
    },
  };

  // -------------------------------------------------------
  // 本地儲存 (LocalStorage)
  // -------------------------------------------------------
  const STORAGE_KEYS = {
    errorBook: 'g6_math_error_book',
    errorCounts: 'g6_math_error_counts',
    successCounts: 'g6_math_success_counts',
    slowCounts: 'g6_math_slow_counts',
    history: 'g6_math_full_history',
    batches: 'g6_math_selected_batches',
  };

  function loadState() {
    try {
      const eb = localStorage.getItem(STORAGE_KEYS.errorBook);
      if (eb) state.errorBook = JSON.parse(eb);
      const ec = localStorage.getItem(STORAGE_KEYS.errorCounts);
      if (ec) state.errorCounts = JSON.parse(ec);
      const sc = localStorage.getItem(STORAGE_KEYS.successCounts);
      if (sc) state.successCounts = JSON.parse(sc);
      const sl = localStorage.getItem(STORAGE_KEYS.slowCounts);
      if (sl) state.slowCounts = JSON.parse(sl);
      const fh = localStorage.getItem(STORAGE_KEYS.history);
      if (fh) state.fullHistory = JSON.parse(fh);
      const sb = localStorage.getItem(STORAGE_KEYS.batches);
      if (sb) {
        state.selectedBatches = JSON.parse(sb);
        if (!state.selectedBatches.includes('純腦力體操')) {
          state.selectedBatches.push('純腦力體操');
        }
      } else {
        state.selectedBatches = ['課本原型題', '奧數天梯', '純腦力體操'];
      }
    } catch (e) {
      console.warn('LocalStorage 載入失敗：', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEYS.errorBook, JSON.stringify(state.errorBook));
      localStorage.setItem(STORAGE_KEYS.errorCounts, JSON.stringify(state.errorCounts));
      localStorage.setItem(STORAGE_KEYS.successCounts, JSON.stringify(state.successCounts));
      localStorage.setItem(STORAGE_KEYS.slowCounts, JSON.stringify(state.slowCounts));
      localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.fullHistory));
      localStorage.setItem(STORAGE_KEYS.batches, JSON.stringify(state.selectedBatches));
    } catch (e) {
      console.warn('LocalStorage 儲存失敗：', e);
    }
    updateNavBadge();
  }

  // -------------------------------------------------------
  // KaTeX 數學渲染與 QR Code
  // -------------------------------------------------------
  function renderMath(targetEl) {
    if (window.renderMathInElement) {
      window.renderMathInElement(targetEl, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
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
  // 導航列更新
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
      const icon = b === '純腦力體操' ? '🧠 ' : b === '奧數天梯' ? '🪜 ' : '📖 ';
      return `<button type="button" class="chip ${on ? 'on' : ''}" data-batch="${b}"><span class="dot"></span>${icon}${b}</button>`;
    }).join('');

    const unitCardsHtml = UNITS.map(u => {
      const st = getUnitStats(u.id);
      const isLocked = st.total === 0;
      const isMentalActive = state.selectedBatches.length === 1 && state.selectedBatches[0] === '純腦力體操';
      return `
        <article class="unit-card ${isLocked ? 'locked' : ''}" style="--hue: ${u.hue}">
          <span class="u-no">UNIT ${String(u.no).padStart(2, '0')} · ${u.pages}</span>
          <h3>第 ${u.no} 單元 ${u.title}</h3>
          <div class="progress" title="掌握度 ${st.pct}%"><i style="width: ${st.pct}%"></i></div>
          <div class="u-meta">
            <span class="tag ${st.pct === 100 ? 'ok' : ''}">掌握 ${st.pct}%</span>
            ${st.errCount > 0 ? `<span class="tag bad">🔥 ${st.errCount} 題待消滅</span>` : ''}
            <span class="tag lv">${st.hasMental ? `⭐ 10★天梯` : `天梯 L${st.maxLevel}`}</span>
            <span class="tag">${st.total} 題</span>
          </div>
          <div class="u-actions">
            <button class="btn btn-primary" data-start-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
              ${st.errCount > 0 ? '消滅錯題' : (isMentalActive ? '🧠 開始體操' : '開始特訓')}
            </button>
            <button class="btn btn-ghost" data-print-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
              A4 出卷
            </button>
          </div>
        </article>
      `;
    }).join('');

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view dashboard">
        <section class="glass hero">
          <div>
            <h2>六上數學特訓 <span class="grad">奧數能力天梯</span></h2>
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
              ${UNITS.map(u => `<option value="${u.id}">第 ${u.no} 單元：${u.title} (20題)</option>`).join('')}
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
          <span class="muted">翰林版第十一冊 · 全 8 單元</span>
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
        startQuiz('unit', uId);
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
  }

  // -------------------------------------------------------
  // 視圖渲染器：2. 測驗與對答案 (Quiz View)
  // -------------------------------------------------------
  function startQuiz(mode, unitId = null) {
    state.quizMode = mode;
    state.currentUnitId = unitId;
    state.quizIndex = 0;
    state.sessionAnswers = [];

    let pool = [];
    if (mode === 'unit') {
      pool = QUESTION_BANK.filter(q => q.unitId === unitId);
      pool = filterQuestionsByBatches(pool);

      // 若當前題目全部是「純腦力體操」，嚴格按 1 顆星到 10 顆星由易到難升級排序！
      const isMentalOnly = pool.length > 0 && pool.every(q => q.batch === '純腦力體操');
      if (isMentalOnly) {
        pool.sort((a, b) => (a.stars || a.level || 1) - (b.stars || b.level || 1));
      } else {
        // 若該單元有錯題，錯題排在最前面優先複習
        const errs = pool.filter(q => state.errorBook.includes(q.id));
        const normals = pool.filter(q => !state.errorBook.includes(q.id));
        pool = [...shuffle(errs), ...shuffle(normals)];
      }
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
        showToast('目前沒有符合條件的題目喔！');
      }
      return;
    }

    state.quizQuestions = pool;
    state.view = 'quiz';
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    if (state.quizIndex >= state.quizQuestions.length) {
      finishQuiz();
      return;
    }

    const q = state.quizQuestions[state.quizIndex];
    const total = state.quizQuestions.length;
    const cur = state.quizIndex + 1;
    const pct = Math.round((cur / total) * 100);

    const unitObj = UNITS.find(u => u.id === q.unitId) || { title: '綜合特訓' };
    const isMental = q.batch === '純腦力體操' || (q.options && q.options.length > 0);
    const starNum = q.stars || q.level || 1;
    const starsHtml = isMental
      ? `<span class="tag star-badge">⭐ ${starNum} 顆星天梯</span>`
      : '★'.repeat(q.difficulty || 2) + '☆'.repeat(Math.max(0, 5 - (q.difficulty || 2)));
    const isError = state.errorBook.includes(q.id);

    // 檢查本題是否在當前場次中已被作答過（回頭看上一題情況）
    const existingAnswer = state.sessionAnswers.find(a => a.qId === q.id);
    const isAnswered = !!existingAnswer;

    const hasOptions = Array.isArray(q.options) && q.options.length > 0;
    const correctKey = (q.answerKey || q.answer.trim().charAt(0)).toUpperCase();
    let answerDisplay = q.answer;
    if (hasOptions) {
      const optIdx = ['A', 'B', 'C', 'D'].indexOf(correctKey);
      if (optIdx >= 0 && q.options[optIdx]) {
        const cleanOpt = q.options[optIdx].replace(/^[A-D]\.\s*/, '');
        answerDisplay = `${correctKey} · ${cleanOpt}`;
      }
    }

    const optionsHtml = hasOptions ? `
      <div class="options-grid" id="options-grid">
        ${q.options.map((opt, i) => {
          const letter = ['A', 'B', 'C', 'D'][i] || String(i + 1);
          const cleanText = opt.replace(/^[A-D]\.\s*/, '');
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

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view quiz">
        <div class="quiz-head">
          <div class="quiz-nav-left">
            <button class="btn btn-ghost" id="btn-back-dash" title="離開測驗">← 結束測驗</button>
            ${state.quizIndex > 0 ? `<button class="btn btn-ghost" id="btn-prev-q" title="回頭看上一題答題狀況">⏮️ 上一題</button>` : ''}
          </div>
          <span class="crumb">${unitObj.title} · 第 ${cur} 題</span>
          <div class="progress"><i style="width: ${pct}%"></i></div>
          <span class="count">${cur} / ${total}</span>
        </div>

        <article class="glass q-card">
          <div class="q-tags">
            <span class="tag">${q.category || '觀念綜合'}</span>
            <span class="tag lv">${isMental ? `純腦力 ${starNum}★` : `天梯 Level ${q.level || 1}`}</span>
            ${starsHtml}
            <span class="tag">${q.source || ''}</span>
            ${isError ? `<span class="tag bad">🔥 錯題待消滅</span>` : ''}
          </div>

          <div class="q-text" id="q-content">${q.question}</div>

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
                <h4>💡 ${isMental ? '純腦力秒殺思維（為什麼完全不用拿筆算）' : '奧數秒殺思維（競賽直矩）'}</h4>
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

            <div class="next-row" id="next-row" style="${isAnswered ? 'display: block;' : 'display: none;'}">
              <div style="display: flex; gap: 12px; align-items: center;">
                ${state.quizIndex > 0 ? `<button class="btn btn-ghost btn-lg" id="btn-prev-q-bottom" style="flex: 1;">⏮️ 上一題</button>` : ''}
                <button class="btn btn-primary btn-lg" id="btn-next-q" style="flex: ${state.quizIndex > 0 ? '2' : '1'};">
                  ${cur === total ? '完成測驗並結算 🏁' : '進入下一題 →'}
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;

    renderMath(app);

    // 綁定中斷/離開按鈕
    document.getElementById('btn-back-dash').addEventListener('click', () => {
      if (confirm('確定要中斷測驗嗎？已作答的紀錄將會保存。')) {
        finishQuiz();
      }
    });

    // 綁定「上一題」按鈕（頂部與底部）
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
            document.getElementById('next-row').style.display = 'block';
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

            const nextRow = document.getElementById('next-row');
            nextRow.style.display = 'block';
            nextRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        });
      }
    }

    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextBtn.disabled = true;
        state.quizIndex++;
        renderQuizQuestion();
      });
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
      state.view = 'dashboard';
      renderDashboardView();
      return;
    }

    const total = state.sessionAnswers.length;
    const okCnt = state.sessionAnswers.filter(a => a.result === 'ok').length;
    const slowCnt = state.sessionAnswers.filter(a => a.result === 'slow').length;
    const badCnt = state.sessionAnswers.filter(a => a.result === 'bad').length;
    const score = Math.round((okCnt / total) * 100);

    const sessionRecord = {
      date: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
      mode: state.quizMode,
      unitId: state.currentUnitId,
      total,
      okCnt,
      slowCnt,
      badCnt,
      score,
      answers: [...state.sessionAnswers],
    };

    state.fullHistory.push(sessionRecord);
    saveState();

    const reviewItemsHtml = state.sessionAnswers.map((ans, idx) => {
      const q = QUESTION_BANK.find(x => x.id === (ans.qId || ans.id));
      if (!q) return '';
      const u = UNITS.find(x => x.id === q.unitId) || { title: '綜合特訓' };
      const isMental = q.batch === '純腦力體操' || (q.options && q.options.length > 0);
      const isCorrect = ans.result === 'ok';
      const isSlow = ans.result === 'slow';

      const statusTag = isCorrect
        ? '<span class="tag ok">✅ 答對秒殺</span>'
        : isSlow
        ? '<span class="tag" style="background:#eef2ff; color:#3730a3; font-weight:700;">⏳ 算對想很久</span>'
        : '<span class="tag bad">❌ 答錯入庫</span>';

      let choiceHtml = '';
      if (q.options && q.options.length > 0) {
        const userKey = (ans.userChoice || '').toUpperCase();
        const optIdx = ['A', 'B', 'C', 'D'].indexOf(userKey);
        const userOptText = optIdx >= 0 && q.options[optIdx] ? q.options[optIdx].replace(/^[A-D]\.\s*/, '') : (ans.userChoice || '未作答');

        const correctKey = (q.answerKey || q.answer.trim().charAt(0)).toUpperCase();
        const corIdx = ['A', 'B', 'C', 'D'].indexOf(correctKey);
        const corOptText = corIdx >= 0 && q.options[corIdx] ? q.options[corIdx].replace(/^[A-D]\.\s*/, '') : q.answer;

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
        <div class="review-item ${ans.result}">
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
          <p class="muted">${state.sessionAnswers.some(a => { const q = QUESTION_BANK.find(x => x.id === (a.qId || a.id)); return q && q.batch === '純腦力體操'; }) ? `完成 ${total} 題早餐純腦力思維天梯挑戰` : `完成 ${total} 題紙筆計算特訓`}</p>

          <div class="result-bars">
            <div class="stat ok"><b>${okCnt}</b><span>秒殺熟練</span></div>
            <div class="stat pri"><b>${slowCnt}</b><span>想很久</span></div>
            <div class="stat bad"><b>${badCnt}</b><span>答錯進錯題</span></div>
          </div>

          <div class="result-actions">
            <button class="btn btn-primary btn-lg" id="btn-restart-unit">再練一次</button>
            ${state.errorBook.length > 0 ? `<button class="btn btn-ghost btn-lg" id="btn-goto-errors">查看錯題本 (${state.errorBook.length})</button>` : ''}
            <button class="btn btn-ghost btn-lg" id="btn-res-home">返回首頁</button>
          </div>

          <div class="review-section">
            <div class="review-header-bar">
              <h3>📋 本次測驗答題明細回顧 (${total} 題)</h3>
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
        return `<button class="chip ${filterUnit === u.id ? 'on' : ''}" data-filter-unit="${u.id}">第${u.no}單元 (${cnt})</button>`;
      })
    ].join('');

    const listHtml = displayed.length > 0 ? displayed.map(q => {
      const u = UNITS.find(x => x.id === q.unitId) || {};
      const ec = state.errorCounts[q.id] || 1;
      return `
        <div class="err-item">
          <div>
            <div class="q-mini">${q.question}</div>
            <div class="meta">
              <span class="tag">第 ${u.no} 單元 ${u.title}</span>
              <span class="tag">${q.category}</span>
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

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="view error-book">
        <div class="section-title">
          <h2>🔥 終身錯題本</h2>
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
      return `
        <label>
          <input type="checkbox" value="${u.id}" ${chk} data-print-unit-toggle>
          <span>第 ${u.no} 單元 ${u.title}</span>
        </label>
      `;
    }).join('');

    const printBatches = state.printConfig.batches || ['課本原型題', '奧數天梯'];
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
          state.printConfig.batches = ['課本原型題', '奧數天梯'];
        } else if (mode === 'mental') {
          state.printConfig.batches = ['純腦力體操'];
        } else {
          state.printConfig.batches = ['課本原型題', '奧數天梯', '純腦力體操'];
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
    const pBatches = state.printConfig.batches || ['課本原型題', '奧數天梯'];
    pool = pool.filter(q => pBatches.includes(q.batch || '課本原型題'));
    if (pool.length === 0) {
      pool = QUESTION_BANK.filter(q => state.printConfig.unitIds.includes(q.unitId));
    }
    const selected = shuffle(pool).slice(0, state.printConfig.count);

    // 依題目 ID 組裝 QR Code 網址，支援直接在 iPad 掃描對答案
    const qIds = selected.map(q => q.id).join(',');
    const checkUrl = `${window.location.origin}${window.location.pathname}?quiz_ids=${encodeURIComponent(qIds)}`;
    const qrSvg = makeQRCode(checkUrl);

    const titleUnits = state.printConfig.unitIds.map(uId => {
      const u = UNITS.find(x => x.id === uId);
      return u ? `第${u.no}單元` : '';
    }).join('、');

    const questionsHtml = selected.map((q, idx) => {
      const workClass = q.work || state.printConfig.workSize;
      const isMentalQ = q.batch === '純腦力體操' || (q.options && q.options.length > 0);
      return `
        <div class="pq">
          <div class="pq-title">
            <span class="pq-no">${idx + 1}.</span>
            <div style="flex: 1">${q.question}</div>
          </div>
          ${q.options && q.options.length > 0 ? `
            <div class="pq-options" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 16px; margin: 8px 0 12px; font-size: 14px; font-weight: 600;">
              ${q.options.map((opt, i) => {
                const letter = ['(A)', '(B)', '(C)', '(D)'][i] || `(${i+1})`;
                const clean = opt.replace(/^[A-D]\.\s*/, '');
                return `<div><b>${letter}</b> ${clean}</div>`;
              }).join('')}
            </div>
          ` : ''}
          ${q.svg ? `<div class="pq-fig">${q.svg}</div>` : ''}
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
              <span>姓名：<i></i></span>
              <span>日期：<i></i></span>
            </div>
          </div>
          <div class="paper-qr">
            ${qrSvg}
            <div>📱 掃碼線上對答案</div>
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
    const errorQuestions = QUESTION_BANK.filter(q => state.errorBook.includes(q.id));
    const allAnswers = state.fullHistory.flatMap(h => h.answers || []);
    const dateStr = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

    let md = `# [System Prompt] 國小六年級數學資優教研出題指令

你是一位「國小數學資優培訓與奧數教研專家」。這是學生最近在「六上數學特訓網」的手寫作答與三態自評紀錄。
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
# 📖 六上數學特訓 — 學生歷史作答與錯題總表
匯出時間：${dateStr}
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
    a.href = url;
    a.download = `六上數學特訓紀錄_AI派題_${fDate}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('已匯出 AI 診斷 Prompt Markdown！');
  }

  // -------------------------------------------------------
  // URL 參數深度連結（支援 QR Code 掃描直接對答案）
  // -------------------------------------------------------
  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const quizIds = params.get('quiz_ids');
    if (quizIds) {
      const ids = quizIds.split(',');
      const selected = QUESTION_BANK.filter(q => ids.includes(q.id));
      if (selected.length > 0) {
        state.quizQuestions = selected;
        state.quizIndex = 0;
        state.quizMode = 'mixed';
        state.sessionAnswers = [];
        state.view = 'quiz';
        renderQuizQuestion();
        showToast('已由考卷 QR Code 載入對應題目！');
        return true;
      }
    }
    return false;
  }

  // -------------------------------------------------------
  // 初始化與事件監聽
  // -------------------------------------------------------
  function init() {
    loadState();
    updateNavBadge();

    // 導航列按鈕
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
