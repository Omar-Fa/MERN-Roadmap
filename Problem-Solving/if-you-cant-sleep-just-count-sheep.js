// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  //your code here
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

console.log(countSheep(0)); // ""
console.log(countSheep(1)); // "1 sheep..."
console.log(countSheep(2)); // "1 sheep...2 sheep..."
console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep..."
