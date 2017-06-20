/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let pattern = /[(+)+]/g; 
    let subString = input.match(pattern); 
    console.log("Substring with only parenthesis is: ", subString); 

    let openParanCount = closeParanCount = 0; 
    for (let i = 0; i < subString.length; i += 1) {
        if( subString[0] === ')') return false; // not balanced
        if( subString[i] === '(') openParanCount++; 
        if( subString[i] === ')') closeParanCount++; 
    }
    return openParanCount === closeParanCount; 
}

module.exports = balancedParens;
