// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (typeof str !== 'string') return 'enter valid string';
  if (str.length === 0) return true;
  const strarr = str.split(/[\W\s]|_/g);
  const words = [];

  for (let i = 0; i < strarr.length; i++) {
    if (strarr[i] === '') continue;;
    if (words.length !== 0 && strarr[i].toLowerCase().split('').reverse().join('') === words[words.length - 1]) {
      words.pop();
    } else words.push(strarr[i].toLowerCase());
  }
  return words.length === 0;
}


module.exports = matchWord;
