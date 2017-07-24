/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  //3 part variable including object containing romans and values, an empty string to fill and an iterator
  let roNums = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}, roman='',i;
  if (n === 0) return null;
  if (n<=0 || n.length === 0) return null;

  for(i in roNums){
    console.log(roNums[i])
    while(n >= roNums[i]){
      roman += i;
      n -= roNums
    }
  }
return roman;
};

console.log(romanNumeral(140));

module.exports = romanNumeral;
