/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(arr, target) {
    const array = arr.sort(function(a, b) {return b - a})
    let count = 0;
    for (let i=0; i<array.length-1; i++){
        count += array[i]
        for(let j=i+1; j<array.length; j++){
          count += array[j]
          if(count > target) count -= array[j];
          if(count === target) return true;
        }
        count = 0;
    }
    return false;
}


module.exports = subsetSum;
