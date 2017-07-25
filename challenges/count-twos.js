// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// Input
  // Integer
// Output
  // Integer, the number of twos contained in numbers from 1 to n

function countTwos(num) {
  // Brute Force

  // Create a counter to store number of twos
  let count = 0;
  
  // Iterate from 1 to num
  for (let i = 1; i <= num; i += 1) {
  
    // Iterate through characters in i
      // If the current character is '2' increment the counter
    i.toString().split('').forEach((char) => char === '2' ? count += 1 : null);
  
  }
  
  // Return the counter
  return count;
}

// Tests
//console.log(countTwos(1), 0);
//console.log(countTwos(3), 1);
//console.log(countTwos(13), 2);
//console.log(countTwos(1000), 300);
//console.log(countTwos(11420), 4483);

module.exports = countTwos;