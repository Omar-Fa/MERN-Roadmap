const leapYears = function (year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isNotDivisibleBy100 = year % 100 !== 0;
  const isdivisibleBy400 = year % 400 === 0;

  return isDivisibleBy4 && (isNotDivisibleBy100 || isdivisibleBy400);
};

// Do not edit below this line
module.exports = leapYears;
