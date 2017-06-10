/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======

 For example:
 drawStairs(6) ->
>>>>>>> 30d26ff8e3d411ec474ed9ac592761d2a93d21da
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
  let i = 0;
  while (i <= n) {
    console.log((' ').repeat(n - i) + ('*').repeat(i));
    i += 1;
  }
}


module.exports = drawStairs;
