
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
    // 1. Print spaces first n-1
    // 2. Print asterik 
    // 3. Print new line

    // Print Spaces 
    for(let i = 0; i < n ; i++) {
        console.log(' '); 
        // Print asterick
        for(let j = n; j > 0; j--) {
            console.log("*"); 
            if(j==1) console.log("/n"); 
        }
    }


    /*************** RECURSIVE SOLUTION ***************
    // Base Case: n is not a number and/or is not between 1-100
    if( !(isNaN(n) && n <= 1 && n <= 100) )
        return console.log("input is not a number and/or is not beween 1 and 100"); 

    // Base Case: 1 
    if ( n === 1) {
        console.log('*'); 
    } 
    else if ( n > 1 ) {

    }
     drawStairs(n-1)
     *******************************************************/
}


module.exports = drawStairs;
