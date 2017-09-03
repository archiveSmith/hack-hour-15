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
  binary = parseInt(binary);

  const intBinToDec = (binary, multiplier = 0) => {
    if (binary === 0) return 0;
    if (binary === 1) return Math.pow(2, multiplier);

    const endDigit = Math.floor(binary % 10);
    if (endDigit === 0) return 0 + intBinToDec(Math.floor(binary / 10), multiplier + 1)
    else return Math.pow(2, multiplier) + intBinToDec(Math.floor(binary / 10), multiplier + 1);
  }

  return intBinToDec(binary);
}

const decToBin = (decimal) => { // 5
  if (decimal === 0) return 0;

  let output = '';
  let quotient = decimal;

  while (quotient !== 0) {
    let remainder = quotient % 2 === 0 ? 0 : 1;
    output = remainder.toString() + output;
    quotient = Math.floor(quotient / 2);
  }

  return output;
}

module.exports = binToDec;
