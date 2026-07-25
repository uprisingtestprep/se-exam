/* SE Exam Simulator — Application Logic */

const ACCESS_CODE  = "SE9000";
const EXAM_SECONDS = 23400;
const PASSING_PCT  = 72;
const STORAGE_KEY  = "se_exam_state_v1";
const SIM_Q_COUNT  = 300;  // simulator serves this project's configured pool size (config.json exam.sim_questions)
const DOMAIN_LABELS = {"steel_structures": "Steel Structures", "concrete_structures": "Concrete Structures", "wood_structures": "Wood Structures", "masonry_structures": "Masonry Structures", "foundations_and_retaining_structures": "Foundations and Retaining Structures", "loads_lateral_earth_pressure_and_analysis_methods": "Loads Lateral Earth Pressure and Analysis Methods", "connections_and_joints": "Connections and Joints", "conceptual_design_project_planning_and_documentation": "Conceptual Design Project Planning and Documentation"};  // maps domain key -> human-readable label for display
function domainLabel(key) { return DOMAIN_LABELS[key] || key || ""; }

let questions = [];
let state = {
  phase: "gate", answers: {}, flags: {},
  current: 1, timeLeft: EXAM_SECONDS,
  submitted: false, startTime: null,
};
let timerInterval = null;

// ── boot ──────────────────────────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  const allQ = (window.EXAM_QUESTIONS || []).slice();
  shuffleArray(allQ);
  questions = allQ.slice(0, SIM_Q_COUNT);
  restoreState();

  document.getElementById("access-gate").style.display = "flex";
  document.getElementById("app").style.display = "none";
  setupAccessGate();
});

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Prevent 3+ consecutive same correct answer
  for (let i = 2; i < arr.length; i++) {
    if (arr[i].correct === arr[i-1].correct && arr[i].correct === arr[i-2].correct) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].correct !== arr[i-1].correct) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          break;
        }
      }
    }
  }
}

// ── access gate ───────────────────────────────────────────────────────────────
function setupAccessGate() {
  const attempt = () => {
    const val = document.getElementById("access-code-input").value.trim().toUpperCase();
    if (val === ACCESS_CODE) {
      document.getElementById("access-gate").style.display = "none";
      startExam();
    } else {
      const err = document.getElementById("access-error");
      err.textContent = "Incorrect access code. Please try again.";
      document.getElementById("access-code-input").value = "";
      document.getElementById("access-code-input").focus();
    }
  };
  document.getElementById("access-btn").addEventListener("click", attempt);
  document.getElementById("access-code-input").addEventListener("keydown",
    e => { if (e.key === "Enter") attempt(); });
}

// ── exam start ────────────────────────────────────────────────────────────────
function startExam() {
  if (state.submitted) {
    localStorage.removeItem(STORAGE_KEY);
    state = { phase: "gate", answers: {}, flags: {}, current: 1, timeLeft: EXAM_SECONDS, submitted: false, startTime: null };
  }
  document.getElementById("app").style.display = "flex";
  if (!state.startTime) state.startTime = Date.now();
  renderQuestion();
  startTimer();
  buildGrid();
  document.getElementById("submit-btn").addEventListener("click", confirmSubmit);
  document.getElementById("flag-btn").addEventListener("click",   toggleFlag);
  document.getElementById("prev-btn").addEventListener("click",   () => navigate(-1));
  document.getElementById("next-btn").addEventListener("click",   () => navigate(1));
  document.getElementById("map-btn").addEventListener("click",    openMapModal);
  document.getElementById("map-close").addEventListener("click",  closeMapModal);
  document.getElementById("map-backdrop").addEventListener("click", closeMapModal);
  document.addEventListener("keydown", keyHandler);
}

// ── timer ─────────────────────────────────────────────────────────────────────
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (state.submitted) return;
    state.timeLeft = Math.max(0, EXAM_SECONDS - Math.floor((Date.now() - state.startTime) / 1000));
    updateTimerDisplay();
    if (state.timeLeft === 0) submitExam();
    saveState();
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(state.timeLeft / 3600);
  const m = Math.floor((state.timeLeft % 3600) / 60);
  const s = state.timeLeft % 60;
  document.getElementById("timer-display").textContent =
    h > 0 ? `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`
           : `${m}:${String(s).padStart(2,"0")}`;
}

