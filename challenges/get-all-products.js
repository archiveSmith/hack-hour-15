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


   // Create an array to store results
  // Create two loops that go through the array
  // At the start of each innner loop, create a var at 1 as our start
  // If the index of our inner loop matches the index of the outer loop, skip it
  // Otherwise multiply it with our var
  // At the end of each second loop, push the result into our array
  // Once the first loop is done, return the array

function getAllProducts(array) {
  if (array.length === 0) return false; 
  if (array.length === 1) return array; 
  let result = []; 
  for (let i = 0; i < array.length; i++) {
  	let product = 1; 
  	for (let y = 0; y < array.length; y++) {
  		if (y !== i) product *= array[y]; 
  	}
  	result.push(product);
  }
  return result; 
}



module.exports = getAllProducts;
