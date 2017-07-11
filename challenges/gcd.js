/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let n;
  // Cover negative numbers
  a = Math.abs(a);
  b = Math.abs(b);
  (a < b) ? n = a : n = b;
  for (let i = n; i > 0; i -= 1) {
    if ( a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

module.exports = gcd;