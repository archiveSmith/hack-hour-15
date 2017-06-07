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

function fizzbuzz(num) {
//fill array
let newArr = [], res = [];
for (i=1; i<num+1; i++){
    newArr.push(i);
 
}
  

// create check for divisible by three and five
function isDivby3(num){
    return (num%3===0);
}

function isDivby5(num){
    return (num%5===0);
}

function isDivby3And5(num){
    return (num%3===0 && num%5===0);
}

// go through running both checks before splicing word over number
newArr.forEach((num)=>{
    if (isDivby3And5(num)){res.push("fizzbuzz")}
    else if (isDivby3(num)){res.push("fizz")}
    else if (isDivby5(num)){res.push("buzz")} 
  	else {res.push(num)}
});

return res;

}
console.log(fizzbuzz(15));

module.exports = fizzbuzz;
