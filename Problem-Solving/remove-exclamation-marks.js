// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

console.log(removeExclamationMarks('Hello World!')); // "Hello World"
