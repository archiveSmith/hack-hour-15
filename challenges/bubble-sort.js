// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

// Nested For Loop
  // Swap 2 #'s if they are out of order



function bubbleSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    console.log('array[i]', array[i]);
    for (let j = 0; j < i; j += 1) {
      if (array[j] > array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
}

// console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4])) // [1, 2, 3, 4, 5, 6, 7, 8]

module.exports = bubbleSort;
