/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  // return undefined for undefined grid or n = 0
  // initialize n-size array with n-size array as element
  // iterate through each row and each item in the row 
  // to the following rotational tranformation
  // more pseudocode to come if i lose to temptation to googling
  
  // lost to temptation
  // |cos theta, -sin theta| |x| + x0
  // |sin theta, cos theta| |y| + y0
  // theta = 90deg

  // | 0  1 | |x|  + 0
  // | -1 0 | |y|  + 3
  // example n = 4
  // 0,0 => 0,3 
    // 
  // 0,1 => 1,3
  // 0,3 => 3,3 
  // 1,3 => 3,2
  
  // multiply 


}

module.exports = rotateGrid;
