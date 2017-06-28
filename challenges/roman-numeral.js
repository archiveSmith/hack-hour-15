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
  //declare an object with numerals and corresponding values
  const romans = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }
  //cycle through this object seeing if values fit in
  //how to get IX instead of VIII -- check to see if within range 
  // if within certain range, if within 10%??
  let remainingVal = n;
  let numeral = '';
  const keys = Object.keys(romans);
  for(let i = 0; i < keys.length; i += 1) {
    while (remainingVal - romans[keys[i]] > 0) {
      numeral += keys[i];
      remainingVal -= romans[keys[i]];
    } 
    if (Math.abs(remainingVal - romans[keys[i]]) >= remainingVal * .9) {
      numeral += keys[i+2];
      numeral += keys[i];
      remainingVal -= romans[keys[i+2]] - romans[keys[i]];
    } else if (Math.abs(remainingVal - romans[keys[i]]) >= remainingVal * .8) {
      numeral += keys[i+1];
      numeral += keys[i];
      remainingVal -= romans[keys[i+1]] - romans[keys[i]];
    }
  }
  return numeral;
}

module.exports = romanNumeral;
