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

 // Approach
 // 1. Find the starting point's lowest level (i.e. most child?) district
 // 2. Repeat until finding the lowest level district that also contains the end_x
 // 3. Find the end point's lowest level district
 // 4. Repeat until finding the shared district from 2.
 // 5. Return the number of unique districts found

const circleCountry =  (x, y, r, start_x, start_y, end_x, end_y) =>
  // Iterate through the districts
  x.reduce((count, cur, i) =>
    // If the district contains the start or the end, but not the other, increment the counter
    count = (containsPoint(x[i], y[i], r[i], start_x, start_y) ^ containsPoint(x[i], y[i], r[i], end_x, end_y)) ?
      count + 1 :
      count
    , 0);

// Takes in position and radius of a circle and position of a point
// Returns true if the circle contains the point, else false
const containsPoint = (x, y, r, p_x, p_y) =>
  Math.sqrt(Math.pow((p_x - x),2) + Math.pow((p_y - y),2)) < r;

// Test
// console.log(containsPoint(4, 4, 10, 5, 5), true);
// console.log(containsPoint(4, 4, 1, 5, 5), false);
// { '0': [ -1, 0, 0, 4 ], '1': [ 0, 0, 0, 4 ], '2': [ 1, 3, 6, 0.1 ], '3': 1, '4': 0, '5': 4, '6': 4 }
console.log(circleCountry([ -1, 0, 0, 4 ], [ 0, 0, 0, 4 ], [ 1, 3, 6, 0.1 ], 1, 0, 4, 4));


module.exports = circleCountry;
