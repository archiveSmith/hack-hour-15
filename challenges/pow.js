/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) {
        return 1;
    }
    mul = base;
    mul *= pow(base, power - 1);
    return mul;
}



module.exports = pow;