// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// Input
    // String
// Output
    // True if all words (sequential letters separated by other characters) are closed by its backwords counterpart
    // Else false

function matchWord(str) {
    // Create empty string for current word and a queue for the strings
    let current = '';
    const queue = [];
    
    // Iterate through the input string
    for (let i = 0; i < str.length; i += 1) {
    
        // If the current character is a letter, add it to the current word
        if (str[i].match(/[a-z]/i)) current += str[i];
    
        // Else if the string is not empty
        else if (current.length > 0) {
    
            // Add the string to the queue
            queue.push(current);
            
            // Set the string to ''
            current = '';
        }
    }
    
    // Add last word to queue
    if (current.length > 0) queue.push(current);
    
    console.log(queue);
    
    // If the queue's length is not even, return false
    if (queue.length % 2 !== 0) return false;
    
    // Iterate through half of the queue
    for (let i = 0; i < queue.length / 2; i += 1) {
    
        // if the string at length - i - 1 is not the string at i in reverse
        if (queue[i].toLowerCase() !== queue[queue.length - i - 1].split('').reverse().join('').toLowerCase()) return false;
    
            // Return false
    }
    
    return true;
}

// Test cases

console.log(matchWord('__END_DNE-----')); // -> true
console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]')); // -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord('')); // -> true

module.exports = matchWord;
