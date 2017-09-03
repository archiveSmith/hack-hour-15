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
  if(!arr1 || !arr2) return undefined;
  let allArrays = arr1.concat([], arr2);
  if(allArrays.length < 2) return allArrays;
  let result = mergeSort(allArrays);
  return result;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = array.length/2;
  const left = array.slice(0,mid);
  const right = array.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
      const result = [];
      while(left && left.length !== 0 || right && right.length !== 0) {
        if(right.length === 0) {
          result.push(left.shift());
        } else if (left.length === 0){
          result.push(right.shift());
        } else if (left[0] <= right[0]) {
          result.push(left.shift());
        } else if(right[0] <= left[0]) {
          result.push(right.shift());
        }
      }
      return result;
    }
    


}

module.exports = mergeArrays;
