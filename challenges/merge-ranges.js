/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    //Need to merge array elements where
    //Both or more elements contain the some common number
    //The new merged array min will be the least of the merged array
    //Same concept for the max too

    //Concat array to be marged here
    //Loop through array of array
    return array.reduce((acc, ele) => {
        if (!acc.length) {
            acc.push(ele);
        } else {
            console.log(ele)
            console.log(acc)
            acc.forEach((elem) => {
                if (ele[0] > elem[0]) {
                    acc.push(ele);
                } else {
                    if (ele[0] >= elem[0] && ele[1] <= elem[1]) {} else {
                        if (ele[0] < elem[0]) {
                            elem[0] = ele[0]
                        }
                        if (ele[1] > acc[1]) {
                            elem[1] = ele[1]
                        }
                    }
                }
            });
        }
        return acc;

    }, []);
}

var times = [
    [0, 1],
    [3, 5],
    [4, 8],
    [10, 12],
    [9, 10]
]

console.log(mergeRanges(times));

module.exports = mergeRanges;