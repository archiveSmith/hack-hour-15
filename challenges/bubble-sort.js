// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let arrayEnd = array.length;
  while (arrayEnd > 1) {
    for (let i = 0; i < arrayEnd; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    arrayEnd -= 1;
  }
  return array;
}

// console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));

module.exports = bubbleSort;
