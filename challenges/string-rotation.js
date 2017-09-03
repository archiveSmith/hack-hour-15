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

function stringRotation(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return;
  if (s1.length !== s2.length) return false;
  if (s1.length === 0 && s2.length === 0) return true;

  const indexOfChar = (char, excludedIndices) => {
    for (let i = 0; i < s2.length; i += 1) {
      if (s2[i] === char && !excludedIndices.includes(i)) return i;
    }
    return -1;
  };

  const isRotation = (index1, index2) => {
    return (s1.slice(index1) + s1.slice(0, index1)) === (s2.slice(index2) + s2.slice(0, index2));
  };

  // Loop through s1, and find each char in s2
  for (let charIndexInS1 = 0; charIndexInS1 < s1.length; charIndexInS1 += 1) {
    const excludedIndices = [];
    let charIndexInS2 = indexOfChar(s1[charIndexInS1], excludedIndices);

    while (charIndexInS2 !== -1) {
      if (isRotation(charIndexInS1, charIndexInS2)) return true;
      else {
        excludedIndices.push(charIndexInS2);
        charIndexInS2 = indexOfChar(s1[charIndexInS1], excludedIndices);
      }
    }
  }

  return false;
}


module.exports = {
  isSubstring: isSubstring,
  stringRotation: stringRotation
};