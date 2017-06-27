// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
console.log(str)
if (str=="") return true;
let tf = false;
//let wordArr = str.split(" ");
let wordArr = str.split(/\W|_/gi);
console.log(wordArr)
wordArr.forEach(word=>{ 
    //console.log(word);
    //console.log(word.split("").reverse().join(""));
    // if (wordArr.includes(word.split("").reverse().join(""))) {
    //     return true;
    // } else {
    //     return false;
    // }
    for (let i=0; i<wordArr.length; i++){

        if (word.split("").reverse().join("") == wordArr[i]) {
            
            tf = true;
            console.log(tf)
            break;
        } else {
            tf = false;
        }
    }
}) 

return tf;
}
console.log(matchWord('ENDgerDNE'));
module.exports = matchWord;

