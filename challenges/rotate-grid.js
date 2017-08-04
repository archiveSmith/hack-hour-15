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
 //3 arrs at all times
 //[1][1] never moves
 //probably write 3 functions the deal with each array

function rotateGrid(grid, n) {
  //create empty output array
  let outputArr = [];
  //create a subarray n times
  for(r=0;r<n;r++){
    outputArr.push([])
    //iterate through each element of the input subarrays and push to outputArr locations
    for(let c = 0; c < n; c++){
      //push each element into a new output subarray location
      outputArr[r].push(grid[n-1-c][r])
    }
    //define Mapped Elements function
  }
  console.log(outputArr);
    //input column = output row

}

let grid = [[1, 2, 3, 8],
            [4, 5, 6, 6],
            [7, 8, 9, 3],
            [2, 3, 8, 5]]
rotateGrid(grid, 4)




      // grid[n-1-c][r]     //run Mapped Elements function on each element





  //output new array

// module.exports = rotateGrid;
