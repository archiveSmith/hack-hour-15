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
	//split the string
	let strknight = str.slice(1,-1).split('');
	let x_coord = Number(strknight[0]);
	console.log('this is x_coord', x_coord);
	let y_coord = Number(strknight[2]);
	console.log('this is y_coord', y_coord);
	
  let count = 0;
  
  //outside the grid 
  if(x_coord > 8 || x_coord <= 0 || y_coord <= 0 || y_coord > 8) return 0;
  
  //all the possible moves 
    if(y_coord + 2 <= 8 && x_coord - 1 > 0) count++;
	if(y_coord + 2 <= 8 && x_coord + 1 <= 8) count++;
	if(y_coord + 1 <= 8 && x_coord - 2 > 0) count++;
	if(y_coord + 1 <= 8 && x_coord + 2 <= 8) count++;
	if(y_coord - 2 > 0 && x_coord - 1 > 0) count++;
	if(y_coord - 2 > 0 && x_coord + 1 <= 8) count++;
	if(y_coord - 1 > 0 && x_coord - 2 > 0) count++;
	if(y_coord - 1 > 0 && x_coord + 2 <= 8) count++;
	
	return count;
}

let val = "(4 5)";
console.log(knightjumps(val));

module.exports = knightjumps;
