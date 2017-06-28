/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
<<<<<<< HEAD
 * 	binToDec('0')   -> 0
=======
* 	binToDec('0')   -> 0
>>>>>>> b1e9b840b2b710822f65f56b3adb812573a54e92
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

<<<<<<< HEAD
// function binToDec(binary) {
//     return parseInt(binary, 2);
// }

function binToDec(binary) {
    let arr = binary.split("");
    let sum = 0;
    for (let x in arr) {
        if (arr[x] === '1') {
            sum += Math.pow(2, arr.length - 1 - x);
        }
    }
    return sum;
}
module.exports = binToDec;
=======
function binToDec(binary) {

}

module.exports = binToDec;
>>>>>>> b1e9b840b2b710822f65f56b3adb812573a54e92
