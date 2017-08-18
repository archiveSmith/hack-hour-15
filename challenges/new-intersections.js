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
  let boundCount = 0;
  for (let i = 0; i < x.length; i += 1) {
    // bounded if equal to 4
    let count = 0;
    let rightX = x[i] + 2;
    let rightY = y[i];

    // from left bound
    // check for right bound
    console.log('right?', x.indexOf(x[i]+2), y.indexOf(y[i]), i)
    if (x.indexOf(x[i] + 2) === y.indexOf(y[i]) && y.indexOf(y[i]) !== -1) {
      console.log('in right bound', x[i] + 2, y[i])
      count += 1;
   } 
    // check for upper bound 
    if (x.indexOf(x[i] + 1) === y.indexOf(y[i] + 1) && y.indexOf(y[i] + 1) !== -1) {
      console.log('in upper bound', x[i] + 1, y[i] +1)
      
      count += 1;
    }
    // check for lower bound 
    if (x.indexOf(x[i] + 1) === y.indexOf(y[i]-1) && y.indexOf(y[i]-1) !== -1) {
      console.log('in lower bound', x[i]+1, y[i] -1, i)
      
      count += 1;
    }
    if (count === 3) boundCount += 1;
  }
  return boundCount;
}

x = [1,2,2,3,3,3,4,4];
y = [2,1,3,3,2,4,4,3];

console.log(newIntersections(x,y))

module.exports = newIntersections;
