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

let testArr = [1,2,3,4,5,6,5];

 function repeatNumbers(array) {
   //edge case handlers
   if(typeof array !== 'object') return ('invalid value type');
   if(array.length < 2)return;

   //set array.length to variable for brevityr
   const n = array.length;
   //expected sum
   const expecSum = (n-1) * n/2;
   //sum of all numbers - i = dupe
   const acSum = array.reduce((acc,curr) => acc+curr, 0);

  //return the difference
  return acSum - expecSum;
}
repeatNumbers(testArr);

module.exports = repeatNumbers;