// ── render ─────────────────────────────────────────────────────────────────────
function renderQuestion() {
  const q = questions[state.current - 1];
  if (!q) return;
  document.getElementById("q-counter").textContent = `Question ${state.current} of ${questions.length}`;
  document.getElementById("q-domain").textContent  = domainLabel(q.domain);
  const scenarioBox = document.getElementById("scenario-box");
  if (q.scenario_text) {
    document.getElementById("scenario-label").textContent = q.scenario_title || "Scenario";
    document.getElementById("scenario-text").textContent = q.scenario_text;
    scenarioBox.style.display = "block";
  } else {
    scenarioBox.style.display = "none";
  }
  document.getElementById("question-text").textContent = q.question;
  // q-image-wrap is unused in this project: every item is point_and_click,
  // drag_and_drop_position, or drag_and_drop_order, and the first two render
  // their own embedded image (with hotzone/drop-zone overlays) inside
  // renderQuestionBody() -- showing q.image here too would duplicate it.
  document.getElementById("q-image-wrap").style.display = "none";
  const fi = document.getElementById("q-flag-indicator");
  fi.style.display = state.flags[state.current] ? "inline-block" : "none";

  document.getElementById("explanation-box").style.display = "none";

  renderQuestionBody(q);

  // Scroll question panel to top on navigation
  const panel = document.querySelector(".question-panel");
  if (panel) panel.scrollTop = 0;

  updateProgress();
  updateGrid();
}

// ── item-type dispatcher ──────────────────────────────────────────────────────
// This project's simulator pool is 100% "alternative item types" (AITs), matching
// the real SE Vertical Buildings Depth CBT: point_and_click and drag_and_drop_position
// (click/tap a spot on a drawing) and drag_and_drop_order (rank/sequence a list).
// Native HTML5 drag events do not fire on iOS/Android touch, so both drag types use a
// tap-to-select-then-tap-to-place interaction instead of real cursor drag -- this keeps
// the exam usable on a phone, which every simulator in this system must support.
function renderQuestionBody(q) {
  const ol = document.getElementById("options-list");
  ol.innerHTML = "";
  if (q.type === "point_and_click") renderPointAndClick(q, ol);
  else if (q.type === "drag_and_drop_position") renderDragPosition(q, ol);
  else if (q.type === "drag_and_drop_order") renderDragOrder(q, ol);
}

// ── point-and-click ───────────────────────────────────────────────────────────
function renderPointAndClick(q, ol) {
  const ans = state.answers[state.current];
  const chosenZone = ans && ans.zone;
  const wrap = document.createElement("div");
  wrap.className = "pc-wrap";
  const img = document.createElement("img");
  img.className = "pc-image";
  img.src = q.image || "";
  img.alt = "";
  wrap.appendChild(img);
  (q.hotzones || []).forEach(z => {
    const div = document.createElement("div");
    div.className = "pc-hotzone" + (chosenZone === z.id ? " pc-hotzone-selected" : "");
    div.style.left   = (z.x * 100) + "%";
    div.style.top    = (z.y * 100) + "%";
    div.style.width  = (z.w * 100) + "%";
    div.style.height = (z.h * 100) + "%";
    div.addEventListener("click", () => selectPointAndClick(state.current, z.id));
    wrap.appendChild(div);
  });
  ol.appendChild(wrap);
  const hint = document.createElement("p");
  hint.className = "pc-hint";
  hint.textContent = "Click or tap the location on the drawing that answers the question.";
  ol.appendChild(hint);
}

function selectPointAndClick(qNum, zoneId) {
  if (state.submitted) return;
  state.answers[qNum] = { type: "point_and_click", zone: zoneId };
  renderQuestion();
  saveState();
}

