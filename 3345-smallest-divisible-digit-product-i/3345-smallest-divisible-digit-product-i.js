/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    // if (n === 1) return t
    let org
    let mul
    while (true) {
        org = n
        mul = 1
        while (org !== 0) {
            let res = org % 10
            mul *= res
            org = Math.floor(org / 10)
        }
        if (mul % t === 0) {
            return n
        }
        else {
            n++
        }
    }
};


// 2  1
