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
    let bin = [256, 128, 64, 32, 16, 8, 4, 2, 1];
    while (binary.length < 9) {
        binary = '0' + binary;
    }

    console.log(binary);

    let sum = 0;
    for (let i = 0; i < binary.length; i++) {
        binary[i] === '1' ? sum += bin[i] : sum;
    }

    return sum;
}


module.exports = binToDec;
