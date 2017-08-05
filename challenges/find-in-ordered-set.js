/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// Input
  // Sorted array of numbers
  // Number
// Output
  // True if the number exists in the array
  // False else

function findInOrderedSet(arr, target) {

  // Base case
  if (arr.length === 1) return arr[0] === target;
  
  // Find halfway index
  const half = Math.floor(arr.length / 2);
  
  return findInOrderedSet(target >= arr[half] ? arr.slice(half) : arr.slice(0, half), target);
}

// Tests
//var nums = [1, 4, 6, 7, 9, 17, 45]
//console.log(findInOrderedSet(nums, 4), true);
//console.log(findInOrderedSet(nums, 2), false);

module.exports = findInOrderedSet;
