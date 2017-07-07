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

   2: II
   3: II
   5: V
   6: VI
   7: VII
   8: VIII
   9: IX
   30: xxx

 *
 */

function romanNumeral(n) {

 // string n, split into array
 // iterate over array, finding the appropriate character in a list of numerals.
 // 13 > XII
 // 3 > III
 // 103 > CII
 // 93 > XCII
 // 83 LXXXIII
 // 1993 > MCMXCIII  1000 900 90 3

  if (!n) return NaN; //if not a number, return.
  let bucket = String(n).split("");
    let numerals = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];

    var roman = "",
         i = 3;
     while (i--){

       roman = (numerals[+bucket.pop() + (i * 10)] || "") + roman;
     }
     return Array(+bucket.join("") + 1).join("M") + roman;
 }

console.log(romanNumeral(20993)); // > 1 9 3
                        //h t o

module.exports = romanNumeral;
