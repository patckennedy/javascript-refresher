const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const preview = document.getElementById('preview');
const colorCode = document.getElementById('color-code');

// Update the color preview and text
function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    const rgb = `rgb(${r}, ${g}, ${b})`;

    preview.style.backgroundColor = rgb;
    colorCode.textContent = rgb;
}

// Attach event listener to each slider
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Set initial color when page loads
updateColor();