/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) return 0; 
	let highest = -Infinity; 
	for (let a = 0; a < array.length - 2; a++) {
		for (let b = 1 + a; b < array.length - 1; b++) {
			for (let c = 1 + b; c < array.length; c++) {
				let prod = array[a] * array[b] * array[c];
				if (prod > highest) {
					highest = prod; 
				}
			}
		}
	}
	return highest; 
}


module.exports = highestProduct;
