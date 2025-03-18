class Entry {
  constructor(amount = 0, category = "", date = new Date(), type = "") {
    this.amount = amount;
    this.category = category;
    this.date = date;
    this.type = type;
  }

  loadAmount() {
    return {
      first: localStorage.getItem("totalBudget") || 0,
      second: localStorage.getItem("totalBalance") || 0,
    };
  }

  loadInputs() {
    const savedValues = JSON.parse(localStorage.getItem("inputValues")) || {};
    document.querySelectorAll(".expense").forEach((input, index) => {
      input.value = savedValues[index] || 0;
    });
  }

  updateAmount() {
    let totalAmount = 0;
    let inputValues = {};

    document.querySelectorAll(".expense").forEach((input, index) => {
      const value = parseFloat(input.value) || 0;
      totalAmount += value;
      inputValues[index] = value;
    });

    document.querySelector("#total").innerHTML = totalAmount;
    localStorage.setItem("totalBudget", totalAmount);
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
    return totalAmount;
  }
  updateBalance(income) {
    const totalAmount = this.updateAmount();
    const totalBalance = income - totalAmount;
    document.getElementById("totalBalance").textContent = totalBalance;
    localStorage.setItem("totalBalance", totalBalance);
  }
}

const entryData = new Entry();

document.addEventListener("DOMContentLoaded", () => {
  const amounts = entryData.loadAmount();
  document.querySelector("#total").innerHTML = amounts.first;
  document.getElementById("totalBalance").innerHTML = amounts.second;
  entryData.loadInputs();
});

const btnSum = document.querySelector(".btnSum");

btnSum.addEventListener("click", () => {
  const income = parseFloat(document.getElementById("income").value) || 0;
  entryData.updateBalance(income);
});
