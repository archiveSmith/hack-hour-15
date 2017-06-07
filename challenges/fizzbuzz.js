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


//Return an array from  1 - num. Fizz multiples of 3. Buzz multiples of 5. FizzBuzz replace multiples of 3 and 5 (15).
//% to check for multiples.
 

function fizzbuzz(num) {
	for (let i = 0; i<num.length; i++){
		if(num[i]%3 === 0){
		  if(num[i]%5===0){
		    num[i]="fizzbuzz";
		  }
		  else{
		    num[i]="fizz";
		  }
		}
		if(num[i]%5 === 0){
			num[i]="buzz";
		}
	}
	return num;
}

module.exports = fizzbuzz;
