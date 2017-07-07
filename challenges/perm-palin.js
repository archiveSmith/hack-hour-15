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

// Input
  // String
// Output
  // True if there is a permutation of characters in the string that is a palindrome
  // Else false

function permPalin(str) {
  
  // Create empty object, which will store the number of times each character in the string exists
  const counts = {};
  
	// Iterate through the string
  for (let i = 0; i < str.length; i += 1) {
    // If the character is not a key in the counts object, add it as a key
    if (!counts.hasOwnProperty(str[i])) counts[str[i]] = 0;
    
    // Increment the count
    counts[str[i]] += 1;
  }
  
  // Iterate through the keys in the object
  let multipleOddCounts = false;
  for (let char in counts) {
    if (counts.hasOwnProperty(char)) {
    // If there are multiple odd-counted characters, return false
      if (counts[char] % 2 !== 0) {
        if (multipleOddCounts) return false;
        else multipleOddCounts = true;
      }
    }
  }
  // Return true
  return true;
}

//console.log(permPalin('abab'), true);
//console.log(permPalin('cbaba'), true);
//console.log(permPalin('cbac'), false);
//console.log(permPalin('a'), true);

module.exports = permPalin;