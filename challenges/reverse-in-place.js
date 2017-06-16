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

// function reverseInPlace(array) {
//   if (!array) return [];
//   for (let i = array.length - 1; i >= 0; i -= 1) {
//     array.push(array[i]);
//   }
//   for (let j = 0; j < array.length; j += 1) {
//     array.shift();
//   }
//   return array;
// }

// Better time complexity
let reverseInPlace = (array) => {
  let temp;
  if (!array) return [];
  for (let i = 0, j = array.length - 1; i < j; i += 1, j -= 1) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

module.exports = reverseInPlace;
