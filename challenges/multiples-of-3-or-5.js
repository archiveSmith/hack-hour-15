'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.


// 3 * ( 333 * (333 + 1) / 2 )

function sumMultiples3Or5Below1000() {
  const threeSum = 3 * ( 333 * (333 + 1) / 2 );

  const fiveSum = 5 * ( 200 * (200 + 1) / 2 );

  const fifteenSum = 15 * (Math.floor(1000 / 15) * (Math.floor(1000/15) + 1) / 2);

  return threeSum + fiveSum - fifteenSum;
}

// function sumMultiples3Or5Below1000() {
//   let sum = 0;

//   for (let i = 0; i < 1000; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const xSum = x * (Math.floor(z / x) * (Math.floor( z / x ) + 1) / 2);

  const xSum = x * (Math.floor(z / x) * (Math.floor( z / x ) + 1) / 2);

  return sum;
}

function gcd(a,b) {
  let c = a % b;
  while ( c> 0) {
    a = b;
    b = c;
    c = a % b;
  }
  return b;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
