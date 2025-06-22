const fibonacci = function (n) {
  let count;
  if (typeof n !== 'number') {
    count = parseInt(n);
  } else {
    count = n;
  }

  if (count < 0) return 'OOPS';
  if (count == 0) return 0;

  let first = 1;
  let second = 0;

  for (let i = 2; i <= count; i++) {
    let current = first + second;
    second = first;
    first = current;
  }

  return first;
};

// console.log(fibonacci(4))
// console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
