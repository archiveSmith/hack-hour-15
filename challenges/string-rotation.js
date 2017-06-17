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
  if (s1.indexOf(s2) >= 0){
    let ind = s1.indexOf(s2);
    for (let ii=ind; ii<sr.length; ii++){
      let s2Ind =0;
      if (s2[s2Ind] === s1[ii]){
        s2Ind++;
      } else {
        let endSubs1 = s1[ii-1]
        let endSubs2 = s2[s2Ind];
        for (let iii=0; iii<s2Ind; iii++){
        if (s2[endSubs2+1+iii]=== s1[iii]){
          return true
        } else return false;
        }
      }
    }
  }

}

function stringRotation(s1, s2) {
  if (s1[0] !== s2[0]){
return isSubstring(s1, s2)
  } else if (s1=s2){
    return true;
  } else {
    return false;
  }
}

let str = "melissa";
console.log(stringRotation("hello", "lohel"));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
