/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

// Array of condensed ranges
  // Merge existing arrays
    // Sort existing arrays by order of 1st number
    // Start with an output array that contains the first subarray
    // Compare array at position a with array at position b
      // When array at position b [0] < array at position a [1], merge the two arrays
      // Otherwise, push array at position b

function mergeRanges(array) {
  let sortedArr = array.sort((a, b) => {
    return a[0] - b[0];
  });
  let condensedArr = [sortedArr[0]];

  for (let i = 1; i < sortedArr.length; i++) {
    cArrLen = condensedArr.length - 1;
    if (sortedArr[i][0] <= condensedArr[cArrLen][1]) {
      condensedArr[cArrLen][1] = Math.max(condensedArr[cArrLen][1], sortedArr[i][1]);
    } else {
      condensedArr.push(sortedArr[i]);
    }
  }
  return condensedArr;
}

 const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 console.log(mergeRanges(times)); // [[0, 1], [3, 8], [9, 12]]


// // Iterate through the array
//     // If merged array has a value, compare it to the next subArray
//     // Otherwise, compare 2 subarrays
//         // If they do not overlap, store the first subarray
//             // Set the merged array to undefined;
//         // If they do overlap, save the merged array as a variable


// function mergeRanges(array) {
//     let output = [];
//     let merge = false;
//     let mergedArray;
//     array.forEach((subArray, index) => {
//         if (index === array.length - 1) {
//             return output;
//         } else if (mergedArray) {
//             mergeArrays(mergedArray, array[index], mergedArray, output);
//         } else {
//             mergeArrays(array[index], array[index + 1], mergedArray, output);
//         }
//     });
// }

// // Create a helper function to merge Arrays

// function mergeArrays(array1, array2, mergedArray, output) {
//     if (array1[1] >= array2[0]) {
//         mergedArray = [array1[0], array2[1]];
//     } else if (array2[1] >= array1[0]) {
//         mergedArray = [array2[0], array1[1]];
//     }
//     mergedArray = undefined;
//     output.push(array1);
// }

//  var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
//  console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]


module.exports = mergeRanges;






// Find the subarray with the smallest # at [0]
    // Look at # at [1]
    // Remove subarray from list
        // Check other arrays for # < currNum
            // if they exist, compare # at [1] w/ currNum
    // Check if currNum + 1 exists
    // If it doesn't, save this as a new subarray



    // Helper Functions
        // mergeSubArrays = merges range of 2 arrays


    // Sort subarrays by 1st number
        // merge the two arrays together if they overlap
    

    // [[0, 1], [3, 5], [4, 8], [9, 10], [10, 12]]