/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  if (!arr.length || !target) return;

  let searcher = arr.length / 2;
  let limiter = arr.length / 4;
  let searcherLow;
  let searcherHigh;

  while (true) {
    searcherLow = Math.floor(searcher);
    searcherHigh = Math.ceil(searcher);
    
    if (arr[searcherLow] === target || arr[searcherHigh] === target) {
      return true;
    } else if (arr[searcherLow] < target || arr[searcherHigh] < target) {
      searcher += limiter;
    } else if (arr[searcherLow] > target || arr[searcherHigh] > target) {
      searcher -= limiter;
    }

    limiter /= 2;
  }
}

module.exports = findInOrderedSet;
