/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

 // O(n^2) time, O(1) space
function uniqueNumber(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (i !== j && array[i] === array[j]) {
        array.splice(j, j + 1);
        array.splice(i, i + 1);
      }
    }
  }
  return array.length === 1 ? array[0] : false;
}

// console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
