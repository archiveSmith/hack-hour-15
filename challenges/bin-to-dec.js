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
  let arrNum = binary.split("").map(Number).reverse();
  //map each int to the exponent of it's index, take the sum
  var binSum = 0;
  for (let i = 0; i < arrNum.length; i++){
      if (arrNum[i] === 1){
        binSum += Math.pow(2, i);
      }
  }
    return binSum;
}

console.log("answer", binToDec('101'));

module.exports = binToDec;
