/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  let biggest3;
  let smallest2;
  array.sort((a, b) => b - a)
  biggest3 = array.slice(0,3);
  smallest2 = array.slice()
  
  
  reduce((a, b) => a * b);
}
console.log(highestProduct([1,2, -3, -4, -5]));
module.exports = highestProduct;
