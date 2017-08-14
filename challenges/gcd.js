/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (!a || !b) return;
  a = Math.abs(a);
  b = Math.abs(b);
  const higher = a > b ? a : b;
  const lower = higher === a ? b : a;
  let divisor = lower;
  for (let divisor = lower; divisor > 0; divisor--) {
    if (higher % divisor === 0 && lower % divisor === 0) return divisor;
  }
}

module.exports = gcd;
