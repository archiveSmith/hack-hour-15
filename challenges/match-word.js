// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

function matchWord(str) {
  const commands = ['if', 'end', 'for', 'while'];
  let match;
  let pos;
  commands.forEach((command) => {
    
  //iterate through all possibilities to find index of match.
    let position = str.toLowerCase().indexOf(command);
    if(position !== -1) {
      match = command;
      pos = position;
    }
    
  });
  
//search ahead to find closing
  if(match) {
    const rev = match.split("").reverse().join("");
    const search = (str.slice(pos + match.length + 1, str.length));
    let rposition = search.toLowerCase().indexOf(rev);
    // console.log(rev,rposition, search);
    if (rposition >= 0) {
      return true;
    } else return false;
  } else return true;
  // return match;
}


module.exports = matchWord;
