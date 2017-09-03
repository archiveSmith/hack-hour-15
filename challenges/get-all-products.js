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
  const output = [];
  let uniqueCheck = {};
  let zeroCounter = 0;

  // Multiply all nums together
  let allNumsProduct = 1;
  for (let i = 0; i < array.length; i += 1) {
    array[i] === 0 ? zeroCounter += 1 : allNumsProduct *= array[i];
    if (zeroCounter >= 2) return [0];
  }


  // Iterate through array, factoring one num out at a time and pushing result to array
  for (let i = 0; i < array.length; i += 1) {
    let product = array[i] === 0 ? 0 : allNumsProduct / array[i];
    if (!uniqueCheck[product]) {
      output.push(product);
      uniqueCheck[output[output.length - 1]] = true;
    }
  }

  return output;
}

console.log(getAllProducts([1, 7, 3, 4, 7, 0, 0, 0]));

module.exports = getAllProducts;
