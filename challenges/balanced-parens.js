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

function balancedParens(hello){
    const input = hello.split('')
    if(input.length%2 !== 0) return false
    let half = input.splice(input.length/2)
    let comparison = JSON.parse(JSON.stringify(half))
    for (let i=0; i<half.length; i++) {
      if(half[i] === ')') {comparison.unshift('(')};
      if(half[i] === ']') {comparison.unshift('[')};
      if(half[i] === '}') {comparison.unshift('{')};
            } 
    let joined = comparison.join('')
    return joined === hello ? true : false;
}

module.exports = balancedParens;
