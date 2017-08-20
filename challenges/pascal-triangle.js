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
  // Base Case: no rows
  if (numRows === 0) return []; 

  const triangle = [[1]]; 
  // Outer Loop: loop through each Row
  for( let i = 0; i < numRows - 1; i += 1 ) {
    const subArr = [1]; 

    const prevRow = triangle[triangle.length - 1]; 
    // [[1] [1]]
    for (let j = 0; j < prevRow.length - 1; j += 1) {
      subArr.push(prevRow[j + 1] + prevRow[j]); 
    }
    subArr.push(1); 
    triangle.push(subArr); 
  }
  return triangle; 
} 


// // Possibly not the right implementation, refactor this(below) above this line: 
// function pascalTriangle(numRows) {
//   let triangle = []; 
//   // nested for loop to solve this challenge 
//   // OUTER: from 0 to numRows 
//   for (let i = 0 ; i < numRows ; i += 1) { 
//     let subArr = []; 
//     // INNER: loop through 
//     for (let j = 0; j < i + 1; j += 1 ) {
//       if (j === 0 || j === i) subArr[j].push(1); 
//       // Ignore: subArr.push( resultArr[i-1][j] + resultArr[i-1][j+1]);
//     }
//     triangle.push(subArr); 
//   }
//   return triangle; 
// }

module.exports = pascalTriangle;
