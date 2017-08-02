/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
    let leftResult = 0;
    let rightResult = 0;
    let leftIndex;
    let rightIndex;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < leftResult + arr[i] ) {
            leftResult += arr[i];
        } else {
            leftResult = arr[i];
            leftIndex = i;
        }
        if (arr[arr.length - 1 - i] > rightResult + arr[arr.length - 1 - i]) {
            rightResult += arr[arr.length - 1 - i];
        } else {
            rightResult = arr[arr.length - 1 - i];
            rightIndex = arr[arr.length - 1 - i]
        }
    }
    // console.log('leftIndex', leftIndex); // 2
    // console.log('rightIndex', rightIndex); // 6
    // Find start point of maxSubarray
    // Iterate through the loop
    // If prevResult > arr[0] + arr[1], continue
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
