// https://www.codewars.com/kata/5d62961d18198b000e2f22b3
// At the start of each season, every player in a football team is assigned their own unique squad number. Due to superstition or their history certain numbers are more desirable than others.

// Write a function generateNumber() that takes two arguments, an array of the current squad numbers (squad) and the new player's desired number (n). If the new player's desired number is not already taken, return n, else if the desired number can be formed by adding two digits between 1 and 9, return the number formed by joining these two digits together. E.g. If 2 is taken, return 11 because 1 + 1 = 2. Otherwise return null.

// Note: Often there will be several different ways to form a replacement number. In these cases the number with lowest first digit should be given priority. E.g. If n = 15, but squad already contains 15, return 69, not 78.

function generateNumber(squad, n) {
  if (!squad.includes(n)) return n;

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i + j === n) {
        const num = parseInt(`${i}${j}`);
        if (!squad.includes(num)) return num;
      }
    }
  }

  return null;
}

console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 15, 69], 11)); //  11
console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 69], 11)); //  29
console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 69], 11)); //  38
console.log(
  generateNumber(
    [1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 38, 47, 56, 65, 69, 74, 83, 92],
    11
  )
); //  null
