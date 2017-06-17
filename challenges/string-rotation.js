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
  return s1.indexOf(s2) >= 0;
}


function stringRotation(s1, s2) {
  if (s2.length !== s1.length || arguments.length<2){
    return false;
  }
  if (s1 === s2){
    return true;
  }
  let matchFound = false,
      check;
  s2 = s2.split("");
  for (let i=0; i<s2.length; i++){
    let firstChar = s2[0];
    s2.forEach((ele, index, arr)=>{
      if(index === s2.length-1){
        arr[index] = firstChar;
      }else{
        arr[index] = arr[index+1]
      }
    })
    check = s2.join("");
    if(check === s1){
      matchFound = true;
    }
  }
  return matchFound;
}



module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
