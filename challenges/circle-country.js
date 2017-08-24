/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */


// x - array of x coordinates
// y - array of y coordinates
// r - radius of circles

let x = [0, 10, 15];
let y = [0, 8, 13];
let r = [4, 1, 2,];

// need straight line distance between XY and XY.
// d = sqrt((x2 -x1)^2 + (y2-y1^2))
// need to find circles that have starts along the same path
// need to count how many borders fall between that point.


function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  const dX= Math.pow((end_x - start_x), 2);
  const dY = Math.pow((end_y - start_y), 2);
  const distance = Math.sqrt(dX + dY);
  const m = (end_x - start_x)/(end_y - start_y);
  const b = start_y - m * start_x;
  // y = mx + b;



  return distance;
}

console.log(circleCountry(x, y, r, 0,0, 10,10));

module.exports = circleCountry;
