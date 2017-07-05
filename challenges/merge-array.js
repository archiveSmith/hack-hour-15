/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

// Edge Cases
// Find the shorter array
    // While Loop
        // Compare elements at the first position of each array
        // Add the smaller element to a new array, and remove it from the array
        // When the array ends, add the rest of the longer array

function mergeArrays(arr1, arr2) {
    let output = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] > arr2[0]) {
            output.push(arr2[0]);
            arr2.splice(0, 1);
        } else {
            output.push(arr1[0]);
            arr1.splice(0, 1);
        }
    }
    arr1.length === 0 ? output = output.concat(arr2) : output = output.concat(arr1);
    return output;
}

module.exports = mergeArrays;
