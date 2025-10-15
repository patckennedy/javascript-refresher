# ✍️ Character Counter Mini Project

A simple JavaScript project that counts the number of characters a user types into a text area — updating the count in real time and showing a warning when the limit is exceeded.

---

## 📁 Project Overview

This mini project is part of my **JavaScript Refresher** series.  
It focuses on practicing DOM manipulation, event handling, and basic logic in a clean, beginner-friendly way.

---

## 🚀 Features

-   ✅ Live character counting as you type
-   ✅ Displays total characters typed and maximum allowed
-   ✅ Adds a warning style when the character limit is exceeded
-   ✅ Simple, clean HTML/CSS/JS setup — perfect for beginners

---

## 🧠 What I Learned

-   Selecting and interacting with DOM elements using `document.getElementById()`
-   Handling user input with the `"input"` event listener
-   Using `.value.length` to measure text length
-   Dynamically updating text content with `.textContent`
-   Toggling CSS classes based on conditions with `.classList.add()` / `.remove()`

---

## 📂 File Structure

```
character-counter-mini/
│
├─ index.html # Basic structure and textarea
├─ style.css # Styling and warning state
└─ script.js # Character counting logic
```

---

## 💡 How to Run

1. Clone or download this folder.
2. Open `index.html` in your browser.
3. Start typing in the text box — watch the counter update live!

---

## 🧪 Example Output

-   When typing fewer than 100 characters:  
    `42 / 100`
-   When exceeding the limit:  
    `105 / 100` _(text turns red to warn the user)_

---

## 🔁 Possible Improvements

-   Add a custom input to change the character limit
-   Show remaining characters instead of total used
-   Disable typing beyond the limit

---

### 📚 Practice Focus

This project is intentionally small and beginner-friendly — it’s all about building muscle memory for **DOM selection, events, and live UI updates**.
