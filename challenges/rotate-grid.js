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

// Given an NxN grid of elements, rotate the grid by 90 degrees clockwise

// Input 
/*
                                        [   [1, 2, 3],
                                            [4, 5, 6],
                                            [7, 8, 9]  ]
*/


    // Nested For Loop
        // Iterate through the nested array, with n subarrays
            // Create a conditional to create the nested array feature
            // Take the last element of the current subarray, and push it to new array
            // Continue until the subarray is empty
        // Repeat until we do this for all the subarrays

function rotateGrid(grid, n) {
    return grid.map((subarray) => {
        // let newArray = [];
        return subarray.map((element, index) => {
            return element;
        });
        // output.push(newArray);
    });
}

module.exports = rotateGrid;
