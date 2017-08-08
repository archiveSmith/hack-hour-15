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
let arr = [1,2,1,3,3];

function uniqueNumber(array) {
    let counter = 0;
    let obj = {};
    array.forEach((el)=>{
        (!obj[el]) ? (obj[el]) = 1 : obj[el] = ++obj[el];
    })

    for (prop in obj){
       if (obj[prop]===1) {
        return prop 
       }
    }
    console.log(obj);

}

module.exports = uniqueNumber;

console.log(uniqueNumber(arr));