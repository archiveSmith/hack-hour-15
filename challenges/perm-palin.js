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
	if (!str) return false;
  if (typeof str !== 'string') return false;
  if (str.length === 1) return true;
  if (str.length === 2 || str.length === 0) return false;

  let revStr = str.split('').reverse().join('');
  if (revStr === str) return true;
  let stack ='';

  for (let i = 1; i < str.length; i += 1){
    let subStr = str.substring(i, str.length);
    let revSubStr = subStr.split('').reverse().join('');
    if (subStr === revSubStr && subStr.length > 1) return true;

    while (subStr.length > 2){
      subStr = subStr.split('');
      subStr.pop();
      subStr = subStr.join('');
      if (subStr === subStr.split('').reverse().join('')) return true;
    }
  }
    return false
}

module.exports = permPalin;
