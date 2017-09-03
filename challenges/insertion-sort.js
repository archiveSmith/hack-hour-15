// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	if(!Array.isArray(array) || array.length < 2) return undefined;
	for(let i = 1; i < array.length; i++) {
		var curr = array[i];
		for(var j = i -1; j >= 0 && (array[j] > curr); j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = curr;
	}
}

module.exports = insertionSort;