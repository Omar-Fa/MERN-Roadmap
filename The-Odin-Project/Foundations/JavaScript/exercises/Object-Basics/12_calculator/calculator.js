const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr, 0);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
