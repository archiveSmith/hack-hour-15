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

 /*
  // Loop through the array
  // Use indexOf && lastIndexOf to find the unique number
  // Return number

*/

function uniqueNumber(array) {
  for (let i = 0; i < array.length; i++) {
    let currEle = array[i];
    if (array.indexOf(currEle) === array.lastIndexOf(currEle)) return array[i];
  }
}

console.log(uniqueNumber([1, 2, 1, 3, 3])); // 2
console.log(uniqueNumber([2, 2, 4, 5, 5, 7, 7, 8, 8, 9, 9, 10, 10])); // 4
console.log(uniqueNumber([11, 11, 14, 15, 15, 19, 19])); // 14

module.exports = uniqueNumber;
