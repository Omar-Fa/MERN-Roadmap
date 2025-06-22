let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];
console.log(users);

let names = users.map((user) => user.name);
console.log(names);
/* ... your code */

// alert(names); // John, Pete, Mary
