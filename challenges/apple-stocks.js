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

// Profit is defined by min and max
// Find the lowest price as we iterate through the array
// Check potential profit vs current profit


function bestProfit(stock_prices_yesterday) {
    let minPrice = Infinity;
    let profit = 0;
    for (let i = 0; i < stock_prices_yesterday.length; i++) {
        let currPrice = stock_prices_yesterday[i];
        if (minPrice > currPrice) minPrice = currPrice;
        if (currPrice - minPrice > profit) profit = currPrice - minPrice;
    }
    return profit;
}

const stockPrices = [100, 300, 250, 50, 75, 500, 750, 200];
bestProfit(stockPrices);

module.exports = bestProfit;
