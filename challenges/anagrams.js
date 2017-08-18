/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

Ryan easy example

function perms(str) {
  
  if (!str.length) return [''];
  const fstChar = str[0];
  const smallPerms = perms(str.slice(1));
  const bigPerms = [];
  for (let i = 0; i < smallPerms.length; i++) {
    let currPerm = smallPerms[i];
    for (let y = 0; y <= currPerm.length; y++) {
      bigPerms.push(currPerm.slice(0,y) + fstChar + currPerm.slice(y));
    }
  }
  return bigPerms; 
}

function anagrams(str) {
  //You can filter out dupes here ('aaa');
}





  */
function anagrams(string) {
	if (word.length < 2) {
        return [word];
    } else {
        var allanswers = [];
        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            var shorterword = word.substr(0, i) + word.substr(i + 1, word.length - 1);
            var shortwordarray = allanagrams(shorterword);
            for (var j = 0; j < shortwordarray.length; j++) {
                allanswers.push(letter + shortwordarray[j]);
            }
        }
        return allanswers;
    }

}



module.exports = anagrams;
