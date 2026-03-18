console.log('Script loaded');

// Select elements
const input = document.getElementById('number-input');
const button = document.getElementById('analyze-btn');
const evenOutput = document.getElementById('even-output');
const oddOutput = document.getElementById('odd-output');

button.addEventListener('click', () => {
    let rawInput = input.value.trim();

    // Handle empty input
    if (rawInput === '') {
        evenOutput.textContent = '';
        oddOutput.textContent = '';
        return;
    }

    let numbers;

    // Support both comma-separated and continuous input
    if (rawInput.includes(',')) {
        numbers = rawInput.split(',').map((num) => Number(num.trim()));
    } else {
        numbers = rawInput.split('').map((num) => Number(num));
    }

    // Remove invalid values
    numbers = numbers.filter((n) => !isNaN(n));

    let evenNumbers = [];
    let oddNumbers = [];

    for (let n of numbers) {
        if (n % 2 === 0) {
            evenNumbers.push(n);
        } else {
            oddNumbers.push(n);
        }
    }

    // Display results
    evenOutput.textContent = evenNumbers.join(', ');
    oddOutput.textContent = oddNumbers.join(', ');
});
