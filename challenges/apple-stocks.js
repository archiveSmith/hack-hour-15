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
function bestProfit(stocks) {
  if (!Array.isArray(stocks)) return 0;
  let highestDiff = 0;

  for (let a = 0; a < stocks.length; a += 1) {
    if (stocks[a] == null || typeof stocks[a] !== 'number') continue;

    for (let z = stocks.length - 1; z > a; z -= 1) {
      if (stocks[z] === null || typeof stocks[a] !== 'number') continue;

      if (stocks[a] < stocks[z]) {
        reduceBetween(a, z, stocks);

        if (stocks[z] - stocks[a] > highestDiff) {
          highestDiff = stocks[z] - stocks[a];
        }
      }
    }
  }

  return highestDiff;
}

// Removes any numbers between start and end, where n is >= start, and n is <= end
const reduceBetween = (start, end, array) => {
  for (let i = start + 1; i < end; i += 1) {
    if (array[i] >= array[start] && array[i] <= array[end]) array[i] = null;
  }
}

module.exports = bestProfit;
