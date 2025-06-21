const convertToCelsius = function (fahrenheit) {
  const temperature = (fahrenheit - 32) * (5 / 9);
  return +temperature.toFixed(1);
};

const convertToFahrenheit = function (celsius) {
  const temperature = celsius * (9 / 5) + 32;
  return +temperature.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
