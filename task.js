function maxProfit(prices) {
    var min = prices[0];
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
}
