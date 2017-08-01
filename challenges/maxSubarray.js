/* You are given an array of integers with both positive and negative numbers. Write a function to
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
	let length = arr.length;
	let max = -Infinity; 
	let sum;  
	for (let i = 0; i < length; i++) {
		sum = arr[i]; 
		for (let y = i + 1; y < length; y++) {
			sum += arr[y];
			if (sum > max) max = sum; 
		}
	}
	return max; 
}

​

module.exports = maxSubarray;
 wrap long lines

