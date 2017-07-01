/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  let biggest3;
  let smallest2;
  array.sort((a, b) => b - a)
  biggest3 = array.slice(0,3);
  smallest2 = array.slice(-2);
  if ((biggest3[1] * biggest3[2]) > (smallest2[0] * smallest2[1])) return biggest3.reduce((a, b) => a * b);
  return biggest3[0] * smallest2.reduce((a, b) => a * b);
}
// console.log(highestProduct([4, 5, 6, 10, 2, 100]));
module.exports = highestProduct;
