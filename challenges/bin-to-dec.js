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
//add 2^n * val[idx] for numbers. n = ary.len - i;
 let ary = binary.slice('');
 let len = ary.length - 1;
 let dec = 0;
 for (let i = 0; i < ary.length; i++){
   let digit = Number(ary[i]);
   dec += digit * Math.pow(2, len - i);
 }

 return dec;
}


module.exports = binToDec;
