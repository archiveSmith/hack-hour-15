/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
 // weak implementation
// function gcd(a, b) {
//   let gcd;
//   // max gcd must be less than the difference between both numbers.
//   let max = a - b > 0 ? a - b : b - a;
//   // max must also be less than both numbers, check to eliminate disparities.
//   max  = max > a ? a : max;
//   max = max > b ? b : max;
//   // console.log("max ", max);
//   for (let i = 1; i <= max; i++) {
//     if (a % i === 0 && b % i === 0) gcd = i;
//   }
//   return gcd;
// }
  //Euclid's theorem combined with GCPF technique used above.
function gcd(a, b) {
  if (a === 0 && b === 0) return 0;
  // div great by small, pass rem and small into next iter.
  // repeat until mod 0, return small.

    // max gcd must be less than the difference between both numbers.
    let max = a - b > 0 ? a - b : b - a;
    // console.log(a, b, max);
    //reassign one of a or b if larger than the maximum to the maximum to reduce calculation time.
    if (a > max){
      a = max;
    } else if (b > max){
      b = max;
    }
  if (a === 0) return b;
  if (b === 0) return a;
  if (a > b){
    a = a % b;
    return gcd(a, b);
  } else if (b > a) {
    b = b % a;
    return gcd(a, b);
  }
  //catches case where a === b;
  return gcd(a, b - a);
}

console.log(gcd(10,8), "should be 2");
console.log(gcd(10,9), "should be 1");
console.log(gcd(30,10), "should be 10");
console.log(gcd(10000, 1000), "should be 1000");
console.log(gcd(36, 27), "should be 9");
console.log(gcd(14, 28), "should be 14");
console.log(gcd(72,80), "should be 8");
console.log(gcd(42,60), "should be 6");
console.log(gcd(12,20), "should be 4");
console.log(gcd(100000000000002, 100000000000004))

module.exports = gcd;
