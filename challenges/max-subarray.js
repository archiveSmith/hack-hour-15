/* You are given an array of integers with both positive and negative numbers. Write a function to
<<<<<<< HEAD
2
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
3
 * original array. The whole array can be considered a sub array of itself.
4
 *
5
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
6
 *              maxSubarray([15,20,-5,10])  -> 40
7
 *
8
 */

​

function maxSubarray(arr) {
  let maxsofar = -Infinity; 
  let maxEnd = 0; 
  for (let i = 0; i < arr.length; i++) {
    maxEnd += arr[i];
    if (maxsofar < maxEnd) maxsofar = maxEnd; 
    if (maxEnd < 0) maxEnd = 0; 
  }
  return maxsofar; 
}

​

module.exports = maxSubarray;
 wrap long lines

=======
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

}

module.exports = maxSubarray;
>>>>>>> 92e4c1d34b7c264735bcde781bd76848b0443954
