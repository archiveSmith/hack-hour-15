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
  const result = [];
  array = array.sort((subArA, subArB) => {
    return subArA[0] - subArB[0]
  });

  for (let i = 0; i < array.length - 1; i++) {
    const subAr = array[i];
    const subArB = array[i + 1];
      if (subArB[0] <= subAr[1]) {
        result.push([subAr[0], subArB[1]]);
        i++;
      } else {
        result.push(subAr);
      }
  }

  return result;
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
// console.log(mergeRanges(times), "should equal [[0, 1], [3, 8], [9, 12]]");

module.exports = mergeRanges;
