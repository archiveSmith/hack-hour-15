// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  const res = [...array];
  for (let i = 1; i < res.length; i++) {
    let current = res[i];
    for (let j = i-1; current < res[j]; j--) {
      res[j+1] = res[j];
      res[j] = current;
    }
  }
  return res
}

// const arr = [9,5,3,6,8];
// console.log(arr);
// insertionSort(arr);
// console.log(arr);

module.exports = insertionSort;
