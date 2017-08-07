// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

/*

  Insertion Sort Algorithm:
    - Loops through each position of the array
      // For Loop
    - Check position vs. the elements at prior positions
      // If the position is right, continue
      // Check if there is position where currElement is < prevElement
        // Splice element to that position
    - Continue looping
*/


function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currElement = array[i];
    // check position of element vs. the elements at prior positions
    for (let j = i; j >= 0; j--) {
      let otherElement = array[j];
      if (currElement < otherElement && j !== i) {
        let changedEle = array.splice(i, 1);
        array = array.slice(0, j).concat(changedEle).concat(array.slice(j));
      }
    }
  }
  return array;
}

console.log(insertionSort([1, 4, 2, 3, 5])); // [1, 2, 3, 4, 5];

module.exports = insertionSort;