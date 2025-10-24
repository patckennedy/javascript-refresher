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
