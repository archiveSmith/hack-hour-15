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
  if(typeof str !== 'string') return false;
  if(str.length === 0) return false;
  if(str.length === 1) return true;
//loop through permutations of left side
	for(let i = 2; i <= str.length; i += 1){
    let op = str.substring(0, i);
    // console.log(op);
    if(op === op.split('').reverse().join('')) {
      return true;
    }
  }
  for(let i = str.length - 2; i > 0; i -= 1){
    let op = str.substring(i, str.length);
    // console.log(op);
    if(op === op.split('').reverse().join('')) {
      return true;
    }
  }
  return false;
}

module.exports = permPalin;