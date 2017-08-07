// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort
function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let savedIndex = i;

    for (let j = i - 1; j >= 0; j -= 1) {
      if (array[j] <= array[i]) {
        i = savedIndex;
        break;
      }

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i -= 1;
    }
  }

  return array;
}

module.exports = insertionSort;
