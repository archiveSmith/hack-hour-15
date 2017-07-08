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
  // 2d, NxN array
  // Number of times to rotate 90 degrees clockwise
// Ouptut
  // The input array rotated n * 90 degrees clockwise

function rotateGrid(grid, n) {
  // Rotate the grid n times
  for (let i = 0; i < n; i += 1) {
    
    // Rotate the grid
    
    // Create a new outer array
    grid = grid[0].map((x, i) => {
      
      // Where each element is an array
      return grid.reduce((col, row) => {
        col.unshift(row[i]);
        return col;
      }, []);
    });
  }
  
  return grid;
}

// Test cases
//console.log(rotateGrid([[1, 2], [3, 4]], 2)); 
//console.log(rotateGrid([[1, 2, 3],[4, 5, 6],[7, 8, 9]], 3)); 
//console.log(rotateGrid([[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12], [13, 14, 15, 16]], 1)); 

module.exports = rotateGrid;
