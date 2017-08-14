// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if(array.length < 2) return array;
  for(let i = 1; i < array.length; i++) {
  	for(let current = 1; current < array.length; current++) {
      if(array[current] < array[current-1]) {
      	let temp = array[current-1];
      	array[current-1] = array[current];
      	array[current] = temp;
      }
  	}
  }
   return array;
}

module.exports = bubbleSort;
