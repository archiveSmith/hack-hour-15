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
  if (typeof num !== 'number') return 'Invalid input';
  const teens = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Fourty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninty',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
    1000000000000: 'Trillion',
    1000000000000000: 'Quadrillion'
  }

  if (num < 100 && teens.hasOwnProperty(num)) return teens[num];


  const splitup = (''+num).split('');
  console.log(splitup);
  const digits = splitup.map((elem, i) => {
    let numWord = '';
    let digit = elem + '0'.repeat(splitup.length - 1 - i);
    console.log(digit)
    if (digit == 0) return numWord;
    if (digit < 100 && teens.hasOwnProperty(digit)) {
      numWord += teens[digit];
    }
    else if (digit >= 100 && teens.hasOwnProperty(digit)) {
      numWord += 'One' + teens[digit];
    }
    else if (!teens.hasOwnProperty(digit)) {
      numWord += teens[digit.charAt(0)];
      digit = 1 + digit.slice(1);
      numWord += teens[digit];
    }
    return numWord
  })

  return digits.join('');

}

console.log(numToWords(586428));

module.exports = numToWords;
