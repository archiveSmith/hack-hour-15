/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//5^7 = 5*5*5*5*5*5*5 
//I want to run the function recursively until it has multiplied the base by itself "power" times
//EDGE CASES: If power is 0, always return 1.

//Decrement power until it is 1
//Base case is if power === 1 then I return base.
//base 
function pow(base, power) {
  if (power<0){
  	return 1/(base*pow(base, power+1));
  }
  if (power === 0){
    return 1;
  }
  if(power === 1) return base
  else{
	  return base*pow(base, power-1)
  }

}

module.exports = pow;
