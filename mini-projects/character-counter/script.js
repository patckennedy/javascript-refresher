console.log('Character Counter is ready!');

const textarea = document.getElementById('textInput');
const counter = document.getElementById('counter');

const MAX_CHARS = 100;
const WARNING_THRESHOLD = 10;

textarea.addEventListener('input', updateCounter);

function updateCounter() {
    const text = textarea.value;
    const length = text.length;

    // Word count (ignores extra spaces)
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    counter.textContent = `${length} / ${MAX_CHARS} characters | ${words} words`;

    // Add warning class when near limit
    if (length >= MAX_CHARS - WARNING_THRESHOLD) {
        counter.classList.add('warning');
    } else {
        counter.classList.remove('warning');
    }
}

// Initialize on page load
updateCounter();
