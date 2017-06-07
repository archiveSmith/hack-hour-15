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
//the array we'll push the numbers into and return
let arr = [];

//set general array conditions
  for (let i=1; i<num.length; i++){
    //add rules for numbers pushed
    if(i%3 === 0){
      arr.push("fizz");
    } else if(i%5===0){
      arr.push("buzz");
    } else if(i%3===0 && i%5===0){
      arr.push("fizzbuzz");
    }
    arr.push(i)
  }


//output final array
return arr;
}

module.exports = fizzbuzz;

console.log(fizzbuzz(16));
