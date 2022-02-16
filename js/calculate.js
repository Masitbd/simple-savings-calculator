document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalExpenses = calculateExpense();
  document.getElementById("calculate-expense").innerText = totalExpenses;
  // calculateExpense.innerText = totalExpenses;
  const totalIncome = document.getElementById("income-field").value;
  const remainingBalance = balance(totalIncome, totalExpenses);
  console.log(remainingBalance);
});

function calculateExpense() {
  const foodText = document.getElementById("food-field").value;
  const rentText = document.getElementById("rent-field").value;
  const othersText = document.getElementById("others-field").value;
  const totalExpense =
    parseFloat(foodText) + parseFloat(rentText) + parseFloat(othersText);
  return totalExpense;
}

function balance(income, expense) {
  const remaining = income - expense;
  return remaining;
}
