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
  let decimal = binary.split('').reverse().reduce((sum, num, i ) =>{
    sum += parseInt(num) * Math.pow(2, i)
    return sum
  }, 0)
  return decimal
}

const decToX = (decStr, num, map) =>{
  let dec = parseInt(decStr)
  const result = []
  let tmp = dec
  let i = 0
  while(tmp > 0){
    console.log(tmp)
    // console.log(result)
    if ( tmp % num !== tmp || tmp === 1) { result.push(1)}
    else {result.push(0)}
    console.log(result)
    tmp -= num
  }
  // console.log(result)
  return result.reduce((str, num)=>{
    str += map[num]
    return str
  }, '')
}
const decToBin = decimal => {
  let map = {'1': 1, '0': 0}
  return decToX(decimal, 2, map)
}
const decToHex = decimal =>{
  let map = {
    '15': 'F',
    '14': 'E',
    '13': 'D',
    '12': 'C',
    '11': 'B',
    '10': 'A',
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
    '1': 1,
    '0': 0}
  return decToX(decimal, 16, map)}

console.log(decToBin('8')) // 1000
console.log(decToBin('7')) // 111
// console.log(decToX('5', 2 )) // 101
// console.log(binToDec('0') )//  -> 0
// console.log(binToDec('11') )// -> 3
// console.log (	binToDec('100') )//-> 4
// console.log(binToDec('101') )//-> 5
//  *  binToDec('0101') -> 5

module.exports = binToDec;
