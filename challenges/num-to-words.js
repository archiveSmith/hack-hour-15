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

 function getNum(n) {
   let result = '';
   while (n > 0) {
    switch(n) {
	  case 1: 
        result += 'One'; 
        n = n - 1; 
        break;

      case 2: 
        result += 'Two'; 
        n = n - 2; 
        break;

      case 3: 
        result += 'Three'; 
        n = n - 3; 
        break;

      case 4: 
        result += 'Four'; 
        n = n - 4; 
        break; 

      case 5: 
        result += 'Five'; 
        n = n - 5; 
        break;

      case 6: 
        result += 'Six'; 
        n = n - 6; 
        break;

      case 7: 
        result += 'Seven'; 
        n = n - 7; 
        break;

      case 8: 
        result += 'Eight'; 
        n = n - 8; 
        break;

      case 9: 
        result += 'Nine'; 
        n = n - 9; 
        break; 

      case 10: 
        result += 'Ten'; 
        n = n - 10; 
        break;

       case 11: 
        result += 'Eleven'; 
        n = n - 11; 
        break;

      case 12: 
        result += 'Twelve'; 
        n = n - 12; 
        break;

      case 13: 
        result += 'Thirteen'; 
        n = n - 13; 
        break;

      case 14: 
        result += 'Fourteen'; 
        n = n - 14; 
        break; 

      case 15: 
        result += 'Fifteen'; 
        n = n - 15; 
        break;

      case 16: 
        result += 'Sixteen'; 
        n = n - 16; 
        break;

      case 17: 
        result += 'Seventeen'; 
        n = n - 17; 
        break;

      case 18: 
        result += 'Eighteen'; 
        n = n - 18; 
        break;

      case 19: 
        result += 'Nineteen'; 
        n = n - 9; 
        break; 
	}
	if (n >=20 && n < 30) {
        result += 'Twenty'; 
        n = n - 20; 
    }

    if (n >=30 && n < 40) {
        result += 'Thirty'; 
        n = n - 30; 
    }

    if (n >=40 && n < 50) {
        result += 'Fourty'; 
        n = n - 40; 
    }

    if (n >=50 && n < 60) {
        result += 'Fifty'; 
        n = n - 50; 
    }

    if (n >=60 && n < 70) {
        result += 'Sixty'; 
        n = n - 60; 
    }

    if (n >=70 && n < 80) {
        result += 'Seventy';
        n = n - 70; 
    } 

    if (n >=80 && n < 90) {
        result += 'Eighty'; 
        n = n - 80; 
    }

    if (n >=90 && n < 100) {
        result += 'Ninety';
        n = n - 90; 
    } 
      
  }
  return result; 
}

function numToWords(n) {
  let result = [];
  let divisor;
  let divisorStr;
  while (n >= 100) {

  	if (n >= 100000000000000) {
  		divisor = Math.floor(n / 100000000000000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'HundredTrillion';
  		n = n - (100000000000000 * divisor);
  	}

  	if (n >= 1000000000000) {
  		divisor = Math.floor(n / 1000000000000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'Trillion';
  		n = n - (1000000000000 * divisor);
  	}

  	if (n >= 100000000000) {
  		divisor = Math.floor(n / 100000000000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'HundredBillion';
  		n = n - (100000000000 * divisor);
  	}

  	if (n >= 1000000000) {
  		divisor = Math.floor(n / 1000000000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'Billion';
  		n = n - (1000000000 * divisor);
  	}

    if (n >= 100000000) {
  		divisor = Math.floor(n / 100000000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'HundredMillion';
  		n = n - (100000000 * divisor);
  	}

    if (n >= 1000000) {
  		divisor = Math.floor(n / 1000000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'Million';
  		n = n - (1000000 * divisor);
  	}

  	if (n >= 100000) {
  		divisor = Math.floor(n / 100000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'HundredThousand';
  		n = n - (100000 * divisor);
  	}

  	if (n >= 1000) {
  		divisor = Math.floor(n / 1000);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'Thousand';
  		n = n - (1000 * divisor);
  	}

  	if (n >= 100) {
        divisor = Math.floor(n / 100);
  		divisorStr = getNum(divisor);
  		result += divisorStr + 'Hundred';
  		n = n - (100 * divisor);
  	}
  }
  if (n > 0) result += getNum(n);

  return result; 
}
 

module.exports = numToWords;
