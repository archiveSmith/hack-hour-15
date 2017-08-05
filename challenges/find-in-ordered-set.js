/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  return findMid(0, arr.length - 1, target, arr);
}

function findMid(min, max, target, arr) {
  if (max < min) return false;
  const mid = Math.floor((max + min) / 2);

  if (target === arr[mid]) return true;
  if (target < arr[mid]) return findMid(min, (mid - 1), target, arr);

  return findMid((mid + 1), max, target, arr)
}

// var nums = [1, 4, 6, 7, 9, 17, 45];
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000];
// console.log(findInOrderedSet(nums, 3)); // -> true
// console.log(findInOrderedSet(nums, 6)); // -> false



module.exports = findInOrderedSet;
