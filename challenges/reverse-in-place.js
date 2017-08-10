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

// Input: array
// Output: reversed array

// Given an array, reverse the array without creating a new object in memory
// Use the pop element to get the 2nd element of the array
// Add to the front of the array
// Continue until the end of the array

function reverseInPlace(array) {
    let counter = 1;
    let length = array.length;
    while (counter < length) {
        let currEle = array.splice(counter, 1);
        array = currEle.concat(array);
        counter++;
    }
    return array;
}

module.exports = reverseInPlace;
