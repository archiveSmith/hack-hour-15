// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    if (str === '') return true;
    const lowerCase = str.toLowerCase().split('');
    const reverse = str.toLowerCase().split('').reverse();
    const lowerWord = [];
    const reverseWord = [];
    for (let i = 0; i< lowerCase-1; i++) {
        if(lowerCase[i].includes(/[a-z]/)) {
            lowerWord.push(lowerCase[i]);
            if(!lowerCase[i+1].includes(/[a-z]/)) {
                break;
            }
        }
    }
    for (let i = 0; i< reverse -1; i++) {
        if(reverse[i].includes(/[a-z]/)) {
            reverseWord.push(reverse[i]);
            if(!reverse[i+1].includes(/[a-z]/)) {
                break;
            }
        }
    }
    return lowerWord.join('') === reverseWord.join('')
}


module.exports = matchWord;
