// https://www.codewars.com/kata/56d46b8fda159582e100001b
// You have recently discovered that horses travel in a unique pattern - they're either running (at top speed) or resting (standing still).

// Here's an example of how one particular horse might travel:

// The horse Blaze can run at 14 metres/second for 60 seconds, but must then rest for 45 seconds.
// After 500 seconds Blaze will have traveled 4200 metres.
// Your job is to write a function that returns how far a horse will have traveled after a given time.

// Input:
// totalTime - How long the horse will be traveling (in seconds)

// runTime - How long the horse can run for before having to rest (in seconds)

// restTime - How long the horse have to rest for after running (in seconds)

// speed - The max speed of the horse (in metres/second)

function travel(totalTime, runTime, restTime, speed) {
  const cycleTime = runTime + restTime;
  const fullCycles = Math.floor(totalTime / cycleTime);
  const remainingTime = totalTime % cycleTime;

  const totalRunningTime =
    fullCycles * runTime + Math.min(remainingTime, runTime);

  return totalRunningTime * speed;
}

console.log(travel(1000, 10, 127, 14)); // 1120
console.log(travel(100, 10, 0, 10)); // 1000
console.log(travel(100, 10, 0, 10)); // 1000
console.log(travel(25, 50, 120, 18)); // 450
console.log(travel(35869784, 90, 100, 5)); // 84954920
console.log(travel(1234567, 4, 3, 11)); // 7760148
console.log(travel(100000000, 21, 5, 14)); // 1130769276
console.log(travel(0, 100, 10, 14)); // 0
console.log(travel(250, 0, 5, 14)); // 0
console.log(travel(100, 10, 0, 14)); // 1400
console.log(travel(500, 100, 10, 0)); // 0
