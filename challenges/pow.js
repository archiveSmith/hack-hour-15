/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	//set base case
  if(power === 0) { 
  	return 1;
  } else {
  	return base * pow(base, power - 1);
  }

}

console.log(pow(3,3));
console.log(pow(3,0));
console.log(pow(0,4));



module.exports = pow;
