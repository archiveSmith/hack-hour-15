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

// Input
  // A string

// Output
  // A bool
    // True if the parens/braces/brackets are balanced
    // Else false

function balancedParens(input){
  const stack = [];
  
  // Traverse the string
  for (let i = 0; i < input.length; i += 1) {
  
    // if char is open paren/brace/bracket
    if ('{[('.indexOf(input[i]) >= 0) {
      // Push into stack
      stack.push(input[i]);
    }
      
    // if char is close paren/brace/bracket
    else if ('}])'.indexOf(input[i]) >= 0) {
      // Pop off stack and make sure type matches
      // if not match, return false
      if ((input[i] === '}' && stack.pop() !== '{') ||
          (input[i] === ']' && stack.pop() !== '[') ||
          (input[i] === ')' && stack.pop() !== '(')) {
        return false;
      }
    }
  }
  // if there are any items left in stack
  if (stack.length !== 0) {
    // return false
    return false;
  }
    
  // return true
  return true;
}

// Test cases
//console.log(balancedParens('[](){}')); // true
//console.log(balancedParens('[({})]')); // true
//console.log(balancedParens(')(')); // false
//console.log(balancedParens('[(]{)}')); // false
//console.log(balancedParens('([hello]{213(abc)}1.1)')); // true

module.exports = balancedParens;
