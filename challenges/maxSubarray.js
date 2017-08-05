/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// Input
  // An array of positive and negative integers
// Output
  // The sum of a set consecutive numbers in the input that sum to the maximum value

//function maxSubarray(arr) {
//  // APPROACH: Get rid of elements from the ends that don't sum to > 0
//    // Specifically, slice of up to the last negative number where the sum of the slice < 0
//  
//  // Create left sum, right sum, and index of last negative
//  let l_sum = 0;
//  let r_sum = 0;
//  let l_i, r_i;
//  
//  // Iterate through the array from left to right
//  for (let i = 0; i < arr.length; i += 1) {
//  
//    // Add current value to left sum
//    l_sum += arr[i];
//  
//    // If the left sum < 0 and current value < 0, add it to index of last negative
//    if (l_sum < 0 && arr[i] < 0) l_i = i;
//  }
//  
//  // slice off up to the last negative
//  arr = arr.slice(l_i + 1);
//  
//  // Iterate through the array from right to left
//  for (let i = arr.length - 1; i >= 0; i -= 1) {
//  
//    // Add current value to left sum
//    r_sum += arr[i];
//  
//    // If the left sum < 0 and current value < 0, add it to index of last negative
//    if (r_sum < 0 && arr[i] < 0) r_i = i;
//  }
//  
//  // slice off up to the last negative
//  arr = arr.slice(0, r_i);
//  
//  return arr.reduce((sum, num) => sum += num);
//}

// Tests
//console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]), '18 from [3, 10, -4, 7, 2]');
//console.log(maxSubarray([15,20,-5,10]), 40);

// Solution
//function maxSubarray(arr) {
//  let curMax = -Infinity;
//  let finalMax = -Infinity;
//  
//  arr.forEach(num => {
//    curMax = Math.max(curMax, num);
//    finalMax = Math.max(finalMax, curMax);
//  });
//  
//  return finalMax;
//}

// One-liner-ish
maxSubarray = arr => arr.reduce((max, num) => {
  max.cur = Math.max(max.cur, num + max.cur);
  max.final = Math.max(max.final, curMax);
}, { cur: -Infinity, final: -Infinity }).final;

module.exports = maxSubarray;