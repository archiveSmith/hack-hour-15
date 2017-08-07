// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if (array.length === 1) return array;
  if (!Array.isArray(array)) return undefined;

  let element = array.shift();
  let result = insertionSort(array);
  let i = result.length;
  while (i >= 0 && element <= result[i-1]) i--;

  result.splice(i, 0, element);
  return result;


return array;
}

const arr = [1, 3, 2, 10, 9, 8, 7, 4, 6, 5];


console.log(insertionSort(arr));
module.exports = insertionSort;
