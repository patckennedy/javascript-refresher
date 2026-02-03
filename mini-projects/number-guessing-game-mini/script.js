const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const messageEl = document.getElementById('message');

// Generate a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

function setMessage(text) {
    messageEl.textContent = text;
}

function checkGuess() {
    const guess = Number(guessInput.value);

    // Validate input
    if (!guess || guess < 1 || guess > 10) {
        setMessage('Please enter a number between 1 and 10.');
        return;
    }

    // Compare guess to secret number
    if (guess === secretNumber) {
        setMessage('✅ Correct! You guessed it!');
    } else if (guess < secretNumber) {
        setMessage('⬇️ Too low. Try again!');
    } else {
        setMessage('⬆️ Too high. Try again!');
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    guessInput.value = '';
    setMessage('Game reset. Make a guess!');
}

// Event listeners
checkBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
