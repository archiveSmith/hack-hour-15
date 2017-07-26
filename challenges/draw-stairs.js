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
//declare  counter
let spaceCount = n;
let space = " ";
let astCount = 0;
let ast = "*";

//console log +1 asterisk on each iteration with the number of spaces -1
for(spaceCount = n; spaceCount > 0; spaceCount--){
  astCount++;
  console.log(space.repeat(spaceCount) + ast.repeat(astCount))
}
}


module.exports = drawStairs;
