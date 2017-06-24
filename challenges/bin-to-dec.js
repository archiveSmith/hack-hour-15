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
//console.log(binToDec('0'))    // -> 0
//console.log(binToDec('11'))   // -> 3
//console.log(binToDec('100'))  // -> 4
//console.log(binToDec('101'))  // -> 5
//console.log(binToDec('0101')) // -> 5
//console.log(binToDec('1010101110101')) // -> 5493

// Input
  // Integer
// Output
  // String that is the input in binary

function decToBin(num) {
  
  // Declare an output string
  let output = '';
  
  // Find the largest power of two that goes into num
    let largestPower; // not sure how to do this
  
  // Add a 1 to the output string
  output += '1';
  
  // Subtract the power from the numer
  num -= largestPower;
  
  function powerOfTwo(num, power) {
    return num >= Math.pow(2, power);
  }
  
  // Iterate from the largest power -1 to zero
  
    // If the 2^i is less than the number
      
      // Add a 1 to the output string
  
      // Subtract the power from the numer
  
    // Else 
      
      // Add a 0 to the output string
  
  // Return the output string
}

module.exports = binToDec;
