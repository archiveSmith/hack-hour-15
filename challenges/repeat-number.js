/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// Input
  // Array of every number from 1 to n, with one duplicate number
// Output
  // The number that appears twice in the array

function repeatNumbers(array) {
  // Add up all numbers
  // Subtract the sum from 1 to n (which is n(n+1)/2 according to the internet)
  // Return the difference
  
  // n is the array length minus 1 (for the extra element)
  const n = array.length - 1;
  return array.reduce((sum, i) => sum + i) - (n * (n + 1) / 2);
}

// Test cases
//console.log(repeatNumbers([1,2,3,2,4,5]), 2);
//console.log(repeatNumbers([1,7,3,2,4,5,7,6]), 7)

module.exports = repeatNumbers;
