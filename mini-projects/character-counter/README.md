# ✍️ Character Counter Mini Project

# ✍️ Character Counter Mini Project

A clean and interactive JavaScript mini project that counts characters and words in real time while enforcing a maximum character limit.

---

## 📁 Project Overview

This project is part of my **JavaScript Refresher** series.

It focuses on strengthening core front-end fundamentals:

- DOM manipulation  
- Event handling  
- Conditional logic  
- Dynamic UI updates  

The project is intentionally small but structured like real-world code.

---

## 🚀 Features

- ✅ Live character counter (updates as you type)
- ✅ Word counter (ignores extra spaces)
- ✅ Enforced character limit using `maxlength`
- ✅ Visual warning when within 10 characters of the limit
- ✅ Clean, responsive layout
- ✅ Structured and readable JavaScript

---

## 🧠 What I Practiced

- Selecting DOM elements with `document.getElementById()`
- Listening for real-time input using the `"input"` event
- Measuring text length using `.value.length`
- Counting words using `.trim()` and `.split(/\s+/)`
- Updating UI dynamically with `.textContent`
- Toggling CSS classes using `.classList.add()` and `.remove()`
- Using constants (`MAX_CHARS`, `WARNING_THRESHOLD`) for cleaner logic
- Separating structure (HTML), style (CSS), and behavior (JS)

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
3. Start typing in the text box.
4. Watch the character and word count update live.

## 📚 Practice Focus

This project reinforces:

- Live UI feedback
- Event-driven programming
- Clean function structure
- Real-world UX considerations

It demonstrates practical front-end fundamentals in a simple but scalable way.