/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// Input
  // Array of integers
// Output
  // The largest product of three integers from the input array

function highestProduct(array) {

  // Sort the input array
  const sorted = array.sort((a, b) => {
    return a - b;
  }).reverse();
  
//  // if there are no positive numbers
//  if (array[0] <= 0) {
//    // return the three most negative numbers
//    return array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
//  }
  
  console.log(sorted);
  
  // If the product of the second and third highest positive numbers is greater than the product of the first and second highest negative numbers
  if (sorted[1] * sorted[2] > sorted[sorted.length - 1] * sorted[sorted.length - 2]) {
  
    // Return the product of the three highest positive numbers
    return sorted[0] * sorted[1] * sorted[2];
  
  }
  
  // Else return the product of the highest positive number and the two highest negative numbers
  else return sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2]
  
}


// test cases

console.log(highestProduct([1,2,3,4,5])); // 60
console.log(highestProduct([-1,-2,-3,-4,-5])); // -6
console.log(highestProduct([1,2,3,-4,-5])); // 60
console.log(highestProduct([-1,-2,3,4,5])); // 60
console.log(highestProduct([-1,-2,3,4,-5])); // 40

module.exports = highestProduct;
