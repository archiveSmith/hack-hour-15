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

// Edge cases
  // If array is not an array or if it only has one value, not valid
  // If array length is 2, must be the value in array

// use reduce to make a tally and also assign a value to the variable value
  // this value will be the key of whichever key-value pair has the value of two
  // return the value

function repeatNumbers(array) {
  if (!Array.isArray(array) || array.length === 1) return false;
  if (array.length === 2) return array[0];
  let value;
  let tally = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    if (acc[curr] === 2) {
      value = curr;
    }
    return acc;
  }, {})
  console.log(value);
  console.log(tally);
  return value;
}

module.exports = repeatNumbers;
