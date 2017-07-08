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
	// if length is zero or not a string, return false 
    if (!str) return false; 

    const strLength = str.length; 
    
    // A string is a Palindrome if and only if: 
    //  - length is 1 
    if (strLength === 1) return true; 

    // Track the number of times each letter appears in str
    const lettersObj = {}; 
    for (let i = 0; i < strLength; i += 1) {
        if (!lettersObj[str.charAt(i)]) {
            lettersObj[str.charAt(i)] = 0; 
        } 
        lettersObj[str.charAt(i)] += 1; 
    }
    
    //  - EVEN length: 
    //      -  equal number of all letters 
    if (strLength % 2 === 0 ) {
        Object.keys(lettersObj).forEach( key => {
            // if odd, return false
            if (lettersObj[key] % 2 === 1) return false; 
        }); 
        return true; 
    }

    //  - ODD length:
    //      - (n - 1) letters have equal number of occurrances
    //      - EXCEPT for 1 letter which should have an odd
    //          number of occurances. 
    let oddFlag = 0; // if more than 1, then not palindrome
    
    Object.keys(lettersObj).forEach( key => {
        // if odd, add 1 to oddFlag
        // console.log('ObjKey is: ', typeof( lettersObj[key]); 
        if (lettersObj[key] % 2 === 1 ) {
            oddFlag += 1;
        }
    }); 

    if ( oddFlag > 1 ) {
        return false;
    } else {
        return true; 
    }
}

module.exports = permPalin;