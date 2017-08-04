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
  const anagramArr = [];
  if (string.length === 1) {
    anagramArr.push(string);
    return anagramArr;
  }
  for (let i = 0; i < string.length; i += 1) {
    let charStart = string[i];
    let charRemainder = string.substring(0, i) + string.substring(i + 1);
    let permutations = anagrams(charRemainder);
    for (let j = 0; j < permutations.length; j += 1) {
      anagramArr.push(charStart + permutations[j]);
    }
  }
  return anagramArr;
}

console.log(anagrams('abc'))
module.exports = anagrams;
