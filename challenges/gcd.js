/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  //determine which is the lesser number
  let min = Math.min(a, b);
  console.log('this is the min ', min)
  let max = Math.max(a, b);
  console.log('this is the max ', max)
  let output = [];

  //find the smallest number that returns a remainder of 0 for both args
  //iterate down from the min
  for(min; min > 0; min--){
    if(min%2 === 0 && max%min === 0){
      output.push(min);
    }
  }
  return output[0];
}

console.log(gcd(10,9))

module.exports = gcd;
