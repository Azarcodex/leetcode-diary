/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let pivot = new Array(n + 1).fill(0)

    for (let i = 1; i <= n; i++) {
        pivot[i] = pivot[i - 1] + i
    }
    let total = pivot[n]
    for (let j = 1; j <= n; j++) {
        let left = pivot[j]
        let right = total - pivot[j - 1]
        if (left === right) return j
    }
    return -1
};

