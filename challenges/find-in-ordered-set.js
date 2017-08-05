/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  console.log(arr);
  let low = -1;
  let high = arr.length;
  let mid;
  while (low <= high - 1) {
    mid = (low + high) / 2;
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) {
      low = mid;
    } else high = mid
  }
  return false;
}
// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 45))

module.exports = findInOrderedSet;
