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
  // Goal is to return an array (create an array) with number from 1 to NUM (two for loops?), assigning "fizz" in place of numbers divisible by 3, "buzz" if divisible by 5, and "fizzbuzz" if divisible by 3 && 5

  // Create an empty array
  const arr = [];

  // Keep track of what number we are going to be assigning into array
  let count = 0;

  // For loop through array, starting at 0, up to num - 1, and incrementing by 1
  for (let i = 0; i < num; i++) {

    // Increment count outside of else if statements (DRY)
    count++;

    // If count is divisible by 3 && 5 (or 15), instead of assigning count, assign "fizzbuzz"
    if (count % 15 === 0) {
      arr[i] = 'fizzbuzz';
    }

    // Else if count is divisble by 5, instead of assigning count, assign "buzz"
    else if (count % 5 === 0) {
      arr[i] = 'buzz';
    }

    // Else if count is divisible by 3, instead of assigning count, assign "fizz"
    else if (count % 3 === 0) {
      arr[i] = 'fizz';
    }

    // Else, assign count
    else {
      arr[i] = count;
    }
  }

  // Return the newly created array
  return arr;

}

module.exports = fizzbuzz;
