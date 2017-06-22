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
  if (typeof n !== 'number') return 'Enter valid input';
  const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const numarr = String(n).split('').map(el => Number(el));

  let numstr = '';
  if (numarr.length < 4) numarr.unshift(0);
  let idx = 0;
  for(let i = 0; i < numarr.length; i++) {
    if (i === 0){
      if(numarr[i] > 0) {
        for (let j = numarr[i]; j > 0; j--){
          numstr += romanNums[idx];
        }
      }
      idx += 1;
    }
    else {
      if (numarr[i] === 9) {
        numstr += romanNums[idx];
      } else if (numarr[i] >= 5) {
        numstr += romanNums[idx + 1];
        for (let j = numarr[i]; j > 5; j--){
          numstr += romanNums[idx + 3];
        }
      } else if (numarr[i] === 4) {
        numstr += romanNums[idx + 2];
      } else {
        for (let j = numarr[i]; j > 0; j--){
          numstr += romanNums[idx + 3];
        }
      }
      console.log(numstr)
      idx += 4;
    }

  }
  return numstr;
}

console.log(romanNumeral(4293)) //->MMMMDCCXCIII

module.exports = romanNumeral;
