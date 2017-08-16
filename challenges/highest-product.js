/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let product = 1; 

    // If the length of the array is three or less, return the product 
    // of those three (or less) integers 
    if ( array.length <= 3 ) {
        for (let i = 0; i < array.length; i += 1) {
            product = product * array[i]; 
        }
    }

    // Sort ints in the array in ascending order 
    array.sort(function(a, b) {
        return a - b;
    });

    // Highest product of all the ints is the result of multiplying the last 3 
    // elements in the array. 
    for (let i = array.length - 1; i > array.length - 4; i -= 1) {
        product = product * array[i]; 
    }

    return product; 
}


module.exports = highestProduct;
