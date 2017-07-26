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

// Simpler solution?

// Tests
console.log(1, countTwos(1));
console.log(10, countTwos(10));
console.log(20, countTwos(20));
console.log(30, countTwos(30));
console.log(40, countTwos(40));
console.log(50, countTwos(50));
console.log(60, countTwos(60));
console.log(70, countTwos(70));
console.log(80, countTwos(80));
console.log(90, countTwos(90));
console.log(100, countTwos(100));
console.log(110, countTwos(110));
console.log(120, countTwos(120));
console.log(130, countTwos(130));
//console.log(countTwos(3), 1);
//console.log(countTwos(13), 2);
//console.log(countTwos(1000), 300);
//console.log(countTwos(11420), 4483);

module.exports = countTwos;