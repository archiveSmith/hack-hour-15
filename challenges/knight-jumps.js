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
    let split = str.split(' ');
    let x = split[0]
    let y = split[1]
    let xSpace = 8 - split[0];
    let ySpace = 8 - split[1];
    let counter = 0;

        if(xSpace >= 3 && ySpace >= 1) {
            if(x + 3 <= 8 && y + 1 <= 8) counter ++
            if(x + 3 <= 8 && y - 1 >= 1) counter ++
            if(x - 3 >= 1 && y + 1 <= 8) counter ++
            if(x - 3 >= 1 && y - 1 >= 1) counter ++
        }

        if(ySpace >= 3 && xSpace >= 1) {
            if(y + 3 <= 8 && x + 1 <= 8) counter ++
            if(y + 3 <= 8 && x - 1 >= 1) counter ++
            if(y - 3 >= 1 && x + 1 <= 8) counter ++
            if(y - 3 >= 1 && x - 1 >= 1) counter ++
        }
    
    return counter

}

module.exports = knightjumps;
