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
  const binarr = binary.split('');
  console.log(binarr)
  let num = 0;
  for (let n = 0; binarr.length > 0; n++) {
    num += Number(binarr.pop()) * Math.pow(2, n);
  }
  return num;
}

function decToBin(number) {
  if (number === 0) return '0';
  let bin = '';
  while(number) {
    bin = number % 2 + bin;
    number = Math.floor(number / 2);
  }
  return bin;
}

function decToHex(number) {
  if (number === 0) return '0';
  let hexAscii = ['A', 'B', 'C', 'D', 'E', 'F']
  let hex = '';
  while (number) {
    let rem = number % 16;
    if (rem > 9) {
      rem = hexAscii[rem - 10];
    }
    hex = rem + hex;
    number = Math.floor(number / 16);
  }
  return hex;
}

console.log(decToHex(5)) //59AEB515

module.exports = binToDec;
