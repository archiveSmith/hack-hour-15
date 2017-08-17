// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// input
  // A string, representing the coordinates of a knight on an 8x8 chess board in the format '(x y)'
// output
  // An integer, representing the number of moves the knight can take if there are no other pieces on the board

function knightjumps(str) {
  // Parse the input string into X and Y
  const x = parseInt(str[1]);
  const y  = parseInt(str[3]);
  // Find the minimum X and Y distances from a board edge
  const x_min = Math.min(x-1, 8-x);
  const y_min = Math.min(y-1, 8-y);
  // Hmmm
  const sum = x_min + y_min;
  if (sum >= 4) return 8;
  if (sum == 3) return 6;
  if (sum == 2) return 4;
  if (sum == 1) return 3;
  if (sum == 0) return 2;
}

// console.log(knightjumps('(4 5)'), 8);
// console.log(knightjumps('(1 5)'), 4);
// console.log(knightjumps('(1 8)'), 2);

module.exports = knightjumps;
