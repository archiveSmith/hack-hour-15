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
  if (!Array.isArray(arr1) || !Array.isArray(arr1)) return undefined;
  if (arr1.length < 1) return arr2;
  if (arr2.length < 1) return arr1;

  let returnAry = new Array(arr1.length + arr2.length);
  let i = 0;
  let j = 0;
  while (i <= arr1.length && j <= arr2.length){
    let one = arr1[i];
    let two = arr2[j];
    if (one < two){
      if (one !== undefined) returnAry[i+j] = one;
      i++
    } else {
      if (two !== undefined) returnAry[i+j] = two;
      j++
    }
  }
  return returnAry;
}
module.exports = mergeArrays;
