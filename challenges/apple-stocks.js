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
  if(!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) return 0;

  // let maxProf = 0;

  // for(let i = 0; i < stock_prices_yesterday.length-1; i += 1) {
  //   for(let j = i + 1; j < stock_prices_yesterday.length; j += 1) {
  //     if(stock_prices_yesterday[j] - stock_prices_yesterday[i] > maxProf) maxProf = stock_prices_yesterday[j] - stock_prices_yesterday[i]; 
  //   }
  // }
  // return maxProf;

  //better way : make obj with local peaks and valleys and compare those
  const peaks = {};
  const valleys = {};
  for(let i = 1; i < stock_prices_yesterday.length - 1; i += 1) {
    if (stock_prices_yesterday[i-1] < stock_prices_yesterday[i] > stock_prices_yesterday[i+1]) {
      peaks[i] = stock_prices_yesterday[i];
    } else if (stock_prices_yesterday[i-1] > stock_prices_yesterday[i] < stock_prices_yesterday[i+1]){
      valleys[i] = stock_prices_yesterday[i];
    }
  }
  let maxProf = 0;
  for(peak in peaks) {
    for (valley in valleys) {
      if(valley < peak) {
        if(peaks[peak] - valleys[valley] > maxProf) maxProf = peaks[peak] - valleys[valley]
      }
    }
  }
  return maxProf;
}

module.exports = bestProfit;
