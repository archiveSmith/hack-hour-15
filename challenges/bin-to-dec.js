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

<<<<<<< HEAD
// function binToDec(binary) {
//   return parseInt((binary + '').replace(/[^01]/gi, ''), 2);
// }

function binToDec(binary) {
  let decimal = 0;
  for(index = binary.length-1; index >=0; index--) {
  	decimal += parseInt(binary[index])*Math.pow(2, binary.length-1-index);
  }
  return decimal
}



console.log(binToDec('0'));
console.log(binToDec('11'));
console.log(binToDec('0101'))
=======
function binToDec(binary) {

}
>>>>>>> b1e9b840b2b710822f65f56b3adb812573a54e92

module.exports = binToDec;
