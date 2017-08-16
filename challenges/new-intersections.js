/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *     
 *        
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
    //x is an array of old points => [1,2,2,3] 
    //y is an array of old points => [2,1,3,2]
                                //=> [1,2],[2,1],[2,3],[3,2]
                                //   1  2  3   
                                // 1 X  *  X
                                // 2 *  X  *
                                // 3 X  *  X
    // OLD x above NEW x => New x = [x[i], y[i-1]]    
    // NEW x above OLD x => New x = [x[i], y[i+1]]                                                    
    let container = []
    let i;
    let j;
    for (i=0; i<x.length; i++){
        
        for (j=i+1; j<x.length-1; i++){
           
        }
    }
    
}

module.exports = newIntersections;
