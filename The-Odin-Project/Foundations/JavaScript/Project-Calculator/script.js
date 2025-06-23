let currentInput = '0';
let calculationStack = [];
let shouldResetDisplay = false;

const display = document.getElementById('display-content');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');
const backspaceButton = document.getElementById('backspace');

// Basic math functions
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
  if (b === 0) return 'Nice try...';
  return a / b;
}

// Update display
function updateDisplay(value) {
  if (value === '.' && currentInput.includes('.')) return;

  if (currentInput === '0' || shouldResetDisplay) {
    currentInput = value === '.' ? '0.' : value;
    shouldResetDisplay = false;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

// Handle number button clicks
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (calculationStack.length === 1 && currentOperator === null) {
      // After a calculation, starting new input
      clearAll();
    }
    updateDisplay(button.textContent);
  });
});

// Handle operator button clicks
operatorButtons.forEach((button) => {
  if (button.id !== 'equals' && button.id !== 'backspace') {
    button.addEventListener('click', () => {
      handleOperator(button.textContent);
    });
  }
});

function handleOperator(operator) {
  if (currentInput !== '0') {
    calculationStack.push(parseFloat(currentInput));
    calculationStack.push(operator);
    shouldResetDisplay = true;
  } else if (calculationStack.length > 0) {
    // Replace the last operator if input is zero
    calculationStack[calculationStack.length - 1] = operator;
  }
}

// Handle equals button
equalsButton.addEventListener('click', () => {
  if (calculationStack.length === 0) return;

  calculationStack.push(parseFloat(currentInput));

  // First pass: handle multiplication and division
  for (let i = 1; i < calculationStack.length; i += 2) {
    const operator = calculationStack[i];
    if (operator === '×' || operator === '÷') {
      const a = calculationStack[i - 1];
      const b = calculationStack[i + 1];
      let result = operator === '×' ? multiply(a, b) : divide(a, b);

      if (typeof result === 'string') {
        // Division by zero
        display.textContent = result;
        clearAll();
        return;
      }

      calculationStack.splice(i - 1, 3, result);
      i -= 2; // Adjust index after removing elements
    }
  }

  // Second pass: handle addition and subtraction
  let result = calculationStack[0];
  for (let i = 1; i < calculationStack.length; i += 2) {
    const operator = calculationStack[i];
    const b = calculationStack[i + 1];
    result = operator === '+' ? add(result, b) : subtract(result, b);
  }

  // Round to 8 decimal places
  result = Math.round(result * 100000000) / 100000000;
  display.textContent = result;
  currentInput = result.toString();
  calculationStack = [];
  shouldResetDisplay = true;
});

// Clear calculator
function clearAll() {
  currentInput = '0';
  calculationStack = [];
  shouldResetDisplay = false;
  display.textContent = currentInput;
}

clearButton.addEventListener('click', clearAll);

// Decimal button
decimalButton.addEventListener('click', () => {
  if (currentInput.includes('.')) return;
  updateDisplay('.');
});

// Backspace button
backspaceButton.addEventListener('click', () => {
  if (
    currentInput.length === 1 ||
    (currentInput.length === 2 && currentInput.startsWith('-'))
  ) {
    currentInput = '0';
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  display.textContent = currentInput;
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    if (calculationStack.length === 1 && currentOperator === null) {
      clearAll();
    }
    updateDisplay(e.key);
  } else if (e.key === '.') {
    updateDisplay('.');
  } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    let operator;
    switch (e.key) {
      case '*':
        operator = '×';
        break;
      case '/':
        operator = '÷';
        break;
      default:
        operator = e.key;
    }
    handleOperator(operator);
  } else if (e.key === 'Enter' || e.key === '=') {
    equalsButton.click();
  } else if (e.key === 'Escape') {
    clearAll();
  } else if (e.key === 'Backspace') {
    backspaceButton.click();
  }
});
