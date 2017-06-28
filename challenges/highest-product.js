/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort((a, b) => b - a).slice(0,3).reduce((a, b) => a * b);
}
console.log(highestProduct([1,2, 3, 4]));
module.exports = highestProduct;
