/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => b - a);
  return array.slice(0,3).reduce((a, b) => a * b);
}
console.log(highestProduct([1,2]));
module.exports = highestProduct;
