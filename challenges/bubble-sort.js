// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    if(!Array.isArray(array)) return "Invalid argument"
    let temp;
    let i;
    let sortedArr = array.slice()
    let marker = 0
    function recursive(sortedArr, marker) {
        for(i=0; i<sortedArr.length-1; i++) {
            if(sortedArr[i+1] < sortedArr[i]) {
                temp = sortedArr[i]
                sortedArr[i] = sortedArr[i+1]
                sortedArr[i+1] = temp
                marker ++
            }
            if(marker === 0 && i === sortedArr.length-2) return sortedArr
        }
        marker = 0;
        return recursive(sortedArr, marker)
    }
    return recursive(sortedArr, marker)
}


module.exports = bubbleSort;
