// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


// Given a string, check if the words inside the string are closed by their backwards counterparts
    // Case Insensitive
    // Separated by special character or space
    // Order matters

// Approach 2
    // Replace non-letter characters with a space
    // Add words to our pipeline
        // Case-insensitive
        // Check if properly closed
    // Mechanism for checking if words are properly closed
        // 2 Arrays:
            // openingArray stores unique words
            // closingArray stores the opposing words
    // Iterate through the arrays, return false if openingArray[i] does not equal
    // closingArray[i] reversed


// Close the last in the array first


// regex101
const strArr = str.replace(/[^\w\s]/g, '').replace(/\s+|_/g, ' ')
if (strArr.length % 2 === 1) return false;

// create checkArr
// loop through, check currentWord with last word in the array

    function matchWord(str) {
        let words = str.replace(/[^a-z]+/gi, ' ').toLowerCase().trim().split(' ');
        if (words.length % 2 !== 0) return false;
        let openArray = [];
        let closeArray = [];
        let boolean = true;
        let counter = 0;
        for (let i = 0; i < words.length; i++) {
          let reverseWord = words[i].split('').reverse().join('');
          if (openArray.indexOf(reverseWord) >= 0) closeArray.push(words[i]);
          else openArray.push(words[i]);
        }
        while (counter < openArray.length) {
            if (openArray[counter] !== closeArray[counter].split('').reverse().join('')) {
                boolean = false;
            }
            counter++;
        }
        return boolean;
    }

console.log(matchWord('__END_DNE-----')); //  -> true
console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]')); // -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi')); //  -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); //  -> true
console.log(matchWord('')); //  -> true

module.exports = matchWord;

// Approach 1:
    // Iterate through the string
        // Add strings to a data structure
        // The data structure should have an even length
        // Numbers at opposite positions should equal their reversed counterparts


// function matchWord(str) {
//     // Iterate through the string with a for loop
//     let arr = [];
//     let string = '';
//     for (let i = 0; i < str.length; i++) {
//         // Regex Method, add string if 
//         if (/[A-Za-z]/.test(str[i])) string += str[i];
//         else if (string.length) {
//             arr.push(string);
//             string = '';
//         }
//     }
//     if (string.length) arr.push(string);
//     console.log(arr);
//     return checkReverseWords(arr);
//     // Add letters to a string
//     // Reset the string when the next character is not a letter
//     // Check if words at opposite positions of the array equal their reversed counterparts
    
// }

// function checkReverseWords(arr) {
//     let boolean = true;
//     if (arr.length % 2 !== 0) return false;
//     let halfLength = Math.floor(arr.length / 2) - 1;
//     for (let i = 0; i < halfLength; i++) {
//         if (arr[i] !== arr[arr.length - i - 1].split().reverse().join()) {
//             boolean = false;
//         }
//     }
//     return boolean;
// }