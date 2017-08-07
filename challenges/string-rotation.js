/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

 // Input: 2 Strings
 // Output: True or False, based on above conditions

 // Edge Cases: 
 //  Strings are not same length; 
 //  Inputs are not strings
 //  Inputs are empty, unclear what output should be there, let's output false


function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	if (s1.length !== s2.length) return false; 
	if (typeof s1 !== 'string' || typeof s2 !== 'string') return false; 
	if (s1.length === 0) return false;
	const check = s2.concat(s2); 
  	return isSubstring(check, s1); 
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
