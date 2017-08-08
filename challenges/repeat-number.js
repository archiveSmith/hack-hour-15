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
    let sum = 0;
    let sumact = 0;
    for(let x = 0;x<array.length;x++){
        sum += array[x]
        sumact += x+1; 
    }
    let diff = array.length-(sumact-sum);
    return (diff !== array.length) ? diff : 0 ; 
}
console.log(repeatNumbers([1,2,3,4,5]));
module.exports = repeatNumbers;
