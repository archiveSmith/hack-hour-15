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
  let decimal = 0;
  let binArr = binary.split('')
  let pastZero = false;
  
  for(let i = 0; i < binArr.length; i += 1) {
    if(binArr[i] === '1') pastZero = true;
    if(binArr[i] === '0' && !pastZero) continue;
    else {
     const place = binArr.length - i;
     let subtract = binArr[i] === '1' ? 0 : 1;
     let add = (Number(place) - subtract);
     console.log(place, subtract);
     decimal += add;
    }
  }
  return decimal;
}

module.exports = binToDec;


