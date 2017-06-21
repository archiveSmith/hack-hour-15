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
   let romanN = [];
   const conversions = {
     1: 'I',
     5: 'V',
     10: 'X',
     50: 'L',
     100: 'C',
     500: 'D',
     1000: 'M'
   };
   const tenQuotient = Math.floor(n / 10);
   if (tenQuotient > 0 && tenQuotient < 4) {
     for (let i = 0; i < tenQuotient; i++) romanN.push(conversions[10]);
   }
   const tenRemainder = n % 10;
   if (tenRemainder > 0 && tenRemainder < 4) {
     for (let i = 0; i < tenRemainder; i++) romanN.push(conversions[1]);
   } else if (tenRemainder === 4 || tenRemainder === 9) {
     romanN.push(conversions[1] + conversions[tenRemainder + 1]);
   }
   const fiveQuotient = Math.floor(n / 5);

   return romanN.join('');
 }

module.exports = romanNumeral;
