// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    if(typeof num !== 'number') return 'Invalid argument';
    let counter = 0;
    let i;
    let j;
    let temp;
    for (i=0; i<num; i++) {
        if(i.toString().includes('2')) {
          temp = i.toString().split('')
          for(j=0; j<i.length; j++) {
            if(temp[j] === '2') counter++
          }
        }
    }
    return counter;
}



module.exports = countTwos;