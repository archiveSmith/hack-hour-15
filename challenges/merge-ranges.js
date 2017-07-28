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
  if (!Array.isArray(array)) return;
  array.sort((a, b) => a[0]> b[0]);
  console.log(array);
  const result = [];
  for (let i = 0; i < array.length; ) {
    if (array[i][1] >= array[i + 1][0]) {
      result.push([array[i][0], array[i + 1][1]]);
      i += 2;
    } else {
      result.push(array[i]);
      i++;
    }
  }
  return result;
}

module.exports = mergeRanges;
