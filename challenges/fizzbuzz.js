// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, 
// "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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


// create an empty return array
// iterate from 1 to num via a loop
// check if the current number is divisible by 3, 5, or both, if so, push a fizz, buzz, or fizzbuzz value to the return array
// if not divisible, push number to array
// once loop completes return array 

function fizzbuzz(num) {
	const result = []; 
	for (let i = 1; i <= num; i ++) {
		if (i % 5 === 0) {
			if (i % 3 === 0) {
				result.push('fizzbuzz');
			} else {
					result.push('buzz');
					}
		} else if (i % 3 === 0) {
			result.push('fizz');
		} else {
			result.push(i);
		}
	}
	return result; 
}

module.exports = fizzbuzz;
