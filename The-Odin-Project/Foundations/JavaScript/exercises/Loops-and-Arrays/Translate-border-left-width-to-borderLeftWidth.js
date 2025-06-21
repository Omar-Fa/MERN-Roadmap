// function camelize(str) {
//   let splittedStr = str.split('-');
//   let finalStr = splittedStr[0];

//   for (let i = 1; i < splittedStr.length; i++) {
//     if (splittedStr[i]) {
//       finalStr += splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
//     }
//   }
//   return finalStr;
// }

// A BETTER WAY
function camelize(str) {
  return str
    .split('-')
    .map((word, index) =>
      index === 0
        ? `${word}`
        : `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    )
    .join('');
}
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
