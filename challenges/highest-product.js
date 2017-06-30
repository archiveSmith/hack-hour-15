/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  return array.sort((a, b) => Math.abs(b) - Math.abs(a)).slice(0,3).reduce((a, b) => a * b);
}
console.log(highestProduct([1,2, -3, -4, -5]));
module.exports = highestProduct;
