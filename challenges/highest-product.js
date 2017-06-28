/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
 array.sort((a, b)=> {return a - b});
//array.sort();
console.log(array)
return array[array.length-1]*array[array.length-2]*array[array.length-3]
}


module.exports = highestProduct;
console.log(highestProduct([21,9,1,1,2,3,4,5]))