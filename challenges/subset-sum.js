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
    // Array of integers
    // Target (number)

// Output
    // True or false

// Base cases (recursion)
    // If the target is 0, return true
    // If array is empty, return false

// Recursively call sliced array

function subsetSum(array, target) {
    if (target === 0) return true;
    if (!array.length) return false;

    const withEl = subsetSum(array.slice(1), target - array[0]);

    const withoutEl = subsetSum(array.slice(1), target);

    return withEl || withoutEl;
    
}

module.exports = subsetSum;
