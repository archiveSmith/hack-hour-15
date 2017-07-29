/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // input
    // we take in two inputs, base and power

  // output
    // a number, or base^power

  // Edge cases
    // if base or power is not a number
    // if power is 0

  // Pseudo Code
    // We have a base and a power and we need to multiply the base a certain number of times, deemed by power
    // Using recursion, we would have to update the parameters at every single call and get closer and closer
    // to some sort of base case
    // Our base case would be when power is equal to 1, because anything to the 1 power is itself
    // While we update power, we also need to update base
    // As power decrements by 1, we multiply base by itself
    // This will be tail call optimized because we are just returning the updated parameters? ask a fellow
    // when I have the chance


  if (typeof base !== 'number' && typeof power !== 'number') return 'Not Valid Inputs';
  if (power === 0) return 1;


  // if (power === 1) return base;
  // do not need to check this edge case because it will be the breaking
  // of the while loop wherein we will subsequently return base;


  while (power > 1) {
    return base * pow(base, power - 1);
  }
  return base;
}

module.exports = pow;
