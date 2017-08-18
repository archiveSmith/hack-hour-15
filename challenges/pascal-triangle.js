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
  const triangle = [];
  function stack(numRows, row = 1) {
    if (row === 1) triangle.push([1]);
    else if (row === 2) triangle.push([1, 1]);
    else {
      let newRow = [];
      for (let i = 0; i < row; i += 1) {
        if (i === 0 || i === row - 1) newRow.push(1);
        else {
          newRow.push(triangle[triangle.length - 1][i -1] + triangle[triangle.length - 1][i ]);
        }
      }
      
      triangle.push(newRow);
    }
    if (row === numRows) return triangle;
    stack(numRows, row += 1);
  }

  stack(numRows);
  return triangle;
}

console.log(pascalTriangle(7))

module.exports = pascalTriangle;
