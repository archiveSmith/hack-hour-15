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

const x = [1,1,1,3,3,3,5,5,5];
const y = [1,3,5,1,3,5,1,3,5];

// find xMin, yMin point.
// find xMin, yMax point.
// find xMax, ymin.
// find xMax, yMax.
// all new points must be inside.
// find all points inside bounds




function newIntersections(x, y){
    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;

  for (let i = 0; i < x.length; i++) {
    if (x[i] <= xMin){
      xMin = x[i];
      if (y[i] <= yMin) yMin = x[i];

      if (y[i] >= yMax) yMax = x[i];
    } else if (x[i] >= xMax) {
      xMax = x[i];
      if (y[i] >= yMax) yMax = y[i];
      if (y[i] <= yMin) yMin = y[i];
    }
  }

  // return [xMin, xMax, yMin, yMax];
  return calcPoints(xMin, xMax, yMin, yMax);

}

function calcPoints(xMin, xMax, yMin, yMax) {
  let xMB = xMin// +1;
  let xmB = xMax// - 1;
  let yMB = yMin// + 1;
  let ymB = yMax// - 1;
  let count = 0;
  // console.log(xMB, xmB, yMB, ymB);
  for (let i = xMB; i <= xmB && i <= ymB; i++){
    // console.log(i);
    if (i >= xMB && i <= xmB && i>= yMB && i<= ymB){
      count++;
    }
  }
  return count;
}

// console.log('should be 5', newIntersections(x,y));



module.exports = newIntersections;
