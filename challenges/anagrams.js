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
  if (string.length === 1) return [string];

  const output = [];

  for (let i = 0; i < string.length; i += 1) {
    let currLetter = string.charAt(i);
    let slicedString = string.slice(0, i) + string.slice(i + 1);
    output.push(...anagrams(slicedString).map(anagram => currLetter + anagram));
  }

  return output;
}

module.exports = anagrams