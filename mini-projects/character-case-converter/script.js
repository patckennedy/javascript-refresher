// =========================
// Select HTML Elements
// =========================

const textInput = document.getElementById('text-input');
const uppercaseButton = document.getElementById('uppercase-btn');
const lowercaseButton = document.getElementById('lowercase-btn');
const capitalizeButton = document.getElementById('capitalize-btn');
const clearButton = document.getElementById('clear-btn');
const outputText = document.getElementById('output-text');

// =========================
// Convert to Uppercase
// =========================

uppercaseButton.addEventListener('click', function () {
    const userText = textInput.value;

    outputText.textContent = userText.toUpperCase();
});

// =========================
// Convert to Lowercase
// =========================

lowercaseButton.addEventListener('click', function () {
    const userText = textInput.value;

    outputText.textContent = userText.toLowerCase();
});

// =========================
// Capitalize Each Word
// =========================

capitalizeButton.addEventListener('click', function () {
    const userText = textInput.value;

    const words = userText.toLowerCase().split(' ');

    const capitalizedWords = words.map(function (word) {
        if (word.length === 0) {
            return word;
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    outputText.textContent = capitalizedWords.join(' ');
});

// =========================
// Clear Text
// =========================

clearButton.addEventListener('click', function () {
    textInput.value = '';
    outputText.textContent = 'Your converted text will appear here.';

    textInput.focus();
});
