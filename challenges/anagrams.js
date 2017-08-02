/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (typeof string !== 'string') return 'invalid input';
  if (string.length < 2) return string;
  const permutations = [];
	permutations.push(string[0]);
	string = string.slice(1);
	while (string.length > 0) {
		const toPerm = [];
		while (permutations.length > 0) {
			let chunk = permutations.pop();
			for (let i = 0; i <= chunk.length; i += 1) {
				toPerm.push(chunk.slice(0, i) + string[0] + chunk.slice(i));
			}
		}
		permutations.push(...toPerm);
		string = string.slice(1);
	}

	return permutations;
}

var result = anagrams('abc');
console.log(result);

module.exports = anagrams;
