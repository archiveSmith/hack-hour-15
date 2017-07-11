/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let i = Math.max(a, b);
  let j = Math.min(a, b);

  let remainder = i % j;

  return remainder === 0 ? j : gcd(j, remainder);
}

module.exports = gcd;