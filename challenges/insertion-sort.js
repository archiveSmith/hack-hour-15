// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i=1; i<array.length; i++) {
    for (let y = i; y > 0; y--) {
    	if (array[y] < array[y-1]) {
    		let temp = array[y]; 
    		array[y] = array[y-1]; 
    		array[y-1] = temp; 
    	}
    }
  }
  return array; 
}


module.exports = insertionSort;