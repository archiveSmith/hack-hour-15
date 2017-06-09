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

// step through 1-num by 1, then loop. check mods, fizz or buzz appropriately.
// start with the no go case then work down to either fizz or buzz alone.

function fizzbuzz(num) {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    /* the easy solution
    if (i % 3 !== 0 && i % 5 !== 0) {
      result.push(i);
    } else if (i % 15 === 0) {
      result.push('fizzbuzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('buzz');
    } */

    // the clever solution.
    const element = fizz ? buzz ? 'fizzbuzz' : 'Fizz' : buzz ? 'buzz' : i;
    result.push(element);
  }
  return result;
}
module.exports = fizzbuzz;
