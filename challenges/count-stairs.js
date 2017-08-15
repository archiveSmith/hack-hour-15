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

 /*
 variable to store # of steps
 recursive function to get the output
 return variable
*/

function countStairs(n) {
  let ways = 0;
    function climbSteps(n, current) {
      if (current > n) return;
      else if (current === n) ways++;
      else {
        climbSteps(n, current + 1) || climbSteps(n, current + 2);
      }
    }
    climbSteps(n, 0);
  return ways;
}

// console.log(countStairs(5)); // 8 ways

module.exports = countStairs;
