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
  // a for loop might be simplest approach
  // trick would be indexing
  const pt = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) pt.push([1]);
    else if (i === 1) pt.push([1,1]);
    else pt.push(buildFromPrev(pt[i-1]));
  }

  function buildFromPrev(prev) {
    const row = [1];

    for (let i = 0; i < prev.length - 1; i++) {
      row.push(prev[i] + prev[i+1])
    }
    row.push(1);

    return row
  }

  return pt
}

module.exports = pascalTriangle;
