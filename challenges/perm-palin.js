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
	// esentially determine if each letter has a 'twin'
  // with one exception and only one allowed

  const letters = str.split('').sort();
  
  let exception = true;
  
  while (letters.length > 1) {
    if (letters[0] !== letters[1] && exception) {
      letters.shift();
      exception = false;
      continue;
    }
    else if (letters[0] !== letters[1]) {
      return false;
    }

    letters.shift();
    letters.shift();
    console.log(letters)
  }
  return true;
}

module.exports = permPalin;