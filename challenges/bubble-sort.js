// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
 if (!Array.isArray(array) || array.length === 0) return false; 
 if (array.length === 1) return array; 
 let sorting = true;
 let temp;  
 while (sorting) {
   sorting = false; 
   for (let i = 0; i < array.length - 1; i++) {
     if (array[i] > array[i + 1]) {
     	sorting = true;
     	[array[i], array[i+1]] = [array[i+1], array[i]];
     }
   }
 }
 return array; 
}

module.exports = bubbleSort;
