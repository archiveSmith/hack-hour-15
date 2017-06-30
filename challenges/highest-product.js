/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array === undefined) return undefined
  if (array.length === 0) return 0
  const n = 3
  const sorted = array.slice().map(num=>{return Math.abs(num)}).sort()
  const lastNums = sorted.slice(-n)

  //check if all 0
  if (lastNums.reduce((sum, n)=>{ return sum + n }) === 0) return 0
  const highProd = lastNums.reduce((prod, n)=>{
    return n === 0 ? prod : prod * n
  }, 1)
  return highProd
}
const test = [0, 1]
const test2 = [-3, 1, 2, 3]
console.log(highestProduct(test))
console.log(test)
console.log(highestProduct(test2))
console.log(test2)
// console.log(highestProduct([0, 1])) // 1
// console.log(highestProduct([0, 1, 2])) // 2
// console.log(highestProduct([0, 1, 2, 3])) // 6
// console.log(highestProduct([3, 1, 2, 3])) // 18
// console.log(highestProduct([-3, 1, 2, 3])) // 18
module.exports = highestProduct;
