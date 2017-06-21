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
  const map = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M'
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
  let romStr = result.reduce((romStr, num, i)=>{
    romStr = romStr + map[num]
    return romStr
  }, '')
  return romStr
}
console.log(romanNumeral(149)) // IX

module.exports = romanNumeral;
