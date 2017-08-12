// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if(!Array.isArray(array)) return 'Invalid input';
  if(array.length < 2) return array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i;j++) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j-1]] = [array[j - 1], array[j]];
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 7, 3, 4]))

module.exports = bubbleSort;
