/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length<3) return 0;
    array.sort((a, b)=> {return a - b});

    if (array[array.length-1] >0 && array[array.length-2] >0 && array[array.length-3]){
        return array[array.length-1]*array[array.length-2]*array[array.length-3]
    }


    if (array[array.length-1] >0 && array[array.length-2] >0 && array[array.length-3]){
        return array[array.length-1]*array[array.length-2]*array[array.length-3]
    }
}


module.exports = highestProduct;
console.log(highestProduct([21,9,1,1,2,3,4,5]))