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

  //input string
  //output array


function anagrams(string){
  if(string.length < 2) return string;
  if(!string || typeof string !== 'string') return undefined;

  let result = [];
  for(let i = 0; i < string.length; i++){
    //using the first word and shifting the rest
    let permutation = string.slice(0,i).concat(string.slice(i+1));
    //repeat same function for the rest of the string;
    let remaining = anagrams(permutation);
    //when there is no more characters left
    if(remaining.length === 0){
      //push into the result array
      result.push([string[i]]);
    } else {
      //if there is still words left
      for(let j = 0; j < remaining.length; j++){
      //join the letter + remaining
      let words = string[i].concat(remaining[j]);
      //console.log(words);
	    result.push(words);
      }
    }
  }

  return result;
}

module.exports = anagrams;
