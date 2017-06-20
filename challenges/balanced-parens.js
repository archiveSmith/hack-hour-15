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

function balancedParens(input) {
    let result = [];
    let openMatch = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    let closeMatch = {
        '}': true,
        ']': true,
        ')': true
    };
    //loop through the input and push each openMatch character into result

    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        if (openMatch[item]) {
            result.push(item);
            //console.log(item);

            //if there is no more openMatches, then push the closeMatch in the result
        } else if (closeMatch[item]) {

            if (openMatch[result.pop()] !== item) return false;
        }
    }
    return true;
}

console.log(balancedParens('[[[()]]]'));

module.exports = balancedParens;
