// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


// Not the most efficient sorting algorithm 
function bubbleSort(array) {
    let temp = 0; 
    // Outside for loop: from i=0 to length - 1
    for (let i = 0; i < array.length; i += 1) {
        // inside loop from j to i 
        for (let j = 0; j < array.length; j += 1) {
            if (array[j] > array[j+1]) {
                // swap values
                temp = array[j]; 
                array[j] = array[j+1]; 
                array[j+1]  = temp; 
            }
        }
    }
    return array; 
}

module.exports = bubbleSort;
