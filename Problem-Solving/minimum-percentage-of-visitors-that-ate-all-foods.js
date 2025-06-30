// https://www.codewars.com/kata/657e578bdc80170abd4dca79/javascript
// Task
// You are the manager of an amusement park! Today you are doing research on the revenue from various food items sold throughout your venue. All the vendors working for you can report the percentage of visitors that eat that particular food that they sell. Based on this data, your current goal is to create a method to figure out the minimum percentage of all visitors that must have purchased an item from all of the available vendors in your park.

// Examples
// Imagine the park only had one food (Popcorn). If 76% of the visitors get popcorn, then the answer is obvious:
// a minimum of 76% definitely ate every item because there is only one existing item to purchase.

// If the park had two items (Hot Dogs and Cotton Candy) and 50% of the visitors ate a hot dog and 50% of the visitors had some cotton candy, it would be easy to say that the maximum percentage of visitors that ate both items would be 50%. But you are trying to find the minimum percentage, and it turns out that would actually be 0% of visitors that ate both items, which is maybe not so obvious.

// In another example with a larger menu of now four food items available:

// Donuts 65%
// Pretzel 80%
// Pizza 80%
// Ice Cream 90%
// the result would be that 15% of all visitors ate every one of the foods.

// Input
// An (array, list, tuple, or vector) of numbers (with length from 1 to 10 inclusive).
// Each number represents the percentage (from 0 to 100 inclusive) of visitors that ate a particular food item.

// Output
// The minimum percentage of visitors that must have eaten all foods.

// Credit
// The source of inspiration for this kata will be printed for you after correctly solving all tests.

// Enjoy!
// Please consider one of the following kata to solve next:

// Is Sator Square?
// Playing With Toy Blocks ~ Can you build a 4x4 square?
// Four Letter Words ~ Mutations
// Crossword Puzzle! (2x2)
// Interlocking Binary Pairs
// Setting Places for the Dead
// Four Letter Words ~ Anagrams
// Shuffle an Integer

function minimumPercentage(foods) {
  let minPercent =
    foods.reduce((acc, curr) => acc + curr, 0) - (foods.length - 1) * 100;
  return minPercent < 0 ? 0 : minPercent;
}

console.log(minimumPercentage([76])); //              76.0
console.log(minimumPercentage([50, 100])); //         50.0
console.log(minimumPercentage([50, 50])); //           0.0
console.log(minimumPercentage([100, 100, 100])); //  100.0
console.log(minimumPercentage([65, 80, 80, 90])); //  15.0
