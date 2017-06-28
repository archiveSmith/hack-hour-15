/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length<3){
		return "Not enough numbers"
	}
	array = array.sort((a,b)=> return b - a);
	return array[0]*array[1]*array[2];
}


module.exports = highestProduct;
