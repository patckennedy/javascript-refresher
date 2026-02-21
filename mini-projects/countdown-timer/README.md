# ⏳ Countdown Timer

A simple JavaScript mini project that allows users to enter a number of seconds and start a live countdown.

Built as part of my **JavaScript Refresher** series to practice timing functions, state management, and dynamic UI updates.

---

## 🚀 Features

- Enter countdown time in seconds
- Start, pause, and reset controls
- Press **Enter** to start quickly
- Live `MM:SS` formatted display
- Button states update automatically
- Status messages (Paused, Time’s up!)
- Clean, centered card UI

---

## 🧠 What I Practiced

- Selecting DOM elements
- Handling click and keyboard events
- Using `setInterval()` and `clearInterval()`
- Managing application state with variables
- Writing reusable helper functions
- Formatting time with `padStart()`
- Input validation with user feedback
- Dynamic button state control
- Defensive programming to prevent duplicate intervals

---

## 📂 File Structure

```
countdown-timer/
│
├─ index.html   # Semantic UI structure
├─ style.css    # Layout and component styling
└─ script.js    # Countdown logic and state management
```

---

## ⚙️ How It Works

1. The user enters a number of seconds.
2. Input is validated before starting.
3. `setInterval()` runs a `tick()` function every second.
4. Remaining time updates and formats as `MM:SS`.
5. When time reaches zero:
    - The interval clears automatically.
    - Status updates to “Time’s up!”
    - Buttons reset accordingly.

---

## ⚠️ Note on Timer Accuracy

This timer uses `setInterval(1000)`.

While accurate for most everyday use cases, JavaScript timers may drift slightly due to:

- Browser throttling
- Background tab behavior
- Event loop delays

For production-level precision, timestamps (`Date.now()`) would typically be used.

---

✨ A focused mini project for learning **timing functions, state control, and structured JavaScript application logic.**
