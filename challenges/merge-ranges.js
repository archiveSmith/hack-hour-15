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
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

function mergeRanges(array) {
    let mergedArray = [];
    let tempArr = [];
    // sort array
    array.sort((arrA, arrB)=>{
      return arrA[0]-arrB[0]});
    // compare and merge ones that meet or overlap
    for (let i=0; i<array.length-1; i++){
        if (array[i][1]>=array[i+1][0]) {
            tempArr.push(array[i][0], array[i+1][1]);
            mergedArray.push(tempArr);
            tempArr = [];
        } else mergedArray.push(array[i]);
    }
    console.log(mergedArray);
    return mergedArray;
}

module.exports = mergeRanges;
console.log(mergeRanges(times));
