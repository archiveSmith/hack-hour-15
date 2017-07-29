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

 // if the ranges are not in order then sort them in order by the starting time in the range
 // after they are sorted by starting time, check to see if the starting time for the next time range
 // is within the time range of the current time range
 // if it is, then the range is a[0] - b[1] rather than a[0] - a[1]


function mergeRanges(array) {
  // Edge case if the array is not an actual array
  // Edge case if indexes are not arrays that contain ranges
  if (!Array.isArray(array)) return false;
  if (array.filter((arr) => {
    if (!Array.isArray(arr)) return false;
  }));

  // sort the array by the first time for the time range, or index 0 of each range
  let newArr = array.sort((a, b) => a[0] > b[0]);

  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i][1] >= newArr[i + 1][0]) {
      newArr[i][1] = Math.max(newArr[i][1], newArr[i + 1][1]);
      newArr.splice(i + 1, 1);
      i--;
    }
  }
  console.log(newArr);
  return newArr;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(times);

module.exports = mergeRanges;
