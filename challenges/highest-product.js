/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(!array.length || array.length < 3) return undefined;
  let sortedArr = array.sort().reverse();
  let result = sortedArr[0] * sortedArr[1] * sortedArr[2];
  return result;
}

console.log(highestProduct([1,4,8,2,6])); // === 192
console.log(highestProduct([1,4]));
console.log(highestProduct([1,4,9,6]));
console.log(highestProduct([1,2,3]));

module.exports = highestProduct;
