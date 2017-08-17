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


// this sounds a lot like a simplified version of the coinsum problem
// try to implement a recursive stategy
function countStairs(n) {
  // helper function whose param is the # of steps from the top
  // if the top is one step away, you can only take one step;
  // else you can take one or two, and should call the function with each
  // when each function reaches the top, it returns 1, which can inrement a counter
  
  if (n < 1) return 'invalid input'

  let count = 0

  ways2top(n);

  function ways2top(remainingSteps) {
    if (remainingSteps === 1 || remainingSteps === 0) {
      count += 1;

      return
    } else {
      ways2top(remainingSteps - 1)
      ways2top(remainingSteps - 2)
    }
  }

  return count;
}

module.exports = countStairs;
