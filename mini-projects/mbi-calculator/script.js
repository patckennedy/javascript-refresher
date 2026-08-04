// ==========================================
// SELECT HTML ELEMENTS
// ==========================================

const bmiForm = document.getElementById('bmi-form');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');

// ==========================================
// CALCULATE BMI WHEN THE FORM IS SUBMITTED
// ==========================================

bmiForm.addEventListener('submit', function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the user's input values
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    // Convert height from centimeters to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the BMI rounded to one decimal place
    bmiValue.textContent = `BMI: ${bmi.toFixed(1)}`;

    // Determine the BMI category
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal Weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display the BMI category
    bmiCategory.textContent = `Category: ${category}`;
});
