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

function pascalTriangle(numRows) {
  if (typeof numRows !== 'number') return 'invalid input';
  if (numRows === 0) return [];
  const pascal = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      let first = j - 1 < 0 ? 0 : pascal[i - 1][j-1];
      let second = pascal[i - 1].length <= j ? 0 : pascal[i - 1][j];
      row.push(first + second);
    }
    pascal.push(row);
  }

  return pascal;
}

module.exports = pascalTriangle;
