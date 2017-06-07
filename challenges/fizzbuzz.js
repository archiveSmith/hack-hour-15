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
    var arr = []
    for (let x = 0; x <= num; x++) {
        var str = ""
        if (x % 3 === 0) {
            str += "fizz"
        }
        if (x % 5 === 0) {
            str += "buzz"
        }
        arr.push(str || x)
    }
    return arr;
}
console.log(fizzbuzz(16))
module.exports = fizzbuzz;