// Select elements
const noteInput = document.getElementById('note-input');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const status = document.getElementById('status');

// Load saved note on page load
window.addEventListener('DOMContentLoaded', loadNote);

// Save note
saveBtn.addEventListener('click', saveNote);

// Clear note
clearBtn.addEventListener('click', clearNote);

// Function: Save Note
function saveNote() {
    const note = noteInput.value.trim();

    if (note === '') {
        showStatus('Cannot save empty note ❌');
        return;
    }

    localStorage.setItem('note', note);
    showStatus('Note saved ✅');
}

// Function: Load Note
function loadNote() {
    const savedNote = localStorage.getItem('note');

    if (savedNote) {
        noteInput.value = savedNote;
        showStatus('Note loaded 📂');
    }
}

// Function: Clear Note
function clearNote() {
    localStorage.removeItem('note');
    noteInput.value = '';
    showStatus('Note cleared 🗑️');
}

// Function: Show Status Message
function showStatus(message) {
    status.textContent = message;

    setTimeout(() => {
        status.textContent = '';
    }, 2000);
}
