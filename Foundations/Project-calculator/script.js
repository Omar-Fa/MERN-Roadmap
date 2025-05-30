let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');
const backspaceButton = document.querySelector('.backspace');

// Event listeners
digitButtons.forEach((button) =>
  button.addEventListener('click', () => appendDigit(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', appendDecimal);
backspaceButton.addEventListener('click', backspace);
window.addEventListener('keydown', handleKeyboardInput);

// Math operations
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return 'Nice try 😎';
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return null;
  }
}

// Display and input
function appendDigit(number) {
  if (display.textContent === '0' || shouldResetDisplay) resetDisplay();
  display.textContent += number;
}

function resetDisplay() {
  display.textContent = '';
  shouldResetDisplay = false;
}

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  firstOperand = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  if (currentOperator === '/' && display.textContent === '0') {
    display.textContent = 'Nice try 😎';
    return;
  }
  secondOperand = display.textContent;
  display.textContent = roundResult(
    operate(currentOperator, firstOperand, secondOperand)
  );
  currentOperator = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function clear() {
  display.textContent = '0';
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
}

function appendDecimal() {
  if (shouldResetDisplay) resetDisplay();
  if (!display.textContent.includes('.')) display.textContent += '.';
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === '') display.textContent = '0';
}

// Keyboard support
function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendDigit(e.key);
  if (e.key === '.') appendDecimal();
  if (e.key === '=' || e.key === 'Enter') evaluate();
  if (e.key === 'Backspace') backspace();
  if (e.key === 'Escape') clear();
  if (['+', '-', '*', '/'].includes(e.key)) setOperation(e.key);
}
