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


// Given a string of text, return true if the parentheses are balanced
// and false otherwise.

// Find the position of parentheses in the string
// If l + r = string length, return true
// Do this for [ and {
// Ignore non-bracket items


function balancedParens(input) {
    let boolean = true;
    let copiedInput = input.slice();
    copiedInput = copiedInput.replace(/[^()\[\]\{\}]/gi, '');
    console.log(copiedInput);
    let length = copiedInput.length;
    // If l + r = string length, return true
    for (let i = 0; i < length; i++) {
        if (copiedInput[i] === '(') {
            boolean = copiedInput[length - i - 1] === ')' && i < length - i - 1;
        }
        if (copiedInput[i] === '[') {
            boolean = copiedInput[length - i - 1] === ']' && i < length - i - 1;
        }
        if (copiedInput[i] === '{') {
            boolean = copiedInput[length - i - 1] === '}' && i < length - i - 1;
        }
    }
    return boolean;
}

 console.log(balancedParens('(')); // false
 console.log(balancedParens('()')); // true
 console.log(balancedParens(')(')); // false
 console.log(balancedParens('(())')); // true
 console.log(balancedParens('[](){}')); // true
 console.log(balancedParens('[({})]'));   // true
 console.log(balancedParens('[(]{)}')); // false
 console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
 console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
