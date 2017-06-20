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
  for (let i = 0; i < input.length; i += 1) {
    switch(input.charAt(i)) {
      case "(":
        if (input.indexOf(")", i) === -1) {
          return false;
        } else {
          input = input.replace(')', '');
        }
      break;
      case "[":
        if (input.indexOf("]", i) === -1) {
          return false;
        } else {
          input = input.replace(']', '');
        }
      break;
      case "{":
        if (input.indexOf("}", i) === -1) {
          return false;
        } else {
          input = input.replace('}', '');
        }
      break;
    }
  }
  return true;
}

// console.log(balancedParens('(')) //false
// console.log(balancedParens('()')) //true
// console.log(balancedParens(')(')) //false
// console.log(balancedParens('(())')) //true
// console.log(balancedParens('((')) 
// console.log(balancedParens('[](){}')) // true
// console.log(balancedParens('[({})]')) //true
// console.log(balancedParens('[(]{)}')) //false


module.exports = balancedParens;
    // if (input.charAt(i) === '[' ||
    //     input.charAt(i) === '(' ||
    //     input.charAt(i) === '{') {
    //   lastBracket = input.charAt(i)
    //   openBrackets += 1;
    // } else if (input.charAt(i) === ']' ||
    //           input.charAt(i) === ')' ||
    //           input.charAt(i) === '}') {
    //   openBrackets -= 1;
    // }