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
  let rotated = rotate(grid);
  if (n > 1) {
    for (times = 0; times < n-1; times += 1) {
      rotated = rotate(rotated);
    }
  }

  return rotated;

  function rotate(grid) {
    const newGrid = [];

    for(let i = 0; i < grid.length; i += 1) {
      newGrid.push([])
      for (let j = 0; j < grid.length; j += 1) {
        newGrid[i].push(grid[j][grid.length-i-1]);
      }
    };

    return newGrid;
  }
}

module.exports = rotateGrid;
