/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// Input
  // Two integers

// Output
  // GCD of those two integers

// Edge cases
  // if a or b is not a valid number

function gcd(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') return;

  let i = Math.max(a, b);
  let j = Math.min(a, b);

  let remainder = i % j;

  return remainder === 0 ? j : gcd(j, remainder);
}

module.exports = gcd;