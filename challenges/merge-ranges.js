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
  array.sort((a, b) => {
    return a[0] - b[0];
  })
  return array.reduce((acc, elem) => {
    let times = [];
    let temp = acc.pop();
    if (temp[1] >= elem[0]) {
      times.push(temp[0]);
      times.push(elem[1]);
    } else {
      acc.push(temp);
      times = elem;
    }
    acc.push(times);
    return acc;
  }, [array.shift()]);
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));

module.exports = mergeRanges;
