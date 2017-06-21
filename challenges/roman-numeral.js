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

function romanTransform(n) {
  switch (n) {
    case 1000:
      return 'M';
      break;
    case 900:
      return 'CM';
      break;
    case 500:
      return 'D';
      break;
    case 400:
      return 'CD';
      break;
    case 100:
      return 'C';
      break;
    case 90:
      return 'XC';
      break;
    case 50:
      return 'L';
      break;
    case 40:
      return 'XL';
      break;
    case 10:
      return 'X';
      break;
    case 9:
      return 'IX';
      break;
    case 5:
      return 'V';
      break;
    case 4:
      return 'IV';
      break;
    case 1:
      return 'I';
      break;
  }
}

function romanNumeral(n) {
  const denominations = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let numToRomanize = n;
  let romanNumeral = '';
  let biggestDenomIndex = 0;
  while (numToRomanize !== 0) {
    if (numToRomanize >= denominations[biggestDenomIndex]) {
      romanNumeral += romanTransform(denominations[biggestDenomIndex]);
      numToRomanize -= denominations[biggestDenomIndex];
    } else {
      biggestDenomIndex += 1;
    }
  }
  return romanNumeral;
}

module.exports = romanNumeral;
