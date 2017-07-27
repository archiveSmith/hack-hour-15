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
    let compArr = [];
    let ans =  "Error, nothing appears twice.";
    array.forEach((el, i)=>{
        if (compArr.includes(el)) {ans = array[i]};
        compArr.push(el);
    })
    console.log(compArr);
    return ans;


}




module.exports = repeatNumbers;

console.log(repeatNumbers([1,2,3,3,4]))