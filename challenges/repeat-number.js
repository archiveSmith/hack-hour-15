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
  if (!array || array.length === 0) return undefined
  const dict = {}
  for (let i = 0; i < array.length; i++){
    if(!dict[array[i]]){
      dict[array[i]] = {}
      continue
    }
    return array[i] 
  }
  return undefined
}
// console.log(repeatNumbers([])) // undefined
// console.log(repeatNumbers([1])) // undefined
// console.log(repeatNumbers([1, 2])) // undefined
// console.log(repeatNumbers([2, 1, 2])) // 2

module.exports = repeatNumbers;
