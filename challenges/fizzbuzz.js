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


const isDivisibleBy = (num, divisors) => {
  return divisors.reduce((acc, divisor) => acc && num % divisor === 0, true);
}

const fizzbuzz = (num) => {
  const fizz = 3;
  const buzz = 5;
  const output = [];

  for (let i = 1; i <= num; i += 1) {
    output.push(i);
    if (isDivisibleBy(i, [fizz, buzz])) output.push('fizzbuzz');
    else if (isDivisibleBy(i, [fizz])) output.push('fizz');
    else if (isDivisibleBy(i, [buzz])) output.push('buzz');
  }

  return output;
}

module.exports = fizzbuzz;
