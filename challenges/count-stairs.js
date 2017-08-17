/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
    // ans = "";
    // let twos = Math.floor(n/2)
    // for (let i=0; i<n; i++){
    //     if (i!=n-1){
    //     ans = ans + "1 + "
    //     } 
    //     else {
    //         ans = ans + "1"
    //     }
    
    //     // console.log("1:", twos)
    // }
    // return ans;
    if (n===0){return 1}
    if (n===1){return 1}
    return countStairs(n-1) + countStairs(n-2)
}
console.log(countStairs(2));
module.exports = countStairs;
