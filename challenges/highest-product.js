/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!array
    || array.length === 0
    || array.some(element => typeof element !== 'number')
  ) return;
  array.sort((a, b) => b - a);
  return array[0] * array[1] * array[2];
}


module.exports = highestProduct;
