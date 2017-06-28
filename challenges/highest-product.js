/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// Input
  // An array of integers

// Output
  // Find the highest product you can get from three of the integers

// Edge cases
  // If the array is not of length 3
  // If the array does not have any numbers

// Sort the array using .sort()

function highestProduct(array) {
  if (array.length < 3) return 0;

  array.sort( (a, b) => {return b - a});

  let max = array[0] * array[1] * array[2];
  return max;
}


module.exports = highestProduct;
