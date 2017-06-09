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
  let arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(' ');
  }
  let newArr;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    newArr = arr.map((element, index) => {
      if (index >= i) {
        element = '*';
        return element;
      }
      return element;
    });
    console.log(newArr.join(''));
  }
}

module.exports = drawStairs;
