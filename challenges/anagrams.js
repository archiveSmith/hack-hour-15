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
  */

function anagrams(string) {
  const wordHash = {string: 1};
  const anArr = [string];
  let stringSplit = string.split('')
  const tempWord = '';
  const tempLetter;
  let i;

  return recursiveFor(stringSplit)
}



function recursiveFor(stringSplit) {
  if(anArr[0] === tempWord) return anArr
  for(i=0; i<stringSplit.length; i++) {
    tempLetter = stringSplit[i] //a
    tempWord += stringSplit[i] //a
     //[b, a, c,]
    
    if(!wordHash[tempWord]) wordHash[tempWord] = 1;
    else return recursiveFor(tempWord)
  }

}

module.exports = anagrams;
