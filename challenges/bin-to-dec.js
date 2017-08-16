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
    // Read string from right to left, determin length first 
    const length = binary.length; 
    let result = 0; 
    let pow = 0; 


    // base case 2^0 = 1

    // loop through binary (a string)
    for (let i = length - 1; i >= 0; i -= 1, pow += 1) {
        if (parseInt(binary[i]) === 1) { // only calculate when 1 is found
            result = result + Math.pow(2, pow); 
        }
    }
    return result; 
}

module.exports = binToDec;
