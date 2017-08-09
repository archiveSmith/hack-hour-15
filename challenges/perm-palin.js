/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

// if length is 0, false
// if length is 1, true

// if there is more than one item with a number not divisible by 2, false, otherwise true? 
function permPalin(str) {
	if (!str || str.length === 0 || typeof str !== 'string') return false; 
	if (str.length === 1) return true; 

	let obj = {}; 
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		obj[char] = obj[char] ? obj[char] + 1 : 1; 
	}
	let odds = 0; 
	for (let key in obj) {
	  if (obj[key] % 2 !== 0) odds++;
	}
	return (odds < 2);
}

module.exports = permPalin;