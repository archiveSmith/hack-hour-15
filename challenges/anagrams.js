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
  if (string.length < 2) return string; // This is our break condition
  const array = [];
 
  for (let i=0; i < string.length; i += 1) {
    let char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i) continue;

    let remainingString = string.slice(0, i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

    for (let subPermutation of anagrams(remainingString))
      array.push(char + subPermutation)
  }
  return array;
}

// var result = anagrams('abc');
// console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = anagrams;
