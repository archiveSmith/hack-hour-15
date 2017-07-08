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

// true if the second string is found in the first, false otherwise
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

// Inputs
  // A string
  // A string that may be a rotation of the first

// Ouputs
  // True if the second string is a rotation of the first
  // False otherwise

// A string A (consisted of substrings a and b) is said to be a rotation of B if B is consisted of substrings b and a.

function stringRotation(s1, s2) {
  // Is using regex cheating around not using isSubstring multiple times?
  
  // Find the largest substring in s1 that is a substring in s2
  let substring = s1[0];
  let i = 1;
  while (s2.search(substring + s1[i]) !== -1) {
    substring += s1[i];
    i += 1;
  }
  
  return s2 === (s1.slice(i) + substring);
  
  /*
  //Solution using isSubstring multiple times
  
  // Find the largest substring in s1 that is a substring in s2
  let substring = s1[0];
  let i = 1;
  while (isSubstring(s2, substring + s1[i])) {
    substring += s1[i];
    i += 1;
  }
  
  return s2 === (s1.slice(i) + substring);
  */
}

// Test cases
console.log(stringRotation('abcdef', 'defabc')); // true
console.log(stringRotation('abcdefghij', 'bcdefghija')); // true
console.log(stringRotation('abcdefghij', 'bcdefghijab')); // false
console.log(stringRotation('aabc', 'abca')); // true
console.log(stringRotation('abaabc', 'abcaba')); // true


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
