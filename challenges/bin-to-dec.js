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

// function hexadecimal(binary) {
//   let power = binary.length - 1
//   let hexDigit = 0;
//   let hexadecimal = '';
//   // iterate thru string from the end
//   for (let i = binary.length - 1; i >= 0; i -= 1) {
//     if (binary[i] === '1') {
//       hexDigit += Math.pow(16, power - i);
//       //fix this
//       if (hexDigit > 15) {
//         hexDigit -= Math.pow(2, power - i);
//         if (hexDigit > 9) hexadecimal = letters(hexDigit) + hexadecimal;
//         else hexadecimal = hexDigit.toString() + hexadecimal;
        
//         // console.log(hexadecimal)
//       }
//     }
//   }

//   if (hexDigit > 9) hexadecimal = letters(hexDigit) + hexadecimal;
//   else hexadecimal = hexDigit.toString() + hexadecimal;
//   return hexadecimal;
// }

// function letters (hexdigit) {
//   switch (hexdigit) {
//     case 10:
//       hexdigit = 'A';
//       break;
//     case 11:
//       hexdigit = 'B';
//       break;
//     case 12:
//       hexdigit = 'C';
//       break;
//     case 13:
//       hexdigit = 'D';
//       break;
//     case 14:
//       hexdigit = 'E';
//       break;
//     case 15:
//       hexdigit = 'F';
//       break;
//   }
//   return hexdigit
// }

function hexadecimal(binary) {
  // slice by 4 from the end
  // map 0 to F
  switch (binary)
}
module.exports = binToDec;
console.log(hexadecimal('0'))   //-> 0
 console.log(hexadecimal('11'))  //-> 3
 console.log(hexadecimal('100')) //-> 4
 console.log(hexadecimal('101')) //-> 5
 console.log(hexadecimal('1101111')) //-> D
