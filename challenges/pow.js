/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // Edge cases, also assumes power is an integer
    if (typeof base !== 'number' 
       || typeof power !== 'number'
       || power % 1 !== 0) return undefined;
    
    //recursionless solution
    let product = 1;
    for (let i = 1; i <= power; i += 1){
        product *= base;
    }
    
    return product;
}

// Test cases
console.log(pow(3,3)); // 27
console.log(pow(2,4)); // 16
console.log(pow(2.5,4)); // 39.0625
console.log(pow(2,4.5)); // undefined, (22.627)
console.log(pow('hi',4)); // undefined
console.log(pow(2,'hello')); // undefined

module.exports = pow;
