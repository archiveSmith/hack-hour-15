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

function newIntersections(xPoints, yPoints) {
  const xVals = getMinMax(xPoints);
  const yVals = getMinMax(yPoints);

  const newXPoints = [];

  for (let i = xVals.min; i <= xVals.max; i += 1) {
    for (let j = yVals.min; j <= yVals.max; j += 1) {
      // if the point has a old vals directly above, left, right, and below, push into new
      if (hasSurroundingPoints(i, j)) {
        newXPoints.push(i);
        newYPoints.push(j);
      }
    }
  }
}

const hasSurroundingPoints = (xPoints, yPoints, point) => {
  // Search left and right
  // For each left and right, check if there is corresponding up and down
  xPoints.findIndex(point.x)
}

const getMinMax = (arr) => (
  arr.reduce((acc, val) => {
    if (val < acc.min) acc.min = val;
    if (val > acc.max) acc.max = val;
    return acc;
  }, { min: Infinity, max: -Infinity })
);

module.exports = newIntersections;
