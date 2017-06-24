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
	let output = 0; 
	for (var i = 0; i < binary.length; i++) {
	    output *= 2;
	    switch (binary.charAt(i)) {
	      case '0': break;
	      case '1': output += 1; break;
	      default:  return 0;
	    }
	  }
	return output;
}

module.exports = binToDec;



÷