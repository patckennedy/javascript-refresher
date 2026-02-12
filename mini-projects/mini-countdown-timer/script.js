const dateInput = document.getElementById('date-input');
const startBtn = document.getElementById('start-btn');
const statusEl = document.getElementById('status');

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');

let timerId = null;

function updateDisplay(totalMs) {
    const totalMinutes = Math.floor(totalMs / 60000);
    const totalHours = Math.floor(totalMs / 3600000);
    const totalDays = Math.floor(totalMs / 86400000);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;

    daysEl.textContent = totalDays;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
}

function stopTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}

function startCountdown() {
    const selectedValue = dateInput.value;

    if (!selectedValue) {
        statusEl.textContent = 'Please select a date and time.';
        return;
    }

    const targetTime = new Date(selectedValue).getTime();

    if (Number.isNaN(targetTime)) {
        statusEl.textContent = 'Invalid date. Try again.';
        return;
    }

    stopTimer();

    function tick() {
        const now = Date.now();
        const diff = targetTime - now;

        if (diff <= 0) {
            updateDisplay(0);
            statusEl.textContent = stopTimer();
            return;
        }

        updateDisplay(diff);
        statusEl.textContent = 'Countdown running...';
    }

    tick();
    timerId = setInterval(tick, 1000);
}

startBtn.addEventListener('click', startCountdown);
