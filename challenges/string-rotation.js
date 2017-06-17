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

// Given a string, find if the second string is a rotation of the first string.
  // This can be achieved by the following steps:
  // (x) 1. Check the length of s1 and s2
  // 2. Check for where the rotation point occurred in s2
  // 3. Check if the subString before the rotation point can be found in s1
    // Use isSubstring function
  // 4. Check if the substring after the rotation point can be found in s2
    // Use isSubstring function

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
  // returns true or false
}

function stringRotation(s1, s2) {
  if (s1.length === s2.length) {
    let subString = '';
    let breakPoint;
    for (let i = 0; i < s2.length; i++) {
      if (isSubstring(s1, subString)) {
        subString += s2[i];
      } else {
        breakPoint = i;
        break;
      }
    }
    return isSubstring(s1, s2.slice(breakPoint, s2.length - 1));
  }
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
