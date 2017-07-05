/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
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

function mergeArrays(arr1, arr2) {
  if (arr1 === undefined && arr2 === undefined) return undefined
  else if (arr1 === undefined || arr1.length === 0) return arr2
  else if (arr2 === undefined || arr2.length === 0) return arr1
  const tmp1 = arr1.slice()
  const tmp2 = arr2.slice()
  const merged = []
  let tmp 
  for (let i = 0; i < arr1.length + arr2.length; i++){
    if ((tmp2[0] === undefined)||(tmp1[0] <= tmp2[0])){
      tmp = tmp1[0]
      tmp1.shift()
    } else {
      tmp = tmp2[0]
      tmp2.shift()
    }
    merged.push(tmp)
  }
  return merged
}
var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array));// -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
console.log(mergeArrays(another_array, my_array));// -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
console.log(mergeArrays([], my_array));// -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
console.log(mergeArrays(my_array, []));// -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
