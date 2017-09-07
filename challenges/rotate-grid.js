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
  for (let i = 0; i < n; i += 1) rotateClockWise(grid);
  return grid;
}

const rotateClockWise = (grid) => {
  if (!grid || !grid.length) return;

  const rowLength = grid[0].length - 1;
  let tempA;
  let tempB;
  let top = true;
  let middle = false;
  let bottom = false;

  for (let i = 0; i < grid.length; i += 1) {
    if (i === 0) top = true;
    if (i > 0 && i < grid.length - 1) middle = true;
    if (i === grid.length - 1) bottom = true;

    if (top) {
      tempA = grid[i][rowLength];
      shiftRight(grid[i]);
      grid[i][0] = grid[i + 1][0];
    } else if (middle) {
      grid[i][0] = grid[i + 1][0];
      tempB = grid[i][rowLength];
      grid[i][rowLength] = tempA;
      tempA = tempB;
    } else if (bottom) {
      shiftLeft(grid[i]);
      grid[i][rowLength] = tempA;
    }

    top = middle = bottom = false;
  }

  return grid;
}

const shiftRight = (row) => {
  for (let i = row.length - 1; i > 0; i -= 1) row[i] = row[i - 1];
}

const shiftLeft = (row) => {
  for (let i = 0; i < row.length - 1; i += 1) row[i] = row[i + 1];
}

module.exports = rotateGrid;
