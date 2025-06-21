let arr = [5, 2, 1, -10, 8];
function sortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortDesc(arr));

// A BETTER SOLUTION

// let sortDesc = arr.sort((a, b) => b - a);
// console.log(sortDesc);
