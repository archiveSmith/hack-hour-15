/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let acc = 1;

    function timesSelf(){
    //console.log(base, acc);
    return acc*base;
    }

    for (let i=1; i<power+1; i++){
        acc = timesSelf(base);
        //console.log(base);
    }
    return acc;

}

module.exports = pow;
console.log(pow(-3,3));
console.log(Math.pow(-3,3));