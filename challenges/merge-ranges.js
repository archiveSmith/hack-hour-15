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

// look for overlaps
// iterate thru subarrays
  // compare first el of each subarray with range of prev
  // if there is overlap, merge array

function mergeRanges(array) {
  for (let i = 0; i < array.length; i += 1) {

    for (let j = 0; j < array.length; j += 1) {
      if (i === j) break;
      if (array[j][0] >= array[i][0] && array[j][0] <= array[i][0] && array[j][1] > array[i][1]) {
        // start time overlaps
        
      }

    }
  }
}

module.exports = mergeRanges;
