let salary = 0;
let expenses = 0;
let transactionCount = 0;
let daysUntilNextSalary = 30;
let alertThresholds = { 50: false, 75: false, 90: false };
let isDebtMode = false;

function startTracker() {
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    updateDaysLeft();
    updateDisplay();
}

function updateDaysLeft() {
    daysUntilNextSalary--;
    document.getElementById('daysLeft').textContent = daysUntilNextSalary;
}

function toggleLogin() {
    alert("Login option coming soon!");
}

function updateSalary() {
    salary = parseFloat(document.getElementById('salaryInput').value) || 0;
    updateDisplay();
}

function updateDisplay() {
    let remaining = salary - expenses;

    if (remaining < 0) {
        document.getElementById('remainingSalary').textContent = `Debt: $${Math.abs(remaining)}`;
        document.getElementById('remainingSalary').parentElement.classList.add('debt-mode');
        isDebtMode = true;
    } else {
        document.getElementById('remainingSalary').textContent = `$${remaining}`;
        document.getElementById('remainingSalary').parentElement.classList.remove('debt-mode');
        isDebtMode = false;
    }

    document.getElementById('totalTransactions').textContent = `${transactionCount}`;
}

function addPresetExpense(amount) {
    expenses += amount;
    transactionCount++;
    checkSalaryThresholds();
    addTransactionToHistory(amount);
    updateDisplay();
}

function addManualExpense() {
    const amount = parseFloat(document.getElementById('manualAmount').value) || 0;
    expenses += amount;
    transactionCount++;
    checkSalaryThresholds();
    addTransactionToHistory(amount);
    updateDisplay();
    document.getElementById('manualAmount').value = ''; // clear input
}

function addTransactionToHistory(amount) {
    const transaction = document.createElement('li');
    transaction.textContent = `Expense: $${amount}`;
    document.getElementById('transactionList').appendChild(transaction);
}

function checkSalaryThresholds() {
    const usedPercentage = (expenses / salary) * 100;

    if (usedPercentage >= 50 && usedPercentage < 75 && !alertThresholds[50]) {
        alert("You've used 50% of your salary!");
        alertThresholds[50] = true;
    } else if (usedPercentage >= 75 && usedPercentage < 90 && !alertThresholds[75]) {
        alert("You've used 75% of your salary!");
        alertThresholds[75] = true;
    } else if (usedPercentage >= 90 && !alertThresholds[90]) {
        alert("You've used 90% of your salary!");
        alertThresholds[90] = true;
    }
}
