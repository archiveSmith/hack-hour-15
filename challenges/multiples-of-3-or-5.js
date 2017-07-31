'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 1000)
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for(let i = 0; sum < z; i++){
    if(sum + i >= z){
      break
    } else if(i % x === 0 || i % y === 0){
      sum += i
    }
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};
console.log(sumMultiples3Or5Below1000())
console.log(sumMultiplesXOrYBelowZ(3, 5, 1000))

module.exports = objectToExport;
