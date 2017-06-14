/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 //find Math functions to aid with exponents
 //power is the number of times base should be multiplied by itself

 //edge cases
 //if power = 0, return 1
 //if base = 0, return 0


function pow(base, power) {
if (power === 0) return 1;
if (base === 0) return 0;

let newBase = base

for(var i = 0; i<power; i++){
newBase = (newBase*base);

}
return newBase;

}

console.log(pow(3, 4));

module.exports = pow;
