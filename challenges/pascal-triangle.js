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
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1,1]]; 
  let result = [[1], [1,1]]; 
  for (let i = 2; i <= numRows; i++) {
    let current = [1];
    for (let y = 1; y <= Math.floor(i / 2); y++) {
      current.push(result[i-1][y-1] + result[i-1][y]);
    }
    let secondhalf; 
    if (i % 2 === 0) secondhalf = current.slice().reverse(); 
    else secondhalf = current.slice(0, -1).reverse(); 
    let final = current.concat(secondhalf);
    result.push(final); 
  }
  return result; 
}

module.exports = pascalTriangle;
