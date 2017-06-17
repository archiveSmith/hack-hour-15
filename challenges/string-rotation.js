/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 
 hello
 elloh
 llohe
 lohel
 ohell
 
 bye
 yeb
 eby


 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length || typeof s1 !== typeof s2) {
    return false;
  }
  let temp1 = '';
  let temp2 = '';
  let len = s1.length;
  let rotationStateAt0 = s2.indexOf(s1[0]);
  let rotationStateAt1 = s2.indexOf(s1[1]);
  
  temp1 = s1.slice(2);
  temp2 = s2.slice(rotationStateAt1 + 1) + s2.slice(0, rotationStateAt0);

  return isSubstring(temp1, temp2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