// ── drag-and-drop: position (label/place onto a drawing) ─────────────────────
function renderDragPosition(q, ol) {
  const ans = state.answers[state.current] || {};
  const placements = ans.placements || {};
  const selectedItem = dragSelection[state.current];

  const wrap = document.createElement("div");
  wrap.className = "dd-wrap";

  const imgWrap = document.createElement("div");
  imgWrap.className = "pc-wrap";
  const img = document.createElement("img");
  img.className = "pc-image";
  img.src = q.image || "";
  img.alt = "";
  imgWrap.appendChild(img);

  (q.drop_zones || []).forEach(z => {
    const placedItemId = placements[z.id];
    const placedItem = placedItemId ? (q.drag_items || []).find(i => i.id === placedItemId) : null;
    const div = document.createElement("div");
    div.className = "dd-zone" + (placedItem ? " dd-zone-filled" : "");
    div.style.left   = (z.x * 100) + "%";
    div.style.top    = (z.y * 100) + "%";
    div.style.width  = (z.w * 100) + "%";
    div.style.height = (z.h * 100) + "%";
    div.textContent = placedItem ? placedItem.label : "";
    div.addEventListener("click", () => handleDropZoneTap(state.current, z.id));
    imgWrap.appendChild(div);
  });
  wrap.appendChild(imgWrap);

  const hint = document.createElement("p");
  hint.className = "pc-hint";
  hint.textContent = "Tap a label below, then tap the box on the drawing where it belongs.";
  wrap.appendChild(hint);

  const tray = document.createElement("div");
  tray.className = "dd-tray";
  (q.drag_items || []).forEach(item => {
    const usedAt = Object.keys(placements).find(zid => placements[zid] === item.id);
    const chip = document.createElement("div");
    chip.className = "dd-chip" +
      (selectedItem === item.id ? " dd-chip-selected" : "") +
      (usedAt ? " dd-chip-placed" : "");
    chip.textContent = item.label;
    chip.addEventListener("click", () => handleDragChipTap(state.current, item.id));
    tray.appendChild(chip);
  });
  wrap.appendChild(tray);

  ol.appendChild(wrap);
}

const dragSelection = {}; // qNum -> currently selected drag_item id (position type only)

function handleDragChipTap(qNum, itemId) {
  if (state.submitted) return;
  dragSelection[qNum] = (dragSelection[qNum] === itemId) ? null : itemId;
  renderQuestion();
}

function handleDropZoneTap(qNum, zoneId) {
  if (state.submitted) return;
  const selectedItem = dragSelection[qNum];
  const ans = state.answers[qNum] || { type: "drag_and_drop_position", placements: {} };
  const placements = Object.assign({}, ans.placements || {});
  if (selectedItem) {
    // one-to-one: clear this item from any other zone it previously occupied
    Object.keys(placements).forEach(zid => { if (placements[zid] === selectedItem) delete placements[zid]; });
    placements[zoneId] = selectedItem;
    dragSelection[qNum] = null;
  } else if (placements[zoneId]) {
    // no item selected, tapping a filled zone clears it
    delete placements[zoneId];
  }
  state.answers[qNum] = { type: "drag_and_drop_position", placements };
  renderQuestion();
  saveState();
}

// ── drag-and-drop: order (rank/sequence a list) ───────────────────────────────
const orderCache = {}; // qNum -> shuffled-but-untouched working order, before first move

function renderDragOrder(q, ol) {
  const ans = state.answers[state.current];
  let order = ans && ans.order;
  if (!order) {
    if (!orderCache[state.current]) {
      const ids = (q.items || []).map(i => i.id);
      shuffleArray(ids.map(id => ({ id, correct: id }))); // reuse shuffle util on wrapped objects
      orderCache[state.current] = ids.length ? ids.sort(() => Math.random() - 0.5) : ids;
    }
    order = orderCache[state.current];
  }

  const wrap = document.createElement("div");
  wrap.className = "order-wrap";
  const hint = document.createElement("p");
  hint.className = "pc-hint";
  hint.textContent = "Use the arrows to arrange the items in the correct order.";
  wrap.appendChild(hint);

  const list = document.createElement("div");
  list.className = "order-list";
  order.forEach((itemId, idx) => {
    const item = (q.items || []).find(i => i.id === itemId);
    if (!item) return;
    const row = document.createElement("div");
    row.className = "order-row";
    row.innerHTML = `<span class="order-num">${idx + 1}</span><span class="order-text">${item.text}</span>`;
    const btnWrap = document.createElement("div");
    btnWrap.className = "order-btns";
    const upBtn = document.createElement("button");
    upBtn.className = "order-btn";
    upBtn.textContent = "↑";
    upBtn.disabled = idx === 0;
    upBtn.addEventListener("click", () => moveOrderItem(state.current, order, idx, -1));
    const downBtn = document.createElement("button");
    downBtn.className = "order-btn";
    downBtn.textContent = "↓";
    downBtn.disabled = idx === order.length - 1;
    downBtn.addEventListener("click", () => moveOrderItem(state.current, order, idx, 1));
    btnWrap.appendChild(upBtn);
    btnWrap.appendChild(downBtn);
    row.appendChild(btnWrap);
    list.appendChild(row);
  });
  wrap.appendChild(list);
  ol.appendChild(wrap);
}

