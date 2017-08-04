// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    // create regular expression 
    let string = str.toLowerCase(); 
    console.log(string); // make sure it's all lowercase 

    let pattern = new RegExp(/[^a-z]/,);  
    
    // Create regular expression that filters out non-alphabetical characters 
    //      store the result in a new array 
    const subStrArr = string.split(pattern)

    console.log("Array of substrings is: ", subStrArr); 

    // if the length of the array is empty, return true
    if (str === '') return true; 

    // if the length of the array is 1, return false 
    if (subStrArr.length === 1) return false; 

    // Compare each element in the array to the next and last -1 element
    //      if they're the reverse of each other, return true, 
    //      otherweise false. 
    
    // use reverse() to check
}

module.exports = matchWord;
