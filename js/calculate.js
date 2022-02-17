document.getElementById("calculate-btn").addEventListener("click", function () {
  required();
  const totalExpenses = calculateExpense();
  document.getElementById("calculate-expense").innerText = isNaN(totalExpenses)
    ? 0
    : totalExpenses;
  const totalIncome = document.getElementById("income-field").value;
  const calculateBalance = balance(totalIncome, totalExpenses);
  document.getElementById("calculate-balance").innerText = isNaN(
    calculateBalance
  )
    ? 0
    : calculateBalance;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const totalIncome = document.getElementById("income-field").value;
  const savingPercent = document.getElementById("saving-field").value;
  const balanceText = document.getElementById("calculate-balance").innerText;
  const balanceAmount = parseFloat(balanceText);
  const calculateSaving = savings(totalIncome, savingPercent);
  console.log(calculateSaving);
  if (balanceAmount > calculateSaving) {
    document.getElementById("saving-amount").innerText = calculateSaving;
    remainingBalance();
  } else {
    alert("Balance must be greater than saving amount");
  }
});

function calculateExpense() {
  const foodText = document.getElementById("food-field").value;
  const rentText = document.getElementById("rent-field").value;
  const othersText = document.getElementById("others-field").value;
  const totalExpense =
    parseFloat(isNaN(foodText) ? 0 : foodText) +
    parseFloat(isNaN(rentText) ? 0 : rentText) +
    parseFloat(isNaN(othersText) ? 0 : othersText);
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
  if (income > expense) {
    document.getElementById("notify-fail").style.display = "none";
    const remaining = income - expense;
    return remaining;
  } else if (!income.length == 0 && !isNaN(expense)) {
    document.getElementById("notify-fail").style.display = "block";
  }
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

function required() {
  if (document.getElementById("income-field").value.length == 0) {
    alert("Income field is empty");
  } else if (document.getElementById("food-field").value.length == 0) {
    document.getElementById("food-field").value = 0;
  } else if (document.getElementById("rent-field").value.length == 0) {
    document.getElementById("rent-field").value = 0;
  } else if (document.getElementById("others-field").value.length == 0) {
    document.getElementById("others-field").value = 0;
  }
}