function moveOrderItem(qNum, currentOrder, idx, dir) {
  if (state.submitted) return;
  const newOrder = currentOrder.slice();
  const target = idx + dir;
  if (target < 0 || target >= newOrder.length) return;
  [newOrder[idx], newOrder[target]] = [newOrder[target], newOrder[idx]];
  delete orderCache[qNum];
  state.answers[qNum] = { type: "drag_and_drop_order", order: newOrder };
  renderQuestion();
  saveState();
}

// ── answered check (per item type, used by progress bar + submit gate) ───────
function isAnswered(q, ans) {
  if (!ans) return false;
  if (q.type === "point_and_click") return !!ans.zone;
  if (q.type === "drag_and_drop_position") {
    const zoneCount = (q.drop_zones || []).length;
    return zoneCount > 0 && Object.keys(ans.placements || {}).length === zoneCount;
  }
  if (q.type === "drag_and_drop_order") return Array.isArray(ans.order) && ans.order.length === (q.items || []).length;
  return false;
}

// ── scoring (per item type, all-or-nothing per NCEES AIT grading) ────────────
function isCorrectAnswer(q, ans) {
  if (!ans) return false;
  if (q.type === "point_and_click") {
    // q.correct is normally a single zone id, but can be an array when a real
    // engineering tie means more than one zone is legitimately correct (e.g. a
    // symmetric bolt group where two bolts carry an identical resultant).
    const acceptable = Array.isArray(q.correct) ? q.correct : [q.correct];
    return acceptable.includes(ans.zone);
  }
  if (q.type === "drag_and_drop_position") {
    const correctMap = q.correct || {};
    const placements = ans.placements || {};
    const zoneIds = Object.keys(correctMap);
    return zoneIds.length > 0 && zoneIds.every(zid => placements[zid] === correctMap[zid]);
  }
  if (q.type === "drag_and_drop_order") {
    return Array.isArray(ans.order) && Array.isArray(q.correct) &&
      ans.order.length === q.correct.length &&
      ans.order.every((id, i) => id === q.correct[i]);
  }
  return false;
}

