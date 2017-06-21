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
  
  if (n >= 4000) return "That number is beyond the scope of this function. Please try a smaller number.";

  let numStr = n + '';
  let numArr = numStr.split('');
  let numArrRev = numArr.reverse();
  
  let thousands = +(numArrRev[3]);
  let hundreds = +(numArrRev[2]);
  let tens = +(numArrRev[1]);
  let ones = +(numArrRev[0]);
  
  let result = '';
  
  // thousands
  
  for (let i = 0; i < thousands; i++) {
    result += 'M';
  }
  
  // hundreds
  
  if (hundreds === 4) {
    result += 'CD';
  } else if (hundreds >= 5 && hundreds < 9) {
    result += 'D';
    for (let j = 0; j < hundreds - 5; j++) {
      result += 'C';
    } 
  } else if (hundreds === 9) {
    result += 'CM';
  } else {
    for (let k = 0; k < hundreds; k++) {
      result += 'C';
    }
  }
  
  // tens
  
  if (tens === 4) {
    result += 'XL';
  } else if (tens >= 5 && tens < 9) {
    result += 'L';
    for (let l = 0; l < tens - 5; l++) {
      result += 'X';
    } 
  } else if (tens === 9) {
    result += 'XC';
  } else {
    for (let m = 0; m < tens; m++) {
      result += 'X';
    }
  }
  
  // ones
  
  if (ones === 4) {
    result += 'IV';
  } else if (ones >= 5 && ones < 9) {
    result += 'V';
    for (let l = 0; l < ones - 5; l++) {
      result += 'I';
    } 
  } else if (ones === 9) {
    result += 'IX';
  } else {
    for (let m = 0; m < ones; m++) {
      result += 'I';
    }
  }
  return result;
}

module.exports = romanNumeral;
