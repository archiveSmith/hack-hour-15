// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    for (let j = i-1; current < array[j]; j--) {
      array[j+1] = array[j];
      array[j] = current;
    }
  }
}

const arr = [9,5,3,6,8];
console.log(arr);
insertionSort(arr);
console.log(arr);

module.exports = insertionSort;
