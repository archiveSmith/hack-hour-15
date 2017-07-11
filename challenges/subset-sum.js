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
  //brute force: calculate all sums?  
  //sort first would probs be good
  if (!Array.isArray(array) || typeof target !== 'number') return 'Not a valid input';
  //first check to see if any of them are the number
  // run a helper function with combos of 1, 2, all up to array.length.  
  //if any are found/ return true

  for (let i = 1; i < array.lenth; i += 1) {
    let combos = pos(n);
  }

  return false;

  function pos(n) {
    
  }

}

module.exports = subsetSum;
