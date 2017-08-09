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
  if (array.length === 0) return [0];
  const arr = array.map((e, i, a) => {
    let p = 1;
    a.forEach((f,j,b) => {
      if (i !== j) p = p*f;
    });
    return p;
  });
  return arr;
}
// arr = [0,7,3,4];
// console.log(getAllProducts(arr));

module.exports = getAllProducts;
