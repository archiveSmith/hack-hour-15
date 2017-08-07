// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort




function insertionSort(array) {
  for(var i = 1; i < array.length; i++) {
    var value = array[i];
    var index = i;
    while(index > 0 && array[index-1] > value) {
        array[index] = array[index-1];
        index--;
    }
    array[index] = value;
  }
  return array;
}


module.exports = insertionSort;