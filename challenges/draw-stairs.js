/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
	let stack = "";
	let inc = n;
	for (let i = 1; i <= n; i += 1) {
		for (let j = 1; j <= n; j += 1) {
			if (j < inc) {
				stack += " ";
			} else {
				stack += "*";
			}
		}
		stack += "\n";
		inc -= 1;
	}
	return stack;
}

console.log (drawStairs(6));

module.exports = drawStairs;
