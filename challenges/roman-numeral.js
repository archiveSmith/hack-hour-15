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
    let mapObj = {
        1: "I",
        5: "V",
        10:" X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    let ans = "answer"

    if (n<0){
        return "Please enter postitve integer."
    } else if (n===0){
        return 0;
    } else {
        for (prop in mapObj){
            if (prop == n){
            //console.log(mapObj[prop])
            return mapObj[prop]
            } else if (prop!=1 && prop%n>0 && prop%n<prop*2){
                console.log(prop);
                ans = mapObj[prop];
                romanNumeral(prop%n);
                break;
            }

    }
}
return ans;
}

module.exports = romanNumeral;
console.log(romanNumeral(6));