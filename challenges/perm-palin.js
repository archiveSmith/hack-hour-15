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

// each letter must have an identical pair
// one lone letter max is allowed

function permPalin(str) {
  const stringArr = str.split('').sort();
  let loneCounter = 0;
  if (stringArr.length === 1) return true;
  for (let i = stringArr.length - 1; i > 0; i -= 1) {
    if (stringArr[i] === stringArr[i - 1]) {
      stringArr.pop();
      stringArr.pop();
      i -= 1;
    } else {
      loneCounter += 1;
    }
    if (loneCounter > 1 || (loneCounter === 1 && i === 1)) return false;
  }
  return true;
}

module.exports = permPalin;