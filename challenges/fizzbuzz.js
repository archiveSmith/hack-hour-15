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

function fizzbuzz(num) {
  const output = [];
  // Plan: Create an array of numbers from the number (n), and check if each element is divisible by 3 and/or 5.

  // Create an array of numbers from the number (n), where the first element is 1, and the last element is n
  for (let i = 1; i <= num; i += 1) {
    output.push(i);
  }
  // Cycle through the array for numbers divisible by 3 => change to 'fizz'
  // Cycle through the array for numbers divisible by 5, add 'buzz'
  // If is not divisible by 3 || 5, return
  return output.map((val) => {
    if (val % 3 === 0 && val % 5 === 0) {
      return 'fizzbuzz';
    } else if (val % 3 === 0) {
      return 'fizz';
    } else if (val % 5 === 0) {
      return 'buzz';
    }
    return val;
  });
}

module.exports = fizzbuzz;
