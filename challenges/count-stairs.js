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
  let ways = 0
  function stairsPossibilities(currentSum, oneOrTwo) {
    currentSum += oneOrTwo;
    // base case -> if sum hits target n
    if (currentSum === n) {
      ways += 1;
      return null;
    // if it goes over, end recursive call
    } else if (currentSum > n) return null;
    // call two instances -> either take one or two steps
    return stairsPossibilities(currentSum, 1) || stairsPossibilities(currentSum, 2);
  }
  // start with 0
  stairsPossibilities(0, 0);
  return ways;
}


// console.log(countStairs(6))
module.exports = countStairs;
  