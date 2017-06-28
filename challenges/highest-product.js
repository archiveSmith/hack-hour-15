/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let arr = [];
    array = array.sort();
    return array[-1] * array[-2] * array[-3]
}


module.exports = highestProduct;