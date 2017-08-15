/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

// Input
  // An integer
// Output
  // The number of permutations of 1s and 2s that sum up to n

// Find the number of combinations of 1s and 2s that sum up to n
  // floor(n/2) + 1
// Sum unique anagrams of each combination

//Test
// console.log(countStairs(5))

function countStairs(n) {
  let result = 0;
  // Iterate from 0 to n by steps of 2
  for (let i = 0; i <= n; i += 2) {
    // insert n-i '1's into the combination string
    let output = '1'.repeat(n-i);
    // Insert i/2 '2's into the combination string
    output += '2'.repeat(i/2);
    // Find anagrams of output string
    // Increment result by length of anagrams array
    result += anagrams(output).length;
  }
  // Return result
  return result;
}

// From previous hack hour
function anagrams(string) {
  // Base case
  if (string.length === 0) return [''];

  // Create output array
  const output = [];

  // Iterate through the string
  for (let i = 0; i < string.length; i += 1) {

    temp = string.split('');
    temp.splice(i, 1);

    // append to output the result of anagram on a substring + the first character
    anagrams(temp.join('')).forEach(anagram => output.push(string[i] +anagram));

  }

  // return the output
  return output.filter((str, i) => output.indexOf(str) === i);
}

module.exports = countStairs;
