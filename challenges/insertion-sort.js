// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i=1; i<array.length; i++) {
    if (array[i] < array[i-1]) {
      let temp = array[i];
      array[i] = array[i -1];
      array[i - 1] = temp; 
      array = insertionSort(array);
    }
  }
  return array; 
}

module.exports = insertionSort;