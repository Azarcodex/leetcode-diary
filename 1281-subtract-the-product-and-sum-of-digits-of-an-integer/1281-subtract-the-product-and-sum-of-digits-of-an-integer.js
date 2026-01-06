/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let product = 1, sum = 0
    while (n !== 0) {
        let rem = n % 10
        console.log(rem)
        sum += rem
        product *= rem
        n = Math.floor(n / 10)
    }
    return product - sum

};
