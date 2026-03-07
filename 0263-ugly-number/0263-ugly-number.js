/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if(n<=0) return false
    let primes = [2, 3, 5]

    for (let i of primes) {
        while (n % i === 0) {
            n = n / i
        }
    }
    return n === 1
};