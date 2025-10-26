// Select the toggle button
const toggleBtn = document.getElementById('toggle-btn');

// When the button is clicked, toggle the dark mode class on <body>
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the user's preference
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// On page load, check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}
