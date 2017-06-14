/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  power = (power >= 0) ? Math.floor(power) : Math.ceil(power)
  if (power === 1) return base
  if (power === 0) return 1
  if (power === -1) return 1 / base


  // return base * pow(base, power - 1) 
  if (power >= 0){
    return base * pow(base, power - 1)
  } else {
    return 1 / base * pow(base, power + 1)
  }
}
// console.log(pow(2, 3)) // 8
// console.log(pow(3, 3)) // 27
// console.log(pow(2, -3)) // 0.125
// console.log(pow(3, -3)) // 1/27 

module.exports = pow;
