/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Invalid input'

  let div = Math.min(Math.floor(a/2), Math.floor(b/2));

  while (div > 1) {
    if (a % div === 0 && b % div === 0) return div;

    div -= 1;
  }
  return div;
}

module.exports = gcd;