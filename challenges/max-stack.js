/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // define length variable to be 0 
  let length = 0
  // create empty object "values" to store values
  const values = {}
  // create empty object "max history" to store history of max value 
  const maxHist = {}
  // define push method
  this.push = function(val){
    // add 1 to length
    length += 1
    // assign argument to values 
    values[length] = val
    let max
    if (length === 1){
      max = val
    } else {
      max = maxHist[length - 1] > val ? maxHist[length - 1] : val
    }
    maxHist[length] = max
    // return length
    return length
  }
  // define pop method
  this.pop = function(){
    if (length === 0) return undefined
    let val = values[length]
    // delete values[length]
    // delete maxHist[length]
    // minus 1 to length
    length -= 1

    // return value 
    return val
  }
  // define getMax method
  this.getMax = function(){
    return length === 0 ? undefined : maxHist[length]
  }
}
// let stack = new Stack()
// console.log(stack.pop()) // undefined
// console.log(stack.push(2)) // 1
// console.log(stack.push(5)) // 2
// console.log(stack.push(2)) // 3
// console.log(stack.push(6)) // 4
// console.log('pushing done')
// console.log(stack.getMax()) // 6
// console.log(stack.pop()) // 6
// console.log(stack.getMax()) // 5
// console.log(stack.pop()) // 2
// console.log(stack.getMax()) // 5
// console.log(stack.pop()) // 5
// console.log(stack.getMax()) // 2
// console.log(stack.pop()) // 2
// console.log(stack.getMax()) // undefined
// console.log(stack.pop()) // undefined

module.exports = Stack;