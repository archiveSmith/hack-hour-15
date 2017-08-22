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
  // return is an array
  const arr = [];
  // increment from 1 to num
  for (let i = 1; i <= num; i += 1) {
  // if divisible by both, insert fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz');
  // if divisible by 3,  insert element as fizz
    } else if (i % 3 === 0) {
      arr.push('fizz');
  // if divisible by 5 ,insert element as buzz
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = fizzbuzz;
