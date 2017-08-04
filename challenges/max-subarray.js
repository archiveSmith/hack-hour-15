/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 // Find which subarray provides the max sum
 // Check each combination of consecutive subArray
  // Loop through each element in the arr
  // Use the algorithm a + b vs b
  // Use Math.max
 // max sum => keep track of maxSum and currSum of subArray
  // Use Math.max for maxSum and currSum

function maxSubarray(arr) {
  let maxSum = -Infinity;
  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

// Test Cases
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) // 18
// console.log(maxSubarray([15,20,-5,10])) // 40

module.exports = maxSubarray;
