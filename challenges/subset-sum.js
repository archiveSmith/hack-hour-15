/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// Input
  // An array of integers
  // An integer

// Output
  // Boolean
    // True if there is a subset of the input array that sums up to the input integer
    // False otherwise

function subsetSum(array, target) {
  // Edge cases
  if (
    !Array.isArray(array) ||
    array.length === 0 ||
    !isFinite(target)
  ) return false;
  
  // Iterate through the array
  for (let i = 0; i < array.length; i += 1) {
  
    // Find the difference between the target and the current element
    const diff = target - array[i];
    
    // If the difference is 0, return true
    if (diff === 0) return true;
  
    // Run subsetSum
      // Array: array with the current element spliced out
      // Target: the difference found above
    
    // If subsetSum returns true, return true
    if (subsetSum(array.slice(0, i), diff)) return true
  
  }
  // Return false
  return false;
}

// Test cases
//console.log(subsetSum([3, 7, 4, 2], 5)) // - > true, 3 + 2 = 5
//console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
//console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
//console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6
//console.log(subsetSum([8, 14, 9, 12, 100, -20, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6
//console.log(subsetSum([18, 100, -30, 8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6
//console.log(subsetSum([100, 100, 100, 100, 100, 100, 100, 100, 5, 1], 6)) // -> true, 5 + 1 = 6

module.exports = subsetSum;
