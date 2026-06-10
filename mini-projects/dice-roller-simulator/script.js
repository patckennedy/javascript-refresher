const rollBtn = document.getElementById('rollBtn');
const result = document.getElementById('result');

rollBtn.addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    result.textContent = `🎲 You rolled a ${diceRoll}`;
});
