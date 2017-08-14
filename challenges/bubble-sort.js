// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // set a flag to indicate if all pairs have been sorted
  // if flag doesn't get set to false by end of loop, ur good
  let flag = false;

  while (!flag) {
    flag = true; 
    // largest # in unsorted array will always move to the very end, 
    // so you don't have to check its index on subsequent passes
    for(let i = 0; i < array.length - 1; i += 1) {
      if(array[i] > array[i+1]) {
        flag = false;
        array[i] = array[i] ^ array[i+1];
        array[i+1] = array[i] ^ array[i+1];
        array[i] = array[i] ^ array[i+1];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
