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
  const pascal = [  ];
  if (numRows >= 1) pascal.push([1]);

  for (let i = 2; i <= numRows; i++) {
    const nextRow = [ ];
    const prevRow = pascal[pascal.length - 1];

    for (let j = 0; j <= i; j++) {
      let upLeft = 0;
      let upRight = 0;
      if (j === 0) {
        upLeft = 1;
        nextRow.push(upLeft + upRight)
      } else if (j === i) {
        upRight = 1;
        nextRow.push(upLeft + upRight);
      } else {
        upLeft = prevRow[ j - 1] || 1;
        upRight = prevRow[j] || 1;
        if (i === 3) {
          console.log(prevRow);
          console.log('upLeft', upLeft);
          console.log('upRight', upRight);
        }

        nextRow.push(upLeft + upRight);
      }

    }
    pascal.push(nextRow);
  }


  return pascal;
}

console.log(pascalTriangle(10));
module.exports = pascalTriangle;
