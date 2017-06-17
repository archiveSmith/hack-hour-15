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
// Output: array reversed

// Caveats: No built in array functions. Do not create a new array or object to do this. 

// Process: 
// Find array's length. 
// Loop through half of the array via a traditional for Loop
// Switch the item at the current index with the item at the same index from the end of the array
// Return the array

function reverseInPlace(array) {
  if (array === undefined) return [];
  const length = array.length;
  const halfLength = Math.floor(length / 2);
  for (let i = 0; i < halfLength; i += 1) {
    let char = array[length - 1 - i];
    array[length - 1 - i] = array[i];
    array[i] = char; 
  }
	return array; 
}
module.exports = reverseInPlace;
