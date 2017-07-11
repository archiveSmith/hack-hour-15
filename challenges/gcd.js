/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let amax = Math.abs(a);
	let bmax = Math.abs(b);
	let end = Math.ceil(Math.max(amax,bmax));
	let div = 1; 
	for (let i = 2; i < end; i++) {
		if (a % i === 0 & b % i === 0) div = i; 
	}
	return div; 
}

module.exports = gcd;