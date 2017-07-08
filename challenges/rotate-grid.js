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

 // Determine length of array and subArray
 // Logic for flipping: 
 // first array becomes last index
 // second array becomes second index

function rotateGrid(grid, n) {
	if (n === 0) return [];
	let result = [...Array(n).keys()].map(i => Array(n));
	for (let x = 0; x < n; x++) {
		let subArray = grid[x];
		for (let y = 0; y < n; y++) {
			result[y][n - 1 - x] = subArray[y];
		}
	}
	return result; 
}

module.exports = rotateGrid;
