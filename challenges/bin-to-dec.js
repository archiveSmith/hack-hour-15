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
    return parseInt(binary, 2)
}

// function decToBin(dec) {
//     return parseInt(dec, 10)
// }

// function binToHex(bin) {
//     return parseInt(bin, 16)
// }

// function binToDec(binary) {
//     const array = binary.split('').reverse();
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === '1'){
// 	    result += Math.pow(2,i);
// 	    }
//     }
//     return result;
// }


module.exports = binToDec;
