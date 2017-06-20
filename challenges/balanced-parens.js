/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
	let array = [];
	let open = {
		'(': ')', 
		'[': ']', 
		'{': '}',
	};
	for (let i = 0; i < input.length; i++) {
		let current = input[i];
		if (current === '(' || current === '[' || current === '{') {
			array.push(current);
		} else if (current === ')' || current === ']' || current === '}') {
			let check = array.pop();
			if (open[check] !== current) {
				return false;
			}

		}
	}
	return array.length === 0; 

}

module.exports = balancedParens;