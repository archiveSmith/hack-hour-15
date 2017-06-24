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

// Input
  // Two strings

// Output
  // True or False

// Edge cases
  // Were strings provided? If not return "Invalid inputs"
  // if the lengths are not the same, return false


function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (typeof s1 !== "string" || typeof s2 !== "string") return "Invalid inputs";
  if (s1.length !== s2.length) return false;

  let s3 = s1.split("");
  let s4 = s2.split("");
  let check = s3[0];

  for (var i = 0; i < s3.length - 1; i++) {
    if (s3[0] === s4[i]) {
      var start = i;
    }
  }
  
  
  let substr = s4.slice(0, i-1).join('');
  // console.log(isSubstring(s1, substr))
  // console.log(substr);
  // console.log(isSubstring(s1, substr));
  if (!isSubstring(s1, substr)) {
    return false;
  } else {
    for (var j = start; j < s3.length - 1; j++) {
      if (s3[i] === s4[j]) {
        i++;
        j++;
      }
    }
  }
  
  if (j === s3.length - 1) {
    return true;
  }
  
  // console.log(start);
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
