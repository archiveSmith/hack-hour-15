/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   let result = base;
   if (power === 0) return 1;
   if (power === 1) return base;
   if (power > 1) {
     result = base * pow(result, power - 1);
   }
   return result;
 }

module.exports = pow;
