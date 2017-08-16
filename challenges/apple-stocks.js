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
    // return 0 if no profiet OR if input is invalid 
    if(stock_prices_yesterday.length < 1) return 0; 

    // Store length of array for easier manipulation 
    const stocksLength = stock_prices_yesterday.length; 

    // We need to determine it's starting price & ending price 
    const startingPrice = stock_prices_yesterday[0]; 

    // We need to determine it's average price 
    const closingPrice = stock_prices_yesterday[stocksLength - 1]; 

    // You make the highest profit when the stock unit costs the most (you sell)
    // You make the best profit when you purchase at its lowest price 
    // Note: Sort array from lowest to highest 
    stock_prices_yesterday.sort(function(a, b) {
        return a - b;
    });
    // Lowest & Highest Prices: 
    const highestPrice = stock_prices_yesterday[stocksLength - 1]; 
    const lowestPrice = stock_prices_yesterday[0]; 

    // Determine the average price for 1 Apple Stock
    const sum = stock_prices_yesterday.reduce((a, b) => a + b, 0);
    const avgPrice = Math.floor(sum/avgPrice); 

    // To determine if profit was made, compare High and Low to starting price: 
    if ( highestPrice > startingPrice) {
        return highestPrice - startingPrice; 
    } else {
        return startingPrice - lowestPrice; 
    } 

    // What's the base price? (aka how much did I initially pay for my 1 Apple stock?)
}

module.exports = bestProfit;
