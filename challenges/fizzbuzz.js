// Write a function that returns an array containing the numbers 1 to NUM.
//(range is 1-NUM) 
//Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" 
//fizz = NUM%3 = 0 && buzz = NUM%5 = 0 && fizzbuzz when its both divisible
//in place of numbers divisble by both 3 and 5
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
    let result = [];
    for (let i = 1; i<parseInt(num, 10)+1; i++) {
    //   console.log(num%3 === 0)
    //   console.log(num%5 === 0)
    //   console.log(parseInt(num, 10)%3 === 0)
    //   console.log(parseInt(num, 10)%5 === 0)
     if(parseInt(i, 10)%15 === 0) {
            result.push("fizzbuzz");
            // result[i-1] = "fizzbuzz";
        }
        else if(parseInt(i, 10)%5 === 0) {
            result.push("buzz");
            // result[i-1] = "buzz"
        }
            else if(parseInt(i, 10)%3 === 0) {
                result.push("fizz");
                // result[i-1] = "fizz"
        }
            else {
            result.push(i);
            }
    }
 return result;
}
            

module.exports = fizzbuzz;
