/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// function gcd(a, b) {
//   const [bigger, smaller] = a > b? [a, b] : [b, a];
//   let gdc = 0;
//   for (let i = 0; i < bigger; i++) {
//     if (bigger % i === 0 && smaller % i === 0 && i > gdc) {
//       gdc = i
//     }
//   }
//   return gdc;
//
// }

// function gcd(a, b) {
//   var div = Math.min(a, b);
//   for (var i = div; i > 0; i--) {
//     if (a % i === 0 && b % i === 0) return i;
//   }
//   return 1;
// }
function gcd(a, b) {
  console.log(b)
  if (b === 0) return a;
  return gcd(b, a % b);
}

// console.log(gcd(200000000000004, 100000000000002))

module.exports = gcd;
