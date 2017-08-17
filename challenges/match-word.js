// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its 
// backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


// Loop through word

// For each character, check if it's a letter

// If it is, add it to the checkword var

// If not

	// Check if checkword var's length is above 0. 
		// If yes, see if checkword is in the CheckArr
			// If yes, remove checkword from checkarr, make checkword '' again
			// If no, add checkword to checkArr, make checkword '' again
		//

// Once loop is done, return true if the checkarr length is 0


function matchWord(str) {
let checkArr = [];
let checkWord = '';
for (let i = 0; i < str.length; i++) {
	let char = str[i];
	if (/^[a-zA-Z]+$/.test(char)) {
		checkWord += char;
		continue; 
	}

	if (checkWord.length > 0) {
		let reverse = checkWord.toLowerCase().split('').reverse().join('');
		if (checkArr[checkArr.length - 1] === reverse) {
			checkArr.pop();
			checkWord = '';
		} else {
			checkArr.push(checkWord.toLowerCase());
			checkWord = '';
		}
	}
}
	if (checkWord.length > 0) {
		let reverse = checkWord.toLowerCase().split('').reverse().join('');
		if (checkArr[checkArr.length - 1] === reverse) {
			checkArr.pop(); 
			checkWord = '';
		} else {
			checkArr.push(checkWord.toLowerCase());
			checkWord = '';
		}
	}

return (checkArr.length === 0); 
}

module.exports = matchWord;
