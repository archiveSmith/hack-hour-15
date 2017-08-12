// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!Array.isArray(array)) return 'Invalid Input';
  if (array.length < 2) return array;
  let sorted = false;
  while (sorted === false) {
    sorted = true
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
