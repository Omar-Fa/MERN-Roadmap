function getAverageAge(users) {
  return users.reduce((acc, curr) => acc + curr.age, 0) / users.length;
}

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

console.log(arr);
console.log(getAverageAge(arr));

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
