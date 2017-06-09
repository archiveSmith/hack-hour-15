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
    // Check for valid input
    if (typeof n !== 'number'
       || n < 1
       || n > 100
       || n % 1 != 0) return 'Invalid number';
    
    // Print each line of stairs
    for (let i = 0; i < n; i++) {
        console.log(createLine(n, i));
    }
}

// Takes in a line length and a number of stars in the line
// Returns a string with length length and stars right-aligned and left-padded
function createLine(length, stars) {
    let line = '';
    for (let i = 1; i <= length; i++) {
        line += i < length - stars ? ' ' : '*';
        
        /*if (i < length - stars) {
            line += ' ';
        }
        else {
            line += '*';
        }*/
    }
    return line;
}

module.exports = drawStairs;
