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

// Edge cases
  // If the input is not an array, return 0

// Algorithm
  // subzero index will automatically be "lowest" point
  // define max profit variable to be 0 at first
  // 

function bestProfit(stock_prices_yesterday) {
  if(!Array.isArray(stock_prices_yesterday)) return 0;

  let min = stock_prices_yesterday[0];
  let max = 0;

  for (let i = 1; i < stock_prices_yesterday.length; i++) {
    let min = Math.min(min, stock_prices_yesterday[i]);

    let max = Math.max(max, stock_prices_yesterday[i] - min);
  }

  return max;

}

module.exports = bestProfit;
