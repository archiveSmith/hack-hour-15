// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    let count = 0;
    for(let x = 1;x<=num;x++){
        let str = x.toString().split("")
        str.forEach((ele)=>{
            if(ele === '2'){
                count++;
            }
        });
    }
    return count;
}
console.log(countTwos(11420));
module.exports = countTwos;