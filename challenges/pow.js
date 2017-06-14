/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	for (let i = 1; i < power; i += 1) {
		base *= base;
	}
	return base;
}

console.log(pow(5,2));

module.exports = pow;
