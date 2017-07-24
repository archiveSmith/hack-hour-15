/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
//edge case
  if(array.length < 3){
    return false;
  }
//sort integers from max to min
  function sortFunc(a, b){
    return b - a;
  }
  array.sort(sortFunc)
//multiply the first three and that should be the greatest product you can get
  console.log(array);

  let highProd = array[0] * array[1] * array[2];

  return highProd;
}


module.exports = highestProduct;

console.log(highestProduct([3,1,6,10,2]));
