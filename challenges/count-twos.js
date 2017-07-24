// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// Given a number,
    // Count the number of 2's encountered
    // Iterate from 1 -> n
        // Could do this recursively
            // Base case => num + 1, return the count
            // Use an outer variable while going through this recursively
        // Search each number for 2's


function countTwos(num) {
    let countOfTwo = 0;
    // base case
    // if number === num + 1, return countOfTwo
    function searchTwos(number) {
        if (number === num + 1) return countOfTwo;
    // split number into array
    // filter array [number === 2]
    // add length to countOfTwo
    // call searchTwos with number + 1
        else {
            let numArr = number.toString().split('');
            numArr = numArr.filter((digit) => digit === '2')
            countOfTwo += numArr.length;
            return searchTwos(number + 1);
        }
    }
    return searchTwos(0);
}

// console.log(countTwos(5)) // 1
// console.log(countTwos(12)) // 2
// console.log(countTwos(20)) // 3

module.exports = countTwos;