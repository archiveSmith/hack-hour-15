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
  let space = ' '.repeat(n - 1);
  let star = '*';
  for (let i = 0; i < n; i++) {
    console.log(space + star);
    space = space.slice(0, n - 1 - (i + 1));
    star += '*';
  }
}


module.exports = drawStairs;
