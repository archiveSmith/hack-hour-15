/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// Given 2 integers

    // Get the greatest common divisor
    // Try finding common denominators
        //  using the smaller number of the inputs as the max case
        
    // Even x Even = Even
    // Even x Odd = Even
    // Odd x Odd = Odd

    // If the number is odd, test for odd numbers only
    // If the number is even, test all numbers

// Given 2 integers
    // Loop through the smaller integer, decrement by 1
    // If both numbers are integers, then return the GCF
    // Continue until 1

// Time Complexity => N

function gcd(a, b) {
    let lowerNum = Math.min(a, b);
    for (let i = lowerNum; i > 0; i--) {
        if (Number.isInteger(a / i) && Number.isInteger(b / i)) return i;
    }
    return 1;
}

console.log(gcd(10, 8)); // 2
console.log(gcd(10, 9)); // 1
console.log(gcd(12, 6)); // 6
console.log(gcd(24, 16)); // 8

module.exports = gcd;

// Euclid's Algorithm
    // Logarithmic (where n is the smaller number)
    
// m = c1 * n + r1
// n = r1 + r2
// r1 = c3 * r2 + r3
// rn-2 = cn2 * rn-1 + rn

// rn-1 = cn-1 * rn + 0