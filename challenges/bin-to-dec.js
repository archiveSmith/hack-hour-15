/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	let sum = 0;
	let index = 0;
	for (let i=binary.length - 1; i>=0; i--){
	  
	  console.log(binary.charAt(i));
		if(binary.charAt(i) === "1"){
			sum += Math.pow(2, index)
		}
		index++;
	}
	return sum;
}

module.exports = binToDec;
