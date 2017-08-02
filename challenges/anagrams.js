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
  string = string.split("");
  string = recur(string,string.length)
  return string;
}
function recur(string,count){
  let arr = []
  if(count){
    for(let x= 0;x<string.length;x++){
      let temp = recur(string,count-1)
      if(temp){
        temp.forEach(function(element) {
          arr.push(string[x]+element) 
        })
      }else{
        arr.push(string[x])
      }
    }
    return arr;
  }
}
console.log(anagrams('abc'));
module.exports = anagrams;