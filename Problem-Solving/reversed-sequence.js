// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  // FIRST APPROACH
  let seq = [];
  for (let i = n; i > 0; i--) {
    seq.push(i);
  }

  return seq;

  // SECOND APPROACH
  return Array.from({ length: n }, (_, i) => n - i);

  // THIRD APPROACH
  return [...Array(n)].map((_, i) => n - i);

  // FOURTH APPROACH
  return n ? [n, ...reverseSeq(n - 1)] : [];
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
