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
	if (input === undefined || typeof(input) !== 'string' || input.length % 2 !== 0) return false;
    var arr = [];
	var arrStrings = input.split('');

	for (var i = 0; i < arrStrings.length;i++) {
		if ( arrStrings[i] === '(' || ')' || '[' || ']' || '{' || '}') {
			arr.push(arrStrings[i]);
		}

	}

	var a = [(arr.length/2)-1];
	var b = [(arr.length/2)];

	for (var i = 0; i < arr.length;) {
		if (arr[i] === arr[i+1]) {
			i += 1;
		}
		return true;

		 else if (arr[a] === arr[b]) {
				arr[a - 1];
				arr[b + 1];
			}
			return true;
		}
		return false;
	}

module.exports = balancedParens;
