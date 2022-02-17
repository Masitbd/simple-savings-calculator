document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalExpenses = calculateExpense();
  document.getElementById("calculate-expense").innerText = totalExpenses;
  // calculateExpense.innerText = totalExpenses;
  const totalIncome = document.getElementById("income-field").value;
  const calculateBalance = balance(totalIncome, totalExpenses);
  //console.log(remainingBalance);
  document.getElementById("calculate-balance").innerText = calculateBalance;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const totalIncome = document.getElementById("income-field").value;
  const savingPercent = document.getElementById("saving-field").value;
  const calculateSaving = savings(totalIncome, savingPercent);
  console.log(calculateSaving);
  document.getElementById("saving-amount").innerText = calculateSaving;
  remainingBalance();
});

function calculateExpense() {
  const foodText = document.getElementById("food-field").value;
  const rentText = document.getElementById("rent-field").value;
  const othersText = document.getElementById("others-field").value;
  const totalExpense =
    parseFloat(foodText) + parseFloat(rentText) + parseFloat(othersText);
  return totalExpense;
}

function remainingBalance() {
  const balanceText = document.getElementById("calculate-balance").innerText;
  const savingText = document.getElementById("saving-amount").innerText;
  console.log(balanceText, savingText);
  document.getElementById("remaining-field").innerText =
    parseFloat(balanceText) - parseFloat(savingText);
}

function balance(income, expense) {
  const remaining = income - expense;
  return remaining;
}

function savings(amount, percent) {
  const savings = (amount * percent) / 100;
  return savings;
}

function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
