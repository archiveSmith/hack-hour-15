// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // Iterate through the array
  for (let o = 2; o <= array.length; o += 1) {
    // Iterate through the array to length - i
    for (let i = 0; i < array.length - o; i += 1) {
      // if current element is greater than the next, swap them
      if (array[i] > array[i] + 1) [array[i], array[i+1]] = [array[i+1], array[i]];
    }
  }
  // Return the array
  return array;
}

// test
console.log(bubbleSort([3,1,5,2,4]), [1,2,3,4,5]);

module.exports = bubbleSort;
