/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  if (!Array.isArray(array)) return 'Invalid Input';
  if (array.length < 1) return 'something';
  if (array.length === 1) return array[0];

  // if array is an array from 0-n
  let n = (array.length + 1) / 2
  let expected = 0;
  while (n) {
    expected += n + n;
    n -= 1;
  }
  const actual = array.reduce((acc, elem) => {
    acc += elem;
    return acc;
  })
  return expected - actual;

  // if array is an array of any numbers
  const seen = array.reduce((acc, elem) => {
    if (acc[elem]) acc[elem] += 1;
    else acc[elem] = 1;
    return acc;
  }, {})
  for (num in seen) {
    if (seen[num] === 1) return Number(num);
  }

}

console.log(uniqueNumber([1,2,1,3,3, 4, 5, 4, 2]))

module.exports = uniqueNumber;
