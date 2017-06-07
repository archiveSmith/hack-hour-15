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
    var output = [];
    for (var i = 1; i <= num; i++){
        var str = '';
        if (i % 3 === 0) str += 'fizz';
        if (i % 5 === 0) str += 'buzz';
        if (str.length > 0) {
            output.push(str);
        } else {
            output.push(i)
        }
    }
    return output;
}

module.exports = fizzbuzz;
