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

  // given: a1, a2, a3,...,an
  // need to rotate such that corner Y ends at corner X.
  // rotation 1: a3.1 at a1.1, a3.3 at a3.1
  // rotation 2: a3.1 at a1.3 a3.3 at a1.1

  let temp = []

  for (let i = 0; i< grid.length; i++){
    temp = temp.concat(grid[i]);
  }

  let count = 0;
  let k = n;
  while (k > 0){
    let sub = grid[count];
    let subLen = sub.length
    for (let i = 0; i < subLen; i++){
      let mth = 2 *(i - count) - i;
      sub[i] = temp[(temp.length) - n *(i+1) + count];
    }
    k--;
    count++;
  }

  return grid;
}

let test1 = [ [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]  ]


let result1 = [   [7, 4, 1],
                  [8, 5, 2],
                  [9, 6, 3]  ]

console.log(rotateGrid(test1, 3));

module.exports = rotateGrid;
