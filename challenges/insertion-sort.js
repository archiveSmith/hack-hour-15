  // Write a function that sorts an array using the insertion sort algorithm.

  // https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let sorted = false;
    for (let x = i; sorted === false && x > 0; x -= 1) {
      if (array[x] < array[x - 1]) {
        let temp = array[x - 1]
        array[x - 1] = array[x];
        array[x] = temp;
      } else {
        sorted = true;
      }
    }
  }
  return array;
}

module.exports = insertionSort;