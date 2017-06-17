/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1 === s2;
}

//pushing all the letters forward
//the index length will be the boundary
//will stop once s1 = s2
//

function stringRotation(s1, s2) {
  let tempstring = s1;
    for(let i=0; i<s1.length; i++) {
      let s1array = tempstring.split('')
      let templetter = s1array.pop()
      s1array.unshift(templetter)
      tempstring = s1array.join('')
      if(tempstring === s2) {return isSubstring(tempstring,s2)}
    }
  return isSubstring(s1,s2)
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
