
// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
var enStr = '';
var enStrEnd = '';
var wholeStr = '';
var numStr = num.toString()
if (!num) return '';

console.log(Array.from(numStr));
var numArr = Array.from(numStr);

for ( i=numArr.length; i>0; i--){
    wholeStr = findNum(numArr[i]) + findEnd(i);
}

// FIND NUM
function findNum(indNum){
switch (indNum) {
  case 1:
    enStr = 'One';
    break;
  case 2:
    enStr = 'Two';
    break;
  case 3:
    enStr = 'Three';
    break;
  case 4:
    enStr = 'Four';
    break;
  case 5:
    enStr = 'Five';
    break;
  case 6:
    enStr = 'Six';
    break;
  case 7:
    enStr = 'Seven';
    break;
  case 8:
    enStr = 'Eight';
    break;
  case 9:
    enStr = 'Nine';
    break;
  case 10:
    enStr = 'Ten';
    break;
  case 11:
    enStr = 'Eleven';
    break;
  case 12:
    enStr = 'Twelve';
    break;
  case 13:
    enStr = 'Thirteen';
    break;
  case 14:
    enStr = 'Fourteen';
    break;
  case 15:
    enStr = 'Fifteen';
    break;
  case 16:
    enStr = 'Sixteen';
    break;
  case 17:
    enStr = 'Seventeen';
    break;
  case 18:
    enStr = 'Eighteen';
    break;
  case 19:
    enStr = 'Nineteen';
    break;
  case 20:
    enStr = 'Twenty';
    break;
  case 30:
    enStr = 'Thirty';
    break;
  case 40:
    enStr = 'Forty';
    break;
  case 50:
    enStr = 'Fifty';
    break;
  case 60:
    enStr = 'Sixty';
    break;
  case 70:
    enStr = 'Seventy';
    break;
  case 80:
    enStr = 'Eighty';
    break;
  case 90:
    enStr = 'Ninety';
    break;
  default:
    enStr = 'Defaulted';
    break;
}
return enStr;
}

// ENDS
function findEnd(endNum){
switch (endNum) {
 case 3:
    enStrEnd = 'Hundred';
    break;
  case 1000:
    enStrEnd = 'Thousand';
    break;
  case 1000000:
    enStrEnd = 'Million';
    break;
  case 1000000000:
    enStrEnd = 'Billion';
    break;
  default:
    enStrEnd = 'Defaulted';
    break;
}
return enStrEnd;
}

return wholeStr;
}

console.log(numToWords(123));
module.exports = numToWords;
