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

// function mergeArrays(arr1, arr2) {
//   const newArr = [];

//   let counter = Math.max(arr1.length, arr2.length) - 1;

//   while (arr1.length && arr2.length) {
//     if (!arr1[counter]) newArr.push(arr2.pop());
//     else if (!arr2[counter]) newArr.push(arr1.pop());
//     else arr1[counter] > arr2[counter] ? newArr.push(arr1.pop()) : newArr.push(arr2.pop());
//     counter -= 1;
//   }

//   return newArr.reverse();
// }


function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return [];
  else if (!Array.isArray(arr1)) return arr2;
  else if (!Array.isArray(arr2)) return arr1;

  const newArr = new Array(arr1.length + arr2.length);

  let counter1 = 0;
  let counter2 = 0;

  for (let i = 0; i < newArr.length; i += 1) {
    if (!arr1[counter1]) {
      newArr[i] = arr2[counter2];
      counter2 += 1
    } else if (!arr2[counter2]) {
      newArr[i] = arr1[counter1];
      counter1 += 1;
    } else if (arr1[counter1] < arr2[counter2]) {
      newArr[i] = arr1[counter1];
      counter1 += 1;
    } else {
      newArr[i] = arr2[counter2];
      counter2 += 1;
    }
  }

  return newArr;
}

module.exports = mergeArrays;
