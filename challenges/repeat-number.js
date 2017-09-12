/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

const repeatNumbers = array =>
  array.reduce((acc, val) => acc + val) - getSeriesSum(array.length - 1);

const getSeriesSum = length => length * (length + 1) / 2;

// const repeatNumbers = array => {
//   let actualSum = 0;
//   let expectedSum = 0;

//   for (let i = 1; i <= array.length - 1; i += 1) {
//     expectedSum += i;
//   }

//   for (let i = 0; i < array.length; i += 1) {
//     actualSum += array[i];
//   }

//   return expectedSum - actualSum;
// };

module.exports = repeatNumbers;
