const flipButton = document.getElementById('flip-btn');
const result = document.getElementById('result');
const coin = document.getElementById('coin');

flipButton.addEventListener('click', function () {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
        coin.textContent = '😀';
        result.textContent = 'Heads!';
    } else {
        coin.textContent = '🦅';
        result.textContent = 'Tails!';
    }
});
