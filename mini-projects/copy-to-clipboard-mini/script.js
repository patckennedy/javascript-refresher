const textInput = document.getElementById('text-input');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const statusEl = document.getElementById('status');

async function copyText() {
    const text = textInput.value.trim();

    if (!text) {
        statusEl.textContent = 'Nothing to copy.';
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        statusEl.textContent = 'Copied to clipboard!';
    } catch (error) {
        statusEl.textContent = 'Copy failed. Try again.';
    }
}

function clearText() {
    textInput.value = '';
    statusEl.textContent = 'Text cleared.';
}

copyBtn.addEventListener('click', copyText);
clearBtn.addEventListener('click', clearText);
