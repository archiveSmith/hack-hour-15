/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
    1      I
    4      IV
    5      V
    9      IX
    10     X
    40     XL
    50     L
    90     XC
    100    C
    400    CD
    500    D
    900    CM
    100    M
 * 
 */

function romanNumeral(n) {
//5 is represented by V
//10 is reprented by X
//one less of 5 and 10 is represented with having a I before the roman numeral
//50 is reprsented by L
//100 is reprsented by C
//ten less of 50 and 100 is represented with having an X before the roman numeral
//500 is represented by a D
//1000 is represented by an M
//one hundred less of 500 and 1000 is represented with having a C before the roman numeral
    const obj = 
        {1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        5: 'V'}
    
    let temp = '';
    let counter = n;
    function recursive(number)
        for(let prop in obj) {
            if(n - parseInt(prop, 10) > 0) {
                temp += obj[prop];
                counter -= parseInt(prop, 10);
                return recursive(n);
            }
            while(n<5) {
                temp += "I";
                counter -= 1;
                if(n === 0) return temp;
            }
        }
    return recursive(n)
}



module.exports = romanNumeral;
