// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]
//function that returns an array from 1 to num. Write "fizz" if i%3===0, "buzz" if i%5===0, and "fizzbuzz" if i div%3===0 && div%5===0.



function fizzbuzz(num) {
  	let res = [];
  	let word = "";
		let check1 = i => (i%3 === 0);
    let check2 = i => (i%5 === 0);

  for (let i=1; i<=num; i++){

    if (check1(i) && check2(i)){
      word = 'fizzbuzz';
      res.push(word);

    } else if (check1(i)){
      word = 'fizz';
      res.push(word);

    } else if (check2(i)){
      word = 'buzz';
      res.push(word);

    } else {
      res.push(i);
    }
  }
  return res;
};

console.log(fizzbuzz(10));
console.log(fizzbuzz(15));
