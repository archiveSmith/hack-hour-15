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
  let isBalanced = true;
  input = input.split("");
  input = input.filter((ele)=>{
    return /[\[\]\(\)\{\}]/.test(ele);
  })
  if (input.length === 0){
    return false;
  }
  while(input.length >= 1){
    console.log(input);
    //***********************
    // CHECKING FOR BRACES
    //***********************
    if(input[0] === "["){
      if(input.indexOf("]") === -1){
        isBalanced = false;
        return isBalanced;
      }
      else{
        input = input.slice(1)
        input.splice(input.indexOf("]"), 1);
      }
    }
    //************************
    // CHECKING FOR BRACKETS
    //************************
    else if(input[0] === "{"){
      if(input.indexOf("}") === -1){
        isBalanced = false;
        return isBalanced;
      }
      else{
        input = input.slice(1)
        input.splice(input.indexOf("}"), 1);
      }
    }
    //************************
    // CHECKING FOR PARENS
    //************************
    else if(input[0] === "("){
      if(input.indexOf(")") === -1){
        isBalanced = false;
        return isBalanced;
      }
      else{
        input = input.slice(1)
        input.splice(input.indexOf(")"), 1);
      }
    }
    else{
      isBalanced = false;
      return isBalanced;
    }
  }
  return isBalanced;
}

module.exports = balancedParens;
