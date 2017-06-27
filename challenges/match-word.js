// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.split('').length === 0) return true
  const myRe = /[A-Za-z0-9]+/g;
  let myArray
  const result = []
  while(myArray = myRe.exec(str)){
    result.push(myArray[0])
  }
  if (result.length % 2 === 1) return false
  const stack = [];
  // for(let i = 0; i < result.length; i++){
    // if (i === 0) { stack.push(result[0]); next}
    // if (stack[stack.length - 1]){}
  // }
  let combined = result.join('').toLowerCase()
  console.log(combined)
  return combined === combined.split('').reverse().join('')

}
// console.log(matchWord('__END_DNE-----'))//  -> true
// console.log(matchWord('__ENDDNE__'))//  -> false       (not separated by a space)
// console.log(matchWord('IF()()fi[]'))//  -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi'))//  -> false     not properly closed. like ( [) ] 
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))//  -> true
// console.log(matchWord(''))//  -> true

module.exports = matchWord;
