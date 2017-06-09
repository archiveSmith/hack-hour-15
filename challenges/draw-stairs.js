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
  for (let i = 0; i <= n; i += 1) {
    let step = '';
    let pad = '';
    for (let j = 0; j <= i; j+= 1) {
      step = step + '*';
    }
    for (let k = n; k > i; k -= 1) {
      pad = pad + ' ';
    }
    console.log(pad + step);
  }
}

module.exports = drawStairs;
