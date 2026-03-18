console.log('Script loaded');

// Select elements
const input = document.getElementById('number-input');
const button = document.getElementById('analyze-btn');
const evenOutput = document.getElementById('even-output');
const oddOutput = document.getElementById('odd-output');

button.addEventListener('click', () => {
    let numbers = input.value.split(',').map(Number);

    let evenNumbers = [];
    let oddNumbers = [];

    for (let n of numbers) {
        if (n % 2 === 0) {
            evenNumbers.push(n);
        } else {
            oddNumbers.push(n);
        }
    }

    evenOutput.textContent = evenNumbers.join(', ');
    oddOutput.textContent = oddNumbers.join(', ');
});
