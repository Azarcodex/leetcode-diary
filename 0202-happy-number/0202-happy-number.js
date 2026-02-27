/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let visited = new Set()
    while (n !== 1) {
        if (visited.has(n)) return false
        visited.add(n)
        let num = n.toString().split("").reduce((acc, val) => acc + Number(val) * Number(val), 0)
        n = num
    }
    return true
};