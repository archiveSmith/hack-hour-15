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
	 var charCounts = {};
    var char;
    var palindromeSum = 0;
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        charCounts[char] = charCounts[char] || 0;
        charCounts[char]++;
    }
    for (let charCount in charCounts) {
        palindromeSum += charCounts[charCount] % 2;
    }

    return palindromeSum < 2;
}

module.exports = permPalin;