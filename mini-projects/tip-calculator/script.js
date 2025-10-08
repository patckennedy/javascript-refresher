// console.log('Tip Calculator Ready1');

function tipCalculator(bill, tipPrecent) {
    if (isNaN(bill) || isNaN(tipPrecent) || bill < 0 || tipPrecent < 0)
        return NaN;
    const tip = bill * (tipPrecent / 100);
    const total = bill + tip;
    return { tip, total };
}

// UI
const billInput = document.getElementById('bill');
const tipPercentInput = document.getElementById('tipPercent');
const calculateButton = document.getElementById('calculate');
const result = document.getElementById('result');

calculateButton.addEventListener('click', function () {
    const bill = Number(billInput.value);
    const tipPercent = Number(tipPercentInput.value);

    const values = tipCalculator(bill, tipPercent);
    if (Number.isNaN(values)) {
        result.textContent = 'Please enter valid positive numbers.';
        return;
    }
});
