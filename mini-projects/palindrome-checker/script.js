const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

button.addEventListener('click', function () {
    let text = input.value;

    // remove spaces and lowercase
    let cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === '') {
        result.textContent = 'Please enter a word.';
        return;
    }

    if (cleanedText === reversedText) {
        result.textContent = "Yes, it's a palindrome!";
    } else {
        result.textContent = 'Not a palindrome.';
    }
});
