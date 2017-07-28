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
  if (!input) return
  let stringArray = input.split('')
  let length = input.split('').length
  if (length === 0) return

  let count = {
    "curly": undefined,
    "square": undefined,
    "parens": undefined}

  let key = "parens"
  let left = '('
  let right = ')'
  let letter;
  for (let i = 0; i < length; i++){
    letter = stringArray[i]
    switch (letter){
      case '{':
      case '}':
        countBrack(count, letter, "curly", "{", "}" )
        break
      case '(':
      case ')':
        countBrack(count, letter, "parens", "(", ")" )
        break
      case '[':
      case ']':
        countBrack(count, letter, "square", "[", "]" )
        break
      default:
        break
    }
  }
  console.log(input)
  console.log(count)
  for (let key in count) {
    if (count[key] !== 0 && count[key] !== undefined) return false
  }
  return true
  // return count["parens"] === undefined || count["parens"] === 0

}
function countBrack(count, letter, key, left, right){
  if (letter === left || letter === right){
    if (letter === right){
      if (count[key] === undefined) return false
      count[key] = count[key] ? (count[key] - 1) : -1
    } else {
      count[key] = count[key] ? (count[key] + 1) : 1
    }
  }
  return count
}

console.log(balancedParens('('))  // false
console.log(balancedParens('()')) // true
console.log(   balancedParens(')('));  // false
console.log(   balancedParens('(())'));  // true
 console.log( balancedParens('[](){}')); // true
 console.log( balancedParens('[({})]'));   // true
 console.log( balancedParens('[(]{)}')); // false
 console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble 

module.exports = balancedParens;
