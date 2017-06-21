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


// Input: Number
// Output: Roman Numeral

// Given a number, return the roman numeral equivalent
// Start at single digits
    // Store our single digits in an array (0 is an empty string)
    // Store any denominations of 5's and 10's
// Use recursion to go from thousands => single digits

function romanNumeral(n) {
    let output = '';
    let singles = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let thousands = ['M', 'MM', 'MMM'];
    if (n < 10) {
        return singles[n];
    }
    if (n >= 10 && n < 100) {
        // how to get the single digits?
        return tens[Math.floor(n/10) - 1]  + romanNumeral(n - Math.floor(n/10) * 10);
    }
    if (n < 1000) {
        return hundreds[Math.floor(n/100) - 1] + romanNumeral(n - Math.floor(n/100) * 100);
        // get the hundred position
    }
    if (n > 1000 && n < 4000) {
        return thousands[Math.floor(n/1000) - 1] + romanNumeral(n- Math.floor(n/1000) * 1000);
    }
}


module.exports = romanNumeral;
