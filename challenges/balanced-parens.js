/*
 * write a function that takes a inputing of text and returns true if
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

function balancedParens(input) {
    let arr = [];
    for (let x = 0; x < input.length; x++) {
        if (input[x] == '[' || input[x] == '{' || input[x] == '(') {
            arr.push(input[x]);
        } else if (input[x] == ']' || input[x] == '}' || input[x] == ')') {
            if (arr[arr.length - 1] === '[' && input[x] === ']') {
                arr.pop()
            } else if (arr[arr.length - 1] === '{' && input[x] === '}') {
                arr.pop()
            } else if (arr[arr.length - 1] === '(' && input[x] === ')') {
                arr.pop()
            } else {
                return false;
            }
        }
    }
    if (!arr.length) {
        return true;
    }
    return false;
}

module.exports = balancedParens;