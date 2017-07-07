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
  const letters = {};
  let oddValue = false;

  str.split('').forEach((element) => {
    if (letters.hasOwnProperty(element)) {
      letters[element]++;
    } else {
      letters[element] = 1;
    }
  });

  for (let key in letters) {
    if (letters[key] % 2 !== 0 && oddValue === false) oddValue = true;
    else if (letters[key] % 2 !== 0 && oddValue === true) return false;
  }

  return true;
}

module.exports = permPalin;
