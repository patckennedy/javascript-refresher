const textInput = document.getElementById('text-input');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const statusEl = document.getElementById('status');
copyBtn.disabled = true;

async function copyText() {
    const text = textInput.value.trim();

    if (!text) {
        statusEl.textContent = 'Nothing to copy.';
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        statusEl.textContent = 'Copied to clipboard!';

        setTimeout(() => {
            statusEl.textContent = '';
        }, 2000);
    } catch (error) {
        statusEl.textContent = 'Copy failed. Try again.';

        setTimeout(() => {
            statusEl.textContent = '';
        }, 2000);
    }
}

function clearText() {
    textInput.value = '';
    statusEl.textContent = 'Text cleared.';

    setTimeout(() => {
        statusEl.textContent = '';
    }, 2000);
}

copyBtn.addEventListener('click', copyText);
clearBtn.addEventListener('click', clearText);

textInput.addEventListener('input', () => {
    const hasText = textInput.value.trim().length > 0;
    copyBtn.disabled = !hasText;
});
