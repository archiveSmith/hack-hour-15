/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 // input: base, power
 // output: number

 // edge cases:
  // power = 0;
  // power is not a number
  // power is a negative number
function pow(base, power) {
  if (power === -1) {
    return base;
  }
  if (power === 1) {
    return base;
  }
  if (power === 0) {
    return 1;
  }
  if (power > 1) {
    return base * pow(base, power - 1);
  }
  if (power < -1) {
    return 1 / (base * pow(base, power + 1));
  }
}

console.log(pow(4, 3)); // 64
console.log(pow(4), -3); // 1/64 - 0.015625

module.exports = pow;
