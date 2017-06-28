/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// Edge Case?
    // Less than 3 numbers
// Given an array of integers, find the highest product from 3
    // Sort the integers
        // SortBy
        // Get an array of the highest positive numbers
        // Get an array of the 2 lowest numbers
            // If there are 2 negative numbers whose absolute values are greater
            // than the positive values, use them


// Given an array of integers, find the highest product from 3
    // 0. Edge Case = 3 or less numbers
    // 1. Sort the integers by ascending value
    // 2. Get an array of the 3 largest positive numbers
    // 3. Get an array of the 2 lowest numbers
    // 4. If the lowest numbers are negative and their product is > product of positive numbers, use that
    // 5. Multiply product by the largest number
function highestProduct(array) {
    // Edge Case: 3 or less numbers
    if (array.length < 3) {
        return 0;
    }
    // Sort the integers by ascending value
    let sortedArray = array.sort((a, b) => a - b);
    let length = sortedArray.length - 1;
    // If product of 2 lowest numbers is > product of 2nd and 3rd largest number
    if ((sortedArray[0] * sortedArray[1]) > (sortedArray[length - 1] * sortedArray[length - 2])) {
        return sortedArray[0] * sortedArray[1] * sortedArray[length];
    }
    return sortedArray[length] * sortedArray[length - 1] * sortedArray[length - 2];
}

console.log(highestProduct([2])); // 2
console.log(highestProduct([3, 2])); // 6
console.log(highestProduct([3, 2, 1, 4])); // 24
console.log(highestProduct([-20, -10, 3, 7, 8, 50])); // 2800 is incorrect, expect 10000


module.exports = highestProduct;
