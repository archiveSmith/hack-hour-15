/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    const maxSub = [];
    const maxSum = 0;
    const compareSub = [];
    const compareSum = 0;
    return recursion(arr, maxSum)
}

function recursion(arr, maxSum) {
    let i;
    let j;
    for(i=0; i<arr.length-1; i++) {
        maxSub.push(arr[i]);
        maxSum += arr[i];
        for(j=1; j<arr.length; j++) {
            maxSub.push(arr[j]);
            maxSum += arr[j];
        }
    }
    return recursion (maxSub, maxSum)
}


module.exports = maxSubarray;
