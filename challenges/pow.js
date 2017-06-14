/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//will only work for positive powers due to recursion and the base being equal to 0
//need to figure out how to incorporate negative numbers as a power argument

function pow(base, power) {
  if ((base === 0 && power === 0) || power < 0 ||!Number.isInteger(power) || !Number.isInteger(base)) 
  {return 'Arguments are not calculable'};
  return recursive(base, power);
}

function recursive(base, power) {
    if (power === 0) return 1;
    return base * recursive(base, power - 1);
}

module.exports = pow;
