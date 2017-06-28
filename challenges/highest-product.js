/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length <= 2) return 0;
    const sortedArr = array.sort().reverse()
    let total = 1;
    let newSortArr;
    if(sortedArr[sortedArr.length-1] <= 0 && sortedArr[sortedArr.length-2] <= 0){
        sortedArr[sortedArr.length-1] = Math.abs(sortedArr[sortedArr.length-1])
        sortedArr[sortedArr.length-2] = Math.abs(sortedArr[sortedArr.length-2])
        newSortArr = array.sort().reverse()
        return newSortArr[0]*newSortArr[1]*newSortArr[2]
    }
    return sortedArr[0]*sortedArr[1]*sortedArr[2]
}


module.exports = highestProduct;
