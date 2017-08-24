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
  return Array.from(new Set(permutation('', string)));
}

function permutation(start, string) {
  if (string.length === 0) return [''];
  if (string.length === 1) {
    return [ start + string ];
  } else {
    let returnResult = [];
    for (let i = 0; i < string.length; i++) {
      let result = permutation(string[i], string.substr(0, i) + string.substr(i + 1));
      for (let j = 0; j < result.length; j++) {
          returnResult.push(start + result[j]);
      }
    }

      return returnResult;
  }
}

// const arr = anagrams('');
// console.log(arr);
// const set = new Set(arr);
// console.log(arr.length, set.size);
// console.log('unique: ' , set.size === arr.length);

module.exports = anagrams;
