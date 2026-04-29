const gradientBox = document.getElementById('gradient-box');
const gradientCode = document.getElementById('gradient-code');
const generateBtn = document.getElementById('generate-btn');

// NEW: Generate HEX color instead of RGB
function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
}

// Generate gradient
function generateGradient() {
    const color1 = getRandomHexColor();
    const color2 = getRandomHexColor();
    const angle = Math.floor(Math.random() * 360);

    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    gradientBox.style.background = gradient;
    gradientCode.textContent = gradient;
}

// NEW: Copy to clipboard feature
gradientCode.addEventListener('click', () => {
    const text = gradientCode.textContent;

    navigator.clipboard
        .writeText(text)
        .then(() => {
            gradientCode.textContent = 'Copied! ✅';
            setTimeout(() => {
                generateGradient();
            }, 1000);
        })
        .catch(() => {
            alert('Failed to copy.');
        });
});

// Generate one gradient on page load
generateGradient();

// Generate new gradient on button click
generateBtn.addEventListener('click', generateGradient);
