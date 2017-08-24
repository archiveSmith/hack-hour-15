/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// [1, 2, 6, 9, 4, 10] > 6 * 9 * 10
// sort nums, split to positive and negative groups.
// count negatives, discard if less than two.
function highestProduct(array) {
  //O(nlgn);
  if (!array) return 0;
  if (array.length < 3) return 0;

  array = array.sort((a,b)=> a - b);
  let maxPos = array[array.length - 1];
  let maxNeg = array[0] * array[1];
  let subPos = array[array.length - 2] * array[array.length - 3];
  return Math.max(maxNeg, subPos) * maxPos;
}

console.log(highestProduct([-7, -2, -6, -9, 9, 4, 10]));

module.exports = highestProduct;
