// https://www.codewars.com/kata/589b1c15081bcbfe6700017a
// Fast & Furious Driving School's (F&F) charges for lessons are as below:

// Time	Cost
// Up to 1st hour	$30
// Every subsequent half hour**	$10
// ** Subsequent charges are calculated by rounding up to nearest half hour.
// For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.

// Out of the kindness of its heart, F&F also provides a 5 minutes grace period. So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.

// For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. Input is always > 0.

function cost(mins) {
  if (mins <= 60) return 30;

  // Apply 5-minute grace period
  if (mins % 30 <= 5) {
    mins -= mins % 30; // round down if within grace
  } else {
    mins = mins + (30 - (mins % 30)); // round up to next 30-min block
  }

  // First hour is $30, then each extra half hour is $10
  const extra = mins - 60;

  return 30 + (extra / 30) * 10;
}

console.log(cost(45)); // 30
console.log(cost(63)); // 30
console.log(cost(84)); // 40
console.log(cost(102)); // 50
console.log(cost(273)); // 100
