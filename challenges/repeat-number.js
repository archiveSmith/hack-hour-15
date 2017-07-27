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
  // if you know all in range, you can do the maths?
  // 1...n where n will === array.length-1
  // ex [1, 2, 5, 4, 2, 3]
  // you would have an expected sum variable that could be reasigned/
  // calculate expected sum and then calculate actual sum then get difference
  // create a for loop and go thru and increment one sum with array[i] and one with (i)
  // return difference of two sums

  let expectedSum = 0;
  let actualSum = 0;

  for (i = 0; i < array.length; i += 1) {
    expectedSum += i;
    actualSum += array[i];
  }
  
  return actualSum - expectedSum;
}

module.exports = repeatNumbers;
