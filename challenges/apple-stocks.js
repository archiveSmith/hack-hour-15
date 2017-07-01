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
    if (Array.isArray(stock_prices_yesterday)){

        let sortedArr = stock_prices_yesterday;
        let buyTime;
        let SellTime
        // sort to find highest and lowest
        sortedArr.sort((a,b)=>{return a - b});
        let lowest = sortedArr[0];
        let highest = sortedArr[sortedArr.length-1];
        // now indices are different so must search thru original to find times
        for (let i = 0; i<stock_prices_yesterday; i++){
                if (stock_prices_yesterday[i] === lowest){
                    buyTime = i;
                } else if (stock_prices_yesterday[i] === highest){
                    sellTime = i;
            }
        }
        // trying to think of how to recursively check next best temporal/value pairs
        if (buyTime <sellTime){
        return highest - lowest;
        }
    } else {
        return 0;
    }
}

module.exports = bestProfit;
