/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) x

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let half = Math.floor(arr.length / 2);
  if (arr[half] === target) return true;
  else if (arr.length === 1) return false;
  else if (arr[half] > target) return findInOrderedSet(arr.slice(0, half), target);
  else if (arr[half] < target) return findInOrderedSet(arr.slice(half), target);
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));  // true
// console.log(findInOrderedSet(nums, 2));  // false


module.exports = findInOrderedSet;
