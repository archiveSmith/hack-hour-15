// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// Input
  // Array of numbers
// Output
  // Sorted input array using insertion sort

function insertionSort(array) {
  // Iterate through the array
  for (let forward = 0; forward < array.length; forward += 1) {
    // Iterate from the current index to the start of the array
    for (let back = forward; back > 0; back -= 1) {
      // If the current value is less than the previous value, swap them
      if (array[back] < array[back - 1]) [array[back], array[back - 1]] = [array[back - 1], array[back]];
    }
  }
  // Return the array
  return array;
}

// Tests
//console.log(insertionSort([1,3,5,2,4]));

module.exports = insertionSort;