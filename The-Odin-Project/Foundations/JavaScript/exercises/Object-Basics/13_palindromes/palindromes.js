const palindromes = function (str) {
  const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Remove any excess characters
  const cleanStr = str
    .toLowerCase()
    .split('')
    .filter((char) => alphaNumeric.includes(char))
    .join('');

  const reversedStr = cleanStr.split('').reverse().join('');

  return reversedStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
