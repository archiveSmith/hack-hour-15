// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  //get sum of letters ignoring other chars
  let regEx = /[\W_]/g;
  let newStr = str.toLowerCase().replace(regEx,"")
  console.log("this is newStr, ", newStr);

  let reverseStr = newStr.split("").reverse().join("");;
  console.log("this is reverseStr, ", reverseStr);

  if (newStr === reverseStr){
    return true;
  } else {
    return false;
  }


//another way, possibly
  //divide newStr.length by 2

  //if number of letters in first half is not equal to second, return false()

  //if halves are equal,

  //get reverse of second half str (iteration)

  //if reversed second half of str equals first half, return true

}
console.log(matchWord('for__if__rof__fi'));

module.exports = matchWord;
