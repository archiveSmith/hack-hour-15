/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */


 // Input: 2 Numbers
 // Output: 1 Number, x^y

 // Process: 
  
   // If power < 1, return 0
   // If power = 1, return x
   // If > 1, return x * function called with x and (y - 1); 

function pow(base, power) {
	if (power < 1) return 1; 
	if (power === 1) return base; 
	return base * pow(base, power - 1); 
}

console.log(pow(4,0)); 
console.log(Math.pow(4,0));

module.exports = pow;
