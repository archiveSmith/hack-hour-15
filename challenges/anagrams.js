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
if (string.length === 1){
      return string;
  }
  var permut = [];
  for (var i=0; i<string.length; i++){
      var s = string[0];
      var _new =  anagrams(string.slice(1, string.length));
      for(var j=0; j<_new.length; j++){
          permut.push(s + _new[j]);
      }
      string = string.substring(1, string.length -1) + s;
  }
  return permut; 
}

module.exports = anagrams;

console.log(anagrams("the"));