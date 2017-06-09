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
    let spaces =0;
    let astr = 0;
    let print ='';
    for (let i=0; i<n; i++){
        spaces=n-(i);
        astr=i
        for (let w=0; w<spaces; w++){
        print = print.concat(" ");
        }
        for (let ww=0; ww<astr; ww++){
        print = print.concat("*");
        }
        console.log(print);
    }

}


module.exports = drawStairs;
