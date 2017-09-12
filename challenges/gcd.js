/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
  const big = Math.max(a, b);
  const small = Math.min(a, b);

  for (let i = small; i >= 0; i -= 1) {
    if (Number.isInteger(small / i) && Number.isInteger(big / i)) return i;
  }
}

module.exports = gcd;
