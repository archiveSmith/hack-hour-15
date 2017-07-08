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
    grid = grid[0].map((col, i) => {
      
      // Where each element is an array
      return grid.map((row) => {
        
        // Containing the values of a row from bottom to top
        return row[row.length - i - 1];
      });
    });
  }
  
  return grid;
}

// Test cases
//console.log(rotateGrid([[1, 2, 3],[4, 5, 6],[7, 8, 9]], 3)); 

module.exports = rotateGrid;
