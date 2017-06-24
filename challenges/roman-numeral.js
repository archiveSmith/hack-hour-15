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
<<<<<<< HEAD
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = ''; //convert to string like roman numerals
  
  if(n === 0) return undefined;
  
  for(let i = 0; i < roman.length; i++) {
    while(n >= arabic[i]) { 
      result = result + roman[i];
      n = n - arabic[i]; 
    
  }
}
return result;
}

console.log(romanNumeral(0));
=======

>>>>>>> d071c56f26fb56db855e191d9deafd6a5394bfa5
}

module.exports = romanNumeral;
