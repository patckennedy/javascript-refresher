// Grab the elements we’ll update
const buttons = document.querySelectorAll('.buttons button');
const moodEmoji = document.getElementById('mood-emoji');
const moodTitle = document.getElementById('mood-title');
const moodText = document.getElementById('mood-text');

// Simple mood data
const moods = {
    happy: {
        emoji: '😊',
        title: 'Happy',
        text: 'Feeling light, cheerful, and positive. A great moment to enjoy the little things.',
        bodyClass: 'mood-happy',
    },
    calm: {
        emoji: '😌',
        title: 'Calm',
        text: 'Relaxed and peaceful. A good time to breathe and slow down.',
        bodyClass: 'mood-calm',
    },
    energetic: {
        emoji: '⚡',
        title: 'Energetic',
        text: 'Full of energy and ready to take action. Perfect for focused work.',
        bodyClass: 'mood-energetic',
    },
    tired: {
        emoji: '😴',
        title: 'Tired',
        text: 'Low energy and ready to rest. Time to unplug and recharge.',
        bodyClass: 'mood-tired',
    },
};

// Function to update the UI based on a mood name
function setMood(name) {
    const mood = moods[name];
    if (!mood) return;

    // Update text and emoji
    moodEmoji.textContent = mood.emoji;
    moodTitle.textContent = mood.title;
    moodText.textContent = mood.text;

    // Remove any existing mood classes from body
    // Remove any existing mood classes dynamically
    document.body.classList.forEach((className) => {
        if (className.startsWith('mood-')) {
            document.body.classList.remove(className);
        }
    });

    // Add the new mood class
    document.body.classList.add(mood.bodyClass);
}

// Add click listeners to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const moodName = button.dataset.mood;

        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        setMood(moodName);
    });
});

// Set a default mood on first load
setMood('happy');
