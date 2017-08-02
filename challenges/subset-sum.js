/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// Given an array of integers, determine if there is a subarray that is equal to the target number


// Steps:
    // Check if any of the elements equal the target
    // Then, get all combinations of the subarrays and store in a data structure
        // Nested For Loop
        // Iterate through the original array, slice at position i
        // Then, iterate through those arrays, and splice at position 1 => length - 1

    // Find the value of the subarray and replace the subarray with its value in the data structure
        // Use map and reduce to create a new array of values
    // Search for a match
        // Search for a match


function subsetSum(array, target) {
    const subArrays = [];
    if (array.includes(target)) return true;
    for (let i = 0; i < array.length - 1; i++) {
        let currentSubArray = array.slice(i);
        subArrays.push(currentSubArray);
        if (currentSubArray.length > 2) {
            for (let i = 1; i < currentSubArray.length - 1; i++) {
                console.log(currentSubArray.splice(i, 1));
                subArrays.push(currentSubArray);
            }
        }

    }
    console.log(subArrays);
}

 console.log(subsetSum([3, 7, 4, 2], 5)) // - > true, 3 + 2 = 5
 console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
 console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
 console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;
