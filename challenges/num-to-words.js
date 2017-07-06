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
const map = {
  "0": "Zero", "1": "One", "2": "Two", "3":"Three", "4": "Four", "5": "Five",
  "6": "Six", "7": "Seven","8": "Eight", "9": "Nine", "10": "Ten",
  "11": "Eleven", "12": "Twelve", "13": "Thirteen","14": "Fourteen", "15": "Fifteen",
  "16": "Sixteen", "17": "Seventeen", "18": "Eighteen", "19": "Nineteen",
  "20": "Twenty","30": "Thirty", "40": "Fourty","50": "Fifty", "60": "Sixty"
}

function numToWords(num) {
  // if num undefiend, return undefined
  if (num === undefined) return undefined
  // convert num to string
  let numStr = num.toString()

  // ntwRecursion(numStr, words)
  let words = ntwRecursion(numStr, [])
  // ntwRecursion(numStr, [])

  return words.join('')
}
function ntwRecursion(numStr, words){
  // check number of digits
  // console.log(numStr.length)
  switch (numStr.length){
    case 1:
      words.unshift(map[numStr])
      return words
    case 2:
      if (map[numStr]){
        words.unshift(map[numStr])
        return words
      } else {
        let twoDigit = numStr.substring(0) + '0'
        words.unshift(map[twoDigit])
        return ntwRecursion(numStr.substring(1), words)
      }
    default:
      break
  }
}

 console.log( numToWords(0) )// 'Zero'
 console.log( numToWords(43) )// 'FortyThree'
//  console.log( numToWords(2999) )// 'TwoThousandNineHundredNintyNine'
 console.log( numToWords(15) )// 'Fifteen'
//  console.log( numToWords(2483579411) )// 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
//  console.log( numToWords(300525151340440) )// 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
//  console.log( numToWords(92120000000000000) )// 'NintyTwoQuadrillionOneHundredTwentyTrillion'
//  */
module.exports = numToWords;
