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

// Input
  // Nested array

// Output
  // Nested array that has been rotate clockwise, n number of times

function rotateGrid(grid, n) {
  if(!Array.isArray(grid)) return 'Error';
  while (n > 1) {
    let tmp = grid[0][2];
    grid[0][2] = grid[0][1];
    grid[0][1] = grid[0][0];
    grid[0][0] = grid[1][0];
    grid[1][0] = grid[2][0];
    grid[2][0] = grid[2][1];
    grid[2][1] = grid[2][2];
    grid[2][2] = grid[1][2];
    grid[1][2] = tmp;
    n-=1;
  }
  return grid;
}

module.exports = rotateGrid;