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

// Input
  // An array of numbers, where one number appears once, and all other numbers appear exactly twice
// Output
  // The number that appears once

function uniqueNumber(array) {

  // O(n) 
  // Create a storage object
  const storage = {};
  // Iterate through the array
    // If the number doesnt exist in storage, add it
    // Else delete it
  array.forEach(num => storage[num] ? delete storage[num] : storage[num] = true)
  // Return the only number left
  return Object.keys(storage)[0];
}

// Test
console.log(uniqueNumber([1,2,1,3,3]),2);

module.exports = uniqueNumber;
