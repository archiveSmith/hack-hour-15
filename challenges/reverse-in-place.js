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
 let test = [1, 2, 3, 4, 5, 6] //=> [6, 5, 4, 3, 2, 1] [1 2 3 4 6 5]
function reverseInPlace(array) {
  if (array.length === 0) return [];
  let len = array.length - 2; //second to last element.
  for (let i = 0; i <= len; i++){
    let char = array.splice(len - i, 1)[0]
    array.push(char);
  }
  return array;
  //grab length, start pushing things around in array.
}

console.log(reverseInPlace(test));

module.exports = reverseInPlace;
