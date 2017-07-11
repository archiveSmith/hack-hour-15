/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm
  if (a == 0 && b == 0) return 0
  if (a == 0) return b
  if (b == 0) return a
  if ( a == b){
    return a
  } else if (a > b){
    return gcd(a - b, b)
  } else {
    return gcd(a, b - a)
  }
}
// console.log(gcd(3, 3)) // 3
// console.log(gcd(10, 8)) // 2
// console.log(gcd(10, 9)) // 1
// console.log(gcd(24, 18)) // 6

module.exports = gcd;