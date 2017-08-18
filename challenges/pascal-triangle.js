/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

// Input
  // Positive integer
// Output
  // An array of arrays, each representing a row in pascal's triangle with a hieght of the input

function pascalTriangle(numRows) {
  // Create output array
  const output = [[1]];
  // Iterate from 1 to numRows
  for (let i = 1; i < numRows; i += 1) {
    // Create a row array
    const row = [];
    // Iterate from 0 to numRows
    for (let j = 0; j <= i; j += 1) {
      // Push sum of the ith and (1+i)th elements from previous row, if they exist
      const left = output[i-1][j-1] ? output[i-1][j-1] : 0;
      const right = output[i-1][j] ? output[i-1][j] : 0;
      row.push(left + right);
    }
    // Push row into Output
    output.push(row);
  }
  // Return Output
  return output;
}

// console.log(1, pascalTriangle(1), [[1]]);
// console.log(3, pascalTriangle(3), [
//   [1],
//   [1,1],
//   [1,2,1]
// ]);
// console.log(6, pascalTriangle(6), [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1],
//   [1,4,6,4,1],
//   [1,5,10,10,5,1]
// ]);

module.exports = pascalTriangle;
