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

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return undefined;
  if (stock_prices_yesterday.length < 1) return undefined;
  
  let iMax = stock_prices_yesterday
    .reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  let iMin = stock_prices_yesterday
    .reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
  
  let profit = stock_prices_yesterday[iMax] - stock_prices_yesterday[iMin];
  
  if (profit > 0) return profit;
  else return 0;
}

module.exports = bestProfit;
