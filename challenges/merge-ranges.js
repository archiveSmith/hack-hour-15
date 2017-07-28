/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let i;
    let tempNum;
    let tempArray = [];
    const mergedTimes = [];
    const newArray = 
        array.reduce(function(a, b) {
          return a.concat(b);
        }, [])
    const sortedArray = 
        newArray.sort(function(c, d) {
           return c - d;
        });
    console.log('newArray: ', newArray);
    for(i=0; i<newArray.length; i++) {
          tempNum = newArray[i]
          console.log('tempNum: ', tempNum)
          if(tempNum <= newArray[i] && !tempArray.includes(newArray[i])){
            if(newArray[i] >= sortedArray[i]){
              tempArray.push(tempNum)
              console.log('tempArray: ', tempArray)
            } else {
              tempNum = sortedArray[i]
              }
            if(tempArray.length === 2) {
              mergedTimes.push(tempArray)
              console.log('mergedTimes: ', mergedTimes)
              tempArray = [];
            }
          } 
        }      

        
    return mergedTimes

}


module.exports = mergeRanges;
