/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // Edge cases
  if (!Number.isInteger(a) || !Number.isInteger(b)) return undefined;
  if (a < 1 || b < 1) return 1;
      
  // Brute force
  // Iterate from the max of (min(a/2, b), min(b/2, a)) to 1
  const max = Math.max(Math.min(Math.floor(a/2), b), Math.min(Math.floor(b/2), a));
  
  for (let i = max; i >= 1; i -= 1) {
    // if a % i == 0 and b % i == 0 return i 
    if (a % i === 0 && b % i === 0) return i
  }
    
}

// Test cases
//console.log(gcd(10, 8), 'should be 2');
//console.log(gcd(10, 9), 'should be 1');
//console.log(gcd(100, 70), 'should be 10');
//console.log(gcd(101, 70), 'should be 1');
//console.log(gcd(121, 11), 'should be 11');
//console.log(gcd(-121, -11), 'should be 1');

module.exports = gcd;