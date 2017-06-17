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

// makes sure that the letters in s2 appear in s1
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length === s2.length) {
    let start = s2.indexOf(s1.charAt(0));
    for (let i = 0; i < s1.length; i += 1) {
      if ( start > s2.length - 1) {
        start = 0;
      }
      if (s1.charAt(i) !== s2.charAt(start)) {
        return false;
      }
      start += 1;
    }
    return true;
  }
  return false
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
