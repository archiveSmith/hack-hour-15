/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);
  if (larger % smaller === 0) return smaller;

  let largestFactors = getLargestFactors(smaller);

  while (true) {
    for (let i = 0; i < largestFactors.length; i += 1) {
      if (larger % largestFactors[i] === 0) return largestFactors[i];
    }
    largestFactors = [
      ...getLargestFactors(largestFactors[0]),
      ...getLargestFactors(largestFactors[1]),
    ].sort((a, b) => a - b);
  }
}

const getLargestFactors = (num) => {
  for (let i = 2; num / i >= i; i += 1) {
    if (num % i === 0) return [num / i, i];
  }

  return [num, 1];
}

module.exports = gcd;
