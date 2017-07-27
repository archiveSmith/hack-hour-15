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

function repeatNumbers(array) {
  if (!Array.isArray(array)) return 'Invalid Input';
  if (Array.length < 2) return;
  // const nums = array.reduce((acc, num) => {
  //   if (acc[num]) {
  //     acc[num] += 1;
  //   } else {
  //     acc[num] = 1;
  //   }
  //   return acc;
  // }, {})
  // let repeat;
  // Object.keys(nums).forEach((num) => {
  //   if (nums[num] > 1) repeat = num;
  // })
  let past = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] - past !== 1) return array[i];
  }
  return;
}

console.log(repeatNumbers([1]))

module.exports = repeatNumbers;
