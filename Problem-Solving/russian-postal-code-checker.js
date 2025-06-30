// https://www.codewars.com/kata/552e45cc30b0dbd01100001a
// You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.

// A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.

// Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9

// Examples
// Valid postcodes:

// 198328
// 310003
// 424000
// Invalid postcodes:

// 056879
// 12A483
// 1@63
// 111

function zipvalidate(postcode) {
  if (
    postcode.split('')[0] === '0' ||
    postcode.split('')[0] === '5' ||
    postcode.split('')[0] === '7' ||
    postcode.split('')[0] === '8' ||
    postcode.split('')[0] === '9'
  )
    return false;

  if (postcode.length !== 6) return false;

  if (postcode.replace(/\D/g, '').length !== 6) return false;

  return true;
}

console.log(zipvalidate('198328')); // true
console.log(zipvalidate('310003')); // true
console.log(zipvalidate('424000')); // true
console.log(zipvalidate('12A483')); // false
console.log(zipvalidate('1@63')); // false
console.log(zipvalidate('111')); // false
console.log(zipvalidate('056879')); // false
console.log(zipvalidate('1111111')); // false
