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
    if(typeof num !== 'number') return 'Invalid arguments';
    const ones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const tens = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const onesInString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tensInString = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teensInString = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighten', 'nineteen'];
    const everyMajorPlaces = ['hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'];
    const numArr = num.toString().split('');

    const emptyArr = [];
    const counter = 0;
    let stringToNumber = ''
    for(let i = numArr.length-1; i >= 0; i--) {
        let temp = nummArr.splice(numArr.length-1, 1);
        emptyArr.push(temp);
        counter++;
        if(counter % 3 === 1) 
    }

    
}

module.exports = numToWords;
