function maxProfit(prices: number[]): number {
	let r = 0
	for (let i = 0; i < prices.length; i++) {
		if (prices[i + 1] > prices[i]) {
			r += prices[i + 1] - prices[i]
		}
	}
	return r
}
