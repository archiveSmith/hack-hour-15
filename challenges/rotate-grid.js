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
  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    //[grid[i, i], grid[i, i + n-1-i], grid[n-1-i, n-1-i], grid[i + n-1-i, i]] = [grid[i + n-1-i, i], grid[i, i], grid[i, i + n-1-i],  grid[i + n-1-i, i + n-1-i]];
    for (let j = i; j < n - 1 - i; j += 1)  {
      [grid[i][j]    , grid[j][n-1-i], grid[n-1-i][n-1-j], grid[n-1-j][i]] =
      [grid[n-1-j][i], grid[i][j]    , grid[j][n-1-i]    , grid[n-1-i][n-1-j]]
      // let tmp = grid[i, j];
      // grid[i][j] = grid[j][n-1-i];
      // grid[i][n-1-i] = grid[n-1-j][n-1-j]
      // grid[i][n-1-j] = tmp;
    }
  }
  return grid;
}

// sampleGrid = [[1,2],[3,4]]
// sampleGrid1 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
// sampleGrid2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
// sampleGrid3 = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
// console.log(rotateGrid(sampleGrid3, 5));
module.exports = rotateGrid;
