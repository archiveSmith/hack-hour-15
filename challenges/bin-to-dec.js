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


// 128, 64, 32, 16, 8, 4, 2, 1

// Given a binary string, get the decimal number equivalent
// Start from the end of the string, and convert each digit into a number
    // use map & reduce
// If 0, add 0
// If 1, add the corresponding number

function binToDec(binary) {
    let binaryArr = [1, 2, 4, 8, 16, 32, 64, 128];
    let counter = -1;
    binaryDigits = binary.split('').reverse();
    return binaryDigits.map((digit) => {
        counter += 1;
        return parseInt(digit) ?  binaryArr[counter] : 0;
    }).reduce((acc, val) => {
        return acc + val;
    });
}


// Given a decimal number, return the corresponding binary string
    // Divide the number by 2, and push the number to an array
        // Use Math.floor to omit the remainder
        // Repeat with the 'altered' number
    // Transform the numbers into 0/1's - 0 for even, 1 for odd

console.log(binToDec('0')) //   -> 0
console.log(binToDec('11')) //  -> 3
console.log(binToDec('100')) // -> 4
console.log(binToDec('101')) // -> 5
console.log(binToDec('0101')) // -> 5


module.exports = binToDec;
