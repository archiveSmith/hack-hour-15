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

// Input
    // An array

// Output
    // The inputted array is reversed
    // Returns undefined

function reverseInPlace(array) {
    if (!Array.isArray(array)) return "Please enter valid array";
    
    //  Iterate through half of the array
    for (let i = 0; i < Math.floor(array.length / 2); i += 1) {
        // Store the current element as a temp variable
        let temp = array[i];
        
        // Set the current element to the value of the element at lengh - i
        array[i] = array[array.length - i - 1];
        
        // Set the element at length - i to the temp variable
        array[array.length - i - 1] = temp;
    }
}

// Test cases
/*
let test1 = [];
let test2 = [1];
let test3 = [1,2];
let test4 = [1,2,3,4,5,6,7,8,9];
let test5 = [[1,2],3,{'4':5}];
let test6 = "hello";
reverseInPlace(test1);
reverseInPlace(test2);
reverseInPlace(test3);
reverseInPlace(test4);
reverseInPlace(test5);
reverseInPlace(test6);
console.log(test1); // []
console.log(test2); // [ 1 ]
console.log(test3); // [ 2, 1 ]
console.log(test4); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(test5); // [ { '4': 5 }, 3, [ 1, 2 ] ]
console.log(test6); // "hello"
*/


module.exports = reverseInPlace;
