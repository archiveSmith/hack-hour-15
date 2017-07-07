'use strict'
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
    let revStr = str.split('').reverse().join('');
    let counterToThree = 0;
    // console.log(revStr);
    // return str.includes(revStr)? true: false;
    // return str.indexOf(revStr) !== -1;
    for (let i=0; i<str.length; i++){
        for (let ii=0; ii<revStr.length; ii++){
            let k = i;
            if (counterToThree === 3) return true;
            if (str[i] === revStr[ii]) {
                counterToThree++
                k=k+1;
            }
            else counterToThree = 0;
        }
    }
return false;	
}
console.log(permPalin('bb')) 
module.exports = permPalin;

// var string = "foo",
// substring = "oo";
// string.includes(substring);
