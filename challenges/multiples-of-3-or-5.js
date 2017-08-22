'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.
function sumMultiples3Or5Below1000() {
  const lcm = 15;
  let sum = 0;
  for (let i = lcm; i <= 1000; i += lcm) sum += i;
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const lcm = getLcm(x, y);
  let sum = 0;
  for (let i = lcm; i <= z; i += lcm) sum += i;
  return sum;
}

const getLcm = (x, y) => {
  const big = Math.max(x, y);
  const small = Math.min(x, y);
  let currentMultiple = big;
  while (currentMultiple % small !== 0) currentMultiple += big;
  return currentMultiple;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
