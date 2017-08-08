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


// Given a string, check if any permutations is a palindrome

    // Brute Force => create all versions of the string

    // Create a counter of letters, and push to the object
    // String is Even or Odd
        // If the string is even, all occurrences of letters must be even
        // If the string is odd, there can be an odd occurrence of a letter

function permPalin(str) {
    let occurrences = {};
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (occurrences[letter]) occurrences[letter] += 1;
        else occurrences[letter] = 1;
    }
    let values = Object.values(occurrences);
    if (str.length % 2 === 0) {
        return values.reduce((acc, val) => {
            if (val % 2 === 1) return false;
            else return true;
        }, true);
        // even case
    } else {
        let counter = values.filter((val) => {
            return val % 2 === 1;
        });
        return counter.length > 1 ? false : true;
        // odd case
    }
}

module.exports = permPalin;

//////////////////////////////////////////////////////////

// Time: n
// Space: linear

const cache = str.split("").reduce((cache, char) => {
    if (cache[char]) delete cache[char];
    else cache[char] = true;
    return cache;
}, {});

return Object.keys(cache).length < 2;