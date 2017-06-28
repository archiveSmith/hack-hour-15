/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length < 3) return 0
    const sortedArr = array.sort().reverse()
    if(sortedArr[0] > 0) return sortedArr[0]*sortedArr[1]*sortedArr[2]
    if(sortedArr[0] < 0) return sortedArr[sortedArr.length-1]*sortedArr[sortedArr.length-2]*sortedArr[sortedArr.length-3]
}


module.exports = highestProduct;
