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
  if(!Array.isArray(array) || array.length < 2) return undefined;
  const newArr = array.sort();
  let result;
  newArr.filter((item, index, array) => {
    if(newArr.indexOf(item) !== index) {
      result = item;
    }
  });
  return result;
}


module.exports = repeatNumbers;
