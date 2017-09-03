'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    // Input
        // input is going to be an array of characters

    // Output
        // output is going to be the inputed array but reversed
        // DO NOT CREATE A NEW ARRAY AND PUSH INTO THAT NEW ARRAY

    // Edge cases
        // check if the input is an array
        // check if the array is length 0 or 1 return array
    // if (!Array.isArray(array)) return "Not a valid array";
    if (arguments.length === 0) return [];
    if (array.length === 0 || array.length === 1) return array;
    
    // for loop to iterate through input array
    for(let i = 0; i < array.length/2; i++) {
        // create temp variable to store data and simple algorithm to switch first index with last index and move towards the middle
        let tmp = array[i];
        array[i] = array[array.length - (i + 1)];
        array[array.length - (i + 1)] = tmp;
    }
    return array;
}

module.exports = reverseInPlace;
