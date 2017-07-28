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


function mergeRanges(array) {
  let sorted = times.sort((a,b) => a[0] - b[0]);
  let result = []; 
  result.push(sorted.shift()); 
  let index = 0; 
  sorted.forEach(item => {
    if (item[0] <= result[index][1]) {
      result[index][1] = item[1]; 
    } else {
      result.push(item); 
      index++; 
    }
  });
  return result; 
}




module.exports = mergeRanges;
