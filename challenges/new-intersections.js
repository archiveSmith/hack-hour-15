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

function newIntersections(x, y){
  // find horiontal lines -- AKA sets of coordinates with matching y values
  // find vertical lines -- AKA sets of coordinates with matching x values
  // see if any of those lines intersect
  // if they do, increment a counter

  // maybe build up an object to track horizontal and vertical line segments -- have to check against all existing for each
  // points obj- instantiate each as false -- if on a line - set to true and make a new entry in verticals obj
  // horizLines kvps have a key that is the y coord. and the value is an obj with min and max 
  // if a point is has a match, it needs to know if it is horizontal or vertical.  
  // so maybe need to structure the points obj differently -- collect
  // ex verts = { 4: { min: 1, max: 5}}
  const points = {
    x: {},
    y: {}
  };
  const horizLines = {};
  const vertLines = {};

  for (let i = 0; i < x.length; i += 1) {
    if (points[x[i]]) {
      // modify lines o
    }
  }

}

module.exports = newIntersections;
