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
  // find horiontal lines -- AKA sets of coordinates with same y value
  // find vertical lines -- AKA sets of coordinates with same x value
  // see if any of those lines intersect
  // if they do, increment a counter

  // maybe build up an object to track horizontal and vertical line segments -- have to check against all existing for each


  const horizLines = {};
  const vertLines = {};

  // build objects 
  for (let i = 0; i < x.length; i += 1) {
    if (vertLines[x[i]]) {
      vertLines[x[i]].push(y[i]) 
    } else {
      vertLines[x[i]] = [y[i]]
    }

    if (horizLines[y[i]]) {
      horizLines[y[i]].push(x[i]) 
    } else {
      horizLines[y[i]] = [x[i]]
    }
  }
  // delete values that are just points and extract the two endpoints for lines
  Object.keys(horizLines).forEach(key => { 
    if (horizLines[key].length === 1) delete horizLines[key] 
    else horizLines[key] = [Math.min(...horizLines[key]), Math.max(...horizLines[key])]
  })

  Object.keys(vertLines).forEach(key => { 
    if (vertLines[key].length === 1) delete vertLines[key] 
    else vertLines[key] = [Math.min(...vertLines[key]), Math.max(...vertLines[key])]
  })

  let count = 0;

  Object.keys(horizLines).forEach(yCoor => {
    Object.keys(vertLines).forEach(xCoor => {
      if (vertLines[xCoor][0] >= yCoor && yCoor <= vertLines[xCoor][1]  &&  horizLines[yCoor][0] >= xCoor && xCoor <= horizLines[yCoor][1]) {
        count += 1;
      }
    })
  })

  return count
}

module.exports = newIntersections;
