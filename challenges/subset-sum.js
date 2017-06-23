/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    let newVal = 0;
    let holdVal = 0;
    let newArr = [];
    newArr = array.filter(el=>{return (el<target)? true: false})
    console.log(newArr);
    for (let i=0; i<newArr.length; i++){
        for (let ii=1; ii<newArr.length; ii++){
            if (newArr[i]+newArr[ii]===target){
                return true;
            } else {
                newVal = newArr[i]+newArr[ii];
                if (newVal<target){
                    holdVal = newArr[ii];
                    newArr.splice[i];
                    newArr.splice[newArr.indexOf(holdVal)];
                    subsetSum(newArr, target)
                } 
            } 
        }  if (newVal>target){
                    newArr.splice[i];
                    subsetSum(newArr, target);
                }
    }
    return false;

} 

module.exports = subsetSum;
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));