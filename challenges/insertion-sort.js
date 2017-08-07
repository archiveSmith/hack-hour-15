// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {

  if(!Array.isArray(array)) return 'Invalid argument'
  if (array.length === 1) return array;

  let element = array.shift();
  console.log('element: ', element)
  
  console.log('array: ', array)
  let result = insertionSort(array);
  console.log('result rescursed: ', result)
  
  let i = result.length;
  console.log('i: ', i)
  
  while (i >= 0 && element <= result[i-1]) i--;
  console.log('i inside while: ', i)

  result.splice(i, 0, element);
  console.log('result inside while: ', result)
  
  return result;

}
module.exports = insertionSort;