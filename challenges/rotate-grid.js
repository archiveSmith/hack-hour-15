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
  if (!Array.isArray(grid)) return 'Error';
  let length = grid[0].length - 1;
  while (n > 1) {
    let tmp = grid[0][length];
    for (let i = length; i > 0; i -= 1) {
      grid[0][i] = grid[0][i - 1];
    }
    for (let i = 0; i < length - 1; i++) {
      grid[i][0] = grid[i + 1][0];
    }
    for (let i = 0; i < length - 1; i++) {
      grid[length][i] = grid[length][i + 1];
    }
    for (let i = length; i > 0; i -= 1) {
      grid[i][length] = grid[i - 1][length];
    }
    grid[1][length] = tmp;
  }
  return grid;
}

// let tmp = grid[0][2];
// grid[0][2] = grid[0][1];
// grid[0][1] = grid[0][0];
// grid[0][0] = grid[1][0];
// grid[1][0] = grid[2][0];
// grid[2][0] = grid[2][1];
// grid[2][1] = grid[2][2];
// grid[2][2] = grid[1][2];
// grid[1][2] = tmp;
// n -= 1;

module.exports = rotateGrid;