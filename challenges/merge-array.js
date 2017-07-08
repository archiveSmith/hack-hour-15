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

// Input
  // Two ordered arrays
// Output
  // One ordered array withe elements from each

function mergeArrays(arr1, arr2) {
  // Check for edge cases
  
  // Create empty output array
  const output = [];
  
  // while either array still has elements
  while (arr1.length || arr2.length) {
  
    // if the first element of the first array is smaller than the first element of the second array, or if the second array is empty
      // shift the first element off the first array and push into the output array
    if (!arr2.length || (arr1.length && arr1[0] < arr2[0])) output.push(arr1.shift());
  
    // else 
      // shift the second element off the first array and push into the output array
    else output.push(arr2.shift());
  
  }
    
  // Return the output array
  return output;
}

// test cases
//const my_array = [3,4,6,10,11,15,21];
//const another_array = [1,5,8,12,14,19];
//console.log(mergeArrays(my_array, another_array)); // -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
//console.log(mergeArrays([-10,-1,100], [-5,40,1000,2000,3000,4000])); // -> [-10,-5,-1,100,1000,2000,3000,4000]

module.exports = mergeArrays;
