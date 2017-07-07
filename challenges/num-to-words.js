// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNinetyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NinetyTwoQuadrillionOneHundredTwentyTrillion'
 */

// Input
  // Integer
// Output
  // String containing the number in english in camel case

function numToWords(num) {
  console.log(num);
  
  // Edge cases
  if (num === undefined || !isFinite(num)) return undefined;
  if (num === 0) return 'Zero'

  // Create array of int:name pairs (e.g. [1000,'thousand'])
  const pairs = [
    [1000000000000000, 'Quadrillion'],
    [1000000000000, 'Trillion'],
    [1000000000, 'Billion'],
    [1000000, 'Million'],
    [1000, 'Thousand'],
    [100, 'Hundred'],
    [90, 'Ninety'],
    [80, 'Eighty'],
    [70, 'Seventy'],
    [60, 'Sixty'],
    [50, 'Fifty'],
    [40, 'Forty'],
    [30, 'Thirty'],
    [20, 'Twenty'],
    [19, 'Nineteen'],
    [18, 'Eighteen'],
    [17, 'Seventeen'],
    [16, 'Sixteen'],
    [15, 'Fifteen'],
    [14, 'Fourteen'],
    [13, 'Thirteen'],
    [12, 'Twelve'],
    [11, 'Eleven'],
    [10, 'Ten'],
    [9, 'Nine'],
    [8, 'Eight'],
    [7, 'Seven'],
    [6, 'Six'],
    [5, 'Five'],
    [4, 'Four'],
    [3, 'Three'],
    [2, 'Two'],
    [1, 'One'],
    
  ];
  
  // Create empty output string
  let output = '';
  
  // Iterate through array
  pairs.forEach(pair => {
    
    // If num >= int
    if (num >= pair[0]) {
  
      // If int >= 100
      if (pair[0] >= 100) {
        // Add the english word for the number of times int goes into num
        output += numToWords(Math.floor(num / pair[0]));
      }
  
      // Add the english word for the int
      output += pair[1];
      
      // Set num to the remainder of num/int
      num = num % pair[0];
      
    }
    
  });
  
  // Return the output
  return output;
  
}

// Test cases
console.log(numToWords(0)); // -> 'Zero'
console.log('Zero');
console.log(numToWords(43)); // -> 'FortyThree'
console.log('FortyThree');
console.log(numToWords(2999)); // -> 'TwoThousandNineHundredNinetyNine'
console.log('TwoThousandNineHundredNinetyNine');
console.log(numToWords(15)); // -> 'Fifteen'
console.log('Fifteen');
console.log(numToWords(2483579411)); // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
console.log('TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven');
console.log(numToWords(300525151340440)); // -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
console.log('ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty');
console.log(numToWords(92120000000000000)); // -> 'NinetyTwoQuadrillionOneHundredTwentyTrillion'
console.log('NinetyTwoQuadrillionOneHundredTwentyTrillion');

module.exports = numToWords;
