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

 // Zero
 // FortyThree
 // TwoThousandNineHundredNinetyNine
 // Fifteen
 // TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven
 // ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty
 // NineTwentyundefinedQuadrillionOneHundredTwentyTrillionHundredBillionHundredMillionHundredThousandHundred

// (92,120,000,000,000,000
// Zero
// FortyThree
// TwoThousandNineHundredNinetyNine
// Fifteen
// TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven
// ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty
// NineQuadrillionOneHundredTwentyTrillionHundredBillionHundredMillionHundredThousandHundred


function numToWords(num) {
  let ones = [ 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One', '']; //l = 10
  let teens = ['Nineteen', 'Eighteen', 'Seventeen', 'Sixteen', 'Fifteen', 'Fourteen', 'Thirteen', 'Twelve', 'Eleven', 'Ten', '']; // 11
  let tens = ['Ninety','Eighty', 'Seventy', 'Sixty', 'Fifty', 'Forty', 'Thirty', 'Twenty', '']; // l = 9
  let ns = ['Quadrillion','Trillion', 'Billion', 'Million','Thousand', '', '']; // l = 6

  let str = String(num);

  if (str.length === 1) return ones[9 - num] || 'Zero';

  let top = str.slice(0, str.length % 3);
//  console.log(top);
  str = str.slice(top.length);
  // console.log(top);
  // console.log(str);

  if (str.length === 0){
    if (Number(top[0]) === 1){
      return teens[Number(top) - 11];
    } else {
      return tens[tens.length - Number(top[0])] + ones[ones.length - Number(top[1]) - 1];
    }
  }

  let i = 0;
  let ary = [];
  if (top) ary.push(top);
  while (i < str.length){
    let push = str.slice(i, i+3);
    ary.push(push);
    i+=3;
  }


  // console.log(ary);
  let finalWord = '';
  let len = 0;
  ary = ary.reverse()
  //console.log(ary);
  ary.forEach((hundred)=>{
    let word = '';
    len += 1;
    const first = Number(hundred[0]);
    const second = Number(hundred[1]);
    const third = Number(hundred[2]);

    word = ones[9 - first] + word;
    if (hundred.length === 3 && first !== 0) word = word + 'Hundred';
    if (hundred.length === 3){
      if (second === 1){
        word = word + teens[teens.length - third -2] //+ ones[9 - third];
      } else if (second === 0){
        word += ones[9 - third];
      } else {
        //console.log(hundred);
        word += tens[tens.length - second] + ones[ones.length - third - 1];
      }
    }
      if (hundred.length === 2){
        console.log(hundred);
       if (Number(hundred[0]) === 1){
         word = word + teens[Number(hundred) - 11];
       } else {
         console.log(hundred);
         word = word + tens[tens.length - first] + ones[ones.length - third - 1];
       }
     } else if (hundred.length === 1){
       word = word + ones[9 - Number(hundred)];
     }

    if (first !== 0) word = word + ns[ns.length - len - 1];

    finalWord = word + finalWord;

  })

  return finalWord;
}


test1 = numToWords(0);
test2 = numToWords(43);
test3 = numToWords(2999);
test4 = numToWords(15);
test5 = numToWords(2483579411);
test6 = numToWords(300525151340440);
test7 = numToWords(92120000000000000);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);


module.exports = numToWords;
