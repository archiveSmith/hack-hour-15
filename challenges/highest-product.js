/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const sortedArr = array.sort().reverse()
    return sortedArr[0]*sortedArr[1]*sortedArr[2]
}


module.exports = highestProduct;
