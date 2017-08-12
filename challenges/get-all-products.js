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
  if (!Array.isArray(array)) return 'Invalid input';
  if (array.length === 0) return 0;
  if (array.length === 1) return array;
  const products = array.map(elem => 1);
  let productForward = array[0];
  let productBackward = array[array.length - 1];
  for (let i = 1; i < products.length; i += 1) {
    products[i] *= productForward;
    products[products.length - 1 - i] *= productBackward;
    productForward *= array[i];
    productBackward *= array[array.length - 1 - i];
    console.log(products);
  }
  return products;
}

console.log([1, 7, 3, 4].slice())

module.exports = getAllProducts;
