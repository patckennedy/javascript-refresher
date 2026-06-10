# 🎲 Dice Roller Simulator

A simple JavaScript mini project that simulates rolling a six-sided dice with the click of a button.

Built as part of my **JavaScript Refresher** series to practice random number generation, event handling, and dynamic DOM updates.

---

## 🚀 Features

- Roll a virtual six-sided dice
- Generate a random number from 1 to 6
- Instant result display
- Clean and centered card layout
- Beginner-friendly JavaScript logic
- Interactive button click functionality

---

## 🧠 What I Practiced

- Selecting DOM elements with `getElementById()`
- Handling button click events with `addEventListener()`
- Generating random numbers with `Math.random()`
- Rounding numbers with `Math.floor()`
- Updating page content dynamically with `textContent`
- Using template literals for dynamic messages
- Writing simple event-driven JavaScript
- Connecting user actions to UI updates

---

## 📂 File Structure

```text
dice-roller-simulator/
│
├─ index.html   # Semantic UI structure
├─ style.css    # Layout and component styling
└─ script.js    # Dice rolling logic
```

---

## ⚙️ How It Works

1. The user clicks the **Roll Dice** button.
2. JavaScript generates a random decimal using `Math.random()`.
3. The decimal is converted into a whole number between 1 and 6.
4. The result is displayed instantly on the page.
5. Each button click generates a new random dice roll.

---

## 🎲 Random Number Formula

The dice value is generated using:

```javascript
Math.floor(Math.random() * 6) + 1;
```

### Breakdown

- `Math.random()` generates a random decimal from 0 to less than 1.
- Multiplying by `6` creates a range from 0 to less than 6.
- `Math.floor()` rounds the value down.
- Adding `1` shifts the range from 1–6.

Possible outcomes:

```text
1
2
3
4
5
6
```

---

## ⚠️ Note on Randomness

This project uses JavaScript's built-in pseudo-random number generator through `Math.random()`.

While suitable for games, simulations, and learning projects, it should not be used for:

- Cryptography
- Security applications
- Gambling systems
- Sensitive randomization requirements

For those use cases, stronger randomness methods would be required.

---

✨ A focused mini project for learning **random number generation, event handling, and dynamic DOM manipulation with JavaScript.**