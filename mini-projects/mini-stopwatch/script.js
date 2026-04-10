// Get elements
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

// Format time (mm:ss.ms)
function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return (
        String(minutes).padStart(2, '0') +
        ':' +
        String(seconds).padStart(2, '0') +
        '.' +
        String(milliseconds).padStart(2, '0')
    );
}

// Update display
function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
}

// Start
startBtn.addEventListener('click', () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);

    startBtn.disabled = true;
    stopBtn.disabled = false;
});

// Stop
stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);

    startBtn.disabled = false;
    stopBtn.disabled = true;
});

// Reset
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);

    startTime = 0;
    elapsedTime = 0;
    timeDisplay.textContent = '00:00.00';

    startBtn.disabled = false;
    stopBtn.disabled = true;
});
