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

    let counter = 1
    let result = ""
    let steps = "*";
    let blank = " "
    let blankcounter = n
    
    function recursive(arg){
        if(counter === n+1) {
          let finish = console.log(result)
          return finish;}
        blankcounter--;
        result += blank.repeat(blankcounter);
        result += steps.repeat(counter);
        if(counter < n) result += "\n";
        counter++;

        return recursive(n);
    }

    return recursive(n);
}

module.exports = drawStairs;
