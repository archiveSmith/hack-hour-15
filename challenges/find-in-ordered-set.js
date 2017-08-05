/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let low = -1;
  let high = arr.length; // 10
  let mid;
  while (low + 1 <= high) {
    mid = Math.floor((high - low) / 2) + low; // 6
    if (arr[mid] === target) return true;
    else if (arr[mid] > target) {
      high = mid; // 5
    } else low = mid; // 7
  }
  return false;
}
// var nums = [1, 4, 6, 7, 9, 17, 45, 80];
// console.log(findInOrderedSet(nums, 80));

module.exports = findInOrderedSet;
