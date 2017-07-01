/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(arr) {
	// Have var for highest profit found, start it at 0
	// Loop through the array
	// For each item, loop through the rest of the array
	// Store current profit, and highest profit as two variables, update accordingly
	// Update highest profit var as highest profit is updated
	let obj = {};
	let highest = 0;
	let current; 

	for (let i = 0; i < arr.length - 1; i++) {
		obj.highest = 0; 
		for (let y = i + 1; y < arr.length; y++) {
			current = arr[y] - arr[i];
			if (current > obj.highest) obj.highest = current; 
		}
		if (obj.highest > highest) highest = obj.highest; 
	}
	return highest; 
}

module.exports = bestProfit;
