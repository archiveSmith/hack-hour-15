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
  let bracketsArr = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === "(" ||
        input[i] === "[" ||
        input[i] === "{") {
      bracketsArr.push(input[i]);
    } else if ( (input[i] === ")" && bracketsArr[bracketsArr.length - 1] === "(") ||
                (input[i] === "]" && bracketsArr[bracketsArr.length - 1] === "[") ||
                (input[i] === "}" && bracketsArr[bracketsArr.length - 1] === "{")) {
      bracketsArr.pop()
    } else return false;
  }
  return bracketsArr.length === 0;
}

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