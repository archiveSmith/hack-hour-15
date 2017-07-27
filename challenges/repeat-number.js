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
  let obj = {};
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] in obj) {
      obj[array[i]] += 1;
    } else {
      obj[array[i]] = 0;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) return key;
  }
}


// console.log(repeatNumbers([1,2,3,4,5,1]));
module.exports = repeatNumbers;
