// function filterRange(arr, a, b) {
//   let filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }

// A BETTER WAY
function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b))
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
