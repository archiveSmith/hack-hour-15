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

// Given a number, return its english word equivalent in Pascal case.

// Divide the number into its smallest components
    // Base Case = 0 - 19
    // 20 - 99
    // 100 - 999
    // 1000 - 9999
        // Thousand
    // If number is > 999999
        // Divide by 1000
    // Million, Billion, Trillion, Quadrillion, Quintillion, Sextillion

function numToWords(num) {
    const zeroToNineteen = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const largeNumbers = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'];

    function addWords(num) {
        if (num < 20) {
            // Base Case
            return zeroToNineteen[num];
        } else if (num < 100) {
            return tens[Math.floor(num/10) - 2] + addWords(num - (Math.floor(num/10) * 10));
            // num.length % 3 === 1
                // return the 'Hundred", addWords
            // Find a way to use recursion on all the different words
        } else if (num < 1000) {
            return zeroToNineteen[Math.floor(num/100)] + 'Hundred' + addWords(num - (Math.floor(num/100) * 100));
        // Ninety Nine Thousand
        } else if (num < 100000) {
            return addWords(Math.floor(num/1000)) + 'Thousand' + addWords(num - (Math.floor(num/1000) * 1000));
        } 
        // Million
        // Billion
        // Trillion
        // Quadrillion
        // Quintillion
    }
    return addWords(num);
}

console.log(numToWords(99)); // NinetyNine
console.log(numToWords(999)); // NineHundredNinetyNine
console.log(numToWords(9999)); // NineThousandNineHundredNinetyNine

module.exports = numToWords;


// Initialize ONES array
// Initialize TENS array
// Initialize PLACES array

// Helper Function (convertToString)
    // Convert the input number to a string
        // Should be able to break up into threes
        // Add zeros to front of string until it's divisible by 3

// Helper Function (chunkInThrees)
    // Break string into and array of number strings chunked into threes

// Helper Function (parseChunk)
    /// Takes in one chunk and parses it
    // Convert each number in the String to its corresponding English word representation
    // If the first element is not '0' we want to append "hundred' to its name
    // Output: English word representation of chunk

// Helper Function (parseChunksArray)
    // Take in array of chunks and parses it
    // Passes each chunk into parseChunk helper function
    // Adds correct PLACE value to each passed in chunk
    // Output:English word representaiton of the input number

    // numToWords
    // Initialize variables equal to the return value of each helper function
    // Input number as a string
    // String as an array of chunks
    // Return value of final helper functions

    const ONES
    const TENS 
    const PLACES 

    // Convert the input number to a string (must be divisible by 3)

    function convertToString(num) {
        num = String(num);
        while (num.length % 3 !== 0) {
            num = `0${num}`;
        }
        return num;
    }

    // Chunk number string into chunks of three and push each number to an array

    function chunkInThrees(string) {
        const chunksArray = [];
        for (let i = 0; i < string.length; i += 3) {
            chunksArray.push(string.substring(i, i + 3));
        }
        return chunksArray;
    }

    // Parse given chunk of chunkArray
    function parseChunk(chunk) {
        let parsedChunk = '';
        if (chunk[0] !== '0') parsedChunk += ONES[chunk[0]] + 'Hundred';
        parsedChunk += TENS[chunk[1]];
        parsedChunk += ONES[chunk[2]];
        
        return parsedChunk
        .replace('TenOne', 'Eleven')
        .replace('TenTwo', 'Twelve')
        .replace('TenThree', 'Thirteen')
        // continue until Nineteen
        
    }

    // Parse the array of chunked strings into respective words
    function parseChunksArray(array) {
        let parsedString = '';
        for (let i = 0; i < array.length; i += 1) {
            const placement = array.length - i - 1;
            parsedString += parseChunk(array[i]) + PLACES[placement];
        }
        return parsedString;
    }

    function numToWords(num) {
        if (num === 0) return 'Zero'
        const numString = convertToString(num);
        const chunksArr = chunkInThrees(numStr);
        return parseChunksArray(chunksArr);
    }