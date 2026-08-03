// ===========================
// Select HTML Elements
// ===========================

const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');

// ===========================
// Store Total Expense
// ===========================

let total = 0;

// ===========================
// Add Expense
// ===========================

addExpenseBtn.addEventListener('click', addExpense);

function addExpense() {
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = Number(expenseAmountInput.value);

    // Check for empty inputs
    if (expenseName === '' || expenseAmountInput.value === '') {
        alert('Please enter an expense name and amount.');
        return;
    }

    // Prevent negative or zero amounts
    if (expenseAmount <= 0) {
        alert('Please enter an amount greater than zero.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    listItem.textContent = `${expenseName} - $${expenseAmount.toFixed(2)}`;

    // Add expense to the list
    expenseList.appendChild(listItem);

    // Update total
    total += expenseAmount;

    totalAmount.textContent = `$${total.toFixed(2)}`;

    // Clear the input fields
    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    // Place cursor back in the first input
    expenseNameInput.focus();
}
