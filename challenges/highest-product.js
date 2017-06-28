/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(!Array.isArray(array)) return undefined;
  let max = 0;
  for(let i = 0; i < array.length; i += 1) {
    for(let j = 0; j < array.length; j += 1) {
      for(let k = 0; k < array.length; k += 1) {
        if(i !== j && j !== k && k !== i) {
          let product = array[i] * array[j] * array[k];
          console.log(array[i]+' * '+array[j]+' * '+array[k]+' = '+product);
          if (product > max) max = product;
        }
      }
    }
  }
  return max;
}


module.exports = highestProduct;
