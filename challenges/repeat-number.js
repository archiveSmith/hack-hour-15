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
   //edge case handlers
   if(typeof array !== 'object') return ('invalid value type');
   if(array === undefined) return ('please input an array with values');
   //output variable
   let output = 0;
   //iterate throguh the array
   for(let i = 0; i < array.length; i++){
     console.log(array[i])
     //search for the dupe and log
     if(array[i] && array[i-1] === i){
       output = i;
     }
   }
   return output;
 } 

module.exports = repeatNumbers;
