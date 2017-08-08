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
  const cache = {};
  array.forEach((int) => {
    if (cache[int]) cache[int]++;
    else cache[int] = 1;
  });
  return +Object.keys(cache).filter((key) => {
    if (cache[key] === 1) return true;
    else return false;
  })[0];
}

uniqueNumber([1, 2, 1, 3, 3]);

module.exports = uniqueNumber;
