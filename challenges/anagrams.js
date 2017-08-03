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

// Input
  // A string
// Output
  // An array of all anagrams of the string

function anagrams(string) {
  // Base case
  if (string.length === 1) return [string];
  
  // Create output array
  const output = [];
  
  // Iterate through the string
  for (let i = 0; i < string.length; i += 1) {
    
    temp = string.split('');
    temp.splice(i, 1);
    
    // append to output the result of anagram on a substring + the first character
    anagrams(temp.join('')).forEach(anagram => output.push(string[i] +anagram));
  
  }
  
  // return the output
  return output;
}

// Tests
//var result = anagrams('abc');
//console.log(result, [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);

//abc 012
//acb 021
//bac 102
//bca 120
//cab 201
//cba 210

module.exports = anagrams;
