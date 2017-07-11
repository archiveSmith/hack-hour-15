/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a != 'number') return undefined;
  if (typeof b != 'number') return undefined;

  let divPool = a > b ? a : b;
  for (let i = divPool; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 0;
}

module.exports = gcd;