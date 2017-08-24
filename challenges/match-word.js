// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // empty string is by default closed properly, return here.
  if (str.length === 0) return true;
  // regex to doctor out punctuation, and then to reduce whitespace to one char.
  str = str.toUpperCase();
  str = str.replace(/[^\w\s+]|_/g, " ").replace(/\s\s+/g, ' ');
  let strAry = str.trim().split(" ");
  let stack = [];

  // loop through our new array, push reversed to stack if the word doesn't match the last word in stack.
  // pop off stack if it does match.
  strAry.forEach((substr) => {
    let last = stack.length - 1;
    let reverse = substr.split("").reverse().join("");

    if (stack[last] === substr) {
      stack.pop();
    } else {
      stack.push(reverse);
    }
  });
   // length should be 0 if all pairings are matched properly.
  return (stack.length === 0)
}
//  console.log('should be true');
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log('should be true');
// console.log(matchWord('__END_DNE-----'));
// console.log('should be false');
// console.log(matchWord('__ENDDNE__'));
// console.log('should be true');
// console.log(matchWord('IF()()fi[]'));
// console.log('should be false');
// console.log(matchWord('for__if__rof__fi()'));
// console.log('should be true');
// console.log(matchWord(''));
module.exports = matchWord;
