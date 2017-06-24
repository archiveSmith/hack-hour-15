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

// Input 
  // String, a number in binary (only ones and zeros)
// Ouput
  // Integer that is the representation of the input as a number

function binToDec(binary) {

  // Initialize an output number
  let output = 0;
  
  // Iterate through the input string right to left
  for (let i = 0; i < binary.length; i += 1) {
  
    // add (2 ^ i) * the current number to the output
    output += Math.pow(2, i) * binary[binary.length - i - 1];
    
  }
  
  //return the output
  return output;
}

// Test cases
console.log(binToDec('0'))    // -> 0
console.log(binToDec('11'))   // -> 3
console.log(binToDec('100'))  // -> 4
console.log(binToDec('101'))  // -> 5
console.log(binToDec('0101')) // -> 5

module.exports = binToDec;
