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
//edge cases
  console.log(array);
  if (Array.isArray(array) === false) return 'INVALID INPUT';
  if (array.length < 2) return -1;

  let match = -1
  array.forEach((e) => {
    array.forEach((f) => {
      if (f === e) match = e;
    });
  });
  return match;
}

module.exports = repeatNumbers;
