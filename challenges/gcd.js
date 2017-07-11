/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const [bigger, smaller] = a > b? [a, b] : [b, a];
  let gdc = 0;
  for (let i = 0; i < bigger; i++) {
    if (bigger % i === 0 && smaller % i === 0 && i > gdc) {
      gdc = i
    }
  }
  return gdc;

}

// console.log(gcd(64,24))

module.exports = gcd;
