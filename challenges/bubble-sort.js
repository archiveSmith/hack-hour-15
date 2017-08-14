// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // Iterate through array
    // For each element, bubble left until it is greater to the element to its left

  for (let i = 1; i < array.length; i += 1) {
    let temp = i;
    for (let j = temp - 1; j >= 0; j -= 1) {
      if (array[j] > array[temp]) {
        [array[j], array[temp]] = [array[temp], array[j]];
        temp -= 1;
      }
    }
  }

  return array;
}

console.log(bubbleSort([4, 2, 3, 1, 7, 32, 1, 5, 7]));

module.exports = bubbleSort;
