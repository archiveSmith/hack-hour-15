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
    let str ;
    for (let x = 0; x < n; x++) {
        str = ""
        for (let y = 0; y < n-x-1; y++) {
            str += " ";
        }
        for(let v = n-x-1;v < n;v++){
            str += "*";
        }
        console.log(str);
    }
}

drawStairs(6);


module.exports = drawStairs;