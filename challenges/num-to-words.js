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
  let output = '';
  let placeCount = 0;
  let currentNumToWord = '';
  let currentBigPlace = '';

  while (num > 0) {
    if (numWords.isTeen(num % 100)) {
      currentNumToWord = numWords.getNum(num % 100);
      currentBigPlace = numWords.getBig(placeCount);
      num = Math.floor(num / 100);
      placeCount += 2;
    } else {
      currentNumToWord = numWords.getNum(num % 100);
      currentBigPlace = numWords.getBig(placeCount);
      num = Math.floor(num / 100);
      placeCount += 2;
    }

    output = currentNumToWord + currentBigPlace + output;
  }

  return output;
}

const numWords = {
  ones: ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
  teens: ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
  tens: ['', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
  bigs: ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'],

  getNum: function (num) {
    if (num >= 0 && num <= 9) return this.ones[num];
    else if (num >= 10 && num <= 19) return this.teens[num - 10];
    else if (num >= 20 && num <= 90) {
      return this.tens[Math.floor(num / 10)] + this.ones[Math.floor(num % 10)];
    }
  },

  getBig: function (zeroCount) {
    if (zeroCount === 2) return 'Hundred';
    else if (zeroCount % 3 === 0) return this.bigs[zeroCount / 3];
    else return '';
  },

  isTeen: (num) => num >= 11 && num <= 19,
}

console.log(numToWords(727216));

module.exports = numToWords;
