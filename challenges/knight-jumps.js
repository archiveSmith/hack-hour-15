// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  //  |2|3|4|4|4|4|3|2|
  //  |3|4|6|6|6|6|4|3|
  //  |4|6|8|8|8|8|6|4|
  //  |4|6|8|8|8|8|6|4|
  //  |4|6|8|8|8|8|6|4|
  //  |4|6|8|8|8|8|6|4|
  //  |4|6|8|8|8|8|6|4|
  //  |3|4|6|6|6|6|4|3|
  //  |2|3|4|4|4|4|3|2|

  // strategy -> distance from each edge
  // calculate distances from each edge, take the minimum for top/bottom/ left/right and contrstrain at two
  // sum these two distances 
  // if sum === 4 -> return 8
  // if sum === 3 -> return 6
  // if sum === 2 -> return 4
  // if sum === 1 -> return 3
  // if sum === 0 -> return 2

  const x = parseInt(str[1]);
  const y = parseInt(str[1]);

  let distX = x > 4 ? 8 - x : x - 1
  let distY = y > 4 ? 8 - y : y - 1

  if (distX > 2) distX = 2
  if (distY > 2) distY = 2

  const sumDist = distX + distY

  if (sumDist === 4) return 8
  if (sumDist === 3) return 6
  if (sumDist === 2) return 4
  if (sumDist === 1) return 3
  if (sumDist === 0) return 2

}

module.exports = knightjumps;
