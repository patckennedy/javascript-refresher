const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const preview = document.getElementById('preview');
const colorCode = document.getElementById('color-code');

const sliders = [redSlider, greenSlider, blueSlider];

// Convert RGB values to HEX
function rgbToHex(r, g, b) {
    const red = Number(r).toString(16).padStart(2, '0');
    const green = Number(g).toString(16).padStart(2, '0');
    const blue = Number(b).toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}

// Update the color preview and text
function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b);

    preview.style.backgroundColor = rgb;

    colorCode.textContent = `${rgb} | ${hex}`;
}

// Attach event listener to each slider
sliders.forEach((slider) => {
    slider.addEventListener('input', updateColor);
});

// Set initial color when page loads
updateColor();
