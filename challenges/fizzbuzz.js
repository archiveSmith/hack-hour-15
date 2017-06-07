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


// This function takes a NUMBER and puts: 
//		- 'fizz' in place of numbers divisible by 3. 
//		- 'buzz' in place of numbers divisible by 5.
//		- 'fizzbuzz' in place of numbers divisible by 3 AND 5.
// It returns an array containing the results. 
function fizzbuzz(num) {
	// Delcare array to store the results 
	const result = []; 

	// Test whether num is of type Number and return input (num) if it isn't 
	//if ( (typeof num !== "number") ) return num; 

	// Use for loop to "num" of times 
	for( let i = 1 ; i <= num ; i += i ) {
		
		// fizzbuzz DIVISIBLE by 3 AND 5: 
		if ( (i % 3 === 0) && (i % 5 === 0))
			result.push('fizzbuzz'); 
		else if ( i % 3 === 0) // fizz DIVISIBLe by 3 
			result.push('fizz'); 
		else if ( i % 5 === 0 ) // buzz DIVISIBLE by 5 
			result.push('buzz'); 
		else 
			result.push(i); // push non-divisible number into array
	}

	return result; 
}

module.exports = fizzbuzz;
