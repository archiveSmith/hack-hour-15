// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] > array[i+1]) {
      let tmp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = tmp;
    }
  }
}

module.exports = insertionSort;