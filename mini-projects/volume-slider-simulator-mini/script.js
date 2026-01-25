const slider = document.getElementById('volume-slider');
const valueEl = document.getElementById('volume-value');
const iconEl = document.getElementById('volume-icon');



function updateVolume() {
    const volume = Number(slider.value);

    // Update the text
    valueEl.textContent = `${volume}%`;

    // Update the icon based on volume level
    if (volume === 0) {
        iconEl.textContent = '🔇';
    } else if (volume <= 50) {
        iconEl.textContent = '🔉';
    } else {
        iconEl.textContent = '🔊';
    }
}

// Run once on page load
updateVolume();

// Update live as user moves the slider
slider.addEventListener('input', updateVolume);