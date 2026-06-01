const scoreInput = document.getElementById('score');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function () {
    const score = Number(scoreInput.value);

    if (score < 0 || score > 100 || isNaN(score)) {
        result.textContent = 'Please enter a valid score between 0 and 100.';
        return;
    }

    let grade = '';

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    result.textContent = `Your grade is ${grade}`;
});
