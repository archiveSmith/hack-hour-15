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


// Input
    // String type of unknown text


// Output
    // True or false

// Edge cases
    // If the string is empty
    // If no bracket-type characters exist

// There is probably a RegEx out there for selecting all characters except brackets
// Use a string replace method with a RegEx to fulfill step 3
// Turn string into an array so we can more easily iterate through


function balancedParens(input){
    let str = input.replace(/\w/gi, '');
    let check = str.split('');
    let keys = {'(' : ')', '{': '}', '[': ']' }
	for(let i = 0, end = check.length - 1 - i; i < check.length; i++) {
		check[i];
		for(check[i] in keys) {
			return check[end] !== keys[check[i]] ? false : true;
		}
	}	
}

console.log(balancedParens('()'));
console.log(balancedParens(')('));
console.log(balancedParens('(())'));
console.log(balancedParens('[](){}'));
console.log(balancedParens('[({})]'));

module.exports = balancedParens;
