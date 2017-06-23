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
  if (array.length === 0) return false
  if (array.length === 1) return array[0] === target
  if (arraySum(array) === target) return true

  for (let i = 0; i < array.length; i++){
    let arrayCopy = array.slice()
    arrayCopy.splice(i, 1)
    if (subsetSum(arrayCopy, target)) return true
  }
  return false
}
function arraySum(array){
  if (array.length === 0) return 0
  return array.reduce((sum, e)=>{
    sum += e
    return sum
  }, 0)
}

console.log(subsetSum([3, 2], 5))// - > true, 3 + 2 = 5
console.log(subsetSum([3, 1, 2], 5))// - > true, 3 + 2 = 5
console.log(subsetSum([3, 7, 4, 2], 5))// - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32) )//-> true, 3 + 12 + 5 + 12 = 32
console.log( subsetSum([8, 2, 4, 12], 13) )//-> false
// console.log( subsetSum([8, -2, 1, -3], 6) )//-> true, 8 + 1 + (-3) = 6
module.exports = subsetSum;
