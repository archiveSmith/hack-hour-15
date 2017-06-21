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
    let result = [];
    let rObj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }
    let keys = Object.keys(rObj);
    for (let i = keys.length-1; i>=0; i--){
        console.log(rObj[keys[i]])
        if(n >= rObj[keys[i]]){
          if(n> 1000){
              while(n>=1000){
              result.push([keys[i]])
              n -= 1000;
              }
              if(n === 0) return result.join("");
          }
          else{
            result.push([keys[i]])
            n -= rObj[keys[i]];
            if(n === 0) return result.join("");
          }
            
        }
    }
    return result.join("");
}

module.exports = romanNumeral;
