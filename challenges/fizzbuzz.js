// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers
// divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
// create an array from 1 .. num.
  const operation = Array.apply(null, { length: num }).map(Number.call, Number);

// perform the following operations together
  for (let i = 0; i <= operation.length; i += 1) {

  // evaluate each number. If it is divisible by 3 and 5 replace that value in
  // the array with fizzbuzz.
    if (operation[i] % 3 === 0 && operation[i] % 5 === 0) {
      operation[i] = 'fizzbuzz';
      continue;
    }

  // If it is divisible by 3, replace that value in the array with 'fizz'
    if (operation[i] % 3 === 0) {
      operation[i] = 'fizz';
      continue;
    }
  // If it is divisible by 5, replace that value in the array with 'buzz'
    if (!operation[i] % 5 === 0) {
      operation[i] = 'buzz';
      continue;
    }
  }

  return operation;
}

module.exports = fizzbuzz;
