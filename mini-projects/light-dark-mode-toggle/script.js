document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button
    const toggleBtn = document.getElementById('toggle-btn');

    const body = document.body;
    const modeText = document.getElementById('mode-text');

    function updateUI(isDark) {
        toggleBtn.textContent = isDark
            ? 'Switch to Light ☀️'
            : 'Switch to Dark 🌙';

        if (modeText) {
            modeText.textContent = isDark
                ? 'Current Mode: Dark'
                : 'Current Mode: Light';
        }
    }
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        updateUI(isDark);
    });

    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';

    if (isDark) {
        body.classList.add('dark-mode');
    }

    updateUI(isDark);
});
