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
  if (array === undefined) return
  const iterate = Math.floor(array.length / 2)
  let tmp;
  let secInd; 
  for (let i = 0; i < iterate; i++){
    secInd = array.length - 1 - i
    tmp = array[secInd]
    array[secInd] = array[i]
    array[i] = tmp
  }
  return array
}
// const even = [1, 2, 3, 4]
// console.log(reverseInPlace(even))
// const odd = [1, 2, 3, 4, 5]
// console.log(reverseInPlace(odd))
// const oddstr = ['a', 'b', 'c', 'd', 'e']
// console.log(reverseInPlace(oddstr))


module.exports = reverseInPlace;
