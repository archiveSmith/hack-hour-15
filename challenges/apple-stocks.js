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
  // return 0 if input is not array, empty array
  const prices = stock_prices_yesterday.slice()
  if (prices === undefined || prices.length === 0) return 0 
  
  // set highest and lowest to first element
  let high = prices[0]
  let low = prices[0]
  // set profit to 0
  let profit = 0

  // iterate through array starting from index 1
  prices.forEach(price =>{
    // if element higher than highest
    if (price > high) {
      // update higest to elem
      high = price
      // if highest - lowest > profile
      if (high - low > profit){
        // update profit(highest - lowest)
        profit = high - low
      }
    } else if (price < low){
      // else if element lower than lowest
      low = price
      high = price
      // update lowest to elem
      // update highest to elem
    }
  })
  return profit
}
// console.log(bestProfit([100, 0, 200, 10])) // 200
// console.log(bestProfit([0, 100, 0, 200, 10])) // 200
// console.log(bestProfit([0, 100, 0, 200, 10, 300])) // 300
// console.log(bestProfit([0, 10, 20, 30])) // 30
// console.log(bestProfit([30, 20, 10, 0])) // 0
// console.log(bestProfit([30, 20, 10, 0, 10])) // 10

module.exports = bestProfit;
