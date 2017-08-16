/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

 // Input
  // Two arrays, describing integer x and y coordinates in a 2d plane
// Output
  // Integer, representing the number of points

function newIntersections(x, y){
  const X_store = {};
  const Y_store = {};
  // Iterate through the OLD points
  for (let i = 0; i < x.length; i += 1) {
    // Log the max and the min Y and X at each X and Y, respectively
    X_store[x[i]] = {
      max: X_store[x[i]] ? Math.max(y[i], X_store[x[i]].max) : y[i],
      min: X_store[x[i]] ? Math.min(y[i], X_store[x[i]].min) : y[i],
    };
    Y_store[y[i]] = {
      max: Y_store[y[i]] ? Math.max(x[i], Y_store[y[i]].max) : x[i],
      min: Y_store[y[i]] ? Math.min(x[i], Y_store[y[i]].min) : x[i],
    };
  }

  // Iterate through the X_store
  return Object.keys(X_store).reduce((count, X) => {
    // Iterate from min to max
    for (let i = X_store[X].min + 1; i < X_store[X].max; i += 1) {
      // If there is a min < Y in y store and a max > Y, increment counter
      if (Y_store[i] && (Y_store[i].min < X && Y_store[i].max > X)) count += 1;
    }
    return count;
  }, 0);
  // Return counter
}

// test
// console.log(newIntersections([1,2,0,3,2,0,1],[0,0,2,2,3,3,3]));

module.exports = newIntersections;
