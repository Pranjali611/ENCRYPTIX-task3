let currentInput = "";
let currentOperation = null;
let previousInput = "";

function clearDisplay() {
  currentInput = "";
  currentOperation = null;
  previousInput = "";
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result;
  currentOperation = null;
  previousInput = "";
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = currentInput || "0";
}
