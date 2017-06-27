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

function decToBin(num){
  let bin = [];
  let digit = 0;
  while (num > 0){
    digit = (num % 2);
    bin.unshift(digit);
    num = (num - digit) /2;
  }
  console.log(bin.join(''));
  return bin.join('');
}

console.log(binToDec(decToBin(999999999999999)));

console.log(decToBin(999999999999999));
console.log(binToDec('100011100001101111001001101111110000010000000000000000'))
console.log(binToDec('100011100001101111001001101111110000001111111111111111'));



module.exports = binToDec;
