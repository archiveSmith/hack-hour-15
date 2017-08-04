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

// one way to do it (slow):
// in 'abc' start by generating all perumtations of just "bc"
// tack on an a to each perumtation


function perms(str){
  //base case: empty string
  if(!string.length) return [''];
  //  split off and store first char
  const frstChar = str[0];
  //use recursion to generate all possible perms of substring (just the 'bc')
  const smallPersm = perms(str.slice(1));
  const bigPerms = [];

  for(let smPermsI = 0; smPermsI<smallPerms.length; smPerms+=1){
    let currPerm = smallPerms[smPermsI];
    for (let currI = 0; currI < currPerm.length; currI+=1){
      bigPerms.push(currPerm.slice(0,currI)+frstChar + currPerm.slice(currI));
  }
  return bigPerms;
}

function anagrams(string) {
  let allPerms = perms(str);
  return allPerms.filter((perm, i) => allPerms.indexOf(perm) === i);

}

//  questions:
//  explanation of part 2 again? Not understanding the n! math
//  will the perms solution work for more than 3 letter strings?
//  also curious about the most efficient solutions for both


module.exports = anagrams;
