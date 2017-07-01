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

//start with opening price, that's your baseline.
// look for the highest value in the array, and that's your profit.

// need to consider undulating prices. reassign high price whenever lowest is found.

function bestProfit(stock_prices_yesterday) {
  //reassign reference because that var name is stupid.
  let spy = stock_prices_yesterday;
  if (!Array.isArray(spy) || spy.length < 2) return 0;

  //initialize all values to zeroith index.
  let hiPrice = spy[0];
  let lowPrice = spy[0];
  let profit = hiPrice - lowPrice;

  for (let i = 1; i< spy.length; i++) {
    let current = spy[i];
    if (current > hiPrice) {
      hiPrice = current;
    } else if (current < lowPrice){
      hiPrice = lowPrice = current;
    }

    if (hiPrice - lowPrice > profit) profit = hiPrice - lowPrice;
  }

  return profit;
}
//
// let arry = [100, 200, 300, 400, 500];
//
// let test = bestProfit(arry);
// console.log("Test1: linear growth arry ", test); // 400
//
// arry = [100, 50, 500, 100, 200];
// test = bestProfit(arry);
// console.log("Test2: undulating growth arry", test); // 450
//
// arry = [500, 400, 300, 200, 100];
// test = bestProfit(arry);
// console.log("Test3: losing arry ", test); // 0
//
// arry = [100, 500, 0, 200, 300, 700, 0, 100, 200, 300, 400, 500, 1000]; //1000
// test = bestProfit(arry);
// console.log("Test 3: crazy arry, ", test);
//
// arry = [100, 1000, 0, 300];
// test = bestProfit(arry);
// console.log("front loaded best profit ",test); // 900

module.exports = bestProfit;
