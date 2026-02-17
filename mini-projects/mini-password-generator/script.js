const output = document.getElementById('password-output');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lengthInput = document.getElementById('length');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const statusEl = document.getElementById('status');

const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-={}[]:;,.?';

function buildCharacterSet() {
    let chars = LETTERS;

    if (includeNumbers.checked) chars += NUMBERS;
    if (includeSymbols.checked) chars += SYMBOLS;

    return chars;
}

function generatePassword(length, chars) {
    let result = '';

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        result += chars[index];
    }

    return result;
}

function handleGenerate() {
    statusEl.textContent = '';
    const length = Number(lengthInput.value);
    const chars = buildCharacterSet();

    if (!chars || chars.length === 0) {
        statusEl.textContent = 'Please select at least one option.';
        return;
    }

    if (Number.isNaN(length) || length < 6 || length > 24) {
        statusEl.textContent = 'Length must be between 6 and 24.';
        return;
    }

    const password = generatePassword(length, chars);
    output.value = password;
    statusEl.textContent = 'Password generated!';
}

async function handleCopy() {
    const text = output.value;

    if (!text || text === 'Click Generate') {
        statusEl.textContent = 'Generate a password first.';
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        statusEl.textContent = 'Copied to clipboard!';
    } catch (err) {
        statusEl.textContent = 'Copy failed. Try manually selecting the text.';
    }
}

generateBtn.addEventListener('click', handleGenerate);
copyBtn.addEventListener('click', handleCopy);
