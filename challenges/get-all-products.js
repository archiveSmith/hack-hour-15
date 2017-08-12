/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let currArray;
  let output = [];
  for (let i = 0; i < array.length; i++) {
    currArray = array.slice();
    currArray.splice(i, 1);
    let product = currArray.reduce((tot, val) => {
      return tot * val;
    }, 1);
    output.push(product);
  }
  return output;
}

console.log(getAllProducts([1, 7, 3, 4])); // [84, 12, 28, 21];

// Get an array of all permutations
  // Loop through the array
  // Create new instance of array, using splice
  // Use reduce, and push product into output array
// Return the output

module.exports = getAllProducts;
