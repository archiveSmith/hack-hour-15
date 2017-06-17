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

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	if (typeof(s1) !== 'string' || typeof(s2) !== 'string') return undefined;

	let arr1 = s1.split('');
	let arr2 = s2.split('');

	for (let i = 0; i < arr1.length; i += 1) {
		if (arr2.indexOf(arr1[i]) === -1 || arr1.length !== arr2.length) {
			return false;
		} else {
			arr2.splice(i, 1);
			arr1.splice(i, 1);
		}
		
	}
return true;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
