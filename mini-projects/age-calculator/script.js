// =====================================
// SELECT PAGE ELEMENTS
// =====================================

const birthDateInput = document.getElementById('birthDate');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');

// =====================================
// CALCULATE AGE
// =====================================

function calculateAge() {
    // Get the value entered by the user
    const birthDateValue = birthDateInput.value;

    // Make sure the user selected a date
    if (birthDateValue === '') {
        result.textContent = 'Please select your date of birth.';
        return;
    }

    // Create Date objects
    const today = new Date();
    const birthDate = new Date(birthDateValue);

    // Calculate the age in years
    let age = today.getFullYear() - birthDate.getFullYear();

    // Get the current month/day and birth month/day
    const currentMonth = today.getMonth();
    const birthMonth = birthDate.getMonth();

    const currentDay = today.getDate();
    const birthDay = birthDate.getDate();

    // Check if the birthday has happened yet this year
    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ) {
        age--;
    }

    // Prevent future dates
    if (age < 0) {
        result.textContent = 'Please choose a valid date.';
        return;
    }

    // Display the result
    result.textContent = `You are ${age} year${age !== 1 ? 's' : ''} old.`;
}

// =====================================
// EVENT LISTENER
// =====================================

// Run the calculation when the button is clicked
calculateButton.addEventListener('click', calculateAge);
