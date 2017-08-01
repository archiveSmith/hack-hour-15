/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
  var now = 0,prev =0;
  for(var i = 0;i < arr.length;i++){  
    prev = Math.max(0,prev + arr[i]);
    now = Math.max(prev,now);
  }
  return now;
}
module.exports = maxSubarray;
console.log(maxSubarray([15,20,-5,10]));