const gradientBox = document.getElementById('gradient-box');
const gradientCode = document.getElementById('gradient-code');
const generateBtn = document.getElementById('generate-btn');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function generateGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);

    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    gradientBox.style.background = gradient;
    gradientCode.textContent = gradient;
}

// Generate one gradient on page load
generateGradient();

// Generate new gradient on button click
generateBtn.addEventListener('click', generateGradient);
