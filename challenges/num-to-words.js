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
  // array to preserve order
  const numbers = [
    0,
    1,
    2,
    3,
    4, 
    5, 
    6,
    7,
    8,
    9, 
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17, 
    18, 
    19, 
    20, 
    30, 
    40, 
    50, 
    60, 
    70, 
    80, 
    90, 
    100,
    1000
  ]
  const dictionary = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
  }
  let words = '';
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    let numKey = numbers[i];
    if (num >= numKey && num != 0) {
      let leadingNum = num / numKey;
      words += dictionary[leadingNum] + dictionary[numKey];
      console.log(words)
      num = num - (leadingNum * numKey); 
      console.log('num ', num)
    }
    if (num === 0) return words || "Zero";
  }
  return words
}

console.log(numToWords(10));

module.exports = numToWords;
