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
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */



function newIntersections(x, y){
  let lines = [];
  for(let l1 = 0;l1 < x.length;l1++){
    for(l2 = 0;l2<x.length;l2++){
      if(makeLine(x[l1],x[l2],y[l1],y[l2])){
        lines.push(makeLine(x[l1],x[l2],y[l1],y[l2]))
      }
    }
  }
  let points = []
  for(let c = 0;c<lines.length;c++){
    for(let z =0;z<lines.length;z++){
      points.push(intersection(lines[c],lines[z]))
    }
  }
  return points
}
function makeLine(x1,x2,y1,y2){
  let gradient = (y2-y1)/(x2-x1)
  let intersection = y1-gradient*x1
  if(isNaN(gradient) || isNaN(intersection)){
   return false 
  }
  return [gradient,intersection] 
}

function intersection(l1,l2){
  let pointx = (l2[1] - l1[0])/l1[0]-l2[0]
  let pointy = l1[0]*pointx + l1[1]
  if(isNaN(pointx) || isNaN(pointy)){
   return false 
  }
  return [pointx,pointy]  
}

let arr = [1,2,3,7,5]
let zrr = [1,2,3,4,5]

console.log(newIntersections(arr,zrr))

module.exports = newIntersections;
