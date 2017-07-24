// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  //edge casing;
  if (typeof num !== "number") return undefined;
  if (num === 2) return 1;
  if (num < 2) return 0;

  let twos = 1;
  const two = '2';
  // if number is bigger than two, we know it has one two. so start above two.
  
  for (let i = 3; i <= num; i+= 1){
    let last = 0;
    // stringify and look for twos.
    const num = String(i).split('');
    let search = num.indexOf(two, last);
    while (search !== -1){
        twos += 1;
        last = search;
        search = (num.indexOf(two, last + 1));
    }
  }
  return twos;
}

module.exports = countTwos;
