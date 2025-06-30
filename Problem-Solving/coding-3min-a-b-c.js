// https://www.codewars.com/kata/5714803d2817ffce17000a35
// This is the simple version of Fastest Code series. If you need some challenges, please try the Performance version

// Task:
// Give you a number array numbers and a number c.

// Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]

// The array numbers is a sorted array, value range: -100...100

// The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]

// Please see more example in testcases.

// Series:
// Bug in Apple
// Father and Son
// Jumping Dutch act
// Planting Trees
// Give me the equation
// Find the murderer
// Reading a Book
// Eat watermelon
// Special factor
// Guess the Hat
// Symmetric Sort
// Are they symmetrical?
// Max Value
// Trypophobia
// Virus in Apple
// Balance Attraction
// Remove screws I
// Remove screws II
// Regular expression compression
// Collatz Array(Split or merge)
// Tidy up the room
// Waiting for a Bus

function findAB(numbers, c) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] === c) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return null;
}

console.log(findAB([1, 2, 3], 3)); // [1,3]
console.log(findAB([1, 2, 3], 6)); // [2,3]
console.log(findAB([1, 2, 3], 7)); // null
console.log(findAB([1, 2, 3, 6], 6)); // [1,6]
console.log(findAB([1, 2, 3, 4, 5, 6], 15)); // [3,5]
console.log(findAB([0, 0, 2], 4)); // null
console.log(findAB([0, 0, 2, 2], 4)); // [2,2]
console.log(findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4)); // [-2,-2]
console.log(findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0)); // [-3,0]
console.log(findAB([-3, -2, -1, 0, 1, 2, 3, 4], 4)); // [1,4]
console.log(findAB([0, 1, 2, 3], 0)); // [0,1]
console.log(findAB([0, 0, 2, 3], 0)); // [0,0]
