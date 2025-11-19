const previewEl = document.getElementById("color-preview");
const codeEl = document.getElementById("color-code");
const newColorBtn = document.getElementById("new-color-btn");

// Create a random hex color like "#3FA8F2"
function getRandomHexColor() {
  const hexChars = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexChars.length);
    color += hexChars[index];
  }

  return color;
}

// Update the UI with a new color
function applyRandomColor() {
  const color = getRandomHexColor();
  previewEl.style.backgroundColor = color;
  codeEl.textContent = color;
}

// When button is clicked, generate a new color
newColorBtn.addEventListener("click", applyRandomColor);

// Show an initial random color on load
applyRandomColor();
