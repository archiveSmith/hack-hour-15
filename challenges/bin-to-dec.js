/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(bi) {
let acc = 0;
let counter=0;
for (let i=bi.length-1; i>=0; i--){
 

if (bi[i]==="0"){
    acc+=0;
    counter++;
} else if (bi[i]==="1"){

    acc+=Math.pow(2, counter);
    console.log(acc);
    counter++;
}

}
return acc;

}

module.exports = binToDec;

console.log(binToDec("1111"));