// ── review rendering (read-only, shows correct vs. chosen) ────────────────────
function renderReviewBody(q, ans, wasRight, ol) {
  const banner = document.createElement("p");
  banner.className = "review-banner " + (wasRight ? "review-right" : "review-wrong");
  banner.textContent = wasRight ? "You answered this correctly." : "You did not answer this correctly.";
  ol.appendChild(banner);

  if (q.type === "point_and_click") {
    const wrap = document.createElement("div");
    wrap.className = "pc-wrap";
    const img = document.createElement("img");
    img.className = "pc-image";
    img.src = q.image || "";
    img.alt = "";
    wrap.appendChild(img);
    const acceptableZones = Array.isArray(q.correct) ? q.correct : [q.correct];
    (q.hotzones || []).forEach(z => {
      const div = document.createElement("div");
      let cls = "pc-hotzone pc-hotzone-review";
      if (acceptableZones.includes(z.id)) cls += " pc-hotzone-correct";
      if (ans && ans.zone === z.id && !acceptableZones.includes(z.id)) cls += " pc-hotzone-incorrect";
      div.className = cls;
      div.style.left   = (z.x * 100) + "%";
      div.style.top    = (z.y * 100) + "%";
      div.style.width  = (z.w * 100) + "%";
      div.style.height = (z.h * 100) + "%";
      wrap.appendChild(div);
    });
    ol.appendChild(wrap);
  } else if (q.type === "drag_and_drop_position") {
    const placements = (ans && ans.placements) || {};
    const correctMap = q.correct || {};
    const wrap = document.createElement("div");
    wrap.className = "pc-wrap";
    const img = document.createElement("img");
    img.className = "pc-image";
    img.src = q.image || "";
    img.alt = "";
    wrap.appendChild(img);
    (q.drop_zones || []).forEach(z => {
      const placedId = placements[z.id];
      const correctId = correctMap[z.id];
      const placedItem = placedId ? (q.drag_items || []).find(i => i.id === placedId) : null;
      const correctItem = correctId ? (q.drag_items || []).find(i => i.id === correctId) : null;
      const div = document.createElement("div");
      let cls = "dd-zone dd-zone-review";
      cls += placedId === correctId ? " dd-zone-correct" : " dd-zone-incorrect";
      div.className = cls;
      div.style.left   = (z.x * 100) + "%";
      div.style.top    = (z.y * 100) + "%";
      div.style.width  = (z.w * 100) + "%";
      div.style.height = (z.h * 100) + "%";
      div.textContent = placedItem ? placedItem.label : "(blank)";
      if (placedId !== correctId && correctItem) {
        const correctLabel = document.createElement("div");
        correctLabel.className = "dd-zone-correct-label";
        correctLabel.textContent = "Correct: " + correctItem.label;
        div.appendChild(correctLabel);
      }
      wrap.appendChild(div);
    });
    ol.appendChild(wrap);
  } else if (q.type === "drag_and_drop_order") {
    const userOrder = (ans && ans.order) || [];
    const correctOrder = q.correct || [];
    const list = document.createElement("div");
    list.className = "order-list";
    correctOrder.forEach((itemId, idx) => {
      const item = (q.items || []).find(i => i.id === itemId);
      if (!item) return;
      const userIdx = userOrder.indexOf(itemId);
      const row = document.createElement("div");
      row.className = "order-row order-row-review" + (userIdx === idx ? " order-row-correct" : " order-row-incorrect");
      row.innerHTML = `<span class="order-num">${idx + 1}</span><span class="order-text">${item.text}</span>` +
        (userIdx !== idx ? `<span class="order-was">Your position: ${userIdx >= 0 ? userIdx + 1 : "unanswered"}</span>` : "");
      list.appendChild(row);
    });
    ol.appendChild(list);
  }
}

function navigate(dir) {
  const next = state.current + dir;
  if (next >= 1 && next <= questions.length) {
    state.current = next;
    renderQuestion();
  }
}

function toggleFlag() {
  state.flags[state.current] = !state.flags[state.current];
  renderQuestion();
  saveState();
}

function countAnswered() {
  let n = 0;
  questions.forEach((q, idx) => { if (isAnswered(q, state.answers[idx + 1])) n++; });
  return n;
}

function updateProgress() {
  const pct = countAnswered() / questions.length * 100;
  document.getElementById("progress-bar").style.width = pct + "%";
}

// ── question map modal ────────────────────────────────────────────────────────
function openMapModal() {
  updateGrid();
  document.getElementById("map-modal").style.display = "flex";
}

function closeMapModal() {
  document.getElementById("map-modal").style.display = "none";
}

// ── grid ──────────────────────────────────────────────────────────────────────
function buildGrid() {
  const grid = document.getElementById("q-grid");
  grid.innerHTML = "";
  for (let i = 1; i <= questions.length; i++) {
    const btn = document.createElement("button");
    btn.className = "grid-btn";
    btn.id = `gb-${i}`;
    btn.textContent = i;
    btn.addEventListener("click", () => {
      state.current = i;
      closeMapModal();
      renderQuestion();
    });
    grid.appendChild(btn);
  }
}

function updateGrid() {
  for (let i = 1; i <= questions.length; i++) {
    const btn = document.getElementById(`gb-${i}`);
    if (!btn) continue;
    btn.className = "grid-btn" +
      (state.answers[i]  ? " answered" : "") +
      (state.flags[i]    ? " flagged"  : "") +
      (state.current===i ? " active"   : "");
  }
}

