console.log('character count is ready!');

const textarea = document.getElementById('textInput');
const counter = document.getElementById('counter');

const MAX_CHARS = 100;

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    counter.textContent = `${length} / ${MAX_CHARS}`;

    // Change color if user is near or over the limit
    if (length > MAX_CHARS) {
        counter.classList.add('warning');
    } else {
        counter.classList.remove('warning');
    }
});
