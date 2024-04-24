function maxProfit(prices) {
    var r = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            r += prices[i + 1] - prices[i];
        }
    }
    return r;
}
