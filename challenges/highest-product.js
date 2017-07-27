/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) {
        return 0;
    }
    array = array.sort();
    if (array[array.length - 1] * array[array.length - 2] * array[array.length - 3] > array[0] * array[1] * array[array.length - 1]) {
        return array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
    }
    return array[0] * array[1] * array[array.length - 1];

}
module.exports = highestProduct;