/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
	if (arr.length === 0) return false; 
	if (arr.length === 1 && arr[0] !== target) return false; 
	let halfIndex = Math.floor(arr.length/2);
	let half = arr[halfIndex]; 
	if (target === half) return true; 
	if (target < half) return findInOrderedSet(arr.slice(0, halfIndex), target); 
	if (target > half) return findInOrderedSet(arr.slice(halfIndex), target); 
}


module.exports = findInOrderedSet;
