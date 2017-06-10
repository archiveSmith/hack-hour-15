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

function modemean(array) {
    let modes = findMaxMode(array)
    let mean = findMean(array) 

    return modes.indexOf(Math.floor(mean)) !== -1
}

function findMaxMode(array){
    let categorized = array.reduce((acc, e) => {
        if (!acc[e]){acc[e] = 1;}
        else { acc[e] += 1;}
        return acc;
    }, {})
    let sortedKeysByCount = Object.keys(categorized).sort((a, b) =>{ return categorized[a] < categorized[b]; })
    let mode = sortedKeysByCount.reduce((acc, key, i, keys) => {
        if (i === 0 || (categorized[keys[0]] === categorized[key])){
            acc.push(parseInt(key));
        }
        return acc;
    }, [])
    return mode;
}

function findMean(array){
    if (array.length === 0) return 0;
    let sum = array.reduce((sum, e) =>{
        return sum + e;
    }, 0)
    return sum / array.length
}

// console.log(modemean([1, 1, 2, 2, 2, 3, 3]))
// console.log(modemean([1, 1, 1, 2, 2, 3, 3, 3]))
// console.log(modemean([1, 1, 2, 2, 2, 3, 3]))
module.exports = modemean;
