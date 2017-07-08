/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 * 
 * Examples: 
 * x = 5, y = 3 --> 5*5*5 = 125 
 * x = 2, y = 5 --> 2*2*2*2*2 = 32 
 * 
 */

function pow(base, power) {
    // Base Cases 
    if (power == 0) return 1; 
    if (power === 1) return base; 

    // Solve recursively & return result
    return (base * pow(base, power - 1)); 
}

module.exports = pow;
