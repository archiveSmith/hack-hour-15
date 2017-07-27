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
  const mySet = new Set();
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    mySet.add(array[i]);
    length++;
    if (length > mySet.size) {
      return array[i];
    }
  }
}

module.exports = repeatNumbers;
