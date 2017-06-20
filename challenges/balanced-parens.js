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
  const lops = ['\\[', '{', '\\('];
  const rops = ['\\]', '}', '\\)'];
  
  const lopCount = [];
  const ropCount = [];
  
  let isBalanced = true;
  
  lops.forEach((lop) => {
    let op = new RegExp(lop,"g");
    lopCount.push((input.match(op) || []).length);
  });
  
  rops.forEach((rop) => {
    let op = new RegExp(rop,"g");
    ropCount.push((input.match(op) || []).length);
  });
  
  lopCount.forEach((lop, i) => {
    if(lop !== ropCount[i]) {
      isBalanced = false;;
    }
  });
  return isBalanced;
}


module.exports = balancedParens;
