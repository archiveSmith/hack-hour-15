/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  const denom = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  const str = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C']
  const map = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL'
  }
  let tmp = n 
  let result = []
  for (let i = denom.length - 1; i >= 0 ; i-- ){
    if (tmp % denom[i] === tmp) continue
    while( tmp % denom[i] !== tmp){
      result.push(denom[i])
      tmp -= denom[i]
    }
  }
  // console.log(map['1'])
  // console.log(map[1])
  // console.log(result)
  let romStr = result.map((str, num, i)=>{
    console.log(num)
    // console.log(map[num])
    str = str + map[num]
  }, '')
  return romStr
}
// function divideUp(denom, n){
//   if (n === 0) return [0]
//   if (n === 1) return [1]
//   console.log(n)
//   for (let i = denom.length - 1; i > 0 ; i-- ){
//     if (n % denom[i] === n) continue

//     return [].concat(divideUp(denom, n - [denom[i]]))
//   }
// }
console.log(romanNumeral(1)) // I
console.log(romanNumeral(10)) // X
// console.log(romanNumeral(9)) // IX
// console.log(romanNumeral(13)) // XIII
// console.log(10 % 11)
// console.log(11 % 11)
// console.log(13 % 11)

module.exports = romanNumeral;
