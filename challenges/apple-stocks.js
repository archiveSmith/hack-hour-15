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
 * Extra notes:
    Market closes at 4pm (6.5hours*60min=390min)
    difference between high and low points should be the max value possible for day trade
    //the following is a very obvious and easy way to solve.
    I'm sure it's not very efficient. Looking into other possible, more efficient solutions.
 */


function bestProfit(stock_prices_yesterday) {
  //Can't change sort bc current state of indices matter, save high and low val and indices
  let high = Math.max(stock_prices_yesterday);
  let low = Math.min(stock_prices_yesterday);
  let highInd = array.indexOf(high);
  let lowInd = array.indexOf(low);
  let output = high - low;

  //if the price only dropped, return message saying no profit available
  if(stock_prices_yesterday[0] <= high){
    return null;
  } else {
    console.log('The optimal profit attainable yesterday was ' + output + 'which would
    have been attained if you purchased at ' + lowInd + ' (' + low + ')' 'minutes after opening and sold at' +
    highInd + ' (' + high + ')' 'minutes after opening.')
    return output;
  }

}

module.exports = bestProfit;
