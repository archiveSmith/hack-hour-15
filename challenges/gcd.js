/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Invalid arguments';
  const greatest = [];
  const min = Math.min(a, b)
  for (let i=0; i < min+1; i++) {
    if (a%i === 0 && b%i === 0) greatest.push(i);
  };
  return greatest[greatest.length-1];
};

module.exports = gcd;