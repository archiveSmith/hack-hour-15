/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// O(n) time, but also O(n) space

// Approach 1
    // Iterate through all numbers, creating an obj that stores the num as a key
    // If the property already exists, this is the duplicated number

// This approach is most likely O(n) time, O(1) space

function repeatNumbers(array) {
    let output = {};
    let i = 0;
    while (i < array.length) {
        let ele = array[i];
        if (output.hasOwnProperty(ele.toString())) return ele;
        else output[ele] = 1;
        i++;
    }
}

console.log(repeatNumbers([1, 2, 3, 2])); // 2
console.log(repeatNumbers([1, 2, 3, 4, 3])); // 3
console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9])); // 9

module.exports = repeatNumbers;
