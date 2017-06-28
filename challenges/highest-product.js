/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length === 0) return new Error('enter valid input');
  if (array.length < 3) return 0;

  let high2 = array[0] * array[1];
  let low2 = array[0] * array[1];
  let high1 = Math.max(array[0], array[1]);
  let low1 = Math.min(array[0], array[1]);
  let result = high2 * array[2];
  for (let i = 2; i < array.length; i++) {
    result = Math.max(result, Math.max(high2 * array[i], low2 * array[i]));
    high2 = Math.max(high2, Math.max(high1 * array[i], low1 * array[i]));
    low2 = Math.min(low2, Math.min(high1 * array[i], low1 * array[i]));
    high1 = Math.max(high1, array[i]);
    low1 = Math.min(low1, array[i]);

  }
  return result;
}

module.exports = highestProduct;
