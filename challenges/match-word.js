// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if(balancedParens(str)) {
  	let charStr = 
  }
}

function balancedParens(input) {
    let result = [];
    let openMatch = {
        '{': '}',
        '[': ']',
        '(': ')',
        '_': '_',
        '#': '#',
        '$': '$',
        '%': '%'
    };
    let closeMatch = {
        '}': true,
        ']': true,
        ')': true,
        '_': true,
        '#': true,
        '$': true,
        '%': true
    };
    //loop through the input and push each openMatch character into result

    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        if (openMatch[item]) {
            result.push(item);
            //console.log(item);

            //if there is no more openMatches, then push the closeMatch in the result
        } else if (closeMatch[item]) {

            if (openMatch[result.pop()] !== item) return false;
        }
    }
    return true;
}

module.exports = matchWord;
