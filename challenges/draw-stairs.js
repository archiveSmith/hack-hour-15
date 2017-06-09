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
    if (n < 1){ console.log() }
    for (let i = 1; i <= n; i++){
        console.log(createStair(n, i))
    }
}
function createStair(n, level){
    let  stair = ''
    let lengthSpace = n - level;
    let lengthStair = level; 
    let spaceChars = new Array(lengthSpace + 1).join(' ')
    let stairChars = new Array(lengthStair + 1).join('*')
    stair = spaceChars + stairChars ;
    return stair;
}

module.exports = drawStairs;
