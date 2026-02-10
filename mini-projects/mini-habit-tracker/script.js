const daysContainer = document.getElementById('days');
const streakEl = document.getElementById('streak');
const resetBtn = document.getElementById('reset-btn');
const statusEl = document.getElementById('status');

const STORAGE_KEY = 'mini-habit-tracker-days';

// Load saved state (array of day names)
function loadSavedDays() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
}

// Save state
function saveDays(daysArray) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daysArray));
}

// Update streak UI
function updateStreak() {
    const doneCount = document.querySelectorAll('.day.done').length;
    streakEl.textContent = doneCount;
}

// Apply saved state to buttons
function applySavedDays(savedDays) {
    const dayButtons = document.querySelectorAll('.day');

    dayButtons.forEach((btn) => {
        const day = btn.dataset.day;
        if (savedDays.includes(day)) {
            btn.classList.add('done');
        } else {
            btn.classList.remove('done');
        }
    });

    updateStreak();
}

// Toggle day done/undone
function toggleDay(button) {
    button.classList.toggle('done');

    const day = button.dataset.day;
    const savedDays = loadSavedDays();

    if (button.classList.contains('done')) {
        // Add if not already included
        if (!savedDays.includes(day)) savedDays.push(day);
        statusEl.textContent = `${day} marked as done ✅`;
    } else {
        // Remove it
        const updated = savedDays.filter((d) => d !== day);
        saveDays(updated);
        updateStreak();
        statusEl.textContent = `${day} unmarked`;
        return;
    }

    saveDays(savedDays);
    updateStreak();
}

// Click handler (event delegation)
daysContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.day');
    if (!button) return;

    toggleDay(button);
});

// Reset everything
resetBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);

    document.querySelectorAll('.day').forEach((btn) => {
        btn.classList.remove('done');
    });

    updateStreak();
    statusEl.textContent = 'Week reset.';
});

// Load saved progress on page load
const savedDays = loadSavedDays();
applySavedDays(savedDays);
