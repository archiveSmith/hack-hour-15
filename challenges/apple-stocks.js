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

//min has to be before max

function bestProfit(stock_prices_yesterday) {
	if(!Array.isArray(stock_prices_yesterday)) return 0;
	let profit = 0;
	let minPrice = Infinity;
	let maxPrice = -Infinity;
	for(let i = 0; i < stock_prices_yesterday.length; i++) {
	  if(stock_prices_yesterday[i] === 0) {
	    stock_prices_yesterday[i] = undefined;
	    }
		if(stock_prices_yesterday[i] < minPrice) {
			minPrice = stock_prices_yesterday[i];
			console.log(stock_prices_yesterday);
		} if(stock_prices_yesterday[i] > maxPrice) {
			maxPrice = stock_prices_yesterday[i];
		}
	}
	profit = maxPrice - minPrice;
	return (profit > 0) ? profit : 0;
}

console.log(bestProfit([0,50,0,0,10,30,10,500,30]));
console.log(bestProfit([0,0,0]));

module.exports = bestProfit;
