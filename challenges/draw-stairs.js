/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  // Creating rows of asterisks and whitespace
    // The ladder will grow in astericks as it descends
    // Each level will have n characters in the line
    // Any empty space is filled in with spaces
    // Separate levels with a new line

  // Loop through the array
  // Add a new line
  // Add the # of white spaces, Add the # of astericks
  let string = '';
  let i = 0;
  while (i <= n) {
    string += '\n';
    string += (' ').repeat(n - i);
    string += ('*').repeat(i);
    i += 1;
  }
  return string;
}


module.exports = drawStairs;
