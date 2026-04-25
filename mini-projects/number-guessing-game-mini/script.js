const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const messageEl = document.getElementById('message');

// Game state
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function setMessage(text, color = '#9ca3af') {
    messageEl.textContent = text;
    messageEl.style.color = color;
}

function checkGuess() {
    const guess = Number(guessInput.value);

    // Validate input (FIXED)
    if (guessInput.value === '' || guess < 1 || guess > 10) {
        setMessage('Enter a valid number (1–10)', '#facc15');
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        setMessage(`🎉 Correct! You got it in ${attempts} tries!`, '#22c55e');
        checkBtn.disabled = true; // lock game
    } else if (guess < secretNumber) {
        setMessage(`⬇ Too low! Attempts: ${attempts}`, '#60a5fa');
    } else {
        setMessage(`⬆Too high! Attempts: ${attempts}`, '#60a5fa');
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    guessInput.value = '';
    checkBtn.disabled = false;

    setMessage('Game reset. Make a guess!');
}

// Event listeners
checkBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
