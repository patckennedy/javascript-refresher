// Get references to elements we will update
const buttons = document.querySelectorAll('.buttons button');
const weatherEmoji = document.getElementById('weather-emoji');
const weatherTitle = document.getElementById('weather-title');
const weatherText = document.getElementById('weather-text');


// Simple data for each theme
const themes = {
  sunny: {
    emoji: "☀️",
    title: "Sunny",
    text: "Bright and warm. A perfect day to go outside.",
    bodyClass: "sunny-theme"
  },
  cloudy: {
    emoji: "☁️",
    title: "Cloudy",
    text: "Soft light and gray skies. A cozy day for reading.",
    bodyClass: "cloudy-theme"
  },
  night: {
    emoji: "🌙",
    title: "Night",
    text: "Calm and quiet. Time to relax and recharge.",
    bodyClass: "night-theme"
  }
};

// Apply a theme by key: "sunny", "cloudy", or "night"
function setTheme(name) {
  const theme = themes[name];
  if (!theme) return;

  // Update card content
  weatherEmoji.textContent = theme.emoji;
  weatherTitle.textContent = theme.title;
  weatherText.textContent = theme.text;

  // Remove old theme classes from body
  document.body.classList.remove("sunny-theme", "cloudy-theme", "night-theme");
  // Add the new one
  document.body.classList.add(theme.bodyClass);
}

// When a button is clicked, switch theme
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const themeName = btn.dataset.theme;
    setTheme(themeName);
  });
});

// Set an initial theme
setTheme("sunny");