// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  // code code code
  return string.split(' ');
}

console.log(stringToArray('Robin Singh')); //  ["Robin", "Singh"]
console.log(stringToArray('I love arrays they are my favorite')); //  ["I", "love", "arrays", "they", "are", "my", "favorite"]
