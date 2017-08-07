// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) {
      temp = array[i];
      array[i] = array [i - 1];
      array[i - 1] = temp;
      insertionSort(array);
    }
  }
  return array;
}

// console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));

module.exports = insertionSort;