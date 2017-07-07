/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

var arr = [1,25,6,6,6,7,8,2,]
function modemean(array) {
    array.sort((a,b)=>{return a-b});
    let mean = Math.floor(array.reduce((a,b)=>{return (a+b)})/array.length);
    

    let distArrs = [];
    let modeObj = {};

    for (let i =0; i<array.length; i++){
        let curr = array[i];
        if (array[i] in modeObj){
        modeObj[curr]++;
        } else {
            modeObj[curr] = 1;
        }
        array[i].shift;
    }
console.log(mean); 
console.log(array); 
console.log(modeObj)
var mode = array[0];
for (prop in modeObj){
    if (modeObj[prop]>mode){
        mode = prop;
    }
}

 console.log(mode)

    

    if (mode === mean){
        return true;
    } else {
        return false;
    }
}
console.log(modemean(arr));

module.exports = modemean;
