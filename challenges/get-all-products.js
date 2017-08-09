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

 // Input
  // Array of integers
// Output
  // Array of integers, containing all possible products of the input numbers except one

function getAllProducts(array) {
  if (array.length === 0) return [0];
  // Create an output var
  const output = [];
  // Iterate through the array
  array.forEach((outer, i) => {
    // Create a product var
    let product = 1;
    // Iterate through the array
    array.forEach((inner, j) => {
      // if the current inner element is not the outer element, multiply it to the product
      if (j !== i) product *= inner;
    });
    // Push the product to the output
    output.push(product);
  });
  // Return the filtered output
  // return output.filter((prod, i) => output.indexOf(prod) === i);
  return output;
}

// Test [] input [ 1 ] input [ 1, 2 ] input [ 1, 2, 3 ] input [ 5, 2, 2, 3, 4 ] input [ 5, 0, 2, 3, 4 ]
console.log(getAllProducts([]), [0]);
console.log(getAllProducts([ 1, 2 ]), [ 1, 2 ]);
console.log(getAllProducts([ 1, 2, 3 ]), [2, 3, 6]);
console.log(getAllProducts([ 5, 0, 2, 3, 4 ]), [0, 120, 0, 0, 0]);
console.log(getAllProducts([1, 7, 3, 4]), [84, 12, 28, 21]);


module.exports = getAllProducts;
