/* =========================================================
   六上數學特訓 — Web Audio 合成音效引擎 (sound.js)
   Phase P10: 零外部音訊檔案、iPad/iPhone 首次觸控自動解鎖
   ========================================================= */

(function (root) {
  'use strict';

  const SOUND_KEY = 'g6_math_sound_enabled';
  let ctx = null;
  let enabled = true;

  try {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(SOUND_KEY) : null;
    if (saved === '0') enabled = false;
  } catch (e) {
    enabled = true;
  }

  function ensureContext() {
    if (!enabled) return null;
    if (typeof window === 'undefined') return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!ctx) {
      try {
        ctx = new AudioCtx();
      } catch (e) {
        return null;
      }
    }
    if (ctx.state === 'suspended' && typeof ctx.resume === 'function') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function unlockAudio() {
    if (!enabled) return;
    ensureContext();
  }

  if (typeof window !== 'undefined') {
    ['pointerdown', 'touchstart', 'keydown'].forEach(ev => {
      window.addEventListener(ev, unlockAudio, { once: true, passive: true });
    });
  }

  function playTone(freq, startOffset, duration, type = 'sine', peakGain = 0.14) {
    const c = ensureContext();
    if (!c) return;
    try {
      const now = c.currentTime + startOffset;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peakGain, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(now);
      osc.stop(now + duration + 0.02);
    } catch (e) {
      // ignore sandbox/autoplay edge errors
    }
  }

  function ok() {
    // 明亮上揚三連音 C5 - E5 - G5
    playTone(523.25, 0.00, 0.11, 'triangle', 0.15);
    playTone(659.25, 0.08, 0.12, 'triangle', 0.16);
    playTone(783.99, 0.16, 0.22, 'sine', 0.17);
  }

  function bad() {
    // 溫和提示音 E3 - C3（不刺耳的提醒聲）
    playTone(220.00, 0.00, 0.14, 'sine', 0.12);
    playTone(174.61, 0.12, 0.24, 'sine', 0.12);
  }

  function slow() {
    // 沉穩思考提醒音 G4 - D5
    playTone(392.00, 0.00, 0.12, 'sine', 0.11);
    playTone(587.33, 0.10, 0.18, 'sine', 0.11);
  }

  function click() {
    playTone(640, 0.00, 0.045, 'triangle', 0.06);
  }

  function fanfare() {
    // 結算勝利琶音 C5 - E5 - G5 - C6
    playTone(523.25, 0.00, 0.12, 'triangle', 0.14);
    playTone(659.25, 0.10, 0.12, 'triangle', 0.15);
    playTone(783.99, 0.20, 0.12, 'triangle', 0.16);
    playTone(1046.50, 0.30, 0.38, 'sine', 0.18);
  }

  function isEnabled() {
    return enabled;
  }

  function setEnabled(val) {
    enabled = !!val;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(SOUND_KEY, enabled ? '1' : '0');
      }
    } catch (e) {
      // ignore storage errors
    }
    if (enabled) {
      ensureContext();
      click();
    }
    return enabled;
  }

  function toggle() {
    return setEnabled(!enabled);
  }

  const api = { ok, bad, slow, click, fanfare, isEnabled, setEnabled, toggle, ensureContext };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.MathSound = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
