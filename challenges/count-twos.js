// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let newArr = [];
  let counter = 0;
  for (let i=1; i<num+1; i++){
      newArr.push(i.toString());
  }
    let strArr = newArr.join('');

    for (let i=0; i<strArr.length; i++){
      if (strArr[i]==='2') counter++;
      //console.log(strArr[i]);
  }
    //console.log(strArr);
    return counter;
}
console.log(countTwos(1000))
module.exports = countTwos;