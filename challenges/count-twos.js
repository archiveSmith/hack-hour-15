// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let count = 0;
  //iterate through 1 to the number
  for(let i = 0; i <= num; i++){
    // console.log(i)
    let str = i.toString();

    //iterate through each digit in i
    for(let dos = 0; dos < str.length; dos++){
      let parseNum = str.charAt(dos);
      // console.log(parseNum);
        if(parseNum === "2"){
          count++;
      }
    }
  }
  return count;
}
console.log(countTwos(22));

module.exports = countTwos;
