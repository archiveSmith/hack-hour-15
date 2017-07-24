/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

  //check if first number in array is greater than the target
  if(array[0] > target){
    return false;
  } else if (array[0] === target) {
    return true;
  } //if  array is less than the target value, run an addition function until we reach the target
  if (array[0] < target){
    for(i=0;i<array.length; i++){
      let sum = array[i] + array[i+1];
      if(sum === target){
        return true;
      }
    }
  }
return;
}

console.log(subsetSum([3,7,4,2], 5));

module.exports = subsetSum;
