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
  let l = '';
  let r = n;
  do {
    if(r >= 1000) {
      r -= 1000
      l += 'M';
      continue;
    }
    if(r >= 900) {
      r -= 900
      l += 'CM';
      continue;
    }
    if(r >= 500) {
      r -= 500
      l += 'D';
      continue;
    }
    if(r >= 400) {
      r -= 400
      l += 'CD';
      continue;
    }
    if(r >= 100) {
      r -= 100
      l += 'C';
      continue;
    }
    if(r >= 90) {
      r -= 90
      l += 'XC';
      continue;
    }
    if(r >= 40) {
      r -= 40
      l += 'XL';
      continue;
    }
    if(r >= 10) {
      r -= 10
      l += 'X';
      continue;
    }
    if(r >= 9) {
      r -= 9
      l = 'IX';
      continue;
    }
    if(r >= 5) {
      r -= 5
      l += 'V';
      continue;
    }
    if(r >= 4) {
      r -= 4
      l += 'IV';
      continue;
    }
    if(r >= 1) {
      r -= 1
      l += 'I';
      continue;
    }
    break;
  } while (true);

  return l;
}

module.exports = romanNumeral;
