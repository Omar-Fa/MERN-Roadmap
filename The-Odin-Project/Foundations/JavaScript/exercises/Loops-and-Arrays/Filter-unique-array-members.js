let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];
// function unique(arr) {
//   return [...new Set(arr)]
// }

// ANOTHER SOLUTION
function unique(arr) {
  let result = [];
  for (let member of arr) {
    if (!result.includes(member)) {
      result.push(member);
    }
  }
  return result;
}

console.log(unique(strings));
