// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (array.length <= 1) return array;
  const element = array.shift();

  bubbleSort(array);

  for (let i = array.length; i >= 0; i--) {
    if (element >= array[i]) {
      array.splice(i+1, 0, element);
      break;
    }
  }
  return array;
}

// const arr = [10,9,8,7,6,5,4,3,2,1];
// console.log(bubbleSort(arr));
module.exports = bubbleSort;
