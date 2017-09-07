// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

const countTwos = (num) => {
  let twoCount = 0;

  for (let i = 1; i <= num; i += 1) {
    let numToShave = i;

    while (numToShave > 0) {
      const lastDigit = numToShave % 10;
      if (lastDigit === 2) twoCount += 1;
      numToShave = shaveDigit(numToShave);
    }
  }

  return twoCount;
};

const shaveDigit = n => Math.floor(n / 10);

module.exports = countTwos;