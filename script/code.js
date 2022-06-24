const initialAmount = document.getElementById("initial");
const interest = document.getElementById("interest");
const years = document.getElementById("years");

const display = document.getElementById("interestAmount");

let select = document.querySelector("#interestType");
let option = select.value;

let compoundSelect = document.querySelector("#compound");
let compoundOption = compoundSelect.value;

const btnCalc = document.getElementById("calculate");
btnCalc.addEventListener("click", (P, R, t, n, I) => {
  P = initialAmount.value;
  t = years.value;
  R = interest.value / 100;
  // Simple interest
  if (select.value == "simple") {
    let SI = P * (1 + R * t);
    SI = SI.toFixed(2);
    I = SI - P;
    I = I.toFixed(2);
    display.innerHTML = "Your Total is: " + SI + " Your Interest is: " + I;
    console.log(select.value);
    // Compound interest
  } else if (select.value == "compound") {
    if (compoundSelect.value == "1") {
      n = 1;
    } else if (compoundSelect.value == "4") {
      n = 4;
    } else if (compoundSelect.value == "6") {
      n = 6;
    } else if (compoundSelect.value == "12") {
      n = 12;
    }

    // Compound
    let CI = P * Math.pow(1 + R / n, n * t);
    CI = CI.toFixed(2);
    // Interest
    I = CI - P;
    I = I.toFixed(2);
    display.innerHTML = "Your Total is: " + CI + " Your Interest is: " + I;
  }
});

const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
  initialAmount.value = "";
  interest.value = "";
  years.value = "";
  display.innerHTML = "";
  select.options[(select.selectedIndex = 0)];
  compoundSelect.options[(compoundSelect.selectedIndex = 0)];
});
