/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// Input: Base, Power
// Output: Number

// Scenarios: power <= -1, power >= 1, power = 0
// Power or Base !== number

function pow(base, power) {
    if (typeof base !== 'number' && typeof power !== 'number') return NaN;
    if (power === -1) return (1 / base);
    if (power === 1) return base;
    if (power === 0) return 1;
    if (power > 1) return base * pow(base, power - 1);
    if (power < -1) return 1 / base * pow(base, power + 1);
}

module.exports = pow;
