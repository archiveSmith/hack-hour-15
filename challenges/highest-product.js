/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) return false; 
	var sortArr = array.sort((a,b) => b-a);
	return sortArr[0] * sortArr[1] * sortArr[2];
}


module.exports = highestProduct;
