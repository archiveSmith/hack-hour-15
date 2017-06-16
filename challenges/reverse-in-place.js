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
  
  if (!array || array.length === 0 || !Array.isArray(array)) return [];

  let arrCopy = [];

  for (let i = 0; i < array.length; i++) {
  	arrCopy[i] = array[array.length - 1 - i];
  }

  for (let j = 0; j < array.length; j++)
    array[j] = arrCopy[j];
  
  return array;
}

module.exports = reverseInPlace;
