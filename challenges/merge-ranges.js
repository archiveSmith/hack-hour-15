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
  // loop through array
  // at each step, add on to mergerd array by checking if current's start time falls in range of any existing
  // if it does, add modify that range (if the current's end time is later than existing range)
  // would maybe have to be run against itself again until resolved?
  const mrgd = [];
  array.forEach((timeRange) => {
    mrgd.forEach((comp) => {
      if (comp[0] <= timeRange[0] && timeRange[0] >= comp[1]) {
        // modify comp to incorporate this range
        // break the loop 
      }
    })
  })
}

module.exports = mergeRanges;
