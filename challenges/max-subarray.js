/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
  //  handle edge cases
  if(arr === null) return;

  //  create variable for counter and array of subarrays
  subArrs = [];
  count = 0;

  //  iterate and add to a sum counter, if counter decreases below curr value, save that value, reset, and begin counting from next element. return the values that equal sum of largest consecutive sum.
  for(let i=0; i<arr.length;i++){

  }
}
module.exports = maxSubarray;
