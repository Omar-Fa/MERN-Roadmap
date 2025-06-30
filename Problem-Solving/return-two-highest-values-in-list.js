// https://www.codewars.com/kata/57ab3c09bb994429df000a4a
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  // FIRST APPROACH
  //   return arr.length <= 1
  //     ? arr
  //     : [
  //         arr.sort((a, b) => b - a)[0],
  //         arr.sort((a, b) => b - a)[1] === arr.sort((a, b) => b - a)[0]
  //           ? arr.sort((a, b) => b - a)[2]
  //           : arr.sort((a, b) => b - a)[1],
  //       ];

  // SECOND APPROACH
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

console.log(twoHighest([])); // []
console.log(twoHighest([15])); // [15]
console.log(twoHighest([15, 20, 20, 17])); // [20, 17]
