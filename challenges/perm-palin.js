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
  let pal = str.split('').sort();

  for (let i = 0; i < pal.length - 1; i++) {
    if (pal[i] === pal[i + 1]) {
      pal.splice(i, 2);
      i -= 1;
    }
  }
  return pal.length <= 1;
}

module.exports = permPalin;