// ── submit ────────────────────────────────────────────────────────────────────
function confirmSubmit() {
  const unanswered = questions.length - countAnswered();
  if (unanswered > 0) {
    alert(`You must answer all ${questions.length} questions before submitting.\n\n${unanswered} question${unanswered > 1 ? "s" : ""} still unanswered.\n\nTap "Question Map" to find unanswered questions.`);
    return;
  }
  if (confirm("Submit your exam now?")) submitExam();
}

function submitExam() {
  clearInterval(timerInterval);
  state.submitted = true;
  saveState();
  showResults();
}

// ── results ───────────────────────────────────────────────────────────────────
function showResults() {
  document.getElementById("app").style.display = "none";
  document.getElementById("results-screen").style.display = "flex";

  let correct = 0;
  const domainStats = {};
  questions.forEach((q, idx) => {
    const num = idx + 1;
    const userAns = state.answers[num];
    const isRight = isCorrectAnswer(q, userAns);
    if (isRight) correct++;
    const dom = q.domain || "Other";
    if (!domainStats[dom]) domainStats[dom] = { correct: 0, total: 0 };
    domainStats[dom].total++;
    if (isRight) domainStats[dom].correct++;
  });

  const pct  = Math.round(correct / questions.length * 100);
  const passed = pct >= PASSING_PCT;
  document.getElementById("res-status").textContent = passed ? "PASS" : "FAIL";
  document.getElementById("res-status").style.color = passed ? "#059669" : "#DC2626";
  document.getElementById("res-score").textContent  = `${correct} / ${questions.length} (${pct}%)`;

  const domDiv = document.getElementById("res-domains");
  domDiv.innerHTML = "";
  Object.entries(domainStats).forEach(([dom, s]) => {
    const dp = Math.round(s.correct / s.total * 100);
    domDiv.innerHTML += `<div class="res-domain-row">
      <span class="res-domain-name">${domainLabel(dom)}</span>
      <div class="res-domain-bar-wrap"><div class="res-domain-bar" style="width:${dp}%;background:#1B3A6B"></div></div>
      <span class="res-domain-pct">${dp}%</span>
    </div>`;
  });

  document.getElementById("res-review-btn").addEventListener("click", () => {
    state.submitted = true;
    document.getElementById("results-screen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    renderReview();
  });
  document.getElementById("res-restart-btn").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
}

function renderReview() {
  const ol = document.getElementById("options-list");
  const q  = questions[state.current - 1];
  if (!q) return;
  document.getElementById("q-counter").textContent = `Review — Question ${state.current} of ${questions.length}`;
  const scenarioBox = document.getElementById("scenario-box");
  if (q.scenario_text) {
    document.getElementById("scenario-label").textContent = q.scenario_title || "Scenario";
    document.getElementById("scenario-text").textContent = q.scenario_text;
    scenarioBox.style.display = "block";
  } else {
    scenarioBox.style.display = "none";
  }
  document.getElementById("question-text").textContent = q.question;
  const revImgWrap = document.getElementById("q-image-wrap");
  revImgWrap.innerHTML = "";
  revImgWrap.style.display = "none";
  ol.innerHTML = "";
  const userAns = state.answers[state.current];
  const wasRight = isCorrectAnswer(q, userAns);
  renderReviewBody(q, userAns, wasRight, ol);

  const box  = document.getElementById("explanation-box");
  const expl = document.getElementById("explanation-text");
  if (q.explanation) {
    expl.textContent = q.explanation;
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }

  document.getElementById("prev-btn").onclick = () => { navigate(-1); renderReview(); };
  document.getElementById("next-btn").onclick = () => { navigate(1);  renderReview(); };
}

// ── persistence ───────────────────────────────────────────────────────────────
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}
function restoreState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) { const s = JSON.parse(saved); Object.assign(state, s); }
  } catch(e) {}
}

// ── keyboard ──────────────────────────────────────────────────────────────────
function keyHandler(e) {
  // No letter shortcuts: this project's simulator pool is 100% point-and-click /
  // drag-and-drop items, which have no A/B/C/D options to select via keyboard.
  if (e.key === "ArrowRight" && state.current < questions.length) navigate(1);
  if (e.key === "ArrowLeft"  && state.current > 1)                navigate(-1);
  if (e.key === "Escape") closeMapModal();
}
