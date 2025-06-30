// https://www.codewars.com/kata/5865918c6b569962950002a1
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter) {
  //code here
  let count = 0;

  // FIRST APPROACH
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.split('')[i] === letter) {
  //       count++;
  //     } else {
  //       continue;
  //     }
  //   }

  // SECOND APPROACH
  //   for (let char of str) {
  //     if (char === letter) count++;
  //     }

  // THIRD APPROACH
  return str.split('').filter((char) => char === letter).length;

  return count;
}

console.log(strCount('Hello', 'o')); // 1
console.log(strCount('Hello', 'l')); // 2
console.log(strCount('', 'z')); // 0
