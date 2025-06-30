// https://www.codewars.com/kata/57a6633153ba33189e000074
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  // Implement me!
  // FIRST APPROACH
  //   const countMap = {};
  //   const result = [];
  //   for (let char of text) {
  //     if (countMap[char] === undefined) {
  //       countMap[char] = 1;
  //       result.push([char, 1]);
  //     } else {
  //       countMap[char]++;
  //       for (let pair of result) {
  //         if (pair[0] === char) {
  //           pair[1] = countMap[char];
  //           break;
  //         }
  //       }
  //     }
  //   }
  //     return result;

  // SECOND APPROACH
  const map = new Map();

  for (let char of text) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return Array.from(map.entries());
};

console.log(orderedCount('abracadabra')); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
console.log(orderedCount('Code Wars')); //  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
console.log(orderedCount('233312')); // [['2', 2], ['3', 3], ['1', 1 ]]],
