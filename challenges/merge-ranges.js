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
  let copy = array.slice()
  copy.sort((a, b)=>{ return a[0] > b[0] })
  // map copy into objects that have flag for each entry of times
  let mapped  = copy

  // iterate through each object and compare starting and ending 
  // for each ranges. If a range is consumed, switch the flag to be considered as used
  let merged = mapped.reduce((acc, e, i, array)=>{
    return acc
  }, [])
  // console.log(array)
  // console.log(copy)


}
var times = [[0, 1], [3, 5], [4, 8], [0,1],[10, 12], [9, 10]]
// console.log(times)
mergeRanges(times);// -> [[0, 1], [3, 8], [9, 12]]


module.exports = mergeRanges;
