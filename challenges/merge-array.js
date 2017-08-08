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


// function mergeArrays(arr1, arr2) {
//     let output = [];
//     while (arr1.length > 0 && arr2.length > 0) {
//         if (arr1[0] > arr2[0]) {
//             output.push(arr2[0]);
//             arr2.splice(0, 1);
//         } else {
//             output.push(arr1[0]);
//             arr1.splice(0, 1);
//         }
//     }
//     arr1.length === 0 ? output = output.concat(arr2) : output = output.concat(arr1);
//     return output;
// }

// Solution 2:

// Find the shorter array
    // Compare elements at the first position of each array
        // 2 index variables
        // Use a while loop
    // Push the smaller element to a new array, and increment index by 1
    // Continue until reaching the end of one array
    // Add the rest of the longer array
        // We do not want to slice => this adds to time complexity

function mergeArrays(arr1, arr2) {
    let output = [];
    let ind1 = 0;
    let ind2 = 0;
    while (ind1 < arr1.length && ind2 < arr2.length) {
        if (arr1[ind1] === undefined) {
            output.push(arr2[ind2]);
            ind2++;
        } else if (arr2[ind2] === undefined) {
            output.push(arr1[ind1]);
            ind1++;
        } else if (arr1[ind1] > arr2[ind2]) {
            output.push(arr2[ind2]);
            ind2++;
        } else {
            output.push(arr1[ind1]);
            ind1++;
        }
    }
    return output;
}

// How do I omit undefined values?

//  let my_array = [3,4,6,10,11,15,21];
//  let another_array = [1,5,8,12,14,19];
//  console.log(mergeArrays(my_array, another_array)); // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21];

// my_array = [4, 8, 12, 15, 29, 40, 58];
// another_array = [1, 5, 7, 9, 11, 13, 25, 38, 59];
// console.log(mergeArrays(my_array, another_array));

// [1, 4, 5, 7, 8, 11, 12, 13, 15, 25, 29, 38, 40, 58, 59]



module.exports = mergeArrays;
