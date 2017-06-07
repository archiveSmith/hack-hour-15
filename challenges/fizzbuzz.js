// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]


// The comments not in parens are my original English solution strategry
// The comments in parens are translating that into a specific approach
function fizzbuzz(num) {
    
    // (check for valid input)
    if (typeof num !== 'number' || num < 1 || num % 1 !== 0) {
        return "Not a valid positive integer";
    }
    
    // Create an array with elements from 1 to an inputted integeter (num)
    
    // (Create an array)
    const array = [];
    
    // where each element in the array is replaced with:
    
    // (Iterate from 1 to num)
    for (let i = 1; i <= num; i++) {
        
        // (Pushing the following, where "the number" is our iterator, i)
        let value = '';
        
        // * 'fizz' if the number is divisible by 3
        if (i % 3 === 0) {
            value += 'fizz';
        }
        
        // * 'buzz' if the number is divisible by 5
        if (i % 5 === 0) {
            value += 'buzz';
        }
        
        // * 'fizzbuzz' if the number is divisble by 3 and 5
        // (not needed)
        
        // * otherwise, the number itself
        if (value === '') {
            value = i;
        }
        
        // (Push the new value into the array)
        array.push(value)
        
    }
    
    
    
    // Then return the array
    
    // (Return array)
    return array;
    
}

//console.log(fizzbuzz(100));

module.exports = fizzbuzz;
