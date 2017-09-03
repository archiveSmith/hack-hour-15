/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

//0,1  3,4  5,8  9,10  10,12
function mergeRanges(array) {
//input: nested array of 2 elements 
//output: nested array of 2 elements 



//edge cases
if(!Array.isArray(array)) return undefined;
if(array.length < 1) return undefined;

//sort the array
let result = array.slice().sort((a,b) => {
    return a[0] > b[0];
});

let i = 0;

//console.log('current', result[i]);
//console.log('next', result[i+1]);

while(i < result.length-1) {
    
    //compare two arrays at a time
    let current = result[i];
    let next = result[i+1];
    console.log('current[1]', current[1]);
    console.log('next[0]', next[0]);

    //check duplicates and delete
    if(current[1] >= next[0]) {
        current[1] = Math.max(current[1], next[1]);
        result.splice(i+1,1);
        console.log('result splice', result);
    } else {
        i++;
    }
}

return result;


}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]


module.exports = mergeRanges;
