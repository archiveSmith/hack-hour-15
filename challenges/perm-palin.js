/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  // sort letters alphabetically
    // cbaba
    // => aabbc
  // count how many letters there are for each letter
  // if there are even sets of letters with odd number of occurence,
  // it is a palindrome and return true
  // else return false
}

module.exports = permPalin;