/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 * // 1, 4, 1, 9,9 > 24.
//a2 + b2 == c2
 // 24
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  let sum = 0;
  let doubleSum = 0;
  for (let i = 0; i< array.length; i+= 1) {
    sum += array[i] * 2;

    if (i % 2 === 0) doubleSum += array[i] * 2;

    console.log(doubleSum);
    console.log('AL: ', (array.length - 1)/2)
  }

  console.log(doubleSum - sum);
}

function uniqueNumber(array) {

  for (let i = 0; i< array.length; i++) {
    if (array.indexOf(array[i], i+1) === -1 && array[i] !== -Infinity) return array[i];
    else array[array.indexOf(array[i], i+1)] = -Infinity;
  }
}

arr = [1,1,3,3,2];
console.log(uniqueNumber(arr));
module.exports = uniqueNumber;
