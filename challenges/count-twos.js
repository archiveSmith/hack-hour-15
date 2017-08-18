// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	// create counter starting at 0
	// loop from 1 to num
	// For each iteration, convert num to string
	// loop through string and see if char is 2, increment counter if so
  let count = 0; 
  let str; 
  for (let i = 0; i <= num; i++) {
  	str = i.toString(); 
  	for (let y = 0; y < str.length; y++) {
  		if (str[y] === '2') count++; 
  	}
  }

  return count; 
}

module.exports = countTwos;