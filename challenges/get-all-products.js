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
  let fixedMultiple = array[array.length - 1];
  let currentProduct = fixedMultiple
  let indexToExclude = 0;
  let newArr = [];
  if (array.length === 0) return [0];
  while(indexToExclude < array.length - 1) {
    for(let i = array.length - 2; i >= 0; i -= 1) {
      if (i !== indexToExclude) currentProduct = currentProduct * array[i];
    }
    newArr.push(currentProduct);
    currentProduct = fixedMultiple;
    indexToExclude += 1;
  }
  currentProduct = 1;
  for (let j = 0; j < array.length - 1; j += 1) {
    currentProduct = currentProduct * array[j]
  }
  newArr.push(currentProduct);
  return newArr;
}

// console.log(getAllProducts([1, 7, 3, 4]));//  [84, 12, 28, 21]

module.exports = getAllProducts;
