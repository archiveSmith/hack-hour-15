/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// Use Divide And Conquer for O(log n) time
  // Edge Case, arr is empty
  // Base Conditions
    // If we find the element, return true
    // If we get to the end, return false
  // Recursion
    // When element < target, call function on left subarray
    // When element > target, call function on right subarray

function findInOrderedSet(arr, target) {
  let halfLength = Math.ceil(arr.length / 2);
  // Edge Case
  if (!arr.length) return false;
  // Base Conditions
  if (arr.length === 1 && arr[0] !== target) return false;
  if (arr[halfLength] === target) return true;
  console.log(arr[halfLength]);
  // Recursion
  return arr[halfLength] > target ? findInOrderedSet(arr.slice(0, halfLength), target) : findInOrderedSet(arr.slice(halfLength), target);
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); // true
console.log(findInOrderedSet(nums, 2)); // false


module.exports = findInOrderedSet;
