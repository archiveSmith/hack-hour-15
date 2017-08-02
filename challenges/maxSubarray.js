/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
  // find all permutations of consecutive subarrays and compare their sum to each other
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sumarr = [];
    for (let j = i; j < arr.length; j++) {
      sumarr.push(arr[j]);
      let sum = 0;
      for (let k = 0; k < sumarr.length; k++) {
        sum += sumarr[k];
      }
      if (maxSum < sum) maxSum = sum;
    }
  }
  return maxSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
module.exports = maxSubarray;
