/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let j, discount
    for (let i = 0; i < prices.length; i++) {
        j = i + 1
        discount = false
        while (discount !== true && j < prices.length) {
            if (prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j]
                discount = true
            }
            j++
        }
    }
    return prices
};