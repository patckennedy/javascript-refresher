const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const displayEl = document.getElementById('display');
const statusEl = document.getElementById('status');

let remaining = 0; // seconds
let timerId = null; // interval id
let running = false; // state flag

function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateDisplay() {
    displayEl.textContent = formatTime(remaining);
}

function setButtons() {
    startBtn.disabled = running || remaining <= 0;
    pauseBtn.disabled = !running;
    resetBtn.disabled = remaining <= 0 && !running;
}

function tick() {
    if (remaining > 0) {
        remaining -= 1;
        updateDisplay();
        if (remaining === 0) {
            clearInterval(timerId);
            timerId = null;
            running = false;
            statusEl.textContent = 'Time’s up!';
            statusEl.classList.add('done');
            setButtons();
        }
    }
}

// Start
startBtn.addEventListener("click", () => {
  // If not started yet, initialize from input
  if (!running && remaining === 0) {
    const secs = parseInt(secondsInput.value, 10);
    if (isNaN(secs) || secs <= 0) {
      statusEl.textContent = "Enter a valid number of seconds.";
      return;
    }
    remaining = secs;
    statusEl.textContent = "";
    statusEl.classList.remove("done");
    updateDisplay();
  }

  if (!running && remaining > 0) {
    running = true;
    timerId = setInterval(tick, 1000);
    setButtons();
  }
});

// Pause
pauseBtn.addEventListener("click", () => {
  if (running) {
    clearInterval(timerId);
    timerId = null;
    running = false;
    statusEl.textContent = "Paused";
    setButtons();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  running = false;
  remaining = 0;
  updateDisplay();
  statusEl.textContent = "";
  statusEl.classList.remove("done");
  setButtons();
});

// Keep UI in sync initially
updateDisplay();
setButtons();