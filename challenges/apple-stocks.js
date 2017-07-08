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
  // Valid input check
  if (!stock_prices_yesterday.length) return 0;
  
  let min = Infinity;
  let mini;
  
  // Iterate through array
  for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
  
    // Find purchase
  
      // Find number where there are no smaller numbers before
    if (stock_prices_yesterday[i] < min) {
      mini = i;
      min = stock_prices_yesterday[i];
    }
  
  }
  
  // If purchase is end of array, return 0
  if (mini === stock_prices_yesterday.length - 1) return 0;
  
  let max = -Infinity;
  let maxi;
  
  // Find sell
  for (let i = mini + 1; i < stock_prices_yesterday.length; i += 1) {
  
    // Find largest number after purchase
    if (stock_prices_yesterday[i] > max) {
      maxi = i;
      max = stock_prices_yesterday[i];
    }
  
  }
  
  return max - min;
  
}

// Test cases
//console.log(bestProfit([1,2,3,4,5,6])); // 5
//console.log(bestProfit([6,5,4,3,2,1])); // 0
//console.log(bestProfit([2,1,5,0,10,1])); // 10
//console.log(bestProfit([5,4,3,7,9,8])); // 6

module.exports = bestProfit;
