/**
 * Kids Math Rendering Engine (小學六年級自然數學引擎)
 * Zero floating-point arithmetic, zero KaTeX dependency for U05:
 * - Stacked fractions (3/4, 1 3/4) in text & eq expressions (never shows slashes on UI)
 * - Long division (longdiv): exact, rounding, remainder (original dot alignment + shift cue)
 * - Vertical multiplication (mul): partial products + decimal count cue
 * - Vertical add/sub (addsub): decimal-aligned column grid
 * - Bar diagram (bar SVG): base/compare units, fractional tail, sum/diff braces
 */
(function (root) {
  function escHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderFractionHtml(whole, num, den) {
    const fracHtml =
      `<span class="km-frac" aria-label="${whole ? whole + '又' : ''}${num}分之${den}">` +
      `<span class="km-num">${num}</span>` +
      `<span class="km-bar"></span>` +
      `<span class="km-den">${den}</span>` +
      `</span>`;
    if (whole !== null && whole !== undefined && whole !== '') {
      return `<span class="km-mixed"><span class="km-whole">${whole}</span>${fracHtml}</span>`;
    }
    return fracHtml;
  }

  /**
   * Renders student-facing plain text OR eq expression into safe HTML:
   * converts w a/b mixed fractions and a/b fractions into stacked HTML fractions,
   * and wraps unknown box □ cleanly. Zero slashes escape onto the screen.
   */
  function renderKidsText(text) {
    if (text == null) return '';
    let s = escHtml(String(text));
    // Mixed fraction: boundary + digits + space(s) + num/den (avoid merging date/code tokens)
    s = s.replace(/(?<![\dA-Za-z./])(\d+)\s+(\d+)\/(\d+)(?![\dA-Za-z./])/g, (_, w, n, d) =>
      renderFractionHtml(w, n, d)
    );
    // Simple fraction: digits/digits not inside tags
    s = s.replace(/(?<![\dA-Za-z./])(\d+)\/(\d+)(?![\dA-Za-z./])/g, (_, n, d) =>
      renderFractionHtml('', n, d)
    );
    // Unknown box □
    s = s.replace(/□/g, '<span class="km-box" aria-label="未知數框框">□</span>');
    return s;
  }

  function renderKidsExpr(expr, unit) {
    const body = renderKidsText(expr);
    const unitHtml = unit ? ` <span class="km-unit">${escHtml(unit)}</span>` : '';
    return `<span class="km-eq">${body}${unitHtml}</span>`;
  }

  // ---------------------------------------------------------------------------
  // Decimal String Decomposition (Exact Digit Array — Zero Float)
  // ---------------------------------------------------------------------------
  function parseDecimalDigits(str) {
    const clean = String(str).trim().replace(/,/g, '');
    if (!/^\d+(?:\.\d+)?$/.test(clean)) {
      throw new Error(`Invalid non-negative decimal string: "${str}"`);
    }
    const parts = clean.split('.');
    const intPart = parts[0].replace(/^0+(?=\d)/, '');
    const fracPart = parts[1] || '';
    const digits = (intPart + fracPart).split('').map(Number);
    // dotAfterCol: index of digit immediately BEFORE decimal point (-1 means dot before digit 0)
    // Example: "206.08" -> digits [2,0,6,0,8], intPart "206" (len 3) -> dotAfterCol = 2 (after 6)
    // Example: "0.4"    -> digits [0,4],       intPart "0"   (len 1) -> dotAfterCol = 0 (after 0)
    const dotAfterCol = intPart.length - 1;
    return {
      raw: clean,
      intPart,
      fracPart,
      digits,
      dotAfterCol,
      decCount: fracPart.length,
    };
  }

  function formatDigitsWithDot(digitChars, dotAfterIdx, trimLeadingZeros = true) {
    // digitChars length L, dotAfterIdx in -1..L-1
    let chars = digitChars.slice();
    while (dotAfterIdx < 0) {
      chars.unshift('0');
      dotAfterIdx++;
    }
    let intChars = chars.slice(0, dotAfterIdx + 1);
    const fracChars = chars.slice(dotAfterIdx + 1);
    if (trimLeadingZeros) {
      while (intChars.length > 1 && intChars[0] === '0') {
        intChars.shift();
      }
    }
    const intStr = intChars.join('') || '0';
    let fracStr = fracChars.join('');
    fracStr = fracStr.replace(/0+$/, '');
    return fracStr ? `${intStr}.${fracStr}` : intStr;
  }

  // ---------------------------------------------------------------------------
  // 1. Long Division Engine (longdiv)
  // ---------------------------------------------------------------------------
  function computeLongDiv(dividendStr, divisorStr, opts = {}) {
    const mode = opts.mode || 'exact'; // exact | round | remainder
    const places = Number.isInteger(opts.places) ? opts.places : (mode === 'round' ? 2 : 0);
    const maxDecimals = Number.isInteger(opts.maxDecimals) ? opts.maxDecimals : 6;

    const divd = parseDecimalDigits(dividendStr);
    const divs = parseDecimalDigits(divisorStr);
    if (divs.digits.every(d => d === 0)) throw new Error('Divisor cannot be 0');

    const shift = divs.decCount;
    const divisorShiftedInt = BigInt(divs.digits.join(''));
    if (divisorShiftedInt <= 0n) throw new Error('Divisor must be > 0');
    const divisorShiftedDigits = divisorShiftedInt.toString().split('').map(Number);

    // Prepare dividend digits after shifting right by `shift`
    const dividendDigits = divd.digits.slice();
    const origDotAfterCol = divd.dotAfterCol;
    const newDotAfterCol = origDotAfterCol + shift;
    const origLen = dividendDigits.length;

    while (dividendDigits.length <= newDotAfterCol) {
      dividendDigits.push(0);
    }

    // Target quotient decimal limit:
    // - remainder: stop exactly at `newDotAfterCol + places`
    // - round: stop at `newDotAfterCol + places + 1` (extra digit for rounding check)
    // - exact: run up to `Math.max(dividendDigits.length - 1, newDotAfterCol + maxDecimals)` or stop early once col >= length-1 and rem === 0
    let targetLastCol;
    if (mode === 'remainder') {
      targetLastCol = newDotAfterCol + places;
    } else if (mode === 'round') {
      targetLastCol = newDotAfterCol + places + 1;
    } else {
      targetLastCol = Math.max(dividendDigits.length - 1, newDotAfterCol + maxDecimals);
    }

    while (dividendDigits.length <= targetLastCol) {
      dividendDigits.push(0);
    }

    const totalCols = dividendDigits.length;
    const quotientRow = new Array(totalCols).fill(null);
    const quotientDotAfterCol = newDotAfterCol;
    const workRows = [];

    let cur = 0n;
    let started = false;
    let lastNonZeroWorkCol = newDotAfterCol;
    let finalCol = 0;

    for (let col = 0; col < totalCols; col++) {
      // In exact mode, if we already consumed all original/shifted dividend digits AND passed newDotAfterCol AND remainder is 0 -> stop early!
      if (mode === 'exact' && started && col > newDotAfterCol && col >= origLen && cur === 0n) {
        break;
      }

      cur = cur * 10n + BigInt(dividendDigits[col]);
      finalCol = col;

      if (!started && cur < divisorShiftedInt) {
        if (col === newDotAfterCol) {
          // Ensure leading "0." (e.g. 0.72 ÷ 1.2 -> 0.6)
          quotientRow[col] = 0;
          started = true;
        }
        continue;
      }

      const qDigit = Number(cur / divisorShiftedInt);
      const prod = BigInt(qDigit) * divisorShiftedInt;
      const rem = cur - prod;

      quotientRow[col] = qDigit;
      started = true;

      // Record subtraction block if qDigit > 0 (or if we want to show zero subtraction ONLY when there are previous steps? Standard TW textbook skips multiplying by 0 and directly brings down next digit!)
      if (qDigit > 0) {
        const prodStr = prod.toString();
        const remStr = rem.toString();
        workRows.push({
          colEnd: col,
          qDigit,
          prodDigits: prodStr.split('').map(Number),
          remDigits: remStr.split('').map(Number),
          bringDownNext: null, // filled below if next step happens
        });
        lastNonZeroWorkCol = col;
      } else if (workRows.length > 0 && cur > 0n) {
        // qDigit === 0 with nonzero cur carried down: update bringDown on previous rem visually?
      }

      cur = rem;
    }

    // Trim unused trailing appended zero columns in exact mode
    let displayColCount = finalCol + 1;
    if (mode === 'exact') {
      displayColCount = Math.max(newDotAfterCol + 1, Math.min(origLen, dividendDigits.length), lastNonZeroWorkCol + 1);
      // Wait: if original dividend had more digits before shift, ensure all shifted digits up to newDotAfterCol+1 or last nonzero col are shown
      displayColCount = Math.max(displayColCount, finalCol + (quotientRow[finalCol] !== null ? 1 : 0));
      // Find rightmost non-null quotient or shifted digit
      let rightMost = newDotAfterCol;
      for (let c = totalCols - 1; c >= 0; c--) {
        if (quotientRow[c] !== null || c < origLen || c <= newDotAfterCol) {
          rightMost = c;
          break;
        }
      }
      displayColCount = rightMost + 1;
    } else {
      displayColCount = targetLastCol + 1;
    }

    // Reconstruct quotient string cleanly
    let rawQDigits = [];
    for (let c = 0; c < displayColCount; c++) {
      if (quotientRow[c] !== null) rawQDigits.push(String(quotientRow[c]));
      else if (c <= newDotAfterCol && rawQDigits.length > 0) rawQDigits.push('0');
      else if (c <= newDotAfterCol && c === newDotAfterCol) rawQDigits.push('0');
    }
    // Count how many digits in rawQDigits are before decimal point
    let intPartCount = 0;
    for (let c = 0; c <= newDotAfterCol && c < displayColCount; c++) {
      if (quotientRow[c] !== null || intPartCount > 0 || c === newDotAfterCol) intPartCount++;
    }
    const rawIntStr = rawQDigits.slice(0, intPartCount).join('').replace(/^0+(?=\d)/, '') || '0';
    const rawFracStr = rawQDigits.slice(intPartCount).join('');

    let quotientValue;
    let roundedValue = null;
    if (mode === 'exact') {
      const cleanFrac = rawFracStr.replace(/0+$/, '');
      quotientValue = cleanFrac ? `${rawIntStr}.${cleanFrac}` : rawIntStr;
    } else if (mode === 'round') {
      const calcFull = rawFracStr ? `${rawIntStr}.${rawFracStr}` : rawIntStr;
      quotientValue = calcFull;
      // Round exact using rawFracStr of length places + 1
      const keepFrac = rawFracStr.slice(0, places);
      const roundDigit = Number(rawFracStr[places] || '0');
      const unroundedDigits = (rawIntStr + keepFrac).split('').map(Number);
      if (roundDigit >= 5) {
        let carry = 1;
        for (let i = unroundedDigits.length - 1; i >= 0; i--) {
          const sum = unroundedDigits[i] + carry;
          unroundedDigits[i] = sum % 10;
          carry = Math.floor(sum / 10);
        }
        if (carry > 0) unroundedDigits.unshift(carry);
      }
      const rIntLen = unroundedDigits.length - places;
      const rInt = unroundedDigits.slice(0, rIntLen).join('') || '0';
      const rFrac = places > 0 ? unroundedDigits.slice(rIntLen).join('') : '';
      roundedValue = rFrac ? `${rInt}.${rFrac}` : rInt;
    } else {
      // remainder mode
      const cleanFrac = rawFracStr; // exact requested places
      quotientValue = cleanFrac ? `${rawIntStr}.${cleanFrac}` : rawIntStr;
    }

    // Remainder aligned to ORIGINAL dividend decimal point!
    // Current remainder `cur` is at scale `10^-(lastProcessedCol - origDotAfterCol)`
    // Wait: let `lastColUsed = displayColCount - 1`:
    const lastColUsed = displayColCount - 1;
    const remDiffFromOrigDot = lastColUsed - origDotAfterCol;
    let remainderValue = '0';
    let finalRemCells = null;

    if (cur > 0n) {
      const remDigitsStr = cur.toString();
      if (remDiffFromOrigDot > 0) {
        const padded = remDigitsStr.padStart(remDiffFromOrigDot + 1, '0');
        const splitAt = padded.length - remDiffFromOrigDot;
        const rInt = padded.slice(0, splitAt);
        const rFrac = padded.slice(splitAt).replace(/0+$/, '');
        remainderValue = rFrac ? `${rInt}.${rFrac}` : rInt;
      } else {
        remainderValue = remDigitsStr + '0'.repeat(-remDiffFromOrigDot);
      }
      // Also prepare visual cells aligned at lastColUsed with leading zero if needed back to origDotAfterCol
      finalRemCells = [];
      const remArr = remDigitsStr.split('');
      const remStartCol = lastColUsed - remArr.length + 1;
      for (let i = 0; i < remArr.length; i++) {
        finalRemCells.push({ col: remStartCol + i, ch: remArr[i] });
      }
    }

    return {
      mode,
      places,
      shift,
      dividendOrig: divd.raw,
      divisorOrig: divs.raw,
      divisorOrigDigits: divs.digits,
      divisorOrigDotAfterCol: divs.dotAfterCol,
      divisorShiftedDigits,
      dividendDigits: dividendDigits.slice(0, displayColCount),
      origDividendLen: origLen,
      origDotAfterCol,
      newDotAfterCol,
      displayColCount,
      quotientRow: quotientRow.slice(0, displayColCount),
      quotientDotAfterCol,
      quotient: quotientValue,
      rounded: roundedValue,
      remainder: remainderValue,
      remainderRawInt: cur.toString(),
      workRows,
      finalRemCells,
    };
  }

  function renderLongDivHtml(step) {
    const m = computeLongDiv(step.dividend, step.divisor, {
      mode: step.mode || 'exact',
      places: step.places,
      maxDecimals: step.maxDecimals,
    });

    const divCols = m.divisorOrigDigits.length;
    const totalCols = m.displayColCount;
    const gridCols = divCols + 1 + totalCols; // divisor cols + bracket col + dividend cols

    // Build rows inside CSS grid with explicit col start (1-indexed!)
    const offset = divCols + 2; // 1-based CSS column for dividend col 0
    let html = `<div class="km-calc-wrap km-longdiv-wrap">`;
    if (step.note) {
      html += `<div class="km-calc-note">${renderKidsText(step.note)}</div>`;
    }
    html += `<div class="km-longdiv-grid" style="grid-template-columns: repeat(${divCols}, 26px) 16px repeat(${totalCols}, 26px);">`;

    // Row 1: Quotient digits
    const qRow = 1;
    for (let c = 0; c < totalCols; c++) {
      const val = m.quotientRow[c];
      const hasDot = m.quotient.includes('.') && c === m.quotientDotAfterCol;
      html += `<div class="km-cell km-q-cell" style="grid-row:${qRow};grid-column:${offset + c};">`;
      html += val !== null ? val : '';
      if (hasDot) html += `<span class="km-dot">.</span>`;
      html += `</div>`;
    }

    // Row 2: Divisor + Bracket + Dividend
    const dRow = 2;
    for (let i = 0; i < divCols; i++) {
      const hasOrigDot = m.shift > 0 && i === m.divisorOrigDotAfterCol;
      const isLeadingZeroCrossed = m.shift > 0 && i < m.shift && m.divisorOrigDigits[i] === 0 && i <= m.divisorOrigDotAfterCol;
      html += `<div class="km-cell km-div-cell ${isLeadingZeroCrossed ? 'km-crossed' : ''}" style="grid-row:${dRow};grid-column:${1 + i};">`;
      html += m.divisorOrigDigits[i];
      if (hasOrigDot) html += `<span class="km-dot km-dot-old" title="原本小數點">.</span>`;
      if (m.shift > 0 && i === divCols - 1) {
        html += `<span class="km-shift-tag">右移${m.shift}位</span>`;
      }
      html += `</div>`;
    }
    html += `<div class="km-bracket" style="grid-row:${dRow};grid-column:${divCols + 1};"></div>`;

    for (let c = 0; c < totalCols; c++) {
      const isPad = c >= m.origDividendLen;
      const hasOrigDot = c === m.origDotAfterCol && (m.dividendOrig.includes('.') || (m.mode === 'remainder' && m.shift > 0));
      const hasNewDot = m.shift > 0 && c === m.newDotAfterCol && c < totalCols - 1;
      const isOldDot = m.shift > 0 && hasOrigDot;
      const classes = ['km-cell', 'km-divd-cell'];
      if (isPad) classes.push('km-pad-zero');
      html += `<div class="${classes.join(' ')}" style="grid-row:${dRow};grid-column:${offset + c};">`;
      html += m.dividendDigits[c];
      if (hasOrigDot) {
        html += `<span class="km-dot ${isOldDot ? 'km-dot-old' : 'km-dot-orig'}">.</span>`;
      }
      if (hasNewDot) {
        html += `<span class="km-dot km-dot-new">.</span>`;
      }
      html += `</div>`;
    }

    // Subsequent work rows: product, line, remainder + next bring-down
    let curGridRow = 3;
    for (let wi = 0; wi < m.workRows.length; wi++) {
      const w = m.workRows[wi];
      const prodStart = w.colEnd - w.prodDigits.length + 1;
      for (let i = 0; i < w.prodDigits.length; i++) {
        html += `<div class="km-cell km-prod-cell" style="grid-row:${curGridRow};grid-column:${offset + prodStart + i};">${w.prodDigits[i]}</div>`;
      }
      curGridRow++;

      // Underline spanning product / current working columns
      const lineStart = prodStart;
      const lineEnd = w.colEnd + 1;
      html += `<div class="km-sub-line" style="grid-row:${curGridRow};grid-column:${offset + lineStart} / ${offset + lineEnd};"></div>`;
      curGridRow++;

      // Remainder row: if last workRow and mode === 'remainder' or rem == 0, show final rem (with next digits appended if any!)
      const isLast = wi === m.workRows.length - 1;
      if (isLast) {
        // Show final remainder cells (note: if remainder mode had qDigit===0 tail after last workRow, show finalRemCells!)
        if (m.mode === 'remainder' && m.finalRemCells) {
          // If decimal remainder aligns before first rem cell (e.g. .20 -> put 0. before)
          const minCol = m.finalRemCells[0].col;
          if (m.remainder !== '0' && m.origDotAfterCol < minCol) {
            for (let c = m.origDotAfterCol; c < minCol; c++) {
              const showDot = c === m.origDotAfterCol;
              html += `<div class="km-cell km-rem-cell km-rem-pad" style="grid-row:${curGridRow};grid-column:${offset + c};">0${showDot ? '<span class="km-dot km-dot-orig">.</span>' : ''}</div>`;
            }
          }
          for (const cell of m.finalRemCells) {
            const showDot = cell.col === m.origDotAfterCol && m.remainder.includes('.');
            html += `<div class="km-cell km-rem-cell" style="grid-row:${curGridRow};grid-column:${offset + cell.col};">${cell.ch}${showDot ? '<span class="km-dot km-dot-orig">.</span>' : ''}</div>`;
          }
        } else {
          const remStart = w.colEnd - w.remDigits.length + 1;
          for (let i = 0; i < w.remDigits.length; i++) {
            html += `<div class="km-cell km-rem-cell" style="grid-row:${curGridRow};grid-column:${offset + remStart + i};">${w.remDigits[i]}</div>`;
          }
        }
        curGridRow++;
      } else {
        // Intermediate remainder + bring down up to next workRow's rightmost column (or colEnd + 1)
        const nextW = m.workRows[wi + 1];
        const remStart = w.colEnd - w.remDigits.length + 1;
        const showZeroRem = w.remDigits.length > 1 || w.remDigits[0] !== 0;
        if (showZeroRem) {
          for (let i = 0; i < w.remDigits.length; i++) {
            html += `<div class="km-cell km-rem-cell" style="grid-row:${curGridRow};grid-column:${offset + remStart + i};">${w.remDigits[i]}</div>`;
          }
        }
        for (let bc = w.colEnd + 1; bc <= nextW.colEnd; bc++) {
          html += `<div class="km-cell km-bring-cell" style="grid-row:${curGridRow};grid-column:${offset + bc};">${m.dividendDigits[bc]}</div>`;
        }
        curGridRow++;
      }
    }

    html += `</div>`;

    // Summary badge under long division
    if (m.mode === 'round' && m.rounded !== null) {
      html += `<div class="km-calc-summary">直式算到第 ${m.places + 1} 位為 <strong>${m.quotient}</strong>，四捨五入取到小數第 ${m.places} 位 ➔ <strong>${m.rounded}</strong></div>`;
    } else if (m.mode === 'remainder') {
      html += `<div class="km-calc-summary">商：<strong>${m.quotient}</strong>　⋯⋯　餘數（對齊原被除數小數點）：<strong>${m.remainder}</strong></div>`;
    }
    html += `</div>`;
    return html;
  }

  // ---------------------------------------------------------------------------
  // 2. Vertical Multiplication Engine (mul)
  // ---------------------------------------------------------------------------
  function computeMul(aStr, bStr) {
    const a = parseDecimalDigits(aStr);
    const b = parseDecimalDigits(bStr);
    const aBig = BigInt(a.digits.join(''));
    const bBig = BigInt(b.digits.join(''));
    const prodBig = aBig * bBig;
    const totalDec = a.decCount + b.decCount;

    const partialRows = [];
    // Multiplier digits from right to left (index b.digits.length - 1 down to 0)
    const bLen = b.digits.length;
    for (let i = bLen - 1; i >= 0; i--) {
      const shiftLeft = bLen - 1 - i;
      const d = b.digits[i];
      if (d === 0 && bLen > 1) continue; // skip zero rows unless single digit 0
      const pVal = (aBig * BigInt(d)).toString();
      partialRows.push({
        digit: d,
        shiftLeft,
        digits: pVal.split('').map(Number),
      });
    }

    const rawProdStr = prodBig.toString().padStart(totalDec + 1, '0');
    const intLen = rawProdStr.length - totalDec;
    const resultStr = totalDec > 0
      ? (() => {
          const iStr = rawProdStr.slice(0, intLen);
          const fStr = rawProdStr.slice(intLen).replace(/0+$/, '');
          return fStr ? `${iStr}.${fStr}` : iStr;
        })()
      : rawProdStr;

    const width = Math.max(
      a.digits.length,
      b.digits.length + 1,
      rawProdStr.length,
      ...partialRows.map(r => r.digits.length + r.shiftLeft)
    );

    return {
      aRaw: a.raw,
      bRaw: b.raw,
      aDigits: a.digits,
      aDec: a.decCount,
      bDigits: b.digits,
      bDec: b.decCount,
      totalDec,
      partialRows,
      rawProdDigits: rawProdStr.split('').map(Number),
      result: resultStr,
      width,
    };
  }

  function renderMulHtml(step) {
    const m = computeMul(step.a, step.b);
    const cols = m.width + 1; // col 1 for '×' operator if needed, cols 2..cols for digits right-aligned
    let html = `<div class="km-calc-wrap km-mul-wrap">`;
    if (step.note) html += `<div class="km-calc-note">${renderKidsText(step.note)}</div>`;
    html += `<div class="km-vmath-grid" style="grid-template-columns: 24px repeat(${m.width}, 24px);">`;

    // Row 1: a
    const aStart = m.width - m.aDigits.length + 2;
    const aDotIdx = m.aDec > 0 ? m.aDigits.length - m.aDec - 1 : -1;
    m.aDigits.forEach((d, i) => {
      html += `<div class="km-cell" style="grid-row:1;grid-column:${aStart + i};">${d}${i === aDotIdx ? '<span class="km-dot">.</span>' : ''}</div>`;
    });

    // Row 2: × and b
    html += `<div class="km-cell km-op-cell" style="grid-row:2;grid-column:1;">×</div>`;
    const bStart = m.width - m.bDigits.length + 2;
    const bDotIdx = m.bDec > 0 ? m.bDigits.length - m.bDec - 1 : -1;
    m.bDigits.forEach((d, i) => {
      html += `<div class="km-cell" style="grid-row:2;grid-column:${bStart + i};">${d}${i === bDotIdx ? '<span class="km-dot">.</span>' : ''}</div>`;
    });

    // Line 1
    html += `<div class="km-sub-line" style="grid-row:3;grid-column:1 / ${cols + 1};"></div>`;

    let rowIdx = 4;
    if (m.partialRows.length > 1) {
      for (const pr of m.partialRows) {
        const rightCol = m.width + 1 - pr.shiftLeft;
        const startCol = rightCol - pr.digits.length + 1;
        pr.digits.forEach((d, i) => {
          html += `<div class="km-cell km-partial-cell" style="grid-row:${rowIdx};grid-column:${startCol + i};">${d}</div>`;
        });
        rowIdx++;
      }
      html += `<div class="km-sub-line" style="grid-row:${rowIdx};grid-column:1 / ${cols + 1};"></div>`;
      rowIdx++;
    }

    // Final product row
    const resStart = m.width - m.rawProdDigits.length + 2;
    const resDotIdx = m.totalDec > 0 ? m.rawProdDigits.length - m.totalDec - 1 : -1;
    m.rawProdDigits.forEach((d, i) => {
      html += `<div class="km-cell km-res-cell" style="grid-row:${rowIdx};grid-column:${resStart + i};">${d}${i === resDotIdx ? '<span class="km-dot">.</span>' : ''}</div>`;
    });

    html += `</div>`;
    if (m.totalDec > 0) {
      html += `<div class="km-calc-summary">小數共 ${m.aDec} ＋ ${m.bDec} ＝ <strong>${m.totalDec}</strong> 位 ➔ <strong>${m.result}</strong></div>`;
    }
    html += `</div>`;
    return html;
  }

  // ---------------------------------------------------------------------------
  // 3. Vertical Addition / Subtraction Engine (addsub)
  // ---------------------------------------------------------------------------
  function computeAddSub(op, aStr, bStr) {
    const cleanOp = op === '−' ? '-' : op;
    if (cleanOp !== '+' && cleanOp !== '-') throw new Error(`Invalid addsub op: ${op}`);
    const a = parseDecimalDigits(aStr);
    const b = parseDecimalDigits(bStr);

    const maxDec = Math.max(a.decCount, b.decCount);
    const aScaled = BigInt(a.digits.join('')) * (10n ** BigInt(maxDec - a.decCount));
    const bScaled = BigInt(b.digits.join('')) * (10n ** BigInt(maxDec - b.decCount));
    const resScaled = cleanOp === '+' ? (aScaled + bScaled) : (aScaled - bScaled);
    if (resScaled < 0n) throw new Error(`Negative result not supported in elementary vertical sub: ${aStr} - ${bStr}`);

    const aPadded = a.digits.concat(new Array(maxDec - a.decCount).fill(0));
    const bPadded = b.digits.concat(new Array(maxDec - b.decCount).fill(0));
    const resRaw = resScaled.toString().padStart(maxDec + 1, '0').split('').map(Number);

    const maxIntLen = Math.max(a.intPart.length, b.intPart.length, resRaw.length - maxDec);
    const width = maxIntLen + maxDec;
    const resultStr = formatDigitsWithDot(resRaw.map(String), resRaw.length - maxDec - 1);

    return {
      op: cleanOp === '-' ? '−' : '+',
      maxDec,
      maxIntLen,
      width,
      aPadded,
      aOrigFracLen: a.decCount,
      bPadded,
      bOrigFracLen: b.decCount,
      resDigits: resRaw,
      result: resultStr,
    };
  }

  function renderAddSubHtml(step) {
    const m = computeAddSub(step.op, step.a, step.b);
    const cols = m.width + 1;
    let html = `<div class="km-calc-wrap km-addsub-wrap">`;
    if (step.note) html += `<div class="km-calc-note">${renderKidsText(step.note)}</div>`;
    html += `<div class="km-vmath-grid" style="grid-template-columns: 24px repeat(${m.width}, 24px);">`;

    const drawNumRow = (rowNum, digits, origDec, opSign) => {
      if (opSign) html += `<div class="km-cell km-op-cell" style="grid-row:${rowNum};grid-column:1;">${opSign}</div>`;
      const startCol = m.width - digits.length + 2;
      const dotIdx = m.maxDec > 0 ? digits.length - m.maxDec - 1 : -1;
      digits.forEach((d, i) => {
        const isPad = m.maxDec > 0 && i >= digits.length - (m.maxDec - origDec);
        html += `<div class="km-cell ${isPad ? 'km-pad-zero' : ''}" style="grid-row:${rowNum};grid-column:${startCol + i};">${d}${i === dotIdx ? '<span class="km-dot">.</span>' : ''}</div>`;
      });
    };

    drawNumRow(1, m.aPadded, m.aOrigFracLen, '');
    drawNumRow(2, m.bPadded, m.bOrigFracLen, m.op);
    html += `<div class="km-sub-line" style="grid-row:3;grid-column:1 / ${cols + 1};"></div>`;
    drawNumRow(4, m.resDigits, m.maxDec, '');

    html += `</div></div>`;
    return html;
  }

  // ---------------------------------------------------------------------------
  // 4. Bar Diagram SVG Generator (figure.type === 'bar')
  // ---------------------------------------------------------------------------
  function renderBarDiagramSvg(figure) {
    if (!figure || figure.type !== 'bar' || !Array.isArray(figure.rows)) return '';
    const rows = figure.rows;
    const maxUnits = Math.max(...rows.map(r => Number(r.units) || 1), 1);
    const labelW = 148;
    const rightPad = 48;
    const maxBarW = 640 - labelW - rightPad;
    const unitW = Math.min(115, maxBarW / maxUnits);
    const rowH = 38;
    const rowGap = 24;
    const topPad = 24;
    const chartH = rows.length * rowH + (rows.length - 1) * rowGap;
    const hasBrace = Boolean(figure.brace && figure.brace.text);
    const totalH = topPad + chartH + (hasBrace ? 54 : 24);

    const roleColors = {
      base: { fill: '#ede9fe', stroke: '#5b4bdb', text: '#3730a3' },
      compare: { fill: '#fef3c7', stroke: '#d97706', text: '#92400e' },
      extra: { fill: '#e0f2fe', stroke: '#0284c7', text: '#075985' },
    };

    let svg = `<svg class="km-bar-svg" viewBox="0 0 640 ${totalH}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="線段數量關係圖">`;

    const barPositions = [];
    rows.forEach((r, idx) => {
      const y = topPad + idx * (rowH + rowGap);
      const u = Number(r.units) || 1;
      const w = u * unitW;
      const palette = roleColors[r.role] || roleColors.compare;
      barPositions.push({ x: labelW, y, w, u, label: r.label });

      // Label
      svg += `<text x="${labelW - 12}" y="${y + rowH / 2 + 5}" text-anchor="end" font-size="14" font-weight="700" fill="#1e293b" font-family="'Noto Sans TC', sans-serif">${escHtml(r.label)}</text>`;

      // Bar rect
      svg += `<rect x="${labelW}" y="${y}" width="${w.toFixed(1)}" height="${rowH}" rx="6" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2.2" />`;

      // Internal dashed tick lines per integer unit
      const wholeUnits = Math.floor(u + 1e-9);
      for (let k = 1; k < wholeUnits || (k === wholeUnits && u - wholeUnits > 0.01); k++) {
        const tx = labelW + k * unitW;
        svg += `<line x1="${tx.toFixed(1)}" y1="${y + 2}" x2="${tx.toFixed(1)}" y2="${y + rowH - 2}" stroke="${palette.stroke}" stroke-width="1.4" stroke-dasharray="4 3" />`;
      }

      // If u < 1 (e.g. 0.4 or 0.75 of 1 unit), draw faint dashed remainder box up to 1 full unit for reference
      if (u < 0.99 && rows.some(other => other.role === 'base' && Number(other.units) === 1)) {
        const refX = labelW + w;
        const refW = unitW - w;
        svg += `<rect x="${refX.toFixed(1)}" y="${y}" width="${refW.toFixed(1)}" height="${rowH}" rx="4" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4" />`;
      }

      // Unit tag centered in bar
      const unitStr = Number.isInteger(u) ? `${u} 份` : `${u} 份`;
      if (w >= 48) {
        svg += `<text x="${(labelW + w / 2).toFixed(1)}" y="${y + rowH / 2 + 5}" text-anchor="middle" font-size="13" font-weight="800" fill="${palette.text}" font-family="'Noto Sans TC', sans-serif">${unitStr}</text>`;
      } else {
        svg += `<text x="${(labelW + w + 8).toFixed(1)}" y="${y + rowH / 2 + 5}" text-anchor="start" font-size="12" font-weight="800" fill="${palette.text}" font-family="'Noto Sans TC', sans-serif">${unitStr}</text>`;
      }
    });

    // Brace annotation
    if (hasBrace && barPositions.length >= 2) {
      const b0 = barPositions[0];
      const bLast = barPositions[barPositions.length - 1];
      if (figure.brace.kind === 'sum') {
        const maxRight = Math.max(...barPositions.map(p => p.x + p.w));
        const bx = maxRight + 14;
        const topY = b0.y + 4;
        const botY = bLast.y + rowH - 4;
        const midY = (topY + botY) / 2;
        svg += `<path d="M ${bx} ${topY} L ${bx + 10} ${topY} L ${bx + 10} ${botY} L ${bx} ${botY}" fill="none" stroke="#4f46e5" stroke-width="2.2" stroke-linecap="round"/>`;
        svg += `<text x="${bx + 16}" y="${midY + 5}" font-size="13" font-weight="800" fill="#4f46e5" font-family="'Noto Sans TC', sans-serif">${escHtml(figure.brace.text)}</text>`;
      } else if (figure.brace.kind === 'diff') {
        const minW = Math.min(...barPositions.map(p => p.w));
        const maxW = Math.max(...barPositions.map(p => p.w));
        const x1 = labelW + minW;
        const x2 = labelW + maxW;
        const topY = b0.y;
        const botY = bLast.y + rowH + 10;
        if (Math.abs(x2 - x1) > 10) {
          const textX = Math.max(labelW + 50, Math.min(540, (x1 + x2) / 2));
          svg += `<line x1="${x1.toFixed(1)}" y1="${topY}" x2="${x1.toFixed(1)}" y2="${botY}" stroke="#e11d48" stroke-width="1.6" stroke-dasharray="4 3" />`;
          svg += `<line x1="${x2.toFixed(1)}" y1="${topY}" x2="${x2.toFixed(1)}" y2="${botY}" stroke="#e11d48" stroke-width="1.6" stroke-dasharray="4 3" />`;
          svg += `<path d="M ${x1.toFixed(1)} ${botY - 4} L ${x1.toFixed(1)} ${botY + 5} L ${x2.toFixed(1)} ${botY + 5} L ${x2.toFixed(1)} ${botY - 4}" fill="none" stroke="#e11d48" stroke-width="2"/>`;
          svg += `<text x="${textX.toFixed(1)}" y="${botY + 23}" text-anchor="middle" font-size="13" font-weight="800" fill="#be123c" font-family="'Noto Sans TC', sans-serif">${escHtml(figure.brace.text)}</text>`;
        } else {
          svg += `<text x="${labelW}" y="${botY + 20}" text-anchor="start" font-size="13" font-weight="800" fill="#be123c" font-family="'Noto Sans TC', sans-serif">${escHtml(figure.brace.text)}</text>`;
        }
      }
    }

    svg += `</svg>`;
    return svg;
  }

  function renderStepBlockHtml(step, question) {
    if (!step || typeof step !== 'object') return '';
    switch (step.type) {
      case 'text':
        return `<div class="km-step km-step-text">${renderKidsText(step.text)}</div>`;
      case 'eq':
        return `<div class="km-step km-step-eq">${renderKidsExpr(step.expr, step.unit)}</div>`;
      case 'longdiv':
        return `<div class="km-step km-step-calc">${renderLongDivHtml(step)}</div>`;
      case 'mul':
        return `<div class="km-step km-step-calc">${renderMulHtml(step)}</div>`;
      case 'addsub':
        return `<div class="km-step km-step-calc">${renderAddSubHtml(step)}</div>`;
      case 'bar':
        return `<div class="km-step km-step-bar">${renderBarDiagramSvg(question && question.figure)}</div>`;
      case 'svg':
        return `<div class="km-step km-step-svg">${step.svg || ''}${step.caption ? `<div class="km-step-cap">${renderKidsText(step.caption)}</div>` : ''}</div>`;
      case 'answer':
        return `<div class="km-step km-step-answer">${renderKidsText(step.text)}</div>`;
      default:
        return '';
    }
  }

  const api = {
    escHtml,
    renderFractionHtml,
    renderKidsText,
    renderKidsExpr,
    parseDecimalDigits,
    computeLongDiv,
    renderLongDivHtml,
    computeMul,
    renderMulHtml,
    computeAddSub,
    renderAddSubHtml,
    renderBarDiagramSvg,
    renderStepBlockHtml,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.KidsMath = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
