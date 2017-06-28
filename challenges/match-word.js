// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // separated by space/punctuation
  const matchWords = [];
  const strArr = str.replace(/([_\W])/g, ' ').trim().toLowerCase().split(/\s+|_/g);
  if (str === '') return true;
  if (strArr.length % 2 === 1) return false;
  for (let i = 0; i < strArr.length; i += 1) {
    if (matchWords.length > 0 && strArr[i].length > 1 && matchWords[matchWords.length -1] === reverse(strArr[i])) {    matchWords.pop();
    } else {
      matchWords.push(strArr[i]);
    }
  }
  return matchWords.length === 0;
}

function reverse(string) {
  let reverseStr = '';  
  for (let i = string.length -1 ; i >= 0; i -= 1) {
    reverseStr += string[i];
  }
  return reverseStr;
}

module.exports = matchWord;
console.log(matchWord('__END_DNE-----'));  //-> true
console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  ///-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
console.log(matchWord(''));  //-> true

