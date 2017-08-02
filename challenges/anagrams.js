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
  // split the string into an array
  const letters = string.split('').map(x => [x]);
  // create an array to store result
  const result = letters.slice();
  // map through
  for (let i = 1; i < letters.length; i += 1) {
    

    })
  }

}

module.exports = anagrams;
