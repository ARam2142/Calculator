const display = document.querySelector(".screen-display");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const decimal = document.querySelector(".decimal");
console.log(decimal);

let firstNum = "";
let secondNum = "";
let operator = "";

//first number  and operator
numbers.forEach(function (number) {
  number.addEventListener("click", () => displayNumber(number.innerText));
});

function displayNumber(number) {
  let numberKey = parseFloat(number);

  if (display.value === "0") {
    display.value = numberKey;
  } else {
    display.value += numberKey;
  }
  currEl = numberKey;
  // firstOperation(currEl);
  console.log(currEl);
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => inputOperators(operator.innerText));
});

function inputOperators(op) {
  let symbols = op;
  switch (symbols) {
    case "+":
      display.value += symbols;
      break;
    case "-":
      display.value += symbols;
      break;
    case "x":
      display.value += symbols;
      break;
    case "÷":
      display.value += symbols;
      break;
    default:
      break;
  }
}

decimal.addEventListener("click", (e) => {
  let theNumber = display.value;
  let target = e.target.value;
  if (!theNumber.includes(target)) {
    display.value += target;
  }
});
