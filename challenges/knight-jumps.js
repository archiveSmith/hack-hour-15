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
    coordArr = str.split(" ");
    coordArrNums = coordArr.map((num)=>{return Number(num)});
    let moves = 0;
    //uplt
    (coordArrNums[0]+2)<=8 ? ((coordArrNums[1]-1) >=1 ? moves+=1 : null) : null;
    //uprt
    (coordArrNums[0]+2)<=8 ? ((coordArrNums[1]+1) <=8 ? moves+=1 : null) : null;
    //dnlt
    (coordArrNums[0]-2)>=1 ? ((coordArrNums[1]-1) >=1 ? moves+=1 : null) : null;
    //dnrt
    (coordArrNums[0]-2)>=1 ? ((coordArrNums[1]+1) <=8 ? moves+=1 : null) : null;
    //ltup
    (coordArrNums[1]-2)>=1 ? ((coordArrNums[1]+1) <=8 ? moves+=1 : null) : null;
    //rtup
    (coordArrNums[1]+2)<=8 ? ((coordArrNums[1]+1) <=8 ? moves+=1 : null) : null;
    //ltdwn
    (coordArrNums[1]-2)>=1 ? ((coordArrNums[1]-1) >=1 ? moves+=1 : null) : null;
    //rtdw
    (coordArrNums[1]-2)>=1 ? ((coordArrNums[1]+1) <=8 ? moves+=1 : null) : null;
    return moves;
}

module.exports = knightjumps;
console.log(knightjumps("4 8"))
