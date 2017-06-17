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
	let sum = 0,
	    mode;
	//[time, value]
	
	//find uniqNumber in array and add index value to each value and set it to 0
	let uniqNum = array.filter(function(ele, index){
		return array.indexOf(ele) === index;
	}).sort((a,b)=>a-b).map((ele)=>{
	  return [ele,0];
	})
	//find sum and increment index value of each number for each time it appears in the array
	array.forEach((ele)=>{
	  sum = sum + ele
	  uniqNum.forEach((uniq)=>{
	    if(ele === uniq[0]){
	      uniq[1]++;
	    }
	  })
	});
	//if number all the same return TRUE!
	if (uniqNum.length === 1){
		return true;
	}
	//reduce to highest number which occurs most number of times and store it in mode
	mode = uniqNum.reduce((acc,curr)=>{
	  if(curr[1]>=acc[1]){
	    return curr;
	  }
	  return acc;
	})[0]
	return mode === Math.floor(sum / (array.length -1));
}

module.exports = modemean;
