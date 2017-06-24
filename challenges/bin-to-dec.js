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
  let power = binary.length - 1
  let decSum = 0;
  // iterate thru string from the end
  for (let i = binary.length - 1; i >= 0; i -= 1) {
    if (binary[i] === '1') {
      decSum += Math.pow(2, power - i);
    }
  }
  return decSum;
}

function hexadecimal(binary) {
  let power = binary.length - 1
  let hexDigit = 0;
  let hexadecimal = '';
  // iterate thru string from the end
  for (let i = binary.length - 1; i >= 0; i -= 1) {
    if (binary[i] === '1') {
      hexDigit += Math.pow(2, power - i);
      if (hexDigit > 15) {
        hexDigit -= Math.pow(2, power - i);
        if (hexDigit > 9) hexadecimal = letters(hexDigit) + hexadecimal;
        else hexDigit = hexDigit.toString() + hexadecimal;
      }
    }
  }
  return hexadecimal;
}

function letters (hexdigit) {
  switch (hexDigit) {
  case 10:
    hexDigit = 'A';
    break;
  case 11:
    hexDigit = 'B';
    break;
  case 12:
    hexDigit = 'C';
    break;
  case 13:
    hexDigit = 'D';
    break;
  case 14:
    hexDigit = 'E';
    break;
  case 15:
    hexDigit = 'F';
    break;
  }
}
module.exports = binToDec;
console.log(hexadecimal('0'))   //-> 0
 console.log(hexadecimal('11'))  //-> 3
 console.log(hexadecimal('100')) //-> 4
 console.log(hexadecimal('101')) //-> 5
 console.log(hexadecimal('0101')) //-> 5