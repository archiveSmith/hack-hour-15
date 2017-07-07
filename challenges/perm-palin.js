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
    if(typeof str !== 'string') return false
    if(str.length === 1) return true
    const letterCount = {};
    let letter;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        letter = str[i];
        letterCount[letter] = letterCount[letter] || 0;
        letterCount[letter]++;
    }
    for (let letter in letterCount) {
        sum += letterCount[letter] % 2;
    }

    return sum < 2;
}

module.exports = permPalin;