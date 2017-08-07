/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
// solution - binary search
  if (arr.length === 1) {
    if (arr[0] === target) return true
    return false
  }
  const ind = Math.floor(arr.length);
  
  if (arr[ind] === target) return true
  if (arr[ind] > target) return findInOrderedSet(arr.slice(0, ind))
  if (arr[ind] < target) return findInOrderedSet(arr.slice(ind))
}


module.exports = findInOrderedSet;
